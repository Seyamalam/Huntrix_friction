# Generative adversarial network

* Source: https://en.wikipedia.org/wiki/Generative_adversarial_network

---

An illustration of how a GAN works

| Part of a series on |
| --- |
| [Machine learning](https://en.wikipedia.org/wiki/Machine_learning)   and [data mining](https://en.wikipedia.org/wiki/Data_mining) |
| Paradigms [Supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) [Unsupervised learning](https://en.wikipedia.org/wiki/Unsupervised_learning) [Semi-supervised learning](https://en.wikipedia.org/wiki/Semi-supervised_learning) [Self-supervised learning](https://en.wikipedia.org/wiki/Self-supervised_learning) [Reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning) [Meta-learning](https://en.wikipedia.org/wiki/Meta-learning_(computer_science)) [Online learning](https://en.wikipedia.org/wiki/Online_machine_learning) [Batch learning](https://en.wikipedia.org/wiki/Batch_learning) [Curriculum learning](https://en.wikipedia.org/wiki/Curriculum_learning) [Rule-based learning](https://en.wikipedia.org/wiki/Rule-based_machine_learning) [Neuro-symbolic AI](https://en.wikipedia.org/wiki/Neuro-symbolic_AI) [Neuromorphic engineering](https://en.wikipedia.org/wiki/Neuromorphic_engineering) [Quantum machine learning](https://en.wikipedia.org/wiki/Quantum_machine_learning) |
| Problems [Classification](https://en.wikipedia.org/wiki/Statistical_classification) [Generative modeling](https://en.wikipedia.org/wiki/Generative_model) [Regression](https://en.wikipedia.org/wiki/Regression_analysis) [Clustering](https://en.wikipedia.org/wiki/Cluster_analysis) [Dimensionality reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction) [Density estimation](https://en.wikipedia.org/wiki/Density_estimation) [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection) [Data cleaning](https://en.wikipedia.org/wiki/Data_cleaning) [AutoML](https://en.wikipedia.org/wiki/Automated_machine_learning) [Association rules](https://en.wikipedia.org/wiki/Association_rule_learning) [Semantic analysis](https://en.wikipedia.org/wiki/Semantic_analysis_(machine_learning)) [Structured prediction](https://en.wikipedia.org/wiki/Structured_prediction) [Feature engineering](https://en.wikipedia.org/wiki/Feature_engineering) [Feature learning](https://en.wikipedia.org/wiki/Feature_learning) [Learning to rank](https://en.wikipedia.org/wiki/Learning_to_rank) [Grammar induction](https://en.wikipedia.org/wiki/Grammar_induction) [Ontology learning](https://en.wikipedia.org/wiki/Ontology_learning) [Multimodal learning](https://en.wikipedia.org/wiki/Multimodal_learning) |
| [Supervised learning](https://en.wikipedia.org/wiki/Supervised_learning)   (**[classification](https://en.wikipedia.org/wiki/Statistical_classification)** • **[regression](https://en.wikipedia.org/wiki/Regression_analysis)**)  [Apprenticeship learning](https://en.wikipedia.org/wiki/Apprenticeship_learning) [Decision trees](https://en.wikipedia.org/wiki/Decision_tree_learning) [Ensembles](https://en.wikipedia.org/wiki/Ensemble_learning) [Bagging](https://en.wikipedia.org/wiki/Bootstrap_aggregating) [Boosting](https://en.wikipedia.org/wiki/Boosting_(machine_learning)) [Random forest](https://en.wikipedia.org/wiki/Random_forest) [*k*-NN](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) [Linear regression](https://en.wikipedia.org/wiki/Linear_regression) [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) [Artificial neural networks](https://en.wikipedia.org/wiki/Artificial_neural_network) [Logistic regression](https://en.wikipedia.org/wiki/Logistic_regression) [Perceptron](https://en.wikipedia.org/wiki/Perceptron) [Relevance vector machine (RVM)](https://en.wikipedia.org/wiki/Relevance_vector_machine) [Support vector machine (SVM)](https://en.wikipedia.org/wiki/Support_vector_machine) |
| [Clustering](https://en.wikipedia.org/wiki/Cluster_analysis) [BIRCH](https://en.wikipedia.org/wiki/BIRCH) [CURE](https://en.wikipedia.org/wiki/CURE_algorithm) [Hierarchical](https://en.wikipedia.org/wiki/Hierarchical_clustering) [*k*-means](https://en.wikipedia.org/wiki/K-means_clustering) [Fuzzy](https://en.wikipedia.org/wiki/Fuzzy_clustering) [Expectation–maximization (EM)](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm)    [DBSCAN](https://en.wikipedia.org/wiki/DBSCAN) [OPTICS](https://en.wikipedia.org/wiki/OPTICS_algorithm) [Mean shift](https://en.wikipedia.org/wiki/Mean_shift) |
| [Dimensionality reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction) [Factor analysis](https://en.wikipedia.org/wiki/Factor_analysis) [CCA](https://en.wikipedia.org/wiki/Canonical_correlation) [ICA](https://en.wikipedia.org/wiki/Independent_component_analysis) [LDA](https://en.wikipedia.org/wiki/Linear_discriminant_analysis) [NMF](https://en.wikipedia.org/wiki/Non-negative_matrix_factorization) [PCA](https://en.wikipedia.org/wiki/Principal_component_analysis) [PGD](https://en.wikipedia.org/wiki/Proper_generalized_decomposition) [t-SNE](https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding) [SDL](https://en.wikipedia.org/wiki/Sparse_dictionary_learning) |
| [Structured prediction](https://en.wikipedia.org/wiki/Structured_prediction) [Graphical models](https://en.wikipedia.org/wiki/Graphical_model) [Bayes net](https://en.wikipedia.org/wiki/Bayesian_network) [Conditional random field](https://en.wikipedia.org/wiki/Conditional_random_field) [Hidden Markov](https://en.wikipedia.org/wiki/Hidden_Markov_model) |
| [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection) [RANSAC](https://en.wikipedia.org/wiki/Random_sample_consensus) [*k*-NN](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) [Local outlier factor](https://en.wikipedia.org/wiki/Local_outlier_factor) [Isolation forest](https://en.wikipedia.org/wiki/Isolation_forest) |
| [Neural networks](https://en.wikipedia.org/wiki/Neural_network_(machine_learning)) [Autoencoder](https://en.wikipedia.org/wiki/Autoencoder) [Deep learning](https://en.wikipedia.org/wiki/Deep_learning) [Feedforward neural network](https://en.wikipedia.org/wiki/Feedforward_neural_network) [Recurrent neural network](https://en.wikipedia.org/wiki/Recurrent_neural_network) [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) [GRU](https://en.wikipedia.org/wiki/Gated_recurrent_unit) [ESN](https://en.wikipedia.org/wiki/Echo_state_network) [reservoir computing](https://en.wikipedia.org/wiki/Reservoir_computing) [Boltzmann machine](https://en.wikipedia.org/wiki/Boltzmann_machine) [Restricted](https://en.wikipedia.org/wiki/Restricted_Boltzmann_machine) GAN [Diffusion model](https://en.wikipedia.org/wiki/Diffusion_model) [SOM](https://en.wikipedia.org/wiki/Self-organizing_map) [Convolutional neural network](https://en.wikipedia.org/wiki/Convolutional_neural_network) [U-Net](https://en.wikipedia.org/wiki/U-Net) [LeNet](https://en.wikipedia.org/wiki/LeNet) [AlexNet](https://en.wikipedia.org/wiki/AlexNet) [DeepDream](https://en.wikipedia.org/wiki/DeepDream) [Neural field](https://en.wikipedia.org/wiki/Neural_field) [Neural radiance field](https://en.wikipedia.org/wiki/Neural_radiance_field) [Physics-informed neural networks](https://en.wikipedia.org/wiki/Physics-informed_neural_networks) [Transformer](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)) [Vision](https://en.wikipedia.org/wiki/Vision_transformer) [Mamba](https://en.wikipedia.org/wiki/Mamba_(deep_learning_architecture)) [Spiking neural network](https://en.wikipedia.org/wiki/Spiking_neural_network) [Memtransistor](https://en.wikipedia.org/wiki/Memtransistor) [Electrochemical RAM](https://en.wikipedia.org/wiki/Electrochemical_RAM) (ECRAM) |
| [Reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning) [Q-learning](https://en.wikipedia.org/wiki/Q-learning) [Policy gradient](https://en.wikipedia.org/wiki/Policy_gradient_method) [SARSA](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action) [Temporal difference (TD)](https://en.wikipedia.org/wiki/Temporal_difference_learning) [Multi-agent](https://en.wikipedia.org/wiki/Multi-agent_reinforcement_learning) [Self-play](https://en.wikipedia.org/wiki/Self-play_(reinforcement_learning_technique)) |
| Learning with humans [Active learning](https://en.wikipedia.org/wiki/Active_learning_(machine_learning)) [Crowdsourcing](https://en.wikipedia.org/wiki/Crowdsourcing) [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) [Mechanistic interpretability](https://en.wikipedia.org/wiki/Mechanistic_interpretability) [RLHF](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback) |
| Model diagnostics [Coefficient of determination](https://en.wikipedia.org/wiki/Coefficient_of_determination) [Confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix) [Learning curve](https://en.wikipedia.org/wiki/Learning_curve_(machine_learning)) [ROC curve](https://en.wikipedia.org/wiki/Receiver_operating_characteristic) |
| Mathematical foundations [Kernel machines](https://en.wikipedia.org/wiki/Kernel_machines) [Bias–variance tradeoff](https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff) [Computational learning theory](https://en.wikipedia.org/wiki/Computational_learning_theory) [Empirical risk minimization](https://en.wikipedia.org/wiki/Empirical_risk_minimization) [Occam learning](https://en.wikipedia.org/wiki/Occam_learning) [PAC learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning) [Statistical learning](https://en.wikipedia.org/wiki/Statistical_learning_theory) [VC theory](https://en.wikipedia.org/wiki/Vapnik%E2%80%93Chervonenkis_theory) [Topological deep learning](https://en.wikipedia.org/wiki/Topological_deep_learning) |
| Journals and conferences [AAAI](https://en.wikipedia.org/wiki/AAAI_Conference_on_Artificial_Intelligence) [ECML PKDD](https://en.wikipedia.org/wiki/ECML_PKDD) [NeurIPS](https://en.wikipedia.org/wiki/Conference_on_Neural_Information_Processing_Systems) [ICML](https://en.wikipedia.org/wiki/International_Conference_on_Machine_Learning) [ICLR](https://en.wikipedia.org/wiki/International_Conference_on_Learning_Representations) [IJCAI](https://en.wikipedia.org/wiki/International_Joint_Conference_on_Artificial_Intelligence) [ML](https://en.wikipedia.org/wiki/Machine_Learning_(journal)) [JMLR](https://en.wikipedia.org/wiki/Journal_of_Machine_Learning_Research) |
| Related articles [Glossary of artificial intelligence](https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence) [List of datasets for machine-learning research](https://en.wikipedia.org/wiki/List_of_datasets_for_machine-learning_research) [List of datasets in computer vision and image processing](https://en.wikipedia.org/wiki/List_of_datasets_in_computer_vision_and_image_processing) [Outline of machine learning](https://en.wikipedia.org/wiki/Outline_of_machine_learning) |
| [v](https://en.wikipedia.org/wiki/Template:Machine_learning)[t](https://en.wikipedia.org/wiki/Template_talk:Machine_learning)[e](https://en.wikipedia.org/wiki/Special:EditPage/Template:Machine_learning) |

A **generative adversarial network** (**GAN**) is a class of [machine learning](https://en.wikipedia.org/wiki/Machine_learning) frameworks and a prominent framework for approaching [generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence). The concept was initially developed by [Ian Goodfellow](https://en.wikipedia.org/wiki/Ian_Goodfellow) and his colleagues in June 2014. In a GAN, two [neural networks](https://en.wikipedia.org/wiki/Neural_network) compete with each other in the form of a [zero-sum game](https://en.wikipedia.org/wiki/Zero-sum_game), where one agent's gain is another agent's loss.

Given a training set, this technique learns to generate new data with the same statistics as the training set. For example, a GAN trained on photographs can generate new photographs that look at least superficially authentic to human observers, having many realistic characteristics. Though originally proposed as a form of [generative model](https://en.wikipedia.org/wiki/Generative_model) for [unsupervised learning](https://en.wikipedia.org/wiki/Unsupervised_learning), GANs have also proved useful for [semi-supervised learning](https://en.wikipedia.org/wiki/Semi-supervised_learning), fully [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning), and [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning).

The core idea of a GAN is based on the "indirect" training through the discriminator, another neural network that can tell how "realistic" the input seems, which itself is also being updated dynamically. This means that the generator is not trained to minimize the distance to a specific image, but rather to fool the discriminator. This enables the model to learn in an unsupervised manner.

GANs are similar to [mimicry](https://en.wikipedia.org/wiki/Mimicry) in [evolutionary biology](https://en.wikipedia.org/wiki/Evolutionary_biology), with an [evolutionary arms race](https://en.wikipedia.org/wiki/Evolutionary_arms_race) between both networks.

## Definition

### Mathematical

The original GAN is defined as the following [game](https://en.wikipedia.org/wiki/Game_theory):

Each [probability space](https://en.wikipedia.org/wiki/Probability_space) 

(
Ω Ω 
,

μ μ 

ref

)

{\displaystyle (\Omega ,\mu _{\text{ref}})}

 defines a GAN game.

There are 2 players: generator and discriminator.

The generator's [strategy set](https://en.wikipedia.org/wiki/Strategy_(game_theory)) is 

P

(
Ω Ω 
)

{\displaystyle {\mathcal {P}}(\Omega )}

, the set of all probability measures 

μ μ 

G

{\displaystyle \mu _{G}}

 on 

Ω Ω 

{\displaystyle \Omega }

.

The discriminator's strategy set is the set of [Markov kernels](https://en.wikipedia.org/wiki/Markov_kernel) 

μ μ 

D

:
Ω Ω 
→ → 

P

[
0
,
1
]

{\displaystyle \mu _{D}:\Omega \to {\mathcal {P}}[0,1]}

, where 

P

[
0
,
1
]

{\displaystyle {\mathcal {P}}[0,1]}

 is the set of probability measures on 

[
0
,
1
]

{\displaystyle [0,1]}

.

The GAN game is a [zero-sum game](https://en.wikipedia.org/wiki/Zero-sum_game), with objective function

L
(

μ μ 

G

,

μ μ 

D

)
:=

E

x
∼ ∼ 

μ μ 

ref

,
y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
y
]
+

E

x
∼ ∼ 

μ μ 

G

,
y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
y
)
]
.

{\displaystyle L(\mu _{G},\mu _{D}):=\operatorname {E} _{x\sim \mu _{\text{ref}},y\sim \mu _{D}(x)}[\ln y]+\operatorname {E} _{x\sim \mu _{G},y\sim \mu _{D}(x)}[\ln(1-y)].}

The generator aims to minimize the objective, and the discriminator aims to maximize the objective.

The generator's task is to approach 

μ μ 

G

≈ ≈ 

μ μ 

ref

{\displaystyle \mu _{G}\approx \mu _{\text{ref}}}

, that is, to match its own output distribution as closely as possible to the reference distribution. The discriminator's task is to output a value close to 1 when the input appears to be from the reference distribution, and to output a value close to 0 when the input looks like it came from the generator distribution.

### In practice

The [*generative* network](https://en.wikipedia.org/wiki/Generative_model) generates candidates while the [*discriminative* network](https://en.wikipedia.org/wiki/Discriminative_model) evaluates them. This creates a contest based on data distributions, where the generator learns to map from a [latent space](https://en.wikipedia.org/wiki/Latent_space) to the true data distribution, aiming to produce candidates that the discriminator cannot distinguish from real data. The discriminator's goal is to correctly identify these candidates, but as the generator improves, its task becomes more challenging, increasing the discriminator's error rate.

A known dataset serves as the initial training data for the discriminator. Training involves presenting it with samples from the training dataset until it achieves acceptable accuracy. The generator is trained based on whether it succeeds in fooling the discriminator. Typically, the generator is seeded with randomized input that is sampled from a predefined [latent space](https://en.wikipedia.org/wiki/Latent_space) (e.g. a [multivariate normal distribution](https://en.wikipedia.org/wiki/Multivariate_normal_distribution)). Thereafter, candidates synthesized by the generator are evaluated by the discriminator. Independent [backpropagation](https://en.wikipedia.org/wiki/Backpropagation) procedures are applied to both networks so that the generator produces better samples, while the discriminator becomes more skilled at flagging synthetic samples. When used for image generation, the generator is typically a [deconvolutional neural network](https://en.wikipedia.org/wiki/Deconvolutional_neural_network), and the discriminator is a [convolutional neural network](https://en.wikipedia.org/wiki/Convolutional_neural_network).

### Relation to other statistical machine learning methods

GANs are **implicit generative models**, which means that they do not explicitly model the likelihood function nor provide a means for finding the latent variable corresponding to a given sample, unlike alternatives such as [flow-based generative model](https://en.wikipedia.org/wiki/Flow-based_generative_model).

Main types of deep generative models that perform maximum likelihood estimation

Compared to fully visible belief networks such as [WaveNet](https://en.wikipedia.org/wiki/WaveNet) and PixelRNN and autoregressive models in general, GANs can generate one complete sample in one pass, rather than multiple passes through the network.

Compared to [Boltzmann machines](https://en.wikipedia.org/wiki/Boltzmann_machine) and linear [ICA](https://en.wikipedia.org/wiki/Independent_component_analysis), there is no restriction on the type of function used by the network.

Since neural networks are [universal approximators](https://en.wikipedia.org/wiki/Universal_approximation_theorem), GANs are [asymptotically consistent](https://en.wikipedia.org/wiki/Asymptotic_theory_(statistics)#Consistency). [Variational autoencoders](https://en.wikipedia.org/wiki/Variational_autoencoders) might be universal approximators, but it is not proven as of 2017.

## Mathematical properties

### Measure-theoretic considerations

This section provides some of the mathematical theory behind these methods.

In [modern probability theory](https://en.wikipedia.org/wiki/Probability_axioms) based on [measure theory](https://en.wikipedia.org/wiki/Measure_theory), a probability space also needs to be equipped with a [σ-algebra](https://en.wikipedia.org/wiki/%CE%A3-algebra). As a result, a more rigorous definition of the GAN game would make the following changes:

Each probability space 

(
Ω Ω 
,

B

,

μ μ 

ref

)

{\displaystyle (\Omega ,{\mathcal {B}},\mu _{\text{ref}})}

 defines a GAN game.

The generator's strategy set is 

P

(
Ω Ω 
,

B

)

{\displaystyle {\mathcal {P}}(\Omega ,{\mathcal {B}})}

, the set of all probability measures 

μ μ 

G

{\displaystyle \mu _{G}}

 on the measure-space 

(
Ω Ω 
,

B

)

{\displaystyle (\Omega ,{\mathcal {B}})}

.

The discriminator's strategy set is the set of [Markov kernels](https://en.wikipedia.org/wiki/Markov_kernel) 

μ μ 

D

:
(
Ω Ω 
,

B

)
→ → 

P

(
[
0
,
1
]
,

B

(
[
0
,
1
]
)
)

{\displaystyle \mu _{D}:(\Omega ,{\mathcal {B}})\to {\mathcal {P}}([0,1],{\mathcal {B}}([0,1]))}

, where 

B

(
[
0
,
1
]
)

{\displaystyle {\mathcal {B}}([0,1])}

 is the [Borel σ-algebra](https://en.wikipedia.org/wiki/Borel_Algebra) on 

[
0
,
1
]

{\displaystyle [0,1]}

.

Since issues of measurability never arise in practice, these will not concern us further.

### Choice of the strategy set

In the most generic version of the GAN game described above, the strategy set for the discriminator contains all Markov kernels 

μ μ 

D

:
Ω Ω 
→ → 

P

[
0
,
1
]

{\displaystyle \mu _{D}:\Omega \to {\mathcal {P}}[0,1]}

, and the strategy set for the generator contains arbitrary [probability distributions](https://en.wikipedia.org/wiki/Probability_distribution) 

μ μ 

G

{\displaystyle \mu _{G}}

 on 

Ω Ω 

{\displaystyle \Omega }

.

However, as shown below, the optimal discriminator strategy against any 

μ μ 

G

{\displaystyle \mu _{G}}

 is deterministic, so there is no loss of generality in restricting the discriminator's strategies to deterministic functions 

D
:
Ω Ω 
→ → 
[
0
,
1
]

{\displaystyle D:\Omega \to [0,1]}

. In most applications, 

D

{\displaystyle D}

 is a [deep neural network](https://en.wikipedia.org/wiki/Deep_neural_network) function.

As for the generator, while 

μ μ 

G

{\displaystyle \mu _{G}}

 could theoretically be any computable probability distribution, in practice, it is usually implemented as a [pushforward](https://en.wikipedia.org/wiki/Pushforward_measure): 

μ μ 

G

=

μ μ 

Z

∘ ∘ 

G

− − 
1

{\displaystyle \mu _{G}=\mu _{Z}\circ G^{-1}}

. That is, start with a random variable 

z
∼ ∼ 

μ μ 

Z

{\displaystyle z\sim \mu _{Z}}

, where 

μ μ 

Z

{\displaystyle \mu _{Z}}

 is a probability distribution that is easy to compute (such as the [uniform distribution](https://en.wikipedia.org/wiki/Continuous_uniform_distribution), or the [Gaussian distribution](https://en.wikipedia.org/wiki/Normal_distribution)), then define a function 

G
:

Ω Ω 

Z

→ → 
Ω Ω 

{\displaystyle G:\Omega _{Z}\to \Omega }

. Then the distribution 

μ μ 

G

{\displaystyle \mu _{G}}

 is the distribution of 

G
(
z
)

{\displaystyle G(z)}

.

Consequently, the generator's strategy is usually defined as just 

G

{\displaystyle G}

, leaving 

z
∼ ∼ 

μ μ 

Z

{\displaystyle z\sim \mu _{Z}}

 implicit. In this formalism, the GAN game objective is

L
(
G
,
D
)
:=

E

x
∼ ∼ 

μ μ 

ref

⁡ ⁡ 
[
ln
⁡ ⁡ 
D
(
x
)
]
+

E

z
∼ ∼ 

μ μ 

Z

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
G
(
z
)
)
)
]
.

{\displaystyle L(G,D):=\operatorname {E} _{x\sim \mu _{\text{ref}}}[\ln D(x)]+\operatorname {E} _{z\sim \mu _{Z}}[\ln(1-D(G(z)))].}

### Generative reparametrization

The GAN architecture has two main components. One is casting optimization into a game, of form 

min

G

max

D

L
(
G
,
D
)

{\displaystyle \min _{G}\max _{D}L(G,D)}

, which is different from the usual kind of optimization, of form 

min

θ θ 

L
(
θ θ 
)

{\displaystyle \min _{\theta }L(\theta )}

. The other is the decomposition of 

μ μ 

G

{\displaystyle \mu _{G}}

 into 

μ μ 

Z

∘ ∘ 

G

− − 
1

{\displaystyle \mu _{Z}\circ G^{-1}}

, which can be understood as a reparametrization trick.

To see its significance, one must compare GAN with previous methods for learning generative models, which were plagued with "intractable probabilistic computations that arise in maximum likelihood estimation and related strategies".

At the same time, Kingma and Welling and Rezende et al. developed the same idea of reparametrization into a general stochastic backpropagation method. Among its first applications was the [variational autoencoder](https://en.wikipedia.org/wiki/Variational_autoencoder).

### Move order and strategic equilibria

In the original paper, as well as most subsequent papers, it is usually assumed that the generator *moves first*, and the discriminator *moves second*, thus giving the following minimax game:

min

μ μ 

G

max

μ μ 

D

L
(

μ μ 

G

,

μ μ 

D

)
:=

E

x
∼ ∼ 

μ μ 

ref

,
y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
y
]
+

E

x
∼ ∼ 

μ μ 

G

,
y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
y
)
]
.

{\displaystyle \min _{\mu _{G}}\max _{\mu _{D}}L(\mu _{G},\mu _{D}):=\operatorname {E} _{x\sim \mu _{\text{ref}},y\sim \mu _{D}(x)}[\ln y]+\operatorname {E} _{x\sim \mu _{G},y\sim \mu _{D}(x)}[\ln(1-y)].}

If both the generator's and the discriminator's strategy sets are spanned by a finite number of strategies, then by the [minimax theorem](https://en.wikipedia.org/wiki/Minimax_theorem),

min

μ μ 

G

max

μ μ 

D

L
(

μ μ 

G

,

μ μ 

D

)
=

max

μ μ 

D

min

μ μ 

G

L
(

μ μ 

G

,

μ μ 

D

)

{\displaystyle \min _{\mu _{G}}\max _{\mu _{D}}L(\mu _{G},\mu _{D})=\max _{\mu _{D}}\min _{\mu _{G}}L(\mu _{G},\mu _{D})}

that is, the move order does not matter.

However, since the strategy sets are both not finitely spanned, the minimax theorem does not apply, and the idea of an "equilibrium" becomes delicate. To wit, there are the following different concepts of equilibrium:

* Equilibrium when generator moves first, and discriminator moves second:

μ μ 
^ ^ 

G

∈ ∈ 
arg
⁡ ⁡ 

min

μ μ 

G

max

μ μ 

D

L
(

μ μ 

G

,

μ μ 

D

)
,

μ μ 
^ ^ 

D

∈ ∈ 
arg
⁡ ⁡ 

max

μ μ 

D

L
(

μ μ 
^ ^ 

G

,

μ μ 

D

)
,

{\displaystyle {\hat {\mu }}_{G}\in \arg \min _{\mu _{G}}\max _{\mu _{D}}L(\mu _{G},\mu _{D}),\quad {\hat {\mu }}_{D}\in \arg \max _{\mu _{D}}L({\hat {\mu }}_{G},\mu _{D}),\quad }
* Equilibrium when discriminator moves first, and generator moves second:

μ μ 
^ ^ 

D

∈ ∈ 
arg
⁡ ⁡ 

max

μ μ 

D

min

μ μ 

G

L
(

μ μ 

G

,

μ μ 

D

)
,

μ μ 
^ ^ 

G

∈ ∈ 
arg
⁡ ⁡ 

min

μ μ 

G

L
(

μ μ 

G

,

μ μ 
^ ^ 

D

)
,

{\displaystyle {\hat {\mu }}_{D}\in \arg \max _{\mu _{D}}\min _{\mu _{G}}L(\mu _{G},\mu _{D}),\quad {\hat {\mu }}_{G}\in \arg \min _{\mu _{G}}L(\mu _{G},{\hat {\mu }}_{D}),}
* [Nash equilibrium](https://en.wikipedia.org/wiki/Nash_equilibrium) 

(

μ μ 
^ ^ 

D

,

μ μ 
^ ^ 

G

)

{\displaystyle ({\hat {\mu }}_{D},{\hat {\mu }}_{G})}

, which is stable under simultaneous move order:

μ μ 
^ ^ 

D

∈ ∈ 
arg
⁡ ⁡ 

max

μ μ 

D

L
(

μ μ 
^ ^ 

G

,

μ μ 

D

)
,

μ μ 
^ ^ 

G

∈ ∈ 
arg
⁡ ⁡ 

min

μ μ 

G

L
(

μ μ 

G

,

μ μ 
^ ^ 

D

)

{\displaystyle {\hat {\mu }}_{D}\in \arg \max _{\mu _{D}}L({\hat {\mu }}_{G},\mu _{D}),\quad {\hat {\mu }}_{G}\in \arg \min _{\mu _{G}}L(\mu _{G},{\hat {\mu }}_{D})}

For general games, these equilibria do not have to agree, or even to exist. For the original GAN game, these equilibria all exist, and are all equal. However, for more general GAN games, these do not necessarily exist, or agree.

### Main theorems for GAN game

The original GAN paper proved the following two theorems:

**Theorem** (the optimal discriminator computes the Jensen–Shannon divergence)—For any fixed generator strategy 

μ μ 

G

{\displaystyle \mu _{G}}

, let the optimal reply be 

D

∗ ∗ 

=
arg
⁡ ⁡ 

max

D

L
(

μ μ 

G

,
D
)

{\displaystyle D^{*}=\arg \max _{D}L(\mu _{G},D)}

, then

D

∗ ∗ 

(
x
)

=

d

μ μ 

ref

d
(

μ μ 

ref

+

μ μ 

G

)

L
(

μ μ 

G

,

D

∗ ∗ 

)

=
2

D

J
S

(

μ μ 

ref

;

μ μ 

G

)
− − 
2
ln
⁡ ⁡ 
2

{\displaystyle {\begin{aligned}D^{*}(x)&={\frac {d\mu _{\text{ref}}}{d(\mu _{\text{ref}}+\mu _{G})}}\\[6pt]L(\mu _{G},D^{*})&=2D_{JS}(\mu _{\text{ref}};\mu _{G})-2\ln 2\end{aligned}}}

where the derivative is the [Radon–Nikodym derivative](https://en.wikipedia.org/wiki/Radon%E2%80%93Nikodym_derivative), and 

D

J
S

{\displaystyle D_{JS}}

 is the [Jensen–Shannon divergence](https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence).

**Proof**

By Jensen's inequality,

E

x
∼ ∼ 

μ μ 

ref

,
y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
y
]
≤ ≤ 

E

x
∼ ∼ 

μ μ 

ref

⁡ ⁡ 
[
ln
⁡ ⁡ 

E

y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
y
]
]

{\displaystyle \operatorname {E} _{x\sim \mu _{\text{ref}},y\sim \mu _{D}(x)}[\ln y]\leq \operatorname {E} _{x\sim \mu _{\text{ref}}}[\ln \operatorname {E} _{y\sim \mu _{D}(x)}[y]]}

and similarly for the other term. Therefore, the optimal reply can be deterministic, i.e. 

μ μ 

D

(
x
)
=

δ δ 

D
(
x
)

{\displaystyle \mu _{D}(x)=\delta _{D(x)}}

 for some function 

D
:
Ω Ω 
→ → 
[
0
,
1
]

{\displaystyle D:\Omega \to [0,1]}

, in which case

L
(

μ μ 

G

,

μ μ 

D

)
:=

E

x
∼ ∼ 

μ μ 

ref

⁡ ⁡ 
[
ln
⁡ ⁡ 
D
(
x
)
]
+

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
x
)
)
]
.

{\displaystyle L(\mu _{G},\mu _{D}):=\operatorname {E} _{x\sim \mu _{\text{ref}}}[\ln D(x)]+\operatorname {E} _{x\sim \mu _{G}}[\ln(1-D(x))].}

To define suitable density functions, we define a base measure 

μ μ 
:=

μ μ 

ref

+

μ μ 

G

{\displaystyle \mu :=\mu _{\text{ref}}+\mu _{G}}

, which allows us to take the Radon–Nikodym derivatives

ρ ρ 

ref

=

d

μ μ 

ref

d
μ μ 

ρ ρ 

G

=

d

μ μ 

G

d
μ μ 

{\displaystyle \rho _{\text{ref}}={\frac {d\mu _{\text{ref}}}{d\mu }}\quad \rho _{G}={\frac {d\mu _{G}}{d\mu }}}

with 

ρ ρ 

ref

+

ρ ρ 

G

=
1

{\displaystyle \rho _{\text{ref}}+\rho _{G}=1}

.

We then have

L
(

μ μ 

G

,

μ μ 

D

)
:=
∫ ∫ 
μ μ 
(
d
x
)

[

ρ ρ 

ref

(
x
)
ln
⁡ ⁡ 
(
D
(
x
)
)
+

ρ ρ 

G

(
x
)
ln
⁡ ⁡ 
(
1
− − 
D
(
x
)
)

]

.

{\displaystyle L(\mu _{G},\mu _{D}):=\int \mu (dx)\left[\rho _{\text{ref}}(x)\ln(D(x))+\rho _{G}(x)\ln(1-D(x))\right].}

The integrand is just the negative [cross-entropy](https://en.wikipedia.org/wiki/Cross-entropy) between two Bernoulli random variables with parameters 

ρ ρ 

ref

(
x
)

{\displaystyle \rho _{\text{ref}}(x)}

 and 

D
(
x
)

{\displaystyle D(x)}

. We can write this as 

− − 
H
(

ρ ρ 

ref

(
x
)
)
− − 

D

K
L

(

ρ ρ 

ref

(
x
)
∥ ∥ 
D
(
x
)
)

{\displaystyle -H(\rho _{\text{ref}}(x))-D_{KL}(\rho _{\text{ref}}(x)\parallel D(x))}

, where 

H

{\displaystyle H}

 is the [binary entropy function](https://en.wikipedia.org/wiki/Binary_entropy_function), so

L
(

μ μ 

G

,

μ μ 

D

)
=
− − 
∫ ∫ 
μ μ 
(
d
x
)
(
H
(

ρ ρ 

ref

(
x
)
)
+

D

K
L

(

ρ ρ 

ref

(
x
)
∥ ∥ 
D
(
x
)
)
)
.

{\displaystyle L(\mu _{G},\mu _{D})=-\int \mu (dx)(H(\rho _{\text{ref}}(x))+D_{KL}(\rho _{\text{ref}}(x)\parallel D(x))).}

This means that the optimal strategy for the discriminator is 

D
(
x
)
=

ρ ρ 

ref

(
x
)

{\displaystyle D(x)=\rho _{\text{ref}}(x)}

, with   

L
(

μ μ 

G

,

μ μ 

D

∗ ∗ 

)
=
− − 
∫ ∫ 
μ μ 
(
d
x
)
H
(

ρ ρ 

ref

(
x
)
)
=

D

J
S

(

μ μ 

ref

∥ ∥ 

μ μ 

G

)
− − 
2
ln
⁡ ⁡ 
2

{\displaystyle L(\mu _{G},\mu _{D}^{*})=-\int \mu (dx)H(\rho _{\text{ref}}(x))=D_{JS}(\mu _{\text{ref}}\parallel \mu _{G})-2\ln 2}

after routine calculation.

**Interpretation**: For any fixed generator strategy 

μ μ 

G

{\displaystyle \mu _{G}}

, the optimal discriminator keeps track of the likelihood ratio between the reference distribution and the generator distribution:

D
(
x
)

1
− − 
D
(
x
)

=

d

μ μ 

ref

d

μ μ 

G

(
x
)
=

μ μ 

ref

(
d
x
)

μ μ 

G

(
d
x
)

;

D
(
x
)
=
σ σ 
(
ln
⁡ ⁡ 

μ μ 

ref

(
d
x
)
− − 
ln
⁡ ⁡ 

μ μ 

G

(
d
x
)
)

{\displaystyle {\frac {D(x)}{1-D(x)}}={\frac {d\mu _{\text{ref}}}{d\mu _{G}}}(x)={\frac {\mu _{\text{ref}}(dx)}{\mu _{G}(dx)}};\quad D(x)=\sigma (\ln \mu _{\text{ref}}(dx)-\ln \mu _{G}(dx))}

where 

σ σ 

{\displaystyle \sigma }

 is the [logistic function](https://en.wikipedia.org/wiki/Logistic_function).
In particular, if the prior probability for an image 

x

{\displaystyle x}

 to come from the reference distribution is equal to 

1
2

{\displaystyle {\frac {1}{2}}}

, then 

D
(
x
)

{\displaystyle D(x)}

 is just the posterior probability that 

x

{\displaystyle x}

 came from the reference distribution:

D
(
x
)
=
Pr
(
x

 came from reference distribution

∣ ∣ 
x
)
.

{\displaystyle D(x)=\Pr(x{\text{ came from reference distribution}}\mid x).}

**Theorem** (the unique equilibrium point)—For any GAN game, there exists a pair 

(

μ μ 
^ ^ 

D

,

μ μ 
^ ^ 

G

)

{\displaystyle ({\hat {\mu }}_{D},{\hat {\mu }}_{G})}

 that is both a sequential equilibrium and a Nash equilibrium:

L
(

μ μ 
^ ^ 

G

,

μ μ 
^ ^ 

D

)
=

min

μ μ 

G

max

μ μ 

D

L
(

μ μ 

G

,

μ μ 

D

)
=

max

μ μ 

D

min

μ μ 

G

L
(

μ μ 

G

,

μ μ 

D

)
=
− − 
2
ln
⁡ ⁡ 
2

μ μ 
^ ^ 

D

∈ ∈ 
arg
⁡ ⁡ 

max

μ μ 

D

min

μ μ 

G

L
(

μ μ 

G

,

μ μ 

D

)
,

μ μ 
^ ^ 

G

∈ ∈ 
arg
⁡ ⁡ 

min

μ μ 

G

max

μ μ 

D

L
(

μ μ 

G

,

μ μ 

D

)

μ μ 
^ ^ 

D

∈ ∈ 
arg
⁡ ⁡ 

max

μ μ 

D

L
(

μ μ 
^ ^ 

G

,

μ μ 

D

)
,

μ μ 
^ ^ 

G

∈ ∈ 
arg
⁡ ⁡ 

min

μ μ 

G

L
(

μ μ 

G

,

μ μ 
^ ^ 

D

)

∀ ∀ 
x
∈ ∈ 
Ω Ω 
,

μ μ 
^ ^ 

D

(
x
)
=

δ δ 

1
2

,

μ μ 
^ ^ 

G

=

μ μ 

ref

{\displaystyle {\begin{aligned}&L({\hat {\mu }}_{G},{\hat {\mu }}_{D})=\min _{\mu _{G}}\max _{\mu _{D}}L(\mu _{G},\mu _{D})=&\max _{\mu _{D}}\min _{\mu _{G}}L(\mu _{G},\mu _{D})=-2\ln 2\\[6pt]&{\hat {\mu }}_{D}\in \arg \max _{\mu _{D}}\min _{\mu _{G}}L(\mu _{G},\mu _{D}),&\quad {\hat {\mu }}_{G}\in \arg \min _{\mu _{G}}\max _{\mu _{D}}L(\mu _{G},\mu _{D})\\[6pt]&{\hat {\mu }}_{D}\in \arg \max _{\mu _{D}}L({\hat {\mu }}_{G},\mu _{D}),&\quad {\hat {\mu }}_{G}\in \arg \min _{\mu _{G}}L(\mu _{G},{\hat {\mu }}_{D})\\[6pt]&\forall x\in \Omega ,{\hat {\mu }}_{D}(x)=\delta _{\frac {1}{2}},&\quad {\hat {\mu }}_{G}=\mu _{\text{ref}}\end{aligned}}}

That is, the generator perfectly mimics the reference, and the discriminator outputs 

1
2

{\displaystyle {\frac {1}{2}}}

 deterministically on all inputs.

**Proof**

From the previous proposition,

arg
⁡ ⁡ 

min

μ μ 

G

max

μ μ 

D

L
(

μ μ 

G

,

μ μ 

D

)
=

μ μ 

ref

;

min

μ μ 

G

max

μ μ 

D

L
(

μ μ 

G

,

μ μ 

D

)
=
− − 
2
ln
⁡ ⁡ 
2.

{\displaystyle \arg \min _{\mu _{G}}\max _{\mu _{D}}L(\mu _{G},\mu _{D})=\mu _{\text{ref}};\quad \min _{\mu _{G}}\max _{\mu _{D}}L(\mu _{G},\mu _{D})=-2\ln 2.}

For any fixed discriminator strategy 

μ μ 

D

{\displaystyle \mu _{D}}

, any 

μ μ 

G

{\displaystyle \mu _{G}}

 concentrated on the set

{
x
∣ ∣ 

E

y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
y
)
]
=

inf

x

E

y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
y
)
]
}

{\displaystyle \{x\mid \operatorname {E} _{y\sim \mu _{D}(x)}[\ln(1-y)]=\inf _{x}\operatorname {E} _{y\sim \mu _{D}(x)}[\ln(1-y)]\}}

is an optimal strategy for the generator. Thus,

arg
⁡ ⁡ 

max

μ μ 

D

min

μ μ 

G

L
(

μ μ 

G

,

μ μ 

D

)
=
arg
⁡ ⁡ 

max

μ μ 

D

E

x
∼ ∼ 

μ μ 

ref

,
y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
y
]
+

inf

x

E

y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
y
)
]
.

{\displaystyle \arg \max _{\mu _{D}}\min _{\mu _{G}}L(\mu _{G},\mu _{D})=\arg \max _{\mu _{D}}\operatorname {E} _{x\sim \mu _{\text{ref}},y\sim \mu _{D}(x)}[\ln y]+\inf _{x}\operatorname {E} _{y\sim \mu _{D}(x)}[\ln(1-y)].}

By Jensen's inequality, the discriminator can only improve by adopting the deterministic strategy of always playing 

D
(
x
)
=

E

y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
y
]

{\displaystyle D(x)=\operatorname {E} _{y\sim \mu _{D}(x)}[y]}

. Therefore,

arg
⁡ ⁡ 

max

μ μ 

D

min

μ μ 

G

L
(

μ μ 

G

,

μ μ 

D

)
=
arg
⁡ ⁡ 

max

D

E

x
∼ ∼ 

μ μ 

ref

⁡ ⁡ 
[
ln
⁡ ⁡ 
D
(
x
)
]
+

inf

x

ln
⁡ ⁡ 
(
1
− − 
D
(
x
)
)

{\displaystyle \arg \max _{\mu _{D}}\min _{\mu _{G}}L(\mu _{G},\mu _{D})=\arg \max _{D}\operatorname {E} _{x\sim \mu _{\text{ref}}}[\ln D(x)]+\inf _{x}\ln(1-D(x))}

By Jensen's inequality,

ln
⁡ ⁡ 

E

x
∼ ∼ 

μ μ 

ref

⁡ ⁡ 
[
D
(
x
)
]
+

inf

x

ln
⁡ ⁡ 
(
1
− − 
D
(
x
)
)

=

ln
⁡ ⁡ 

E

x
∼ ∼ 

μ μ 

ref

⁡ ⁡ 
[
D
(
x
)
]
+
ln
⁡ ⁡ 
(
1
− − 

sup

x

D
(
x
)
)

=

ln
⁡ ⁡ 
[

E

x
∼ ∼ 

μ μ 

ref

⁡ ⁡ 
[
D
(
x
)
]
(
1
− − 

sup

x

D
(
x
)
)
]
≤ ≤ 
ln
⁡ ⁡ 
[

sup

x

D
(
x
)
)
(
1
− − 

sup

x

D
(
x
)
)
]
≤ ≤ 
ln
⁡ ⁡ 

1
4

,

{\displaystyle {\begin{aligned}&\ln \operatorname {E} _{x\sim \mu _{\text{ref}}}[D(x)]+\inf _{x}\ln(1-D(x))\\[6pt]={}&\ln \operatorname {E} _{x\sim \mu _{\text{ref}}}[D(x)]+\ln(1-\sup _{x}D(x))\\[6pt]={}&\ln[\operatorname {E} _{x\sim \mu _{\text{ref}}}[D(x)](1-\sup _{x}D(x))]\leq \ln[\sup _{x}D(x))(1-\sup _{x}D(x))]\leq \ln {\frac {1}{4}},\end{aligned}}}

with equality if 

D
(
x
)
=

1
2

{\displaystyle D(x)={\frac {1}{2}}}

, so

∀ ∀ 
x
∈ ∈ 
Ω Ω 
,

μ μ 
^ ^ 

D

(
x
)
=

δ δ 

1
2

;

max

μ μ 

D

min

μ μ 

G

L
(

μ μ 

G

,

μ μ 

D

)
=
− − 
2
ln
⁡ ⁡ 
2.

{\displaystyle \forall x\in \Omega ,{\hat {\mu }}_{D}(x)=\delta _{\frac {1}{2}};\quad \max _{\mu _{D}}\min _{\mu _{G}}L(\mu _{G},\mu _{D})=-2\ln 2.}

Finally, to check that this is a Nash equilibrium, note that when 

μ μ 

G

=

μ μ 

ref

{\displaystyle \mu _{G}=\mu _{\text{ref}}}

, we have

L
(

μ μ 

G

,

μ μ 

D

)
:=

E

x
∼ ∼ 

μ μ 

ref

,
y
∼ ∼ 

μ μ 

D

(
x
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
y
(
1
− − 
y
)
)
]

{\displaystyle L(\mu _{G},\mu _{D}):=\operatorname {E} _{x\sim \mu _{\text{ref}},y\sim \mu _{D}(x)}[\ln(y(1-y))]}

which is always maximized by 

y
=

1
2

{\displaystyle y={\frac {1}{2}}}

.

When 

∀ ∀ 
x
∈ ∈ 
Ω Ω 
,

μ μ 

D

(
x
)
=

δ δ 

1
2

{\displaystyle \forall x\in \Omega ,\mu _{D}(x)=\delta _{\frac {1}{2}}}

, any strategy is optimal for the generator.

## Training and evaluating GAN

### Training

#### Unstable convergence

While the GAN game has a unique global equilibrium point when both the generator and discriminator have access to their entire strategy sets, the equilibrium is no longer guaranteed when they have a restricted strategy set.

In practice, the generator has access only to measures of form 

μ μ 

Z

∘ ∘ 

G

θ θ 

− − 
1

{\displaystyle \mu _{Z}\circ G_{\theta }^{-1}}

, where 

G

θ θ 

{\displaystyle G_{\theta }}

 is a function computed by a neural network with parameters 

θ θ 

{\displaystyle \theta }

, and 

μ μ 

Z

{\displaystyle \mu _{Z}}

 is an easily sampled distribution, such as the uniform or normal distribution. Similarly, the discriminator has access only to functions of form 

D

ζ ζ 

{\displaystyle D_{\zeta }}

, a function computed by a neural network with parameters 

ζ ζ 

{\displaystyle \zeta }

. These restricted strategy sets take up a *vanishingly small proportion* of their entire strategy sets.

Further, even if an equilibrium still exists, it can only be found by searching in the high-dimensional space of all possible neural network functions. The standard strategy of using [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent) to find the equilibrium often does not work for GAN, and often the game "collapses" into one of several failure modes. To improve the convergence stability, some training strategies start with an easier task, such as generating low-resolution images or simple images (one object with uniform background), and gradually increase the difficulty of the task during training. This essentially translates to applying a curriculum learning scheme.

#### Mode collapse

GANs often suffer from **mode collapse** where they fail to generalize properly, missing entire modes from the input data. For example, a GAN trained on the [MNIST](https://en.wikipedia.org/wiki/MNIST) dataset containing many samples of each digit might only generate pictures of digit 0. This was termed "the Helvetica scenario".

A typical mechanism for mode collapse is the generator only generating one or a few of the likely values, or a very incomplete picture of the target distribution. As the discriminator is only trained to distinguish real from fake samples, it will correctly identify the generated samples as real, but no penalty is imposed on the GAN's ability to generate data that represents the full range of the target distribution.

Weak discriminators, for instance underparametrized ones, or ones trained too slow compared to the generator, may as well be unable to fully discriminate over the entire support of the distribution, and only become able to correctly discriminate a very incomplete part of the target distribution.

Some researchers perceive the root problem to be a weak discriminative network that fails to notice the pattern of omission, while others assign blame to a bad choice of [objective function](https://en.wikipedia.org/wiki/Objective_function). Many solutions have been proposed, but it is still an open problem.

Even the state-of-the-art architecture, BigGAN (2019), could not avoid mode collapse. The authors resorted to "allowing collapse to occur at the later stages of training, by which time a model is sufficiently trained to achieve good results".

#### Two time-scale update rule

The **two time-scale update rule (TTUR)** is proposed to make GAN convergence more stable by making the learning rate of the generator lower than that of the discriminator. They prove that when trained this way, GANs "converge, under mild assumptions to a stationary local Nash equilibrium". They further show that this property extends to the use of the Adam optimizer, which is commonly used in stochastic gradient descent.

It is important to note, however, that a local Nash equilibrium in no way signifies an absence of mode collapse - for instance, a GAN trained on MNIST collapsed to generating a single digit may satisfy the hypotheses of the paper, while still presenting mode collapse.

#### Vanishing gradient

Conversely, if the discriminator learns too fast compared to the generator, then the discriminator could almost perfectly distinguish 

μ μ 

G

θ θ 

,

μ μ 

ref

{\displaystyle \mu _{G_{\theta }},\mu _{\text{ref}}}

. In such case, the generator 

G

θ θ 

{\displaystyle G_{\theta }}

 could be stuck with a very high loss no matter which direction it changes its 

θ θ 

{\displaystyle \theta }

, meaning that the gradient 

∇ ∇ 

θ θ 

L
(

G

θ θ 

,

D

ζ ζ 

)

{\displaystyle \nabla _{\theta }L(G_{\theta },D_{\zeta })}

 would be close to zero. In such case, the generator cannot learn, a case of the [**vanishing gradient** problem](https://en.wikipedia.org/wiki/Vanishing_gradient_problem).

Intuitively speaking, the discriminator is too good, and since the generator cannot take any small step (only small steps are considered in gradient descent) to improve its payoff, it does not even try.

One important method for solving this problem is the [Wasserstein GAN](https://en.wikipedia.org/wiki/Wasserstein_GAN).

### Evaluation

GANs are usually evaluated by [Inception score](https://en.wikipedia.org/wiki/Inception_score) (IS), which measures how varied the generator's outputs are (as classified by an image classifier, usually [Inception-v3](https://en.wikipedia.org/wiki/Inceptionv3)), or [Fréchet inception distance](https://en.wikipedia.org/wiki/Fr%C3%A9chet_inception_distance) (FID), which measures how similar the generator's outputs are to a reference set (as classified by a learned image featurizer, such as Inception-v3 without its final layer). Many papers that propose new GAN architectures for image generation report how their architectures break the [state of the art](https://en.wikipedia.org/wiki/State_of_the_art) on FID or IS.

Another evaluation method is the Learned Perceptual Image Patch Similarity (LPIPS), which starts with a learned image featurizer 

f

θ θ 

:

Image

→ → 

R

n

{\displaystyle f_{\theta }:{\text{Image}}\to \mathbb {R} ^{n}}

, and finetunes it by supervised learning on a set of 

(
x
,

x
′

,

p
e
r
c
e
p
t
u
a
l
 
d
i
f
f
e
r
e
n
c
e

⁡ ⁡ 
(
x
,

x
′

)
)

{\displaystyle (x,x',\operatorname {perceptual~difference} (x,x'))}

, where 

x

{\displaystyle x}

 is an image, 

x
′

{\displaystyle x'}

 is a perturbed version of it, and 

p
e
r
c
e
p
t
u
a
l
 
d
i
f
f
e
r
e
n
c
e

⁡ ⁡ 
(
x
,

x
′

)

{\displaystyle \operatorname {perceptual~difference} (x,x')}

 is how much they differ, as reported by human subjects. The model is finetuned so that it can approximate 

‖ ‖ 

f

θ θ 

(
x
)
− − 

f

θ θ 

(

x
′

)
‖ ‖ 
≈ ≈ 

p
e
r
c
e
p
t
u
a
l
 
d
i
f
f
e
r
e
n
c
e

⁡ ⁡ 
(
x
,

x
′

)

{\displaystyle \|f_{\theta }(x)-f_{\theta }(x')\|\approx \operatorname {perceptual~difference} (x,x')}

. This finetuned model is then used to define 

LPIPS
⁡ ⁡ 
(
x
,

x
′

)
:=
‖ ‖ 

f

θ θ 

(
x
)
− − 

f

θ θ 

(

x
′

)
‖ ‖ 

{\displaystyle \operatorname {LPIPS} (x,x'):=\|f_{\theta }(x)-f_{\theta }(x')\|}

.

Other evaluation methods are reviewed in.

## Variants

There is a veritable zoo of GAN variants. Some of the most prominent are as follows:

### Conditional GAN

Conditional GANs are similar to standard GANs except they allow the model to conditionally generate samples based on additional information. For example, if we want to generate a cat face given a dog picture, we could use a conditional GAN.

The generator in a GAN game generates 

μ μ 

G

{\displaystyle \mu _{G}}

, a probability distribution on the probability space 

Ω Ω 

{\displaystyle \Omega }

. This leads to the idea of a conditional GAN, where instead of generating one probability distribution on 

Ω Ω 

{\displaystyle \Omega }

, the generator generates a different probability distribution 

μ μ 

G

(
c
)

{\displaystyle \mu _{G}(c)}

 on 

Ω Ω 

{\displaystyle \Omega }

, for each given class label 

c

{\displaystyle c}

.

For example, for generating images that look like [ImageNet](https://en.wikipedia.org/wiki/ImageNet), the generator should be able to generate a picture of cat when given the class label "cat".

In the original paper, the authors noted that GAN can be trivially extended to conditional GAN by providing the labels to both the generator and the discriminator.

Concretely, the conditional GAN game is just the GAN game with class labels provided:

L
(

μ μ 

G

,
D
)
:=

E

c
∼ ∼ 

μ μ 

C

,
x
∼ ∼ 

μ μ 

ref

(
c
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
D
(
x
,
c
)
]
+

E

c
∼ ∼ 

μ μ 

C

,
x
∼ ∼ 

μ μ 

G

(
c
)

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
x
,
c
)
)
]

{\displaystyle L(\mu _{G},D):=\operatorname {E} _{c\sim \mu _{C},x\sim \mu _{\text{ref}}(c)}[\ln D(x,c)]+\operatorname {E} _{c\sim \mu _{C},x\sim \mu _{G}(c)}[\ln(1-D(x,c))]}

where 

μ μ 

C

{\displaystyle \mu _{C}}

 is a probability distribution over classes, 

μ μ 

ref

(
c
)

{\displaystyle \mu _{\text{ref}}(c)}

 is the probability distribution of real images of class 

c

{\displaystyle c}

, and 

μ μ 

G

(
c
)

{\displaystyle \mu _{G}(c)}

 the probability distribution of images generated by the generator when given class label 

c

{\displaystyle c}

.

In 2017, a conditional GAN learned to generate 1000 image classes of [ImageNet](https://en.wikipedia.org/wiki/ImageNet).

### GANs with alternative architectures

The GAN game is a general framework and can be run with any reasonable parametrization of the generator 

G

{\displaystyle G}

 and discriminator 

D

{\displaystyle D}

. In the original paper, the authors demonstrated it using [multilayer perceptron](https://en.wikipedia.org/wiki/Multilayer_perceptron) networks and [convolutional neural networks](https://en.wikipedia.org/wiki/Convolutional_neural_network). Many alternative architectures have been tried.

**Deep convolutional GAN (DCGAN):** For both generator and discriminator, uses only deep networks consisting entirely of convolution-deconvolution layers, that is, fully convolutional networks.

**Self-attention GAN (SAGAN):** Starts with the DCGAN, then adds residually-connected standard [self-attention modules](https://en.wikipedia.org/wiki/Attention_mechanism) to the generator and discriminator.

**Variational autoencoder GAN (VAEGAN):** Uses a [variational autoencoder](https://en.wikipedia.org/wiki/Variational_autoencoder) (VAE) for the generator.

**Transformer GAN (TransGAN):** Uses the pure [transformer](https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)) architecture for both the generator and discriminator, entirely devoid of convolution-deconvolution layers.

**Flow-GAN:** Uses [flow-based generative model](https://en.wikipedia.org/wiki/Flow-based_generative_model) for the generator, allowing efficient computation of the likelihood function.

### GANs with alternative objectives

Many GAN variants are merely obtained by changing the loss functions for the generator and discriminator.

**Original GAN:**

We recast the original GAN objective into a form more convenient for comparison:

{

min

D

L

D

(
D
,

μ μ 

G

)
=
− − 

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
ln
⁡ ⁡ 
D
(
x
)
]
− − 

E

x
∼ ∼ 

μ μ 

ref

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
x
)
)
]

min

G

L

G

(
D
,

μ μ 

G

)
=
− − 

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
x
)
)
]

{\displaystyle {\begin{cases}\min _{D}L_{D}(D,\mu _{G})=-\operatorname {E} _{x\sim \mu _{G}}[\ln D(x)]-\operatorname {E} _{x\sim \mu _{\text{ref}}}[\ln(1-D(x))]\\\min _{G}L_{G}(D,\mu _{G})=-\operatorname {E} _{x\sim \mu _{G}}[\ln(1-D(x))]\end{cases}}}

**Original GAN, non-saturating loss:**

This objective for generator was recommended in the original paper for faster convergence.

L

G

=

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
ln
⁡ ⁡ 
D
(
x
)
]

{\displaystyle L_{G}=\operatorname {E} _{x\sim \mu _{G}}[\ln D(x)]}

The effect of using this objective is analyzed in Section 2.2.2 of Arjovsky et al.

**Original GAN, maximum likelihood:**

L

G

=

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
(

exp

∘ ∘ 

σ σ 

− − 
1

∘ ∘ 
D
)
(
x
)
]

{\displaystyle L_{G}=\operatorname {E} _{x\sim \mu _{G}}[({\exp }\circ \sigma ^{-1}\circ D)(x)]}

where 

σ σ 

{\displaystyle \sigma }

 is the logistic function. When the discriminator is optimal, the generator gradient is the same as in [maximum likelihood estimation](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation), even though GAN cannot perform maximum likelihood estimation *itself*.

**[Hinge loss](https://en.wikipedia.org/wiki/Hinge_loss) GAN**:

L

D

=
− − 

E

x
∼ ∼ 

p

ref

⁡ ⁡ 

[

min

(

0
,
− − 
1
+
D
(
x
)

)

]

− − 

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 

[

min

(

0
,
− − 
1
− − 
D

(
x
)

)

]

{\displaystyle L_{D}=-\operatorname {E} _{x\sim p_{\text{ref}}}\left[\min \left(0,-1+D(x)\right)\right]-\operatorname {E} _{x\sim \mu _{G}}\left[\min \left(0,-1-D\left(x\right)\right)\right]}

L

G

=
− − 

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
D
(
x
)
]

{\displaystyle L_{G}=-\operatorname {E} _{x\sim \mu _{G}}[D(x)]}

**Least squares GAN:**

L

D

=

E

x
∼ ∼ 

μ μ 

ref

⁡ ⁡ 
[
(
D
(
x
)
− − 
b

)

2

]
+

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
(
D
(
x
)
− − 
a

)

2

]

{\displaystyle L_{D}=\operatorname {E} _{x\sim \mu _{\text{ref}}}[(D(x)-b)^{2}]+\operatorname {E} _{x\sim \mu _{G}}[(D(x)-a)^{2}]}

L

G

=

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
(
D
(
x
)
− − 
c

)

2

]

{\displaystyle L_{G}=\operatorname {E} _{x\sim \mu _{G}}[(D(x)-c)^{2}]}

where 

a
,
b
,
c

{\displaystyle a,b,c}

 are parameters to be chosen. The authors recommended 

a
=
− − 
1
,
b
=
1
,
c
=
0

{\displaystyle a=-1,b=1,c=0}

.

### Wasserstein GAN (WGAN)

The Wasserstein GAN modifies the GAN game at two points:

* The discriminator's strategy set is the set of measurable functions of type 

D
:
Ω Ω 
→ → 

R

{\displaystyle D:\Omega \to \mathbb {R} }

 with bounded [Lipschitz norm](https://en.wikipedia.org/w/index.php?title=Lipschitz_norm&action=edit&redlink=1): 

‖ ‖ 
D

‖ ‖ 

L

≤ ≤ 
K

{\displaystyle \|D\|_{L}\leq K}

, where 

K

{\displaystyle K}

 is a fixed positive constant.
* The objective is

L

W
G
A
N

(

μ μ 

G

,
D
)
:=

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
D
(
x
)
]
− − 

E

x
∼ ∼ 

μ μ 

ref

[
D
(
x
)
]

{\displaystyle L_{WGAN}(\mu _{G},D):=\operatorname {E} _{x\sim \mu _{G}}[D(x)]-\mathbb {E} _{x\sim \mu _{\text{ref}}}[D(x)]}

One of its purposes is to solve the problem of mode collapse (see above). The authors claim "In no experiment did we see evidence of mode collapse for the WGAN algorithm".

### GANs with more than two players

#### Adversarial autoencoder

An adversarial autoencoder (AAE) is more autoencoder than GAN. The idea is to start with a plain [autoencoder](https://en.wikipedia.org/wiki/Autoencoder), but train a discriminator to discriminate the latent vectors from a reference distribution (often the normal distribution).

#### InfoGAN

In conditional GAN, the generator receives both a noise vector 

z

{\displaystyle z}

 and a label 

c

{\displaystyle c}

, and produces an image 

G
(
z
,
c
)

{\displaystyle G(z,c)}

. The discriminator receives image-label pairs 

(
x
,
c
)

{\displaystyle (x,c)}

, and computes 

D
(
x
,
c
)

{\displaystyle D(x,c)}

.

When the training dataset is unlabeled, conditional GAN does not work directly.

The idea of InfoGAN is to decree that every latent vector in the latent space can be decomposed as 

(
z
,
c
)

{\displaystyle (z,c)}

: an incompressible noise part 

z

{\displaystyle z}

, and an informative label part 

c

{\displaystyle c}

, and encourage the generator to comply with the decree, by encouraging it to maximize 

I
(
c
,
G
(
z
,
c
)
)

{\displaystyle I(c,G(z,c))}

, the [mutual information](https://en.wikipedia.org/wiki/Mutual_information) between 

c

{\displaystyle c}

 and 

G
(
z
,
c
)

{\displaystyle G(z,c)}

, while making no demands on the mutual information 

z

{\displaystyle z}

 between 

G
(
z
,
c
)

{\displaystyle G(z,c)}

.

Unfortunately, 

I
(
c
,
G
(
z
,
c
)
)

{\displaystyle I(c,G(z,c))}

 is intractable in general, The key idea of InfoGAN is Variational Mutual Information Maximization: indirectly maximize it by maximizing a lower bound

I
^ ^ 

(
G
,
Q
)
=

E

z
∼ ∼ 

μ μ 

Z

,
c
∼ ∼ 

μ μ 

C

[
ln
⁡ ⁡ 
Q
(
c
∣ ∣ 
G
(
z
,
c
)
)
]
;

I
(
c
,
G
(
z
,
c
)
)
≥ ≥ 

sup

Q

I
^ ^ 

(
G
,
Q
)

{\displaystyle {\hat {I}}(G,Q)=\mathbb {E} _{z\sim \mu _{Z},c\sim \mu _{C}}[\ln Q(c\mid G(z,c))];\quad I(c,G(z,c))\geq \sup _{Q}{\hat {I}}(G,Q)}

where 

Q

{\displaystyle Q}

 ranges over all [Markov kernels](https://en.wikipedia.org/wiki/Markov_kernel) of type 

Q
:

Ω Ω 

Y

→ → 

P

(

Ω Ω 

C

)

{\displaystyle Q:\Omega _{Y}\to {\mathcal {P}}(\Omega _{C})}

.

The InfoGAN game is defined as follows:

Three probability spaces define an InfoGAN game:

* (

Ω Ω 

X

,

μ μ 

ref

)

{\displaystyle (\Omega _{X},\mu _{\text{ref}})}

, the space of reference images.
* (

Ω Ω 

Z

,

μ μ 

Z

)

{\displaystyle (\Omega _{Z},\mu _{Z})}

, the fixed random noise generator.
* (

Ω Ω 

C

,

μ μ 

C

)

{\displaystyle (\Omega _{C},\mu _{C})}

, the fixed random information generator.

There are 3 players in 2 teams: generator, Q, and discriminator. The generator and Q are on one team, and the discriminator on the other team.

The objective function is

L
(
G
,
Q
,
D
)
=

L

G
A
N

(
G
,
D
)
− − 
λ λ 

I
^ ^ 

(
G
,
Q
)

{\displaystyle L(G,Q,D)=L_{GAN}(G,D)-\lambda {\hat {I}}(G,Q)}

where 

L

G
A
N

(
G
,
D
)
=

E

x
∼ ∼ 

μ μ 

ref

,

⁡ ⁡ 
[
ln
⁡ ⁡ 
D
(
x
)
]
+

E

z
∼ ∼ 

μ μ 

Z

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
G
(
z
,
c
)
)
)
]

{\displaystyle L_{GAN}(G,D)=\operatorname {E} _{x\sim \mu _{\text{ref}},}[\ln D(x)]+\operatorname {E} _{z\sim \mu _{Z}}[\ln(1-D(G(z,c)))]}

 is the original GAN game objective, and 

I
^ ^ 

(
G
,
Q
)
=

E

z
∼ ∼ 

μ μ 

Z

,
c
∼ ∼ 

μ μ 

C

[
ln
⁡ ⁡ 
Q
(
c
∣ ∣ 
G
(
z
,
c
)
)
]

{\displaystyle {\hat {I}}(G,Q)=\mathbb {E} _{z\sim \mu _{Z},c\sim \mu _{C}}[\ln Q(c\mid G(z,c))]}

Generator-Q team aims to minimize the objective, and discriminator aims to maximize it:

min

G
,
Q

max

D

L
(
G
,
Q
,
D
)

{\displaystyle \min _{G,Q}\max _{D}L(G,Q,D)}

#### Bidirectional GAN (BiGAN)

The standard GAN generator is a function of type 

G
:

Ω Ω 

Z

→ → 

Ω Ω 

X

{\displaystyle G:\Omega _{Z}\to \Omega _{X}}

, that is, it is a mapping from a latent space 

Ω Ω 

Z

{\displaystyle \Omega _{Z}}

 to the image space 

Ω Ω 

X

{\displaystyle \Omega _{X}}

. This can be understood as a "decoding" process, whereby every latent vector 

z
∈ ∈ 

Ω Ω 

Z

{\displaystyle z\in \Omega _{Z}}

 is a code for an image 

x
∈ ∈ 

Ω Ω 

X

{\displaystyle x\in \Omega _{X}}

, and the generator performs the decoding. This naturally leads to the idea of training another network that performs "encoding", creating an [autoencoder](https://en.wikipedia.org/wiki/Autoencoder) out of the encoder-generator pair.

Already in the original paper, the authors noted that "Learned approximate inference can be performed by training an auxiliary network to predict 

z

{\displaystyle z}

 given 

x

{\displaystyle x}

". The bidirectional GAN architecture performs exactly this.

The BiGAN is defined as follows:

Two probability spaces define a BiGAN game:

* (

Ω Ω 

X

,

μ μ 

X

)

{\displaystyle (\Omega _{X},\mu _{X})}

, the space of reference images.
* (

Ω Ω 

Z

,

μ μ 

Z

)

{\displaystyle (\Omega _{Z},\mu _{Z})}

, the latent space.

There are 3 players in 2 teams: generator, encoder, and discriminator. The generator and encoder are on one team, and the discriminator on the other team.

The generator's strategies are functions 

G
:

Ω Ω 

Z

→ → 

Ω Ω 

X

{\displaystyle G:\Omega _{Z}\to \Omega _{X}}

, and the encoder's strategies are functions 

E
:

Ω Ω 

X

→ → 

Ω Ω 

Z

{\displaystyle E:\Omega _{X}\to \Omega _{Z}}

. The discriminator's strategies are functions 

D
:

Ω Ω 

X

→ → 
[
0
,
1
]

{\displaystyle D:\Omega _{X}\to [0,1]}

.

The objective function is

L
(
G
,
E
,
D
)
=

E

x
∼ ∼ 

μ μ 

X

[
ln
⁡ ⁡ 
D
(
x
,
E
(
x
)
)
]
+

E

z
∼ ∼ 

μ μ 

Z

[
ln
⁡ ⁡ 
(
1
− − 
D
(
G
(
z
)
,
z
)
)
]

{\displaystyle L(G,E,D)=\mathbb {E} _{x\sim \mu _{X}}[\ln D(x,E(x))]+\mathbb {E} _{z\sim \mu _{Z}}[\ln(1-D(G(z),z))]}

Generator-encoder team aims to minimize the objective, and discriminator aims to maximize it:

min

G
,
E

max

D

L
(
G
,
E
,
D
)

{\displaystyle \min _{G,E}\max _{D}L(G,E,D)}

In the paper, they gave a more abstract definition of the objective as:

L
(
G
,
E
,
D
)
=

E

(
x
,
z
)
∼ ∼ 

μ μ 

E
,
X

[
ln
⁡ ⁡ 
D
(
x
,
z
)
]
+

E

(
x
,
z
)
∼ ∼ 

μ μ 

G
,
Z

[
ln
⁡ ⁡ 
(
1
− − 
D
(
x
,
z
)
)
]

{\displaystyle L(G,E,D)=\mathbb {E} _{(x,z)\sim \mu _{E,X}}[\ln D(x,z)]+\mathbb {E} _{(x,z)\sim \mu _{G,Z}}[\ln(1-D(x,z))]}

where 

μ μ 

E
,
X

(
d
x
,
d
z
)
=

μ μ 

X

(
d
x
)
⋅ ⋅ 

δ δ 

E
(
x
)

(
d
z
)

{\displaystyle \mu _{E,X}(dx,dz)=\mu _{X}(dx)\cdot \delta _{E(x)}(dz)}

 is the probability distribution on 

Ω Ω 

X

× × 

Ω Ω 

Z

{\displaystyle \Omega _{X}\times \Omega _{Z}}

 obtained by [pushing 

μ μ 

X

{\displaystyle \mu _{X}}

 forward](https://en.wikipedia.org/wiki/Pushforward_measure) via 

x
↦ ↦ 
(
x
,
E
(
x
)
)

{\displaystyle x\mapsto (x,E(x))}

, and 

μ μ 

G
,
Z

(
d
x
,
d
z
)
=

δ δ 

G
(
z
)

(
d
x
)
⋅ ⋅ 

μ μ 

Z

(
d
z
)

{\displaystyle \mu _{G,Z}(dx,dz)=\delta _{G(z)}(dx)\cdot \mu _{Z}(dz)}

 is the probability distribution on 

Ω Ω 

X

× × 

Ω Ω 

Z

{\displaystyle \Omega _{X}\times \Omega _{Z}}

 obtained by pushing 

μ μ 

Z

{\displaystyle \mu _{Z}}

 forward via 

z
↦ ↦ 
(
G
(
x
)
,
z
)

{\displaystyle z\mapsto (G(x),z)}

.

Applications of bidirectional models include [semi-supervised learning](https://en.wikipedia.org/wiki/Semi-supervised_learning), [interpretable machine learning](https://en.wikipedia.org/wiki/Explainable_artificial_intelligence), and [neural machine translation](https://en.wikipedia.org/wiki/Neural_machine_translation).

#### CycleGAN

CycleGAN is an architecture for performing translations between two domains, such as between photos of horses and photos of zebras, or photos of night cities and photos of day cities.

The CycleGAN game is defined as follows:

There are two probability spaces 

(

Ω Ω 

X

,

μ μ 

X

)
,
(

Ω Ω 

Y

,

μ μ 

Y

)

{\displaystyle (\Omega _{X},\mu _{X}),(\Omega _{Y},\mu _{Y})}

, corresponding to the two domains needed for translations fore-and-back.

There are 4 players in 2 teams: generators 

G

X

:

Ω Ω 

X

→ → 

Ω Ω 

Y

,

G

Y

:

Ω Ω 

Y

→ → 

Ω Ω 

X

{\displaystyle G_{X}:\Omega _{X}\to \Omega _{Y},G_{Y}:\Omega _{Y}\to \Omega _{X}}

, and discriminators 

D

X

:

Ω Ω 

X

→ → 
[
0
,
1
]
,

D

Y

:

Ω Ω 

Y

→ → 
[
0
,
1
]

{\displaystyle D_{X}:\Omega _{X}\to [0,1],D_{Y}:\Omega _{Y}\to [0,1]}

.

The objective function is

L
(

G

X

,

G

Y

,

D

X

,

D

Y

)
=

L

G
A
N

(

G

X

,

D

X

)
+

L

G
A
N

(

G

Y

,

D

Y

)
+
λ λ 

L

c
y
c
l
e

(

G

X

,

G

Y

)

{\displaystyle L(G_{X},G_{Y},D_{X},D_{Y})=L_{GAN}(G_{X},D_{X})+L_{GAN}(G_{Y},D_{Y})+\lambda L_{cycle}(G_{X},G_{Y})}

where 

λ λ 

{\displaystyle \lambda }

 is a positive adjustable parameter, 

L

G
A
N

{\displaystyle L_{GAN}}

 is the GAN game objective, and 

L

c
y
c
l
e

{\displaystyle L_{cycle}}

 is the *cycle consistency loss*:

L

c
y
c
l
e

(

G

X

,

G

Y

)
=

E

x
∼ ∼ 

μ μ 

X

‖ ‖ 

G

X

(

G

Y

(
x
)
)
− − 
x
‖ ‖ 
+

E

y
∼ ∼ 

μ μ 

Y

‖ ‖ 

G

Y

(

G

X

(
y
)
)
− − 
y
‖ ‖ 

{\displaystyle L_{cycle}(G_{X},G_{Y})=E_{x\sim \mu _{X}}\|G_{X}(G_{Y}(x))-x\|+E_{y\sim \mu _{Y}}\|G_{Y}(G_{X}(y))-y\|}

The generators aim to minimize the objective, and the discriminators aim to maximize it:

min

G

X

,

G

Y

max

D

X

,

D

Y

L
(

G

X

,

G

Y

,

D

X

,

D

Y

)

{\displaystyle \min _{G_{X},G_{Y}}\max _{D_{X},D_{Y}}L(G_{X},G_{Y},D_{X},D_{Y})}

Unlike previous work like pix2pix, which requires paired training data, cycleGAN requires no paired data. For example, to train a pix2pix model to turn a summer scenery photo to winter scenery photo and back, the dataset must contain pairs of the same place in summer and winter, shot at the same angle; cycleGAN would only need a set of summer scenery photos, and an unrelated set of winter scenery photos.

### GANs with particularly large or small scales

#### BigGAN

The BigGAN is essentially a self-attention GAN trained on a large scale (up to 80 million parameters) to generate large images of ImageNet (up to 512 x 512 resolution), with numerous engineering tricks to make it converge.

#### Invertible data augmentation

When there is insufficient training data, the reference distribution 

μ μ 

ref

{\displaystyle \mu _{\text{ref}}}

 cannot be well-approximated by the [empirical distribution](https://en.wikipedia.org/wiki/Empirical_measure) given by the training dataset. In such cases, [data augmentation](https://en.wikipedia.org/wiki/Data_augmentation) can be applied, to allow training GAN on smaller datasets. Naïve data augmentation, however, brings its problems.

Consider the original GAN game, slightly reformulated as follows:

{

min

D

L

D

(
D
,

μ μ 

G

)
=
− − 

E

x
∼ ∼ 

μ μ 

ref

⁡ ⁡ 
[
ln
⁡ ⁡ 
D
(
x
)
]
− − 

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
x
)
)
]

min

G

L

G

(
D
,

μ μ 

G

)
=
− − 

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
x
)
)
]

{\displaystyle {\begin{cases}\min _{D}L_{D}(D,\mu _{G})=-\operatorname {E} _{x\sim \mu _{\text{ref}}}[\ln D(x)]-\operatorname {E} _{x\sim \mu _{G}}[\ln(1-D(x))]\\\min _{G}L_{G}(D,\mu _{G})=-\operatorname {E} _{x\sim \mu _{G}}[\ln(1-D(x))]\end{cases}}}

Now we use data augmentation by randomly sampling semantic-preserving transforms 

T
:
Ω Ω 
→ → 
Ω Ω 

{\displaystyle T:\Omega \to \Omega }

 and applying them to the dataset, to obtain the reformulated GAN game:

{

min

D

L

D

(
D
,

μ μ 

G

)
=
− − 

E

x
∼ ∼ 

μ μ 

ref

,
T
∼ ∼ 

μ μ 

trans

⁡ ⁡ 
[
ln
⁡ ⁡ 
D
(
T
(
x
)
)
]
− − 

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
x
)
)
]

min

G

L

G

(
D
,

μ μ 

G

)
=
− − 

E

x
∼ ∼ 

μ μ 

G

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
x
)
)
]

{\displaystyle {\begin{cases}\min _{D}L_{D}(D,\mu _{G})=-\operatorname {E} _{x\sim \mu _{\text{ref}},T\sim \mu _{\text{trans}}}[\ln D(T(x))]-\operatorname {E} _{x\sim \mu _{G}}[\ln(1-D(x))]\\\min _{G}L_{G}(D,\mu _{G})=-\operatorname {E} _{x\sim \mu _{G}}[\ln(1-D(x))]\end{cases}}}

This is equivalent to a GAN game with a different distribution 

μ μ 

ref

′

{\displaystyle \mu _{\text{ref}}'}

, sampled by 

T
(
x
)

{\displaystyle T(x)}

, with 

x
∼ ∼ 

μ μ 

ref

,
T
∼ ∼ 

μ μ 

trans

{\displaystyle x\sim \mu _{\text{ref}},T\sim \mu _{\text{trans}}}

. For example, if 

μ μ 

ref

{\displaystyle \mu _{\text{ref}}}

 is the distribution of images in ImageNet, and 

μ μ 

trans

{\displaystyle \mu _{\text{trans}}}

 samples identity-transform with probability 0.5, and horizontal-reflection with probability 0.5, then 

μ μ 

ref

′

{\displaystyle \mu _{\text{ref}}'}

 is the distribution of images in ImageNet and horizontally-reflected ImageNet, combined.

The result of such training would be a generator that mimics 

μ μ 

ref

′

{\displaystyle \mu _{\text{ref}}'}

. For example, it would generate images that look like they are randomly cropped, if the data augmentation uses random cropping.

The solution is to apply data augmentation to both generated and real images:

{

min

D

L

D

(
D
,

μ μ 

G

)
=
− − 

E

x
∼ ∼ 

μ μ 

ref

,
T
∼ ∼ 

μ μ 

trans

⁡ ⁡ 
[
ln
⁡ ⁡ 
D
(
T
(
x
)
)
]
− − 

E

x
∼ ∼ 

μ μ 

G

,
T
∼ ∼ 

μ μ 

trans

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
T
(
x
)
)
)
]

min

G

L

G

(
D
,

μ μ 

G

)
=
− − 

E

x
∼ ∼ 

μ μ 

G

,
T
∼ ∼ 

μ μ 

trans

⁡ ⁡ 
[
ln
⁡ ⁡ 
(
1
− − 
D
(
T
(
x
)
)
)
]

{\displaystyle {\begin{cases}\min _{D}L_{D}(D,\mu _{G})=-\operatorname {E} _{x\sim \mu _{\text{ref}},T\sim \mu _{\text{trans}}}[\ln D(T(x))]-\operatorname {E} _{x\sim \mu _{G},T\sim \mu _{\text{trans}}}[\ln(1-D(T(x)))]\\\min _{G}L_{G}(D,\mu _{G})=-\operatorname {E} _{x\sim \mu _{G},T\sim \mu _{\text{trans}}}[\ln(1-D(T(x)))]\end{cases}}}

The authors demonstrated high-quality generation using just 100-picture-large datasets.

The StyleGAN-2-ADA paper points out a further point on data augmentation: it must be *invertible*. Continue with the example of generating ImageNet pictures. If the data augmentation is "randomly rotate the picture by 0, 90, 180, 270 degrees with *equal* probability", then there is no way for the generator to know which is the true orientation: Consider two generators 

G
,

G
′

{\displaystyle G,G'}

, such that for any latent 

z

{\displaystyle z}

, the generated image 

G
(
z
)

{\displaystyle G(z)}

 is a 90-degree rotation of 

G
′

(
z
)

{\displaystyle G'(z)}

. They would have exactly the same expected loss, and so neither is preferred over the other.

The solution is to only use invertible data augmentation: instead of "randomly rotate the picture by 0, 90, 180, 270 degrees with *equal* probability", use "randomly rotate the picture by 90, 180, 270 degrees with 0.1 probability, and keep the picture as it is with 0.7 probability". This way, the generator is still rewarded  to keep images oriented the same way as un-augmented ImageNet pictures.

Abstractly, the effect of randomly sampling transformations 

T
:
Ω Ω 
→ → 
Ω Ω 

{\displaystyle T:\Omega \to \Omega }

 from the distribution 

μ μ 

trans

{\displaystyle \mu _{\text{trans}}}

 is to define a Markov kernel 

K

trans

:
Ω Ω 
→ → 

P

(
Ω Ω 
)

{\displaystyle K_{\text{trans}}:\Omega \to {\mathcal {P}}(\Omega )}

. Then, the data-augmented GAN game pushes the generator to find some 

μ μ 
^ ^ 

G

∈ ∈ 

P

(
Ω Ω 
)

{\displaystyle {\hat {\mu }}_{G}\in {\mathcal {P}}(\Omega )}

, such that 

K

trans

∗ ∗ 

μ μ 

ref

=

K

trans

∗ ∗ 

μ μ 
^ ^ 

G

{\displaystyle K_{\text{trans}}*\mu _{\text{ref}}=K_{\text{trans}}*{\hat {\mu }}_{G}}

where 

∗ ∗ 

{\displaystyle *}

 is the [Markov kernel convolution](https://en.wikipedia.org/wiki/Convolution_of_probability_distributions).
A data-augmentation method is defined to be *invertible* if its Markov kernel 

K

trans

{\displaystyle K_{\text{trans}}}

 satisfies

K

trans

∗ ∗ 
μ μ 
=

K

trans

∗ ∗ 

μ μ 
′

⟹ ⟹ 

μ μ 
=

μ μ 
′

∀ ∀ 
μ μ 
,

μ μ 
′

∈ ∈ 

P

(
Ω Ω 
)

{\displaystyle K_{\text{trans}}*\mu =K_{\text{trans}}*\mu '\implies \mu =\mu '\quad \forall \mu ,\mu '\in {\mathcal {P}}(\Omega )}

Immediately by definition, we see that composing multiple invertible data-augmentation methods results in yet another invertible method. Also by definition, if the data-augmentation method is invertible, then using it in a GAN game does not change the optimal strategy 

μ μ 
^ ^ 

G

{\displaystyle {\hat {\mu }}_{G}}

 for the generator, which is still 

μ μ 

ref

{\displaystyle \mu _{\text{ref}}}

.

There are two prototypical examples of invertible Markov kernels:

**Discrete case**: Invertible [stochastic matrices](https://en.wikipedia.org/wiki/Stochastic_matrix), when 

Ω Ω 

{\displaystyle \Omega }

 is finite.

For example, if 

Ω Ω 
=
{
↑ ↑ 
,
↓ ↓ 
,
← ← 
,
→ → 
}

{\displaystyle \Omega =\{\uparrow ,\downarrow ,\leftarrow ,\rightarrow \}}

 is the set of four images of an arrow, pointing in 4 directions, and the data augmentation is "randomly rotate the picture by 90, 180, 270 degrees with probability 

p

{\displaystyle p}

, and keep the picture as it is with probability 

(
1
− − 
3
p
)

{\displaystyle (1-3p)}

", then the Markov kernel 

K

trans

{\displaystyle K_{\text{trans}}}

 can be represented as a stochastic matrix:

[

K

trans

]
=

[

(
1
− − 
3
p
)

p

p

p

p

(
1
− − 
3
p
)

p

p

p

p

(
1
− − 
3
p
)

p

p

p

p

(
1
− − 
3
p
)

]

{\displaystyle [K_{\text{trans}}]={\begin{bmatrix}(1-3p)&p&p&p\\p&(1-3p)&p&p\\p&p&(1-3p)&p\\p&p&p&(1-3p)\end{bmatrix}}}

 and 

K

trans

{\displaystyle K_{\text{trans}}}

 is an invertible kernel iff 

[

K

trans

]

{\displaystyle [K_{\text{trans}}]}

 is an invertible matrix, that is, 

p
≠ ≠ 
1

/

4

{\displaystyle p\neq 1/4}

.

**Continuous case**: The gaussian kernel, when 

Ω Ω 
=

R

n

{\displaystyle \Omega =\mathbb {R} ^{n}}

 for some 

n
≥ ≥ 
1

{\displaystyle n\geq 1}

.

For example, if 

Ω Ω 
=

R

256

2

{\displaystyle \Omega =\mathbb {R} ^{256^{2}}}

 is the space of 256x256 images, and the data-augmentation method is "generate a gaussian noise 

z
∼ ∼ 

N

(
0
,

I

256

2

)

{\displaystyle z\sim {\mathcal {N}}(0,I_{256^{2}})}

, then add 

ϵ ϵ 
z

{\displaystyle \epsilon z}

 to the image", then 

K

trans

{\displaystyle K_{\text{trans}}}

 is just convolution by the density function of 

N

(
0
,

ϵ ϵ 

2

I

256

2

)

{\displaystyle {\mathcal {N}}(0,\epsilon ^{2}I_{256^{2}})}

. This is invertible, because convolution by a gaussian is just convolution by the [heat kernel](https://en.wikipedia.org/wiki/Heat_kernel), so given any 

μ μ 
∈ ∈ 

P

(

R

n

)

{\displaystyle \mu \in {\mathcal {P}}(\mathbb {R} ^{n})}

, the convolved distribution 

K

trans

∗ ∗ 
μ μ 

{\displaystyle K_{\text{trans}}*\mu }

 can be obtained by heating up 

R

n

{\displaystyle \mathbb {R} ^{n}}

 precisely according to 

μ μ 

{\displaystyle \mu }

, then wait for time 

ϵ ϵ 

2

/

4

{\displaystyle \epsilon ^{2}/4}

. With that, we can recover 

μ μ 

{\displaystyle \mu }

 by running the [heat equation](https://en.wikipedia.org/wiki/Heat_equation) *backwards in time* for 

ϵ ϵ 

2

/

4

{\displaystyle \epsilon ^{2}/4}

.

More examples of invertible data augmentations are found in the paper.

#### SinGAN

SinGAN pushes data augmentation to the limit, by using only a single image as training data and performing data augmentation on it. The GAN architecture is adapted to this training method by using a multi-scale pipeline.

The generator 

G

{\displaystyle G}

 is decomposed into a pyramid of generators 

G
=

G

1

∘ ∘ 

G

2

∘ ∘ 
⋯ ⋯ 
∘ ∘ 

G

N

{\displaystyle G=G_{1}\circ G_{2}\circ \cdots \circ G_{N}}

, with the lowest one generating the image 

G

N

(

z

N

)

{\displaystyle G_{N}(z_{N})}

 at the lowest resolution, then the generated image is scaled up to 

r
(

G

N

(

z

N

)
)

{\displaystyle r(G_{N}(z_{N}))}

, and fed to the next level to generate an image 

G

N
− − 
1

(

z

N
− − 
1

+
r
(

G

N

(

z

N

)
)
)

{\displaystyle G_{N-1}(z_{N-1}+r(G_{N}(z_{N})))}

 at a higher resolution, and so on. The discriminator is decomposed into a pyramid as well.

### StyleGAN series

The StyleGAN family is a series of architectures published by [Nvidia](https://en.wikipedia.org/wiki/Nvidia)'s research division.

#### Progressive GAN

Progressive GAN is a method for training GAN for large-scale image generation stably, by growing a GAN generator from small to large scale in a pyramidal fashion. Like SinGAN, it decomposes the generator as

G
=

G

1

∘ ∘ 

G

2

∘ ∘ 
⋯ ⋯ 
∘ ∘ 

G

N

{\displaystyle G=G_{1}\circ G_{2}\circ \cdots \circ G_{N}}

, and the discriminator as 

D
=

D

1

∘ ∘ 

D

2

∘ ∘ 
⋯ ⋯ 
∘ ∘ 

D

N

{\displaystyle D=D_{1}\circ D_{2}\circ \cdots \circ D_{N}}

.

During training, at first only 

G

N

,

D

N

{\displaystyle G_{N},D_{N}}

 are used in a GAN game to generate 4x4 images. Then 

G

N
− − 
1

,

D

N
− − 
1

{\displaystyle G_{N-1},D_{N-1}}

 are added to reach the second stage of GAN game, to generate 8x8 images, and so on, until we reach a GAN game to generate 1024x1024 images.

To avoid shock between stages of the GAN game, each new layer is "blended in" (Figure 2 of the paper). For example, this is how the second stage GAN game starts:

* Just before, the GAN game consists of the pair 

G

N

,

D

N

{\displaystyle G_{N},D_{N}}

 generating and discriminating 4x4 images.
* Just after, the GAN game consists of the pair 

(
(
1
− − 
α α 
)
+
α α 
⋅ ⋅ 

G

N
− − 
1

)
∘ ∘ 
u
∘ ∘ 

G

N

,

D

N

∘ ∘ 
d
∘ ∘ 
(
(
1
− − 
α α 
)
+
α α 
⋅ ⋅ 

D

N
− − 
1

)

{\displaystyle ((1-\alpha )+\alpha \cdot G_{N-1})\circ u\circ G_{N},D_{N}\circ d\circ ((1-\alpha )+\alpha \cdot D_{N-1})}

 generating and discriminating 8x8 images. Here, the functions 

u
,
d

{\displaystyle u,d}

 are image up- and down-sampling functions, and 

α α 

{\displaystyle \alpha }

 is a blend-in factor (much like an [alpha](https://en.wikipedia.org/wiki/Alpha_compositing) in image composing) that smoothly glides from 0 to 1.

#### StyleGAN-1

The main architecture of StyleGAN-1 and StyleGAN-2

StyleGAN-1 is designed as a combination of Progressive GAN with [neural style transfer](https://en.wikipedia.org/wiki/Neural_style_transfer).

The key architectural choice of StyleGAN-1 is a progressive growth mechanism, similar to Progressive GAN. Each generated image starts as a constant 

4
× × 
4
× × 
512

{\displaystyle 4\times 4\times 512}

 array, and repeatedly passed through style blocks. Each style block applies a "style latent vector" via affine transform ("adaptive instance normalization"), similar to how neural style transfer uses [Gramian matrix](https://en.wikipedia.org/wiki/Gramian_matrix). It then adds noise, and normalize (subtract the mean, then divide by the variance).

At training time, usually only one style latent vector is used per image generated, but sometimes two ("mixing regularization") in order to encourage each style block to independently perform its stylization without expecting help from other style blocks (since they might receive an entirely different style latent vector).

After training, multiple style latent vectors can be fed into each style block. Those fed to the lower layers control the large-scale styles, and those fed to the higher layers control the fine-detail styles.

Style-mixing between two images 

x
,

x
′

{\displaystyle x,x'}

 can be performed as well. First, run a gradient descent to find 

z
,

z
′

{\displaystyle z,z'}

 such that 

G
(
z
)
≈ ≈ 
x
,
G
(

z
′

)
≈ ≈ 

x
′

{\displaystyle G(z)\approx x,G(z')\approx x'}

. This is called "projecting an image back to style latent space". Then, 

z

{\displaystyle z}

 can be fed to the lower style blocks, and 

z
′

{\displaystyle z'}

 to the higher style blocks, to generate a composite image that has the large-scale style of 

x

{\displaystyle x}

, and the fine-detail style of 

x
′

{\displaystyle x'}

. Multiple images can also be composed this way.

#### StyleGAN-2

StyleGAN-2 improves upon StyleGAN-1, by using the style latent vector to transform the convolution layer's weights instead, thus solving the "blob" problem.

This was updated by the StyleGAN-2-ADA ("ADA" stands for "adaptive"), which uses invertible data augmentation as described above. It also tunes the amount of data augmentation applied by starting at zero, and gradually increasing it until an "overfitting heuristic" reaches a target level, thus the name "adaptive".

#### StyleGAN-3

StyleGAN-3 improves upon StyleGAN-2 by solving the "texture sticking" problem, which can be seen in the official videos. They analyzed the problem by the [Nyquist–Shannon sampling theorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem), and argued that the layers in the generator learned to exploit the high-frequency signal in the pixels they operate upon.

To solve this, they proposed imposing strict [lowpass filters](https://en.wikipedia.org/wiki/Low-pass_filter) between each generator's layers, so that the generator is forced to operate on the pixels in a way [faithful](https://en.wikipedia.org/wiki/Faithful_representation) to the continuous signals they represent, rather than operate on them as merely discrete signals. They further imposed rotational and translational invariance by using more [signal filters](https://en.wikipedia.org/wiki/Filter_(signal_processing)). The resulting StyleGAN-3 is able to solve the texture sticking problem, as well as generating images that rotate and translate smoothly.

## Other uses

Other than for generative and discriminative modelling of data, GANs have been used for other things.

GANs have been used for [transfer learning](https://en.wikipedia.org/wiki/Transfer_learning) to enforce the alignment of the latent feature space, such as in [deep reinforcement learning](https://en.wikipedia.org/wiki/Deep_reinforcement_learning). This works by feeding the embeddings of the source and target task to the discriminator which tries to guess the context. The resulting loss is then (inversely) backpropagated through the encoder.

## Applications

### Science

* [Iteratively reconstruct](https://en.wikipedia.org/wiki/Iterative_reconstruction) [astronomical images](https://en.wikipedia.org/wiki/Astrophotography)
* Simulate [gravitational lensing](https://en.wikipedia.org/wiki/Gravitational_lens) for dark matter research.
* Model the distribution of [dark matter](https://en.wikipedia.org/wiki/Dark_matter) in a particular direction in space and to predict the gravitational lensing that will occur.
* Model high energy jet formation and [showers](https://en.wikipedia.org/wiki/Particle_shower) through [calorimeters](https://en.wikipedia.org/wiki/Calorimeter_(particle_physics)) of [high-energy physics](https://en.wikipedia.org/wiki/Particle_physics) experiments.
* Approximate bottlenecks in computationally expensive simulations of particle physics experiments. Applications in the context of present and proposed [CERN](https://en.wikipedia.org/wiki/CERN) experiments have demonstrated the potential of these methods for accelerating simulation and/or improving simulation fidelity.
* Reconstruct velocity and scalar fields in turbulent flows.

GAN-generated molecules were validated experimentally in mice.

### Medical

One of the major concerns in medical imaging is preserving patient privacy. Due to these reasons, researchers often face difficulties in obtaining medical images for their research purposes. GAN has been used for generating [synthetic medical images](https://en.wikipedia.org/wiki/Synthetic_data), such as [MRI](https://en.wikipedia.org/wiki/Magnetic_resonance_imaging) and [PET](https://en.wikipedia.org/wiki/Positron_emission_tomography) images to address this challenge.

GAN can be used to detect [glaucomatous](https://en.wikipedia.org/wiki/Glaucoma) images helping the early diagnosis which is essential to avoid partial or total loss of vision.

GANs have been used to create [forensic facial reconstructions](https://en.wikipedia.org/wiki/Forensic_facial_reconstruction) of deceased historical figures.

### Malicious

An image generated by a 

[StyleGAN](https://en.wikipedia.org/wiki/StyleGAN)

 that looks deceptively like a photograph of a real person. This image was generated by a StyleGAN based on an analysis of portraits.Another example of a GAN-generated portrait

Concerns have been raised about the potential use of GAN-based [human image synthesis](https://en.wikipedia.org/wiki/Human_image_synthesis) for sinister purposes, e.g., to produce fake, possibly incriminating, photographs and videos.
GANs can be used to generate unique, realistic profile photos of people who do not exist, in order to automate creation of fake social media profiles.

In 2019 the state of California considered and passed on October 3, 2019, the [bill AB-602](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201920200AB602), which bans the use of human image synthesis technologies to make fake pornography without the consent of the people depicted, and [bill AB-730](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201920200AB730), which prohibits distribution of manipulated videos of a political candidate within 60 days of an election. Both bills were authored by Assembly member [Marc Berman](https://en.wikipedia.org/wiki/Marc_Berman) and signed by Governor [Gavin Newsom](https://en.wikipedia.org/wiki/Gavin_Newsom). The laws went into effect in 2020.

DARPA's Media Forensics program studies ways to counteract fake media, including fake media produced using GANs.

### Fashion, art and advertising

GANs can be used to generate art; *[The Verge](https://en.wikipedia.org/wiki/The_Verge)* wrote in March 2019 that "The images created by GANs have become the defining look of contemporary AI art." GANs can also be used to

* [inpaint](https://en.wikipedia.org/wiki/Inpainting) photographs
* generate fashion models, shadows, photorealistic renders of [interior design](https://en.wikipedia.org/wiki/Interior_design), [industrial design](https://en.wikipedia.org/wiki/Industrial_design), shoes, etc. Such networks were reported to be used by [Facebook](https://en.wikipedia.org/wiki/Facebook).

Some have worked with using GAN for artistic creativity, as "creative adversarial network". A GAN, trained on a set of 15,000 portraits from [WikiArt](https://en.wikipedia.org/wiki/WikiArt) from the 14th to the 19th century, created the 2018 painting *[Edmond de Belamy](https://en.wikipedia.org/wiki/Edmond_de_Belamy),* which sold for US$432,500.

GANs were used by the [video game modding](https://en.wikipedia.org/wiki/Mod_(video_gaming)) community to [up-scale](https://en.wikipedia.org/wiki/Image_scaling) low-resolution 2D textures in old video games by recreating them in [4k](https://en.wikipedia.org/wiki/4K_resolution) or higher resolutions via image training, and then down-sampling them to fit the game's native resolution (resembling [supersampling](https://en.wikipedia.org/wiki/Supersampling) [anti-aliasing](https://en.wikipedia.org/wiki/Spatial_anti-aliasing)).

In 2020, [Artbreeder](https://en.wikipedia.org/wiki/Artbreeder) was used to create the main antagonist in the sequel to the psychological web horror series *[Ben Drowned](https://en.wikipedia.org/wiki/Ben_Drowned)*. The author would later go on to praise GAN applications for their ability to help generate assets for independent artists who are short on budget and manpower.

In May 2020, [Nvidia](https://en.wikipedia.org/wiki/Nvidia) researchers taught an AI system (termed "GameGAN") to recreate the game of *[Pac-Man](https://en.wikipedia.org/wiki/Pac-Man)* simply by watching it being played.

In August 2019, a large dataset consisting of 12,197 MIDI songs each with paired lyrics and melody alignment was created for neural melody generation from lyrics using conditional GAN-LSTM (refer to sources at GitHub [AI Melody Generation from Lyrics](https://github.com/yy1lab/Lyrics-Conditioned-Neural-Melody-Generation)).

### Miscellaneous

GANs have been used to

* show how an individual's appearance might change with age.
* [reconstruct 3D models of objects from images](https://en.wikipedia.org/wiki/3D_reconstruction_from_multiple_images),
* generate novel objects as 3D point clouds,
* model patterns of motion in video.
* inpaint missing features in maps, transfer map styles in cartography or augment street view imagery.
* use feedback to generate images and replace image search systems.
* visualize the effect that climate change will have on specific houses.
* reconstruct an image of a person's face after listening to their voice.
* produces videos of a person speaking, given only a single photo of that person.
* recurrent sequence generation.

## History

In 1991, [Juergen Schmidhuber](https://en.wikipedia.org/wiki/J%C3%BCrgen_Schmidhuber) published "artificial curiosity", [neural networks](https://en.wikipedia.org/wiki/Neural_network) in a [zero-sum game](https://en.wikipedia.org/wiki/Zero-sum_game). The first network is a [generative model](https://en.wikipedia.org/wiki/Generative_model) that models a [probability distribution](https://en.wikipedia.org/wiki/Probability_distribution) over output patterns. The second network learns by [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent) to predict the reactions of the environment to these patterns. GANs can be regarded as a case where the environmental reaction is 1 or 0 depending on whether the first network's output is in a given set.

Other people had similar ideas but did not develop them similarly. An idea involving adversarial networks was published in a 2010 blog post by Olli Niemitalo. This idea was never implemented and did not involve [stochasticity](https://en.wikipedia.org/wiki/Stochasticity) in the generator and thus was not a generative model. An idea similar to GANs was used to model animal behavior by Wei Li, Melvin Gauci and Roderich Gross in 2013.

Another inspiration for GANs was noise-contrastive estimation, which uses the same loss function as GANs and which Goodfellow studied during his PhD in 2010–2014.

[Adversarial machine learning](https://en.wikipedia.org/wiki/Adversarial_machine_learning) has other uses besides generative modeling and can be applied to models other than neural networks. In control theory, adversarial learning based on neural networks was used in 2006 to train robust controllers in a game theoretic sense, by alternating the iterations between a minimizer policy, the controller, and a maximizer policy, the disturbance.

In 2017, a GAN was used for image enhancement focusing on realistic textures rather than pixel-accuracy, producing a higher image quality at high magnification. In 2017, the first faces were generated. These were exhibited in February 2018 at the Grand Palais. Faces generated by [StyleGAN](https://en.wikipedia.org/wiki/StyleGAN) in 2019 drew comparisons with [Deepfakes](https://en.wikipedia.org/wiki/Deepfake).

## See also

* [Artificial intelligence art](https://en.wikipedia.org/wiki/Artificial_intelligence_art)
* [Deepfake](https://en.wikipedia.org/wiki/Deepfake) – Realistic artificially generated media
* [Deep learning](https://en.wikipedia.org/wiki/Deep_learning) – Branch of machine learning
* [Diffusion model](https://en.wikipedia.org/wiki/Diffusion_model) – Technique for the generative modeling of a continuous probability distribution
* [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) – Subset of AI using generative modelsPages displaying short descriptions of redirect targets
* [Synthetic media](https://en.wikipedia.org/wiki/Synthetic_media) – Artificial production of media by automated means

## References

1. ^           Goodfellow, Ian; Pouget-Abadie, Jean; Mirza, Mehdi; Xu, Bing; Warde-Farley, David; Ozair, Sherjil; Courville, Aaron; Bengio, Yoshua (2014). [*Generative Adversarial Nets*](https://papers.nips.cc/paper/5423-generative-adversarial-nets.pdf) (PDF). Proceedings of the International Conference on Neural Information Processing Systems (NIPS 2014). pp. 2672–2680.
2. **^** Salimans, Tim; Goodfellow, Ian; Zaremba, Wojciech; Cheung, Vicki; Radford, Alec; Chen, Xi (2016). "Improved Techniques for Training GANs". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1606.03498](https://arxiv.org/abs/1606.03498) [[cs.LG](https://arxiv.org/archive/cs.LG)].
3. **^** Isola, Phillip; Zhu, Jun-Yan; Zhou, Tinghui; Efros, Alexei (2017). ["Image-to-Image Translation with Conditional Adversarial Nets"](https://phillipi.github.io/pix2pix/). *Computer Vision and Pattern Recognition*.
4. **^** Ho, Jonathon; Ermon, Stefano (2016). ["Generative Adversarial Imitation Learning"](http://papers.nips.cc/paper/6391-generative-adversarial-imitation-learning). *Advances in Neural Information Processing Systems*. **29**: 4565–4573. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1606.03476](https://arxiv.org/abs/1606.03476).
5. **^** ["Vanilla GAN (GANs in computer vision: Introduction to generative learning)"](https://theaisummer.com/gan-computer-vision/#vanilla-gan-generative-adversarial-networks-2014). *theaisummer.com*. AI Summer. April 10, 2020. [Archived](https://web.archive.org/web/20200603130655/https://theaisummer.com/gan-computer-vision/) from the original on June 3, 2020. Retrieved September 20, 2020.
6. **^** Luc, Pauline; Couprie, Camille; Chintala, Soumith; Verbeek, Jakob (November 25, 2016). "Semantic Segmentation using Adversarial Networks". *NIPS Workshop on Adversarial Training, Dec, Barcelona, Spain*. **2016**. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1611.08408](https://arxiv.org/abs/1611.08408).
7. **^** [Andrej Karpathy](https://en.wikipedia.org/wiki/Andrej_Karpathy); [Pieter Abbeel](https://en.wikipedia.org/wiki/Pieter_Abbeel); Greg Brockman; Peter Chen; Vicki Cheung; Rocky Duan; Ian Goodfellow; Durk Kingma; Jonathan Ho; Rein Houthooft; Tim Salimans; John Schulman; Ilya Sutskever; Wojciech Zaremba, [*Generative Models*](https://openai.com/blog/generative-models/), [OpenAI](https://en.wikipedia.org/wiki/OpenAI), retrieved April 7, 2016
8. **^** Mohamed, Shakir; Lakshminarayanan, Balaji (2016). "Learning in Implicit Generative Models". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1610.03483](https://arxiv.org/abs/1610.03483) [[stat.ML](https://arxiv.org/archive/stat.ML)].
9. ^   Goodfellow, Ian (April 3, 2017). "NIPS 2016 Tutorial: Generative Adversarial Networks". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1701.00160](https://arxiv.org/abs/1701.00160) [[cs.LG](https://arxiv.org/archive/cs.LG)].
10. **^** Kingma, Diederik P.; Welling, Max (May 1, 2014). "Auto-Encoding Variational Bayes". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1312.6114](https://arxiv.org/abs/1312.6114) [[stat.ML](https://arxiv.org/archive/stat.ML)].
11. **^** Rezende, Danilo Jimenez; Mohamed, Shakir; Wierstra, Daan (2014). ["Stochastic Backpropagation and Approximate Inference in Deep Generative Models"](https://proceedings.mlr.press/v32/rezende14.html). *Journal of Machine Learning Research*. **32** (2): 1278–1286. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1401.4082](https://arxiv.org/abs/1401.4082).
12. ^   Farnia, Farzan; Ozdaglar, Asuman (November 21, 2020). ["Do GANs always have Nash equilibria?"](https://proceedings.mlr.press/v119/farnia20a.html). *Proceedings of the 37th International Conference on Machine Learning*. Vol. 119. PMLR. pp. 3029–3039.
13. ^    Weng, Lilian (April 18, 2019). "From GAN to WGAN". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1904.08994](https://arxiv.org/abs/1904.08994) [[cs.LG](https://arxiv.org/archive/cs.LG)].
14. ^    Karras, Tero; Aila, Timo; Laine, Samuli; Lehtinen, Jaakko (October 1, 2017). "Progressive Growing of GANs for Improved Quality, Stability, and Variation". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1710.10196](https://arxiv.org/abs/1710.10196) [[cs.NE](https://arxiv.org/archive/cs.NE)].
15. **^** Soviany, Petru; Ardei, Claudiu; Ionescu, Radu Tudor; Leordeanu, Marius (October 22, 2019). "Image Difficulty Curriculum for Generative Adversarial Networks (CuGAN)". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1910.08967](https://arxiv.org/abs/1910.08967) [[cs.LG](https://arxiv.org/archive/cs.LG)].
16. **^** Hacohen, Guy; Weinshall, Daphna (May 24, 2019). ["On The Power of Curriculum Learning in Training Deep Networks"](https://proceedings.mlr.press/v97/hacohen19a.html). *International Conference on Machine Learning*. PMLR: 2535–2544. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1904.03626](https://arxiv.org/abs/1904.03626).
17. **^** Lin, Zinan; et al. (December 2018). [*PacGAN: the power of two samples in generative adversarial networks*](https://dl.acm.org/doi/10.5555/3326943.3327081). 32nd International Conference on Neural Information Processing Systems. pp. 1505–1514. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1712.04086](https://arxiv.org/abs/1712.04086).
18. **^** Mescheder, Lars; Geiger, Andreas; Nowozin, Sebastian (July 31, 2018). "Which Training Methods for GANs do actually Converge?". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1801.04406](https://arxiv.org/abs/1801.04406) [[cs.LG](https://arxiv.org/archive/cs.LG)].
19. ^   Brock, Andrew; Donahue, Jeff; Simonyan, Karen (September 1, 2018). [*Large Scale GAN Training for High Fidelity Natural Image Synthesis*](https://ui.adsabs.harvard.edu/abs/2018arXiv180911096B). International Conference on Learning Representations 2019. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1809.11096](https://arxiv.org/abs/1809.11096).
20. **^** Heusel, Martin; Ramsauer, Hubert; Unterthiner, Thomas; Nessler, Bernhard; Hochreiter, Sepp (2017). ["GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium"](https://proceedings.neurips.cc/paper/2017/hash/8a1d694707eb0fefe65871369074926d-Abstract.html). *Advances in Neural Information Processing Systems*. **30**. Curran Associates, Inc. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1706.08500](https://arxiv.org/abs/1706.08500).
21. **^** Zhang, Richard; Isola, Phillip; Efros, Alexei A.; Shechtman, Eli; Wang, Oliver (2018). "The Unreasonable Effectiveness of Deep Features as a Perceptual Metric". pp. 586–595. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1801.03924](https://arxiv.org/abs/1801.03924) [[cs.CV](https://arxiv.org/archive/cs.CV)].
22. **^** Borji, Ali (February 1, 2019). ["Pros and cons of GAN evaluation measures"](https://www.sciencedirect.com/science/article/pii/S1077314218304272). *Computer Vision and Image Understanding*. **179**: 41–65. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1802.03446](https://arxiv.org/abs/1802.03446). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019CVIU..179...41B](https://ui.adsabs.harvard.edu/abs/2019CVIU..179...41B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.cviu.2018.10.009](https://doi.org/10.1016%2Fj.cviu.2018.10.009). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1077-3142](https://search.worldcat.org/issn/1077-3142). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [3627712](https://api.semanticscholar.org/CorpusID:3627712).
23. **^** Hindupur, Avinash (July 15, 2022), [*The GAN Zoo*](https://github.com/hindupuravinash/the-gan-zoo), retrieved July 15, 2022
24. **^** Odena, Augustus; Olah, Christopher; Shlens, Jonathon (July 17, 2017). ["Conditional Image Synthesis with Auxiliary Classifier GANs"](https://proceedings.mlr.press/v70/odena17a.html). *International Conference on Machine Learning*. PMLR: 2642–2651. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1610.09585](https://arxiv.org/abs/1610.09585).
25. **^** Radford, Alec; Metz, Luke; Chintala, Soumith (2016). "Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks". *ICLR*. [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [11758569](https://api.semanticscholar.org/CorpusID:11758569).
26. **^** Long, Jonathan; Shelhamer, Evan; Darrell, Trevor (2015). ["Fully Convolutional Networks for Semantic Segmentation"](https://openaccess.thecvf.com/content_cvpr_2015/html/Long_Fully_Convolutional_Networks_2015_CVPR_paper.html). *CVF*: 3431–3440.
27. **^** Zhang, Han; Goodfellow, Ian; Metaxas, Dimitris; Odena, Augustus (May 24, 2019). ["Self-Attention Generative Adversarial Networks"](https://proceedings.mlr.press/v97/zhang19d.html). *International Conference on Machine Learning*. PMLR: 7354–7363.
28. **^** Larsen, Anders Boesen Lindbo; Sønderby, Søren Kaae; Larochelle, Hugo; Winther, Ole (June 11, 2016). ["Autoencoding beyond pixels using a learned similarity metric"](https://proceedings.mlr.press/v48/larsen16.html). *International Conference on Machine Learning*. PMLR: 1558–1566. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1512.09300](https://arxiv.org/abs/1512.09300).
29. **^** Jiang, Yifan; Chang, Shiyu; Wang, Zhangyang (December 8, 2021). "TransGAN: Two Pure Transformers Can Make One Strong GAN, and That Can Scale Up". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2102.07074](https://arxiv.org/abs/2102.07074) [[cs.CV](https://arxiv.org/archive/cs.CV)].
30. **^** Grover, Aditya; Dhar, Manik; Ermon, Stefano (May 1, 2017). "Flow-GAN: Combining Maximum Likelihood and Adversarial Learning in Generative Models". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1705.08868](https://arxiv.org/abs/1705.08868) [[cs.LG](https://arxiv.org/archive/cs.LG)].
31. **^** Arjovsky, Martin; Bottou, Léon (January 1, 2017). "Towards Principled Methods for Training Generative Adversarial Networks". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1701.04862](https://arxiv.org/abs/1701.04862) [[stat.ML](https://arxiv.org/archive/stat.ML)].
32. **^** Goodfellow, Ian J. (December 1, 2014). "On distinguishability criteria for estimating generative models". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1412.6515](https://arxiv.org/abs/1412.6515) [[stat.ML](https://arxiv.org/archive/stat.ML)].
33. **^** Goodfellow, Ian (August 31, 2016). ["Generative Adversarial Networks (GANs), Presentation at Berkeley Artificial Intelligence Lab"](https://www.iangoodfellow.com/slides/2016-08-31-Berkeley.pdf) (PDF). [Archived](https://web.archive.org/web/20220508101103/https://www.iangoodfellow.com/slides/2016-08-31-Berkeley.pdf) (PDF) from the original on May 8, 2022.
34. **^** Lim, Jae Hyun; Ye, Jong Chul (May 8, 2017). "Geometric GAN". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1705.02894](https://arxiv.org/abs/1705.02894) [[stat.ML](https://arxiv.org/archive/stat.ML)].
35. **^** Mao, Xudong; Li, Qing; Xie, Haoran; Lau, Raymond Y. K.; Wang, Zhen; Paul Smolley, Stephen (2017). ["Least Squares Generative Adversarial Networks"](https://openaccess.thecvf.com/content_iccv_2017/html/Mao_Least_Squares_Generative_ICCV_2017_paper.html). *2017 IEEE International Conference on Computer Vision (ICCV)*. pp. 2794–2802. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1611.04076](https://arxiv.org/abs/1611.04076). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/ICCV.2017.304](https://doi.org/10.1109%2FICCV.2017.304). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-5386-1032-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5386-1032-9).
36. **^** Makhzani, Alireza; Shlens, Jonathon; Jaitly, Navdeep; [Goodfellow, Ian](https://en.wikipedia.org/wiki/Ian_Goodfellow); [Frey, Brendan](https://en.wikipedia.org/wiki/Brendan_Frey) (2016). "Adversarial Autoencoders". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1511.05644](https://arxiv.org/abs/1511.05644) [[cs.LG](https://arxiv.org/archive/cs.LG)].
37. **^** Barber, David; Agakov, Felix (December 9, 2003). ["The IM algorithm: a variational approach to Information Maximization"](https://dl.acm.org/doi/abs/10.5555/2981345.2981371). *Proceedings of the 16th International Conference on Neural Information Processing Systems*. NIPS'03. Cambridge, MA, USA: MIT Press: 201–208.
38. **^** Chen, Xi; Duan, Yan; Houthooft, Rein; Schulman, John; Sutskever, Ilya; Abbeel, Pieter (2016). ["InfoGAN: Interpretable Representation Learning by Information Maximizing Generative Adversarial Nets"](https://proceedings.neurips.cc/paper/2016/hash/7c9d0b1f96aebd7b5eca8c3edaa19ebb-Abstract.html). *Advances in Neural Information Processing Systems*. **29**. Curran Associates, Inc. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1606.03657](https://arxiv.org/abs/1606.03657).
39. **^** Donahue, Jeff; Krähenbühl, Philipp; [Darrell, Trevor](https://en.wikipedia.org/wiki/Trevor_Darrell) (2016). "Adversarial Feature Learning". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1605.09782](https://arxiv.org/abs/1605.09782) [[cs.LG](https://arxiv.org/archive/cs.LG)].
40. **^** Dumoulin, Vincent; Belghazi, Ishmael; Poole, Ben; Mastropietro, Olivier; Arjovsky, Alex; Courville, Aaron (2016). "Adversarially Learned Inference". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1606.00704](https://arxiv.org/abs/1606.00704) [[stat.ML](https://arxiv.org/archive/stat.ML)].
41. **^** Xi Chen; Yan Duan; Rein Houthooft; John Schulman; [Ilya Sutskever](https://en.wikipedia.org/wiki/Ilya_Sutskever); [Pieter Abeel](https://en.wikipedia.org/wiki/Pieter_Abbeel) (2016). "InfoGAN: Interpretable Representation Learning by Information Maximizing Generative Adversarial Nets". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1606.03657](https://arxiv.org/abs/1606.03657) [[cs.LG](https://arxiv.org/archive/cs.LG)].
42. **^** Zhirui Zhang; Shujie Liu; Mu Li; Ming Zhou; Enhong Chen (October 2018). ["Bidirectional Generative Adversarial Networks for Neural Machine Translation"](https://www.aclweb.org/anthology/K18-1019.pdf) (PDF). pp. 190–199.
43. **^** Zhu, Jun-Yan; Park, Taesung; Isola, Phillip; Efros, Alexei A. (2017). "Unpaired Image-To-Image Translation Using Cycle-Consistent Adversarial Networks". pp. 2223–2232. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1703.10593](https://arxiv.org/abs/1703.10593) [[cs.CV](https://arxiv.org/archive/cs.CV)].
44. **^** Isola, Phillip; Zhu, Jun-Yan; Zhou, Tinghui; Efros, Alexei A. (2017). "Image-To-Image Translation With Conditional Adversarial Networks". pp. 1125–1134. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1611.07004](https://arxiv.org/abs/1611.07004) [[cs.CV](https://arxiv.org/archive/cs.CV)].
45. **^** Brownlee, Jason (August 22, 2019). ["A Gentle Introduction to BigGAN the Big Generative Adversarial Network"](https://machinelearningmastery.com/a-gentle-introduction-to-the-biggan/). *Machine Learning Mastery*. Retrieved July 15, 2022.
46. **^** Shengyu, Zhao; Zhijian, Liu; Ji, Lin; Jun-Yan, Zhu; Song, Han (2020). ["Differentiable Augmentation for Data-Efficient GAN Training"](https://proceedings.neurips.cc/paper/2020/hash/55479c55ebd1efd3ff125f1337100388-Abstract.html). *Advances in Neural Information Processing Systems*. **33**. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2006.10738](https://arxiv.org/abs/2006.10738).
47. ^    Tero, Karras; Miika, Aittala; Janne, Hellsten; Samuli, Laine; Jaakko, Lehtinen; Timo, Aila (2020). ["Training Generative Adversarial Networks with Limited Data"](https://proceedings.neurips.cc/paper/2020/hash/8d30aa96e72440759f74bd2306c1fa3d-Abstract.html). *Advances in Neural Information Processing Systems*. **33**.
48. **^** Shaham, Tamar Rott; Dekel, Tali; Michaeli, Tomer (October 2019). ["SinGAN: Learning a Generative Model from a Single Natural Image"](https://dx.doi.org/10.1109/iccv.2019.00467). *2019 IEEE/CVF International Conference on Computer Vision (ICCV)*. IEEE. pp. 4569–4579. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1905.01164](https://arxiv.org/abs/1905.01164). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/iccv.2019.00467](https://doi.org/10.1109%2Ficcv.2019.00467). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-7281-4803-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-7281-4803-8). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [145052179](https://api.semanticscholar.org/CorpusID:145052179).
49. **^** Karras, Tero; Laine, Samuli; Aila, Timo (June 2019). ["A Style-Based Generator Architecture for Generative Adversarial Networks"](https://dx.doi.org/10.1109/cvpr.2019.00453). *2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)*. IEEE. pp. 4396–4405. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1812.04948](https://arxiv.org/abs/1812.04948). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/cvpr.2019.00453](https://doi.org/10.1109%2Fcvpr.2019.00453). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-7281-3293-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-7281-3293-8). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [54482423](https://api.semanticscholar.org/CorpusID:54482423).
50. **^** Karras, Tero; Laine, Samuli; Aittala, Miika; Hellsten, Janne; Lehtinen, Jaakko; Aila, Timo (June 2020). ["Analyzing and Improving the Image Quality of StyleGAN"](https://dx.doi.org/10.1109/cvpr42600.2020.00813). *2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)*. IEEE. pp. 8107–8116. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1912.04958](https://arxiv.org/abs/1912.04958). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/cvpr42600.2020.00813](https://doi.org/10.1109%2Fcvpr42600.2020.00813). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-7281-7168-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-7281-7168-5). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [209202273](https://api.semanticscholar.org/CorpusID:209202273).
51. **^** Timo, Karras, Tero Aittala, Miika Laine, Samuli Härkönen, Erik Hellsten, Janne Lehtinen, Jaakko Aila (June 23, 2021). *Alias-Free Generative Adversarial Networks*. [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [1269560084](https://search.worldcat.org/oclc/1269560084).`{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book)}}`:  CS1 maint: multiple names: authors list ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_multiple_names:_authors_list))
52. **^** Karras, Tero; Aittala, Miika; Laine, Samuli; Härkönen, Erik; Hellsten, Janne; Lehtinen, Jaakko; Aila, Timo. ["Alias-Free Generative Adversarial Networks (StyleGAN3)"](https://nvlabs.github.io/stylegan3). *nvlabs.github.io*. Retrieved July 16, 2022.
53. **^** Li, Bonnie; François-Lavet, Vincent; Doan, Thang; Pineau, Joelle (February 14, 2021). "Domain Adversarial Reinforcement Learning". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2102.07097](https://arxiv.org/abs/2102.07097) [[cs.LG](https://arxiv.org/archive/cs.LG)].
54. **^** Schawinski, Kevin; Zhang, Ce; Zhang, Hantian; Fowler, Lucas; Santhanam, Gokula Krishnan (February 1, 2017). ["Generative Adversarial Networks recover features in astrophysical images of galaxies beyond the deconvolution limit"](https://doi.org/10.1093%2Fmnrasl%2Fslx008). *Monthly Notices of the Royal Astronomical Society: Letters*. **467** (1): L110–L114. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1702.00403](https://arxiv.org/abs/1702.00403). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2017MNRAS.467L.110S](https://ui.adsabs.harvard.edu/abs/2017MNRAS.467L.110S). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/mnrasl/slx008](https://doi.org/10.1093%2Fmnrasl%2Fslx008). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [7213940](https://api.semanticscholar.org/CorpusID:7213940).
55. **^** Kincade, Kathy. ["Researchers Train a Neural Network to Study Dark Matter"](https://www.rdmag.com/news/2019/05/researchers-train-neural-network-study-dark-matter). R&D Magazine.
56. **^** Kincade, Kathy (May 16, 2019). ["CosmoGAN: Training a neural network to study dark matter"](https://phys.org/news/2019-05-cosmogan-neural-network-dark.html). *Phys.org*.
57. **^** ["Training a neural network to study dark matter"](https://www.sciencedaily.com/releases/2019/05/190516145206.htm). *Science Daily*. May 16, 2019.
58. **^** at 06:13, Katyanna Quach 20 May 2019. ["Cosmoboffins use neural networks to build dark matter maps the easy way"](https://www.theregister.co.uk/2019/05/20/neural_networks_dark_matter/). *www.theregister.co.uk*. Retrieved May 20, 2019.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web)}}`:  CS1 maint: numeric names: authors list ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_numeric_names:_authors_list))
59. **^** Mustafa, Mustafa; Bard, Deborah; Bhimji, Wahid; Lukić, Zarija; Al-Rfou, Rami; Kratochvil, Jan M. (May 6, 2019). ["CosmoGAN: creating high-fidelity weak lensing convergence maps using Generative Adversarial Networks"](https://doi.org/10.1186%2Fs40668-019-0029-9). *Computational Astrophysics and Cosmology*. **6** (1) 1. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1706.02390](https://arxiv.org/abs/1706.02390). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019ComAC...6....1M](https://ui.adsabs.harvard.edu/abs/2019ComAC...6....1M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1186/s40668-019-0029-9](https://doi.org/10.1186%2Fs40668-019-0029-9). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2197-7909](https://search.worldcat.org/issn/2197-7909). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [126034204](https://api.semanticscholar.org/CorpusID:126034204).
60. **^** Paganini, Michela; de Oliveira, Luke; Nachman, Benjamin (2017). "Learning Particle Physics by Example: Location-Aware Generative Adversarial Networks for Physics Synthesis". *Computing and Software for Big Science*. **1** (1): 4. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1701.05927](https://arxiv.org/abs/1701.05927). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2017CSBS....1....4D](https://ui.adsabs.harvard.edu/abs/2017CSBS....1....4D). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s41781-017-0004-6](https://doi.org/10.1007%2Fs41781-017-0004-6). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [88514467](https://api.semanticscholar.org/CorpusID:88514467).
61. **^** Paganini, Michela; de Oliveira, Luke; Nachman, Benjamin (2018). "Accelerating Science with Generative Adversarial Networks: An Application to 3D Particle Showers in Multi-Layer Calorimeters". *Physical Review Letters*. **120** (4) 042003. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1705.02355](https://arxiv.org/abs/1705.02355). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2018PhRvL.120d2003P](https://ui.adsabs.harvard.edu/abs/2018PhRvL.120d2003P). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevLett.120.042003](https://doi.org/10.1103%2FPhysRevLett.120.042003). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [29437460](https://pubmed.ncbi.nlm.nih.gov/29437460). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [3330974](https://api.semanticscholar.org/CorpusID:3330974).
62. **^** Paganini, Michela; de Oliveira, Luke; Nachman, Benjamin (2018). "CaloGAN: Simulating 3D High Energy Particle Showers in Multi-Layer Electromagnetic Calorimeters with Generative Adversarial Networks". *Phys. Rev. D*. **97** (1) 014021. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1712.10321](https://arxiv.org/abs/1712.10321). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2018PhRvD..97a4021P](https://ui.adsabs.harvard.edu/abs/2018PhRvD..97a4021P). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevD.97.014021](https://doi.org/10.1103%2FPhysRevD.97.014021). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [41265836](https://api.semanticscholar.org/CorpusID:41265836).
63. **^** Erdmann, Martin; Glombitza, Jonas; Quast, Thorben (2019). "Precise Simulation of Electromagnetic Calorimeter Showers Using a Wasserstein Generative Adversarial Network". *Computing and Software for Big Science*. **3** (1): 4. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1807.01954](https://arxiv.org/abs/1807.01954). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019CSBS....3....4E](https://ui.adsabs.harvard.edu/abs/2019CSBS....3....4E). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s41781-018-0019-7](https://doi.org/10.1007%2Fs41781-018-0019-7). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [54216502](https://api.semanticscholar.org/CorpusID:54216502).
64. **^** Musella, Pasquale; Pandolfi, Francesco (2018). "Fast and Accurate Simulation of Particle Detectors Using Generative Adversarial Networks". *Computing and Software for Big Science*. **2** (1): 8. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1805.00850](https://arxiv.org/abs/1805.00850). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2018CSBS....2....8M](https://ui.adsabs.harvard.edu/abs/2018CSBS....2....8M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s41781-018-0015-y](https://doi.org/10.1007%2Fs41781-018-0015-y). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [119474793](https://api.semanticscholar.org/CorpusID:119474793).
65. **^** ["Deep generative models for fast shower simulation in ATLAS"](https://atlas.web.cern.ch/Atlas/GROUPS/PHYSICS/PUBNOTES/ATL-SOFT-PUB-2018-001/). 2018.
66. **^** SHiP, Collaboration (2019). "Fast simulation of muons produced at the SHiP experiment using Generative Adversarial Networks". *Journal of Instrumentation*. **14** (11) 11028. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1909.04451](https://arxiv.org/abs/1909.04451). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019JInst..14P1028A](https://ui.adsabs.harvard.edu/abs/2019JInst..14P1028A). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1088/1748-0221/14/11/P11028](https://doi.org/10.1088%2F1748-0221%2F14%2F11%2FP11028). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [202542604](https://api.semanticscholar.org/CorpusID:202542604).
67. **^** Nista, Ludovico; Pitsch, Heinz; Schumann, Christoph D. K.; Bode, Mathis; Grenga, Temistocle; MacArt, Jonathan F.; Attili, Antonio (June 4, 2024). ["Influence of adversarial training on super-resolution turbulence reconstruction"](https://link.aps.org/doi/10.1103/PhysRevFluids.9.064601). *Physical Review Fluids*. **9** (6) 064601. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2308.16015](https://arxiv.org/abs/2308.16015). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2024PhRvF...9f4601N](https://ui.adsabs.harvard.edu/abs/2024PhRvF...9f4601N). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1103/PhysRevFluids.9.064601](https://doi.org/10.1103%2FPhysRevFluids.9.064601).
68. **^** Nista, L.; Schumann, C. D. K.; Grenga, T.; Attili, A.; Pitsch, H. (January 1, 2023). ["Investigation of the generalization capability of a generative adversarial network for large eddy simulation of turbulent premixed reacting flows"](https://www.sciencedirect.com/science/article/pii/S1540748922002851). *Proceedings of the Combustion Institute*. **39** (4): 5279–5288. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2023PComI..39.5279N](https://ui.adsabs.harvard.edu/abs/2023PComI..39.5279N). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.proci.2022.07.244](https://doi.org/10.1016%2Fj.proci.2022.07.244). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[20.500.11820/d36801a4-ead5-4379-92a4-020a509112ec](https://hdl.handle.net/20.500.11820%2Fd36801a4-ead5-4379-92a4-020a509112ec). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1540-7489](https://search.worldcat.org/issn/1540-7489).
69. **^** Fukami, Kai; Fukagata, Koji; Taira, Kunihiko (August 1, 2020). "Assessment of supervised machine learning methods for fluid flows". *Theoretical and Computational Fluid Dynamics*. **34** (4): 497–519. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2001.09618](https://arxiv.org/abs/2001.09618). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2020ThCFD..34..497F](https://ui.adsabs.harvard.edu/abs/2020ThCFD..34..497F). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s00162-020-00518-y](https://doi.org/10.1007%2Fs00162-020-00518-y). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1432-2250](https://search.worldcat.org/issn/1432-2250).
70. **^** Zhavoronkov, Alex (2019). "Deep learning enables rapid identification of potent DDR1 kinase inhibitors". *Nature Biotechnology*. **37** (9): 1038–1040. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41587-019-0224-x](https://doi.org/10.1038%2Fs41587-019-0224-x). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [31477924](https://pubmed.ncbi.nlm.nih.gov/31477924). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [201716327](https://api.semanticscholar.org/CorpusID:201716327).
71. **^** Barber, Gregory. ["A Molecule Designed By AI Exhibits "Druglike" Qualities"](https://www.wired.com/story/molecule-designed-ai-exhibits-druglike-qualities/). *Wired*.
72. **^** Moradi, M; Demirel, H (2024). "Alzheimer's disease classification using 3D conditional progressive GAN-and LDA-based data selection". *Signal, Image and Video Processing*. **18** (2): 1847–1861. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s11760-023-02878-4](https://doi.org/10.1007%2Fs11760-023-02878-4).
73. **^** Bisneto, Tomaz Ribeiro Viana; de Carvalho Filho, Antonio Oseas; Magalhães, Deborah Maria Vieira (February 2020). "Generative adversarial network and texture features applied to automatic glaucoma detection". *Applied Soft Computing*. **90** 106165. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.asoc.2020.106165](https://doi.org/10.1016%2Fj.asoc.2020.106165). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [214571484](https://api.semanticscholar.org/CorpusID:214571484).
74. **^** [*Reconstruction of the Roman Emperors: Interview with Daniel Voshart*](https://www.youtube.com/watch?v=5mr6-JbuLrQ), November 16, 2020, retrieved June 3, 2022
75. **^** msmash (February 14, 2019). ["'This Person Does Not Exist' Website Uses AI To Create Realistic Yet Horrifying Faces"](https://tech.slashdot.org/story/19/02/14/199200/this-person-does-not-exist-website-uses-ai-to-create-realistic-yet-horrifying-faces). *Slashdot*. Retrieved February 16, 2019.
76. **^** Doyle, Michael (May 16, 2019). ["John Beasley lives on Saddlehorse Drive in Evansville. Or does he?"](https://www.courierpress.com/story/news/crime/2019/05/16/john-beasley-lives-saddlehorse-drive-evansville-does-he/3700111002/). Courier and Press.
77. **^** Targett, Ed (May 16, 2019). "California moves closer to making deepfake pornography illegal". Computer Business Review.
78. **^** 
Mihalcik, Carrie (October 4, 2019). ["California laws seek to crack down on deepfakes in politics and porn"](https://www.cnet.com/news/california-laws-seek-to-crack-down-on-deepfakes-in-politics-and-porn/). *[cnet.com](https://en.wikipedia.org/wiki/Cnet.com)*. [CNET](https://en.wikipedia.org/wiki/CNET). Retrieved October 13, 2019.
79. **^** Knight, Will (August 7, 2018). ["The Defense Department has produced the first tools for catching deepfakes"](https://www.technologyreview.com/s/611726/the-defense-department-has-produced-the-first-tools-for-catching-deepfakes/). *MIT Technology Review*.
80. **^** Vincent, James (March 5, 2019). ["A never-ending stream of AI art goes up for auction"](https://www.theverge.com/2019/3/5/18251267/ai-art-gans-mario-klingemann-auction-sothebys-technology). *The Verge*. Retrieved June 13, 2020.
81. **^** Yu, Jiahui, et al. "[Generative image inpainting with contextual attention](http://openaccess.thecvf.com/content_cvpr_2018/papers/Yu_Generative_Image_Inpainting_CVPR_2018_paper.pdf)." Proceedings of the IEEE conference on computer vision and pattern recognition. 2018.
82. **^** Wong, Ceecee (May 27, 2019). ["The Rise of AI Supermodels"](https://www.cdotrends.com/story/14300/rise-ai-supermodels). *CDO Trends*.
83. **^** Taif, K.; Ugail, H.; Mehmood, I. (2020). "Cast Shadow Generation Using Generative Adversarial Networks". *Computational Science – ICCS 2020*. Lecture Notes in Computer Science. Vol. 12141. pp. 481–495. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-030-50426-7_36](https://doi.org/10.1007%2F978-3-030-50426-7_36). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-030-50425-0](https://en.wikipedia.org/wiki/Special:BookSources/978-3-030-50425-0). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [7302543](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7302543).
84. **^** Wei, Jerry (July 3, 2019). ["Generating Shoe Designs with Machine Learning"](https://web.archive.org/web/20200430163354/https://towardsdatascience.com/generating-shoe-designs-with-deep-learning-5dde432a23b8). *Medium*. Archived from [the original](https://towardsdatascience.com/generating-shoe-designs-with-deep-learning-5dde432a23b8) on April 30, 2020. Retrieved November 6, 2019.
85. **^** Greenemeier, Larry (June 20, 2016). ["When Will Computers Have Common Sense? Ask Facebook"](https://www.scientificamerican.com/article/when-will-computers-have-common-sense-ask-facebook/). *Scientific American*. Retrieved July 31, 2016.
86. **^** Elgammal, Ahmed; Liu, Bingchen; Elhoseiny, Mohamed; Mazzone, Marian (2017). "CAN: Creative Adversarial Networks, Generating "Art" by Learning About Styles and Deviating from Style Norms". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1706.07068](https://arxiv.org/abs/1706.07068) [[cs.AI](https://arxiv.org/archive/cs.AI)].
87. **^** Mazzone, Marian; Ahmed Elgammal (February 21, 2019). ["Art, Creativity, and the Potential of Artificial Intelligence"](https://doi.org/10.3390%2Farts8010026). *Arts*. **8**: 26. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3390/arts8010026](https://doi.org/10.3390%2Farts8010026).
88. **^** Cohn, Gabe (October 25, 2018). ["AI Art at Christie's Sells for $432,500"](https://www.nytimes.com/2018/10/25/arts/design/ai-art-sold-christies.html). *The New York Times*.
89. **^** Tang, Xiaoou; Qiao, Yu; Loy, Chen Change; Dong, Chao; Liu, Yihao; Gu, Jinjin; Wu, Shixiang; Yu, Ke; Wang, Xintao (September 1, 2018). "ESRGAN: Enhanced Super-Resolution Generative Adversarial Networks". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1809.00219](https://arxiv.org/abs/1809.00219) [[cs.CV](https://arxiv.org/archive/cs.CV)].
90. **^** Allen, Eric Van (July 8, 2020). ["An Infamous Zelda Creepypasta Saga Is Using Artificial Intelligence to Craft Its Finale"](https://web.archive.org/web/20221107030028/https://www.usgamer.net/articles/ben-drowned-zelda-creepypasta-finale-artificial-intelligence). *USgamer*. Archived from [the original](https://www.usgamer.net/articles/ben-drowned-zelda-creepypasta-finale-artificial-intelligence) on November 7, 2022. Retrieved November 7, 2022.
91. **^** arcadeattack (September 28, 2020). ["Arcade Attack Podcast – September (4 of 4) 2020 - Alex Hall (Ben Drowned) - Interview"](https://www.arcadeattack.co.uk/podcast-september-4-2020/). *Arcade Attack*. Retrieved November 7, 2022.
92. **^** ["Nvidia's AI recreates Pac-Man from scratch just by watching it being played"](https://www.theverge.com/2020/5/22/21266251/nvidia-ai-gamegan-recreate-pac-man-virutal-environment). *The Verge*. May 22, 2020.
93. **^** Seung Wook Kim; Zhou, Yuhao; Philion, Jonah; Torralba, Antonio; Fidler, Sanja (2020). "Learning to Simulate Dynamic Environments with GameGAN". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2005.12126](https://arxiv.org/abs/2005.12126) [[cs.CV](https://arxiv.org/archive/cs.CV)].
94. **^** Yu, Yi; Canales, Simon (2021). "Conditional LSTM-GAN for Melody Generation from Lyrics". *ACM Transactions on Multimedia Computing, Communications, and Applications*. **17**: 1–20. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1908.05551](https://arxiv.org/abs/1908.05551). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3424116](https://doi.org/10.1145%2F3424116). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1551-6857](https://search.worldcat.org/issn/1551-6857). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [199668828](https://api.semanticscholar.org/CorpusID:199668828).
95. **^** Antipov, Grigory; Baccouche, Moez; Dugelay, Jean-Luc (2017). "Face Aging With Conditional Generative Adversarial Networks". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1702.01983](https://arxiv.org/abs/1702.01983) [[cs.CV](https://arxiv.org/archive/cs.CV)].
96. **^** ["3D Generative Adversarial Network"](http://3dgan.csail.mit.edu/). *3dgan.csail.mit.edu*.
97. **^** Achlioptas, Panos; Diamanti, Olga; Mitliagkas, Ioannis; Guibas, Leonidas (2018). "Learning Representations and Generative Models for 3D Point Clouds". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1707.02392](https://arxiv.org/abs/1707.02392) [[cs.CV](https://arxiv.org/archive/cs.CV)].
98. **^** Vondrick, Carl; Pirsiavash, Hamed; Torralba, Antonio (2016). ["Generating Videos with Scene Dynamics"](https://www.cs.columbia.edu/~vondrick/tinyvideo/). *carlvondrick.com*. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1609.02612](https://arxiv.org/abs/1609.02612). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2016arXiv160902612V](https://ui.adsabs.harvard.edu/abs/2016arXiv160902612V).
99. **^** Kang, Yuhao; Gao, Song; Roth, Rob (2019). ["Transferring Multiscale Map Styles Using Generative Adversarial Networks"](https://geods.geography.wisc.edu/archives/1192). *International Journal of Cartography*. **5** (2–3): 115–141. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1905.02200](https://arxiv.org/abs/1905.02200). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019IJCar...5..115K](https://ui.adsabs.harvard.edu/abs/2019IJCar...5..115K). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1080/23729333.2019.1615729](https://doi.org/10.1080%2F23729333.2019.1615729). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [146808465](https://api.semanticscholar.org/CorpusID:146808465).
100. **^** Wijnands, Jasper; Nice, Kerry; Thompson, Jason; Zhao, Haifeng; Stevenson, Mark (2019). "Streetscape augmentation using generative adversarial networks: Insights related to health and wellbeing". *Sustainable Cities and Society*. **49** 101602. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1905.06464](https://arxiv.org/abs/1905.06464). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019SusCS..4901602W](https://ui.adsabs.harvard.edu/abs/2019SusCS..4901602W). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.scs.2019.101602](https://doi.org/10.1016%2Fj.scs.2019.101602). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [155100183](https://api.semanticscholar.org/CorpusID:155100183).
101. **^** Ukkonen, Antti; Joona, Pyry; Ruotsalo, Tuukka (2020). ["Generating Images Instead of Retrieving Them"](https://doi.org/10.1145/3397271.3401129). *Proceedings of the 43rd International ACM SIGIR Conference on Research and Development in Information Retrieval*. pp. 1329–1338. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3397271.3401129](https://doi.org/10.1145%2F3397271.3401129). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[10138/328471](https://hdl.handle.net/10138%2F328471). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-8016-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-8016-4). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [220730163](https://api.semanticscholar.org/CorpusID:220730163).
102. **^** ["AI can show us the ravages of climate change"](https://www.technologyreview.com/f/613547/ai-can-show-us-the-ravages-of-climate-change/). *MIT Technology Review*. May 16, 2019.
103. **^** Christian, Jon (May 28, 2019). ["ASTOUNDING AI GUESSES WHAT YOU LOOK LIKE BASED ON YOUR VOICE"](https://futurism.com/the-byte/ai-guesses-appearance-voice). Futurism.
104. **^** Kulp, Patrick (May 23, 2019). ["Samsung's AI Lab Can Create Fake Video Footage From a Single Headshot"](https://www.adweek.com/digital/samsungs-ai-lab-can-create-fake-video-footage-from-a-single-headshot/). *AdWeek*.
105. **^** Mohammad Navid Fekri; Ananda Mohon Ghosh; Katarina Grolinger (2020). ["Generating Energy Data for Machine Learning with Recurrent Generative Adversarial Networks"](https://doi.org/10.3390%2Fen13010130). *Energies*. **13** (1): 130. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3390/en13010130](https://doi.org/10.3390%2Fen13010130).
106. **^** [Schmidhuber, Jürgen](https://en.wikipedia.org/wiki/Juergen_Schmidhuber) (1991). "A possibility for implementing curiosity and boredom in model-building neural controllers". *Proc. SAB'1991*. MIT Press/Bradford Books. pp. 222–227.
107. **^** [Schmidhuber, Jürgen](https://en.wikipedia.org/wiki/Juergen_Schmidhuber) (2020). "Generative Adversarial Networks are Special Cases of Artificial Curiosity (1990) and also Closely Related to Predictability Minimization (1991)". *Neural Networks*. **127**: 58–66. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1906.04493](https://arxiv.org/abs/1906.04493). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.neunet.2020.04.008](https://doi.org/10.1016%2Fj.neunet.2020.04.008). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [32334341](https://pubmed.ncbi.nlm.nih.gov/32334341). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [216056336](https://api.semanticscholar.org/CorpusID:216056336).
108. **^** Niemitalo, Olli (February 24, 2010). ["A method for training artificial neural networks to generate missing data within a variable context"](http://yehar.com:80/blog/?p=167). *Internet Archive (Wayback Machine)*. [Archived](https://web.archive.org/web/20120312111546/http://yehar.com/blog/?p=167) from the original on March 12, 2012. Retrieved February 22, 2019.
109. **^** Li, Wei; Gauci, Melvin; Gross, Roderich (July 6, 2013). "Proceeding of the fifteenth annual conference on Genetic and evolutionary computation conference - GECCO '13". *Proceedings of the 15th Annual Conference on Genetic and Evolutionary Computation (GECCO 2013)*. Amsterdam, the Netherlands: ACM. pp. 223–230. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/2463372.2465801](https://doi.org/10.1145%2F2463372.2465801). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-1963-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-1963-8).
110. **^** Gutmann, Michael; Hyvärinen, Aapo. ["Noise-Contrastive Estimation"](http://proceedings.mlr.press/v9/gutmann10a/gutmann10a.pdf) (PDF). *International Conference on AI and Statistics*.
111. **^** Abu-Khalaf, Murad; Lewis, Frank L.; Huang, Jie (July 1, 2008). "Neurodynamic Programming and Zero-Sum Games for Constrained Control Systems". *IEEE Transactions on Neural Networks*. **19** (7): 1243–1252. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2008ITNN...19.1243A](https://ui.adsabs.harvard.edu/abs/2008ITNN...19.1243A). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TNN.2008.2000204](https://doi.org/10.1109%2FTNN.2008.2000204). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [15680448](https://api.semanticscholar.org/CorpusID:15680448).
112. **^** Abu-Khalaf, Murad; Lewis, Frank L.; Huang, Jie (December 1, 2006). "Policy Iterations on the Hamilton–Jacobi–Isaacs Equation for *H*∞ State Feedback Control With Input Saturation". *IEEE Transactions on Automatic Control*. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TAC.2006.884959](https://doi.org/10.1109%2FTAC.2006.884959). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1338976](https://api.semanticscholar.org/CorpusID:1338976).
113. **^** Sajjadi, Mehdi S. M.; Schölkopf, Bernhard; Hirsch, Michael (December 23, 2016). "EnhanceNet: Single Image Super-Resolution Through Automated Texture Synthesis". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1612.07919](https://arxiv.org/abs/1612.07919) [[cs.CV](https://arxiv.org/archive/cs.CV)].
114. **^** ["This Person Does Not Exist: Neither Will Anything Eventually with AI"](https://medium.com/@alagraphy/this-person-does-not-exist-neither-will-anything-if-artificial-intelligence-keeps-learning-1a9fcba728f). March 20, 2019.
115. **^** ["ARTificial Intelligence enters the History of Art"](https://www.issuewire.com/artificial-intelligence-enters-the-history-of-art-1620667772563815). December 28, 2018.
116. **^** Tom Février (February 17, 2019). ["Le scandale de l'intelligence ARTificielle"](https://link.medium.com/MYqBrGHIKV).
117. **^** ["StyleGAN: Official TensorFlow Implementation"](https://github.com/NVlabs/stylegan). March 2, 2019 – via GitHub.
118. **^** Paez, Danny (February 13, 2019). ["This Person Does Not Exist Is the Best One-Off Website of 2019"](https://www.inverse.com/article/53280-this-person-does-not-exist-gans-website=website=Inverse). Retrieved February 16, 2019.
119. **^** Beschizza, Rob (February 15, 2019). ["This Person Does Not Exist"](https://boingboing.net/2019/02/15/this-person-does-not-exist.html). *Boing-Boing*. Retrieved February 16, 2019.
120. **^** Horev, Rani (December 26, 2018). ["Style-based GANs – Generating and Tuning Realistic Artificial Faces"](https://web.archive.org/web/20201105101517/https://www.lyrn.ai/2018/12/26/a-style-based-generator-architecture-for-generative-adversarial-networks/). *Lyrn.AI*. Archived from [the original](https://www.lyrn.ai/2018/12/26/a-style-based-generator-architecture-for-generative-adversarial-networks/) on November 5, 2020. Retrieved February 16, 2019.

## External links

* Knight, Will. ["5 Big Predictions for Artificial Intelligence in 2017"](https://www.technologyreview.com/s/603216/5-big-predictions-for-artificial-intelligence-in-2017/). *MIT Technology Review*. Retrieved January 5, 2017.
* Karras, Tero; Laine, Samuli; Aila, Timo (2018). "A Style-Based Generator Architecture for Generative Adversarial Networks". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1812.04948](https://arxiv.org/abs/1812.04948) [[cs.NE](https://arxiv.org/archive/cs.NE)].
* [This Person Does Not Exist](https://www.thispersondoesnotexist.com/) –  photorealistic images of people who do not exist, generated by [StyleGAN](https://en.wikipedia.org/wiki/StyleGAN)
* [This Cat Does Not Exist](https://thiscatdoesnotexist.com/) [Archived](https://web.archive.org/web/20190305040119/https://thiscatdoesnotexist.com/) March 5, 2019, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) –  photorealistic images of cats who do not exist, generated by [StyleGAN](https://en.wikipedia.org/wiki/StyleGAN)
* Wang, Zhengwei; She, Qi; Ward, Tomas E. (2019). "Generative Adversarial Networks in Computer Vision: A Survey and Taxonomy". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1906.01529](https://arxiv.org/abs/1906.01529) [[cs.LG](https://arxiv.org/archive/cs.LG)].
 
NewPP limit report
Parsed by mw‐web.codfw.main‐bf65cc95d‐br2xn
Cached time: 20260424160343
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 1.553 seconds
Real time usage: 1.892 seconds
Preprocessor visited node count: 8837/1000000
Revision size: 97221/2097152 bytes
Post‐expand include size: 398009/2097152 bytes
Template argument size: 10508/2097152 bytes
Highest expansion depth: 16/100
Expensive parser function count: 10/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 494231/5000000 bytes
Lua time usage: 0.854/10.000 seconds
Lua memory usage: 18807415/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00% 1195.319      1 -total
 57.21%  683.869      1 Template:Reflist
 17.55%  209.786     39 Template:Cite_journal
 12.20%  145.808     29 Template:Cite_arXiv
 10.92%  130.499      6 Template:Annotated_link
  8.82%  105.380      1 Template:Short_description
  7.51%   89.782      5 Template:Cite_conference
  7.39%   88.364     25 Template:Cite_web
  7.39%   88.356      1 Template:Machine_learning
  7.04%   84.152      2 Template:Pagetype
 Render ID 2aa320d0-3ff7-11f1-a078-1f7c4d3e5a5b  Saved in parser cache with key enwiki:pcache:50073184:|#|:idhash:canonical and timestamp 20260424160343 and revision id 1349527209. Rendering was triggered because: page_view