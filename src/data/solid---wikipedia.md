# SOLID - Wikipedia

Source: https://en.wikipedia.org/wiki/SOLID

---

From Wikipedia, the free encyclopedia

Object-oriented programming design principles

This article is about software programming principles. For the fundamental state of matter, see

[Solid](https://en.wikipedia.org/wiki/Solid)

. For other uses, see

[Solid (disambiguation)](https://en.wikipedia.org/wiki/Solid_(disambiguation))

.

In [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming), **SOLID** is a [mnemonic](https://en.wikipedia.org/wiki/Mnemonic) [acronym](https://en.wikipedia.org/wiki/Acronym) for five principles intended to make [source code](https://en.wikipedia.org/wiki/Source_code) more understandable, flexible, and [maintainable](https://en.wikipedia.org/wiki/Software_maintenance). Although the principles apply to object-oriented programming, they can also form a core philosophy for methodologies such as [agile software development](https://en.wikipedia.org/wiki/Agile_software_development) and [adaptive software development](https://en.wikipedia.org/wiki/Adaptive_software_development).

Software engineer and instructor [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) introduced the basic principles of SOLID design in his 2000 paper *Design Principles and Design Patterns* about [software rot](https://en.wikipedia.org/wiki/Software_rot). The *SOLID* acronym was coined around 2004 by Michael Feathers.

### Single responsibility principle

[[edit](/w/index.php?title=SOLID&action=edit&section=2)]

The [single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) (SRP) states that there should never be more than one reason for a [class](https://en.wikipedia.org/wiki/Class_(programming)) to change. In other words, every class should have only one responsibility.

Importance:

* Maintainability: When classes have a single, well-defined responsibility, they're easier to understand and modify.
* Testability: It's easier to write unit tests for classes with a single focus.
* Flexibility: Changes to one responsibility don't affect unrelated parts of the system.

### Open–closed principle

[[edit](/w/index.php?title=SOLID&action=edit&section=3)]

The [open–closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle) (OCP) states that software entities should be open for extension, but closed for modification.

Importance:

* Extensibility: New features can be added without modifying existing code.
* Stability: Reduces the risk of introducing bugs when making changes.
* Flexibility: Adapts to changing requirements more easily.

### Liskov substitution principle

[[edit](/w/index.php?title=SOLID&action=edit&section=4)]

The [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle) (LSP) states that functions that use pointers or references to base classes must be able to use pointers or references of derived classes without knowing it. See also [design by contract](https://en.wikipedia.org/wiki/Design_by_contract).

Importance:

* [Polymorphism](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)): Enables the use of polymorphic behavior, making code more flexible and reusable.
* Reliability: Ensures that subclasses adhere to the contract defined by the superclass.
* Predictability: Guarantees that replacing a superclass object with a subclass object won't break the program.

### Interface segregation principle

[[edit](/w/index.php?title=SOLID&action=edit&section=5)]

The [interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle) (ISP) states that clients should not be forced to depend upon interface methods that they do not use.

Importance:

* Decoupling: Reduces dependencies between classes, making the code more [modular](https://en.wikipedia.org/wiki/Modularity) and maintainable.
* Flexibility: Allows for more targeted implementations of interfaces.
* Avoids unnecessary dependencies: Clients don't have to depend on methods they don't use.

### Dependency inversion principle

[[edit](/w/index.php?title=SOLID&action=edit&section=6)]

The [dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle) (DIP) states to depend upon abstractions, not concretes.

Importance:

* [Loose coupling](https://en.wikipedia.org/wiki/Loose_coupling): Reduces dependencies between modules, making the code more flexible and easier to test.
* Flexibility: Enables changes to implementations without affecting clients.
* [Maintainability](https://en.wikipedia.org/wiki/Maintainability): Makes code easier to understand and modify.

1. ^ [***a***](#cite_ref-metz-presentation-2009_1-0) [***b***](#cite_ref-metz-presentation-2009_1-1) [Metz, Sandi](https://en.wikipedia.org/wiki/Sandi_Metz) (May 2009). ["SOLID Object-Oriented Design"](https://www.youtube.com/watch?v=v-2yFMzxqwU). *[YouTube](https://en.wikipedia.org/wiki/YouTube)*. [Archived](https://ghostarchive.org/varchive/youtube/20211221/v-2yFMzxqwU) from the original on 2021-12-21. Retrieved 2019-08-13. Talk given at the 2009 Gotham [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) Conference.
2. **[^](#cite_ref-ub-old-web-solid_2-0)** [Martin, Robert C.](https://en.wikipedia.org/wiki/Robert_C._Martin) ["Principles Of OOD"](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod). *ButUncleBob.com*. [Archived](https://web.archive.org/web/20140910201842/http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod) from the original on Sep 10, 2014. Retrieved 2014-07-17.. (Note the reference to "the first five principles", although the acronym is not used in this article.) Dates back to at least 2003.
3. ^ [***a***](#cite_ref-ub-solid_3-0) [***b***](#cite_ref-ub-solid_3-1) Martin, Robert C. (13 Feb 2009). ["Getting a SOLID start"](https://sites.google.com/site/unclebobconsultingllc/getting-a-solid-start). *Uncle Bob Consulting LLC (Google Sites)*. [Archived](https://web.archive.org/web/20130917122741/https://sites.google.com/site/unclebobconsultingllc/getting-a-solid-start) from the original on Sep 17, 2013. Retrieved 2013-08-19.
4. ^ [***a***](#cite_ref-martin-design-principles_4-0) [***b***](#cite_ref-martin-design-principles_4-1) [***c***](#cite_ref-martin-design-principles_4-2) [***d***](#cite_ref-martin-design-principles_4-3) Martin, Robert C. (2000). ["Design Principles and Design Patterns"](https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf) (PDF). *objectmentor.com*. Archived from the original on 2015-09-06.
5. **[^](#cite_ref-5)** Martin, Robert (2018). [*Clean Architecture: A Craftsman's Guide to Software Structure and Design*](https://books.google.com/books?id=uGE1DwAAQBAJ&q=2004+or+thereabouts+by+Michael+Feathers). Pearson. p. 58. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-449416-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-449416-6).
6. **[^](#cite_ref-6)** ["Single Responsibility Principle"](https://web.archive.org/web/20150202200348/http://www.objectmentor.com/resources/articles/srp.pdf) (PDF). *objectmentor.com*. Archived from the original on 2 February 2015.
7. ^ [***a***](#cite_ref-cleancode_7-0) [***b***](#cite_ref-cleancode_7-1) [Martin, Robert C.](https://en.wikipedia.org/wiki/Robert_Cecil_Martin) (2003). [*Agile Software Development, Principles, Patterns, and Practices*](https://books.google.com/books?id=0HYhAQAAIAAJ). Prentice Hall. p. 95. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0135974445](https://en.wikipedia.org/wiki/Special:BookSources/978-0135974445).
8. **[^](#cite_ref-8)** ["Open/Closed Principle"](https://web.archive.org/web/20150905081105/http://www.objectmentor.com/resources/articles/ocp.pdf) (PDF). *objectmentor.com*. Archived from the original on 5 September 2015.
9. ^ [***a***](#cite_ref-:0_9-0) [***b***](#cite_ref-:0_9-1) [***c***](#cite_ref-:0_9-2) ["Liskov Substitution Principle"](https://web.archive.org/web/20150905081111/http://www.objectmentor.com/resources/articles/lsp.pdf) (PDF). *objectmentor.com*. Archived from the original on 5 September 2015.
10. **[^](#cite_ref-10)** ["Interface Segregation Principle"](https://web.archive.org/web/20150905081110/http://www.objectmentor.com/resources/articles/isp.pdf) (PDF). *objectmentor.com*. 1996. Archived from the original on 5 September 2015.
11. ^ [***a***](#cite_ref-dip_11-0) [***b***](#cite_ref-dip_11-1) ["Dependency Inversion Principle"](https://web.archive.org/web/20150905081103/http://www.objectmentor.com/resources/articles/dip.pdf) (PDF). *objectmentor.com*. Archived from the original on 5 September 2015.

![](https://en.wikipedia.org/wiki/Special:CentralAutoLogin/start?useformat=desktop&type=1x1&usesul3=1)