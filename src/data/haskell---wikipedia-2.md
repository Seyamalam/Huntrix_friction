# Haskell - Wikipedia

Source: https://en.wikipedia.org/wiki/Haskell_(programming_language)

---

Functional programming language

| Haskell |
| --- |
|  |
| Paradigm | Purely functional |
| Designed by | Lennart Augustsson , Dave Barton, Brian Boutel, Warren Burton, Joseph Fasel, Kevin Hammond, Ralf Hinze, Paul Hudak , John Hughes , Thomas Johnsson, Mark Jones, Simon Peyton Jones , John Launchbury , Erik Meijer , John Peterson, Alastair Reid, Colin Runciman, Philip Wadler |
| First appeared | 1990 ; 36 years ago ( 1990 ) |
|  |
| Stable release | Haskell 2010 / July 2010 ; 15 years ago ( 2010-07 ) |
| Preview release | Haskell 2020 announced |
|  |
| Typing discipline | Inferred , static , strong |
| OS | Cross-platform |
| Filename extensions | .hs, .lhs |
| Website | haskell .org |
|  |
| GHC , Hugs , NHC, JHC, Yhc , UHC |
|  |
| Gofer |
|  |
| Clean , FP , Gofer , Hope and Hope + , Id , ISWIM , KRC , Lisp , Miranda , ML and Standard ML , Orwell , SASL , Scheme , SISAL |
|  |
| Agda , Bluespec , C++11 / Concepts , C# / LINQ , CAL, [ citation needed ] Cayenne , Clean , Clojure , CoffeeScript , Curry , Elm , Epigram , [ citation needed ] Escher , F# , Hack , Idris , Isabelle , Java / Generics , LiveScript , Mercury , Ωmega , PureScript , Python , Raku , Rust , Scala , Swift , Visual Basic 9.0 |

