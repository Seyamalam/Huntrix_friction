# How to Create a GPU-Optimized Machine Image with HashiCorp Packer on GCP

Source: https://www.freecodecamp.org/news/how-to-create-a-gpu-optimized-machine-image-with-hashicorp-packer-on-gcp/

Every time you spin up GPU infrastructure, you do the same thing: install CUDA drivers, DCGM, apply OS‑level GPU tuning, and fight dependency issues. Same old ritual every single time, wasting expensive cloud credits and getting frustrated before actual work begins.

In this article, you'll build a reusable GPU-optimized machine image using Packer, pre-loaded with NVIDIA drivers, CUDA Toolkit, NVIDIA Container Toolkit, DCGM, and system-level GPU tuning like persistence mode.

HashiCorp Packer >= 1.9

Google Compute Packer plugin (installed via packer init)

Optionally, the AWS Packer plugin can be used for EC2 builds by adding an amazon-ebs source to node.pkr.hcl

GCP project with Compute Engine API enabled (or AWS account with EC2 access)

GCP authentication (gcloud auth application-default login) or AWS credentials

Access to an NVIDIA GPU instance type (For example, A100, H100, L4 on GCP; p4d, p5, G6 on AWS)

To get started, you'll install Packer with the steps below if you're on macOS (or you can follow the official documentation for Linux and Windows installation guides).

First, you'll install the official Packer formula from the terminal.

Install the HashiCorp tap, a repository of all Hashicorp packages.

Now, install Packer with hashicorp/tap/packer.

With Packer installed, you'll create your project directory. For clean code and separation of concerns, your project directory should look like the below. Go ahead and create these files in your packer_demo folder using the command below:

Your file directory should look like this:

In your plugins.pkr.hcl file,, define your plugins in the packer block. The packer {} block contains Packer settings, including specifying a required plugin version. You'll find the required_plugins block in the Packer block, which specifies all the plugins required by the template to build your image. If you're on Azure or AWS, you can check for the latest plugin here.

Then, initialize your Packer plugin with the command below:

With your plugin initialized, you can now define your source block. The source block configures a specific builder plugin, which is then invoked by a build block. Source blocks contain your project ID, the zone where your machine will be created, the source_image_family (think of this as your base image, such as Debian, Ubuntu, and so on), and your source_image_project_id.

In GCP, each has an image project ID, such as "ubuntu-os-cloud" for Ubuntu. You'll set the machine type to a GPU machine type because you're building your base image for a GPU machine, so the machine on which it will be created needs to be able to run your commands.

Setting on_host_maintenance = "TERMINATE" on Google Cloud Compute Engine ensures that a VM instance stops instead of live-migrating during infrastructure maintenance. This is important when using GPUs or specialized hardware that can't migrate, preventing data corruption.

You'll define all your variables in the variable.pkr.hcl file, and set the values in the values.pkrvars.hcl. Remember to always add your values.pkrvars.hcl file to Gitignore.

values.pkrvars.hcl

Create build.pkr.hcl. The build block creates a temporary instance, runs provisioners, and produces an image.

Provisioners in this template are organized as follows:

First provisioner runs system updates and upgrades.

Second provisioner reboots the instance (expect_disconnect = true).

Third provisioner waits for the instance to come back (pause_before), then runs script/base.sh. This provisioner sets max_retries to handle transient SSH timeouts and pass environment variables for DRIVER_VERSION and CUDA_VERSION.

Lastly, you have the post-processor to tell you the image ID and completion status:

Now we'll go through the base script, and break down some parts of it.

Before installing NVIDIA drivers, the system needs kernel headers and build tools. The NVIDIA driver compiles a kernel module during installation via DKMS, so if the headers for your running kernel aren't present, the build will fail silently, and the driver won't load on boot.

This snippet downloads and installs NVIDIA’s official keyring package based on your OS Linux distribution, which adds the trusted signing keys needed for the system to verify CUDA packages.

Pinning the NVIDIA driver to a specific version ensures that the system always installs and keeps using exactly that driver version, even when newer drivers appear in the repository.

NVIDIA drivers are tightly coupled with CUDA toolkit versions, Kernel versions, and container runtimes like Docker or NVIDIA Container Toolkit

A mismatch, such as the system auto‑upgrading to a newer driver, can cause CUDA to stop working, break GPU acceleration, or make the machine image inconsistent across deployments.

The libnvidia-compute installs only the compute‑related user‑space libraries (CUDA driver components), while the nvidia-dkms-open; installs the open‑source NVIDIA kernel module, built locally via DKMS.

Together, these two packages give you a fully functional CUDA driver environment without any GUI or graphics dependencies.

Here, we're using NVIDIA’s compute‑only driver stack using the open‑source kernel modules, as it deliberately avoids installing any display-related components, which you don't need.

This method provides an installation module based on DKMS that's better aligned with Linux distros, as it's lightweight, and compute-focused.

This part of the script installs the CUDA Toolkit for the specified version and then makes sure that CUDA’s executables and libraries are available system‑wide for every user and every shell session.

