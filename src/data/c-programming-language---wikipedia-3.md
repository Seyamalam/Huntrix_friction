# C (programming language) - Wikipedia

Source: https://en.wikipedia.org/wiki/C_(programming_language)

---

General-purpose programming language

"C lang" redirects here. For the compiler front end, see

[Clang](//en.wikipedia.org/wiki/Clang)

.

Not to be confused with

[C++](//en.wikipedia.org/wiki/C%2B%2B)

or

[C#](//en.wikipedia.org/wiki/C_Sharp_(programming_language))

.

| C |
| --- |
|  |
| Paradigm | Multi-paradigm : imperative ( procedural ), structured |
| Designed by | Dennis Ritchie |
| Developer | ANSI X3J11 ( ANSI C ); ISO/IEC JTC 1 (Joint Technical Committee 1) / SC 22 (Subcommittee 22) / WG 14 (Working Group 14) (ISO C) |
| First appeared | 1972 ; 54 years ago ( 1972 ) |
|  |
| Stable release | C23 / October 31, 2024 ; 17 months ago ( 2024-10-31 ) |
| Preview release | C2Y (N3220)
   / February 21, 2024 ; 2 years ago ( 2024-02-21 ) |
|  |
| Typing discipline | Static , weak , manifest , nominal |
| OS | Cross-platform |
| Filename extensions | .c, .h |
| Website |  |
|  |
| pcc , GCC , Clang , Intel C , C++Builder , Microsoft Visual C++ , Watcom C |
|  |
| Cyclone , Unified Parallel C , Split-C , Cilk , C* |
|  |
| B , BCPL , CPL , ALGOL 68 , PL/I , Fortran |
|  |
| Numerous : AMPL , AWK , csh , C++ , C-- , C# , Objective-C , D , Go , Java , JavaScript , JS++ , Julia , Limbo , LPC , Perl , PHP , Pike , Processing , Python , Rust , V (Vlang) , Vala , Verilog (HDL), Nim , Zig |
|  |

**C** is a [general-purpose programming language](//en.wikipedia.org/wiki/General-purpose_programming_language) created in the 1970s by [Dennis Ritchie](//en.wikipedia.org/wiki/Dennis_Ritchie). By design, C gives the [programmer](//en.wikipedia.org/wiki/Programmer) relatively direct access to the features of the typical [CPU](//en.wikipedia.org/wiki/Central_processing_unit) architecture, customized for the target [instruction set](//en.wikipedia.org/wiki/Instruction_set_architecture). It has been and continues to be used to implement [operating systems](//en.wikipedia.org/wiki/Operating_system) (especially [kernels](//en.wikipedia.org/wiki/Kernel_(operating_system))), [device drivers](//en.wikipedia.org/wiki/Device_driver), and [protocol stacks](//en.wikipedia.org/wiki/Protocol_stack), but its use in [application software](//en.wikipedia.org/wiki/Application_software) has been decreasing. C is used on computers that range from the largest [supercomputers](//en.wikipedia.org/wiki/Supercomputer) to the smallest [microcontrollers](//en.wikipedia.org/wiki/Microcontroller) and [embedded systems](//en.wikipedia.org/wiki/Embedded_system).

A successor to the programming language [B](//en.wikipedia.org/wiki/B_(programming_language)), C was originally developed at [Bell Labs](//en.wikipedia.org/wiki/Bell_Labs) by Ritchie between 1972 and 1973 to construct utilities running on [Unix](//en.wikipedia.org/wiki/Unix). It was applied to re-implementing the kernel of the Unix operating system. During the 1980s, C gradually gained popularity. It has become one of the most widely used [programming languages](//en.wikipedia.org/wiki/Programming_language), with C [compilers](//en.wikipedia.org/wiki/Compiler) available for practically all modern [computer architectures](//en.wikipedia.org/wiki/Computer_architecture) and [operating systems](//en.wikipedia.org/wiki/Operating_system). The book *[The C Programming Language](//en.wikipedia.org/wiki/The_C_Programming_Language)*, co-authored by the original language designer, served for many years as the *de facto* standard for the language. C has been standardized since 1989 by the [American National Standards Institute](//en.wikipedia.org/wiki/American_National_Standards_Institute) (ANSI) and, subsequently, jointly by the [International Organization for Standardization](//en.wikipedia.org/wiki/International_Organization_for_Standardization) (ISO) and the [International Electrotechnical Commission](//en.wikipedia.org/wiki/International_Electrotechnical_Commission) (IEC).

C is an [imperative](//en.wikipedia.org/wiki/Imperative_programming) [procedural](//en.wikipedia.org/wiki/Procedural_programming) language, supporting [structured programming](//en.wikipedia.org/wiki/Structured_programming), [lexical variable scope](//en.wikipedia.org/wiki/Lexical_variable_scope), and [recursion](//en.wikipedia.org/wiki/Recursion_(computer_science)), with a [static type system](//en.wikipedia.org/wiki/Static_type_system). It was designed to be [compiled](//en.wikipedia.org/wiki/Compiled) to provide [low-level](//en.wikipedia.org/wiki/Low-level_programming_language) access to [memory](//en.wikipedia.org/wiki/Computer_memory) and language constructs that map efficiently to [machine instructions](//en.wikipedia.org/wiki/Machine_instructions), all with minimal [runtime support](//en.wikipedia.org/wiki/Runtime_system). Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A [standards](//en.wikipedia.org/wiki/Specification_(technical_standard))-compliant C program written with [portability](//en.wikipedia.org/wiki/Software_portability) in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.

Although neither C nor its standard library provide some popular features found in other languages, it is flexible enough to support them. For example, [object orientation](//en.wikipedia.org/wiki/Object-oriented_programming) and [garbage collection](//en.wikipedia.org/wiki/Garbage_collection_(computer_science)) are provided by external libraries [GLib Object System](//en.wikipedia.org/wiki/GLib_Object_System) and [Boehm garbage collector](//en.wikipedia.org/wiki/Boehm_garbage_collector), respectively.

Since 2000, C has typically ranked as the most or second-most popular language in the [TIOBE index](//en.wikipedia.org/wiki/TIOBE_index).

[![](//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ken_Thompson_and_Dennis_Ritchie--1973.jpg/250px-Ken_Thompson_and_Dennis_Ritchie--1973.jpg)](//en.wikipedia.org/wiki/File:Ken_Thompson_and_Dennis_Ritchie--1973.jpg)

[Dennis Ritchie](//en.wikipedia.org/wiki/Dennis_Ritchie) (right), the inventor of the C programming language, with [Ken Thompson](//en.wikipedia.org/wiki/Ken_Thompson)

The C language exhibits the following characteristics:

* [Free-form](//en.wikipedia.org/wiki/Free-form_language) source code
* [Semicolons](//en.wikipedia.org/wiki/Semicolon) terminate [statements](//en.wikipedia.org/wiki/Statement_(programming))
* [Curly braces](//en.wikipedia.org/wiki/Curly_braces) group statements into [blocks](//en.wikipedia.org/wiki/Block_(programming))
* [Executable code](//en.wikipedia.org/wiki/Executable_code) is contained in [functions](//en.wikipedia.org/wiki/Function_(computer_programming)) (no script-like syntax)
* [Parameters](//en.wikipedia.org/wiki/Function_parameter) are passed by value; pass by-reference is achieved by passing a pointer to a value
* Relatively small number of keywords
* [Control flow](//en.wikipedia.org/wiki/Control_flow) constructs, including `if`, `for`, `do`, `while`, and `switch`
* [Arithmetic](//en.wikipedia.org/wiki/Arithmetic), [bitwise](//en.wikipedia.org/wiki/Bitwise), and logic operators, including `+`,`+=`,`++`,`&`,`||`
* Multiple [assignments](//en.wikipedia.org/wiki/Assignment_(computer_science)) may be performed in a single statement
* User-defined identifiers are not distinguished from keywords (i.e., by a [sigil](//en.wikipedia.org/wiki/Sigil_(computer_programming)))
* A variable declared inside a block is accessible only in that block and only below the declaration
* A function return value can be ignored
* A function cannot be nested inside a function, but some translators support this
* [Run-time polymorphism](//en.wikipedia.org/wiki/Run-time_polymorphism) may be achieved using function pointers
* Supports [recursion](//en.wikipedia.org/wiki/Recursion_(computer_science))
* Data typing is [static](//en.wikipedia.org/wiki/Static_typing), but [weakly enforced](//en.wikipedia.org/wiki/Strong_and_weak_typing); all variables have a type, but [implicit conversion](//en.wikipedia.org/wiki/Implicit_conversion) between primitive types weakens the separation of the different types
* [User-defined](//en.wikipedia.org/wiki/Typedef) data types allow for aliasing a data type specifier
* Syntax for [array](//en.wikipedia.org/wiki/Array_(data_type)) definition and access is via square bracket notation, for example `month[11]`. Indexing is defined in terms of pointer arithmetic. Whole arrays cannot be copied or compared without custom or library code
* User-defined [structure](//en.wikipedia.org/wiki/Struct_(C_programming_language)) types allow related data elements to be passed and copied as a unit although two structures cannot be compared without custom code to compare each field
* User-defined [union](//en.wikipedia.org/wiki/Union_type) types support overlapping members, allowing multiple data types to share the same [memory location](//en.wikipedia.org/wiki/Memory_location)
* User-defined [enumeration](//en.wikipedia.org/wiki/Enumerated_type) types support aliasing integer values
* Lacks a [string type](//en.wikipedia.org/wiki/String_(computer_science)) but has syntax for [null-terminated strings](//en.wikipedia.org/wiki/Null-terminated_string) with associated [handling](//en.wikipedia.org/wiki/C_string_handling) in its standard library
* Supports low-level access to [computer memory](//en.wikipedia.org/wiki/Computer_memory) via [pointers](//en.wikipedia.org/wiki/Pointer_(computer_programming))
* Supports [procedure-like](//en.wikipedia.org/wiki/Procedure_(computer_science)) construct as a function returning `void`
* Supports [dynamic memory](//en.wikipedia.org/wiki/Dynamic_allocation) via standard library functions
* Includes the [C preprocessor](//en.wikipedia.org/wiki/C_preprocessor) to perform [macro](//en.wikipedia.org/wiki/Macro_(computer_science)) definition, [source code](//en.wikipedia.org/wiki/Source_code) file inclusion, and [conditional compilation](//en.wikipedia.org/wiki/Conditional_compilation)
* Supports [modularity](//en.wikipedia.org/wiki/Modular_programming) in that files are processed separately, with visibility control via `static` and `extern` attributes
* Minimized functionality in the core language while relatively complex functionality such as [I/O](//en.wikipedia.org/wiki/Input/output), string manipulation, and mathematical functions supported via standard library functions
* Resulting compiled code has relatively straightforward needs on the underlying platform, making it desirable for operating and [embedded](//en.wikipedia.org/wiki/Embedded_system) systems

## "Hello, world" example

[[edit](//en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=2)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hello_World_Brian_Kernighan_1978.jpg/250px-Hello_World_Brian_Kernighan_1978.jpg)](//en.wikipedia.org/wiki/File:Hello_World_Brian_Kernighan_1978.jpg)

"Hello, World" program by [Brian Kernighan](//en.wikipedia.org/wiki/Brian_Kernighan) (1978)

The ["Hello, World!" program](//en.wikipedia.org/wiki/%22Hello,_World!%22_program) example that appeared in the first edition of *[K&R](//en.wikipedia.org/wiki/The_C_Programming_Language)* has become the model for an introductory program in most programming textbooks. The program prints "hello, world" to the [standard output](//en.wikipedia.org/wiki/Standard_output).

The original version was:

```
main()
{
    printf("hello, world\n");
}

```

A more modern version is:

```
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
}

```

The first line is a [preprocessor](//en.wikipedia.org/wiki/C_preprocessor) [directive](//en.wikipedia.org/wiki/Directive_(programming)), indicated by `#include`, which causes the preprocessor to replace that line of code with the text of the `stdio.h` header file, which contains declarations for input and output functions including `printf`. The angle brackets around `stdio.h` indicate that the header file can be located using a search strategy that selects header files provided with the compiler over files with the same name that may be found in project-specific directories.

The next code line declares the [entry point](//en.wikipedia.org/wiki/Entry_point) function `main`. The [run-time environment](//en.wikipedia.org/wiki/Run-time_environment) calls this function to begin program execution. The type specifier `int` indicates that the function returns an integer value. The `void` parameter list indicates that the function consumes no arguments. The run-time environment actually passes two arguments (typed `int` and `char *[]`), but this implementation ignores them. The ISO C standard (section 5.1.2.2.1) requires syntax that either is void or these two arguments – a special treatment not afforded to other functions.

The opening curly brace indicates the beginning of the code that defines the function.

The next line of code calls (diverts execution to) the C standard library function `printf` with the [address](//en.wikipedia.org/wiki/Memory_address) of the first character of a null-terminated string specified as a [string literal](//en.wikipedia.org/wiki/String_literal). The text `\n` is an [escape sequence](//en.wikipedia.org/wiki/Escape_sequence) that denotes the [newline](//en.wikipedia.org/wiki/Newline) character which when output in a terminal results in moving the cursor to the beginning of the next line. Even though `printf` returns an `int` value, it is silently discarded. The semicolon `;` terminates the call statement.

The closing curly brace indicates the end of the `main` function. Prior to C99, an explicit `return 0;` statement was required at the end of `main` function, but since C99, the `main` function (as being the initial function call) implicitly returns `0` upon reaching its final closing curly brace.

| Year | Informal name | Official standard |
| --- | --- | --- |
| 1972 | first release | — N/a |
| 1978 | K&R C | — N/a |
| 1989, 1990 | ANSI C , C89, ISO C, C90 | ANSI X3.159-1989 ISO/IEC 9899:1990 |
| 1999 | C99 , C9X | ISO/IEC 9899:1999 |
| 2011 | C11 , C1X | ISO/IEC 9899:2011 |
| 2018 | C17 , C18 | ISO/IEC 9899:2018 |
| 2024 | C23 , C2X | ISO/IEC 9899:2024 |
| TBA | C2Y |  |

The origin of C is closely tied to the development of the [Unix](//en.wikipedia.org/wiki/Unix) operating system, originally implemented in [assembly language](//en.wikipedia.org/wiki/Assembly_language) on a [PDP-7](//en.wikipedia.org/wiki/PDP-7) by [Dennis Ritchie](//en.wikipedia.org/wiki/Dennis_Ritchie) and [Ken Thompson](//en.wikipedia.org/wiki/Ken_Thompson), incorporating several ideas from colleagues. Eventually, they decided to port the operating system to a [PDP-11](//en.wikipedia.org/wiki/PDP-11). The original PDP-11 version of Unix was also developed in assembly language.

Thompson wanted a programming language for developing utilities for the new platform. He first tried writing a [Fortran](//en.wikipedia.org/wiki/Fortran) compiler, but he soon gave up the idea and instead created a cut-down version of the recently developed [systems programming language](//en.wikipedia.org/wiki/Systems_programming_language) called [BCPL](//en.wikipedia.org/wiki/BCPL). The official description of BCPL was not available at the time, and Thompson modified the syntax to be less 'wordy' and similar to a simplified [ALGOL](//en.wikipedia.org/wiki/ALGOL) known as SMALGOL. He called the result [*B*](//en.wikipedia.org/wiki/B_(programming_language)), describing it as "BCPL semantics with a lot of SMALGOL syntax". Like BCPL, B had a [bootstrapping](//en.wikipedia.org/wiki/Bootstrapping) compiler to facilitate porting to new machines. Ultimately, few utilities were written in B because it was too slow and could not take advantage of PDP-11 features such as [byte](//en.wikipedia.org/wiki/Byte) addressability.

Unlike BCPL's `// comment` marking comments up to the end of the line, B adopted `/* comment */` as the comment delimiter, more akin to PL/1, and allowing comments to appear in the middle of lines. (BCPL's comment style would be reintroduced in C++.)

#### New B and first C release

[[edit](//en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=6)]

In 1971, Ritchie started to improve B, to use the features of the more-powerful PDP-11. A significant addition was a character data type. He called this *New B* (NB). Thompson started to use NB to write the [Unix](//en.wikipedia.org/wiki/Research_Unix) kernel, and his requirements shaped the direction of the language development.

Through to 1972, richer types were added to the NB language. NB had arrays of `int` and `char`, and to these types were added pointers, the ability to generate pointers to other types, arrays of all types, and types to be returned from functions. Arrays within expressions were effectively treated as pointers. A new compiler was written, and the language was renamed C.

The C compiler and some utilities made with it were included in [Version 2 Unix](//en.wikipedia.org/wiki/Version_2_Unix), which is also known as [Research Unix](//en.wikipedia.org/wiki/Research_Unix).

#### Structures and Unix kernel re-write

[[edit](//en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=7)]

At [Version 4 Unix](//en.wikipedia.org/wiki/Version_4_Unix), released in November 1973, the [Unix](//en.wikipedia.org/wiki/Unix) [kernel](//en.wikipedia.org/wiki/Kernel_(operating_system)) was extensively re-implemented in C. By this time, the C language had acquired some powerful features such as `struct` types.

The [preprocessor](//en.wikipedia.org/wiki/C_preprocessor) was introduced around 1973 at the urging of [Alan Snyder](//en.wikipedia.org/w/index.php?title=Alan_Snyder_(computer_scientist)&action=edit&redlink=1) and also in recognition of the usefulness of the file-inclusion mechanisms available in BCPL and [PL/I](//en.wikipedia.org/wiki/PL/I). Its original version provided only included files and simple string replacements: `#include` and `#define` of parameterless macros. Soon after that, it was extended, mostly by [Mike Lesk](//en.wikipedia.org/wiki/Mike_Lesk) and then by John Reiser, to incorporate macros with arguments and [conditional compilation](//en.wikipedia.org/wiki/Conditional_compilation).

Unix was one of the first operating system kernels implemented in a language other than [assembly](//en.wikipedia.org/wiki/Assembly_language). Earlier instances include the [Multics](//en.wikipedia.org/wiki/Multics) system (which was written in [PL/I](//en.wikipedia.org/wiki/PL/I)) and [Master Control Program](//en.wikipedia.org/wiki/Burroughs_MCP) (MCP) for the [Burroughs B5000](//en.wikipedia.org/wiki/Burroughs_B5000) (which was written in [ALGOL](//en.wikipedia.org/wiki/ALGOL)) in 1961. In and around 1977, Ritchie and [Stephen C. Johnson](//en.wikipedia.org/wiki/Stephen_C._Johnson) made further changes to the language to facilitate [portability](//en.wikipedia.org/wiki/Software_portability) of the Unix operating system. Johnson's [Portable C Compiler](//en.wikipedia.org/wiki/Portable_C_Compiler) served as the basis for several implementations of C on new platforms.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/0e/The_C_Programming_Language%2C_First_Edition_Cover.svg/250px-The_C_Programming_Language%2C_First_Edition_Cover.svg.png)](//en.wikipedia.org/wiki/File:The_C_Programming_Language,_First_Edition_Cover.svg)

The cover of the book *The C Programming Language*, first edition, by [Brian Kernighan](//en.wikipedia.org/wiki/Brian_Kernighan) and [Dennis Ritchie](//en.wikipedia.org/wiki/Dennis_Ritchie)

In 1978, [Brian Kernighan](//en.wikipedia.org/wiki/Brian_Kernighan) and [Dennis Ritchie](//en.wikipedia.org/wiki/Dennis_Ritchie) published the first edition of *[The C Programming Language](//en.wikipedia.org/wiki/The_C_Programming_Language)*. Known as *K&R* from the initials of its authors, the book served for many years as an informal [specification](//en.wikipedia.org/wiki/Specification_(technical_standard)) of the language. The version of C that it describes is commonly referred to as "**K&R C**". As this was released in 1978, it is now also referred to as *C78*. The second edition of the book covers the later [ANSI C](//en.wikipedia.org/wiki/ANSI_C) standard, described below.

*K&R* introduced several language features:

* [Standard I/O library](//en.wikipedia.org/wiki/C_file_input/output)
* `long int` data type
* `unsigned int` data type
* Compound assignment operators of the form `=op` (such as `=-`) were changed to the form `op=` (that is, `-=`) to remove the semantic ambiguity created by constructs such as `i=-10`, which had been interpreted as `i =- 10` (decrement `i` by 10) instead of the possibly intended `i = -10` (let `i` be −10).

Even after the publication of the 1989 ANSI standard, for many years K&R C was still considered the "[lowest common denominator](//en.wikipedia.org/wiki/Lowest_common_denominator_(computers))" to which C programmers restricted themselves when maximum portability was desired, since many older compilers were still in use, and because carefully written K&R C code can be legal Standard C as well.

Although later versions of C require functions to have an explicit type declaration, K&R C only requires functions that return a type other than `int` to be declared before use. Functions used without prior declaration were presumed to return `int`.

For example:

```
long long_function();

calling_function()
{
    long longvar;
    register intvar;
    longvar = long_function();
    if (longvar > 1)
          intvar = 0;
    else
          intvar = int_function();
    return intvar;
}

```

The declaration of `long_function()` (on line 1) is required since it returns `long`; not `int`. Function `int_function` can be called (line 11) even though it is not declared since it returns `int`. Also, variable `intvar` does not need to be declared as type `int` since that is the default type for `register` keyword.

Since function declarations did not include information about arguments, [type checks](//en.wikipedia.org/wiki/Type_checking) were not performed, although some compilers would issue a warning if different calls to a function used different numbers or types of arguments. Tools such as Unix's [lint](//en.wikipedia.org/wiki/Lint_programming_tool) utility were developed that (among other things) checked for consistency of function use across multiple source files.

In the years following the publication of K&R C, several features were added to the language, supported by compilers from AT&T (in particular [PCC](//en.wikipedia.org/wiki/Portable_C_Compiler)) and other vendors. These included:

The popularity of the language, lack of agreement on [standard library](//en.wikipedia.org/wiki/C_standard_library) interfaces, and lack of compliance to the K&R specification, led to standardization efforts.

During the late 1970s and 1980s, versions of C were implemented for a wide variety of [mainframe computers](//en.wikipedia.org/wiki/Mainframe_computer), [minicomputers](//en.wikipedia.org/wiki/Minicomputer), and [microcomputers](//en.wikipedia.org/wiki/Microcomputer), including the [IBM PC](//en.wikipedia.org/wiki/IBM_PC), as its popularity increased significantly.

In 1983 the [American National Standards Institute](//en.wikipedia.org/wiki/American_National_Standards_Institute) (ANSI) formed a committee, X3J11, to establish a standard specification of C. X3J11 based the C standard on the Unix implementation; however, the non-portable portion of the Unix C library was handed off to the [IEEE](//en.wikipedia.org/wiki/IEEE) [working group](//en.wikipedia.org/wiki/Working_group) 1003 to become the basis for the 1988 [POSIX](//en.wikipedia.org/wiki/POSIX) standard. In 1989, the C standard was ratified as ANSI X3.159-1989 "Programming Language C". This version of the language is often referred to as [ANSI C](//en.wikipedia.org/wiki/ANSI_C), Standard C, or sometimes **C89**.

In 1990 the ANSI C standard (with formatting changes) was adopted by the [International Organization for Standardization](//en.wikipedia.org/wiki/International_Organization_for_Standardization) (ISO) as ISO/IEC 9899:1990, which is sometimes called **C90**. Therefore, the terms "C89" and "C90" refer to the same programming language.

ANSI, like other national standards bodies, no longer develops the C standard independently, but defers to the international C standard, maintained by the working group [ISO/IEC JTC1/SC22](//en.wikipedia.org/wiki/ISO/IEC_JTC1/SC22)/WG14. National adoption of an update to the international standard typically occurs within a year of ISO publication.

One of the aims of the C standardization process was to produce a [superset](//en.wikipedia.org/wiki/Superset) of K&R C, incorporating many of the subsequently introduced unofficial features. The standards committee also included several additional features such as [function prototypes](//en.wikipedia.org/wiki/Function_prototype) (borrowed from C++), `void` pointers, support for international [character sets](//en.wikipedia.org/wiki/Character_sets) and [locales](//en.wikipedia.org/wiki/Locale_(computer_software)), and preprocessor enhancements. Although the [syntax](//en.wikipedia.org/wiki/C_syntax) for parameter declarations was augmented to include the style used in C++, the K&R interface continued to be permitted, for compatibility with existing source code.

C89 is supported by current C compilers, and most modern C code is based on it. Any program written only in Standard C and without any hardware-dependent assumptions will run correctly on any [platform](//en.wikipedia.org/wiki/Computing_platform) with a conforming C implementation, within its resource limits. Without such precautions, programs may compile only on a certain platform or with a particular compiler, due, for example, to the use of non-standard libraries, such as [GUI](//en.wikipedia.org/wiki/Graphical_user_interface) libraries, or to a reliance on compiler- or platform-specific attributes such as the exact size of data types and byte [endianness](//en.wikipedia.org/wiki/Endianness).

In cases where code must be compilable by either standard-conforming or K&R C-based compilers, the `__STDC__` macro can be used to split the code into Standard and K&R sections to prevent the use on a K&R C-based compiler of features available only in Standard C.

After the ANSI/ISO standardization process, the C language specification remained relatively static for several years. In 1995, Normative Amendment 1 to the 1990 C standard (ISO/IEC 9899/AMD1:1995, known informally as C95) was published, to correct some details and to add more extensive support for international character sets.

The C standard was further revised in the late 1990s, leading to the publication of ISO/IEC 9899:1999 in 1999, which is commonly referred to as "[C99](//en.wikipedia.org/wiki/C99)". It has since been amended three times by Technical Corrigenda.

C99 introduced several new features, including [inline functions](//en.wikipedia.org/wiki/Inline_(C_and_C%2B%2B)), several new [data types](//en.wikipedia.org/wiki/Data_type) (including `long long int` and a `complex` type to represent [complex numbers](//en.wikipedia.org/wiki/Complex_number)), [variable-length arrays](//en.wikipedia.org/wiki/Variable-length_array) and [flexible array members](//en.wikipedia.org/wiki/Flexible_array_member), improved support for [IEEE 754](//en.wikipedia.org/wiki/IEEE_754) floating point, support for [variadic macros](//en.wikipedia.org/wiki/Variadic_macro) (macros of variable [arity](//en.wikipedia.org/wiki/Arity)), and support for one-line comments beginning with `//`, as in BCPL or C++. Many of these had already been implemented as extensions in several C compilers.

C99 is for the most part backward compatible with C90, but is stricter in some ways; in particular, a declaration that lacks a type specifier no longer has `int` implicitly assumed. A standard macro `__STDC_VERSION__` is defined with value `199901L` to indicate that C99 support is available. [GCC](//en.wikipedia.org/wiki/GNU_Compiler_Collection), [Solaris Studio](//en.wikipedia.org/wiki/Solaris_Studio), and other C compilers now[*[when?](//en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Dates_and_numbers#Chronological_items)*] support many or all of the new features of C99. The C compiler in [Microsoft Visual C++](//en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B), however, implements the C89 standard and those parts of C99 that are required for compatibility with [C++11](//en.wikipedia.org/wiki/C%2B%2B11).[*[needs update](//en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Dates_and_numbers#Chronological_items)*]

In addition, the C99 standard requires support for [identifiers](//en.wikipedia.org/wiki/Identifier_(computer_languages)) using [Unicode](//en.wikipedia.org/wiki/Unicode) in the form of escaped characters (e.g. `\u0040` or `\U0001f431`) and suggests support for raw Unicode names.

Work began in 2007 on another revision of the C standard, informally called "C1X" until its official publication of ISO/IEC 9899:2011 on December 8, 2011. The C standards committee adopted guidelines to limit the adoption of new features that had not been tested by existing implementations.

The C11 standard adds numerous new features to C and the library, including type generic macros, anonymous structures, improved Unicode support, atomic operations, multi-threading, and bounds-checked functions. It also makes some portions of the existing C99 library optional, and improves compatibility with C++. The standard macro `__STDC_VERSION__` is defined as `201112L` to indicate that C11 support is available.

C17 is an informal name for ISO/IEC 9899:2018, a standard for the C programming language published in June 2018. It introduces no new language features, only technical corrections, and clarifications to defects in C11. The standard macro `__STDC_VERSION__` is defined as `201710L` to indicate that C17 support is available.

C23 is an informal name for the current major C language standard revision. It was known as "C2X" through most of its development. It builds on past releases, introducing features like new keywords, additional meaning for `auto` to provide [type inference](//en.wikipedia.org/wiki/Type_inference) when declaring variables, new types including `nullptr_t` and `_BitInt(N)`, and expansions to the standard library.

C23 was published in October 2024 as ISO/IEC 9899:2024. The standard macro `__STDC_VERSION__` is defined as `202311L` to indicate that C23 support is available.

C2Y is an informal name for the next major C language standard revision, after C23 (C2X), that is hoped to be released later in the 2020s, hence the '2' in "C2Y". An early working draft of C2Y was released in February 2024 as N3220 by the working group [ISO/IEC JTC1/SC22](//en.wikipedia.org/wiki/ISO/IEC_JTC1/SC22)/WG14.

Historically, embedded C programming requires non-standard extensions to the C language to support exotic features such as [fixed-point arithmetic](//en.wikipedia.org/wiki/Fixed-point_arithmetic), multiple distinct [memory banks](//en.wikipedia.org/wiki/Memory_bank), and basic I/O operations.

In 2008, the C Standards Committee published a [technical report](//en.wikipedia.org/wiki/Technical_report) extending the C language to address these issues by providing a common standard for all implementations to adhere to. It includes a number of features not available in normal C, such as fixed-point arithmetic, named address spaces, and basic I/O hardware addressing.

C has a [formal grammar](//en.wikipedia.org/wiki/Formal_grammar) specified by the C standard. Line endings are generally not significant in C; however, line boundaries do have significance during the preprocessing phase. Comments may appear either between the delimiters `/*` and `*/`, or (since C99) following `//` until the end of the line. Comments delimited by `/*` and `*/` do not nest, and these sequences of characters are not interpreted as comment delimiters if they appear inside [string](//en.wikipedia.org/wiki/String_literal) or character literals.

C source files contain declarations and function definitions. Function definitions, in turn, contain declarations and [statements](//en.wikipedia.org/wiki/Statement_(computer_science)). Declarations either define new types using keywords such as `struct`, `union`, and `enum`, or assign types to and perhaps reserve storage for new variables, usually by writing the type followed by the variable name. Keywords such as `char` and `int` specify built-in types. Sections of code are enclosed in braces (`{` and `}`, sometimes called "curly brackets") to limit the scope of declarations and to act as a single statement for control structures.

As an imperative language, C uses *statements* to specify actions. The most common statement is an *expression statement*, consisting of an expression to be evaluated, followed by a semicolon; as a [side effect](//en.wikipedia.org/wiki/Side_effect_(computer_science)) of the evaluation, [functions may be called](//en.wikipedia.org/wiki/Function_(computer_programming)) and [variables assigned](//en.wikipedia.org/wiki/Assignment_(computer_science)) new values. To modify the normal sequential execution of statements, C provides several control-flow statements identified by reserved keywords. [Structured programming](//en.wikipedia.org/wiki/Structured_programming) is supported by `if` ... [`else`] conditional execution and by `do` ... `while`, `while`, and `for` iterative execution (looping). The `for` statement has separate initialization, testing, and reinitialization expressions, any or all of which can be omitted. `break` and `continue` can be used within the loop. Break is used to leave the innermost enclosing loop statement and continue is used to skip to its reinitialisation. There is also a non-structured `goto` statement, which branches directly to the designated [label](//en.wikipedia.org/wiki/Label_(computer_science)) within the function. `switch` selects a `case` to be executed based on the value of an integer expression. Different from many other languages, control-flow will [fall through](//en.wikipedia.org/wiki/Switch_statement#Fallthrough) to the next `case` unless terminated by a `break`.

Expressions can use a variety of built-in operators and may contain function calls. The order in which arguments to functions and operands to most operators are evaluated is unspecified. The evaluations may even be interleaved. However, all side effects (including storage to variables) will occur before the next "[sequence point](//en.wikipedia.org/wiki/Sequence_point)"; sequence points include the end of each expression statement, and the entry to and return from each function call. Sequence points also occur during evaluation of expressions containing certain operators (`&&`, `||`, `?:` and the [comma operator](//en.wikipedia.org/wiki/Comma_operator)). This permits a high degree of object code optimization by the compiler, but requires C programmers to take more care to obtain reliable results than is needed for other programming languages.

Kernighan and Ritchie say in the Introduction of *The C Programming Language*: "C, like any other language, has its blemishes. Some of the operators have the wrong precedence; some parts of the syntax could be better." The C standard did not attempt to correct many of these blemishes, because of the impact of such changes on already existing software.

The basic C source character set includes the following characters:

The *newline* character indicates the end of a text line; it need not correspond to an actual single character, although for convenience C treats it as such.

The POSIX standard mandates a [portable character set](//en.wikipedia.org/wiki/Portable_character_set) which adds a few characters (notably "@") to the basic C source character set. Both standards do not prescribe any particular value encoding—[ASCII](//en.wikipedia.org/wiki/ASCII) and [EBCDIC](//en.wikipedia.org/wiki/EBCDIC) both comply with these standards, since they include at least those basic characters, even though they use different encoded values for those characters.

Additional multi-byte encoded characters may be used in [string literals](//en.wikipedia.org/wiki/String_literal), but they are not entirely [portable](//en.wikipedia.org/wiki/Software_portability). Since [C99](//en.wikipedia.org/wiki/C99) multi-national Unicode characters can be embedded portably within C source text by using `\uXXXX` or `\UXXXXXXXX` encoding (where `X` denotes a hexadecimal character).

The basic C execution character set contains the same characters, along with representations for the [null character](//en.wikipedia.org/wiki/Null_character), [alert](//en.wikipedia.org/wiki/Bell_character), [backspace](//en.wikipedia.org/wiki/Backspace), and [carriage return](//en.wikipedia.org/wiki/Carriage_return).

[Run-time](//en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)) support for extended character sets has increased with each revision of the C standard.

All versions of C have [reserved words](//en.wikipedia.org/wiki/Reserved_word) that are [case sensitive](//en.wikipedia.org/wiki/Case_sensitive). As reserved words, they cannot be used for variable names.

C89 has 32 reserved words:

C99 added five more reserved words: (‡ indicates an alternative spelling alias for a C23 keyword)

C11 added seven more reserved words: (‡ indicates an alternative spelling alias for a C23 keyword)

* `_Alignas` ‡
* `_Alignof` ‡
* `_Atomic`
* `_Generic`
* `_Noreturn`
* `_Static_assert` ‡
* `_Thread_local` ‡

C23 reserved fifteen more words:

* `alignas`
* `alignof`
* `bool`
* `constexpr`
* `false`
* `nullptr`
* `static_assert`
* `thread_local`
* `true`
* `typeof`
* `typeof_unqual`
* `_BitInt`
* `_Decimal32`
* `_Decimal64`
* `_Decimal128`

Most of the recently reserved words begin with an underscore followed by a capital letter, because identifiers of that form were previously reserved by the C standard for use only by implementations. Since existing program source code should not have been using these identifiers, it would not be affected when C implementations started supporting these extensions to the programming language. Some standard headers do define more convenient synonyms for underscored identifiers. Some of those words were added as keywords with their conventional spelling in C23 and the corresponding macros were removed.

Prior to C89, `entry` was reserved as a keyword. In the second edition of their book *[The C Programming Language](//en.wikipedia.org/wiki/The_C_Programming_Language)*, which describes what became known as C89, Kernighan and Ritchie wrote, "The ... [keyword] `entry`, formerly reserved but never used, is no longer reserved." and "The stillborn `entry` keyword is withdrawn."

C supports a rich set of [operators](//en.wikipedia.org/wiki/Operator_(computer_programming)), which are symbols used within an [expression](//en.wikipedia.org/wiki/Expression_(computer_science)) to specify the manipulations to be performed while evaluating that expression. C has operators for:

* [arithmetic](//en.wikipedia.org/wiki/Arithmetic): [`+`](//en.wikipedia.org/wiki/Addition), [`-`](//en.wikipedia.org/wiki/Subtraction), [`*`](//en.wikipedia.org/wiki/Multiplication), [`/`](//en.wikipedia.org/wiki/Division_(mathematics)), [`%`](//en.wikipedia.org/wiki/Modulo_operation)
* [assignment](//en.wikipedia.org/wiki/Assignment_(computer_science)): `=`
* [augmented assignment](//en.wikipedia.org/wiki/Augmented_assignment): `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `<<=`, `>>=`
* [bitwise logic](//en.wikipedia.org/wiki/Bitwise_logic): `~`, `&`, `|`, `^`
* [bitwise shifts](//en.wikipedia.org/wiki/Bitwise_shift): `<<`, `>>`
* [Boolean logic](//en.wikipedia.org/wiki/Boolean_logic): `!`, `&&`, `||`
* [conditional evaluation](//en.wikipedia.org/wiki/%3F:): [`? :`](//en.wikipedia.org/wiki/%3F:)
* equality testing: [`==`](//en.wikipedia.org/wiki/Equality_(mathematics)), [`!=`](//en.wikipedia.org/wiki/Inequality_(mathematics))
* [calling functions](//en.wikipedia.org/wiki/Subroutine): `( )`
* [increment and decrement](//en.wikipedia.org/wiki/Increment_and_decrement_operators): `++`, `--`
* [member selection](//en.wikipedia.org/wiki/Record_(computer_science)): `.`, `->`
* object size: `sizeof`
* type: `typeof`, `typeof_unqual` *since C23*
* [order relations](//en.wikipedia.org/wiki/Order_relation): `<`, `<=`, `>`, `>=`
* [reference and dereference](//en.wikipedia.org/wiki/Pointer_(computer_programming)): `&`, `*`, `[ ]`
* sequencing: [`,`](//en.wikipedia.org/wiki/Comma_operator)
* [subexpression grouping](//en.wikipedia.org/wiki/Order_of_operations#Programming_languages): `( )`
* [type conversion](//en.wikipedia.org/wiki/Type_conversion): `(typename)`

C uses the operator `=` (used in mathematics to express equality) to indicate assignment, following the precedent of [Fortran](//en.wikipedia.org/wiki/Fortran) and [PL/I](//en.wikipedia.org/wiki/PL/I), but unlike [ALGOL](//en.wikipedia.org/wiki/ALGOL) and its derivatives. C uses the operator `==` to test for equality. The similarity between the operators for assignment and equality may result in the accidental use of one in place of the other, and in many cases the mistake does not produce an error message (although some compilers produce warnings). For example, the conditional expression `if (a == b + 1)` might mistakenly be written as `if (a = b + 1)`, which will be evaluated as `true` unless the value of `a` is `0` after the assignment.

The C [operator precedence](//en.wikipedia.org/wiki/Operator_precedence) is not always intuitive. For example, the operator `==` binds more tightly than (is executed prior to) the operators `&` (bitwise AND) and `|` (bitwise OR) in expressions such as `x & 1 == 0`, which must be written as `(x & 1) == 0` if that is the coder's intent.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/3/30/1999_ISO_C_Concepts.png/250px-1999_ISO_C_Concepts.png)](//en.wikipedia.org/wiki/File:1999_ISO_C_Concepts.png)

The [type system](//en.wikipedia.org/wiki/Type_system) in C is [static](//en.wikipedia.org/wiki/Static_typing) and [weakly typed](//en.wikipedia.org/wiki/Strong_and_weak_typing), which makes it similar to the type system of [ALGOL](//en.wikipedia.org/wiki/ALGOL) descendants such as [Pascal](//en.wikipedia.org/wiki/Pascal_(programming_language)). There are built-in types for integers of various sizes, both signed and unsigned, [floating-point numbers](//en.wikipedia.org/wiki/Floating-point_number), and enumerated types (`enum`). Integer type `char` is often used for single-byte characters. C99 added a [Boolean data type](//en.wikipedia.org/wiki/Boolean_data_type). There are also derived types including [arrays](//en.wikipedia.org/wiki/Array_(data_type)), [pointers](//en.wikipedia.org/wiki/Pointer_(computer_programming)), [records](//en.wikipedia.org/wiki/Record_(computer_science)) (`struct`), and [unions](//en.wikipedia.org/wiki/Union_(computer_science)) (`union`).

C is often used in low-level systems programming where escapes from the type system may be necessary. The compiler attempts to ensure type correctness of most expressions, but the programmer can override the checks in various ways, either by using a *[type cast](//en.wikipedia.org/wiki/Type_conversion)* to explicitly convert a value from one type to another, or by using pointers or unions to reinterpret the underlying bits of a data object in some other way.

Some find C's declaration syntax unintuitive, particularly for [function pointers](//en.wikipedia.org/wiki/Function_pointer). (Ritchie's idea was to declare identifiers in contexts resembling their use: "[declaration reflects use](//en.wikipedia.org/wiki/Declaration_reflects_use)".)

C's *usual arithmetic conversions* allow for efficient code to be generated, but can sometimes produce unexpected results. For example, a comparison of signed and unsigned integers of equal width requires a conversion of the signed value to unsigned. This can generate unexpected results if the signed value is negative.

C supports the use of [pointers](//en.wikipedia.org/wiki/Pointer_(computer_programming)), a type of [reference](//en.wikipedia.org/wiki/Reference_(computer_science)) that records the address or location of an object or function in memory. Pointers can be *dereferenced* to access data stored at the address pointed to, or to invoke a pointed-to function. Pointers can be manipulated using assignment or [pointer arithmetic](//en.wikipedia.org/wiki/Pointer_arithmetic). The run-time representation of a pointer value is typically a raw memory address (perhaps augmented by an offset-within-word field), but since a pointer's type includes the type of the thing pointed to, expressions including pointers can be type-checked at compile time. Pointer arithmetic is automatically scaled by the size of the pointed-to data type.

Pointers are used for many purposes in C. [Text strings](//en.wikipedia.org/wiki/Text_string) are commonly manipulated using pointers into arrays of characters. [Dynamic memory allocation](//en.wikipedia.org/wiki/Dynamic_memory_allocation) is performed using pointers; the result of a `malloc` is usually [cast](//en.wikipedia.org/wiki/Type_conversion) to the data type of the data to be stored. Many data types, such as [trees](//en.wikipedia.org/wiki/Tree_(data_structure)), are commonly implemented as dynamically allocated `struct` objects linked together using pointers. Pointers to other pointers are often used in multi-dimensional arrays and arrays of `struct` objects. Pointers to functions (*[function pointers](//en.wikipedia.org/wiki/Function_pointer)*) are useful for passing functions as arguments to [higher-order functions](//en.wikipedia.org/wiki/Higher-order_function) (such as [qsort](//en.wikipedia.org/wiki/Qsort) or [bsearch](//en.wikipedia.org/wiki/Bsearch)), in [dispatch tables](//en.wikipedia.org/wiki/Dispatch_table), or as [callbacks](//en.wikipedia.org/wiki/Callbacks) to [event handlers](//en.wikipedia.org/wiki/Event_handler).

A *[null pointer](//en.wikipedia.org/wiki/Null_pointer) value* explicitly points to no valid location. Dereferencing a null pointer value is undefined, often resulting in a [segmentation fault](//en.wikipedia.org/wiki/Segmentation_fault). Null pointer values are useful for indicating special cases such as no "next" pointer in the final node of a [linked list](//en.wikipedia.org/wiki/Linked_list), or as an error indication from functions returning pointers. In appropriate contexts in source code, such as for assigning to a pointer variable, a *null pointer constant* can be written as `0`, with or without explicit casting to a pointer type, as the `NULL` macro defined by several standard headers or, since C23 with the constant `nullptr`. In conditional contexts, null pointer values evaluate to `false`, while all other pointer values evaluate to `true`.

Void pointers (`void *`) point to objects of unspecified type, and can therefore be used as "generic" data pointers. Since the size and type of the pointed-to object is not known, void pointers cannot be dereferenced, nor is pointer arithmetic on them allowed, although they can easily be (and in many contexts implicitly are) converted to and from any other object pointer type.

Careless use of pointers is potentially dangerous. Because they are typically unchecked, a pointer variable can be made to point to any arbitrary location, which can cause undesirable effects. Although properly used pointers point to safe places, they can be made to point to unsafe places by using invalid [pointer arithmetic](//en.wikipedia.org/wiki/Pointer_arithmetic); the objects they point to may continue to be used after deallocation ([dangling pointers](//en.wikipedia.org/wiki/Dangling_pointer)); they may be used without having been initialized ([wild pointers](//en.wikipedia.org/wiki/Wild_pointer)); or they may be directly assigned an unsafe value using a cast, union, or through another corrupt pointer. In general, C is permissive in allowing manipulation of and conversion between pointer types, although compilers typically provide options for various levels of checking. Some other programming languages address these problems by using more restrictive [reference](//en.wikipedia.org/wiki/Reference_(computer_science)) types.

[Array](//en.wikipedia.org/wiki/Array_(data_type)) types in C are traditionally of a fixed, static size specified at compile time. The more recent C99 standard also allows a form of variable-length arrays. However, it is also possible to allocate a block of memory (of arbitrary size) at run time, using the standard library's `malloc` function, and treat it as an array.

Since arrays are always accessed (in effect) via pointers, array accesses are typically not checked against the underlying array size, although some compilers may provide [bounds checking](//en.wikipedia.org/wiki/Bounds_checking) as an option. Array bounds violations are therefore possible and can lead to various repercussions, including illegal memory accesses, corruption of data, [buffer overflows](//en.wikipedia.org/wiki/Buffer_overflow), and run-time exceptions.

C does not have a special provision for declaring [multi-dimensional arrays](//en.wikipedia.org/wiki/Multi-dimensional_array), but rather relies on [recursion](//en.wikipedia.org/wiki/Recursion_(computer_science)) within the type system to declare arrays of arrays, which effectively accomplishes the same thing. The index values of the resulting "multi-dimensional array" can be thought of as increasing in [row-major order](//en.wikipedia.org/wiki/Row-major_order). Multi-dimensional arrays are commonly used in numerical algorithms (mainly from applied [linear algebra](//en.wikipedia.org/wiki/Linear_algebra)) to store matrices. The structure of the C array is well suited to this particular task. However, in early versions of C the bounds of the array must be known fixed values or else explicitly passed to any subroutine that requires them, and dynamically sized arrays of arrays cannot be accessed using double indexing. (A workaround for this was to allocate the array with an additional "row vector" of pointers to the columns.) C99 introduced "variable-length arrays" which address this issue.

The following example using modern C (C99 or later) shows allocation of a two-dimensional array on the heap and the use of multi-dimensional array indexing for accesses (which can use bounds-checking on many C compilers):

```
int func(int n, int m) {
    float (*p)[n][m] = malloc(sizeof *p);
    if (p == NULL) {
         return -1;
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            (*p)[i][j] = i + j;
        }
    }
    print_array(n, m, p);
    free(p);
    return 1;
}

```

And here is a similar implementation using C99's *Auto [VLA](//en.wikipedia.org/wiki/Variable-length_array)* feature:

```
int func(int n, int m) {
    // Caution: checks should be made to ensure n * m * sizeof(float) does NOT exceed limitations for auto VLAs and is within available size of stack.
    float p[n][m]; // auto VLA is held on the stack, and sized when the function is invoked
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            p[i][j] = i + j;
        }
    }
    print_array(n, m, p);
    // no need to free(p) since it will disappear when the function exits, along with the rest of the stack frame
    return 1;
}

```

#### Array–pointer interchangeability

[[edit](//en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=23)]

The subscript notation `x[i]` (where `x` designates a pointer) is [syntactic sugar](//en.wikipedia.org/wiki/Syntactic_sugar) for `*(x+i)`. Taking advantage of the compiler's knowledge of the pointer type, the address that `x + i` points to is not the base address (pointed to by `x`) incremented by `i` bytes, but rather is defined to be the base address incremented by `i` multiplied by the size of an element that `x` points to. Thus, `x[i]` designates the `i+1`th element of the array.

Furthermore, in most expression contexts (a notable exception is as operand of `sizeof`), an expression of array type is automatically converted to a pointer to the array's first element. This implies that an array is never copied as a whole when named as an argument to a function, but rather only the address of its first element is passed. Therefore, although function calls in C use [pass-by-value](//en.wikipedia.org/wiki/Pass-by-value) semantics, arrays are in effect passed by [reference](//en.wikipedia.org/wiki/Reference_(computer_science)).

The total size of an array `x` can be determined by applying `sizeof` to an expression of array type. The size of an element can be determined by applying the operator `sizeof` to any dereferenced element of an array `A`, as in `n = sizeof A[0]`. Thus, the number of elements in a declared array `A` can be determined as `sizeof A / sizeof A[0]`. Note, that if only a pointer to the first element is available as it is often the case in C code because of the automatic conversion described above, the information about the full type of the array and its length are lost.

One of the most important functions of a programming language is to provide facilities for managing [memory](//en.wikipedia.org/wiki/Computer_memory) and the objects that are stored in memory. C provides three principal ways to allocate memory for objects:

* [Static memory allocation](//en.wikipedia.org/wiki/Static_memory_allocation): space for the object is provided in the binary at compile time; these objects have an [extent](//en.wikipedia.org/wiki/Variable_(programming)#Scope_and_extent) (or lifetime) as long as the binary which contains them is loaded into memory.
* [Automatic memory allocation](//en.wikipedia.org/wiki/Automatic_memory_allocation): temporary objects can be stored on the [stack](//en.wikipedia.org/wiki/Call_stack), and this space is automatically freed and reusable after the block in which they are declared is exited.
* [Dynamic memory allocation](//en.wikipedia.org/wiki/C_dynamic_memory_allocation): blocks of memory of arbitrary size can be requested at run time using library functions such as `malloc` from a region of memory called the [heap](//en.wikipedia.org/wiki/Memory_management); these blocks persist until subsequently freed for reuse by calling the library function `realloc` or `free`.

These three approaches are appropriate in different situations and have various trade-offs. For example, static memory allocation has little allocation overhead, automatic allocation may involve slightly more overhead, and dynamic memory allocation can potentially have a great deal of overhead for both allocation and deallocation. The persistent nature of static objects is useful for maintaining state information across function calls, automatic allocation is easy to use but stack space is typically much more limited and transient than either static memory or heap space, and dynamic memory allocation allows convenient allocation of objects whose size is known only at run time. Most C programs make extensive use of all three.

Where possible, automatic or static allocation is usually simplest because the storage is managed by the compiler, freeing the programmer of the potentially error-prone chore of manually allocating and releasing storage. However, many data structures can change in size at run time, and since static allocations (and automatic allocations before C99) must have a fixed size at compile time, there are many situations in which dynamic allocation is necessary. Prior to the C99 standard, variable-sized arrays were a common example of this. (See the article on [C dynamic memory allocation](//en.wikipedia.org/wiki/C_dynamic_memory_allocation) for an example of dynamically allocated arrays.) Unlike automatic allocation, which can fail at run time with uncontrolled consequences, the dynamic allocation functions return an indication (in the form of a null pointer value) when the required storage cannot be allocated. (Static allocation that is too large is usually detected by the [linker](//en.wikipedia.org/wiki/Linker_(computing)) or [loader](//en.wikipedia.org/wiki/Loader_(computing)), before the program can even begin execution.)

Unless otherwise specified, static objects contain zero or null pointer values upon program startup. Automatically and dynamically allocated objects are initialized only if an initial value is explicitly specified; otherwise they initially have indeterminate values (typically, whatever [bit pattern](//en.wikipedia.org/wiki/Bit_pattern) happens to be present in the [storage](//en.wikipedia.org/wiki/Computer_storage), which might not even represent a valid value for that type). If the program attempts to access an uninitialized value, the results are undefined. Many modern compilers try to detect and warn about this problem, but both [false positives and false negatives](//en.wikipedia.org/wiki/Type_I_and_type_II_errors) can occur.

Heap memory allocation has to be synchronized with its actual usage in any program to be reused as much as possible. For example, if the only pointer to a heap memory allocation goes out of scope or has its value overwritten before it is deallocated explicitly, then that memory cannot be recovered for later reuse and is essentially lost to the program, a phenomenon known as a *[memory leak](//en.wikipedia.org/wiki/Memory_leak)*. Conversely, it is possible for memory to be freed but referenced subsequently, leading to unpredictable results. Typically, the failure symptoms appear in a portion of the program unrelated to the code that causes the error, making it difficult to diagnose the failure. Such issues are ameliorated in languages with [automatic garbage collection](//en.wikipedia.org/wiki/Garbage_collection_(computer_science)).

The C programming language uses [libraries](//en.wikipedia.org/wiki/Library_(computing)) as its primary method of extension. In C, a library is a set of functions contained within a single "archive" file. Each library typically has a [header file](//en.wikipedia.org/wiki/Header_file), which contains the prototypes of the functions contained within the library that may be used by a program, and declarations of special data types and macro symbols used with these functions. For a program to use a library, it must include the library's header file, and the library must be linked with the program, which in many cases requires [compiler flags](//en.wikipedia.org/wiki/Compiler_flag) (e.g., `-lm`, shorthand for "link the math library").

The most common C library is the [C standard library](//en.wikipedia.org/wiki/C_standard_library), which is specified by the [ISO](//en.wikipedia.org/wiki/ISO_standard) and [ANSI C](//en.wikipedia.org/wiki/ANSI_C) standards and comes with every C implementation (implementations which target limited environments such as [embedded systems](//en.wikipedia.org/wiki/Embedded_system) may provide only a subset of the standard library). This library supports stream input and output, memory allocation, mathematics, character strings, and time values. Several separate standard headers (for example, `stdio.h`) specify the interfaces for these and other standard library facilities.

Another common set of C library functions are those used by applications specifically targeted for [Unix](//en.wikipedia.org/wiki/Unix) and [Unix-like](//en.wikipedia.org/wiki/Unix-like) systems, especially functions which provide an interface to the [kernel](//en.wikipedia.org/wiki/Kernel_(operating_system)). These functions are detailed in various standards such as [POSIX](//en.wikipedia.org/wiki/POSIX) and the [Single UNIX Specification](//en.wikipedia.org/wiki/Single_UNIX_Specification).

Since many programs have been written in C, there are a wide variety of other libraries available. Libraries are often written in C because C compilers generate efficient [object code](//en.wikipedia.org/wiki/Object_code); programmers then create interfaces to the library so that the routines can be used from higher-level languages like [Java](//en.wikipedia.org/wiki/Java_(programming_language)), [Perl](//en.wikipedia.org/wiki/Perl), and [Python](//en.wikipedia.org/wiki/Python_(programming_language)).

#### File handling and streams

[[edit](//en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=26)]

File input and output (I/O) is not part of the C language itself but instead is handled by libraries (such as the C standard library) and their associated header files (e.g. `stdio.h`). File handling is generally implemented through high-level I/O which works through [streams](//en.wikipedia.org/wiki/Stream_(computing)). A stream is from this perspective a data flow that is independent of devices, while a file is a concrete device. The high-level I/O is done through the association of a stream to a file. In the C standard library, a [buffer](//en.wikipedia.org/wiki/Data_buffer) (a memory area or queue) is temporarily used to store data before it is sent to the final destination. This reduces the time spent waiting for slower devices, for example a [hard drive](//en.wikipedia.org/wiki/Hard_drive) or [solid-state drive](//en.wikipedia.org/wiki/Solid-state_drive). Low-level I/O functions are not part of the standard C library[*[clarification needed](//en.wikipedia.org/wiki/Wikipedia:Please_clarify)*] but are generally part of "bare metal" programming (programming that is independent of any [operating system](//en.wikipedia.org/wiki/Operating_system) such as most [embedded programming](//en.wikipedia.org/wiki/Embedded_programming)). With few exceptions, implementations include low-level I/O.

A number of tools have been developed to help C programmers find and fix statements with undefined behavior or possibly erroneous expressions, with greater rigor than that provided by the compiler.

Automated source code checking and auditing tools exist, such as [Lint](//en.wikipedia.org/wiki/Lint_(software)). A common practice is to use Lint to detect questionable code when a program is first written. Once a program passes Lint, it is then compiled using the C compiler. Also, many compilers can optionally warn about syntactically valid constructs that are likely to actually be errors. [MISRA C](//en.wikipedia.org/wiki/MISRA_C) is a proprietary set of guidelines to avoid such questionable code, developed for embedded systems.

There are also compilers, libraries, and operating system level mechanisms for performing actions that are not a standard part of C, such as [bounds checking](//en.wikipedia.org/wiki/Bounds_checking) for arrays, detection of [buffer overflow](//en.wikipedia.org/wiki/Buffer_overflow), [serialization](//en.wikipedia.org/wiki/Serialization), [dynamic memory](//en.wikipedia.org/wiki/Dynamic_memory) tracking, and [automatic garbage collection](//en.wikipedia.org/wiki/Automatic_garbage_collection).

Memory management checking tools like [Purify](//en.wikipedia.org/wiki/IBM_Rational_Purify) or [Valgrind](//en.wikipedia.org/wiki/Valgrind) and linking with libraries containing special versions of the [memory allocation functions](//en.wikipedia.org/wiki/C_dynamic_memory_allocation) can help uncover run-time errors in memory usage.

C has been widely used to implement [end-user](//en.wikipedia.org/wiki/End_user) and system-level applications.

### Rationale for use in systems programming

[[edit](//en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=29)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/1/10/The_C_Programming_Language.png/250px-The_C_Programming_Language.png)](//en.wikipedia.org/wiki/File:The_C_Programming_Language.png)

Some software written in C

C is widely used for [systems programming](//en.wikipedia.org/wiki/Systems_programming) in implementing [operating systems](//en.wikipedia.org/wiki/Operating_system) and [embedded system](//en.wikipedia.org/wiki/Embedded_system) applications. This is for several reasons:

* The C language permits platform hardware and memory to be accessed with pointers and [type punning](//en.wikipedia.org/wiki/Type_punning), so system-specific features (e.g. [Control/Status Registers](//en.wikipedia.org/wiki/Control/Status_Register), [I/O registers](//en.wikipedia.org/wiki/Memory-mapped_I/O)) can be configured and used with code written in C – it allows fullest control of the platform it is running on.
* The code generated by compilation does not demand many [system features](//en.wikipedia.org/wiki/Runtime_system), and can be invoked from some boot code in a straightforward manner – it is simple to execute.
* The C language statements and expressions typically map well to sequences of instructions for the target processor, and consequently there is a low [run-time](//en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)) demand on system resources – it is fast to execute.
* With its rich set of operators, the C language can use many of the features of target CPUs. Where a particular CPU has more esoteric instructions, a language variant can be constructed with perhaps [intrinsic functions](//en.wikipedia.org/wiki/Intrinsic_function) to exploit those instructions – it can use practically all the target CPU's features.
* The language makes it easy to overlay structures onto blocks of binary data, allowing the data to be comprehended, navigated and modified – it can write data structures, even file systems.
* The language supports a rich set of operators, including bit manipulation, for integer arithmetic and logic, and perhaps different sizes of floating point numbers – it can process appropriately structured data effectively.
* C is a fairly small language, with only a handful of statements, and without too many features that generate extensive target code – it is comprehensible.
* C has direct control over memory allocation and deallocation, which gives reasonable efficiency and predictable timing to memory-handling operations, without any concerns for sporadic *[stop-the-world](//en.wikipedia.org/wiki/Stop-the-world)* garbage collection events – it has predictable performance.
* C permits the use and implementation of different [memory allocation](//en.wikipedia.org/wiki/C_dynamic_memory_allocation) schemes, including a typical `malloc` and `free`; a more sophisticated mechanism with [*arenas*](//en.wikipedia.org/wiki/Region-based_memory_management); or a version for an [OS kernel](//en.wikipedia.org/wiki/OS_kernel) that may suit [DMA](//en.wikipedia.org/wiki/Direct_memory_access), use within [interrupt handlers](//en.wikipedia.org/wiki/Interrupt_handler), or integrated with the [virtual memory](//en.wikipedia.org/wiki/Virtual_memory) system.
* Depending on the linker and environment, C code can also call libraries written in [assembly language](//en.wikipedia.org/wiki/Assembly_language), and may be called from assembly language – it interoperates well with other lower-level code.
* C and its [calling conventions](//en.wikipedia.org/wiki/Calling_convention) and linker structures are commonly used in conjunction with other high-level languages, with calls both to C and from C supported – it interoperates well with other high-level code.
* C has a mature and broad ecosystem, including libraries, frameworks, open source compilers, debuggers and utilities, and is the de facto standard. It is likely the drivers already exist in C, or that there is a similar CPU architecture as a back-end of a C compiler, so there is reduced incentive to choose another language.

Computer games are often built from a combination of languages. C has featured significantly, especially for those games attempting to obtain best performance from computer platforms. Examples include [Doom](//en.wikipedia.org/wiki/Doom_(1993_video_game)) from 1993.

Historically, C was sometimes used for [web development](//en.wikipedia.org/wiki/Web_development) using the [Common Gateway Interface](//en.wikipedia.org/wiki/Common_Gateway_Interface) (CGI) as a "gateway" for information between the web application, the server, and the browser. C may have been chosen over [interpreted languages](//en.wikipedia.org/wiki/Interpreted_language) because of its speed, stability, and near-universal availability. It is no longer common practice for web development to be done in C, and many other [web development languages](//en.wikipedia.org/wiki/Web_development#Server-side_languages) are popular. Applications where C-based web development continues include the [HTTP](//en.wikipedia.org/wiki/HTTP) configuration pages on [routers](//en.wikipedia.org/wiki/Router_(computing)), [IoT](//en.wikipedia.org/wiki/IoT) devices and similar, although even here some projects have parts in higher-level languages e.g. the use of [Lua](//en.wikipedia.org/wiki/Lua) within [OpenWRT](//en.wikipedia.org/wiki/OpenWRT).

Two popular [web servers](//en.wikipedia.org/wiki/Web_server), [Apache HTTP Server](//en.wikipedia.org/wiki/Apache_HTTP_Server) and [Nginx](//en.wikipedia.org/wiki/Nginx), are written in C.[*[better source needed](//en.wikipedia.org/wiki/Wikipedia:Verifiability#Questionable_sources)*] C's close-to-the-metal approach allows for the construction of these high-performance software systems.[*[citation needed](//en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

C is sometimes used as an [intermediate language](//en.wikipedia.org/wiki/Intermediate_language) by implementations of other languages. This approach may be used for portability or convenience; by using C as an intermediate language, additional machine-specific code generators are not necessary. C has some features, such as line-number preprocessor directives and optional superfluous commas at the end of initializer lists, that support compilation of generated code. However, some of C's shortcomings have prompted the development of other [C-based languages](//en.wikipedia.org/wiki/List_of_C-family_programming_languages) specifically designed for use as intermediate languages, such as [C--](//en.wikipedia.org/wiki/C--). Also, contemporary major compilers [GCC](//en.wikipedia.org/wiki/GNU_Compiler_Collection) and [LLVM](//en.wikipedia.org/wiki/LLVM) both feature an [intermediate representation](//en.wikipedia.org/wiki/Intermediate_representation) that is not C, and those compilers support front ends for many languages including C.

### Computationally intensive libraries

[[edit](//en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=33)]

C enables programmers to create efficient implementations of algorithms and data structures, because the layer of abstraction from hardware is thin, and its overhead is low, an important criterion for computationally intensive programs. For example, the [GNU Multiple Precision Arithmetic Library](//en.wikipedia.org/wiki/GNU_Multiple_Precision_Arithmetic_Library), the [GNU Scientific Library](//en.wikipedia.org/wiki/GNU_Scientific_Library), [Mathematica](//en.wikipedia.org/wiki/Mathematica), and [MATLAB](//en.wikipedia.org/wiki/MATLAB) are completely or partially written in C. Many languages support calling library functions in C; for example, the [Python](//en.wikipedia.org/wiki/Python_(programming_language))-based framework [NumPy](//en.wikipedia.org/wiki/NumPy) uses C for the high-performance and hardware-interacting aspects.

### Other languages are written in C

[[edit](//en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=34)]

A consequence of C's wide availability and efficiency is that [compilers](//en.wikipedia.org/wiki/Compiler), libraries and [interpreters](//en.wikipedia.org/wiki/Interpreter_(computing)) of other programming languages are often implemented in C. For example, the [reference implementations](//en.wikipedia.org/wiki/Reference_implementation) of [Python](//en.wikipedia.org/wiki/Python_(programming_language)), [Perl](//en.wikipedia.org/wiki/Perl), [Ruby](//en.wikipedia.org/wiki/Ruby_(programming_language)), and [PHP](//en.wikipedia.org/wiki/PHP) are written in C.

Ritchie himself joked about the limitations of the language that he created:

> the power of assembly language and the convenience of ... assembly language

While C is popular, influential and hugely successful, it has drawbacks, including:

* The standard [dynamic memory](//en.wikipedia.org/wiki/Dynamic_memory) handling with `malloc` and `free` is prone to mistakes. Improper use can lead to [memory leaks](//en.wikipedia.org/wiki/Memory_leaks) and [dangling pointers](//en.wikipedia.org/wiki/Dangling_pointers).
* The use of pointers and the direct manipulation of memory means corruption of memory is possible.
* There is [type checking](//en.wikipedia.org/wiki/Type_checking), yet it does not apply to some areas like [variadic functions](//en.wikipedia.org/wiki/Variadic_functions), and the type checking can be trivially or inadvertently circumvented. It is [weakly typed](//en.wikipedia.org/wiki/Strong_and_weak_typing), despite being statically typed.
* Since the code generated by the compiler contains few run-time checks, there is a burden on the programmer to consider all possible outcomes, to protect against buffer overruns, array bounds checking, [stack overflows](//en.wikipedia.org/wiki/Stack_overflow), memory exhaustion, and consider [race conditions](//en.wikipedia.org/wiki/Race_condition#In_software), thread isolation, etc.
* The use of pointers and the run-time manipulation of these enables two ways to access the same data (aliasing), which is not always determinable at compile time. This means that some optimizations that may be available to some other languages, such as Fortran, are not possible in C. For this reason, Fortran is sometimes considered faster.[*[citation needed](//en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]
* Some of the standard library functions, e.g. `scanf` or `strncat`, can lead to [buffer overruns](//en.wikipedia.org/wiki/C_standard_library#Buffer_overflow_vulnerabilities).
* There is limited standardization in support for low-level variants in generated code, such as different function [calling conventions](//en.wikipedia.org/wiki/Calling_conventions) and [ABIs](//en.wikipedia.org/wiki/Application_binary_interface); different [structure packing](//en.wikipedia.org/wiki/Data_structure_alignment) conventions; and different byte ordering within larger integers (including endianness). In many language implementations, some of these options may be handled with the preprocessor directive `#pragma`, and some with additional keywords e.g. use `__cdecl` calling convention. The directive and options are not consistently supported.
* [String handling](//en.wikipedia.org/wiki/C_string_handling) using the standard library is code-intensive, with explicit memory management required.
* The language does not directly support object orientation, [introspection](//en.wikipedia.org/wiki/Type_introspection), run-time expression evaluation (like `eval` in JavaScript), garbage collection, etc.
* There are few guards against misuse of language features, which may enable [unmaintainable](//en.wikipedia.org/wiki/Software_maintenance) code. In particular, the [C preprocessor](//en.wikipedia.org/wiki/C_preprocessor) can hide troubling effects such as double evaluation and worse. This capability for obfuscated code has been celebrated with competitions such as the [International Obfuscated C Code Contest](//en.wikipedia.org/wiki/International_Obfuscated_C_Code_Contest) and the [Underhanded C Contest](//en.wikipedia.org/wiki/Underhanded_C_Contest).
* C lacks standard support for [exception handling](//en.wikipedia.org/wiki/Exception_handling) and only offers [return codes](//en.wikipedia.org/wiki/Return_code) for error checking. The [`setjmp` and `longjmp`](//en.wikipedia.org/wiki/Setjmp.h) standard library functions have been used to implement a try-catch mechanism via macros. Also, `goto` statements are commonly used for error handling.[*[citation needed](//en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

### Mitigations for C's problems

[[edit](//en.wikipedia.org/w/index.php?title=C_(programming_language)&action=edit&section=36)]

For some purposes, restricted styles of C have been adopted, e.g. [MISRA C](//en.wikipedia.org/wiki/MISRA_C) or [CERT C](//en.wikipedia.org/wiki/CERT_C), in an attempt to reduce the opportunity for unwanted behaviour. Databases such as [CWE](//en.wikipedia.org/wiki/Common_Weakness_Enumeration) attempt to count the ways that systems in general, especially those coded in C, have potential vulnerabilities, along with recommendations for mitigation.

There are [tools](#Language_tools) that can mitigate some of the drawbacks. Contemporary C compilers include checks which may generate warnings to help identify many potential bugs.

C's use of pointers can be made less risky by use of [instruction set architecture](//en.wikipedia.org/wiki/Instruction_set_architecture) extensions such as *[CHERI](//en.wikipedia.org/wiki/CHERI)* or *Permission Overlay Extensions*. These techniques change the fundamental nature of pointers at a hardware level to include bounds checks and purposes, which can help prevent buffer over-runs and inappropriate heap accesses.

Since the early 2020s the Linux kernel has sections written in [Rust](//en.wikipedia.org/wiki/Rust_(programming_language)), a language which has specific measures to improve safety.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/TIOBE_Index.webp/250px-TIOBE_Index.webp.png)](//en.wikipedia.org/wiki/File:TIOBE_Index.webp)

[TIOBE index](//en.wikipedia.org/wiki/TIOBE_index)

Many languages developed after C were influenced by and borrowed aspects of C, including [C++](//en.wikipedia.org/wiki/C%2B%2B), [C#](//en.wikipedia.org/wiki/C_Sharp_(programming_language)), [C shell](//en.wikipedia.org/wiki/C_shell), [D](//en.wikipedia.org/wiki/D_(programming_language)), [Go](//en.wikipedia.org/wiki/Go_(programming_language)), [Java](//en.wikipedia.org/wiki/Java_(programming_language)), [JavaScript](//en.wikipedia.org/wiki/JavaScript), [Julia](//en.wikipedia.org/wiki/Julia_(programming_language)), [Limbo](//en.wikipedia.org/wiki/Limbo_(programming_language)), [LPC](//en.wikipedia.org/wiki/LPC_(programming_language)), [Objective-C](//en.wikipedia.org/wiki/Objective-C), [Perl](//en.wikipedia.org/wiki/Perl), [PHP](//en.wikipedia.org/wiki/PHP), [Python](//en.wikipedia.org/wiki/Python_(programming_language)), [Ruby](//en.wikipedia.org/wiki/Ruby_(programming_language)), [Rust](//en.wikipedia.org/wiki/Rust_(programming_language)), [Swift](//en.wikipedia.org/wiki/Swift_(programming_language)), [Verilog](//en.wikipedia.org/wiki/Verilog) and [SystemVerilog](//en.wikipedia.org/wiki/SystemVerilog). Some claim that the most pervasive influence has been syntactical – that these languages combine the statement and expression syntax of C with type systems, data models and large-scale program structures that differ from those of C, sometimes radically.

Several C or near-C interpreters exist, including [Ch](//en.wikipedia.org/wiki/Ch_(computer_programming)) and [CINT](//en.wikipedia.org/wiki/CINT), which can also be used for scripting.

When [object-oriented programming](//en.wikipedia.org/wiki/Object-oriented_programming) languages became popular, [C++](//en.wikipedia.org/wiki/C%2B%2B) and [Objective-C](//en.wikipedia.org/wiki/Objective-C) were two different extensions of C that provided object-oriented capabilities. Both languages were originally implemented as [source-to-source compilers](//en.wikipedia.org/wiki/Source-to-source_compiler); source code was translated into C, and then compiled with a C compiler.

The [C++](//en.wikipedia.org/wiki/C%2B%2B) programming language (originally named "C with [Classes](//en.wikipedia.org/wiki/Class_(programming))") was devised by [Bjarne Stroustrup](//en.wikipedia.org/wiki/Bjarne_Stroustrup) as an approach to providing [object-oriented](//en.wikipedia.org/wiki/Object-oriented_programming) functionality with a C-like syntax. C++ adds greater typing strength, scoping, and other tools useful in object-oriented programming, and permits [generic programming](//en.wikipedia.org/wiki/Generic_programming) via templates. Nearly a superset of C, C++ now[*[when?](//en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Dates_and_numbers#Chronological_items)*] supports most of C, with [a few exceptions](//en.wikipedia.org/wiki/Compatibility_of_C_and_C%2B%2B).

[Objective-C](//en.wikipedia.org/wiki/Objective-C) was originally a thin layer on top of C, and remains a strict [superset](//en.wikipedia.org/wiki/Superset) of C that permits object-oriented programming using a hybrid dynamic/static typing paradigm. Objective-C derives its syntax from both C and [Smalltalk](//en.wikipedia.org/wiki/Smalltalk): syntax that involves preprocessing, expressions, function declarations, and function calls is inherited from C, while the syntax for object-oriented features was originally taken from Smalltalk.

In addition to [C++](//en.wikipedia.org/wiki/C%2B%2B) and [Objective-C](//en.wikipedia.org/wiki/Objective-C), [Ch](//en.wikipedia.org/wiki/Ch_(computer_programming)), [Cilk](//en.wikipedia.org/wiki/Cilk), and [Unified Parallel C](//en.wikipedia.org/wiki/Unified_Parallel_C) are nearly supersets of C.

1. **[^](#cite_ref-5)** "Thompson had made a brief attempt to produce a system coded in an early version of C—before structures—in 1972, but gave up the effort."
2. **[^](#cite_ref-9)** "The scheme of type composition adopted by C owes considerable debt to Algol 68, although it did not, perhaps, emerge in a form that Algol's adherents would approve of."
3. **[^](#cite_ref-12)** Pronounced , like the letter '[c](//en.wikipedia.org/wiki/C)'.
4. **[^](#cite_ref-21)** The original example code will compile on most modern compilers that are not in strict standard compliance mode, but it does not fully conform to the requirements of either C89 or C99. In fact, C99 requires that a diagnostic message be produced.
5. **[^](#cite_ref-23)** Return value `0` is typically used in this context to indicate success.
6. **[^](#cite_ref-52)** Code of `print_array` (not shown) slightly differs also, because of the type of *p*, being a pointer to the 2D array in the malloc'd version, and just a 2D array in the auto VNA version.

1. ^ [***a***](#cite_ref-C_in_a_Nutshell_1-0) [***b***](#cite_ref-C_in_a_Nutshell_1-1) Prinz, Peter; Crawford, Tony (December 16, 2005). [*C in a Nutshell*](https://books.google.com/books?id=4Mfe4sAMFUYC). O'Reilly Media, Inc. p. 3. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-596-55071-4](//en.wikipedia.org/wiki/Special:BookSources/978-0-596-55071-4).
2. **[^](#cite_ref-6)** ["N3221 – Editor's Report, Post January 2024 Strasbourg France Meeting"](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3221.htm). *ISO/IEC JTC1/SC22/WG14*. Open Standards. February 21, 2024. Retrieved May 24, 2024.
3. ^ [***a***](#cite_ref-vinsp_10-0) [***b***](#cite_ref-vinsp_10-1) ["Verilog HDL (and C)"](https://web.archive.org/web/20131106064022/http://cs.anu.edu.au/courses/ENGN3213/lectures/lecture6_VERILOG_2010.pdf) (PDF). The Research School of Computer Science at the Australian National University. June 3, 2010. Archived from [the original](http://cs.anu.edu.au/courses/ENGN3213/lectures/lecture6_VERILOG_2010.pdf) (PDF) on November 6, 2013. Retrieved August 19, 2013. "1980s: Verilog first introduced; Verilog inspired by the C programming language"
4. **[^](#cite_ref-11)** ["The name is based on, and pronounced like the letter C in the English alphabet"](https://web.archive.org/web/20221117151137/https://eng.ichacha.net/pronounce/the%20c%20programming%20language.html). *the c programming language sound*. English Chinese Dictionary. Archived from [the original](https://eng.ichacha.net/pronounce/the%20c%20programming%20language.html) on November 17, 2022. Retrieved November 17, 2022.
5. **[^](#cite_ref-13)** Munoz, Daniel. ["After All These Years, the World is Still Powered by C Programming | Toptal"](https://www.toptal.com/c/after-all-these-years-the-world-is-still-powered-by-c-programming). *Toptal Engineering Blog*. Retrieved June 15, 2024.
6. **[^](#cite_ref-14)** ["C Language Drops to Lowest Popularity Rating"](https://web.archive.org/web/20220822225609/https://www.developer.com/news/c-language-drops-to-lowest-popularity-rating/). *Developer.com*. August 9, 2016. Archived from [the original](https://www.developer.com/news/c-language-drops-to-lowest-popularity-rating/) on August 22, 2022. Retrieved August 1, 2022.
7. **[^](#cite_ref-langpop_16-0)** ["Programming Language Popularity"](https://web.archive.org/web/20090116080326/http://www.langpop.com/). 2009. Archived from [the original](https://www.langpop.com/) on January 16, 2009. Retrieved January 16, 2009.
8. **[^](#cite_ref-TIOBE-2009_17-0)** ["TIOBE Programming Community Index"](https://web.archive.org/web/20090504181627/http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html). 2009. Archived from [the original](https://www.tiobe.com/index.php/content/paperinfo/tpci/index.html) on May 4, 2009. Retrieved May 6, 2009.
9. **[^](#cite_ref-ward198308_18-0)** Ward, Terry A. (August 1983). ["Annotated C / A Bibliography of the C Language"](https://archive.org/stream/byte-magazine-1983-08/1983_08_BYTE_08-08_The_C_Language#page/n267/mode/2up). *Byte*. p. 268. Retrieved January 31, 2015.
10. **[^](#cite_ref-19)** ["TIOBE Index for September 2024"](https://web.archive.org/web/20240918165843/https://www.tiobe.com/tiobe-index/). Archived from [the original](https://www.tiobe.com/tiobe-index/) on September 18, 2024. Retrieved December 16, 2025.
11. ^ [***a***](#cite_ref-bk21st_22-0) [***b***](#cite_ref-bk21st_22-1) [***c***](#cite_ref-bk21st_22-2) [***d***](#cite_ref-bk21st_22-3) [***e***](#cite_ref-bk21st_22-4) [***f***](#cite_ref-bk21st_22-5) [***g***](#cite_ref-bk21st_22-6) [Klemens, Ben](//en.wikipedia.org/wiki/Ben_Klemens) (2013). *21st Century C*. [O'Reilly Media](//en.wikipedia.org/wiki/O%27Reilly_Media). [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4493-2714-9](//en.wikipedia.org/wiki/Special:BookSources/978-1-4493-2714-9).
12. **[^](#cite_ref-NFDsZ_24-0)** Ritchie, Dennis. ["BCPL to B to C"](https://web.archive.org/web/20191212221532/http://www.lysator.liu.se/c/dmr-on-histories.html). *lysator.liu.se*. Archived from [the original](https://www.lysator.liu.se/c/dmr-on-histories.html) on December 12, 2019. Retrieved September 10, 2019.
13. ^ [***a***](#cite_ref-Ars_25-0) [***b***](#cite_ref-Ars_25-1) [***c***](#cite_ref-Ars_25-2) [***d***](#cite_ref-Ars_25-3) [***e***](#cite_ref-Ars_25-4) Jensen, Richard (December 9, 2020). [""A damn stupid thing to do"—the origins of C"](https://web.archive.org/web/20220328143845/https://arstechnica.com/features/2020/12/a-damn-stupid-thing-to-do-the-origins-of-c/). *Ars Technica*. Archived from [the original](https://arstechnica.com/features/2020/12/a-damn-stupid-thing-to-do-the-origins-of-c/) on March 28, 2022. Retrieved March 28, 2022.
14. ^ [***a***](#cite_ref-unixport_26-0) [***b***](#cite_ref-unixport_26-1) [Johnson, S. C.](//en.wikipedia.org/wiki/Stephen_C._Johnson); [Ritchie, D. M.](//en.wikipedia.org/wiki/Dennis_Ritchie) (1978). "Portability of C Programs and the UNIX System". *Bell System Tech. J*. **57** (6): 2021–2048. [CiteSeerX](//en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.138.35](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.138.35). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/j.1538-7305.1978.tb02141.x](https://doi.org/10.1002%2Fj.1538-7305.1978.tb02141.x). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [0005-8580](https://search.worldcat.org/issn/0005-8580). [S2CID](//en.wikipedia.org/wiki/S2CID_(identifier)) [17510065](https://api.semanticscholar.org/CorpusID:17510065). (Note: The PDF is an OCR scan of the original, and contains a rendering of "IBM 370" as "IBM 310".)
15. **[^](#cite_ref-QtqTh_27-0)** [McIlroy, M. D.](//en.wikipedia.org/wiki/Doug_McIlroy) (1987). [*A Research Unix reader: annotated excerpts from the Programmer's Manual, 1971–1986*](https://web.archive.org/web/20171111151817/http://www.cs.dartmouth.edu/~doug/reader.pdf) (PDF) (Technical report). CSTR. Bell Labs. p. 10. 139. Archived from [the original](http://www.cs.dartmouth.edu/~doug/reader.pdf) (PDF) on November 11, 2017. Retrieved February 1, 2015.
16. **[^](#cite_ref-qOvzA_29-0)** "C manual pages". [*FreeBSD Miscellaneous Information Manual*](https://web.archive.org/web/20210121024455/https://nxmnpg.lemoda.net/7/c78) (FreeBSD 13.0 ed.). May 30, 2011. Archived from [the original](https://nxmnpg.lemoda.net/7/c78) on January 21, 2021. Retrieved January 15, 2021. [[1]](https://www.freebsd.org/cgi/man.cgi?query=c78&apropos=0&sektion=0&manpath=FreeBSD+9-current&arch=default&format=html) [Archived](https://web.archive.org/web/20210121033654/https://www.freebsd.org/cgi/man.cgi?query=c78&apropos=0&sektion=0&manpath=FreeBSD+9-current&arch=default&format=html) January 21, 2021, at the [Wayback Machine](//en.wikipedia.org/wiki/Wayback_Machine)
17. **[^](#cite_ref-SkKfZ_31-0)** [Stroustrup, Bjarne](//en.wikipedia.org/wiki/Bjarne_Stroustrup) (2002). [Sibling rivalry: C and C++](https://web.archive.org/web/20140824072719/http://www.stroustrup.com/sibling_rivalry.pdf) (PDF) (Report). AT&T Labs. Archived from [the original](http://stroustrup.com/sibling_rivalry.pdf) (PDF) on August 24, 2014. Retrieved April 14, 2014.
18. **[^](#cite_ref-32)** ["Rationale for American National Standard for Information Systems – Programming Language – C"](https://web.archive.org/web/20240717164722/https://www.cs.man.ac.uk/~pjj/cs211/c_rationale/node2.html). Archived from [the original](https://www.cs.man.ac.uk/~pjj/cs211/c_rationale/node2.html) on July 17, 2024. Retrieved July 17, 2024.
19. **[^](#cite_ref-NWUon_33-0)** [*C Integrity*](https://web.archive.org/web/20180725033429/https://www.iso.org/standard/23909.html). International Organization for Standardization. March 30, 1995. Archived from [the original](https://www.iso.org/standard/23909.html) on July 25, 2018. Retrieved July 24, 2018.
20. **[^](#cite_ref-WG14_34-0)** ["JTC1/SC22/WG14 – C"](https://web.archive.org/web/20180212100115/http://www.open-std.org/JTC1/SC22/WG14/). *Home page*. ISO/IEC. Archived from [the original](http://www.open-std.org/jtc1/sc22/wg14/) on February 12, 2018. Retrieved June 2, 2011.
21. **[^](#cite_ref-YTKIv_35-0)** Andrew Binstock (October 12, 2011). ["Interview with Herb Sutter"](https://web.archive.org/web/20130802070446/http://www.drdobbs.com/cpp/interview-with-herb-sutter/231900562). *[Dr. Dobbs](//en.wikipedia.org/wiki/Dr._Dobbs)*. Archived from [the original](http://www.drdobbs.com/cpp/interview-with-herb-sutter/231900562) on August 2, 2013. Retrieved September 7, 2013.
22. **[^](#cite_ref-36)** ["ISO/IEC 9899:2024 (en) — N3220 working draft"](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3220.pdf) (PDF). Retrieved July 11, 2025.
23. **[^](#cite_ref-N3132_37-0)** ["WG14-N3132 : Revised C23 Schedule"](https://web.archive.org/web/20230609204739/https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3132.pdf) (PDF). *open-std.org*. June 4, 2023. Archived from [the original](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3132.pdf) (PDF) on June 9, 2023.
24. **[^](#cite_ref-N3220_38-0)** ["WG14-N3220 : Working Draft, C2y"](https://web.archive.org/web/20240226053735/https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3220.pdf) (PDF). *open-std.org*. February 21, 2024. Archived from [the original](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3220.pdf) (PDF) on February 26, 2024.
25. **[^](#cite_ref-TR18037_39-0)** ["TR 18037: Embedded C"](https://web.archive.org/web/20210225224616/https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1169.pdf) (PDF). *open-std.org*. April 4, 2006. ISO/IEC JTC1 SC22 WG14 N1169. Archived from [the original](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1169.pdf) (PDF) on February 25, 2021. Retrieved July 26, 2011.
26. **[^](#cite_ref-h&s5e_40-0)** Harbison, Samuel P.; [Steele, Guy L.](//en.wikipedia.org/wiki/Guy_L._Steele,_Jr.) (2002). *C: A Reference Manual* (5th ed.). [Englewood Cliffs, NJ](//en.wikipedia.org/wiki/Englewood_Cliffs,_NJ): [Prentice Hall](//en.wikipedia.org/wiki/Prentice_Hall). [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-089592-9](//en.wikipedia.org/wiki/Special:BookSources/978-0-13-089592-9). Contains a [BNF](//en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) grammar for C.
27. ^ [***a***](#cite_ref-draft2007_43-0) [***b***](#cite_ref-draft2007_43-1) 
    ["Committee Draft ISO/IEC 9899:TC3: 5.2.1 Character sets"](https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1256.pdf).
    2007.
28. **[^](#cite_ref-ISOIEC_9899_44-0)** ["ISO/IEC 9899:201x (ISO C11) Committee Draft"](https://web.archive.org/web/20171222215122/http://www.open-std.org/jtc1/sc22/wg14/www/docs/n1548.pdf) (PDF). *open-std.org*. December 2, 2010. Archived from [the original](http://www.open-std.org/jtc1/sc22/wg14/www/docs/n1548.pdf) (PDF) on December 22, 2017. Retrieved September 16, 2011.
29. **[^](#cite_ref-AutoTX-8_46-0)** ["10 Common Programming Mistakes in C++"](https://web.archive.org/web/20081021080953/http://www.cs.ucr.edu/~nxiao/cs10/errors.htm). *Cs.ucr.edu*. Archived from [the original](http://www.cs.ucr.edu/~nxiao/cs10/errors.htm) on October 21, 2008. Retrieved June 26, 2009.
30. **[^](#cite_ref-AutoTX-9_47-0)** Schultz, Thomas (2004). [*C and the 8051*](https://books.google.com/books?id=rI0c8kWbxooC&pg=PT47) (3rd ed.). Otsego, MI: PageFree Publishing Inc. p. 20. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-58961-237-2](//en.wikipedia.org/wiki/Special:BookSources/978-1-58961-237-2). Retrieved February 10, 2012.
31. **[^](#cite_ref-Nmlwr_48-0)** Feuer, Alan R.; Gehani, Narain H. (March 1982). "Comparison of the Programming Languages C and Pascal". *ACM Computing Surveys*. **14** (1): 73–92. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/356869.356872](https://doi.org/10.1145%2F356869.356872). [S2CID](//en.wikipedia.org/wiki/S2CID_(identifier)) [3136859](https://api.semanticscholar.org/CorpusID:3136859).
32. **[^](#cite_ref-fedoraproject_50-0)** For example, gcc provides \_FORTIFY\_SOURCE. ["Security Features: Compile Time Buffer Checks (FORTIFY\_SOURCE)"](https://web.archive.org/web/20070107153447/http://fedoraproject.org/wiki/Security/Features). fedoraproject.org. Archived from [the original](https://fedoraproject.org/wiki/Security/Features) on January 7, 2007. Retrieved August 5, 2012.
33. **[^](#cite_ref-Programming_with_C_51-0)** เอี่ยมสิริวงศ์, โอภาศ (2016). *Programming with C*. Bangkok, Thailand: SE-EDUCATION PUBLIC COMPANY LIMITED. pp. 225–230. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-616-08-2740-4](//en.wikipedia.org/wiki/Special:BookSources/978-616-08-2740-4).
34. **[^](#cite_ref-Raymond1996_53-0)** [Raymond, Eric S.](//en.wikipedia.org/wiki/Eric_S._Raymond) (October 11, 1996). [*The New Hacker's Dictionary*](https://books.google.com/books?id=g80P_4v4QbIC&pg=PA432) (3rd ed.). MIT Press. p. 432. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-68092-9](//en.wikipedia.org/wiki/Special:BookSources/978-0-262-68092-9). Retrieved August 5, 2012.
35. **[^](#cite_ref-MI2L0_54-0)** ["Man Page for lint (freebsd Section 1)"](http://www.unix.com/man-page/FreeBSD/1/lint). *unix.com*. May 24, 2001. Retrieved July 15, 2014.
36. **[^](#cite_ref-55)** Hardison, Nate. ["CS107 Valgrind Memcheck"](https://web.stanford.edu/class/archive/cs/cs107/cs107.1236/resources/valgrind.html). *web.stanford.edu*. Retrieved June 23, 2023.
37. **[^](#cite_ref-56)** Hastings, Reed; Joyce, Bob. ["Purify: Fast Detection of Memory Leaks and Access Errors"](https://web.stanford.edu/class/cs343/resources/purify.pdf) (PDF). *Pure Software Inc.*: 9.
38. **[^](#cite_ref-57)** Munoz, Daniel. ["After All These Years, the World is Still Powered by C Programming"](https://www.toptal.com/c/after-all-these-years-the-world-is-still-powered-by-c-programming). *Toptal Engineering Blog*. Retrieved November 17, 2023.
39. **[^](#cite_ref-Zh3CW_58-0)** Dale, Nell B.; Weems, Chip (2014). *Programming and problem solving with C++* (6th ed.). Burlington, Massachusetts: Jones & Bartlett Learning. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4496-9428-9](//en.wikipedia.org/wiki/Special:BookSources/978-1-4496-9428-9). [OCLC](//en.wikipedia.org/wiki/OCLC_(identifier)) [894992484](https://search.worldcat.org/oclc/894992484).
40. **[^](#cite_ref-59)** ["Development of Doom"](https://doomwiki.org/wiki/Development_of_Doom). *DoomWiki.org*. March 2, 2025. Retrieved March 2, 2025.
41. **[^](#cite_ref-Dobbs_1995_60-0)** *Dr. Dobb's Sourcebook*. U.S.: Miller Freeman, Inc. November–December 1995.
42. **[^](#cite_ref-linuxjournal_2005_61-0)** ["Using C for CGI Programming"](https://web.archive.org/web/20100213075858/http://www.linuxjournal.com/article/6863). linuxjournal.com. March 1, 2005. Archived from [the original](http://www.linuxjournal.com/article/6863) on February 13, 2010. Retrieved January 4, 2010.
43. **[^](#cite_ref-62)** Perkins, Luc (September 17, 2013). ["Web development in C: crazy? Or crazy like a fox?"](https://web.archive.org/web/20141004135317/https://medium.com/@lucperkins/web-development-in-c-crazy-or-crazy-like-a-fox-ff723209f8f5). *Medium*. Archived from [the original](https://medium.com/@lucperkins/web-development-in-c-crazy-or-crazy-like-a-fox-ff723209f8f5) on October 4, 2014. Retrieved April 8, 2022.
44. **[^](#cite_ref-63)** ["What programming language does NGINX use?"](https://mull-overthing.com/what-programming-language-does-nginx-use/).
45. **[^](#cite_ref-64)** ["What is Apache and What Does it Do for Website Development?"](https://www.greengeeks.com/blog/what-is-apache/). February 15, 2022.
46. **[^](#cite_ref-65)** ["C – the mother of all languages"](https://web.archive.org/web/20210531161841/https://ict.iitk.ac.in/c-the-mother-of-all-languages/). *ICT Academy at IITK*. November 13, 2018. Archived from [the original](https://ict.iitk.ac.in/c-the-mother-of-all-languages/) on May 31, 2021. Retrieved October 11, 2022.
47. **[^](#cite_ref-66)** ["1. Extending Python with C or C++"](https://web.archive.org/web/20121105232707/https://docs.python.org/3/extending/extending.html). *Python 3.10.7 documentation*. Archived from [the original](https://docs.python.org/3/extending/extending.html) on November 5, 2012. Retrieved October 11, 2022.
48. **[^](#cite_ref-67)** Conrad, Michael (January 22, 2018). ["An overview of the Perl 5 engine"](https://web.archive.org/web/20220526105419/https://opensource.com/article/18/1/perl-5-engine). *Opensource.com*. Archived from [the original](https://opensource.com/article/18/1/perl-5-engine) on May 26, 2022. Retrieved October 11, 2022.
49. **[^](#cite_ref-68)** ["To Ruby From C and C++"](https://web.archive.org/web/20130812003928/https://www.ruby-lang.org/en/documentation/ruby-from-other-languages/to-ruby-from-c-and-cpp/). *Ruby Programming Language*. Archived from [the original](https://www.ruby-lang.org/en/documentation/ruby-from-other-languages/to-ruby-from-c-and-cpp/) on August 12, 2013. Retrieved October 11, 2022.
50. **[^](#cite_ref-69)** Para, Michael (August 3, 2022). ["What is PHP? How to Write Your First PHP Program"](https://web.archive.org/web/20220804050401/https://www.freecodecamp.org/news/what-is-php-write-your-first-php-program/). *freeCodeCamp*. Archived from [the original](https://www.freecodecamp.org/news/what-is-php-write-your-first-php-program/) on August 4, 2022. Retrieved October 11, 2022.
51. **[^](#cite_ref-70)** Metz, Cade (October 13, 2011). ["Dennis Ritchie: The Shoulders Steve Jobs Stood On"](https://web.archive.org/web/20220412005125/http://www.wired.com/2011/10/thedennisritchieeffect/). *Wired*. Archived from [the original](https://www.wired.com/2011/10/thedennisritchieeffect/) on April 12, 2022. Retrieved April 19, 2022.
52. **[^](#cite_ref-71)** Internet Security Research Group. ["What is memory safety and why does it matter?"](https://www.memorysafety.org/docs/memory-safety/). *Prossimo*. Retrieved March 3, 2025.
53. **[^](#cite_ref-72)** corob-msft (March 31, 2022). ["Pragma directives and the \_\_pragma and \_Pragma keywords"](https://web.archive.org/web/20220924075131/https://learn.microsoft.com/en-us/cpp/preprocessor/pragma-directives-and-the-pragma-keyword). *Microsoft Learn*. Archived from [the original](https://learn.microsoft.com/en-us/cpp/preprocessor/pragma-directives-and-the-pragma-keyword) on September 24, 2022. Retrieved September 24, 2022.
54. **[^](#cite_ref-73)** ["Pragmas (The C Preprocessor)"](https://web.archive.org/web/20020617041757/https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html). *GCC, the GNU Compiler Collection*. Archived from [the original](https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html) on June 17, 2002. Retrieved September 24, 2022.
55. **[^](#cite_ref-74)** ["Pragmas"](https://web.archive.org/web/20220410113529/https://www.intel.com/content/www/us/en/develop/documentation/cpp-compiler-developer-guide-and-reference/top/compiler-reference/pragmas.html). *Intel C++ Compiler Classic Developer Guide and Reference*. Intel. Archived from [the original](https://www.intel.com/content/www/us/en/develop/documentation/cpp-compiler-developer-guide-and-reference/top/compiler-reference/pragmas.html) on April 10, 2022. Retrieved April 10, 2022.
56. **[^](#cite_ref-75)** ["In praise of the C preprocessor"](https://apenwarr.ca/log/20070813). *apenwarr*. August 13, 2007. Retrieved July 9, 2023.
57. **[^](#cite_ref-76)** Roberts, Eric S. (March 21, 1989). ["Implementing Exceptions in C"](https://web.archive.org/web/20170115152453/http://bitsavers.informatik.uni-stuttgart.de/pdf/dec/tech_reports/SRC-RR-40.pdf) (PDF). [DEC Systems Research Center](//en.wikipedia.org/wiki/DEC_Systems_Research_Center). SRC-RR-40. Archived from [the original](http://bitsavers.informatik.uni-stuttgart.de/pdf/dec/tech_reports/SRC-RR-40.pdf) (PDF) on January 15, 2017. Retrieved January 4, 2022.
58. **[^](#cite_ref-77)** ["Secure Coding Overview"](https://apps.dtic.mil/sti/pdfs/AD1090471.pdf) (PDF). Software Engineering Institute, Carnegie Mellon University. Retrieved December 15, 2025.
59. **[^](#cite_ref-78)** ["New Linux Patch Confirms: Rust Experiment Is Done, Rust Is Here To Stay"](https://www.phoronix.com/news/Rust-To-Stay-Linux-Kernel). *www.phoronix.com*. Retrieved December 15, 2025.
60. **[^](#cite_ref-kafmy_79-0)** O'Regan, Gerard (September 24, 2015). *Pillars of computing : a compendium of select, pivotal technology firms*. Springer. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-319-21464-1](//en.wikipedia.org/wiki/Special:BookSources/978-3-319-21464-1). [OCLC](//en.wikipedia.org/wiki/OCLC_(identifier)) [922324121](https://search.worldcat.org/oclc/922324121).
61. **[^](#cite_ref-dSI6f_80-0)** Rauchwerger, Lawrence (2004). *Languages and compilers for parallel computing : 16th international workshop, LCPC 2003, College Station, TX, USA, October 2–4, 2003 : revised papers*. Springer. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-24644-2](//en.wikipedia.org/wiki/Special:BookSources/978-3-540-24644-2). [OCLC](//en.wikipedia.org/wiki/OCLC_(identifier)) [57965544](https://search.worldcat.org/oclc/57965544).
62. **[^](#cite_ref-stroustrup_1993_81-0)** [Stroustrup, Bjarne](//en.wikipedia.org/wiki/Bjarne_Stroustrup) (1993). ["A History of C++: 1979–1991"](https://web.archive.org/web/20190202050609/http://www.stroustrup.com/hopl2.pdf) (PDF). Archived from [the original](http://www.stroustrup.com/hopl2.pdf) (PDF) on February 2, 2019. Retrieved June 9, 2011.

* [Kernighan, Brian W.](//en.wikipedia.org/wiki/Brian_Kernighan); [Ritchie, Dennis M.](//en.wikipedia.org/wiki/Dennis_Ritchie) (1978). [*The C Programming Language*](https://archive.org/details/cprogramminglang00kern/page/n2) (1st ed.). Englewood Cliffs: [Prentice Hall](//en.wikipedia.org/wiki/Prentice_Hall). [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-110163-0](//en.wikipedia.org/wiki/Special:BookSources/978-0-13-110163-0). [LCCN](//en.wikipedia.org/wiki/LCCN_(identifier)) [77028983](https://lccn.loc.gov/77028983). [OCLC](//en.wikipedia.org/wiki/OCLC_(identifier)) [3608698](https://search.worldcat.org/oclc/3608698). [OL](//en.wikipedia.org/wiki/OL_(identifier)) [4558528M](https://openlibrary.org/books/OL4558528M). [Wikidata](//en.wikipedia.org/wiki/WDQ_(identifier)) [Q63565563](https://www.wikidata.org/wiki/Q63565563).
* [Kernighan, Brian W.](//en.wikipedia.org/wiki/Brian_Kernighan); [Ritchie, Dennis M.](//en.wikipedia.org/wiki/Dennis_Ritchie) (1988). [*The C Programming Language*](https://archive.org/details/cprogramminglang00bria/page/n4) (2nd ed.). Upper Saddle River: [Prentice Hall](//en.wikipedia.org/wiki/Prentice_Hall). [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-110362-7](//en.wikipedia.org/wiki/Special:BookSources/978-0-13-110362-7). [LCCN](//en.wikipedia.org/wiki/LCCN_(identifier)) [88005934](https://lccn.loc.gov/88005934). [OCLC](//en.wikipedia.org/wiki/OCLC_(identifier)) [254455874](https://search.worldcat.org/oclc/254455874). [OL](//en.wikipedia.org/wiki/OL_(identifier)) [2030445M](https://openlibrary.org/books/OL2030445M). [Wikidata](//en.wikipedia.org/wiki/WDQ_(identifier)) [Q63413168](https://www.wikidata.org/wiki/Q63413168).
* [Ritchie, Dennis M.](//en.wikipedia.org/wiki/Dennis_Ritchie) (March 1993a). [Wexelblat, Richard L.](//en.wikipedia.org/wiki/Richard_Wexelblat) (ed.). ["The Development of the C Language"](https://dl.acm.org/doi/10.1145/155360.155580). *ACM SIGPLAN Notices*. **28** (3). New York City: [Association for Computing Machinery](//en.wikipedia.org/wiki/Association_for_Computing_Machinery): 201–208. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/155360.155580](https://doi.org/10.1145%2F155360.155580). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [0362-1340](https://search.worldcat.org/issn/0362-1340). [Wikidata](//en.wikipedia.org/wiki/WDQ_(identifier)) [Q55869040](https://www.wikidata.org/wiki/Q55869040).
* [Ritchie, Dennis M.](//en.wikipedia.org/wiki/Dennis_Ritchie) (1993b). Bergin, Thomas J.; Gibson, Richard G. (eds.). ["The Development of the C Language"](https://dl.acm.org/doi/10.1145/154766.155580). *The Second ACM SIGPLAN Conference on History of Programming Languages (HOPL-II)*. New York City: [Association for Computing Machinery](//en.wikipedia.org/wiki/Association_for_Computing_Machinery): 201–208. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/154766.155580](https://doi.org/10.1145%2F154766.155580). [Wikidata](//en.wikipedia.org/wiki/WDQ_(identifier)) [Q29392176](https://www.wikidata.org/wiki/Q29392176).
* [Ritchie, Dennis M.](//en.wikipedia.org/wiki/Dennis_Ritchie) (2003) [1993]. [*The Development of the C Language*](https://web.archive.org/web/20250130134200/https://www.bell-labs.com/usr/dmr/www/chist.html). [Dennis Ritchie](//en.wikipedia.org/wiki/Dennis_Ritchie). [Wikidata](//en.wikipedia.org/wiki/WDQ_(identifier)) [Q134885774](https://www.wikidata.org/wiki/Q134885774). Archived from [the original](https://www.bell-labs.com/usr/dmr/www/chist.html) on January 30, 2025 – via Bell Labs/Lucent Technologies.

* [Plauger, P.J.](//en.wikipedia.org/wiki/P._J._Plauger) (1992). *The Standard C Library* (1 ed.). Prentice Hall. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-131509-9](//en.wikipedia.org/wiki/Special:BookSources/978-0-13-131509-9). [*(source)*](https://github.com/wuzhouhui/c_standard_lib)
* Banahan, M.; Brady, D.; Doran, M. (1991). *The C Book: Featuring the ANSI C Standard* (2 ed.). Addison-Wesley. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-54433-6](//en.wikipedia.org/wiki/Special:BookSources/978-0-201-54433-6). [*(free)*](https://github.com/wardvanwanrooij/thecbook)
* Feuer, Alan R. (1985). *The C Puzzle Book* (1 ed.). Prentice Hall. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [0-13-109934-5](//en.wikipedia.org/wiki/Special:BookSources/0-13-109934-5).
* Harbison, Samuel; Steele, Guy Jr. (2002). *C: A Reference Manual* (5 ed.). Pearson. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-089592-9](//en.wikipedia.org/wiki/Special:BookSources/978-0-13-089592-9). [*(archive)*](https://archive.org/details/creferencemanual00harb)
* King, K.N. (2008). *C Programming: A Modern Approach* (2 ed.). W. W. Norton. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-393-97950-3](//en.wikipedia.org/wiki/Special:BookSources/978-0-393-97950-3). [*(archive)*](https://archive.org/details/cprogrammingmode0000king)
* Griffiths, David; Griffiths, Dawn (2012). *Head First C* (1 ed.). O'Reilly. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4493-9991-7](//en.wikipedia.org/wiki/Special:BookSources/978-1-4493-9991-7).
* Perry, Greg; Miller, Dean (2013). *C Programming: Absolute Beginner's Guide* (3 ed.). Que. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-7897-5198-0](//en.wikipedia.org/wiki/Special:BookSources/978-0-7897-5198-0).
* Deitel, Paul; Deitel, Harvey (2015). *C: How to Program* (8 ed.). Pearson. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-397689-2](//en.wikipedia.org/wiki/Special:BookSources/978-0-13-397689-2).
* Gustedt, Jens (2019). *Modern C* (2 ed.). Manning. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-61729-581-2](//en.wikipedia.org/wiki/Special:BookSources/978-1-61729-581-2). *[(free)](https://gustedt.gitlabpages.inria.fr/modern-c/)*