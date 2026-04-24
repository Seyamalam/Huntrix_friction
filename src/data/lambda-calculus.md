# Lambda calculus

* Source: https://en.wikipedia.org/wiki/Lambda_calculus

---

The lambda abstraction decomposed. The 

λ λ 

{\displaystyle \lambda }

 indicates the start of a function. 

x

{\displaystyle x}

 is the input parameter. 

M

{\displaystyle M}

 is the body, separated by a dot separator "

.

{\displaystyle .}

" from the input parameter.

In [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic), the **lambda calculus** (also written as ***λ*-calculus**) is a [formal system](https://en.wikipedia.org/wiki/Formal_system) for expressing [computation](https://en.wikipedia.org/wiki/Computability) based on function [abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)) and [application](https://en.wikipedia.org/wiki/Function_application) using variable [binding](https://en.wikipedia.org/wiki/Name_binding) and [substitution](https://en.wikipedia.org/wiki/Substitution_(algebra)). Untyped lambda calculus, the topic of this article, is a [universal machine](https://en.wikipedia.org/wiki/Universal_machine), i.e. a [model of computation](https://en.wikipedia.org/wiki/Model_of_computation) that can be used to simulate any [Turing machine](https://en.wikipedia.org/wiki/Turing_machine) (and vice versa). It was introduced by the mathematician [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church) in the 1930s as part of his research into the [foundations of mathematics](https://en.wikipedia.org/wiki/Foundations_of_mathematics). In 1936, Church found a formulation which was logically consistent, and documented it in 1940.

## Definition

The lambda calculus consists of a language of **lambda terms**, which are defined by a formal syntax, and a set of transformation rules for manipulating those terms. In [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form), the syntax is 

e
::=
x
∣ ∣ 
λ λ 
x
.
e
∣ ∣ 
e

e
,

{\displaystyle e::=x\mid \lambda x.e\mid e\,e,}

 where variables *x*,*y*,*z* range over an infinite set of names. Terms *M*, *N*, *t*, *s*, *e*, *f* range over all lambda terms. This corresponds to the following [inductive definition](https://en.wikipedia.org/wiki/Inductive_definition):

* A *variable* x is a valid lambda term.
* An *abstraction* is a lambda term 

(
λ λ 
x
.
t
)

{\displaystyle (\lambda x.t)}

 where t is a lambda term, referred to as the abstraction's *body*, and x is the abstraction's *parameter* variable,
* An *application* is a lambda term 

(
t

s
)

{\displaystyle (t\,s)}

 where t and s are lambda terms.

A lambda term is syntactically valid if it can be obtained by repeated application of these three rules. For convenience, parentheses can often be omitted when writing a lambda term—see [Lambda calculus definition § Notation](https://en.wikipedia.org/wiki/Lambda_calculus_definition#Notation) for details.

Within lambda terms, any occurrence of a variable that is not a parameter of some enclosing λ is said to be *free*. Any free occurrence of 

x

{\displaystyle x}

 in a term 

M

{\displaystyle M}

 is *bound* in 

λ λ 
x
.
M

{\displaystyle \lambda x.M}

. Any free occurrence of any other variable within 

M

{\displaystyle M}

 remains free in 

λ λ 
x
.
M

{\displaystyle \lambda x.M}

.

For example, in the term 

x

y

{\displaystyle x\,y}

, both 

x

{\displaystyle x}

 and 

y

{\displaystyle y}

 occur free. In 

(
λ λ 
x
.
x

y
)

{\displaystyle (\lambda x.x\,y)}

, 

y

{\displaystyle y}

 is free, but 

x

{\displaystyle x}

 in the body (i.e. after the dot) is not free, and is said to be *bound* (to the parameter). While 

y

{\displaystyle y}

 is free in 

(
λ λ 
x
.
x

y
)

{\displaystyle (\lambda x.x\,y)}

, it is bound in 

(
λ λ 
y
.
λ λ 
x
.
x

y
)

{\displaystyle (\lambda y.\lambda x.x\,y)}

. There are two occurrences of 

x

{\displaystyle x}

 in 

(
λ λ 
y
.
(
λ λ 
x
.
x

y
)

x
)

{\displaystyle (\lambda y.(\lambda x.x\,y)\,x)}

 – one is bound, and the other is free.

FV(M) is the set of free variables of M, i.e. such variables that occur free in M at least once. It can be defined inductively as follows:

* FV
⁡ ⁡ 
(
x
)
=
{
x
}

{\displaystyle \operatorname {FV} (x)=\{x\}}
* FV
⁡ ⁡ 
(

M

1

M

2

)
=
FV
⁡ ⁡ 
(

M

1

)
∪ ∪ 
FV
⁡ ⁡ 
(

M

2

)

{\displaystyle \operatorname {FV} (M_{1}M_{2})=\operatorname {FV} (M_{1})\cup \operatorname {FV} (M_{2})}
* FV
⁡ ⁡ 
(
λ λ 
x
.
M
)
=
FV
⁡ ⁡ 
(
M
)
∖ ∖ 
{
x
}

{\displaystyle \operatorname {FV} (\lambda x.M)=\operatorname {FV} (M)\backslash \{x\}}

The notation 

M
[
x
:=
N
]

{\displaystyle M[x:=N]}

 denotes **capture-avoiding substitution**: substituting N for every free occurrence of x in M, while avoiding variable capture. This operation is defined inductively as follows:

* x
[
x
:=
N
]
=
N

{\displaystyle x[x:=N]=N}

; 

y
[
x
:=
N
]
=
y

{\displaystyle y[x:=N]=y}

 if 

y
≠ ≠ 
x

{\displaystyle y\neq x}

.
* (

M

1

M

2

)
[
x
:=
N
]
=
(

M

1

[
x
:=
N
]
)
(

M

2

[
x
:=
N
]
)

{\displaystyle (M_{1}M_{2})[x:=N]=(M_{1}[x:=N])(M_{2}[x:=N])}

.
* (
λ λ 
y
.
M
)
[
x
:=
N
]

{\displaystyle (\lambda y.M)[x:=N]}

 has three cases:

    * If 

y
=
x

{\displaystyle y=x}

, becomes 

λ λ 
x
.
M

{\displaystyle \lambda x.M}

 (

x

{\displaystyle x}

 is bound; no change).
    * If 

y
∉ ∉ 
F
V
(
N
)

{\displaystyle y\notin FV(N)}

, becomes 

λ λ 
y
.
(
M
[
x
:=
N
]
)

{\displaystyle \lambda y.(M[x:=N])}

.
    * If 

y
∈ ∈ 
F
V
(
N
)

{\displaystyle y\in FV(N)}

, first α-rename 

λ λ 
y
.
M

{\displaystyle \lambda y.M}

 to 

λ λ 

y
′

.
M
[
y
:=

y
′

]

{\displaystyle \lambda y'.M[y:=y']}

 with 

y
′

{\displaystyle y'}

 [fresh](https://en.wikipedia.org/wiki/Fresh_variable) to avoid [name collisions](https://en.wikipedia.org/wiki/Name_collision), then continue as above. It becomes 

λ λ 

y
′

.
M
[
y
:=

y
′

]
[
x
:=
N
]

{\displaystyle \lambda y'.M[y:=y'][x:=N]}

with 

y
′

∉ ∉ 
FV
⁡ ⁡ 
(
M
)
∪ ∪ 
FV
⁡ ⁡ 
(
N
)

{\displaystyle y'\notin \operatorname {FV} (M)\cup \operatorname {FV} (N)}

.

There are several notions of "equivalence" and "reduction" that make it possible to reduce lambda terms to equivalent lambda terms.

* *α-conversion* captures the intuition that the particular choice of a bound variable, in an abstraction, does not (usually) matter. If 

y
∉ ∉ 
F
V
(
M
)

{\displaystyle y\notin FV(M)}

, then the terms 

λ λ 
x
.
M

{\displaystyle \lambda x.M}

 and 

λ λ 
y
.
M
[
x
:=
y
]

{\displaystyle \lambda y.M[x:=y]}

 are considered *alpha-equivalent*, written 

λ λ 
x
.
M

≡ ≡ 

α α 

λ λ 
y
.
M
[
x
:=
y
]

{\displaystyle \lambda x.M\equiv _{\alpha }\lambda y.M[x:=y]}

. The equivalence relation is the smallest congruence relation on lambda terms generated by this rule. For instance, 

λ λ 
x
.
x

{\displaystyle \lambda x.x}

 and 

λ λ 
y
.
y

{\displaystyle \lambda y.y}

 are alpha-equivalent lambda terms.
* The *β-reduction* rule states that a β-redex, an application of the form 

(
λ λ 
x
.
t
)
s

{\displaystyle (\lambda x.t)s}

, reduces to the term 

t
[
x
:=
s
]

{\displaystyle t[x:=s]}

. For example, for every 

s

{\displaystyle s}

, 

(
λ λ 
x
.
x
)
s
→ → 
x
[
x
:=
s
]
=
s

{\displaystyle (\lambda x.x)s\to x[x:=s]=s}

. This demonstrates that 

λ λ 
x
.
x

{\displaystyle \lambda x.x}

 really is the identity. Similarly, 

(
λ λ 
x
.
y
)
s
→ → 
y
[
x
:=
s
]
=
y

{\displaystyle (\lambda x.y)s\to y[x:=s]=y}

, which demonstrates that 

λ λ 
x
.
y

{\displaystyle \lambda x.y}

 is a constant function.
* *η-conversion* expresses extensionality and converts between 

λ λ 
x
.
f
x

{\displaystyle \lambda x.fx}

 and 

f

{\displaystyle f}

 whenever 

x

{\displaystyle x}

 does not appear free in 

f

{\displaystyle f}

. It is often omitted in many treatments of lambda calculus.

The term *redex*, short for *reducible expression*, refers to subterms that can be reduced by one of the reduction rules. For example, (λ*x*.*M*) *N* is a β-redex in expressing the substitution of *N* for *x* in *M*. The expression to which a redex reduces is called its *reduct*; the reduct of (λ*x*.*M*) *N* is *M*[*x* := *N*].

## Explanation and applications

Lambda calculus is [Turing complete](https://en.wikipedia.org/wiki/Turing_completeness), that is, it is a universal [model of computation](https://en.wikipedia.org/wiki/Model_of_computation) that can be used to simulate any [Turing machine](https://en.wikipedia.org/wiki/Turing_machine). Its namesake, the Greek letter lambda (λ), is used in lambda expressions and lambda terms to denote [binding](https://en.wikipedia.org/wiki/Free_variables_and_bound_variables) a variable in a [function](https://en.wikipedia.org/wiki/Function_(mathematics)).

Lambda calculus may be *untyped* or *typed*. In typed lambda calculus, functions can be applied only if they are capable of accepting the given input's "type" of data. Typed lambda calculi are strictly *weaker* than the untyped lambda calculus, which is the primary subject of this article, in the sense that *typed lambda calculi can express less* than the untyped calculus can. On the other hand, more things can be proven with typed lambda calculi. For example, in [simply typed lambda calculus](https://en.wikipedia.org/wiki/Simply_typed_lambda_calculus), it is a theorem that every evaluation strategy terminates for every simply typed lambda-term, whereas evaluation of untyped lambda-terms need not terminate (see below). One reason there are many different typed lambda calculi has been the desire to do more (of what the untyped calculus can do) without giving up on being able to prove strong theorems about the calculus.

Lambda calculus has applications in many different areas in [mathematics](https://en.wikipedia.org/wiki/Mathematics), [philosophy](https://en.wikipedia.org/wiki/Philosophy), [linguistics](https://en.wikipedia.org/wiki/Linguistics), and [computer science](https://en.wikipedia.org/wiki/Computer_science). Lambda calculus has played an important role in the development of the [theory](https://en.wikipedia.org/wiki/Programming_language_theory) of [programming languages](https://en.wikipedia.org/wiki/Programming_language). [Functional programming](https://en.wikipedia.org/wiki/Functional_programming) languages implement lambda calculus. Lambda calculus is also a current research topic in [category theory](https://en.wikipedia.org/wiki/Category_theory).

## History

Lambda calculus was introduced by mathematician [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church) in the 1930s as part of an investigation into the [foundations of mathematics](https://en.wikipedia.org/wiki/Foundations_of_mathematics). The original system was shown to be [logically inconsistent](https://en.wikipedia.org/wiki/Consistency) in 1935 when [Stephen Kleene](https://en.wikipedia.org/wiki/Stephen_Kleene) and [J. B. Rosser](https://en.wikipedia.org/wiki/J._B._Rosser) developed the [Kleene–Rosser paradox](https://en.wikipedia.org/wiki/Kleene%E2%80%93Rosser_paradox).

Subsequently, in 1936 Church isolated and published just the portion relevant to computation, what is now called the untyped lambda calculus. In 1940, he also introduced a computationally weaker, but logically consistent system, known as the [simply typed lambda calculus](https://en.wikipedia.org/wiki/Simply_typed_lambda_calculus).

Until the 1960s when its relation to programming languages was clarified, the lambda calculus was only a formalism. Thanks to [Richard Montague](https://en.wikipedia.org/wiki/Richard_Montague) and other linguists' applications in the semantics of natural language, the lambda calculus has begun to enjoy a respectable place in both linguistics and computer science.

### Origin of the λ symbol

There is some uncertainty over the reason for Church's use of the Greek letter [lambda](https://en.wikipedia.org/wiki/Lambda) (λ) as the notation for function-abstraction in the lambda calculus, perhaps in part due to conflicting explanations by Church himself. According to Cardone and Hindley (2006):

By the way, why did Church choose the notation "λ"? In [an unpublished 1964 letter to Harald Dickson] he stated clearly that it came from the notation "

x
^ ^ 

{\displaystyle {\hat {x}}}

" used for class-abstraction by [Whitehead and Russell](https://en.wikipedia.org/wiki/Principia_Mathematica), by first modifying "

x
^ ^ 

{\displaystyle {\hat {x}}}

" to "

∧ ∧ 
x

{\displaystyle \land x}

" to distinguish function-abstraction from class-abstraction, and then changing "

∧ ∧ 

{\displaystyle \land }

" to "λ" for ease of printing.

This origin was also reported in [Rosser, 1984, p.338]. On the other hand, in his later years Church told two enquirers that the choice was more accidental: a symbol was needed and λ just happened to be chosen.

[Dana Scott](https://en.wikipedia.org/wiki/Dana_Scott) has also addressed this question in various public lectures.
Scott recounts that he once posed a question about the origin of the lambda symbol to Church's former student and son-in-law John W. Addison Jr., who then wrote his father-in-law a postcard:

Dear Professor Church,

Russell had the [iota operator](https://en.wikipedia.org/wiki/Iota_operator), Hilbert had the [epsilon operator](https://en.wikipedia.org/wiki/Epsilon_operator). Why did you choose lambda for your operator?

According to Scott, Church's entire response consisted of returning the postcard with the following annotation: "[eeny, meeny, miny, moe](https://en.wikipedia.org/wiki/Eeny,_meeny,_miny,_moe)".

## Motivation

[Computable functions](https://en.wikipedia.org/wiki/Computable_function) are a fundamental concept within computer science and mathematics. The lambda calculus provides simple [semantics](https://en.wikipedia.org/wiki/Semantics#Computer_science) for computation which are useful for formally studying properties of computation. The lambda calculus incorporates two simplifications that make its semantics simple.
The first simplification is that the lambda calculus treats functions "anonymously"; it does not give them explicit names. For example, the function

: s
q
u
a
r
e
_ _ 
s
u
m

⁡ ⁡ 
(
x
,
y
)
=

x

2

+

y

2

{\displaystyle \operatorname {square\_sum} (x,y)=x^{2}+y^{2}}

can be rewritten in *anonymous form* as

: (
x
,
y
)
↦ ↦ 

x

2

+

y

2

{\displaystyle (x,y)\mapsto x^{2}+y^{2}}

(which is read as "a [tuple](https://en.wikipedia.org/wiki/Tuple) of x and y is [mapped](https://en.wikipedia.org/wiki/Maplet) to 

x

2

+

y

2

{\textstyle x^{2}+y^{2}}

"). Similarly, the function

: id
⁡ ⁡ 
(
x
)
=
x

{\displaystyle \operatorname {id} (x)=x}

can be rewritten in anonymous form as

: x
↦ ↦ 
x

{\displaystyle x\mapsto x}

where the input is simply mapped to itself.

The second simplification is that the lambda calculus only uses functions of a single input. An ordinary function that requires two inputs, for instance the 

s
q
u
a
r
e
_ _ 
s
u
m

{\textstyle \operatorname {square\_sum} }

 function, can be reworked into an equivalent function that accepts a single input, and as output returns *another* function, that in turn accepts a single input. For example,

: (
x
,
y
)
↦ ↦ 

x

2

+

y

2

{\displaystyle (x,y)\mapsto x^{2}+y^{2}}

can be reworked into

: x
↦ ↦ 
(
y
↦ ↦ 
(

x

2

+

y

2

)
)

{\displaystyle x\mapsto (y\mapsto (x^{2}+y^{2}))}

This method, known as [currying](https://en.wikipedia.org/wiki/Currying), transforms a function that takes multiple arguments into a chain of functions each with a single argument.

[Function application](https://en.wikipedia.org/wiki/Function_application) of the 

s
q
u
a
r
e
_ _ 
s
u
m

{\textstyle \operatorname {square\_sum} }

 function to the arguments (5, 2), yields at once

: (
(
x
,
y
)
↦ ↦ 

x

2

+

y

2

)
(
5
,
2
)

{\textstyle ((x,y)\mapsto x^{2}+y^{2})(5,2)}
: =

5

2

+

2

2

{\textstyle =5^{2}+2^{2}}
: =
29

{\textstyle =29}

,

whereas evaluation of the curried version requires one more step

: (

(

x
↦ ↦ 
(
y
↦ ↦ 

x

2

+

y

2

)

)

(
5
)

)

(
2
)

{\textstyle {\Bigl (}{\bigl (}x\mapsto (y\mapsto x^{2}+y^{2}){\bigr )}(5){\Bigr )}(2)}
: =
(
y
↦ ↦ 

5

2

+

y

2

)
(
2
)

{\textstyle =(y\mapsto 5^{2}+y^{2})(2)}

 // the definition of 

x

{\displaystyle x}

 has been used with 

5

{\displaystyle 5}

 in the inner expression. This is like β-reduction.
: =

5

2

+

2

2

{\textstyle =5^{2}+2^{2}}

 // the definition of 

y

{\displaystyle y}

 has been used with 

2

{\displaystyle 2}

. Again, similar to β-reduction.
: =
29

{\textstyle =29}

to arrive at the same result.

In lambda calculus, functions are taken to be '[first class values](https://en.wikipedia.org/wiki/First-class_object)', so functions may be used as the inputs, or be returned as outputs from other functions. For example, the lambda term 

λ λ 
x
.
x

{\displaystyle \lambda x.x}

 represents the [identity function](https://en.wikipedia.org/wiki/Identity_function), 

x
↦ ↦ 
x

{\displaystyle x\mapsto x}

. Further, 

λ λ 
x
.
y

{\displaystyle \lambda x.y}

 represents the *constant function* 

x
↦ ↦ 
y

{\displaystyle x\mapsto y}

, the function that always returns 

y

{\displaystyle y}

, no matter the input. As an example of a function operating on functions, the [function composition](https://en.wikipedia.org/wiki/Function_composition) can be defined as 

λ λ 
f
.
λ λ 
g
.
λ λ 
x
.
(
f
(
g
x
)
)

{\displaystyle \lambda f.\lambda g.\lambda x.(f(gx))}

.

## Normal forms and confluence

It can be shown that β-reduction is [confluent](https://en.wikipedia.org/wiki/Confluence_(abstract_rewriting)) when working up to α-conversion (i.e. we consider two normal forms to be equal if it is possible to α-convert one into the other). If [repeated application](https://en.wikipedia.org/wiki/Reduction_strategy_(lambda_calculus)) of the reduction steps eventually terminates, then by the [Church–Rosser theorem](https://en.wikipedia.org/wiki/Church%E2%80%93Rosser_theorem) it will produce a unique [β-normal form](https://en.wikipedia.org/wiki/Beta_normal_form). However, the untyped lambda calculus as a [rewriting rule](https://en.wikipedia.org/wiki/Rewrite_system) under β-reduction is neither [strongly normalising](https://en.wikipedia.org/wiki/Strongly_normalising) nor [weakly normalising](https://en.wikipedia.org/wiki/Weakly_normalising); there are terms with no normal form such as **Ω**.

Considering individual terms, both strongly normalising terms and weakly normalising terms have a unique normal form. For strongly normalising terms, any reduction strategy is guaranteed to yield the normal form, whereas for weakly normalising terms, some reduction strategies may fail to find it.

## Encoding datatypes

The basic lambda calculus may be used to model [arithmetic](https://en.wikipedia.org/wiki/Arithmetic), Booleans, data structures, and recursion, as illustrated in the following sub-sections *i*, *ii*, *iii*, and *§ iv*.

### Arithmetic in lambda calculus

There are several possible ways to define the [natural numbers](https://en.wikipedia.org/wiki/Natural_number) in lambda calculus, but by far the most common are the [Church numerals](https://en.wikipedia.org/wiki/Church_numeral), which can be defined as follows:

: 0 := λ*f*.λ*x*.*x*
: 1 := λ*f*.λ*x*.*f* *x*
: 2 := λ*f*.λ*x*.*f* (*f* *x*)
: 3 := λ*f*.λ*x*.*f* (*f* (*f* *x*))

and so on. Or using an alternative syntax allowing multiple uncurried arguments to a function:

: 0 := λ*fx*.*x*
: 1 := λ*fx*.*f* *x*
: 2 := λ*fx*.*f* (*f* *x*)
: 3 := λ*fx*.*f* (*f* (*f* *x*))

A Church numeral is a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function)—it takes a single-argument function *f*, and returns another single-argument function. The Church numeral *n* is a function that takes a function *f* as argument and returns the *n*-th [composition](https://en.wikipedia.org/wiki/Function_composition) of *f*, i.e. the function *f* composed with itself *n* times. This is denoted *f* and is in fact the *n*-th power of *f* (considered as an operator); *f* is defined to be the identity function. Functional composition is [associative](https://en.wikipedia.org/wiki/Function_composition#Properties), and so, such repeated compositions of a single function *f* obey two [laws of exponents](https://en.wikipedia.org/wiki/Laws_of_exponents), *f*∘*f* = *f* and (*f*) = *f*, which is why these numerals can be used for arithmetic. (In Church's original lambda calculus, the formal parameter of a lambda expression was required to occur at least once in the function body, which made the above definition of 0 impossible.)

One way of thinking about the Church numeral *n*, which is often useful when analyzing programs, is as an instruction 'repeat *n* times'. For example, using the PAIR and NIL functions defined below, one can define a function that constructs a ([linked](https://en.wikipedia.org/wiki/Linked_list)) [list](https://en.wikipedia.org/wiki/Cons#Lists) of *n* elements all equal to *x* by repeating 'prepend another *x* element' *n* times, starting from an empty list. The lambda term

: λ*n*.λ*x*.*n* (PAIR *x*) NIL

creates, given a Church numeral *n* and some *x*, a sequence of *n* applications

: PAIR *x* (PAIR *x*...(PAIR *x* NIL)...)

By varying what is being repeated, and what argument(s) that function being repeated is applied to, a great many different effects can be achieved.

We can define a successor function, which takes a Church numeral *n* and returns its successor *n* + 1 by performing one additional application of the function *f* it is supplied with, where (*n f x*) means "*n* applications of *f* starting from *x*":

: SUCC := λ*n*.λ*f*.λ*x*.*f* (*n* *f* *x*)

Because the *m*-th composition of *f* composed with the *n*-th composition of *f* gives the *m*+*n*-th composition of *f*, *f*∘*f* = *f*, addition can be defined as

: PLUS := λ*m*.λ*n*.λ*f*.λ*x*.*m* *f* (*n* *f* *x*)

PLUS can be thought of as a function taking two natural numbers as arguments and returning a natural number; it can be verified that

: PLUS 2 3

and

: 5

are beta-equivalent lambda expressions. Since adding *m* to a number can be accomplished by repeating the successor operation *m* times, an alternative definition is:

: PLUS′ := λ*m*.λ*n*.*m* SUCC *n*

Similarly, following (*f*) = *f*, multiplication can be defined as

: MULT := λ*m*.λ*n*.λ*f*.*m* (*n* *f*)

Thus multiplication of Church numerals is simply their composition as functions. Alternatively

: MULT′ := λ*m*.λ*n*.*m* (PLUS *n*) 0

since multiplying *m* and *n* is the same as adding *n* repeatedly, *m* times, starting from zero.

Exponentiation, being the repeated multiplication of a number with itself, translates as a repeated composition of a Church numeral with itself, as a function. And repeated composition is what Church numerals *are*:

: POW := λ*b*.λ*n*.*n* *b*

Alternatively here as well,

: POW′ := λ*b*.λ*n*.*n* (MULT *b*) 1

Simplifying, it becomes

: POW′′ := λ*b*.λ*n*.λ*f*.*n* *b* *f*

but that is just an eta-expanded version of POW we already have, above.

The *predecessor* function, specified by two equations PRED (SUCC *n*) = *n* and PRED 0 = 0, is considerably more involved. The formula

: PRED := λ*n*.λ*f*.λ*x*.*n* (λ*g*.λ*h*.*h* (*g* *f*)) (λ*u*.*x*) (λ*u*.*u*)

can be validated by showing inductively that if *T* denotes (λ*g*.λ*h*.*h* (*g* *f*)), then T(λ*u*.*x*) = (λ*h*.*h*(*f*(*x*))) for *n* > 0. Two other definitions of PRED are given below, one using conditionals and the other using pairs. With the predecessor function, subtraction is straightforward. Defining

: SUB := λ*m*.λ*n*.*n* PRED *m*,

SUB *m* *n* yields *m* − *n* when *m* > *n* and 0 otherwise.

### Logic and predicates

By convention, the following two definitions (known as Church Booleans) are used for the Boolean values TRUE and FALSE:

: TRUE := λ*x*.λ*y*.*x*
: FALSE := λ*x*.λ*y*.*y*

Then, with these two lambda terms, we can define some logic operators (these are just possible formulations; other expressions could be equally correct):

: AND := λ*p*.λ*q*.*p* *q* *p*
: OR := λ*p*.λ*q*.*p* *p* *q*
: NOT := λ*p*.*p* FALSE TRUE
: IFTHENELSE := λ*p*.λ*a*.λ*b*.*p* *a* *b*

We are now able to compute some logic functions, for example:

: AND TRUE FALSE
≡ (λ*p*.λ*q*.*p* *q* *p*) TRUE FALSE →β TRUE FALSE TRUE
≡ (λ*x*.λ*y*.*x*) FALSE TRUE →β FALSE

and we see that AND TRUE FALSE is equivalent to FALSE.

A *predicate* is a function that returns a Boolean value. The most fundamental predicate is ISZERO, which returns TRUE if its argument is the Church numeral 0, but FALSE if its argument were any other Church numeral:

: ISZERO := λ*n*.*n* (λ*x*.FALSE) TRUE

The following predicate tests whether the first argument is less-than-or-equal-to the second:

: LEQ := λ*m*.λ*n*.ISZERO (SUB *m* *n*),

and since *m* = *n* if LEQ *m* *n* and LEQ *n* *m*, it is straightforward to build a predicate for numerical equality.

The availability of predicates and the above definition of TRUE and FALSE make it convenient to write "if-then-else" expressions in lambda calculus. For example, the predecessor function can be defined as:

: PRED := λ*n*.*n* (λ*g*.λ*k*.ISZERO (*g* 1) *k* (PLUS (*g* *k*) 1)) (λ*v*.0) 0

which can be verified by showing inductively that *n* (λ*g*.λ*k*.ISZERO (*g* 1) *k* (PLUS (*g* *k*) 1)) (λ*v*.0) is the add *n* − 1 function for *n* > 0.

### Pairs

A pair (2-tuple) encapsulates two values, and is represented by an abstraction that expects a handler to which it will pass the two values. FIRST returns the first element of the pair, and SECOND returns the second.

: PAIR := λ*x*.λ*y*.λ*f*.*f* *x* *y*
: FIRST := λ*p*.*p* (λ*x*.λ*y*.*x*)
: SECOND := λ*p*.*p* (λ*x*.λ*y*.*y*)

A linked list can  either be NIL, representing the empty list, or a PAIR of an element (so-called *head*) and a smaller list (*tail*). The predicate NULL returns TRUE for the value NIL, and FALSE for a non-empty list:

: NIL := λ*f*.TRUE
: NULL := λ*p*.*p* (λ*x*.λ*y*.FALSE)

Alternatively, with NIL := FALSE, the construct (*l* (λ*h*.λ*t*.λ*z*. ...*h*...*t*...) _on_nil_) obviates the need for an explicit NULL test:

: NIL := λ*x*.λ*y*.*y*
: NULL := λ*l*.*l* (λ*h*.λ*t*.λ*z*.FALSE) TRUE

As an example of the use of pairs, the shift-and-increment function that maps (*m*, *n*) to (*n*, *n* + 1) can be defined as

: Φ := λ*p*.PAIR (SECOND *p*) (SUCC (SECOND *p*))
: Ψ := λ*fp*.PAIR (SECOND *p*) (f (SECOND *p*))

which  allows us to give perhaps the most transparent version of the predecessor function:

: PRED := λ*n*.FIRST (*n* (Ψ SUCC) (PAIR 0 0))
: = λ*nfx*.FIRST (*n* (Ψ *f*) (PAIR *x x*))

Substituting the definitions and simplifying the resulting expression leads to streamlined definitions

: = λ*nfx*.*n* (λ*rab*.*rb*(*fb*)) (λ*ab*.*a*) *x x*
: = λ*nfx*.*n* (λ*rij*.*j*(*rjf*)) (λ*ij*.*x*) I I
: = λ*nfx*.*n* (λ*rij*.*i*(*rjj*)) (λ*ij*.*x*) I *f*
: = λ*nfx*.*n* (λ*ri*.*i*(*rf*)) (λ*i*.*x*) I

(where  I := λ*x*.*x* ), evidently leading back to the original.

## Additional programming techniques

There is a considerable body of [programming idioms](https://en.wikipedia.org/wiki/Programming_idiom) for lambda calculus. Many of these were originally developed in the context of using lambda calculus as a foundation for [programming language semantics](https://en.wikipedia.org/wiki/Semantics_(computer_science)), effectively using lambda calculus as a [low-level programming language](https://en.wikipedia.org/wiki/Low-level_programming_language). Because several programming languages include the lambda calculus (or something very similar) as a fragment, these techniques also see use in practical programming, but may then be perceived as obscure or foreign.

### Named constants

In lambda calculus, a [library](https://en.wikipedia.org/wiki/Library_(computing)) would take the form of a collection of previously defined functions, which as lambda-terms are merely particular constants. The pure lambda calculus does not have a concept of named constants since all atomic lambda-terms are variables, but one can emulate having named constants by setting aside a variable as the name of the constant, using abstraction to bind that variable in the main body, and apply that abstraction to the intended definition. Thus to use *f* to mean *N* (some explicit lambda-term) in *M* (another lambda-term, the "main program"), one can say

: (λ*f*.*M*) *N*

Authors often introduce [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar), such as let, to permit writing the above in the more intuitive order

: let *f* = *N* in *M*

By chaining such definitions, one can write a lambda calculus "program" as zero or more function definitions, followed by one lambda-term using those functions that constitutes the main body of the program.

A notable restriction of this let is that the name *f* may not be referenced in *N*, for *N* is outside the scope of the abstraction binding *f*, which is *M*; this means a recursive function definition cannot be written with let. The letrec construction would allow writing recursive function definitions, where the scope of the abstraction binding *f* includes *N* as well as *M*. Or self-application a-la that which leads to **Y** combinator could be used.

### Recursion and fixed points

[Recursion](https://en.wikipedia.org/wiki/Recursion) is when a function invokes itself. What would a value be which were to represent such a function? It has to refer to itself somehow inside itself, just as the definition refers to itself inside itself. If this value were to contain itself by value, it would have to be of infinite size, which is impossible. Other notations, which support recursion natively, overcome this by referring to the function *by name* inside its definition. Lambda calculus cannot express this, since in it there simply are no names for terms to begin with, only arguments' names, i.e. parameters in abstractions. Thus, a lambda expression can receive itself as its argument and refer to (a copy of) itself via the corresponding parameter's name. This will work fine in case it was indeed called with itself as an argument. For example,  (λ*x*.*x* *x*) *E* = (*E E*) will express recursion when *E* is an abstraction which is applying its parameter to itself inside its body to express a recursive call. Since this parameter receives *E* as its value, its self-application will be the same (*E E*) again.

As a concrete example, consider the [factorial](https://en.wikipedia.org/wiki/Factorial) function F(*n*), recursively defined by

: F(*n*) = 1, if *n* = 0; else *n* × F(*n* − 1).

In the lambda expression which is to represent this function, a *parameter* (typically the first one) will be assumed to receive the lambda expression itself as its value, so that calling it with itself as its first argument will amount to the recursive call. Thus to achieve recursion, the intended-as-self-referencing argument (called *s* here, reminiscent of "self", or "self-applying") must always be passed to itself within the function body at a recursive call point:

: E := λ*s*. λ*n*.(1, if *n* = 0; else *n* × (*s* *s* (*n*−1)))
with  *s s n* = F *n* = E E *n*  to hold, so  *s* = E  and
: F := (λ*x*.*x* *x*) E = E E

and we have

: F = E E = λ*n*.(1, if *n* = 0; else *n* × (E E (*n*−1)))

Here *s s* becomes *the same*  (E E) inside the result of the application  (E E), and using the same function for a call is the definition of what recursion is. The self-application achieves replication here, passing the function's lambda expression on to the next invocation as an argument value, making it available to be referenced there by the parameter name *s* to be called via the self-application *s* *s*, again and again as needed, each time *re-creating* the lambda-term  F = E E.

The application is an additional step just as the name lookup would be. It has the same delaying effect. Instead of having  F inside itself as a whole *up-front*, delaying its re-creation until the next call makes its existence possible by having two *finite* lambda-terms  E inside it re-create it on the fly *later* as needed.

This self-applicational approach solves it, but requires re-writing each recursive call as a self-application. We would like to have a generic solution, without the need for any re-writes:

: G := λ*r*. λ*n*.(1, if *n* = 0; else *n* × (*r* (*n*−1)))
with  *r* *x* = F *x* = G *r* *x*  to hold, so  *r* = G *r* =: FIX G  and
: F := FIX G  where  FIX *g* = (*r* where *r* = *g* *r*) = *g* (FIX *g*)
so that  FIX G = G (FIX G) = (λ*n*.(1, if *n* = 0; else *n* × ((FIX G) (*n*−1))))

Given a lambda term with first argument representing recursive call (e.g. G here), the *fixed-point* combinator FIX will return a self-replicating lambda expression representing the recursive function (here, F). The function does not need to be explicitly passed to itself at any point, for the self-replication is arranged in advance, when it is created, to be done each time it is called. Thus the original lambda expression (FIX G) is re-created inside itself, at call-point, achieving [self-reference](https://en.wikipedia.org/wiki/Self-reference).

In fact, there are many possible definitions for this FIX operator, the simplest of them being:

: **Y** := λ*g*.(λ*x*.*g* (*x* *x*)) (λ*x*.*g* (*x* *x*))

In the lambda calculus, **Y** *g*  is a fixed-point of *g*, as it expands to:

: **Y** *g*
: ~> (λ*h*.(λ*x*.*h* (*x* *x*)) (λ*x*.*h* (*x* *x*))) *g*
: ~> (λ*x*.*g* (*x* *x*)) (λ*x*.*g* (*x* *x*))
: ~> *g* ((λ*x*.*g* (*x* *x*)) (λ*x*.*g* (*x* *x*)))
: <~ *g* (**Y** *g*)

Now, to perform the recursive call to the factorial function for an argument *n*, we would simply call (**Y** G) *n*. Given *n* = 4, for example, this gives:

: (**Y** G) 4
: ~> G (**Y** G) 4
: ~> (λ*r*.λ*n*.(1, if *n* = 0; else *n* × (*r* (*n*−1)))) (**Y** G) 4
: ~> (λ*n*.(1, if *n* = 0; else *n* × ((**Y** G) (*n*−1)))) 4
: ~> 1, if 4 = 0; else 4 × ((**Y** G) (4−1))
: ~> 4 × (G (**Y** G) (4−1))
: ~> 4 × ((λ*n*.(1, if *n* = 0; else *n* × ((**Y** G) (*n*−1)))) (4−1))
: ~> 4 × (1, if 3 = 0; else 3 × ((**Y** G) (3−1)))
: ~> 4 × (3 × (G (**Y** G) (3−1)))
: ~> 4 × (3 × ((λ*n*.(1, if *n* = 0; else *n* × ((**Y** G) (*n*−1)))) (3−1)))
: ~> 4 × (3 × (1, if 2 = 0; else 2 × ((**Y** G) (2−1))))
: ~> 4 × (3 × (2 × (G (**Y** G) (2−1))))
: ~> 4 × (3 × (2 × ((λ*n*.(1, if *n* = 0; else *n* × ((**Y** G) (*n*−1)))) (2−1))))
: ~> 4 × (3 × (2 × (1, if 1 = 0; else 1 × ((**Y** G) (1−1)))))
: ~> 4 × (3 × (2 × (1 × (G (**Y** G) (1−1)))))
: ~> 4 × (3 × (2 × (1 × ((λ*n*.(1, if *n* = 0; else *n* × ((**Y** G) (*n*−1)))) (1−1)))))
: ~> 4 × (3 × (2 × (1 × (1, if 0 = 0; else 0 × ((**Y** G) (0−1))))))
: ~> 4 × (3 × (2 × (1 × (1))))
: ~> 24

Every recursively defined function can be seen as a fixed point of some suitably defined higher order function (also known as functional) closing over the recursive call with an extra argument. Therefore, using **Y**, every recursive function can be expressed as a lambda expression. In particular, we can now cleanly define the subtraction, multiplication, and comparison predicates of natural numbers, using recursion.

When [Y combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator) is coded directly in a [strict programming language](https://en.wikipedia.org/wiki/Strict_programming_language), the applicative order of evaluation used in such languages will cause an attempt to fully expand the internal self-application 

(
x
x
)

{\displaystyle (xx)}

 prematurely, causing [stack overflow](https://en.wikipedia.org/wiki/Stack_overflow) or, in case of [tail call optimization](https://en.wikipedia.org/wiki/Tail_call_optimization), indefinite looping. A delayed variant of Y, the [Z combinator](https://en.wikipedia.org/wiki/Z_combinator), can be used in such languages. It has the internal self-application hidden behind an extra abstraction through eta-expansion, as 

(
λ λ 
v
.
x
x
v
)

{\displaystyle (\lambda v.xxv)}

, thus preventing its premature expansion:

: Z
=
λ λ 
f
.
(
λ λ 
x
.
f
(
λ λ 
v
.
x
x
v
)
)
 
(
λ λ 
x
.
f
(
λ λ 
v
.
x
x
v
)
)
 
.

{\displaystyle Z=\lambda f.(\lambda x.f(\lambda v.xxv))\ (\lambda x.f(\lambda v.xxv))\ .}

### Standard terms

Certain terms have commonly accepted names:

: **I** := λ*x*.*x*
: **S** := λ*x*.λ*y*.λ*z*.*x* *z* (*y* *z*)
: **K** := λ*x*.λ*y*.*x*
: **B** := λ*x*.λ*y*.λ*z*.*x* (*y* *z*)
: **C** := λ*x*.λ*y*.λ*z*.*x* *z* *y*
: **W** := λ*x*.λ*y*.*x* *y* *y*
: **ω** or **Δ** or **U** := λ*x*.*x* *x*
: **Ω** := **ω ω**

**I** is the identity function. **SK** and **BCKW** form complete [combinator calculus](https://en.wikipedia.org/wiki/Combinator_calculus) systems that can express any lambda term - see 
the next section. **Ω** is **UU**, the smallest term that has no normal form. **YI** is another such term.
**Y** is standard and defined above, and can also be defined as **Y**=**BU(CBU)**, so that **Y**g=g(**Y**g). TRUE and FALSE defined above are commonly abbreviated as **T** and **F**.

### Abstraction elimination

If *N* is a lambda-term without abstraction, but possibly containing named constants ([combinators](https://en.wikipedia.org/wiki/Combinatory_logic)), then there exists a lambda-term *T*(*x*,*N*) which is equivalent to λ*x*.*N* but lacks abstraction (except as part of the named constants, if these are considered non-atomic). This can also be viewed as anonymising variables, as *T*(*x*,*N*) removes all occurrences of *x* from *N*, while still allowing argument values to be substituted into the positions where *N* contains an *x*. The conversion function *T* can be defined by:

: *T*(*x*, *x*) := **I**
: *T*(*x*, *N*) := **K** *N* if *x* is not free in *N*.
: *T*(*x*, *M* *N*) := **S** *T*(*x*, *M*) *T*(*x*, *N*)

In either case, a term of the form *T*(*x*,*N*) *P* is reduced by having the initial combinator **I**, **K**, or **S** grab the argument *P*, just like β-reduction of (λ*x*.*N*) *P* would do. **I** returns that argument. **K** *N* throws the argument away, just like (λ*x*.*N*) does when *x* has no free occurrence in *N*. **S** passes the argument on to both subterms of the application, and then applies the result of the first to the result of the second, just like (λ*x*.*MN*)*P* is the same as ((λ*x*.*M*)*P*) ((λ*x*.*N*)*P*).

The combinators **B** and **C** are similar to **S**, but pass the argument on to only one subterm of an application (**B** to the "argument" subterm and **C** to the "function" subterm), thus saving a subsequent **K** if there is no occurrence of *x* in one subterm. In comparison to **B** and **C**, the **S** combinator actually conflates two functionalities: rearranging arguments, and duplicating an argument so that it may be used in two places. The **W** combinator does only the latter, yielding the [B, C, K, W system](https://en.wikipedia.org/wiki/B,_C,_K,_W_system) as an alternative to [SKI combinator calculus](https://en.wikipedia.org/wiki/SKI_combinator_calculus).

## Typed lambda calculus

A *typed lambda calculus* is a typed [formalism](https://en.wikipedia.org/wiki/Formalism_(mathematics)) that uses the lambda-symbol (

λ λ 

{\displaystyle \lambda }

) to denote anonymous function abstraction. In this context, types are usually objects of a syntactic nature that are assigned to lambda terms; the exact nature of a type depends on the calculus considered (see [Kinds of typed lambda calculi](https://en.wikipedia.org/wiki/Typed_lambda_calculus#Kinds_of_typed_lambda_calculi)). From a certain point of view, typed lambda calculi can be seen as refinements of the untyped lambda calculus but from another point of view, they can also be considered the more fundamental theory and *untyped lambda calculus* a special case with only one type.

Typed lambda calculi are foundational programming languages and are the base of typed functional programming languages such as ML and Haskell and, more indirectly, typed [imperative programming](https://en.wikipedia.org/wiki/Imperative_programming) languages. Typed lambda calculi play an important role in the design of [type systems](https://en.wikipedia.org/wiki/Type_system) for programming languages; here typability usually captures desirable properties of the program, e.g., the program will not cause a memory access violation.

Typed lambda calculi are closely related to [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic) and [proof theory](https://en.wikipedia.org/wiki/Proof_theory) via the [Curry–Howard isomorphism](https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_isomorphism) and they can be considered as the [internal language](https://en.wikipedia.org/wiki/Internal_language) of classes of [categories](https://en.wikipedia.org/wiki/Category_theory), e.g., the simply typed lambda calculus is the language of a [Cartesian closed category](https://en.wikipedia.org/wiki/Cartesian_closed_category) (CCC).

## Reduction strategies

Whether a term is normalising or not, and how much work needs to be done in normalising it if it is, depends to a large extent on the reduction strategy used. Common lambda calculus reduction strategies include:

**Normal order**
: The leftmost outermost redex is reduced first. That is, whenever possible, arguments are substituted into the body of an abstraction before the arguments are reduced. If a term has a beta-normal form, normal order reduction will always reach that normal form.

**Applicative order**
: The leftmost innermost redex is reduced first. As a consequence, a function's arguments are always reduced before they are substituted into the function. Unlike normal order reduction, applicative order reduction may fail to find the beta-normal form of an expression, even if such a normal form exists. For example, the term 

(

λ λ 
x
.
y

(
λ λ 
z
.
(
z
z
)

λ λ 
z
.
(
z
z
)
)

)

{\displaystyle (\;\lambda x.y\;\;(\lambda z.(zz)\;\lambda z.(zz))\;)}

 is reduced to itself by applicative order, while normal order reduces it to its beta-normal form 

y

{\displaystyle y}

.

**Full β-reductions**
: Any redex can be reduced at any time. This means essentially the lack of any particular reduction strategy—with regard to reducibility, "all bets are off".

Weak reduction strategies do not reduce under lambda abstractions:

**Call by value**
: Like applicative order, but no reductions are performed inside abstractions. This is similar to the evaluation order of strict languages like C: the arguments to a function are evaluated before calling the function, and function bodies are not even partially evaluated until the arguments are substituted in.

**Call by name**
: Like normal order, but no reductions are performed inside abstractions. For example, λ*x*.(λ*y*.*y*)*x* is in normal form according to this strategy, although it contains the redex (λ*y*.*y*)*x*.

Strategies with sharing reduce computations that are "the same" in parallel:

**Optimal reduction**
: As normal order, but computations that have the same label are reduced simultaneously.

**Call by need**
: As call by name (hence weak), but function applications that would duplicate terms instead name the argument. The argument may be evaluated "when needed", at which point the name binding is updated with the reduced value. This can save time compared to normal order evaluation.

## Computability

There is no algorithm that takes as input any two lambda expressions and outputs TRUE or FALSE depending on whether one expression reduces to the other. More precisely, no [computable function](https://en.wikipedia.org/wiki/Computable_function) can [decide](https://en.wikipedia.org/wiki/Decision_problem) the question. This was historically the first problem for which undecidability could be proven. As usual for such a proof, *computable* means computable by any [model of computation](https://en.wikipedia.org/wiki/Model_of_computation) that is [Turing complete](https://en.wikipedia.org/wiki/Turing_complete). In fact computability can itself be defined via the lambda calculus: a function *F*: **N** → **N** of natural numbers is a computable function if and only if there exists a lambda expression *f* such that for every pair of *x*, *y* in **N**, *F*(*x*)=*y* if and only if *f* *x* =β *y*, where *x* and *y* are the [Church numerals](https://en.wikipedia.org/wiki/Church_numeral) corresponding to *x* and *y*, respectively and =β meaning equivalence with β-reduction. See the [Church–Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis) for other approaches to defining computability and their equivalence.

Church's proof of uncomputability first reduces the problem to determining whether a given lambda expression has a [normal form](https://en.wikipedia.org/wiki/Beta_normal_form). Then he assumes that this predicate is computable, and can hence be expressed in lambda calculus. Building on earlier work by Kleene and constructing a [Gödel numbering](https://en.wikipedia.org/wiki/G%C3%B6del_numbering) for lambda expressions, he constructs a lambda expression *e* that closely follows the proof of [Gödel's first incompleteness theorem](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems). If *e* is applied to its own Gödel number, a contradiction results.

## Complexity

The notion of [computational complexity](https://en.wikipedia.org/wiki/Computational_complexity_theory) for the lambda calculus is a bit tricky, because the cost of a β-reduction may vary depending on how it is implemented. 
To be precise, one must somehow find the location of all of the occurrences of the bound variable *V* in the expression *E*, implying a time cost, or one must keep track of the locations of free variables in some way, implying a space cost. A naïve search for the locations of *V* in *E* is [*O*(*n*)](https://en.wikipedia.org/wiki/Big_O_notation) in the length *n* of *E*. [Director strings](https://en.wikipedia.org/wiki/Director_string) were an early approach that traded this time cost for a quadratic space usage. More generally this has led to the study of systems that use [explicit substitution](https://en.wikipedia.org/wiki/Explicit_substitution).

In 2014, it was shown that the number of β-reduction steps taken by normal order reduction to reduce a term is a *reasonable* time cost model, that is, the reduction can be simulated on a Turing machine in time polynomially proportional to the number of steps. This was a long-standing open problem, due to *size explosion*, the existence of lambda terms which grow exponentially in size for each β-reduction. The result gets around this by working with a compact shared representation. The result makes clear that the amount of space needed to evaluate a lambda term is not proportional to the size of the term during reduction. It is not currently known what a good measure of space complexity would be.

An unreasonable model does not necessarily mean inefficient. [Optimal reduction](https://en.wikipedia.org/wiki/Reduction_strategy#Optimal_reduction) reduces all computations with the same label in one step, avoiding duplicated work, but the number of parallel β-reduction steps to reduce a given term to normal form is approximately linear in the size of the term. This is far too small to be a reasonable cost measure, as any Turing machine may be encoded in the lambda calculus in size linearly proportional to the size of the Turing machine. The true cost of reducing lambda terms is not due to β-reduction per se but rather the handling of the duplication of redexes during β-reduction. It is not known if optimal reduction implementations are reasonable when measured with respect to a reasonable cost model such as the number of leftmost-outermost steps to normal form, but it has been shown for fragments of the lambda calculus that the optimal reduction algorithm is efficient and has at most a quadratic overhead compared to leftmost-outermost. In addition the BOHM prototype implementation of optimal reduction outperformed both [Caml](https://en.wikipedia.org/wiki/Caml) Light and Haskell on pure lambda terms.

## Lambda calculus and programming languages

As pointed out by [Peter Landin](https://en.wikipedia.org/wiki/Peter_Landin)'s 1965 paper "*A Correspondence between [ALGOL 60](https://en.wikipedia.org/wiki/ALGOL_60) and Church's Lambda-notation*", sequential [procedural programming](https://en.wikipedia.org/wiki/Procedural_programming) languages can be understood in terms of the lambda calculus, which provides the basic mechanisms for procedural abstraction and procedure (subprogram) application.

### Anonymous functions

For example, in [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) the "square" function can be expressed as a lambda expression as follows:

```
(lambda x: x**2)
```

The above example is an expression that evaluates to a first-class function. The symbol `lambda` creates an anonymous function, given a list of parameter names—just the single argument `x`, in this case—and an expression that is evaluated as the body of the function, `x**2`. Anonymous functions are sometimes called *lambda expressions.*

[Pascal](https://en.wikipedia.org/wiki/Pascal_(programming_language)) and many other imperative languages have long supported passing [subprograms](https://en.wikipedia.org/wiki/Function_(computer_programming)) as [arguments](https://en.wikipedia.org/wiki/Parameter_(computer_programming)) to other subprograms through the mechanism of [function pointers](https://en.wikipedia.org/wiki/Function_pointer). However, function pointers are an insufficient condition for functions to be [first class](https://en.wikipedia.org/wiki/First-class_function) datatypes, because a function is a first class datatype if and only if new instances of the function can be created at [runtime](https://en.wikipedia.org/wiki/Execution_(computing)#runtime). Such runtime creation of functions is supported in [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk), [JavaScript](https://en.wikipedia.org/wiki/JavaScript), [Wolfram Language](https://en.wikipedia.org/wiki/Wolfram_Language), and more recently in [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)), [Eiffel](https://en.wikipedia.org/wiki/Eiffel_(programming_language)) (as agents), [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) (as delegates) and [C++11](https://en.wikipedia.org/wiki/C%2B%2B11), among others.

### Parallelism and concurrency

The [Church–Rosser](https://en.wikipedia.org/wiki/Church%E2%80%93Rosser_theorem) property of the lambda calculus means that evaluation (β-reduction) can be carried out in *any order*, even in parallel. This means that various [nondeterministic](https://en.wikipedia.org/wiki/Nondeterministic_algorithm) [evaluation strategies](https://en.wikipedia.org/wiki/Evaluation_strategy) are relevant. However, the lambda calculus does not offer any explicit constructs for [parallelism](https://en.wikipedia.org/wiki/Parallel_computing). One can add constructs such as [futures](https://en.wikipedia.org/wiki/Futures_and_promises) to the lambda calculus. Other [process calculi](https://en.wikipedia.org/wiki/Process_calculi) have been developed for describing communication and concurrency.

## Semantics

The fact that lambda calculus terms act as functions on other lambda calculus terms, and even on themselves, led to questions about the semantics of the lambda calculus. Could a sensible meaning be assigned to lambda calculus terms? The natural semantics was to find a set *D* isomorphic to the function space *D* → *D*, of functions on itself. However, no nontrivial such *D* can exist, by [cardinality](https://en.wikipedia.org/wiki/Cardinality) constraints because the set of all functions from *D* to *D* has greater cardinality than *D*, unless *D* is a [singleton set](https://en.wikipedia.org/wiki/Singleton_set).

In the 1970s, [Dana Scott](https://en.wikipedia.org/wiki/Dana_Scott) showed that if only [continuous functions](https://en.wikipedia.org/wiki/Scott_continuity) were considered, a set or [domain](https://en.wikipedia.org/wiki/Domain_theory) *D* with the required property could be found, thus providing a [model](https://en.wikipedia.org/wiki/Model_theory) for the lambda calculus.

This work also formed the basis for the [denotational semantics](https://en.wikipedia.org/wiki/Denotational_semantics) of programming languages.

## Variations and extensions

These extensions are in the [lambda cube](https://en.wikipedia.org/wiki/Lambda_cube):

* [Typed lambda calculus](https://en.wikipedia.org/wiki/Typed_lambda_calculus) – Lambda calculus with typed variables (and functions)
* [System F](https://en.wikipedia.org/wiki/System_F) – A typed lambda calculus with type-variables
* [Calculus of constructions](https://en.wikipedia.org/wiki/Calculus_of_constructions) – A typed lambda calculus with types as first-class values

These [formal systems](https://en.wikipedia.org/wiki/Formal_system) are extensions of lambda calculus that are not in the lambda cube:

* [Binary lambda calculus](https://en.wikipedia.org/wiki/Binary_lambda_calculus) – A version of lambda calculus with binary [input/output](https://en.wikipedia.org/wiki/Input/output) (I/O), a binary encoding of terms, and a designated universal machine.
* [Lambda-mu calculus](https://en.wikipedia.org/wiki/Lambda-mu_calculus) – An extension of the lambda calculus for treating [classical logic](https://en.wikipedia.org/wiki/Classical_logic)

These formal systems are variations of lambda calculus:

* [Kappa calculus](https://en.wikipedia.org/wiki/Kappa_calculus) – A first-order analogue of lambda calculus

These formal systems are related to lambda calculus:

* [Combinatory logic](https://en.wikipedia.org/wiki/Combinatory_logic) – A notation for mathematical logic without variables
* [SKI combinator calculus](https://en.wikipedia.org/wiki/SKI_combinator_calculus) – A computational system based on the **S**, **K** and **I** combinators, equivalent to lambda calculus, but reducible without variable substitutions

## See also

* [Applicative computing systems](https://en.wikipedia.org/wiki/Applicative_computing_systems) – Treatment of [objects](https://en.wikipedia.org/wiki/Object_(computer_science)) in the style of the lambda calculus
* [Cartesian closed category](https://en.wikipedia.org/wiki/Cartesian_closed_category) – A setting for lambda calculus in [category theory](https://en.wikipedia.org/wiki/Category_theory)
* [Categorical abstract machine](https://en.wikipedia.org/wiki/Categorical_abstract_machine) – A [model of computation](https://en.wikipedia.org/wiki/Model_of_computation) applicable to lambda calculus
* [Clojure](https://en.wikipedia.org/wiki/Clojure), programming language
* [Curry–Howard isomorphism](https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_isomorphism) – The formal correspondence between programs and [proofs](https://en.wikipedia.org/wiki/Mathematical_proof)
* [De Bruijn index](https://en.wikipedia.org/wiki/De_Bruijn_index) – notation disambiguating alpha conversions
* [De Bruijn notation](https://en.wikipedia.org/wiki/De_Bruijn_notation) – notation using postfix modification functions
* [Domain theory](https://en.wikipedia.org/wiki/Domain_theory) – Study of certain [posets](https://en.wikipedia.org/wiki/Partially_ordered_sets) giving [denotational semantics](https://en.wikipedia.org/wiki/Denotational_semantics) for lambda calculus
* [Evaluation strategy](https://en.wikipedia.org/wiki/Evaluation_strategy) – Rules for the evaluation of expressions in [programming languages](https://en.wikipedia.org/wiki/Programming_language)
* [Explicit substitution](https://en.wikipedia.org/wiki/Explicit_substitution) – The theory of substitution, as used in β-reduction
* [Harrop formula](https://en.wikipedia.org/wiki/Harrop_formula) – A kind of constructive logical formula such that proofs are lambda terms
* [Interaction nets](https://en.wikipedia.org/wiki/Interaction_nets)
* [Kleene–Rosser paradox](https://en.wikipedia.org/wiki/Kleene%E2%80%93Rosser_paradox) – A demonstration that some form of lambda calculus is inconsistent
* [Knights of the Lambda Calculus](https://en.wikipedia.org/wiki/Knights_of_the_Lambda_Calculus) – A semi-fictional organization of LISP and [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) [hackers](https://en.wikipedia.org/wiki/Hacker_(programmer_subculture))
* [Krivine machine](https://en.wikipedia.org/wiki/Krivine_machine) – An abstract machine to interpret call-by-name in lambda calculus
* [Lambda calculus definition](https://en.wikipedia.org/wiki/Lambda_calculus_definition) – Formal definition of the lambda calculus.
* [Let expression](https://en.wikipedia.org/wiki/Let_expression) – An expression closely related to an abstraction.
* [Minimalism (computing)](https://en.wikipedia.org/wiki/Minimalism_(computing))
* [Rewriting](https://en.wikipedia.org/wiki/Rewriting) – Transformation of formulæ in formal systems
* [SECD machine](https://en.wikipedia.org/wiki/SECD_machine) – A [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) designed for the lambda calculus
* [Scott–Curry theorem](https://en.wikipedia.org/wiki/Scott%E2%80%93Curry_theorem) – A theorem about sets of lambda terms
* *[To Mock a Mockingbird](https://en.wikipedia.org/wiki/To_Mock_a_Mockingbird)* – An introduction to [combinatory logic](https://en.wikipedia.org/wiki/Combinatory_logic)
* [Universal Turing machine](https://en.wikipedia.org/wiki/Universal_Turing_machine) – A formal computing machine equivalent to lambda calculus
* [Unlambda](https://en.wikipedia.org/wiki/Unlambda) – A functional [esoteric programming language](https://en.wikipedia.org/wiki/Esoteric_programming_language) based on combinatory logic

## Further reading

* Abelson, Harold & Gerald Jay Sussman. [Structure and Interpretation of Computer Programs](https://en.wikipedia.org/wiki/Structure_and_Interpretation_of_Computer_Programs). [The MIT Press](https://en.wikipedia.org/wiki/The_MIT_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-51087-1](https://en.wikipedia.org/wiki/Special:BookSources/0-262-51087-1).
* [Barendregt, Hendrik Pieter](https://en.wikipedia.org/wiki/Henk_Barendregt) [*Introduction to Lambda Calculus*](http://www.cse.chalmers.se/research/group/logic/TypesSS05/Extra/geuvers.pdf).
* Barendregt, Hendrik Pieter, [The Impact of the Lambda Calculus in Logic and Computer Science](https://www.jstor.org/stable/421013). The Bulletin of Symbolic Logic, Volume 3, Number 2, June 1997.
* Barendregt, Hendrik Pieter, *The Type Free Lambda Calculus* pp1091–1132 of *Handbook of Mathematical Logic*, [North-Holland](https://en.wikipedia.org/wiki/North-Holland_Publishing_Company) (1977) [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-7204-2285-X](https://en.wikipedia.org/wiki/Special:BookSources/0-7204-2285-X)
* Cardone, Felice and Hindley, J. Roger, 2006. [History of Lambda-calculus and Combinatory Logic](http://www.users.waitrose.com/~hindley/SomePapers_PDFs/2006CarHin,HistlamRp.pdf) [Archived](https://web.archive.org/web/20210506154120/http://www.users.waitrose.com/~hindley/SomePapers_PDFs/2006CarHin,HistlamRp.pdf) 2021-05-06 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine). In Gabbay and Woods (eds.), *Handbook of the History of Logic*, vol. 5. Elsevier.
* Church, Alonzo, *An unsolvable problem of elementary number theory*, [American Journal of Mathematics](https://en.wikipedia.org/wiki/American_Journal_of_Mathematics), 58 (1936), pp. 345–363. This paper contains the proof that the equivalence of lambda expressions is in general not decidable.
* Church, Alonzo (1941). [*The Calculi of Lambda-Conversion*](https://archive.org/details/AnnalsOfMathematicalStudies6ChurchAlonzoTheCalculiOfLambdaConversionPrincetonUniversityPress1941). Princeton: Princeton University Press. Retrieved 2020-04-14. ([ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-691-08394-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-691-08394-0))
* [Frink Jr., Orrin](https://en.wikipedia.org/wiki/Orrin_Frink) (1944). ["Review: *The Calculi of Lambda-Conversion* by Alonzo Church"](https://www.ams.org/bull/1944-50-03/S0002-9904-1944-08090-7/S0002-9904-1944-08090-7.pdf) (PDF). *Bulletin of the American Mathematical Society*. **50** (3): 169–172. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1090/s0002-9904-1944-08090-7](https://doi.org/10.1090%2Fs0002-9904-1944-08090-7).
* Kleene, Stephen, *A theory of positive integers in formal logic*, [American Journal of Mathematics](https://en.wikipedia.org/wiki/American_Journal_of_Mathematics), 57 (1935), pp. 153–173 and 219–244. Contains the lambda calculus definitions of several familiar functions.
* [Landin, Peter](https://en.wikipedia.org/wiki/Peter_Landin), *A Correspondence Between ALGOL 60 and Church's Lambda-Notation*, [Communications of the ACM](https://en.wikipedia.org/wiki/Communications_of_the_ACM), vol. 8, no. 2 (1965), pages 89–101. Available from the [ACM site](http://portal.acm.org/citation.cfm?id=363749&coll=portal&dl=ACM). A classic paper highlighting the importance of lambda calculus as a basis for programming languages.
* Larson, Jim, [*An Introduction to Lambda Calculus and Scheme*](https://web.archive.org/web/20011206080336/http://www.jetcafe.org/~jim/lambda.html). A gentle introduction for programmers.
* Michaelson, Greg (10 April 2013). *An Introduction to Functional Programming Through Lambda Calculus*. Courier Corporation. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-486-28029-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-486-28029-5).
* Schalk, A. and Simmons, H. (2005) *[An introduction to λ-calculi and arithmetic with a decent selection of exercises](https://web.archive.org/web/20080307014129/http://www.cs.man.ac.uk/~hsimmons/BOOKS/lcalculus.pdf)*. Notes for a course in the Mathematical Logic MSc at Manchester University.
* [de Queiroz, Ruy J.G.B.](https://en.wikipedia.org/wiki/Ruy_de_Queiroz) (2008). "On Reduction Rules, Meaning-as-Use and Proof-Theoretic Semantics". *[Studia Logica](https://en.wikipedia.org/wiki/Studia_Logica)*. **90** (2): 211–247. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s11225-008-9150-5](https://doi.org/10.1007%2Fs11225-008-9150-5). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [11321602](https://api.semanticscholar.org/CorpusID:11321602). A paper giving a formal underpinning to the idea of 'meaning-is-use' which, even if based on proofs, it is different from proof-theoretic semantics as in the Dummett–Prawitz tradition since it takes reduction as the rules giving meaning.
* Hankin, Chris, *An Introduction to Lambda Calculi for Computer Scientists,* [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0954300653](https://en.wikipedia.org/wiki/Special:BookSources/0954300653)

**Monographs/textbooks for graduate students**
: 

* Sørensen, Morten Heine and Urzyczyn, Paweł (2006), *Lectures on the Curry–Howard isomorphism*, Elsevier, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-444-52077-5](https://en.wikipedia.org/wiki/Special:BookSources/0-444-52077-5) is a recent monograph that covers the main topics of lambda calculus from the type-free variety, to most [typed lambda calculi](https://en.wikipedia.org/wiki/Typed_lambda_calculi), including more recent developments like [pure type systems](https://en.wikipedia.org/wiki/Pure_type_system) and the [lambda cube](https://en.wikipedia.org/wiki/Lambda_cube). It does not cover [subtyping](https://en.wikipedia.org/wiki/Subtyping) extensions.
* Pierce, Benjamin (2002), *Types and Programming Languages*, MIT Press, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-16209-1](https://en.wikipedia.org/wiki/Special:BookSources/0-262-16209-1) covers lambda calculi from a practical type system perspective; some topics like dependent types are only mentioned, but subtyping is an important topic.

**Documents**

* *[A Short Introduction to the Lambda Calculus](http://www.cs.bham.ac.uk/~axj/pub/papers/lambda-calculus.pdf)*-([PDF](https://en.wikipedia.org/wiki/Portable_Document_Format)) by Achim Jung
* *[A timeline of lambda calculus](http://turing100.acm.org/lambda_calculus_timeline.pdf)*-([PDF](https://en.wikipedia.org/wiki/Portable_Document_Format)) by Dana Scott
* *[A Tutorial Introduction to the Lambda Calculus](http://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/tutorials/lambda.pdf)*-([PDF](https://en.wikipedia.org/wiki/Portable_Document_Format)) by Raúl Rojas
* *[Lecture Notes on the Lambda Calculus](http://www.mscs.dal.ca/~selinger/papers/#lambdanotes)*-([PDF](https://en.wikipedia.org/wiki/Portable_Document_Format)) by Peter Selinger
* [*Graphic lambda calculus*](https://web.archive.org/web/20140202195546/http://imar.ro/~mbuliga/graphic_revised.pdf) by Marius Buliga
* [*Lambda Calculus as a Workflow Model*](https://web.archive.org/web/20160729210437/http://cs.adelaide.edu.au/~pmk/publications/wage2008.pdf) by Peter Kelly, Paul Coddington, and Andrew Wendelborn; mentions [graph reduction](https://en.wikipedia.org/wiki/Graph_reduction) as a common means of evaluating lambda expressions and discusses the applicability of lambda calculus for [distributed computing](https://en.wikipedia.org/wiki/Distributed_computing) (due to the [Church–Rosser](https://en.wikipedia.org/wiki/Church%E2%80%93Rosser_theorem) property, which enables [parallel](https://en.wikipedia.org/wiki/Parallel_computing) graph reduction for lambda expressions).

## Notes

1. **^** "where M[x := N] denotes the substitution of N for every occurrence of x in M". Also denoted M[N/x], "the substitution of N for x in M".
2. **^** Barendregt, Barendsen (2000) call this rule *axiom β*
3. **^** For a full history, see Cardone and Hindley's "History of Lambda-calculus and Combinatory Logic" (2006).
4. ^   

↦ ↦ 

{\displaystyle \mapsto }

 is pronounced "[maps to](https://en.wikipedia.org/wiki/Maplet)".
5. **^** (λ*f*.*M*) *N* can be pronounced "let f be N in M".
6. **^** Ariola and Blom employ 1) axioms for a representational calculus using *well-formed cyclic lambda graphs* extended with letrec, to detect possibly infinite unwinding trees; 2) the representational calculus with β-reduction of scoped lambda graphs constitute Ariola/Blom's cyclic extension of lambda calculus; 3) Ariola/Blom reason about strict languages using § call-by-value, and compare to Moggi's calculus, and to Hasegawa's calculus. Conclusions on p. 111.

## References

*Some parts of this article are based on material from [FOLDOC](https://en.wikipedia.org/wiki/Free_On-line_Dictionary_of_Computing), used with [permission](https://en.wikipedia.org/wiki/Wikipedia:Foldoc_license).*

1. ^   [Barendregt, Henk](https://en.wikipedia.org/wiki/Henk_Barendregt); Barendsen, Erik (March 2000), [*Introduction to Lambda Calculus*](https://ftp.science.ru.nl/CSI/CompMath.Found/lambda.pdf) (PDF)
2. **^** [explicit substitution](https://ncatlab.org/nlab/show/explicit+substitution) at the [*n*Lab](https://en.wikipedia.org/wiki/NLab)
3. **^** [de Queiroz, Ruy J. G. B.](https://en.wikipedia.org/wiki/Ruy_de_Queiroz) (1988). "A Proof-Theoretic Account of Programming and the Role of Reduction Rules". *Dialectica*. **42** (4): 265–282. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1111/j.1746-8361.1988.tb00919.x](https://doi.org/10.1111%2Fj.1746-8361.1988.tb00919.x).
4. **^** [Turing, Alan M.](https://en.wikipedia.org/wiki/Alan_Turing) (December 1937). "Computability and λ-Definability". *The Journal of Symbolic Logic*. **2** (4): 153–163. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/2268280](https://doi.org/10.2307%2F2268280). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [2268280](https://www.jstor.org/stable/2268280). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [2317046](https://api.semanticscholar.org/CorpusID:2317046).
5. **^** [Tait, W. W.](https://en.wikipedia.org/wiki/William_W._Tait) (August 1967). ["Intensional interpretations of functionals of finite type I"](https://doi.org/10.2307/2271658). *The Journal of Symbolic Logic*. **32** (2): 198–212. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/2271658](https://doi.org/10.2307%2F2271658). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0022-4812](https://search.worldcat.org/issn/0022-4812). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [2271658](https://www.jstor.org/stable/2271658). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [9569863](https://api.semanticscholar.org/CorpusID:9569863).
6. **^** [Coquand, Thierry](https://en.wikipedia.org/wiki/Thierry_Coquand) (8 February 2006). Zalta, Edward N. (ed.). ["Type Theory"](http://plato.stanford.edu/archives/sum2013/entries/type-theory/). *The Stanford Encyclopedia of Philosophy* (Summer 2013 ed.). Retrieved November 17, 2020.
7. **^** Moortgat, Michael (1988). [*Categorial Investigations: Logical and Linguistic Aspects of the Lambek Calculus*](https://books.google.com/books?id=9CdFE9X_FCoC). Foris Publications. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9789067653879](https://en.wikipedia.org/wiki/Special:BookSources/9789067653879).
8. **^** Bunt, Harry; Muskens, Reinhard, eds. (2008). [*Computing Meaning*](https://books.google.com/books?id=nyFa5ngYThMC). Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4020-5957-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4020-5957-5).
9. **^** [Mitchell, John C.](https://en.wikipedia.org/wiki/John_C._Mitchell) (2003). [*Concepts in Programming Languages*](https://books.google.com/books?id=7Uh8XGfJbEIC&pg=PA57). Cambridge University Press. p. 57. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-521-78098-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-78098-8)..
10. **^** Chacón Sartori, Camilo (2023-12-05). [*Introduction to Lambda Calculus using Racket*](https://web.archive.org/web/20231207230752/https://www.researchgate.net/publication/376232150_Introduction_to_Lambda_Calculus_using_Racket) (Technical report). Archived from [the original](https://www.researchgate.net/publication/376232150) on 2023-12-07.
11. **^** [Pierce, Benjamin C.](https://en.wikipedia.org/wiki/Benjamin_C._Pierce) *Basic Category Theory for Computer Scientists*. p. 53.
12. **^** [Church, Alonzo](https://en.wikipedia.org/wiki/Alonzo_Church) (1932). "A set of postulates for the foundation of logic". *Annals of Mathematics*. Series 2. **33** (2): 346–366. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/1968337](https://doi.org/10.2307%2F1968337). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [1968337](https://www.jstor.org/stable/1968337).
13. **^** [Kleene, Stephen C.](https://en.wikipedia.org/wiki/Stephen_Kleene); [Rosser, J. B.](https://en.wikipedia.org/wiki/J._B._Rosser) (July 1935). "The Inconsistency of Certain Formal Logics". *The Annals of Mathematics*. **36** (3): 630. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/1968646](https://doi.org/10.2307%2F1968646). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [1968646](https://www.jstor.org/stable/1968646).
14. **^** [Church, Alonzo](https://en.wikipedia.org/wiki/Alonzo_Church) (December 1942). "Review of Haskell B. Curry, *The Inconsistency of Certain Formal Logics*". *The Journal of Symbolic Logic*. **7** (4): 170–171. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/2268117](https://doi.org/10.2307%2F2268117). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [2268117](https://www.jstor.org/stable/2268117).
15. ^   [Church, Alonzo](https://en.wikipedia.org/wiki/Alonzo_Church) (1936). "An unsolvable problem of elementary number theory". *American Journal of Mathematics*. **58** (2): 345–363. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/2371045](https://doi.org/10.2307%2F2371045). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [2371045](https://www.jstor.org/stable/2371045).
16. **^** [Church, Alonzo](https://en.wikipedia.org/wiki/Alonzo_Church) (1940). "A Formulation of the Simple Theory of Types". *Journal of Symbolic Logic*. **5** (2): 56–68. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/2266170](https://doi.org/10.2307%2F2266170). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [2266170](https://www.jstor.org/stable/2266170). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [15889861](https://api.semanticscholar.org/CorpusID:15889861).
17. **^** Partee, B. B. H.; [ter Meulen, A.](https://en.wikipedia.org/wiki/Alice_ter_Meulen); Wall, R. E. (1990). [*Mathematical Methods in Linguistics*](https://books.google.com/books?id=qV7TUuaYcUIC&pg=PA317). Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9789027722454](https://en.wikipedia.org/wiki/Special:BookSources/9789027722454). Retrieved 29 Dec 2016.
18. **^** Alama, Jesse. Zalta, Edward N. (ed.). ["The Lambda Calculus"](http://plato.stanford.edu/entries/lambda-calculus/). *The Stanford Encyclopedia of Philosophy* (Summer 2013 ed.). Retrieved November 17, 2020.
19. **^** Dana Scott, "[Looking Backward; Looking Forward](https://www.youtube.com/embed/uS9InrmPIoc)", Invited Talk at the Workshop in honour of Dana Scott's 85th birthday and 50 years of domain theory, 7–8 July, FLoC 2018 (talk 7 July 2018). The relevant passage begins at [32:50](https://www.youtube.com/embed/uS9InrmPIoc?start=1970). (See also this [extract of a May 2016 talk](https://www.youtube.com/watch?time_continue=1&v=juXwu0Nqc3I) at the University of Birmingham, UK.)
20. **^** Felleisen, Matthias; Flatt, Matthew (2006), [*Programming Languages and Lambda Calculi*](https://web.archive.org/web/20090205113235/http://www.cs.utah.edu/plt/publications/pllc.pdf) (PDF), p. 26, archived from [the original](http://www.cs.utah.edu/plt/publications/pllc.pdf) (PDF) on 2009-02-05; A note (accessed 2017) at the original location suggests that the authors consider the work originally referenced to have been superseded by a book.
21. **^** 
Selinger, Peter (2008), [*Lecture Notes on the Lambda Calculus*](http://www.mathstat.dal.ca/~selinger/papers/lambdanotes.pdf) (PDF), vol. 0804, Department of Mathematics and Statistics, University of Ottawa, p. 9, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[0804.3434](https://arxiv.org/abs/0804.3434), [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2008arXiv0804.3434S](https://ui.adsabs.harvard.edu/abs/2008arXiv0804.3434S)
22. **^** Bruce, Kim B. (2002). [*Foundations of Object-oriented Languages: Types and Semantics*](https://books.google.com/books?id=9NGWq3K1RwUC&dq=ifthenelse%20lambda%20calculus&pg=PA151). MIT Press. p. 151. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-02523-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-02523-2).
23. ^   Zena M. Ariola and Stefan Blom, *Proc. TACS '94* Sendai, Japan 1997 [(1997) Cyclic lambda calculi](http://ix.cs.uoregon.edu/~ariola/cycles.pdf) 114 pages.
24. **^** Bene, Adam (17 August 2017). ["Fixed-Point Combinators in JavaScript"](https://benestudio.co/fixed-point-combinators-in-javascript/). *Bene Studio*. Medium. Retrieved 2 August 2020.
25. **^** ["CS 6110 S17 Lecture 5. Recursion and Fixed-Point Combinators"](https://www.cs.cornell.edu/courses/cs6110/2017sp/lectures/lec05.pdf) (PDF). *Cornell University*. 4.1 A CBV Fixed-Point Combinator.
26. **^** Ker, Andrew D. ["Lambda Calculus and Types"](https://www.cs.ox.ac.uk/andrew.ker/docs/lambdacalculus-lecture-notes-ht2009.pdf#page=18) (PDF). p. 6. Retrieved 14 January 2022.
27. **^** Dezani-Ciancaglini, Mariangiola; Ghilezan, Silvia (2014). ["Preciseness of Subtyping on Intersection and Union Types"](http://www.di.unito.it/~dezani/papers/dg14.pdf#page=3) (PDF). *Rewriting and Typed Lambda Calculi*. Lecture Notes in Computer Science. Vol. 8560. p. 196. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-319-08918-8_14](https://doi.org/10.1007%2F978-3-319-08918-8_14). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[2318/149874](https://hdl.handle.net/2318%2F149874). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-319-08917-1](https://en.wikipedia.org/wiki/Special:BookSources/978-3-319-08917-1). Retrieved 14 January 2022.
28. **^** Forster, Yannick; Smolka, Gert (August 2019). ["Call-by-Value Lambda Calculus as a Model of Computation in Coq"](https://www.ps.uni-saarland.de/Publications/documents/ForsterSmolka_2018_Computability-JAR.pdf#page=4) (PDF). *Journal of Automated Reasoning*. **63** (2): 393–413. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s10817-018-9484-2](https://doi.org/10.1007%2Fs10817-018-9484-2). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [53087112](https://api.semanticscholar.org/CorpusID:53087112). Retrieved 14 January 2022.
29. **^** Types and Programming Languages, p. 273, Benjamin C. Pierce
30. **^** [Pierce, Benjamin C.](https://en.wikipedia.org/wiki/Benjamin_C._Pierce) (2002). [*Types and Programming Languages*](https://books.google.com/books?id=ti6zoAC9Ph8C&pg=PA56). [MIT Press](https://en.wikipedia.org/wiki/MIT_Press). p. 56. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-16209-1](https://en.wikipedia.org/wiki/Special:BookSources/0-262-16209-1).
31. **^** Sestoft, Peter (2002). ["Demonstrating Lambda Calculus Reduction"](http://itu.dk/people/sestoft/papers/sestoft-lamreduce.pdf) (PDF). *The Essence of Computation*. Lecture Notes in Computer Science. Vol. 2566. pp. 420–435. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/3-540-36377-7_19](https://doi.org/10.1007%2F3-540-36377-7_19). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-00326-7](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-00326-7). Retrieved 22 August 2022.
32. **^** Biernacka, Małgorzata; Charatonik, Witold; Drab, Tomasz (2022). Andronick, June; de Moura, Leonardo (eds.). [*The Zoo of Lambda-Calculus Reduction Strategies, and Coq*](https://drops.dagstuhl.de/opus/volltexte/2022/16716/pdf/LIPIcs-ITP-2022-7.pdf) (PDF). Leibniz International Proceedings in Informatics (LIPIcs). Vol. 237. Schloss Dagstuhl – Leibniz-Zentrum für Informatik. pp. 7:1–7:19. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.4230/LIPIcs.ITP.2022.7](https://doi.org/10.4230%2FLIPIcs.ITP.2022.7). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-95977-252-5](https://en.wikipedia.org/wiki/Special:BookSources/978-3-95977-252-5). Retrieved 22 August 2022.
33. **^** Frandsen, Gudmund Skovbjerg; Sturtivant, Carl (26 August 1991). ["What is an efficient implementation of the λ-calculus?"](https://scholar.archive.org/work/i7pfbnat3vdwfgalk5l6pkvbze). *Functional Programming Languages and Computer Architecture: 5th ACM Conference. Cambridge, MA, USA, August 26-30, 1991. Proceedings*. Lecture Notes in Computer Science. Vol. 523. Springer-Verlag. pp. 289–312. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.139.6913](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.139.6913). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/3540543961_14](https://doi.org/10.1007%2F3540543961_14). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9783540543961](https://en.wikipedia.org/wiki/Special:BookSources/9783540543961).
34. **^** Sinot, F.-R. (2005). ["Director Strings Revisited: A Generic Approach to the Efficient Representation of Free Variables in Higher-order Rewriting"](http://www.lsv.fr/Publis/PAPERS/PDF/sinot-jlc05.pdf) (PDF). *Journal of Logic and Computation*. **15** (2): 201–218. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/logcom/exi010](https://doi.org/10.1093%2Flogcom%2Fexi010).
35. **^** Accattoli, Beniamino; Dal Lago, Ugo (14 July 2014). "Beta reduction is invariant, indeed". *Proceedings of the Joint Meeting of the Twenty-Third EACSL Annual Conference on Computer Science Logic (CSL) and the Twenty-Ninth Annual ACM/IEEE Symposium on Logic in Computer Science (LICS)*. pp. 1–10. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1601.01233](https://arxiv.org/abs/1601.01233). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/2603088.2603105](https://doi.org/10.1145%2F2603088.2603105). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781450328869](https://en.wikipedia.org/wiki/Special:BookSources/9781450328869). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [11485010](https://api.semanticscholar.org/CorpusID:11485010).
36. ^   Accattoli, Beniamino (October 2018). ["(In)Efficiency and Reasonable Cost Models"](https://doi.org/10.1016%2Fj.entcs.2018.10.003). *Electronic Notes in Theoretical Computer Science*. **338**: 23–43. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.entcs.2018.10.003](https://doi.org/10.1016%2Fj.entcs.2018.10.003).
37. ^   Asperti, Andrea (16 Jan 2017). "About the efficient reduction of lambda terms". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1701.04240v1](https://arxiv.org/abs/1701.04240v1) [[cs.LO](https://arxiv.org/archive/cs.LO)].
38. **^** [Landin, P. J.](https://en.wikipedia.org/wiki/Peter_Landin) (1965). ["A Correspondence between ALGOL 60 and Church's Lambda-notation"](https://doi.org/10.1145%2F363744.363749). *Communications of the ACM*. **8** (2): 89–101. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/363744.363749](https://doi.org/10.1145%2F363744.363749). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [6505810](https://api.semanticscholar.org/CorpusID:6505810).
39. **^** Scott, Dana (1993). ["A type-theoretical alternative to ISWIM, CUCH, OWHY"](https://www.cs.cmu.edu/~crary/819-f09/Scott93.pdf) (PDF). *Theoretical Computer Science*. **121** (1–2): 411–440. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0304-3975(93)90095-B](https://doi.org/10.1016%2F0304-3975%2893%2990095-B). Retrieved 2022-12-01. Written 1969, widely circulated as an unpublished manuscript.
40. **^** ["Greg Michaelson's Homepage"](http://www.macs.hw.ac.uk/~greg/). *Mathematical and Computer Sciences*. Riccarton, Edinburgh: [Heriot-Watt University](https://en.wikipedia.org/wiki/Heriot-Watt_University). Retrieved 6 November 2022.

## External links

* Graham Hutton, [Lambda Calculus](https://www.youtube.com/watch?v=eis11j_iGMs), a short (12 minutes) Computerphile video on the Lambda Calculus
* Helmut Brandl, *[Step by Step Introduction to Lambda Calculus](https://hbr.github.io/Lambda-Calculus/)*
* ["Lambda-calculus"](https://www.encyclopediaofmath.org/index.php?title=Lambda-calculus), *[Encyclopedia of Mathematics](https://en.wikipedia.org/wiki/Encyclopedia_of_Mathematics)*, [EMS Press](https://en.wikipedia.org/wiki/European_Mathematical_Society), 2001 [1994]
* David C. Keenan, *[To Dissect a Mockingbird: A Graphical Notation for the Lambda Calculus with Animated Reduction](http://dkeenan.com/Lambda/)*
* L. Allison, *[Some executable λ-calculus examples](http://www.allisons.org/ll/FP/Lambda/Examples/)*
* Georg P. Loczewski, [*The Lambda Calculus and A++*](http://www.lambda-bound.com/book/lambdacalc/lcalconl.html)
* Bret Victor, *[Alligator Eggs: A Puzzle Game Based on Lambda Calculus](http://worrydream.com/AlligatorEggs/)*
* *[Lambda Calculus](http://www.safalra.com/science/lambda-calculus/) [Archived](https://web.archive.org/web/20121014180848/http://safalra.com/science/lambda-calculus/) 2012-10-14 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)* on [Safalra's Website](http://www.safalra.com/) [Archived](https://web.archive.org/web/20210502051230/https://safalra.com/) 2021-05-02 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
* [LCI Lambda Interpreter](https://chatziko.github.io/lci/) a simple yet powerful pure calculus interpreter
* [Lambda Calculus links on Lambda-the-Ultimate](http://lambda-the-ultimate.org/classic/lc.html)
* Mike Thyer, [Lambda Animator](https://web.archive.org/web/20070713173324/http://thyer.name/lambda-animator/), a graphical Java applet demonstrating alternative reduction strategies.
* [Implementing the Lambda calculus](http://matt.might.net/articles/c++-template-meta-programming-with-lambda-calculus/) using [C++ Templates](https://en.wikipedia.org/wiki/C%2B%2B_Templates)
* Shane Steinert-Threlkeld, ["Lambda Calculi"](https://web.archive.org/web/20141216225504/http://www.iep.utm.edu/lambda-calculi/), *[Internet Encyclopedia of Philosophy](https://en.wikipedia.org/wiki/Internet_Encyclopedia_of_Philosophy)*
* Anton Salikhmetov, [*Macro Lambda Calculus*](https://codedot.github.io/lambda/)
 
NewPP limit report
Parsed by mw‐web.codfw.main‐6f7f9565cb‐phvsd
Cached time: 20260420134440
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.977 seconds
Real time usage: 1.737 seconds
Preprocessor visited node count: 12284/1000000
Revision size: 76220/2097152 bytes
Post‐expand include size: 285553/2097152 bytes
Template argument size: 28804/2097152 bytes
Highest expansion depth: 20/100
Expensive parser function count: 15/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 260195/5000000 bytes
Lua time usage: 0.442/10.000 seconds
Lua memory usage: 9082194/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  971.967      1 -total
 18.19%  176.754      2 Template:Reflist
 17.73%  172.307      9 Template:Navbox
 12.84%  124.806      1 Template:Alonzo_Church
  7.77%   75.526     14 Template:Cite_book
  7.14%   69.440    263 Template:Mono
  6.50%   63.185      5 Template:Isbn
  6.18%   60.057     15 Template:Cite_journal
  6.07%   59.000      1 Template:Short_description
  5.59%   54.328      1 Template:Commons_category
 Render ID 142b64c1-3cbf-11f1-bafd-5d5e4a89fe75  Saved in parser cache with key enwiki:pcache:18203:|#|:idhash:canonical and timestamp 20260420134440 and revision id 1345568754. Rendering was triggered because: page_view