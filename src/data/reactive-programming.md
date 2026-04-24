# Reactive programming

* Source: https://en.wikipedia.org/wiki/Reactive_programming

---

In [computing](https://en.wikipedia.org/wiki/Computing), **reactive programming** is a [declarative](https://en.wikipedia.org/wiki/Declarative_programming) [programming paradigm](https://en.wikipedia.org/wiki/Programming_paradigm) concerned with [data streams](https://en.wikipedia.org/wiki/Stream_(computing)) and the propagation of change. With this paradigm, it is possible to express static (e.g., arrays) or dynamic (e.g., event emitters) data streams with ease, and also communicate that an inferred dependency within the associated execution model exists, which facilitates the automatic propagation of the changed [data flow](https://en.wikipedia.org/wiki/Data_flow).

For example, in an [*imperative* programming](https://en.wikipedia.org/wiki/Imperative_programming) setting, `a := b + c` would mean that `a` is being assigned the result of `b + c` at the instant the expression is evaluated, and later, the values of `b` and `c` can be changed with no effect on the value of `a`. On the other hand, in *reactive* programming, the value of `a` is automatically updated whenever the values of `b` or `c` change, without the program having to explicitly re-state the statement `a := b + c` to re-assign the value of `a`.

```
var b = 1
var c = 2
var a = b + c
b = 10
console.log(a) // 3 (not 12 because "=" is not a reactive assignment operator)

// now imagine you have a special operator "$=" that changes the value of a variable (executes code on the right side of the operator and assigns result to left side variable) not only when explicitly initialized, but also when referenced variables (on the right side of the operator) are changed
var b = 1
var c = 2
var a $= b + c
b = 10
console.log(a) // 12
```

Another example is a [hardware description language](https://en.wikipedia.org/wiki/Hardware_description_language) such as [Verilog](https://en.wikipedia.org/wiki/Verilog), where reactive programming enables changes to be modeled as they propagate through circuits.

Reactive programming has been proposed as a way to simplify the creation of interactive user interfaces and near-real-time system animation.

For example, in a [model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (MVC) architecture, reactive programming can facilitate changes in an underlying *model* being reflected automatically in an associated *view*.

## Approaches to creating reactive programming languages

Several popular approaches are employed in the creation of reactive programming languages. One approach is the specification of *dedicated* languages that are specific to various *domain constraints*. Such constraints usually are characterized by real-time, embedded computing or hardware description. Another approach involves the specification of *general-purpose* languages that include support for reactivity. Other approaches are articulated in the definition, and use of programming *libraries*, or *embedded [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)*, that enable reactivity alongside or on top of the programming language. Specification and use of these different approaches results in language *capability trade-offs*. In general, the more restricted a language is, the more its associated compilers and analysis tools are able to inform developers (e.g., in performing analysis for whether programs are able to execute in actual real-time). Functional trade-offs in specificity may result in deterioration of the general applicability of a language.

## Programming models and semantics

A variety of models and semantics govern reactive programming. We can loosely split them along the following dimensions:

* Synchrony: synchronous versus asynchronous model of time
* Determinism: deterministic versus non-deterministic evaluation process and results
* Update process: [callback](https://en.wikipedia.org/wiki/Callback_(computer_programming)) versus dataflow versus actor

## Implementation techniques and challenges

### Essence of implementations

Reactive programming language runtimes are represented by a graph that identifies the dependencies among the involved reactive values. In such a graph, *nodes* represent the act of computing, and *edges* model dependency relationships. Such a runtime employs said graph, to help it keep track of the various computations, which must be executed anew, once an involved input changes value.

#### Change propagation algorithms

The most common approaches to data propagation are:

* **Pull**: The value consumer is in fact *proactive*, in that it regularly queries the observed source for values and reacts whenever a relevant value is available. This practice of regularly checking for events or value changes is commonly referred to as *polling*.
* **Push**: The value consumer receives a value from the source whenever the value becomes available. These values are self-contained, e.g. they contain all the necessary information, and no further information needs to be queried by the consumer.
* **Push-pull**: The value consumer receives a *change notification*, which is a short description of the change, e.g. "some value changed" – this is the *push* part. However, the notification does not contain all the necessary information (which means it does not contain the actual values), so the consumer needs to query the source for more information (the specific value) after it receives the notification – this is the *pull* part. This method is commonly used when there is a large volume of data that the consumers might be potentially interested in. So in order to reduce throughput and latency, only light-weight notifications are sent; and then those consumers which require more information will request that specific information. This approach also has the drawback that the source might be overwhelmed by many requests for additional information after a notification is sent.

#### What to push?

At the implementation level, *event reaction* consists of the propagation across a graph's information, which characterizes the existence of change. Consequently, computations that are affected by such change then become outdated and must be flagged for re-execution. Such computations are then usually characterized by the [transitive closure](https://en.wikipedia.org/wiki/Transitive_closure) of the change (i.e. the full set of transitive dependencies a source affects) in its associated source. *Change propagation* may then lead to an update in the value of the graph's *sinks*.

Graph propagated information can consist of a node's complete state, i.e., the computation result of the involved node. In such cases, the node's previous output is then ignored. Another method involves *delta propagation* i.e. *incremental change propagation*. In this case, information is proliferated along a graph's *edges,* which consist only of *delta*s describing how the previous node was changed. This approach is especially important when *nodes* hold large amounts of *state data*, which would otherwise be expensive to recompute from scratch.

*Delta propagation* is essentially an optimization that has been extensively studied via the discipline of [incremental computing](https://en.wikipedia.org/wiki/Incremental_computing), whose approach requires runtime satisfaction involving the [view-update problem](https://en.wikipedia.org/wiki/Database#External.2C_conceptual.2C_and_internal_views). This problem is infamously characterized by the use of [database](https://en.wikipedia.org/wiki/Database) entities, which are responsible for the maintenance of changing data views.

Another common optimization is employment of *unary change accumulation* and *batch propagation*. Such a solution can be faster because it reduces communication among involved nodes. Optimization strategies can then be employed that reason about the nature of the changes contained within, and make alterations accordingly (e.g. two changes in the batch can cancel each other, and thus, simply be ignored). Yet another available approach, is described as *invalidity notification propagation*. This approach causes nodes with invalid input to pull updates, thus resulting in the update of their own outputs.

There are two principal ways employed in the building of a *[dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)*:

1. The graph of dependencies are maintained implicitly within an *[event loop](https://en.wikipedia.org/wiki/Event_loop)*. Registration of explicit callbacks then results in the creation of implicit dependencies. Therefore, *control inversion*, which is induced via callback, is thus left in place. However, making callbacks functional (i.e. returning state value instead of unit value) necessitates that such callbacks become compositional.
2. A graph of dependencies is program-specific and generated by a programmer. This facilitates an addressing of the callback's *control inversion* in two ways: either a graph is specified *explicitly* (typically using a *[domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language)* (DSL), which may be embedded), or a graph is *implicitly* defined with expression and generation using an effective, archetypal *language*.

### Implementation challenges in reactive programming

#### Glitches

When propagating changes, it is possible to pick propagation orders such that the value of an expression is not a natural consequence of the source program. We can illustrate this easily with an example. Suppose `seconds` is a reactive value that changes every second to represent the current time (in seconds). Consider this expression:

```
t = seconds + 1
g = (t > seconds)
```

Because `t` should always be greater than `seconds`, this expression should always evaluate to a true value. Unfortunately, this can depend on the order of evaluation. When `seconds` changes, two expressions have to update: `seconds + 1` and the conditional. If the first evaluates before the second, then this invariant will hold. If, however, the conditional updates first, using the old value of `t` and the new value of `seconds`, then the expression will evaluate to a false value. This is called a *glitch*.

Some reactive languages are glitch-free and prove this property. This is usually achieved by [topologically sorting](https://en.wikipedia.org/wiki/Topological_sorting) expressions and updating values in topological order. This can, however, have performance implications, such as delaying the delivery of values (due to the order of propagation). In some cases, therefore, reactive languages permit glitches, and developers must be aware of the possibility that values may temporarily fail to correspond to the program source, and that some expressions may evaluate multiple times (for instance, `t > seconds` may evaluate twice: once when the new value of `seconds` arrives, and once more when `t` updates).

#### Cyclic dependencies

Topological sorting of dependencies depends on the dependency graph being a [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG). In practice, a program may define a dependency graph that has cycles. Usually, reactive programming languages expect such cycles to be "broken" by placing some element along a "back edge" to permit reactive updating to terminate. Typically, languages provide an operator like `delay` that is used by the update mechanism for this purpose, since a `delay` implies that what follows must be evaluated in the "next time step" (allowing the current evaluation to terminate).

#### Interaction with mutable state

Reactive languages typically assume that their expressions are [purely functional](https://en.wikipedia.org/wiki/Pure_function). This allows an update mechanism to choose different orders in which to perform updates, and leave the specific order unspecified (thereby enabling optimizations). When a reactive language is embedded in a programming language with state, however, it may be possible for programmers to perform mutable operations. How to make this interaction smooth remains an open problem.

In some cases, it is possible to have principled partial solutions. Two such solutions include:

* A language might offer a notion of a "mutable cell". A mutable cell is one that the reactive update system is aware of, so that changes made to the cell propagate to the rest of the reactive program. This enables the non-reactive part of the program to perform a traditional mutation while enabling reactive code to be aware of and respond to this update, thus maintaining the consistency of the relationship between values in the program. An example of a reactive language that provides such a cell is FrTime.
* Properly encapsulated object-oriented libraries offer an encapsulated notion of state. In principle, it is therefore possible for such a library to interact smoothly with the reactive portion of a language. For instance, callbacks can be installed in the getters of the object-oriented library to notify the reactive update engine about state changes, and changes in the reactive component can be pushed to the object-oriented library through getters. FrTime employs such a strategy.

#### Dynamic updating of the graph of dependencies

In some reactive languages, the graph of dependencies is *static*, i.e., the graph is fixed throughout the program's execution. In other languages, the graph can be *dynamic*, i.e., it can change as the program executes. For a simple example, consider this illustrative example (where `seconds` is a reactive value):

```
t =
  if ((seconds mod 2) == 0):
    seconds + 1
  else:
    seconds - 1
  end
t + 1
```

Every second, the value of this expression changes to a different reactive expression, which `t + 1` then depends on. Therefore, the graph of dependencies updates every second.

Permitting dynamic updating of dependencies provides significant expressive power (for instance, dynamic dependencies routinely occur in [graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interface) (GUI) programs). However, the reactive update engine must decide whether to reconstruct expressions each time, or to keep an expression's node constructed but inactive; in the latter case, ensure that they do not participate in the computation when they are not supposed to be active.

## Concepts

### Degrees of explicitness

Reactive programming languages can range from very explicit ones where data flows are set up by using arrows, to implicit where the data flows are derived from language constructs that look similar to those of imperative or functional programming. For example, in an implicitly lifted [functional reactive programming](https://en.wikipedia.org/wiki/Functional_reactive_programming) (FRP), a function call might implicitly cause a node in a data flow graph to be constructed. Reactive programming libraries for dynamic languages (such as the Lisp "Cells" and Python "Trellis" libraries) can construct a dependency graph from runtime analysis of the values read during a function's execution, allowing data flow specifications to be both implicit and dynamic.

Sometimes the term *reactive programming* refers to the architectural level of software engineering, where individual nodes in the data flow graph are ordinary programs that communicate with each other.

### Static or dynamic

Reactive programming can be purely static where the data flows are set up statically, or be dynamic where the data flows can change during the execution of a program.

The use of data switches in the data flow graph could to some extent make a static data flow graph appear as dynamic, and blur the distinction slightly. True dynamic reactive programming however could use imperative programming to reconstruct the data flow graph.

### Higher-order reactive programming

Reactive programming could be said to be of **higher order** if it supports the idea that data flows could be used to construct other data flows. That is, the resulting value out of a data flow is another data flow graph that is executed using the same evaluation model as the first.

### Data flow differentiation

Ideally all data changes are propagated instantly, but this cannot be assured in practice. Instead, it might be necessary to give different parts of the data flow graph different evaluation priorities. This can be called **differentiated reactive programming**.

For example, in a word processor, the marking of spelling errors need not be totally in sync with the inserting of characters. Here differentiated reactive programming could potentially be used to give the spell checker lower priority, allowing it to be delayed while keeping other data-flows instantaneous.

However, such differentiation introduces additional design complexity. For example, deciding how to define the different data flow areas, and how to handle event passing between different data flow areas.

### Evaluation models of reactive programming

Evaluation of reactive programs is not necessarily based on how stack-based programming languages are evaluated. Instead, when some data is changed, the change is propagated to all data that is derived partially or completely from the data that was changed. This change propagation could be achieved in a number of ways, where perhaps the most natural way is an invalidate/lazy-revalidate scheme.

It could be problematic simply to naively propagate a change using a stack, because of potential exponential update complexity if the data structure has a certain shape. One such shape can be described as "repeated diamonds shape", and has the following structure:
An→Bn→An+1, An→Cn→An+1, where n=1,2... This problem could be overcome by propagating invalidation only when some data is not already invalidated, and later re-validate the data when needed using [lazy evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation).

One inherent problem for reactive programming is that most computations that would be evaluated and forgotten in a normal programming language, needs to be represented in the memory as data-structures. This could potentially make reactive programming highly memory consuming. However, research on what is called *lowering* could potentially overcome this problem.

On the other side, reactive programming is a form of what could be described as "explicit parallelism", and could therefore be beneficial for utilizing the power of parallel hardware.

#### Similarities with observer pattern

Reactive programming has principal similarities with the [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) commonly used in [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming). However, integrating the data flow concepts into the programming language would make it easier to express them and could therefore increase the granularity of the data flow graph. For example, the observer pattern commonly describes data-flows between whole objects/classes, whereas object-oriented reactive programming could target the members of objects/classes.

## Approaches

### Imperative

It is possible to fuse reactive programming with ordinary [imperative programming](https://en.wikipedia.org/wiki/Imperative_programming). In such a paradigm, imperative programs operate upon reactive data structures. Such a set-up is analogous to [imperative constraint programming](https://en.wikipedia.org/wiki/Constraint_programming); however, while imperative constraint programming manages bidirectional data-flow constraints, imperative reactive programming manages one-way data-flow constraints. One reference implementation is the proposed [Quantum runtime extension to JavaScript](https://github.com/webqit/quantum-js) .

### Object-oriented

Object-oriented reactive programming (OORP) is a combination of object-oriented programming and reactive programming. Perhaps the most natural way to make such a combination is as follows: instead of methods and fields, objects have *reactions* that automatically re-evaluate when the other reactions they depend on have been modified.

If an OORP language maintains its imperative methods, it would also fall under the category of imperative reactive programming.

### Functional

[Functional reactive programming](https://en.wikipedia.org/wiki/Functional_reactive_programming) (FRP) is a programming paradigm for reactive programming on [functional programming](https://en.wikipedia.org/wiki/Functional_programming).

### Actor based

Actors have been proposed to design reactive systems, often in combination with [Functional reactive programming](https://en.wikipedia.org/wiki/Functional_Reactive_Programming) (FRP) and [Reactive Streams](https://en.wikipedia.org/wiki/Reactive_Streams) to develop distributed reactive systems.

### Rule based

A relatively new category of programming languages uses constraints (rules) as main programming concept. It consists of reactions to events, which keep all constraints satisfied. Not only does this facilitate event-based reactions, but it makes reactive programs instrumental to the correctness of software. An example of a rule based reactive programming language is Ampersand, which is founded in [relation algebra](https://en.wikipedia.org/wiki/Relation_algebra).

## Implementations

* [Elm](https://en.wikipedia.org/wiki/Elm_(programming_language)), a reactive composition of web user interfaces.
* [ObservableComputations](https://github.com/IgorBuchelnikov/ObservableComputations), a cross-platform .NET implementation.
* [Quantum JS](https://github.com/webqit/quantum-js), a runtime extension to JavaScript that brings imperative reactive programming to the language, creating a whole new category in the reactivity spectrum.
* [Reactive Streams](https://en.wikipedia.org/wiki/Reactive_Streams), a JVM standard for asynchronous stream processing with non-blocking backpressure
* [ReactiveX](https://en.wikipedia.org/wiki/ReactiveX), an API for implementing reactive programming with streams, observables and operators with multiple language implementations including RxJs, RxJava, Rx.NET, RxPy and RxSwift.
* [Rimmel.js](https://github.com/reactivehtml/rimmel), a stream-oriented JavaScript UI library designed with RxJS and Observables in mind.
* [Shiny](https://en.wikipedia.org/wiki/Shiny_(web_framework)) is an open-source web framework by [Posit PBC](https://en.wikipedia.org/wiki/Posit_PBC) that enables the development of reactive, interactive web applications using R or Python, with various deployment options ranging from cloud-hosted services to on-premises containerization.
* [Solid.js](https://solidjs.com/) brings reactivity to [JavaScript](https://en.wikipedia.org/wiki/JavaScript) without changing [JavaScript syntax](https://en.wikipedia.org/wiki/JavaScript_syntax) semantics, along with reactive [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript)) templating.
* [Svelte](https://en.wikipedia.org/wiki/Svelte), brings reactivity in the form of a variant [JavaScript syntax](https://en.wikipedia.org/wiki/JavaScript_syntax) that looks like [JavaScript](https://en.wikipedia.org/wiki/JavaScript) but is naturally reactive where JavaScript normally isn't.

## See also

* [Observable (Computing)](https://en.wikipedia.org/wiki/Observable_(Computing)), observable in reactive programming.

## References

1. **^** Trellis, [*Model-view-controller and the observer pattern*](http://peak.telecommunity.com/DevCenter/Trellis#model-view-controller-and-the-observer-pattern), Tele community, [archived](https://web.archive.org/web/20160303170619/http://peak.telecommunity.com/DevCenter/Trellis#model-view-controller-and-the-observer-pattern) from the original on 2016-03-03, retrieved 2009-07-27.
2. **^** ["Embedding Dynamic Dataflow in a Call-by-Value Language"](https://cs.brown.edu/~sk/Publications/Papers/Published/ck-frtime/). *cs.brown.edu*. [Archived](https://web.archive.org/web/20161018073910/http://cs.brown.edu/~sk/Publications/Papers/Published/ck-frtime/) from the original on 2016-10-18. Retrieved 2016-10-09.
3. **^** ["Crossing State Lines: Adapting Object-Oriented Frameworks to Functional Reactive Languages"](https://cs.brown.edu/~sk/Publications/Papers/Published/ick-adapt-oo-fwk-frp/). *cs.brown.edu*. [Archived](https://web.archive.org/web/20161009141647/https://cs.brown.edu/~sk/Publications/Papers/Published/ick-adapt-oo-fwk-frp/) from the original on 2016-10-09. Retrieved 2016-10-09.
4. **^** Burchett, Kimberley; Cooper, Gregory H; Krishnamurthi, Shriram, "Lowering: a static optimization technique for transparent functional reactivity", [*Proceedings of the 2007 ACM SIGPLAN symposium on Partial evaluation and semantics-based program manipulation*](https://cs.brown.edu/~sk/Publications/Papers/Published/bck-lowering-opt-trans-frp/paper.pdf) (PDF), pp. 71–80, [archived](https://web.archive.org/web/20160416100136/https://cs.brown.edu/~sk/Publications/Papers/Published/bck-lowering-opt-trans-frp/paper.pdf) (PDF) from the original on 2016-04-16, retrieved 2014-09-08.
5. **^** Demetrescu, Camil; Finocchi, Irene; Ribichini, Andrea (22 October 2011), "Reactive Imperative Programming with Dataflow Constraints", [*Proceedings of the 2011 ACM international conference on Object-oriented programming systems languages and applications*](http://dl.acm.org/citation.cfm?id=2048100), Oopsla '11, pp. 407–26, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1104.2293](https://arxiv.org/abs/1104.2293), [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/2048066.2048100](https://doi.org/10.1145%2F2048066.2048100), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781450309400](https://en.wikipedia.org/wiki/Special:BookSources/9781450309400), [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [7285961](https://api.semanticscholar.org/CorpusID:7285961).
6. **^** Van den Vonder, Sam; Renaux, Thierry; Oeyen, Bjarno; De Koster, Joeri; De Meuter, Wolfgang (2020), "Tackling the Awkward Squad for Reactive Programming: The Actor-Reactor Model", [*Leibniz International Proceedings in Informatics (LIPIcs)*](https://drops.dagstuhl.de/opus/volltexte/2020/13176/), vol. 166, pp. 19:1–19:29, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.4230/LIPIcs.ECOOP.2020.19](https://doi.org/10.4230%2FLIPIcs.ECOOP.2020.19), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9783959771542](https://en.wikipedia.org/wiki/Special:BookSources/9783959771542), [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [260445152](https://api.semanticscholar.org/CorpusID:260445152), [archived](https://web.archive.org/web/20211020030213/https://drops.dagstuhl.de/opus/volltexte/2020/13176/) from the original on 2021-10-20, retrieved 2021-06-24.
7. **^** Van den Vonder, Sam; Renaux, Thierry; De Meuter, Wolfgang (2022), "Topology-Level Reactivity in Distributed Reactive Programs: Reactive Acquaintance Management using Flocks", [*The Art, Science, and Engineering of Programming*](https://programming-journal.org/2022/6/14/), vol. 6, pp. 14:1–14:36, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2202.09228](https://arxiv.org/abs/2202.09228), [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.22152/programming-journal.org/2022/6/14](https://doi.org/10.22152%2Fprogramming-journal.org%2F2022%2F6%2F14), [archived](https://web.archive.org/web/20230315162725/https://programming-journal.org/2022/6/14/) from the original on 2023-03-15, retrieved 2023-03-16
8. **^** Shibanai, Kazuhiro; Watanabe, Takuo (2018), "Distributed Functional Reactive Programming on Actor-Based Runtime", [*Proceedings of the 8th ACM SIGPLAN International Workshop on Programming Based on Actors, Agents, and Decentralized Control*](https://dl.acm.org/doi/10.1145/3281366.3281370), Agere 2018, pp. 13–22, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3281366.3281370](https://doi.org/10.1145%2F3281366.3281370), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781450360661](https://en.wikipedia.org/wiki/Special:BookSources/9781450360661), [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [53113447](https://api.semanticscholar.org/CorpusID:53113447), [archived](https://web.archive.org/web/20210624211319/https://dl.acm.org/doi/10.1145/3281366.3281370) from the original on 2021-06-24, retrieved 2021-06-24
9. **^** Roestenburg, Raymond; Bakker, Rob; Williams, Rob (2016). "13: Streaming". *Akka in Action*. Greenwich, Connecticut, USA: Manning Publications Co. p. 281. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-61729-101-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-61729-101-2).
10. **^** Joosten, Stef (2018), "Relation Algebra as programming language using the Ampersand compiler", *Journal of Logical and Algebraic Methods in Programming*, vol. 100, pp. 113–29, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.jlamp.2018.04.002](https://doi.org/10.1016%2Fj.jlamp.2018.04.002), [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [52932824](https://api.semanticscholar.org/CorpusID:52932824).

## External links

* [A survey on reactive programming](http://dl.acm.org/citation.cfm?id=2501666) A 2013 paper by E. Bainomugisha, A. Lombide Carreton, T. Van Cutsem, S. Mostinckx, and W. De Meuter that surveys and provides a taxonomy of existing reactive programming approaches.
* [MIMOSA Project of INRIA - ENSMP](http://www-sop.inria.fr/mimosa/rp/generalPresentation/index.html), a general site about reactive programming.
 
NewPP limit report
Parsed by mw‐api‐ext.codfw.main‐96c75fd68‐48jb2
Cached time: 20260414163239
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.451 seconds
Real time usage: 0.741 seconds
Preprocessor visited node count: 2554/1000000
Revision size: 28386/2097152 bytes
Post‐expand include size: 90424/2097152 bytes
Template argument size: 6628/2097152 bytes
Highest expansion depth: 13/100
Expensive parser function count: 9/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 53128/5000000 bytes
Lua time usage: 0.283/10.000 seconds
Lua memory usage: 6261493/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  667.851      1 -total
 31.28%  208.873      1 Template:Sxhl
 18.93%  126.405      7 Template:Citation
 12.94%   86.434      3 Template:Navbox
 12.78%   85.379      1 Template:Programming_paradigms_navbox
 11.82%   78.929      1 Template:Short_description
  9.45%   63.106      1 Template:More_footnotes_needed
  8.53%   56.938      1 Template:Ambox
  7.88%   52.631      9 Template:Fix
  7.01%   46.833      2 Template:Pagetype
 Render ID 8d3e3918-381f-11f1-a6c2-ad68902b435e  Saved in parser cache with key enwiki:pcache:12291165:|#|:idhash:canonical and timestamp 20260414163239 and revision id 1330516019. Rendering was triggered because: unknown