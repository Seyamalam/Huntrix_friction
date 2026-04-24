# Reinforcement learning

* Source: https://en.wikipedia.org/wiki/Reinforcement_learning

---

The typical framing of a reinforcement learning (RL) scenario: an agent takes actions in an environment, which is interpreted into a reward and a state representation, which are fed back to the agent.

| Part of a series on |
| --- |
| [Machine learning](https://en.wikipedia.org/wiki/Machine_learning)   and [data mining](https://en.wikipedia.org/wiki/Data_mining) |
| Paradigms [Supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) [Unsupervised learning](https://en.wikipedia.org/wiki/Unsupervised_learning) [Semi-supervised learning](https://en.wikipedia.org/wiki/Semi-supervised_learning) [Self-supervised learning](https://en.wikipedia.org/wiki/Self-supervised_learning) Reinforcement learning [Meta-learning](https://en.wikipedia.org/wiki/Meta-learning_(computer_science)) [Online learning](https://en.wikipedia.org/wiki/Online_machine_learning) [Batch learning](https://en.wikipedia.org/wiki/Batch_learning) [Curriculum learning](https://en.wikipedia.org/wiki/Curriculum_learning) [Rule-based learning](https://en.wikipedia.org/wiki/Rule-based_machine_learning) [Neuro-symbolic AI](https://en.wikipedia.org/wiki/Neuro-symbolic_AI) [Neuromorphic engineering](https://en.wikipedia.org/wiki/Neuromorphic_engineering) [Quantum machine learning](https://en.wikipedia.org/wiki/Quantum_machine_learning) |
| Problems [Classification](https://en.wikipedia.org/wiki/Statistical_classification) [Generative modeling](https://en.wikipedia.org/wiki/Generative_model) [Regression](https://en.wikipedia.org/wiki/Regression_analysis) [Clustering](https://en.wikipedia.org/wiki/Cluster_analysis) [Dimensionality reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction) [Density estimation](https://en.wikipedia.org/wiki/Density_estimation) [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection) [Data cleaning](https://en.wikipedia.org/wiki/Data_cleaning) [AutoML](https://en.wikipedia.org/wiki/Automated_machine_learning) [Association rules](https://en.wikipedia.org/wiki/Association_rule_learning) [Semantic analysis](https://en.wikipedia.org/wiki/Semantic_analysis_(machine_learning)) [Structured prediction](https://en.wikipedia.org/wiki/Structured_prediction) [Feature engineering](https://en.wikipedia.org/wiki/Feature_engineering) [Feature learning](https://en.wikipedia.org/wiki/Feature_learning) [Learning to rank](https://en.wikipedia.org/wiki/Learning_to_rank) [Grammar induction](https://en.wikipedia.org/wiki/Grammar_induction) [Ontology learning](https://en.wikipedia.org/wiki/Ontology_learning) [Multimodal learning](https://en.wikipedia.org/wiki/Multimodal_learning) |
| [Supervised learning](https://en.wikipedia.org/wiki/Supervised_learning)   (**[classification](https://en.wikipedia.org/wiki/Statistical_classification)** • **[regression](https://en.wikipedia.org/wiki/Regression_analysis)**)  [Apprenticeship learning](https://en.wikipedia.org/wiki/Apprenticeship_learning) [Decision trees](https://en.wikipedia.org/wiki/Decision_tree_learning) [Ensembles](https://en.wikipedia.org/wiki/Ensemble_learning) [Bagging](https://en.wikipedia.org/wiki/Bootstrap_aggregating) [Boosting](https://en.wikipedia.org/wiki/Boosting_(machine_learning)) [Random forest](https://en.wikipedia.org/wiki/Random_forest) [*k*-NN](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) [Linear regression](https://en.wikipedia.org/wiki/Linear_regression) [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) [Artificial neural networks](https://en.wikipedia.org/wiki/Artificial_neural_network) [Logistic regression](https://en.wikipedia.org/wiki/Logistic_regression) [Perceptron](https://en.wikipedia.org/wiki/Perceptron) [Relevance vector machine (RVM)](https://en.wikipedia.org/wiki/Relevance_vector_machine) [Support vector machine (SVM)](https://en.wikipedia.org/wiki/Support_vector_machine) |
| [Clustering](https://en.wikipedia.org/wiki/Cluster_analysis) [BIRCH](https://en.wikipedia.org/wiki/BIRCH) [CURE](https://en.wikipedia.org/wiki/CURE_algorithm) [Hierarchical](https://en.wikipedia.org/wiki/Hierarchical_clustering) [*k*-means](https://en.wikipedia.org/wiki/K-means_clustering) [Fuzzy](https://en.wikipedia.org/wiki/Fuzzy_clustering) [Expectation–maximization (EM)](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm)    [DBSCAN](https://en.wikipedia.org/wiki/DBSCAN) [OPTICS](https://en.wikipedia.org/wiki/OPTICS_algorithm) [Mean shift](https://en.wikipedia.org/wiki/Mean_shift) |
| [Dimensionality reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction) [Factor analysis](https://en.wikipedia.org/wiki/Factor_analysis) [CCA](https://en.wikipedia.org/wiki/Canonical_correlation) [ICA](https://en.wikipedia.org/wiki/Independent_component_analysis) [LDA](https://en.wikipedia.org/wiki/Linear_discriminant_analysis) [NMF](https://en.wikipedia.org/wiki/Non-negative_matrix_factorization) [PCA](https://en.wikipedia.org/wiki/Principal_component_analysis) [PGD](https://en.wikipedia.org/wiki/Proper_generalized_decomposition) [t-SNE](https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding) [SDL](https://en.wikipedia.org/wiki/Sparse_dictionary_learning) |
| [Structured prediction](https://en.wikipedia.org/wiki/Structured_prediction) [Graphical models](https://en.wikipedia.org/wiki/Graphical_model) [Bayes net](https://en.wikipedia.org/wiki/Bayesian_network) [Conditional random field](https://en.wikipedia.org/wiki/Conditional_random_field) [Hidden Markov](https://en.wikipedia.org/wiki/Hidden_Markov_model) |
| [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection) [RANSAC](https://en.wikipedia.org/wiki/Random_sample_consensus) [*k*-NN](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) [Local outlier factor](https://en.wikipedia.org/wiki/Local_outlier_factor) [Isolation forest](https://en.wikipedia.org/wiki/Isolation_forest) |
| [Neural networks](https://en.wikipedia.org/wiki/Neural_network_(machine_learning)) [Autoencoder](https://en.wikipedia.org/wiki/Autoencoder) [Deep learning](https://en.wikipedia.org/wiki/Deep_learning) [Feedforward neural network](https://en.wikipedia.org/wiki/Feedforward_neural_network) [Recurrent neural network](https://en.wikipedia.org/wiki/Recurrent_neural_network) [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) [GRU](https://en.wikipedia.org/wiki/Gated_recurrent_unit) [ESN](https://en.wikipedia.org/wiki/Echo_state_network) [reservoir computing](https://en.wikipedia.org/wiki/Reservoir_computing) [Boltzmann machine](https://en.wikipedia.org/wiki/Boltzmann_machine) [Restricted](https://en.wikipedia.org/wiki/Restricted_Boltzmann_machine) [GAN](https://en.wikipedia.org/wiki/Generative_adversarial_network) [Diffusion model](https://en.wikipedia.org/wiki/Diffusion_model) [SOM](https://en.wikipedia.org/wiki/Self-organizing_map) [Convolutional neural network](https://en.wikipedia.org/wiki/Convolutional_neural_network) [U-Net](https://en.wikipedia.org/wiki/U-Net) [LeNet](https://en.wikipedia.org/wiki/LeNet) [AlexNet](https://en.wikipedia.org/wiki/AlexNet) [DeepDream](https://en.wikipedia.org/wiki/DeepDream) [Neural field](https://en.wikipedia.org/wiki/Neural_field) [Neural radiance field](https://en.wikipedia.org/wiki/Neural_radiance_field) [Physics-informed neural networks](https://en.wikipedia.org/wiki/Physics-informed_neural_networks) [Transformer](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)) [Vision](https://en.wikipedia.org/wiki/Vision_transformer) [Mamba](https://en.wikipedia.org/wiki/Mamba_(deep_learning_architecture)) [Spiking neural network](https://en.wikipedia.org/wiki/Spiking_neural_network) [Memtransistor](https://en.wikipedia.org/wiki/Memtransistor) [Electrochemical RAM](https://en.wikipedia.org/wiki/Electrochemical_RAM) (ECRAM) |
| Reinforcement learning [Q-learning](https://en.wikipedia.org/wiki/Q-learning) [Policy gradient](https://en.wikipedia.org/wiki/Policy_gradient_method) [SARSA](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action) [Temporal difference (TD)](https://en.wikipedia.org/wiki/Temporal_difference_learning) [Multi-agent](https://en.wikipedia.org/wiki/Multi-agent_reinforcement_learning) [Self-play](https://en.wikipedia.org/wiki/Self-play_(reinforcement_learning_technique)) |
| Learning with humans [Active learning](https://en.wikipedia.org/wiki/Active_learning_(machine_learning)) [Crowdsourcing](https://en.wikipedia.org/wiki/Crowdsourcing) [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) [Mechanistic interpretability](https://en.wikipedia.org/wiki/Mechanistic_interpretability) [RLHF](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback) |
| Model diagnostics [Coefficient of determination](https://en.wikipedia.org/wiki/Coefficient_of_determination) [Confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix) [Learning curve](https://en.wikipedia.org/wiki/Learning_curve_(machine_learning)) [ROC curve](https://en.wikipedia.org/wiki/Receiver_operating_characteristic) |
| Mathematical foundations [Kernel machines](https://en.wikipedia.org/wiki/Kernel_machines) [Bias–variance tradeoff](https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff) [Computational learning theory](https://en.wikipedia.org/wiki/Computational_learning_theory) [Empirical risk minimization](https://en.wikipedia.org/wiki/Empirical_risk_minimization) [Occam learning](https://en.wikipedia.org/wiki/Occam_learning) [PAC learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning) [Statistical learning](https://en.wikipedia.org/wiki/Statistical_learning_theory) [VC theory](https://en.wikipedia.org/wiki/Vapnik%E2%80%93Chervonenkis_theory) [Topological deep learning](https://en.wikipedia.org/wiki/Topological_deep_learning) |
| Journals and conferences [AAAI](https://en.wikipedia.org/wiki/AAAI_Conference_on_Artificial_Intelligence) [ECML PKDD](https://en.wikipedia.org/wiki/ECML_PKDD) [NeurIPS](https://en.wikipedia.org/wiki/Conference_on_Neural_Information_Processing_Systems) [ICML](https://en.wikipedia.org/wiki/International_Conference_on_Machine_Learning) [ICLR](https://en.wikipedia.org/wiki/International_Conference_on_Learning_Representations) [IJCAI](https://en.wikipedia.org/wiki/International_Joint_Conference_on_Artificial_Intelligence) [ML](https://en.wikipedia.org/wiki/Machine_Learning_(journal)) [JMLR](https://en.wikipedia.org/wiki/Journal_of_Machine_Learning_Research) |
| Related articles [Glossary of artificial intelligence](https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence) [List of datasets for machine-learning research](https://en.wikipedia.org/wiki/List_of_datasets_for_machine-learning_research) [List of datasets in computer vision and image processing](https://en.wikipedia.org/wiki/List_of_datasets_in_computer_vision_and_image_processing) [Outline of machine learning](https://en.wikipedia.org/wiki/Outline_of_machine_learning) |
| [v](https://en.wikipedia.org/wiki/Template:Machine_learning)[t](https://en.wikipedia.org/wiki/Template_talk:Machine_learning)[e](https://en.wikipedia.org/wiki/Special:EditPage/Template:Machine_learning) |

In [machine learning](https://en.wikipedia.org/wiki/Machine_learning) and [optimal control](https://en.wikipedia.org/wiki/Optimal_control), **reinforcement learning** (**RL**) is concerned with how an [intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent) should [take actions](https://en.wikipedia.org/wiki/Action_selection) in a dynamic environment in order to [maximize a reward](https://en.wikipedia.org/wiki/Reward-based_selection) signal. Reinforcement learning is one of the [three basic machine learning paradigms](https://en.wikipedia.org/wiki/Machine_learning#Approaches), alongside [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) and [unsupervised learning](https://en.wikipedia.org/wiki/Unsupervised_learning).

While supervised learning and unsupervised learning algorithms respectively attempt to discover patterns in labeled and unlabeled data, reinforcement learning involves training an agent through interactions with its environment. To learn to maximize rewards from these interactions, the agent makes decisions between trying new actions to learn more about the environment (exploration), or using current knowledge of the environment to take the best action (exploitation). The search for the optimal balance between these two strategies is known as the [exploration–exploitation dilemma](https://en.wikipedia.org/wiki/Exploration%E2%80%93exploitation_dilemma).

The environment is typically stated in the form of a [Markov decision process](https://en.wikipedia.org/wiki/Markov_decision_process), as many reinforcement learning algorithms use [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) techniques. The main difference between classical dynamic programming methods and reinforcement learning algorithms is that the latter do not assume knowledge of an exact mathematical model of the Markov decision process, and they target large Markov decision processes where exact methods become infeasible.

## Principles

Due to its generality, reinforcement learning is studied in many disciplines, such as [game theory](https://en.wikipedia.org/wiki/Game_theory), [control theory](https://en.wikipedia.org/wiki/Control_theory), [operations research](https://en.wikipedia.org/wiki/Operations_research), [information theory](https://en.wikipedia.org/wiki/Information_theory), [simulation-based optimization](https://en.wikipedia.org/wiki/Simulation-based_optimization), [multi-agent systems](https://en.wikipedia.org/wiki/Multi-agent_system), [swarm intelligence](https://en.wikipedia.org/wiki/Swarm_intelligence), and [statistics](https://en.wikipedia.org/wiki/Statistics). In the operations research and control literature, RL is called *approximate dynamic programming*, or *neuro-dynamic programming.* The problems of interest in RL have also been studied in the [theory of optimal control](https://en.wikipedia.org/wiki/Optimal_control_theory), which is concerned mostly with the existence and characterization of optimal solutions, and algorithms for their exact computation, and less with learning or approximation (particularly in the absence of a mathematical model of the environment).

Basic reinforcement learning is modeled as a [Markov decision process](https://en.wikipedia.org/wiki/Markov_decision_process):

* A set of environment and agent states (the state space), 

S

{\displaystyle {\mathcal {S}}}

;
* A set of actions (the action space), 

A

{\displaystyle {\mathcal {A}}}

, of the agent;
* P

a

(
s
,

s
′

)
=
Pr
(

S

t
+
1

=

s
′

∣ ∣ 

S

t

=

s
,

A

t

=

a
)

{\displaystyle P_{a}(s,s')=\Pr(S_{t+1}{=}s'\mid S_{t}{=}s,A_{t}{=}a)}

, the transition probability (at time 

t

{\displaystyle t}

) from state 

s

{\displaystyle s}

 to state 

s
′

{\displaystyle s'}

 under action 

a

{\displaystyle a}

.
* R

a

(
s
,

s
′

)

{\displaystyle R_{a}(s,s')}

, the immediate reward after transitioning from 

s

{\displaystyle s}

 to 

s
′

{\displaystyle s'}

 under action 

a

{\displaystyle a}

.

The purpose of reinforcement learning is for the agent to learn an optimal (or near-optimal) policy that maximizes the reward function or other user-provided reinforcement signal that accumulates from immediate rewards. This is similar to [processes](https://en.wikipedia.org/wiki/Reinforcement) that appear to occur in animal psychology. For example, biological brains are hardwired to interpret signals such as pain and hunger as negative reinforcements, and interpret pleasure and food intake as positive reinforcements. In some circumstances, animals learn to adopt behaviors that optimize these rewards. This suggests that animals are capable of reinforcement learning.

A basic reinforcement learning agent interacts with its environment in discrete time steps. At each time step t, the agent receives the current state 

S

t

{\displaystyle S_{t}}

 and reward 

R

t

{\displaystyle R_{t}}

. It then chooses an action 

A

t

{\displaystyle A_{t}}

 from the set of available actions, which is subsequently sent to the environment. The environment moves to a new state 

S

t
+
1

{\displaystyle S_{t+1}}

 and the reward 

R

t
+
1

{\displaystyle R_{t+1}}

 associated with the *transition* 

(

S

t

,

A

t

,

S

t
+
1

)

{\displaystyle (S_{t},A_{t},S_{t+1})}

 is determined. The goal of a reinforcement learning agent is to learn a *policy*:

π π 
:

S

× × 

A

→ → 
[
0
,
1
]

π π 
(
s
,
a
)
=
Pr
(

A

t

=

a
∣ ∣ 

S

t

=

s
)

{\displaystyle {\begin{aligned}&\pi :{\mathcal {S}}\times {\mathcal {A}}\to [0,1]\\&\pi (s,a)=\Pr(A_{t}{=}a\mid S_{t}{=}s)\end{aligned}}}

that maximizes the expected cumulative reward.

Formulating the problem as a Markov decision process assumes the agent directly observes the current environmental state; in this case, the problem is said to have *full observability*. If the agent only has access to a subset of states, or if the observed states are corrupted by noise, the agent is said to have *partial observability*, and formally the problem must be formulated as a [partially observable Markov decision process](https://en.wikipedia.org/wiki/Partially_observable_Markov_decision_process). In both cases, the set of actions available to the agent can be restricted. For example, the state of an account balance could be restricted to be positive; if the current value of the state is 3 and the state transition attempts to reduce the value by 4, the transition will not be allowed.

When the agent's performance is compared to that of an agent that acts optimally, the difference in performance yields the notion of [regret](https://en.wikipedia.org/wiki/Regret_(decision_theory)). In order to act near optimally, the agent must reason about long-term consequences of its actions (i.e., maximize future rewards), although the immediate reward associated with this might be negative.

Thus, reinforcement learning is particularly well-suited to problems that include a long-term versus short-term reward trade-off. It has been applied successfully to various problems, including [energy storage](https://en.wikipedia.org/wiki/Energy_storage), [robot control](https://en.wikipedia.org/wiki/Robot_control), [photovoltaic generators](https://en.wikipedia.org/wiki/Photovoltaic_system), [backgammon](https://en.wikipedia.org/wiki/Backgammon), [checkers](https://en.wikipedia.org/wiki/Checkers), [Go](https://en.wikipedia.org/wiki/Go_(game)) ([AlphaGo](https://en.wikipedia.org/wiki/AlphaGo)), and [autonomous driving systems](https://en.wikipedia.org/wiki/Self-driving_car).

Two elements make reinforcement learning powerful: the use of samples to optimize performance, and the use of [function approximation](https://en.wikipedia.org/wiki/Neural_network_(machine_learning)) to deal with large environments. Thanks to these two key components, RL can be used in large environments in the following situations:

* A model of the environment is known, but an [analytic solution](https://en.wikipedia.org/wiki/Closed-form_expression) is not available;
* Only a simulation model of the environment is given (the subject of [simulation-based optimization](https://en.wikipedia.org/wiki/Simulation-based_optimization));
* The only way to collect information about the environment is to interact with it.

The first two of these problems could be considered planning problems (since some form of model is available), while the last one could be considered to be a genuine learning problem. However, reinforcement learning converts both planning problems to [machine learning](https://en.wikipedia.org/wiki/Machine_learning) problems.

## Exploration

The [trade-off between exploration and exploitation](https://en.wikipedia.org/wiki/Exploration%E2%80%93exploitation_dilemma) has been most thoroughly studied through the [multi-armed bandit](https://en.wikipedia.org/wiki/Multi-armed_bandit) problem and for finite state space Markov decision processes in Burnetas and Katehakis (1997).

Reinforcement learning requires clever exploration mechanisms; randomly selecting actions, without reference to an estimated probability distribution, shows poor performance. The case of (small) finite Markov decision processes is relatively well understood. However, due to the lack of algorithms that scale well with the number of states (or scale to problems with infinite state spaces), simple exploration methods are the most practical.

One such method is 

ε ε 

{\displaystyle \varepsilon }

-greedy, where 

0
<
ε ε 
<
1

{\displaystyle 0<\varepsilon <1}

 is a parameter controlling the amount of exploration vs. exploitation. With probability 

1
− − 
ε ε 

{\displaystyle 1-\varepsilon }

, exploitation is chosen, and the agent chooses the action that it believes has the best long-term effect (ties between actions are broken uniformly at random). Alternatively, with probability 

ε ε 

{\displaystyle \varepsilon }

, exploration is chosen, and the action is chosen uniformly at random. 

ε ε 

{\displaystyle \varepsilon }

 is usually a fixed parameter but can be adjusted either according to a schedule (making the agent explore progressively less), or adaptively based on heuristics.

## Algorithms for control learning

Even if the issue of exploration is disregarded and even if the state was observable (assumed hereafter), the problem remains to use past experience to find out which actions lead to higher cumulative rewards.

### Criterion of optimality

#### Policy

The agent's action selection is modeled as a map called *policy*:

π π 
:

A

× × 

S

→ → 
[
0
,
1
]

π π 
(
a
,
s
)
=
Pr
(

A

t

=

a
∣ ∣ 

S

t

=

s
)

{\displaystyle {\begin{aligned}&\pi :{\mathcal {A}}\times {\mathcal {S}}\to [0,1]\\&\pi (a,s)=\Pr(A_{t}{=}a\mid S_{t}{=}s)\end{aligned}}}

The policy map gives the probability of taking action 

a

{\displaystyle a}

 when in state 

s

{\displaystyle s}

. There are also deterministic policies  

π π 

{\displaystyle \pi }

 for which 

π π 
(
s
)

{\displaystyle \pi (s)}

 denotes the action that should be played at state 

s

{\displaystyle s}

.

#### State-value function

The state-value function 

V

π π 

(
s
)

{\displaystyle V_{\pi }(s)}

 is defined as, *expected discounted return* starting with state 

s

{\displaystyle s}

, i.e. 

S

0

=
s

{\displaystyle S_{0}=s}

, and successively following policy 

π π 

{\displaystyle \pi }

. Hence, roughly speaking, the value function estimates "how good" it is to be in a given state.

V

π π 

(
s
)
=

E

⁡ ⁡ 
[
G
∣ ∣ 

S

0

=

s
]
=

E

⁡ ⁡ 

[

∑ ∑ 

t
=
0

∞ ∞ 

γ γ 

t

R

t
+
1

∣ ∣ 

S

0

=

s

]

,

{\displaystyle V_{\pi }(s)=\operatorname {\mathbb {E} } [G\mid S_{0}{=}s]=\operatorname {\mathbb {E} } \left[\sum _{t=0}^{\infty }\gamma ^{t}R_{t+1}\mid S_{0}{=}s\right],}

where the random variable 

G

{\displaystyle G}

 denotes the **discounted return**, and is defined as the sum of future discounted rewards:

G
=

∑ ∑ 

t
=
0

∞ ∞ 

γ γ 

t

R

t
+
1

=

R

1

+
γ γ 

R

2

+

γ γ 

2

R

3

+
⋯ ⋯ 
,

{\displaystyle G=\sum _{t=0}^{\infty }\gamma ^{t}R_{t+1}=R_{1}+\gamma R_{2}+\gamma ^{2}R_{3}+\cdots ,}

where 

R

t
+
1

{\displaystyle R_{t+1}}

 is the reward for transitioning from state 

S

t

{\displaystyle S_{t}}

 to 

S

t
+
1

{\displaystyle S_{t+1}}

, 

0
≤ ≤ 
γ γ 
<
1

{\displaystyle 0\leq \gamma <1}

 is the [discount rate](https://en.wikipedia.org/wiki/Q-learning#Discount_factor). 

γ γ 

{\displaystyle \gamma }

 is less than 1, so rewards in the distant future are weighted less than rewards in the immediate future.

The algorithm must find a policy with maximum expected discounted return. From the theory of Markov decision processes it is known that, without loss of generality, the search can be restricted to the set of so-called *stationary* policies. A policy is *stationary* if the action-distribution returned by it depends only on the last state visited (from the observation agent's history). The search can be further restricted to *deterministic* stationary policies. A *deterministic stationary* policy deterministically selects actions based on the current state. Since any such policy can be identified with a mapping from the set of states to the set of actions, these policies can be identified with such mappings with no loss of generality.

### Brute force

The [brute force](https://en.wikipedia.org/wiki/Brute-force_search) approach entails two steps:

* For each possible policy, sample returns while following it
* Choose the policy with the largest expected discounted return

One problem with this is that the number of policies can be large, or even infinite. Another is that the variance of the returns may be large, which requires many samples to accurately estimate the discounted return of each policy.

These problems can be ameliorated if we assume some structure and allow samples generated from one policy to influence the estimates made for others. The two main approaches for achieving this are value function estimation and direct policy search.

### Value function

Value function approaches attempt to find a policy that maximizes the discounted return by maintaining a set of estimates of expected discounted returns 

E

⁡ ⁡ 
[
G
]

{\displaystyle \operatorname {\mathbb {E} } [G]}

 for some policy (usually either the "current" [on-policy] or the optimal [off-policy] one).

These methods rely on the theory of Markov decision processes, where optimality is defined in a sense stronger than the one above: A policy is optimal if it achieves the best-expected discounted return from *any* initial state (i.e., initial distributions play no role in this definition). Again, an optimal policy can always be found among stationary policies.

To define optimality in a formal manner, define the state-value of a policy 

π π 

{\displaystyle \pi }

 by

V

π π 

(
s
)
=

E

⁡ ⁡ 
[
G
∣ ∣ 
s
,
π π 
]
,

{\displaystyle V^{\pi }(s)=\operatorname {\mathbb {E} } [G\mid s,\pi ],}

where 

G

{\displaystyle G}

 stands for the discounted return associated with following 

π π 

{\displaystyle \pi }

 from the initial state 

s

{\displaystyle s}

. Defining 

V

∗ ∗ 

(
s
)

{\displaystyle V^{*}(s)}

 as the maximum possible state-value of 

V

π π 

(
s
)

{\displaystyle V^{\pi }(s)}

, where 

π π 

{\displaystyle \pi }

 is allowed to change,

V

∗ ∗ 

(
s
)
=

max

π π 

V

π π 

(
s
)
.

{\displaystyle V^{*}(s)=\max _{\pi }V^{\pi }(s).}

A policy that achieves these optimal state-values in each state is called *optimal*. Clearly, a policy that is optimal in this sense is also optimal in the sense that it maximizes the expected discounted return, since 

V

∗ ∗ 

(
s
)
=

max

π π 

E

[
G
∣ ∣ 
s
,
π π 
]

{\displaystyle V^{*}(s)=\max _{\pi }\mathbb {E} [G\mid s,\pi ]}

, where 

s

{\displaystyle s}

 is a state randomly sampled from the distribution 

μ μ 

{\displaystyle \mu }

 of initial states (so 

μ μ 
(
s
)
=
Pr
(

S

0

=
s
)

{\displaystyle \mu (s)=\Pr(S_{0}=s)}

).

Although state-values suffice to define optimality, it is useful to define action-values. Given a state 

s

{\displaystyle s}

, an action 

a

{\displaystyle a}

 and a policy 

π π 

{\displaystyle \pi }

, the action-value of the pair 

(
s
,
a
)

{\displaystyle (s,a)}

 under 

π π 

{\displaystyle \pi }

 is defined by

Q

π π 

(
s
,
a
)
=

E

⁡ ⁡ 
[
G
∣ ∣ 
s
,
a
,
π π 
]
,

{\displaystyle Q^{\pi }(s,a)=\operatorname {\mathbb {E} } [G\mid s,a,\pi ],}

where 

G

{\displaystyle G}

 now stands for the random discounted return associated with first taking action 

a

{\displaystyle a}

 in state 

s

{\displaystyle s}

 and following 

π π 

{\displaystyle \pi }

, thereafter.

The theory of Markov decision processes states that if 

π π 

∗ ∗ 

{\displaystyle \pi ^{*}}

 is an optimal policy, we act optimally (take the optimal action) by choosing the action from 

Q

π π 

∗ ∗ 

(
s
,
⋅ ⋅ 
)

{\displaystyle Q^{\pi ^{*}}(s,\cdot )}

 with the highest action-value at each state, 

s

{\displaystyle s}

. The *action-value function* of such an optimal policy (

Q

π π 

∗ ∗ 

{\displaystyle Q^{\pi ^{*}}}

) is called the *optimal action-value function* and is commonly denoted by 

Q

∗ ∗ 

{\displaystyle Q^{*}}

. In summary, the knowledge of the optimal action-value function alone suffices to know how to act optimally.

Assuming full knowledge of the Markov decision process, the two basic approaches to compute the optimal action-value function are [value iteration](https://en.wikipedia.org/wiki/Value_iteration) and [policy iteration](https://en.wikipedia.org/wiki/Policy_iteration). Both algorithms compute a sequence of functions 

Q

k

{\displaystyle Q_{k}}

 (

k
=
0
,
1
,
2
,
… … 

{\displaystyle k=0,1,2,\ldots }

) that converge to 

Q

∗ ∗ 

{\displaystyle Q^{*}}

. Computing these functions involves computing expectations over the whole state-space, which is impractical for all but the smallest (finite) Markov decision processes. In reinforcement learning methods, expectations are approximated by averaging over samples and using function approximation techniques to cope with the need to represent value functions over large state-action spaces.

#### Monte Carlo methods

[Monte Carlo methods](https://en.wikipedia.org/wiki/Monte_Carlo_sampling) are used to solve reinforcement learning problems by averaging sample returns. Unlike methods that require full knowledge of the environment's dynamics, Monte Carlo methods rely solely on actual or [simulated](https://en.wikipedia.org/wiki/Simulation) experience—sequences of states, actions, and rewards obtained from interaction with an environment. This makes them applicable in situations where the complete dynamics are unknown. Learning from actual experience does not require prior knowledge of the environment and can still lead to optimal behavior. When using simulated experience, only a model capable of generating sample transitions is required, rather than a full specification of [transition probabilities](https://en.wikipedia.org/wiki/Markov_chain), which is necessary for [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) methods.

Monte Carlo methods apply to episodic tasks, where experience is divided into episodes that eventually terminate. Policy and value function updates occur only after the completion of an episode, making these methods incremental on an episode-by-episode basis, though not on a step-by-step (online) basis. The term "Monte Carlo" generally refers to any method involving [random sampling](https://en.wikipedia.org/wiki/Random_sampling); however, in this context, it specifically refers to methods that compute averages from *complete* returns, rather than *partial* returns.

These methods function similarly to the [bandit algorithms](https://en.wikipedia.org/wiki/Multi-armed_bandit), in which returns are averaged for each state-action pair. The key difference is that actions taken in one state affect the returns of subsequent states within the same episode, making the problem [non-stationary](https://en.wikipedia.org/wiki/Non-stationary). To address this non-stationarity, Monte Carlo methods use the framework of general policy iteration (GPI). While dynamic programming computes [value functions](https://en.wikipedia.org/wiki/Value_function) using full knowledge of the Markov decision process, Monte Carlo methods learn these functions through sample returns. The value functions and policies interact similarly to dynamic programming to achieve [optimality](https://en.wikipedia.org/wiki/Mathematical_optimization), first addressing the prediction problem and then extending to policy improvement and control, all based on sampled experience.

#### Temporal difference methods

The first problem is corrected by allowing the procedure to change the policy (at some or all states) before the values settle. This too may be problematic as it might prevent convergence. Most current algorithms do this, giving rise to the class of *generalized policy iteration* algorithms. Many [*actor-critic* methods](https://en.wikipedia.org/wiki/Actor-critic_algorithm) belong to this category.

The second issue can be corrected by allowing trajectories to contribute to any state-action pair in them. This may also help to some extent with the third problem, although a better solution when returns have high variance is Sutton's [temporal difference](https://en.wikipedia.org/wiki/Temporal_difference) (TD) methods that are based on the recursive [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation). The computation in TD methods can be incremental (when after each transition the memory is changed and the transition is thrown away), or batch (when the transitions are batched and the estimates are computed once based on the batch). Batch methods, such as the least-squares temporal difference method, may use the information in the samples better, while incremental methods are the only choice when batch methods are infeasible due to their high computational or memory complexity. Some methods try to combine the two approaches. Methods based on temporal differences also overcome the fourth issue.

Another problem specific to TD comes from their reliance on the recursive Bellman equation. Most TD methods have a so-called 

λ λ 

{\displaystyle \lambda }

 parameter 

(
0
≤ ≤ 
λ λ 
≤ ≤ 
1
)

{\displaystyle (0\leq \lambda \leq 1)}

 that can continuously interpolate between Monte Carlo methods that do not rely on the Bellman equations and the basic TD methods that rely entirely on the Bellman equations. This can be effective in palliating this issue.

#### Function approximation methods

In order to address the fifth issue, *function approximation methods* are used. *Linear function approximation* starts with a mapping 

ϕ ϕ 

{\displaystyle \phi }

 that assigns a finite-dimensional vector to each state-action pair. Then, the action values of a state-action pair 

(
s
,
a
)

{\displaystyle (s,a)}

 are obtained by linearly combining the components of 

ϕ ϕ 
(
s
,
a
)

{\displaystyle \phi (s,a)}

 with some *weights* 

θ θ 

{\displaystyle \theta }

:

Q
(
s
,
a
)
=

∑ ∑ 

i
=
1

d

θ θ 

i

ϕ ϕ 

i

(
s
,
a
)
.

{\displaystyle Q(s,a)=\sum _{i=1}^{d}\theta _{i}\phi _{i}(s,a).}

The algorithms then adjust the weights, instead of adjusting the values associated with the individual state-action pairs. Methods based on ideas from [nonparametric statistics](https://en.wikipedia.org/wiki/Nonparametric_statistics) (which can be seen to construct their own features) have been explored.

Value iteration can also be used as a starting point, giving rise to the [Q-learning](https://en.wikipedia.org/wiki/Q-learning) algorithm and its many variants. Including Deep Q-learning methods when a neural network is used to represent Q, with various applications in stochastic search problems.

The problem with using action-values is that they may need highly precise estimates of the competing action values that can be hard to obtain when the returns are noisy, though this problem is mitigated to some extent by temporal difference methods. Using the so-called compatible function approximation method compromises generality and efficiency.

### Direct policy search

An alternative method is to search directly in (some subset of) the policy space, in which case the problem becomes a case of [stochastic optimization](https://en.wikipedia.org/wiki/Stochastic_optimization). The two approaches available are gradient-based and gradient-free methods.

[Gradient](https://en.wikipedia.org/wiki/Gradient)-based methods (*policy gradient methods*) start with a mapping from a finite-dimensional (parameter) space to the space of policies: given the parameter vector 

θ θ 

{\displaystyle \theta }

, let 

π π 

θ θ 

{\displaystyle \pi _{\theta }}

 denote the policy associated to 

θ θ 

{\displaystyle \theta }

. Defining the performance function by 

ρ ρ 
(
θ θ 
)
=

ρ ρ 

π π 

θ θ 

{\displaystyle \rho (\theta )=\rho ^{\pi _{\theta }}}

 under mild conditions this function will be differentiable as a function of the parameter vector 

θ θ 

{\displaystyle \theta }

. If the gradient of 

ρ ρ 

{\displaystyle \rho }

 was known, one could use [gradient ascent](https://en.wikipedia.org/wiki/Gradient_descent). Since an analytic expression for the gradient is not available, only a noisy estimate is available. Such an estimate can be constructed in many ways, giving rise to algorithms such as Williams's REINFORCE method (which is known as the likelihood ratio method in the [simulation-based optimization](https://en.wikipedia.org/wiki/Simulation-based_optimization) literature).

A large class of methods avoids relying on gradient information. These include [simulated annealing](https://en.wikipedia.org/wiki/Simulated_annealing), [cross-entropy search](https://en.wikipedia.org/wiki/Cross-entropy_method) or methods of [evolutionary computation](https://en.wikipedia.org/wiki/Evolutionary_computation). Many gradient-free methods can achieve (in theory and in the limit) a global optimum.

Policy search methods may converge slowly given noisy data. For example, this happens in episodic problems when the trajectories are long and the variance of the returns is large. Value-function based methods that rely on temporal differences might help in this case. In recent years, *actor–critic methods* have been proposed and performed well on various problems.

Policy search methods have been used in the [robotics](https://en.wikipedia.org/wiki/Robotics) context. Many policy search methods may get stuck in local optima (as they are based on [local search](https://en.wikipedia.org/wiki/Local_search_(optimization))).

### Model-based algorithms

Finally, all of the above methods can be combined with algorithms that first learn a model of the [Markov decision process](https://en.wikipedia.org/wiki/Markov_decision_process), the probability of each next state given an action taken from an existing state. For instance, the Dyna algorithm learns a model from experience, and uses that to provide more modelled transitions for a value function, in addition to the real transitions. Such methods can sometimes be extended to use of non-parametric models, such as when the transitions are simply stored and "replayed" to the learning algorithm.

Model-based methods can be more computationally intensive than model-free approaches, and their utility can be limited by the extent to which the Markov decision process can be learnt.

There are other ways to use models than to update a value function. For instance, in [model predictive control](https://en.wikipedia.org/wiki/Model_predictive_control) the model is used to update the behavior directly.

### Partially Supervised RL (PSRL)

The costly exploration needed to learn an optimal policy can be reduced if some supervised data is available. This can be achieved for instance by learning a crude control policy and using this to initialize the Q table intelligently instead of with zeros.

## Theory

Both the asymptotic and finite-sample behaviors of most algorithms are well understood. Algorithms with provably good online performance (addressing the exploration issue) are known.

Efficient exploration of Markov decision processes is given in Burnetas and Katehakis (1997). Finite-time performance bounds have also appeared for many algorithms, but these bounds are expected to be rather loose and thus more work is needed to better understand the relative advantages and limitations.

For incremental algorithms, asymptotic convergence issues have been settled. Temporal-difference-based algorithms converge under a wider set of conditions than was previously possible (for example, when used with arbitrary, smooth function approximation).

## Research

Research topics include:

* actor-critic architecture
* actor-critic-scenery architecture
* adaptive methods that work with fewer (or no) parameters under a large number of conditions
* bug detection in software projects
* continuous learning
* combinations with logic-based frameworks (e.g., temporal-logic specifications, reward machines, and probabilistic argumentation).
* exploration in large Markov decision processes
* entity-based reinforcement learning
* [human feedback](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback)
* interaction between implicit and explicit learning in skill acquisition
* [intrinsic motivation](https://en.wikipedia.org/wiki/Intrinsic_motivation_(artificial_intelligence)) which differentiates information-seeking, curiosity-type behaviours from task-dependent goal-directed behaviours large-scale empirical evaluations
* large (or continuous) action spaces
* modular and hierarchical reinforcement learning
* multiagent/distributed reinforcement learning is a topic of interest. Applications are expanding.
* occupant-centric control
* optimization of computing resources
* [partial information](https://en.wikipedia.org/wiki/Partially_observable_Markov_decision_process) (e.g., using [predictive state representation](https://en.wikipedia.org/wiki/Predictive_state_representation))
* reward function based on maximising novel information
* sample-based planning (e.g., based on [Monte Carlo tree search](https://en.wikipedia.org/wiki/Monte_Carlo_tree_search)).
* securities trading
* [transfer learning](https://en.wikipedia.org/wiki/Transfer_learning)
* TD learning modeling [dopamine](https://en.wikipedia.org/wiki/Dopamine)-based learning in the brain. [Dopaminergic](https://en.wikipedia.org/wiki/Dopaminergic) projections from the [substantia nigra](https://en.wikipedia.org/wiki/Substantia_nigra) to the [basal ganglia](https://en.wikipedia.org/wiki/Basal_ganglia) function are the prediction error.
* value-function and policy search methods

## Comparison of key algorithms

The following table lists the key algorithms for learning a policy depending on several criteria:

* The algorithm can be on-policy (it performs policy updates using trajectories sampled via the current policy) or off-policy.
* The action space may be discrete (e.g. the action space could be "going up", "going left", "going right", "going down", "stay") or continuous (e.g. moving the arm with a given angle).
* The state space may be discrete (e.g. the agent could be in a cell in a grid) or continuous (e.g. the agent could be located at a given position in the plane).

| Algorithm | Description | Policy | Action space | State space | Operator |
| --- | --- | --- | --- | --- | --- |
| [Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method) | Every visit to Monte Carlo | Either | Discrete | Discrete | Sample-means of state-values or action-values |
| [TD learning](https://en.wikipedia.org/wiki/Temporal_difference_learning) | State–action–reward–state | Off-policy | Discrete | Discrete | State-value |
| [Q-learning](https://en.wikipedia.org/wiki/Q-learning) | State–action–reward–state | Off-policy | Discrete | Discrete | Action-value |
| [SARSA](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action) | State–action–reward–state–action | On-policy | Discrete | Discrete | Action-value |
| [DQN](https://en.wikipedia.org/wiki/Q-learning#Deep_Q-learning) | Deep Q Network | Off-policy | Discrete | Continuous | Action-value |
| DDPG | Deep Deterministic Policy Gradient | Off-policy | Continuous | Continuous | Action-value |
| A3C | Asynchronous Advantage Actor-Critic Algorithm | On-policy | Discrete | Continuous | Advantage (=action-value - state-value) |
| TRPO | Trust Region Policy Optimization | On-policy | Continuous or Discrete | Continuous | Advantage |
| [PPO](https://en.wikipedia.org/wiki/Proximal_Policy_Optimization) | Proximal Policy Optimization | On-policy | Continuous or Discrete | Continuous | Advantage |
| TD3 | Twin Delayed Deep Deterministic Policy Gradient | Off-policy | Continuous | Continuous | Action-value |
| SAC | Soft Actor-Critic | Off-policy | Continuous | Continuous | Advantage |
| [DSAC](https://en.wikipedia.org/wiki/Distributional_Soft_Actor_Critic) | Distributional Soft Actor Critic | Off-policy | Continuous | Continuous | Action-value distribution |

### Associative reinforcement learning

Associative reinforcement learning tasks combine facets of stochastic learning automata tasks and supervised learning pattern classification tasks. In associative reinforcement learning tasks, the learning system interacts in a closed loop with its environment.

### Deep reinforcement learning

This approach extends reinforcement learning by using a deep neural network and without explicitly designing the state space. The work on learning ATARI games by Google [DeepMind](https://en.wikipedia.org/wiki/DeepMind) increased attention to [deep reinforcement learning](https://en.wikipedia.org/wiki/Deep_reinforcement_learning) or [end-to-end reinforcement learning](https://en.wikipedia.org/wiki/End-to-end_reinforcement_learning).

### Adversarial deep reinforcement learning

Adversarial deep reinforcement learning is an active area of research in reinforcement learning focusing on vulnerabilities of learned policies. In this research area some studies initially showed that reinforcement learning policies are susceptible to imperceptible adversarial manipulations. While some methods have been proposed to overcome these susceptibilities, in the most recent studies it has been shown that these proposed solutions are far from providing an accurate representation of current vulnerabilities of deep reinforcement learning policies.

### Fuzzy reinforcement learning

By introducing [fuzzy inference](https://en.wikipedia.org/wiki/Fuzzy_control_system) in reinforcement learning, approximating the state-action value function with [fuzzy rules](https://en.wikipedia.org/wiki/Fuzzy_rule) in continuous space becomes possible. The IF - THEN form of fuzzy rules make this approach suitable for expressing the results in a form close to natural language. Extending FRL with Fuzzy Rule Interpolation allows the use of reduced size sparse fuzzy rule-bases to emphasize cardinal rules (most important state-action values).

### Inverse reinforcement learning

In inverse reinforcement learning (IRL), no reward function is given. Instead, the reward function is inferred given an observed behavior from an expert. The idea is to mimic observed behavior, which is often optimal or close to optimal. One popular IRL paradigm is named maximum entropy inverse reinforcement learning (MaxEnt IRL). MaxEnt IRL estimates the parameters of a linear model of the reward function by maximizing the entropy of the probability distribution of observed trajectories subject to constraints related to matching expected feature counts. Recently it has been shown that MaxEnt IRL is a particular case of a more general framework named random utility inverse reinforcement learning (RU-IRL). RU-IRL is based on [random utility theory](https://en.wikipedia.org/wiki/Random_utility_model) and Markov decision processes. While prior IRL approaches assume that the apparent random behavior of an observed agent is due to it following a random policy, RU-IRL assumes that the observed agent follows a deterministic policy but randomness in observed behavior is due to the fact that an observer only has partial access to the features the observed agent uses in decision making. The utility function is modeled as a random variable to account for the ignorance of the observer regarding the features the observed agent actually considers in its utility function.

### Multi-objective reinforcement learning

Multi-objective reinforcement learning (MORL) is a form of reinforcement learning concerned with conflicting alternatives. It is distinct from [multi-objective optimization](https://en.wikipedia.org/wiki/Multi-objective_optimization) in that it is concerned with agents acting in environments.

### Safe reinforcement learning

Safe reinforcement learning (SRL) can be defined as the process of learning policies that maximize the expectation of the return in problems in which it is important to ensure reasonable system performance and/or respect safety constraints during the learning and/or deployment processes. An alternative approach is risk-averse reinforcement learning, where instead of the *expected* return, a *risk-measure* of the return is optimized, such as the [conditional value at risk](https://en.wikipedia.org/wiki/Expected_shortfall) (CVaR). In addition to mitigating risk, the CVaR objective increases robustness to model uncertainties. However, CVaR optimization in risk-averse RL requires special care, to prevent gradient bias and blindness to success.

### Self-reinforcement learning

Self-reinforcement learning (or self-learning), is a learning paradigm which does not use the concept of immediate reward 

R

a

(
s
,

s
′

)

{\displaystyle R_{a}(s,s')}

 after transition from 

s

{\displaystyle s}

 to 

s
′

{\displaystyle s'}

 with action 

a

{\displaystyle a}

. It does not use an external reinforcement, it only uses the agent internal self-reinforcement. The internal self-reinforcement is provided by mechanism of feelings and emotions. In the learning process emotions are backpropagated by a mechanism of secondary reinforcement. The learning equation does not include the immediate reward, it only includes the state evaluation.

The self-reinforcement algorithm updates a memory matrix 

W
=
‖ ‖ 
w
(
a
,
s
)
‖ ‖ 

{\displaystyle W=\|w(a,s)\|}

 such that in each iteration executes the following machine learning routine:

1. In situation 

s

{\displaystyle s}

 perform action 

a

{\displaystyle a}

.
2. Receive a consequence situation 

s
′

{\displaystyle s'}

.
3. Compute state evaluation 

v
(

s
′

)

{\displaystyle v(s')}

 of how good is to be in the consequence situation 

s
′

{\displaystyle s'}

.
4. Update crossbar memory 

w
′

(
a
,
s
)
=
w
(
a
,
s
)
+
v
(

s
′

)

{\displaystyle w'(a,s)=w(a,s)+v(s')}

.

Initial conditions of the memory are received as input from the genetic environment. It is a system with only one input (situation), and only one output (action, or behavior).

Self-reinforcement (self-learning) was introduced in 1982 along with a neural network capable of self-reinforcement learning, named Crossbar Adaptive Array (CAA). The CAA computes, in a crossbar fashion, both decisions about actions and emotions (feelings) about consequence states. The system is driven by the interaction between cognition and emotion.

### Reinforcement Learning in Natural Language Processing

In recent years, reinforcement learning has become a significant concept in [natural language processing (NLP)](https://en.wikipedia.org/wiki/Natural_language_processing), where tasks are often sequential decision-making rather than static classification. Reinforcement learning is where an agent take actions in an environment to maximize the accumulation of rewards. This framework is best fit for many NLP tasks, including dialogue generation, text summarization, and machine translation, where the quality of the output depends on optimizing long-term or human-centered goals rather than the prediction of single correct label.

Early application of RL in NLP emerged in dialogue systems, where conversation was determined as a series of actions optimized for fluency and coherence. These early attempts, including policy gradient and sequence-level training techniques, laid a foundation for the broader application of reinforcement learning to other areas of NLP.

A major breakthrough happened with the introduction of [reinforcement learning from human feedback (RLHF)](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback), a method in which human feedback ratings are used to train a reward model that guides the RL agent. Unlike traditional rule-based or supervised systems, RLHF allows models to align their behavior with human judgments on complex and subjective tasks. This technique was initially used in the development of [InstructGPT](https://en.wikipedia.org/wiki/InstructGPT), an effective language model trained to follow human instructions and later in [ChatGPT](https://en.wikipedia.org/wiki/ChatGPT) which incorporates RLHF for improving output responses and ensuring safety.

More recently, researchers have explored the use of offline RL in NLP to improve dialogue systems without the need of live human interaction. These methods optimize for user engagement, coherence, and diversity based on past conversation logs and pre-trained reward models.

One example is DeepSeek-R1, which incorporates multi-stage training and cold-start data before RL. DeepSeek-R1 achieves performance comparable to OpenAI-o1-1217 on reasoning tasks. This model was trained via large-scale reinforcement learning (RL) without supervised fine-tuning (SFT) as a preliminary step.

## Statistical comparison of reinforcement learning algorithms

Efficient comparison of RL algorithms is essential for research, deployment and monitoring of RL systems. To compare different algorithms on a given environment, an agent can be trained for each algorithm. Since the performance is sensitive to implementation details, all algorithms should be implemented as closely as possible to each other. After the training is finished, the agents can be run on a sample of test episodes, and their scores (returns) can be compared. Since episodes are typically assumed to be [i.i.d](https://en.wikipedia.org/wiki/I.i.d), standard statistical tools can be used for hypothesis testing, such as [T-test](https://en.wikipedia.org/wiki/Student%27s_t-test) and [permutation test](https://en.wikipedia.org/wiki/Permutation_test). This requires to accumulate all the rewards within an episode into a single number—the episodic return. However, this causes a loss of information, as different time-steps are averaged together, possibly with different levels of noise. Whenever the noise level varies across the episode, the statistical power can be improved significantly, by weighting the rewards according to their estimated noise.

## Challenges and limitations

Despite significant advancements, reinforcement learning (RL) continues to face several challenges and limitations that hinder its widespread application in real-world scenarios.

### Sample inefficiency

RL algorithms often require a large number of interactions with the environment to learn effective policies, leading to high computational costs and time-intensive to train the agent. For instance, [OpenAI's](https://en.wikipedia.org/wiki/OpenAI) Dota-playing bot utilized thousands of years of simulated gameplay to achieve human-level performance. Techniques like experience replay and [curriculum learning](https://en.wikipedia.org/wiki/Curriculum_learning) have been proposed to deprive sample inefficiency, but these techniques add more complexity and are not always sufficient for real-world applications.

### Stability and convergence issues

Training RL models, particularly for [deep neural network-based models](https://en.wikipedia.org/wiki/Deep_learning), can be unstable and prone to divergence. A small change in the policy or environment can lead to extreme fluctuations in performance, making it difficult to achieve consistent results. This instability is further enhanced in the case of the continuous or high-dimensional action space, where the learning step becomes more complex and less predictable.

### Generalization and transferability

The RL agents trained in specific environments often struggle to generalize their learned policies to new, unseen scenarios. This is the major setback preventing the application of RL to dynamic real-world environments where adaptability is crucial. The challenge is to develop such algorithms that can transfer knowledge across tasks and environments without extensive retraining.

### Bias and reward function issues

Designing appropriate reward functions is critical in RL because poorly designed reward functions can lead to unintended behaviors. In addition, RL systems trained on biased data may perpetuate existing biases and lead to discriminatory or unfair outcomes. Both of these issues requires careful consideration of reward structures and data sources to ensure fairness and desired behaviors.

## See also

* [Active learning (machine learning)](https://en.wikipedia.org/wiki/Active_learning_(machine_learning))
* [Apprenticeship learning](https://en.wikipedia.org/wiki/Apprenticeship_learning)
* [Error-driven learning](https://en.wikipedia.org/wiki/Error-driven_learning)
* [Model-free (reinforcement learning)](https://en.wikipedia.org/wiki/Model-free_(reinforcement_learning))
* [Multi-agent reinforcement learning](https://en.wikipedia.org/wiki/Multi-agent_reinforcement_learning)
* [Optimal control](https://en.wikipedia.org/wiki/Optimal_control)
* [Q-learning](https://en.wikipedia.org/wiki/Q-learning)
* [Reinforcement learning from human feedback](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback)
* [State–action–reward–state–action](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action) (SARSA)
* [Temporal difference learning](https://en.wikipedia.org/wiki/Temporal_difference_learning)

## References

1. **^** [Kaelbling, Leslie P.](https://en.wikipedia.org/wiki/Leslie_P._Kaelbling); [Littman, Michael L.](https://en.wikipedia.org/wiki/Michael_L._Littman); [Moore, Andrew W.](https://en.wikipedia.org/w/index.php?title=Andrew_W._Moore&action=edit&redlink=1) (1996). ["Reinforcement Learning: A Survey"](http://webarchive.loc.gov/all/20011120234539/http://www.cs.washington.edu/research/jair/abstracts/kaelbling96a.html). *Journal of Artificial Intelligence Research*. **4**: 237–285. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[cs/9605103](https://arxiv.org/abs/cs/9605103). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1613/jair.301](https://doi.org/10.1613%2Fjair.301). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1708582](https://api.semanticscholar.org/CorpusID:1708582). Archived from [the original](http://www.cs.washington.edu/research/jair/abstracts/kaelbling96a.html) on 2001-11-20.
2. **^** van Otterlo, M.; Wiering, M. (2012). "Reinforcement Learning and Markov Decision Processes". *Reinforcement Learning*. Adaptation, Learning, and Optimization. Vol. 12. pp. 3–42. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-642-27645-3_1](https://doi.org/10.1007%2F978-3-642-27645-3_1). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-642-27644-6](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-27644-6).
3. ^   Li, Shengbo (2023). [*Reinforcement Learning for Sequential Decision and Optimal Control*](https://link.springer.com/book/10.1007/978-981-19-7784-8) (First ed.). Springer Verlag, Singapore. pp. 1–460. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-981-19-7784-8](https://doi.org/10.1007%2F978-981-19-7784-8). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-9-811-97783-1](https://en.wikipedia.org/wiki/Special:BookSources/978-9-811-97783-1). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [257928563](https://api.semanticscholar.org/CorpusID:257928563).`{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book)}}`:  CS1 maint: location missing publisher ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher))
4. **^** Russell, Stuart J.; Norvig, Peter (2010). *Artificial intelligence: a modern approach* (Third ed.). Upper Saddle River, New Jersey: [Prentice Hall](https://en.wikipedia.org/wiki/Prentice_Hall). pp. 830, 831. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-604259-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-604259-4).
5. **^** Lee, Daeyeol; Seo, Hyojung; Jung, Min Whan (21 July 2012). ["Neural Basis of Reinforcement Learning and Decision Making"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3490621). *Annual Review of Neuroscience*. **35** (1): 287–308. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1146/annurev-neuro-062111-150512](https://doi.org/10.1146%2Fannurev-neuro-062111-150512). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [3490621](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3490621). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [22462543](https://pubmed.ncbi.nlm.nih.gov/22462543).
6. **^** Salazar Duque, Edgar Mauricio; Giraldo, Juan S.; Vergara, Pedro P.; Nguyen, Phuong; Van Der Molen, Anne; Slootweg, Han (2022). ["Community energy storage operation via reinforcement learning with eligibility traces"](https://doi.org/10.1016%2Fj.epsr.2022.108515). *Electric Power Systems Research*. **212** 108515. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2022EPSR..21208515S](https://ui.adsabs.harvard.edu/abs/2022EPSR..21208515S). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.epsr.2022.108515](https://doi.org/10.1016%2Fj.epsr.2022.108515). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [250635151](https://api.semanticscholar.org/CorpusID:250635151).
7. **^** Xie, Zhaoming; Hung Yu Ling; Nam Hee Kim; Michiel van de Panne (2020). "ALLSTEPS: Curriculum-driven Learning of Stepping Stone Skills". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2005.04323](https://arxiv.org/abs/2005.04323) [[cs.GR](https://arxiv.org/archive/cs.GR)].
8. **^** Vergara, Pedro P.; Salazar, Mauricio; Giraldo, Juan S.; Palensky, Peter (2022). ["Optimal dispatch of PV inverters in unbalanced distribution systems using Reinforcement Learning"](https://doi.org/10.1016%2Fj.ijepes.2021.107628). *International Journal of Electrical Power & Energy Systems*. **136** 107628. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2022IJEPE.13607628V](https://ui.adsabs.harvard.edu/abs/2022IJEPE.13607628V). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.ijepes.2021.107628](https://doi.org/10.1016%2Fj.ijepes.2021.107628). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [244099841](https://api.semanticscholar.org/CorpusID:244099841).
9. **^** Sutton & Barto 2018, Chapter 11.
10. **^** Ren, Yangang; Jiang, Jianhua; Zhan, Guojian; Li, Shengbo Eben; Chen, Chen; Li, Keqiang; Duan, Jingliang (2026). "Self-Learned Intelligence for Integrated Decision and Control of Automated Vehicles at Signalized Intersections". *IEEE Transactions on Intelligent Transportation Systems*. **23** (12): 24145–24156. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2110.12359](https://arxiv.org/abs/2110.12359). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2022ITITr..2324145R](https://ui.adsabs.harvard.edu/abs/2022ITITr..2324145R). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TITS.2022.3196167](https://doi.org/10.1109%2FTITS.2022.3196167).
11. **^** [Gosavi, Abhijit](https://en.wikipedia.org/w/index.php?title=Abhijit_Gosavi&action=edit&redlink=1) (2003). [*Simulation-based Optimization: Parametric Optimization Techniques and Reinforcement*](https://www.springer.com/mathematics/applications/book/978-1-4020-7454-7). Operations Research/Computer Science Interfaces Series. Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4020-7454-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4020-7454-7).
12. ^   Burnetas, Apostolos N.; [Katehakis, Michael N.](https://en.wikipedia.org/wiki/Michael_N._Katehakis) (1997), "Optimal adaptive policies for Markov Decision Processes", *[Mathematics of Operations Research](https://en.wikipedia.org/wiki/Mathematics_of_Operations_Research)*, **22** (1): 222–255, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1287/moor.22.1.222](https://doi.org/10.1287%2Fmoor.22.1.222), [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [3690147](https://www.jstor.org/stable/3690147)
13. **^** Tokic, Michel; Palm, Günther (2011), ["Value-Difference Based Exploration: Adaptive Control Between Epsilon-Greedy and Softmax"](http://www.tokic.com/www/tokicm/publikationen/papers/KI2011.pdf) (PDF), *KI 2011: Advances in Artificial Intelligence*, Lecture Notes in Computer Science, vol. 7006, Springer, pp. 335–346, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-642-24455-1](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-24455-1)
14. ^    ["Reinforcement learning: An introduction"](https://web.archive.org/web/20170712170739/http://people.inf.elte.hu/lorincz/Files/RL_2006/SuttonBook.pdf) (PDF). Archived from [the original](http://people.inf.elte.hu/lorincz/Files/RL_2006/SuttonBook.pdf) (PDF) on 2017-07-12. Retrieved 2017-07-23.
15. **^** Singh, Satinder P.; Sutton, Richard S. (1996-03-01). ["Reinforcement learning with replacing eligibility traces"](https://link.springer.com/article/10.1007/BF00114726). *Machine Learning*. **22** (1): 123–158. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF00114726](https://doi.org/10.1007%2FBF00114726). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1573-0565](https://search.worldcat.org/issn/1573-0565).
16. **^** [Sutton, Richard S.](https://en.wikipedia.org/wiki/Richard_S._Sutton) (1984). [*Temporal Credit Assignment in Reinforcement Learning*](https://web.archive.org/web/20170330002227/http://incompleteideas.net/sutton/publications.html#PhDthesis) (PhD thesis). University of Massachusetts, Amherst, MA. Archived from [the original](http://incompleteideas.net/sutton/publications.html#PhDthesis) on 2017-03-30. Retrieved 2017-03-29.
17. **^** Sutton & Barto 2018, [§6. Temporal-Difference Learning](http://incompleteideas.net/sutton/book/ebook/node60.html).
18. **^** [Bradtke, Steven J.](https://en.wikipedia.org/w/index.php?title=Steven_J._Bradtke&action=edit&redlink=1); [Barto, Andrew G.](https://en.wikipedia.org/wiki/Andrew_G._Barto) (1996). "Learning to predict by the method of temporal differences". *Machine Learning*. **22**: 33–57. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.143.857](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.143.857). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1023/A:1018056104778](https://doi.org/10.1023%2FA%3A1018056104778). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [20327856](https://api.semanticscholar.org/CorpusID:20327856).
19. **^** [Watkins, Christopher J.C.H.](https://en.wikipedia.org/w/index.php?title=Christopher_J.C.H._Watkins&action=edit&redlink=1) (1989). [*Learning from Delayed Rewards*](http://www.cs.rhul.ac.uk/~chrisw/new_thesis.pdf) (PDF) (PhD thesis). King's College, Cambridge, UK.
20. **^** Matzliach, Barouch; Ben-Gal, Irad; Kagan, Evgeny (2022). ["Detection of Static and Mobile Targets by an Autonomous Agent with Deep Q-Learning Abilities"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9407070). *Entropy*. **24** (8): 1168. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2022Entrp..24.1168M](https://ui.adsabs.harvard.edu/abs/2022Entrp..24.1168M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3390/e24081168](https://doi.org/10.3390%2Fe24081168). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [9407070](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9407070). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [36010832](https://pubmed.ncbi.nlm.nih.gov/36010832).
21. **^** [Williams, Ronald J.](https://en.wikipedia.org/wiki/Ronald_J._Williams) (1987). "A class of gradient-estimating algorithms for reinforcement learning in neural networks". *Proceedings of the IEEE First International Conference on Neural Networks*. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.129.8871](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.129.8871).
22. **^** [Peters, Jan](https://en.wikipedia.org/wiki/Jan_Peters_(computer_scientist)); [Vijayakumar, Sethu](https://en.wikipedia.org/wiki/Sethu_Vijayakumar); [Schaal, Stefan](https://en.wikipedia.org/wiki/Stefan_Schaal) (2003). [*Reinforcement Learning for Humanoid Robotics*](https://web.archive.org/web/20130512223911/http://www-clmc.usc.edu/publications/p/peters-ICHR2003.pdf) (PDF). IEEE-RAS International Conference on Humanoid Robots. Archived from [the original](http://www-clmc.usc.edu/publications/p/peters-ICHR2003.pdf) (PDF) on 2013-05-12. Retrieved 2006-05-08.
23. **^** Juliani, Arthur (2016-12-17). ["Simple Reinforcement Learning with Tensorflow Part 8: Asynchronous Actor-Critic Agents (A3C)"](https://medium.com/emergent-future/simple-reinforcement-learning-with-tensorflow-part-8-asynchronous-actor-critic-agents-a3c-c88f72a5e9f2). *Medium*. Retrieved 2018-02-22.
24. **^** [Deisenroth, Marc Peter](https://en.wikipedia.org/w/index.php?title=Marc_Peter_Deisenroth&action=edit&redlink=1); Neumann, Gerhard; [Peters, Jan](https://en.wikipedia.org/wiki/Jan_Peters_(computer_scientist)) (2013). [*A Survey on Policy Search for Robotics*](http://eprints.lincoln.ac.uk/28029/1/PolicySearchReview.pdf) (PDF). Foundations and Trends in Robotics. Vol. 2. NOW Publishers. pp. 1–142. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1561/2300000021](https://doi.org/10.1561%2F2300000021). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[10044/1/12051](https://hdl.handle.net/10044%2F1%2F12051).
25. **^** Sutton, Richard (1990). "Integrated Architectures for Learning, Planning and Reacting based on Dynamic Programming". *Machine Learning: Proceedings of the Seventh International Workshop*.
26. **^** Lin, Long-Ji (1992). ["Self-improving reactive agents based on reinforcement learning, planning and teaching"](https://link.springer.com/content/pdf/10.1007/BF00992699.pdf) (PDF). *Machine Learning*. Vol. 8. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF00992699](https://doi.org/10.1007%2FBF00992699).
27. **^** Zou, Lan (2023-01-01), Zou, Lan (ed.), ["Chapter 7 - Meta-reinforcement learning"](https://www.sciencedirect.com/science/article/pii/B9780323899314000110), *Meta-Learning*, Academic Press, pp. 267–297, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/b978-0-323-89931-4.00011-0](https://doi.org/10.1016%2Fb978-0-323-89931-4.00011-0), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-323-89931-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-323-89931-4), retrieved 2023-11-08`{{[citation](https://en.wikipedia.org/wiki/Template:Citation)}}`:  CS1 maint: work parameter with ISBN ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_work_parameter_with_ISBN))
28. **^** van Hasselt, Hado; Hessel, Matteo; Aslanides, John (2019). ["When to use parametric models in reinforcement learning?"](https://proceedings.neurips.cc/paper/2019/file/1b742ae215adf18b75449c6e272fd92d-Paper.pdf) (PDF). *Advances in Neural Information Processing Systems*. Vol. 32.
29. **^** Khuat, Thanh Tung; Bassett, Robert; Otte, Ellen; Grevis-James, Alistair; Gabrys, Bogdan (2024-03-01). ["Applications of machine learning in antibody discovery, process development, manufacturing and formulation: Current trends, challenges, and opportunities"](https://www.sciencedirect.com/science/article/pii/S0098135424000036). *Computers & Chemical Engineering*. **182**: 108585. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.compchemeng.2024.108585](https://doi.org/10.1016%2Fj.compchemeng.2024.108585). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0098-1354](https://search.worldcat.org/issn/0098-1354).`{{[cite journal](https://en.wikipedia.org/wiki/Template:Cite_journal)}}`:  CS1 maint: article number as page number ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_article_number_as_page_number))
30. **^** Grondman, Ivo; Vaandrager, Maarten; Busoniu, Lucian; Babuska, Robert; Schuitema, Erik (2012-06-01). ["Efficient Model Learning Methods for Actor–Critic Control"](https://dl.acm.org/doi/10.1109/TSMCB.2011.2170565). *IEEE Transactions on Systems, Man, and Cybernetics - Part B: Cybernetics*. **42** (3): 591–602. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2012ITSMC..42..591G](https://ui.adsabs.harvard.edu/abs/2012ITSMC..42..591G). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TSMCB.2011.2170565](https://doi.org/10.1109%2FTSMCB.2011.2170565). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1083-4419](https://search.worldcat.org/issn/1083-4419). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [22156998](https://pubmed.ncbi.nlm.nih.gov/22156998).
31. **^** ["On the Use of Reinforcement Learning for Testing Game Mechanics: ACM - Computers in Entertainment"](https://cie.acm.org/articles/use-reinforcements-learning-testing-game-mechanics/). *cie.acm.org*. Retrieved 2018-11-27.
32. **^** Li, Xiao; Vasile, Cristian-Ioan; Belta, Calin (2017). ["Reinforcement Learning with Temporal Logic Rewards"](https://dl.acm.org/doi/10.1109/IROS.2017.8206234). *2017 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)*. pp. 3834–3839. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/IROS.2017.8206234](https://doi.org/10.1109%2FIROS.2017.8206234).
33. **^** Toro Icarte, Rodrigo; Klassen, Toryn Q.; Valenzano, Richard; McIlraith, Sheila A. (2022). ["Reward Machines: Exploiting Reward Function Structure in Reinforcement Learning"](https://dl.acm.org/doi/10.1613/jair.1.12440). *Journal of Artificial Intelligence Research*. **73**: 173–208. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2010.03950](https://arxiv.org/abs/2010.03950). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1613/jair.1.12440](https://doi.org/10.1613%2Fjair.1.12440).
34. **^** Riveret, Régis; Gao, Yang; Governatori, Guido; Rotolo, Antonino; Pitt, Jeremy; Sartor, Giovanni (2019). ["A probabilistic argumentation framework for reinforcement learning agents"](https://link.springer.com/article/10.1007/s10458-019-09404-2). *Autonomous Agents and Multi-Agent Systems*. **33** (1–2): 216–274. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s10458-019-09404-2](https://doi.org/10.1007%2Fs10458-019-09404-2).
35. **^** Haramati, Dan; Daniel, Tal; Tamar, Aviv (2024). "Entity-Centric Reinforcement Learning for Object Manipulation from Pixels". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2404.01220](https://arxiv.org/abs/2404.01220) [[cs.RO](https://arxiv.org/archive/cs.RO)].
36. **^** Thompson, Isaac Symes; Caron, Alberto; Hicks, Chris; Mavroudis, Vasilios (2024-11-07). "Entity-based Reinforcement Learning for Autonomous Cyber Defence". *Proceedings of the Workshop on Autonomous Cybersecurity (AutonomousCyber '24)*. ACM. pp. 56–67. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2410.17647](https://arxiv.org/abs/2410.17647). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3689933.3690835](https://doi.org/10.1145%2F3689933.3690835).
37. **^** Winter, Clemens (2023-04-14). ["Entity-Based Reinforcement Learning"](https://clemenswinter.com/2023/04/14/entity-based-reinforcement-learning/). *Clemens Winter's Blog*.
38. **^** Yamagata, Taku; McConville, Ryan; Santos-Rodriguez, Raul (2021-11-16). "Reinforcement Learning with Feedback from Multiple Humans with Diverse Skills". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2111.08596](https://arxiv.org/abs/2111.08596) [[cs.LG](https://arxiv.org/archive/cs.LG)].
39. **^** Kulkarni, Tejas D.; Narasimhan, Karthik R.; Saeedi, Ardavan; Tenenbaum, Joshua B. (2016). ["Hierarchical Deep Reinforcement Learning: Integrating Temporal Abstraction and Intrinsic Motivation"](http://dl.acm.org/citation.cfm?id=3157382.3157509). *Proceedings of the 30th International Conference on Neural Information Processing Systems*. NIPS'16. USA: Curran Associates Inc.: 3682–3690. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1604.06057](https://arxiv.org/abs/1604.06057). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2016arXiv160406057K](https://ui.adsabs.harvard.edu/abs/2016arXiv160406057K). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-5108-3881-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5108-3881-9).
40. **^** ["Reinforcement Learning / Successes of Reinforcement Learning"](http://umichrl.pbworks.com/Successes-of-Reinforcement-Learning/). *umichrl.pbworks.com*. Retrieved 2017-08-06.
41. **^** Dey, Somdip; Singh, Amit Kumar; Wang, Xiaohang; McDonald-Maier, Klaus (March 2020). ["User Interaction Aware Reinforcement Learning for Power and Thermal Efficiency of CPU-GPU Mobile MPSoCs"](https://ieeexplore.ieee.org/document/9116294). [*2020 Design, Automation & Test in Europe Conference & Exhibition (DATE)*](http://repository.essex.ac.uk/27546/1/User%20Interaction%20Aware%20Reinforcement%20Learning.pdf) (PDF). pp. 1728–1733. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.23919/DATE48585.2020.9116294](https://doi.org/10.23919%2FDATE48585.2020.9116294). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-9819263-4-7](https://en.wikipedia.org/wiki/Special:BookSources/978-3-9819263-4-7). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [219858480](https://api.semanticscholar.org/CorpusID:219858480).
42. **^** Quested, Tony. ["Smartphones get smarter with Essex innovation"](https://www.businessweekly.co.uk/news/academia-research/smartphones-get-smarter-essex-innovation). *Business Weekly*. Retrieved 2021-06-17.
43. **^** Williams, Rhiannon (2020-07-21). ["Future smartphones 'will prolong their own battery life by monitoring owners' behaviour'"](https://inews.co.uk/news/technology/future-smartphones-prolong-battery-life-monitoring-behaviour-558689). *[i](https://en.wikipedia.org/wiki/I_(British_newspaper))*. Retrieved 2021-06-17.
44. **^** Kaplan, F.; Oudeyer, P. (2004). "Maximizing Learning Progress: An Internal Reward System for Development". In Iida, F.; Pfeifer, R.; Steels, L.; Kuniyoshi, Y. (eds.). *Embodied Artificial Intelligence*. Lecture Notes in Computer Science. Vol. 3139. Berlin; Heidelberg: Springer. pp. 259–270. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-540-27833-7_19](https://doi.org/10.1007%2F978-3-540-27833-7_19). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-22484-6](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-22484-6). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [9781221](https://api.semanticscholar.org/CorpusID:9781221).
45. **^** Klyubin, A.; Polani, D.; Nehaniv, C. (2008). ["Keep your options open: an information-based driving principle for sensorimotor systems"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2607028). *PLOS ONE*. **3** (12) e4018. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2008PLoSO...3.4018K](https://ui.adsabs.harvard.edu/abs/2008PLoSO...3.4018K). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1371/journal.pone.0004018](https://doi.org/10.1371%2Fjournal.pone.0004018). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [2607028](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2607028). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [19107219](https://pubmed.ncbi.nlm.nih.gov/19107219).
46. **^** Barto, A. G. (2013). "Intrinsic motivation and reinforcement learning". [*Intrinsically Motivated Learning in Natural and Artificial Systems*](https://people.cs.umass.edu/~barto/IMCleVer-chapter-totypeset2.pdf) (PDF). Berlin; Heidelberg: Springer. pp. 17–47.
47. **^** Dabérius, Kevin; Granat, Elvin; Karlsson, Patrik (2020). "Deep Execution - Value and Policy Based Reinforcement Learning for Trading and Beating Market Benchmarks". *The Journal of Machine Learning in Finance*. **1**. [SSRN](https://en.wikipedia.org/wiki/SSRN_(identifier)) [3374766](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3374766).
48. **^** George Karimpanal, Thommen; Bouffanais, Roland (2019). "Self-organizing maps for storage and transfer of knowledge in reinforcement learning". *Adaptive Behavior*. **27** (2): 111–126. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1811.08318](https://arxiv.org/abs/1811.08318). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1177/1059712318818568](https://doi.org/10.1177%2F1059712318818568). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1059-7123](https://search.worldcat.org/issn/1059-7123). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [53774629](https://api.semanticscholar.org/CorpusID:53774629).
49. **^** cf. Sutton & Barto 2018, Section 5.4, p. 100
50. **^** J Duan; Y Guan; S Li (2021). "Distributional Soft Actor-Critic: Off-policy reinforcement learning for addressing value estimation errors". *IEEE Transactions on Neural Networks and Learning Systems*. **33** (11): 6584–6598. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2001.02811](https://arxiv.org/abs/2001.02811). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TNNLS.2021.3082568](https://doi.org/10.1109%2FTNNLS.2021.3082568). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [34101599](https://pubmed.ncbi.nlm.nih.gov/34101599). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [211259373](https://api.semanticscholar.org/CorpusID:211259373).
51. **^** Y Ren; J Duan; S Li (2020). "Improving Generalization of Reinforcement Learning with Minimax Distributional Soft Actor-Critic". *2020 IEEE 23rd International Conference on Intelligent Transportation Systems (ITSC)*. pp. 1–6. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2002.05502](https://arxiv.org/abs/2002.05502). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/ITSC45102.2020.9294300](https://doi.org/10.1109%2FITSC45102.2020.9294300). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-7281-4149-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-7281-4149-7). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [211096594](https://api.semanticscholar.org/CorpusID:211096594).
52. **^** Duan, J; Wang, W; Xiao, L (2025). "Distributional Soft Actor-Critic with Three Refinements". *IEEE Transactions on Pattern Analysis and Machine Intelligence*. **PP** (5): 3935–3946. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2310.05858](https://arxiv.org/abs/2310.05858). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2025ITPAM..47.3935D](https://ui.adsabs.harvard.edu/abs/2025ITPAM..47.3935D). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TPAMI.2025.3537087](https://doi.org/10.1109%2FTPAMI.2025.3537087). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [40031258](https://pubmed.ncbi.nlm.nih.gov/40031258).
53. **^** Soucek, Branko (6 May 1992). *Dynamic, Genetic and Chaotic Programming: The Sixth-Generation Computer Technology Series*. John Wiley & Sons, Inc. p. 38. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-471-55717-X](https://en.wikipedia.org/wiki/Special:BookSources/0-471-55717-X).
54. **^** Francois-Lavet, Vincent; et al. (2018). "An Introduction to Deep Reinforcement Learning". *Foundations and Trends in Machine Learning*. **11** (3–4): 219–354. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1811.12560](https://arxiv.org/abs/1811.12560). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2018arXiv181112560F](https://ui.adsabs.harvard.edu/abs/2018arXiv181112560F). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1561/2200000071](https://doi.org/10.1561%2F2200000071). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [54434537](https://api.semanticscholar.org/CorpusID:54434537).
55. **^** Mnih, Volodymyr; et al. (2015). "Human-level control through deep reinforcement learning". *Nature*. **518** (7540): 529–533. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2015Natur.518..529M](https://ui.adsabs.harvard.edu/abs/2015Natur.518..529M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/nature14236](https://doi.org/10.1038%2Fnature14236). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [25719670](https://pubmed.ncbi.nlm.nih.gov/25719670). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [205242740](https://api.semanticscholar.org/CorpusID:205242740).
56. **^** Goodfellow, Ian; Shlens, Jonathan; Szegedy, Christian (2015). "Explaining and Harnessing Adversarial Examples". *International Conference on Learning Representations*. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1412.6572](https://arxiv.org/abs/1412.6572).
57. **^** Behzadan, Vahid; Munir, Arslan (2017). "Vulnerability of Deep Reinforcement Learning to Policy Induction Attacks". *Machine Learning and Data Mining in Pattern Recognition*. Lecture Notes in Computer Science. Vol. 10358. pp. 262–275. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1701.04143](https://arxiv.org/abs/1701.04143). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-319-62416-7_19](https://doi.org/10.1007%2F978-3-319-62416-7_19). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-319-62415-0](https://en.wikipedia.org/wiki/Special:BookSources/978-3-319-62415-0). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1562290](https://api.semanticscholar.org/CorpusID:1562290).
58. **^** Huang, Sandy; Papernot, Nicolas; Goodfellow, Ian; Duan, Yan; Abbeel, Pieter (2017-02-07). *Adversarial Attacks on Neural Network Policies*. [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [1106256905](https://search.worldcat.org/oclc/1106256905).
59. **^** Korkmaz, Ezgi (2022). ["Deep Reinforcement Learning Policies Learn Shared Adversarial Features Across MDPs"](https://doi.org/10.1609%2Faaai.v36i7.20684). *Thirty-Sixth AAAI Conference on Artificial Intelligence (AAAI-22)*. **36** (7): 7229–7238. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2112.09025](https://arxiv.org/abs/2112.09025). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1609/aaai.v36i7.20684](https://doi.org/10.1609%2Faaai.v36i7.20684). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [245219157](https://api.semanticscholar.org/CorpusID:245219157).
60. **^** Berenji, H.R. (1994). "Fuzzy Q-learning: A new approach for fuzzy dynamic programming". *Proceedings of 1994 IEEE 3rd International Fuzzy Systems Conference*. Orlando, FL, USA: IEEE. pp. 486–491. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/FUZZY.1994.343737](https://doi.org/10.1109%2FFUZZY.1994.343737). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-7803-1896-X](https://en.wikipedia.org/wiki/Special:BookSources/0-7803-1896-X). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [56694947](https://api.semanticscholar.org/CorpusID:56694947).
61. **^** Vincze, David (2017). ["Fuzzy rule interpolation and reinforcement learning"](http://users.iit.uni-miskolc.hu/~vinczed/research/vinczed_sami2017_author_draft.pdf) (PDF). *2017 IEEE 15th International Symposium on Applied Machine Intelligence and Informatics (SAMI)*. IEEE. pp. 173–178. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SAMI.2017.7880298](https://doi.org/10.1109%2FSAMI.2017.7880298). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-5090-5655-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5090-5655-2). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [17590120](https://api.semanticscholar.org/CorpusID:17590120).
62. **^** Ng, A. Y.; Russell, S. J. (2000). ["Algorithms for Inverse Reinforcement Learning"](https://ai.stanford.edu/~ang/papers/icml00-irl.pdf) (PDF). *Proceeding ICML '00 Proceedings of the Seventeenth International Conference on Machine Learning*. Morgan Kaufmann Publishers. pp. 663–670. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1-55860-707-2](https://en.wikipedia.org/wiki/Special:BookSources/1-55860-707-2).
63. **^** Ziebart, Brian D.; Maas, Andrew; Bagnell, J. Andrew; Dey, Anind K. (2008-07-13). ["Maximum entropy inverse reinforcement learning"](https://dl.acm.org/doi/10.5555/1620270.1620297). *Proceedings of the 23rd National Conference on Artificial Intelligence - Volume 3*. AAAI'08. Chicago, Illinois: AAAI Press: 1433–1438. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-57735-368-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-57735-368-3). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [336219](https://api.semanticscholar.org/CorpusID:336219).
64. **^** Pitombeira-Neto, Anselmo R.; Santos, Helano P.; Coelho da Silva, Ticiana L.; de Macedo, José Antonio F. (March 2024). "Trajectory modeling via random utility inverse reinforcement learning". *Information Sciences*. **660** 120128. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2105.12092](https://arxiv.org/abs/2105.12092). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.ins.2024.120128](https://doi.org/10.1016%2Fj.ins.2024.120128). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0020-0255](https://search.worldcat.org/issn/0020-0255). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [235187141](https://api.semanticscholar.org/CorpusID:235187141).
65. **^** Hayes C, Radulescu R, Bargiacchi E, et al. (2022). ["A practical guide to multi-objective reinforcement learning and planning"](https://doi.org/10.1007%2Fs10458-022-09552-y). *Autonomous Agents and Multi-Agent Systems*. **36** 26. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2103.09568](https://arxiv.org/abs/2103.09568). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s10458-022-09552-y](https://doi.org/10.1007%2Fs10458-022-09552-y). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [254235920](https://api.semanticscholar.org/CorpusID:254235920).,
66. **^** Tzeng, Gwo-Hshiung; Huang, Jih-Jeng (2011). *Multiple Attribute Decision Making: Methods and Applications* (1st ed.). CRC Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4398-6157-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4398-6157-8).
67. **^** Gu, Shangding; Yang, Long; Du, Yali; Chen, Guang; Walter, Florian; Wang, Jun; Knoll, Alois (10 September 2024). ["A review of safe reinforcement learning: Methods, theories and applications"](https://kclpure.kcl.ac.uk/portal/files/300373453/A_Review_of_Safe_Reinforcement_Learning_Methods_Theories_and_Applications_2_.pdf) (PDF). *IEEE Transactions on Pattern Analysis and Machine Intelligence*. **46** (12): 11216–11235. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2024ITPAM..4611216G](https://ui.adsabs.harvard.edu/abs/2024ITPAM..4611216G). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TPAMI.2024.3457538](https://doi.org/10.1109%2FTPAMI.2024.3457538). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [39255180](https://pubmed.ncbi.nlm.nih.gov/39255180).
68. **^** García, Javier; Fernández, Fernando (1 January 2015). ["A comprehensive survey on safe reinforcement learning"](https://jmlr.org/papers/volume16/garcia15a/garcia15a.pdf) (PDF). *The Journal of Machine Learning Research*. **16** (1): 1437–1480.
69. **^** Dabney, Will; Ostrovski, Georg; Silver, David; Munos, Remi (2018-07-03). ["Implicit Quantile Networks for Distributional Reinforcement Learning"](https://proceedings.mlr.press/v80/dabney18a.html). *Proceedings of the 35th International Conference on Machine Learning*. PMLR: 1096–1105. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1806.06923](https://arxiv.org/abs/1806.06923).
70. **^** Chow, Yinlam; Tamar, Aviv; Mannor, Shie; Pavone, Marco (2015). ["Risk-Sensitive and Robust Decision-Making: a CVaR Optimization Approach"](https://proceedings.neurips.cc/paper/2015/hash/64223ccf70bbb65a3a4aceac37e21016-Abstract.html). *Advances in Neural Information Processing Systems*. **28**. Curran Associates, Inc. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1506.02188](https://arxiv.org/abs/1506.02188).
71. **^** ["Train Hard, Fight Easy: Robust Meta Reinforcement Learning"](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=LnwyFkkAAAAJ&citation_for_view=LnwyFkkAAAAJ:eQOLeE2rZwMC). *scholar.google.com*. Retrieved 2024-06-21.
72. **^** Tamar, Aviv; Glassner, Yonatan; Mannor, Shie (2015-02-21). ["Optimizing the CVaR via Sampling"](https://ojs.aaai.org/index.php/AAAI/article/view/9561). *Proceedings of the AAAI Conference on Artificial Intelligence*. **29** (1). [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1404.3862](https://arxiv.org/abs/1404.3862). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1609/aaai.v29i1.9561](https://doi.org/10.1609%2Faaai.v29i1.9561). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2374-3468](https://search.worldcat.org/issn/2374-3468).
73. **^** Greenberg, Ido; Chow, Yinlam; Ghavamzadeh, Mohammad; Mannor, Shie (2022-12-06). ["Efficient Risk-Averse Reinforcement Learning"](https://proceedings.neurips.cc/paper_files/paper/2022/hash/d2511dfb731fa336739782ba825cd98c-Abstract-Conference.html). *Advances in Neural Information Processing Systems*. **35**: 32639–32652. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2205.05138](https://arxiv.org/abs/2205.05138).
74. **^** Bozinovski, S. (1982). "A self-learning system using secondary reinforcement". In Trappl, Robert (ed.). Cybernetics and Systems Research: Proceedings of the Sixth European Meeting on Cybernetics and Systems Research. North-Holland. pp. 397–402. ISBN 978-0-444-86488-8
75. **^** Bozinovski S. (1995) "Neuro genetic agents and structural theory of self-reinforcement learning systems". CMPSCI Technical Report 95-107, University of Massachusetts at Amherst [[1]](https://web.cs.umass.edu/publication/docs/1995/UM-CS-1995-107.pdf)
76. **^** Bozinovski, S. (2014) "Modeling mechanisms of cognition-emotion interaction in artificial neural networks, since 1981." Procedia Computer Science p. 255–263
77. **^** ["An API for reinforcement learning"](https://gymnasium.farama.org/). January 22, 2025. Retrieved January 22, 2025.
78. **^** DeepSeek-AI; et al. (January 22, 2025). ["DeepSeek-R1 incentivizes reasoning in LLMS through reinforcement learning"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12443585). *Nature*. **645** (8081): 633–638. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2501.12948](https://arxiv.org/abs/2501.12948). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2025Natur.645..633G](https://ui.adsabs.harvard.edu/abs/2025Natur.645..633G). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41586-025-09422-z](https://doi.org/10.1038%2Fs41586-025-09422-z). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [12443585](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12443585). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [40962978](https://pubmed.ncbi.nlm.nih.gov/40962978).
79. **^** Engstrom, Logan; Ilyas, Andrew; Santurkar, Shibani; Tsipras, Dimitris; Janoos, Firdaus; Rudolph, Larry; Madry, Aleksander (2019-09-25). ["Implementation Matters in Deep RL: A Case Study on PPO and TRPO"](https://openreview.net/forum?id=r1etN1rtPB). *ICLR*.
80. **^** Colas, Cédric (2019-03-06). ["Distributional Soft Actor-Critic with Three Refinements"](https://openreview.net/forum?id=ryx0N3IaIV). *IEEE Transactions on Pattern Analysis and Machine Intelligence*. **47** (5): 3935–3946. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1904.06979](https://arxiv.org/abs/1904.06979). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2025ITPAM..47.3935D](https://ui.adsabs.harvard.edu/abs/2025ITPAM..47.3935D). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TPAMI.2025.3537087](https://doi.org/10.1109%2FTPAMI.2025.3537087). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [40031258](https://pubmed.ncbi.nlm.nih.gov/40031258).
81. **^** Greenberg, Ido; Mannor, Shie (2021-07-01). ["Reward Machines: Exploiting Reward Function Structure in Reinforcement Learning"](https://proceedings.mlr.press/v139/greenberg21a.html). *Journal of Artificial Intelligence Research*. **73**. PMLR: 3842–3853. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2010.11660](https://arxiv.org/abs/2010.11660). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1613/jair.1.12440](https://doi.org/10.1613%2Fjair.1.12440).

## Further reading

* Annaswamy, Anuradha M. (3 May 2023). ["Adaptive Control and Intersections with Reinforcement Learning"](https://doi.org/10.1146%2Fannurev-control-062922-090153). *Annual Review of Control, Robotics, and Autonomous Systems*. **6** (1): 65–93. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1146/annurev-control-062922-090153](https://doi.org/10.1146%2Fannurev-control-062922-090153). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2573-5144](https://search.worldcat.org/issn/2573-5144). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [255702873](https://api.semanticscholar.org/CorpusID:255702873).
* [Auer, Peter](https://en.wikipedia.org/wiki/Peter_Auer); Jaksch, Thomas; Ortner, Ronald (2010). ["Near-optimal regret bounds for reinforcement learning"](http://jmlr.csail.mit.edu/papers/v11/jaksch10a.html). *Journal of Machine Learning Research*. **11**: 1563–1600.
* Bertsekas, Dimitri P. (2023) [2019]. [*Reinforcement Learning and Optimal Control*](http://www.mit.edu/~dimitrib/RLbook.html) (1st ed.). Athena Scientific. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-886-52939-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-886-52939-7).
* Busoniu, Lucian; Babuska, Robert; [De Schutter, Bart](https://en.wikipedia.org/wiki/Bart_De_Schutter); Ernst, Damien (2010). [*Reinforcement Learning and Dynamic Programming using Function Approximators*](http://www.dcsc.tudelft.nl/rlbook/). Taylor & Francis CRC Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4398-2108-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4398-2108-4).
* François-Lavet, Vincent; Henderson, Peter; Islam, Riashat; Bellemare, Marc G.; Pineau, Joelle (2018). "An Introduction to Deep Reinforcement Learning". *Foundations and Trends in Machine Learning*. **11** (3–4): 219–354. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1811.12560](https://arxiv.org/abs/1811.12560). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2018arXiv181112560F](https://ui.adsabs.harvard.edu/abs/2018arXiv181112560F). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1561/2200000071](https://doi.org/10.1561%2F2200000071). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [54434537](https://api.semanticscholar.org/CorpusID:54434537).
* Li, Shengbo Eben (2023). [*Reinforcement Learning for Sequential Decision and Optimal Control*](https://link.springer.com/book/10.1007/978-981-19-7784-8) (1st ed.). Springer Verlag, Singapore. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-981-19-7784-8](https://doi.org/10.1007%2F978-981-19-7784-8). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-9-811-97783-1](https://en.wikipedia.org/wiki/Special:BookSources/978-9-811-97783-1).
* Powell, Warren (2011). [*Approximate dynamic programming: solving the curses of dimensionality*](https://web.archive.org/web/20160731230325/http://castlelab.princeton.edu/adp.htm). Wiley-Interscience. Archived from [the original](http://www.castlelab.princeton.edu/adp.htm) on 2016-07-31. Retrieved 2010-09-08.
* [Sutton, Richard S.](https://en.wikipedia.org/wiki/Richard_S._Sutton) (1988). ["Learning to predict by the method of temporal differences"](https://doi.org/10.1007%2FBF00115009). *Machine Learning*. **3** (1): 9–44. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1988MLear...3....9S](https://ui.adsabs.harvard.edu/abs/1988MLear...3....9S). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF00115009](https://doi.org/10.1007%2FBF00115009).
* [Sutton, Richard S.](https://en.wikipedia.org/wiki/Richard_S._Sutton); [Barto, Andrew G.](https://en.wikipedia.org/wiki/Andrew_Barto) (2018) [1998]. [*Reinforcement Learning: An Introduction*](http://incompleteideas.net/sutton/book/the-book.html) (2nd ed.). MIT Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-03924-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-03924-6).
* Szita, Istvan; Szepesvari, Csaba (2010). ["Model-based Reinforcement Learning with Nearly Tight Exploration Complexity Bounds"](https://web.archive.org/web/20100714095438/http://www.icml2010.org/papers/546.pdf) (PDF). *ICML 2010*. Omnipress. pp. 1031–1038. Archived from [the original](http://www.icml2010.org/papers/546.pdf) (PDF) on 2010-07-14.

## External links

* [Dissecting Reinforcement Learning](https://mpatacchiola.github.io/blog/2016/12/09/dissecting-reinforcement-learning.html) Series of blog post on reinforcement learning with Python code
* [A (Long) Peek into Reinforcement Learning](https://lilianweng.github.io/posts/2018-02-19-rl-overview/)
* [QSMM – reinforcement learning through adaptive probabilistic assembler programs](http://qsmm.org)
 
NewPP limit report
Parsed by mw‐web.codfw.main‐6bd5cbd568‐w2ftv
Cached time: 20260421190744
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 1.190 seconds
Real time usage: 1.500 seconds
Preprocessor visited node count: 6391/1000000
Revision size: 75452/2097152 bytes
Post‐expand include size: 331894/2097152 bytes
Template argument size: 4332/2097152 bytes
Highest expansion depth: 16/100
Expensive parser function count: 8/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 355463/5000000 bytes
Lua time usage: 0.727/10.000 seconds
Lua memory usage: 9270020/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00% 1051.558      1 -total
 52.35%  550.516      1 Template:Reflist
 30.45%  320.168     39 Template:Cite_journal
  9.85%  103.572     21 Template:Cite_book
  8.30%   87.313      1 Template:Machine_learning
  8.13%   85.464      1 Template:Sidebar_with_collapsible_lists
  7.07%   74.358      1 Template:Short_description
  5.72%   60.127      2 Template:Sfn
  4.93%   51.831      4 Template:Navbox
  4.52%   47.500      2 Template:Pagetype
 Render ID 60f1643d-3db5-11f1-b1a4-7727008a9ee1  Saved in parser cache with key enwiki:pcache:66294:|#|:idhash:canonical and timestamp 20260421190744 and revision id 1350338198. Rendering was triggered because: page_view