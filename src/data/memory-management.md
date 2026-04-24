# Memory management

* Source: https://en.wikipedia.org/wiki/Memory_management

---

| [Operating systems](https://en.wikipedia.org/wiki/Operating_system) |
| --- |
|  |
| Common features |
| [Process management](https://en.wikipedia.org/wiki/Process_management_(computing)) [Interrupts](https://en.wikipedia.org/wiki/Interrupt) Memory management [File system](https://en.wikipedia.org/wiki/File_system) [Device drivers](https://en.wikipedia.org/wiki/Device_driver) [Networking](https://en.wikipedia.org/wiki/Computer_network) [Security](https://en.wikipedia.org/wiki/Computer_security) [Input/output](https://en.wikipedia.org/wiki/Input/output) |
| [v](https://en.wikipedia.org/wiki/Template:OS)[t](https://en.wikipedia.org/wiki/Template_talk:OS)[e](https://en.wikipedia.org/wiki/Special:EditPage/Template:OS) |

**Memory management** (also **dynamic memory management**, **dynamic storage allocation**, or **dynamic memory allocation**) is a form of [resource management](https://en.wikipedia.org/wiki/Resource_management_(computing)) applied to [computer memory](https://en.wikipedia.org/wiki/Computer_memory). The essential requirement of memory management is to provide ways to dynamically allocate portions of memory to programs at their request, and free it for reuse when no longer needed. This is critical to any advanced computer system where more than a single [process](https://en.wikipedia.org/wiki/Process_(computing)) might be underway ([multitasking](https://en.wikipedia.org/wiki/Computer_multitasking)) at any time.

Several methods have been devised that increase the effectiveness of memory management. [Virtual memory](https://en.wikipedia.org/wiki/Virtual_memory) systems separate the [memory addresses](https://en.wikipedia.org/wiki/Memory_address) used by a process from actual physical addresses, allowing separation of processes and increasing the size of the [virtual address space](https://en.wikipedia.org/wiki/Virtual_address_space) beyond the available amount of [RAM](https://en.wikipedia.org/wiki/Random-access_memory) using [paging](https://en.wikipedia.org/wiki/Paging) or swapping to [secondary storage](https://en.wikipedia.org/wiki/Secondary_storage). The quality of the virtual memory manager can have an extensive effect on overall system [performance](https://en.wikipedia.org/wiki/Computer_performance). The system allows a computer to appear as if it may have more memory available than physically present, thereby allowing multiple processes to share it.

In some [operating systems](https://en.wikipedia.org/wiki/Operating_system), e.g. [Burroughs/Unisys MCP](https://en.wikipedia.org/wiki/Burroughs_MCP), and [OS/360 and successors](https://en.wikipedia.org/wiki/OS/360_and_successors), memory is managed by the operating system. In other operating systems, e.g. [Unix-like](https://en.wikipedia.org/wiki/Unix-like) operating systems, memory is managed at the application level.

Memory management within an address space is generally categorized as either [manual memory management](https://en.wikipedia.org/wiki/Manual_memory_management) or automatic memory management.

## Manual memory management

An example of external fragmentation

The task of fulfilling an allocation request consists of locating a block of unused memory of sufficient size. Memory requests are satisfied by allocating portions from a large pool of memory called the *heap* or *free store*. At any given time, some parts of the heap are in use, while some are "free" (unused) and thus available for future allocations.
In the C language, the function which allocates memory from the heap is called `malloc` and the function which takes previously allocated memory and marks it as "free" (to be used by future allocations) is called `free`.

Several issues complicate the implementation, such as [external fragmentation](https://en.wikipedia.org/wiki/Fragmentation_(computer)#External_fragmentation), which arises when there are many small gaps between allocated memory blocks, which invalidates their use for an allocation request. The allocator's [metadata](https://en.wikipedia.org/wiki/Metadata_(computing)) can also inflate the size of (individually) small allocations. This is often managed by [chunking](https://en.wikipedia.org/wiki/Chunking_(computing)). The memory management system must track outstanding allocations to ensure that they do not overlap and that no memory is ever "lost" (i.e. that there are no "[memory leaks](https://en.wikipedia.org/wiki/Memory_leak)").

### Efficiency

The specific dynamic memory allocation algorithm implemented can impact performance significantly. A study conducted in 1994 by [Digital Equipment Corporation](https://en.wikipedia.org/wiki/Digital_Equipment_Corporation) illustrates the [overheads](https://en.wikipedia.org/wiki/Computational_overhead) involved for a variety of allocators. The lowest average [instruction path length](https://en.wikipedia.org/wiki/Instruction_path_length) required to allocate a single memory slot was 52 (as measured with an instruction level [profiler](https://en.wikipedia.org/wiki/Profiling_(computer_programming)) on a variety of software).

### Implementations

Since the precise location of the allocation is not known in advance, the memory is accessed indirectly, usually through a [pointer](https://en.wikipedia.org/wiki/Pointer_(computer_programming)) [reference](https://en.wikipedia.org/wiki/Reference_(computer_science)). The specific algorithm used to organize the memory area and allocate and deallocate chunks is interlinked with the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)), and may use any of the following methods:

#### Fixed-size blocks allocation

Fixed-size blocks allocation, also called memory pool allocation, uses a [free list](https://en.wikipedia.org/wiki/Free_list) of fixed-size blocks of memory (often all of the same size). This works well for simple [embedded systems](https://en.wikipedia.org/wiki/Embedded_system) where no large objects need to be allocated but suffers from [fragmentation](https://en.wikipedia.org/wiki/Fragmentation_(computing)) especially with long memory addresses. However, due to the significantly reduced overhead, this method can substantially improve performance for objects that need frequent allocation and deallocation, and so it is often used in [video games](https://en.wikipedia.org/wiki/Video_games).

#### Buddy blocks

In this system, memory is allocated into several pools of memory instead of just one, where each pool represents blocks of memory of a certain [power of two](https://en.wikipedia.org/wiki/Power_of_two) in size, or blocks of some other convenient size progression. All blocks of a particular size are kept in a sorted [linked list](https://en.wikipedia.org/wiki/Linked_list) or [tree](https://en.wikipedia.org/wiki/Tree_data_structure) and all new blocks that are formed during allocation are added to their respective memory pools for later use. If a smaller size is requested than is available, the smallest available size is selected and split. One of the resulting parts is selected, and the process repeats until the request is complete. When a block is allocated, the allocator will start with the smallest sufficiently large block to avoid needlessly breaking blocks. When a block is freed, it is compared to its buddy. If they are both free, they are combined and placed in the correspondingly larger-sized buddy-block list.

#### Slab allocation

This memory allocation mechanism preallocates memory chunks suitable to fit objects of a certain type or size. These chunks are called caches and the allocator only has to keep track of a list of free cache slots. Constructing an object will use any one of the free cache slots and destructing an object will add a slot back to the free cache slot list. This technique alleviates memory fragmentation and is efficient as there is no need to search for a suitable portion of memory, as any open slot will suffice.

#### Stack allocation

Many [Unix-like](https://en.wikipedia.org/wiki/Unix-like) systems as well as [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) implement a function called `alloca` for dynamically allocating stack memory in a way similar to the heap-based `malloc`. A compiler typically translates it to inlined instructions manipulating the stack pointer. Although there is no need of manually freeing memory allocated this way as it is automatically freed when the function that called `alloca` returns, there exists a risk of overflow. And since alloca is an *ad hoc* expansion seen in many systems but never in [POSIX](https://en.wikipedia.org/wiki/POSIX) or the C standard, its behavior in case of a stack overflow is undefined.

A safer version of alloca called `_malloca`, which reports errors, exists on Microsoft Windows. It requires the use of `_freea`. [gnulib](https://en.wikipedia.org/wiki/Gnulib) provides an equivalent interface, albeit instead of throwing an SEH exception on overflow, it delegates to malloc when an overlarge size is detected. A similar feature can be emulated using manual accounting and size-checking, such as in the uses of `alloca_account` in glibc.

## Automated memory management

The proper management of memory in an application is a difficult problem, and several different strategies for handling memory management have been devised.

### Automatic management of call stack variables

In many programming language implementations, the runtime environment for the program automatically allocates memory in the [call stack](https://en.wikipedia.org/wiki/Call_stack) for non-static [local variables](https://en.wikipedia.org/wiki/Local_variable) of a [subroutine](https://en.wikipedia.org/wiki/Subroutine), called [automatic variables](https://en.wikipedia.org/wiki/Automatic_variable), when the subroutine is called, and automatically releases that memory when the subroutine is exited. Special declarations may allow local variables to retain values between invocations of the procedure, or may allow local variables to be accessed by other subroutines. The automatic allocation of local variables makes [recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)) possible, to a depth limited by available memory.

### Garbage collection

Garbage collection is a strategy for automatically detecting memory allocated to objects that are no longer usable in a program, and returning that allocated memory to a pool of free memory locations. This method is in contrast to "manual" memory management where a programmer explicitly codes memory requests and memory releases in the program. While automatic garbage collection has the advantages of reducing programmer workload and preventing certain kinds of memory allocation bugs, garbage collection does require memory resources of its own, and can compete with the application program for processor time.

### Reference counting

Reference counting is a strategy for detecting that memory is no longer usable by a program by maintaining a counter for how many independent pointers point to the memory. Whenever a new pointer points to a piece of memory, the programmer is supposed to increase the counter. When the pointer changes where it points, or when the pointer is no longer pointing to any area or has itself been freed, the counter should decrease. When the counter drops to zero, the memory should be considered unused and freed. Some [reference counting](https://en.wikipedia.org/wiki/Reference_counting) systems require programmer involvement and some are implemented automatically by the compiler. A disadvantage of reference counting is that [circular references](https://en.wikipedia.org/wiki/Circular_reference) can develop which cause a memory leak to occur. This can be mitigated by either adding the concept of a "[weak reference](https://en.wikipedia.org/wiki/Weak_reference)" (a reference that does not participate in reference counting, but is notified when the area it is pointing to is no longer valid) or by combining reference counting and garbage collection together.

### Memory pools

A memory pool is a technique of automatically deallocating memory based on the state of the application, such as the lifecycle of a request or transaction. The idea is that many applications execute large chunks of code which may generate memory allocations, but that there is a point in execution where all of those chunks are known to be no longer valid. For example, in a web service, after each request the web service no longer needs any of the memory allocated during the execution of the request. Therefore, rather than keeping track of whether or not memory is currently being referenced, the memory is allocated according to the request or lifecycle stage with which it is associated. When that request or stage has passed, all associated memory is deallocated simultaneously.

## Systems with virtual memory

[Virtual memory](https://en.wikipedia.org/wiki/Virtual_memory) is a method of decoupling the memory organization from the physical hardware. The applications operate on memory via *virtual addresses*. Each attempt by the application to access a particular virtual memory address results in the virtual memory address being translated to an actual *physical address*.  In this way the addition of virtual memory enables granular control over memory systems and methods of access.

In virtual memory systems the operating system limits how a [process](https://en.wikipedia.org/wiki/Process_(computing)) can access the memory. This feature, called [memory protection](https://en.wikipedia.org/wiki/Memory_protection), can be used to disallow a process to read or write to memory that is not allocated to it, preventing malicious or malfunctioning code in one program from interfering with the operation of another.

Even though the memory allocated for specific processes is normally isolated, processes sometimes need to be able to share information. [Shared memory](https://en.wikipedia.org/wiki/Shared_memory_(interprocess_communication)) is one of the fastest techniques for [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication).

Memory is usually classified by access rate into [primary storage](https://en.wikipedia.org/wiki/Primary_storage) and [secondary storage](https://en.wikipedia.org/wiki/Secondary_storage). Memory management systems, among other operations, also handle the moving of information between these two levels of memory.

## Memory management in Burroughs/Unisys MCP systems [ 2 ]

An operating system manages various resources in the computing system. The memory subsystem is the system element for managing memory. The memory subsystem combines the hardware memory resource and the MCP OS software that manages the resource.

The memory subsystem manages the physical memory and the virtual memory of the system (both part of the hardware resource). The virtual memory extends physical memory by using extra space on a peripheral device, usually disk. The memory subsystem is responsible for moving code and data between main and virtual memory in a process known as overlaying. Burroughs was the first commercial implementation of virtual memory (although developed at Manchester University for the Ferranti Atlas computer) and integrated virtual memory with the system design of the B5000 from the start (in 1961) needing no external [memory management unit](https://en.wikipedia.org/wiki/Memory_management_unit) (MMU).

The memory subsystem is responsible for mapping logical requests for memory blocks to physical portions of memory (segments) which are found in the list of free segments. Each allocated block is managed by means of a segment descriptor, a special control word containing relevant metadata about the segment including address, length, machine type, and the p-bit or ‘presence’ bit which indicates whether the block is in main memory or needs to be loaded from the address given in the descriptor.

[Descriptors](https://en.wikipedia.org/wiki/Burroughs_large_systems_descriptors) are essential in providing memory safety and security so that operations cannot overflow or underflow the referenced block (commonly known as buffer overflow). Descriptors themselves are protected control words that cannot be manipulated except for specific elements of the MCP OS (enabled by the UNSAFE block directive in [NEWP](https://en.wikipedia.org/wiki/NEWP)).

Donald Knuth describes a similar system in Section 2.5 ‘Dynamic Storage Allocation’ of [‘Fundamental Algorithms’](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming).

## Memory management in OS/360 and successors

IBM [System/360](https://en.wikipedia.org/wiki/System/360) does not support virtual memory. Memory isolation of [jobs](https://en.wikipedia.org/wiki/Job_(computing)) is optionally accomplished using [protection keys](https://en.wikipedia.org/wiki/Memory_protection#Protection_keys), assigning storage for each job a different key, 0 for the supervisor or 1–15. Memory management in [OS/360](https://en.wikipedia.org/wiki/OS/360_and_successors) is a [supervisor](https://en.wikipedia.org/wiki/Supervisory_program) function. Storage is requested using the `GETMAIN` macro and freed using the `FREEMAIN` macro, which result in a call to the supervisor ([SVC](https://en.wikipedia.org/wiki/Supervisor_Call_instruction)) to perform the operation.

In OS/360 the details vary depending on how the system is [generated](https://en.wikipedia.org/wiki/System_generation), e.g., for [PCP](https://en.wikipedia.org/wiki/OS/360_and_successors#PCP), [MFT](https://en.wikipedia.org/wiki/OS/360_and_successors#MFT), [MVT](https://en.wikipedia.org/wiki/OS/360_and_successors#MVT).

In OS/360 MVT, suballocation within a job's *region* or the shared *System Queue Area* (SQA) is based on *subpools*, areas a multiple of 2 KB in size—the size of an area protected by a protection key. Subpools are numbered 0–255. Within a region subpools are assigned either the job's storage protection or the supervisor's key, key 0. Subpools 0–127 receive the job's key. Initially only subpool zero is created, and all user storage requests are satisfied from subpool 0, unless another is specified in the memory request. Subpools 250–255 are created by memory requests by the supervisor on behalf of the job. Most of these are assigned key 0, although a few get the key of the job. Subpool numbers are also relevant in MFT, although the details are much simpler.  MFT uses fixed *partitions* redefinable by the operator instead of dynamic regions and PCP has only a single partition.

Each subpool is mapped by a list of control blocks identifying allocated and free memory blocks within the subpool. Memory is allocated by finding a free area of sufficient size, or by allocating additional blocks in the subpool, up to the region size of the job. It is possible to free all or part of an allocated memory area.

The details for [OS/VS1](https://en.wikipedia.org/wiki/OS/VS1) are similar  to those for MFT and for MVT; the details for [OS/VS2](https://en.wikipedia.org/wiki/OS/VS2) are similar to those for MVT, except that the page size is 4 KiB. For both OS/VS1 and OS/VS2 the shared *System Queue Area* (SQA) is nonpageable.

In [MVS](https://en.wikipedia.org/wiki/MVS) the address space includes an additional pageable shared area, the *Common Storage Area* (CSA), and two additional private areas, the nonpageable *local system queue area* (LSQA) and the pageable *System Work area* (SWA). Also, the storage keys 0–7 are all reserved for use by privileged code.

## See also

* [Dynamic array](https://en.wikipedia.org/wiki/Dynamic_array)
* [Out of memory](https://en.wikipedia.org/wiki/Out_of_memory)
* [Heap pollution](https://en.wikipedia.org/wiki/Heap_pollution)

## Notes

1. **^** However, the run-time environment for a language processor may subdivide the memory dynamically acquired from the operating system, e.g., to implement a stack.
2. **^** In some operating systems, e.g., [OS/360](https://en.wikipedia.org/wiki/OS/360), the free storage may be subdivided in various ways, e.g., subpools in [OS/360](https://en.wikipedia.org/wiki/OS/360), below the line, above the line and above the bar in [z/OS](https://en.wikipedia.org/wiki/Z/OS).
3. **^** Not to be confused with the unrelated [heap](https://en.wikipedia.org/wiki/Heap_(data_structure)) data structure.
4. **^** A simplistic implementation of these two functions can be found in the article "Inside Memory Management".
5. **^** Except on the Model 67

## References

1. ^   Detlefs, D.; Dosser, A.; Zorn, B. (June 1994). ["Memory allocation costs in large C and C++ programs"](https://users.cs.northwestern.edu/~robby/uc-courses/15400-2008-spring/spe895.pdf) (PDF). *Software: Practice and Experience*. **24** (6): 527–542. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.30.3073](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.30.3073). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/spe.4380240602](https://doi.org/10.1002%2Fspe.4380240602). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [14214110](https://api.semanticscholar.org/CorpusID:14214110).
2. ^   ["Unisys MCP Managing Memory"](https://public.support.unisys.com/aseries/docs/ClearPath-MCP-20.0/86000387-514/chapter-000002004.html). *System Operations Guid*. [Unisys](https://en.wikipedia.org/wiki/Unisys).
3. **^** ["Main Storage Allocation"](http://bitsavers.org/pdf/ibm/360/os/R01-08/C28-6535-0_OS360_Concepts_and_Facilities_1965.pdf#page=72) (PDF). [*IBM Operating System/360 Concepts and Facilities*](http://bitsavers.org/pdf/ibm/360/os/R01-08/C28-6535-0_OS360_Concepts_and_Facilities_1965.pdf) (PDF). IBM Systems Reference Library (First ed.). IBM Corporation. 1965. p. 74. Retrieved Apr 3, 2019.
4. **^** Jonathan Bartlett. ["Inside Memory Management"](https://developer.ibm.com/tutorials/l-memory/). *IBM DeveloperWorks*.
5. **^** [Silberschatz, Abraham](https://en.wikipedia.org/wiki/Abraham_Silberschatz); Galvin, Peter B. (2004). *Operating system concepts*. Wiley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-471-69466-5](https://en.wikipedia.org/wiki/Special:BookSources/0-471-69466-5).
6. **^** `[alloca(3)](https://man7.org/linux/man-pages/man3/alloca.3.html)` – [Linux](https://en.wikipedia.org/wiki/Linux) Programmer's [Manual](https://en.wikipedia.org/wiki/Man_page) – Library Functions
7. **^** ["_malloca"](https://docs.microsoft.com/en-us/cpp/c-runtime-library/reference/malloca?view=vs-2019). *Microsoft CRT Documentation*. 26 October 2022.
8. **^** ["gnulib/malloca.h"](https://github.com/coreutils/gnulib/blob/master/lib/malloca.h). *GitHub*. Retrieved 24 November 2019.
9. **^** ["glibc/include/alloca.h"](https://github.com/bminor/glibc/blob/780684eb04298977bc411ebca1eadeeba4877833/include/alloca.h). Beren Minor's Mirrors. 23 November 2019.
10. **^** Tanenbaum, Andrew S. (1992). *Modern Operating Systems*. Englewood Cliffs, N.J.: Prentice-Hall. p. 90. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-13-588187-0](https://en.wikipedia.org/wiki/Special:BookSources/0-13-588187-0).
11. **^** Waychoff, Richard. ["Stories About the B5000 and People Who Were There"](https://archive.computerhistory.org/resources/access/text/2016/06/102724640-05-01-acc.pdf) (PDF). *Computer History Museum*.
12. **^** [*The Descriptor*](http://www.bitsavers.org/pdf/burroughs/LargeSystems/B5000_5500_5700/5000-20002-P_The_Descriptor_-_A_Definition_of_the_B_5000_Information_Processing_System_196102.pdf) (PDF). [Burroughs Corporation](https://en.wikipedia.org/wiki/Burroughs_Corporation). February 1961.
13. **^** OS360Sup, pp. [82](http://bitsavers.org/pdf/ibm/360/os/R21.7_Apr73/GC28-6646-7_Supervisor_Services_and_Macro_Instructions_Rel_21.7_Sep74.pdf#page=100)–85.
14. **^** OS360Sup, pp. [82](http://bitsavers.org/pdf/ibm/360/os/R21.7_Apr73/GC28-6646-7_Supervisor_Services_and_Macro_Instructions_Rel_21.7_Sep74.pdf#page=100).
15. **^** [*Program Logic: IBM System/360 Operating System MVT Supervisor*](http://bitsavers.org/pdf/ibm/360/os/R21.7_Apr73/plm/GY28-6659-7_MVT_Supervisor_PLM_Rel_21.7_May73.pdf) (PDF). IBM Corporation. May 1973. pp. 107–137. Retrieved Apr 3, 2019.
16. **^** OSVS1Dig, [p. 2.37-2.39](https://bitsavers.org/pdf/ibm/370/OS_VS1/GC24-5091-5_OS_VS1_Release_6_Programmers_Reference_Digest_197609.pdf#page=114).
17. **^** ["Virtual Storage Layout"](http://bitsavers.org/pdf/ibm/370/OS_VS2/Release_2_1973/GC28-0661-1_Introduction_to_OS_VS2_Release_2_Mar73.pdf#page=37) (PDF). [*Introduction to OS/VS2 Release 2*](http://bitsavers.org/pdf/ibm/370/OS_VS2/Release_2_1973/GC28-0661-1_Introduction_to_OS_VS2_Release_2_Mar73.pdf) (PDF). Systems (first ed.). [IBM](https://en.wikipedia.org/wiki/IBM). March 1973. p. 37. GC28-0661-1. Retrieved July 15, 2024.

## Bibliography

* [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth). *Fundamental Algorithms*, Third Edition. Addison-Wesley, 1997. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-89683-4](https://en.wikipedia.org/wiki/Special:BookSources/0-201-89683-4). Section 2.5: Dynamic Storage Allocation, pp. 435–456.
* [Simple Memory Allocation Algorithms](http://buzzan.tistory.com/m/post/view/id/428)[Archived](https://web.archive.org/web/20160305050619/http://buzzan.tistory.com/m/post/428) 5 March 2016 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) (originally published on OSDEV Community)
* Wilson, P. R.; Johnstone, M. S.; Neely, M.; Boles, D. (1995). ["Dynamic storage allocation: A survey and critical review"](http://www.cs.northwestern.edu/~pdinda/icsclass/doc/dsa.pdf) (PDF). *Memory Management*. Lecture Notes in Computer Science. Vol. 986. pp. 1–116. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.47.275](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.47.275). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/3-540-60368-9_19](https://doi.org/10.1007%2F3-540-60368-9_19). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-60368-9](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-60368-9).
* Berger, E. D.; Zorn, B. G.; [McKinley, K. S.](https://en.wikipedia.org/wiki/Kathryn_S._McKinley) (June 2001). ["Composing High-Performance Memory Allocators"](http://www.cs.umass.edu/%7Eemery/pubs/berger-pldi2001.pdf) (PDF). *Proceedings of the ACM SIGPLAN 2001 conference on Programming language design and implementation*. [PLDI](https://en.wikipedia.org/wiki/Programming_Language_Design_and_Implementation) '01. pp. 114–124. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.1.2112](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.1.2112). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/378795.378821](https://doi.org/10.1145%2F378795.378821). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1-58113-414-2](https://en.wikipedia.org/wiki/Special:BookSources/1-58113-414-2). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [7501376](https://api.semanticscholar.org/CorpusID:7501376).
* Berger, E. D.; Zorn, B. G.; [McKinley, K. S.](https://en.wikipedia.org/wiki/Kathryn_S._McKinley) (November 2002). ["Reconsidering Custom Memory Allocation"](http://people.cs.umass.edu/~emery/pubs/berger-oopsla2002.pdf) (PDF). *Proceedings of the 17th ACM SIGPLAN conference on Object-oriented programming, systems, languages, and applications*. [OOPSLA](https://en.wikipedia.org/wiki/OOPSLA) '02. pp. 1–12. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.119.5298](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.119.5298). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/582419.582421](https://doi.org/10.1145%2F582419.582421). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1-58113-471-1](https://en.wikipedia.org/wiki/Special:BookSources/1-58113-471-1). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [481812](https://api.semanticscholar.org/CorpusID:481812).

**OS360Sup**
: [*OS Release 21 IBM System/360 Operating System Supervisor Services and Macro Instructions*](http://bitsavers.org/pdf/ibm/360/os/R21.7_Apr73/GC28-6646-7_Supervisor_Services_and_Macro_Instructions_Rel_21.7_Sep74.pdf) (PDF). IBM Systems Reference Library (Eighth ed.). [IBM](https://en.wikipedia.org/wiki/IBM). September 1974. GC28-6646-7.

**OSVS1Dig**
: [*OS/VS1 Programmer's Reference Digest Release 6*](http://bitsavers.org/pdf/ibm/370/OS_VS1/GC24-5091-5_OS_VS1_Release_6_Programmers_Reference_Digest_197609.pdf) (PDF). Systems (Sixth ed.). [IBM](https://en.wikipedia.org/wiki/IBM). September 15, 1976. GC24-5091-5 with TNLs.

## External links

* ["Generic Memory Manager" C++ library](https://memory-mgr.sourceforge.net/)
* [Sample bit-mapped arena memory allocator in C](https://code.google.com/p/arena-memory-allocation/downloads/list)
* [TLSF: a constant time allocator for real-time systems](http://www.gii.upv.es/tlsf/)
* [Slides on Dynamic memory allocation](https://users.cs.jmu.edu/bernstdh/web/common/lectures/slides_cpp_dynamic-memory.php)
* [Inside A Storage Allocator](http://www.flounder.com/inside_storage_allocation.htm)
* [The Memory Management Reference](http://www.memorymanagement.org/)

: [The Memory Management Reference, Beginner's Guide Allocation](http://www.memorymanagement.org/articles/alloc.html)

* [Linux Memory Management](http://linux-mm.org/)
* [Memory Management For System Programmers](https://web.archive.org/web/20120510133117/http://www.enderunix.org/docs/memory.pdf)
* [VMem - general malloc/free replacement. Fast thread safe C++ allocator](http://www.puredevsoftware.com/)
* [Operating System Memory Management](https://www.infostore.co.in/2021/08/operating-system-memory-management.html)
 
NewPP limit report
Parsed by mw‐api‐ext.codfw.main‐546c494785‐c5znc
Cached time: 20260420135429
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.529 seconds
Real time usage: 0.690 seconds
Preprocessor visited node count: 2942/1000000
Revision size: 26679/2097152 bytes
Post‐expand include size: 80740/2097152 bytes
Template argument size: 3603/2097152 bytes
Highest expansion depth: 16/100
Expensive parser function count: 27/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 100961/5000000 bytes
Lua time usage: 0.336/10.000 seconds
Lua memory usage: 9830352/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  618.518      1 -total
 21.61%  133.666      2 Template:Reflist
 12.34%   76.355      1 Template:OS
 12.14%   75.076      1 Template:Sidebar
 10.93%   67.618      1 Template:Cite_journal
  9.86%   60.972      1 Template:Short_description
  6.89%   42.605      1 Template:More_footnotes
  6.44%   39.813     10 Template:Cite_book
  6.19%   38.302      1 Template:Memory_management_navbox
  6.03%   37.271      1 Template:Ambox
 Render ID 733d9faa-3cc0-11f1-9fc1-d91bac37c2be  Saved in parser cache with key enwiki:pcache:66924:|#|:idhash:canonical and timestamp 20260420135429 and revision id 1323865586. Rendering was triggered because: unknown