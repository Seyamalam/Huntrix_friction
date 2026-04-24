# How to Use Ollama to Run Large Language Models Locally

Source: https://realpython.com/ollama/

Running Ollama in your terminal allows you to start chatting with a local large language model (LLM) quickly. You won’t need API keys, cloud services, or ongoing costs. Ollama is a free, open-source tool that lets you download and run models directly on your machine. By following this guide, you’ll install Ollama, chat with local models from your terminal, and use them to power agentic coding tools:

Large language models traditionally require expensive API subscriptions and a constant internet connection. Ollama eliminates both requirements by running models directly on your hardware. Because everything runs locally, your prompts stay on your machine, and no per-token fees apply.

Take the Quiz: Test your knowledge with our interactive “How to Use Ollama to Run Large Language Models Locally” quiz. You’ll receive a score upon completion to help you track your learning progress:

To follow this guide, you’ll need the following software and hardware:

No Python installation is required for this guide, and no prior experience with LLMs or AI is needed. If you want to integrate Ollama with Python after finishing here, check out How to Integrate Local LLMs With Ollama and Python.

To quickly install Ollama on your operating system, run the following command based on your platform:

Once this command finishes, Ollama will be installed on your system.

Note: In some Linux distributions, you may need to install curl to download the installer and the zstd library for extraction. On Debian/Ubuntu, you can install them with the following command:

Alternatively, you can download a dedicated installer for Windows and macOS. Visit Ollama’s download page to get the installer for those operating systems.

Note: Ollama has a GUI application for macOS and Windows users. This quick guide focuses solely on the command-line (CLI) tool. See Ollama’s app announcement if you want to explore that option.

After installation, you can verify that the CLI is available with the following command:

The Ollama service should be running in the background. Normally, you don’t need to start it manually. It runs on port 11434 by default. If you get a warning after running the command above, then you may need to run the background server manually:

On some Linux distributions, you may need to run this command explicitly. That’s it! You’re now ready to start using Ollama and local LLMs on your machine. It’s time to download your first model.

To test the CLI, you’ll pull the llama3.2:latest model, which requires 2 GB of available storage. This model balances response quality and resource requirements well for most machines. Go ahead and run the following command:

This process will take a variable amount of time, depending on your connection speed. The initial download is the only time you’ll need an internet connection for using this LLM locally.

To confirm that the model is installed, run the following:

Up to this point, you have only llama3.2:latest installed. You can browse all available models at ollama.com/models.

If your current machine has limited RAM, the llama3.2:1b model is a lighter option and only requires 1.3 GB of storage. For more powerful hardware, larger models like llama3.3:70b offer stronger reasoning capabilities.

To check the model’s characteristics, run the following:

The output tells you that the model has 3.2 billion parameters and supports a context window of 131,072 tokens, which determines how much text the model can process in a single conversation.

You can also see that this model supports text completion—responses to your prompts—and tool use.

If you ever need to free up disk space, or if you don’t want to use a given model any longer, then you can remove it with the following command:

This command will remove the model from your hard drive, freeing up space. Run the ollama --help command to get a quick overview of all the CLI options available in Ollama.

After this quick exploration of the CLI capabilities, you’re ready to start chatting with your favorite local language model!

To start an interactive chat session, go ahead and run the following command in your terminal window:

Once the model loads, you’ll see the >>> prompt indicating you’re in chat mode. You’ll also notice grayed-out placeholder text, Send a message (/? for help), which hints at what to do next.

You’re ready to send your first prompt. Try out something like the following:

Of course, the response you’ll get will be different, but it should be consistent with this one. Note that the first response may take a moment while the model finishes loading, but later responses should be faster.

Also, note that the text stream is incremental, which makes the chat feel responsive even before the responses are complete.

The chat maintains conversational context throughout the session, so you can ask follow-up questions naturally:

Even though your question doesn’t mention the GIL, the model has the required context to understand what you’re talking about.

To confirm that the model is running entirely offline, go ahead and disconnect your computer from the internet. Then, send another prompt. You’ll see how the model still responds. Your prompts never go to a remote server.

Ollama’s CLI allows you to use slash commands to control the session. Run /? to list them:

These are handy commands. Feel free to try them out and see how they work. Note that you can use triple-quotes to provide multiline prompts.

To switch to a different model, you can exit the current session with /bye and then run ollama run <other-model>.

If you want to use local LLMs for Python programming tasks, Ollama’s launch command can connect them to AI coding tools without manual configuration.

Note: To use the ollama launch command, make sure you have Ollama v0.15 or newer. Run ollama -v to check your version.

For example, to start Claude Code backed by a local model, run the following:

This command configures Claude Code to use the local model over an Anthropic-compatible API at localhost:11434. To configure the integration without launching immediately, add the --config flag:

Before launching Claude Code, consider pulling a model suited for coding tasks. The recommended local models for code generation and agentic workflows include the following:

Coding tools and agentic workflows require a large context window. At least 64k tokens of context is recommended for Claude Code.

Note: These models are significantly larger than llama3.2, so make sure your system has enough RAM and disk space before downloading any of them.

To follow along, you can pull the smallest model:

After the download is complete, run the following command:

You’ll get a list of installed and recommended models. Your list may look different from the example above. In any case, use the arrow keys to move up and down and press Enter to choose a model to use with Claude Code.

Once launched, the coding tool uses your local model as its backend instead of a cloud API. Responses are generated entirely on your hardware, so your code and prompts remain private.

Go ahead and play with Claude Code and your local model to see the results. Response quality depends on the model you choose. Larger models like gpt-oss:120b produce results closer to cloud-hosted models but may be slow if you don’t have powerful hardware. In contrast, smaller models trade some quality for speed and lower hardware requirements.

You’re all set up with Ollama. Here are a couple of directions you can explore next:

Now that you have Ollama running locally, you can use the questions and answers below to check your understanding and recap what you’ve learned.

No. Once downloaded with ollama pull, the model runs completely offline. Only the initial ollama pull command requires an internet connection.

It’s free and open source under the MIT License. There are no API fees, subscriptions, or usage limits.

No. Models can run on a CPU alone, though a GPU speeds up responses significantly, especially for larger models.

The llama3.2:latest model is a good starting point because it balances response quality and resource use. If your system struggles, try llama3.2:1b instead. For coding tasks, consider using one of the recommended models: qwen3-coder, gpt-oss:20b, or gpt-oss:120b. Make sure your hardware meets the model’s requirements.

Yes. Open multiple terminals and run ollama run <model> in each. RAM usage multiplies with each session, so use ollama ps to check loaded models and their memory usage.

Ollama stores downloaded models locally on your machine. The exact location depends on your operating system:

These models remain on your system until you remove them with ollama rm <model-name>.

Take the Quiz: Test your knowledge with our interactive “How to Use Ollama to Run Large Language Models Locally” quiz. You’ll receive a score upon completion to help you track your learning progress: