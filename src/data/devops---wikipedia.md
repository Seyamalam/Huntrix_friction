# DevOps - Wikipedia

Source: https://en.wikipedia.org/wiki/DevOps

---

Integration of software development and operations

[![](//upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Devops.png/250px-Devops.png)](//en.wikipedia.org/wiki/File:Devops.png)

Illustration showing DevOps as the intersection of Development (Software Engineering), Technology Operations and Quality Assurance (QA)

**DevOps** is the integration and automation of [software development](//en.wikipedia.org/wiki/Software_development) and [information technology operations](//en.wikipedia.org/wiki/Information_technology_operations). DevOps encompasses the tasks necessary for [software development](//en.wikipedia.org/wiki/Software_development) and can lead to both shortening development time and improving the [development life cycle](//en.wikipedia.org/wiki/Systems_development_life_cycle). According to Neal Ford, DevOps, particularly through [continuous delivery](//en.wikipedia.org/wiki/Continuous_delivery), employs the "bring the pain forward" principle, tackling tough tasks early, fostering automation, and enabling swift issue detection. [Software programmers](//en.wikipedia.org/wiki/Software_programmer) and [architects](//en.wikipedia.org/wiki/Software_architect) should use [fitness functions](//en.wikipedia.org/wiki/Fitness_function) to keep their software in check.

Although debated, DevOps is characterized by key principles: shared ownership, workflow automation, and rapid feedback.
From an academic perspective, [Len Bass](//en.wikipedia.org/wiki/Len_Bass), Ingo Weber, and Liming Zhu—three computer science researchers from the [CSIRO](//en.wikipedia.org/wiki/CSIRO) and the [Software Engineering Institute](//en.wikipedia.org/wiki/Software_Engineering_Institute)—suggested defining DevOps as "a set of practices intended to reduce the time between committing a change to a system and the change being placed into normal production, while ensuring high quality".
However, the term is used in multiple contexts. At its most successful, DevOps is a combination of specific practices, culture change, and tools.

Proposals to combine software development methodologies with deployment and operations concepts first appeared in the late 80s and early 90s.

In 2008, Tim O’Reilly supported Steve Souders and Jesse Robbins in creating and co-chairing the first O'Reilly Velocity Conference, bringing the web performance and operations communities together.

In 2009, the first conference named DevOps Days was held in [Ghent](//en.wikipedia.org/wiki/Ghent), Belgium. The conference was founded by Belgian consultant, project manager and agile practitioner Patrick Debois. The conference has now spread to other countries.

In 2012, a report called "State of DevOps" was first published by Alanna Brown at [Puppet Labs](//en.wikipedia.org/wiki/Puppet_(software)).

In 2014, the annual State of DevOps report was published by [Nicole Forsgren](//en.wikipedia.org/wiki/Nicole_Forsgren), [Gene Kim](//en.wikipedia.org/wiki/Gene_Kim), Jez Humble and others. They stated that the adoption of DevOps was accelerating. Also in 2014, Lisa Crispin and Janet Gregory wrote the book More Agile Testing, containing a chapter on testing and DevOps.

In 2016, the [DORA](//en.wikipedia.org/wiki/DevOps_Research_and_Assessment) metrics for throughput (deployment frequency, lead time for changes), and stability (mean time to recover, change failure rate) were published in the State of DevOps report. However, the research methodology and metrics were criticized by experts. In response to these criticisms, the 2023 State of DevOps report published changes that updated the stability metric "mean time to recover" to "failed deployment recovery time" acknowledging the confusion the former metric has caused.

[DevOps Research and Assessment](//en.wikipedia.org/wiki/DevOps_Research_and_Assessment) (DORA) has developed a set of metrics which are intended to measure software development efficiency and reliability. These metrics include:

* Deployment Frequency: Time between code deployments.
* Mean Lead Time for Changes: Time between code commit and deployment.
* Change Failure Rate: Percentage of deployments causing production issues.
* Failed Deployment Recovery Time (formerly Mean Time To Recover)
* Reliability (added in 2021): Measures operational performance, focusing on availability and adherence to user expectations.

## Relationship to other approaches

[[edit](//en.wikipedia.org/w/index.php?title=DevOps&action=edit&section=3)]

Many of the ideas fundamental to DevOps practices are similar to other well-known practices, such as [Lean](//en.wikipedia.org/wiki/Lean_manufacturing) and [Deming's](//en.wikipedia.org/wiki/W._Edwards_Deming) [Plan-Do-Check-Act](//en.wikipedia.org/wiki/PDCA) cycle, through to [The Toyota Way](//en.wikipedia.org/wiki/The_Toyota_Way) and the [Agile](//en.wikipedia.org/wiki/Agile_software_development) approach of breaking down components and batch sizes. Contrary to the "top-down" prescriptive approach and rigid framework of [ITIL](//en.wikipedia.org/wiki/ITIL) in the 1990s, DevOps is "bottom-up" and flexible, having been created by software engineers for their own needs.

### Platform engineering

[[edit](//en.wikipedia.org/w/index.php?title=DevOps&action=edit&section=4)]

**Platform engineering** is an emerging discipline within software engineering that supports DevOps by building and maintaining internal developer platforms (IDPs). These platforms provide standardized tools and reusable components—such as CI/CD pipelines, infrastructure provisioning, observability, and security controls—to streamline software delivery and reduce the cognitive load on developers. The goal is to enable self-service capabilities, improve productivity, and ensure consistency across development and operations teams.

The motivations for what has become modern DevOps and several standard DevOps practices such as automated build and test, [continuous integration](//en.wikipedia.org/wiki/Continuous_integration), and [continuous delivery](//en.wikipedia.org/wiki/Continuous_delivery) originated in the Agile world, which dates (informally) to the 1990s, and formally to 2001. Agile development teams using methods such as [extreme programming](//en.wikipedia.org/wiki/Extreme_programming) couldn't "satisfy the customer through early and continuous delivery of valuable software" unless they took responsibility for operations and infrastructure for their applications, automating much of that work. Because [Scrum](//en.wikipedia.org/wiki/Scrum_(software_development)) emerged as the dominant Agile framework in the early 2000s and it omitted the engineering practices that were part of many Agile teams, the movement to automate operations and infrastructure functions splintered from Agile and expanded into what has become modern DevOps. Today, DevOps focuses on the deployment of developed software, whether it is developed using Agile oriented methodologies or other methodologies.

ArchOps presents an extension for DevOps practice, starting from [software architecture](//en.wikipedia.org/wiki/Software_architecture) artifacts instead of source code for operational deployment. ArchOps states that architectural models are first-class entities in software development, deployment, and operations.

### Continuous Integration and Delivery (CI/CD)

[[edit](//en.wikipedia.org/w/index.php?title=DevOps&action=edit&section=7)]

Automation is a core principle for achieving DevOps success and CI/CD is a critical component. Plus, improved collaboration and communication between and within teams helps achieve faster [time to market](//en.wikipedia.org/wiki/Time_to_market), with reduced risks.

Database DevOps applies DevOps and [CI/CD](//en.wikipedia.org/wiki/CI/CD) principles directly to database development and operations. Integrating schema changes, migrations, reference data, and other data-layer updates into the same version-controlled and automated pipelines used for application code enables more reliable deployments and better coordination between application and data changes.

Typical practices documented in both research and industry benchmarks include placing database schema definitions under version control, applying automated tests (such as unit tests or migration validation) to database changes, and deploying those changes through CI/CD pipelines. These practices reduce "schema drift" between development and production systems and lower the risk of deployment failures.

Mobile DevOps is a set of practices that applies the principles of DevOps specifically to the development of mobile applications. Traditional DevOps focuses on streamlining the [software development process](//en.wikipedia.org/wiki/Software_development_process) in general, but [mobile development](//en.wikipedia.org/wiki/Mobile_app_development) has its own unique challenges that require a tailored approach. Mobile DevOps is not simply a branch of DevOps specific to mobile app development, but rather an extension and reinterpretation of the DevOps philosophy tailored to the mobile domain's specific requirements.

### Site-reliability engineering

[[edit](//en.wikipedia.org/w/index.php?title=DevOps&action=edit&section=10)]

In 2003, [Google](//en.wikipedia.org/wiki/Google) developed [site reliability engineering](//en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), an approach for releasing new features continuously into large-scale high-availability systems while maintaining high-quality end-user experience. While SRE predates the development of DevOps, they are generally viewed as being related to each other. Some of the original authors of the discipline consider SRE as an implementation of DevOps.

### Toyota production system, lean thinking, kaizen

[[edit](//en.wikipedia.org/w/index.php?title=DevOps&action=edit&section=11)]

Toyota production system, also known under the acronym TPS, was the inspiration for [lean thinking](//en.wikipedia.org/wiki/Lean_thinking) with its focus on [continuous improvement](//en.wikipedia.org/wiki/Continuous_improvement_process), [kaizen](//en.wikipedia.org/wiki/Kaizen), flow and small batches. The [andon cord principle](//en.wikipedia.org/wiki/Andon_(manufacturing)) to create fast feedback, swarm and solve problems stems from TPS.

### DevSecOps, shifting security left

[[edit](//en.wikipedia.org/w/index.php?title=DevOps&action=edit&section=12)]

*DevSecOps* is an augmentation of DevOps to allow for security practices to be integrated into the DevOps approach. Contrary to a traditional centralized security team model, each delivery team is empowered to factor in the correct security controls into their software delivery. Security practices and testing are performed earlier in the development lifecycle, hence the term "[shift left](//en.wikipedia.org/wiki/Shift-left_testing)". Security is tested in three main areas: static, software composition, and dynamic.

Checking software statically via [static application security testing](//en.wikipedia.org/wiki/Static_application_security_testing) (SAST) is [white-box testing](//en.wikipedia.org/wiki/White-box_testing) with special focus on security. Depending on the programming language, different tools are needed to do such static code analysis. The software composition is analyzed, especially libraries, and the version of each component is checked against vulnerability lists published by [CERT](//en.wikipedia.org/wiki/Computer_emergency_response_team) and other expert groups. When giving software to clients, library licenses and their match to the license of the software distributed are in focus, especially [copyleft](//en.wikipedia.org/wiki/Copyleft) licenses.

In dynamic testing, also called [black-box testing](//en.wikipedia.org/wiki/Black-box_testing), software is tested without knowing its inner functions. In DevSecOps this practice may be referred to as [dynamic application security testing](//en.wikipedia.org/wiki/Dynamic_application_security_testing) (DAST) or penetration testing. The goal is early detection of defects including [cross-site scripting](//en.wikipedia.org/wiki/Cross-site_scripting) and [SQL injection](//en.wikipedia.org/wiki/SQL_injection) vulnerabilities.

Often, detected defects from static and dynamic testing are triaged and categorized under taxonomies like the [Common Weakness Enumeration (CWE)](//en.wikipedia.org/wiki/Common_Weakness_Enumeration), maintained by the [Mitre Corporation](//en.wikipedia.org/wiki/Mitre_Corporation). This facilitates the prioritization of security bug fixes and also allows frequently recurring weaknesses to be fixed with recommended mitigations. As of 2025, CWE maintained its own list of frequently-occurring weaknesses, the CWE Top 25. In addition, organizations like [Open Worldwide Application Security Project (OWASP)](//en.wikipedia.org/wiki/OWASP) maintain lists of industry-wide frequently recurring software weaknesses.

DevSecOps has also been described as a cultural shift involving a holistic approach to producing secure software by integrating security education, security by design, and security automation.

DevOps initiatives can change how a company's [operations](//en.wikipedia.org/wiki/Information_technology_operations), [developers](//en.wikipedia.org/wiki/Software_developer), and [testers](//en.wikipedia.org/wiki/Software_testing) collaborate during the development and delivery processes.

DevOps attempts to support consistency, reliability, and efficiency within an organization. This is usually enabled by a shared code repository or version control. Many organizations use [version control](//en.wikipedia.org/wiki/Version_control) to facilitate DevOps automation technologies like [virtual machines](//en.wikipedia.org/wiki/Virtual_machines), [containerization](//en.wikipedia.org/wiki/Containerization_(computing)) (or [OS-level virtualization](//en.wikipedia.org/wiki/OS-level_virtualization)), and [CI/CD](//en.wikipedia.org/wiki/CI/CD), with the [Git](//en.wikipedia.org/wiki/Git) version control system and the [GitHub](//en.wikipedia.org/wiki/GitHub) platform referenced as examples.

GitOps evolved from DevOps. The specific state of deployment configuration is [version-controlled](//en.wikipedia.org/wiki/Version-control). Because the most popular version-control system is Git, the GitOps approach has been named after Git. Changes to configuration can be managed using [code review](//en.wikipedia.org/wiki/Code_review) practices, and can be rolled back using version-controlling. Essentially, all of the changes to a code are tracked, bookmarked, and making any updates to the history can be made easier. As explained by [Red Hat](//en.wikipedia.org/wiki/Red_Hat), "visibility to change means the ability to trace and reproduce issues quickly, improving overall security."

## Best practices for cloud systems

[[edit](//en.wikipedia.org/w/index.php?title=DevOps&action=edit&section=15)]

The following practices can enhance productivity of DevOps [pipelines](//en.wikipedia.org/wiki/CI/CD), especially in systems hosted in the [cloud](//en.wikipedia.org/wiki/Cloud_computing):

* **Number of Pipelines**: Small teams can be more productive by having one [repository](//en.wikipedia.org/wiki/Repository_(version_control)) and one pipeline. In contrast, larger organizations may have separate repositories and pipelines for each team or even separate repositories and pipelines for each service within a team.
* **Permissions**: In the context of [pipeline-related](//en.wikipedia.org/wiki/CI/CD) permissions, adhering to the [principle of least privilege](//en.wikipedia.org/wiki/Principle_of_least_privilege) can be challenging due to the dynamic nature of [architecture](//en.wikipedia.org/wiki/Software_architecture). Administrators may opt for more permissive permissions while implementing compensating [security controls](//en.wikipedia.org/wiki/Security_controls) to minimize the blast radius.

**DataOps** is a set of practices, processes and technologies that combines an integrated and process-oriented perspective on data with automation and methods from agile [software engineering](//en.wikipedia.org/wiki/Software_engineering) to improve quality, speed, and collaboration and promote a culture of continuous improvement in the area of [data analytics](//en.wikipedia.org/wiki/Data_analysis). While DataOps began as a set of best practices, it has now matured to become a new and independent approach to data analytics. DataOps applies to the entire data lifecycle from data preparation to reporting, and recognizes the interconnected nature of the data analytics team and information technology operations.

DataOps incorporates the [Agile](//en.wikipedia.org/wiki/Agile_software_development) methodology to shorten the cycle time of analytics development in alignment with business goals.

DevOps focuses on [continuous delivery](//en.wikipedia.org/wiki/Continuous_delivery) by leveraging on-demand IT resources and by automating test and deployment of software. This merging of software *development* and IT *operations* has improved velocity, quality, predictability and scale of software engineering and deployment. Borrowing methods from DevOps, DataOps seeks to bring these same improvements to data analytics.

DataOps utilizes [statistical process control](//en.wikipedia.org/wiki/Statistical_process_control) (SPC) to monitor and control the data analytics pipeline. With SPC in place, the data flowing through an operational system is constantly monitored and verified to be working. If an anomaly occurs, the data analytics team can be notified through an automated alert.

DataOps is not tied to a particular technology, architecture, tool, language or framework. Tools that support DataOps promote collaboration, orchestration, quality, security, access and ease of use.

DataOps was first introduced by Lenny Liebmann, Contributing Editor, [InformationWeek](//en.wikipedia.org/wiki/InformationWeek), in a blog post on the IBM Big Data & Analytics Hub titled "3 reasons why DataOps is essential for [big data](//en.wikipedia.org/wiki/Big_data) success" on June 19, 2014. The term DataOps was later popularized by Andy Palmer of Tamr and Steph Locke. DataOps is a moniker for "Data Operations." 2017 was a significant year for DataOps with significant ecosystem development, analyst coverage, increased keyword searches, surveys, publications, and open source projects. Gartner named DataOps on the Hype Cycle for [Data Management](//en.wikipedia.org/wiki/Data_management) in 2018.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Dataops.gif/250px-Dataops.gif)](//en.wikipedia.org/wiki/File:Dataops.gif)

DataOps heritage from DevOps, Agile, and manufacturing

### Goals and philosophy

[[edit](//en.wikipedia.org/w/index.php?title=DevOps&action=edit&section=18)]

The volume of data is forecast to grow at a rate of 32% CAGR to 180 Zettabytes by the year 2025 (Source: IDC). DataOps seeks to provide the tools, processes, and organizational structures to cope with this significant increase in data. Automation streamlines data preboarding, ingestion, and the management of large integrated databases, freeing the data team to develop new analytics in a more efficient and effective way. DataOps seeks to increase velocity, reliability, and quality of data analytics. It emphasizes communication, collaboration, integration, automation, measurement and cooperation between [data scientists](//en.wikipedia.org/wiki/Data_scientists), analysts, data/ETL ([extract, transform, load](//en.wikipedia.org/wiki/Extract,_transform,_load)) engineers, [information technology (IT)](//en.wikipedia.org/wiki/Information_technology), and quality assurance/governance.

Toph Whitmore at Blue Hill Research offers these DataOps leadership principles for the [information technology](//en.wikipedia.org/wiki/Information_technology) department:

* *“Establish progress and performance measurements at every stage of the data flow. Where possible, benchmark data-flow cycle times.*
* *Define rules for an abstracted semantic layer. Ensure everyone is “speaking the same language” and agrees upon what the data (and metadata) is and is not.*
* *Validate with the “eyeball test”: Include continuous-improvement -oriented human feedback loops. Consumers must be able to trust the data, and that can only come with incremental validation.*
* Automate as many stages of the data flow as possible including BI, data science, and analytics.
* *Using benchmarked performance information, identify bottlenecks and then optimize for them. This may require investment in commodity hardware, or automation of a formerly-human-delivered data-science step in the process.*
* *Establish governance discipline, with a particular focus on two-way data control, data ownership, transparency, and comprehensive [data lineage](//en.wikipedia.org/wiki/Data_lineage) tracking through the entire workflow.*
* *Design process for growth and extensibility. The data flow model must be designed to accommodate volume and variety of data. Ensure enabling technologies are priced affordably to scale with that enterprise data growth.”*

* Data Opticon
* Data Ops Summit
* Data Ops Online Champion

1. **[^](#cite_ref-1)** a [portmanteau](//en.wikipedia.org/wiki/Portmanteau) of **dev**elopment **op**erations
2. **[^](#cite_ref-6)** Dyck et al. (2015) "To our knowledge, there is no uniform definition for the terms release engineering and DevOps. As a consequence, many people use their own definitions or rely on others, which results in confusion about those terms."
3. **[^](#cite_ref-8)** Jabbari et al. (2016) "The research results of this study showed the need for a definition as individual studies do not consistently define DevOps."
4. **[^](#cite_ref-10)** Erich et al. (2017) "We noticed that there are various gaps in the study of DevOps: There is no consensus of what concepts DevOps covers, nor how DevOps is defined."
5. **[^](#cite_ref-11)** Erich et al. (2017) "We discovered that there exists little agreement about the characteristics of DevOps in the academic literature."

1. **[^](#cite_ref-2)** Courtemanche, Meredith; Mell, Emily; Gills, Alexander S. ["What Is DevOps? The Ultimate Guide"](https://www.techtarget.com/searchitoperations/definition/DevOps). *TechTarget*. Retrieved 2023-01-22.
2. **[^](#cite_ref-:02_3-0)** *Building Evolutionary Architectures: Automated Software Governance*. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4920-9754-9](//en.wikipedia.org/wiki/Special:BookSources/978-1-4920-9754-9).
3. **[^](#cite_ref-4)** *Fundamentals of Software Architecture: An Engineering Approach*. O'Reilly Media. 2020. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4920-4345-4](//en.wikipedia.org/wiki/Special:BookSources/978-1-4920-4345-4).
4. **[^](#cite_ref-5)** Dyck, Andrej; Penners, Ralf; Lichter, Horst (2015-05-19). "Towards Definitions for Release Engineering and DevOps". *2015 IEEE/ACM 3rd International Workshop on Release Engineering*. [IEEE](//en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers). p. 3. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/RELENG.2015.10](https://doi.org/10.1109%2FRELENG.2015.10). [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4673-7070-7](//en.wikipedia.org/wiki/Special:BookSources/978-1-4673-7070-7). [S2CID](//en.wikipedia.org/wiki/S2CID_(identifier)) [4659735](https://api.semanticscholar.org/CorpusID:4659735).
5. **[^](#cite_ref-7)** Jabbari, Ramtin; bin Ali, Nauman; Petersen, Kai; Tanveer, Binish (May 2016). "What is DevOps?: A Systematic Mapping Study on Definitions and Practices". *Proceedings of the 2016 Scientific Workshop*. [Association for Computing Machinery](//en.wikipedia.org/wiki/Association_for_Computing_Machinery).
6. ^ [***a***](#cite_ref-erich-2017_9-0) [***b***](#cite_ref-erich-2017_9-1) Erich, F.M.A.; Amrit, C.; Daneva, M. (June 2017). ["A Qualitative Study of DevOps Usage in Practice"](https://ris.utwente.nl/ws/files/19208022/Erich_et_al_2017_Journal_of_Software_Evolution_and_Process.pdf) (PDF). *Journal of Software: Evolution and Process*. **29** (6) e1885. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/smr.1885](https://doi.org/10.1002%2Fsmr.1885). [S2CID](//en.wikipedia.org/wiki/S2CID_(identifier)) [35914007](https://api.semanticscholar.org/CorpusID:35914007).
7. **[^](#cite_ref-12)** Bass, Len; Weber, Ingo; Zhu, Liming (2015). *DevOps: A Software Architect's Perspective*. Addison-Wesley. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-404984-7](//en.wikipedia.org/wiki/Special:BookSources/978-0-13-404984-7).
8. **[^](#cite_ref-13)** Muñoz, Mirna; Negrete Rodríguez, Mario (2021-04-01). ["A guidance to implement or reinforce a DevOps approach in organizations: A case study"](//onlinelibrary.wiley.com/journal/20477481). *Journal of Software: Evolution and Process*. **36** (3). Wiley. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/smr.2342](https://doi.org/10.1002%2Fsmr.2342).
9. **[^](#cite_ref-14)** Chapman, M., Gatti, N: A model of a service life cycle, Proceedings of TINA '93, pp. I-205–I-215, Sep., 1993.
10. **[^](#cite_ref-15)** ["Velocity Conference: Call For Participation Open"](https://www.oreilly.com/pub/pr/1870) (Press release). O'Reilly Media. 15 November 2007. Retrieved 4 March 2026. "The first ever O'Reilly Velocity conference will take place June 23-24, 2008"
11. **[^](#cite_ref-16)** ["Tim OReilly: Official Bio"](https://www.oreilly.com/tim/bio.html). O'Reilly Media. Retrieved 2 March 2026. "O'Reilly hosts the first Velocity conference, bringing together for the first time the web performance and operations community, and giving voice and a gathering place for what came to be called DevOps and Site Reliability Engineering."
12. **[^](#cite_ref-17)** Mezak, Steve (25 January 2018). ["The Origins of DevOps: What's in a Name?"](https://devops.com/the-origins-of-devops-whats-in-a-name/). devops.com. Retrieved 6 May 2019.
13. **[^](#cite_ref-18)** Debois, Patrick (9 October 2008). ["Agile 2008 Toronto"](http://www.jedi.be/blog/2008/10/09/agile-2008-toronto-agile-infrastructure-and-operations-presentation/). Just Enough Documented Information. Retrieved 12 March 2015.
14. **[^](#cite_ref-19)** Debois, Patrick. ["DevOps Days"](http://www.devopsdays.org/). DevOps Days. Retrieved 31 March 2011.
15. ^ [***a***](#cite_ref-2016_State_of_DevOps_Report_20-0) [***b***](#cite_ref-2016_State_of_DevOps_Report_20-1) Alana Brown; Nicole Forsgren; Jez Humble; Nigel Kersten; Gene Kim (2016). ["2016 State of DevOps Report"](https://dora.dev/research/2017-and-earlier/2016-state-of-devops-report.pdf) (PDF). Puppet Labs, DORA (DevOps Research. Retrieved 2024-04-24.
16. **[^](#cite_ref-21)** ["Puppet - Alanna Brown"](https://puppet.com/people/alanna-brown). Puppet Labs. Retrieved 2019-04-27.
17. **[^](#cite_ref-22)** Nicole Forsgren; Gene Kim; Nigel Kersten; Jez Humble (2014). ["2014 State of DevOps Report"](https://dora.dev/research/2017-and-earlier/2014-state-of-devops-report.pdf) (PDF). Puppet Labs, IT Revolution Press and ThoughtWorks. Retrieved 2024-04-24.
18. **[^](#cite_ref-23)** ["2015 State of DevOps Report"](https://dora.dev/research/2017-and-earlier/2015-state-of-devops-report.pdf) (PDF). Puppet Labs, Pwc, IT Revolution Press. 2015. Retrieved 2024-04-24.
19. **[^](#cite_ref-24)** ["More Agile Testing"](https://agiletester.ca/wp-content/uploads/sites/26/2014/09/TOC.pdf) (PDF). October 2014. Retrieved 2019-05-06.
20. **[^](#cite_ref-25)** Crispin, Lisa; Gregory, Janet (October 2014). [*More Agile Testing*](https://www.oreilly.com/library/view/more-agile-testing/9780133749571/). Addison-Wesley. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-374957-1](//en.wikipedia.org/wiki/Special:BookSources/978-0-13-374957-1). Retrieved 2019-05-06.
21. **[^](#cite_ref-26)** Turner, Graham (20 November 2023). ["Report: Software Engineers Face Backlash for Reporting Wrongdoing"](https://www.digit.fyi/report-software-engineers-facing-retaliation-for-reporting-wrongdoing/). *DIGIT*. Retrieved 5 January 2024.
22. **[^](#cite_ref-27)** Saran, Cliff. ["Software engineers worry about speaking out - Computer Weekly"](https://www.computerweekly.com/news/366560292/Software-engineers-worry-about-speaking-out). *ComputerWeekly.com*. Retrieved 5 January 2024.
23. **[^](#cite_ref-28)** ["75% of software engineers faced retaliation the last time they reported wrongdoing - ETHRWorldSEA"](https://hrsea.economictimes.indiatimes.com/news/workplace/75-of-software-engineers-faced-retaliation-the-last-time-they-reported-wrongdoing/105335733). *ETHRWorld.com*.
24. **[^](#cite_ref-29)** Cummins, Holly. ["Holly Cummins on X"](https://twitter.com/holly_cummins/status/1448357917384744964). *X.com*. Retrieved 5 January 2024.
25. **[^](#cite_ref-2023_State_of_DevOps_Report_30-0)** DeBellis, Derek; Lewis, Amanda; Villalba, Daniella; Farley, Dave. ["2023 State of DevOps Report"](https://cloud.google.com/devops/state-of-devops). Google Cloud DevOps Research and Assessment. Retrieved 2024-04-24.
26. **[^](#cite_ref-Culture_is_everything_31-0)** DeBellis, Derek; Harvey, Nathan. ["2023 State of DevOps Report: Culture is everything"](https://cloud.google.com/blog/products/devops-sre/announcing-the-2023-state-of-devops-report). *Google Cloud Blog*. Retrieved 2024-04-24.
27. **[^](#cite_ref-:0_32-0)** Forsgren, Nicole. *Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations*. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-942788-33-1](//en.wikipedia.org/wiki/Special:BookSources/978-1-942788-33-1).
28. **[^](#cite_ref-33)** "DORA Accelerate State of DevOps 2021". *DevOps Research and Assessment* (2021). 2021.
29. **[^](#cite_ref-34)** Klein, Brandon Thorin (2021-05-01). ["The DevOps: A Concise Understanding to the DevOps Philosophy and Science"](https://www.osti.gov/biblio/1785164/). *Osti.gov*. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.2172/1785164](https://doi.org/10.2172%2F1785164). [OSTI](//en.wikipedia.org/wiki/OSTI_(identifier)) [1785164](https://www.osti.gov/biblio/1785164). [S2CID](//en.wikipedia.org/wiki/S2CID_(identifier)) [236606284](https://api.semanticscholar.org/CorpusID:236606284).
30. **[^](#cite_ref-35)** ["The History and Evolution of DevOps | Tom Geraghty"](https://tomgeraghty.co.uk/index.php/the-history-and-evolution-of-devops/). 5 July 2020. Retrieved 2020-11-29.
31. **[^](#cite_ref-36)** ["What is platform engineering?"](https://learn.microsoft.com/en-us/platform-engineering/what-is-platform-engineering). *Microsoft Learn*. Retrieved 2025-04-01.
32. **[^](#cite_ref-37)** ["What is platform engineering?"](https://www.redhat.com/en/topics/devops/platform-engineering). *Red Hat*. Retrieved 2025-04-01.
33. **[^](#cite_ref-38)** ["Principles behind the Agile Manifesto"](https://agilemanifesto.org/principles.html). *agilemanifesto.org*. Retrieved 2020-12-06.
34. **[^](#cite_ref-39)** Castellanos, Camilo; Correal, Dario (15 September 2018). "Executing Architectural Models for Big Data Analytics". *Software Architecture*. Lecture Notes in Computer Science. Vol. 11048. pp. 364–371. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-030-00761-4\_24](https://doi.org/10.1007%2F978-3-030-00761-4_24). [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-030-00760-7](//en.wikipedia.org/wiki/Special:BookSources/978-3-030-00760-7).
35. **[^](#cite_ref-40)** Humble, Jez; Farley, David (2011). *Continuous Delivery: reliable software releases through build, test, and deployment automation*. Pearson Education Inc. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-60191-9](//en.wikipedia.org/wiki/Special:BookSources/978-0-321-60191-9).
36. **[^](#cite_ref-41)** Chen, Lianping (2015). "Continuous Delivery: Huge Benefits, but Challenges Too". *IEEE Software*. **32** (2): 50–54. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/MS.2015.27](https://doi.org/10.1109%2FMS.2015.27). [S2CID](//en.wikipedia.org/wiki/S2CID_(identifier)) [1241241](https://api.semanticscholar.org/CorpusID:1241241).
37. **[^](#cite_ref-42)** Fluri, Jasmin; Fornari, Fabrizio; Pustulka, Elzbieta (2024). ["On the importance of CI/CD practices for database applications"](https://irf.fhnw.ch/server/api/core/bitstreams/5f365e90-bc6a-49e0-8385-0be7e252d78a/content). *Journal of Software: Evolution and Process*. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/smr.2720](https://doi.org/10.1002%2Fsmr.2720). Retrieved 2025-08-24.
38. **[^](#cite_ref-43)** Shahin, Mojtaba; Ali Babar, Muhammad; Zhu, Liming (2017). ["Continuous Integration, Delivery and Deployment: A Systematic Review on Approaches, Tools, Challenges and Practices"](https://www.researchgate.net/publication/315381994_Continuous_Integration_Delivery_and_Deployment_A_Systematic_Review_on_Approaches_Tools_Challenges_and_Practices). *IEEE Access*. **5**: 3909–3943. [arXiv](//en.wikipedia.org/wiki/ArXiv_(identifier)):[1703.07019](https://arxiv.org/abs/1703.07019). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/ACCESS.2017.2685629](https://doi.org/10.1109%2FACCESS.2017.2685629). Retrieved 2025-08-24.
39. **[^](#cite_ref-44)** ["Database Change Management"](https://dora.dev/capabilities/database-change-management/). *DORA*. Retrieved 2025-08-24.
40. **[^](#cite_ref-45)** ["A Guide to Database DevOps"](https://www.liquibase.com/resources/guides/database-devops#:~:text=Database%20DevOps%20extends%20DevOps%20principles%2C,more%20consistent%20and%20efficient%20lifecycle). *Liquibase*. Retrieved 2025-08-24.
41. **[^](#cite_ref-46)** Tak, Rohin; Modi, Jhalak (2018). *Mobile DevOps: Deliver continuous integration and deployment within your mobile applications*. Packt Publishing. pp. 12–18. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-78829-624-3](//en.wikipedia.org/wiki/Special:BookSources/978-1-78829-624-3).
42. **[^](#cite_ref-47)** Beyer, Betsy; Jones, Chris; Petoff, Jennifer; Murphy, Niall Richard (April 2016). *Site Reliability Engineering*. O'Reilly Media. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4919-2909-4](//en.wikipedia.org/wiki/Special:BookSources/978-1-4919-2909-4).
43. **[^](#cite_ref-48)** Dave Harrison (9 Oct 2018). ["Interview with Betsy Beyer, Stephen Thorne of Google"](https://driftboatdave.com/2018/10/09/interview-with-betsy-beyer-stephen-thorne-of-google/). Retrieved 24 July 2024.
44. **[^](#cite_ref-49)** [Analyzing the DNA of DevOps](https://opensource.com/article/18/11/analyzing-devops), Brent Aaron Reed, Willy Schaub, 2018-11-14.
45. **[^](#cite_ref-50)** Gene Kim; Patrick Debois; John Willis; Jezz Humble (2016). *The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations*.
46. **[^](#cite_ref-51)** ["CWE Top 25 Most Dangerous Software Weaknesses"](https://cwe.mitre.org/top25/). Retrieved September 21, 2025.
47. **[^](#cite_ref-52)** ["OWASP TOP10"](https://owasp.org/Top10/). [Archived](https://web.archive.org/web/20230608171837/https://owasp.org/Top10/) from the original on June 8, 2023. Retrieved June 8, 2023.
48. **[^](#cite_ref-53)** Wilson, Glenn (December 2020). *'DevSecOps: A leader's guide to producing secure software without compromising flow, feedback and continuous improvement'*. Rethink Press. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-78133-502-4](//en.wikipedia.org/wiki/Special:BookSources/978-1-78133-502-4).
49. **[^](#cite_ref-54)** Emerging Technology Analysis: DevOps a Culture Shift, Not a Technology (Report). Gartner.
50. **[^](#cite_ref-55)** Loukides, Mike (7 June 2012). ["What is DevOps?"](http://radar.oreilly.com/2012/06/what-is-devops.html). [O'Reilly Media](//en.wikipedia.org/wiki/O%27Reilly_Media).
51. **[^](#cite_ref-56)** Teja Yarlagadda, Ravi (9 March 2021). "DevOps and Its Practices". [SSRN](//en.wikipedia.org/wiki/SSRN_(identifier)) [3798877](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3798877).
52. **[^](#cite_ref-57)** Morisio, Maurizio (16 April 2021). [*DevOps: development of a toolchain in the banking domain*](https://webthesis.biblio.polito.it/18120/). *Politecnico di Torino* (laurea thesis). Retrieved 16 August 2021.
53. **[^](#cite_ref-58)** ["What is GitOps?"](https://www.redhat.com/en/topics/devops/what-is-gitops). *www.redhat.com*. Retrieved 2023-03-30.
54. **[^](#cite_ref-59)** *Serverless Architectures on AWS*. Manning. 29 March 2022. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-61729-542-3](//en.wikipedia.org/wiki/Special:BookSources/978-1-61729-542-3).
55. **[^](#cite_ref-60)** *Pipeline as Code Continuous Delivery with Jenkins, Kubernetes, and Terraform*. Manning. 23 November 2021. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-63835-037-8](//en.wikipedia.org/wiki/Special:BookSources/978-1-63835-037-8).
56. **[^](#cite_ref-61)** Humble, Jez; Farley, David (27 July 2010). *Continuous Delivery Reliable Software Releases Through Build, Test, and Deployment Automation*. Pearson Education. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-67022-9](//en.wikipedia.org/wiki/Special:BookSources/978-0-321-67022-9).
57. **[^](#cite_ref-62)** Ereth, Julian (2018). ["DataOps-Towards a Definition"](http://ceur-ws.org/Vol-2191/paper13.pdf) (PDF). *Proceedings of LWDA 2018*: 109.
58. ^ [***a***](#cite_ref-:1_63-0) [***b***](#cite_ref-:1_63-1) ["DataOps – It's a Secret"](https://www.datasciencecentral.com/profiles/blogs/dataops-it-s-a-secret). *www.datasciencecentral.com*. Retrieved 2017-04-05.
59. ^ [***a***](#cite_ref-:5_64-0) [***b***](#cite_ref-:5_64-1) [***c***](#cite_ref-:5_64-2) ["What is DataOps (data operations)? - Definition from WhatIs.com"](http://searchdatamanagement.techtarget.com/definition/DataOps). *SearchDataManagement*. Retrieved 2017-04-05.
60. ^ [***a***](#cite_ref-:0a_65-0) [***b***](#cite_ref-:0a_65-1) [***c***](#cite_ref-:0a_65-2) [***d***](#cite_ref-:0a_65-3) ["From DevOps to DataOps, By Andy Palmer - Tamr Inc"](https://web.archive.org/web/20180712103947/https://www.tamr.com/from-devops-to-dataops-by-andy-palmer/). *Tamr Inc*. 2015-05-07. Archived from [the original](https://www.tamr.com/from-devops-to-dataops-by-andy-palmer/) on 2018-07-12. Retrieved 2017-03-21.
61. **[^](#cite_ref-66)** DataKitchen (2017-03-07). ["Lean Manufacturing Secrets that You Can Apply to Data Analytics"](https://medium.com/data-ops/lean-manufacturing-secrets-that-you-can-apply-to-data-analytics-31d1a319cbf0). *Medium*. Retrieved 2017-08-24.
62. ^ [***a***](#cite_ref-:4_67-0) [***b***](#cite_ref-:4_67-1) [***c***](#cite_ref-:4_67-2) ["What is DataOps? | Nexla: Scalable Data Operations Platform for the Machine Learning Age"](https://www.nexla.com/define-dataops/). *www.nexla.com*. Retrieved 2017-09-07.
63. **[^](#cite_ref-68)** ["3 reasons why DataOps is essential for big data success"](https://web.archive.org/web/20180810105123/http://www.ibmbigdatahub.com/blog/3-reasons-why-dataops-essential-big-data-success). *IBM Big Data & Analytics Hub*. Archived from [the original](http://www.ibmbigdatahub.com/blog/3-reasons-why-dataops-essential-big-data-success) on 2018-08-10. Retrieved 2018-08-10.
64. **[^](#cite_ref-69)** [*Mango Solutions: #DataOps - it's a thing (honest)*](https://www.youtube.com/watch?v=64PIa9gcuh0), retrieved 2021-06-28
65. **[^](#cite_ref-70)** DataKitchen (2017-12-19). ["2017: The Year of DataOps"](https://medium.com/data-ops/2017-the-year-of-dataops-b2023c17d2af). *data-ops*. Retrieved 2018-01-24.
66. **[^](#cite_ref-71)** ["Gartner Hype Cycle for Data Management Positions Three Technologies in the Innovation Trigger Phase in 2018"](https://www.gartner.com/en/newsroom/press-releases/2018-09-11-gartner-hype-cycle-for-data-management-positions-three-technologies-in-the-innovation-trigger-phase-in-2018). *Gartner*. Retrieved 2019-07-19.
67. **[^](#cite_ref-72)** ["5 trends driving Big Data in 2017"](http://www.ciodive.com/news/5-trends-driving-big-data-in-2017/445239/). *CIO Dive*. Retrieved 2017-09-07.
68. **[^](#cite_ref-73)** ["Unravel Data Advances Application Performance Management for Big Data"](http://www.dbta.com/Editorial/News-Flashes/Unravel-Data-Advances-Application-Performance-Management-for-Big-Data-116893.aspx). *Database Trends and Applications*. 2017-03-10. Retrieved 2017-09-07.
69. **[^](#cite_ref-74)** ["DataOpticon - YouTube"](https://www.youtube.com/channel/UCAnJYf1L59gVp2SAeHMce1A/featured). *www.youtube.com*. Retrieved 2021-06-28.
70. **[^](#cite_ref-75)** ["DataOps Summit"](https://web.archive.org/web/20210702063917/https://www.dataopssummit-sf.com/about/). *www.dataopssummit-sf.com*. Archived from [the original](https://www.dataopssummit-sf.com/about/) on 2021-07-02. Retrieved 2021-06-28.
71. **[^](#cite_ref-76)** Intelligence, Corinium Global. ["DataOps Champions Online 2021 | Corinium"](https://dco-dataops.coriniumintelligence.com/). *dco-dataops.coriniumintelligence.com*. Retrieved 2021-06-28.

* Davis, Jennifer; Daniels, Ryn (2016-05-30). *Effective DevOps: building a culture of collaboration, affinity, and tooling at scale*. Sebastopol, CA: O'Reilly. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4919-2643-7](//en.wikipedia.org/wiki/Special:BookSources/978-1-4919-2643-7). [OCLC](//en.wikipedia.org/wiki/OCLC_(identifier)) [951434424](https://search.worldcat.org/oclc/951434424).
* Kim, Gene; Debois, Patrick; Willis, John; Humble, Jez; Allspaw, John (2015-10-07). *The DevOps handbook: how to create world-class agility, reliability, and security in technology organizations* (First ed.). Portland, OR. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-942788-00-3](//en.wikipedia.org/wiki/Special:BookSources/978-1-942788-00-3). [OCLC](//en.wikipedia.org/wiki/OCLC_(identifier)) [907166314](https://search.worldcat.org/oclc/907166314).`{{cite book}}`: CS1 maint: location missing publisher ([link](//en.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher))
* Forsgren, Nicole; Humble, Jez; Kim, Gene (27 March 2018). *Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations* (First ed.). IT Revolution Press. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-942788-33-1](//en.wikipedia.org/wiki/Special:BookSources/978-1-942788-33-1).