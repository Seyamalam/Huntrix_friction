# JavaScript - Wikipedia

Source: https://en.wikipedia.org/wiki/JavaScript

---

High-level programming language

| JavaScript |
| --- |
| Screenshot of JavaScript source code |
| Paradigms | Multi-paradigm : event-driven , functional , imperative , procedural , object-oriented |
| Family | ECMAScript |
| Designed by | Brendan Eich of Netscape first; then others contributed to ECMAScript standard |
| First appeared | 4 December 1995 ; 30 years ago ( 1995-12-04 ) |
|  |
| Stable release | ECMAScript 2024 / June 2024 ; 22 months ago ( June 2024 ) |
| Preview release | ECMAScript 2025 / 27 March 2024 ; 2 years ago ( 27 March 2024 ) |
|  |
| Typing discipline | Dynamic , weak , duck |
| Memory management | Garbage collected |
| Scope | lexical |
| Filename extensions | .js • .mjs • .cjs |
| Website | ecma-international .org /publications-and-standards /standards /ecma-262 / |
|  |
| V8 , JavaScriptCore , SpiderMonkey ; Chakra (deprecated) |
|  |
| Java , Scheme , Self , AWK , HyperTalk |
|  |
| ActionScript , ArkTS , AssemblyScript , CoffeeScript , Dart , Haxe , JS++ , Opa , TypeScript |
|  |

