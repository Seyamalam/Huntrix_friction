# How to Add Features to a Python Project With Codex CLI

Source: https://realpython.com/codex-cli/

After reading this guide, you’ll be able to use Codex CLI to add features to a Python project directly from your terminal. Codex CLI is an AI-powered coding assistant that runs inside your terminal. It understands your project structure, reads your files, and proposes multi-file changes using natural language instructions.

Instead of copying code from a browser or relying on an IDE plugin, you’ll use Codex CLI to implement a real feature in a multi-file Python project directly from your terminal:

In the following steps, you’ll install and configure Codex CLI, use it to implement a deletion feature in a contact book app, and then refine that feature through iterative prompting.

Take the Quiz: Test your knowledge with our interactive “How to Add Features to a Python Project With Codex CLI” quiz. You’ll receive a score upon completion to help you track your learning progress:

To follow this guide, you should be familiar with the Python language. You’ll also need an OpenAI account with either a paid ChatGPT subscription or a valid API key, which you’ll connect to Codex CLI once you install it. Additionally, you’ll need to have Node.js installed, since Codex CLI is distributed as an npm package.

To make it easier for you to experiment with Codex CLI, download the RP Contacts project by clicking the link below:

The project RP Contacts is a text-based interface (TUI) that allows you to manage contacts directly in the terminal through a Textual app. It’s an adapted version of the project from Real Python’s tutorial Build a Contact Book App With Python, Textual, and SQLite. It differs from the original in that it uses uv to manage the project, and the TUI buttons Delete and Clear All haven’t been implemented—that’s what you’ll use Codex CLI for.

Once you’ve downloaded the project, you want to check that you can run it. As mentioned, the project uses uv for dependency management—you can tell by the uv.lock file in the project root—so make sure you have uv installed. If you don’t have uv yet, follow the official installation instructions.

Once you have uv installed and you’re at the root directory of the project, you can run the project:

When you run the command rpcontacts through uv for the first time, uv will create a virtual environment, install the dependencies of your project, and start the RP Contacts TUI. If all goes well, you should see a TUI in your terminal with a couple of buttons and an empty contact listing:

Once the TUI opens, create some test contacts by using the Add button and filling in the form that pops up. After creating a couple of fake contacts, quit the application by pressing Q.

Finally, you’ll want to initialize a Git repository at the root of your project and commit all your files:

Codex CLI will modify your code, and you can never tell whether the changes will be good or not. Versioning your code makes it straightforward to roll back any changes made by LLMs if you don’t like them.

If you want to explore other AI-powered coding tools alongside Codex CLI, Real Python’s Python Coding With AI learning path brings together tutorials and video courses on AI-assisted coding, prompt engineering, and LLM development.

With all the accessory setup out of the way, it’s now time to install Codex CLI. For that, you’ll want to check the official OpenAI documentation to see the most up-to-date installation instructions. As of now, OpenAI recommends using npm:

To verify that the installation was successful, check the version you installed by running:

Given the pace at which things are evolving, your output will show a more recent version of Codex CLI.

Once the CLI is installed, you need to authenticate so that you can run Codex. Make sure you’re at the root of the project and start Codex CLI:

The command codex starts Codex CLI in the current directory and, the first time you run it, walks you through the authentication steps. If you have a paid ChatGPT subscription, select the option to sign in through ChatGPT. This will take you to a browser window where you’re supposed to sign in with your OpenAI account. After signing in, the terminal window where you ran the command codex should show a success message.

Note: If you don’t have a paid ChatGPT account, or don’t want to use it, you can also authenticate by providing a valid OpenAI API key.

After authenticating successfully, Codex will show you some security disclaimers. One of the disclaimers is a security question that’s shown whenever you run Codex in a new directory, asking you if you trust the contents. You’re asked this because you could fall victim to a prompt injection attack if you run Codex in a directory with contents manipulated by a malicious actor.

