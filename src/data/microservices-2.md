# Microservices

* Source: https://en.wikipedia.org/wiki/Microservices

---

In software engineering, a **microservice** architecture is an [architectural pattern](https://en.wikipedia.org/wiki/Architectural_pattern) that organizes an application into a collection of loosely coupled, fine-grained services that communicate through lightweight protocols. This pattern allows teams to develop, deploy, and scale services independently, improving modularity, scalability, and adaptability. However, it introduces additional complexity, particularly in managing distributed systems and inter-service communication, making the initial implementation more challenging compared to a [monolithic architecture](https://en.wikipedia.org/wiki/Monolithic_application).

## Definition

There is no single, universally agreed-upon definition of microservices. However, they are generally characterized by a focus on modularity, with each service designed around a specific business capability. These services are loosely coupled, independently deployable, and often developed and scaled separately, enabling greater flexibility and agility in managing complex systems. Microservices architecture is closely associated with principles such as domain-driven design, decentralization of data and governance, and the flexibility to use different technologies for individual services to best meet their requirements.

## Examples

A commonly cited example of microservices architecture is Netflix, which transitioned from a monolithic system to microservices to improve scalability and reliability. Similarly, companies like Amazon and Uber use microservices to handle large-scale distributed systems efficiently.

## Usage

It is common for microservices architectures to be adopted for [cloud-native applications](https://en.wikipedia.org/wiki/Native_cloud_application), [serverless computing](https://en.wikipedia.org/wiki/Serverless_computing), and applications using lightweight [container](https://en.wikipedia.org/wiki/Containerization_(computing)) deployment via [OS-level virtualization](https://en.wikipedia.org/wiki/OS-level_virtualization). According to [Fowler](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)), because of the large number (when compared to monolithic application implementations) of services, decentralized continuous delivery and [DevOps](https://en.wikipedia.org/wiki/DevOps) with holistic service monitoring are necessary to effectively develop, maintain, and operate such applications. A consequence of (and rationale for) following this approach is that the individual microservices can be individually scaled. In the monolithic approach, an application supporting three functions would have to be scaled in its entirety even if only one of these functions had a resource constraint. With microservices, only the microservice supporting the function with resource constraints needs to be scaled out, thus providing resource and cost optimization benefits. Despite its benefits, microservices architecture introduces challenges such as increased operational complexity, network latency, and the need for robust monitoring and fault tolerance mechanisms.

## Cell-based architecture in microservices

Cell-based architecture is a [distributed computing](https://en.wikipedia.org/wiki/Distributed_computing) design in which computational resources are organized into self-contained units called cells. Each cell operates independently, handling a subset of requests while maintaining scalability, fault isolation, and availability.

A cell typically consists of multiple microservices and functions as an autonomous unit. In some implementations, entire sets of microservices are replicated across multiple cells, enabling requests to be rerouted to another operational cell if one experiences a failure. This approach is intended to improve system-wide resilience by limiting the impact of localized failures.

Some implementations incorporate [circuit breakers](https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern) within and between cells. Within a cell, circuit breakers may be used to mitigate cascading failures among microservices, while inter-cell circuit breakers can isolate failing cells and redirect traffic to those that remain operational.

Cell-based architecture has been adopted in certain large-scale distributed systems where fault isolation and redundancy are design priorities. Its implementation varies based on system requirements, infrastructure constraints, and specific operational goals.

## History

In 1999, software developer Peter Rodgers had been working on the Dexter research project at [Hewlett Packard Labs](https://en.wikipedia.org/wiki/Hewlett_Packard_Labs), whose aim was to make code less brittle and to make large-scale, complex software systems [robust](https://en.wikipedia.org/wiki/Robustness_(computer_science)) to change. Ultimately this path of research led to the development of [resource-oriented computing](https://en.wikipedia.org/wiki/Resource-oriented_computing) (ROC), a generalized computation abstraction in which REST is a special subset. In 2005, during a presentation at the Web Services Edge conference, Rodgers argued for "[REST](https://en.wikipedia.org/wiki/Representational_state_transfer)-services" and stated that "[Software components](https://en.wikipedia.org/wiki/Software_component) are Micro-Web-Services... Micro-Services are composed using [Unix-like pipelines](https://en.wikipedia.org/wiki/Pipeline_(Unix)) (the Web meets Unix = true [loose-coupling](https://en.wikipedia.org/wiki/Loose_coupling)). Services can call services (+multiple language run-times). Complex service assemblies are abstracted behind simple [URI](https://en.wikipedia.org/wiki/URI) interfaces. Any service, at any granularity, can be exposed." He described how a well-designed microservices platform "applies the underlying architectural principles of the [Web](https://en.wikipedia.org/wiki/WWW) and REST services together with Unix-like scheduling and pipelines to provide radical flexibility and improved simplicity in service-oriented architectures.

Also in 2005, [Alistair Cockburn](https://en.wikipedia.org/wiki/Alistair_Cockburn) wrote about [hexagonal architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)) which is a software design pattern that is used along with the microservices. This pattern makes the design of the microservice possible since it isolates in layers the business logic from the auxiliary services needed in order to deploy and run the microservice completely independent from others.

## Microservice granularity

Determining the appropriate level of (micro)service granularity in a microservices architecture often requires iterative collaboration between architects and developers. This process involves evaluating user requirements, service responsibilities, and architectural characteristics, such as non-functional requirements. Neal Ford highlights the role of integrator and disintegrator factors in this context. Integrator factors, such as shared transactions or tightly coupled processes, favor combining services, while disintegrator factors, such as fault tolerance or independent scalability, encourage splitting services to meet operational and architectural goals. Additionally, fitness functions, as proposed by Neal Ford, can be used to validate architectural decisions and service granularity by continuously measuring system qualities or behaviors that are critical to stakeholders, ensuring alignment with overall architectural objectives.

In microservices architectures, service granularity influences testing, deployment, performance, and reliability. Very fine-grained microservices are typically easier to test and deploy independently, but they often experience lower performance and reduced overall reliability due to increased interservice communication and more complex service choreography. Coarse-grained services exhibit contrasting characteristics. They generally provide higher robustness and reliability by minimizing communication overhead and coordination complexity, but they are more challenging to test and deploy because modifications affect a broader functional scope. The appropriate level of service granularity is determined by business drivers. Architectural decisions commonly begin with identifying these drivers and then aligning architectural characteristics such as performance, scalability, reliability, or deployment flexibility to support them.

## Mapping microservices to bounded contexts

A bounded context, a fundamental concept in [domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design) (DDD), defines a specific area within which a domain model is consistent and valid, ensuring clarity and separation of concerns. In microservices architecture, a bounded context often maps to a microservice, but this relationship can vary depending on the design approach. A one-to-one relationship, where each bounded context is implemented as a single microservice, is typically ideal as it maintains clear boundaries, reduces coupling, and enables independent deployment and scaling. However, other mappings may also be appropriate: a one-to-many relationship can arise when a bounded context is divided into multiple microservices to address varying scalability or other operational needs, while a many-to-one relationship may consolidate multiple bounded contexts into a single microservice for simplicity or to minimize operational overhead. The choice of relationship should balance the principles of DDD with the system's business goals, technical constraints, and operational requirements.

## Benefits

The benefit of decomposing an application into different smaller services are numerous:

* [Modularity](https://en.wikipedia.org/wiki/Modular_programming): This makes the application easier to understand, develop, test, and become more resilient to architecture erosion. This benefit is often argued in comparison to the complexity of monolithic architectures.
* [Scalability](https://en.wikipedia.org/wiki/Scalability): Since microservices are implemented and deployed independently of each other, i.e. they run within independent processes, they can be monitored and scaled independently.
* [Integration](https://en.wikipedia.org/wiki/System_integration) of heterogeneous and [legacy systems](https://en.wikipedia.org/wiki/Legacy_system): microservices are considered a viable means for modernizing existing monolithic software application.  There are experience reports of several companies who have successfully replaced parts of their existing software with microservices or are in the process of doing so. The process for [software modernization](https://en.wikipedia.org/wiki/Software_modernization) of legacy applications is done using an incremental approach.
* Distributed development: it parallelizes [development](https://en.wikipedia.org/wiki/Software_development) by enabling small autonomous teams to develop, [deploy](https://en.wikipedia.org/wiki/Software_deployment) and scale their respective services independently. It also allows the architecture of an individual service to emerge through continuous [refactoring](https://en.wikipedia.org/wiki/Refactoring). Microservice-based architectures facilitate [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery) and deployment.

## Criticism and concerns

The microservices approach is subject to criticism for a number of issues:

* Services form information barriers.
* Inter-service calls over a network have a higher cost in terms of network latency and message processing time than in-process [calls](https://en.wikipedia.org/wiki/Function_call) within a [monolithic](https://en.wikipedia.org/wiki/Monolithic_system) service process.
* [Testing](https://en.wikipedia.org/wiki/Software_testing) and [deployment](https://en.wikipedia.org/wiki/Software_deployment) can be complicated.
* Moving responsibilities between services is more difficult. It may involve communication between different teams, rewriting the functionality in another language or fitting it into a different infrastructure. However, microservices can be deployed independently from the rest of the application, while teams working on monoliths need to synchronize to deploy together.
* Viewing the size of services as the primary structuring mechanism can lead to too many services when the alternative of internal modularization may lead to a simpler design. This requires understanding the overall architecture of the applications and interdependencies between components.
* [Two-phased commits](https://en.wikipedia.org/wiki/Two-phase_commit_protocol) are regarded as an anti-pattern in microservices-based architectures, resulting in a tighter coupling of all the participants within the transaction. However, the lack of this technology causes awkward dances which have to be implemented by all the transaction participants in order to maintain data consistency.
* Development and support of many services are more challenging if they are built with different tools and technologies - this is especially a problem if engineers move between projects frequently.
* The protocol typically used with microservices (HTTP) was designed for public-facing services, and as such is unsuitable for working internal microservices that often must be impeccably reliable.
* While not specific to microservices, the decomposition methodology often uses functional decomposition, which does not handle changes in the requirements while still adding the complexity of services.
* The very concept of microservice is misleading since there are only services. There is no sound definition of when a service starts or stops being a microservice.
* Data aggregation. In order to have a full view of a working system, it is required to extract data sets from the microservices repositories and aggregate them into a single schema. For example, to be able to create operational reports that are not possible using a single microservice repository.

### Complexities

The architecture introduces additional complexity and new problems to deal with, such as [latency](https://en.wikipedia.org/wiki/Latency_(engineering)), [message format](https://en.wikipedia.org/wiki/Message_format) design, [backup](https://en.wikipedia.org/wiki/Backup)/availability/consistency (BAC), [load balancing](https://en.wikipedia.org/wiki/Load_balancing_(computing)) and [fault tolerance](https://en.wikipedia.org/wiki/Fault_tolerance). All of these problems have to be addressed at scale. The complexity of a [monolithic application](https://en.wikipedia.org/wiki/Monolithic_application) does not disappear if it is re-implemented as a set of microservices. Some of the complexity gets translated into operational complexity. Other places where the complexity manifests itself are increased network traffic and slower performance. Also, an application made up of any number of microservices has a larger number of interface points to access its respective [ecosystem](https://en.wikipedia.org/wiki/Software_ecosystem), which increases the architectural complexity. Various organizing principles (such as [hypermedia as the engine of application state](https://en.wikipedia.org/wiki/Hypermedia_as_the_Engine_of_Application_State) (HATEOAS), interface and data model documentation captured via [Swagger](https://en.wikipedia.org/wiki/Swagger_(software)), etc.) have been applied to reduce the impact of such additional complexity.

## Antipatterns

* The "data-driven migration antipattern", coined by Mark Richards, highlights the challenges of prioritizing data migration during the transition from a monolithic to a microservices architecture. To address this antipattern, an iterative approach can be helpful where application code is migrated first, with new microservices temporarily relying on the existing monolithic database. Over time, as the system is better understood, data can be decoupled and restructured, enabling individual microservices to operate with their own databases. This strategy can simplify the migration process and reduce data migration errors.
* The "timeout antipattern", coined by Mark Richards, describes the challenges of setting timeout values in distributed systems. Short timeouts may fail legitimate requests prematurely, leading to complex workarounds, while long timeouts can result in slow error responses and poor user experiences. The [circuit breaker pattern](https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern) can address these issues by monitoring service health through mechanisms such as heartbeats, "synthetic transactions", or real-time usage monitoring. This approach can enable faster failure detection and can improve the overall user experience in distributed architectures.
* Reporting on microservices data presents challenges, as retrieving data for a reporting service can either break the [bounded contexts](https://en.wikipedia.org/wiki/Domain-driven_design) of microservices, reduce the timeliness of the data, or both. This applies regardless of whether data is pulled directly from databases, retrieved via HTTP, or collected in batches. Mark Richards refers to this as the "reach-in reporting antipattern". A possible alternative to this approach is for databases to asynchronously push the necessary data to the reporting service instead of the reporting service pulling it. While this method requires a separate contract between microservices and the reporting service and can be complex to implement, it helps preserve bounded contexts while maintaining a high level of data timeliness.

## Challenges

Microservices are susceptible to the [fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) – a series of misconceptions that can lead to significant issues in software development and deployment.

### Code sharing challenges

Ideally, microservices follow a ["share-nothing"](https://en.wikipedia.org/wiki/Shared-nothing_architecture) architecture. However, in practice, microservices architectures often encounter situations where code must be shared across services. Common approaches to addressing this challenge include utilizing separate shared libraries for reusable components (e.g., a security library), replicating stable modules with minimal changes across services, or, in certain cases, consolidating multiple microservices into a single service to reduce complexity. Each approach has its advantages and trade-offs, depending on the specific context and requirements.

## Best practices

Richards & Ford in *Fundamentals of software architecture* (2020) propose each microservice should have its own architectural characteristics (a.k.a. [non functional requirements](https://en.wikipedia.org/wiki/Non-functional_requirement)), and architects should not define uniform characteristics for the entire [distributed system](https://en.wikipedia.org/wiki/Distributed_computing).

To avoid having to coordinate deployments across different microservices, Sam Newman suggests keeping the interfaces of microservices stable and making [backwards-compatible](https://en.wikipedia.org/wiki/Backward_compatibility) changes as interfaces evolve. On the topic of testing, Newman in *Building Microservices* (2015) proposes consumer-driven contract testing as a better alternative to traditional end-to-end testing in the context of microservices. He also suggests the use of [log](https://en.wikipedia.org/wiki/Logging_(computing)) aggregation and metrics aggregation as well as distributed tracing tools to ensure the [observability](https://en.wikipedia.org/wiki/Observability_(software)) of systems composed of microservices.

## Technologies

Computer microservices can be implemented in different programming languages and might use different infrastructures. Therefore, the most important technology choices are the way microservices communicate with each other (synchronous, asynchronous, UI integration) and the protocols used for the communication (e.g. RESTful HTTP, messaging, [GraphQL](https://en.wikipedia.org/wiki/GraphQL)). In a traditional system, most technology choices like the programming language impact the whole system. Therefore, the approach to choosing technologies is quite different.

The [Eclipse Foundation](https://en.wikipedia.org/wiki/Eclipse_Foundation) has published a specification for developing microservices, Eclipse MicroProfile.

### Service mesh

In a service mesh, each service instance is paired with an instance of a reverse proxy server, called a service proxy, sidecar proxy, or sidecar. The service instance and sidecar proxy share a container, and the containers are managed by a container orchestration tool such as [Kubernetes](https://en.wikipedia.org/wiki/Kubernetes), [Docker Swarm](https://en.wikipedia.org/wiki/Docker_(software)), or [DC/OS](https://en.wikipedia.org/wiki/Apache_Mesos). The service proxies are responsible for communication with other service instances and can support capabilities such as service (instance) discovery, load balancing, authentication and authorization, secure communications, and others.

## See also

* [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law)
* [Cross-cutting concern](https://en.wikipedia.org/wiki/Cross-cutting_concern)
* [Data mesh](https://en.wikipedia.org/wiki/Data_mesh), a domain-oriented data architecture
* [DevOps](https://en.wikipedia.org/wiki/DevOps)
* [Fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)
* [GraphQL](https://en.wikipedia.org/wiki/GraphQL)
* [gRPC](https://en.wikipedia.org/wiki/GRPC)
* [Interface description language](https://en.wikipedia.org/wiki/Interface_description_language) (IDL)
* [Representational state transfer](https://en.wikipedia.org/wiki/Representational_state_transfer) (REST)
* [Service-oriented architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture) (SOA)
* [Microfrontend](https://en.wikipedia.org/wiki/Microfrontend)
* [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)
* [Self-contained system (software)](https://en.wikipedia.org/wiki/Self-contained_system_(software))
* [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing)
* [Web-oriented architecture](https://en.wikipedia.org/wiki/Web-oriented_architecture) (WOA)

## References

1. **^** Fowler, Martin (2002). *Patterns of Enterprise Application Architecture*. Addison-Wesley Professional. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0321127426](https://en.wikipedia.org/wiki/Special:BookSources/978-0321127426).
2. ^       Newman, Sam (2015-02-20). *Building Microservices*. O'Reilly Media. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1491950357](https://en.wikipedia.org/wiki/Special:BookSources/978-1491950357).
3. **^** Wolff, Eberhard (2016-10-12). *Microservices: Flexible Software Architectures*. Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0134602417](https://en.wikipedia.org/wiki/Special:BookSources/978-0134602417).
4. **^** Nadareishvili, I., Mitra, R., McLarty, M., Amundsen, M., Microservice Architecture: Aligning Principles, Practices, and Culture, O'Reilly 2016
5. **^** ["4 Microservices Examples: Amazon, Netflix, Uber, and Etsy"](https://blog.dreamfactory.com/microservices-examples). *blog.dreamfactory.com*. Retrieved 2026-04-14.
6. **^** [Martin Fowler](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)) (28 August 2014). ["Microservice Prerequisites"](https://martinfowler.com/bliki/MicroservicePrerequisites.html). [Archived](https://web.archive.org/web/20231003075551/https://martinfowler.com/bliki/MicroservicePrerequisites.html) from the original on Oct 3, 2023.
7. **^** Richardson, Chris (November 2018). *Microservice Patterns*. Manning Publications. 1.4.1 [Scale cube](https://en.wikipedia.org/wiki/Scale_cube) and microservices. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781617294549](https://en.wikipedia.org/wiki/Special:BookSources/9781617294549).
8. **^** Mendonca, Nabor C.; Jamshidi, Pooyan; Garlan, David; Pahl, Claus (2019-10-16). "Developing Self-Adaptive Microservice Systems: Challenges and Directions". *IEEE Software*. **38** (2): 70–79. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1910.07660](https://arxiv.org/abs/1910.07660). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/MS.2019.2955937](https://doi.org/10.1109%2FMS.2019.2955937). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [204744007](https://api.semanticscholar.org/CorpusID:204744007).
9. ^     Richardson, Chris (2019). *Microservices patterns: with examples in Java*. Shelter Island, NY: Manning Publications. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-61729-454-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-61729-454-9).
10. ^     Christudas, Binildas (2019). *Practical Microservices Architectural Patterns: Event-Based Java Microservices with Spring Boot and Spring Cloud*. Berkeley, CA: Apress L. P. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4842-4501-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4842-4501-9).
11. **^** Russell, Perry; Rodgers, Peter; Sellman, Royston (2004). ["Architecture and Design of an XML Application Platform"](http://www.hpl.hp.com/techreports/2004/HPL-2004-23.html). *HP Technical Reports*. p. 62. Retrieved 20 August 2015.
12. **^** Rodgers, Peter (Feb 15, 2005). ["Service-Oriented Development on NetKernel- Patterns, Processes & Products to Reduce System Complexity"](https://web.archive.org/web/20180520124343/http://www.cloudcomputingexpo.com/node/80883). *CloudComputingExpo*. SYS-CON Media. Archived from [the original](http://www.cloudcomputingexpo.com/node/80883) on 20 May 2018. Retrieved 19 August 2015.
13. ^     Richards, Mark; Ford, Neal (2020). *Fundamentals of software architecture: an engineering approach* (First ed.). O'Reilly. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781492043454](https://en.wikipedia.org/wiki/Special:BookSources/9781492043454).
14. ^         Richards, Mark. *Microservices AntiPatterns and Pitfalls*. O'Reilly.
15. **^** *Building Microservices by Sam Newman*. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1492034025](https://en.wikipedia.org/wiki/Special:BookSources/978-1492034025).
16. ^   Chen, Lianping (2018). [*Microservices: Architecting for Continuous Delivery and DevOps*](https://www.researchgate.net/publication/323944215). [The IEEE International Conference on Software Architecture (ICSA 2018)](http://icsa-conferences.org/2018/). IEEE.
17. **^** Yousif, Mazin (2016). "Microservices". *IEEE Cloud Computing*. **3** (5): 4–5. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/MCC.2016.101](https://doi.org/10.1109%2FMCC.2016.101).
18. **^** 
Dragoni, Nicola; Lanese, Ivan; Larsen, Stephan Thordal; Mazzara, Manuel; Mustafin, Ruslan; Safina, Larisa (2017). ["Microservices: How to Make Your Application Scale"](https://hal.inria.fr/hal-01636132/file/microservices-make-application.pdf) (PDF). *Perspectives of System Informatics*. Lecture Notes in Computer Science. Vol. 10742. pp. 95–104. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1702.07149](https://arxiv.org/abs/1702.07149). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2017arXiv170207149D](https://ui.adsabs.harvard.edu/abs/2017arXiv170207149D). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-319-74313-4_8](https://doi.org/10.1007%2F978-3-319-74313-4_8). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-319-74312-7](https://en.wikipedia.org/wiki/Special:BookSources/978-3-319-74312-7). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1643730](https://api.semanticscholar.org/CorpusID:1643730).
19. **^** 
Newman, Sam (2015). *Building Microservices*. O'Reilly. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1491950357](https://en.wikipedia.org/wiki/Special:BookSources/978-1491950357).
20. **^** 
Wolff, Eberhard (2016). *Microservices: Flexible Software Architecture*. Addison Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0134602417](https://en.wikipedia.org/wiki/Special:BookSources/978-0134602417).
21. **^** 
Knoche, Holger; Hasselbring, Wilhelm (2019). ["Drivers and Barriers for Microservice Adoption – A Survey among Professionals in Germany"](https://www.researchgate.net/publication/330442182). *Enterprise Modelling and Information Systems Architectures*. **14**: 1:1–35–1:1–35. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18417/emisa.14.1](https://doi.org/10.18417%2Femisa.14.1).
22. ^   Taibi, Davide; Lenarduzzi, Valentina; Pahl, Claus; Janes, Andrea (2017). ["Microservices in agile software development: A workshop-based study into issues, advantages, and disadvantages"](https://www.researchgate.net/publication/319131505). *Proceedings of the XP2017 Scientific Workshops*. pp. 1–5. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3120459.3120483](https://doi.org/10.1145%2F3120459.3120483). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-5264-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-5264-2). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [28134110](https://api.semanticscholar.org/CorpusID:28134110).
23. **^** Richardson, Chris. ["Microservice architecture pattern"](http://microservices.io/patterns/microservices.html). *microservices.io*. Retrieved 2017-03-19.
24. **^** Chen, Lianping; Ali Babar, Muhammad (2014). "Towards an Evidence-Based Understanding of Emergence of Architecture through Continuous Refactoring in Agile Software Development". *Proceedings Working IEEE/IFIP Conference on Software Architecture 2014 WICSA 2014*. [The 11th Working IEEE/IFIP Conference on Software Architecture(WICSA 2014)](https://web.archive.org/web/20140730053454/http://wicsa2014.org/). IEEE. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/WICSA.2014.45](https://doi.org/10.1109%2FWICSA.2014.45).
25. **^** Balalaie, Armin; Heydarnoori, Abbas; Jamshidi, Pooyan (May 2016). ["Microservices Architecture Enables DevOps: Migration to a Cloud-Native Architecture"](http://spiral.imperial.ac.uk/bitstream/10044/1/40557/8/SO_SWSI-2015-10-0149.R1_Balalaie.pdf) (PDF). *IEEE Software*. **33** (3): 42–52. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/ms.2016.64](https://doi.org/10.1109%2Fms.2016.64). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[10044/1/40557](https://hdl.handle.net/10044%2F1%2F40557). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0740-7459](https://search.worldcat.org/issn/0740-7459). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [18802650](https://api.semanticscholar.org/CorpusID:18802650).
26. **^** Stenberg, Jan (11 August 2014). ["Experiences from Failing with Microservices"](http://www.infoq.com/news/2014/08/failing-microservices).
27. ^   Martin Fowler. ["Microservices"](http://martinfowler.com/articles/microservices.html). [Archived](https://web.archive.org/web/20180214171522/https://martinfowler.com/articles/microservices.html) from the original on 14 February 2018.
28. **^** Calandra, Mariano (7 April 2021). ["Why unit testing is not enough when it comes to microservices"](https://medium.com/swlh/why-unit-testing-is-not-enough-when-it-comes-to-microservices-c3b0dde14174).
29. **^** Lanza, Michele; Ducasse, Stéphane (2002). ["Understanding Software Evolution using a Combination of Software Visualization and Software Metrics"](https://web.archive.org/web/20210227104157/https://rmod.inria.fr/archives/papers/Lanz02aEvolutionMatrix.pdf) (PDF). *Proceedings of LMO 2002 (Langages et Modèles à Objets)*: 135–149. Archived from [the original](https://rmod.inria.fr/archives/papers/Lanz02aEvolutionMatrix.pdf) (PDF) on Feb 27, 2021.
30. **^** Richardson, Chris (November 2018). "Chapter 4. Managing transactions with sagas". *Microservice Patterns*. Manning Publications. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-61729454-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-61729454-9).
31. **^** Devoxx (Aug 30, 2017). ["10 Tips for failing badly at Microservices by David Schmitz"](https://web.archive.org/web/20210422161909/https://www.youtube.com/watch?v=X0tjziAQfNQ). *[YouTube](https://en.wikipedia.org/wiki/YouTube)*. Archived from [the original](https://www.youtube.com/watch?v=X0tjziAQfNQ) on Apr 22, 2021.
32. ^    Löwy, Juval (2019). *Righting Software 1st ed*. Addison-Wesley Professional. pp. 73–75. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0136524038](https://en.wikipedia.org/wiki/Special:BookSources/978-0136524038).
33. **^** Pautasso, Cesare (2017). "Microservices in Practice, Part 2: Service Integration and Sustainability". *IEEE Software*. **34** (2): 97–104. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/MS.2017.56](https://doi.org/10.1109%2FMS.2017.56). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [30256045](https://api.semanticscholar.org/CorpusID:30256045).
34. **^** Pautasso, Cesare (2018). "Consistent Disaster Recovery for Microservices: the BAC Theorem". *IEEE Cloud Computing*. **5** (1): 49–59. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/MCC.2018.011791714](https://doi.org/10.1109%2FMCC.2018.011791714). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [4560021](https://api.semanticscholar.org/CorpusID:4560021).
35. **^** ["Developing Microservices for PaaS with Spring and Cloud Foundry"](http://www.infoq.com/presentations/microservices-pass-spring-cloud-foundry).
36. **^** [Fowler, Martin](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)). ["Microservice Trade-Offs"](https://www.martinfowler.com/articles/microservice-trade-offs.html#ops).
37. **^** "BRASS Building Resource Adaptive Software Systems". U.S. Government. DARPA. April 7, 2015. "Access to system components and the interfaces between clients and their applications, however, are mediated via a number of often unrelated mechanisms, including informally documented [application programming interfaces](https://en.wikipedia.org/wiki/Application_programming_interface) (APIs), idiosyncratic foreign function interfaces, complex ill-understood model definitions, or *ad hoc* data formats. These mechanisms usually provide only partial and incomplete understanding of the semantics of the components themselves. In the presence of such complexity, it is not surprising that applications typically bake-in many assumptions about the expected behavior of the ecosystem they interact with".
38. **^** Wolff, Eberhard (2018-04-15). [*Microservices - A Practical Guide*](http://practical-microservices.com). CreateSpace Independent Publishing Platform. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1717075901](https://en.wikipedia.org/wiki/Special:BookSources/978-1717075901).
39. **^** Swart, Stephanie (14 December 2016). ["Eclipse MicroProfile"](https://projects.eclipse.org/projects/technology.microprofile). *projects.eclipse.org*.
40. **^** ["MicroProfile"](https://microprofile.io/). *MicroProfile*. Retrieved 2021-04-11.

## Further reading

* ["Special theme issue on microservices"](https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=8354413). *[IEEE Software](https://en.wikipedia.org/wiki/IEEE_Software)*. **35** (3). May–June 2018.
* I. Nadareishvili et al., [Microservices Architecture – Aligning Principles, Practices and Culture](https://www.ca.com/content/dam/ca/us/files/ebook/microservice-architecture-aligning-principles-practices-and-culture.pdf), O'Reilly, 2016,   [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-491-95979-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-491-95979-4)
* S. Newman, Building Microservices – Designing Fine-Grained Systems, O'Reilly, 2015 [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1491950357](https://en.wikipedia.org/wiki/Special:BookSources/978-1491950357)
* Wijesuriya, Viraj Brian (2016-08-29) *[Microservice Architecture, Lecture Notes](https://www.slideshare.net/tyrantbrian/microservice-architecture-65505794)* - University of Colombo School of Computing, Sri Lanka
* Christudas Binildas (June 27, 2019). Practical Microservices Architectural Patterns: Event-Based Java Microservices with Spring Boot and Spring Cloud. Apress. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1484245002](https://en.wikipedia.org/wiki/Special:BookSources/978-1484245002).
 
NewPP limit report
Parsed by mw‐web.codfw.main‐5f848bdcd5‐frzt2
Cached time: 20260418212657
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, show‐toc]
CPU time usage: 0.449 seconds
Real time usage: 0.537 seconds
Preprocessor visited node count: 2064/1000000
Revision size: 33038/2097152 bytes
Post‐expand include size: 101606/2097152 bytes
Template argument size: 918/2097152 bytes
Highest expansion depth: 9/100
Expensive parser function count: 4/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 164519/5000000 bytes
Lua time usage: 0.291/10.000 seconds
Lua memory usage: 6812552/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  457.788      1 -total
 51.92%  237.663      1 Template:Reflist
 25.62%  117.290     16 Template:Cite_book
 15.59%   71.361      1 Template:Web_interfaces
 11.42%   52.261      1 Template:Single_source
 10.53%   48.223      1 Template:Short_description
 10.26%   46.970      1 Template:Ambox
 10.22%   46.779     13 Template:Cite_web
  7.23%   33.100      8 Template:Cite_journal
  6.66%   30.497      2 Template:Pagetype
 Render ID 53e22e67-3b6d-11f1-a679-e5c4bb501909  Saved in parser cache with key enwiki:pcache:43509183:|#|:idhash:canonical and timestamp 20260418212657 and revision id 1348846409. Rendering was triggered because: page_view