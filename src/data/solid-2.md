# SOLID

* Source: https://en.wikipedia.org/wiki/SOLID

---

| SOLID |
| --- |
| Principles |
| [Single responsibility](https://en.wikipedia.org/wiki/Single-responsibility_principle) [Open–closed](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle) [Liskov substitution](https://en.wikipedia.org/wiki/Liskov_substitution_principle) [Interface segregation](https://en.wikipedia.org/wiki/Interface_segregation_principle) [Dependency inversion](https://en.wikipedia.org/wiki/Dependency_inversion_principle) |
| [v](https://en.wikipedia.org/wiki/Template:Solid_principles)[t](https://en.wikipedia.org/wiki/Template_talk:Solid_principles)[e](https://en.wikipedia.org/wiki/Special:EditPage/Template:Solid_principles) |

In [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming), **SOLID** is a [mnemonic](https://en.wikipedia.org/wiki/Mnemonic) [acronym](https://en.wikipedia.org/wiki/Acronym) for five principles intended to make [source code](https://en.wikipedia.org/wiki/Source_code) more understandable, flexible, and [maintainable](https://en.wikipedia.org/wiki/Software_maintenance). Although the principles apply to object-oriented programming, they can also form a core philosophy for methodologies such as [agile software development](https://en.wikipedia.org/wiki/Agile_software_development) and [adaptive software development](https://en.wikipedia.org/wiki/Adaptive_software_development).

Software engineer and instructor [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) introduced the basic principles of SOLID design in his 2000 paper *Design Principles and Design Patterns* about [software rot](https://en.wikipedia.org/wiki/Software_rot). The *SOLID* acronym was coined around 2004 by Michael Feathers.

## Principles

### Single responsibility principle

The [single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) (SRP) states that there should never be more than one reason for a [class](https://en.wikipedia.org/wiki/Class_(programming)) to change. In other words, every class should have only one responsibility.

Importance:

* Maintainability: When classes have a single, well-defined responsibility, they're easier to understand and modify.
* Testability: It's easier to write unit tests for classes with a single focus.
* Flexibility: Changes to one responsibility don't affect unrelated parts of the system.

### Open–closed principle

The [open–closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle) (OCP) states that software entities should be open for extension, but closed for modification.

Importance:

* Extensibility: New features can be added without modifying existing code.
* Stability: Reduces the risk of introducing bugs when making changes.
* Flexibility: Adapts to changing requirements more easily.

### Liskov substitution principle

The [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle) (LSP) states that functions that use pointers or references to base classes must be able to use pointers or references of derived classes without knowing it.

Importance:

* [Polymorphism](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)): Enables the use of polymorphic behavior, making code more flexible and reusable.
* Reliability: Ensures that subclasses adhere to the contract defined by the superclass.
* Predictability: Guarantees that replacing a superclass object with a subclass object won't break the program.

### Interface segregation principle

The [interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle) (ISP) states that clients should not be forced to depend upon interface methods that they do not use.

Importance:

* Decoupling: Reduces dependencies between classes, making the code more [modular](https://en.wikipedia.org/wiki/Modularity) and maintainable.
* Flexibility: Allows for more targeted implementations of interfaces.
* Avoids unnecessary dependencies: Clients don't have to depend on methods they don't use.

### Dependency inversion principle

The [dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle) (DIP) states to depend upon abstractions, not concretes.

Importance:

* [Loose coupling](https://en.wikipedia.org/wiki/Loose_coupling): Reduces dependencies between modules, making the code more flexible and easier to test.
* Flexibility: Enables changes to implementations without affecting clients.
* [Maintainability](https://en.wikipedia.org/wiki/Maintainability): Makes code easier to understand and modify.

## See also

* [Code reuse](https://en.wikipedia.org/wiki/Code_reuse)
* [GRASP (object-oriented design)](https://en.wikipedia.org/wiki/GRASP_(object-oriented_design))
* [Inheritance (object-oriented programming)](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming))
* [List of software development philosophies](https://en.wikipedia.org/wiki/List_of_software_development_philosophies)

## References

1. ^   [Metz, Sandi](https://en.wikipedia.org/wiki/Sandi_Metz) (May 2009). ["SOLID Object-Oriented Design"](https://www.youtube.com/watch?v=v-2yFMzxqwU). *[YouTube](https://en.wikipedia.org/wiki/YouTube)*. [Archived](https://ghostarchive.org/varchive/youtube/20211221/v-2yFMzxqwU) from the original on 2021-12-21. Retrieved 2019-08-13. Talk given at the 2009 Gotham [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) Conference.
2. **^** [Martin, Robert C.](https://en.wikipedia.org/wiki/Robert_C._Martin) ["Principles Of OOD"](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod). *ButUncleBob.com*. [Archived](https://web.archive.org/web/20140910201842/http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod) from the original on Sep 10, 2014. Retrieved 2014-07-17.. (Note the reference to "the first five principles", although the acronym is not used in this article.) Dates back to at least 2003.
3. ^   Martin, Robert C. (13 Feb 2009). ["Getting a SOLID start"](https://sites.google.com/site/unclebobconsultingllc/getting-a-solid-start). *Uncle Bob Consulting LLC (Google Sites)*. [Archived](https://web.archive.org/web/20130917122741/https://sites.google.com/site/unclebobconsultingllc/getting-a-solid-start) from the original on Sep 17, 2013. Retrieved 2013-08-19.
4. ^     Martin, Robert C. (2000). ["Design Principles and Design Patterns"](https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf) (PDF). *objectmentor.com*. Archived from the original on 2015-09-06.
5. **^** Martin, Robert (2018). [*Clean Architecture: A Craftsman's Guide to Software Structure and Design*](https://books.google.com/books?id=uGE1DwAAQBAJ&q=2004+or+thereabouts+by+Michael+Feathers). Pearson. p. 58. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-449416-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-449416-6).
6. **^** ["Single Responsibility Principle"](https://web.archive.org/web/20150202200348/http://www.objectmentor.com/resources/articles/srp.pdf) (PDF). *objectmentor.com*. Archived from the original on 2 February 2015.
7. ^   [Martin, Robert C.](https://en.wikipedia.org/wiki/Robert_Cecil_Martin) (2003). [*Agile Software Development, Principles, Patterns, and Practices*](https://books.google.com/books?id=0HYhAQAAIAAJ). Prentice Hall. p. 95. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0135974445](https://en.wikipedia.org/wiki/Special:BookSources/978-0135974445).
8. **^** ["Open/Closed Principle"](https://web.archive.org/web/20150905081105/http://www.objectmentor.com/resources/articles/ocp.pdf) (PDF). *objectmentor.com*. Archived from the original on 5 September 2015.
9. ^    ["Liskov Substitution Principle"](https://web.archive.org/web/20150905081111/http://www.objectmentor.com/resources/articles/lsp.pdf) (PDF). *objectmentor.com*. Archived from the original on 5 September 2015.
10. **^** ["Interface Segregation Principle"](https://web.archive.org/web/20150905081110/http://www.objectmentor.com/resources/articles/isp.pdf) (PDF). *objectmentor.com*. 1996. Archived from the original on 5 September 2015.
11. ^   ["Dependency Inversion Principle"](https://web.archive.org/web/20150905081103/http://www.objectmentor.com/resources/articles/dip.pdf) (PDF). *objectmentor.com*. Archived from the original on 5 September 2015.
 
NewPP limit report
Parsed by mw‐api‐ext.codfw.main‐7db77dc9c4‐z7n4b
Cached time: 20260415172006
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, show‐toc]
CPU time usage: 0.091 seconds
Real time usage: 0.146 seconds
Preprocessor visited node count: 981/1000000
Revision size: 7979/2097152 bytes
Post‐expand include size: 23209/2097152 bytes
Template argument size: 727/2097152 bytes
Highest expansion depth: 15/100
Expensive parser function count: 2/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 52268/5000000 bytes
Lua time usage: 0.051/10.000 seconds
Lua memory usage: 6492359/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  133.647      1 -total
 44.08%   58.918      1 Template:Reflist
 34.87%   46.602      9 Template:Cite_web
 26.26%   35.101      1 Template:Short_description
 17.27%   23.079      2 Template:Pagetype
  9.03%   12.072      1 Template:Solid_principles
  8.81%   11.781      1 Template:Rp
  8.42%   11.249      1 Template:Sidebar
  7.63%   10.200      1 Template:R/superscript
  6.35%    8.486      1 Template:About
 Render ID 5899b8d8-38ef-11f1-83fc-398eb7bd0f37  Saved in parser cache with key enwiki:pcache:24233616:|#|:idhash:canonical and timestamp 20260415172006 and revision id 1349078664. Rendering was triggered because: unknown