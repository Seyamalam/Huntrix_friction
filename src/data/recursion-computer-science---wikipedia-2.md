# Recursion (computer science) - Wikipedia

Source: https://en.wikipedia.org/wiki/Recursion_(computer_science)

---

Use of functions that call themselves

[![](//upload.wikimedia.org/wikipedia/commons/thumb/f/f7/RecursiveTree.JPG/330px-RecursiveTree.JPG)](https://en.wikipedia.org/wiki/File:RecursiveTree.JPG)

Tree fractal created using the [Logo programming language](https://en.wikipedia.org/wiki/Logo_(programming_language)) and relying heavily on recursion. Each branch can be seen as a smaller version of a tree.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Sierpinski_triangle_turtle.gif/250px-Sierpinski_triangle_turtle.gif)](https://en.wikipedia.org/wiki/File:Sierpinski_triangle_turtle.gif)

Recursive drawing of a [Sierpiński Triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle) through [turtle graphics](https://en.wikipedia.org/wiki/Turtle_graphics)

In [computer science](https://en.wikipedia.org/wiki/Computer_science), **recursion** is a method of solving a [computational problem](https://en.wikipedia.org/wiki/Computational_problem) where the solution depends on solutions to smaller instances of the same problem. Recursion solves such [recursive problems](https://en.wikipedia.org/wiki/Recursion) by using [functions](https://en.wikipedia.org/wiki/Function_(computer_science)) that call themselves from within their own code. The approach can be applied to many types of problems, and recursion is one of the central ideas of computer science.

> The power of recursion evidently lies in the possibility of defining an [infinite set](https://en.wikipedia.org/wiki/Infinite_set) of objects by a finite [statement](https://en.wikipedia.org/wiki/Statement_(computer_science)). In the same manner, an infinite number of computations can be described by a finite recursive program, even if this program contains no explicit repetitions.

Most computer [programming languages](https://en.wikipedia.org/wiki/Programming_language) support recursion by allowing a function to call itself from within its own code. Some [functional programming](https://en.wikipedia.org/wiki/Functional_programming) languages (for instance, [Clojure](https://en.wikipedia.org/wiki/Clojure)) do not define any built-in looping constructs, and instead rely solely on recursion. It is proved in [computability theory](https://en.wikipedia.org/wiki/Computability_theory) that these recursion-only languages are [Turing complete](https://en.wikipedia.org/wiki/Turing_complete); this means that they are as powerful (they can be used to solve the same problems) as [imperative languages](https://en.wikipedia.org/wiki/Imperative_language) based on control structures such as `while` and `for`.

Repeatedly calling a function from within itself may cause the [call stack](https://en.wikipedia.org/wiki/Call_stack) to have a size equal to the sum of the input sizes of all involved calls. It follows that, for problems that can be solved easily by iteration, recursion is generally less [efficient](https://en.wikipedia.org/wiki/Algorithmic_efficiency), and, for certain problems, algorithmic or compiler-optimization techniques such as [tail call](https://en.wikipedia.org/wiki/Tail_call) optimization may improve computational performance over a naive recursive implementation.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*]

The development of [recursion](https://en.wikipedia.org/wiki/Recursion_(mathematics)) in computer science grew out of [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic) and later became an essential part of [programming language](https://en.wikipedia.org/wiki/Programming_language) design. The early work done by [Church](https://en.wikipedia.org/wiki/Alonzo_Church), [Gödel](https://en.wikipedia.org/wiki/Kurt_G%C3%B6del), [Kleene](https://en.wikipedia.org/wiki/Stephen_Cole_Kleene), and [Turing](https://en.wikipedia.org/wiki/Alan_Turing) on recursive function and [computability](https://en.wikipedia.org/wiki/Computability) laid the groundwork that made recursion possible in programming languages. Recursion has been used by mathematicians for a long time, but it only became a practical tool for programming in the late 1950s and early 1960s. Key figures such as [John McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)) and the [ALGOL 60](https://en.wikipedia.org/wiki/ALGOL_60) design committee contributed to introducing recursion into programming.

John McCarthy took the first steps by creating the programming language [LISP](https://en.wikipedia.org/wiki/Lisp_(programming_language)) in 1960. In his paper *Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I*, McCarthy showed that recursion could be core in a programming language that works with symbols by processing them step by step. In LISP, recursion could be used in functions using simple rules, and there was also a way to evaluate them in the language. This demonstrated that recursion was a practical way to write programs and that it also describes the process of computation. Therefore, LISP became one of the first programming languages to use recursion as a main feature, and later on also influenced other languages that followed.

During that time, recursion was also added to [ALGOL 60](https://en.wikipedia.org/wiki/ALGOL_60). The *Report on the Algorithmic Language ALGOL 60*, which was published in 1960, was the outcome of an international attempt at designing a standard language. Allowing procedures to call themselves was one of the new important features of the language. Before that, only [loops](https://en.wikipedia.org/wiki/Loop_(computing)) were allowed to be used by programmers, so it was a significant change. Recursion allowed programmers to describe algorithms in a more natural and flexible way.

## Structure of a recursive function

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=2)]

The definition of a recursive [function](https://en.wikipedia.org/wiki/Function_(computer_programming)) is typically divided into two parts: one or more base case(s) and one or more recursive case(s). This structure mirrors the logic of [mathematical induction](https://en.wikipedia.org/wiki/Mathematical_induction), which is a proof technique where proving the base case(s) and the inductive step ensures that a given theorem holds for all valid inputs.

The base case specifies input values for which the function can provide a result directly, without any further recursion. These are typically the simplest or smallest possible inputs (which can be solved trivially), allowing a computation to terminate. Base cases are essential because they prevent infinite regress. In other words, they define a stopping condition that terminates the recursion.

An example is computing the [factorial](https://en.wikipedia.org/wiki/Factorial) of an integer n, which is the product of all integers from 0 to n. For this problem, the definition 0! = 1 is a base case. Without it, the recursion may continue indefinitely, leading to non-termination or even [stack overflow](https://en.wikipedia.org/wiki/Stack_overflow) errors in actual implementations.

Designing a correct base case is crucial for both theoretical and practical reasons. Some problems have a natural base case (e.g., the empty list is a base case in some recursive list-processing functions), while others require an additional parameter to provide a stopping criterion (e.g., using a depth counter in recursive [tree traversal](https://en.wikipedia.org/wiki/Tree_traversal)).

In recursive [computer programming](https://en.wikipedia.org/wiki/Computer_programming), omitting the base case or defining it incorrectly may result in unintended infinite recursion. In a study, researchers showed that many students struggle to identify appropriate base cases.

The recursive case describes how to break down a problem into smaller sub-problems of the same form. Each recursive step transforms the input so that it approaches a base case, ensuring progress toward termination. If the reduction step fails to progress toward a base case, the algorithm can get trapped in an [infinite loop](https://en.wikipedia.org/wiki/Infinite_loop).

In the [factorial](https://en.wikipedia.org/wiki/Factorial) example, the recursive case is defined as:

```
n! = n * (n-1)!, n > 0

```

Here, each invocation of the function decreases the input n by 1. Thus, it ensures that the recursion eventually reaches the base case of n = 0.

The recursive case is analogous to the inductive step in a proof by [induction](https://en.wikipedia.org/wiki/Mathematical_induction): it assumes that the function works for a smaller instance and then extends this assumption to the current input. Recursive definitions and algorithms thus closely parallel inductive arguments in [mathematics](https://en.wikipedia.org/wiki/Mathematics), and their correctness often relies on similar reasoning techniques.

There are several practical applications of recursion that follow the base case and recursive case structure. These are widely used to solve complex problems in computer science.

* [Tree traversals](https://en.wikipedia.org/wiki/Tree_traversal), such as [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search), use a recursive case to process each subtree (the recursive case), eventually stopping at leaf nodes (the base case).
* [Merge sort](https://en.wikipedia.org/wiki/Merge_sort) is a [sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm) that recursively sorts and merges divided subarrays (the recursive case) until each subarray consists of one element (the base case).
* [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence) is defined by summing the two previous numbers in the sequence (the recursive case), stopping when n = 0 or n = 1 (the base cases).
* [Binary search](https://en.wikipedia.org/wiki/Binary_search) repeatedly divides the search interval in half (recursive case) until the target is found or the interval is empty (base cases).

## Recursive data types

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=6)]

Many [computer programs](https://en.wikipedia.org/wiki/Computer_program) must process or generate an arbitrarily large quantity of [data](https://en.wikipedia.org/wiki/Data). Recursion is a technique for representing data whose exact size is unknown to the [programmer](https://en.wikipedia.org/wiki/Programmer): the programmer can specify this data with a [self-referential](https://en.wikipedia.org/wiki/Self-referential) definition. There are two types of self-referential definitions: inductive and [coinductive](https://en.wikipedia.org/wiki/Coinductive) definitions.

### Inductively defined data

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=7)]

An inductively defined recursive data definition is one that specifies how to construct instances of the data. For example, [linked lists](https://en.wikipedia.org/wiki/Linked_list) can be defined inductively (here, using [Haskell](https://en.wikipedia.org/wiki/Haskell) syntax):

```
data ListOfStrings = EmptyList | Cons String ListOfStrings

```

The code above specifies a list of strings to be either empty, or a structure that contains a string and a list of strings. The self-reference in the definition permits the construction of lists of any (finite) number of strings.

Another example of inductive [definition](https://en.wikipedia.org/wiki/Definition) is the [natural numbers](https://en.wikipedia.org/wiki/Natural_numbers) (or positive [integers](https://en.wikipedia.org/wiki/Integers)):

```
A natural number is either 1 or n+1, where n is a natural number.
```

Similarly recursive [definitions](https://en.wikipedia.org/wiki/Definition) are often used to model the structure of [expressions](https://en.wikipedia.org/wiki/Expression_(programming)) and [statements](https://en.wikipedia.org/wiki/Statement_(programming)) in programming languages. Language designers often express grammars in a syntax such as [Backus–Naur form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form); here is such a grammar, for a simple language of arithmetic expressions with multiplication and addition:

```
 <expr> ::= <number>
          | (<expr> * <expr>)
          | (<expr> + <expr>)

```

This says that an expression is either a number, a product of two expressions, or a sum of two expressions. By recursively referring to expressions in the second and third lines, the grammar permits arbitrarily complicated arithmetic expressions such as `(5 * ((3 * 6) + 8))`, with more than one product or sum operation in a single expression.

### Coinductively defined data and corecursion

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=8)]

A coinductive data definition is one that specifies the operations that may be performed on a piece of data; typically, self-referential coinductive definitions are used for data structures of infinite size.

A coinductive definition of infinite [streams](https://en.wikipedia.org/wiki/Stream_(computer_science)) of strings, given informally, might look like this:

```
A stream of strings is an object s such that:
 head(s) is a string, and
 tail(s) is a stream of strings.

```

This is very similar to an inductive definition of lists of strings; the difference is that this definition specifies how to access the contents of the data structure—namely, via the [accessor](https://en.wikipedia.org/wiki/Accessor) functions `head` and `tail`—and what those contents may be, whereas the inductive definition specifies how to create the structure and what it may be created from.

Corecursion is related to coinduction, and can be used to compute particular instances of (possibly) infinite objects. As a programming technique, it is used most often in the context of [lazy](https://en.wikipedia.org/wiki/Lazy_evaluation) programming languages, and can be preferable to recursion when the desired size or precision of a program's output is unknown. In such cases the program requires both a definition for an infinitely large (or infinitely precise) result, and a mechanism for taking a finite portion of that result. The problem of computing the first n [prime numbers](https://en.wikipedia.org/wiki/Prime_numbers) is one that can be solved with a corecursive program (e.g. [here](https://en.wikipedia.org/wiki/Fold_(higher-order_function)#Examples)).

### Single recursion and multiple recursion

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=10)]

Recursion that contains only a single self-reference is known as **single recursion**, while recursion that contains multiple self-references is known as **multiple recursion**. Standard examples of single recursion include list traversal, such as in a linear search, or computing the factorial function, while standard examples of multiple recursion include [tree traversal](https://en.wikipedia.org/wiki/Tree_traversal), such as in a depth-first search.

Single recursion is often much more efficient than multiple recursion, and can generally be replaced by an iterative computation, running in linear time and requiring constant space. Multiple recursion, by contrast, may require exponential time and space, and is more fundamentally recursive, not being able to be replaced by iteration without an explicit stack.

Multiple recursion can sometimes be converted to single recursion (and, if desired, thence to iteration). For example, while computing the Fibonacci sequence naively entails multiple iteration, as each value requires two previous values, it can be computed by single recursion by passing two successive values as parameters.

Most basic examples of recursion, and most of the examples presented here, demonstrate ***direct* recursion**, in which a function calls itself. *Indirect* recursion occurs when a function is called not by itself but by another function that it called (either directly or indirectly). For example, if *f* calls *f,* that is direct recursion, but if *f* calls *g* which calls *f,* then that is indirect recursion of *f.* Chains of three or more functions are possible; for example, function 1 calls function 2, function 2 calls function 3, and function 3 calls function 1 again.

Indirect recursion is also called [mutual recursion](https://en.wikipedia.org/wiki/Mutual_recursion), which is a more symmetric term, though this is simply a difference of emphasis, not a different notion. That is, if *f* calls *g* and then *g* calls *f,* which in turn calls *g* again, from the point of view of *f* alone, *f* is indirectly recursing, while from the point of view of *g* alone, it is indirectly recursing, while from the point of view of both, *f* and *g* are mutually recursing on each other. Similarly a set of three or more functions that call each other can be called a set of mutually recursive functions.

### Anonymous recursion

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=12)]

Recursion is usually done by explicitly calling a function by name. However, recursion can also be done via implicitly calling a function based on the current context, which is particularly useful for [anonymous functions](https://en.wikipedia.org/wiki/Anonymous_function), and is known as [anonymous recursion](https://en.wikipedia.org/wiki/Anonymous_recursion).

### Structural versus generative recursion

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=13)]

Some authors classify recursion as either "structural" or "generative". The distinction is related to where a recursive procedure gets the data that it works on, and how it processes that data:

> [Functions that consume structured data] typically decompose their arguments into their immediate structural components and then process those components. If one of the immediate components belongs to the same class of data as the input, the function is recursive. For that reason, we refer to these functions as (STRUCTURALLY) RECURSIVE FUNCTIONS.

Thus, the defining characteristic of a structurally recursive function is that the argument to each recursive call is the content of a field of the original input. Structural recursion includes nearly all tree traversals, including XML processing, binary tree creation and search, etc. By considering the algebraic structure of the natural numbers (that is, a natural number is either zero or the successor of a natural number), functions such as factorial may also be regarded as structural recursion.

**Generative recursion** is the alternative:

> Many well-known recursive algorithms generate an entirely new piece of data from the given data and recur on it. [*HtDP* (*How to Design Programs*)](https://en.wikipedia.org/wiki/How_to_Design_Programs) refers to this kind as generative recursion. Examples of generative recursion include: [gcd](https://en.wikipedia.org/wiki/Euclidean_algorithm), [quicksort](https://en.wikipedia.org/wiki/Quicksort), [binary search](https://en.wikipedia.org/wiki/Binary_search), [mergesort](https://en.wikipedia.org/wiki/Mergesort), [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method), [fractals](https://en.wikipedia.org/wiki/Fractal), and [adaptive integration](https://en.wikipedia.org/wiki/Adaptive_quadrature).

— Matthias Felleisen, *Advanced Functional Programming*, 2002

This distinction is important in [proving termination](https://en.wikipedia.org/wiki/Termination_analysis#Termination_proof) of a function.

* All structurally recursive functions on finite ([inductively defined](https://en.wikipedia.org/wiki/Recursive_data_type)) data structures can easily be shown to terminate, via [structural induction](https://en.wikipedia.org/wiki/Structural_induction): intuitively, each recursive call receives a smaller piece of input data, until a base case is reached.
* Generatively recursive functions, in contrast, do not necessarily feed smaller input to their recursive calls, so proof of their termination is not necessarily as simple, and avoiding [infinite loops](https://en.wikipedia.org/wiki/Infinite_loops) requires greater care. These generatively recursive functions can often be interpreted as corecursive functions – each step generates the new data, such as successive approximation in Newton's method – and terminating this corecursion requires that the data eventually satisfy some condition, which is not necessarily guaranteed.
* In terms of [loop variants](https://en.wikipedia.org/wiki/Loop_variant), structural recursion is when there is an obvious loop variant, namely size or complexity, which starts off finite and decreases at each recursive step.
* By contrast, generative recursion is when there is not such an obvious loop variant, and termination depends on a function, such as "error of approximation" that does not necessarily decrease to zero, and thus termination is not guaranteed without further analysis.

## Implementation issues

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=14)]

In actual implementation, rather than a pure recursive function (single check for base case, otherwise recursive step), a number of modifications may be made, for purposes of clarity or efficiency. These include:

* Wrapper function (at top)
* Short-circuiting the base case, aka "Arm's-length recursion" (at bottom)
* Hybrid algorithm (at bottom) – switching to a different algorithm once data is small enough

On the basis of elegance, wrapper functions are generally approved, while short-circuiting the base case is frowned upon, particularly in academia. Hybrid algorithms are often used for efficiency, to reduce the overhead of recursion in small cases, and arm's-length recursion is a special case of this.

A [wrapper function](https://en.wikipedia.org/wiki/Wrapper_function) is a function that is directly called but does not recurse itself, instead calling a separate auxiliary function which actually does the recursion.

Wrapper functions can be used to validate parameters (so the recursive function can skip these), perform initialization (allocate memory, initialize variables), particularly for auxiliary variables such as "level of recursion" or partial computations for [memoization](https://en.wikipedia.org/wiki/Memoization), and handle exceptions and errors. In languages that support [nested functions](https://en.wikipedia.org/wiki/Nested_function), the auxiliary function can be nested inside the wrapper function and use a shared scope. In the absence of nested functions, auxiliary functions are instead a separate function, if possible private (as they are not called directly), and information is shared with the wrapper function by using [pass-by-reference](https://en.wikipedia.org/wiki/Pass-by-reference).

### Short-circuiting the base case

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=16)]

| Ordinary recursion | Short-circuit recursion |
| --- | --- |
| int fac1 ( int n ) { if ( n <= 0 ) { return 1 ; } else { return fac1 ( n - 1 ) * n ; } } | int fac2 ( int n ) { // assert(n >= 2); if ( n == 2 ) { return 2 ; } else { return fac2 ( n - 1 ) * n ; } } int fac2wrapper ( int n ) { if ( n <= 1 ) { return 1 ; } else { return fac2 ( n ); } } |

Short-circuiting the base case, also known as **arm's-length recursion**, consists of checking the base case *before* making a recursive call – i.e., checking if the next call will be the base case, instead of calling and then checking for the base case. Short-circuiting is particularly done for efficiency reasons, to avoid the overhead of a function call that immediately returns. Note that since the base case has already been checked for (immediately before the recursive step), it does not need to be checked for separately, but one does need to use a wrapper function for the case when the overall recursion starts with the base case itself. For example, in the factorial function, properly the base case is 0! = 1, while immediately returning 1 for 1! is a short circuit, and may miss 0; this can be mitigated by a wrapper function. The box shows [C](https://en.wikipedia.org/wiki/C_(programming_language)) code to shortcut factorial cases 0 and 1.

Short-circuiting is primarily a concern when many base cases are encountered, such as Null pointers in a tree, which can be linear in the number of function calls, hence significant savings for *O*(*n*) algorithms; this is illustrated below for a depth-first search. Short-circuiting on a tree corresponds to considering a leaf (non-empty node with no children) as the base case, rather than considering an empty node as the base case. If there is only a single base case, such as in computing the factorial, short-circuiting provides only *O*(1) savings.

Conceptually, short-circuiting can be considered to either have the same base case and recursive step, checking the base case only before the recursion, or it can be considered to have a different base case (one step removed from standard base case) and a more complex recursive step, namely "check valid then recurse", as in considering leaf nodes rather than Null nodes as base cases in a tree. Because short-circuiting has a more complicated flow, compared with the clear separation of base case and recursive step in standard recursion, it is often considered poor style, particularly in academia.

A basic example of short-circuiting is given in [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search) (DFS) of a binary tree; see [binary trees](#Binary_trees) section for standard recursive discussion.

The standard recursive algorithm for a DFS is:

* base case: If current node is Null, return false
* recursive step: otherwise, check value of current node, return true if match, otherwise recurse on children

In short-circuiting, this is instead:

* check value of current node, return true if match,
* otherwise, on children, if not Null, then recurse.

In terms of the standard steps, this moves the base case check *before* the recursive step. Alternatively, these can be considered a different form of base case and recursive step, respectively. Note that this requires a wrapper function to handle the case when the tree itself is empty (root node is Null).

In the case of a [perfect binary tree](https://en.wikipedia.org/wiki/Perfect_binary_tree) of height *h,* there are 2*h*+1−1 nodes and 2*h*+1 Null pointers as children (2 for each of the 2*h* leaves), so short-circuiting cuts the number of function calls in half in the worst case.

In C, the standard recursive algorithm may be implemented as:

```
bool tree_contains(struct BinaryTree* node, int i) {
     if (!node) {
         return false; // base case
     } else if (node->data == i) {
         return true;
     } else {
         return tree_contains(node->left, i)
             || tree_contains(node->right, i);
     }
}

```

The short-circuited algorithm may be implemented as:

```
#include <assert.h>

// Wrapper function to handle empty tree
bool tree_contains(struct BinaryTree* node, int i) {
    if (!node) {
        return false; // empty tree
    } else {
        return tree_contains_aux(node, i); // call auxiliary function
    }
}

// Assumes node != NULL
bool tree_contains_aux(struct BinaryTree* node, int i) {
    assert(node);
    if (node->data == i) {
        return true; // found
    } else {
        // recurse
        return (node->left && tree_contains_aux(node->left, i))
            || (node->right && tree_contains_aux(node->right, i));
    }
}

```

Note the use of [short-circuit evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation) of the Boolean && (AND) operators, so that the recursive call is made only if the node is valid (non-Null). Note that while the first term in the AND is a pointer to a node, the second term is a Boolean, so the overall expression evaluates to a Boolean. This is a common idiom in recursive short-circuiting. This is in addition to the short-circuit evaluation of the Boolean || (OR) operator, to only check the right child if the left child fails. In fact, the entire [control flow](https://en.wikipedia.org/wiki/Control_flow) of these functions can be replaced with a single Boolean expression in a return statement, but legibility suffers at no benefit to efficiency.

Recursive algorithms are often inefficient for small data, due to the overhead of repeated function calls and returns. For this reason efficient implementations of recursive algorithms often start with the recursive algorithm, but then switch to a different algorithm when the input becomes small. An important example is [merge sort](https://en.wikipedia.org/wiki/Merge_sort), which is often implemented by switching to the non-recursive [insertion sort](https://en.wikipedia.org/wiki/Insertion_sort) when the data is sufficiently small, as in the [tiled merge sort](https://en.wikipedia.org/wiki/Tiled_merge_sort). Hybrid recursive algorithms can often be further refined, as in [Timsort](https://en.wikipedia.org/wiki/Timsort), derived from a hybrid merge sort/insertion sort.

## Recursion versus iteration

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=19)]

Recursion and [iteration](https://en.wikipedia.org/wiki/Iteration) are equally expressive: recursion can be replaced by iteration with an explicit [call stack](https://en.wikipedia.org/wiki/Call_stack), while iteration can be replaced with [tail recursion](https://en.wikipedia.org/wiki/Tail_recursion). Which approach is preferable depends on the problem under consideration and the language used. In [imperative programming](https://en.wikipedia.org/wiki/Imperative_programming), iteration is preferred, particularly for simple recursion, as it avoids the overhead of function calls and call stack management, but recursion is generally used for multiple recursion. By contrast, in [functional languages](https://en.wikipedia.org/wiki/Functional_languages) recursion is preferred, with tail recursion optimization leading to little overhead. Implementing an algorithm using iteration may not be easily achievable.

Compare the templates to compute xn defined by xn = f(n, xn-1) from xbase:

| function recursive(n) if n == base return x base else return f(n, recursive(n - 1)) | function iterative(n)
    x = x base for i = base + 1 to n
        x = f(i, x) return x |
| --- | --- |

For an imperative language the overhead is to define the function, and for a functional language the overhead is to define the accumulator variable x.

For example, a [factorial](https://en.wikipedia.org/wiki/Factorial) function may be implemented iteratively in [C](https://en.wikipedia.org/wiki/C_(programming_language)) by assigning to a loop index variable and accumulator variable, rather than by passing arguments and returning values by recursion:

```
unsigned int factorial(unsigned int n) {
    unsigned int product = 1; // empty product is 1
    while (n > 0) {
        product *= n;
        --n;
    }
    return product;
}

```

Most [programming languages](https://en.wikipedia.org/wiki/Programming_language) in use today allow the direct specification of recursive functions and procedures. When such a function is called, the program's [runtime environment](https://en.wikipedia.org/wiki/Runtime_environment) keeps track of the various [instances](https://en.wikipedia.org/wiki/Instance_(computer_science)) of the function (often using a [call stack](https://en.wikipedia.org/wiki/Call_stack), although other methods may be used). Every recursive function can be transformed into an iterative function by replacing recursive calls with [iterative control constructs](https://en.wikipedia.org/wiki/Control_flow) and simulating the call stack with a [stack](https://en.wikipedia.org/wiki/Stack_(data_structure)) explicitly managed by the program.

Conversely, all iterative functions and procedures that can be evaluated by a computer (see [Turing completeness](https://en.wikipedia.org/wiki/Turing_completeness)) can be expressed in terms of recursive functions; iterative control constructs such as [while loops](https://en.wikipedia.org/wiki/While_loop) and [for loops](https://en.wikipedia.org/wiki/For_loop) are routinely rewritten in recursive form in [functional languages](https://en.wikipedia.org/wiki/Functional_language). However, in practice this rewriting depends on [tail call elimination](https://en.wikipedia.org/wiki/Tail_call_elimination), which is not a feature of all languages. [C](https://en.wikipedia.org/wiki/C_(programming_language)), [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), and [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) are notable mainstream languages in which all function calls, including [tail calls](https://en.wikipedia.org/wiki/Tail_call), may cause stack allocation that would not occur with the use of looping constructs; in these languages, a working iterative program rewritten in recursive form may [overflow the call stack](https://en.wikipedia.org/wiki/Stack_overflow), although tail call elimination may be a feature that is not covered by a language's specification, and different implementations of the same language may differ in tail call elimination capabilities.

In languages (such as [C](https://en.wikipedia.org/wiki/C_(programming_language)) and [Java](https://en.wikipedia.org/wiki/Java_(programming_language))) that favor iterative looping constructs, there is usually significant time and space cost associated with recursive programs, due to the overhead required to manage the stack and the relative slowness of function calls; in [functional languages](https://en.wikipedia.org/wiki/Functional_languages), a function call (particularly a [tail call](https://en.wikipedia.org/wiki/Tail_call)) is typically a very fast operation, and the difference is usually less noticeable.

As a concrete example, the difference in performance between recursive and iterative implementations of the "factorial" example above depends highly on the [compiler](https://en.wikipedia.org/wiki/Compiler) used. In languages where looping constructs are preferred, the iterative version may be as much as several [orders of magnitude](https://en.wikipedia.org/wiki/Orders_of_magnitude) faster than the recursive one. In functional languages, the overall time difference of the two implementations may be negligible; in fact, the cost of multiplying the larger numbers first rather than the smaller numbers (which the iterative version given here happens to do) may overwhelm any time saved by choosing iteration.

In some programming languages, the maximum size of the [call stack](https://en.wikipedia.org/wiki/Call_stack) is much less than the space available in the [heap](https://en.wikipedia.org/wiki/Heap_(programming)), and recursive algorithms tend to require more stack space than iterative algorithms. Consequently, these languages sometimes place a limit on the depth of recursion to avoid [stack overflows](https://en.wikipedia.org/wiki/Stack_buffer_overflow); [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) is one such language. Note the caveat below regarding the special case of [tail recursion](https://en.wikipedia.org/wiki/Tail_recursion).

Because recursive algorithms can be subject to stack overflows, they may be vulnerable to [pathological](https://en.wikipedia.org/wiki/Pathological_(mathematics)) or [malicious](https://en.wikipedia.org/wiki/Malware) input. Some malware specifically targets a program's call stack and takes advantage of the stack's inherently recursive nature. Even in the absence of malware, a stack overflow caused by unbounded recursion can be fatal to the program, and [exception handling](https://en.wikipedia.org/wiki/Exception_handling) [logic](https://en.wikipedia.org/wiki/Logic) may not prevent the corresponding [process](https://en.wikipedia.org/wiki/Process_(computing)) from being [terminated](https://en.wikipedia.org/wiki/Process_state#Terminated).

### Multiply recursive problems

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=24)]

Multiply recursive problems are inherently recursive, because of prior state they need to track. One example is [tree traversal](https://en.wikipedia.org/wiki/Tree_traversal) as in [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search); though both recursive and iterative methods are used, they contrast with list traversal and linear search in a list, which is a singly recursive and thus naturally iterative method. Other examples include [divide-and-conquer algorithms](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) such as [Quicksort](https://en.wikipedia.org/wiki/Quicksort), and functions such as the [Ackermann function](https://en.wikipedia.org/wiki/Ackermann_function). All of these algorithms can be implemented iteratively with the help of an explicit [stack](https://en.wikipedia.org/wiki/Stack_(data_structure)), but the programmer effort involved in managing the stack, and the complexity of the resulting program, arguably outweigh any advantages of the iterative solution.

### Refactoring recursion

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=25)]

Recursive algorithms can be replaced with non-recursive counterparts. One method for replacing recursive algorithms is to simulate them using [heap memory](https://en.wikipedia.org/wiki/Memory_management) in place of [stack memory](https://en.wikipedia.org/wiki/Stack_memory). An alternative is to develop a replacement algorithm entirely based on non-recursive methods, which can be challenging. For example, recursive algorithms for [matching wildcards](https://en.wikipedia.org/wiki/Matching_wildcards), such as [Rich Salz](https://en.wikipedia.org/wiki/Rich_Salz)' [wildmat](https://en.wikipedia.org/wiki/Wildmat) algorithm, were once typical. Non-recursive algorithms for the same purpose, such as the [Krauss matching wildcards algorithm](https://en.wikipedia.org/wiki/Krauss_matching_wildcards_algorithm), have been developed to avoid the drawbacks of recursion and have improved only gradually based on techniques such as collecting [tests](https://en.wikipedia.org/wiki/Software_testing) and [profiling](https://en.wikipedia.org/wiki/Profiling_(computer_programming)) performance.

## Tail-recursive functions

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=26)]

Tail-recursive functions are functions in which all recursive calls are [tail calls](https://en.wikipedia.org/wiki/Tail_call) and hence do not build up any deferred operations. For example, the gcd function (shown again below) is tail-recursive. In contrast, the factorial function (also below) is **not** tail-recursive; because its recursive call is not in tail position, it builds up deferred multiplication operations that must be performed after the final recursive call completes. With a [compiler](https://en.wikipedia.org/wiki/Compiler) or [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing)) that treats tail-recursive calls as [jumps](https://en.wikipedia.org/wiki/Goto) rather than function calls, a tail-recursive function such as gcd will execute using constant space. Thus the program is essentially iterative, equivalent to using imperative language control structures like the "for" and "while" loops.

| Tail recursion : | Augmenting recursion: |
| --- | --- |
| /** * @brief computes GCD using Euclidean algorithm * @param x an int * @param y an int, such that x >= y >= 0 * @returns the GCD of x and y */ int gcd ( int x , int y ) { if ( y == 0 ) { return x ; } else { return gcd ( y , x % y ); } } | /** * @brief computes the factorial of a non-negative integer * @param n an int * @returns the factorial of n */ unsigned int factorial ( unsigned int n ) { if ( n == 0 ) { return 1 ; } else { return n * factorial ( n - 1 ); } } |

The significance of tail recursion is that when making a tail-recursive call (or any tail call), the caller's return position need not be saved on the [call stack](https://en.wikipedia.org/wiki/Call_stack); when the recursive call returns, it will branch directly on the previously saved return position. Therefore, in languages that recognize this property of tail calls, tail recursion saves both space and time.

Consider these two functions:

```
#include <stdio.h>

void recursiveFunction(int num) {
    printf("%d\n", num);
    if (num < 4) {
        recursiveFunction(num + 1);
    }
}

```

[![](//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Recursive1.svg/500px-Recursive1.svg.png)](https://en.wikipedia.org/wiki/File:Recursive1.svg)

```
#include <stdio.h>

void recursiveFunction(int num) {
    if (num < 4) {
        recursiveFunction(num + 1);
    }
    printf("%d\n", num);
}

```

[![](//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Recursive2.svg/500px-Recursive2.svg.png)](https://en.wikipedia.org/wiki/File:Recursive2.svg)

The output of function 2 is that of function 1 with the lines swapped.

In the case of a function calling itself only once, instructions placed before the recursive call are executed once per recursion before any of the instructions placed after the recursive call. The latter are executed repeatedly after the maximum recursion has been reached.

Also note that the *order* of the print statements is reversed, which is due to the way the functions and statements are stored on the [call stack](https://en.wikipedia.org/wiki/Call_stack).

## Recursive procedures

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=30)]

A classic example of a recursive procedure is the function used to calculate the [factorial](https://en.wikipedia.org/wiki/Factorial) of a [natural number](https://en.wikipedia.org/wiki/Natural_number):

:   fact
    ⁡
    (
    n
    )
    =


    {



    1



    if 
    n
    =
    0


    n
    ⋅
    fact
    ⁡
    (
    n
    −
    1
    )



    if 
    n
    >
    0

    {\displaystyle \operatorname {fact} (n)={\begin{cases}1&{\mbox{if }}n=0\\n\cdot \operatorname {fact} (n-1)&{\mbox{if }}n>0\\\end{cases}}}
    ![{\displaystyle \operatorname {fact} (n)={\begin{cases}1&{\mbox{if }}n=0\\n\cdot \operatorname {fact} (n-1)&{\mbox{if }}n>0\\\end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fbc0a05bb5402570afdac251df1661194639d397)

| Pseudocode (recursive): |
| --- |
| function factorial is: input : integer n such that n >= 0 output : [ n × ( n -1) × ( n -2) × ... × 1] 1. if n is 0, return 1
    2. otherwise, return [ n × factorial( n -1) ] end factorial |

The function can also be written as a [recurrence relation](https://en.wikipedia.org/wiki/Recurrence_relation):

:   b

    n
    =
    n

    b

    n
    −
    1
    {\displaystyle b\_{n}=nb\_{n-1}}
    ![{\displaystyle b_{n}=nb_{n-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2e489a1211cc945f05a486d09506fdb827febc23)
:   b

    0
    =
    1
    {\displaystyle b\_{0}=1}
    ![{\displaystyle b_{0}=1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6e891f2e26ca623a2f9bbd0bfef87a4dfac0a20f)

This evaluation of the recurrence relation demonstrates the computation that would be performed in evaluating the pseudocode above:

| Computing the recurrence relation for n = 4: |
| --- |
| b 4 = 4 × b 3 = 4 × (3 × b 2 )
             = 4 × (3 × (2 × b 1 ))
             = 4 × (3 × (2 × (1 × b 0 )))
             = 4 × (3 × (2 × (1 × 1)))
             = 4 × (3 × (2 × 1))
             = 4 × (3 × 2)
             = 4 × 6
             = 24 |

This factorial function can also be described without using recursion by making use of the typical looping constructs found in imperative programming languages:

| Pseudocode (iterative): |
| --- |
| function factorial is: input : integer n such that n >= 0 output : [ n × ( n -1) × ( n -2) × ... × 1] 1. create new variable called running_total with a value of 1 2. begin loop
          1. if n is 0, exit loop
          2. set running_total to ( running_total × n )
          3. decrement n 4. repeat loop 3. return running_total end factorial |

The imperative code above is equivalent to this mathematical definition using an accumulator variable t:

:   fact
    ⁡
    (
    n
    )


    =

    f
    a
    c

    t

    a
    c
    c
    ⁡
    (
    n
    ,
    1
    )



    f
    a
    c

    t

    a
    c
    c
    ⁡
    (
    n
    ,
    t
    )


    =


    {



    t



    if 
    n
    =
    0



    f
    a
    c

    t

    a
    c
    c
    ⁡
    (
    n
    −
    1
    ,
    n
    t
    )



    if 
    n
    >
    0

    {\displaystyle {\begin{aligned}\operatorname {fact} (n)&=\operatorname {fact\_{acc}} (n,1)\\\operatorname {fact\_{acc}} (n,t)&={\begin{cases}t&{\mbox{if }}n=0\\\operatorname {fact\_{acc}} (n-1,nt)&{\mbox{if }}n>0\\\end{cases}}\end{aligned}}}
    ![{\displaystyle {\begin{aligned}\operatorname {fact} (n)&=\operatorname {fact_{acc}} (n,1)\\\operatorname {fact_{acc}} (n,t)&={\begin{cases}t&{\mbox{if }}n=0\\\operatorname {fact_{acc}} (n-1,nt)&{\mbox{if }}n>0\\\end{cases}}\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5425ae0a78b654f37c41e3e6acfd0b2e59c61b5e)

The definition above translates straightforwardly to [functional programming languages](https://en.wikipedia.org/wiki/Functional_programming_language) such as [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)); this is an example of iteration implemented recursively.

### Greatest common divisor

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=32)]

The [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm), which computes the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of two integers, can be written recursively.

*Function definition*:

:   gcd
    (
    x
    ,
    y
    )
    =


    {



    x



    if 
    y
    =
    0


    gcd
    (
    y
    ,
    remainder
    ⁡
    (
    x
    ,
    y
    )
    )



    if 
    y
    >
    0

    {\displaystyle \gcd(x,y)={\begin{cases}x&{\mbox{if }}y=0\\\gcd(y,\operatorname {remainder} (x,y))&{\mbox{if }}y>0\\\end{cases}}}
    ![{\displaystyle \gcd(x,y)={\begin{cases}x&{\mbox{if }}y=0\\\gcd(y,\operatorname {remainder} (x,y))&{\mbox{if }}y>0\\\end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/66b3eae7c177b5a9738c42383c664048d8f239a0)

| Pseudocode (recursive): |
| --- |
| function gcd is: input : integer x , integer y such that x > 0 and y >= 0 1. if y is 0, return x 2. otherwise, return [ gcd( y , (remainder of x / y ) ) ] end gcd |

[Recurrence relation](https://en.wikipedia.org/wiki/Recurrence_relation) for greatest common divisor, where 



x
%
y
{\displaystyle x\%y}
![{\displaystyle x\%y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f1b133f8669e2ad9a88369d2e490d6efb60956dc) expresses the [remainder](https://en.wikipedia.org/wiki/Remainder) of 



x

/
y
{\displaystyle x/y}
![{\displaystyle x/y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c9f79732fa39115855a4cf9b64d2a63971a41046):

:   gcd
    (
    x
    ,
    y
    )
    =
    gcd
    (
    y
    ,
    x
    %
    y
    )
    {\displaystyle \gcd(x,y)=\gcd(y,x\%y)}
    ![{\displaystyle \gcd(x,y)=\gcd(y,x\%y)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c1fe0cd9431d08127f9c1110d4b973207e186ff1) if 



    y
    ≠
    0
    {\displaystyle y\neq 0}
    ![{\displaystyle y\neq 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fe09d44abefff1fcada712301b088a303591f9e5)
:   gcd
    (
    x
    ,
    0
    )
    =
    x
    {\displaystyle \gcd(x,0)=x}
    ![{\displaystyle \gcd(x,0)=x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/49261e66420afa094166cac921c0195727307eca)

| Computing the recurrence relation for x = 27 and y = 9: |
| --- |
| gcd(27, 9)   = gcd(9, 27% 9)
             = gcd(9, 0)
             = 9 |
| Computing the recurrence relation for x = 111 and y = 259: |
| gcd(111, 259)   = gcd(259, 111% 259)
                = gcd(259, 111)
                = gcd(111, 259% 111)
                = gcd(111, 37)
                = gcd(37, 111% 37)
                = gcd(37, 0)
                = 37 |

The recursive program above is [tail-recursive](https://en.wikipedia.org/wiki/Tail-recursive); it is equivalent to an iterative algorithm, and the computation shown above shows the steps of evaluation that would be performed by a language that eliminates tail calls. Below is a version of the same algorithm using explicit iteration, suitable for a language that does not eliminate tail calls. By maintaining its state entirely in the variables *x* and *y* and using a looping construct, the program avoids making recursive calls and growing the call stack.

| Pseudocode (iterative): |
| --- |
| function gcd is: input : integer x , integer y such that x >= y and y >= 0 1. create new variable called remainder 2. begin loop
          1. if y is zero, exit loop
          2. set remainder to the remainder of x/y
          3. set x to y
          4. set y to remainder 5. repeat loop 3. return x end gcd |

The iterative algorithm requires a temporary variable, and even given knowledge of the Euclidean algorithm it is more difficult to understand the process by simple inspection, although the two algorithms are very similar in their steps.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tower_of_Hanoi.jpeg/250px-Tower_of_Hanoi.jpeg)](https://en.wikipedia.org/wiki/File:Tower_of_Hanoi.jpeg)

Towers of Hanoi

The Towers of Hanoi is a mathematical puzzle whose solution illustrates recursion. There are three pegs which can hold stacks of disks of different diameters. A larger disk may never be stacked on top of a smaller. Starting with *n* disks on one peg, they must be moved to another peg one at a time. What is the smallest number of steps to move the stack?

*Function definition*:

:   hanoi
    ⁡
    (
    n
    )
    =


    {



    1



    if 
    n
    =
    1


    2
    ⋅
    hanoi
    ⁡
    (
    n
    −
    1
    )
    +
    1



    if 
    n
    >
    1

    {\displaystyle \operatorname {hanoi} (n)={\begin{cases}1&{\mbox{if }}n=1\\2\cdot \operatorname {hanoi} (n-1)+1&{\mbox{if }}n>1\\\end{cases}}}
    ![{\displaystyle \operatorname {hanoi} (n)={\begin{cases}1&{\mbox{if }}n=1\\2\cdot \operatorname {hanoi} (n-1)+1&{\mbox{if }}n>1\\\end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/52078a04ec62c4a55887e2cd9011acb238c34452)

*Recurrence relation for hanoi*:

:   h

    n
    =
    2

    h

    n
    −
    1
    +
    1
    {\displaystyle h\_{n}=2h\_{n-1}+1}
    ![{\displaystyle h_{n}=2h_{n-1}+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ef787d90c11406d902ea1602275c1aa3f7562a15)
:   h

    1
    =
    1
    {\displaystyle h\_{1}=1}
    ![{\displaystyle h_{1}=1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/083d0eaf2fe9466f7e1ec69edf7f202b8c0b8851)

| Computing the recurrence relation for n = 4: |
| --- |
| hanoi(4)     = 2×hanoi(3) + 1
             = 2×(2×hanoi(2) + 1) + 1
             = 2×(2×(2×hanoi(1) + 1) + 1) + 1
             = 2×(2×(2×1 + 1) + 1) + 1
             = 2×(2×(3) + 1) + 1
             = 2×(7) + 1
             = 15 |

Example implementations:

| Pseudocode (recursive): |
| --- |
| function hanoi is: input : integer n , such that n >= 1 1. if n is 1 then return 1 2. return [2 * [ call hanoi(n-1)] + 1] end hanoi |

Although not all recursive functions have an explicit solution, the Tower of Hanoi sequence can be reduced to an explicit formula.

| An explicit formula for Towers of Hanoi: |
| --- |
| h 1 = 1   = 2 1 - 1
h 2 = 3   = 2 2 - 1
h 3 = 7   = 2 3 - 1
h 4 = 15  = 2 4 - 1
h 5 = 31  = 2 5 - 1
h 6 = 63  = 2 6 - 1
h 7 = 127 = 2 7 - 1 In general:
h n = 2 n - 1, for all n >= 1 |

The [binary search](https://en.wikipedia.org/wiki/Binary_search) algorithm is a method of searching a [sorted array](https://en.wikipedia.org/wiki/Sorted_array) for a single element by cutting the array in half with each recursive pass. The trick is to pick a midpoint near the center of the array, compare the data at that point with the data being searched and then responding to one of three possible conditions: the data is found at the midpoint, the data at the midpoint is greater than the data being searched for, or the data at the midpoint is less than the data being searched for.

Recursion is used in this algorithm because with each pass a new array is created by cutting the old one in half. The binary search procedure is then called recursively, this time on the new (and smaller) array. Typically the array's size is adjusted by manipulating a beginning and ending index. The algorithm exhibits a logarithmic order of growth because it essentially divides the problem domain in half with each pass.

Example implementation of binary search in C:

```
/**
 * @brief Call binary_search with proper initial conditions.
 * @param data an array of integers SORTED in ASCENDING order
 * @param target the integer to search for
 * @param count the total number of elements in the array
 * @returns result of binary_search
 */
int search(int data[], int target, int count) {
    // Start = 0 (beginning index)
    // End = count - 1 (top index)
    return binary_search(data, target, 0, count - 1);
}

/**
 * @brief Binary Search Algorithm.
 * @param data an array of integers SORTED in ASCENDING order
 * @param target the integer to search for
 * @param start the minimum array index
 * @param end the maximum array index
 * @returns position of the integer toFind within array data, -1 if not found
 */
int binary_search(int data[], int target, int start, int end) {
    //Get the midpoint.
    int mid = start + (end - start) / 2; //Integer division

    if (start > end) {
        return -1; // Stop condition (base case)
    } else if (data[mid] == target) {
        return mid; // Found, return index
    } else if (data[mid] > target) {
        // Data is greater than target, search lower half
        return binary_search(data, target, start, mid - 1);
    } else {
        // Data is less than target, search upper half
        return binary_search(data, target, mid + 1, end);
    }
}

```

## Recursive data structures (structural recursion)

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=35)]

An important application of recursion in computer science is in defining dynamic data structures such as [lists](https://en.wikipedia.org/wiki/List_(abstract_data_type)) and [trees](https://en.wikipedia.org/wiki/Tree_(data_structure)). Recursive data structures can dynamically grow to a theoretically infinite size in response to runtime requirements; in contrast, the size of a static array must be set at compile time.

> "Recursive algorithms are particularly appropriate when the underlying problem or the data to be treated are defined in recursive terms."

The examples in this section illustrate what is known as "structural recursion". This term refers to the fact that the recursive procedures are acting on data that is defined recursively.

> As long as a programmer derives the template from a data definition, functions employ structural recursion. That is, the recursions in a function's body consume some immediate piece of a given compound value.

Below is a C definition of a linked list node structure. Notice especially how the node is defined in terms of itself. The "next" element of `LinkedList` is a pointer to another linked list, effectively creating a list type.

```
struct LinkedList {
    int data; // some integer data
    struct LinkedList* next; // pointer to another node of the linked list
};

```

Because the *struct node* data structure is defined recursively, procedures that operate on it can be implemented naturally as recursive procedures. The *list\_print* procedure defined below walks down the list until the list is empty (i.e., the list pointer has a value of NULL). For each node it prints the data element (an integer). In the C implementation, the list remains unchanged by the *list\_print* procedure.

```
void list_print(struct LinkedList* list) {
    // base case
    if (list) {
        printf("%d ", list->data);  // print integer data followed by a space
        list_print(list->next); // recursive call on the next node
    }
}

```

Below is a simple definition for a binary tree node. Like the node for linked lists, it is defined in terms of itself, recursively. There are two self-referential pointers: left (pointing to the left sub-tree) and right (pointing to the right sub-tree).

```
struct BinaryTree {
    int data; // some integer data
    struct BinaryTree* left; // pointer to the left subtree
    struct BinaryTree* right; // pointer to the right subtree
};

```

Operations on the tree can be implemented using recursion. Note that because there are two self-referencing pointers (left and right), tree operations may require two recursive calls:

```
// Test if tree_node contains i; return 1 if so, 0 if not.
int tree_contains(struct BinaryTree* node, int i) {
    if (!node) {
        return 0; // base case
    } else if (node->data == i) {
        return 1;
    } else {
        return tree_contains(node->left, i) || tree_contains(node->right, i);
    }
}

```

At most two recursive calls will be made for any given call to *tree\_contains* as defined above.

```
// Inorder traversal:
void tree_print(struct BinaryTree* node) {
    // base case
    if (node) { 
        tree_print(node->left); // go left
        printf("%d ", node->data); // print the integer followed by a space
        tree_print(node->right); // go right
    }
}

```

The above example illustrates an [in-order traversal](https://en.wikipedia.org/wiki/Tree_traversal) of the binary tree. A [Binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree) is a special case of the binary tree where the data elements of each node are in order.

### Filesystem traversal

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=38)]

Since the number of files in a [filesystem](https://en.wikipedia.org/wiki/Filesystem) may vary, [recursion](https://en.wikipedia.org/wiki/Recursion) is the only practical way to traverse and thus enumerate its contents. Traversing a filesystem is very similar to that of [tree traversal](https://en.wikipedia.org/wiki/Tree_traversal), therefore the concepts behind tree traversal are applicable to traversing a filesystem. More specifically, the code below would be an example of a [preorder traversal](https://en.wikipedia.org/wiki/Preorder_traversal) of a filesystem.

```
package org.wikipedia.examples;

import java.io.File;

public class Example {
	/**
	 * Obtains the filesystem roots
	 * Proceeds with the recursive filesystem traversal
	 */
	private static void traverse() {
		File[] fs = File.listRoots();
		for (int i = 0; i < fs.length; i++) {
			System.out.println(fs[i]);
			if (fs[i].isDirectory() && fs[i].canRead()) {
				rtraverse(fs[i]);
			}
		}
	}

	/**
	 * Recursively traverse a given directory
	 *
	 * @param fd indicates the starting point of traversal
	 */
	private static void rtraverse(File fd) {
		File[] fss = fd.listFiles();

		for (int i = 0; i < fss.length; i++) {
			System.out.println(fss[i]);
			if (fss[i].isDirectory() && fss[i].canRead()) {
				rtraverse(fss[i]);
			}
		}
	}

	public static void main(String[] args) {
		traverse();
	}
}

```

This code is both recursion and [iteration](https://en.wikipedia.org/wiki/Iteration) - the files and directories are iterated, and each directory is opened recursively.

The "rtraverse" method is an example of direct recursion, whilst the "traverse" method is a wrapper function.

The "base case" scenario is that there will always be a fixed number of files and/or directories in a given filesystem.

## Time-efficiency of recursive algorithms

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=39)]

The [time efficiency](https://en.wikipedia.org/wiki/Time_complexity) of recursive algorithms can be expressed in a [recurrence relation](https://en.wikipedia.org/wiki/Recurrence_relation) of [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation). They can (usually) then be simplified into a single Big-O term.

### Shortcut rule (master theorem)

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=40)]

If the time-complexity of the function is in the form

T
(
n
)
=
a
⋅
T
(
n

/
b
)
+
f
(
n
)
{\displaystyle T(n)=a\cdot T(n/b)+f(n)}
![{\displaystyle T(n)=a\cdot T(n/b)+f(n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f45874129c69809cfa55de221ef2666051a676d7)

Then the Big O of the time-complexity is thus:

* If 



  f
  (
  n
  )
  =
  O
  (

  n


  log

  b
  ⁡
  a
  −
  ε
  )
  {\displaystyle f(n)=O(n^{\log \_{b}a-\varepsilon })}
  ![{\displaystyle f(n)=O(n^{\log _{b}a-\varepsilon })}](https://wikimedia.org/api/rest_v1/media/math/render/svg/beb3fb687fc8d3f21479f93c3fc406712c588f3c) for some constant 



  ε
  >
  0
  {\displaystyle \varepsilon >0}
  ![{\displaystyle \varepsilon >0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e04ec3670b50384a3ce48aca42e7cc5131a06b12), then 



  T
  (
  n
  )
  =
  Θ
  (

  n


  log

  b
  ⁡
  a
  )
  {\displaystyle T(n)=\Theta (n^{\log \_{b}a})}
  ![{\displaystyle T(n)=\Theta (n^{\log _{b}a})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/34ce8e979e6eada403e7044342c39fdf41815f22)
* If 



  f
  (
  n
  )
  =
  Θ
  (

  n


  log

  b
  ⁡
  a
  )
  {\displaystyle f(n)=\Theta (n^{\log \_{b}a})}
  ![{\displaystyle f(n)=\Theta (n^{\log _{b}a})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/eee762297fbff4f695d84fd6eb3a9ea87b5647c4), then 



  T
  (
  n
  )
  =
  Θ
  (

  n


  log

  b
  ⁡
  a
  log
  ⁡
  n
  )
  {\displaystyle T(n)=\Theta (n^{\log \_{b}a}\log n)}
  ![{\displaystyle T(n)=\Theta (n^{\log _{b}a}\log n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b30978415211771d1d567ce2ff24228c73e58271)
* If 



  f
  (
  n
  )
  =
  Ω
  (

  n


  log

  b
  ⁡
  a
  +
  ε
  )
  {\displaystyle f(n)=\Omega (n^{\log \_{b}a+\varepsilon })}
  ![{\displaystyle f(n)=\Omega (n^{\log _{b}a+\varepsilon })}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffc4a9b70dcc15fdb9942fa09d2d04a833b34204) for some constant 



  ε
  >
  0
  {\displaystyle \varepsilon >0}
  ![{\displaystyle \varepsilon >0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e04ec3670b50384a3ce48aca42e7cc5131a06b12), and if 



  a
  ⋅
  f
  (
  n

  /
  b
  )
  ≤
  c
  ⋅
  f
  (
  n
  )
  {\displaystyle a\cdot f(n/b)\leq c\cdot f(n)}
  ![{\displaystyle a\cdot f(n/b)\leq c\cdot f(n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d5876b27e26e38632de6c5ea675420b643517437) for some constant *c* < 1 and all sufficiently large n, then 



  T
  (
  n
  )
  =
  Θ
  (
  f
  (
  n
  )
  )
  {\displaystyle T(n)=\Theta (f(n))}
  ![{\displaystyle T(n)=\Theta (f(n))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e3f2ea15b66701b4ed7351155df63020b3ad5dc5)

where a represents the number of recursive calls at each level of recursion, b represents by what factor smaller the input is for the next level of recursion (i.e. the number of pieces you divide the problem into), and *f*(*n*) represents the work that the function does independently of any recursion (e.g. partitioning, recombining) at each level of recursion.

## Recursion in Logic Programming

[[edit](/w/index.php?title=Recursion_(computer_science)&action=edit&section=41)]

In the procedural interpretation of [logic programs](https://en.wikipedia.org/wiki/Logic_programming), clauses (or rules) of the form `A :- B` are treated as procedures, which reduce goals of the form `A` to subgoals of the form `B`.
For example, the [Prolog](https://en.wikipedia.org/wiki/Prolog) clauses:

```
path(X,Y) :- arc(X,Y).
path(X,Y) :- arc(X,Z), path(Z,Y).

```

define a procedure, which can be used to search for a path from *X* to *Y*, either by finding a direct arc from *X* to *Y*, or by finding an arc from *X* to *Z*, and then searching recursively for a path from *Z* to *Y*. Prolog executes the procedure by reasoning top-down (or [backwards](https://en.wikipedia.org/wiki/Backward_chaining)) and searching the space of possible paths depth-first, one branch at a time. If it tries the second clause, and finitely fails to find a path from *Z* to *Y*, it backtracks and tries to find an arc from *X* to another node, and then searches for a path from that other node to *Y*.

However, in the logical reading of logic programs, clauses are understood [declaratively](https://en.wikipedia.org/wiki/Declarative_program) as universally quantified conditionals. For example, the recursive clause of the path-finding procedure is understood as [representing the knowledge](https://en.wikipedia.org/wiki/Knowledge_representation_and_reasoning) that, for every *X*, *Y* and *Z*, if there is an arc from *X* to *Z* and a path from *Z* to *Y* then there is a path from *X* to *Y*. In symbolic form:

:   ∀
    X
    ,
    Y
    ,
    Z
    (
    a
    r
    c
    (
    X
    ,
    Z
    )
    ∧
    p
    a
    t
    h
    (
    Z
    ,
    Y
    )
    →
    p
    a
    t
    h
    (
    X
    ,
    Y
    )
    )
    .
    {\displaystyle \forall X,Y,Z(arc(X,Z)\land path(Z,Y)\rightarrow path(X,Y)).}
    ![{\displaystyle \forall X,Y,Z(arc(X,Z)\land path(Z,Y)\rightarrow path(X,Y)).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a5d7004a9fae850a949eed90114ec03a2f3c0366)

The logical reading frees the reader from needing to know how the clause is used to solve problems. The clause can be used top-down, as in Prolog, to reduce problems to subproblems. Or it can be used bottom-up (or [forwards](https://en.wikipedia.org/wiki/Forward_chaining)), as in [Datalog](https://en.wikipedia.org/wiki/Datalog), to derive conclusions from conditions. This [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) is a form of [abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)), which separates declarative knowledge from problem solving methods (see [Algorithm#Algorithm = Logic + Control](https://en.wikipedia.org/wiki/Algorithm#Algorithm_=_Logic_+_Control)).

A common mistake among programmers is not providing a way to exit a recursive function, often by omitting or incorrectly checking the base case, letting it run (at least theoretically) infinitely by endlessly calling itself recursively. This is called *infinite recursion*, and the program will never terminate. In practice, this typically exhausts the available [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) space. In most programming environments, a program with infinite recursion will not really run forever. Eventually, something will break and the program will report an error.

Below is a Java code that would use infinite recursion:

```
public class InfiniteRecursion {
    static void recursive() {
        // Recursive function with no way out
        recursive();
    }
    
    public static void main(String[] args) {
        recursive(); // Executes the recursive function upon runtime
    }
}

```

Running this code will result in a [stack overflow](https://en.wikipedia.org/wiki/Stack_overflow) error.

1. **[^](#cite_ref-1)** Graham, Ronald; Knuth, Donald; Patashnik, Oren (1990). ["1: Recurrent Problems"](http://www-cs-faculty.stanford.edu/~knuth/gkp.html). *Concrete Mathematics*. Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-55802-5](https://en.wikipedia.org/wiki/Special:BookSources/0-201-55802-5).
2. **[^](#cite_ref-2)** Kuhail, Mohammad A.; Negreiros, Joao; Seffah, Ahmed (2021). "Teaching Recursive Thinking using Unplugged Activities". *World Transactions on Engineering and Technology Education*. **19** (2): 169–175.
3. **[^](#cite_ref-3)** Epp, Susanna (1995). [*Discrete Mathematics with Applications*](https://archive.org/details/discretemathema000epps/page/427) (2nd ed.). PWS Publishing Company. p. [427](https://archive.org/details/discretemathema000epps/page/427). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-53494446-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-53494446-9).
4. **[^](#cite_ref-4)** [Wirth, Niklaus](https://en.wikipedia.org/wiki/Niklaus_Wirth) (1976). [*Algorithms + Data Structures = Programs*](https://archive.org/details/algorithmsdatast00wirt/page/126). [Prentice-Hall](https://en.wikipedia.org/wiki/Prentice-Hall). p. [126](https://archive.org/details/algorithmsdatast00wirt/page/126). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13022418-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13022418-7).
5. **[^](#cite_ref-5)** ["Functional Programming | Clojure for the Brave and True"](https://www.braveclojure.com/functional-programming/#Recursion_Instead_of_for_while). *www.braveclojure.com*. Retrieved 2020-10-21.
6. ^ [***a***](#cite_ref-auto5_6-0) [***b***](#cite_ref-auto5_6-1) [***c***](#cite_ref-auto5_6-2) Soare, Robert I. (1996). "Computability and Recursion". *Bulletin of Symbolic Logic*. **2** (3): 284–321. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/420992](https://doi.org/10.2307%2F420992). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [420992](https://www.jstor.org/stable/420992).
7. ^ [***a***](#cite_ref-auto3_7-0) [***b***](#cite_ref-auto3_7-1) [***c***](#cite_ref-auto3_7-2) [***d***](#cite_ref-auto3_7-3) [***e***](#cite_ref-auto3_7-4) [***f***](#cite_ref-auto3_7-5) Daylight, Edgar G. (2010). The Advent of Recursion in Programming, 1950s–1960s (Report). Preprint Series PP-2010-04. University of Amsterdam, Institute for Logic, Language and Computation.
8. ^ [***a***](#cite_ref-auto_8-0) [***b***](#cite_ref-auto_8-1) [***c***](#cite_ref-auto_8-2) McCarthy, John (1960). "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I". *Communications of the ACM*. **3** (4): 184–195. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/367177.367199](https://doi.org/10.1145%2F367177.367199).
9. ^ [***a***](#cite_ref-auto4_9-0) [***b***](#cite_ref-auto4_9-1) Naur, Peter; John Backus; John McCarthy (1960). "Report on the Algorithmic Language ALGOL 60". *Communications of the ACM*. **3** (5): 299–314. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/367236.367262](https://doi.org/10.1145%2F367236.367262).
10. **[^](#cite_ref-10)** Kong, Qingkai; Siauw, Timmy; Bayen, Alexandre M. (2021). "Recursion". *Python Programming and Numerical Methods*. pp. 105–120. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/B978-0-12-819549-9.00015-4](https://doi.org/10.1016%2FB978-0-12-819549-9.00015-4). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-12-819549-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-12-819549-9).
11. ^ [***a***](#cite_ref-:0_11-0) [***b***](#cite_ref-:0_11-1) [***c***](#cite_ref-:0_11-2) Sweigart, Al (2022). *The Recursive Book of Recursion: Ace the Coding Interview with Python and JavaScript*. No Starch Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-7185-0202-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-7185-0202-4).[*[page needed](https://en.wikipedia.org/wiki/Wikipedia:Citing_sources)*]
12. **[^](#cite_ref-12)** Hopcroft, John; Tarjan, Robert (June 1973). "Algorithm 447: efficient algorithms for graph manipulation". *Communications of the ACM*. **16** (6): 372–378. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/362248.362272](https://doi.org/10.1145%2F362248.362272).
13. **[^](#cite_ref-13)** Bron, C. (May 1972). "Algorithm 426: Merge sort algorithm [M1]". *Communications of the ACM*. **15** (5): 357–358. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/355602.361317](https://doi.org/10.1145%2F355602.361317).
14. **[^](#cite_ref-Felleisen_HtDP_2001_14-0)** [Felleisen et al. 2001](#CITEREFFelleisenFindlerFlattKrishnamurthi2001), [art V "Generative Recursion](http://www.htdp.org/2003-09-26/Book/curriculum-Z-H-31.html)
15. ^ [***a***](#cite_ref-Felleisen_2002_108_15-0) [***b***](#cite_ref-Felleisen_2002_108_15-1) Felleisen, Matthias (2002). ["Developing Interactive Web Programs"](https://books.google.com/books?id=Y3GqCAAAQBAJ&pg=PA108). In Jeuring, Johan (ed.). [*Advanced Functional Programming: 4th International School*](ftp://nozdr.ru/biblio/kolxo3/Cs/CsLn/Advanced%20Functional%20Programming%204%20conf.,%20AFP%202002%20(LNCS2638,%20Springer,%202003)(ISBN%203540401326)(O)(222s).pdf#page=109) (PDF). Springer. p. 108. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9783540448334](https://en.wikipedia.org/wiki/Special:BookSources/9783540448334).
16. **[^](#cite_ref-16)** Mongan, John; Giguère, Eric; Kindler, Noah (2013). [*Programming Interviews Exposed: Secrets to Landing Your Next Job*](https://archive.org/details/programminginter00mong_658) (3rd ed.). [Wiley](https://en.wikipedia.org/wiki/Wiley_(publisher)). p. [115](https://archive.org/details/programminginter00mong_658/page/n148). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-118-26136-1](https://en.wikipedia.org/wiki/Special:BookSources/978-1-118-26136-1).
17. **[^](#cite_ref-17)** Hetland, Magnus Lie (2010), [*Python Algorithms: Mastering Basic Algorithms in the Python Language*](https://books.google.com/books?id=4cytGpIPYsAC&pg=PA79), Apress, p. 79, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781430232384](https://en.wikipedia.org/wiki/Special:BookSources/9781430232384).
18. **[^](#cite_ref-18)** Drozdek, Adam (2012), [*Data Structures and Algorithms in C++*](https://books.google.com/books?id=PRgLAAAAQBAJ&pg=PA197) (4th ed.), Cengage Learning, p. 197, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781285415017](https://en.wikipedia.org/wiki/Special:BookSources/9781285415017).
19. **[^](#cite_ref-19)** Shivers, Olin. ["The Anatomy of a Loop - A story of scope and control"](http://www.ccs.neu.edu/home/shivers/papers/loop.pdf) (PDF). Georgia Institute of Technology. Retrieved 2012-09-03.
20. **[^](#cite_ref-20)** Lambda the Ultimate. ["The Anatomy of a Loop"](http://lambda-the-ultimate.org/node/1014). Lambda the Ultimate. Retrieved 2012-09-03.
21. **[^](#cite_ref-21)** ["27.1. sys — System-specific parameters and functions — Python v2.7.3 documentation"](https://docs.python.org/library/sys.html). Docs.python.org. Retrieved 2012-09-03.
22. **[^](#cite_ref-22)** Krauss, Kirk J. (2014). ["Matching Wildcards: An Empirical Way to Tame an Algorithm"](http://www.drdobbs.com/architecture-and-design/matching-wildcards-an-empirical-way-to-t/240169123). *[Dr. Dobb's Journal](https://en.wikipedia.org/wiki/Dr._Dobb%27s_Journal)*.
23. **[^](#cite_ref-23)** Mueller, Oliver (2012). ["Anatomy of a Stack Smashing Attack and How GCC Prevents It"](http://www.drdobbs.com/security/anatomy-of-a-stack-smashing-attack-and-h/240001832). *[Dr. Dobb's Journal](https://en.wikipedia.org/wiki/Dr._Dobb%27s_Journal)*.
24. **[^](#cite_ref-24)** ["StackOverflowException Class"](https://msdn.microsoft.com/en-us/library/system.stackoverflowexception(v=vs.110).aspx). *.NET Framework Class Library*. [Microsoft Developer Network](https://en.wikipedia.org/wiki/Microsoft_Developer_Network). 2018.
25. **[^](#cite_ref-25)** ["Depth First Search (DFS): Iterative and Recursive Implementation"](http://www.techiedelight.com/depth-first-search/). Techie Delight. 2018.
26. **[^](#cite_ref-26)** Mitrovic, Ivan. ["Replace Recursion with Iteration"](https://www.refactoring.com/catalog/replaceRecursionWithIteration.html). [ThoughtWorks](https://en.wikipedia.org/wiki/ThoughtWorks).
27. **[^](#cite_ref-27)** La, Woong Gyu (2015). ["How to replace recursive functions using stack and while-loop to avoid the stack-overflow"](https://www.codeproject.com/Articles/418776/How-to-replace-recursive-functions-using-stack-and). CodeProject.
28. **[^](#cite_ref-28)** Moertel, Tom (2013). ["Tricks of the trade: Recursion to Iteration, Part 2: Eliminating Recursion with the Time-Traveling Secret Feature Trick"](http://blog.moertel.com/posts/2013-05-14-recursive-to-iterative-2.html).
29. **[^](#cite_ref-29)** Salz, Rich (1991). ["wildmat.c"](https://github.com/trevor/transmission/blob/master/libtransmission/wildmat.c). [GitHub](https://en.wikipedia.org/wiki/GitHub).
30. **[^](#cite_ref-30)** Krauss, Kirk J. (2008). ["Matching Wildcards: An Algorithm"](http://www.drdobbs.com/architecture-and-design/matching-wildcards-an-algorithm/210200888). *[Dr. Dobb's Journal](https://en.wikipedia.org/wiki/Dr._Dobb%27s_Journal)*.
31. **[^](#cite_ref-31)** Krauss, Kirk J. (2018). ["Matching Wildcards: An Improved Algorithm for Big Data"](http://www.developforperformance.com/MatchingWildcards_AnImprovedAlgorithmForBigData.html). Develop for Performance.
32. **[^](#cite_ref-32)** [Graham, Knuth & Patashnik 1990](#CITEREFGrahamKnuthPatashnik1990), §1.1: The Tower of Hanoi
33. **[^](#cite_ref-33)** [Epp 1995](#CITEREFEpp1995), pp. 427–430: The Tower of Hanoi
34. **[^](#cite_ref-34)** [Epp 1995](#CITEREFEpp1995), pp. 447–448: An Explicit Formula for the Tower of Hanoi Sequence
35. **[^](#cite_ref-35)** [Wirth 1976](#CITEREFWirth1976), p. 127
36. **[^](#cite_ref-36)** [Russell, Stuart J.](https://en.wikipedia.org/wiki/Stuart_J._Russell); [Norvig, Peter.](https://en.wikipedia.org/wiki/Peter_Norvig) (2021). *[Artificial Intelligence: A Modern Approach §9.3, §9.4](https://en.wikipedia.org/wiki/Artificial_Intelligence:_A_Modern_Approach)* (4th ed.). Hoboken: Pearson. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0134610993](https://en.wikipedia.org/wiki/Special:BookSources/978-0134610993). [LCCN](https://en.wikipedia.org/wiki/LCCN_(identifier)) [20190474](https://lccn.loc.gov/20190474).
37. **[^](#cite_ref-37)** ["4.8. Infinite Recursion — How to Think Like a Computer Scientist - C++"](https://runestone.academy/ns/books/published/thinkcpp/Chapter4/InfiniteRecursion.html).

* [Barron, David William](https://en.wikipedia.org/wiki/David_W._Barron) (1968) [1967]. Written at Cambridge, UK. [Gill, Stanley](https://en.wikipedia.org/wiki/Stanley_Gill) (ed.). *Recursive techniques in programming*. Macdonald Computer Monographs (1 ed.). London, UK: [Macdonald & Co. (Publishers) Ltd.](https://en.wikipedia.org/wiki/Macdonald_%26_Co._(Publishers)_Ltd.) [SBN](https://en.wikipedia.org/wiki/SBN_(identifier)) [356-02201-3](https://en.wikipedia.org/wiki/Special:BookSources/0-356-02201-3). (viii+64 pages)
* Felleisen, Matthias; Findler, Robert B.; Flatt, Matthew; Krishnamurthi, Shriram (2001). [*How To Design Programs: An Introduction to Computing and Programming*](http://www.htdp.org/2003-09-26/Book/). [MIT Press](https://en.wikipedia.org/wiki/MIT_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0262062186](https://en.wikipedia.org/wiki/Special:BookSources/0262062186).
* Rubio-Sanchez, Manuel (2017). [*Introduction to Recursive Programming*](https://books.google.com/books?id=9pY4DwAAQBAJ&pg=PA1). [CRC Press](https://en.wikipedia.org/wiki/CRC_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-351-64717-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-351-64717-5).
* Pevac, Irena (2016). *Practicing Recursion in Java*. CreateSpace Independent. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-5327-1227-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5327-1227-2).
* Roberts, Eric (2005). [*Thinking Recursively with Java*](https://archive.org/details/thinkingrecursiv00robe_0). [Wiley](https://en.wikipedia.org/wiki/Wiley_(publisher)). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-47170146-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-47170146-0).
* Rohl, Jeffrey S. (1984). [*Recursion Via Pascal*](https://books.google.com/books?id=yCk2mWy9inMC). [Cambridge University Press](https://en.wikipedia.org/wiki/Cambridge_University_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-521-26934-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-26934-6).
* Helman, Paul; Veroff, Robert. [*Walls and Mirrors*](https://en.wikipedia.org/wiki/Walls_and_Mirrors).
* [Abelson, Harold](https://en.wikipedia.org/wiki/Harold_Abelson); [Sussman, Gerald Jay](https://en.wikipedia.org/wiki/Gerald_Jay_Sussman); Sussman, Julie (1996). [*Structure and Interpretation of Computer Programs*](https://en.wikipedia.org/wiki/Structure_and_Interpretation_of_Computer_Programs) (2nd ed.). [MIT Press](https://en.wikipedia.org/wiki/MIT_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-51087-1](https://en.wikipedia.org/wiki/Special:BookSources/0-262-51087-1).
* [Dijkstra, Edsger W.](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) (1960). "Recursive Programming". *Numerische Mathematik*. **2** (1): 312–318. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF01386232](https://doi.org/10.1007%2FBF01386232). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [127891023](https://api.semanticscholar.org/CorpusID:127891023).
* McCarthy, John (1960). "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I". *Communications of the ACM*. **3** (4): 184–195. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/367177.367199](https://doi.org/10.1145%2F367177.367199).
* Naur, Peter; John Backus; John McCarthy (1960). "Report on the Algorithmic Language ALGOL 60". *Communications of the ACM*. **3** (5): 299–314. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/367236.367262](https://doi.org/10.1145%2F367236.367262).
* Hoare, C. A. R. (1961). "Quicksort". *Communications of the ACM*. **4** (7): 321–322. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/366622.366644](https://doi.org/10.1145%2F366622.366644).
* Soare, Robert I. (1996). "Computability and Recursion". *Bulletin of Symbolic Logic*. **2** (3): 284–321. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/420992](https://doi.org/10.2307%2F420992). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [420992](https://www.jstor.org/stable/420992).
* Daylight, Edgar G. (2010). The Advent of Recursion in Programming, 1950s–1960s (Report). Preprint Series PP-2010-04. University of Amsterdam, Institute for Logic, Language and Computation.
* Endres, Madeline; Westley Weimer; Amir Kamil (2021). "An Analysis of Iterative and Recursive Problem Performance". *Proceedings of the 52nd ACM Technical Symposium on Computer Science Education (SIGCSE '21)*. Association for Computing Machinery. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3408877.3432391](https://doi.org/10.1145%2F3408877.3432391).
* Cormen, Thomas H.; Charles E. Leiserson; Ronald L. Rivest; Clifford Stein (2009). *Introduction to Algorithms* (3rd ed.). MIT Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-03384-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-03384-8).