It adds CUDA binaries to PATH, so commands like nvcc, cuda-gdb, and cuda-memcheck work without specifying full paths. It also adds CUDA libraries to LD_LIBRARY_PATH, so applications can find CUDA’s shared libraries at runtime.

This block installs the NVIDIA Container Toolkit and configures it so that containers (Docker or containerd) can access the GPU safely and correctly. It’s a critical step for Kubernetes GPU nodes, Docker GPU workloads, and any system that needs GPU acceleration inside containers.

This section covers the installation and validation of NVIDIA DCGM (Data Center GPU Manager), which is NVIDIA’s official management and telemetry framework for data center GPUs.

It offers health monitoring and diagnostics, telemetry (including temperature, clocks, power, and utilization), error reporting, and integration with Kubernetes, Prometheus, and monitoring agents. Your GPU monitoring stack relies on this.

The script extracts the installed version and checks that it meets the minimum required version for NVIDIA driver 590+. Then it enforces the version requirement. This prevents a mismatch between the GPU driver and DCGM, which would break monitoring and health checks. It also enables fabric manager for NVLink/NVswitches, if you're on a Multi‑GPU topologies like A100/H100 DGX or multi‑GPU servers.

The NVIDIA driver normally unloads itself when the GPU is idle. When a new workload starts, the driver must reload, reinitialize the GPU, and set up memory mappings. This adds a delay of a few hundred milliseconds to several seconds, depending on the GPU and system.

Enabling nvidia‑persistenced keeps the NVIDIA driver loaded in memory even when no GPU workloads are running.

This block applies a set of system‑level performance and stability tunings that are standard for high‑performance GPU servers, Kubernetes GPU nodes, and ML/AI workloads.

Each line targets a specific bottleneck or instability pattern that appears in real GPU production environments.

Swap and memory behavior: Disabling swap and setting vm.swappiness=0 prevents the kernel from pushing GPU‑bound processes into swap. GPU workloads are extremely sensitive to latency, and swapping can cause CUDA context resets and GPU driver timeouts.

Hugepages for large memory allocations: Setting vm.nr_hugepages=2048 allocates a pool of hugepages, which reduces TLB pressure for large contiguous memory allocations.

CUDA, NCCL, and deep‑learning frameworks frequently allocate large buffers, and hugepages reduce page‑table overhead, improving memory bandwidth and lowering latency for large tensor operations. This is especially useful on multi‑GPU servers.

CPU frequency governor: Installing cpupower and forcing the CPU governor to performance ensures the CPU stays at maximum frequency instead of scaling down.

GPU workloads often become CPU‑bound during Data preprocessing, Kernel launches, and NCCL communication. Keeping CPUs at full speed reduces jitter and improves throughput.

NUMA and topology tools: Installing numactl, libnuma-dev, and hwloc provides tools for pinning processes to NUMA nodes, understanding CPU–GPU affinity, and optimizing multi‑GPU placement.

Disabling irqbalance: Stopping and disabling irqbalance it lets the NVIDIA driver manage interrupt affinity. For GPU servers, irqbalance can incorrectly move GPU interrupts to suboptimal CPUs, causing higher latency and lower throughput.

Full base.sh script here:

Validate the template first, then run the build. Validation catches syntax or variable errors early, so the build doesn’t start on a broken config.

If validation succeeds, you’ll see a short confirmation like The configuration is valid.. After that, start the build. You should expect the process to create a temporary VM, run your provisioners, and produce an image:

The build typically takes 15–20 minutes, depending on network speed and package installs. Watch the Packer log for three key checkpoints:

Instance creation — confirms the temporary VM was provisioned.

Provisioner output — shows each script step (updates, reboot, script/base.sh) and any errors.

Image creation — indicates the build finished and an image artifact was written.

If the build fails, copy the failing provisioner’s log lines and re-run the build after fixing the script or variables. For quick troubleshooting, re-run the failing provisioner locally on a matching test VM to iterate faster.

Confirm the image exists in the GCP Console: Compute → Storage → Images and locate your newly created OS image.

Create a test VM from the image:

Once the instance is RUNNING, verify the NVIDIA driver and GPU are visible:

The nvidia-smi output confirms:

This is exactly what a healthy base image should look like. Notice Disp.A: Off? That confirms our compute-only driver choice is working — no display adapter is active.

Confirm the installed CUDA toolkit by running. nvcc --version. You can see that version 13.1 was installed as specified.

Let's confirm DCGM installation by running dcgmi discovery -l. Successful output indicates DCGM is running and communicating with the driver.

You now have a production‑grade, GPU‑optimized base image that includes the NVIDIA compute‑only driver built with open kernel modules, DCGM for monitoring, and the CUDA Toolkit. You also applied OS‑level tuning tailored to GPU compute workloads, providing a consistent, reproducible environment with no manual setup.

From here, you can extend the build by adding an application‑layer script to install frameworks such as PyTorch, TensorFlow, or vLLM, or create an instance template that uses this image to scale your GPU infrastructure.

The full Packer project includes additional scripts for training and inference workloads that you can use to extend your image.