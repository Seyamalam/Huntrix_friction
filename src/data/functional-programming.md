# Functional programming

* Source: https://en.wikipedia.org/wiki/Functional_programming

---

In [computer science](https://en.wikipedia.org/wiki/Computer_science), **functional programming** is a [programming paradigm](https://en.wikipedia.org/wiki/Programming_paradigm) where programs are constructed by [applying](https://en.wikipedia.org/wiki/Function_application) and [composing functions](https://en.wikipedia.org/wiki/Function_composition_(computer_science)). It is a [declarative programming](https://en.wikipedia.org/wiki/Declarative_programming) paradigm in which function definitions are [trees](https://en.wikipedia.org/wiki/Tree_(data_structure)) of [expressions](https://en.wikipedia.org/wiki/Expression_(computer_science)) that map [values](https://en.wikipedia.org/wiki/Value_(computer_science)) to other values, rather than a sequence of [imperative](https://en.wikipedia.org/wiki/Imperative_programming) [statements](https://en.wikipedia.org/wiki/Statement_(computer_science)) which update the [running state](https://en.wikipedia.org/wiki/State_(computer_science)) of the program.

In functional programming, functions are treated as [first-class entities](https://en.wikipedia.org/wiki/First-class_object), meaning that they can be bound to names (including local [identifiers](https://en.wikipedia.org/wiki/Identifier_(computer_languages))), passed as [arguments](https://en.wikipedia.org/wiki/Parameter_(computer_programming)), and [returned](https://en.wikipedia.org/wiki/Return_value) from other functions, just as any other [data type](https://en.wikipedia.org/wiki/Data_type) can. This allows programs to be written in a [declarative](https://en.wikipedia.org/wiki/Declarative_programming) and [composable](https://en.wikipedia.org/wiki/Composability) style, where small functions are combined in a [modular](https://en.wikipedia.org/wiki/Modular_programming) manner.

Functional programming is sometimes treated as synonymous with [purely functional programming](https://en.wikipedia.org/wiki/Purely_functional_programming), a subset of functional programming that treats all functions as [deterministic](https://en.wikipedia.org/wiki/Deterministic_system) mathematical [functions](https://en.wikipedia.org/wiki/Function_(mathematics)), or [pure functions](https://en.wikipedia.org/wiki/Pure_function). When a pure function is called with some given arguments, it will always return the same result, and cannot be affected by any mutable [state](https://en.wikipedia.org/wiki/State_(computer_science)) or other [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)). This is in contrast with impure [procedures](https://en.wikipedia.org/wiki/Procedure_(computer_science)), common in [imperative programming](https://en.wikipedia.org/wiki/Imperative_programming), which can have side effects (such as modifying the program's state or taking input from a user). Proponents of purely functional programming claim that by restricting side effects, programs can have fewer [bugs](https://en.wikipedia.org/wiki/Software_bug), be easier to [debug](https://en.wikipedia.org/wiki/Debugging) and [test](https://en.wikipedia.org/wiki/Software_testing), and be more suited to [formal verification](https://en.wikipedia.org/wiki/Formal_verification).

Functional programming has its roots in academia, evolving from the [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus), a formal system of computation based only on functions. Functional programming has historically been less popular than imperative programming, but many functional languages are seeing use today in industry and education, including [Common Lisp](https://en.wikipedia.org/wiki/Common_Lisp), [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)), [Clojure](https://en.wikipedia.org/wiki/Clojure), [Wolfram Language](https://en.wikipedia.org/wiki/Wolfram_Language), [Racket](https://en.wikipedia.org/wiki/Racket_(programming_language)), [Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language)), [Elixir](https://en.wikipedia.org/wiki/Elixir_(programming_language)), [OCaml](https://en.wikipedia.org/wiki/OCaml), [Haskell](https://en.wikipedia.org/wiki/Haskell), and [F#](https://en.wikipedia.org/wiki/F_Sharp_(programming_language)). [Lean](https://en.wikipedia.org/wiki/Lean_(proof_assistant)) is a functional programming language commonly used for verifying mathematical theorems. Functional programming is also key to some languages that have found success in specific domains, like [JavaScript](https://en.wikipedia.org/wiki/JavaScript) in the Web, [R](https://en.wikipedia.org/wiki/R_(programming_language)) in statistics, [J](https://en.wikipedia.org/wiki/J_(programming_language)), [K](https://en.wikipedia.org/wiki/K_(programming_language)) and [Q](https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)) in financial analysis, and [XQuery](https://en.wikipedia.org/wiki/XQuery)/[XSLT](https://en.wikipedia.org/wiki/XSLT) for [XML](https://en.wikipedia.org/wiki/XML). Domain-specific declarative languages like [SQL](https://en.wikipedia.org/wiki/SQL) and [Lex](https://en.wikipedia.org/wiki/Lex_(software))/[Yacc](https://en.wikipedia.org/wiki/Yacc) use some elements of functional programming, such as not allowing [mutable values](https://en.wikipedia.org/wiki/Mutable_object). In addition, many other programming languages support programming in a functional style or have implemented features from functional programming, such as [C++](https://en.wikipedia.org/wiki/C%2B%2B) (since [C++11](https://en.wikipedia.org/wiki/C%2B%2B11)), [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)), [Kotlin](https://en.wikipedia.org/wiki/Kotlin), [Perl](https://en.wikipedia.org/wiki/Perl), [PHP](https://en.wikipedia.org/wiki/PHP), [Python](https://en.wikipedia.org/wiki/Python_(programming_language)), [Go](https://en.wikipedia.org/wiki/Go_(programming_language)), [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)), [Raku](https://en.wikipedia.org/wiki/Raku_(programming_language)), [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)), and [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) (since Java 8).

## History

The [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus), developed in the 1930s by [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church), is a [formal system](https://en.wikipedia.org/wiki/Formal_system) of [computation](https://en.wikipedia.org/wiki/Computation) built from [function application](https://en.wikipedia.org/wiki/Function_application). In 1937 [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing) proved that the lambda calculus and [Turing machines](https://en.wikipedia.org/wiki/Turing_machines) are equivalent models of computation, showing that the lambda calculus is [Turing complete](https://en.wikipedia.org/wiki/Turing_complete). Lambda calculus forms the basis of all functional programming languages. An equivalent theoretical formulation, [combinatory logic](https://en.wikipedia.org/wiki/Combinatory_logic), was developed by [Moses Schönfinkel](https://en.wikipedia.org/wiki/Moses_Sch%C3%B6nfinkel) and [Haskell Curry](https://en.wikipedia.org/wiki/Haskell_Curry) in the 1920s and 1930s.

Church later developed a weaker system, the [simply typed lambda calculus](https://en.wikipedia.org/wiki/Simply_typed_lambda_calculus), which extended the lambda calculus by assigning a [data type](https://en.wikipedia.org/wiki/Data_type) to all terms. This forms the basis for statically typed functional programming.

The first [high-level](https://en.wikipedia.org/wiki/High-level_programming_language) functional programming language, [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)), was developed in the late 1950s for the [IBM 700/7000 series](https://en.wikipedia.org/wiki/IBM_700/7000_series#Scientific_Architecture) of scientific computers by [John McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)) while at [Massachusetts Institute of Technology](https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology) (MIT). Lisp functions were defined using Church's lambda notation, extended with a label construct to allow [recursive](https://en.wikipedia.org/wiki/Recursion_(computer_science)) functions. Lisp first introduced many paradigmatic features of functional programming, though early Lisps were [multi-paradigm languages](https://en.wikipedia.org/wiki/Programming_paradigm#Multi-paradigm), and incorporated support for numerous programming styles as new paradigms evolved. Later dialects, such as [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) and [Clojure](https://en.wikipedia.org/wiki/Clojure), and offshoots such as [Dylan](https://en.wikipedia.org/wiki/Dylan_(programming_language)) and [Julia](https://en.wikipedia.org/wiki/Julia_(programming_language)), sought to simplify and rationalise Lisp around a cleanly functional core, while [Common Lisp](https://en.wikipedia.org/wiki/Common_Lisp) was designed to preserve and update the paradigmatic features of the numerous older dialects it replaced.

[Information Processing Language](https://en.wikipedia.org/wiki/Information_Processing_Language) (IPL), 1956, is sometimes cited as the first computer-based functional programming language. It is an [assembly-style language](https://en.wikipedia.org/wiki/Assembly_language) for manipulating lists of symbols. It does have a notion of *generator*, which amounts to a function that accepts a function as an argument, and, since it is a [low-level programming language](https://en.wikipedia.org/wiki/Low-level_programming_language), code can be data, so IPL can be regarded as having higher-order functions. However, it relies heavily on the mutating list structure and similar imperative features.

[Kenneth E. Iverson](https://en.wikipedia.org/wiki/Kenneth_E._Iverson) developed [APL](https://en.wikipedia.org/wiki/APL_(programming_language)) in the early 1960s, described in his 1962 book *A Programming Language* ([ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780471430148](https://en.wikipedia.org/wiki/Special:BookSources/9780471430148)). APL was the primary influence on [John Backus](https://en.wikipedia.org/wiki/John_Backus)'s [FP](https://en.wikipedia.org/wiki/FP_(programming_language)). In the early 1990s, Iverson and [Roger Hui](https://en.wikipedia.org/wiki/Roger_Hui) created [J](https://en.wikipedia.org/wiki/J_(programming_language)). In the mid-1990s, [Arthur Whitney](https://en.wikipedia.org/wiki/Arthur_Whitney_(computer_scientist)), who had previously worked with Iverson, created [K](https://en.wikipedia.org/wiki/K_(programming_language)), which is used commercially in financial industries along with its descendant [Q](https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)).

In the mid-1960s, [Peter Landin](https://en.wikipedia.org/wiki/Peter_Landin) invented [SECD machine](https://en.wikipedia.org/wiki/SECD_machine), the first [abstract machine](https://en.wikipedia.org/wiki/Abstract_machine) for a functional programming language, described a correspondence between [ALGOL 60](https://en.wikipedia.org/wiki/ALGOL_60) and the [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus), and proposed the [ISWIM](https://en.wikipedia.org/wiki/ISWIM) programming language.

[John Backus](https://en.wikipedia.org/wiki/John_Backus) presented [FP](https://en.wikipedia.org/wiki/FP_(programming_language)) in his 1977 [Turing Award](https://en.wikipedia.org/wiki/Turing_Award) lecture "Can Programming Be Liberated From the [von Neumann](https://en.wikipedia.org/wiki/Von_Neumann_architecture) Style? A Functional Style and its Algebra of Programs". He defines functional programs as being built up in a hierarchical way by means of "combining forms" that allow an "algebra of programs"; in modern language, this means that functional programs follow the [principle of compositionality](https://en.wikipedia.org/wiki/Principle_of_compositionality). Backus's paper popularized research into functional programming, though it emphasized [function-level programming](https://en.wikipedia.org/wiki/Function-level_programming) rather than the lambda-calculus style now associated with functional programming.

The 1973 language [ML](https://en.wikipedia.org/wiki/ML_(programming_language)) was created by [Robin Milner](https://en.wikipedia.org/wiki/Robin_Milner) at the [University of Edinburgh](https://en.wikipedia.org/wiki/University_of_Edinburgh), and [David Turner](https://en.wikipedia.org/wiki/David_Turner_(computer_scientist)) developed the language [SASL](https://en.wikipedia.org/wiki/SASL_(programming_language)) at the [University of St Andrews](https://en.wikipedia.org/wiki/University_of_St_Andrews). Also in Edinburgh in the 1970s, Burstall and Darlington developed the functional language [NPL](https://en.wikipedia.org/wiki/NPL_(programming_language)). NPL was based on [Kleene Recursion Equations](https://en.wikipedia.org/wiki/Kleene%27s_recursion_theorem) and was first introduced in their work on program transformation. Burstall, MacQueen and Sannella then incorporated the [polymorphic](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) type checking from ML to produce the language [Hope](https://en.wikipedia.org/wiki/Hope_(programming_language)). ML eventually developed into several dialects, the most common of which are now [OCaml](https://en.wikipedia.org/wiki/OCaml) and [Standard ML](https://en.wikipedia.org/wiki/Standard_ML).

In the 1970s, [Guy L. Steele](https://en.wikipedia.org/wiki/Guy_L._Steele) and [Gerald Jay Sussman](https://en.wikipedia.org/wiki/Gerald_Jay_Sussman) developed [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)), as described in the [Lambda Papers](https://en.wikipedia.org/wiki/Lambda_Papers) and the 1985 textbook *[Structure and Interpretation of Computer Programs](https://en.wikipedia.org/wiki/Structure_and_Interpretation_of_Computer_Programs)*. Scheme was the first dialect of lisp to use [lexical scoping](https://en.wikipedia.org/wiki/Lexical_scope) and to require [tail-call optimization](https://en.wikipedia.org/wiki/Tail-call_optimization), features that encourage functional programming.

In the 1980s, [Per Martin-Löf](https://en.wikipedia.org/wiki/Per_Martin-L%C3%B6f) developed [intuitionistic type theory](https://en.wikipedia.org/wiki/Intuitionistic_type_theory) (also called *constructive* type theory), which associated functional programs with [constructive proofs](https://en.wikipedia.org/wiki/Constructive_proof) expressed as [dependent types](https://en.wikipedia.org/wiki/Dependent_type). This led to new approaches to [interactive theorem proving](https://en.wikipedia.org/wiki/Interactive_theorem_proving) and has influenced the development of subsequent functional programming languages.

The lazy functional language, [Miranda](https://en.wikipedia.org/wiki/Miranda_(programming_language)), developed by David Turner, initially appeared in 1985 and had a strong influence on [Haskell](https://en.wikipedia.org/wiki/Haskell). With Miranda being proprietary, Haskell began with a consensus in 1987 to form an [open standard](https://en.wikipedia.org/wiki/Open_standard) for functional programming research; implementation releases have been ongoing as of 1990.

More recently it has found use in niches such as parametric [CAD](https://en.wikipedia.org/wiki/Computer_Aided_Design) in the [OpenSCAD](https://en.wikipedia.org/wiki/OpenSCAD) language built on the [CGAL](https://en.wikipedia.org/wiki/CGAL) framework, although its restriction on reassigning values (all values are treated as constants) has led to confusion among users who are unfamiliar with functional programming as a concept.

Functional programming continues to be used in commercial settings.

## Concepts

A number of concepts and paradigms are specific to functional programming, and generally foreign to [imperative programming](https://en.wikipedia.org/wiki/Imperative_programming) (including [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)). However, programming languages often cater to several programming paradigms, so programmers using "mostly imperative" languages may have utilized some of these concepts.

### First-class and higher-order functions

[Higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function) are functions that can either take other functions as arguments or return them as results. In calculus, an example of a higher-order function is the [differential operator](https://en.wikipedia.org/wiki/Differential_operator) 

d

/

d
x

{\displaystyle d/dx}

, which returns the [derivative](https://en.wikipedia.org/wiki/Derivative) of a function 

f

{\displaystyle f}

.

Higher-order functions are closely related to [first-class functions](https://en.wikipedia.org/wiki/First-class_function) in that higher-order functions and first-class functions both allow functions as arguments and results of other functions. The distinction between the two is subtle: "higher-order" describes a mathematical concept of functions that operate on other functions, while "first-class" is a computer science term for programming language entities that have no restriction on their use (thus first-class functions can appear anywhere in the program that other first-class entities like numbers can, including as arguments to other functions and as their return values).

Higher-order functions enable [partial application](https://en.wikipedia.org/wiki/Partial_application) or [currying](https://en.wikipedia.org/wiki/Currying), a technique that applies a function to its arguments one at a time, with each application returning a new function that accepts the next argument. This lets a programmer succinctly express, for example, the [successor function](https://en.wikipedia.org/wiki/Successor_function) as the addition operator partially applied to the [natural number](https://en.wikipedia.org/wiki/Natural_number) one.

### Pure functions

[Pure functions](https://en.wikipedia.org/wiki/Pure_function) (or expressions) have no [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) (memory or I/O). This means that pure functions have several useful properties, many of which can be used to optimize the code:

* If the result of a pure expression is not used, it can be removed without affecting other expressions.
* If a pure function is called with arguments that cause no side-effects, the result is constant with respect to that argument list (sometimes called [referential transparency](https://en.wikipedia.org/wiki/Referential_transparency) or [idempotence](https://en.wikipedia.org/wiki/Idempotence)), i.e., calling the pure function again with the same arguments returns the same result. (This can enable caching optimizations such as [memoization](https://en.wikipedia.org/wiki/Memoization).)
* If there is no data dependency between two pure expressions, their order can be reversed, or they can be performed in [parallel](https://en.wikipedia.org/wiki/Parallelization) and they cannot interfere with one another (in other terms, the evaluation of any pure expression is [thread-safe](https://en.wikipedia.org/wiki/Thread-safe)).
* If the entire language does not allow side-effects, then any evaluation strategy can be used; this gives the compiler freedom to reorder or combine the evaluation of expressions in a program (for example, using [deforestation](https://en.wikipedia.org/wiki/Deforestation_(computer_science))).

While most compilers for imperative programming languages detect pure functions and perform common-subexpression elimination for pure function calls, they cannot always do this for pre-compiled libraries, which generally do not expose this information, thus preventing optimizations that involve those external functions. Some compilers, such as [gcc](https://en.wikipedia.org/wiki/GNU_Compiler_Collection), add extra keywords for a programmer to explicitly mark external functions as pure, to enable such optimizations. [Fortran 95](https://en.wikipedia.org/wiki/Fortran_95) also lets functions be designated *pure*. C++11 added `constexpr` keyword with similar semantics.

### Recursion

[Iteration](https://en.wikipedia.org/wiki/Iteration) (looping) in functional languages is usually accomplished via [recursion](https://en.wikipedia.org/wiki/Recursion). [Recursive functions](https://en.wikipedia.org/wiki/Recursion_(computer_science)) invoke themselves, letting an operation be repeated until it reaches the [base case](https://en.wikipedia.org/wiki/Recursion_(computer_science)). In general, recursion requires maintaining a [stack](https://en.wikipedia.org/wiki/Call_stack), which consumes space in a linear amount to the depth of recursion. This could make recursion prohibitively expensive to use instead of imperative loops. However, a special form of recursion known as [tail recursion](https://en.wikipedia.org/wiki/Tail_recursion) can be recognized and optimized by a compiler into the same code used to implement iteration in imperative languages. Tail recursion optimization can be implemented by transforming the program into [continuation passing style](https://en.wikipedia.org/wiki/Continuation_passing_style) during compiling, among other approaches.

The [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) language standard requires implementations to support proper tail recursion, meaning they must allow an unbounded number of active tail calls. Proper tail recursion is not simply an optimization; it is a language feature that assures users that they can use recursion to express a loop and doing so would be safe-for-space. Moreover, contrary to its name, it accounts for all tail calls, not just tail recursion. While proper tail recursion is usually implemented by turning code into imperative loops, implementations might implement it in other ways. For example, [Chicken](https://en.wikipedia.org/wiki/Chicken_(Scheme_implementation)) intentionally maintains a stack and lets the [stack overflow](https://en.wikipedia.org/wiki/Stack_overflow). However, when this happens, its [garbage collector](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) will claim space back, allowing an unbounded number of active tail calls even though it does not turn tail recursion into a loop.

Common patterns of recursion can be abstracted away using higher-order functions, with [catamorphisms](https://en.wikipedia.org/wiki/Catamorphism) and [anamorphisms](https://en.wikipedia.org/wiki/Anamorphism) (or "folds" and "unfolds") being the most obvious examples. Such recursion schemes play a role analogous to built-in control structures such as [loops](https://en.wikipedia.org/wiki/Program_loops) in [imperative languages](https://en.wikipedia.org/wiki/Imperative_languages).

Most general purpose functional programming languages allow unrestricted recursion and are [Turing complete](https://en.wikipedia.org/wiki/Turing_complete), which makes the [halting problem](https://en.wikipedia.org/wiki/Halting_problem) [undecidable](https://en.wikipedia.org/wiki/Undecidable_problem), can cause unsoundness of [equational reasoning](https://en.wikipedia.org/wiki/Equational_reasoning), and generally requires the introduction of [inconsistency](https://en.wikipedia.org/wiki/Inconsistency) into the logic expressed by the language's [type system](https://en.wikipedia.org/wiki/Type_system). Some special purpose languages such as [Rocq](https://en.wikipedia.org/wiki/Rocq) allow only [well-founded](https://en.wikipedia.org/wiki/Well-founded) recursion and are [strongly normalizing](https://en.wikipedia.org/wiki/Strongly_normalizing) (nonterminating computations can be expressed only with infinite streams of values called [codata](https://en.wikipedia.org/wiki/Codata_(computer_science))). As a consequence, these languages fail to be Turing complete and expressing certain functions in them is impossible, but they can still express a wide class of interesting computations while avoiding the problems introduced by unrestricted recursion. Functional programming limited to well-founded recursion with a few other constraints is called [total functional programming](https://en.wikipedia.org/wiki/Total_functional_programming).

### Strict versus non-strict evaluation

Functional languages can be categorized by whether they use *strict (eager)* or *non-strict (lazy)* evaluation, concepts that refer to how function arguments are processed when an expression is being evaluated. The technical difference is in the [denotational semantics](https://en.wikipedia.org/wiki/Denotational_semantics) of expressions containing failing or divergent computations. Under strict evaluation, the evaluation of any term containing a failing subterm fails. For example, the [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) statement:

```
print(len([2 + 1, 3 * 2, 1 / 0, 5 - 4]))
```

fails under strict evaluation because of the division by zero in the third element of the list. Under lazy evaluation, the length function returns the value 4 (i.e., the number of items in the list), since evaluating it does not attempt to evaluate the terms making up the list. In brief, strict evaluation always fully evaluates function arguments before invoking the function. Lazy evaluation does not evaluate function arguments unless their values are required to evaluate the function call itself.

The usual implementation strategy for lazy evaluation in functional languages is [graph reduction](https://en.wikipedia.org/wiki/Graph_reduction). Lazy evaluation is used by default in several pure functional languages, including [Miranda](https://en.wikipedia.org/wiki/Miranda_(programming_language)), [Clean](https://en.wikipedia.org/wiki/Clean_(programming_language)), and [Haskell](https://en.wikipedia.org/wiki/Haskell).

Hughes 1984 argues for lazy evaluation as a mechanism for improving program modularity through [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns), by easing independent implementation of producers and consumers of data streams. Launchbury 1993  describes some difficulties that lazy evaluation introduces, particularly in analyzing a program's storage requirements, and proposes an [operational semantics](https://en.wikipedia.org/wiki/Operational_semantics) to aid in such analysis. Harper 2009 proposes including both strict and lazy evaluation in the same language, using the language's type system to distinguish them.

### Type systems

Especially since the development of [Hindley–Milner type inference](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_inference) in the 1970s, functional programming languages have tended to use [typed lambda calculus](https://en.wikipedia.org/wiki/Typed_lambda_calculus), rejecting all invalid programs at compilation time and risking [false positive errors](https://en.wikipedia.org/wiki/False_positives_and_false_negatives#False_positive_error), as opposed to the [untyped lambda calculus](https://en.wikipedia.org/wiki/Untyped_lambda_calculus), that accepts all valid programs at compilation time and risks [false negative errors](https://en.wikipedia.org/wiki/False_positives_and_false_negatives#False_negative_error), used in Lisp and its variants (such as [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language))), as they reject all invalid programs at runtime when the information is enough to not reject valid programs. The use of [algebraic data types](https://en.wikipedia.org/wiki/Algebraic_data_type) makes manipulation of complex data structures convenient; the presence of strong compile-time type checking makes programs more reliable in absence of other reliability techniques like [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), while [type inference](https://en.wikipedia.org/wiki/Type_inference) frees the programmer from the need to manually declare types to the compiler in most cases.

Some research-oriented functional languages such as [Rocq](https://en.wikipedia.org/wiki/Rocq), [Agda](https://en.wikipedia.org/wiki/Agda_(programming_language)), [Cayenne](https://en.wikipedia.org/wiki/Lennart_Augustsson), and [Epigram](https://en.wikipedia.org/wiki/Epigram_(programming_language)) are based on [intuitionistic type theory](https://en.wikipedia.org/wiki/Intuitionistic_type_theory), which lets types depend on terms. Such types are called [dependent types](https://en.wikipedia.org/wiki/Dependent_type). These type systems do not have decidable type inference and are difficult to understand and program with. But dependent types can express arbitrary propositions in [higher-order logic](https://en.wikipedia.org/wiki/Higher-order_logic). Through the [Curry–Howard isomorphism](https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_isomorphism), then, well-typed programs in these languages become a means of writing formal [mathematical proofs](https://en.wikipedia.org/wiki/Mathematical_proof) from which a compiler can generate [certified code](https://en.wikipedia.org/wiki/Formal_verification). While these languages are mainly of interest in academic research (including in [formalized mathematics](https://en.wikipedia.org/wiki/Formalized_mathematics)), they have begun to be used in engineering as well. [Compcert](https://en.wikipedia.org/wiki/Compcert) is a [compiler](https://en.wikipedia.org/wiki/Compiler) for a subset of the language [C](https://en.wikipedia.org/wiki/C_(programming_language)) that is written in [Rocq](https://en.wikipedia.org/wiki/Rocq) and formally verified.

A limited form of dependent types called [generalized algebraic data types](https://en.wikipedia.org/wiki/Generalized_algebraic_data_type) (GADT's) can be implemented in a way that provides some of the benefits of dependently typed programming while avoiding most of its inconvenience. GADT's are available in the [Glasgow Haskell Compiler](https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler), in [OCaml](https://en.wikipedia.org/wiki/OCaml) and in [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)), and have been proposed as additions to other languages including Java and C#.

### Referential transparency

Functional programs do not have assignment statements, that is, the value of a variable in a functional program never changes once defined. This eliminates any chances of side effects because any variable can be replaced with its actual value at any point of execution. So, functional programs are referentially transparent.

Consider [C](https://en.wikipedia.org/wiki/C_(programming_language)) assignment statement `x = x * 10`, this changes the value assigned to the variable `x`. Let us say that the initial value of `x` was `1`, then two consecutive evaluations of the variable `x` yields `10` and `100` respectively. Clearly, replacing `x = x * 10` with either `10` or `100` gives a program a different meaning, and so the expression *is not* referentially transparent. In fact, assignment statements are never referentially transparent.

Now, consider another function such as `int plusOne(int x) { return x + 1; }` *is* transparent, as it does not implicitly change the input x and thus has no such [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)).
Functional programs exclusively use this type of function and are therefore referentially transparent.

### Data structures

Purely functional [data structures](https://en.wikipedia.org/wiki/Data_structure) are often represented in a different way to their [imperative](https://en.wikipedia.org/wiki/Imperative_programming) counterparts. For example, the [array](https://en.wikipedia.org/wiki/Array_data_structure) with constant access and update times is a basic component of most imperative languages, and many imperative data-structures, such as the [hash table](https://en.wikipedia.org/wiki/Hash_table) and [binary heap](https://en.wikipedia.org/wiki/Binary_heap),  are based on arrays. Arrays can be replaced by [maps](https://en.wikipedia.org/wiki/Map_(computer_science)) or random access lists, which admit purely functional implementation, but have [logarithmic](https://en.wikipedia.org/wiki/Logarithm) access and update times. Purely functional data structures have [persistence](https://en.wikipedia.org/wiki/Persistent_data_structure), a property of keeping previous versions of the data structure unmodified. In Clojure, persistent data structures are used as functional alternatives to their imperative counterparts. Persistent vectors, for example, use trees for partial updating. Calling the insert method will result in some but not all nodes being created.

## Comparison to imperative programming

Functional programming is very different from [imperative programming](https://en.wikipedia.org/wiki/Imperative_programming). The most significant differences stem from the fact that functional programming avoids [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)), which are used in imperative programming to implement state and I/O. Pure functional programming completely prevents side-effects and provides referential transparency.

Higher-order functions are rarely used in older imperative programming. A traditional imperative program might use a loop to traverse and modify a list. A functional program, on the other hand, would probably use a higher-order "map" function that takes a function and a list, generating and returning a new list by applying the function to each list item.

### Imperative vs. functional programming

The following two examples (written in [Java](https://en.wikipedia.org/wiki/Java_(programming_language))) achieve the same effect: they multiply all even numbers in an array by 10 and add them all, storing the final sum in the variable `result`.

Traditional imperative loop:

```
int[] numList = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int result = 0;
for (int i: numList) {
    if (i % 2 == 0) {
        result += i * 10;
    }
}
```

Functional programming with higher-order functions:

```
import java.util.Arrays;

int[] numList = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int result = Arrays.stream(numList)
    .filter(n -> n % 2 == 0)
    .map(n -> n * 10)
    .reduce(0, Integer::sum);
```

Sometimes the abstractions offered by functional programming might lead to development of more robust code that avoids certain issues that might arise when building upon large amount of complex, imperative code, such as [off-by-one errors](https://en.wikipedia.org/wiki/Off-by-one_error) (see [Greenspun's tenth rule](https://en.wikipedia.org/wiki/Greenspun%27s_tenth_rule)).

### Simulating state

There are tasks (for example, maintaining a bank account balance) that often seem most naturally implemented with state. Pure functional programming performs these tasks, and I/O tasks such as accepting user input and printing to the screen, in a different way.

The pure functional programming language [Haskell](https://en.wikipedia.org/wiki/Haskell) implements them using [monads](https://en.wikipedia.org/wiki/Monad_(functional_programming)), derived from [category theory](https://en.wikipedia.org/wiki/Category_theory). Monads offer a way to abstract certain types of computational patterns, including (but not limited to) modeling of computations with mutable state (and other side effects such as I/O) in an imperative manner without losing purity. While existing monads may be easy to apply in a program, given appropriate templates and examples, many students find them difficult to understand conceptually, e.g., when asked to define new monads (which is sometimes needed for certain types of libraries).

Functional languages also simulate states by passing around immutable states. This can be done by making a function accept the state as one of its parameters, and return a new state together with the result, leaving the old state unchanged.

Impure functional languages usually include a more direct method of managing mutable state. [Clojure](https://en.wikipedia.org/wiki/Clojure), for example, uses managed references that can be updated by applying pure functions to the current state. This kind of approach enables mutability while still promoting the use of pure functions as the preferred way to express computations.

Alternative methods such as [Hoare logic](https://en.wikipedia.org/wiki/Hoare_logic) and [uniqueness](https://en.wikipedia.org/wiki/Uniqueness_type) have been developed to track side effects in programs. Some modern research languages use [effect systems](https://en.wikipedia.org/wiki/Effect_system) to make the presence of side effects explicit.

### Efficiency issues

Functional programming languages are typically less efficient in their use of [CPU](https://en.wikipedia.org/wiki/Central_processing_unit) and memory than imperative languages such as [C](https://en.wikipedia.org/wiki/C_(programming_language)) and [Pascal](https://en.wikipedia.org/wiki/Pascal_(programming_language)).  This is related to the fact that some mutable data structures like arrays have a very straightforward implementation using present hardware. Flat arrays may be accessed very efficiently with deeply pipelined CPUs, prefetched efficiently through caches (with no complex [pointer chasing](https://en.wikipedia.org/w/index.php?title=Pointer_chasing&action=edit&redlink=1)), or handled with SIMD instructions.  It is also not easy to create their equally efficient general-purpose immutable counterparts. For purely functional languages, the worst-case slowdown is logarithmic in the number of memory cells used, because mutable memory can be represented by a purely functional data structure with logarithmic access time (such as a balanced tree). However, such slowdowns are not universal. For programs that perform intensive numerical computations, functional languages such as [OCaml](https://en.wikipedia.org/wiki/OCaml) and [Clean](https://en.wikipedia.org/wiki/Clean_(programming_language)) are only slightly slower than C according to [The Computer Language Benchmarks Game](https://en.wikipedia.org/wiki/The_Computer_Language_Benchmarks_Game). For programs that handle large [matrices](https://en.wikipedia.org/wiki/Matrix_(mathematics)) and multidimensional [databases](https://en.wikipedia.org/wiki/Database), [array](https://en.wikipedia.org/wiki/Array_programming) functional languages (such as [J](https://en.wikipedia.org/wiki/J_(programming_language)) and [K](https://en.wikipedia.org/wiki/K_(programming_language))) were designed with speed optimizations.

Immutability of data can in many cases lead to execution efficiency by allowing the compiler to make assumptions that are unsafe in an imperative language, thus increasing opportunities for [inline expansion](https://en.wikipedia.org/wiki/Inline_expansion). Even if the involved copying that may seem implicit when dealing with persistent immutable data structures might seem computationally costly, some functional programming languages, like [Clojure](https://en.wikipedia.org/wiki/Clojure) solve this issue by implementing mechanisms for safe memory sharing between *formally* *immutable* data. [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) distinguishes itself by its approach to data immutability which involves immutable [references](https://en.wikipedia.org/wiki/Reference_(computer_science)) and a concept called *lifetimes.*

Immutable data with separation of identity and state and [shared-nothing](https://en.wikipedia.org/wiki/Shared-nothing_architecture) schemes can also potentially be more well-suited for [concurrent and parallel](https://en.wikipedia.org/wiki/Parallel_computing) programming by the virtue of reducing or eliminating the risk of certain concurrency hazards, since concurrent operations are usually [atomic](https://en.wikipedia.org/wiki/Linearizability) and this allows eliminating the need for locks. This is how for example `java.util.concurrent` classes are implemented, where some of them are immutable variants of the corresponding classes that are not suitable for concurrent use. Functional programming languages often have a concurrency model that instead of shared state and synchronization, leverages [message passing](https://en.wikipedia.org/wiki/Message_passing) mechanisms (such as the [actor model](https://en.wikipedia.org/wiki/Actor_model), where each actor is a container for state, behavior, child actors and a message queue). This approach is common in [Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language))/[Elixir](https://en.wikipedia.org/wiki/Elixir_(programming_language)) or [Akka](https://en.wikipedia.org/wiki/Akka_(toolkit)).

[Lazy evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation) may also speed up the program, even asymptotically, whereas it may slow it down at most by a constant factor (however, it may introduce [memory leaks](https://en.wikipedia.org/wiki/Memory_leak) if used improperly). Launchbury 1993 discusses theoretical issues related to memory leaks from lazy evaluation, and O'Sullivan *et al.* 2008 give some practical advice for analyzing and fixing them.
However, the most general implementations of lazy evaluation making extensive use of dereferenced code and data perform poorly on modern processors with deep pipelines and multi-level caches (where a cache miss may cost hundreds of cycles).

#### Abstraction cost

Some functional programming languages might not optimize abstractions such as higher order functions like "[map](https://en.wikipedia.org/wiki/Map_(higher-order_function))" or "[filter](https://en.wikipedia.org/wiki/Filter_(higher-order_function))" as efficiently as the underlying imperative operations. Consider, as an example, the following two ways to check if 5 is an even number in [Clojure](https://en.wikipedia.org/wiki/Clojure):

```
(even? 5)
(.equals (mod 5 2) 0)
```

When [benchmarked](https://en.wikipedia.org/wiki/Benchmarking) using the [Criterium](https://clojars.org/criterium) tool on a [Ryzen 7900X](https://en.wikipedia.org/wiki/Zen_3) GNU/Linux PC in a [Leiningen](https://en.wikipedia.org/wiki/Leiningen_(software)) [REPL](https://en.wikipedia.org/wiki/REPL) 2.11.2, running on [Java VM](https://en.wikipedia.org/wiki/JVM) version 22 and Clojure version 1.11.1, the first implementation, which is implemented as:

```
(defn even?
  "Returns true if n is even, throws an exception if n is not an integer"
  {:added "1.0"
   :static true}
   [n] (if (integer? n)
        (zero? (bit-and (clojure.lang.RT/uncheckedLongCast n) 1))
        (throw (IllegalArgumentException. (str "Argument must be an integer: " n)))))
```

has the mean execution time of 4.76 ms, while the second one, in which `.equals` is a direct invocation of the underlying [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) method, has a mean execution time of 2.8 μs – roughly 1700 times faster. Part of that can be attributed to the type checking and exception handling involved in the implementation of `even?`. For instance the [lo library](https://github.com/samber/lo) for [Go](https://en.wikipedia.org/wiki/Go_(programming_language)), which implements various higher-order functions common in functional programming languages using [generics](https://en.wikipedia.org/wiki/Generic_programming). In a benchmark provided by the library's author, calling `map` is 4% slower than an equivalent `for` loop and has the same [allocation](https://en.wikipedia.org/wiki/Memory_management) profile, which can be attributed to various compiler optimizations, such as [inlining](https://en.wikipedia.org/wiki/Inlining).

One distinguishing feature of [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) are *zero-cost abstractions*. This means that using them imposes no additional runtime overhead. This is achieved thanks to the compiler using [loop unrolling](https://en.wikipedia.org/wiki/Loop_unrolling), where each iteration of a loop, be it imperative or using iterators, is converted into a standalone [Assembly](https://en.wikipedia.org/wiki/Assembly_language) instruction, without the overhead of the loop controlling code. If an iterative operation writes to an array, the resulting array's elements [will be stored in specific CPU registers](https://en.wikipedia.org/wiki/Register_allocation), allowing for [constant-time access](https://en.wikipedia.org/wiki/Time_complexity) at runtime.

### Functional programming in non-functional languages

It is possible to use a functional style of programming in languages that are not traditionally considered functional languages. For example, both [D](https://en.wikipedia.org/wiki/D_(programming_language)) and [Fortran 95](https://en.wikipedia.org/wiki/Fortran_95) explicitly support pure functions.

[JavaScript](https://en.wikipedia.org/wiki/JavaScript), [Lua](https://en.wikipedia.org/wiki/Lua), [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) and [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) had [first class functions](https://en.wikipedia.org/wiki/First-class_function) from their inception. Python had support for "[lambda](https://en.wikipedia.org/wiki/Anonymous_function)", "[map](https://en.wikipedia.org/wiki/Map_(higher-order_function))", "[reduce](https://en.wikipedia.org/wiki/Fold_(higher-order_function))", and "[filter](https://en.wikipedia.org/wiki/Filter_(higher-order_function))" in 1994, as well as closures in Python 2.2, though Python 3 relegated  "reduce" to the `functools` standard library module. First-class functions have been introduced into other mainstream languages such as [Perl](https://en.wikipedia.org/wiki/Perl) 5.0 in 1994, [PHP](https://en.wikipedia.org/wiki/PHP) 5.3, [Visual Basic 9](https://en.wikipedia.org/wiki/Visual_Basic_9), [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) 3.0, [C++11](https://en.wikipedia.org/wiki/C%2B%2B11), and [Kotlin](https://en.wikipedia.org/wiki/Kotlin).

In Perl, [lambda](https://en.wikipedia.org/wiki/Anonymous_function), [map](https://en.wikipedia.org/wiki/Map_(higher-order_function)), [reduce](https://en.wikipedia.org/wiki/Fold_(higher-order_function)), [filter](https://en.wikipedia.org/wiki/Filter_(higher-order_function)), and [closures](https://en.wikipedia.org/wiki/Closure_(computer_science)) are fully supported and frequently used.  The book [Higher-Order Perl](https://en.wikipedia.org/wiki/Higher-Order_Perl), released in 2005, was written to provide an expansive guide on using Perl for functional programming.

In PHP, [anonymous classes](https://en.wikipedia.org/wiki/Anonymous_class), [closures](https://en.wikipedia.org/wiki/Closure_(computer_science)) and lambdas are fully supported. Libraries and language extensions for immutable data structures are being developed to aid programming in the functional style.

In [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), anonymous classes can sometimes be used to simulate closures; however, anonymous classes are not always proper replacements to closures because they have more limited capabilities. Java 8 supports lambda expressions as a replacement for some anonymous classes.

In [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)), anonymous classes are not necessary, because closures and lambdas are fully supported. Libraries and language extensions for immutable data structures are being developed to aid programming in the functional style in C#.

Many [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) [design patterns](https://en.wikipedia.org/wiki/Design_pattern_(computer_science)) are expressible in functional programming terms: for example, the [strategy pattern](https://en.wikipedia.org/wiki/Strategy_pattern) simply dictates use of a higher-order function, and the [visitor](https://en.wikipedia.org/wiki/Visitor_(design_pattern)) pattern roughly corresponds to a [catamorphism](https://en.wikipedia.org/wiki/Catamorphism), or [fold](https://en.wikipedia.org/wiki/Fold_(higher-order_function)).

Similarly, the idea of immutable data from functional programming is often included in imperative programming languages, for example the tuple in Python, which is an immutable array, and Object.freeze() in JavaScript.

## Comparison to logic programming

[Logic programming](https://en.wikipedia.org/wiki/Logic_programming) can be viewed as a generalisation of functional programming, in which functions are a special case of relations.
For example, the function, mother(X) = Y, (every X has only one mother Y) can be represented by the relation mother(X, Y). Whereas functions have a strict input-output pattern of arguments, relations can be queried with any pattern of inputs and outputs. Consider the following logic program:

```
mother(charles, elizabeth).
mother(harry, diana).
```

The program can be queried, like a functional program, to generate mothers from children:

```
?- mother(harry, X).
X = diana.
?- mother(charles, X).
X = elizabeth.
```

But it can also be queried *backwards*, to generate children:

```
?- mother(X, elizabeth).
X = charles.
?- mother(X, diana).
X = harry.
```

It can even be used to generate all instances of the mother relation:

```
?- mother(X, Y).
X = charles,
Y = elizabeth.
X = harry,
Y = diana.
```

Compared with relational syntax, functional syntax is a more compact notation for nested functions. For example, the definition of maternal grandmother in functional syntax can be written in the nested form:

```
maternal_grandmother(X) = mother(mother(X)).
```

The same definition in relational notation needs to be written in the unnested form:

```
maternal_grandmother(X, Y) :- mother(X, Z), mother(Z, Y).
```

Here `:-` means *if* and ` , `means *and*.

However, the difference between the two representations is simply syntactic. In [Ciao](https://en.wikipedia.org/wiki/Ciao_(programming_language)) Prolog, relations can be nested, like functions in functional programming:

```
grandparent(X) := parent(parent(X)).
parent(X) := mother(X).
parent(X) := father(X).

mother(charles) := elizabeth.
father(charles) := phillip.
mother(harry) := diana.
father(harry) := charles.

?- grandparent(X,Y).
X = harry,
Y = elizabeth.
X = harry,
Y = phillip.
```

Ciao transforms the function-like notation into relational form and executes the resulting logic program using the standard Prolog execution strategy.

## Applications

### Text editors

[Emacs](https://en.wikipedia.org/wiki/Emacs), a highly extensible text editor family uses its own [Lisp dialect](https://en.wikipedia.org/wiki/Emacs_Lisp) for writing plugins. The original author of the most popular Emacs implementation, [GNU Emacs](https://en.wikipedia.org/wiki/GNU_Emacs) and Emacs Lisp, [Richard Stallman](https://en.wikipedia.org/wiki/Richard_Stallman) considers Lisp one of his favorite programming languages.

### Spreadsheets

[Spreadsheets](https://en.wikipedia.org/wiki/Spreadsheet) can be considered a form of pure, [zeroth-order](https://en.wikipedia.org/wiki/Higher-order_function), strict-evaluation functional programming system. However, spreadsheets generally lack higher-order functions as well as code reuse, and in some implementations, also lack recursion. Several extensions have been developed for spreadsheet programs to enable higher-order and reusable functions, but so far remain primarily academic in nature.

### Microservices

Due to their [composability](https://en.wikipedia.org/wiki/Composability), functional programming paradigms can be suitable for [microservices](https://en.wikipedia.org/wiki/Microservices)-based architectures.

### Academia

Functional programming is an active area of research in the field of [programming language theory](https://en.wikipedia.org/wiki/Programming_language_theory). There are several [peer-reviewed](https://en.wikipedia.org/wiki/Peer-review) publication venues focusing on functional programming, including the [International Conference on Functional Programming](https://en.wikipedia.org/wiki/International_Conference_on_Functional_Programming), the [Journal of Functional Programming](https://en.wikipedia.org/wiki/Journal_of_Functional_Programming), and the [Symposium on Trends in Functional Programming](https://en.wikipedia.org/w/index.php?title=Symposium_on_Trends_in_Functional_Programming&action=edit&redlink=1).

### Industry

Functional programming has been employed in a wide range of industrial applications. For example, [Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language)), which was developed by the [Swedish](https://en.wikipedia.org/wiki/Sweden) company [Ericsson](https://en.wikipedia.org/wiki/Ericsson) in the late 1980s, was originally used to implement [fault-tolerant](https://en.wikipedia.org/wiki/Fault_tolerance) [telecommunications](https://en.wikipedia.org/wiki/Telecommunications) systems, but has since become popular for building a range of applications at companies such as [Nortel](https://en.wikipedia.org/wiki/Nortel), [Facebook](https://en.wikipedia.org/wiki/Facebook), [Électricité de France](https://en.wikipedia.org/wiki/%C3%89lectricit%C3%A9_de_France) and [WhatsApp](https://en.wikipedia.org/wiki/WhatsApp). [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)), a dialect of [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)), was used as the basis for several applications on early [Apple Macintosh](https://en.wikipedia.org/wiki/Apple_Macintosh) computers and has been applied to problems such as training-[simulation software](https://en.wikipedia.org/wiki/Computer_simulation) and [telescope](https://en.wikipedia.org/wiki/Telescope) control. [OCaml](https://en.wikipedia.org/wiki/OCaml), which was introduced in the mid-1990s, has seen commercial use in areas such as financial analysis, [driver](https://en.wikipedia.org/wiki/Software_driver) verification, industrial [robot](https://en.wikipedia.org/wiki/Robot) programming and static analysis of [embedded software](https://en.wikipedia.org/wiki/Embedded_software). [Haskell](https://en.wikipedia.org/wiki/Haskell), though initially intended as a research language, has also been applied in areas such as aerospace systems, hardware design and web programming.

Other functional programming languages that have seen use in industry include [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)), [F#](https://en.wikipedia.org/wiki/F_Sharp_(programming_language)), [Wolfram Language](https://en.wikipedia.org/wiki/Wolfram_Language), [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)), [Standard ML](https://en.wikipedia.org/wiki/Standard_ML) and [Clojure](https://en.wikipedia.org/wiki/Clojure). [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)) has been widely used in [Data science](https://en.wikipedia.org/wiki/Data_science), while [ClojureScript](https://en.wikipedia.org/wiki/ClojureScript), [Elm](https://en.wikipedia.org/wiki/Elm_(programming_language)) or [PureScript](https://en.wikipedia.org/wiki/PureScript) are some of the functional frontend programming languages used in production. [Elixir](https://en.wikipedia.org/wiki/Elixir_(programming_language))'s [Phoenix framework](https://en.wikipedia.org/wiki/Phoenix_(web_framework)) is also used by some relatively popular commercial projects, such as [Font Awesome](https://en.wikipedia.org/wiki/Font_Awesome) or [Allegro](https://en.wikipedia.org/wiki/Allegro_Platform) (one of the biggest e-commerce platforms in Poland)'s classified ads platform *Allegro Lokalnie.*

Functional "platforms" have been popular in finance for risk analytics (particularly with large investment banks). Risk factors are coded as functions that form interdependent graphs (categories) to measure correlations in market shifts, similar in manner to [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis) optimizations but also for regulatory frameworks such as [Comprehensive Capital Analysis and Review](https://en.wikipedia.org/wiki/Comprehensive_Capital_Analysis_and_Review). Given the use of OCaml and [Caml](https://en.wikipedia.org/wiki/Caml) variations in finance, these systems are sometimes considered related to a [categorical abstract machine](https://en.wikipedia.org/wiki/Categorical_abstract_machine). Functional programming is heavily influenced by [category theory](https://en.wikipedia.org/wiki/Category_theory).

### Education

Many [universities](https://en.wikipedia.org/wiki/University) teach functional programming. Some treat it as an introductory programming concept while others first teach imperative programming methods.

Outside of computer science, functional programming is used to teach problem-solving, algebraic and geometric concepts. It has also been used to teach classical mechanics, as in the book *[Structure and Interpretation of Classical Mechanics](https://en.wikipedia.org/wiki/Structure_and_Interpretation_of_Classical_Mechanics)*.

In particular, [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) has been a relatively popular choice for teaching programming for years.

## See also

* [Eager evaluation](https://en.wikipedia.org/wiki/Eager_evaluation)
* [Functional reactive programming](https://en.wikipedia.org/wiki/Functional_reactive_programming)
* [Inductive functional programming](https://en.wikipedia.org/wiki/Inductive_functional_programming)
* [List of functional programming languages](https://en.wikipedia.org/wiki/List_of_functional_programming_languages)
* [List of functional programming topics](https://en.wikipedia.org/wiki/List_of_functional_programming_topics)
* [Nested function](https://en.wikipedia.org/wiki/Nested_function)
* [Purely functional programming](https://en.wikipedia.org/wiki/Purely_functional_programming)

## Notes and references

1. **^** [Hudak, Paul](https://en.wikipedia.org/wiki/Paul_Hudak) (September 1989). ["Conception, evolution, and application of functional programming languages"](https://web.archive.org/web/20160131083528/http://www.dbnet.ece.ntua.gr/~adamo/languages/books/p359-hudak.pdf) (PDF). *ACM Computing Surveys*. **21** (3): 359–411. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/72551.72554](https://doi.org/10.1145%2F72551.72554). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [207637854](https://api.semanticscholar.org/CorpusID:207637854). Archived from [the original](http://www.dbnet.ece.ntua.gr/~adamo/languages/books/p359-hudak.pdf) (PDF) on 2016-01-31. Retrieved 2013-08-10.
2. ^   [Hughes, John](https://en.wikipedia.org/wiki/John_Hughes_(computer_scientist)) (1984). ["Why Functional Programming Matters"](http://www.cse.chalmers.se/~rjmh/Papers/whyfp.html).
3. ^   Clinger, Will (1987). ["MultiTasking and MacScheme"](http://www.mactech.com/articles/mactech/Vol.03/03.12/Multitasking/index.html). *MacTech*. **3** (12). Retrieved 2008-08-28.
4. ^   Hartheimer, Anne (1987). ["Programming a Text Editor in MacScheme+Toolsmith"](https://web.archive.org/web/20110629183752/http://www.mactech.com/articles/mactech/Vol.03/03.1/SchemeWindows/index.html). *MacTech*. **3** (1). Archived from [the original](http://www.mactech.com/articles/mactech/Vol.03/03.1/SchemeWindows/index.html) on 2011-06-29. Retrieved 2008-08-28.
5. ^   Kidd, Eric. [*Terrorism Response Training in Scheme*](https://web.archive.org/web/20101221110947/http://cufp.galois.com/2007/abstracts.html#EricKidd). CUFP 2007. Archived from [the original](http://cufp.galois.com/2007/abstracts.html#EricKidd) on 2010-12-21. Retrieved 2009-08-26.
6. ^   Cleis, Richard. [*Scheme in Space*](https://web.archive.org/web/20100527100429/http://cufp.galois.com/2006/abstracts.html#RichardCleis). CUFP 2006. Archived from [the original](http://cufp.galois.com/2006/abstracts.html#RichardCleis) on 2010-05-27. Retrieved 2009-08-26.
7. ^   ["Wolfram Language Guide: Functional Programming"](http://reference.wolfram.com/language/guide/FunctionalProgramming.html). 2015. Retrieved 2015-08-24.
8. **^** ["Functional vs. Procedural Programming Language"](https://web.archive.org/web/20071113175801/http://amath.colorado.edu/computing/mmm/funcproc.html). *Department of Applied Math*. University of Colorado. Archived from [the original](http://amath.colorado.edu/computing/mmm/funcproc.html) on 2007-11-13. Retrieved 2006-08-28.
9. **^** ["State-Based Scripting in Uncharted 2"](https://web.archive.org/web/20121215014637/http://www.gameenginebook.com/gdc09-statescripting-uncharted2.pdf) (PDF). Archived from [the original](http://www.gameenginebook.com/gdc09-statescripting-uncharted2.pdf) (PDF) on 2012-12-15. Retrieved 2011-08-08.
10. ^   ["Who uses Erlang for product development?"](http://erlang.org/faq/introduction.html#idp32582608). *Frequently asked questions about Erlang*. Retrieved 2018-04-27.
11. ^   Armstrong, Joe (June 2007). "A history of Erlang". *Proceedings of the third ACM SIGPLAN conference on History of programming languages*. Third ACM SIGPLAN Conference on History of Programming Languages. San Diego, California. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1238844.1238850](https://doi.org/10.1145%2F1238844.1238850). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781595937667](https://en.wikipedia.org/wiki/Special:BookSources/9781595937667).
12. ^   Larson, Jim (March 2009). ["Erlang for concurrent programming"](https://doi.org/10.1145%2F1467247.1467263). *Communications of the ACM*. **52** (3): 48. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1467247.1467263](https://doi.org/10.1145%2F1467247.1467263). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [524392](https://api.semanticscholar.org/CorpusID:524392).
13. **^** ["The Elixir Programming Language"](https://elixir-lang.org/). Retrieved 2021-02-14.
14. ^   Minsky, Yaron; Weeks, Stephen (July 2008). ["Caml Trading — experiences with functional programming on Wall Street"](https://doi.org/10.1017%2FS095679680800676X). *Journal of Functional Programming*. **18** (4): 553–564. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/S095679680800676X](https://doi.org/10.1017%2FS095679680800676X). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [30955392](https://api.semanticscholar.org/CorpusID:30955392).
15. ^   Leroy, Xavier. [*Some uses of Caml in Industry*](https://web.archive.org/web/20111008170929/http://cufp.galois.com/2007/slides/XavierLeroy.pdf) (PDF). CUFP 2007. Archived from [the original](http://cufp.galois.com/2007/slides/XavierLeroy.pdf) (PDF) on 2011-10-08. Retrieved 2009-08-26.
16. ^   ["Haskell in industry"](http://www.haskell.org/haskellwiki/Haskell_in_industry). *Haskell Wiki*. Retrieved 2009-08-26. Haskell has a diverse range of use commercially, from aerospace and defense, to finance, to web startups, hardware design firms and lawnmower manufacturers.
17. ^    [Hudak, Paul](https://en.wikipedia.org/wiki/Paul_Hudak); Hughes, J.; Jones, S. P.; Wadler, P. (June 2007). [*A history of Haskell: being lazy with class*](http://dl.acm.org/citation.cfm?doid=1238844.1238856). Third ACM SIGPLAN Conference on History of Programming Languages. San Diego, California. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1238844.1238856](https://doi.org/10.1145%2F1238844.1238856). Retrieved 2013-09-26.
18. ^   Mansell, Howard (2008). [*Quantitative Finance in F#*](https://web.archive.org/web/20150708125937/http://cufp.galois.com/2008/abstracts.html#MansellHoward). CUFP 2008. Archived from [the original](http://cufp.galois.com/2008/abstracts.html#MansellHoward) on 2015-07-08. Retrieved 2009-08-29.
19. ^   Peake, Alex (2009). [*The First Substantial Line of Business Application in F#*](https://web.archive.org/web/20091017070140/http://cufp.galois.com/2009/abstracts.html#AlexPeakeAdamGranicz). CUFP 2009. Archived from [the original](http://cufp.galois.com/2009/abstracts.html#AlexPeakeAdamGranicz) on 2009-10-17. Retrieved 2009-08-29.
20. **^** de Moura, Leonardo; Ullrich, Sebastian (July 2021). "The Lean 4 Theorem Prover and Programming Language". *Lecture Notes in Artificial Intelligence*. Conference on Automated Deduction. Vol. 12699. pp. 625–635. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-030-79876-5_37](https://doi.org/10.1007%2F978-3-030-79876-5_37). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1611-3349](https://search.worldcat.org/issn/1611-3349).
21. **^** Banz, Matt (2017-06-27). ["An introduction to functional programming in JavaScript"](https://opensource.com/article/17/6/functional-javascript). *Opensource.com*. Retrieved 2021-01-09.
22. **^** ["The useR! 2006 conference schedule includes papers on the commercial use of R"](http://www.r-project.org/useR-2006/program.html). R-project.org. 2006-06-08. Retrieved 2011-06-20.
23. **^** [Chambers, John M.](https://en.wikipedia.org/wiki/John_Chambers_(programmer)) (1998). *Programming with Data: A Guide to the S Language*. Springer Verlag. pp. 67–70. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-387-98503-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-387-98503-9).
24. **^** Novatchev, Dimitre. ["The Functional Programming Language XSLT — A proof through examples"](https://fxsl.sourceforge.net/articles/FuncProg/Functional%20Programming.html). Retrieved May 27, 2006.
25. **^** Mertz, David. ["XML Programming Paradigms (part four): Functional Programming approached to XML processing"](http://gnosis.cx/publish/programming/xml_models_fp.html). *IBM developerWorks*. Retrieved May 27, 2006.
26. **^** [Chamberlin, Donald D.](https://en.wikipedia.org/wiki/Donald_D._Chamberlin); [Boyce, Raymond F.](https://en.wikipedia.org/wiki/Raymond_F._Boyce) (1974). "SEQUEL: A structured English query language". *Proceedings of the 1974 ACM SIGFIDET*: 249–264.
27. **^** [*Functional Programming with C# - Simon Painter - NDC Oslo 2020*](https://ghostarchive.org/varchive/youtube/20211030/gvyTB4aMI4o), 8 August 2021, archived from [the original](https://www.youtube.com/watch?v=gvyTB4aMI4o) on 2021-10-30, retrieved 2021-10-23
28. ^   ["Functional programming - Kotlin Programming Language"](https://kotlinlang.org/docs/tutorials/kotlin-for-py/functional-programming.html). *Kotlin*. Retrieved 2019-05-01.
29. **^** [Dominus, Mark J.](https://en.wikipedia.org/wiki/Mark_Jason_Dominus) (2005). [*Higher-Order Perl*](https://en.wikipedia.org/wiki/Higher-Order_Perl). [Morgan Kaufmann](https://en.wikipedia.org/wiki/Morgan_Kaufmann). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-55860-701-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-55860-701-9).
30. **^** Holywell, Simon (2014). *Functional Programming in PHP*. php[architect]. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781940111056](https://en.wikipedia.org/wiki/Special:BookSources/9781940111056).
31. **^** The Cain Gang Ltd. ["Python Metaclasses: Who? Why? When?"](https://web.archive.org/web/20090530030205/http://www.python.org/community/pycon/dc2004/papers/24/metaclasses-pycon.pdf) (PDF). Archived from [the original](https://www.python.org/community/pycon/dc2004/papers/24/metaclasses-pycon.pdf) (PDF) on 30 May 2009. Retrieved 27 June 2009.
32. **^** ["GopherCon 2020: Dylan Meeus - Functional Programming with Go"](https://www.youtube.com/watch?v=wqs8n5Uk5OM). *YouTube*. 22 December 2020.
33. **^** ["Functional Language Features: Iterators and Closures - The Rust Programming Language"](https://doc.rust-lang.org/book/ch13-00-functional-features.html). *doc.rust-lang.org*. Retrieved 2021-01-09.
34. **^** Vanderbauwhede, Wim (18 July 2020). ["Cleaner code with functional programming"](https://web.archive.org/web/20200728013926/https://wimvanderbauwhede.github.io/articles/decluttering-with-functional-programming/). Archived from [the original](https://wimvanderbauwhede.github.io/articles/decluttering-with-functional-programming/) on 28 July 2020. Retrieved 6 October 2020.
35. **^** ["Effective Scala"](https://web.archive.org/web/20120619075044/http://twitter.github.com/effectivescala/?sd). *Scala Wiki*. Archived from [the original](https://twitter.github.com/effectivescala/?sd) on 2012-06-19. Retrieved 2012-02-21. Effective Scala.
36. **^** ["Documentation for package java.util.function since Java 8 (also known as Java 1.8)"](https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html). Retrieved 2021-06-16.
37. **^** Turing, A. M. (1937). "Computability and λ-definability". *The Journal of Symbolic Logic*. **2** (4). Cambridge University Press: 153–163. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/2268280](https://doi.org/10.2307%2F2268280). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [2268280](https://www.jstor.org/stable/2268280). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [2317046](https://api.semanticscholar.org/CorpusID:2317046).
38. **^** Haskell Brooks Curry; Robert Feys (1958). [*Combinatory Logic*](https://archive.org/details/combinatorylogic0002curr). North-Holland Publishing Company. Retrieved 10 February 2013.
39. **^** [Church, A.](https://en.wikipedia.org/wiki/Alonzo_Church) (1940). "A Formulation of the Simple Theory of Types". *Journal of Symbolic Logic*. **5** (2): 56–68. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/2266170](https://doi.org/10.2307%2F2266170). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [2266170](https://www.jstor.org/stable/2266170). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [15889861](https://api.semanticscholar.org/CorpusID:15889861).
40. **^** [McCarthy, John](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)) (June 1978). "History of LISP". [*The first ACM SIGPLAN conference on History of programming languages - HOPL-1*](http://jmc.stanford.edu/articles/lisp/lisp.pdf) (PDF). Los Angeles, CA. pp. 173–185. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/800025.808387](https://doi.org/10.1145%2F800025.808387).`{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book)}}`:  CS1 maint: location missing publisher ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher))
41. **^** [John McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)) (1960). ["Recursive functions of symbolic expressions and their computation by machine, Part I."](http://jmc.stanford.edu/articles/recursive/recursive.pdf) (PDF). *Communications of the ACM*. **3** (4): 184–195. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/367177.367199](https://doi.org/10.1145%2F367177.367199). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1489409](https://api.semanticscholar.org/CorpusID:1489409).
42. **^** Guy L. Steele; Richard P. Gabriel (February 1996). "The evolution of Lisp". [*History of programming languages---II*](http://dreamsongs.com/Files/HOPL2-Uncut.pdf) (PDF). pp. 233–330. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/234286.1057818](https://doi.org/10.1145%2F234286.1057818). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-89502-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-89502-5). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [47047140](https://api.semanticscholar.org/CorpusID:47047140).
43. **^** The memoir of [Herbert A. Simon](https://en.wikipedia.org/wiki/Herbert_A._Simon) (1991), *Models of My Life* pp.189-190 [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-465-04640-1](https://en.wikipedia.org/wiki/Special:BookSources/0-465-04640-1) claims that he, Al Newell, and Cliff Shaw are "...commonly adjudged to be the parents of [the] artificial intelligence [field]," for writing [Logic Theorist](https://en.wikipedia.org/wiki/Logic_Theorist), a program that proved theorems from *[Principia Mathematica](https://en.wikipedia.org/wiki/Principia_Mathematica)* automatically. To accomplish this, they had to invent a language and a paradigm that, viewed retrospectively, embeds functional programming.
44. **^** Landin, Peter J. (1964). ["The mechanical evaluation of expressions"](https://doi.org/10.1093%2Fcomjnl%2F6.4.308). *[The Computer Journal](https://en.wikipedia.org/wiki/The_Computer_Journal)*. **6** (4). [British Computer Society](https://en.wikipedia.org/wiki/British_Computer_Society): 308–320. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/comjnl/6.4.308](https://doi.org/10.1093%2Fcomjnl%2F6.4.308).
45. **^** Diehl, Stephan; Hartel, Pieter; Sestoft, Peter (2000). "Abstract machines for programming language implementation". *Future Generation Computer Systems*. Vol. 16. pp. 739–751.
46. **^** Landin, Peter J. (February 1965a). ["Correspondence between ALGOL 60 and Church's Lambda-notation: part I"](https://doi.org/10.1145%2F363744.363749). *[Communications of the ACM](https://en.wikipedia.org/wiki/Communications_of_the_ACM)*. **8** (2). [Association for Computing Machinery](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery): 89–101. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/363744.363749](https://doi.org/10.1145%2F363744.363749). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [6505810](https://api.semanticscholar.org/CorpusID:6505810).
47. **^** Landin, Peter J. (March 1965b). ["A correspondence between ALGOL 60 and Church's Lambda-notation: part II"](https://doi.org/10.1145%2F363791.363804). *[Communications of the ACM](https://en.wikipedia.org/wiki/Communications_of_the_ACM)*. **8** (3). [Association for Computing Machinery](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery): 158–165. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/363791.363804](https://doi.org/10.1145%2F363791.363804). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [15781851](https://api.semanticscholar.org/CorpusID:15781851).
48. **^** Landin, Peter J. (March 1966b). ["The next 700 programming languages"](https://doi.org/10.1145%2F365230.365257). *[Communications of the ACM](https://en.wikipedia.org/wiki/Communications_of_the_ACM)*. **9** (3). [Association for Computing Machinery](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery): 157–166. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/365230.365257](https://doi.org/10.1145%2F365230.365257). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [13409665](https://api.semanticscholar.org/CorpusID:13409665).
49. **^** Backus, J. (1978). ["Can programming be liberated from the von Neumann style?: A functional style and its algebra of programs"](https://doi.org/10.1145%2F359576.359579). *Communications of the ACM*. **21** (8): 613–641. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/359576.359579](https://doi.org/10.1145%2F359576.359579).
50. **^** R.M. Burstall. Design considerations for a functional programming language. Invited paper, Proc. Infotech State of the Art Conf. "The Software Revolution", Copenhagen, 45–57 (1977)
51. **^** R.M. Burstall and J. Darlington. A transformation system for developing recursive programs. Journal of the Association for Computing Machinery 24(1):44–67 (1977)
52. **^** R.M. Burstall, D.B. MacQueen and D.T. Sannella. HOPE: an experimental applicative language. Proceedings 1980 LISP Conference, Stanford, 136–143 (1980).
53. **^** ["Make discovering assign() easier!"](https://web.archive.org/web/20230419060430/https://forum.openscad.org/Make-discovering-assign-easier-td10964.html). *OpenSCAD*. Archived from [the original](https://forum.openscad.org/Make-discovering-assign-easier-td10964.html) on 2023-04-19.
54. **^** Peter Bright (March 13, 2018). ["Developers love trendy new languages but earn more with functional programming"](https://arstechnica.com/gadgets/2018/03/developers-love-trendy-new-languages-but-earn-more-with-functional-programming/). *[Ars Technica](https://en.wikipedia.org/wiki/Ars_Technica)*.
55. **^** John Leonard (January 24, 2017). ["The stealthy rise of functional programming"](https://www.computing.co.uk/ctg/analysis/3003123/the-slow-but-steady-rise-of-functional-programming). Computing.
56. **^** Leo Cheung (May 9, 2017). ["Is functional programming better for your startup?"](https://www.infoworld.com/article/3190185/software/is-functional-programming-better-for-your-startup.html). *[InfoWorld](https://en.wikipedia.org/wiki/InfoWorld)*.
57. **^** Sean Tull - Monoidal Categories for Formal Concept Analysis.
58. **^** Pountain, Dick. ["Functional Programming Comes of Age"](https://web.archive.org/web/20060827094123/http://byte.com/art/9408/sec11/art1.htm). *[Byte](https://en.wikipedia.org/wiki/Byte_(magazine)) (August 1994)*. Archived from [the original](http://byte.com/art/9408/sec11/art1.htm) on 2006-08-27. Retrieved August 31, 2006.
59. ^   ["ISO/IEC JTC 1/SC 22/WG5/N2137 – Fortran 2015 Committee Draft (J3/17-007r2)"](https://wg5-fortran.org/N2101-N2150/N2137.pdf) (PDF). International Organization for Standardization. July 6, 2017. pp. 336–338.
60. **^** ["Revised^6 Report on the Algorithmic Language Scheme"](http://www.r6rs.org/final/html/r6rs/r6rs-Z-H-8.html#node_sec_5.11). R6rs.org. Retrieved 2013-03-21.
61. **^** ["Revised^6 Report on the Algorithmic Language Scheme - Rationale"](http://www.r6rs.org/final/html/r6rs-rationale/r6rs-rationale-Z-H-7.html#node_sec_5.3). R6rs.org. Retrieved 2013-03-21.
62. **^** Clinger, William (1998). "Proper tail recursion and space efficiency". *Proceedings of the ACM SIGPLAN 1998 conference on Programming language design and implementation - PLDI '98*. pp. 174–185. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/277650.277719](https://doi.org/10.1145%2F277650.277719). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0897919874](https://en.wikipedia.org/wiki/Special:BookSources/0897919874). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [16812984](https://api.semanticscholar.org/CorpusID:16812984).
63. **^** Baker, Henry (1994). ["CONS Should Not CONS Its Arguments, Part II: Cheney on the M.T.A."](https://web.archive.org/web/20060303155622/http://home.pipeline.com/~hbaker1/CheneyMTA.html) Archived from [the original](http://home.pipeline.com/~hbaker1/CheneyMTA.html) on 2006-03-03. Retrieved 2020-04-29.
64. **^** [Turner, D.A.](https://en.wikipedia.org/wiki/David_Turner_(computer_scientist)) (2004-07-28). ["Total Functional Programming"](http://www.jucs.org/jucs_10_7/total_functional_programming). *Journal of Universal Computer Science*. **10** (7): 751–768. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3217/jucs-010-07-0751](https://doi.org/10.3217%2Fjucs-010-07-0751).
65. **^** [The Implementation of Functional Programming Languages](http://research.microsoft.com/~simonpj/papers/slpj-book-1987/index.htm). Simon Peyton Jones, published by Prentice Hall, 1987
66. ^   [Launchbury, John](https://en.wikipedia.org/wiki/John_Launchbury) (March 1993). *A Natural Semantics for Lazy Evaluation*. Symposium on Principles of Programming Languages. Charleston, South Carolina: [ACM](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery). pp. 144–154. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/158511.158618](https://doi.org/10.1145%2F158511.158618).
67. **^** [Robert W. Harper](https://en.wikipedia.org/wiki/Robert_Harper_(computer_scientist)) (2009). [*Practical Foundations for Programming Languages*](https://web.archive.org/web/20160407095249/https://www.cs.cmu.edu/~rwh/plbook/book.pdf) (PDF). Archived from [the original](https://www.cs.cmu.edu/~rwh/plbook/book.pdf) (PDF) on 2016-04-07.
68. **^** Huet, Gérard P. (1973). "The Undecidability of Unification in Third Order Logic". *Information and Control*. **22** (3): 257–267. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/s0019-9958(73)90301-x](https://doi.org/10.1016%2Fs0019-9958%2873%2990301-x).
69. **^** Huet, Gérard (Sep 1976). *Resolution d'Equations dans des Langages d'Ordre 1,2,...ω* (Ph.D.) (in French). Universite de Paris VII.
70. **^** Huet, Gérard (2002). ["Higher Order Unification 30 years later"](http://pauillac.inria.fr/~huet/PUBLIC/Hampton.pdf) (PDF). In Carreño, V.; Muñoz, C.; Tahar, S. (eds.). *Proceedings, 15th International Conference TPHOL*. LNCS. Vol. 2410. Springer. pp. 3–12.
71. **^** Wells, J. B. (1993). "Typability and type checking in the second-order lambda-calculus are equivalent and undecidable". *Tech. Rep. 93-011*: 176–185. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.31.3590](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.31.3590).
72. **^** Leroy, Xavier (17 September 2018). ["The Compcert verified compiler"](http://compcert.inria.fr/doc/index.html).
73. **^** Peyton Jones, Simon; Vytiniotis, Dimitrios; [Weirich, Stephanie](https://en.wikipedia.org/wiki/Stephanie_Weirich); Geoffrey Washburn (April 2006). ["Simple unification-based type inference for GADTs"](http://research.microsoft.com/en-us/um/people/simonpj/papers/gadt/). *Icfp 2006*: 50–61.
74. **^** ["OCaml Manual"](https://caml.inria.fr/pub/docs/manual-ocaml/gadts.html). *caml.inria.fr*. Retrieved 2021-03-08.
75. **^** ["Algebraic Data Types"](https://docs.scala-lang.org/scala3/book/types-adts-gadts.html). *Scala Documentation*. Retrieved 2021-03-08.
76. **^** Kennedy, Andrew; Russo, Claudio V. (October 2005). [*Generalized Algebraic Data Types and Object-Oriented Programming*](https://web.archive.org/web/20061229164852/http://research.microsoft.com/~akenn/generics/gadtoop.pdf) (PDF). OOPSLA. San Diego, California: [ACM](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1094811.1094814](https://doi.org/10.1145%2F1094811.1094814). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781595930316](https://en.wikipedia.org/wiki/Special:BookSources/9781595930316). Archived from [the original](https://www.microsoft.com/en-us/research/publication/generalized-algebraic-data-types-and-object-oriented-programming/) on 2006-12-29.
77. **^** Hughes, John. ["Why Functional Programming Matters"](http://www.cse.chalmers.se/~rjmh/Papers/whyfp.pdf) (PDF). [Chalmers University of Technology](https://en.wikipedia.org/wiki/Chalmers_University_of_Technology).
78. **^** [*Purely functional data structures*](http://www.cambridge.org/us/academic/subjects/computer-science/algorithmics-complexity-computer-algebra-and-computational-g/purely-functional-data-structures) by [Chris Okasaki](https://en.wikipedia.org/wiki/Chris_Okasaki), [Cambridge University Press](https://en.wikipedia.org/wiki/Cambridge_University_Press), 1998, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-521-66350-4](https://en.wikipedia.org/wiki/Special:BookSources/0-521-66350-4)
79. **^** L’orange, Jean Niklas. ["polymatheia - Understanding Clojure's Persistent Vector, pt. 1"](http://www.hypirion.com/musings/understanding-persistent-vector-pt-1). *Polymatheia*. Retrieved 2018-11-13.
80. **^** Michael Barr, Charles Well - Category theory for computer science.
81. **^** Newbern, J. ["All About Monads: A comprehensive guide to the theory and practice of monadic programming in Haskell"](http://monads.haskell.cz/html/index.html/html/). Retrieved 2008-02-14.
82. **^** ["Thirteen ways of looking at a turtle"](https://fsharpforfunandprofit.com/posts/13-ways-of-looking-at-a-turtle/#2-basic-fp---a-module-of-functions-with-immutable-state). *fF# for fun and profit*. Retrieved 2018-11-13.
83. **^** Hartmanis, Juris; Hemachandra, Lane (1986). "Complexity classes without machines: On complete languages for UP". [*Automata, Languages and Programming*](https://doi.org/10.1007/3-540-16761-7_62). Lecture Notes in Computer Science. Vol. 226. Berlin, Heidelberg: Springer Berlin Heidelberg. pp. 123–135. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/3-540-16761-7_62](https://doi.org/10.1007%2F3-540-16761-7_62). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-16761-7](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-16761-7). Retrieved 2024-12-12.
84. **^** [Paulson, Larry C.](https://en.wikipedia.org/wiki/Lawrence_Paulson) (28 June 1996). [*ML for the Working Programmer*](https://books.google.com/books?id=XppZdaDs7e0C). Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-521-56543-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-56543-1). Retrieved 10 February 2013.
85. **^** Spiewak, Daniel (26 August 2008). ["Implementing Persistent Vectors in Scala"](https://web.archive.org/web/20150923205254/http://www.codecommit.com/blog/scala/implementing-persistent-vectors-in-scala). *Code Commit*. Archived from [the original](http://www.codecommit.com/blog/scala/implementing-persistent-vectors-in-scala) on 23 September 2015. Retrieved 17 April 2012.
86. **^** ["Which programs are fastest? | Computer Language Benchmarks Game"](https://web.archive.org/web/20130520162513/http://benchmarksgame.alioth.debian.org/u32/which-programs-are-fastest.php?gcc=on&ghc=on&clean=on&ocaml=on&sbcl=on&fsharp=on&racket=on&clojure=on&hipe=on&calc=chart). benchmarksgame.alioth.debian.org. Archived from [the original](http://benchmarksgame.alioth.debian.org/u32/which-programs-are-fastest.php?gcc=on&ghc=on&clean=on&ocaml=on&sbcl=on&fsharp=on&racket=on&clojure=on&hipe=on&calc=chart) on 2013-05-20. Retrieved 2011-06-20.
87. **^** Igor Pechtchanski; Vivek Sarkar (2005). "Immutability specification and its applications". *Concurrency and Computation: Practice and Experience*. **17** (5–6): 639–662. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/cpe.853](https://doi.org/10.1002%2Fcpe.853). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [34527406](https://api.semanticscholar.org/CorpusID:34527406).
88. **^** ["An In-Depth Look at Clojure Collections"](https://www.infoq.com/articles/in-depth-look-clojure-collections/). *InfoQ*. Retrieved 2024-04-29.
89. **^** ["References and Borrowing - The Rust Programming Language"](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html). *doc.rust-lang.org*. Retrieved 2024-04-29.
90. **^** ["Validating References with Lifetimes - The Rust Programming Language"](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html). *doc.rust-lang.org*. Retrieved 2024-04-29.
91. **^** ["Concurrent Collections (The Java™ Tutorials > Essential Java Classes > Concurrency)"](https://docs.oracle.com/javase/tutorial/essential/concurrency/collections.html). *docs.oracle.com*. Retrieved 2024-04-29.
92. **^** ["Understanding The Actor Model To Build Non-blocking, High-throughput Distributed Systems - Scaleyourapp"](https://scaleyourapp.com/actor-model/). *scaleyourapp.com*. 2023-01-28. Retrieved 2024-04-29.
93. **^** Cesarini, Francesco; Thompson, Simon (2009). *Erlang programming: a concurrent approach to software development* (1st ed.). O'Reilly Media, Inc. (published 2009-06-11). p. 6. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-596-55585-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-596-55585-6).
94. **^** ["Chapter 25. Profiling and optimization"](http://book.realworldhaskell.org/read/profiling-and-optimization.html#x_eK1). Book.realworldhaskell.org. Retrieved 2011-06-20.
95. **^** Nethercote, Nicholas; Mycroft, Alan (2002-06-16). ["The cache behaviour of large lazy functional programs on stock hardware"](https://doi.org/10.1145/773039.773044). *ACM SIGPLAN Notices*. **38** (2 supplement): 44–55. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/773039.773044](https://doi.org/10.1145%2F773039.773044). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0362-1340](https://search.worldcat.org/issn/0362-1340).
96. **^** Berthe, Samuel (2024-04-29), [*samber/lo*](https://github.com/samber/lo), retrieved 2024-04-29
97. **^** ["Go Wiki: Compiler And Runtime Optimizations - The Go Programming Language"](https://go.dev/wiki/CompilerOptimizations). *go.dev*. Retrieved 2024-04-29.
98. **^** ["Comparing Performance: Loops vs. Iterators - The Rust Programming Language"](https://doc.rust-lang.org/book/ch13-04-performance.html). *doc.rust-lang.org*. Retrieved 2024-04-29.
99. **^** Hartel, Pieter; Henk Muller; Hugh Glaser (March 2004). ["The Functional C experience"](https://web.archive.org/web/20110719201553/http://www.ub.utwente.nl/webdocs/ctit/1/00000084.pdf) (PDF). *Journal of Functional Programming*. **14** (2): 129–135. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/S0956796803004817](https://doi.org/10.1017%2FS0956796803004817). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [32346900](https://api.semanticscholar.org/CorpusID:32346900). Archived from [the original](http://www.ub.utwente.nl/webdocs/ctit/1/00000084.pdf) (PDF) on 2011-07-19. Retrieved 2006-05-28.; David Mertz. ["Functional programming in Python, Part 3"](https://web.archive.org/web/20071016124848/http://www-128.ibm.com/developerworks/linux/library/l-prog3.html). *IBM developerWorks*. Archived from [the original](http://www-128.ibm.com/developerworks/linux/library/l-prog3.html) on 2007-10-16. Retrieved 2006-09-17.([Part 1](https://web.archive.org/web/20071016124848/http://www-128.ibm.com/developerworks/linux/library/l-prog.html), [Part 2](https://web.archive.org/web/20071016124848/http://www-128.ibm.com/developerworks/linux/library/l-prog2.html))
100. **^** ["Functions — D Programming Language 2.0"](http://www.digitalmars.com/d/2.0/function.html#pure-functions). Digital Mars. 30 December 2012.
101. **^** ["Lua Unofficial FAQ (uFAQ)"](http://www.luafaq.org/#T1.2).
102. **^** ["First-Class Functions in Go - The Go Programming Language"](https://golang.org/doc/codewalk/functions/). *golang.org*. Retrieved 2021-01-04.
103. **^** Eich, Brendan (3 April 2008). ["Popularity"](https://brendaneich.com/2008/04/popularity/).
104. **^** [van Rossum, Guido](https://en.wikipedia.org/wiki/Guido_van_Rossum) (2009-04-21). ["Origins of Python's "Functional" Features"](http://python-history.blogspot.de/2009/04/origins-of-pythons-functional-features.html). Retrieved 2012-09-27.
105. **^** ["functools — Higher order functions and operations on callable objects"](https://docs.python.org/dev/library/functools.html#functools.reduce). Python Software Foundation. 2011-07-31. Retrieved 2011-07-31.
106. **^** Skarsaune, Martin (2008). *The SICS Java Port Project Automatic Translation of a Large Object Oriented System from Smalltalk to Java*.
107. **^** Gosling, James. ["Closures"](https://web.archive.org/web/20130414180002/https://blogs.oracle.com/jag/entry/closures). *James Gosling: on the Java Road*. Oracle. Archived from [the original](http://blogs.oracle.com/jag/entry/closures) on 2013-04-14. Retrieved 11 May 2013.
108. **^** Williams, Michael (8 April 2013). ["Java SE 8 Lambda Quick Start"](https://blogs.oracle.com/javatraining/entry/java_se_8_lambda_quick).
109. **^** Bloch, Joshua (2008). "Item 15: Minimize Mutability". [*Effective Java*](https://archive.org/details/effectivejava00bloc_0) (Second ed.). Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0321356680](https://en.wikipedia.org/wiki/Special:BookSources/978-0321356680).
110. **^** ["Object.freeze() - JavaScript | MDN"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze). *developer.mozilla.org*. Retrieved 2021-01-04. The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
111. **^** Daniel Friedman; William Byrd; Oleg Kiselyov; Jason Hemann (2018). *The Reasoned Schemer, Second Edition*. The MIT Press.
112. **^** A. Casas, D. Cabeza, M. V. Hermenegildo. A Syntactic Approach to
  Combining Functional Notation, Lazy Evaluation and Higher-Order in
  LP Systems. The 8th International Symposium on Functional and Logic
  Programming (FLOPS'06), pages 142-162, April 2006.
113. **^** ["How I do my Computing"](https://stallman.org/stallman-computing.html). *stallman.org*. Retrieved 2024-04-29.
114. **^** Wakeling, David (2007). ["Spreadsheet functional programming"](http://www.activemode.org/webroot/Workers/ActiveTraining/Programming/Pro_SpreadsheetFunctionalProgramming.pdf) (PDF). *Journal of Functional Programming*. **17** (1): 131–143. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/S0956796806006186](https://doi.org/10.1017%2FS0956796806006186). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0956-7968](https://search.worldcat.org/issn/0956-7968). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [29429059](https://api.semanticscholar.org/CorpusID:29429059).
115. **^** [Peyton Jones, Simon](https://en.wikipedia.org/wiki/Simon_Peyton_Jones); [Burnett, Margaret](https://en.wikipedia.org/wiki/Margaret_Burnett); [Blackwell, Alan](https://en.wikipedia.org/wiki/Alan_Blackwell) (March 2003). ["Improving the world's most popular functional language: user-defined functions in Excel"](https://web.archive.org/web/20051016011341/http://research.microsoft.com/~simonpj/Papers/excel/index.htm). Archived from [the original](http://research.microsoft.com/~simonpj/Papers/excel/index.htm) on 2005-10-16.
116. **^** Rodger, Richard (11 December 2017). *The Tao of Microservices*. Manning. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781638351733](https://en.wikipedia.org/wiki/Special:BookSources/9781638351733).
117. **^** Piro, Christopher (2009). [*Functional Programming at Facebook*](https://web.archive.org/web/20091017070140/http://cufp.galois.com/2009/abstracts.html#ChristopherPiroEugeneLetuchy). CUFP 2009. Archived from [the original](http://cufp.galois.com/2009/abstracts.html#ChristopherPiroEugeneLetuchy) on 2009-10-17. Retrieved 2009-08-29.
118. **^** ["Sim-Diasca: a large-scale discrete event concurrent simulation engine in Erlang"](https://web.archive.org/web/20130917092159/http://research.edf.com/research-and-the-scientific-community/software/sim-diasca-80704.html). November 2011. Archived from [the original](http://research.edf.com/research-and-the-scientific-community/software/sim-diasca-80704.html) on 2013-09-17. Retrieved 2011-11-08.
119. **^** [1 million is so 2011](https://blog.whatsapp.com/index.php/2012/01/1-million-is-so-2011/) [Archived](https://web.archive.org/web/20140219234031/http://blog.whatsapp.com/index.php/2012/01/1-million-is-so-2011/) 2014-02-19 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) // WhatsApp blog, 2012-01-06: "the last important piece of our infrastracture is Erlang"
120. **^** Momtahan, Lee (2009). [*Scala at EDF Trading: Implementing a Domain-Specific Language for Derivative Pricing with Scala*](https://web.archive.org/web/20091017070140/http://cufp.galois.com/2009/abstracts.html#LeeMomtahan). CUFP 2009. Archived from [the original](http://cufp.galois.com/2009/abstracts.html#LeeMomtahan) on 2009-10-17. Retrieved 2009-08-29.
121. **^** Graham, Paul (2003). ["Beating the Averages"](http://www.paulgraham.com/avg.html). Retrieved 2009-08-29.
122. **^** Sims, Steve (2006). [*Building a Startup with Standard ML*](http://cufp.galois.com/2006/slides/SteveSims.pdf) (PDF). CUFP 2006. Retrieved 2009-08-29.
123. **^** Laurikari, Ville (2007). [*Functional Programming in Communications Security*](https://web.archive.org/web/20101221110947/http://cufp.galois.com/2007/abstracts.html#VilleLaurikari). CUFP 2007. Archived from [the original](http://cufp.galois.com/2007/abstracts.html#VilleLaurikari) on 2010-12-21. Retrieved 2009-08-29.
124. **^** Lorimer, R. J. (19 January 2009). ["Live Production Clojure Application Announced"](http://www.infoq.com/news/2009/01/clojure_production). *InfoQ*.
125. **^** Bugnion, Pascal (2016). *Scala for Data Science* (1st ed.). [Packt](https://en.wikipedia.org/wiki/Packt). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781785281372](https://en.wikipedia.org/wiki/Special:BookSources/9781785281372).
126. **^** ["Why developers like ClojureScript"](https://stackshare.io/clojurescript). *StackShare*. Retrieved 2024-04-29.
127. **^** Herrick, Justin (2024-04-29), [*jah2488/elm-companies*](https://github.com/jah2488/elm-companies), retrieved 2024-04-29
128. **^** ["Why developers like PureScript"](https://stackshare.io/purescript). *StackShare*. Retrieved 2024-04-29.
129. **^** Team, Editorial (2019-01-08). ["ALLEGRO - all you need to know about the best Polish online marketplace"](https://ecommercegermany.com/blog/allegro-all-you-need-to-know-about-the-best-polish-online-marketplace). *E-commerce Germany News*. Retrieved 2024-04-29.
130. **^** ["Websites using Phoenix Framework - Wappalyzer"](https://www.wappalyzer.com/technologies/web-frameworks/phoenix-framework/). *www.wappalyzer.com*. Retrieved 2024-04-29.
131. **^** ["Functional Programming: 2019-2020"](https://www.cs.ox.ac.uk/teaching/courses/2019-2020/fp/). University of Oxford Department of Computer Science. Retrieved 28 April 2020.
132. **^** ["Programming I (Haskell)"](https://www.imperial.ac.uk/computing/current-students/courses/120_1/). Imperial College London Department of Computing. Retrieved 28 April 2020.
133. ^   ["Computer Science BSc - Modules"](https://www.nottingham.ac.uk/ugstudy/course/Computer-Science-BSc#yearsmodules). Retrieved 28 April 2020.
134. ^   [Abelson, Hal](https://en.wikipedia.org/wiki/Hal_Abelson); [Sussman, Gerald Jay](https://en.wikipedia.org/wiki/Gerald_Jay_Sussman) (1985). ["Preface to the Second Edition"](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-6.html). [*Structure and Interpretation of Computer Programs*](http://mitpress.mit.edu/sicp/) (2 ed.). MIT Press. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1985sicp.book.....A](https://ui.adsabs.harvard.edu/abs/1985sicp.book.....A).
135. **^** John DeNero (Fall 2019). ["Computer Science 61A, Berkeley"](https://cs61a.org/articles/about.html). Department of Electrical Engineering and Computer Sciences, Berkeley. Retrieved 2020-08-14.
136. **^** [Emmanuel Schanzer of Bootstrap](https://twit.tv/shows/triangulation/episodes/196/) interviewed on the TV show *Triangulation* on the [TWiT.tv](https://en.wikipedia.org/wiki/TWiT.tv) network
137. **^** ["Why Scheme for Introductory Programming?"](https://home.adelphi.edu/sbloch/class/pbd/testimonials/). *home.adelphi.edu*. Retrieved 2024-04-29.
138. **^** Staff, IMACS (2011-06-03). ["What Is Scheme & Why Is it Beneficial for Students?"](https://www.imacs.org/learn-computer-programming-using-scheme/). *IMACS – Making Better Thinkers for Life*. Retrieved 2024-04-29.

## Further reading

* [Abelson, Hal](https://en.wikipedia.org/wiki/Hal_Abelson); [Sussman, Gerald Jay](https://en.wikipedia.org/wiki/Gerald_Jay_Sussman) (1985). [*Structure and Interpretation of Computer Programs*](https://mitpress.mit.edu/9780262510363/structure-and-interpretation-of-computer-programs/). MIT Press. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1985sicp.book.....A](https://ui.adsabs.harvard.edu/abs/1985sicp.book.....A). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-51036-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-51036-3).
* Cousineau, Guy and Michel Mauny. *The Functional Approach to Programming*. Cambridge, UK: [Cambridge University Press](https://en.wikipedia.org/wiki/Cambridge_University_Press), 1998.
* Curry, Haskell Brooks and Feys, Robert and Craig, William. *Combinatory Logic*. Volume I. North-Holland Publishing Company, Amsterdam, 1958.
* [Curry, Haskell B.](https://en.wikipedia.org/wiki/Haskell_Curry); [Hindley, J. Roger](https://en.wikipedia.org/wiki/J._Roger_Hindley); [Seldin, Jonathan P.](https://en.wikipedia.org/w/index.php?title=Jonathan_P._Seldin&action=edit&redlink=1) (1972). *Combinatory Logic*. Vol. II. Amsterdam: North Holland. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-7204-2208-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7204-2208-5).
* Dominus, Mark Jason. *[Higher-Order Perl](http://hop.perl.plover.com/book/pdf/HigherOrderPerl.pdf)*. [Morgan Kaufmann](https://en.wikipedia.org/wiki/Morgan_Kaufmann). 2005.
* Felleisen, Matthias; Findler, Robert; Flatt, Matthew; Krishnamurthi, Shriram (2018). [*How to Design Programs*](http://www.htdp.org). MIT Press.
* Graham, Paul. *ANSI Common LISP*. Englewood Cliffs, New Jersey: [Prentice Hall](https://en.wikipedia.org/wiki/Prentice_Hall), 1996.
* MacLennan, Bruce J. *Functional Programming: Practice and Theory*. Addison-Wesley, 1990.
* Michaelson, Greg (10 April 2013). *An Introduction to Functional Programming Through Lambda Calculus*. Courier Corporation. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-486-28029-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-486-28029-5).
* O'Sullivan, Brian; Stewart, Don; Goerzen, John (2008). [*Real World Haskell*](http://book.realworldhaskell.org/read/). O'Reilly.
* Pratt, Terrence W. and [Marvin Victor Zelkowitz](https://en.wikipedia.org/wiki/Marvin_Victor_Zelkowitz). *Programming Languages: Design and Implementation*. 3rd ed. Englewood Cliffs, New Jersey: [Prentice Hall](https://en.wikipedia.org/wiki/Prentice_Hall), 1996.
* Salus, Peter H. *Functional and Logic Programming Languages*. Vol. 4 of Handbook of Programming Languages. Indianapolis, Indiana: [Macmillan Technical Publishing](https://en.wikipedia.org/w/index.php?title=Macmillan_Technical_Publishing&action=edit&redlink=1), 1998.
* Thompson, Simon. *Haskell: The Craft of Functional Programming*. Harlow, England: [Addison-Wesley Longman Limited](https://en.wikipedia.org/w/index.php?title=Addison-Wesley_Longman_Limited&action=edit&redlink=1), 1996.

## External links

* Ford, Neal. ["Functional thinking"](http://nealford.com/functionalthinking.html). Retrieved 2021-11-10.
* Akhmechet, Slava (2006-06-19). ["defmacro – Functional Programming For The Rest of Us"](http://www.defmacro.org/ramblings/fp.html). Retrieved 2013-02-24. An introduction
* *Functional programming in Python* (by David Mertz): [part 1](http://gnosis.cx/publish/programming/charming_python_13.html), [part 2](http://gnosis.cx/publish/programming/charming_python_16.html), [part 3](http://gnosis.cx/publish/programming/charming_python_19.html)
 
NewPP limit report
Parsed by mw‐web.codfw.main‐bf65cc95d‐89p4v
Cached time: 20260424011326
Cache expiry: 82800
Cache expiry source: Module:Portal (os.date(%k))
Reduced expiry: true
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 1.169 seconds
Real time usage: 1.574 seconds
Preprocessor visited node count: 6791/1000000
Revision size: 89613/2097152 bytes
Post‐expand include size: 296642/2097152 bytes
Template argument size: 5388/2097152 bytes
Highest expansion depth: 12/100
Expensive parser function count: 30/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 524971/5000000 bytes
Lua time usage: 0.778/10.000 seconds
Lua memory usage: 9409207/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00% 1337.461      1 -total
 44.58%  596.175      2 Template:Reflist
 18.17%  243.082     70 Template:Cite_web
  8.42%  112.674     22 Template:Cite_journal
  7.81%  104.466     24 Template:Cite_book
  5.62%   75.156      4 Template:Navbox
  5.34%   71.467      1 Template:Programming_paradigms_navbox
  5.16%   68.959      3 Template:ISBN
  3.96%   53.016     14 Template:Cite_conference
  3.85%   51.544      1 Template:Short_description
 Render ID cb9fc18e-3f7a-11f1-9fbb-95a85ec8509d  Saved in parser cache with key enwiki:pcache:10933:|#|:idhash:canonical and timestamp 20260424011326 and revision id 1343572355. Rendering was triggered because: page_view