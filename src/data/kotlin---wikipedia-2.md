# Kotlin - Wikipedia

Source: https://en.wikipedia.org/wiki/Kotlin_(programming_language)

---

General-purpose programming language derived from Java

| Kotlin |
| --- |
| Show dark mode logo Show light mode logo |
| Paradigms | Multi-paradigm : object-oriented , functional , imperative , block structured , generic , reflective , concurrent |
| Designed by | JetBrains |
| Developer | JetBrains |
| First appeared | 22 July 2011 ; 14 years ago ( 2011-07-22 ) |
|  |
| Stable release | 2.3.0 / 16 December 2025 ; 4 months ago ( 16 December 2025 ) |
|  |
| Typing discipline | Inferred , static , strong |
| Platform |  |
| OS | Cross-platform |
| License | Apache 2.0 |
| Filename extensions | .kt, .kts, .kexe, .klib |
| Website | kotlinlang .org |
|  |
|  |
|  |
| V (Vlang) |

**Kotlin** () is a [cross-platform](https://en.wikipedia.org/wiki/Cross-platform_software), [statically typed](https://en.wikipedia.org/wiki/Static_typing), [general-purpose](https://en.wikipedia.org/wiki/General-purpose_programming_language) [high-level](https://en.wikipedia.org/wiki/High-level_programming_language) [programming language](https://en.wikipedia.org/wiki/Programming_language) with [type inference](https://en.wikipedia.org/wiki/Type_inference). Kotlin is designed to interoperate fully with [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), and the [Java virtual machine](https://en.wikipedia.org/wiki/Java_virtual_machine) (JVM) version of Kotlin's [standard library](https://en.wikipedia.org/wiki/Standard_library) depends on the [Java Class Library](https://en.wikipedia.org/wiki/Java_Class_Library).
However, type inference allows for more concise [syntax](https://en.wikipedia.org/wiki/Syntax_(programming_languages)). Kotlin mainly targets the JVM, but also compiles to [JavaScript](https://en.wikipedia.org/wiki/JavaScript) (e.g., for frontend web applications using [React](https://en.wikipedia.org/wiki/React_(software))) or [native code](https://en.wikipedia.org/wiki/Machine_code) via [LLVM](https://en.wikipedia.org/wiki/LLVM) (e.g., for native [iOS](https://en.wikipedia.org/wiki/IOS) apps sharing [business logic](https://en.wikipedia.org/wiki/Business_logic) with [Android](https://en.wikipedia.org/wiki/Android_(operating_system)) apps). [JetBrains](https://en.wikipedia.org/wiki/JetBrains) bears language development costs, while the Kotlin Foundation protects the Kotlin trademark.

On 7 May 2019, Google announced Kotlin had become its preferred language for [Android](https://en.wikipedia.org/wiki/Android_(operating_system)) app developers. Since the release of [Android Studio](https://en.wikipedia.org/wiki/Android_Studio) 3.0 in October 2017, Kotlin has been included as an alternative to the standard Java [compiler](https://en.wikipedia.org/wiki/Compiler). The Android Kotlin compiler emits Java 8 [bytecode](https://en.wikipedia.org/wiki/Bytecode) by default (which runs in any later JVM), but allows targeting Java 9 up to 24, for optimizing, or allows for more features; it has bidirectional [record class](https://en.wikipedia.org/wiki/Record_(computer_science)) interoperability support for JVM, introduced in Java 16, considered stable as of Kotlin 1.5.

Kotlin has support for the web with Kotlin/JS, through an [intermediate representation](https://en.wikipedia.org/wiki/Intermediate_representation)-based backend that has been declared stable since version 1.8, released in December 2022. Kotlin/Native (e.g., [Apple silicon](https://en.wikipedia.org/wiki/Apple_silicon) support) has been declared stable since version 1.9.20, released in November 2023.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Kodee-mascot-regular.svg/250px-Kodee-mascot-regular.svg.png)](https://en.wikipedia.org/wiki/File:Kodee-mascot-regular.svg)

Kotlin mascot named Kodee (regular version)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kodee-mascot-petite.svg/250px-Kodee-mascot-petite.svg.png)](https://en.wikipedia.org/wiki/File:Kodee-mascot-petite.svg)

Kotlin mascot named Kodee (petite version)

The name is derived from [Kotlin Island](https://en.wikipedia.org/wiki/Kotlin_Island), a Russian island in the [Gulf of Finland](https://en.wikipedia.org/wiki/Gulf_of_Finland), near [Saint Petersburg](https://en.wikipedia.org/wiki/Saint_Petersburg). Andrey Breslav, Kotlin's former lead designer, mentioned that the team decided to name it after an island, in imitation of the Java programming language, which shares a name with the Indonesian island of [Java](https://en.wikipedia.org/wiki/Java).

The first commit to the Kotlin Git repository was on 8 November 2010.

In July 2011, [JetBrains](https://en.wikipedia.org/wiki/JetBrains) unveiled Project Kotlin, a new JVM language that had been under development for a year. JetBrains lead Dmitry Jemerov said that most languages lacked the features they were looking for, except for [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)). However, he cited Scala's slow [compilation](https://en.wikipedia.org/wiki/Compiler) time as a deficiency. One of Kotlin's stated goals is to compile as quickly as Java. In February 2012, JetBrains open-sourced the project under the [Apache 2 license](https://en.wikipedia.org/wiki/Apache_License#Apache_License_2.0).

JetBrains expected Kotlin to drive sales of [IntelliJ IDEA](https://en.wikipedia.org/wiki/IntelliJ_IDEA).

Kotlin 1.0 was released on 15 February 2016, which is considered the first officially stable release, and JetBrains has committed to long-term backwards compatibility starting with this version.

At [Google I/O](https://en.wikipedia.org/wiki/Google_I/O) 2017, Google announced first-class support for Kotlin on [Android](https://en.wikipedia.org/wiki/Android_(operating_system)). On 7 May 2019, Google announced that Kotlin is now its preferred language for Android app developers.

Development lead Andrey Breslav has said that Kotlin is designed to be an industrial-strength [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) language, a "better language" than [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), and still fully [interoperable](https://en.wikipedia.org/wiki/Interoperability) with Java code, allowing companies to make a gradual migration from Java to Kotlin.

[Semicolons](https://en.wikipedia.org/wiki/Semicolon) are optional as a [statement](https://en.wikipedia.org/wiki/Statement_(computer_science)) [terminator](https://en.wikipedia.org/wiki/Statement_terminator#Statements); in most cases, a [newline](https://en.wikipedia.org/wiki/Newline) is sufficient for the [compiler](https://en.wikipedia.org/wiki/Compiler) to deduce that the statement has ended.

Kotlin [variable](https://en.wikipedia.org/wiki/Variable_(computer_science)) declarations and [parameter lists](https://en.wikipedia.org/wiki/Parameter_(computer_programming)) place the [data type](https://en.wikipedia.org/wiki/Data_type) after the variable name (separated by a [colon](https://en.wikipedia.org/wiki/Colon_(punctuation))), similar to [Ada](https://en.wikipedia.org/wiki/Ada_(programming_language)), [BASIC](https://en.wikipedia.org/wiki/BASIC), [Pascal](https://en.wikipedia.org/wiki/Pascal_(programming_language)), [TypeScript](https://en.wikipedia.org/wiki/TypeScript), and [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)). This, according to an article from Roman Elizarov, current project lead, results in alignment of variable names and is more pleasing to the eyes, especially when there are a few variable declarations in succession, and one or more of the types are too complex for type inference, or need to be declared explicitly for human readers to understand.

The influence of [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)) in Kotlin can be seen in the extensive support for both object-oriented and functional programming and in several specific features:

Kotlin 1.3 added support for contracts, which are stable for the standard library declarations, but still experimental for user-defined declarations. Contracts are inspired by the [design-by-contract](https://en.wikipedia.org/wiki/Design_by_contract) [programming paradigm](https://en.wikipedia.org/wiki/Programming_paradigm).

Like [Scala.js](https://www.scala-js.org/), Kotlin code can be [transpiled](https://en.wikipedia.org/wiki/Source-to-source_compiler) to [JavaScript](https://en.wikipedia.org/wiki/JavaScript), enabling interoperability between Kotlin and JavaScript and allowing either writing complete web applications in Kotlin or sharing code between a Kotlin backend and a JavaScript frontend.

### Procedural programming style

[[edit](/w/index.php?title=Kotlin&action=edit&section=6)]

Kotlin relaxes the Java restriction on [static](https://en.wikipedia.org/wiki/Static_(keyword)) methods and variables, allowing them to exist outside a class body. Static objects and functions can be defined at the top level of the package without requiring a redundant class-level scope. For compatibility with Java, Kotlin provides the `JvmName` annotation, which specifies the class name used when the package is viewed from a Java project. For example, `@file:JvmName("JavaClassName")`.

As in [C](https://en.wikipedia.org/wiki/C_(programming_language)), [C++](https://en.wikipedia.org/wiki/C%2B%2B), [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)), [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), and [Go](https://en.wikipedia.org/wiki/Go_(programming_language)), the [entry point](https://en.wikipedia.org/wiki/Entry_point) to a Kotlin [program](https://en.wikipedia.org/wiki/Computer_program) is a function named `main`, which may be passed an array containing any [command-line](https://en.wikipedia.org/wiki/Command-line_interface) arguments. This is optional since Kotlin 1.3. [Perl](https://en.wikipedia.org/wiki/Perl), [PHP](https://en.wikipedia.org/wiki/PHP), and [Unix shell](https://en.wikipedia.org/wiki/Unix_shell)–style [string interpolation](https://en.wikipedia.org/wiki/String_interpolation) is supported. [Type inference](https://en.wikipedia.org/wiki/Type_inference) is also supported.

```
// Hello, World! example
fun main() {
    val scope = "World"
    println("Hello, $scope!")
}

```

```
fun main(args: Array<String>) {
    for (arg in args) {
        println(arg)
    }
}

```

### Extension functions

[[edit](/w/index.php?title=Kotlin&action=edit&section=8)]

Similar to C#, Kotlin allows adding an [extension function](https://en.wikipedia.org/wiki/Extension_method) to any class without the formalities of creating a derived class with new functions. An extension function has access to all the public interface of a class, which it can use to create a new function interface to a target class. An extension function will appear exactly like a class function and will be shown in code completion inspections of class functions. For example:

```
package org.wikipedia.examples

fun String.lastChar(): Char = get(length - 1)

println("Kotlin".lastChar()) // prints: n

```

By placing the preceding code in the top-level of a package, the String class is extended to include a `lastChar` function that was not included in the original definition of the String class.

```
// Overloading '+' operator using an extension function
operator fun Point.plus(other: Point): Point {
    return Point(x + other.x, y + other.y)
}

val p1 = Point(10, 20)
val p2 = Point(30, 40)
println(p1 + p2) // prints: Point(x=40, y=60)

```

Kotlin has five scope functions that allow changing the [scope](https://en.wikipedia.org/wiki/Scope_(computer_science)) within the context of an [object](https://en.wikipedia.org/wiki/Object_(computer_science)). The scope functions are `let`, `run`, `with`, `apply`, and `also`.

### Unpack arguments with the spread operator

[[edit](/w/index.php?title=Kotlin&action=edit&section=10)]

Similar to Python, the spread operator asterisk (\*) unpacks an array's contents as individual arguments to a function, e.g.:

```
fun main(args: Array<String>) { 
    val list: List<String> = listOf("args: ", *args)
    println(list)
}

```

### Destructuring declarations

[[edit](/w/index.php?title=Kotlin&action=edit&section=11)]

Not to be confused with the

[destructor](https://en.wikipedia.org/wiki/Destructor_(computer_programming))

method common in object-oriented languages.

*Destructuring declarations* decompose an object into multiple variables at once, e.g., a 2D coordinate object might be *destructured* into two integers, x and y.

For example, the `Map.Entry` object supports destructuring to simplify access to its key and value fields:

```
for ((key, value) in map) {
    println("$key: $value")
}

```

Kotlin allows local functions to be declared inside other functions or methods.

```
class User(val id: Int, val name: String, val address: String)
    
fun saveUserToDb(user: User) {
    fun validate(user: User, value: String, fieldName: String) {
        require(value.isNotEmpty()) {
            "Can't save user ${user.id}: empty $fieldName"
        }
    }
    
    validate(user, user.name, "Name") 
    validate(user, user.address, "Address")
    // Save user to the database 
    // ...
}

```

### Classes are final by default

[[edit](/w/index.php?title=Kotlin&action=edit&section=13)]

In Kotlin, to derive a new class from a base class, the base class must be explicitly marked as `open`; in contrast, most object-oriented languages, such as Java, are open by default.

Example of a base class that is open to deriving a new subclass from it:

```
// open on the class means this class will allow derived classes
open class MegaButton {

    // no-open on a function means that 
    //    polymorphic behavior disabled if function overridden in derived class
    fun disable() {
        // ...
    }

    // open on a function means that
    //    polymorphic behavior allowed if function is overridden in derived class
    open fun animate() {
        // ...
    }
}

class GigaButton: MegaButton() {

    // Explicit use of override keyword required to override a function in derived class
    override fun animate() {
        println("Giga Click!")
    }
}

```

### Abstract classes are open by default

[[edit](/w/index.php?title=Kotlin&action=edit&section=14)]

[Abstract classes](https://en.wikipedia.org/wiki/Abstract_class) define abstract, or "pure virtual", placeholder functions that will be implemented in a derived class. Abstract classes are open by default.

```
// No need for the open keyword here, it's already open by default
abstract class Animated {

    // This virtual function is already open by default as well
    abstract fun animate()
  
    open fun stopAnimating() {
        // ...
    }

    fun animateTwice() {
        // ...
    }
}

```

### Classes are public by default

[[edit](/w/index.php?title=Kotlin&action=edit&section=15)]

Kotlin provides the following keywords to restrict visibility for top-level declarations (such as classes) and for class members: `public`, `internal`, `protected`, and `private`.

When applied to a class member:

| Keyword | Visibility |
| --- | --- |
| public (default) | Everywhere |
| internal | Within a module |
| protected | Within subclasses |
| private | Within a class |

When applied to a top-level declaration:

| Keyword | Visibility |
| --- | --- |
| public (default) | Everywhere |
| internal | Within a module |
| private | Within a file |

Example:

```
// Class is visible only to current module
internal open class TalkativeButton {
    // method is only visible to current class 
    private fun yell() = println("Hey!")
    // method is visible to current class and derived classes
    protected fun whisper() = println("Let's talk!")
}

internal class MyTalkativeButton: TalkativeButton() {
    fun utter() = super.whisper()
}
MyTalkativeButton().utter()

```

### Primary constructor vs. secondary constructors

[[edit](/w/index.php?title=Kotlin&action=edit&section=16)]

Kotlin supports specifying a "primary constructor" as part of the class definition itself, consisting of an argument list following the class name. This argument list supports an expanded syntax on Kotlin's standard function argument lists that enables declaration of class properties in the primary constructor, including visibility, extensibility, and mutability attributes. Additionally, when defining a subclass, properties in super-interfaces and super-classes can be overridden in the primary constructor.

```
// Example of class using primary constructor syntax
// (Only one constructor required for this class)
open class BaseUser(open var isSubscribed: Boolean)
open class PowerUser(protected val nickname: String, final override var isSubscribed: Boolean = true):BaseUser(isSubscribed) { }

```

However, when more than one constructor is needed for a class, a more general constructor can be defined using **secondary constructor syntax**, which closely resembles that of most object-oriented languages such as C++, C#, and Java.

```
// Example of class using secondary constructor syntax
// (more than one constructor required for this class)
class Context
class AttributeSet

open class View(ctx:Context) {
    constructor(ctx: Context, attr: AttributeSet): this(ctx)
}

class MyButton : View {
    // Constructor #1 
    constructor(ctx: Context) : super(ctx) {
        // ...
    }

    // Constructor #2
    constructor(ctx: Context, attr: AttributeSet) : super(ctx, attr) {
        // ... 
    }
}

```

**Sealed** classes and interfaces restrict subclass hierarchies, meaning more control over the inheritance hierarchy.

Declaration of sealed interface and class:

```
sealed interface Expr
sealed class Job

```

All the subclasses of the sealed class are defined at compile time. No new subclasses can be added to it after the module containing the sealed class is compiled. For example, a sealed class in a compiled jar file cannot be subclassed.

```
sealed class Vehicle
data class Car(val brandName: String, val owner: String, val color: String): Vehicle()
class Bike(val brandName: String, val owner: String, val color: String): Vehicle()
class Tractor(val brandName: String, val owner: String, val color: String): Vehicle()

val kiaCar = Car("KIA", "John", "Blue")
val hyundaiCar = Car("Hyundai", "Britto", "Green")

```

Kotlin's `data class` construct defines classes whose primary purpose is storing data, similar to Java's `record` types. Like Java's `record` types, the construct is similar to a regular class, except that the key methods `equals`, `hashCode`, and `toString` are automatically generated from the class's properties. Unlike Java's records, data classes are open for inheritance.

### Kotlin interactive shell

[[edit](/w/index.php?title=Kotlin&action=edit&section=19)]

```
$ kotlinc-jvm
type :help for help; :quit for quit
>>> 2 + 2
4
>>> println("Hello, World!")
Hello, World!

```

### Kotlin as a scripting language

[[edit](/w/index.php?title=Kotlin&action=edit&section=20)]

Kotlin can also be used as a [scripting language](https://en.wikipedia.org/wiki/Scripting_language). A script is a Kotlin source file using the .kts [filename extension](https://en.wikipedia.org/wiki/Filename_extension), with executable source code at the top-level scope:

```
// list_folders.kts
import java.io.File

val folders = File(args[0]).listFiles { file -> file.isDirectory() }
folders?.forEach(::println)

```

Scripts can be run by passing the `-script` option and the corresponding script file to the compiler.

```
$ kotlinc -script list_folders.kts "path_to_folder_to_inspect"

```

Kotlin distinguishes between [nullable](https://en.wikipedia.org/wiki/Nullable) and non-nullable data types. All nullable objects must be declared with a "?" postfix after the type name. Operations on nullable objects need special care from developers: a null-check must be performed before using the value, either explicitly, or with the aid of Kotlin's null-safe operators:

* ?. (the [safe navigation operator](https://en.wikipedia.org/wiki/Safe_navigation_operator)) can be used to safely access a method or property of a possibly null object. If the object is null, the method will not be called, and the expression evaluates to null. Example:

> ```
> // returns null if...
> // - foo() returns null,
> // - or if foo() is non-null, but bar() returns null,
> // - or if foo() and bar() are non-null, but baz() returns null.
> // vice versa, return value is non-null if and only if foo(), bar() and baz() are non-null
> foo()?.bar()?.baz()
>
> ```

* ?: (the [null coalescing operator](https://en.wikipedia.org/wiki/Null_coalescing_operator)) is a binary operator that returns the first operand, if non-null, else the second operand. It is often referred to as the [Elvis operator](https://en.wikipedia.org/wiki/Elvis_operator), due to its resemblance to an [emoticon](https://en.wikipedia.org/wiki/Emoticon) representation of Elvis Presley.

> ```
> fun sayHello(maybe: String?, neverNull: Int) {
>     // use of Elvis operator
>     val name: String = maybe ?: "stranger"
>     println("Hello $name")
> }
>
> ```

Kotlin supports [higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function) and [anonymous functions](https://en.wikipedia.org/wiki/Anonymous_functions), or **lambdas**.

```
// the following function takes a lambda, f, and executes f passing it the string "lambda"
// note that (String) -> Unit indicates a lambda with a String parameter and Unit return type
fun executeLambda(f: (String) -> Unit) {
    f("lambda")
}

```

Lambdas are declared using braces, { }. If a lambda takes parameters, they are declared within the braces and followed by the -> operator.

```
// the following statement defines a lambda that takes a single parameter and passes it to the println function
val l = { c : Any? -> println(c) }
// lambdas with no parameters may simply be defined using { }
val l2 = { print("no parameters") }

```

### "Hello world" example

[[edit](/w/index.php?title=Kotlin&action=edit&section=23)]

(Taken from and explained at [https://kotlinlang.org/docs/kotlin-tour-hello-world.html](https://kotlinlang.org/docs/kotlin-tour-hello-world.html).)

```
fun main() {
    println("Hello, world!")
    // Hello, world!
}

```

## Kotlin Multiplatform

[[edit](/w/index.php?title=Kotlin&action=edit&section=25)]

Kotlin Multiplatform enables a single [codebase](https://en.wikipedia.org/wiki/Codebase) to target multiple platforms, including [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), [Linux](https://en.wikipedia.org/wiki/Linux), the web, Android, and [iOS](https://en.wikipedia.org/wiki/IOS).

Compose Multiplatform is a multiplatform UI framework based on [Jetpack Compose](https://en.wikipedia.org/wiki/Jetpack_Compose). It is Jetpack Compose for Android ported to Windows, [macOS](https://en.wikipedia.org/wiki/MacOS), Linux, web, and iOS. Jetpack Compose uses a Kotlin compiler plugin to transform composable functions into UI elements. For example, the Text composable function displays a text label on the screen.

In 2018, Kotlin was the fastest-growing language on GitHub, with 2.6 times as many developers as in 2017. It is the fourth-most-loved programming language according to the 2020 Stack Overflow Developer Survey.

Kotlin was also awarded the O'Reilly Open Source Software Conference Breakout Award for 2019.

A large number of companies in various industries use Kotlin, including Google, [Amazon Web Services](https://en.wikipedia.org/wiki/Amazon_Web_Services), [Netflix](https://en.wikipedia.org/wiki/Netflix) and [McDonald's](https://en.wikipedia.org/wiki/McDonald%27s).

When Kotlin was announced as an official Android development language at [Google I/O](https://en.wikipedia.org/wiki/Google_I/O) in May 2017, it became the third language fully supported for Android, after Java and C++. As of 2020[[update]](https://en.wikipedia.org/w/index.php?title=Kotlin&action=edit), Kotlin was the most widely used language on Android, with Google estimating that 70% of the top 1,000 apps on the Play Store were written in Kotlin. Google itself had 60 apps written in Kotlin, including Maps and Drive. Many Android apps, such as Google Home, were in the process of migrating to Kotlin and therefore use both Kotlin and Java. Kotlin on Android is seen as beneficial for its [null-safety](https://en.wikipedia.org/wiki/Null-pointer_safety) and features that make code shorter and more readable.

Ktor is a JetBrains Kotlin-first framework for building server and client applications. The [Spring Framework](https://en.wikipedia.org/wiki/Spring_Framework) officially added Kotlin support with version 5, on 4 January 2017. To further support Kotlin, Spring has translated all its documentation into Kotlin and added built-in support for many Kotlin-specific features, such as [coroutines](https://en.wikipedia.org/wiki/Coroutines).

In 2020, JetBrains found in a survey of developers who use Kotlin that 56% used it for mobile apps, while 47% used it for a web backend. Just over a third of all Kotlin developers said they were migrating from another language. Most Kotlin users targeted Android (or the JVM), with only 6% using Kotlin Native.

* This article contains quotations from Kotlin tutorials which are released under an Apache 2.0 license.

1. **[^](#cite_ref-wikidata-ce9315443a9266519b2e710a6f7efd4f4e9a3e9a-v20_1-0)** ["Release Kotlin 2.3.0"](https://github.com/JetBrains/kotlin/releases/tag/v2.3.0). 16 December 2025. Retrieved 18 December 2025.
2. **[^](#cite_ref-2)** ["Kotlin/Native target support | Kotlin"](https://kotlinlang.org/docs/native-target-support.html). *Kotlin Help*. Retrieved 16 October 2025.
3. **[^](#cite_ref-pronunciation_3-0)** ["What is the correct English pronunciation of Kotlin?"](https://discuss.kotlinlang.org/t/what-is-the-correct-english-pronunciation-of-kotlin/2050). 16 October 2019. [Archived](https://web.archive.org/web/20191109155142/https://discuss.kotlinlang.org/t/what-is-the-correct-english-pronunciation-of-kotlin/2050) from the original on 9 November 2019. Retrieved 9 November 2019.
4. **[^](#cite_ref-4)** ["Kotlin for JavaScript - Kotlin Programming Language"](https://kotlinlang.org/docs/reference/js-overview.html). *Kotlin*. [Archived](https://web.archive.org/web/20200816160848/https://kotlinlang.org/docs/reference/js-overview.html) from the original on 16 August 2020. Retrieved 20 August 2020.
5. **[^](#cite_ref-5)** ["Kotlin for cross-platform mobile development"](https://www.jetbrains.com/lp/mobilecrossplatform/). *JetBrains: Developer Tools for Professionals and Teams*. [Archived](https://web.archive.org/web/20200819163838/https://www.jetbrains.com/lp/mobilecrossplatform/) from the original on 19 August 2020. Retrieved 20 August 2020.
6. **[^](#cite_ref-6)** ["Kotlin Foundation - Kotlin Programming Language"](https://kotlinlang.org/foundation/kotlin-foundation.html). *Kotlin*. [Archived](https://web.archive.org/web/20191229152934/https://kotlinlang.org/foundation/kotlin-foundation.html) from the original on 29 December 2019. Retrieved 16 December 2019.
7. ^ [***a***](#cite_ref-auto_7-0) [***b***](#cite_ref-auto_7-1) Lardinois, Frederic (7 May 2019). ["Kotlin is now Google's preferred language for Android app development"](https://techcrunch.com/2019/05/07/kotlin-is-now-googles-preferred-language-for-android-app-development/). *TechCrunch*. [Archived](https://web.archive.org/web/20190507203145/https://techcrunch.com/2019/05/07/kotlin-is-now-googles-preferred-language-for-android-app-development/) from the original on 7 May 2019. Retrieved 8 May 2019.
8. **[^](#cite_ref-kotlin-faq_8-0)** ["Kotlin FAQ"](https://kotlinlang.org/docs/faq.html#which-versions-of-jvm-does-kotlin-target). [Archived](https://web.archive.org/web/20210602213318/https://kotlinlang.org/docs/faq.html#which-versions-of-jvm-does-kotlin-target) from the original on 2 June 2021. Retrieved 16 October 2025. "Kotlin lets you choose the version of JVM for execution. By default, the Kotlin/JVM compiler produces Java 8 compatible bytecode. If you want to make use of optimizations available in newer versions of Java, you can explicitly specify the target Java version from 9 to 24. Note that in this case the resulting bytecode might not run on lower versions. Starting with Kotlin 1.5, the compiler does not support producing bytecode compatible with Java versions below 8."
9. **[^](#cite_ref-stability_9-0)** ["Stability of Kotlin Components"](https://kotlinlang.org/docs/components-stability.html). *Kotlin*. 21 May 2021. [Archived](https://web.archive.org/web/20210729105608/https://kotlinlang.org/docs/components-stability.html) from the original on 29 July 2021. Retrieved 29 July 2021.
10. **[^](#cite_ref-whatsnew150_10-0)** ["Kotlin 1.5.0 – the First Big Release of 2021"](https://blog.jetbrains.com/kotlin/2021/05/kotlin-1-5-0-released/). *Kotlin*. 4 May 2021. [Archived](https://web.archive.org/web/20210812172858/https://blog.jetbrains.com/kotlin/2021/05/kotlin-1-5-0-released/) from the original on 12 August 2021. Retrieved 29 July 2021.
11. **[^](#cite_ref-11)** Mobius (8 January 2015), [*Андрей Бреслав – Kotlin для Android: коротко и ясно*](https://www.youtube.com/watch?v=VU_L2_XGQ9s), [archived](https://web.archive.org/web/20230412075657/https://www.youtube.com/watch?v=VU_L2_XGQ9s) from the original on 12 April 2023, retrieved 28 May 2017
12. **[^](#cite_ref-12)** ["test · JetBrains/kotlin@3e4dce3"](https://github.com/JetBrains/kotlin/commit/3e4dce385331c91c9059fcdcea3eae2394f34942). *GitHub*. [Archived](https://web.archive.org/web/20221017184043/https://github.com/JetBrains/kotlin/commit/3e4dce385331c91c9059fcdcea3eae2394f34942) from the original on 17 October 2022. Retrieved 17 October 2022.
13. ^ [***a***](#cite_ref-announce_13-0) [***b***](#cite_ref-announce_13-1) Krill, Paul (22 July 2011). ["JetBrains readies JVM language Kotlin"](https://www.infoworld.com/d/application-development/jetbrains-readies-jvm-based-language-167875). *[InfoWorld](https://en.wikipedia.org/wiki/InfoWorld)*. [Archived](https://web.archive.org/web/20190907161741/https://www.infoworld.com/article/2622405/jetbrains-readies-jvm-based-language.html) from the original on 7 September 2019. Retrieved 2 February 2014.
14. **[^](#cite_ref-open_source_14-0)** Waters, John (22 February 2012). ["Kotlin Goes Open Source"](https://adtmag.com/articles/2012/02/22/kotlin-goes-open-source.aspx). *ADTmag.com*. 1105 Enterprise Computing Group. [Archived](https://web.archive.org/web/20140218225151/https://adtmag.com/articles/2012/02/22/kotlin-goes-open-source.aspx) from the original on 18 February 2014. Retrieved 2 February 2014.
15. **[^](#cite_ref-15)** ["Why JetBrains needs Kotlin"](https://blog.jetbrains.com/kotlin/2011/08/why-jetbrains-needs-kotlin/). 2 August 2011. [Archived](https://web.archive.org/web/20230816024048/https://blog.jetbrains.com/kotlin/2011/08/why-jetbrains-needs-kotlin/) from the original on 16 August 2023. Retrieved 11 February 2018. "we expect Kotlin to drive the sales of IntelliJ IDEA"
16. **[^](#cite_ref-16)** ["Kotlin 1.0 Released: Pragmatic Language for JVM and Android | Kotlin Blog"](https://blog.jetbrains.com/kotlin/2016/02/kotlin-1-0-released-pragmatic-language-for-jvm-and-android/). *Blog.jetbrains.com*. 15 February 2016. [Archived](https://web.archive.org/web/20180124194203/https://blog.jetbrains.com/kotlin/2016/02/kotlin-1-0-released-pragmatic-language-for-jvm-and-android/) from the original on 24 January 2018. Retrieved 11 April 2017.
17. **[^](#cite_ref-kotlin-android_17-0)** Shafirov, Maxim (17 May 2017). ["Kotlin on Android. Now official"](https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/). [Archived](https://web.archive.org/web/20230529180054/https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/) from the original on 29 May 2023. Retrieved 18 May 2017. "Today, at the Google I/O keynote, the Android team announced first-class support for Kotlin."
18. **[^](#cite_ref-interview_18-0)** ["JVM Languages Report extended interview with Kotlin creator Andrey Breslav"](https://zeroturnaround.com/rebellabs/jvm-languages-report-extended-interview-with-kotlin-creator-andrey-breslav/). *Zeroturnaround.com*. 22 April 2013. [Archived](https://web.archive.org/web/20190115182139/https://zeroturnaround.com/rebellabs/jvm-languages-report-extended-interview-with-kotlin-creator-andrey-breslav/) from the original on 15 January 2019. Retrieved 2 February 2014.
19. **[^](#cite_ref-19)** ["Semicolons"](https://confluence.jetbrains.com/display/Kotlin/Grammar#Grammar-Semicolons). *jetbrains.com*. [Archived](https://web.archive.org/web/20151223142747/https://confluence.jetbrains.com/display/Kotlin/Grammar#Grammar-Semicolons) from the original on 23 December 2015. Retrieved 8 February 2014.
20. **[^](#cite_ref-20)** ["Types are moving to the right"](https://elizarov.medium.com/types-are-moving-to-the-right-22c0ef31dd4a#:~:text=Woot!%20That%E2%80%99s%20nice%20and%20aligns,%20pleasure%20for%20our%20eyes%20to%20see.). *Medium*. 16 July 2020. [Archived](https://web.archive.org/web/20230522024640/https://elizarov.medium.com/types-are-moving-to-the-right-22c0ef31dd4a#:~:text=Woot!%20That%E2%80%99s%20nice%20and%20aligns,%20pleasure%20for%20our%20eyes%20to%20see.) from the original on 22 May 2023. Retrieved 6 November 2021.
21. **[^](#cite_ref-21)** ["Roman Elizarov is the new Project Lead for Kotlin"](https://blog.jetbrains.com/kotlin/2020/11/roman-elizarov-is-the-new-project-lead-for-kotlin/). *The Kotlin Blog*. JetBrains. 19 November 2020. [Archived](https://web.archive.org/web/20220120205530/https://blog.jetbrains.com/kotlin/2020/11/roman-elizarov-is-the-new-project-lead-for-kotlin/) from the original on 20 January 2022. Retrieved 7 November 2021.
22. **[^](#cite_ref-22)** ["functions"](https://confluence.jetbrains.com/display/Kotlin/Functions). *jetbrains.com*. [Archived](https://web.archive.org/web/20151123112725/https://confluence.jetbrains.com/display/Kotlin/Functions) from the original on 23 November 2015. Retrieved 8 February 2014.
23. **[^](#cite_ref-23)** ["What's New in Kotlin 1.3 - Kotlin Programming Language"](https://kotlinlang.org/docs/reference/whatsnew13.html). *Kotlin*. [Archived](https://web.archive.org/web/20230822164600/https://kotlinlang.org/docs/reference/whatsnew13.html) from the original on 22 August 2023. Retrieved 4 April 2020.
24. **[^](#cite_ref-24)** ["Design by Contract (DbC) design considerations"](https://discuss.kotlinlang.org/t/design-by-contract-dbc-design-considerations/1321). *Kotlin Discussions*. 16 August 2012. [Archived](https://web.archive.org/web/20230405081654/https://discuss.kotlinlang.org/t/design-by-contract-dbc-design-considerations/1321) from the original on 5 April 2023. Retrieved 4 April 2020. "Implement the full semantics of Eiffel DbC and improve upon it."
25. **[^](#cite_ref-25)** ["Kotlin for JavaScript | Kotlin"](https://kotlinlang.org/docs/js-overview.html#use-cases-for-kotlin-js). *Kotlin Help*. 21 January 2021. [Archived](https://web.archive.org/web/20230714143003/https://kotlinlang.org/docs/js-overview.html#use-cases-for-kotlin-js) from the original on 14 July 2023. Retrieved 19 March 2021.
26. **[^](#cite_ref-26)** ["Kotlin Examples: Learn Kotlin Programming By Example"](https://web.archive.org/web/20211118223052/https://play.kotlinlang.org/byExample/01_introduction/01_Hello%20world). Archived from [the original](https://play.kotlinlang.org/byExample/01_introduction/01_Hello%20world) on 18 November 2021. Retrieved 13 April 2019.
27. **[^](#cite_ref-27)** ["Scope functions | Kotlin"](https://kotlinlang.org/docs/scope-functions.html). *Kotlin Help*. Retrieved 10 August 2024.
28. **[^](#cite_ref-28)** ["Higher-Order Functions and Lambdas"](https://kotlinlang.org/docs/reference/lambdas.html). *Kotlin*. Jetbrains. [Archived](https://web.archive.org/web/20210122222128/https://kotlinlang.org/docs/reference/lambdas.html) from the original on 22 January 2021. Retrieved 19 January 2018.
29. **[^](#cite_ref-29)** ["Kotlin and Android"](https://developer.android.com/kotlin). *Android Developers*. [Archived](https://web.archive.org/web/20231004062949/https://developer.android.com/kotlin) from the original on 4 October 2023. Retrieved 19 June 2017.
30. **[^](#cite_ref-30)** ["Using Maven – Kotlin Programming Language"](https://kotlinlang.org/docs/reference/using-maven.html). *kotlinlang.org*. [Archived](https://web.archive.org/web/20161103233907/http://kotlinlang.org/docs/reference/using-maven.html) from the original on 3 November 2016. Retrieved 9 May 2017.
31. **[^](#cite_ref-31)** ["Using Ant – Kotlin Programming Language"](https://kotlinlang.org/docs/reference/using-ant.html). *kotlinlang.org*. [Archived](https://web.archive.org/web/20161103233835/http://kotlinlang.org/docs/reference/using-ant.html) from the original on 3 November 2016. Retrieved 9 May 2017.
32. **[^](#cite_ref-32)** ["Using Gradle – Kotlin Programming Language"](https://kotlinlang.org/docs/reference/using-gradle.html). *kotlinlang.org*. [Archived](https://web.archive.org/web/20161109185109/http://kotlinlang.org/docs/reference/using-gradle.html) from the original on 9 November 2016. Retrieved 9 May 2017.
33. **[^](#cite_ref-33)** ["Getting Started with Eclipse Neon – Kotlin Programming Language"](https://kotlinlang.org/docs/tutorials/getting-started-eclipse.html). *Kotlinlang.org*. 10 November 2016. [Archived](https://web.archive.org/web/20230518022923/https://kotlinlang.org/docs/tutorials/getting-started-eclipse.html) from the original on 18 May 2023. Retrieved 11 April 2017.
34. **[^](#cite_ref-34)** ["JetBrains/kotlin-eclipse: Kotlin Plugin for Eclipse"](https://github.com/JetBrains/kotlin-eclipse). GitHub. [Archived](https://web.archive.org/web/20160216150931/https://github.com/JetBrains/kotlin-eclipse) from the original on 16 February 2016. Retrieved 11 April 2017.
35. **[^](#cite_ref-35)** ["Kotlin Plugin for JetBrains IDEs"](https://plugins.jetbrains.com/plugin/6954-kotlin). *Plugins.jetbrains.com*. 31 March 2017. Retrieved 16 October 2025.`{{cite web}}`: CS1 maint: url-status ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_url-status))
36. **[^](#cite_ref-36)** ["What's New in IntelliJ IDEA 2017.1"](https://www.jetbrains.com/idea/whatsnew/). *Jetbrains.com*. [Archived](https://web.archive.org/web/20231003212723/https://www.jetbrains.com/idea/whatsnew/) from the original on 3 October 2023. Retrieved 11 April 2017.
37. **[^](#cite_ref-37)** ["Gradle"](https://kotlinlang.org/docs/gradle.html). *Kotlin Help*. [Archived](https://web.archive.org/web/20240408064338/https://kotlinlang.org/docs/gradle.html) from the original on 8 April 2024. Retrieved 8 April 2024.
38. **[^](#cite_ref-38)** ["Kotlin Multiplatform Overview"](https://developer.android.com/kotlin/multiplatform). *Android Developers*. Retrieved 14 June 2025.
39. **[^](#cite_ref-39)** ["Kotlin Multiplatform – Build Cross-Platform Apps"](https://www.jetbrains.com/kotlin-multiplatform/). *JetBrains*. Retrieved 14 June 2025.
40. **[^](#cite_ref-40)** ["Compose Multiplatform – Beautiful UIs Everywhere"](https://www.jetbrains.com/compose-multiplatform/). *JetBrains*. Retrieved 14 June 2025.
41. **[^](#cite_ref-41)** ["What's new in Compose Multiplatform 1.8.1 | Kotlin Multiplatform"](https://www.jetbrains.com/help/kotlin-multiplatform-dev/whats-new-compose-180.html). *Kotlin Multiplatform Help*. Retrieved 14 June 2025.
42. **[^](#cite_ref-42)** ["Compatibility and versions | Kotlin Multiplatform"](https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-compatibility-and-versioning.html). *Kotlin Multiplatform Help*. Retrieved 14 June 2025.
43. **[^](#cite_ref-43)** Panjuta, Denis; Nwokike, Loveth (12 December 2023), ["Basic Jetpack Compose Elements"](https://doi.org/10.1201/9781032622538-9), *Tiny Android Projects Using Kotlin*, Boca Raton: Chapman and Hall/CRC, pp. 233–257, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-032-62253-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-032-62253-8), retrieved 14 June 2025`{{citation}}`: CS1 maint: work parameter with ISBN ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_work_parameter_with_ISBN))
44. **[^](#cite_ref-44)** ["The state of the Octoverse"](https://web.archive.org/web/20190322190823/https://octoverse.github.com/projects). Archived from [the original](https://octoverse.github.com/projects) on 22 March 2019. Retrieved 24 July 2019.
45. **[^](#cite_ref-45)** ["Stack Overflow Developer Survey 2020"](https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted). [Archived](https://web.archive.org/web/20200604090141/https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted) from the original on 4 June 2020. Retrieved 28 May 2020.
46. **[^](#cite_ref-46)** ["Kotlin wins Breakout Project of the Year award at OSCON '19"](https://blog.jetbrains.com/kotlin/2019/07/kotlin-wins-breakout-project-of-the-year-award-at-oscon-19/). 18 July 2019. [Archived](https://web.archive.org/web/20220517113227/https://blog.jetbrains.com/kotlin/2019/07/kotlin-wins-breakout-project-of-the-year-award-at-oscon-19/) from the original on 17 May 2022. Retrieved 24 July 2019.
47. **[^](#cite_ref-47)** ["Kotlin Case Studies"](https://kotlinlang.org/case-studies/). *Kotlin*. Retrieved 24 March 2026.
48. **[^](#cite_ref-48)** Lardinois, Frederic (17 May 2017). ["Google makes Kotlin a first-class language for writing Android apps"](https://techcrunch.com/2017/05/17/google-makes-kotlin-a-first-class-language-for-writing-android-apps/). *techcrunch.com*. [Archived](https://web.archive.org/web/20170522065631/https://techcrunch.com/2017/05/17/google-makes-kotlin-a-first-class-language-for-writing-android-apps/) from the original on 22 May 2017. Retrieved 28 June 2018.
49. **[^](#cite_ref-49)** ["Kotlin programming language: How Google is using it to squash the code bugs that cause most crashes"](https://www.zdnet.com/article/google-were-using-kotlin-programming-language-to-squash-the-bugs-that-cause-most-crashes/). *ZDNet*. [Archived](https://web.archive.org/web/20230406045458/https://www.zdnet.com/article/google-were-using-kotlin-programming-language-to-squash-the-bugs-that-cause-most-crashes/) from the original on 6 April 2023. Retrieved 6 December 2020.
50. **[^](#cite_ref-50)** [*ktorio/ktor*](https://github.com/ktorio/ktor), ktor.io, 16 June 2025, retrieved 16 June 2025
51. **[^](#cite_ref-51)** ["Welcome | Ktor"](https://ktor.io/docs/welcome.html). *Ktor Help*. Retrieved 15 September 2025.
52. **[^](#cite_ref-52)** ["Introducing Kotlin support in Spring Framework 5.0"](https://spring.io/blog/2017/01/04/introducing-kotlin-support-in-spring-framework-5-0). *Spring*. Pivotal. 4 January 2017. [Archived](https://web.archive.org/web/20230823031409/https://spring.io/blog/2017/01/04/introducing-kotlin-support-in-spring-framework-5-0/) from the original on 23 August 2023. Retrieved 29 September 2020.
53. **[^](#cite_ref-53)** ["The State of Kotlin Support in Spring"](https://blog.jetbrains.com/kotlin/2020/08/the-state-of-kotlin-support-in-spring/). *JetBrains*. 14 August 2020. [Archived](https://web.archive.org/web/20230607090327/https://blog.jetbrains.com/kotlin/2020/08/the-state-of-kotlin-support-in-spring/) from the original on 7 June 2023. Retrieved 6 December 2020.
54. **[^](#cite_ref-54)** ["Kotlin Programming - The State of Developer Ecosystem 2020"](https://www.jetbrains.com/lp/devecosystem-2020/kotlin/). *JetBrains*. [Archived](https://web.archive.org/web/20230405081654/https://www.jetbrains.com/lp/devecosystem-2020/kotlin/) from the original on 5 April 2023. Retrieved 29 September 2020.