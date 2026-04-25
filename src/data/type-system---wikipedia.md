# Type system - Wikipedia

Source: https://en.wikipedia.org/wiki/Type_system

---

Computer science concept

A [programming language](https://en.wikipedia.org/wiki/Programming_language) consists of a system of allowed sequences of symbols ([constructs](https://en.wikipedia.org/wiki/Language_construct)) together with rules that define how each construct is interpreted. For example, a language might allow expressions representing various types of data, expressions that provide structuring rules for data, expressions representing various operations on data, and constructs that provide sequencing rules for the order in which to perform operations.

A simple type system for a programming language is a set of rules that associates a *[data type](https://en.wikipedia.org/wiki/Data_type)* (for example, [integer](https://en.wikipedia.org/wiki/Integer), [floating point](https://en.wikipedia.org/wiki/Floating_point), [string](https://en.wikipedia.org/wiki/String_(computer_science))) with each *[term](https://en.wikipedia.org/wiki/Term_(programming))* (data-valued expression) in a [computer program](https://en.wikipedia.org/wiki/Computer_program). In more ambitious type systems, a variety of constructs, such as [variables](https://en.wikipedia.org/wiki/Variable_(computer_science)), [expressions](https://en.wikipedia.org/wiki/Expression_(computer_science)), [functions](https://en.wikipedia.org/wiki/Function_(computer_science)), and [modules](https://en.wikipedia.org/wiki/Modular_programming), may be assigned types.

Type systems formalize and enforce the otherwise implicit categories the programmer uses for [algebraic data types](https://en.wikipedia.org/wiki/Algebraic_data_type), [data structures](https://en.wikipedia.org/wiki/Data_structure), or other [data types](https://en.wikipedia.org/wiki/Data_type), such as "string", "array of float", "function returning boolean".

The main purpose of a type system in a programming language is to reduce possibilities for [bugs](https://en.wikipedia.org/wiki/Bug_(computer_programming)) in computer programs due to mismatches in how values are interpreted in different parts of a program. The aim is to prevent operations expecting a certain kind of value from being applied to values for which that operation does not make sense (validity errors). A type system can detect and prevent some of these mismatches. When a type mismatch is detected, it is called a [type error](https://en.wikipedia.org/wiki/Type_error).

The type of a term constrains the contexts in which it may be used. For a variable, the type system determines the allowed values of that variable. For that variable to be presented as a parameter to an operation, the operation must be able to accept in that parameter any value that the type of the variable allows.

Type systems are typically specified as part of [programming language](https://en.wikipedia.org/wiki/Programming_language) design. They are built into [interpreters](https://en.wikipedia.org/wiki/Interpreter_(computing)) and [compilers](https://en.wikipedia.org/wiki/Compiler) for the language. In some languages, the type system can be extended by [optional tools](https://en.wikipedia.org/wiki/Extended_static_checking) that perform added checks using the language's original type [syntax](https://en.wikipedia.org/wiki/Syntax_(programming_languages)) and [grammar](https://en.wikipedia.org/wiki/Formal_grammar).

Type systems allow defining [interfaces](https://en.wikipedia.org/wiki/Interface_(computer_science)) between different parts of a computer program, and then checking that the parts have been connected in a consistent way. This checking can happen statically (at [compile time](https://en.wikipedia.org/wiki/Compile_time)), dynamically (at [runtime](https://en.wikipedia.org/wiki/Execution_(computing))), or as a combination of both.

Type systems have other purposes as well, such as expressing business rules, enabling certain [compiler optimizations](https://en.wikipedia.org/wiki/Compiler_optimization), allowing for [multiple dispatch](https://en.wikipedia.org/wiki/Multiple_dispatch), and providing a form of [documentation](https://en.wikipedia.org/wiki/Software_documentation).

An example of a simple type system is that of the [C language](https://en.wikipedia.org/wiki/C_(programming_language)). The portions of a C program are the [function](https://en.wikipedia.org/wiki/Subroutine) definitions. One function is invoked by another function.

The [interface](https://en.wikipedia.org/wiki/Interface_(computing)) of a function states the name of the function and a list of [parameters](https://en.wikipedia.org/wiki/Parameter_(computer_programming)) that are passed to the function's code. The code of an invoking function states the name of the invoked, along with the names of [variables](https://en.wikipedia.org/wiki/Variable_(computer_science)) that hold values to pass to it.

During a [computer program](https://en.wikipedia.org/wiki/Computer_program)'s execution, the values are placed into temporary storage, then execution jumps to the code of the invoked function. The invoked function's code accesses the values and makes use of them.

If the instructions inside the function are written with the assumption of receiving an [integer](https://en.wikipedia.org/wiki/Integer_(computer_science)) value, but the calling code passed a [floating-point value](https://en.wikipedia.org/wiki/Floating-point_arithmetic), then the wrong result will be computed by the invoked function.

The C compiler checks the types of the arguments passed to a function when it is called against the types of the parameters declared in the function's definition. If the types do not match, the compiler throws a compile-time error or warning.

A [compiler](https://en.wikipedia.org/wiki/Compiler) may also use the static type of a value to optimize the storage it needs and the choice of [algorithms](https://en.wikipedia.org/wiki/Algorithm) for operations on the value. In many [C](https://en.wikipedia.org/wiki/C_(programming_language)) compilers the *float* [data type](https://en.wikipedia.org/wiki/Data_type), for example, is represented in 32 [bits](https://en.wikipedia.org/wiki/Bit), in accord with the [IEEE specification for single-precision floating point numbers](https://en.wikipedia.org/wiki/IEEE_754-2008_revision). They will thus use floating-point-specific [microprocessor operations](https://en.wikipedia.org/wiki/Instruction_set) on those values (floating-point addition, multiplication, etc.).

The depth of type constraints and the manner of their evaluation affect the *typing* of the language. A [programming language](https://en.wikipedia.org/wiki/Programming_language) may further associate an operation with various resolutions for each type, in the case of type [polymorphism](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)). [Type theory](https://en.wikipedia.org/wiki/Type_theory) is the study of type systems. The concrete types of some programming languages, such as integers and strings, depend on practical issues of [computer architecture](https://en.wikipedia.org/wiki/Computer_architecture), compiler implementation, and [language design](https://en.wikipedia.org/wiki/Programming_language_design_and_implementation).

Formally, [type theory](https://en.wikipedia.org/wiki/Type_theory) studies type systems. A programming language must have the opportunity to type check using the *type system* whether at compile time or runtime, manually annotated or automatically inferred. As Mark Manasse concisely put it:

> The fundamental problem addressed by a type theory is to ensure that programs have meaning. The fundamental problem caused by a type theory is that meaningful programs may not have meanings ascribed to them. The quest for richer type systems results from this tension.

Assigning a data type, termed *typing*, gives meaning to a sequence of [bits](https://en.wikipedia.org/wiki/Bit) such as a value in [memory](https://en.wikipedia.org/wiki/Computer_memory) or some [object](https://en.wikipedia.org/wiki/Object_(computer_science)) such as a [variable](https://en.wikipedia.org/wiki/Variable_(computer_science)). The [hardware](https://en.wikipedia.org/wiki/Computer_hardware) of a [general purpose computer](https://en.wikipedia.org/wiki/General_purpose_computer) is unable to discriminate between for example a [memory address](https://en.wikipedia.org/wiki/Memory_address) and an [instruction code](https://en.wikipedia.org/wiki/Instruction_code_(programming)), or between a [character](https://en.wikipedia.org/wiki/Character_(computing)), an [integer](https://en.wikipedia.org/wiki/Integer), or a [floating-point number](https://en.wikipedia.org/wiki/Floating-point_number), because it makes no intrinsic distinction between any of the possible values that a sequence of bits might *mean*. Associating a sequence of bits with a type conveys that [meaning](https://en.wiktionary.org/wiki/meaning) to the programmable hardware to form a *[symbolic system](https://en.wikipedia.org/wiki/Symbolic_system)* composed of that hardware and some program.

A program associates each value with at least one specific type, but it also can occur that one value is associated with many [subtypes](https://en.wikipedia.org/wiki/Subtyping). Other entities, such as [objects](https://en.wikipedia.org/wiki/Object_(computer_science)), [modules](https://en.wikipedia.org/wiki/Module_(programming)), [communication channels](https://en.wikipedia.org/wiki/Channel_(programming)), and [dependencies](https://en.wikipedia.org/wiki/Dependency_(computer_science)) can become associated with a type. Even a type can become associated with a type. An implementation of a *type system* could in theory associate identifications called *[data type](https://en.wikipedia.org/wiki/Data_type)* (a type of a value), *[class](https://en.wikipedia.org/wiki/Class_(computer_science))* (a type of an object), and *[kind](https://en.wikipedia.org/wiki/Kind_(type_theory))* (a *type of a type*, or metatype). These are the abstractions that typing can go through, on a hierarchy of levels contained in a system.

When a programming language evolves a more elaborate type system, it gains a more finely grained rule set than basic type checking, but this comes at a price when the type [inferences](https://en.wikipedia.org/wiki/Inference) (and other properties) become [undecidable](https://en.wikipedia.org/wiki/Undecidable_problem), and when more attention must be paid by the programmer to annotate code or to consider computer-related operations and functioning. It is challenging to find a sufficiently expressive type system that satisfies all programming practices in a [type safe](https://en.wikipedia.org/wiki/Type_safe) manner.

A programming language compiler can also implement a *[dependent type](https://en.wikipedia.org/wiki/Dependent_type)* or an *[effect system](https://en.wikipedia.org/wiki/Effect_system)*, which enables even more program specifications to be verified by a type checker. Beyond simple value-type pairs, a virtual "region" of code is associated with an "effect" component describing *what* is being done *with what*, and enabling for example to "throw" an error report. Thus the symbolic system may be a *type and effect system*, which endows it with more safety checking than type checking alone.

Whether automated by the compiler or specified by a programmer, a type system renders program behavior illegal if it falls outside the type-system rules. Advantages provided by programmer-specified type systems include:

* *Abstraction* (or *modularity*) – Types enable programmers to think at a higher level than the bit or byte, not bothering with [low-level](https://en.wikipedia.org/wiki/Low-level_programming_language) implementation. For example, programmers can begin to think of a string as a set of character values instead of as an [array](https://en.wikipedia.org/wiki/Array_(data_structure)) of bytes. Higher still, types enable programmers to think about and express [interfaces](https://en.wikipedia.org/wiki/Interface_(computer_science)) between two of *any*-sized subsystems. This enables more levels of localization so that the definitions required for [interoperability](https://en.wikipedia.org/wiki/Interoperability) of the subsystems remain consistent when those two subsystems communicate.
* *Documentation* – In more expressive type systems, types can serve as a form of [documentation](https://en.wikipedia.org/wiki/Documentation) clarifying the intent of the programmer. For example, if a programmer declares a function as returning a timestamp type, this documents the function when the timestamp type can be explicitly declared deeper in the code to be an integer type.

Advantages provided by compiler-specified type systems include:

* *Optimization* – Static type-checking may provide useful [compile-time](https://en.wikipedia.org/wiki/Compile_time) information. For example, if a type requires that a value must align in memory at a multiple of four bytes, the compiler may be able to use more efficient machine instructions.
* *Safety* – A type system enables the [compiler](https://en.wikipedia.org/wiki/Compiler) to detect meaningless or invalid code. For example, we can identify an expression `3 / "Hello, World"` as invalid, when the rules do not specify how to divide an [integer](https://en.wikipedia.org/wiki/Integer) by a [string](https://en.wikipedia.org/wiki/String_(computer_science)). Strong typing offers more safety, but cannot guarantee complete *[type safety](https://en.wikipedia.org/wiki/Type_safety)*.

A type error occurs when an operation receives a different type of data than it expected. For example, a type error would happen if a line of code divides two integers, and is passed a string of letters instead of an integer. It is an unintended condition which might manifest in multiple stages of a program's development. Thus a facility for detection of the error is needed in the type system. In some languages, such as [Haskell](https://en.wikipedia.org/wiki/Haskell), for which [type inference](https://en.wikipedia.org/wiki/Type_inference) is automated, [lint](https://en.wikipedia.org/wiki/Lint_(software)) might be available to its compiler to aid in the detection of error.

Type safety contributes to [program correctness](https://en.wikipedia.org/wiki/Program_correctness), but might only guarantee correctness at the cost of making the type checking itself an [undecidable problem](https://en.wikipedia.org/wiki/Undecidable_problem) (as in the [halting problem](https://en.wikipedia.org/wiki/Halting_problem)). In a *type system* with automated type checking, a program may prove to run incorrectly yet produce no compiler errors. [Division by zero](https://en.wikipedia.org/wiki/Division_by_zero) is an unsafe and incorrect operation, but a type checker which only runs at [compile time](https://en.wikipedia.org/wiki/Compile_time) does not scan for division by zero in most languages; that division would surface as a [runtime error](https://en.wikipedia.org/wiki/Runtime_error). To prove the absence of these defects, other kinds of [formal methods](https://en.wikipedia.org/wiki/Formal_method), collectively known as [program analyses](https://en.wikipedia.org/wiki/Program_analysis_(computer_science)), are in common use. Alternatively, a sufficiently expressive type system, such as in dependently typed languages, can prevent these kinds of errors (for example, expressing *the type of non-zero numbers*). In addition, [software testing](https://en.wikipedia.org/wiki/Software_testing) is an [empirical](https://en.wikipedia.org/wiki/Empirical) method for finding errors that such a type checker would not detect.

The process of verifying and enforcing the constraints of types, *type checking*, may occur at [compile time](https://en.wikipedia.org/wiki/Compile_time) (a static check) or at [runtime](https://en.wikipedia.org/wiki/Execution_(computing)) (a dynamic check).

If a language specification requires its typing rules strongly, more or less allowing only those automatic [type conversions](https://en.wikipedia.org/wiki/Type_conversion) that do not lose information, one can refer to the process as *strongly typed*; if not, as *weakly typed*.

The terms are not usually used in a strict sense.

### Static type checking

[[edit](/w/index.php?title=Type_system&action=edit&section=5)]

Static type checking is the process of verifying the [type safety](https://en.wikipedia.org/wiki/Type_safety) of a program based on analysis of a program's text ([source code](https://en.wikipedia.org/wiki/Source_code)). If a program passes a static type checker, then the program is guaranteed to satisfy some set of type safety properties for all possible inputs.

Static type checking can be considered a limited form of [program verification](https://en.wikipedia.org/wiki/Program_verification) (see [type safety](https://en.wikipedia.org/wiki/Type_safety)), and in a type-safe language, can also be considered an optimization. If a compiler can prove that a program is well-typed, then it does not need to emit dynamic safety checks, allowing the resulting compiled binary to run faster and to be smaller.

Static type checking for [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) languages is inherently conservative. That is, if a type system is both *sound* (meaning that it rejects all incorrect programs) and *decidable* (meaning that it is possible to write an algorithm that determines whether a program is well-typed), then it must be *incomplete* (meaning there are correct programs, which are also rejected, even though they do not encounter runtime errors). For example, consider a program containing the code:

:   `if <complex test> then <do something> else <signal that there is a type error>`

Even if the expression `<complex test>` always evaluates to `true` at runtime, most type checkers will reject the program as ill-typed, because it is difficult (if not impossible) for a static analyzer to determine that the `else` branch will not be taken. Consequently, a static type checker will quickly detect type errors in rarely used code paths. Without static type checking, even [code coverage](https://en.wikipedia.org/wiki/Code_coverage) tests with 100% coverage may be unable to find such type errors. The tests may fail to detect such type errors, because the combination of all places where values are created and all places where a certain value is used must be taken into account.

A number of useful and common programming language features cannot be checked statically, such as [downcasting](https://en.wikipedia.org/wiki/Downcasting). Thus, many languages will have both static and dynamic type checking; the static type checker verifies what it can, and dynamic checks verify the rest.

Many languages with static type checking provide a way to bypass the type checker. Some languages allow programmers to choose between static and dynamic type safety. For example, historically C# declares variables statically, but [C# 4.0](https://en.wikipedia.org/wiki/C_Sharp_4.0) introduces the `dynamic` keyword, which is used to declare variables to be checked dynamically at runtime. Other languages allow writing code that is not type-safe; for example, in [C](https://en.wikipedia.org/wiki/C_(programming_language)), programmers can freely cast a value between any two types that have the same size, effectively subverting the type concept.

### Dynamic type checking and runtime type information

[[edit](/w/index.php?title=Type_system&action=edit&section=6)]

Dynamic type checking is the process of verifying the type safety of a program at runtime. Implementations of dynamically type-checked languages generally associate each runtime object with a *type tag* (i.e., a reference to a type) containing its type information. This runtime type information (RTTI) can also be used to implement [dynamic dispatch](https://en.wikipedia.org/wiki/Dynamic_dispatch), [late binding](https://en.wikipedia.org/wiki/Late_binding), [downcasting](https://en.wikipedia.org/wiki/Downcasting), [reflective programming](https://en.wikipedia.org/wiki/Reflective_programming) (reflection), and similar features.

Most type-safe languages include some form of dynamic type checking, even if they also have a static type checker. The reason for this is that many useful features or properties are difficult or impossible to verify statically. For example, suppose that a program defines two types, A and B, where B is a subtype of A. If the program tries to convert a value of type A to type B, which is known as [downcasting](https://en.wikipedia.org/wiki/Downcasting), then the operation is legal only if the value being converted is actually a value of type B. Thus, a dynamic check is needed to verify that the operation is safe. This requirement is one of the criticisms of downcasting.

By definition, dynamic type checking may cause a program to fail at runtime. In some programming languages, it is possible to anticipate and recover from these failures. In others, type-checking errors are considered fatal.

Programming languages that include dynamic type checking but not static type checking are often called "dynamically typed programming languages".

### Combining static and dynamic type checking

[[edit](/w/index.php?title=Type_system&action=edit&section=7)]

"Type hinting" redirects here. For hinting of typefaces, see

[font hinting](https://en.wikipedia.org/wiki/Font_hinting)

.

Certain languages allow both static and dynamic typing. For example, Java and some other ostensibly statically typed languages support [downcasting](https://en.wikipedia.org/wiki/Downcasting) types to their [subtypes](https://en.wikipedia.org/wiki/Subtypes), querying an object to discover its dynamic type and other type operations that depend on runtime type information. Another example is [C++ RTTI](https://en.wikipedia.org/wiki/Run-time_type_information). More generally, most programming languages include mechanisms for dispatching over different 'kinds' of data, such as [disjoint unions](https://en.wikipedia.org/wiki/Disjoint_union), [runtime polymorphism](https://en.wikipedia.org/wiki/Dynamic_dispatch), and [variant types](https://en.wikipedia.org/wiki/Variant_type). Even when not interacting with type annotations or type checking, such mechanisms are materially similar to dynamic typing implementations. See [programming language](https://en.wikipedia.org/wiki/Programming_language) for more discussion of the interactions between static and dynamic typing.

Objects in object-oriented languages are usually accessed by a reference whose static target type (or manifest type) is equal to either the object's runtime type (its latent type) or a supertype thereof. This is conformant with the [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle), which states that all operations performed on an instance of a given type can also be performed on an instance of a subtype. This concept is also known as subsumption or [subtype polymorphism](https://en.wikipedia.org/wiki/Subtyping). In some languages subtypes may also possess [covariant or contravariant](https://en.wikipedia.org/wiki/Type_variance) return types and argument types respectively.

Certain languages, for example [Clojure](https://en.wikipedia.org/wiki/Clojure), [Common Lisp](https://en.wikipedia.org/wiki/Common_Lisp), or [Cython](https://en.wikipedia.org/wiki/Cython) are dynamically type checked by default, but allow programs to opt into static type checking by providing optional annotations. One reason to use such hints would be to optimize the performance of critical sections of a program. This is formalized by [gradual typing](#Gradual_typing). The programming environment *[DrRacket](https://en.wikipedia.org/wiki/DrRacket)*, a pedagogic environment based on Lisp, and a precursor of the language [Racket](https://en.wikipedia.org/wiki/Racket_(programming_language)#Development) is also soft-typed.

Conversely, as of version 4.0, the C# language provides a way to indicate that a variable should not be statically type checked. A variable whose type is `dynamic` will not be subject to static type checking. Instead, the program relies on runtime type information to determine how the variable may be used.

In [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)), the `dyn std::any::Any` [trait](https://en.wikipedia.org/wiki/Trait_(computer_programming)) object provides dynamic typing of types containing no or only `'static` lifetimes.

### Static and dynamic type checking in practice

[[edit](/w/index.php?title=Type_system&action=edit&section=8)]

The choice between static and dynamic typing requires certain [trade-offs](https://en.wikipedia.org/wiki/Trade-off).

Static typing can find type errors reliably at compile time, which increases the reliability of the delivered program. However, programmers disagree over how commonly type errors occur, resulting in further disagreements over the proportion of those bugs that are coded that would be caught by appropriately representing the designed types in code. Static typing advocates[*[who?](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Words_to_watch#Unsupported_attributions)*] believe programs are more reliable when they have been well type-checked, whereas dynamic-typing advocates[*[who?](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Words_to_watch#Unsupported_attributions)*] point to distributed code that has proven reliable and to small bug databases.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*] The value of static typing increases as the strength of the type system is increased. Advocates of [dependent typing](https://en.wikipedia.org/wiki/Dependent_type),[*[who?](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Words_to_watch#Unsupported_attributions)*] implemented in languages such as [Dependent ML](https://en.wikipedia.org/wiki/Dependent_ML) and [Epigram](https://en.wikipedia.org/wiki/Epigram_(programming_language)), have suggested that almost all bugs can be considered type errors, if the types used in a program are properly declared by the programmer or correctly inferred by the compiler.

Static typing usually results in compiled code that executes faster. When the compiler knows the exact data types that are in use (which is necessary for static verification, either through declaration or inference) it can produce optimized machine code. Some dynamically typed languages such as [Common Lisp](https://en.wikipedia.org/wiki/Common_Lisp) allow optional type declarations for optimization for this reason.

By contrast, dynamic typing may allow compilers to run faster and [interpreters](https://en.wikipedia.org/wiki/Interpreter_(computing)) to dynamically load new code, because changes to source code in dynamically typed languages may result in less checking to perform and less code to revisit.[*[clarification needed](https://en.wikipedia.org/wiki/Wikipedia:Please_clarify)*] This too may reduce the edit-compile-test-debug cycle.

Statically typed languages that lack [type inference](https://en.wikipedia.org/wiki/Type_inference) (such as [C](https://en.wikipedia.org/wiki/C_(programming_language)) and [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) prior to [version 10](https://en.wikipedia.org/wiki/Java_version_history#Java_SE_10)) require that programmers declare the types that a method or function must use. This can serve as added program documentation, that is active and dynamic, instead of static. This allows a compiler to prevent it from drifting out of synchrony, and from being ignored by programmers. However, a language can be statically typed without requiring type declarations (examples include [Haskell](https://en.wikipedia.org/wiki/Haskell), [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)), [OCaml](https://en.wikipedia.org/wiki/OCaml), [F#](https://en.wikipedia.org/wiki/F_Sharp_(programming_language)), [Swift](https://en.wikipedia.org/wiki/Swift_(programming_language)), and to a lesser extent [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) and [C++](https://en.wikipedia.org/wiki/C%2B%2B)), so explicit type declaration is not required for static typing in all languages.

Dynamic typing allows constructs that some (simple) static type checking would reject as illegal. For example, *[eval](https://en.wikipedia.org/wiki/Eval)* functions, which execute arbitrary data as code, become possible. An *eval* function is possible with static typing, but requires advanced uses of [algebraic data types](https://en.wikipedia.org/wiki/GADT). Further, dynamic typing better accommodates transitional code and prototyping, such as allowing a placeholder data structure ([mock object](https://en.wikipedia.org/wiki/Mock_object)) to be transparently used in place of a full data structure (usually for the purposes of experimentation and testing).

Dynamic typing typically allows [duck typing](https://en.wikipedia.org/wiki/Duck_typing) (which enables [easier code reuse](https://en.wikipedia.org/wiki/Duck_typing#Comparison_with_other_type_systems)). Many[*[specify](https://en.wikipedia.org/wiki/Wikipedia:Citing_sources)*] languages with static typing also feature [duck typing](https://en.wikipedia.org/wiki/Duck_typing#In_statically_typed_languages) or other mechanisms like [generic programming](https://en.wikipedia.org/wiki/Generic_programming) that also enable easier code reuse.

Dynamic typing typically makes [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming) easier to use. For example, [C++ templates](https://en.wikipedia.org/wiki/Template_(C%2B%2B)) are typically more cumbersome to write than the equivalent [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) or [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) code since [C++](https://en.wikipedia.org/wiki/C%2B%2B) has stronger rules regarding type definitions (for both functions and variables). This forces a developer to write more [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code) for a template than a Python developer would need to. More advanced runtime constructs such as [metaclasses](https://en.wikipedia.org/wiki/Metaclass) and [introspection](https://en.wikipedia.org/wiki/Introspection_(computer_science)) are often harder to use in statically typed languages. In some languages, such features may also be used e.g. to generate new types and behaviors on the fly, based on runtime data. Such advanced constructs are often provided by [dynamic programming languages](https://en.wikipedia.org/wiki/Dynamic_programming_language); many of these are dynamically typed, although *dynamic typing* need not be related to *dynamic programming languages*.

### Strong and weak type systems

[[edit](/w/index.php?title=Type_system&action=edit&section=9)]

Languages are often colloquially referred to as *strongly typed* or *weakly typed*. In fact, there is no universally accepted definition of what these terms mean. In general, there are more precise terms to represent the differences between type systems that lead people to call them "strong" or "weak".

### Type safety and memory safety

[[edit](/w/index.php?title=Type_system&action=edit&section=10)]

A third way of categorizing the type system of a programming language is by the safety of typed operations and conversions. Computer scientists use the term *type-safe language* to describe languages that do not allow operations or conversions that violate the rules of the type system.

Computer scientists use the term *memory-safe language* (or just *safe language*) to describe languages that do not allow programs to access memory that has not been assigned for their use. For example, a memory-safe language will [check array bounds](https://en.wikipedia.org/wiki/Bounds_checking), or else statically guarantee (i.e., at compile time before execution) that array accesses out of the array boundaries will cause compile-time and perhaps runtime errors.

Consider the following program of a language that is both type-safe and memory-safe:

```
var x := 5;
var y := "37";
var z := x + y;

```

In this example, the variable `z` will have the value 42. Although this may not be what the programmer anticipated, it is a well-defined result. If `y` were a different string, one that could not be converted to a number (e.g., "[Hello, World](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)"), the result would be well-defined also. A program can be type-safe or memory-safe and still crash on an invalid operation. This is for languages where the type system is not sufficiently advanced to precisely specify the validity of operations on all possible operands. But if a program encounters an operation that is not type-safe, terminating the program is often the only option.

Now consider a similar example in C:

```
int x = 5;
char y[] = "37";
char* z = x + y;
printf("%c\n", *z);

```

In this example `z` will point to a memory address five characters beyond `y`, equivalent to three characters after the terminating zero character of the string pointed to by `y`. This is memory that the program is not expected to access. In C terms this is simply [undefined behaviour](https://en.wikipedia.org/wiki/Undefined_behaviour) and the program may do anything; with a simple compiler it might actually print whatever byte is stored after the string "37". As this example shows, C is not memory-safe. As arbitrary data was assumed to be a character, it is also not a type-safe language.

In general, type-safety and memory-safety go hand in hand. For example, a language that supports pointer arithmetic and number-to-pointer conversions (like C) is neither memory-safe nor type-safe, because it allows arbitrary memory to be accessed as if it were valid memory of any type.

### Variable levels of type checking

[[edit](/w/index.php?title=Type_system&action=edit&section=11)]

Some languages allow different levels of checking to apply to different regions of code. Examples include:

* The `use strict` directive in [JavaScript](https://en.wikipedia.org/wiki/JavaScript) and [Perl](https://en.wikipedia.org/wiki/Perl) applies stronger checking.
* The `declare(strict_types=1)` in [PHP](https://en.wikipedia.org/wiki/PHP) on a per-file basis allows only a variable of exact type of the type declaration will be accepted, or a `TypeError` will be thrown.
* The `Option Strict On` in [VB.NET](https://en.wikipedia.org/wiki/VB.NET) allows the compiler to require a conversion between objects.

Additional tools such as [lint](https://en.wikipedia.org/wiki/Lint_(software)) and [IBM Rational Purify](https://en.wikipedia.org/wiki/IBM_Rational_Purify) can also be used to achieve a higher level of strictness.

### Optional type systems

[[edit](/w/index.php?title=Type_system&action=edit&section=12)]

It has been proposed, chiefly by [Gilad Bracha](https://en.wikipedia.org/wiki/Gilad_Bracha), that the choice of type system be made independent of choice of language; that a type system should be a module that can be *plugged* into a language as needed. He believes this is advantageous, because what he calls mandatory type systems make languages less expressive and code more fragile. The requirement that the type system does not affect the semantics of the language is difficult to fulfill.

Optional typing is related to, but distinct from, [gradual typing](https://en.wikipedia.org/wiki/Gradual_typing). While both typing disciplines can be used to perform static analysis of code ([static typing](https://en.wikipedia.org/wiki/Static_typing)), optional type systems do not enforce type safety at runtime ([dynamic typing](https://en.wikipedia.org/wiki/Dynamic_typing)).

## Polymorphism and types

[[edit](/w/index.php?title=Type_system&action=edit&section=13)]

The term *polymorphism* refers to the ability of code (especially, functions or classes) to act on values of multiple types, or to the ability of different instances of the same data structure to contain elements of different types. Type systems that allow polymorphism generally do so to improve the potential for code re-use: in a language with polymorphism, programmers need only implement a data structure such as a list or an [associative array](https://en.wikipedia.org/wiki/Associative_array) once, rather than once for each type of element with which they plan to use it. For this reason computer scientists sometimes call the use of certain forms of polymorphism *[generic programming](https://en.wikipedia.org/wiki/Generic_programming)*. The type-theoretic foundations of polymorphism are closely related to those of [abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)), [modularity](https://en.wikipedia.org/wiki/Module_(programming)) and (in some cases) [subtyping](https://en.wikipedia.org/wiki/Subtyping).

## Specialized type systems

[[edit](/w/index.php?title=Type_system&action=edit&section=14)]

Many type systems have been created that are specialized for use in certain environments with certain types of data, or for out-of-band [static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis). Frequently, these are based on ideas from formal [type theory](https://en.wikipedia.org/wiki/Type_theory) and are only available as part of prototype research systems.

The following table gives an overview over type theoretic concepts that are used in specialized type systems.
The names M, N, O range over terms and the names 



σ
,
τ
{\displaystyle \sigma ,\tau }
![{\displaystyle \sigma ,\tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/5413ff7af6a852a9f408ceebcbae14b523e082a2) range over types.
The following notation will be used:

* M
  :
  σ
  {\displaystyle M:\sigma }
  ![{\displaystyle M:\sigma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/d19edef7b46722a36691321bc46d47dfb44ed7a9) means that 



  M
  {\displaystyle M}
  ![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd) has type 



  σ
  {\displaystyle \sigma }
  ![{\displaystyle \sigma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f59b7c3e6fdb1d0365a494b81fb9a696138c36);
* M
  (
  N
  )
  {\displaystyle M(N)}
  ![{\displaystyle M(N)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c9625cd78ee58da84ad5ea620df5441d81058aba) is that application of 



  M
  {\displaystyle M}
  ![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd) on 



  N
  {\displaystyle N}
  ![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3);
* τ
  [
  α
  :=
  σ
  ]
  {\displaystyle \tau [\alpha :=\sigma ]}
  ![{\displaystyle \tau [\alpha :=\sigma ]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2c9f20140a5b2c9c8c251fd7995c0946af39ff50) (resp. 



  τ
  [
  x
  :=
  N
  ]
  {\displaystyle \tau [x:=N]}
  ![{\displaystyle \tau [x:=N]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c002d47c768eee1680120285b350790d373dbf23)) describes the type which results from replacing all occurrences of the type variable α (resp. term variable x) in 



  τ
  {\displaystyle \tau }
  ![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c) by the type σ (resp. term N).

| Type notion | Notation | Meaning |
| --- | --- | --- |
| Function | σ → τ {\displaystyle \sigma \to \tau } | If M : σ → τ {\displaystyle M:\sigma \to \tau } and N : σ {\displaystyle N:\sigma } , then M ( N ) : τ {\displaystyle M(N):\tau } . |
| Product | σ × τ {\displaystyle \sigma \times \tau } | If M : σ × τ {\displaystyle M:\sigma \times \tau } , then M = ( N , O ) {\displaystyle M=(N,O)} is a pair s.t. N : σ {\displaystyle N:\sigma } and O : τ {\displaystyle O:\tau } . |
| Sum | σ + τ {\displaystyle \sigma +\tau } | If M : σ + τ {\displaystyle M:\sigma +\tau } , then M = ι 1 ( N ) {\displaystyle M=\iota _{1}(N)} is the first injection s.t. N : σ {\displaystyle N:\sigma } , or M = ι 2 ( N ) {\displaystyle M=\iota _{2}(N)} is the second injection s.t. N : τ {\displaystyle N:\tau } . |
| Intersection | σ ∩ τ {\displaystyle \sigma \cap \tau } | If M : σ ∩ τ {\displaystyle M:\sigma \cap \tau } , then M : σ {\displaystyle M:\sigma } and M : τ {\displaystyle M:\tau } . |
| Union | σ ∪ τ {\displaystyle \sigma \cup \tau } | If M : σ ∪ τ {\displaystyle M:\sigma \cup \tau } , then M : σ {\displaystyle M:\sigma } or M : τ {\displaystyle M:\tau } . |
| Record | ⟨ x : τ ⟩ {\displaystyle \langle x:\tau \rangle } | If M : ⟨ x : τ ⟩ {\displaystyle M:\langle x:\tau \rangle } , then M has a member x : τ {\displaystyle x:\tau } . |
| Polymorphic | ∀ α . τ {\displaystyle \forall {}\alpha .\tau } | If M : ∀ α . τ {\displaystyle M:\forall {}\alpha .\tau } , then M : τ [ α := σ ] {\displaystyle M:\tau [\alpha :=\sigma ]} for any type σ . |
| Existential | ∃ α . τ {\displaystyle \exists {}\alpha .\tau } | If M : ∃ α . τ {\displaystyle M:\exists {}\alpha .\tau } , then M : τ [ α := σ ] {\displaystyle M:\tau [\alpha :=\sigma ]} for some type σ . |
| Recursive | μ α . τ {\displaystyle \mu \alpha .\tau } | If M : μ α . τ {\displaystyle M:\mu \alpha .\tau } , then M : τ [ α := μ α . τ ] {\displaystyle M:\tau [\alpha :=\mu \alpha .\tau ]} . |
| Dependent function | ( x : σ ) → τ {\displaystyle (x:\sigma )\to \tau } | If M : ( x : σ ) → τ {\displaystyle M:(x:\sigma )\to \tau } and N : σ {\displaystyle N:\sigma } , then M ( N ) : τ [ x := N ] {\displaystyle M(N):\tau [x:=N]} . |
| Dependent pair | ( x : σ ) × τ {\displaystyle (x:\sigma )\times \tau } | If M : ( x : σ ) × τ {\displaystyle M:(x:\sigma )\times \tau } , then M = ( N , O ) {\displaystyle M=(N,O)} is a pair s.t. N : σ {\displaystyle N:\sigma } and O : τ [ x := N ] {\displaystyle O:\tau [x:=N]} . |
| Dependent intersection | ( x : σ ) ∩ τ {\displaystyle (x:\sigma )\cap \tau } | If M : ( x : σ ) ∩ τ {\displaystyle M:(x:\sigma )\cap \tau } , then M : σ {\displaystyle M:\sigma } and M : τ [ x := M ] {\displaystyle M:\tau [x:=M]} . |
| Familial intersection | ⋂ x : σ τ {\displaystyle \bigcap _{x:\sigma }\tau } | If M : ⋂ x : σ τ {\textstyle M:\bigcap _{x:\sigma }\tau } , then M : τ [ x := N ] {\displaystyle M:\tau [x:=N]} for any term N : σ {\displaystyle N:\sigma } . |
| Familial union | ⋃ x : σ τ {\displaystyle \bigcup _{x:\sigma }\tau } | If M : ⋃ x : σ τ {\textstyle M:\bigcup _{x:\sigma }\tau } , then M : τ [ x := N ] {\displaystyle M:\tau [x:=N]} for some term N : σ {\displaystyle N:\sigma } . |

1. **[^](#cite_ref-26)** Also referred to as *dependent product type*, since 



   (
   x
   :
   σ
   )
   →
   τ
   =

   ∏

   x
   :
   σ
   τ
   {\textstyle (x:\sigma )\to \tau =\prod \_{x:\sigma }\tau }
   ![{\textstyle (x:\sigma )\to \tau =\prod _{x:\sigma }\tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/e6240662486d75eeca20d70a294d7fadd3197bde).
2. **[^](#cite_ref-27)** Also referred to as *dependent sum type*, since 



   (
   x
   :
   σ
   )
   ×
   τ
   =

   ∑

   x
   :
   σ
   τ
   {\textstyle (x:\sigma )\times \tau =\sum \_{x:\sigma }\tau }
   ![{\textstyle (x:\sigma )\times \tau =\sum _{x:\sigma }\tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/8f773dcf7d9ba08678680ac0b961b0f0ba454f28).

[Dependent types](https://en.wikipedia.org/wiki/Dependent_type) are based on the idea of using scalars or values to more precisely describe the type of some other value. For example, 




m
a
t
r
i
x
(
3
,
3
)
{\displaystyle \mathrm {matrix} (3,3)}
![{\displaystyle \mathrm {matrix} (3,3)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/04b6df3034e02a45990859737da4794e846b8c08) might be the type of a 



3
×
3
{\displaystyle 3\times 3}
![{\displaystyle 3\times 3}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ddc0d4d6106875f8006be1d898512ca5843bad8e) matrix. We can then define typing rules such as the following rule for matrix multiplication:

:   m
    a
    t
    r
    i
    x


    m
    u
    l
    t
    i
    p
    l
    y
    :

    m
    a
    t
    r
    i
    x
    (
    k
    ,
    m
    )
    ×

    m
    a
    t
    r
    i
    x
    (
    m
    ,
    n
    )
    →

    m
    a
    t
    r
    i
    x
    (
    k
    ,
    n
    )
    {\displaystyle \mathrm {matrix} \_{\mathrm {multiply} }:\mathrm {matrix} (k,m)\times \mathrm {matrix} (m,n)\to \mathrm {matrix} (k,n)}
    ![{\displaystyle \mathrm {matrix} _{\mathrm {multiply} }:\mathrm {matrix} (k,m)\times \mathrm {matrix} (m,n)\to \mathrm {matrix} (k,n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a9b5ca3ad745c07126727667fefc60055f0549ff)

where k, m, n are arbitrary positive integer values. A variant of [ML](https://en.wikipedia.org/wiki/ML_(programming_language)) called [Dependent ML](https://en.wikipedia.org/wiki/Dependent_ML) has been created based on this type system, but because type checking for conventional dependent types is [undecidable](https://en.wikipedia.org/wiki/Decidable_set), not all programs using them can be type-checked without some kind of limits. Dependent ML limits the sort of equality it can decide to [Presburger arithmetic](https://en.wikipedia.org/wiki/Presburger_arithmetic).

Other languages such as [Epigram](https://en.wikipedia.org/wiki/Epigram_(programming_language)) make the value of all expressions in the language decidable so that type checking can be decidable. However, in general [proof of decidability is undecidable](https://en.wikipedia.org/wiki/Halting_Problem), so many programs require hand-written annotations that may be very non-trivial. As this impedes the development process, many language implementations provide an easy way out in the form of an option to disable this condition. This, however, comes at the cost of making the type-checker run in an [infinite loop](https://en.wikipedia.org/wiki/Infinite_loop) when fed programs that do not type-check, causing the compilation to fail.

[Linear types](https://en.wikipedia.org/wiki/Linear_type), based on the theory of [linear logic](https://en.wikipedia.org/wiki/Linear_logic), and closely related to [uniqueness types](https://en.wikipedia.org/wiki/Uniqueness_type), are types assigned to values having the property that they have one and only one reference to them at all times. These are valuable for describing large [immutable values](https://en.wikipedia.org/wiki/Immutable_value) such as files, strings, and so on, because any operation that simultaneously destroys a linear object and creates a similar object (such as `str = str + "a"`) can be optimized "under the hood" into an in-place mutation. Normally this is not possible, as such mutations could cause side effects on parts of the program holding other references to the object, violating [referential transparency](https://en.wikipedia.org/wiki/Referential_transparency). They are also used in the prototype operating system [Singularity](https://en.wikipedia.org/wiki/Singularity_(operating_system)) for interprocess communication, statically ensuring that processes cannot share objects in shared memory to prevent race conditions. The [Clean](https://en.wikipedia.org/wiki/Clean_(programming_language)) language (a [Haskell](https://en.wikipedia.org/wiki/Haskell)-like language) uses this type system to gain a lot of speed (compared to performing a deep copy) while remaining safe.

[Intersection types](https://en.wikipedia.org/wiki/Intersection_type) are types describing values that belong to *both* of two other given types with overlapping value sets. For example, in most implementations of C the signed char has range -128 to 127 and the unsigned char has range 0 to 255, so the intersection type of these two types would have range 0 to 127. Such an intersection type could be safely passed into functions expecting *either* signed or unsigned chars, because it is compatible with both types.

Intersection types are useful for describing overloaded function types: for example, if "`int` → `int`" is the type of functions taking an integer argument and returning an integer, and "`float` → `float`" is the type of functions taking a float argument and returning a float, then the intersection of these two types can be used to describe functions that do one or the other, based on what type of input they are given. Such a function could be passed into another function expecting an "`int` → `int`" function safely; it simply would not use the "`float` → `float`" functionality.

In a subclassing hierarchy, the intersection of a type and an ancestor type (such as its parent) is the most derived type. The intersection of sibling types is empty.

The Forsythe language includes a general implementation of intersection types. A restricted form is [refinement types](https://en.wikipedia.org/wiki/Refinement_type).

[Union types](https://en.wikipedia.org/wiki/Union_type) are types describing values that belong to *either* of two types. For example, in C, the signed char has a -128 to 127 range, and the unsigned char has a 0 to 255 range, so the union of these two types would have an overall "virtual" range of -128 to 255 that may be used partially depending on which union member is accessed. Any function handling this union type would have to deal with integers in this complete range. More generally, the only valid operations on a union type are operations that are valid on *both* types being unioned. C's "union" concept is similar to union types, but is not typesafe, as it permits operations that are valid on *either* type, rather than *both*. Union types are important in program analysis, where they are used to represent symbolic values whose exact nature (e.g., value or type) is not known.

In a subclassing hierarchy, the union of a type and an ancestor type (such as its parent) is the ancestor type. The union of sibling types is a subtype of their common ancestor (that is, all operations permitted on their common ancestor are permitted on the union type, but they may also have other valid operations in common).

[Existential](https://en.wikipedia.org/wiki/Existential_quantifier) types are frequently used in connection with [record types](https://en.wikipedia.org/wiki/Record_(computer_science)) to represent [modules](https://en.wikipedia.org/wiki/Module_(programming)) and [abstract data types](https://en.wikipedia.org/wiki/Abstract_data_type), due to their ability to separate implementation from interface. For example, the type "T = ∃X { a: X; f: (X → int); }" describes a module interface that has a data member named *a* of type *X* and a function named *f* that takes a parameter of the *same* type *X* and returns an integer. This could be implemented in different ways; for example:

* intT = { a: int; f: (int → int); }
* floatT = { a: float; f: (float → int); }

These types are both subtypes of the more general existential type T and correspond to concrete implementation types, so any value of one of these types is a value of type T. Given a value "t" of type "T", we know that "t.f(t.a)" is well-typed, regardless of what the abstract type *X* is. This gives flexibility for choosing types suited to a particular implementation, while clients that use only values of the interface type—the existential type—are isolated from these choices.

In general it's impossible for the typechecker to infer which existential type a given module belongs to. In the above example intT { a: int; f: (int → int); } could also have the type ∃X { a: X; f: (X → int); }. The simplest solution is to annotate every module with its intended type, e.g.:

* intT = { a: int; f: (int → int); } **as** ∃X { a: X; f: (X → int); }

Although abstract data types and modules had been implemented in programming languages for quite some time, it wasn't until 1988 that [John C. Mitchell](https://en.wikipedia.org/wiki/John_C._Mitchell) and [Gordon Plotkin](https://en.wikipedia.org/wiki/Gordon_Plotkin) established the formal theory under the slogan: "Abstract [data] types have existential type". The theory is a second-order [typed lambda calculus](https://en.wikipedia.org/wiki/Typed_lambda_calculus) similar to [System F](https://en.wikipedia.org/wiki/System_F), but with existential instead of universal quantification.

In a type system with [Gradual typing](https://en.wikipedia.org/wiki/Gradual_typing), variables may be assigned a type either at [compile-time](https://en.wikipedia.org/wiki/Compile-time) (which is static typing), or at [runtime](https://en.wikipedia.org/wiki/Execution_(computing)) (which is dynamic typing). This allows software developers to choose either type paradigm as appropriate, from within a single language. Gradual typing uses a special type named *dynamic* to represent statically unknown types; gradual typing replaces the notion of type equality with a new relation called *consistency* that relates the dynamic type to every other type. The consistency relation is symmetric but not transitive.

## Explicit or implicit declaration and inference

[[edit](/w/index.php?title=Type_system&action=edit&section=21)]

Many static type systems, such as those of C and Java, require *type declarations*: the programmer must explicitly associate each variable with a specific type. Others, such as Haskell's, perform *[type inference](https://en.wikipedia.org/wiki/Type_inference)*: the compiler draws conclusions about the types of variables based on how programmers use those variables. For example, given a function `f(x, y)` that adds `x` and `y` together, the compiler can infer that `x` and `y` must be numbers—since addition is only defined for numbers. Thus, any call to `f` elsewhere in the program that specifies a non-numeric type (such as a string or list) as an argument would signal an error.

Numerical and string constants and expressions in code can and often do imply type in a particular context. For example, an expression `3.14` might imply a type of [floating-point](https://en.wikipedia.org/wiki/Floating-point), while `[1, 2, 3]` might imply a list of integers—typically an [array](https://en.wikipedia.org/wiki/Array_data_structure).

Type inference is in general possible, if it is [computable](https://en.wikipedia.org/wiki/Computable_function) in the type system in question. Moreover, even if inference is not computable in general for a given type system, inference is often possible for a large subset of real-world programs. Haskell's type system, a version of [Hindley–Milner](https://en.wikipedia.org/wiki/Type_inference#Hindley%E2%80%93Milner_type_inference_algorithm), is a restriction of [System Fω](https://en.wikipedia.org/wiki/System_F-omega) to so-called rank-1 polymorphic types, in which type inference is computable. Most Haskell compilers allow arbitrary-rank polymorphism as an extension, but this makes type inference not computable. (Type checking is [decidable](https://en.wikipedia.org/wiki/Decidability_(logic)), however, and rank-1 programs still have type inference; higher rank polymorphic programs are rejected unless given explicit type annotations.)

A type system that assigns types to terms in type environments using [typing rules](https://en.wikipedia.org/wiki/Typing_rule) is naturally associated with the [decision problems](https://en.wikipedia.org/wiki/Decision_problem) of [type checking](https://en.wikipedia.org/wiki/Type_checking), [typability](https://en.wikipedia.org/wiki/Typability), and [type inhabitation](https://en.wikipedia.org/wiki/Type_inhabitation).

* Given a type environment 



  Γ
  {\displaystyle \Gamma }
  ![{\displaystyle \Gamma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/4cfde86a3f7ec967af9955d0988592f0693d2b19), a term 



  e
  {\displaystyle e}
  ![{\displaystyle e}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd253103f0876afc68ebead27a5aa9867d927467), and a type 



  τ
  {\displaystyle \tau }
  ![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c), decide whether the term 



  e
  {\displaystyle e}
  ![{\displaystyle e}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd253103f0876afc68ebead27a5aa9867d927467) can be assigned the type 



  τ
  {\displaystyle \tau }
  ![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c) in the type environment.
* Given a term 



  e
  {\displaystyle e}
  ![{\displaystyle e}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd253103f0876afc68ebead27a5aa9867d927467), decide whether there exists a type environment 



  Γ
  {\displaystyle \Gamma }
  ![{\displaystyle \Gamma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/4cfde86a3f7ec967af9955d0988592f0693d2b19) and a type 



  τ
  {\displaystyle \tau }
  ![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c) such that the term 



  e
  {\displaystyle e}
  ![{\displaystyle e}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd253103f0876afc68ebead27a5aa9867d927467) can be assigned the type 



  τ
  {\displaystyle \tau }
  ![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c) in the type environment 



  Γ
  {\displaystyle \Gamma }
  ![{\displaystyle \Gamma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/4cfde86a3f7ec967af9955d0988592f0693d2b19).
* Given a type environment 



  Γ
  {\displaystyle \Gamma }
  ![{\displaystyle \Gamma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/4cfde86a3f7ec967af9955d0988592f0693d2b19) and a type 



  τ
  {\displaystyle \tau }
  ![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c), decide whether there exists a term 



  e
  {\displaystyle e}
  ![{\displaystyle e}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd253103f0876afc68ebead27a5aa9867d927467) that can be assigned the type 



  τ
  {\displaystyle \tau }
  ![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c) in the type environment.

## Unified type system

[[edit](/w/index.php?title=Type_system&action=edit&section=23)]

Some languages like [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) or [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)) have a unified type system. This means that all [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) types including primitive types inherit from a single root object. Every type in [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) inherits from the Object class. Some languages, like [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) and [Raku](https://en.wikipedia.org/wiki/Raku_(programming_language)), have a root type but also have primitive types that are not objects. Java provides wrapper object types that exist together with the primitive types so developers can use either the wrapper object types or the simpler non-object primitive types. Raku automatically converts primitive types to objects when their methods are accessed.

## Compatibility: equivalence and subtyping

[[edit](/w/index.php?title=Type_system&action=edit&section=24)]

A type checker for a statically typed language must verify that the type of any [expression](https://en.wikipedia.org/wiki/Expression_(programming)) is consistent with the type expected by the context in which that expression appears. For example, in an [assignment statement](https://en.wikipedia.org/wiki/Assignment_statement) of the form `x := e`,
the inferred type of the expression *`e`* must be consistent with the declared or inferred type of the variable `x`. This notion of consistency, called *compatibility*, is specific to each programming language.

If the type of *`e`* and the type of `x` are the same, and assignment is allowed for that type, then this is a valid expression. Thus, in the simplest type systems, the question of whether two types are compatible reduces to that of whether they are *equal* (or *equivalent*). Different languages, however, have different criteria for when two type expressions are understood to denote the same type. These different *equational theories* of types vary widely, two extreme cases being *[structural type systems](https://en.wikipedia.org/wiki/Structural_type_system)*, in which any two types that describe values with the same structure are equivalent, and *[nominative type systems](https://en.wikipedia.org/wiki/Nominative_type_system)*, in which no two [syntactically](https://en.wikipedia.org/wiki/Syntax_(programming_language)) distinct type expressions denote the same type (*i.e.*, types must have the same "name" to be equal).

In languages with [subtyping](https://en.wikipedia.org/wiki/Subtyping), the compatibility relation is more complex: If `B` is a subtype of `A`, then a value of type `B` can be used in a context where one of type `A` is expected ([covariant](https://en.wikipedia.org/wiki/Type_variance)), even if the reverse is not true. Like equivalence, the subtype relation is defined differently for each programming language, with many variations possible. The presence of parametric or [ad hoc polymorphism](https://en.wikipedia.org/wiki/Ad_hoc_polymorphism) in a language may also have implications for type compatibility.

1. **[^](#cite_ref-Burroughs_4-0)** The [Burroughs ALGOL computer](https://en.wikipedia.org/wiki/Burroughs_B6x00-7x00_instruction_set) line determined a memory location's contents by its flag bits. Flag bits specify the contents of a memory location. Instruction, data type, and functions are specified by a 3 bit code in addition to its 48 bit contents. Only the MCP (Master Control Program) could write to the flag code bits.
2. **[^](#cite_ref-leakyCondition_8-0)** For example, a [leaky abstraction](https://en.wikipedia.org/wiki/Leaky_abstraction) might surface during development, which may show that more type development is needed. —"The evaluation of a well-typed program always terminates".—B. Nordström, K. Petersson, and J. M. Smith [A systematic change in variables to avoid capture of a free variable can introduce error](https://en.wikipedia.org/wiki/SECD_machine#Landin's_contribution), in a functional programming language where functions are first class citizens. —From the [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus) article.

1. ^ [***a***](#cite_ref-Sethi1997_5-0) [***b***](#cite_ref-Sethi1997_5-1) Sethi, R. (1996). *Programming languages: Concepts and constructs* (2nd ed.). Addison-Wesley. p. 142. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-59065-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-59065-4). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [604732680](https://search.worldcat.org/oclc/604732680).
2. **[^](#cite_ref-hlcs_6-0)**
3. **[^](#cite_ref-tfp12_7-0)** Turner, D.A. (12 June 2012). ["Some History of Functional Programming Languages"](https://www.cs.kent.ac.uk/people/staff/dat/tfp12/tfp12.pdf) (PDF). *invited lecture at TFP12, at St Andrews University*. See the section on Algol 60.
4. **[^](#cite_ref-9)** "... any
   sound, decidable type system must be incomplete" —D. Remy (2017). p. 29, Remy, Didier. ["Type systems for programming languages"](https://web.archive.org/web/20171114202221/http://gallium.inria.fr/~remy/mpri/cours1.pdf) (PDF). Archived from [the original](http://gallium.inria.fr/~remy/mpri/cours1.pdf) (PDF) on 14 November 2017. Retrieved 26 May 2013.
5. ^ [***a***](#cite_ref-Skeet_11-0) [***b***](#cite_ref-Skeet_11-1) [***c***](#cite_ref-Skeet_11-2) Skeet, Jon (2019). *C# in Depth* (4 ed.). Manning. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1617294532](https://en.wikipedia.org/wiki/Special:BookSources/978-1617294532).
6. **[^](#cite_ref-12)** Miglani, Gaurav (2018). ["Dynamic Method Dispatch or Runtime Polymorphism in Java"](https://www.geeksforgeeks.org/dynamic-method-dispatch-runtime-polymorphism-java/). [Archived](https://web.archive.org/web/20201207174217/https://www.geeksforgeeks.org/dynamic-method-dispatch-runtime-polymorphism-java/) from the original on 2020-12-07. Retrieved 2021-03-28.
7. **[^](#cite_ref-13)** Wright, Andrew K. (1995). [*Practical Soft Typing*](https://dl.acm.org/doi/10.5555/269586) (PhD). Rice University. [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[1911/16900](https://hdl.handle.net/1911%2F16900).
8. **[^](#cite_ref-14)** ["dynamic (C# Reference)"](http://msdn.microsoft.com/en-us/library/dd264741.aspx). *[MSDN Library](https://en.wikipedia.org/wiki/MSDN_Library)*. Microsoft. Retrieved 14 January 2014.
9. **[^](#cite_ref-15)** ["std::any — Rust"](https://doc.rust-lang.org/std/any/index.html). *doc.rust-lang.org*. Retrieved 2021-07-07.
10. **[^](#cite_ref-16)** 
    Meijer, Erik; Drayton, Peter. ["Static Typing Where Possible, Dynamic Typing When Needed: The End of the Cold War Between Programming Languages"](http://research.microsoft.com/en-us/um/people/emeijer/Papers/RDL04Meijer.pdf) (PDF). [Microsoft](https://en.wikipedia.org/wiki/Microsoft) Corporation.
11. **[^](#cite_ref-17)** 
    Laucher, Amanda; Snively, Paul (2012). ["Types vs Tests"](http://www.infoq.com/presentations/Types-Tests). InfoQ.
12. **[^](#cite_ref-18)** 
    Xi, Hongwei (1998). *Dependent Types in Practical Programming* (PhD). Department of Mathematical Sciences, Carnegie Mellon University. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.41.548](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.41.548).  
    Xi, Hongwei; Pfenning, Frank (1999). "Dependent Types in Practical Programming". *Proceedings of the 26th ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages*. ACM. pp. 214–227. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.69.2042](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.69.2042). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/292540.292560](https://doi.org/10.1145%2F292540.292560). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1581130953](https://en.wikipedia.org/wiki/Special:BookSources/1581130953). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [245490](https://api.semanticscholar.org/CorpusID:245490).
13. **[^](#cite_ref-19)** [Visual Basic](https://en.wikipedia.org/wiki/Visual_Basic) is an example of a language that is both type-safe and memory-safe.
14. **[^](#cite_ref-20)** ["4.2.2 The Strict Variant of ECMAScript"](http://www.ecma-international.org/ecma-262/11.0/index.html#sec-strict-variant-of-ecmascript). [*ECMAScript® 2020 Language Specification*](http://www.ecma-international.org/publications/standards/Ecma-262.htm) (11th ed.). ECMA. June 2020. ECMA-262.
15. **[^](#cite_ref-21)** ["Strict mode – JavaScript"](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode). *MDN*. Developer.mozilla.org. 2013-07-03. Retrieved 2013-07-17.
16. **[^](#cite_ref-22)** ["Strict Mode (JavaScript)"](http://msdn.microsoft.com/en-us/library/ie/br230269(v=vs.94).aspx). *MSDN*. Microsoft. Retrieved 2013-07-17.
17. **[^](#cite_ref-23)** ["Strict typing"](http://php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration.strict). *PHP Manual: Language Reference: Functions*.
18. ^ [***a***](#cite_ref-Bracha_24-0) [***b***](#cite_ref-Bracha_24-1) Bracha, G. ["Pluggable Types"](http://bracha.org/pluggableTypesPosition.pdf) (PDF).
19. **[^](#cite_ref-25)** ["Sure. It's called "gradual typing", and I would qualify it as trendy. ..."](https://stackoverflow.com/questions/13399960/is-there-a-language-that-allows-both-static-and-dynamic-typing/13414347#13414347) *Is there a language that allows both static and dynamic typing?*. stackoverflow. 2012.
20. ^ [***a***](#cite_ref-K03_28-0) [***b***](#cite_ref-K03_28-1) [***c***](#cite_ref-K03_28-2) Kopylov, Alexei (2003). "Dependent intersection: A new way of defining records in type theory". *18th IEEE Symposium on Logic in Computer Science*. LICS 2003. IEEE Computer Society. pp. 86–95. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.89.4223](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.89.4223). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/LICS.2003.1210048](https://doi.org/10.1109%2FLICS.2003.1210048).
21. **[^](#cite_ref-29)** Mitchell, John C.; Plotkin, Gordon D. (July 1988). ["Abstract Types Have Existential Type"](http://theory.stanford.edu/~jcm/papers/mitch-plotkin-88.pdf) (PDF). *ACM Trans. Program. Lang. Syst*. **10** (3): 470–502. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/44501.45065](https://doi.org/10.1145%2F44501.45065). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1222153](https://api.semanticscholar.org/CorpusID:1222153).
22. ^ [***a***](#cite_ref-siek_30-0) [***b***](#cite_ref-siek_30-1) Siek, Jeremy (24 March 2014). ["What is gradual typing?"](http://homes.soic.indiana.edu/jsiek/what-is-gradual-typing/).
23. **[^](#cite_ref-siekTaha_31-0)** Siek, Jeremy; Taha, Walid (September 2006). [*Gradual Typing for Functional Languages*](http://scheme2006.cs.uchicago.edu/13-siek.pdf) (PDF). *Scheme and Functional Programming 2006*. [University of Chicago](https://en.wikipedia.org/wiki/University_of_Chicago). pp. 81–92.
24. **[^](#cite_ref-32)**
25. **[^](#cite_ref-33)** "8.2.4 Type system unification". [*C# Language Specification*](http://www.ecma-international.org/publications/standards/Ecma-334.htm) (5th ed.). ECMA. December 2017. ECMA-334.
26. **[^](#cite_ref-34)** ["Native Types"](https://docs.perl6.org/language/nativetypes). *Perl 6 Documentation*.
27. **[^](#cite_ref-35)** ["Numerics, § Auto-boxing"](https://docs.perl6.org/language/numerics#Auto-boxing). *Perl 6 Documentation*.