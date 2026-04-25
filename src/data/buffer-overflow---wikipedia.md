# Buffer overflow - Wikipedia

Source: https://en.wikipedia.org/wiki/Buffer_overflow

---

Anomaly in computer security and programming

[![](//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Buffer_overflow_basicexample.svg/250px-Buffer_overflow_basicexample.svg.png)](https://en.wikipedia.org/wiki/File:Buffer_overflow_basicexample.svg)

Visualization of a software buffer overflow. Data is written into A, but is too large to fit within A, so it *overflows* into B.

In [programming](https://en.wikipedia.org/wiki/Computer_programming) and [information security](https://en.wikipedia.org/wiki/Information_security), a **buffer overflow** or **buffer overrun** is an [anomaly](https://en.wikipedia.org/wiki/Anomaly_in_software) whereby a [program](https://en.wikipedia.org/wiki/Computer_program) writes [data](https://en.wikipedia.org/wiki/Data_(computing)) to a [buffer](https://en.wikipedia.org/wiki/Data_buffer) beyond the buffer's [allocated memory](https://en.wikipedia.org/wiki/Memory_allocation), overwriting adjacent [memory](https://en.wikipedia.org/wiki/Main_memory) locations.

Buffers are areas of memory set aside to hold data, often while moving it from one section of a program to another, or between programs. Buffer overflows can often be triggered by malformed inputs; if one assumes all inputs will be smaller than a certain size and the buffer is created to be that size, then an anomalous transaction that produces more data could cause it to write past the end of the buffer. If this overwrites adjacent data or executable code, this may result in erratic program behavior, including [memory access errors](https://en.wikipedia.org/wiki/Memory_fault), incorrect results, and [crashes](https://en.wikipedia.org/wiki/Crash_(computing)).

Exploiting the behavior of a buffer overflow is a well-known [security exploit](https://en.wikipedia.org/wiki/Security_exploit). [Files](https://en.wikipedia.org/wiki/Computer_file) specifically created to exploit buffer overflow vulnerabilities are often called 'crafted' files. On many systems, the memory layout of a program, or the system as a whole, is well defined. By sending in data designed to cause a buffer overflow, it is possible to write into areas known to hold [executable code](https://en.wikipedia.org/wiki/Execution_(computing)) and replace it with [malicious code](https://en.wikipedia.org/wiki/Malicious_code), or to selectively overwrite data pertaining to the program's state, therefore causing behavior that was not intended by the original programmer. Buffers are widespread in [operating system](https://en.wikipedia.org/wiki/Operating_system) (OS) code, so it is possible to make attacks that perform [privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation) and gain unlimited access to the computer's resources. The famed [Morris worm](https://en.wikipedia.org/wiki/Morris_worm) in 1988 used this as one of its attack techniques.

[Programming languages](https://en.wikipedia.org/wiki/Programming_language) commonly associated with buffer overflows include [C](https://en.wikipedia.org/wiki/C_(programming_language)) and [C++](https://en.wikipedia.org/wiki/C%2B%2B), which provide no built-in protection against accessing or overwriting data in any part of memory and do not automatically check that data written to an [array](https://en.wikipedia.org/wiki/Array_data_structure) (the built-in buffer type) is within the boundaries of that array. [Bounds checking](https://en.wikipedia.org/wiki/Bounds_checking) can prevent buffer overflows, but requires additional code and processing time. Modern operating systems use a variety of techniques to combat malicious buffer overflows, notably by [randomizing the layout of memory](https://en.wikipedia.org/wiki/Address_space_layout_randomization), or deliberately leaving space between buffers and looking for actions that write into those areas ("[canaries](https://en.wikipedia.org/wiki/Buffer_overflow_protection#Canaries)").

## Technical description

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=1)]

A buffer overflow occurs when [data](https://en.wikipedia.org/wiki/Data) written to a buffer also corrupts data values in [memory addresses](https://en.wikipedia.org/wiki/Memory_address) adjacent to the destination buffer due to insufficient [bounds checking](https://en.wikipedia.org/wiki/Bounds_checking). This can occur when copying data from one buffer to another without first checking that the data fits within the destination buffer.

In the following example expressed in [C](https://en.wikipedia.org/wiki/C_(programming_language)), a program has two variables which are adjacent in memory: an 8-byte-long string buffer, `a`, and a two-byte [big-endian](https://en.wikipedia.org/wiki/Big-endian) integer, `b`.

```
char a[8] = "";
unsigned short b = 1979;

```

Initially, `a` contains nothing but zero bytes, and `b` contains the number 1979.

| variable name | a | b |
| --- | --- | --- |
| value | [ null string ] | 1979 |
| hex value | 00 | 00 | 00 | 00 | 00 | 00 | 00 | 00 | 07 | BB |

Now, the program attempts to store the [null-terminated string](https://en.wikipedia.org/wiki/Null-terminated_string) `"excessive"` with [ASCII](https://en.wikipedia.org/wiki/ASCII) encoding in the A buffer.

`"excessive"` is 9 characters long and encodes to 10 bytes including the null terminator, but `a` can take only 8 bytes. By failing to check the length of the string, it also overwrites the value of `b`:

| variable name | a | b |
| --- | --- | --- |
| value | 'e' | 'x' | 'c' | 'e' | 's' | 's' | 'i' | 'v' | 25856 |
| hex | 65 | 78 | 63 | 65 | 73 | 73 | 69 | 76 | 65 | 00 |

`b`'s value has now been inadvertently replaced by a number formed from part of the character string. In this example "e" followed by a zero byte would become 25856.

Writing data past the end of allocated memory can sometimes be detected by the operating system to generate a [segmentation fault](https://en.wikipedia.org/wiki/Segmentation_fault) error that terminates the process.

To prevent the buffer overflow from happening in this example, the call to `[strcpy](https://en.wikipedia.org/wiki/Strcpy)` could be replaced with `[strlcpy](https://en.wikipedia.org/wiki/Strlcpy)`, which takes the maximum capacity of `a` (including a null-termination character) as an additional parameter and ensures that no more than this amount of data is written to `a`:

```
strlcpy(a, "excessive", sizeof(a));

```

When available, the `[strlcpy](https://en.wikipedia.org/wiki/Strlcpy)` library function is preferred over `[strncpy](https://en.wikipedia.org/wiki/Strncpy)` which does not null-terminate the destination buffer if the source string's length is greater than or equal to the size of the buffer (the third argument passed to the function). Therefore `a` may not be null-terminated and cannot be treated as a valid C-style string.

The techniques to [exploit](https://en.wikipedia.org/wiki/Exploit_(computer_security)) a buffer overflow vulnerability vary by [architecture](https://en.wikipedia.org/wiki/Computer_architecture), [operating system](https://en.wikipedia.org/wiki/Operating_system), and memory region. For example, exploitation on the [heap](https://en.wikipedia.org/wiki/Heap_memory) (used for dynamically allocated memory), differs markedly from exploitation on the [call stack](https://en.wikipedia.org/wiki/Call_stack). In general, heap exploitation depends on the heap manager used on the target system, while stack exploitation depends on the calling convention used by the architecture and compiler.

### Stack-based exploitation

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=4)]

There are several ways in which one can manipulate a program by exploiting stack-based buffer overflows:

* Changing program behavior by overwriting a local variable located near the vulnerable buffer on the stack;
* By overwriting the return address in a [stack frame](https://en.wikipedia.org/wiki/Stack_frame) to point to code selected by the attacker, usually called the [shellcode](https://en.wikipedia.org/wiki/Shellcode). Once the function returns, execution will resume at the attacker's shellcode;
* By overwriting a [function pointer](https://en.wikipedia.org/wiki/Function_pointer) or [exception handler](https://en.wikipedia.org/wiki/Exception_handler) to point to the shellcode, which is subsequently executed;
* By overwriting a local variable (or pointer) of a different stack frame, which will later be used by the function that owns that frame.

The attacker designs data to cause one of these exploits, then places this data in a buffer supplied to users by the vulnerable code. If the address of the user-supplied data used to affect the stack buffer overflow is unpredictable, exploiting a stack buffer overflow to cause remote code execution becomes much more difficult. One technique that can be used to exploit such a buffer overflow is called "[trampolining](https://en.wikipedia.org/wiki/Trampolining_(computing))". Here, an attacker will find a pointer to the vulnerable stack buffer and compute the location of their [shellcode](https://en.wikipedia.org/wiki/Shellcode) relative to that pointer. The attacker will then use the overwrite to jump to an [instruction](https://en.wikipedia.org/wiki/Opcode) already in memory which will make a second jump, this time relative to the pointer. That second jump will branch execution into the shellcode. Suitable instructions are often present in large code. The [Metasploit Project](https://en.wikipedia.org/wiki/Metasploit_Project), for example, maintains a database of suitable opcodes, though it lists only those found in the [Windows](https://en.wikipedia.org/wiki/Windows) operating system.

### Heap-based exploitation

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=5)]

A buffer overflow occurring in the heap data area is referred to as a heap overflow and is exploitable in a manner different from that of stack-based overflows. Memory on the heap is dynamically allocated by the application at run-time and typically contains program data. Exploitation is performed by corrupting this data in specific ways to cause the application to overwrite internal structures such as linked list pointers. The canonical heap overflow technique overwrites dynamic memory allocation linkage (such as [malloc](https://en.wikipedia.org/wiki/Malloc) meta data) and uses the resulting pointer exchange to overwrite a program function pointer.

[Microsoft](https://en.wikipedia.org/wiki/Microsoft)'s [GDI+](https://en.wikipedia.org/wiki/Graphics_Device_Interface) vulnerability in handling [JPEGs](https://en.wikipedia.org/wiki/JPEG) is an example of the danger a heap overflow can present.

### Barriers to exploitation

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=6)]

Manipulation of the buffer, which occurs before it is read or executed, may lead to the failure of an exploitation attempt. These manipulations can mitigate the threat of exploitation, but may not make it impossible. Manipulations could include conversion to upper or lower case, removal of [metacharacters](https://en.wikipedia.org/wiki/Metacharacter) and filtering out of non-[alphanumeric](https://en.wikipedia.org/wiki/Alphanumeric) strings. However, techniques exist to bypass these filters and manipulations, such as [alphanumeric shellcode](https://en.wikipedia.org/wiki/Alphanumeric_shellcode), [polymorphic code](https://en.wikipedia.org/wiki/Polymorphic_code), [self-modifying code](https://en.wikipedia.org/wiki/Self-modifying_code), and [return-to-libc attacks](https://en.wikipedia.org/wiki/Return-to-libc_attack). The same methods can be used to avoid detection by [intrusion detection systems](https://en.wikipedia.org/wiki/Intrusion_detection_system). In some cases, including where code is converted into [Unicode](https://en.wikipedia.org/wiki/Unicode), the threat of the vulnerability has been misrepresented by the disclosers as only Denial of Service when in fact the remote execution of arbitrary code is possible.

### Practicalities of exploitation

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=7)]

In real-world exploits there are a variety of challenges which need to be overcome for exploits to operate reliably. These factors include null bytes in addresses, variability in the location of shellcode, differences between environments, and various counter-measures in operation.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Nopsled.svg/250px-Nopsled.svg.png)](https://en.wikipedia.org/wiki/File:Nopsled.svg)

Illustration of a NOP-sled payload on the stack.

A NOP-sled is the oldest and most widely known technique for exploiting stack buffer overflows. It solves the problem of finding the exact address of the buffer by effectively increasing the size of the target area. To do this, much larger sections of the stack are corrupted with the [no-op](https://en.wikipedia.org/wiki/No-op) machine instruction. At the end of the attacker-supplied data, after the no-op instructions, the attacker places an instruction to perform a relative jump to the top of the buffer where the [shellcode](https://en.wikipedia.org/wiki/Shellcode) is located. This collection of no-ops is referred to as the "NOP-sled" because if the return address is overwritten with any address within the no-op region of the buffer, the execution will "slide" down the no-ops until it is redirected to the actual malicious code by the jump at the end. This technique requires the attacker to guess where on the stack the NOP-sled is instead of the comparatively small shellcode.

Because of the popularity of this technique, many vendors of [intrusion prevention systems](https://en.wikipedia.org/wiki/Intrusion_prevention_system) will search for this pattern of no-op machine instructions in an attempt to detect shellcode in use. A NOP-sled does not necessarily contain only traditional no-op machine instructions. Any instruction that does not corrupt the machine state to a point where the shellcode will not run can be used in place of the hardware assisted no-op. As a result, it has become common practice for exploit writers to compose the no-op sled with randomly chosen instructions which will have no real effect on the shellcode execution.

While this method greatly improves the chances that an attack will be successful, it is not without problems. Exploits using this technique still must rely on some amount of luck that they will guess offsets on the stack that are within the NOP-sled region. An incorrect guess will usually result in the target program crashing and could alert the [system administrator](https://en.wikipedia.org/wiki/System_administrator) to the attacker's activities. Another problem is that the NOP-sled requires a much larger amount of memory in which to hold a NOP-sled large enough to be of any use. This can be a problem when the allocated size of the affected buffer is too small and the current depth of the stack is shallow (i.e., there is not much space from the end of the current stack frame to the start of the stack). Despite its problems, the NOP-sled is often the only method that will work for a given platform, environment, or situation, and as such it is still an important technique.

#### The jump to address stored in a register technique

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=9)]

The "jump to register" technique allows for reliable exploitation of stack buffer overflows without the need for extra room for a NOP-sled and without having to guess stack offsets. The strategy is to overwrite the return pointer with something that will cause the program to jump to a known pointer stored within a register which points to the controlled buffer and thus the shellcode. For example, if register A contains a pointer to the start of a buffer then any jump or call taking that register as an operand can be used to gain control of the flow of execution.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/c/c6/JumpToEsp.png/330px-JumpToEsp.png)](https://en.wikipedia.org/wiki/File:JumpToEsp.png)

An instruction from ntdll.dll to call the `DbgPrint()` routine contains the [i386](https://en.wikipedia.org/wiki/I386) machine opcode for `jmp esp`.

In practice a program may not intentionally contain instructions to jump to a particular register. The traditional solution is to find an unintentional instance of a suitable [opcode](https://en.wikipedia.org/wiki/Opcode) at a fixed location somewhere within the program memory. Figure [E](https://en.wikipedia.org/wiki/File:JumpToEsp.png) on the left contains an example of such an unintentional instance of the i386 `jmp esp` instruction. The opcode for this instruction is `FF E4`. This two-byte sequence can be found at a one-byte offset from the start of the instruction `call DbgPrint` at address `0x7C941EED`. If an attacker overwrites the program return address with this address the program will first jump to `0x7C941EED`, interpret the opcode `FF E4` as the `jmp esp` instruction, and will then jump to the top of the stack and execute the attacker's code.

When this technique is possible the severity of the vulnerability increases considerably. This is because exploitation will work reliably enough to automate an attack with a virtual guarantee of success when it is run. For this reason, this is the technique most commonly used in [Internet worms](https://en.wikipedia.org/wiki/Internet_worm) that exploit stack buffer overflow vulnerabilities.

This method also allows shellcode to be placed after the overwritten return address on the [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) platform. Since executables are mostly based at address `0x00400000` and x86 is a [little endian](https://en.wikipedia.org/wiki/Little_endian) architecture, the last byte of the return address must be a null, which terminates the buffer copy and nothing is written beyond that. This limits the size of the shellcode to the size of the buffer, which may be overly restrictive. [DLLs](https://en.wikipedia.org/wiki/Dynamic-link_library) are located in high memory (above `0x01000000`) and so have addresses containing no null bytes, so this method can remove null bytes (or other disallowed characters) from the overwritten return address. Used in this way, the method is often referred to as "DLL trampolining".

## Protective countermeasures

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=10)]

Various techniques have been used to detect or prevent buffer overflows, with various tradeoffs. The following sections describe the choices and implementations available.

### Choice of programming language

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=11)]

[Assembly](https://en.wikipedia.org/wiki/Assembly_language), [C](https://en.wikipedia.org/wiki/C_(programming_language)), and [C++](https://en.wikipedia.org/wiki/C%2B%2B) are popular programming languages that are vulnerable to buffer overflow in part because they allow direct access to memory and are not [strongly typed](https://en.wikipedia.org/wiki/Strongly_typed). C provides no built-in protection against accessing or overwriting data in any part of memory. More specifically, it does not check that data written to a buffer is within the boundaries of that buffer. The standard C++ libraries provide many ways of safely buffering data, and C++'s [Standard Template Library](https://en.wikipedia.org/wiki/Standard_Template_Library) (STL) provides containers that can optionally perform bounds checking if the programmer explicitly calls for checks while accessing data. For example, a `vector`'s member function `at()` performs a bounds check and throws an `out_of_range` [exception](https://en.wikipedia.org/wiki/Exception_handling) if the bounds check fails. However, C++ behaves just like C if the bounds check is not explicitly called. Techniques to avoid buffer overflows also exist for C.

Languages that are strongly typed and do not allow direct memory access, such as COBOL, Java, Eiffel, Python, and others, prevent buffer overflow in most cases. Many programming languages other than C or C++ provide runtime checking and in some cases even compile-time checking which might send a warning or raise an exception, while C or C++ would overwrite data and continue to execute instructions until erroneous results are obtained, potentially causing the program to crash. Examples of such languages include [Ada](https://en.wikipedia.org/wiki/Ada_(programming_language)), [Eiffel](https://en.wikipedia.org/wiki/Eiffel_(programming_language)), [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)), [Modula-2](https://en.wikipedia.org/wiki/Modula-2), [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk), [OCaml](https://en.wikipedia.org/wiki/OCaml) and some systems programming languages such as [Cyclone](https://en.wikipedia.org/wiki/Cyclone_(programming_language)), [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) and [D](https://en.wikipedia.org/wiki/D_(programming_language)). The [Java](https://en.wikipedia.org/wiki/Java_(software_platform)) and [.NET Framework](https://en.wikipedia.org/wiki/.NET_Framework) bytecode environments also require bounds checking on all arrays. Nearly every [interpreted language](https://en.wikipedia.org/wiki/Interpreted_language) will protect against buffer overflow, signaling a well-defined error condition. Languages that provide enough type information to do bounds checking often provide an option to enable or disable it. [Static code analysis](https://en.wikipedia.org/wiki/Static_code_analysis) can remove many dynamic bound and type checks, but poor implementations and awkward cases can significantly decrease performance. Software engineers should carefully consider the tradeoffs of safety versus performance costs when deciding which language and compiler setting to use.

### Use of safe libraries

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=12)]

The problem of buffer overflows is common in the C and C++ languages because they expose low level representational details of buffers as containers for data types. Buffer overflows can be avoided by maintaining a high degree of correctness in code that performs buffer management. It has also long been recommended to avoid standard library functions that are not bounds checked, such as `gets`, `scanf` and `strcpy`. The [Morris worm](https://en.wikipedia.org/wiki/Morris_worm) exploited a `gets` call in [fingerd](https://en.wikipedia.org/wiki/Fingerd).

Well-written and tested abstract data type libraries that centralize and automatically perform buffer management, including bounds checking, can reduce the occurrence and impact of buffer overflows. The primary data types in languages in which buffer overflows are common are strings and arrays. Thus, libraries preventing buffer overflows in these data types can provide the vast majority of the necessary coverage. However, failure to use these safe libraries correctly can result in buffer overflows and other vulnerabilities, and naturally any [bug](https://en.wikipedia.org/wiki/Software_bug) in the library is also a potential vulnerability. "Safe" library implementations include "The Better String Library", Vstr and Erwin. The [OpenBSD](https://en.wikipedia.org/wiki/OpenBSD) operating system's [C library](https://en.wikipedia.org/wiki/C_library) provides the [strlcpy](https://en.wikipedia.org/wiki/Strlcpy) and [strlcat](https://en.wikipedia.org/wiki/Strlcat) functions, but these are more limited than full safe library implementations.

In September 2007, Technical Report 24731, prepared by the C standards committee, was published. It specifies a set of functions that are based on the standard C library's string and IO functions, with additional buffer-size parameters. However, the efficacy of these functions for reducing buffer overflows is disputable. They require programmer intervention on a per function call basis that is equivalent to intervention that could make the analogous older standard library functions buffer overflow safe.

### Buffer overflow protection

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=13)]

Buffer overflow protection is used to detect the most common buffer overflows by checking that the [stack](https://en.wikipedia.org/wiki/Call_stack) has not been altered when a function returns. If it has been altered, the program exits with a [segmentation fault](https://en.wikipedia.org/wiki/Segmentation_fault). Three such systems are Libsafe, and the *[StackGuard](https://en.wikipedia.org/wiki/StackGuard)* and *[ProPolice](https://en.wikipedia.org/wiki/ProPolice)* [gcc](https://en.wikipedia.org/wiki/GNU_Compiler_Collection) patches.

Microsoft's implementation of [Data Execution Prevention](https://en.wikipedia.org/wiki/Data_Execution_Prevention) (DEP) mode explicitly protects the pointer to the [Structured Exception Handler](https://en.wikipedia.org/wiki/Structured_Exception_Handler) (SEH) from being overwritten.

Stronger stack protection is possible by splitting the stack in two: one for data and one for function returns. This split is present in the [Forth language](https://en.wikipedia.org/wiki/Forth_language), though it was not a security-based design decision. Regardless, this is not a complete solution to buffer overflows, as sensitive data other than the return address may still be overwritten.

This type of protection is also not entirely accurate because it does not detect all attacks. Systems like StackGuard are more centered around the behavior of the attacks, which makes them efficient and faster in comparison to range-check systems.

Buffer overflows work by manipulating [pointers](https://en.wikipedia.org/wiki/Pointer_(computer_programming)), including stored addresses. PointGuard was proposed as a compiler-extension to prevent attackers from reliably manipulating pointers and addresses. The approach works by having the compiler add code to automatically XOR-encode pointers before and after they are used. Theoretically, because the attacker does not know what value will be used to encode and decode the pointer, one cannot predict what the pointer will point to if it is overwritten with a new value. PointGuard was never released, but Microsoft implemented a similar approach beginning in [Windows XP](https://en.wikipedia.org/wiki/Windows_XP) SP2 and [Windows Server 2003](https://en.wikipedia.org/wiki/Windows_Server_2003) SP1. Rather than implement pointer protection as an automatic feature, Microsoft added an API routine that can be called. This allows for better performance (because it is not used all of the time), but places the burden on the programmer to know when its use is necessary.

Because XOR is linear, an attacker may be able to manipulate an encoded pointer by overwriting only the lower bytes of an address. This can allow an attack to succeed if the attacker can attempt the exploit multiple times or complete an attack by causing a pointer to point to one of several locations (such as any location within a NOP sled). Microsoft added a random rotation to their encoding scheme to address this weakness to partial overwrites.

### Executable space protection

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=15)]

Executable space protection is an approach to buffer overflow protection that prevents execution of code on the stack or the heap. An attacker may use buffer overflows to insert arbitrary code into the memory of a program, but with executable space protection, any attempt to execute that code will cause an exception.

Some CPUs support a feature called [NX](https://en.wikipedia.org/wiki/NX_bit) ("No eXecute") or [XD](https://en.wikipedia.org/wiki/XD_bit) ("eXecute Disabled") bit, which in conjunction with software, can be used to mark [pages of data](https://en.wikipedia.org/wiki/Paging) (such as those containing the stack and the heap) as readable and writable but not executable.

Some Unix operating systems (e.g. [OpenBSD](https://en.wikipedia.org/wiki/OpenBSD), [macOS](https://en.wikipedia.org/wiki/MacOS)) ship with executable space protection (e.g. [W^X](https://en.wikipedia.org/wiki/W%5EX)). Some optional packages include:

Newer variants of Microsoft Windows also support executable space protection, called [Data Execution Prevention](https://en.wikipedia.org/wiki/Data_Execution_Prevention). [Proprietary](https://en.wikipedia.org/wiki/Proprietary_software) add-ons include:

Executable space protection does not generally protect against [return-to-libc attacks](https://en.wikipedia.org/wiki/Return-to-libc_attack), or any other attack that does not rely on the execution of the attackers code. However, on [64-bit](https://en.wikipedia.org/wiki/64-bit) systems using [ASLR](https://en.wikipedia.org/wiki/ASLR), as described below, executable space protection makes it far more difficult to execute such attacks.

### Capability Hardware Enhanced RISC Instructions

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=16)]

CHERI (Capability Hardware Enhanced RISC Instructions) is a computer processor technology designed to improve security. It operates at a hardware level by providing a hardware-enforced type (a CHERI capability) that authorises access to memory. Traditional pointers are replaced by addresses accompanied by metadata that limit what can be accessed through any given pointer.

### Address space layout randomization

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=17)]

Address space layout randomization (ASLR) is a computer security feature that involves arranging the positions of key data areas, usually including the base of the executable and position of libraries, heap, and stack, randomly in a process' address space.

Randomization of the [virtual memory](https://en.wikipedia.org/wiki/Virtual_memory) addresses at which functions and variables can be found can make exploitation of a buffer overflow more difficult, but not impossible. It also forces the attacker to tailor the exploitation attempt to the individual system, which foils the attempts of [internet worms](https://en.wikipedia.org/wiki/Internet_worm). A similar but less effective method is to [rebase](https://en.wikipedia.org/wiki/Rebasing) processes and libraries in the virtual address space.

### Deep packet inspection

[[edit](/w/index.php?title=Buffer_overflow&action=edit&section=18)]

The use of deep packet inspection (DPI) can detect, at the network perimeter, very basic remote attempts to exploit buffer overflows by use of attack signatures and [heuristics](https://en.wikipedia.org/wiki/Heuristic_(computer_science)). This technique can block packets that have the signature of a known attack. It was formerly used in situations in which a long series of No-Operation instructions (known as a NOP-sled) was detected and the location of the exploit's [payload](https://en.wikipedia.org/wiki/Payload_(software)) was slightly variable.

Packet scanning is not an effective method since it can only prevent known attacks and there are many ways that a NOP-sled can be encoded. [Shellcode](https://en.wikipedia.org/wiki/Shellcode) used by attackers can be made [alphanumeric](https://en.wikipedia.org/wiki/Alphanumeric), [metamorphic](https://en.wikipedia.org/wiki/Metamorphic_code), or [self-modifying](https://en.wikipedia.org/wiki/Self-modifying_code) to evade detection by heuristic packet scanners and [intrusion detection systems](https://en.wikipedia.org/wiki/Intrusion_detection_system).

Checking for buffer overflows and patching the bugs that cause them helps prevent buffer overflows. One common automated technique for discovering them is [fuzzing](https://en.wikipedia.org/wiki/Fuzzing). Edge case testing can also uncover buffer overflows, as can static analysis. Once a potential buffer overflow is detected it should be patched. This makes the testing approach useful for software that is in development, but less useful for legacy software that is no longer maintained or supported.

Buffer overflows were understood and partially publicly documented as early as 1972, when the Computer Security Technology Planning Study laid out the technique: "The code performing this function does not check the source and destination addresses properly, permitting portions of the monitor to be overlaid by the user. This can be used to inject code into the monitor that will permit the user to seize control of the machine." Today, the monitor would be referred to as the kernel.

The earliest documented hostile exploitation of a buffer overflow was in 1988. It was one of several exploits used by the [Morris worm](https://en.wikipedia.org/wiki/Morris_worm) to propagate itself over the Internet. The program exploited was a [service](https://en.wikipedia.org/wiki/Service_(systems_architecture)) on [Unix](https://en.wikipedia.org/wiki/Unix) called [finger](https://en.wikipedia.org/wiki/Finger_protocol). Later, in 1995, Thomas Lopatic independently rediscovered the buffer overflow and published his findings on the [Bugtraq](https://en.wikipedia.org/wiki/Bugtraq) security mailing list. A year later, in 1996, [Elias Levy](https://en.wikipedia.org/wiki/Elias_Levy) (also known as Aleph One) published in *[Phrack](https://en.wikipedia.org/wiki/Phrack)* magazine the paper "Smashing the Stack for Fun and Profit", a step-by-step introduction to exploiting stack-based buffer overflow vulnerabilities.

Since then, at least two major internet worms have exploited buffer overflows to compromise a large number of systems. In 2001, the [Code Red worm](https://en.wikipedia.org/wiki/Code_Red_worm) exploited a buffer overflow in Microsoft's [Internet Information Services](https://en.wikipedia.org/wiki/Internet_Information_Services) (IIS) 5.0 and in 2003 the [SQL Slammer](https://en.wikipedia.org/wiki/SQL_Slammer) worm compromised machines running [Microsoft SQL Server 2000](https://en.wikipedia.org/wiki/Microsoft_SQL_Server_2000).

In 2003, buffer overflows present in licensed [Xbox](https://en.wikipedia.org/wiki/Xbox_(console)) games have been exploited to allow unlicensed software, including [homebrew games](https://en.wikipedia.org/wiki/Homebrew_(video_games)), to run on the console without the need for hardware modifications, known as [modchips](https://en.wikipedia.org/wiki/Modchip). The [PS2 Independence Exploit](https://en.wikipedia.org/wiki/PS2_Independence_Exploit) also used a buffer overflow to achieve the same for the [PlayStation 2](https://en.wikipedia.org/wiki/PlayStation_2). The Twilight hack accomplished the same with the [Wii](https://en.wikipedia.org/wiki/Wii), using a buffer overflow in *[The Legend of Zelda: Twilight Princess](https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Twilight_Princess)*.

1. **[^](#cite_ref-1)** ["EUVD-2013-1371"](https://euvd.enisa.europa.eu/vulnerability/EUVD-2013-1371). *European Union Vulnerability Database*. 2025-10-22. Retrieved 2025-12-09.
2. **[^](#cite_ref-2)** ["Krita: Heap-based buffer overflow when parsing TGA files"](https://kde.org/info/security/advisory-20250929-1.txt). *KDE Project*. Retrieved 2025-12-08.`{{cite web}}`: CS1 maint: url-status ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_url-status))
3. **[^](#cite_ref-rfc4949_3-0)** R. Shirey (August 2007). [*Internet Security Glossary, Version 2*](https://www.rfc-editor.org/rfc/rfc4949). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4949](https://doi.org/10.17487%2FRFC4949). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4949](https://datatracker.ietf.org/doc/html/rfc4949). *Informational.*
4. **[^](#cite_ref-4)** ["CORE-2007-0219: OpenBSD's IPv6 mbufs remote kernel buffer overflow"](http://www.securityfocus.com/archive/1/462728/30/150/threaded). Retrieved 2007-05-15.
5. **[^](#cite_ref-5)** ["Modern Overflow Targets"](http://packetstormsecurity.com/files/download/121751/ModernOverflowTargets.pdf) (PDF). [Archived](https://ghostarchive.org/archive/20221009/http://packetstormsecurity.com/files/download/121751/ModernOverflowTargets.pdf) (PDF) from the original on 2022-10-09. Retrieved 2013-07-05.
6. **[^](#cite_ref-6)** ["The Metasploit Opcode Database"](https://web.archive.org/web/20070512195939/http://www.metasploit.com/users/opcode/msfopcode.cgi). Archived from [the original](http://metasploit.com/users/opcode/msfopcode.cgi) on 12 May 2007. Retrieved 2007-05-15.
7. **[^](#cite_ref-7)** ["Microsoft Technet Security Bulletin MS04-028"](https://web.archive.org/web/20110804221311/http://www.microsoft.com/technet/security/bulletin/MS04-028.mspx). *[Microsoft](https://en.wikipedia.org/wiki/Microsoft)*. Archived from [the original](http://www.microsoft.com/technet/security/bulletin/MS04-028.mspx) on 2011-08-04. Retrieved 2007-05-15.
8. **[^](#cite_ref-8)** ["Creating Arbitrary Shellcode In Unicode Expanded Strings"](https://web.archive.org/web/20060105041036/http://www.net-security.org/dl/articles/unicodebo.pdf) (PDF). Archived from [the original](http://www.net-security.org/dl/articles/unicodebo.pdf) (PDF) on 2006-01-05. Retrieved 2007-05-15.
9. **[^](#cite_ref-neworder_9-0)** Vangelis (2004-12-08). ["Stack-based Overflow Exploit: Introduction to Classical and Advanced Overflow Technique"](https://web.archive.org/web/20070818115455/http://www.neworder.box.sk/newsread.php?newsid=12476). Wowhacker via Neworder. Archived from [the original](http://www.neworder.box.sk/newsread.php?newsid=12476) (text) on August 18, 2007.
10. **[^](#cite_ref-enderunix_10-0)** Balaban, Murat. ["Buffer Overflows Demystified"](https://web.archive.org/web/20040812221752/http://enderunix.org/docs/en/bof-eng.txt). Enderunix.org. Archived from the original on August 12, 2004.
11. **[^](#cite_ref-Akritidis1_11-0)** Akritidis, P.; Evangelos P. Markatos; M. Polychronakis; Kostas D. Anagnostakis (2005). ["STRIDE: Polymorphic Sled Detection through Instruction Sequence Analysis."](https://web.archive.org/web/20120901034404/http://dcs.ics.forth.gr/Activities/papers/stride-IFIP-SEC05.pdf) (PDF). *Proceedings of the 20th IFIP International Information Security Conference (IFIP/SEC 2005)*. IFIP International Information Security Conference. Archived from [the original](http://dcs.ics.forth.gr/Activities/papers/stride-IFIP-SEC05.pdf) (PDF) on 2012-09-01. Retrieved 2012-03-04.
12. **[^](#cite_ref-klein1_12-0)** Klein, Christian (September 2004). ["Buffer Overflow"](https://web.archive.org/web/20070928011639/http://c0re.23.nu/~chris/presentations/overflow2005.pdf) (PDF). Archived from [the original](http://c0re.23.nu/~chris/presentations/overflow2005.pdf) (PDF) on 2007-09-28.
13. **[^](#cite_ref-shah_13-0)** Shah, Saumil (2006). ["Writing Metasploit Plugins: from vulnerability to exploit"](http://conference.hitb.org/hitbsecconf2006kl/materials/DAY%201%20-%20Saumil%20Shah%20-%20Writing%20Metasploit%20Plugins.pdf) (PDF). *Hack In The Box*. Kuala Lumpur. Retrieved 2012-03-04.
14. **[^](#cite_ref-intel1_14-0)** [*Intel 64 and IA-32 Architectures Software Developer's Manual Volume 2A: Instruction Set Reference, A-M*](https://web.archive.org/web/20071129123212/http://developer.intel.com/design/processor/manuals/253666.pdf) (PDF). Intel Corporation. May 2007. pp. 3–508. Archived from [the original](http://developer.intel.com/design/processor/manuals/253666.pdf) (PDF) on 2007-11-29.
15. **[^](#cite_ref-packetstorm1_15-0)** Alvarez, Sergio (2004-09-05). ["Win32 Stack BufferOverFlow Real Life Vuln-Dev Process"](http://packetstormsecurity.org/papers/Win2000/Intro_to_Win32_Exploits.pdf) (PDF). IT Security Consulting. Retrieved 2012-03-04.
16. **[^](#cite_ref-Yuji1_16-0)** 
    Ukai, Yuji; Soeder, Derek; Permeh, Ryan (2004). ["Environment Dependencies in Windows Exploitation"](https://www.blackhat.com/presentations/bh-asia-04/bh-jp-04-ukai-eng.ppt). *BlackHat Japan*. Japan: eEye Digital Security. Retrieved 2012-03-04.
17. ^ [***a***](#cite_ref-OWASP_17-0) [***b***](#cite_ref-OWASP_17-1) [https://www.owasp.org/index.php/Buffer\_OverflowsBuffer](https://www.owasp.org/index.php/Buffer_OverflowsBuffer) Overflows article on OWASP [Archived](https://web.archive.org/web/20160829122543/https://www.owasp.org/index.php/Buffer_Overflows) 2016-08-29 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
18. **[^](#cite_ref-18)** ["vector::at - C++ Reference"](http://www.cplusplus.com/reference/vector/vector/at/). Cplusplus.com. Retrieved 2014-03-27.
19. **[^](#cite_ref-19)** ["Archived copy"](https://web.archive.org/web/20010505080457/http://wiretap.area.com/Gopher/Library/Techdoc/Virus/inetvir.823). *wiretap.area.com*. Archived from [the original](http://wiretap.area.com/Gopher/Library/Techdoc/Virus/inetvir.823) on 5 May 2001. Retrieved 6 June 2022.`{{cite web}}`: CS1 maint: archived copy as title ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_archived_copy_as_title))
20. **[^](#cite_ref-20)** ["The Better String Library"](http://bstring.sf.net/).
21. **[^](#cite_ref-21)** ["The Vstr Homepage"](https://web.archive.org/web/20170305020810/http://www.and.org/vstr/). Archived from [the original](http://www.and.org/vstr/) on 2017-03-05. Retrieved 2007-05-15.
22. **[^](#cite_ref-22)** ["The Erwin Homepage"](http://www.theiling.de/projects/erwin.html). Retrieved 2007-05-15.
23. **[^](#cite_ref-23)** International Organization for Standardization (2007). ["Information technology – Programming languages, their environments and system software interfaces – Extensions to the C library – Part 1: Bounds-checking interfaces"](https://www.iso.org/obp/ui/#iso:std:iso-iec:tr:24731:-1:ed-2:v1:en:sec:4). *ISO Online Browsing Platform*.
24. **[^](#cite_ref-24)** ["CERT Secure Coding Initiative"](https://www.securecoding.cert.org/confluence/x/QwY). Retrieved 2007-07-30.`{{cite web}}`: CS1 maint: deprecated archival service ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_deprecated_archival_service))
25. **[^](#cite_ref-25)** ["Libsafe at FSF.org"](http://directory.fsf.org/libsafe.html). Retrieved 2007-05-20.
26. **[^](#cite_ref-26)** ["StackGuard: Automatic Adaptive Detection and Prevention of Buffer-Overflow Attacks by Cowan et al"](https://www.usenix.org/publications/library/proceedings/sec98/full_papers/cowan/cowan.pdf) (PDF). [Archived](https://ghostarchive.org/archive/20221009/https://www.usenix.org/publications/library/proceedings/sec98/full_papers/cowan/cowan.pdf) (PDF) from the original on 2022-10-09. Retrieved 2007-05-20.
27. **[^](#cite_ref-27)** ["ProPolice at X.ORG"](https://web.archive.org/web/20070212032750/http://wiki.x.org/wiki/ProPolice). Archived from [the original](http://wiki.x.org/wiki/ProPolice) on 12 February 2007. Retrieved 2007-05-20.
28. **[^](#cite_ref-28)** ["Bypassing Windows Hardware-enforced Data Execution Prevention"](https://web.archive.org/web/20070430040534/http://www.uninformed.org/?v=2&a=4&t=txt). Archived from [the original](http://www.uninformed.org/?v=2&a=4&t=txt) on 2007-04-30. Retrieved 2007-05-20.
29. **[^](#cite_ref-29)** Lhee, Kyung-Suk; Chapin, Steve J. (2003-04-25). ["Buffer overflow and format string overflow vulnerabilities"](https://onlinelibrary.wiley.com/doi/10.1002/spe.515). *Software: Practice and Experience*. **33** (5): 423–460. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/spe.515](https://doi.org/10.1002%2Fspe.515). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0038-0644](https://search.worldcat.org/issn/0038-0644).
30. **[^](#cite_ref-30)** ["12th USENIX Security Symposium – Technical Paper"](http://www.usenix.org/events/sec03/tech/full_papers/cowan/cowan_html/index.html). *www.usenix.org*. Retrieved 3 April 2018.
31. **[^](#cite_ref-31)** ["Protecting against Pointer Subterfuge (Kinda!)"](https://web.archive.org/web/20100502021754/http://blogs.msdn.com/michael_howard/archive/2006/01/30/520200.aspx). *msdn.com*. Archived from [the original](http://blogs.msdn.com/michael_howard/archive/2006/01/30/520200.aspx) on 2010-05-02. Retrieved 3 April 2018.
32. **[^](#cite_ref-32)** ["USENIX - The Advanced Computing Systems Association"](http://www.usenix.org/publications/login/2005-06/pdfs/alexander0506.pdf) (PDF). *www.usenix.org*. [Archived](https://ghostarchive.org/archive/20221009/http://www.usenix.org/publications/login/2005-06/pdfs/alexander0506.pdf) (PDF) from the original on 2022-10-09. Retrieved 3 April 2018.
33. **[^](#cite_ref-33)** ["Protecting against Pointer Subterfuge (Redux)"](https://web.archive.org/web/20091219202748/http://blogs.msdn.com/michael_howard/archive/2006/08/16/702707.aspx). *msdn.com*. Archived from [the original](http://blogs.msdn.com/michael_howard/archive/2006/08/16/702707.aspx) on 2009-12-19. Retrieved 3 April 2018.
34. **[^](#cite_ref-34)** ["PaX: Homepage of the PaX team"](https://pax.grsecurity.net). Retrieved 2007-06-03.
35. **[^](#cite_ref-35)** ["KernelTrap.Org"](http://kerneltrap.org/node/644). Retrieved 2007-06-03.`{{cite web}}`: CS1 maint: deprecated archival service ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_deprecated_archival_service))
36. **[^](#cite_ref-36)** ["Openwall Linux kernel patch 2.4.34-ow1"](https://web.archive.org/web/20120219111512/http://linux.softpedia.com/get/System/Operating-Systems/Kernels/Openwall-Linux-kernel-patch-16454.shtml). Archived from [the original](http://linux.softpedia.com/get/System/Operating-Systems/Kernels/Openwall-Linux-kernel-patch-16454.shtml) on 2012-02-19. Retrieved 2007-06-03.
37. **[^](#cite_ref-37)** ["Microsoft Technet: Data Execution Prevention"](https://web.archive.org/web/20060622140239/http://technet2.microsoft.com/WindowsServer/en/Library/b0de1052-4101-44c3-a294-4da1bd1ef2271033.mspx?mfr=true). Archived from [the original](http://technet2.microsoft.com/WindowsServer/en/Library/b0de1052-4101-44c3-a294-4da1bd1ef2271033.mspx?mfr=true) on 2006-06-22. Retrieved 2006-06-30.
38. **[^](#cite_ref-38)** ["BufferShield: Prevention of Buffer Overflow Exploitation for Windows"](http://www.sys-manage.com/english/products/products_BufferShield.html). Retrieved 2007-06-03.
39. **[^](#cite_ref-39)** ["NGSec Stack Defender"](https://web.archive.org/web/20070513235539/http://www.ngsec.com/ngproducts/stackdefender/). Archived from [the original](http://www.ngsec.com/ngproducts/stackdefender/) on 2007-05-13. Retrieved 2007-06-03.
40. **[^](#cite_ref-40)** ["PaX at GRSecurity.net"](https://pax.grsecurity.net/docs/aslr.txt). Retrieved 2007-06-03.
41. **[^](#cite_ref-41)** ["The Exploitant - Security info and tutorials"](http://raykoid666.wordpress.com). Retrieved 2009-11-29.
42. **[^](#cite_ref-42)** Larochelle, David; Evans, David (13 August 2001). ["Statically Detecting Likely Buffer Overflow Vulnerabilities"](https://www.usenix.org/legacy/events/sec01/full_papers/larochelle/larochelle_html/). *USENIX Security Symposium*. **32**.
43. **[^](#cite_ref-43)** Anderson, James P. [Computer Security Technology Planning Study](https://apps.dtic.mil/sti/citations/AD0772806) (Report). Vol. 2. p. 61. Retrieved 2026-01-03. "By supplying addresses outside of the space allocated to the users [sic] program, it is often possible to get the monitor to obtain unauthorized data for that user, or at the very least, generate a set of conditions in the monitor that causes a system crash. ¶ In one contemporary operating system, one of the functions provided is to move limited amounts of information between system and user space. The code performing this function does not check the source and destination addresses properly, permitting portions of the monitor to be overlaid by the user. This can be used to inject code into the monitor that will permit the user to seize control of the machine." [DTIC](https://en.wikipedia.org/wiki/Defense_Technical_Information_Center) number AD0772806. ([Volume 1](https://apps.dtic.mil/sti/citations/AD0758206) has DTIC no. AD0758206.)
44. **[^](#cite_ref-44)** [""A Tour of The Worm" by Donn Seeley, University of Utah"](https://web.archive.org/web/20070520233435/http://world.std.com/~franl/worm.html). Archived from [the original](http://world.std.com/~franl/worm.html) on 2007-05-20. Retrieved 2007-06-03.
45. **[^](#cite_ref-45)** ["Bugtraq security mailing list archive"](https://web.archive.org/web/20070901222723/http://www.security-express.com/archives/bugtraq/1995_1/0403.html). Archived from [the original](http://www.security-express.com/archives/bugtraq/1995_1/0403.html) on 2007-09-01. Retrieved 2007-06-03.
46. **[^](#cite_ref-46)** [""Smashing the Stack for Fun and Profit" by Aleph One"](https://phrack.org/issues/49/14). Retrieved 2025-03-06.
47. **[^](#cite_ref-47)** ["eEye Digital Security"](https://web.archive.org/web/20090620085700/http://research.eeye.com/html/advisories/published/AL20010717.html). Archived from [the original](http://research.eeye.com/html/advisories/published/AL20010717.html) on 2009-06-20. Retrieved 2007-06-03.
48. **[^](#cite_ref-48)** ["Microsoft Technet Security Bulletin MS02-039"](https://web.archive.org/web/20080307052903/http://www.microsoft.com/technet/security/bulletin/ms02-039.mspx). *[Microsoft](https://en.wikipedia.org/wiki/Microsoft)*. Archived from [the original](http://www.microsoft.com/technet/security/bulletin/ms02-039.mspx) on 2008-03-07. Retrieved 2007-06-03.
49. **[^](#cite_ref-49)** ["Hacker breaks Xbox protection without mod-chip"](https://web.archive.org/web/20070927210513/http://www.gamesindustry.biz/content_page.php?aid=1461). Archived from [the original](http://www.gamesindustry.biz/content_page.php?aid=1461) on 2007-09-27. Retrieved 2007-06-03.

* ["Discovering and exploiting a remote buffer overflow vulnerability in an FTP server"](https://raykoid666.wordpress.com/2009/11/28/remote-buffer-overflow-from-vulnerability-to-exploit-part-1/) by Raykoid666
* ["Smashing the Stack for Fun and Profit"](https://www.phrack.org/issues/49/14.html#article) by Aleph One
* Gerg, Isaac (2005-05-02). ["An Overview and Example of the Buffer-Overflow Exploit"](https://web.archive.org/web/20060927225105/https://iac.dtic.mil/iatac/download/Vol7_No4.pdf) (PDF). *IAnewsletter*. **7** (4). [Information Assurance Technology Analysis Center](https://en.wikipedia.org/wiki/Information_Assurance_Technology_Analysis_Center): 16–21. Archived from [the original](https://iac.dtic.mil/iatac/download/Vol7_No4.pdf) (PDF) on 2006-09-27. Retrieved 2019-03-17.
* [CERT Secure Coding Standards](https://www.securecoding.cert.org/)
* [CERT Secure Coding Initiative](https://www.cert.org/secure-coding)
* [Secure Coding in C and C++](https://www.cert.org/books/secure-coding)
* [SANS: inside the buffer overflow attack](https://www.sans.org/reading_room/whitepapers/securecode/386.php)
* ["Advances in adjacent memory overflows"](https://web.archive.org/web/20130126024851/https://www.awarenetwork.org/etc/alpha/?x=5) by Nomenumbra
* [A Comparison of Buffer Overflow Prevention Implementations and Weaknesses](https://www.blackhat.com/presentations/bh-usa-04/bh-us-04-silberman/bh-us-04-silberman-paper.pdf)
* [More Security Whitepapers about Buffer Overflows](https://web.archive.org/web/20090817230359/https://doc.bughunter.net/buffer-overflow/)
* [Chapter 12: Writing Exploits III](https://web.archive.org/web/20071129123212/https://www.syngress.com/book_catalog/327_SSPC/sample.pdf) from *Sockets, Shellcode, Porting & Coding: Reverse Engineering Exploits and Tool Coding for Security Professionals* by James C. Foster ([ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1-59749-005-9](https://en.wikipedia.org/wiki/Special:BookSources/1-59749-005-9)). Detailed explanation of how to use Metasploit to develop a buffer overflow exploit from scratch.
* [Computer Security Technology Planning Study](https://web.archive.org/web/20110721060319/https://csrc.nist.gov/publications/history/ande72.pdf), James P. Anderson, ESD-TR-73-51, ESD/AFSC, Hanscom AFB, Bedford, MA 01731 (October 1972) [NTIS AD-758 206]
* ["Buffer Overflows: Anatomy of an Exploit"](https://web.archive.org/web/20170905183149/https://www.exploit-db.com/docs/18346.pdf) by Nevermore
* [Secure Programming with GCC and GLibc](https://www.cansecwest.com/csw08/csw08-holtmann.pdf) [Archived](https://web.archive.org/web/20081121103054/https://cansecwest.com/csw08/csw08-holtmann.pdf) 2008-11-21 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) (2008), by Marcel Holtmann
* ["Criação de Exploits com Buffer Overflor – Parte 0 – Um pouco de teoria "](https://www.helviojunior.com.br/it/security/criacao-de-exploits/criacao-de-exploits-parte-0-um-pouco-de-teoria/) (2018), by Helvio Junior (M4v3r1ck)