**Haskell** () is a [general-purpose](https://en.wikipedia.org/wiki/General-purpose_programming_language), [statically typed](https://en.wikipedia.org/wiki/Static_typing), [purely functional](https://en.wikipedia.org/wiki/Purely_functional_programming) [programming language](https://en.wikipedia.org/wiki/Programming_language) with [type inference](https://en.wikipedia.org/wiki/Type_inference) and [lazy evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation). Haskell pioneered several programming language [features](#Features) including [type classes](https://en.wikipedia.org/wiki/Type_class) for [type-safe](https://en.wikipedia.org/wiki/Type_safety) [operator overloading](https://en.wikipedia.org/wiki/Operator_overloading) and [monadic](https://en.wikipedia.org/wiki/Monad_(functional_programming)) [input/output](https://en.wikipedia.org/wiki/Input/output) (IO). It is named after [logician](https://en.wikipedia.org/wiki/Logic) [Haskell Curry](https://en.wikipedia.org/wiki/Haskell_Curry). Haskell's main implementation is the [Glasgow Haskell Compiler](https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler) (GHC).

Haskell's [semantics](https://en.wikipedia.org/wiki/Semantics_(programming_languages)) are historically based on those of the [Miranda](https://en.wikipedia.org/wiki/Miranda_(programming_language)) programming language, which served to focus the efforts of the initial Haskell working group. The last formal specification of the language was made in July 2010, while the development of GHC continues to expand Haskell via language extensions.

Haskell is used in academia and industry. As of May 2021[[update]](https://en.wikipedia.org/w/index.php?title=Haskell&action=edit), Haskell was the 28th most popular programming language by [Google searches](https://en.wikipedia.org/wiki/Google_search) for tutorials, and made up less than 1% of active users on the [GitHub](https://en.wikipedia.org/wiki/GitHub) source code repository.

After the release of [Miranda](https://en.wikipedia.org/wiki/Miranda_(programming_language)) by Research Software Ltd. in 1985, interest in lazy functional languages grew. By 1987, more than a dozen non-[strict](https://en.wikipedia.org/wiki/Strict_function), purely functional programming languages existed. Miranda was the most widely used, but it was [proprietary software](https://en.wikipedia.org/wiki/Proprietary_software). At the conference on [Functional Programming Languages and Computer Architecture](https://en.wikipedia.org/wiki/Functional_Programming_Languages_and_Computer_Architecture) (FPCA '87) in [Portland, Oregon](https://en.wikipedia.org/wiki/Portland,_Oregon), there was a strong consensus that a committee be formed to define an [open standard](https://en.wikipedia.org/wiki/Open_standard) for such languages. The committee's purpose was to consolidate existing [functional languages](https://en.wikipedia.org/wiki/Functional_languages) into a common one to serve as a basis for future research in functional-language design.

Haskell was developed by a committee, attempting to bring together off-the-shelf solutions where possible.

[Type classes](https://en.wikipedia.org/wiki/Type_classes) were first proposed by [Philip Wadler](https://en.wikipedia.org/wiki/Philip_Wadler) and [Stephen Blott](/w/index.php?title=Stephen_Blott&action=edit&redlink=1) to address the ad hoc handling of [equality types](https://en.wikipedia.org/wiki/Equality_type) and [arithmetic](https://en.wikipedia.org/wiki/Arithmetic_operation) overloading in languages at the time.

In early versions of Haskell up until and including version 1.2, user interaction and [input/output](https://en.wikipedia.org/wiki/Input/output) (IO) were handled by both [streams](https://en.wikipedia.org/wiki/Stream_(computing))-based and [continuation](https://en.wikipedia.org/wiki/Continuation)-based mechanisms, which were widely considered unsatisfactory. In version 1.3, [monadic](https://en.wikipedia.org/wiki/Monad_(functional_programming)) IO was introduced, along with the generalisation of type classes to higher kinds ([type constructors](https://en.wikipedia.org/wiki/Type_constructor)). Along with "do notation", which provides [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) for the `Monad` type class, this gave Haskell an [effect system](https://en.wikipedia.org/wiki/Effect_system) that maintained [referential transparency](https://en.wikipedia.org/wiki/Referential_transparency) and was convenient.

Another notable change in early versions was the moving of the "[sequential evaluation](https://en.wikipedia.org/wiki/Sequential_evaluation)" operation `seq` (which creates a [data dependency](https://en.wikipedia.org/wiki/Data_dependency) between values, and is used in lazy languages to avoid excessive memory consumption) from a type class to a standard function to make refactoring more practical.

The first version of Haskell ("Haskell 1.0") was defined in 1990. The committee's efforts resulted in a series of language definitions (1.0, 1.1, 1.2, 1.3, and 1.4).

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/04/Base-classes.svg/250px-Base-classes.svg.png)](https://en.wikipedia.org/wiki/File:Base-classes.svg)

Hierarchy of [type classes](https://en.wikipedia.org/wiki/Type_class) in the [Haskell Prelude](/w/index.php?title=Haskell_Prelude&action=edit&redlink=1) as of GHC 7.10. The inclusion of `Foldable` and `Traversable` (with corresponding changes to the [type signatures](https://en.wikipedia.org/wiki/Type_signature) of some functions), and of `Applicative` as intermediate between `Functor` and `Monad`, are deviations from the Haskell 2010 standard.

In late 1997, the series culminated in *Haskell 98*, intended to specify a stable, minimal, portable version of the language and an accompanying standard [library](https://en.wikipedia.org/wiki/Library_(computer_science)) for teaching, and as a base for future extensions. The committee expressly welcomed creating extensions and variants of Haskell 98 via adding and incorporating experimental features.

In February 1999, the Haskell 98 language standard was originally published as *The Haskell 98 Report*. In January 2003, a revised version was published as *Haskell 98 Language and Libraries: The Revised Report*. The language continues to evolve rapidly, with the [Glasgow Haskell Compiler](https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler) (GHC) implementation representing the current *de facto* standard.

In early 2006, the process of defining a successor to the Haskell 98 standard, informally named *Haskell Prime*, began. This was intended to be an ongoing incremental process to revise the language definition, producing a new revision up to once per year. The first revision, named *Haskell 2010*, was announced in November 2009 and published in July 2010.

Haskell 2010 added several well-used and uncontroversial features previously enabled via compiler-specific flags.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

* Hierarchical module names. Module names are allowed to consist of dot-separated sequences of capitalized identifiers, rather than only one such identifier. This lets modules be named in a hierarchical manner (e.g., `Data.List` instead of `List`), although technically modules are still in a single monolithic namespace. This extension was specified in an addendum to Haskell 98 and was in practice universally used.
* The [foreign function interface](https://en.wikipedia.org/wiki/Foreign_function_interface) (FFI) allows bindings to other programming languages. Only bindings to [C](https://en.wikipedia.org/wiki/C_(programming_language)) are specified in the Report, but the design allows for other language bindings. To support this, data type declarations were permitted to contain no constructors, enabling robust nonce types for foreign data that could not be constructed in Haskell. This extension was also previously specified in an Addendum to the Haskell 98 Report and widely used.
* So-called *n*+*k* patterns (definitions of the form `fact (n+1) = (n+1) * fact n`) were no longer allowed. This [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) had misleading semantics, in which the code looked like it used the `(+)` operator, but in fact desugared to code using `(-)` and `(>=)`.
* The rules of [type inference](https://en.wikipedia.org/wiki/Type_inference) were relaxed to allow more programs to type check.
* Some [syntax](https://en.wikipedia.org/wiki/Syntax_(programming_languages)) issues (changes in the formal grammar) were fixed: [pattern guards](https://en.wikipedia.org/wiki/Pattern_guard) were added, allowing pattern matching within guards; resolution of [operator fixity](https://en.wikipedia.org/wiki/Order_of_operations) was specified in a simpler way that reflected actual practice; an edge case in the interaction of the language's [lexical syntax](https://en.wikipedia.org/wiki/Lexical_syntax) of operators and comments was addressed, and the interaction of do-notation and if-then-else was tweaked to eliminate unexpected syntax errors.
* The `LANGUAGE` [pragma](https://en.wikipedia.org/wiki/Directive_(programming)) was specified. By 2010, dozens of extensions to the language were in wide use, and GHC (among other compilers) provided the `LANGUAGE` pragma to specify individual extensions with a list of identifiers. Haskell 2010 compilers are required to support the `Haskell2010` extension and are encouraged to support several others, which correspond to extensions added in Haskell 2010.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

The next formal specification had been planned for 2020. On 29 October 2021, with GHC version 9.2.1, the GHC2021 extension was released. While this is not a formal language spec, it combines several stable, widely used GHC extensions to Haskell 2010.

Haskell features [lazy evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation), [lambda expressions](https://en.wikipedia.org/wiki/Anonymous_function), [pattern matching](https://en.wikipedia.org/wiki/Pattern_matching), [list comprehension](https://en.wikipedia.org/wiki/List_comprehension), [type classes](https://en.wikipedia.org/wiki/Type_class) and [type polymorphism](https://en.wikipedia.org/wiki/Type_polymorphism). It is a [purely functional programming](https://en.wikipedia.org/wiki/Purely_functional_programming) language, which means that functions generally have no [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)). A distinct construct exists to represent side effects, [orthogonal](https://en.wikipedia.org/wiki/Orthogonal#Computer_science) to the type of functions. A pure function can return a side effect that is subsequently executed, modeling the [impure functions](https://en.wikipedia.org/wiki/Pure_function#Impure_functions) of other languages.

Haskell has a [strong](https://en.wikipedia.org/wiki/Strong_and_weak_typing), [static](https://en.wikipedia.org/wiki/Static_type#Static_typing) type system based on [Hindley–Milner type inference](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_inference). Its principal innovation in this area is type classes, originally conceived as a principled way to add [overloading](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) to the language, but since finding many more uses.

The construct that represents side effects is an example of a [monad](https://en.wikipedia.org/wiki/Monad_(functional_programming)): a general framework which can model various computations such as error handling, [nondeterminism](https://en.wikipedia.org/wiki/Nondeterministic_algorithm), [parsing](https://en.wikipedia.org/wiki/Parsing) and [software transactional memory](https://en.wikipedia.org/wiki/Software_transactional_memory). They are defined as ordinary datatypes, but Haskell provides some [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) for their use.

Haskell has an open, published specification, and [multiple implementations exist](#Implementations). Its main implementation, the [Glasgow Haskell Compiler](https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler) (GHC), is both an [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing)) and [native-code](https://en.wikipedia.org/wiki/Machine_code) [compiler](https://en.wikipedia.org/wiki/Compiler) that runs on most platforms. GHC is noted for its rich type system incorporating recent innovations such as [generalized algebraic data types](https://en.wikipedia.org/wiki/Generalized_algebraic_data_type) and type families. [The Computer Language Benchmarks Game](https://en.wikipedia.org/wiki/The_Computer_Language_Benchmarks_Game) also highlights its high-performance implementation of [concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science)) and [parallelism](https://en.wikipedia.org/wiki/Parallel_computing).

An active, growing community exists around the language, and more than 5,400 third-party open-source libraries and tools are available in the online package repository *Hackage*.

A ["Hello, World!" program](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) in Haskell (only the last line is strictly necessary):

```
module Main (main) where          -- not needed in interpreter, is the default in a module file

main :: IO ()                     -- the compiler can infer this type definition
main = putStrLn "Hello, World!"

```

The [factorial](https://en.wikipedia.org/wiki/Factorial) function in Haskell, defined in a few different ways (the first line is the [type annotation](https://en.wikipedia.org/wiki/Type_signature), which is optional and is the same for each implementation):

```
factorial :: (Integral a) => a -> a

-- Using recursion (with the "ifthenelse" expression)
factorial n = if n < 2
              then 1
              else n * factorial (n - 1)

-- Using recursion (with pattern matching)
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- Using recursion (with guards)
factorial n
   | n < 2     = 1
   | otherwise = n * factorial (n - 1)

-- Using a list and the "product" function
factorial n = product [1..n]

-- Using fold (implements "product")
factorial n = foldl (*) 1 [1..n]

-- Point-free style
factorial = foldr (*) 1 . enumFromTo 1

```

Using Haskell's [Fixed-point combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator) allows this function to be written without any explicit recursion.

```
import Data.Function (fix)

factorial = fix fac
  where fac f x 
          | x < 2     = 1
          | otherwise = x * f (x - 1)

```

As the *Integer* type has [arbitrary-precision](https://en.wikipedia.org/wiki/Arbitrary-precision), this code will compute values such as `factorial 100000` (a 456,574-digit number), with no loss of precision.

An implementation of an algorithm similar to [quick sort](https://en.wikipedia.org/wiki/Quick_sort) over lists, where the first element is taken as the pivot:

```
-- Type annotation (optional, same for each implementation)
quickSort :: Ord a => [a] -> [a]

-- Using list comprehensions
quickSort []     = []                               -- The empty list is already sorted
quickSort (x:xs) = quickSort [a | a <- xs, a < x]   -- Sort the left part of the list
                   ++ [x] ++                        -- Insert pivot between two sorted parts
                   quickSort [a | a <- xs, a >= x]  -- Sort the right part of the list

-- Using filter
quickSort []     = []
quickSort (x:xs) = quickSort (filter (<x) xs)
                   ++ [x] ++
                   quickSort (filter (>=x) xs)

```

All listed implementations are distributed under [open source licenses](https://en.wikipedia.org/wiki/Open_source_license).

Implementations that fully or nearly comply with the Haskell 98 standard include:

* The [Glasgow Haskell Compiler](https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler) (GHC) compiles to native code on many different processor architectures, and to [ANSI C](https://en.wikipedia.org/wiki/ANSI_C), via one of two [intermediate languages](https://en.wikipedia.org/wiki/Intermediate_language): [C--](https://en.wikipedia.org/wiki/C--), or in more recent versions, [LLVM](https://en.wikipedia.org/wiki/LLVM) (formerly Low Level Virtual Machine) bitcode. GHC has become the *de facto* standard Haskell dialect. There are libraries (e.g., bindings to [OpenGL](https://en.wikipedia.org/wiki/OpenGL)) that work only with GHC. GHC was also distributed with the [Haskell platform](https://en.wikipedia.org/wiki/Haskell_platform). GHC features an asynchronous runtime that also schedules threads across multiple CPU cores similar to [the Go runtime](https://en.wikipedia.org/wiki/Go_(programming_language)).
* Jhc, a Haskell compiler written by John Meacham, emphasizes speed and efficiency of generated programs and exploring new program transformations.
* The Utrecht Haskell Compiler (UHC) is a Haskell implementation from [Utrecht University](https://en.wikipedia.org/wiki/Utrecht_University). It supports almost all Haskell 98 features plus many experimental extensions. It is implemented using [attribute grammars](https://en.wikipedia.org/wiki/Attribute_grammar) and is primarily used for research on generated type systems and language extensions.

Implementations no longer actively maintained include:

* The Haskell User's Gofer System ([Hugs](https://en.wikipedia.org/wiki/Hugs_(interpreter))) is a [bytecode](https://en.wikipedia.org/wiki/Bytecode) interpreter. It was once one of the implementations used most widely, alongside the GHC compiler, but has now been mostly replaced by GHCi. It also comes with a graphics library.
* HBC is an early implementation supporting Haskell 1.4. It was implemented by [Lennart Augustsson](https://en.wikipedia.org/wiki/Lennart_Augustsson) in, and based on, [Lazy ML](https://en.wikipedia.org/wiki/Lazy_ML). It has not been actively developed for some time.
* nhc98 is a bytecode compiler focusing on minimizing memory use.
  + The York Haskell Compiler ([Yhc](https://en.wikipedia.org/wiki/Yhc)) was a fork of nhc98, with the goals of being simpler, more portable and efficient, and integrating support for Hat, the Haskell tracer. It also had a [JavaScript](https://en.wikipedia.org/wiki/JavaScript) backend, allowing users to run Haskell programs in [web browsers](https://en.wikipedia.org/wiki/Web_browser).

Implementations not fully Haskell 98 compliant, and using a variant Haskell language, include:

* Eta and Frege are dialects of Haskell targeting the [Java virtual machine](https://en.wikipedia.org/wiki/Java_virtual_machine).
* [Gofer](https://en.wikipedia.org/wiki/Gofer_(software)) is an educational dialect of Haskell, with a feature called *constructor classes*, developed by Mark Jones. It is supplanted by Haskell User's Gofer System (Hugs).
* Helium, a newer dialect of Haskell. The focus is on making learning easier via clearer error messages by disabling type classes as a default.

## Notable applications

[[edit](/w/index.php?title=Haskell&action=edit&section=9)]

* [Bluespec](https://en.wikipedia.org/wiki/Bluespec) [SystemVerilog](https://en.wikipedia.org/wiki/SystemVerilog) (BSV) is a language extension of Haskell, for designing [electronics](https://en.wikipedia.org/wiki/Electronics). It is an example of a [domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language) embedded into Haskell. Further, Bluespec, Inc.'s tools are implemented in Haskell.
* [Cryptol](https://en.wikipedia.org/wiki/Cryptol), a language and toolchain for developing and verifying [cryptography](https://en.wikipedia.org/wiki/Cryptography) algorithms, is implemented in Haskell.
* [Facebook](https://en.wikipedia.org/wiki/Facebook) implements its anti-spam programs in Haskell, maintaining the underlying data access library as [open-source software](https://en.wikipedia.org/wiki/Open-source_software).
* The [Cardano blockchain platform](https://en.wikipedia.org/wiki/Cardano_(blockchain_platform)) is implemented in Haskell.
* [GitHub](https://en.wikipedia.org/wiki/GitHub) implemented Semantic, an open-source library to analyze, diff, and interpret untrusted source code for many languages, in Haskell.
* [Standard Chartered](https://en.wikipedia.org/wiki/Standard_Chartered)'s financial modelling language Mu is syntactic Haskell running on a strict runtime.
* [seL4](https://en.wikipedia.org/wiki/SeL4), the first [formally verified](https://en.wikipedia.org/wiki/Formal_methods) [microkernel](https://en.wikipedia.org/wiki/Microkernel), used Haskell as a prototyping language for the OS developer. At the same time, the Haskell code defined an executable specification with which to reason, for automatic translation by the theorem-proving tool. The Haskell code thus served as an intermediate prototype before final [C](https://en.wikipedia.org/wiki/C_(programming_language)) refinement.
* [Target](https://en.wikipedia.org/wiki/Target_Corporation) stores' supply chain optimization software is written in Haskell.
* [Co–Star](https://en.wikipedia.org/wiki/Co%E2%80%93Star)
* [Mercury Technologies](https://en.wikipedia.org/wiki/Mercury_Technologies)' back end is written in Haskell.
* [Anduril Industries](https://en.wikipedia.org/wiki/Anduril_Industries) uses Haskell for its Pulsar family of electronic warfare systems.

Notable [web frameworks](https://en.wikipedia.org/wiki/Web_framework) written for Haskell include:

Jan-Willem Maessen, in 2002, and [Simon Peyton Jones](https://en.wikipedia.org/wiki/Simon_Peyton_Jones), in 2003, discussed problems associated with lazy evaluation while also acknowledging the theoretical motives for it. In addition to purely practical considerations such as improved performance, they note that lazy evaluation makes it more difficult for programmers to reason about the performance of their code (particularly its space use).

Bastiaan Heeren, Daan Leijen, and Arjan van IJzendoorn in 2003 also observed some stumbling blocks for Haskell learners: "The subtle syntax and sophisticated type system of Haskell are a double edged sword—highly appreciated by experienced programmers but also a source of frustration among beginners, since the generality of Haskell often leads to cryptic error messages." To address the error messages researchers from Utrecht University developed an advanced interpreter called Helium, which improved the user-friendliness of error messages by limiting the generality of some Haskell features. In particular it disables type classes by default.

Ben Lippmeier designed Disciple as a [strict-by-default](https://en.wikipedia.org/wiki/Evaluation_strategy) (lazy by explicit annotation) dialect of Haskell with a type-and-effect system, to address Haskell's difficulties in reasoning about lazy evaluation and in using traditional data structures such as mutable arrays. He argues (p. 20) that "destructive update furnishes the programmer with two important and powerful tools ... a set of efficient array-like data structures for managing collections of objects, and ... the ability to broadcast a new value to all parts of a program with minimal burden on the programmer."

[Robert Harper](https://en.wikipedia.org/wiki/Robert_Harper_(computer_scientist)), one of the authors of [Standard ML](https://en.wikipedia.org/wiki/Standard_ML), has given his reasons for not using Haskell to teach introductory programming. Among these are the difficulty of reasoning about resource use with non-strict evaluation, that lazy evaluation complicates the definition of datatypes and inductive reasoning, and the "inferiority" of Haskell's (old) class system compared to ML's module system.

Haskell's build tool, [Cabal](https://en.wikipedia.org/wiki/Cabal_(software)), has historically been criticized for poorly handling multiple versions of the same library, a problem known as "Cabal hell". The Stackage server and [Stack](https://en.wikipedia.org/wiki/Stack_(Haskell)) build tool were made in response to these criticisms. Cabal has since addressed this problem by borrowing ideas from the [package manager](https://en.wikipedia.org/wiki/Package_manager) [Nix](https://en.wikipedia.org/wiki/Nix_(package_manager)), with the new approach becoming the default in 2019.

[Clean](https://en.wikipedia.org/wiki/Clean_(programming_language)) is a close, slightly older relative of Haskell. Its biggest deviation from Haskell is in the use of [uniqueness types](https://en.wikipedia.org/wiki/Uniqueness_type) instead of monads for [input/output](https://en.wikipedia.org/wiki/Input/output) (I/O) and side effects.

A series of languages inspired by Haskell, but with different type systems, have been developed, including:

* [Agda](https://en.wikipedia.org/wiki/Agda_(programming_language)), a functional language with [dependent types](https://en.wikipedia.org/wiki/Dependent_type).
* [Cayenne](https://en.wikipedia.org/wiki/Cayenne_(programming_language)), with dependent types.
* [Elm](https://en.wikipedia.org/wiki/Elm_(programming_language)), a functional language to create web front-end apps, no support for user-defined or higher-[kinded](https://en.wikipedia.org/wiki/Kind_(type_theory)) [type classes](https://en.wikipedia.org/wiki/Type_classes) or instances.
* [Epigram](https://en.wikipedia.org/wiki/Epigram_(programming_language)), a functional language with dependent types suitable for proving properties of programs.
* [Idris](https://en.wikipedia.org/wiki/Idris_(programming_language)), a general purpose functional language with dependent types, developed at the [University of St Andrews](https://en.wikipedia.org/wiki/University_of_St_Andrews).
* [PureScript](https://en.wikipedia.org/wiki/PureScript) transpiles to JavaScript.
* [Ωmega](https://en.wikipedia.org/wiki/%CE%A9mega), a strict language that allows introduction of new [kinds](https://en.wikipedia.org/wiki/Kind_(type_theory)), and programming at the type level.

Other related languages include:

* [Curry](https://en.wikipedia.org/wiki/Curry_(programming_language)), a functional/logic programming language based on Haskell.

Notable Haskell variants include:

* [Generic Haskell](https://en.wikipedia.org/wiki/Generic_programming#Generic_Haskell), a version of Haskell with type system support for [generic programming](https://en.wikipedia.org/wiki/Generic_programming).
* [Hume](https://en.wikipedia.org/wiki/Hume_(programming_language)), a strict functional language for [embedded systems](https://en.wikipedia.org/wiki/Embedded_system) based on processes as stateless automata over a sort of tuples of one element mailbox channels where the state is kept by feedback into the mailboxes, and a mapping description from outputs to channels as box wiring, with a Haskell-like expression language and syntax.

## Conferences and workshops

[[edit](/w/index.php?title=Haskell&action=edit&section=14)]

Haskell events have been regularly held concurrent with the [International Conference on Functional Programming](https://en.wikipedia.org/wiki/International_Conference_on_Functional_Programming) (ICFP) including workshops such as the Haskell Symposium (formerly the Haskell Workshop) and Commercial Users of Functional Programming. Other events include the Haskell Implementors Workshop, ZuriHac in [Zurich](https://en.wikipedia.org/wiki/Zurich), and Hac: The Haskell Hackathon.

1. ^ [***a***](#cite_ref-2010ann_2-0) [***b***](#cite_ref-2010ann_2-1) [Marlow, Simon](https://en.wikipedia.org/wiki/Simon_Marlow) (24 November 2009). ["Announcing Haskell 2010"](http://www.haskell.org/pipermail/haskell/2009-November/021750.html). *Haskell* (Mailing list). Retrieved 12 March 2011.
2. ^ [***a***](#cite_ref-2020committee_3-0) [***b***](#cite_ref-2020committee_3-1) Riedel, Herbert (28 April 2016). ["ANN: Haskell Prime 2020 committee has formed"](https://mail.haskell.org/pipermail/haskell-prime/2016-April/004050.html). *Haskell-prime* (Mailing list). Retrieved 6 May 2017.
3. ^ [***a***](#cite_ref-haskell-report-influences_4-0) [***b***](#cite_ref-haskell-report-influences_4-1) [***c***](#cite_ref-haskell-report-influences_4-2) [***d***](#cite_ref-haskell-report-influences_4-3) [***e***](#cite_ref-haskell-report-influences_4-4) [***f***](#cite_ref-haskell-report-influences_4-5) [***g***](#cite_ref-haskell-report-influences_4-6) [***h***](#cite_ref-haskell-report-influences_4-7) [***i***](#cite_ref-haskell-report-influences_4-8) [***j***](#cite_ref-haskell-report-influences_4-9) [***k***](#cite_ref-haskell-report-influences_4-10) [***l***](#cite_ref-haskell-report-influences_4-11) [***m***](#cite_ref-haskell-report-influences_4-12) [Peyton Jones 2003](#CITEREFPeyton_Jones2003), p. xi
4. **[^](#cite_ref-5)** Norell, Ulf (2008). ["Dependently Typed Programming in Agda"](http://www.cse.chalmers.se/~ulfn/papers/afp08/tutorial.pdf) (PDF). Gothenburg: Chalmers University. Retrieved 9 February 2012.
5. **[^](#cite_ref-7)** [Stroustrup, Bjarne](https://en.wikipedia.org/wiki/Bjarne_Stroustrup); Sutton, Andrew (2011). ["Design of Concept Libraries for C++"](https://web.archive.org/web/20120210041742/http://www2.research.att.com/~bs/sle2011-concepts.pdf) (PDF). *Software Language Engineering*. Archived from [the original](http://www2.research.att.com/~bs/sle2011-concepts.pdf) (PDF) on 10 February 2012.
6. ^ [***a***](#cite_ref-meijer2012_9-0) [***b***](#cite_ref-meijer2012_9-1) [Meijer, Erik](https://en.wikipedia.org/wiki/Erik_Meijer_(computer_scientist)) (2006). "Confessions of a Used Programming Language Salesman: Getting the Masses Hooked on Haskell". *Oopsla 2007*. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.72.868](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.72.868).
7. **[^](#cite_ref-10)** Meijer, Erik (1 October 2009). ["C9 Lectures: Dr. Erik Meijer – Functional Programming Fundamentals, Chapter 1 of 13"](https://web.archive.org/web/20120616051226/http://channel9.msdn.com/shows/Going+Deep/Lecture-Series-Erik-Meijer-Functional-Programming-Fundamentals-Chapter-1/). *[Channel 9](https://en.wikipedia.org/wiki/Channel_9_(discussion_forum))*. Microsoft. Archived from [the original](http://channel9.msdn.com/shows/Going+Deep/Lecture-Series-Erik-Meijer-Functional-Programming-Fundamentals-Chapter-1/) on 16 June 2012. Retrieved 9 February 2012.
8. **[^](#cite_ref-11)** Drobi, Sadek (4 March 2009). ["Erik Meijer on LINQ"](http://www.infoq.com/interviews/LINQ-Erik-Meijer). *InfoQ*. QCon [SF](https://en.wikipedia.org/wiki/San_Francisco) 2008: C4Media Inc. Retrieved 9 February 2012.`{{cite news}}`: CS1 maint: location ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_location))
9. **[^](#cite_ref-12)** Hickey, Rich. ["Clojure Bookshelf"](https://web.archive.org/web/20171003001051/https://www.amazon.com/gp/richpub/listmania/fullview/R3LG3ZBZS4GCTH). *Listmania!*. Archived from [the original](https://www.amazon.com/gp/richpub/listmania/fullview/R3LG3ZBZS4GCTH) on 3 October 2017. Retrieved 3 October 2017.
10. **[^](#cite_ref-13)** Heller, Martin (18 October 2011). ["Turn up your nose at Dart and smell the CoffeeScript"](https://www.infoworld.com/article/2078452/turn-up-your-nose-at-dart-and-smell-the-coffeescript.html). *[InfoWorld](https://en.wikipedia.org/wiki/InfoWorld)*. Retrieved 2020-07-15.
11. **[^](#cite_ref-14)** ["Declarative programming in Escher"](http://www.cs.bris.ac.uk/Publications/Papers/1000073.pdf) (PDF). Retrieved 7 October 2015.
12. **[^](#cite_ref-15)** [Syme, Don](https://en.wikipedia.org/wiki/Don_Syme); Granicz, Adam; Cisternino, Antonio (2007). *Expert F#*. [Apress](https://en.wikipedia.org/wiki/Apress). p. 2. "F# also draws from Haskell particularly with regard to two advanced language features called *sequence expressions* and *workflows*."
13. **[^](#cite_ref-16)** ["Facebook Introduces 'Hack,' the Programming Language of the Future"](https://www.wired.com/2014/03/facebook-hack/). *WIRED*. 20 March 2014.
14. **[^](#cite_ref-17)** ["Idris, a dependently typed language"](http://www.idris-lang.org/). Retrieved 26 October 2014.
15. **[^](#cite_ref-18)** ["LiveScript Inspiration"](http://livescript.net/#inspiration). Retrieved 4 February 2014.
16. **[^](#cite_ref-19)** Freeman, Phil (2016). ["PureScript by Example"](https://leanpub.com/purescript/read). Leanpub. Retrieved 23 April 2017.
17. **[^](#cite_ref-20)** Kuchling, A. M. ["Functional Programming HOWTO"](https://docs.python.org/howto/functional.html). *Python v2.7.2 documentation*. Python Software Foundation. Retrieved 9 February 2012.
18. **[^](#cite_ref-21)** ["Glossary of Terms and Jargon"](https://web.archive.org/web/20120121145808/http://www.perlfoundation.org/perl6/index.cgi?glossary_of_terms_and_jargon). *Perl Foundation Perl 6 Wiki*. [The Perl Foundation](https://en.wikipedia.org/wiki/The_Perl_Foundation). Archived from [the original](http://www.perlfoundation.org/perl6/index.cgi?glossary_of_terms_and_jargon) on 21 January 2012. Retrieved 9 February 2012.
19. **[^](#cite_ref-22)** ["Influences - The Rust Reference"](https://doc.rust-lang.org/reference/influences.html). *The Rust Reference*. Retrieved 31 December 2023.
20. **[^](#cite_ref-23)** Fogus, Michael (6 August 2010). ["MartinOdersky take(5) toList"](http://blog.fogus.me/2010/08/06/martinodersky-take5-tolist/). *Send More Paramedics*. Retrieved 9 February 2012.
21. **[^](#cite_ref-lattner2014_24-0)** Lattner, Chris (3 June 2014). ["Chris Lattner's Homepage"](http://nondot.org/sabre/). Chris Lattner. Retrieved 3 June 2014. "The Swift language is the product of tireless effort from a team of language experts, documentation gurus, compiler optimization ninjas, and an incredibly important internal dogfooding group who provided feedback to help refine and battle-test ideas. Of course, it also greatly benefited from the experiences hard-won by many other languages in the field, drawing ideas from Objective-C, Rust, Haskell, Ruby, Python, C#, CLU, and far too many others to list."
22. **[^](#cite_ref-25)** Chevalier, Tim (28 January 2008). ["anybody can tell me the pronunciation of "haskell"?"](http://www.haskell.org/pipermail/haskell-cafe/2008-January/038756.html). *Haskell-cafe* (Mailing list). Retrieved 12 March 2011.
23. **[^](#cite_ref-26)** Type inference originally using [Hindley-Milner type inference](https://en.wikipedia.org/wiki/Type_inference#Hindley%E2%80%93Milner_type_inference_algorithm)
24. **[^](#cite_ref-28)** Edward Kmett, [Edward Kmett – Type Classes vs. the World](https://www.youtube.com/watch?v=hIZxTQP1ifo)
25. **[^](#cite_ref-29)** Mossberg, Erik (8 June 2020), [*erkmos/haskell-companies*](https://github.com/erkmos/haskell-companies), retrieved 22 June 2020
26. **[^](#cite_ref-30)** O'Sullivan, Bryan; Goerzen, John; Stewart, Donald Bruce (15 November 2008). [*Real World Haskell: Code You Can Believe In*](https://books.google.com/books?id=nh0okI1a1sQC). O'Reilly Media, Inc. pp. xxviii–xxxi. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-596-55430-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-596-55430-9).
27. **[^](#cite_ref-31)** ["Haskell in Production: Riskbook"](https://serokell.io/blog/haskell-in-industry-riskbook). *Serokell Software Development Company*. Retrieved 7 September 2021.
28. **[^](#cite_ref-32)** ["PYPL PopularitY of Programming Language index"](https://web.archive.org/web/20210507222106/https://pypl.github.io/PYPL.html). *pypl.github.io*. May 2021. Archived from [the original](http://pypl.github.io/PYPL.html) on 7 May 2021. Retrieved 16 May 2021.
29. **[^](#cite_ref-33)** Frederickson, Ben. ["Ranking Programming Languages by GitHub Users"](https://www.benfrederickson.com/ranking-programming-languages-by-github-users/). *www.benfrederickson.com*. Retrieved 6 September 2019.
30. **[^](#cite_ref-35)** Wadler, Philip (October 1988). ["How to make ad-hoc polymorphism less ad hoc"](https://www.researchgate.net/publication/2710954).
31. **[^](#cite_ref-36)** Peyton Jones, Simon (2003). ["Wearing the hair shirt: a retrospective on Haskell"](https://www.microsoft.com/en-us/research/publication/wearing-hair-shirt-retrospective-haskell-2003/). *[Microsoft](https://en.wikipedia.org/wiki/Microsoft)*.
32. **[^](#cite_ref-HaskellWikiImpl_37-0)** ["Haskell Wiki: Implementations"](http://www.haskell.org/haskellwiki/Implementations). Retrieved 18 December 2012.
33. **[^](#cite_ref-38)** ["Welcome to Haskell'"](https://web.archive.org/web/20160220103915/https://prime.haskell.org/). *The Haskell' Wiki*. Archived from [the original](https://prime.haskell.org/) on 20 February 2016. Retrieved 11 February 2016.
34. **[^](#cite_ref-ghc9,2,1_39-0)** GHC 2020 Team (29 October 2021) [GHC 9.2.1](https://downloads.haskell.org/~ghc/9.2.1/docs/html/users_guide/9.2.1-notes.html) released
35. **[^](#cite_ref-40)** [Proposed compiler and language changes for GHC and GHC/Haskell](https://github.com/ghc-proposals/ghc-proposals)
36. **[^](#cite_ref-wadler89_41-0)** Wadler, P.; Blott, S. (1989). "How to make ad-hoc polymorphism less ad hoc". *Proceedings of the 16th ACM SIGPLAN-SIGACT symposium on Principles of programming languages - POPL '89*. [ACM](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery). pp. 60–76. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/75277.75283](https://doi.org/10.1145%2F75277.75283). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-89791-294-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-89791-294-5). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [15327197](https://api.semanticscholar.org/CorpusID:15327197).
37. **[^](#cite_ref-hallgren01_42-0)** Hallgren, T. (January 2001). ["Fun with Functional Dependencies, or Types as Values in Static Computations in Haskell"](http://www.cs.chalmers.se/~hallgren/Papers/wm01.html). *Proceedings of the Joint CS/CE Winter Meeting*. Varberg, Sweden.
38. **[^](#cite_ref-shootout_43-0)** ["Computer Language Benchmarks Game"](https://web.archive.org/web/20210117215751/https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/haskell.html). Archived from [the original](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/haskell.html) on 17 January 2021. Retrieved 12 February 2021.
39. **[^](#cite_ref-hackage-stats_44-0)** ["HackageDB statistics"](https://web.archive.org/web/20130503114836/http://hackage.haskell.org/cgi-bin/hackage-scripts/stats). Hackage.haskell.org. Archived from [the original](http://hackage.haskell.org/cgi-bin/hackage-scripts/stats) on 3 May 2013. Retrieved 26 June 2013.
40. **[^](#cite_ref-implementations_45-0)** ["Implementations"](http://www.haskell.org/haskellwiki/Implementations) at the Haskell Wiki
41. **[^](#cite_ref-46)** ["The LLVM Backend"](https://web.archive.org/web/20170407154842/https://ghc.haskell.org/trac/ghc/wiki/Commentary/Compiler/Backends/LLVM). *GHC Trac*. 29 March 2019. Archived from [the original](https://ghc.haskell.org/trac/ghc/wiki/Commentary/Compiler/Backends/LLVM) on 7 April 2017. Retrieved 31 March 2016.
42. **[^](#cite_ref-47)** Terei, David A.; Chakravarty, Manuel M. T. (2010). ["An LLVM Backend for GHC"](http://www.cse.unsw.edu.au/~chak/papers/TC10.html). *Proceedings of ACM SIGPLAN Haskell Symposium 2010*. ACM Press.
43. **[^](#cite_ref-48)** C. Ryder and S. Thompson (2005). ["Porting HaRe to the GHC API"](http://kar.kent.ac.uk/14237/1/Tech_Chris.pdf)
44. **[^](#cite_ref-49)** [Utrecht Haskell Compiler](http://www.cs.uu.nl/wiki/UHC)
45. **[^](#cite_ref-51)** [*Agda 2*](https://github.com/agda/agda), Agda Github Community, 15 October 2021, retrieved 16 October 2021
46. **[^](#cite_ref-52)** ["The Haskell Cabal"](https://www.haskell.org/cabal/). Retrieved 8 April 2015.
47. **[^](#cite_ref-53)** ["Linspire/Freespire Core OS Team and Haskell"](https://web.archive.org/web/20171227234048/http://urchin.earth.li/pipermail/debian-haskell/2006-May/000169.html). *Debian Haskell mailing list*. May 2006. Archived from [the original](http://urchin.earth.li/pipermail/debian-haskell/2006-May/000169.html) on 27 December 2017. Retrieved 14 June 2006.
48. **[^](#cite_ref-54)** ["Live code with Tidal Cycles"](https://web.archive.org/web/20240912113521/https://doc.tidalcycles.org/). *Tidal Cycles*. Archived from [the original](https://doc.tidalcycles.org/) on 12 September 2024. Retrieved 19 January 2022.
49. **[^](#cite_ref-55)** xmonad.org
50. **[^](#cite_ref-56)** ["Gargantext – Main"](https://gitlab.iscpif.fr/gargantext/main). 13 July 2023.
51. **[^](#cite_ref-57)** David, Chavalarias; et al. (8 May 2023). [*Toward a Research Agenda on Digital Media and Humanity Well-Being*](https://hal-lara.archives-ouvertes.fr/hal-04091733/) (report).
52. **[^](#cite_ref-58)** ["Fighting spam with Haskell"](https://code.fb.com/security/fighting-spam-with-haskell/). *Facebook Code*. 26 June 2015. Retrieved 11 August 2019.
53. **[^](#cite_ref-59)** ["Open-sourcing Haxl, a library for Haskell"](https://code.fb.com/web/open-sourcing-haxl-a-library-for-haskell/). *Facebook Code*. 10 June 2014. Retrieved 11 August 2019.
54. **[^](#cite_ref-60)** ["input-output-hk/cardano-node: The core component that is used to participate in a Cardano decentralised blockchain"](https://github.com/input-output-hk/cardano-node). GitHub. Retrieved 18 March 2022.
55. **[^](#cite_ref-61)** Stocks, Nathan (CleanCut) (7 June 2019). ["Parsing, analyzing, and comparing source code across many languages"](https://github.com/github/semantic). *GitHub/semantic*. Retrieved 19 July 2025.
56. **[^](#cite_ref-62)** ["Commercial Users of Functional Programming Workshop Report"](https://anil.recoil.org/papers/2011-cufp-scribe-preprint.pdf) (PDF). Retrieved 10 June 2022.
57. ^ [***a***](#cite_ref-klein-sosp09_63-0) [***b***](#cite_ref-klein-sosp09_63-1) [***c***](#cite_ref-klein-sosp09_63-2) 
    A formal proof of functional correctness was completed in 2009.
    Klein, Gerwin; Elphinstone, Kevin; [Heiser, Gernot](https://en.wikipedia.org/wiki/Gernot_Heiser); Andronick, June; Cock, David; Derrin, Philip; Elkaduwe, Dhammika; Engelhardt, Kai; Kolanski, Rafal; Norrish, Michael; Sewell, Thomas; Tuch, Harvey; Winwood, Simon (October 2009). ["seL4: Formal verification of an OS kernel"](http://www.sigops.org/sosp/sosp09/papers/klein-sosp09.pdf) (PDF). *22nd ACM Symposium on Operating System Principles*. Big Sky, Montana, USA.
58. **[^](#cite_ref-klein-sosp=09_64-0)**  Cite error: The named reference `klein-sosp=09` was invoked but never defined (see the [help page](https://en.wikipedia.org/wiki/Help:Cite_errors/Cite_error_references_no_text)).
59. **[^](#cite_ref-65)** ["Tikhon Jelvis: Haskell at Target"](https://www.youtube.com/watch?v=0EgHNq6Pej8). *[YouTube](https://en.wikipedia.org/wiki/YouTube)*. 22 April 2017.
60. **[^](#cite_ref-66)** ["Why Co–Star uses Haskell"](https://www.costarastrology.com/why-haskell/). *[Co–Star](https://en.wikipedia.org/wiki/Co%E2%80%93Star)*. Retrieved 30 September 2023.
61. **[^](#cite_ref-67)** ["Haskell in Production: Mercury"](https://serokell.io/blog/haskell-in-production-mercury). *Serokell*. Retrieved 11 October 2024.
62. **[^](#cite_ref-68)** ["Web/Frameworks – HaskellWiki"](https://wiki.haskell.org/Web/Frameworks). *wiki.haskell.org*. Retrieved 17 September 2022.
63. **[^](#cite_ref-69)** Jan-Willem Maessen. *Eager Haskell: Resource-bounded execution yields efficient iteration*. Proceedings of the 2002 [Association for Computing Machinery](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery) (ACM) SIGPLAN workshop on Haskell.
64. **[^](#cite_ref-70)** [*[dead link](https://en.wikipedia.org/wiki/Wikipedia:Link_rot)*]Simon Peyton Jones. [*Wearing the hair shirt: a retrospective on Haskell*](http://research.microsoft.com/~simonpj/papers/haskell-retrospective). Invited talk at [POPL](https://en.wikipedia.org/wiki/POPL) 2003.
65. **[^](#cite_ref-71)** ["Lazy evaluation can lead to excellent performance, such as in The Computer Language Benchmarks Game"](http://www.haskell.org/pipermail/haskell/2006-June/018127.html). 27 June 2006.
66. **[^](#cite_ref-72)** Heeren, Bastiaan; Leijen, Daan; van IJzendoorn, Arjan (2003). ["Helium, for learning Haskell"](http://www.cs.uu.nl/~bastiaan/heeren-helium.pdf) (PDF). *Proceedings of the 2003 ACM SIGPLAN workshop on Haskell*. pp. 62–71. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/871895.871902](https://doi.org/10.1145%2F871895.871902). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1581137583](https://en.wikipedia.org/wiki/Special:BookSources/1581137583). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [11986908](https://api.semanticscholar.org/CorpusID:11986908).
67. **[^](#cite_ref-73)** ["Helium Compiler Docs"](https://github.com/Helium4Haskell/helium/blob/master/COMPILERDOCS.md). GitHub. Retrieved 9 June 2023.
68. **[^](#cite_ref-74)** ["DDC – HaskellWiki"](http://www.haskell.org/haskellwiki/DDC). Haskell.org. 3 December 2010. Retrieved 26 June 2013.
69. **[^](#cite_ref-75)** Ben Lippmeier, [Type Inference and Optimisation for an Impure World](https://ahelp.com/wp-content/uploads/2025/02/lippmeier-impure-world.pdf), [Australian National University](https://en.wikipedia.org/wiki/Australian_National_University) (2010) PhD thesis, chapter 1
70. **[^](#cite_ref-76)** Robert Harper (25 April 2011). ["The point of laziness"](http://existentialtype.wordpress.com/2011/04/24/the-real-point-of-laziness/). [![Closed access icon](//upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Closed_Access_logo_transparent.svg/20px-Closed_Access_logo_transparent.svg.png)](https://en.wikipedia.org/wiki/Paywall)
71. **[^](#cite_ref-77)** Robert Harper (16 April 2011). ["Modules matter most"](http://existentialtype.wordpress.com/2011/04/16/modules-matter-most/).[![Closed access icon](//upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Closed_Access_logo_transparent.svg/20px-Closed_Access_logo_transparent.svg.png)](https://en.wikipedia.org/wiki/Paywall)
72. **[^](#cite_ref-78)** ["Solving Cabal Hell"](https://www.yesodweb.com/blog/2012/11/solving-cabal-hell). *www.yesodweb.com*. Retrieved 11 August 2019.
73. **[^](#cite_ref-79)** ["Announcing cabal new-build: Nix-style local builds"](http://blog.ezyang.com/2016/05/announcing-cabal-new-build-nix-style-local-builds/). Retrieved 1 October 2019.
74. **[^](#cite_ref-80)** ["The Haskell Symposium"](https://www.haskell.org/haskell-symposium/). *www.haskell.org*. Retrieved 1 November 2025.
75. **[^](#cite_ref-81)** ["2025 Haskell Implementors' Workshop"](https://haskell.foundation/events/2025-haskell-implementors-workshop.html). *haskell.foundation*. Retrieved 1 November 2025.
76. **[^](#cite_ref-82)** ["Zürich Friends of Haskell"](https://zfoh.ch/). *zfoh.ch*. Retrieved 13 March 2025.
77. **[^](#cite_ref-83)** ["Hackathon – HaskellWiki"](http://haskell.org/haskellwiki/Hackathon).

Reports

Textbooks

* Davie, Antony (1992). *An Introduction to Functional Programming Systems Using Haskell*. Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-521-25830-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-25830-2).
* [Bird, Richard](https://en.wikipedia.org/wiki/Richard_Bird_(computer_scientist)) (1998). [*Introduction to Functional Programming using Haskell*](http://www.cs.ox.ac.uk/publications/books/functional/) (2nd ed.). Prentice Hall Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-484346-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-484346-9).
* [Hudak, Paul](https://en.wikipedia.org/wiki/Paul_Hudak) (2000). [*The Haskell School of Expression: Learning Functional Programming through Multimedia*](http://www.cs.yale.edu/homes/hudak/SOE/). New York: Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0521643382](https://en.wikipedia.org/wiki/Special:BookSources/978-0521643382).
* Hutton, Graham (2007). [*Programming in Haskell*](http://www.cs.nott.ac.uk/~gmh/book.html). Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0521692694](https://en.wikipedia.org/wiki/Special:BookSources/978-0521692694).
* O'Sullivan, Bryan; Stewart, Don; Goerzen, John (2008). *Real World Haskell*. Sebastopol: O'Reilly. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-596-51498-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-596-51498-3). [Real World Haskell](http://book.realworldhaskell.org/read/) (full text).
* Thompson, Simon (2011). [*Haskell: The Craft of Functional Programming*](http://www.haskellcraft.com/) (3rd ed.). Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0201882957](https://en.wikipedia.org/wiki/Special:BookSources/978-0201882957).
* Lipovača, Miran (April 2011). [*Learn You a Haskell for Great Good!*](https://archive.org/details/learnyouhaskellf00lipo_0). San Francisco: No Starch Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-59327-283-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59327-283-8). ([full text](http://learnyouahaskell.com/chapters))
* [Bird, Richard](https://en.wikipedia.org/wiki/Richard_Bird_(computer_scientist)) (2014). *Thinking Functionally with Haskell*. Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-107-45264-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-107-45264-0).
* [Bird, Richard](https://en.wikipedia.org/wiki/Richard_Bird_(computer_scientist)); [Gibbons, Jeremy](https://en.wikipedia.org/wiki/Jeremy_Gibbons) (July 2020). *Algorithm Design with Haskell*. Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-108-49161-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-108-49161-7).

Tutorials

History

Wikibooks has a book on the topic of:

***[Haskell](https://en.wikibooks.org/wiki/Haskell)***