# Software design pattern

* Source: https://en.wikipedia.org/wiki/Software_design_pattern

---

A **software design pattern** describes a [reusable](https://en.wikipedia.org/wiki/Reusability) solution to a commonly needed behavior in [software](https://en.wikipedia.org/wiki/Software). A design pattern is not a rigid structure to be [copied](https://en.wikipedia.org/wiki/Copy_and_paste) directly into [source code](https://en.wikipedia.org/wiki/Source_code). Rather, it is a description of and a template for solving a particular type of problem that can be used in many different contexts, including different [programming languages](https://en.wikipedia.org/wiki/Programming_language) and [computing platforms](https://en.wikipedia.org/wiki/Computing_platform). Design patterns can be viewed as formalized [best practices](https://en.wikipedia.org/wiki/Best_practice) that the [programmer](https://en.wikipedia.org/wiki/Programmer) may use to solve common problems when designing software.

[Object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) design patterns typically show relationships and interactions between [classes](https://en.wikipedia.org/wiki/Class_(computer_science)) or [objects](https://en.wikipedia.org/wiki/Object_(computer_science)), without specifying the final application classes or objects that are involved. Patterns that imply mutable state may be unsuited for [functional programming](https://en.wikipedia.org/wiki/Functional_programming) languages. Some patterns can be rendered unnecessary in languages that have built-in support for solving the problem they are trying to solve, and object-oriented patterns are not necessarily suitable for non-object-oriented languages.

## History

Patterns originated as an [architectural concept](https://en.wikipedia.org/wiki/Pattern_(architecture)) by [Christopher Alexander](https://en.wikipedia.org/wiki/Christopher_Alexander) as early as 1977 in [A Pattern Language](https://en.wikipedia.org/wiki/A_Pattern_Language) (cf. his article, "The Pattern of Streets," JOURNAL OF THE AIP, September, 1966, Vol. 32, No. 5, pp. 273–278). In 1987, [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck) and [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) began experimenting with the idea of applying patterns to programming – specifically [pattern languages](https://en.wikipedia.org/wiki/Pattern_language) – and presented their results at the [OOPSLA](https://en.wikipedia.org/wiki/OOPSLA) conference that year. In the following years, Beck, Cunningham and others followed up on this work.

Design patterns gained popularity in [computer science](https://en.wikipedia.org/wiki/Computer_science) after the book [*Design Patterns: Elements of Reusable Object-Oriented Software*](https://en.wikipedia.org/wiki/Design_Patterns) was published in 1994  by the so-called "Gang of Four" (Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides), which is frequently abbreviated as "GoF". That same year, the first [Pattern Languages of Programming](https://en.wikipedia.org/wiki/Pattern_Languages_of_Programming) Conference was held, and the following year the [Portland Pattern Repository](https://en.wikipedia.org/wiki/Portland_Pattern_Repository) was set up for documentation of design patterns.

Although design patterns have been applied practically for a long time, formalization of the concept of design patterns languished for several years.

## Practice

Design patterns can speed up the development process by providing proven development paradigms. Effective software design requires considering issues that may not become apparent until later in the implementation. Freshly written code can often have hidden, subtle issues that take time to be detected – issues that sometimes can cause major problems down the road. Reusing design patterns can help to prevent such issues, and enhance code readability for those familiar with the patterns.

Software design techniques are difficult to apply to a broader range of problems. Design patterns provide general solutions, [documented](https://en.wikipedia.org/wiki/Documentation) in a format that does not require specifics tied to a particular problem.

In 1996, Christopher Alexander was invited to give a [Keynote Speech](https://www.patternlanguage.com/archive/ieee.html) to the 1996 OOPSLA Convention.  Here he reflected on how his work on Patterns in Architecture had developed and his hopes for how the Software Design community could help Architecture extend Patterns to create living structures that use generative schemes that are more like computer code.

## Motif

A pattern describes a *design motif*, a.k.a. *prototypical micro-architecture*, as a set of program constituents (e.g., classes, methods...) and their relationships. A developer adapts the motif to their codebase to solve the problem described by the pattern. The resulting code has structure and organization similar to the chosen motif.

## Domain-specific patterns

Efforts have also been made to codify design patterns in particular domains, including the use of existing design patterns as well as domain-specific design patterns. Examples include [user interface](https://en.wikipedia.org/wiki/User_interface) design patterns, [information visualization](https://en.wikipedia.org/wiki/Information_visualization), secure design, "secure usability", Web design  and business model design.

The annual [Pattern Languages of Programming](https://en.wikipedia.org/wiki/Pattern_Languages_of_Programming) Conference proceedings  include many examples of domain-specific patterns.

## Object-oriented programming

[Object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) design patterns typically show relationships and interactions between [classes](https://en.wikipedia.org/wiki/Class_(computer_science)) or [objects](https://en.wikipedia.org/wiki/Object_(computer_science)), without specifying the final application classes or objects that are involved. Patterns that imply mutable state may be unsuited for [functional programming](https://en.wikipedia.org/wiki/Functional_programming) languages. Some patterns can be rendered unnecessary in languages that have built-in support for solving the problem they are trying to solve, and object-oriented patterns are not necessarily suitable for non-object-oriented languages.

## Examples

Design patterns can be organized into groups based on what kind of problem they solve.

### Creational

A [creational pattern](https://en.wikipedia.org/wiki/Creational_pattern) creates objects.

| Name | Description | In *[Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)* | In *[Code Complete](https://en.wikipedia.org/wiki/Code_Complete)* | Other |
| --- | --- | --- | --- | --- |
| [Abstract factory](https://en.wikipedia.org/wiki/Abstract_factory) | Provide an interface for creating *families* of related or dependent objects without specifying their concrete classes. | Yes | Yes | —N/a |
| [Builder](https://en.wikipedia.org/wiki/Builder_pattern) | Separate the construction of a complex object from its representation, allowing the same construction process to create various representations. | Yes | Yes | —N/a |
| [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_Injection) | A class accepts the objects it requires from an injector instead of creating the objects directly. | —N/a | Yes | —N/a |
| [Factory method](https://en.wikipedia.org/wiki/Factory_method) | Define an interface for creating a *single* object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses. | Yes | Yes | —N/a |
| [Lazy initialization](https://en.wikipedia.org/wiki/Lazy_initialization) | Tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed. This pattern appears in the GoF catalog as "virtual proxy", an implementation strategy for the [Proxy](https://en.wikipedia.org/wiki/Proxy_pattern) pattern. | Yes | Yes | PoEAA |
| [Multiton](https://en.wikipedia.org/wiki/Multiton) | Ensure a class has only named instances, and provide a global point of access to them. | Yes | Yes | Yes |
| [Object pool](https://en.wikipedia.org/wiki/Object_pool) | Avoid expensive acquisition and release of resources by recycling objects that are no longer in use. Can be considered a generalisation of [connection pool](https://en.wikipedia.org/wiki/Connection_pool) and [thread pool](https://en.wikipedia.org/wiki/Thread_pool) patterns. | Yes | Yes | Yes |
| [Prototype](https://en.wikipedia.org/wiki/Prototype_pattern) | Specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum. | Yes | Yes | Yes |
| [Resource acquisition is initialization](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization) (RAII) | Ensure that resources are properly released by tying them to the lifespan of suitable objects. | Yes | Yes | Yes |
| [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern) | Ensure a class has only one instance, and provide a global point of access to it. | Yes | Yes | Yes |

### Structural

A [structural pattern](https://en.wikipedia.org/wiki/Structural_pattern) organizes classes and objects to form larger structures that provide new functionality.

| Name | Description | In *[Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)* | In *[Code Complete](https://en.wikipedia.org/wiki/Code_Complete)* | Other |
| --- | --- | --- | --- | --- |
| [Adapter](https://en.wikipedia.org/wiki/Adapter_pattern), Wrapper, or Translator | Convert the interface of a class into another interface clients expect. An adapter lets classes work together that could not otherwise because of incompatible interfaces. The enterprise integration pattern equivalent is the translator. | Yes | Yes | Yes |
| [Bridge](https://en.wikipedia.org/wiki/Bridge_pattern) | Decouple an abstraction from its implementation allowing the two to vary independently. | Yes | Yes | Yes |
| [Composite](https://en.wikipedia.org/wiki/Composite_pattern) | Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly. | Yes | Yes | Yes |
| [Decorator](https://en.wikipedia.org/wiki/Decorator_pattern) | Attach additional responsibilities to an object dynamically keeping the same interface. Decorators provide a flexible alternative to subclassing for extending functionality. | Yes | Yes | Yes |
| [Delegation](https://en.wikipedia.org/wiki/Delegation_pattern) | Extend a class by composition instead of subclassing. The object handles a request by delegating to a second object (the delegate) | Yes | Yes | Yes |
| Extension object | Adding functionality to a hierarchy without changing the hierarchy. | Yes | Yes | Yes |
| [Facade](https://en.wikipedia.org/wiki/Facade_pattern) | Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use. | Yes | Yes | Yes |
| [Flyweight](https://en.wikipedia.org/wiki/Flyweight_pattern) | Use sharing to support large numbers of similar objects efficiently. | Yes | Yes | Yes |
| [Front controller](https://en.wikipedia.org/wiki/Front_controller) | The pattern relates to the design of Web applications. It provides a centralized entry point for handling requests. | Yes | Yes | J2EE Patterns PoEAA |
| [Marker](https://en.wikipedia.org/wiki/Marker_interface_pattern) | Empty interface to associate metadata with a class. | Yes | Yes | [Effective Java](https://en.wikipedia.org/wiki/Joshua_Bloch) |
| [Module](https://en.wikipedia.org/wiki/Module_pattern) | Group several related elements, such as classes, singletons, methods, globally used, into a single conceptual entity. | Yes | Yes | Yes |
| [Proxy](https://en.wikipedia.org/wiki/Proxy_pattern) | Provide a surrogate or placeholder for another object to control access to it. | Yes | Yes | Yes |
| [Twin](https://en.wikipedia.org/wiki/Twin_pattern) | Twin allows modeling of multiple inheritance in programming languages that do not support this feature. | Yes | Yes | Yes |

### Behavioral

A [behavioral pattern](https://en.wikipedia.org/wiki/Behavioral_pattern) describes collaboration between objects.

| Name | Description | In *[Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)* | In *[Code Complete](https://en.wikipedia.org/wiki/Code_Complete)* | Other |
| --- | --- | --- | --- | --- |
| [Blackboard](https://en.wikipedia.org/wiki/Blackboard_(design_pattern)) | [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence) pattern for combining disparate sources of data (see [blackboard system](https://en.wikipedia.org/wiki/Blackboard_system)) | Yes | Yes | Yes |
| [Chain of responsibility](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern) | Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it. | Yes | Yes | Yes |
| [Command](https://en.wikipedia.org/wiki/Command_pattern) | Encapsulate a request as an object, thereby allowing for the parameterization of clients with different requests, and the queuing or logging of requests. It also allows for the support of undoable operations. | Yes | Yes | Yes |
| [Fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) | Design an API to be method chained so that it reads like a DSL. Each method call returns a context through which the next logical method call(s) are made available. | Yes | Yes | Yes |
| [Interpreter](https://en.wikipedia.org/wiki/Interpreter_pattern) | Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language. | Yes | Yes | Yes |
| [Iterator](https://en.wikipedia.org/wiki/Iterator_pattern) | Provide a way to access the elements of an [aggregate](https://en.wikipedia.org/wiki/Aggregate_pattern) object sequentially without exposing its underlying representation. | Yes | Yes | Yes |
| [Mediator](https://en.wikipedia.org/wiki/Mediator_pattern) | Define an object that encapsulates how a set of objects interact. Mediator promotes [loose coupling](https://en.wikipedia.org/wiki/Loose_coupling) by keeping objects from referring to each other explicitly, and it allows their interaction to vary independently. | Yes | Yes | Yes |
| [Memento](https://en.wikipedia.org/wiki/Memento_pattern) | Without violating encapsulation, capture and externalize an object's internal state allowing the object to be restored to this state later. | Yes | Yes | Yes |
| [Null object](https://en.wikipedia.org/wiki/Null_object) | Avoid null references by providing a default object. | Yes | Yes | Yes |
| [Observer](https://en.wikipedia.org/wiki/Observer_pattern) or [Publish/subscribe](https://en.wikipedia.org/wiki/Publish/subscribe) | Define a one-to-many dependency between objects where a state change in one object results in all its dependents being notified and updated automatically. | Yes | Yes | Yes |
| [Servant](https://en.wikipedia.org/wiki/Design_pattern_Servant) | Define common functionality for a group of classes. The servant pattern is also frequently called helper class or utility class implementation for a given set of classes. The helper classes generally have no objects hence they have all static methods that act upon different kinds of class objects. | Yes | Yes | Yes |
| [Specification](https://en.wikipedia.org/wiki/Specification_pattern) | Recombinable [business logic](https://en.wikipedia.org/wiki/Business_logic) in a [Boolean](https://en.wikipedia.org/wiki/Boolean_algebra) fashion. | Yes | Yes | Yes |
| [State](https://en.wikipedia.org/wiki/State_pattern) | Allow an object to alter its behavior when its internal state changes. The object will appear to change its class. | Yes | Yes | Yes |
| [Strategy](https://en.wikipedia.org/wiki/Strategy_pattern) | Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it. | Yes | Yes | Yes |
| [Template method](https://en.wikipedia.org/wiki/Template_method) | Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure. | Yes | Yes | Yes |
| [Visitor](https://en.wikipedia.org/wiki/Visitor_pattern) | Represent an operation to be performed on instances of a set of classes. Visitor lets a new operation be defined without changing the classes of the elements on which it operates. | Yes | Yes | Yes |

### Concurrency

A [concurrency pattern](https://en.wikipedia.org/wiki/Concurrency_pattern) supports [concurrent processing](https://en.wikipedia.org/wiki/Concurrency_(computer_science)).

| Name | Description | In *[POSA2](https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture)* | Other |
| --- | --- | --- | --- |
| [Active Object](https://en.wikipedia.org/wiki/Active_Object) | Decouples method execution from method invocation that reside in their own thread of control. The goal is to introduce concurrency, by using [asynchronous method invocation](https://en.wikipedia.org/wiki/Asynchronous_method_invocation) and a [scheduler](https://en.wikipedia.org/wiki/Scheduling_(computing)) for handling requests. | Yes | —N/a |
| [Balking](https://en.wikipedia.org/wiki/Balking_pattern) | Only execute an action on an object when the object is in a particular state. | No | —N/a |
| [Binding properties](https://en.wikipedia.org/wiki/Binding_properties_pattern) | Combining multiple observers to force properties in different objects to be synchronized or coordinated in some way. | No | —N/a |
| [Compute kernel](https://en.wikipedia.org/wiki/Compute_kernel) | The same calculation many times in parallel, differing by integer parameters used with non-branching pointer math into shared arrays, such as [GPU](https://en.wikipedia.org/wiki/GPU)-optimized [Matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication) or [Convolutional neural network](https://en.wikipedia.org/wiki/Convolutional_neural_network). | No | —N/a |
| [Double-checked locking](https://en.wikipedia.org/wiki/Double-checked_locking) | Reduce the overhead of acquiring a lock by first testing the locking criterion (the 'lock hint') in an unsafe manner; only if that succeeds does the actual locking logic proceed. Can be unsafe when implemented in some language/hardware combinations. It can therefore sometimes be considered an [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern). | Yes | —N/a |
| [Event-based asynchronous](https://en.wikipedia.org/wiki/Event-Based_Asynchronous_Pattern) | Addresses problems with the asynchronous pattern that occur in multithreaded programs. | No | —N/a |
| [Guarded suspension](https://en.wikipedia.org/wiki/Guarded_suspension) | Manages operations that require both a lock to be acquired and a precondition to be satisfied before the operation can be executed. | No | —N/a |
| [Join](https://en.wikipedia.org/wiki/Join-pattern) | Join-pattern provides a way to write concurrent, parallel and distributed programs by message passing. Compared to the use of threads and locks, this is a high-level programming model. | No | —N/a |
| [Lock](https://en.wikipedia.org/wiki/Lock_(computer_science)) | One thread puts a "lock" on a resource, preventing other threads from accessing or modifying it. | No | PoEAA |
| [Messaging design pattern (MDP)](https://en.wikipedia.org/wiki/Messaging_pattern) | Allows the interchange of information (i.e. messages) between components and applications. | No | —N/a |
| [Monitor object](https://en.wikipedia.org/wiki/Monitor_(synchronization)) | An object whose methods are subject to [mutual exclusion](https://en.wikipedia.org/wiki/Mutual_exclusion), thus preventing multiple objects from erroneously trying to use it at the same time. | Yes | —N/a |
| [Reactor](https://en.wikipedia.org/wiki/Reactor_pattern) | A reactor object provides an asynchronous interface to resources that must be handled synchronously. | Yes | —N/a |
| [Read-write lock](https://en.wikipedia.org/wiki/Read-write_lock) | Allows concurrent read access to an object, but requires exclusive access for write operations. An underlying semaphore might be used for writing, and a [Copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write) mechanism may or may not be used. | No | —N/a |
| [Scheduler](https://en.wikipedia.org/wiki/Scheduler_pattern) | Explicitly control when threads may execute single-threaded code. | No | —N/a |
| Service handler pattern | For each request, a server spawns a dedicated client handler to handle a request. Also referred to as *thread-per-session*. | No | —N/a |
| [Thread pool](https://en.wikipedia.org/wiki/Thread_pool) | A number of threads are created to perform a number of tasks, which are usually organized in a queue. Typically, there are many more tasks than threads. Can be considered a special case of the [object pool](https://en.wikipedia.org/wiki/Object_pool) pattern. | No | —N/a |
| [Thread-specific storage](https://en.wikipedia.org/wiki/Thread-specific_storage) | Static or "global" memory local to a thread. | Yes | —N/a |
| Safe Concurrency with Exclusive Ownership | Avoiding the need for runtime concurrent mechanisms, because exclusive ownership can be proven. This is a notable capability of the Rust language, but compile-time checking isn't the only means, a programmer will often manually design such patterns into code - omitting the use of locking mechanism because the programmer assesses that a given variable is never going to be concurrently accessed. | No | —N/a |
| CPU atomic operation | x86 and other CPU architectures support a range of atomic instructions that guarantee memory safety for modifying and accessing primitive values (integers). For example, two threads may both increment a counter safely. These capabilities can also be used to implement the mechanisms for other concurrency patterns as above. The [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) language uses the [Interlocked](https://docs.microsoft.com/en-us/dotnet/api/system.threading.interlocked?view=net-5.0) class for these capabilities. | No | —N/a |

## Documentation

The documentation for a design pattern describes the context in which the pattern is used, the forces within the context that the pattern seeks to resolve, and the suggested solution. There is no single, standard format for documenting design patterns. Rather, a variety of different formats have been used by different pattern authors. However, according to [Martin Fowler](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)), certain pattern forms have become more well-known than others, and consequently become common starting points for new pattern-writing efforts. One example of a commonly used documentation format is the one used by [Erich Gamma](https://en.wikipedia.org/wiki/Erich_Gamma), [Richard Helm](https://en.wikipedia.org/wiki/Richard_Helm), [Ralph Johnson](https://en.wikipedia.org/wiki/Ralph_Johnson_(computer_scientist)), and [John Vlissides](https://en.wikipedia.org/wiki/John_Vlissides) in their book *[Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)*. It contains the following sections:

**Name**
: A descriptive and unique name that helps in identifying and referring to the pattern.

**Intent**
: A description of the goal behind the pattern and the reason for using it.

**Also Known As**
: Other names for the pattern.

**Motivation**
: A scenario consisting of a problem and a context in which this pattern can be used.

**Applicability**
: Situations in which this pattern is usable; the context for the pattern.

**Structure**
: A graphical representation of the pattern. [Class diagrams](https://en.wikipedia.org/wiki/Unified_Modeling_Language#UML_Class_Diagram) and [Interaction diagrams](https://en.wikipedia.org/wiki/Interaction_diagram) may be used for this purpose.

**Participants**
: A listing of the classes and objects used in the pattern and their roles in the design.

**Collaboration**
: A description of how classes and objects used in the pattern interact with each other.

**Consequences**
: A description of the results, side effects, and trade offs caused by using the pattern.

**Implementation**
: A description of an implementation of the pattern; the solution part of the pattern.

**Sample Code**
: An illustration of how the pattern can be used in a programming language.

**Known Uses**
: Examples of real usages of the pattern.

**Related Patterns**
: Other patterns that have some relationship with the pattern; discussion of the differences between the pattern and similar patterns.

## Criticism

Some suggest that the need for a design pattern may be a sign that a feature is missing from a programming language. [Peter Norvig](https://en.wikipedia.org/wiki/Peter_Norvig) demonstrates that 16 out of the 23 patterns in the *Design Patterns* book (which is primarily focused on C++) are simplified or eliminated (via direct language support) in [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) or [Dylan](https://en.wikipedia.org/wiki/Dylan_(programming_language)). Related observations were made by Hannemann and Kiczales who implemented several of the 23 design patterns using an [aspect-oriented programming language](https://en.wikipedia.org/wiki/Aspect-oriented_programming) (AspectJ) and showed that code-level dependencies were removed from the implementations of 17 of the 23 design patterns and that aspect-oriented programming could simplify the implementations of design patterns.
See also [Paul Graham's](https://en.wikipedia.org/wiki/Paul_Graham_(computer_programmer)) essay "Revenge of the Nerds".

Inappropriate use of patterns may unnecessarily increase complexity. [FizzBuzzEnterpriseEdition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) offers a humorous example of over-complexity introduced by design patterns.

By definition, a pattern must be programmed anew into each application that uses it. Since some authors see this as a step backward from [software reuse](https://en.wikipedia.org/wiki/Software_reuse) as provided by [components](https://en.wikipedia.org/wiki/Software_componentry), researchers have worked to turn patterns into components. Meyer and Arnout were able to provide full or partial componentization of two-thirds of the patterns they attempted.

In order to achieve flexibility, design patterns may introduce additional levels of [indirection](https://en.wikipedia.org/wiki/Indirection), which may complicate the resulting design and decrease [runtime](https://en.wikipedia.org/wiki/Runtime_(program_lifecycle_phase)) performance.

## Related

The following concepts are similar in general nature yet differ from software design pattern:

**Software architecture pattern**
: A reusable, proven solution to a recurring problem at the system level, addressing concerns related to the overall structure, component interactions, and quality attributes of the system. Software architecture patterns operate at a higher level of abstraction than design patterns, solving broader system-level challenges. While these patterns typically affect system-level concerns, the distinction between architectural patterns and architectural styles can sometimes be blurry. Examples include [Circuit Breaker](https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern).

**Software architecture style**
: A high-level, structural organization that defines the overall system organization, specifying how components are organized, how they interact, and the constraints on those interactions. Architecture styles typically include a vocabulary of component and connector types, as well as semantic models for interpreting the system's properties. These styles represent the most coarse-grained level of system organization. Examples include [Layered Architecture](https://en.wikipedia.org/wiki/Multitier_architecture), [Microservices](https://en.wikipedia.org/wiki/Microservices), and [Event-Driven Architecture](https://en.wikipedia.org/wiki/Event-driven_architecture).

## See also

* [Abstraction principle](https://en.wikipedia.org/wiki/Abstraction_principle_(programming))
* [Algorithmic skeleton](https://en.wikipedia.org/wiki/Algorithmic_skeleton)
* [Anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern)
* [Architectural pattern](https://en.wikipedia.org/wiki/Architectural_pattern)
* [Canonical protocol pattern](https://en.wikipedia.org/wiki/Canonical_protocol_pattern)
* [Debugging patterns](https://en.wikipedia.org/wiki/Debugging_patterns)
* [Design pattern](https://en.wikipedia.org/wiki/Design_pattern)
* [Distributed design patterns](https://en.wikipedia.org/wiki/Distributed_design_patterns)
* [Enterprise architecture framework](https://en.wikipedia.org/wiki/Enterprise_architecture_framework)
* [GRASP (object-oriented design)](https://en.wikipedia.org/wiki/GRASP_(object-oriented_design))
* [Helper class](https://en.wikipedia.org/wiki/Helper_class)
* [Interaction design pattern](https://en.wikipedia.org/wiki/Interaction_design_pattern)
* [List of software architecture styles and patterns](https://en.wikipedia.org/wiki/List_of_software_architecture_styles_and_patterns)
* [List of software development philosophies](https://en.wikipedia.org/wiki/List_of_software_development_philosophies)
* [List of software engineering topics](https://en.wikipedia.org/wiki/List_of_software_engineering_topics)
* [Pattern language](https://en.wikipedia.org/wiki/Pattern_language)
* [Pattern theory](https://en.wikipedia.org/wiki/Pattern_theory)
* [Pedagogical patterns](https://en.wikipedia.org/wiki/Pedagogical_patterns)
* [Portland Pattern Repository](https://en.wikipedia.org/wiki/Portland_Pattern_Repository)
* [Programming idiom](https://en.wikipedia.org/wiki/Programming_idiom)
* [Refactoring](https://en.wikipedia.org/wiki/Refactoring)
* [Software development methodology](https://en.wikipedia.org/wiki/Software_development_methodology)

## References

1. **^** Alexandrescu, Andrei (2001). *Modern C++ Design: Generic Programming and Design Patterns Applied*. Addison-Wesley. p. xviii. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-70431-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-70431-0).
2. **^** Horner, Mark (2005). "9". *Pro .NET 2.0 Code and Design Standards in C#*. Apress. p. 171. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-59059-560-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59059-560-2).
3. **^** Smith, Reid (October 1987). *Panel on design methodology*. [OOPSLA](https://en.wikipedia.org/wiki/OOPSLA) '87 Addendum to the Proceedings. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/62138.62151](https://doi.org/10.1145%2F62138.62151). Ward cautioned against requiring too much programming at, what he termed, 'the high level of wizards.' He pointed out that a written 'pattern language' can significantly improve the selection and application of abstractions. He proposed a 'radical shift in the burden of design and implementation' basing the new methodology on an adaptation of Christopher Alexander's work in pattern languages and that programming-oriented pattern languages developed at [Tektronix](https://en.wikipedia.org/wiki/Tektronix) has significantly aided their software development efforts.
4. **^** [Beck, Kent](https://en.wikipedia.org/wiki/Kent_Beck); [Cunningham, Ward](https://en.wikipedia.org/wiki/Ward_Cunningham) (September 1987). [*Using Pattern Languages for Object-Oriented Program*](http://c2.com/doc/oopsla87.html). [OOPSLA](https://en.wikipedia.org/wiki/OOPSLA) '87 workshop on *Specification and Design for Object-Oriented Programming*. Retrieved 2006-05-26.
5. **^** Baroni, Aline Lúcia; Guéhéneuc, Yann-Gaël; Albin-Amiot, Hervé (June 2003). [Design Patterns Formalization](https://www.researchgate.net/publication/277282980) (Report). EMN Technical Report. [Nantes](https://en.wikipedia.org/wiki/Nantes): École Nationale Supérieure des Techniques Industrielles et des Mines de Nantes. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.62.6466](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.62.6466). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [624834](https://api.semanticscholar.org/CorpusID:624834) – via ResearchGate.
6. **^** Bishop, Judith. ["C# 3.0 Design Patterns: Use the Power of C# 3.0 to Solve Real-World Problems"](http://msdn.microsoft.com/en-us/vstudio/ff729657). C# Books from O'Reilly Media. Retrieved 2012-05-15. If you want to speed up the development of your .NET applications, you're ready for C# design patterns -- elegant, accepted and proven ways to tackle common programming problems.
7. **^** Tiako, Pierre F. (31 March 2009). ["Formal Modeling and Specification of Design Patterns Using RTPA"](https://books.google.com/books?id=_SklFgSidxQC&q=Reusing+design+patterns+helps+to+prevent+such+subtle+issues&pg=PA636). In Tiako, Pierre F (ed.). *Software Applications: Concepts, Methodologies, Tools, and Applications: Concepts, Methodologies, Tools, and Applications*. p. 636. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.4018/978-1-60566-060-8](https://doi.org/10.4018%2F978-1-60566-060-8). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781605660615](https://en.wikipedia.org/wiki/Special:BookSources/9781605660615).
8. **^** Laakso, Sari A. (2003-09-16). ["Collection of User Interface Design Patterns"](http://www.cs.helsinki.fi/u/salaakso/patterns/index.html). University of Helsinki, Dept. of Computer Science. Retrieved 2008-01-31.
9. **^** Heer, J.; Agrawala, M. (2006). ["Software Design Patterns for Information Visualization"](http://vis.berkeley.edu/papers/infovis_design_patterns/). *IEEE Transactions on Visualization and Computer Graphics*. **12** (5): 853–60. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.121.4534](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.121.4534). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TVCG.2006.178](https://doi.org/10.1109%2FTVCG.2006.178). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [17080809](https://pubmed.ncbi.nlm.nih.gov/17080809). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [11634997](https://api.semanticscholar.org/CorpusID:11634997).
10. **^** Dougherty, Chad; Sayre, Kirk; Seacord, Robert C.; Svoboda, David; Togashi, Kazuya (2009). [*Secure Design Patterns*](http://www.cert.org/archive/pdf/09tr010.pdf) (PDF). Software Engineering Institute.
11. **^** Garfinkel, Simson L. (2005). [*Design Principles and Patterns for Computer Systems That Are Simultaneously Secure and Usable*](http://www.simson.net/thesis/) (Ph.D. thesis).
12. **^** ["Yahoo! Design Pattern Library"](https://web.archive.org/web/20080229011119/http://developer.yahoo.com/ypatterns/). Archived from [the original](http://developer.yahoo.com/ypatterns/) on 2008-02-29. Retrieved 2008-01-31.
13. **^** ["How to design your Business Model as a Lean Startup?"](http://torgronsund.wordpress.com/2010/01/06/lean-startup-business-model-pattern/). 2010-01-06. Retrieved 2010-01-06.
14. **^** Pattern Languages of Programming, Conference proceedings (annual, 1994—) [[1]](http://hillside.net/plop/pastconferences.html)
15. ^    [McConnell, Steve](https://en.wikipedia.org/wiki/Steve_McConnell) (June 2004). "Design in Construction". [*Code Complete*](https://en.wikipedia.org/wiki/Code_Complete) (2nd ed.). [Microsoft Press](https://en.wikipedia.org/wiki/Microsoft_Press). p. [104](https://archive.org/details/codecomplete0000mcco/page/104). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-7356-1967-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7356-1967-8). Table 5.1 Popular Design Patterns
16. ^   
[Fowler, Martin](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)) (2002). [*Patterns of Enterprise Application Architecture*](http://martinfowler.com/books.html#eaa). [Addison-Wesley](https://en.wikipedia.org/wiki/Addison-Wesley). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-12742-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-12742-6).
17. **^** 
Alur, Deepak; Crupi, John; Malks, Dan (2003). [*Core J2EE Patterns: Best Practices and Design Strategies*](http://www.corej2eepatterns.com). [Prentice Hall](https://en.wikipedia.org/wiki/Prentice_Hall). p. 166. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-142246-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-142246-9).
18. **^** 
[Fowler, Martin](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)) (2002). [*Patterns of Enterprise Application Architecture*](http://martinfowler.com/books.html#eaa). [Addison-Wesley](https://en.wikipedia.org/wiki/Addison-Wesley). p. 344. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-12742-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-12742-6).
19. **^** 
Bloch, Joshua (2008). ["Item 37: Use marker interfaces to define types"](https://archive.org/details/effectivejava00bloc_0/page/179). *Effective Java* (Second ed.). Addison-Wesley. p. [179](https://archive.org/details/effectivejava00bloc_0/page/179). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-35668-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-35668-0).
20. **^** ["Twin – A Design Pattern for Modeling Multiple Inheritance"](http://www.ssw.jku.at/Research/Papers/Moe99/Paper.pdf) (PDF).
21. **^** Schmidt, Douglas C.; Stal, Michael; Rohnert, Hans; Buschmann, Frank (2000). *Pattern-Oriented Software Architecture, Volume 2: Patterns for Concurrent and Networked Objects*. John Wiley & Sons. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-471-60695-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-471-60695-6).
22. **^** [Binding Properties](http://c2.com/cgi/wiki?BindingProperties)
23. **^** Nagel, Christian; Evjen, Bill; Glynn, Jay; Watson, Karli; Skinner, Morgan (2008). "Event-based Asynchronous Pattern". *Professional C# 2008*. Wiley. pp. 570–571. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-470-19137-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-470-19137-8).
24. **^** [Lock Pattern](http://c2.com/cgi/wiki?LockPattern)
25. **^** Francalanza, Adrian; Tabone, Gerard (October 2023). ["ElixirST: A session-based type system for Elixir modules"](https://doi.org/10.1016%2Fj.jlamp.2023.100891). *Journal of Logical and Algebraic Methods in Programming*. **135**. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.jlamp.2023.100891](https://doi.org/10.1016%2Fj.jlamp.2023.100891). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [251442539](https://api.semanticscholar.org/CorpusID:251442539).
26. **^** Schmidt, Douglas C.; Vinoski, Steve (July–August 1996). ["Object Interconnections: Comparing Alternative Programming Techniques for Multi-threaded CORBA Servers (Column 7)"](https://www.dre.vanderbilt.edu/~schmidt/PDF/C++-report-col7.pdf) (PDF). *SIGS C++ Report*. [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [2654843](https://api.semanticscholar.org/CorpusID:2654843).
27. **^** [Gabriel, Dick](https://en.wikipedia.org/wiki/Richard_P._Gabriel). ["A Pattern Definition"](https://web.archive.org/web/20070209224120/http://hillside.net/patterns/definition.html). Archived from [the original](http://hillside.net/patterns/definition.html) on 2007-02-09. Retrieved 2007-03-06.
28. **^** [Fowler, Martin](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)) (2006-08-01). ["Writing Software Patterns"](http://www.martinfowler.com/articles/writingPatterns.html). Retrieved 2007-03-06.
29. **^** [Norvig, Peter](https://en.wikipedia.org/wiki/Peter_Norvig) (1998). [*Design Patterns in Dynamic Languages*](http://www.norvig.com/design-patterns/).
30. **^** Hannemann, Jan; [Kiczales, Gregor](https://en.wikipedia.org/wiki/Gregor_Kiczales) (2002). "Design pattern implementation in Java and AspectJ". *Proceedings of the 17th ACM SIGPLAN conference on Object-oriented programming, systems, languages, and applications - OOPSLA '02*. OOPSLA '02. p. 161. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/582419.582436](https://doi.org/10.1145%2F582419.582436). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1581134711](https://en.wikipedia.org/wiki/Special:BookSources/1581134711).
31. **^** [Graham, Paul](https://en.wikipedia.org/wiki/Paul_Graham_(computer_programmer)) (2002). ["Revenge of the Nerds"](http://www.paulgraham.com/icad.html). Retrieved 2012-08-11.
32. **^** McConnell, Steve (2004). [*Code Complete: A Practical Handbook of Software Construction, 2nd Edition*](https://archive.org/details/codecomplete0000mcco). Pearson Education. p. [105](https://archive.org/details/codecomplete0000mcco/page/105). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780735619678](https://en.wikipedia.org/wiki/Special:BookSources/9780735619678).
33. **^** Kragbæk, Mikael. ["FizzBuzzEnterpriseEdition"](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition). Retrieved 2024-11-19.
34. **^** [Meyer, Bertrand](https://en.wikipedia.org/wiki/Bertrand_Meyer); Arnout, Karine (July 2006). ["Componentization: The Visitor Example"](http://se.ethz.ch/~meyer/publications/computer/visitor.pdf) (PDF). *[IEEE Computer](https://en.wikipedia.org/wiki/IEEE_Computer)*. **39** (7): 23–30. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.62.6082](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.62.6082). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/MC.2006.227](https://doi.org/10.1109%2FMC.2006.227). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [15328522](https://api.semanticscholar.org/CorpusID:15328522).
35. ^    *Fundamentals of Software Architecture: An Engineering Approach*. O'Reilly Media. 2020. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1492043454](https://en.wikipedia.org/wiki/Special:BookSources/978-1492043454).
36. ^    *Design Patterns: Elements of Reusable Object-Oriented Software*. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0201633610](https://en.wikipedia.org/wiki/Special:BookSources/978-0201633610).
37. ^    *Patterns of Enterprise Application Architecture*. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0321127426](https://en.wikipedia.org/wiki/Special:BookSources/978-0321127426).

## Further reading

 
NewPP limit report
Parsed by mw‐web.codfw.main‐6f7f9565cb‐svj5q
Cached time: 20260420134755
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, show‐toc]
CPU time usage: 0.637 seconds
Real time usage: 0.711 seconds
Preprocessor visited node count: 4209/1000000
Revision size: 45751/2097152 bytes
Post‐expand include size: 169288/2097152 bytes
Template argument size: 4551/2097152 bytes
Highest expansion depth: 11/100
Expensive parser function count: 3/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 213397/5000000 bytes
Lua time usage: 0.401/10.000 seconds
Lua memory usage: 6020399/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  600.039      1 -total
 38.88%  233.321     45 Template:Cite_book
 38.39%  230.340      1 Template:Reflist
 10.95%   65.721      1 Template:Design_patterns
 10.95%   65.690      2 Template:Navbox
 10.04%   60.260      1 Template:Short_description
  7.89%   47.331      5 Template:Citation_needed
  6.44%   38.663      5 Template:Fix
  5.55%   33.281      9 Template:Cite_web
  5.29%   31.715      2 Template:Pagetype
 Render ID 8865f9c8-3cbf-11f1-9b69-271c8c6fcfc6  Saved in parser cache with key enwiki:pcache:164952:|#|:idhash:canonical and timestamp 20260420134755 and revision id 1337399554. Rendering was triggered because: page_view