**JavaScript** (**JS**) is a [programming language](https://en.wikipedia.org/wiki/Programming_language) and core technology of [the Web](https://en.wikipedia.org/wiki/World_Wide_Web), alongside [HTML](https://en.wikipedia.org/wiki/HTML) and [CSS](https://en.wikipedia.org/wiki/CSS). It was created by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) in 1995. As of 2025, the overwhelming majority of [websites](https://en.wikipedia.org/wiki/Website) (98.9%) uses JavaScript for [client](https://en.wikipedia.org/wiki/Client_(computing)) side [webpage](https://en.wikipedia.org/wiki/Web_page) behavior.

[Web browsers](https://en.wikipedia.org/wiki/Web_browser) have a dedicated [JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine) that executes the client [code](https://en.wikipedia.org/wiki/Source_code). These engines are also utilized in some [servers](https://en.wikipedia.org/wiki/Server_(computing)) and a variety of [apps](https://en.wikipedia.org/wiki/Application_software). The most popular [runtime system](https://en.wikipedia.org/wiki/Runtime_system) for non-browser usage is [Node.js](https://en.wikipedia.org/wiki/Node.js).

JavaScript is a [high-level](https://en.wikipedia.org/wiki/High-level_programming_language), often [just-in-time–compiled](https://en.wikipedia.org/wiki/Just-in-time_compilation) language that conforms to the [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) standard. It has [dynamic typing](https://en.wikipedia.org/wiki/Dynamic_typing), [prototype-based](https://en.wikipedia.org/wiki/Prototype-based_programming) [object-orientation](https://en.wikipedia.org/wiki/Object-oriented_programming), and [first-class functions](https://en.wikipedia.org/wiki/First-class_function). It is [multi-paradigm](https://en.wikipedia.org/wiki/Programming_paradigm), supporting [event-driven](https://en.wikipedia.org/wiki/Event-driven_programming), [functional](https://en.wikipedia.org/wiki/Functional_programming), and [imperative](https://en.wikipedia.org/wiki/Imperative_programming) [programming styles](https://en.wikipedia.org/wiki/Programming_paradigm). It has [application programming interfaces](https://en.wikipedia.org/wiki/Application_programming_interface) (APIs) for working with text, dates, [regular expressions](https://en.wikipedia.org/wiki/Regular_expression), standard [data structures](https://en.wikipedia.org/wiki/Data_structure), and the [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model) (DOM).

The ECMAScript standard does not include any [input/output](https://en.wikipedia.org/wiki/Input/output) (I/O), such as [networking](https://en.wikipedia.org/wiki/Computer_network), [storage](https://en.wikipedia.org/wiki/Data_storage), or [graphics](https://en.wikipedia.org/wiki/Computer_graphics) facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.

Although [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) and JavaScript are similar in name and [syntax](https://en.wikipedia.org/wiki/Syntax_(programming_languages)), the two languages are distinct and differ greatly in design.

## History

### Creation at Netscape

The first popular [web browser](https://en.wikipedia.org/wiki/Web_browser) with a [graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interface), [Mosaic](https://en.wikipedia.org/wiki/Mosaic_(web_browser)), was released in 1993. The lead developers of Mosaic then founded the [Netscape](https://en.wikipedia.org/wiki/Netscape) corporation, which released a more polished browser, [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator), in 1994. This quickly became the most-used.

During these formative years of the Web, [web pages](https://en.wikipedia.org/wiki/Web_page) could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the flourishing web development scene to remove this limitation, so in 1995, Netscape decided to add a [programming language](https://en.wikipedia.org/wiki/Programming_language) to Navigator. They pursued two routes to achieve this: collaborating with [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) to embed the [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) language, while also hiring [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) to embed the [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) language.

The goal was a "language for the masses", "to help nonprogrammers create dynamic, interactive [Web sites](https://en.wikipedia.org/wiki/Website)". Netscape management soon decided that the best option was for Eich to devise a new language, with syntax similar to Java and less like Scheme or other extant [scripting languages](https://en.wikipedia.org/wiki/Scripting_language). Although the new language and its [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing)) implementation were called LiveScript when first shipped as part of a Navigator [beta](https://en.wikipedia.org/wiki/Beta_software) in September 1995, the name was changed to JavaScript for the official release in December.

The choice of the *JavaScript* name has caused confusion, implying that it is directly related to Java. At the time, the [dot-com boom](https://en.wikipedia.org/wiki/Dot-com_bubble) had begun and Java was a popular new language, so Eich considered the JavaScript name a marketing ploy by Netscape.

### Adoption by Microsoft

[Microsoft](https://en.wikipedia.org/wiki/Microsoft) debuted [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer) in 1995, leading to a [browser war](https://en.wikipedia.org/wiki/Browser_war) with Netscape. On the JavaScript front, Microsoft created its own [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing)) called [JScript](https://en.wikipedia.org/wiki/JScript).

Microsoft first released JScript in 1996, alongside initial support for [CSS](https://en.wikipedia.org/wiki/CSS) and extensions to [HTML](https://en.wikipedia.org/wiki/HTML). Each of these [implementations](https://en.wikipedia.org/wiki/Implementation) was noticeably different from their counterparts in [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator). These differences made it difficult for developers to make their websites work well in both browsers, leading to widespread use of "best viewed in Netscape" and "best viewed in Internet Explorer" logos for several years.

### The rise of JScript

In November 1996, [Netscape](https://en.wikipedia.org/wiki/Netscape) submitted JavaScript to [Ecma International](https://en.wikipedia.org/wiki/Ecma_International), as the starting point for a standard specification that all browser vendors could conform to. This led to the official release of the first [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) language specification in June 1997.

The standards process continued for a few years, with the release of ECMAScript 2 in June 1998 and ECMAScript 3 in December 1999. Work on ECMAScript 4 began in 2000.

However, the effort to fully standardize the language was undermined by Microsoft gaining an increasingly dominant position in the browser market. By the early 2000s, [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer)'s market share reached 95%. This meant that [JScript](https://en.wikipedia.org/wiki/JScript) became the de facto standard for [client-side scripting](https://en.wikipedia.org/wiki/Client-side_scripting) on the Web.

Microsoft initially participated in the standards process and implemented some proposals in its JScript language, but eventually it stopped collaborating on ECMA work. Thus ECMAScript 4 was mothballed.

### Growth and standardization

[![Logo of Ecma International Technical Committee 39 who is responsible for maintaining the standard](//upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Logo_of_TC39.svg/250px-Logo_of_TC39.svg.png)](https://en.wikipedia.org/wiki/File:Logo_of_TC39.svg)

Logo of

[Ecma International](https://en.wikipedia.org/wiki/Ecma_International)

Technical Committee 39 who is responsible for maintaining the standard

During the period of [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer) dominance in the early 2000s, client-side scripting was stagnant. This started to change in 2004, when the successor of Netscape, [Mozilla](https://en.wikipedia.org/wiki/Mozilla), released the [Firefox](https://en.wikipedia.org/wiki/Firefox) browser. Firefox was well received by many, taking significant market share from Internet Explorer.

In 2005, Mozilla joined ECMA International, and work started on the [ECMAScript for XML](https://en.wikipedia.org/wiki/ECMAScript_for_XML) (E4X) standard. This led to Mozilla working jointly with [Macromedia](https://en.wikipedia.org/wiki/Macromedia) (later acquired by [Adobe Systems](https://en.wikipedia.org/wiki/Adobe_Systems)), who were implementing E4X in their ActionScript 3 language, which was based on an ECMAScript 4 draft. The goal became standardizing ActionScript 3 as the new ECMAScript 4. To this end, Adobe Systems released the [Tamarin](https://en.wikipedia.org/wiki/Tamarin_(software)) implementation as an [open source](https://en.wikipedia.org/wiki/Open-source_model) project. However, Tamarin and ActionScript 3 were too different from established client-side scripting, and without cooperation from Microsoft, ECMAScript 4 never reached fruition.

Meanwhile, very important developments were occurring in open-source communities not affiliated with ECMA work. In 2005, [Jesse James Garrett](https://en.wikipedia.org/wiki/Jesse_James_Garrett) released a white paper in which he coined the term [Ajax](https://en.wikipedia.org/wiki/Ajax_(programming)) and described a set of technologies, of which JavaScript was the backbone, to create [web applications](https://en.wikipedia.org/wiki/Web_application) where data can be loaded in the background, avoiding the need for full page reloads. This sparked a renaissance period of JavaScript, spearheaded by open-source libraries and the communities that formed around them. Many new libraries were created, including [jQuery](https://en.wikipedia.org/wiki/JQuery), [Prototype](https://en.wikipedia.org/wiki/Prototype_JavaScript_Framework), [Dojo Toolkit](https://en.wikipedia.org/wiki/Dojo_Toolkit), and [MooTools](https://en.wikipedia.org/wiki/MooTools).

[Google](https://en.wikipedia.org/wiki/Google) debuted its [Chrome](https://en.wikipedia.org/wiki/Google_Chrome) browser in 2008, with the [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) JavaScript engine that was faster than its competition. The key innovation was [just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) (JIT), so other browser vendors needed to overhaul their engines for JIT.

In July 2008, these disparate parties came together for a conference in [Oslo](https://en.wikipedia.org/wiki/Oslo). This led to the eventual agreement in early 2009 to combine all relevant work and drive the language forward. The result was the ECMAScript 5 standard, released in December 2009.

### Reaching maturity

Ambitious work on the language continued for several years, culminating in an extensive collection of additions and refinements being formalized with the publication of [ECMAScript 6](https://en.wikipedia.org/wiki/ECMAScript_6) in 2015.

The creation of [Node.js](https://en.wikipedia.org/wiki/Node.js) in 2009 by [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) sparked a significant increase in the usage of JavaScript outside of web browsers. Node combines the [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) engine, an [event loop](https://en.wikipedia.org/wiki/Event_loop), and [I/O](https://en.wikipedia.org/wiki/Input/output) [APIs](https://en.wikipedia.org/wiki/Application_programming_interface), thereby providing a stand-alone JavaScript runtime system. As of 2018, Node had been used by millions of developers, and [npm](https://en.wikipedia.org/wiki/Npm_(software)) had the most modules of any [package manager](https://en.wikipedia.org/wiki/Package_manager) in the world.

The ECMAScript draft specification is currently maintained openly on [GitHub](https://en.wikipedia.org/wiki/GitHub), and editions are produced via regular annual snapshots. Potential revisions to the language are vetted through a comprehensive proposal process. Now, instead of edition numbers, developers check the status of upcoming features individually.

The current JavaScript ecosystem has many [libraries](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) and [frameworks](https://en.wikipedia.org/wiki/Web_framework), established programming practices, and substantial usage of JavaScript outside of web browsers. Plus, with the rise of [single-page applications](https://en.wikipedia.org/wiki/Single-page_application) and other JavaScript-heavy websites, several [transpilers](https://en.wikipedia.org/wiki/Source-to-source_compiler) have been created to aid the development process.

## Trademark

"JavaScript" is a [trademark](https://en.wikipedia.org/wiki/Trademark) of [Oracle Corporation](https://en.wikipedia.org/wiki/Oracle_Corporation) in the United States. The trademark was originally issued to [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) on 6 May 1997, and was transferred to Oracle when they acquired Sun in 2009.

A letter was circulated in September 2024, spearheaded by [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl), calling on Oracle to free the JavaScript trademark. [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich), the original creator of JavaScript, was among the over 14,000 signatories who supported the initiative.

## Website client-side usage

JavaScript is the dominant [client-side](https://en.wikipedia.org/wiki/Client-side) [scripting language](https://en.wikipedia.org/wiki/Scripting_language) of the Web, with 99% of all [websites](https://en.wikipedia.org/wiki/Website) using it for this purpose. Scripts are embedded in or included from [HTML](https://en.wikipedia.org/wiki/HTML) documents and interact with the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model).

All major [web browsers](https://en.wikipedia.org/wiki/Web_browser) have a built-in [JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine) that executes the [code](https://en.wikipedia.org/wiki/Source_code) on the user's device.

### Examples of scripted behavior

### Libraries and frameworks

Over 80% of websites use a third-party JavaScript [library](https://en.wikipedia.org/wiki/Library_(computing)) or [web framework](https://en.wikipedia.org/wiki/Web_framework) as part of their client-side scripting.

[jQuery](https://en.wikipedia.org/wiki/JQuery) is by far the most-used. Other notable ones include [Angular](https://en.wikipedia.org/wiki/Angular_(web_framework)), [Bootstrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)), [Lodash](https://en.wikipedia.org/wiki/Lodash), [Modernizr](https://en.wikipedia.org/wiki/Modernizr), [React](https://en.wikipedia.org/wiki/React_(software)), [Underscore](https://en.wikipedia.org/wiki/Underscore.js), and [Vue](https://en.wikipedia.org/wiki/Vue.js). Multiple options can be used in conjunction, such as jQuery and Bootstrap.

However, the term "Vanilla JS" was coined for websites not using any libraries or frameworks at all, instead relying entirely on standard JavaScript functionality.

## Other usage

The use of JavaScript has expanded beyond its [web browser](https://en.wikipedia.org/wiki/Web_browser) roots. [JavaScript engines](https://en.wikipedia.org/wiki/JavaScript_engine) are now embedded in a variety of other software systems, both for [server-side](https://en.wikipedia.org/wiki/Server-side) website deployments and non-browser [applications](https://en.wikipedia.org/wiki/Application_software).

Initial attempts at promoting server-side JavaScript usage were [Netscape Enterprise Server](https://en.wikipedia.org/wiki/Netscape_Enterprise_Server) and [Microsoft](https://en.wikipedia.org/wiki/Microsoft)'s [Internet Information Services](https://en.wikipedia.org/wiki/Internet_Information_Services), but they were small niches. Server-side usage eventually started to grow in the late 2000s, with the creation of [Node.js](https://en.wikipedia.org/wiki/Node.js) and [other approaches](https://en.wikipedia.org/wiki/List_of_server-side_JavaScript_implementations).

[Electron](https://en.wikipedia.org/wiki/Electron_(software_framework)), [Cordova](https://en.wikipedia.org/wiki/Apache_Cordova), [React Native](https://en.wikipedia.org/wiki/React_Native), and other [application frameworks](https://en.wikipedia.org/wiki/Application_framework) have been used to create many applications with behavior implemented in JavaScript. Other non-browser applications include [Adobe Acrobat](https://en.wikipedia.org/wiki/Adobe_Acrobat) support for scripting [PDF](https://en.wikipedia.org/wiki/PDF) documents and [GNOME Shell](https://en.wikipedia.org/wiki/GNOME_Shell) extensions written in JavaScript.

[Oracle](https://en.wikipedia.org/wiki/Oracle_Corporation) used to provide [Nashorn](https://en.wikipedia.org/wiki/Nashorn_(JavaScript_engine)), a JavaScript interpreter, as part of their [Java Development Kit (JDK)](https://en.wikipedia.org/wiki/JDK) API library along with **jjs** a command line interpreter as of JDK version 8. It was removed in JDK 15. As a replacement Oracle offered GraalJS which can also be used with the [OpenJDK](https://en.wikipedia.org/wiki/OpenJDK) which allows one to create and reference Java objects in JavaScript code and add runtime scripting in JavaScript to applications written in Java.

JavaScript has been used in some [embedded systems](https://en.wikipedia.org/wiki/Embedded_system), usually by leveraging Node.js.

## Execution

### JavaScript engine

### Runtime system

A JavaScript engine must be embedded within a [runtime system](https://en.wikipedia.org/wiki/Runtime_system) (such as a [web browser](https://en.wikipedia.org/wiki/Web_browser) or a standalone system) to enable scripts to interact with the broader environment. The runtime system includes the necessary APIs for [input/output](https://en.wikipedia.org/wiki/Input/output) operations, such as [networking](https://en.wikipedia.org/wiki/Computer_network), [storage](https://en.wikipedia.org/wiki/Data_storage), and [graphics](https://en.wikipedia.org/wiki/Computer_graphics), and provides the ability to import scripts.

JavaScript is a single-[threaded](https://en.wikipedia.org/wiki/Thread_(computing)) language. The runtime processes [messages](https://en.wikipedia.org/wiki/Message_(computer_science)) from a [queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) one at a time, and it calls a [function](https://en.wikipedia.org/wiki/Subroutine) associated with each new message, creating a [call stack](https://en.wikipedia.org/wiki/Call_stack) frame with the function's [arguments](https://en.wikipedia.org/wiki/Parameter_(computer_programming)) and [local variables](https://en.wikipedia.org/wiki/Local_variable). The call stack shrinks and grows based on the function's needs. When the call stack is empty upon function completion, JavaScript proceeds to the next message in the queue. This is called the [event loop](https://en.wikipedia.org/wiki/Event_loop), described as "run to completion" because each message is fully processed before the next message is considered. However, the language's [concurrency model](https://en.wikipedia.org/wiki/Concurrency_(computer_science)) describes the event loop as [non-blocking](https://en.wikipedia.org/wiki/Asynchronous_I/O): program I/O is performed using [events](https://en.wikipedia.org/wiki/Event_(computing)) and [callback functions](https://en.wikipedia.org/wiki/Callback_(computer_programming)). This means, for example, that JavaScript can process a mouse click while waiting for a database query to return information.

The notable standalone runtimes are [Node.js](https://en.wikipedia.org/wiki/Node.js), [Deno](https://en.wikipedia.org/wiki/Deno_(software)), and [Bun](https://en.wikipedia.org/wiki/Bun_(software)).

## Features

The following features are common to all conforming ECMAScript implementations unless explicitly specified otherwise. The number of cited reserved words including keywords is 50–60 and varies depending on the implementation.

### Imperative and structured

JavaScript supports much of the [structured programming](https://en.wikipedia.org/wiki/Structured_programming) syntax from [C](https://en.wikipedia.org/wiki/C_(computer_language)) (e.g., `if` statements, `while` loops, `switch` statements, `do while` loops, etc.). One partial exception is [scoping](https://en.wikipedia.org/wiki/Scope_(computer_science)): originally JavaScript only had [function scoping](https://en.wikipedia.org/wiki/Function_scoping) with `var`; [block scoping](https://en.wikipedia.org/wiki/Block_scoping) was added in ECMAScript 2015 with the keywords `let` and `const`. Like C, JavaScript makes a distinction between [expressions](https://en.wikipedia.org/wiki/Expression_(computer_science)) and [statements](https://en.wikipedia.org/wiki/Statement_(computer_science)). One syntactic difference from C is [automatic semicolon insertion](https://en.wikipedia.org/wiki/Defensive_semicolon), which allow semicolons (which terminate statements) to be omitted.

### Weakly typed

JavaScript is [weakly typed](https://en.wikipedia.org/wiki/Strong_and_weak_typing), which means certain types are implicitly cast depending on the operation used.

* The binary `+` operator casts both operands to a string unless both operands are numbers. This is because the addition operator doubles as a concatenation operator
* The binary `-` operator always casts both operands to a number
* Both unary operators (`+`, `-`) always cast the operand to a number. However, `+` always casts to `Number` ([binary64](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)) while `-` preserves `BigInt` ([integer](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic))

Values are cast to strings as follows:

* Strings are left as-is
* Numbers are converted to their string representation
* Arrays have their elements cast to strings after which they are joined by commas (`,`)
* Other objects are converted to the string `[object Object]` where `Object` is the name of the constructor of the object

Values are cast to numbers by casting to strings and then casting the strings to numbers. These processes can be modified by defining `toString` and `valueOf` functions on the [prototype](#Object-orientation_(prototype-based)) for string and number casting respectively.

JavaScript has received criticism for the way it implements these conversions as the complexity of the rules can be mistaken for inconsistency. For example, when adding a number to a string, the number will be cast to a string before performing concatenation, but when subtracting a number from a string, the string is cast to a number before performing subtraction.

| left operand | operator | right operand | result |
| --- | --- | --- | --- |
| [] (empty array) | + | [] (empty array) | "" (empty string) |
| [] (empty array) | + | {} (empty object) | "[object Object]" (string) |
| false (boolean) | + | [] (empty array) | "false" (string) |
| "123" (string) | + | 1 (number) | "1231" (string) |
| "123" (string) | - | 1 (number) | 122 (number) |
| "123" (string) | - | "abc" (string) | NaN (number) |

Often also mentioned is `{} + []` resulting in `0` (number). This is misleading: the `{}` is interpreted as an empty code block instead of an empty object, and the empty array is cast to a number by the remaining unary `+` operator. If the expression is wrapped in parentheses - `({} + [])` – the curly brackets are interpreted as an empty object and the result of the expression is `"[object Object]"` as expected.

### Dynamic

#### Typing

JavaScript is [dynamically typed](https://en.wikipedia.org/wiki/Dynamic_typing) like most other [scripting languages](https://en.wikipedia.org/wiki/Scripting_language). A [type](https://en.wikipedia.org/wiki/Type_system) is associated with a [value](https://en.wikipedia.org/wiki/Value_(computer_science)) rather than an expression. For example, a [variable](https://en.wikipedia.org/wiki/Variable_(programming)) initially bound to a number may be reassigned to a [string](https://en.wikipedia.org/wiki/String_(computer_science)). JavaScript supports various ways to test the type of objects, including [duck typing](https://en.wikipedia.org/wiki/Duck_typing).

#### Run-time evaluation

JavaScript includes an `eval` function that can execute statements provided as strings at run-time.

### Object-orientation (prototype-based)

Prototypal inheritance in JavaScript is described by [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford) as:

> You make prototype objects, and then ... make new instances. Objects are mutable in JavaScript, so we can augment the new instances, giving them new fields and methods. These can then act as prototypes for even newer objects. We don't need classes to make lots of similar objects... Objects inherit from objects. What could be more object oriented than that?

In JavaScript, an [object](https://en.wikipedia.org/wiki/Object_(computer_science)) is an [associative array](https://en.wikipedia.org/wiki/Associative_array), augmented with a prototype (see below); each key provides the name for an object [property](https://en.wikipedia.org/wiki/Property_(programming)), and there are two syntactical ways to specify such a name: dot notation (`obj.x = 10`) and bracket notation (`obj["x"] = 10`). A property may be added, rebound, or deleted at run-time. Most [properties](https://en.wikipedia.org/wiki/Property_(programming)) of an object (and any property that belongs to an object's prototype inheritance chain) can be enumerated using a `for...in` loop.

#### Prototypes

JavaScript uses [prototypes](https://en.wikipedia.org/wiki/Prototype-based_programming) where many other object-oriented languages use [classes](https://en.wikipedia.org/wiki/Class_(computer_science)) for [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)), but it's still possible to simulate most class-based features with the prototype system. Additionally, [ECMAScript version 6](https://en.wikipedia.org/wiki/ECMAScript) (released June 2015) introduced the keywords **class**, **extends** and **super**, which serve as syntactic sugar to abstract the underlying prototypal inheritance system with a more conventional interface. Constructors are declared by specifying a method named **constructor**, and all classes are automatically subclasses of the base class Object, similarly to Java.

```
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
}

const bob = new Student("Robert", 12345);
console.log(bob.name); // Robert

```

Though the underlying object mechanism is still based on prototypes, the newer syntax is similar to other object oriented languages. Private variables are declared by prefixing the field name with a [number sign](https://en.wikipedia.org/wiki/Number_sign) (#), and [polymorphism](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) is not directly supported, although it can be emulated by manually calling different functions depending on the number and type of arguments provided.

#### Functions as object constructors

Functions double as object constructors, along with their typical role. Prefixing a function call with *new* will create an instance of a prototype, inheriting properties and methods from the constructor (including properties from the `Object` prototype). ECMAScript 5 offers the `Object.create` method, allowing explicit creation of an instance without automatically inheriting from the `Object` prototype (older environments can assign the prototype to `null`). The constructor's `prototype` property determines the object used for the new object's internal prototype. New methods can be added by modifying the prototype of the function used as a constructor.

```
// This code is completely equivalent to the previous snippet
function Person(name) {
    this.name = name;
}

function Student(name, id) {
    Person.call(this, name);
    this.id = id;
}

var bob = new Student("Robert", 12345);
console.log(bob.name); // Robert

```

JavaScript's built-in classes, such as `Array` and `Object`, also have prototypes that can be modified. However, it's generally considered bad practice to [modify built-in objects](https://en.wikipedia.org/wiki/Monkey_patch), because third-party code may use or inherit methods and properties from these objects, and may not expect the prototype to be modified.

#### Functions as methods

Unlike in many object-oriented languages, in JavaScript there is no distinction between a function definition and a [method](https://en.wikipedia.org/wiki/Method_(computer_science)) definition. Rather, the distinction occurs during function calling. When a function is called as a method of an object, the function's local *this* keyword is bound to that object for that invocation.

### Functional

JavaScript [functions](https://en.wikipedia.org/wiki/Subroutine) are [first-class](https://en.wikipedia.org/wiki/First-class_function); a function is considered to be an object. As such, a function may have properties and methods, such as `.call()` and `.bind()`.

#### Lexical closure

A *nested* function is a function defined within another function. It is created each time the outer function is invoked.

In addition, each nested function forms a [lexical closure](https://en.wikipedia.org/wiki/Closure_(computer_programming)): the [lexical scope](https://en.wikipedia.org/wiki/Scope_(programming)#Lexical_scoping_vs._dynamic_scoping) of the outer function (including any constant, local variable, or argument value) becomes part of the internal state of each inner function object, even after execution of the outer function concludes.

#### Anonymous function

JavaScript also supports [anonymous functions](https://en.wikipedia.org/wiki/Anonymous_function).

### Delegative

JavaScript supports implicit and explicit [delegation](https://en.wikipedia.org/wiki/Delegation_(object-oriented_programming)).

#### Functions as roles (Traits and Mixins)

JavaScript natively supports various function-based implementations of [Role](https://en.wikipedia.org/wiki/Role-oriented_programming) patterns like [Traits](https://en.wikipedia.org/wiki/Traits_(computer_science)) and [Mixins](https://en.wikipedia.org/wiki/Mixin). Such a function defines additional behavior by at least one method bound to the `this` keyword within its `function` body. A Role then has to be delegated explicitly via `call` or `apply` to objects that need to feature additional behavior that is not shared via the prototype chain.

#### Object composition and inheritance

Whereas explicit function-based delegation does cover [composition](https://en.wikipedia.org/wiki/Object_composition) in JavaScript, implicit delegation already happens every time the prototype chain is walked in order to, e.g., find a method that might be related to but is not directly owned by an object. Once the method is found it gets called within this object's context. Thus [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)) in JavaScript is covered by a delegation automatism that is bound to the prototype property of constructor functions.

### Miscellaneous

#### Zero-based numbering

JavaScript is a [zero-index](https://en.wikipedia.org/wiki/Zero-based_numbering#Usage_in_programming_languages) language.

#### Variadic functions

An indefinite number of parameters can be passed to a function. The function can access them through [formal parameters](https://en.wikipedia.org/wiki/Formal_parameter) and also through the local `arguments` object. [Variadic functions](https://en.wikipedia.org/wiki/Variadic_functions) can also be created by using the `bind` method.

#### Array and object literals

Like in many scripting languages, arrays and objects ([associative arrays](https://en.wikipedia.org/wiki/Associative_arrays) in other languages) can each be created with a succinct shortcut syntax. In fact, these [literals](https://en.wikipedia.org/wiki/Object_literal) form the basis of the [JSON](https://en.wikipedia.org/wiki/JSON) data format.

#### Regular expressions

JavaScript supports [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) for text searches and manipulation.

##### Promises

A built-in Promise object provides functionality for handling promises and associating handlers with an asynchronous action's eventual result. JavaScript supplies combinator methods, which allow developers to combine multiple JavaScript promises and do operations based on different scenarios. The methods introduced are: Promise.race, Promise.all, Promise.allSettled and Promise.any.

##### Async/await

Async/await allows an asynchronous, non-blocking function to be structured in a way similar to an ordinary synchronous function. Asynchronous, non-blocking code can be written, with minimal overhead, structured similarly to traditional synchronous, blocking code.

### Vendor-specific extensions

Historically, some [JavaScript engines](https://en.wikipedia.org/wiki/JavaScript_engine) supported these non-standard features:

* [array comprehensions](https://en.wikipedia.org/wiki/List_comprehension) and generator expressions (like Python)
* concise function expressions (`function(args) expr`; this experimental syntax predated arrow functions)
* [ECMAScript for XML](https://en.wikipedia.org/wiki/ECMAScript_for_XML) (E4X), an extension that adds native XML support to ECMAScript (unsupported in Firefox since version 21)

## Syntax

[Variables](https://en.wikipedia.org/wiki/Variable_(computer_science)) in JavaScript can be defined using either the `var`, `let` or `const` keywords. Variables defined without keywords will be defined at the global scope.

Arrow functions were first introduced in [6th Edition – ECMAScript 2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015). They shorten the syntax for writing functions in JavaScript. Arrow functions are anonymous, so a variable is needed to refer to them in order to invoke them after their creation, unless surrounded by parenthesis and executed immediately.

Here is an example of JavaScript syntax.

```
// Declares a function-scoped variable named `x`, and implicitly assigns the
// special value `undefined` to it. Variables without value are automatically
// set to undefined.
// var is generally considered bad practice and let and const are usually preferred.
var x;

// Variables can be manually set to `undefined` like so
let x2 = undefined;

// Declares a block-scoped variable named `y`, and implicitly sets it to
// `undefined`. The `let` keyword was introduced in ECMAScript 2015.
let y;

// Declares a block-scoped, un-reassignable variable named `z`, and sets it to
// a string literal. The `const` keyword was also introduced in ECMAScript 2015,
// and must be explicitly assigned to.

// The keyword `const` means constant, hence the variable cannot be reassigned
// as the value is `constant`.
const z = "this value cannot be reassigned!";

// Declares a global-scoped variable and assigns 3.  This is generally considered
// bad practice, and will not work if strict mode is on.
t = 3;

// Declares a variable named `myNumber`, and assigns a number literal (the value
// `2`) to it.
let myNumber = 2;

// Reassigns `myNumber`, setting it to a string literal (the value `"foo"`).
// JavaScript is a dynamically-typed language, so this is legal.
myNumber = "foo";

```

Note the [comments](https://en.wikipedia.org/wiki/Comment_(computer_programming)) in the examples above, all of which were preceded with two [forward slashes](https://en.wikipedia.org/wiki/Slash_(punctuation)).

More examples can be found at the [Wikibooks page on JavaScript syntax examples](https://en.wikibooks.org/wiki/JavaScript/Syntax_examples).

## Security

JavaScript and the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) provide the potential for malicious authors to deliver scripts to run on a client computer via the Web. Browser authors minimize this risk using two restrictions. First, scripts run in a [sandbox](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) in which they can only perform Web-related actions, not general-purpose programming tasks like creating files. Second, scripts are constrained by the [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy): scripts from one website do not have access to information such as usernames, passwords, or cookies sent to another site. Most JavaScript-related security bugs are breaches of either the same origin policy or the sandbox.

There are subsets of general JavaScript—ADsafe, Secure ECMAScript (SES)—that provide greater levels of security, especially on code created by third parties (such as advertisements). Closure Toolkit is another project for safe embedding and isolation of third-party JavaScript and HTML.

[Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) is the main intended method of ensuring that only trusted code is executed on a Web page.

### Cross-site scripting

A common JavaScript-related security problem is [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) (XSS), a violation of the [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy). XSS vulnerabilities occur when an attacker can cause a target Website, such as an online banking website, to include a malicious script in the webpage presented to a victim. The script in this example can then access the banking application with the privileges of the victim, potentially disclosing secret information or transferring money without the victim's authorization. One important solution to XSS vulnerabilities is [HTML sanitization](https://en.wikipedia.org/wiki/HTML_sanitization).

Some browsers include partial protection against *reflected* XSS attacks, in which the attacker provides a URL including malicious script. However, even users of those browsers are vulnerable to other XSS attacks, such as those where the malicious code is stored in a database. Only correct design of Web applications on the server-side can fully prevent XSS.

XSS vulnerabilities can also occur because of implementation mistakes by browser authors.

### Cross-site request forgery

Another cross-site vulnerability is [cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) (CSRF). In CSRF, code on an attacker's site tricks the victim's browser into taking actions the user did not intend at a target site (like transferring money at a bank). When target sites rely solely on cookies for request authentication, requests originating from code on the attacker's site can carry the same valid login credentials of the initiating user. In general, the solution to CSRF is to require an authentication value in a hidden form field, and not only in the cookies, to authenticate any request that might have lasting effects. Checking the HTTP Referrer header can also help.

"JavaScript hijacking" is a type of CSRF attack in which a `<script>` tag on an attacker's site exploits a page on the victim's site that returns private information such as [JSON](https://en.wikipedia.org/wiki/JSON) or JavaScript. Possible solutions include:

* requiring an authentication token in the [POST](https://en.wikipedia.org/wiki/POST_(HTTP)) and [GET](https://en.wikipedia.org/wiki/GET_(HTTP)) parameters for any response that returns private information.

### Misplaced trust in the client

Developers of client-server applications must recognize that untrusted clients may be under the control of attackers. The author of an application should not assume that their JavaScript code will run as intended (or at all) because any secret embedded in the code could be extracted by a determined adversary. Some implications are:

* Website authors cannot perfectly conceal how their JavaScript operates because the raw source code must be sent to the client. The code can be [obfuscated](https://en.wikipedia.org/wiki/Obfuscated_code), but obfuscation can be reverse-engineered.
* JavaScript form validation only provides convenience for users, not security. If a site verifies that the user agreed to its terms of service, or filters invalid characters out of fields that should only contain numbers, it must do so on the server, not only the client.
* Scripts can be selectively disabled, so JavaScript cannot be relied on to prevent operations such as right-clicking on an image to save it.
* It is considered very bad practice to embed sensitive information such as passwords in JavaScript because it can be extracted by an attacker.
* [Prototype pollution](https://en.wikipedia.org/wiki/Prototype_pollution) is a runtime vulnerability in which attackers can overwrite arbitrary properties in an object's prototype.

### Misplaced trust in developers

Package management systems such as [npm](https://en.wikipedia.org/wiki/Npm_(software)) and Bower are popular with JavaScript developers. Such systems allow a developer to easily manage their program's dependencies upon other developers' program libraries. Developers trust that the maintainers of the libraries will keep them secure and up to date, but that is not always the case. A vulnerability has emerged because of this blind trust. Relied-upon libraries can have new releases that cause bugs or vulnerabilities to appear in all programs that rely upon the libraries. Inversely, a library can go unpatched with known vulnerabilities out in the wild. In a study done looking over a sample of 133,000 websites, researchers found 37% of the websites included a library with at least one known vulnerability. "The median lag between the oldest library version used on each website and the newest available version of that library is 1,177 days in ALEXA, and development of some libraries still in active use ceased years ago." Another possibility is that the maintainer of a library may remove the library entirely. This occurred in March 2016 when Azer Koçulu removed his repository from npm. This caused tens of thousands of programs and websites depending upon his libraries to break.

### Browser and plugin coding errors

JavaScript provides an interface to a wide range of browser capabilities, some of which may have flaws such as [buffer overflows](https://en.wikipedia.org/wiki/Buffer_overflow). These flaws can allow attackers to write scripts that would run any code they wish on the user's system. This code is not by any means limited to another JavaScript application. For example, a buffer overrun exploit can allow an attacker to gain access to the operating system's [API](https://en.wikipedia.org/wiki/API) with superuser privileges.

These flaws have affected major browsers including Firefox, Internet Explorer, and Safari.

Plugins, such as video players, [Adobe Flash](https://en.wikipedia.org/wiki/Adobe_Flash#Flash_client_security), and the wide range of [ActiveX](https://en.wikipedia.org/wiki/ActiveX) controls enabled by default in Microsoft Internet Explorer, may also have flaws exploitable via JavaScript (such flaws have been exploited in the past).

In Windows Vista, Microsoft has attempted to contain the risks of bugs such as buffer overflows by running the Internet Explorer process with limited privileges. [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome) similarly confines its page renderers to their own "[sandbox](https://en.wikipedia.org/wiki/Sandbox_(computer_security))".

### Sandbox implementation errors

Web browsers are capable of running JavaScript outside the sandbox, with the privileges necessary to, for example, create or delete files. Such privileges are not intended to be granted to code from the Web.

Incorrectly granting privileges to JavaScript from the Web has played a role in vulnerabilities in both Internet Explorer and Firefox. In Windows XP Service Pack 2, Microsoft demoted JScript's privileges in Internet Explorer.

[Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) allows JavaScript source files on a computer's hard drive to be launched as general-purpose, non-sandboxed programs (see: [Windows Script Host](https://en.wikipedia.org/wiki/Windows_Script_Host)). This makes JavaScript (like [VBScript](https://en.wikipedia.org/wiki/VBScript)) a theoretically viable vector for a [Trojan horse](https://en.wikipedia.org/wiki/Trojan_horse_(computing)), although JavaScript Trojan horses are uncommon in practice.[*[failed verification](https://en.wikipedia.org/wiki/Wikipedia:Verifiability)*]

### Hardware vulnerabilities

In 2015, a JavaScript-based proof-of-concept implementation of a [rowhammer](https://en.wikipedia.org/wiki/Rowhammer) attack was described in a paper by security researchers.

In 2017, a JavaScript-based attack via browser was demonstrated that could bypass [ASLR](https://en.wikipedia.org/wiki/Address_space_layout_randomization). It is called "ASLR⊕Cache" or AnC.

In 2018, the paper that announced the [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)) attacks against Speculative Execution in Intel and other processors included a JavaScript implementation.

Important tools have evolved with the language.

### Java

A common misconception is that JavaScript is directly related to [Java](https://en.wikipedia.org/wiki/Java_(programming_language)). Both indeed have a C-like syntax (the C language being their most immediate common ancestor language). They are also typically [sandboxed](https://en.wikipedia.org/wiki/Sandbox_(computer_security)), and JavaScript was designed with Java's syntax and standard library in mind. In particular, all Java keywords were reserved in original JavaScript, JavaScript's standard library follows Java's naming conventions, and JavaScript's `Math` and `Date` objects are based on classes from Java 1.0.

Both languages first appeared in 1995, but Java was developed by [James Gosling](https://en.wikipedia.org/wiki/James_Gosling) of Sun Microsystems and JavaScript by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) of Netscape Communications.

The differences between the two languages are more prominent than their similarities. Java has [static typing](https://en.wikipedia.org/wiki/Static_typing), while JavaScript's typing is [dynamic](https://en.wikipedia.org/wiki/Dynamic_typing). Java is loaded from [compiled](https://en.wikipedia.org/wiki/Compiler) bytecode, while JavaScript is loaded as human-readable source code. Java's objects are [class-based](https://en.wikipedia.org/wiki/Class-based_programming), while JavaScript's are [prototype-based](https://en.wikipedia.org/wiki/Prototype-based_programming). Finally, Java did not support functional programming until Java 8, while JavaScript has done so from the beginning, being influenced by [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)).

### JSON

[JSON](https://en.wikipedia.org/wiki/JSON) is a data format derived from JavaScript; hence the name JavaScript Object Notation. It is a widely used format supported by many other programming languages.

### Transpilers

Many websites are JavaScript-heavy, so [transpilers](https://en.wikipedia.org/wiki/Transpiler) have been created to convert code written in other languages, which can aid the development process.

[TypeScript](https://en.wikipedia.org/wiki/TypeScript) and [CoffeeScript](https://en.wikipedia.org/wiki/CoffeeScript) are two notable languages that transpile to JavaScript.

### WebAssembly

[WebAssembly](https://en.wikipedia.org/wiki/WebAssembly) is a newer language with a [bytecode](https://en.wikipedia.org/wiki/Bytecode) format designed to complement JavaScript, especially the performance-critical portions of [web page](https://en.wikipedia.org/wiki/Web_page) scripts. All of the major [JavaScript engines](https://en.wikipedia.org/wiki/JavaScript_engine) support WebAssembly, which runs in the same [sandbox](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) as regular JavaScript code.

[asm.js](https://en.wikipedia.org/wiki/Asm.js) is a subset of JavaScript that served as the forerunner of WebAssembly.

## Notes

## References

1. ^ [***a***](#cite_ref-press_release_1-0) [***b***](#cite_ref-press_release_1-1) ["Netscape and Sun announce JavaScript, the Open, Cross-platform Object Scripting Language for Enterprise Networks and the Internet"](https://web.archive.org/web/20070916144913/https://wp.netscape.com/newsref/pr/newsrelease67.html) (Press release). 4 December 1995. Archived from [the original](https://wp.netscape.com/newsref/pr/newsrelease67.html) on 16 September 2007.
2. **[^](#cite_ref-wikidata-fdaa92a1fc5308e94e5ed782a2024ab0bbc4c072-v20_2-0)** ["ECMAScript® 2024 Language Specification"](https://262.ecma-international.org/15.0/). June 2024. Retrieved 30 August 2024.
3. **[^](#cite_ref-wikidata-6351048ad5638805e5935d8ba81b639a34072b65-v20_3-0)** ["ECMAScript® 2025 Language Specification"](https://tc39.es/ecma262/). 27 March 2024. Retrieved 17 April 2024.
4. **[^](#cite_ref-node.js_ECMAScript_Modules_Specification_4-0)** ["nodejs/node-eps"](https://github.com/nodejs/node-eps/blob/master/002-es-modules.md). *GitHub*. [Archived](https://web.archive.org/web/20200829024713/https://github.com/nodejs/node-eps/blob/master/002-es-modules.md) from the original on 29 August 2020. Retrieved 5 July 2018.
5. ^ [***a***](#cite_ref-looklikejava_5-0) [***b***](#cite_ref-looklikejava_5-1) Seibel, Peter (16 September 2009). [*Coders at Work: Reflections on the Craft of Programming*](https://books.google.com/books?id=nneBa6-mWfgC&q=The+immediate+concern+at+Netscape+was+it+must+look+like+Java.&pg=PA141). Apress. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4302-1948-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4302-1948-4). [Archived](https://web.archive.org/web/20201224233514/https://books.google.com/books?id=nneBa6-mWfgC&q=The+immediate+concern+at+Netscape+was+it+must+look+like+Java.&pg=PA141) from the original on 24 December 2020. Retrieved 25 December 2018. "Eich: The immediate concern at Netscape was it must look like Java."
6. ^ [***a***](#cite_ref-origin_6-0) [***b***](#cite_ref-origin_6-1) [***c***](#cite_ref-origin_6-2) [***d***](#cite_ref-origin_6-3) [***e***](#cite_ref-origin_6-4) [***f***](#cite_ref-origin_6-5) ["Chapter 4. How JavaScript Was Created"](https://exploringjs.com/es5/ch04.html). *speakingjs.com*. [Archived](https://web.archive.org/web/20200227184037/https://speakingjs.com/es5/ch04.html) from the original on 27 February 2020. Retrieved 21 November 2017.
7. **[^](#cite_ref-7)** ["Popularity – Brendan Eich"](https://brendaneich.com/2008/04/popularity/).
8. **[^](#cite_ref-8)** ["Brendan Eich: An Introduction to JavaScript, JSConf 2010"](https://www.youtube.com/watch?v=1EyRscXrehw). *[YouTube](https://en.wikipedia.org/wiki/YouTube)*. 20 January 2013. p. 22m. [Archived](https://web.archive.org/web/20200829024704/https://www.youtube.com/watch?v=1EyRscXrehw) from the original on 29 August 2020. Retrieved 25 November 2019. "Eich: "function", eight letters, I was influenced by AWK."
9. **[^](#cite_ref-9)** [Eich, Brendan](https://en.wikipedia.org/wiki/Brendan_Eich) (1998). "Foreword". In [Goodman, Danny](https://en.wikipedia.org/wiki/Danny_Goodman) (ed.). [*JavaScript Bible*](https://archive.org/details/javascriptbible000good) (3rd ed.). [John Wiley & Sons](https://en.wikipedia.org/wiki/John_Wiley_%26_Sons). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-7645-3188-3](https://en.wikipedia.org/wiki/Special:BookSources/0-7645-3188-3). [LCCN](https://en.wikipedia.org/wiki/LCCN_(identifier)) [97078208](https://lccn.loc.gov/97078208). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [38888873](https://search.worldcat.org/oclc/38888873). [OL](https://en.wikipedia.org/wiki/OL_(identifier)) [712205M](https://openlibrary.org/books/OL712205M).
10. ^ [***a***](#cite_ref-deployedstats_11-0) [***b***](#cite_ref-deployedstats_11-1) ["Usage Statistics of JavaScript as Client-side Programming Language on Websites"](https://w3techs.com/technologies/details/cp-javascript). *W3Techs*. Retrieved 27 February 2024.
11. **[^](#cite_ref-12)** ["Stack Overflow Developer Survey 2025"](https://survey.stackoverflow.co/2025/technology#1-web-frameworks-and-technologies). *Stack Overflow*. Retrieved 10 October 2025.
12. **[^](#cite_ref-tc39_13-0)** ["ECMAScript 2020 Language Specification"](https://tc39.es/ecma262/#sec-overview). [Archived](https://web.archive.org/web/20200508053013/https://tc39.es/ecma262/#sec-overview) from the original on 8 May 2020. Retrieved 8 May 2020.
13. **[^](#cite_ref-14)** Enzer, Larry (31 August 2018). ["The Evolution of the Web Browsers"](https://web.archive.org/web/20180831174847/https://www.mwdwebsites.com/nj-web-design-web-browsers.html). *Monmouth Web Developers*. Archived from [the original](https://www.mwdwebsites.com/nj-web-design-web-browsers.html) on 31 August 2018. Retrieved 31 August 2018.
14. ^ [***a***](#cite_ref-EichVideo_15-0) [***b***](#cite_ref-EichVideo_15-1) [***c***](#cite_ref-EichVideo_15-2) Fin JS (17 June 2016), ["Brendan Eich – CEO of Brave"](https://www.youtube.com/watch?v=XOmhtfTrRxc), *YouTube*, retrieved 7 February 2018
15. **[^](#cite_ref-16)** "Netscape Communications Corp.", Browser enhancements. Encyclopædia Britannica 2006 Ultimate Reference Suite DVD
16. **[^](#cite_ref-techvision_17-0)** ["TechVision: Innovators of the Net: Brendan Eich and JavaScript"](https://web.archive.org/web/20080208124612/https://wp.netscape.com/comprod/columns/techvision/innovators_be.html). Archived from [the original](https://wp.netscape.com/comprod/columns/techvision/innovators_be.html) on 8 February 2008.
17. ^ [***a***](#cite_ref-wired2024_18-0) [***b***](#cite_ref-wired2024_18-1) Han, Sheon (4 March 2024). ["JavaScript Runs the World—Maybe Even Literally"](https://www.wired.com/story/javascript-runs-the-world-maybe-literally/). *Wired*. Retrieved 21 August 2024.
18. ^ [***a***](#cite_ref-sjsch5_19-0) [***b***](#cite_ref-sjsch5_19-1) ["Chapter 5. Standardization: ECMAScript"](https://web.archive.org/web/20211101184346/http://speakingjs.com/es5/ch05.html). *speakingjs.com*. Archived from [the original](https://speakingjs.com/es5/ch05.html) on 1 November 2021. Retrieved 1 November 2021.
19. ^ [***a***](#cite_ref-O'Reilly-2001_20-0) [***b***](#cite_ref-O'Reilly-2001_20-1) Champeon, Steve (6 April 2001). ["JavaScript, How Did We Get Here?"](https://web.archive.org/web/20160719020828/https://archive.oreilly.com/pub/a/javascript/2001/04/06/js_history.html). *oreilly.com*. Archived from [the original](https://archive.oreilly.com/pub/a/javascript/2001/04/06/js_history.html) on 19 July 2016. Retrieved 16 July 2016.
20. **[^](#cite_ref-21)** ["Microsoft Internet Explorer 3.0 Beta Now Available"](https://news.microsoft.com/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/). *microsoft.com*. Microsoft. 29 May 1996. [Archived](https://web.archive.org/web/20201124154053/https://news.microsoft.com/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/) from the original on 24 November 2020. Retrieved 16 July 2016.
21. **[^](#cite_ref-22)** McCracken, Harry (16 September 2010). ["The Unwelcome Return of "Best Viewed with Internet Explorer""](https://www.technologizer.com/2010/09/16/the-unwelcome-return-of-best-viewed-with-internet-explorer/). *technologizer.com*. [Archived](https://web.archive.org/web/20180623192402/https://www.technologizer.com/2010/09/16/the-unwelcome-return-of-best-viewed-with-internet-explorer/) from the original on 23 June 2018. Retrieved 16 July 2016.
22. **[^](#cite_ref-searchenginejournal.com_23-0)** Baker, Loren (24 November 2004). ["Mozilla Firefox Internet Browser Market Share Gains to 7.4%"](https://www.searchenginejournal.com/mozilla-firefox-internet-browser-market-share-gains-to-74/1082/). *Search Engine Journal*. [Archived](https://web.archive.org/web/20210507013607/https://www.searchenginejournal.com/mozilla-firefox-internet-browser-market-share-gains-to-74/1082/) from the original on 7 May 2021. Retrieved 8 May 2021.
23. **[^](#cite_ref-24)** Weber, Tim (9 May 2005). ["The assault on software giant Microsoft"](https://web.archive.org/web/20170925233936/https://news.bbc.co.uk/2/hi/business/4508897.stm). *[BBC News](https://en.wikipedia.org/wiki/BBC_News)*. Archived from [the original](https://news.bbc.co.uk/2/hi/business/4508897.stm) on 25 September 2017.
24. **[^](#cite_ref-25)** ["Big browser comparison test: Internet Explorer vs. Firefox, Opera, Safari and Chrome"](https://www.pcgameshardware.com/aid,687738/Big-browser-comparison-test-Internet-Explorer-vs-Firefox-Opera-Safari-and-Chrome-Update-Firefox-35-Final/Practice/). *PC Games Hardware*. Computec Media AG. 3 July 2009. [Archived](https://web.archive.org/web/20120502043027/http://www.pcgameshardware.com/aid,687738/Big-browser-comparison-test-Internet-Explorer-vs-Firefox-Opera-Safari-and-Chrome-Update-Firefox-35-Final/Practice/) from the original on 2 May 2012. Retrieved 28 June 2010.
25. **[^](#cite_ref-26)** Purdy, Kevin (11 June 2009). ["Lifehacker Speed Tests: Safari 4, Chrome 2"](https://lifehacker.com/lifehacker-speed-tests-safari-4-chrome-2-and-more-5286869). *[Lifehacker](https://en.wikipedia.org/wiki/Lifehacker)*. [Archived](https://web.archive.org/web/20210414095403/https://lifehacker.com/lifehacker-speed-tests-safari-4-chrome-2-and-more-5286869) from the original on 14 April 2021. Retrieved 8 May 2021.
26. **[^](#cite_ref-27)** ["TraceMonkey: JavaScript Lightspeed, Brendan Eich's Blog"](https://brendaneich.com/2008/08/tracemonkey-javascript-lightspeed/). [Archived](https://web.archive.org/web/20151204091540/https://brendaneich.com/2008/08/tracemonkey-javascript-lightspeed/) from the original on 4 December 2015. Retrieved 22 July 2020.
27. **[^](#cite_ref-28)** ["Mozilla asks, 'Are we fast yet?'"](https://www.wired.com/2010/09/mozilla-asks-are-we-fast-yet/). *Wired*. [Archived](https://web.archive.org/web/20180622213244/https://www.wired.com/2010/09/mozilla-asks-are-we-fast-yet/) from the original on 22 June 2018. Retrieved 18 January 2019.
28. **[^](#cite_ref-29)** ["ECMAScript 6: New Features: Overview and Comparison"](https://web.archive.org/web/20180318064130/https://es6-features.org/). *es6-features.org*. Archived from the original on 18 March 2018. Retrieved 19 March 2018.
29. **[^](#cite_ref-30)** [Professional Node.js: Building JavaScript Based Scalable Software](https://books.google.com/books?id=ZH6bpbcrlvYC&q=nodejs) [Archived](https://web.archive.org/web/20170324021220/https://books.google.com/books?id=ZH6bpbcrlvYC&printsec=frontcover&dq=nodejs&hl=en&sa=X#v=onepage&q=nodejs&f=false) 2017-03-24 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine), John Wiley & Sons, 01-Oct-2012
30. **[^](#cite_ref-b3_31-0)** [Sams Teach Yourself Node.js in 24 Hours](https://books.google.com/books?id=KGt-FxUEj48C&dq=nodejs&pg=PT24) [Archived](https://web.archive.org/web/20170323192039/https://books.google.com/books?id=KGt-FxUEj48C&pg=PT24&dq=nodejs&hl=en&sa=X#v=onepage&q=nodejs&f=false) 2017-03-23 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine), Sams Publishing, 05-Sep-2012
31. **[^](#cite_ref-32)** Lawton, George (19 July 2018). ["The secret history behind the success of npm and Node"](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/The-secret-history-behind-the-success-of-npm-and-Node). *TheServerSide*. [Archived](https://web.archive.org/web/20210802165613/https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/The-secret-history-behind-the-success-of-npm-and-Node) from the original on 2 August 2021. Retrieved 2 August 2021.
32. **[^](#cite_ref-33)** Brown, Paul (13 January 2017). ["State of the Union: npm"](https://www.linux.com/news/state-union-npm/). *Linux.com*. [Archived](https://web.archive.org/web/20210802165614/https://www.linux.com/news/state-union-npm/) from the original on 2 August 2021. Retrieved 2 August 2021.
33. ^ [***a***](#cite_ref-branscombe_34-0) [***b***](#cite_ref-branscombe_34-1) [***c***](#cite_ref-branscombe_34-2) Branscombe, Mary (4 May 2016). ["JavaScript Standard Moves to Yearly Release Schedule; Here is What's New for ES16"](https://thenewstack.io/whats-new-es2016/). *The New Stack*. [Archived](https://web.archive.org/web/20210116181757/https://thenewstack.io/whats-new-es2016/) from the original on 16 January 2021. Retrieved 15 January 2021.
34. **[^](#cite_ref-35)** ["The TC39 Process"](https://tc39.es/process-document/). *tc39.es*. Ecma International. [Archived](https://web.archive.org/web/20210207105535/https://tc39.es/process-document/) from the original on 7 February 2021. Retrieved 15 January 2021.
35. **[^](#cite_ref-36)** ["ECMAScript proposals"](https://github.com/tc39/proposals/blob/master/README.md). TC39. [Archived](https://web.archive.org/web/20201204221147/https://github.com/tc39/proposals/blob/master/README.md) from the original on 4 December 2020. Retrieved 15 January 2021.
36. ^ [***a***](#cite_ref-transpilers_37-0) [***b***](#cite_ref-transpilers_37-1) [Ashkenas, Jeremy](https://en.wikipedia.org/wiki/Jeremy_Ashkenas). ["List of languages that compile to JS"](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS). *[GitHub](https://en.wikipedia.org/wiki/GitHub)*. [Archived](https://web.archive.org/web/20200131233044/https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS) from the original on 31 January 2020. Retrieved 6 February 2020.
37. **[^](#cite_ref-38)** ["U.S. Trademark Serial No. 75026640"](https://tsdr.uspto.gov/#caseNumber=75026640&caseType=SERIAL_NO&searchType=statusSearch). *uspto.gov*. [United States Patent and Trademark Office](https://en.wikipedia.org/wiki/United_States_Patent_and_Trademark_Office). 6 May 1997. [Archived](https://web.archive.org/web/20210713022850/https://tsdr.uspto.gov/#caseNumber=75026640&caseType=SERIAL_NO&searchType=statusSearch) from the original on 13 July 2021. Retrieved 8 May 2021.
38. **[^](#cite_ref-39)** ["Legal Notices"](https://www.oracle.com/legal/trademarks.html). *oracle.com*. [Oracle Corporation](https://en.wikipedia.org/wiki/Oracle_Corporation). [Archived](https://web.archive.org/web/20210605142505/https://www.oracle.com/legal/trademarks.html) from the original on 5 June 2021. Retrieved 8 May 2021.
39. **[^](#cite_ref-40)** ["Oracle to buy Sun in $7.4-bn deal"](https://economictimes.indiatimes.com/tech/software/oracle-to-buy-sun-in-7-4-bn-deal/articleshow/4427747.cms). *The Economic Times*. 21 April 2009.
40. **[^](#cite_ref-41)** Claburn, Thomas (17 September 2024). ["Oracle urged again to give up JavaScript trademark"](https://www.theregister.com/2024/09/17/oracle_urged_to_surrender_javascript_trademark/). *The Register*. Retrieved 2 February 2025.
41. **[^](#cite_ref-42)** Krill, Paul (20 September 2024). ["JavaScript community challenges Oracle's JavaScript trademark"](https://www.infoworld.com/article/3532457/javascript-community-challenges-oracles-javascript-trademark.html). *InfoWorld*.
42. ^ [***a***](#cite_ref-lib_usage_43-0) [***b***](#cite_ref-lib_usage_43-1) [***c***](#cite_ref-lib_usage_43-2) ["Usage statistics of JavaScript libraries for websites"](https://w3techs.com/technologies/overview/javascript_library). *W3Techs*. Retrieved 9 April 2021.
43. **[^](#cite_ref-44)** ["Using jQuery with Bootstrap"](https://clouddevs.com/jquery/web-projects-with-bootstrap/). *clouddevs.com*. 10 June 2019. Retrieved 17 March 2024.
44. **[^](#cite_ref-45)** ["Vanilla JS"](https://vanilla-js.com/). *vanilla-js.com*. 16 June 2020. [Archived](https://web.archive.org/web/20200616052335/https://vanilla-js.com/) from the original on 16 June 2020. Retrieved 17 June 2020.
45. **[^](#cite_ref-46)** ["Server-Side JavaScript Guide"](https://docs.oracle.com/cd/E19957-01/816-6411-10/contents.htm). *oracle.com*. [Oracle Corporation](https://en.wikipedia.org/wiki/Oracle_Corporation). 11 December 1998. [Archived](https://web.archive.org/web/20210311173120/https://docs.oracle.com/cd/E19957-01/816-6411-10/contents.htm) from the original on 11 March 2021. Retrieved 8 May 2021.
46. **[^](#cite_ref-47)** Clinick, Andrew (14 July 2000). ["Introducing JScript .NET"](https://msdn.microsoft.com/en-us/library/ms974588.aspx). *Microsoft Developer Network*. Microsoft. [Archived](https://web.archive.org/web/20171110201649/https://msdn.microsoft.com/en-us/library/ms974588.aspx) from the original on 10 November 2017. Retrieved 10 April 2018. "[S]ince the 1996 introduction of JScript version 1.0 ... we've been seeing a steady increase in the usage of JScript on the server—particularly in Active Server Pages (ASP)"
47. ^ [***a***](#cite_ref-2009server_48-0) [***b***](#cite_ref-2009server_48-1) Mahemoff, Michael (17 December 2009). ["Server-Side JavaScript, Back with a Vengeance"](https://web.archive.org/web/20160617030219/https://readwrite.com/2009/12/17/server-side_javascript_back_with_a_vengeance/). *readwrite.com*. Archived from the original on 17 June 2016. Retrieved 16 July 2016.
48. **[^](#cite_ref-49)** ["JavaScript for Acrobat"](https://www.adobe.com/devnet/acrobat/javascript.html). *adobe.com*. 7 August 2009. [Archived](https://web.archive.org/web/20090807065130/https://www.adobe.com/devnet/acrobat/javascript.html) from the original on 7 August 2009. Retrieved 18 August 2009.
49. **[^](#cite_ref-50)** treitter (2 February 2013). ["Answering the question: "How do I develop an app for GNOME?""](https://treitter.livejournal.com/14871.html). *livejournal.com*. [Archived](https://web.archive.org/web/20130211032900/https://treitter.livejournal.com/14871.html) from the original on 11 February 2013. Retrieved 7 February 2013.
50. **[^](#cite_ref-51)**  Ponge, Julien (19 April 2018). ["Oracle Nashorn: A Next-Generation JavaScript Engine for the JVM"](https://www.oracle.com/technical-resources/articles/java/jf14-nashorn.html). *oracle.com*. Oracle Corporation. Retrieved 17 February 2025.
51. **[^](#cite_ref-52)** ["Migration Guide from Nashorn to GraalJS"](https://www.graalvm.org/latest/reference-manual/js/NashornMigrationGuide/). *graalvm.org*. Retrieved 17 February 2025.
52. **[^](#cite_ref-53)** ["GraalJS"](https://www.graalvm.org/latest/reference-manual/js/). GraalVM. Retrieved 17 February 2025.
53. **[^](#cite_ref-54)** ["Java Interoperability"](https://docs.oracle.com/en/graalvm/enterprise/21/docs/reference-manual/js/JavaInteroperability/). *oracle.com*. Oracle. Retrieved 17 February 2025.
54. **[^](#cite_ref-55)** ["Tessel 2... Leverage all the libraries of Node.JS to create useful devices in minutes with Tessel"](https://tessel.io/). *tessel.io*. [Archived](https://web.archive.org/web/20210526212559/https://tessel.io/) from the original on 26 May 2021. Retrieved 8 May 2021.
55. **[^](#cite_ref-56)** ["Node.js Raspberry Pi GPIO Introduction"](https://www.w3schools.com/nodejs/nodejs_raspberrypi_gpio_intro.asp). *w3schools.com*. [Archived](https://web.archive.org/web/20210813192938/https://www.w3schools.com/nodejs/nodejs_raspberrypi_gpio_intro.asp) from the original on 13 August 2021. Retrieved 3 May 2020.
56. **[^](#cite_ref-57)** ["Espruino – JavaScript for Microcontrollers"](https://www.espruino.com/). *espruino.com*. [Archived](https://web.archive.org/web/20200501010722/https://www.espruino.com/) from the original on 1 May 2020. Retrieved 3 May 2020.
57. **[^](#cite_ref-58)** Looper, Jen (21 September 2015). ["A Guide to JavaScript Engines for Idiots"](https://web.archive.org/web/20181208123231/http://developer.telerik.com/featured/a-guide-to-javascript-engines-for-idiots/). [Telerik](https://en.wikipedia.org/wiki/Telerik) Developer Network. Archived from [the original](http://developer.telerik.com/featured/a-guide-to-javascript-engines-for-idiots/) on 8 December 2018. Retrieved 8 December 2018.
58. **[^](#cite_ref-59)** ["How Blink Works"](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg). Retrieved 12 March 2024.
59. ^ [***a***](#cite_ref-List_of_JavaScript_engines_v8_doc_60-0) [***b***](#cite_ref-List_of_JavaScript_engines_v8_doc_60-1) ["Documentation · V8"](https://v8.dev/docs). Google. Retrieved 3 March 2024.
60. **[^](#cite_ref-List_of_JavaScript_engines_Wasm_61-0)** Nelaturu, Keerthi (September 2020). ["WebAssembly: What's the big deal?"](https://medium.com/coinmonks/webassembly-whats-the-big-deal-662396ff1cd6). *medium.com*. Retrieved 3 March 2024.
61. **[^](#cite_ref-62)** ["Concurrency model and Event Loop"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop). *Mozilla Developer Network*. [Archived](https://web.archive.org/web/20150905045241/https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) from the original on 5 September 2015. Retrieved 28 August 2015.
62. **[^](#cite_ref-Flanagan2006_63-0)** Flanagan, David (17 August 2006). [*JavaScript: The Definitive Guide*](https://books.google.com/books?id=2weL0iAfrEMC). [O'Reilly Media, Inc.](https://en.wikipedia.org/wiki/O%27Reilly_Media,_Inc.) p. 16. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-596-55447-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-596-55447-7). [Archived](https://web.archive.org/web/20200801065235/https://books.google.com/books?id=2weL0iAfrEMC) from the original on 1 August 2020. Retrieved 29 March 2019.
63. ^ [***a***](#cite_ref-casting_rules_64-0) [***b***](#cite_ref-casting_rules_64-1) [***c***](#cite_ref-casting_rules_64-2) [***d***](#cite_ref-casting_rules_64-3) Korolev, Mikhail (1 March 2019). ["JavaScript quirks in one image from the Internet"](https://dev.to/mkrl/javascript-quirks-in-one-image-from-the-internet-52m7). *The DEV Community*. [Archived](https://web.archive.org/web/20191028204723/https://dev.to/mkrl/javascript-quirks-in-one-image-from-the-internet-52m7) from the original on 28 October 2019. Retrieved 28 October 2019.
64. **[^](#cite_ref-65)** ["Proposal-bigint/ADVANCED.md at master · tc39/Proposal-bigint"](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs). *[GitHub](https://en.wikipedia.org/wiki/GitHub)*.
65. **[^](#cite_ref-66)** Bernhardt, Gary (2012). ["Wat"](https://www.destroyallsoftware.com/talks/wat). *Destroy All Software*. [Archived](https://web.archive.org/web/20191028204723/https://www.destroyallsoftware.com/talks/wat) from the original on 28 October 2019. Retrieved 28 October 2019.
66. **[^](#cite_ref-67)** ["JavaScript data types and data structures"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures). *MDN*. 16 February 2017. [Archived](https://web.archive.org/web/20170314230542/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) from the original on 14 March 2017. Retrieved 24 February 2017.
67. **[^](#cite_ref-69)** Crockford, Douglas. ["Prototypal Inheritance in JavaScript"](https://javascript.crockford.com/prototypal.html). [Archived](https://web.archive.org/web/20130813163035/https://javascript.crockford.com/prototypal.html) from the original on 13 August 2013. Retrieved 20 August 2013.
68. **[^](#cite_ref-70)** ["Inheritance and the prototype chain"](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Inheritance_and_the_prototype_chain). *[Mozilla](https://en.wikipedia.org/wiki/Mozilla) Developer Network*. [Archived](https://web.archive.org/web/20130425144207/https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Inheritance_and_the_prototype_chain) from the original on 25 April 2013. Retrieved 6 April 2013.
69. **[^](#cite_ref-71)** Herman, David (2013). [*Effective JavaScript*](https://books.google.com/books?id=Nz9iAwAAQBAJ&pg=PA83). Addison-Wesley. p. 83. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-81218-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-81218-6).
70. **[^](#cite_ref-JavaScriptNext_72-0)** Ghandi, Raju (2019). *JavaScript Next*. New York City: Apress Media. pp. 159–171. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4842-5394-6](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4842-5394-6).
71. ^ [***a***](#cite_ref-Haverbeke2024_73-0) [***b***](#cite_ref-Haverbeke2024_73-1) Haverbeke, Marijn (September 2024). [*Eloquent JavaScript*](https://eloquentjavascript.net/Eloquent_JavaScript.pdf) (PDF) (4th ed.). San Francisco: [No Starch Press](https://en.wikipedia.org/wiki/No_Starch_Press). pp. [97–98](https://eloquentjavascript.net/Eloquent_JavaScript.pdf#section*.204). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-71850-411-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-71850-411-0). [Archived](https://web.archive.org/web/20250312193854/https://eloquentjavascript.net/Eloquent_JavaScript.pdf) (PDF) from the original on 12 March 2025.
72. **[^](#cite_ref-74)** Katz, Yehuda (12 August 2011). ["Understanding "Prototypes" in JavaScript"](https://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/). [Archived](https://web.archive.org/web/20130405154842/https://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/) from the original on 5 April 2013. Retrieved 6 April 2013.
73. **[^](#cite_ref-75)** Herman, David (2013). [*Effective JavaScript*](https://books.google.com/books?id=Nz9iAwAAQBAJ&pg=PA125). Addison-Wesley. pp. 125–127. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-321-81218-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-81218-6).
74. **[^](#cite_ref-76)** ["Function – JavaScript"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function). *[MDN Web Docs](https://en.wikipedia.org/wiki/MDN_Web_Docs)*. Retrieved 30 October 2021.
75. **[^](#cite_ref-77)** ["Properties of the Function Object"](https://es5.github.com/#x15.3.4-toc). Es5.github.com. [Archived](https://web.archive.org/web/20130128185825/https://es5.github.com/#x15.3.4-toc) from the original on 28 January 2013. Retrieved 26 May 2013.
76. **[^](#cite_ref-79)** [The many talents of JavaScript for generalizing Role-Oriented Programming approaches like Traits and Mixins](https://peterseliger.blogspot.de/2014/04/the-many-talents-of-javascript.html#the-many-talents-of-javascript-for-generalizing-role-oriented-programming-approaches-like-traits-and-mixins) [Archived](https://web.archive.org/web/20171005050713/https://peterseliger.blogspot.de/2014/04/the-many-talents-of-javascript.html#the-many-talents-of-javascript-for-generalizing-role-oriented-programming-approaches-like-traits-and-mixins) 2017-10-05 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine), Peterseliger.blogspot.de, April 11, 2014.
77. **[^](#cite_ref-80)** [Traits for JavaScript](https://soft.vub.ac.be/~tvcutsem/traitsjs/) [Archived](https://web.archive.org/web/20140724052500/https://soft.vub.ac.be/~tvcutsem/traitsjs/) 2014-07-24 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine), 2010.
78. **[^](#cite_ref-81)** ["Home | CocktailJS"](https://cocktailjs.github.io/). *Cocktailjs.github.io*. [Archived](https://web.archive.org/web/20170204083608/https://cocktailjs.github.io/) from the original on 4 February 2017. Retrieved 24 February 2017.
79. **[^](#cite_ref-82)** Croll, Angus (31 May 2011). ["A fresh look at JavaScript Mixins"](https://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/). *JavaScript, JavaScript…*. [Archived](https://web.archive.org/web/20200415004603/https://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/) from the original on 15 April 2020.
80. **[^](#cite_ref-83)** ["E4X – Archive of obsolete content"](https://web.archive.org/web/20140724100129/https://developer.mozilla.org/en-US/docs/Archive/Web/E4X). *Mozilla Developer Network*. Mozilla Foundation. 14 February 2014. Archived from [the original](https://developer.mozilla.org/en-US/docs/Archive/Web/E4X) on 24 July 2014. Retrieved 13 July 2014.
81. **[^](#cite_ref-84)** ["var – JavaScript"](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/var). The [Mozilla Developer Network](https://en.wikipedia.org/wiki/Mozilla_Developer_Network). [Archived](https://web.archive.org/web/20121223162713/https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/var) from the original on 23 December 2012. Retrieved 22 December 2012.
82. **[^](#cite_ref-moz_let_85-0)** ["let"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let). *MDN web docs*. Mozilla. [Archived](https://web.archive.org/web/20190528140803/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) from the original on 28 May 2019. Retrieved 27 June 2018.
83. **[^](#cite_ref-moz_const_86-0)** ["const"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const). *MDN web docs*. Mozilla. [Archived](https://web.archive.org/web/20180628044054/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) from the original on 28 June 2018. Retrieved 27 June 2018.
84. **[^](#cite_ref-87)** ["Making JavaScript Safe for Advertising"](https://www.adsafe.org/). ADsafe. [Archived](https://web.archive.org/web/20210706153324/https://www.adsafe.org/) from the original on 6 July 2021. Retrieved 8 May 2021.
85. **[^](#cite_ref-88)** ["Secure ECMA Script (SES)"](https://code.google.com/p/es-lab/wiki/SecureEcmaScript). [Archived](https://web.archive.org/web/20130515073412/https://code.google.com/p/es-lab/wiki/SecureEcmaScript) from the original on 15 May 2013. Retrieved 26 May 2013.
86. **[^](#cite_ref-89)** ["Google Caja Project"](https://developers.google.com/caja/). *[Google](https://en.wikipedia.org/wiki/Google)*. [Archived](https://web.archive.org/web/20210122083321/https://developers.google.com/caja/) from the original on 22 January 2021. Retrieved 9 July 2021.
87. **[^](#cite_ref-90)** ["Mozilla Cross-Site Scripting Vulnerability Reported and Fixed – MozillaZine Talkback"](https://www.mozillazine.org/talkback.html?article=4392). *Mozillazine.org*. [Archived](https://web.archive.org/web/20110721230916/http://www.mozillazine.org/talkback.html?article=4392) from the original on 21 July 2011. Retrieved 24 February 2017.
88. **[^](#cite_ref-91)** Kottelin, Thor (17 June 2008). ["Right-click "protection"? Forget about it"](https://web.archive.org/web/20110809195359/https://blog.anta.net/2008/06/17/right-click-%E2%80%9Cprotection%E2%80%9D-forget-about-it/). *blog.anta.net*. Archived from [the original](https://blog.anta.net/2008/06/17/right-click-%E2%80%9Cprotection%E2%80%9D-forget-about-it/) on 9 August 2011. Retrieved 28 July 2022.
89. **[^](#cite_ref-92)** Rehorik, Jan (29 November 2016). ["Why You Should Never Put Sensitive Data in Your JavaScript"](https://www.serviceobjects.com/blog/why-you-should-never-put-sensitive-data-in-your-javascript/). *ServiceObjects Blog*. ServiceObjects. [Archived](https://web.archive.org/web/20190603142957/https://www.serviceobjects.com/blog/why-you-should-never-put-sensitive-data-in-your-javascript/) from the original on 3 June 2019. Retrieved 3 June 2019.
90. ^ [***a***](#cite_ref-jslibs_93-0) [***b***](#cite_ref-jslibs_93-1) Lauinger, Tobias; Chaabane, Abdelberi; Arshad, Sajjad; Robertson, William; Wilson, Christo; Kirda, Engin (21 December 2016), ["Thou Shalt Not Depend on Me: Analysing the Use of Outdated JavaScript Libraries on the Web"](https://web.archive.org/web/20170329045344/https://www.ccs.neu.edu/home/arshad/publications/ndss2017jslibs.pdf) (PDF), *Northeastern University*, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1811.00918](https://arxiv.org/abs/1811.00918), [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.14722/ndss.2017.23414](https://doi.org/10.14722%2Fndss.2017.23414), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-891562-46-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-891562-46-4), [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [17885720](https://api.semanticscholar.org/CorpusID:17885720), archived from [the original](https://www.ccs.neu.edu/home/arshad/publications/ndss2017jslibs.pdf) (PDF) on 29 March 2017, retrieved 28 July 2022`{{citation}}`: CS1 maint: work parameter with ISBN ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_work_parameter_with_ISBN))
91. **[^](#cite_ref-94)** Collins, Keith (27 March 2016). ["How one programmer broke the internet by deleting a tiny piece of code"](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/). *Quartz*. [Archived](https://web.archive.org/web/20170222200836/https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/) from the original on 22 February 2017. Retrieved 22 February 2017.
92. **[^](#cite_ref-95)** SC Magazine UK, [Developer's 11 lines of deleted code 'breaks the internet'](https://www.scmagazineuk.com/developers-11-lines-of-deleted-code-breaks-the-internet/article/532050/) [Archived](https://web.archive.org/web/20170223041434/https://www.scmagazineuk.com/developers-11-lines-of-deleted-code-breaks-the-internet/article/532050/) February 23, 2017, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
93. **[^](#cite_ref-96)** Mozilla Corporation, [Buffer overflow in crypto.signText()](https://www.mozilla.org/security/announce/2006/mfsa2006-38.html) [Archived](https://web.archive.org/web/20140604014705/https://www.mozilla.org/security/announce/2006/mfsa2006-38.html) 2014-06-04 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
94. **[^](#cite_ref-97)** Festa, Paul (19 August 1998). ["Buffer-overflow bug in IE"](https://web.archive.org/web/20021225190522/https://news.com.com/2100-1001-214620.html). *[CNET](https://en.wikipedia.org/wiki/CNET)*. Archived from [the original](https://news.com.com/2100-1001-214620.html) on 25 December 2002.
95. **[^](#cite_ref-98)** SecurityTracker.com, [Apple Safari JavaScript Buffer Overflow Lets Remote Users Execute Arbitrary Code and HTTP Redirect Bug Lets Remote Users Access Files](https://securitytracker.com/alerts/2006/Mar/1015713.html) [Archived](https://web.archive.org/web/20100218102849/https://securitytracker.com/alerts/2006/Mar/1015713.html) 2010-02-18 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
96. **[^](#cite_ref-99)** SecurityFocus, [Microsoft WebViewFolderIcon ActiveX Control Buffer Overflow Vulnerability](https://www.securityfocus.com/bid/19030/info) [Archived](https://web.archive.org/web/20111011091819/http://www.securityfocus.com/bid/19030/info) 2011-10-11 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
97. **[^](#cite_ref-100)** Fusion Authority, [Macromedia Flash ActiveX Buffer Overflow](https://www.fusionauthority.com/security/3234-macromedia-flash-activex-buffer-overflow.htm) [Archived](https://web.archive.org/web/20110813160055/https://www.fusionauthority.com/security/3234-macromedia-flash-activex-buffer-overflow.htm) August 13, 2011, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
98. **[^](#cite_ref-101)** ["Protected Mode in Vista IE7 – IEBlog"](https://blogs.msdn.com/ie/archive/2006/02/09/528963.aspx). *Blogs.msdn.com*. 9 February 2006. [Archived](https://web.archive.org/web/20100123103719/https://blogs.msdn.com/ie/archive/2006/02/09/528963.aspx) from the original on 23 January 2010. Retrieved 24 February 2017.
99. **[^](#cite_ref-102)** US CERT, [Vulnerability Note VU#713878: Microsoft Internet Explorer does not properly validate source of redirected frame](https://www.kb.cert.org/vuls/id/713878) [Archived](https://web.archive.org/web/20091030051811/https://www.kb.cert.org/vuls/id/713878/) 2009-10-30 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
100. **[^](#cite_ref-103)** Mozilla Foundation, [Mozilla Foundation Security Advisory 2005–41: Privilege escalation via DOM property overrides](https://www.mozilla.org/security/announce/2005/mfsa2005-41.html) [Archived](https://web.archive.org/web/20140604014832/https://www.mozilla.org/security/announce/2005/mfsa2005-41.html) 2014-06-04 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
101. **[^](#cite_ref-104)** Andersen, Starr (9 August 2004). ["Part 5: Enhanced Browsing Security"](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-xp/bb457150(v=technet.10)). [TechNet](https://en.wikipedia.org/wiki/Microsoft_TechNet). *[Microsoft Docs](https://en.wikipedia.org/wiki/Microsoft_Docs)*. Changes to Functionality in Windows XP Service Pack 2. Retrieved 20 October 2021.
102. **[^](#cite_ref-105)** For one example of a rare JavaScript Trojan Horse, see Symantec Corporation, [JS.Seeker.K](https://www.symantec.com/security_response/writeup.jsp?docid=2003-100111-0931-99) [Archived](https://web.archive.org/web/20110913210848/http://www.symantec.com/security_response/writeup.jsp?docid=2003-100111-0931-99) 2011-09-13 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
103. **[^](#cite_ref-106)** Gruss, Daniel; Maurice, Clémentine; Mangard, Stefan (24 July 2015). "Rowhammer.js: A Remote Software-Induced Fault Attack in JavaScript". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1507.06955](https://arxiv.org/abs/1507.06955) [[cs.CR](https://arxiv.org/archive/cs.CR)].
104. **[^](#cite_ref-107)** Jean-Pharuns, Alix (30 July 2015). ["Rowhammer.js Is the Most Ingenious Hack I've Ever Seen"](https://www.vice.com/en/article/rowhammerjs-is-the-most-ingenious-hack-ive-ever-seen/). *Motherboard*. [Vice](https://en.wikipedia.org/wiki/Vice_(magazine)). [Archived](https://web.archive.org/web/20180127084042/https://motherboard.vice.com/en_us/article/9akpwz/rowhammerjs-is-the-most-ingenious-hack-ive-ever-seen) from the original on 27 January 2018. Retrieved 26 January 2018.
105. **[^](#cite_ref-108)** Goodin, Dan (4 August 2015). ["DRAM 'Bitflipping' exploit for attacking PCs: Just add JavaScript"](https://arstechnica.com/information-technology/2015/08/dram-bitflipping-exploit-for-attacking-pcs-just-add-javascript/). *[Ars Technica](https://en.wikipedia.org/wiki/Ars_Technica)*. [Archived](https://web.archive.org/web/20180127143154/https://arstechnica.com/information-technology/2015/08/dram-bitflipping-exploit-for-attacking-pcs-just-add-javascript/) from the original on 27 January 2018. Retrieved 26 January 2018.
106. **[^](#cite_ref-109)** [Auerbach, David](https://en.wikipedia.org/wiki/David_Auerbach) (28 July 2015). ["Rowhammer security exploit: Why a new security attack is truly terrifying"](https://www.slate.com/articles/technology/bitwise/2015/07/rowhammer_security_exploit_why_a_new_security_attack_is_truly_terrifying.html). *slate.com*. [Archived](https://web.archive.org/web/20150730004023/https://www.slate.com/articles/technology/bitwise/2015/07/rowhammer_security_exploit_why_a_new_security_attack_is_truly_terrifying.html) from the original on 30 July 2015. Retrieved 29 July 2015.
107. **[^](#cite_ref-110)** [AnC](https://www.vusec.net/projects/anc/) [Archived](https://web.archive.org/web/20170316055626/https://www.vusec.net/projects/anc/) 2017-03-16 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) VUSec, 2017
108. **[^](#cite_ref-111)** [New ASLR-busting JavaScript is about to make drive-by exploits much nastier](https://arstechnica.com/security/2017/02/new-aslr-busting-javascript-is-about-to-make-drive-by-exploits-much-nastier/) [Archived](https://web.archive.org/web/20170316024419/https://arstechnica.com/security/2017/02/new-aslr-busting-javascript-is-about-to-make-drive-by-exploits-much-nastier/) 2017-03-16 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) Ars Technica, 2017
109. **[^](#cite_ref-112)** [Spectre Attack](https://spectreattack.com/spectre.pdf) [Archived](https://web.archive.org/web/20180103225843/https://spectreattack.com/spectre.pdf) 2018-01-03 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) Spectre Attack
110. **[^](#cite_ref-113)** ["Benchmark.js"](https://benchmarkjs.com/). *benchmarkjs.com*. [Archived](https://web.archive.org/web/20161219182724/https://benchmarkjs.com/) from the original on 19 December 2016. Retrieved 6 November 2016.
111. **[^](#cite_ref-auto1_114-0)** JSBEN.CH. ["JSBEN.CH Performance Benchmarking Playground for JavaScript"](https://jsben.ch). *jsben.ch*. [Archived](https://web.archive.org/web/20210227052409/https://jsben.ch/) from the original on 27 February 2021. Retrieved 13 August 2021.
112. **[^](#cite_ref-popularity_115-0)** [Eich, Brendan](https://en.wikipedia.org/wiki/Brendan_Eich) (3 April 2008). ["Popularity"](https://brendaneich.com/2008/04/popularity/). [Archived](https://web.archive.org/web/20110703020955/https://brendaneich.com/2008/04/popularity/) from the original on 3 July 2011. Retrieved 19 January 2012.
113. **[^](#cite_ref-116)** ["Edge Browser Switches WebAssembly to 'On' -- Visual Studio Magazine"](https://visualstudiomagazine.com/articles/2017/11/06/edge-webassembly.aspx). *Visual Studio Magazine*. [Archived](https://web.archive.org/web/20180210002432/https://visualstudiomagazine.com/articles/2017/11/06/edge-webassembly.aspx) from the original on 10 February 2018. Retrieved 9 February 2018.
114. **[^](#cite_ref-117)** ["frequently asked questions"](https://asmjs.org/faq.html). asm.js. [Archived](https://web.archive.org/web/20140604012024/https://asmjs.org/faq.html) from the original on 4 June 2014. Retrieved 13 April 2014.

## Further reading

## External links

[This audio file](https://en.wikipedia.org/wiki/File:En-JavaScript.ogg)

was created from a revision of this article dated 20 August 2013

 (2013-08-20)

, and does not reflect subsequent edits.