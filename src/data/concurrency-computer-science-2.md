# Concurrency (computer science)

* Source: https://en.wikipedia.org/wiki/Concurrency_(computer_science)

---

In [computer science](https://en.wikipedia.org/wiki/Computer_science), **concurrency** refers to the ability of a system to execute multiple tasks through simultaneous execution or time-sharing (context switching), sharing resources and managing interactions. Concurrency improves responsiveness, throughput, and [scalability](https://en.wikipedia.org/wiki/Scalability) in modern computing, including:

* [Operating systems](https://en.wikipedia.org/wiki/Operating_system) and [embedded systems](https://en.wikipedia.org/wiki/Embedded_system)
* [Distributed systems](https://en.wikipedia.org/wiki/Distributed_computing), [parallel computing](https://en.wikipedia.org/wiki/Parallel_computing), and [high-performance computing](https://en.wikipedia.org/wiki/High-performance_computing)
* [Database systems](https://en.wikipedia.org/wiki/Database), [web applications](https://en.wikipedia.org/wiki/Web_application), and [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing)

## Related concepts

Concurrency is a broader concept that encompasses several related ideas, including:

* [Parallelism](https://en.wikipedia.org/wiki/Parallel_computing) (simultaneous execution on multiple processing units). Parallelism executes tasks independently on multiple CPU cores. Concurrency allows for multiple *threads of control* at the program level, which can use parallelism or time-slicing to perform these tasks. Programs may exhibit parallelism only, concurrency only, both parallelism and concurrency, neither.
* [Multi-threading](https://en.wikipedia.org/wiki/Multithreading_(computer_architecture)) and [multi-processing](https://en.wikipedia.org/wiki/Multiprocessing) (shared system resources)
* [Synchronization](https://en.wikipedia.org/wiki/Synchronization) (coordinating access to shared resources)
* Coordination (managing interactions between concurrent tasks)
* [Concurrency Control](https://en.wikipedia.org/wiki/Concurrency_control) (ensuring data consistency and integrity)
* [Inter-process Communication](https://en.wikipedia.org/wiki/Inter-process_communication) (IPC, facilitating information exchange)

## Issues

Because computations in a concurrent system can interact with each other while being executed, the number of possible execution paths in the system can be extremely large, and the resulting outcome can be [indeterminate](https://en.wikipedia.org/wiki/Indeterminacy_in_concurrent_computation). Concurrent use of shared [resources](https://en.wikipedia.org/wiki/Resource_(computer_science)) can be a source of indeterminacy, leading to issues such as [deadlocks](https://en.wikipedia.org/wiki/Deadlock_(computer_science)), and [resource starvation](https://en.wikipedia.org/wiki/Resource_starvation).

Design of concurrent systems often entails finding reliable techniques for coordinating their execution, data exchange, [memory allocation](https://en.wikipedia.org/wiki/Memory_allocation), and execution scheduling to minimize [response time](https://en.wikipedia.org/wiki/Latency_(engineering)) and maximize [throughput](https://en.wikipedia.org/wiki/Throughput).

## Theory

Concurrency theory has been an active field of research in [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science).  One of the first proposals was  [Carl Adam Petri](https://en.wikipedia.org/wiki/Carl_Adam_Petri)'s seminal work on [Petri nets](https://en.wikipedia.org/wiki/Petri_net) in the early 1960s. In the years since, a wide variety of formalisms have been developed for modeling and reasoning about concurrency.

### Models

A number of formalisms for modeling and understanding concurrent systems have been developed, including:

* The [parallel random-access machine](https://en.wikipedia.org/wiki/Parallel_random-access_machine)
* The [actor model](https://en.wikipedia.org/wiki/Actor_model)
* Computational bridging models such as the [bulk synchronous parallel](https://en.wikipedia.org/wiki/Bulk_synchronous_parallel) (BSP) model
* [Petri nets](https://en.wikipedia.org/wiki/Petri_net)
* [Process calculi](https://en.wikipedia.org/wiki/Process_calculi)

    * [Calculus of communicating systems](https://en.wikipedia.org/wiki/Calculus_of_communicating_systems) (CCS)
    * [Communicating sequential processes](https://en.wikipedia.org/wiki/Communicating_sequential_processes) (CSP) model
    * [π-calculus](https://en.wikipedia.org/wiki/%CE%A0-calculus)
* [Tuple spaces](https://en.wikipedia.org/wiki/Tuple_space), e.g., [Linda](https://en.wikipedia.org/wiki/Linda_(coordination_language))
* [Simple Concurrent Object-Oriented Programming](https://en.wikipedia.org/wiki/SCOOP_(software)) (SCOOP)
* [Reo Coordination Language](https://en.wikipedia.org/wiki/Reo_Coordination_Language)
* [Trace monoids](https://en.wikipedia.org/wiki/Trace_monoid)

Some of these models of concurrency are primarily intended to support reasoning and specification, while others can be used through the entire development cycle, including design, implementation, proof, testing, and simulation of concurrent systems. Some of these are based on [message passing](https://en.wikipedia.org/wiki/Message_passing), while others have different mechanisms for concurrency.

The proliferation of different models of concurrency has motivated some researchers to develop ways to unify these different theoretical models. For example, Lee and Sangiovanni-Vincentelli have demonstrated that a so-called "tagged-signal" model can be used to provide a common framework for defining the [denotational semantics](https://en.wikipedia.org/wiki/Denotational_semantics) of a variety of different models of concurrency, while Nielsen, Sassone, and Winskel have demonstrated that [category theory](https://en.wikipedia.org/wiki/Category_theory) can be used to provide a similar unified understanding of different models.

The Concurrency Representation Theorem in the actor model provides a fairly general way to represent concurrent systems that are closed in the sense that they do not receive communications from outside. (Other concurrency systems, e.g., [process calculi](https://en.wikipedia.org/wiki/Process_calculi) can be modeled in the actor model using a [two-phase commit protocol](https://en.wikipedia.org/wiki/Two-phase_commit_protocol).) The mathematical denotation denoted by a closed system S is constructed increasingly better approximations from an initial behavior called ⊥S using a behavior approximating function **progression**S to construct a denotation (meaning) for S as follows:

: **Denote**S ≡ ⊔i∈ω **progression**S(⊥S)

In this way, S can be mathematically characterized in terms of all its possible behaviors.

### Logics

Various types of [temporal logic](https://en.wikipedia.org/wiki/Temporal_logic) can be used to help reason about concurrent systems. Some of these logics, such as [linear temporal logic](https://en.wikipedia.org/wiki/Linear_temporal_logic) and [computation tree logic](https://en.wikipedia.org/wiki/Computation_tree_logic), allow assertions to be made about the sequences of states that a concurrent system can pass through. Others, such as [action computational tree logic](https://en.wikipedia.org/w/index.php?title=Action_computational_tree_logic&action=edit&redlink=1), [Hennessy–Milner logic](https://en.wikipedia.org/wiki/Hennessy%E2%80%93Milner_logic), and [Lamport's](https://en.wikipedia.org/wiki/Leslie_Lamport) [temporal logic of actions](https://en.wikipedia.org/wiki/Temporal_logic_of_actions), build their assertions from sequences of *actions* (changes in state). The principal application of these logics is in writing specifications for concurrent systems.

## Practice

[Concurrent programming](https://en.wikipedia.org/wiki/Concurrent_programming) encompasses programming languages and algorithms used to implement concurrent systems.  Concurrent programming is usually considered to be more general than [parallel programming](https://en.wikipedia.org/wiki/Parallel_programming) because it can involve arbitrary and dynamic patterns of communication and interaction, whereas parallel systems generally have a predefined and well-structured communications pattern. The base goals of concurrent programming include *correctness*, *performance* and *robustness*. Concurrent systems such as [Operating systems](https://en.wikipedia.org/wiki/Operating_system) and [Database management systems](https://en.wikipedia.org/wiki/Database_management_system) are generally designed to operate indefinitely, including automatic recovery from failure, and not terminate unexpectedly (see [Concurrency control](https://en.wikipedia.org/wiki/Concurrency_control)). Some concurrent systems implement a form of transparent concurrency, in which concurrent computational entities may compete for and share a single resource, but the complexities of this competition and sharing are shielded from the programmer.

Because they use shared resources, concurrent systems in general require the inclusion of some kind of [arbiter](https://en.wikipedia.org/wiki/Arbiter_(electronics)) somewhere in their implementation (often in the underlying hardware), to control access to those resources. The use of arbiters introduces the possibility of [indeterminacy in concurrent computation](https://en.wikipedia.org/wiki/Indeterminacy_in_concurrent_computation) which has major implications for practice including correctness and performance.  For example, arbitration introduces [unbounded nondeterminism](https://en.wikipedia.org/wiki/Unbounded_nondeterminism) which raises issues with [model checking](https://en.wikipedia.org/wiki/Model_checking) because it causes explosion in the state space and can even cause models to have an infinite number of states.

Some concurrent programming models include [coprocesses](https://en.wikipedia.org/wiki/Coprocess) and [deterministic concurrency](https://en.wikipedia.org/wiki/Deterministic_concurrency). In these models, threads of control explicitly [yield](https://en.wikipedia.org/wiki/Yield_(multithreading)) their timeslices, either to the system or to another process.

## See also

* [Dining philosophers problem](https://en.wikipedia.org/wiki/Dining_philosophers_problem)
* [Chu space](https://en.wikipedia.org/wiki/Chu_space)
* [Client–server](https://en.wikipedia.org/wiki/Client%E2%80%93server) network nodes
* [Clojure](https://en.wikipedia.org/wiki/Clojure)
* [Cluster](https://en.wikipedia.org/wiki/Cluster_computing) nodes
* [Concurrency control](https://en.wikipedia.org/wiki/Concurrency_control)
* [Concurrent computing](https://en.wikipedia.org/wiki/Concurrent_computing)
* [Concurrent object-oriented programming](https://en.wikipedia.org/wiki/Concurrent_object-oriented_programming)
* [Concurrency pattern](https://en.wikipedia.org/wiki/Concurrency_pattern)
* [Construction and Analysis of Distributed Processes](https://en.wikipedia.org/wiki/Construction_and_Analysis_of_Distributed_Processes) (CADP)
* [D (programming language)](https://en.wikipedia.org/wiki/D_(programming_language))
* [Distributed system](https://en.wikipedia.org/wiki/Distributed_computing)
* [Elixir (programming language)](https://en.wikipedia.org/wiki/Elixir_(programming_language))
* [Erlang (programming language)](https://en.wikipedia.org/wiki/Erlang_(programming_language))
* [Go (programming language)](https://en.wikipedia.org/wiki/Go_(programming_language))
* [Gordon Pask](https://en.wikipedia.org/wiki/Gordon_Pask)
* [International Conference on Concurrency Theory](https://en.wikipedia.org/wiki/International_Conference_on_Concurrency_Theory) (CONCUR)
* [OpenMP](https://en.wikipedia.org/wiki/OpenMP)
* [Parallel computing](https://en.wikipedia.org/wiki/Parallel_computing)
* [Partitioned global address space](https://en.wikipedia.org/wiki/Partitioned_global_address_space)
* [Pony (programming language)](https://en.wikipedia.org/wiki/Pony_(programming_language))
* [Processes](https://en.wikipedia.org/wiki/Process_(computing))
* [Ptolemy Project](https://en.wikipedia.org/wiki/Ptolemy_Project)
* [Rust (programming language)](https://en.wikipedia.org/wiki/Rust_(programming_language))
* [Sheaf (mathematics)](https://en.wikipedia.org/wiki/Sheaf_(mathematics))
* [Threads](https://en.wikipedia.org/wiki/Thread_(computing))
* [X10 (programming language)](https://en.wikipedia.org/wiki/X10_(programming_language))
* [Structured concurrency](https://en.wikipedia.org/wiki/Structured_concurrency)

## References

1. ^   *Operating System Concepts*. Wiley. 29 July 2008. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0470128725](https://en.wikipedia.org/wiki/Special:BookSources/978-0470128725).
2. ^   *Computer Organization and Design: The Hardware/Software Interface*. The Morgan Kaufmann Series in Computer Architecture and Design. Morgan Kaufmann. 2012. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0123747501](https://en.wikipedia.org/wiki/Special:BookSources/978-0123747501).
3. ^   *Distributed Systems: Concepts and Design*. Pearson. 2012. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0132143011](https://en.wikipedia.org/wiki/Special:BookSources/978-0132143011).
4. ^   Quinn, Michael Jay (1994). *Parallel Computing: Theory and Practice*. McGraw-Hill. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0070512948](https://en.wikipedia.org/wiki/Special:BookSources/978-0070512948).
5. ^   Zomaya, Albert Y. (1996). *Parallel and Distributed Computing Handbook*. McGraw Hill Professional. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0070730205](https://en.wikipedia.org/wiki/Special:BookSources/978-0070730205).
6. **^** *Parallel and Concurrent Programming in Haskell*. O'Reilly Media. 2013. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781449335922](https://en.wikipedia.org/wiki/Special:BookSources/9781449335922).
7. ^   [Cleaveland, Rance](https://en.wikipedia.org/wiki/Rance_Cleaveland); Scott Smolka (December 1996). ["Strategic Directions in Concurrency Research"](https://doi.org/10.1145%2F242223.242252). *ACM Computing Surveys*. **28** (4): 607. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/242223.242252](https://doi.org/10.1145%2F242223.242252). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [13264261](https://api.semanticscholar.org/CorpusID:13264261).
8. **^** Campbell, Colin; Johnson, Ralph; Miller, Ade; Toub, Stephen (August 2010). [*Parallel Programming with Microsoft .NET*](http://msdn.microsoft.com/en-us/library/ff963542.aspx). Microsoft Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-7356-5159-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7356-5159-3).
9. **^** Filman, Robert; Daniel Friedman (1984). [*Coordinated Computing - Tools and Techniques for Distributed Software*](https://archive.org/details/coordinatedcompu0000film). McGraw-Hill. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-07-022439-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-07-022439-1).
10. **^** Keller, Jörg; Christoph Keßler; Jesper Träff (2001). *Practical PRAM Programming*. John Wiley and Sons.
11. **^** Lee, Edward; Alberto Sangiovanni-Vincentelli (December 1998). ["A Framework for Comparing Models of Computation"](http://ptolemy.eecs.berkeley.edu/publications/papers/98/framework/ieeeVersion.pdf) (PDF). *IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems*. **17** (12): 1217–1229. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/43.736561](https://doi.org/10.1109%2F43.736561).
12. **^** Mogens Nielsen; Vladimiro Sassone; Glynn Winskel (1993). ["Relationships Between Models of Concurrency"](http://citeseer.ist.psu.edu/article/nielsen94relationships.html). *REX School/Symposium*.
13. **^** Frederick Knabe. A Distributed Protocol for Channel-Based Communication with Choice PARLE 1992.
14. **^** [William Clinger](https://en.wikipedia.org/wiki/William_Clinger_(computer_scientist)) (June 1981). "Foundations of Actor Semantics". Mathematics Doctoral Dissertation. MIT. [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[1721.1/6935](https://hdl.handle.net/1721.1%2F6935). `{{[cite journal](https://en.wikipedia.org/wiki/Template:Cite_journal)}}`: Cite journal requires `|journal=` ([help](https://en.wikipedia.org/wiki/Help:CS1_errors#missing_periodical))
15. **^** Roscoe, Colin (2001). *Modal and Temporal Properties of Processes*. Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-387-98717-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-387-98717-0).

## Further reading

* Lynch, Nancy A. (1996). [*Distributed Algorithms*](https://archive.org/details/distributedalgor0000lync). Morgan Kaufmann. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-55860-348-6](https://en.wikipedia.org/wiki/Special:BookSources/978-1-55860-348-6).
* Tanenbaum, Andrew S.; Van Steen, Maarten (2002). *Distributed Systems: Principles and Paradigms*. Prentice Hall. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-088893-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-088893-8).
* Kurki-Suonio, Reino (2005). *A Practical Theory of Reactive Systems*. Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-23342-8](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-23342-8).
* Garg, Vijay K. (2002). *Elements of Distributed Computing*. Wiley-IEEE Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-471-03600-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-471-03600-5).
* Magee, Jeff; Kramer, Jeff (2006). *Concurrency: State Models and Java Programming*. Wiley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-470-09355-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-470-09355-9).
* Distefano, S., & Bruneo, D. (2015). *Quantitative assessments of distributed systems: Methodologies and techniques* (1st ed.). Somerset: John Wiley & Sons Inc.[ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781119131144](https://en.wikipedia.org/wiki/Special:BookSources/9781119131144)
* Bhattacharyya, S. S. (2013;2014;). *Handbook of signal processing systems* (Second;2;2nd 2013; ed.). New York, NY: Springer.10.1007/978-1-4614-6859-2 [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781461468592](https://en.wikipedia.org/wiki/Special:BookSources/9781461468592)
* Wolter, K. (2012;2014;). *Resilience assessment and evaluation of computing systems* (1. Aufl.;1; ed.). London;Berlin;: Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9783642290329](https://en.wikipedia.org/wiki/Special:BookSources/9783642290329)

## External links

* [Process Algebra Diary - Prof. Luca Aceto's blog on Concurrency Theory](http://processalgebra.blogspot.com/)
* [Concurrent Systems](https://web.archive.org/web/20060128114620/http://vl.fmnet.info/concurrent/) at [The WWW Virtual Library](http://vlib.org/)
* [Concurrency patterns presentation](http://shairosenfeld.com/concurrency.html) given at [scaleconf](http://scaleconf.org)
 
NewPP limit report
Parsed by mw‐web.eqiad.main‐6897878f94‐2dhfm
Cached time: 20260403013023
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.487 seconds
Real time usage: 0.617 seconds
Preprocessor visited node count: 2406/1000000
Revision size: 14370/2097152 bytes
Post‐expand include size: 61162/2097152 bytes
Template argument size: 4503/2097152 bytes
Highest expansion depth: 13/100
Expensive parser function count: 8/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 80508/5000000 bytes
Lua time usage: 0.321/10.000 seconds
Lua memory usage: 6742841/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  558.015      1 -total
 31.31%  174.693      1 Template:Reflist
 27.00%  150.675     15 Template:Cite_book
 20.22%  112.827      1 Template:Concurrent_computing
 19.79%  110.440      1 Template:Navbox
 12.66%   70.623      1 Template:Short_description
 11.26%   62.836      1 Template:Unreferenced_section
 10.05%   56.075      1 Template:Unreferenced
  9.15%   51.045      1 Template:Ambox
  6.73%   37.568      2 Template:Pagetype
 Render ID af20eda2-2efc-11f1-a22a-4b82ee3f85ca  Saved in parser cache with key enwiki:pcache:928467:|#|:idhash:canonical and timestamp 20260403013023 and revision id 1340987200. Rendering was triggered because: page_view