# Big O notation - Wikipedia

Source: https://en.wikipedia.org/wiki/Big_O_notation

---

Describes approximate behavior of a function

**Big *O* notation** is a [mathematical notation](https://en.wikipedia.org/wiki/Mathematical_notation) that describes the approximate size of a [function](https://en.wikipedia.org/wiki/Function_(mathematics)) on a [domain](https://en.wikipedia.org/wiki/Domain_of_a_function). Big O is a member of a [family of notations](#Family_of_Bachmann%E2%80%93Landau_notations) invented by German mathematicians [Paul Bachmann](https://en.wikipedia.org/wiki/Paul_Gustav_Heinrich_Bachmann) and [Edmund Landau](https://en.wikipedia.org/wiki/Edmund_Landau) and expanded by others, collectively called **Bachmann–Landau notation**. The letter O was chosen by Bachmann to stand for *[Ordnung](https://en.wiktionary.org/wiki/Ordnung#German)*, meaning the [order of approximation](https://en.wikipedia.org/wiki/Order_of_approximation).

In [computer science](https://en.wikipedia.org/wiki/Computer_science), big O notation is used to [classify algorithms](https://en.wikipedia.org/wiki/Computational_complexity_theory) according to how their run time or space requirements grow as the input size grows. In [analytic number theory](https://en.wikipedia.org/wiki/Analytic_number_theory), big O notation is often used to express bounds on the growth of an [arithmetical function](https://en.wikipedia.org/wiki/Arithmetic_function); one well-known example is the remainder term in the [prime number theorem](https://en.wikipedia.org/wiki/Prime_number_theorem).
In [mathematical analysis](https://en.wikipedia.org/wiki/Mathematical_analysis), including [calculus](https://en.wikipedia.org/wiki/Calculus), Big O notation is used to bound the error when truncating a [power series](https://en.wikipedia.org/wiki/Power_series) and to express the quality
of approximation of a real or complex valued function by a simpler function.

Often, big O notation characterizes functions according to their growth rates as the variable becomes large: different functions with the same [asymptotic](https://en.wikipedia.org/wiki/Asymptotic_analysis) growth rate may be represented using the same O notation. The letter O is used because the growth rate of a function is also referred to as the **order of the function**. A description of a function in terms of big O notation only provides an [upper bound](https://en.wikipedia.org/wiki/Upper_bound) on the growth rate of the function.

Associated with big O notation are several related notations, using the symbols 



o
{\displaystyle o}
![{\displaystyle o}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c1031f61947aa3d1cf3a70ec3e4904df2c3675d), 



∼
{\displaystyle \sim }
![{\displaystyle \sim }](https://wikimedia.org/api/rest_v1/media/math/render/svg/afcc42adfcfdc24d5c4c474869e5d8eaa78d1173), 



Ω
{\displaystyle \Omega }
![{\displaystyle \Omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24b0d5ca6f381068d756f6337c08e0af9d1eeb6f), 



≪
{\displaystyle \ll }
![{\displaystyle \ll }](https://wikimedia.org/api/rest_v1/media/math/render/svg/10563f31a4178c71bef006ea5c601e908f984136), 



≫
{\displaystyle \gg }
![{\displaystyle \gg }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bb8cf5bdde51831eb31118c36a0499d41a4b643e), 



≍
{\displaystyle \asymp }
![{\displaystyle \asymp }](https://wikimedia.org/api/rest_v1/media/math/render/svg/d57855824799fd82a250ecfe10596a751bb1b091), 



ω
{\displaystyle \omega }
![{\displaystyle \omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/48eff443f9de7a985bb94ca3bde20813ea737be8), and 



Θ
{\displaystyle \Theta }
![{\displaystyle \Theta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bc927b19f46d005b4720db7a0f96cd5b6f1a0d9b) to describe other kinds of bounds on growth rates.

A precursor who proposed a system of notation for comparing the asymptotic behavior of functions was German mathematician [Paul du Bois-Reymond](https://en.wikipedia.org/wiki/Paul_du_Bois-Reymond).

Let 



f
,
{\textstyle f,}
![{\textstyle f,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5e1f7b097fbd44103570e540bbbca9161af3174e) the function to be estimated, be either a [real](https://en.wikipedia.org/wiki/Real_number) or [complex](https://en.wikipedia.org/wiki/Complex_number) valued function defined on a [domain](https://en.wikipedia.org/wiki/Domain_of_a_function) 



D
,
{\textstyle D,}
![{\textstyle D,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/072ecc42855ac9619b8b034a72a824a894ee8117) and let 



g
,
{\textstyle g,}
![{\textstyle g,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9b5d77a522e8a34625bb3274f85b0970f22578be) the comparison function, be a non-negative real valued function defined on the same set 



D
.
{\textstyle D.}
![{\textstyle D.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2596a0d3c3f0616c5f0929b464b3f03eb3857262) Common choices for the domain are intervals of real numbers, bounded or unbounded, the set of positive integers, the set of [complex numbers](https://en.wikipedia.org/wiki/Complex_analysis) and tuples of real/complex numbers. With the domain written explicitly or understood implicitly, one writes

:   f
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
    ![{\displaystyle f(x)=O{\bigl (}g(x){\bigr )}\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd1d7226c2a46a08a00fd4e912d0d873bfa62c55)

which is read as  "



f
(
x
)
{\textstyle f(x)}
![{\textstyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e0a982c6635ab3b98d9e12d5f5a8533359bcb38a) is big 



O
{\textstyle O}
![{\textstyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/60c7c997a0ae6c2aaae92e95a425c5add3abeaeb) of 



g
(
x
)
{\textstyle g(x)}
![{\textstyle g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0b78b479cc1c1ccd06f8cdfd31223335921e5a5b)"  if there exists a positive real number 



M
{\textstyle M}
![{\textstyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/913ace920108f7552777e36ac0b7ee3f5093a088) such that

:   |

    f
    (
    x
    )
    |
    ≤
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
    ∈
    D
    .
    {\displaystyle \left|f(x)\right|\leq M\ g(x)\qquad ~{\mathsf {\ for\ all\ }}~\quad x\in D.}
    ![{\displaystyle \left|f(x)\right|\leq M\ g(x)\qquad ~{\mathsf {\ for\ all\ }}~\quad x\in D.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1eeac1a4fa0b79e3d1f0039a0d50d194a6fb7d5f)

If 



g
(
x
)
>
0
{\displaystyle g(x)>0}
![{\displaystyle g(x)>0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3e999e3ac462023ab594ec9281686f4525e63143) (i.e. g is also never zero) throughout the domain 



D
,
{\displaystyle D,}
![{\displaystyle D,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ab9cb9bd7fcb5f2a543b128c1b876019b158c0fc) an equivalent definition is that the ratio 






f
(
x
)

g
(
x
)
{\textstyle {\frac {f(x)}{g(x)}}}
![{\textstyle {\frac {f(x)}{g(x)}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/102bc2ce010b8b1133e1f4cf7953b2a19e6524d3) is [*bounded*](https://en.wikipedia.org/wiki/Bounded_function), i.e. there is a positive real number 



M
{\displaystyle M}
![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd) so that 





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
≤
M
{\textstyle {\Big |}{\frac {f(x)}{g(x)}}{\Big |}\leq M}
![{\textstyle {\Big |}{\frac {f(x)}{g(x)}}{\Big |}\leq M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd0b56ce932a32303670405891f8999132ae3cd5) for all 



x
∈
D
.
{\displaystyle x\in D.}
![{\displaystyle x\in D.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c163a96649a1a3f7754445e9c81ed3a95d53b7e7) These encompass all the uses of  big 



O
{\textstyle O}
![{\textstyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/60c7c997a0ae6c2aaae92e95a425c5add3abeaeb)  in [computer science](https://en.wikipedia.org/wiki/Computer_science) and mathematics, including its use where the domain is finite, infinite, real, complex, single variate, or multivariate. In most applications, one chooses the function 



g
(
x
)
{\displaystyle g(x)}
![{\displaystyle g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c6ca91363022bd5e4dcb17e5ef29f78b8ef00b59) appearing within the [argument](https://en.wikipedia.org/wiki/Function_argument) of 



O


(
⋅


)
{\textstyle O{\bigl (}\cdot {\bigr )}}
![{\textstyle O{\bigl (}\cdot {\bigr )}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4084babe7d57b2be55e901b4d440bdf454a93b12) to be as simple a form as possible, omitting constant factors and lower order terms. The number 



M
{\textstyle M}
![{\textstyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/913ace920108f7552777e36ac0b7ee3f5093a088) is called the *implied constant* because it is normally not specified. When using big 



O
{\textstyle O}
![{\textstyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/60c7c997a0ae6c2aaae92e95a425c5add3abeaeb) notation, what matters is that some finite 



M
{\displaystyle M}
![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd) exists, not its specific value. This simplifies the presentation of many analytic inequalities.

For functions defined on positive real numbers or positive integers, a more restrictive and somewhat conflicting definition
is still in common use, especially in computer science.
When restricted to functions which are [eventually](https://en.wikipedia.org/wiki/Eventually_(mathematics)) positive, the notation

:   f
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
    →
    ∞
    {\displaystyle f(x)=O{\bigl (}g(x){\bigr )}\qquad ~{\mathsf {as}}\quad x\to \infty }
    ![{\displaystyle f(x)=O{\bigl (}g(x){\bigr )}\qquad ~{\mathsf {as}}\quad x\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/06c85312655d69ca96ab59d5fc4d9ccb8def0180)

means that for some real number 



a
,
{\textstyle a,}
![{\textstyle a,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d4f08b1f78e91e8624b79cc24a5b25e8d8791d37) 



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
![{\textstyle f(x)=O{\bigl (}g(x){\bigr )}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a81ef12b2f629650975cb7650b95e9055ddc81bf) in the domain 




[

a
,
∞
)
.
{\textstyle \left[a,\infty \right).}
![{\textstyle \left[a,\infty \right).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a74b0d0a58c52b0a022ff5b33c91b11064275b17) Here, the expression 



x
→
∞
{\textstyle x\to \infty }
![{\textstyle x\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/25bce7a275992f01d8d70aed416f8d53420bc67d) doesn't indicate a [limit](https://en.wikipedia.org/wiki/Limit_(mathematics)), but the notion that the inequality holds for *large enough* 



x
.
{\textstyle x.}
![{\textstyle x.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/17f5d7a2ecf41dbdd8a8728e56241e9661621981) The expression 



x
→
∞
{\textstyle x\to \infty }
![{\textstyle x\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/25bce7a275992f01d8d70aed416f8d53420bc67d) often is omitted.

Similarly, for a real number 



a
,
{\textstyle a,}
![{\textstyle a,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d4f08b1f78e91e8624b79cc24a5b25e8d8791d37) the notation

:   f
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
    →
    a
    {\displaystyle f(x)=O{\bigl (}g(x){\bigr )}\qquad ~{\text{ as }}\ x\to a}
    ![{\displaystyle f(x)=O{\bigl (}g(x){\bigr )}\qquad ~{\text{ as }}\ x\to a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6f73a6f20bd9bb51fbb5b8ebe47ea7763bf572d1)

means that for some constant 



c
>
0
,
{\textstyle c>0,}
![{\textstyle c>0,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8af810dbca196b9949f52c30ca1f89d21e25d56c) 



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
![{\textstyle f(x)=O{\bigl (}g(x){\bigr )}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a81ef12b2f629650975cb7650b95e9055ddc81bf) on the interval 




[

a
−
c
,
a
+
c
]
;
{\displaystyle \left[a-c,a+c\right];}
![{\displaystyle \left[a-c,a+c\right];}](https://wikimedia.org/api/rest_v1/media/math/render/svg/030d9a890e393972393e40ef62a352d1ef9f4678) that is, in a small neighborhood of 



a
.
{\displaystyle a.}
![{\displaystyle a.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6b803da9c45c1186883bde55107e9ccb102c92c6)
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
![{\displaystyle \ f(x)=h(x)+O{\bigl (}g(x){\bigr )}\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/249d9ea45ea120d0ef41855b52131dba1c4b3ee8)
means 



f
(
x
)
−
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
![{\textstyle f(x)-h(x)=O{\bigl (}g(x){\bigr )}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/18af1be41c609b85dd52c56699c2276df282171f) [More complicated expressions](#More_complicated_expressions) are also possible.

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
![{\textstyle f(x)=O{\bigl (}g(x){\bigr )}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a81ef12b2f629650975cb7650b95e9055ddc81bf) does not refer to an [equality](https://en.wikipedia.org/wiki/Equality_relation), but rather to an inequality relating 



f
{\textstyle f}
![{\textstyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e1b77076edca76caf3331d0551d1645b8f678283) and 



g
.
{\textstyle g.}
![{\textstyle g.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/607055ae8b85e75d6874264aa1436369d80ca53e)

In the 1930s, the Russian number theorist [I.M. Vinogradov](https://en.wikipedia.org/wiki/Ivan_Matveyevich_Vinogradov) introduced the notation 



≪
,
{\displaystyle \ll ,}
![{\displaystyle \ll ,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/397019f540a2303fdcb46b593b68b36ea36827a4) which has been increasingly used in number theory and other branches of mathematics, as an alternative to the 



O
{\textstyle O}
![{\textstyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/60c7c997a0ae6c2aaae92e95a425c5add3abeaeb) notation. We have

:   f
    ≪
    g

    ⟺

    f
    =
    O


    (
    g


    )
    .
    {\displaystyle \ f\ll g\iff f=O{\bigl (}g{\bigr )}.}
    ![{\displaystyle \ f\ll g\iff f=O{\bigl (}g{\bigr )}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/498aa1763a19898f728bd4069343763944f73c11)

Frequently both notations are used in the same work.

### Set version of big O

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=2)]

In computer science it is common to define big 



O
{\textstyle O}
![{\textstyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/60c7c997a0ae6c2aaae92e95a425c5add3abeaeb) as also defining a [set](https://en.wikipedia.org/wiki/Set_(mathematics)) of functions. With the positive (or non-negative) function 



g
(
x
)
{\displaystyle g(x)}
![{\displaystyle g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c6ca91363022bd5e4dcb17e5ef29f78b8ef00b59) specified, one interprets 



O


(
g
(
x
)


)
{\textstyle O{\bigl (}g(x){\bigr )}}
![{\textstyle O{\bigl (}g(x){\bigr )}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/11fb08f80d3f5530e97ef062bda1575f1736df38) as representing the *set* of all functions 






f
~
{\textstyle {\tilde {f}}}
![{\textstyle {\tilde {f}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/935b9b362e48dcd0232042274a31f9019da9d73a) that satisfy 






f
~
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
![{\textstyle {\tilde {f}}(x)=O{\bigl (}g(x){\bigr )}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/69a14263ce1c99eda211f6b14774dc5f64fb3f08) One can then equivalently write 



f
(
x
)
∈
O


(
g
(
x
)


)
,
{\textstyle f(x)\in O{\bigl (}g(x){\bigr )},}
![{\textstyle f(x)\in O{\bigl (}g(x){\bigr )},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/94324664a21e529bf49147204dc563814fc29f9d) read as "the function 



 
f
(
x
)
 
{\textstyle \ f(x)\ }
![{\textstyle \ f(x)\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffda11108160557dfa027165efbe7706889182ee) is among the set of all functions of order at most 



g
(
x
)
.
{\textstyle g(x).}
![{\textstyle g(x).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bb678b0e2996086c478fcf3c4b7261e0b146101a)"

## Examples with an infinite domain

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=3)]

In typical usage the 



O
{\displaystyle O}
![{\displaystyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9d70e1d0d87e2ef1092ea1ffe2923d9933ff18fc) notation is applied to an infinite interval of real numbers 



[
a
,
∞
)
{\displaystyle [a,\infty )}
![{\displaystyle [a,\infty )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/898f5c362bfa741500f6f8f3e9948d7808784694) and captures the behavior of the function for very large 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4). In this setting, the contribution of the terms that grow "most quickly" will eventually make the other ones irrelevant. As a result, the following simplification rules can be applied:

* If 



  f
  (
  x
  )
  {\displaystyle f(x)}
  ![{\displaystyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/202945cce41ecebb6f643f31d119c514bec7a074) is a sum of several terms, if there is one with largest growth rate, it can be kept, and all others omitted.
* If 



  f
  (
  x
  )
  {\displaystyle f(x)}
  ![{\displaystyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/202945cce41ecebb6f643f31d119c514bec7a074) is a product of several factors, any constants (factors in the product that do not depend on 



  x
  {\displaystyle x}
  ![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4)) can be omitted.

For example, let 



f
(
x
)
=
6

x

4
−
2

x

3
+
5
{\displaystyle f(x)=6x^{4}-2x^{3}+5}
![{\displaystyle f(x)=6x^{4}-2x^{3}+5}](https://wikimedia.org/api/rest_v1/media/math/render/svg/83ef303f6f498e77652a0d2fb97a879ced7d2de3), and suppose we wish to simplify this function, using 



O
{\displaystyle O}
![{\displaystyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9d70e1d0d87e2ef1092ea1ffe2923d9933ff18fc) notation, to describe its growth rate for large 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4). This function is the sum of three terms: 



6

x

4
{\displaystyle 6x^{4}}
![{\displaystyle 6x^{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd98d63a88800ba6a18b3b1bd6059d32a70b92bb), 



−
2

x

3
{\displaystyle -2x^{3}}
![{\displaystyle -2x^{3}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dbcd6270a9aca82ce68a6b1e9c6ba24836066f3b), and 



5
{\displaystyle 5}
![{\displaystyle 5}](https://wikimedia.org/api/rest_v1/media/math/render/svg/29483407999b8763f0ea335cf715a6a5e809f44b). Of these three terms, the one with the highest growth rate is the one with the largest exponent as a function of 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4), namely 



6

x

4
{\displaystyle 6x^{4}}
![{\displaystyle 6x^{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd98d63a88800ba6a18b3b1bd6059d32a70b92bb). Now one may apply the second rule: 



6

x

4
{\displaystyle 6x^{4}}
![{\displaystyle 6x^{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd98d63a88800ba6a18b3b1bd6059d32a70b92bb)is a product of 



6
{\displaystyle 6}
![{\displaystyle 6}](https://wikimedia.org/api/rest_v1/media/math/render/svg/39d81124420a058a7474dfeda48228fb6ee1e253) and 




x

4
{\displaystyle x^{4}}
![{\displaystyle x^{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5613a29a5077db2494368feec90c0fb58cc2f703) in which the first factor does not depend on 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4). Omitting this factor results in the simplified form 




x

4
{\displaystyle x^{4}}
![{\displaystyle x^{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5613a29a5077db2494368feec90c0fb58cc2f703). Thus, we say that 



f
(
x
)
{\displaystyle f(x)}
![{\displaystyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/202945cce41ecebb6f643f31d119c514bec7a074) is a "big O" of 




x

4
{\displaystyle x^{4}}
![{\displaystyle x^{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5613a29a5077db2494368feec90c0fb58cc2f703). Mathematically, we can write 



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
![{\displaystyle f(x)=O(x^{4})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b9fd4e8dfcc3dc03fdb325efccf39f7e2b1dfa19) for all 



x
≥
1
{\displaystyle x\geq 1}
![{\displaystyle x\geq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5ca3ced43f1713577888a8a7ade2d0aaf8354a4b). One may confirm this calculation using the formal definition: let 



f
(
x
)
=
6

x

4
−
2

x

3
+
5
{\displaystyle f(x)=6x^{4}-2x^{3}+5}
![{\displaystyle f(x)=6x^{4}-2x^{3}+5}](https://wikimedia.org/api/rest_v1/media/math/render/svg/83ef303f6f498e77652a0d2fb97a879ced7d2de3) and 



g
(
x
)
=

x

4
{\displaystyle g(x)=x^{4}}
![{\displaystyle g(x)=x^{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b6224dfb6ba838aecb5896a69521dbfd084e9f69). Applying the [formal definition](#Formal_definition) from above, the statement that 



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
![{\displaystyle f(x)=O(x^{4})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b9fd4e8dfcc3dc03fdb325efccf39f7e2b1dfa19) is equivalent to its expansion,

|
f
(
x
)

|
≤
M

x

4
{\displaystyle |f(x)|\leq Mx^{4}}
![{\displaystyle |f(x)|\leq Mx^{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e05e585265f72da0079873c3bc4a8711ebd115d8)
for some suitable choice of a positive real number 



M
{\displaystyle M}
![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd) and for all 



x
≥
1
{\displaystyle x\geq 1}
![{\displaystyle x\geq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5ca3ced43f1713577888a8a7ade2d0aaf8354a4b). To prove this, let 



M
=
13
{\displaystyle M=13}
![{\displaystyle M=13}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b9acc85956e82b914af14d2db6fb0992cc5b5db9). Then, for all 



x
≥
1
{\displaystyle x\geq 1}
![{\displaystyle x\geq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5ca3ced43f1713577888a8a7ade2d0aaf8354a4b):

|
6

x

4
−
2

x

3
+
5

|


≤
6

x

4
+

|
−
2

x

3

|
+
5




≤
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
![{\displaystyle {\begin{aligned}|6x^{4}-2x^{3}+5|&\leq 6x^{4}+|-2x^{3}|+5\\&\leq 6x^{4}+2x^{4}+5x^{4}\\&=13x^{4}\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/47a87b09d1ede373c186fed646c54efd9378d8e5)
so

|
6

x

4
−
2

x

3
+
5

|
≤
13

x

4
.
{\displaystyle |6x^{4}-2x^{3}+5|\leq 13x^{4}.}
![{\displaystyle |6x^{4}-2x^{3}+5|\leq 13x^{4}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/eb23b946983d89787b6ee97bc4cab8ebd39aca96)
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
![{\displaystyle f(x)=O(x^{10})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7ad33d38d62964ecf865ca43559ed7ee5fff3809), this is a less precise
approximation of the function 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61).
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
![{\displaystyle f(x)=O(x^{3})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4132be0557af5b968268314c83ce73cb037d3fe0) is false, because the term 



6

x

4
{\displaystyle 6x^{4}}
![{\displaystyle 6x^{4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd98d63a88800ba6a18b3b1bd6059d32a70b92bb) causes

f
(
x
)

/

x

3
{\displaystyle f(x)/x^{3}}
![{\displaystyle f(x)/x^{3}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8fcb6e8e7f4e342b880c46297068f5c93e0447cc) to be unbounded.

When a function 



T
(
n
)
{\displaystyle T(n)}
![{\displaystyle T(n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0be5a46684e1279c27414b285fa995f30407d002) describes the number
of steps required in an algorithm with input 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b), an expression such as

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
![{\displaystyle T(n)=O(n^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8526253f8646d3899c4b3f99b6b1c1d3d911a33c)
with the implied domain being the set of positive integers, may be interpreted as saying that the algorithm has *at most the order of 




n

2
{\displaystyle n^{2}}
![{\displaystyle n^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ac9810bbdafe4a6a8061338db0f74e25b7952620)* time complexity.

## Example with a finite domain

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=4)]

Big O can also be used to describe the [error term](https://en.wikipedia.org/wiki/Taylor_series#Approximation_error_and_convergence) in an approximation to a mathematical function on a finite interval. The most significant terms are written explicitly, and then the least-significant terms are summarized in a single big O term. Consider, for example, the [exponential series](https://en.wikipedia.org/wiki/Exponential_function#Formal_definition) and two expressions of it that are valid when 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) is small:

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
⋯



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
≤
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
≤
1.
{\displaystyle {\begin{aligned}e^{x}&=1+x+{\frac {\;x^{2}\ }{2!}}+{\frac {\;x^{3}\ }{3!}}+{\frac {\;x^{4}\ }{4!}}+\dotsb &&{\text{ for all finite }}x\\[4pt]&=1+x+{\frac {\;x^{2}\ }{2}}+O(|x|^{3})&&{\text{ for all }}|x|\leq 1\\[4pt]&=1+x+O(x^{2})&&{\text{ for all }}|x|\leq 1.\end{aligned}}}
![{\displaystyle {\begin{aligned}e^{x}&=1+x+{\frac {\;x^{2}\ }{2!}}+{\frac {\;x^{3}\ }{3!}}+{\frac {\;x^{4}\ }{4!}}+\dotsb &&{\text{ for all finite }}x\\[4pt]&=1+x+{\frac {\;x^{2}\ }{2}}+O(|x|^{3})&&{\text{ for all }}|x|\leq 1\\[4pt]&=1+x+O(x^{2})&&{\text{ for all }}|x|\leq 1.\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3a4cf161e1f091b8a9c0dcaf25e35dc39d8770db)
The middle expression (the line with "



O
(

|

x

3

|
)
{\displaystyle O(|x^{3}|)}
![{\displaystyle O(|x^{3}|)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b44833fd12f63e717725cc4bc911c024ae901788)") means the absolute-value of the error

 

e

x
−
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
![{\displaystyle \ e^{x}-(1+x+{\frac {\;x^{2}\ }{2}})\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/df763e5e2453fe7273b9dc2ea0e84fc57a07faf5) is at most some constant times 



 

|

x

3

|
 
{\displaystyle ~|x^{3}|\ }
![{\displaystyle ~|x^{3}|\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/e2b738b32cba4c5b9d2f32e147b316ced7a5c3c6) when 



 
x
 
{\displaystyle \ x~}
![{\displaystyle \ x~}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3869d585d14785625dd8c3d0fc71d7b0b0f8bbb7) is small.
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
≥
1
{\displaystyle (x+1)^{8}=x^{8}+O(x^{7})\quad {\text{ for }}x\geq 1}
![{\displaystyle (x+1)^{8}=x^{8}+O(x^{7})\quad {\text{ for }}x\geq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2dd32de2bbf7864d607f093845dfbc9c4676f43)
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
≤
1.
{\displaystyle (x+1)^{8}=1+8x+O(x^{2})\quad {\text{ for }}|x|\leq 1.}
![{\displaystyle (x+1)^{8}=1+8x+O(x^{2})\quad {\text{ for }}|x|\leq 1.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9155a67a57951ebe196467ce790110d4c73671d2)

## Multivariate examples

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=5)]

x
sin
⁡
y
=
O
(
x
)


 for 
x
≥
1
,
y

 any real number
{\displaystyle x\sin y=O(x)\quad {\text{ for }}x\geq 1,y{\text{ any real number}}}
![{\displaystyle x\sin y=O(x)\quad {\text{ for }}x\geq 1,y{\text{ any real number}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae9914bad7b64c6ad2a3423ae64517820f0d05c0)

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
≪

a

2
+

b

2
≪

a

2


 for all 
a
≥
b
≥
1
{\displaystyle 3a^{2}+7ab+2b^{2}+a+3b+14\ll a^{2}+b^{2}\ll a^{2}\quad {\text{ for all }}a\geq b\geq 1}
![{\displaystyle 3a^{2}+7ab+2b^{2}+a+3b+14\ll a^{2}+b^{2}\ll a^{2}\quad {\text{ for all }}a\geq b\geq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/77f81ee3fc182135569a3328148cf7148340d0ea)

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
![{\displaystyle {\frac {xy}{x^{2}+y^{2}}}=O(1)\quad {\text{ for all real }}x,y{\text{ that are not both }}0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9cd99807ccc4697bf1d29eedfa22b9d42003d6a3)

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
≠
0
,
t
∈

R
.
{\displaystyle x^{it}=O(1)\quad {\text{ for }}x\neq 0,t\in \mathbb {R} .}
![{\displaystyle x^{it}=O(1)\quad {\text{ for }}x\neq 0,t\in \mathbb {R} .}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0f81e3a1a82ebaa961afb7238afe057f717356dd)

Here we have a [complex variable](https://en.wikipedia.org/wiki/Complex_analysis) function of two variables.
In general, any bounded function is 



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21).

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
≥
1
,
−
2
≤
y
≤
2.
{\displaystyle (x+y)^{10}=O(x^{10})\quad {\text{ for }}x\geq 1,-2\leq y\leq 2.}
![{\displaystyle (x+y)^{10}=O(x^{10})\quad {\text{ for }}x\geq 1,-2\leq y\leq 2.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bb5d34631f9b28d83074b60bbb791c1433565fd)

The last example illustrates a mixing of finite and infinite domains on the different variables.

In all of these examples, the bound is uniform
in both variables. Sometimes in a multivariate expression, one variable is
more important than others, and one may express
that the implied constant 



M
{\displaystyle M}
![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd) depends on one
or more of the variables using subscripts to the big O symbol or the 



≪
{\displaystyle \ll }
![{\displaystyle \ll }](https://wikimedia.org/api/rest_v1/media/math/render/svg/10563f31a4178c71bef006ea5c601e908f984136) symbol. For example, consider the expression

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
≤
x
≤
1
,
b

 any real number.
{\displaystyle (1+x)^{b}=1+O\_{b}(x)\quad {\text{ for }}0\leq x\leq 1,b{\text{ any real number.}}}
![{\displaystyle (1+x)^{b}=1+O_{b}(x)\quad {\text{ for }}0\leq x\leq 1,b{\text{ any real number.}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c86749ef35a987a4d5b9cce3941c8d53b6617c5e)

This means that for each real number 



b
{\displaystyle b}
![{\displaystyle b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f11423fbb2e967f986e36804a8ae4271734917c3), there
is a constant 




M

b
{\displaystyle M\_{b}}
![{\displaystyle M_{b}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/692c858929a1951aae19d1f230585a989869c77b), *which depends on 



b
{\displaystyle b}
![{\displaystyle b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f11423fbb2e967f986e36804a8ae4271734917c3)*, so that for all 



0
≤
x
≤
1
{\displaystyle 0\leq x\leq 1}
![{\displaystyle 0\leq x\leq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/30810e06ad49f3a837bd2193d4392eda1f74e7ab),

|
(
1
+
x

)

b
−
1

|
≤

M

b
⋅
x
.
{\displaystyle |(1+x)^{b}-1|\leq M\_{b}\cdot x.}
![{\displaystyle |(1+x)^{b}-1|\leq M_{b}\cdot x.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7d36e88d8029faedfe7f9cd9503c8a9c35f8b74b)
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
≤
r
,
r

 being any real number.
{\displaystyle e^{x}=1+x+O\_{r}(x^{2})\quad {\text{ for all }}|x|\leq r,r{\text{ being any real number.}}}
![{\displaystyle e^{x}=1+x+O_{r}(x^{2})\quad {\text{ for all }}|x|\leq r,r{\text{ being any real number.}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9e8a32961e512f3fb942b5c825591bea2d216c78)
Here the implied constant depends on the size of the domain.

The subscript convention applies to all of the other
notations in this page.

:   f

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
    ⇒

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
    {\displaystyle f\_{1}=O(g\_{1}){\text{ and }}f\_{2}=O(g\_{2})\Rightarrow f\_{1}f\_{2}=O(g\_{1}g\_{2})}
    ![{\displaystyle f_{1}=O(g_{1}){\text{ and }}f_{2}=O(g_{2})\Rightarrow f_{1}f_{2}=O(g_{1}g_{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/819a5b9bb47ab027ff7cb4240935e18487391599)
:   f
    ⋅
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
    ![{\displaystyle f\cdot O(g)=O(|f|g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e8feb3c4ca3f774ea13a7c48eeff2e086e371276)

If 




f

1
=
O
(

g

1
)
{\displaystyle f\_{1}=O(g\_{1})}
![{\displaystyle f_{1}=O(g_{1})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/10bbbef07d6840089dac53d3844220538055f114) and 




f

2
=
O
(

g

2
)
{\displaystyle f\_{2}=O(g\_{2})}
![{\displaystyle f_{2}=O(g_{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/31c9c91c308dc88f1fba95d5b9307bc731b45936) then 




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
{\displaystyle f\_{1}+f\_{2}=O(\max(g\_{1},g\_{2}))}
![{\displaystyle f_{1}+f_{2}=O(\max(g_{1},g_{2}))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1e26ee5a89c13b4bf052c0f955db9d9ed8c11be4). It follows that if 




f

1
=
O
(
g
)
{\displaystyle f\_{1}=O(g)}
![{\displaystyle f_{1}=O(g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8d51f82b5ddc09c23f6676096a19367cd136a366) and 




f

2
=
O
(
g
)
{\displaystyle f\_{2}=O(g)}
![{\displaystyle f_{2}=O(g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bdb9c640aca1f49030a10cef0b81fc17be012a2e) then 




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
{\displaystyle f\_{1}+f\_{2}=O(g)}
![{\displaystyle f_{1}+f_{2}=O(g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/746008bffe195235f5d74a58959d929658c801a7).

### Multiplication by a constant

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=9)]

Let k be a nonzero constant. Then 



O
(

|
k

|
⋅
g
)
=
O
(
g
)
{\displaystyle O(|k|\cdot g)=O(g)}
![{\displaystyle O(|k|\cdot g)=O(g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/985920563f4f78550f8a1fd39b05087419893328). In other words, if 



f
=
O
(
g
)
{\displaystyle f=O(g)}
![{\displaystyle f=O(g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/beed823cad3e8b52dcfa798e8097d94b3c3c7541), then 



k
⋅
f
=
O
(
g
)
.
{\displaystyle k\cdot f=O(g).}
![{\displaystyle k\cdot f=O(g).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bd52d7bf53187189e7f1703754a985e20b5f7d74)

### Transitive property

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=10)]

If 



f
=
O
(
g
)
{\displaystyle f=O(g)}
![{\displaystyle f=O(g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/beed823cad3e8b52dcfa798e8097d94b3c3c7541) and 



g
=
O
(
h
)
{\displaystyle g=O(h)}
![{\displaystyle g=O(h)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/834228e54a0c6ef38eb342f636e3c7f20c61dd0f) then

f
=
O
(
h
)
{\displaystyle f=O(h)}
![{\displaystyle f=O(h)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/75dbd190a9d839b769342d6d88558381704719cd).

If the function 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) of a positive integer

n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) can be written as a finite sum of other functions, then the fastest growing one determines the order of 



f
(
n
)
{\displaystyle f(n)}
![{\displaystyle f(n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c1c49fad1eccc4e9af1e4f23f32efdc3ac4da973). For example,

:   f
    (
    n
    )
    =
    9
    log
    ⁡
    n
    +
    5
    (
    log
    ⁡
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
    ≥
    1.
    {\displaystyle f(n)=9\log n+5(\log n)^{4}+3n^{2}+2n^{3}=O(n^{3})\qquad {\text{for }}n\geq 1.}
    ![{\displaystyle f(n)=9\log n+5(\log n)^{4}+3n^{2}+2n^{3}=O(n^{3})\qquad {\text{for }}n\geq 1.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7fe1453bf3c348d5fa171b24e7201c5320cf65b3)

Some general rules about growth *toward infinity*; the 2nd and 3rd property below
can be proved rigorously using [L'Hôpital's rule](https://en.wikipedia.org/wiki/L%27H%C3%B4pital%27s_rule):

### Large powers dominate small powers

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=11)]

For 



b
≥
a
{\displaystyle b\geq a}
![{\displaystyle b\geq a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2db6581643a6d21f1efd54d284cfcc99b850531), then

n

a
=
O
(

n

b
)
{\displaystyle n^{a}=O(n^{b})}
![{\displaystyle n^{a}=O(n^{b})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/18c97e2162eb021b3844a6a4035d745d1bcc3ac1)
as 



n
→
∞
{\displaystyle n\to \infty }
![{\displaystyle n\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a0d55d9b32f6fa8fab6a84ea444a6b5a24bb45e1).

### Powers dominate logarithms

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=12)]

For any positive 



a
,
b
,
{\displaystyle a,b,}
![{\displaystyle a,b,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/05ae9ae3580e0d3b9cfb40bebf5fe09640183361)




(
log
⁡
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
{\displaystyle (\log n)^{a}=O\_{a,b}(n^{b}),}
![{\displaystyle (\log n)^{a}=O_{a,b}(n^{b}),}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6123bf1c130f2dd716d22e0600bfd5c7cb695f2c)
no matter how large 



a
{\displaystyle a}
![{\displaystyle a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffd2487510aa438433a2579450ab2b3d557e5edc) is and how small

b
{\displaystyle b}
![{\displaystyle b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f11423fbb2e967f986e36804a8ae4271734917c3) is. Here, the implied constant depends
on both 



a
{\displaystyle a}
![{\displaystyle a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffd2487510aa438433a2579450ab2b3d557e5edc) and 



b
{\displaystyle b}
![{\displaystyle b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f11423fbb2e967f986e36804a8ae4271734917c3).

### Exponentials dominate powers

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=13)]

For any positive 



a
,
b
,
{\displaystyle a,b,}
![{\displaystyle a,b,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/05ae9ae3580e0d3b9cfb40bebf5fe09640183361)





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
{\displaystyle n^{a}=O\_{a,b}(e^{bn}),}
![{\displaystyle n^{a}=O_{a,b}(e^{bn}),}](https://wikimedia.org/api/rest_v1/media/math/render/svg/52877e1c1f39d09c0bef141da20266497f19e5af)
no matter how large 



a
{\displaystyle a}
![{\displaystyle a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffd2487510aa438433a2579450ab2b3d557e5edc) is and how small

b
{\displaystyle b}
![{\displaystyle b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f11423fbb2e967f986e36804a8ae4271734917c3) is.

A function that grows faster than 




n

c
{\displaystyle n^{c}}
![{\displaystyle n^{c}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3a62b39da47c098d4cec1ac794318335b381c436) for any 



c
{\displaystyle c}
![{\displaystyle c}](https://wikimedia.org/api/rest_v1/media/math/render/svg/86a67b81c2de995bd608d5b2df50cd8cd7d92455) is called *superpolynomial*. One that grows more slowly than any exponential function of the form 




c

n
{\displaystyle c^{n}}
![{\displaystyle c^{n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55d528e42c2910019e308d13c563e276abe0c809) with 



c
>
1
{\displaystyle c>1}
![{\displaystyle c>1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bd1d6b5c226641ad3def8e65631f0eb463d9c67a) is called *subexponential*. An algorithm can require time that is both superpolynomial and subexponential; examples of this include the fastest known algorithms for [integer factorization](https://en.wikipedia.org/wiki/Integer_factorization) and the function 




n

log
⁡
n
{\displaystyle n^{\log n}}
![{\displaystyle n^{\log n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c403a7c02eceb7217e79eafa65de2554c56ebb02).

We may ignore any powers of 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) inside of the logarithms. For any positive 



c
{\displaystyle c}
![{\displaystyle c}](https://wikimedia.org/api/rest_v1/media/math/render/svg/86a67b81c2de995bd608d5b2df50cd8cd7d92455), the notation 



O
(
log
⁡
n
)
{\displaystyle O(\log n)}
![{\displaystyle O(\log n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/aae0f22048ba6b7c05dbae17b056bfa16e21807d) means exactly the same thing as 



O
(
log
⁡
(

n

c
)
)
{\displaystyle O(\log(n^{c}))}
![{\displaystyle O(\log(n^{c}))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d40b7f94f6d1c6aef5e936bd1d42b42b629a9ede), since 



log
⁡
(

n

c
)
=
c
log
⁡
n
{\displaystyle \log(n^{c})=c\log n}
![{\displaystyle \log(n^{c})=c\log n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cdc69b53780c9ca872253d01f5fb2f87ac4c7520). Similarly, logs with different constant bases are equivalent with respect to Big O
notation. On the other hand, exponentials with different bases are not of the same order. For example, 




2

n
{\displaystyle 2^{n}}
![{\displaystyle 2^{n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8226f30650ee4fe4e640c6d2798127e80e9c160d) and 




3

n
{\displaystyle 3^{n}}
![{\displaystyle 3^{n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/193abd21d79ceb2992929ab3b3a1ee97d2afb6a0) are not of the same order.

### More complicated expressions

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=14)]

In more complicated usage, 



O
(
⋅
)
{\displaystyle O(\cdot )}
![{\displaystyle O(\cdot )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c82fd5fbde213ba5a358a9b5f47775bc7e716137) can appear in different places in an equation, even several times on each side. For example, the following are true for 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) a positive integer:

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
⋅
(
n
+
O
(
log
⁡
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
![{\displaystyle {\begin{aligned}(n+1)^{2}&=n^{2}+O(n),\\(n+O(n^{1/2}))\cdot (n+O(\log n))^{2}&=n^{3}+O(n^{5/2}),\\n^{O(1)}&=O(e^{n}).\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/42312b6e624001cba2f95952067b93278ea868bb)
The meaning of such statements is as follows: for *any* functions which satisfy each 



O
(
⋅
)
{\displaystyle O(\cdot )}
![{\displaystyle O(\cdot )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c82fd5fbde213ba5a358a9b5f47775bc7e716137) on the left side, there are *some* functions satisfying each 



O
(
⋅
)
{\displaystyle O(\cdot )}
![{\displaystyle O(\cdot )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c82fd5fbde213ba5a358a9b5f47775bc7e716137) on the right side, such that substituting all these functions into the equation makes the two sides equal. For example, the third equation above means: "For any function satisfying 



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
![{\displaystyle f(n)=O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/76ae7b1257fda2cdd79971a7b20a2f13b836c955), there is some function 



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
![{\displaystyle g(n)=O(e^{n})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8c48f7a2e5cf3b2a5a786297f20f58fd0155c4a1) such that 




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
![{\displaystyle n^{f(n)}=g(n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a004f4dbea73d401d4a8fc89fb01213a108defe9)". The implied constant in the statement "



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
![{\displaystyle g(n)=O(e^{n})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8c48f7a2e5cf3b2a5a786297f20f58fd0155c4a1)" may
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
![{\displaystyle f(n)=O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/76ae7b1257fda2cdd79971a7b20a2f13b836c955)".

Some further examples:

f
=
O
(
g
)



⇒


∫

a

b
f
=
O


(

∫

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



⇒


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
⁡
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
{\displaystyle {\begin{aligned}f=O(g)\;&\Rightarrow \;\int \_{a}^{b}f=O{\bigg (}\int \_{a}^{b}g{\bigg )}\\f(x)=g(x)+O(1)\;&\Rightarrow \;e^{f(x)}=O(e^{g(x)})\\(1+O(1/x))^{O(x)}&=O(1)\quad {\text{ for }}x>0\\\sin x&=O(|x|)\quad {\text{ for all real }}x.\end{aligned}}}
![{\displaystyle {\begin{aligned}f=O(g)\;&\Rightarrow \;\int _{a}^{b}f=O{\bigg (}\int _{a}^{b}g{\bigg )}\\f(x)=g(x)+O(1)\;&\Rightarrow \;e^{f(x)}=O(e^{g(x)})\\(1+O(1/x))^{O(x)}&=O(1)\quad {\text{ for }}x>0\\\sin x&=O(|x|)\quad {\text{ for all real }}x.\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fa761758081c7dcf6205e820ec158562cc2d1c18)

### Vinogradov's ≫ and Knuth's big Ω

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=15)]

When 



f
,
g
{\displaystyle f,g}
![{\displaystyle f,g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/25b6ab1762925585cd7605809caa8b1b5284177b) are both positive functions,
Vinogradov introduced the notation 



f
(
x
)
≫
g
(
x
)
{\displaystyle f(x)\gg g(x)}
![{\displaystyle f(x)\gg g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b33e369934caa85945eaa0367a9f10efee1782d6), which means the same as 



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
![{\displaystyle g(x)=O(f(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/003c7cb944326248afb5cc4233db0ef354229feb). Vinogradov's two notations enjoy visual symmetry, as
for positive functions 



f
,
g
{\displaystyle f,g}
![{\displaystyle f,g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/25b6ab1762925585cd7605809caa8b1b5284177b), we have

f
(
x
)
≪
g
(
x
)
⟺
g
(
x
)
≫
f
(
x
)
.
{\displaystyle f(x)\ll g(x)\Longleftrightarrow g(x)\gg f(x).}
![{\displaystyle f(x)\ll g(x)\Longleftrightarrow g(x)\gg f(x).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0f69357a4966f24056c113e586b8dbed84f6630f)

In 1976, [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)
defined

:   f
    (
    x
    )
    =
    Ω
    (
    g
    (
    x
    )
    )
    ⟺
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
    ![{\displaystyle f(x)=\Omega (g(x))\Longleftrightarrow g(x)=O(f(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6497a4d1f29ead0f4754812f8c13f206f11f7f36)

which has the same meaning as Vinogradov's 



f
(
x
)
≫
g
(
x
)
{\displaystyle f(x)\gg g(x)}
![{\displaystyle f(x)\gg g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b33e369934caa85945eaa0367a9f10efee1782d6).

However, much earlier, Hardy and Littlewood had defined 



Ω
{\displaystyle \Omega }
![{\displaystyle \Omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24b0d5ca6f381068d756f6337c08e0af9d1eeb6f) [differently](#The_Hardy%E2%80%93Littlewood_%CE%A9), and their notation enjoys widespread use today in analytic number theory.
Justifying his use of the 



Ω
{\displaystyle \Omega }
![{\displaystyle \Omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24b0d5ca6f381068d756f6337c08e0af9d1eeb6f)-symbol to describe a stronger property, Knuth wrote: "For all the applications I have seen so far in computer science, a stronger requirement ... is much more appropriate". Knuth further wrote, "Although I have changed Hardy and Littlewood's definition of 



Ω
{\displaystyle \Omega }
![{\displaystyle \Omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24b0d5ca6f381068d756f6337c08e0af9d1eeb6f), I feel justified in doing so because their definition is by no means in wide use, and because there are other ways to say what they want to say in the comparatively rare cases when their definition applies." Knuth's big 



Ω
{\displaystyle \Omega }
![{\displaystyle \Omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24b0d5ca6f381068d756f6337c08e0af9d1eeb6f) enjoys widespread use today
in computer science and combinatorics.

### Hardy's ≍ and Knuth's big Θ

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=16)]

In analytic number theory, the
notation 



f
(
x
)
≍
g
(
x
)
{\displaystyle f(x)\asymp g(x)}
![{\displaystyle f(x)\asymp g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7ee00f45070774eacea191324a222395bc050895) means both

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
![{\displaystyle f(x)=O(g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5e69c69cb5dc8e33a50a094deff53ec988fa6aeb) and 



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
![{\displaystyle g(x)=O(f(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/003c7cb944326248afb5cc4233db0ef354229feb). This notation is originally due to Hardy. Knuth's notation for the same notion
is 



f
(
x
)
=
Θ
(
g
(
x
)
)
{\displaystyle f(x)=\Theta (g(x))}
![{\displaystyle f(x)=\Theta (g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ecd70e6ee84d7584d91b2d5d7cda885fcbe2f11a). Roughly speaking, these statements assert that 



f
(
x
)
{\displaystyle f(x)}
![{\displaystyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/202945cce41ecebb6f643f31d119c514bec7a074) and 



g
(
x
)
{\displaystyle g(x)}
![{\displaystyle g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c6ca91363022bd5e4dcb17e5ef29f78b8ef00b59) have the *same order*. These notations mean that there are
positive constants 



M
,
N
{\displaystyle M,N}
![{\displaystyle M,N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/30012178e674e69a55fee64e9c221dbdb0d95b9e)
so that

N
g
(
x
)
≤
f
(
x
)
≤
M
g
(
x
)
{\displaystyle Ng(x)\leq f(x)\leq Mg(x)}
![{\displaystyle Ng(x)\leq f(x)\leq Mg(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f9f94db5ca5e2f1003529d5fbbc728a7256f2263)
for all 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) in the common domain of

f
,
g
{\displaystyle f,g}
![{\displaystyle f,g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/25b6ab1762925585cd7605809caa8b1b5284177b). When the functions are defined on the positive integers or positive real numbers, as with big O, writers oftentimes interpret statements

f
(
x
)
=
Ω
(
g
(
x
)
)
{\displaystyle f(x)=\Omega (g(x))}
![{\displaystyle f(x)=\Omega (g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/83679ae2e7d7e9f0d0c0e7e750ee75ef824f74a7) and 



f
(
x
)
=
Θ
(
g
(
x
)
)
{\displaystyle f(x)=\Theta (g(x))}
![{\displaystyle f(x)=\Theta (g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ecd70e6ee84d7584d91b2d5d7cda885fcbe2f11a) as holding for all sufficiently large 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4), that is, for all 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) beyond some point 




x

0
{\displaystyle x\_{0}}
![{\displaystyle x_{0}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/86f21d0e31751534cd6584264ecf864a6aa792cf). Sometimes this is indicated by appending *x
→
∞
{\displaystyle x\to \infty }
![{\displaystyle x\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/eda2caf97ec29f30d5f0c0cd7135393361efc020)* to the statement. For example,

2

n

2
−
10
n
=
Θ
(

n

2
)
{\displaystyle 2n^{2}-10n=\Theta (n^{2})}
![{\displaystyle 2n^{2}-10n=\Theta (n^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae38678288344e8b54a22f00d6a4cc3490ffae00)
is true for the domain 



n
≥
6
{\displaystyle n\geq 6}
![{\displaystyle n\geq 6}](https://wikimedia.org/api/rest_v1/media/math/render/svg/154f45728701bd6df71c58558cdb2bdde36214ed) but false if the
domain is all positive integers, since the function is zero at 



n
=
5
{\displaystyle n=5}
![{\displaystyle n=5}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cdb41e9a10a8fd7179b9170149a8d70949ba5d03).

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
≍

n

3


 for all 
n
≥
1.
{\displaystyle n^{3}+20n^{2}+n+12\asymp n^{3}\quad {\text{ for all }}n\geq 1.}
![{\displaystyle n^{3}+20n^{2}+n+12\asymp n^{3}\quad {\text{ for all }}n\geq 1.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/27dafbd1d09e1b71692e2579bc159fee96ce54e3)

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
Θ
(

x

7
)


 for all 
x
≥
1.
{\displaystyle (1+x)^{8}=x^{8}+\Theta (x^{7})\quad {\text{ for all }}x\geq 1.}
![{\displaystyle (1+x)^{8}=x^{8}+\Theta (x^{7})\quad {\text{ for all }}x\geq 1.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/64f4b7d7b45cf1960cf787c5df9e16e788e36163)

The notation

f
(
n
)
=

e

Ω
(
n
)


 for all 
n
≥
1
,
{\displaystyle f(n)=e^{\Omega (n)}\quad {\text{ for all }}n\geq 1,}
![{\displaystyle f(n)=e^{\Omega (n)}\quad {\text{ for all }}n\geq 1,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0df0fc803c88fd5079cb7e112e606b54ef930b7f)
means that there is a positive constant 



M
{\displaystyle M}
![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd)
so that 



f
(
n
)
≥

e

M
n
{\displaystyle f(n)\geq e^{Mn}}
![{\displaystyle f(n)\geq e^{Mn}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/36cda998bd0941e10d2310ff4db936b7cdfa3674) for all 



n
≥
1
{\displaystyle n\geq 1}
![{\displaystyle n\geq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d8ce9ce38d06f6bf5a3fe063118c09c2b6202bfe). By contrast,

f
(
n
)
=

e

−
O
(
n
)


 for all 
n
≥
1
,
{\displaystyle f(n)=e^{-O(n)}\quad {\text{ for all }}n\geq 1,}
![{\displaystyle f(n)=e^{-O(n)}\quad {\text{ for all }}n\geq 1,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65ae5cc6384f9e415abf33989527bbc141cf54e0)
means that there is a positive constant 



M
{\displaystyle M}
![{\displaystyle M}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f82cade9898ced02fdd08712e5f0c0151758a0dd)
so that 



f
(
n
)
≥

e

−
M
n
{\displaystyle f(n)\geq e^{-Mn}}
![{\displaystyle f(n)\geq e^{-Mn}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/71ce181613bcf4692c46768f7027ebb8b17b688b) for all 



n
≥
1
{\displaystyle n\geq 1}
![{\displaystyle n\geq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d8ce9ce38d06f6bf5a3fe063118c09c2b6202bfe) and

f
(
n
)
=

e

Θ
(
n
)


 for all 
n
≥
1
,
{\displaystyle f(n)=e^{\Theta (n)}\quad {\text{ for all }}n\geq 1,}
![{\displaystyle f(n)=e^{\Theta (n)}\quad {\text{ for all }}n\geq 1,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2bcff1b872c7988b0693da6b2897d1ab3d70d8ee)
means that there are positive constants 



M
,
N
{\displaystyle M,N}
![{\displaystyle M,N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/30012178e674e69a55fee64e9c221dbdb0d95b9e)
so that 




e

M
n
≤
f
(
n
)
≤

e

N
n
{\displaystyle e^{Mn}\leq f(n)\leq e^{Nn}}
![{\displaystyle e^{Mn}\leq f(n)\leq e^{Nn}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/057984db17edd8f0f9698d42fe5fc4ede1763e67) for all 



n
≥
1
{\displaystyle n\geq 1}
![{\displaystyle n\geq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d8ce9ce38d06f6bf5a3fe063118c09c2b6202bfe).

For any domain 



D
{\displaystyle D}
![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6),

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
⟺

e

f
(
x
)
≍

e

g
(
x
)
,
{\displaystyle f(x)=g(x)+O(1)\Longleftrightarrow e^{f(x)}\asymp e^{g(x)},}
![{\displaystyle f(x)=g(x)+O(1)\Longleftrightarrow e^{f(x)}\asymp e^{g(x)},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55db994ce1fc56cfe6cb73ed56a5ca1ab7789092)
each statement being for all 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) in 



D
{\displaystyle D}
![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6).

## Orders of common functions

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=18)]

Here is a list of classes of functions that are commonly encountered when analyzing the running time of an algorithm. In each case, *c* is a positive constant and *n* increases without bound. The slower-growing functions are generally listed first.

| Notation | Name | Example |
| --- | --- | --- |
| O ( 1 ) {\displaystyle O(1)} | constant | Finding the median value for a sorted array of numbers; Calculating ( − 1 ) n {\displaystyle (-1)^{n}} ; Using a constant-size lookup table |
| O ( α ( n ) ) {\displaystyle O(\alpha (n))} | inverse Ackermann function | Amortized complexity per operation for the Disjoint-set data structure |
| O ( log ⁡ log ⁡ n ) {\displaystyle O(\log \log n)} | double logarithmic | Average number of comparisons spent finding an item using interpolation search in a sorted array of uniformly distributed values |
| O ( log ⁡ n ) {\displaystyle O(\log n)} | logarithmic | Finding an item in a sorted array with a binary search or a balanced search tree as well as all operations in a binomial heap |
| O ( ( log ⁡ n ) c ) {\displaystyle O((\log n)^{c})} c > 1 {\textstyle c>1} | polylogarithmic | Matrix chain ordering can be solved in polylogarithmic time on a parallel random-access machine . |
| O ( n c ) {\displaystyle O(n^{c})} 0 < c < 1 {\textstyle 0<c<1} | fractional power | Searching in a k-d tree Trial division naive primality testing ( O ( n ) {\displaystyle O({\sqrt {n}})} ) |
| O ( n ) {\displaystyle O(n)} | linear | Finding an item in an unsorted list or in an unsorted array; adding two n -bit integers by ripple carry |
| O ( n log ∗ ⁡ n ) {\displaystyle O(n\log ^{*}n)} | n log-star n | Performing triangulation of a simple polygon using Seidel's algorithm, where log ∗ ⁡ ( n ) = { 0 , if n ≤ 1 1 + log ∗ ⁡ ( log ⁡ n ) , if n > 1 {\displaystyle \log ^{*}(n)={\begin{cases}0,&{\text{if }}n\leq 1\\1+\log ^{*}(\log n),&{\text{if }}n>1\end{cases}}} |
| O ( n log ⁡ n ) = O ( log ⁡ n ! ) {\displaystyle O(n\log n)=O(\log n!)} | linearithmic , loglinear, quasilinear, or " n log ⁡ n {\displaystyle n\log n} " | Performing a fast Fourier transform ; fastest possible comparison sort ; heapsort and merge sort |
| O ( n 2 ) {\displaystyle O(n^{2})} | quadratic | Multiplying two n {\displaystyle n} -digit numbers by schoolbook multiplication ; simple sorting algorithms, such as bubble sort , selection sort and insertion sort ; (worst-case) bound on some usually faster sorting algorithms such as quicksort , Shellsort , and tree sort |
| O ( n c ) {\displaystyle O(n^{c})} | polynomial or algebraic | Tree-adjoining grammar parsing; maximum matching for bipartite graphs ; finding the determinant with LU decomposition |
| L n [ α , c ] = e ( c + o ( 1 ) ) ( ln ⁡ n ) α ( ln ⁡ ln ⁡ n ) 1 − α {\displaystyle L_{n}[\alpha ,c]=e^{(c+o(1))(\ln n)^{\alpha }(\ln \ln n)^{1-\alpha }}} 0 < α < 1 {\textstyle 0<\alpha <1} | L-notation or sub-exponential | Factoring a number using the quadratic sieve or number field sieve |
| O ( c n ) {\displaystyle O(c^{n})} c > 1 {\textstyle c>1} | exponential | Finding the (exact) solution to the travelling salesman problem using dynamic programming ; determining if two logical statements are equivalent using brute-force search |
| O ( n ! ) {\displaystyle O(n!)} | factorial | Solving the travelling salesman problem via brute-force search; generating all unrestricted permutations of a poset ; finding the determinant with Laplace expansion ; enumerating all partitions of a set |

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
![{\displaystyle f(n)=O(n!)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2112c37f521132251407043c59aec72dbad126ff) is sometimes weakened to 



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
![{\displaystyle f(n)=O\left(n^{n}\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e476f151f8eebb41935f16a78e7d78b8bb8a75f9) to derive simpler formulas for asymptotic complexity.
In many of these examples, the running time is
actually 



Θ
(
g
(
n
)
)
{\displaystyle \Theta (g(n))}
![{\displaystyle \Theta (g(n))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6ed38fc5850e844316e02a1d452fb048b8fc75de), which conveys more
precision.

"Little o" redirects here. For the baseball player, see

[Omar Vizquel](https://en.wikipedia.org/wiki/Omar_Vizquel)

. For the Greek letter, see

[Omicron](https://en.wikipedia.org/wiki/Omicron)

.

For real or complex-valued functions of a real variable

x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) with 



g
(
x
)
>
0
{\displaystyle g(x)>0}
![{\displaystyle g(x)>0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3e999e3ac462023ab594ec9281686f4525e63143) for [sufficiently large](https://en.wikipedia.org/wiki/Eventually_(mathematics)) 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4), one writes

:   f
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
    →
    ∞
    {\displaystyle f(x)=o(g(x))\quad {\text{ as }}x\to \infty }
    ![{\displaystyle f(x)=o(g(x))\quad {\text{ as }}x\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/095a25369f3dec90b5123575eca7eb35c2bb2c63)

if

lim

x
→
∞



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
{\displaystyle \lim \_{x\to \infty }{\frac {f(x)}{g(x)}}=0.}
![{\displaystyle \lim _{x\to \infty }{\frac {f(x)}{g(x)}}=0.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/352983cbf924be12c902e4a69645b05131e9f051)
That is, for every positive constant ε there exists a constant 




x

0
{\displaystyle x\_{0}}
![{\displaystyle x_{0}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/86f21d0e31751534cd6584264ecf864a6aa792cf) such that

:   |
    f
    (
    x
    )

    |
    ≤
    ε
    g
    (
    x
    )


     for all 
    x
    ≥

    x

    0
    .
    {\displaystyle |f(x)|\leq \varepsilon g(x)\quad {\text{ for all }}x\geq x\_{0}.}
    ![{\displaystyle |f(x)|\leq \varepsilon g(x)\quad {\text{ for all }}x\geq x_{0}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/68b0e6df26708f200e053ff5fa852452c01a11d6)

Intuitively, this means that 



g
(
x
)
{\displaystyle g(x)}
![{\displaystyle g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c6ca91363022bd5e4dcb17e5ef29f78b8ef00b59) grows much faster than 



f
(
x
)
{\displaystyle f(x)}
![{\displaystyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/202945cce41ecebb6f643f31d119c514bec7a074), or equivalently 



f
(
x
)
{\displaystyle f(x)}
![{\displaystyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/202945cce41ecebb6f643f31d119c514bec7a074) grows much slower than

g
(
x
)
{\displaystyle g(x)}
![{\displaystyle g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c6ca91363022bd5e4dcb17e5ef29f78b8ef00b59).
For example, one has

:   200
    x
    =
    o
    (

    x

    2
    )
    {\displaystyle 200x=o(x^{2})}
    ![{\displaystyle 200x=o(x^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e65ff90bee85d4f03a6840c631c619ff84f30d89) and 



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
    ![{\displaystyle 1/x=o(1),}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a546858e20b4fdffc68734738e18b4d30371c25c)     both as 



    x
    →
    ∞
    .
    {\displaystyle x\to \infty .}
    ![{\displaystyle x\to \infty .}](https://wikimedia.org/api/rest_v1/media/math/render/svg/077f3645400fedfac226358e8dc3ead4949b1fc5)

When one is interested in the behavior of a function for large values of 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4), little-o notation makes a *stronger statement* than the corresponding big-O notation: every function that is little-o of 



g
{\displaystyle g}
![{\displaystyle g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3556280e66fe2c0d0140df20935a6f057381d77) is also big-O of 



g
{\displaystyle g}
![{\displaystyle g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3556280e66fe2c0d0140df20935a6f057381d77) on some interval 



[
a
,
∞
)
{\displaystyle [a,\infty )}
![{\displaystyle [a,\infty )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/898f5c362bfa741500f6f8f3e9948d7808784694), but not every function that is big-O of 



g
{\displaystyle g}
![{\displaystyle g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3556280e66fe2c0d0140df20935a6f057381d77) is little-o of 



g
{\displaystyle g}
![{\displaystyle g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3556280e66fe2c0d0140df20935a6f057381d77). For example, 



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
![{\displaystyle 2x^{2}=O(x^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/120bc341cdd3295546a6da949edc72d4ef04b053) but 



2

x

2
≠
o
(

x

2
)
{\displaystyle 2x^{2}\neq o(x^{2})}
![{\displaystyle 2x^{2}\neq o(x^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec3a0e26e2f0130c79181844f0bcf3be77b531de) for 



x
≥
1
{\displaystyle x\geq 1}
![{\displaystyle x\geq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5ca3ced43f1713577888a8a7ade2d0aaf8354a4b).

Little-o respects a number of arithmetic operations. For example,

:   if 



    c
    {\displaystyle c}
    ![{\displaystyle c}](https://wikimedia.org/api/rest_v1/media/math/render/svg/86a67b81c2de995bd608d5b2df50cd8cd7d92455) is a nonzero constant and 



    f
    =
    o
    (
    g
    )
    {\displaystyle f=o(g)}
    ![{\displaystyle f=o(g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0023489f1bbadf8b2ee4b0257a0a7f6fb600784e) then 



    c
    ⋅
    f
    =
    o
    (
    g
    )
    {\displaystyle c\cdot f=o(g)}
    ![{\displaystyle c\cdot f=o(g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/07bfe7f3dfa6248159f2437946fb3623b7da292a), and
:   if 



    f
    =
    o
    (
    F
    )
    {\displaystyle f=o(F)}
    ![{\displaystyle f=o(F)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a702e6bf0cfdb968289ca99ca0ff50df5eac80f5) and 



    g
    =
    o
    (
    G
    )
    {\displaystyle g=o(G)}
    ![{\displaystyle g=o(G)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ebc932d37954c06dd90db3fdc2d86df728c15b5b) then 



    f
    ⋅
    g
    =
    o
    (
    F
    ⋅
    G
    )
    .
    {\displaystyle f\cdot g=o(F\cdot G).}
    ![{\displaystyle f\cdot g=o(F\cdot G).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9ec05071b3538b7537bceb558e8770698fe3d460)
:   if 



    f
    =
    o
    (
    F
    )
    {\displaystyle f=o(F)}
    ![{\displaystyle f=o(F)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a702e6bf0cfdb968289ca99ca0ff50df5eac80f5) and 



    g
    =
    o
    (
    G
    )
    {\displaystyle g=o(G)}
    ![{\displaystyle g=o(G)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ebc932d37954c06dd90db3fdc2d86df728c15b5b) then 



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
    ![{\displaystyle f+g=o(F+G)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c02cb61d644e4b8eb9c16f55a71de83bf7dd94c)

It also satisfies a [transitivity](https://en.wikipedia.org/wiki/Transitive_relation) relation:

:   if 



    f
    =
    o
    (
    g
    )
    {\displaystyle f=o(g)}
    ![{\displaystyle f=o(g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0023489f1bbadf8b2ee4b0257a0a7f6fb600784e) and 



    g
    =
    o
    (
    h
    )
    {\displaystyle g=o(h)}
    ![{\displaystyle g=o(h)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b30f22123250b0ea58e7d52f498ba1e9820168b4) then 



    f
    =
    o
    (
    h
    )
    .
    {\displaystyle f=o(h).}
    ![{\displaystyle f=o(h).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8a25bacdf64773597665893fa46262103bf632f5)

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
→

x

0
{\displaystyle f(x)=o(g(x))\quad {\text{ as }}x\to x\_{0}}
![{\displaystyle f(x)=o(g(x))\quad {\text{ as }}x\to x_{0}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a75fa88122629e690b84c5a08c4c291b38e57870) if

lim

x
→

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
{\displaystyle \lim \_{x\to x\_{0}}{\frac {f(x)}{g(x)}}=0.}
![{\displaystyle \lim _{x\to x_{0}}{\frac {f(x)}{g(x)}}=0.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1d74a602a2bb7309001340b982c0a4c3299534be)
In other words,

f
(
x
)
=
α
(
x
)
g
(
x
)
{\displaystyle f(x)=\alpha (x)g(x)}
![{\displaystyle f(x)=\alpha (x)g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/435eff988915877ef16e6d5859d65c0b23f64d22) for some 



α
(
x
)
{\displaystyle \alpha (x)}
![{\displaystyle \alpha (x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/43941ef40b4eb751a8daea118d0012ea998f5610) with 




lim

x
→

x

0
α
(
x
)
=
0
{\displaystyle \lim \_{x\to x\_{0}}\alpha (x)=0}
![{\displaystyle \lim _{x\to x_{0}}\alpha (x)=0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e4fbb723334238bded6c3db50a93b3f9e1ec74fc).

This definition is especially useful in the computation of [limits](https://en.wikipedia.org/wiki/Limit_of_a_function) using [Taylor series](https://en.wikipedia.org/wiki/Taylor_series). For example:

sin
⁡
x
=
x
−



x

3

3
!
+
…
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
→
0
{\displaystyle \sin x=x-{\frac {x^{3}}{3!}}+\ldots =x+o(x^{2}){\text{ as }}x\to 0}
![{\displaystyle \sin x=x-{\frac {x^{3}}{3!}}+\ldots =x+o(x^{2}){\text{ as }}x\to 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1977493dedf1349eb0f8ae1c4297cc502cb622ad), so 




lim

x
→
0



sin
⁡
x
x
=

lim

x
→
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
→
0
1
+
o
(
x
)
=
1
{\displaystyle \lim \_{x\to 0}{\frac {\sin x}{x}}=\lim \_{x\to 0}{\frac {x+o(x^{2})}{x}}=\lim \_{x\to 0}1+o(x)=1}
![{\displaystyle \lim _{x\to 0}{\frac {\sin x}{x}}=\lim _{x\to 0}{\frac {x+o(x^{2})}{x}}=\lim _{x\to 0}1+o(x)=1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/89691a59c59d8e39d7de8c04a706e6e3234fdf4a)

### Asymptotic notation

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=20)]

A relation related to little-o is the *asymptotic* notation

∼
{\displaystyle \sim }
![{\displaystyle \sim }](https://wikimedia.org/api/rest_v1/media/math/render/svg/afcc42adfcfdc24d5c4c474869e5d8eaa78d1173).
For real valued functions 



f
,
g
{\displaystyle f,g}
![{\displaystyle f,g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/25b6ab1762925585cd7605809caa8b1b5284177b), the expression 



f
(
x
)
∼
g
(
x
)


 as 
x
→
∞
{\displaystyle f(x)\sim g(x)\quad {\text{ as }}x\to \infty }
![{\displaystyle f(x)\sim g(x)\quad {\text{ as }}x\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/afa5fda3dd5147ff2426a8f6c864829bcf8109ee)
means

lim

x
→
∞



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
{\displaystyle \lim \_{x\to \infty }{\frac {f(x)}{g(x)}}=1.}
![{\displaystyle \lim _{x\to \infty }{\frac {f(x)}{g(x)}}=1.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5cb9bd7842f604400245e3e1f8ae62d1fbd5ad20)
One can connect this to little-o by observing that

f
(
x
)
∼
g
(
x
)
{\displaystyle f(x)\sim g(x)}
![{\displaystyle f(x)\sim g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d24c18a1b0af53b0bad471dd18d474165c481aea) is also equivalent to

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
![{\displaystyle f(x)=(1+o(1))g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9098abf878a76daf862e7ad7acbfbbe32d3e71f1). Here 



o
(
1
)
{\displaystyle o(1)}
![{\displaystyle o(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d77278222a965f6f092279969a224935d9917916) refers to a function tending to zero as 



x
→
∞
{\displaystyle x\to \infty }
![{\displaystyle x\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/eda2caf97ec29f30d5f0c0cd7135393361efc020). One reads this as
"



f
(
x
)
{\displaystyle f(x)}
![{\displaystyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/202945cce41ecebb6f643f31d119c514bec7a074) is *asymptotic to* 



g
(
x
)
{\displaystyle g(x)}
![{\displaystyle g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c6ca91363022bd5e4dcb17e5ef29f78b8ef00b59)". For nonzero functions on the same (finite or infinite) domain, 



∼
{\displaystyle \sim }
![{\displaystyle \sim }](https://wikimedia.org/api/rest_v1/media/math/render/svg/afcc42adfcfdc24d5c4c474869e5d8eaa78d1173) forms an
[equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation).

One of the most famous theorems using the notation

∼
{\displaystyle \sim }
![{\displaystyle \sim }](https://wikimedia.org/api/rest_v1/media/math/render/svg/afcc42adfcfdc24d5c4c474869e5d8eaa78d1173) is [Stirling's formula](https://en.wikipedia.org/wiki/Stirling%27s_formula)




n
!
∼


(


n
e



)

n


2
π
n


 as 
n
→
∞
.
{\displaystyle n!\sim {\bigg (}{\frac {n}{e}}{\bigg )}^{n}{\sqrt {2\pi n}}\quad {\text{ as }}n\to \infty .}
![{\displaystyle n!\sim {\bigg (}{\frac {n}{e}}{\bigg )}^{n}{\sqrt {2\pi n}}\quad {\text{ as }}n\to \infty .}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cd44bb2b1acd9a6a746adbbbeca72a172b770d00)
In number theory, the famous [prime number theorem](https://en.wikipedia.org/wiki/Prime_number_theorem) states that

π
(
x
)
∼


x

log
⁡
x


 as 
x
→
∞
,
{\displaystyle \pi (x)\sim {\frac {x}{\log x}}\quad {\text{ as }}x\to \infty ,}
![{\displaystyle \pi (x)\sim {\frac {x}{\log x}}\quad {\text{ as }}x\to \infty ,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f54d2f134eb8631097cc1f1ae0aba3588a1d4087)
where 



π
(
x
)
{\displaystyle \pi (x)}
![{\displaystyle \pi (x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5a62d9bf7b2ba03b30a95e7059362cc4b3865123) is the number of primes which
are at most 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) and 



log
{\displaystyle \log }
![{\displaystyle \log }](https://wikimedia.org/api/rest_v1/media/math/render/svg/79e4debd0ab1c6ce342d0172a7643733305c37bc) is the
[natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm) of 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4).

As with little-o, there is a version with finite limits (two-sided or [one-sided](https://en.wikipedia.org/wiki/One-sided_limit)) as well, for example

sin
⁡
x
∼
x


 as 
x
→
0.
{\displaystyle \sin x\sim x\quad {\text{ as }}x\to 0.}
![{\displaystyle \sin x\sim x\quad {\text{ as }}x\to 0.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/daba9044cd071f0f82a2c0b37f8fbc225fabe99d)

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
→
∞
,

 for any positive constants 
a
,
b
,
{\displaystyle x^{a}=o\_{a,b}(e^{bx})\quad {\text{ as }}x\to \infty ,{\text{ for any positive constants }}a,b,}
![{\displaystyle x^{a}=o_{a,b}(e^{bx})\quad {\text{ as }}x\to \infty ,{\text{ for any positive constants }}a,b,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c5f0bae2ecabaffb9b8f29456bbacad4b1e303e1)




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

⟺


e

f
(
x
)
∼

e

g
(
x
)

(
x
→
∞
)
.
{\displaystyle f(x)=g(x)+o(1)\quad \Longleftrightarrow \quad e^{f(x)}\sim e^{g(x)}\quad (x\to \infty ).}
![{\displaystyle f(x)=g(x)+o(1)\quad \Longleftrightarrow \quad e^{f(x)}\sim e^{g(x)}\quad (x\to \infty ).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dd2ef25fdbfeb204b00328513d4bc442de429c39)





∑

n
=
1

∞


1

n

s
∼


1

s
−
1

(
s
→

1

+
)
.
{\displaystyle \sum \_{n=1}^{\infty }{\frac {1}{n^{s}}}\sim {\frac {1}{s-1}}\quad (s\to 1^{+}).}
![{\displaystyle \sum _{n=1}^{\infty }{\frac {1}{n^{s}}}\sim {\frac {1}{s-1}}\quad (s\to 1^{+}).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/eb97efcf48390e8fbf0e3b99ff9c80741ee0467a)
The last asymptotic is a basic property of the
[Riemann zeta function](https://en.wikipedia.org/wiki/Riemann_zeta_function).

For eventually positive, real valued functions 



f
,
g
,
{\displaystyle f,g,}
![{\displaystyle f,g,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/34aa188781cb342af646cad75a5a87c85a004556) the notation

f
(
x
)
=
ω
(
g
(
x
)
)


 as 
x
→
∞
{\displaystyle f(x)=\omega (g(x))\quad {\text{ as }}x\to \infty }
![{\displaystyle f(x)=\omega (g(x))\quad {\text{ as }}x\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bea038ad2e2813baf1172be58c63cf206987f82d)
means

lim

x
→
∞



f
(
x
)

g
(
x
)
=
∞
.
{\displaystyle \lim \_{x\to \infty }{\frac {f(x)}{g(x)}}=\infty .}
![{\displaystyle \lim _{x\to \infty }{\frac {f(x)}{g(x)}}=\infty .}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d02432dff79f70f68df025f4632a831eeb707eb4)
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
![{\displaystyle g(x)=o(f(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/026bfa3713124d054d162f646f0fe324de8a2720).
Roughly speaking, this means that 



f
(
x
)
{\displaystyle f(x)}
![{\displaystyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/202945cce41ecebb6f643f31d119c514bec7a074)
grows much faster than does 



g
(
x
)
{\displaystyle g(x)}
![{\displaystyle g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c6ca91363022bd5e4dcb17e5ef29f78b8ef00b59).

### The Hardy–Littlewood Ω notation

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=22)]

In 1914 [G.H. Hardy](https://en.wikipedia.org/wiki/Godfrey_Harold_Hardy) and [J.E. Littlewood](https://en.wikipedia.org/wiki/John_Edensor_Littlewood) introduced the new symbol 



 
Ω
,
{\displaystyle \ \Omega ,}
![{\displaystyle \ \Omega ,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/606500d3b241a345b364f1a138861294c72eddd8) which is defined as follows:

:   f
    (
    x
    )
    =
    Ω
    (
    g
    (
    x
    )
    )

    {\displaystyle f(x)=\Omega (g(x))\quad }
    ![{\displaystyle f(x)=\Omega (g(x))\quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bfc80b060f5d39dd6d6855afa3de7ee2c782b9ce) as 




    x
    →
    ∞

    {\displaystyle \quad x\to \infty \quad }
    ![{\displaystyle \quad x\to \infty \quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bef653404ab1b7d3bdd8c266c8efc83dd9ad009c) if 





    lim sup

    x
    →
    ∞
     

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
    {\displaystyle \quad \limsup \_{x\to \infty }\ \left|{\frac {\ f(x)\ }{g(x)}}\right|>0~.}
    ![{\displaystyle \quad \limsup _{x\to \infty }\ \left|{\frac {\ f(x)\ }{g(x)}}\right|>0~.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1389f773c5e34441a282bcd9ebbbc0f8d1cd4237)

Thus 



 
f
(
x
)
=
Ω
(
g
(
x
)
)
 
{\displaystyle ~f(x)=\Omega (g(x))~}
![{\displaystyle ~f(x)=\Omega (g(x))~}](https://wikimedia.org/api/rest_v1/media/math/render/svg/aea82c6a712cba54b9114b7cf837526fd9750429) is the negation of 



 
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
![{\displaystyle ~f(x)=o(g(x))~.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d63965da82ea1a21efa5fa72b3aef64ec33dd372)

In 1916 the same authors introduced the two new symbols 



 

Ω

R
 
{\displaystyle \ \Omega \_{R}\ }
![{\displaystyle \ \Omega _{R}\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/1108f25bb73cbee35a299e688e3b5a85b57b261d) and 



 

Ω

L
 
,
{\displaystyle \ \Omega \_{L}\ ,}
![{\displaystyle \ \Omega _{L}\ ,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4ec9180b2c2ef15696ca5b770dd246ffa3a67380) defined as:

:   f
    (
    x
    )
    =

    Ω

    R
    (
    g
    (
    x
    )
    )

    {\displaystyle f(x)=\Omega \_{R}(g(x))\quad }
    ![{\displaystyle f(x)=\Omega _{R}(g(x))\quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a4f1e2707234c33a3a8c0b8d8d9822be87f031b8) as 




    x
    →
    ∞

    {\displaystyle \quad x\to \infty \quad }
    ![{\displaystyle \quad x\to \infty \quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bef653404ab1b7d3bdd8c266c8efc83dd9ad009c) if 





    lim sup

    x
    →
    ∞
     



     
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
    {\displaystyle \quad \limsup \_{x\to \infty }\ {\frac {\ f(x)\ }{g(x)}}>0\ ;}
    ![{\displaystyle \quad \limsup _{x\to \infty }\ {\frac {\ f(x)\ }{g(x)}}>0\ ;}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d794effaab534866d2da1f70098493b98e0c044a)

:   f
    (
    x
    )
    =

    Ω

    L
    (
    g
    (
    x
    )
    )

    {\displaystyle f(x)=\Omega \_{L}(g(x))\quad }
    ![{\displaystyle f(x)=\Omega _{L}(g(x))\quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/0357628551b9f86044a5ad0c8ea63eec6368c8bf) as 




    x
    →
    ∞

    {\displaystyle \quad x\to \infty \quad }
    ![{\displaystyle \quad x\to \infty \quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bef653404ab1b7d3bdd8c266c8efc83dd9ad009c) if 




     

    lim inf

    x
    →
    ∞
     



     
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
    {\displaystyle \quad ~\liminf \_{x\to \infty }\ {\frac {\ f(x)\ }{g(x)}}<0~.}
    ![{\displaystyle \quad ~\liminf _{x\to \infty }\ {\frac {\ f(x)\ }{g(x)}}<0~.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3c1e4c105c6213ddeb9ef8c068125840a6292d75)

These symbols were used by [E. Landau](https://en.wikipedia.org/wiki/Edmund_Landau), with the same meanings, in 1924. Authors that followed Landau, however, use a different notation for the same definitions: The symbol 



 

Ω

R
 
{\displaystyle \ \Omega \_{R}\ }
![{\displaystyle \ \Omega _{R}\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/1108f25bb73cbee35a299e688e3b5a85b57b261d) has been replaced by the current notation 



 

Ω

+
 
{\displaystyle \ \Omega \_{+}\ }
![{\displaystyle \ \Omega _{+}\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/ed6eda01147bbaa4c155358a4baf6ab7f0672903) with the same definition, and 



 

Ω

L
 
{\displaystyle \ \Omega \_{L}\ }
![{\displaystyle \ \Omega _{L}\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/ee9c2f1022ac10a744c73930ec1998ad0d7dfb68) became 



 

Ω

−
 
.
{\displaystyle \ \Omega \_{-}~.}
![{\displaystyle \ \Omega _{-}~.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/aac8b139956069742925d74e0d555f44c0fcb32a)

These three symbols 



 
Ω
 
,

Ω

+
 
,

Ω

−
 
,
{\displaystyle \ \Omega \ ,\Omega \_{+}\ ,\Omega \_{-}\ ,}
![{\displaystyle \ \Omega \ ,\Omega _{+}\ ,\Omega _{-}\ ,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4328f8e296d03a3a1ea9e5357d3c80a56429ab60) as well as 



 
f
(
x
)
=

Ω

±
(
g
(
x
)
)
 
{\displaystyle \ f(x)=\Omega \_{\pm }(g(x))\ }
![{\displaystyle \ f(x)=\Omega _{\pm }(g(x))\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/2ee0bdb0014cd2f61973a9bb0e307b2b879a0100) (meaning that 



 
f
(
x
)
=

Ω

+
(
g
(
x
)
)
 
{\displaystyle \ f(x)=\Omega \_{+}(g(x))\ }
![{\displaystyle \ f(x)=\Omega _{+}(g(x))\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/e49a1ab0dacc21168e1a99a724bbe52dc90f5004) and 



 
f
(
x
)
=

Ω

−
(
g
(
x
)
)
 
{\displaystyle \ f(x)=\Omega \_{-}(g(x))\ }
![{\displaystyle \ f(x)=\Omega _{-}(g(x))\ }](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a43fe4178b80f309ff444371f5249d058363892) are both satisfied), are now currently used in [analytic number theory](https://en.wikipedia.org/wiki/Analytic_number_theory).

We have

:   sin
    ⁡
    x
    =
    Ω
    (
    1
    )

    {\displaystyle \sin x=\Omega (1)\quad }
    ![{\displaystyle \sin x=\Omega (1)\quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/7e844e31a8b6f2be13b24d7327ce25f26825f510) as 




    x
    →
    ∞
     
    ,
    {\displaystyle \quad x\to \infty \ ,}
    ![{\displaystyle \quad x\to \infty \ ,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/896ee8b534f618a0d1fd725a44e2a6db307cb48b)

and more precisely

:   sin
    ⁡
    x
    =

    Ω

    ±
    (
    1
    )

    {\displaystyle \sin x=\Omega \_{\pm }(1)\quad }
    ![{\displaystyle \sin x=\Omega _{\pm }(1)\quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a513df63b2ec1f4c15d81fbcf22b5e8a999eb63) as 




    x
    →
    ∞
    ,
     
    {\displaystyle \quad x\to \infty ,~}
    ![{\displaystyle \quad x\to \infty ,~}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cff8f3230eedc010bd6891f17df57cbb465d1510)

where 




Ω

±
{\displaystyle \Omega \_{\pm }}
![{\displaystyle \Omega _{\pm }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4d7392a89201d30e6bb4ae05f84c2f72a51d0c0b) means that the left side is both 




Ω

+
(
1
)
{\displaystyle \Omega \_{+}(1)}
![{\displaystyle \Omega _{+}(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/092a20cfe57d250024f6ec46fe629eec25a1163c) and 




Ω

−
(
1
)
{\displaystyle \Omega \_{-}(1)}
![{\displaystyle \Omega _{-}(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9234a0984509a891ce26fe06e40f96d53d9a3480),

We have

:   1
    +
    sin
    ⁡
    x
    =
    Ω
    (
    1
    )

    {\displaystyle 1+\sin x=\Omega (1)\quad }
    ![{\displaystyle 1+\sin x=\Omega (1)\quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c5c825cc194b38f1fdd54b8d274628e4909c295e) as 




    x
    →
    ∞
     
    ,
    {\displaystyle \quad x\to \infty \ ,}
    ![{\displaystyle \quad x\to \infty \ ,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/896ee8b534f618a0d1fd725a44e2a6db307cb48b)

and more precisely

:   1
    +
    sin
    ⁡
    x
    =

    Ω

    +
    (
    1
    )

    {\displaystyle 1+\sin x=\Omega \_{+}(1)\quad }
    ![{\displaystyle 1+\sin x=\Omega _{+}(1)\quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a662473108818abbcef72fcd9e562b5a634f4eca) as 




    x
    →
    ∞
     
    ;
    {\displaystyle \quad x\to \infty \ ;}
    ![{\displaystyle \quad x\to \infty \ ;}](https://wikimedia.org/api/rest_v1/media/math/render/svg/03da1882cd535de5b695390951b4b96912de9a53)

however

:   1
    +
    sin
    ⁡
    x
    ≠

    Ω

    −
    (
    1
    )

    {\displaystyle 1+\sin x\neq \Omega \_{-}(1)\quad }
    ![{\displaystyle 1+\sin x\neq \Omega _{-}(1)\quad }](https://wikimedia.org/api/rest_v1/media/math/render/svg/f224454dd133f145d3fd6d2618decc113105ca66) as 




    x
    →
    ∞
     
    .
    {\displaystyle \quad x\to \infty ~.}
    ![{\displaystyle \quad x\to \infty ~.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4284c8e3e549f79df084395b2199b0a4f1f20f3f)

### Family of Bachmann–Landau notations

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=24)]

For understanding the formal definitions, consult the
[list of logic symbols](https://en.wikipedia.org/wiki/List_of_logic_symbols) used in mathematics.

| Notation | Name | Description | Formal definition | Compact definition |
| --- | --- | --- | --- | --- |
| f ( n ) = o ( g ( n ) ) {\displaystyle f(n)=o(g(n))} | Small O; Small Oh; Little O; Little Oh | f is dominated by g asymptotically (for any constant factor k {\displaystyle k} ) | ∀ k > 0 ∃ n 0 ∀ n > n 0 : \| f ( n ) \| ≤ k g ( n ) {\displaystyle \forall k>0\,\exists n_{0}\,\forall n>n_{0}\colon \|f(n)\|\leq k\,g(n)} | lim n → ∞ f ( n ) g ( n ) = 0 {\displaystyle \lim _{n\to \infty }{\frac {f(n)}{g(n)}}=0} |
| f ( n ) = O ( g ( n ) ) {\displaystyle f(n)=O(g(n))} or f ( n ) ≪ g ( n ) {\displaystyle f(n)\ll g(n)} (Vinogradov's notation) | Big O; Big Oh; Big Omicron | \| f \| {\displaystyle \|f\|} is bounded above by g (up to constant factor k {\displaystyle k} ) | ∃ k > 0 ∀ n ∈ D : \| f ( n ) \| ≤ k g ( n ) {\displaystyle \exists k>0\,\forall n\in D\colon \|f(n)\|\leq k\,g(n)} | sup n ∈ D \| f ( n ) \| g ( n ) < ∞ {\displaystyle \sup _{n\in D}{\frac {\left\|f(n)\right\|}{g(n)}}<\infty } |
| f ( n ) ≍ g ( n ) {\displaystyle f(n)\asymp g(n)} (Hardy's notation) or f ( n ) = Θ ( g ( n ) ) {\displaystyle f(n)=\Theta (g(n))} (Knuth notation) | Of the same order as (Hardy); Big Theta (Knuth) | f is bounded by g both above (with constant factor k 2 {\displaystyle k_{2}} ) and below (with constant factor k 1 {\displaystyle k_{1}} ) | ∃ k 1 > 0 ∃ k 2 > 0 ∀ n ∈ D : {\displaystyle \exists k_{1}>0\,\exists k_{2}>0\,\forall n\in D\colon } k 1 g ( n ) ≤ f ( n ) ≤ k 2 g ( n ) {\displaystyle k_{1}\,g(n)\leq f(n)\leq k_{2}\,g(n)} | f ( n ) = O ( g ( n ) ) {\displaystyle f(n)=O(g(n))} and g ( n ) = O ( f ( n ) ) {\displaystyle g(n)=O(f(n))} |
| f ( n ) ∼ g ( n ) {\displaystyle f(n)\sim g(n)} as n → a {\displaystyle n\to a} , where a {\displaystyle a} is finite, ∞ {\displaystyle \infty } or − ∞ {\displaystyle -\infty } | Asymptotic equivalence | f is equal to g asymptotically | ∀ ε > 0 ∃ n 0 ∀ n > n 0 : \| f ( n ) g ( n ) − 1 \| < ε {\displaystyle \forall \varepsilon >0\,\exists n_{0}\,\forall n>n_{0}\colon \left\|{\frac {f(n)}{g(n)}}-1\right\|<\varepsilon } (in the case a = ∞ {\displaystyle a=\infty } ) | lim n → a f ( n ) g ( n ) = 1 {\displaystyle \lim _{n\to a}{\frac {f(n)}{g(n)}}=1} |
| f ( n ) = Ω ( g ( n ) ) {\displaystyle f(n)=\Omega (g(n))} (Knuth's notation), or f ( n ) ≫ g ( n ) {\displaystyle f(n)\gg g(n)} (Vinogradov's notation) | Big Omega in complexity theory (Knuth) | f is bounded below by g , up to a constant factor | ∃ k > 0 ∀ n ∈ D : f ( n ) ≥ k g ( n ) {\displaystyle \exists k>0\,\forall n\in D\colon f(n)\geq k\,g(n)} | inf n ∈ D f ( n ) g ( n ) > 0 {\displaystyle \inf _{n\in D}{\frac {f(n)}{g(n)}}>0} |
| f ( n ) = ω ( g ( n ) ) {\displaystyle f(n)=\omega (g(n))} as n → a {\displaystyle n\to a} , where a {\displaystyle a} can be finite, ∞ {\displaystyle \infty } or − ∞ {\displaystyle -\infty } | Small Omega; Little Omega | f dominates g asymptotically | ∀ k > 0 ∃ n 0 ∀ n > n 0 : f ( n ) > k g ( n ) {\displaystyle \forall k>0\,\exists n_{0}\,\forall n>n_{0}\colon f(n)>k\,g(n)} (for a = ∞ {\displaystyle a=\infty } ) | lim n → a f ( n ) g ( n ) = ∞ {\displaystyle \lim _{n\to a}{\frac {f(n)}{g(n)}}=\infty } |
| f ( n ) = Ω ( g ( n ) ) {\displaystyle f(n)=\Omega (g(n))} | Big Omega in number theory (Hardy–Littlewood) | \| f \| {\displaystyle \|f\|} is not dominated by g asymptotically | ∃ k > 0 ∀ n 0 ∃ n > n 0 : \| f ( n ) \| ≥ k g ( n ) {\displaystyle \exists k>0\,\forall n_{0}\,\exists n>n_{0}\colon \|f(n)\|\geq k\,g(n)} | lim sup n → ∞ \| f ( n ) \| g ( n ) > 0 {\displaystyle \limsup _{n\to \infty }{\frac {\left\|f(n)\right\|}{g(n)}}>0} |

The limit definitions assume 



g
(
n
)
>
0
{\displaystyle g(n)>0}
![{\displaystyle g(n)>0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f58b017ed2f12e925640328d716644bced11d4) for

n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) in a neighborhood of the limit; when the
limit is 



∞
{\displaystyle \infty }
![{\displaystyle \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c26c105004f30c27aa7c2a9c601550a4183b1f21), this means that 



g
(
n
)
>
0
{\displaystyle g(n)>0}
![{\displaystyle g(n)>0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f58b017ed2f12e925640328d716644bced11d4) for sufficiently large 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b).

Computer science and combinatorics use the big 



O
{\displaystyle O}
![{\displaystyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9d70e1d0d87e2ef1092ea1ffe2923d9933ff18fc), big Theta 



Θ
{\displaystyle \Theta }
![{\displaystyle \Theta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bc927b19f46d005b4720db7a0f96cd5b6f1a0d9b), little 



o
{\displaystyle o}
![{\displaystyle o}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c1031f61947aa3d1cf3a70ec3e4904df2c3675d), little omega 



ω
{\displaystyle \omega }
![{\displaystyle \omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/48eff443f9de7a985bb94ca3bde20813ea737be8) and Knuth's big Omega 



Ω
{\displaystyle \Omega }
![{\displaystyle \Omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24b0d5ca6f381068d756f6337c08e0af9d1eeb6f) notations.
Analytic number theory often uses the big 



O
{\displaystyle O}
![{\displaystyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9d70e1d0d87e2ef1092ea1ffe2923d9933ff18fc), small 



o
{\displaystyle o}
![{\displaystyle o}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c1031f61947aa3d1cf3a70ec3e4904df2c3675d), Hardy's 



≍
{\displaystyle \asymp }
![{\displaystyle \asymp }](https://wikimedia.org/api/rest_v1/media/math/render/svg/d57855824799fd82a250ecfe10596a751bb1b091),
Hardy–Littlewood's big Omega 



Ω
{\displaystyle \Omega }
![{\displaystyle \Omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24b0d5ca6f381068d756f6337c08e0af9d1eeb6f) (with or without the +, − or ± subscripts), Vinogradov's 



≪
{\displaystyle \ll }
![{\displaystyle \ll }](https://wikimedia.org/api/rest_v1/media/math/render/svg/10563f31a4178c71bef006ea5c601e908f984136) and 



≫
{\displaystyle \gg }
![{\displaystyle \gg }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bb8cf5bdde51831eb31118c36a0499d41a4b643e) notations and 



∼
{\displaystyle \sim }
![{\displaystyle \sim }](https://wikimedia.org/api/rest_v1/media/math/render/svg/afcc42adfcfdc24d5c4c474869e5d8eaa78d1173) notations.
The small omega 



ω
{\displaystyle \omega }
![{\displaystyle \omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/48eff443f9de7a985bb94ca3bde20813ea737be8) notation is not used as often in analysis or in number theory.

### Quality of approximations using different notation

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=25)]

Informally, especially in computer science, the big 



O
{\displaystyle O}
![{\displaystyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9d70e1d0d87e2ef1092ea1ffe2923d9933ff18fc) notation often can be used somewhat differently to describe an asymptotic [tight](https://en.wikipedia.org/wiki/Upper_and_lower_bounds#Tight_bounds) bound where using big Theta 



Θ
{\displaystyle \Theta }
![{\displaystyle \Theta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bc927b19f46d005b4720db7a0f96cd5b6f1a0d9b) notation might be more factually appropriate in a given context
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
![{\displaystyle T(n)=73n^{3}+22n^{2}+58}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dcc6146827dec0e8fb40d095c19013b4a7902402), all of the following are generally acceptable, but tighter bounds (such as numbers 2,3 and 4 below) are usually strongly preferred over looser bounds (such as number 1 below).

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
   ![{\displaystyle T(n)=O(n^{100})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b6680dbcab40c915778d7d078f0408727e990266)
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
   ![{\displaystyle T(n)=O(n^{3})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c7dfc425b54a70f9f229a7a11674b1d27f50623f)
3. T
   (
   n
   )
   =
   Θ
   (

   n

   3
   )
   {\displaystyle T(n)=\Theta (n^{3})}
   ![{\displaystyle T(n)=\Theta (n^{3})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/677ce030ce98ebd934026054d4792dcbe931e226)
4. T
   (
   n
   )
   ∼
   73

   n

   3
   {\displaystyle T(n)\sim 73n^{3}}
   ![{\displaystyle T(n)\sim 73n^{3}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/16d6ceb681199d72637b0b953c9817adf5ecbd79) as 



   n
   →
   ∞
   {\displaystyle n\to \infty }
   ![{\displaystyle n\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a0d55d9b32f6fa8fab6a84ea444a6b5a24bb45e1).

While all three statements are true, progressively more information is contained in each. In some fields, however, the big O notation (number 2 in the lists above) would be used more commonly than the big Theta notation (items numbered 3 in the lists above). For example, if 



T
(
n
)
{\displaystyle T(n)}
![{\displaystyle T(n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0be5a46684e1279c27414b285fa995f30407d002) represents the running time of a newly developed algorithm for input size 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b), the inventors and users of the algorithm might be more inclined to put an upper bound on how long it will take to run without making an explicit statement about the lower bound or asymptotic behavior.

### Extensions to the Bachmann–Landau notations

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=26)]

Another notation sometimes used in computer science is 






O
~
{\displaystyle {\tilde {O}}}
![{\displaystyle {\tilde {O}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/838fcae65623915485e4245a38d787c4a99f9be6) (read *soft-O*), which hides polylogarithmic factors. There are two definitions in use: some authors use 



f
(
n
)
=



O
~
(
g
(
n
)
)
{\displaystyle f(n)={\tilde {O}}(g(n))}
![{\displaystyle f(n)={\tilde {O}}(g(n))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e4aa003426b0d274d794258515fe00e798c5905c) as shorthand for 



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
⁡
n
)
{\displaystyle f(n)=O(g(n)\log ^{k}n)}
![{\displaystyle f(n)=O(g(n)\log ^{k}n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dbf24ee0d98edaca85ec62cc02b5ef094e4f2947) for some 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40)[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*], while others use it as shorthand for 



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
⁡
g
(
n
)
)
{\displaystyle f(n)=O(g(n)\log ^{k}g(n))}
![{\displaystyle f(n)=O(g(n)\log ^{k}g(n))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fcfa8bc3db66007eee8286b1ffaaffa279043fe)
.
When 



g
(
n
)
{\displaystyle g(n)}
![{\displaystyle g(n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d4ad18070e494503403daf39398e711c1378348e) is polynomial in 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b), there is no difference; however, the latter definition allows one to say, e.g. that 



n

2

n
=



O
~
(

2

n
)
{\displaystyle n2^{n}={\tilde {O}}(2^{n})}
![{\displaystyle n2^{n}={\tilde {O}}(2^{n})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/98ba0a1a6539cb13a71f780c881e36968c6a9d60) while the former definition allows for 




log

k
⁡
n
=



O
~
(
1
)
{\displaystyle \log ^{k}n={\tilde {O}}(1)}
![{\displaystyle \log ^{k}n={\tilde {O}}(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4e914ff8543f85d1e7f2f0aff80fab95847cd4a7) for any constant 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40). Some authors write *O*\* for the same purpose as the latter definition. Essentially, it is less precise version of the big *O* notation, ignoring [logarithmic factors](https://en.wikipedia.org/wiki/Polylogarithmic_function) in the [growth-rate](https://en.wikipedia.org/wiki/Asymptotic_analysis) of the function. Since 




log

k
⁡
n
=
o
(

n

ε
)
{\displaystyle \log ^{k}n=o(n^{\varepsilon })}
![{\displaystyle \log ^{k}n=o(n^{\varepsilon })}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9b935966230a9b7c981d707152ab51d5607ff75c)
for any constant 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) and any

ε
>
0
{\displaystyle \varepsilon >0}
![{\displaystyle \varepsilon >0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e04ec3670b50384a3ce48aca42e7cc5131a06b12), logarithmic factors are far less significant than powers of 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) and even more insignificant compared with exponentials.

Also, the [*L* notation](https://en.wikipedia.org/wiki/L-notation), defined as

:   L

    n
    [
    α
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
    ⁡
    n

    )

    α
    (
    ln
    ⁡
    ln
    ⁡
    n

    )

    1
    −
    α
    ,
    {\displaystyle L\_{n}[\alpha ,c]=e^{(c+o(1))(\ln n)^{\alpha }(\ln \ln n)^{1-\alpha }},}
    ![{\displaystyle L_{n}[\alpha ,c]=e^{(c+o(1))(\ln n)^{\alpha }(\ln \ln n)^{1-\alpha }},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/59b5d9f7b7c3e8763737cb136642c142bd27da00)

is convenient for functions that are between [polynomial](https://en.wikipedia.org/wiki/Time_complexity#Polynomial_time) and [exponential](https://en.wikipedia.org/wiki/Time_complexity#Exponential_time) in terms of 



log
⁡
n
{\displaystyle \log n}
![{\displaystyle \log n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/317ab5292da7c7935aec01a570461fe0613b21d5).

The generalization to functions taking values in any [normed vector space](https://en.wikipedia.org/wiki/Normed_vector_space) is straightforward (replacing absolute values by norms), where 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) and 



g
{\displaystyle g}
![{\displaystyle g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3556280e66fe2c0d0140df20935a6f057381d77) need not take their values in the same space. A generalization to functions 



g
{\displaystyle g}
![{\displaystyle g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3556280e66fe2c0d0140df20935a6f057381d77) taking values in any [topological group](https://en.wikipedia.org/wiki/Topological_group) is also possible[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*].
The "limiting process" 



x
→

x

0
{\displaystyle x\to x\_{0}}
![{\displaystyle x\to x_{0}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9ffbf95eb25f9fae501b6beaf31d0728fba4c451) can also be generalized by introducing an arbitrary [filter base](https://en.wikipedia.org/wiki/Filter_base), i.e. to directed [nets](https://en.wikipedia.org/wiki/Net_(mathematics)) 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) and 



g
{\displaystyle g}
![{\displaystyle g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3556280e66fe2c0d0140df20935a6f057381d77). The 



o
{\displaystyle o}
![{\displaystyle o}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c1031f61947aa3d1cf3a70ec3e4904df2c3675d) notation can be used to define [derivatives](https://en.wikipedia.org/wiki/Derivative) and [differentiability](https://en.wikipedia.org/wiki/Differentiability) in quite general spaces, and also (asymptotical) equivalence of functions,

:   f
    ∼
    g

    ⟺

    (
    f
    −
    g
    )
    ∈
    o
    (
    g
    )
    {\displaystyle f\sim g\iff (f-g)\in o(g)}
    ![{\displaystyle f\sim g\iff (f-g)\in o(g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/288861b9af5eb92d645701a42b4887578d6aeed3)

which is an [equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation) and a more restrictive notion than the relationship "



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) is 



Θ
(
g
)
{\displaystyle \Theta (g)}
![{\displaystyle \Theta (g)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fa45fa068ea17dc7e3dc19d7f95dea6f86240da1)" from above. (It reduces to 



lim
f

/
g
=
1
{\displaystyle \lim f/g=1}
![{\displaystyle \lim f/g=1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d1f7b1bcaf8661f8353972366297a06bdd511672) if 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) and 



g
{\displaystyle g}
![{\displaystyle g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3556280e66fe2c0d0140df20935a6f057381d77) are positive real valued functions.) For example, 



2
x
=
Θ
(
x
)
{\displaystyle 2x=\Theta (x)}
![{\displaystyle 2x=\Theta (x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/79a5bb2697047fd84bfbe75306a85a9457f2f388) is, but

2
x
−
x
≠
o
(
x
)
{\displaystyle 2x-x\neq o(x)}
![{\displaystyle 2x-x\neq o(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/17142ef7ba64326a58e423f792a2c8e8060cb4c7).

We sketch the history of the Bois-Reymond, Bachmann–Landau, Hardy, Vinogradov and Knuth notations.

In 1870, Paul du Bois-Reymond
defined 



f
(
x
)
≻
ϕ
(
x
)
{\displaystyle f(x)\succ \phi (x)}
![{\displaystyle f(x)\succ \phi (x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f92c78a3ac701f199d5f58cde91e5cf57bfe34c7), 



f
(
x
)
∼
ϕ
(
x
)
{\displaystyle f(x)\sim \phi (x)}
![{\displaystyle f(x)\sim \phi (x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ed0900710926bc8c335003af0bbae4c0090b2c45) and 



f
(
x
)
≺
ϕ
(
x
)
{\displaystyle f(x)\prec \phi (x)}
![{\displaystyle f(x)\prec \phi (x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f442c253149dab34a91b03553b8d07a9815c8298)
to mean, respectively,

lim

x
→
∞



f
(
x
)

ϕ
(
x
)
=
∞
,


lim

x
→
∞



f
(
x
)

ϕ
(
x
)
>
0
,


lim

x
→
∞



f
(
x
)

ϕ
(
x
)
=
0.
{\displaystyle \lim \_{x\to \infty }{\frac {f(x)}{\phi (x)}}=\infty ,\quad \lim \_{x\to \infty }{\frac {f(x)}{\phi (x)}}>0,\quad \lim \_{x\to \infty }{\frac {f(x)}{\phi (x)}}=0.}
![{\displaystyle \lim _{x\to \infty }{\frac {f(x)}{\phi (x)}}=\infty ,\quad \lim _{x\to \infty }{\frac {f(x)}{\phi (x)}}>0,\quad \lim _{x\to \infty }{\frac {f(x)}{\phi (x)}}=0.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5f6f68658d9a88ebc2e04bf9c886a4f2a86aa7f4)
These were not widely adopted and are not used today.
The first and third enjoy a symmetry: 



f
(
x
)
≺
ϕ
(
x
)
{\displaystyle f(x)\prec \phi (x)}
![{\displaystyle f(x)\prec \phi (x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f442c253149dab34a91b03553b8d07a9815c8298) means the same as 



ϕ
(
x
)
≻
f
(
x
)
{\displaystyle \phi (x)\succ f(x)}
![{\displaystyle \phi (x)\succ f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdd54637495194eb1e133d2aacb9c4efab72dcd).
Later, Landau adopted 



∼
{\displaystyle \sim }
![{\displaystyle \sim }](https://wikimedia.org/api/rest_v1/media/math/render/svg/afcc42adfcfdc24d5c4c474869e5d8eaa78d1173) in the narrower
sense that the limit of 



f
(
x
)

/
ϕ
(
x
)
{\displaystyle f(x)/\phi (x)}
![{\displaystyle f(x)/\phi (x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9ca641b343b1c7d2cf64f7d229796a75d5666199) equals 1. None of these notations is in use today.

The symbol O was first introduced by number theorist [Paul Bachmann](https://en.wikipedia.org/wiki/Paul_Bachmann) in 1894, in the second volume of his book *Analytische Zahlentheorie* ("[analytic number theory](https://en.wikipedia.org/wiki/Analytic_number_theory)"). The number theorist [Edmund Landau](https://en.wikipedia.org/wiki/Edmund_Landau) adopted it, and was thus inspired to introduce in 1909 the notation o; hence both are now called Landau symbols. These notations were used in applied mathematics during the 1950s for asymptotic analysis.
The symbol 



Ω
{\displaystyle \Omega }
![{\displaystyle \Omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24b0d5ca6f381068d756f6337c08e0af9d1eeb6f) (in the sense "is not an *o* of") was introduced in 1914 by Hardy and Littlewood. Hardy and Littlewood also introduced in 1916 the left and right 



Ω
{\displaystyle \Omega }
![{\displaystyle \Omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24b0d5ca6f381068d756f6337c08e0af9d1eeb6f) symbols 




Ω

R
{\displaystyle \Omega \_{R}}
![{\displaystyle \Omega _{R}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fb36a87fe7819b8c5f859475abb8e5e92152a886), 




Ω

L
{\displaystyle \Omega \_{L}}
![{\displaystyle \Omega _{L}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5ca7869e6dabfee30cbede644d9597b1e644422) (now commonly denoted 




Ω

+
,

Ω

−
{\displaystyle \Omega \_{+},\Omega \_{-}}
![{\displaystyle \Omega _{+},\Omega _{-}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/966e2c08104ab540cd3b82f7690ca0148b996201)). This 



Ω
{\displaystyle \Omega }
![{\displaystyle \Omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/24b0d5ca6f381068d756f6337c08e0af9d1eeb6f) notation has been commonly used in number theory since the 1950s.

The symbol 



∼
{\displaystyle \sim }
![{\displaystyle \sim }](https://wikimedia.org/api/rest_v1/media/math/render/svg/afcc42adfcfdc24d5c4c474869e5d8eaa78d1173), although it had been used before with different meanings, was given its modern definition by Landau in 1909 and by Hardy in 1910. Just above on the same page of his tract Hardy defined the symbol 



≍
{\displaystyle \asymp }
![{\displaystyle \asymp }](https://wikimedia.org/api/rest_v1/media/math/render/svg/d57855824799fd82a250ecfe10596a751bb1b091), where 



f
(
x
)
≍
g
(
x
)
{\displaystyle f(x)\asymp g(x)}
![{\displaystyle f(x)\asymp g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7ee00f45070774eacea191324a222395bc050895) means that both 



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
![{\displaystyle f(x)=O(g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5e69c69cb5dc8e33a50a094deff53ec988fa6aeb) and 



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
![{\displaystyle g(x)=O(f(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/003c7cb944326248afb5cc4233db0ef354229feb) are satisfied. The notation is still currently used in analytic number theory.
In his tract Hardy also proposed the symbol 





≍

















−
{\displaystyle \mathbin {\,\asymp \;\;\;\;\!\!\!\!\!\!\!\!\!\!\!\!\!-} }
![{\displaystyle \mathbin {\,\asymp \;\;\;\;\!\!\!\!\!\!\!\!\!\!\!\!\!-} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/e54e366411d8ac032cf6a5171ca1d18b46179daa), where 



f


≍

















−
g
{\displaystyle f\mathbin {\,\asymp \;\;\;\;\!\!\!\!\!\!\!\!\!\!\!\!\!-} g}
![{\displaystyle f\mathbin {\,\asymp \;\;\;\;\!\!\!\!\!\!\!\!\!\!\!\!\!-} g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a561a7cf70dc475b45539d5d4917e744537ded01) means that 



f
∼
K
g
{\displaystyle f\sim Kg}
![{\displaystyle f\sim Kg}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3923ac7fa2211ce5236777910a23ae71061cc10e) for some constant 



K
≠
0
{\displaystyle K\not =0}
![{\displaystyle K\not =0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c1424e3c491415e77856462bf80d4015d66afb3b) (this
corresponds to Bois-Reymond's notation 



f
∼
g
{\displaystyle f\sim g}
![{\displaystyle f\sim g}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dc50b415ab7e2ffa27d032cdf150ab0984a44170)).

In the 1930s, Vinogradov popularized the notation 



f
(
x
)
≪
g
(
x
)
{\displaystyle f(x)\ll g(x)}
![{\displaystyle f(x)\ll g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e3ba9029ff712e7666ce3ea5cd2dc79a84bc4f67)
and 



g
(
x
)
≫
f
(
x
)
{\displaystyle g(x)\gg f(x)}
![{\displaystyle g(x)\gg f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/11b271669ffb44713dd2887b883db759904616ef), both of which mean

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
![{\displaystyle f(x)=O(g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5e69c69cb5dc8e33a50a094deff53ec988fa6aeb). This notation became standard in analytic number theory.

In the 1970s the big O was popularized in computer science by [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth), who proposed the different notation 



f
(
x
)
=
Θ
(
g
(
x
)
)
{\displaystyle f(x)=\Theta (g(x))}
![{\displaystyle f(x)=\Theta (g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ecd70e6ee84d7584d91b2d5d7cda885fcbe2f11a) for Hardy's 



f
(
x
)
≍
g
(
x
)
{\displaystyle f(x)\asymp g(x)}
![{\displaystyle f(x)\asymp g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7ee00f45070774eacea191324a222395bc050895), and proposed a different definition for the Hardy and Littlewood Omega notation.

Hardy introduced the symbols 



≼
{\displaystyle \preccurlyeq }
![{\displaystyle \preccurlyeq }](https://wikimedia.org/api/rest_v1/media/math/render/svg/99bc8c68be5ec5d812bb700383d1911b5f94a1ee) and advocated for Bois-Reymond's 



≺
{\displaystyle \prec }
![{\displaystyle \prec }](https://wikimedia.org/api/rest_v1/media/math/render/svg/59707ac9078525b52a9e21a1baf9ab787af7a9aa) (as well as the already mentioned other symbols) in his 1910 tract "Orders of Infinity", but made use of them only in three papers (1910–1913). In his nearly 400 remaining papers and books he consistently used the Landau symbols O and o.
Hardy's symbols 



≼
{\displaystyle \preccurlyeq }
![{\displaystyle \preccurlyeq }](https://wikimedia.org/api/rest_v1/media/math/render/svg/99bc8c68be5ec5d812bb700383d1911b5f94a1ee) and 





≍

















−
{\displaystyle \mathbin {\,\asymp \;\;\;\;\!\!\!\!\!\!\!\!\!\!\!\!\!-} }
![{\displaystyle \mathbin {\,\asymp \;\;\;\;\!\!\!\!\!\!\!\!\!\!\!\!\!-} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/e54e366411d8ac032cf6a5171ca1d18b46179daa) are not used anymore.

## Matters of notation

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=29)]

In mathematics, an expression such as 



x
→
∞
{\displaystyle x\to \infty }
![{\displaystyle x\to \infty }](https://wikimedia.org/api/rest_v1/media/math/render/svg/eda2caf97ec29f30d5f0c0cd7135393361efc020) indicates the presence of a [limit](https://en.wikipedia.org/wiki/Limit_(mathematics)). In big-O notation and related notations

Ω
,
Θ
,
≫
,
≪
,
≍
{\displaystyle \Omega ,\Theta ,\gg ,\ll ,\asymp }
![{\displaystyle \Omega ,\Theta ,\gg ,\ll ,\asymp }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c11c8e9ca999bb1192a118c3b324e68f4e698883), there is no implied limit, in contrast with [little-o](#Little-o_notation),

∼
{\displaystyle \sim }
![{\displaystyle \sim }](https://wikimedia.org/api/rest_v1/media/math/render/svg/afcc42adfcfdc24d5c4c474869e5d8eaa78d1173) and 



ω
{\displaystyle \omega }
![{\displaystyle \omega }](https://wikimedia.org/api/rest_v1/media/math/render/svg/48eff443f9de7a985bb94ca3bde20813ea737be8) notations.
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
→
∞
)
{\displaystyle f(x)=O(g(x))\;\;(x\to \infty )}
![{\displaystyle f(x)=O(g(x))\;\;(x\to \infty )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f50e412d5ac15de473778c388907f257b55889cb) can be considered an [abuse of notation](https://en.wikipedia.org/wiki/Abuse_of_notation).

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
![{\displaystyle f(x)=O(g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5e69c69cb5dc8e33a50a094deff53ec988fa6aeb) to also be an [abuse of notation](https://en.wikipedia.org/wiki/Abuse_of_notation), since the use of the equals sign could be misleading as it suggests a symmetry that this statement does not have. As [de Bruijn](https://en.wikipedia.org/wiki/Nicolaas_Govert_de_Bruijn) says, 



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
![{\displaystyle O(x)=O(x^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f1afddb616d835d2ef2942e9482a5c23f166e5c0) is true but 



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
![{\displaystyle O(x^{2})=O(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8cdaf8032891c37b3995aa46df031f0790678d8a) is not. [Knuth](https://en.wikipedia.org/wiki/Donald_Knuth) describes such statements as "one-way equalities", since if the sides could be reversed, "we could deduce ridiculous things like

n
=

n

2
{\displaystyle n=n^{2}}
![{\displaystyle n=n^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9b8ffedaa532e6c08a8a18eff3c81923bb714c87) from the identities 



n
=
O
(

n

2
)
{\displaystyle n=O(n^{2})}
![{\displaystyle n=O(n^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e8871bef11a3b7e1f525d3f71763ffbe24116158) and 




n

2
=
O
(

n

2
)
{\displaystyle n^{2}=O(n^{2})}
![{\displaystyle n^{2}=O(n^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c65e3a3f32ee26c2ff1bcfa5dfa4735ad77d4bf8). In another letter, Knuth also pointed out that

> the equality sign is not symmetric with respect to such notations [as, in this notation,] mathematicians customarily use the '=' sign as they use the word 'is' in English: Aristotle is a man, but a man isn't necessarily Aristotle.

For these reasons, some advocate for using [set notation](https://en.wikipedia.org/wiki/Set_notation) and write 



f
(
x
)
∈
O
(
g
(
x
)
)
{\displaystyle f(x)\in O(g(x))}
![{\displaystyle f(x)\in O(g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c629729344c601e5273720b8e0f33a18e6338d3c),
read as "



f
(
x
)
{\displaystyle f(x)}
![{\displaystyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/202945cce41ecebb6f643f31d119c514bec7a074) [is an element of](https://en.wikipedia.org/wiki/Element_(mathematics)#Notation_and_terminology)




O
(
g
(
x
)
)
{\displaystyle O(g(x))}
![{\displaystyle O(g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c47693b874bd7439510aa7e9002c95a2b5ed3fd2)", or "



f
(
x
)
{\displaystyle f(x)}
![{\displaystyle f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/202945cce41ecebb6f643f31d119c514bec7a074) is in the set

O
(
g
(
x
)
)
{\displaystyle O(g(x))}
![{\displaystyle O(g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c47693b874bd7439510aa7e9002c95a2b5ed3fd2)" – thinking of

O
(
g
(
x
)
)
{\displaystyle O(g(x))}
![{\displaystyle O(g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c47693b874bd7439510aa7e9002c95a2b5ed3fd2) as the class of all functions

h
(
x
)
{\displaystyle h(x)}
![{\displaystyle h(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/02c07825dae28705df03d15daeb8844d49c4dbd4) such that 



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
![{\displaystyle h(x)=O(g(x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5df35aacf3127871304262ec8cc5328d52ea415). However, the use of the equals sign is customary.
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
![{\displaystyle f(x)=g(x)+O(h(x))=O(k(x)).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/10beec45e9c11d173e036ade32f4346694159036)

The Vinogradov notations 



≪
{\displaystyle \ll }
![{\displaystyle \ll }](https://wikimedia.org/api/rest_v1/media/math/render/svg/10563f31a4178c71bef006ea5c601e908f984136) and 



≫
{\displaystyle \gg }
![{\displaystyle \gg }](https://wikimedia.org/api/rest_v1/media/math/render/svg/bb8cf5bdde51831eb31118c36a0499d41a4b643e), which are widely used in number theory
do not suffer from this defect, as they more clearly indicate that big-O indicates an *inequality* rather than an *equality*. They also enjoy a symmetry that big-O notation lacks: 



f
(
x
)
≪
g
(
x
)
{\displaystyle f(x)\ll g(x)}
![{\displaystyle f(x)\ll g(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e3ba9029ff712e7666ce3ea5cd2dc79a84bc4f67)
means the same as 



g
(
x
)
≫
f
(
x
)
{\displaystyle g(x)\gg f(x)}
![{\displaystyle g(x)\gg f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/11b271669ffb44713dd2887b883db759904616ef).
In combinatorics and computer science, these notations
are rarely seen.

Big O is typeset as an italicized uppercase "O", as in the following example: 



O
(

n

2
)
{\displaystyle O(n^{2})}
![{\displaystyle O(n^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6cd9594a16cb898b8f2a2dff9227a385ec183392). In [TeX](https://en.wikipedia.org/wiki/TeX), it is produced by simply typing 'O' inside math mode. Unlike Greek-named Bachmann–Landau notations, it needs no special symbol. However, some authors use the calligraphic variant 





O
{\displaystyle {\mathcal {O}}}
![{\displaystyle {\mathcal {O}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d6ae2ed4058fb748a183d9ada8aea50a00d0c89f) instead.

The big-O originally stands for "order of" ("Ordnung", Bachmann 1894), and is thus a Latin letter. Neither Bachmann nor Landau ever call it "Omicron". The symbol was much later on (1976) viewed by Knuth as a capital [omicron](https://en.wikipedia.org/wiki/Omicron), probably in reference to his definition of the symbol [Omega](https://en.wikipedia.org/wiki/Omega). The digit [zero](https://en.wikipedia.org/wiki/0) should not be used.

## References and notes

[[edit](/w/index.php?title=Big_O_notation&action=edit&section=34)]

1. ^ [***a***](#cite_ref-Bachmann_1-0) [***b***](#cite_ref-Bachmann_1-1) [Bachmann, Paul](https://en.wikipedia.org/wiki/Paul_Bachmann) (1894). [*Analytische Zahlentheorie*](https://archive.org/stream/dieanalytischeza00bachuoft#page/402/mode/2up) [*Analytic Number Theory*] (in German). Vol. 2. Leipzig: Teubner.
2. ^ [***a***](#cite_ref-Landau_2-0) [***b***](#cite_ref-Landau_2-1) [***c***](#cite_ref-Landau_2-2) [***d***](#cite_ref-Landau_2-3) [***e***](#cite_ref-Landau_2-4) [Landau, Edmund](https://en.wikipedia.org/wiki/Edmund_Landau) (1909). [*Handbuch der Lehre von der Verteilung der Primzahlen*](https://archive.org/stream/handbuchderlehre01landuoft#page/31/mode/2up) [*Handbook on the theory of the distribution of the primes*] (in German). Leipzig: B.G. Teubner; reprinted as two volumes in one by Chelsea, 1974, with an appendix by Dr. Paul T. Bateman. pp. 59–63.
3. ^ [***a***](#cite_ref-:0_4-0) [***b***](#cite_ref-:0_4-1) [***c***](#cite_ref-:0_4-2) [***d***](#cite_ref-:0_4-3) [***e***](#cite_ref-:0_4-4) [***f***](#cite_ref-:0_4-5) 
   [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ronald_L._Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2022). "Characterizing running times". [*Introduction to Algorithms*](https://en.wikipedia.org/wiki/Introduction_to_Algorithms) (4th ed.). MIT Press and McGraw-Hill. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-53091-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-53091-0).
4. ^ [***a***](#cite_ref-iwaniec-kowalski_5-0) [***b***](#cite_ref-iwaniec-kowalski_5-1) [***c***](#cite_ref-iwaniec-kowalski_5-2) [***d***](#cite_ref-iwaniec-kowalski_5-3) [***e***](#cite_ref-iwaniec-kowalski_5-4) [***f***](#cite_ref-iwaniec-kowalski_5-5) 
   [Iwaniec, Henryk](https://en.wikipedia.org/wiki/Henryk_Iwaniec); Kowalski, Emmanuel (2004). *Analytic Number Theory*. American Mathematical Society.
5. ^ [***a***](#cite_ref-Hardy_6-0) [***b***](#cite_ref-Hardy_6-1) [***c***](#cite_ref-Hardy_6-2) [***d***](#cite_ref-Hardy_6-3) [***e***](#cite_ref-Hardy_6-4) [Hardy, G. H.](https://en.wikipedia.org/wiki/G._H._Hardy) (1910). [*Orders of Infinity: The 'Infinitärcalcül' of Paul du Bois-Reymond*](https://archive.org/details/ordersofinfinity00harduoft). [Cambridge University Press](https://en.wikipedia.org/wiki/Cambridge_University_Press). p. 2.
6. ^ [***a***](#cite_ref-vinogradov_7-0) [***b***](#cite_ref-vinogradov_7-1) [***c***](#cite_ref-vinogradov_7-2) [***d***](#cite_ref-vinogradov_7-3) 
   [Vinogradov, Matveevič](https://en.wikipedia.org/wiki/Ivan_Matveyevich_Vinogradov) (1934). "A new estimate for *G*(*n*) in Waring's problem". *Doklady Akademii Nauk SSSR* (in Russian). **5** (5–6): 249–253.

   :   Translated in English in:

   [Vinogradov, Matveevič](https://en.wikipedia.org/wiki/Ivan_Matveyevich_Vinogradov) (1985). *Selected works / Ivan Matveevič Vinogradov; prepared by the Steklov Mathematical Institute of the Academy of Sciences of the USSR on the occasion of his 90th birthday*. Springer-Verlag.
7. ^ [***a***](#cite_ref-HL_8-0) [***b***](#cite_ref-HL_8-1) [***c***](#cite_ref-HL_8-2) [***d***](#cite_ref-HL_8-3) [***e***](#cite_ref-HL_8-4) [Hardy, G.H.](https://en.wikipedia.org/wiki/Godfrey_Harold_Hardy); [Littlewood, J.E.](https://en.wikipedia.org/wiki/John_Edensor_Littlewood) (1914). ["Some problems of diophantine approximation: Part II. The trigonometrical series associated with the elliptic θ functions"](https://projecteuclid.org/download/pdf_1/euclid.acta/1485887376). *[Acta Mathematica](https://en.wikipedia.org/wiki/Acta_Mathematica)*. **37**: 225. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF02401834](https://doi.org/10.1007%2FBF02401834). [Archived](https://web.archive.org/web/20181212063403/https://projecteuclid.org/download/pdf_1/euclid.acta/1485887376) from the original on 2018-12-12. Retrieved 2017-03-14.
8. ^ [***a***](#cite_ref-knuth_9-0) [***b***](#cite_ref-knuth_9-1) [***c***](#cite_ref-knuth_9-2) [***d***](#cite_ref-knuth_9-3) [***e***](#cite_ref-knuth_9-4) [***f***](#cite_ref-knuth_9-5) [***g***](#cite_ref-knuth_9-6) [***h***](#cite_ref-knuth_9-7) [***i***](#cite_ref-knuth_9-8) Knuth, Donald (April–June 1976). ["Big Omicron and big Omega and big Theta"](https://doi.org/10.1145%2F1008328.1008329). *[SIGACT News](https://en.wikipedia.org/wiki/SIGACT_News)*. **8** (2): 18–24. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1008328.1008329](https://doi.org/10.1145%2F1008328.1008329). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [5230246](https://api.semanticscholar.org/CorpusID:5230246).
9. ^ [***a***](#cite_ref-Bois-Reymond_10-0) [***b***](#cite_ref-Bois-Reymond_10-1) [***c***](#cite_ref-Bois-Reymond_10-2) Bois-Reymond, Paul du (1870). ["Sur la grandeur relative des infinis des fonctions"](https://link.springer.com/article/10.1007/BF02420041). *Annali di Matematica*. Series 2. **4**: 338–353. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF02420041](https://doi.org/10.1007%2FBF02420041).
10. **[^](#cite_ref-11)** 
    Sipser, Michael (2012). *Introduction to the Theory of Computation* (3 ed.). Boston, MA: PWS Publishin.
11. ^ [***a***](#cite_ref-Ivic_12-0) [***b***](#cite_ref-Ivic_12-1) [***c***](#cite_ref-Ivic_12-2) [***d***](#cite_ref-Ivic_12-3) [***e***](#cite_ref-Ivic_12-4) [***f***](#cite_ref-Ivic_12-5) [Ivić, A.](https://en.wikipedia.org/wiki/Aleksandar_Ivi%C4%87) (1985). *The Riemann Zeta-Function*. John Wiley & Sons. chapter 9.
12. ^ [***a***](#cite_ref-tenenbaum_13-0) [***b***](#cite_ref-tenenbaum_13-1) [***c***](#cite_ref-tenenbaum_13-2) [***d***](#cite_ref-tenenbaum_13-3) [***e***](#cite_ref-tenenbaum_13-4) [***f***](#cite_ref-tenenbaum_13-5) [***g***](#cite_ref-tenenbaum_13-6) Gérald Tenenbaum, Introduction to analytic and probabilistic number theory, « Notation », page xxiii. American Mathematical Society, Providence RI, 2015.
13. ^ [***a***](#cite_ref-titchmarsh_14-0) [***b***](#cite_ref-titchmarsh_14-1) E. C. Titchmarsh, The Theory of the Riemann Zeta-Function (Oxford; Clarendon Press, 1951)
14. **[^](#cite_ref-15)** [Seidel, Raimund](https://en.wikipedia.org/wiki/Raimund_Seidel) (1991), "A Simple and Fast Incremental Randomized Algorithm for Computing Trapezoidal Decompositions and for Triangulating Polygons", *[Computational Geometry](https://en.wikipedia.org/wiki/Computational_Geometry_(journal))*, **1**: 51–64, [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.55.5877](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.55.5877), [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0925-7721(91)90012-4](https://doi.org/10.1016%2F0925-7721%2891%2990012-4)
15. ^ [***a***](#cite_ref-HL2_16-0) [***b***](#cite_ref-HL2_16-1) [Hardy, G.H.](https://en.wikipedia.org/wiki/Godfrey_Harold_Hardy); [Littlewood, J.E.](https://en.wikipedia.org/wiki/John_Edensor_Littlewood) (1916). "Contribution to the theory of the Riemann zeta-function and the theory of the distribution of primes". *[Acta Mathematica](https://en.wikipedia.org/wiki/Acta_Mathematica)*. **41**: 119–196. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF02422942](https://doi.org/10.1007%2FBF02422942).
16. **[^](#cite_ref-landau_17-0)** [Landau, E.](https://en.wikipedia.org/wiki/Edmund_Landau) (1924). "Über die Anzahl der Gitterpunkte in gewissen Bereichen. IV" [On the number of grid points in known regions]. *Nachr. Gesell. Wiss. Gött. Math-phys.* (in German): 137–150.
17. **[^](#cite_ref-Balc%C3%A1zar_18-0)** Balcázar, José L.; Gabarró, Joaquim. ["Nonuniform complexity classes specified by lower and upper bounds"](http://archive.numdam.org/article/ITA_1989__23_2_177_0.pdf) (PDF). *RAIRO – Theoretical Informatics and Applications – Informatique Théorique et Applications*. **23** (2): 180. [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0988-3754](https://search.worldcat.org/issn/0988-3754). [Archived](https://web.archive.org/web/20170314153158/http://archive.numdam.org/article/ITA_1989__23_2_177_0.pdf) (PDF) from the original on 14 March 2017. Retrieved 14 March 2017 – via Numdam.
18. **[^](#cite_ref-Cucker_19-0)** Cucker, Felipe; Bürgisser, Peter (2013). ["A.1 Big Oh, Little Oh, and Other Comparisons"](https://books.google.com/books?id=SNu4BAAAQBAJ&pg=PA467). *Condition: The Geometry of Numerical Algorithms*. Berlin, Heidelberg: Springer. pp. 467–468. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-642-38896-5](https://doi.org/10.1007%2F978-3-642-38896-5). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-642-38896-5](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-38896-5).
19. **[^](#cite_ref-20)** for example it is omitted in: Hildebrand, A.J. ["Asymptotic Notations"](http://www.math.uiuc.edu/~ajh/595ama/ama-ch2.pdf) (PDF). Department of Mathematics. *Asymptotic Methods in Analysis*. Math 595, Fall 2009. Urbana, IL: University of Illinois. [Archived](https://web.archive.org/web/20170314153801/http://www.math.uiuc.edu/~ajh/595ama/ama-ch2.pdf) (PDF) from the original on 14 March 2017. Retrieved 14 March 2017.
20. **[^](#cite_ref-23)** Andreas Björklund and Thore Husfeldt and Mikko Koivisto (2009). ["Set partitioning via inclusion-exclusion"](https://www.cs.helsinki.fi/u/mkhkoivi/publications/sicomp-2009.pdf) (PDF). *[SIAM Journal on Computing](https://en.wikipedia.org/wiki/SIAM_Journal_on_Computing)*. **39** (2): 546–563. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/070683933](https://doi.org/10.1137%2F070683933). [Archived](https://web.archive.org/web/20220203095918/https://www.cs.helsinki.fi/u/mkhkoivi/publications/sicomp-2009.pdf) (PDF) from the original on 2022-02-03. Retrieved 2022-02-03. See sect.2.3, p.551.
21. **[^](#cite_ref-24)** Erdelyi, A. (1956). *Asymptotic Expansions*. Courier Corporation. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-486-60318-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-486-60318-6). .
22. **[^](#cite_ref-25)** Hardy, G. H.; [Wright, E. M.](https://en.wikipedia.org/wiki/E._M._Wright) (2008) [1st ed. 1938]. "1.6. Some notations". *[An Introduction to the Theory of Numbers](https://en.wikipedia.org/wiki/An_Introduction_to_the_Theory_of_Numbers)*. Revised by [D. R. Heath-Brown](https://en.wikipedia.org/wiki/Roger_Heath-Brown) and [J. H. Silverman](https://en.wikipedia.org/wiki/Joseph_H._Silverman), with a foreword by [Andrew Wiles](https://en.wikipedia.org/wiki/Andrew_Wiles) (6th ed.). Oxford: Oxford University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-19-921985-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-19-921985-8).
23. **[^](#cite_ref-26)** Hardy, G. H. (1966–1979). *Collected papers of G. H. Hardy (Including Joint papers with J. E. Littlewood and others), 7 vols*. Clarendon Press, Oxford.
24. ^ [***a***](#cite_ref-deBruijn_27-0) [***b***](#cite_ref-deBruijn_27-1) [de Bruijn, N.G.](https://en.wikipedia.org/wiki/N._G._de_Bruijn) (1958). [*Asymptotic Methods in Analysis*](https://books.google.com/books?id=_tnwmvHmVwMC&q=%22The+trouble+is%22&pg=PA5). Amsterdam: North-Holland. pp. 5–7. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-486-64221-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-486-64221-5). [Archived](https://web.archive.org/web/20230117051949/https://books.google.com/books?id=_tnwmvHmVwMC&q=%22The+trouble+is%22&pg=PA5) from the original on 2023-01-17. Retrieved 2021-09-15.
25. ^ [***a***](#cite_ref-Concrete_Mathematics_28-0) [***b***](#cite_ref-Concrete_Mathematics_28-1) [***c***](#cite_ref-Concrete_Mathematics_28-2) [Graham, Ronald](https://en.wikipedia.org/wiki/Ronald_Graham); [Knuth, Donald](https://en.wikipedia.org/wiki/Donald_Knuth); [Patashnik, Oren](https://en.wikipedia.org/wiki/Oren_Patashnik) (1994). [*Concrete Mathematics*](https://books.google.com/books?id=pntQAAAAMAAJ) (2 ed.). Reading, Massachusetts: Addison–Wesley. p. 446. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-55802-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-55802-9). [Archived](https://web.archive.org/web/20230117051955/https://books.google.com/books?id=pntQAAAAMAAJ) from the original on 2023-01-17. Retrieved 2016-09-23.
26. **[^](#cite_ref-29)** Donald Knuth (June–July 1998). ["Teach Calculus with Big O"](https://www.ams.org/notices/199806/commentary.pdf) (PDF). *[Notices of the American Mathematical Society](https://en.wikipedia.org/wiki/Notices_of_the_American_Mathematical_Society)*. **45** (6): 687. [Archived](https://web.archive.org/web/20211014070416/https://www.ams.org/notices/199806/commentary.pdf) (PDF) from the original on 2021-10-14. Retrieved 2021-09-05. ([Unabridged version](http://www-cs-staff.stanford.edu/~knuth/ocalc.tex) [Archived](https://web.archive.org/web/20080513234708/http://www-cs-staff.stanford.edu/~knuth/ocalc.tex) 2008-05-13 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine))
27. **[^](#cite_ref-KnuthArt_30-0)** Donald E. Knuth, The art of computer programming. Vol. 1. Fundamental algorithms, third edition, Addison Wesley Longman, 1997. Section 1.2.11.1.
28. **[^](#cite_ref-ConcreteMath_31-0)** Ronald L. Graham, Donald E. Knuth, and Oren Patashnik, *Concrete Mathematics: A Foundation for Computer Science (2nd ed.)*, Addison-Wesley, 1994. Section 9.2, p. 443.
29. **[^](#cite_ref-32)** Sivaram Ambikasaran and Eric Darve, An 





    O
    (
    N
    log
    ⁡
    N
    )
    {\displaystyle {\mathcal {O}}(N\log N)}
    ![{\displaystyle {\mathcal {O}}(N\log N)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8658b7724f2492980eab8528378dc975a9a072ca) Fast Direct Solver for Partial Hierarchically Semi-Separable Matrices, *J. Scientific Computing* **57** (2013), no. 3, 477–501.
30. **[^](#cite_ref-33)** Saket Saurabh and Meirav Zehavi, 



    (
    k
    ,
    n
    −
    k
    )
    {\displaystyle (k,n-k)}
    ![{\displaystyle (k,n-k)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2ffc83943cba6e01a096c690f9d676fad4043f09)-Max-Cut: An 






    O

    ∗
    (

    2

    p
    )
    {\displaystyle {\mathcal {O}}^{\*}(2^{p})}
    ![{\displaystyle {\mathcal {O}}^{*}(2^{p})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9d068915ba2c03baee0e3671bc56e3057bc9441e)-Time Algorithm and a Polynomial Kernel, *Algorithmica* **80** (2018), no. 12, 3844–3860.

1. **[^](#cite_ref-3)** Note that the "size" of the input is typically used as an indication of how challenging a given *instance* is, of the problem to be solved. The amount of [execution] time, and the amount of [memory] space required to compute the answer, (or to "solve' the problem), are seen as indicating the difficulty of that *instance* of the problem. For purposes of [Computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory), Big 



   O
   {\displaystyle O}
   ![{\displaystyle O}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9d70e1d0d87e2ef1092ea1ffe2923d9933ff18fc) notation is used for an upper bound on [the "order of magnitude" of] all 3 of those: the size of the input [data stream], the amount of [execution] time required, and the amount of [memory] space required.

* [Knuth, Donald](https://en.wikipedia.org/wiki/Donald_Knuth) (1997). "1.2.11: Asymptotic Representations". *Fundamental Algorithms*. The Art of Computer Programming. Vol. 1 (3rd ed.). Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-89683-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-89683-1).
* [Sipser, Michael](https://en.wikipedia.org/wiki/Michael_Sipser) (1997). [*Introduction to the Theory of Computation*](https://archive.org/details/introductiontoth00sips_928). PWS Publishing. pp. [226](https://archive.org/details/introductiontoth00sips_928/page/n239)–228. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-534-94728-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-534-94728-6).
* Avigad, Jeremy; Donnelly, Kevin (2004). [*Formalizing O notation in Isabelle/HOL*](https://www.andrew.cmu.edu/~avigad/Papers/bigo.pdf) (PDF). International Joint Conference on Automated Reasoning. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-540-25984-8\_27](https://doi.org/10.1007%2F978-3-540-25984-8_27).
* Black, Paul E. (11 March 2005). Black, Paul E. (ed.). ["big-O notation"](https://xlinux.nist.gov/dads/HTML/bigOnotation.html). *Dictionary of Algorithms and Data Structures*. U.S. National Institute of Standards and Technology. Retrieved December 16, 2006.
* Black, Paul E. (17 December 2004). Black, Paul E. (ed.). ["little-o notation"](https://xlinux.nist.gov/dads/HTML/littleOnotation.html). *Dictionary of Algorithms and Data Structures*. U.S. National Institute of Standards and Technology. Retrieved December 16, 2006.
* Black, Paul E. (17 December 2004). Black, Paul E. (ed.). ["Ω"](https://xlinux.nist.gov/dads/HTML/omegaCapital.html). *Dictionary of Algorithms and Data Structures*. U.S. National Institute of Standards and Technology. Retrieved December 16, 2006.
* Black, Paul E. (17 December 2004). Black, Paul E. (ed.). ["ω"](https://xlinux.nist.gov/dads/HTML/omega.html). *Dictionary of Algorithms and Data Structures*. U.S. National Institute of Standards and Technology. Retrieved December 16, 2006.
* Black, Paul E. (17 December 2004). Black, Paul E. (ed.). ["Θ"](https://xlinux.nist.gov/dads/HTML/theta.html). *Dictionary of Algorithms and Data Structures*. U.S. National Institute of Standards and Technology. Retrieved December 16, 2006.