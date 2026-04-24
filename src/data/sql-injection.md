# SQL injection

* Source: https://en.wikipedia.org/wiki/SQL_injection

---

A classification of SQL injection attacking vector as of 2010

In computing, **SQL injection** is a [code injection](https://en.wikipedia.org/wiki/Code_injection) technique used to [attack](https://en.wikipedia.org/wiki/Attack_(computing)) data-driven applications, in which malicious [SQL](https://en.wikipedia.org/wiki/SQL) statements are inserted into an entry field for execution (e.g. to dump the [database](https://en.wikipedia.org/wiki/Database) contents to the attacker). SQL injection must exploit a [security vulnerability](https://en.wikipedia.org/wiki/Security_vulnerability) in an application's software, for example, when user input is either incorrectly filtered for [string literal](https://en.wikipedia.org/wiki/String_literal) [escape characters](https://en.wikipedia.org/wiki/Escape_sequence) embedded in SQL statements or user input is not [strongly typed](https://en.wikipedia.org/wiki/Strongly-typed_programming_language) and unexpectedly executed. SQL injection is mostly known as an [attack vector](https://en.wikipedia.org/wiki/Attack_vector) for websites but can be used to attack any type of [SQL database](https://en.wikipedia.org/wiki/SQL_database).

SQL injection attacks allow attackers to [spoof](https://en.wikipedia.org/wiki/Spoofing_attack) identity, tamper with existing [data](https://en.wikipedia.org/wiki/Data), cause repudiation issues such as voiding transactions or changing balances, allow the complete disclosure of all data on the system, destroy the data or make it otherwise unavailable, and become administrators of the database server. Document-oriented [NoSQL](https://en.wikipedia.org/wiki/NoSQL) databases can also be affected by this security vulnerability.

SQL injection remains a widely recognized security risk due to its potential to compromise sensitive data. The [Open Web Application Security Project](https://en.wikipedia.org/wiki/Open_Web_Application_Security_Project) (OWASP) describes it as a vulnerability that occurs when applications construct database queries using unvalidated user input. Exploiting this flaw, attackers can execute unintended database commands, potentially accessing, modifying, or deleting data. OWASP outlines several mitigation strategies, including [prepared statements](https://en.wikipedia.org/wiki/Prepared_statement), [stored procedures](https://en.wikipedia.org/wiki/Stored_procedure), and [input validation](https://en.wikipedia.org/wiki/Input_validation), to prevent user input from being misinterpreted as executable SQL code.

## History

Discussions of SQL injection began in the late 1990's, including in a 1998 article in [Phrack Magazine](https://en.wikipedia.org/wiki/Phrack_Magazine). SQL injection was ranked among the top 10 web application vulnerabilities of 2007 and 2010 by the [Open Web Application Security Project](https://en.wikipedia.org/wiki/OWASP) (OWASP). In 2013, SQL injection was listed as the most critical web application vulnerability in the OWASP Top 10.

In 2017, the *OWASP Top 10 Application Security Risks* grouped SQL injection under the broader category of "Injection," ranking it as the third most critical security threat. This category included various types of injection attacks, such as SQL, [NoSQL](https://en.wikipedia.org/wiki/NoSQL), OS command, and [LDAP injection](https://en.wikipedia.org/wiki/LDAP_injection). These vulnerabilities arise when an application processes untrusted data as part of a command or query, potentially allowing attackers to execute unintended actions or gain unauthorized access to data.

By 2021, injection remained a widespread issue, detected in 94% of analyzed applications, with reported incidence rates reaching up to 19%. That year’s *OWASP Top 10* further expanded the definition of injection vulnerabilities to include attacks targeting [Object Relational Mapping](https://en.wikipedia.org/wiki/Object_Relational_Mapping) (ORM) systems, [Expression Language](https://en.wikipedia.org/wiki/Expression_language) (EL), and Object Graph Navigation Library (OGNL). To address these risks, OWASP recommends strategies such as using secure [APIs](https://en.wikipedia.org/wiki/API), parameterized queries, input validation, and escaping special characters to prevent malicious data from being executed as part of a query.

## Root cause

SQL injection is a common security vulnerability that arises from letting attacker-supplied data become SQL code. This happens when programmers assemble SQL queries either by string interpolation or by concatenating SQL commands with user supplied data. Therefore, injection relies on the fact that SQL statements consist of both data used by the SQL statement and commands that control how the SQL statement is executed. For example, in the SQL statement `select * from person where name = 'susan' and age = 2` the string '`susan`' is data and the fragment `and age = 2` is an example of a command (the value `2` is also data in this example).

SQL injection occurs when specially crafted user input is processed by the receiving program in a way that allows the input to exit a data context and enter a command context. This allows the attacker to alter the structure of the SQL statement which is executed.

As a simple example, imagine that the data '`susan`' in the above statement was provided by user input. The user entered the string '`susan`' (without the apostrophes) in a web form text entry field, and the program used [string concatenation](https://en.wikipedia.org/wiki/String_concatenation) statements to form the above SQL statement from the three fragments `select * from person where name='`, the user input of '`susan`', and `' and age = 2`.

Now imagine that instead of entering '`susan`' the attacker entered `' or 1=1; --`.

The program will use the same string concatenation approach with the 3 fragments of `select * from person where name='`, the user input of `' or 1=1; --`, and `' and age = 2` and construct the statement `select * from person where name='' or 1=1; --' and age = 2`. Many databases will ignore the text after the '--' string as this denotes a comment. The structure of the SQL command is now `select * from person where name='' or 1=1;` and this will select all person rows rather than just those named 'susan' whose age is 2. The attacker has managed to craft a data string which exits the data context and entered a command context.

## Ways to exploit

Although the root cause of all SQL injections is the same, there are different techniques to exploit it. Some of them are discussed below:

### Getting direct output or action

Imagine a program creates a SQL statement using the following string assignment command :

`var statement = "SELECT * FROM users WHERE name = '" + userName + "'";`

This SQL code is designed to pull up the records of the specified username from its table of users. However, if the "userName" variable is crafted in a specific way by a malicious user, the SQL statement may do more than the code author intended. For example, setting the "userName" variable as:

```
' OR '1'='1
```

or using comments to even block the rest of the query (there are three types of SQL comments). All three lines have a space at the end:

```
' OR '1'='1' --
' OR '1'='1' {
' OR '1'='1' /* 
```

renders one of the following SQL statements by the parent language:

```
SELECT * FROM users WHERE name = '' OR '1'='1';
```

```
SELECT * FROM users WHERE name = '' OR '1'='1' -- ';
```

If this code were to be used in authentication procedure then this example could be used to force the selection of every data field (*) from *all* users rather than from one specific user name as the coder intended, because the evaluation of '1'='1' is always true.

The following value of "userName" in the statement below would cause the deletion of the "users" table as well as the selection of all data from the "userinfo" table (in essence revealing the information of every user), using an [API](https://en.wikipedia.org/wiki/API) that allows multiple statements:

`a';``DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't`

This input renders the final SQL statement as follows and specified:

```
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

While most SQL server implementations allow multiple statements to be executed with one call in this way, some SQL APIs such as [PHP](https://en.wikipedia.org/wiki/PHP)'s `mysql_query()` function do not allow this for security reasons. This prevents attackers from injecting entirely separate queries, but doesn't stop them from modifying queries.

### Blind SQL injection

Blind SQL injection is used when a web application is vulnerable to a SQL injection, but the results of the injection are not visible to the attacker. The page with the vulnerability may not be one that displays data but will display differently depending on the results of a logical statement injected into the legitimate SQL statement called for that page. This type of attack has traditionally been considered time-intensive because a new statement needed to be crafted for each bit recovered, and depending on its structure, the attack may consist of many unsuccessful requests. Recent advancements have allowed each request to recover multiple bits, with no unsuccessful requests, allowing for more consistent and efficient extraction. There are several tools that can automate these attacks once the location of the vulnerability and the target information has been established.

#### Conditional responses

One type of blind SQL injection forces the database to evaluate a logical statement on an ordinary application screen. As an example, a book review website uses a [query string](https://en.wikipedia.org/wiki/Query_string) to determine which book review to display. So the [URL](https://en.wikipedia.org/wiki/URL) `https://books.example.com/review?id=5` would cause the server to run the query

```
SELECT * FROM bookreviews WHERE ID = '5';
```

from which it would populate the review page with data from the review with [ID](https://en.wikipedia.org/wiki/Identifier) 5, stored in the [table](https://en.wikipedia.org/wiki/Table_(database)) bookreviews. The query happens completely on the server; the user does not know the names of the database, table, or fields, nor does the user know the query string. The user only sees that the above URL returns a book review. A [hacker](https://en.wikipedia.org/wiki/Security_hacker) can load the URLs ``https://books.example.com/review?id=5' OR '1'='1`` and ``https://books.example.com/review?id=5' AND '1'='2``, which may result in queries

```
SELECT * FROM bookreviews WHERE ID = '5' OR '1'='1';
SELECT * FROM bookreviews WHERE ID = '5' AND '1'='2';
```

respectively. If the original review loads with the "1=1" URL and a blank or error page is returned from the "1=2" URL, and the returned page has not been created to alert the user the input is invalid, or in other words, has been caught by an input test script, the site is likely vulnerable to an SQL injection attack as the query will likely have passed through successfully in both cases. The hacker may proceed with this query string designed to reveal the version number of [MySQL](https://en.wikipedia.org/wiki/MySQL) running on the server: ``https://books.example.com/review?id=5 AND substring(@@version, 1, INSTR(@@version, '.') - 1)=4``, which would show the book review on a server running MySQL 4 and a blank or error page otherwise. The hacker can continue to use code within query strings to achieve their goal directly, or to glean more information from the server in hopes of discovering another avenue of attack.

### Second-order SQL injection

Second-order SQL injection occurs when an application only guards its SQL against immediate user input, but has a less strict policy when dealing with data already stored in the system. Therefore, although such application would manage to safely process the user input and store it without issue, it would store the malicious SQL statement as well. Then, when another part of that application would use that data in a query that isn't protected from SQL injection, this malicious statement might get executed. This attack requires more knowledge of how submitted values are later used. Automated web application security scanners would not easily detect this type of SQL injection and may need to be manually instructed where to check for evidence that it is being attempted.

In order to protect from this kind of attack, all SQL processing must be uniformly secure, despite the data source.

## SQL injection mitigation

SQL injection is a well-known attack that can be mitigated with established security measures. However, a 2015 [cyberattack](https://en.wikipedia.org/wiki/Cyberattack) on British telecommunications company [TalkTalk](https://en.wikipedia.org/wiki/TalkTalk_Group) exploited an SQL injection vulnerability, compromising the personal data of approximately 400,000 customers. The *[BBC](https://en.wikipedia.org/wiki/BBC)* reported that security experts expressed surprise that a major company remained vulnerable to such an exploit.

A variety of defensive measures exist to mitigate SQL injection risks by preventing attackers from injecting malicious SQL code into database queries. Core mitigation strategies, as outlined by [OWASP](https://en.wikipedia.org/wiki/OWASP), include parameterized queries, [input validation](https://en.wikipedia.org/wiki/Input_validation), and least privilege access controls, which limit the ability of user input to alter SQL queries and execute unintended commands. In addition to preventive measures, detection techniques help identify potential SQL injection attempts. Methods such as [pattern matching](https://en.wikipedia.org/wiki/Pattern_matching), [software testing](https://en.wikipedia.org/wiki/Software_testing), and grammar analysis examine query structures and user inputs to detect irregularities that may indicate an injection attempt.

### Core mitigation

#### Parameterized statements

Most development platforms support parameterized statements, also known as placeholders or [bind variables](https://en.wikipedia.org/wiki/Bind_variable), to securely handle user input instead of embedding it in SQL queries. These placeholders store only values of a defined type, preventing input from altering the query structure. As a result, SQL injection attempts are processed as unexpected input rather than executable code. With parametrized queries, SQL code remains separate from user input, and each parameter is passed as a distinct value, preventing it from being interpreted as part of the SQL statement.

#### Allow-list input validation

[Allow-list](https://en.wikipedia.org/wiki/Allow-list) input validation ensures that only explicitly defined inputs are accepted, reducing the risk of injection attacks. Unlike [deny-lists](https://en.wikipedia.org/wiki/Deny_list), which attempt to block known malicious patterns but can be bypassed, allow-lists specify valid input and reject everything else. This approach is particularly effective for [structured data](https://en.wikipedia.org/wiki/Structured_data), such as dates and email addresses, where strict validation rules can be applied. While input validation alone does not prevent SQL injection and other attacks, it can act as an additional safeguard by identifying and filtering unauthorized input before it reaches an SQL query.

#### Least privilege

According to OWASP, the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) helps mitigate SQL injection risks by ensuring database accounts have only the minimum permissions necessary. Read-only accounts should not have modification privileges, and application accounts should never have administrative access. Restricting database permissions is a key part of this approach, as limiting access to system tables and restricting user roles can reduce the risk of SQL injection attacks. Separating database users for different functions, such as authentication and data modification, further limits potential damage from SQL injection attacks.

Restricting database permissions on the web application's database login further reduces the impact of SQL injection vulnerabilities. Ensuring that accounts have only the necessary access, such as restricting SELECT permissions on critical system tables, can mitigate potential exploits.

On [Microsoft SQL Server](https://en.wikipedia.org/wiki/Microsoft_SQL_Server), limiting SELECT access to system tables can prevent SQL injection attacks that attempt to modify database schema or inject malicious scripts. For example, the following permissions restrict a database user from accessing system objects:

```
deny select on sys.sysobjects to webdatabaselogon;
deny select on sys.objects to webdatabaselogon;
deny select on sys.tables to webdatabaselogon;
deny select on sys.views to webdatabaselogon;
deny select on sys.packages to webdatabaselogon;
```

### Supplementary mitigation

#### Object relational mappers

[Object–relational mapping](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) (ORM) frameworks provide an [object-oriented interface](https://en.wikipedia.org/wiki/Object-oriented_interface) for interacting with [relational databases](https://en.wikipedia.org/wiki/Relational_database). While ORMs typically offer built-in protections against SQL injection, they can still be vulnerable if not properly implemented. Some ORM-generated queries may allow unsanitized input, leading to injection risks. Additionally, many ORMs allow developers to execute raw SQL queries, which if improperly handled can introduce SQL injection vulnerabilities.

### Deprecated/secondary approaches

String escaping is generally discouraged as a primary defense against SQL injection. [OWASP](https://en.wikipedia.org/wiki/OWASP) describes this approach as "frail compared to other defenses" and notes that it may not be effective in all situations. Instead, OWASP recommends using "parameterized queries, stored procedures, or some kind of Object Relational Mapper (ORM) that builds your queries for you" as more reliable methods for mitigating SQL injection risks.

#### String escaping

One of the traditional ways to prevent injections is to add *every piece of data as a quoted string* and [escape](https://en.wikipedia.org/wiki/Escape_sequence) all characters, that have special meaning in SQL strings, in that data. The manual for an SQL DBMS explains which characters have a special meaning, which allows creating a comprehensive [blacklist](https://en.wikipedia.org/wiki/Blacklist_(computing)) of characters that need translation. For instance, every occurrence of a single quote (`'`) in a string parameter must be prepended with a backslash (`\`) so that the database understands the single quote is part of a given string, rather than its terminator. [PHP](https://en.wikipedia.org/wiki/PHP)'s [MySQLi](https://en.wikipedia.org/wiki/MySQLi) module provides the `mysqli_real_escape_string()` function to escape strings according to [MySQL](https://en.wikipedia.org/wiki/MySQL) semantics; in the following example the username is a string parameter, and therefore it can be protected by means of string escaping:

```
$mysqli = new mysqli('hostname', 'db_username', 'db_password', 'db_name');
$query = sprintf("SELECT * FROM `Users` WHERE UserName='%s'",
                  $mysqli->real_escape_string($username),
$mysqli->query($query);
```

Besides, not every piece of data can be added to SQL as a string literal (MySQL's LIMIT clause arguments or table/column names for example) and in this case escaping string-related special characters will do no good whatsoever, leaving resulting SQL open to injections.

## Examples

* In February 2002, Jeremiah Jacks discovered that Guess.com was vulnerable to an SQL injection attack, permitting anyone able to construct a properly-crafted URL to pull down 200,000+ names, credit card numbers and expiration dates in the site's customer database.
* On November 1, 2005, a teenaged hacker used SQL injection to break into the site of a [Taiwanese](https://en.wikipedia.org/wiki/Taiwan) information security magazine from the Tech Target group and steal customers' information.
* On January 13, 2006, [Russian](https://en.wikipedia.org/wiki/Russia) computer criminals broke into a [Rhode Island government](https://en.wikipedia.org/wiki/Government_of_Rhode_Island) website and allegedly stole credit card data from individuals who have done business online with state agencies.
* On September 19, 2007 and January 26, 2009 the Turkish hacker group "m0sted" used SQL injection to exploit Microsoft's SQL Server to hack web servers belonging to [McAlester Army Ammunition Plant](https://en.wikipedia.org/wiki/McAlester_Army_Ammunition_Plant) and the [US Army Corps of Engineers](https://en.wikipedia.org/wiki/United_States_Army_Corps_of_Engineers) respectively.
* On April 13, 2008, the [Sexual and Violent Offender Registry](https://en.wikipedia.org/wiki/Sex_offender_registries_in_the_United_States) of [Oklahoma](https://en.wikipedia.org/wiki/Oklahoma) shut down its website for "[routine maintenance](https://en.wikipedia.org/wiki/Routine_maintenance)" after being informed that 10,597 [Social Security numbers](https://en.wikipedia.org/wiki/Social_Security_number) belonging to [sex offenders](https://en.wikipedia.org/wiki/Sex_offender) had been downloaded via an SQL injection attack.
* On August 17, 2009, the [United States Department of Justice](https://en.wikipedia.org/wiki/United_States_Department_of_Justice) charged an American citizen, [Albert Gonzalez](https://en.wikipedia.org/wiki/Albert_Gonzalez), and two unnamed Russians with the theft of 130 million credit card numbers using an SQL injection attack. In reportedly "the biggest case of [identity theft](https://en.wikipedia.org/wiki/Identity_theft) in American history", the man stole cards from a number of corporate victims after researching their [payment processing systems](https://en.wikipedia.org/wiki/Payment_processor). Among the companies hit were credit card processor [Heartland Payment Systems](https://en.wikipedia.org/wiki/Heartland_Payment_Systems), convenience store chain [7-Eleven](https://en.wikipedia.org/wiki/7-Eleven), and supermarket chain [Hannaford Brothers](https://en.wikipedia.org/wiki/Hannaford_Brothers).
* In July 2010, a South American security researcher who goes by the [handle](https://en.wikipedia.org/wiki/User_(computing)) "Ch Russo" obtained sensitive user information from popular [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent) site [The Pirate Bay](https://en.wikipedia.org/wiki/The_Pirate_Bay). He gained access to the site's administrative control panel and exploited an SQL injection vulnerability that enabled him to collect user account information, including [IP addresses](https://en.wikipedia.org/wiki/IP_address), [MD5](https://en.wikipedia.org/wiki/MD5) [password hashes](https://en.wikipedia.org/wiki/Cryptographic_hash_function) and records of which torrents individual users have uploaded.
* From July 24 to 26, 2010, attackers from [Japan](https://en.wikipedia.org/wiki/Japan) and [China](https://en.wikipedia.org/wiki/China) used an SQL injection to gain access to customers' credit card data from Neo Beat, an [Osaka](https://en.wikipedia.org/wiki/Osaka)-based company that runs a large online supermarket site. The attack also affected seven business partners including supermarket chains Izumiya Co, Maruetsu Inc, and Ryukyu Jusco Co. The theft of data affected a reported 12,191 customers. As of August 14, 2010 it was reported that there have been more than 300 cases of credit card information being used by third parties to purchase goods and services in China.
* On September 19 during the [2010 Swedish general election](https://en.wikipedia.org/wiki/2010_Swedish_general_election) a voter attempted a code injection by hand writing SQL commands as part of a [write-in](https://en.wikipedia.org/wiki/Write-in_candidate) vote.
* On November 8, 2010 the British [Royal Navy](https://en.wikipedia.org/wiki/Royal_Navy) website was compromised by a Romanian hacker named [TinKode](https://en.wikipedia.org/wiki/TinKode) using SQL injection.
* On April 11, 2011, [Barracuda Networks](https://en.wikipedia.org/wiki/Barracuda_Networks) was compromised using an SQL injection flaw. [Email addresses](https://en.wikipedia.org/wiki/Email_address) and usernames of employees were among the information obtained.
* Over a period of 4 hours on April 27, 2011, an automated SQL injection attack occurred on [Broadband Reports](https://en.wikipedia.org/wiki/Broadband_Reports) website that was able to extract 8% of the username/password pairs: 8,000 random accounts of the 9,000 active and 90,000 old or inactive accounts.
* On June 1, 2011, "[hacktivists](https://en.wikipedia.org/wiki/Hacktivist)" of the group [LulzSec](https://en.wikipedia.org/wiki/LulzSec) were accused of using SQL injection to steal [coupons](https://en.wikipedia.org/wiki/Coupon), download keys, and passwords that were stored in plaintext on [Sony](https://en.wikipedia.org/wiki/Sony)'s website, accessing the personal information of a million users.
* In June 2011, [PBS](https://en.wikipedia.org/wiki/PBS) was hacked by LulzSec, most likely through use of SQL injection; the full process used by hackers to execute SQL injections was described in this [Imperva](http://blog.imperva.com/2011/05/pbs-breached-how-hackers-probably-did-it.html) blog.
* [In July 2012](https://en.wikipedia.org/wiki/2012_Yahoo!_Voices_hack) a hacker group was reported to have stolen 450,000 login credentials from [Yahoo!](https://en.wikipedia.org/wiki/Yahoo!). The logins were stored in [plain text](https://en.wikipedia.org/wiki/Plain_text) and were allegedly taken from a Yahoo [subdomain](https://en.wikipedia.org/wiki/Subdomain), [Yahoo! Voices](https://en.wikipedia.org/wiki/Yahoo!_Voices). The group breached Yahoo's security by using a "[union](https://en.wikipedia.org/wiki/Set_operations_(SQL)#UNION_operator)-based SQL injection technique".
* On October 1, 2012, a hacker group called "Team GhostShell" published the personal records of students, faculty, employees, and alumni from 53 universities, including [Harvard](https://en.wikipedia.org/wiki/Harvard_University), [Princeton](https://en.wikipedia.org/wiki/Princeton_University), [Stanford](https://en.wikipedia.org/wiki/Stanford_University), [Cornell](https://en.wikipedia.org/wiki/Cornell_University), [Johns Hopkins](https://en.wikipedia.org/wiki/Johns_Hopkins_University), and the [University of Zurich](https://en.wikipedia.org/wiki/University_of_Zurich) on [pastebin.com](https://en.wikipedia.org/wiki/Pastebin). The hackers claimed that they were trying to "raise awareness towards the changes made in today's education", bemoaning changing education laws in Europe and increases in [tuition in the United States](https://en.wikipedia.org/wiki/College_tuition_in_the_United_States).
* On November 4, 2013, hacktivist group "RaptorSwag" allegedly compromised 71 Chinese government databases using an SQL injection attack on the Chinese Chamber of International Commerce. The leaked data was posted publicly in cooperation with [Anonymous](https://en.wikipedia.org/wiki/Anonymous_(group)).
* In August 2014, [Milwaukee](https://en.wikipedia.org/wiki/Milwaukee)-based computer security company Hold Security disclosed that it uncovered [a theft of confidential information](https://en.wikipedia.org/wiki/2014_Russian_hacker_password_theft) from nearly 420,000 websites through SQL injections. *[The New York Times](https://en.wikipedia.org/wiki/The_New_York_Times)* confirmed this finding by hiring a security expert to check the claim.
* In October 2015, an SQL injection attack was used to steal the personal details of 156,959 customers from British telecommunications company [TalkTalk's](https://en.wikipedia.org/wiki/TalkTalk_Group) servers, exploiting a vulnerability in a legacy web portal.
* In early 2021, 70 gigabytes of data was [exfiltrated](https://en.wikipedia.org/wiki/Data_exfiltration) from the far-right website [Gab](https://en.wikipedia.org/wiki/Gab_(social_network)) through an SQL injection attack. The vulnerability was introduced into the Gab codebase by Fosco Marotto, Gab's [CTO](https://en.wikipedia.org/wiki/Chief_technology_officer). A second attack against Gab was launched the next week using [OAuth2](https://en.wikipedia.org/wiki/OAuth2) tokens stolen during the first attack.
* In May 2023, a widespread SQL injection attack targeted [MOVEit](https://en.wikipedia.org/wiki/MOVEit), a widely used [file-transfer service](https://en.wikipedia.org/wiki/File_transfer_service). The attacks, attributed to the Russian-speaking cybercrime group [Clop](https://en.wikipedia.org/wiki/Clop_(cyber_gang)), compromised multiple global organizations, including payroll provider Zellis, [British Airways](https://en.wikipedia.org/wiki/British_Airways), the [BBC](https://en.wikipedia.org/wiki/BBC), and UK retailer [Boots](https://en.wikipedia.org/wiki/Boots_(company)). Attackers exploited a critical vulnerability, installing a custom webshell called "LemurLoot" to rapidly access and exfiltrate large volumes of data.
* In 2024, a pair of security researchers discovered an SQL injection vulnerability in the FlyCASS system, used by the [Transportation Security Administration](https://en.wikipedia.org/wiki/Transportation_Security_Administration) (TSA) to verify airline crew members. Exploiting this flaw provided unauthorized administrative access, potentially allowing the addition of false crew records. The TSA stated that its verification procedures did not solely depend on this database.

## In popular culture

* A 2007 *[xkcd](https://en.wikipedia.org/wiki/Xkcd)* cartoon involved a character *Robert'); DROP TABLE Students;--* named to carry out an SQL injection. As a result of this cartoon, SQL injection is sometimes informally referred to as "Bobby Tables".
* Unauthorized login to websites by means of SQL injection forms the basis of one of the subplots in [J.K. Rowling](https://en.wikipedia.org/wiki/J.K._Rowling)'s 2012 novel *[The Casual Vacancy](https://en.wikipedia.org/wiki/The_Casual_Vacancy)*.
* In 2014, an individual in Poland legally renamed his business to *Dariusz Jakubowski x'; DROP TABLE users; SELECT '1* in an attempt to disrupt operation of spammers' [harvesting bots](https://en.wikipedia.org/wiki/Web_scraping).
* The 2015 game *[Hacknet](https://en.wikipedia.org/wiki/Hacknet)* has a hacking program called SQL_MemCorrupt. It is described as injecting a table entry that causes a corruption error in an SQL database, then queries said table, causing an SQL database crash and [core dump](https://en.wikipedia.org/wiki/Core_dump).

## See also

* [Code injection](https://en.wikipedia.org/wiki/Code_injection)
* [Cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)
* [Metasploit Project](https://en.wikipedia.org/wiki/Metasploit_Project)
* [OWASP](https://en.wikipedia.org/wiki/OWASP) Open Web Application Security Project
* [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection), a similar concept applied to artificial intelligence
* [SGML entity](https://en.wikipedia.org/wiki/SGML_entity)
* [Uncontrolled format string](https://en.wikipedia.org/wiki/Uncontrolled_format_string)
* [w3af](https://en.wikipedia.org/wiki/W3af)
* [Web application security](https://en.wikipedia.org/wiki/Web_application_security)

## References

1. **^** Microsoft. ["SQL Injection"](https://technet.microsoft.com/en-us/library/ms161953%28v=SQL.105%29.aspx). [Archived](https://web.archive.org/web/20130802094425/http://technet.microsoft.com/en-us/library/ms161953(v=sql.105).aspx) from the original on August 2, 2013. Retrieved August 4, 2013. SQL injection is an attack in which malicious code is inserted into strings that are later passed to an instance of SQL Server for parsing and execution. Any procedure that constructs SQL statements should be reviewed for injection vulnerabilities because SQLi Server will execute all syntactically valid queries that it receives. Even parameterized data can be manipulated by a skilled and determined attacker.
2. ^   Zhuo, Z.; Cai, T.; Zhang, X.; Lv, F. (April 2021). ["Long short-term memory on abstract syntax tree for SQL injection detection"](https://doi.org/10.1049%2Fsfw2.12018). *IET Software*. **15** (2): 188–197. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1049/sfw2.12018](https://doi.org/10.1049%2Fsfw2.12018). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [1751-8806](https://search.worldcat.org/issn/1751-8806). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [233582569](https://api.semanticscholar.org/CorpusID:233582569).
3. **^** ["Hacking NodeJS and MongoDB"](https://blog.websecurify.com/2014/08/hacking-nodejs-and-mongodb). Retrieved January 13, 2026.
4. ^       ["SQL Injection Prevention Cheat Sheet"](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html). *Open Web Application Security Project (OWASP)*. Retrieved March 10, 2025.
5. **^** Jeff Forristal (signing as rain.forest.puppy) (December 25, 1998). ["NT Web Technology Vulnerabilities"](http://www.phrack.com/issues.html?issue=54&id=8#article). *[Phrack Magazine](https://en.wikipedia.org/wiki/Phrack_Magazine)*. **8** (54 (article 8)). [Archived](https://web.archive.org/web/20140319065810/http://www.phrack.com/issues.html?issue=54&id=8#article) from the original on March 19, 2014.
6. **^** ["Category:OWASP Top Ten Project"](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project). Open Web Application Security Project (OWASP). [Archived](https://web.archive.org/web/20110519235909/https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project) from the original on May 19, 2011. Retrieved June 3, 2011.
7. **^** ["Category:OWASP Top Ten Project"](https://www.owasp.org/index.php/Top_10_2013-Top_10). Open Web Application Security Project (OWASP). [Archived](https://web.archive.org/web/20131009150041/https://www.owasp.org/index.php/Top_10_2013-Top_10) from the original on October 9, 2013. Retrieved August 13, 2013.
8. **^** ["OWASP Top 10 Application Security Risks - 2017"](https://owasp.org/www-project-top-ten/2017/Top_10). *Open Web Application Security Project (OWASP)*. Retrieved March 9, 2025.
9. **^** ["OWASP Top 10 2021"](https://owasp.org/Top10/). *Open Web Application Security Project (OWASP)*. Retrieved March 9, 2025.
10. **^** ["A03:2021 – Injection"](https://owasp.org/Top10/A03_2021-Injection/). *Open Web Application Security Project (OWASP)*. Retrieved March 9, 2025.
11. ^     SentinelOne (September 30, 2024). ["What is SQL Injection? Examples & Prevention"](https://www.sentinelone.com/cybersecurity-101/cybersecurity/sql-injection/). *SentinelOne*. Retrieved April 15, 2026.
12. **^** ["How to Enter SQL Comments"](https://web.archive.org/web/20210224035314/http://publibfp.dhe.ibm.com/epubs/pdf/c2736111.pdf) (PDF), *IBM Informix Guide to SQL: Syntax*, IBM, pp. 13–14, archived from [the original](http://publibfp.dhe.ibm.com/epubs/pdf/c2736111.pdf) (PDF) on February 24, 2021, retrieved June 4, 2018
13. **^** ["Extracting Multiple Bits Per Request From Full-blind SQL Injection Vulnerabilities"](https://web.archive.org/web/20160708190141/http://howto.hackallthethings.com/2016/07/extracting-multiple-bits-per-request.html). Hack All The Things. Archived from [the original](http://howto.hackallthethings.com/2016/07/extracting-multiple-bits-per-request.html) on July 8, 2016. Retrieved July 8, 2016.
14. **^** ["Using SQLBrute to brute force data from a blind SQL injection point"](https://web.archive.org/web/20080614203711/http://www.justinclarke.com/archives/2006/03/sqlbrute.html). Justin Clarke. Archived from [the original](http://www.justinclarke.com/archives/2006/03/sqlbrute.html) on June 14, 2008. Retrieved October 18, 2008.
15. **^** macd3v. ["Blind SQL Injection tutorial"](https://web.archive.org/web/20121214193021/http://forum.intern0t.org/web-hacking-war-games/818-blind-sql-injection.html). Archived from [the original](http://forum.intern0t.org/web-hacking-war-games/818-blind-sql-injection.html) on December 14, 2012. Retrieved December 6, 2012.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web)}}`:  CS1 maint: numeric names: authors list ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_numeric_names:_authors_list))
16. **^** Andrey Rassokhin; Dmitry Oleksyuk. ["TDSS botnet: full disclosure"](https://web.archive.org/web/20121209032723/http://nobunkum.ru/analytics/en-tdss-botnet). Archived from [the original](http://nobunkum.ru/analytics/en-tdss-botnet) on December 9, 2012. Retrieved December 6, 2012.
17. **^** ["Questions for TalkTalk - BBC News"](https://www.bbc.com/news/technology-34636308). *BBC News*. October 26, 2015. [Archived](https://web.archive.org/web/20151026113434/http://www.bbc.com/news/technology-34636308) from the original on October 26, 2015. Retrieved October 26, 2015.
18. **^** ["Input Validation Cheat Sheet"](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html). *Open Web Application Security Project (OWASP)*. Retrieved March 10, 2025.
19. **^** ["Testing for ORM Injection"](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05.7-Testing_for_ORM_Injection). *OWASP*. Retrieved March 17, 2025.
20. **^** ["SQL Injection Attacks & Prevention: Complete Guide"](https://www.appsecmonkey.com/blog/sql-injection-attack-and-prevention/). *appsecmonkey.com*. February 13, 2021. Retrieved February 24, 2021.
21. **^** ["MySQL String Literals"](https://dev.mysql.com/doc/refman/8.4/en/string-literals.html).
22. **^** ["MySQL SELECT Statement"](https://dev.mysql.com/doc/refman/8.4/en/select.html).
23. **^** ["MySQL Schema Object Names"](https://dev.mysql.com/doc/refman/8.4/en/identifiers.html).
24. **^** ["Guesswork Plagues Web Hole Reporting"](https://web.archive.org/web/20120709141229/http://www.securityfocus.com/news/346). [SecurityFocus](https://en.wikipedia.org/wiki/SecurityFocus). March 6, 2002. Archived from [the original](http://www.securityfocus.com/news/346) on July 9, 2012.
25. **^** ["WHID 2005-46: Teen uses SQL injection to break to a security magazine web site"](https://web.archive.org/web/20100117054540/http://www.xiom.com/whid-2005-46). Web Application Security Consortium. November 1, 2005. Archived from [the original](http://www.xiom.com/whid-2005-46) on January 17, 2010. Retrieved December 1, 2009.
26. **^** ["WHID 2006-3: Russian hackers broke into a RI GOV website"](https://web.archive.org/web/20110213051033/http://www.xiom.com/whid-2006-3). Web Application Security Consortium. January 13, 2006. Archived from [the original](http://www.xiom.com/whid-2006-3) on February 13, 2011. Retrieved May 16, 2008.
27. **^** ["Anti-U.S. Hackers Infiltrate Army Servers"](http://www.informationweek.com/architecture/anti-us-hackers-infiltrate-army-servers/d/d-id/1079964). [Information Week](https://en.wikipedia.org/wiki/Information_Week). May 29, 2009. [Archived](https://web.archive.org/web/20161220152101/http://www.informationweek.com/architecture/anti-us-hackers-infiltrate-army-servers/d/d-id/1079964) from the original on December 20, 2016. Retrieved December 17, 2016.
28. **^** Alex Papadimoulis (April 15, 2008). ["Oklahoma Leaks Tens of Thousands of Social Security Numbers, Other Sensitive Data"](http://thedailywtf.com/Articles/Oklahoma-Leaks-Tens-of-Thousands-of-Social-Security-Numbers,-Other-Sensitive-Data.aspx). [The Daily WTF](https://en.wikipedia.org/wiki/The_Daily_WTF). [Archived](https://web.archive.org/web/20080510115005/http://thedailywtf.com/Articles/Oklahoma-Leaks-Tens-of-Thousands-of-Social-Security-Numbers,-Other-Sensitive-Data.aspx) from the original on May 10, 2008. Retrieved May 16, 2008.
29. **^** ["US man 'stole 130m card numbers'"](https://news.bbc.co.uk/2/hi/americas/8206305.stm). BBC. August 17, 2009. [Archived](https://web.archive.org/web/20090818100739/http://news.bbc.co.uk/2/hi/americas/8206305.stm) from the original on August 18, 2009. Retrieved August 17, 2009.
30. **^** ["The pirate bay attack"](http://krebsonsecurity.com/2010/07/pirate-bay-hack-exposes-user-booty/). July 7, 2010. [Archived](https://web.archive.org/web/20100824183455/http://krebsonsecurity.com/2010/07/pirate-bay-hack-exposes-user-booty/) from the original on August 24, 2010.
31. **^** ["Did Little Bobby Tables migrate to Sweden?"](http://alicebobandmallory.com/articles/2010/09/23/did-little-bobby-tables-migrate-to-sweden). Alicebobandmallory.com. Retrieved June 3, 2011.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web)}}`:  CS1 maint: deprecated archival service ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_deprecated_archival_service))
32. **^** ["Royal Navy website attacked by Romanian hacker"](https://www.bbc.co.uk/news/technology-11711478). BBC News. November 8, 2010. [Archived](https://web.archive.org/web/20101109044947/http://www.bbc.co.uk/news/technology-11711478) from the original on November 9, 2010. Retrieved November 15, 2023.
33. **^** Sam Kiley (November 25, 2010). ["Super Virus A Target For Cyber Terrorists"](https://web.archive.org/web/20101128093507/http://news.sky.com/skynews/Home/World-News/Stuxnet-Worm-Virus-Targeted-At-Irans-Nuclear-Plant-Is-In-Hands-Of-Bad-Guys-Sky-News-Sources-Say/Article/201011415827544). Archived from [the original](http://news.sky.com/skynews/Home/World-News/Stuxnet-Worm-Virus-Targeted-At-Irans-Nuclear-Plant-Is-In-Hands-Of-Bad-Guys-Sky-News-Sources-Say/Article/201011415827544) on November 28, 2010. Retrieved November 25, 2010.
34. **^** ["Hacker breaks into Barracuda Networks database"](https://web.archive.org/web/20110727234547/http://www.networkworld.com/news/2011/041211-hacker-breaks-into-barracuda-networks.html?hpg1=bn). Archived from [the original](http://www.networkworld.com/news/2011/041211-hacker-breaks-into-barracuda-networks.html?hpg1=bn) on July 27, 2011.
35. **^** ["site user password intrusion info"](http://www.dslreports.com/forum/r25793356-). Dslreports.com. [Archived](https://web.archive.org/web/20121018190124/http://www.dslreports.com/forum/r25793356-) from the original on October 18, 2012. Retrieved June 3, 2011.
36. **^** ["DSLReports says member information stolen"](https://web.archive.org/web/20120321203011/http://news.cnet.com/8301-27080_3-20058471-245.html). Cnet News. April 28, 2011. Archived from [the original](https://news.cnet.com/8301-27080_3-20058471-245.html) on March 21, 2012. Retrieved April 29, 2011.
37. **^** ["DSLReports.com breach exposed more than 100,000 accounts"](https://web.archive.org/web/20110430234009/http://www.thetechherald.com/article.php/201117/7127/DSLReports-com-breach-exposed-more-than-100-000-accounts). The Tech Herald. April 29, 2011. Archived from the original on April 30, 2011. Retrieved April 29, 2011.
38. **^** ["LulzSec hacks Sony Pictures, reveals 1m passwords unguarded"](https://web.archive.org/web/20110606051745/http://www.electronista.com/articles/11/06/02/lulz.security.hits.sony.again.in.security.message), *electronista.com*, June 2, 2011, archived from [the original](http://www.electronista.com/articles/11/06/02/lulz.security.hits.sony.again.in.security.message/) on June 6, 2011, retrieved June 3, 2011
39. **^** ["Imperva.com: PBS Hacked - How Hackers Probably Did It"](https://web.archive.org/web/20110629080422/http://blog.imperva.com/2011/05/pbs-breached-how-hackers-probably-did-it.html). Archived from [the original](http://blog.imperva.com/2011/05/pbs-breached-how-hackers-probably-did-it.html) on June 29, 2011. Retrieved July 1, 2011.
40. **^** Ngak, Chenda. ["Yahoo reportedly hacked: Is your account safe?"](https://www.cbsnews.com/news/yahoo-reportedly-hacked-is-your-account-safe/). *[CBS News](https://en.wikipedia.org/wiki/CBS_News)*. [Archived](https://web.archive.org/web/20120714054030/http://www.cbsnews.com/8301-501465_162-57470956-501465/yahoo-reportedly-hacked-is-your-account-safe/) from the original on July 14, 2012. Retrieved July 16, 2012.
41. **^** Yap, Jamie (July 12, 2012). ["450,000 user passwords leaked in Yahoo breach"](https://www.zdnet.com/article/450000-user-passwords-leaked-in-yahoo-breach/). *ZDNet*. [Archived](https://web.archive.org/web/20140702174127/http://www.zdnet.com/450000-user-passwords-leaked-in-yahoo-breach-7000000772/) from the original on July 2, 2014. Retrieved February 18, 2017.
42. **^** Perlroth, Nicole (October 3, 2012). ["Hackers Breach 53 Universities and Dump Thousands of Personal Records Online"](https://bits.blogs.nytimes.com/2012/10/03/hackers-breach-53-universities-dump-thousands-of-personal-records-online/). *New York Times*. [Archived](https://web.archive.org/web/20121005021105/http://bits.blogs.nytimes.com/2012/10/03/hackers-breach-53-universities-dump-thousands-of-personal-records-online/) from the original on October 5, 2012.
43. **^** Kovacs, Eduard (November 4, 2013). ["Hackers Leak Data Allegedly Stolen from Chinese Chamber of Commerce Website"](http://news.softpedia.com/news/Hackers-Leak-Data-Allegedly-Stolen-from-Chinese-Chamber-of-Commerce-Website-396936.shtml). *Softpedia News*. [Archived](https://web.archive.org/web/20140302164439/http://news.softpedia.com/news/Hackers-Leak-Data-Allegedly-Stolen-from-Chinese-Chamber-of-Commerce-Website-396936.shtml) from the original on March 2, 2014. Retrieved February 27, 2014.
44. **^** Damon Poeter. ['Close-Knit' Russian Hacker Gang Hoards 1.2 Billion ID Creds](https://www.pcmag.com/article2/0,2817,2462057,00.asp) [Archived](https://web.archive.org/web/20170714132244/https://www.pcmag.com/article2/0,2817,2462057,00.asp) July 14, 2017, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine), *PC Magazine*, August 5, 2014
45. **^** Nicole Perlroth. [Russian Gang Amasses Over a Billion Internet Passwords](https://www.nytimes.com/2014/08/06/technology/russian-gang-said-to-amass-more-than-a-billion-stolen-internet-credentials.html?_r=0) [Archived](https://web.archive.org/web/20170227073652/https://www.nytimes.com/2014/08/06/technology/russian-gang-said-to-amass-more-than-a-billion-stolen-internet-credentials.html?_r=0) February 27, 2017, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine), *The New York Times*, August 5, 2014.
46. **^** ["TalkTalk gets record £400,000 fine for failing to prevent October 2015 attack"](https://web.archive.org/web/20161024090111/https://ico.org.uk/about-the-ico/news-and-events/news-and-blogs/2016/10/talktalk-gets-record-400-000-fine-for-failing-to-prevent-october-2015-attack/). October 5, 2016. Archived from [the original](https://ico.org.uk/about-the-ico/news-and-events/news-and-blogs/2016/10/talktalk-gets-record-400-000-fine-for-failing-to-prevent-october-2015-attack/) on October 24, 2016. Retrieved October 23, 2016.
47. **^** Goodin, Dan (March 2, 2021). ["Rookie coding mistake prior to Gab hack came from site's CTO"](https://arstechnica.com/gadgets/2021/03/rookie-coding-mistake-prior-to-gab-hack-came-from-sites-cto/). *Ars Technica*.
48. **^** Goodin, Dan (March 8, 2021). ["Gab, a haven for pro-Trump conspiracy theories, has been hacked again"](https://arstechnica.com/information-technology/2021/03/gab-a-haven-for-pro-trump-conspiracy-theories-has-been-hacked-again/). *Ars Technica*.
49. **^** ["Mass exploitation of critical MOVEit flaw is ransacking orgs big and small"](https://arstechnica.com/information-technology/2023/06/mass-exploitation-of-critical-moveit-flaw-is-ransacking-orgs-big-and-small/). *Ars Technica*. June 6, 2023. Retrieved March 9, 2025.
50. **^** ["Researchers say a bug let them add fake pilots to rosters used for TSA checks"](https://www.theverge.com/2024/9/8/24239026/airline-security-bug-tsa-security-database-sql-injection-hack). *The Verge*. September 8, 2024. Retrieved March 9, 2025.
51. **^** Munroe, Randall. ["XKCD: Exploits of a Mom"](http://xkcd.com/327/). [Archived](https://web.archive.org/web/20130225190751/http://www.xkcd.com/327/) from the original on February 25, 2013. Retrieved February 26, 2013.
52. **^** ["The Bobby Tables Guide to SQL Injection"](https://web.archive.org/web/20171107060055/https://www.techrepublic.com/blog/it-security/the-bobby-tables-guide-to-sql-injection/). September 15, 2009. Archived from [the original](https://www.techrepublic.com/blog/it-security/the-bobby-tables-guide-to-sql-injection/) on November 7, 2017. Retrieved October 30, 2017.
53. **^** ["Jego firma ma w nazwie SQL injection. Nie zazdrościmy tym, którzy będą go fakturowali ;)"](http://niebezpiecznik.pl/post/jego-firma-ma-w-nazwie-sql-injection-nie-zazdroscimy-tym-ktorzy-beda-go-fakturowali/). *Niebezpiecznik* (in Polish). September 11, 2014. [Archived](https://web.archive.org/web/20140924073521/http://niebezpiecznik.pl/post/jego-firma-ma-w-nazwie-sql-injection-nie-zazdroscimy-tym-ktorzy-beda-go-fakturowali/) from the original on September 24, 2014. Retrieved September 26, 2014.

## External links

* [OWASP SQL Injection Cheat Sheets](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html), by OWASP.
* [WASC Threat Classification - SQL Injection Entry](http://projects.webappsec.org/SQL-Injection), by the Web Application Security Consortium.
* [Why SQL Injection Won't Go Away](https://drive.google.com/file/d/1mOsNvMhsrudDz8kBiisdkdKyFvqbH0A-/view?usp=sharing) [Archived](https://web.archive.org/web/20121109235333/http://docs.google.com/leaf?id=0BykNNUTb95yzYTRjMjNjMWEtODBmNS00YzgwLTlmMGYtNWZmODI2MTNmZWYw&sort=name&layout=list&num=50) November 9, 2012, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine), by Stuart Thomas.
* [SDL Quick security references on SQL injection](https://go.microsoft.com/?linkid=9707610) by Bala Neerumalla.
* [How security flaws work: SQL injection](https://arstechnica.com/information-technology/2016/10/how-security-flaws-work-sql-injection/)
 
NewPP limit report
Parsed by mw‐web.codfw.main‐7f6954bfc6‐s7fxk
Cached time: 20260422120359
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.583 seconds
Real time usage: 2.000 seconds
Preprocessor visited node count: 3911/1000000
Revision size: 48803/2097152 bytes
Post‐expand include size: 128948/2097152 bytes
Template argument size: 5350/2097152 bytes
Highest expansion depth: 12/100
Expensive parser function count: 35/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 209616/5000000 bytes
Lua time usage: 0.339/10.000 seconds
Lua memory usage: 7398901/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00% 1894.211      1 -total
 13.83%  262.052      1 Template:Reflist
  8.93%  169.171     37 Template:Cite_web
  3.56%   67.386      1 Template:Short_description
  3.36%   63.566      1 Template:Information_security
  3.27%   61.928      1 Template:Navbox
  2.75%   52.079      1 Template:Norefs
  2.41%   45.614      1 Template:Ambox
  2.06%   39.068      2 Template:Pagetype
  2.05%   38.819      6 Template:Citation_needed
 Render ID 584763d6-3e43-11f1-90ae-f3ab2e081457  Saved in parser cache with key enwiki:pcache:526999:|#|:idhash:canonical and timestamp 20260422120359 and revision id 1350524888. Rendering was triggered because: diff-page