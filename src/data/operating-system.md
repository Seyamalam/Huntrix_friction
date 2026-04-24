# Operating system

* Source: https://en.wikipedia.org/wiki/Operating_system

---

| Operating systems |
| --- |
|  |
| Common features |
| [Process management](https://en.wikipedia.org/wiki/Process_management_(computing)) [Interrupts](https://en.wikipedia.org/wiki/Interrupt) [Memory management](https://en.wikipedia.org/wiki/Memory_management) [File system](https://en.wikipedia.org/wiki/File_system) [Device drivers](https://en.wikipedia.org/wiki/Device_driver) [Networking](https://en.wikipedia.org/wiki/Computer_network) [Security](https://en.wikipedia.org/wiki/Computer_security) [Input/output](https://en.wikipedia.org/wiki/Input/output) |
| [v](https://en.wikipedia.org/wiki/Template:OS)[t](https://en.wikipedia.org/wiki/Template_talk:OS)[e](https://en.wikipedia.org/wiki/Special:EditPage/Template:OS) |

An **operating system** (**OS**) is [system software](https://en.wikipedia.org/wiki/System_software) that manages [computer hardware](https://en.wikipedia.org/wiki/Computer_hardware) and [software](https://en.wikipedia.org/wiki/Software) resources, and provides common [services](https://en.wikipedia.org/wiki/Daemon_(computing)) for [computer programs](https://en.wikipedia.org/wiki/Computer_program).

[Time-sharing](https://en.wikipedia.org/wiki/Time-sharing) operating systems [schedule tasks](https://en.wikipedia.org/wiki/Scheduler_(computing)) for efficient use of the system and may also include accounting software for cost allocation of [processor time](https://en.wikipedia.org/wiki/Scheduling_(computing)), [mass storage](https://en.wikipedia.org/wiki/Mass_storage), peripherals, and other resources.

For hardware functions such as [input and output](https://en.wikipedia.org/wiki/Input_and_output) and [memory allocation](https://en.wikipedia.org/wiki/Memory_allocation), the operating system acts as an intermediary between programs and the computer hardware, although the application code is usually executed directly by the hardware and frequently makes [system calls](https://en.wikipedia.org/wiki/System_call) to an OS function or is [interrupted](https://en.wikipedia.org/wiki/Interrupt) by it. Operating systems are found on many devices that contain a computer – from cellular phones and video game consoles to [web servers](https://en.wikipedia.org/wiki/Web_server) and [supercomputers](https://en.wikipedia.org/wiki/Supercomputer).

As of November 2025, [Android](https://en.wikipedia.org/wiki/Android_(operating_system)) is the most popular operating system with a 38% market share, followed by [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) at 33%, [iOS](https://en.wikipedia.org/wiki/IOS) and [iPadOS](https://en.wikipedia.org/wiki/IPadOS) at 15%, [macOS](https://en.wikipedia.org/wiki/MacOS) at 4%, and [Linux](https://en.wikipedia.org/wiki/Linux) at 1%. Android, iOS, and iPadOS are operating systems for mobile devices such as smartphones, while Windows, macOS, and Linux are for desktop computers. [Linux distributions](https://en.wikipedia.org/wiki/Linux_distribution) are dominant in the server and supercomputing sectors. Other specialized classes of operating systems (special-purpose operating systems), such as [embedded](https://en.wikipedia.org/wiki/Embedded_system) and real-time systems, exist for many applications. [Security-focused operating systems](https://en.wikipedia.org/wiki/Security-focused_operating_system) also exist. Some operating systems have low system requirements (e.g. [light-weight Linux distribution](https://en.wikipedia.org/wiki/Light-weight_Linux_distribution)). Others may have higher system requirements.

Some operating systems require installation or may come pre-installed with purchased computers ([OEM](https://en.wikipedia.org/wiki/OEM)-installation), whereas others may run directly from media (i.e. [live CD](https://en.wikipedia.org/wiki/Live_CD)) or flash memory (i.e. a LiveUSB from a [USB](https://en.wikipedia.org/wiki/USB_flash_drive) stick).

## Definition and purpose

An operating system is difficult to define, but has been called "the [layer of software](https://en.wikipedia.org/wiki/Abstraction_layer) that manages a computer's resources for its users and their [applications](https://en.wikipedia.org/wiki/Application_software)". Operating systems include the software that is always running, called a [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system))—but can include other software as well. The two other types of programs that can run on a computer are [system programs](https://en.wikipedia.org/wiki/System_software)—which are associated with the operating system, but may not be part of the kernel—and applications—all other software.

There are three main purposes that an operating system fulfills:

* Operating systems allocate resources between different applications, deciding when they will receive [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit) (CPU) time or space in [memory](https://en.wikipedia.org/wiki/Computer_memory). On modern [personal computers](https://en.wikipedia.org/wiki/Personal_computer), users often want to run several applications at once. In order to ensure that one program cannot monopolize the computer's limited hardware resources, the operating system gives each application a share of the resource, either in time (CPU) or space (memory). The operating system also must isolate applications from each other to protect them from errors and security vulnerabilities in another application's code, but enable communications between different applications.
* Operating systems provide an interface that abstracts the details of accessing [hardware](https://en.wikipedia.org/wiki/Computer_hardware) details (such as physical memory) to make things easier for programmers. [Virtualization](https://en.wikipedia.org/wiki/Virtualization) also enables the operating system to mask limited hardware resources; for example, [virtual memory](https://en.wikipedia.org/wiki/Virtual_memory) can provide a program with the illusion of nearly unlimited memory that exceeds the computer's actual memory.
* Operating systems provide common services, such as an interface for accessing network and disk devices. This enables an application to be run on different hardware without needing to be rewritten. Which services to include in an operating system varies greatly, and this functionality makes up the great majority of code for most operating systems.

## Types of operating systems

### Multicomputer operating systems

With [multiprocessors](https://en.wikipedia.org/wiki/Multiprocessor) multiple CPUs share memory. A [multicomputer](https://en.wikipedia.org/wiki/Multicomputer) or [cluster computer](https://en.wikipedia.org/wiki/Cluster_computer) has multiple CPUs, each of which [has its own memory](https://en.wikipedia.org/wiki/Distributed_memory). Multicomputers were developed because large multiprocessors are difficult to engineer and prohibitively expensive; they are universal in [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing) because of the size of the machine needed. The different CPUs often need to send and receive messages to each other; to ensure good performance, the operating systems for these machines need to minimize this copying of [packets](https://en.wikipedia.org/wiki/Network_packet). Newer systems are often [multiqueue](https://en.wikipedia.org/w/index.php?title=Multiqueue&action=edit&redlink=1)—separating groups of users into separate [queues](https://en.wikipedia.org/wiki/Priority_queue)—to reduce the need for packet copying and support more concurrent users. Another technique is [remote direct memory access](https://en.wikipedia.org/wiki/Remote_direct_memory_access), which enables each CPU to access memory belonging to other CPUs. Multicomputer operating systems often support [remote procedure calls](https://en.wikipedia.org/wiki/Remote_procedure_call) where a CPU can call a [procedure](https://en.wikipedia.org/wiki/Procedural_programming) on another CPU, or [distributed shared memory](https://en.wikipedia.org/wiki/Distributed_shared_memory), in which the operating system uses [virtualization](https://en.wikipedia.org/wiki/Virtualization) to generate shared memory that does not physically exist.

### Distributed systems

A [distributed system](https://en.wikipedia.org/wiki/Distributed_system) is a group of distinct, [networked](https://en.wikipedia.org/wiki/Computer_network) computers—each of which might have their own operating system and file system. Unlike multicomputers, they may be dispersed anywhere in the world. [Middleware](https://en.wikipedia.org/wiki/Middleware), an additional software layer between the operating system and applications, is often used to improve consistency. Although it functions similarly to an operating system, it is not a true operating system.

### Embedded

[Embedded operating systems](https://en.wikipedia.org/wiki/Embedded_operating_system) are designed to be used in [embedded computer systems](https://en.wikipedia.org/wiki/Embedded_system), whether they are [internet of things](https://en.wikipedia.org/wiki/Internet_of_things) objects or not connected to a network. Embedded systems include many household appliances. The distinguishing factor is that they do not load user-installed software. Consequently, they do not need protection between different applications, enabling simpler designs. Very small operating systems might run in less than 10 [kilobytes](https://en.wikipedia.org/wiki/Kilobytes),  and the smallest are for [smart cards](https://en.wikipedia.org/wiki/Smart_cards).  Examples include [Embedded Linux](https://en.wikipedia.org/wiki/Embedded_Linux), [QNX](https://en.wikipedia.org/wiki/QNX), [VxWorks](https://en.wikipedia.org/wiki/VxWorks), and the extra-small systems [RIOT](https://en.wikipedia.org/wiki/RIOT_(operating_system)) and [TinyOS](https://en.wikipedia.org/wiki/TinyOS).

### Real-time

A [real-time operating system](https://en.wikipedia.org/wiki/Real-time_operating_system) is an operating system that guarantees to process [events](https://en.wikipedia.org/wiki/Event_(computing)) or data by or at a specific moment in time. Hard real-time systems require exact timing and are common in [manufacturing](https://en.wikipedia.org/wiki/Manufacturing), [avionics](https://en.wikipedia.org/wiki/Avionics), military, and other similar uses. With soft real-time systems, the occasional missed event is acceptable; this category often includes audio or multimedia systems, as well as smartphones. In order for hard real-time systems be sufficiently exact in their timing, often they are just a library with no protection between applications, such as [eCos](https://en.wikipedia.org/wiki/ECos).

### Hypervisor

A [hypervisor](https://en.wikipedia.org/wiki/Hypervisor) is an operating system that runs a [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine). The virtual machine is an application that emulates hardware; in other words, it operates as much as possible like the actual hardware the operating system was designed to run on. Virtual machines can be paused, saved, and resumed, making them useful for operating systems research, development, and debugging. They also enhance portability by enabling applications to be run on a computer even if they are not compatible with the base operating system.

### Library

A *library operating system* (libOS) is one in which the services that a typical operating system provides, such as networking, are provided in the form of [libraries](https://en.wikipedia.org/wiki/Library_(computing)) and composed with a single application and configuration code to construct a [unikernel](https://en.wikipedia.org/wiki/Unikernel):
 a specialized (only the absolute necessary pieces of code are extracted from libraries and bound together
), [single address space](https://en.wikipedia.org/wiki/Single_address_space_operating_system), machine image that can be deployed to cloud or embedded environments.

The operating system code and application code are not executed in separated [protection domains](https://en.wikipedia.org/wiki/Protection_ring) (there is only a single application running, at least conceptually, so there is no need to prevent interference between applications) and OS services are accessed via simple library calls (potentially [inlining](https://en.wikipedia.org/wiki/Inline_expansion) them based on compiler thresholds), without the usual overhead of [context switches](https://en.wikipedia.org/wiki/Context_switch),
 in a way similarly to embedded and real-time OSes. This overhead is not negligible: to the direct cost of mode switching it's necessary to add the indirect pollution of important processor structures (like [CPU caches](https://en.wikipedia.org/wiki/CPU_cache), the [instruction pipeline](https://en.wikipedia.org/wiki/Instruction_pipelining), and so on) which affects both user-mode and kernel-mode performance.

## History

IBM System/360 Model 50 operator's console and CPU; the operator's console is a 

[terminal](https://en.wikipedia.org/wiki/Computer_terminal)

 used by the operating system to communicate with the operator.

The first computers in the late 1940s and 1950s were directly programmed either with [plugboards](https://en.wikipedia.org/wiki/Plugboard) or with [machine code](https://en.wikipedia.org/wiki/Machine_code) inputted on media such as [punch cards](https://en.wikipedia.org/wiki/Punch_card), without [programming languages](https://en.wikipedia.org/wiki/Programming_language) or operating systems. After the introduction of the [transistor](https://en.wikipedia.org/wiki/Transistor) in the mid-1950s, [mainframes](https://en.wikipedia.org/wiki/Mainframe) began to be built. These still needed professional operators who manually do what a modern operating system would do, such as scheduling programs to run, but mainframes still had rudimentary operating systems such as [Fortran Monitor System](https://en.wikipedia.org/wiki/Fortran_Monitor_System) (FMS) and [IBSYS](https://en.wikipedia.org/wiki/IBSYS). In the 1960s, [IBM](https://en.wikipedia.org/wiki/IBM) introduced the first series of intercompatible computers ([System/360](https://en.wikipedia.org/wiki/System/360)). All of them ran the same operating system—[OS/360](https://en.wikipedia.org/wiki/OS/360)—which consisted of millions of lines of [assembly language](https://en.wikipedia.org/wiki/Assembly_language) that had thousands of [bugs](https://en.wikipedia.org/wiki/Software_bug). The OS/360 also was the first popular operating system to support [multiprogramming](https://en.wikipedia.org/wiki/Multiprogramming), such that, if one job is blocked waiting for an [input/output](https://en.wikipedia.org/wiki/Input/output) (I/O) operation to complete, another job can use the CPU. Holding multiple jobs in [memory](https://en.wikipedia.org/wiki/Memory_(computing)) required memory partitioning and safeguards against one job accessing the memory allocated to a different job.

Around the same time, [teleprinters](https://en.wikipedia.org/wiki/Teleprinter) began to be used as [terminals](https://en.wikipedia.org/wiki/Computer_terminal) so multiple users could access the computer simultaneously. The operating system [MULTICS](https://en.wikipedia.org/wiki/MULTICS) was intended to allow hundreds of users to access a large computer. Despite its limited adoption, it can be considered the precursor to [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing). The [UNIX](https://en.wikipedia.org/wiki/UNIX) operating system originated as a development of MULTICS for a single user. Because UNIX's [source code](https://en.wikipedia.org/wiki/Source_code) was available, it became the basis of other, incompatible operating systems, of which the most successful were [AT&T](https://en.wikipedia.org/wiki/AT%26T)'s [System V](https://en.wikipedia.org/wiki/System_V) and the [University of California](https://en.wikipedia.org/wiki/University_of_California)'s [Berkeley Software Distribution](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution) (BSD). To increase compatibility, the [IEEE](https://en.wikipedia.org/wiki/IEEE) released the [POSIX](https://en.wikipedia.org/wiki/POSIX) standard for operating system [application programming interfaces](https://en.wikipedia.org/wiki/Application_programming_interface) (APIs), which is supported by most UNIX systems. [MINIX](https://en.wikipedia.org/wiki/MINIX) was a stripped-down version of UNIX, developed in 1987 for educational uses, that inspired the commercially available, [free software](https://en.wikipedia.org/wiki/Free_software) [Linux](https://en.wikipedia.org/wiki/Linux). Since 2008, MINIX is used in controllers of most [Intel](https://en.wikipedia.org/wiki/Intel) [microchips](https://en.wikipedia.org/wiki/Microchips), while Linux is widespread in [data centers](https://en.wikipedia.org/wiki/Data_center) and [Android](https://en.wikipedia.org/wiki/Android_(operating_system)) smartphones.

### Microcomputers

[Command-line interface](https://en.wikipedia.org/wiki/Command-line_interface)

 of the 

[MS-DOS](https://en.wikipedia.org/wiki/MS-DOS)

 operating system

[Graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interface)

 of a 

[Macintosh](https://en.wikipedia.org/wiki/Macintosh)

The invention of [large scale integration](https://en.wikipedia.org/wiki/Large_scale_integration) enabled the production of [personal computers](https://en.wikipedia.org/wiki/Personal_computer) (initially called [microcomputers](https://en.wikipedia.org/wiki/Microcomputer)) from around 1980. For around five years, the [CP/M](https://en.wikipedia.org/wiki/CP/M) (Control Program for Microcomputers) was the most popular operating system for microcomputers. Later, IBM bought a [disk operating system](https://en.wikipedia.org/wiki/Disk_operating_system) from [Microsoft](https://en.wikipedia.org/wiki/Microsoft), which IBM sold as [IBM PC DOS](https://en.wikipedia.org/wiki/IBM_PC_DOS) and Microsoft branded as [MS-DOS](https://en.wikipedia.org/wiki/MS-DOS) (MicroSoft Disk Operating System) and was widely used on [IBM PC compatible](https://en.wikipedia.org/wiki/IBM_PC_compatible) microcomputers. Later versions increased their sophistication, in part by borrowing features from UNIX.

The first popular computer to use a [graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interface) (GUI) was [Apple](https://en.wikipedia.org/wiki/Apple_Inc.)'s [Macintosh](https://en.wikipedia.org/wiki/Macintosh). The GUI proved much more [user friendly](https://en.wikipedia.org/wiki/User_friendly) than the text-only [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface) of earlier operating systems. This success prompted Microsoft to add a GUI overlay to MS-DOS called [Windows](https://en.wikipedia.org/wiki/Windows). Windows later was rewritten as a stand-alone operating system, [Windows NT](https://en.wikipedia.org/wiki/Windows_NT), borrowing so many features from another OS ([VAX/VMS](https://en.wikipedia.org/wiki/VAX/VMS)) that a large [legal settlement](https://en.wikipedia.org/wiki/Legal_settlement) was paid. In the 21st century, Windows continues to be popular on personal computers but has less [market share](https://en.wikipedia.org/wiki/Market_share) of servers. UNIX operating systems, especially Linux, are the most popular on [enterprise systems](https://en.wikipedia.org/wiki/Enterprise_system) and servers but are also used on [mobile devices](https://en.wikipedia.org/wiki/Mobile_device) and many other computer systems.

On mobile devices, [Symbian OS](https://en.wikipedia.org/wiki/Symbian_OS) was dominant at first, being usurped by [BlackBerry OS](https://en.wikipedia.org/wiki/BlackBerry_OS) (introduced 2002) and [iOS](https://en.wikipedia.org/wiki/IOS) for [iPhones](https://en.wikipedia.org/wiki/IPhone) (from 2007). Later on, the open-source [Android](https://en.wikipedia.org/wiki/Android_(operating_system)) operating system (introduced 2008), with a Linux kernel and a C library ([Bionic](https://en.wikipedia.org/wiki/Bionic_(software))) partially based on BSD code, became most popular.

## Components

The components of an operating system are designed to ensure that various parts of a computer function cohesively. With the de facto obsoletion of [DOS](https://en.wikipedia.org/wiki/Disk_Operating_System), all user [software](https://en.wikipedia.org/wiki/Software) must interact with the operating system to access hardware.

### Kernel

The kernel is the part of the operating system that provides [protection](https://en.wikipedia.org/wiki/Protection_ring) between different applications and users. This protection is key to improving reliability by keeping errors isolated to one program, as well as security by limiting the power of [malicious software](https://en.wikipedia.org/wiki/Malicious_software) and protecting private data, and ensuring that one program cannot monopolize the computer's resources. Most operating systems have two modes of operation:  in [user mode](https://en.wikipedia.org/wiki/User_mode), the hardware checks that the software is only executing legal instructions, whereas the kernel has [unrestricted powers](https://en.wikipedia.org/wiki/Privilege_(computing)) and is not subject to these checks. The kernel also manages [memory](https://en.wikipedia.org/wiki/Random-access_memory) for other processes and controls access to [input/output](https://en.wikipedia.org/wiki/Input/output) devices.

#### Program execution

A kernel connects the application software to the hardware of a computer.

The operating system provides an interface between an application program and the computer hardware, so that an application program can interact with the hardware only by obeying rules and procedures programmed into the operating system. The operating system is also a set of services which simplify development and execution of application programs. Executing an application program typically involves the creation of a [process](https://en.wikipedia.org/wiki/Process_(computing)) by the operating system [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)), which assigns memory space and other resources, establishes a priority for the process in multi-tasking systems, loads program binary code into memory, and initiates execution of the application program, which then interacts with the user and with hardware devices. However, in some systems an application can request that the operating system execute another application within the same process, either as a subroutine or in a separate thread, e.g., the **LINK** and **ATTACH** facilities of [OS/360 and successors](https://en.wikipedia.org/wiki/OS/360_and_successors).

#### Interrupts

An [interrupt](https://en.wikipedia.org/wiki/Interrupt) (also known as an [abort](https://en.wikipedia.org/wiki/Abort_(computing)), [exception](https://en.wikipedia.org/wiki/Exception_handling), *fault*, [signal](https://en.wikipedia.org/wiki/Signal_(IPC)), or *trap*) provides an efficient way for most operating systems to react to the environment. Interrupts cause the [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit) (CPU) to have a [control flow](https://en.wikipedia.org/wiki/Control_flow) change away from the currently running program to an [interrupt handler](https://en.wikipedia.org/wiki/Interrupt_handler), also known as an interrupt service routine (ISR). An interrupt service routine may cause the [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit) (CPU) to have a [context switch](https://en.wikipedia.org/wiki/Context_switch). The details of how a computer processes an interrupt vary from architecture to architecture, and the details of how interrupt service routines behave vary from operating system to operating system. However, several interrupt functions are common. The architecture and operating system must:

1. transfer control to an interrupt service routine.
2. save the state of the currently running process.
3. restore the state after the interrupt is serviced.

##### Software interrupt

A software interrupt is a message to a [process](https://en.wikipedia.org/wiki/Process_(computing)) that an event has occurred. This contrasts with a *hardware interrupt* — which is a message to the [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit) (CPU) that an event has occurred. Software interrupts are similar to hardware interrupts — there is a change away from the currently running process. Similarly, both hardware and software interrupts execute an [interrupt service routine](https://en.wikipedia.org/wiki/Interrupt_handler).

Software interrupts may be normally occurring events. It is expected that a [time slice](https://en.wikipedia.org/wiki/Preemption_(computing)#Time_slice) will occur, so the kernel will have to perform a [context switch](https://en.wikipedia.org/wiki/Context_switch). A [computer program](https://en.wikipedia.org/wiki/Computer_program) may set a timer to go off after a few seconds in case too much data causes an algorithm to take too long.

Software interrupts may be error conditions, such as a malformed [machine instruction](https://en.wikipedia.org/wiki/Machine_code). However, the most common error conditions are [division by zero](https://en.wikipedia.org/wiki/Division_by_zero) and [accessing an invalid memory address](https://en.wikipedia.org/wiki/Segmentation_fault).

[Users](https://en.wikipedia.org/wiki/User_(computing)) can send messages to the kernel to modify the behavior of a currently running process. For example, in the [command-line environment](https://en.wikipedia.org/wiki/Command-line_interface), pressing the *interrupt character* (usually [Control-C](https://en.wikipedia.org/wiki/Control-C)) might terminate the currently running process.

To generate *software interrupts* for [x86](https://en.wikipedia.org/wiki/X86) CPUs, the [INT](https://en.wikipedia.org/wiki/INT_(x86_instruction)) [assembly language](https://en.wikipedia.org/wiki/Assembly_language) instruction is available. The syntax is `INT X`, where `X` is the offset number (in [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) format) to the [interrupt vector table](https://en.wikipedia.org/wiki/Interrupt_vector_table).

##### Signal

To generate *software interrupts* in [Unix-like](https://en.wikipedia.org/wiki/Unix-like) operating systems, the `kill(pid,signum)` [system call](https://en.wikipedia.org/wiki/System_call) will send a [signal](https://en.wikipedia.org/wiki/Signal_(IPC)) to another process. `pid` is the [process identifier](https://en.wikipedia.org/wiki/Process_identifier) of the receiving process. `signum` is the signal number (in [mnemonic](https://en.wikipedia.org/wiki/Mnemonic) format) to be sent. (The abrasive name of `kill` was chosen because early implementations only terminated the process.)

In Unix-like operating systems, *signals* inform processes of the occurrence of asynchronous events. To communicate asynchronously, interrupts are required. One reason a process needs to asynchronously communicate to another process solves a variation of the classic [reader/writer problem](https://en.wikipedia.org/wiki/Readers%E2%80%93writers_problem). The writer receives a pipe from the [shell](https://en.wikipedia.org/wiki/Shell_(computing)) for its output to be sent to the reader's input stream. The [command-line](https://en.wikipedia.org/wiki/Command-line_interface) syntax is `alpha | bravo`. `alpha` will write to the pipe when its computation is ready and then sleep in the wait queue. `bravo` will then be moved to the [ready queue](https://en.wikipedia.org/wiki/Multilevel_feedback_queue) and soon will read from its input stream. The kernel will generate *software interrupts* to coordinate the piping.

*Signals* may be classified into 7 categories. The categories are:

1. when a process finishes normally.
2. when a process has an error exception.
3. when a process runs out of a system resource.
4. when a process executes an illegal instruction.
5. when a process sets an alarm event.
6. when a process is aborted from the keyboard.
7. when a process has a tracing alert for debugging.

##### Hardware interrupt

[Input/output](https://en.wikipedia.org/wiki/Input/output) (I/O) [devices](https://en.wikipedia.org/wiki/Peripheral) are slower than the CPU. Therefore, it would slow down the computer if the CPU had to [wait](https://en.wikipedia.org/wiki/Busy_waiting) for each I/O to finish. Instead, a computer may implement interrupts for I/O completion, avoiding the need for [polling](https://en.wikipedia.org/wiki/Polling_(computer_science)) or busy waiting.

Some computers require an interrupt for each character or word, costing a significant amount of CPU time. [Direct memory access](https://en.wikipedia.org/wiki/Direct_memory_access) (DMA) is an architecture feature to allow devices to bypass the CPU and access [main memory](https://en.wikipedia.org/wiki/Random-access_memory) directly. (Separate from the architecture, a device may perform direct memory access to and from main memory either directly or via a bus.)

#### Input/output

##### Drivers

The operating system includes [device drivers](https://en.wikipedia.org/wiki/Device_drivers) to access input/output devices.

##### Interrupt-driven I/O

When a [computer user](https://en.wikipedia.org/wiki/User_(computing)) types a key on the keyboard, typically the character appears immediately on the screen. Likewise, when a user moves a [mouse](https://en.wikipedia.org/wiki/Computer_mouse), the [cursor](https://en.wikipedia.org/wiki/Cursor_(user_interface)) immediately moves across the screen. Each keystroke and mouse movement generates an *interrupt* called *Interrupt-driven I/O*. An interrupt-driven I/O occurs when a process causes an interrupt for every character or word transmitted.

##### Direct memory access

Devices such as [hard disk drives](https://en.wikipedia.org/wiki/Hard_disk_drive), [solid-state drives](https://en.wikipedia.org/wiki/Solid-state_drive), and [magnetic tape](https://en.wikipedia.org/wiki/Magnetic_tape) drives can transfer data at a rate high enough that interrupting the CPU for every byte or word transferred, and having the CPU transfer the byte or word between the device and memory, would require too much CPU time. Data is, instead, transferred between the device and memory independently of the CPU by hardware such as a [channel](https://en.wikipedia.org/wiki/Channel_I/O) or a [direct memory access](https://en.wikipedia.org/wiki/Direct_memory_access) controller; an interrupt is delivered only when all the data is transferred.

If a [computer program](https://en.wikipedia.org/wiki/Computer_program) executes a [system call](https://en.wikipedia.org/wiki/System_call) to perform a block I/O *write* operation, then the system call might execute the following instructions:

* Set the contents of the CPU's [registers](https://en.wikipedia.org/wiki/Processor_register) (including the [program counter](https://en.wikipedia.org/wiki/Program_counter)) into the [process control block](https://en.wikipedia.org/wiki/Process_control_block).
* Create an entry in the device-status table. The operating system maintains this table to keep track of which processes are waiting for which devices. One field in the table is the [memory address](https://en.wikipedia.org/wiki/Memory_address) of the process control block.
* Place all the characters to be sent to the device into a [memory buffer](https://en.wikipedia.org/wiki/Random-access_memory).
* Set the memory address of the memory buffer to a predetermined device register.
* Set the buffer size (an integer) to another predetermined register.
* Execute the [machine instruction](https://en.wikipedia.org/wiki/Machine_code) to begin the writing.
* Perform a [context switch](https://en.wikipedia.org/wiki/Context_switch) to the next process in the [ready queue](https://en.wikipedia.org/wiki/Multilevel_feedback_queue).

While the writing takes place, the operating system will context switch to other processes as normal. When the device finishes writing, the device will *interrupt* the currently running process by *asserting* an [interrupt request](https://en.wikipedia.org/wiki/Interrupt_request_(PC_architecture)). The device will also place an integer onto the data bus. Upon accepting the interrupt request, the operating system will:

* Push the contents of the [program counter](https://en.wikipedia.org/wiki/Program_counter) (a register) followed by the [status register](https://en.wikipedia.org/wiki/Status_register) onto the [call stack](https://en.wikipedia.org/wiki/Call_stack).
* Push the contents of the other registers onto the call stack. (Alternatively, the contents of the registers may be placed in a system table.)
* Read the integer from the data bus. The integer is an offset to the [interrupt vector table](https://en.wikipedia.org/wiki/Interrupt_vector_table). The vector table's instructions will then:

: Access the device-status table.
Extract the process control block.
Perform a context switch back to the writing process.

When the writing process has its [time slice](https://en.wikipedia.org/wiki/Preemption_(computing)#time_slice) expired, the operating system will:

* Pop from the call stack the registers other than the status register and program counter.
* Pop from the call stack the status register.
* Pop from the call stack the address of the next instruction, and set it back into the program counter.

With the program counter now reset, the interrupted process will resume its time slice.

#### Memory management

Among other things, a multiprogramming operating system [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) must be responsible for managing all system memory which is currently in use by the programs. This ensures that a program does not interfere with memory already in use by another program. Since programs time share, each program must have independent access to memory.

Cooperative memory management, used by many early operating systems, assumes that all programs make voluntary use of the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system))'s memory manager, and do not exceed their allocated memory. This system of memory management is almost never seen anymore, since programs often contain bugs which can cause them to exceed their allocated memory. If a program fails, it may cause memory used by one or more other programs to be affected or overwritten. Malicious programs or viruses may purposefully alter another program's memory, or may affect the operation of the operating system itself. With cooperative memory management, it takes only one misbehaved program to [crash](https://en.wikipedia.org/wiki/Crash_(computing)) the system.

[Memory protection](https://en.wikipedia.org/wiki/Memory_protection) enables the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) to limit a process' access to the computer's memory. Various methods of memory protection exist, including [memory segmentation](https://en.wikipedia.org/wiki/Memory_segmentation) and [paging](https://en.wikipedia.org/wiki/Paging). All methods require some level of hardware support (such as the [80286](https://en.wikipedia.org/wiki/80286) MMU), which does not exist in all computers.

In both segmentation and paging, certain [protected mode](https://en.wikipedia.org/wiki/Protected_mode) registers specify to the CPU what memory address it should allow a running program to access. Attempts to access other addresses trigger an interrupt, which causes the CPU to re-enter [supervisor mode](https://en.wikipedia.org/wiki/Supervisor_mode), placing the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) in charge. This is called a [segmentation violation](https://en.wikipedia.org/wiki/Segmentation_violation) or Seg-V for short, and since it is both difficult to assign a meaningful result to such an operation, and because it is usually a sign of a misbehaving program, the [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) generally resorts to terminating the offending program, and reports the error.

Windows versions 3.1 through ME had some level of memory protection, but programs could easily circumvent the need to use it. A [general protection fault](https://en.wikipedia.org/wiki/General_protection_fault) would be produced, indicating a segmentation violation had occurred; however, the system would often crash anyway.

#### Virtual memory

Many operating systems can "trick" programs into using memory scattered around the hard disk and RAM as if it is one continuous chunk of memory, called virtual memory.

The use of virtual memory addressing (such as paging or segmentation) means that the kernel can choose what memory each program may use at any given time, allowing the operating system to use the same memory locations for multiple tasks.

If a program tries to access memory that is not accessible memory, but nonetheless has been allocated to it, the kernel is interrupted . This kind of interrupt is typically a [page fault](https://en.wikipedia.org/wiki/Page_fault).

When the kernel detects a page fault it generally adjusts the virtual memory range of the program which triggered it, granting it access to the memory requested. This gives the kernel discretionary power over where a particular application's memory is stored, or even whether or not it has been allocated yet.

In modern operating systems, memory which is accessed less frequently can be temporarily stored on a disk or other media to make that space available for use by other programs. This is called [swapping](https://en.wikipedia.org/wiki/Paging), as an area of memory can be used by multiple programs, and what that memory area contains can be swapped or exchanged on demand.

Virtual memory provides the programmer or the user with the perception that there is a much larger amount of RAM in the computer than is really there.

### Concurrency

[Concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science)) refers to the operating system's ability to carry out multiple tasks simultaneously. Virtually all modern operating systems support concurrency.

[Threads](https://en.wikipedia.org/wiki/Thread_(computing)) enable splitting a process' work into multiple parts that can run simultaneously. The number of threads is not limited by the number of processors available. If there are more threads than processors, the operating system [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) schedules, suspends, and resumes threads, controlling when each thread runs and how much CPU time it receives.  During a [context switch](https://en.wikipedia.org/wiki/Context_switch) a running thread is suspended, its state is saved into the [thread control block](https://en.wikipedia.org/wiki/Thread_control_block) and stack, and the state of the new thread is loaded in. Historically, on many systems a thread could run until it relinquished control ([cooperative multitasking](https://en.wikipedia.org/wiki/Cooperative_multitasking)). Because this model can allow a single thread to monopolize the processor, most operating systems now can [interrupt](https://en.wikipedia.org/wiki/Interrupt) a thread ([preemptive multitasking](https://en.wikipedia.org/wiki/Preemptive_multitasking)).

Threads have their own thread ID, [program counter](https://en.wikipedia.org/wiki/Program_counter) (PC), a [register](https://en.wikipedia.org/wiki/Processor_register) set, and a [stack](https://en.wikipedia.org/wiki/Stack-based_memory_allocation), but share code, [heap](https://en.wikipedia.org/wiki/Heap_memory) data, and other resources with other threads of the same process. Thus, there is less overhead to create a thread than a new process. On single-CPU systems, concurrency is switching between processes. Many computers have multiple CPUs. [Parallelism](https://en.wikipedia.org/wiki/Parallel_computing) with multiple threads running on different CPUs can speed up a program, depending on how much of it can be executed concurrently.

### File system

[File systems](https://en.wikipedia.org/wiki/File_system)

 allow users and programs to organize and sort files on a computer, often through the use of 

[directories](https://en.wikipedia.org/wiki/Directory_(computing))

 (or folders).

Permanent storage devices used in twenty-first century computers, unlike [volatile](https://en.wikipedia.org/wiki/Volatile_memory) [dynamic random-access memory](https://en.wikipedia.org/wiki/Dynamic_random-access_memory) (DRAM), are still accessible after a [crash](https://en.wikipedia.org/wiki/Crash_(computing)) or [power failure](https://en.wikipedia.org/wiki/Power_failure). Permanent ([non-volatile](https://en.wikipedia.org/wiki/Non-volatile_memory)) storage is much cheaper per byte, but takes several orders of magnitude longer to access, read, and write. The two main technologies are a [hard drive](https://en.wikipedia.org/wiki/Hard_drive) consisting of [magnetic disks](https://en.wikipedia.org/wiki/Magnetic_disk), and [flash memory](https://en.wikipedia.org/wiki/Flash_memory) (a [solid-state drive](https://en.wikipedia.org/wiki/Solid-state_drive) that stores data in electrical circuits). The latter is more expensive but faster and more durable.

[File systems](https://en.wikipedia.org/wiki/File_system) are an [abstraction](https://en.wikipedia.org/wiki/Abstraction) used by the operating system to simplify access to permanent storage. They provide human-readable [filenames](https://en.wikipedia.org/wiki/Filenames) and other [metadata](https://en.wikipedia.org/wiki/Metadata), increase performance via [amortization](https://en.wikipedia.org/wiki/Amortization_(computer_science)) of accesses, prevent multiple threads from accessing the same section of memory, and include [checksums](https://en.wikipedia.org/wiki/Checksums) to identify [corruption](https://en.wikipedia.org/wiki/Data_corruption). File systems are composed of files (named collections of data, of an arbitrary size) and [directories](https://en.wikipedia.org/wiki/Directory_(computing)) (also called folders) that list human-readable filenames and other directories. An absolute [file path](https://en.wikipedia.org/wiki/File_path) begins at the [root directory](https://en.wikipedia.org/wiki/Root_directory) and lists [subdirectories](https://en.wikipedia.org/wiki/Subdirectories) divided by punctuation, while a relative path defines the location of a file from a directory.

[System calls](https://en.wikipedia.org/wiki/System_call) (which are sometimes [wrapped](https://en.wikipedia.org/wiki/Wrapper_function) by libraries) enable applications to create, delete, open, and close files, as well as link, read, and write to them. All these operations are carried out by the operating system on behalf of the application. The operating system's efforts to reduce latency include storing recently requested blocks of memory in a [cache](https://en.wikipedia.org/wiki/Cache_(computing)) and [prefetching](https://en.wikipedia.org/wiki/Prefetching) data that the application has not asked for, but might need next. [Device drivers](https://en.wikipedia.org/wiki/Device_driver) are software specific to each [input/output](https://en.wikipedia.org/wiki/Input/output) (I/O) device that enables the operating system to work without modification over different hardware.

Another component of file systems is a [dictionary](https://en.wikipedia.org/wiki/Associative_array) that maps a file's name and metadata to the [data block](https://en.wikipedia.org/wiki/Data_block) where its contents are stored. Most file systems use directories to convert file names to file numbers. To find the block number, the operating system uses an [index](https://en.wikipedia.org/wiki/Database_index) (often implemented as a [tree](https://en.wikipedia.org/wiki/Tree_(data_structure))). Separately, there is a free space [map](https://en.wikipedia.org/wiki/Map_(data_structure)) to track free blocks, commonly implemented as a [bitmap](https://en.wikipedia.org/wiki/Bitmap). Although any free block can be used to store a new file, many operating systems try to group together files in the same directory to maximize performance, or periodically reorganize files to reduce [fragmentation](https://en.wikipedia.org/wiki/File_system_fragmentation).

Maintaining data reliability in the face of a computer crash or hardware failure is another concern. File writing protocols are designed with atomic operations so as not to leave permanent storage in a partially written, inconsistent state in the event of a crash at any point during writing. Data corruption is addressed by redundant storage (for example, RAID—[redundant array of inexpensive disks](https://en.wikipedia.org/wiki/Redundant_array_of_inexpensive_disks)) and [checksums](https://en.wikipedia.org/wiki/Checksums) to detect when data has been corrupted. With multiple layers of checksums and backups of a file, a system can recover from multiple hardware failures. Background processes are often used to detect and recover from data corruption.

### Networking

Modern operating systems usually include a [network stack](https://en.wikipedia.org/wiki/Network_stack), such as the [TCP/IP](https://en.wikipedia.org/wiki/TCP/IP) protocol stack.

### Security

Security means protecting users from other users of the same computer, as well as from those who seeking remote access to it over a network.  Operating systems security rests on achieving the [CIA triad](https://en.wikipedia.org/wiki/CIA_triad): confidentiality (unauthorized users cannot access data), integrity (unauthorized users cannot modify data), and availability (ensuring that the system remains available to authorized users, even in the event of a [denial of service attack](https://en.wikipedia.org/wiki/Denial_of_service_attack)). As with other computer systems, isolating [security domains](https://en.wikipedia.org/wiki/Security_domain)—in the case of operating systems, the kernel, processes, and [virtual machines](https://en.wikipedia.org/wiki/Virtual_machine)—is key to achieving security. Other ways to increase security include simplicity to minimize the [attack surface](https://en.wikipedia.org/wiki/Attack_surface), locking access to resources by default, checking all requests for authorization, [principle of least authority](https://en.wikipedia.org/wiki/Principle_of_least_authority) (granting the minimum privilege essential for performing a task), [privilege separation](https://en.wikipedia.org/wiki/Privilege_separation), and reducing shared data.

Some operating system designs are more secure than others. Those with no isolation between the kernel and applications are least secure, while those with a [monolithic kernel](https://en.wikipedia.org/wiki/Monolithic_kernel) like most general-purpose operating systems are still vulnerable if any part of the kernel is compromised. A more secure design features [microkernels](https://en.wikipedia.org/wiki/Microkernel) that separate the kernel's privileges into many separate security domains and reduce the consequences of a single kernel breach. [Unikernels](https://en.wikipedia.org/wiki/Unikernel) are another approach that improves security by minimizing the kernel and separating out other operating systems functionality by application.

Most operating systems are written in [C](https://en.wikipedia.org/wiki/C_(programming_language)) or [C++](https://en.wikipedia.org/wiki/C%2B%2B), which create potential vulnerabilities for exploitation. Despite attempts to protect against them, vulnerabilities are caused by [buffer overflow](https://en.wikipedia.org/wiki/Buffer_overflow) attacks, which are enabled by the lack of [bounds checking](https://en.wikipedia.org/wiki/Bounds_checking).  Hardware vulnerabilities, some of them [caused by CPU optimizations](https://en.wikipedia.org/wiki/Speculative_execution_CPU_vulnerabilities), can also be used to compromise the operating system. There are known instances of operating system programmers deliberately implanting vulnerabilities, such as [back doors](https://en.wikipedia.org/wiki/Backdoor_(computing)).

Operating systems security is hampered by their increasing complexity and the resulting inevitability of bugs. Because [formal verification](https://en.wikipedia.org/wiki/Formal_verification) of operating systems may not be feasible, developers use operating system [hardening](https://en.wikipedia.org/wiki/Hardening_(computing)) to reduce vulnerabilities, e.g. [address space layout randomization](https://en.wikipedia.org/wiki/Address_space_layout_randomization), [control-flow integrity](https://en.wikipedia.org/wiki/Control-flow_integrity), [access restrictions](https://en.wikipedia.org/wiki/Access-control_list), and other techniques. There are no restrictions on who can contribute code to open source operating systems; such operating systems have transparent change histories and distributed governance structures. Open source developers strive to work collaboratively to find and eliminate security vulnerabilities, using [code review](https://en.wikipedia.org/wiki/Code_review) and [type checking](https://en.wikipedia.org/wiki/Type_checking) to expunge malicious code. [Andrew S. Tanenbaum](https://en.wikipedia.org/wiki/Andrew_S._Tanenbaum) advises releasing the [source code](https://en.wikipedia.org/wiki/Source_code) of all operating systems, arguing that it prevents developers from placing trust in secrecy and thus relying on the unreliable practice of [security by obscurity](https://en.wikipedia.org/wiki/Security_by_obscurity).

### User interface

A [user interface](https://en.wikipedia.org/wiki/User_interface) (UI) is essential to support human interaction with a computer. The two most common user interface types for any computer are

* [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface), where computer commands are typed, line-by-line,
* [graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interface) (GUI) using a visual environment, most commonly a combination of the window, icon, menu, and pointer elements, also known as [WIMP](https://en.wikipedia.org/wiki/WIMP_(computing)).

For personal computers, including [smartphones](https://en.wikipedia.org/wiki/Smartphone) and [tablet computers](https://en.wikipedia.org/wiki/Tablet_computer), and for [workstations](https://en.wikipedia.org/wiki/Workstation), user input is typically from a combination of [keyboard](https://en.wikipedia.org/wiki/Keyboard_technology), [mouse](https://en.wikipedia.org/wiki/Mouse_(computing)), and [trackpad](https://en.wikipedia.org/wiki/Trackpad) or [touchscreen](https://en.wikipedia.org/wiki/Touchscreen), all of which are connected to the operating system with specialized software. Personal computer users who are not software developers or coders often prefer GUIs for both input and output; GUIs are supported by most personal computers. The software to support GUIs is more complex than a command line for input and plain text output. Plain text output is often preferred by programmers, and is easy to support.

## Operating system development as a hobby

A hobby operating system may be classified as one whose code has not been directly derived from an existing operating system, and has few users and active developers.

In some cases, hobby development is in support of a "[homebrew](https://en.wikipedia.org/wiki/Homebrew_Computer_Club)" computing device, for example, a simple [single-board computer](https://en.wikipedia.org/wiki/Single-board_computer) powered by a [6502 microprocessor](https://en.wikipedia.org/wiki/MOS_Technology_6502). Or, development may be for an architecture already in widespread use. Operating system development may come from entirely new concepts, or may commence by modeling an existing operating system. In either case, the hobbyist is her/his own developer, or may interact with a small and sometimes unstructured group of individuals who have like interests.

Examples of hobby operating systems include [Syllable](https://en.wikipedia.org/wiki/Syllable_Desktop) and [TempleOS](https://en.wikipedia.org/wiki/TempleOS).

## Diversity of operating systems and portability

If an application is written for use on a specific operating system, and is [ported](https://en.wikipedia.org/wiki/Ported) to another OS, the functionality required by that application may be implemented differently by that OS (the names of functions, meaning of arguments, etc.) requiring the application to be adapted, changed, or otherwise [maintained](https://en.wikipedia.org/wiki/Software_maintenance).

This cost in supporting operating systems diversity can be avoided by instead writing applications for [software platforms](https://en.wikipedia.org/wiki/Software_platform) such as [Java](https://en.wikipedia.org/wiki/Java_(software_platform)) or [Qt](https://en.wikipedia.org/wiki/Qt_(software)). These abstractions have already borne the cost of adaptation to specific operating systems and their [system libraries](https://en.wikipedia.org/wiki/System_library).

Another approach is for operating system vendors to adopt standards. For example, [POSIX](https://en.wikipedia.org/wiki/POSIX) and [OS abstraction layers](https://en.wikipedia.org/wiki/Operating_system_abstraction_layer) provide commonalities that reduce porting costs.

## Popular operating systems

As of October 2025, [Android](https://en.wikipedia.org/wiki/Android_(operating_system)), based on the Linux kernel, is the most popular operating system with a 38% market share, followed by [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) at 31%, [iOS](https://en.wikipedia.org/wiki/IOS) and [iPadOS](https://en.wikipedia.org/wiki/IPadOS) at 15%, [macOS](https://en.wikipedia.org/wiki/MacOS) at 7%, and [Linux](https://en.wikipedia.org/wiki/Linux) at 1%. Android, iOS, and iPadOS are [mobile operating systems](https://en.wikipedia.org/wiki/Mobile_operating_system), while Windows, macOS, and Linux are desktop operating systems.

### Linux

[Layers](https://en.wikipedia.org/wiki/Abstraction_layer)

 of a Linux system

[Linux](https://en.wikipedia.org/wiki/Linux) is [free software](https://en.wikipedia.org/wiki/Free_software) distributed under the [GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License) (GPL), which means that all of its derivatives are legally required to release their [source code](https://en.wikipedia.org/wiki/Source_code). Linux was designed by programmers for their own use, thus emphasizing simplicity and consistency, with a small number of basic elements that can be combined in nearly unlimited ways, and avoiding redundancy.

Its design is similar to other UNIX systems not using a [microkernel](https://en.wikipedia.org/wiki/Microkernel). It is written in [C](https://en.wikipedia.org/wiki/C_(programming_language)) and uses [UNIX System V](https://en.wikipedia.org/wiki/UNIX_System_V) syntax, but also supports [BSD](https://en.wikipedia.org/wiki/BSD) syntax. Linux supports standard UNIX networking features, as well as the full suite of UNIX tools, while [supporting multiple users](https://en.wikipedia.org/wiki/Multiuser) and employing [preemptive multitasking](https://en.wikipedia.org/wiki/Preemptive_multitasking). Initially of a minimalist design, Linux is a flexible system that can work in under 16 [MB](https://en.wikipedia.org/wiki/Megabytes) of [RAM](https://en.wikipedia.org/wiki/RAM), but still is used on large [multiprocessor](https://en.wikipedia.org/wiki/Multiprocessor) systems. Similar to other UNIX systems, Linux [distributions](https://en.wikipedia.org/wiki/Linux_distribution) are composed of a [kernel](https://en.wikipedia.org/wiki/Linux_kernel), [system libraries](https://en.wikipedia.org/wiki/System_library), and [system utilities](https://en.wikipedia.org/wiki/System_utilities). Linux has a [graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interface) (GUI) with a desktop, folder and file icons, as well as the option to access the operating system via a [command line](https://en.wikipedia.org/wiki/Command_line).

[Android](https://en.wikipedia.org/wiki/Android_(operating_system)) is a partially open-source operating system closely based on Linux and has become the most widely used operating system by users, due to its popularity on [smartphones](https://en.wikipedia.org/wiki/Smartphones) and, to a lesser extent, [embedded systems](https://en.wikipedia.org/wiki/Embedded_system) needing a GUI, such as "[smart watches](https://en.wikipedia.org/wiki/Smart_watch), [automotive dashboards](https://en.wikipedia.org/wiki/Android_Automotive), airplane seatbacks, [medical devices](https://en.wikipedia.org/wiki/Medical_devices), and [home appliances](https://en.wikipedia.org/wiki/Home_appliance)". Unlike Linux, much of Android is written in [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) and uses [object-oriented design](https://en.wikipedia.org/wiki/Object-oriented_design).

### Microsoft Windows

Security descriptor for a file that is read-only by default, specified no access for Elvis, read/write access for Cathy, and full access for Ida, the owner of the file

Windows is a [proprietary](https://en.wikipedia.org/wiki/Proprietary) operating system that is widely used on desktop computers, laptops, tablets, phones, [workstations](https://en.wikipedia.org/wiki/Workstation), [enterprise servers](https://en.wikipedia.org/wiki/Enterprise_server), and [Xbox](https://en.wikipedia.org/wiki/Xbox) consoles. The operating system was designed for "security, reliability, compatibility, high performance, extensibility, portability, and international support"—later on, [energy efficiency](https://en.wikipedia.org/w/index.php?title=Energy_efficiency_in_operating_systems&action=edit&redlink=1) and support for [dynamic devices](https://en.wikipedia.org/w/index.php?title=Dynamic_device&action=edit&redlink=1) also became priorities.

[Windows Executive](https://en.wikipedia.org/wiki/Windows_Executive) works via [kernel-mode objects](https://en.wikipedia.org/wiki/Object_Manager_(Windows)) for important data structures like processes, threads, and sections (memory objects, for example files). The operating system supports [demand paging](https://en.wikipedia.org/wiki/Demand_paging) of [virtual memory](https://en.wikipedia.org/wiki/Virtual_memory), which speeds up I/O for many applications. I/O [device drivers](https://en.wikipedia.org/wiki/Device_drivers) use the [Windows Driver Model](https://en.wikipedia.org/wiki/Windows_Driver_Model). The [NTFS](https://en.wikipedia.org/wiki/NTFS) file system has a master table and each file is represented as a [record](https://en.wikipedia.org/wiki/Record_(computer_science)) with [metadata](https://en.wikipedia.org/wiki/Metadata). The scheduling includes [preemptive multitasking](https://en.wikipedia.org/wiki/Preemptive_multitasking). Windows has many security features; especially important are the use of [access-control lists](https://en.wikipedia.org/wiki/Access-control_list) and [integrity levels](https://en.wikipedia.org/wiki/Safety_integrity_level). Every process has an authentication token and each object is given a security descriptor. Later releases have added even more security features.

## See also

* [Comparison of operating systems](https://en.wikipedia.org/wiki/Comparison_of_operating_systems)
* [DBOS](https://en.wikipedia.org/wiki/DBOS)
* [Interruptible operating system](https://en.wikipedia.org/wiki/Interruptible_operating_system)
* [List of operating systems](https://en.wikipedia.org/wiki/List_of_operating_systems)
* [List of pioneers in computer science](https://en.wikipedia.org/wiki/List_of_pioneers_in_computer_science)
* [Glossary of operating systems terms](https://en.wikipedia.org/wiki/Glossary_of_operating_systems_terms)
* [Microcontroller](https://en.wikipedia.org/wiki/Microcontroller)
* [Network operating system](https://en.wikipedia.org/wiki/Network_operating_system)
* [Object-oriented operating system](https://en.wikipedia.org/wiki/Object-oriented_operating_system)
* [Lisp machine](https://en.wikipedia.org/wiki/Lisp_machine)
* [Operating System Projects](https://en.wikipedia.org/wiki/Operating_System_Projects)
* [System Commander](https://en.wikipedia.org/wiki/System_Commander)
* [System image](https://en.wikipedia.org/wiki/System_image)
* [Timeline of operating systems](https://en.wikipedia.org/wiki/Timeline_of_operating_systems)

## Notes

1. **^** Modern CPUs provide instructions (e.g. SYSENTER) to invoke selected kernel services without an interrupts. Visit [https://wiki.osdev.org/SYSENTER](https://wiki.osdev.org/SYSENTER) for more information.
2. **^** Examples include [SIGINT](https://en.wikipedia.org/wiki/Signal_(IPC)#SIGINT), [SIGSEGV](https://en.wikipedia.org/wiki/SIGSEGV), and [SIGBUS](https://en.wikipedia.org/wiki/SIGBUS).
3. **^** often in the form of a DMA chip for smaller systems and I/O channels for larger systems
4. **^** Modern [motherboards](https://en.wikipedia.org/wiki/Motherboard) have a DMA controller. Additionally, a device may also have one. Visit [SCSI RDMA Protocol](https://en.wikipedia.org/wiki/SCSI_RDMA_Protocol).
5. **^** There are several reasons that the memory might be inaccessible
The address might be out of range
The address might refer to a page or segment that has been moved to a backing store
The address might refer to memory that has restricted access due to, e.g., [key](https://en.wikipedia.org/wiki/Memory_protection#Protection_keys), [ring](https://en.wikipedia.org/wiki/Memory_protection#Protection_rings).

## References

1. **^** Stallings (2005). *Operating Systems, Internals and Design Principles*. Pearson: Prentice Hall. p. 6.
2. **^** Dhotre, I.A. (2009). *Operating Systems*. Technical Publications. p. 1.
3. ^   ["Operating System Market Share Worldwide"](https://gs.statcounter.com/os-market-share). *StatCounter Global Stats*. Retrieved 20 December 2024.
4. **^** Silberschatz, Abraham; Galvin, Peter B.; Gagne, Greg (2005). [*VII. Special-Purpose Systems - Operating System Concepts, Seventh Edition [Book]*](https://www.oreilly.com/library/view/operating-system-concepts/9780471694663/pt07.html). Wiley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-471-69466-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-471-69466-3). [Archived](https://web.archive.org/web/20210613190049/https://www.oreilly.com/library/view/operating-system-concepts/9780471694663/pt07.html) from the original on 13 June 2021. Retrieved 8 February 2021. `{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book)}}`: `|website=` ignored ([help](https://en.wikipedia.org/wiki/Help:CS1_errors#periodical_ignored))
5. **^** ["Special-Purpose Operating Systems - RWTH AACHEN UNIVERSITY Institute for Automation of Complex Power Systems - English"](https://www.acs.eonerc.rwth-aachen.de/cms/E-ON-ERC-ACS/Studium/Lehrveranstaltungen/~lrhs/Spezial-Betriebssysteme/?lidx=1). *www.acs.eonerc.rwth-aachen.de*. [Archived](https://web.archive.org/web/20210614034001/https://www.acs.eonerc.rwth-aachen.de/cms/E-ON-ERC-ACS/Studium/Lehrveranstaltungen/~lrhs/Spezial-Betriebssysteme/?lidx=1) from the original on 14 June 2021. Retrieved 8 February 2021.
6. ^   Tanenbaum & Bos 2023, p. 4.
7. **^** Anderson & Dahlin 2014, p. 6.
8. ^   Silberschatz et al. 2018, p. 6.
9. ^    Anderson & Dahlin 2014, p. 7.
10. **^** Anderson & Dahlin 2014, pp. 9–10.
11. **^** Tanenbaum & Bos 2023, pp. 6–7.
12. **^** Anderson & Dahlin 2014, p. 10.
13. **^** Tanenbaum & Bos 2023, p. 5.
14. ^    Anderson & Dahlin 2014, p. 11.
15. **^** Anderson & Dahlin 2014, pp. 7, 9, 13.
16. **^** Anderson & Dahlin 2014, pp. 12–13.
17. **^** Tanenbaum & Bos 2023, p. 557.
18. **^** Tanenbaum & Bos 2023, p. 558.
19. ^   Tanenbaum & Bos 2023, p. 565.
20. **^** Tanenbaum & Bos 2023, p. 562.
21. **^** Tanenbaum & Bos 2023, p. 563.
22. **^** Tanenbaum & Bos 2023, p. 569.
23. **^** Tanenbaum & Bos 2023, p. 571.
24. **^** Tanenbaum & Bos 2023, p. 579.
25. **^** Tanenbaum & Bos 2023, p. 581.
26. **^** Tanenbaum & Bos 2023, pp. 37–38.
27. **^** Tanenbaum & Bos 2023, p. 39.
28. ^     Tanenbaum & Bos 2023, p. 38.
29. **^** Silberschatz et al. 2018, pp. 701.
30. **^** Silberschatz et al. 2018, pp. 705.
31. **^** Anderson & Dahlin 2014, p. 12.
32. **^** Madhavapeddy, Anil; Scott, David J (November 2013). ["Unikernels: Rise of the Virtual Library Operating System: What if all the software layers in a virtual appliance were compiled within the same safe, high-level language framework?"](https://doi.org/10.1145/2557963.2566628). *ACM Queue*. Vol. 11, no. 11. New York, NY, USA: ACM. pp. 30–44. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/2557963.2566628](https://doi.org/10.1145%2F2557963.2566628). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1542-7730](https://search.worldcat.org/issn/1542-7730). Retrieved 7 August 2024.
33. **^** ["Build Process - Unikraft"](https://unikraft.org/docs/concepts/build-process). [Archived](https://web.archive.org/web/20240422183734/https://unikraft.org/docs/concepts/build-process) from the original on 22 April 2024. Retrieved 8 August 2024.
34. **^** ["Leave your OS at home: the rise of library operating systems"](https://www.sigarch.org/leave-your-os-at-home-the-rise-of-library-operating-systems/). [ACM SIGARCH](https://en.wikipedia.org/wiki/ACM_SIGARCH). 14 September 2017. [Archived](https://web.archive.org/web/20240301072916/https://www.sigarch.org/leave-your-os-at-home-the-rise-of-library-operating-systems/) from the original on 1 March 2024. Retrieved 7 August 2024.
35. **^** Soares, Livio Baldini; Stumm, Michael (4 October 2010). [*FlexSC: Flexible System Call Scheduling with Exception-Less System Calls*](https://www.usenix.org/conference/osdi10/flexsc-flexible-system-call-scheduling-exception-less-system-calls). [OSDI '10, 9th USENIX Symposium on Operating System Design and Implementation](https://www.usenix.org/legacy/events/osdi10/). [USENIX](https://en.wikipedia.org/wiki/USENIX). Retrieved 9 August 2024. p. 2: Synchronous implementation of system calls negatively impacts the performance of system intensive workloads, both in terms of the *direct* costs of mode switching and, more interestingly, in terms of the *indirect* pollution of important processor structures which affects both user-mode and kernel-mode performance. A motivating example that quantifies the impact of system call pollution on application performance can be seen in Figure 1. It depicts the user-mode instructions per cycles (kernel cycles and instructions are ignored) of one of the SPEC CPU 2006 benchmarks (Xalan) immediately before and after a `pwrite` system call. There is a significant drop in instructions per cycle (IPC) due to the system call, and it takes up to 14,000 cycles of execution before the IPC of this application returns to its previous level. As we will show, this performance degradation is mainly due to interference caused by the kernel on key processor structures.
36. ^   Tanenbaum & Bos 2023, p. 8.
37. **^** Arpaci-Dusseau, Remzi; Arpaci-Dusseau, Andrea (2015). [*Operating Systems: Three Easy Pieces*](http://pages.cs.wisc.edu/~remzi/OSTEP/). [Archived](https://web.archive.org/web/20160725012948/http://pages.cs.wisc.edu/~remzi/OSTEP/) from the original on 25 July 2016. Retrieved 25 July 2016.
38. **^** Tanenbaum & Bos 2023, p. 10.
39. **^** Tanenbaum & Bos 2023, pp. 11–12.
40. **^** Tanenbaum & Bos 2023, pp. 13–14.
41. **^** Tanenbaum & Bos 2023, pp. 14–15.
42. **^** Tanenbaum & Bos 2023, p. 15.
43. **^** Tanenbaum & Bos 2023, pp. 15–16.
44. ^   Tanenbaum & Bos 2023, p. 16.
45. **^** Tanenbaum & Bos 2023, p. 17.
46. **^** Tanenbaum & Bos 2023, p. 18.
47. **^** Tanenbaum & Bos 2023, pp. 19–20.
48. **^** Anderson & Dahlin 2014, pp. 39–40.
49. **^** Tanenbaum & Bos 2023, p. 2.
50. **^** Anderson & Dahlin 2014, pp. 41, 45.
51. **^** Anderson & Dahlin 2014, pp. 52–53.
52. ^   Kerrisk, Michael (2010). *The Linux Programming Interface*. No Starch Press. p. 388. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-59327-220-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59327-220-3). A signal is a notification to a process that an event has occurred. Signals are sometimes described as software interrupts.
53. **^** Hyde, Randall (1996). ["Chapter Seventeen: Interrupts, Traps and Exceptions (Part 1)"](https://www.plantation-productions.com/Webster/www.artofasm.com/DOS/ch17/CH17-1.html#HEADING1-0). *The Art Of Assembly Language Programming*. No Starch Press. [Archived](https://web.archive.org/web/20211222205623/https://www.plantation-productions.com/Webster/www.artofasm.com/DOS/ch17/CH17-1.html#HEADING1-0) from the original on 22 December 2021. Retrieved 22 December 2021. The concept of an interrupt is something that has expanded in scope over the years. The 80x86 family has only added to the confusion surrounding interrupts by introducing the int (software interrupt) instruction. Indeed, different manufacturers have used terms like exceptions, faults, aborts, traps and interrupts to describe the phenomena this chapter discusses. Unfortunately there is no clear consensus as to the exact meaning of these terms. Different authors adopt different terms to their own use.
54. **^** Tanenbaum, Andrew S. (1990). [*Structured Computer Organization, Third Edition*](https://archive.org/details/structuredcomput00tane/page/308). Prentice Hall. p. [308](https://archive.org/details/structuredcomput00tane/page/308). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-854662-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-854662-5). Like the trap, the interrupt stops the running program and transfers control to an interrupt handler, which performs some appropriate action. When finished, the interrupt handler returns control to the interrupted program.
55. **^** Silberschatz, Abraham (1994). *Operating System Concepts, Fourth Edition*. Addison-Wesley. p. 32. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-50480-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-50480-4). When an interrupt (or trap) occurs, the hardware transfers control to the operating system. First, the operating system preserves the state of the CPU by storing registers and the program counter. Then, it determines which type of interrupt has occurred. For each type of interrupt, separate segments of code in the operating system determine what action should be taken.
56. **^** Silberschatz, Abraham (1994). *Operating System Concepts, Fourth Edition*. Addison-Wesley. p. 105. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-50480-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-50480-4). Switching the CPU to another process requires saving the state of the old process and loading the saved state for the new process. This task is known as a context switch.
57. ^      Silberschatz, Abraham (1994). *Operating System Concepts, Fourth Edition*. Addison-Wesley. p. 31. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-50480-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-50480-4).
58. **^** Silberschatz, Abraham (1994). *Operating System Concepts, Fourth Edition*. Addison-Wesley. p. 30. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-50480-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-50480-4). Hardware may trigger an interrupt at any time by sending a signal to the CPU, usually by way of the system bus.
59. **^** Kerrisk, Michael (2010). *The Linux Programming Interface*. No Starch Press. p. 388. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-59327-220-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59327-220-3). Signals are analogous to hardware interrupts in that they interrupt the normal flow of execution of a program; in most cases, it is not possible to predict exactly when a signal will arrive.
60. **^** Kerrisk, Michael (2010). *The Linux Programming Interface*. No Starch Press. p. 388. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-59327-220-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59327-220-3). Among the types of events that cause the kernel to generate a signal for a process are the following: A software event occurred. For example, ... the process's CPU time limit was exceeded[.]
61. ^      Kerrisk, Michael (2010). *The Linux Programming Interface*. No Starch Press. p. 388. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-59327-220-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59327-220-3).
62. **^** ["Intel® 64 and IA-32 Architectures Software Developer's Manual"](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-software-developer-instruction-set-reference-manual-325383.pdf) (PDF). [Intel Corporation](https://en.wikipedia.org/wiki/Intel_Corporation). September 2016. p. 610. [Archived](https://web.archive.org/web/20220323231921/https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-software-developer-instruction-set-reference-manual-325383.pdf) (PDF) from the original on 23 March 2022. Retrieved 5 May 2022.
63. ^    Bach, Maurice J. (1986). *The Design of the UNIX Operating System*. Prentice-Hall. p. 200. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-13-201799-7](https://en.wikipedia.org/wiki/Special:BookSources/0-13-201799-7).
64. **^** Kerrisk, Michael (2010). *The Linux Programming Interface*. No Starch Press. p. 400. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-59327-220-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59327-220-3).
65. ^   Tanenbaum, Andrew S. (1990). [*Structured Computer Organization, Third Edition*](https://archive.org/details/structuredcomput00tane/page/308). Prentice Hall. p. [308](https://archive.org/details/structuredcomput00tane/page/308). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-854662-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-854662-5).
66. **^** Silberschatz, Abraham (1994). *Operating System Concepts, Fourth Edition*. Addison-Wesley. p. 182. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-50480-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-50480-4).
67. **^** Haviland, Keith; Salama, Ben (1987). *UNIX System Programming*. Addison-Wesley Publishing Company. p. 153. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-12919-1](https://en.wikipedia.org/wiki/Special:BookSources/0-201-12919-1).
68. **^** Haviland, Keith; Salama, Ben (1987). *UNIX System Programming*. Addison-Wesley Publishing Company. p. 148. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-12919-1](https://en.wikipedia.org/wiki/Special:BookSources/0-201-12919-1).
69. ^   Haviland, Keith; Salama, Ben (1987). *UNIX System Programming*. Addison-Wesley Publishing Company. p. 149. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-12919-1](https://en.wikipedia.org/wiki/Special:BookSources/0-201-12919-1).
70. **^** Tanenbaum, Andrew S. (1990). [*Structured Computer Organization, Third Edition*](https://archive.org/details/structuredcomput00tane/page/292). Prentice Hall. p. [292](https://archive.org/details/structuredcomput00tane/page/292). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-854662-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-854662-5).
71. **^** IBM (September 1968), ["Main Storage"](http://bitsavers.org/pdf/ibm/360/princOps/A22-6821-7_360PrincOpsDec67.pdf#page=8) (PDF), [*IBM System/360 Principles of Operation*](http://bitsavers.org/pdf/ibm/360/princOps/A22-6821-7_360PrincOpsDec67.pdf) (PDF), Eighth Edition, p. 7, [archived](https://web.archive.org/web/20220319083255/http://bitsavers.org/pdf/ibm/360/princOps/A22-6821-7_360PrincOpsDec67.pdf) (PDF) from the original on 19 March 2022, retrieved 13 April 2022
72. ^   
Tanenbaum, Andrew S. (1990). [*Structured Computer Organization, Third Edition*](https://archive.org/details/structuredcomput00tane/page/294). Prentice Hall. p. [294](https://archive.org/details/structuredcomput00tane/page/294). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-854662-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-854662-5).
73. **^** ["Program Interrupt Controller (PIC)"](http://bitsavers.org/pdf/dec/pdp7/F-75_PDP-7userHbk_Jun65.pdf#page=62) (PDF). [*Users Handbook - PDP-7*](http://bitsavers.org/pdf/dec/pdp7/F-75_PDP-7userHbk_Jun65.pdf) (PDF). [Digital Equipment Corporation](https://en.wikipedia.org/wiki/Digital_Equipment_Corporation). 1965. pp. [48](http://bitsavers.org/pdf/dec/pdp7/F-75_PDP-7userHbk_Jun65.pdf#page=63). F-75. [Archived](https://web.archive.org/web/20220510164742/http://bitsavers.org/pdf/dec/pdp7/F-75_PDP-7userHbk_Jun65.pdf) (PDF) from the original on 10 May 2022. Retrieved 20 April 2022.
74. **^** [*PDP-1 Input-Output Systems Manual*](http://bitsavers.org/pdf/dec/pdp1/F25_PDP1_IO.pdf) (PDF). [Digital Equipment Corporation](https://en.wikipedia.org/wiki/Digital_Equipment_Corporation). pp. 19–20. [Archived](https://web.archive.org/web/20190125050839/http://bitsavers.org/pdf/dec/pdp1/F25_PDP1_IO.pdf) (PDF) from the original on 25 January 2019. Retrieved 16 August 2022.
75. **^** Silberschatz, Abraham (1994). *Operating System Concepts, Fourth Edition*. Addison-Wesley. p. 32. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-50480-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-50480-4).
76. **^** Silberschatz, Abraham (1994). *Operating System Concepts, Fourth Edition*. Addison-Wesley. p. 34. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-50480-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-50480-4).
77. ^   Tanenbaum, Andrew S. (1990). [*Structured Computer Organization, Third Edition*](https://archive.org/details/structuredcomput00tane/page/295). Prentice Hall. p. [295](https://archive.org/details/structuredcomput00tane/page/295). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-854662-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-854662-5).
78. ^   Tanenbaum, Andrew S. (1990). [*Structured Computer Organization, Third Edition*](https://archive.org/details/structuredcomput00tane/page/309). Prentice Hall. p. [309](https://archive.org/details/structuredcomput00tane/page/309). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-854662-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-854662-5).
79. **^** Tanenbaum, Andrew S. (1990). [*Structured Computer Organization, Third Edition*](https://archive.org/details/structuredcomput00tane/page/310). Prentice Hall. p. [310](https://archive.org/details/structuredcomput00tane/page/310). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-854662-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-854662-5).
80. **^** Stallings, William (2008). *Computer Organization & Architecture*. New Delhi: Prentice-Hall of India Private Limited. p. 267. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-81-203-2962-1](https://en.wikipedia.org/wiki/Special:BookSources/978-81-203-2962-1).
81. **^** Anderson & Dahlin 2014, p. 129.
82. **^** Silberschatz et al. 2018, p. 159.
83. **^** Anderson & Dahlin 2014, p. 130.
84. **^** Anderson & Dahlin 2014, p. 131.
85. **^** Anderson & Dahlin 2014, pp. 157, 159.
86. **^** Anderson & Dahlin 2014, p. 139.
87. **^** Silberschatz et al. 2018, p. 160.
88. **^** Anderson & Dahlin 2014, p. 183.
89. **^** Silberschatz et al. 2018, p. 162.
90. **^** Silberschatz et al. 2018, pp. 162–163.
91. **^** Silberschatz et al. 2018, p. 164.
92. **^** Anderson & Dahlin 2014, pp. 492, 517.
93. **^** Tanenbaum & Bos 2023, pp. 259–260.
94. **^** Anderson & Dahlin 2014, pp. 517, 530.
95. **^** Tanenbaum & Bos 2023, p. 260.
96. **^** Anderson & Dahlin 2014, pp. 492–493.
97. **^** Anderson & Dahlin 2014, p. 496.
98. **^** Anderson & Dahlin 2014, pp. 496–497.
99. **^** Tanenbaum & Bos 2023, pp. 274–275.
100. **^** Anderson & Dahlin 2014, pp. 502–504.
101. **^** Anderson & Dahlin 2014, p. 507.
102. **^** Anderson & Dahlin 2014, p. 508.
103. **^** Tanenbaum & Bos 2023, p. 359.
104. **^** Anderson & Dahlin 2014, p. 545.
105. ^   Anderson & Dahlin 2014, p. 546.
106. **^** Anderson & Dahlin 2014, p. 547.
107. **^** Anderson & Dahlin 2014, pp. 589, 591.
108. **^** Anderson & Dahlin 2014, pp. 591–592.
109. **^** Tanenbaum & Bos 2023, pp. 385–386.
110. ^   Anderson & Dahlin 2014, p. 592.
111. **^** Tanenbaum & Bos 2023, pp. 605–606.
112. **^** Tanenbaum & Bos 2023, p. 608.
113. **^** Tanenbaum & Bos 2023, p. 609.
114. **^** Tanenbaum & Bos 2023, pp. 609–610.
115. ^   Tanenbaum & Bos 2023, p. 612.
116. **^** Tanenbaum & Bos 2023, pp. 648, 657.
117. **^** Tanenbaum & Bos 2023, pp. 668–669, 674.
118. **^** Tanenbaum & Bos 2023, pp. 679–680.
119. **^** Tanenbaum & Bos 2023, pp. 605, 617–618.
120. **^** Tanenbaum & Bos 2023, pp. 681–682.
121. **^** Tanenbaum & Bos 2023, p. 683.
122. **^** Tanenbaum & Bos 2023, p. 685.
123. **^** Tanenbaum & Bos 2023, p. 689.
124. **^** Richet & Bouaynaya 2023, p. 92.
125. **^** Richet & Bouaynaya 2023, pp. 92–93.
126. **^** Berntsso, Strandén & Warg 2017, pp. 130–131. sfn error: no target: CITEREFBerntssoStrandénWarg2017 ([help](https://en.wikipedia.org/wiki/Category:Harv_and_Sfn_template_errors))
127. **^** Tanenbaum & Bos 2023, p. 611.
128. **^** Tanenbaum & Bos 2023, pp. 396, 402.
129. **^** Tanenbaum & Bos 2023, pp. 395, 408.
130. **^** Tanenbaum & Bos 2023, p. 402.
131. **^** Holwerda, Thom (20 December 2009). ["My OS Is Less Hobby than Yours"](https://www.osnews.com/story/22638/my-os-is-less-hobby-than-yours/). *OS News*. Retrieved 4 June 2024.
132. **^** Silberschatz et al. 2018, pp. 779–780.
133. **^** Tanenbaum & Bos 2023, pp. 713–714.
134. ^   Silberschatz et al. 2018, p. 780.
135. **^** Vaughan-Nichols, Steven (2022). ["Linus Torvalds prepares to move the Linux kernel to modern C"](https://www.zdnet.com/article/linus-torvalds-prepares-to-move-the-linux-kernel-to-modern-c/). *ZDNET*. Retrieved 7 February 2024.
136. **^** Silberschatz et al. 2018, p. 781.
137. **^** Tanenbaum & Bos 2023, pp. 715–716.
138. **^** Tanenbaum & Bos 2023, pp. 793–794.
139. **^** Tanenbaum & Bos 2023, p. 793.
140. **^** Tanenbaum & Bos 2023, pp. 1021–1022.
141. **^** Tanenbaum & Bos 2023, p. 871.
142. **^** Silberschatz et al. 2018, p. 826.
143. ^   Tanenbaum & Bos 2023, p. 1035.
144. ^   Tanenbaum & Bos 2023, p. 1036.
145. **^** Silberschatz et al. 2018, p. 821.
146. **^** Silberschatz et al. 2018, p. 827.

## Further reading

## External links

* [Multics History](http://www.cbi.umn.edu/iterations/haigh.html) and the history of operating systems
 
NewPP limit report
Parsed by mw‐api‐ext.codfw.main‐96f688c4c‐cbppj
Cached time: 20260424002342
Cache expiry: 86400
Cache expiry source: Template:As_of (#time)
Reduced expiry: true
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 1.105 seconds
Real time usage: 1.283 seconds
Preprocessor visited node count: 12420/1000000
Revision size: 72311/2097152 bytes
Post‐expand include size: 229640/2097152 bytes
Template argument size: 16799/2097152 bytes
Highest expansion depth: 23/100
Expensive parser function count: 32/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 292894/5000000 bytes
Lua time usage: 0.673/10.000 seconds
Lua memory usage: 9774541/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00% 1066.855      1 -total
 25.83%  275.573      2 Template:Reflist
 24.55%  261.928    123 Template:Sfn
 21.97%  234.397     41 Template:Cite_book
  7.09%   75.609      1 Template:OS
  6.96%   74.225      1 Template:Sidebar
  5.59%   59.672      3 Template:Expand_section
  5.23%   55.824      3 Template:Ambox
  5.23%   55.798      1 Template:Short_description
  4.73%   50.493      3 Template:Sister_project
 Render ID d9057edc-3f73-11f1-8a2d-670255fc3538  Saved in parser cache with key enwiki:pcache:22194:|#|:idhash:canonical and timestamp 20260424002342 and revision id 1340069898. Rendering was triggered because: api-parse