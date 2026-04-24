# Concurrent computing

* Source: https://en.wikipedia.org/wiki/Concurrent_computing

---

**Concurrent computing** is a form of [computing](https://en.wikipedia.org/wiki/Computing) in which several [computations](https://en.wikipedia.org/wiki/Computation) are executed *[concurrently](https://en.wikipedia.org/wiki/Concurrency_(computer_science))*—during overlapping time periods—instead of *sequentially—*with one completing before the next starts.

This is a property of a system—whether a [program](https://en.wikipedia.org/wiki/Computer_program), [computer](https://en.wikipedia.org/wiki/Computer), or a [network](https://en.wikipedia.org/wiki/Computer_network)—where there is a separate execution point or "thread of control" for each process. A *concurrent system* is one where a computation can advance without waiting for all other computations to complete.

Concurrent computing is a form of [modular programming](https://en.wikipedia.org/wiki/Modular_programming). In its [paradigm](https://en.wikipedia.org/wiki/Programming_paradigm) an overall computation is [factored](https://en.wikipedia.org/wiki/Decomposition_(computer_science)) into subcomputations that may be executed concurrently. Pioneers in the field of concurrent computing include [Edsger Dijkstra](https://en.wikipedia.org/wiki/Edsger_Dijkstra), [Per Brinch Hansen](https://en.wikipedia.org/wiki/Per_Brinch_Hansen), and [C.A.R. Hoare](https://en.wikipedia.org/wiki/C.A.R._Hoare).

## Introduction

The concept of concurrent computing is frequently confused with the related but distinct concept of [parallel computing](https://en.wikipedia.org/wiki/Parallel_computing), although both can be described as "multiple processes executing *during the same period of time*". In parallel computing, execution occurs at the same physical instant: for example, on separate [processors](https://en.wikipedia.org/wiki/Central_processing_unit) of a [multi-processor](https://en.wikipedia.org/wiki/Multi-processor) machine, with the goal of speeding up computations—parallel computing is impossible on a ([one-core](https://en.wikipedia.org/wiki/Multi-core_processor)) single processor, as only one computation can occur at any instant (during any single clock cycle). By contrast, concurrent computing consists of process *lifetimes* overlapping, but execution does not happen at the same instant. The goal here is to model processes that happen concurrently, like multiple clients accessing a server at the same time. Structuring software systems as composed of multiple concurrent, communicating parts can be useful for tackling complexity, regardless of whether the parts can be executed in parallel.

For example, concurrent processes can be executed on one core by interleaving the execution steps of each process via [time-sharing](https://en.wikipedia.org/wiki/Time-sharing) slices: only one process runs at a time, and if it does not complete during its time slice, it is *paused*, another process begins or resumes, and then later the original process is resumed. In this way, multiple processes are part-way through execution at a single instant, but only one process is being executed at that instant.

Concurrent computations *may* be executed in parallel, for example, by assigning each process to a separate processor or processor core, or [distributing](https://en.wikipedia.org/wiki/Distributed_computing) a computation across a network.

The exact timing of when tasks in a concurrent system are executed depends on the [scheduling](https://en.wikipedia.org/wiki/Scheduling_(computing)), and tasks need not always be executed concurrently. For example, given two tasks, T1 and T2:

* T1 may be executed and finished before T2 or *vice versa* (serial *and* sequential)
* T1 and T2 may be executed alternately (serial *and* concurrent)
* T1 and T2 may be executed simultaneously at the same instant of time (parallel *and* concurrent)

The word "sequential" is used as an antonym for both "concurrent" and "parallel"; when these are explicitly distinguished, *concurrent/sequential* and *parallel/serial* are used as opposing pairs. A schedule in which tasks execute one at a time (serially, no parallelism), without interleaving (sequentially, no concurrency: no task begins until the prior task ends) is called a *serial schedule*. A set of tasks that can be scheduled serially is *[serializable](https://en.wikipedia.org/wiki/Serializability)*, which simplifies [concurrency control](https://en.wikipedia.org/wiki/Concurrency_control).

### Coordinating access to shared resources

The main challenge in designing concurrent programs is [concurrency control](https://en.wikipedia.org/wiki/Concurrency_control): ensuring the correct sequencing of the interactions or communications between different computational executions, and coordinating access to resources that are shared among executions. Potential problems include [race conditions](https://en.wikipedia.org/wiki/Race_condition#Software), [deadlocks](https://en.wikipedia.org/wiki/Deadlock_(computer_science)), and [resource starvation](https://en.wikipedia.org/wiki/Resource_starvation). For example, consider the following algorithm to make withdrawals from a checking account represented by the shared resource `balance`:

```
bool withdraw(int withdrawal)
{
    if (balance >= withdrawal)
    {
        balance -= withdrawal;
        return true;
    } 
    return false;
}
```

Suppose `balance = 500`, and two concurrent *threads* make the calls `withdraw(300)` and `withdraw(350)`. If line 3 in both operations executes before line 5 both operations will find that `balance >= withdrawal` evaluates to `true`, and execution will proceed to subtracting the withdrawal amount. However, since both processes perform their withdrawals, the total amount withdrawn will end up being more than the original balance. These sorts of problems with shared resources benefit from the use of concurrency control, or [non-blocking algorithms](https://en.wikipedia.org/wiki/Non-blocking_algorithm).

### Advantages

There are advantages of concurrent computing:

* Increased program throughput—parallel execution of a concurrent algorithm allows the number of tasks completed in a given time to increase proportionally to the number of processors according to [Gustafson's law](https://en.wikipedia.org/wiki/Gustafson%27s_law).
* High responsiveness for input/output—input/output-intensive programs mostly wait for input or output operations to complete. Concurrent programming allows the time that would be spent waiting to be used for another task.
* More appropriate program structure—some problems and problem domains are well-suited to representation as concurrent tasks or processes. For example [MVCC](https://en.wikipedia.org/wiki/Multiversion_concurrency_control).

## Models

Introduced in 1962, [Petri nets](https://en.wikipedia.org/wiki/Petri_net) were an early attempt to codify the rules of concurrent execution. Dataflow theory later built upon these, and [Dataflow architectures](https://en.wikipedia.org/wiki/Dataflow_architecture) were created to physically implement the ideas of dataflow theory. Beginning in the late 1970s, [process calculi](https://en.wikipedia.org/wiki/Process_calculi) such as [Calculus of Communicating Systems](https://en.wikipedia.org/wiki/Calculus_of_Communicating_Systems) (CCS) and [Communicating Sequential Processes](https://en.wikipedia.org/wiki/Communicating_Sequential_Processes) (CSP) were developed to permit algebraic reasoning about systems composed of interacting components. The [π-calculus](https://en.wikipedia.org/wiki/Pi_calculus) added the capability for reasoning about dynamic topologies.

[Input/output automata](https://en.wikipedia.org/wiki/Input/output_automaton) were introduced in 1987.

Logics such as Lamport's [TLA+](https://en.wikipedia.org/wiki/Temporal_logic_of_actions), and mathematical models such as [traces](https://en.wikipedia.org/wiki/Trace_theory) and [Actor event diagrams](https://en.wikipedia.org/wiki/Actor_model_theory), have also been developed to describe the behavior of concurrent systems.

[Software transactional memory](https://en.wikipedia.org/wiki/Software_transactional_memory) borrows from [database theory](https://en.wikipedia.org/wiki/Database_management_system) the concept of [atomic transactions](https://en.wikipedia.org/wiki/Atomic_commit) and applies them to memory accesses.

### Consistency models

Concurrent programming languages and multiprocessor programs must have a [consistency model](https://en.wikipedia.org/wiki/Consistency_model) (also known as a memory model). The consistency model defines rules for how operations on [computer memory](https://en.wikipedia.org/wiki/Computer_data_storage) occur and how results are produced.

One of the first consistency models was [Leslie Lamport](https://en.wikipedia.org/wiki/Leslie_Lamport)'s [sequential consistency](https://en.wikipedia.org/wiki/Sequential_consistency) model. Sequential consistency is the property of a program that its execution produces the same results as a sequential program. Specifically, a program is sequentially consistent if "the results of any execution is the same as if the operations of all the processors were executed in some sequential order, and the operations of each individual processor appear in this sequence in the order specified by its program".

## Implementation

A number of different methods can be used to implement concurrent programs, such as implementing each computational execution as an [operating system process](https://en.wikipedia.org/wiki/Process_(computer_science)), or implementing the computational processes as a set of [threads](https://en.wikipedia.org/wiki/Thread_(computer_science)) within a single operating system process.

### Interaction and communication

In some concurrent computing systems, communication between the concurrent components is hidden from the programmer (e.g., by using [futures](https://en.wikipedia.org/wiki/Future_(programming))), while in others it must be handled explicitly. Explicit communication can be divided into two classes:

**Shared memory communication**
: Concurrent components communicate by altering the contents of [shared memory](https://en.wikipedia.org/wiki/Shared_memory_(interprocess_communication)) locations (exemplified by [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) and [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language))). This style of concurrent programming usually needs the use of some form of locking (e.g., [mutexes](https://en.wikipedia.org/wiki/Mutual_exclusion), [semaphores](https://en.wikipedia.org/wiki/Semaphore_(programming)), or [monitors](https://en.wikipedia.org/wiki/Monitor_(synchronization))) to coordinate between threads. A program that properly implements any of these is said to be [thread-safe](https://en.wikipedia.org/wiki/Thread_safety).

**Message passing communication**
: Concurrent components communicate by [message passing](https://en.wikipedia.org/wiki/Message_passing) (exchanging messages, exemplified by [MPI](https://en.wikipedia.org/wiki/Open_MPI), [Go](https://en.wikipedia.org/wiki/Go_(programming_language)), [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)), [Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language)) and [occam](https://en.wikipedia.org/wiki/Occam_(programming_language))). The exchange of messages may be carried out asynchronously, or may use a synchronous "rendezvous" style in which the sender blocks until the message is received. Asynchronous message passing may be reliable or unreliable (sometimes referred to as "send and pray"). Message-passing concurrency tends to be far easier to reason about than shared-memory concurrency, and is typically considered a more robust form of concurrent programming. A wide variety of mathematical theories to understand and analyze message-passing systems are available, including the [actor model](https://en.wikipedia.org/wiki/Actor_model), and various [process calculi](https://en.wikipedia.org/wiki/Process_calculi). Message passing can be efficiently implemented via [symmetric multiprocessing](https://en.wikipedia.org/wiki/Symmetric_multiprocessing), with or without shared memory [cache coherence](https://en.wikipedia.org/wiki/Cache_coherence).

Shared memory and message passing concurrency have different performance characteristics. Typically (although not always), the per-process memory overhead and task switching overhead is lower in a message passing system, but the overhead of message passing is greater than for a procedure call. These differences are often overwhelmed by other performance factors.

## History

Concurrent computing developed out of earlier work on railroads and [telegraphy](https://en.wikipedia.org/wiki/Telegraphy), from the 19th and early 20th century, and some terms date to this period, such as semaphores. These arose to address the question of how to handle multiple trains on the same railroad system (avoiding collisions and maximizing efficiency) and how to handle multiple transmissions over a given set of wires (improving efficiency), such as via [time-division multiplexing](https://en.wikipedia.org/wiki/Time-division_multiplexing) (1870s).

The academic study of concurrent algorithms started in the 1960s, with Dijkstra (1965) credited with being the first paper in this field, identifying and solving [mutual exclusion](https://en.wikipedia.org/wiki/Mutual_exclusion).

## Prevalence

Concurrency is pervasive in computing, occurring from low-level hardware on a single chip to worldwide networks. Examples follow.

At the programming language level:

* [Channel](https://en.wikipedia.org/wiki/Channel_(programming))
* [Coroutine](https://en.wikipedia.org/wiki/Coroutine)
* [Futures and promises](https://en.wikipedia.org/wiki/Futures_and_promises)

At the operating system level:

* [Computer multitasking](https://en.wikipedia.org/wiki/Computer_multitasking), including both [cooperative multitasking](https://en.wikipedia.org/wiki/Cooperative_multitasking) and [preemptive multitasking](https://en.wikipedia.org/wiki/Preemptive_multitasking)

    * [Time-sharing](https://en.wikipedia.org/wiki/Time-sharing), which replaced sequential [batch processing](https://en.wikipedia.org/wiki/Batch_processing) of jobs with concurrent use of a system
* [Process](https://en.wikipedia.org/wiki/Process_(computing))
* [Thread](https://en.wikipedia.org/wiki/Thread_(computing))

At the network level, networked systems are generally concurrent by their nature, as they consist of separate devices.

## Languages supporting concurrent programming

* 

[Concurrent programming languages](https://en.wikipedia.org/wiki/List_of_concurrent_programming_languages) are programming languages that use language constructs for [concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science)). These constructs may involve [multi-threading](https://en.wikipedia.org/wiki/Thread_(computer_science)), support for [distributed computing](https://en.wikipedia.org/wiki/Distributed_computing), [message passing](https://en.wikipedia.org/wiki/Message_passing_programming), [shared resources](https://en.wikipedia.org/wiki/Sharing) (including [shared memory](https://en.wikipedia.org/wiki/Parallel_Random_Access_Machine)) or [futures and promises](https://en.wikipedia.org/wiki/Futures_and_promises). Such languages are sometimes described as *concurrency-oriented languages* or *concurrency-oriented programming languages* (COPL).

Today, the most commonly used programming languages that have specific constructs for concurrency are [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) and [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)). Both of these languages fundamentally use a shared-memory concurrency model, with locking provided by [monitors](https://en.wikipedia.org/wiki/Monitor_(synchronization)) (although message-passing models can and have been implemented on top of the underlying shared-memory model). Of the languages that use a message-passing concurrency model, [Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language)) was probably the most widely used in industry as of 2010.

Many concurrent programming languages have been developed more as research languages (e.g., [Pict](https://en.wikipedia.org/wiki/Pict_(programming_language))) rather than as languages for production use. However, languages such as [Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language)), [Limbo](https://en.wikipedia.org/wiki/Limbo_(programming_language)), and [occam](https://en.wikipedia.org/wiki/Occam_(programming_language)) have seen industrial use at various times in the last 20 years. A non-exhaustive list of languages that use or provide concurrent programming facilities:

* [Ada](https://en.wikipedia.org/wiki/Ada_(programming_language)) – general purpose, with native support for message passing and monitor based concurrency
* [Alef](https://en.wikipedia.org/wiki/Alef_(programming_language)) – concurrent, with threads and message passing, for system programming in early versions of [Plan 9 from Bell Labs](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs)
* [Alice](https://en.wikipedia.org/wiki/Alice_(programming_language)) – extension to [Standard ML](https://en.wikipedia.org/wiki/Standard_ML), adds support for concurrency via futures
* [Ateji PX](https://en.wikipedia.org/wiki/Ateji_PX) – extension to [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) with parallel primitives inspired from [π-calculus](https://en.wikipedia.org/wiki/%CE%A0-calculus)
* [Axum](https://en.wikipedia.org/wiki/Axum_(programming_language)) – domain specific, concurrent, based on actor model and .NET Common Language Runtime using a C-like syntax
* [Binary Modular Dataflow Machine](https://en.wikipedia.org/wiki/Binary_Modular_Dataflow_Machine) (BMDFM)
* [C++](https://en.wikipedia.org/wiki/C%2B%2B) – thread and coroutine support libraries
* [Cω](https://en.wikipedia.org/wiki/C%CF%89) (C omega) – for research, extends C#, uses asynchronous communication
* [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) – supports concurrent computing using lock, yield, also since version 5.0 async and await keywords introduced
* [Clojure](https://en.wikipedia.org/wiki/Clojure) – modern, [functional programming](https://en.wikipedia.org/wiki/Functional_programming) dialect of [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) on the [Java](https://en.wikipedia.org/wiki/Java_(software_platform)) platform
* [Concurrent Clean](https://en.wikipedia.org/wiki/Concurrent_Clean) – functional programming, similar to [Haskell](https://en.wikipedia.org/wiki/Haskell)
* [Concurrent Collections](https://en.wikipedia.org/wiki/Concurrent_Collections) (CnC) – achieves implicit parallelism independent of memory model by explicitly defining flow of data and control
* [Concurrent Haskell](https://en.wikipedia.org/wiki/Concurrent_Haskell) – lazy, pure functional language operating concurrent processes on shared memory
* [Concurrent ML](https://en.wikipedia.org/wiki/Concurrent_ML) – concurrent extension of [Standard ML](https://en.wikipedia.org/wiki/Standard_ML)
* [Concurrent Pascal](https://en.wikipedia.org/wiki/Concurrent_Pascal) – by [Per Brinch Hansen](https://en.wikipedia.org/wiki/Per_Brinch_Hansen)
* [Curry](https://en.wikipedia.org/wiki/Curry_(programming_language))
* [D](https://en.wikipedia.org/wiki/D_(programming_language)) – [multi-paradigm](https://en.wikipedia.org/wiki/Multi-paradigm_programming_language) [system programming language](https://en.wikipedia.org/wiki/System_programming_language) with explicit support for concurrent programming ([actor model](https://en.wikipedia.org/wiki/Actor_model))
* [E](https://en.wikipedia.org/wiki/E_(programming_language)) – uses promises to preclude deadlocks
* [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) – uses promises for asynchronous operations
* [Eiffel](https://en.wikipedia.org/wiki/Eiffel_(programming_language)) – through its [SCOOP](https://en.wikipedia.org/wiki/SCOOP_(software)) mechanism based on the concepts of Design by Contract
* [Elixir](https://en.wikipedia.org/wiki/Elixir_(programming_language)) – dynamic and functional meta-programming aware language running on the Erlang VM, which uses asynchronous message passing with no shared memory
* [Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language)) – dynamic and functional language running on the Erlang VM, which uses asynchronous message passing with no shared memory
* [FAUST](https://en.wikipedia.org/wiki/FAUST_(programming_language)) – real-time functional, for signal processing, compiler provides automatic parallelization via [OpenMP](https://en.wikipedia.org/wiki/OpenMP) or a specific [work-stealing](https://en.wikipedia.org/wiki/Cilk#Work-stealing) scheduler
* [Fortran](https://en.wikipedia.org/wiki/Fortran)–[coarrays](https://en.wikipedia.org/wiki/Coarray_Fortran) and *do concurrent* are part of Fortran 2008 standard
* [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) – for system programming, with a concurrent programming model based on [communicating sequential processes](https://en.wikipedia.org/wiki/Communicating_sequential_processes) (CSP)
* [Haskell](https://en.wikipedia.org/wiki/Haskell) – concurrent, and parallel functional programming language
* [Hume](https://en.wikipedia.org/wiki/Hume_(programming_language)) – functional, concurrent, for bounded space and time environments where automata processes are described by synchronous channels patterns and message passing
* [Io](https://en.wikipedia.org/wiki/Io_(programming_language)) – actor-based concurrency
* [Janus](https://en.wikipedia.org/wiki/Janus_(concurrent_constraint_programming_language)) – features distinct *askers* and *tellers* to logical variables, bag channels; is purely declarative
* [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) – thread class or Runnable interface
* [Julia](https://en.wikipedia.org/wiki/Julia_(programming_language)) – concurrent programming primitives: tasks, async-wait, channels
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) – via [web workers](https://en.wikipedia.org/wiki/Web_worker), in a browser environment, [promises](https://en.wikipedia.org/wiki/Futures_and_promises), and [callbacks](https://en.wikipedia.org/wiki/Callback_(computer_programming))
* [JoCaml](https://en.wikipedia.org/wiki/JoCaml) – concurrent and distributed channel based, extension of [OCaml](https://en.wikipedia.org/wiki/OCaml), implements the [join-calculus](https://en.wikipedia.org/wiki/Join-calculus) of processes
* [Join Java](https://en.wikipedia.org/wiki/Join_Java) – concurrent, based on [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) language
* [Joule](https://en.wikipedia.org/wiki/Joule_(programming_language)) – dataflow-based, communicates by message passing
* [Joyce](https://en.wikipedia.org/wiki/Joyce_(programming_language)) – concurrent, teaching, built on [Concurrent Pascal](https://en.wikipedia.org/wiki/Concurrent_Pascal) with features from [CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes) by [Per Brinch Hansen](https://en.wikipedia.org/wiki/Per_Brinch_Hansen)
* [LabVIEW](https://en.wikipedia.org/wiki/LabVIEW) – graphical, dataflow, functions are nodes in a graph, data is wires between the nodes; includes object-oriented language
* [Limbo](https://en.wikipedia.org/wiki/Limbo_(programming_language)) – relative of [Alef](https://en.wikipedia.org/wiki/Alef_(programming_language)), for system programming in [Inferno (operating system)](https://en.wikipedia.org/wiki/Inferno_(operating_system))
* [Locomotive BASIC](https://en.wikipedia.org/wiki/Locomotive_BASIC) – Amstrad variant of BASIC contains EVERY and AFTER commands for concurrent subroutines
* [MultiLisp](https://en.wikipedia.org/wiki/MultiLisp) – [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) variant extended to support parallelism
* [Modula-2](https://en.wikipedia.org/wiki/Modula-2) – for system programming, by [Niklaus Wirth](https://en.wikipedia.org/wiki/Niklaus_Wirth) as a successor to [Pascal](https://en.wikipedia.org/wiki/Pascal_(programming_language)) with native support for coroutines
* [Modula-3](https://en.wikipedia.org/wiki/Modula-3) – modern member of [ALGOL](https://en.wikipedia.org/wiki/ALGOL) family with extensive support for threads, mutexes, condition variables
* [Newsqueak](https://en.wikipedia.org/wiki/Newsqueak) – for research, with channels as first-class values; predecessor of [Alef](https://en.wikipedia.org/wiki/Alef_(programming_language))
* [occam](https://en.wikipedia.org/wiki/Occam_(programming_language)) – influenced highly by [communicating sequential processes](https://en.wikipedia.org/wiki/Communicating_sequential_processes) (CSP)

    * [occam-π](https://en.wikipedia.org/wiki/Occam-%CF%80) – modern variant of [occam](https://en.wikipedia.org/wiki/Occam_(programming_language)), includes ideas from Milner's [π-calculus](https://en.wikipedia.org/wiki/%CE%A0-calculus)
* [Object REXX](https://en.wikipedia.org/wiki/Object_REXX) (ooRexx) – object-based, message exchange for communicating and synchronizing
* [Orc](https://en.wikipedia.org/wiki/Orc_(programming_language)) – highly concurrent, nondeterministic, based on [Kleene algebra](https://en.wikipedia.org/wiki/Kleene_algebra)
* [Oz-Mozart](https://en.wikipedia.org/wiki/Oz_(programming_language)) – multiparadigm, supports shared-state and message-passing concurrency, and futures
* [ParaSail](https://en.wikipedia.org/wiki/ParaSail_(programming_language)) – object-oriented, parallel, free of pointers, race conditions
* [PHP](https://en.wikipedia.org/wiki/PHP) – multithreading support with parallel extension implementing message passing inspired from [Go](https://en.wikipedia.org/wiki/Go_(programming_language))
* [Pict](https://en.wikipedia.org/wiki/Pict_(programming_language)) – basically an executable implementation of Milner's [π-calculus](https://en.wikipedia.org/wiki/%CE%A0-calculus)
* [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) – uses thread-based parallelism and process-based parallelism
* [Raku](https://en.wikipedia.org/wiki/Raku_(programming_language)) – includes classes for threads, promises and channels by default
* [Reia](https://en.wikipedia.org/wiki/Reia_(programming_language)) – uses asynchronous message passing between shared-nothing objects
* [Red/System](https://en.wikipedia.org/wiki/Red_(programming_language)) – for system programming, based on [Rebol](https://en.wikipedia.org/wiki/Rebol)
* [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) – for system programming, using message-passing with move semantics, and shared memory (immutable and mutable)
* [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)) – general purpose, designed to express common programming patterns in a concise, elegant, and type-safe way
* [SequenceL](https://en.wikipedia.org/wiki/SequenceL) – general purpose functional, main design objectives are ease of programming, code clarity-readability, and automatic parallelization for performance on multicore hardware, and provably free of [race conditions](https://en.wikipedia.org/wiki/Race_condition)
* [SR](https://en.wikipedia.org/wiki/SR_(programming_language)) – for research
* [SuperPascal](https://en.wikipedia.org/wiki/SuperPascal) – concurrent, for teaching, built on [Concurrent Pascal](https://en.wikipedia.org/wiki/Concurrent_Pascal) and [Joyce](https://en.wikipedia.org/wiki/Joyce_(programming_language)) by [Per Brinch Hansen](https://en.wikipedia.org/wiki/Per_Brinch_Hansen)
* [Swift](https://en.wikipedia.org/wiki/Swift_(programming_language)) – built-in support for writing asynchronous and parallel code in a structured way
* [Unicon](https://en.wikipedia.org/wiki/Unicon_(programming_language)) – for research
* TeleNokia Specification and Description Language ([TNSDL](https://en.wikipedia.org/wiki/TNSDL)) – for developing telecommunication exchanges, uses asynchronous message passing
* VHSIC Hardware Description Language ([VHDL](https://en.wikipedia.org/wiki/VHDL)) – IEEE STD-1076
* [XC](https://en.wikipedia.org/wiki/XC_(programming_language)) – concurrency-extended subset of C language developed by [XMOS](https://en.wikipedia.org/wiki/XMOS), based on [communicating sequential processes](https://en.wikipedia.org/wiki/Communicating_sequential_processes), built-in constructs for programmable I/O

Many other languages provide support for concurrency in the form of [libraries](https://en.wikipedia.org/wiki/Library_(computing)), at levels roughly comparable with the above list.

## See also

* [Asynchronous I/O](https://en.wikipedia.org/wiki/Asynchronous_I/O)
* [Chu space](https://en.wikipedia.org/wiki/Chu_space)
* [Flow-based programming](https://en.wikipedia.org/wiki/Flow-based_programming)
* [Java ConcurrentMap](https://en.wikipedia.org/wiki/Java_ConcurrentMap)
* [Ptolemy Project](https://en.wikipedia.org/wiki/Ptolemy_Project)
* [Race condition § Computing](https://en.wikipedia.org/wiki/Race_condition#Computing)
* [Structured concurrency](https://en.wikipedia.org/wiki/Structured_concurrency)
* [Transaction processing](https://en.wikipedia.org/wiki/Transaction_processing)

## Notes

1. **^** This is discounting parallelism internal to a processor core, such as pipelining or vectorized instructions. A one-core, one-processor *machine* may be capable of some parallelism, such as with a [coprocessor](https://en.wikipedia.org/wiki/Coprocessor), but the processor alone is not.

## References

1. **^** *Operating System Concepts* 9th edition, Abraham Silberschatz. "Chapter 4: Threads"
2. **^** Hansen, Per Brinch, ed. (2002). [*The Origin of Concurrent Programming*](https://link.springer.com/book/10.1007/978-1-4757-3472-0). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-1-4757-3472-0](https://doi.org/10.1007%2F978-1-4757-3472-0). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4419-2986-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4419-2986-0). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [44909506](https://api.semanticscholar.org/CorpusID:44909506).
3. ^   [Pike, Rob](https://en.wikipedia.org/wiki/Rob_Pike) (2012-01-11). "Concurrency is not Parallelism". *Waza conference*, 11 January 2012. Retrieved from [http://talks.golang.org/2012/waza.slide](https://talks.golang.org/2012/waza.slide) (slides) and [http://vimeo.com/49718712](https://vimeo.com/49718712) (video).
4. **^** ["Parallelism vs. Concurrency"](https://wiki.haskell.org/Parallelism_vs._Concurrency). *Haskell Wiki*.
5. **^** Schneider, Fred B. (1997-05-06). [*On Concurrent Programming*](https://archive.org/details/onconcurrentprog0000schn). Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780387949420](https://en.wikipedia.org/wiki/Special:BookSources/9780387949420).
6. ^   Ben-Ari, Mordechai (2006). *Principles of Concurrent and Distributed Programming* (2nd ed.). Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-31283-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-31283-9).
7. **^** Patterson & Hennessy 2013, p. 503.
8. **^** Padua, David (2011). *Encyclopedia of Parallel Computing*. Springer New York, NY (published September 8, 2011). pp. 819–825. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-387-09765-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-387-09765-7).
9. **^** ["Asynchronous I/O"](https://en.wikipedia.org/wiki/Asynchronous_I/O), *Wikipedia*, 2024-12-20, retrieved 2024-12-27
10. **^** Lamport, Leslie (1 September 1979). "How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs". *IEEE Transactions on Computers*. **C-28** (9): 690–691. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TC.1979.1675439](https://doi.org/10.1109%2FTC.1979.1675439). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [5679366](https://api.semanticscholar.org/CorpusID:5679366).
11. **^** [PODC Influential Paper Award: 2002](http://www.podc.org/influential/2002.html). *ACM Symposium on Principles of Distributed Computing* (Report). Retrieved 2009-08-24.
12. **^** Armstrong, Joe (2003). ["Making reliable distributed systems in the presence of software errors"](https://web.archive.org/web/20160415213739/http://www.diva-portal.org/smash/get/diva2:9492/FULLTEXT01.pdf) (PDF). Archived from [the original](http://www.diva-portal.org/smash/get/diva2:9492/FULLTEXT01.pdf) (PDF) on 2016-04-15.
13. **^** ["Standard library header <thread> (C++11)"](https://en.cppreference.com/w/cpp/header/thread). *en.cppreference.com*. Retrieved 2024-10-03.
14. **^** ["Standard library header <coroutine> (C++20)"](https://en.cppreference.com/w/cpp/header/coroutine). *en.cppreference.com*. Retrieved 2024-10-03.
15. **^** Marlow, Simon (2013) Parallel and Concurrent Programming in Haskell: Techniques for Multicore and Multithreaded Programming [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781449335946](https://en.wikipedia.org/wiki/Special:BookSources/9781449335946)
16. **^** ["Concurrent and Parallel programming in Julia – JuliaCon India 2015 – HasGeek Talkfunnel"](https://web.archive.org/web/20161018061906/https://juliacon.talkfunnel.com/2015/21-concurrent-and-parallel-programming-in-julia). *juliacon.talkfunnel.com*. Archived from [the original](https://juliacon.talkfunnel.com/2015/21-concurrent-and-parallel-programming-in-julia) on 2016-10-18.
17. **^** ["PHP: parallel – Manual"](https://www.php.net/manual/en/book.parallel.php). *www.php.net*. Retrieved 2024-10-03.
18. **^** [Documentation: The Python Standard Library: Concurrent Execution](https://docs.python.org/3/library/concurrency.html)
19. **^** ["Concurrency"](https://docs.perl6.org/language/concurrency). *docs.perl6.org*. Retrieved 2017-12-24.
20. **^** Blum, Ben (2012). ["Typesafe Shared Mutable State"](http://winningraceconditions.blogspot.com/2012/09/rust-4-typesafe-shared-mutable-state.html). Retrieved 2012-11-14.
21. **^** ["Concurrency"](https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html). 2022. Retrieved 2022-12-15.

## Sources

## Further reading

* [Dijkstra, E. W.](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) (1965). ["Solution of a problem in concurrent programming control"](https://doi.org/10.1145%2F365559.365617). *[Communications of the ACM](https://en.wikipedia.org/wiki/Communications_of_the_ACM)*. **8** (9): 569. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/365559.365617](https://doi.org/10.1145%2F365559.365617). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [19357737](https://api.semanticscholar.org/CorpusID:19357737).
* Herlihy, Maurice (2008) [2008]. *The Art of Multiprocessor Programming*. Morgan Kaufmann. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0123705914](https://en.wikipedia.org/wiki/Special:BookSources/978-0123705914).
* Downey, Allen B. (2005) [2005]. [*The Little Book of Semaphores*](https://web.archive.org/web/20160304031330/http://www.greenteapress.com/semaphores/downey08semaphores.pdf) (PDF). Green Tea Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4414-1868-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4414-1868-5). Archived from [the original](http://www.greenteapress.com/semaphores/downey08semaphores.pdf) (PDF) on 2016-03-04. Retrieved 2009-11-21.
* Filman, Robert E.; Daniel P. Friedman (1984). [*Coordinated Computing: Tools and Techniques for Distributed Software*](https://archive.org/details/coordinatedcompu0000film/page/370). New York: McGraw-Hill. p. [370](https://archive.org/details/coordinatedcompu0000film/page/370). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-07-022439-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-07-022439-1).
* Leppäjärvi, Jouni (2008). [*A pragmatic, historically oriented survey on the universality of synchronization primitives*](https://web.archive.org/web/20170830062719/http://www.enseignement.polytechnique.fr/informatique/INF431/X09-2010-2011/AmphiTHC/SynchronizationPrimitives.pdf) (PDF). University of Oulu. Archived from [the original](http://www.enseignement.polytechnique.fr/informatique/INF431/X09-2010-2011/AmphiTHC/SynchronizationPrimitives.pdf) (PDF) on 2017-08-30. Retrieved 2012-09-13.
* Taubenfeld, Gadi (2006). [*Synchronization Algorithms and Concurrent Programming*](http://www.faculty.idc.ac.il/gadi/book.htm). Pearson / Prentice Hall. p. 433. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-197259-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-197259-9).

## External links

* Media related to [Concurrent programming](https://commons.wikimedia.org/wiki/Category:Concurrent_programming) at Wikimedia Commons
* [Concurrent Systems Virtual Library](https://web.archive.org/web/20060128114620/http://vl.fmnet.info/concurrent/)
 
NewPP limit report
Parsed by mw‐web.eqiad.main‐7b787678c6‐zrhw2
Cached time: 20260414162154
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.423 seconds
Real time usage: 0.558 seconds
Preprocessor visited node count: 3524/1000000
Revision size: 30194/2097152 bytes
Post‐expand include size: 156082/2097152 bytes
Template argument size: 11728/2097152 bytes
Highest expansion depth: 17/100
Expensive parser function count: 15/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 118866/5000000 bytes
Lua time usage: 0.249/10.000 seconds
Lua memory usage: 10417703/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  468.834      1 -total
 26.20%  122.843      2 Template:Reflist
 19.03%   89.199     10 Template:Cite_book
 11.69%   54.830      5 Template:Navbox
 10.56%   49.498      1 Template:Concurrent_computing
  9.28%   43.504      5 Template:Ambox
  8.74%   40.964      1 Template:Short_description
  8.56%   40.135      2 Template:More_citations_needed
  6.69%   31.373      5 Template:Citation_needed
  5.54%   25.951      1 Template:Sfn
 Render ID 0ccb0362-381e-11f1-a1f1-198a2a3606c9  Saved in parser cache with key enwiki:pcache:2581605:|#|:idhash:canonical and timestamp 20260414162154 and revision id 1344914060. Rendering was triggered because: page_view