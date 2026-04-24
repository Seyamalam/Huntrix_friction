# Continuous integration - Wikipedia

Source: https://en.wikipedia.org/wiki/Continuous_integration

---

Software development practice of building and testing frequently

[![](//upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Continuous_Integration.jpg/250px-Continuous_Integration.jpg)](https://en.wikipedia.org/wiki/File:Continuous_Integration.jpg)

Sketch of [flow diagram](https://en.wikipedia.org/wiki/Flow_diagram) for continuous integration

**Continuous integration** (**CI**) is the practice of integrating [source code](https://en.wikipedia.org/wiki/Source_code) changes frequently and ensuring that the integrated codebase is in a workable state. Typically, developers [merge](https://en.wikipedia.org/wiki/Merge_(version_control)) changes to an [integration branch](https://en.wikipedia.org/wiki/Branching_(revision_control)), and an automated system [builds](https://en.wikipedia.org/wiki/Software_build) and [tests](https://en.wikipedia.org/wiki/Software_testing) the [software system](https://en.wikipedia.org/wiki/Software_system).
Often, the automated process runs on each [commit](https://en.wikipedia.org/wiki/Commit_(version_control)) or runs on a schedule such as once a day. [Grady Booch](https://en.wikipedia.org/wiki/Grady_Booch) first proposed the term CI in [1991](https://en.wikipedia.org/wiki/Booch_method), although he did not advocate integrating multiple times a day, but later, CI came to include that aspect.

The earliest known work (1989) on continuous integration was the Infuse environment developed by G. E. Kaiser, D. E. Perry, and W. M. Schell.

In 1994, [Grady Booch](https://en.wikipedia.org/wiki/Grady_Booch) used the phrase continuous integration in *Object-Oriented Analysis and Design with Applications* (2nd edition) to explain how, when developing using micro processes, "internal releases represent a sort of continuous integration of the system, and exist to force closure of the micro process".

In 1997, [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck) and [Ron Jeffries](https://en.wikipedia.org/wiki/Ron_Jeffries) invented [extreme programming](https://en.wikipedia.org/wiki/Extreme_programming) (XP) while on the [Chrysler Comprehensive Compensation System](https://en.wikipedia.org/wiki/Chrysler_Comprehensive_Compensation_System) project, including continuous integration.[*[self-published source](https://en.wikipedia.org/wiki/Wikipedia:Verifiability#Self-published_sources)*] Beck published about continuous integration in 1998, emphasising the importance of face-to-face communication over technological support. In 1999, Beck elaborated more in his first full book on Extreme Programming. [CruiseControl](https://en.wikipedia.org/wiki/CruiseControl), one of the first open-source CI tools,[*[self-published source](https://en.wikipedia.org/wiki/Wikipedia:Verifiability#Self-published_sources)*] was released in 2001.

In 2010, Timothy Fitz published an article detailing how [IMVU](https://en.wikipedia.org/wiki/IMVU)'s engineering team had built and been using the first practical [CD](https://en.wikipedia.org/wiki/Continuous_delivery) system. While his post was originally met with skepticism, it quickly caught on and found widespread adoption as part of the [lean software development](https://en.wikipedia.org/wiki/Lean_software_development) methodology, also based on IMVU.

The core activities of CI are developers co-locate code changes in a shared, integration area frequently and that the resulting integrated codebase is verified for correctness. The first part generally involves merging changes to a common version control branch. The second part generally involves automated processes including: building, testing and many other processes.

Typically, a [server](https://en.wikipedia.org/wiki/Server_(computing)) builds from the integration area frequently, i.e. after each commit or periodically, like once a day. The server may perform [quality control](https://en.wikipedia.org/wiki/Quality_control) checks such as running unit tests and collect [software quality](https://en.wikipedia.org/wiki/Software_quality) metrics via processes such as static analysis and performance testing.

[Build automation](https://en.wikipedia.org/wiki/Build_automation) is a best practice. [Build automation tools](https://en.wikipedia.org/wiki/List_of_build_automation_software) automate building.

Proponents of CI recommend that a single command should have the capability of building the system.

Automation often includes automating the integration, which often includes [deployment](https://en.wikipedia.org/wiki/Software_deployment) into a production-like [environment](https://en.wikipedia.org/wiki/Deployment_environment). In many cases, the build script not only compiles binaries but also generates documentation, website pages, statistics and distribution media (such as Debian [DEB](https://en.wikipedia.org/wiki/Deb_(file_format)), Red Hat [RPM](https://en.wikipedia.org/wiki/RPM_Package_Manager) or Windows [MSI](https://en.wikipedia.org/wiki/Microsoft_Installer) files).

CI requires the version control system to support [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit); in other words, all of a developer's changes are handled as a single commit.

When making a code change, a [developer](https://en.wikipedia.org/wiki/Software_developer) creates a branch that is a copy of the current [codebase](https://en.wikipedia.org/wiki/Codebase). As other changes are committed to the [repository](https://en.wikipedia.org/wiki/Source_code_repository), this copy diverges from the latest version.

The longer development continues on a branch without merging to the integration branch, the greater the risk of multiple integration conflicts and failures when the developer branch is eventually merged back. When developers submit code to the repository they must first update their code to reflect the changes in the repository since they took their copy. The more changes the repository contains, the more work developers must do before submitting their own changes.

Eventually, the repository may become so different from the developers' baselines that they enter what is sometimes referred to as "merge hell", or "integration hell", where the time it takes to integrate exceeds the time it took to make their original changes.

Proponents of CI suggest that developers should
use [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) and to
ensure that all [unit tests](https://en.wikipedia.org/wiki/Unit_testing) pass locally before committing to the integration branch so that one developer's work does not break another developer's copy.

Incomplete features can be disabled before committing, using [feature toggles](https://en.wikipedia.org/wiki/Feature_toggle).

### Continuous delivery and continuous deployment

[[edit](/w/index.php?title=Continuous_integration&action=edit&section=7)]

[Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery) ensures the software checked in on an integration branch is always in a state that can be deployed to users, and [continuous deployment](https://en.wikipedia.org/wiki/Continuous_deployment) automates the deployment process.

*Continuous delivery* and *continuous deployment* are often performed in conjunction with CI and together form a CI/CD pipeline.

Proponents of CI recommend storing all files and information needed for building in [version control](https://en.wikipedia.org/wiki/Version_control) (for [git](https://en.wikipedia.org/wiki/Git) a *repository*), and that the system should be buildable from a fresh checkout and not require additional dependencies.

[Martin Fowler](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)) recommends that all developers commit to the same integration branch.

Developers can reduce the effort of resolving conflicting changes by synchronizing changes with each other frequently, at least daily. Checking in a week's worth of work risks conflict both in likelihood of occurrence and complexity to resolve. Relatively small conflicts are significantly easier to resolve than larger ones. Integrating (committing) changes at least once a day is considered good practice, and more often better.

[Building daily](https://en.wikipedia.org/wiki/Daily_build), if not more often, is generally recommended.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

### Every commit should be built

[[edit](/w/index.php?title=Continuous_integration&action=edit&section=11)]

The system should build commits to the current working version to verify that they integrate correctly. A common practice is to use Automated Continuous Integration, although this may be done manually. Automated continuous integration employs a continuous integration server or [daemon](https://en.wikipedia.org/wiki/Daemon_(computer_software)) to monitor the [revision control system](https://en.wikipedia.org/wiki/Revision_control) for changes, then automatically run the build process.

### Every bug-fix commit should come with a test case

[[edit](/w/index.php?title=Continuous_integration&action=edit&section=12)]

When fixing a bug, it is a good practice to push a test case that reproduces the bug. This prevents the fix from being reverted and the bug from reappearing, which is known as a regression.

### Keep the build fast

[[edit](/w/index.php?title=Continuous_integration&action=edit&section=13)]

The build needs to complete rapidly so that if there is a problem with integration, it is quickly identified.

### Test in a clone of the production environment

[[edit](/w/index.php?title=Continuous_integration&action=edit&section=14)]

Having a [test environment](https://en.wikipedia.org/wiki/Test_environment) can lead to failures in tested systems when they deploy in the [production environment](https://en.wikipedia.org/wiki/Production_environment) because the production environment may differ from the test environment in a significant way. However, building a replica of a production environment is cost-prohibitive. Instead, the test environment or a separate [pre-production environment](https://en.wikipedia.org/wiki/Pre-production_environment) ("staging") should be built to be a scalable version of the production environment to alleviate costs while maintaining [technology stack](https://en.wikipedia.org/wiki/Technology_stack) composition and nuances. Within these test environments, [service virtualisation](https://en.wikipedia.org/wiki/Service_virtualisation) is commonly used to obtain on-demand access to dependencies (e.g., APIs, third-party applications, services, [mainframes](https://en.wikipedia.org/wiki/Mainframe_computer), etc.) that are beyond the team's control, still evolving, or too complex to configure in a virtual test lab.

### Make it easy to get the latest deliverables

[[edit](/w/index.php?title=Continuous_integration&action=edit&section=15)]

Making builds readily available to stakeholders and testers can reduce the amount of rework necessary when rebuilding a feature that doesn't meet requirements. Additionally, early testing reduces the chances that defects survive until deployment. Finding errors earlier can reduce the amount of work necessary to resolve them.

All programmers should start the day by updating the project from the repository. That way, they will all stay up to date.

### Everyone can see the results of the latest build

[[edit](/w/index.php?title=Continuous_integration&action=edit&section=16)]

It should be easy to find out whether the build breaks and, if so, who made the relevant change and what that change was.

### Automate deployment

[[edit](/w/index.php?title=Continuous_integration&action=edit&section=17)]

Most CI systems allow the running of scripts after a build finishes. In most situations, it is possible to write a script to deploy the application to a live test server that everyone can look at. A further advance in this way of thinking is [continuous deployment](https://en.wikipedia.org/wiki/Continuous_deployment), which calls for the software to be deployed directly into production, often with additional automation to prevent defects or regressions.

CI benefits include:

* Facilitates detecting [bugs](https://en.wikipedia.org/wiki/Software_bug) earlier
* Reduces effort to find cause of bugs; if a CI test fails then the changes since the last good build must have caused the failure, and if built after each change, then exactly one change is the cause
* Avoids the chaos of integrating many changes
* When a test fails or a bug is found, reverting the codebase to a good state results in fewer lost changes
* Frequent availability of a known-good build for testing, demo, and release
* Frequent code commit encourages modular, less complex code
* Quick feedback on system-wide impact of code changes
* Supports collection of [software metrics](https://en.wikipedia.org/wiki/Software_metrics) such as [code coverage](https://en.wikipedia.org/wiki/Code_coverage), [code complexity](https://en.wikipedia.org/wiki/Code_complexity)

Risks of CI include:

* [Build system](https://en.wikipedia.org/wiki/Build_system) setup requires effort
* Writing and maintaining an automated test suite requires effort
* Value added depends on the quality of tests
* High build latency (sitting in queue) limits value
* Implies that incomplete code should not be integrated which is counter to some developer's preferred practice
* Safety and mission-critical development assurance (e.g., [DO-178C](https://en.wikipedia.org/wiki/DO-178C), [ISO 26262](https://en.wikipedia.org/wiki/ISO_26262)) require documentation and review which may be difficult to achieve

## Best practices for cloud systems

[[edit](/w/index.php?title=Continuous_integration&action=edit&section=20)]

The following practices can enhance productivity of [pipelines](https://en.wikipedia.org/wiki/CI/CD), especially in systems hosted in the [cloud](https://en.wikipedia.org/wiki/Cloud_computing):

* **Number of Pipelines**: Small teams can be more productive by having one [repository](https://en.wikipedia.org/wiki/Repository_(version_control)) and one pipeline. In contrast, larger organizations may have separate repositories and pipelines for each team or even separate repositories and pipelines for each service within a team.
* **Permissions**: In the context of [pipeline-related](https://en.wikipedia.org/wiki/CI/CD) permissions, adhering to the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) can be challenging due to the dynamic nature of [architecture](https://en.wikipedia.org/wiki/Software_architecture). Administrators may opt for more permissive permissions while implementing compensating [security controls](https://en.wikipedia.org/wiki/Security_controls) to minimize the blast radius.

1. ^ [***a***](#cite_ref-martinfowler_1-0) [***b***](#cite_ref-martinfowler_1-1) [***c***](#cite_ref-martinfowler_1-2) Fowler, Martin (1 May 2006). ["Continuous Integration"](http://martinfowler.com/articles/continuousIntegration.html). Retrieved 9 January 2014.
2. **[^](#cite_ref-2)** [Booch, Grady](https://en.wikipedia.org/wiki/Grady_Booch) (1991). [*Object Oriented Design: With Applications*](https://books.google.com/books?id=w5VQAAAAMAAJ&q=continuous+integration+inauthor:grady+inauthor:booch). [Benjamin Cummings](https://en.wikipedia.org/wiki/Benjamin_Cummings). p. 209. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780805300918](https://en.wikipedia.org/wiki/Special:BookSources/9780805300918). Retrieved 18 August 2014.
3. **[^](#cite_ref-3)** Beck, K. (1999). "Embracing change with extreme programming". *Computer*. **32** (10): 70–77. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/2.796139](https://doi.org/10.1109%2F2.796139). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0018-9162](https://search.worldcat.org/issn/0018-9162).
4. **[^](#cite_ref-4)** Kaiser, G. E.; Perry, D. E.; Schell, W. M. (1989). *Infuse: fusing integration test management with change management*. Proceedings of the Thirteenth Annual International Computer Software & Applications Conference. Orlando, Florida. pp. 552–558. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.101.3770](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.101.3770). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/CMPSAC.1989.65147](https://doi.org/10.1109%2FCMPSAC.1989.65147).
5. **[^](#cite_ref-5)** Booch, Grady (December 1998). [*Object-Oriented Analysis and Design with applications*](https://web.archive.org/web/20190819035559/http://www.cvauni.edu.vn/imgupload_dinhkem/file/pttkht/object-oriented-analysis-and-design-with-applications-2nd-edition.pdf) (PDF) (2nd ed.). Archived from [the original](http://www.cvauni.edu.vn/imgupload_dinhkem/file/pttkht/object-oriented-analysis-and-design-with-applications-2nd-edition.pdf) (PDF) on 19 August 2019. Retrieved 2 December 2014.
6. **[^](#cite_ref-6)** Beck, Kent (28 March 1998). ["Extreme Programming: A Humanistic Discipline of Software Development"](https://books.google.com/books?id=YBC5xD08NREC&q=%22Extreme+Programming%3A+A+Humanistic+Discipline+of+Software+Development%22&pg=PA4). *Fundamental Approaches to Software Engineering: First International Conference*. Vol. 1. Lisbon, Portugal: [Springer](https://en.wikipedia.org/wiki/Springer_Science%2BBusiness_Media). p. 4. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9783540643036](https://en.wikipedia.org/wiki/Special:BookSources/9783540643036).
7. **[^](#cite_ref-Beck,_Extreme_Programming_Explained_7-0)** [Beck, Kent](https://en.wikipedia.org/wiki/Kent_Beck) (1999). [*Extreme Programming Explained*](https://archive.org/details/extremeprogrammi00beck). Addison-Wesley Professional. p. [97](https://archive.org/details/extremeprogrammi00beck/page/97). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-61641-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-61641-5).
8. **[^](#cite_ref-8)** ["A Brief History of DevOps, Part III: Automated Testing and Continuous Integration"](https://circleci.com/blog/a-brief-history-of-devops-part-iii-automated-testing-and-continuous-integration/). *CircleCI*. 1 February 2018. Retrieved 19 May 2018.
9. **[^](#cite_ref-9)** Sane, Parth (2021), "A Brief Survey of Current Software Engineering Practices in Continuous Integration and Automated Accessibility Testing", *2021 Sixth International Conference on Wireless Communications, Signal Processing and Networking (WiSPNET)*, pp. 130–134, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2103.00097](https://arxiv.org/abs/2103.00097), [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/WiSPNET51692.2021.9419464](https://doi.org/10.1109%2FWiSPNET51692.2021.9419464), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-6654-4086-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-6654-4086-8), [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [232076320](https://api.semanticscholar.org/CorpusID:232076320)
10. **[^](#cite_ref-10)** Radigan, Dan. ["Continuous integration"](https://www.atlassian.com/agile/continuous-integration). *Atlassian Agile Coach*.
11. **[^](#cite_ref-Brauneis,_[OSLC]_Possible_new_Working_Group_-_Automation_11-0)** Brauneis, David (1 January 2010). ["[OSLC] Possible new Working Group – Automation"](https://web.archive.org/web/20180901173720/http://open-services.net/pipermail/community_open-services.net/2010-January/000214.html). *open-services.net Community* (Mailing list). Archived from [the original](http://open-services.net/pipermail/community_open-services.net/2010-January/000214.html) on 1 September 2018. Retrieved 16 February 2010.
12. **[^](#cite_ref-Taylor,_Rails_Deployment_and_Automation_with_ShadowPuppet_and_Capistrano_12-0)** Taylor, Bradley. ["Rails Deployment and Automation with ShadowPuppet and Capistrano"](http://blog.railsmachine.com/articles/2009/02/10/rails-deployment-and-automation-with-shadowpuppet-and-capistrano/). *Rails machine* ([blog](https://en.wikipedia.org/wiki/World_Wide_Web)). Retrieved 16 February 2010.`{{cite web}}`: CS1 maint: deprecated archival service ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_deprecated_archival_service))
13. **[^](#cite_ref-13)** Duvall, Paul M. (2007). *Continuous Integration. Improving Software Quality and Reducing Risk*. Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-33638-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-33638-5).
14. **[^](#cite_ref-Cunningham,_Integration_Hell_14-0)** [Cunningham, Ward](https://en.wikipedia.org/wiki/Ward_Cunningham) (5 August 2009). ["Integration Hell"](http://c2.com/cgi/wiki?IntegrationHell). *WikiWikiWeb*. Retrieved 19 September 2009.
15. **[^](#cite_ref-15)** ["What is Continuous Integration?"](https://aws.amazon.com/devops/continuous-integration/). *Amazon Web Services*.
16. **[^](#cite_ref-Fowler,_Continuous_Integration_practices_16-0)** [Fowler, Martin](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)). ["Practices"](http://martinfowler.com/articles/continuousIntegration.html#PracticesOfContinuousIntegration). *Continuous Integration* (article). Retrieved 29 November 2015.
17. **[^](#cite_ref-17)** Paul M. Duvall; Steve Matyas; [Andrew Glover](https://en.wikipedia.org/wiki/Andrew_Glover) (2007). *Continuous Integration: Improving Software Quality and Reducing Risk*. [Addison-Wesley Professional](https://en.wikipedia.org/wiki/Addison-Wesley_Professional). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-33638-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-33638-5).
18. **[^](#cite_ref-18)** Ries, Eric (30 March 2009). ["Continuous deployment in 5 easy steps"](http://radar.oreilly.com/2009/03/continuous-deployment-5-eas.html). *Radar*. O’Reilly. Retrieved 10 January 2013.
19. **[^](#cite_ref-19)** Fitz, Timothy (10 February 2009). ["Continuous Deployment at IMVU: Doing the impossible fifty times a day"](http://timothyfitz.wordpress.com/2009/02/10/continuous-deployment-at-imvu-doing-the-impossible-fifty-times-a-day/). Wordpress. Retrieved 10 January 2013.
20. **[^](#cite_ref-20)** Junpeng, Jiang; Zhu, Can; Zhang, Xiaofang (July 2020). ["An Empirical Study on the Impact of Code Contributor on Code Smell"](https://qrs20.techconf.org/download/QRS-IJPE/12_An%20Empirical%20Study%20on%20the%20Impact%20of%20Code%20Contributor%20on%20Code%20Smell.pdf) (PDF). *International Journal of Performability Engineering*. **16** (7): 1067–1077. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.23940/ijpe.20.07.p9.10671077](https://doi.org/10.23940%2Fijpe.20.07.p9.10671077). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [222588815](https://api.semanticscholar.org/CorpusID:222588815).
21. **[^](#cite_ref-21)** Laukkanen, Eero (2016). ["Problems, causes and solutions when adopting continuous delivery—A systematic literature review"](https://doi.org/10.1016%2Fj.infsof.2016.10.001). *Information and Software Technology*. **82**: 55–79. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.infsof.2016.10.001](https://doi.org/10.1016%2Fj.infsof.2016.10.001).
22. ^ [***a***](#cite_ref-:1_22-0) [***b***](#cite_ref-:1_22-1) [***c***](#cite_ref-:1_22-2) Debbiche, Adam. ["Assessing challenges of continuous integration in the context of software requirements breakdown: a case study"](http://publications.lib.chalmers.se/records/fulltext/220573/220573.pdf) (PDF).
23. **[^](#cite_ref-23)** *Serverless Architectures on AWS*. Manning. 29 March 2022. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1617295423](https://en.wikipedia.org/wiki/Special:BookSources/978-1617295423).
24. **[^](#cite_ref-24)** *Pipeline as Code Continuous Delivery with Jenkins, Kubernetes, and Terraform*. Manning. 23 November 2021. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781638350378](https://en.wikipedia.org/wiki/Special:BookSources/9781638350378).
25. **[^](#cite_ref-25)** Humble, Jez; Farley, David (27 July 2010). *Continuous Delivery Reliable Software Releases Through Build, Test, and Deployment Automation*. Pearson Education. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780321670229](https://en.wikipedia.org/wiki/Special:BookSources/9780321670229).