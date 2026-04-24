# Algorithm

* Source: https://en.wikipedia.org/wiki/Algorithm

---

Flowchart of using successive subtractions to find the 

[greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor)

 of number 

*r*

 and 

*s*

In [mathematics](https://en.wikipedia.org/wiki/Mathematics) and [computer science](https://en.wikipedia.org/wiki/Computer_science), an **algorithm** ([/ˈælɡərɪðəm/](https://en.wikipedia.org/wiki/Help:IPA/English) ) is a finite sequence of [mathematically rigorous](https://en.wikipedia.org/wiki/Rigour#Mathematics) instructions, typically used to solve a class of specific [problems](https://en.wikipedia.org/wiki/Computational_problem) or to perform a [computation](https://en.wikipedia.org/wiki/Computation). Algorithms are used as specifications for performing [calculations](https://en.wikipedia.org/wiki/Calculation) and [data processing](https://en.wikipedia.org/wiki/Data_processing). More advanced algorithms can use [conditionals](https://en.wikipedia.org/wiki/Conditional_(computer_programming)) to divert the code execution through various routes (referred to as [automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making)) and deduce valid [inferences](https://en.wikipedia.org/wiki/Inference) (referred to as [automated reasoning](https://en.wikipedia.org/wiki/Automated_reasoning)).

In contrast, a [heuristic](https://en.wikipedia.org/wiki/Heuristic_(computer_science)) is an approach to solving problems without well-defined correct or optimal results. For example, although social media [recommender systems](https://en.wikipedia.org/wiki/Recommender_system) are commonly called "algorithms", they actually rely on heuristics as there is no truly "correct" recommendation.

As an [effective method](https://en.wikipedia.org/wiki/Effective_method), an algorithm can be expressed within a finite amount of space and time and in a well-defined [formal language](https://en.wikipedia.org/wiki/Formal_language) for calculating a [function](https://en.wikipedia.org/wiki/Function_(mathematics)). Starting from an initial state and initial input (perhaps [empty](https://en.wikipedia.org/wiki/Empty_string)), the instructions describe a computation that, when [executed](https://en.wikipedia.org/wiki/Execution_(computing)), proceeds through a finite number of well-defined successive states, eventually producing "output" and terminating at a final ending state. The transition from one state to the next is not necessarily [deterministic](https://en.wikipedia.org/wiki/Deterministic); some algorithms, known as [randomized algorithms](https://en.wikipedia.org/wiki/Randomized_algorithm), incorporate random input.

## Etymology

Around 825 AD, Persian scientist and polymath [Muḥammad ibn Mūsā al-Khwārizmī](https://en.wikipedia.org/wiki/Al-Khwarizmi) wrote *kitāb al-ḥisāb al-hindī* ("Book of Indian computation") and *kitab al-jam' wa'l-tafriq al-ḥisāb al-hindī* ("Addition and subtraction in Indian arithmetic"). In the early 12th century, Latin translations of these texts involving the [Hindu–Arabic numeral system](https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system) and [arithmetic](https://en.wikipedia.org/wiki/Arithmetic) appeared, for example *Liber Alghoarismi de practica arismetrice*, attributed to [John of Seville](https://en.wikipedia.org/wiki/John_of_Seville), and *Liber Algoritmi de numero Indorum*, attributed to [Adelard of Bath](https://en.wikipedia.org/wiki/Adelard_of_Bath). Here, *alghoarismi* or *algoritmi* is the [Latinization](https://en.wikipedia.org/wiki/Latinisation_of_names) of Al-Khwarizmi's name; the text starts with the phrase *Dixit Algoritmi*, or "Thus spoke Al-Khwarizmi".

[Muḥammad ibn Mūsā al-Khwārizmī](https://en.wikipedia.org/wiki/Mu%E1%B8%A5ammad_ibn_M%C5%ABs%C4%81_al-Khw%C4%81rizm%C4%AB)

: The 9th-century mathematician whose name is the origin of the word 'algorithm'.

The word *[algorism](https://en.wikipedia.org/wiki/Algorism)* in English came to mean the use of place-value notation in calculations; it occurs in the *[Ancrene Wisse](https://en.wikipedia.org/wiki/Ancrene_Wisse)* from circa 1225. By the time [Geoffrey Chaucer](https://en.wikipedia.org/wiki/Geoffrey_Chaucer) wrote *[The Canterbury Tales](https://en.wikipedia.org/wiki/The_Canterbury_Tales)* in the late 14th century, he used a variant of the same word in describing *augrym stones*, stones used for place-value calculation. In the 15th century, under the influence of the Greek word ἀριθμός (*arithmos*, "number"; *cf.* "arithmetic"), the Latin word was altered to *algorithmus*. By 1596, this form of the word was used in English, as *algorithm*, by [Thomas Hood](https://en.wikipedia.org/wiki/Thomas_Hood_(mathematician)).

## Definition

One informal definition is "a set of rules that precisely defines a sequence of operations", which would include all [computer programs](https://en.wikipedia.org/wiki/Computer_program) (including programs that do not perform numeric calculations), and any prescribed [bureaucratic](https://en.wikipedia.org/wiki/Bureaucratic) procedure
or [cook-book](https://en.wikipedia.org/wiki/Cookbook) [recipe](https://en.wikipedia.org/wiki/Recipe). In general, a program is an algorithm only if it stops eventually—even though [infinite loops](https://en.wikipedia.org/wiki/Infinite_loop#Intentional_looping) may sometimes prove desirable. Boolos, Jeffrey & 1974, 1999 define an algorithm to be an explicit set of instructions for determining an output, that can be followed by a computing machine or a human who could only carry out specific elementary operations on symbols*.*

## History

### Ancient algorithms

Step-by-step procedures for solving mathematical problems have been recorded since antiquity. This includes in [Babylonian mathematics](https://en.wikipedia.org/wiki/Babylonian_mathematics) (around 2500 BC), [Egyptian mathematics](https://en.wikipedia.org/wiki/Egyptian_mathematics) (around 1550 BC), [Indian mathematics](https://en.wikipedia.org/wiki/Indian_mathematics) (around 800 BC and later), the Ifa Oracle (around 500 BC), [Greek mathematics](https://en.wikipedia.org/wiki/Greek_mathematics) (around 240 BC), [Chinese mathematics (around 200 BC and later)](https://en.wikipedia.org/wiki/Chinese_mathematics), and [Arabic mathematics](https://en.wikipedia.org/wiki/Arabic_mathematics) (around 800 AD).

The earliest evidence of algorithms is found in ancient [Mesopotamian](https://en.wikipedia.org/wiki/Mesopotamia) mathematics. A [Sumerian](https://en.wikipedia.org/wiki/Sumer) clay tablet found in [Shuruppak](https://en.wikipedia.org/wiki/Shuruppak) near [Baghdad](https://en.wikipedia.org/wiki/Baghdad) and dated to c. 2500 BC describes the earliest [division algorithm](https://en.wikipedia.org/wiki/Division_algorithm). During the [Hammurabi dynasty](https://en.wikipedia.org/wiki/First_Babylonian_dynasty) c. 1800 – c. 1600 BC, [Babylonian](https://en.wikipedia.org/wiki/Babylonia) clay tablets described algorithms for computing formulas. Algorithms were also used in [Babylonian astronomy](https://en.wikipedia.org/wiki/Babylonian_astronomy). Babylonian clay tablets describe and employ algorithmic procedures to compute the time and place of significant astronomical events.

Algorithms for arithmetic are also found in ancient [Egyptian mathematics](https://en.wikipedia.org/wiki/Egyptian_mathematics), dating back to the [Rhind Mathematical Papyrus](https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus) c. 1550 BC. Algorithms were later used in ancient [Hellenistic mathematics](https://en.wikipedia.org/wiki/Hellenistic_mathematics). Two examples are the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes), which was described in the *[Introduction to Arithmetic](https://en.wikipedia.org/wiki/Introduction_to_Arithmetic)* by [Nicomachus](https://en.wikipedia.org/wiki/Nicomachus), and the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm), which was first described in *[Euclid's Elements](https://en.wikipedia.org/wiki/Euclid%27s_Elements)* (c. 300 BC).Examples of ancient Indian mathematics included the [Shulba Sutras](https://en.wikipedia.org/wiki/Shulba_Sutras), the [Kerala School](https://en.wikipedia.org/wiki/Kerala_school_of_astronomy_and_mathematics), and the [Brāhmasphuṭasiddhānta](https://en.wikipedia.org/wiki/Br%C4%81hmasphu%E1%B9%ADasiddh%C4%81nta).

In the 9th century, [Muḥammad ibn Mūsā al-Khwārizmī](https://en.wikipedia.org/wiki/Mu%E1%B8%A5ammad_ibn_M%C5%ABs%C4%81_al-Khw%C4%81rizm%C4%AB) revolutionized the field by establishing the algorithm as a systematic, finite sequence of logical steps to solve mathematical problems. In his influential work, [The Compendious Book on Calculation by Completion and Balancing](https://en.wikipedia.org/wiki/The_Compendious_Book_on_Calculation_by_Completion_and_Balancing), he moved beyond specific numerical solutions to introduce general procedures for algebraic reduction and balancing. This transformed mathematics into a 'mechanical' process of well-defined rules—a fundamental shift that laid the groundwork for modern algorithmic theory. The Latin translation of his arithmetic treatise, titled Algoritmi de numero Indorum, led to the term algorithm being derived from the Latinization of his name, Algoritmi, specifically to describe this new rule-based approach to .

The first cryptographic algorithm for deciphering encrypted code was developed by [Al-Kindi](https://en.wikipedia.org/wiki/Al-Kindi), a 9th-century Arab mathematician, in *A Manuscript On Deciphering Cryptographic Messages*. He gave the first description of [cryptanalysis](https://en.wikipedia.org/wiki/Cryptanalysis) by [frequency analysis](https://en.wikipedia.org/wiki/Frequency_analysis), the earliest codebreaking algorithm.

### Computers

#### Weight-driven clocks

[David Bolter](https://en.wikipedia.org/w/index.php?title=David_Bolter&action=edit&redlink=1) credits the invention of the weight-driven clock as "the key invention [of [Europe in the Middle Ages](https://en.wikipedia.org/wiki/Europe_in_the_middle_ages)]," specifically the [verge escapement](https://en.wikipedia.org/wiki/Verge_escapement) mechanism producing the tick and tock of a mechanical clock. "The accurate automatic machine" led immediately to "mechanical [automata](https://en.wikipedia.org/wiki/Automata_theory)" in the 13th century and "computational machines"—the [difference](https://en.wikipedia.org/wiki/Difference_engine) and [analytical engines](https://en.wikipedia.org/wiki/Analytical_engine) of [Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage) and [Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace) in the mid-19th century. Lovelace designed the first algorithm intended for processing on a computer, Babbage's analytical engine, which is the first device considered a real [Turing-complete](https://en.wikipedia.org/wiki/Turing-complete) computer instead of just a [calculator](https://en.wikipedia.org/wiki/Calculator). Although the full implementation of Babbage's second device was not realized for decades after her lifetime, Lovelace has been called "history's first programmer".

#### Electromechanical relay

Bell and Newell (1971) write that the [Jacquard loom](https://en.wikipedia.org/wiki/Jacquard_loom), a precursor to [Hollerith cards](https://en.wikipedia.org/wiki/Hollerith_card) (punch cards), and "telephone switching technologies" led to the development of the first computers. By the mid-19th century, the [telegraph](https://en.wikipedia.org/wiki/Telegraph), the precursor of the telephone, was in use throughout the world. By the late 19th century, the [ticker tape](https://en.wikipedia.org/wiki/Ticker_tape) (c. 1870s) was in use, as were Hollerith cards (c. 1890). Then came the [teleprinter](https://en.wikipedia.org/wiki/Teleprinter) (c. 1910) with its punched-paper use of [Baudot code](https://en.wikipedia.org/wiki/Baudot_code) on tape.

Telephone-switching networks of [electromechanical relays](https://en.wikipedia.org/wiki/Relays) were invented in 1835. These led to the invention of the digital adding device by [George Stibitz](https://en.wikipedia.org/wiki/George_Stibitz) in 1937. While working in Bell Laboratories, he observed the "burdensome" use of mechanical calculators with gears. "He went home one evening in 1937 intending to test his idea... When the tinkering was over, Stibitz had constructed a binary adding device".

### Formalization

[Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace)

's diagram from "

[Note G](https://en.wikipedia.org/wiki/Note_G)

", the first published computer algorithm

In 1928, a partial formalization of the modern concept of algorithms began with attempts to solve the *[Entscheidungsproblem](https://en.wikipedia.org/wiki/Entscheidungsproblem)*(decision problem) posed by [David Hilbert](https://en.wikipedia.org/wiki/David_Hilbert). Later formalizations were framed as attempts to define "[effective calculability](https://en.wikipedia.org/wiki/Effective_calculability)" or "effective method". Those formalizations included the [Gödel](https://en.wikipedia.org/wiki/Kurt_G%C3%B6del)–[Herbrand](https://en.wikipedia.org/wiki/Jacques_Herbrand)–[Kleene](https://en.wikipedia.org/wiki/Stephen_Cole_Kleene) recursive functions of 1930, 1934 and 1935, [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church)'s [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus) of 1936, [Emil Post](https://en.wikipedia.org/wiki/Emil_Post)'s [Formulation 1](https://en.wikipedia.org/wiki/Formulation_1) of 1936, and [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing)'s [Turing machines](https://en.wikipedia.org/wiki/Turing_machines) of 1936–37 and 1939.

### Modern Algorithms

Algorithms have evolved and improved in many ways as time goes on. Common uses of algorithms today include social media apps like [Instagram](https://en.wikipedia.org/wiki/Instagram) and [YouTube](https://en.wikipedia.org/wiki/YouTube). Algorithms are used as a way to analyze what people like and push more of those things to the people who interact with them. Quantum computing uses [quantum algorithm procedures](https://en.wikipedia.org/wiki/Quantum_algorithm) to solve problems faster. More recently, in 2024, NIST updated their post-quantum encryption standards, which includes new [encryption](https://en.wikipedia.org/wiki/Encryption) algorithms to enhance defenses against attacks using quantum computing.

## Representations

Algorithms can be expressed in many kinds of notation, including [natural languages](https://en.wikipedia.org/wiki/Natural_languages), [pseudocode](https://en.wikipedia.org/wiki/Pseudocode), [flowcharts](https://en.wikipedia.org/wiki/Flowchart), [drakon-charts](https://en.wikipedia.org/wiki/DRAKON), [programming languages](https://en.wikipedia.org/wiki/Programming_languages) or [control tables](https://en.wikipedia.org/wiki/Control_table) (processed by [interpreters](https://en.wikipedia.org/wiki/Interpreter_(computing))). Natural language expressions of algorithms tend to be verbose and ambiguous and are rarely used for complex or technical algorithms. Pseudocode, flowcharts, drakon-charts, and control tables are structured expressions of algorithms that avoid common ambiguities of natural language. Programming languages are primarily for expressing algorithms in a computer-executable form but are also used to define or document algorithms.

### Turing machines

There are many possible representations and [Turing machine](https://en.wikipedia.org/wiki/Turing_machine) programs can be expressed as a sequence of machine tables (see [finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine), [state-transition table](https://en.wikipedia.org/wiki/State-transition_table), and [control table](https://en.wikipedia.org/wiki/Control_table) for more), as flowcharts and drakon-charts (see [state diagram](https://en.wikipedia.org/wiki/State_diagram) for more), as a form of rudimentary [machine code](https://en.wikipedia.org/wiki/Machine_code) or [assembly code](https://en.wikipedia.org/wiki/Assembly_code) called "sets of quadruples", and more. Algorithm representations can also be classified into three accepted levels of Turing machine description: high-level description, implementation description, and formal description. A high-level description describes the qualities of the algorithm itself, ignoring how it is implemented on the Turing machine. An implementation description describes the general manner in which the machine moves its head and stores data to carry out the algorithm, but does not give exact states. In the most detail, a formal description gives the exact state table and list of transitions of the Turing machine.

### Flowchart representation

The graphical aid called a [flowchart](https://en.wikipedia.org/wiki/Flowchart) offers a way to describe and document an algorithm (and a computer program corresponding to it). It has four primary symbols: arrows showing program flow, rectangles (SEQUENCE, GOTO), diamonds (IF-THEN-ELSE), and dots (OR-tie). Sub-structures can "nest" in rectangles, but only if a single exit occurs from the superstructure.

## Algorithmic analysis

It is often important to know how much time, storage, or other cost an algorithm may require. Methods have been developed for the analysis of algorithms to obtain such quantitative answers (estimates); for example, an algorithm that adds up the elements of a list of *n* numbers would have a time requirement of ⁠

O
(
n
)

{\displaystyle O(n)}

⁠, using [big O notation](https://en.wikipedia.org/wiki/Big_O_notation). The algorithm only needs to remember two values: the sum of all the elements so far, and its current position in the input list. If the space required to store the input numbers is not counted, it has a space requirement of ⁠

O
(
1
)

{\displaystyle O(1)}

⁠, otherwise ⁠

O
(
n
)

{\displaystyle O(n)}

⁠ is required.

Different algorithms may complete the same task with a different set of instructions in less or more time, space, or '[effort](https://en.wikipedia.org/wiki/Algorithmic_efficiency)' than others. For example, a [binary search](https://en.wikipedia.org/wiki/Binary_search) algorithm (with cost ⁠

O
(
log
⁡ ⁡ 
n
)

{\displaystyle O(\log n)}

⁠) outperforms a sequential search (cost ⁠

O
(
n
)

{\displaystyle O(n)}

⁠ ) when used for [table lookups](https://en.wikipedia.org/wiki/Lookup_table) on sorted lists or arrays.

### Formal versus empirical

The [analysis, and study of algorithms](https://en.wikipedia.org/wiki/Analysis_of_algorithms) is a discipline of [computer science](https://en.wikipedia.org/wiki/Computer_science). Algorithms are often studied abstractly, without referencing any specific [programming language](https://en.wikipedia.org/wiki/Programming_language) or implementation. Algorithm analysis resembles other mathematical disciplines as it focuses on the algorithm's properties, not implementation. [Pseudocode](https://en.wikipedia.org/wiki/Pseudocode) is typical for analysis as it is a simple and general representation. Most algorithms are implemented on particular hardware/software platforms and their [algorithmic efficiency](https://en.wikipedia.org/wiki/Algorithmic_efficiency) is tested using real code. The efficiency of a particular algorithm may be insignificant for many "one-off" problems but it may be critical for algorithms designed for fast interactive, commercial, or long-life scientific usage. Scaling from small n to large n frequently exposes inefficient algorithms that are otherwise benign.

Empirical testing is useful for uncovering unexpected interactions that affect performance. [Benchmarks](https://en.wikipedia.org/wiki/Benchmark_(computing)) may be used to compare before/after potential improvements to an algorithm after program optimization.
Empirical tests cannot replace formal analysis, though, and are non-trivial to perform fairly.

### Execution efficiency

To illustrate the potential improvements possible even in well-established algorithms, a recent significant innovation, relating to [FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform) algorithms (used heavily in the field of image processing), can decrease processing time up to 1,000 times for applications like medical imaging. In general, speed improvements depend on special properties of the problem, which are very common in practical applications. Speedups of this magnitude enable computing devices that make extensive use of image processing (like digital cameras and medical equipment) to consume less power.

### Best Case and Worst Case

The best case of an algorithm refers to the scenario or input for which the algorithm or data structure takes the least time and resources to complete its tasks.  The worst case of an algorithm is the case that causes the algorithm or data structure to consume the maximum period of time and computational resources.

## Design

Algorithm design is a method or mathematical process for problem-solving and engineering algorithms. The design of algorithms is part of many solution theories, such as [divide-and-conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) or [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) within [operation research](https://en.wikipedia.org/wiki/Operation_research). Techniques for designing and implementing algorithm designs are also called algorithm design patterns, with examples including the template method pattern and the decorator pattern. One of the most important aspects of algorithm design is resource (run-time, memory usage) efficiency; the [big O notation](https://en.wikipedia.org/wiki/Big_O_notation) is used to describe e.g., an algorithm's run-time growth as the size of its input increases.

### Structured programming

Per the [Church–Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis), any algorithm can be computed by any [Turing complete](https://en.wikipedia.org/wiki/Turing_complete) model. Turing completeness only requires four instruction types—conditional GOTO, unconditional GOTO, assignment, HALT. However, Kemeny and Kurtz observe that, while "undisciplined" use of unconditional GOTOs and conditional IF-THEN GOTOs can result in "[spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code)", a programmer can write structured programs using only these instructions; on the other hand "it is also possible, and not too hard, to write badly structured programs in a structured language". Tausworthe augments the three [Böhm-Jacopini canonical structures](https://en.wikipedia.org/wiki/Structured_program_theorem): SEQUENCE, IF-THEN-ELSE, and WHILE-DO, with two more: DO-WHILE and CASE. An additional benefit of a structured program is that it lends itself to [proofs of correctness](https://en.wikipedia.org/wiki/Proof_of_correctness) using [mathematical induction](https://en.wikipedia.org/wiki/Mathematical_induction).

## Legal status

By themselves, algorithms are not usually patentable. In the United States, a claim consisting solely of simple manipulations of abstract concepts, numbers, or signals does not constitute "processes" (USPTO 2006), so algorithms are not patentable (as in *[Gottschalk v. Benson](https://en.wikipedia.org/wiki/Gottschalk_v._Benson)*). However practical applications of algorithms are sometimes patentable. For example, in *[Diamond v. Diehr](https://en.wikipedia.org/wiki/Diamond_v._Diehr)*, the application of a simple [feedback](https://en.wikipedia.org/wiki/Feedback) algorithm to aid in the curing of [synthetic rubber](https://en.wikipedia.org/wiki/Synthetic_rubber) was deemed patentable. The [patenting of software](https://en.wikipedia.org/wiki/Software_patent_debate) is controversial, and there are criticized patents involving algorithms, especially [data compression](https://en.wikipedia.org/wiki/Data_compression) algorithms, such as [Unisys](https://en.wikipedia.org/wiki/Unisys)'s [LZW patent](https://en.wikipedia.org/wiki/Graphics_Interchange_Format#Unisys_and_LZW_patent_enforcement). Additionally, some cryptographic algorithms have export restrictions (see [export of cryptography](https://en.wikipedia.org/wiki/Export_of_cryptography)).

## Classification

### By implementation

**Recursion**
: A [recursive algorithm](https://en.wikipedia.org/wiki/Recursive_algorithm) invokes itself repeatedly until meeting a termination condition and is a common [functional programming](https://en.wikipedia.org/wiki/Functional_programming) method. [Iterative](https://en.wikipedia.org/wiki/Iteration) algorithms use repetitions such as [loops](https://en.wikipedia.org/wiki/Program_loops) or data structures like [stacks](https://en.wikipedia.org/wiki/Stack_(data_structure)) to solve problems. Problems may be suited for one implementation or the other. The [Tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a puzzle commonly solved using recursive implementation. Every recursive version has an equivalent (but possibly more or less complex) iterative version, and vice versa.

**Serial, parallel or distributed**
: Algorithms are usually discussed with the assumption that computers execute one instruction of an algorithm at a time on serial computers. Serial algorithms are designed for these environments, unlike [parallel](https://en.wikipedia.org/wiki/Parallel_algorithm) or [distributed](https://en.wikipedia.org/wiki/Distributed_algorithm) algorithms. Parallel algorithms take advantage of computer architectures where multiple processors can work on a problem at the same time. Distributed algorithms use multiple machines connected via a computer network. Parallel and distributed algorithms divide the problem into subproblems and collect the results back together. Resource consumption in these algorithms is not only processor cycles on each processor but also the communication overhead between the processors. Some sorting algorithms can be parallelized efficiently, but their communication overhead is expensive. Iterative algorithms are generally parallelizable, but some problems have no parallel algorithms and are called inherently serial problems.

**Deterministic or non-deterministic**
: [Deterministic algorithms](https://en.wikipedia.org/wiki/Deterministic_algorithm) solve the problem with exact decisions at every step; whereas [non-deterministic algorithms](https://en.wikipedia.org/wiki/Non-deterministic_algorithm) solve problems via guessing. Guesses are typically made more accurate through the use of [heuristics](https://en.wikipedia.org/wiki/Heuristics).

**Exact or approximate**
: While many algorithms reach an exact solution, [approximation algorithms](https://en.wikipedia.org/wiki/Approximation_algorithm) seek an approximation that is close to the true solution. Such algorithms have practical value for many hard problems. For example, the [Knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem), where there is a set of items, and the goal is to pack the knapsack to get the maximum total value. Each item has some weight and some value. The total weight that can be carried is no more than some fixed number X. So, the solution must consider the weights of items as well as their value.

**Quantum algorithm**
: [Quantum algorithms](https://en.wikipedia.org/wiki/Quantum_algorithm) run on a realistic model of [quantum computation](https://en.wikipedia.org/wiki/Quantum_computation). The term is usually used for those algorithms that seem inherently quantum or use some essential feature of [Quantum computing](https://en.wikipedia.org/wiki/Quantum_computing) such as [quantum superposition](https://en.wikipedia.org/wiki/Quantum_superposition) or [quantum entanglement](https://en.wikipedia.org/wiki/Quantum_entanglement).

### By design paradigm

Another way of classifying algorithms is by their design methodology or [paradigm](https://en.wikipedia.org/wiki/Algorithmic_paradigm). Some common paradigms are:

**Brute-forceor exhaustive search**
: Brute force is a problem-solving method of systematically trying every possible option until the optimal solution is found. This approach can be very time-consuming, testing every possible combination of variables. It is often used when other methods are unavailable or too complex. Brute force can solve a variety of problems, including finding the shortest path between two points and cracking passwords.

**Divide and conquer**
: A [divide-and-conquer algorithm](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) repeatedly reduces a problem to one or more smaller instances of itself (usually [recursively](https://en.wikipedia.org/wiki/Recursion)) until the instances are small enough to solve easily. [Merge sorting](https://en.wikipedia.org/wiki/Mergesort) is an example of divide and conquer, where an unordered list is repeatedly split into smaller lists, which are sorted in the same way and then merged. In a simpler variant of divide and conquer called [prune and search](https://en.wikipedia.org/wiki/Prune_and_search) or *decrease-and-conquer algorithm*, which solves one smaller instance of itself, and does not require a merge step. An example of a prune and search algorithm is the [binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm).

**Search and enumeration**
: Many problems (such as playing [chess](https://en.wikipedia.org/wiki/Chess)) can be modelled as problems on [graphs](https://en.wikipedia.org/wiki/Graph_theory). A [graph exploration algorithm](https://en.wikipedia.org/wiki/Graph_exploration_algorithm) specifies rules for moving around a graph and is useful for such problems. This category also includes [search algorithms](https://en.wikipedia.org/wiki/Search_algorithm), [branch and bound](https://en.wikipedia.org/wiki/Branch_and_bound) enumeration, and [backtracking](https://en.wikipedia.org/wiki/Backtracking).

**Randomized algorithm**
: Such algorithms make some choices randomly (or pseudo-randomly). They find approximate solutions when finding exact solutions may be impractical (see heuristic method below). For some problems, the fastest approximations must involve some [randomness](https://en.wikipedia.org/wiki/Randomness). Whether randomized algorithms with [polynomial time complexity](https://en.wikipedia.org/wiki/P_(complexity)) can be the fastest algorithm for some problems is an open question known as the [P versus NP problem](https://en.wikipedia.org/wiki/P_versus_NP_problem). There are two large classes of such algorithms:

1. [Monte Carlo algorithms](https://en.wikipedia.org/wiki/Monte_Carlo_algorithm) return a correct answer with high probability. E.g. [RP](https://en.wikipedia.org/wiki/RP_(complexity)) is the subclass of these that run in [polynomial time](https://en.wikipedia.org/wiki/Polynomial_time).
2. [Las Vegas algorithms](https://en.wikipedia.org/wiki/Las_Vegas_algorithm) always return the correct answer, but their running time is only probabilistically bound, e.g. [ZPP](https://en.wikipedia.org/wiki/Zero-error_Probabilistic_Polynomial_time).

**Reduction of complexity**
: This technique transforms difficult problems into better-known problems solvable with (hopefully) [asymptotically optimal](https://en.wikipedia.org/wiki/Asymptotically_optimal) algorithms. The goal is to find a reducing algorithm whose [complexity](https://en.wikipedia.org/wiki/Computational_complexity_theory) is not dominated by the resulting reduced algorithms. For example, one [selection algorithm](https://en.wikipedia.org/wiki/Selection_algorithm) finds the median of an unsorted list by first sorting the list (the expensive portion), and then pulling out the middle element in the sorted list (the cheap portion). This technique is also known as *[transform and conquer](https://en.wikipedia.org/wiki/Transform_and_conquer_algorithm)*.

**Back tracking**
: In this approach, multiple solutions are built incrementally and abandoned when it is determined that they cannot lead to a valid full solution.

### Optimization problems

For [optimization problems](https://en.wikipedia.org/wiki/Optimization_problem) there is a more specific classification of algorithms; an algorithm for such problems may fall into one or more of the general categories described above as well as into one of the following:

**Linear programming**
: When searching for optimal solutions to a linear function bound by linear equality and inequality constraints, the constraints can be used directly to produce optimal solutions. There are algorithms that can solve any problem in this category, such as the popular [simplex algorithm](https://en.wikipedia.org/wiki/Simplex_algorithm). Problems that can be solved with linear programming include the [maximum flow problem](https://en.wikipedia.org/wiki/Maximum_flow_problem) for directed graphs. If a problem also requires that any of the unknowns be [integers](https://en.wikipedia.org/wiki/Integer), then it is classified in [integer programming](https://en.wikipedia.org/wiki/Integer_programming). A linear programming algorithm can solve such a problem if it can be proved that all restrictions for integer values are superficial, i.e., the solutions satisfy these restrictions anyway. In the general case, a specialized algorithm or an algorithm that finds approximate solutions is used, depending on the difficulty of the problem.

**Dynamic programming**
: When a problem shows optimal substructures—meaning the optimal solution can be constructed from optimal solutions to subproblems—and [overlapping subproblems](https://en.wikipedia.org/wiki/Overlapping_subproblem), meaning the same subproblems are used to solve many different problem instances, a quicker approach called *dynamic programming* avoids recomputing solutions. For example, [Floyd–Warshall algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm), the shortest path between a start and goal vertex in a weighted [graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) can be found using the shortest path to the goal from all adjacent vertices. Dynamic programming and [memoization](https://en.wikipedia.org/wiki/Memoization) go together. Unlike divide and conquer, dynamic programming subproblems often overlap. The difference between dynamic programming and simple recursion is the caching or memoization of recursive calls. When subproblems are independent and do not repeat, memoization does not help; hence dynamic programming is not applicable to all complex problems. Using memoization dynamic programming reduces the complexity of many problems from exponential to polynomial.

**The greedy method**
: [Greedy algorithms](https://en.wikipedia.org/wiki/Greedy_algorithm), similarly to a dynamic programming, work by examining substructures, in this case not of the problem but of a given solution. Such algorithms start with some solution and improve it by making small modifications. For some problems, they always find the optimal solution but for others they may stop at [local optima](https://en.wikipedia.org/wiki/Local_optimum). The most popular use of greedy algorithms is finding minimal spanning trees of graphs without negative cycles. [Huffman Tree](https://en.wikipedia.org/wiki/Huffman_coding), [Kruskal](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm), [Prim](https://en.wikipedia.org/wiki/Prim%27s_algorithm), [Sollin](https://en.wikipedia.org/wiki/Sollin%27s_algorithm) are greedy algorithms that can solve this optimization problem.

**The heuristic method**
: In [optimization problems](https://en.wikipedia.org/wiki/Optimization_problem), [heuristic algorithms](https://en.wikipedia.org/wiki/Heuristic_algorithm) find solutions close to the optimal solution when finding the optimal solution is impractical. These algorithms get closer and closer to the optimal solution as they progress. In principle, if run for an infinite amount of time, they will find the optimal solution. They can ideally find a solution very close to the optimal solution in a relatively short time. These algorithms include [local search](https://en.wikipedia.org/wiki/Local_search_(optimization)), [tabu search](https://en.wikipedia.org/wiki/Tabu_search), [simulated annealing](https://en.wikipedia.org/wiki/Simulated_annealing), and [genetic algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm). Some, like simulated annealing, are non-deterministic algorithms while others, like tabu search, are deterministic. When a bound on the error of the non-optimal solution is known, the algorithm is further categorized as an [approximation algorithm](https://en.wikipedia.org/wiki/Approximation_algorithm).

## Examples

One of the simplest algorithms finds the largest number in a list of numbers of random order. Finding the solution requires looking at every number in the list. From this follows a simple algorithm, which can be described in plain English as:

*High-level description:*

1. If a set of numbers is empty, then there is no highest number.
2. Assume the first number in the set is the largest.
3. For each remaining number in the set: if this number is greater than the current largest, it becomes the new largest.
4. When there are no unchecked numbers left in the set, consider the current largest number to be the largest in the set.

*(Quasi-)formal description:*
Written in prose but much closer to the high-level language of a computer program, the following is the more formal coding of the algorithm in [pseudocode](https://en.wikipedia.org/wiki/Pseudocode) or [pidgin code](https://en.wikipedia.org/wiki/Pidgin_code):

```
Algorithm LargestNumber
Input: A list of numbers L.
Output: The largest number in the list L.
```

```
if L.size = 0 return null
largest ← L[0]
for each item in L, do
    if item > largest, then
        largest ← item
return largest
```

* "←" denotes [assignment](https://en.wikipedia.org/wiki/Assignment_(computer_science)).  For instance, "*largest* ← *item*" means that the value of *largest* changes to the value of *item*.
* "**return**" terminates the algorithm and outputs the following value.

## See also

* [Abstract machine](https://en.wikipedia.org/wiki/Abstract_machine)
* [ALGOL](https://en.wikipedia.org/wiki/ALGOL)
* [Algorithm = Logic + Control](https://en.wikipedia.org/wiki/Logic_programming#Algorithm_=_Logic_+_Control)
* [Algorithm aversion](https://en.wikipedia.org/wiki/Algorithm_aversion)
* [Algorithm engineering](https://en.wikipedia.org/wiki/Algorithm_engineering)
* [Algorithm characterizations](https://en.wikipedia.org/wiki/Algorithm_characterizations)
* [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias)
* [Algorithmic composition](https://en.wikipedia.org/wiki/Algorithmic_composition)
* [Algorithmic entities](https://en.wikipedia.org/wiki/Algorithmic_entities)
* [Algorithmic synthesis](https://en.wikipedia.org/wiki/Algorithmic_synthesis)
* [Algorithmic technique](https://en.wikipedia.org/wiki/Algorithmic_technique)
* [Algorithmic topology](https://en.wikipedia.org/wiki/Algorithmic_topology)
* [Computational mathematics](https://en.wikipedia.org/wiki/Computational_mathematics)
* [Garbage in, garbage out](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out)
* *[Introduction to Algorithms](https://en.wikipedia.org/wiki/Introduction_to_Algorithms)* (textbook)
* [Government by algorithm](https://en.wikipedia.org/wiki/Government_by_algorithm)
* [List of algorithms](https://en.wikipedia.org/wiki/List_of_algorithms)
* [List of algorithm books](https://en.wikipedia.org/wiki/List_of_computer_books#Algorithms)
* [List of algorithm general topics](https://en.wikipedia.org/wiki/List_of_algorithm_general_topics)
* [Medium is the message](https://en.wikipedia.org/wiki/Medium_is_the_message)
* [Regulation of algorithms](https://en.wikipedia.org/wiki/Regulation_of_algorithms)
* [Theory of computation](https://en.wikipedia.org/wiki/Theory_of_computation)

    * [Computability theory](https://en.wikipedia.org/wiki/Computability_theory)
    * [Computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory)

## Notes

1. ^   ["Definition of ALGORITHM"](https://www.merriam-webster.com/dictionary/algorithm). *Merriam-Webster Online Dictionary*. [Archived](https://web.archive.org/web/20200214074446/https://www.merriam-webster.com/dictionary/algorithm) from the original on February 14, 2020. Retrieved November 14, 2019.
2. ^   David A. Grossman, Ophir Frieder, *Information Retrieval: Algorithms and Heuristics*, 2nd edition, 2004, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1402030045](https://en.wikipedia.org/wiki/Special:BookSources/1402030045)
3. **^** "Any classical mathematical algorithm, for example, can be described in a finite number of English words" (Rogers 1987:2).
4. **^** Well defined concerning the agent that executes the algorithm: "There is a computing agent, usually human, which can react to the instructions and carry out the computations" (Rogers 1987:2).
5. **^** "an algorithm is a procedure for computing a *function* (concerning some chosen notation for integers) ... this limitation (to numerical functions) results in no loss of generality", (Rogers 1977:1).
6. **^** "An algorithm has [zero](https://en.wikipedia.org/wiki/Zero) or more inputs, i.e., [quantities](https://en.wikipedia.org/wiki/Quantity) which are given to it initially before the algorithm begins" (Knuth 1973:5).
7. **^** "A procedure which has all the characteristics of an algorithm except that it possibly lacks finiteness may be called a 'computational method'" (Knuth 1971:5).
8. **^** "An algorithm has one or more outputs, i.e., quantities which have a specified relation to the inputs" (Knuth 1973:5).
9. **^** Whether or not a process with random interior processes (not including the input) is an algorithm is debatable. Rogers opines that: "a computation is carried out in a discrete stepwise fashion, without the use of continuous methods or analog devices ... carried forward deterministically, without resort to random methods or devices, e.g., dice" (Rogers 1987:2).
10. **^** Blair, Ann, Duguid, Paul, Goeing, Anja-Silvia and Grafton, Anthony. Information: A Historical Companion, Princeton: Princeton University Press, 2021. p. 247
11. **^** ["algorism"](https://www.oed.com/dictionary/algorism_n?tl=true). *Oxford English Dictionary*. Retrieved May 18, 2025.
12. **^** Chaucer, Geoffrey. ["The Miller's Tale"](https://chaucer.fas.harvard.edu/pages/millers-prologue-and-tale). Line 3210.
13. **^** Skeat, Walter William (1914). ["agrim, agrum"](https://books.google.com/books?id=z58YAAAAIAAJ&pg=PA5). In Mayhew, Anthony Lawson (ed.). *A Glossary of Tudor and Stuart Words: Especially from the Dramatists*. Clarendon Press. pp. 5–6.
14. **^** [Grabiner, Judith V.](https://en.wikipedia.org/wiki/Judith_Grabiner) (December 2013). "The role of mathematics in liberal arts education". In Matthews, Michael R. (ed.). *International Handbook of Research in History, Philosophy and Science Teaching*. Springer. pp. 793–836. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-94-007-7654-8_25](https://doi.org/10.1007%2F978-94-007-7654-8_25). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9789400776548](https://en.wikipedia.org/wiki/Special:BookSources/9789400776548).
15. **^** ["algorithm"](https://www.oed.com/dictionary/algorithm_n). *Oxford English Dictionary*. Retrieved May 18, 2025.
16. **^** Stone (1971), p. 8.
17. **^** 
[Simanowski, Roberto](https://en.wikipedia.org/wiki/Roberto_Simanowski) (2018). [*The Death Algorithm and Other Digital Dilemmas*](https://books.google.com/books?id=RJV5DwAAQBAJ). Untimely Meditations. Vol. 14. Translated by Chase, Jefferson. Cambridge, Massachusetts: MIT Press. p. 147. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780262536370](https://en.wikipedia.org/wiki/Special:BookSources/9780262536370). [Archived](https://web.archive.org/web/20191222120705/https://books.google.com/books?id=RJV5DwAAQBAJ) from the original on December 22, 2019. Retrieved May 27, 2019. [...] the next level of abstraction of central bureaucracy: globally operating algorithms.
18. **^** 
Dietrich, Eric (1999). "Algorithm". In Wilson, Robert Andrew; Keil, Frank C. (eds.). [*The MIT Encyclopedia of the Cognitive Sciences*](https://books.google.com/books?id=-wt1aZrGXLYC). MIT Cognet library. Cambridge, Massachusetts: MIT Press (published 2001). p. 11. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780262731447](https://en.wikipedia.org/wiki/Special:BookSources/9780262731447). Retrieved July 22, 2020. An algorithm is a recipe, method, or technique for doing something.
19. **^** Stone requires that "it must terminate in a finite number of steps" (Stone 1973:7–8).
20. **^** Boolos and Jeffrey 1974, 1999:19
21. ^     Chabert, Jean-Luc (2012). *A History of Algorithms: From the Pebble to the Microchip*. Springer Science & Business Media. pp. 7–8. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9783642181924](https://en.wikipedia.org/wiki/Special:BookSources/9783642181924).
22. ^   Sriram, M. S. (2005). ["Algorithms in Indian Mathematics"](https://books.google.com/books?id=qfJdDwAAQBAJ&pg=PA153). In Emch, Gerard G.; Sridharan, R.; Srinivas, M. D. (eds.). *Contributions to the History of Indian Mathematics*. Springer. p. 153. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-93-86279-25-5](https://en.wikipedia.org/wiki/Special:BookSources/978-93-86279-25-5).
23. **^** Hayashi, T. (2023, January 1). [Brahmagupta](https://www.britannica.com/biography/Brahmagupta). Encyclopedia Britannica.
24. **^** Zaslavsky, Claudia (1970). ["Mathematics of the Yoruba People and of Their Neighbors in Southern Nigeria"](https://www.jstor.org/stable/3027363). *The Two-Year College Mathematics Journal*. **1** (2): 76–99. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/3027363](https://doi.org/10.2307%2F3027363). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0049-4925](https://search.worldcat.org/issn/0049-4925). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [3027363](https://www.jstor.org/stable/3027363).
25. ^    Cooke, Roger L. (2005). *The History of Mathematics: A Brief Course*. John Wiley & Sons. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-118-46029-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-118-46029-0).
26. **^** Chabert, Jean-Luc, ed. (1999). [*A History of Algorithms*](https://link.springer.com/book/10.1007/978-3-642-18192-4). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-642-18192-4](https://doi.org/10.1007%2F978-3-642-18192-4). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-63369-3](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-63369-3).
27. ^   Dooley, John F. (2013). *A Brief History of Cryptology and Cryptographic Algorithms*. Springer Science & Business Media. pp. 12–3. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9783319016283](https://en.wikipedia.org/wiki/Special:BookSources/9783319016283).
28. **^** Knuth, Donald E. (1972). ["Ancient Babylonian Algorithms"](https://web.archive.org/web/20121224100137/http://steiner.math.nthu.edu.tw/disk5/js/computer/1.pdf) (PDF). *Commun. ACM*. **15** (7): 671–677. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/361454.361514](https://doi.org/10.1145%2F361454.361514). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0001-0782](https://search.worldcat.org/issn/0001-0782). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [7829945](https://api.semanticscholar.org/CorpusID:7829945). Archived from [the original](http://steiner.math.nthu.edu.tw/disk5/js/computer/1.pdf) (PDF) on December 24, 2012.
29. **^** [Aaboe, Asger](https://en.wikipedia.org/wiki/Asger_Aaboe) (2001). *Episodes from the Early History of Astronomy*. New York: Springer. pp. 40–62. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-387-95136-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-387-95136-2).
30. **^** Ast, Courtney. ["Eratosthenes"](http://www.math.wichita.edu/history/men/eratosthenes.html). Wichita State University: Department of Mathematics and Statistics. [Archived](https://web.archive.org/web/20150227150653/http://www.math.wichita.edu/history/men/eratosthenes.html) from the original on February 27, 2015. Retrieved February 27, 2015.
31. **^** Knuth, Donald E. (1996). *Selected Papers on Computer Science*. CSLI Publications. pp. 1–2. Al-Khwarizmi's work was the first to provide a systematic, rule-based approach to solving equations, which is why the word 'algorithm' was coined from his name to describe this methodical process.
32. **^** Bolter 1984:24
33. **^** Bolter 1984:26
34. **^** Bolter 1984:33–34, 204–206.
35. **^** Bell and Newell diagram 1971:39, cf. Davis 2000
36. **^** Melina Hill, Valley News Correspondent, *A Tinkerer Gets a Place in History*, Valley News West Lebanon NH, Thursday, March 31, 1983, p. 13.
37. **^** Davis 2000:14
38. **^** Kleene 1943 in Davis 1965:274
39. **^** Rosser 1939 in Davis 1965:225
40. ^     Sipser 2006:157
41. **^** [Kriegel, Hans-Peter](https://en.wikipedia.org/wiki/Hans-Peter_Kriegel); Schubert, Erich; [Zimek, Arthur](https://en.wikipedia.org/wiki/Arthur_Zimek) (2016). "The (black) art of run-time evaluation: Are we comparing algorithms or implementations?". *Knowledge and Information Systems*. **52** (2): 341–378. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s10115-016-1004-2](https://doi.org/10.1007%2Fs10115-016-1004-2). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0219-1377](https://search.worldcat.org/issn/0219-1377). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [40772241](https://api.semanticscholar.org/CorpusID:40772241).
42. **^** Gillian Conahan (January 2013). ["Better Math Makes Faster Data Networks"](http://discovermagazine.com/2013/jan-feb/34-better-math-makes-faster-data-networks). discovermagazine.com. [Archived](https://web.archive.org/web/20140513212427/http://discovermagazine.com/2013/jan-feb/34-better-math-makes-faster-data-networks) from the original on May 13, 2014. Retrieved May 13, 2014.
43. **^** Haitham Hassanieh, [Piotr Indyk](https://en.wikipedia.org/wiki/Piotr_Indyk), Dina Katabi, and Eric Price, "[ACM-SIAM Symposium On Discrete Algorithms (SODA)](http://siam.omnibooksonline.com/2012SODA/data/papers/500.pdf) [Archived](https://web.archive.org/web/20130704180806/http://siam.omnibooksonline.com/2012SODA/data/papers/500.pdf) July 4, 2013, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine), Kyoto, January 2012. See also the [sFFT Web Page](http://groups.csail.mit.edu/netmit/sFFT/) [Archived](https://web.archive.org/web/20120221145740/http://groups.csail.mit.edu/netmit/sFFT/) February 21, 2012, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine).
44. **^** ["Best Case"](https://xlinux.nist.gov/dads/HTML/bestcase.html). *Dictionary of Algorithms and Data Structures*. National Institute of Standards and Technology (NIST). National Institute of Standards and Technology. Retrieved May 29, 2025.
45. **^** ["worst case"](https://xlinux.nist.gov/dads/HTML/worstcase.html). *Dictionary of Algorithms and Data Structures*. National Institute of Standards and Technology (NIST). National Institute of Standards and Technology (NIST). Retrieved May 29, 2025.
46. **^** [Goodrich, Michael T.](https://en.wikipedia.org/wiki/Michael_T._Goodrich); [Tamassia, Roberto](https://en.wikipedia.org/wiki/Roberto_Tamassia) (2002). [*Algorithm Design: Foundations, Analysis, and Internet Examples*](http://ww3.algorithmdesign.net/ch00-front.html). John Wiley & Sons, Inc. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-471-38365-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-471-38365-9). [Archived](https://web.archive.org/web/20150428201622/http://ww3.algorithmdesign.net/ch00-front.html) from the original on April 28, 2015. Retrieved June 14, 2018.
47. **^** ["Big-O notation (article) | Algorithms"](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation). *Khan Academy*. Retrieved June 3, 2024.
48. **^** [John G. Kemeny](https://en.wikipedia.org/wiki/John_G._Kemeny) and [Thomas E. Kurtz](https://en.wikipedia.org/wiki/Thomas_E._Kurtz) 1985 *Back to Basic: The History, Corruption, and Future of the Language*, Addison-Wesley Publishing Company, Inc. Reading, MA, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-13433-0](https://en.wikipedia.org/wiki/Special:BookSources/0-201-13433-0).
49. **^** Tausworthe 1977:101
50. **^** Tausworthe 1977:142
51. **^** Knuth 1973 section 1.2.1, expanded by Tausworthe 1977 at pages 100ff and Chapter 9.1
52. **^** ["The Experts: Does the Patent System Encourage Innovation?"](https://www.wsj.com/articles/SB10001424127887323582904578487200821421958). *[The Wall Street Journal](https://en.wikipedia.org/wiki/The_Wall_Street_Journal)*. May 16, 2013. [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0099-9660](https://search.worldcat.org/issn/0099-9660). Retrieved March 29, 2017.
53. **^** Kellerer, Hans; Pferschy, Ulrich; Pisinger, David (2004). [*Knapsack Problems | Hans Kellerer | Springer*](https://www.springer.com/us/book/9783540402862). Springer. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-540-24777-7](https://doi.org/10.1007%2F978-3-540-24777-7). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-40286-2](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-40286-2). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [28836720](https://api.semanticscholar.org/CorpusID:28836720). [Archived](https://web.archive.org/web/20171018181055/https://www.springer.com/us/book/9783540402862) from the original on October 18, 2017. Retrieved September 19, 2017.
54. **^** Goodrich, Michael T.; Tamassia, Roberto (2001). "5.2 Divide and Conquer". *Algorithm Design: Foundations, Analysis, and Internet Examples*. John Wiley & Sons. p. 263. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780471383659](https://en.wikipedia.org/wiki/Special:BookSources/9780471383659).
55. **^** Goodrich & Tamassia (2001), p. 245, 4.7.1 Prune-and-search.
56. **^** For instance, the [volume](https://en.wikipedia.org/wiki/Volume) of a [convex polytope](https://en.wikipedia.org/wiki/Convex_polytope) (described using a membership oracle) can be approximated to high accuracy by a randomized polynomial time algorithm, but not by a deterministic one: see Dyer, Martin; Frieze, Alan; Kannan, Ravi (January 1991). "A Random Polynomial-time Algorithm for Approximating the Volume of Convex Bodies". *J. ACM*. **38** (1): 1–17. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.145.4600](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.145.4600). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/102782.102783](https://doi.org/10.1145%2F102782.102783). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [13268711](https://api.semanticscholar.org/CorpusID:13268711).
57. **^** 
[George B. Dantzig](https://en.wikipedia.org/wiki/George_B._Dantzig) and Mukund N. Thapa. 2003. *Linear Programming 2: Theory and Extensions*. Springer-Verlag.

## Bibliography

* Zaslavsky, C. (1970). Mathematics of the Yoruba People and of Their Neighbors in Southern Nigeria. The Two-Year College Mathematics Journal, 1(2), 76–99. [https://doi.org/10.2307/3027363](https://doi.org/10.2307/3027363)
* NIST Releases First 3 Finalized Post-Quantum Encryption Standards. [https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)

## Further reading

## External links

* ["Algorithm"](https://www.encyclopediaofmath.org/index.php?title=Algorithm). *[Encyclopedia of Mathematics](https://en.wikipedia.org/wiki/Encyclopedia_of_Mathematics)*. [EMS Press](https://en.wikipedia.org/wiki/European_Mathematical_Society). 2001 [1994].
* [Weisstein, Eric W.](https://en.wikipedia.org/wiki/Eric_W._Weisstein) ["Algorithm"](https://mathworld.wolfram.com/Algorithm.html). *[MathWorld](https://en.wikipedia.org/wiki/MathWorld)*.
* [Dictionary of Algorithms and Data Structures](https://www.nist.gov/dads/) – [National Institute of Standards and Technology](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology)

**Algorithm repositories**

* [The Stony Brook Algorithm Repository](http://www.cs.sunysb.edu/~algorith/) – [State University of New York at Stony Brook](https://en.wikipedia.org/wiki/State_University_of_New_York_at_Stony_Brook)
* [Collected Algorithms of the ACM](http://calgo.acm.org/) – [Associations for Computing Machinery](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery)
* [The Stanford GraphBase](http://www-cs-staff.stanford.edu/~knuth/sgb.html) [Archived](https://web.archive.org/web/20151206222112/http://www-cs-staff.stanford.edu/%7Eknuth/sgb.html) December 6, 2015, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) – [Stanford University](https://en.wikipedia.org/wiki/Stanford_University)
 
NewPP limit report
Parsed by mw‐web.codfw.main‐bf65cc95d‐nmhns
Cached time: 20260424002655
Cache expiry: 86400
Cache expiry source: Module:Portal (os.date(%k))
Reduced expiry: true
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.908 seconds
Real time usage: 1.101 seconds
Preprocessor visited node count: 5990/1000000
Revision size: 63983/2097152 bytes
Post‐expand include size: 210006/2097152 bytes
Template argument size: 3811/2097152 bytes
Highest expansion depth: 16/100
Expensive parser function count: 17/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 271864/5000000 bytes
Lua time usage: 0.574/10.000 seconds
Lua memory usage: 12073048/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  888.068      1 -total
 23.21%  206.159      1 Template:Reflist
 17.11%  151.909     43 Template:Cite_book
  9.86%   87.541      9 Template:Cite_web
  8.44%   74.951     17 Template:Cite_journal
  7.91%   70.242      4 Template:Navbox
  7.56%   67.104      4 Template:Sister_project
  7.55%   67.036      1 Template:Industrial_and_applied_mathematics
  7.42%   65.853      4 Template:Side_box
  5.41%   48.043      1 Template:Short_description
 Render ID 4c0ef32d-3f74-11f1-94e8-15edbebd0706  Saved in parser cache with key enwiki:pcache:775:|#|:idhash:canonical and timestamp 20260424002655 and revision id 1348265379. Rendering was triggered because: page_view