Once you go over the security disclaimers that Codex shows you, you’ll be inside the Codex interface. This TUI provides a basic chat interface for you to interact with Codex. To test Codex and its TUI, you can type a simple prompt into the interface, like “What’s the name of the current Python project?”:

After a couple of seconds, Codex should report back with the correct answer, confirming that it can access the contents of the current directory.

When inside the Codex chat interface, you can use some commands to configure Codex and the interface. Commands start with a forward slash /, and once you type the forward slash, the interface will autocomplete the available commands. It’s worth keeping a couple of commands in mind:

Now that Codex CLI is installed, authenticated, and able to read your project, you’re ready to use it to implement a new feature.

You’re ready to start working on your project with Codex. Before you do, make sure you’ve initialized a Git repository and committed your files as described in the prerequisites. Codex might make mistakes, and version control makes it straightforward to roll back.

The contact book app has three buttons in its interface:

However, only the Add button works. If you run the app and try to delete one or all contacts, nothing happens because the code to delete contacts hasn’t been written yet. This is the feature you’ll want to implement with Codex.

Run Codex from the root of your project and use the command /plan to switch to Plan mode. When in Plan mode, Codex will generate a plan to implement the feature you request instead of implementing the feature immediately. This intermediate planning gives you better control over how Codex will implement the feature and tends to yield better results.

After switching to Plan mode, prompt Codex to implement the feature you want. You can use a prompt like the following:

“Implement the behavior for the button Delete, which should delete the currently highlighted row of the datatable, and implement the behavior for the button Clear All, which should delete all existing contacts.”

When prompting Codex, you can be as detailed as you like, and the more specific instructions you provide, the more likely you are to get appropriate results.

After typing a feature request you’re happy with, press Enter to submit your prompt. Codex will work on the plan for a few seconds, and while it does, it will populate the transcript with a log of its reasoning process. During this time, it may ask for your approval to run specific commands. Depending on your prompt, it might also ask for further clarification about your intent.

Because of the Plan mode setting, Codex will ultimately present you with the final implementation plan and a choice. You can either accept the plan as-is, and Codex will implement it, or you can reject the plan and ask for modifications. After prompting Codex with the feature request shown above, Codex presents a plan that’s included below for reference.

Once you’re happy with the plan that Codex presents, you can tell Codex to implement the plan. While Codex is implementing the plan, it will show you a real-time log of its reasoning. During this time, you might also be asked for permission to run specific commands that aren’t allowed by Codex’s safety restrictions.

If all goes well and you resolve any interactions that Codex might initiate, Codex should finish implementing the feature you requested after a couple of minutes. To check Codex’s changes, you can use the command /diff to view a side-by-side comparison of the current proposed changes:

The Codex-rendered diff is similar to the diff you get if you run the command git diff, but the /diff command lets you stay inside the Codex interface. At this point, you’ll want to review the code that Codex generated and see if it looks reasonable to you or if there’s something you’d like to change. If needed, you can prompt Codex further until you’re satisfied with the result.

In this instance, Codex produced a reasonable implementation of the deletion feature, which amounted to adding five new methods to the class ContactsApp in the file src/rpcontacts/tui.py:

Assuming you’re happy with the Codex changes, exit the Codex interface with the command /quit, then run the project app with the command uv run rpcontacts. At this point, you should manually test the Delete and Clear All buttons, along with the keyboard shortcuts D to delete and C to clear all.

Note: Codex and all other LLMs are non-deterministic, which means you may get different results even if you copy and paste the exact prompts shared in this guide. Don’t worry too much about having exactly the same code as above or in any other code listing shown. Instead, focus on making sure your application works properly. For example, ensure that your application is able to delete and clear all contacts.

As soon as everything is working, commit Codex’s changes and move on to the next step, which is learning how to refine the feature you implemented with Codex.

