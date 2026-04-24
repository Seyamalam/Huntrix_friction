# REST

* Source: https://en.wikipedia.org/wiki/REST

---

**REST** (**Representational State Transfer**) is a [software architectural style](https://en.wikipedia.org/wiki/Software_architectural_style) that was created to describe the design and guide the development of the architecture for the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web). REST defines a set of constraints for how the architecture of a distributed, [Internet](https://en.wikipedia.org/wiki/Internet)-scale [hypermedia](https://en.wikipedia.org/wiki/Hypermedia) system, such as the Web, should behave. The REST architectural style emphasizes uniform [interfaces](https://en.wikipedia.org/wiki/API), independent deployment of [components](https://en.wikipedia.org/wiki/Software_component), the [scalability](https://en.wikipedia.org/wiki/Scalability) of interactions between them, and creating a [layered architecture](https://en.wikipedia.org/wiki/Multitier_architecture) to promote [caching](https://en.wikipedia.org/wiki/Caching) to reduce user-perceived [latency](https://en.wikipedia.org/wiki/Latency_(engineering)), enforce [security](https://en.wikipedia.org/wiki/Computer_security), and encapsulate [legacy systems](https://en.wikipedia.org/wiki/Legacy_system).

REST has been employed throughout the software industry to create [stateless](https://en.wikipedia.org/wiki/Stateless_protocol), reliable, [web-based applications](https://en.wikipedia.org/wiki/Web_application).  An application that adheres to the REST architectural constraints may be informally described as *RESTful*, although this term is more commonly associated with the design of [HTTP](https://en.wikipedia.org/wiki/HTTP)-based [APIs](https://en.wikipedia.org/wiki/API) and what are widely considered best practices regarding the "verbs" ([HTTP methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)) a [resource](https://en.wikipedia.org/wiki/Web_resource) responds to, while having little to do with REST as originally formulated—and is often even at odds with the concept.

## Principle

The term *representational state transfer* was introduced and defined in 2000 by computer scientist [Roy Fielding](https://en.wikipedia.org/wiki/Roy_Fielding) in his doctoral dissertation. It means that a server will respond with the representation of a resource (today, it will most often be an [HTML](https://en.wikipedia.org/wiki/HTML) document) and that resource will contain [hypermedia](https://en.wikipedia.org/wiki/Hypermedia) links that can be followed to make the state of the system change. Any such request will in turn receive the representation of a resource, and so on.

An important consequence is that the only [identifier](https://en.wikipedia.org/wiki/Identifier_(computer_languages)) that needs to be known is the identifier of the first resource requested, and all other identifiers will be discovered. This means that those identifiers can change without the need to inform the client beforehand and that client and server must be inherently [loosely coupled](https://en.wikipedia.org/wiki/Loose_coupling).

## History

[Roy Fielding](https://en.wikipedia.org/wiki/Roy_Fielding)

 speaking at 

[OSCON](https://en.wikipedia.org/wiki/O%27Reilly_Open_Source_Convention)

 2008

The Web began to enter everyday use in 1993–1994, when [websites for general use](https://en.wikipedia.org/wiki/List_of_websites_founded_before_1995) started to become available. At the time, only a fragmented description existed of the Web's architecture, and there was pressure within the community to agree on a standard for the Web interface protocols. For instance, several experimental extensions had been added to the communication protocol (HTTP) to support [proxies](https://en.wikipedia.org/wiki/Proxy_server), and more extensions were being proposed, but there was a need for a formal Web architecture with which to evaluate the impact of these changes.

The [W3C](https://en.wikipedia.org/wiki/W3C) and [IETF](https://en.wikipedia.org/wiki/IETF) [working groups](https://en.wikipedia.org/wiki/Working_group#Technical_working_groups) together started work on creating formal descriptions of the Web's three primary standards: [URI](https://en.wikipedia.org/wiki/URI), [HTTP](https://en.wikipedia.org/wiki/HTTP), and [HTML](https://en.wikipedia.org/wiki/HTML). Roy Fielding was involved in the creation of these standards (specifically HTTP 1.0 and 1.1, and URI), and during the next six years he created the REST architectural style, testing its constraints on the Web's [protocol standards](https://en.wikipedia.org/wiki/Software_standard) and using it as a means to define architectural improvements — and to identify architectural mismatches. Fielding defined REST in his 2000 PhD dissertation "Architectural Styles and the Design of Network-based Software Architectures" at [UC Irvine](https://en.wikipedia.org/wiki/University_of_California,_Irvine).

To create the REST architectural style, Fielding identified the requirements that apply when creating a world-wide network-based application, such as the need for a low entry barrier to enable global adoption. He also surveyed many existing architectural styles for network-based applications, identifying which features are shared with other styles, such as caching and client–server features, and those which are unique to REST, such as the concept of resources. Fielding was trying to both categorise the existing architecture of the current implementation and identify which aspects should be considered central to the behavioural and performance requirements of the Web.

By their nature, architectural styles are independent of any specific implementation, and while REST was created as part of the development of the Web standards, the implementation of the Web does not obey every constraint in the REST architectural style. Mismatches can occur due to ignorance or oversight, but the existence of the REST architectural style means that they can be identified before they become standardised. For example, Fielding identified the embedding of session information in URIs as a violation of the constraints of REST which can negatively affect shared caching and server scalability. [HTTP cookies](https://en.wikipedia.org/wiki/HTTP_cookies) also violate REST constraints because they can become out of sync with the browser's application state, making them unreliable; they also contain opaque data that can be a concern for [privacy](https://en.wikipedia.org/wiki/Internet_privacy) and [security](https://en.wikipedia.org/wiki/Internet_security).

## Architectural properties

The REST architectural style is designed for network-based applications, specifically client-server applications. But more than that, it is designed for Internet-scale usage, so the coupling between the *user agent* (client) and the *origin server* must be as [loose](https://en.wikipedia.org/wiki/Loose_coupling) as possible to facilitate large-scale adoption.

The strong decoupling of client and server together with the text-based transfer of information using a uniform addressing protocol provided the basis for meeting the requirements of the Web: [extensibility](https://en.wikipedia.org/wiki/Extensibility), anarchic scalability and independent deployment of components, large-grain data transfer, and a low entry-barrier for content readers, content authors and developers.

An 

[entity–relationship model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model)

 of the concepts expressed in the REST architectural style

The constraints of the REST architectural style affect the following architectural properties:

* Performance in component interactions, which can be the dominant factor in user-perceived performance and network efficiency;
* [Scalability](https://en.wikipedia.org/wiki/Scalability) allowing the support of large numbers of components and interactions among components;
* Simplicity of a uniform interface;
* Modifiability (a.k.a. [Extensibility](https://en.wikipedia.org/wiki/Extensibility)) of components to meet changing needs (even while the application is running);
* Visibility of communication between components by service agents;
* [Portability](https://en.wikipedia.org/wiki/Portability_(computer_science)) of components by moving program code with the data;
* Reliability in the resistance to failure at the system level in the presence of failures within components, connectors, or data.

## Architectural constraints

The REST architectural style defines six guiding constraints. When these constraints are applied to the system architecture, it gains desirable [non-functional properties](https://en.wikipedia.org/wiki/Non-functional_requirement), such as performance, scalability, simplicity, modifiability, visibility, portability, and reliability.

The formal REST constraints are as follows:

* Client/Server – Clients are separated from servers by a well-defined interface
* Stateless – A specific client does not consume server storage when the client is "at rest"
* Cache – Responses indicate their own cacheability
* Uniform interface
* Layered system – A client cannot ordinarily tell whether it is connected directly to the end server, or to an intermediary along the way
* Code on demand (optional) – Servers are able to temporarily extend or customize the functionality of a client by transferring logic to the client that can be executed within a standard virtual machine

### Uniform interface

The uniform interface constraint is fundamental to the design of any RESTful system. It simplifies and decouples the architecture, which enables each part to evolve independently. The four constraints for this uniform interface are:

* Resource identification in requests: Individual resources are identified in requests using [URIs](https://en.wikipedia.org/wiki/Uniform_resource_identifier). The resources themselves are conceptually separate from the representations that are returned to the client. For example, the server could send data from its database as [HTML](https://en.wikipedia.org/wiki/HTML), [XML](https://en.wikipedia.org/wiki/XML) or as [JSON](https://en.wikipedia.org/wiki/JSON)—none of which are the server's internal representation.
* Resource manipulation through representations: When a client holds a representation of a resource, including any [metadata](https://en.wikipedia.org/wiki/Metadata) attached, it has enough information to modify or delete the resource's state.
* Self-descriptive messages: Each message includes enough information to describe how to process the message. For example, which parser to invoke can be specified by a [media type](https://en.wikipedia.org/wiki/Media_type).
* Hypermedia as the engine of application state ([HATEOAS](https://en.wikipedia.org/wiki/HATEOAS)) – Having accessed an initial URI for the REST application—analogous to a human Web user accessing the [home page](https://en.wikipedia.org/wiki/Home_page) of a website—a REST client should then be able to use server-provided links dynamically to discover all the available resources it needs. As access proceeds, the server responds with text that includes [hyperlinks](https://en.wikipedia.org/wiki/Hyperlink) to other resources that are currently available. There is no need for the client to be hard-coded with information regarding the structure of the server.

## Classification models

Several models have been developed to help classify HTTP APIs according to their adherence to various principles of REST design, such as

* the [Richardson Maturity Model](https://en.wikipedia.org/wiki/Richardson_Maturity_Model)
* the Classification of HTTP-based APIs
* the W S maturity model

## See also

* [Clean URL](https://en.wikipedia.org/wiki/Clean_URL) – URL intended to improve the usability of a website
* [Content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network) – Internet ecosystem layer that addresses bottlenecks
* [Domain application protocol](https://en.wikipedia.org/wiki/Domain_application_protocol) (DAP)
* [List of URI schemes](https://en.wikipedia.org/wiki/List_of_URI_schemes) – Namespace identifier assigned by IANA
* [Microservices](https://en.wikipedia.org/wiki/Microservices) – Collection of loosely coupled services used to build computer applications
* [Overview of RESTful API Description Languages](https://en.wikipedia.org/wiki/Overview_of_RESTful_API_Description_Languages) – Descriptions of computer languages
* [Resource-oriented architecture](https://en.wikipedia.org/wiki/Resource-oriented_architecture) – Architectural pattern in software design
* [Resource-oriented computing](https://en.wikipedia.org/wiki/Resource-oriented_computing) – Architectural pattern in software design
* [Service-oriented architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture) – Architectural pattern in software design
* [Web-oriented architecture](https://en.wikipedia.org/wiki/Web-oriented_architecture) – Architectural pattern in software design
* [Web service](https://en.wikipedia.org/wiki/Web_service) – Service offered between electronic devices via the Internet

## References

1. ^       Fielding, Roy Thomas (2000). ["Chapter 5: Representational State Transfer (REST)"](http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm). *Architectural Styles and the Design of Network-based Software Architectures* (Ph.D.). University of California, Irvine. [Archived](https://web.archive.org/web/20210513160155/https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) from the original on 2021-05-13. Retrieved 2004-08-17.
2. **^** Fielding, Roy T. (2008-10-20). ["REST APIs must be hypertext driven"](http://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven). roy.gbiv.com. [Archived](https://web.archive.org/web/20100318060707/http://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven) from the original on 2010-03-18. Retrieved 2016-07-06.
3. **^** Couldry, Nick (2012). [*Media, Society, World: Social Theory and Digital Media Practice*](https://books.google.com/books?id=AcHvP9trbkAC&pg=PA2). London: Polity Press. p. 2. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780745639208](https://en.wikipedia.org/wiki/Special:BookSources/9780745639208). [Archived](https://web.archive.org/web/20240227165043/https://books.google.com/books?id=AcHvP9trbkAC&pg=PA2#v=onepage&q&f=false) from the original on 2024-02-27. Retrieved 2021-06-09.
4. ^   Fielding, Roy Thomas (2000). ["Chapter 6: Experience and Evaluation"](https://www.ics.uci.edu/~fielding/pubs/dissertation/evaluation.htm). *Architectural Styles and the Design of Network-based Software Architectures* (Ph.D.). University of California, Irvine. [Archived](https://web.archive.org/web/20230326022001/https://www.ics.uci.edu/~fielding/pubs/dissertation/evaluation.htm) from the original on 2023-03-26. Retrieved 2023-06-21.
5. **^** ["Fielding discussing the definition of the REST term"](https://web.archive.org/web/20151105014201/https://groups.yahoo.com/neo/groups/rest-discuss/conversations/topics/6735). groups.yahoo.com. Archived from [the original](https://groups.yahoo.com/neo/groups/rest-discuss/conversations/topics/6735) on November 5, 2015. Retrieved 2017-08-08.
6. **^** Fielding, Roy Thomas (2000). ["Chapter 4: Designing the Web Architecture: Problems and Insights"](https://ics.uci.edu/~fielding/pubs/dissertation/web_arch_domain.htm). *Architectural Styles and the Design of Network-based Software Architectures* (Ph.D.). University of California, Irvine. Retrieved 2025-01-28.`{{[cite thesis](https://en.wikipedia.org/wiki/Template:Cite_thesis)}}`:  CS1 maint: url-status ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_url-status))
7. ^   Erl, Thomas; Carlyle, Benjamin; Pautasso, Cesare; Balasubramanian, Raj (2012). "5.1". *SOA with REST: Principles, Patterns & Constraints for Building Enterprise Solutions with REST*. Upper Saddle River, New Jersey: Prentice Hall. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-701251-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-701251-0).
8. ^   Fielding, Roy Thomas (2000). ["Chapter 2: Network-based Application Architectures"](http://www.ics.uci.edu/~fielding/pubs/dissertation/net_app_arch.htm). *Architectural Styles and the Design of Network-based Software Architectures* (Ph.D.). University of California, Irvine. [Archived](https://web.archive.org/web/20141216114322/http://www.ics.uci.edu/~fielding/pubs/dissertation/net_app_arch.htm) from the original on 2014-12-16. Retrieved 2014-04-12.
9. **^** Richardson, Leonard; Ruby, Sam (2007). [*RESTful Web Services*](https://archive.org/details/restfulwebservic00rich_0). Sebastopol, California: O'Reilly Media. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-596-52926-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-596-52926-0).
10. **^** ["What is REST API?"](https://www.visual-paradigm.com/guide/development/what-is-rest-api/). *www.visual-paradigm.com*. [Archived](https://web.archive.org/web/20240224173920/https://www.visual-paradigm.com/guide/development/what-is-rest-api/) from the original on 2024-02-24. Retrieved 2024-02-24.
11. **^** Gupta, Lokesh (2 June 2018). ["REST HATEOAS"](http://restfulapi.net/hateoas/). *REST API Tutorial*. RESTfulAPI.net. [Archived](https://web.archive.org/web/20190407073345/https://restfulapi.net/hateoas/) from the original on 7 April 2019. Retrieved March 10, 2019.
12. **^** ["Classification of HTTP APIs"](http://algermissen.io/classification_of_http_apis.html). *algermissen.io*. [Archived](https://web.archive.org/web/20230129022641/http://algermissen.io/classification_of_http_apis.html) from the original on 2023-01-29. Retrieved 2023-01-29.
13. **^** Ivan Salvadori, Frank Siqueira (June 2015). ["A Maturity Model for Semantic RESTful Web APIs"](https://www.researchgate.net/publication/281287283). *Conference: Web Services (ICWS), 2015 IEEE International Conference OnAt*. New York. [Archived](https://web.archive.org/web/20240227165042/https://www.researchgate.net/publication/281287283_A_Maturity_Model_for_Semantic_RESTful_Web_APIs) from the original on 2024-02-27. Retrieved 2020-12-14 – via ResearchGate.

## Further reading

* Pautasso, Cesare; Wilde, Erik; Alarcon, Rosa (2014), [*REST: Advanced Research Topics and Practical Applications*](https://www.springer.com/engineering/signals/book/978-1-4614-9298-6), Springer, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781461492986](https://en.wikipedia.org/wiki/Special:BookSources/9781461492986)
* Pautasso, Cesare; Zimmermann, Olaf; Leymann, Frank (April 2008), "Restful web services vs. "big"' web services", [*Proceedings of the 17th international conference on World Wide Web*](http://www.jopera.org/docs/publications/2008/restws), pp. 805–814, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1367497.1367606](https://doi.org/10.1145%2F1367497.1367606), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781605580852](https://en.wikipedia.org/wiki/Special:BookSources/9781605580852), [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [207167438](https://api.semanticscholar.org/CorpusID:207167438)
* Ferreira, Otavio (Nov 2009), [*Semantic Web Services: A RESTful Approach*](https://otaviofff.github.io/restful-grounding/), IADIS, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-972-8924-93-5](https://en.wikipedia.org/wiki/Special:BookSources/978-972-8924-93-5)
* Fowler, Martin (2010-03-18). ["Richardson Maturity Model: steps towards the glory of REST"](https://martinfowler.com/articles/richardsonMaturityModel.html). *martinfowler.com*. Retrieved 2017-06-26.
 
NewPP limit report
Parsed by mw‐web.codfw.main‐6f7f9565cb‐nl8vz
Cached time: 20260420135029
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.253 seconds
Real time usage: 0.393 seconds
Preprocessor visited node count: 2851/1000000
Revision size: 17785/2097152 bytes
Post‐expand include size: 67120/2097152 bytes
Template argument size: 1154/2097152 bytes
Highest expansion depth: 12/100
Expensive parser function count: 4/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 73154/5000000 bytes
Lua time usage: 0.182/10.000 seconds
Lua memory usage: 13918255/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  350.631      1 -total
 29.72%  104.198     11 Template:Annotated_link
 23.86%   83.669      1 Template:Reflist
 14.49%   50.819      4 Template:Cite_thesis
 14.07%   49.333      1 Template:Web_interfaces
 10.64%   37.291      1 Template:Short_description
  7.53%   26.419      1 Template:Authority_control
  6.44%   22.587      2 Template:Pagetype
  4.60%   16.120      1 Template:Pp-semi-indef
  4.01%   14.062      1 Template:Other_uses
 Render ID e43082d8-3cbf-11f1-be93-637ddfd4f6b7  Saved in parser cache with key enwiki:pcache:907222:|#|:idhash:canonical and timestamp 20260420135029 and revision id 1345506837. Rendering was triggered because: page_view