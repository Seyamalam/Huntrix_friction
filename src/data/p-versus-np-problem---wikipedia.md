# P versus NP problem - Wikipedia

Source: https://en.wikipedia.org/wiki/P_versus_NP_problem

---

Unsolved problem in computer science

Unsolved problem in computer science

If the solution to a problem can be checked in polynomial time, must the problem be solvable in polynomial time?

The **P versus NP problem** is a major [unsolved problem](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_computer_science) in [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science). Informally, it asks whether every problem whose solution can be quickly verified can also be quickly solved.

Here, "quickly" means an algorithm exists that solves the task and runs in [polynomial time](https://en.wikipedia.org/wiki/Polynomial_time) (as opposed to, say, [exponential time](https://en.wikipedia.org/wiki/Exponential_time)), meaning the task completion time is [bounded above](https://en.wikipedia.org/wiki/Upper_bound) by a [polynomial function](https://en.wikipedia.org/wiki/Polynomial_function) on the size of the input to the algorithm. The general class of questions that some [algorithm](https://en.wikipedia.org/wiki/Algorithm) can answer in polynomial time is "[P](https://en.wikipedia.org/wiki/P_(complexity))" or "class P". For some questions, there is no known way to find an answer quickly, but if provided with an answer, it can be verified quickly. The class of questions where an answer can be *verified* in polynomial time is "[NP](https://en.wikipedia.org/wiki/NP_(complexity))", standing for "nondeterministic polynomial time".

An answer to the P versus NP question would determine whether problems that can be verified in polynomial time can also be solved in polynomial time. If P ≠ NP, which is widely believed, it would mean that there are problems in NP that are harder to compute than to verify: they could not be solved in polynomial time, but the answer could be verified in polynomial time.

The problem has been called the most important open problem in [computer science](https://en.wikipedia.org/wiki/Computer_science). Aside from being an important problem in [computational theory](https://en.wikipedia.org/wiki/Computational_theory), a proof either way would have profound implications for mathematics, [cryptography](https://en.wikipedia.org/wiki/Cryptography), algorithm research, [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence), [game theory](https://en.wikipedia.org/wiki/Game_theory), multimedia processing, [philosophy](https://en.wikipedia.org/wiki/Philosophy), [economics](https://en.wikipedia.org/wiki/Economics) and many other fields. It is one of the seven [Millennium Prize Problems](https://en.wikipedia.org/wiki/Millennium_Prize_Problems) selected by the [Clay Mathematics Institute](https://en.wikipedia.org/wiki/Clay_Mathematics_Institute), each of which carries a US$1,000,000 prize for the first correct solution.

Consider the following yes/no problem: given an incomplete [Sudoku](https://en.wikipedia.org/wiki/Sudoku) grid of size 




n

2
×

n

2
{\displaystyle n^{2}\times n^{2}}
![{\displaystyle n^{2}\times n^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/23a9da3797e80cd70ac633eb47e5497f1770d096), is there at least one legal solution where every row, column, and 



n
×
n
{\displaystyle n\times n}
![{\displaystyle n\times n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/59d2b4cb72e304526cf5b5887147729ea259da78) square contains the integers 1 through 




n

2
{\displaystyle n^{2}}
![{\displaystyle n^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620)? It is straightforward to verify "yes" instances of this generalized Sudoku problem given a candidate solution. However, it is not known whether there is a polynomial-time algorithm that can correctly answer "yes" or "no" to all instances of this problem. Therefore, generalized Sudoku is in NP (quickly verifiable), but may or may not be in P (quickly solvable). (It is necessary to consider a generalized version of Sudoku, as any fixed size Sudoku has only a finite number of possible grids. In this case the problem is in P, as the answer can be found by table lookup.)

The precise statement of the P versus NP problem was introduced in 1971 by [Stephen Cook](https://en.wikipedia.org/wiki/Stephen_Cook) in his seminal paper "The complexity of theorem proving procedures", and independently by [Leonid Levin](https://en.wikipedia.org/wiki/Leonid_Levin) in 1973.

Although the P versus NP problem was formally defined in 1971, there were previous inklings of the underlying problems involved. In 1955, mathematician [John Nash](https://en.wikipedia.org/wiki/John_Forbes_Nash_Jr.) wrote a letter to the [National Security Agency](https://en.wikipedia.org/wiki/National_Security_Agency), speculating that the time required to crack a sufficiently complex code would increase exponentially with the length of the key. If proved (and Nash was skeptical), this would imply what is now called P ≠ NP, since a proposed key can be verified in polynomial time. In a 1956 letter written by [Kurt Gödel](https://en.wikipedia.org/wiki/Kurt_G%C3%B6del) to [John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann), Gödel asked whether theorem-proving (now known to be [co-NP-complete](https://en.wikipedia.org/wiki/Co-NP-complete)) could be solved in [quadratic](https://en.wikipedia.org/wiki/Quadratic_time) or [linear time](https://en.wikipedia.org/wiki/Linear_time), and posited that if so, then the discovery of mathematical proofs could be automated.

The relation between the [complexity classes](https://en.wikipedia.org/wiki/Complexity_class) P and NP is studied in [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory), the part of the [theory of computation](https://en.wikipedia.org/wiki/Theory_of_computation) dealing with the resources required during computation to solve a given problem. The most common resources are time (how many steps it takes to solve a problem) and space (how much memory it takes to solve a problem).

In such analysis, a model of the computer for which time must be analyzed is required. Typically such models assume that the computer is *[deterministic](https://en.wikipedia.org/wiki/Deterministic_computation)* (given the computer's present state and any inputs, there is only one possible action that the computer might take) and *sequential* (it performs actions one after the other).

In this theory, the class P consists of all *[decision problems](https://en.wikipedia.org/wiki/Decision_problem)* (defined [below](#Formal_definitions)) solvable on a deterministic sequential machine in a duration [polynomial](https://en.wikipedia.org/wiki/Polynomial) in the size of the input; the class [NP](https://en.wikipedia.org/wiki/NP_(complexity)) consists of all decision problems whose positive solutions are verifiable in [polynomial time](https://en.wikipedia.org/wiki/Polynomial_time) given the right information, or equivalently, whose solution can be found in polynomial time on a [non-deterministic](https://en.wikipedia.org/wiki/Non-deterministic_Turing_machine) machine. Clearly, P ⊆ NP. Arguably, the biggest open question in [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science) concerns the relationship between those two classes:

:   Is P equal to NP?

Since 2001, [William Gasarch](https://en.wikipedia.org/wiki/William_Gasarch) has conducted three polls of researchers concerning P ≠ NP and related questions. The share of responders believing that P ≠ NP was 61% in 2001, 83% in 2011, and 88% in 2018, with 100, 151, and 124 responses, respectively. When restricted to experts, 99% of 2018 responders believed P ≠ NP. These polls do not imply whether P = NP; as Gasarch stated: "This does not bring us any closer to solving P=?NP or to knowing when it will be solved, but it attempts to be an objective report on the subjective opinion of this era."

[![](//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/P_np_np-complete_np-hard.svg/330px-P_np_np-complete_np-hard.svg.png)](https://en.wikipedia.org/wiki/File:P_np_np-complete_np-hard.svg)

[Euler diagram](https://en.wikipedia.org/wiki/Euler_diagram) for [P](https://en.wikipedia.org/wiki/P_(complexity)), [NP](https://en.wikipedia.org/wiki/NP_(complexity)), NP-complete, and NP-hard set of problems (excluding the empty language and its complement, which belong to P but are not NP-complete)

To attack the P = NP question, the concept of NP-completeness is very useful. NP-complete problems are problems that any other NP problem is reducible to in polynomial time and whose solution is still verifiable in polynomial time. That is, any NP problem can be transformed into any NP-complete problem. Informally, an NP-complete problem is an NP problem that is at least as "tough" as any other problem in NP.

[NP-hard](https://en.wikipedia.org/wiki/NP-hard) problems are those at least as hard as NP problems; i.e., all NP problems can be reduced (in polynomial time) to them. NP-hard problems need not be in NP; i.e., they need not have solutions verifiable in polynomial time.

For instance, the [Boolean satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem) is NP-complete by the [Cook–Levin theorem](https://en.wikipedia.org/wiki/Cook%E2%80%93Levin_theorem), so *any* instance of *any* problem in NP can be transformed mechanically into a Boolean satisfiability problem in polynomial time. The Boolean satisfiability problem is one of many NP-complete problems. If any NP-complete problem is in P, then it would follow that P = NP. However, many important problems are NP-complete, and no fast algorithm for any of them is known.

From the definition alone it is unintuitive that NP-complete problems exist; however, a trivial NP-complete problem can be formulated as follows: given a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine) *M* guaranteed to halt in polynomial time, does a polynomial-size input that *M* will accept exist? It is in NP because (given an input) it is simple to check whether *M* accepts the input by simulating *M*; it is NP-complete because the verifier for any particular instance of a problem in NP can be encoded as a polynomial-time machine *M* that takes the solution to be verified as input. Then the question of whether the instance is a yes or no instance is determined by whether a valid input exists.

The first natural problem proven to be NP-complete was the Boolean satisfiability problem, also known as SAT. As noted above, this is the Cook–Levin theorem; its proof that satisfiability is NP-complete contains technical details about Turing machines as they relate to the definition of NP. However, after this problem was proved to be NP-complete, [proof by reduction](https://en.wikipedia.org/wiki/Reduction_(complexity)) provided a simpler way to show that many other problems are also NP-complete, including the game Sudoku discussed earlier. In this case, the proof shows that a solution of Sudoku in polynomial time could also be used to complete [Latin squares](https://en.wikipedia.org/wiki/Latin_square) in polynomial time. This in turn gives a solution to the problem of partitioning [tri-partite graphs](https://en.wikipedia.org/wiki/Multipartite_graph) into triangles, which could then be used to find solutions for the special case of SAT known as 3-SAT, which then provides a solution for general Boolean satisfiability. So a polynomial-time solution to Sudoku leads, by a series of mechanical transformations, to a polynomial time solution of satisfiability, which in turn can be used to solve any other NP-problem in polynomial time. Using transformations like this, a vast class of seemingly unrelated problems are all reducible to one another, and are in a sense "the same problem".

Although it is unknown whether P = NP, problems outside of P are known. Just as the class P is defined in terms of polynomial running time, the class [EXPTIME](https://en.wikipedia.org/wiki/EXPTIME) is the set of all decision problems that have *exponential* running time. In other words, any problem in EXPTIME is solvable by a [deterministic Turing machine](https://en.wikipedia.org/wiki/Deterministic_Turing_machine) in [O](https://en.wikipedia.org/wiki/Big_O_notation)(2*p*(*n*)) time, where *p*(*n*) is a polynomial function of *n*. A decision problem is [EXPTIME-complete](https://en.wikipedia.org/wiki/EXPTIME#EXPTIME-complete) if it is in EXPTIME, and every problem in EXPTIME has a [polynomial-time many-one reduction](https://en.wikipedia.org/wiki/Polynomial-time_many-one_reduction) to it. A number of problems are known to be EXPTIME-complete. Because it can be shown that P ≠ EXPTIME, these problems are outside P, and so require more than polynomial time. In fact, by the [time hierarchy theorem](https://en.wikipedia.org/wiki/Time_hierarchy_theorem), they cannot be solved in significantly less than exponential time. Examples include finding a perfect strategy for [chess](https://en.wikipedia.org/wiki/Chess) positions on an *N* × *N* board and similar problems for other board games.

The problem of deciding the truth of a statement in [Presburger arithmetic](https://en.wikipedia.org/wiki/Presburger_arithmetic) requires even more time. [Fischer](https://en.wikipedia.org/wiki/Michael_J._Fischer) and [Rabin](https://en.wikipedia.org/wiki/Michael_O._Rabin) proved in 1974 that every algorithm that decides the truth of Presburger statements of length *n* has a runtime of at least 




2


2

c
n
{\displaystyle 2^{2^{cn}}}
![{\displaystyle 2^{2^{cn}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d7fdfdc2a032b7715499ed9706ea8c506bbdcf0a) for some constant *c*. Hence, the problem is known to need more than exponential run time. Even more difficult are the [undecidable problems](https://en.wikipedia.org/wiki/Undecidable_problem), such as the [halting problem](https://en.wikipedia.org/wiki/Halting_problem). They cannot be completely solved by any algorithm, in the sense that for any particular algorithm there is at least one input for which that algorithm will not produce the right answer; it will either produce the wrong answer, finish without giving a conclusive answer, or otherwise run forever without producing any answer at all.

It is also possible to consider questions other than decision problems. One such class, consisting of counting problems, is called [#P](https://en.wikipedia.org/wiki/Sharp-P#P): whereas an NP problem asks "Are there any solutions?", the corresponding #P problem asks "How many solutions are there?". Clearly, a #P problem must be at least as hard as the corresponding NP problem, since a count of solutions immediately tells if at least one solution exists, if the count is greater than zero. Surprisingly, some #P problems that are believed to be difficult correspond to easy (for example linear-time) P problems. For these problems, it is very easy to tell whether solutions exist, but thought to be very hard to tell how many. Many of these problems are [#P-complete](https://en.wikipedia.org/wiki/Sharp-P-complete), and hence among the hardest problems in #P, since a polynomial time solution to any of them would allow a polynomial time solution to all other #P problems.

## Problems in NP not known to be in P or NP-complete

[[edit](/w/index.php?title=P_versus_NP_problem&action=edit&section=6)]

In 1975, [Richard E. Ladner](https://en.wikipedia.org/wiki/Richard_E._Ladner) showed that if P ≠ NP, then there exist problems in NP that are neither in P nor NP-complete. Such problems are called NP-intermediate problems. The [graph isomorphism problem](https://en.wikipedia.org/wiki/Graph_isomorphism_problem), the [discrete logarithm problem](https://en.wikipedia.org/wiki/Discrete_logarithm_problem), and the [integer factorization problem](https://en.wikipedia.org/wiki/Integer_factorization_problem) are examples of problems believed to be NP-intermediate. They are some of the very few NP problems not known to be in P or to be NP-complete.

The graph isomorphism problem is the computational problem of determining whether two finite [graphs](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) are [isomorphic](https://en.wikipedia.org/wiki/Graph_isomorphism). An important unsolved problem in complexity theory is whether the graph isomorphism problem is in P, NP-complete, or NP-intermediate. The answer is not known, but it is believed that the problem is at least not NP-complete. If graph isomorphism is NP-complete, the [polynomial time hierarchy](https://en.wikipedia.org/wiki/Polynomial_time_hierarchy) collapses to its second level. Since it is widely believed that the polynomial hierarchy does not collapse to any finite level, it is believed that graph isomorphism is not NP-complete. The best algorithm for this problem, due to [László Babai](https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Babai), runs in [quasi-polynomial time](https://en.wikipedia.org/wiki/Quasi-polynomial_time).

The integer factorization problem is the computational problem of determining the [prime factorization](https://en.wikipedia.org/wiki/Prime_factorization) of a given integer. Phrased as a decision problem, it is the problem of deciding whether the input has a factor less than *k*. No efficient integer factorization algorithm is known, and this fact forms the basis of several modern cryptographic systems, such as the [RSA](https://en.wikipedia.org/wiki/RSA_(algorithm)) algorithm. The integer factorization problem is in NP and in [co-NP](https://en.wikipedia.org/wiki/Co-NP) (and even in [UP](https://en.wikipedia.org/wiki/UP_(complexity)) and co-UP). If the problem is NP-complete, the polynomial time hierarchy will collapse to its first level (i.e., NP = co-NP). The most [efficient](https://en.wikipedia.org/wiki/Algorithmic_efficiency) known algorithm for integer factorization is the [general number field sieve](https://en.wikipedia.org/wiki/General_number_field_sieve), which takes expected time

:   O

    (

    exp
    ⁡

    (



    (





    64
    n
    9
    log
    ⁡
    (
    2
    )
    )


    1
    3


    (

    log
    ⁡
    (
    n
    log
    ⁡
    (
    2
    )
    )
    )


    2
    3
    )
    )
    {\displaystyle O\left(\exp \left(\left({\tfrac {64n}{9}}\log(2)\right)^{\frac {1}{3}}\left(\log(n\log(2))\right)^{\frac {2}{3}}\right)\right)}
    ![{\displaystyle O\left(\exp \left(\left({\tfrac {64n}{9}}\log(2)\right)^{\frac {1}{3}}\left(\log(n\log(2))\right)^{\frac {2}{3}}\right)\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f89bfa57ed1686c2d6d65df139ecdb0fea8a327d)

to factor an *n*-bit integer. The best known [quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm) for this problem, [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm), runs in polynomial time, although this does not indicate where the problem lies with respect to non-[quantum complexity classes](https://en.wikipedia.org/wiki/Quantum_complexity_theory).

## Comparison of P with "easy" problems

[[edit](/w/index.php?title=P_versus_NP_problem&action=edit&section=7)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/1/11/KnapsackEmpComplexity.GIF/330px-KnapsackEmpComplexity.GIF)](https://en.wikipedia.org/wiki/File:KnapsackEmpComplexity.GIF)

The graph shows the running time vs. problem size for a [knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem) of a state-of-the-art, specialized algorithm. The [quadratic fit](https://en.wikipedia.org/wiki/Curve_fitting) suggests that the algorithmic complexity of the problem is O((log(*n*))2).

All of the above discussion has assumed that P means "easy" and "not in P" means "difficult", an assumption known as *[Cobham's thesis](https://en.wikipedia.org/wiki/Cobham%27s_thesis)*. It is a common assumption in complexity theory; but there are caveats.

First, it can be false in practice. A theoretical polynomial algorithm may have extremely large constant factors or exponents, rendering it impractical. For example, the problem of [deciding](https://en.wikipedia.org/wiki/Decision_problem) whether a graph *G* contains *H* as a [minor](https://en.wikipedia.org/wiki/Graph_minor), where *H* is fixed, can be solved in a running time of *O*(*n*2), where *n* is the number of vertices in *G*. However, the [big O notation](https://en.wikipedia.org/wiki/Big_O_notation) hides a constant that depends superexponentially on *H*. The constant is greater than 



2
↑↑
(
2
↑↑
(
2
↑↑
(
h

/
2
)
)
)
{\displaystyle 2\uparrow \uparrow (2\uparrow \uparrow (2\uparrow \uparrow (h/2)))}
![{\displaystyle 2\uparrow \uparrow (2\uparrow \uparrow (2\uparrow \uparrow (h/2)))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/360009b1d76b85fe5141886793eb89e9ad50e825) (using [Knuth's up-arrow notation](https://en.wikipedia.org/wiki/Knuth%27s_up-arrow_notation)), and where *h* is the number of vertices in *H*.

On the other hand, even if a problem is shown to be NP-complete, and even if P ≠ NP, there may still be effective approaches to the problem in practice. There are algorithms for many NP-complete problems, such as the [knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem), the [traveling salesman problem](https://en.wikipedia.org/wiki/Traveling_salesman_problem), and the [Boolean satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem), that can solve to optimality many real-world instances in reasonable time. The empirical [average-case complexity](https://en.wikipedia.org/wiki/Average-case_complexity) (time vs. problem size) of such algorithms can be surprisingly low. An example is the [simplex algorithm](https://en.wikipedia.org/wiki/Simplex_algorithm) in [linear programming](https://en.wikipedia.org/wiki/Linear_programming), which works surprisingly well in practice; despite having exponential worst-case [time complexity](https://en.wikipedia.org/wiki/Time_complexity), it runs on par with the best known polynomial-time algorithms.

Finally, there are types of computations which do not conform to the Turing machine model on which P and NP are defined, such as [quantum computation](https://en.wikipedia.org/wiki/Quantum_computation) and [randomized algorithms](https://en.wikipedia.org/wiki/Randomized_algorithm).

## Reasons to believe P ≠ NP or P = NP

[[edit](/w/index.php?title=P_versus_NP_problem&action=edit&section=8)]

Cook provides a restatement of the problem in *The P Versus NP Problem* as "Does P = NP?" According to polls, most computer scientists believe that P ≠ NP. A key reason for this belief is that after decades of studying these problems no one has been able to find a polynomial-time algorithm for any of more than 3,000 important known NP-complete problems (see [List of NP-complete problems](https://en.wikipedia.org/wiki/List_of_NP-complete_problems)). These algorithms were sought long before the concept of NP-completeness was even defined ([Karp's 21 NP-complete problems](https://en.wikipedia.org/wiki/Karp%27s_21_NP-complete_problems), among the first found, were all well-known existing problems at the time they were shown to be NP-complete). Furthermore, the result P = NP would imply many other startling results that are currently believed to be false, such as NP = [co-NP](https://en.wikipedia.org/wiki/Co-NP) and P = [PH](https://en.wikipedia.org/wiki/PH_(complexity)).

It is also intuitively argued that the existence of problems that are hard to solve but whose solutions are easy to verify matches real-world experience.

> If P = NP, then the world would be a profoundly different place than we usually assume it to be. There would be no special value in "creative leaps", no fundamental gap between solving a problem and recognizing the solution once it's found.

On the other hand, some researchers believe that it is overconfident to believe P ≠ NP and that researchers should also explore proofs of P = NP. For example, in 2002 these statements were made:

> The main argument in favor of P ≠ NP is the total lack of fundamental progress in the area of exhaustive search. This is, in my opinion, a very weak argument. The space of algorithms is very large and we are only at the beginning of its exploration. [...] The resolution of [Fermat's Last Theorem](https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem) also shows that very simple questions may be settled only by very deep theories.

> Being attached to a speculation is not a good guide to research planning. One should always try both directions of every problem. Prejudice has caused famous mathematicians to fail to solve famous problems whose solution was opposite to their expectations, even though they had developed all the methods required.

When one substitutes "linear time on a multitape Turing machine" for "polynomial time" in the definitions of P and NP, one obtains the classes [DLIN](https://en.wikipedia.org/wiki/DLIN) and [NLIN](https://en.wikipedia.org/wiki/NLIN).
It is known that DLIN ≠ NLIN.

## Consequences of solution

[[edit](/w/index.php?title=P_versus_NP_problem&action=edit&section=10)]

One of the reasons the problem attracts so much attention is the consequences of the possible answers. Either direction of resolution would advance theory enormously, and perhaps have huge practical consequences as well.

A proof that P = NP could have stunning practical consequences if the proof leads to efficient methods for solving some of the important problems in NP. The potential consequences, both positive and negative, arise since various NP-complete problems are fundamental in many fields.

It is also very possible that a proof would *not* lead to practical algorithms for NP-complete problems. The formulation of the problem does not require that the bounding polynomial be small or even specifically known. A [non-constructive proof](https://en.wikipedia.org/wiki/Non-constructive_proof) might show a solution exists without specifying either an algorithm to obtain it or a specific bound. Even if the proof is constructive, showing an explicit bounding polynomial and algorithmic details, if the polynomial is not very low-order the algorithm might not be sufficiently efficient in practice. In this case the initial proof would be mainly of interest to theoreticians, but the knowledge that polynomial time solutions are possible would surely spur research into better (and possibly practical) methods to achieve them.

A solution showing P = NP could upend the field of [cryptography](https://en.wikipedia.org/wiki/Cryptography), which relies on certain problems being difficult. A constructive and efficient solution to an NP-complete problem such as [3-SAT](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#3-satisfiability) would break most existing cryptosystems including:

* Existing implementations of [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), a foundation for many modern security applications such as secure financial transactions over the Internet.
* [Symmetric ciphers](https://en.wikipedia.org/wiki/Symmetric_cipher) such as [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) or [3DES](https://en.wikipedia.org/wiki/Triple_DES), used for the encryption of communications data.
* [Cryptographic hashing](https://en.wikipedia.org/wiki/Cryptographic_hash_function), which underlies [blockchain](https://en.wikipedia.org/wiki/Blockchain) [cryptocurrencies](https://en.wikipedia.org/wiki/Cryptocurrency) such as [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin), and is used to authenticate software updates. For these applications, finding a pre-image that hashes to a given value must be difficult, ideally taking exponential time. If P = NP, then this can take polynomial time, through reduction to SAT.

These would need modification or replacement with [information-theoretically secure](https://en.wikipedia.org/wiki/Information-theoretic_security) solutions that do not assume P ≠ NP.

There are also enormous benefits that would follow from rendering tractable many currently mathematically intractable problems. For instance, many problems in [operations research](https://en.wikipedia.org/wiki/Operations_research) are NP-complete, such as types of [integer programming](https://en.wikipedia.org/wiki/Integer_programming) and the [travelling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem). Efficient solutions to these problems would have enormous implications for logistics. Many other important problems, such as some problems in [protein structure prediction](https://en.wikipedia.org/wiki/Protein_structure_prediction), are also NP-complete; making these problems efficiently solvable could considerably advance life sciences and biotechnology.

These changes could be insignificant compared to the revolution that efficiently solving NP-complete problems would cause in mathematics itself. Gödel, in his early thoughts on computational complexity, noted that a mechanical method that could solve any problem would revolutionize mathematics:

> If there really were a machine with φ(*n*) ∼ *k*⋅*n* (or even ∼ *k*⋅*n*2), this would have consequences of the greatest importance. Namely, it would obviously mean that in spite of the undecidability of the [Entscheidungsproblem](https://en.wikipedia.org/wiki/Entscheidungsproblem), the mental work of a mathematician concerning Yes-or-No questions could be completely replaced by a machine. After all, one would simply have to choose the natural number *n* so large that when the machine does not deliver a result, it makes no sense to think more about the problem.

Similarly, [Stephen Cook](https://en.wikipedia.org/wiki/Stephen_Cook) (assuming not only a proof, but a practically efficient algorithm) says:

> ... it would transform mathematics by allowing a computer to find a formal proof of any theorem which has a proof of a reasonable length, since formal proofs can easily be recognized in polynomial time. Example problems may well include all of the [CMI prize problems](https://en.wikipedia.org/wiki/Clay_Math_Institute#Millennium_Prize_Problems).

Research mathematicians spend their careers trying to prove theorems, and some proofs have taken decades or even centuries to find after problems have been stated—for instance, [Fermat's Last Theorem](https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem) took over three centuries to prove. A method guaranteed to find a proof if a "reasonable" size proof exists, would essentially end this struggle.

[Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth) has stated that he has come to believe that P = NP, but is reserved about the impact of a possible proof:

> [...] if you imagine a number *M* that's finite but incredibly large—like say the number 10↑↑↑↑3 discussed in my paper on "coping with finiteness"—then there's a humongous number of possible algorithms that do *n**M* bitwise or addition or shift operations on *n* given bits, and it's really hard to believe that all of those algorithms fail.
> My main point, however, is that I don't believe that the equality P = NP will turn out to be helpful even if it is proved, because such a proof will almost surely be nonconstructive.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Complexity_classes.svg/250px-Complexity_classes.svg.png)](https://en.wikipedia.org/wiki/File:Complexity_classes.svg)

Diagram of complexity classes provided that P [≠](https://en.wikipedia.org/wiki/%E2%89%A0) NP. The existence of problems within NP but outside both P and NP-complete, under that assumption, was established by [Ladner's theorem](https://en.wikipedia.org/wiki/NP-intermediate).

A proof of P ≠ NP would lack the practical computational benefits of a proof that P = NP, but would represent a great advance in computational complexity theory and guide future research. It would demonstrate that many common problems cannot be solved efficiently, so that the attention of researchers can be focused on partial solutions or solutions to other problems. Due to widespread belief in P ≠ NP, much of this focusing of research has already taken place.

P ≠ NP still leaves open the [average-case complexity](https://en.wikipedia.org/wiki/Average-case_complexity) of hard problems in NP. For example, it is possible that SAT requires exponential time in the worst case, but that almost all randomly selected instances of it are efficiently solvable. [Russell Impagliazzo](https://en.wikipedia.org/wiki/Russell_Impagliazzo) has described five hypothetical "worlds" that could result from different possible resolutions to the average-case complexity question. These range from "Algorithmica", where P = NP and problems like SAT can be solved efficiently in all instances, to "Cryptomania", where P ≠ NP and generating hard instances of problems outside P is easy, with three intermediate possibilities reflecting different possible distributions of difficulty over instances of NP-hard problems. The "world" where P ≠ NP but all problems in NP are tractable in the average case is called "Heuristica" in the paper. A [Princeton University](https://en.wikipedia.org/wiki/Princeton_University) workshop in 2009 studied the status of the five worlds.

## Results about difficulty of proof

[[edit](/w/index.php?title=P_versus_NP_problem&action=edit&section=13)]

Although the P = NP problem itself remains open despite a million-dollar prize and a huge amount of dedicated research, efforts to solve the problem have led to several new techniques. In particular, some of the most fruitful research related to the P = NP problem has been in showing that existing proof techniques are insufficient for answering the question, suggesting novel technical approaches are required.

As additional evidence for the difficulty of the problem, essentially all known proof techniques in [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory) fall into one of the following classifications, all insufficient to prove P ≠ NP:

| Classification | Definition |
| --- | --- |
| Relativizing proofs | Imagine a world where every algorithm is allowed to make queries to some fixed subroutine called an oracle (which can answer a fixed set of questions in constant time, such as an oracle that solves any traveling salesman problem in 1 step), and the running time of the oracle is not counted against the running time of the algorithm. Most proofs (especially classical ones) apply uniformly in a world with oracles regardless of what the oracle does. These proofs are called relativizing . In 1975, Baker, Gill, and Solovay showed that P = NP with respect to some oracles, while P ≠ NP for other oracles. As relativizing proofs can only prove statements that are true for all possible oracles, these techniques cannot resolve P = NP. |
| Natural proofs | In 1993, Alexander Razborov and Steven Rudich defined a general class of proof techniques for circuit complexity lower bounds, called natural proofs . At the time, all previously known circuit lower bounds were natural, and circuit complexity was considered a very promising approach for resolving P = NP. However, Razborov and Rudich showed that if one-way functions exist, P and NP are indistinguishable to natural proof methods. Although the existence of one-way functions is unproven, most mathematicians believe that they exist, and a proof of their existence would be a much stronger statement than P ≠ NP. Thus, it is unlikely that natural proofs alone can resolve P = NP. |
| Algebrizing proofs | After the Baker–Gill–Solovay result, new non-relativizing proof techniques were successfully used to prove that IP = PSPACE . However, in 2008, Scott Aaronson and Avi Wigderson showed that the main technical tool used in the IP = PSPACE proof, known as arithmetization , was also insufficient to resolve P = NP. Arithmetization converts the operations of an algorithm to algebraic and basic arithmetic symbols and then uses those to analyze the workings. In the IP = PSPACE proof, they convert the black box and the Boolean circuits to an algebraic problem. As mentioned previously, it has been proven that this method is not viable to solve P = NP and other time complexity problems. |

These barriers are another reason why NP-complete problems are useful: if a polynomial-time algorithm can be demonstrated for an NP-complete problem, this would solve the P = NP problem in a way not excluded by the above results.

These barriers lead some computer scientists to suggest the P versus NP problem may be [independent](https://en.wikipedia.org/wiki/Independence_(mathematical_logic)) of standard axiom systems like [ZFC](https://en.wikipedia.org/wiki/ZFC) (cannot be proved or disproved within them). An independence result could imply that either P ≠ NP and this is unprovable in (e.g.) ZFC, or that P = NP but it is unprovable in ZFC that any polynomial-time algorithms are correct. However, if the problem is undecidable even with much weaker assumptions extending the [Peano axioms](https://en.wikipedia.org/wiki/Peano_axioms) for integer arithmetic, then nearly polynomial-time algorithms exist for all NP problems. Therefore, assuming (as most complexity theorists do) some NP problems don't have efficient algorithms, proofs of independence with those techniques are impossible. This also implies proving independence from PA or ZFC with current techniques is no easier than proving all NP problems have efficient algorithms.

## Logical characterizations

[[edit](/w/index.php?title=P_versus_NP_problem&action=edit&section=14)]

The P = NP problem can be restated as certain classes of logical statements, as a result of work in [descriptive complexity](https://en.wikipedia.org/wiki/Descriptive_complexity).

Consider all languages of finite structures with a fixed [signature](https://en.wikipedia.org/wiki/Signature_(logic)) including a [linear order](https://en.wikipedia.org/wiki/Linear_order) relation. Then, all such languages in P are expressible in [first-order logic](https://en.wikipedia.org/wiki/First-order_logic) with the addition of a suitable least [fixed-point combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator). Recursive functions can be defined with this and the order relation. As long as the signature contains at least one predicate or function in addition to the distinguished order relation, so that the amount of space taken to store such finite structures is actually polynomial in the number of elements in the structure, this precisely characterizes P.

Similarly, NP is the set of languages expressible in existential [second-order logic](https://en.wikipedia.org/wiki/Second-order_logic)—that is, second-order logic restricted to exclude [universal quantification](https://en.wikipedia.org/wiki/Universal_quantification) over relations, functions, and subsets. The languages in the [polynomial hierarchy](https://en.wikipedia.org/wiki/Polynomial_hierarchy), [PH](https://en.wikipedia.org/wiki/PH_(complexity)), correspond to all of second-order logic. Thus, the question "is P a proper subset of NP" can be reformulated as "is existential second-order logic able to describe languages (of finite linearly ordered structures with nontrivial signature) that first-order logic with least fixed point cannot?". The word "existential" can even be dropped from the previous characterization, since P = NP if and only if P = PH (as the former would establish that NP = co-NP, which in turn implies that NP = PH).

## Polynomial-time algorithms

[[edit](/w/index.php?title=P_versus_NP_problem&action=edit&section=15)]

No known algorithm for a NP-complete problem runs in polynomial time. However, there are algorithms known for NP-complete problems that if P = NP, the algorithm runs in polynomial time on accepting instances (although with enormous constants, making the algorithm impractical). However, these algorithms do not qualify as polynomial time because their running time on rejecting instances are not polynomial. The following algorithm, due to [Levin](https://en.wikipedia.org/wiki/Leonid_Levin) (without any citation), is such an example below. It correctly accepts the NP-complete language [SUBSET-SUM](https://en.wikipedia.org/wiki/Subset_sum_problem). It runs in polynomial time on inputs that are in SUBSET-SUM if and only if P = NP:

```
// Algorithm that accepts the NP-complete language SUBSET-SUM.
//
// this is a polynomial-time algorithm if and only if P = NP.
//
// "Polynomial-time" means it returns "yes" in polynomial time when
// the answer should be "yes", and runs forever when it is "no".
//
// Input: S = a finite set of integers
// Output: "yes" if any subset of S adds up to 0.
// Runs forever with no output otherwise.
// Note: "Program number M" is the program obtained by
// writing the integer M in binary, then
// considering that string of bits to be a
// program. Every possible program can be
// generated this way, though most do nothing
// because of syntax errors.
FOR K = 1...∞
  FOR M = 1...K
    Run program number M for K steps with input S
    IF the program outputs a list of distinct integers
      AND the integers are all in S
      AND the integers sum to 0
    THEN
      OUTPUT "yes" and HALT

```

This is a polynomial-time algorithm accepting an NP-complete language only if P = NP. "Accepting" means it gives "yes" answers in polynomial time, but is allowed to run forever when the answer is "no" (also known as a *semi-algorithm*).

This algorithm is enormously impractical, even if P = NP. If the shortest program that can solve SUBSET-SUM in polynomial time is *b* bits long, the above algorithm will try at least 2*b* − 1 other programs first.

A *decision problem* is a problem that takes as input some [string](https://en.wikipedia.org/wiki/String_(computer_science)) *w* over an alphabet Σ, and outputs "yes" or "no". If there is an [algorithm](https://en.wikipedia.org/wiki/Algorithm) (say a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine), or a [computer program](https://en.wikipedia.org/wiki/Computer_programming) with unbounded memory) that produces the correct answer for any input string of length *n* in at most *cnk* steps, where *k* and *c* are constants independent of the input string, then we say that the problem can be solved in *polynomial time* and we place it in the class P. Formally, P is the set of languages that can be decided by a deterministic polynomial-time Turing machine. Meaning,

:   P
    =
    {
    L
    :
    L
    =
    L
    (
    M
    )

     for some deterministic polynomial-time Turing machine 
    M
    }
    {\displaystyle {\mathsf {P}}=\{L:L=L(M){\text{ for some deterministic polynomial-time Turing machine }}M\}}
    ![{\displaystyle {\mathsf {P}}=\{L:L=L(M){\text{ for some deterministic polynomial-time Turing machine }}M\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dcf301372adab39118fa00bc4275f3eb3b6988cb)

where

:   L
    (
    M
    )
    =
    {
    w
    ∈

    Σ

    ∗
    :
    M

     accepts 
    w
    }
    {\displaystyle L(M)=\{w\in \Sigma ^{\*}:M{\text{ accepts }}w\}}
    ![{\displaystyle L(M)=\{w\in \Sigma ^{*}:M{\text{ accepts }}w\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/054f106a62486b09305b6a4191da1a06d66153ad)

and a deterministic polynomial-time Turing machine is a deterministic Turing machine *M* that satisfies two conditions:

1. *M* halts on all inputs *w* and
2. there exists 



   k
   ∈
   N
   {\displaystyle k\in N}
   ![{\displaystyle k\in N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cc8695d703e66cb6e8c4a9544835cbc81c4db4f9) such that 




   T

   M
   (
   n
   )
   ∈
   O
   (

   n

   k
   )
   {\displaystyle T\_{M}(n)\in O(n^{k})}
   ![{\displaystyle T_{M}(n)\in O(n^{k})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4526a52b15c74348370cf8c8dc2d9dffd4e19012), where *O* refers to the [big O notation](https://en.wikipedia.org/wiki/Big_O_notation#Formal_definition) and

:   :   T

        M
        (
        n
        )
        =
        max
        {

        t

        M
        (
        w
        )
        :
        w
        ∈

        Σ

        ∗
        ,

        |
        w

        |
        =
        n
        }
        {\displaystyle T\_{M}(n)=\max\{t\_{M}(w):w\in \Sigma ^{\*},|w|=n\}}
        ![{\displaystyle T_{M}(n)=\max\{t_{M}(w):w\in \Sigma ^{*},|w|=n\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7d27483237f001e8ec8e7a0ae59f22c835ec9f9f)
    :   t

        M
        (
        w
        )
        =

         number of steps 
        M

         takes to halt on input 
        w
        .
        {\displaystyle t\_{M}(w)={\text{ number of steps }}M{\text{ takes to halt on input }}w.}
        ![{\displaystyle t_{M}(w)={\text{ number of steps }}M{\text{ takes to halt on input }}w.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3c1249947cc8ca2992160da7ac626e9752f2bd12)

NP can be defined similarly using nondeterministic Turing machines (the traditional way). However, a modern approach uses the concept of *[certificate](https://en.wikipedia.org/wiki/Certificate_(complexity))* and *verifier*. Formally, NP is the set of languages with a finite alphabet and verifier that runs in polynomial time. The following defines a "verifier":

Let *L* be a language over a finite alphabet, Σ.

*L* ∈ NP if, and only if, there exists a binary relation 



R
⊂

Σ

∗
×

Σ

∗
{\displaystyle R\subset \Sigma ^{\*}\times \Sigma ^{\*}}
![{\displaystyle R\subset \Sigma ^{*}\times \Sigma ^{*}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c11a88bb17429fb2afb1ea019b50d785c54304ca) and a positive integer *k* such that the following two conditions are satisfied:

1. ; and
2. the language is decidable by a deterministic Turing machine in polynomial time.

A Turing machine that decides *LR* is called a *verifier* for *L* and a *y* such that (*x*, *y*) ∈ *R* is called a *certificate of membership* of *x* in *L*.

Not all verifiers must be polynomial-time. However, for *L* to be in NP, there must be a verifier that runs in polynomial time.

Let

:   C
    O
    M
    P
    O
    S
    I
    T
    E
    =

    {

    x
    ∈

    N
    ∣
    x
    =
    p
    q

     for integers 
    p
    ,
    q
    >
    1
    }
    {\displaystyle \mathrm {COMPOSITE} =\left\{x\in \mathbb {N} \mid x=pq{\text{ for integers }}p,q>1\right\}}
    ![{\displaystyle \mathrm {COMPOSITE} =\left\{x\in \mathbb {N} \mid x=pq{\text{ for integers }}p,q>1\right\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5c370616c6aa091e91cc1d110a090b753c13470c)
:   R
    =

    {

    (
    x
    ,
    y
    )
    ∈

    N
    ×

    N
    ∣
    1
    <
    y
    ≤


    x

     and 
    y

     divides 
    x
    }
    .
    {\displaystyle R=\left\{(x,y)\in \mathbb {N} \times \mathbb {N} \mid 1<y\leq {\sqrt {x}}{\text{ and }}y{\text{ divides }}x\right\}.}
    ![{\displaystyle R=\left\{(x,y)\in \mathbb {N} \times \mathbb {N} \mid 1<y\leq {\sqrt {x}}{\text{ and }}y{\text{ divides }}x\right\}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9aeac41876f8c8cba9cdd55a61a9ebe0000b16c3)

Whether a value of *x* is [composite](https://en.wikipedia.org/wiki/Composite_number) is equivalent to of whether *x* is a member of COMPOSITE. It can be shown that COMPOSITE ∈ NP by verifying that it satisfies the above definition (if we identify natural numbers with their binary representations).

COMPOSITE also happens to be in P, a fact demonstrated by the invention of the [AKS primality test](https://en.wikipedia.org/wiki/AKS_primality_test).

There are many equivalent ways of describing NP-completeness.

Let *L* be a language over a finite alphabet Σ.

*L* is NP-complete if, and only if, the following two conditions are satisfied:

1. *L* ∈ NP; and
2. any *L′* in NP is polynomial-time-reducible to *L* (written as 




   L
   ′

   ≤

   p
   L
   {\displaystyle L'\leq \_{p}L}
   ![{\displaystyle L'\leq _{p}L}](https://wikimedia.org/api/rest_v1/media/math/render/svg/63a5e90d0dd696a441d88b301d9f60e81bc1f111)), where 




   L
   ′

   ≤

   p
   L
   {\displaystyle L'\leq \_{p}L}
   ![{\displaystyle L'\leq _{p}L}](https://wikimedia.org/api/rest_v1/media/math/render/svg/63a5e90d0dd696a441d88b301d9f60e81bc1f111) if, and only if, the following two conditions are satisfied:
   1. There exists *f* : Σ\* → Σ\* such that for all *w* in Σ\* we have: 



      (
      w
      ∈

      L
      ′
      ⇔
      f
      (
      w
      )
      ∈
      L
      )
      {\displaystyle (w\in L'\Leftrightarrow f(w)\in L)}
      ![{\displaystyle (w\in L'\Leftrightarrow f(w)\in L)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/71b14fda78c5eb95ccb83e9eef11c02c9eabb84c); and
   2. there exists a polynomial-time Turing machine that halts with *f*(*w*) on its tape on any input *w*.

Alternatively, if *L* ∈ NP, and there is another NP-complete problem that can be polynomial-time reduced to *L*, then *L* is NP-complete. This is a common way of proving some new problem is NP-complete.

While the P versus NP problem is generally considered unsolved, many amateur and some professional researchers have claimed solutions. [Gerhard J. Woeginger](https://en.wikipedia.org/wiki/Gerhard_J._Woeginger) compiled a list of 116 purported proofs from 1986 to 2016, of which 61 were proofs of P = NP, 49 were proofs of P ≠ NP, and 6 proved other results, e.g. that the problem is undecidable. Some attempts at resolving P versus NP have received brief media attention, though these attempts have been refuted.

The film *[Travelling Salesman](https://en.wikipedia.org/wiki/Travelling_Salesman_(2012_film))*, by director Timothy Lanzone, is the story of four mathematicians hired by the US government to solve the P versus NP problem.

In the sixth episode of *[The Simpsons](https://en.wikipedia.org/wiki/The_Simpsons)*' seventh season "[Treehouse of Horror VI](https://en.wikipedia.org/wiki/Treehouse_of_Horror_VI)", the equation P = NP is seen shortly after Homer accidentally stumbles into the "third dimension".

In the second episode of season 2 of *[Elementary](https://en.wikipedia.org/wiki/Elementary_(TV_series))*, ["Solve for X"](https://en.wikipedia.org/wiki/List_of_Elementary_episodes#Season_2_(2013%E2%80%9314)) Holmes and Watson investigate the murders of mathematicians who were attempting to solve P versus NP.

1. **[^](#cite_ref-1)** A [nondeterministic Turing machine](https://en.wikipedia.org/wiki/Nondeterministic_Turing_machine) can move to a state that is not determined by the previous state. Such a machine could solve an NP problem in polynomial time by falling into the correct answer state (by luck), then conventionally verifying it. Such machines are not practical for solving realistic problems but can be used as theoretical models.
2. **[^](#cite_ref-13)** The polls were conducted in 2001, 2011, and 2018 but published in 2002, 2012, and 2019 respectively.
3. **[^](#cite_ref-35)** Exactly how efficient a solution must be to pose a threat to cryptography depends on the details. A solution of 



   O
   (

   N

   2
   )
   {\displaystyle O(N^{2})}
   ![{\displaystyle O(N^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e5d43a3df904fa4d7220f5b86285298aa36d969b) with a reasonable constant term would be disastrous. On the other hand, a solution that is 



   Ω
   (

   N

   4
   )
   {\displaystyle \Omega (N^{4})}
   ![{\displaystyle \Omega (N^{4})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4434a78ebd7a1d1b89da895846506ee106d23410) in almost all cases would not pose an immediate practical danger.

1. **[^](#cite_ref-2)** ["Explained: P vs. NP"](https://news.mit.edu/2009/explainer-pnp). *MIT News | Massachusetts Institute of Technology*. 29 October 2009. Retrieved 6 March 2026.
2. **[^](#cite_ref-3)** [Fortnow, Lance](https://en.wikipedia.org/wiki/Lance_Fortnow) (2009). ["The status of the P versus NP problem"](https://wayback.archive-it.org/all/20110224135332/http://www.cs.uchicago.edu/~fortnow/papers/pnp-cacm.pdf) (PDF). *Communications of the ACM*. **52** (9): 78–86. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.156.767](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.156.767). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1562164.1562186](https://doi.org/10.1145%2F1562164.1562186). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [5969255](https://api.semanticscholar.org/CorpusID:5969255). Archived from [the original](http://www.cs.uchicago.edu/~fortnow/papers/pnp-cacm.pdf) (PDF) on 24 February 2011. Retrieved 26 January 2010.
3. **[^](#cite_ref-4)** Fortnow, Lance (2013). *The Golden Ticket: P, NP, and the Search for the Impossible*. Princeton, NJ: Princeton University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780691156491](https://en.wikipedia.org/wiki/Special:BookSources/9780691156491).
4. **[^](#cite_ref-5)** [Cook, Stephen](https://en.wikipedia.org/wiki/Stephen_Cook) (1971). ["The complexity of theorem proving procedures"](http://portal.acm.org/citation.cfm?coll=GUIDE&dl=GUIDE&id=805047). *Proceedings of the Third Annual ACM Symposium on Theory of Computing*. pp. 151–158. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/800157.805047](https://doi.org/10.1145%2F800157.805047). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781450374644](https://en.wikipedia.org/wiki/Special:BookSources/9781450374644). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [7573663](https://api.semanticscholar.org/CorpusID:7573663).
5. **[^](#cite_ref-6)** Levin, L. A. (1973). [Универсальные задачи перебора](https://www.mathnet.ru/php/archive.phtml?wshow=paper&jrnid=ppi&paperid=914&option_lang=rus) [Problems of Information Transmission]. *Пробл. Передачи Информ* (in Russian). **9** (3): 115–116.
6. **[^](#cite_ref-7)** NSA (2012). ["Letters from John Nash"](https://www.nsa.gov/Portals/70/documents/news-features/declassified-documents/nash-letters/nash_letters1.pdf) (PDF). [Archived](https://web.archive.org/web/20181109234811/https://www.nsa.gov/Portals/70/documents/news-features/declassified-documents/nash-letters/nash_letters1.pdf) (PDF) from the original on 9 November 2018.
7. **[^](#cite_ref-8)** Hartmanis, Juris. ["Gödel, von Neumann, and the P = NP problem"](https://ecommons.library.cornell.edu/bitstream/1813/6910/1/89-994.pdf) (PDF). *Bulletin of the European Association for Theoretical Computer Science*. **38**: 101–107.
8. **[^](#cite_ref-9)** Sipser, Michael: *Introduction to the Theory of Computation, Second Edition, International Edition*, page 270. Thomson Course Technology, 2006. Definition 7.19 and Theorem 7.20.
9. ^ [***a***](#cite_ref-poll_10-0) [***b***](#cite_ref-poll_10-1) [***c***](#cite_ref-poll_10-2) [***d***](#cite_ref-poll_10-3) [Gasarch, William I.](https://en.wikipedia.org/wiki/William_Gasarch) (June 2002). ["The P=?NP poll"](http://www.cs.umd.edu/~gasarch/papers/poll.pdf) (PDF). *[SIGACT News](https://en.wikipedia.org/wiki/SIGACT_News)*. **33** (2): 34–47. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.172.1005](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.172.1005). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/564585.564599](https://doi.org/10.1145%2F564585.564599). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [36828694](https://api.semanticscholar.org/CorpusID:36828694). [Archived](https://web.archive.org/web/20070615132837/http://www.cs.umd.edu/~gasarch/papers/poll.pdf) (PDF) from the original on 15 June 2007.
10. **[^](#cite_ref-poll2_11-0)** [Gasarch, William I.](https://en.wikipedia.org/wiki/William_Gasarch) ["The Second P=?NP poll"](http://www.cs.umd.edu/~gasarch/papers/poll2012.pdf) (PDF). *SIGACT News*. **74**. [Archived](https://web.archive.org/web/20140124031930/http://www.cs.umd.edu/~gasarch/papers/poll2012.pdf) (PDF) from the original on 24 January 2014.
11. ^ [***a***](#cite_ref-poll3_12-0) [***b***](#cite_ref-poll3_12-1) [***c***](#cite_ref-poll3_12-2) [***d***](#cite_ref-poll3_12-3) ["Guest Column: The Third P =? NP Poll1"](https://www.cs.umd.edu/users/gasarch/BLOGPAPERS/pollpaper3.pdf) (PDF). [Archived](https://web.archive.org/web/20190331023850/https://www.cs.umd.edu/users/gasarch/BLOGPAPERS/pollpaper3.pdf) (PDF) from the original on 31 March 2019. Retrieved 25 May 2020.
12. **[^](#cite_ref-Scott_14-0)** Aaronson, Scott. ["PHYS771 Lecture 6: P, NP, and Friends"](http://www.scottaaronson.com/democritus/lec6.html). Retrieved 27 August 2007.
13. **[^](#cite_ref-15)** ["MSc course: Foundations of Computer Science"](http://www.cs.ox.ac.uk/people/paul.goldberg/FCS/sudoku.html). *www.cs.ox.ac.uk*. Retrieved 25 May 2020.
14. **[^](#cite_ref-16)** Colbourn, Charles J. (1984). ["The complexity of completing partial Latin squares"](https://doi.org/10.1016%2F0166-218X%2884%2990075-1). *Discrete Applied Mathematics*. **8** (1): 25–30. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0166-218X(84)90075-1](https://doi.org/10.1016%2F0166-218X%2884%2990075-1).
15. **[^](#cite_ref-17)** Holyer, I. (1981). "The NP-completeness of some edge-partition problems". *SIAM J. Comput*. **10** (4): 713–717. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/0210054](https://doi.org/10.1137%2F0210054).
16. **[^](#cite_ref-Fraenkel1981_18-0)** [Fraenkel, Aviezri](https://en.wikipedia.org/wiki/Aviezri_Fraenkel); Lichtenstein, D. (1981). "Computing a perfect strategy for *n* × *n* chess requires time exponential in *n*". *[Journal of Combinatorial Theory](https://en.wikipedia.org/wiki/Journal_of_Combinatorial_Theory)*. Series A. **31** (2): 199–214. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0097-3165(81)90016-9](https://doi.org/10.1016%2F0097-3165%2881%2990016-9).
17. **[^](#cite_ref-19)** [Eppstein, David](https://en.wikipedia.org/wiki/David_Eppstein). ["Computational Complexity of Games and Puzzles"](http://www.ics.uci.edu/~eppstein/cgt/hard.html).
18. **[^](#cite_ref-20)** [Fischer, Michael J.](https://en.wikipedia.org/wiki/Michael_J._Fischer); [Rabin, Michael O.](https://en.wikipedia.org/wiki/Michael_O._Rabin) (1974). ["Super-Exponential Complexity of Presburger Arithmetic"](https://web.archive.org/web/20060915010325/http://www.lcs.mit.edu/publications/pubs/ps/MIT-LCS-TM-043.ps). *Proceedings of the SIAM-AMS Symposium in Applied Mathematics*. **7**: 27–41. Archived from [the original](http://www.lcs.mit.edu/publications/pubs/ps/MIT-LCS-TM-043.ps) on 15 September 2006. Retrieved 15 October 2017.
19. **[^](#cite_ref-21)** Valiant, Leslie G. (1979). "The complexity of enumeration and reliability problems". *SIAM Journal on Computing*. **8** (3): 410–421. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/0208032](https://doi.org/10.1137%2F0208032).
20. ^ [***a***](#cite_ref-Ladner75_22-0) [***b***](#cite_ref-Ladner75_22-1) Ladner, R.E. (1975). ["On the structure of polynomial time reducibility"](https://doi.org/10.1145%2F321864.321877). *[Journal of the ACM](https://en.wikipedia.org/wiki/Journal_of_the_ACM)*. **22**: 151–171 See Corollary 1.1. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/321864.321877](https://doi.org/10.1145%2F321864.321877). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [14352974](https://api.semanticscholar.org/CorpusID:14352974).
21. **[^](#cite_ref-AK06_23-0)** Arvind, Vikraman; Kurur, Piyush P. (2006). "Graph isomorphism is in SPP". *Information and Computation*. **204** (5): 835–852. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.ic.2006.02.002](https://doi.org/10.1016%2Fj.ic.2006.02.002).
22. **[^](#cite_ref-24)** [Schöning, Uwe](https://en.wikipedia.org/wiki/Uwe_Sch%C3%B6ning) (1988). "Graph isomorphism is in the low hierarchy". *Journal of Computer and System Sciences*. **37** (3): 312–323. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0022-0000(88)90010-4](https://doi.org/10.1016%2F0022-0000%2888%2990010-4).
23. **[^](#cite_ref-25)** Babai, László (2018). "Group, graphs, algorithms: the graph isomorphism problem". *Proceedings of the International Congress of Mathematicians—Rio de Janeiro 2018. Vol. IV. Invited lectures*. World Sci. Publ., Hackensack, NJ. pp. 3319–3336. [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [3966534](https://mathscinet.ams.org/mathscinet-getitem?mr=3966534).
24. **[^](#cite_ref-26)** [Lance Fortnow](https://en.wikipedia.org/wiki/Lance_Fortnow). Computational Complexity Blog: [Complexity Class of the Week: Factoring](http://weblog.fortnow.com/2002/09/complexity-class-of-week-factoring.html). 13 September 2002.
25. **[^](#cite_ref-Pisinger2003_27-0)** Pisinger, D. 2003. "Where are the hard knapsack problems?" Technical Report 2003/08, Department of Computer Science, University of Copenhagen, Copenhagen, Denmark
26. **[^](#cite_ref-kkr12_28-0)** Kawarabayashi, Ken-ichi; Kobayashi, Yusuke; [Reed, Bruce](https://en.wikipedia.org/wiki/Bruce_Reed_(mathematician)) (2012). ["The disjoint paths problem in quadratic time"](https://doi.org/10.1016%2Fj.jctb.2011.07.004). *[Journal of Combinatorial Theory](https://en.wikipedia.org/wiki/Journal_of_Combinatorial_Theory)*. Series B. **102** (2): 424–435. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.jctb.2011.07.004](https://doi.org/10.1016%2Fj.jctb.2011.07.004).
27. **[^](#cite_ref-29)** Johnson, David S. (1987). "The NP-completeness column: An ongoing guide (edition 19)". *Journal of Algorithms*. **8** (2): 285–303. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.114.3864](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.114.3864). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0196-6774(87)90043-5](https://doi.org/10.1016%2F0196-6774%2887%2990043-5).
28. **[^](#cite_ref-30)** Gondzio, Jacek; Terlaky, Tamás (1996). ["3 A computational view of interior point methods"](http://www.maths.ed.ac.uk/~gondzio/CV/oxford.ps). In J. E. Beasley (ed.). *Advances in linear and integer programming*. Oxford Lecture Series in Mathematics and its Applications. Vol. 4. New York: Oxford University Press. pp. 103–144. [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [1438311](https://mathscinet.ams.org/mathscinet-getitem?mr=1438311). [Postscript file at website of Gondzio](http://www.maths.ed.ac.uk/~gondzio/CV/oxford.ps) and [at McMaster University website of Terlaky](http://www.cas.mcmaster.ca/~terlaky/files/dut-twi-94-73.ps.gz).
29. ^ [***a***](#cite_ref-Official_Problem_Description_31-0) [***b***](#cite_ref-Official_Problem_Description_31-1) [Cook, Stephen](https://en.wikipedia.org/wiki/Stephen_Cook) (April 2000). ["The P versus NP Problem"](https://www.claymath.org/wp-content/uploads/2022/06/pvsnp.pdf) (PDF). *[Clay Mathematics Institute](https://en.wikipedia.org/wiki/Clay_Mathematics_Institute)*. [Archived](https://web.archive.org/web/20131216004059/http://www.claymath.org/sites/default/files/pvsnp.pdf) (PDF) from the original on 16 December 2013. Retrieved 18 October 2006.
30. **[^](#cite_ref-32)** Rosenberger, Jack (May 2012). ["P vs. NP poll results"](http://mags.acm.org/communications/201205?pg=12). *Communications of the ACM*. **55** (5): 10.
31. **[^](#cite_ref-33)** Aaronson, Scott (4 September 2006). ["Reasons to believe"](http://scottaaronson.com/blog/?p=122)., point 9.
32. **[^](#cite_ref-34)** Balcazar, Jose Luis; Diaz, Josep; Gabarro, Joaquim (1990). *Structural Complexity II*. Springer Verlag. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [3-540-52079-1](https://en.wikipedia.org/wiki/Special:BookSources/3-540-52079-1)., Theorem 3.9
33. **[^](#cite_ref-36)** See Horie, S.; Watanabe, O. (1997). "Hard instance generation for SAT". *Algorithms and Computation*. Lecture Notes in Computer Science. Vol. 1350. Springer. pp. 22–31. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[cs/9809117](https://arxiv.org/abs/cs/9809117). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1998cs........9117H](https://ui.adsabs.harvard.edu/abs/1998cs........9117H). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/3-540-63890-3\_4](https://doi.org/10.1007%2F3-540-63890-3_4). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-63890-2](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-63890-2). for a reduction of factoring to SAT. A 512-bit factoring problem (8400 MIPS-years when factored) translates to a SAT problem of 63,652 variables and 406,860 clauses.
34. **[^](#cite_ref-37)** See, for example, Massacci, F.; Marraro, L. (2000). "Logical cryptanalysis as a SAT problem". *Journal of Automated Reasoning*. **24** (1): 165–203. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.104.962](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.104.962). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1023/A:1006326723002](https://doi.org/10.1023%2FA%3A1006326723002). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [3114247](https://api.semanticscholar.org/CorpusID:3114247). in which an instance of DES is encoded as a SAT problem with 10336 variables and 61935 clauses. A 3DES problem instance would be about 3 times this size.
35. **[^](#cite_ref-38)** De, Debapratim; Kumarasubramanian, Abishek; Venkatesan, Ramarathnam (2007). "Inversion attacks on secure hash functions using SAT solvers". *Theory and Applications of Satisfiability Testing – SAT 2007*. International Conference on Theory and Applications of Satisfiability Testing. Springer. pp. 377–382. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-540-72788-0\_36](https://doi.org/10.1007%2F978-3-540-72788-0_36).
36. **[^](#cite_ref-Berger_39-0)** [Berger, B.](https://en.wikipedia.org/wiki/Bonnie_Berger); [Leighton, T.](https://en.wikipedia.org/wiki/F._Thomson_Leighton) (1998). "Protein folding in the hydrophobic-hydrophilic (HP) model is NP-complete". *Journal of Computational Biology*. **5** (1): 27–40. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.139.5547](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.139.5547). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1089/cmb.1998.5.27](https://doi.org/10.1089%2Fcmb.1998.5.27). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [9541869](https://pubmed.ncbi.nlm.nih.gov/9541869).
37. **[^](#cite_ref-40)** History of this letter and its translation from Sipser, Michael. ["The History and Status of the P versus NP question"](http://cs.stanford.edu/people/trevisan/cs172-07/sipser92history.pdf) (PDF). [Archived](https://web.archive.org/web/20140202095503/http://cs.stanford.edu/people/trevisan/cs172-07/sipser92history.pdf) (PDF) from the original on 2 February 2014.
38. **[^](#cite_ref-41)** Johnson, David S. (August 2012). "A Brief History of NP-Completeness, 1954–2012". In [Grötschel, M.](https://en.wikipedia.org/wiki/Martin_Gr%C3%B6tschel) (ed.). [*Optimization Stories*](https://www.academia.edu/download/53654761/Groetschel-Gertzen_Petrie_DocMath.pdf) (PDF). Documenta Mathematica. pp. 359–376. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-936609-58-5](https://en.wikipedia.org/wiki/Special:BookSources/978-3-936609-58-5). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1431-0643](https://search.worldcat.org/issn/1431-0643).
39. **[^](#cite_ref-42)** [Knuth, Donald E.](https://en.wikipedia.org/wiki/Donald_Knuth) (20 May 2014). [*Twenty Questions for Donald Knuth*](http://www.informit.com/articles/article.aspx?p=2213858&WT.rss_f=Article&WT.rss_a=Twenty%20Questions%20for%20Donald%20Knuth&WT.rss_ev=a). [InformIT](https://en.wikipedia.org/wiki/InformIT_(publisher)). Retrieved 20 July 2014.
40. **[^](#cite_ref-43)** Foulds, L. R. (October 1983). "The Heuristic Problem-Solving Approach". *[Journal of the Operational Research Society](https://en.wikipedia.org/wiki/Journal_of_the_Operational_Research_Society)*. **34** (10): 927–934. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/2580891](https://doi.org/10.2307%2F2580891). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [2580891](https://www.jstor.org/stable/2580891).
41. **[^](#cite_ref-44)** R. Impagliazzo, ["A personal view of average-case complexity"](http://cseweb.ucsd.edu/~russell/average.ps), p. 134, 10th Annual Structure in Complexity Theory Conference (SCT'95), 1995.
42. **[^](#cite_ref-45)** ["Tentative program for the workshop on "Complexity and Cryptography: Status of Impagliazzo's Worlds""](https://web.archive.org/web/20131115034042/http://intractability.princeton.edu/blog/2009/05/program-for-workshop-on-impagliazzos-worlds/). Archived from [the original](http://intractability.princeton.edu/blog/2009/05/program-for-workshop-on-impagliazzos-worlds/) on 15 November 2013.
43. **[^](#cite_ref-46)** Baker, T. P.; Gill, J.; Solovay, R. (1975). "Relativizations of the P =? NP Question". *[SIAM Journal on Computing](https://en.wikipedia.org/wiki/SIAM_Journal_on_Computing)*. **4** (4): 431–442. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/0204037](https://doi.org/10.1137%2F0204037).
44. **[^](#cite_ref-47)** Razborov, Alexander A.; Steven Rudich (1997). ["Natural proofs"](https://doi.org/10.1006%2Fjcss.1997.1494). *Journal of Computer and System Sciences*. **55** (1): 24–35. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1006/jcss.1997.1494](https://doi.org/10.1006%2Fjcss.1997.1494).
45. ^ [***a***](#cite_ref-:0_48-0) [***b***](#cite_ref-:0_48-1) Aaronson, S.; Wigderson, A. (2008). [*Algebrization: A New Barrier in Complexity Theory*](http://www.scottaaronson.com/papers/alg.pdf) (PDF). Proceedings of ACM STOC'2008. pp. 731–740. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1374376.1374481](https://doi.org/10.1145%2F1374376.1374481). [Archived](https://web.archive.org/web/20080221223917/http://www.scottaaronson.com/papers/alg.pdf) (PDF) from the original on 21 February 2008.
46. **[^](#cite_ref-49)** [Aaronson, Scott](https://en.wikipedia.org/wiki/Scott_Aaronson). ["Is P Versus NP Formally Independent?"](http://www.scottaaronson.com/papers/indep.pdf) (PDF). [Archived](https://web.archive.org/web/20170116143825/http://www.scottaaronson.com/papers/indep.pdf) (PDF) from the original on 16 January 2017..
47. **[^](#cite_ref-50)** Ben-David, Shai; Halevi, Shai (1992). [*On the independence of P versus NP*](https://web.archive.org/web/20120302072225/https://www.cs.technion.ac.il/~shai/ph.ps.gz). *Technion* (Technical report). Vol. 714. Archived from [the original](https://www.cs.technion.ac.il/~shai/ph.ps.gz) (GZIP) on 2 March 2012..
48. **[^](#cite_ref-51)** Elvira Mayordomo. ["P versus NP"](http://www.unizar.es/acz/05Publicaciones/Monografias/MonografiasPublicadas/Monografia26/057Mayordomo.pdf) [Archived](https://web.archive.org/web/20120216154228/http://www.unizar.es/acz/05Publicaciones/Monografias/MonografiasPublicadas/Monografia26/057Mayordomo.pdf) 16 February 2012 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) *Monografías de la Real Academia de Ciencias de Zaragoza* 26: 57–68 (2004).
49. **[^](#cite_ref-Agrawal_52-0)** Agrawal, Manindra; Kayal, Neeraj; Saxena, Nitin (2004). ["PRIMES is in P"](http://www.cse.iitk.ac.in/users/manindra/algebra/primality_v6.pdf) (PDF). *[Annals of Mathematics](https://en.wikipedia.org/wiki/Annals_of_Mathematics)*. **160** (2): 781–793. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.4007/annals.2004.160.781](https://doi.org/10.4007%2Fannals.2004.160.781). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [3597229](https://www.jstor.org/stable/3597229). [Archived](https://web.archive.org/web/20060926201057/http://www.cse.iitk.ac.in/users/manindra/algebra/primality_v6.pdf) (PDF) from the original on 26 September 2006.
50. **[^](#cite_ref-53)** [Markoff, John](https://en.wikipedia.org/wiki/John_Markoff) (8 October 2009). ["Prizes Aside, the P-NP Puzzler Has Consequences"](https://www.nytimes.com/2009/10/08/science/Wpolynom.html). *The New York Times*.
51. **[^](#cite_ref-54)** [Gerhard J. Woeginger](https://en.wikipedia.org/wiki/Gerhard_J._Woeginger). ["The P-versus-NP page"](https://wscor.win.tue.nl/woeginger/P-versus-NP.htm). Retrieved 24 June 2018.
52. **[^](#cite_ref-NYT2010_55-0)** Markoff, John (16 August 2010). ["Step 1: Post Elusive Proof. Step 2: Watch Fireworks"](https://www.nytimes.com/2010/08/17/science/17proof.html?_r=1). *The New York Times*. Retrieved 20 September 2010.
53. **[^](#cite_ref-56)** Geere, Duncan (26 April 2012). ["'Travelling Salesman' movie considers the repercussions if P equals NP"](https://www.wired.co.uk/news/archive/2012-04/26/travelling-salesman). *Wired UK*. Retrieved 26 April 2012.
54. **[^](#cite_ref-57)** Hardesty, Larry (29 October 2009). ["Explained: P vs. NP"](https://news.mit.edu/2009/explainer-pnp).
55. **[^](#cite_ref-58)** Shadia, Ajam (13 September 2013). ["What is the P vs. NP problem? Why is it important?"](http://science.nd.edu/news/what-is-the-p-vs-np-problem-and-why-is-it-important/).
56. **[^](#cite_ref-59)** Gasarch, William (7 October 2013). ["P vs NP is Elementary? No— P vs NP is ON Elementary"](https://blog.computationalcomplexity.org/2013/10/p-vs-np-is-elementary-no-p-vs-np-is-on.html). *blog.computationalcomplexity.org*. Retrieved 6 July 2018.
57. **[^](#cite_ref-60)** Kirkpatrick, Noel (4 October 2013). ["Elementary Solve for X Review: Sines of Murder"](http://www.tv.com/news/elementary-solve-for-x-review-sines-of-murder-138084402962/). *TV.com*. Retrieved 6 July 2018.
58. ^ [***a***](#cite_ref-W2019_61-0) [***b***](#cite_ref-W2019_61-1) [Wigderson, Avi](https://en.wikipedia.org/wiki/Avi_Wigderson) (2019). *Mathematics and Computation: A Theory Revolutionizing Technology and Science*. Princeton University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-691-18913-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-691-18913-0).
59. **[^](#cite_ref-62)** L. G. Valiant. *Completeness classes in algebra.* In Proceedings of 11th ACM STOC, pp. 249–261, 1979.

* [Cormen, Thomas](https://en.wikipedia.org/wiki/Thomas_Cormen) (2001). [*Introduction to Algorithms*](https://en.wikipedia.org/wiki/Introduction_to_Algorithms). Cambridge, Massachusetts: [MIT Press](https://en.wikipedia.org/wiki/MIT_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-03293-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-03293-3).
* [Garey, Michael R.](https://en.wikipedia.org/wiki/Michael_Garey); [Johnson, David S.](https://en.wikipedia.org/wiki/David_S._Johnson) (1979). *[Computers and Intractability: A Guide to the Theory of NP-Completeness](https://en.wikipedia.org/wiki/Computers_and_Intractability)*. Series of Books in the Mathematical Sciences (1st ed.). New York: [W. H. Freeman and Company](https://en.wikipedia.org/wiki/W._H._Freeman_and_Company). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780716710455](https://en.wikipedia.org/wiki/Special:BookSources/9780716710455). [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [0519066](https://mathscinet.ams.org/mathscinet-getitem?mr=0519066). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [247570676](https://search.worldcat.org/oclc/247570676).
* [Goldreich, Oded](https://en.wikipedia.org/wiki/Oded_Goldreich) (2010). *P, NP, and NP-Completeness*. Cambridge, England: [Cambridge University Press](https://en.wikipedia.org/wiki/Cambridge_University_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-521-12254-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-12254-2). [Online drafts](http://www.wisdom.weizmann.ac.il/~oded/bc-drafts.html)
* [Immerman, Neil](https://en.wikipedia.org/wiki/Neil_Immerman) (1987). "Languages that Capture Complexity Classes". *[SIAM Journal on Computing](https://en.wikipedia.org/wiki/SIAM_Journal_on_Computing)*. **16** (4): 760–778. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.75.3035](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.75.3035). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/0216051](https://doi.org/10.1137%2F0216051).
* [Papadimitriou, Christos](https://en.wikipedia.org/wiki/Christos_Papadimitriou) (1994). *Computational Complexity*. Boston, Massachusetts: [Addison-Wesley](https://en.wikipedia.org/wiki/Addison-Wesley). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-53082-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-53082-7).