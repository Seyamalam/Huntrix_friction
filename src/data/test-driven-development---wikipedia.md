# Test-driven development - Wikipedia

Source: https://en.wikipedia.org/wiki/Test-driven_development

---

Method of writing code

**Test-driven development** (**TDD**) is a way of writing [code](https://en.wikipedia.org/wiki/Source_code) that involves writing an [automated](https://en.wikipedia.org/wiki/Test_automation) [unit-level](https://en.wikipedia.org/wiki/Unit_testing) [test case](https://en.wikipedia.org/wiki/Test_case_(software)) that fails, then writing just enough code to make the test pass, then [refactoring](https://en.wikipedia.org/wiki/Refactoring) both the test code and the production code, then repeating with another new test case.

Alternative approaches to writing automated tests is to write all of the production code before starting on the test code or to write all of the test code before starting on the production code. With TDD, both are written together, therefore shortening debugging time necessities.

TDD is related to the test-first programming concepts of [extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), begun in 1999, but more recently has created more general interest in its own right.

Programmers also apply the concept to improving and [debugging](https://en.wikipedia.org/wiki/Software_bug) [legacy code](https://en.wikipedia.org/wiki/Legacy_code) developed with older techniques.

Software engineer [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck), who is credited with having developed or "rediscovered" the technique, stated in 2003 that TDD encourages simple designs and inspires confidence.

> The original description of TDD was in an ancient book about programming. It said you take the input tape, manually type in the output tape you expect, then program until the actual output tape matches the expected output. After I'd written the first xUnit framework in [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk) I remembered reading this and tried it out. That was the origin of TDD for me. When describing TDD to older programmers, I often hear, "Of course. How else could you program?" Therefore I refer to my role as "rediscovering" TDD.

— [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck), "Why does Kent Beck refer to the 'rediscovery' of test-driven development? What's the history of test-driven development before Kent Beck's rediscovery?"

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/TDD_Global_Lifecycle.png/250px-TDD_Global_Lifecycle.png)](https://en.wikipedia.org/wiki/File:TDD_Global_Lifecycle.png)

A graphical representation of the test-driven development lifecycle

The TDD steps vary somewhat by author in count and description, but are generally as follows. These are based on the book *Test-Driven Development by Example*, and Kent Beck's Canon TDD article.

1. List scenarios for the new feature
:   List the expected variants in the new behavior. "There's the basic case & then what-if this service times out & what-if the key isn't in the database yet &…" The developer can discover these specifications by asking about [use cases](https://en.wikipedia.org/wiki/Use_case) and [user stories](https://en.wikipedia.org/wiki/User_story). A key benefit of TDD is that it makes the developer focus on requirements *before* writing code. This is in contrast with the usual practice, where unit tests are only written *after* code.

2. Write a test for an item on the list
:   Write an automated test that *would* pass if the variant in the new behavior is met.

3. Run all tests. The new test should *fail* – for *expected* reasons
:   This shows that new code is actually needed for the desired feature. It validates that the [test harness](https://en.wikipedia.org/wiki/Test_harness) is working correctly. It rules out the possibility that the new test is flawed and will always pass.

4. Write the simplest code that passes the new test
:   Inelegant code and [hard coding](https://en.wikipedia.org/wiki/Hard_coding) is acceptable. The code will be honed in Step 6. No code should be added beyond the tested functionality.

5. All tests should now pass
:   If any fail, fix failing tests with minimal changes until all pass.

6. Refactor as needed while ensuring all tests continue to pass
:   Code is [refactored](https://en.wikipedia.org/wiki/Code_refactoring) for [readability](https://en.wikipedia.org/wiki/Code_readability) and maintainability. In particular, hard-coded test data should be removed from the production code. Running the test suite after each refactor ensures that no existing functionality is broken. Examples of refactoring:

Repeat
:   Repeat the process, starting at step 2, with each test on the list until all tests are implemented and passing.

Each tests should be small and commits made often. If new code fails some tests, the programmer can [undo](https://en.wikipedia.org/wiki/Undo) or revert rather than [debug](https://en.wikipedia.org/wiki/Debug) excessively.

When using [external libraries](https://en.wikipedia.org/wiki/Library_(computing)), it is important not to write tests that are so small as to effectively test merely the library itself, unless there is some reason to believe that the library is buggy or not feature-rich enough to serve all the needs of the software under development.

TDD has been adopted outside of software development, in both product and service teams, as **test-driven work**. For testing to be successful, it needs to be practiced at the micro and macro levels. Every method in a class, every input data value, log message, and error code, amongst other data points, need to be tested. Similar to TDD, non-software teams develop [quality control](https://en.wikipedia.org/wiki/Quality_control) (QC) checks (usually manual tests rather than automated tests) for each aspect of the work prior to commencing. These QC checks are then used to inform the design and validate the associated outcomes. The six steps of the TDD sequence are applied with minor semantic changes:

1. "Add a check" replaces "Add a test"
2. "Run all checks" replaces "Run all tests"
3. "Do the work" replaces "Write some code"
4. "Run all checks" replaces "Run tests"
5. "Clean up the work" replaces "Refactor code"
6. "Repeat"

There are various aspects to using test-driven development, for example the principles of "keep it simple, stupid" ([KISS](https://en.wikipedia.org/wiki/KISS_principle)) and "[You aren't gonna need it](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)" (YAGNI). By focusing on writing only the code necessary to pass tests, designs can often be cleaner and clearer than is achieved by other methods. In *Test-Driven Development by Example*, Kent Beck also suggests the principle "[Fake it till you make it](https://en.wikipedia.org/wiki/Fake_it_till_you_make_it)".

To achieve some advanced design concept such as a [design pattern](https://en.wikipedia.org/wiki/Design_pattern), tests are written that generate that design. The code may remain simpler than the target pattern, but still pass all required tests. This can be unsettling at first but it allows the developer to focus only on what is important.

Writing the tests first: The tests should be written before the functionality that is to be tested. This has been claimed to have many benefits. It helps ensure that the application is written for testability, as the developers must consider how to test the application from the outset rather than adding it later. It also ensures that tests for every feature gets written. Additionally, writing the tests first leads to a deeper and earlier understanding of the product requirements, ensures the effectiveness of the test code, and maintains a continual focus on [software quality](https://en.wikipedia.org/wiki/Software_quality).

When writing feature-first code, there is a tendency by developers and organizations to push the developer on to the next feature, even neglecting testing entirely. The first TDD test might not even compile at first, because the classes and methods it requires may not yet exist. Nevertheless, that first test functions as the beginning of an executable specification.

Each test case fails initially: This ensures that the test really works and can catch an error. Once this is shown, the underlying functionality can be implemented. This has led to the "test-driven development mantra", which is "red/green/refactor", where red means *fail* and green means *pass*. Test-driven development constantly repeats the steps of adding test cases that fail, passing them, and refactoring. Receiving the expected test results at each stage reinforces the developer's mental model of the code, boosts confidence and increases productivity.

In test-driven development, writing tests before implementation raises questions about testing [private methods](https://en.wikipedia.org/wiki/Access_modifiers) versus testing only through [public interfaces](https://en.wikipedia.org/wiki/Interface_(computing)). This choice affects the design of both test code and production code.

Test-driven development relies primarily on [unit tests](https://en.wikipedia.org/wiki/Unit_testing) for its rapid red-green-refactor cycle. These tests execute quickly by avoiding process boundaries, network connections, or external dependencies. While TDD practitioners also write [integration tests](https://en.wikipedia.org/wiki/Integration_testing) to verify component interactions, these slower tests are kept separate from the more frequent unit test runs. Testing multiple integrated modules together also makes it more difficult to identify the source of failures.

When code under development relies on external dependencies, TDD encourages the use of [test doubles](https://en.wikipedia.org/wiki/Test_double) to maintain fast, isolated unit tests. The typical approach involves using interfaces to separate external dependencies and implementing [test doubles](https://en.wikipedia.org/wiki/Test_double#Implementation_approaches) for testing purposes.

Since test doubles don't prove the connection to real external components, TDD practitioners supplement unit tests with [integration testing](https://en.wikipedia.org/wiki/Integration_testing) at appropriate levels. To keep execution faster and more reliable, testing is maximized at the unit level while minimizing slower tests at higher levels.

### Keep the unit small

[[edit](/w/index.php?title=Test-driven_development&action=edit&section=7)]

For TDD, a unit is most commonly defined as a class, or a group of related functions often called a module. Keeping units relatively small is claimed to provide critical benefits, including:

* Reduced debugging effort – When test failures are detected, having smaller units aids in tracking down errors.
* Self-documenting tests – Small test cases are easier to read and to understand.

Advanced practices of test-driven development can lead to [acceptance test–driven development](https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_development) (ATDD) and [specification by example](https://en.wikipedia.org/wiki/Specification_by_example) where the criteria specified by the customer are automated into acceptance tests, which then drive the traditional unit test-driven development (UTDD) process. This process ensures the customer has an automated mechanism to decide whether the software meets their requirements. With ATDD, the development team now has a specific target to satisfy – the acceptance tests – which keeps them continuously focused on what the customer really wants from each user story.

Effective layout of a test case ensures all required actions are completed, improves the readability of the test case, and smooths the flow of execution. Consistent structure helps in building a self-documenting test case. A commonly applied structure for test cases has (1) setup, (2) execution, (3) validation, and (4) cleanup.

* Setup: Put the unit under test (UUT) or the overall test system in the state needed to run the test.
* Execution: Trigger/drive the UUT to perform the target behavior and capture all output, such as return values and output parameters. This step is usually very simple.
* Validation: Ensure the results of the test are correct. These results may include explicit outputs captured during execution or state changes in the UUT.
* Cleanup: Restore the UUT or the overall test system to the pre-test state. This restoration permits another test to execute immediately after this one. In some cases, in order to preserve the information for possible test failure analysis, the cleanup should be starting the test just before the test's setup run.

### Individual best practices

[[edit](/w/index.php?title=Test-driven_development&action=edit&section=10)]

Some best practices that an individual could follow would be to separate common set-up and tear-down logic into test support services utilized by the appropriate test cases, to keep each [test oracle](https://en.wikipedia.org/wiki/Test_oracle) focused on only the results necessary to validate its test, and to design time-related tests to allow tolerance for execution in non-real time operating systems. The common practice of allowing a 5-10 percent margin for late execution reduces the potential number of false negatives in test execution. It is also suggested to treat test code with the same respect as production code. Test code must work correctly for both positive and negative cases, last a long time, and be readable and maintainable. Teams can get together and review tests and test practices to share effective techniques and catch bad habits.

### Practices to avoid, or "anti-patterns"

[[edit](/w/index.php?title=Test-driven_development&action=edit&section=11)]

* Having test cases depend on system state manipulated from previously executed test cases (i.e., you should always start a unit test from a known and pre-configured state).
* Dependencies between test cases. A test suite where test cases are dependent upon each other is brittle and complex. Execution order should not be presumed. Basic refactoring of the initial test cases or structure of the UUT causes a spiral of increasingly pervasive impacts in associated tests.
* Interdependent tests. Interdependent tests can cause cascading false negatives. A failure in an early test case breaks a later test case even if no actual fault exists in the UUT, increasing defect analysis and debug efforts.
* Testing precise execution, timing or performance.
* Building "all-knowing oracles". An oracle that inspects more than necessary is more expensive and brittle over time. This very common error is dangerous because it causes a subtle but pervasive time sink across the complex project.[*[clarification needed](https://en.wikipedia.org/wiki/Wikipedia:Please_clarify)*]
* Testing implementation details.
* Slow running tests.

## Comparison and demarcation

[[edit](/w/index.php?title=Test-driven_development&action=edit&section=12)]

Test-driven development is related to, but different from [acceptance test–driven development](https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_development) (ATDD). TDD is primarily a developer's tool to help create well-written unit of code (function, class, or module) that correctly performs a set of operations. ATDD is a communication tool between the customer, developer, and tester to ensure that the requirements are well-defined. TDD requires test automation. ATDD does not, although automation helps with [regression testing](https://en.wikipedia.org/wiki/Regression_testing). Tests used in TDD can often be derived from ATDD tests, since the code units implement some portion of a requirement. ATDD tests should be readable by the customer. TDD tests do not need to be.

BDD ([behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)) combines practices from TDD and from ATDD.
It includes the practice of writing tests first, but focuses on tests which describe behavior, rather than tests which test a unit of implementation. Tools such as [JBehave](/w/index.php?title=JBehave&action=edit&redlink=1), [Cucumber](https://en.wikipedia.org/wiki/Cucumber_(software)), [Mspec](/w/index.php?title=Mspec&action=edit&redlink=1) and [Specflow](https://en.wikipedia.org/wiki/Specflow) provide syntaxes which allow product owners, developers and test engineers to define together the behaviors which can then be translated into automated tests.

There are many testing frameworks and tools that are useful in TDD.

Developers may use computer-assisted [testing frameworks](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks), commonly collectively named [xUnit](https://en.wikipedia.org/wiki/XUnit) (which are derived from SUnit, created in 1998), to create and automatically run the test cases. xUnit frameworks provide assertion-style test validation capabilities and result reporting. These capabilities are critical for automation as they move the burden of execution validation from an independent post-processing activity to one that is included in the test execution. The execution framework provided by these test frameworks allows for the automatic execution of all system test cases or various subsets along with other features.

Testing frameworks may accept unit test output in the language-agnostic [Test Anything Protocol](https://en.wikipedia.org/wiki/Test_Anything_Protocol) created in 1987.

## TDD for complex systems

[[edit](/w/index.php?title=Test-driven_development&action=edit&section=18)]

Exercising TDD on large systems requires a modular architecture, defined components with published interfaces, and disciplined system layering with maximization of platform independence. These proven practices yield increased testability and facilitate the application of build and test automation.

### Designing for testability

[[edit](/w/index.php?title=Test-driven_development&action=edit&section=19)]

Complex systems require an architecture that meets a range of requirements. A key subset of these requirements includes support for the complete and effective testing of the system. Effective modular design yields components that share traits essential for effective TDD.

* [High Cohesion](https://en.wikipedia.org/wiki/Cohesion_(computer_science)) ensures each unit provides a set of related capabilities and makes the tests of those capabilities easier to maintain.
* [Low Coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)) allows each unit to be effectively tested in isolation.
* Published Interfaces restrict Component access and serve as contact points for tests, facilitating test creation and ensuring the highest fidelity between test and production unit configuration.

A key technique for building effective modular architecture is Scenario Modeling where a set of sequence charts is constructed, each one focusing on a single system-level execution scenario. The Scenario Model provides an excellent vehicle for creating the strategy of interactions between components in response to a specific stimulus. Each of these Scenario Models serves as a rich set of requirements for the services or functions that a component must provide, and it also dictates the order in which these components and services interact together. Scenario modeling can greatly facilitate the construction of TDD tests for a complex system.

### Managing tests for large teams

[[edit](/w/index.php?title=Test-driven_development&action=edit&section=20)]

In a larger system, the impact of poor component quality is magnified by the complexity of interactions. This magnification makes the benefits of TDD accrue even faster in the context of larger projects. However, the complexity of the total population of tests can become a problem in itself, eroding potential gains. It sounds simple, but a key initial step is to recognize that test code is also important software and should be produced and maintained with the same rigor as the production code.

Creating and managing the [architecture](https://en.wikipedia.org/wiki/Software_architecture) of test software within a complex system is just as important as the core product architecture. Test drivers interact with the UUT, [test doubles](https://en.wikipedia.org/wiki/Test_double) and the unit test framework.

## Advantages and Disadvantages

[[edit](/w/index.php?title=Test-driven_development&action=edit&section=21)]

Test Driven Development (TDD) is a software development approach where tests are written before the actual code. It offers several advantages:

1. **Comprehensive Test Coverage**: TDD ensures that all new code is covered by at least one test, leading to more robust software.
2. **Enhanced Confidence in Code**: Developers gain greater confidence in the code's reliability and functionality.
3. **Enhanced Confidence in Tests**: As the tests are known to be failing without the proper implementation, we know that the tests actually tests the implementation correctly.
4. **Well-Documented Code**: The process naturally results in well-documented code, as each test clarifies the purpose of the code it tests.
5. **Requirement Clarity**: TDD encourages a clear understanding of requirements before coding begins.
6. **Facilitates Continuous Integration**: It integrates well with continuous integration processes, allowing for frequent code updates and testing.
7. **Boosts Productivity**: Many developers find that TDD increases their productivity.
8. **Reinforces Code Mental Model**: TDD helps in building a strong mental model of the code's structure and behavior.
9. **Emphasis on Design and Functionality**: It encourages a focus on the design, interface, and overall functionality of the program.
10. **Reduces Need for Debugging**: By catching issues early in the development process, TDD reduces the need for extensive debugging later.
11. **System Stability**: Applications developed with TDD tend to be more stable and less prone to bugs.

However, TDD is not without its drawbacks:

1. **Increased Code Volume**: Implementing TDD can result in a larger codebase as tests add to the total amount of code written.
2. **False Security from Tests**: A large number of passing tests can sometimes give a misleading sense of security regarding the code's robustness.
3. **Maintenance Overheads**: Maintaining a large suite of tests can add overhead to the development process.
4. **Time-Consuming Test Processes**: Writing and maintaining tests can be time-consuming.
5. **Testing Environment Set-Up**: TDD requires setting up and maintaining a suitable testing environment.
6. **Learning Curve**: It takes time and effort to become proficient in TDD practices.
7. **Overcomplication**: Designing code to cater for complex tests via TDD can lead to code that is more complicated than necessary.
8. **Neglect of Overall Design**: Focusing too narrowly on passing tests can sometimes lead to neglect of the bigger picture in software design.

A 2005 study found that using TDD meant writing more tests and, in turn, programmers who wrote more tests tended to be more productive. Hypotheses relating to code quality and a more direct correlation between TDD and productivity were inconclusive.

Programmers using pure TDD on new ("[greenfield](https://en.wikipedia.org/wiki/Greenfield_project)") projects reported they only rarely felt the need to invoke a [debugger](https://en.wikipedia.org/wiki/Debugger). Used in conjunction with a [version control system](https://en.wikipedia.org/wiki/Version_control_system), when tests fail unexpectedly, reverting the code to the last version that passed all tests may often be more productive than debugging.

Test-driven development offers more than just simple validation of correctness, but can also drive the design of a program. By focusing on the test cases first, one must imagine how the functionality is used by clients (in the first case, the test cases). So, the programmer is concerned with the interface before the implementation. This benefit is complementary to [design by contract](https://en.wikipedia.org/wiki/Design_by_contract) as it approaches code through test cases rather than through mathematical assertions or preconceptions.

Test-driven development offers the ability to take small steps when required. It allows a programmer to focus on the task at hand as the first goal is to make the test pass. Exceptional cases and error handling are not considered initially, and tests to create these extraneous circumstances are implemented separately. Test-driven development ensures in this way that all written code is covered by at least one test. This gives the programming team, and subsequent users, a greater level of confidence in the code.

While it is true that more code is required with TDD than without TDD because of the unit test code, the total code implementation time could be shorter based on a model by Müller and Padberg. Large numbers of tests help to limit the number of defects in the code. The early and frequent nature of the testing helps to catch defects early in the development cycle, preventing them from becoming endemic and expensive problems. Eliminating defects early in the process usually avoids lengthy and tedious debugging later in the project.

TDD can lead to more modularized, flexible, and extensible code. This effect often comes about because the methodology requires that the developers think of the software in terms of small units that can be written and tested independently and integrated together later. This leads to smaller, more focused classes, looser [coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)), and cleaner interfaces. The use of the [mock object](https://en.wikipedia.org/wiki/Mock_object) design pattern also contributes to the overall modularization of the code because this pattern requires that the code be written so that modules can be switched easily between mock versions for unit testing and "real" versions for deployment.

Because no more code is written than necessary to pass a failing test case, automated tests tend to cover every code path. For example, for a TDD developer to add an `else` branch to an existing `if` statement, the developer would first have to write a failing test case that motivates the branch. As a result, the automated tests resulting from TDD tend to be very thorough: they detect any unexpected changes in the code's behaviour. This detects problems that can arise where a change later in the development cycle unexpectedly alters other functionality.

Madeyski provided empirical evidence (via a series of laboratory experiments with over 200 developers) regarding the superiority of the TDD practice over the traditional Test-Last approach or testing for correctness approach, with respect to the lower coupling between objects (CBO). The mean effect size represents a medium (but close to large) effect on the basis of meta-analysis of the performed experiments which is a substantial finding. It suggests a better modularization (i.e., a more modular design), easier reuse and testing of the developed software products due to the TDD programming practice. Madeyski also measured the effect of the TDD practice on unit tests using branch coverage (BC) and mutation score indicator (MSI), which are indicators of the thoroughness and the fault detection effectiveness of unit tests, respectively. The effect size of TDD on branch coverage was medium in size and therefore is considered substantive effect. These findings have been subsequently confirmed by further, smaller experimental evaluations of TDD.

### Psychological benefits to programmer

[[edit](/w/index.php?title=Test-driven_development&action=edit&section=25)]

1. **Increased Confidence**: TDD allows programmers to make changes or add new features with confidence. Knowing that the code is constantly tested reduces the fear of breaking existing functionality. This safety net can encourage more innovative and creative approaches to problem-solving.
2. **Reduced Fear of Change, Reduced Stress**: In traditional development, changing existing code can be daunting due to the risk of introducing bugs. TDD, with its comprehensive test suite, reduces this fear, as tests will immediately reveal any problems caused by changes. Knowing that the codebase has a safety net of tests can reduce stress and anxiety associated with programming. Developers might feel more relaxed and open to experimenting and refactoring.
3. **Improved Focus**: Writing tests first helps programmers concentrate on requirements and design before writing the code. This focus can lead to clearer, more purposeful coding, as the developer is always aware of the goal they are trying to achieve.
4. **Sense of Achievement and Job Satisfaction**: Passing tests can provide a quick, regular sense of accomplishment, boosting morale. This can be particularly motivating in long-term projects where the end goal might seem distant. The combination of all these factors can lead to increased job satisfaction. When developers feel confident, focused, and part of a collaborative team, their overall job satisfaction can significantly improve.

Test-driven development does not perform sufficient testing in situations where full functional tests are required to determine success or failure, due to extensive use of unit tests. Examples of these are [user interfaces](https://en.wikipedia.org/wiki/User_interface), programs that work with [databases](https://en.wikipedia.org/wiki/Database), and some that depend on specific [network](https://en.wikipedia.org/wiki/Computer_network) configurations. TDD encourages developers to put the minimum amount of code into such modules and to maximize the logic that is in testable library code, using fakes and [mocks](https://en.wikipedia.org/wiki/Mock_object) to represent the outside world.

Management support is essential. Without the entire organization believing that test-driven development is going to improve the product, management may feel that time spent writing tests is wasted.

Unit tests created in a test-driven development environment are typically created by the developer who is writing the code being tested. Therefore, the tests may share blind spots with the code: if, for example, a developer does not realize that certain input parameters must be checked, most likely neither the test nor the code will verify those parameters. Another example: if the developer misinterprets the requirements for the module they are developing, the code and the unit tests they write will both be wrong in the same way. Therefore, the tests will pass, giving a false sense of correctness.

A high number of passing unit tests may bring a false sense of security, resulting in fewer additional [software testing](https://en.wikipedia.org/wiki/Software_testing) activities, such as [integration testing](https://en.wikipedia.org/wiki/Integration_testing) and [compliance testing](https://en.wikipedia.org/wiki/Compliance_testing).

Tests become part of the maintenance overhead of a project. Badly written tests, for example ones that include hard-coded error strings, are themselves prone to failure, and they are expensive to maintain. This is especially the case with [fragile tests](/w/index.php?title=Fragile_tests&action=edit&redlink=1). There is a risk that tests that regularly generate false failures will be ignored, so that when a real failure occurs, it may not be detected. It is possible to write tests for low and easy maintenance, for example by the reuse of error strings, and this should be a goal during the [code refactoring](https://en.wikipedia.org/wiki/Code_refactoring) phase described above.

Writing and maintaining an excessive number of tests costs time. Also, more-flexible modules (with limited tests) might accept new requirements without the need for changing the tests. For those reasons, testing for only extreme conditions, or a small sample of data, can be easier to adjust than a set of highly detailed tests.

The level of coverage and testing detail achieved during repeated TDD cycles cannot easily be re-created at a later date. Therefore, these original, or early, tests become increasingly precious as time goes by. The tactic is to fix it early. Also, if a poor architecture, a poor design, or a poor testing strategy leads to a late change that makes dozens of existing tests fail, then it is important that they are individually fixed. Merely deleting, disabling or rashly altering them can lead to undetectable holes in the test coverage.

First TDD Conference was held during July 2021. Conferences were recorded on [YouTube](https://en.wikipedia.org/wiki/YouTube)

1. **[^](#cite_ref-1)** Parsa, Saeed; Zakeri-Nasrabadi, Morteza; Turhan, Burak (2025-01-01). ["Testability-driven development: An improvement to the TDD efficiency"](https://www.sciencedirect.com/science/article/pii/S0920548924000461). *Computer Standards & Interfaces*. **91** 103877. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.csi.2024.103877](https://doi.org/10.1016%2Fj.csi.2024.103877). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0920-5489](https://search.worldcat.org/issn/0920-5489).
2. **[^](#cite_ref-Cworld92_2-0)** Lee Copeland (December 2001). ["Extreme Programming"](https://web.archive.org/web/20110605060209/http://www.computerworld.com/s/article/66192/Extreme_Programming?taxonomyId=063). Computerworld. Archived from [the original](http://www.computerworld.com/softwaretopics/software/appdev/story/0,10801,66192,00.html) on June 5, 2011. Retrieved January 11, 2011.
3. ^ [***a***](#cite_ref-Newkirk_3-0) [***b***](#cite_ref-Newkirk_3-1) Newkirk, JW and Vorontsov, AA. *Test-Driven Development in Microsoft .NET*, Microsoft Press, 2004.
4. **[^](#cite_ref-Feathers_4-0)** Feathers, M. Working Effectively with Legacy Code, Prentice Hall, 2004
5. **[^](#cite_ref-Quora2012May11_5-0)** Kent Beck (May 11, 2012). ["Why does Kent Beck refer to the "rediscovery" of test-driven development?"](https://www.quora.com/Why-does-Kent-Beck-refer-to-the-rediscovery-of-test-driven-development). Retrieved December 1, 2014.
6. ^ [***a***](#cite_ref-Beck_6-0) [***b***](#cite_ref-Beck_6-1) [***c***](#cite_ref-Beck_6-2) Beck, Kent (2002-11-08). *Test-Driven Development by Example*. Vaseem: Addison Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-14653-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-14653-3).
7. **[^](#cite_ref-7)** Kent Beck (May 11, 2012). ["Why does Kent Beck refer to the "rediscovery" of test-driven development?"](https://www.quora.com/Why-does-Kent-Beck-refer-to-the-rediscovery-of-test-driven-development). Retrieved December 1, 2014.
8. **[^](#cite_ref-8)** Beck, Kent (2023-12-11). ["Canon TDD"](https://tidyfirst.substack.com/p/canon-tdd). *Software Design: Tidy First?*. Retrieved 2024-10-22.
9. **[^](#cite_ref-9)** Leybourn, E. (2013) *Directing the Agile Organisation: A Lean Approach to Business Management*. London: IT Governance Publishing: 176-179.
10. **[^](#cite_ref-10)** Mohan, Gayathri. ["Full Stack Testing"](https://www.thoughtworks.com/en-us/insights/books/full-stack-testing). *www.thoughtworks.com*. Retrieved 2022-09-07.
11. ^ [***a***](#cite_ref-Pathfinder_Solutions_11-0) [***b***](#cite_ref-Pathfinder_Solutions_11-1) [***c***](#cite_ref-Pathfinder_Solutions_11-2) [***d***](#cite_ref-Pathfinder_Solutions_11-3) [***e***](#cite_ref-Pathfinder_Solutions_11-4) [***f***](#cite_ref-Pathfinder_Solutions_11-5) ["Effective TDD for Complex Embedded Systems Whitepaper"](https://web.archive.org/web/20160316153308/http://www.pathfindersolns.com/wp-content/uploads/2012/05/Effective-TDD-Executive-Summary.pdf) (PDF). Pathfinder Solutions. Archived from [the original](http://www.pathfindersolns.com/wp-content/uploads/2012/05/Effective-TDD-Executive-Summary.pdf) (PDF) on 2016-03-16.
12. **[^](#cite_ref-12)** ["Agile Test Driven Development"](http://www.agilesherpa.org/agile_coach/engineering_practices/test_driven_development/). Agile Sherpa. 2010-08-03. Retrieved 2012-08-14.`{{cite web}}`: CS1 maint: deprecated archival service ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_deprecated_archival_service))
13. **[^](#cite_ref-13)** Fowler, Martin (1999). [*Refactoring - Improving the design of existing code*](https://archive.org/details/isbn_9780201485677). Boston: Addison Wesley Longman, Inc. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-48567-2](https://en.wikipedia.org/wiki/Special:BookSources/0-201-48567-2).
14. **[^](#cite_ref-Koskela_14-0)** Koskela, L. "Test Driven: TDD and Acceptance TDD for Java Developers", Manning Publications, 2007
15. ^ [***a***](#cite_ref-pathfindersolns.com_15-0) [***b***](#cite_ref-pathfindersolns.com_15-1) [Test-Driven Development (TDD) for Complex Systems Introduction](https://www.youtube.com/watch?v=0BWSms3J40Y) on [YouTube](https://en.wikipedia.org/wiki/YouTube_video_(identifier)) by Pathfinder Solutions
16. **[^](#cite_ref-16)** *Lean-Agile Acceptance Test-Driven Development: Better Software Through Collaboration*. Boston: Addison Wesley Professional. 2011. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-71408-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-71408-4).
17. **[^](#cite_ref-17)** ["BDD"](https://web.archive.org/web/20150508045550/http://guide.agilealliance.org/guide/bdd.html). Archived from [the original](http://guide.agilealliance.org/guide/bdd.html) on 2015-05-08. Retrieved 2015-04-28.
18. **[^](#cite_ref-18)** ["Effective TDD for Complex, Embedded Systems Whitepaper"](https://web.archive.org/web/20130820134917/http://www.pathfindersolns.com/download-whitepaper?download=EffectiveTDDforComplexEmbeddedSystems.pdf&title=Effective_TDD_for_Complex_Embedded_Systems). Pathfinder Solutions. Archived from [the original](http://www.pathfindersolns.com/download-whitepaper/?download=EffectiveTDDforComplexEmbeddedSystems.pdf&title=Effective_TDD_for_Complex_Embedded_Systems) on 2013-08-20. Retrieved 2012-11-27.
19. **[^](#cite_ref-19)** [Advantages and Disadvantages of Test Driven Development - LASOFT](https://lasoft.org/blog/test-driven-development-tdd/)
20. **[^](#cite_ref-20)** Parsa, Saeed; Zakeri-Nasrabadi, Morteza; Turhan, Burak (2025-01-01). ["Testability-driven development: An improvement to the TDD efficiency"](https://www.sciencedirect.com/science/article/pii/S0920548924000461). *Computer Standards & Interfaces*. **91** 103877. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.csi.2024.103877](https://doi.org/10.1016%2Fj.csi.2024.103877). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0920-5489](https://search.worldcat.org/issn/0920-5489).
21. **[^](#cite_ref-21)** Erdogmus, Hakan; Morisio, Torchiano. ["On the Effectiveness of Test-first Approach to Programming"](https://web.archive.org/web/20141222180731/http://nparc.cisti-icist.nrc-cnrc.gc.ca/npsi/ctrl?action=shwart&index=an&req=5763742&lang=en). Proceedings of the IEEE Transactions on Software Engineering, 31(1). January 2005. (NRC 47445). Archived from [the original](http://nparc.cisti-icist.nrc-cnrc.gc.ca/npsi/ctrl?action=shwart&index=an&req=5763742&lang=en) on 2014-12-22. Retrieved 2008-01-14. "We found that test-first students on average wrote more tests and, in turn, students who wrote more tests tended to be more productive."
22. **[^](#cite_ref-22)** Proffitt, Jacob. ["TDD Proven Effective! Or is it?"](https://web.archive.org/web/20080206103552/http://theruntime.com/blogs/jacob/archive/2008/01/22/tdd-proven-effective-or-is-it.aspx). Archived from [the original](http://theruntime.com/blogs/jacob/archive/2008/01/22/tdd-proven-effective-or-is-it.aspx) on 2008-02-06. Retrieved 2008-02-21. "So TDD's relationship to quality is problematic at best. Its relationship to productivity is more interesting. I hope there's a follow-up study because the productivity numbers simply don't add up very well to me. There is an undeniable correlation between productivity and the number of tests, but that correlation is actually stronger in the non-TDD group (which had a single [outlier](https://en.wikipedia.org/wiki/Outlier) compared to roughly half of the TDD group being outside the 95% band)."
23. **[^](#cite_ref-23)** Llopis, Noel (20 February 2005). ["Stepping Through the Looking Glass: Test-Driven Game Development (Part 1)"](http://gamesfromwithin.com/stepping-through-the-looking-glass-test-driven-game-development-part-1). Games from Within. Retrieved 2007-11-01. "Comparing [TDD] to the non-test-driven development approach, you're replacing all the mental checking and debugger stepping with code that verifies that your program does exactly what you intended it to do."
24. **[^](#cite_ref-24)** Mayr, Herwig (2005). *Projekt Engineering Ingenieurmässige Softwareentwicklung in Projektgruppen* (2., neu bearb. Aufl. ed.). München: Fachbuchverl. Leipzig im Carl-Hanser-Verl. p. 239. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-446-40070-2](https://en.wikipedia.org/wiki/Special:BookSources/978-3-446-40070-2).
25. **[^](#cite_ref-25)** Müller, Matthias M.; Padberg, Frank. ["About the Return on Investment of Test-Driven Development"](https://web.archive.org/web/20171108092303/https://pdfs.semanticscholar.org/65d9/24ef1162b2f3c24bd15d627302887991b298.pdf) (PDF). Universität Karlsruhe, Germany. p. 6. [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [13905442](https://api.semanticscholar.org/CorpusID:13905442). Archived from [the original](https://pdfs.semanticscholar.org/65d9/24ef1162b2f3c24bd15d627302887991b298.pdf) (PDF) on 2017-11-08. Retrieved 2012-06-14.
26. ^ [***a***](#cite_ref-Madeyski_26-0) [***b***](#cite_ref-Madeyski_26-1) [***c***](#cite_ref-Madeyski_26-2) Madeyski, L. "Test-Driven Development - An Empirical Evaluation of Agile Practice", Springer, 2010, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-642-04287-4](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-04287-4), pp. 1-245. DOI: 978-3-642-04288-1
27. **[^](#cite_ref-27)** [The impact of Test-First programming on branch coverage and mutation score indicator of unit tests: An experiment.](http://madeyski.e-informatyka.pl/download/Madeyski10c.pdf) by L. Madeyski *Information & Software Technology 52(2): 169-184 (2010)*
28. **[^](#cite_ref-28)** [On the Effects of Pair Programming on Thoroughness and Fault-Finding Effectiveness of Unit Tests](http://madeyski.e-informatyka.pl/download/Madeyski07.pdf) by L. Madeyski *PROFES 2007: 207-221*
29. **[^](#cite_ref-29)** [Impact of pair programming on thoroughness and fault detection effectiveness of unit test suites.](http://madeyski.e-informatyka.pl/download/Madeyski08.pdf) by L. Madeyski *Software Process: Improvement and Practice 13(3): 281-295 (2008)*
30. **[^](#cite_ref-Pan%C4%8Dur_30-0)** M. Pančur and M. Ciglarič, "Impact of test-driven development on productivity, code and tests: A controlled experiment", Information and Software Technology, 2011, vol. 53, no. 6, pp. 557–573, DOI: 10.1016/j.infsof.2011.02.002
31. **[^](#cite_ref-Fucci_31-0)** D. Fucci, H. Erdogmus, B. Turhan, M. Oivo, and N. Juristo, "A dissection of the test-driven development process: does it really matter to test-first or to test-last?", IEEE Transactions on Software Engineering, 2017, vol. 43, no. 7, pp. 597–614, DOI: 10.1109/TSE.2016.2616877
32. **[^](#cite_ref-Tosun_32-0)** A. Tosun, O. Dieste Tubio, D. Fucci, S. Vegas, B. Turhan, H. Erdogmus, A. Santos, M. Oivo, K. Toro, J. Jarvinen, and N. Juristo, "An industry experiment on the effects of test-driven development on external quality and productivity", Empirical Software Engineering, 2016, vol. 22, pp. 1–43, DOI: 10.1007/s10664-016-9490-0
33. **[^](#cite_ref-Papis_33-0)** B. Papis, K. Grochowski, K. Subzda and K. Sijko, ["Experimental evaluation of test-driven development with interns working on a real industrial project"](https://ieeexplore.ieee.org/document/9207972), IEEE Transactions on Software Engineering, 2020, DOI: 10.1109/TSE.2020.3027522
34. **[^](#cite_ref-34)** 
    ["Problems with TDD"](http://dalkescientific.com/writings/diary/archive/2009/12/29/problems_with_tdd.html). Dalkescientific.com. 2009-12-29. Retrieved 2014-03-25.
35. **[^](#cite_ref-35)** 
    Hunter, Andrew (2012-10-19). ["Are Unit Tests Overused?"](https://www.simple-talk.com/dotnet/.net-framework/are-unit-tests-overused/). *Simple Talk*. Simple-talk.com. Retrieved 2014-03-25.
36. **[^](#cite_ref-36)** Loughran, Steve (November 6, 2006). ["Testing"](https://web.archive.org/web/20090220052052/http://people.apache.org/~stevel/slides/testing.pdf) (PDF). HP Laboratories. Archived from [the original](https://people.apache.org/~stevel/slides/testing.pdf) (PDF) on 2009-02-20. Retrieved 2009-08-12.
37. **[^](#cite_ref-37)** 
    ["Fragile Tests"](http://xunitpatterns.com/Fragile%20Test.html).
38. **[^](#cite_ref-38)** Bunardzic, Alex. ["First International Test Driven Development (TDD) Conference"](https://tddconference.github.io/). *TDD Conference*. Retrieved 2021-07-20.
39. **[^](#cite_ref-39)** [*First International TDD Conference - Saturday July 10, 2021*](https://www.youtube.com/watch?v=-_noEVCR__I), 10 July 2021, [archived](https://ghostarchive.org/varchive/youtube/20211221/-_noEVCR__I) from the original on 2021-12-21, retrieved 2021-07-20