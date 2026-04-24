# Quantum computing

* Source: https://en.wikipedia.org/wiki/Quantum_computing

---

[Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere)

 representation of a qubit. The state 

|

ψ ψ 
⟩ ⟩ 
=
α α 

|

0
⟩ ⟩ 
+
β β 

|

1
⟩ ⟩ 

{\displaystyle |\psi \rangle =\alpha |0\rangle +\beta |1\rangle }

 is a point on the surface of the sphere, partway between the poles, 

|

0
⟩ ⟩ 

{\displaystyle |0\rangle }

 and 

|

1
⟩ ⟩ 

{\displaystyle |1\rangle }

.

A **quantum computer** is a real or theoretical [computer](https://en.wikipedia.org/wiki/Computer) that exploits quantum phenomena like [superposition](https://en.wikipedia.org/wiki/Quantum_superposition) and [entanglement](https://en.wikipedia.org/wiki/Quantum_entanglement) in an essential way. It is widely believed that a quantum computer could perform *some* calculations exponentially faster than any classical computer. For example, a large-scale quantum computer could [break some widely used encryption schemes](https://en.wikipedia.org/wiki/Post-quantum_cryptography) and aid physicists in performing [physical simulations](https://en.wikipedia.org/wiki/Quantum_simulator). However, current hardware implementations of quantum computation are largely experimental and only suitable for specialized tasks.

The basic [unit of information](https://en.wikipedia.org/wiki/Unit_of_information) in quantum computing, the [qubit](https://en.wikipedia.org/wiki/Qubit) (or "quantum bit"), serves the same function as the [bit](https://en.wikipedia.org/wiki/Bit) in ordinary or "classical" computing. However, unlike a classical bit, which can be in one of two states (a [binary](https://en.wikipedia.org/wiki/Binary_number)), a qubit can exist in a [linear combination](https://en.wikipedia.org/wiki/Linear_combination) of two states known as a quantum superposition. The result of [measuring](https://en.wikipedia.org/wiki/Measurement_in_quantum_mechanics) a qubit is one of the two states given by a [probabilistic rule](https://en.wikipedia.org/wiki/Born_rule). If a quantum computer manipulates the qubit in a particular way, [wave interference](https://en.wikipedia.org/wiki/Wave_interference) effects amplify the probability of the desired measurement result. The design of [quantum algorithms](https://en.wikipedia.org/wiki/Quantum_algorithms) involves creating procedures that allow a quantum computer to perform this amplification.

Quantum computers are not yet practical for real-world applications. Physically engineering high-quality qubits has proven to be challenging. If a physical qubit is not sufficiently [isolated](https://en.wikipedia.org/wiki/Isolated_system) from its environment, it suffers from [quantum decoherence](https://en.wikipedia.org/wiki/Quantum_decoherence), introducing [noise](https://en.wikipedia.org/wiki/Noise_(signal_processing)) into calculations. National governments have invested heavily in experimental research aimed at developing scalable qubits with longer coherence times and lower error rates. Example implementations include [superconductors](https://en.wikipedia.org/wiki/Superconducting_quantum_computing) (which isolate an [electrical current](https://en.wikipedia.org/wiki/Electrical_current) by eliminating [electrical resistance](https://en.wikipedia.org/wiki/Electrical_resistance)) and [ion traps](https://en.wikipedia.org/wiki/Trapped_ion_quantum_computer) (which confine a single [atomic particle](https://en.wikipedia.org/wiki/Atom) using [electromagnetic fields](https://en.wikipedia.org/wiki/Electromagnetic_fields)). Researchers have claimed, and are widely believed to be correct, that certain quantum devices can outperform classical computers on narrowly defined tasks, a milestone referred to as quantum advantage or [quantum supremacy](https://en.wikipedia.org/wiki/Quantum_supremacy). These tasks are not necessarily useful for real-world applications. As a result, current demonstrations are best understood as scientific milestones rather than evidence of broad near-term deployment.

## History

For many years, the fields of [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics) and [computer science](https://en.wikipedia.org/wiki/Computer_science) formed distinct academic communities. [Modern quantum theory](https://en.wikipedia.org/wiki/Modern_quantum_theory) was developed in the 1920s to explain perplexing physical phenomena observed at atomic scales, and [digital computers](https://en.wikipedia.org/wiki/Digital_computers) emerged in the following decades to replace [human computers](https://en.wikipedia.org/wiki/Human_computers) for tedious calculations. Both disciplines had practical applications during [World War II](https://en.wikipedia.org/wiki/World_War_II); computers played a major role in [wartime cryptography](https://en.wikipedia.org/wiki/World_War_II_cryptography), and quantum physics was essential for [nuclear physics](https://en.wikipedia.org/wiki/Nuclear_physics) used in the [Manhattan Project](https://en.wikipedia.org/wiki/Manhattan_Project).

As [physicists](https://en.wikipedia.org/wiki/Physicists) applied quantum mechanical models to computational problems and swapped digital [bits](https://en.wikipedia.org/wiki/Bit) for [qubits](https://en.wikipedia.org/wiki/Qubits), the fields of quantum mechanics and computer science began to converge. In 1980, [Paul Benioff](https://en.wikipedia.org/wiki/Paul_Benioff) introduced the [quantum Turing machine](https://en.wikipedia.org/wiki/Quantum_Turing_machine), which uses quantum theory to describe a simplified computer.
When digital computers became faster, physicists faced an [exponential](https://en.wikipedia.org/wiki/Exponential_time) increase in overhead when [simulating quantum dynamics](https://en.wikipedia.org/wiki/Simulating_quantum_dynamics), prompting [Yuri Manin](https://en.wikipedia.org/wiki/Yuri_Manin) and [Richard Feynman](https://en.wikipedia.org/wiki/Richard_Feynman) to independently suggest that hardware based on quantum phenomena might be more efficient for computer simulation.
In a 1984 paper, [Charles Bennett](https://en.wikipedia.org/wiki/Charles_H._Bennett_(physicist)) and [Gilles Brassard](https://en.wikipedia.org/wiki/Gilles_Brassard) applied quantum theory to [cryptography](https://en.wikipedia.org/wiki/Cryptography) protocols and demonstrated that quantum key distribution could enhance [information security](https://en.wikipedia.org/wiki/Information_security).

[Quantum algorithms](https://en.wikipedia.org/wiki/Quantum_algorithm) then emerged for solving [oracle problems](https://en.wikipedia.org/wiki/Oracle_machine), such as [Deutsch's algorithm](https://en.wikipedia.org/wiki/Deutsch%27s_algorithm) in 1985, the [Bernstein–Vazirani algorithm](https://en.wikipedia.org/wiki/Bernstein%E2%80%93Vazirani_algorithm) in 1993, and [Simon's algorithm](https://en.wikipedia.org/wiki/Simon%27s_algorithm) in 1994.
These algorithms did not solve practical problems, but demonstrated mathematically that one could obtain more information by querying a [black box](https://en.wikipedia.org/wiki/Black_box) with a quantum state in [superposition](https://en.wikipedia.org/wiki/Quantum_superposition), sometimes referred to as *quantum parallelism*.

[Peter Shor](https://en.wikipedia.org/wiki/Peter_Shor)

 (pictured here in 2017) showed in 1994 that a scalable quantum computer would be able to break 

[RSA encryption](https://en.wikipedia.org/wiki/RSA_encryption)

.

[Peter Shor](https://en.wikipedia.org/wiki/Peter_Shor) built on these results with [his 1994 algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm) for breaking the widely used [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) and [Diffie–Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman) encryption protocols, which drew significant attention to the field of quantum computing. In 1996, [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm) established a quantum speedup for the widely applicable [unstructured](https://en.wikipedia.org/wiki/Unstructured_data) search problem. The same year, [Seth Lloyd](https://en.wikipedia.org/wiki/Seth_Lloyd) proved that quantum computers could simulate quantum systems without the exponential overhead present in classical simulations, validating Feynman's 1982 conjecture.

Over the years, [experimentalists](https://en.wikipedia.org/wiki/Experimental_physics) have constructed small-scale quantum computers using [trapped ions](https://en.wikipedia.org/wiki/Trapped_ion_quantum_computer) and superconductors.
In 1998, a two-qubit quantum computer demonstrated the feasibility of the technology, and subsequent experiments have increased the number of qubits and reduced error rates.

In 2019, [Google AI](https://en.wikipedia.org/wiki/Google_AI) and [NASA](https://en.wikipedia.org/wiki/NASA) announced that they had achieved [quantum supremacy](https://en.wikipedia.org/wiki/Quantum_supremacy) with a 54-qubit machine, performing a computation that classical supercomputers would take an estimated 10,000 years to complete—a claim subsequently disputed by [IBM](https://en.wikipedia.org/wiki/IBM), which argued the calculation could be done in approximately 2.5 days on its [Summit supercomputer](https://en.wikipedia.org/wiki/Summit_(supercomputer)) with optimized algorithms, sparking a debate over the precise threshold for this milestone.

Recent milestones in quantum computing have increasingly focused on controlling decoherence through quantum error correction. In 2024, researchers demonstrated theoretical and practical approaches for high threshold, low-overhead fault-tolerant quantum memory. These developments represent a critical step toward scaling systems beyond the noisy intermediate-scale quantum (NISQ) era into reliable, fault-tolerant computing architectures, through large-scale physical implementation remains an ongoing engineering challenge.

## Quantum information processing

[Computer engineers](https://en.wikipedia.org/wiki/Computer_engineering) typically describe a [modern computer](https://en.wikipedia.org/wiki/Modern_computer)'s operation in terms of [classical electrodynamics](https://en.wikipedia.org/wiki/Classical_electromagnetism). In these "classical" computers, some components (such as [semiconductors](https://en.wikipedia.org/wiki/Semiconductor) and [random number generators](https://en.wikipedia.org/wiki/Random_number_generation)) may rely on quantum behavior; however, because they are not [isolated](https://en.wikipedia.org/wiki/Isolated_system) from their environment, any [quantum information](https://en.wikipedia.org/wiki/Quantum_information) eventually quickly [decoheres](https://en.wikipedia.org/wiki/Quantum_decoherence). While [programmers](https://en.wikipedia.org/wiki/Programmer) may depend on [probability theory](https://en.wikipedia.org/wiki/Probability_theory) when designing a [randomized algorithm](https://en.wikipedia.org/wiki/Randomized_algorithm), quantum-mechanical notions such as [superposition](https://en.wikipedia.org/wiki/Linear_combination) and [wave interference](https://en.wikipedia.org/wiki/Wave_interference) are largely irrelevant in [program analysis](https://en.wikipedia.org/wiki/Program_analysis).

[Quantum programs](https://en.wikipedia.org/wiki/Quantum_programming), in contrast, rely on precise control of [coherent](https://en.wikipedia.org/wiki/Quantum_coherence) quantum systems. Physicists [describe these systems mathematically](https://en.wikipedia.org/wiki/Mathematical_formulation_of_quantum_mechanics) using [linear algebra](https://en.wikipedia.org/wiki/Linear_algebra). [Complex numbers](https://en.wikipedia.org/wiki/Complex_number) model [probability amplitudes](https://en.wikipedia.org/wiki/Probability_amplitude), [vectors](https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics)) model [quantum states](https://en.wikipedia.org/wiki/Quantum_state), and [matrices](https://en.wikipedia.org/wiki/Matrix_(mathematics)) model the operations that can be performed on these states. Programming a quantum computer is then a matter of [composing](https://en.wikipedia.org/wiki/Function_composition_(computer_science)) operations in such a way that the resulting program computes a useful result in theory and is implementable in practice.

As physicist [Charlie Bennett](https://en.wikipedia.org/wiki/Charles_H._Bennett_(physicist)) describes the relationship between quantum and classical computers,

A classical computer is a quantum computer ... so we shouldn't be asking about "where do quantum speedups come from?" We should say, "Well, all computers are quantum. ... Where do classical slowdowns come from?"

### Quantum information

Just as the bit is the basic concept of classical information theory, the *[qubit](https://en.wikipedia.org/wiki/Qubit)* is the fundamental unit of [quantum information](https://en.wikipedia.org/wiki/Quantum_information). The same term *qubit* is used to refer to an abstract mathematical model and to any physical system that is represented by that model. A classical bit, by definition, exists in either of two physical states, which can be denoted 0 and 1. A qubit is also described by a state, and two states, often written 

|

0
⟩ ⟩ 

{\displaystyle |0\rangle }

 and 

|

1
⟩ ⟩ 

{\displaystyle |1\rangle }

, serve as the quantum counterparts of the classical states 0 and 1. However, the quantum states 

|

0
⟩ ⟩ 

{\displaystyle |0\rangle }

 and 

|

1
⟩ ⟩ 

{\displaystyle |1\rangle }

 belong to a [vector space](https://en.wikipedia.org/wiki/Vector_space), meaning that they can be multiplied by constants and added together, and the result is again a valid quantum state. Such a combination is known as a *superposition* of 

|

0
⟩ ⟩ 

{\displaystyle |0\rangle }

 and 

|

1
⟩ ⟩ 

{\displaystyle |1\rangle }

.

A two-dimensional [vector](https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics)) mathematically represents a qubit state. Physicists typically use [bra–ket notation](https://en.wikipedia.org/wiki/Bra%E2%80%93ket_notation) for quantum mechanical [linear algebra](https://en.wikipedia.org/wiki/Linear_algebra), writing 

|

ψ ψ 
⟩ ⟩ 

{\displaystyle |\psi \rangle }

 'ket [psi](https://en.wikipedia.org/wiki/Psi_(Greek))' for a vector labeled 

ψ ψ 

{\displaystyle \psi }

. Because a qubit is a two-state system, any qubit state takes the form 

α α 

|

0
⟩ ⟩ 
+
β β 

|

1
⟩ ⟩ 

{\displaystyle \alpha |0\rangle +\beta |1\rangle }

, where 

|

0
⟩ ⟩ 

{\displaystyle |0\rangle }

 and 

|

1
⟩ ⟩ 

{\displaystyle |1\rangle }

 are the standard *basis states*, and 

α α 

{\displaystyle \alpha }

 and 

β β 

{\displaystyle \beta }

 are the *[probability amplitudes](https://en.wikipedia.org/wiki/Probability_amplitude),* which are in general [complex numbers](https://en.wikipedia.org/wiki/Complex_numbers). If either 

α α 

{\displaystyle \alpha }

 or 

β β 

{\displaystyle \beta }

 is zero, the qubit is effectively a classical bit; when both are nonzero, the qubit is in superposition. Such a [quantum state vector](https://en.wikipedia.org/wiki/Quantum_state_vector) behaves similarly to a (classical) [probability vector](https://en.wikipedia.org/wiki/Probability_vector), with one key difference: unlike probabilities, probability *amplitudes* are not necessarily positive numbers. Negative amplitudes allow for destructive wave interference.

When a qubit is [measured](https://en.wikipedia.org/wiki/Quantum_measurement) in the [standard basis](https://en.wikipedia.org/wiki/Standard_basis), the result is a classical bit. The [Born rule](https://en.wikipedia.org/wiki/Born_rule) describes the [norm-squared](https://en.wikipedia.org/wiki/Norm-squared) correspondence between amplitudes and probabilities—when measuring a qubit 

α α 

|

0
⟩ ⟩ 
+
β β 

|

1
⟩ ⟩ 

{\displaystyle \alpha |0\rangle +\beta |1\rangle }

, the state [collapses](https://en.wikipedia.org/wiki/Wave_function_collapse) to 

|

0
⟩ ⟩ 

{\displaystyle |0\rangle }

 with probability 

|

α α 

|

2

{\displaystyle |\alpha |^{2}}

, or to 

|

1
⟩ ⟩ 

{\displaystyle |1\rangle }

 with probability 

|

β β 

|

2

{\displaystyle |\beta |^{2}}

.
Any valid qubit state has coefficients 

α α 

{\displaystyle \alpha }

 and 

β β 

{\displaystyle \beta }

 such that 

|

α α 

|

2

+

|

β β 

|

2

=
1

{\displaystyle |\alpha |^{2}+|\beta |^{2}=1}

.
As an example, measuring the qubit 

1

/

2

|

0
⟩ ⟩ 
+
1

/

2

|

1
⟩ ⟩ 

{\displaystyle 1/{\sqrt {2}}|0\rangle +1/{\sqrt {2}}|1\rangle }

 would produce either 

|

0
⟩ ⟩ 

{\displaystyle |0\rangle }

 or 

|

1
⟩ ⟩ 

{\displaystyle |1\rangle }

 with equal probability.

Two particularly important superposition states are the plus state 

|

+
⟩ ⟩ 
=
1

/

2

|

0
⟩ ⟩ 
+
1

/

2

|

1
⟩ ⟩ 

{\displaystyle |+\rangle =1/{\sqrt {2}}|0\rangle +1/{\sqrt {2}}|1\rangle }

 and the minus state 

|

− − 
⟩ ⟩ 
=
1

/

2

|

0
⟩ ⟩ 
− − 
1

/

2

|

1
⟩ ⟩ 

{\displaystyle |-\rangle =1/{\sqrt {2}}|0\rangle -1/{\sqrt {2}}|1\rangle }

. While both yield outcomes 0 and 1 with equal probability upon standard basis measurement, they behave differently under operations such as the [Hadamard gate](https://en.wikipedia.org/wiki/Hadamard_gate)—which maps 

|

0
⟩ ⟩ 
↔ ↔ 

|

+
⟩ ⟩ 

{\displaystyle |0\rangle \leftrightarrow |+\rangle }

 and 

|

1
⟩ ⟩ 
↔ ↔ 

|

− − 
⟩ ⟩ 

{\displaystyle |1\rangle \leftrightarrow |-\rangle }

—demonstrating that relative phase differences carry meaningful quantum information.

Each additional qubit doubles the [dimension](https://en.wikipedia.org/wiki/Dimension_(vector_space)) of the [state space](https://en.wikipedia.org/wiki/State_space_(physics)).
As an example, the vector ⁠1/√2⁠|00⟩ + ⁠1/√2⁠|01⟩ represents a two-qubit state, a [tensor product](https://en.wikipedia.org/wiki/Tensor_product) of the qubit |0⟩ with the qubit ⁠1/√2⁠|0⟩ + ⁠1/√2⁠|1⟩.
This vector inhabits a four-dimensional [vector space](https://en.wikipedia.org/wiki/Vector_space) spanned by the basis vectors |00⟩, |01⟩, |10⟩, and |11⟩.

In general, the vector space for an n-qubit system is 2-dimensional, and this makes it challenging for a classical computer to simulate a quantum one: representing a 100-qubit system requires storing 2 classical values.

### Unitary operators

The state of this one-qubit [quantum memory](https://en.wikipedia.org/wiki/Quantum_memory) can be manipulated by applying [quantum logic gates](https://en.wikipedia.org/wiki/Quantum_logic_gate), analogous to how classical memory can be manipulated with [classical logic gates](https://en.wikipedia.org/wiki/Logic_gate). One important gate for both classical and quantum computation is the NOT gate, which can be represented by a [matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics))

X
:=

(

0

1

1

0

)

.

{\displaystyle X:={\begin{pmatrix}0&1\\1&0\end{pmatrix}}.}

Mathematically, the application of such a logic gate to a quantum state vector is modeled with [matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication). Thus

: X

|

0
⟩ ⟩ 
=

|

1
⟩ ⟩ 

{\displaystyle X|0\rangle =|1\rangle }

 and 

X

|

1
⟩ ⟩ 
=

|

0
⟩ ⟩ 

{\displaystyle X|1\rangle =|0\rangle }

.

The mathematics of single-qubit gates can be extended to operate on multi-qubit quantum memories in two important ways. One way is simply to select a qubit and apply that gate to the target qubit while leaving the remainder of the memory unaffected. Another way is to apply the gate to its target only if another part of the memory is in a desired state. These two choices can be illustrated using another example. The possible states of a two-qubit quantum memory are

|

00
⟩ ⟩ 
:=

(

1

0

0

0

)

;

|

01
⟩ ⟩ 
:=

(

0

1

0

0

)

;

|

10
⟩ ⟩ 
:=

(

0

0

1

0

)

;

|

11
⟩ ⟩ 
:=

(

0

0

0

1

)

.

{\displaystyle |00\rangle :={\begin{pmatrix}1\\0\\0\\0\end{pmatrix}};\quad |01\rangle :={\begin{pmatrix}0\\1\\0\\0\end{pmatrix}};\quad |10\rangle :={\begin{pmatrix}0\\0\\1\\0\end{pmatrix}};\quad |11\rangle :={\begin{pmatrix}0\\0\\0\\1\end{pmatrix}}.}

The [controlled NOT (CNOT)](https://en.wikipedia.org/wiki/Controlled_NOT_gate) gate can then be represented using the following matrix:

CNOT
:=

(

1

0

0

0

0

1

0

0

0

0

0

1

0

0

1

0

)

.

{\displaystyle \operatorname {CNOT} :={\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix}}.}

As a mathematical consequence of this definition, 

CNOT
⁡ ⁡ 

|

00
⟩ ⟩ 
=

|

00
⟩ ⟩ 

{\textstyle \operatorname {CNOT} |00\rangle =|00\rangle }

, 

CNOT
⁡ ⁡ 

|

01
⟩ ⟩ 
=

|

01
⟩ ⟩ 

{\textstyle \operatorname {CNOT} |01\rangle =|01\rangle }

, 

CNOT
⁡ ⁡ 

|

10
⟩ ⟩ 
=

|

11
⟩ ⟩ 

{\textstyle \operatorname {CNOT} |10\rangle =|11\rangle }

, and 

CNOT
⁡ ⁡ 

|

11
⟩ ⟩ 
=

|

10
⟩ ⟩ 

{\textstyle \operatorname {CNOT} |11\rangle =|10\rangle }

. In other words, the CNOT applies a NOT gate (

X

{\textstyle X}

 from before) to the second qubit if and only if the first qubit is in the state 

|

1
⟩ ⟩ 

{\textstyle |1\rangle }

. If the first qubit is 

|

0
⟩ ⟩ 

{\textstyle |0\rangle }

, nothing is done to either qubit.

In summary, quantum computation can be described as a network of quantum logic gates and measurements. However, any [measurement can be deferred](https://en.wikipedia.org/wiki/Deferred_measurement_principle) to the end of quantum computation, though this deferment may come at a computational cost, so most [quantum circuits](https://en.wikipedia.org/wiki/Quantum_circuit) depict a network consisting only of quantum logic gates and no measurements.

### Quantum parallelism

*Quantum parallelism* is the heuristic that quantum computers can be thought of as evaluating a function for multiple input values simultaneously. This can be achieved by preparing a quantum system in a superposition of input states and applying a unitary transformation that encodes the function to be evaluated. The resulting state encodes the function's output values for all input values in the superposition, enabling the simultaneous computation of multiple outputs. This property is key to the speedup of many quantum algorithms. However, "parallelism" in this sense is insufficient to speed up a computation, because the measurement at the end of the computation gives only one value. To be useful, a quantum algorithm must also incorporate some other conceptual ingredient.

### Quantum programming

There are multiple [models of computation](https://en.wikipedia.org/wiki/Model_of_computation) for quantum computing, distinguished by the basic elements in which the computation is decomposed.

#### Gate array

A quantum circuit diagram implementing a 

[Toffoli gate](https://en.wikipedia.org/wiki/Toffoli_gate)

 from 

[more primitive gates](https://en.wikipedia.org/wiki/Quantum_logic_gate)

A [quantum gate array](https://en.wikipedia.org/wiki/Quantum_circuit) decomposes computation into a sequence of few-qubit [quantum gates](https://en.wikipedia.org/wiki/Quantum_gate). A quantum computation can be described as a network of quantum logic gates and measurements. However, any measurement can be deferred to the end of quantum computation, though this deferment may come at a computational cost, so most quantum circuits depict a network consisting only of quantum logic gates and no measurements.

Any quantum computation (which is, in the above formalism, any [unitary matrix](https://en.wikipedia.org/wiki/Unitary_matrix) of size 

2

n

× × 

2

n

{\displaystyle 2^{n}\times 2^{n}}

 over 

n

{\displaystyle n}

 qubits) can be represented as a network of quantum logic gates from a fairly small family of gates. A choice of gate family that enables this construction is known as a [universal gate set](https://en.wikipedia.org/wiki/Quantum_logic_gate#Universal_quantum_gates), since a computer that can run such circuits is a [universal quantum computer](https://en.wikipedia.org/wiki/Universal_quantum_computer). One common such set includes all single-qubit gates as well as the CNOT gate from above. This means any quantum computation can be performed by executing a sequence of single-qubit gates together with CNOT gates. Though this gate set is infinite, it can be replaced with a finite gate set by appealing to the [Solovay-Kitaev theorem](https://en.wikipedia.org/wiki/Solovay%E2%80%93Kitaev_theorem). Implementation of Boolean functions using the few-qubit quantum gates is presented here.

#### Measurement-based quantum computing

A [measurement-based quantum computer](https://en.wikipedia.org/wiki/Measurement-based_quantum_computer) decomposes computation into a sequence of [Bell state measurements](https://en.wikipedia.org/wiki/Bell_state#Bell_state_measurement) and single-qubit [quantum gates](https://en.wikipedia.org/wiki/Quantum_gate) applied to a highly entangled initial state (a [cluster state](https://en.wikipedia.org/wiki/Cluster_state)), using a technique called [quantum gate teleportation](https://en.wikipedia.org/wiki/Quantum_gate_teleportation).

#### Adiabatic quantum computing

An [adiabatic quantum computer](https://en.wikipedia.org/wiki/Adiabatic_quantum_computation), based on [quantum annealing](https://en.wikipedia.org/wiki/Quantum_annealing), decomposes computation into a slow continuous transformation of an initial [Hamiltonian](https://en.wikipedia.org/wiki/Hamiltonian_(quantum_mechanics)) into a final Hamiltonian, whose ground states contain the solution.

#### Neuromorphic quantum computing

Neuromorphic quantum computing (abbreviated 'n.quantum computing') is an unconventional process of computing that uses [neuromorphic computing](https://en.wikipedia.org/wiki/Neuromorphic_engineering) to perform quantum operations. It was suggested that quantum algorithms, which are algorithms that run on a realistic model of quantum computation, can be computed equally efficiently with neuromorphic quantum computing. Both traditional quantum computing and neuromorphic quantum computing are physics-based unconventional computing approaches to computations and do not follow the [von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture). They both construct a system (a circuit) that represents the physical problem at hand and then leverage their respective physics properties of the system to seek the "minimum". Neuromorphic quantum computing and quantum computing share similar physical properties during computation.

#### Topological quantum computing

A [topological quantum computer](https://en.wikipedia.org/wiki/Topological_quantum_computer) decomposes computation into the braiding of [anyons](https://en.wikipedia.org/wiki/Anyon) in a 2D lattice.

#### Quantum Turing machine

A [quantum Turing machine](https://en.wikipedia.org/wiki/Quantum_Turing_machine) is the quantum analog of a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine). All of these models of computation—quantum circuits, [one-way quantum computation](https://en.wikipedia.org/wiki/One-way_quantum_computer), adiabatic quantum computation, and topological quantum computation—have been shown to be equivalent to the quantum Turing machine; given a perfect implementation of one such quantum computer, it can simulate all the others with no more than polynomial overhead. This equivalence need not hold for practical quantum computers, since the overhead of simulation may be too large to be practical.

#### Noisy intermediate-scale quantum computing

The [threshold theorem](https://en.wikipedia.org/wiki/Threshold_theorem) shows how increasing the number of qubits can mitigate errors, yet fully fault-tolerant quantum computing remains "a rather distant dream". According to some researchers, *noisy intermediate-scale quantum* ([NISQ](https://en.wikipedia.org/wiki/NISQ)) machines may have specialized uses in the near future, but [noise](https://en.wikipedia.org/wiki/Noise_(signal_processing)) in quantum gates limits their reliability.
Scientists at [Harvard](https://en.wikipedia.org/wiki/Harvard_University) University successfully created "quantum circuits" that correct errors more efficiently than alternative methods, which may potentially remove a major obstacle to practical quantum computers. The Harvard research team was supported by [MIT](https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology), [QuEra Computing](https://en.wikipedia.org/wiki/QuEra_Computing), [Caltech](https://en.wikipedia.org/wiki/California_Institute_of_Technology), and [Princeton](https://en.wikipedia.org/wiki/Princeton_University) University and funded by [DARPA](https://en.wikipedia.org/wiki/DARPA)'s Optimization with Noisy Intermediate-Scale Quantum devices (ONISQ) program.

#### Quantum cryptography and cybersecurity

Digital cryptography enables communications to remain private, preventing unauthorized parties from accessing them. Conventional encryption, the obscuring of a message with a key through an algorithm, relies on the algorithm being difficult to reverse. Encryption is also the basis for digital signatures and authentication mechanisms. Quantum computing may be sufficiently more powerful that difficult reversals are feasible, allowing messages relying on conventional encryption to be read.

Quantum cryptography replaces conventional algorithms with computations based on quantum computing. In principle, quantum encryption would be impossible to decode even with a quantum computer. This advantage comes at a significant cost in terms of elaborate infrastructure, while effectively preventing legitimate decoding of messages by governmental security officials.

Ongoing research in quantum and [post-quantum cryptography](https://en.wikipedia.org/wiki/Post-quantum_cryptography) has led to new algorithms for [quantum key distribution](https://en.wikipedia.org/wiki/Quantum_key_distribution), initial work on quantum [random number generation](https://en.wikipedia.org/wiki/Random_number_generation) and to some early technology demonstrations.

## Ethical and security implications

Quantum computing raises important ethical and security concerns, particularly in the field of cryptography. Powerful quantum computers could potentially break widely used encryption methods such as RSA and ECC, threatening current cybersecurity systems. This has led to increased research in post-quantum cryptography, which aims to develop encryption methods resistant to quantum attacks. Organizations such as the National Institute of Standards and Technology (NIST) are actively standardizing post-quantum cryptographic algorithms to prepare for future threats. Additionally, concerns about the misuse of quantum computing in surveillance and data breaches have prompted discussions about responsible development and governance of this emerging technology.

## Communication

[Quantum cryptography](https://en.wikipedia.org/wiki/Quantum_cryptography) enables new ways to transmit data securely; for example, [quantum key distribution](https://en.wikipedia.org/wiki/Quantum_key_distribution) uses entangled quantum states to establish secure [cryptographic keys](https://en.wikipedia.org/wiki/Cryptographic_keys). When a sender and receiver exchange quantum states, they can guarantee that an [adversary](https://en.wikipedia.org/wiki/Adversary_(cryptography)) does not intercept the message, as any unauthorized eavesdropper would disturb the delicate quantum system and introduce a detectable change. With appropriate [cryptographic protocols](https://en.wikipedia.org/wiki/Cryptographic_protocols), the sender and receiver can thus establish shared private information resistant to eavesdropping.

Modern [fiber-optic cables](https://en.wikipedia.org/wiki/Fiber-optic_cables) can transmit quantum information over relatively short distances. Ongoing experimental research aims to develop more reliable hardware (such as quantum repeaters), hoping to scale this technology to long-distance [quantum networks](https://en.wikipedia.org/wiki/Quantum_networks) with end-to-end entanglement. Theoretically, this could enable novel technological applications, such as distributed quantum computing and enhanced [quantum sensing](https://en.wikipedia.org/wiki/Quantum_sensing).

### Quantum communication protocols

[Quantum teleportation](https://en.wikipedia.org/wiki/Quantum_teleportation) is a protocol by which Alice can transmit the quantum state of a qubit to Bob using one shared entangled pair (e-bit) and two classical bits of communication. The state of Alice's qubit is not physically transmitted—instead, it is reconstructed at Bob's end through classically communicated measurement outcomes and local unitary corrections. This demonstrates that quantum communication requires both entanglement and classical communication; neither alone is sufficient. Teleportation cannot be used to transmit information faster than light because the classical bits must travel through normal channels.

[Superdense coding](https://en.wikipedia.org/wiki/Superdense_coding) is the complementary protocol: using one shared e-bit and sending only one qubit, Alice can transmit two classical bits to Bob. This appears to violate [Holevo's theorem](https://en.wikipedia.org/wiki/Holevo%27s_theorem)—which states that a single qubit can carry at most one bit of classical information—but the shared entanglement circumvents this limit. Superdense coding thus demonstrates that entanglement can effectively double the classical information-carrying capacity of quantum communication.

## Algorithms

Progress in finding [quantum algorithms](https://en.wikipedia.org/wiki/Quantum_algorithms) typically focuses on the quantum circuit model, though exceptions like the [quantum adiabatic algorithm](https://en.wikipedia.org/wiki/Adiabatic_quantum_computation) exist. Quantum algorithms can be roughly categorized by the type of speedup achieved over corresponding classical algorithms.

Quantum algorithms that offer more than a polynomial speedup over the best-known classical algorithm include [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm) for factoring and the related quantum algorithms for computing [discrete logarithms](https://en.wikipedia.org/wiki/Discrete_logarithm), solving [Pell's equation](https://en.wikipedia.org/wiki/Pell%27s_equation), and, more generally, solving the [hidden subgroup problem](https://en.wikipedia.org/wiki/Hidden_subgroup_problem) for [abelian](https://en.wikipedia.org/wiki/Abelian_group) finite groups. These algorithms depend on the primitive of the [quantum Fourier transform](https://en.wikipedia.org/wiki/Quantum_Fourier_transform). No mathematical proof has been found that shows that an equally fast classical algorithm cannot be discovered, but evidence suggests that this is unlikely. Certain oracle problems like [Simon's problem](https://en.wikipedia.org/wiki/Simon%27s_problem) and the [Bernstein–Vazirani problem](https://en.wikipedia.org/wiki/Bernstein%E2%80%93Vazirani_algorithm) do give provable speedups, though this is in the [quantum query model](https://en.wikipedia.org/wiki/Quantum_complexity_theory#Quantum_query_complexity), which is a restricted model where lower bounds are much easier to prove and don't necessarily translate to speedups for practical problems.

Other problems, including the simulation of quantum physical processes from chemistry and solid-state physics, the approximation of certain [Jones polynomials](https://en.wikipedia.org/wiki/Jones_polynomial), and the [quantum algorithm for linear systems of equations](https://en.wikipedia.org/wiki/Quantum_algorithm_for_linear_systems_of_equations), have quantum algorithms appearing to give super-polynomial speedups and are [BQP](https://en.wikipedia.org/wiki/BQP)-complete. Because these problems are BQP-complete, an equally fast classical algorithm for them would imply that "no quantum algorithm" provides a super-polynomial speedup, which is believed to be unlikely.

In addition to these problems, quantum algorithms are being explored for applications in cryptography, optimization, and machine learning, although most of these remain at the research stage and require significant advances in error correction and hardware scalability before practical implementation.

Some quantum algorithms, such as [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm) and [amplitude amplification](https://en.wikipedia.org/wiki/Amplitude_amplification), give polynomial speedups over corresponding classical algorithms. Though these algorithms give comparably modest quadratic speedup, they are widely applicable and thus give speedups for a wide range of problems. These speed-ups are, however, over the theoretical worst-case of classical algorithms, and concrete real-world speed-ups over algorithms used in practice have not been demonstrated.

### Simulation of quantum systems

Since chemistry and nanotechnology rely on understanding quantum systems, and such systems are impossible to simulate in an efficient manner classically, [quantum simulation](https://en.wikipedia.org/wiki/Quantum_simulator) may be an important application of quantum computing. Recent reviews identify quantum chemistry as one of the most promising application areas for quantum computing, particularly for problems in electronic structure, chemical dynamics, and spectroscopy, while noting that useful implementations remain limited by current hardware. Quantum simulation could also be used to simulate the behavior of atoms and particles at unusual conditions such as the reactions inside a [collider](https://en.wikipedia.org/wiki/Collider). In June 2023, IBM computer scientists reported that a quantum computer produced better results for a physics problem than a conventional supercomputer.

About 2% of the annual global energy output is used for [nitrogen fixation](https://en.wikipedia.org/wiki/Nitrogen_fixation) to produce [ammonia](https://en.wikipedia.org/wiki/Ammonia) for the [Haber process](https://en.wikipedia.org/wiki/Haber_process) in the agricultural fertiliser industry (even though naturally occurring organisms also produce ammonia). Quantum simulations might be used to understand this process and increase the energy efficiency of production. It is expected that an early use of quantum computing will be modeling that improves the efficiency of the Haber–Bosch process by the mid-2020s although some have predicted it will take longer.

### Post-quantum cryptography

A notable application of quantum computing is in [attacking](https://en.wikipedia.org/wiki/Cryptanalysis) cryptographic systems that are currently in use. [Integer factorization](https://en.wikipedia.org/wiki/Integer_factorization), which underpins the security of [public key cryptographic](https://en.wikipedia.org/wiki/Public_key_cryptography) systems, is believed to be computationally infeasible on a [classical computer](https://en.wikipedia.org/wiki/Computer) for large integers if they are the product of a few [prime numbers](https://en.wikipedia.org/wiki/Prime_number) (e.g., the product of two 300-digit primes). By contrast, a quantum computer could solve this problem exponentially faster using Shor's algorithm to factor the integer. This ability would allow a quantum computer to break many of the [cryptographic](https://en.wikipedia.org/wiki/Cryptography) systems in use today, in the sense that there would be a [polynomial time](https://en.wikipedia.org/wiki/Polynomial_time) (in the number of digits of the integer) algorithm for solving the problem. In particular, most of the popular [public key ciphers](https://en.wikipedia.org/wiki/Asymmetric_Algorithms) are based on the difficulty of factoring integers or the [discrete logarithm](https://en.wikipedia.org/wiki/Discrete_logarithm) problem, both of which can be solved by Shor's algorithm. In particular, the [RSA](https://en.wikipedia.org/wiki/RSA_(algorithm)), [Diffie–Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman), and [elliptic curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic_curve_Diffie%E2%80%93Hellman) algorithms could be broken. These are used to protect secure Web pages, encrypted email, and many other types of data. Breaking these would have significant ramifications for electronic privacy and security.

Identifying cryptographic systems that may be secure against quantum algorithms is an actively researched topic under the field of *post-quantum cryptography*. Some public-key algorithms are based on problems other than the integer factorization and discrete logarithm problems to which Shor's algorithm applies, such as the [McEliece cryptosystem](https://en.wikipedia.org/wiki/McEliece_cryptosystem), which relies on a hard problem in [coding theory](https://en.wikipedia.org/wiki/Coding_theory). [Lattice-based cryptosystems](https://en.wikipedia.org/wiki/Lattice-based_cryptography) are also not known to be broken by quantum computers, and finding a polynomial time algorithm for solving the [dihedral](https://en.wikipedia.org/wiki/Dihedral_group) [hidden subgroup problem](https://en.wikipedia.org/wiki/Hidden_subgroup_problem), which would break many lattice-based cryptosystems, is a well-studied open problem. It has been shown that applying Grover's algorithm to break a [symmetric (secret-key) algorithm](https://en.wikipedia.org/wiki/Symmetric-key_algorithm) by brute force requires time equal to roughly 2 invocations of the underlying cryptographic algorithm, compared with roughly 2 in the classical case, meaning that symmetric key lengths are effectively halved: AES-256 would have comparable security against an attack using Grover's algorithm to that AES-128 has against classical brute-force search (see *[Key size](https://en.wikipedia.org/wiki/Key_size#Effect_of_quantum_computing_attacks_on_key_strength)*).

### Search problems

The most well-known example of a problem that allows for a polynomial quantum speedup is *unstructured search*, which involves finding a marked item out of a list of 

n

{\displaystyle n}

 items in a database. This can be solved by Grover's algorithm using 

O
(

n

)

{\displaystyle O({\sqrt {n}})}

 queries to the database, quadratically fewer than the 

Ω Ω 
(
n
)

{\displaystyle \Omega (n)}

 queries required for classical algorithms. In this case, the advantage is not only provable but also optimal: it has been shown that Grover's algorithm gives the maximal possible probability of finding the desired element for any number of oracle lookups. Many examples of provable quantum speedups for query problems are based on Grover's algorithm, including [Brassard, Høyer, and Tapp's algorithm](https://en.wikipedia.org/wiki/BHT_algorithm) for finding collisions in two-to-one functions, and Farhi, Goldstone, and Gutmann's algorithm for evaluating NAND trees.

Problems that can be efficiently addressed with Grover's algorithm have the following properties:

1. There is no searchable structure in the collection of possible answers,
2. The number of possible answers to check is the same as the number of inputs to the algorithm, and
3. There exists a Boolean function that evaluates each input and determines whether it is the correct answer.

For problems with all these properties, the running time of Grover's algorithm on a quantum computer scales as the square root of the number of inputs (or elements in the database), as opposed to the linear scaling of classical algorithms. A general class of problems to which Grover's algorithm can be applied is a [Boolean satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem), where the *database* through which the algorithm iterates is that of all possible answers. An example and possible application of this is a [password cracker](https://en.wikipedia.org/wiki/Password_cracking) that attempts to guess a password. Breaking [symmetric ciphers](https://en.wikipedia.org/wiki/Symmetric-key_algorithm) with this algorithm is of interest to government agencies.

### Quantum annealing

A 

[wafer](https://en.wikipedia.org/wiki/Wafer_(electronics))

 of 

[adiabatic quantum computers](https://en.wikipedia.org/wiki/Adiabatic_quantum_computer)

[Quantum annealing](https://en.wikipedia.org/wiki/Quantum_annealing) uses the [adiabatic theorem](https://en.wikipedia.org/wiki/Adiabatic_theorem) to perform calculations. A system is placed in the ground state for a simple Hamiltonian, which slowly evolves to a more complicated Hamiltonian whose ground state represents the solution to the problem in question. The adiabatic theorem states that if the evolution is slow enough, the system will stay in its ground state at all times through the process. Quantum annealing can solve [Ising models](https://en.wikipedia.org/wiki/Ising_model) and the (computationally equivalent) [QUBO](https://en.wikipedia.org/w/index.php?title=Quadratic_unconstrained_binary_optimisation&action=edit&redlink=1) problem, which in turn can be used to encode a wide range of [combinatorial optimization](https://en.wikipedia.org/wiki/Combinatorial_optimization) problems. Adiabatic optimization may be helpful for solving [computational biology](https://en.wikipedia.org/wiki/Computational_biology) problems.

### Machine learning

Since quantum computers can produce outputs that classical computers cannot produce efficiently, and since quantum computation is fundamentally linear algebraic, some express hope in developing quantum algorithms that can speed up [machine learning](https://en.wikipedia.org/wiki/Machine_learning) tasks.
However, review literature notes that many proposed quantum machine-learning advantages rely on assumptions about efficient data encoding or continued access to quantum hardware, and have not yet translated into broad practical end-to-end advantage on current devices.
For example, the [HHL Algorithm](https://en.wikipedia.org/wiki/HHL_Algorithm), named after its discoverers Harrow, Hassidim, and Lloyd, is believed to provide speedup over classical counterparts. Some research groups have recently explored the use of quantum annealing hardware for training [Boltzmann machines](https://en.wikipedia.org/wiki/Boltzmann_machine) and [deep neural networks](https://en.wikipedia.org/wiki/Deep_neural_networks).

Deep generative chemistry models have been explored for potential applications in [drug discovery](https://en.wikipedia.org/wiki/Drug_discovery). Early experimental work has explored the use of near-term quantum hardware in molecular generative modeling for drug discovery. In 2023, researchers at Gero reported a hybrid quantum–classical generative model based on a restricted Boltzmann machine, implemented on a commercially available quantum annealing device, to generate novel drug-like small molecules with physicochemical properties comparable to known medicinal compounds. However, the immense size and complexity of the structural space of all possible drug-like molecules pose significant obstacles, which could be overcome in the future by quantum computers. Quantum computers are naturally good for solving complex quantum many-body problems and thus may be instrumental in applications involving quantum chemistry. Therefore, one can expect that quantum-enhanced generative models including quantum GANs may eventually be developed into ultimate generative chemistry algorithms.

## Engineering

As of 2023, classical computers outperform quantum computers for all real-world applications. While current quantum computers may speed up solutions to particular mathematical problems, they give no computational advantage for practical tasks. Scientists and engineers are exploring multiple technologies for quantum computing hardware and hope to develop scalable quantum architectures, but serious obstacles remain. In practice, improvements in qubit counts alone are not enough, because error rates, connectivity, and data movement also affect whether an end-to-end application can outperform classical methods.

### Challenges

There are a number of technical challenges in building a large-scale quantum computer. Physicist [David DiVincenzo](https://en.wikipedia.org/wiki/David_P._DiVincenzo) has listed [these requirements](https://en.wikipedia.org/wiki/DiVincenzo%27s_criteria) for a practical quantum computer:

* Physically scalable to increase the number of qubits
* Qubits that can be initialized to arbitrary values
* Quantum gates that are faster than [decoherence](https://en.wikipedia.org/wiki/Decoherence) time
* Universal gate set
* Qubits that can be read easily.

The control of multi-qubit systems requires the generation and coordination of a large number of electrical signals with tight and deterministic timing resolution. This has led to the development of [quantum controllers](https://en.wikipedia.org/w/index.php?title=Quantum_controllers&action=edit&redlink=1) that enable interfacing with the qubits. Scaling these systems to support a growing number of qubits is an additional challenge.

The theoretical potential for large-scale quantum computers to eventually break widely used public-key encryption schemes has prompted significant motivated changes in global cybersecurity strategies. In response to this future challenge, organizations, including the National Institute of Standards and Technology (NIST), have initiated detailed standardization processes for post-quantum cryptography. These global efforts are designed to develop, evaluate, and deploy cryptographic algorithms that remain safe against both quantum and classical computer attacks, well before fully fault-tolerant quantum systems become available.

#### Coolant

Sourcing parts for quantum computers is also very difficult. [Superconducting quantum computers](https://en.wikipedia.org/wiki/Superconducting_quantum_computing), like those constructed by [Google](https://en.wikipedia.org/wiki/Google) and [IBM](https://en.wikipedia.org/wiki/IBM), need [helium-3](https://en.wikipedia.org/wiki/Helium-3), a [nuclear](https://en.wikipedia.org/wiki/Nuclear_physics) research byproduct, and special [superconducting](https://en.wikipedia.org/wiki/Superconducting) cables made only by the Japanese company Coax Co. On 27 January 2026, the US [DARPA](https://en.wikipedia.org/wiki/DARPA) agency made a call for proposals for a quantum computing coolant below 1 [Kelvin](https://en.wikipedia.org/wiki/Kelvin), which does not use helium-3. In February 2026, the [Chinese Academy of Sciences](https://en.wikipedia.org/wiki/Chinese_Academy_of_Sciences) announced the testing of a [rare-earth](https://en.wikipedia.org/wiki/Rare-earth_element) alloy, [Eu](https://en.wikipedia.org/wiki/Europium)[Co](https://en.wikipedia.org/wiki/Cobalt)2[Al](https://en.wikipedia.org/wiki/Aluminium)9, which could fill a similar role.

#### Decoherence

One of the greatest challenges involved in constructing quantum computers is controlling or removing quantum decoherence. This usually means isolating the system from its environment, as interactions with the external world cause the system to decohere. However, other sources of decoherence also exist. Examples include the quantum gates, the lattice vibrations, and the background thermonuclear spin of the physical system used to implement the qubits. Decoherence is irreversible, as it is effectively non-unitary, and is usually something that should be highly controlled, if not avoided. Decoherence times for candidate systems in particular, the transverse relaxation time *T*2 (for [NMR](https://en.wikipedia.org/wiki/Nuclear_magnetic_resonance) and [MRI](https://en.wikipedia.org/wiki/MRI) technology, also called the *dephasing time*), typically range between nanoseconds and seconds at low temperatures. Currently, some quantum computers require their qubits to be cooled to 20 millikelvin (usually using a [dilution refrigerator](https://en.wikipedia.org/wiki/Dilution_refrigerator)) in order to prevent significant decoherence. A 2020 study argues that [ionizing radiation](https://en.wikipedia.org/wiki/Ionizing_radiation) such as [cosmic rays](https://en.wikipedia.org/wiki/Cosmic_rays) can nevertheless cause certain systems to decohere within milliseconds.

As a result, time-consuming tasks may render some quantum algorithms inoperable, as attempting to maintain the state of qubits for a long enough duration will eventually corrupt the superpositions.

These issues are more difficult for optical approaches as the timescales are orders of magnitude shorter, and an often-cited approach to overcoming them is optical [pulse shaping](https://en.wikipedia.org/wiki/Pulse_shaping). Error rates are typically proportional to the ratio of operating time to decoherence time; hence, any operation must be completed much more quickly than the decoherence time.

As described by the [threshold theorem](https://en.wikipedia.org/wiki/Threshold_theorem), if the error rate is small enough, it is thought to be possible to use [quantum error correction](https://en.wikipedia.org/wiki/Quantum_error_correction) to suppress errors and decoherence. This allows the total calculation time to be longer than the decoherence time if the error correction scheme can correct errors faster than decoherence introduces them. An often-cited figure for the required error rate in each gate for fault-tolerant computation is 10, assuming the noise is depolarizing.

Meeting this scalability condition is possible for a wide range of systems. However, the use of error correction brings with it the cost of a greatly increased number of required qubits. The number required to factor integers using Shor's algorithm is still polynomial, and thought to be between L and *L*, where L is the number of binary digits in the number to be factored; error correction algorithms would inflate this figure by an additional factor of L. For a 1000-bit number, this implies a need for about 10 bits without error correction. With error correction, the figure would rise to about 10 bits. Computation time is about *L* or about 10 steps and at 1 MHz, about 10 seconds. However, the encoding and error-correction overheads increase the size of a real fault-tolerant quantum computer by several orders of magnitude. Careful estimates show that at least 3 million physical qubits would factor 2,048-bit integer in 5 months on a fully error-corrected trapped-ion quantum computer. In terms of the number of physical qubits, to date, this remains the lowest estimate for practically useful integer factorization problem sizing 1,024-bit or larger.

One approach to overcoming errors combines [low-density parity-check code](https://en.wikipedia.org/wiki/Low-density_parity-check_code) with [cat qubits](https://en.wikipedia.org/wiki/Cat_qubit_quantum_computer) that have intrinsic bit-flip error suppression. Implementing 100 logical qubits with 768 cat qubits could reduce the error rate to one part in 10 per cycle per bit.

Another approach to the stability-decoherence problem is to create a [topological quantum computer](https://en.wikipedia.org/wiki/Topological_quantum_computer) with [anyons](https://en.wikipedia.org/wiki/Anyon), [quasi-particles](https://en.wikipedia.org/wiki/Quasi-particle) used as threads, and relying on [braid theory](https://en.wikipedia.org/wiki/Braid_theory) to form stable logic gates. Non-Abelian anyons can, in effect, remember how they have been manipulated, making them potentially useful in quantum computing. As of 2025, Microsoft and other organizations are investing in quasi-particle research.

### Quantum supremacy

Physicist [John Preskill](https://en.wikipedia.org/wiki/John_Preskill) coined the term *quantum supremacy* to describe the engineering feat of demonstrating that a programmable quantum device can solve a problem beyond the capabilities of state-of-the-art classical computers. The problem need not be useful, so some view the quantum supremacy test only as a potential future benchmark.

In October 2019, Google AI Quantum, with the help of NASA, became the first to claim to have achieved quantum supremacy by performing calculations on the [Sycamore quantum computer](https://en.wikipedia.org/wiki/Sycamore_processor) more than 3,000,000 times faster than they could be done on [Summit](https://en.wikipedia.org/wiki/Summit_(supercomputer)), generally considered the world's fastest computer. This claim has been subsequently challenged: IBM has stated that Summit can perform samples much faster than claimed, and researchers have since developed better algorithms for the sampling problem used to claim quantum supremacy, giving substantial reductions to the gap between Sycamore and classical supercomputers and even beating it.

In December 2020, a group at [USTC](https://en.wikipedia.org/wiki/University_of_Science_and_Technology_of_China) implemented a type of [Boson sampling](https://en.wikipedia.org/wiki/Boson_sampling) on 76 photons with a [photonic quantum computer](https://en.wikipedia.org/wiki/Linear_optical_quantum_computing), [Jiuzhang](https://en.wikipedia.org/wiki/Jiuzhang_(quantum_computer)), to demonstrate quantum supremacy. The authors claim that a classical contemporary supercomputer would require a computational time of 600 million years to generate the number of samples their quantum processor can generate in 20 seconds.

Claims of quantum supremacy have generated hype around quantum computing, but they are based on contrived benchmark tasks that do not directly imply useful real-world applications. Accordingly, benchmark-level quantum advantage should not be interpreted as proof that quantum computers are already broadly useful across practical computing workloads.

In January 2024, a study published in *Physical Review Letters* provided direct verification of quantum supremacy experiments by computing exact amplitudes for experimentally generated bitstrings using a new-generation Sunway supercomputer, demonstrating a significant leap in simulation capability built on a multiple-amplitude tensor network contraction algorithm.

### Skepticism

Despite high hopes for quantum computing, significant progress in hardware, and optimism about future applications, a 2023 [Nature](https://en.wikipedia.org/wiki/Nature_(journal)) spotlight article summarized current quantum computers as being "For now, [good for] absolutely nothing". The article elaborated that quantum computers are yet to be more useful or efficient than conventional computers in any case, though it also argued that, in the long term, such computers are likely to be useful. A 2023 [Communications of the ACM](https://en.wikipedia.org/wiki/Communications_of_the_ACM) article found that current quantum computing algorithms are "insufficient for practical quantum advantage without significant improvements across the software/hardware stack". It argues that the most promising candidates for achieving speedup with quantum computers are "small-data problems", for example, in chemistry and materials science. However, the article also concludes that a large range of the potential applications it considered, such as machine learning, "will not achieve quantum advantage with current quantum algorithms in the foreseeable future", and it identified I/O constraints that make speedup unlikely for "big data problems, unstructured linear systems, and database search based on Grover's algorithm".

This state of affairs can be traced to several current and long-term considerations.

* Conventional computer hardware and algorithms are not only optimized for practical tasks, but are still improving rapidly, particularly [GPU](https://en.wikipedia.org/wiki/GPU) accelerators.
* Current quantum computing hardware generates only a limited amount of [entanglement](https://en.wikipedia.org/wiki/Quantum_entanglement) before getting overwhelmed by noise.
* Quantum algorithms provide speedup over conventional algorithms only for some tasks, and matching these tasks with practical applications proved challenging. Some promising tasks and applications require resources far beyond those available today. In particular, processing large amounts of non-quantum data is a challenge for quantum computers.
* Some promising algorithms have been "dequantized", i.e., their non-quantum analogues with similar complexity have been found.
* If [quantum error correction](https://en.wikipedia.org/wiki/Quantum_error_correction) is used to scale quantum computers to practical applications, its overhead may undermine the speedup offered by many quantum algorithms.
* Complexity analysis of algorithms sometimes makes abstract assumptions that do not hold in applications. For example, input data may not already be available encoded in quantum states, and "oracle functions" used in Grover's algorithm often have internal structure that can be exploited for faster algorithms.

In particular, building computers with large numbers of qubits may be futile if those qubits are not connected well enough and cannot maintain a sufficiently high degree of entanglement for a long time. When trying to outperform conventional computers, quantum computing researchers often look for new tasks that can be solved on quantum computers, but this leaves the possibility that efficient non-quantum techniques will be developed in response, as seen for Quantum supremacy demonstrations. Therefore, it is desirable to prove lower bounds on the complexity of best possible non-quantum algorithms (which may be unknown) and show that some quantum algorithms asymptotically improve upon those bounds.

[Bill Unruh](https://en.wikipedia.org/wiki/Bill_Unruh) doubted the practicality of quantum computers in a paper published in 1994. [Paul Davies](https://en.wikipedia.org/wiki/Paul_Davies) argued that a 400-qubit computer would even come into conflict with the cosmological information bound implied by the [holographic principle](https://en.wikipedia.org/wiki/Holographic_principle). Skeptics like [Gil Kalai](https://en.wikipedia.org/wiki/Gil_Kalai) doubt that quantum supremacy will ever be achieved. Physicist [Mikhail Dyakonov](https://en.wikipedia.org/wiki/Mikhail_Dyakonov) has expressed skepticism of quantum computing as follows:

: "So the number of continuous parameters describing the state of such a useful quantum computer at any given moment must be... about 10... Could we ever learn to control the more than 10 continuously variable parameters defining the quantum state of such a system? My answer is simple. *No, never.*"

### Physical realizations

[Quantum System One](https://en.wikipedia.org/wiki/IBM_Q_System_One)

, a quantum computer by 

[IBM](https://en.wikipedia.org/wiki/IBM)

 from 2019 with 20 superconducting qubits

A practical quantum computer must use a physical system as a programmable quantum register. Researchers are exploring several technologies as candidates for reliable qubit implementations. [Superconductors](https://en.wikipedia.org/wiki/Superconductors) and [trapped ions](https://en.wikipedia.org/wiki/Trapped_ion) are some of the most developed proposals, but experimentalists are considering other hardware possibilities as well.
For example, [topological quantum computer](https://en.wikipedia.org/wiki/Topological_quantum_computer) approaches are being explored for more fault-tolerance computing systems.

The first quantum logic gates were implemented with [trapped ions](https://en.wikipedia.org/wiki/Trapped_ion) and prototype general-purpose machines with up to 20 qubits have been realized. However, the technology behind these devices combines complex vacuum equipment, lasers, and microwave and radio frequency equipment, making full-scale processors difficult to integrate with standard computing equipment. Moreover, the trapped ion system itself has engineering challenges to overcome.

The largest commercial systems are based on [superconductor](https://en.wikipedia.org/wiki/Superconductor) devices and have scaled to 2000 qubits. However, the error rates for larger machines have been on the order of 5%. Technologically, these devices are all cryogenic and scaling to large numbers of qubits requires wafer-scale integration, a serious engineering challenge by itself.

In addition to cryogenic platforms, room-temperature approaches to spin–photon interfaces have been experimentally demonstrated. In 2025, researchers at Stanford University realized a nanoscale device in which a thin layer of molybdenum diselenide is integrated on a nanostructured silicon substrate, enabling a spin–photon interface that operates at ambient conditions using structured "twisted" light to couple electronic and photonic degrees of freedom. Such room-temperature, chip-integrated spin–photon interfaces are being investigated as potential building blocks for heterogeneous quantum networks that combine different qubit modalities and reduce reliance on large cryogenic infrastructures.

## Future outlook and challenges

Despite significant progress in quantum computing research, large-scale, fault-tolerant quantum computers remain an open challenge. Current systems are limited by decoherence, gate fidelity, and qubit connectivity, which restrict their practical applications. Researchers are actively working on scalable architectures, improved error correction techniques, and hybrid quantum-classical systems to bridge the gap between theoretical capability and real-world usability. While quantum advantage has been demonstrated in specific benchmark problems, achieving consistent, practical quantum advantage for real-world workloads remains a long-term goal.

## Industry and commercial development

In recent years, major technology companies and startups have significantly contributed to the development of quantum computing. Companies such as IBM, Google, Microsoft, and IonQ are building quantum processors and cloud-based quantum computing platforms to make the technology more accessible. IBM and Google have developed superconducting qubit-based systems, while companies like IonQ focus on trapped-ion technology. Cloud-based quantum computing services allow researchers and developers to experiment with quantum circuits remotely, accelerating research and adoption. Despite these advancements, most systems remain in the experimental stage and are not yet capable of outperforming classical computers for general-purpose tasks.

## Theory

### Computability

Any [computational problem](https://en.wikipedia.org/wiki/Computational_problem) solvable by a classical computer is also solvable by a quantum computer. Intuitively, this is because it is believed that all physical phenomena, including the operation of classical computers, can be described using [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics), which underlies the operation of quantum computers.

Conversely, any problem solvable by a quantum computer is also solvable by a classical computer. It is possible to simulate both quantum and classical computers manually with just some paper and a pen, if given enough time. More formally, any quantum computer can be simulated by a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine). In other words, quantum computers provide no additional power over classical computers in terms of [computability](https://en.wikipedia.org/wiki/Computability). This means that quantum computers cannot solve [undecidable problems](https://en.wikipedia.org/wiki/Undecidable_problem) like the [halting problem](https://en.wikipedia.org/wiki/Halting_problem), and the existence of quantum computers does not disprove the [Church–Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis).

### Complexity

While quantum computers cannot solve any problems that classical computers cannot already solve, it is suspected that they can solve certain problems faster than classical computers. For instance, it is known that quantum computers can efficiently [factor integers](https://en.wikipedia.org/wiki/Integer_factorization), while this is not believed to be the case for classical computers.

The class of [problems](https://en.wikipedia.org/wiki/Computational_problem) that can be efficiently solved by a quantum computer with bounded error is called [BQP](https://en.wikipedia.org/wiki/BQP), for "bounded error, quantum, polynomial time". More formally, BQP is the class of problems that can be solved by a polynomial-time quantum Turing machine with an error probability of at most 1/3. As a class of probabilistic problems, BQP is the quantum counterpart to [BPP](https://en.wikipedia.org/wiki/BPP_(complexity)) ("bounded error, probabilistic, polynomial time"), the class of problems that can be solved by polynomial-time [probabilistic Turing machines](https://en.wikipedia.org/wiki/Probabilistic_Turing_machine) with bounded error. It is known that 

B
P
P
⊆ ⊆ 
B
Q
P

{\displaystyle {\mathsf {BPP\subseteq BQP}}}

 but there is no proof 

B
Q
P
≠ ≠ 
B
P
P

{\displaystyle {\mathsf {BQP\neq BPP}}}

, which intuitively would mean that quantum computers are more powerful than classical computers in terms of [time complexity](https://en.wikipedia.org/wiki/Time_complexity).

The suspected relationship of BQP to several classical complexity classes

The exact relationship of BQP to [P](https://en.wikipedia.org/wiki/P_(complexity)), [NP](https://en.wikipedia.org/wiki/NP_(complexity)), and [PSPACE](https://en.wikipedia.org/wiki/PSPACE_(complexity)) is not known. However, it is known that 

P
⊆ ⊆ 
B
Q
P
⊆ ⊆ 
P
S
P
A
C
E

{\displaystyle {\mathsf {P\subseteq BQP\subseteq PSPACE}}}

; that is, all problems that can be efficiently solved by a deterministic classical computer can also be efficiently solved by a quantum computer, and all problems that can be efficiently solved by a quantum computer can also be solved by a deterministic classical computer with polynomial space resources. It is further suspected that BQP is a strict superset of P, meaning that there exist problems that are efficiently solvable by quantum computers that are not efficiently solvable by deterministic classical computers. For instance, integer factorization and the [discrete logarithm problem](https://en.wikipedia.org/wiki/Discrete_logarithm_problem) are known to be in BQP and are suspected to be outside of P. On the relationship of BQP to NP, little is known beyond the fact that some NP problems that are believed not to be in P are also in BQP (integer factorization and the discrete logarithm problem are both in NP, for example). It is suspected that 

N
P
⊈ ⊈ 
B
Q
P

{\displaystyle {\mathsf {NP\nsubseteq BQP}}}

; that is, it is believed that there are efficiently checkable problems that are not efficiently solvable by a quantum computer. As a direct consequence of this belief, it is also suspected that BQP is disjoint from the class of [NP-complete](https://en.wikipedia.org/wiki/NP-complete) problems (if an NP-complete problem were in BQP, then it would follow from [NP-hardness](https://en.wikipedia.org/wiki/NP-hard) that all problems in NP are in BQP).

## See also

* [D-Wave Systems](https://en.wikipedia.org/wiki/D-Wave_Systems) – Quantum computing company
* [Electronic quantum holography](https://en.wikipedia.org/wiki/Electronic_quantum_holography) – Information storage technology
* [Glossary of quantum computing](https://en.wikipedia.org/wiki/Glossary_of_quantum_computing)
* [Intelligence Advanced Research Projects Activity](https://en.wikipedia.org/wiki/Intelligence_Advanced_Research_Projects_Activity) – American government agency
* [India's quantum computer](https://en.wikipedia.org/wiki/India%27s_quantum_computer) – Indian proposed quantum computer

    * [QpiAI-Indus](https://en.wikipedia.org/wiki/QpiAI-Indus) – India's first full stack quantum computer
* [IonQ](https://en.wikipedia.org/wiki/IonQ) – US information technology company
* [List of emerging technologies](https://en.wikipedia.org/wiki/List_of_emerging_technologies) – New technologies actively in development
* [List of quantum computing journals](https://en.wikipedia.org/wiki/List_of_quantum_computing_journals)
* [List of quantum processors](https://en.wikipedia.org/wiki/List_of_quantum_processors)
* [Magic state distillation](https://en.wikipedia.org/wiki/Magic_state_distillation) – Quantum computing algorithm
* [Metacomputing](https://en.wikipedia.org/wiki/Metacomputing) – Computing for the purpose of computing
* [Natural computing](https://en.wikipedia.org/wiki/Natural_computing) – Methods that imitate, replicate or use natural processes
* [Non-local quantum computation](https://en.wikipedia.org/wiki/Non-local_quantum_computation) – Method of quantum computing via entanglement
* [Optical computing](https://en.wikipedia.org/wiki/Optical_computing) – Computer that uses photons or light waves
* [Quantum bus](https://en.wikipedia.org/wiki/Quantum_bus) – Device to store or transfer information in quantum computing
* [Quantum cognition](https://en.wikipedia.org/wiki/Quantum_cognition) – Application of quantum theory mathematics to cognitive phenomena
* [Quantum sensor](https://en.wikipedia.org/wiki/Quantum_sensor) – Device measuring quantum mechanical effects
* [Quantum volume](https://en.wikipedia.org/wiki/Quantum_volume) – Metric for a quantum computer's capabilities
* [Quantum weirdness](https://en.wikipedia.org/wiki/Quantum_weirdness) – Unintuitive aspects of quantum mechanics
* [Rigetti Computing](https://en.wikipedia.org/wiki/Rigetti_Computing) – American quantum computing company
* [Supercomputer](https://en.wikipedia.org/wiki/Supercomputer) – Type of extremely powerful computer
* [Theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science) – Subfield of computer science and mathematics
* [Unconventional computing](https://en.wikipedia.org/wiki/Unconventional_computing) – Computing by new or unusual methods
* [Valleytronics](https://en.wikipedia.org/wiki/Valleytronics) – Experimental area in semiconductors

## Notes

1. **^** The [standard basis](https://en.wikipedia.org/wiki/Standard_basis) is also the *computational basis*.

## References

1. **^** Mermin 2007, p. 1.
2. **^** Aaronson 2013, p. 132.
3. **^** [Zwiebach, Barton](https://en.wikipedia.org/wiki/Barton_Zwiebach) (2022). *Mastering Quantum Mechanics: Essentials, Theory, and Applications*. MIT Press. §1. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-04613-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-04613-8). Quantum physics has replaced classical physics as the correct fundamental description of our physical universe. It is used routinely to describe most phenomena that occur at short distances. [...] The era of quantum physics began in earnest in 1925 with the discoveries of Erwin Schrödinger and Werner Heisenberg. The seeds for these discoveries were planted by Max Planck, Albert Einstein, Niels Bohr, Louis de Broglie, and others.
4. **^** [Weinberg, Steven](https://en.wikipedia.org/wiki/Steven_Weinberg) (2015). "Historical Introduction". *Lectures on Quantum Mechanics* (2nd ed.). Cambridge University Press. pp. 1–30. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-107-11166-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-107-11166-0).
5. **^** Ceruzzi, Paul E. (2012). *Computing: A Concise History*. [Cambridge, Massachusetts](https://en.wikipedia.org/wiki/Cambridge,_Massachusetts): MIT Press. pp. 3, 46. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-31038-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-31038-3). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [796812982](https://search.worldcat.org/oclc/796812982).
6. **^** [Hodges, Andrew](https://en.wikipedia.org/wiki/Andrew_Hodges) (2014). *Alan Turing: The Enigma*. Princeton, New Jersey: [Princeton University Press](https://en.wikipedia.org/wiki/Princeton_University_Press). p. xviii. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-691-16472-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-691-16472-4).
7. **^** Mårtensson-Pendrill, Ann-Marie (1 November 2006). "The Manhattan project—a part of physics history". *Physics Education*. **41** (6): 493–501. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2006PhyEd..41..493M](https://ui.adsabs.harvard.edu/abs/2006PhyEd..41..493M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1088/0031-9120/41/6/001](https://doi.org/10.1088%2F0031-9120%2F41%2F6%2F001). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0031-9120](https://search.worldcat.org/issn/0031-9120). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [120294023](https://api.semanticscholar.org/CorpusID:120294023).
8. ^   [Benioff, Paul](https://en.wikipedia.org/wiki/Paul_Benioff) (1980). "The computer as a physical system: A microscopic quantum mechanical Hamiltonian model of computers as represented by Turing machines". *Journal of Statistical Physics*. **22** (5): 563–591. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1980JSP....22..563B](https://ui.adsabs.harvard.edu/abs/1980JSP....22..563B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/bf01011339](https://doi.org/10.1007%2Fbf01011339). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [122949592](https://api.semanticscholar.org/CorpusID:122949592).
9. **^** Buluta, Iulia; Nori, Franco (2 October 2009). "Quantum Simulators". *Science*. **326** (5949): 108–111. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2009Sci...326..108B](https://ui.adsabs.harvard.edu/abs/2009Sci...326..108B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1126/science.1177838](https://doi.org/10.1126%2Fscience.1177838). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0036-8075](https://search.worldcat.org/issn/0036-8075). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [19797653](https://pubmed.ncbi.nlm.nih.gov/19797653). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [17187000](https://api.semanticscholar.org/CorpusID:17187000).
10. **^** [Manin, Yu. I.](https://en.wikipedia.org/wiki/Yuri_Manin) (1980). [*Vychislimoe i nevychislimoe*](https://web.archive.org/web/20130510173823/http://publ.lib.ru/ARCHIVES/M/MANIN_Yuriy_Ivanovich/Manin_Yu.I._Vychislimoe_i_nevychislimoe.(1980).%5Bdjv%5D.zip) [*Computable and Noncomputable*] (in Russian). Soviet Radio. pp. 13–15. Archived from [the original](http://publ.lib.ru/ARCHIVES/M/MANIN_Yuriy_Ivanovich/Manin_Yu.I._Vychislimoe_i_nevychislimoe.(1980).%5bdjv-fax%5d.zip) on 10 May 2013. Retrieved 4 March 2013.
11. **^** [Feynman, Richard](https://en.wikipedia.org/wiki/Richard_Feynman) (June 1982). ["Simulating Physics with Computers"](https://web.archive.org/web/20190108115138/https://people.eecs.berkeley.edu/~christos/classics/Feynman.pdf) (PDF). *International Journal of Theoretical Physics*. **21** (6/7): 467–488. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1982IJTP...21..467F](https://ui.adsabs.harvard.edu/abs/1982IJTP...21..467F). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF02650179](https://doi.org/10.1007%2FBF02650179). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [124545445](https://api.semanticscholar.org/CorpusID:124545445). Archived from [the original](https://people.eecs.berkeley.edu/~christos/classics/Feynman.pdf) (PDF) on 8 January 2019. Retrieved 28 February 2019.
12. **^** Nielsen & Chuang 2010, p. 214.
13. ^   Bennett, C. H.; Brassard, G. (1984). "Quantum cryptography: Public key distribution and coin tossing". *Proceedings of the International Conference on Computers, Systems & Signal Processing, Bangalore, India*. Vol. 1. New York: IEEE. pp. 175–179. Reprinted as Bennett, C. H.; Brassard, G. (4 December 2014). ["Quantum cryptography: Public key distribution and coin tossing"](https://doi.org/10.1016%2Fj.tcs.2014.05.025). *Theoretical Computer Science*. Theoretical Aspects of Quantum Cryptography – celebrating 30 years of BB84. **560** (1): 7–11. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2003.06557](https://arxiv.org/abs/2003.06557). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2014TComS.560....7B](https://ui.adsabs.harvard.edu/abs/2014TComS.560....7B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.tcs.2014.05.025](https://doi.org/10.1016%2Fj.tcs.2014.05.025).
14. **^** Brassard, G. (2005). "Brief history of quantum cryptography: A personal perspective". *IEEE Information Theory Workshop on Theory and Practice in Information-Theoretic Security, 2005*. Awaji Island, Japan: IEEE. pp. 19–23. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/0604072](https://arxiv.org/abs/quant-ph/0604072). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/ITWTPI.2005.1543949](https://doi.org/10.1109%2FITWTPI.2005.1543949). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-7803-9491-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7803-9491-9). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [16118245](https://api.semanticscholar.org/CorpusID:16118245).
15. **^** Deutsch, D. (8 July 1985). "Quantum theory, the Church–Turing principle and the universal quantum computer". *Proceedings of the Royal Society of London. A. Mathematical and Physical Sciences*. **400** (1818): 97–117. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1985RSPSA.400...97D](https://ui.adsabs.harvard.edu/abs/1985RSPSA.400...97D). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1098/rspa.1985.0070](https://doi.org/10.1098%2Frspa.1985.0070). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0080-4630](https://search.worldcat.org/issn/0080-4630). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1438116](https://api.semanticscholar.org/CorpusID:1438116).
16. **^** Bernstein, Ethan; Vazirani, Umesh (1993). ["Quantum complexity theory"](http://portal.acm.org/citation.cfm?doid=167088.167097). *Proceedings of the twenty-fifth annual ACM symposium on Theory of computing – STOC '93*. San Diego, California, United States: ACM Press. pp. 11–20. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/167088.167097](https://doi.org/10.1145%2F167088.167097). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-89791-591-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-89791-591-5). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [676378](https://api.semanticscholar.org/CorpusID:676378).
17. **^** Simon, D. R. (1994). "On the power of quantum computation". *Proceedings 35th Annual Symposium on Foundations of Computer Science*. Santa Fe, New Mexico, USA: IEEE Comput. Soc. Press. pp. 116–123. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SFCS.1994.365701](https://doi.org/10.1109%2FSFCS.1994.365701). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-8186-6580-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-8186-6580-6). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [7457814](https://api.semanticscholar.org/CorpusID:7457814).
18. **^** Nielsen & Chuang 2010, p. 30-32.
19. **^** [Shor, Peter W.](https://en.wikipedia.org/wiki/Peter_Shor) (1994). *Algorithms for Quantum Computation: Discrete Logarithms and Factoring*. [Symposium on Foundations of Computer Science](https://en.wikipedia.org/wiki/Symposium_on_Foundations_of_Computer_Science). [Santa Fe, New Mexico](https://en.wikipedia.org/wiki/Santa_Fe,_New_Mexico): [IEEE](https://en.wikipedia.org/wiki/IEEE). pp. 124–134. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SFCS.1994.365700](https://doi.org/10.1109%2FSFCS.1994.365700). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-8186-6580-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-8186-6580-6).
20. **^** Grover, Lov K. (1996). *A fast quantum mechanical algorithm for database search*. ACM symposium on Theory of computing. [Philadelphia](https://en.wikipedia.org/wiki/Philadelphia): ACM Press. pp. 212–219. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/9605043](https://arxiv.org/abs/quant-ph/9605043). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/237814.237866](https://doi.org/10.1145%2F237814.237866). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-89791-785-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-89791-785-8).
21. ^   Nielsen & Chuang 2010, p. 7.
22. ^   Lloyd, Seth (23 August 1996). "Universal Quantum Simulators". *Science*. **273** (5278): 1073–1078. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1996Sci...273.1073L](https://ui.adsabs.harvard.edu/abs/1996Sci...273.1073L). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1126/science.273.5278.1073](https://doi.org/10.1126%2Fscience.273.5278.1073). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0036-8075](https://search.worldcat.org/issn/0036-8075). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [8688088](https://pubmed.ncbi.nlm.nih.gov/8688088). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [43496899](https://api.semanticscholar.org/CorpusID:43496899).
23. **^** Cao, Yudong; Romero, Jonathan; Olson, Jonathan P.; Degroote, Matthias; Johnson, Peter D.; et al. (9 October 2019). "Quantum Chemistry in the Age of Quantum Computing". *Chemical Reviews*. **119** (19): 10856–10915. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1812.09976](https://arxiv.org/abs/1812.09976). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019ChRv..11910856C](https://ui.adsabs.harvard.edu/abs/2019ChRv..11910856C). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1021/acs.chemrev.8b00803](https://doi.org/10.1021%2Facs.chemrev.8b00803). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0009-2665](https://search.worldcat.org/issn/0009-2665). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [31469277](https://pubmed.ncbi.nlm.nih.gov/31469277). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [119417908](https://api.semanticscholar.org/CorpusID:119417908).
24. ^   Grumbling & Horowitz 2019, pp. 164–169.
25. **^** Chuang, Isaac L.; Gershenfeld, Neil; Kubinec, Markdoi (April 1998). "Experimental Implementation of Fast Quantum Searching". *Physical Review Letters*. **80** (15). [American Physical Society](https://en.wikipedia.org/wiki/American_Physical_Society): 3408–3411. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1998PhRvL..80.3408C](https://ui.adsabs.harvard.edu/abs/1998PhRvL..80.3408C). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevLett.80.3408](https://doi.org/10.1103%2FPhysRevLett.80.3408).
26. **^** Holton, William Coffeen. ["quantum computer"](https://www.britannica.com/technology/quantum-computer). *Encyclopedia Britannica*. [Encyclopædia Britannica](https://en.wikipedia.org/wiki/Encyclop%C3%A6dia_Britannica). Retrieved 4 December 2021.
27. **^** Gibney, Elizabeth (23 October 2019). ["Hello quantum world! Google publishes landmark quantum supremacy claim"](https://doi.org/10.1038%2Fd41586-019-03213-z). *Nature*. **574** (7779): 461–462. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019Natur.574..461G](https://ui.adsabs.harvard.edu/abs/2019Natur.574..461G). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/d41586-019-03213-z](https://doi.org/10.1038%2Fd41586-019-03213-z). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [31645740](https://pubmed.ncbi.nlm.nih.gov/31645740).
28. ^   Lay summary: Martinis, John; Boixo, Sergio (23 October 2019). ["Quantum Supremacy Using a Programmable Superconducting Processor"](https://ai.googleblog.com/2019/10/quantum-supremacy-using-programmable.html). *Nature*. **574** (7779). [Google AI](https://en.wikipedia.org/wiki/Google_AI): 505–510. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1910.11333](https://arxiv.org/abs/1910.11333). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019Natur.574..505A](https://ui.adsabs.harvard.edu/abs/2019Natur.574..505A). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41586-019-1666-5](https://doi.org/10.1038%2Fs41586-019-1666-5). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [31645734](https://pubmed.ncbi.nlm.nih.gov/31645734). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [204836822](https://api.semanticscholar.org/CorpusID:204836822). Retrieved 27 April 2022.  
 • Journal article: Arute, Frank; Arya, Kunal; Babbush, Ryan; Bacon, Dave; Bardin, Joseph C.; et al. (23 October 2019). "Quantum supremacy using a programmable superconducting processor". *Nature*. **574** (7779): 505–510. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1910.11333](https://arxiv.org/abs/1910.11333). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019Natur.574..505A](https://ui.adsabs.harvard.edu/abs/2019Natur.574..505A). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41586-019-1666-5](https://doi.org/10.1038%2Fs41586-019-1666-5). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [31645734](https://pubmed.ncbi.nlm.nih.gov/31645734). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [204836822](https://api.semanticscholar.org/CorpusID:204836822).
29. **^** Aaronson, Scott (30 October 2019). ["Opinion | Why Google's Quantum Supremacy Milestone Matters"](https://www.nytimes.com/2019/10/30/opinion/google-quantum-computer-sycamore.html). *The New York Times*. [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0362-4331](https://search.worldcat.org/issn/0362-4331). Retrieved 25 September 2021.
30. **^** Pan, Feng; Zhang, Pan (4 March 2021). "Simulating the Sycamore quantum supremacy circuits". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2103.03074](https://arxiv.org/abs/2103.03074) [[quant-ph](https://arxiv.org/archive/quant-ph)].
31. **^** Sample, Ian (23 October 2019). ["Google claims it has achieved 'quantum supremacy' – but IBM disagrees"](https://www.theguardian.com/technology/2019/oct/23/google-claims-it-has-achieved-quantum-supremacy-but-ibm-disagrees). *The Guardian*. [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0261-3077](https://search.worldcat.org/issn/0261-3077). Retrieved 1 August 2025.
32. **^** Bravyi. ["High-threshold and low-overhead fault-tolerant quantum memory"](https://www.nature.com/articles/s41586-024-07107-7). *Nature*.
33. **^** [Bennett, Charlie](https://en.wikipedia.org/wiki/Charles_H._Bennett_(physicist)) (31 July 2020). [*Information Is Quantum: How Physics Helped Explain the Nature of Information and What Can Be Done With It*](https://www.youtube.com/live/rslt-LwtDK4&t=4102) (Videotape).  Event occurs at 1:08:22 – via YouTube.
34. **^** Nielsen & Chuang 2010, p. 13.
35. ^   Mermin 2007, p. 17.
36. ^   Mermin 2007, p. 18.
37. **^** Aaronson 2013, p. 110.
38. **^** Nielsen & Chuang 2010, p. 30–32.
39. **^** Mermin 2007, pp. 38–39.
40. **^** Kurgalin, Sergei; Borzunov, Sergei (2021). *Concise guide to quantum computing: algorithms, exercises, and implementations*. Texts in computer science. Cham: Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-030-65054-4](https://en.wikipedia.org/wiki/Special:BookSources/978-3-030-65054-4).
41. **^** Das, A.; Chakrabarti, B. K. (2008). "Quantum Annealing and Analog Quantum Computation". *[Rev. Mod. Phys.](https://en.wikipedia.org/wiki/Reviews_of_Modern_Physics)* **80** (3): 1061–1081. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[0801.2193](https://arxiv.org/abs/0801.2193). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2008RvMP...80.1061D](https://ui.adsabs.harvard.edu/abs/2008RvMP...80.1061D). [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.563.9990](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.563.9990). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/RevModPhys.80.1061](https://doi.org/10.1103%2FRevModPhys.80.1061). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [14255125](https://api.semanticscholar.org/CorpusID:14255125).
42. **^** Nayak, Chetan; Simon, Steven; Stern, Ady; Das Sarma, Sankar (2008). "Nonabelian Anyons and Quantum Computation". *Reviews of Modern Physics*. **80** (3): 1083–1159. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[0707.1889](https://arxiv.org/abs/0707.1889). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2008RvMP...80.1083N](https://ui.adsabs.harvard.edu/abs/2008RvMP...80.1083N). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/RevModPhys.80.1083](https://doi.org/10.1103%2FRevModPhys.80.1083). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [119628297](https://api.semanticscholar.org/CorpusID:119628297).
43. ^   Chi-Chih Yao, A. (1993). "Quantum circuit complexity". *Proceedings of 1993 IEEE 34th Annual Foundations of Computer Science*. pp. 352–361. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SFCS.1993.366852](https://doi.org/10.1109%2FSFCS.1993.366852). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-8186-4370-6](https://en.wikipedia.org/wiki/Special:BookSources/0-8186-4370-6). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [195866146](https://api.semanticscholar.org/CorpusID:195866146).
44. **^** Raussendorf, Robert; Browne, Daniel E.; Briegel, Hans J. (25 August 2003). "Measurement-based quantum computation on cluster states". *Physical Review A*. **68** (2) 022312. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/0301052](https://arxiv.org/abs/quant-ph/0301052). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2003PhRvA..68b2312R](https://ui.adsabs.harvard.edu/abs/2003PhRvA..68b2312R). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevA.68.022312](https://doi.org/10.1103%2FPhysRevA.68.022312). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [6197709](https://api.semanticscholar.org/CorpusID:6197709).
45. **^** Aharonov, Dorit; van Dam, Wim; Kempe, Julia; Landau, Zeph; Lloyd, Seth; Regev, Oded (1 January 2008). "Adiabatic Quantum Computation Is Equivalent to Standard Quantum Computation". *SIAM Review*. **50** (4): 755–787. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/0405098](https://arxiv.org/abs/quant-ph/0405098). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2008SIAMR..50..755A](https://ui.adsabs.harvard.edu/abs/2008SIAMR..50..755A). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/080734479](https://doi.org/10.1137%2F080734479). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0036-1445](https://search.worldcat.org/issn/0036-1445). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1503123](https://api.semanticscholar.org/CorpusID:1503123).
46. **^** Freedman, Michael H.; Larsen, Michael; Wang, Zhenghan (1 June 2002). "A Modular Functor Which is Universal for Quantum Computation". *Communications in Mathematical Physics*. **227** (3): 605–622. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/0001108](https://arxiv.org/abs/quant-ph/0001108). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2002CMaPh.227..605F](https://ui.adsabs.harvard.edu/abs/2002CMaPh.227..605F). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s002200200645](https://doi.org/10.1007%2Fs002200200645). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0010-3616](https://search.worldcat.org/issn/0010-3616). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [8990600](https://api.semanticscholar.org/CorpusID:8990600).
47. **^** Nielsen & Chuang 2010, p. 481.
48. ^       Preskill, John (6 August 2018). ["Quantum Computing in the NISQ era and beyond"](https://doi.org/10.22331%2Fq-2018-08-06-79). *Quantum*. **2** 79. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1801.00862](https://arxiv.org/abs/1801.00862). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2018Quant...2...79P](https://ui.adsabs.harvard.edu/abs/2018Quant...2...79P). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.22331/q-2018-08-06-79](https://doi.org/10.22331%2Fq-2018-08-06-79). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [44098998](https://api.semanticscholar.org/CorpusID:44098998).
49. **^** Bluvstein, Dolev; Evered, Simon J.; Geim, Alexandra A.; Li, Sophie H.; Zhou, Hengyun; Manovitz, Tom; Ebadi, Sepehr; Cain, Madelyn; Kalinowski, Marcin; Hangleiter, Dominik; Ataides, J. Pablo Bonilla; Maskara, Nishad; Cong, Iris; Gao, Xun; Rodriguez, Pedro Sales (6 December 2023). ["Logical quantum processor based on reconfigurable atom arrays"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10830422). *Nature*. **626** (7997): 58–65. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2312.03982](https://arxiv.org/abs/2312.03982). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41586-023-06927-3](https://doi.org/10.1038%2Fs41586-023-06927-3). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1476-4687](https://search.worldcat.org/issn/1476-4687). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [10830422](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10830422). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [38056497](https://pubmed.ncbi.nlm.nih.gov/38056497). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [266052773](https://api.semanticscholar.org/CorpusID:266052773).
50. **^** ["DARPA-Funded Research Leads to Quantum Computing Breakthrough"](https://www.darpa.mil/news-events/2023-12-06). *darpa.mil*. 6 December 2023. Retrieved 5 January 2024.
51. **^** Choudhury, Rizwan (30 December 2023). ["Top 7 innovation stories of 2023 – Interesting Engineering"](https://interestingengineering.com/lists/top-7-innovation-stories-of-2023-interesting-engineering). *interestingengineering.com*. Retrieved 6 January 2024.
52. ^   Gisin, Nicolas; Ribordy, Grégoire; Tittel, Wolfgang; Zbinden, Hugo (8 March 2002). ["Quantum cryptography"](https://link.aps.org/doi/10.1103/RevModPhys.74.145). *Reviews of Modern Physics*. **74** (1): 145–195. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/0101098](https://arxiv.org/abs/quant-ph/0101098). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2002RvMP...74..145G](https://ui.adsabs.harvard.edu/abs/2002RvMP...74..145G). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/RevModPhys.74.145](https://doi.org/10.1103%2FRevModPhys.74.145). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0034-6861](https://search.worldcat.org/issn/0034-6861).
53. ^   Pirandola, S.; Andersen, U. L.; Banchi, L.; Berta, M.; Bunandar, D.; Colbeck, R.; Englund, D.; Gehring, T.; Lupo, C.; Ottaviani, C.; Pereira, J.; Razavi, M.; Shamsul Shaari, J.; Tomamichel, M.; Usenko, V. C.; Vallone, G.; Villoresi, P.; Wallden, P. (2020). "Advances in quantum cryptography". *Advances in Optics and Photonics*. **12** (4): 1012. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1906.01645](https://arxiv.org/abs/1906.01645). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2020AdOP...12.1012P](https://ui.adsabs.harvard.edu/abs/2020AdOP...12.1012P). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1364/AOP.361502](https://doi.org/10.1364%2FAOP.361502).
54. **^** Shor, Peter W. (1994). "Algorithms for quantum computation: discrete logarithms and factoring". *Proceedings 35th Annual Symposium on Foundations of Computer Science*: 124–134. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SFCS.1994.365700](https://doi.org/10.1109%2FSFCS.1994.365700).
55. **^** Mosca, Michele (2018). "Cybersecurity in an era with quantum computers". *IEEE Security & Privacy*. **16** (5): 38–41. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/MSP.2018.3761723](https://doi.org/10.1109%2FMSP.2018.3761723).
56. **^** ["Post-Quantum Cryptography"](https://csrc.nist.gov/projects/post-quantum-cryptography). National Institute of Standards and Technology.
57. **^** Xu, Feihu; Ma, Xiongfeng; Zhang, Qiang; Lo, Hoi-Kwong; Pan, Jian-Wei (26 May 2020). "Secure quantum key distribution with realistic devices". *Reviews of Modern Physics*. **92** (2): 025002-3. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1903.09051](https://arxiv.org/abs/1903.09051). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2020RvMP...92b5002X](https://ui.adsabs.harvard.edu/abs/2020RvMP...92b5002X). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/RevModPhys.92.025002](https://doi.org/10.1103%2FRevModPhys.92.025002). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [210942877](https://api.semanticscholar.org/CorpusID:210942877).
58. **^** Xu, Guobin; Mao, Jianzhou; Sakk, Eric; Wang, Shuangbao Paul (22 March 2023). "An Overview of Quantum-Safe Approaches: Quantum Key Distribution and Post-Quantum Cryptography". *2023 57th Annual Conference on Information Sciences and Systems (CISS)*. [IEEE](https://en.wikipedia.org/wiki/IEEE). p. 3. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/CISS56502.2023.10089619](https://doi.org/10.1109%2FCISS56502.2023.10089619). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-6654-5181-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-6654-5181-9).
59. **^** Kozlowski, Wojciech; Wehner, Stephanie (25 September 2019). "Towards Large-Scale Quantum Networks". *Proceedings of the Sixth Annual ACM International Conference on Nanoscale Computing and Communication*. ACM. pp. 1–7. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1909.08396](https://arxiv.org/abs/1909.08396). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3345312.3345497](https://doi.org/10.1145%2F3345312.3345497). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-6897-1](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-6897-1).
60. **^** Guo, Xueshi; Breum, Casper R.; Borregaard, Johannes; Izumi, Shuro; Larsen, Mikkel V.; Gehring, Tobias; Christandl, Matthias; Neergaard-Nielsen, Jonas S.; Andersen, Ulrik L. (23 December 2019). "Distributed quantum sensing in a continuous-variable entangled network". *Nature Physics*. **16** (3): 281–284. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1905.09408](https://arxiv.org/abs/1905.09408). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41567-019-0743-x](https://doi.org/10.1038%2Fs41567-019-0743-x). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1745-2473](https://search.worldcat.org/issn/1745-2473). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [256703226](https://api.semanticscholar.org/CorpusID:256703226).
61. ^    Jordan, Stephen (14 October 2022) [22 April 2011]. ["Quantum Algorithm Zoo"](http://math.nist.gov/quantum/zoo/). [Archived](https://web.archive.org/web/20180429014516/https://math.nist.gov/quantum/zoo/) from the original on 29 April 2018.
62. **^** [Aaronson, Scott](https://en.wikipedia.org/wiki/Scott_Aaronson); Arkhipov, Alex (6 June 2011). "The computational complexity of linear optics". *Proceedings of the forty-third annual ACM symposium on Theory of computing*. [San Jose, California](https://en.wikipedia.org/wiki/San_Jose,_California): [Association for Computing Machinery](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery). pp. 333–342. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1011.3245](https://arxiv.org/abs/1011.3245). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1993636.1993682](https://doi.org/10.1145%2F1993636.1993682). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-0691-1](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-0691-1).
63. ^   Nielsen & Chuang 2010, p. 42.
64. **^** Preskill 2018.
65. **^** Norton, Quinn (15 February 2007). ["The Father of Quantum Computing"](http://archive.wired.com/science/discoveries/news/2007/02/72734). *Wired*.
66. **^** Weidman, Jared D.; Sajjan, Manas; Mikolas, Camille; Stewart, Zachary J.; Pollanen, Johannes; Kais, Sabre; Wilson, Angela K. (18 September 2024). "Quantum computing and chemistry". *Cell Reports Physical Science*. **5** (9) 102105. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.xcrp.2024.102105](https://doi.org/10.1016%2Fj.xcrp.2024.102105).
67. **^** Ambainis, Andris (Spring 2014). ["What Can We Do with a Quantum Computer?"](http://www.ias.edu/ias-letter/ambainis-quantum-computing). Institute for Advanced Study.
68. **^** Chang, Kenneth (14 June 2023). ["Quantum Computing Advance Begins New Era, IBM Says – A quantum computer came up with better answers to a physics problem than a conventional supercomputer"](https://www.nytimes.com/2023/06/14/science/ibm-quantum-computing.html). *[The New York Times](https://en.wikipedia.org/wiki/The_New_York_Times)*. Retrieved 15 June 2023.`{{[cite news](https://en.wikipedia.org/wiki/Template:Cite_news)}}`:  CS1 maint: deprecated archival service ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_deprecated_archival_service))
69. **^** Kim, Youngseok; et al. (14 June 2023). ["Evidence for the utility of quantum computing before fault tolerance"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10266970). *[Nature](https://en.wikipedia.org/wiki/Nature_(journal))*. **618** (7965): 500–505. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2023Natur.618..500K](https://ui.adsabs.harvard.edu/abs/2023Natur.618..500K). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41586-023-06096-3](https://doi.org/10.1038%2Fs41586-023-06096-3). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [10266970](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10266970). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [37316724](https://pubmed.ncbi.nlm.nih.gov/37316724).
70. **^** [Morello, Andrea](https://en.wikipedia.org/wiki/Andrea_Morello) (21 November 2018). [*Lunch & Learn: Quantum Computing*](https://web.archive.org/web/20210215140237/https://www.youtube.com/watch?v=7susESgnDv8). [Sibos TV](https://en.wikipedia.org/wiki/Sibos_(conference)). Archived from the original on 15 February 2021. Retrieved 4 February 2021 – via YouTube.`{{[cite AV media](https://en.wikipedia.org/wiki/Template:Cite_AV_media)}}`:  CS1 maint: bot: original URL status unknown ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_bot:_original_URL_status_unknown))
71. **^** Ruane, Jonathan; McAfee, Andrew; Oliver, William D. (1 January 2022). ["Quantum Computing for Business Leaders"](https://hbr.org/2022/01/quantum-computing-for-business-leaders). *Harvard Business Review*. [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0017-8012](https://search.worldcat.org/issn/0017-8012). Retrieved 12 April 2023.
72. **^** Budde, Florian; Volz, Daniel (12 July 2019). ["Quantum computing and the chemical industry | McKinsey"](https://www.mckinsey.com/industries/chemicals/our-insights/the-next-big-thing-quantum-computings-potential-impact-on-chemicals). *www.mckinsey.com*. McKinsey and Company. Retrieved 12 April 2023.
73. **^** Bourzac, Katherine (30 October 2017). ["Chemistry is quantum computing's killer app"](https://cen.acs.org/articles/95/i43/Chemistry-quantum-computings-killer-app.html). *cen.acs.org*. American Chemical Society. Retrieved 12 April 2023.
74. **^** Lenstra, Arjen K. (2000). ["Integer Factoring"](https://web.archive.org/web/20150410234239/http://sage.math.washington.edu/edu/124/misc/arjen_lenstra_factoring.pdf) (PDF). *Designs, Codes and Cryptography*. **19** (2/3): 101–128. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1023/A:1008397921377](https://doi.org/10.1023%2FA%3A1008397921377). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [9816153](https://api.semanticscholar.org/CorpusID:9816153). Archived from [the original](http://sage.math.washington.edu/edu/124/misc/arjen_lenstra_factoring.pdf) (PDF) on 10 April 2015.
75. **^** Nielsen & Chuang 2010, p. 216.
76. ^   Bernstein, Daniel J. (2009). "Introduction to post-quantum cryptography". *Post-Quantum Cryptography*. Berlin, Heidelberg: Springer. pp. 1–14. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-540-88702-7_1](https://doi.org/10.1007%2F978-3-540-88702-7_1). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-88701-0](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-88701-0). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [61401925](https://api.semanticscholar.org/CorpusID:61401925).
77. **^** See also [pqcrypto.org](http://pqcrypto.org/), a bibliography maintained by Daniel J. Bernstein and [Tanja Lange](https://en.wikipedia.org/wiki/Tanja_Lange) on cryptography not known to be broken by quantum computing.
78. **^** McEliece, R. J. (January 1978). ["A Public-Key Cryptosystem Based On Algebraic Coding Theory"](https://ipnpr.jpl.nasa.gov/progress_report2/42-44/44N.PDF) (PDF). *DSNPR*. **44**: 114–116. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1978DSNPR..44..114M](https://ui.adsabs.harvard.edu/abs/1978DSNPR..44..114M).
79. **^** Kobayashi, H.; Gall, F. L. (2006). ["Dihedral Hidden Subgroup Problem: A Survey"](https://doi.org/10.2197%2Fipsjdc.1.470). *Information and Media Technologies*. **1** (1): 178–185. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2197/ipsjdc.1.470](https://doi.org/10.2197%2Fipsjdc.1.470).
80. **^** Bennett, Charles H.; Bernstein, Ethan; Brassard, Gilles; Vazirani, Umesh (October 1997). "Strengths and Weaknesses of Quantum Computing". *SIAM Journal on Computing*. **26** (5): 1510–1523. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/9701001](https://arxiv.org/abs/quant-ph/9701001). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1997quant.ph..1001B](https://ui.adsabs.harvard.edu/abs/1997quant.ph..1001B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/s0097539796300933](https://doi.org/10.1137%2Fs0097539796300933). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [13403194](https://api.semanticscholar.org/CorpusID:13403194).
81. **^** Brassard, Gilles; Høyer, Peter; Tapp, Alain (2016). "Quantum Algorithm for the Collision Problem". In Kao, Ming-Yang (ed.). *Encyclopedia of Algorithms*. New York, New York: Springer. pp. 1662–1664. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/9705002](https://arxiv.org/abs/quant-ph/9705002). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-1-4939-2864-4_304](https://doi.org/10.1007%2F978-1-4939-2864-4_304). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4939-2864-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4939-2864-4). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [3116149](https://api.semanticscholar.org/CorpusID:3116149).
82. **^** Farhi, Edward; Goldstone, Jeffrey; Gutmann, Sam (23 December 2008). ["A Quantum Algorithm for the Hamiltonian NAND Tree"](https://doi.org/10.4086%2Ftoc.2008.v004a008). *Theory of Computing*. **4** (1): 169–190. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.4086/toc.2008.v004a008](https://doi.org/10.4086%2Ftoc.2008.v004a008). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1557-2862](https://search.worldcat.org/issn/1557-2862). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [8258191](https://api.semanticscholar.org/CorpusID:8258191).
83. **^** Williams, Colin P. (2011). *Explorations in Quantum Computing*. [Springer](https://en.wikipedia.org/wiki/Springer_Science%2BBusiness_Media). pp. 242–244. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-84628-887-6](https://en.wikipedia.org/wiki/Special:BookSources/978-1-84628-887-6).
84. **^** [Grover, Lov](https://en.wikipedia.org/wiki/Lov_Grover) (29 May 1996). "A fast quantum mechanical algorithm for database search". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/9605043](https://arxiv.org/abs/quant-ph/9605043).
85. **^** Ambainis, Ambainis (June 2004). "Quantum search algorithms". *ACM SIGACT News*. **35** (2): 22–35. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/0504012](https://arxiv.org/abs/quant-ph/0504012). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2005quant.ph..4012A](https://ui.adsabs.harvard.edu/abs/2005quant.ph..4012A). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/992287.992296](https://doi.org/10.1145%2F992287.992296). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [11326499](https://api.semanticscholar.org/CorpusID:11326499).
86. **^** Rich, Steven; Gellman, Barton (1 February 2014). ["NSA seeks to build quantum computer that could crack most types of encryption"](https://www.washingtonpost.com/world/national-security/nsa-seeks-to-build-quantum-computer-that-could-crack-most-types-of-encryption/2014/01/02/8fff297e-7195-11e3-8def-a33011492df2_story.html). *The Washington Post*.
87. **^** Lucas, Andrew (2014). ["Ising formulations of many NP problems"](https://doi.org/10.3389%2Ffphy.2014.00005). *Frontiers in Physics*. **2**: 5. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1302.5843](https://arxiv.org/abs/1302.5843). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2014FrP.....2....5L](https://ui.adsabs.harvard.edu/abs/2014FrP.....2....5L). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3389/fphy.2014.00005](https://doi.org/10.3389%2Ffphy.2014.00005).
88. **^** Outeiral, Carlos; Strahm, Martin; Morris, Garrett; Benjamin, Simon; Deane, Charlotte; Shi, Jiye (2021). ["The prospects of quantum computing in computational molecular biology"](https://doi.org/10.1002%2Fwcms.1481). *WIREs Computational Molecular Science*. **11** e1481. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2005.12792](https://arxiv.org/abs/2005.12792). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/wcms.1481](https://doi.org/10.1002%2Fwcms.1481). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [218889377](https://api.semanticscholar.org/CorpusID:218889377).
89. **^** Biamonte, Jacob; Wittek, Peter; Pancotti, Nicola; Rebentrost, Patrick; Wiebe, Nathan; Lloyd, Seth (September 2017). "Quantum machine learning". *Nature*. **549** (7671): 195–202. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1611.09347](https://arxiv.org/abs/1611.09347). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2017Natur.549..195B](https://ui.adsabs.harvard.edu/abs/2017Natur.549..195B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/nature23474](https://doi.org/10.1038%2Fnature23474). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0028-0836](https://search.worldcat.org/issn/0028-0836). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [28905917](https://pubmed.ncbi.nlm.nih.gov/28905917). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [64536201](https://api.semanticscholar.org/CorpusID:64536201).
90. **^** Wang, Yuxuan; Xue, Zhaohui; Yuan, Jie; Zhao, Yijia; Li, Yuan; Wu, Yonghao; Pan, Jian-Wei (2024). "A comprehensive review of quantum machine learning". *Fundamental Research*. **5** (2): 378–417. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.fmre.2024.01.008](https://doi.org/10.1016%2Fj.fmre.2024.01.008).
91. **^** Jerbi, Sofiene; Gyurik, Casper; Marshall, Simon C.; Molteni, Riccardo; Dunjko, Vedran (6 July 2024). "Shadows of quantum machine learning". *Nature Communications*. **15**: 5676. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41467-024-49877-8](https://doi.org/10.1038%2Fs41467-024-49877-8).
92. **^** Harrow, Aram; Hassidim, Avinatan; Lloyd, Seth (2009). "Quantum algorithm for solving linear systems of equations". *Physical Review Letters*. **103** (15) 150502. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[0811.3171](https://arxiv.org/abs/0811.3171). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2009PhRvL.103o0502H](https://ui.adsabs.harvard.edu/abs/2009PhRvL.103o0502H). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevLett.103.150502](https://doi.org/10.1103%2FPhysRevLett.103.150502). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [19905613](https://pubmed.ncbi.nlm.nih.gov/19905613). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [5187993](https://api.semanticscholar.org/CorpusID:5187993).
93. **^** Benedetti, Marcello; Realpe-Gómez, John; Biswas, Rupak; Perdomo-Ortiz, Alejandro (9 August 2016). ["Estimation of effective temperatures in quantum annealers for sampling applications: A case study with possible applications in deep learning"](https://doi.org/10.1103%2FPhysRevA.94.022308). *Physical Review A*. **94** (2) 022308. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1510.07611](https://arxiv.org/abs/1510.07611). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2016PhRvA..94b2308B](https://ui.adsabs.harvard.edu/abs/2016PhRvA..94b2308B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevA.94.022308](https://doi.org/10.1103%2FPhysRevA.94.022308).
94. **^** Ajagekar, Akshay; You, Fengqi (5 December 2020). "Quantum computing assisted deep learning for fault detection and diagnosis in industrial process systems". *Computers & Chemical Engineering*. **143** 107119. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2003.00264](https://arxiv.org/abs/2003.00264). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.compchemeng.2020.107119](https://doi.org/10.1016%2Fj.compchemeng.2020.107119). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0098-1354](https://search.worldcat.org/issn/0098-1354). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [211678230](https://api.semanticscholar.org/CorpusID:211678230).
95. **^** Ajagekar, Akshay; You, Fengqi (1 December 2021). ["Quantum computing based hybrid deep learning for fault diagnosis in electrical power systems"](https://doi.org/10.1016%2Fj.apenergy.2021.117628). *Applied Energy*. **303** 117628. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2021ApEn..30317628A](https://ui.adsabs.harvard.edu/abs/2021ApEn..30317628A). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.apenergy.2021.117628](https://doi.org/10.1016%2Fj.apenergy.2021.117628). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0306-2619](https://search.worldcat.org/issn/0306-2619).
96. **^** [Fedichev](https://en.wikipedia.org/wiki/Peter_Fedichev), Peter; Pyrkov, Timothy; Krylov, Ivan (2023). "Quantum machine learning for drug discovery". *Scientific Reports*. **13**. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41598-023-32703-4](https://doi.org/10.1038%2Fs41598-023-32703-4).
97. **^** Borfitz, Deborah (22 August 2023). ["Gero Taps Quantum Computing and AI To Tackle Diseases Of Aging"](https://www.bio-itworld.com/news/2023/08/22/gero-taps-quantum-computing-and-ai-to-tackle-diseases-of-aging). *Bio-IT World*.
98. **^** Gao, Xun; Anschuetz, Eric R.; Wang, Sheng-Tao; Cirac, J. Ignacio; Lukin, Mikhail D. (2022). "Enhancing Generative Models via Quantum Correlations". *Physical Review X*. **12** (2) 021037. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2101.08354](https://arxiv.org/abs/2101.08354). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2022PhRvX..12b1037G](https://ui.adsabs.harvard.edu/abs/2022PhRvX..12b1037G). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevX.12.021037](https://doi.org/10.1103%2FPhysRevX.12.021037). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [231662294](https://api.semanticscholar.org/CorpusID:231662294).
99. **^** Li, Junde; Topaloglu, Rasit; Ghosh, Swaroop (9 January 2021). "Quantum Generative Models for Small Molecule Drug Discovery". *IEEE Transactions on Quantum Engineering*. **2**: 1–8. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2101.03438](https://arxiv.org/abs/2101.03438). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2021ITQE....2E4804L](https://ui.adsabs.harvard.edu/abs/2021ITQE....2E4804L). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TQE.2021.3104804](https://doi.org/10.1109%2FTQE.2021.3104804).
100. ^    
Brooks, Michael (24 May 2023). ["Quantum computers: what are they good for?"](https://doi.org/10.1038%2Fd41586-023-01692-9). *Nature*. **617** (7962): S1–S3. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2023Natur.617S...1B](https://ui.adsabs.harvard.edu/abs/2023Natur.617S...1B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/d41586-023-01692-9](https://doi.org/10.1038%2Fd41586-023-01692-9). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [37225885](https://pubmed.ncbi.nlm.nih.gov/37225885). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [258847001](https://api.semanticscholar.org/CorpusID:258847001).
101. ^     Torsten Hoefler; Thomas Häner; Matthias Troyer (May 2023). ["Disentangling Hype from Practicality: On Realistically Achieving Quantum Advantage"](https://m-cacm.acm.org/magazines/2023/5/272276-disentangling-hype-from-practicality-on-realistically-achieving-quantum-advantage/fulltext). Communications of the ACM.
102. **^** Dyakonov, Mikhail (15 November 2018). ["The Case Against Quantum Computing"](https://spectrum.ieee.org/the-case-against-quantum-computing). *[IEEE Spectrum](https://en.wikipedia.org/wiki/IEEE_Spectrum)*.
103. **^** DiVincenzo, David P. (13 April 2000). "The Physical Implementation of Quantum Computation". *Fortschritte der Physik*. **48** (9–11): 771–783. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/0002077](https://arxiv.org/abs/quant-ph/0002077). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2000ForPh..48..771D](https://ui.adsabs.harvard.edu/abs/2000ForPh..48..771D). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/1521-3978(200009)48:9/11<771::AID-PROP771>3.0.CO;2-E](https://doi.org/10.1002%2F1521-3978%28200009%2948%3A9%2F11%3C771%3A%3AAID-PROP771%3E3.0.CO%3B2-E). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [15439711](https://api.semanticscholar.org/CorpusID:15439711).
104. **^** Pauka SJ, Das K, Kalra B, Moini A, Yang Y, Trainer M, Bousquet A, Cantaloube C, Dick N, Gardner GC, Manfra MJ, Reilly DJ (2021). ["A cryogenic CMOS chip for generating control signals for multiple qubits"](https://www.nature.com/articles/s41928-020-00528-y). *[Nature Electronics](https://en.wikipedia.org/wiki/Nature_Electronics)*. **4** (4): 64–70. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1912.01299](https://arxiv.org/abs/1912.01299). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41928-020-00528-y](https://doi.org/10.1038%2Fs41928-020-00528-y). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [231715555](https://api.semanticscholar.org/CorpusID:231715555).
105. **^** ["Post-Quantum Cryptography Standardization"](https://csrc.nist.gov/projects/post-quantum-cryptography/post-quantum-cryptography-standardization). *NIST (National Institute of Standards and Technology)*. NIST (National Institute of Standards and Technology).
106. **^** Giles, Martin (17 January 2019). ["We'd have more quantum computers if it weren't so hard to find the damn cables"](https://www.technologyreview.com/s/612760/quantum-computers-component-shortage/). MIT Technology Review. Retrieved 17 May 2021.
107. **^** ["A rare earth 'China solution' that leaves US defence agency in the cold"](https://www.scmp.com/news/china/science/article/3346452/chinese-scientists-create-worlds-coldest-alloy-it-may-surprise-darpa). *South China Morning Post*. 17 March 2026. Retrieved 14 April 2026.
108. **^** DiVincenzo, David P. (1995). "Quantum Computation". *Science*. **270** (5234): 255–261. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1995Sci...270..255D](https://ui.adsabs.harvard.edu/abs/1995Sci...270..255D). [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.242.2165](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.242.2165). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1126/science.270.5234.255](https://doi.org/10.1126%2Fscience.270.5234.255). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [220110562](https://api.semanticscholar.org/CorpusID:220110562).
109. **^** Zu, H.; Dai, W.; de Waele, A.T.A.M. (2022). "Development of Dilution refrigerators – A review". *Cryogenics*. **121**. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.cryogenics.2021.103390](https://doi.org/10.1016%2Fj.cryogenics.2021.103390). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0011-2275](https://search.worldcat.org/issn/0011-2275). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [244005391](https://api.semanticscholar.org/CorpusID:244005391).
110. **^** Jones, Nicola (19 June 2013). ["Computing: The quantum company"](https://doi.org/10.1038%2F498286a). *Nature*. **498** (7454): 286–288. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2013Natur.498..286J](https://ui.adsabs.harvard.edu/abs/2013Natur.498..286J). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/498286a](https://doi.org/10.1038%2F498286a). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [23783610](https://pubmed.ncbi.nlm.nih.gov/23783610).
111. **^** Vepsäläinen, Antti P.; Karamlou, Amir H.; Orrell, John L.; Dogra, Akshunna S.; Loer, Ben; et al. (August 2020). ["Impact of ionizing radiation on superconducting qubit coherence"](https://www.nature.com/articles/s41586-020-2619-8). *Nature*. **584** (7822): 551–556. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2001.09190](https://arxiv.org/abs/2001.09190). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2020Natur.584..551V](https://ui.adsabs.harvard.edu/abs/2020Natur.584..551V). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41586-020-2619-8](https://doi.org/10.1038%2Fs41586-020-2619-8). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1476-4687](https://search.worldcat.org/issn/1476-4687). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [32848227](https://pubmed.ncbi.nlm.nih.gov/32848227). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [210920566](https://api.semanticscholar.org/CorpusID:210920566).
112. **^** Amy, Matthew; Matteo, Olivia; Gheorghiu, Vlad; Mosca, Michele; Parent, Alex; Schanck, John (30 November 2016). "Estimating the cost of generic quantum pre-image attacks on SHA-2 and SHA-3". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1603.09383](https://arxiv.org/abs/1603.09383) [[quant-ph](https://arxiv.org/archive/quant-ph)].
113. **^** Dyakonov, M. I. (14 October 2006). S. Luryi; Xu, J.; Zaslavsky, A. (eds.). "Is Fault-Tolerant Quantum Computation Really Possible?". *Future Trends in Microelectronics. Up the Nano Creek*: 4–18. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/0610117](https://arxiv.org/abs/quant-ph/0610117). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2006quant.ph.10117D](https://ui.adsabs.harvard.edu/abs/2006quant.ph.10117D).
114. **^** Ahsan, Muhammad (2015). *Architecture Framework for Trapped-ion Quantum Computer based on Performance Simulation Tool*. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2015PhDT........56A](https://ui.adsabs.harvard.edu/abs/2015PhDT........56A). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [923881411](https://search.worldcat.org/oclc/923881411).
115. **^** Ahsan, Muhammad; Meter, Rodney Van; Kim, Jungsang (28 December 2016). ["Designing a Million-Qubit Quantum Computer Using a Resource Performance Simulator"](https://doi.org/10.1145%2F2830570). *ACM Journal on Emerging Technologies in Computing Systems*. **12** (4): 39:1–39:25. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1512.00796](https://arxiv.org/abs/1512.00796). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/2830570](https://doi.org/10.1145%2F2830570). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1550-4832](https://search.worldcat.org/issn/1550-4832). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1258374](https://api.semanticscholar.org/CorpusID:1258374).
116. **^** Gidney, Craig; Ekerå, Martin (15 April 2021). "How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits". *Quantum*. **5** 433. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1905.09749](https://arxiv.org/abs/1905.09749). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2021Quant...5..433G](https://ui.adsabs.harvard.edu/abs/2021Quant...5..433G). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.22331/q-2021-04-15-433](https://doi.org/10.22331%2Fq-2021-04-15-433). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2521-327X](https://search.worldcat.org/issn/2521-327X). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [162183806](https://api.semanticscholar.org/CorpusID:162183806).
117. **^** Ruiz, Diego; Guillaud, Jérémie; Leverrier, Anthony; Mirrahimi, Mazyar; Vuillot, Christophe (26 January 2025). ["LDPC-cat codes for low-overhead quantum computing in 2D"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11762751). *Nature Communications*. **16** (1) 1040. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2401.09541](https://arxiv.org/abs/2401.09541). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2025NatCo..16.1040R](https://ui.adsabs.harvard.edu/abs/2025NatCo..16.1040R). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41467-025-56298-8](https://doi.org/10.1038%2Fs41467-025-56298-8). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2041-1723](https://search.worldcat.org/issn/2041-1723). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [11762751](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11762751). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [39863608](https://pubmed.ncbi.nlm.nih.gov/39863608).
118. **^** [Freedman, Michael H.](https://en.wikipedia.org/wiki/Michael_Freedman); [Kitaev, Alexei](https://en.wikipedia.org/wiki/Alexei_Kitaev); [Larsen, Michael J.](https://en.wikipedia.org/wiki/Michael_J._Larsen); Wang, Zhenghan (2003). "Topological quantum computation". *Bulletin of the American Mathematical Society*. **40** (1): 31–38. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/0101025](https://arxiv.org/abs/quant-ph/0101025). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1090/S0273-0979-02-00964-3](https://doi.org/10.1090%2FS0273-0979-02-00964-3). [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [1943131](https://mathscinet.ams.org/mathscinet-getitem?mr=1943131).
119. **^** Monroe, Don (1 October 2008). ["Anyons: The breakthrough quantum computing needs?"](https://www.newscientist.com/channel/fundamentals/mg20026761.700-anyons-the-breakthrough-quantum-computing-needs.html). *[New Scientist](https://en.wikipedia.org/wiki/New_Scientist)*.
120. ^   Cossins, Daniel (28 June 2025). "How to think about...Quasiparticles". *[New Scientist](https://en.wikipedia.org/wiki/New_Scientist)*. **266** (3549): 34. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/S0262-4079(25)01046-2](https://doi.org/10.1016%2FS0262-4079%2825%2901046-2).
121. **^** Preskill, John (26 March 2012). "Quantum computing and the entanglement frontier". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1203.5813](https://arxiv.org/abs/1203.5813) [[quant-ph](https://arxiv.org/archive/quant-ph)].
122. **^** Boixo, Sergio; Isakov, Sergei V.; Smelyanskiy, Vadim N.; Babbush, Ryan; Ding, Nan; et al. (2018). "Characterizing Quantum Supremacy in Near-Term Devices". *Nature Physics*. **14** (6): 595–600. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1608.00263](https://arxiv.org/abs/1608.00263). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2018NatPh..14..595B](https://ui.adsabs.harvard.edu/abs/2018NatPh..14..595B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41567-018-0124-x](https://doi.org/10.1038%2Fs41567-018-0124-x). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [4167494](https://api.semanticscholar.org/CorpusID:4167494).
123. **^** Savage, Neil (5 July 2017). ["Quantum Computers Compete for "Supremacy""](https://www.scientificamerican.com/article/quantum-computers-compete-for-supremacy/). *Scientific American*.
124. **^** Giles, Martin (20 September 2019). ["Google researchers have reportedly achieved 'quantum supremacy'"](https://www.technologyreview.com/f/614416/google-researchers-have-reportedly-achieved-quantum-supremacy/). *MIT Technology Review*. Retrieved 15 May 2020.
125. **^** Tavares, Frank (23 October 2019). ["Google and NASA Achieve Quantum Supremacy"](https://www.nasa.gov/feature/ames/quantum-supremacy). *NASA*. Retrieved 16 November 2021.
126. **^** Pednault, Edwin; Gunnels, John A.; Nannicini, Giacomo; Horesh, Lior; Wisnieff, Robert (22 October 2019). "Leveraging Secondary Storage to Simulate Deep 54-qubit Sycamore Circuits". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1910.09534](https://arxiv.org/abs/1910.09534) [[quant-ph](https://arxiv.org/archive/quant-ph)].
127. **^** Cho, Adrian (23 October 2019). ["IBM casts doubt on Google's claims of quantum supremacy"](https://www.science.org/content/article/ibm-casts-doubt-googles-claims-quantum-supremacy). *Science*. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1126/science.aaz6080](https://doi.org/10.1126%2Fscience.aaz6080). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0036-8075](https://search.worldcat.org/issn/0036-8075). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [211982610](https://api.semanticscholar.org/CorpusID:211982610).
128. **^** Liu, Yong (Alexander); Liu, Xin (Lucy); Li, Fang (Nancy); Fu, Haohuan; Yang, Yuling; et al. (14 November 2021). "Closing the "quantum supremacy" gap". *Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis*. SC '21. New York, New York: Association for Computing Machinery. pp. 1–12. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2110.14502](https://arxiv.org/abs/2110.14502). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3458817.3487399](https://doi.org/10.1145%2F3458817.3487399). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-8442-1](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-8442-1). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [239036985](https://api.semanticscholar.org/CorpusID:239036985).
129. **^** Bulmer, Jacob F. F.; Bell, Bryn A.; Chadwick, Rachel S.; Jones, Alex E.; Moise, Diana; et al. (28 January 2022). ["The boundary for quantum advantage in Gaussian boson sampling"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8791606). *Science Advances*. **8** (4) eabl9236. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2108.01622](https://arxiv.org/abs/2108.01622). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2022SciA....8.9236B](https://ui.adsabs.harvard.edu/abs/2022SciA....8.9236B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1126/sciadv.abl9236](https://doi.org/10.1126%2Fsciadv.abl9236). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2375-2548](https://search.worldcat.org/issn/2375-2548). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [8791606](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8791606). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [35080972](https://pubmed.ncbi.nlm.nih.gov/35080972).
130. **^** McCormick, Katie (10 February 2022). ["Race Not Over Between Classical and Quantum Computers"](https://physics.aps.org/articles/v15/19). *Physics*. **15** 19. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2022PhyOJ..15...19M](https://ui.adsabs.harvard.edu/abs/2022PhyOJ..15...19M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/Physics.15.19](https://doi.org/10.1103%2FPhysics.15.19). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [246910085](https://api.semanticscholar.org/CorpusID:246910085).
131. **^** Pan, Feng; Chen, Keyang; Zhang, Pan (2022). "Solving the Sampling Problem of the Sycamore Quantum Circuits". *Physical Review Letters*. **129** (9) 090502. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2111.03011](https://arxiv.org/abs/2111.03011). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2022PhRvL.129i0502P](https://ui.adsabs.harvard.edu/abs/2022PhRvL.129i0502P). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevLett.129.090502](https://doi.org/10.1103%2FPhysRevLett.129.090502). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [36083655](https://pubmed.ncbi.nlm.nih.gov/36083655). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [251755796](https://api.semanticscholar.org/CorpusID:251755796).
132. **^** Cho, Adrian (2 August 2022). ["Ordinary computers can beat Google's quantum computer after all"](https://www.science.org/content/article/ordinary-computers-can-beat-google-s-quantum-computer-after-all). *Science*. **377**. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1126/science.ade2364](https://doi.org/10.1126%2Fscience.ade2364).
133. **^** ["Google's 'quantum supremacy' usurped by researchers using ordinary supercomputer"](https://techcrunch.com/2022/08/05/googles-quantum-supremacy-usurped-by-researchers-using-ordinary-supercomputer/). *TechCrunch*. 5 August 2022. Retrieved 7 August 2022.
134. **^** Ball, Philip (3 December 2020). "Physicists in China challenge Google's 'quantum advantage'". *Nature*. **588** (7838): 380. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2020Natur.588..380B](https://ui.adsabs.harvard.edu/abs/2020Natur.588..380B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/d41586-020-03434-7](https://doi.org/10.1038%2Fd41586-020-03434-7). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [33273711](https://pubmed.ncbi.nlm.nih.gov/33273711). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [227282052](https://api.semanticscholar.org/CorpusID:227282052).
135. **^** Garisto, Daniel. ["Light-based Quantum Computer Exceeds Fastest Classical Supercomputers"](https://www.scientificamerican.com/article/light-based-quantum-computer-exceeds-fastest-classical-supercomputers/). *Scientific American*. Retrieved 7 December 2020.
136. **^** Conover, Emily (3 December 2020). ["The new light-based quantum computer Jiuzhang has achieved quantum supremacy"](https://www.sciencenews.org/article/new-light-based-quantum-computer-jiuzhang-supremacy). *Science News*. Retrieved 7 December 2020.
137. **^** Zhong, Han-Sen; Wang, Hui; Deng, Yu-Hao; Chen, Ming-Cheng; Peng, Li-Chao; et al. (3 December 2020). "Quantum computational advantage using photons". *Science*. **370** (6523): 1460–1463. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2012.01625](https://arxiv.org/abs/2012.01625). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2020Sci...370.1460Z](https://ui.adsabs.harvard.edu/abs/2020Sci...370.1460Z). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1126/science.abe8770](https://doi.org/10.1126%2Fscience.abe8770). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0036-8075](https://search.worldcat.org/issn/0036-8075). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [33273064](https://pubmed.ncbi.nlm.nih.gov/33273064). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [227254333](https://api.semanticscholar.org/CorpusID:227254333).
138. **^** Roberson, Tara M. (21 May 2020). ["Can Hype Be a Force for Good?"](https://doi.org/10.1177%2F0963662520923109). *Public Understanding of Science*. **29** (5): 544–552. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1177/0963662520923109](https://doi.org/10.1177%2F0963662520923109). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0963-6625](https://search.worldcat.org/issn/0963-6625). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [32438851](https://pubmed.ncbi.nlm.nih.gov/32438851). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [218831653](https://api.semanticscholar.org/CorpusID:218831653).
139. **^** Cavaliere, Fabio; Mattsson, John; Smeets, Ben (September 2020). ["The security implications of quantum cryptography and quantum computing"](http://www.magonlinelibrary.com/doi/10.1016/S1353-4858%2820%2930105-7). *Network Security*. **2020** (9): 9–15. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/S1353-4858(20)30105-7](https://doi.org/10.1016%2FS1353-4858%2820%2930105-7). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1353-4858](https://search.worldcat.org/issn/1353-4858). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [222349414](https://api.semanticscholar.org/CorpusID:222349414).
140. **^** Liu, Yong; Chen, Yaojian; Guo, Chu; Song, Jiawei; Shi, Xinmin; Gan, Lin; Wu, Wenzhao; Wu, Wei; Fu, Haohuan; Liu, Xin; Chen, Dexun; Zhao, Zhifeng; Yang, Guangwen; Gao, Jiangang (16 January 2024). ["Verifying Quantum Advantage Experiments with Multiple Amplitude Tensor Network Contraction"](https://link.aps.org/doi/10.1103/PhysRevLett.132.030601). *Physical Review Letters*. **132** (3) 030601. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2212.04749](https://arxiv.org/abs/2212.04749). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2024PhRvL.132c0601L](https://ui.adsabs.harvard.edu/abs/2024PhRvL.132c0601L). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevLett.132.030601](https://doi.org/10.1103%2FPhysRevLett.132.030601). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0031-9007](https://search.worldcat.org/issn/0031-9007). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [38307065](https://pubmed.ncbi.nlm.nih.gov/38307065).
141. **^** Monroe, Don (December 2022). ["Quantum Computers and the Universe"](https://m-cacm.acm.org/magazines/2022/12/266916-quantum-computers-and-the-universe/fulltext). Communications of the ACM.
142. **^** Swayne, Matt (20 June 2023). ["PsiQuantum Sees 700x Reduction in Computational Resource Requirements to Break Elliptic Curve Cryptography With a Fault Tolerant Quantum Computer"](https://thequantuminsider.com/2023/06/20/psiquantum-sees-700x-reduction-in-computational-resource-requirements-to-break-elliptic-curve-cryptography-with-a-fault-tolerant-quantum-computer/). *The Quanrum Insider*.
143. **^** Unruh, Bill (1995). "Maintaining coherence in Quantum Computers". *Physical Review A*. **51** (2): 992–997. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[hep-th/9406058](https://arxiv.org/abs/hep-th/9406058). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1995PhRvA..51..992U](https://ui.adsabs.harvard.edu/abs/1995PhRvA..51..992U). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevA.51.992](https://doi.org/10.1103%2FPhysRevA.51.992). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [9911677](https://pubmed.ncbi.nlm.nih.gov/9911677). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [13980886](https://api.semanticscholar.org/CorpusID:13980886).
144. **^** Davies, Paul (6 March 2007). "The implications of a holographic universe for quantum information science and the nature of physical law". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[quant-ph/0703041](https://arxiv.org/abs/quant-ph/0703041).
145. **^** Regan, K. W. (23 April 2016). ["Quantum Supremacy and Complexity"](https://rjlipton.wordpress.com/2016/04/22/quantum-supremacy-and-complexity/). *Gödel's Lost Letter and P=NP*.
146. **^** Kalai, Gil (May 2016). ["The Quantum Computer Puzzle"](https://www.ams.org/journals/notices/201605/rnoti-p508.pdf) (PDF). *Notices of the AMS*. **63** (5): 508–516.
147. **^** Rinott, Yosef; Shoham, Tomer; Kalai, Gil (13 July 2021). "Statistical Aspects of the Quantum Supremacy Demonstration". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2008.05177](https://arxiv.org/abs/2008.05177) [[quant-ph](https://arxiv.org/archive/quant-ph)].
148. **^** Dyakonov, Mikhail (15 November 2018). ["The Case Against Quantum Computing"](https://spectrum.ieee.org/the-case-against-quantum-computing). *IEEE Spectrum*. Retrieved 3 December 2019.
149. **^** Russell, John (10 January 2019). ["IBM Quantum Update: Q System One Launch, New Collaborators, and QC Center Plans"](https://www.hpcwire.com/2019/01/10/ibm-quantum-update-q-system-one-launch-new-collaborators-and-qc-center-plans/). *HPCwire*. Retrieved 9 January 2023.
150. **^** Tacchino, Francesco; Chiesa, Alessandro; Carretta, Stefano; Gerace, Dario (19 December 2019). ["Quantum Computers as Universal Quantum Simulators: State-of-the-Art and Perspectives"](https://onlinelibrary.wiley.com/doi/10.1002/qute.201900052). *Advanced Quantum Technologies*. **3** (3) 1900052. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1907.03505](https://arxiv.org/abs/1907.03505). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/qute.201900052](https://doi.org/10.1002%2Fqute.201900052). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2511-9044](https://search.worldcat.org/issn/2511-9044). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [195833616](https://api.semanticscholar.org/CorpusID:195833616).
151. **^** Grumbling & Horowitz 2019, p. 127.
152. **^** Grumbling & Horowitz 2019, p. 114.
153. **^** Nayak, Chetan; Simon, Steven H.; Stern, Ady; Freedman, Michael; Das Sarma, Sankar (12 September 2008). ["Non-Abelian anyons and topological quantum computation"](https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.80.1083). *Reviews of Modern Physics*. **80** (3): 1083–1159. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[0707.1889](https://arxiv.org/abs/0707.1889). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2008RvMP...80.1083N](https://ui.adsabs.harvard.edu/abs/2008RvMP...80.1083N). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/RevModPhys.80.1083](https://doi.org/10.1103%2FRevModPhys.80.1083).
154. **^** Grumbling & Horowitz 2019, p. 119.
155. **^** Grumbling & Horowitz 2019, p. 126.
156. ^   ["Scientists achieve breakthrough on quantum signaling"](https://news.stanford.edu/stories/2025/12/quantum-communication-room-temperature-breakthrough-research). *Stanford Report*. Stanford University. 1 December 2025. Retrieved 8 January 2026.
157. **^** Pan, F.; Liu, F.; Heinz, T. F.; Dionne, J. A. (2025). "Room-temperature spin–photon interface in a molybdenum diselenide–silicon nanostructured device". *Nature Communications*.
158. **^** ["Room-Temperature Device Advances Quantum Communication"](https://quantumzeitgeist.com/quantum-communication-molybdenum-diselenide-quantum-device/). *Quantum Zeitgeist*. 2 December 2025. Retrieved 8 January 2026.
159. **^** [*Quantum Computing: Progress and Prospects*](https://nap.nationalacademies.org/catalog/25196/quantum-computing-progress-and-prospects). National Academies of Sciences, Engineering, and Medicine. 2019.
160. **^** Arute, Frank; et al. (2019). "Quantum supremacy using a programmable superconducting processor". *Nature*. **574**: 505–510. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41586-019-1666-5](https://doi.org/10.1038%2Fs41586-019-1666-5).
161. **^** ["IBM Quantum Computing"](https://www.ibm.com/quantum). IBM Research.
162. **^** ["Google Quantum AI"](https://quantumai.google). Google Research.
163. **^** ["IonQ Technology and Research"](https://ionq.com/technology). IonQ.
164. **^** ["Azure Quantum"](https://azure.microsoft.com/en-us/products/quantum/). Microsoft.
165. **^** ["Quantum Information Science"](https://web.archive.org/web/20201108231706/https://www.nist.gov/topics/quantum-information-science). National Institute of Standards and Technology. Archived from [the original](https://www.nist.gov/topics/quantum-information-science) on 8 November 2020. Retrieved 2 April 2026.
166. **^** Nielsen & Chuang 2010, p. 29.
167. **^** Nielsen & Chuang 2010, p. 126.
168. **^** Nielsen & Chuang 2010, p. 41.
169. **^** Nielsen & Chuang 2010, p. 201.
170. **^** Bernstein, Ethan; Vazirani, Umesh (1997). ["Quantum Complexity Theory"](http://www.cs.berkeley.edu/~vazirani/bv.ps). *SIAM Journal on Computing*. **26** (5): 1411–1473. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.144.7852](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.144.7852). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/S0097539796300921](https://doi.org/10.1137%2FS0097539796300921).

### Sources

* [Aaronson, Scott](https://en.wikipedia.org/wiki/Scott_Aaronson) (2013). *Quantum Computing Since Democritus*. Cambridge University Press. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/CBO9780511979309](https://doi.org/10.1017%2FCBO9780511979309). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-521-19956-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-19956-8). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [829706638](https://search.worldcat.org/oclc/829706638).
* Grumbling, Emily; Horowitz, Mark, eds. (2019). *Quantum Computing: Progress and Prospects*. Washington, DC: The National Academies Press. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17226/25196](https://doi.org/10.17226%2F25196). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-309-47970-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-309-47970-7). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [1091904777](https://search.worldcat.org/oclc/1091904777). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [125635007](https://api.semanticscholar.org/CorpusID:125635007).
* [Mermin, N. David](https://en.wikipedia.org/wiki/N._David_Mermin) (2007). *Quantum Computer Science: An Introduction*. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/CBO9780511813870](https://doi.org/10.1017%2FCBO9780511813870). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-511-34258-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-511-34258-5). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [422727925](https://search.worldcat.org/oclc/422727925).
* [Nielsen, Michael](https://en.wikipedia.org/wiki/Michael_Nielsen); [Chuang, Isaac](https://en.wikipedia.org/wiki/Isaac_L._Chuang) (2010). *[Quantum Computation and Quantum Information](https://en.wikipedia.org/wiki/Quantum_Computation_and_Quantum_Information)* (10th anniversary ed.). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/CBO9780511976667](https://doi.org/10.1017%2FCBO9780511976667). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-511-99277-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-511-99277-3). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [700706156](https://search.worldcat.org/oclc/700706156). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [59717455](https://api.semanticscholar.org/CorpusID:59717455).

## Further reading

## External links

* Media related to [Quantum computer](https://commons.wikimedia.org/wiki/Quantum_computer) at Wikimedia Commons
* Learning materials related to [Quantum computing](https://en.wikiversity.org/wiki/Quantum_computing) at Wikiversity
* [Stanford Encyclopedia of Philosophy](https://en.wikipedia.org/wiki/Stanford_Encyclopedia_of_Philosophy): "[Quantum Computing](https://plato.stanford.edu/entries/qt-quantcomp/)" by Amit Hagar and Michael E. Cuffaro
* ["Quantum computation, theory of"](https://www.encyclopediaofmath.org/index.php?title=Quantum_computation,_theory_of), *[Encyclopedia of Mathematics](https://en.wikipedia.org/wiki/Encyclopedia_of_Mathematics)*, [EMS Press](https://en.wikipedia.org/wiki/European_Mathematical_Society), 2001 [1994]
* [Introduction to Quantum Computing for Business by Koen Groenland](https://introtoquantum.org)
* Schneider, J., & Smalley, I. (2024, August 5). *What Is Quantum Computing? | IBM*. [https://www.ibm.com/think/topics/quantum-computing](https://www.ibm.com/think/topics/quantum-computing)

**Lectures**

* [Quantum computing for the determined](https://www.youtube.com/playlist?list=PL1826E60FD05B44E4) – 22 video lectures by [Michael Nielsen](https://en.wikipedia.org/wiki/Michael_Nielsen)
* [Video Lectures](http://www.quiprocone.org/Protected/DD_lectures.htm) [Archived](https://web.archive.org/web/20100210151240/http://www.quiprocone.org/Protected/DD_lectures.htm) 10 February 2010 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) by [David Deutsch](https://en.wikipedia.org/wiki/David_Deutsch)
* Lomonaco, Sam. [Four Lectures on Quantum Computing given at Oxford University in July 2006](http://www.csee.umbc.edu/~lomonaco/Lectures.html#OxfordLectures)
 
NewPP limit report
Parsed by mw‐api‐ext.codfw.main‐96f688c4c‐hrkph
Cached time: 20260424052059
Cache expiry: 68400
Cache expiry source: Template:As_of (#time)
Reduced expiry: true
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 1.986 seconds
Real time usage: 2.412 seconds
Preprocessor visited node count: 17673/1000000
Revision size: 128026/2097152 bytes
Post‐expand include size: 598138/2097152 bytes
Template argument size: 9991/2097152 bytes
Highest expansion depth: 17/100
Expensive parser function count: 17/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 707967/5000000 bytes
Lua time usage: 1.254/10.000 seconds
Lua memory usage: 26636382/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00% 1926.366      1 -total
 46.20%  890.067      2 Template:Reflist
 23.38%  450.458     83 Template:Cite_journal
 15.91%  306.504     24 Template:Annotated_link
 11.92%  229.659     37 Template:Cite_book
  6.77%  130.449     29 Template:Sfn
  6.36%  122.468     12 Template:Navbox
  4.97%   95.819     30 Template:Cite_web
  4.53%   87.344      1 Template:CPU_technologies
  3.37%   64.990      1 Template:Short_description
 Render ID 60b3bcfd-3f9d-11f1-9ed3-c1958da1f49d  Saved in parser cache with key enwiki:pcache:25220:|#|:idhash:canonical and timestamp 20260424052059 and revision id 1350814619. Rendering was triggered because: unknown