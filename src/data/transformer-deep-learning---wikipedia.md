# Transformer (deep learning) - Wikipedia

Source: https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)

---

Algorithm for modelling sequential data

[![](//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Transformer%2C_full_architecture.png/250px-Transformer%2C_full_architecture.png)](https://en.wikipedia.org/wiki/File:Transformer,_full_architecture.png)

A standard transformer architecture, showing on the left an encoder, and on the right a decoder. Note: it uses the pre-LN convention, which is different from the post-LN convention used in the original 2017 transformer.

In [deep learning](https://en.wikipedia.org/wiki/Deep_learning), the **transformer** is a family of [artificial neural network](https://en.wikipedia.org/wiki/Artificial_neural_network) architectures based on the multi-head [attention](https://en.wikipedia.org/wiki/Attention_(machine_learning)) mechanism, in which text is converted to numerical representations called [tokens](https://en.wikipedia.org/wiki/Large_language_model#Tokenization), and each token is converted into a vector via lookup from a [word embedding](https://en.wikipedia.org/wiki/Word_embedding) table. At each layer, each [token](https://en.wikipedia.org/wiki/Tokenization_(lexical_analysis)) is then [contextualized](https://en.wikipedia.org/wiki/Contextualization_(computer_science)) within the scope of the [context window](https://en.wikipedia.org/wiki/Context_window) with other (unmasked) tokens via a parallel multi-head attention mechanism, allowing the signal for key tokens to be amplified and less important tokens to be diminished.

Transformers have the advantage of having no recurrent units, therefore requiring less training time than earlier [recurrent neural architectures](https://en.wikipedia.org/wiki/Recurrent_neural_network) (RNNs) such as [long short-term memory](https://en.wikipedia.org/wiki/Long_short-term_memory) (LSTM). Later variations have been widely adopted for training [large language models](https://en.wikipedia.org/wiki/Large_language_model) (LLMs) on large (language) [datasets](https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets).

The original version of the transformer architecture was proposed in the 2017 paper "[Attention Is All You Need](https://en.wikipedia.org/wiki/Attention_Is_All_You_Need)" by researchers at [Google](https://en.wikipedia.org/wiki/Google). The predecessors of transformers were developed as an improvement over previous architectures for [machine translation](https://en.wikipedia.org/wiki/Machine_translation), but have found many applications since. They are used in large-scale [natural language processing](https://en.wikipedia.org/wiki/Natural_language_processing), [computer vision](https://en.wikipedia.org/wiki/Computer_vision) ([vision transformers](https://en.wikipedia.org/wiki/Vision_transformer)), [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning), [audio](https://en.wikipedia.org/wiki/Audio_signal_processing), [multimodal learning](https://en.wikipedia.org/wiki/Multimodal_learning), [robotics](https://en.wikipedia.org/wiki/Robotics), and playing [chess](https://en.wikipedia.org/wiki/Computer_chess). It has also led to the development of [pre-trained systems](https://en.wikipedia.org/wiki/Transfer_learning), such as [generative pre-trained transformers](https://en.wikipedia.org/wiki/Generative_pre-trained_transformer) (GPTs) and [BERT](https://en.wikipedia.org/wiki/BERT_(language_model)) (bidirectional encoder representations from transformers).

For many years, sequence modelling and generation was done by using plain [recurrent neural networks](https://en.wikipedia.org/wiki/Recurrent_neural_network) (RNNs). A well-cited early example was the [Elman network](https://en.wikipedia.org/wiki/Elman_network) (1990). In theory, the information from one token can propagate arbitrarily far down the sequence, but in practice the [vanishing-gradient problem](https://en.wikipedia.org/wiki/Vanishing-gradient_problem) leaves the model's state at the end of a long sentence without precise, extractable information about preceding tokens.

A key breakthrough was [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) (1995), an RNN which used various innovations to overcome the vanishing gradient problem, allowing efficient learning of long-sequence modelling. One key innovation was the use of an [attention mechanism](https://en.wikipedia.org/wiki/Attention_(machine_learning)) which used neurons that multiply the outputs of other neurons, so-called *multiplicative units*. Neural networks using multiplicative units were later called *sigma-pi networks* or *[higher-order networks](/w/index.php?title=Higher-order_neural_network&action=edit&redlink=1)*. LSTM became the standard architecture for long sequence modelling until the 2017 publication of transformers. However, LSTM still used sequential processing, like most other RNNs. Specifically, RNNs operate one token at a time from first to last; they cannot operate in parallel over all tokens in a sequence.

Modern transformers overcome this problem, but unlike RNNs, they require computation time that is [quadratic](https://en.wikipedia.org/wiki/Quadratic_function) in the size of the context window. The linearly scaling [fast weight](/w/index.php?title=Fast_weight&action=edit&redlink=1) controller (1992) learns to compute a weight matrix for further processing depending on the input. One of its two networks has "fast weights" or "dynamic links" (1981). A slow neural network learns by gradient descent to generate keys and values for computing the weight changes of the fast neural network which computes answers to queries. This was later shown to be equivalent to the unnormalized linear transformer.

### Attention with seq2seq

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=3)]

The idea of encoder–decoder sequence transduction had been developed in the early 2010s; commonly cited as the originators that produced seq2seq are two concurrently published papers from 2014.[*[original research?](https://en.wikipedia.org/wiki/Wikipedia:No_original_research)*]

A 380M-parameter model for machine translation uses two [long short-term memories](https://en.wikipedia.org/wiki/Long_short-term_memory) (LSTM). Its architecture consists of two parts. The *encoder* is an LSTM that takes in a sequence of tokens and turns it into a vector. The *decoder* is another LSTM that converts the vector into a sequence of tokens. Similarly, another 130M-parameter model used [gated recurrent units](https://en.wikipedia.org/wiki/Gated_recurrent_unit) (GRU) instead of LSTM. Later research showed that GRUs are neither better nor worse than LSTMs for seq2seq.

These early seq2seq models had no attention mechanism, and the state vector is accessible only after the *last* word of the source text was processed. Although in theory such a vector retains the information about the whole original sentence, in practice the information is poorly preserved. This is because the input is processed sequentially by one recurrent network into a *fixed*-size output vector, which is then processed by another recurrent network into an output. If the input is long, then the output vector would not be able to contain all relevant information, degrading the output. As evidence, reversing the input sentence improved seq2seq translation.

The *RNN search* model introduced an attention mechanism to seq2seq for machine translation to solve the bottleneck problem (of the *fixed-size* output vector), allowing the model to process long-distance dependencies more easily. The name is because it "emulates searching through a source sentence during decoding a translation".

The relative performances were compared between global (that of *RNN search*) and local (sliding window) attention model architectures for machine translation, finding that mixed attention had higher quality than global attention, while local attention reduced translation time.

In 2016, [Google Translate](https://en.wikipedia.org/wiki/Google_Translate) was revamped to [Google Neural Machine Translation](https://en.wikipedia.org/wiki/Google_Neural_Machine_Translation), which replaced the previous model based on [statistical machine translation](https://en.wikipedia.org/wiki/Statistical_machine_translation). The new model was a seq2seq model where the encoder and the decoder were both 8 layers of bidirectional LSTM. It took nine months to develop, and it outperformed the statistical approach, which took ten years to develop.

### Parallelizing attention

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=4)]

Seq2seq models with attention (including self-attention) still suffered from the same issue with recurrent networks, which is that they are hard to [parallelize](https://en.wikipedia.org/wiki/Parallel_computing), which prevented them from being accelerated on GPUs. In 2016, *decomposable attention* applied a self-attention mechanism to [feedforward networks](https://en.wikipedia.org/wiki/Feedforward_neural_network), which are easy to parallelize, and achieved [SOTA](https://en.wikipedia.org/wiki/State_of_the_art) result in [textual entailment](https://en.wikipedia.org/wiki/Textual_entailment) with an order of magnitude fewer parameters than LSTMs. One of its authors, Jakob Uszkoreit, suspected that attention *without* recurrence would be sufficient for language translation, thus the title "attention is *all* you need". That hypothesis was against conventional wisdom at the time, and even his father [Hans Uszkoreit](https://en.wikipedia.org/wiki/Hans_Uszkoreit), a well-known computational linguist, was skeptical. In the same year, self-attention (called *intra-attention or* *intra-sentence attention*) was proposed for LSTMs.

On 2017-06-12, the original (100M-parameter) encoder–decoder transformer model was published in the "[Attention is all you need](https://en.wikipedia.org/wiki/Attention_is_all_you_need)" paper. At the time, the focus of the research was on improving [seq2seq](https://en.wikipedia.org/wiki/Seq2seq) for [machine translation](https://en.wikipedia.org/wiki/Machine_translation), by removing its recurrence to process all tokens in parallel, but preserving its dot-product attention mechanism to keep its text processing performance. This led to the introduction of a multi-head attention model that was easier to parallelize due to the use of independent heads and the lack of recurrence. Its parallelizability was an important factor to its widespread use in large neural networks.

As early as spring 2017, even before the "Attention is all you need" preprint was published, one of the co-authors applied the "decoder-only" variation of the architecture to generate fictitious Wikipedia articles. Transformer architecture is now used alongside many [generative models](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) that contribute to the ongoing [AI boom](https://en.wikipedia.org/wiki/AI_boom).

The "reference implementation" of the original Transformer was written in a TensorFlow library. In language modelling, [ELMo](https://en.wikipedia.org/wiki/ELMo) (2018) was a bi-directional LSTM that produces contextualized [word embeddings](https://en.wikipedia.org/wiki/Word_embedding), improving upon the line of research from [bag of words](https://en.wikipedia.org/wiki/Bag-of-words_model) and [word2vec](https://en.wikipedia.org/wiki/Word2vec). It was followed by [BERT](https://en.wikipedia.org/wiki/BERT_(language_model)) (2018), an encoder-only transformer model. In October 2019, Google started using BERT to process search queries. In 2020, Google Translate replaced the previous RNN-encoder–RNN-decoder model by a transformer-encoder–RNN-decoder model.

Starting in 2018, the OpenAI [GPT series](https://en.wikipedia.org/wiki/Generative_pre-trained_transformer) of decoder-only transformers became state of the art in [natural language generation](https://en.wikipedia.org/wiki/Natural_language_generation). In the end of 2022, a chatbot based on GPT-3, [ChatGPT](https://en.wikipedia.org/wiki/ChatGPT), became unexpectedly popular, triggering a boom around [large language models](https://en.wikipedia.org/wiki/Large_language_model).

Transformers have been applied in modalities beyond text. 4 days after the publication of "Attention is All You Need", a [multimodal](https://en.wikipedia.org/wiki/Multimodal_learning) transformer architecture, MultiModel, was published by most authors of that paper. Other examples include the [vision transformer](https://en.wikipedia.org/wiki/Vision_transformer), speech recognition, robotics, and multimodal. The vision transformer, in turn, stimulated new developments in [convolutional neural networks](https://en.wikipedia.org/wiki/Convolutional_neural_network). Image and video generators like [DALL-E](https://en.wikipedia.org/wiki/DALL-E) (2021), [Stable Diffusion 3](https://en.wikipedia.org/wiki/Stable_Diffusion) (2024), and [Sora](https://en.wikipedia.org/wiki/Sora_(text-to-video_model)) (2024), use transformers to analyse input data (like text prompts) by breaking it down into "tokens" and then calculating the relevance between each token using self-attention, which helps the model understand the context and relationships within the data.

### Methods for stabilizing training

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=7)]

The plain transformer architecture had difficulty in converging. In the original paper, the authors recommended using [learning rate](https://en.wikipedia.org/wiki/Learning_rate) warmup. That is, the learning rate should linearly scale up from 0 to maximal value for the first part of the training (usually recommended to be 2% of the total number of training steps), before decaying again.

A 2020 paper found that using [layer normalization](https://en.wikipedia.org/wiki/Layer_normalization) *before* (instead of after) multihead attention and feedforward layers stabilizes training, not requiring learning rate warmup. This is the "pre-LN Transformer" and is more commonly used, compared to the original "post-LN Transformer".

Transformers typically are first pretrained by [self-supervised learning](https://en.wikipedia.org/wiki/Self-supervised_learning) on a large generic dataset, followed by [supervised](https://en.wikipedia.org/wiki/Supervised_learning) [fine-tuning](https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)) on a small task-specific dataset. The pretrain dataset is typically an unlabeled large corpus, such as [The Pile](https://en.wikipedia.org/wiki/The_Pile_(dataset)). Tasks for pretraining and fine-tuning commonly include:

The [T5 transformer](https://en.wikipedia.org/wiki/T5_(language_model)) report documents a large number of [natural language](https://en.wikipedia.org/wiki/Natural_language) pretraining tasks. Some examples are:

* restoring or repairing incomplete or corrupted text. For example, the input, *"Thank you ~~ me to your party ~~ week",* might generate the output, *"Thank you **for inviting** me to your party **last** week".*
* translation between natural languages ([machine translation](https://en.wikipedia.org/wiki/Machine_translation))
* judging the pragmatic acceptability of natural language. For example, the following sentence might be judged "not acceptable", because even though it is syntactically well-formed, it is improbable in ordinary human usage: *The course is jumping well.*

Note that while each of these tasks is trivial or obvious for human native speakers of the language (or languages), they have typically proved challenging for previous generations of machine learning architecture.

In general, there are 3 classes of language modelling tasks: "masked", "autoregressive", and "prefixLM". These classes are independent of a specific modeling architecture such as transformer, but they are often discussed in the context of transformer.

In a masked task, one or more of the tokens is masked out, and the model would produce a probability distribution predicting what the masked-out tokens are based on the context. The [loss function](https://en.wikipedia.org/wiki/Loss_function) for the task is typically sum of [log-perplexities](https://en.wikipedia.org/wiki/Perplexity) for the masked-out tokens: 




Loss
=
−

∑

t
∈

masked tokens
ln
⁡
(

probability of 
t

 conditional on its context
)
{\displaystyle {\text{Loss}}=-\sum \_{t\in {\text{masked tokens}}}\ln({\text{probability of }}t{\text{ conditional on its context}})}
![{\displaystyle {\text{Loss}}=-\sum _{t\in {\text{masked tokens}}}\ln({\text{probability of }}t{\text{ conditional on its context}})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55f0855cde2d171c96b77251ce43de9ee3cfd4e8)and the model is trained to minimize this loss function. The [BERT series of models](https://en.wikipedia.org/wiki/BERT_(language_model)) are trained for masked token prediction and another task.

In an autoregressive task, the entire sequence is masked at first, and the model produces a probability distribution for the first token. Then the first token is revealed and the model predicts the second token, and so on. The loss function for the task is still typically the same. The [GPT series of models](https://en.wikipedia.org/wiki/Generative_pre-trained_transformer) are trained by autoregressive tasks.

In a prefixLM task, the sequence is divided into two parts. The first part is presented as context, and the model predicts the first token of the second part. Then that would be revealed, and the model predicts the second token, and so on. The loss function for the task is still typically the same. The [T5 series of models](https://en.wikipedia.org/wiki/T5_(language_model)) are trained by prefixLM tasks.

Note that "masked" as in "masked language modelling" is not "masked" as in "[masked attention](#Masked_attention)", and "prefixLM" as in
"prefix language modeling" is not "prefixLM" as in " [prefix language model](#prefixLM)".

All transformers have the same primary components:

* Tokenizers, which convert text into tokens.
* Embedding layer, which converts tokens and positions of the tokens into vector representations.
* Transformer layers, which carry out repeated transformations on the vector representations, extracting more and more linguistic information. These consist of alternating attention and feedforward layers. There are two major types of transformer layers: encoder layers and decoder layers, with further variants.
* Un-embedding layer, which converts the final vector representations back to a probability distribution over the tokens.

The following description follows exactly the transformer as described in the original paper. There are variants, described in the [following section](#Subsequent_work).

By convention, we write all vectors as row vectors. For example, pushing a vector through a linear layer means multiplying it by a weight matrix on the right, as 



x
W
{\displaystyle xW}
![{\displaystyle xW}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b366d97326adb9cbb74e22c5ee0966dd055cd2dc).

As the transformer architecture natively consists of operations over numbers (matrix multiplications, dot products, activation functions) rather than over text, there must first be a mapping from any input text to some numerical representation. This happens in three steps.

First, the input text is treated by a *preprocessor*, which performs both textual transformations and splits the text into coarse-grained segments called *pretokens*. The latter is referred to as *pretokenization*. Second, each pretoken is segmented further into *tokens* by a *tokenizer* that expects to only see pretokens output by its preprocessor. Each token it produces is a string of one or more characters belonging to a finite set of strings called the *vocabulary* 



V
{\displaystyle V}
![{\displaystyle V}](https://wikimedia.org/api/rest_v1/media/math/render/svg/af0f6064540e84211d0ffe4dac72098adfa52845). Third, because the vocabulary is finite and known beforehand, each token can be assigned an integer identifier, and this mapping is applied to the sequence of tokens to represent any input text as a numerical sequence. Since this mapping is bijective, the output side can produce a sequence of integer identifiers which can then be turned back into tokens. After undoing some of the preprocessing, the result is again legible text.

Training a tokenizer (sometimes referred to as *vocabularization*) means finding a suitable vocabulary 



V
{\displaystyle V}
![{\displaystyle V}](https://wikimedia.org/api/rest_v1/media/math/render/svg/af0f6064540e84211d0ffe4dac72098adfa52845), but also learning how to use it, since any given string 



s
{\displaystyle s}
![{\displaystyle s}](https://wikimedia.org/api/rest_v1/media/math/render/svg/01d131dfd7673938b947072a13a9744fe997e632) of length 




|
s

|
{\displaystyle |s|}
![{\displaystyle |s|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0ae65dea0cc836140252292ee9adf2d8b5102055) has 




2


|
s

|
−
1
{\displaystyle 2^{|s|-1}}
![{\displaystyle 2^{|s|-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3d844850486603030caed10d1c3d330d604770b8) hypothetical segmentations, some of which containing segments that are not in the vocabulary. The most important hyperparameter during vocabularization is the *vocabulary size* 




|
V

|
{\displaystyle |V|}
![{\displaystyle |V|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9ddcffc28643ac01a14dd0fb32c3157859e365a7): when it is small, the learned vocabulary generally consists of characters and smaller strings, and words will be segmented into many tokens. At larger sizes, it becomes affordable to dedicate tokens to full words, although depending on the preprocessor and tokenizer, it is not necessarily the case that large vocabularies will always use the largest token(s) available to segment a word.

Because tokens are not always full words, they may also be referred to as *subwords* and tokenization algorithms may be referred to as *subword tokenizers*. This is also to differentiate these systems from [traditional terminology](https://en.wikipedia.org/wiki/Lexical_analysis) used in older information retrieval and natural language processing systems, where "tokenization" was used to denote what is today called "pretokenization" (very crudely: splitting into words). In tokenizers that produce tokens that are *not* part of the vocabulary, a special token that does belong to the vocabulary is used as a generic stand-in, written as "[UNK]" for "unknown". In principle, any string could be hidden by such an [UNK]. Indeed, in information retrieval, pretokenizers were themselves used as tokenizers (and also called "tokenizers") with a word-level vocabulary that contained an [UNK].

Commonly used subword tokenization algorithms are [byte pair encoding](https://en.wikipedia.org/wiki/Byte_pair_encoding) (BPE) and the unigram language model (ULM), which each include a vocabularization algorithm and a dedicated segmentation algorithm. There also exist several segmentation algorithms that require no learning and can be applied given a vocabulary (produced by BPE or ULM, for example), like greedily recognising tokens in a pretoken by moving through it left-to-right. Well-known software implementations of subword tokenizers are [Hugging Face](https://en.wikipedia.org/wiki/Hugging_Face)'s `tokenizers` Python package implemented in Rust, and the `sentencepiece` Python package implemented in C++. The latter package is named as such because one of its configuration options allows disabling the built-in pretokenizer, hence effectively making entire sentences a pretoken and thus having the tokenizer see entire sentences, rather than individual words.

Each integer token identifier is converted into an embedding vector via a [lookup table](https://en.wikipedia.org/wiki/Lookup_table). Equivalently stated, it multiplies a [one-hot](https://en.wikipedia.org/wiki/One-hot) representation of the token identifier by an embedding matrix 



M
{\displaystyle M}
![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd). For example, if the input token's identifier is 



3
{\displaystyle 3}
![{\displaystyle 3}](https://wikimedia.org/api/rest_v1/media/math/render/svg/991e33c6e207b12546f15bdfee8b5726eafbbb2f), then the one-hot representation is 



[
0
,
0
,
0
,
1
,
0
,
0
,
…
]
{\displaystyle [0,0,0,1,0,0,\dots ]}
![{\displaystyle [0,0,0,1,0,0,\dots ]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a5a20e2ecac4d6b6e2e9fa0f965758e488c1d70f), and its embedding vector is




E
m
b
e
d
(
3
)
=
[
0
,
0
,
0
,
1
,
0
,
0
,
…
]
M
{\displaystyle \mathrm {Embed} (3)=[0,0,0,1,0,0,\dots ]M}
![{\displaystyle \mathrm {Embed} (3)=[0,0,0,1,0,0,\dots ]M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/66ba0293d96eeea4e56e92c73333349bc813855c)The token embedding vectors are added to their respective positional encoding vectors (see below), producing the sequence of input vectors.

The dimension of an embedding vector is called *hidden size* or *embedding size* and written as 




d

emb
{\displaystyle d\_{\text{emb}}}
![{\displaystyle d_{\text{emb}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4bf3df2909758ee1d69be67380da3263cfba984e). This size is written as 




d

model
{\displaystyle d\_{\text{model}}}
![{\displaystyle d_{\text{model}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/aefdfb00976a3a5c5ec3c8fcbcc166e82ceb6268) in the original transformer paper.

An un-embedding layer is almost the reverse of an embedding layer. Whereas an embedding layer converts a token identifier into a vector, an un-embedding layer converts a vector into a probability distribution over tokens.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Top_token_probabilities%2C_chain_of_thought_response_only%2C_for_GPT-OSS_%2820b%29.svg/960px-Top_token_probabilities%2C_chain_of_thought_response_only%2C_for_GPT-OSS_%2820b%29.svg.png)](https://en.wikipedia.org/wiki/File:Top_token_probabilities,_chain_of_thought_response_only,_for_GPT-OSS_(20b).svg)

An illustration of the top 16 token probabilities at temperature 1, for each output token in the chain-of-thought response, with colour representing how that output differs from the same prompt but at temperature 0.

The un-embedding layer is a linear-[softmax](https://en.wikipedia.org/wiki/Softmax_function) layer:




U
n
E
m
b
e
d
(
x
)
=

s
o
f
t
m
a
x
(
x
W
+
b
)
{\displaystyle \mathrm {UnEmbed} (x)=\mathrm {softmax} (xW+b)}
![{\displaystyle \mathrm {UnEmbed} (x)=\mathrm {softmax} (xW+b)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/df5d49f6baaf8081c203cd3613765a48f0a23da5)The matrix has shape 



(

d

emb
,

|
V

|
)
{\displaystyle (d\_{\text{emb}},|V|)}
![{\displaystyle (d_{\text{emb}},|V|)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9dcb9b66af8f800d469cf5dfeb06c64ffbf2ab59). Some architectures use the transpose of the embedding matrix 



M
{\displaystyle M}
![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd) as the un-embedding matrix 



W
{\displaystyle W}
![{\displaystyle W}](https://wikimedia.org/api/rest_v1/media/math/render/svg/54a9c4c547f4d6111f81946cad242b18298d70b7) in order to avoid needing double the amount of embedding-related parameters and to avoid divergence during training. This practice is called *weight tying*.

### Positional encoding

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=14)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Absolute_positional_encoding.png/250px-Absolute_positional_encoding.png)](https://en.wikipedia.org/wiki/File:Absolute_positional_encoding.png)

Illustration of (absolute) positional encoding with parameters 



N
=
10000
,
d
=
100
{\displaystyle N=10000,d=100}
![{\displaystyle N=10000,d=100}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fe83017b9728026bf6d2bae4a357041d198ac494)

A positional encoding is a fixed-size vector representation of the relative positions of tokens within a sequence: it provides the transformer model with information about *where* the words are in the input sequence. This induces a [bias](https://en.wikipedia.org/wiki/Inductive_bias) towards the order of the input sequence, so that, for example, the input sequence "[man bites dog](https://en.wikipedia.org/wiki/Man_bites_dog)" is processed differently from "dog bites man".

The positional encoding is defined as a function of type 



f
:

R
→


R

d
{\displaystyle f:\mathbb {R} \to \mathbb {R} ^{d}}
![{\displaystyle f:\mathbb {R} \to \mathbb {R} ^{d}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ff4df0a644d47d52c00ba8ca23edbabb9c8c4749), where 



d
{\displaystyle d}
![{\displaystyle d}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e85ff03cbe0c7341af6b982e47e9f90d235c66ab) is a positive even [integer](https://en.wikipedia.org/wiki/Integer). The full positional encoding defined in the original paper is:



(
f
(
t

)

2
k
,
f
(
t

)

2
k
+
1
)
=
(
sin
⁡
(
θ
)
,
cos
⁡
(
θ
)
)

∀
k
∈
{
0
,
1
,
…
,
d

/
2
−
1
}
{\displaystyle (f(t)\_{2k},f(t)\_{2k+1})=(\sin(\theta ),\cos(\theta ))\quad \forall k\in \{0,1,\ldots ,d/2-1\}}
![{\displaystyle (f(t)_{2k},f(t)_{2k+1})=(\sin(\theta ),\cos(\theta ))\quad \forall k\in \{0,1,\ldots ,d/2-1\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cbca45061217292a4920ea20881b77a1b39a41ea)where 



θ
=


t

r

k
,
r
=

N

2

/
d
{\displaystyle \theta ={\frac {t}{r^{k}}},r=N^{2/d}}
![{\displaystyle \theta ={\frac {t}{r^{k}}},r=N^{2/d}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8ba16328b4d94e923d80ad257002a6d18deb2edb).

Here, 



N
{\displaystyle N}
![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3) is a free parameter that should be significantly larger than the biggest 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) that would be input into the positional encoding function. The original paper uses 



N
=
10000
{\displaystyle N=10000}
![{\displaystyle N=10000}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8f13b17e1a7fbe046ab619ccc5167809d04872c2).

The function is in a simpler form when written as a complex function of type 



f
:

R
→


C

d

/
2
{\displaystyle f:\mathbb {R} \to \mathbb {C} ^{d/2}}
![{\displaystyle f:\mathbb {R} \to \mathbb {C} ^{d/2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/52c816b7a3f4f0855fc1cc7bafb9dbce1efc09d0)



f
(
t
)
=


(

e

i
t

/

r

k
)

k
=
0
,
1
,
…
,


d
2
−
1
{\displaystyle f(t)=\left(e^{it/r^{k}}\right)\_{k=0,1,\ldots ,{\frac {d}{2}}-1}}
![{\displaystyle f(t)=\left(e^{it/r^{k}}\right)_{k=0,1,\ldots ,{\frac {d}{2}}-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4887fec07bd9ef29ad5783f32651b1e503a88130)where 



r
=

N

2

/
d
{\displaystyle r=N^{2/d}}
![{\displaystyle r=N^{2/d}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/11cb2cfb2ab25e2e0cb3ed51071f1e7f38060c99).

The main reason for using this positional encoding function is that using it, shifts are linear transformations:



f
(
t
+
Δ
t
)
=

d
i
a
g
(
f
(
Δ
t
)
)
f
(
t
)
{\displaystyle f(t+\Delta t)=\mathrm {diag} (f(\Delta t))f(t)}
![{\displaystyle f(t+\Delta t)=\mathrm {diag} (f(\Delta t))f(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cce4053e6d0f3e225b153bc362be4970c3e9b535)where 



Δ
t
∈

R
{\displaystyle \Delta t\in \mathbb {R} }
![{\displaystyle \Delta t\in \mathbb {R} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/40be374d0e9f96fefe0a14ddb46218a42409b2a6) is the distance one wishes to shift. This allows the transformer to take any encoded position, and find the encoding of the position n-steps-ahead or n-steps-behind, by a matrix multiplication.

By taking a linear sum, any convolution can also be implemented as linear transformations:




∑

j

c

j
f
(
t
+
Δ

t

j
)
=

(


∑

j

c

j


d
i
a
g
(
f
(
Δ

t

j
)
)
)
f
(
t
)
{\displaystyle \sum \_{j}c\_{j}f(t+\Delta t\_{j})=\left(\sum \_{j}c\_{j}\,\mathrm {diag} (f(\Delta t\_{j}))\right)f(t)}
![{\displaystyle \sum _{j}c_{j}f(t+\Delta t_{j})=\left(\sum _{j}c_{j}\,\mathrm {diag} (f(\Delta t_{j}))\right)f(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/14a5ba5df2e142a7c6812dd345b2001550cfa3f0)for any constants 




c

j
{\displaystyle c\_{j}}
![{\displaystyle c_{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a844d180d176af828d1636d4e85aa534d0b77baa). This allows the transformer to take any encoded position and find a linear sum of the encoded locations of its neighbors. This sum of encoded positions, when fed into the attention mechanism, would create attention weights on its neighbors, much like what happens in a [convolutional neural network](https://en.wikipedia.org/wiki/Convolutional_neural_network) [language model](https://en.wikipedia.org/wiki/Language_model). In the author's words, "we hypothesized it would allow the model to easily learn to attend by relative position."

In typical implementations, all operations are done over the real numbers, not the complex numbers, but since [complex multiplication can be implemented as real 2-by-2 matrix multiplication](https://en.wikipedia.org/wiki/Complex_number#Matrix_representation_of_complex_numbers), this is a mere notational difference.

### Encoder–decoder (overview)

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=15)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/5/53/Transformer%2C_one_encoder-decoder_block.png/250px-Transformer%2C_one_encoder-decoder_block.png)](https://en.wikipedia.org/wiki/File:Transformer,_one_encoder-decoder_block.png)

One encoder–decoder block

[![](//upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Transformer%2C_stacked_layers_and_sublayers.png/250px-Transformer%2C_stacked_layers_and_sublayers.png)](https://en.wikipedia.org/wiki/File:Transformer,_stacked_layers_and_sublayers.png)

A transformer is composed of stacked encoder layers and decoder layers.

Like earlier [seq2seq](https://en.wikipedia.org/wiki/Seq2seq) models, the original transformer model used an **encoder–decoder** architecture. The encoder consists of encoding layers that process all the input tokens together one layer after another, while the decoder consists of decoding layers that iteratively process the encoder's output and the decoder's output tokens so far.

The purpose of each encoder layer is to create contextualized representations of the tokens, where each representation corresponds to a token that "mixes" information from other input tokens via self-attention mechanism. Each decoder layer contains two attention sublayers: (1) cross-attention for incorporating the output of encoder (contextualized input token representations), and (2) self-attention for "mixing" information among the input tokens to the decoder (i.e. the tokens generated so far during inference time).

Both the encoder and decoder layers have a [feed-forward neural network](https://en.wikipedia.org/wiki/Feedforward_neural_network) for additional processing of their outputs and contain residual connections and layer normalization steps. These feed-forward layers contain most of the parameters in a transformer model.

### Feedforward network

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=16)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/5/59/Transformer_architecture_-_FFN_module.png/250px-Transformer_architecture_-_FFN_module.png)](https://en.wikipedia.org/wiki/File:Transformer_architecture_-_FFN_module.png)

The feedforward network module. It is a two-layered network that maps 




d

emb
{\displaystyle d\_{\text{emb}}}
![{\displaystyle d_{\text{emb}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4bf3df2909758ee1d69be67380da3263cfba984e)-dimensional vectors into 




d

emb
{\displaystyle d\_{\text{emb}}}
![{\displaystyle d_{\text{emb}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4bf3df2909758ee1d69be67380da3263cfba984e)-dimensional vectors.

The feedforward network (FFN) modules in a transformer are 2-layered [multilayer perceptrons](https://en.wikipedia.org/wiki/Feedforward_neural_network):




F
F
N
(
x
)
=
ϕ
(
x

W

(
1
)
+

b

(
1
)
)

W

(
2
)
+

b

(
2
)
{\displaystyle \mathrm {FFN} (x)=\phi (xW^{(1)}+b^{(1)})W^{(2)}+b^{(2)}}
![{\displaystyle \mathrm {FFN} (x)=\phi (xW^{(1)}+b^{(1)})W^{(2)}+b^{(2)}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3018d1cafd676461ec6a1927aff651d73ce78377)where 




W

(
1
)
{\displaystyle W^{(1)}}
![{\displaystyle W^{(1)}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/351c8e7ea5512879f0b5762c284792c760b4a70e) and 




W

(
2
)
{\displaystyle W^{(2)}}
![{\displaystyle W^{(2)}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2196a6b93c1ae79e6b2b6cbe9c6c411cf1420513) are weight matrices and 




b

(
1
)
{\displaystyle b^{(1)}}
![{\displaystyle b^{(1)}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6abb02f6ce2b97279afa53deca31b9436df25421) and 




b

(
2
)
{\displaystyle b^{(2)}}
![{\displaystyle b^{(2)}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3b10499e26db8834d9306ad4deb7f1a095e8ff27) are bias vectors, and 



ϕ
{\displaystyle \phi }
![{\displaystyle \phi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/72b1f30316670aee6270a28334bdf4f5072cdde4) is its activation function. The original transformer used [ReLU](https://en.wikipedia.org/wiki/Rectifier_(neural_networks)) activation.

The number of neurons in the middle layer is called *intermediate size* (GPT), *filter size* (BERT), or *feedforward size* (BERT). It is typically larger than the embedding size. For example, in both GPT-2 series and BERT series, the intermediate size of a model is 4 times its embedding size: 




d

ffn
=
4

d

emb
{\displaystyle d\_{\text{ffn}}=4d\_{\text{emb}}}
![{\displaystyle d_{\text{ffn}}=4d_{\text{emb}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/11c9e89a82cdff80cd9e03abfef22730a29bf958).

### Scaled dot-product attention

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=17)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Transformer%2C_attention_block_diagram.png/250px-Transformer%2C_attention_block_diagram.png)](https://en.wikipedia.org/wiki/File:Transformer,_attention_block_diagram.png)

Scaled dot-product attention, block diagram

[![](//upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Transformer_architecture_-_Attention_Head_module.png/250px-Transformer_architecture_-_Attention_Head_module.png)](https://en.wikipedia.org/wiki/File:Transformer_architecture_-_Attention_Head_module.png)

Exact dimension counts within an attention head module

The attention mechanism used in the transformer architecture are scaled [dot-product](https://en.wikipedia.org/wiki/Dot_product) [attention](https://en.wikipedia.org/wiki/Attention_(machine_learning)) units. For each unit, the transformer model learns three weight matrices: the query weights 




W

Q
{\displaystyle W^{Q}}
![{\displaystyle W^{Q}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/12fad024825b554ffb621d5385460ffce533f1bb), the key weights 




W

K
{\displaystyle W^{K}}
![{\displaystyle W^{K}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/060b854f3f44615cefb8441780e6c31742f5dbd2), and the value weights 




W

V
{\displaystyle W^{V}}
![{\displaystyle W^{V}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ef0a2e5fb27e9e6d1fc86901833d40d7e685a460).

The module takes three sequences, a query sequence, a key sequence, and a value sequence. The query sequence is a sequence of length 




ℓ

seq, query
{\displaystyle \ell \_{\text{seq, query}}}
![{\displaystyle \ell _{\text{seq, query}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fe514b95a8db1105db6bcdf5a7148d8014461e59), and each entry is a vector of dimension 




d

emb, query
{\displaystyle d\_{\text{emb, query}}}
![{\displaystyle d_{\text{emb, query}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/569324b1ee8814a09242042f2fffdbac51e922bd). Similarly for the key and value sequences.

For each vector 




x

i
,

query
{\displaystyle x\_{i,{\text{query}}}}
![{\displaystyle x_{i,{\text{query}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0d096bf3997e6d4d12626058f5747fa4a19f0ca8) in the query sequence, it is multiplied by a matrix 




W

Q
{\displaystyle W^{Q}}
![{\displaystyle W^{Q}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/12fad024825b554ffb621d5385460ffce533f1bb) to produce a query vector 




q

i
=

x

i
,

query

W

Q
{\displaystyle q\_{i}=x\_{i,{\text{query}}}W^{Q}}
![{\displaystyle q_{i}=x_{i,{\text{query}}}W^{Q}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ad0056fecb11a213583cff46a83e331050830a13). The matrix of all query vectors is the query matrix:



Q
=

X

query

W

Q
{\displaystyle Q=X\_{\text{query}}W^{Q}}
![{\displaystyle Q=X_{\text{query}}W^{Q}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1fdcfa516a1e0a158286801715d89368d2d8a948)Similarly, we construct the key matrix 



K
=

X

key

W

K
{\displaystyle K=X\_{\text{key}}W^{K}}
![{\displaystyle K=X_{\text{key}}W^{K}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/25cdd16edf96b2453753c8d73d9b86bd7acee034) and the value matrix 



V
=

X

value

W

V
{\displaystyle V=X\_{\text{value}}W^{V}}
![{\displaystyle V=X_{\text{value}}W^{V}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4a44f4ff55f3ba2722b925af1e749c37936c88a6).

It is usually the case that all 




W

Q
,

W

K
,

W

V
{\displaystyle W^{Q},W^{K},W^{V}}
![{\displaystyle W^{Q},W^{K},W^{V}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5c6380cb67a00550ee5dfb91733a9bfdad94b42) are square matrices, meaning 




d

emb, query
=

d

query
{\displaystyle d\_{\text{emb, query}}=d\_{\text{query}}}
![{\displaystyle d_{\text{emb, query}}=d_{\text{query}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ed9f9eea42977c0cab83ddcf2f1de48138e007c6), etc.

Attention weights are calculated using the query and key vectors: the attention weight 




a

i
j
{\displaystyle a\_{ij}}
![{\displaystyle a_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ebea6cd2813c330c798921a2894b358f7b643917) from token 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20) to token 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0) is the [dot product](https://en.wikipedia.org/wiki/Dot_product) between 




q

i
{\displaystyle q\_{i}}
![{\displaystyle q_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2752dcbff884354069fe332b8e51eb0a70a531b6) and 




k

j
{\displaystyle k\_{j}}
![{\displaystyle k_{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/05ddf2c6d7759ac955e001a7cfafb2abfca41b0b). The attention weights are divided by the square root of the dimension of the key vectors, 






d

k
{\displaystyle {\sqrt {d\_{k}}}}
![{\displaystyle {\sqrt {d_{k}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0be678d1b945828faecd56b29927f5a60011be37), which stabilizes gradients during training, and passed through a [softmax](https://en.wikipedia.org/wiki/Softmax_function) which normalizes the weights. The fact that 




W

Q
{\displaystyle W^{Q}}
![{\displaystyle W^{Q}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/12fad024825b554ffb621d5385460ffce533f1bb) and 




W

K
{\displaystyle W^{K}}
![{\displaystyle W^{K}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/060b854f3f44615cefb8441780e6c31742f5dbd2) are different matrices allows attention to be non-symmetric: if token 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20) attends to token 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0) (i.e. 




q

i
⋅

k

j
{\displaystyle q\_{i}\cdot k\_{j}}
![{\displaystyle q_{i}\cdot k_{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7de4219a59ace005d92f8d0a13466dbdb5fd6d9c) is large), this does not necessarily mean that token 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0) will attend to token 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20) (i.e. 




q

j
⋅

k

i
{\displaystyle q\_{j}\cdot k\_{i}}
![{\displaystyle q_{j}\cdot k_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d40445a57203e20510d7b629e0567957524700e4) could be small). The output of the attention unit for token 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20) is the weighted sum of the value vectors of all tokens, weighted by 




a

i
j
{\displaystyle a\_{ij}}
![{\displaystyle a_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ebea6cd2813c330c798921a2894b358f7b643917), the attention from token 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20) to each token.

The attention calculation for all tokens can be expressed as one large matrix calculation using the [softmax function](https://en.wikipedia.org/wiki/Softmax_function), which is useful for training due to computational matrix operation optimizations that quickly compute matrix operations. The matrices 



Q
{\displaystyle Q}
![{\displaystyle Q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8752c7023b4b3286800fe3238271bbca681219ed), 



K
{\displaystyle K}
![{\displaystyle K}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2b76fce82a62ed5461908f0dc8f037de4e3686b0) and 



V
{\displaystyle V}
![{\displaystyle V}](https://wikimedia.org/api/rest_v1/media/math/render/svg/af0f6064540e84211d0ffe4dac72098adfa52845) are defined as the matrices where the 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20)th rows are vectors 




q

i
{\displaystyle q\_{i}}
![{\displaystyle q_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2752dcbff884354069fe332b8e51eb0a70a531b6), 




k

i
{\displaystyle k\_{i}}
![{\displaystyle k_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f29138ed3ad54ffce527daccadc49c520459b0b0), and 




v

i
{\displaystyle v\_{i}}
![{\displaystyle v_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7dffe5726650f6daac54829972a94f38eb8ec127) respectively. Then we can represent the attention as








Attention
(
Q
,
K
,
V
)
=

softmax

(



Q

K


T


d

k
)
V
{\displaystyle {\begin{aligned}{\text{Attention}}(Q,K,V)={\text{softmax}}\left({\frac {QK^{\mathrm {T} }}{\sqrt {d\_{k}}}}\right)V\end{aligned}}}
![{\displaystyle {\begin{aligned}{\text{Attention}}(Q,K,V)={\text{softmax}}\left({\frac {QK^{\mathrm {T} }}{\sqrt {d_{k}}}}\right)V\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0b2afc7240eb97375a384b1628c18438e3068e3f)

where the softmax is applied over each of the rows of the matrix.

The number of dimensions in a query vector is *query size* 




d

query
{\displaystyle d\_{\text{query}}}
![{\displaystyle d_{\text{query}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a08e7abd7e328c9458c6522b8c0746f27c2d8b53) and similarly for the *key size* 




d

key
{\displaystyle d\_{\text{key}}}
![{\displaystyle d_{\text{key}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fb86df1f34f41a6100f5569f3b0ab489a14b7136) and *value size* 




d

value
{\displaystyle d\_{\text{value}}}
![{\displaystyle d_{\text{value}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/046c86fdb216cdea1d8ee121df3b755763001ab1). The output dimension of an attention head is its *head dimension* 




d

head
{\displaystyle d\_{\text{head}}}
![{\displaystyle d_{\text{head}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dc21fc3863abb48214d18eeb00efa0c3ae102896). The attention mechanism requires the following three equalities to hold:




ℓ

seq, key
=

ℓ

seq, value
,


d

query
=

d

key
,


d

value
=

d

head
{\displaystyle \ell \_{\text{seq, key}}=\ell \_{\text{seq, value}},\;d\_{\text{query}}=d\_{\text{key}},\;d\_{\text{value}}=d\_{\text{head}}}
![{\displaystyle \ell _{\text{seq, key}}=\ell _{\text{seq, value}},\;d_{\text{query}}=d_{\text{key}},\;d_{\text{value}}=d_{\text{head}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b25b25f22a8a09c26350d2f065628dd4b3911669)but is otherwise unconstrained.

If the attention head is used in a self-attention fashion, then 




X

query
=

X

key
=

X

value
{\displaystyle X\_{\text{query}}=X\_{\text{key}}=X\_{\text{value}}}
![{\displaystyle X_{\text{query}}=X_{\text{key}}=X_{\text{value}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/05e0578cf40298283b50d5e5874308d529fc6ec7). If the attention head is used in a cross-attention fashion, then usually 




X

query
≠

X

key
=

X

value
{\displaystyle X\_{\text{query}}\neq X\_{\text{key}}=X\_{\text{value}}}
![{\displaystyle X_{\text{query}}\neq X_{\text{key}}=X_{\text{value}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/398ed1ae2490d963661a8ae37d94c04bfc732f9f). It is theoretically possible for all three to be different, but that is rarely the case in practice.

#### Multihead attention

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=19)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Multiheaded_attention%2C_block_diagram.png/250px-Multiheaded_attention%2C_block_diagram.png)](https://en.wikipedia.org/wiki/File:Multiheaded_attention,_block_diagram.png)

Multihead attention, block diagram

[![](//upload.wikimedia.org/wikipedia/commons/thumb/1/15/Transformer_architecture_-_Multiheaded_Attention_module.png/250px-Transformer_architecture_-_Multiheaded_Attention_module.png)](https://en.wikipedia.org/wiki/File:Transformer_architecture_-_Multiheaded_Attention_module.png)

Exact dimension counts within a multihead attention module

One set of 




(


W

Q
,

W

K
,

W

V
)
{\displaystyle \left(W^{Q},W^{K},W^{V}\right)}
![{\displaystyle \left(W^{Q},W^{K},W^{V}\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1306697728f261e1803778d1b2e042c7df652ae7) matrices is called an *attention head*, and each layer in a transformer model has multiple attention heads. While each attention head attends to the tokens that are relevant to each token, multiple attention heads allow the model to do this for different definitions of "relevance". Specifically, the query and key projection matrices, 




W

Q
{\displaystyle W^{Q}}
![{\displaystyle W^{Q}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/12fad024825b554ffb621d5385460ffce533f1bb) and 




W

K
{\displaystyle W^{K}}
![{\displaystyle W^{K}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/060b854f3f44615cefb8441780e6c31742f5dbd2) , which are involved in the attention score computation, defines the "relevance". Meanwhile, the value [projection matrix](https://en.wikipedia.org/wiki/Projection_matrix) 




W

V
{\displaystyle W^{V}}
![{\displaystyle W^{V}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ef0a2e5fb27e9e6d1fc86901833d40d7e685a460), in combination with the part of the output projection matrix 




W

O
{\displaystyle W^{O}}
![{\displaystyle W^{O}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7f0f376fd1863b3a195a6bf34b56ff43ec5d695f), determines how the attended tokens influence what information is passed to subsequent layers and ultimately the output logits. In addition, the scope of attention, or the range of token relationships captured by each attention head, can expand as tokens pass through successive layers. This allows the model to capture more complex and long-range dependencies in deeper layers. Many transformer attention heads encode relevance relations that are meaningful to humans. For example, some attention heads can attend mostly to the next word, while others mainly attend from verbs to their direct objects. The computations for each attention head can be performed in [parallel](https://en.wikipedia.org/wiki/Parallel_computing), which allows for fast processing. The outputs for the attention layer are concatenated to pass into the [feedforward neural network](https://en.wikipedia.org/wiki/Feedforward_neural_network) layers.

Concretely, let the multiple attention heads be indexed by 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20), then we have




MultiheadAttention
(
Q
,
K
,
V
)
=


Concat

i
∈
[

n

heads
]
(

Attention
(
X

W

i

Q
,
X

W

i

K
,
X

W

i

V
)
)

W

O
{\displaystyle {\text{MultiheadAttention}}(Q,K,V)={\text{Concat}}\_{i\in [n\_{\text{heads}}]}({\text{Attention}}(XW\_{i}^{Q},XW\_{i}^{K},XW\_{i}^{V}))W^{O}}
![{\displaystyle {\text{MultiheadAttention}}(Q,K,V)={\text{Concat}}_{i\in [n_{\text{heads}}]}({\text{Attention}}(XW_{i}^{Q},XW_{i}^{K},XW_{i}^{V}))W^{O}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/266365c28eb10c53cf80eb9703447d3a8233414d) where the matrix 



X
{\displaystyle X}
![{\displaystyle X}](https://wikimedia.org/api/rest_v1/media/math/render/svg/68baa052181f707c662844a465bfeeb135e82bab) is the concatenation of word embeddings, and the matrices 




W

i

Q
,

W

i

K
,

W

i

V
{\displaystyle W\_{i}^{Q},W\_{i}^{K},W\_{i}^{V}}
![{\displaystyle W_{i}^{Q},W_{i}^{K},W_{i}^{V}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3087f1739ddc134719d701163d3a75af985498b1) are "projection matrices" owned by individual attention head 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20), and 




W

O
{\displaystyle W^{O}}
![{\displaystyle W^{O}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7f0f376fd1863b3a195a6bf34b56ff43ec5d695f) is a final projection matrix owned by the whole multihead attention head.

It is theoretically possible for each attention head to have a different head dimension 




d

head
{\displaystyle d\_{\text{head}}}
![{\displaystyle d_{\text{head}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dc21fc3863abb48214d18eeb00efa0c3ae102896), but that is rarely the case in practice.

As an example, in the smallest GPT-2 model, there are only self-attention mechanisms. It has the following dimensions:




d

emb
=
768
,

n

head
=
12
,

d

head
=
64
{\displaystyle d\_{\text{emb}}=768,n\_{\text{head}}=12,d\_{\text{head}}=64}
![{\displaystyle d_{\text{emb}}=768,n_{\text{head}}=12,d_{\text{head}}=64}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dd3bb7b2294f3753ad86ffa754b8840b002bd63f)Since 



12
×
64
=
768
{\displaystyle 12\times 64=768}
![{\displaystyle 12\times 64=768}](https://wikimedia.org/api/rest_v1/media/math/render/svg/27d429c67c8d2bb230091a87d8f4b000de427bb3), its output projection matrix 




W

O
∈


R

(
12
×
64
)
×
768
{\displaystyle W^{O}\in \mathbb {R} ^{(12\times 64)\times 768}}
![{\displaystyle W^{O}\in \mathbb {R} ^{(12\times 64)\times 768}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/be9cea988019d5b7d190ec9592f3c7912eb5efd9) is a square matrix.

The transformer architecture is constructed to calculate output tokens iteratively. Assuming 



t
=
0
{\displaystyle t=0}
![{\displaystyle t=0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/43469ec032d858feae5aa87029e22eaaf0109e9c) refers to the calculation of the first output token 



i
=
0
{\displaystyle i=0}
![{\displaystyle i=0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/31a682d568ee6a5fe51d76423186057f625ada5c), for step 



t
>
0
{\displaystyle t>0}
![{\displaystyle t>0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/29a2960e88369263fe3cfe00ccbfeb83daee212a), the output token 



i
=
0
{\displaystyle i=0}
![{\displaystyle i=0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/31a682d568ee6a5fe51d76423186057f625ada5c) shall remain constant. This ensures properties of the model similar to [autoregressive models](https://en.wikipedia.org/wiki/Autoregressive_models). Therefore, at every time step 



t
{\displaystyle t}
![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560), the calculation for all outputs 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20) should not have access to tokens at position 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0) for 



j
>=
i
{\displaystyle j>=i}
![{\displaystyle j>=i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0962580a4b2002cf7038e5f3529763c32044a040) (as it naturally is the case for time step 



t
=
i
{\displaystyle t=i}
![{\displaystyle t=i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/211e2471862f32d3a3ab7718688b739056c20adc), when tokens 



j
>
t
{\displaystyle j>t}
![{\displaystyle j>t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8b16985b39fa0ca2efcd29a2ea745312c6ee7915) are not yet calculated). This behavior may be accomplished before the softmax stage by adding a mask matrix 



M
{\displaystyle M}
![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd) that is 



−
∞
{\displaystyle -\infty }
![{\displaystyle -\infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/ca2608c4b5fd3bffc73585f8c67e379b4e99b6f1) at entries where the attention link must be cut, and 



0
{\displaystyle 0}
![{\displaystyle 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2aae8864a3c1fec9585261791a809ddec1489950) at other places:








MaskedAttention
(
Q
,
K
,
V
)
=

softmax

(

M
+



Q

K


T


d

k
)
V
{\displaystyle {\begin{aligned}{\text{MaskedAttention}}(Q,K,V)={\text{softmax}}\left(M+{\frac {QK^{\mathrm {T} }}{\sqrt {d\_{k}}}}\right)V\end{aligned}}}
![{\displaystyle {\begin{aligned}{\text{MaskedAttention}}(Q,K,V)={\text{softmax}}\left(M+{\frac {QK^{\mathrm {T} }}{\sqrt {d_{k}}}}\right)V\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8d99a80dbf8da6e52c37ba3c9965387a19f82975) The following matrix is commonly used in decoder self-attention modules, called "causal masking":




M

causal
=


[



0

−
∞

−
∞

…

−
∞


0

0

−
∞

…

−
∞


0

0

0

…

−
∞


⋮

⋮

⋮

⋱

⋮


0

0

0

…

0
]
{\displaystyle M\_{\text{causal}}={\begin{bmatrix}0&-\infty &-\infty &\dots &-\infty \\0&0&-\infty &\dots &-\infty \\0&0&0&\dots &-\infty \\\vdots &\vdots &\vdots &\ddots &\vdots \\0&0&0&\dots &0\end{bmatrix}}}
![{\displaystyle M_{\text{causal}}={\begin{bmatrix}0&-\infty &-\infty &\dots &-\infty \\0&0&-\infty &\dots &-\infty \\0&0&0&\dots &-\infty \\\vdots &\vdots &\vdots &\ddots &\vdots \\0&0&0&\dots &0\end{bmatrix}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/981c71d86645b9f71d314dc671903905c0c30a9a)

In words, it means that each token can pay attention to itself, and every token before it, but not any after it. A non-masked attention module can be thought of as a masked attention module where the mask has all entries zero. As an example of an uncommon use of mask matrix, the [XLNet](https://en.wikipedia.org/wiki/XLNet) considers all masks of the form 



P

M

causal

P

−
1
{\displaystyle PM\_{\text{causal}}P^{-1}}
![{\displaystyle PM_{\text{causal}}P^{-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/08430a7d86ac20f4e73548c704aff43512d88f46), where 



P
{\displaystyle P}
![{\displaystyle P}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b4dc73bf40314945ff376bd363916a738548d40a) is a random [permutation matrix](https://en.wikipedia.org/wiki/Permutation_matrix).

[![](//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Transformer%2C_one_encoder_block.png/250px-Transformer%2C_one_encoder_block.png)](https://en.wikipedia.org/wiki/File:Transformer,_one_encoder_block.png)

One encoder layer

An encoder consists of an embedding layer, followed by multiple encoder layers.

Each encoder layer consists of two major components: a self-attention mechanism and a feed-forward layer. It takes an input as a sequence of input vectors, applies the self-attention mechanism, to produce an intermediate sequence of vectors, then applies the feed-forward layer for each vector individually. Schematically, we have:








given input vectors 


h

0
,

h

1
,
…



combine them into a matrix 
H


=


[




h

0



h

1


⋮
]



EncoderLayer
(
H
)


=


[




FFN
(

MultiheadAttention
(
H
,
H
,
H

)

0
)



FFN
(

MultiheadAttention
(
H
,
H
,
H

)

1
)


⋮
]
{\displaystyle {\begin{aligned}{\text{given input vectors }}&h\_{0},h\_{1},\dots \\{\text{combine them into a matrix }}H&={\begin{bmatrix}h\_{0}\\h\_{1}\\\vdots \end{bmatrix}}\\{\text{EncoderLayer}}(H)&={\begin{bmatrix}{\text{FFN}}({\text{MultiheadAttention}}(H,H,H)\_{0})\\{\text{FFN}}({\text{MultiheadAttention}}(H,H,H)\_{1})\\\vdots \end{bmatrix}}\\\end{aligned}}}
![{\displaystyle {\begin{aligned}{\text{given input vectors }}&h_{0},h_{1},\dots \\{\text{combine them into a matrix }}H&={\begin{bmatrix}h_{0}\\h_{1}\\\vdots \end{bmatrix}}\\{\text{EncoderLayer}}(H)&={\begin{bmatrix}{\text{FFN}}({\text{MultiheadAttention}}(H,H,H)_{0})\\{\text{FFN}}({\text{MultiheadAttention}}(H,H,H)_{1})\\\vdots \end{bmatrix}}\\\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fd9a9a11a953fbb54e9a41092b2fd5e0e04da7e8)

where 




FFN
{\displaystyle {\text{FFN}}}
![{\displaystyle {\text{FFN}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ad653c6de611b65e2c8f58ac99a27bb4406b1ed8) stands for "feed-forward network". We can more succinctly write it as




EncoderLayer
(
H
)
=

FFN
(

MultiheadAttention
(
H
,
H
,
H
)
)
{\displaystyle {\text{EncoderLayer}}(H)={\text{FFN}}({\text{MultiheadAttention}}(H,H,H))}
![{\displaystyle {\text{EncoderLayer}}(H)={\text{FFN}}({\text{MultiheadAttention}}(H,H,H))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c181dfb3b1a62638c2a05462827bbe405dc63d7)with the implicit convention that the 




FFN
{\displaystyle {\text{FFN}}}
![{\displaystyle {\text{FFN}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ad653c6de611b65e2c8f58ac99a27bb4406b1ed8) is applied to each row of the matrix individually.

The encoder layers are stacked. The first encoder layer takes the sequence of input vectors from the embedding layer, producing a sequence of vectors. This sequence of vectors is processed by the second encoder, and so on. The output from the final encoder layer is then used by the decoder.

As the encoder processes the entire input all at once, every token can attend to every other token (all-to-all attention), so there is no need for causal masking.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/5/55/Transformer%2C_one_decoder_block.png/250px-Transformer%2C_one_decoder_block.png)](https://en.wikipedia.org/wiki/File:Transformer,_one_decoder_block.png)

One decoder layer

A decoder consists of an embedding layer, followed by multiple decoder layers, followed by an un-embedding layer.

Each decoder consists of three major components: a causally masked self-attention mechanism, a cross-attention mechanism, and a feed-forward neural network. The decoder functions in a similar fashion to the encoder, but an additional attention mechanism is inserted which instead draws relevant information from the encodings generated by the encoders. This mechanism can also be called the *encoder–decoder attention*.

Like the first encoder, the first decoder takes positional information and embeddings of the output sequence as its input, rather than encodings. The transformer must not use the current or future output to predict an output, so the output sequence must be partially masked to prevent this reverse information flow. This allows for [autoregressive](https://en.wikipedia.org/wiki/Autoregressive_model) text generation. For decoding, all-to-all attention is inappropriate, because a token cannot attend to tokens not yet generated. Thus, the self-attention module in the decoder is causally masked.

In contrast, the cross-attention mechanism attends to the output vectors of the encoder, which is computed before the decoder starts decoding. Consequently, there is no need for masking in the cross-attention mechanism.

Schematically, we have:








H
′


=

MaskedMultiheadAttention
(
H
,
H
,
H
)



DecoderLayer
(
H
)


=

FFN
(

MultiheadAttention
(

H
′
,

H

E
,

H

E
)
)
{\displaystyle {\begin{aligned}H'&={\text{MaskedMultiheadAttention}}(H,H,H)\\{\text{DecoderLayer}}(H)&={\text{FFN}}({\text{MultiheadAttention}}(H',H^{E},H^{E}))\end{aligned}}}
![{\displaystyle {\begin{aligned}H'&={\text{MaskedMultiheadAttention}}(H,H,H)\\{\text{DecoderLayer}}(H)&={\text{FFN}}({\text{MultiheadAttention}}(H',H^{E},H^{E}))\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7be5264b442c0f99ef6d3c6e8a8bccf78902ade6)where 




H

E
{\displaystyle H^{E}}
![{\displaystyle H^{E}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ca07d5c8fe45403067683c7e75a5e1e50d461dea) is the matrix with rows being the output vectors from the encoder.

The last decoder is followed by a final un-embedding layer to produce the output probabilities over the vocabulary. Then, one of the tokens is sampled according to the probability, and the decoder can be run again to produce the next token, etc., autoregressively generating output text.

## Full transformer architecture

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=23)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Transformer%2C_stacked_multilayers.png/250px-Transformer%2C_stacked_multilayers.png)](https://en.wikipedia.org/wiki/File:Transformer,_stacked_multilayers.png)

(a) One encoder layer and one decoder layer. (b) Two encoder layers and two decoder layers. The sublayers are labelled as well.

Each encoder layer contains 2 sublayers: the self-attention and the feedforward network. Each decoder layer contains 3 sublayers: the causally masked self-attention, the cross-attention, and the feedforward network.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Transformer_encoder%2C_with_norm-first_and_norm-last.png/250px-Transformer_encoder%2C_with_norm-first_and_norm-last.png)](https://en.wikipedia.org/wiki/File:Transformer_encoder,_with_norm-first_and_norm-last.png)

Transformer encoder with norm-first and norm-last

[![](//upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Transformer_decoder%2C_with_norm-first_and_norm-last.png/250px-Transformer_decoder%2C_with_norm-first_and_norm-last.png)](https://en.wikipedia.org/wiki/File:Transformer_decoder,_with_norm-first_and_norm-last.png)

Transformer decoder with norm-first and norm-last

[![](//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Transformer%2C_full_architecture.png/250px-Transformer%2C_full_architecture.png)](https://en.wikipedia.org/wiki/File:Transformer,_full_architecture.png)

Block diagram for the full transformer architecture

[![](//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Transformer%2C_schematic_object_hierarchy%2C_for_implementation_in_object-oriented_programming.png/250px-Transformer%2C_schematic_object_hierarchy%2C_for_implementation_in_object-oriented_programming.png)](https://en.wikipedia.org/wiki/File:Transformer,_schematic_object_hierarchy,_for_implementation_in_object-oriented_programming.png)

Schematic [object hierarchy](https://en.wikipedia.org/wiki/Object_hierarchy) for the full transformer architecture, in [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) style

The final points of detail are the [residual connections](https://en.wikipedia.org/wiki/Residual_neural_network) and [layer normalization](https://en.wikipedia.org/wiki/Layer_normalization), (denoted as "LayerNorm", or "LN" in the following), which while conceptually unnecessary, are necessary for numerical stability and convergence.

The residual connection, which is introduced to avoid vanishing gradient issues and stabilize the training process, can be expressed as follows: y = F(x) + x. The expression indicates that an output y is the sum of the transformation of input x (F(x)) and the input itself (x). Adding the input x can preserve the input information and avoid issues when the gradient of F(x) is close to zero.

Similarly to how the feedforward network modules are applied individually to each vector, the LayerNorm is also applied individually to each vector.

There are two common conventions in use: the *post-LN* and the *pre-LN* convention. In the post-LN convention, the output of each sublayer is 




L
a
y
e
r
N
o
r
m
(
x
+

S
u
b
l
a
y
e
r
(
x
)
)
{\displaystyle \mathrm {LayerNorm} (x+\mathrm {Sublayer} (x))}
![{\displaystyle \mathrm {LayerNorm} (x+\mathrm {Sublayer} (x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dbfd5ef346a396976d4b6cea30408e27192b4ca8)where 




S
u
b
l
a
y
e
r
(
x
)
{\displaystyle \mathrm {Sublayer} (x)}
![{\displaystyle \mathrm {Sublayer} (x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a8c8327dbca36935f9f5f157967e6df5603880c9) is the function implemented by the sublayer itself.

In the pre-LN convention, the output of each sublayer is



x
+

S
u
b
l
a
y
e
r
(

L
a
y
e
r
N
o
r
m
(
x
)
)
{\displaystyle x+\mathrm {Sublayer} (\mathrm {LayerNorm} (x))}
![{\displaystyle x+\mathrm {Sublayer} (\mathrm {LayerNorm} (x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/14a098c27734ee53b1efbf41656e1797f9ed2874)The original 2017 transformer used the post-LN convention. It was difficult to train and required careful hyperparameter tuning and a "warm-up" in learning rate, where it starts small and gradually increases. The pre-LN convention, proposed several times in 2018, was found to be easier to train, requiring no warm-up, leading to faster convergence.

The following is the pseudocode for a standard pre-LN encoder–decoder transformer, adapted from *Formal Algorithms for Transformers*

```
input: Encoder input t_e
       Decoder input t_d
output: Array of probability distributions, with shape (decoder vocabulary size x length(decoder output sequence))

/* encoder */
z_e ← encoder.tokenizer(t_e)

for each t in 1:length(z_e) do
    z_e[t] ← encoder.embedding(z_e[t]) + encoder.positional_embedding(t)

for each l in 1:length(encoder.layers) do
    layer ← encoder.layers[l]

    /* first sublayer */
    z_e_copy ← copy(z_e)
    for each t in 1:length(z_e) do
        z_e[t] ← layer.layer_norm(z_e[t])
    z_e ← layer.multihead_attention(z_e, z_e, z_e)
    for each t in 1:length(z_e) do
        z_e[t] ← z_e[t] + z_e_copy[t]

    /* second sublayer */
    z_e_copy ← copy(z_e)
    for each t in 1:length(z_e) do
        z_e[t] ← layer.layer_norm(z_e[t])
    z_e ← layer.feedforward(z_e)
    for each t in 1:length(z_e) do
        z_e[t] ← z_e[t] + z_e_copy[t]

for each t in 1:length(z_e) do
    z_e[t] ← encoder.final_layer_norm(z_e[t])

/* decoder */
z_d ← decoder.tokenizer(t_d)

for each t in 1:length(z_d) do
    z_d[t] ← decoder.embedding(z_d[t]) + decoder.positional_embedding(t)

for each l in 1:length(decoder.layers) do
        layer ← decoder.layers[l]

        /* first sublayer */
        z_d_copy ← copy(z_d)
        for each t in 1:length(z_d) do
            z_d[t] ← layer.layer_norm(z_d[t])
        z_d ← layer.masked_multihead_attention(z_d, z_d, z_d)
        for each t in 1:length(z_d) do
            z_d[t] ← z_d[t] + z_d_copy[t]

        /* second sublayer */
        z_d_copy ← copy(z_d)
        for each t in 1:length(z_d) do
            z_d[t] ← layer.layer_norm(z_d[t])
        z_d ← layer.multihead_attention(z_d, z_e, z_e) 
        for each i in 1:length(z_d) do
            z_d[t] ← z_d[t] + z_d_copy[t]

        /* third sublayer */
        z_d_copy ← copy(z_d)
        for each t in 1:length(z_d) do
            z_d[t] ← layer.layer_norm(z_d[t])
        z_d ← layer.feedforward(z_d)
        for each t in 1:length(z_d) do
            z_d[t] ← z_d[t] + z_d_copy[t]

z_d ← decoder.final_layer_norm(z_d)

output_distributions ← []
for each t in 1:length(z_d) do
    output_distributions.append(decoder.unembed(z_d[t]))

return output_distributions

```

The transformer architecture, being modular, allows variations. Several common variations are described here.

An "encoder-only" transformer applies the encoder to map an input text into a sequence of vectors that represent the input text. This is usually used for text embedding and [representation learning](https://en.wikipedia.org/wiki/Feature_learning) for downstream applications. [BERT](https://en.wikipedia.org/wiki/BERT_(language_model)) is encoder-only. They are less often used currently, as they were found to be not significantly better than training an encoder–decoder transformer, then taking just the encoder. They are also referred to as "all-to-all" or "BERT-like".

A "decoder-only" transformer is not literally decoder-only, since without an encoder, the cross-attention mechanism has nothing to attend to. Thus, the decoder layers in a decoder-only transformer is composed of just two sublayers: the causally masked self-attention, and the feedforward network. This is usually used for [text generation](https://en.wikipedia.org/wiki/Natural_language_generation) and [instruction following](https://en.wikipedia.org/wiki/Large_language_model#Instruction_tuning). The models in the [GPT series](https://en.wikipedia.org/wiki/Generative_pre-trained_transformer) and [Chinchilla series](https://en.wikipedia.org/wiki/Chinchilla_(language_model)) are decoder-only. They are also referred to as "autoregressive" or "causal".

An "encoder–decoder" transformer is generally the same as the original transformer, with 2 sublayers per encoder layer and 3 sublayers per decoder layer, etc. They might have minor architectural improvements, such as [alternative activation functions](#Alternative_activation_functions), [changing the location of normalization](#pre-LN), etc. This is also usually used for text generation and instruction following. The models in the [T5 series](https://en.wikipedia.org/wiki/T5_(language_model)) are encoder–decoder.

A "prefixLM" (prefix language model) is a decoder-only architecture, but with prefix masking, which is different from causal masking. Specifically, it has mask of the form




M

prefixLM
=


[




0

−
∞



0


M

causal
]
{\displaystyle M\_{\text{prefixLM}}={\begin{bmatrix}\mathbf {0} &-\infty \\\mathbf {0} &M\_{\text{causal}}\end{bmatrix}}}
![{\displaystyle M_{\text{prefixLM}}={\begin{bmatrix}\mathbf {0} &-\infty \\\mathbf {0} &M_{\text{causal}}\end{bmatrix}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55dde3d4ea5e6d9e321ca34ebfdd37268558e1aa)where the first columns correspond to the "prefix", and the subsequent columns correspond to the autoregressively generated text based on the prefix. They resemble encoder–decoder models, but has less "sparsity". Such models are rarely used, though they are cited as theoretical possibilities and benchmarked comparisons.

There are also mixed seq2seq models. For example, in 2020, Google Translate replaced the previous RNN-encoder–RNN-decoder model with a transformer-encoder–RNN-decoder model, as transformer-based decoders did not appear to significantly increase quality unlike the encoder, while the RNN decoder was much faster.

### Alternative activation functions

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=28)]

The original transformer uses [ReLU](https://en.wikipedia.org/wiki/ReLU) [activation function](https://en.wikipedia.org/wiki/Activation_function). Other activation functions were developed. The [Llama series](https://en.wikipedia.org/wiki/Llama_(language_model)) and [PaLM](https://en.wikipedia.org/wiki/PaLM) used SwiGLU; both GPT-1 and BERT used GELU.

Alternative activation functions are often used in combination with [Gated Linear Units](https://en.wikipedia.org/wiki/Gated_Linear_Unit) in the feedforward module.

### Alternative normalizations

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=29)]

The normalization used in the transformer can be different from LayerNorm. One example is [RMSNorm](https://en.wikipedia.org/wiki/RMSNorm) which is used in the [Llama series](https://en.wikipedia.org/wiki/Llama_(language_model)). Other examples include CapsuleNorm ScaleNorm, or FixNorm.

### Alternative positional encodings

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=30)]

Transformers may use other positional encoding methods than sinusoidal.

The original transformer paper reported using a learned positional encoding, but finding it not superior to the sinusoidal one. Later, found that causal masking itself provides enough signal to a transformer decoder that it can learn to implicitly perform absolute positional encoding without the positional encoding module.

RoPE (rotary positional embedding), is best explained by considering a list of 2-dimensional vectors 



[
(

x

1

(
1
)
,

x

1

(
2
)
)
,
(

x

2

(
1
)
,

x

2

(
2
)
)
,
(

x

3

(
1
)
,

x

3

(
2
)
)
,
.
.
.
]
{\displaystyle [(x\_{1}^{(1)},x\_{1}^{(2)}),(x\_{2}^{(1)},x\_{2}^{(2)}),(x\_{3}^{(1)},x\_{3}^{(2)}),...]}
![{\displaystyle [(x_{1}^{(1)},x_{1}^{(2)}),(x_{2}^{(1)},x_{2}^{(2)}),(x_{3}^{(1)},x_{3}^{(2)}),...]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/08b00c812263b798fed7b345975d49dbebdfada5). Now pick some angle 



θ
{\displaystyle \theta }
![{\displaystyle \theta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af). Then RoPE encoding is




RoPE


(

x

m

(
1
)
,

x

m

(
2
)
,
m


)
=


(



cos
⁡
m
θ

−
sin
⁡
m
θ


sin
⁡
m
θ

cos
⁡
m
θ
)


(




x

m

(
1
)



x

m

(
2
)
)
=


(




x

m

(
1
)
cos
⁡
m
θ
−

x

m

(
2
)
sin
⁡
m
θ



x

m

(
2
)
cos
⁡
m
θ
+

x

m

(
1
)
sin
⁡
m
θ
)
{\displaystyle {\text{RoPE}}{\big (}x\_{m}^{(1)},x\_{m}^{(2)},m{\big )}={\begin{pmatrix}\cos m\theta &-\sin m\theta \\\sin m\theta &\cos m\theta \end{pmatrix}}{\begin{pmatrix}x\_{m}^{(1)}\\x\_{m}^{(2)}\\\end{pmatrix}}={\begin{pmatrix}x\_{m}^{(1)}\cos m\theta -x\_{m}^{(2)}\sin m\theta \\x\_{m}^{(2)}\cos m\theta +x\_{m}^{(1)}\sin m\theta \\\end{pmatrix}}}
![{\displaystyle {\text{RoPE}}{\big (}x_{m}^{(1)},x_{m}^{(2)},m{\big )}={\begin{pmatrix}\cos m\theta &-\sin m\theta \\\sin m\theta &\cos m\theta \end{pmatrix}}{\begin{pmatrix}x_{m}^{(1)}\\x_{m}^{(2)}\\\end{pmatrix}}={\begin{pmatrix}x_{m}^{(1)}\cos m\theta -x_{m}^{(2)}\sin m\theta \\x_{m}^{(2)}\cos m\theta +x_{m}^{(1)}\sin m\theta \\\end{pmatrix}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a15ebe8d780e084275a5115ab1bd66867b2df86)Equivalently, if we write the 2-dimensional vectors as complex numbers 




z

m
:=

x

m

(
1
)
+
i

x

m

(
2
)
{\displaystyle z\_{m}:=x\_{m}^{(1)}+ix\_{m}^{(2)}}
![{\displaystyle z_{m}:=x_{m}^{(1)}+ix_{m}^{(2)}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ed57dd02fd5aafea96a4ee28322e10ca6883249f), then RoPE encoding is just multiplication by an angle:




RoPE


(

z

m
,
m


)
=

e

i
m
θ

z

m
{\displaystyle {\text{RoPE}}{\big (}z\_{m},m{\big )}=e^{im\theta }z\_{m}}
![{\displaystyle {\text{RoPE}}{\big (}z_{m},m{\big )}=e^{im\theta }z_{m}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de13aa67381dcfbf189a2beca91c14aa914c1d62)For a list of 



2
n
{\displaystyle 2n}
![{\displaystyle 2n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/134afa8ff09fdddd24b06f289e92e3a045092bd1)-dimensional vectors, a RoPE encoder is defined by a sequence of angles 




θ

(
1
)
,
.
.
.
,

θ

(
n
)
{\displaystyle \theta ^{(1)},...,\theta ^{(n)}}
![{\displaystyle \theta ^{(1)},...,\theta ^{(n)}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cf7ced81707daa22c51c4294a84b3f9d14d30eef). Then the RoPE encoding is applied to each pair of coordinates.

The benefit of RoPE is that the dot-product between two vectors depends on their relative location only:




RoPE


(
x
,
m



)

T

RoPE


(
y
,
n


)
=

RoPE


(
x
,
m
+
k



)

T

RoPE


(
y
,
n
+
k


)
{\displaystyle {\text{RoPE}}{\big (}x,m{\big )}^{T}{\text{RoPE}}{\big (}y,n{\big )}={\text{RoPE}}{\big (}x,m+k{\big )}^{T}{\text{RoPE}}{\big (}y,n+k{\big )}}
![{\displaystyle {\text{RoPE}}{\big (}x,m{\big )}^{T}{\text{RoPE}}{\big (}y,n{\big )}={\text{RoPE}}{\big (}x,m+k{\big )}^{T}{\text{RoPE}}{\big (}y,n+k{\big )}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e31c0d3482350f84642a7ec384650ab781eda79d)
for any integer 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40).

ALiBi (Attention with Linear Biases) is not a *replacement* for the positional encoder on the original transformer. Instead, it is an *additional* positional encoder that is directly plugged into the attention mechanism. Specifically, the ALiBi attention mechanism is








Attention
(
Q
,
K
,
V
)
=

softmax

(




Q

K


T


d

k
+
s
B
)
V
{\displaystyle {\begin{aligned}{\text{Attention}}(Q,K,V)={\text{softmax}}\left({\frac {QK^{\mathrm {T} }}{\sqrt {d\_{k}}}}+sB\right)V\end{aligned}}}
![{\displaystyle {\begin{aligned}{\text{Attention}}(Q,K,V)={\text{softmax}}\left({\frac {QK^{\mathrm {T} }}{\sqrt {d_{k}}}}+sB\right)V\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bffa099b8703700a9c48178b2158edb858fc58b9)Here, 



s
{\displaystyle s}
![{\displaystyle s}](https://wikimedia.org/api/rest_v1/media/math/render/svg/01d131dfd7673938b947072a13a9744fe997e632) is a real number ("scalar"), and 



B
{\displaystyle B}
![{\displaystyle B}](https://wikimedia.org/api/rest_v1/media/math/render/svg/47136aad860d145f75f3eed3022df827cee94d7a) is the *linear bias* matrix defined by



B
=


(



0

1

2

3

⋯


−
1

0

1

2

⋯


−
2

−
1

0

1

⋯


−
3

−
2

−
1

0

⋯


⋮

⋮

⋮

⋮

⋱
)
{\displaystyle B={\begin{pmatrix}0&1&2&3&\cdots \\-1&0&1&2&\cdots \\-2&-1&0&1&\cdots \\-3&-2&-1&0&\cdots \\\vdots &\vdots &\vdots &\vdots &\ddots \\\end{pmatrix}}}
![{\displaystyle B={\begin{pmatrix}0&1&2&3&\cdots \\-1&0&1&2&\cdots \\-2&-1&0&1&\cdots \\-3&-2&-1&0&\cdots \\\vdots &\vdots &\vdots &\vdots &\ddots \\\end{pmatrix}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/12fa6edca20501fef7d70c74860db1e2fc70068a)in other words, 




B

i
,
j
=
j
−
i
{\displaystyle B\_{i,j}=j-i}
![{\displaystyle B_{i,j}=j-i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1be4dbbb894617d7ae4dd3118e0be60cd018aec7). The idea being that the linear bias matrix is a softened mask. Just as 



0
{\displaystyle 0}
![{\displaystyle 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2aae8864a3c1fec9585261791a809ddec1489950) represent full attention paid, and 



−
∞
{\displaystyle -\infty }
![{\displaystyle -\infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/ca2608c4b5fd3bffc73585f8c67e379b4e99b6f1) represents no attention paid, the linear bias matrix increases attention paid in one direction and decreases attention paid in the other direction.

ALiBi allows pretraining on short context windows, then fine-tuning on longer context windows. Since it is directly plugged into the attention mechanism, it can be combined with any positional encoder that is plugged into the "bottom" of the entire network (which is where the sinusoidal encoder on the original transformer, as well as RoPE and many others, are located).

#### Relative Position Encodings

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=33)]

Relative Position Encodings is similar to ALiBi, but more generic:








Attention
(
Q
,
K
,
V
)
=

softmax

(




Q

K


T


d

k
+
B
)
V
{\displaystyle {\begin{aligned}{\text{Attention}}(Q,K,V)={\text{softmax}}\left({\frac {QK^{\mathrm {T} }}{\sqrt {d\_{k}}}}+B\right)V\end{aligned}}}
![{\displaystyle {\begin{aligned}{\text{Attention}}(Q,K,V)={\text{softmax}}\left({\frac {QK^{\mathrm {T} }}{\sqrt {d_{k}}}}+B\right)V\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f15684ca2a0019fc697c04d62cea397b8f47dbb2)where 



B
{\displaystyle B}
![{\displaystyle B}](https://wikimedia.org/api/rest_v1/media/math/render/svg/47136aad860d145f75f3eed3022df827cee94d7a) is a [Toeplitz matrix](https://en.wikipedia.org/wiki/Toeplitz_matrix), that is, 




B

i
,
j
=

B


i
′
,

j
′
{\displaystyle B\_{i,j}=B\_{i',j'}}
![{\displaystyle B_{i,j}=B_{i',j'}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fe7155b71c5f6c6f726c49a3c7f3a9047414171d) whenever 



i
−
j
=

i
′
−

j
′
{\displaystyle i-j=i'-j'}
![{\displaystyle i-j=i'-j'}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a421740142156ea5322442d9d58cf47412bd30bf). This is contrasted with the original sinusoidal positional encoding, which is an "absolute positional encoding".

### Efficient implementation

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=34)]

The transformer model has been implemented in standard deep learning [frameworks](https://en.wikipedia.org/wiki/Framework_(computer_science)) such as [TensorFlow](https://en.wikipedia.org/wiki/TensorFlow) and [PyTorch](https://en.wikipedia.org/wiki/PyTorch). *Transformers* is a library produced by [Hugging Face](https://en.wikipedia.org/wiki/Hugging_Face) that supplies transformer-based architectures and pretrained models.

When an autoregressive transformer is used for inference, such as generating text, the query vector is different at each step, but the already-computed key and value vectors are always the same. The **KV caching** method saves the computed key and value vectors at each attention block, so that they are not recomputed at each new token. [PagedAttention](https://en.wikipedia.org/wiki/PagedAttention) applies [memory paging](https://en.wikipedia.org/wiki/Memory_paging) to KV caching.

If a transformer is used with a baked-in prompt, such as ["You are a customer support agent..."], then the key and value vectors can be computed for the prompt, and saved on disk. The saving in compute is significant when the model is used for many short real-time interactions, such as in online chatbots.

In general, when a user uses an autoregressive transformer to generate a continuation to a sequence of tokens, the model would first perform a forward-pass on this sequence, whereby the KV caches over this sequence are computed. This is called **prefilling**. [Hyperscalers](https://en.wikipedia.org/wiki/Hyperscale_computing) serving large Transformer models may use **disaggregated inference**, wherein prefilling and decoding are performed on separately specialized hardware.

FlashAttention is an algorithm that implements the transformer attention mechanism efficiently on a [GPU](https://en.wikipedia.org/wiki/Graphics_processing_unit). It is a communication-avoiding algorithm that performs [matrix multiplications in blocks](https://en.wikipedia.org/wiki/Block_matrix#Block_matrix_operations), such that each block fits within the [cache](https://en.wikipedia.org/wiki/Cache_(computing)) of a GPU, and by careful management of the blocks it minimizes data copying between GPU caches (as data movement is slow). See the page on [softmax](https://en.wikipedia.org/wiki/Softmax_function#Numerical_algorithms) for details.

An improved version, FlashAttention-2, was developed to cater to the rising demand for language models capable of handling longer context lengths. It offers enhancements in work partitioning and parallelism, enabling it to achieve up to 230 TFLOPs/s on [A100](https://en.wikipedia.org/wiki/Nvidia_A100) GPUs ([FP16](https://en.wikipedia.org/wiki/FP16)/[BF16](https://en.wikipedia.org/wiki/BF16)), a 2x speed increase over the original FlashAttention.

Key advancements in FlashAttention-2 include the reduction of non-matmul FLOPs, improved parallelism over the sequence length dimension, better work partitioning between GPU warps, and added support for head dimensions up to 256 and multi-query attention (MQA) and grouped-query attention (GQA).

Benchmarks revealed FlashAttention-2 to be up to 2x faster than FlashAttention and up to 9x faster than a standard attention implementation in PyTorch. Future developments include optimization for new hardware like [H100](https://en.wikipedia.org/wiki/Nvidia_H100) GPUs and new data types like [FP8](https://en.wikipedia.org/wiki/Floating-point_arithmetic).

FlashAttention-4 focuses on [pipelining](https://en.wikipedia.org/wiki/Pipeline_(Unix)) to increase instruction [throughput](https://en.wikipedia.org/wiki/Network_throughput), and was developed to perform particularly well on [Blackwell GPUs](https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)).

#### Multi-Query Attention

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=37)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/8/83/DeepSeek_KV_cache_comparison_between_MHA%2C_GQA%2C_MQA%2C_MLA.svg/250px-DeepSeek_KV_cache_comparison_between_MHA%2C_GQA%2C_MQA%2C_MLA.svg.png)](https://en.wikipedia.org/wiki/File:DeepSeek_KV_cache_comparison_between_MHA,_GQA,_MQA,_MLA.svg)

Comparison between several different forms of attention mechanism and the amount of KV caching necessary for each

Multi-Query Attention changes the Multihead Attention mechanism. Whereas normally,

MultiheadAttention
(
Q
,
K
,
V
)
=


Concat

i
∈
[

n

heads
]

(


Attention
(
X

W

i

Q
,
X

W

i

K
,
X

W

i

V
)
)

W

O
{\displaystyle {\text{MultiheadAttention}}(Q,K,V)={\text{Concat}}\_{i\in [n\_{\text{heads}}]}\left({\text{Attention}}(XW\_{i}^{Q},XW\_{i}^{K},XW\_{i}^{V})\right)W^{O}}
![{\displaystyle {\text{MultiheadAttention}}(Q,K,V)={\text{Concat}}_{i\in [n_{\text{heads}}]}\left({\text{Attention}}(XW_{i}^{Q},XW_{i}^{K},XW_{i}^{V})\right)W^{O}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/02afa45e87322c7c0b4919c8ba934861b54fc06e)with Multi-Query Attention, there is just one 




W

K
,

W

V
{\displaystyle W^{K},W^{V}}
![{\displaystyle W^{K},W^{V}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d4e0456602ee9f229ab1286d5f486eb5f71332ae), thus:

MultiQueryAttention
(
Q
,
K
,
V
)
=


Concat

i
∈
[

n

heads
]

(


Attention
(
X

W

i

Q
,
X

W

K
,
X

W

V
)
)

W

O
{\displaystyle {\text{MultiQueryAttention}}(Q,K,V)={\text{Concat}}\_{i\in [n\_{\text{heads}}]}\left({\text{Attention}}(XW\_{i}^{Q},XW^{K},XW^{V})\right)W^{O}}
![{\displaystyle {\text{MultiQueryAttention}}(Q,K,V)={\text{Concat}}_{i\in [n_{\text{heads}}]}\left({\text{Attention}}(XW_{i}^{Q},XW^{K},XW^{V})\right)W^{O}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2eb0939568b3364f0c300eca805463355ce6d554)

This has a neutral effect on model quality and training speed, but increases inference speed.

More generally, grouped-query attention (GQA) partitions attention heads into groups, each of which shares the key-value pair. MQA is GQA with one group, while standard Multihead Attention is GQA with the maximal number of groups.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/2/20/DeepSeek_MoE_and_MLA_%28DeepSeek-V2%29.svg/250px-DeepSeek_MoE_and_MLA_%28DeepSeek-V2%29.svg.png)](https://en.wikipedia.org/wiki/File:DeepSeek_MoE_and_MLA_(DeepSeek-V2).svg)

The architecture of V2, showing both MLA and a variant of [mixture of experts](https://en.wikipedia.org/wiki/Mixture_of_experts)

Multihead Latent Attention (MLA) is a [low-rank approximation](https://en.wikipedia.org/wiki/Low-rank_approximation) to standard MHA. Specifically, each hidden vector, before entering the attention mechanism, is first projected to two low-dimensional spaces ("latent space"), one for query and one for key-value (KV vector). This design minimizes the KV cache, as only the low-dimensional KV vector needs to be cached.

#### Speculative decoding

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=38)]

Speculative decoding is a method to accelerate token decoding. Similarly to [speculative execution](https://en.wikipedia.org/wiki/Speculative_execution) in CPUs, future tokens are computed quickly, then verified. If the quickly computed tokens are incorrect, they are discarded and computed slowly.

The key factor in speculative decoding is that a transformer decoder can verify faster than it can decode, in the following sense.

Suppose we have two transformer models like GPT-3 and GPT-3-small, both with a context window size of 512. To generate an entire context window autoregressively with greedy decoding with GPT-3, it must be run for 512 times, each time generating a token 




x

1
,

x

2
,
.
.
.
,

x

512
{\displaystyle x\_{1},x\_{2},...,x\_{512}}
![{\displaystyle x_{1},x_{2},...,x_{512}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fd0b4677bb81d2d8af40d42edf0c42d0b2eaa34e), taking time 



512

T

GPT-3
{\displaystyle 512T\_{\text{GPT-3}}}
![{\displaystyle 512T_{\text{GPT-3}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/68cfccf622ab2cc50786ad9bcdc7ed5ab1dff812). However, if we had some educated guess for the values of these tokens, we could verify all of them in parallel, in one run of the model, by checking that each 




x

t
{\displaystyle x\_{t}}
![{\displaystyle x_{t}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f279a30bc8eabc788f3fe81c9cfb674e72e858db) is indeed the token with the largest log-likelihood in the 



t
{\displaystyle t}
![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560)-th output.

In speculative decoding, a smaller model or some other simple heuristic is used to generate a few speculative tokens that are subsequently verified by the larger model. For example, suppose we use GPT-3-small to generate four speculative tokens: 







x
~

1
,




x
~

2
,




x
~

3
,




x
~

4
{\displaystyle {\tilde {x}}\_{1},{\tilde {x}}\_{2},{\tilde {x}}\_{3},{\tilde {x}}\_{4}}
![{\displaystyle {\tilde {x}}_{1},{\tilde {x}}_{2},{\tilde {x}}_{3},{\tilde {x}}_{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d8db060dad8f25abc632d0c847694d10943fefc0). This only takes 



4

T

GPT-3-small
{\displaystyle 4T\_{\text{GPT-3-small}}}
![{\displaystyle 4T_{\text{GPT-3-small}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f27766b2e3974a6b36c1a34989690d453598eedd). These tokens are then run through the larger GPT-3 in one go. Suppose that 







x
~

1
{\displaystyle {\tilde {x}}\_{1}}
![{\displaystyle {\tilde {x}}_{1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bd6433a2811e7287025f60332718fe31d72003a7) and 







x
~

2
{\displaystyle {\tilde {x}}\_{2}}
![{\displaystyle {\tilde {x}}_{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e6c8b294488a1ddcc0380c8a8cb75b3410fe7ede) are verified by GPT-3 as what it would have picked, then those are kept, but 







x
~

3
{\displaystyle {\tilde {x}}\_{3}}
![{\displaystyle {\tilde {x}}_{3}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2de3175aa437329b2c5b3a3fc1167be15882b81d) is not, so 







x
~

3
,




x
~

4
{\displaystyle {\tilde {x}}\_{3},{\tilde {x}}\_{4}}
![{\displaystyle {\tilde {x}}_{3},{\tilde {x}}_{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fa75c04dd4b830a3f8686e81cc88136365640db8) are discarded, and GPT-3 is run on those. This would take 



4

T

GPT-3-small
+
3

T

GPT-3
{\displaystyle 4T\_{\text{GPT-3-small}}+3T\_{\text{GPT-3}}}
![{\displaystyle 4T_{\text{GPT-3-small}}+3T_{\text{GPT-3}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4c60c2a824e236297f444a500e8c324540dfd24d), which might be shorter than 



4

T

GPT-3
{\displaystyle 4T\_{\text{GPT-3}}}
![{\displaystyle 4T_{\text{GPT-3}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e2bf07e1b17f4de6fb7480487563b3a31613dfd7).

For non-greedy decoding, similar ideas apply, except the speculative tokens are accepted or rejected stochastically, in a way that guarantees the final output distribution is the same as if speculative decoding was not used.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Multi-Token_Prediction_%28DeepSeek%29_01.svg/250px-Multi-Token_Prediction_%28DeepSeek%29_01.svg.png)](https://en.wikipedia.org/wiki/File:Multi-Token_Prediction_(DeepSeek)_01.svg)

Multi-token prediction

In Multi-Token Prediction, a single forward pass creates a final embedding vector, which then is un-embedded into a token probability. However, that vector can then be further processed by another transformer block to predict the *next* token, and so on for arbitrarily many steps into the future. This trades off accuracy for speed, since each new token costs just one more transformer block, rather than the entire stack.

### Sub-quadratic transformers

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=39)]

Training transformer-based architectures can be expensive, especially for long inputs. Many methods have been developed to attempt to address the issue. In the image domain, Swin transformer is an efficient architecture that performs attention inside shifting windows. In the audio domain, SepTr decouples the attention in time and frequency domains. *Long Range Arena* (2020) is a standard benchmark for comparing the behavior of transformer architectures over long inputs.

#### Alternative attention graphs

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=40)]

The standard attention graph is either all-to-all or causal, both of which scales as 



O
(

N

2
)
{\displaystyle O(N^{2})}
![{\displaystyle O(N^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e5d43a3df904fa4d7220f5b86285298aa36d969b) where 



N
{\displaystyle N}
![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3) is the number of tokens in a sequence.

Reformer (2020) reduces the computational load from 



O
(

N

2
)
{\displaystyle O(N^{2})}
![{\displaystyle O(N^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e5d43a3df904fa4d7220f5b86285298aa36d969b) to 



O
(
N
ln
⁡
N
)
{\displaystyle O(N\ln N)}
![{\displaystyle O(N\ln N)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3d19d1f2923ba0d7170ade3df165c0de1d2423e) by using [locality-sensitive hashing](https://en.wikipedia.org/wiki/Locality-sensitive_hashing) and reversible layers.

Sparse attention uses attention graphs that grows slower than 



O
(

N

2
)
{\displaystyle O(N^{2})}
![{\displaystyle O(N^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e5d43a3df904fa4d7220f5b86285298aa36d969b). For example, BigBird (2020) uses random [small-world networks](https://en.wikipedia.org/wiki/Small-world_network) which grows as 



O
(
N
)
{\displaystyle O(N)}
![{\displaystyle O(N)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/78484c5c26cfc97bb3b915418caa09454421e80b).

Ordinary transformers require a memory size that is quadratic in the size of the context window. Attention-free transformers reduce this to a linear dependence while still retaining the advantages of a transformer by linking the key to the value.

#### Random Feature Attention

[[edit](/w/index.php?title=Transformer_(deep_learning)&action=edit&section=41)]

Random Feature Attention (2021) uses [Fourier random features](https://en.wikipedia.org/wiki/Radial_basis_function_kernel#Fourier_random_features):



φ
(
x
)
=


1

D
[
cos
⁡
⟨

w

1
,
x
⟩
,
sin
⁡
⟨

w

1
,
x
⟩
,
⋯
cos
⁡
⟨

w

D
,
x
⟩
,
sin
⁡
⟨

w

D
,
x
⟩

]

T
{\displaystyle \varphi (x)={\frac {1}{\sqrt {D}}}[\cos \langle w\_{1},x\rangle ,\sin \langle w\_{1},x\rangle ,\cdots \cos \langle w\_{D},x\rangle ,\sin \langle w\_{D},x\rangle ]^{T}}
![{\displaystyle \varphi (x)={\frac {1}{\sqrt {D}}}[\cos \langle w_{1},x\rangle ,\sin \langle w_{1},x\rangle ,\cdots \cos \langle w_{D},x\rangle ,\sin \langle w_{D},x\rangle ]^{T}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/243ed0310c01dc8193d985ea838e92191cec4fac)where 




w

1
,
.
.
.
,

w

D
{\displaystyle w\_{1},...,w\_{D}}
![{\displaystyle w_{1},...,w_{D}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c97fcd8d8f90947efda4e03b5ffc293c61cb094c) are independent samples from the normal distribution 



N
(
0
,

σ

2
I
)
{\displaystyle N(0,\sigma ^{2}I)}
![{\displaystyle N(0,\sigma ^{2}I)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9d30d920f052b8230e76c64a55f2cddc963b201f). This choice of parameters satisfy 




E
[
⟨
φ
(
x
)
,
φ
(
y
)
⟩
]
=

e

−



‖
x
−
y

‖

2

2

σ

2
{\displaystyle \mathbb {E} [\langle \varphi (x),\varphi (y)\rangle ]=e^{-{\frac {\|x-y\|^{2}}{2\sigma ^{2}}}}}
![{\displaystyle \mathbb {E} [\langle \varphi (x),\varphi (y)\rangle ]=e^{-{\frac {\|x-y\|^{2}}{2\sigma ^{2}}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2e0f85eabd1581c50b848cf5d2d73ce4e7ac6e1d), or 




e

⟨
x
,
y
⟩

/

σ

2
=

E
[
⟨

e

‖
x

‖

2

/
2

σ

2
φ
(
x
)
,

e

‖
y

‖

2

/
2

σ

2
φ
(
y
)
⟩
]
≈
⟨

e

‖
x

‖

2

/
2

σ

2
φ
(
x
)
,

e

‖
y

‖

2

/
2

σ

2
φ
(
y
)
⟩
{\displaystyle e^{\langle x,y\rangle /\sigma ^{2}}=\mathbb {E} [\langle e^{\|x\|^{2}/2\sigma ^{2}}\varphi (x),e^{\|y\|^{2}/2\sigma ^{2}}\varphi (y)\rangle ]\approx \langle e^{\|x\|^{2}/2\sigma ^{2}}\varphi (x),e^{\|y\|^{2}/2\sigma ^{2}}\varphi (y)\rangle }
![{\displaystyle e^{\langle x,y\rangle /\sigma ^{2}}=\mathbb {E} [\langle e^{\|x\|^{2}/2\sigma ^{2}}\varphi (x),e^{\|y\|^{2}/2\sigma ^{2}}\varphi (y)\rangle ]\approx \langle e^{\|x\|^{2}/2\sigma ^{2}}\varphi (x),e^{\|y\|^{2}/2\sigma ^{2}}\varphi (y)\rangle }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bfb56111453c9e03415021c39d21ed88a37d2ea1)Consequently, the one-headed attention, with one query, can be written as 




Attention
(
q
,
K
,
V
)
=

softmax

(



q

K


T


d

k
)
V
≈



φ
(
q

)

T

∑

i

e

‖

k

i

‖

2

/
2

σ

2
φ
(

k

i
)

v

i

T

φ
(
q

)

T

∑

i

e

‖

k

i

‖

2

/
2

σ

2
φ
(

k

i
)
{\displaystyle {\text{Attention}}(q,K,V)={\text{softmax}}\left({\frac {qK^{\mathrm {T} }}{\sqrt {d\_{k}}}}\right)V\approx {\frac {\varphi (q)^{T}\sum \_{i}e^{\|k\_{i}\|^{2}/2\sigma ^{2}}\varphi (k\_{i})v\_{i}^{T}}{\varphi (q)^{T}\sum \_{i}e^{\|k\_{i}\|^{2}/2\sigma ^{2}}\varphi (k\_{i})}}}
![{\displaystyle {\text{Attention}}(q,K,V)={\text{softmax}}\left({\frac {qK^{\mathrm {T} }}{\sqrt {d_{k}}}}\right)V\approx {\frac {\varphi (q)^{T}\sum _{i}e^{\|k_{i}\|^{2}/2\sigma ^{2}}\varphi (k_{i})v_{i}^{T}}{\varphi (q)^{T}\sum _{i}e^{\|k_{i}\|^{2}/2\sigma ^{2}}\varphi (k_{i})}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bca1667ac7c453bd1979496b1b951fc9c09d3b08)where 



σ
=

d

K

1

/
4
{\displaystyle \sigma =d\_{K}^{1/4}}
![{\displaystyle \sigma =d_{K}^{1/4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d2571d23e3b9162609ece1399f4abf50811e4eb6). Similarly for multiple queries, and for multihead attention.

This approximation can be computed in linear time, as we can compute the matrix 



φ
(

k

i
)

v

i

T
{\displaystyle \varphi (k\_{i})v\_{i}^{T}}
![{\displaystyle \varphi (k_{i})v_{i}^{T}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6276b79cd088813503ec00ae5eab91ab02d8a7f0) first, then multiply it with the query. In essence, we have managed to obtain a more precise version of 




Attention
(
Q
,
K
,
V
)
=

softmax

(



Q

K


T


d

k
)
V
≈
Q
(

K

T
V

/



d

k
)
{\displaystyle {\text{Attention}}(Q,K,V)={\text{softmax}}\left({\frac {QK^{\mathrm {T} }}{\sqrt {d\_{k}}}}\right)V\approx Q(K^{T}V/{\sqrt {d\_{k}}})}
![{\displaystyle {\text{Attention}}(Q,K,V)={\text{softmax}}\left({\frac {QK^{\mathrm {T} }}{\sqrt {d_{k}}}}\right)V\approx Q(K^{T}V/{\sqrt {d_{k}}})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7da7e0c09e0f526924af6c95f7c0d2c6fb34b910)Performer (2022) uses the same Random Feature Attention, but 




w

1
,
.
.
.
,

w

D
{\displaystyle w\_{1},...,w\_{D}}
![{\displaystyle w_{1},...,w_{D}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c97fcd8d8f90947efda4e03b5ffc293c61cb094c) are first independently sampled from the normal distribution 



N
(
0
,

σ

2
I
)
{\displaystyle N(0,\sigma ^{2}I)}
![{\displaystyle N(0,\sigma ^{2}I)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9d30d920f052b8230e76c64a55f2cddc963b201f), then they are [Gram-Schmidt processed](https://en.wikipedia.org/wiki/Gram%E2%80%93Schmidt_process).

Transformers can also be used/adapted for modalities (input or output) beyond just text, usually by finding a way to "tokenize" the modality.

Multimodal models can either be trained from scratch, or by finetuning. A 2022 study found that transformers pretrained only on natural language can be finetuned on only 0.03% of parameters and become competitive with [LSTMs](https://en.wikipedia.org/wiki/LSTMs) on a variety of logical and visual tasks, demonstrating [transfer learning](https://en.wikipedia.org/wiki/Transfer_learning). The LLaVA was a vision-language model composed of a language model (Vicuna-13B) and a vision model ([ViT](https://en.wikipedia.org/wiki/Vision_transformer)-L/14), connected by a linear layer. Only the linear layer is finetuned.

[Vision transformers](https://en.wikipedia.org/wiki/Vision_transformer) adapt the transformer to computer vision by breaking down input images as a series of patches, turning them into vectors, and treating them like embedding vector of tokens in a standard transformer.

Conformer and later [Whisper](https://en.wikipedia.org/wiki/Whisper_(speech_recognition_system)) follow the same pattern for [speech recognition](https://en.wikipedia.org/wiki/Speech_recognition), first turning the speech signal into a [spectrogram](https://en.wikipedia.org/wiki/Spectrogram), which is then treated like an image, i.e. broken down into a series of patches, turned into vectors and treated like embedding vector of tokens in a standard transformer.

[Perceivers](https://en.wikipedia.org/wiki/Perceiver) are a variant of transformers designed for multimodality.

For image generation, notable architectures are [DALL-E 1](https://en.wikipedia.org/wiki/DALL-E) (2021), Parti (2022), Phenaki (2023), and Muse (2023). Unlike later models, DALL-E is not a [diffusion model](https://en.wikipedia.org/wiki/Diffusion_model). Instead, it uses a decoder-only transformer that autoregressively generates a text, followed by the token representation of an image, which is then converted by a [variational autoencoder](https://en.wikipedia.org/wiki/Variational_autoencoder) to an image. Parti is an encoder–decoder transformer, where the encoder processes a text prompt, and the decoder generates a token representation of an image. Muse is an encoder-only transformer that is trained to predict masked image tokens from unmasked image tokens. During generation, all input tokens are masked, and the highest-confidence predictions are included for the next iteration, until all tokens are predicted. Phenaki is a text-to-video model. It is a bidirectional masked transformer conditioned on pre-computed text tokens. The generated tokens are then decoded to a video.

The transformer has had great success in [natural language processing](https://en.wikipedia.org/wiki/Natural_language_processing) (NLP). Many [large language models](https://en.wikipedia.org/wiki/Large_language_model) such as [GPT-2](https://en.wikipedia.org/wiki/GPT-2), [GPT-3](https://en.wikipedia.org/wiki/GPT-3), [GPT-4](https://en.wikipedia.org/wiki/GPT-4), [Gemini](https://en.wikipedia.org/wiki/Gemini_(chatbot)), AlbertAGPT, [Claude](https://en.wikipedia.org/wiki/Anthropic#Claude), [BERT](https://en.wikipedia.org/wiki/BERT_(language_model)), [Grok](https://en.wikipedia.org/wiki/Grok_(chatbot)), [XLNet](https://en.wikipedia.org/wiki/XLNet), [RoBERTa](https://en.wikipedia.org/wiki/BERT_(language_model)#RoBERTa) and [ChatGPT](https://en.wikipedia.org/wiki/ChatGPT) demonstrate the ability of transformers to perform a wide variety of NLP-related subtasks and their related real-world applications, including:

Beyond traditional NLP, the transformer architecture has had success in other applications, such as:

1. **[^](#cite_ref-13)** [Gated recurrent units](https://en.wikipedia.org/wiki/Gated_recurrent_units) (2014) further reduced its complexity.
2. **[^](#cite_ref-17)** Some architectures, such as RWKV or state space models, avoid the issue.

1. ^ [***a***](#cite_ref-2017_Attention_Is_All_You_Need_1-0) [***b***](#cite_ref-2017_Attention_Is_All_You_Need_1-1) [***c***](#cite_ref-2017_Attention_Is_All_You_Need_1-2) [***d***](#cite_ref-2017_Attention_Is_All_You_Need_1-3) [***e***](#cite_ref-2017_Attention_Is_All_You_Need_1-4) [***f***](#cite_ref-2017_Attention_Is_All_You_Need_1-5) [***g***](#cite_ref-2017_Attention_Is_All_You_Need_1-6) [***h***](#cite_ref-2017_Attention_Is_All_You_Need_1-7) [***i***](#cite_ref-2017_Attention_Is_All_You_Need_1-8) [***j***](#cite_ref-2017_Attention_Is_All_You_Need_1-9) [***k***](#cite_ref-2017_Attention_Is_All_You_Need_1-10) [***l***](#cite_ref-2017_Attention_Is_All_You_Need_1-11) [Vaswani, Ashish](https://en.wikipedia.org/wiki/Ashish_Vaswani); Shazeer, Noam; Parmar, Niki; Uszkoreit, Jakob; Jones, Llion; [Gomez, Aidan N](https://en.wikipedia.org/wiki/Aidan_Gomez); Kaiser, Łukasz; Polosukhin, Illia (2017). ["Attention is All you Need"](https://proceedings.neurips.cc/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf) (PDF). *Advances in Neural Information Processing Systems*. **30**. Curran Associates, Inc.
2. **[^](#cite_ref-lstm1997_2-0)** [Hochreiter, Sepp](https://en.wikipedia.org/wiki/Sepp_Hochreiter); [Schmidhuber, Jürgen](https://en.wikipedia.org/wiki/J%C3%BCrgen_Schmidhuber) (November 1997). "Long Short-Term Memory". *Neural Computation*. **9** (8): 1735–1780. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1162/neco.1997.9.8.1735](https://doi.org/10.1162%2Fneco.1997.9.8.1735). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [9377276](https://pubmed.ncbi.nlm.nih.gov/9377276).
3. ^ [***a***](#cite_ref-:7_3-0) [***b***](#cite_ref-:7_3-1) ["Better Language Models and Their Implications"](https://openai.com/blog/better-language-models/). *OpenAI*. 2019-02-14. [Archived](https://web.archive.org/web/20201219132206/https://openai.com/blog/better-language-models/) from the original on 2020-12-19. Retrieved 2019-08-25.
4. ^ [***a***](#cite_ref-inventors_4-0) [***b***](#cite_ref-inventors_4-1) Bahdanau; Cho, Kyunghyun; Bengio, Yoshua (September 1, 2014). "Neural Machine Translation by Jointly Learning to Align and Translate". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1409.0473](https://arxiv.org/abs/1409.0473) [[cs.CL](https://arxiv.org/archive/cs.CL)].
5. **[^](#cite_ref-inventconfirm_5-0)** Luong, Minh-Thang; Pham, Hieu; Manning, Christopher D. (August 17, 2015). "Effective Approaches to Attention-based Neural Machine Translation". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1508.04025](https://arxiv.org/abs/1508.04025) [[cs.CL](https://arxiv.org/archive/cs.CL)].
6. ^ [***a***](#cite_ref-:10_6-0) [***b***](#cite_ref-:10_6-1) Chen, Lili; Lu, Kevin; Rajeswaran, Aravind; Lee, Kimin; Grover, Aditya; Laskin, Michael; Abbeel, Pieter; Srinivas, Aravind; Mordatch, Igor (2021-06-24), *Decision Transformer: Reinforcement Learning via Sequence Modeling*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2106.01345](https://arxiv.org/abs/2106.01345)
7. **[^](#cite_ref-7)** Parisotto, Emilio; Song, Francis; Rae, Jack; Pascanu, Razvan; Gulcehre, Caglar; Jayakumar, Siddhant; Jaderberg, Max; Kaufman, Raphaël Lopez; Clark, Aidan; Noury, Seb; Botvinick, Matthew; Heess, Nicolas; Hadsell, Raia (2020-11-21). ["Stabilizing Transformers for Reinforcement Learning"](https://proceedings.mlr.press/v119/parisotto20a.html). *Proceedings of the 37th International Conference on Machine Learning*. PMLR: 7487–7498.
8. **[^](#cite_ref-Robust_Speech_Recognition_via_Large-Scale_Weak_Supervision_8-0)** Radford, Alec; Jong Wook Kim; Xu, Tao; Brockman, Greg; McLeavey, Christine; Sutskever, Ilya (2022). "Robust Speech Recognition via Large-Scale Weak Supervision". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2212.04356](https://arxiv.org/abs/2212.04356) [[eess.AS](https://arxiv.org/archive/eess.AS)].
9. **[^](#cite_ref-9)** Monastirsky, Maxim; Azulay, Osher; Sintov, Avishai (February 2023). "Learning to Throw With a Handful of Samples Using Decision Transformers". *IEEE Robotics and Automation Letters*. **8** (2): 576–583. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2023IRAL....8..576M](https://ui.adsabs.harvard.edu/abs/2023IRAL....8..576M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/LRA.2022.3229266](https://doi.org/10.1109%2FLRA.2022.3229266).
10. ^ [***a***](#cite_ref-grandmaster_10-0) [***b***](#cite_ref-grandmaster_10-1) Ruoss, Anian; Delétang, Grégoire; Medapati, Sourabh; Grau-Moya, Jordi; Wenliang, Li; Catt, Elliot; Reid, John; Genewein, Tim (2024-02-07). "Grandmaster-Level Chess Without Search". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2402.04494v1](https://arxiv.org/abs/2402.04494v1) [[cs.LG](https://arxiv.org/archive/cs.LG)].
11. ^ [***a***](#cite_ref-wolf2020_11-0) [***b***](#cite_ref-wolf2020_11-1) Wolf, Thomas; Debut, Lysandre; Sanh, Victor; Chaumond, Julien; Delangue, Clement; Moi, Anthony; Cistac, Pierric; Rault, Tim; Louf, Remi; Funtowicz, Morgan; Davison, Joe; Shleifer, Sam; von Platen, Patrick; Ma, Clara; Jernite, Yacine; Plu, Julien; Xu, Canwen; Le Scao, Teven; Gugger, Sylvain; Drame, Mariama; Lhoest, Quentin; Rush, Alexander (2020). "Transformers: State-of-the-Art Natural Language Processing". *Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing: System Demonstrations*. pp. 38–45. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/2020.emnlp-demos.6](https://doi.org/10.18653%2Fv1%2F2020.emnlp-demos.6).
12. ^ [***a***](#cite_ref-:6_12-0) [***b***](#cite_ref-:6_12-1) [***c***](#cite_ref-:6_12-2) ["Open Sourcing BERT: State-of-the-Art Pre-training for Natural Language Processing"](http://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html). *Google AI Blog*. 2 November 2018. [Archived](https://web.archive.org/web/20210113211449/https://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html) from the original on 2021-01-13. Retrieved 2019-08-25.
13. **[^](#cite_ref-14)** Feldman, J; Ballard, D (September 1982). "Connectionist models and their properties". *Cognitive Science*. **6** (3): 205–254. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/S0364-0213(82)80001-3](https://doi.org/10.1016%2FS0364-0213%2882%2980001-3).
14. **[^](#cite_ref-PDP_15-0)** Rumelhart, David E.; McClelland, James L.; Hinton, Geoffrey E. (1987-07-29). [*Parallel Distributed Processing, Volume 1: Explorations in the Microstructure of Cognition: Foundations, Chapter 2*](https://stanford.edu/~jlmcc/papers/PDP/Chapter2.pdf) (PDF). Cambridge, Mass: Bradford Books. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-68053-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-68053-0).
15. **[^](#cite_ref-16)** Giles, C. Lee; Maxwell, Tom (December 1987). "Learning, invariance, and generalization in high-order neural networks". *Applied Optics*. **26** (23): 4972–4978. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1364/AO.26.004972](https://doi.org/10.1364%2FAO.26.004972). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [20523475](https://pubmed.ncbi.nlm.nih.gov/20523475).
16. ^ [***a***](#cite_ref-transform19922_18-0) [***b***](#cite_ref-transform19922_18-1) Schmidhuber, Jürgen (January 1992). "Learning to Control Fast-Weight Memories: An Alternative to Dynamic Recurrent Networks". *Neural Computation*. **4** (1): 131–139. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1162/neco.1992.4.1.131](https://doi.org/10.1162%2Fneco.1992.4.1.131).
17. **[^](#cite_ref-malsburg1981_19-0)** Christoph von der Malsburg: The correlation theory of brain function. Internal Report 81-2, MPI Biophysical Chemistry, 1981. [http://cogprints.org/1380/1/vdM\_correlation.pdf](http://cogprints.org/1380/1/vdM_correlation.pdf) See Reprint in Models of Neural Networks II, chapter 2, pages 95–119. Springer, Berlin, 1994.
18. **[^](#cite_ref-feldman1982_20-0)** Feldman, Jerome A. (December 1982). "Dynamic connections in neural networks". *Biological Cybernetics*. **46** (1): 27–39. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF00335349](https://doi.org/10.1007%2FBF00335349). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [6307398](https://pubmed.ncbi.nlm.nih.gov/6307398).
19. **[^](#cite_ref-21)** Hinton, Geoffrey E.; Plaut, David C. (1987). ["Using Fast Weights to Deblur Old Memories"](https://escholarship.org/uc/item/0570j1dp). *Proceedings of the Annual Meeting of the Cognitive Science Society*. **9**.
20. **[^](#cite_ref-fastlinear20202_22-0)** Katharopoulos, Angelos; Vyas, Apoorv; Pappas, Nikolaos; Fleuret, François (2020). ["Transformers are RNNs: Fast autoregressive Transformers with linear attention"](https://proceedings.mlr.press/v119/katharopoulos20a.html). *ICML 2020*. PMLR. pp. 5156–5165.
21. **[^](#cite_ref-schlag20212_23-0)** Schlag, Imanol; Irie, Kazuki; [Schmidhuber, Jürgen](https://en.wikipedia.org/wiki/Juergen_Schmidhuber) (2021). "Linear Transformers Are Secretly Fast Weight Programmers". *ICML 2021*. Springer. pp. 9355–9366.
22. ^ [***a***](#cite_ref-:22_24-0) [***b***](#cite_ref-:22_24-1) Cho, Kyunghyun; van Merriënboer, Bart; Gulcehre, Caglar; Bahdanau, Dzmitry; Bougares, Fethi; Schwenk, Holger; Bengio, Yoshua (October 2014). ["Learning Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation"](https://aclanthology.org/D14-1179). In Moschitti, Alessandro; Pang, Bo; Daelemans, Walter (eds.). *Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP)*. Doha, Qatar: Association for Computational Linguistics. pp. 1724–1734. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1406.1078](https://arxiv.org/abs/1406.1078). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3115/v1/D14-1179](https://doi.org/10.3115%2Fv1%2FD14-1179).
23. ^ [***a***](#cite_ref-sequence_25-0) [***b***](#cite_ref-sequence_25-1) Sutskever, Ilya; Vinyals, Oriol; Le, Quoc Viet (14 Dec 2014). "Sequence to sequence learning with neural networks". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1409.3215](https://arxiv.org/abs/1409.3215) [[cs.CL](https://arxiv.org/archive/cs.CL)]. [first version posted to arXiv on 10 Sep 2014]
24. **[^](#cite_ref-MyUser_Arxiv.org_May_18_2016c_26-0)** Chung, Junyoung; Gulcehre, Caglar; Cho, KyungHyun; Bengio, Yoshua (2014). "Empirical Evaluation of Gated Recurrent Neural Networks on Sequence Modeling". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1412.3555](https://arxiv.org/abs/1412.3555) [[cs.NE](https://arxiv.org/archive/cs.NE)].
25. **[^](#cite_ref-gruber_jockisch_27-0)** Gruber, Nicole; Jockisch, Alfred (30 June 2020). ["Are GRU Cells More Specific and LSTM Cells More Sensitive in Motive Classification of Text?"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7861254). *Frontiers in Artificial Intelligence*. **3** 40. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3389/frai.2020.00040](https://doi.org/10.3389%2Ffrai.2020.00040). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [7861254](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7861254). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [33733157](https://pubmed.ncbi.nlm.nih.gov/33733157).
26. **[^](#cite_ref-28)** Sutskever, Ilya; Vinyals, Oriol; Le, Quoc V (2014). ["Sequence to Sequence Learning with Neural Networks"](https://proceedings.neurips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html). *Advances in Neural Information Processing Systems*. **27**. Curran Associates, Inc. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1409.3215](https://arxiv.org/abs/1409.3215).
27. **[^](#cite_ref-29)** Luong, Minh-Thang; Pham, Hieu; Manning, Christopher D. (2015). "Effective Approaches to Attention-based Neural Machine Translation". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1508.04025](https://arxiv.org/abs/1508.04025) [[cs.CL](https://arxiv.org/archive/cs.CL)].
28. **[^](#cite_ref-Y4moj_30-0)** Wu, Yonghui; et al. (2016-09-01). "Google's Neural Machine Translation System: Bridging the Gap between Human and Machine Translation". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1609.08144](https://arxiv.org/abs/1609.08144) [[cs.CL](https://arxiv.org/archive/cs.CL)].
29. **[^](#cite_ref-UJDu8_31-0)** Lewis-Kraus, Gideon (2016-12-14). ["The Great A.I. Awakening"](https://web.archive.org/web/20230524052626/https://www.nytimes.com/2016/12/14/magazine/the-great-ai-awakening.html). *The New York Times*. Archived from [the original](https://www.nytimes.com/2016/12/14/magazine/the-great-ai-awakening.html) on 24 May 2023. Retrieved 2023-06-22.
30. **[^](#cite_ref-32)** Parikh, Ankur P.; Täckström, Oscar; Das, Dipanjan; Uszkoreit, Jakob (2016-09-25). "A Decomposable Attention Model for Natural Language Inference". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1606.01933](https://arxiv.org/abs/1606.01933) [[cs.CL](https://arxiv.org/archive/cs.CL)].
31. ^ [***a***](#cite_ref-:11_33-0) [***b***](#cite_ref-:11_33-1) Levy, Steven. ["8 Google Employees Invented Modern AI. Here's the Inside Story"](https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/). *Wired*. [Archived](https://web.archive.org/web/20240320101528/https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/) from the original on 20 Mar 2024. Retrieved 2024-08-06.
32. **[^](#cite_ref-34)** Cheng, Jianpeng; Dong, Li; Lapata, Mirella (November 2016). ["Long Short-Term Memory-Networks for Machine Reading"](https://aclanthology.org/D16-1053/). In Su, Jian; Duh, Kevin; Carreras, Xavier (eds.). *Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing*. Austin, Texas: Association for Computational Linguistics. pp. 551–561. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/D16-1053](https://doi.org/10.18653%2Fv1%2FD16-1053).
33. **[^](#cite_ref-35)** Peng, Bo; Alcaide, Eric; Anthony, Quentin; Albalak, Alon; Arcadinho, Samuel; Biderman, Stella; Cao, Huanqi; Cheng, Xin; Chung, Michael (2023-12-10), *RWKV: Reinventing RNNs for the transformer Era*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2305.13048](https://arxiv.org/abs/2305.13048)
34. **[^](#cite_ref-36)** Marche, Stephen (2024-08-23). ["Was Linguistic A.I. Created by Accident?"](https://www.newyorker.com/science/annals-of-artificial-intelligence/was-linguistic-ai-created-by-accident). *The New Yorker*. Retrieved 2024-08-27.
35. **[^](#cite_ref-37)** Vaswani, Ashish; Bengio, Samy; Brevdo, Eugene; Chollet, Francois; Gomez, Aidan; Gouws, Stephan; Jones, Llion; Kaiser, Łukasz; Kalchbrenner, Nal; Parmar, Niki; Sepassi, Ryan; Shazeer, Noam; Uszkoreit, Jakob (March 2018). Cherry, Colin; Neubig, Graham (eds.). ["Tensor2Tensor for Neural Machine Translation"](https://aclanthology.org/W18-1819/). *Proceedings of the 13th Conference of the Association for Machine Translation in the Americas (Volume 1: Research Track)*. Boston, MA: Association for Machine Translation in the Americas: 193–199.
36. **[^](#cite_ref-38)** Kaiser, Łukasz (2017-06-19). ["Accelerating Deep Learning Research with the Tensor2Tensor Library"](https://research.google/blog/accelerating-deep-learning-research-with-the-tensor2tensor-library/). *Google Research Blog*.
37. ^ [***a***](#cite_ref-:03_39-0) [***b***](#cite_ref-:03_39-1) [***c***](#cite_ref-:03_39-2) [***d***](#cite_ref-:03_39-3) [***e***](#cite_ref-:03_39-4) Devlin, Jacob; Chang, Ming-Wei; Lee, Kenton; Toutanova, Kristina (11 October 2018). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1810.04805v2](https://arxiv.org/abs/1810.04805v2) [[cs.CL](https://arxiv.org/archive/cs.CL)].
38. **[^](#cite_ref-40)** ["Google: BERT now used on almost every English query"](https://searchengineland.com/google-bert-used-on-almost-every-english-query-342193). *Search Engine Land*. 2020-10-15. Retrieved 2020-11-24.
39. ^ [***a***](#cite_ref-gtrans_41-0) [***b***](#cite_ref-gtrans_41-1) Caswell, Isaac; Liang, Bowen (June 8, 2020). ["Recent Advances in Google Translate"](https://research.google/blog/recent-advances-in-google-translate/). *Google Research*. [Archived](https://web.archive.org/web/20240704042433/https://research.google/blog/recent-advances-in-google-translate/) from the original on 4 Jul 2024. Retrieved 2024-08-07.
40. **[^](#cite_ref-42)** ["The inside story of how ChatGPT was built from the people who made it"](https://www.technologyreview.com/2023/03/03/1069311/inside-story-oral-history-how-chatgpt-built-openai/). *MIT Technology Review*. Retrieved 2024-08-06.
41. **[^](#cite_ref-gpt12_43-0)** ["Improving language understanding with unsupervised learning"](https://openai.com/research/language-unsupervised). *openai.com*. June 11, 2018. [Archived](https://web.archive.org/web/20230318210736/https://openai.com/research/language-unsupervised) from the original on 2023-03-18. Retrieved 2023-03-18.
42. **[^](#cite_ref-ngEG3_44-0)** [*finetune-transformer-lm*](https://github.com/openai/finetune-transformer-lm), OpenAI, June 11, 2018, retrieved 2023-05-01
43. **[^](#cite_ref-45)** Kaiser, Lukasz; Gomez, Aidan N.; Shazeer, Noam; Vaswani, Ashish; Parmar, Niki; Jones, Llion; Uszkoreit, Jakob (2017-06-16). "One Model To Learn Them All". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1706.05137v1](https://arxiv.org/abs/1706.05137v1) [[cs.LG](https://arxiv.org/archive/cs.LG)].
44. ^ [***a***](#cite_ref-auto2_46-0) [***b***](#cite_ref-auto2_46-1) Dosovitskiy, Alexey; Beyer, Lucas; Kolesnikov, Alexander; Weissenborn, Dirk; Zhai, Xiaohua; Unterthiner, Thomas; Dehghani, Mostafa; Minderer, Matthias; Heigold, Georg; Gelly, Sylvain; Uszkoreit, Jakob (2021-06-03). "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2010.11929](https://arxiv.org/abs/2010.11929) [[cs.CV](https://arxiv.org/archive/cs.CV)].
45. ^ [***a***](#cite_ref-Gulati2020_47-0) [***b***](#cite_ref-Gulati2020_47-1) Gulati, Anmol; Qin, James; Chiu, Chung-Cheng; Parmar, Niki; Zhang, Yu; Yu, Jiahui; Han, Wei; Wang, Shibo; Zhang, Zhengdong; Wu, Yonghui; Pang, Ruoming (2020). "Conformer: Convolution-augmented Transformer for Speech Recognition". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2005.08100](https://arxiv.org/abs/2005.08100) [[eess.AS](https://arxiv.org/archive/eess.AS)].
46. **[^](#cite_ref-choromanski2020_48-0)** Choromanski, Krzysztof; Likhosherstov, Valerii; Dohan, David; Song, Xingyou; Gane, Andreea; Sarlos, Tamas; Hawkins, Peter; Davis, Jared; Mohiuddin, Afroz (2022-11-19), *Rethinking Attention with Performers*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2009.14794](https://arxiv.org/abs/2009.14794)
47. **[^](#cite_ref-49)** Liu, Zhuang; Mao, Hanzi; Wu, Chao-Yuan; Feichtenhofer, Christoph; Darrell, Trevor; Xie, Saining (2022). [*A ConvNet for the 2020s*](https://openaccess.thecvf.com/content/CVPR2022/html/Liu_A_ConvNet_for_the_2020s_CVPR_2022_paper.html). Conference on Computer Vision and Pattern Recognition ([CVPR](https://en.wikipedia.org/wiki/CVPR)). pp. 11976–11986.
48. **[^](#cite_ref-:62_50-0)** Esser, Patrick; Kulal, Sumith; Blattmann, Andreas; Entezari, Rahim; Müller, Jonas; Saini, Harry; Levi, Yam; Lorenz, Dominik; Sauer, Axel (2024-03-05), *Scaling Rectified Flow Transformers for High-Resolution Image Synthesis*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2403.03206](https://arxiv.org/abs/2403.03206)
49. ^ [***a***](#cite_ref-auto1_51-0) [***b***](#cite_ref-auto1_51-1) Xiong, Ruibin; Yang, Yunchang; He, Di; Zheng, Kai; Zheng, Shuxin; Xing, Chen; Zhang, Huishuai; Lan, Yanyan; Wang, Liwei; Liu, Tie-Yan (2020-06-29). "On Layer Normalization in the Transformer Architecture". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2002.04745](https://arxiv.org/abs/2002.04745) [[cs.LG](https://arxiv.org/archive/cs.LG)].
50. ^ [***a***](#cite_ref-Raffel_Shazeer_2020_Exploring_the_Limits_52-0) [***b***](#cite_ref-Raffel_Shazeer_2020_Exploring_the_Limits_52-1) [***c***](#cite_ref-Raffel_Shazeer_2020_Exploring_the_Limits_52-2) [***d***](#cite_ref-Raffel_Shazeer_2020_Exploring_the_Limits_52-3) Raffel, Colin; Shazeer, Noam; Roberts, Adam; Lee, Katherine; Narang, Sharan; Matena, Michael; Zhou, Yanqi; Li, Wei; Liu, Peter J. (2020). ["Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"](https://www.jmlr.org/papers/v21/20-074.html). *Journal of Machine Learning Research*. **21** (140): 1–67.
51. **[^](#cite_ref-53)** Raffel, Colin; Shazeer, Noam; Roberts, Adam; Lee, Katherine; Narang, Sharan; Matena, Michael; Zhou, Yanqi; Li, Wei; Liu, Peter J. (2019). "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1910.10683](https://arxiv.org/abs/1910.10683) [[cs.LG](https://arxiv.org/archive/cs.LG)].
52. ^ [***a***](#cite_ref-:5_54-0) [***b***](#cite_ref-:5_54-1) ["Masked language modeling"](https://huggingface.co/docs/transformers/tasks/masked_language_modeling). *huggingface.co*. Retrieved 2023-10-05.
53. ^ [***a***](#cite_ref-:8_55-0) [***b***](#cite_ref-:8_55-1) ["Causal language modeling"](https://huggingface.co/docs/transformers/tasks/language_modeling). *huggingface.co*. Retrieved 2023-10-05.
54. ^ [***a***](#cite_ref-:4_56-0) [***b***](#cite_ref-:4_56-1) [***c***](#cite_ref-:4_56-2) [***d***](#cite_ref-:4_56-3) Tay, Yi; Dehghani, Mostafa; Tran, Vinh Q.; Garcia, Xavier; Wei, Jason; Wang, Xuezhi; Chung, Hyung Won; Shakeri, Siamak; Bahri, Dara (2023-02-28), *UL2: Unifying Language Learning Paradigms*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2205.05131](https://arxiv.org/abs/2205.05131)
55. **[^](#cite_ref-57)** Press, Ofir; Wolf, Lior (2017-02-21), *Using the Output Embedding to Improve Language Models*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1608.05859](https://arxiv.org/abs/1608.05859)
56. **[^](#cite_ref-58)** Lintz, Nathan (2016-04-18). ["Sequence Modeling with Neural Networks (Part 2): Attention Models"](https://indico.io/blog/sequence-modeling-neural-networks-part2-attention-models/). *Indico*. [Archived](https://web.archive.org/web/20201021203352/https://indico.io/blog/sequence-modeling-neural-networks-part2-attention-models/) from the original on 2020-10-21. Retrieved 2019-10-15.
57. ^ [***a***](#cite_ref-:1_59-0) [***b***](#cite_ref-:1_59-1) [***c***](#cite_ref-:1_59-2) Alammar, Jay. ["The Illustrated transformer"](http://jalammar.github.io/illustrated-transformer/). *jalammar.github.io*. [Archived](https://web.archive.org/web/20201018061610/https://jalammar.github.io/illustrated-transformer/) from the original on 2020-10-18. Retrieved 2019-10-15.
58. **[^](#cite_ref-60)** Team, Keras. ["Keras documentation: GPT2Backbone model"](https://keras.io/api/keras_nlp/models/gpt2/gpt2_backbone/). *keras.io*. Retrieved 2024-08-08.
59. **[^](#cite_ref-61)** Clark, Kevin; Khandelwal, Urvashi; Levy, Omer; Manning, Christopher D. (August 2019). ["What Does BERT Look at? An Analysis of BERT's Attention"](https://www.aclweb.org/anthology/W19-4828). *Proceedings of the 2019 ACL Workshop BlackboxNLP: Analyzing and Interpreting Neural Networks for NLP*. Florence, Italy: Association for Computational Linguistics: 276–286. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1906.04341](https://arxiv.org/abs/1906.04341). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/W19-4828](https://doi.org/10.18653%2Fv1%2FW19-4828). [Archived](https://web.archive.org/web/20201021211357/https://www.aclweb.org/anthology/W19-4828/) from the original on 2020-10-21. Retrieved 2020-05-20.
60. **[^](#cite_ref-62)** Yang, Zhilin; Dai, Zihang; Yang, Yiming; Carbonell, Jaime; Salakhutdinov, Russ R; Le, Quoc V (2019). ["XLNet: Generalized Autoregressive Pretraining for Language Understanding"](https://proceedings.neurips.cc/paper/2019/hash/dc6a7e655d7e5840e66733e9ee67cc69-Abstract.html). *Advances in Neural Information Processing Systems*. **32**. Curran Associates, Inc. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1906.08237](https://arxiv.org/abs/1906.08237).
61. **[^](#cite_ref-63)** Wang, Qiang; Li, Bei; Xiao, Tong; Zhu, Jingbo; Li, Changliang; Wong, Derek F.; Chao, Lidia S. (2019-06-04), *Learning Deep Transformer Models for Machine Translation*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1906.01787](https://arxiv.org/abs/1906.01787)
62. **[^](#cite_ref-64)** Phuong, Mary; Hutter, Marcus (2022-07-19), *Formal Algorithms for Transformers*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2207.09238](https://arxiv.org/abs/2207.09238)
63. ^ [***a***](#cite_ref-:14_65-0) [***b***](#cite_ref-:14_65-1) Shazeer, Noam (2020-02-01). "GLU Variants Improve Transformer". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2002.05202](https://arxiv.org/abs/2002.05202) [[cs.LG](https://arxiv.org/archive/cs.LG)].
64. **[^](#cite_ref-66)** Hendrycks, Dan; Gimpel, Kevin (2016-06-27). "Gaussian Error Linear Units (GELUs)". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1606.08415v5](https://arxiv.org/abs/1606.08415v5) [[cs.LG](https://arxiv.org/archive/cs.LG)].
65. **[^](#cite_ref-67)** Zhang, Biao; Sennrich, Rico (2019). ["Root Mean Square Layer Normalization"](https://proceedings.neurips.cc/paper/2019/hash/1e8a19426224ca89e83cef47f1e7f53b-Abstract.html). *Advances in Neural Information Processing Systems*. **32**. Curran Associates, Inc. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1910.07467](https://arxiv.org/abs/1910.07467).
66. **[^](#cite_ref-68)** Tembine, Hamidou, Manzoor Ahmed Khan, and Issa Bamia. 2024. "Mean-Field-Type Transformers" Mathematics 12, no. 22: 3506. [https://doi.org/10.3390/math12223506](https://doi.org/10.3390/math12223506)
67. ^ [***a***](#cite_ref-:9_69-0) [***b***](#cite_ref-:9_69-1) Nguyen, Toan Q.; Salazar, Julian (2019-11-02). Niehues, Jan; Cattoni, Rolando; Stüker, Sebastian; Negri, Matteo; Turchi, Marco; Ha, Thanh-Le; Salesky, Elizabeth; Sanabria, Ramon; Barrault, Loic (eds.). ["Transformers without Tears: Improving the Normalization of Self-Attention"](https://aclanthology.org/2019.iwslt-1.17). *Proceedings of the 16th International Conference on Spoken Language Translation*. Hong Kong: Association for Computational Linguistics. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1910.05895](https://arxiv.org/abs/1910.05895). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.5281/zenodo.3525484](https://doi.org/10.5281%2Fzenodo.3525484).
68. **[^](#cite_ref-70)** Dufter, Philipp; Schmitt, Martin; Schütze, Hinrich (September 2022). ["Position Information in Transformers: An Overview"](https://doi.org/10.1162%2Fcoli_a_00445). *Computational Linguistics*. **48** (3): 733–763. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2102.11090](https://arxiv.org/abs/2102.11090). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1162/coli\_a\_00445](https://doi.org/10.1162%2Fcoli_a_00445).
69. **[^](#cite_ref-71)** Gehring, Jonas; Auli, Michael; Grangier, David; Yarats, Denis; Dauphin, Yann N. (2017-07-17). ["Convolutional Sequence to Sequence Learning"](https://proceedings.mlr.press/v70/gehring17a.html). *Proceedings of the 34th International Conference on Machine Learning*. PMLR: 1243–1252.
70. **[^](#cite_ref-72)** Haviv, Adi; Ram, Ori; Press, Ofir; Izsak, Peter; Levy, Omer (2022-12-05), *Transformer Language Models without Positional Encodings Still Learn Positional Information*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2203.16634](https://arxiv.org/abs/2203.16634)
71. **[^](#cite_ref-73)** Su, Jianlin; Lu, Yu; Pan, Shengfeng; Murtadha, Ahmed; Wen, Bo; Liu, Yunfeng (2021-04-01). "RoFormer: Enhanced Transformer with Rotary Position Embedding". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2104.09864](https://arxiv.org/abs/2104.09864) [[cs.CL](https://arxiv.org/archive/cs.CL)].
72. **[^](#cite_ref-74)** Press, Ofir; Smith, Noah A.; Lewis, Mike (2021-08-01). "Train Short, Test Long: Attention with Linear Biases Enables Input Length Extrapolation". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2108.12409](https://arxiv.org/abs/2108.12409) [[cs.CL](https://arxiv.org/archive/cs.CL)].
73. **[^](#cite_ref-75)** Shaw, Peter; Uszkoreit, Jakob; Vaswani, Ashish (2018). "Self-Attention with Relative Position Representations". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1803.02155](https://arxiv.org/abs/1803.02155) [[cs.CL](https://arxiv.org/archive/cs.CL)].
74. **[^](#cite_ref-76)** Ke, Guolin; He, Di; Liu, Tie-Yan (2021-03-15), *Rethinking Positional Encoding in Language Pre-training*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2006.15595](https://arxiv.org/abs/2006.15595)
75. **[^](#cite_ref-77)** Kwon, Woosuk; Li, Zhuohan; Zhuang, Siyuan; Sheng, Ying; Zheng, Lianmin; Yu, Cody Hao; Gonzalez, Joseph; Zhang, Hao; Stoica, Ion (2023-10-23). ["Efficient Memory Management for Large Language Model Serving with PagedAttention"](https://dl.acm.org/doi/10.1145/3600006.3613165). *Proceedings of the 29th Symposium on Operating Systems Principles*. SOSP '23. New York, NY, USA: Association for Computing Machinery. pp. 611–626. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2309.06180](https://arxiv.org/abs/2309.06180). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3600006.3613165](https://doi.org/10.1145%2F3600006.3613165). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [979-8-4007-0229-7](https://en.wikipedia.org/wiki/Special:BookSources/979-8-4007-0229-7).
76. **[^](#cite_ref-78)** [*vllm-project/vllm*](https://github.com/vllm-project/vllm), vLLM, 2024-06-20, retrieved 2024-06-20
77. **[^](#cite_ref-79)** Zhuohan Li, Woosuk Kwon; Zhuang, Siyuan; Sheng, Ying; Zheng, Lianmin; Yu, Cody; Gonzalez, Joey; Zhang, Hao; Stoica, Ion (2023-06-20). ["vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention"](https://blog.vllm.ai/2023/06/20/vllm.html). *vLLM Blog*. Retrieved 2024-06-20.
78. **[^](#cite_ref-80)** Hu, Cunchen; Huang, Heyang; Xu, Liangliang; Chen, Xusheng; Xu, Jiang; Chen, Shuang; Feng, Hao; Wang, Chenxi; Wang, Sa (2024-01-20), *Inference without Interference: Disaggregate LLM Inference for Mixed Downstream Workloads*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2401.11181](https://arxiv.org/abs/2401.11181)
79. **[^](#cite_ref-81)** Dao, Tri; Ermon, Stefano; Fu, Dan; Ré, Christopher; Rudra, Atri (2022). "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness". *Advances in Neural Information Processing Systems 35*. pp. 16344–16359. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.52202/068431-1189](https://doi.org/10.52202%2F068431-1189). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-7138-7108-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-7138-7108-8).
80. **[^](#cite_ref-82)** ["Stanford CRFM"](https://crfm.stanford.edu/2023/07/17/flash2.html). *crfm.stanford.edu*. Retrieved 2023-07-18.
81. **[^](#cite_ref-83)** ["FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning"](https://princeton-nlp.github.io/flash-atttention-2/). *Princeton NLP*. 2023-06-17. Retrieved 2023-07-18.
82. **[^](#cite_ref-84)** ["Introducing Together AI Chief Scientist Tri Dao, as he releases FlashAttention-2 to speed up model training and inference"](https://together.ai/blog/tri-dao-flash-attention). *TOGETHER*. Retrieved 2023-07-18.
83. **[^](#cite_ref-85)** Ainslie, Joshua; Lee-Thorp, James; de Jong, Michiel; Zemlyanskiy, Yury; Lebrón, Federico; Sanghai, Sumit (2023-12-23). "GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2305.13245](https://arxiv.org/abs/2305.13245) [[cs.CL](https://arxiv.org/archive/cs.CL)].
84. **[^](#cite_ref-86)** ["We reverse-engineered Flash Attention 4"](https://modal.com/blog/reverse-engineer-flash-attention-4). *Modal*. Retrieved 2025-09-26.
85. **[^](#cite_ref-87)** Chowdhery, Aakanksha; Narang, Sharan; Devlin, Jacob; Bosma, Maarten; Mishra, Gaurav; Roberts, Adam; Barham, Paul; Chung, Hyung Won; Sutton, Charles; Gehrmann, Sebastian; Schuh, Parker; Shi, Kensen; Tsvyashchenko, Sasha; Maynez, Joshua; Rao, Abhishek (2022-04-01). "PaLM: Scaling Language Modeling with Pathways". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2204.02311](https://arxiv.org/abs/2204.02311) [[cs.CL](https://arxiv.org/archive/cs.CL)].
86. **[^](#cite_ref-88)** Ainslie, Joshua; Lee-Thorp, James; de Jong, Michiel; Zemlyanskiy, Yury; Lebrón, Federico; Sanghai, Sumit (2023-12-23), *GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2305.13245](https://arxiv.org/abs/2305.13245)
87. ^ [***a***](#cite_ref-:73_89-0) [***b***](#cite_ref-:73_89-1) DeepSeek-AI; Liu, Aixin; Feng, Bei; Wang, Bin; Wang, Bingxuan; Liu, Bo; Zhao, Chenggang; Dengr, Chengqi; Ruan, Chong (19 June 2024), *DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2405.04434](https://arxiv.org/abs/2405.04434).
88. ^ [***a***](#cite_ref-:2_90-0) [***b***](#cite_ref-:2_90-1) Leviathan, Yaniv; Kalman, Matan; Matias, Yossi (2023-05-18), *Fast Inference from Transformers via Speculative Decoding*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2211.17192](https://arxiv.org/abs/2211.17192)
89. **[^](#cite_ref-91)** Fu, Yao (2023-12-11). ["Towards 100x Speedup: Full Stack Transformer Inference Optimization"](https://yaofu.notion.site/Towards-100x-Speedup-Full-Stack-Transformer-Inference-Optimization-43124c3688e14cffaf2f1d6cbdf26c6c). *yaofu.notion.site*.
90. **[^](#cite_ref-92)** Chen, Charlie; Borgeaud, Sebastian; Irving, Geoffrey; Lespiau, Jean-Baptiste; Sifre, Laurent; Jumper, John (2023-02-02), *Accelerating Large Language Model Decoding with Speculative Sampling*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2302.01318](https://arxiv.org/abs/2302.01318)
91. **[^](#cite_ref-93)** Gloeckle, Fabian; Badr Youbi Idrissi; Rozière, Baptiste; Lopez-Paz, David; Synnaeve, Gabriel (2024). "Better & Faster Large Language Models via Multi-token Prediction". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2404.19737](https://arxiv.org/abs/2404.19737) [[cs.CL](https://arxiv.org/archive/cs.CL)].
92. **[^](#cite_ref-94)** DeepSeek-AI; et al. (2024). "DeepSeek-V3 Technical Report". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2412.19437](https://arxiv.org/abs/2412.19437) [[cs.CL](https://arxiv.org/archive/cs.CL)].
93. ^ [***a***](#cite_ref-reformer_95-0) [***b***](#cite_ref-reformer_95-1) Kitaev, Nikita; Kaiser, Łukasz; Levskaya, Anselm (2020). "Reformer: The Efficient Transformer". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2001.04451](https://arxiv.org/abs/2001.04451) [[cs.LG](https://arxiv.org/archive/cs.LG)].
94. **[^](#cite_ref-96)** Liu, Ze; Lin, Yutong; Cao, Yue; Hu, Han; Wei, Yixuan; Zhang, Zheng; Lin, Stephen; Guo, Baining (2021). "Swin Transformer: Hierarchical Vision Transformer using Shifted Windows". *2021 IEEE/CVF International Conference on Computer Vision (ICCV)*. IEEE. pp. 9992–10002. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2103.14030](https://arxiv.org/abs/2103.14030). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/ICCV48922.2021.00986](https://doi.org/10.1109%2FICCV48922.2021.00986). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-6654-2812-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-6654-2812-5).
95. **[^](#cite_ref-97)** Ristea, Nicolaea Catalin; Ionescu, Radu Tudor; Khan, Fahad Shahbaz (2022-09-18). ["SepTr: Separable Transformer for Audio Spectrogram Processing"](https://www.isca-archive.org/interspeech_2022/ristea22_interspeech.html). *Interspeech*. ISCA: 4103–4107. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2203.09581](https://arxiv.org/abs/2203.09581). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.21437/Interspeech.2022-249](https://doi.org/10.21437%2FInterspeech.2022-249).
96. **[^](#cite_ref-98)** Tay, Yi; Dehghani, Mostafa; Abnar, Samira; Shen, Yikang; Bahri, Dara; Pham, Philip; Rao, Jinfeng; Yang, Liu; Ruder, Sebastian; Metzler, Donald (2020-11-08). "Long Range Arena: A Benchmark for Efficient Transformers". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2011.04006](https://arxiv.org/abs/2011.04006) [[cs.LG](https://arxiv.org/archive/cs.LG)].
97. **[^](#cite_ref-99)** ["Reformer: The Efficient Transformer"](http://ai.googleblog.com/2020/01/reformer-efficient-transformer.html). *Google AI Blog*. 16 January 2020. [Archived](https://web.archive.org/web/20201022210019/https://ai.googleblog.com/2020/01/reformer-efficient-transformer.html) from the original on 2020-10-22. Retrieved 2020-10-22.
98. **[^](#cite_ref-100)** Gomez, Aidan N; Ren, Mengye; Urtasun, Raquel; Grosse, Roger B (2017). ["The Reversible Residual Network: Backpropagation Without Storing Activations"](https://proceedings.neurips.cc/paper/2017/hash/f9be311e65d81a9ad8150a60844bb94c-Abstract.html). *Advances in Neural Information Processing Systems*. **30**. Curran Associates, Inc. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1707.04585](https://arxiv.org/abs/1707.04585).
99. **[^](#cite_ref-101)** Child, Rewon; Gray, Scott; Radford, Alec; Sutskever, Ilya (2019-04-23), *Generating Long Sequences with Sparse Transformers*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1904.10509](https://arxiv.org/abs/1904.10509)
100. **[^](#cite_ref-102)** ["Constructing Transformers For Longer Sequences with Sparse Attention Methods"](https://ai.googleblog.com/2021/03/constructing-transformers-for-longer.html). *Google AI Blog*. 25 March 2021. [Archived](https://web.archive.org/web/20210918150757/https://ai.googleblog.com/2021/03/constructing-transformers-for-longer.html) from the original on 2021-09-18. Retrieved 2021-05-28.
101. **[^](#cite_ref-103)** Zhai, Shuangfei; Talbott, Walter; Srivastava, Nitish; Huang, Chen; Goh, Hanlin; Zhang, Ruixiang; Susskind, Josh (2021-09-21). "An Attention Free Transformer". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2105.14103](https://arxiv.org/abs/2105.14103) [[cs.LG](https://arxiv.org/archive/cs.LG)].
102. **[^](#cite_ref-104)** Peng, Hao; Pappas, Nikolaos; Yogatama, Dani; Schwartz, Roy; Smith, Noah A.; Kong, Lingpeng (2021-03-19). "Random Feature Attention". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2103.02143](https://arxiv.org/abs/2103.02143) [[cs.CL](https://arxiv.org/archive/cs.CL)].
103. **[^](#cite_ref-105)** Choromanski, Krzysztof; Likhosherstov, Valerii; Dohan, David; Song, Xingyou; Gane, Andreea; Sarlos, Tamas; Hawkins, Peter; Davis, Jared; Belanger, David; Colwell, Lucy; Weller, Adrian (2020-09-30). "Masked Language Modeling for Proteins via Linearly Scalable Long-Context Transformers". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2006.03555](https://arxiv.org/abs/2006.03555) [[cs.LG](https://arxiv.org/archive/cs.LG)].
104. **[^](#cite_ref-106)** Lu, Kevin; Grover, Aditya; Abbeel, Pieter; Mordatch, Igor (2022-06-28). ["Frozen Pretrained Transformers as Universal Computation Engines"](https://ojs.aaai.org/index.php/AAAI/article/view/20729). *Proceedings of the AAAI Conference on Artificial Intelligence*. **36** (7): 7628–7636. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1609/aaai.v36i7.20729](https://doi.org/10.1609%2Faaai.v36i7.20729). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2374-3468](https://search.worldcat.org/issn/2374-3468).
105. **[^](#cite_ref-107)** ["Vicuna: An Open-Source Chatbot Impressing GPT-4 with 90%\* ChatGPT Quality | LMSYS Org"](https://lmsys.org/blog/2023-03-30-vicuna). *lmsys.org*. 30 March 2023. Retrieved 2024-08-11.
106. **[^](#cite_ref-108)** Liu, Haotian; Li, Chunyuan; Wu, Qingyang; Lee, Yong Jae (2023-12-15). ["Visual Instruction Tuning"](https://proceedings.neurips.cc/paper_files/paper/2023/hash/6dcf277ea32ce3288914faf369fe6de0-Abstract-Conference.html). *Advances in Neural Information Processing Systems*. **36**: 34892–34916.
107. **[^](#cite_ref-Radford_Kim_Xu_Brockman_p._109-0)** Radford, Alec; Kim, Jong Wook; Xu, Tao; Brockman, Greg; McLeavey, Christine; Sutskever, Ilya (2022). "Robust Speech Recognition via Large-Scale Weak Supervision". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2212.04356](https://arxiv.org/abs/2212.04356) [[eess.AS](https://arxiv.org/archive/eess.AS)].
108. **[^](#cite_ref-perceiver2021_110-0)** Jaegle, Andrew; Gimeno, Felix; Brock, Andrew; Zisserman, Andrew; Vinyals, Oriol; Carreira, Joao (2021-06-22). "Perceiver: General Perception with Iterative Attention". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2103.03206](https://arxiv.org/abs/2103.03206) [[cs.CV](https://arxiv.org/archive/cs.CV)].
109. **[^](#cite_ref-jaegle2021b_111-0)** Jaegle, Andrew; Borgeaud, Sebastian; Alayrac, Jean-Baptiste; Doersch, Carl; Ionescu, Catalin; Ding, David; Koppula, Skanda; Zoran, Daniel; Brock, Andrew; Shelhamer, Evan; Hénaff, Olivier (2021-08-02). "Perceiver IO: A General Architecture for Structured Inputs & Outputs". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2107.14795](https://arxiv.org/abs/2107.14795) [[cs.LG](https://arxiv.org/archive/cs.LG)].
110. **[^](#cite_ref-112)** ["Parti: Pathways Autoregressive Text-to-Image Model"](https://sites.research.google/parti/). *sites.research.google*. Retrieved 2024-08-09.
111. ^ [***a***](#cite_ref-:13_113-0) [***b***](#cite_ref-:13_113-1) Villegas, Ruben; Babaeizadeh, Mohammad; Kindermans, Pieter-Jan; Moraldo, Hernan; Zhang, Han; Saffar, Mohammad Taghi; Castro, Santiago; Kunze, Julius; Erhan, Dumitru (2022-09-29). "Phenaki: Variable Length Video Generation from Open Domain Textual Descriptions". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2210.02399](https://arxiv.org/abs/2210.02399) [[cs.CV](https://arxiv.org/archive/cs.CV)].
112. ^ [***a***](#cite_ref-:12_114-0) [***b***](#cite_ref-:12_114-1) Chang, Huiwen; Zhang, Han; Barber, Jarred; Maschinot, A. J.; Lezama, Jose; Jiang, Lu; [Yang, Ming-Hsuan](https://en.wikipedia.org/wiki/Ming-Hsuan_Yang); Murphy, Kevin; Freeman, William T. (2023-01-02). "Muse: Text-To-Image Generation via Masked Generative Transformers". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2301.00704](https://arxiv.org/abs/2301.00704) [[cs.CV](https://arxiv.org/archive/cs.CV)].
113. **[^](#cite_ref-115)** Ramesh, Aditya; Pavlov, Mikhail; Goh, Gabriel; Gray, Scott; Voss, Chelsea; Radford, Alec; Chen, Mark; Sutskever, Ilya (2021-02-26), *Zero-Shot Text-to-Image Generation*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2102.12092](https://arxiv.org/abs/2102.12092)
114. **[^](#cite_ref-116)** Yu, Jiahui; Xu, Yuanzhong; Koh, Jing Yu; Luong, Thang; Baid, Gunjan; Wang, Zirui; Vasudevan, Vijay; Ku, Alexander; Yang, Yinfei (2022-06-21), *Scaling Autoregressive Models for Content-Rich Text-to-Image Generation*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2206.10789](https://arxiv.org/abs/2206.10789)
115. **[^](#cite_ref-117)** Kariampuzha, William; Alyea, Gioconda; Qu, Sue; Sanjak, Jaleal; Mathé, Ewy; Sid, Eric; Chatelaine, Haley; Yadaw, Arjun; Xu, Yanji; Zhu, Qian (2023). ["Precision information extraction for rare disease epidemiology at scale"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9972634). *Journal of Translational Medicine*. **21** (1): 157. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1186/s12967-023-04011-y](https://doi.org/10.1186%2Fs12967-023-04011-y). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [9972634](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9972634). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [36855134](https://pubmed.ncbi.nlm.nih.gov/36855134).

* Alexander Rush, [The Annotated transformer](https://nlp.seas.harvard.edu/2018/04/03/attention.html) [Archived](https://web.archive.org/web/20210922093841/https://nlp.seas.harvard.edu/2018/04/03/attention.html) 2021-09-22 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine), Harvard NLP group, 3 April 2018
* Phuong, Mary; Hutter, Marcus (2022). "Formal Algorithms for Transformers". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2207.09238](https://arxiv.org/abs/2207.09238) [[cs.LG](https://arxiv.org/archive/cs.LG)].
* Ferrando, Javier; Sarti, Gabriele; Bisazza, Arianna; Costa-jussà, Marta R. (2024-05-01). "A Primer on the Inner Workings of Transformer-based Language Models". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2405.00208](https://arxiv.org/abs/2405.00208) [[cs.CL](https://arxiv.org/archive/cs.CL)].
* Leech, Gavin (2024-11-06). ["Transformer++"](https://web.archive.org/web/20250226110336/https://www.gleech.org/tplus). *argmin gravitas*. Archived from [the original](https://www.gleech.org/tplus) on 2025-02-26. Retrieved 2025-05-08.
* [US patent 10452978](https://worldwide.espacenet.com/textdoc?DB=EPODOC&IDX=US10452978), Noam M. Shazeer; Aidan Nicholas Gomez; Lukasz Mieczyslaw Kaiser; Jakob D. Uszkoreit; Llion Owen Jones; Niki J. Parmar; Illia Polosukhin; Ashish Teku Vaswani, "Attention-based sequence transduction neural networks", issued 2019-10-22, assigned to Google LLC
* Raschka, Sebastian (2026-03-11). ["The Big LLM Architecture Comparison: From DeepSeek V3 to GLM-5: A Look At Modern LLM Architecture Design"](https://magazine.sebastianraschka.com/p/the-big-llm-architecture-comparison). *Sebastian Raschka’s AI Magazine*. Retrieved 2026-03-25.