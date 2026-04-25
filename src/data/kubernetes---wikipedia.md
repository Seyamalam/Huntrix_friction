# Kubernetes - Wikipedia

Source: https://en.wikipedia.org/wiki/Kubernetes

---

Open-source container software

**Kubernetes** (), also known as **K8s,** is an [open-source](https://en.wikipedia.org/wiki/Open-source_software) [container](https://en.wikipedia.org/wiki/Containerization_(computing)) [orchestration](https://en.wikipedia.org/wiki/Orchestration_(computing)) system for automating [software deployment](https://en.wikipedia.org/wiki/Software_deployment), scaling, and management. Originally designed by [Google](https://en.wikipedia.org/wiki/Google), the project is now maintained by a worldwide community of contributors, and the trademark is held by the [Cloud Native Computing Foundation](https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation).

The name *Kubernetes* comes from the [Ancient Greek](https://en.wikipedia.org/wiki/Ancient_Greek) term κυβερνήτης, *kubernḗtēs* (helmsman, pilot), which is also the origin of the words *[cybernetics](https://en.wikipedia.org/wiki/Cybernetics)* and (through Latin) *[governor](https://en.wikipedia.org/wiki/Governor)*. "Kubernetes" is often abbreviated with the [numerical contraction](https://en.wikipedia.org/wiki/Numeronym) "K8s", meaning "the letter K, followed by 8 letters, followed by s".

Kubernetes assembles one or more computers, either [virtual machines](https://en.wikipedia.org/wiki/Virtual_machine) or [bare metal](https://en.wikipedia.org/wiki/Bare-metal_server), into a [cluster](https://en.wikipedia.org/wiki/Computer_cluster) which can run workloads in containers. It works with various container runtimes, such as [containerd](https://en.wikipedia.org/wiki/Containerd) and [CRI-O](https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation#CRI-O). Its suitability for running and managing workloads of all sizes and styles has led to its widespread adoption in clouds and data centers. There are multiple distributions of this platform—from [independent software vendors](https://en.wikipedia.org/wiki/Independent_software_vendor) (ISVs) as well as hosted-on-cloud offerings from all the major public cloud vendors.

The software consists of a [control plane](https://en.wikipedia.org/wiki/Control_plane) and nodes on which the actual applications run. It includes tools like `kubeadm` and `kubectl` which can be used to interact with its [REST](https://en.wikipedia.org/wiki/REST)-based API.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/03/Kubernetes_talk_at_Google_Cloud_Summit.jpg/250px-Kubernetes_talk_at_Google_Cloud_Summit.jpg)](https://en.wikipedia.org/wiki/File:Kubernetes_talk_at_Google_Cloud_Summit.jpg)

Google Kubernetes Engine talk at 2017 Google Cloud Summit

Kubernetes was announced by Google on June 6, 2014. The project was conceived and created by Google employees Joe Beda, Brendan Burns, and Craig McLuckie. Others at Google soon joined to help build the project including Ville Aikas, Dawn Chen, Brian Grant, Tim Hockin, and Daniel Smith. Other companies such as [Red Hat](https://en.wikipedia.org/wiki/Red_Hat) and [CoreOS](https://en.wikipedia.org/wiki/CoreOS) joined the effort soon after, with notable contributors such as Clayton Coleman and [Kelsey Hightower](https://en.wikipedia.org/wiki/Kelsey_Hightower).

The design and development of Kubernetes was inspired by Google's [Borg](https://en.wikipedia.org/wiki/Borg_(cluster_manager)) cluster manager and based on [Promise Theory](https://en.wikipedia.org/wiki/Promise_theory). Many of its top contributors had previously worked on Borg; they codenamed Kubernetes "Project 7" after the *Star Trek* ex-[Borg](https://en.wikipedia.org/wiki/Borg) character [Seven of Nine](https://en.wikipedia.org/wiki/Seven_of_Nine) and gave its logo a seven-spoked ship's wheel (designed by Tim Hockin). Unlike Borg, which was written in [C++](https://en.wikipedia.org/wiki/C%2B%2B), Kubernetes is written in the [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) language.

Kubernetes was announced in June, 2014 and version 1.0 was released on July 21, 2015. Google worked with the [Linux Foundation](https://en.wikipedia.org/wiki/Linux_Foundation) to form the [Cloud Native Computing Foundation](https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation) (CNCF) and offered Kubernetes as the seed technology.

Google was already offering a managed Kubernetes service, [GKE](https://en.wikipedia.org/wiki/Google_Cloud_Platform), and [Red Hat](https://en.wikipedia.org/wiki/Red_Hat) was supporting Kubernetes as part of [OpenShift](https://en.wikipedia.org/wiki/OpenShift) since the inception of the Kubernetes project in 2014. In 2017, the principal competitors rallied around Kubernetes and announced adding native support for it:

On March 6, 2018, Kubernetes Project reached ninth place in the list of [GitHub](https://en.wikipedia.org/wiki/GitHub) projects by the number of [commits](https://en.wikipedia.org/wiki/Commit_(version_control)), and second place in authors and issues, after the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel).

Until version 1.18, Kubernetes followed an N-2 support policy, meaning that the three most recent minor versions receive security updates and bug fixes. Starting with version 1.19, Kubernetes follows an N-3 support policy.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/b/be/Kubernetes.png/250px-Kubernetes.png)](https://en.wikipedia.org/wiki/File:Kubernetes.png)

Kubernetes architecture diagram

Kubernetes defines a set of building blocks ("primitives") that collectively provide mechanisms that deploy, maintain, and scale applications based on [CPU](https://en.wikipedia.org/wiki/Central_processing_unit), memory or custom metrics. Kubernetes is [loosely coupled](https://en.wikipedia.org/wiki/Loose_coupling) and extensible to meet the needs of different workloads. The internal components as well as extensions and containers that run on Kubernetes rely on the Kubernetes API.

The platform exerts its control over compute and storage resources by defining resources as objects, which can then be managed as such.

Kubernetes follows the [primary/replica architecture](https://en.wikipedia.org/wiki/Primary/replica_architecture). The components of Kubernetes can be divided into those that manage an individual [node](https://en.wikipedia.org/wiki/Node_(networking)) and those that are part of the control plane.

The Kubernetes master node handles the Kubernetes control plane of the cluster, managing its workload and directing communication across the system. The Kubernetes control plane consists of various components such as [TLS encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security), [RBAC](https://en.wikipedia.org/wiki/Role-based_access_control), and a strong [authentication](https://en.wikipedia.org/wiki/Authentication) method, network separation, each its own process, that can run both on a single master node or on multiple masters supporting [high-availability clusters](https://en.wikipedia.org/wiki/High-availability_cluster). The various components of the Kubernetes control plane are as follows.

**[Etcd](https://en.wikipedia.org/wiki/Etcd)** is a persistent, lightweight, distributed, [key-value data store](https://en.wikipedia.org/wiki/Key-value_data_store) (originally developed as part of CoreOS). It reliably stores the configuration data of the cluster, representing the overall state of the cluster at any given point of time. Etcd favors consistency over availability in the event of a network partition (see [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem)). The consistency is crucial for correctly scheduling and operating services.

The **API server** serves the Kubernetes [API](https://en.wikipedia.org/wiki/API) using [JSON](https://en.wikipedia.org/wiki/JSON) over [HTTP](https://en.wikipedia.org/wiki/HTTP), which provides both the internal and external interface to Kubernetes. The API server processes, validates [REST](https://en.wikipedia.org/wiki/REST) requests, and updates the state of the API objects in etcd, thereby allowing clients to configure workloads and containers across worker nodes. The API server uses etcd's watch API to monitor the cluster, roll out critical configuration changes, or restore any divergences of the state of the cluster back to the desired state as declared in etcd.

As an example, a human operator may specify that three instances of a particular "pod" (see below) need to be running, and etcd stores this fact. If the Deployment controller finds that only two instances are running (conflicting with the etcd declaration), it schedules the creation of an additional instance of that pod.

The **scheduler** is an extensible component that selects the node that an unscheduled pod (the basic unit of workloads to be scheduled) runs on, based on resource availability and other constraints. The scheduler tracks resource allocation on each node to ensure that workload is not scheduled in excess of available resources. For this purpose, the scheduler must know the resource requirements, resource availability, and other user-provided constraints or policy directives such as quality-of-service, affinity/anti-affinity requirements, and data locality. The scheduler's role is to match resource "supply" to workload "demand".

Kubernetes allows running multiple schedulers within a single cluster. As such, scheduler [plug-ins](https://en.wikipedia.org/wiki/Plug-in_(computing)) may be developed and installed as in-process extensions to the native vanilla scheduler by running it as a separate scheduler, as long as they conform to the Kubernetes scheduling framework. This allows cluster administrators to extend or modify the behavior of the default Kubernetes scheduler according to their needs.

A **controller** is a reconciliation loop that drives the actual cluster state toward the desired state, communicating with the API server to create, update, and delete the resources it manages (e.g., pods or service endpoints).

An example controller is a ReplicaSet controller, which handles replication and scaling by running a specified number of copies of a pod across the cluster. The controller also handles creating replacement pods if the underlying node fails. Other controllers that are part of the core Kubernetes system include a DaemonSet controller for running exactly one pod on every machine (or some subset of machines), and a Job controller for running pods that run to completion (e.g. as part of a batch job). Labels selectors often form part of the controller's definition that specify the set of pods that a controller manages.

The **controller manager** is a single process that manages several core Kubernetes controllers (including the examples described above), is distributed as part of the standard Kubernetes installation and responding to the loss of nodes.

Custom controllers may also be installed in the cluster, further allowing the behavior and API of Kubernetes to be extended when used in conjunction with custom resources (see [custom resources, controllers and operators](#Custom_resources,_controllers_and_operators) below).

A node, also known as a worker or a minion, is a machine where containers (workloads) are deployed. Every node in the cluster must run a container [runtime](https://en.wikipedia.org/wiki/Runtime_system), as well as the below-mentioned components, for communication with the primary network configuration of these containers.

**kubelet** is responsible for the running state of each node, ensuring that all containers on the node are healthy. It takes care of starting, stopping, and maintaining application containers organized into pods as directed by the control plane. kubelet monitors the state of a pod, and if not in the desired state, the pod re-deploys to the same node. Node status is relayed every few seconds via heartbeat messages to the API server. Once the control plane detects a node failure, a higher-level controller is expected to observe this state change and launch pods on another healthy node.

A **container runtime** is responsible for the lifecycle of containers, including launching, reconciling and killing of containers. kubelet interacts with container runtimes via the Container Runtime Interface (CRI), which [decouples](https://en.wikipedia.org/wiki/Coupling_(computer_programming)) the maintenance of core Kubernetes from the actual CRI implementation.

Originally, kubelet interfaced exclusively with the [Docker](https://en.wikipedia.org/wiki/Docker_(software)) runtime through a "dockershim". However, from November 2020 up to April 2022, Kubernetes has deprecated the [shim](https://en.wikipedia.org/wiki/Shim_(computing)) in favor of directly interfacing with the container through containerd, or replacing Docker with a runtime that is compliant with the Container Runtime Interface (CRI). With the release of v1.24 in May 2022, the "dockershim" has been removed entirely.

Examples of popular container runtimes that are compatible with kubelet include [containerd](https://en.wikipedia.org/wiki/Containerd) (initially supported via Docker) and [CRI-O](https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation#CRI-O).

**kube-proxy** is an implementation of a [network proxy](https://en.wikipedia.org/wiki/Proxy_server) and a [load balancer](https://en.wikipedia.org/wiki/Load_balancing_(computing)), and it supports the service abstraction along with the other networking operations. It is responsible for routing traffic to the appropriate container based on IP and port number of the incoming request.

In Kubernetes, **namespaces** are utilized to segregate the resources it handles into distinct and non-intersecting collections. They are intended for use in environments with many users spread across multiple teams, or projects, or even separating environments like development, test, and production.

The basic scheduling unit in Kubernetes is a **pod**, which consists of one or more containers that are guaranteed to be co-located on the same node. Each pod in Kubernetes is assigned a unique IP address within the cluster, allowing applications to use ports without the risk of conflict. Within the pod, all containers can reference each other.

A **container** resides inside a pod. The container is the lowest level of a micro-service, which holds the running application, libraries, and their dependencies.

Kubernetes supports several abstractions of workloads that are at a higher level over simple pods. This allows users to declaratively define and manage these high-level abstractions, instead of having to manage individual pods by themselves. Several of these abstractions, supported by a standard installation of Kubernetes, are described below.

#### ReplicaSets, ReplicationControllers and Deployments

[[edit](/w/index.php?title=Kubernetes&action=edit&section=15)]

A **ReplicaSet**'s purpose is to maintain a stable set of replica pods running at any given time. As such, it is often used to guarantee the availability of a specified number of identical Pods. The ReplicaSet can also be said to be a grouping mechanism that lets Kubernetes maintain the number of instances that have been declared for a given pod. The definition of a ReplicaSet uses a selector, whose evaluation will result in identifying all pods that are associated with it.

A **ReplicationController**, similar to a ReplicaSet, serves the same purpose and behaves similarly to a ReplicaSet, which is to ensure that there will always be a specified number of pod replicas as desired. The ReplicationController workload was the predecessor of a ReplicaSet, but was eventually deprecated in favor of ReplicaSet to make use of set-based label selectors.

**Deployments** are a higher-level management mechanism for ReplicaSets. While the ReplicaSet controller manages the scale of the ReplicaSet, the Deployment controller manages what happens to the ReplicaSet – whether an update has to be rolled out, or rolled back, etc. When Deployments are scaled up or down, this results in the declaration of the ReplicaSet changing, and this change in the declared state is managed by the ReplicaSet controller.

**StatefulSets** are controllers that enforce the properties of uniqueness and ordering amongst instances of a pod, and can be used to run [stateful](https://en.wikipedia.org/wiki/State_(computer_science)) applications. While scaling stateless applications is only a matter of adding more running pods, doing so for stateful workloads is harder, because the state needs to be preserved if a pod is restarted. If the application is scaled up or down, the state may need to be redistributed.

Databases are an example of stateful workloads. When run in high-availability mode, many databases come with the notion of a primary instance and secondary instances. In this case, the notion of ordering of instances is important. Other applications like [Apache Kafka](https://en.wikipedia.org/wiki/Apache_Kafka) distribute the data amongst their brokers; hence, one broker is not the same as another. In this case, the notion of instance uniqueness is important.

**DaemonSets** are responsible for ensuring that a pod is created on every single node in the cluster. Generally, most workloads scale in response to a desired replica count, depending on the availability and performance requirements as needed by the application. However, in other scenarios it may be necessary to deploy a pod to every single node in the cluster, scaling up the number of total pods as nodes are added and [garbage collecting](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) them as they are removed. This is particularly helpful for use cases where the workload has some dependency on the actual node or host machine, such as log collection, ingress controllers, and storage services.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/6/63/Pod-networking.png/250px-Pod-networking.png)](https://en.wikipedia.org/wiki/File:Pod-networking.png)

Simplified view showing how Services interact with Pod networking in a Kubernetes cluster

A Kubernetes **service** is a set of pods that work together, such as one tier of a [multi-tier](https://en.wikipedia.org/wiki/Multitier_architecture) application. The set of pods that constitute a service are defined by a label selector. Kubernetes provides two modes of [service discovery](https://en.wikipedia.org/wiki/Service_discovery), using environment variables or using Kubernetes DNS. Service discovery assigns a stable IP address and [DNS name](https://en.wikipedia.org/wiki/DNS_name) to the service, and load balances traffic in a [round-robin](https://en.wikipedia.org/wiki/Round-robin_DNS) manner to network connections of that IP address among the pods matching the selector (even as failures cause the pods to move from machine to machine). By default a service is exposed inside a cluster (e.g., [back end](https://en.wikipedia.org/wiki/Front_and_back_ends) pods might be grouped into a service, with requests from the front-end pods load-balanced among them), but a service can also be exposed outside a cluster (e.g., for clients to reach front-end pods).

[Filesystems](https://en.wikipedia.org/wiki/File_system) in the Kubernetes container provide [ephemeral storage](https://en.wikipedia.org/wiki/Ephemeral_storage), by default. This means that a restart of the pod will wipe out any data on such containers, and therefore, this form of storage is quite limiting in anything but trivial applications. A Kubernetes **volume** provides persistent storage that exists for the lifetime of the pod itself. This storage can also be used as shared disk space for containers within the pod. Volumes are mounted at specific mount points within the container, which are defined by the pod configuration, and cannot mount onto other volumes or link to other volumes. The same volume can be mounted at different points in the file system tree by different containers.

### ConfigMaps and Secrets

[[edit](/w/index.php?title=Kubernetes&action=edit&section=20)]

A common application challenge is deciding where to store and manage configuration information, some of which may contain sensitive data. Configuration data can be anything as fine-grained as individual properties, or coarse-grained information like entire configuration files such as [JSON](https://en.wikipedia.org/wiki/JSON) or [XML](https://en.wikipedia.org/wiki/XML) documents. Kubernetes provides two closely related mechanisms to deal with this need, known as **ConfigMaps** and **Secrets**, both of which allow for configuration changes to be made without requiring an application rebuild.

The data from ConfigMaps and Secrets will be made available to every single instance of the application to which these objects have been bound via the Deployment. A Secret and/or a ConfigMap is sent to a node only if a pod on that node requires it, which will only be stored in memory on the node. Once the pod that depends on the Secret or ConfigMap is deleted, the in-memory copy of all bound Secrets and ConfigMaps are deleted as well.

The data from a ConfigMap or Secret is accessible to the pod through one of the following ways:

1. As [environment variables](https://en.wikipedia.org/wiki/Environment_variable), which will be consumed by kubelet from the ConfigMap when the container is launched;
2. Mounted within a volume accessible within the container's filesystem, which supports automatic reloading without restarting the container.

The biggest difference between a Secret and a ConfigMap is that Secrets are specifically designed for containing secure and confidential data, although they are not [encrypted at rest](https://en.wikipedia.org/wiki/Data_at_rest#Encryption) by default, and requires additional setup in order to fully secure the use of Secrets within the cluster. Secrets are often used to store confidential or sensitive data like certificates, credentials to work with image registries, passwords, and [ssh](https://en.wikipedia.org/wiki/Secure_Shell) keys.

### Labels and selectors

[[edit](/w/index.php?title=Kubernetes&action=edit&section=21)]

Kubernetes enables clients (users or internal components) to attach keys called **labels** to any API object in the system, such as pods and [nodes](#Kubernetes_node). Correspondingly, **label selectors** are queries against labels that resolve to matching objects. When a service is defined, one can define the label selectors that will be used by the service router/load balancer to select the pod instances that the traffic will be routed to. Thus, simply changing the labels of the pods or changing the label selectors on the service can be used to control which pods get traffic and which don't, which can be used to support various deployment patterns like [blue–green deployments](https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment) or [A/B testing](https://en.wikipedia.org/wiki/A/B_testing). This capability to dynamically control how services utilize implementing resources provides a loose coupling within the infrastructure.

For example, if an application's pods have labels for a system `tier` (with values such as `frontend`, `backend`, for example) and a `release_track` (with values such as `canary`, `production`, for example), then an operation on all of `backend` and `canary` nodes can use a label selector, such as:

> `tier=backend AND release_track=canary`

Just like labels, field selectors also let one select Kubernetes resources. Unlike labels, the selection is based on the attribute values inherent to the resource being selected, rather than user-defined categorization. `metadata.name` and `metadata.namespace` are field selectors that will be present on all Kubernetes objects. Other selectors that can be used depend on the object/resource type.

Add-ons are additional features of the Kubernetes cluster implemented as applications running within it. The pods may be managed by Deployments, ReplicationControllers, and so on. There are many add-ons. Some of the more important are:

DNS
:   Cluster DNS is a DNS server, in addition to the other DNS server(s) in the environment, which serves DNS records for Kubernetes services. Containers started by Kubernetes automatically include this DNS server in their DNS searches.

Web UI
:   This is a general purpose, web-based UI for Kubernetes clusters. It allows administrators to manage and troubleshoot applications running in the cluster, as well as the cluster itself.

Resource monitoring
:   Container Resource Monitoring records metrics about containers in a central database, and provides a UI for browsing that data.

Cost monitoring
:   Kubernetes cost monitoring applications allow breakdown of costs by pods, nodes, namespaces, and labels.

Cluster-level logging
:   To prevent the loss of event data in the event of node or pod failures, container logs can be saved to a central log store with a search/browsing interface. Kubernetes provides no native storage for log data, but one can integrate many existing logging solutions into the Kubernetes cluster.

Containers emerged as a way to make software portable. The container contains all the packages needed to run a service. The provided file system makes containers extremely portable and easy to use in development. A container can be moved from development to test or production with no or relatively few configuration changes.

Historically Kubernetes was suitable only for stateless services. However, many applications have a database, which requires persistence, leading to the creation of persistent storage for Kubernetes. Implementing persistent storage for containers is one of the top challenges of Kubernetes administrators, DevOps and cloud engineers. Containers may be ephemeral, but more and more of their data is not, so one needs to ensure the data's survival in case of container termination or hardware failure. When deploying containers with Kubernetes or containerized applications, organizations often realize that they need persistent storage. They need to provide fast and reliable storage for databases, root images and other data used by the containers.

In addition to the landscape, the [Cloud Native Computing Foundation](https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation) (CNCF), has published other information about Kubernetes Persistent Storage including a blog helping to define the container attached storage pattern. This pattern can be thought of as one that uses Kubernetes itself as a component of the storage system or service.

More information about the relative popularity of these and other approaches can be found on the CNCF's landscape survey as well, which showed that OpenEBS – a Stateful Persistent Storage platform from Datacore Software, and Rook – a storage orchestration project – were the two projects most likely to be in evaluation as of the Fall of 2019.

Container Attached Storage is a type of data storage that emerged as Kubernetes gained prominence. The Container Attached Storage approach or pattern relies on Kubernetes itself for certain capabilities while delivering primarily block, file, object and interfaces to workloads running on Kubernetes.

Common attributes of Container Attached Storage include the use of extensions to Kubernetes, such as custom resource definitions, and the use of Kubernetes itself for functions that otherwise would be separately developed and deployed for storage or data management. Examples of functionality delivered by custom resource definitions or by Kubernetes itself include retry logic, delivered by Kubernetes itself, and the creation and maintenance of an inventory of available storage media and volumes, typically delivered via a custom resource definition.

#### Container Storage Interface (CSI)

[[edit](/w/index.php?title=Kubernetes&action=edit&section=24)]

In Kubernetes version 1.9, the initial Alpha release of Container Storage Interface (CSI) was introduced. Previously, storage volume plug-ins were included in the Kubernetes distribution. By creating a standardized CSI, the code required to interface with external storage systems was separated from the core Kubernetes code base. Just one year later, the CSI feature was made Generally Available (GA) in Kubernetes.

A key component of the Kubernetes control plane is the API Server, which exposes an HTTP API that can be invoked by other parts of the cluster as well as end users and external components. This API is a [REST](https://en.wikipedia.org/wiki/REST) API and is declarative in nature, and is the same API exposed to the control plane. The API server is backed by etcd to store all records persistently.

In Kubernetes, all objects serve as the "[record of intent](https://en.wikipedia.org/wiki/Intent_log)" of the cluster's state, and are able to define the desired state that the writer of the object wishes for the cluster to be in. As such, most Kubernetes objects have the same set of nested fields, as follows:

* `spec`: Describes the desired state of the resource, which can be controlled by end users, or other higher-level controllers;
* `status`: Describes the current state of the resource, which is actively updated by the controller of the resource.

All objects in Kubernetes are subject to the same API conventions. Some of these include:

* Must have the following metadata under the nested object field `metadata`:
  + `namespace`: a label that objects are subdivided into;
  + `name`: a string that uniquely identifies the object within the defined namespace;
  + `uid`: a unique string that is able to distinguish between objects with the same name across space and time (even across deletions and recreations with the same name).
* May be managed by another controller, which is defined in the `metadata.ownerReferences` field:
  + At most one other object shall be the managing controller of the controllee object, which is defined by the `controller` field.
* May be garbage collected if the owner is deleted:
  + When an object is deleted, all dependent objects may also be deleted in a cascading fashion.

### Custom resources, controllers and operators

[[edit](/w/index.php?title=Kubernetes&action=edit&section=27)]

The Kubernetes API can be extended using *Custom Resources*, which represent objects that are not part of the standard Kubernetes installation. These custom resources are declared using *Custom Resource Definitions* (CRDs), which is a kind of resource that can be dynamically registered and unregistered without shutting down or restarting a cluster that is currently running.

Custom controllers are another extension mechanism that interact with the Kubernetes API, similar to the default controllers in the standard pre-installed Kubernetes controller manager. These controllers may interact with custom resources to allow for a declarative API: users may declare the desired state of the system via the custom resources, and it is the responsibility of the custom controller to observe the change and reconcile it.

The combination of custom resources and custom controllers are often referred to as a *Kubernetes* *Operator*. The key use case for operators are to capture the aim of a human operator who is managing a service or set of services and to implement them using automation, and with a declarative API supporting this automation. Human operators who look after specific applications and services have deep knowledge of how the system ought to behave, how to deploy it, and how to react if there are problems.

Examples of problems solved by operators include taking and restoring backups of that application's state, and handling upgrades of the application code alongside related changes such as database schemas or extra configuration settings. Several notable projects under the [Cloud Native Computing Foundation](https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation)'s incubation program follow the operator pattern to extend Kubernetes, including Argo, Open Policy Agent and Istio.

Kubernetes defines the following strategies for controlling access to its API.

The Kubernetes API server listens on a [TCP port](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) that serves [HTTPS](https://en.wikipedia.org/wiki/HTTPS) traffic, in order to enforce [transport layer security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) using [CA certificates](https://en.wikipedia.org/wiki/Certificate_authority).

In older versions of Kubernetes, the API server supported listening on both HTTP and HTTPS ports (with the HTTP port number having no transport security whatsoever). This was deprecated in v1.10 and eventually dropped support in v1.20 of Kubernetes.

All requests made to the Kubernetes API server are expected to be authenticated, and supports several authentication strategies, some of which are listed below:

1. [X.509](https://en.wikipedia.org/wiki/X.509) client certificates
2. Bearer tokens
3. Service account tokens, intended for programmatic API access

Users are typically expected to indicate and define cluster URL details along with the necessary credentials in a *kubeconfig* file, which are natively supported by other Kubernetes tools like kubectl and the official Kubernetes client libraries.

The Kubernetes API supports the following authorization modes:

1. *Node authorization mode*: Grants a fixed list of operations of API requests that kubelets are allowed to perform, in order to function properly.
2. *[Attribute-based access control (ABAC)](https://en.wikipedia.org/wiki/Attribute-based_access_control) mode*: Grants access rights to users through the use of defined access control policies which combine attributes together.
3. *[Role-based access control (RBAC)](https://en.wikipedia.org/wiki/Role-based_access_control) mode*: Grants access rights to users based on roles that are granted to the user, where each role defines a list of actions that are allowed.
4. *Webhook mode*: Queries a REST API service to determine if a user is authorized to perform a given action.

Kubernetes supports several official API clients:

The same API design principles have been used to define an API to harness a program in order to create, configure, and manage Kubernetes clusters. This is called the Cluster API. A key concept embodied in the API is using [Infrastructure as Software](https://en.wikipedia.org/wiki/Infrastructure_as_Software), or the notion that the Kubernetes cluster infrastructure is itself a resource / object that can be managed just like any other Kubernetes resources. Similarly, machines that make up the cluster are also treated as a Kubernetes resource. The API has two pieces – the core API, and a provider implementation. The provider implementation consists of cloud-provider specific functions that let Kubernetes provide the cluster API in a fashion that is well-integrated with the cloud-provider's services and resources.

Kubernetes is commonly used as a way to host a [microservice](https://en.wikipedia.org/wiki/Microservice)-based implementation, because it and its associated ecosystem of tools provide all the capabilities needed to address key concerns of any [microservice architecture](https://en.wikipedia.org/wiki/Microservices#A_comparison_of_platforms).

A common criticism of Kubernetes is that it is too complex. Google admitted this as well.

Various vendors offer Kubernetes-based platforms or [infrastructure as a service](https://en.wikipedia.org/wiki/Infrastructure_as_a_service) (IaaS) that deploy Kubernetes.

These are typically categorized according to open-source, commercial or managed distributions. Several notable distributions are listed below:

### Open-source distributions

[[edit](/w/index.php?title=Kubernetes&action=edit&section=37)]

* [Amazon](https://en.wikipedia.org/wiki/Amazon_(company)) EKS-D
* k0s
* k3s
* [SUSE](https://en.wikipedia.org/wiki/SUSE_S.A.) Rancher Kubernetes Engine (RKE)
* OKD.IO The Community Distribution of Kubernetes that powers Red Hat OpenShift

### Commercial distributions

[[edit](/w/index.php?title=Kubernetes&action=edit&section=38)]

### Managed distributions

[[edit](/w/index.php?title=Kubernetes&action=edit&section=39)]

| Version | Release date | End of Life date | Notes |
| --- | --- | --- | --- |
| Unsupported: 1.0 | 10 July 2015 |  | Original Release |
| Unsupported: 1.1 | 9 November 2015 |  |  |
| Unsupported: 1.2 | 16 March 2016 | 23 October 2016 |  |
| Unsupported: 1.3 | 1 July 2016 | 1 November 2016 |  |
| Unsupported: 1.4 | 26 September 2016 | 21 April 2017 |  |
| Unsupported: 1.5 | 12 December 2016 | 1 October 2017 |  |
| Unsupported: 1.6 | 28 March 2017 | 23 November 2017 |  |
| Unsupported: 1.7 | 30 June 2017 | 4 April 2018 |  |
| Unsupported: 1.8 | 28 August 2017 | 12 July 2018 |  |
| Unsupported: 1.9 | 15 December 2017 | 29 September 2018 |  |
| Unsupported: 1.10 | 28 March 2018 | 13 February 2019 |  |
| Unsupported: 1.11 | 3 July 2018 | 1 May 2019 |  |
| Unsupported: 1.12 | 27 September 2018 | 8 July 2019 |  |
| Unsupported: 1.13 | 3 December 2018 | 15 October 2019 |  |
| Unsupported: 1.14 | 25 March 2019 | 11 December 2019 |  |
| Unsupported: 1.15 | 20 June 2019 | 6 May 2020 |  |
| Unsupported: 1.16 | 22 October 2019 | 2 September 2020 |  |
| Unsupported: 1.17 | 9 December 2019 | 13 January 2021 |  |
| Unsupported: 1.18 | 25 March 2020 | 18 June 2021 |  |
| Unsupported: 1.19 | 26 August 2020 | 28 October 2021 | From Kubernetes version 1.19 on, the support window has been extended to one year of full support plus two months of maintenance mode period. |
| Unsupported: 1.20 | 8 December 2020 | 28 February 2022 |  |
| Unsupported: 1.21 | 8 April 2021 | 28 June 2022 |  |
| Unsupported: 1.22 | 4 August 2021 | 28 October 2022 |  |
| Unsupported: 1.23 | 7 December 2021 | 28 February 2023 |  |
| Unsupported: 1.24 | 3 May 2022 | 28 July 2023 |  |
| Unsupported: 1.25 | 23 August 2022 | 27 October 2023 |  |
| Unsupported: 1.26 | 9 December 2022 | 24 February 2024 |  |
| Unsupported: 1.27 | 11 April 2023 | 28 June 2024 |  |
| Unsupported: 1.28 | 15 August 2023 | 28 October 2024 |  |
| Unsupported: 1.29 | 13 December 2023 | 28 February 2025 |  |
| Unsupported: 1.30 | 17 April 2024 | 28 June 2025 |  |
| Unsupported: 1.31 | 13 August 2024 | 28 October 2025 |  |
| Unsupported: 1.32 | 11 December 2024 | 28 February 2026 |  |
| Supported: 1.33 | 23 April 2025 | 28 June 2026 |  |
| Supported: 1.34 | 27 August 2025 | 27 October 2026 |  |
| Latest version: 1.35 | 17 December 2025 | 28 February 2027 |  |
| Legend: Unsupported Supported Latest version Preview version Future version |

The chart below visualizes the period for which each release is/was supported

![](//upload.wikimedia.org/wikipedia/en/timeline/r89yq6ymnt4rv3slgvjiipvc4rjyvdv.png)

1. **[^](#cite_ref-github_first-tagged-release_1-0)** ["v0.2"](https://github.com/kubernetes/kubernetes/commit/a0abb3815755d6a77eed2d07bb0aa7d255e4e769). *github.com*. 2014-09-09. [Archived](https://web.archive.org/web/20221123093113/https://github.com/kubernetes/kubernetes/commit/a0abb3815755d6a77eed2d07bb0aa7d255e4e769) from the original on 2022-11-23. Retrieved 2022-11-23.
2. **[^](#cite_ref-wikidata-be25ef6d7ed94b61c6d69adc24f416477d9a4f53-v20_2-0)** ["Release 1.36.0"](https://github.com/kubernetes/kubernetes/releases/tag/v1.36.0). 22 April 2026. Retrieved 23 April 2026.
3. **[^](#cite_ref-3)** ["kubernetes/kubernetes"](https://github.com/kubernetes/kubernetes/). *GitHub*. [Archived](https://web.archive.org/web/20170421035413/https://github.com/kubernetes/kubernetes) from the original on 2017-04-21. Retrieved 2017-03-28.
4. **[^](#cite_ref-:2_4-0)** ["What is Kubernetes?"](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/). *Kubernetes*. [Archived](https://web.archive.org/web/20170401060041/https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/) from the original on 2017-04-01. Retrieved 2017-03-31.
5. **[^](#cite_ref-5)** ["Overview Kubernetes"](https://kubernetes.io/docs/concepts/overview/). *Kubernetes*. Retrieved 2022-01-04.`{{cite web}}`: CS1 maint: deprecated archival service ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_deprecated_archival_service))
6. **[^](#cite_ref-6)** ["Container runtimes"](https://kubernetes.io/docs/setup/production-environment/container-runtimes/). *Kubernetes*. [Archived](https://web.archive.org/web/20190718012659/https://kubernetes.io/docs/setup/production-environment/container-runtimes/) from the original on 2019-07-18. Retrieved 2021-11-14.
7. **[^](#cite_ref-7)** ["Turnkey Cloud Solutions"](https://kubernetes.io/docs/setup/production-environment/turnkey-solutions/). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20230724183919/https://kubernetes.io/docs/setup/production-environment/turnkey-solutions/) from the original on July 24, 2023. Retrieved July 25, 2023.
8. **[^](#cite_ref-8)** ["The Kubernetes API"](https://kubernetes.io/docs/concepts/overview/kubernetes-api/). *Kubernetes*. [Archived](https://web.archive.org/web/20250330184809/https://kubernetes.io/docs/concepts/overview/kubernetes-api/) from the original on 30 March 2025. Retrieved 26 April 2025.
9. ^ [***a***](#cite_ref-:3_9-0) [***b***](#cite_ref-:3_9-1) Metz, Cade. ["Google Open Sources Its Secret Weapon in Cloud Computing"](https://www.wired.com/2014/06/google-kubernetes/). *Wired*. [Archived](https://web.archive.org/web/20150910171929/http://www.wired.com/2014/06/google-kubernetes) from the original on 10 September 2015. Retrieved 24 September 2015.
10. **[^](#cite_ref-10)** Metz, Cade. ["Google Made Its Secret Blueprint Public to Boost Its Cloud"](https://www.wired.com/2015/06/google-kubernetes-says-future-cloud-computing/). *Wired*. [Archived](https://web.archive.org/web/20160701040235/http://www.wired.com/2015/06/google-kubernetes-says-future-cloud-computing/) from the original on 2016-07-01. Retrieved 2016-06-27.
11. **[^](#cite_ref-11)** Burns, Brendan (July 20, 2018), [*The History of Kubernetes & the Community Behind It*](https://web.archive.org/web/20220227112321/https://kubernetes.io/blog/2018/07/20/the-history-of-kubernetes-the-community-behind-it/), archived from [the original](https://kubernetes.io/blog/2018/07/20/the-history-of-kubernetes-the-community-behind-it/) on 2022-02-27
12. **[^](#cite_ref-12)** [*Kubernetes: The Documentary [PART 1]*](https://www.youtube.com/watch?v=BE77h7dmoQU), 21 January 2022, retrieved 2023-12-14
13. **[^](#cite_ref-13)** ["kelseyhightower/status/1527333243845873664"](https://web.archive.org/web/20220519170019/https://twitter.com/kelseyhightower/status/1527333243845873664). *X (formerly Twitter)*. Archived from [the original](https://twitter.com/kelseyhightower/status/1527333243845873664) on 2022-05-19. Retrieved 2023-12-14.
14. ^ [***a***](#cite_ref-borg_paper_14-0) [***b***](#cite_ref-borg_paper_14-1) Abhishek Verma; Luis Pedrosa; Madhukar R. Korupolu; David Oppenheimer; Eric Tune; John Wilkes (April 21–24, 2015). ["Large-scale cluster management at Google with Borg"](https://research.google.com/pubs/pub43438.html). *Proceedings of the European Conference on Computer Systems (EuroSys)*. [Archived](https://web.archive.org/web/20170727090712/https://research.google.com/pubs/pub43438.html) from the original on 2017-07-27.
15. **[^](#cite_ref-15)** ["Borg, Omega, and Kubernetes - ACM Queue"](http://queue.acm.org/detail.cfm?id=2898444). *queue.acm.org*. [Archived](https://web.archive.org/web/20160709023750/http://queue.acm.org/detail.cfm?id=2898444) from the original on 2016-07-09. Retrieved 2016-06-27.
16. **[^](#cite_ref-16)** ["Early Stage Startup Heptio Aims to Make Kubernetes Friendly"](https://www.eweek.com/cloud/early-stage-startup-heptio-aims-to-make-kubernetes-friendly). [Archived](https://web.archive.org/web/20230718053920/https://www.eweek.com/cloud/early-stage-startup-heptio-aims-to-make-kubernetes-friendly/) from the original on 2023-07-18. Retrieved 2016-12-06.
17. **[^](#cite_ref-17)** ["As Kubernetes Hits 1.0, Google Donates Technology To Newly Formed Cloud Native Computing Foundation"](https://techcrunch.com/2015/07/21/as-kubernetes-hits-1-0-google-donates-technology-to-newly-formed-cloud-native-computing-foundation-with-ibm-intel-twitter-and-others/). *TechCrunch*. 21 July 2015. [Archived](https://web.archive.org/web/20150923060338/http://techcrunch.com/2015/07/21/as-kubernetes-hits-1-0-google-donates-technology-to-newly-formed-cloud-native-computing-foundation-with-ibm-intel-twitter-and-others/) from the original on 23 September 2015. Retrieved 24 September 2015.
18. **[^](#cite_ref-18)** ["Cloud Native Computing Foundation"](https://cncf.io/). [Archived](https://web.archive.org/web/20170703085502/https://www.cncf.io/) from the original on 2017-07-03.
19. **[^](#cite_ref-19)** ["Red Hat and Google collaborate on Kubernetes to manage Docker containers at scale"](https://www.redhat.com/en/blog/red-hat-and-google-collaborate-kubernetes-manage-docker-containers-scale). 2014-07-10. [Archived](https://web.archive.org/web/20190702063905/https://www.redhat.com/en/blog/red-hat-and-google-collaborate-kubernetes-manage-docker-containers-scale) from the original on 2019-07-02. Retrieved 2022-08-06.
20. **[^](#cite_ref-20)** ["VMware and Pivotal Launch Pivotal Container Service (PKS) and Collaborate with Google Cloud to Bring Kubernetes to Enterprise Customers"](https://news.vmware.com/releases/vmware-and-pivotal-launch-pivotal-container-service-pks-and-collaborate-with-google-cloud-to-bring-kubernetes-to-enterprise-customers). 2017-08-29. [Archived](https://web.archive.org/web/20221006123403/https://news.vmware.com/releases/vmware-and-pivotal-launch-pivotal-container-service-pks-and-collaborate-with-google-cloud-to-bring-kubernetes-to-enterprise-customers) from the original on 2022-10-06. Retrieved 2022-08-06.
21. **[^](#cite_ref-21)** Lardinois, Frederic (2017-09-06). ["Mesosphere adds Kubernetes support to its data center operating system"](https://techcrunch.com/2017/09/06/mesosphere-says-its-not-bowing-to-kubernetes). [Archived](https://web.archive.org/web/20170906225616/https://techcrunch.com/2017/09/06/mesosphere-says-its-not-bowing-to-kubernetes) from the original on 2017-09-06. Retrieved 2022-08-06.
22. **[^](#cite_ref-22)** ["Docker Announces Enhancements to the Docker Platform to Simplify and Advance the Management of Kubernetes for Enterprise IT"](https://web.archive.org/web/20200926222104/https://www.docker.com/docker-news-and-press/docker-announces-enhancements-docker-platform-simplify-and-advance-management). 2017-10-17. Archived from [the original](https://www.docker.com/docker-news-and-press/docker-announces-enhancements-docker-platform-simplify-and-advance-management) on 2020-09-26.
23. **[^](#cite_ref-23)** Monroy, Gabe (2017-10-24). ["Introducing AKS (managed Kubernetes) and Azure Container Registry improvements"](https://azure.microsoft.com/fr-fr/blog/introducing-azure-container-service-aks-managed-kubernetes-and-azure-container-registry-geo-replication/). [Archived](https://web.archive.org/web/20180207144021/https://azure.microsoft.com/fr-fr/blog/introducing-azure-container-service-aks-managed-kubernetes-and-azure-container-registry-geo-replication/) from the original on 2018-02-07. Retrieved 2022-08-06.
24. **[^](#cite_ref-24)** ["Introducing Amazon Elastic Container Service for Kubernetes (Preview)"](https://aws.amazon.com/about-aws/whats-new/2017/11/introducing-amazon-elastic-container-service-for-kubernetes/). 2017-11-29. [Archived](https://web.archive.org/web/20171130083112/https://aws.amazon.com/about-aws/whats-new/2017/11/introducing-amazon-elastic-container-service-for-kubernetes/) from the original on 2017-11-30. Retrieved 2022-08-06.
25. **[^](#cite_ref-25)** ["Introducing Cisco Elastic Container Service for Kubernetes (Preview)"](https://www.cisco.com/site/us/en/products/computing/hybrid-cloud-operations/intersight-kubernetes-service/index.html). [Archived](https://web.archive.org/web/20250214110615/https://www.cisco.com/site/us/en/products/computing/hybrid-cloud-operations/intersight-kubernetes-service/index.html) from the original on 2025-02-14. Retrieved 2025-02-06.
26. **[^](#cite_ref-26)** Conway, Sarah (6 March 2018). ["Kubernetes Is First CNCF Project To Graduate"](https://www.cncf.io/blog/2018/03/06/kubernetes-first-cncf-project-graduate/). *[Cloud Native Computing Foundation](https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation)*. [Archived](https://web.archive.org/web/20181029081848/https://www.cncf.io/blog/2018/03/06/kubernetes-first-cncf-project-graduate/) from the original on 29 October 2018. Retrieved 3 December 2018. "Compared to the 1.5 million projects on GitHub, Kubernetes is No. 9 for commits and No. 2 for authors/issues, second only to Linux."
27. **[^](#cite_ref-27)** ["Kubernetes version and version skew support policy"](https://kubernetes.io/docs/setup/release/version-skew-policy/). *Kubernetes*. [Archived](https://web.archive.org/web/20190716221040/https://kubernetes.io/docs/setup/release/version-skew-policy/) from the original on 2019-07-16. Retrieved 2020-03-03.
28. ^ [***a***](#cite_ref-increase_to_N-3_support_28-0) [***b***](#cite_ref-increase_to_N-3_support_28-1) ["Kubernetes 1.19 Release Announcement > Increase Kubernetes support window to one year"](https://kubernetes.io/blog/2020/08/26/kubernetes-release-1.19-accentuate-the-paw-sitive/#increase-kubernetes-support-window-to-one-year). *Kubernetes*. 26 August 2020. [Archived](https://web.archive.org/web/20200828231015/https://kubernetes.io/blog/2020/08/26/kubernetes-release-1.19-accentuate-the-paw-sitive/#increase-kubernetes-support-window-to-one-year) from the original on 2020-08-28. Retrieved 2020-08-28.
29. **[^](#cite_ref-29)** ["Configure Kubernetes Autoscaling With Custom Metrics"](https://web.archive.org/web/20190327101233/https://docs.bitnami.com/kubernetes/how-to/configure-autoscaling-custom-metrics/). *Bitnami*. BitRock. 15 November 2018. Archived from [the original](https://docs.bitnami.com/kubernetes/how-to/configure-autoscaling-custom-metrics/) on 27 March 2019. Retrieved 27 December 2018.
30. ^ [***a***](#cite_ref-do-intro_30-0) [***b***](#cite_ref-do-intro_30-1) [***c***](#cite_ref-do-intro_30-2) [***d***](#cite_ref-do-intro_30-3) [***e***](#cite_ref-do-intro_30-4) [***f***](#cite_ref-do-intro_30-5) [***g***](#cite_ref-do-intro_30-6) [***h***](#cite_ref-do-intro_30-7) ["An Introduction to Kubernetes"](https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes). *DigitalOcean*. [Archived](https://web.archive.org/web/20151001183617/https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes) from the original on 1 October 2015. Retrieved 24 September 2015.
31. **[^](#cite_ref-31)** ["The Kubernetes API"](https://kubernetes.io/docs/concepts/overview/kubernetes-api/). *Kubernetes*. [Archived](https://web.archive.org/web/20250330184809/https://kubernetes.io/docs/concepts/overview/kubernetes-api/) from the original on 30 March 2025. Retrieved 26 April 2025.
32. ^ [***a***](#cite_ref-:0_32-0) [***b***](#cite_ref-:0_32-1) [***c***](#cite_ref-:0_32-2) ["Kubernetes Infrastructure"](https://docs.openshift.org/latest/architecture/infrastructure_components/kubernetes_infrastructure.html). *OpenShift Community Documentation*. OpenShift. [Archived](https://web.archive.org/web/20150706121423/https://docs.openshift.org/latest/architecture/infrastructure_components/kubernetes_infrastructure.html) from the original on 6 July 2015. Retrieved 24 September 2015.
33. ^ [***a***](#cite_ref-:7_33-0) [***b***](#cite_ref-:7_33-1) [***c***](#cite_ref-:7_33-2) [***d***](#cite_ref-:7_33-3) [***e***](#cite_ref-:7_33-4) ["Kubernetes Hardening Guide"](https://media.defense.gov/2022/Aug/29/2003066362/-1/-1/0/CTR_KUBERNETES_HARDENING_GUIDANCE_1.2_20220829.PDF) (PDF). *[United States Department of Defense](https://en.wikipedia.org/wiki/United_States_Department_of_Defense)*. Retrieved January 26, 2024.
34. **[^](#cite_ref-34)** ["What Is etcd? | IBM"](https://www.ibm.com/think/topics/etcd). *www.ibm.com*. 2021-10-01. Retrieved 2025-10-16.
35. ^ [***a***](#cite_ref-:1_35-0) [***b***](#cite_ref-:1_35-1) Marhubi, Kamal (2015-09-26). ["Kubernetes from the ground up: API server"](http://kamalmarhubi.com/blog/2015/09/06/kubernetes-from-the-ground-up-the-api-server/). kamalmarhubi.com. [Archived](https://web.archive.org/web/20151029131948/http://kamalmarhubi.com/blog/2015/09/06/kubernetes-from-the-ground-up-the-api-server/) from the original on 2015-10-29. Retrieved 2015-11-02.
36. **[^](#cite_ref-36)** Ellingwood, Justin (2 May 2018). ["An Introduction to Kubernetes"](https://web.archive.org/web/20180705232851/https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes). *[DigitalOcean](https://en.wikipedia.org/wiki/DigitalOcean)*. Archived from [the original](https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes) on 5 July 2018. Retrieved 20 July 2018. "One of the most important primary services is an API server. This is the main management point of the entire cluster as it allows a user to configure Kubernetes' workloads and organizational units. It is also responsible for making sure that the etcd store and the service details of deployed containers are in agreement. It acts as the bridge between various components to maintain cluster health and disseminate information and commands."
37. ^ [***a***](#cite_ref-:6_37-0) [***b***](#cite_ref-:6_37-1) ["Deployments"](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/). *Kubernetes*. [Archived](https://web.archive.org/web/20190922205826/https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) from the original on 2019-09-22. Retrieved 2022-02-27.
38. **[^](#cite_ref-38)** ["The Three Pillars of Kubernetes Container Orchestration - Rancher Labs"](http://rancher.com/three-pillars-kubernetes-container-orchestration/). *rancher.com*. 18 May 2017. [Archived](https://web.archive.org/web/20170624022635/http://rancher.com/three-pillars-kubernetes-container-orchestration/) from the original on 24 June 2017. Retrieved 22 May 2017.
39. **[^](#cite_ref-39)** ["Scheduling Framework"](https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20230723190938/https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/) from the original on July 23, 2023. Retrieved July 24, 2023.
40. ^ [***a***](#cite_ref-coreos-replication-controller_40-0) [***b***](#cite_ref-coreos-replication-controller_40-1) ["Overview of a Replication Controller"](https://coreos.com/kubernetes/docs/latest/replication-controller.html). *Documentation*. [CoreOS](https://en.wikipedia.org/wiki/CoreOS). [Archived](https://web.archive.org/web/20150922010433/https://coreos.com/kubernetes/docs/latest/replication-controller.html) from the original on 2015-09-22. Retrieved 2015-11-02.
41. **[^](#cite_ref-exciting-experimental-features_41-0)** Sanders, Jake (2015-10-02). ["Kubernetes: Exciting Experimental Features"](http://www.livewyer.com/blog/2015/10/02/kubernetes-exciting-experimental-features). *Livewyer*. [Archived](https://web.archive.org/web/20151020071601/http://www.livewyer.com/blog/2015/10/02/kubernetes-exciting-experimental-features) from the original on 2015-10-20. Retrieved 2015-11-02.
42. ^ [***a***](#cite_ref-redhat-docker-and-kubernetes-training-labels-examples_42-0) [***b***](#cite_ref-redhat-docker-and-kubernetes-training-labels-examples_42-1) ["Intro: Docker and Kubernetes training - Day 2"](https://web.archive.org/web/20151029210659/http://christianposta.com/slides/docker/generated/day2.html#/label-examples). [Red Hat](https://en.wikipedia.org/wiki/Red_Hat). 2015-10-20. Archived from [the original](http://christianposta.com/slides/docker/generated/day2.html#/label-examples) on 2015-10-29. Retrieved 2015-11-02.
43. **[^](#cite_ref-43)** Marhubi, Kamal (2015-08-27). ["What [..] is a Kubelet?"](http://kamalmarhubi.com/blog/2015/08/27/what-even-is-a-kubelet/). kamalmarhubi.com. [Archived](https://web.archive.org/web/20151113064016/http://kamalmarhubi.com/blog/2015/08/27/what-even-is-a-kubelet/) from the original on 2015-11-13. Retrieved 2015-11-02.
44. **[^](#cite_ref-44)** ["Kubernetes Security | Issues and Best Practices | Snyk"](https://snyk.io/learn/kubernetes-security/). *snyk.io*. 26 July 2020. Retrieved 2021-05-16.
45. ^ [***a***](#cite_ref-:4_45-0) [***b***](#cite_ref-:4_45-1) ["Introducing Container Runtime Interface (CRI) in Kubernetes"](https://kubernetes.io/blog/2016/12/Container-Runtime-Interface-Cri-In-Kubernetes/). *Kubernetes*. 2016-12-19. [Archived](https://web.archive.org/web/20180527153236/https://kubernetes.io/blog/2016/12/Container-Runtime-Interface-Cri-In-Kubernetes/) from the original on 2018-05-27. Retrieved 2021-05-16.
46. **[^](#cite_ref-46)** ["Container Runtime Interface (CRI)"](https://kubernetes.io/docs/concepts/architecture/cri/). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20220920172847/https://kubernetes.io/docs/concepts/architecture/cri/) from the original on September 20, 2022. Retrieved July 24, 2023.
47. **[^](#cite_ref-47)** ["Kubernetes v1.12: Introducing RuntimeClass"](https://kubernetes.io/blog/2018/10/10/kubernetes-v1.12-introducing-runtimeclass/). *kubernetes.io*. 10 October 2018. [Archived](https://web.archive.org/web/20190331122008/https://kubernetes.io/blog/2018/10/10/kubernetes-v1.12-introducing-runtimeclass/) from the original on 31 March 2019. Retrieved 14 November 2018.
48. **[^](#cite_ref-48)** ["Deprecate Dockershim - Kubernetes Github repository - PR 94624"](https://github.com/kubernetes/kubernetes/pull/94624). *Github.com*. [Archived](https://web.archive.org/web/20201201170033/https://github.com/kubernetes/kubernetes/pull/94624) from the original on 2020-12-01. Retrieved 2022-09-30.
49. **[^](#cite_ref-49)** ["Don't Panic: Kubernetes and Docker"](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/). *Kubernetes Blog*. 2 December 2020. [Archived](https://web.archive.org/web/20201203005547/https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/) from the original on 2020-12-03. Retrieved 2020-12-22.
50. **[^](#cite_ref-50)** ["kubernetes/community"](https://github.com/kubernetes/community). *GitHub*. [Archived](https://web.archive.org/web/20160820064314/https://github.com/kubernetes/community) from the original on 2016-08-20. Retrieved 2021-05-16.
51. **[^](#cite_ref-51)** ["Updated: Dockershim Removal FAQ"](https://kubernetes.io/blog/2022/02/17/dockershim-faq/). *Kubernetes Blog*. 17 February 2022. [Archived](https://web.archive.org/web/20220217175403/https://kubernetes.io/blog/2022/02/17/dockershim-faq/) from the original on 17 February 2022. Retrieved 16 March 2022.
52. **[^](#cite_ref-52)** ["Namespaces"](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/). *kubernetes.io*. [Archived](https://web.archive.org/web/20191003121640/https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) from the original on 2019-10-03. Retrieved 2019-10-06.
53. **[^](#cite_ref-53)** ["Pods"](https://kubernetes.io/docs/concepts/workloads/pods/pod/). *kubernetes.io*. [Archived](https://web.archive.org/web/20190508114418/https://kubernetes.io/docs/concepts/workloads/pods/pod/) from the original on 2019-05-08. Retrieved 2018-12-17.
54. ^ [***a***](#cite_ref-kubernetes-101-networking_54-0) [***b***](#cite_ref-kubernetes-101-networking_54-1) Langemak, Jon (2015-02-11). ["Kubernetes 101 – Networking"](http://www.dasblinkenlichten.com/kubernetes-101-networking/). *Das Blinken Lichten*. [Archived](https://web.archive.org/web/20151025035709/http://www.dasblinkenlichten.com/kubernetes-101-networking/) from the original on 2015-10-25. Retrieved 2015-11-02.
55. ^ [***a***](#cite_ref-:5_55-0) [***b***](#cite_ref-:5_55-1) ["ReplicaSet"](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/). *kubernetes.io*. [Archived](https://web.archive.org/web/20190716232017/https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/) from the original on 2019-07-16. Retrieved 2020-03-03.
56. **[^](#cite_ref-56)** ["StatefulSets"](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/). *kubernetes.io*.
57. **[^](#cite_ref-57)** ["DaemonSet"](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/). *kubernetes.io*. [Archived](https://web.archive.org/web/20191104211457/https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) from the original on 2019-11-04. Retrieved 2019-11-16.
58. **[^](#cite_ref-58)** ["Service"](https://kubernetes.io/docs/concepts/services-networking/service/). *kubernetes.io*. [Archived](https://web.archive.org/web/20190508113526/https://kubernetes.io/docs/concepts/services-networking/service/) from the original on 2019-05-08. Retrieved 2018-11-21.
59. **[^](#cite_ref-kubernetes-101-external-access_59-0)** Langemak, Jon (2015-02-15). ["Kubernetes 101 – External Access Into The Cluster"](http://www.dasblinkenlichten.com/kubernetes-101-external-access-into-the-cluster/). *Das Blinken Lichten*. [Archived](https://web.archive.org/web/20151026035212/http://www.dasblinkenlichten.com/kubernetes-101-external-access-into-the-cluster/) from the original on 2015-10-26. Retrieved 2015-11-02.
60. **[^](#cite_ref-60)** ["Volumes"](https://kubernetes.io/docs/concepts/storage/volumes/). *kubernetes.io*. [Archived](https://web.archive.org/web/20191012132822/https://kubernetes.io/docs/concepts/storage/volumes/) from the original on 2019-10-12. Retrieved 2019-10-06.
61. **[^](#cite_ref-61)** ["ConfigMaps"](https://kubernetes.io/docs/concepts/configuration/configmap/#mounted-configmaps-are-updated-automatically). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20230723175447/https://kubernetes.io/docs/concepts/configuration/configmap/#mounted-configmaps-are-updated-automatically) from the original on July 23, 2023. Retrieved July 24, 2023.
62. **[^](#cite_ref-62)** ["Secrets"](https://kubernetes.io/docs/concepts/configuration/secret/). *Kubernetes*. [Archived](https://web.archive.org/web/20230722192548/https://kubernetes.io/docs/concepts/configuration/secret/) from the original on 2023-07-22. Retrieved 2023-07-23.
63. **[^](#cite_ref-63)** ["Container Attached Storage: A primer"](https://www.cncf.io/blog/2018/04/19/container-attached-storage-a-primer/). *Cloud Native Computing Foundation*. 2018-04-19. [Archived](https://web.archive.org/web/20210621071903/https://www.cncf.io/blog/2018/04/19/container-attached-storage-a-primer/) from the original on 2021-06-21. Retrieved 2021-05-16.
64. **[^](#cite_ref-64)** ["Dataore Acquired MayaData original developer of OpenEBS"](https://www.datacore.com/news-post/datacore-acquires-mayadata). *datacore.com*. 18 November 2021.
65. **[^](#cite_ref-65)** ["CNCF SURVEY 2019"](https://www.cncf.io/wp-content/uploads/2020/08/CNCF_Survey_Report.pdf) (PDF). *cncf.io*.
66. **[^](#cite_ref-66)** ["Container Attached Storage: A primer"](https://www.cncf.io/blog/2018/04/19/container-attached-storage-a-primer/). *Cloud Native Computing Foundation*. 2018-04-19. Retrieved 2020-10-09.
67. **[^](#cite_ref-67)** ["Container Attached Storage | SNIA"](https://www.snia.org/educational-library/container-attached-storage-2018). *www.snia.org*. Retrieved 2020-10-09.
68. **[^](#cite_ref-68)** ["Cloud Native Application Checklist: Cloud Native Storage"](https://www.replex.io/blog/cloud-native-application-checklist-cloud-native-storage). *www.replex.io*. Retrieved 2020-10-09.
69. **[^](#cite_ref-69)** ["Introducing Container Storage Interface (CSI) Alpha for Kubernetes"](https://kubernetes.io/blog/2018/01/introducing-container-storage-interface/). *kubernetes.io*. 10 January 2018.
70. **[^](#cite_ref-70)** ["Container Storage Interface (CSI) for Kubernetes GA"](https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/). *kubernetes.io*. 15 January 2019. [Archived](https://web.archive.org/web/20220822091050/https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/) from the original on 22 August 2022. Retrieved 22 August 2022.
71. **[^](#cite_ref-71)** Marinescu, Dan C. (2018-01-01), Marinescu, Dan C. (ed.), ["Chapter 8 - Cloud Hardware and Software"](https://www.sciencedirect.com/science/article/pii/B978012812810700011X), *Cloud Computing (Second Edition)*, Morgan Kaufmann, pp. 281–319, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/b978-0-12-812810-7.00011-x](https://doi.org/10.1016%2Fb978-0-12-812810-7.00011-x), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-12-812810-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-12-812810-7), retrieved 2023-11-08`{{citation}}`: CS1 maint: work parameter with ISBN ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_work_parameter_with_ISBN))
72. **[^](#cite_ref-72)** ["Operating etcd clusters for Kubernetes"](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20230723223410/https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/) from the original on July 23, 2023. Retrieved July 24, 2023.
73. **[^](#cite_ref-73)** ["Objects In Kubernetes"](https://kubernetes.io/docs/concepts/overview/working-with-objects/). *Kubernetes Documentation*. Retrieved July 24, 2023.
74. **[^](#cite_ref-74)** ["API Conventions"](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata). *[GitHub](https://en.wikipedia.org/wiki/GitHub)*. Kubernetes. [Archived](https://web.archive.org/web/20230723223410/https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata) from the original on July 23, 2023. Retrieved July 24, 2023.
75. **[^](#cite_ref-75)** ["Owners and Dependents"](https://kubernetes.io/docs/concepts/overview/working-with-objects/owners-dependents/). *Kubernetes Documentation*. Retrieved July 24, 2023.
76. **[^](#cite_ref-76)** ["Garbage Collection"](https://kubernetes.io/docs/concepts/architecture/garbage-collection/). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20230723223408/https://kubernetes.io/docs/concepts/architecture/garbage-collection/) from the original on July 23, 2023. Retrieved July 24, 2023.
77. **[^](#cite_ref-77)** ["Custom Resources"](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/). *Kubernetes Documentation*. Retrieved July 24, 2023.
78. **[^](#cite_ref-78)** ["Operators"](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20250114012204/https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) from the original on January 14, 2025. Retrieved January 12, 2025.
79. **[^](#cite_ref-79)** ["Cloud Native Landscape"](https://landscape.cncf.io/). *[Cloud Native Computing Foundation](https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation)*. [Archived](https://web.archive.org/web/20230723181409/https://landscape.cncf.io/) from the original on July 23, 2023. Retrieved July 24, 2023.
80. **[^](#cite_ref-80)** ["Controlling Access to the Kubernetes API"](https://kubernetes.io/docs/concepts/security/controlling-access/). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20230723223409/https://kubernetes.io/docs/concepts/security/controlling-access/) from the original on July 23, 2023. Retrieved July 24, 2023.
81. **[^](#cite_ref-81)** ["Remove the apiserver insecure port · Issue #91506 · kubernetes/kubernetes"](https://github.com/kubernetes/kubernetes/issues/91506). *[GitHub](https://en.wikipedia.org/wiki/GitHub)*.
82. **[^](#cite_ref-82)** ["Authorization"](https://kubernetes.io/docs/reference/access-authn-authz/authorization/). *Kubernetes Documentation*. Retrieved July 24, 2023.
83. **[^](#cite_ref-83)** ["Organizing Cluster Access Using kubeconfig Files"](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20230723223408/https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/) from the original on July 23, 2023. Retrieved July 24, 2023.
84. **[^](#cite_ref-84)** ["Authorization Overview"](https://kubernetes.io/docs/reference/access-authn-authz/authorization/). *Kubernetes Documentation*. Retrieved July 24, 2023.
85. **[^](#cite_ref-85)** ["Command line tool (kubectl)"](https://kubernetes.io/docs/reference/kubectl/). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20230723094034/https://kubernetes.io/docs/reference/kubectl/) from the original on July 23, 2023. Retrieved July 24, 2023.
86. **[^](#cite_ref-86)** ["Client Libraries"](https://kubernetes.io/docs/reference/using-api/client-libraries/). *Kubernetes Documentation*. [Archived](https://web.archive.org/web/20230723223414/https://kubernetes.io/docs/reference/using-api/client-libraries/) from the original on July 23, 2023. Retrieved July 24, 2023.
87. **[^](#cite_ref-Cluster_API_87-0)** ["Introduction - The Cluster API Book"](https://cluster-api.sigs.k8s.io/). *cluster-api.sigs.k8s.io*.
88. **[^](#cite_ref-88)** Anderson, Tim (2021-02-25). ["Google admits Kubernetes container tech is so complex, it's had to roll out an Autopilot feature to do it all for you"](https://www.theregister.com/2021/02/25/google_kubernetes_autopilot/). *[The Register](https://en.wikipedia.org/wiki/The_Register)*.
89. **[^](#cite_ref-89)** ["The 7 Most Popular Kubernetes Distributions"](https://web.archive.org/web/20210725033056/https://www.containiq.com/post/popular-kubernetes-distributions/). Archived from [the original](https://www.containiq.com/post/popular-kubernetes-distributions/) on 2021-07-25. Retrieved 2021-12-28.
90. **[^](#cite_ref-90)** MSV, Janakiram. ["Why Kubernetes Developer Ecosystem Needs A PaaS"](https://www.forbes.com/sites/janakirammsv/2021/04/12/why-kubernetes-developer-ecosystem-needs-a-paas/). *Forbes*. [Archived](https://web.archive.org/web/20210412041327/https://www.forbes.com/sites/janakirammsv/2021/04/12/why-kubernetes-developer-ecosystem-needs-a-paas/) from the original on 2021-04-12. Retrieved 2021-05-16.
91. **[^](#cite_ref-91)** ["5 Cloud Native Trends to Watch out for in 2022"](https://thenewstack.io/5-cloud-native-trends-to-watch-out-for-in-2022/). *The New Stack*. 2022-01-03. Retrieved 2022-02-03.
92. **[^](#cite_ref-92)** Kokalitcheva, Kia (Dec 8, 2023). ["Scoop: Nutanix acquires assets of cloud server company D2iQ"](https://www.axios.com/2023/12/09/nutanix-acquires-d2iq). *axios.com*. [Archived](https://web.archive.org/web/20231214011148/https://www.axios.com/2023/12/09/nutanix-acquires-d2iq) from the original on December 14, 2023. Retrieved August 8, 2025.
93. ^ [***a***](#cite_ref-k8s_patch_releases_93-0) [***b***](#cite_ref-k8s_patch_releases_93-1) ["Kubernetes Patch Releases"](https://git.k8s.io/website/content/en/releases/patch-releases.md). *[GitHub](https://en.wikipedia.org/wiki/GitHub)*. 4 May 2022. [Archived](https://web.archive.org/web/20211216023649/https://git.k8s.io/website/content/en/releases/patch-releases.md) from the original on 2021-12-16. Retrieved 2022-05-09.
94. **[^](#cite_ref-94)** ["Kubernetes 1.1 Performance upgrades, improved tooling and a growing community"](https://kubernetes.io/blog/2015/11/Kubernetes-1-1-Performance-Upgrades-Improved-Tooling-And-A-Growing-Community/). *kubernetes.io*. November 9, 2015. [Archived](https://web.archive.org/web/20221006123414/https://kubernetes.io/blog/2015/11/kubernetes-1-1-performance-upgrades-improved-tooling-and-a-growing-community/) from the original on October 6, 2022. Retrieved January 13, 2024.
95. **[^](#cite_ref-95)** ["Kubernetes 1.2: Even more performance upgrades, plus easier application deployment and management"](https://kubernetes.io/blog/2016/03/Kubernetes-1-2-Even-More-Performance-Upgrades-Plus-Easier-Application-Deployment-And-Management/). *kubernetes.io*. March 17, 2016. [Archived](https://web.archive.org/web/20221006123410/https://kubernetes.io/blog/2016/03/kubernetes-1-2-even-more-performance-upgrades-plus-easier-application-deployment-and-management/) from the original on October 6, 2022. Retrieved January 13, 2024.
96. **[^](#cite_ref-96)** ["Kubernetes 1.3: Bridging Cloud Native and Enterprise Workloads"](https://kubernetes.io/blog/2016/07/Kubernetes-1-3-Bridging-Cloud-Native-And-Enterprise-Workloads/). *kubernetes.io*. July 6, 2016. [Archived](https://web.archive.org/web/20221006123421/https://kubernetes.io/blog/2016/07/kubernetes-1-3-bridging-cloud-native-and-enterprise-workloads/) from the original on October 6, 2022. Retrieved January 13, 2024.
97. **[^](#cite_ref-97)** ["Kubernetes 1.4: Making it easy to run on Kubernetes anywhere"](https://kubernetes.io/blog/2016/09/Kubernetes-1-4-Making-It-Easy-To-Run-On-Kuberentes-Anywhere/). *kubernetes.io*. September 26, 2016. [Archived](https://web.archive.org/web/20221006123405/https://kubernetes.io/blog/2016/09/kubernetes-1-4-making-it-easy-to-run-on-kuberentes-anywhere/) from the original on October 6, 2022. Retrieved January 13, 2024.
98. **[^](#cite_ref-98)** ["Kubernetes 1.5: Supporting Production Workloads"](https://kubernetes.io/blog/2016/12/Kubernetes-1-5-Supporting-Production-Workloads/). *kubernetes.io*. December 13, 2016. [Archived](https://web.archive.org/web/20221006123431/https://kubernetes.io/blog/2016/12/kubernetes-1-5-supporting-production-workloads/) from the original on October 6, 2022. Retrieved January 13, 2024.
99. **[^](#cite_ref-99)** ["Kubernetes 1.6: Multi-user, Multi-workloads at Scale"](https://kubernetes.io/blog/2017/03/Kubernetes-1-6-Multi-User-Multi-Workloads-At-Scale/). *kubernetes.io*. March 28, 2017. [Archived](https://web.archive.org/web/20221006123406/https://kubernetes.io/blog/2017/03/kubernetes-1-6-multi-user-multi-workloads-at-scale/) from the original on October 6, 2022. Retrieved January 13, 2024.
100. **[^](#cite_ref-100)** ["Kubernetes 1.7: Security Hardening, Stateful Application Updates and Extensibility"](https://kubernetes.io/blog/2017/06/Kubernetes-1-7-Security-Hardening-Stateful-Application-Extensibility-Updates/). *kubernetes.io*. June 30, 2017. [Archived](https://web.archive.org/web/20221006123407/https://kubernetes.io/blog/2017/06/kubernetes-1-7-security-hardening-stateful-application-extensibility-updates/) from the original on October 6, 2022. Retrieved January 13, 2024.
101. **[^](#cite_ref-101)** ["Kubernetes 1.8: Security, Workloads and Feature Depth"](https://kubernetes.io/blog/2017/09/Kubernetes-18-Security-Workloads-And/). *kubernetes.io*. September 29, 2017. [Archived](https://web.archive.org/web/20221006123434/https://kubernetes.io/blog/2017/09/kubernetes-18-security-workloads-and/) from the original on October 6, 2022. Retrieved January 13, 2024.
102. **[^](#cite_ref-102)** ["Kubernetes 1.9: Apps Workloads GA and Expanded Ecosystem"](https://kubernetes.io/blog/2017/12/Kubernetes-19-Workloads-Expanded-Ecosystem/). *kubernetes.io*. December 15, 2017. [Archived](https://web.archive.org/web/20221006123429/https://kubernetes.io/blog/2017/12/kubernetes-19-workloads-expanded-ecosystem/) from the original on October 6, 2022. Retrieved January 13, 2024.
103. **[^](#cite_ref-103)** ["Kubernetes 1.10: Stabilizing Storage, Security, and Networking"](https://kubernetes.io/blog/2018/03/26/kubernetes-1.10-stabilizing-storage-security-networking/). *kubernetes.io*. March 26, 2018. [Archived](https://web.archive.org/web/20221006123409/https://kubernetes.io/blog/2018/03/26/kubernetes-1.10-stabilizing-storage-security-networking/) from the original on October 6, 2022. Retrieved January 30, 2021.
104. **[^](#cite_ref-104)** ["Kubernetes 1.11: In-Cluster Load Balancing and CoreDNS Plugin Graduate to General Availability"](https://kubernetes.io/blog/2018/06/27/kubernetes-1.11-release-announcement/). *kubernetes.io*. June 27, 2018.
105. **[^](#cite_ref-105)** ["Kubernetes 1.12: Kubelet TLS Bootstrap and Azure Virtual Machine Scale Sets (VMSS) Move to General Availability"](https://kubernetes.io/blog/2018/09/27/kubernetes-1.12-kubelet-tls-bootstrap-and-azure-virtual-machine-scale-sets-vmss-move-to-general-availability/). *kubernetes.io*. September 27, 2018. [Archived](https://web.archive.org/web/20221006123408/https://kubernetes.io/blog/2018/09/27/kubernetes-1.12-kubelet-tls-bootstrap-and-azure-virtual-machine-scale-sets-vmss-move-to-general-availability/) from the original on October 6, 2022. Retrieved January 30, 2021.
106. **[^](#cite_ref-106)** ["Kubernetes 1.13: Simplified Cluster Management with Kubeadm, Container Storage Interface (CSI), and CoreDNS as Default DNS are Now Generally Available"](https://kubernetes.io/blog/2018/12/03/kubernetes-1-13-release-announcement/). *kubernetes.io*. December 3, 2018. [Archived](https://web.archive.org/web/20221006123404/https://kubernetes.io/blog/2018/12/03/kubernetes-1-13-release-announcement/) from the original on October 6, 2022. Retrieved January 30, 2021.
107. **[^](#cite_ref-107)** ["Kubernetes 1.14: Production-level support for Windows Nodes, Kubectl Updates, Persistent Local Volumes GA"](https://kubernetes.io/blog/2019/03/25/kubernetes-1-14-release-announcement/). *kubernetes.io*. March 25, 2019. [Archived](https://web.archive.org/web/20221006123407/https://kubernetes.io/blog/2019/03/25/kubernetes-1-14-release-announcement/) from the original on October 6, 2022. Retrieved January 30, 2021.
108. **[^](#cite_ref-108)** ["Kubernetes 1.15: Extensibility and Continuous Improvement"](https://kubernetes.io/blog/2019/06/19/kubernetes-1-15-release-announcement/). *kubernetes.io*. June 19, 2019. [Archived](https://web.archive.org/web/20221006123427/https://kubernetes.io/blog/2019/06/19/kubernetes-1-15-release-announcement/) from the original on October 6, 2022. Retrieved January 30, 2021.
109. **[^](#cite_ref-109)** ["Kubernetes 1.16: Custom Resources, Overhauled Metrics, and Volume Extensions"](https://kubernetes.io/blog/2019/09/18/kubernetes-1-16-release-announcement/). *kubernetes.io*. September 18, 2019. [Archived](https://web.archive.org/web/20221006123407/https://kubernetes.io/blog/2019/09/18/kubernetes-1-16-release-announcement/) from the original on October 6, 2022. Retrieved January 30, 2021.
110. **[^](#cite_ref-110)** ["Kubernetes 1.17: Stability"](https://kubernetes.io/blog/2019/12/09/kubernetes-1-17-release-announcement/). *kubernetes.io*. December 9, 2019.
111. **[^](#cite_ref-111)** ["Kubernetes 1.18: Fit & Finish"](https://kubernetes.io/blog/2020/03/25/kubernetes-1-18-release-announcement/). *kubernetes.io*. March 25, 2020. [Archived](https://web.archive.org/web/20240113201519/https://kubernetes.io/blog/2020/03/25/kubernetes-1-18-release-announcement/) from the original on January 13, 2024. Retrieved January 13, 2024.
112. **[^](#cite_ref-k8s_1-19_release_announcement_112-0)** ["Kubernetes 1.19 Release Announcement"](https://kubernetes.io/blog/2020/08/26/kubernetes-release-1.19-accentuate-the-paw-sitive/). *Kubernetes*. 26 August 2020. [Archived](https://web.archive.org/web/20200828231015/https://kubernetes.io/blog/2020/08/26/kubernetes-release-1.19-accentuate-the-paw-sitive/) from the original on 2020-08-28. Retrieved 2020-08-28.
113. **[^](#cite_ref-113)** ["Kubernetes 1.19: Accentuate the Paw-sitive"](https://kubernetes.io/blog/2020/08/26/kubernetes-release-1.19-accentuate-the-paw-sitive/). *Kubernetes*. 2020-08-26. [Archived](https://web.archive.org/web/20200828231015/https://kubernetes.io/blog/2020/08/26/kubernetes-release-1.19-accentuate-the-paw-sitive/) from the original on 2020-08-28. Retrieved 2024-01-13.
114. **[^](#cite_ref-114)** ["Kubernetes 1.20: The Raddest Release"](https://kubernetes.io/blog/2020/12/08/kubernetes-1-20-release-announcement/). *kubernetes.io*. December 8, 2020. [Archived](https://web.archive.org/web/20201209130143/https://kubernetes.io/blog/2020/12/08/kubernetes-1-20-release-announcement/) from the original on December 9, 2020. Retrieved December 9, 2020.
115. **[^](#cite_ref-115)** ["Kubernetes 1.21: Power to the Community"](https://kubernetes.io/blog/2021/04/08/kubernetes-1-21-release-announcement/). *kubernetes.io*. April 8, 2021.
116. **[^](#cite_ref-116)** ["Kubernetes 1.22: Reaching New Peaks"](https://kubernetes.io/blog/2021/08/04/kubernetes-1-22-release-announcement/). *kubernetes.io*. August 4, 2021. [Archived](https://web.archive.org/web/20221006123405/https://kubernetes.io/blog/2021/08/04/kubernetes-1-22-release-announcement/) from the original on October 6, 2022. Retrieved September 7, 2021.
117. **[^](#cite_ref-117)** ["Kubernetes 1.23: The Next Frontier"](https://kubernetes.io/blog/2021/12/07/kubernetes-1-23-release-announcement/). *kubernetes.io*. December 7, 2021. [Archived](https://web.archive.org/web/20221006123413/https://kubernetes.io/blog/2021/12/07/kubernetes-1-23-release-announcement/) from the original on October 6, 2022. Retrieved January 16, 2022.
118. **[^](#cite_ref-118)** ["Kubernetes 1.24: Stargazer"](https://kubernetes.io/blog/2022/05/03/kubernetes-1-24-release-announcement/). *kubernetes.io*. May 3, 2022. [Archived](https://web.archive.org/web/20221006123407/https://kubernetes.io/blog/2022/05/03/kubernetes-1-24-release-announcement/) from the original on October 6, 2022. Retrieved May 9, 2022.
119. **[^](#cite_ref-119)** ["Kubernetes v1.25: Combiner"](https://kubernetes.io/blog/2022/08/23/kubernetes-v1-25-release/). *kubernetes.io*. August 23, 2022. [Archived](https://web.archive.org/web/20221006123428/https://kubernetes.io/blog/2022/08/23/kubernetes-v1-25-release/) from the original on October 6, 2022. Retrieved August 28, 2022.
120. **[^](#cite_ref-120)** ["Kubernetes v1.26: Electrifying"](https://kubernetes.io/blog/2022/12/09/kubernetes-v1-26-release/). *kubernetes.io*. December 9, 2022.
121. **[^](#cite_ref-121)** ["Kubernetes v1.27: Chill Vibes"](https://kubernetes.io/blog/2023/04/11/kubernetes-v1-27-release/). *kubernetes.io*. April 11, 2023.
122. **[^](#cite_ref-122)** ["Kubernetes v1.28: Planternetes"](https://kubernetes.io/blog/2023/08/15/kubernetes-v1-28-release/). *kubernetes.io*. August 15, 2023.
123. **[^](#cite_ref-123)** ["Kubernetes v1.29: Mandala"](https://kubernetes.io/blog/2023/12/13/kubernetes-v1-29-release/). *kubernetes.io*. December 13, 2023.
124. **[^](#cite_ref-124)** ["Kubernetes v1.30: Uwubernetes"](https://kubernetes.io/blog/2024/04/17/kubernetes-v1-30-release/). *kubernetes.io*. April 17, 2024.
125. **[^](#cite_ref-125)** ["Kubernetes v1.31: Elli"](https://kubernetes.io/blog/2024/08/13/kubernetes-v1-31-release/). *kubernetes.io*. August 13, 2024.
126. **[^](#cite_ref-126)** ["Kubernetes v1.32: Penelope"](https://kubernetes.io/blog/2024/12/11/kubernetes-v1-32-release/). *kubernetes.io*. December 11, 2024. [Archived](https://web.archive.org/web/20241226150654/https://kubernetes.io/blog/2024/12/11/kubernetes-v1-32-release/) from the original on December 26, 2024. Retrieved January 2, 2025.
127. **[^](#cite_ref-127)** ["Kubernetes v1.33: Octarine"](https://kubernetes.io/blog/2025/04/23/kubernetes-v1-33-release/). *kubernetes.io*. April 23, 2025.
128. **[^](#cite_ref-128)** ["Kubernetes v1.34: Of Wind & Will (O' WaW)"](https://kubernetes.io/blog/2025/08/27/kubernetes-v1-34-release/). *kubernetes.io*. November 11, 2025.
129. **[^](#cite_ref-129)** ["Kubernetes v1.35: Timbernetes (The World Tree Release)"](https://kubernetes.io/blog/2025/12/17/kubernetes-v1-35-release/). *kubernetes.io*. December 17, 2025.