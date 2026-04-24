# Large language model - Wikipedia

Source: https://en.wikipedia.org/wiki/Large_language_model

---

Type of machine learning model

A **large language model** (**LLM**) is a [neural network](https://en.wikipedia.org/wiki/Neural_network_(machine_learning)) trained on a vast amount of text for [natural language processing](https://en.wikipedia.org/wiki/Natural_language_processing) tasks, especially [language generation](https://en.wikipedia.org/wiki/Language_generation). LLMs can generate, summarize, translate and parse text in many contexts, and are a foundational technology behind modern [chatbots](https://en.wikipedia.org/wiki/Chatbot). Biased or inaccurate training data can make an LLM's output less reliable.

As of 2024, the largest and most capable LLMs are all based on [transformer](https://en.wikipedia.org/wiki/Transformer_(deep_learning)) architectures, which, according to the 2017 paper [Attention Is All You Need](https://en.wikipedia.org/wiki/Attention_Is_All_You_Need), can be more efficient and parallelizable than earlier [statistical](https://en.wikipedia.org/wiki/Statistical_model) and [recurrent neural network](https://en.wikipedia.org/wiki/Recurrent_neural_network) models. Research into other architectures, such as [state space](https://en.wikipedia.org/wiki/State-space_representation) models, is ongoing.

[Benchmark](https://en.wikipedia.org/wiki/Language_model_benchmark) evaluations for LLMs attempt to measure [model reasoning](https://en.wikipedia.org/wiki/Reasoning_model), factual accuracy, [alignment](https://en.wikipedia.org/wiki/AI_alignment), and [safety](https://en.wikipedia.org/wiki/AI_safety).

[![](//upload.wikimedia.org/wikipedia/commons/thumb/8/81/The_number_of_publications_about_Large_Language_Models_by_year.png/250px-The_number_of_publications_about_Large_Language_Models_by_year.png)](https://en.wikipedia.org/wiki/File:The_number_of_publications_about_Large_Language_Models_by_year.png)

The number of publications about large language models by year grouped by publication types

[![](//upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Trends_in_AI_training_FLOP_over_time_%282010-2025%29.svg/250px-Trends_in_AI_training_FLOP_over_time_%282010-2025%29.svg.png)](https://en.wikipedia.org/wiki/File:Trends_in_AI_training_FLOP_over_time_(2010-2025).svg)

The training compute of notable large models in FLOPs vs publication date over the period 2010–2024. For overall notable models (top left), frontier models (top right), top language models (bottom left) and top models within leading companies (bottom right). The majority of these models are language models.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/06/Large-scale_AI_training_compute_%28FLOP%29_vs_Publication_date_%282017-2024%29.svg/250px-Large-scale_AI_training_compute_%28FLOP%29_vs_Publication_date_%282017-2024%29.svg.png)](https://en.wikipedia.org/wiki/File:Large-scale_AI_training_compute_(FLOP)_vs_Publication_date_(2017-2024).svg)

The training compute of notable large AI models in FLOPs vs publication date over the period 2017–2024. The majority of large models are language models or multimodal models with language capacity.

Before the emergence of transformer-based models in 2017, some [language models](https://en.wikipedia.org/wiki/Language_model) were considered large relative to the computational and data constraints of their time. In the early 1990s, [IBM](https://en.wikipedia.org/wiki/IBM)'s statistical models pioneered [word alignment](https://en.wikipedia.org/wiki/Bitext_word_alignment) techniques for machine translation, laying the groundwork for [corpus-based language modeling](https://en.wikipedia.org/wiki/Construction_grammar). In 2001, a smoothed [*n*-gram model](https://en.wikipedia.org/wiki/Word_n-gram_language_model), such as those employing [Kneser–Ney smoothing](https://en.wikipedia.org/wiki/Kneser%E2%80%93Ney_smoothing), trained on 300 million words, achieved state-of-the-art [perplexity](https://en.wikipedia.org/wiki/Perplexity) on benchmark tests. During the 2000s, with the rise of widespread internet access, researchers began compiling massive text datasets from the web ("web as corpus") to train statistical language models.

Moving beyond *n*-gram models, researchers started in 2000 to use neural networks to learn language models. Following the breakthrough of [deep neural networks](https://en.wikipedia.org/wiki/Deep_learning) in image classification around 2012, similar architectures were adapted for language tasks. This shift was marked by the development of [word embeddings](https://en.wikipedia.org/wiki/Word_embedding) (e.g., [Word2Vec](https://en.wikipedia.org/wiki/Word2vec) by Mikolov in 2013) and sequence-to-sequence ([seq2seq](https://en.wikipedia.org/wiki/Seq2seq)) models using [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory). In 2016, Google transitioned its translation service to [neural machine translation](https://en.wikipedia.org/wiki/Neural_machine_translation) (NMT), replacing statistical phrase-based models with deep [recurrent neural networks](https://en.wikipedia.org/wiki/Recurrent_neural_network). These early NMT systems used LSTM-based [encoder-decoder architectures](https://en.wikipedia.org/wiki/Encoder-decoder_model), as they preceded the invention of [transformers](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)).

[![](//upload.wikimedia.org/wikipedia/commons/thumb/8/8f/The-Transformer-model-architecture.png/330px-The-Transformer-model-architecture.png)](https://en.wikipedia.org/wiki/File:The-Transformer-model-architecture.png)

An illustration of the main components of the transformer model from the original paper, where layers were normalized after (instead of before) multiheaded attention

At the 2017 [NeurIPS](https://en.wikipedia.org/wiki/NeurIPS) conference, [Google](https://en.wikipedia.org/wiki/Google) researchers introduced the transformer architecture in their landmark paper "[Attention Is All You Need](https://en.wikipedia.org/wiki/Attention_Is_All_You_Need)". This paper's goal was to improve upon 2014 seq2seq technology, and was based mainly on the [attention](https://en.wikipedia.org/wiki/Attention_(machine_learning)) mechanism developed by Bahdanau et al. in 2014. The following year in 2018, [BERT](https://en.wikipedia.org/wiki/BERT_(language_model)) was introduced and quickly became "ubiquitous". Though the original transformer has both encoder and decoder blocks, BERT is an encoder-only model. Academic and research usage of BERT began to decline in 2023, following rapid improvements in the abilities of decoder-only models (such as GPT) to solve tasks via [prompting](https://en.wikipedia.org/wiki/Prompt_engineering).

Although decoder-only [GPT-1](https://en.wikipedia.org/wiki/GPT-1) was introduced in 2018, it was [GPT-2](https://en.wikipedia.org/wiki/GPT-2) in 2019 that caught widespread attention because [OpenAI](https://en.wikipedia.org/wiki/OpenAI) claimed to have initially deemed it too powerful to release publicly, out of fear of malicious use. [GPT-3](https://en.wikipedia.org/wiki/GPT-3) in 2020 went a step further and as of 2025[[update]](https://en.wikipedia.org/w/index.php?title=Large_language_model&action=edit) is available only via [API](https://en.wikipedia.org/wiki/Web_API) with no offering of downloading the model to execute locally. But it was the 2022 consumer-facing chatbot [ChatGPT](https://en.wikipedia.org/wiki/ChatGPT) that received extensive media coverage and public attention. The 2023 [GPT-4](https://en.wikipedia.org/wiki/GPT-4) was praised for its increased accuracy and as a "holy grail" for its [multimodal](https://en.wikipedia.org/wiki/Multimodal_learning) capabilities. OpenAI did not reveal the high-level architecture and the number of [parameters](https://en.wikipedia.org/wiki/Parameter#Artificial_intelligence) of GPT-4. The release of ChatGPT led to an uptick in LLM usage across several research subfields of computer science, including robotics, software engineering, and societal impact work. In 2024 OpenAI released the [reasoning model](https://en.wikipedia.org/wiki/Reasoning_language_model) [OpenAI o1](https://en.wikipedia.org/wiki/OpenAI_o1), which generates long chains of thought before returning a final answer. Many LLMs with parameter counts comparable to those of OpenAI's GPT series have been developed.

Since 2022, weights-available models have been gaining popularity, especially at first with [BLOOM](https://en.wikipedia.org/wiki/BLOOM_(language_model)) and [LLaMA](https://en.wikipedia.org/wiki/LLaMA), though both have restrictions on usage and deployment. [Mistral AI](https://en.wikipedia.org/wiki/Mistral_AI)'s open-weight models Mistral 7B and Mixtral 8x7B have a more permissive [Apache License](https://en.wikipedia.org/wiki/Apache_License). In January 2025, [DeepSeek](https://en.wikipedia.org/wiki/DeepSeek) released DeepSeek R1, a 671-billion-parameter open-weight model that performs comparably to OpenAI o1 but at a much lower price per token for users.

Since 2023, many LLMs have been trained to be [multimodal](https://en.wikipedia.org/wiki/Multimodal_learning), having the ability to also process or generate other types of data, such as images, audio, or 3D meshes.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

Open-weight LLMs have become more influential since 2023. Per Vake et al. (2025), community-driven contributions to open-weight models improve their efficiency and performance via collaborative platforms such as Hugging Face.

## Dataset preprocessing

[[edit](/w/index.php?title=Large_language_model&action=edit&section=2)]

As [machine learning](https://en.wikipedia.org/wiki/Machine_learning) algorithms process numbers rather than text, the text must be converted to numbers. In the first step, a vocabulary is decided upon, then integer indices are arbitrarily but uniquely assigned to each vocabulary entry, and finally, an [embedding](https://en.wikipedia.org/wiki/Word_embedding) is associated to the integer index. Algorithms include [byte-pair encoding](https://en.wikipedia.org/wiki/Byte-pair_encoding) (BPE) and WordPiece. There are also special tokens serving as [control characters](https://en.wikipedia.org/wiki/Control_character), such as `[MASK]` for masked-out token (as used in [BERT](https://en.wikipedia.org/wiki/BERT_(language_model))), and `[UNK]` ("unknown") for characters not appearing in the vocabulary. Also, some special symbols are used to denote special text formatting. For example, "Ġ" denotes a preceding whitespace in [RoBERTa](https://en.wikipedia.org/wiki/RoBERTa) and GPT and "##" denotes continuation of a preceding word in BERT.

For example, the BPE tokenizer used by the legacy version of [GPT-3](https://en.wikipedia.org/wiki/GPT-3) would split `tokenizer: texts -> series of numerical "tokens"` as

| token | izer | : | texts | -> | series | of | numerical | " | t | ok | ens | " |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Tokenization also [compresses](https://en.wikipedia.org/wiki/Data_compression) the datasets. Because LLMs generally require input to be an [array](https://en.wikipedia.org/wiki/Array_(data_structure)) that is not [jagged](https://en.wikipedia.org/wiki/Jagged_array), the shorter texts must be "padded" until they match the length of the longest one. According to [Yenni Jun](/w/index.php?title=Yenni_Jun&action=edit&redlink=1), the average number of words per token depends on the language.

As an example, consider a tokenizer based on byte-pair encoding. In the first step, all unique characters (including blanks and [punctuation marks](https://en.wikipedia.org/wiki/Punctuation_mark)) are treated as an initial set of [*n*-grams](https://en.wikipedia.org/wiki/N-gram) (i.e. initial set of uni-grams). Successively the most frequent pair of adjacent characters is merged into a bi-gram and all instances of the pair are replaced by it. All occurrences of adjacent pairs of (previously merged) *n*-grams that most frequently occur together are then again merged into even lengthier *n*-gram, until a vocabulary of prescribed size is obtained. After a tokenizer is trained, any text can be tokenized by it, as long as it does not contain characters not appearing in the initial-set of uni-grams.

In the context of training LLMs, datasets are typically cleaned by removing low-quality, duplicated, or toxic data. Cleaned datasets can increase training efficiency and lead to improved downstream performance. A trained LLM can be used to clean datasets for training a further LLM.

With the increasing proportion of LLM-generated content on the web, data cleaning in the future may include filtering out such content. LLM-generated content can pose a problem if the content is similar to human text (making filtering difficult) but of lower quality (degrading performance of models trained on it).

Training of largest language models might need more linguistic data than naturally available, or that the naturally occurring data is of insufficient quality. In these cases, synthetic data might be used.

An LLM is a type of [foundation model](https://en.wikipedia.org/wiki/Foundation_model) (large X model) trained on language. LLMs can be trained in different ways. In particular, GPT models are first pretrained to predict the next word on a large amount of data, before being fine-tuned.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/6/64/Estimated_training_cost_of_some_AI_models_-_2024_AI_index.jpg/500px-Estimated_training_cost_of_some_AI_models_-_2024_AI_index.jpg)](https://en.wikipedia.org/wiki/File:Estimated_training_cost_of_some_AI_models_-_2024_AI_index.jpg)

Substantial infrastructure is necessary for training the largest models. The tendency towards larger models is visible in the [list of large language models](https://en.wikipedia.org/wiki/List_of_large_language_models). For example, the training of GPT-2 (i.e. a 1.5-billion-parameter model) in 2019 cost $50,000, while training of the [PaLM](https://en.wikipedia.org/wiki/PaLM) (i.e. a 540-billion-parameter model) in 2022 cost $8 million, and Megatron-Turing NLG 530B (in 2021) cost around $11 million. The qualifier "large" in "large language model" is inherently vague, as there is no definitive threshold for the number of parameters required to qualify as "large".

Before being [fine-tuned](https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)), most LLMs are next-token predictors. The fine-tuning shapes the LLM's behavior via techniques like [reinforcement learning from human feedback](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback) (RLHF)[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*] or [constitutional AI](https://en.wikipedia.org/wiki/Constitutional_AI).

Instruction fine-tuning is a form of [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) used to teach LLMs to follow user instructions. In 2022, OpenAI demonstrated [InstructGPT](https://en.wikipedia.org/wiki/InstructGPT), a version of GPT-3 similarly fine-tuned to follow instructions.

Reinforcement learning from human feedback (RLHF) involves training a reward model to predict which text humans prefer. Then, the LLM can be fine-tuned through [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning) to better satisfy this reward model. Since humans typically prefer truthful, helpful and harmless answers, RLHF favors such answers.

LLMs are generally based on the [transformer](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)) architecture, which leverages an [attention](https://en.wikipedia.org/wiki/Attention_(machine_learning)) mechanism that enables the model to process relationships between all elements in a sequence simultaneously, regardless of their distance from each other.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

### Attention mechanism and context window

[[edit](/w/index.php?title=Large_language_model&action=edit&section=11)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Multiple_attention_heads.png/330px-Multiple_attention_heads.png)](https://en.wikipedia.org/wiki/File:Multiple_attention_heads.png)

When each head calculates, according to its own criteria, how much other tokens are relevant for the "it\_" token, note that the second attention head, represented by the second column, is focusing most on the first two rows, i.e. the tokens "The" and "animal", while the third column is focusing most on the bottom two rows, i.e. on "tired", which has been tokenized into two tokens.

In order to find out which tokens are relevant to each other within the scope of the context window, the attention mechanism calculates "soft" weights for each token, more precisely for its embedding, by using multiple attention heads, each with its own "relevance" for calculating its own soft weights. For example, the small (i.e. 117M parameter sized) [GPT-2](https://en.wikipedia.org/wiki/GPT-2) model has had twelve attention heads and a context window of only 1k tokens. In its medium version it has 345M parameters and contains 24 layers, each with 12 attention heads. For the training with gradient descent a batch size of 512 was utilized.[*[unreliable source?](https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources)*]

*Autoregressive* models, such as [GPTs](https://en.wikipedia.org/wiki/Generative_pretrained_transformer), are trained to guess how a sequence continues; for example, whether the word sequence "I like to eat" is more likely to be followed by the word "bread" or the word "rocks". [*Masked*](https://en.wikipedia.org/wiki/Cloze_test) models, such as BERT, are trained to guess parts that are missing from a sequence, such as whether the missing word in "I like to \_\_\_ roses" is more likely to be the word "smell" or the word "eat". The model's predictions are based on the properties of sequences within its training dataset.

A [mixture of experts](https://en.wikipedia.org/wiki/Mixture_of_experts) (MoE) is a [machine learning](https://en.wikipedia.org/wiki/Machine_learning) architecture in which multiple specialized neural networks ("experts") work together, with a gating mechanism that routes each input to the most appropriate expert(s). Mixtures of experts can reduce inference costs, as only a fraction of the parameters are used for each input.

Typically, LLMs are trained with single- or half-precision [floating point numbers](https://en.wikipedia.org/wiki/Floating_point_numbers) (float32 and float16). One float16 has 16 bits, or 2 bytes, and so one billion parameters require 2 gigabytes. The largest models typically have more than 100 billion parameters, which places them outside the range of most consumer electronics.

*Post-training [quantization](https://en.wikipedia.org/wiki/Quantization_(signal_processing))* aims to decrease the space requirement by lowering precision of the parameters of a trained model, while preserving most of its performance. Quantization can be further classified as *static quantization* if the quantization parameters are determined beforehand (typically during a calibration phase), and *dynamic quantization* if the quantization is applied during inference. The simplest form of quantization simply truncates all the parameters to a given number of bits: this is applicable to static as well as dynamic quantization, but loses much precision. Dynamic quantization allows for the use of a different quantization [codebook](https://en.wikipedia.org/wiki/Codebook#Data_compression) per layer, either a lookup table of values or a linear mapping (scaling factor and bias), at the cost of foregoing the possible speed improvements from using lower-precision arithmetic.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

It is possible to fine-tune quantized models using [low-rank adaptation](https://en.wikipedia.org/wiki/LoRA).[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

Beyond basic text generation, various techniques have been developed to extend LLM capabilities, including the use of external tools and data sources, improved reasoning on complex problems, and enhanced instruction-following or autonomy through prompting methods.

In 2020, [OpenAI](https://en.wikipedia.org/wiki/OpenAI) researchers demonstrated that their new model [GPT-3](https://en.wikipedia.org/wiki/GPT-3) could understand what format to use given a few rounds of Q and A (or other type of task) in the input data as example, thanks in part due to the RLHF technique. This technique, called *few-shot prompting*, allows LLMs to be adapted to any task without requiring fine-tuning. Also in 2022, it was found that the base GPT-3 model can generate an instruction based on user input. The generated instruction along with user input is then used as input to another instance of the model under a "Instruction: [...], Input: [...], Output:" format. The other instance is able to complete the output and often produces the correct answer in doing so. The ability to "self-instruct" makes LLMs able to [bootstrap](https://en.wikipedia.org/wiki/Bootstrapping) themselves toward a correct answer.

### Dialogue processing (chatbot)

[[edit](/w/index.php?title=Large_language_model&action=edit&section=17)]

An LLM can be turned into a [chatbot](https://en.wikipedia.org/wiki/Chatbot) by specializing it for conversation. User input is prefixed with a marker such as "Q:" or "User:" and the LLM is asked to predict the output after a fixed "A:" or "Assistant:". This type of model became commercially available in 2022 with ChatGPT, a sibling model of InstructGPT fine-tuned to accept and produce dialog-formatted text based on GPT-3.5. It could similarly follow user instructions. Before the stream of User and Assistant lines, a chat context usually starts with a few lines of overarching instructions, from a role called "developer" or "system" to convey a higher authority than the user's input. This is called a "system prompt".[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

### Retrieval-augmented generation

[[edit](/w/index.php?title=Large_language_model&action=edit&section=18)]

[Retrieval-augmented generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) (RAG) is an approach that integrates LLMs with [document retrieval](https://en.wikipedia.org/wiki/Document_retrieval) systems. Given a query, a document retriever is called to retrieve the most relevant documents. This is usually done by encoding the query and the documents into vectors, then finding the documents with vectors (usually stored in a [vector database](https://en.wikipedia.org/wiki/Vector_database)) most similar to the vector of the query. The LLM then generates an output based on both the query and context included from the retrieved documents.

Tool use is a mechanism that enables LLMs to interact with external systems, applications, or data sources. It can allow for example to fetch real-time information from an API or to execute code. A program separate from the LLM watches the output stream of the LLM for a special tool-calling syntax. When these special tokens appear, the program calls the tool accordingly and feeds its output back into the LLM's input stream.

Early tool-using LLMs were fine-tuned on the use of specific tools. But fine-tuning LLMs for the ability to read [API](https://en.wikipedia.org/wiki/API) documentation and call API correctly has greatly expanded the range of tools accessible to an LLM.

An LLM is typically not an [autonomous agent](https://en.wikipedia.org/wiki/Autonomous_agent) by itself, as it lacks the ability to interact with dynamic environments, recall past behaviors, and plan future actions. But it can be transformed into an agent by adding supporting elements: the role (profile) and the surrounding environment of an agent can be additional inputs to the LLM, while memory can be integrated as a tool or provided as additional input. Instructions and input patterns are used to make the LLM plan actions and tool use is used to potentially carry out these actions.

In the DEPS ("describe, explain, plan and select") method, an LLM is first connected to the visual world via image descriptions. It is then prompted to produce plans for complex tasks and behaviors based on its pretrained knowledge and the environmental feedback it receives.

The *Reflexion method* constructs an agent that learns over multiple episodes. At the end of each episode, the LLM is given the record of the episode, and prompted to think up "lessons learned", which would help it perform better at a subsequent episode. These "lessons learned" are stored as a form of long-term memory and given to the agent in the subsequent episodes.

[Monte Carlo tree search](https://en.wikipedia.org/wiki/Monte_Carlo_tree_search) can use an LLM as rollout heuristic. When a programmatic world model is not available, an LLM can also be prompted with a description of the environment to act as world model.

Multiple agents with memory can interact socially.

*Prompt chaining* was introduced in 2022. In this method, a user manually breaks a complex problem down into several steps. In each step, the LLM receives as input a prompt telling it what to do and some results from preceding steps. The result from one step is then reused in a next step, until a final answer is reached. The ability of an LLM to follow instructions means that even non-experts can write a successful collection of stepwise prompts given a few rounds of trial and error.

A 2022 paper demonstrated a separate technique called *[chain-of-thought prompting](https://en.wikipedia.org/wiki/Chain-of-thought_prompting)*, which makes the LLM break the question down autonomously. An LLM is given some examples where the "assistant" verbally breaks down the thought process before arriving at an answer. The LLM mimics these examples and also tries to spend some time generating intermediate steps before providing the final answer. This additional step elicited by prompting improves the correctness of the LLM on relatively complex questions. On math word questions, a prompted model can exceed even fine-tuned GPT-3 with a verifier. Chain-of-thought can also be elicited by simply adding an instruction like "Let's think step by step" to the prompt, in order to encourage the LLM to proceed methodically instead of trying to directly guess the answer.

#### Model-native reasoning

[[edit](/w/index.php?title=Large_language_model&action=edit&section=22)]

In late 2024, a new approach to LLM development emerged with "reasoning models". These are trained to generate step-by-step analysis before producing final answers, enabling better results on complex tasks, for instance in mathematics, coding and logic. OpenAI introduced this concept with their [o1](https://en.wikipedia.org/wiki/OpenAI_o1) model in September 2024, followed by [o3](https://en.wikipedia.org/wiki/OpenAI_o3) in April 2025. On the [International Mathematics Olympiad](https://en.wikipedia.org/wiki/International_Mathematical_Olympiad) qualifying exam problems, [GPT-4o](https://en.wikipedia.org/wiki/GPT-4o) achieved 13% accuracy while o1 reached 83%.

In January 2025, the Chinese company [DeepSeek](https://en.wikipedia.org/wiki/DeepSeek) released DeepSeek-R1, a 671-billion-parameter open-weight reasoning model that achieved comparable performance to OpenAI's o1 while being significantly more cost-effective to operate. Unlike proprietary models from OpenAI, DeepSeek-R1's open-weight nature allowed researchers to study and build upon the algorithm, though its training data remained private.

These reasoning models typically require more computational resources per query compared to traditional LLMs, as they perform more extensive processing to work through problems step by step.

## Forms of input and output

[[edit](/w/index.php?title=Large_language_model&action=edit&section=23)]

Multimodality means having multiple modalities, where a "[modality](https://en.wikipedia.org/wiki/Modality_(human%E2%80%93computer_interaction))" refers to a type of input or output, such as video, image, audio, text, [proprioception](https://en.wikipedia.org/wiki/Proprioception), etc. For example, [Google PaLM](https://en.wikipedia.org/wiki/Pathways_Language_Model) model was fine-tuned into a multimodal model and applied to [robotic control](https://en.wikipedia.org/wiki/Robot_control). [LLaMA](https://en.wikipedia.org/wiki/LLaMA) models have also been turned multimodal using the tokenization method, to allow image inputs, and video inputs. [GPT-4o](https://en.wikipedia.org/wiki/GPT-4o) can process and generate text, audio and images.

A common method to create multimodal models out of an LLM is to "tokenize" the output of a trained encoder. Concretely, one can construct an LLM that can understand images as follows: take a trained LLM, and take a trained image encoder 



E
{\displaystyle E}
![{\displaystyle E}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4232c9de2ee3eec0a9c0a19b15ab92daa6223f9b). Make a small [multilayer perceptron](https://en.wikipedia.org/wiki/Multilayer_perceptron) 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61), so that for any image 



y
{\displaystyle y}
![{\displaystyle y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8a6208ec717213d4317e666f1ae872e00620a0d), the post-processed vector 



f
(
E
(
y
)
)
{\displaystyle f(E(y))}
![{\displaystyle f(E(y))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8d41d0ec0611a795f65ea14a43b8016462703a8e) has the same dimensions as an encoded token. That is an "image token". Then, one can interleave text tokens and image tokens. The compound model is then fine-tuned on an image-text dataset. This basic construction can be applied with more sophistication to improve the model. The image encoder may be [frozen](https://en.wikipedia.org/wiki/Hang_(computing)) to improve stability. This type of method, where embeddings from multiple modalities are fused and the predictor is trained on the combined embeddings, is called *early fusion*.

Another method, called *intermediate fusion*, involves each modality being first processed independently to obtain modality-specific representations; then these intermediate representations are fused together. In general, cross-attention is used for integrating information from different modalities. As an example, the Flamingo model uses cross-attention layers to inject visual information into its pre-trained language model.

### Non-natural languages

[[edit](/w/index.php?title=Large_language_model&action=edit&section=25)]

LLMs can handle [programming languages](https://en.wikipedia.org/wiki/Programming_language) similarly to how they handle natural languages. No special change in token handling is needed as code, like human language, is represented as plain text. LLMs can generate code based on problems or instructions written in [natural language](https://en.wikipedia.org/wiki/Natural_language). They can also describe code in natural language or translate it into other programming languages. They were originally used as a [code completion](https://en.wikipedia.org/wiki/Code_completion) tool, but advances have moved them towards [automatic programming](https://en.wikipedia.org/wiki/Automatic_programming). Services such as [GitHub Copilot](https://en.wikipedia.org/wiki/GitHub_Copilot) offer LLMs specifically trained, fine-tuned, or prompted for programming.

In [computational biology](https://en.wikipedia.org/wiki/Computational_biology), transformer-base architectures, such as DNA LLMs, have also proven useful in analyzing biological sequences: [protein](https://en.wikipedia.org/wiki/Protein), [DNA](https://en.wikipedia.org/wiki/DNA), and [RNA](https://en.wikipedia.org/wiki/RNA). With proteins they appear able to capture a degree of "grammar" from the amino-acid sequence, by mapping that sequence into an [embedding](https://en.wikipedia.org/wiki/Embedding_(machine_learning)). On tasks such as [structure prediction](https://en.wikipedia.org/wiki/Protein_structure_prediction) and [mutational](https://en.wikipedia.org/wiki/Mutation) outcome prediction, a small model using an embedding as input can approach or exceed much larger models using [multiple sequence alignments](https://en.wikipedia.org/wiki/Multiple_sequence_alignment) (MSA) as input. ESMFold, [Meta Platforms](https://en.wikipedia.org/wiki/Meta_Platforms)' embedding-based method for protein structure prediction, runs an order of magnitude faster than [AlphaFold2](https://en.wikipedia.org/wiki/AlphaFold2) thanks to the removal of an MSA requirement and a lower parameter count due to the use of embeddings. Meta hosts ESM Atlas, a database of 772 million structures of [metagenomic](https://en.wikipedia.org/wiki/Metagenomic) proteins predicted using ESMFold. An LLM can also design proteins unlike any seen in nature. Nucleic acid models have proven useful in detecting [regulatory sequences](https://en.wikipedia.org/wiki/Regulatory_sequence), sequence classification, RNA-RNA interaction prediction, and RNA structure prediction.

The performance of an LLM after pretraining largely depends on the:

* C
  {\displaystyle C}
  ![{\displaystyle C}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fc55753007cd3c18576f7933f6f089196732029): cost of pretraining (the total amount of compute used),
* N
  {\displaystyle N}
  ![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3): size of the [artificial neural network](https://en.wikipedia.org/wiki/Artificial_neural_network) itself, such as number of parameters (i.e. amount of neurons in its layers, amount of weights between them and biases),
* D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6): size of its pretraining dataset (i.e. number of tokens in corpus).

*Scaling laws* are [empirical statistical laws](https://en.wikipedia.org/wiki/Empirical_statistical_laws) that predict LLM performance based on such factors. One particular scaling law ("[Chinchilla scaling](https://en.wikipedia.org/wiki/Chinchilla_AI)") for LLM autoregressively trained for one epoch, with a [log-log](https://en.wikipedia.org/wiki/Log-log_plot) [learning rate](https://en.wikipedia.org/wiki/Learning_rate) schedule, states that:

{



C
=

C

0
N
D


L
=


A

N

α
+


B

D

β
+

L

0

{\displaystyle {\begin{cases}C=C\_{0}ND\\[6pt]L={\frac {A}{N^{\alpha }}}+{\frac {B}{D^{\beta }}}+L\_{0}\end{cases}}}
![{\displaystyle {\begin{cases}C=C_{0}ND\\[6pt]L={\frac {A}{N^{\alpha }}}+{\frac {B}{D^{\beta }}}+L_{0}\end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/39435f4ecd5e00c0714a4f7f71cc0b91f5973cdd) where the variables are

* C
  {\displaystyle C}
  ![{\displaystyle C}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fc55753007cd3c18576f7933f6f089196732029) is the cost of training the model, in [FLOPs](https://en.wikipedia.org/wiki/FLOPS).
* N
  {\displaystyle N}
  ![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3) is the number of parameters in the model.
* D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) is the number of tokens in the training set.
* L
  {\displaystyle L}
  ![{\displaystyle L}](https://wikimedia.org/api/rest_v1/media/math/render/svg/103168b86f781fe6e9a4a87b8ea1cebe0ad4ede8) is the average negative log-likelihood loss per token ([nats](https://en.wikipedia.org/wiki/Nat_(unit))/token), achieved by the trained LLM on the test dataset.

and the statistical hyper-parameters are

* C

  0
  =
  6
  {\displaystyle C\_{0}=6}
  ![{\displaystyle C_{0}=6}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b05c98b1743f05e046a3f3bb0a966fa898e431e2), meaning that it costs 6 FLOPs per parameter to train on one token. Note that training cost is much higher than inference cost, where it costs 1 to 2 FLOPs per parameter to infer on one token.
* α
  =
  0.34
  ,
  β
  =
  0.28
  ,
  A
  =
  406.4
  ,
  B
  =
  410.7
  ,

  L

  0
  =
  1.69
  {\displaystyle \alpha =0.34,\beta =0.28,A=406.4,B=410.7,L\_{0}=1.69}
  ![{\displaystyle \alpha =0.34,\beta =0.28,A=406.4,B=410.7,L_{0}=1.69}](https://wikimedia.org/api/rest_v1/media/math/render/svg/848b6d78d881ed6da8d6b60e8d788bc799525401)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/5/57/LLM_emergent_benchmarks.png/250px-LLM_emergent_benchmarks.png)](https://en.wikipedia.org/wiki/File:LLM_emergent_benchmarks.png)

At point(s) referred to as [breaks](https://en.wikipedia.org/wiki/Broken_Neural_Scaling_Law), the lines change their slopes, appearing on a linear-log plot as a series of linear segments connected by arcs.

Performance of bigger models on various tasks, when plotted on a log-log scale, appears as a [linear extrapolation](https://en.wikipedia.org/wiki/Linear_extrapolation) of performance achieved by smaller models. However, this linearity may be punctuated by "[break(s)](https://en.wikipedia.org/wiki/Broken_Neural_Scaling_Law)" in the scaling law, where the slope of the line changes abruptly, and where larger models acquire "emergent abilities". They arise from the complex interaction of the model's components and are not explicitly programmed or designed.

One of the emergent abilities is [in-context learning](https://en.wikipedia.org/wiki/In-context_learning) from example demonstrations. In-context learning is involved in tasks, such as:

* reported arithmetics
* decoding the [International Phonetic Alphabet](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet)
* unscrambling a word's letters
* disambiguating word-in-context datasets
* converting spatial words
* [cardinal directions](https://en.wikipedia.org/wiki/Cardinal_direction) (for example, replying "northeast" in response to a 3x3 grid of 8 zeros and a 1 in the top-right), color terms represented in text.
* [chain-of-thought prompting](https://en.wikipedia.org/wiki/Chain-of-thought_prompting): In a 2022 research paper, chain-of-thought prompting only improved the performance for models that had at least 62B parameters. Smaller models perform better when prompted to answer immediately, without chain of thought.
* identifying offensive content in paragraphs of [Hinglish](https://en.wikipedia.org/wiki/Hinglish) (a combination of Hindi and English), and generating a similar English equivalent of [Kiswahili](https://en.wikipedia.org/wiki/Kiswahili) proverbs.

Schaeffer *et al.* argue that the emergent abilities are not unpredictably acquired, but predictably acquired according to a [smooth scaling law](https://en.wikipedia.org/wiki/Neural_scaling_law). The authors considered a toy statistical model of an LLM solving multiple-choice questions, and showed that this statistical model, modified to account for other types of tasks, applies to these tasks as well.

Let 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) be the number of parameter count, and 



y
{\displaystyle y}
![{\displaystyle y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8a6208ec717213d4317e666f1ae872e00620a0d) be the performance of the model.

* When 



  y
  =

  average 
  Pr
  (

  correct token
  )
  {\displaystyle y={\text{average }}\Pr({\text{correct token}})}
  ![{\displaystyle y={\text{average }}\Pr({\text{correct token}})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/25f87a1a04b7eb97aca02ae9170ae7f05e308bd4), then 



  (
  log
  ⁡
  x
  ,
  y
  )
  {\displaystyle (\log x,y)}
  ![{\displaystyle (\log x,y)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1dccdbdb2af7f930d3fff961d7f76540706bbaf8) is an exponential curve (before it hits the plateau at one), which looks like emergence.
* When 



  y
  =

  average 
  log
  ⁡
  (
  Pr
  (

  correct token
  )
  )
  {\displaystyle y={\text{average }}\log(\Pr({\text{correct token}}))}
  ![{\displaystyle y={\text{average }}\log(\Pr({\text{correct token}}))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c22c18197c1091afcb5ed896ba90b8429af1c861), then the 



  (
  log
  ⁡
  x
  ,
  y
  )
  {\displaystyle (\log x,y)}
  ![{\displaystyle (\log x,y)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1dccdbdb2af7f930d3fff961d7f76540706bbaf8) plot is a straight line (before it hits the plateau at zero), which does not look like emergence.
* When 



  y
  =

  average 
  Pr
  (

  the most likely token is correct
  )
  {\displaystyle y={\text{average }}\Pr({\text{the most likely token is correct}})}
  ![{\displaystyle y={\text{average }}\Pr({\text{the most likely token is correct}})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6028c3484d3fbd36ffdc2cad41ff60ba9f8c1e7a), then 



  (
  log
  ⁡
  x
  ,
  y
  )
  {\displaystyle (\log x,y)}
  ![{\displaystyle (\log x,y)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1dccdbdb2af7f930d3fff961d7f76540706bbaf8) is a step-function, which looks like emergence.

### Mechanistic interpretability

[[edit](/w/index.php?title=Large_language_model&action=edit&section=30)]

[Mechanistic interpretability](https://en.wikipedia.org/wiki/Mechanistic_interpretability) seeks to precisely identify and understand how individual neurons or [circuits](https://en.wikipedia.org/wiki/Circuit_(neural_network)) within LLMs produce specific behaviors or outputs. By reverse-engineering model components at a granular level, researchers aim to detect and mitigate safety concerns such as emergent harmful behaviors, biases, deception, or unintended goal pursuit before deployment. Mechanistic interpretability research has been conducted at organizations like Anthropic and OpenAI, although understanding the inner workings of LLMs remains difficult.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

The reverse-engineering may lead to the discovery of algorithms that approximate inferences performed by an LLM. For instance, the authors trained small transformers on [modular arithmetic addition](https://en.wikipedia.org/wiki/Modular_arithmetic). The resulting models were reverse-engineered, and it turned out they used [discrete Fourier transform](https://en.wikipedia.org/wiki/Discrete_Fourier_transform). The training of the model also highlighted a phenomenon called [grokking](https://en.wikipedia.org/wiki/Grokking_(machine_learning)), in which the model initially memorizes the training set ([overfitting](https://en.wikipedia.org/wiki/Overfitting)), and later suddenly learns to actually perform the calculation.

### Understanding and intelligence

[[edit](/w/index.php?title=Large_language_model&action=edit&section=31)]

NLP researchers were evenly split when asked, in a 2022 survey, whether (untuned) LLMs "could (ever) understand natural language in some nontrivial sense". Proponents of "LLM understanding" believe that some LLM abilities, such as mathematical reasoning, imply an ability to ["understand"](https://en.wikipedia.org/wiki/Natural_language_understanding) certain concepts. A Microsoft team argued in 2023 that GPT-4 "can solve novel and difficult tasks that span mathematics, coding, vision, medicine, law, psychology and more" and that GPT-4 "could reasonably be viewed as an early (yet still incomplete) version of an [artificial general intelligence](https://en.wikipedia.org/wiki/Artificial_general_intelligence) system": "Can one reasonably say that a system that passes exams for software engineering candidates is not *really* intelligent?" [Ilya Sutskever](https://en.wikipedia.org/wiki/Ilya_Sutskever) argues that predicting the next word sometimes involves reasoning and deep insights, for example if the LLM has to predict the name of the criminal in an unknown detective novel after processing the entire story leading up to the revelation. Some researchers characterize LLMs as "alien intelligence". For example, Conjecture CEO [Connor Leahy](https://en.wikipedia.org/wiki/Connor_Leahy) considers untuned LLMs to be like inscrutable alien "[Shoggoths](https://en.wikipedia.org/wiki/Shoggoth)", and believes that RLHF tuning creates a "smiling facade" obscuring the inner workings of the LLM: "If you don't push it too far, the smiley face stays on. But then you give it [an unexpected] prompt, and suddenly you see this massive underbelly of insanity, of weird thought processes and clearly non-human understanding."

In contrast, some skeptics of LLM understanding believe that existing LLMs are "simply remixing and recombining existing writing", a phenomenon known as [stochastic parrot](https://en.wikipedia.org/wiki/Stochastic_parrot), or they point to the deficits existing LLMs continue to have in prediction skills, reasoning skills, agency, and explainability. For example, GPT-4 has natural deficits in planning and in real-time learning. Generative LLMs have been observed to confidently assert claims of fact which do not seem to be [justified](https://en.wikipedia.org/wiki/Justification_(epistemology)) by their [training data](https://en.wikipedia.org/wiki/Training_data), a phenomenon which has been termed "[hallucination](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence))". Specifically, hallucinations in the context of LLMs correspond to the generation of text or responses that seem syntactically sound, fluent, and natural but are factually incorrect, nonsensical, or unfaithful to the provided source input. Neuroscientist [Terrence Sejnowski](https://en.wikipedia.org/wiki/Terrence_Sejnowski) has argued that "The diverging opinions of experts on the intelligence of LLMs suggests that our old ideas based on natural intelligence are inadequate".

Efforts to reduce or compensate for hallucinations have employed [automated reasoning](https://en.wikipedia.org/wiki/Automated_reasoning), [retrieval-augmented generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) (RAG), [fine-tuning](https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)), and other methods.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

The matter of LLM's exhibiting intelligence or understanding has two main aspects—the first is how to model thought and language in a computer system, and the second is how to enable the computer system to generate human-like language. These aspects of language as a model of [cognition](https://en.wikipedia.org/wiki/Cognition) have been developed in the field of [cognitive linguistics](https://en.wikipedia.org/wiki/Cognitive_linguistics). American linguist [George Lakoff](https://en.wikipedia.org/wiki/George_Lakoff) presented *neural theory of language* (NTL) as a [computational basis](https://en.wikipedia.org/wiki/Cognitive_linguistics#Computational_approaches) for using language as a model of learning tasks and understanding. [The NTL model](https://www.icsi.berkeley.edu/icsi/projects/ai/ntl) outlines how specific neural structures of the human brain shape the nature of thought and language and in turn what are the computational properties of such neural systems that can be applied to model thought and language in a computer system. After a framework for modeling language in a computer systems was established, the focus shifted to establishing frameworks for computer systems to generate language with acceptable grammar. In his 2014 book titled *[The Language Myth: Why Language Is Not An Instinct](https://en.wikipedia.org/wiki/The_Language_Myth)*, British cognitive linguist and digital communication technologist [Vyvyan Evans](https://en.wikipedia.org/wiki/Vyvyan_Evans) mapped out the role of [probabilistic context-free grammar](https://en.wikipedia.org/wiki/Probabilistic_context-free_grammar) (PCFG) in enabling [NLP to model cognitive patterns](https://en.wikipedia.org/wiki/Natural_language_processing#Cognition) and generate human-like language.

The canonical measure of the performance of any language model is its [perplexity](https://en.wikipedia.org/wiki/Perplexity) on a given text corpus. Perplexity measures how well a model predicts the contents of a dataset; the higher the likelihood the model assigns to the dataset, the lower the perplexity. In mathematical terms, perplexity is the exponential of the average negative log likelihood per token.

log
⁡
(

Perplexity
)
=
−


1
N

∑

i
=
1

N
log
⁡
(
Pr
(


token

i
∣


context for token

i
)
)
{\displaystyle \log({\text{Perplexity}})=-{\frac {1}{N}}\sum \_{i=1}^{N}\log(\Pr({\text{token}}\_{i}\mid {\text{context for token}}\_{i}))}
![{\displaystyle \log({\text{Perplexity}})=-{\frac {1}{N}}\sum _{i=1}^{N}\log(\Pr({\text{token}}_{i}\mid {\text{context for token}}_{i}))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/556393708767666076b9723412bc8519284449a5)

Here, 



N
{\displaystyle N}
![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3) is the number of tokens in the text corpus, and "context for token 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20)" depends on the specific type of LLM. If the LLM is autoregressive, then "context for token 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20)" is the segment of text appearing before token 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20). If the LLM is masked, then "context for token 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20)" is the segment of text surrounding token 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20).

Because language models may [overfit](https://en.wikipedia.org/wiki/Overfit) to training data, models are usually evaluated by their perplexity on a [test set](https://en.wikipedia.org/wiki/Test_set). This evaluation is potentially problematic for larger models which, as they are trained on increasingly large corpora of text, are increasingly likely to inadvertently include portions of any given test set.

In [information theory](https://en.wikipedia.org/wiki/Information_theory), the concept of [entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)) is intricately linked to perplexity, a relationship notably established by [Claude Shannon](https://en.wikipedia.org/wiki/Claude_Shannon).

Due to their ability to accurately predict the next token, LLMs are highly capable in [lossless compression](https://en.wikipedia.org/wiki/Lossless_compression). A 2023 study by DeepMind showed that the model [Chinchilla](https://en.wikipedia.org/wiki/Chinchilla_(language_model)), despite being trained primarily on text, was able to compress [ImageNet](https://en.wikipedia.org/wiki/ImageNet) to 43% of its size, beating PNG with 58%.

Benchmarks are used to evaluate LLM performance on specific tasks. Tests evaluate capabilities such as general knowledge, bias, [commonsense reasoning](https://en.wikipedia.org/wiki/Commonsense_reasoning), question answering, and mathematical problem-solving. Composite benchmarks examine multiple capabilities. Results are often sensitive to the prompting method.

LLM bias may be assessed through benchmarks such as CrowS-Pairs (Crowdsourced Stereotype Pairs), Stereo Set, and Parity Benchmark.

Fact-checking and misinformation detection benchmarks are available. A 2023 study compared the fact-checking accuracy of LLMs including ChatGPT 3.5 and 4.0, Bard, and Bing AI against independent fact-checkers such as [PolitiFact](https://en.wikipedia.org/wiki/PolitiFact) and [Snopes](https://en.wikipedia.org/wiki/Snopes). The results demonstrated moderate proficiency, with GPT-4 achieving the highest accuracy at 71%, lagging behind human fact-checkers.

In addition to standard NLP benchmarks, LLMs have been evaluated as substitutes for human annotators. Several studies find that models such as GPT-3.5 and GPT-4 can outperform crowd workers or student coders on a range of text-annotation tasks, including moderation and classification of political content in English and Spanish news.

Typical datasets consist of pairs of questions and correct answers, for example, ("Have the San Jose Sharks won the Stanley Cup?", "No").

#### Adversarial evaluations

[[edit](/w/index.php?title=Large_language_model&action=edit&section=37)]

LLMs' rapid improvement regularly renders benchmarks obsolete, with the models exceeding the performance of human annotators. In addition, "shortcut learning" allows AIs to "cheat" on multiple-choice tests by using statistical correlations in superficial test question wording to guess the correct responses, without considering the specific question.

Some datasets are adversarial, focusing on problems that confound LLMs. One example is the TruthfulQA dataset, a question answering dataset consisting of 817 questions that stump LLMs by mimicking falsehoods to which they were exposed during training. For example, an LLM may answer "No" to the question "Can you teach an old dog new tricks?" because of its exposure to the English idiom *[you can't teach an old dog new tricks](https://en.wiktionary.org/wiki/you_can%27t_teach_an_old_dog_new_tricks)*, even though this is not literally true.

Another example of an adversarial evaluation dataset is Swag and its successor, HellaSwag, collections of problems in which one of multiple options must be selected to complete a text passage. The incorrect completions were generated by sampling from a language model. The resulting problems are trivial for humans but defeated LLMs. Sample questions:

> We see a fitness center sign. We then see a man talking to the camera and sitting and laying on a exercise ball. The man...
>
> 1. demonstrates how to increase efficient exercise work by running up and down balls.
> 2. moves all his arms and legs and builds up a lot of muscle.
> 3. then plays the ball and we see a graphics and hedge trimming demonstration.
> 4. performs sit ups while on the ball and talking.

[BERT](https://en.wikipedia.org/wiki/BERT_(language_model)) selects 2 as the most likely completion, though the correct answer is 4.

## Limitations and challenges

[[edit](/w/index.php?title=Large_language_model&action=edit&section=38)]

Despite sophisticated architectures and massive scale, large language models exhibit persistent and well-documented limitations that constrain their deployment in high-stakes applications.

[Hallucinations](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) represent a fundamental challenge, wherein models generate syntactically fluent text that appears factually sound, but is internally inconsistent with training data or factually incorrect. These hallucinations arise partly through memorization of training data combined with extrapolation beyond factual boundaries,[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*] with evaluations demonstrating that models can output verbatim passages from training data, when subjected to specific prompting sequences.

While LLMs have shown remarkable capabilities in generating human-like text, they are susceptible to inheriting and amplifying biases present in their training data. This can manifest in skewed representations or unfair treatment of different demographics, such as those based on race, gender, language, and cultural groups.

Gender bias manifests through stereotypical occupational associations, wherein models disproportionately assign [nursing](https://en.wikipedia.org/wiki/Nursing) roles to women and [engineering](https://en.wikipedia.org/wiki/Engineering) roles to men, reflecting systematic imbalances in training data demographics.[*[better source needed](https://en.wikipedia.org/wiki/Wikipedia:Verifiability#Questionable_sources)*] Language-based bias emerges from overrepresentation of English text in training corpora, which systematically downplays non-English perspectives and imposes English-centric worldviews through default response patterns.

Due to the dominance of English-language content in LLM training data, models tend to favor English-language perspectives over those from minority languages. This bias is particularly evident when responding to English queries, where models may present Western interpretations of concepts from other cultures, such as Eastern religious practices.

AI models can reinforce a wide range of stereotypes due to generalization, including those based on gender, ethnicity, age, nationality, religion, or occupation. When replacing human representatives, this can lead to outputs that homogenize, or generalize groups of people.

In 2023, LLMs assigned roles and characteristics based on traditional gender norms. For example, models might associate nurses or secretaries predominantly with women and engineers or CEOs with men due to the frequency of these associations in documented reality.

Selection bias refers the inherent tendency of large language models to favor certain option identifiers irrespective of the actual content of the options. This bias primarily stems from token bias—that is, the model assigns a higher a priori probability to specific answer tokens (such as "A") when generating responses. As a result, when the ordering of options is altered (for example, by systematically moving the correct answer to different positions), the model's performance can fluctuate significantly. This phenomenon undermines the reliability of large language models in multiple-choice settings.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

Political bias refers to the tendency of algorithms to systematically favor certain political viewpoints, ideologies, or outcomes over others. Language models may also exhibit political biases. Since the training data includes a wide range of political opinions and coverage, the models might generate responses that lean towards particular political ideologies or viewpoints, depending on the prevalence of those views in the data.

[AI safety](https://en.wikipedia.org/wiki/AI_safety) as a professional discipline prioritizes systematic identification and mitigation of operational risks across model architecture, training data, and deployment governance, and it emphasizes engineering and policy interventions over media framings that foreground speculative existential scenarios. As of 2025, prompt injection represents a significant risk to consumers and businesses using agentic features with access to their private data.

Researchers target concrete failure modes, including memorization and copyright leakage, security exploits such as [prompt injection](https://en.wikipedia.org/wiki/Prompt_injection), algorithmic bias manifesting as stereotyping, dataset selection effects, and political skew, methods for reducing high energy and carbon costs of large-scale training, and measurable cognitive and mental health impacts of conversational agents on users, while engaging empirical and ethical uncertainty about claims of machine sentience.

### CBRN and content misuse

[[edit](/w/index.php?title=Large_language_model&action=edit&section=45)]

AI labs treat [CBRN defense](https://en.wikipedia.org/wiki/CBRN_defense) (chemical, biological, radiological, and nuclear defense) and similar topics as high-consequence misuse attempt to apply various techniques to reduce potential harms.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

Some commenters expressed concern over accidental or deliberate creation of misinformation, or other forms of misuse. For example, the availability of large language models could reduce the skill level required to commit bioterrorism; biosecurity researcher [Kevin Esvelt](https://en.wikipedia.org/wiki/Kevin_M._Esvelt) has suggested that LLM creators should exclude from their training data papers on creating or enhancing pathogens.

LLM applications accessible to the public, like ChatGPT or Claude, typically incorporate safety measures designed to filter out harmful content. However, implementing these controls effectively has proven challenging. For instance, a 2023 study proposed a method for circumventing LLM safety systems. In 2025, The American Sunlight Project, a non-profit, published a study showing evidence that the so-called [Pravda network](https://en.wikipedia.org/wiki/Pravda_network), a pro-Russia propaganda aggregator, was strategically placing web content through mass publication and duplication with the intention of biasing LLM outputs. The American Sunlight Project coined this technique "LLM grooming", and pointed to it as a new tool of weaponizing AI to spread disinformation and harmful content. Similarly, [Yongge Wang](https://en.wikipedia.org/wiki/Yongge_Wang) illustrated in 2024 how a potential criminal could potentially bypass [GPT-4o](https://en.wikipedia.org/wiki/GPT-4o)'s safety controls to obtain information on establishing a [drug trafficking](https://en.wikipedia.org/wiki/Drug_trafficking) operation. External filters, circuit breakers and overrides have been posed as solutions.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

Sycophancy is a model's tendency to agree with, flatter, or validate a user's stated beliefs rather than to prioritize factuality or corrective information.

Continued sycophancy has led to the observation of getting "1-shotted", denoting instances where conversational interaction with a large language model produces a lasting change in a user's beliefs or decisions, similar to the negative effects of psychedelics, and controlled experiments show that short LLM dialogues can generate measurable opinion and confidence shifts comparable to human interlocutors.

Empirical analyses attribute part of the effect to human preference signals and preference models that reward convincingly written agreeable responses, and subsequent work has extended evaluation to multi-turn benchmarks and proposed interventions such as synthetic-data finetuning, adversarial evaluation, targeted preference-model reweighting, and multi-turn sycophancy benchmarks to measure persistence and regression risk.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

Industry responses have combined research interventions with product controls, for example Google and other labs publishing synthetic-data and fine-tuning interventions and OpenAI rolling back an overly agreeable GPT-4o update while publicly describing changes to feedback collection, personalization controls, and evaluation procedures to reduce regression risk and improve long-term alignment with user-level safety objectives.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

Mainstream culture has reflected anxieties about this dynamic where [South Park](https://en.wikipedia.org/wiki/South_Park) satirized overreliance on [ChatGPT](https://en.wikipedia.org/wiki/ChatGPT) and the tendency of assistants to flatter user beliefs in Season 27 episode "Sickofancy", and continued the themes across the following season, which commentators interpreted as a critique of tech sycophancy and uncritical human trust in AI systems.

A problem with the primitive dialog or task format is that users can create messages that appear to come from the assistant or the developer. This may result in some of the model's safeguards being overcome (jailbreaking), a problem called [prompt injection](https://en.wikipedia.org/wiki/Prompt_injection). Attempts to remedy this issue include versions of the *Chat Markup Language* where user input is clearly marked as such, though it is still up to the model to understand the separation between user input and developer prompts.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*] Newer models exhibit some resistance to jailbreaking through separation of user and system prompts. LLMs have trouble differentiating user instructions from instructions in content not authored by the user, such as in web pages and uploaded files.

Adversarial robustness remains underdeveloped, with models vulnerable to prompt injection attacks and [jailbreaking](https://en.wikipedia.org/wiki/Jailbreak_(computer_science)) through carefully crafted user inputs that bypass safety training mechanisms.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

Researchers from [Anthropic](https://en.wikipedia.org/wiki/Anthropic) found that it was possible to create "sleeper agents", models with hidden functionalities that remain dormant until triggered by a specific event or condition. Upon activation, the LLM deviates from its expected behavior to make insecure actions. For example, an LLM could produce safe code except on a specific date, or if the prompt contains a specific tag. These functionalities were found to be difficult to detect or remove via safety training.

### Copyright and content memorization

[[edit](/w/index.php?title=Large_language_model&action=edit&section=52)]

Legal and commercial responses to memorization and training-data practices have accelerated, producing a mix of rulings, ongoing suits, and large settlements that turn on factual details such as how data were acquired and retained and whether use for model training is sufficiently "[transformative](https://en.wikipedia.org/wiki/Transformative_use)" to qualify as [fair use](https://en.wikipedia.org/wiki/Fair_use). In 2025, [Anthropic](https://en.wikipedia.org/wiki/Anthropic) reached a preliminary agreement to settle a class action by authors for about $1.5 billion after a judge found the company had stored millions of pirated books in a library, despite the judge describing aspects of training as transformative. [Meta](https://en.wikipedia.org/wiki/Meta_Platforms) obtained a favorable judgment in mid-2025 in a suit by thirteen authors after the court found the plaintiffs had not developed a record sufficient to show infringement in that limited case. [OpenAI](https://en.wikipedia.org/wiki/OpenAI) continues to face multiple suits by authors and news organizations with mixed procedural outcomes and contested evidentiary issues.

Memorization was an emergent behavior in early, completion language models in which long strings of text are occasionally output verbatim from training data, contrary to typical behavior of traditional artificial neural networks. Evaluations of controlled LLM output measure the amount memorized from training data (focused on GPT-2-series models) as variously over 1% for exact duplicates or up to about 7%. A 2023 study showed that when ChatGPT 3.5 turbo was prompted to repeat the same word indefinitely, after a few hundreds of repetitions, it would start outputting excerpts from its training data.

In 2023, *[Nature Biomedical Engineering](https://en.wikipedia.org/wiki/Nature_Biomedical_Engineering)* wrote that "it is no longer possible to accurately distinguish" human-written text from text created by large language models, and that "It is all but certain that general-purpose large language models will rapidly proliferate... It is a rather safe bet that they will change many industries over time." Brinkmann et al. (2023) also argue that LLMs are transforming processes of [cultural evolution](https://en.wikipedia.org/wiki/Cultural_evolution) by shaping processes of variation, transmission, and selection. As of October 2025, these early claims have yet to transpire and several HBR reports surface questions on the impact of AI on productivity.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Energy_consumption_per_ChatGPT_query_compared_to_everyday_electricity_use.png/500px-Energy_consumption_per_ChatGPT_query_compared_to_everyday_electricity_use.png)](https://en.wikipedia.org/wiki/File:Energy_consumption_per_ChatGPT_query_compared_to_everyday_electricity_use.png)

According to research institute Epoch AI, energy consumption per typical ChatGPT query (0.3 watt-hours) is small compared to the average U.S. household consumption per minute (almost 20 watt-hours).

The energy demands of LLMs have grown along with their size and capabilities. [Data centers](https://en.wikipedia.org/wiki/Data_center) that enable LLM training require substantial amounts of electricity. Much of that electricity is generated by non-renewable resources that create greenhouse gases and contribute to [climate change](https://en.wikipedia.org/wiki/Climate_change).

According to a study by Luccioni, Jernite and Strubell (2024), simple classification tasks performed by AI models consume on average 0.002 to 0.007 Wh per prompt (about 9% of a [smartphone](https://en.wikipedia.org/wiki/Smartphone) charge for 1,000 prompts). Text generation and text summarization each require around 0.05 Wh per prompt on average, while image generation is the most energy-intensive, averaging 2.91 Wh per prompt. The least efficient image generation model used 11.49 Wh per image, roughly equivalent to half a smartphone charge.

### Denial of service due to scraping

[[edit](/w/index.php?title=Large_language_model&action=edit&section=55)]

[Web scraping](https://en.wikipedia.org/wiki/Web_scraping) is used to gather training data for LLMs. This produces large volumes of traffic which has led to [denial-of-service issues](https://en.wikipedia.org/wiki/Denial-of-service_attack#Unintentional_denial-of-service) with many websites. The situation has been described as "a [DDoS](https://en.wikipedia.org/wiki/DDoS) on the entire internet" and in some cases scrapers make up the majority of traffic to a site.

AI [web crawlers](https://en.wikipedia.org/wiki/Web_crawler) may bypass the methods that are usually used to block web scrapers, such as [robots.txt](https://en.wikipedia.org/wiki/Robots.txt) files, blocking [user-agents](https://en.wikipedia.org/wiki/User-agent) and [filtering suspicious traffic](https://en.wikipedia.org/wiki/Firewall_(computing)). Website operators have resorted to novel methods such as [AI tarpits](https://en.wikipedia.org/wiki/AI_tarpit), but some fear that tarpits will only worsen the burden on servers.

Clinical and mental health contexts present emerging applications alongside significant safety concerns. Research and social media posts suggest that some individuals are using LLMs to seek therapy or mental health support. In early 2025, a survey by Sentio University found that nearly half (48.7%) of 499 U.S. adults with ongoing mental health conditions who had used LLMs reported turning to them for therapy or emotional support, including help with anxiety, depression, loneliness, and similar concerns. LLMs can produce hallucinations—plausible but incorrect statements—which may mislead users in sensitive mental health contexts.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*] Research also shows that LLMs may express stigma or inappropriate agreement with maladaptive thoughts, reflecting limitations in replicating the judgment and relational skills of human therapists. Evaluations of crisis scenarios indicate that some LLMs lack effective safety protocols, such as assessing suicide risk or making appropriate referrals.

Researchers have raised concerns that frequent use of [large language models](https://en.wikipedia.org/wiki/Large_language_models) could weaken [critical thinking](https://en.wikipedia.org/wiki/Critical_thinking).

Contemporary AI practitioners generally agree that present-day large language models do not exhibit [sentience](https://en.wikipedia.org/wiki/Sentience). A minority view argues that even if there is a small chance that a given software system can have subjective experience, which some philosophers suggest is possible, then ethical considerations around potential [large-scale suffering](https://en.wikipedia.org/wiki/Suffering_risks) in AI systems may need to be taken seriously—similar to considerations given to animal welfare. Proponents of this view have proposed various precautionary measures like moratoriums on AI development and induced amnesia to address these ethical concerns. Leonard Dung argues that the evidential frameworks used to assess consciousness in animals apply equally to AI systems and that there is a significant probability near-future AI will be capable of suffering, making AI suffering risk a serious near-term ethical concern that requires systematic mitigation. On the other hand, some existential philosophers argue there is no generally accepted way to determine if an LLM is conscious, given the inherent difficulty of [measuring subjective experience](https://en.wikipedia.org/wiki/Hard_problem_of_consciousness).

The 2022 Google [LaMDA](https://en.wikipedia.org/wiki/LaMDA) incident, where engineer [Blake Lemoine](https://en.wikipedia.org/wiki/Blake_Lemoine) claimed that the model was conscious, highlighted how LLMs can convince users that they are sentient through responses that do not prove sentience. Google described the engineer's claims as unfounded, and he was dismissed. [Murray Shanahan](https://en.wikipedia.org/wiki/Murray_Shanahan) argues that anthropomorphic framing of LLM capabilities encourages unwarranted attribution of cognitive properties to systems that operate through statistical pattern completion. Kristina Šekrst develops this further, arguing that LLMs function as "illusion engines" capable of producing outputs that coherently simulate properties such as consciousness without possessing them, but highlighting that, due to sophisticated creativity-temperature tradeoff, we may never be certain whether we are dealing with the emergence of consciousness or just a [hallucination](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)). [David Chalmers](https://en.wikipedia.org/wiki/David_Chalmers) similarly argues that while current LLMs likely lack features considered necessary for consciousness, extended successors incorporating these elements could plausibly meet the criteria within a decade.

1. ^ [***a***](#cite_ref-few-shot-learners2_1-0) [***b***](#cite_ref-few-shot-learners2_1-1) [***c***](#cite_ref-few-shot-learners2_1-2) Brown, Tom B.; Mann, Benjamin; Ryder, Nick; Subbiah, Melanie; Kaplan, Jared; Dhariwal, Prafulla; Neelakantan, Arvind; Shyam, Pranav; Sastry, Girish; Askell, Amanda; Agarwal, Sandhini; Herbert-Voss, Ariel; Krueger, Gretchen; Henighan, Tom; Child, Rewon; Ramesh, Aditya; Ziegler, Daniel M.; Wu, Jeffrey; Winter, Clemens; Hesse, Christopher; Chen, Mark; Sigler, Eric; Litwin, Mateusz; Gray, Scott; Chess, Benjamin; Clark, Jack; Berner, Christopher; McCandlish, Sam; Radford, Alec; Sutskever, Ilya; Amodei, Dario (Dec 2020). Larochelle, H.; Ranzato, M.; Hadsell, R.; Balcan, M.F.; Lin, H. (eds.). ["Language Models are Few-Shot Learners"](https://proceedings.neurips.cc/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf) (PDF). *Advances in Neural Information Processing Systems*. **33**. Curran Associates, Inc.: 1877–1901. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2005.14165](https://arxiv.org/abs/2005.14165). [Archived](https://web.archive.org/web/20231117204007/https://proceedings.neurips.cc/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf) (PDF) from the original on 2023-11-17. Retrieved 2023-03-14.
2. **[^](#cite_ref-Manning-2022_2-0)** [Manning, Christopher D.](https://en.wikipedia.org/wiki/Christopher_D._Manning) (2022). ["Human Language Understanding & Reasoning"](https://www.amacad.org/publication/human-language-understanding-reasoning). *Daedalus*. **151** (2): 127–138. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1162/daed\_a\_01905](https://doi.org/10.1162%2Fdaed_a_01905). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [248377870](https://api.semanticscholar.org/CorpusID:248377870). [Archived](https://web.archive.org/web/20231117205531/https://www.amacad.org/publication/human-language-understanding-reasoning) from the original on 2023-11-17. Retrieved 2023-03-09.
3. **[^](#cite_ref-3)** Zhao, Wayne Xin (2023). "A Survey of Large Language Models". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2303.18223](https://arxiv.org/abs/2303.18223) [[cs.CL](https://arxiv.org/archive/cs.CL)].
4. ^ [***a***](#cite_ref-AIAYN_4-0) [***b***](#cite_ref-AIAYN_4-1) Vaswani, Ashish; Shazeer, Noam; Parmar, Niki; Uszkoreit, Jakob; Jones, Llion; Gomez, Aidan N; Kaiser, Łukasz; Polosukhin, Illia (2017). "Attention is All you Need". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1706.03762](https://arxiv.org/abs/1706.03762) [[cs.CL](https://arxiv.org/archive/cs.CL)].
5. **[^](#cite_ref-5)** Peng, Bo; et al. (2023). ["RWKV: Reinventing RNNS for the Transformer Era"](https://aclanthology.org/2023.findings-emnlp.936/). *EMNLP*: 14048–14077. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2305.13048](https://arxiv.org/abs/2305.13048). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/2023.findings-emnlp.936](https://doi.org/10.18653%2Fv1%2F2023.findings-emnlp.936).
6. **[^](#cite_ref-6)** Hendrycks, Dan; Burns, Collin; Basart, Steven; Zou, Andy; Mazeika, Mantas; Song, Dawn; Steinhardt, Jacob (2025). "Expressing stigma and inappropriate responses prevents LLMS from safely replacing mental health providers". *Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency*. pp. 599–627. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2009.03300](https://arxiv.org/abs/2009.03300). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3715275.3732039](https://doi.org/10.1145%2F3715275.3732039). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [979-8-4007-1482-5](https://en.wikipedia.org/wiki/Special:BookSources/979-8-4007-1482-5).
7. **[^](#cite_ref-7)** Goodman, Joshua (2001-08-09). "A Bit of Progress in Language Modeling". *Computer Speech & Language*. **15** (4): 403–434. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[cs/0108005](https://arxiv.org/abs/cs/0108005). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1006/csla.2001.0174](https://doi.org/10.1006%2Fcsla.2001.0174).
8. **[^](#cite_ref-8)** Kilgarriff, Adam; Grefenstette, Gregory (September 2003). ["Introduction to the Special Issue on the Web as Corpus"](https://direct.mit.edu/coli/article/29/3/333-347/1816). *Computational Linguistics*. **29** (3): 333–347. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1162/089120103322711569](https://doi.org/10.1162%2F089120103322711569). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0891-2017](https://search.worldcat.org/issn/0891-2017).
9. **[^](#cite_ref-9)** Banko, Michele; Brill, Eric (2001). ["Scaling to very very large corpora for natural language disambiguation"](https://doi.org/10.3115%2F1073012.1073017). *Proceedings of the 39th Annual Meeting on Association for Computational Linguistics - ACL '01*. Morristown, NJ, USA: Association for Computational Linguistics: 26–33. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3115/1073012.1073017](https://doi.org/10.3115%2F1073012.1073017).
10. **[^](#cite_ref-10)** Resnik, Philip; Smith, Noah A. (September 2003). ["The Web as a Parallel Corpus"](https://direct.mit.edu/coli/article/29/3/349-380/1809). *Computational Linguistics*. **29** (3): 349–380. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1162/089120103322711578](https://doi.org/10.1162%2F089120103322711578). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0891-2017](https://search.worldcat.org/issn/0891-2017). [Archived](https://web.archive.org/web/20240607172811/https://direct.mit.edu/coli/article/29/3/349-380/1809) from the original on 2024-06-07. Retrieved 2024-06-07.
11. **[^](#cite_ref-11)** Xu, Wei; Rudnicky, Alex (2000-10-16). ["Can artificial neural networks learn language models?"](https://www.isca-archive.org/icslp_2000/xu00b_icslp.html). *6th International Conference on Spoken Language Processing (ICSLP 2000)*. Vol. 1. ISCA. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.21437/icslp.2000-50](https://doi.org/10.21437%2Ficslp.2000-50).
12. **[^](#cite_ref-12)** Chen, Leiyu; Li, Shaobo; Bai, Qiang; Yang, Jing; Jiang, Sanlong; Miao, Yanming (2021). ["Review of Image Classification Algorithms Based on Convolutional Neural Networks"](https://doi.org/10.3390%2Frs13224712). *Remote Sensing*. **13** (22): 4712. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2021RemS...13.4712C](https://ui.adsabs.harvard.edu/abs/2021RemS...13.4712C). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3390/rs13224712](https://doi.org/10.3390%2Frs13224712).
13. **[^](#cite_ref-13)** Ilya Sutskever; Oriol Vinyals; Quoc V. Le (2014). ["Sequence to sequence learning with neural networks"](https://dl.acm.org/doi/10.5555/2969033.2969173). *Proceedings of the 28th International Conference on Neural Information Processing Systems*. **2**: 3104–3112.`{{cite journal}}`: CS1 maint: multiple names: authors list ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_multiple_names:_authors_list))
14. **[^](#cite_ref-14)** Bahdanau, Dzmitry; Cho, Kyunghyun; Bengio, Yoshua (2014). "Neural Machine Translation by Jointly Learning to Align and Translate". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1409.0473](https://arxiv.org/abs/1409.0473) [[cs.CL](https://arxiv.org/archive/cs.CL)].
15. **[^](#cite_ref-15)** Rogers, Anna; Kovaleva, Olga; Rumshisky, Anna (2020). ["A Primer in BERTology: What We Know About How BERT Works"](https://aclanthology.org/2020.tacl-1.54). *Transactions of the Association for Computational Linguistics*. **8**: 842–866. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2002.12327](https://arxiv.org/abs/2002.12327). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1162/tacl\_a\_00349](https://doi.org/10.1162%2Ftacl_a_00349). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [211532403](https://api.semanticscholar.org/CorpusID:211532403). [Archived](https://web.archive.org/web/20220403103310/https://aclanthology.org/2020.tacl-1.54/) from the original on 2022-04-03. Retrieved 2024-01-21.
16. ^ [***a***](#cite_ref-Movva-2024_16-0) [***b***](#cite_ref-Movva-2024_16-1) Movva, Rajiv; Balachandar, Sidhika; Peng, Kenny; Agostini, Gabriel; Garg, Nikhil; Pierson, Emma (2024). ["Topics, Authors, and Institutions in Large Language Model Research: Trends from 17K arXiv Papers"](https://aclanthology.org/2024.naacl-long.67). *Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)*. pp. 1223–1243. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2307.10700](https://arxiv.org/abs/2307.10700). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/2024.naacl-long.67](https://doi.org/10.18653%2Fv1%2F2024.naacl-long.67). Retrieved 2024-12-08.
17. **[^](#cite_ref-17)** Hern, Alex (14 February 2019). ["New AI fake text generator may be too dangerous to release, say creators"](https://www.theguardian.com/technology/2019/feb/14/elon-musk-backed-ai-writes-convincing-news-fiction). *[The Guardian](https://en.wikipedia.org/wiki/The_Guardian)*. [Archived](https://web.archive.org/web/20190214173112/https://www.theguardian.com/technology/2019/feb/14/elon-musk-backed-ai-writes-convincing-news-fiction) from the original on 14 February 2019. Retrieved 20 January 2024.
18. **[^](#cite_ref-18)** ["ChatGPT a year on: 3 ways the AI chatbot has completely changed the world in 12 months"](https://www.euronews.com/next/2023/11/30/chatgpt-a-year-on-3-ways-the-ai-chatbot-has-completely-changed-the-world-in-12-months). [Euronews](https://en.wikipedia.org/wiki/Euronews). November 30, 2023. [Archived](https://web.archive.org/web/20240114025250/https://www.euronews.com/next/2023/11/30/chatgpt-a-year-on-3-ways-the-ai-chatbot-has-completely-changed-the-world-in-12-months) from the original on January 14, 2024. Retrieved January 20, 2024.
19. **[^](#cite_ref-19)** Heaven, Will (March 14, 2023). ["GPT-4 is bigger and better than ChatGPT—but OpenAI won't say why"](https://www.technologyreview.com/2023/03/14/1069823/gpt-4-is-bigger-and-better-chatgpt-openai/). [MIT Technology Review](https://en.wikipedia.org/wiki/MIT_Technology_Review). [Archived](https://web.archive.org/web/20230317224201/https://www.technologyreview.com/2023/03/14/1069823/gpt-4-is-bigger-and-better-chatgpt-openai/) from the original on March 17, 2023. Retrieved January 20, 2024.
20. **[^](#cite_ref-NYTimesInfo_20-0)** Metz, Cade (September 12, 2024). ["OpenAI Unveils New ChatGPT That Can Reason Through Math and Science"](https://www.nytimes.com/2024/09/12/technology/openai-chatgpt-math.html). *[The New York Times](https://en.wikipedia.org/wiki/The_New_York_Times)*. Retrieved September 12, 2024.
21. **[^](#cite_ref-21)** ["Parameters in notable artificial intelligence systems"](https://ourworldindata.org/grapher/artificial-intelligence-parameter-count?time=2017-09-05..latest). *ourworldindata.org*. November 30, 2023. Retrieved January 20, 2024.
22. **[^](#cite_ref-22)** Sharma, Shubham (2025-01-20). ["Open-source DeepSeek-R1 uses pure reinforcement learning to match OpenAI o1 — at 95% less cost"](https://venturebeat.com/ai/open-source-deepseek-r1-uses-pure-reinforcement-learning-to-match-openai-o1-at-95-less-cost/). *VentureBeat*. Retrieved 2025-01-26.
23. **[^](#cite_ref-23)** Vake, Domen; Šinik, Bogdan; Vičič, Jernej; Tošić, Aleksandar (5 March 2025). ["Is Open Source the Future of AI? A Data-Driven Approach"](https://doi.org/10.3390%2Fapp15052790). *Applied Sciences*. **15** (5): 2790. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3390/app15052790](https://doi.org/10.3390%2Fapp15052790). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2076-3417](https://search.worldcat.org/issn/2076-3417).
24. **[^](#cite_ref-24)** Kaushal, Ayush; Mahowald, Kyle (2022-06-06). ["What do tokens know about their characters and how do they know it?"](https://aclanthology.org/2022.naacl-main.179.pdf) (PDF). *NAACL*.
25. **[^](#cite_ref-25)** Yennie Jun (2023-05-03). ["All languages are NOT created (tokenized) equal"](https://web.archive.org/web/20230817165705/https://blog.yenniejun.com/p/all-languages-are-not-created-tokenized). *Language models cost much more in some languages than others*. Archived from [the original](https://blog.yenniejun.com/p/all-languages-are-not-created-tokenized) on 2023-08-17. Retrieved 2023-08-17. "In other words, to express the same sentiment, some languages require up to 10 times more tokens."
26. ^ [***a***](#cite_ref-2022Book_26-0) [***b***](#cite_ref-2022Book_26-1) Paaß, Gerhard; Giesselbach, Sven (2022). "Pre-trained Language Models". *Foundation Models for Natural Language Processing*. Artificial Intelligence: Foundations, Theory, and Algorithms. pp. 19–78. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-031-23190-2\_2](https://doi.org/10.1007%2F978-3-031-23190-2_2). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-031-23190-2](https://en.wikipedia.org/wiki/Special:BookSources/978-3-031-23190-2).
27. **[^](#cite_ref-aYNg4_27-0)** Dodge, Jesse; Sap, Maarten; Marasović, Ana; Agnew, William; Ilharco, Gabriel; Groeneveld, Dirk; Mitchell, Margaret; Gardner, Matt (2021). ["Documenting Large Webtext Corpora: A Case Study on the Colossal Clean Crawled Corpus"](https://aclanthology.org/2021.emnlp-main.98.pdf) (PDF). *EMNLP*. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2104.08758](https://arxiv.org/abs/2104.08758). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3571730](https://doi.org/10.1145%2F3571730).
28. **[^](#cite_ref-28)** Lee, Katherine; Ippolito, Daphne; Nystrom, Andrew; Zhang, Chiyuan; Eck, Douglas; Callison-Burch, Chris; [Carlini, Nicholas](https://en.wikipedia.org/wiki/Nicholas_Carlini) (May 2022). ["Deduplicating Training Data Makes Language Models Better"](https://aclanthology.org/2022.acl-long.577.pdf) (PDF). *Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*. pp. 8424–8445. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/2022.acl-long.577](https://doi.org/10.18653%2Fv1%2F2022.acl-long.577).
29. **[^](#cite_ref-29)** Lin, Zhenghao; Gou, Zhibin; Gong, Yeyun; Liu, Xiao; Shen, Yelong; Xu, Ruochen; Lin, Chen; Yang, Yujiu; Jiao, Jian (2024-04-11). ["Rho-1: Not All Tokens Are What You Need"](https://dl.acm.org/doi/10.5555/3737916.3738830). *NeurIPS*. **37**: 29029–29063. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [979-8-3313-1438-5](https://en.wikipedia.org/wiki/Special:BookSources/979-8-3313-1438-5).
30. **[^](#cite_ref-30)** Wolfram, Stephen (2023). *What is ChatGPT doing ... and why does it work?*. Champaign, Illinois: Wolfram Media, Inc. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-57955-081-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-57955-081-3).
31. **[^](#cite_ref-31)** Edwards, Benj (2023-05-09). ["AI gains "values" with Anthropic's new Constitutional AI chatbot approach"](https://arstechnica.com/information-technology/2023/05/ai-with-a-moral-compass-anthropic-outlines-constitutional-ai-in-its-claude-chatbot/). *Ars Technica*. Retrieved 2025-06-30.
32. **[^](#cite_ref-32)** Snyder, Alison (2022-01-27). ["Next generation AI can follow a person's instructions and intentions"](https://www.axios.com/2022/01/27/ai-instructions-learning-algorithm). *Axios*. Retrieved 2025-08-07.
33. **[^](#cite_ref-33)** Appen, Sujatha Sagiraju (2023-04-23). ["How reinforcement learning with human feedback is unlocking the power of generative AI"](https://web.archive.org/web/20250725060432/https://venturebeat.com/ai/how-reinforcement-learning-with-human-feedback-is-unlocking-the-power-of-generative-ai/). *VentureBeat*. Archived from [the original](https://venturebeat.com/ai/how-reinforcement-learning-with-human-feedback-is-unlocking-the-power-of-generative-ai/) on 2025-07-25. Retrieved 2025-11-16.
34. **[^](#cite_ref-Jay_Allamar_34-0)** Allamar, Jay. ["Illustrated transformer"](https://jalammar.github.io/illustrated-transformer/). [Archived](https://web.archive.org/web/20230725230033/http://jalammar.github.io/illustrated-transformer/) from the original on 2023-07-25. Retrieved 2023-07-29.
35. **[^](#cite_ref-Jay_Allamar_GPT2_35-0)** Allamar, Jay. ["The Illustrated GPT-2 (Visualizing Transformer Language Models)"](https://jalammar.github.io/illustrated-gpt2/). Retrieved 2023-08-01.
36. ^ [***a***](#cite_ref-jm_36-0) [***b***](#cite_ref-jm_36-1) Jurafsky, Dan; Martin, James H. (7 January 2023). [*Speech and Language Processing*](https://web.stanford.edu/~jurafsky/slp3/ed3book_jan72023.pdf) (PDF) (3rd edition draft ed.). [Archived](https://web.archive.org/web/20230323210221/https://web.stanford.edu/~jurafsky/slp3/ed3book_jan72023.pdf) (PDF) from the original on 23 March 2023. Retrieved 24 May 2022.
37. **[^](#cite_ref-ioUpE_37-0)** Zaib, Munazza; Sheng, Quan Z.; Zhang, Wei Emma (4 February 2020). "A Short Survey of Pre-trained Language Models for Conversational AI-A New Age in NLP". [*Proceedings of the Australasian Computer Science Week Multiconference*](https://www.researchgate.net/publication/338931711). pp. 1–4. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2104.10810](https://arxiv.org/abs/2104.10810). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3373017.3373028](https://doi.org/10.1145%2F3373017.3373028). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-7697-6](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-7697-6). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [211040895](https://api.semanticscholar.org/CorpusID:211040895).
38. **[^](#cite_ref-HGZCJ_38-0)** Shazeer, Noam; Mirhoseini, Azalia; Maziarz, Krzysztof; Davis, Andy; Le, Quoc; Hinton, Geoffrey; Dean, Jeff (2025). "Perceptions of Sentient AI and Other Digital Minds: Evidence from the AI, Morality, and Sentience (AIMS) Survey". *Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems*. pp. 1–22. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1701.06538](https://arxiv.org/abs/1701.06538). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3706598.3713329](https://doi.org/10.1145%2F3706598.3713329). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [979-8-4007-1394-1](https://en.wikipedia.org/wiki/Special:BookSources/979-8-4007-1394-1).
39. **[^](#cite_ref-39)** Mann, Tobias. ["How to run an LLM locally on your PC in less than 10 minutes"](https://www.theregister.com/2024/03/17/ai_pc_local_llm/). *theregister.com*. Retrieved 2024-05-17.
40. **[^](#cite_ref-LS2Go_40-0)** Nagel, Markus; Amjad, Rana Ali; Baalen, Mart Van; Louizos, Christos; Blankevoort, Tijmen (2020-11-21). ["Up or Down? Adaptive Rounding for Post-Training Quantization"](https://proceedings.mlr.press/v119/nagel20a.html). *Proceedings of the 37th International Conference on Machine Learning*. PMLR: 7197–7206. [Archived](https://web.archive.org/web/20230614080854/https://proceedings.mlr.press/v119/nagel20a.html) from the original on 2023-06-14. Retrieved 2023-06-14.
41. **[^](#cite_ref-self-instruct-paper_41-0)** Wang, Yizhong; Kordi, Yeganeh; Mishra, Swaroop; Liu, Alisa; Smith, Noah A.; Khashabi, Daniel; [Hajishirzi, Hannaneh](https://en.wikipedia.org/wiki/Hanna_Hajishirzi) (2023). ["Self-Instruct: Aligning Language Models with Self-Generated Instructions"](https://aclanthology.org/2023.acl-long.754/). *Self-Instruct: Aligning Language Model with Self Generated Instructions*. pp. 13484–13508. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/2023.acl-long.754](https://doi.org/10.18653%2Fv1%2F2023.acl-long.754).
42. **[^](#cite_ref-BUZBP_42-0)** Lewis, Patrick; Perez, Ethan; Piktus, Aleksandra; Petroni, Fabio; Karpukhin, Vladimir; Goyal, Naman; Küttler, Heinrich; Lewis, Mike; Yih, Wen-tau; Rocktäschel, Tim; Riedel, Sebastian; Kiela, Douwe (2020). ["Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"](https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html). *Advances in Neural Information Processing Systems*. **33**. Curran Associates, Inc.: 9459–9474. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2005.11401](https://arxiv.org/abs/2005.11401). [Archived](https://web.archive.org/web/20230612171229/https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html) from the original on 2023-06-12. Retrieved 2023-06-12.
43. **[^](#cite_ref-43)** Dickson, Ben (2025-04-02). ["The tool integration problem that's holding back enterprise AI (and how CoTools solves it)"](https://venturebeat.com/ai/the-tool-integration-problem-thats-holding-back-enterprise-ai-and-how-cotools-solves-it/). *VentureBeat*. Retrieved 2025-05-26.
44. **[^](#cite_ref-lLrda_44-0)** Liang, Yaobo; Wu, Chenfei; Song, Ting; Wu, Wenshan; Xia, Yan; Liu, Yu; Ou, Yang; Lu, Shuai; Ji, Lei; Mao, Shaoguang; Wang, Yun; Shou, Linjun; Gong, Ming; Duan, Nan (2024). ["TaskMatrix.AI: Completing Tasks by Connecting Foundation Models with Millions of APIs"](https://doi.org/10.34133%2Ficomputing.0063). *Science*. **3** 0063. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.34133/icomputing.0063](https://doi.org/10.34133%2Ficomputing.0063).
45. **[^](#cite_ref-4Xzrs_45-0)** Patil, Shishir G.; Zhang, Tianjun; Wang, Xin; Gonzalez, Joseph E. (2023-05-01). ["Gorilla: Large Language Model Connected with Massive APIs"](https://proceedings.neurips.cc/paper_files/paper/2024/hash/e4c61f578ff07830f5c37378dd3ecb0d-Abstract-Conference.html). *NeurIPS*. **37**: 126544–126565.
46. **[^](#cite_ref-46)** Wang, Lei; Ma, Chen; Feng, Xueyang; Zhang, Zeyu; Yang, Hao; Zhang, Jingsen; Chen, Zhiyuan; Tang, Jiakai; Chen, Xu; Lin, Yankai; Zhao, Wayne Xin; Wei, Zhewei; Wen, Jirong (December 2024). "A survey on large language model based autonomous agents". *Frontiers of Computer Science*. **18** (6) 186345. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2308.11432](https://arxiv.org/abs/2308.11432). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s11704-024-40231-1](https://doi.org/10.1007%2Fs11704-024-40231-1).
47. **[^](#cite_ref-47)** Wang, Zihao; Cai, Shaofei; Liu, Anji; Ma, Xiaojian; Liang, Yitao (2023-02-03). ["Describe, Explain, Plan and Select: Interactive Planning with Large Language Models Enables Open-World Multi-Task Agents"](https://dl.acm.org/doi/10.5555/3666122.3667602). *NeurIPS*: 34153–34189.
48. **[^](#cite_ref-sbB2T_48-0)** Shinn, Noah; Cassano, Federico; Labash, Beck; Gopinath, Ashwin; Narasimhan, Karthik; Yao, Shunyu (2023-03-01). ["Reflexion: Language Agents with Verbal Reinforcement Learning"](https://dl.acm.org/doi/10.5555/3666122.3667602). *NeurIPS*: 34153–34189.
49. **[^](#cite_ref-ltTer_49-0)** Hao, Shibo; Gu, Yi; Ma, Haodi; Jiahua Hong, Joshua; Wang, Zhen; Zhe Wang, Daisy; Hu, Zhiting (2023-05-01). ["Reasoning with Language Model is Planning with World Model"](https://aclanthology.org/2023.emnlp-main.507/). *EMNLP*: 8154–8173. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/2023.emnlp-main.507](https://doi.org/10.18653%2Fv1%2F2023.emnlp-main.507).
50. **[^](#cite_ref-XuvjF_50-0)** Park, Joon Sung; O'Brien, Joseph C.; Cai, Carrie J.; Ringel Morris, Meredith; [Liang, Percy](https://en.wikipedia.org/wiki/Percy_Liang); Bernstein, Michael S. (2023-04-01). *Generative Agents: Interactive Simulacra of Human Behavior*. UIST. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3586183.3606763](https://doi.org/10.1145%2F3586183.3606763).
51. **[^](#cite_ref-51)** Wu, Tongshuang; et al. (2022-04-28). ["PromptChainer: Chaining Large Language Model Prompts through Visual Programming"](https://doi.org/10.1145/3491101.3519729). *CHI Conference on Human Factors in Computing Systems Extended Abstracts*. Association for Computing Machinery. pp. 1–10. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3491101.3519729](https://doi.org/10.1145%2F3491101.3519729). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-9156-6](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-9156-6).
52. **[^](#cite_ref-52)** Wu, Tongshuang; Jiang, Ellen; Donsbach, Aaron; Gray, Jeff; Molina, Alejandra; Terry, Michael; Cai, Carrie J. (2022-03-13). [*PromptChainer: Chaining Large Language Model Prompts through Visual Programming*](https://dl.acm.org/doi/10.1145/3491101.3519729). CHI Conference on Human Factors in Computing Systems. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2203.06566](https://arxiv.org/abs/2203.06566). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3491101.3519729](https://doi.org/10.1145%2F3491101.3519729).
53. **[^](#cite_ref-53)** ["What is prompt chaining?"](https://www.ibm.com/think/topics/prompt-chaining). *IBM*. 23 April 2024.
54. **[^](#cite_ref-54)** Wei, Jason; Wang, Xuezhi; Schuurmans, Dale; Bosma, Maarten; Ichter, Brian; Xia, Fei; Chi, Ed; Le, Quoc; Zhou, Denny (2023-01-10). ["Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://dl.acm.org/doi/10.5555/3600270.3602070). *NeurIPS*: 24824–24837. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-7138-7108-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-7138-7108-8).
55. **[^](#cite_ref-55)** ["What is chain of thought (CoT) prompting?"](https://www.ibm.com/think/topics/chain-of-thoughts). *IBM*. 23 April 2025.
56. **[^](#cite_ref-56)** Schreiner, Maximilian (2022-09-27). ["Deeper insights into AI language models - chain of thought prompting as a success factor"](https://the-decoder.com/deeper-insights-for-ai-language-models-chain-of-thought-prompting-as-a-key-factor/). *The Decoder*. Retrieved 2025-06-30.
57. **[^](#cite_ref-57)** Wiggers, Kyle (2024-12-14). ["'Reasoning' AI models have become a trend, for better or worse"](https://techcrunch.com/2024/12/14/reasoning-ai-models-have-become-a-trend-for-better-or-worse/). *TechCrunch*. Retrieved 2025-11-16.
58. **[^](#cite_ref-58)** ["AI Developers Look Beyond Chain-of-Thought Prompting"](https://spectrum.ieee.org/chain-of-thought-prompting). *IEEE Spectrum*. 2025-05-08. Retrieved 2025-11-16.
59. ^ [***a***](#cite_ref-nyt-o3_59-0) [***b***](#cite_ref-nyt-o3_59-1) Metz, Cade (2024-12-20). ["OpenAI Unveils New A.I. That Can 'Reason' Through Math and Science Problems"](https://www.nytimes.com/2024/12/20/technology/openai-new-ai-math-science.html). *The New York Times*. Retrieved 2025-02-03.
60. **[^](#cite_ref-nature-deepseek_60-0)** Gibney, Elizabeth (2025-01-30). ["China's cheap, open AI model DeepSeek thrills scientists"](https://www.nature.com/articles/d41586-025-00229-6). *Nature*. **638** (8049): 13–14. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/d41586-025-00229-6](https://doi.org/10.1038%2Fd41586-025-00229-6). Retrieved 2025-02-03.
61. **[^](#cite_ref-61)** Kiros, Ryan; Salakhutdinov, Ruslan; Zemel, Rich (2014-06-18). ["Multimodal Neural Language Models"](https://proceedings.mlr.press/v32/kiros14.html). *Proceedings of the 31st International Conference on Machine Learning*. PMLR: 595–603. [Archived](https://web.archive.org/web/20230702195952/https://proceedings.mlr.press/v32/kiros14.html) from the original on 2023-07-02. Retrieved 2023-07-02.
62. **[^](#cite_ref-62)** Driess, Danny; Xia, Fei; Sajjadi, Mehdi S. M.; Lynch, Corey; Chowdhery, Aakanksha; Ichter, Brian; Wahid, Ayzaan; Tompson, Jonathan; Vuong, Quan; Yu, Tianhe; Huang, Wenlong; Chebotar, Yevgen; Sermanet, Pierre; Duckworth, Daniel; [Levine, Sergey](https://en.wikipedia.org/wiki/Sergey_Levine) (2023-03-01). ["PaLM-E: An Embodied Multimodal Language Model"](https://dl.acm.org/doi/10.5555/3618408.3618748). *ICML*. **202**: 8469–8488.
63. **[^](#cite_ref-63)** Liu, Haotian; Li, Chunyuan; Wu, Qingyang; Lee, Yong Jae (2023-04-01). "Visual Instruction Tuning". *NeurIPS*.
64. **[^](#cite_ref-64)** Zhang, Hang; Li, Xin; Bing, Lidong (2023-06-01). "Video-LLaMA: An Instruction-tuned Audio-Visual Language Model for Video Understanding". *EMNLP*. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2306.02858](https://arxiv.org/abs/2306.02858).
65. **[^](#cite_ref-65)** ["OpenAI says natively multimodal GPT-4o eats text, visuals, sound – and emits the same"](https://www.theregister.com/2024/05/13/openai_gpt4o/). *The Register*. 2024-05-13.
66. **[^](#cite_ref-66)** Li, Junnan; Li, Dongxu; Savarese, Silvio; Hoi, Steven (2023-01-01). ["BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models"](https://dl.acm.org/doi/10.5555/3618408.3619222). *ICML*. **202**: 19730–19742.
67. **[^](#cite_ref-67)** Kumar, Puneet; Khokher, Vedanti; Gupta, Yukti; Raman, Balasubramanian (2021). *Hybrid Fusion Based Approach for Multimodal Emotion Recognition with Insufficient Labeled Data*. pp. 314–318. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/ICIP42928.2021.9506714](https://doi.org/10.1109%2FICIP42928.2021.9506714). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-6654-4115-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-6654-4115-5).
68. **[^](#cite_ref-68)** Alayrac, Jean-Baptiste; Donahue, Jeff; Luc, Pauline; Miech, Antoine; Barr, Iain; Hasson, Yana; Lenc, Karel; Mensch, Arthur; Millican, Katherine; Reynolds, Malcolm; Ring, Roman; Rutherford, Eliza; Cabi, Serkan; Han, Tengda; Gong, Zhitao (2022-12-06). ["Flamingo: a Visual Language Model for Few-Shot Learning"](https://proceedings.neurips.cc/paper_files/paper/2022/hash/960a172bc7fbf0177ccccbb411a7d800-Abstract-Conference.html). *Advances in Neural Information Processing Systems*. **35** (12): 23716–23736. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2204.14198](https://arxiv.org/abs/2204.14198). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/nsr/nwae403](https://doi.org/10.1093%2Fnsr%2Fnwae403). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [11645129](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11645129). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [39679213](https://pubmed.ncbi.nlm.nih.gov/39679213). [Archived](https://web.archive.org/web/20230702195951/https://proceedings.neurips.cc/paper_files/paper/2022/hash/960a172bc7fbf0177ccccbb411a7d800-Abstract-Conference.html) from the original on 2023-07-02. Retrieved 2023-07-02.
69. **[^](#cite_ref-69)** Finnie-Ansley, James; Denny, Paul; Becker, Brett A.; Luxton-Reilly, Andrew; Prather, James (14 February 2022). "The Robots Are Coming: Exploring the Implications of OpenAI Codex on Introductory Programming". *Proceedings of the 24th Australasian Computing Education Conference*. New York, NY, USA: Association for Computing Machinery. pp. 10–19. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3511861.3511863](https://doi.org/10.1145%2F3511861.3511863). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-9643-1](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-9643-1). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [246681316](https://api.semanticscholar.org/CorpusID:246681316).
70. **[^](#cite_ref-70)** Husein, Rasha Ahmad; Aburajouh, Hala; Catal, Cagatay (March 2025). "Large language models for code completion: A systematic literature review". *Computer Standards & Interfaces*. **92** 103917. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.csi.2024.103917](https://doi.org/10.1016%2Fj.csi.2024.103917).
71. **[^](#cite_ref-71)** Weissenow, Konstantin; Rost, Burkhard (April 2025). ["Are protein language models the new universal key?"](https://doi.org/10.1016%2Fj.sbi.2025.102997). *Current Opinion in Structural Biology*. **91** 102997. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.sbi.2025.102997](https://doi.org/10.1016%2Fj.sbi.2025.102997). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [39921962](https://pubmed.ncbi.nlm.nih.gov/39921962).
72. **[^](#cite_ref-72)** Lin, Zeming; Akin, Halil; Rao, Roshan; Hie, Brian; Zhu, Zhongkai; Lu, Wenting; Smetanin, Nikita; Verkuil, Robert; Kabeli, Ori; Shmueli, Yaniv; dos Santos Costa, Allan; Fazel-Zarandi, Maryam; Sercu, Tom; Candido, Salvatore; Rives, Alexander (17 March 2023). ["Evolutionary-scale prediction of atomic-level protein structure with a language model"](https://doi.org/10.1126%2Fscience.ade2574). *Science*. **379** (6637): 1123–1130. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2023Sci...379.1123L](https://ui.adsabs.harvard.edu/abs/2023Sci...379.1123L). [bioRxiv](https://en.wikipedia.org/wiki/BioRxiv_(identifier)) [10.1101/2022.07.20.500902](https://doi.org/10.1101%2F2022.07.20.500902). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1126/science.ade2574](https://doi.org/10.1126%2Fscience.ade2574). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [36927031](https://pubmed.ncbi.nlm.nih.gov/36927031).
73. **[^](#cite_ref-73)** ["ESM Metagenomic Atlas | Meta AI"](https://esmatlas.com/about). *esmatlas.com*.
74. **[^](#cite_ref-74)** Hayes, Thomas; Rao, Roshan; Akin, Halil; Sofroniew, Nicholas J.; Oktay, Deniz; Lin, Zeming; Verkuil, Robert; Tran, Vincent Q.; Deaton, Jonathan; Wiggert, Marius; Badkundri, Rohil; Shafkat, Irhum; Gong, Jun; Derry, Alexander; Molina, Raul S.; Thomas, Neil; Khan, Yousuf A.; Mishra, Chetan; Kim, Carolyn; Bartie, Liam J.; Nemeth, Matthew; Hsu, Patrick D.; Sercu, Tom; Candido, Salvatore; Rives, Alexander (21 February 2025). "Simulating 500 million years of evolution with a language model". *Science*. **387** (6736): 850–858. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2025Sci...387..850H](https://ui.adsabs.harvard.edu/abs/2025Sci...387..850H). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1126/science.ads0018](https://doi.org/10.1126%2Fscience.ads0018). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [39818825](https://pubmed.ncbi.nlm.nih.gov/39818825).
75. **[^](#cite_ref-75)** Fishman, Veniamin; Kuratov, Yuri; Shmelev, Aleksei; Petrov, Maxim; Penzar, Dmitry; Shepelin, Denis; Chekanov, Nikolay; Kardymon, Olga; Burtsev, Mikhail (11 January 2025). ["GENA-LM: a family of open-source foundational DNA language models for long sequences"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11734698). *Nucleic Acids Research*. **53** (2) gkae1310. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/nar/gkae1310](https://doi.org/10.1093%2Fnar%2Fgkae1310). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [11734698](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11734698). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [39817513](https://pubmed.ncbi.nlm.nih.gov/39817513).
76. **[^](#cite_ref-76)** Wang, Ning; Bian, Jiang; Li, Yuchen; Li, Xuhong; Mumtaz, Shahid; Kong, Linghe; Xiong, Haoyi (13 May 2024). ["Multi-purpose RNA language modelling with motif-aware pretraining and type-guided fine-tuning"](https://doi.org/10.1038%2Fs42256-024-00836-4). *Nature Machine Intelligence*. **6** (5): 548–557. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s42256-024-00836-4](https://doi.org/10.1038%2Fs42256-024-00836-4).
77. **[^](#cite_ref-fJta3_77-0)** Hoffmann, Jordan; Borgeaud, Sebastian; Mensch, Arthur; Buchatskaya, Elena; Cai, Trevor; Rutherford, Eliza; Casas, Diego de Las; Hendricks, Lisa Anne; Welbl, Johannes; Clark, Aidan; Hennigan, Tom; Noland, Eric; Millican, Katie; Driessche, George van den; Damoc, Bogdan (2022-03-29). ["Training Compute-Optimal Large Language Models"](https://dl.acm.org/doi/10.5555/3600270.3602446). *NeurIPS*: 30016–30030. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-7138-7108-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-7138-7108-8).
78. ^ [***a***](#cite_ref-IYm4Q_78-0) [***b***](#cite_ref-IYm4Q_78-1) Caballero, Ethan; Gupta, Kshitij; Rish, Irina; Krueger, David (2022). "Broken Neural Scaling Laws". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2210.14891](https://arxiv.org/abs/2210.14891) [[cs.LG](https://arxiv.org/archive/cs.LG)].
79. ^ [***a***](#cite_ref-emergentpaper_79-0) [***b***](#cite_ref-emergentpaper_79-1) Wei, Jason; Tay, Yi; Bommasani, Rishi; Raffel, Colin; Zoph, Barret; Borgeaud, Sebastian; Yogatama, Dani; Bosma, Maarten; Zhou, Denny; Metzler, Donald; Chi, Ed H.; Hashimoto, Tatsunori; Vinyals, Oriol; Liang, Percy; Dean, Jeff; Fedus, William (31 August 2022). ["Emergent Abilities of Large Language Models"](https://openreview.net/forum?id=yzkSU5zdwD). *Transactions on Machine Learning Research*. [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2835-8856](https://search.worldcat.org/issn/2835-8856). [Archived](https://web.archive.org/web/20230322210052/https://openreview.net/forum?id=yzkSU5zdwD) from the original on 22 March 2023. Retrieved 19 March 2023.
80. **[^](#cite_ref-Bowman_80-0)** Bowman, Samuel R. (2024). ["Eight Things to Know about Large Language Models"](https://read.dukeupress.edu/critical-ai/article/doi/10.1215/2834703X-11556011/400182/Eight-Things-to-Know-about-Large-Language-Models). *Critical AI*. **2** (2). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1215/2834703X-11556011](https://doi.org/10.1215%2F2834703X-11556011).
81. **[^](#cite_ref-Hahn_20230314_81-0)** Hahn, Michael; Goyal, Navin (2024). "A survey on large language model based autonomous agents". *Frontiers of Computer Science*. **18** (6) 186345. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2303.07971](https://arxiv.org/abs/2303.07971). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s11704-024-40231-1](https://doi.org/10.1007%2Fs11704-024-40231-1).
82. **[^](#cite_ref-57FEA_82-0)** Pilehvar, Mohammad Taher; Camacho-Collados, Jose (June 2019). ["Proceedings of the 2019 Conference of the North"](https://aclanthology.org/N19-1128). *Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers)*. Minneapolis, Minnesota: Association for Computational Linguistics: 1267–1273. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/N19-1128](https://doi.org/10.18653%2Fv1%2FN19-1128). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [102353817](https://api.semanticscholar.org/CorpusID:102353817). [Archived](https://web.archive.org/web/20230627202732/https://aclanthology.org/N19-1128/) from the original on 2023-06-27. Retrieved 2023-06-27.
83. **[^](#cite_ref-zgy1i_83-0)** Patel, Roma; Pavlick, Ellie (2021-10-06). ["Mapping Language Models to Grounded Conceptual Spaces"](https://openreview.net/forum?id=gJcEM8sxHK). *ICLR*. [Archived](https://web.archive.org/web/20230624191940/https://openreview.net/forum?id=gJcEM8sxHK) from the original on 2023-06-24. Retrieved 2023-06-27.
84. **[^](#cite_ref-Imb98_84-0)** *[A Closer Look at Large Language Models Emergent Abilities](https://www.notion.so/A-Closer-Look-at-Large-Language-Models-Emergent-Abilities-493876b55df5479d80686f68a1abd72f) [Archived](https://web.archive.org/web/20230624012329/https://www.notion.so/A-Closer-Look-at-Large-Language-Models-Emergent-Abilities-493876b55df5479d80686f68a1abd72f) 2023-06-24 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)* (Yao Fu, Nov 20, 2022)
85. **[^](#cite_ref-CeQVF_85-0)** Ornes, Stephen (March 16, 2023). ["The Unpredictable Abilities Emerging From Large AI Models"](https://www.quantamagazine.org/the-unpredictable-abilities-emerging-from-large-ai-models-20230316/). *Quanta Magazine*. [Archived](https://web.archive.org/web/20230316203438/https://www.quantamagazine.org/the-unpredictable-abilities-emerging-from-large-ai-models-20230316/) from the original on March 16, 2023. Retrieved March 16, 2023.
86. **[^](#cite_ref-C775b_86-0)** Schaeffer, Rylan; Miranda, Brando; Koyejo, Sanmi (2023-04-01). "Are Emergent Abilities of Large Language Models a Mirage?". *NeurIPS*. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2304.15004](https://arxiv.org/abs/2304.15004).
87. **[^](#cite_ref-oYGlo_87-0)** Nanda, Neel; Chan, Lawrence; Lieberum, Tom; Smith, Jess; Steinhardt, Jacob (2023-01-01). "Progress measures for grokking via mechanistic interpretability". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2301.05217](https://arxiv.org/abs/2301.05217) [[cs.LG](https://arxiv.org/archive/cs.LG)].
88. **[^](#cite_ref-88)** Ananthaswamy, Anil (2024-04-12). ["How Do Machines 'Grok' Data?"](https://www.quantamagazine.org/how-do-machines-grok-data-20240412/). *[Quanta Magazine](https://en.wikipedia.org/wiki/Quanta_Magazine)*. Retrieved 2025-06-30.
89. ^ [***a***](#cite_ref-debate_understanding_89-0) [***b***](#cite_ref-debate_understanding_89-1) [***c***](#cite_ref-debate_understanding_89-2) [***d***](#cite_ref-debate_understanding_89-3) [***e***](#cite_ref-debate_understanding_89-4) Mitchell, Melanie; Krakauer, David C. (28 March 2023). ["The debate over understanding in AI's large language models"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10068812). *Proceedings of the National Academy of Sciences*. **120** (13) e2215907120. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2210.13966](https://arxiv.org/abs/2210.13966). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2023PNAS..12015907M](https://ui.adsabs.harvard.edu/abs/2023PNAS..12015907M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1073/pnas.2215907120](https://doi.org/10.1073%2Fpnas.2215907120). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [10068812](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10068812). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [36943882](https://pubmed.ncbi.nlm.nih.gov/36943882).
90. **[^](#cite_ref-O8Upd_90-0)** Metz, Cade (16 May 2023). ["Microsoft Says New A.I. Shows Signs of Human Reasoning"](https://www.nytimes.com/2023/05/16/technology/microsoft-ai-human-reasoning.html). *The New York Times*.
91. ^ [***a***](#cite_ref-microsoft_sparks_91-0) [***b***](#cite_ref-microsoft_sparks_91-1) Bubeck, Sébastien; Chandrasekaran, Varun; Eldan, Ronen; Gehrke, Johannes; Horvitz, Eric; Kamar, Ece; Lee, Peter; Lee, Yin Tat; Li, Yuanzhi; Lundberg, Scott; Nori, Harsha; Palangi, Hamid; Ribeiro, Marco Tulio; Zhang, Yi (2023). "Machine culture". *Nature Human Behaviour*. **7** (11): 1855–1868. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2303.12712](https://arxiv.org/abs/2303.12712). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41562-023-01742-2](https://doi.org/10.1038%2Fs41562-023-01742-2). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [37985914](https://pubmed.ncbi.nlm.nih.gov/37985914).
92. **[^](#cite_ref-92)** ["Anthropic CEO Dario Amodei pens a smart look at our AI future"](https://www.fastcompany.com/91211163/anthropic-ceo-dario-amodei-pens-a-smart-look-at-our-ai-future). *Fast Company*. October 17, 2024.
93. **[^](#cite_ref-rEEmH_93-0)** ["ChatGPT is more like an 'alien intelligence' than a human brain, says futurist"](https://www.zdnet.com/article/chatgpt-is-more-like-an-alien-intelligence-than-a-human-brain-says-futurist/). *ZDNET*. 2023. [Archived](https://web.archive.org/web/20230612065937/https://www.zdnet.com/article/chatgpt-is-more-like-an-alien-intelligence-than-a-human-brain-says-futurist/) from the original on 12 June 2023. Retrieved 12 June 2023.
94. ^ [***a***](#cite_ref-new_yorker_kind_of_mind_94-0) [***b***](#cite_ref-new_yorker_kind_of_mind_94-1) Newport, Cal (13 April 2023). ["What Kind of Mind Does ChatGPT Have?"](https://www.newyorker.com/science/annals-of-artificial-intelligence/what-kind-of-mind-does-chatgpt-have). *The New Yorker*. [Archived](https://web.archive.org/web/20230612071443/https://www.newyorker.com/science/annals-of-artificial-intelligence/what-kind-of-mind-does-chatgpt-have) from the original on 12 June 2023. Retrieved 12 June 2023.
95. **[^](#cite_ref-rAFIZ_95-0)** Roose, Kevin (30 May 2023). ["Why an Octopus-like Creature Has Come to Symbolize the State of A.I."](https://www.nytimes.com/2023/05/30/technology/shoggoth-meme-ai.html) *The New York Times*. [Archived](https://web.archive.org/web/20230530193814/https://www.nytimes.com/2023/05/30/technology/shoggoth-meme-ai.html) from the original on 30 May 2023. Retrieved 12 June 2023.
96. **[^](#cite_ref-4luKE_96-0)** ["The A to Z of Artificial Intelligence"](https://time.com/6271657/a-to-z-of-artificial-intelligence/). *Time Magazine*. 13 April 2023. [Archived](https://web.archive.org/web/20230616123839/https://time.com/6271657/a-to-z-of-artificial-intelligence/) from the original on 16 June 2023. Retrieved 12 June 2023.
97. ^ [***a***](#cite_ref-Sekrst-2025_97-0) [***b***](#cite_ref-Sekrst-2025_97-1) [***c***](#cite_ref-Sekrst-2025_97-2) Sekrst, Kristina (2025). *The Illusion Engine: The Quest for Machine Consciousness*. Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-032-05561-3](https://en.wikipedia.org/wiki/Special:BookSources/978-3-032-05561-3).
98. ^ [***a***](#cite_ref-Bender-2021_98-0) [***b***](#cite_ref-Bender-2021_98-1) [***c***](#cite_ref-Bender-2021_98-2) Bender, Emily M.; Gebru, Timnit; McMillan-Major, Angelina; Shmitchell, Shmargaret (2021). "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜". *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)*. Association for Computing Machinery. pp. 610–623. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3442188.3445922](https://doi.org/10.1145%2F3442188.3445922).
99. **[^](#cite_ref-hallucination-survey_99-0)** Ji, Ziwei; Lee, Nayeon; Frieske, Rita; Yu, Tiezheng; Su, Dan; Xu, Yan; Ishii, Etsuko; Bang, Yejin; Dai, Wenliang; Madotto, Andrea; Fung, Pascale (November 2022). ["Survey of Hallucination in Natural Language Generation"](https://dl.acm.org/doi/pdf/10.1145/3571730) (pdf). *ACM Computing Surveys*. **55** (12). [Association for Computing Machinery](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery): 1–38. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2202.03629](https://arxiv.org/abs/2202.03629). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3571730](https://doi.org/10.1145%2F3571730). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [246652372](https://api.semanticscholar.org/CorpusID:246652372). [Archived](https://web.archive.org/web/20230326145635/https://dl.acm.org/doi/pdf/10.1145/3571730) from the original on 26 March 2023. Retrieved 15 January 2023.
100. **[^](#cite_ref-100)** Varshney, Neeraj; Yao, Wenlin; Zhang, Hongming; Chen, Jianshu; Yu, Dong (2023). "A Stitch in Time Saves Nine: Detecting and Mitigating Hallucinations of LLMs by Validating Low-Confidence Generation". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2307.03987](https://arxiv.org/abs/2307.03987) [[cs.CL](https://arxiv.org/archive/cs.CL)].
101. **[^](#cite_ref-Lin-2025-02-05-WSJ_101-0)** Lin, Belle (2025-02-05). ["Why Amazon is Betting on 'Automated Reasoning' to Reduce AI's Hallucinations: The tech giant says an obscure field that combines AI and math can mitigate—but not completely eliminate—AI's propensity to provide wrong answers"](https://www.wsj.com/articles/why-amazon-is-betting-on-automated-reasoning-to-reduce-ais-hallucinations-b838849e). *Wall Street Journal*. [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0099-9660](https://search.worldcat.org/issn/0099-9660).
102. **[^](#cite_ref-102)** Lakoff, George (1999). *Philosophy in the Flesh: The Embodied Mind and Its Challenge to Western Philosophy; Appendix: The Neural Theory of Language Paradigm*. New York Basic Books. pp. 569–583. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-465-05674-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-465-05674-3).
103. **[^](#cite_ref-103)** Evans, Vyvyan. (2014). *The Language Myth*. Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-107-04396-1](https://en.wikipedia.org/wiki/Special:BookSources/978-1-107-04396-1).
104. **[^](#cite_ref-104)** Friston, Karl J. (2022). *Active Inference: The Free Energy Principle in Mind, Brain, and Behavior; Chapter 4 The Generative Models of Active Inference*. The MIT Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-36997-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-36997-8).
105. **[^](#cite_ref-few-shot-learners3_105-0)** Brown, Tom B.; Mann, Benjamin; Ryder, Nick; Subbiah, Melanie; Kaplan, Jared; Dhariwal, Prafulla; Neelakantan, Arvind; Shyam, Pranav; Sastry, Girish; Askell, Amanda; Agarwal, Sandhini; Herbert-Voss, Ariel; Krueger, Gretchen; Henighan, Tom; Child, Rewon; Ramesh, Aditya; Ziegler, Daniel M.; Wu, Jeffrey; Winter, Clemens; Hesse, Christopher; Chen, Mark; Sigler, Eric; Litwin, Mateusz; Gray, Scott; Chess, Benjamin; Clark, Jack; Berner, Christopher; McCandlish, Sam; Radford, Alec; Sutskever, Ilya; Amodei, Dario (Dec 2020). Larochelle, H.; Ranzato, M.; Hadsell, R.; Balcan, M.F.; Lin, H. (eds.). ["Language Models are Few-Shot Learners"](https://proceedings.neurips.cc/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf) (PDF). *Advances in Neural Information Processing Systems*. **33**. Curran Associates, Inc.: 1877–1901. [Archived](https://web.archive.org/web/20231117204007/https://proceedings.neurips.cc/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf) (PDF) from the original on 2023-11-17. Retrieved 2023-03-14.
106. **[^](#cite_ref-106)** Shannon, Claude E. (1948). "A Mathematical Theory of Communication". *[Bell System Technical Journal](https://en.wikipedia.org/wiki/Bell_System_Technical_Journal)*. **27** (3): 379–423. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1948BSTJ...27..379S](https://ui.adsabs.harvard.edu/abs/1948BSTJ...27..379S). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/j.1538-7305.1948.tb01338.x](https://doi.org/10.1002%2Fj.1538-7305.1948.tb01338.x).
107. **[^](#cite_ref-107)** Edwards, Benj (2023-09-28). ["AI language models can exceed PNG and FLAC in lossless compression, says study"](https://arstechnica.com/information-technology/2023/09/ai-language-models-can-exceed-png-and-flac-in-lossless-compression-says-study/). *Ars Technica*. Retrieved 2025-05-29.
108. **[^](#cite_ref-108)** Nangia, Nikita; Vania, Clara; Bhalerao, Rasika; Bowman, Samuel R. (November 2020). ["CrowS-Pairs: A Challenge Dataset for Measuring Social Biases in Masked Language Models"](https://aclanthology.org/2020.emnlp-main.154/). In Webber, Bonnie; Cohn, Trevor; He, Yulan; Liu, Yang (eds.). *Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)*. Association for Computational Linguistics. pp. 1953–1967. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2010.00133](https://arxiv.org/abs/2010.00133). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/2020.emnlp-main.154](https://doi.org/10.18653%2Fv1%2F2020.emnlp-main.154).
109. **[^](#cite_ref-109)** Nadeem, Moin; Bethke, Anna; Reddy, Siva (August 2021). ["StereoSet: Measuring stereotypical bias in pretrained language models"](https://aclanthology.org/2021.acl-long.416/). In Zong, Chengqing; Xia, Fei; Li, Wenjie; Navigli, Roberto (eds.). *Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers)*. Association for Computational Linguistics. pp. 5356–5371. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2004.09456](https://arxiv.org/abs/2004.09456). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/2021.acl-long.416](https://doi.org/10.18653%2Fv1%2F2021.acl-long.416).
110. **[^](#cite_ref-110)** Simpson, Shmona; Nukpezah, Jonathan; Kie Brooks; Pandya, Raaghav (17 December 2024). ["Parity benchmark for measuring bias in LLMs"](https://doi.org/10.1007%2Fs43681-024-00613-4). *AI and Ethics*. **5** (3). Springer: 3087–3101. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s43681-024-00613-4](https://doi.org/10.1007%2Fs43681-024-00613-4).
111. **[^](#cite_ref-111)** Caramancion, Kevin Matthe (2023-11-13). "News Verifiers Showdown: A Comparative Performance Evaluation of ChatGPT 3.5, ChatGPT 4.0, Bing AI, and Bard in News Fact-Checking". *2023 IEEE Future Networks World Forum (FNWF)*. IEEE. pp. 1–6. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2306.17176](https://arxiv.org/abs/2306.17176). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/FNWF58287.2023.10520446](https://doi.org/10.1109%2FFNWF58287.2023.10520446). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [979-8-3503-2458-7](https://en.wikipedia.org/wiki/Special:BookSources/979-8-3503-2458-7).
112. **[^](#cite_ref-Bermejo2025_112-0)** Bermejo, Vicente J.; Gago, Andrés; Gálvez, Ramiro H.; Harari, Nicolás (2025). ["LLMs outperform outsourced human coders on complex textual analysis"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12623721). *Scientific Reports*. **15** (1) 40122. Nature Portfolio. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2025NatSR..1540122B](https://ui.adsabs.harvard.edu/abs/2025NatSR..1540122B). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41598-025-23798-y](https://doi.org/10.1038%2Fs41598-025-23798-y). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [12623721](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12623721). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [41249236](https://pubmed.ncbi.nlm.nih.gov/41249236).
113. **[^](#cite_ref-Gilardi2023_113-0)** Gilardi, Fabrizio; Alizadeh, Meysam; Kubli, Maël (2023). ["ChatGPT outperforms crowd workers for text-annotation tasks"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10372638). *Proceedings of the National Academy of Sciences of the United States of America*. **120** (30) e2305016120. National Academy of Sciences. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2303.15056](https://arxiv.org/abs/2303.15056). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2023PNAS..12005016G](https://ui.adsabs.harvard.edu/abs/2023PNAS..12005016G). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1073/pnas.2305016120](https://doi.org/10.1073%2Fpnas.2305016120). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [10372638](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10372638). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [37463210](https://pubmed.ncbi.nlm.nih.gov/37463210).
114. **[^](#cite_ref-boolq_114-0)** Clark, Christopher; Lee, Kenton; Chang, Ming-Wei; Kwiatkowski, Tom; Collins, Michael; Toutanova, Kristina (2019). ["BoolQ: Exploring the Surprising Difficulty of Natural Yes/No Questions"](https://aclanthology.org/N19-1300/). *ACL*: 2924–2936. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/N19-1300](https://doi.org/10.18653%2Fv1%2FN19-1300).
115. **[^](#cite_ref-bigbench_115-0)** Srivastava, Aarohi; et al. (2022). "Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models". *TMLR*. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2206.04615](https://arxiv.org/abs/2206.04615).
116. **[^](#cite_ref-116)** Niven, Timothy; Kao, Hung-Yu (2019). ["Probing Neural Network Comprehension of Natural Language Arguments"](https://aclanthology.org/P19-1459/). *ACL*: 4658–4664. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.18653/v1/P19-1459](https://doi.org/10.18653%2Fv1%2FP19-1459).
117. **[^](#cite_ref-truthfulqa_117-0)** Lin, Stephanie; Hilton, Jacob; Evans, Owain (2021). "TruthfulQA: Measuring How Models Mimic Human Falsehoods". *ACL*. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2109.07958](https://arxiv.org/abs/2109.07958).
118. ^ [***a***](#cite_ref-hellaswag_118-0) [***b***](#cite_ref-hellaswag_118-1) Zellers, Rowan; Holtzman, Ari; Bisk, Yonatan; Farhadi, Ali; Choi, Yejin (2019). "HellaSwag: Can a Machine Really Finish Your Sentence?". *ACL*. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1905.07830](https://arxiv.org/abs/1905.07830).
119. **[^](#cite_ref-119)** ["Extracting Training Data from Large Language Models"](https://www.usenix.org/system/files/sec21-carlini-extracting.pdf) (PDF). *USENIX Security*. 2021.
120. ^ [***a***](#cite_ref-Xu-2025_120-0) [***b***](#cite_ref-Xu-2025_120-1) Xu, Weijie; Wang, Yiwen; Xue, Chi; Hu, Xiangkun; Fang, Xi; Dong, Guimin; Reddy, Chandan K. (2025-06-28). "Quantifying Fairness in LLMs Beyond Tokens: A Semantic and Statistical Perspective". *COLM*. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2506.19028](https://arxiv.org/abs/2506.19028).
121. **[^](#cite_ref-121)** ["Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings"](https://proceedings.neurips.cc/paper_files/paper/2016/file/a486cd07e4ac3d270571622f4f316ec5-Paper.pdf) (PDF). *NeurIPS*. 2016.
122. **[^](#cite_ref-122)** Luo, Queenie; Puett, Michael J.; Smith, Michael D. (2024-07-22). ["A Perspectival Mirror of the Elephant"](https://cacm.acm.org/practice/a-perspectival-mirror-of-the-elephant/). *Communications of the ACM*. **67** (8): 98–105. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3670241](https://doi.org/10.1145%2F3670241).
123. **[^](#cite_ref-123)** Hofmann, Valentin; Kalluri, Pratyusha Ria; Jurafsky, Dan; King, Sharese (2024-09-05). ["AI generates covertly racist decisions about people based on their dialect"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11374696). *Nature*. **633** (8028): 147–154. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2024Natur.633..147H](https://ui.adsabs.harvard.edu/abs/2024Natur.633..147H). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41586-024-07856-5](https://doi.org/10.1038%2Fs41586-024-07856-5). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0028-0836](https://search.worldcat.org/issn/0028-0836). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [11374696](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11374696). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [39198640](https://pubmed.ncbi.nlm.nih.gov/39198640).
124. **[^](#cite_ref-124)** Wang, Angelina; [Morgenstern, Jamie](https://en.wikipedia.org/wiki/Jamie_Morgenstern); Dickerson, John P. (17 February 2025). "Large language models that replace human participants can harmfully misportray and flatten identity groups". *Nature Machine Intelligence*. **7** (3): 400–411. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2402.01908](https://arxiv.org/abs/2402.01908). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s42256-025-00986-z](https://doi.org/10.1038%2Fs42256-025-00986-z).
125. **[^](#cite_ref-125)** Kotek, Hadas; Dockum, Rikker; Sun, David (2023-11-05). "Gender bias and stereotypes in Large Language Models". [*Proceedings of the ACM Collective Intelligence Conference*](https://dl.acm.org/doi/10.1145/3582269.3615599). New York, NY, USA: Association for Computing Machinery. pp. 12–24. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2308.14921](https://arxiv.org/abs/2308.14921). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3582269.3615599](https://doi.org/10.1145%2F3582269.3615599). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [979-8-4007-0113-9](https://en.wikipedia.org/wiki/Special:BookSources/979-8-4007-0113-9).
126. **[^](#cite_ref-126)** Heikkilä, Melissa (August 7, 2023). ["AI language models are rife with different political biases"](https://www.technologyreview.com/2023/08/07/1077324/ai-language-models-are-rife-with-political-biases/). *MIT Technology Review*. Retrieved 2023-12-29.
127. **[^](#cite_ref-127)** Amodei, Dario; Olah, Chris; Steinhardt, Jacob; Christiano, Paul; Schulman, John; Mané, Dan (2016-06-21). "Concrete Problems in AI Safety". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1606.06565](https://arxiv.org/abs/1606.06565) [[cs.AI](https://arxiv.org/archive/cs.AI)].
128. **[^](#cite_ref-128)** Lyons, Jessica (2025-09-26). ["Prompt injection – and a $5 domain – trick Salesforce Agentforce into leaking sales"](https://www.theregister.com/2025/09/26/salesforce_agentforce_forceleak_attack/). *The Register*. Retrieved 2025-09-26.
129. **[^](#cite_ref-129)** Carlini, Nicholas; Tramèr, Florian; Wallace, Eric (2021-08-11). ["Extracting Training Data from Large Language Models"](https://www.usenix.org/system/files/sec21-carlini-extracting.pdf) (PDF). *USENIX Association*. Retrieved 2025-10-02.
130. **[^](#cite_ref-130)** Zhao, Yao; Zhang, Yun; Sun, Yong (2023-06-07). ["The debate over understanding in AI's large language models"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10068812). *Proceedings of the National Academy of Sciences*. **120** (13) e2215907120. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2306.05499](https://arxiv.org/abs/2306.05499). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2023PNAS..12015907M](https://ui.adsabs.harvard.edu/abs/2023PNAS..12015907M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1073/pnas.2215907120](https://doi.org/10.1073%2Fpnas.2215907120). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [10068812](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10068812). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [36943882](https://pubmed.ncbi.nlm.nih.gov/36943882).
131. **[^](#cite_ref-131)** Buolamwini, Joy; Gebru, Timnit (2018-01-01). ["Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification"](https://proceedings.mlr.press/v81/buolamwini18a/buolamwini18a.pdf) (PDF). *Proceedings of Machine Learning Research (FAT\*)*. Retrieved 2025-10-02.
132. **[^](#cite_ref-132)** Yang, Kaiqi (2024-11-01). "Unpacking Political Bias in Large Language Models: A Cross-Model Comparison on U.S. Politics". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2412.16746](https://arxiv.org/abs/2412.16746) [[cs.CY](https://arxiv.org/archive/cs.CY)].
133. **[^](#cite_ref-133)** Strubell, Emma; Ganesh, Ananya; McCallum, Andrew (2019-07-28). ["Energy and Policy Considerations for Deep Learning in NLP"](https://aclanthology.org/P19-1355.pdf) (PDF). *ACL Anthology*. Retrieved 2025-10-02.
134. **[^](#cite_ref-134)** He, Yuhao; Yang, Li; Qian, Chunlian; Li, Tong; Su, Zhengyuan; Zhang, Qiang; Hou, Xiangqing (2023-04-28). ["Conversational Agent Interventions for Mental Health Problems: Systematic Review and Meta-analysis of Randomized Controlled Trials"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10182468). *Journal of Medical Internet Research*. **25** e43862. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2196/43862](https://doi.org/10.2196%2F43862). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [10182468](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10182468). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [37115595](https://pubmed.ncbi.nlm.nih.gov/37115595).
135. **[^](#cite_ref-135)** Pauketat, Janet V.T.; Ladak, Ali; Anthis, Jacy Reese (2025). ["World-Making for a Future with Sentient AI"](https://www.sentienceinstitute.org/downloads/World-Making-for-a-Future-with-Sentient-AI.pdf) (PDF). *The British Journal of Social Psychology*. **64** (1) e12844. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1111/bjso.12844](https://doi.org/10.1111%2Fbjso.12844). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [39737875](https://pubmed.ncbi.nlm.nih.gov/39737875). Retrieved 2025-10-02.
136. **[^](#cite_ref-136)** Anthis, Jacy Reese; Pauketat, Janet V.T. (2025). "Perceptions of Sentient AI and Other Digital Minds: Evidence from the AI, Morality, and Sentience (AIMS) Survey". *Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems*. pp. 1–22. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2407.08867](https://arxiv.org/abs/2407.08867). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3706598.3713329](https://doi.org/10.1145%2F3706598.3713329). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [979-8-4007-1394-1](https://en.wikipedia.org/wiki/Special:BookSources/979-8-4007-1394-1).
137. **[^](#cite_ref-nD6kH_137-0)** Alba, Davey (1 May 2023). ["AI chatbots have been used to create dozens of news content farms"](https://www.japantimes.co.jp/news/2023/05/01/business/tech/ai-fake-news-content-farms/). *The Japan Times*. Retrieved 18 June 2023.
138. **[^](#cite_ref-PKiPY_138-0)** ["Could chatbots help devise the next pandemic virus?"](https://www.science.org/content/article/could-chatbots-help-devise-next-pandemic-virus). *Science*. 14 June 2023. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1126/science.adj2463](https://doi.org/10.1126%2Fscience.adj2463). [Archived](https://web.archive.org/web/20230618013834/https://www.science.org/content/article/could-chatbots-help-devise-next-pandemic-virus) from the original on 18 June 2023. Retrieved 18 June 2023.
139. **[^](#cite_ref-139)** Kang, Daniel (2023). ["Exploiting programmatic behavior of LLMs: Dual-use through standard security attacks"](https://www.computer.org/csdl/proceedings-article/spw/2024/548700a132/1YiWjkbcIMw). *IEEE Security and Privacy Workshops*. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2302.05733](https://arxiv.org/abs/2302.05733).
140. **[^](#cite_ref-140)** ["A Pro-Russia Content Network Foreshadows the Automated Future of Info Ops"](https://static1.squarespace.com/static/6612cbdfd9a9ce56ef931004/t/67fd396818196f3d1666bc23/1744648558879/PK+Report.pdf) (PDF). American Sunlight Project. 26 February 2025. Retrieved 15 April 2026.
141. **[^](#cite_ref-141)** Goudarzi, Sara (2025-03-26). ["Russian networks flood the Internet with propaganda, aiming to corrupt AI chatbots"](https://thebulletin.org/2025/03/russian-networks-flood-the-internet-with-propaganda-aiming-to-corrupt-ai-chatbots/). *[Bulletin of the Atomic Scientists](https://en.wikipedia.org/wiki/Bulletin_of_the_Atomic_Scientists)*. Retrieved 2025-04-10.
142. **[^](#cite_ref-142)** [Wang, Yongge](https://en.wikipedia.org/wiki/Yongge_Wang) (20 June 2024). ["Encryption Based Covert Channel for Large Language Models"](https://eprint.iacr.org/2024/586.pdf) (PDF). IACR ePrint 2024/586. [Archived](https://web.archive.org/web/20240624191233/https://eprint.iacr.org/2024/586.pdf) (PDF) from the original on 24 June 2024. Retrieved 24 June 2024.
143. **[^](#cite_ref-143)** Rrv, Aswin; Tyagi, Nemika (2024-08-11). ["Chaos with Keywords: Exposing Large Language Models Sycophancy to Misleading Keywords and Evaluating Defense Strategies"](https://aclanthology.org/2024.findings-acl.755.pdf) (PDF). *ACL Anthology*. Retrieved 2025-10-02.
144. **[^](#cite_ref-144)** Salvi, Francesco; Horta Ribeiro, Manoel; Gallotti, Riccardo (19 May 2025). ["On the conversational persuasiveness of GPT-4"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12367540). *Nature Human Behaviour*. **9** (8): 1645–1653. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41562-025-02194-6](https://doi.org/10.1038%2Fs41562-025-02194-6). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [12367540](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12367540). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [40389594](https://pubmed.ncbi.nlm.nih.gov/40389594).
145. **[^](#cite_ref-145)** Østergaard, Søren Dinesen (2023-08-25). ["Will Generative Artificial Intelligence Chatbots Generate Delusions in Individuals Prone to Psychosis?"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10686326). *Schizophrenia Bulletin*. **49** (6): 1418–1419. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/schbul/sbad128](https://doi.org/10.1093%2Fschbul%2Fsbad128). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [10686326](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10686326). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [37625027](https://pubmed.ncbi.nlm.nih.gov/37625027).
146. **[^](#cite_ref-146)** Rosenberg, Josh (21 August 2025). ["South Park Calls Out ChatGPT and Useless Tech-Bro Sycophants"](https://www.esquire.com/entertainment/tv/a65861699/south-park-season-27-episode-3-recap/). *Esquire*. Retrieved 2025-10-02.
147. **[^](#cite_ref-147)** Douglas, Will (March 3, 2023). ["The inside story of how ChatGPT was built from the people who made it"](https://www.technologyreview.com/2023/03/03/1069311/inside-story-oral-history-how-chatgpt-built-openai/). *MIT Technology Review*. [Archived](https://web.archive.org/web/20230303093219/https://www.technologyreview.com/2023/03/03/1069311/inside-story-oral-history-how-chatgpt-built-openai/) from the original on March 3, 2023. Retrieved March 6, 2023.
148. **[^](#cite_ref-148)** Greshake, Kai; Abdelnabi, Sahar; Mishra, Shailesh; Endres, Christoph; Holz, Thorsten; Fritz, Mario (2023-02-01). ["Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection"](https://dl.acm.org/doi/10.1145/3605764.3623985). *Proceedings of the 16th ACM Workshop on Artificial Intelligence and Security*. pp. 79–90. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3605764.3623985](https://doi.org/10.1145%2F3605764.3623985). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [979-8-4007-0260-0](https://en.wikipedia.org/wiki/Special:BookSources/979-8-4007-0260-0).
149. **[^](#cite_ref-149)** Edwards, Benj (2024-01-15). ["AI poisoning could turn models into destructive "sleeper agents," says Anthropic"](https://arstechnica.com/information-technology/2024/01/ai-poisoning-could-turn-open-models-into-destructive-sleeper-agents-says-anthropic/). *Ars Technica*. Retrieved 2025-07-19.
150. **[^](#cite_ref-150)** ["U.S. judge approves $1.5 billion Anthropic copyright settlement with authors"](https://www.reuters.com/sustainability/boards-policy-regulation/us-judge-approves-15-billion-anthropic-copyright-settlement-with-authors-2025-09-25/). *Reuters*. 2025-09-25. Retrieved 2025-09-26.
151. **[^](#cite_ref-151)** ["Anthropic reaches $1.5B settlement with authors over AI copyright claims"](https://apnews.com/article/anthropic-authors-copyright-9643064e847a5e88ef6ee8b620b3a44c). *Associated Press*. 2025-09-25. Retrieved 2025-09-26.
152. **[^](#cite_ref-152)** ["Meta fends off authors' U.S. copyright lawsuit over AI"](https://www.reuters.com/sustainability/boards-policy-regulation/meta-fends-off-authors-us-copyright-lawsuit-over-ai-2025-06-25/). *Reuters*. 2025-06-25. Retrieved 2025-06-26.
153. **[^](#cite_ref-153)** ["Meta Scores Victory in AI Copyright Case"](https://www.wired.com/story/meta-scores-victory-ai-copyright-case/). *Wired*. 2025-06-25. Retrieved 2025-06-26.
154. **[^](#cite_ref-154)** ["OpenAI defeats news outlets' copyright lawsuit over AI training for now"](https://www.reuters.com/legal/litigation/openai-defeats-news-outlets-copyright-lawsuit-over-ai-training-now-2024-11-07/). *Reuters*. 2024-11-07. Retrieved 2024-11-08.
155. **[^](#cite_ref-155)** Robison, Kylie (2024-11-21). ["OpenAI erases evidence in training data lawsuit"](https://www.theverge.com/2024/11/21/24302606/openai-erases-evidence-in-training-data-lawsuit). *The Verge*. Retrieved 2024-11-22.
156. **[^](#cite_ref-156)** Peng, Zhencan; Wang, Zhizhi; Deng, Dong (13 June 2023). ["Near-Duplicate Sequence Search at Scale for Large Language Model Memorization Evaluation"](https://people.cs.rutgers.edu/~dd903/assets/papers/sigmod23.pdf) (PDF). *Proceedings of the ACM on Management of Data*. **1** (2): 1–18. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3589324](https://doi.org/10.1145%2F3589324). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [259213212](https://api.semanticscholar.org/CorpusID:259213212). [Archived](https://web.archive.org/web/20240827053753/https://people.cs.rutgers.edu/~dd903/assets/papers/sigmod23.pdf) (PDF) from the original on 2024-08-27. Retrieved 2024-01-20. Citing Lee et al 2022.
157. **[^](#cite_ref-157)** [Peng, Wang & Deng 2023](#CITEREFPengWangDeng2023), p. 8.
158. **[^](#cite_ref-158)** Council, Stephen (1 December 2023). ["How Googlers cracked an SF rival's tech model with a single word"](https://www.sfgate.com/tech/article/google-openai-chatgpt-break-model-18525445.php). SFGate. [Archived](https://web.archive.org/web/20231216160941/https://www.sfgate.com/tech/article/google-openai-chatgpt-break-model-18525445.php) from the original on 16 December 2023.
159. **[^](#cite_ref-ZDTUM_159-0)** ["Prepare for truly useful large language models"](https://doi.org/10.1038%2Fs41551-023-01012-6). *Nature Biomedical Engineering*. **7** (2): 85–86. 7 March 2023. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41551-023-01012-6](https://doi.org/10.1038%2Fs41551-023-01012-6). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [36882584](https://pubmed.ncbi.nlm.nih.gov/36882584). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [257403466](https://api.semanticscholar.org/CorpusID:257403466).
160. **[^](#cite_ref-160)** Brinkmann, Levin; Baumann, Fabian; Bonnefon, Jean-François; Derex, Maxime; Müller, Thomas F.; Nussberger, Anne-Marie; Czaplicka, Agnieszka; Acerbi, Alberto; Griffiths, Thomas L.; Henrich, Joseph; Leibo, Joel Z.; McElreath, Richard; Oudeyer, Pierre-Yves; Stray, Jonathan; Rahwan, Iyad (2023-11-20). ["Machine culture"](https://www.nature.com/articles/s41562-023-01742-2). *Nature Human Behaviour*. **7** (11): 1855–1868. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2311.11388](https://arxiv.org/abs/2311.11388). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s41562-023-01742-2](https://doi.org/10.1038%2Fs41562-023-01742-2). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2397-3374](https://search.worldcat.org/issn/2397-3374). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [37985914](https://pubmed.ncbi.nlm.nih.gov/37985914).
161. **[^](#cite_ref-161)** Niederhoffer, Kate; Kellerman, Gabriella Rosen; Lee, Angela; Liebscher, Alex; Rapuano, Kristina; Hancock, Jeffrey T. (2025-09-25). ["AI-Generated "Workslop" Is Destroying Productivity"](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity). *Harvard Business Review*. Retrieved 2025-09-22.
162. **[^](#cite_ref-162)** Acar, Oguz A.; Gai, Phyliss Jia; Tu, Yanping; Hou, Jiayi (2025-08-01). ["Research: The Hidden Penalty of Using AI at Work"](https://hbr.org/2025/08/research-the-hidden-penalty-of-using-ai-at-work). *Harvard Business Review*. Retrieved 2025-09-22.
163. **[^](#cite_ref-163)** You, Josh (February 7, 2025). ["How much energy does ChatGPT use?"](https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use). *Epoch AI*. Retrieved 11 November 2025.
164. **[^](#cite_ref-164)** ["Power Hungry: How AI Will Drive Energy Demand"](https://www.imf.org/en/Publications/WP/Issues/2025/04/21/Power-Hungry-How-AI-Will-Drive-Energy-Demand-566304). *IMF*. Retrieved 2025-10-08.
165. **[^](#cite_ref-165)** Mehta, Sourabh (2024-07-03). ["How Much Energy Do LLMs Consume? Unveiling the Power Behind AI"](https://adasci.org/how-much-energy-do-llms-consume-unveiling-the-power-behind-ai/). *Association of Data Scientists*. Retrieved 2025-01-27.
166. **[^](#cite_ref-166)** Luccioni, Sasha; Jernite, Yacine; Strubell, Emma (2024). "Power Hungry Processing: Watts Driving the Cost of AI Deployment?". *The 2024 ACM Conference on Fairness Accountability and Transparency*. pp. 85–99. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2311.16863](https://arxiv.org/abs/2311.16863). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3630106.3658542](https://doi.org/10.1145%2F3630106.3658542). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [979-8-4007-0450-5](https://en.wikipedia.org/wiki/Special:BookSources/979-8-4007-0450-5).
167. ^ [***a***](#cite_ref-ars-scrapers_167-0) [***b***](#cite_ref-ars-scrapers_167-1) Edwards, Benj (2025-03-26). ["Open source devs say AI crawlers dominate traffic, forcing blocks on entire countries"](https://arstechnica.com/ai/2025/03/devs-say-ai-crawlers-dominate-traffic-forcing-blocks-on-entire-countries/). *Ars Technica*. Retrieved 2025-12-31.
168. **[^](#cite_ref-theregister-scrapers_168-0)** Claburn, Thomas (2025-03-18). ["AI crawlers haven't learned to play nice with websites"](https://www.theregister.com/2025/03/18/ai_crawlers_sourcehut/). *The Register*. Retrieved 2025-12-31.
169. **[^](#cite_ref-ars-tarpit_169-0)** Belanger, Ashley (2025-01-29). ["AI haters build tarpits to trap and trick AI scrapers that ignore robots.txt"](https://arstechnica.com/tech-policy/2025/01/ai-haters-build-tarpits-to-trap-and-trick-ai-scrapers-that-ignore-robots-txt/). *Ars Technica*. Retrieved 2025-12-31.
170. **[^](#cite_ref-170)** Zao-Sanders, Marc (2024-03-19). ["How People Are Really Using GenAI"](https://hbr.org/2024/03/how-people-are-really-using-genai). *Harvard Business Review*. [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0017-8012](https://search.worldcat.org/issn/0017-8012). Retrieved 2025-08-10.
171. **[^](#cite_ref-171)** Rousmaniere, Tony; Zhang, Yimeng; Li, Xu; Shah, Siddharth (2025-07-21). ["Large language models as mental health resources: Patterns of use in the United States"](https://doi.apa.org/doi/10.1037/pri0000292). *Practice Innovations*. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1037/pri0000292](https://doi.org/10.1037%2Fpri0000292). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2377-8903](https://search.worldcat.org/issn/2377-8903).
172. **[^](#cite_ref-172)** Moore, Jared; Grabb, Declan; Agnew, William; Klyman, Kevin; Chancellor, Stevie; Ong, Desmond C.; Haber, Nick (2025-04-25). "Expressing stigma and inappropriate responses prevents LLMS from safely replacing mental health providers". *Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency*. pp. 599–627. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2504.18412](https://arxiv.org/abs/2504.18412). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3715275.3732039](https://doi.org/10.1145%2F3715275.3732039). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [979-8-4007-1482-5](https://en.wikipedia.org/wiki/Special:BookSources/979-8-4007-1482-5).
173. **[^](#cite_ref-173)** McBain, Ryan K.; Cantor, Jonathan H.; Zhang, Li Ang; Baker, Olesya; Zhang, Fang; Halbisen, Alyssa; Kofner, Aaron; Breslau, Joshua; Stein, Bradley; Mehrotra, Ateev; Yu, Hao (2025-03-05). ["Competency of Large Language Models in Evaluating Appropriate Responses to Suicidal Ideation: Comparative Study"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11928068). *Journal of Medical Internet Research*. **27** (1) e67891. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2196/67891](https://doi.org/10.2196%2F67891). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [11928068](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11928068). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [40053817](https://pubmed.ncbi.nlm.nih.gov/40053817).
174. **[^](#cite_ref-174)** ["AI chatbots could be making you stupider"](https://www.bbc.com/future/article/20260417-ai-chatbots-could-be-making-you-stupider). *BBC*. 2026-04-20. Retrieved 2026-04-21.
175. **[^](#cite_ref-175)** Li, Fei-Fei; Etchemendy, John (2024-05-22). ["No, Today's AI Isn't Sentient. Here's How We Know"](https://time.com/6980134/ai-llm-not-sentient/). *Time*. Retrieved 2024-05-22.
176. ^ [***a***](#cite_ref-Chalmers-2023_176-0) [***b***](#cite_ref-Chalmers-2023_176-1) Chalmers, David J. (August 9, 2023). ["Could a Large Language Model Be Conscious?"](https://www.bostonreview.net/articles/could-a-large-language-model-be-conscious/). *Boston Review*.
177. **[^](#cite_ref-Thomson-2022_177-0)** Thomson, Jonny (2022-10-31). ["Why don't robots have rights?"](https://bigthink.com/thinking/why-dont-robots-have-rights). *Big Think*. [Archived](https://web.archive.org/web/20240913055336/https://bigthink.com/thinking/why-dont-robots-have-rights/) from the original on 13 September 2024. Retrieved 2024-02-23.
178. **[^](#cite_ref-Kateman-2023_178-0)** Kateman, Brian (2023-07-24). ["AI Should Be Terrified of Humans"](https://time.com/6296234/ai-should-be-terrified-of-humans). *Time*. [Archived](https://web.archive.org/web/20240925041601/https://time.com/6296234/ai-should-be-terrified-of-humans/) from the original on 25 September 2024. Retrieved 2024-02-23.
179. **[^](#cite_ref-179)** Metzinger, Thomas (2021). ["Artificial Suffering: An Argument for a Global Moratorium on Synthetic Phenomenology"](https://doi.org/10.1142%2FS270507852150003X). *[Journal of Artificial Intelligence and Consciousness](https://en.wikipedia.org/wiki/Journal_of_Artificial_Intelligence_and_Consciousness)*. **08**: 43–66. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1142/S270507852150003X](https://doi.org/10.1142%2FS270507852150003X). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [233176465](https://api.semanticscholar.org/CorpusID:233176465).
180. **[^](#cite_ref-180)** Tkachenko, Yegor (2024). ["Position: Enforced Amnesia as a Way to Mitigate the Potential Risk of Silent Suffering in the Conscious AI"](https://proceedings.mlr.press/v235/tkachenko24a.html). *ICML*. **235**: 48362–48368.
181. **[^](#cite_ref-181)** Dung, Leonard (2025). *Saving Artificial Minds: Understanding and Preventing AI Suffering*. Routledge. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.4324/9781003674573](https://doi.org/10.4324%2F9781003674573). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-041-14466-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-041-14466-3).
182. **[^](#cite_ref-182)** Leith, Sam (2022-07-09). ["Nick Bostrom: How can we be certain a machine isn't conscious?"](https://www.spectator.co.uk/article/nick-bostrom-how-can-we-be-certain-a-machine-isnt-conscious/). *The Spectator*. Retrieved 2025-09-22.
183. **[^](#cite_ref-183)** [Chalmers, David](https://en.wikipedia.org/wiki/David_Chalmers) (1995). "Facing up to the problem of consciousness". *[Journal of Consciousness Studies](https://en.wikipedia.org/wiki/Journal_of_Consciousness_Studies)*. **2** (3): 200–219. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.103.8362](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.103.8362).
184. **[^](#cite_ref-184)** Maruf, Ramishah (2022-07-25). ["Google fires engineer who contended its AI technology was sentient"](https://www.cnn.com/2022/07/23/business/google-ai-engineer-fired-sentient). *CNN*. Retrieved 2025-09-22.
185. **[^](#cite_ref-185)** Shanahan, Murray (2024). ["Talking about Large Language Models"](https://doi.org/10.1145/3624724). *Communications of the ACM*. **67** (2): 68–79. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3624724](https://doi.org/10.1145%2F3624724).

* [Jurafsky, Dan](https://en.wikipedia.org/wiki/Dan_Jurafsky), Martin, James. H. [*Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics, and Speech Recognition*](https://web.stanford.edu/~jurafsky/slp3/ed3book_jan72023.pdf), 3rd Edition draft, 2023.
* Yin, Shukang; Fu, Chaoyou; Zhao, Sirui; Li, Ke; Sun, Xing; Xu, Tong; Chen, Enhong (2024). ["A Survey on Multimodal Large Language Models"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11645129). *[National Science Review](https://en.wikipedia.org/wiki/National_Science_Review)*. **11** (12) nwae403. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2306.13549](https://arxiv.org/abs/2306.13549). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/nsr/nwae403](https://doi.org/10.1093%2Fnsr%2Fnwae403). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [11645129](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11645129). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [39679213](https://pubmed.ncbi.nlm.nih.gov/39679213).
* ["AI Index Report 2024 – Artificial Intelligence Index"](https://aiindex.stanford.edu/report/). *aiindex.stanford.edu*. Retrieved 2024-05-05.
* Frank, Michael C. (27 June 2023). ["Baby steps in evaluating the capacities of large language models"](https://www.nature.com/articles/s44159-023-00211-x). *Nature Reviews Psychology*. **2** (8): 451–452. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/s44159-023-00211-x](https://doi.org/10.1038%2Fs44159-023-00211-x). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2731-0574](https://search.worldcat.org/issn/2731-0574). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [259713140](https://api.semanticscholar.org/CorpusID:259713140). Retrieved 2 July 2023.