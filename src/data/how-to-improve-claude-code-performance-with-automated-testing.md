# How to Improve Claude Code Performance with Automated Testing

Source: https://towardsdatascience.com/how-to-vastly-improve-claude-code-performance-with-automated-testing/

, Claude Code works pretty well. You can input a series of instructions and have it produce code or other output for you. However, there are a few things you can do to vastly increase the performance of Claude Code, especially when it comes to programming.

In this article, I’ll talk about the number one technique that I’m using every day to make my Claude Code multiple times more effective: automated / more effective testing.

On the surface, this might sound like a boring topic, but when you learn more about it, testing, especially when automated or made more effective, is a great way to save a lot of time. If you can make the agent test its own implementations, that will make it far more effective at producing the solution that you wanted to make.

The number one reason why you should automate testing is that it simply makes you far more effective. If you can have an agent test its own implementations automatically, it will become far better at actually managing to implement the solution you describe in your prompt. Ultimately, this leads to you saving a lot of time because you don’t have to iterate with the agent multiple times to get the exact solution you want.

Furthermore, another important point is that now that coding agents have become so effective at producing code, the real bottleneck with programming has become testing. You need to test that the implementation actually works in accordance with what you have in mind. I find that I spend most of my time programming, testing different solutions, and making sure everything is working as expected. If you can make testing either more effective or completely automated, that will thus solve the biggest bottleneck I have in programming, which will naturally make me far more effective.

I believe this applies to a lot of people who actively use coding agents to program, and I’m just sharing how I both automate and make my testing more effective.

I’ll talk about a few aspects with regard to testing. First, I’ll talk about automating testing, which is when you give your agent access to run tests itself. This can happen in many different ways. You can, for example, give it testing scripts to run, unit tests to run, or full-on integration tests. Continuing, I’ll discuss how to make testing with humans more effective. Sometimes it’s not possible for the coding agent to fully do the test itself. Maybe it requires special context or permissions. Maybe it’s a complicated action within a UI that you don’t want the coding agent to do, or that the coding agent can’t do, etc.

Here are the three main steps for automatic testing:

I’ll start by discussing how you can give the agent access to running tests. The most important point you can note here is that you should make it possible for the agent to run tests. This is done by giving it enough access, for example, maybe it needs AWS access to access data, or maybe it needs access to the browser to navigate through the application. Thus, the first step here is to make sure that the agent has all the permissions it needs.

In my experience, you can run Claude Code with Dangerously Skip Permissions or Auto Mode, which was recently released, and it works very well. Unfortunately, when using other coding agents such as Gemini or Chachipetee, I’ve not done this yet because I actually have some experiences where the coding agents have done unintended actions that were non-reversible. However, this has never happened when I used Claude’s models.

The second part of automated testing is simply to prompt the agent to set up tests. For example, I ask my model to set up integration tests. Integration tests are essentially just a series of API calls that make sure the flow through the application is as expected. And with coding agents, this works really well. For example, have an LLM call that leads into a parsing pipeline and so on. You can make the process deterministic and ensure the results are correct every time. Simply informing the agent to set up integration tests will work really well; the model will set up the tests and actually immediately work better.

You can also just ask the model to create testing scripts that test an implementation and tell it that it should run that testing script to make sure everything works as intended, and not stop until the testing script works successfully. The last part is very important because sometimes the models are actually a bit lazy, and you need to explicitly inform them that they’re not allowed to stop before the implementation is successful. This, of course, assumes that the implementation is possible given the permissions and actions you’ve given to the coding agent.

Continuing, it’s also important that you make sure that these tests run before the code is pushed to production. You can run the test as pre-commit hooks, though this can slow you down sometimes because the tests have to run before every commit, and if the test takes some time, then it will slow you down. You can also make them run every time you have a push, a new push to a pull request. I.e., if a pull request is updated, then run integration tests. These tests can also be part of GitHub actions, for example, so they automatically run, and you don’t have to run them on your computer. However, in my experience, it’s often nice to have these tests on your computer, as it makes it faster and you can more easily trigger them.

Lastly, on the automated testing section, I want to highlight how you need to make sure that you constantly update your tests given new code that is produced. For example, if you produce a new piece of code, make sure to add new tests for it. And if you remove old code, make sure to remove the corresponding tests. It’s important to maintain the tests so that they’re effective. Though this maintenance might sound like extra work upfront, it will actually save you time in the long run because you’re not running unnecessary tests, and you’re ensuring that all your code is tested, which lowers the chance of bugs.

Furthermore, I recommend that you sometimes manually inspect the tests by literally looking at the input and output and asking the agent to show you the results. This manual inspection of tests can sometimes be very effective in ensuring the test works as expected and makes it easy to discover bugs in the test.

The second point on testing I want to cover is making manual testing more effective. When I talk about manual testing, I mean testing that requires a human to perform it, and that can’t be done by an AI. Unfortunately, some testing has to be done by you, and you can’t simply outsource it for an AI to do. This could happen because of several reasons:

In these cases, the best thing you can do is to make the testing more effective for yourself. Of course, your first instinct when producing tests should always be to try to automate them fully so that you don’t have to ever touch them yourself, and the AI always runs them automatically. However, realistically, you need to test it a lot yourself as well.

My number one trick to make testing more effective is to use visual testing. For example, if I have the AI solve a lot of tasks for me, I first make it create an HTML report consisting of each task and a checkbox beside these tasks so I can check off any tasks that are set to done. I also tell the AI to provide me with links to the pages that contain the content I need to test and the description of exactly how I can test that it works. This simplifies the process a lot because I don’t have to remember everything I need to test and how to test it. But it’s consciously presented to me in a report. You can see an example of this below:

Another point in how I make testing easier is that I try to outsource as many tasks as possible to the coding agent. For example, if I need particular data to test something manually, I don’t spend a lot of time manually looking for the data. I ask the coding agent to access the required resources and find me the data automatically.

In this article, I’ve discussed how you can automate testing with Claude Code to become far more effective with Claude Code or any other coding agent that you’re using. I mainly discussed how you can either automate testing, which is the most preferable approach, or you can make manual testing more effective. When coding agents have become as good as they have come, especially after the release of the latest Opus models, I believe testing has become the bottleneck. While previously you spent the most time manually writing code, you don’t spend that much time manually writing code anymore, and you spend much more time testing the actual implementations. Thus, it makes sense to try to optimize the testing process to make it more effective. To maximize your efficiency as a programmer, I would definitely focus on the testing part and think about how you can become more effective there. The techniques I presented in this article are just some examples of what I do personally to make testing more effective.

👋 Get in Touch

👉 My free eBook and Webinar:

🚀 10x Your Engineering with LLMs (Free 3-Day Email Course)

📚 Get my free Vision Language Models ebook

💻 My webinar on Vision Language Models

👉 Find me on socials:

💌 Substack

🔗 LinkedIn

🐦 X / Twitter

Also, check out my article on How to Maximize Claude Cowork.