After quitting Codex to manually test the app, you might want to open Codex again to iterate further on the feature, perhaps to tweak it if it wasn’t implemented properly. You can reopen a previous conversation with the command codex resume. More specifically, you can reopen the most recent conversation you had in a given directory:

By doing so, you’ll gain access to the transcript of your interactions with Codex, and Codex will have access to all the previous context, making it easier to continue a line of work.

When inspecting the Codex implementation for the deletion feature, you may have spotted an opportunity for improvement. The methods .on_delete_button_pressed() and .on_clear_all_button_pressed() represent a bit of structural redundancy, since the decorator @on() could have been applied directly to the methods .action_delete() and .action_clear_all(). This is a great example of why reviewing AI-generated code matters, and you can tell Codex to make this refinement:

“Apply the @on() decorators directly to the action methods, removing the need for the auxiliary methods
  .on_delete_button_pressed() and .on_clear_all_button_pressed().”

Codex should make quick work of this refactoring request and present you with a short diff:

The method .on_delete_button_pressed() should have been deleted and the @on() decorator that was on top of it should have been moved to the action method .action_delete(). A similar change should have happened for the methods .on_clear_all_button_pressed() and .action_clear_all():

The diffs show that the two uses of the decorator @on() were moved to the action method immediately above, getting rid of the two superfluous methods .on_delete_button_pressed() and .on_clear_all_button_pressed().

Double-check that everything is working by running the app and testing the buttons and keyboard bindings, then commit your changes.

With the refactoring committed, you can take the new feature even further. For example, you could have the user confirm a deletion or clearing command, since these are destructive operations. To get Codex to further refine the deletion feature, consider switching to Plan mode with the command /plan, then prompt it with:

“To prevent accidental deletion of contacts, use the QuestionDialog to confirm whenever the user tries to delete one or all contacts.”

Even if you don’t notice that the app already defines the class QuestionDialog for user confirmation interactions, Codex should be able to pick up on the pattern during execution by inspecting the code used to quit the app. Alternatively, you can write the prompt without switching to Plan mode, and Codex will implement the feature right away.

After working, Codex will likely give you a reasonable implementation of your refinement request. Check the diff with the command /diff, and after resolving any issues you spot immediately, try running the app and testing it yourself. If you click the Delete button, does the confirmation pop-up appear, and can you safely cancel a deletion request, for example?

Again, the exact changes that Codex makes aren’t very important. What’s important is that you become comfortable with the process of iterating with Codex and checking its work. Even so, a full diff showing the user-confirmation changes is included below, in case you’re having trouble getting Codex to produce a working result.

If something isn’t working quite as expected, see if the common scenarios and fixes listed here help you out:

As for next steps, the sky is the limit. Taking inspiration from the original app tutorial, you could:

These are a few ideas you could pursue to improve your contact book app. Since you’re working on the project with LLMs, you may want to add automated tests—and you can use Codex for that too. Having automated tests makes it easier to verify that code changes don’t break features that were already functional.

Now that you’re familiar with Codex CLI, you can use the questions and answers below to check your understanding and recap what you’ve learned.

These FAQs cover the most important concepts from this guide. Click the Show/Hide toggle beside each question to reveal the answer.

Codex CLI is a command-line tool developed by OpenAI that you can run locally from your terminal, giving you access to a coding agent that can read, change, and run code on your machine in the selected directory.

In general, no. Codex CLI requires a ChatGPT account on a paid tier or a valid API key with credits.

Since it runs locally, Codex CLI can access your project files directly to read and edit them. Codex CLI can also run your code or project tests, create new files, and more. ChatGPT lives in the browser, so it can only access the files you upload explicitly. Conversely, since Codex CLI runs locally, you need to be more careful about what it accesses and modifies to prevent prompt injection attacks.

Take the Quiz: Test your knowledge with our interactive “How to Add Features to a Python Project With Codex CLI” quiz. You’ll receive a score upon completion to help you track your learning progress: