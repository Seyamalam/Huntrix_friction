# Docker (software) - Wikipedia

Source: https://en.wikipedia.org/wiki/Docker_(software)

---

Software for deploying containerized applications

This article is about the containerization software. For the company, see

[Docker, Inc.](https://en.wikipedia.org/wiki/Docker,_Inc.)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/250px-Docker_%28container_engine%29_logo.svg.png)](https://en.wikipedia.org/wiki/File:Docker_(container_engine)_logo.svg)

Former logo

**Docker** is a set of products that uses [operating system-level virtualization](https://en.wikipedia.org/wiki/Operating_system-level_virtualization) to deliver software in packages called *[containers](https://en.wikipedia.org/wiki/Containerization_(computing))*. Docker automates the deployment of [applications](https://en.wikipedia.org/wiki/Application_software) within lightweight containers, enabling them to run consistently across different computing environments.

The core software that runs and manages these containers is called **Docker Engine**. Docker was first released in 2013 and continues to be developed by [Docker, Inc.](https://en.wikipedia.org/wiki/Docker,_Inc.) The platform includes both free and paid tiers.

[Solomon Hykes](https://en.wikipedia.org/wiki/Solomon_Hykes) [[fr](https://fr.wikipedia.org/wiki/Solomon_Hykes)] started the Docker project in France as an internal project within [dotCloud](https://en.wikipedia.org/wiki/DotCloud), a [platform-as-a-service](https://en.wikipedia.org/wiki/Platform_as_a_service) company.

dotCloud Inc. was founded by Kamel Founadi, Hykes, and Sebastien Pahl during the [Y Combinator](https://en.wikipedia.org/wiki/Y_Combinator) Summer 2010 startup incubator group and launched in 2011, and renamed to Docker Inc in 2013.

Docker debuted to the public in [Santa Clara](https://en.wikipedia.org/wiki/Santa_Clara,_California) at [PyCon](https://en.wikipedia.org/wiki/PyCon) in 2013. It was released as [open-source](https://en.wikipedia.org/wiki/Open-source) in March 2013. At the time, it used [LXC](https://en.wikipedia.org/wiki/LXC) as its default execution environment. One year later, with the release of version 0.9, Docker replaced LXC with its own component, *libcontainer*, which was written in the [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) programming language.

In 2017, Docker created the [Moby project](/w/index.php?title=Moby_project&action=edit&redlink=1) [[wd](https://www.wikidata.org/wiki/Special:EntityPage/Q96276695#sitelinks-wikipedia)] for open research and development. In March 2026, the [Communications of the ACM](https://en.wikipedia.org/wiki/Communications_of_the_ACM) featured Docker as the cover article in a retrospective article of the past decade.

* September 19, 2013: [Red Hat](https://en.wikipedia.org/wiki/Red_Hat) and Docker announced a collaboration around [Fedora](https://en.wikipedia.org/wiki/Fedora_(operating_system)), [Red Hat Enterprise Linux](https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux) (RHEL), and [OpenShift](https://en.wikipedia.org/wiki/OpenShift).
* October 15, 2014: [Microsoft](https://en.wikipedia.org/wiki/Microsoft) announced the integration of the Docker engine into [Windows Server](https://en.wikipedia.org/wiki/Windows_Server), as well as native support for the Docker client role in Windows.
* November 2014: Docker container services were announced for the [Amazon Elastic Compute Cloud](https://en.wikipedia.org/wiki/Amazon_Elastic_Compute_Cloud) (EC2).
* November 10, 2014: Docker announced a partnership with [Stratoscale](https://en.wikipedia.org/wiki/Stratoscale).
* December 4, 2014: [IBM](https://en.wikipedia.org/wiki/IBM) announced a strategic partnership with Docker that enables Docker to integrate more closely with the IBM Cloud.
* June 22, 2015: Docker and several other companies announced that they were working on a new vendor and operating-system-independent standard for software containers.
* December 2015: [Oracle Cloud](https://en.wikipedia.org/wiki/Oracle_Cloud) added Docker container support after acquiring [StackEngine](https://en.wikipedia.org/wiki/StackEngine), a Docker container startup.
* March 2016: Docker for Mac and Windows betas released.
* April 2016: Windocks, an [independent software vendor](https://en.wikipedia.org/wiki/Independent_software_vendor) released a port of Docker's open source project to Windows, supporting Windows Server 2012 R2 and Server 2016, with all editions of SQL Server 2008 onward.
* May 2016: analysis showed the following organizations as main contributors to Docker: The Docker team, [Cisco](https://en.wikipedia.org/wiki/Cisco), [Google](https://en.wikipedia.org/wiki/Google), [Huawei](https://en.wikipedia.org/wiki/Huawei), [IBM](https://en.wikipedia.org/wiki/IBM), [Microsoft](https://en.wikipedia.org/wiki/Microsoft), and [Red Hat](https://en.wikipedia.org/wiki/Red_Hat).
* June 8, 2016: Microsoft announced that Docker could now be used natively on [Windows 10](https://en.wikipedia.org/wiki/Windows_10).
* January 2017: An analysis of [LinkedIn](https://en.wikipedia.org/wiki/LinkedIn) profile mentions showed Docker presence grew by 160% in 2016.
* May 6, 2019: Microsoft announced the second version of [Windows Subsystem for Linux](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) (WSL). Docker, Inc. announced that it had started working on a version of Docker for Windows to run on WSL 2. In particular, this meant Docker could run on Windows 10 Home (previously it was limited to Windows Pro and Enterprise since it used [Hyper-V](https://en.wikipedia.org/wiki/Hyper-V)).
* August 2020: Microsoft announced a backport of WSL2 to Windows 10 versions 1903 and 1909 (previously WSL2 was available only on version 2004) and Docker developers announced availability of Docker for these platforms.
* August 2021: Docker Desktop for Windows and MacOS was no longer available free of charge for enterprise users. Docker ended free Docker Desktop use for larger business customers and replaced its Free Plan with a Personal Plan. Docker Engine on Linux distributions remained unaffected.
* December 2023: Docker acquired AtomicJar to expand its testing capabilities.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/09/Docker-linux-interfaces.svg/250px-Docker-linux-interfaces.svg.png)](https://en.wikipedia.org/wiki/File:Docker-linux-interfaces.svg)

Docker can use different interfaces to access virtualization features of the Linux kernel.

Containers are isolated from one another and bundle their own software, [libraries](https://en.wikipedia.org/wiki/Library_(computing)) and configuration files; they can communicate with each other through well-defined channels. Because all of the containers share the services of a single [operating system kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)), they use fewer resources than [virtual machines](https://en.wikipedia.org/wiki/Virtual_machine).

Docker can package an application and its dependencies in a virtual container that can, in principle, run on any [Linux](https://en.wikipedia.org/wiki/Linux), [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), or [macOS](https://en.wikipedia.org/wiki/MacOS) computer. This enables the application to run in a variety of locations, such as [on-premises](https://en.wikipedia.org/wiki/On-premises_software), in [public](https://en.wikipedia.org/wiki/Public_cloud) *(see [decentralized computing](https://en.wikipedia.org/wiki/Decentralized_computing), [distributed computing](https://en.wikipedia.org/wiki/Distributed_computing), and [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing))* or [private cloud](https://en.wikipedia.org/wiki/Private_cloud). When running on Linux, Docker uses the resource isolation features of the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel) (such as [cgroups](https://en.wikipedia.org/wiki/Cgroups) and kernel [namespaces](https://en.wikipedia.org/wiki/Linux_namespaces)) and a [union-capable file system](https://en.wikipedia.org/wiki/Union_mount) (such as [OverlayFS](https://en.wikipedia.org/wiki/OverlayFS)) to allow containers to run within a single Linux instance, avoiding the overhead of starting and maintaining [virtual machines](https://en.wikipedia.org/wiki/Virtual_machine). Docker on macOS uses a Linux [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) to run the containers.

Because Docker containers are [lightweight](https://en.wikipedia.org/wiki/Light-weight_Linux_distribution), a single server or virtual machine can run several containers simultaneously. A 2018 analysis found that a typical Docker use case involves running eight containers per host, and that a quarter of analyzed organizations run 18 or more per host. It can also be installed on a single board computer like the [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi).

The Linux kernel's support for namespaces mostly isolates an application's view of the operating environment, including process trees, network, user IDs and mounted file systems, while the kernel's cgroups provide resource limiting for memory and CPU. Since version 0.9, Docker includes its own component (called libcontainer) to use virtualization facilities provided directly by the Linux kernel, in addition to using abstracted virtualization interfaces via [libvirt](https://en.wikipedia.org/wiki/Libvirt), [LXC](https://en.wikipedia.org/wiki/LXC) and [systemd-nspawn](https://en.wikipedia.org/wiki/Systemd-nspawn).

Docker implements a high-level [API](https://en.wikipedia.org/wiki/API) to provide lightweight containers that run processes in isolation.

The Docker software as a service offering consists of three components:

Software
:   The Docker *[daemon](https://en.wikipedia.org/wiki/Daemon_(computing))*, called `dockerd`, is a persistent process that manages Docker containers and handles container objects. The daemon listens for requests that are sent via the Docker Engine API. The Docker client program, called `docker`, provides a [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface) (CLI) that allows users to interact with Docker daemons.

Objects
:   Docker objects are various entities used to assemble an application in Docker. The main classes of Docker objects are images, containers, and services.

    * A Docker *container* is a standardized, encapsulated environment that runs applications. A container is managed using the Docker API or [CLI](https://en.wikipedia.org/wiki/Command-line_interface).
    * A Docker *image* is a read-only template used to build containers. Images are used to store and ship applications.
    * A Docker *service* allows containers to be scaled across multiple Docker daemons. The result is known as a *swarm*, a set of cooperating daemons that communicate through the Docker API.

Registries
:   A Docker registry is a repository for Docker images. Docker clients connect to registries to download ("pull") images for use or upload ("push") images that they have built. Registries can be public or private. The main public registry is Docker Hub. Docker Hub is the default registry where Docker looks for images. Docker registries also allow the creation of notifications based on events.

A Dockerfile is a text file that commonly specifies several aspects of a Docker container: the [Linux distribution](https://en.wikipedia.org/wiki/Linux_distribution), installation commands for the programming language runtime environment and application source code.

An example of a Dockerfile:

```
ARG CODE_VERSION=latest
FROM ubuntu:${CODE_VERSION}
COPY ./examplefile.txt /examplefile.txt
ENV MY_ENV_VARIABLE="example_value"
RUN apt-get update

# Mount a directory from the Docker volume
# Note: This is usually specified in the 'docker run' command.
VOLUME ["/myvolume"]

# Expose a port (22 for SSH)
EXPOSE 22

```

*Docker Compose* is a tool for defining and running multi-container Docker applications. It uses [YAML](https://en.wikipedia.org/wiki/YAML) files to configure the application's services and performs the creation and start-up process of all the containers with a single command. The `docker compose` CLI utility allows users to run commands on multiple containers at once; for example, building images, [scaling](https://en.wikipedia.org/wiki/Scalability) containers, running containers that were stopped, and more. Commands related to image manipulation, or user-interactive options, are not relevant in Docker Compose because they address one container. The `docker-compose.yml` file is used to define an application's services and includes various configuration options. For example, the `build` option defines configuration options such as the Dockerfile path, the `command` option allows one to override default Docker commands, and more. The first public beta version of Docker Compose (version 0.0.1) was released on December 21, 2013. The first production-ready version (1.0) was made available on October 16, 2014.

*Docker Swarm* provides native [clustering](https://en.wikipedia.org/wiki/Computer_cluster) functionality for Docker containers, which turns a group of Docker engines into a single virtual Docker engine. In Docker 1.12 and higher, Swarm mode is integrated with Docker Engine. The `docker swarm` CLI utility allows users to run Swarm containers, create discovery tokens, list nodes in the cluster, and more. The `docker node` CLI utility allows users to run various commands to manage nodes in a swarm, for example, listing the nodes in a swarm, updating nodes, and removing nodes from the swarm. Docker manages swarms using the [Raft](https://en.wikipedia.org/wiki/Raft_(computer_science)) [consensus](https://en.wikipedia.org/wiki/Consensus_(computer_science)) algorithm. According to Raft, for an update to be performed, the majority of Swarm nodes need to agree on the update. In addition to the `docker swarm` CLI, `docker stack` is a tool designed to manage Swarm services with greater flexibility. It can use a configuration file very similar to a `docker-compose.yml`, with a few nuances. Using `docker stack` instead of `docker compose` offers several advantages, such as the ability to manage a Swarm cluster across multiple machines or the capability to work with `docker secret` combined with `docker context`, a feature that allows executing Docker commands on a remote host, enabling remote container management.

*Docker Volume* facilitates the independent persistence of data, allowing data to remain even after the container is deleted or re-created.

* The Docker Engine is licensed under the [Apache License 2.0](https://en.wikipedia.org/wiki/Apache_License_2.0). Docker Desktop distributes some components that are licensed under the [GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License). Docker Desktop is not free for large enterprises.
* The Dockerfile files can be licensed under an open-source license themselves. The scope of such a license statement is only the Dockerfile and not the container image.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

1. **[^](#cite_ref-docker-1.0-release-article_1-0)** Barbier, Julien (June 9, 2014). ["It's Here: Docker 1.0"](https://www.docker.com/blog/its-here-docker-1-0/). *Docker*. Docker, Inc. Retrieved September 30, 2019.
2. **[^](#cite_ref-wikidata-a4d38980267f582000b4bf2c983ea2f9c819641c-v20_2-0)** ["v29.4.1"](https://github.com/moby/moby/releases/tag/docker-v29.4.1). April 20, 2026. Retrieved April 21, 2026.
3. **[^](#cite_ref-source-code_3-0)** ["Docker source code"](https://github.com/docker/distribution). *docker/distribution repo*. Docker, Inc. October 12, 2015. Retrieved October 24, 2015 – via [GitHub](https://en.wikipedia.org/wiki/GitHub).
4. **[^](#cite_ref-4)** ["Docker Desktop license agreement"](https://docs.docker.com/subscription/desktop-license/). September 11, 2024.
5. **[^](#cite_ref-dotcloud_5-0)** ["One home for all your apps"](https://web.archive.org/web/20140517031011/https://www.dotcloud.com/). *dotcloud.com*. Archived from [the original](https://www.dotcloud.com/) on May 17, 2014. Retrieved May 8, 2014.
6. **[^](#cite_ref-Auto38-4_6-0)** Hykes, Solomon (March 28, 2018). ["Au Revoir"](https://www.docker.com/blog/au-revoir/). *docker.com*. Retrieved January 23, 2021.`{{cite web}}`: CS1 maint: deprecated archival service ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_deprecated_archival_service))
7. **[^](#cite_ref-Auto38-5_7-0)** ["About the dotCloud Platform"](https://web.archive.org/web/20140702231323/https://www.dotcloud.com/about.html). *dotCloud*. Archived from [the original](https://www.dotcloud.com/about.html) on July 2, 2014. Retrieved June 23, 2019.
8. **[^](#cite_ref-docker-announcement_8-0)** ["The future of Linux Containers"](https://www.youtube.com/watch?v=wW9CAH9nSLs). *DotCloud Channel*. March 21, 2013. Retrieved July 13, 2018 – via [YouTube](https://en.wikipedia.org/wiki/YouTube).
9. ^ [***a***](#cite_ref-infoq-2013-03_9-0) [***b***](#cite_ref-infoq-2013-03_9-1) Avram, Abel (March 27, 2013). ["Docker: Automated and Consistent Software Deployments"](http://www.infoq.com/news/2013/03/Docker). *InfoQ*. Retrieved August 9, 2013.
10. ^ [***a***](#cite_ref-zdnet-7000030397_10-0) [***b***](#cite_ref-zdnet-7000030397_10-1) Vaughan-Nichols, Steven J. (June 11, 2014). ["Docker libcontainer unifies Linux container powers"](https://www.zdnet.com/article/docker-libcontainer-unifies-linux-container-powers/). *[ZDNet](https://en.wikipedia.org/wiki/ZDNet)*. Retrieved July 30, 2014.
11. **[^](#cite_ref-infoq-2014-03_11-0)** Swan, Chris (March 13, 2014). ["Docker drops LXC as default execution environment"](http://www.infoq.com/news/2014/03/docker_0_9). *InfoQ*. Retrieved January 20, 2015.
12. **[^](#cite_ref-moby_12-0)** ["Demystifying the Relationship Between Moby & Docker – Welcome to Collabnix"](https://collabnix.com/demystifying-the-relationship-between-moby-docker/). May 6, 2017.
13. **[^](#cite_ref-13)** [Madhavapeddy, Anil](https://en.wikipedia.org/wiki/Anil_Madhavapeddy); Scott, David J.; Cormack, Justin (March 1, 2026). ["A Decade of Docker Containers"](https://dl.acm.org/doi/10.1145/3761803). *Communications of the ACM*. **69** (3): 56–65. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3761803](https://doi.org/10.1145%2F3761803). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0001-0782](https://search.worldcat.org/issn/0001-0782).
14. **[^](#cite_ref-techcrunch-2013-09_14-0)** ["DotCloud Pivots And Wins Big With Docker, The Cloud Service Now Part Of Red Hat OpenShift"](https://techcrunch.com/2013/09/19/dotcloud-pivots-and-wins-big-with-docker-the-cloud-service-now-part-of-red-hat-openshift/). *[TechCrunch](https://en.wikipedia.org/wiki/TechCrunch)*. September 19, 2013. Retrieved January 20, 2014.
15. **[^](#cite_ref-docker-windows-server_15-0)** [Foley, Mary Jo](https://en.wikipedia.org/wiki/Mary_Jo_Foley) (October 15, 2014). ["Docker container support coming to Microsoft's next Windows Server release"](https://www.zdnet.com/article/docker-container-support-coming-to-microsofts-next-windows-server-release/). *[ZDNet](https://en.wikipedia.org/wiki/ZDNet)*. Retrieved October 16, 2014.
16. **[^](#cite_ref-docker-microsoft_16-0)** Guthrie, Scott (October 15, 2014). ["Docker and Microsoft: Integrating Docker with Windows Server and Microsoft Azure"](https://weblogs.asp.net/scottgu/docker-and-microsoft-integrating-docker-with-windows-server-and-microsoft-azure). *ScottGu's Blog*. Microsoft. Retrieved January 12, 2015.
17. **[^](#cite_ref-amazon-ec2_17-0)** Barr, Jeff (November 13, 2014). ["Amazon EC2 Container Service (ECS) – Container Management for the AWS Cloud"](https://aws.amazon.com/blogs/aws/cloud-container-management/). *Amazon Web Services Blog*. Retrieved April 29, 2017.
18. **[^](#cite_ref-stratoscale_18-0)** Rath, John (November 10, 2014). ["Stratoscale Raises $32M to Build Docker-Supporting OpenStack Clouds on Commodity Servers"](http://www.datacenterknowledge.com/archives/2014/11/10/stratoscale-raises-32m-supports-docker-containers-openstack/). Retrieved January 3, 2016.
19. **[^](#cite_ref-ibm-partnership_19-0)** ["IBM and Docker Announce Strategic Partnership to Deliver Enterprise Applications in the Cloud and On Prem"](https://web.archive.org/web/20150110041918/http://www-03.ibm.com/press/us/en/pressrelease/45597.wss). [IBM](https://en.wikipedia.org/wiki/IBM). December 4, 2014. Archived from [the original](https://www-03.ibm.com/press/us/en/pressrelease/45597.wss) on January 10, 2015. Retrieved April 20, 2015.
20. **[^](#cite_ref-common-container-standard_20-0)** Lardinois, Frederic (June 22, 2015). ["Docker, CoreOS, Google, Microsoft, Amazon And Others Come Together To Develop Common Container Standard"](https://techcrunch.com/2015/06/22/docker-coreos-google-microsoft-amazon-and-others-agree-to-develop-common-container-standard/#.pvelx1:NDMH). *[TechCrunch](https://en.wikipedia.org/wiki/TechCrunch)*. Retrieved August 8, 2015.
21. **[^](#cite_ref-open-container-project_21-0)** Siluk, Shirley (June 22, 2015). ["Docker, Tech Giants Team on Open Container Project"](https://web.archive.org/web/20150923203643/http://www.cio-today.com/article/index.php?story_id=112003LU9CSG). *cio-today.com*. Archived from [the original](http://www.cio-today.com/article/index.php?story_id=112003LU9CSG) on September 23, 2015. Retrieved August 8, 2015.
22. **[^](#cite_ref-22)** McLaughlin, Kevin (December 22, 2015). ["Oracle Acquires Docker Container Startup StackEngine, Plans Austin-Based Cloud Computing Center"](https://www.crn.com/news/cloud/300079216/oracle-acquires-docker-container-startup-stackengine-plans-austin-based-cloud-computing-center.htm). *CRN*. Retrieved January 13, 2022.
23. **[^](#cite_ref-23)** ["Docker for Mac and Windows Beta: the simplest way to use Docker on your laptop"](https://web.archive.org/web/20160324150553/https://blog.docker.com/2016/03/docker-for-mac-windows-beta/). *Docker Blog*. March 24, 2016. Archived from [the original](https://blog.docker.com/2016/03/docker-for-mac-windows-beta/) on March 24, 2016. Retrieved March 11, 2026.
24. **[^](#cite_ref-24)** [Madhavapeddy, Anil](https://en.wikipedia.org/wiki/Anil_Madhavapeddy); Scott, David J.; Ferris, Patrick; Gibb, Ryan T.; Gazagnaire, Thomas (August 5, 2025). ["Functional Networking for Millions of Docker Desktops (Experience Report)"](https://dl.acm.org/doi/10.1145/3747525). *Proceedings of the ACM on Programming Languages*. **9** (ICFP): 597–615. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3747525](https://doi.org/10.1145%2F3747525). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2475-1421](https://search.worldcat.org/issn/2475-1421).
25. **[^](#cite_ref-InfoWorld-Windocks_25-0)** Yegulalp, Serdar (April 4, 2016). ["Windocks does what Docker and Microsoft can't do"](https://www.infoworld.com/article/3051588/application-virtualization/windocks-does-what-docker-and-microsoft-cant-do.html). *[InfoWorld](https://en.wikipedia.org/wiki/InfoWorld)*. Retrieved October 27, 2018.
26. **[^](#cite_ref-gist-project-stats_26-0)** ["Docker – Updated project statistics"](https://gist.github.com/icecrime/18d72202f4569a0cab1ee60f7583425f). *[GitHub Gist](https://en.wikipedia.org/wiki/GitHub#Gist)*. Retrieved August 22, 2016.
27. **[^](#cite_ref-win10-insider-preview_27-0)** Sarkar, Dona (June 8, 2016). ["Announcing Windows 10 Insider Preview Build 14361"](https://blogs.windows.com/windowsexperience/2016/06/08/announcing-windows-10-insider-preview-build-14361/). *Windows Blogs*. [Microsoft](https://en.wikipedia.org/wiki/Microsoft). Retrieved June 19, 2016.
28. **[^](#cite_ref-linkedin-pulse_28-0)** Mullany, Michael. ["Docker Momentum Analysis 2016"](https://www.linkedin.com/pulse/docker-momentum-2016-analysis-michael-mullany). *[LinkedIn Pulse](https://en.wikipedia.org/wiki/LinkedIn_Pulse)*. Retrieved January 5, 2017.
29. **[^](#cite_ref-Vaughan-Nichols_29-0)** Vaughan-Nichols, Steven (June 18, 2019). ["Docker embraces Windows Subsystem for Linux 2"](https://www.zdnet.com/article/docker-embraces-windows-subsystem-for-linux-2/). *[ZDNet](https://en.wikipedia.org/wiki/ZDNet)*. [CBS Interactive](https://en.wikipedia.org/wiki/CBS_Interactive).
30. **[^](#cite_ref-WSL2-backport_30-0)** ["WSL 2 Support is coming to Windows 10 Versions 1903 and 1909"](https://devblogs.microsoft.com/commandline/wsl-2-support-is-coming-to-windows-10-versions-1903-and-1909/). *Windows Command Line*. August 20, 2020. Retrieved August 21, 2020.
31. **[^](#cite_ref-docker-backport_31-0)** ["Docker Desktop & WSL 2 - Backport Update"](https://www.docker.com/blog/docker-desktop-wsl-2-backport-update/). *Docker Blog*. August 20, 2020. Retrieved August 21, 2020.
32. **[^](#cite_ref-32)** Carey, Scott (August 31, 2021). ["Docker Desktop is no longer free for enterprise users"](https://www.infoworld.com/article/3630393/docker-desktop-is-no-longer-free-for-enterprise-users.html). *InfoWorld*. Retrieved October 18, 2021.
33. **[^](#cite_ref-33)** Miller, Ron (December 11, 2023). ["Docker acquires AtomicJar, a testing startup that raised $25M in January"](https://techcrunch.com/2023/12/11/docker-acquires-atomicjar-a-testing-startup-that-raised-25m-in-january/). *TechCrunch*. Retrieved December 13, 2023.
34. ^ [***a***](#cite_ref-docker-blog-2014-03_34-0) [***b***](#cite_ref-docker-blog-2014-03_34-1) ["Docker 0.9: Introducing execution drivers and libcontainer"](http://blog.docker.com/2014/03/docker-0-9-introducing-execution-drivers-and-libcontainer/). *Docker Blog*. Docker, Inc. March 10, 2014. Retrieved January 20, 2015.
35. **[^](#cite_ref-Auto38-1_35-0)** ["Use containers to Build, Share and Run your applications"](https://www.docker.com/resources/what-container/). *docker.com*.
36. **[^](#cite_ref-what-is-a-container_36-0)** ["What is a Container?"](https://www.docker.com/resources/what-container). *docker.com*. [Docker, Inc.](https://en.wikipedia.org/wiki/Docker,_Inc.) Retrieved May 13, 2019.
37. ^ [***a***](#cite_ref-Linux_37-0) [***b***](#cite_ref-Linux_37-1) Noyes, Katherine (August 1, 2013). ["Docker: A 'Shipping Container' for Linux Code"](https://web.archive.org/web/20130808043357/http://www.linux.com/news/enterprise/cloud-computing/731454-docker-a-shipping-container-for-linux-code/). *[Linux.com](https://en.wikipedia.org/wiki/Linux.com)*. Archived from [the original](http://www.linux.com/news/enterprise/cloud-computing/731454-docker-a-shipping-container-for-linux-code) on August 8, 2013. Retrieved August 9, 2013.
38. **[^](#cite_ref-select-storage-driver_38-0)** ["Select a storage driver documentation"](https://docs.docker.com/engine/userguide/storagedriver/selectadriver/). *Docker documentation*. Retrieved December 7, 2016.`{{cite web}}`: CS1 maint: deprecated archival service ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_deprecated_archival_service))
39. **[^](#cite_ref-docker-for-mac_39-0)** ["Get started with Docker for Mac"](https://docs.docker.com/docker-for-mac/). *docker.com*. Docker, Inc. Retrieved September 27, 2018.
40. **[^](#cite_ref-Chris_K.,_Poweruser_2019_40-0)** K., Chris (14 January 2019). ["Lightweight Windows containers: Using Docker process isolation in Windows 10"](https://poweruser.blog/lightweight-windows-containers-using-docker-process-isolation-in-windows-10-62519be76c8c). *Poweruser*. Retrieved 2 August 2019. "more "lightweight" real containers (via so called process-isolation), where the containerized processes are running directly on the host system — all processes on the host and in the containers are sharing the same Windows kernel. This is similar to how containers on Linux work."
41. **[^](#cite_ref-datadog_41-0)** ["8 surprising facts about real Docker adoption"](https://www.datadoghq.com/docker-adoption/). *Datadog*. June 2018. Retrieved September 4, 2019.
42. **[^](#cite_ref-42)** Gupta, Devender (October 13, 2022). ["How to Install Docker on Raspberry Pi"](https://web.archive.org/web/20250214110643/https://gizmoxo.com/install-docker-on-raspberry-pi/). *Gizmoxo*. Archived from the original on February 14, 2025. Retrieved October 15, 2022.`{{cite web}}`: CS1 maint: bot: original URL status unknown ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_bot:_original_URL_status_unknown))
43. **[^](#cite_ref-kernel-keyrings_43-0)** Walsh, Dan (September 15, 2014). ["Yet Another Reason Containers Don't Contain: Kernel Keyrings"](http://www.projectatomic.io/blog/2014/09/yet-another-reason-containers-don-t-contain-kernel-keyrings/). *projectatomic.io*. Retrieved April 13, 2015.
44. **[^](#cite_ref-limit-resources_44-0)** ["Limit a container's resources"](https://docs.docker.com/config/containers/resource_constraints/). *Docker Documentation*. Retrieved March 7, 2018.
45. **[^](#cite_ref-libcontainer_45-0)** ["libcontainer – reference implementation for containers"](https://github.com/docker/libcontainer/blob/master/README.md). *docker/libcontainer repo*. Docker, Inc. Retrieved July 30, 2014 – via [GitHub](https://en.wikipedia.org/wiki/GitHub).
46. ^ [***a***](#cite_ref-docker-overview_46-0) [***b***](#cite_ref-docker-overview_46-1) [***c***](#cite_ref-docker-overview_46-2) [***d***](#cite_ref-docker-overview_46-3) [***e***](#cite_ref-docker-overview_46-4) [***f***](#cite_ref-docker-overview_46-5) [***g***](#cite_ref-docker-overview_46-6) ["Docker overview"](https://docs.docker.com/engine/docker-overview/). *Docker Documentation*. Docker, Inc. Retrieved February 26, 2018.
47. **[^](#cite_ref-dockerd_47-0)** ["dockerd"](https://docs.docker.com/engine/reference/commandline/dockerd). *Docker Documentation*. Docker, Inc. Retrieved February 26, 2018.
48. **[^](#cite_ref-cli-usage_48-0)** ["Use the Docker command line"](https://docs.docker.com/engine/reference/commandline/cli/). *Docker Documentation*. Docker, Inc. Retrieved February 26, 2018.
49. **[^](#cite_ref-digitalocean_49-0)** ["The Docker Ecosystem: An Introduction to Common Components"](https://www.digitalocean.com/community/tutorials/the-docker-ecosystem-an-introduction-to-common-components). *www.digitalocean.com*. Retrieved February 26, 2018.
50. **[^](#cite_ref-docker-registry_50-0)** ["About Registry"](https://docs.docker.com/registry/introduction/). *Docker Documentation*. Docker, Inc. Retrieved February 26, 2018.
51. **[^](#cite_ref-Auto38-2_51-0)** ["Work with notifications"](https://docs.docker.com/registry/notifications/). March 2, 2019.
52. **[^](#cite_ref-52)** ["Dockerfile reference"](https://docs.docker.com/engine/reference/builder/). *Docker Documentation*. November 14, 2023. Retrieved November 30, 2023.
53. **[^](#cite_ref-compose-overview_53-0)** ["Overview of Docker Compose"](https://docs.docker.com/compose/overview/). *Docker Documentation*. Docker, Inc. Retrieved July 6, 2017.
54. **[^](#cite_ref-compose-cli-ref_54-0)** ["Compose command-line reference"](https://docs.docker.com/compose/reference/). *Docker Documentation*. Docker, Inc. Retrieved February 28, 2018.
55. **[^](#cite_ref-codeship_55-0)** ["Orchestrate Containers for Development with Docker Compose"](https://blog.codeship.com/orchestrate-containers-for-development-with-docker-compose/). *via @codeship*. May 27, 2015. Retrieved February 28, 2018.
56. **[^](#cite_ref-compose-v3-ref_56-0)** ["Compose file version 3 reference"](https://docs.docker.com/compose/compose-file/). *Docker Documentation*. Docker, Inc. Retrieved February 28, 2018.
57. **[^](#cite_ref-release-0.0.1_57-0)** Firshman, Ben (December 21, 2013). ["Release 0.0.1"](https://github.com/docker/compose/releases/tag/0.0.1). *docker/compose*. [Docker, Inc.](https://en.wikipedia.org/wiki/Docker,_Inc.) – via [GitHub](https://en.wikipedia.org/wiki/GitHub).
58. **[^](#cite_ref-release-1.0.0_58-0)** Prasad, Aanand (October 16, 2014). ["Release 1.0.0"](https://github.com/docker/compose/releases/tag/1.0.0). *docker/compose*. [Docker, Inc.](https://en.wikipedia.org/wiki/Docker,_Inc.) – via [GitHub](https://en.wikipedia.org/wiki/GitHub).
59. **[^](#cite_ref-container-orchestration-tools_59-0)** ["8 Container Orchestration Tools to Know"](https://www.linux.com/news/8-open-source-CONTAINER-ORCHESTRATION-TOOLS-KNOW). *[Linux.com](https://en.wikipedia.org/wiki/Linux.com)*. April 12, 2017. Retrieved July 6, 2017.
60. **[^](#cite_ref-docker-swarm_60-0)** ["Docker Swarm"](https://docs.docker.com/swarm/). *Docker Documentation*. Docker, Inc. Retrieved July 6, 2017.
61. **[^](#cite_ref-Auto38-3_61-0)** ["Docker swarm"](https://docs.docker.com/engine/reference/commandline/swarm/). June 4, 2021.
62. **[^](#cite_ref-swarm-cli-ref_62-0)** ["Swarm command-line reference"](https://docs.docker.com/swarm/reference/). *Docker Documentation*. Docker, Inc. Retrieved February 28, 2018.
63. **[^](#cite_ref-docker-node_63-0)** ["docker node"](https://docs.docker.com/engine/reference/commandline/node/). *Docker Documentation*. Retrieved February 28, 2018.
64. **[^](#cite_ref-aquasec_64-0)** ["Docker Swarm 101"](https://www.aquasec.com/cloud-native-academy/docker-container/docker-swarm/). *aquasec.com*. Retrieved February 28, 2018.
65. **[^](#cite_ref-raft_65-0)** ["Raft Consensus Algorithm"](https://raft.github.io/). *raft.github.io*. Retrieved February 28, 2018.
66. **[^](#cite_ref-myunidockerguide2_66-0)** ["Docker Desktop & Docker Guides"](https://web.archive.org/web/20210425175919/https://dockerguide.com/volume). *Docker Guide*. April 25, 2021. Archived from [the original](https://dockerguide.com/volume) on April 25, 2021. Retrieved April 25, 2021.
67. **[^](#cite_ref-67)** ["Get Docker"](https://docs.docker.com/get-docker/). September 11, 2024.