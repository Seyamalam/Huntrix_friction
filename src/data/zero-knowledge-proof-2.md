# Zero-knowledge proof

* Source: https://en.wikipedia.org/wiki/Zero-knowledge_proof

---

In [cryptography](https://en.wikipedia.org/wiki/Cryptography), a **zero-knowledge proof** (also known as a **ZK proof** or **ZKP**) is a protocol in which one party (the prover) can convince another party (the verifier) that some given statement is true, without conveying to the verifier any information *beyond* the mere fact of that statement's truth. The intuition behind the nontriviality of zero-knowledge proofs is that it is trivial to prove possession of the relevant information simply by revealing it; the hard part is to prove this possession without revealing this information (or any aspect of it whatsoever).

In light of the fact that one should be able to generate a proof of some statement *only* when in possession of certain secret information connected to the statement, the verifier, even after having become convinced of the statement's truth by means of a zero-knowledge proof, should nonetheless remain unable to prove the statement to further third parties.

Zero-knowledge proofs can be interactive, meaning that the prover and verifier exchange messages according to some protocol, or noninteractive, meaning that the verifier is convinced by a single prover message and no other communication is needed. In the [standard model](https://en.wikipedia.org/wiki/Standard_model_(cryptography)), interaction is required, except for trivial proofs of [BPP](https://en.wikipedia.org/wiki/BPP_(complexity)) problems. In the [common random string](https://en.wikipedia.org/w/index.php?title=Common_random_string_model&action=edit&redlink=1) and [random oracle](https://en.wikipedia.org/wiki/Random_oracle) models, [non-interactive zero-knowledge proofs](https://en.wikipedia.org/wiki/Non-interactive_zero-knowledge_proof) exist. The [Fiat–Shamir heuristic](https://en.wikipedia.org/wiki/Fiat%E2%80%93Shamir_heuristic) can be used to transform certain interactive zero-knowledge proofs into noninteractive ones.

## Abstract examples

### The red card proof

One example of a math-free zero knowledge proof is if Peggy wants to prove to Victor that she has drawn a red card from a standard deck of 52 playing cards, without revealing which specific red card she holds. Victor observes Peggy draw a card at random from the shuffled deck, but she keeps the card face-down so he cannot see it.

To prove her card is red without revealing its identity, Peggy takes the remaining 51 cards from the deck and systematically shows Victor all 26 black cards (the 13 spades and 13 clubs) one by one, placing them face-up on the table. Since a standard deck contains exactly 26 red cards and 26 black cards, and Peggy has demonstrated that all the black cards remain in the deck, Victor can conclude with certainty that Peggy's hidden card must be red.

This proof is zero-knowledge because Victor learns only that Peggy's card is red, but gains no information about whether it is a heart or diamond, or which specific red card she holds. The proof would be equally convincing whether Peggy held the Ace of Hearts or the Two of Diamonds. Furthermore, even if the interaction were recorded, the recording would not reveal Peggy's specific card to future observers, maintaining the zero-knowledge property.

If Peggy was lying and actually held a black card, she would be unable to produce all 26 black cards from the remaining deck, making deception impossible. This demonstrates the soundness of the proof system. This type of physical zero-knowledge proof using standard playing cards belongs to a broader class of card-based cryptographic protocols that allow participants to perform secure computations using everyday objects.

### Where's Wally

Another well-known example of a zero-knowledge proof is the "Where's Wally" example. In this example, the prover wants to prove to the verifier that they know where Wally is on a page in a *[Where's Wally?](https://en.wikipedia.org/wiki/Where%27s_Wally%3F)* book, without revealing his location to the verifier.

The prover starts by taking a large black board with a small hole in it, the size of Wally. The board is twice the size of the book in both directions, so the verifier cannot see where on the page the prover is placing it. The prover then places the board over the page so that Wally is in the hole.

The verifier can now look through the hole and see Wally, but cannot see any other part of the page. Therefore, the prover has proven to the verifier that they know where Wally is, without revealing any other information about his location.

This example is not a perfect zero-knowledge proof, because the prover does reveal some information about Wally's location, such as his body position. However, it is a decent illustration of the basic concept of a zero-knowledge proof.

### The Ali Baba cave

There is a well-known story presenting the fundamental ideas of zero-knowledge proofs, first published in 1990 by [Jean-Jacques Quisquater](https://en.wikipedia.org/wiki/Jean-Jacques_Quisquater) and others in their paper "How to Explain Zero-Knowledge Protocols to Your Children". The two parties in the zero-knowledge proof story are [Peggy](https://en.wikipedia.org/wiki/Alice_and_Bob#Cast_of_characters) as the prover of the statement, and [Victor](https://en.wikipedia.org/wiki/Alice_and_Bob#Cast_of_characters), the verifier of the statement.

In this story, Peggy has uncovered the secret word used to open a magic door in a cave. The cave is shaped like a ring, with the entrance on one side and the magic door blocking the opposite side. Victor wants to know whether Peggy knows the secret word; but Peggy, being a very private person, does not want to reveal her knowledge (the secret word) to Victor or to reveal the fact of her knowledge to the world in general.

They label the paths from the entrance A and B. First, Victor waits outside the cave as Peggy goes in. Peggy takes either path A or B; Victor is not allowed to see which path she takes. Then, Victor enters the cave and shouts the name of the path he wants her to use to return, either A or B, chosen at random. Providing she really does know the magic word, this is easy: she opens the door, if necessary, and returns along the desired path.

However, suppose she did not know the word. Then, she would only be able to return by the named path if Victor were to give the name of the same path by which she had entered. Since Victor would choose A or B at random, she would have a 50% chance of guessing correctly. If they were to repeat this trick many times, say 20 times in a row, her chance of successfully anticipating all of Victor's requests would be reduced to 1 in 2, or 9.54 × 10.

Thus, if Peggy repeatedly appears at the exit Victor names, then he can conclude that it is extremely probable that Peggy does, in fact, know the secret word.

#### External observation

With respect to third-party observers: even if Victor is wearing a hidden camera that records the whole transaction, the only thing the camera will record is in one case Victor shouting "A!" and Peggy appearing at A or in the other case Victor shouting "B!" and Peggy appearing at B. A recording of this type would be trivial for any two people to fake (requiring only that Peggy and Victor agree beforehand on the sequence of As and Bs that Victor will shout). Such a recording will certainly never be convincing to anyone but the original participants. In fact, even a person who was present as an observer at the original experiment should be unconvinced, since Victor and Peggy could have orchestrated the whole "experiment" from start to finish.

Further, if Victor chooses his As and Bs by flipping a coin on-camera, this protocol loses its zero-knowledge property; the on-camera coin flip would probably be convincing to any person watching the recording later. Thus, although this does not reveal the secret word to Victor, it does make it possible for Victor to convince the world in general that Peggy has that knowledge—counter to Peggy's stated wishes. However, digital cryptography generally "flips coins" by relying on a [pseudo-random number generator](https://en.wikipedia.org/wiki/Pseudo-random_number_generator), which is akin to a coin with a fixed pattern of heads and tails known only to the coin's owner. If Victor's coin behaved this way, then again it would be possible for Victor and Peggy to have faked the experiment, so using a pseudo-random number generator would not reveal Peggy's knowledge to the world in the same way that using a flipped coin would.

Peggy could prove to Victor that she knows the magic word, without revealing it to him, in a single trial. If both Victor and Peggy go together to the mouth of the cave, Victor can watch Peggy go in through A and come out through B. This would prove with certainty that Peggy knows the magic word, without revealing the magic word to Victor. However, such a proof could be observed by a third party, or recorded by Victor and such a proof would be convincing to anybody. In other words, Peggy could not refute such proof by claiming she colluded with Victor, and she is therefore no longer in control of who is aware of her knowledge.

### Two balls and the color-blind friend

Imagine Victor is red-green [color-blind](https://en.wikipedia.org/wiki/Color_blindness) (while Peggy is not) and Peggy has two balls: one red and one green, but otherwise identical. To Victor, the balls seem completely identical. Victor is skeptical that the balls are actually distinguishable. Peggy wants to *prove to Victor that the balls are in fact differently colored*, but nothing else. In particular, Peggy does not want to reveal which ball is the red one and which is the green.

Here is the proof system: Peggy gives the two balls to Victor and he puts them behind his back. Next, he takes one of the balls and brings it out from behind his back and displays it. He then places it behind his back again and then chooses to reveal just one of the two balls, picking one of the two at random with equal probability. He will ask Peggy, "Did I switch the ball?" This whole procedure is then repeated as often as necessary.

By looking at the balls' colors, Peggy can, of course, say with certainty whether or not he switched them. On the other hand, if the balls were the same color and hence indistinguishable, Peggy's ability to determine whether a switch occurred would be no better than random guessing. Since the probability that Peggy would have randomly succeeded at identifying each switch/non-switch is 50%, the probability of having randomly succeeded at *all* switch/non-switches approaches zero.

Over multiple trials, the success rate would [statistically converge](https://en.wikipedia.org/wiki/Law_of_large_numbers) to 50%, and Peggy could not achieve a performance significantly better than chance. If Peggy and Victor repeat this "proof" multiple times (e.g. 20 times), Victor should become convinced that the balls are indeed differently colored.

The above proof is *zero-knowledge* because Victor never learns which ball is green and which is red; indeed, he gains no knowledge about how to distinguish the balls.

## Definition

A zero-knowledge proof of some statement must satisfy three properties:

1. **Completeness**: if the statement is true, then an honest verifier (that is, one following the protocol properly) will be convinced of this fact by an honest prover.
2. **Soundness**: if the statement is false, then no cheating prover can convince an honest verifier that it is true, except with some small probability.
3. **Zero-knowledge**: if the statement is true, then no verifier learns anything other than the fact that the statement is true. In other words, just knowing the statement (not the secret) is sufficient to imagine a scenario showing that the prover knows the secret. This is formalized by showing that every verifier has some *simulator* that, given only the statement to be proved (and no access to the prover), can produce a transcript that "looks like" an interaction between an honest prover and the verifier in question.

The first two of these are properties of more general [interactive proof systems](https://en.wikipedia.org/wiki/Interactive_proof_system). The third is what makes the proof zero-knowledge.

Zero-knowledge proofs are not proofs in the mathematical sense of the term because there is some small probability, the *soundness error*, that a cheating prover will be able to convince the verifier of a false statement. In other words, zero-knowledge proofs are probabilistic "proofs" rather than deterministic proofs. However, there are techniques to decrease the soundness error to negligibly small values (for example, guessing correctly on a hundred or thousand binary decisions has a 1/2 or 1/2 soundness error, respectively. As the number of bits increases, the soundness error decreases toward zero).

A formal definition of zero-knowledge must use some computational model, the most common one being that of a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine). Let P, V, and S be Turing machines. An [interactive proof system](https://en.wikipedia.org/wiki/Interactive_proof_system) with (*P*,*V*) for a language L is zero-knowledge if for any [probabilistic polynomial time](https://en.wikipedia.org/wiki/Probabilistic_polynomial_time) (PPT) verifier 

V
^ ^ 

{\displaystyle {\hat {V}}}

 there exists a PPT simulator S such that:

: ∀ ∀ 
x
∈ ∈ 
L
,
z
∈ ∈ 
{
0
,
1

}

∗ ∗ 

,

View

V
^ ^ 

⁡ ⁡ 

[

P
(
x
)
↔ ↔ 

V
^ ^ 

(
x
,
z
)

]

=
S
(
x
,
z
)
,

{\displaystyle \forall x\in L,z\in \{0,1\}^{*},\operatorname {View} _{\hat {V}}\left[P(x)\leftrightarrow {\hat {V}}(x,z)\right]=S(x,z),}

where View*V
^ ^ 

{\displaystyle {\hat {V}}}*[*P*(*x*)↔*V
^ ^ 

{\displaystyle {\hat {V}}}*(*x*,*z*)] is a record of the interactions between *P*(*x*) and *V*(*x*,*z*). The prover P is modeled as having unlimited computation power (in practice, P usually is a [probabilistic Turing machine](https://en.wikipedia.org/wiki/Probabilistic_Turing_machine)). Intuitively, the definition states that an interactive proof system (*P*,*V*) is zero-knowledge if for any verifier 

V
^ ^ 

{\displaystyle {\hat {V}}}

 there exists an efficient simulator S (depending on 

V
^ ^ 

{\displaystyle {\hat {V}}}

) that can reproduce the conversation between P and 

V
^ ^ 

{\displaystyle {\hat {V}}}

 on any given input. The auxiliary string z in the definition plays the role of "prior knowledge" (including the random coins of 

V
^ ^ 

{\displaystyle {\hat {V}}}

). The definition implies that 

V
^ ^ 

{\displaystyle {\hat {V}}}

 cannot use any prior knowledge string z to mine information out of its conversation with P, because if S is also given this prior knowledge then it can reproduce the conversation between 

V
^ ^ 

{\displaystyle {\hat {V}}}

 and P just as before.

The definition given is that of perfect zero-knowledge. Computational zero-knowledge is obtained by requiring that the views of the verifier 

V
^ ^ 

{\displaystyle {\hat {V}}}

 and the simulator are only [computationally indistinguishable](https://en.wikipedia.org/wiki/Computational_indistinguishability), given the auxiliary string.

## Practical examples

### Discrete log of a given value

These ideas can be applied to a more realistic cryptography application. Peggy wants to prove to Victor that she knows the [discrete logarithm](https://en.wikipedia.org/wiki/Discrete_logarithm) of a given value in a given [group](https://en.wikipedia.org/wiki/Group_theory).

For example, given a value y, a large [prime](https://en.wikipedia.org/wiki/Prime_number) p, and a generator 

g

{\displaystyle g}

, she wants to prove that she knows a value x such that *g* ≡ *y* (mod *p*), without revealing x. Indeed, knowledge of x could be used as a proof of identity, in that Peggy could have such knowledge because she chose a random value x that she did not reveal to anyone, computed *y* = *g* mod *p*, and distributed the value of y to all potential verifiers, such that at a later time, proving knowledge of x is equivalent to proving identity as Peggy.

The protocol proceeds as follows: in each round, Peggy generates a random number r, computes *C* = *g* mod *p* and discloses this to Victor. After receiving C, Victor randomly issues one of the following two requests: he either requests that Peggy discloses the value of r, or the value of (*x* + *r*) mod (*p* − 1).

Victor can verify either answer; if he requested r, he can then compute *g* mod *p* and verify that it matches C. If he requested (*x* + *r*) mod (*p* − 1), then he can verify that C is consistent with this, by computing *g* mod *p* and verifying that it matches (*C* · *y*) mod *p*. If Peggy indeed knows the value of x, then she can respond to either one of Victor's possible challenges.

If Peggy knew or could guess which challenge Victor is going to issue, then she could easily cheat and convince Victor that she knows x when she does not: if she knows that Victor is going to request r, then she proceeds normally: she picks r, computes *C* = *g* mod *p*, and discloses C to Victor; she will be able to respond to Victor's challenge. On the other hand, if she knows that Victor will request (*x* + *r*) mod (*p* − 1), then she picks a random value *r*′, computes *C*′ ≡ *g* · (*g*) mod *p*, and discloses *C*′ to Victor as the value of C that he is expecting. When Victor challenges her to reveal (*x* + *r*) mod (*p* − 1), she reveals *r*′, for which Victor will verify consistency, since he will in turn compute *g* mod *p*, which matches *C*′ · *y*, since Peggy multiplied by the [modular multiplicative inverse](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) of y.

However, if in either one of the above scenarios Victor issues a challenge other than the one she was expecting and for which she manufactured the result, then she will be unable to respond to the challenge under the assumption of infeasibility of solving the discrete log for this group. If she picked r and disclosed *C* = *g* mod *p*, then she will be unable to produce a valid (*x* + *r*) mod (*p* − 1) that would pass Victor's verification, given that she does not know x. And if she picked a value *r*′ that poses as (*x* + *r*) mod (*p* − 1), then she would have to respond with the discrete log of the value that she disclosed –  but Peggy does not know this discrete log, since the value C she disclosed was obtained through arithmetic with known values, and not by computing a power with a known exponent.

Thus, a cheating prover has a 0.5 probability of successfully cheating in one round. By executing a large-enough number of rounds, the probability of a cheating prover succeeding can be made arbitrarily low.

To show that the above interactive proof gives zero knowledge other than the fact that Peggy knows x, one can use similar arguments as used in the above proof of completeness and soundness. Specifically, a simulator, say Simon, who does not know x, can simulate the exchange between Peggy and Victor by the following procedure. Firstly, Simon randomly flips a [fair coin](https://en.wikipedia.org/wiki/Fair_coin). If the result is "heads", then he picks a random value r, computes *C* = *g* mod *p*, and discloses C as if it is a message from Peggy to Victor. Then Simon also outputs a message "request the value of r" as if it is sent from Victor to Peggy, and immediately outputs the value of r as if it is sent from Peggy to Victor. A single round is complete. On the other hand, if the [coin flipping](https://en.wikipedia.org/wiki/Coin_flipping) result is "tails", then Simon picks a random number *r*′, computes *C*′ = *g* · *y* mod *p*, and discloses *C*′ as if it is a message from Peggy to Victor. Then Simon outputs "request the value of (*x* + *r*) mod (*p* − 1)" as if it is a message from Victor to Peggy. Finally, Simon outputs the value of *r*′ as if it is the response from Peggy back to Victor. A single round is complete. By the previous arguments when proving the completeness and soundness, the interactive communication simulated by Simon is indistinguishable from the true correspondence between Peggy and Victor. The zero-knowledge property is thus guaranteed.

### Hamiltonian cycle for a large graph

The following scheme is due to [Manuel Blum](https://en.wikipedia.org/wiki/Manuel_Blum).

In this scenario, Peggy knows a [Hamiltonian cycle](https://en.wikipedia.org/wiki/Hamiltonian_path) for a large [graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) G. Victor knows G but not the cycle (e.g., Peggy has generated G and revealed it to him.) Finding a Hamiltonian cycle given a large graph is believed to be computationally infeasible, since its corresponding decision version is known to be [NP-complete](https://en.wikipedia.org/wiki/NP-complete). Peggy will prove that she knows the cycle without simply revealing it (perhaps Victor is interested in buying it but wants verification first, or maybe Peggy is the only one who knows this information and is proving her identity to Victor).

To show that Peggy knows this Hamiltonian cycle, she and Victor play several rounds of a game:

* At the beginning of each round, Peggy creates H, a graph which is [isomorphic](https://en.wikipedia.org/wiki/Graph_isomorphism) to G (that is, H is just like G except that all the vertices have different names). Since it is trivial to translate a Hamiltonian cycle between isomorphic graphs with known isomorphism, if Peggy knows a Hamiltonian cycle for G then she also must know one for H.
* Peggy commits to H. She could do so by using a cryptographic [commitment scheme](https://en.wikipedia.org/wiki/Commitment_scheme). Alternatively, she could number the vertices of H. Next, for each edge of H, on a small piece of paper, she writes down the two vertices that the edge joins. Then she puts all these pieces of paper face down on a table. The purpose of this commitment is that Peggy is not able to change H while, at the same time, Victor has no information about H.
* Victor then randomly chooses one of two questions to ask Peggy. He can either ask her to show the isomorphism between H and G (see [graph isomorphism problem](https://en.wikipedia.org/wiki/Graph_isomorphism_problem)), or he can ask her to show a Hamiltonian cycle in H.
* If Peggy is asked to show that the two graphs are isomorphic, then she first uncovers all of H (e.g. by turning over all pieces of papers that she put on the table) and then provides the vertex translations that map G to H. Victor can verify that they are indeed isomorphic.
* If Peggy is asked to prove that she knows a Hamiltonian cycle in H, then she translates her Hamiltonian cycle in G onto H and only uncovers the edges on the Hamiltonian cycle. That is, Peggy only turns over exactly |*V*(*G*)| of the pieces of paper that correspond to the edges of the Hamiltonian cycle, while leaving the rest still face-down. This is enough for Victor to check that H does indeed contain a Hamiltonian cycle.

It is important that the commitment to the graph be such that Victor can verify, in the second case, that the cycle is really made of edges from H. This can be done by, for example, committing to every edge (or lack thereof) separately.

#### Completeness

If Peggy does know a Hamiltonian cycle in G, then she can easily satisfy Victor's demand for either the graph isomorphism producing H from G (which she had committed to in the first step) or a Hamiltonian cycle in H (which she can construct by applying the isomorphism to the cycle in G).

#### Zero-knowledge

Peggy's answers do not reveal the original Hamiltonian cycle in G. In each round, Victor will learn only H's isomorphism to G or a Hamiltonian cycle in H. He would need both answers for a single H to discover the cycle in G, so the information remains unknown as long as Peggy can generate a distinct H every round. If Peggy does not know of a Hamiltonian cycle in G, but somehow knew in advance what Victor would ask to see each round, then she could cheat. For example, if Peggy knew ahead of time that Victor would ask to see the Hamiltonian cycle in H, then she could generate a Hamiltonian cycle for an unrelated graph. Similarly, if Peggy knew in advance that Victor would ask to see the isomorphism then she could simply generate an isomorphic graph H (in which she also does not know a Hamiltonian cycle). Victor could simulate the protocol by himself (without Peggy) because he knows what he will ask to see. Therefore, Victor gains no information about the Hamiltonian cycle in G from the information revealed in each round.

#### Soundness

If Peggy does not know the information, then she can guess which question Victor will ask and generate either a graph isomorphic to G or a Hamiltonian cycle for an unrelated graph, but since she does not know a Hamiltonian cycle for G, she cannot do both. With this guesswork, her chance of fooling Victor is 2, where n is the number of rounds. For all realistic purposes, it is infeasibly difficult to defeat a zero-knowledge proof with a reasonable number of rounds in this way.

## Variants of zero-knowledge

Different variants of zero-knowledge can be defined by formalizing the intuitive concept of what is meant by the output of the simulator "looking like" the execution of the real proof protocol in the following ways:

* We speak of *perfect zero-knowledge* if the distributions produced by the simulator and the proof protocol are distributed exactly the same. This is for instance the case in the first example above.
* *Statistical zero-knowledge* means that the distributions are not necessarily exactly the same, but they are [statistically close](https://en.wikipedia.org/wiki/Statistically_close), meaning that their statistical difference is a [negligible function](https://en.wikipedia.org/wiki/Negligible_function).
* We speak of *computational zero-knowledge* if no efficient algorithm can distinguish the two distributions.

## Zero knowledge types

There are various types of zero-knowledge proofs:

* [Proof of knowledge](https://en.wikipedia.org/wiki/Proof_of_knowledge): the knowledge is hidden in the exponent like in the example shown above.
* [Witness-indistinguishable proof](https://en.wikipedia.org/wiki/Witness-indistinguishable_proof): verifiers cannot know which witness is used for producing the proof.

Zero-knowledge proof schemes can be constructed from various cryptographic primitives, such as [hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography), [pairing-based cryptography](https://en.wikipedia.org/wiki/Pairing-based_cryptography), [multi-party computation](https://en.wikipedia.org/wiki/Multi-party_computation), or [lattice-based cryptography](https://en.wikipedia.org/wiki/Lattice-based_cryptography).

## Applications

Generally, zero-knowledge proofs are used within protocols to enforce honest behavior while maintaining privacy. Roughly, the idea is to force a user to prove, using a zero-knowledge proof, that their behavior is correct according to the protocol.

### Authentication systems

Research in zero-knowledge proofs has been motivated by [authentication](https://en.wikipedia.org/wiki/Authentication) systems where one party wants to prove its identity to a second party via some secret information (such as a password) but does not want the second party to learn anything about this secret. This is called a "zero-knowledge [proof of knowledge](https://en.wikipedia.org/wiki/Proof_of_knowledge)". However, a password is typically too small or insufficiently random to be used in many schemes for zero-knowledge proofs of knowledge. A [zero-knowledge password proof](https://en.wikipedia.org/wiki/Zero-knowledge_password_proof) is a special kind of zero-knowledge proof of knowledge that addresses the limited size of passwords.

In April 2015, the one-out-of-many proofs protocol (a [Sigma protocol](https://en.wikipedia.org/wiki/Proof_of_knowledge#Sigma_protocols)) was introduced. In August 2021, [Cloudflare](https://en.wikipedia.org/wiki/Cloudflare), an American web infrastructure and security company, decided to use the one-out-of-many proofs mechanism for private web verification using vendor hardware.

### Nuclear disarmament

In 2016, the [Princeton Plasma Physics Laboratory](https://en.wikipedia.org/wiki/Princeton_Plasma_Physics_Laboratory) and [Princeton University](https://en.wikipedia.org/wiki/Princeton_University) demonstrated a technique that may have applicability to future [nuclear disarmament](https://en.wikipedia.org/wiki/Nuclear_disarmament) talks. It would allow inspectors to confirm whether or not an object is indeed a nuclear weapon without recording, sharing, or revealing the internal workings, which might be secret.

### Blockchains

Zero-knowledge proofs were applied in the [Zerocoin](https://en.wikipedia.org/wiki/Zerocoin_protocol) and Zerocash protocols, which culminated in the birth of [Zcoin](https://en.wikipedia.org/wiki/Zcoin) (later rebranded as [Firo](https://en.wikipedia.org/wiki/Firo_(cryptocurrency)) in 2020) and [Zcash](https://en.wikipedia.org/wiki/Zcash) [cryptocurrencies](https://en.wikipedia.org/wiki/Cryptocurrency) in 2016. Zerocoin has a built-in mixing model that does not trust any peers or centralized mixing providers to ensure anonymity. Users can transact in a base currency and can cycle the currency into and out of Zerocoins. The Zerocash protocol uses a similar model (a variant known as a [non-interactive zero-knowledge proof](https://en.wikipedia.org/wiki/Non-interactive_zero-knowledge_proof)) except that it can obscure the transaction amount, while Zerocoin cannot.

In 2018, Bulletproofs were introduced. Bulletproofs are an improvement from non-interactive zero-knowledge proofs where a trusted setup is not needed.

### Identity

Because of asymmetric signatures in documents such as [passports](https://en.wikipedia.org/wiki/Passports) and [emails](https://en.wikipedia.org/wiki/Emails), zero knowledge proofs can be made of people's identities in order to privately verify information about themselves. For instance, you can prove that you are over 18 to a website, without revealing other details like your exact name or country of origin, by proving in zero knowledge that you own a passport signed by a valid government key for an age value over 18. By similarly making zero-knowledge proofs of the [DKIM signatures](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) of their emails, people can prove that they ordered or transferred a domain or concert ticket, own some handle on a social media service, or ordered something on an e-commerce service. The zero knowledge property allows people to keep their own identity and email address private while doing so. These can be used to enable private and fair elections, low-fee secondary marketplaces, and whistleblowing services.

### SQL

A related line of work applies zero-knowledge proofs to database analytics via so-called zero-knowledge "coprocessors": off-chain systems that execute queries and return both the result and a proof that the computation was performed correctly on untampered data. Academic prototypes have shown how to produce ZK proofs for ad-hoc SQL queries while hiding inputs and guaranteeing correctness of the result (e.g., ZKSQL).

## History

Zero-knowledge proofs were first conceived in 1985 by [Shafi Goldwasser](https://en.wikipedia.org/wiki/Shafi_Goldwasser), [Silvio Micali](https://en.wikipedia.org/wiki/Silvio_Micali), and [Charles Rackoff](https://en.wikipedia.org/wiki/Charles_Rackoff) in their paper "The Knowledge Complexity of Interactive Proof-Systems". This paper introduced the IP hierarchy of interactive proof systems (*see [interactive proof system](https://en.wikipedia.org/wiki/Interactive_proof_system)*) and conceived the concept of *knowledge complexity*, a measurement of the amount of knowledge about the proof transferred from the prover to the verifier. They also gave the first zero-knowledge proof for a concrete problem, that of deciding [quadratic nonresidues](https://en.wikipedia.org/wiki/Quadratic_residue) mod m. Together with a paper by [László Babai](https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Babai) and [Shlomo Moran](https://en.wikipedia.org/wiki/Shlomo_Moran), this landmark paper invented interactive proof systems, for which all five authors won the first [Gödel Prize](https://en.wikipedia.org/wiki/G%C3%B6del_Prize) in 1993.

In their own words, Goldwasser, Micali, and Rackoff say:

Of particular interest is the case where this additional knowledge is essentially 0 and we show that [it] is possible to interactively prove that a number is quadratic non residue mod *m* releasing 0 additional knowledge. This is surprising as no efficient algorithm for deciding quadratic residuosity mod *m* is known when *m*'s factorization is not given. Moreover, all known *NP* proofs for this problem exhibit the prime factorization of *m*. This indicates that adding interaction to the proving process, may decrease the amount of knowledge that must be communicated in order to prove a theorem.

The quadratic nonresidue problem has both an [NP](https://en.wikipedia.org/wiki/NP_(complexity)) and a [co-NP](https://en.wikipedia.org/wiki/Co-NP) algorithm, and so lies in the intersection of NP and co-NP. This was also true of several other problems for which zero-knowledge proofs were subsequently discovered, such as an unpublished proof system by Oded Goldreich verifying that a two-prime modulus is not a [Blum integer](https://en.wikipedia.org/wiki/Blum_integer).

[Oded Goldreich](https://en.wikipedia.org/wiki/Oded_Goldreich), [Silvio Micali](https://en.wikipedia.org/wiki/Silvio_Micali), and [Avi Wigderson](https://en.wikipedia.org/wiki/Avi_Wigderson) took this one step further, showing that, assuming the existence of unbreakable encryption, one can create a zero-knowledge proof system for the NP-complete [graph coloring problem](https://en.wikipedia.org/wiki/Graph_coloring_problem) with three colors. Since every problem in NP can be efficiently reduced to this problem, this means that, under this assumption, all problems in NP have zero-knowledge proofs. The reason for the assumption is that, as in the above example, their protocols require encryption. A commonly cited sufficient condition for the existence of unbreakable encryption is the existence of [one-way functions](https://en.wikipedia.org/wiki/One-way_function), but it is conceivable that some physical means might also achieve it.

On top of this, they also showed that the [graph nonisomorphism problem](https://en.wikipedia.org/wiki/Graph_nonisomorphism_problem), the [complement](https://en.wikipedia.org/wiki/Complement_(complexity)) of the [graph isomorphism problem](https://en.wikipedia.org/wiki/Graph_isomorphism_problem), has a zero-knowledge proof. This problem is in co-NP, but is not currently known to be in either NP or any practical class. More generally, [Russell Impagliazzo](https://en.wikipedia.org/wiki/Russell_Impagliazzo) and [Moti Yung](https://en.wikipedia.org/wiki/Moti_Yung) as well as Ben-Or et al. would go on to show that, also assuming one-way functions or unbreakable encryption, there are zero-knowledge proofs for *all* problems in IP = [PSPACE](https://en.wikipedia.org/wiki/PSPACE), or in other words, anything that can be proved by an interactive proof system can be proved with zero knowledge.

Not liking to make unnecessary assumptions, many theorists sought a way to eliminate the necessity of [one way functions](https://en.wikipedia.org/wiki/One_way_function). One way this was done was with *multi-prover interactive proof systems* (see [interactive proof system](https://en.wikipedia.org/wiki/Interactive_proof_system)), which have multiple independent provers instead of only one, allowing the verifier to "cross-examine" the provers in isolation to avoid being misled. It can be shown that, without any intractability assumptions, all languages in NP have zero-knowledge proofs in such a system.

It turns out that, in an Internet-like setting, where multiple protocols may be executed concurrently, building zero-knowledge proofs is more challenging. The line of research investigating concurrent zero-knowledge proofs was initiated by the work of [Dwork](https://en.wikipedia.org/wiki/Cynthia_Dwork), [Naor](https://en.wikipedia.org/wiki/Moni_Naor), and [Sahai](https://en.wikipedia.org/wiki/Amit_Sahai). One particular development along these lines has been the development of [witness-indistinguishable proof](https://en.wikipedia.org/wiki/Witness-indistinguishable_proof) protocols. The property of witness-indistinguishability is related to that of zero-knowledge, yet witness-indistinguishable protocols do not suffer from the same problems of concurrent execution.

Another variant of zero-knowledge proofs are [non-interactive zero-knowledge proofs](https://en.wikipedia.org/wiki/Non-interactive_zero-knowledge_proof). Blum, Feldman, and Micali showed that a common random string shared between the prover and the verifier is enough to achieve computational zero-knowledge without requiring interaction.

## Protocols

The most popular interactive or [non-interactive zero-knowledge proof](https://en.wikipedia.org/wiki/Non-interactive_zero-knowledge_proof) (e.g., zk-SNARK) protocols can be broadly categorized in the following four categories: Succinct Non-Interactive ARguments of Knowledge (SNARK), Scalable Transparent ARgument of Knowledge (STARK), Verifiable Polynomial Delegation (VPD), and Succinct Non-interactive ARGuments (SNARG). A list of zero-knowledge proof protocols and libraries is provided below along with comparisons based on *transparency*, *universality*, *plausible post-quantum security*, and *programming paradigm*. A transparent protocol is one that does not require any trusted setup and uses public randomness. A universal protocol is one that does not require a separate trusted setup for each circuit. Finally, a plausibly post-quantum protocol is one that is not susceptible to known attacks involving [quantum algorithms](https://en.wikipedia.org/wiki/Quantum_algorithm).

| ZKP System | Publication year | Protocol | Transparent | Universal | Plausibly Post-Quantum Secure | Programming Paradigm |
| --- | --- | --- | --- | --- | --- | --- |
| Pinocchio | 2013 | zk-SNARK | No | No | No | Procedural |
| Geppetto | 2015 | zk-SNARK | No | No | No | Procedural |
| TinyRAM | 2013 | zk-SNARK | No | No | No | Procedural |
| Buffet | 2015 | zk-SNARK | No | No | No | Procedural |
| ZoKrates | 2018 | zk-SNARK | No | No | No | Procedural |
| xJsnark | 2018 | zk-SNARK | No | No | No | Procedural |
| vRAM | 2018 | zk-SNARG | No | Yes | No | Assembly |
| vnTinyRAM | 2014 | zk-SNARK | No | Yes | No | Procedural |
| MIRAGE | 2020 | zk-SNARK | No | Yes | No | Arithmetic Circuits |
| Sonic | 2019 | zk-SNARK | No | Yes | No | Arithmetic Circuits |
| Marlin | 2020 | zk-SNARK | No | Yes | No | Arithmetic Circuits |
| PLONK | 2019 | zk-SNARK | No | Yes | No | Arithmetic Circuits |
| SuperSonic | 2020 | zk-SNARK | Yes | Yes | No | Arithmetic Circuits |
| Bulletproofs | 2018 | Bulletproofs | Yes | Yes | No | Arithmetic Circuits |
| Hyrax | 2018 | zk-SNARK | Yes | Yes | No | Arithmetic Circuits |
| Halo | 2019 | zk-SNARK | Yes | Yes | No | Arithmetic Circuits |
| Virgo | 2020 | zk-SNARK | Yes | Yes | Yes | Arithmetic Circuits |
| Ligero | 2017 | zk-SNARK | Yes | Yes | Yes | Arithmetic Circuits |
| Aurora | 2019 | zk-SNARK | Yes | Yes | Yes | Arithmetic Circuits |
| zk-STARK | 2019 | zk-STARK | Yes | Yes | Yes | Assembly |
| Zilch | 2021 | zk-STARK | Yes | Yes | Yes | Object-Oriented |
| Hyperbridge | 2024 | zk-SNARK | Yes | Yes | Yes | Arithmetic Circuits |

## Security vulnerabilities of zero-knowledge systems

While zero-knowledge proofs offer a secure way to verify information, the arithmetic circuits that implement them must be carefully designed. If these circuits lack sufficient constraints, they may introduce subtle yet critical security vulnerabilities.

One of the most common classes of vulnerabilities in these systems is under-constrained logic, where insufficient constraints allow a malicious prover to produce a proof for an incorrect statement that still passes verification. A 2024 systematization of known attacks found that approximately 96% of documented circuit-layer bugs in SNARK-based systems were due to under-constrained circuits.

These vulnerabilities often arise during the translation of high-level logic into low-level constraint systems, particularly when using domain-specific languages such as Circom or Gnark. Recent research has demonstrated that formally proving determinism – ensuring that a circuit's outputs are uniquely determined by its inputs – can eliminate entire classes of these vulnerabilities.

## Zero-knowledge virtual machines

Zero-knowledge virtual machines (zkVMs) are general-purpose virtual computers designed to execute code and generate zero-knowledge proofs that verify off-chain, without revealing private inputs, that the code ran correctly and produced the claimed result. A proof is a compact, structured [binary file](https://en.wikipedia.org/wiki/Binary_file) that can be efficiently checked by anyone using the zkVM's verifier tool without re-running the original computation.

zkVMs have both development and security benefits. Using a zkVM, developers can execute and verify complex computations off-chain, avoiding high on-chain "gas costs" (blockchain processing fees) and maintaining the privacy of code or data. Several recently developed zkVMs, such as those developed by RISC Zero and Succinct Labs, support the [RISC-V](https://en.wikipedia.org/wiki/RISC-V) instruction set, which allows programmers to write code in mainstream programming languages like [Rust](https://en.wikipedia.org/wiki/Rust_programming_language) instead of using a domain-specific circuit language such as Circom. Other zkVMs take different approaches, targeting [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly) (WASM) or implementing custom instruction sets optimized for zero-knowledge performance or integration with particular blockchain environments.

## See also

* [Arrow information paradox](https://en.wikipedia.org/wiki/Arrow_information_paradox) – Problem in intellectual property management
* [Cryptographic protocol](https://en.wikipedia.org/wiki/Cryptographic_protocol) – Aspect of cryptography
* [Feige–Fiat–Shamir identification scheme](https://en.wikipedia.org/wiki/Feige%E2%80%93Fiat%E2%80%93Shamir_identification_scheme)
* [Non-interactive zero-knowledge proof](https://en.wikipedia.org/wiki/Non-interactive_zero-knowledge_proof) – Cryptographic primitive
* [Probabilistically checkable proof](https://en.wikipedia.org/wiki/Probabilistically_checkable_proof) – Proof checkable by a randomized algorithm
* [Proof of knowledge](https://en.wikipedia.org/wiki/Proof_of_knowledge) – Class of interactive proof
* [Topics in cryptography](https://en.wikipedia.org/wiki/Topics_in_cryptography)
* [Witness-indistinguishable proof](https://en.wikipedia.org/wiki/Witness-indistinguishable_proof) – Variant of a zero-knowledge proof for languages in NP
* [Zero-knowledge password proof](https://en.wikipedia.org/wiki/Zero-knowledge_password_proof) – Cryptographic protocol

## References

1. ^    Goldwasser, S.; Micali, S.; Rackoff, C. (1989), ["The knowledge complexity of interactive proof systems"](http://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Proof%20Systems/The_Knowledge_Complexity_Of_Interactive_Proof_Systems.pdf) (PDF), *SIAM Journal on Computing*, **18** (1): 186–208, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/0218012](https://doi.org/10.1137%2F0218012), [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1095-7111](https://search.worldcat.org/issn/1095-7111)
2. **^** Goldreich, Oded (2001). [*Foundations of Cryptography Volume I*](https://www.cambridge.org/core/books/foundations-of-cryptography/B61B6AD235D2034D511A5FF740415166). Cambridge University Press. p. 184. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/CBO9780511546891](https://doi.org/10.1017%2FCBO9780511546891). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-511-54689-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-511-54689-1).
3. **^** Goldreich, Oded (2001). [*Foundations of Cryptography Volume I*](https://www.cambridge.org/core/books/foundations-of-cryptography/B61B6AD235D2034D511A5FF740415166). Cambridge University Press. p. 247. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/CBO9780511546891](https://doi.org/10.1017%2FCBO9780511546891). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-511-54689-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-511-54689-1).
4. **^** Goldreich, Oded (2001). [*Foundations of Cryptography Volume I*](https://www.cambridge.org/core/books/foundations-of-cryptography/B61B6AD235D2034D511A5FF740415166). Cambridge University Press. p. 299. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/CBO9780511546891](https://doi.org/10.1017%2FCBO9780511546891). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-511-54689-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-511-54689-1).
5. ^   Blum, Manuel; Feldman, Paul; Micali, Silvio (1988). "Non-interactive zero-knowledge and its applications". [*Proceedings of the twentieth annual ACM symposium on Theory of computing - STOC '88*](https://apps.dtic.mil/sti/pdfs/ADA222698.pdf) (PDF). pp. 103–112. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/62212.62222](https://doi.org/10.1145%2F62212.62222). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-89791-264-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-89791-264-8). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [7282320](https://api.semanticscholar.org/CorpusID:7282320). [Archived](https://wayback.archive-it.org/all/20181214020301/https://apps.dtic.mil/dtic/tr/fulltext/u2/a222698.pdf) (PDF) from the original on December 14, 2018. Retrieved June 2, 2022.
6. ^   Wu, Huixin; Wang, Feng (2014). ["A Survey of Noninteractive Zero Knowledge Proof System and Its Applications"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4032740). *The Scientific World Journal*. **2014** 560484. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1155/2014/560484](https://doi.org/10.1155%2F2014%2F560484). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [4032740](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4032740). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [24883407](https://pubmed.ncbi.nlm.nih.gov/24883407).
7. **^** ["Playing Card Cryptography"](https://fouryears.eu/2015/03/09/playing-card-cryptography/). *Four Years Remaining*. Retrieved 2025-06-04.
8. ^    Murtagh, Jack (July 1, 2023). ["Where's Wally? How to Mathematically Prove You Found Him without Revealing Where He Is"](https://www.scientificamerican.com/article/wheres-waldo-how-to-prove-you-found-him-without-revealing-where-he-is/). *[Scientific American](https://en.wikipedia.org/wiki/Scientific_American)*. Retrieved 2023-10-02.
9. **^** Quisquater, Jean-Jacques; Guillou, Louis C.; Berson, Thomas A. (1990). "How to Explain Zero-Knowledge Protocols to Your Children". [*Advances in Cryptology — CRYPTO' 89 Proceedings*](http://www.cs.wisc.edu/~mkowalcz/628.pdf) (PDF). Lecture Notes in Computer Science. Vol. 435. pp. 628–631. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/0-387-34805-0_60](https://doi.org/10.1007%2F0-387-34805-0_60). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-387-97317-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-387-97317-3).
10. **^** Chalkias, Konstantinos. ["Demonstrate how Zero-Knowledge Proofs work without using maths"](https://www.linkedin.com/pulse/demonstrate-how-zero-knowledge-proofs-work-without-using-chalkias). *CordaCon 2017*. Retrieved 2017-09-13.
11. **^** Feige, Uriel; Fiat, Amos; Shamir, Adi (1988-06-01). ["Zero-knowledge proofs of identity"](https://doi.org/10.1007%2FBF02351717). *Journal of Cryptology*. **1** (2): 77–94. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF02351717](https://doi.org/10.1007%2FBF02351717). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1432-1378](https://search.worldcat.org/issn/1432-1378). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [2950602](https://api.semanticscholar.org/CorpusID:2950602).
12. **^** Ishai, Yuval; Kushilevitz, Eyal; Ostrovsky, Rafail; Sahai, Amit (2007). ["Zero-Knowledge from Secure Multiparty Computation"](https://web.cs.ucla.edu/~rafail/PUBLIC/77.pdf) (PDF). *STOC '07: Proceedings of the thirty-ninth annual ACM symposium on Theory of computing*. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1250790.1250794](https://doi.org/10.1145%2F1250790.1250794). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-59593-631-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59593-631-8). Retrieved 2025-09-25.
13. **^** Chaum, David; Evertse, Jan-Hendrik; van de Graaf, Jeroen (1988). "An Improved Protocol for Demonstrating Possession of Discrete Logarithms and Some Generalizations". *Advances in Cryptology — EUROCRYPT '87*. Lecture Notes in Computer Science. Vol. 304. pp. 127–141. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/3-540-39118-5_13](https://doi.org/10.1007%2F3-540-39118-5_13). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-19102-5](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-19102-5).
14. **^** Blum, Manuel (1986). ["How to Prove a Theorem So No One Else Can Claim It"](http://euler.nmt.edu/~brian/students/pope.pdf) (PDF). *ICM Proceedings*: 1444–1451. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.469.9048](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.469.9048). [Archived](https://web.archive.org/web/20230103032937/http://euler.nmt.edu/~brian/students/pope.pdf) (PDF) from the original on January 3, 2023.
15. **^** Sahai, Amit; Vadhan, Salil (1 March 2003). ["A complete problem for statistical zero knowledge"](http://dash.harvard.edu/bitstream/handle/1/4728406/Vadhan_StatZeroKnow.pdf?sequence=2) (PDF). *Journal of the ACM*. **50** (2): 196–249. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.4.3957](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.3957). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/636865.636868](https://doi.org/10.1145%2F636865.636868). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [218593855](https://api.semanticscholar.org/CorpusID:218593855). [Archived](https://web.archive.org/web/20150625193124/http://dash.harvard.edu/bitstream/handle/1/4728406/Vadhan_StatZeroKnow.pdf?sequence=2) (PDF) from the original on 2015-06-25.
16. **^** Abascal, Jackson; Faghihi Sereshgi, Mohammad Hossein; Hazay, Carmit; Ishai, Yuval; Venkitasubramaniam, Muthuramakrishnan (2020-10-30). ["Is the Classical GMW Paradigm Practical? The Case of Non-Interactive Actively Secure 2PC"](https://doi.org/10.1145/3372297.3423366). *Proceedings of the 2020 ACM SIGSAC Conference on Computer and Communications Security*. CCS '20. Virtual Event, USA: Association for Computing Machinery. pp. 1591–1605. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3372297.3423366](https://doi.org/10.1145%2F3372297.3423366). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-7089-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-7089-9). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [226228208](https://api.semanticscholar.org/CorpusID:226228208).
17. **^** Groth, J; Kohlweiss, M (14 April 2015). ["One-Out-of-Many Proofs: Or How to Leak a Secret and Spend a Coin"](https://www.research.ed.ac.uk/en/publications/f6ec5d8f-cfda-4f56-9bd0-d9222b8d9a43). *Advances in Cryptology - EUROCRYPT 2015*. Lecture Notes in Computer Science. Vol. 9057. Berlin, Heidelberg: EUROCRYPT 2015. pp. 253–280. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-662-46803-6_9](https://doi.org/10.1007%2F978-3-662-46803-6_9). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[20.500.11820/f6ec5d8f-cfda-4f56-9bd0-d9222b8d9a43](https://hdl.handle.net/20.500.11820%2Ff6ec5d8f-cfda-4f56-9bd0-d9222b8d9a43). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-662-46802-9](https://en.wikipedia.org/wiki/Special:BookSources/978-3-662-46802-9). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [16708805](https://api.semanticscholar.org/CorpusID:16708805).
18. **^** ["Introducing Zero-Knowledge Proofs for Private Web attestation with Cross/Multi-Vendor Hardware"](https://blog.cloudflare.com/introducing-zero-knowledge-proofs-for-private-web-attestation-with-cross-multi-vendor-hardware/). *The Cloudflare Blog*. 2021-08-12. Retrieved 2021-08-18.
19. **^** ["PPPL and Princeton demonstrate novel technique that may have applicability to future nuclear disarmament talks - Princeton Plasma Physics Lab"](https://web.archive.org/web/20170703142802/https://www.pppl.gov/news/2016/09/pppl-and-princeton-demonstrate-novel-technique-may-have-applicability-future-nuclear). *www.pppl.gov*. Archived from [the original](https://www.pppl.gov/news/2022/pppl-and-princeton-demonstrate-novel-technique-may-have-applicability-future-nuclear) on 2017-07-03.
20. ^   Hellwig, Daniel; Karlic, Goran; Huchzermeier, Arnd (3 May 2020). ["Privacy and Anonymity"](https://link.springer.com/chapter/10.1007/978-3-030-40142-9_5). *Build Your Own Blockchain*. Management for Professionals. SpringerLink. p. 112. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-030-40142-9_5](https://doi.org/10.1007%2F978-3-030-40142-9_5). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-030-40142-9](https://en.wikipedia.org/wiki/Special:BookSources/978-3-030-40142-9). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [219058406](https://api.semanticscholar.org/CorpusID:219058406). Retrieved 3 December 2020.
21. **^** Hurst, Samantha (28 October 2020). ["Zcoin Announces Rebranding to New Name & Ticker "Firo""](https://web.archive.org/web/20201101141745/https://www.crowdfundinsider.com/2020/10/168504-zcoin-announces-rebranding-to-new-name-ticker-firo/). Crowdfund Insider. Archived from [the original](https://www.crowdfundinsider.com/2020/10/168504-zcoin-announces-rebranding-to-new-name-ticker-firo/) on 1 November 2020. Retrieved 4 November 2020.
22. **^** Bonneau, J; Miller, A; Clark, J; Narayanan, A (2015). "SoK: Research Perspectives and Challenges for Bitcoin and Cryptocurrencies". *2015 IEEE Symposium on Security and Privacy*. San Jose, California. pp. 104–121. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SP.2015.14](https://doi.org/10.1109%2FSP.2015.14). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4673-6949-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4673-6949-7). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [549362](https://api.semanticscholar.org/CorpusID:549362).`{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book)}}`:  CS1 maint: location missing publisher ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher))
23. **^** Ben-Sasson, Eli; Chiesa, Alessandro; Garman, Christina; Green, Matthew; Miers, Ian; Tromer, Eran; Virza, Madars (18 May 2014). ["Zerocash: Decentralized Anonymous Payments from Bitcoin"](http://zerocash-project.org/media/pdf/zerocash-extended-20140518.pdf) (PDF). IEEE. Retrieved 26 January 2016.
24. ^   Bünz, B; Bootle, D; Boneh, A (2018). "Bulletproofs: Short Proofs for Confidential Transactions and More". *2018 IEEE Symposium on Security and Privacy (SP)*. San Francisco, California. pp. 315–334. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SP.2018.00020](https://doi.org/10.1109%2FSP.2018.00020). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-5386-4353-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5386-4353-2). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [3337741](https://api.semanticscholar.org/CorpusID:3337741).`{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book)}}`:  CS1 maint: location missing publisher ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher))
25. **^** ["Circuits"](https://docs.openpassport.app/docs/technical-docs/circuits). *OpenPassport docs*. Self Labs. Retrieved January 18, 2026.
26. **^** Gupta, Aayush; Suegami, Sora; Panda, Sampriti (December 12, 2022). ["ZK Email"](https://zk.email/blog/zkemail). *ZK Email*. Retrieved January 18, 2026.
27. **^** Foss, Nate; Ernst, David; Tavernier, Florent; Colin, Rémi. ["New Democratic Primary"](https://newdemocraticprimary.org/results). *New Democratic Primary*. New Democratic Primary. Retrieved 2026-01-18.
28. **^** Rose, Anna; Gupta, Aayush (March 19, 2025). ["Making ZK More Human with ZK Email"](https://zeroknowledge.fm/podcast/353/). *Zero Knowledge Podcast*. Episode 353. [Transcript](https://github.com/ZeroKnowledgefm/episode-transcripts/blob/main/episodes/Episode%20353.txt). Retrieved January 18, 2026.
29. **^** Gupta, Aayush (December 14, 2022). ["ZK Email + ZK JWTs"](https://zkresear.ch/t/zk-email-zk-jwts/83). Retrieved January 18, 2026.
30. **^** Li, X.; others (2023). ["ZKSQL: Verifiable and Efficient Query Evaluation with Zero-Knowledge Proofs"](https://www.vldb.org/pvldb/vol16/p1804-li.pdf) (PDF). *Proceedings of the VLDB Endowment*. **16** (8): 1804–1817. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.14778/3594512.3594513](https://doi.org/10.14778%2F3594512.3594513).
31. **^** Goldreich, Oded (1985). "A zero-knowledge proof that a two-prime moduli is not a Blum integer". *Unpublished Manuscript*.
32. **^** Goldreich, Oded; Micali, Silvio; Wigderson, Avi (1991). "Proofs that yield nothing but their validity". *Journal of the ACM*. **38** (3): 690–728. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.420.1478](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.420.1478). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/116825.116852](https://doi.org/10.1145%2F116825.116852). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [2389804](https://api.semanticscholar.org/CorpusID:2389804).
33. **^** Russell Impagliazzo, Moti Yung: Direct Minimum-Knowledge Computations. CRYPTO 1987: 40–51
34. **^** Ben-Or, Michael; Goldreich, Oded; Goldwasser, Shafi; Hastad, Johan; Kilian, Joe; Micali, Silvio; Rogaway, Phillip (1990). "Everything provable is provable in zero-knowledge". In Goldwasser, S. (ed.). *Advances in Cryptology – CRYPTO '88*. Lecture Notes in Computer Science. Vol. 403. Springer-Verlag. pp. 37–56.
35. **^** Ben-Or, Michael; Goldwasser, Shafi; Kilian, Joe; Widgerson, Avi (1988). ["Multi-prover interactive proofs: How to remove intractability"](https://doi.org/10.1145/62212.62223). *Proceedings of the twentieth annual ACM symposium on Theory of computing - STOC '88*. pp. 113–131. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/62212.62223](https://doi.org/10.1145%2F62212.62223). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-89791-264-0](https://en.wikipedia.org/wiki/Special:BookSources/0-89791-264-0).
36. **^** Dwork, Cynthia; Naor, Moni; Sahai, Amit (2004). "Concurrent Zero Knowledge". *Journal of the ACM*. **51** (6): 851–898. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.43.716](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.43.716). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1039488.1039489](https://doi.org/10.1145%2F1039488.1039489). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [52827731](https://api.semanticscholar.org/CorpusID:52827731).
37. **^** Feige, Uriel; Shamir, Adi (1990). "Witness indistinguishable and witness hiding protocols". *Proceedings of the twenty-second annual ACM symposium on Theory of computing - STOC '90*. pp. 416–426. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.73.3911](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.73.3911). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/100216.100272](https://doi.org/10.1145%2F100216.100272). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-89791-361-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-89791-361-4). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [11146395](https://api.semanticscholar.org/CorpusID:11146395).
38. ^   Mouris, Dimitris; Tsoutsos, Nektarios Georgios (2021). "Zilch: A Framework for Deploying Transparent Zero-Knowledge Proofs". *IEEE Transactions on Information Forensics and Security*. **16**: 3269–3284. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2021ITIF...16.3269M](https://ui.adsabs.harvard.edu/abs/2021ITIF...16.3269M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TIFS.2021.3074869](https://doi.org/10.1109%2FTIFS.2021.3074869). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1556-6021](https://search.worldcat.org/issn/1556-6021). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [222069813](https://api.semanticscholar.org/CorpusID:222069813).
39. **^** Parno, B.; Howell, J.; Gentry, C.; Raykova, M. (May 2013). "Pinocchio: Nearly Practical Verifiable Computation". *2013 IEEE Symposium on Security and Privacy*. pp. 238–252. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SP.2013.47](https://doi.org/10.1109%2FSP.2013.47). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-7695-4977-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7695-4977-4). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1155080](https://api.semanticscholar.org/CorpusID:1155080).
40. **^** Costello, Craig; Fournet, Cedric; Howell, Jon; Kohlweiss, Markulf; Kreuter, Benjamin; Naehrig, Michael; Parno, Bryan; Zahur, Samee (May 2015). ["Geppetto: Versatile Verifiable Computation"](https://www.research.ed.ac.uk/en/publications/37920e55-65aa-4a42-b678-ef5902a5dd45). *2015 IEEE Symposium on Security and Privacy*. pp. 253–270. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SP.2015.23](https://doi.org/10.1109%2FSP.2015.23). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[20.500.11820/37920e55-65aa-4a42-b678-ef5902a5dd45](https://hdl.handle.net/20.500.11820%2F37920e55-65aa-4a42-b678-ef5902a5dd45). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4673-6949-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4673-6949-7). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [3343426](https://api.semanticscholar.org/CorpusID:3343426).
41. **^** Ben-Sasson, Eli; Chiesa, Alessandro; Genkin, Daniel; Tromer, Eran; Virza, Madars (2013). "SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge". *Advances in Cryptology – CRYPTO 2013*. Lecture Notes in Computer Science. Vol. 8043. pp. 90–108. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-642-40084-1_6](https://doi.org/10.1007%2F978-3-642-40084-1_6). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[1721.1/87953](https://hdl.handle.net/1721.1%2F87953). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-642-40083-4](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-40083-4).
42. **^** Wahby, Riad S.; Setty, Srinath; Ren, Zuocheng; Blumberg, Andrew J.; Walfish, Michael (2015). "Efficient RAM and Control Flow in Verifiable Outsourced Computation". *Proceedings 2015 Network and Distributed System Security Symposium*. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.14722/ndss.2015.23097](https://doi.org/10.14722%2Fndss.2015.23097). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-891562-38-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-891562-38-9).
43. **^** Eberhardt, Jacob; Tai, Stefan (July 2018). "ZoKrates - Scalable Privacy-Preserving Off-Chain Computations". *2018 IEEE International Conference on Internet of Things (IThings) and IEEE Green Computing and Communications (GreenCom) and IEEE Cyber, Physical and Social Computing (CPSCom) and IEEE Smart Data (SmartData)*. pp. 1084–1091. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/Cybermatics_2018.2018.00199](https://doi.org/10.1109%2FCybermatics_2018.2018.00199). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-5386-7975-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5386-7975-3). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [49473237](https://api.semanticscholar.org/CorpusID:49473237).
44. **^** Kosba, Ahmed; Papamanthou, Charalampos; Shi, Elaine (May 2018). "XJsnark: A Framework for Efficient Verifiable Computation". *2018 IEEE Symposium on Security and Privacy (SP)*. pp. 944–961. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SP.2018.00018](https://doi.org/10.1109%2FSP.2018.00018). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-5386-4353-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5386-4353-2).
45. **^** Zhang, Yupeng; Genkin, Daniel; Katz, Jonathan; Papadopoulos, Dimitrios; Papamanthou, Charalampos (May 2018). "VRAM: Faster Verifiable RAM with Program-Independent Preprocessing". *2018 IEEE Symposium on Security and Privacy (SP)*. pp. 908–925. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SP.2018.00013](https://doi.org/10.1109%2FSP.2018.00013). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-5386-4353-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5386-4353-2).
46. **^** Ben-Sasson, Eli; Chiesa, Alessandro; Tromer, Eran; Virza, Madars (20 August 2014). ["Succinct non-interactive zero knowledge for a von Neumann architecture"](https://www.usenix.org/conference/usenixsecurity14/technical-sessions/presentation/ben-sasson). *Proceedings of the 23rd USENIX Conference on Security Symposium*. USENIX Association: 781–796. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-931971-15-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-931971-15-7).
47. **^** Kosba, Ahmed; Papadopoulos, Dimitrios; Papamanthou, Charalampos; Song, Dawn (2020). ["MIRAGE: Succinct Arguments for Randomized Algorithms with Applications to Universal zk-SNARKs"](https://eprint.iacr.org/2020/278). *Cryptology ePrint Archive*.
48. **^** Maller, Mary; Bowe, Sean; Kohlweiss, Markulf; Meiklejohn, Sarah (6 November 2019). ["Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updatable Structured Reference Strings"](https://doi.org/10.1145/3319535.3339817). [*Proceedings of the 2019 ACM SIGSAC Conference on Computer and Communications Security*](https://www.research.ed.ac.uk/en/publications/739b94f1-54f0-4ec3-9644-3c95eea1e8f5). Association for Computing Machinery. pp. 2111–2128. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3319535.3339817](https://doi.org/10.1145%2F3319535.3339817). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[20.500.11820/739b94f1-54f0-4ec3-9644-3c95eea1e8f5](https://hdl.handle.net/20.500.11820%2F739b94f1-54f0-4ec3-9644-3c95eea1e8f5). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-6747-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-6747-9). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [242772913](https://api.semanticscholar.org/CorpusID:242772913).
49. **^** Chiesa, Alessandro; Hu, Yuncong; Maller, Mary; Mishra, Pratyush; Vesely, Noah; Ward, Nicholas (2020). ["Marlin: Preprocessing zkSNARKs with Universal and Updatable SRS"](https://link.springer.com/chapter/10.1007/978-3-030-45721-1_26). *Advances in Cryptology – EUROCRYPT 2020*. Lecture Notes in Computer Science. Vol. 12105. Springer International Publishing. pp. 738–768. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-030-45721-1_26](https://doi.org/10.1007%2F978-3-030-45721-1_26). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-030-45720-4](https://en.wikipedia.org/wiki/Special:BookSources/978-3-030-45720-4). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [204772154](https://api.semanticscholar.org/CorpusID:204772154).
50. **^** Gabizon, Ariel; Williamson, Zachary J.; Ciobotaru, Oana (2019). ["PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge"](https://eprint.iacr.org/2019/953). *Cryptology ePrint Archive*.
51. **^** Bünz, Benedikt; Fisch, Ben; Szepieniec, Alan (2020). ["Transparent SNARKs from DARK Compilers"](https://link.springer.com/chapter/10.1007/978-3-030-45721-1_24). *Advances in Cryptology – EUROCRYPT 2020*. Lecture Notes in Computer Science. Vol. 12105. Springer International Publishing. pp. 677–706. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-030-45721-1_24](https://doi.org/10.1007%2F978-3-030-45721-1_24). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-030-45720-4](https://en.wikipedia.org/wiki/Special:BookSources/978-3-030-45720-4). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [204892714](https://api.semanticscholar.org/CorpusID:204892714).
52. **^** Wahby, Riad S.; Tzialla, Ioanna; Shelat, Abhi; Thaler, Justin; Walfish, Michael (May 2018). "Doubly-Efficient zkSNARKs Without Trusted Setup". *2018 IEEE Symposium on Security and Privacy (SP)*. pp. 926–943. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SP.2018.00060](https://doi.org/10.1109%2FSP.2018.00060). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-5386-4353-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5386-4353-2).
53. **^** Bowe, Sean; Grigg, Jack; Hopwood, Daira (2019). ["Recursive Proof Composition without a Trusted Setup"](https://eprint.iacr.org/2019/1021). *Cryptology ePrint Archive*.
54. **^** Zhang, Jiaheng; Xie, Tiancheng; Zhang, Yupeng; Song, Dawn (May 2020). "Transparent Polynomial Delegation and Its Applications to Zero Knowledge Proof". *2020 IEEE Symposium on Security and Privacy (SP)*. pp. 859–876. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SP40000.2020.00052](https://doi.org/10.1109%2FSP40000.2020.00052). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-7281-3497-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-7281-3497-0).
55. **^** Ames, Scott; Hazay, Carmit; Ishai, Yuval; Venkitasubramaniam, Muthuramakrishnan (30 October 2017). ["Ligero"](https://dl.acm.org/doi/10.1145/3133956.3134104). *Proceedings of the 2017 ACM SIGSAC Conference on Computer and Communications Security*. Association for Computing Machinery. pp. 2087–2104. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3133956.3134104](https://doi.org/10.1145%2F3133956.3134104). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-4946-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-4946-8). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [5348527](https://api.semanticscholar.org/CorpusID:5348527).
56. **^** Ben-Sasson, Eli; Chiesa, Alessandro; Riabzev, Michael; Spooner, Nicholas; Virza, Madars; Ward, Nicholas P. (2019). ["Aurora: Transparent Succinct Arguments for R1CS"](https://link.springer.com/chapter/10.1007%2F978-3-030-17653-2_4). *Advances in Cryptology – EUROCRYPT 2019*. Lecture Notes in Computer Science. Vol. 11476. Springer International Publishing. pp. 103–128. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-030-17653-2_4](https://doi.org/10.1007%2F978-3-030-17653-2_4). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-030-17652-5](https://en.wikipedia.org/wiki/Special:BookSources/978-3-030-17652-5). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [52832327](https://api.semanticscholar.org/CorpusID:52832327).
57. **^** Ben-Sasson, Eli; Bentov, Iddo; Horesh, Yinon; Riabzev, Michael (2019). ["Scalable Zero Knowledge with No Trusted Setup"](https://link.springer.com/chapter/10.1007/978-3-030-26954-8_23). *Advances in Cryptology – CRYPTO 2019*. Lecture Notes in Computer Science. Vol. 11694. Springer International Publishing. pp. 701–732. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-030-26954-8_23](https://doi.org/10.1007%2F978-3-030-26954-8_23). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-030-26953-1](https://en.wikipedia.org/wiki/Special:BookSources/978-3-030-26953-1). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [199501907](https://api.semanticscholar.org/CorpusID:199501907).
58. **^** Nwosu, Emmanuel (2025-11-25). ["Hyperbridge says it is building a hyperstructure for crypto bridges"](https://techcabal.com/2025/11/25/hyperbridge-wants-to-end-bridge-hacks/). *TechCabal*. Retrieved 2025-12-01.
59. **^** Chaliasos, Stefanos; Ernstberger, Jens; Theodore, David; Wong, David; Jahanara, Mohammad; Livshits, Benjamin (2024). ["SoK: What Don't We Know? Understanding Security Vulnerabilities in SNARKs"](https://dl.acm.org/doi/10.5555/3698900.3699116). *SEC '24: Proceedings of the 33rd USENIX Conference on Security Symposium*. pp. 3855–3872. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2402.15293](https://arxiv.org/abs/2402.15293). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-939133-44-1](https://en.wikipedia.org/wiki/Special:BookSources/978-1-939133-44-1).
60. **^** Pailoor, Shankara; Chen, Yanju; Wang, Franklyn; Rodríguez, Clara; Van Geffen, Jacob; Morton, Jason; Chu, Michael; Gu, Brian; Feng, Yu; Dillig, Işıl (2023). ["Automated Detection of Under-Constrained Circuits in Zero-Knowledge Proofs"](https://doi.org/10.1145%2F3591282). *Proceedings of the ACM on Programming Languages*. **7**: 1510–1532. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3591282](https://doi.org/10.1145%2F3591282).
61. **^** Diamond, Tyler (20 June 2025). ["An introduction to zero-knowledge virtual machines (zkVMs)"](https://veridise.com/blog/zero-knowledge/an-introduction-to-zero-knowledge-virtual-machines-zkvms/). *Veridise*. Retrieved 10 February 2026.
62. **^** Bruestle, J.; Gafni, P. (29 July 2023). ["RISC Zero zkVM: scalable, transparent arguments of RISC-V integrity"](https://scholar.google.com/scholar?hl=en&as_sdt=0,44&cluster=15883718532488396719). *Draft*. Retrieved 9 February 2026.

## External links

* [Computer scientist Amit Sahai explains the Zero-knowledge proof in 5 Levels of Difficulty](https://www.youtube.com/watch?v=fOGdb1CTu5c) on [YouTube](https://en.wikipedia.org/wiki/YouTube_video_(identifier))
 
NewPP limit report
Parsed by mw‐web.codfw.main‐6b88fcf968‐sbs2c
Cached time: 20260420070505
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.783 seconds
Real time usage: 0.936 seconds
Preprocessor visited node count: 7607/1000000
Revision size: 66772/2097152 bytes
Post‐expand include size: 190860/2097152 bytes
Template argument size: 6495/2097152 bytes
Highest expansion depth: 18/100
Expensive parser function count: 4/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 248334/5000000 bytes
Lua time usage: 0.504/10.000 seconds
Lua memory usage: 17679435/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  782.799      1 -total
 50.69%  396.804      1 Template:Reflist
 19.01%  148.793     29 Template:Cite_book
 18.39%  143.978      9 Template:Annotated_link
  9.78%   76.576      1 Template:Citation
  8.29%   64.912     16 Template:Cite_journal
  7.53%   58.919      1 Template:Short_description
  5.86%   45.845      1 Template:More_citations_needed
  5.65%   44.211      1 Template:Ambox
  5.44%   42.565     11 Template:Cite_web
 Render ID 41f4b786-3c87-11f1-926d-a54af24cc750  Saved in parser cache with key enwiki:pcache:450541:|#|:idhash:canonical and timestamp 20260420070505 and revision id 1344093656. Rendering was triggered because: page_view