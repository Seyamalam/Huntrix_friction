# Turing machine - Wikipedia

Source: https://en.wikipedia.org/wiki/Turing_machine

---

Computation model defining an abstract machine

[![A physical Turing machine constructed by Mike Davey](//upload.wikimedia.org/wikipedia/commons/thumb/0/03/Turing_Machine_Model_Davey_2012.jpg/330px-Turing_Machine_Model_Davey_2012.jpg)](https://en.wikipedia.org/wiki/File:Turing_Machine_Model_Davey_2012.jpg)

A physical Turing machine model constructed by Mike Davey. A true Turing machine would need to be provided more memory (tape) if and when required; physical models can only have a finite amount.

Classes of automata

(Clicking on each layer links to the article on that subject.)

A **Turing machine** is a [mathematical model of computation](https://en.wikipedia.org/wiki/Mathematical_model_of_computation) describing an [abstract machine](https://en.wikipedia.org/wiki/Abstract_machine) that manipulates symbols on a strip of tape according to a table of rules. Despite the model's simplicity, it is capable of implementing any [computer algorithm](https://en.wikipedia.org/wiki/Computer_algorithm).

The machine operates on an infinite memory tape divided into [discrete](https://en.wikipedia.org/wiki/Discrete_mathematics) cells, each of which can hold a single symbol drawn from a [finite set](https://en.wikipedia.org/wiki/Finite_set) of symbols called the [alphabet](https://en.wikipedia.org/wiki/Alphabet_(formal_languages)) of the machine. It has a "head" that, at any point in the machine's operation, is positioned over one of these cells, and a "state" selected from a finite set of states. At each step of its operation, the head reads the symbol in its cell. Then, based on the symbol and the machine's own present state, the machine writes a symbol into the same cell, and moves the head one step to the left or the right, or halts the computation. The choice of which replacement symbol to write, which direction to move the head, and whether to halt is based on a finite table that specifies what to do for each combination of the current state and the symbol that is read.
As with a real computer program, it is possible for a Turing machine to go into an [infinite loop](https://en.wikipedia.org/wiki/Infinite_loop) which will never halt.

The Turing machine was invented in 1936 by [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing), who called it an "a-machine" (automatic machine). It was Turing's doctoral advisor, [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church), who later coined the term "Turing machine" in a review. With this model, Turing was able to answer two questions in the negative:

* Does a machine exist that can determine whether any arbitrary machine on its tape is "circular" (e.g., freezes, or fails to continue its computational task)?
* Does a machine exist that can determine whether any arbitrary machine on its tape ever prints a given symbol?

Thus by providing a mathematical description of a very simple device capable of arbitrary computations, he was able to prove properties of computation in general—and in particular, the [uncomputability](https://en.wikipedia.org/wiki/Computability) of the *[Entscheidungsproblem](https://en.wikipedia.org/wiki/Entscheidungsproblem)*, or 'decision problem' (whether every mathematical statement is provable or disprovable).

Turing machines proved the existence of fundamental limitations on the power of mechanical computation.

While they can express arbitrary computations, their minimalist design makes them too slow for computation in practice: real-world [computers](https://en.wikipedia.org/wiki/Computer) are based on different designs that, unlike Turing machines, use [random-access memory](https://en.wikipedia.org/wiki/Random-access_memory).

[Turing completeness](https://en.wikipedia.org/wiki/Turing_completeness) is the ability for a [model of computation](https://en.wikipedia.org/wiki/Model_of_computation) or a system of instructions to simulate a Turing machine. A programming language that is Turing complete is theoretically capable of expressing all tasks accomplishable by computers; nearly all programming languages are Turing complete if the limitations of finite memory are ignored.

A Turing machine is an idealised model of a [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit) (CPU) that controls all data manipulation done by a computer, with the canonical machine using sequential memory to store data. Typically, the sequential memory is represented as a tape of infinite length on which the machine can perform read and write operations.

In the context of [formal language](https://en.wikipedia.org/wiki/Formal_language) theory, a Turing machine ([automaton](https://en.wikipedia.org/wiki/Automaton)) is capable of [enumerating](https://en.wikipedia.org/wiki/Enumeration) some arbitrary subset of valid strings of an [alphabet](https://en.wikipedia.org/wiki/Alphabet_(formal_languages)). A set of strings which can be enumerated in this manner is called a [recursively enumerable language](https://en.wikipedia.org/wiki/Recursively_enumerable_language). The Turing machine can equivalently be defined as a model that recognises valid input strings, rather than enumerating output strings.

Given a Turing machine *M* and an arbitrary string *s*, it is generally not possible to decide whether *M* will eventually produce *s*. This is due to the fact that the [halting problem](https://en.wikipedia.org/wiki/Halting_problem) is unsolvable, which has major implications for the theoretical limits of computing.

A Turing machine that is able to simulate any other Turing machine is called a [universal Turing machine](https://en.wikipedia.org/wiki/Universal_Turing_machine) (UTM, or simply a universal machine). Another mathematical formalism, [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus), with a similar "universal" nature was introduced by [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church). Church's work intertwined with Turing's to form the basis for the [Church–Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis). This thesis states that Turing machines, lambda calculus, and other similar formalisms of [computation](https://en.wikipedia.org/wiki/Computation) do indeed capture the informal notion of [effective methods](https://en.wikipedia.org/wiki/Effective_method) in [logic](https://en.wikipedia.org/wiki/Logic) and [mathematics](https://en.wikipedia.org/wiki/Mathematics) and thus provide a model through which one can reason about an [algorithm](https://en.wikipedia.org/wiki/Algorithm) or "mechanical procedure" in a mathematically precise way without being tied to any particular formalism. Studying the [abstract properties](https://en.wikipedia.org/wiki/Abstract_machine) of Turing machines has yielded many insights into [computer science](https://en.wikipedia.org/wiki/Computer_science), [computability theory](https://en.wikipedia.org/wiki/Computability_theory), and [complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory).

### Physical description

[[edit](/w/index.php?title=Turing_machine&action=edit&section=2)]

In his 1948 essay, "Intelligent Machinery", Turing wrote that his machine consists of:

> ...an unlimited memory capacity obtained in the form of an infinite tape marked out into squares, on each of which a symbol could be printed. At any moment there is one symbol in the machine; it is called the scanned symbol. The machine can alter the scanned symbol, and its behavior is in part determined by that symbol, but the symbols on the tape elsewhere do not affect the behavior of the machine. However, the tape can be moved back and forth through the machine, this being one of the elementary operations of the machine. Any symbol on the tape may therefore eventually have an innings.

The Turing machine mathematically models a machine that mechanically operates on a tape. On this tape are symbols, which the machine can read and write, one at a time, using a tape head. Operation is fully determined by a finite set of elementary instructions such as "in state 42, if the symbol seen is 0, write a 1; if the symbol seen is 1, change into state 17; in state 17, if the symbol seen is 0, write a 1 and change to state 6;" etc. In the original article ("[On Computable Numbers, with an Application to the Entscheidungsproblem](https://en.wikipedia.org/wiki/On_Computable_Numbers,_with_an_Application_to_the_Entscheidungsproblem)", see also [references below](#The_Entscheidungsproblem_(the_"decision_problem"):_Hilbert's_tenth_question_of_1900)), Turing imagines not a mechanism, but a person whom he calls the "computer", who executes these deterministic mechanical rules slavishly (or as Turing puts it, "in a desultory manner").

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/09/Turing_machine_2a.svg/330px-Turing_machine_2a.svg.png)](https://en.wikipedia.org/wiki/File:Turing_machine_2a.svg)

The head is always over a particular square of the tape; only a finite stretch of squares is shown. The state of the machine (q4) is shown over the square to be processed. (Drawing after Kleene (1952) p. 375.)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Turing_machine_2b.svg/330px-Turing_machine_2b.svg.png)](https://en.wikipedia.org/wiki/File:Turing_machine_2b.svg)

Here, the internal state (q1) is shown inside the head, and the illustration describes the tape as being infinite and pre-filled with "0", the symbol serving as blank. The system's full state (its "complete configuration") consists of the internal state, any non-blank symbols on the tape (in this illustration "11B"), and the position of the head relative to those symbols including blanks, i.e. "011B". (Drawing after Minsky (1967) p. 121.)

More explicitly, a Turing machine consists of:

* A *tape* divided into cells, one next to the other. Each cell contains a symbol from some finite alphabet. The alphabet contains a special blank symbol (here written as '0') and one or more other symbols. The tape is assumed to be arbitrarily extendable to the left and to the right, so that the Turing machine is always supplied with as much tape as it needs for its computation. Cells that have not been written before are assumed to be filled with the blank symbol. In some models the tape has a left end marked with a special symbol; the tape extends or is indefinitely extensible to the right.
* A *head* that can read and write symbols on the tape and move the tape left and right one (and only one) cell at a time. In some models the head moves and the tape is stationary.
* A *state register* that stores the state of the Turing machine, one of finitely many. Among these is the special *start state* with which the state register is initialised. These states, writes Turing, replace the "state of mind" a person performing computations would ordinarily be in.
* A finite *table* of instructions that, given the *state*(qi) the machine is currently in *and* the *symbol*(aj) it is reading on the tape (the symbol currently under the head), tells the machine to do the following *in sequence* (for the 5-[tuple](https://en.wikipedia.org/wiki/Tuple) models):

1. Either erase or write a symbol (replacing aj with aj1).
2. Move the head (which is described by dk and can have values: 'L' for one step left *or* 'R' for one step right *or* 'N' for staying in the same place).
3. Assume the same or a *new state* as prescribed (go to state qi1).

In the 4-tuple models, erasing or writing a symbol (aj1) and moving the head left or right (dk) are specified as separate instructions. The table tells the machine to (ia) erase or write a symbol *or* (ib) move the head left or right, *and then* (ii) assume the same or a new state as prescribed, but not both actions (ia) and (ib) in the same instruction. In some models, if there is no entry in the table for the current combination of symbol and state, then the machine will halt; other models require all entries to be filled.

Every part of the machine (i.e. its state, symbol-collections, and used tape at any given time) and its actions (such as printing, erasing and tape motion) is *finite*, *discrete* and *distinguishable*; it is the unlimited amount of tape and runtime that gives it an unbounded amount of [storage space](https://en.wikipedia.org/wiki/Computer_storage).

Following Hopcroft & Ullman (1979), a (one-tape) Turing machine can be formally defined as a 7-[tuple](https://en.wikipedia.org/wiki/Tuple) 



M
=
⟨
Q
,
Γ
,
b
,
Σ
,
δ
,

q

0
,
F
⟩
{\displaystyle M=\langle Q,\Gamma ,b,\Sigma ,\delta ,q\_{0},F\rangle }
![{\displaystyle M=\langle Q,\Gamma ,b,\Sigma ,\delta ,q_{0},F\rangle }](https://wikimedia.org/api/rest_v1/media/math/render/svg/8734c2a9963bd7ee2ba7f71509043fe479f79ec6) where

* Γ
  {\displaystyle \Gamma }
  ![{\displaystyle \Gamma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/4cfde86a3f7ec967af9955d0988592f0693d2b19) is a finite, non-empty set of *tape alphabet symbols*;
* b
  ∈
  Γ
  {\displaystyle b\in \Gamma }
  ![{\displaystyle b\in \Gamma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a94b130b695e9ebf9cee136d1f97070bc9ec9079) is the *blank symbol* (the only symbol allowed to occur on the tape infinitely often at any step during the computation);
* Σ
  ⊆
  Γ
  ∖
  {
  b
  }
  {\displaystyle \Sigma \subseteq \Gamma \setminus \{b\}}
  ![{\displaystyle \Sigma \subseteq \Gamma \setminus \{b\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a84a25bee52e467e87e9bc61522e8f63eee873c8) is the set of *input symbols*, that is, the set of symbols allowed to appear in the initial tape contents;
* Q
  {\displaystyle Q}
  ![{\displaystyle Q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8752c7023b4b3286800fe3238271bbca681219ed) is a finite, non-empty set of *states*;
* q

  0
  ∈
  Q
  {\displaystyle q\_{0}\in Q}
  ![{\displaystyle q_{0}\in Q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ad0e7ce55cfad982929c93e29139a65108c37263) is the *initial state*;
* F
  ⊆
  Q
  {\displaystyle F\subseteq Q}
  ![{\displaystyle F\subseteq Q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9ada8f098adcf02f7a674d2a5f2dda5e4917881e) is the set of *final states* or *accepting states*. The initial tape contents is said to be *accepted* by 



  M
  {\displaystyle M}
  ![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd) if it eventually halts in a state from 



  F
  {\displaystyle F}
  ![{\displaystyle F}](https://wikimedia.org/api/rest_v1/media/math/render/svg/545fd099af8541605f7ee55f08225526be88ce57).
* δ
  :
  (
  Q
  ∖
  F
  )
  ×
  Γ
  ⇀
  Q
  ×
  Γ
  ×
  {
  L
  ,
  R
  }
  {\displaystyle \delta :(Q\setminus F)\times \Gamma \rightharpoonup Q\times \Gamma \times \{L,R\}}
  ![{\displaystyle \delta :(Q\setminus F)\times \Gamma \rightharpoonup Q\times \Gamma \times \{L,R\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4ccd3a9bb89e2f9036904a20f1f26b1e5f8e4ced) is a [partial function](https://en.wikipedia.org/wiki/Partial_function) called the *transition function*, where L is left shift, R is right shift. If 



  δ
  {\displaystyle \delta }
  ![{\displaystyle \delta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c5321cfa797202b3e1f8620663ff43c4660ea03a) is not defined on the current state and the current tape symbol, then the machine halts; intuitively, the transition function specifies the next state transited from the current state, which symbol to overwrite the current symbol pointed by the head, and the next head movement.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/8/86/Busy_Beaver_3_State.png/250px-Busy_Beaver_3_State.png)](https://en.wikipedia.org/wiki/File:Busy_Beaver_3_State.png)

3-state Busy Beaver. Black icons represent location and state of head; square colors represent 1s (orange) and 0s (white); time progresses vertically from the top until the **HALT** state at the bottom.

A variant allows "no shift", say N, as a third element of the set of directions 



{
L
,
R
}
{\displaystyle \{L,R\}}
![{\displaystyle \{L,R\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3fa70341e174fc7b92435ef5fd38485289dad2bf).

The 7-tuple for the 3-state [busy beaver](https://en.wikipedia.org/wiki/Busy_beaver) looks like this (see more about this busy beaver at [Turing machine examples](https://en.wikipedia.org/wiki/Turing_machine_examples)):

* Q
  =
  {


  A
  ,


  B
  ,


  C
  ,


  HALT
  }
  {\displaystyle Q=\{{\mbox{A}},{\mbox{B}},{\mbox{C}},{\mbox{HALT}}\}}
  ![{\displaystyle Q=\{{\mbox{A}},{\mbox{B}},{\mbox{C}},{\mbox{HALT}}\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ca7841fdbf1c2f798fee70484845123c0d9642c0) (states);
* Γ
  =
  {
  0
  ,
  1
  }
  {\displaystyle \Gamma =\{0,1\}}
  ![{\displaystyle \Gamma =\{0,1\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a0f6d2eadf3be5de756868fcf5b0dcfa96c1c6ff) (tape alphabet symbols);
* b
  =
  0
  {\displaystyle b=0}
  ![{\displaystyle b=0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/19206e7d4dab695ccb34c502eff0741e98dbdfc2) (blank symbol);
* Σ
  =
  {
  1
  }
  {\displaystyle \Sigma =\{1\}}
  ![{\displaystyle \Sigma =\{1\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b2bce9d3587125ba3f9e7ff2686a01e620cd65c5) (input symbols);
* q

  0
  =


  A
  {\displaystyle q\_{0}={\mbox{A}}}
  ![{\displaystyle q_{0}={\mbox{A}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b13943edfd4d3210ae035d57d5b1c93b772ff2cb) (initial state);
* F
  =
  {


  HALT
  }
  {\displaystyle F=\{{\mbox{HALT}}\}}
  ![{\displaystyle F=\{{\mbox{HALT}}\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdbf4f456dbaeb9e5cc93fd415b514432d71d6d) (final states);
* δ
  =
  {\displaystyle \delta =}
  ![{\displaystyle \delta =}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3e48e3fedfe173df811d73dfd85c37d1df0b707e) see state-table below (transition function).

Initially all tape cells are marked with 



0
{\displaystyle 0}
![{\displaystyle 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2aae8864a3c1fec9585261791a809ddec1489950).

| Tape symbol | Current state A | Current state B | Current state C |
| --- | --- | --- | --- |
| Write symbol | Move tape | Next state | Write symbol | Move tape | Next state | Write symbol | Move tape | Next state |
| 0 | 1 | R | B | 1 | L | A | 1 | L | B |
| 1 | 1 | L | C | 1 | R | B | 1 | R | HALT |

## Additional details required to visualise or implement Turing machines

[[edit](/w/index.php?title=Turing_machine&action=edit&section=5)]

In the words of van Emde Boas (1990): "The set-theoretical object [his formal seven-tuple description similar to the above] provides only partial information on how the machine will behave and what its computations will look like."

For instance,

* There will need to be many decisions on what the symbols actually look like, and a failproof way of reading and writing symbols indefinitely.
* The shift left and shift right operations may shift the tape head across the tape, but when actually building a Turing machine it is more practical to make the tape slide back and forth under the head instead.
* The tape can be finite, and automatically extended with blanks as needed (which is closest to the mathematical definition), but it is more common to think of it as stretching infinitely at one or both ends and being pre-filled with blanks except on the explicitly given finite fragment the tape head is on (this is, of course, not implementable in practice). The tape *cannot* be fixed in length, since that would not correspond to the given definition and would seriously limit the range of computations the machine can perform to those of a [linear bounded automaton](https://en.wikipedia.org/wiki/Linear_bounded_automaton) if the tape was proportional to the input size, or [finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine) if it was strictly fixed-length.

### Alternative definitions

[[edit](/w/index.php?title=Turing_machine&action=edit&section=6)]

Definitions in literature sometimes differ slightly, to make arguments or proofs easier or clearer, but this is always done in such a way that the resulting machine has the same computational power. For example, the set could be changed from 



{
L
,
R
}
{\displaystyle \{L,R\}}
![{\displaystyle \{L,R\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3fa70341e174fc7b92435ef5fd38485289dad2bf) to 



{
L
,
R
,
N
}
{\displaystyle \{L,R,N\}}
![{\displaystyle \{L,R,N\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06d874f3c83e29f5197d4217954b28a31f29950d), where *N* ("None" or "No-operation") would allow the machine to stay on the same tape cell instead of moving left or right. This would not increase the machine's computational power.

The most common convention represents each "Turing instruction" in a "Turing table" by one of nine 5-tuples, per the convention of Turing/Davis (Turing (1936) and Davis (2000)):

:   (definition 1): **(qi, Sj, Sk/E/N, L/R/N, qm)**

    :   **(** current state **qi** **,** symbol scanned **Sj** **,** print symbol **Sk**/erase **E**/none **N** **,** move\_tape\_one\_square left **L**/right **R**/none **N** **,** new state **qm** **)**

Other authors (Minsky (1967), Hopcroft and Ullman (1979), Stone (1972), adopt a different convention, with new state **qm** listed immediately after the scanned symbol Sj:

:   (definition 2): **(qi, Sj, qm, Sk/E/N, L/R/N)**

    :   **(** current state **qi** **,** symbol scanned **Sj** **,** new state **qm** **,** print symbol **Sk**/erase **E**/none **N** **,** move\_tape\_one\_square left **L**/right **R**/none **N** **)**

For the remainder of this article "definition 1" (the Turing/Davis convention) will be used.

| Current state | Scanned symbol | Print symbol | Move tape | Final (i.e. next) state | 5-tuples |
| --- | --- | --- | --- | --- | --- |
| A | 0 | 1 | R | B | ( A , 0, 1, R, B ) |
| A | 1 | 1 | L | C | ( A , 1, 1, L, C ) |
| B | 0 | 1 | L | A | ( B , 0, 1, L, A ) |
| B | 1 | 1 | R | B | ( B , 1, 1, R, B ) |
| C | 0 | 1 | L | B | ( C , 0, 1, L, B ) |
| C | 1 | 1 | N | H | ( C , 1, 1, N, H ) |

In the following table, Turing's original model allowed only the first three lines that he called N1, N2, N3. He allowed for erasure of the "scanned square" by naming a 0th symbol S0 = "erase" or "blank", etc. However, he did not allow for non-printing, so every instruction-line includes "print symbol Sk" or "erase". The abbreviations are Turing's. Subsequent to Turing's original paper in 1936–1937, machine-models have allowed all nine possible types of five-tuples:

|  | Current m-configuration (Turing state) | Tape symbol | Print-operation | Tape-motion | Final m-configuration (Turing state) | 5-tuple | 5-tuple comments | 4-tuple |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| N1 | q i | S j | Print(S k ) | Left L | q m | (q i , S j , S k , L, q m ) | "blank" = S 0 , 1=S 1 , etc. |  |
| N2 | q i | S j | Print(S k ) | Right R | q m | (q i , S j , S k , R, q m ) | "blank" = S 0 , 1=S 1 , etc. |  |
| N3 | q i | S j | Print(S k ) | None N | q m | (q i , S j , S k , N, q m ) | "blank" = S 0 , 1=S 1 , etc. | (q i , S j , S k , q m ) |
| 4 | q i | S j | None N | Left L | q m | (q i , S j , N, L, q m ) |  | (q i , S j , L, q m ) |
| 5 | q i | S j | None N | Right R | q m | (q i , S j , N, R, q m ) |  | (q i , S j , R, q m ) |
| 6 | q i | S j | None N | None N | q m | (q i , S j , N, N, q m ) | Direct "jump" | (q i , S j , N, q m ) |
| 7 | q i | S j | Erase | Left L | q m | (q i , S j , E, L, q m ) |  |  |
| 8 | q i | S j | Erase | Right R | q m | (q i , S j , E, R, q m ) |  |  |
| 9 | q i | S j | Erase | None N | q m | (q i , S j , E, N, q m ) |  | (q i , S j , E, q m ) |

Any Turing table (list of instructions) can be constructed from the above nine 5-tuples. For technical reasons, the three non-printing or "N" instructions (4, 5, 6) can usually be dispensed with. For examples see [Turing machine examples](https://en.wikipedia.org/wiki/Turing_machine_examples).

Less frequently the use of 4-tuples are encountered: these represent a further atomization of the Turing instructions.

The word "state" used in context of Turing machines can be a source of confusion, as it can mean two things. Most commentators after Turing have used "state" to mean the name/designator of the current instruction to be performed—i.e. the contents of the state register. But Turing (1936) made a strong distinction between a record of what he called the machine's "m-configuration", and the machine's (or person's) "state of progress" through the computation—the current state of the total system. What Turing called "the state formula" includes both the current instruction and *all* the symbols on the tape:

> Thus the state of progress of the computation at any stage is completely determined by the note of instructions and the symbols on the tape. That is, the *state of the system* may be described by a single expression (sequence of symbols) consisting of the symbols on the tape followed by Δ (which is supposed to not to appear elsewhere) and then by the note of instructions. This expression is called the "state formula".

— *The Undecidable*, pp. 139–140, emphasis added

Earlier in his paper Turing carried this even further: he gives an example where he placed a symbol of the current "m-configuration" —the instruction's label— beneath the scanned square, together with all the symbols on the tape. He calls it "the *complete configuration*". To print the "complete configuration" on one line, he places the state-label/m-configuration to the *left* of the scanned symbol.

A variant of this is seen in Kleene (1952) where [Kleene](https://en.wikipedia.org/wiki/Stephen_Cole_Kleene) shows how to write the [Gödel number](https://en.wikipedia.org/wiki/G%C3%B6del_number) of a machine's "situation": he places the "m-configuration" symbol q4 over the scanned square in roughly the center of the 6 non-blank squares on the tape (see the Turing-tape figure in this article) and puts it to the *right* of the scanned square. But Kleene refers to "q4" itself as "the machine state". Hopcroft and Ullman call this composite the "instantaneous description" and follow the Turing convention of putting the "current state" (instruction-label, m-configuration) to the *left* of the scanned symbol (p. 149), that is, the instantaneous description is the composite of non-blank symbols to the left, state of the machine, the current symbol scanned by the head, and the non-blank symbols to the right.

*Example: total state of 3-state 2-symbol busy beaver after 3 "moves"* (taken from example "run" in the figure below):

:   :   1**A**1

This means: after three moves the tape has ... 000110000 ... on it, the head is scanning the right-most 1, and the state is *A*. Blanks (in this case represented by "0"s) can be part of the total state as shown here: *B*01; the tape has a single 1 on it, but the head is scanning the 0 ("blank") to its left and the state is *B*.

"State" in the context of Turing machines should be clarified as to which is being described: the current instruction, or the list of symbols on the tape together with the current instruction, or the list of symbols on the tape together with the current instruction placed to the left of the scanned symbol or to the right of the scanned symbol.

| Tape symbol | Current state A | Current state B | Current state C |
| --- | --- | --- | --- |
|  | Write symbol | Move tape | Next state | Write symbol | Move tape | Next state | Write symbol | Move tape | Next state |
| 0 | P | R | B | P | L | A | P | L | B |
| 1 | P | L | C | P | R | B | P | R | HALT |

[![](//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/State_diagram_3_state_busy_beaver_2B.svg/500px-State_diagram_3_state_busy_beaver_2B.svg.png)](https://en.wikipedia.org/wiki/File:State_diagram_3_state_busy_beaver_2B.svg)

The "3-state busy beaver" Turing machine in a [finite-state representation](https://en.wikipedia.org/wiki/Finite-state_machine). Each circle represents a "state" of the table—an "m-configuration" or "instruction". "Direction" of a state *transition* is shown by an arrow. The label (e.g. *0/P,R*) near the outgoing state (at the "tail" of the arrow) specifies the scanned symbol that causes a particular transition (e.g. *0*) followed by a slash */*, followed by the subsequent "behaviors" of the machine, e.g. "*P* *print*" then move tape "*R* *right*". No general accepted format exists. The convention shown is after McClusky (1965), Booth (1967), Hill, and Peterson (1974).

To the right: the above table as expressed as a "state transition" diagram.

Usually large tables are better left as tables (Booth, p. 74). They are more readily simulated by computer in tabular form (Booth, p. 74). However, certain concepts—e.g. machines with "reset" states and machines with repeating patterns (cf. Hill and Peterson p. 244ff)—can be more readily seen when viewed as a drawing.

Whether a drawing represents an improvement on its table must be decided by the reader for the particular context.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Moves_of_a_3-state_Busy_Beaver.jpg/500px-Moves_of_a_3-state_Busy_Beaver.jpg)](https://en.wikipedia.org/wiki/File:Moves_of_a_3-state_Busy_Beaver.jpg)

The evolution of the busy beaver's computation starts at the top and proceeds to the bottom.

The reader should again be cautioned that such diagrams represent a snapshot of their table frozen in time, *not* the course ("trajectory") of a computation *through* time and space. While every time the busy beaver machine "runs" it will always follow the same state-trajectory, this is not true for the "copy" machine that can be provided with variable input "parameters".

The diagram "progress of the computation" shows the three-state busy beaver's "state" (instruction) progress through its computation from start to finish. On the far right is the Turing "complete configuration" (Kleene "situation", Hopcroft–Ullman "instantaneous description") at each step. If the machine were to be stopped and cleared to blank both the "state register" and entire tape, these "configurations" could be used to rekindle a computation anywhere in its progress.

Many machines that might be thought to have more computational capability than a simple universal Turing machine can be shown to have no more power (Hopcroft and Ullman p. 159, cf. Minsky (1967)). They might compute faster, perhaps, or use less memory, or their instruction set might be smaller, but they cannot compute more powerfully (i.e. more mathematical functions). (The [Church–Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis) *hypothesises* this to be true for any kind of machine: that anything that can be "computed" can be computed by some Turing machine.)

A Turing machine is equivalent to a single-stack [pushdown automaton](https://en.wikipedia.org/wiki/Pushdown_automaton) (PDA) that has been made more flexible and concise by relaxing the [last-in-first-out](https://en.wikipedia.org/wiki/LIFO_(computing)) (LIFO) requirement of its stack. In addition, a Turing machine is also equivalent to a two-stack PDA with standard LIFO semantics, by using one stack to model the tape left of the head and the other stack for the tape to the right.

At the other extreme, some very simple models turn out to be [Turing-equivalent](https://en.wikipedia.org/wiki/Turing_completeness), i.e. to have the same computational power as the Turing machine model.

Common equivalent models are the [multi-tape Turing machine](https://en.wikipedia.org/wiki/Multi-tape_Turing_machine), [multi-track Turing machine](https://en.wikipedia.org/wiki/Multi-track_Turing_machine), machines with input and output, and the [*non-deterministic* Turing machine](https://en.wikipedia.org/wiki/Non-deterministic_Turing_machine) (NDTM) as opposed to the *deterministic* Turing machine (DTM) for which the action table has at most one entry for each combination of symbol and state.

[Read-only, right-moving Turing machines](https://en.wikipedia.org/wiki/Read-only_right_moving_Turing_machines) are equivalent to [DFAs](https://en.wikipedia.org/wiki/Deterministic_finite_automaton) (as well as [NFAs](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton) by conversion using the [NFA to DFA conversion](https://en.wikipedia.org/wiki/NFA_to_DFA_conversion) algorithm).

For practical and didactic intentions, the equivalent [register machine](https://en.wikipedia.org/wiki/Register_machine) can be used as a usual [assembly](https://en.wikipedia.org/wiki/Assembly_language) [programming language](https://en.wikipedia.org/wiki/Programming_language).

A relevant question is whether or not the computation model represented by concrete programming languages is Turing equivalent. While the computation of a real computer is based on finite states and thus not capable to simulate a Turing machine, programming languages themselves do not necessarily have this limitation. Kirner et al., 2009 have shown that among the general-purpose programming languages some are Turing complete while others are not. For example, [ANSI C](https://en.wikipedia.org/wiki/ANSI_C) is not Turing complete, as all instantiations of ANSI C (different instantiations are possible as the standard deliberately leaves certain behaviour undefined for legacy reasons) imply a finite-space memory. This is because the size of memory reference data types, called *pointers*, is accessible inside the language. However, other programming languages like [Pascal](https://en.wikipedia.org/wiki/Pascal_(programming_language)) do not have this feature, which allows them to be Turing complete in principle.
It is just Turing complete in principle, as [memory allocation](https://en.wikipedia.org/wiki/Memory_allocation) in a programming language is allowed to fail, which means the programming language can be Turing complete when ignoring failed memory allocations, but the compiled programs executable on a real computer cannot.

## Choice c-machines, oracle o-machines

[[edit](/w/index.php?title=Turing_machine&action=edit&section=10)]

Early in his paper (1936) Turing makes a distinction between an "automatic machine"—its "motion ... completely determined by the configuration" and a "choice machine":

> ...whose motion is only partially determined by the configuration ... When such a machine reaches one of these ambiguous configurations, it cannot go on until some arbitrary choice has been made by an external operator. This would be the case if we were using machines to deal with axiomatic systems.

— *The Undecidable*, p. 118

Turing (1936) does not elaborate further except in a footnote in which he describes how to use an a-machine to "find all the provable formulae of the [Hilbert] calculus" rather than use a choice machine. He "suppose[s] that the choices are always between two possibilities 0 and 1. Each proof will then be determined by a sequence of choices i1, i2, ..., in (i1 = 0 or 1, i2 = 0 or 1, ..., in = 0 or 1), and hence the number 2n + i12n-1 + i22n-2 + ... +in completely determines the proof. The automatic machine carries out successively proof 1, proof 2, proof 3, ..."

This is indeed the technique by which a deterministic (i.e., a-) Turing machine can be used to mimic the action of a [nondeterministic Turing machine](https://en.wikipedia.org/wiki/Nondeterministic_Turing_machine); Turing solved the matter in a footnote and appears to dismiss it from further consideration.

An [oracle machine](https://en.wikipedia.org/wiki/Oracle_machine) or o-machine is a Turing a-machine that pauses its computation at state "**o**" while, to complete its calculation, it "awaits the decision" of "the oracle"—an entity unspecified by Turing "apart from saying that it cannot be a machine" (Turing (1939).

## Universal Turing machines

[[edit](/w/index.php?title=Turing_machine&action=edit&section=11)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Model_of_a_Turing_machine.jpg/250px-Model_of_a_Turing_machine.jpg)](https://en.wikipedia.org/wiki/File:Model_of_a_Turing_machine.jpg)

An implementation of a Turing machine

As Turing wrote in *The Undecidable*, (italics added):

> It is possible to invent a *single machine* which can be used to compute *any* computable sequence. If this machine **U** is supplied with the tape on the beginning of which is written the string of quintuples separated by semicolons of some computing machine **M**, then **U** will compute the same sequence as **M**.

This finding is now taken for granted, but at the time (1936) it was considered astonishing.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*] The model of computation that Turing called his "universal machine"—"**U**" for short—is considered by some to have been the fundamental theoretical breakthrough that led to the notion of the [stored-program computer](https://en.wikipedia.org/wiki/Stored-program_computer)..

> Turing's paper ... contains, in essence, the invention of the modern computer and some of the programming techniques that accompanied it.

In terms of [computational complexity](https://en.wikipedia.org/wiki/Computational_complexity_theory), a multi-tape universal Turing machine need only be slower by [logarithmic](https://en.wikipedia.org/wiki/Logarithm) factor compared to the machines it simulates. This result was obtained in 1966 by F. C. Hennie and [R. E. Stearns](https://en.wikipedia.org/wiki/R._E._Stearns).

## Comparison with real machines

[[edit](/w/index.php?title=Turing_machine&action=edit&section=12)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lego_Turing_Machine.jpg/250px-Lego_Turing_Machine.jpg)](https://en.wikipedia.org/wiki/File:Lego_Turing_Machine.jpg)

A Turing machine realization using [Lego](https://en.wikipedia.org/wiki/Lego) pieces

Turing machines are more powerful than some other kinds of automata, such as [finite-state machines](https://en.wikipedia.org/wiki/Finite-state_machine) and [pushdown automata](https://en.wikipedia.org/wiki/Pushdown_automata). According to the [Church–Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis), they are as powerful as real machines, and are able to execute any operation that a real program can. What is neglected in this statement is that, because a real machine can only have a finite number of *configurations*, it is nothing but a finite-state machine, whereas a Turing machine has an unlimited amount of storage space available for its computations.

There are a number of ways to explain why Turing machines are useful models of real computers:

* Anything a real computer can compute, a Turing machine can also compute. For example: "A Turing machine can simulate any type of subroutine found in programming languages, including recursive procedures and any of the known parameter-passing mechanisms" (Hopcroft and Ullman p. 157). A large enough FSA can also model any real computer, disregarding IO. Thus, a statement about the limitations of Turing machines will also apply to real computers.
* The difference lies only with the ability of a Turing machine to manipulate an unbounded amount of data. However, given a finite amount of time, a Turing machine (like a real machine) can only manipulate a finite amount of data.
* Like a Turing machine, a real machine can have its storage space enlarged as needed, by acquiring more disks or other storage media.
* Descriptions of real machine programs using simpler abstract models are often much more complex than descriptions using Turing machines. For example, a Turing machine describing an algorithm may have a few hundred states, while the equivalent deterministic finite automaton (DFA) on a given real machine has quadrillions. This makes the DFA representation infeasible to analyze.
* Turing machines describe algorithms independent of how much memory they use. There is a limit to the memory possessed by any current machine, but this limit can rise arbitrarily in time. Turing machines allow us to make statements about algorithms which will (theoretically) hold forever, regardless of advances in *conventional* computing machine architecture.
* Algorithms running on Turing-equivalent abstract machines can have arbitrary-precision data types available and never have to deal with unexpected conditions (including, but not limited to, running [out of memory](https://en.wikipedia.org/wiki/Out_of_memory)).

#### Computational complexity theory

[[edit](/w/index.php?title=Turing_machine&action=edit&section=14)]

A limitation of Turing machines is that they do not model the strengths of a particular arrangement well. For instance, modern stored-program computers are actually instances of a more specific form of [abstract machine](https://en.wikipedia.org/wiki/Abstract_machine) known as the [random-access stored-program machine](https://en.wikipedia.org/wiki/Random-access_stored-program_machine) or RASP machine model. Like the universal Turing machine, the RASP stores its "program" in "memory" external to its finite-state machine's "instructions". Unlike the universal Turing machine, the RASP has an infinite number of distinguishable, numbered but unbounded "registers"—memory "cells" that can contain any integer (cf. Elgot and Robinson (1964), Hartmanis (1971), and in particular Cook-Rechow (1973); references at [random-access machine](https://en.wikipedia.org/wiki/Random-access_machine)). The RASP's finite-state machine is equipped with the capability for indirect addressing (e.g., the contents of one register can be used as an address to specify another register); thus the RASP's "program" can address any register in the register-sequence. The upshot of this distinction is that there are computational optimizations that can be performed based on the memory indices, which are not possible in a general Turing machine; thus when Turing machines are used as the basis for bounding running times, a "false lower bound" can be proven on certain algorithms' running times (due to the false simplifying assumption of a Turing machine). An example of this is [binary search](https://en.wikipedia.org/wiki/Binary_search), an algorithm that can be shown to perform more quickly when using the RASP model of computation rather than the Turing machine model.

In the early days of computing, computer use was typically limited to [batch processing](https://en.wikipedia.org/wiki/Batch_processing), i.e., non-interactive tasks, each producing output data from given input data. Computability theory, which studies computability of functions from inputs to outputs, and for which Turing machines were invented, reflects this practice.

Since the 1970s, [interactive](https://en.wikipedia.org/wiki/Interactivity) use of computers became much more common. In principle, it is possible to model this by having an external agent read from the tape and write to it at the same time as a Turing machine, but this rarely matches how interaction actually happens; therefore, when describing interactivity, alternatives such as [I/O automata](https://en.wikipedia.org/wiki/Input/output_automaton) are usually preferred.

## Comparison with the arithmetic model of computation

[[edit](/w/index.php?title=Turing_machine&action=edit&section=16)]

The [arithmetic model of computation](https://en.wikipedia.org/wiki/Arithmetic_model_of_computation) differs from the Turing model in two aspects:

* In the arithmetic model, every real number requires a single memory cell, whereas in the Turing model the storage size of a real number depends on the number of bits required to represent it.
* In the arithmetic model, every basic arithmetic operation on real numbers (addition, subtraction, multiplication and division) can be done in a single step, whereas in the Turing model the run-time of each arithmetic operation depends on the length of the operands.

Some algorithms run in polynomial time in one model but not in the other one. For example:

* The [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm) runs in polynomial time in the Turing model, but not in the arithmetic model.
* The algorithm that reads *n* numbers and then computes 




  2


  2

  n
  {\displaystyle 2^{2^{n}}}
  ![{\displaystyle 2^{2^{n}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6bcc9417763ad5d68870290ddaa2ca025ffdaf85) by [repeated squaring](https://en.wikipedia.org/wiki/Repeated_squaring) runs in polynomial time in the Arithmetic model, but not in the Turing model. This is because the number of bits required to represent the outcome is exponential in the input size.

However, if an algorithm runs in polynomial time in the arithmetic model, and in addition, the binary length of all involved numbers is polynomial in the length of the input, then it is always polynomial-time in the Turing model. Such an algorithm is said to run in [strongly polynomial time](https://en.wikipedia.org/wiki/Strongly_polynomial).

### Historical background: computational machinery

[[edit](/w/index.php?title=Turing_machine&action=edit&section=18)]

[Robin Gandy](https://en.wikipedia.org/wiki/Robin_Gandy) (1919–1995)—a student of Alan Turing (1912–1954), and his lifelong friend—traces the lineage of the notion of "calculating machine" back to [Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage) (circa 1834) and actually proposes "Babbage's Thesis":

> *That the whole of development and operations of analysis are now capable of being executed by machinery*.

— (italics in Babbage as cited by Gandy)

Gandy's analysis of Babbage's [analytical engine](https://en.wikipedia.org/wiki/Analytical_engine) describes the following five operations (cf. p. 52–53):

1. The arithmetic functions +, −, ×, where − indicates "proper" subtraction: *x* − *y* = 0 if *y* ≥ *x*.
2. Any sequence of operations is an operation.
3. Iteration of an operation (repeating n times an operation P).
4. Conditional iteration (repeating n times an operation P conditional on the "success" of test T).
5. Conditional transfer (i.e., conditional "[goto](https://en.wikipedia.org/wiki/Goto)").

Gandy states that "the functions which can be calculated by (1), (2), and (4) are precisely those which are [Turing computable](https://en.wikipedia.org/wiki/Turing_computable)." He cites other proposals for "universal calculating machines" including those of [Percy Ludgate](https://en.wikipedia.org/wiki/Percy_Ludgate) (1909), [Leonardo Torres Quevedo](https://en.wikipedia.org/wiki/Leonardo_Torres_Quevedo) (1914), [Maurice d'Ocagne](https://en.wikipedia.org/wiki/Maurice_d%27Ocagne) (1922), [Louis Couffignal](https://en.wikipedia.org/wiki/Louis_Couffignal) (1933), [Vannevar Bush](https://en.wikipedia.org/wiki/Vannevar_Bush) (1936), [Howard Aiken](https://en.wikipedia.org/wiki/Howard_Aiken) (1937). However:

> … the emphasis is on programming a fixed iterable sequence of arithmetical operations. The fundamental importance of conditional iteration and conditional transfer for a general theory of calculating machines is not recognized…

### The Entscheidungsproblem (the "decision problem"): Hilbert's tenth question of 1900

[[edit](/w/index.php?title=Turing_machine&action=edit&section=19)]

With regard to [Hilbert's problems](https://en.wikipedia.org/wiki/Hilbert%27s_problems) posed by the famous mathematician [David Hilbert](https://en.wikipedia.org/wiki/David_Hilbert) in 1900, an aspect of [problem #10](https://en.wikipedia.org/wiki/Hilbert%27s_tenth_problem) had been floating about for almost 30 years before it was framed precisely. Hilbert's original expression for No. 10 is as follows:

> *10. Determination of the solvability of a Diophantine equation*. Given a [Diophantine equation](https://en.wikipedia.org/wiki/Diophantine_equation) with any number of unknown quantities and with rational integral coefficients: To devise a process according to which it can be determined in a finite number of operations whether the equation is solvable in rational integers.
> The Entscheidungsproblem [decision problem for [first-order logic](https://en.wikipedia.org/wiki/First-order_logic)] is solved when we know a procedure that allows for any given logical expression to decide by finitely many operations its validity or satisfiability ... The Entscheidungsproblem must be considered the main problem of mathematical logic.

— quoted, with this translation and the original German, in Dershowitz and Gurevich, 2008

By 1922, this notion of "[Entscheidungsproblem](https://en.wikipedia.org/wiki/Entscheidungsproblem)" had developed a bit, and [H. Behmann](https://en.wikipedia.org/wiki/Heinrich_Behmann) stated that

> ... most general form of the Entscheidungsproblem [is] as follows:
>
> > A quite definite generally applicable prescription is required which will allow one to decide in a finite number of steps the truth or falsity of a given purely logical assertion ...

— Gandy quoting Behmann

> Behmann remarks that ... the general problem is equivalent to the problem of deciding which mathematical propositions are true.

> If one were able to solve the Entscheidungsproblem then one would have a "procedure for solving many (or even all) mathematical problems".

By the 1928 international congress of mathematicians, Hilbert "made his questions quite precise. First, was mathematics *[complete](https://en.wikipedia.org/wiki/Completeness_(logic))* ... Second, was mathematics *[consistent](https://en.wikipedia.org/wiki/Consistency_proof)* ... And thirdly, was mathematics *[decidable](https://en.wikipedia.org/wiki/Decidability_(logic))*?" The first two questions were answered in 1930 by [Kurt Gödel](https://en.wikipedia.org/wiki/Kurt_G%C3%B6del) at the very same meeting where Hilbert delivered his retirement speech (much to the chagrin of Hilbert); the third—the Entscheidungsproblem—had to wait until the mid-1930s.

The problem was that an answer first required a precise definition of "definite general applicable prescription", which Princeton professor [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church) would come to call "[effective calculability](https://en.wikipedia.org/wiki/Effective_calculability)", and in 1928 no such definition existed. But over the next 6–7 years [Emil Post](https://en.wikipedia.org/wiki/Emil_Post) developed his definition of a worker moving from room to room writing and erasing marks per a list of instructions, as did Church and his two students [Stephen Kleene](https://en.wikipedia.org/wiki/Stephen_Kleene) and [J. B. Rosser](https://en.wikipedia.org/wiki/J._B._Rosser) by use of Church's lambda-calculus and Gödel's [recursion theory](https://en.wikipedia.org/wiki/Recursion_theory) (1934). Church's paper (published 15 April 1936) showed that the Entscheidungsproblem was indeed "undecidable" and beat Turing to the punch by almost a year (Turing's paper submitted 28 May 1936, published January 1937). In the meantime, Emil Post submitted a brief paper in the fall of 1936, so Turing at least had priority over Post. While Church refereed Turing's paper, Turing had time to study Church's paper and add an Appendix where he sketched a proof that Church's lambda-calculus and his machines would compute the same functions.

> But what Church had done was something rather different, and in a certain sense weaker. ... the Turing construction was more direct, and provided an argument from first principles, closing the gap in Church's demonstration.

And Post had only proposed a definition of [calculability](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis) and criticised Church's "definition", but had proved nothing.

### Alan Turing's a-machine

[[edit](/w/index.php?title=Turing_machine&action=edit&section=20)]

In the spring of 1935, Turing as a young Master's student at [King's College, Cambridge](https://en.wikipedia.org/wiki/King%27s_College,_Cambridge), took on the challenge; he had been stimulated by the lectures of the logician [M. H. A. Newman](https://en.wikipedia.org/wiki/M._H._A._Newman) "and learned from them of Gödel's work and the Entscheidungsproblem ... Newman used the word 'mechanical' ... In his obituary of Turing 1955 Newman writes:

> To the question 'what is a "mechanical" process?' Turing returned the characteristic answer 'Something that can be done by a machine' and he embarked on the highly congenial task of analysing the general notion of a computing machine.

Gandy states that:

> I suppose, but do not know, that Turing, right from the start of his work, had as his goal a proof of the undecidability of the Entscheidungsproblem. He told me that the 'main idea' of the paper came to him when he was lying in Grantchester meadows in the summer of 1935. The 'main idea' might have either been his analysis of computation or his realization that there was a universal machine, and so a [diagonal argument](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument) to prove unsolvability.

While Gandy believed that Newman's statement above is "misleading", this opinion is not shared by all. Turing had a lifelong interest in machines: "Alan had dreamt of inventing typewriters as a boy; [his mother] Mrs. Turing had a typewriter; and he could well have begun by asking himself what was meant by calling a typewriter 'mechanical'" (Hodges p. 96). While at Princeton pursuing his PhD, Turing built a Boolean-logic multiplier (see below). His PhD thesis, titled "[Systems of Logic Based on Ordinals](https://en.wikipedia.org/wiki/Systems_of_Logic_Based_on_Ordinals)", contains the following definition of "a computable function":

> It was stated above that 'a function is effectively calculable if its values can be found by some purely mechanical process'. We may take this statement literally, understanding by a purely mechanical process one which could be carried out by a machine. It is possible to give a mathematical description, in a certain normal form, of the structures of these machines. The development of these ideas leads to the author's definition of a computable function, and to an identification of computability with effective calculability. It is not difficult, though somewhat laborious, to prove that these three definitions [the 3rd is the λ-calculus] are equivalent.

Alan Turing invented the "a-machine" (automatic machine) in 1936. Turing submitted his paper on 31 May 1936 to the London Mathematical Society for its *Proceedings*, but it was published in early 1937 and offprints were available in February 1937. It was Turing's doctoral advisor, [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church), who later coined the term "Turing machine" in a review. With this model, Turing was able to answer two questions in the negative:

* Does a machine exist that can determine whether any arbitrary machine on its tape is "circular" (e.g., freezes, or fails to continue its computational task)?
* Does a machine exist that can determine whether any arbitrary machine on its tape ever prints a given symbol?

Thus by providing a mathematical description of a very simple device capable of arbitrary computations, he was able to prove properties of computation in general—and in particular, the [uncomputability](https://en.wikipedia.org/wiki/Computability) of the *[Entscheidungsproblem](https://en.wikipedia.org/wiki/Entscheidungsproblem)* ('decision problem').

When Turing returned to the UK he ultimately became jointly responsible for breaking the German secret codes created by encryption machines called "The Enigma"; he also became involved in the design of the ACE ([Automatic Computing Engine](https://en.wikipedia.org/wiki/Automatic_Computing_Engine)), "[Turing's] ACE proposal was effectively self-contained, and its roots lay not in the [EDVAC](https://en.wikipedia.org/wiki/EDVAC) [the USA's initiative], but in his own universal machine" (Hodges p. 318). Arguments still continue concerning the origin and nature of what has been named by Kleene (1952) [Turing's Thesis](https://en.wikipedia.org/wiki/Turing%27s_Thesis). But what Turing *did prove* with his computational-machine model appears in his paper "[On Computable Numbers, with an Application to the Entscheidungsproblem](https://en.wikipedia.org/wiki/On_Computable_Numbers,_with_an_Application_to_the_Entscheidungsproblem)" (1937):

> [that] the Hilbert Entscheidungsproblem can have no solution ... I propose, therefore to show that there can be no general process for determining whether a given formula U of the functional calculus K is provable, i.e. that there can be no machine which, supplied with any one U of these formulae, will eventually say whether U is provable.

— from Turing's paper as reprinted in *The Undecidable*, p. 145

Turing's example (his second proof): If one is to ask for a general procedure to tell us: "Does this machine ever print 0", the question is "undecidable".

### 1937–1970: The "digital computer", the birth of "computer science"

[[edit](/w/index.php?title=Turing_machine&action=edit&section=21)]

In 1937, while at Princeton working on his PhD thesis, Turing built a digital (Boolean-logic) multiplier from scratch, making his own electromechanical [relays](https://en.wikipedia.org/wiki/Relays) (Hodges p. 138). "Alan's task was to embody the logical design of a Turing machine in a network of relay-operated switches ..." (Hodges p. 138). While Turing might have been just initially curious and experimenting, quite-earnest work in the same direction was going in Germany by [Konrad Zuse](https://en.wikipedia.org/wiki/Konrad_Zuse) (1938), and in the United States by [Howard Aiken](https://en.wikipedia.org/wiki/Howard_Aiken) and [George Stibitz](https://en.wikipedia.org/wiki/George_Stibitz) (1937); the fruits of their labors were used by both the Axis and Allied militaries in [World War II](https://en.wikipedia.org/wiki/World_War_II) (cf. Hodges p. 298–299). In the early to mid-1950s [Hao Wang](https://en.wikipedia.org/wiki/Hao_Wang_(academic)) and [Marvin Minsky](https://en.wikipedia.org/wiki/Marvin_Minsky) reduced the Turing machine to a simpler form (a precursor to the [Post–Turing machine](https://en.wikipedia.org/wiki/Post%E2%80%93Turing_machine) of [Martin Davis](https://en.wikipedia.org/wiki/Martin_Davis_(mathematician))); simultaneously European researchers were reducing the new-fangled [electronic computer](https://en.wikipedia.org/wiki/Electronic_computer) to a computer-like theoretical object equivalent to what is now being called a "Turing machine". In the late 1950s and early 1960s, the coincidentally parallel developments of Melzak and Lambek (1961), Minsky (1961), and Shepherdson and Sturgis (1961) carried the European work further and reduced the Turing machine to a more friendly, computer-like abstract model called the [counter machine](https://en.wikipedia.org/wiki/Counter_machine); Elgot and Robinson (1964), Hartmanis (1971), Cook and Reckhow (1973) carried this work even further with the [register machine](https://en.wikipedia.org/wiki/Register_machine) and [random-access machine](https://en.wikipedia.org/wiki/Random-access_machine) models—but basically all are just multi-tape Turing machines with an arithmetic-like instruction set.

### 1970–present: as a model of computation

[[edit](/w/index.php?title=Turing_machine&action=edit&section=22)]

Today, the counter, register and random-access machines and their sire the Turing machine continue to be the models of choice for theorists investigating questions in the [theory of computation](https://en.wikipedia.org/wiki/Theory_of_computation). In particular, [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory) makes use of the Turing machine:

> Depending on the objects one likes to manipulate in the computations (numbers like nonnegative integers or alphanumeric strings), two models have obtained a dominant position in machine-based complexity theory:
>
> > *the off-line multitape Turing machine*..., which represents the standard model for string-oriented computation, and
> > the *random access machine (RAM)* as introduced by Cook and Reckhow ..., which models the idealised Von Neumann-style computer.

> Only in the related area of analysis of algorithms this role is taken over by the RAM model.

* [Arithmetical hierarchy](https://en.wikipedia.org/wiki/Arithmetical_hierarchy)
* [Bekenstein bound](https://en.wikipedia.org/wiki/Bekenstein_bound), showing the impossibility of infinite-tape Turing machines of finite size and bounded energy
* [BlooP and FlooP](https://en.wikipedia.org/wiki/BlooP_and_FlooP)
* [Chaitin's constant](https://en.wikipedia.org/wiki/Chaitin%27s_constant) or [Omega (computer science)](https://en.wikipedia.org/wiki/Omega_(computer_science)) for information relating to the halting problem
* [Calculus ratiocinator](https://en.wikipedia.org/wiki/Calculus_ratiocinator)
* [Chinese room](https://en.wikipedia.org/wiki/Chinese_room)
* [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), a Turing-complete cellular automaton
* [Digital infinity](https://en.wikipedia.org/wiki/Digital_infinity)
* *[The Emperor's New Mind](https://en.wikipedia.org/wiki/The_Emperor%27s_New_Mind)*
* [Enumerator (computer science)](https://en.wikipedia.org/wiki/Enumerator_(computer_science))
* [Genetix](https://en.wikipedia.org/wiki/Genetix)
* *[Gödel, Escher, Bach: An Eternal Golden Braid](https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach:_An_Eternal_Golden_Braid)*, a famous book that discusses, among other topics, the Church–Turing thesis
* [Halting problem](https://en.wikipedia.org/wiki/Halting_problem), for more references
* [Harvard architecture](https://en.wikipedia.org/wiki/Harvard_architecture)
* [Imperative programming](https://en.wikipedia.org/wiki/Imperative_programming)
* [Langton's ant](https://en.wikipedia.org/wiki/Langton%27s_ant) and [Turmites](https://en.wikipedia.org/wiki/Turmite), simple two-dimensional analogues of the Turing machine
* [List of things named after Alan Turing](https://en.wikipedia.org/wiki/List_of_things_named_after_Alan_Turing)
* [Modified Harvard architecture](https://en.wikipedia.org/wiki/Modified_Harvard_architecture)
* [Quantum Turing machine](https://en.wikipedia.org/wiki/Quantum_Turing_machine)
* [Claude Shannon](https://en.wikipedia.org/wiki/Claude_Shannon), another leading thinker in information theory
* [Turing machine examples](https://en.wikipedia.org/wiki/Turing_machine_examples)
* [Turing tarpit](https://en.wikipedia.org/wiki/Turing_tarpit), any computing system or language that, despite being Turing complete, is generally considered useless for practical computing
* [Unorganised machine](https://en.wikipedia.org/wiki/Unorganized_machine), for Turing's very early ideas on neural networks
* [Von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture)

1. **[^](#cite_ref-1)** [Minsky (1967](#CITEREFMinsky1967), p. 107) "In his 1936 paper, A. M. Turing defined the class of abstract machines that now bear his name. A Turing machine is a finite-state machine associated with a special kind of environment —its tape— in which it can store (and later recover) sequences of symbols," also [Stone (1972](#CITEREFStone1972), p. 8) where the word "machine" is in quotation marks.
2. **[^](#cite_ref-2)** [Stone (1972](#CITEREFStone1972), p. 8) states: "This "machine" is an abstract mathematical model", also cf. [Sipser (2012](#CITEREFSipser2012), p. 165ff) that describes the "Turing machine model". [Rogers (1987](#CITEREFRogers1987), p. 13) refers to "Turing's characterization", [Boolos, Burgess & Jeffrey (2002](#CITEREFBoolosBurgessJeffrey2002), p. 25) refers to a "specific kind of idealized machine".
3. ^ [***a***](#cite_ref-Sipser-everything-can-do_3-0) [***b***](#cite_ref-Sipser-everything-can-do_3-1) [Sipser (2012](#CITEREFSipser2012), p. 165) observes that "[a] Turing machine can do everything that a real computer can do. Nonetheless, even a Turing machine cannot solve certain problems. In a very real sense, these problems are beyond the theoretical limits of computation."
4. **[^](#cite_ref-4)** Cf. [Sipser (2012](#CITEREFSipser2012), p. 165). Also, [Rogers (1987](#CITEREFRogers1987), p. 13) describes "a paper tape of infinite length in both directions". [Minsky (1967](#CITEREFMinsky1967), p. 118) states "The tape is regarded as infinite in both directions". [Boolos, Burgess & Jeffrey (2002](#CITEREFBoolosBurgessJeffrey2002), p. 25) include the possibility of "there is someone stationed at each end to add extra blank squares as needed".
5. **[^](#cite_ref-5)** Cf. [Rogers (1987](#CITEREFRogers1987), p. 13). Other authors use the word "square" e.g. [Boolos, Burgess & Jeffrey (2002](#CITEREFBoolosBurgessJeffrey2002), p. 35), [Minsky (1967](#CITEREFMinsky1967), p. 117), [Penrose (1989](#CITEREFPenrose1989), p. 37).
6. **[^](#cite_ref-6)** [Boolos, Burgess & Jeffrey (2002](#CITEREFBoolosBurgessJeffrey2002), p. 25) illustrate the machine as moving along the tape. [Penrose (1989](#CITEREFPenrose1989), pp. 36–37) describes himself as "uncomfortable" with an infinite tape observing that it "might be hard to shift!"; he "prefer[s] to think of the tape as representing some external environment through which our finite device can move" and after observing that the " 'movement' is a convenient way of picturing things" and then suggests that "the device receives all its input from this environment. Some variations of the Turing machine model also allow the head to stay in the same position instead of moving or halting.
7. **[^](#cite_ref-11)** The idea came to him in mid-1935 (perhaps, see more in the History section) after a question posed by [M. H. A. Newman](https://en.wikipedia.org/wiki/M._H._A._Newman) in his lectures: "Was there a definite method, or as Newman put it, a "mechanical process" which could be applied to a mathematical statement, and which would come up with the answer as to whether it was provable". Turing submitted his paper on 31 May 1936 to the London Mathematical Society for its *Proceedings*, but it was published in early 1937 and offprints were available in February 1937.
8. **[^](#cite_ref-12)** See footnote in [Davis (2000](#CITEREFDavis2000), p. 151)
9. ^ [***a***](#cite_ref-mitpress.mit.edu_13-0) [***b***](#cite_ref-mitpress.mit.edu_13-1) See note in forward [Tyler & Emderton (2019)](#CITEREFTylerEmderton2019) harvtxt error: no target: CITEREFTylerEmderton2019 ([help](https://en.wikipedia.org/wiki/Category:Harv_and_Sfn_template_errors))
10. ^ [***a***](#cite_ref-The_Undecidable'_page_119_14-0) [***b***](#cite_ref-The_Undecidable'_page_119_14-1) Turing 1936 in
    [Davis (2004](#CITEREFDavis2004), pp. 132–134); Turing's definition of "circular" is found on page 119.
11. ^ [***a***](#cite_ref-ReferenceA_16-0) [***b***](#cite_ref-ReferenceA_16-1) Turing 1936 in [Davis (2004](#CITEREFDavis2004), p. 145)
12. **[^](#cite_ref-17)** See the definition of "[innings](https://en.wiktionary.org/wiki/innings)" on [Wiktionary](https://en.wikipedia.org/wiki/Wiktionary)
13. **[^](#cite_ref-18)** [Turing (1968](#CITEREFTuring1968), pp. 3–4)
14. **[^](#cite_ref-19)** Occasionally called an *action table* or *[transition function](https://en.wikipedia.org/wiki/Transition_system)*.
15. **[^](#cite_ref-20)** Usually quintuples [5-tuples]: qiaj→qi1aj1dk, but sometimes quadruples [4-tuples].
16. **[^](#cite_ref-22)** p.149; in particular, Hopcroft and Ullman assume that 



    δ
    {\displaystyle \delta }
    ![{\displaystyle \delta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c5321cfa797202b3e1f8620663ff43c4660ea03a) is undefined on all states from 



    F
    {\displaystyle F}
    ![{\displaystyle F}](https://wikimedia.org/api/rest_v1/media/math/render/svg/545fd099af8541605f7ee55f08225526be88ce57)
17. **[^](#cite_ref-29)** Cf. Turing in [Davis (2004](#CITEREFDavis2004), p. 126)
18. **[^](#cite_ref-31)** Cf. footnote 12 in Post (1947)
19. **[^](#cite_ref-33)** Cf. [Post (1947)](#CITEREFPost1947), [Boolos & Jeffrey (1999)](#CITEREFBoolosJeffrey1999), [Davis, Sigal & Weyuker (1994)](#CITEREFDavisSigalWeyuker1994). Also see more at [Post–Turing machine](https://en.wikipedia.org/wiki/Post%E2%80%93Turing_machine).
20. **[^](#cite_ref-38)** Cf. Turing (1936)
21. **[^](#cite_ref-39)** Footnote ‡ in [Davis (2004](#CITEREFDavis2004), p. 138)
22. **[^](#cite_ref-FOOTNOTEGandy199554_47-0)** [Gandy 1995](#CITEREFGandy1995), p. 54.
23. **[^](#cite_ref-FOOTNOTEGandy199553_48-0)** [Gandy 1995](#CITEREFGandy1995), p. 53.
24. **[^](#cite_ref-FOOTNOTEGandy199555_51-0)** [Gandy 1995](#CITEREFGandy1995), p. 55.
25. **[^](#cite_ref-FOOTNOTEGandy199557_53-0)** [Gandy 1995](#CITEREFGandy1995), p. 57.
26. **[^](#cite_ref-FOOTNOTEGandy199592_54-0)** [Gandy 1995](#CITEREFGandy1995), p. 92.
27. **[^](#cite_ref-58)** The narrower question posed in [Hilbert's tenth problem](https://en.wikipedia.org/wiki/Hilbert%27s_tenth_problem), about [Diophantine equations](https://en.wikipedia.org/wiki/Diophantine_equation), remained unresolved until 1970, when the relationship between [recursively enumerable sets](https://en.wikipedia.org/wiki/Recursively_enumerable_set) and [Diophantine sets](https://en.wikipedia.org/wiki/Diophantine_set) was finally laid bare.
28. **[^](#cite_ref-FOOTNOTEGandy199574_59-0)** [Gandy 1995](#CITEREFGandy1995), p. 74.
29. **[^](#cite_ref-FOOTNOTEGandy199576_60-0)** [Gandy 1995](#CITEREFGandy1995), p. 76.
30. **[^](#cite_ref-62)** Cf. [Hodges (1983](#CITEREFHodges1983), p. 112)
31. **[^](#cite_ref-63)** Cf. [Hodges (1983](#CITEREFHodges1983), p. 129)

### Primary literature, reprints, and compilations

[[edit](/w/index.php?title=Turing_machine&action=edit&section=26)]

* [Church, Alonzo](https://en.wikipedia.org/wiki/Alonzo_Church) (23 April 2019). Burge, Tyler; Enderton, Herbert (eds.). [*The Collected Works of Alonzo Church*](https://mitpress.mit.edu/books/collected-works-alonzo-church). Cambridge, MA, US: [MIT Press](https://en.wikipedia.org/wiki/MIT_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-02564-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-02564-5).
* [Copeland, Jack](https://en.wikipedia.org/wiki/Jack_Copeland), ed. (2004). *The Essential Turing: Seminal Writings in Computing, Logic, Philosophy, Artificial Intelligence, and Artificial Life plus The Secrets of Enigma*. Oxford, UK: Clarendon Press (Oxford University Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-19-825079-7](https://en.wikipedia.org/wiki/Special:BookSources/0-19-825079-7). "Contains Turing papers, a draft letter to [Emil Post](https://en.wikipedia.org/wiki/Emil_Post) on criticism of "Turing's convention", and Donald W. Davies' *Corrections to Turing's Universal Computing Machine*"

* [Davis, Martin](https://en.wikipedia.org/wiki/Martin_Davis_(mathematician)), ed. (2004) [1965]. *The Undecidable: Basic Papers on Undecidable Propositions, Unsolvable Problems and Computable Functions*. Mineola, NY: Dover Publ. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0486432281](https://en.wikipedia.org/wiki/Special:BookSources/978-0486432281).

### Computability theory

[[edit](/w/index.php?title=Turing_machine&action=edit&section=27)]

* Booth, Taylor L. (1967). *Sequential Machines and Automata Theory*. New York: John Wiley and Sons, Inc. "Graduate-level engineering text; ranges over a wide variety of topics. Chapter IX "Turing Machines" includes some recursion theory."

* [Davis, Martin](https://en.wikipedia.org/wiki/Martin_Davis_(mathematician)) (2000). *The Universal Computer: The Road from Leibniz to Turing*. W. W. Norton & Company. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-393-04785-7](https://en.wikipedia.org/wiki/Special:BookSources/0-393-04785-7). Reprinted as *Engines of Logic: Mathematicians and the Origin of the Computer*. New York: Norton. 2001. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780393322293](https://en.wikipedia.org/wiki/Special:BookSources/9780393322293).

* Hennie, Fredrick (1977). *Introduction to Computability*. Reading, Mass.: Addison–Wesley. QA248.5H4 1977. "On pages 90–103 Hennie discusses the UTM with examples and flow-charts, but no actual 'code'."

* [Hopcroft, John](https://en.wikipedia.org/wiki/John_Hopcroft); [Ullman, Jeffrey D.](https://en.wikipedia.org/wiki/Jeffrey_Ullman) (1979). *Introduction to Automata Theory, Languages, and Computation* (1st ed.). Reading, Mass.: Addison–Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-02988-X](https://en.wikipedia.org/wiki/Special:BookSources/0-201-02988-X). "Centered around the issues of machine-interpretation of "languages", NP-completeness, etc."

* [Kleene, Stephen](https://en.wikipedia.org/wiki/Stephen_Kleene) (1952). *Introduction to Metamathematics* (10th impression (with corrections of 6th reprint 1971) ed.). Amsterdam, Netherlands: North–Holland Publishing Company. "Graduate level text; most of Chapter XIII "Computable functions" is on Turing machine proofs of computability of recursive functions, etc."

* [Knuth, Donald E.](https://en.wikipedia.org/wiki/Donald_Knuth) (1973). *The Art of Computer Programming, Vol. 1: Fundamental Algorithms* (2nd ed.). Reading, Mass.: Addison–Wesley Publishing Company. "With reference to the role of Turing machines in the development of computation see 1.4.5 "History and Bibliography" pp. 225ff and 2.6 "History and Bibliography" pp. 456ff."

* [Minsky, Marvin](https://en.wikipedia.org/wiki/Marvin_Minsky) (1967). *Computation: Finite and Infinite Machines*. N.J.: Prentice–Hall, Inc. "See Chapter 8, Section 8.2 "Unsolvability of the Halting Problem.""

* [Torres Quevedo, Leonardo](https://en.wikipedia.org/wiki/Leonardo_Torres_Quevedo) (1914). "Ensayos sobre Automática – Su definición. Extensión teórica de sus aplicaciones". *Revista de la Academia de Ciencias Exactas* (in Spanish). **12**: 391–418.

* [Rogers, Hartley](https://en.wikipedia.org/wiki/Hartley_Rogers,_Jr.) (1987) [1967]. *Theory of Recursive Functions and Effective Computability* (Paperback (original 1967 McGraw–Hill) ed.). Cambridge, MA: The MIT Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-68052-1](https://en.wikipedia.org/wiki/Special:BookSources/0-262-68052-1).

* Stone, Harold S. (1972). *Introduction to Computer Organization and Data Structures* (1st ed.). New York: McGraw–Hill Book Company. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-07-061726-0](https://en.wikipedia.org/wiki/Special:BookSources/0-07-061726-0).

* [Van Emde Boas, Peter](https://en.wikipedia.org/wiki/Peter_van_Emde_Boas) (1990). "Machine Models and Simulations". In Jan van Leeuwen (ed.). *Handbook of Theoretical Computer Science, Volume A: Algorithms and Complexity*. The MIT Press / Elsevier. pp. 3–66. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-444-88071-2](https://en.wikipedia.org/wiki/Special:BookSources/0-444-88071-2). "Library of Congress call number: QA76.H279 1990"

* [Hawking, Stephen](https://en.wikipedia.org/wiki/Stephen_Hawking), ed. (2005). *God Created the Integers: The Mathematical Breakthroughs that Changed History*. Philadelphia: Running Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-7624-1922-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7624-1922-7). "Includes Turing's 1936–1937 paper with commentary and biography by Hawking"

* [Wang, Hao](https://en.wikipedia.org/wiki/Hao_Wang_(academic)) (1957). "A variant to Turing's theory of computing machines". *Journal of the Association for Computing Machinery (KACM)*. **4**: 63–92. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/320856.320867](https://doi.org/10.1145%2F320856.320867).