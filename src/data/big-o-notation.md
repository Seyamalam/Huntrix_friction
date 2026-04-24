# Big O notation

* Source: https://en.wikipedia.org/wiki/Big_O_notation

---

| Fit approximation |
| --- |
|  |
| Concepts |
| [Orders of approximation](https://en.wikipedia.org/wiki/Order_of_approximation) [Scale analysis](https://en.wikipedia.org/wiki/Scale_analysis_(mathematics)) Big O notation [Curve fitting](https://en.wikipedia.org/wiki/Curve_fitting) [False precision](https://en.wikipedia.org/wiki/False_precision) [Significant figures](https://en.wikipedia.org/wiki/Significant_figures) |
| Other fundamentals |
| [Approximation](https://en.wikipedia.org/wiki/Approximation) [Generalization error](https://en.wikipedia.org/wiki/Generalization_error) [Taylor polynomial](https://en.wikipedia.org/wiki/Taylor_series) [Scientific modelling](https://en.wikipedia.org/wiki/Scientific_modelling) |
| [v](https://en.wikipedia.org/wiki/Template:Order-of-approx)[t](https://en.wikipedia.org/wiki/Template_talk:Order-of-approx)[e](https://en.wikipedia.org/wiki/Special:EditPage/Template:Order-of-approx) |

**Big *O* notation** is a [mathematical notation](https://en.wikipedia.org/wiki/Mathematical_notation) that describes the approximate size of a [function](https://en.wikipedia.org/wiki/Function_(mathematics)) on a [domain](https://en.wikipedia.org/wiki/Domain_of_a_function). Big O is a member of a family of notations invented by German mathematicians [Paul Bachmann](https://en.wikipedia.org/wiki/Paul_Gustav_Heinrich_Bachmann) and [Edmund Landau](https://en.wikipedia.org/wiki/Edmund_Landau) and expanded by others, collectively called **Bachmann–Landau notation**. The letter O was chosen by Bachmann to stand for *[Ordnung](https://en.wiktionary.org/wiki/Ordnung#German)*, meaning the [order of approximation](https://en.wikipedia.org/wiki/Order_of_approximation).

In [computer science](https://en.wikipedia.org/wiki/Computer_science), big O notation is used to [classify algorithms](https://en.wikipedia.org/wiki/Computational_complexity_theory) according to how their run time or space requirements grow as the input size grows. In [analytic number theory](https://en.wikipedia.org/wiki/Analytic_number_theory), big O notation is often used to express bounds on the growth of an [arithmetical function](https://en.wikipedia.org/wiki/Arithmetic_function); one well-known example is the remainder term in the [prime number theorem](https://en.wikipedia.org/wiki/Prime_number_theorem).
In [mathematical analysis](https://en.wikipedia.org/wiki/Mathematical_analysis), including [calculus](https://en.wikipedia.org/wiki/Calculus), Big O notation is used to bound the error when truncating a [power series](https://en.wikipedia.org/wiki/Power_series) and to express the quality
of approximation of a real or complex valued function by a simpler function.

Often, big O notation characterizes functions according to their growth rates as the variable becomes large: different functions with the same [asymptotic](https://en.wikipedia.org/wiki/Asymptotic_analysis) growth rate may be represented using the same O notation. The letter O is used because the growth rate of a function is also referred to as the **order of the function**. A description of a function in terms of big O notation only provides an [upper bound](https://en.wikipedia.org/wiki/Upper_bound) on the growth rate of the function.

Associated with big O notation are several related notations, using the symbols 

o

{\displaystyle o}

, 

∼ ∼ 

{\displaystyle \sim }

, 

Ω Ω 

{\displaystyle \Omega }

, 

≪ ≪ 

{\displaystyle \ll }

, 

≫ ≫ 

{\displaystyle \gg }

, 

≍ ≍ 

{\displaystyle \asymp }

, 

ω ω 

{\displaystyle \omega }

, and 

Θ Θ 

{\displaystyle \Theta }

 to describe other kinds of bounds on growth rates.

A precursor who proposed a system of notation for comparing the asymptotic behavior of functions was German mathematician [Paul du Bois-Reymond](https://en.wikipedia.org/wiki/Paul_du_Bois-Reymond).

## Formal definition

Let 

f
,

{\textstyle f,}

 the function to be estimated, be either a [real](https://en.wikipedia.org/wiki/Real_number) or [complex](https://en.wikipedia.org/wiki/Complex_number) valued function defined on a [domain](https://en.wikipedia.org/wiki/Domain_of_a_function) 

D
,

{\textstyle D,}

 and let 

g
,

{\textstyle g,}

 the comparison function, be a non-negative real valued function defined on the same set 

D
.

{\textstyle D.}

 Common choices for the domain are intervals of real numbers, bounded or unbounded, the set of positive integers, the set of [complex numbers](https://en.wikipedia.org/wiki/Complex_analysis) and tuples of real/complex numbers. With the domain written explicitly or understood implicitly, one writes

: f
(
x
)
=
O

(

g
(
x
)

)

 

{\displaystyle f(x)=O{\bigl (}g(x){\bigr )}\ }

which is read as  "

f
(
x
)

{\textstyle f(x)}

 is big 

O

{\textstyle O}

 of 

g
(
x
)

{\textstyle g(x)}

"  if there exists a positive real number 

M

{\textstyle M}

 such that

: |

f
(
x
)

|

≤ ≤ 
M
 
g
(
x
)

 

 
f
o
r
 
a
l
l
 

 

x
∈ ∈ 
D
.

{\displaystyle \left|f(x)\right|\leq M\ g(x)\qquad ~{\mathsf {\ for\ all\ }}~\quad x\in D.}

If 

g
(
x
)
>
0

{\displaystyle g(x)>0}

 (i.e. g is also never zero) throughout the domain 

D
,

{\displaystyle D,}

 an equivalent definition is that the ratio 

f
(
x
)

g
(
x
)

{\textstyle {\frac {f(x)}{g(x)}}}

 is [*bounded*](https://en.wikipedia.org/wiki/Bounded_function), i.e. there is a positive real number 

M

{\displaystyle M}

 so that 

|

f
(
x
)

g
(
x
)

|

≤ ≤ 
M

{\textstyle {\Big |}{\frac {f(x)}{g(x)}}{\Big |}\leq M}

 for all 

x
∈ ∈ 
D
.

{\displaystyle x\in D.}

 These encompass all the uses of  big 

O

{\textstyle O}

  in [computer science](https://en.wikipedia.org/wiki/Computer_science) and mathematics, including its use where the domain is finite, infinite, real, complex, single variate, or multivariate. In most applications, one chooses the function 

g
(
x
)

{\displaystyle g(x)}

 appearing within the [argument](https://en.wikipedia.org/wiki/Function_argument) of 

O

(

⋅ ⋅ 

)

{\textstyle O{\bigl (}\cdot {\bigr )}}

 to be as simple a form as possible, omitting constant factors and lower order terms. The number 

M

{\textstyle M}

 is called the *implied constant* because it is normally not specified. When using big 

O

{\textstyle O}

 notation, what matters is that some finite 

M

{\displaystyle M}

 exists, not its specific value. This simplifies the presentation of many analytic inequalities.

For functions defined on positive real numbers or positive integers, a more restrictive and somewhat conflicting definition
is still in common use, especially in computer science. 
When restricted to functions which are [eventually](https://en.wikipedia.org/wiki/Eventually_(mathematics)) positive, the notation

: f
(
x
)
=
O

(

g
(
x
)

)

 

a
s

x
→ → 
∞ ∞ 

{\displaystyle f(x)=O{\bigl (}g(x){\bigr )}\qquad ~{\mathsf {as}}\quad x\to \infty }

means that for some real number 

a
,

{\textstyle a,}

 

f
(
x
)
=
O

(

g
(
x
)

)

{\textstyle f(x)=O{\bigl (}g(x){\bigr )}}

 in the domain 

[

a
,
∞ ∞ 

)

.

{\textstyle \left[a,\infty \right).}

 Here, the expression 

x
→ → 
∞ ∞ 

{\textstyle x\to \infty }

 doesn't indicate a [limit](https://en.wikipedia.org/wiki/Limit_(mathematics)), but the notion that the inequality holds for *large enough* 

x
.

{\textstyle x.}

 The expression 

x
→ → 
∞ ∞ 

{\textstyle x\to \infty }

 often is omitted.

Similarly, for a real number 

a
,

{\textstyle a,}

 the notation

: f
(
x
)
=
O

(

g
(
x
)

)

 

 as 

 
x
→ → 
a

{\displaystyle f(x)=O{\bigl (}g(x){\bigr )}\qquad ~{\text{ as }}\ x\to a}

means that for some constant 

c
>
0
,

{\textstyle c>0,}

 

f
(
x
)
=
O

(

g
(
x
)

)

{\textstyle f(x)=O{\bigl (}g(x){\bigr )}}

 on the interval 

[

a
− − 
c
,
a
+
c

]

;

{\displaystyle \left[a-c,a+c\right];}

 that is, in a small neighborhood of 

a
.

{\displaystyle a.}

In addition, the notation

 
f
(
x
)
=
h
(
x
)
+
O

(

g
(
x
)

)

 

{\displaystyle \ f(x)=h(x)+O{\bigl (}g(x){\bigr )}\ }

means 

f
(
x
)
− − 
h
(
x
)
=
O

(

g
(
x
)

)

.

{\textstyle f(x)-h(x)=O{\bigl (}g(x){\bigr )}.}

 More complicated expressions are also possible.

Despite the presence of the equal sign (=) as written, the expression 

f
(
x
)
=
O

(

g
(
x
)

)

{\textstyle f(x)=O{\bigl (}g(x){\bigr )}}

 does not refer to an [equality](https://en.wikipedia.org/wiki/Equality_relation), but rather to an inequality relating 

f

{\textstyle f}

 and 

g
.

{\textstyle g.}

In the 1930s, the Russian number theorist [I.M. Vinogradov](https://en.wikipedia.org/wiki/Ivan_Matveyevich_Vinogradov) introduced the notation 

≪ ≪ 
,

{\displaystyle \ll ,}

 which has been increasingly used in number theory and other branches of mathematics, as an alternative to the 

O

{\textstyle O}

 notation. We have

: f
≪ ≪ 
g

⟺ ⟺ 

f
=
O

(

g

)

.

{\displaystyle \ f\ll g\iff f=O{\bigl (}g{\bigr )}.}

Frequently both notations are used in the same work.

### Set version of big O

In computer science it is common to define big 

O

{\textstyle O}

 as also defining a [set](https://en.wikipedia.org/wiki/Set_(mathematics)) of functions. With the positive (or non-negative) function 

g
(
x
)

{\displaystyle g(x)}

 specified, one interprets 

O

(

g
(
x
)

)

{\textstyle O{\bigl (}g(x){\bigr )}}

 as representing the *set* of all functions 

f
~ ~ 

{\textstyle {\tilde {f}}}

 that satisfy 

f
~ ~ 

(
x
)
=
O

(

g
(
x
)

)

.

{\textstyle {\tilde {f}}(x)=O{\bigl (}g(x){\bigr )}.}

 One can then equivalently write 

f
(
x
)
∈ ∈ 
O

(

g
(
x
)

)

,

{\textstyle f(x)\in O{\bigl (}g(x){\bigr )},}

 read as "the function 

 
f
(
x
)
 

{\textstyle \ f(x)\ }

 is among the set of all functions of order at most 

g
(
x
)
.

{\textstyle g(x).}

"

## Examples with an infinite domain

In typical usage the 

O

{\displaystyle O}

 notation is applied to an infinite interval of real numbers 

[
a
,
∞ ∞ 
)

{\displaystyle [a,\infty )}

 and captures the behavior of the function for very large 

x

{\displaystyle x}

. In this setting, the contribution of the terms that grow "most quickly" will eventually make the other ones irrelevant. As a result, the following simplification rules can be applied:

* If 

f
(
x
)

{\displaystyle f(x)}

 is a sum of several terms, if there is one with largest growth rate, it can be kept, and all others omitted.
* If 

f
(
x
)

{\displaystyle f(x)}

 is a product of several factors, any constants (factors in the product that do not depend on 

x

{\displaystyle x}

) can be omitted.

For example, let 

f
(
x
)
=
6

x

4

− − 
2

x

3

+
5

{\displaystyle f(x)=6x^{4}-2x^{3}+5}

, and suppose we wish to simplify this function, using 

O

{\displaystyle O}

 notation, to describe its growth rate for large 

x

{\displaystyle x}

. This function is the sum of three terms: 

6

x

4

{\displaystyle 6x^{4}}

, 

− − 
2

x

3

{\displaystyle -2x^{3}}

, and 

5

{\displaystyle 5}

. Of these three terms, the one with the highest growth rate is the one with the largest exponent as a function of 

x

{\displaystyle x}

, namely 

6

x

4

{\displaystyle 6x^{4}}

. Now one may apply the second rule: 

6

x

4

{\displaystyle 6x^{4}}

is a product of 

6

{\displaystyle 6}

 and 

x

4

{\displaystyle x^{4}}

 in which the first factor does not depend on 

x

{\displaystyle x}

. Omitting this factor results in the simplified form 

x

4

{\displaystyle x^{4}}

. Thus, we say that 

f
(
x
)

{\displaystyle f(x)}

 is a "big O" of 

x

4

{\displaystyle x^{4}}

. Mathematically, we can write 

f
(
x
)
=
O
(

x

4

)

{\displaystyle f(x)=O(x^{4})}

 for all 

x
≥ ≥ 
1

{\displaystyle x\geq 1}

. One may confirm this calculation using the formal definition: let 

f
(
x
)
=
6

x

4

− − 
2

x

3

+
5

{\displaystyle f(x)=6x^{4}-2x^{3}+5}

 and 

g
(
x
)
=

x

4

{\displaystyle g(x)=x^{4}}

. Applying the formal definition from above, the statement that 

f
(
x
)
=
O
(

x

4

)

{\displaystyle f(x)=O(x^{4})}

 is equivalent to its expansion,

|

f
(
x
)

|

≤ ≤ 
M

x

4

{\displaystyle |f(x)|\leq Mx^{4}}

for some suitable choice of a positive real number 

M

{\displaystyle M}

 and for all 

x
≥ ≥ 
1

{\displaystyle x\geq 1}

. To prove this, let 

M
=
13

{\displaystyle M=13}

. Then, for all 

x
≥ ≥ 
1

{\displaystyle x\geq 1}

:

|

6

x

4

− − 
2

x

3

+
5

|

≤ ≤ 
6

x

4

+

|

− − 
2

x

3

|

+
5

≤ ≤ 
6

x

4

+
2

x

4

+
5

x

4

=
13

x

4

{\displaystyle {\begin{aligned}|6x^{4}-2x^{3}+5|&\leq 6x^{4}+|-2x^{3}|+5\\&\leq 6x^{4}+2x^{4}+5x^{4}\\&=13x^{4}\end{aligned}}}

so

|

6

x

4

− − 
2

x

3

+
5

|

≤ ≤ 
13

x

4

.

{\displaystyle |6x^{4}-2x^{3}+5|\leq 13x^{4}.}

While it is also true, by the same argument, that

f
(
x
)
=
O
(

x

10

)

{\displaystyle f(x)=O(x^{10})}

, this is a less precise
approximation of the function 

f

{\displaystyle f}

.
On the other hand, the statement 

f
(
x
)
=
O
(

x

3

)

{\displaystyle f(x)=O(x^{3})}

 is false, because the term 

6

x

4

{\displaystyle 6x^{4}}

 causes

f
(
x
)

/

x

3

{\displaystyle f(x)/x^{3}}

 to be unbounded.

When a function 

T
(
n
)

{\displaystyle T(n)}

 describes the number
of steps required in an algorithm with input 

n

{\displaystyle n}

, an expression such as 

T
(
n
)
=
O
(

n

2

)

{\displaystyle T(n)=O(n^{2})}

with the implied domain being the set of positive integers, may be interpreted as saying that the algorithm has *at most the order of 

n

2

{\displaystyle n^{2}}* time complexity.

## Example with a finite domain

Big O can also be used to describe the [error term](https://en.wikipedia.org/wiki/Taylor_series#Approximation_error_and_convergence) in an approximation to a mathematical function on a finite interval. The most significant terms are written explicitly, and then the least-significant terms are summarized in a single big O term. Consider, for example, the [exponential series](https://en.wikipedia.org/wiki/Exponential_function#Formal_definition) and two expressions of it that are valid when 

x

{\displaystyle x}

 is small:

e

x

=
1
+
x
+

x

2

 

2
!

+

x

3

 

3
!

+

x

4

 

4
!

+
⋯ ⋯ 

 for all finite 

x

=
1
+
x
+

x

2

 

2

+
O
(

|

x

|

3

)

 for all 

|

x

|

≤ ≤ 
1

=
1
+
x
+
O
(

x

2

)

 for all 

|

x

|

≤ ≤ 
1.

{\displaystyle {\begin{aligned}e^{x}&=1+x+{\frac {\;x^{2}\ }{2!}}+{\frac {\;x^{3}\ }{3!}}+{\frac {\;x^{4}\ }{4!}}+\dotsb &&{\text{ for all finite }}x\\[4pt]&=1+x+{\frac {\;x^{2}\ }{2}}+O(|x|^{3})&&{\text{ for all }}|x|\leq 1\\[4pt]&=1+x+O(x^{2})&&{\text{ for all }}|x|\leq 1.\end{aligned}}}

The middle expression (the line with "

O
(

|

x

3

|

)

{\displaystyle O(|x^{3}|)}

") means the absolute-value of the error 

 

e

x

− − 
(
1
+
x
+

x

2

 

2

)
 

{\displaystyle \ e^{x}-(1+x+{\frac {\;x^{2}\ }{2}})\ }

 is at most some constant times 

 

|

x

3

|

 

{\displaystyle ~|x^{3}|\ }

 when 

 
x
 

{\displaystyle \ x~}

 is small.
This is an example of the use of [Taylor's theorem](https://en.wikipedia.org/wiki/Taylor%27s_theorem).

The behavior of a given function may be very different on finite domains than on infinite domains, for example,

(
x
+
1

)

8

=

x

8

+
O
(

x

7

)

 for 

x
≥ ≥ 
1

{\displaystyle (x+1)^{8}=x^{8}+O(x^{7})\quad {\text{ for }}x\geq 1}

while

(
x
+
1

)

8

=
1
+
8
x
+
O
(

x

2

)

 for 

|

x

|

≤ ≤ 
1.

{\displaystyle (x+1)^{8}=1+8x+O(x^{2})\quad {\text{ for }}|x|\leq 1.}

## Multivariate examples

x
sin
⁡ ⁡ 
y
=
O
(
x
)

 for 

x
≥ ≥ 
1
,
y

 any real number

{\displaystyle x\sin y=O(x)\quad {\text{ for }}x\geq 1,y{\text{ any real number}}}

3

a

2

+
7
a
b
+
2

b

2

+
a
+
3
b
+
14
≪ ≪ 

a

2

+

b

2

≪ ≪ 

a

2

 for all 

a
≥ ≥ 
b
≥ ≥ 
1

{\displaystyle 3a^{2}+7ab+2b^{2}+a+3b+14\ll a^{2}+b^{2}\ll a^{2}\quad {\text{ for all }}a\geq b\geq 1}

x
y

x

2

+

y

2

=
O
(
1
)

 for all real 

x
,
y

 that are not both 

0

{\displaystyle {\frac {xy}{x^{2}+y^{2}}}=O(1)\quad {\text{ for all real }}x,y{\text{ that are not both }}0}

x

i
t

=
O
(
1
)

 for 

x
≠ ≠ 
0
,
t
∈ ∈ 

R

.

{\displaystyle x^{it}=O(1)\quad {\text{ for }}x\neq 0,t\in \mathbb {R} .}

Here we have a [complex variable](https://en.wikipedia.org/wiki/Complex_analysis) function of two variables.
In general, any bounded function is 

O
(
1
)

{\displaystyle O(1)}

.

(
x
+
y

)

10

=
O
(

x

10

)

 for 

x
≥ ≥ 
1
,
− − 
2
≤ ≤ 
y
≤ ≤ 
2.

{\displaystyle (x+y)^{10}=O(x^{10})\quad {\text{ for }}x\geq 1,-2\leq y\leq 2.}

The last example illustrates a mixing of finite and infinite domains on the different variables.

In all of these examples, the bound is uniform
in both variables. Sometimes in a multivariate expression, one variable is
more important than others, and one may express
that the implied constant 

M

{\displaystyle M}

 depends on one
or more of the variables using subscripts to the big O symbol or the 

≪ ≪ 

{\displaystyle \ll }

 symbol. For example, consider the expression

(
1
+
x

)

b

=
1
+

O

b

(
x
)

 for 

0
≤ ≤ 
x
≤ ≤ 
1
,
b

 any real number.

{\displaystyle (1+x)^{b}=1+O_{b}(x)\quad {\text{ for }}0\leq x\leq 1,b{\text{ any real number.}}}

This means that for each real number 

b

{\displaystyle b}

, there 
is a constant 

M

b

{\displaystyle M_{b}}

, *which depends on 

b

{\displaystyle b}*, so that for all 

0
≤ ≤ 
x
≤ ≤ 
1

{\displaystyle 0\leq x\leq 1}

,

|

(
1
+
x

)

b

− − 
1

|

≤ ≤ 

M

b

⋅ ⋅ 
x
.

{\displaystyle |(1+x)^{b}-1|\leq M_{b}\cdot x.}

This particular statement follows from the [general binomial theorem](https://en.wikipedia.org/wiki/Binomial_series).

Another example, common in the theory of [Taylor series](https://en.wikipedia.org/wiki/Taylor_series), is

e

x

=
1
+
x
+

O

r

(

x

2

)

 for all 

|

x

|

≤ ≤ 
r
,
r

 being any real number.

{\displaystyle e^{x}=1+x+O_{r}(x^{2})\quad {\text{ for all }}|x|\leq r,r{\text{ being any real number.}}}

Here the implied constant depends on the size of the domain.

The subscript convention applies to all of the other
notations in this page.

## Properties

### Product

: f

1

=
O
(

g

1

)

 and 

f

2

=
O
(

g

2

)
⇒ ⇒ 

f

1

f

2

=
O
(

g

1

g

2

)

{\displaystyle f_{1}=O(g_{1}){\text{ and }}f_{2}=O(g_{2})\Rightarrow f_{1}f_{2}=O(g_{1}g_{2})}
: f
⋅ ⋅ 
O
(
g
)
=
O
(

|

f

|

g
)

{\displaystyle f\cdot O(g)=O(|f|g)}

### Sum

If 

f

1

=
O
(

g

1

)

{\displaystyle f_{1}=O(g_{1})}

 and 

f

2

=
O
(

g

2

)

{\displaystyle f_{2}=O(g_{2})}

 then 

f

1

+

f

2

=
O
(
max
(

g

1

,

g

2

)
)

{\displaystyle f_{1}+f_{2}=O(\max(g_{1},g_{2}))}

. It follows that if 

f

1

=
O
(
g
)

{\displaystyle f_{1}=O(g)}

 and 

f

2

=
O
(
g
)

{\displaystyle f_{2}=O(g)}

 then 

f

1

+

f

2

=
O
(
g
)

{\displaystyle f_{1}+f_{2}=O(g)}

.

### Multiplication by a constant

Let k be a nonzero constant. Then 

O
(

|

k

|

⋅ ⋅ 
g
)
=
O
(
g
)

{\displaystyle O(|k|\cdot g)=O(g)}

. In other words, if 

f
=
O
(
g
)

{\displaystyle f=O(g)}

, then 

k
⋅ ⋅ 
f
=
O
(
g
)
.

{\displaystyle k\cdot f=O(g).}

### Transitive property

If 

f
=
O
(
g
)

{\displaystyle f=O(g)}

 and 

g
=
O
(
h
)

{\displaystyle g=O(h)}

 then

f
=
O
(
h
)

{\displaystyle f=O(h)}

.

If the function 

f

{\displaystyle f}

 of a positive integer

n

{\displaystyle n}

 can be written as a finite sum of other functions, then the fastest growing one determines the order of 

f
(
n
)

{\displaystyle f(n)}

. For example,

: f
(
n
)
=
9
log
⁡ ⁡ 
n
+
5
(
log
⁡ ⁡ 
n

)

4

+
3

n

2

+
2

n

3

=
O
(

n

3

)

for 

n
≥ ≥ 
1.

{\displaystyle f(n)=9\log n+5(\log n)^{4}+3n^{2}+2n^{3}=O(n^{3})\qquad {\text{for }}n\geq 1.}

Some general rules about growth *toward infinity*; the 2nd and 3rd property below
can be proved rigorously using [L'Hôpital's rule](https://en.wikipedia.org/wiki/L%27H%C3%B4pital%27s_rule):

### Large powers dominate small powers

For 

b
≥ ≥ 
a

{\displaystyle b\geq a}

, then

n

a

=
O
(

n

b

)

{\displaystyle n^{a}=O(n^{b})}

as 

n
→ → 
∞ ∞ 

{\displaystyle n\to \infty }

.

### Powers dominate logarithms

For any positive 

a
,
b
,

{\displaystyle a,b,}

(
log
⁡ ⁡ 
n

)

a

=

O

a
,
b

(

n

b

)
,

{\displaystyle (\log n)^{a}=O_{a,b}(n^{b}),}

no matter how large 

a

{\displaystyle a}

 is and how small

b

{\displaystyle b}

 is. Here, the implied constant depends
on both 

a

{\displaystyle a}

 and 

b

{\displaystyle b}

.

### Exponentials dominate powers

For any positive 

a
,
b
,

{\displaystyle a,b,}

n

a

=

O

a
,
b

(

e

b
n

)
,

{\displaystyle n^{a}=O_{a,b}(e^{bn}),}

no matter how large 

a

{\displaystyle a}

 is and how small

b

{\displaystyle b}

 is.

A function that grows faster than 

n

c

{\displaystyle n^{c}}

 for any 

c

{\displaystyle c}

 is called *superpolynomial*. One that grows more slowly than any exponential function of the form 

c

n

{\displaystyle c^{n}}

 with 

c
>
1

{\displaystyle c>1}

 is called *subexponential*. An algorithm can require time that is both superpolynomial and subexponential; examples of this include the fastest known algorithms for [integer factorization](https://en.wikipedia.org/wiki/Integer_factorization) and the function 

n

log
⁡ ⁡ 
n

{\displaystyle n^{\log n}}

.

We may ignore any powers of 

n

{\displaystyle n}

 inside of the logarithms. For any positive 

c

{\displaystyle c}

, the notation 

O
(
log
⁡ ⁡ 
n
)

{\displaystyle O(\log n)}

 means exactly the same thing as 

O
(
log
⁡ ⁡ 
(

n

c

)
)

{\displaystyle O(\log(n^{c}))}

, since 

log
⁡ ⁡ 
(

n

c

)
=
c
log
⁡ ⁡ 
n

{\displaystyle \log(n^{c})=c\log n}

. Similarly, logs with different constant bases are equivalent with respect to Big O 
notation. On the other hand, exponentials with different bases are not of the same order. For example, 

2

n

{\displaystyle 2^{n}}

 and 

3

n

{\displaystyle 3^{n}}

 are not of the same order.

### More complicated expressions

In more complicated usage, 

O
(
⋅ ⋅ 
)

{\displaystyle O(\cdot )}

 can appear in different places in an equation, even several times on each side. For example, the following are true for 

n

{\displaystyle n}

 a positive integer:

(
n
+
1

)

2

=

n

2

+
O
(
n
)
,

(
n
+
O
(

n

1

/

2

)
)
⋅ ⋅ 
(
n
+
O
(
log
⁡ ⁡ 
n
)

)

2

=

n

3

+
O
(

n

5

/

2

)
,

n

O
(
1
)

=
O
(

e

n

)
.

{\displaystyle {\begin{aligned}(n+1)^{2}&=n^{2}+O(n),\\(n+O(n^{1/2}))\cdot (n+O(\log n))^{2}&=n^{3}+O(n^{5/2}),\\n^{O(1)}&=O(e^{n}).\end{aligned}}}

The meaning of such statements is as follows: for *any* functions which satisfy each 

O
(
⋅ ⋅ 
)

{\displaystyle O(\cdot )}

 on the left side, there are *some* functions satisfying each 

O
(
⋅ ⋅ 
)

{\displaystyle O(\cdot )}

 on the right side, such that substituting all these functions into the equation makes the two sides equal. For example, the third equation above means: "For any function satisfying 

f
(
n
)
=
O
(
1
)

{\displaystyle f(n)=O(1)}

, there is some function 

g
(
n
)
=
O
(

e

n

)

{\displaystyle g(n)=O(e^{n})}

 such that 

n

f
(
n
)

=
g
(
n
)

{\displaystyle n^{f(n)}=g(n)}

". The implied constant in the statement "

g
(
n
)
=
O
(

e

n

)

{\displaystyle g(n)=O(e^{n})}

" may
depend on the implied constant in the expression
"

f
(
n
)
=
O
(
1
)

{\displaystyle f(n)=O(1)}

".

Some further examples:

f
=
O
(
g
)

⇒ ⇒ 

∫ ∫ 

a

b

f
=
O

(

∫ ∫ 

a

b

g

)

f
(
x
)
=
g
(
x
)
+
O
(
1
)

⇒ ⇒ 

e

f
(
x
)

=
O
(

e

g
(
x
)

)

(
1
+
O
(
1

/

x
)

)

O
(
x
)

=
O
(
1
)

 for 

x
>
0

sin
⁡ ⁡ 
x

=
O
(

|

x

|

)

 for all real 

x
.

{\displaystyle {\begin{aligned}f=O(g)\;&\Rightarrow \;\int _{a}^{b}f=O{\bigg (}\int _{a}^{b}g{\bigg )}\\f(x)=g(x)+O(1)\;&\Rightarrow \;e^{f(x)}=O(e^{g(x)})\\(1+O(1/x))^{O(x)}&=O(1)\quad {\text{ for }}x>0\\\sin x&=O(|x|)\quad {\text{ for all real }}x.\end{aligned}}}

### Vinogradov's ≫ and Knuth's big Ω

When 

f
,
g

{\displaystyle f,g}

 are both positive functions,
Vinogradov introduced the notation 

f
(
x
)
≫ ≫ 
g
(
x
)

{\displaystyle f(x)\gg g(x)}

, which means the same as 

g
(
x
)
=
O
(
f
(
x
)
)

{\displaystyle g(x)=O(f(x))}

. Vinogradov's two notations enjoy visual symmetry, as
for positive functions 

f
,
g

{\displaystyle f,g}

, we have

f
(
x
)
≪ ≪ 
g
(
x
)
⟺ ⟺ 
g
(
x
)
≫ ≫ 
f
(
x
)
.

{\displaystyle f(x)\ll g(x)\Longleftrightarrow g(x)\gg f(x).}

In 1976, [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)
defined

: f
(
x
)
=
Ω Ω 
(
g
(
x
)
)
⟺ ⟺ 
g
(
x
)
=
O
(
f
(
x
)
)

{\displaystyle f(x)=\Omega (g(x))\Longleftrightarrow g(x)=O(f(x))}

which has the same meaning as Vinogradov's 

f
(
x
)
≫ ≫ 
g
(
x
)

{\displaystyle f(x)\gg g(x)}

.

However, much earlier, Hardy and Littlewood had defined 

Ω Ω 

{\displaystyle \Omega }

 differently, and their notation enjoys widespread use today in analytic number theory.
Justifying his use of the 

Ω Ω 

{\displaystyle \Omega }

-symbol to describe a stronger property, Knuth wrote: "For all the applications I have seen so far in computer science, a stronger requirement ... is much more appropriate". Knuth further wrote, "Although I have changed Hardy and Littlewood's definition of 

Ω Ω 

{\displaystyle \Omega }

, I feel justified in doing so because their definition is by no means in wide use, and because there are other ways to say what they want to say in the comparatively rare cases when their definition applies." Knuth's big 

Ω Ω 

{\displaystyle \Omega }

 enjoys widespread use today
in computer science and combinatorics.

### Hardy's ≍ and Knuth's big Θ

In analytic number theory, the
notation 

f
(
x
)
≍ ≍ 
g
(
x
)

{\displaystyle f(x)\asymp g(x)}

 means both

f
(
x
)
=
O
(
g
(
x
)
)

{\displaystyle f(x)=O(g(x))}

 and 

g
(
x
)
=
O
(
f
(
x
)
)

{\displaystyle g(x)=O(f(x))}

. This notation is originally due to Hardy. Knuth's notation for the same notion 
is 

f
(
x
)
=
Θ Θ 
(
g
(
x
)
)

{\displaystyle f(x)=\Theta (g(x))}

. Roughly speaking, these statements assert that 

f
(
x
)

{\displaystyle f(x)}

 and 

g
(
x
)

{\displaystyle g(x)}

 have the *same order*. These notations mean that there are 
positive constants 

M
,
N

{\displaystyle M,N}

so that 

N
g
(
x
)
≤ ≤ 
f
(
x
)
≤ ≤ 
M
g
(
x
)

{\displaystyle Ng(x)\leq f(x)\leq Mg(x)}

for all 

x

{\displaystyle x}

 in the common domain of 

f
,
g

{\displaystyle f,g}

. When the functions are defined on the positive integers or positive real numbers, as with big O, writers oftentimes interpret statements

f
(
x
)
=
Ω Ω 
(
g
(
x
)
)

{\displaystyle f(x)=\Omega (g(x))}

 and 

f
(
x
)
=
Θ Θ 
(
g
(
x
)
)

{\displaystyle f(x)=\Theta (g(x))}

 as holding for all sufficiently large 

x

{\displaystyle x}

, that is, for all 

x

{\displaystyle x}

 beyond some point 

x

0

{\displaystyle x_{0}}

. Sometimes this is indicated by appending *x
→ → 
∞ ∞ 

{\displaystyle x\to \infty }* to the statement. For example,

2

n

2

− − 
10
n
=
Θ Θ 
(

n

2

)

{\displaystyle 2n^{2}-10n=\Theta (n^{2})}

is true for the domain 

n
≥ ≥ 
6

{\displaystyle n\geq 6}

 but false if the
domain is all positive integers, since the function is zero at 

n
=
5

{\displaystyle n=5}

.

#### Further examples

n

3

+
20

n

2

+
n
+
12
≍ ≍ 

n

3

 for all 

n
≥ ≥ 
1.

{\displaystyle n^{3}+20n^{2}+n+12\asymp n^{3}\quad {\text{ for all }}n\geq 1.}

(
1
+
x

)

8

=

x

8

+
Θ Θ 
(

x

7

)

 for all 

x
≥ ≥ 
1.

{\displaystyle (1+x)^{8}=x^{8}+\Theta (x^{7})\quad {\text{ for all }}x\geq 1.}

The notation

f
(
n
)
=

e

Ω Ω 
(
n
)

 for all 

n
≥ ≥ 
1
,

{\displaystyle f(n)=e^{\Omega (n)}\quad {\text{ for all }}n\geq 1,}

means that there is a positive constant 

M

{\displaystyle M}

so that 

f
(
n
)
≥ ≥ 

e

M
n

{\displaystyle f(n)\geq e^{Mn}}

 for all 

n
≥ ≥ 
1

{\displaystyle n\geq 1}

. By contrast,

f
(
n
)
=

e

− − 
O
(
n
)

 for all 

n
≥ ≥ 
1
,

{\displaystyle f(n)=e^{-O(n)}\quad {\text{ for all }}n\geq 1,}

means that there is a positive constant 

M

{\displaystyle M}

so that 

f
(
n
)
≥ ≥ 

e

− − 
M
n

{\displaystyle f(n)\geq e^{-Mn}}

 for all 

n
≥ ≥ 
1

{\displaystyle n\geq 1}

 and

f
(
n
)
=

e

Θ Θ 
(
n
)

 for all 

n
≥ ≥ 
1
,

{\displaystyle f(n)=e^{\Theta (n)}\quad {\text{ for all }}n\geq 1,}

means that there are positive constants 

M
,
N

{\displaystyle M,N}

so that 

e

M
n

≤ ≤ 
f
(
n
)
≤ ≤ 

e

N
n

{\displaystyle e^{Mn}\leq f(n)\leq e^{Nn}}

 for all 

n
≥ ≥ 
1

{\displaystyle n\geq 1}

.

For any domain 

D

{\displaystyle D}

,

f
(
x
)
=
g
(
x
)
+
O
(
1
)
⟺ ⟺ 

e

f
(
x
)

≍ ≍ 

e

g
(
x
)

,

{\displaystyle f(x)=g(x)+O(1)\Longleftrightarrow e^{f(x)}\asymp e^{g(x)},}

each statement being for all 

x

{\displaystyle x}

 in 

D

{\displaystyle D}

.

## Orders of common functions

Here is a list of classes of functions that are commonly encountered when analyzing the running time of an algorithm. In each case, *c* is a positive constant and *n* increases without bound. The slower-growing functions are generally listed first.

| Notation | Name | Example |
| --- | --- | --- |
| O ( 1 )   {\displaystyle O(1)} | [constant](https://en.wikipedia.org/wiki/Constant_time) | Finding the median value for a sorted array of numbers; Calculating     ( − −  1  )  n     {\displaystyle (-1)^{n}}  ; Using a constant-size [lookup table](https://en.wikipedia.org/wiki/Lookup_table) |
| O ( α α  ( n ) )   {\displaystyle O(\alpha (n))} | [inverse Ackermann function](https://en.wikipedia.org/wiki/Inverse_Ackermann_function) | Amortized complexity per operation for the [Disjoint-set data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) |
| O ( log ⁡ ⁡  log ⁡ ⁡  n )   {\displaystyle O(\log \log n)} | double logarithmic | Average number of comparisons spent finding an item using [interpolation search](https://en.wikipedia.org/wiki/Interpolation_search) in a sorted array of uniformly distributed values |
| O ( log ⁡ ⁡  n )   {\displaystyle O(\log n)} | [logarithmic](https://en.wikipedia.org/wiki/Logarithmic_time) | Finding an item in a sorted array with a [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) or a balanced search [tree](https://en.wikipedia.org/wiki/Tree_data_structure) as well as all operations in a [binomial heap](https://en.wikipedia.org/wiki/Binomial_heap) |
| O ( ( log ⁡ ⁡  n  )  c   )   {\displaystyle O((\log n)^{c})}         c > 1   {\textstyle c>1} | [polylogarithmic](https://en.wikipedia.org/wiki/Polylogarithmic_time) | Matrix chain ordering can be solved in polylogarithmic time on a [parallel random-access machine](https://en.wikipedia.org/wiki/Parallel_random-access_machine). |
| O (  n  c   )   {\displaystyle O(n^{c})}         0 < c < 1   {\textstyle 0<c<1} | fractional power | Searching in a [k-d tree](https://en.wikipedia.org/wiki/K-d_tree)   [Trial division](https://en.wikipedia.org/wiki/Trial_division) naive primality testing (    O (   n   )   {\displaystyle O({\sqrt {n}})}  ) |
| O ( n )   {\displaystyle O(n)} | [linear](https://en.wikipedia.org/wiki/Linear_time) | Finding an item in an unsorted list or in an unsorted array; adding two *n*-bit integers by [ripple carry](https://en.wikipedia.org/wiki/Ripple_carry_adder) |
| O ( n  log  ∗ ∗    ⁡ ⁡  n )   {\displaystyle O(n\log ^{*}n)} | *n* [log-star](https://en.wikipedia.org/wiki/Log-star) *n* | Performing [triangulation](https://en.wikipedia.org/wiki/Polygon_triangulation) of a simple polygon using Seidel's algorithm, where      log  ∗ ∗    ⁡ ⁡  ( n ) =   {    0 ,    if   n ≤ ≤  1     1 +  log  ∗ ∗    ⁡ ⁡  ( log ⁡ ⁡  n ) ,    if   n > 1         {\displaystyle \log ^{*}(n)={\begin{cases}0,&{\text{if }}n\leq 1\\1+\log ^{*}(\log n),&{\text{if }}n>1\end{cases}}} |
| O ( n log ⁡ ⁡  n ) = O ( log ⁡ ⁡  n ! )   {\displaystyle O(n\log n)=O(\log n!)} | [linearithmic](https://en.wikipedia.org/wiki/Linearithmic_time), loglinear, quasilinear, or "    n log ⁡ ⁡  n   {\displaystyle n\log n}  " | Performing a [fast Fourier transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform); fastest possible [comparison sort](https://en.wikipedia.org/wiki/Comparison_sort); [heapsort](https://en.wikipedia.org/wiki/Heapsort) and [merge sort](https://en.wikipedia.org/wiki/Merge_sort) |
| O (  n  2   )   {\displaystyle O(n^{2})} | [quadratic](https://en.wikipedia.org/wiki/Quadratic_time) | Multiplying two     n   {\displaystyle n}  -digit numbers by [schoolbook multiplication](https://en.wikipedia.org/wiki/Multiplication_algorithm#Long_multiplication); simple sorting algorithms, such as [bubble sort](https://en.wikipedia.org/wiki/Bubble_sort), [selection sort](https://en.wikipedia.org/wiki/Selection_sort) and [insertion sort](https://en.wikipedia.org/wiki/Insertion_sort); (worst-case) bound on some usually faster sorting algorithms such as [quicksort](https://en.wikipedia.org/wiki/Quicksort), [Shellsort](https://en.wikipedia.org/wiki/Shellsort), and [tree sort](https://en.wikipedia.org/wiki/Tree_sort) |
| O (  n  c   )   {\displaystyle O(n^{c})} | [polynomial](https://en.wikipedia.org/wiki/Polynomial_time) or algebraic | [Tree-adjoining grammar](https://en.wikipedia.org/wiki/Tree-adjoining_grammar) parsing; maximum [matching](https://en.wikipedia.org/wiki/Matching_(graph_theory)) for [bipartite graphs](https://en.wikipedia.org/wiki/Bipartite_graph); finding the [determinant](https://en.wikipedia.org/wiki/Determinant) with [LU decomposition](https://en.wikipedia.org/wiki/LU_decomposition) |
| L  n   [ α α  , c ] =  e  ( c + o ( 1 ) ) ( ln ⁡ ⁡  n  )  α α    ( ln ⁡ ⁡  ln ⁡ ⁡  n  )  1 − −  α α        {\displaystyle L_{n}[\alpha ,c]=e^{(c+o(1))(\ln n)^{\alpha }(\ln \ln n)^{1-\alpha }}}         0 < α α  < 1   {\textstyle 0<\alpha <1} | [L-notation](https://en.wikipedia.org/wiki/L-notation) or [sub-exponential](https://en.wikipedia.org/wiki/Sub-exponential_time) | Factoring a number using the [quadratic sieve](https://en.wikipedia.org/wiki/Quadratic_sieve) or [number field sieve](https://en.wikipedia.org/wiki/General_number_field_sieve) |
| O (  c  n   )   {\displaystyle O(c^{n})}         c > 1   {\textstyle c>1} | [exponential](https://en.wikipedia.org/wiki/Exponential_time) | Finding the (exact) solution to the [travelling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem) using [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming); determining if two logical statements are equivalent using [brute-force search](https://en.wikipedia.org/wiki/Brute-force_search) |
| O ( n ! )   {\displaystyle O(n!)} | [factorial](https://en.wikipedia.org/wiki/Factorial) | Solving the [travelling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem) via brute-force search; generating all unrestricted permutations of a [poset](https://en.wikipedia.org/wiki/Partially_ordered_set); finding the [determinant](https://en.wikipedia.org/wiki/Determinant) with [Laplace expansion](https://en.wikipedia.org/wiki/Laplace_expansion); enumerating [all partitions of a set](https://en.wikipedia.org/wiki/Bell_number) |

The statement 

f
(
n
)
=
O
(
n
!
)

{\displaystyle f(n)=O(n!)}

 is sometimes weakened to 

f
(
n
)
=
O

(

n

n

)

{\displaystyle f(n)=O\left(n^{n}\right)}

 to derive simpler formulas for asymptotic complexity.
In many of these examples, the running time is
actually 

Θ Θ 
(
g
(
n
)
)

{\displaystyle \Theta (g(n))}

, which conveys more
precision.

## Little-o notation

For real or complex-valued functions of a real variable

x

{\displaystyle x}

 with 

g
(
x
)
>
0

{\displaystyle g(x)>0}

 for [sufficiently large](https://en.wikipedia.org/wiki/Eventually_(mathematics)) 

x

{\displaystyle x}

, one writes

: f
(
x
)
=
o
(
g
(
x
)
)

 as 

x
→ → 
∞ ∞ 

{\displaystyle f(x)=o(g(x))\quad {\text{ as }}x\to \infty }

if 

lim

x
→ → 
∞ ∞ 

f
(
x
)

g
(
x
)

=
0.

{\displaystyle \lim _{x\to \infty }{\frac {f(x)}{g(x)}}=0.}

That is, for every positive constant ε there exists a constant 

x

0

{\displaystyle x_{0}}

 such that

: |

f
(
x
)

|

≤ ≤ 
ε ε 
g
(
x
)

 for all 

x
≥ ≥ 

x

0

.

{\displaystyle |f(x)|\leq \varepsilon g(x)\quad {\text{ for all }}x\geq x_{0}.}

Intuitively, this means that 

g
(
x
)

{\displaystyle g(x)}

 grows much faster than 

f
(
x
)

{\displaystyle f(x)}

, or equivalently 

f
(
x
)

{\displaystyle f(x)}

 grows much slower than 

g
(
x
)

{\displaystyle g(x)}

.
For example, one has

: 200
x
=
o
(

x

2

)

{\displaystyle 200x=o(x^{2})}

 and 

1

/

x
=
o
(
1
)
,

{\displaystyle 1/x=o(1),}

     both as 

x
→ → 
∞ ∞ 
.

{\displaystyle x\to \infty .}

When one is interested in the behavior of a function for large values of 

x

{\displaystyle x}

, little-o notation makes a *stronger statement* than the corresponding big-O notation: every function that is little-o of 

g

{\displaystyle g}

 is also big-O of 

g

{\displaystyle g}

 on some interval 

[
a
,
∞ ∞ 
)

{\displaystyle [a,\infty )}

, but not every function that is big-O of 

g

{\displaystyle g}

 is little-o of 

g

{\displaystyle g}

. For example, 

2

x

2

=
O
(

x

2

)

{\displaystyle 2x^{2}=O(x^{2})}

 but 

2

x

2

≠ ≠ 
o
(

x

2

)

{\displaystyle 2x^{2}\neq o(x^{2})}

 for 

x
≥ ≥ 
1

{\displaystyle x\geq 1}

.

Little-o respects a number of arithmetic operations. For example,

: if 

c

{\displaystyle c}

 is a nonzero constant and 

f
=
o
(
g
)

{\displaystyle f=o(g)}

 then 

c
⋅ ⋅ 
f
=
o
(
g
)

{\displaystyle c\cdot f=o(g)}

, and
: if 

f
=
o
(
F
)

{\displaystyle f=o(F)}

 and 

g
=
o
(
G
)

{\displaystyle g=o(G)}

 then 

f
⋅ ⋅ 
g
=
o
(
F
⋅ ⋅ 
G
)
.

{\displaystyle f\cdot g=o(F\cdot G).}
: if 

f
=
o
(
F
)

{\displaystyle f=o(F)}

 and 

g
=
o
(
G
)

{\displaystyle g=o(G)}

 then 

f
+
g
=
o
(
F
+
G
)

{\displaystyle f+g=o(F+G)}

It also satisfies a [transitivity](https://en.wikipedia.org/wiki/Transitive_relation) relation:

: if 

f
=
o
(
g
)

{\displaystyle f=o(g)}

 and 

g
=
o
(
h
)

{\displaystyle g=o(h)}

 then 

f
=
o
(
h
)
.

{\displaystyle f=o(h).}

Little-o can also be generalized to the finite case:

f
(
x
)
=
o
(
g
(
x
)
)

 as 

x
→ → 

x

0

{\displaystyle f(x)=o(g(x))\quad {\text{ as }}x\to x_{0}}

 if 

lim

x
→ → 

x

0

f
(
x
)

g
(
x
)

=
0.

{\displaystyle \lim _{x\to x_{0}}{\frac {f(x)}{g(x)}}=0.}

In other words,

f
(
x
)
=
α α 
(
x
)
g
(
x
)

{\displaystyle f(x)=\alpha (x)g(x)}

 for some 

α α 
(
x
)

{\displaystyle \alpha (x)}

 with 

lim

x
→ → 

x

0

α α 
(
x
)
=
0

{\displaystyle \lim _{x\to x_{0}}\alpha (x)=0}

.

This definition is especially useful in the computation of [limits](https://en.wikipedia.org/wiki/Limit_of_a_function) using [Taylor series](https://en.wikipedia.org/wiki/Taylor_series). For example:

sin
⁡ ⁡ 
x
=
x
− − 

x

3

3
!

+
… … 
=
x
+
o
(

x

2

)

 as 

x
→ → 
0

{\displaystyle \sin x=x-{\frac {x^{3}}{3!}}+\ldots =x+o(x^{2}){\text{ as }}x\to 0}

, so 

lim

x
→ → 
0

sin
⁡ ⁡ 
x

x

=

lim

x
→ → 
0

x
+
o
(

x

2

)

x

=

lim

x
→ → 
0

1
+
o
(
x
)
=
1

{\displaystyle \lim _{x\to 0}{\frac {\sin x}{x}}=\lim _{x\to 0}{\frac {x+o(x^{2})}{x}}=\lim _{x\to 0}1+o(x)=1}

### Asymptotic notation

A relation related to little-o is the *asymptotic* notation

∼ ∼ 

{\displaystyle \sim }

.
For real valued functions 

f
,
g

{\displaystyle f,g}

, the expression 

f
(
x
)
∼ ∼ 
g
(
x
)

 as 

x
→ → 
∞ ∞ 

{\displaystyle f(x)\sim g(x)\quad {\text{ as }}x\to \infty }

means 

lim

x
→ → 
∞ ∞ 

f
(
x
)

g
(
x
)

=
1.

{\displaystyle \lim _{x\to \infty }{\frac {f(x)}{g(x)}}=1.}

One can connect this to little-o by observing that

f
(
x
)
∼ ∼ 
g
(
x
)

{\displaystyle f(x)\sim g(x)}

 is also equivalent to

f
(
x
)
=
(
1
+
o
(
1
)
)
g
(
x
)

{\displaystyle f(x)=(1+o(1))g(x)}

. Here 

o
(
1
)

{\displaystyle o(1)}

 refers to a function tending to zero as 

x
→ → 
∞ ∞ 

{\displaystyle x\to \infty }

. One reads this as
"

f
(
x
)

{\displaystyle f(x)}

 is *asymptotic to* 

g
(
x
)

{\displaystyle g(x)}

". For nonzero functions on the same (finite or infinite) domain, 

∼ ∼ 

{\displaystyle \sim }

 forms an
[equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation).

One of the most famous theorems using the notation 

∼ ∼ 

{\displaystyle \sim }

 is [Stirling's formula](https://en.wikipedia.org/wiki/Stirling%27s_formula)

n
!
∼ ∼ 

(

n
e

)

n

2
π π 
n

 as 

n
→ → 
∞ ∞ 
.

{\displaystyle n!\sim {\bigg (}{\frac {n}{e}}{\bigg )}^{n}{\sqrt {2\pi n}}\quad {\text{ as }}n\to \infty .}

In number theory, the famous [prime number theorem](https://en.wikipedia.org/wiki/Prime_number_theorem) states that

π π 
(
x
)
∼ ∼ 

x

log
⁡ ⁡ 
x

 as 

x
→ → 
∞ ∞ 
,

{\displaystyle \pi (x)\sim {\frac {x}{\log x}}\quad {\text{ as }}x\to \infty ,}

where 

π π 
(
x
)

{\displaystyle \pi (x)}

 is the number of primes which
are at most 

x

{\displaystyle x}

 and 

log

{\displaystyle \log }

 is the
[natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm) of 

x

{\displaystyle x}

.

As with little-o, there is a version with finite limits (two-sided or [one-sided](https://en.wikipedia.org/wiki/One-sided_limit)) as well, for example 

sin
⁡ ⁡ 
x
∼ ∼ 
x

 as 

x
→ → 
0.

{\displaystyle \sin x\sim x\quad {\text{ as }}x\to 0.}

Further examples:

x

a

=

o

a
,
b

(

e

b
x

)

 as 

x
→ → 
∞ ∞ 
,

 for any positive constants 

a
,
b
,

{\displaystyle x^{a}=o_{a,b}(e^{bx})\quad {\text{ as }}x\to \infty ,{\text{ for any positive constants }}a,b,}

f
(
x
)
=
g
(
x
)
+
o
(
1
)

⟺ ⟺ 

e

f
(
x
)

∼ ∼ 

e

g
(
x
)

(
x
→ → 
∞ ∞ 
)
.

{\displaystyle f(x)=g(x)+o(1)\quad \Longleftrightarrow \quad e^{f(x)}\sim e^{g(x)}\quad (x\to \infty ).}

∑ ∑ 

n
=
1

∞ ∞ 

1

n

s

∼ ∼ 

1

s
− − 
1

(
s
→ → 

1

+

)
.

{\displaystyle \sum _{n=1}^{\infty }{\frac {1}{n^{s}}}\sim {\frac {1}{s-1}}\quad (s\to 1^{+}).}

The last asymptotic is a basic property of the
[Riemann zeta function](https://en.wikipedia.org/wiki/Riemann_zeta_function).

### Knuth's little 𝜔

For eventually positive, real valued functions 

f
,
g
,

{\displaystyle f,g,}

 the notation

f
(
x
)
=
ω ω 
(
g
(
x
)
)

 as 

x
→ → 
∞ ∞ 

{\displaystyle f(x)=\omega (g(x))\quad {\text{ as }}x\to \infty }

means 

lim

x
→ → 
∞ ∞ 

f
(
x
)

g
(
x
)

=
∞ ∞ 
.

{\displaystyle \lim _{x\to \infty }{\frac {f(x)}{g(x)}}=\infty .}

In other words, 

g
(
x
)
=
o
(
f
(
x
)
)

{\displaystyle g(x)=o(f(x))}

.
Roughly speaking, this means that 

f
(
x
)

{\displaystyle f(x)}

grows much faster than does 

g
(
x
)

{\displaystyle g(x)}

.

### The Hardy–Littlewood Ω notation

In 1914 [G.H. Hardy](https://en.wikipedia.org/wiki/Godfrey_Harold_Hardy) and [J.E. Littlewood](https://en.wikipedia.org/wiki/John_Edensor_Littlewood) introduced the new symbol 

 
Ω Ω 
,

{\displaystyle \ \Omega ,}

 which is defined as follows:

: f
(
x
)
=
Ω Ω 
(
g
(
x
)
)

{\displaystyle f(x)=\Omega (g(x))\quad }

 as 

x
→ → 
∞ ∞ 

{\displaystyle \quad x\to \infty \quad }

 if 

lim sup

x
→ → 
∞ ∞ 

 

|

 
f
(
x
)
 

g
(
x
)

|

>
0
 
.

{\displaystyle \quad \limsup _{x\to \infty }\ \left|{\frac {\ f(x)\ }{g(x)}}\right|>0~.}

Thus 

 
f
(
x
)
=
Ω Ω 
(
g
(
x
)
)
 

{\displaystyle ~f(x)=\Omega (g(x))~}

 is the negation of 

 
f
(
x
)
=
o
(
g
(
x
)
)
 
.

{\displaystyle ~f(x)=o(g(x))~.}

In 1916 the same authors introduced the two new symbols 

 

Ω Ω 

R

 

{\displaystyle \ \Omega _{R}\ }

 and 

 

Ω Ω 

L

 
,

{\displaystyle \ \Omega _{L}\ ,}

 defined as:

: f
(
x
)
=

Ω Ω 

R

(
g
(
x
)
)

{\displaystyle f(x)=\Omega _{R}(g(x))\quad }

 as 

x
→ → 
∞ ∞ 

{\displaystyle \quad x\to \infty \quad }

 if 

lim sup

x
→ → 
∞ ∞ 

 

 
f
(
x
)
 

g
(
x
)

>
0
 
;

{\displaystyle \quad \limsup _{x\to \infty }\ {\frac {\ f(x)\ }{g(x)}}>0\ ;}

: f
(
x
)
=

Ω Ω 

L

(
g
(
x
)
)

{\displaystyle f(x)=\Omega _{L}(g(x))\quad }

 as 

x
→ → 
∞ ∞ 

{\displaystyle \quad x\to \infty \quad }

 if 

 

lim inf

x
→ → 
∞ ∞ 

 

 
f
(
x
)
 

g
(
x
)

<
0
 
.

{\displaystyle \quad ~\liminf _{x\to \infty }\ {\frac {\ f(x)\ }{g(x)}}<0~.}

These symbols were used by [E. Landau](https://en.wikipedia.org/wiki/Edmund_Landau), with the same meanings, in 1924. Authors that followed Landau, however, use a different notation for the same definitions: The symbol 

 

Ω Ω 

R

 

{\displaystyle \ \Omega _{R}\ }

 has been replaced by the current notation 

 

Ω Ω 

+

 

{\displaystyle \ \Omega _{+}\ }

 with the same definition, and 

 

Ω Ω 

L

 

{\displaystyle \ \Omega _{L}\ }

 became 

 

Ω Ω 

− − 

 
.

{\displaystyle \ \Omega _{-}~.}

These three symbols 

 
Ω Ω 
 
,

Ω Ω 

+

 
,

Ω Ω 

− − 

 
,

{\displaystyle \ \Omega \ ,\Omega _{+}\ ,\Omega _{-}\ ,}

 as well as 

 
f
(
x
)
=

Ω Ω 

± ± 

(
g
(
x
)
)
 

{\displaystyle \ f(x)=\Omega _{\pm }(g(x))\ }

 (meaning that 

 
f
(
x
)
=

Ω Ω 

+

(
g
(
x
)
)
 

{\displaystyle \ f(x)=\Omega _{+}(g(x))\ }

 and 

 
f
(
x
)
=

Ω Ω 

− − 

(
g
(
x
)
)
 

{\displaystyle \ f(x)=\Omega _{-}(g(x))\ }

 are both satisfied), are now currently used in [analytic number theory](https://en.wikipedia.org/wiki/Analytic_number_theory).

#### Simple examples

We have

: sin
⁡ ⁡ 
x
=
Ω Ω 
(
1
)

{\displaystyle \sin x=\Omega (1)\quad }

 as 

x
→ → 
∞ ∞ 
 
,

{\displaystyle \quad x\to \infty \ ,}

and more precisely

: sin
⁡ ⁡ 
x
=

Ω Ω 

± ± 

(
1
)

{\displaystyle \sin x=\Omega _{\pm }(1)\quad }

 as 

x
→ → 
∞ ∞ 
,
 

{\displaystyle \quad x\to \infty ,~}

where 

Ω Ω 

± ± 

{\displaystyle \Omega _{\pm }}

 means that the left side is both 

Ω Ω 

+

(
1
)

{\displaystyle \Omega _{+}(1)}

 and 

Ω Ω 

− − 

(
1
)

{\displaystyle \Omega _{-}(1)}

,

We have

: 1
+
sin
⁡ ⁡ 
x
=
Ω Ω 
(
1
)

{\displaystyle 1+\sin x=\Omega (1)\quad }

 as 

x
→ → 
∞ ∞ 
 
,

{\displaystyle \quad x\to \infty \ ,}

and more precisely

: 1
+
sin
⁡ ⁡ 
x
=

Ω Ω 

+

(
1
)

{\displaystyle 1+\sin x=\Omega _{+}(1)\quad }

 as 

x
→ → 
∞ ∞ 
 
;

{\displaystyle \quad x\to \infty \ ;}

however

: 1
+
sin
⁡ ⁡ 
x
≠ ≠ 

Ω Ω 

− − 

(
1
)

{\displaystyle 1+\sin x\neq \Omega _{-}(1)\quad }

 as 

x
→ → 
∞ ∞ 
 
.

{\displaystyle \quad x\to \infty ~.}

### Family of Bachmann–Landau notations

For understanding the formal definitions, consult the
[list of logic symbols](https://en.wikipedia.org/wiki/List_of_logic_symbols) used in mathematics.

| Notation | Name | Description | Formal definition | Compact definition |
| --- | --- | --- | --- | --- |
| f ( n ) = o ( g ( n ) )   {\displaystyle f(n)=o(g(n))} | Small O; Small Oh; Little O; Little Oh | f is dominated by g asymptotically (for any constant factor     k   {\displaystyle k}  ) | ∀ ∀  k > 0  ∃ ∃   n  0    ∀ ∀  n >  n  0   : :   \|  f ( n )  \|  ≤ ≤  k  g ( n )   {\displaystyle \forall k>0\,\exists n_{0}\,\forall n>n_{0}\colon \|f(n)\|\leq k\,g(n)} | lim  n → →  ∞ ∞       f ( n )   g ( n )    = 0   {\displaystyle \lim _{n\to \infty }{\frac {f(n)}{g(n)}}=0} |
| f ( n ) = O ( g ( n ) )   {\displaystyle f(n)=O(g(n))}   or     f ( n ) ≪ ≪  g ( n )   {\displaystyle f(n)\ll g(n)}   (Vinogradov's notation) | Big O; Big Oh; Big Omicron | \|  f  \|    {\displaystyle \|f\|}   is bounded above by g (up to constant factor     k   {\displaystyle k}  ) | ∃ ∃  k > 0  ∀ ∀  n ∈ ∈  D : :   \|  f ( n )  \|  ≤ ≤  k  g ( n )   {\displaystyle \exists k>0\,\forall n\in D\colon \|f(n)\|\leq k\,g(n)} | sup  n ∈ ∈  D      \|  f ( n )  \|   g ( n )    < ∞ ∞    {\displaystyle \sup _{n\in D}{\frac {\left\|f(n)\right\|}{g(n)}}<\infty } |
| f ( n ) ≍ ≍  g ( n )   {\displaystyle f(n)\asymp g(n)}   (Hardy's notation) or     f ( n ) = Θ Θ  ( g ( n ) )   {\displaystyle f(n)=\Theta (g(n))}   (Knuth notation) | Of the same order as (Hardy); Big Theta (Knuth) | f is bounded by g both above (with constant factor      k  2     {\displaystyle k_{2}}  ) and below (with constant factor      k  1     {\displaystyle k_{1}}  ) | ∃ ∃   k  1   > 0  ∃ ∃   k  2   > 0  ∀ ∀  n ∈ ∈  D : :    {\displaystyle \exists k_{1}>0\,\exists k_{2}>0\,\forall n\in D\colon }        k  1    g ( n ) ≤ ≤  f ( n ) ≤ ≤   k  2    g ( n )   {\displaystyle k_{1}\,g(n)\leq f(n)\leq k_{2}\,g(n)} | f ( n ) = O ( g ( n ) )   {\displaystyle f(n)=O(g(n))}   and     g ( n ) = O ( f ( n ) )   {\displaystyle g(n)=O(f(n))} |
| f ( n ) ∼ ∼  g ( n )   {\displaystyle f(n)\sim g(n)}   as     n → →  a   {\displaystyle n\to a}  , where     a   {\displaystyle a}   is finite,     ∞ ∞    {\displaystyle \infty }   or     − −  ∞ ∞    {\displaystyle -\infty } | Asymptotic equivalence | f is equal to g [asymptotically](https://en.wikipedia.org/wiki/Asymptotic_analysis) | ∀ ∀  ε ε  > 0  ∃ ∃   n  0    ∀ ∀  n >  n  0   : :   \|     f ( n )   g ( n )    − −  1  \|  < ε ε    {\displaystyle \forall \varepsilon >0\,\exists n_{0}\,\forall n>n_{0}\colon \left\|{\frac {f(n)}{g(n)}}-1\right\|<\varepsilon }   (in the case     a = ∞ ∞    {\displaystyle a=\infty }  ) | lim  n → →  a      f ( n )   g ( n )    = 1   {\displaystyle \lim _{n\to a}{\frac {f(n)}{g(n)}}=1} |
| f ( n ) = Ω Ω  ( g ( n ) )   {\displaystyle f(n)=\Omega (g(n))}   (Knuth's notation), or     f ( n ) ≫ ≫  g ( n )   {\displaystyle f(n)\gg g(n)}   (Vinogradov's notation) | Big Omega in complexity theory (Knuth) | f is bounded below by g, up to a constant factor | ∃ ∃  k > 0  ∀ ∀  n ∈ ∈  D : :  f ( n ) ≥ ≥  k  g ( n )   {\displaystyle \exists k>0\,\forall n\in D\colon f(n)\geq k\,g(n)} | inf  n ∈ ∈  D      f ( n )   g ( n )    > 0   {\displaystyle \inf _{n\in D}{\frac {f(n)}{g(n)}}>0} |
| f ( n ) = ω ω  ( g ( n ) )   {\displaystyle f(n)=\omega (g(n))}   as     n → →  a   {\displaystyle n\to a}  , where     a   {\displaystyle a}   can be finite,     ∞ ∞    {\displaystyle \infty }   or     − −  ∞ ∞    {\displaystyle -\infty } | Small Omega; Little Omega | f dominates g asymptotically | ∀ ∀  k > 0  ∃ ∃   n  0    ∀ ∀  n >  n  0   : :  f ( n ) > k  g ( n )   {\displaystyle \forall k>0\,\exists n_{0}\,\forall n>n_{0}\colon f(n)>k\,g(n)}   (for     a = ∞ ∞    {\displaystyle a=\infty }  ) | lim  n → →  a      f ( n )   g ( n )    = ∞ ∞    {\displaystyle \lim _{n\to a}{\frac {f(n)}{g(n)}}=\infty } |
| f ( n ) = Ω Ω  ( g ( n ) )   {\displaystyle f(n)=\Omega (g(n))} | Big Omega in number theory (Hardy–Littlewood) | \|  f  \|    {\displaystyle \|f\|}   is not dominated by g asymptotically | ∃ ∃  k > 0  ∀ ∀   n  0    ∃ ∃  n >  n  0   : :   \|  f ( n )  \|  ≥ ≥  k  g ( n )   {\displaystyle \exists k>0\,\forall n_{0}\,\exists n>n_{0}\colon \|f(n)\|\geq k\,g(n)} | lim sup  n → →  ∞ ∞       \|  f ( n )  \|   g ( n )    > 0   {\displaystyle \limsup _{n\to \infty }{\frac {\left\|f(n)\right\|}{g(n)}}>0} |

The limit definitions assume 

g
(
n
)
>
0

{\displaystyle g(n)>0}

 for

n

{\displaystyle n}

 in a neighborhood of the limit; when the
limit is 

∞ ∞ 

{\displaystyle \infty }

, this means that 

g
(
n
)
>
0

{\displaystyle g(n)>0}

 for sufficiently large 

n

{\displaystyle n}

.

Computer science and combinatorics use the big 

O

{\displaystyle O}

, big Theta 

Θ Θ 

{\displaystyle \Theta }

, little 

o

{\displaystyle o}

, little omega 

ω ω 

{\displaystyle \omega }

 and Knuth's big Omega 

Ω Ω 

{\displaystyle \Omega }

 notations.
 
Analytic number theory often uses the big 

O

{\displaystyle O}

, small 

o

{\displaystyle o}

, Hardy's 

≍ ≍ 

{\displaystyle \asymp }

,
Hardy–Littlewood's big Omega 

Ω Ω 

{\displaystyle \Omega }

 (with or without the +, − or ± subscripts), Vinogradov's 

≪ ≪ 

{\displaystyle \ll }

 and 

≫ ≫ 

{\displaystyle \gg }

 notations and 

∼ ∼ 

{\displaystyle \sim }

 notations.

 
The small omega 

ω ω 

{\displaystyle \omega }

 notation is not used as often in analysis or in number theory.

### Quality of approximations using different notation

Informally, especially in computer science, the big 

O

{\displaystyle O}

 notation often can be used somewhat differently to describe an asymptotic [tight](https://en.wikipedia.org/wiki/Upper_and_lower_bounds#Tight_bounds) bound where using big Theta 

Θ Θ 

{\displaystyle \Theta }

 notation might be more factually appropriate in a given context
.
For example, when considering a function 

T
(
n
)
=
73

n

3

+
22

n

2

+
58

{\displaystyle T(n)=73n^{3}+22n^{2}+58}

, all of the following are generally acceptable, but tighter bounds (such as numbers 2,3 and 4 below) are usually strongly preferred over looser bounds (such as number 1 below).

1. T
(
n
)
=
O
(

n

100

)

{\displaystyle T(n)=O(n^{100})}
2. T
(
n
)
=
O
(

n

3

)

{\displaystyle T(n)=O(n^{3})}
3. T
(
n
)
=
Θ Θ 
(

n

3

)

{\displaystyle T(n)=\Theta (n^{3})}
4. T
(
n
)
∼ ∼ 
73

n

3

{\displaystyle T(n)\sim 73n^{3}}

 as 

n
→ → 
∞ ∞ 

{\displaystyle n\to \infty }

.

While all three statements are true, progressively more information is contained in each. In some fields, however, the big O notation (number 2 in the lists above) would be used more commonly than the big Theta notation (items numbered 3 in the lists above). For example, if 

T
(
n
)

{\displaystyle T(n)}

 represents the running time of a newly developed algorithm for input size 

n

{\displaystyle n}

, the inventors and users of the algorithm might be more inclined to put an upper bound on how long it will take to run without making an explicit statement about the lower bound or asymptotic behavior.

### Extensions to the Bachmann–Landau notations

Another notation sometimes used in computer science is 

O
~ ~ 

{\displaystyle {\tilde {O}}}

 (read *soft-O*), which hides polylogarithmic factors. There are two definitions in use: some authors use 

f
(
n
)
=

O
~ ~ 

(
g
(
n
)
)

{\displaystyle f(n)={\tilde {O}}(g(n))}

 as shorthand for 

f
(
n
)
=
O
(
g
(
n
)

log

k

⁡ ⁡ 
n
)

{\displaystyle f(n)=O(g(n)\log ^{k}n)}

 for some 

k

{\displaystyle k}

, while others use it as shorthand for 

f
(
n
)
=
O
(
g
(
n
)

log

k

⁡ ⁡ 
g
(
n
)
)

{\displaystyle f(n)=O(g(n)\log ^{k}g(n))}

.
When 

g
(
n
)

{\displaystyle g(n)}

 is polynomial in 

n

{\displaystyle n}

, there is no difference; however, the latter definition allows one to say, e.g. that 

n

2

n

=

O
~ ~ 

(

2

n

)

{\displaystyle n2^{n}={\tilde {O}}(2^{n})}

 while the former definition allows for 

log

k

⁡ ⁡ 
n
=

O
~ ~ 

(
1
)

{\displaystyle \log ^{k}n={\tilde {O}}(1)}

 for any constant 

k

{\displaystyle k}

. Some authors write *O* for the same purpose as the latter definition. Essentially, it is less precise version of the big *O* notation, ignoring [logarithmic factors](https://en.wikipedia.org/wiki/Polylogarithmic_function) in the [growth-rate](https://en.wikipedia.org/wiki/Asymptotic_analysis) of the function.  Since 

log

k

⁡ ⁡ 
n
=
o
(

n

ε ε 

)

{\displaystyle \log ^{k}n=o(n^{\varepsilon })}

for any constant 

k

{\displaystyle k}

 and any 

ε ε 
>
0

{\displaystyle \varepsilon >0}

, logarithmic factors are far less significant than powers of 

n

{\displaystyle n}

 and even more insignificant compared with exponentials.

Also, the [*L* notation](https://en.wikipedia.org/wiki/L-notation), defined as

: L

n

[
α α 
,
c
]
=

e

(
c
+
o
(
1
)
)
(
ln
⁡ ⁡ 
n

)

α α 

(
ln
⁡ ⁡ 
ln
⁡ ⁡ 
n

)

1
− − 
α α 

,

{\displaystyle L_{n}[\alpha ,c]=e^{(c+o(1))(\ln n)^{\alpha }(\ln \ln n)^{1-\alpha }},}

is convenient for functions that are between [polynomial](https://en.wikipedia.org/wiki/Time_complexity#Polynomial_time) and [exponential](https://en.wikipedia.org/wiki/Time_complexity#Exponential_time) in terms of 

log
⁡ ⁡ 
n

{\displaystyle \log n}

.

## Generalizations and related usages

The generalization to functions taking values in any [normed vector space](https://en.wikipedia.org/wiki/Normed_vector_space) is straightforward (replacing absolute values by norms), where 

f

{\displaystyle f}

 and 

g

{\displaystyle g}

 need not take their values in the same space. A generalization to functions 

g

{\displaystyle g}

 taking values in any [topological group](https://en.wikipedia.org/wiki/Topological_group) is also possible.
The "limiting process" 

x
→ → 

x

0

{\displaystyle x\to x_{0}}

 can also be generalized by introducing an arbitrary [filter base](https://en.wikipedia.org/wiki/Filter_base), i.e. to directed [nets](https://en.wikipedia.org/wiki/Net_(mathematics)) 

f

{\displaystyle f}

 and 

g

{\displaystyle g}

. The 

o

{\displaystyle o}

 notation can be used to define [derivatives](https://en.wikipedia.org/wiki/Derivative) and [differentiability](https://en.wikipedia.org/wiki/Differentiability) in quite general spaces, and also (asymptotical) equivalence of functions,

: f
∼ ∼ 
g

⟺ ⟺ 

(
f
− − 
g
)
∈ ∈ 
o
(
g
)

{\displaystyle f\sim g\iff (f-g)\in o(g)}

which is an [equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation) and a more restrictive notion than the relationship "

f

{\displaystyle f}

 is 

Θ Θ 
(
g
)

{\displaystyle \Theta (g)}

" from above. (It reduces to 

lim
f

/

g
=
1

{\displaystyle \lim f/g=1}

 if 

f

{\displaystyle f}

 and 

g

{\displaystyle g}

 are positive real valued functions.) For example, 

2
x
=
Θ Θ 
(
x
)

{\displaystyle 2x=\Theta (x)}

 is, but 

2
x
− − 
x
≠ ≠ 
o
(
x
)

{\displaystyle 2x-x\neq o(x)}

.

## History

We sketch the history of the Bois-Reymond, Bachmann–Landau, Hardy, Vinogradov and Knuth notations.

In 1870, Paul du Bois-Reymond 
defined 

f
(
x
)
≻ ≻ 
ϕ ϕ 
(
x
)

{\displaystyle f(x)\succ \phi (x)}

, 

f
(
x
)
∼ ∼ 
ϕ ϕ 
(
x
)

{\displaystyle f(x)\sim \phi (x)}

 and 

f
(
x
)
≺ ≺ 
ϕ ϕ 
(
x
)

{\displaystyle f(x)\prec \phi (x)}

to mean, respectively,

lim

x
→ → 
∞ ∞ 

f
(
x
)

ϕ ϕ 
(
x
)

=
∞ ∞ 
,

lim

x
→ → 
∞ ∞ 

f
(
x
)

ϕ ϕ 
(
x
)

>
0
,

lim

x
→ → 
∞ ∞ 

f
(
x
)

ϕ ϕ 
(
x
)

=
0.

{\displaystyle \lim _{x\to \infty }{\frac {f(x)}{\phi (x)}}=\infty ,\quad \lim _{x\to \infty }{\frac {f(x)}{\phi (x)}}>0,\quad \lim _{x\to \infty }{\frac {f(x)}{\phi (x)}}=0.}

These were not widely adopted and are not used today.
The first and third enjoy a symmetry: 

f
(
x
)
≺ ≺ 
ϕ ϕ 
(
x
)

{\displaystyle f(x)\prec \phi (x)}

 means the same as 

ϕ ϕ 
(
x
)
≻ ≻ 
f
(
x
)

{\displaystyle \phi (x)\succ f(x)}

.
Later, Landau adopted 

∼ ∼ 

{\displaystyle \sim }

 in the narrower
sense that the limit of 

f
(
x
)

/

ϕ ϕ 
(
x
)

{\displaystyle f(x)/\phi (x)}

 equals 1. None of these notations is in use today.

The symbol O was first introduced by number theorist [Paul Bachmann](https://en.wikipedia.org/wiki/Paul_Bachmann) in 1894, in the second volume of his book *Analytische Zahlentheorie* ("[analytic number theory](https://en.wikipedia.org/wiki/Analytic_number_theory)"). The number theorist [Edmund Landau](https://en.wikipedia.org/wiki/Edmund_Landau) adopted it, and was thus inspired to introduce in 1909 the notation o; hence both are now called Landau symbols. These notations were used in applied mathematics during the 1950s for asymptotic analysis.
The symbol 

Ω Ω 

{\displaystyle \Omega }

 (in the sense "is not an *o* of") was introduced in 1914 by Hardy and Littlewood. Hardy and Littlewood also introduced in 1916 the left and right 

Ω Ω 

{\displaystyle \Omega }

 symbols 

Ω Ω 

R

{\displaystyle \Omega _{R}}

, 

Ω Ω 

L

{\displaystyle \Omega _{L}}

 (now commonly denoted 

Ω Ω 

+

,

Ω Ω 

− − 

{\displaystyle \Omega _{+},\Omega _{-}}

). This 

Ω Ω 

{\displaystyle \Omega }

 notation has been commonly used in number theory since the 1950s.

The symbol 

∼ ∼ 

{\displaystyle \sim }

, although it had been used before with different meanings, was given its modern definition by Landau in 1909 and by Hardy in 1910. Just above on the same page of his tract Hardy defined the symbol 

≍ ≍ 

{\displaystyle \asymp }

, where 

f
(
x
)
≍ ≍ 
g
(
x
)

{\displaystyle f(x)\asymp g(x)}

 means that both 

f
(
x
)
=
O
(
g
(
x
)
)

{\displaystyle f(x)=O(g(x))}

 and 

g
(
x
)
=
O
(
f
(
x
)
)

{\displaystyle g(x)=O(f(x))}

 are satisfied. The notation is still currently used in analytic number theory.
 
In his tract Hardy also proposed the symbol 

≍ ≍ 

− − 

{\displaystyle \mathbin {\,\asymp \;\;\;\;\!\!\!\!\!\!\!\!\!\!\!\!\!-} }

, where 

f

≍ ≍ 

− − 

g

{\displaystyle f\mathbin {\,\asymp \;\;\;\;\!\!\!\!\!\!\!\!\!\!\!\!\!-} g}

 means that 

f
∼ ∼ 
K
g

{\displaystyle f\sim Kg}

 for some constant 

K
≠
0

{\displaystyle K\not =0}

 (this 
corresponds to Bois-Reymond's notation 

f
∼ ∼ 
g

{\displaystyle f\sim g}

).

In the 1930s, Vinogradov popularized the notation 

f
(
x
)
≪ ≪ 
g
(
x
)

{\displaystyle f(x)\ll g(x)}

and 

g
(
x
)
≫ ≫ 
f
(
x
)

{\displaystyle g(x)\gg f(x)}

, both of which mean

f
(
x
)
=
O
(
g
(
x
)
)

{\displaystyle f(x)=O(g(x))}

. This notation became standard in analytic number theory.

In the 1970s the big O was popularized in computer science by [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth), who proposed the different notation 

f
(
x
)
=
Θ Θ 
(
g
(
x
)
)

{\displaystyle f(x)=\Theta (g(x))}

 for Hardy's 

f
(
x
)
≍ ≍ 
g
(
x
)

{\displaystyle f(x)\asymp g(x)}

, and proposed a different definition for the Hardy and Littlewood Omega notation.

Hardy introduced the symbols 

≼ ≼ 

{\displaystyle \preccurlyeq }

 and advocated for Bois-Reymond's 

≺ ≺ 

{\displaystyle \prec }

 (as well as the already mentioned other symbols) in his 1910 tract "Orders of Infinity", but made use of them only in three papers (1910–1913). In his nearly 400 remaining papers and books he consistently used the Landau symbols O and o.
Hardy's symbols 

≼ ≼ 

{\displaystyle \preccurlyeq }

 and 

≍ ≍ 

− − 

{\displaystyle \mathbin {\,\asymp \;\;\;\;\!\!\!\!\!\!\!\!\!\!\!\!\!-} }

 are not used anymore.

## Matters of notation

### Arrows

In mathematics, an expression such as 

x
→ → 
∞ ∞ 

{\displaystyle x\to \infty }

 indicates the presence of a [limit](https://en.wikipedia.org/wiki/Limit_(mathematics)). In big-O notation and related notations

Ω Ω 
,
Θ Θ 
,
≫ ≫ 
,
≪ ≪ 
,
≍ ≍ 

{\displaystyle \Omega ,\Theta ,\gg ,\ll ,\asymp }

, there is no implied limit, in contrast with little-o,

∼ ∼ 

{\displaystyle \sim }

 and 

ω ω 

{\displaystyle \omega }

 notations.
Notation such as 

f
(
x
)
=
O
(
g
(
x
)
)

(
x
→ → 
∞ ∞ 
)

{\displaystyle f(x)=O(g(x))\;\;(x\to \infty )}

 can be considered an [abuse of notation](https://en.wikipedia.org/wiki/Abuse_of_notation).

### Equals sign

Some consider 

f
(
x
)
=
O
(
g
(
x
)
)

{\displaystyle f(x)=O(g(x))}

 to also be an [abuse of notation](https://en.wikipedia.org/wiki/Abuse_of_notation), since the use of the equals sign could be misleading as it suggests a symmetry that this statement does not have. As [de Bruijn](https://en.wikipedia.org/wiki/Nicolaas_Govert_de_Bruijn) says, 

O
(
x
)
=
O
(

x

2

)

{\displaystyle O(x)=O(x^{2})}

 is true but 

O
(

x

2

)
=
O
(
x
)

{\displaystyle O(x^{2})=O(x)}

 is not. [Knuth](https://en.wikipedia.org/wiki/Donald_Knuth) describes such statements as "one-way equalities", since if the sides could be reversed, "we could deduce ridiculous things like 

n
=

n

2

{\displaystyle n=n^{2}}

 from the identities 

n
=
O
(

n

2

)

{\displaystyle n=O(n^{2})}

 and 

n

2

=
O
(

n

2

)

{\displaystyle n^{2}=O(n^{2})}

. In another letter, Knuth also pointed out that

the equality sign is not symmetric with respect to such notations [as, in this notation,] mathematicians customarily use the '=' sign as they use the word 'is' in English: Aristotle is a man, but a man isn't necessarily Aristotle.

For these reasons, some advocate for using [set notation](https://en.wikipedia.org/wiki/Set_notation) and write 

f
(
x
)
∈ ∈ 
O
(
g
(
x
)
)

{\displaystyle f(x)\in O(g(x))}

,
read as "

f
(
x
)

{\displaystyle f(x)}

 [is an element of](https://en.wikipedia.org/wiki/Element_(mathematics)#Notation_and_terminology)

O
(
g
(
x
)
)

{\displaystyle O(g(x))}

", or "

f
(
x
)

{\displaystyle f(x)}

 is in the set 

O
(
g
(
x
)
)

{\displaystyle O(g(x))}

" –  thinking of 

O
(
g
(
x
)
)

{\displaystyle O(g(x))}

 as the class of all functions 

h
(
x
)

{\displaystyle h(x)}

 such that 

h
(
x
)
=
O
(
g
(
x
)
)

{\displaystyle h(x)=O(g(x))}

. However, the use of the equals sign is customary.
and is more convenient in more complex expressions of the form

f
(
x
)
=
g
(
x
)
+
O
(
h
(
x
)
)
=
O
(
k
(
x
)
)
.

{\displaystyle f(x)=g(x)+O(h(x))=O(k(x)).}

The Vinogradov notations 

≪ ≪ 

{\displaystyle \ll }

 and 

≫ ≫ 

{\displaystyle \gg }

, which are widely used in number theory

do not suffer from this defect, as they more clearly indicate that big-O indicates an *inequality* rather than an *equality*. They also enjoy a symmetry that big-O notation lacks: 

f
(
x
)
≪ ≪ 
g
(
x
)

{\displaystyle f(x)\ll g(x)}

 
means the same as 

g
(
x
)
≫ ≫ 
f
(
x
)

{\displaystyle g(x)\gg f(x)}

. 
In combinatorics and computer science, these notations
are rarely seen.

### Typesetting

Big O is typeset as an italicized uppercase "O", as in the following example: 

O
(

n

2

)

{\displaystyle O(n^{2})}

. In [TeX](https://en.wikipedia.org/wiki/TeX), it is produced by simply typing 'O' inside math mode. Unlike Greek-named Bachmann–Landau notations, it needs no special symbol. However, some authors use the calligraphic variant 

O

{\displaystyle {\mathcal {O}}}

 instead.

The big-O originally stands for "order of" ("Ordnung", Bachmann 1894), and is thus a Latin letter. Neither Bachmann nor Landau ever call it "Omicron". The symbol was much later on (1976) viewed by Knuth as a capital [omicron](https://en.wikipedia.org/wiki/Omicron), probably in reference to his definition of the symbol [Omega](https://en.wikipedia.org/wiki/Omega). The digit [zero](https://en.wikipedia.org/wiki/0) should not be used.

## See also

* [Asymptotic computational complexity](https://en.wikipedia.org/wiki/Asymptotic_computational_complexity)
* [Asymptotic expansion](https://en.wikipedia.org/wiki/Asymptotic_expansion): Approximation of functions by a series, generalizing Taylor's formula
* [Asymptotically optimal algorithm](https://en.wikipedia.org/wiki/Asymptotically_optimal_algorithm): A phrase frequently used to describe an algorithm that has an upper bound asymptotically within a constant of a lower bound for the problem
* [Big O in probability notation](https://en.wikipedia.org/wiki/Big_O_in_probability_notation): *Op*, *op*
* [Limit inferior and limit superior](https://en.wikipedia.org/wiki/Limit_inferior_and_limit_superior): An explanation of some of the limit notation used in this article
* [Master theorem (analysis of algorithms)](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)): For analyzing divide-and-conquer recursive algorithms using big O notation
* [Nachbin's theorem](https://en.wikipedia.org/wiki/Nachbin%27s_theorem): A precise method of bounding [complex analytic](https://en.wikipedia.org/wiki/Complex_analytic) functions so that the domain of convergence of [integral transforms](https://en.wikipedia.org/wiki/Integral_transform) can be stated
* [Order of approximation](https://en.wikipedia.org/wiki/Order_of_approximation)
* [Order of accuracy](https://en.wikipedia.org/wiki/Order_of_accuracy)
* [Computational complexity of mathematical operations](https://en.wikipedia.org/wiki/Computational_complexity_of_mathematical_operations)

## References and notes

1. ^   [Bachmann, Paul](https://en.wikipedia.org/wiki/Paul_Bachmann) (1894). [*Analytische Zahlentheorie*](https://archive.org/stream/dieanalytischeza00bachuoft#page/402/mode/2up) [*Analytic Number Theory*] (in German). Vol. 2. Leipzig: Teubner.
2. ^      [Landau, Edmund](https://en.wikipedia.org/wiki/Edmund_Landau) (1909). [*Handbuch der Lehre von der Verteilung der Primzahlen*](https://archive.org/stream/handbuchderlehre01landuoft#page/31/mode/2up) [*Handbook on the theory of the distribution of the primes*] (in German). Leipzig: B.G. Teubner; reprinted as two volumes in one by Chelsea, 1974, with an appendix by Dr. Paul T. Bateman. pp. 59–63.
3. ^       
[Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ronald_L._Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2022). "Characterizing running times". [*Introduction to Algorithms*](https://en.wikipedia.org/wiki/Introduction_to_Algorithms) (4th ed.). MIT Press and McGraw-Hill. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-53091-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-53091-0).
4. ^       
[Iwaniec, Henryk](https://en.wikipedia.org/wiki/Henryk_Iwaniec); Kowalski, Emmanuel (2004). *Analytic Number Theory*. American Mathematical Society.
5. ^      [Hardy, G. H.](https://en.wikipedia.org/wiki/G._H._Hardy) (1910). [*Orders of Infinity: The 'Infinitärcalcül' of Paul du Bois-Reymond*](https://archive.org/details/ordersofinfinity00harduoft). [Cambridge University Press](https://en.wikipedia.org/wiki/Cambridge_University_Press). p. 2.
6. ^     
[Vinogradov, Matveevič](https://en.wikipedia.org/wiki/Ivan_Matveyevich_Vinogradov) (1934). "A new estimate for *G*(*n*) in Waring's problem". *Doklady Akademii Nauk SSSR* (in Russian). **5** (5–6): 249–253.
Translated in English in:  

[Vinogradov, Matveevič](https://en.wikipedia.org/wiki/Ivan_Matveyevich_Vinogradov) (1985). *Selected works / Ivan Matveevič Vinogradov; prepared by the Steklov Mathematical Institute of the Academy of Sciences of the USSR on the occasion of his 90th birthday*. Springer-Verlag.
7. ^      [Hardy, G.H.](https://en.wikipedia.org/wiki/Godfrey_Harold_Hardy); [Littlewood, J.E.](https://en.wikipedia.org/wiki/John_Edensor_Littlewood) (1914). ["Some problems of diophantine approximation: Part II. The trigonometrical series associated with the elliptic θ functions"](https://projecteuclid.org/download/pdf_1/euclid.acta/1485887376). *[Acta Mathematica](https://en.wikipedia.org/wiki/Acta_Mathematica)*. **37**: 225. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF02401834](https://doi.org/10.1007%2FBF02401834). [Archived](https://web.archive.org/web/20181212063403/https://projecteuclid.org/download/pdf_1/euclid.acta/1485887376) from the original on 2018-12-12. Retrieved 2017-03-14.
8. ^          Knuth, Donald (April–June 1976). ["Big Omicron and big Omega and big Theta"](https://doi.org/10.1145%2F1008328.1008329). *[SIGACT News](https://en.wikipedia.org/wiki/SIGACT_News)*. **8** (2): 18–24. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1008328.1008329](https://doi.org/10.1145%2F1008328.1008329). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [5230246](https://api.semanticscholar.org/CorpusID:5230246).
9. ^    Bois-Reymond, Paul du (1870). ["Sur la grandeur relative des infinis des fonctions"](https://link.springer.com/article/10.1007/BF02420041). *Annali di Matematica*. Series 2. **4**: 338–353. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF02420041](https://doi.org/10.1007%2FBF02420041).
10. **^** 
Sipser, Michael (2012). *Introduction to the Theory of Computation* (3 ed.). Boston, MA: PWS Publishin.
11. ^       [Ivić, A.](https://en.wikipedia.org/wiki/Aleksandar_Ivi%C4%87) (1985). *The Riemann Zeta-Function*. John Wiley & Sons. chapter 9.
12. ^        Gérald Tenenbaum, Introduction to analytic and probabilistic number theory, « Notation », page xxiii. American Mathematical Society, Providence RI, 2015.
13. ^   E. C. Titchmarsh, The Theory of the Riemann Zeta-Function (Oxford; Clarendon Press, 1951)
14. **^** [Seidel, Raimund](https://en.wikipedia.org/wiki/Raimund_Seidel) (1991), "A Simple and Fast Incremental Randomized Algorithm for Computing Trapezoidal Decompositions and for Triangulating Polygons", *[Computational Geometry](https://en.wikipedia.org/wiki/Computational_Geometry_(journal))*, **1**: 51–64, [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.55.5877](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.55.5877), [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0925-7721(91)90012-4](https://doi.org/10.1016%2F0925-7721%2891%2990012-4)
15. ^   [Hardy, G.H.](https://en.wikipedia.org/wiki/Godfrey_Harold_Hardy); [Littlewood, J.E.](https://en.wikipedia.org/wiki/John_Edensor_Littlewood) (1916). "Contribution to the theory of the Riemann zeta-function and the theory of the distribution of primes". *[Acta Mathematica](https://en.wikipedia.org/wiki/Acta_Mathematica)*. **41**: 119–196. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF02422942](https://doi.org/10.1007%2FBF02422942).
16. **^** [Landau, E.](https://en.wikipedia.org/wiki/Edmund_Landau) (1924). "Über die Anzahl der Gitterpunkte in gewissen Bereichen. IV" [On the number of grid points in known regions]. *Nachr. Gesell. Wiss. Gött. Math-phys.* (in German): 137–150.
17. **^** Balcázar, José L.; Gabarró, Joaquim. ["Nonuniform complexity classes specified by lower and upper bounds"](http://archive.numdam.org/article/ITA_1989__23_2_177_0.pdf) (PDF). *RAIRO – Theoretical Informatics and Applications – Informatique Théorique et Applications*. **23** (2): 180. [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0988-3754](https://search.worldcat.org/issn/0988-3754). [Archived](https://web.archive.org/web/20170314153158/http://archive.numdam.org/article/ITA_1989__23_2_177_0.pdf) (PDF) from the original on 14 March 2017. Retrieved 14 March 2017 – via Numdam.
18. **^** Cucker, Felipe; Bürgisser, Peter (2013). ["A.1 Big Oh, Little Oh, and Other Comparisons"](https://books.google.com/books?id=SNu4BAAAQBAJ&pg=PA467). *Condition: The Geometry of Numerical Algorithms*. Berlin, Heidelberg: Springer. pp. 467–468. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-642-38896-5](https://doi.org/10.1007%2F978-3-642-38896-5). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-642-38896-5](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-38896-5).
19. **^** for example it is omitted in: Hildebrand, A.J. ["Asymptotic Notations"](http://www.math.uiuc.edu/~ajh/595ama/ama-ch2.pdf) (PDF). Department of Mathematics. *Asymptotic Methods in Analysis*. Math 595, Fall 2009. Urbana, IL: University of Illinois. [Archived](https://web.archive.org/web/20170314153801/http://www.math.uiuc.edu/~ajh/595ama/ama-ch2.pdf) (PDF) from the original on 14 March 2017. Retrieved 14 March 2017.
20. **^** Cormen et al. 2022, p. 57.
21. **^** Cormen et al. 2022, p. 74–75.
22. **^** Andreas Björklund and Thore Husfeldt and Mikko Koivisto (2009). ["Set partitioning via inclusion-exclusion"](https://www.cs.helsinki.fi/u/mkhkoivi/publications/sicomp-2009.pdf) (PDF). *[SIAM Journal on Computing](https://en.wikipedia.org/wiki/SIAM_Journal_on_Computing)*. **39** (2): 546–563. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/070683933](https://doi.org/10.1137%2F070683933). [Archived](https://web.archive.org/web/20220203095918/https://www.cs.helsinki.fi/u/mkhkoivi/publications/sicomp-2009.pdf) (PDF) from the original on 2022-02-03. Retrieved 2022-02-03. See sect.2.3, p.551.
23. **^** Erdelyi, A. (1956). *Asymptotic Expansions*. Courier Corporation. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-486-60318-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-486-60318-6). `{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book)}}`: ISBN / Date incompatibility ([help](https://en.wikipedia.org/wiki/Help:CS1_errors#invalid_isbn_date)).
24. **^** Hardy, G. H.; [Wright, E. M.](https://en.wikipedia.org/wiki/E._M._Wright) (2008) [1st ed. 1938]. "1.6. Some notations". *[An Introduction to the Theory of Numbers](https://en.wikipedia.org/wiki/An_Introduction_to_the_Theory_of_Numbers)*. Revised by [D. R. Heath-Brown](https://en.wikipedia.org/wiki/Roger_Heath-Brown) and [J. H. Silverman](https://en.wikipedia.org/wiki/Joseph_H._Silverman), with a foreword by [Andrew Wiles](https://en.wikipedia.org/wiki/Andrew_Wiles) (6th ed.). Oxford: Oxford University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-19-921985-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-19-921985-8).
25. **^** Hardy, G. H. (1966–1979). *Collected papers of G. H. Hardy (Including Joint papers with J. E. Littlewood and others), 7 vols*. Clarendon Press, Oxford.
26. ^   [de Bruijn, N.G.](https://en.wikipedia.org/wiki/N._G._de_Bruijn) (1958). [*Asymptotic Methods in Analysis*](https://books.google.com/books?id=_tnwmvHmVwMC&q=%22The+trouble+is%22&pg=PA5). Amsterdam: North-Holland. pp. 5–7. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-486-64221-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-486-64221-5). [Archived](https://web.archive.org/web/20230117051949/https://books.google.com/books?id=_tnwmvHmVwMC&q=%22The+trouble+is%22&pg=PA5) from the original on 2023-01-17. Retrieved 2021-09-15. `{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book)}}`: ISBN / Date incompatibility ([help](https://en.wikipedia.org/wiki/Help:CS1_errors#invalid_isbn_date))
27. ^    [Graham, Ronald](https://en.wikipedia.org/wiki/Ronald_Graham); [Knuth, Donald](https://en.wikipedia.org/wiki/Donald_Knuth); [Patashnik, Oren](https://en.wikipedia.org/wiki/Oren_Patashnik) (1994). [*Concrete Mathematics*](https://books.google.com/books?id=pntQAAAAMAAJ) (2 ed.). Reading, Massachusetts: Addison–Wesley. p. 446. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-55802-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-55802-9). [Archived](https://web.archive.org/web/20230117051955/https://books.google.com/books?id=pntQAAAAMAAJ) from the original on 2023-01-17. Retrieved 2016-09-23.
28. **^** Donald Knuth (June–July 1998). ["Teach Calculus with Big O"](https://www.ams.org/notices/199806/commentary.pdf) (PDF). *[Notices of the American Mathematical Society](https://en.wikipedia.org/wiki/Notices_of_the_American_Mathematical_Society)*. **45** (6): 687. [Archived](https://web.archive.org/web/20211014070416/https://www.ams.org/notices/199806/commentary.pdf) (PDF) from the original on 2021-10-14. Retrieved 2021-09-05. ([Unabridged version](http://www-cs-staff.stanford.edu/~knuth/ocalc.tex) [Archived](https://web.archive.org/web/20080513234708/http://www-cs-staff.stanford.edu/~knuth/ocalc.tex) 2008-05-13 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine))
29. **^** Donald E. Knuth, The art of computer programming. Vol. 1. Fundamental algorithms, third edition, Addison Wesley Longman, 1997.  Section 1.2.11.1.
30. **^** Ronald L. Graham, Donald E. Knuth, and Oren Patashnik, *Concrete Mathematics: A Foundation for Computer Science (2nd ed.)*, Addison-Wesley, 1994. Section 9.2, p. 443.
31. **^** Sivaram Ambikasaran and Eric Darve, An 

O

(
N
log
⁡ ⁡ 
N
)

{\displaystyle {\mathcal {O}}(N\log N)}

 Fast Direct Solver for Partial Hierarchically Semi-Separable Matrices, *J. Scientific Computing* **57** (2013), no. 3, 477–501.
32. **^** Saket Saurabh and Meirav Zehavi, 

(
k
,
n
− − 
k
)

{\displaystyle (k,n-k)}

-Max-Cut: An 

O

∗ ∗ 

(

2

p

)

{\displaystyle {\mathcal {O}}^{*}(2^{p})}

-Time Algorithm and a Polynomial Kernel, *Algorithmica* **80** (2018), no. 12, 3844–3860.

### Notes

1. **^** Note that the "size" of the input is typically used as an indication of how challenging a given *instance* is, of the problem to be solved. The amount of [execution] time, and the amount of [memory] space required to compute the answer, (or to "solve' the problem), are seen as indicating the difficulty of that *instance* of the problem. For purposes of [Computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory), Big 

O

{\displaystyle O}

 notation is used for an upper bound on [the "order of magnitude" of] all 3 of those: the size of the input [data stream], the amount of [execution] time required, and the amount of [memory] space required.

## Further reading

* [Knuth, Donald](https://en.wikipedia.org/wiki/Donald_Knuth) (1997). "1.2.11: Asymptotic Representations". *Fundamental Algorithms*. The Art of Computer Programming. Vol. 1 (3rd ed.). Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-89683-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-89683-1).
* [Sipser, Michael](https://en.wikipedia.org/wiki/Michael_Sipser) (1997). [*Introduction to the Theory of Computation*](https://archive.org/details/introductiontoth00sips_928). PWS Publishing. pp. [226](https://archive.org/details/introductiontoth00sips_928/page/n239)–228. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-534-94728-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-534-94728-6).
* Avigad, Jeremy; Donnelly, Kevin (2004). [*Formalizing O notation in Isabelle/HOL*](https://www.andrew.cmu.edu/~avigad/Papers/bigo.pdf) (PDF). International Joint Conference on Automated Reasoning. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-540-25984-8_27](https://doi.org/10.1007%2F978-3-540-25984-8_27).
* Black, Paul E. (11 March 2005). Black, Paul E. (ed.). ["big-O notation"](https://xlinux.nist.gov/dads/HTML/bigOnotation.html). *Dictionary of Algorithms and Data Structures*. U.S. National Institute of Standards and Technology. Retrieved December 16, 2006.
* Black, Paul E. (17 December 2004). Black, Paul E. (ed.). ["little-o notation"](https://xlinux.nist.gov/dads/HTML/littleOnotation.html). *Dictionary of Algorithms and Data Structures*. U.S. National Institute of Standards and Technology. Retrieved December 16, 2006.
* Black, Paul E. (17 December 2004). Black, Paul E. (ed.). ["Ω"](https://xlinux.nist.gov/dads/HTML/omegaCapital.html). *Dictionary of Algorithms and Data Structures*. U.S. National Institute of Standards and Technology. Retrieved December 16, 2006.
* Black, Paul E. (17 December 2004). Black, Paul E. (ed.). ["ω"](https://xlinux.nist.gov/dads/HTML/omega.html). *Dictionary of Algorithms and Data Structures*. U.S. National Institute of Standards and Technology. Retrieved December 16, 2006.
* Black, Paul E. (17 December 2004). Black, Paul E. (ed.). ["Θ"](https://xlinux.nist.gov/dads/HTML/theta.html). *Dictionary of Algorithms and Data Structures*. U.S. National Institute of Standards and Technology. Retrieved December 16, 2006.

## External links

* [Growth of sequences — OEIS (Online Encyclopedia of Integer Sequences) Wiki](https://oeis.org/wiki/Growth_of_sequences)
* [Introduction to Asymptotic Notations](https://classes.soe.ucsc.edu/cse102/Fall21/Handouts/AsymptoticGrowth.pdf)
* [Big-O Notation – What is it good for](http://www.perlmonks.org/?node_id=573138)
* [An example of Big O in accuracy of central divided difference scheme for first derivative](https://web.archive.org/web/20181007223123/https://autarkaw.org/2013/01/30/making-sense-of-the-big-oh/)
* [A Gentle Introduction to Algorithm Complexity Analysis](https://web.archive.org/web/20190729015611/https://discrete.gr/complexity/)
 
NewPP limit report
Parsed by mw‐web.codfw.main‐788ff47b94‐p52gb
Cached time: 20260423144940
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 1.046 seconds
Real time usage: 1.414 seconds
Preprocessor visited node count: 5897/1000000
Revision size: 64967/2097152 bytes
Post‐expand include size: 84945/2097152 bytes
Template argument size: 4622/2097152 bytes
Highest expansion depth: 13/100
Expensive parser function count: 10/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 162898/5000000 bytes
Lua time usage: 0.390/10.000 seconds
Lua memory usage: 8728823/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  636.818      1 -total
 35.15%  223.840      2 Template:Reflist
 22.28%  141.870     16 Template:Cite_book
 15.02%   95.675      1 Template:Short_description
 12.77%   81.351      1 Template:Order-of-approx
 12.40%   78.935      1 Template:Sidebar
 11.73%   74.701      2 Template:Pagetype
  6.09%   38.784      9 Template:Cite_journal
  6.02%   38.365      2 Template:Sfn
  4.56%   29.018      2 Template:Citation_needed
 Render ID a7fd6661-3f23-11f1-81e1-a353122313cc  Saved in parser cache with key enwiki:pcache:44578:|#|:idhash:canonical and timestamp 20260423144940 and revision id 1350712293. Rendering was triggered because: page_view