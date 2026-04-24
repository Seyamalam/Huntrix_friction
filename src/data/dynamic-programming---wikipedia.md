# Dynamic programming - Wikipedia

Source: https://en.wikipedia.org/wiki/Dynamic_programming

---

Problem optimization method

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/03/Shortest_path_optimal_substructure.svg/250px-Shortest_path_optimal_substructure.svg.png)](https://en.wikipedia.org/wiki/File:Shortest_path_optimal_substructure.svg)

**Figure 1.** Finding the shortest path in a graph using optimal substructure; a straight line indicates a single edge; a wavy line indicates a shortest path between the two vertices it connects (among other paths, not shown, sharing the same two vertices); the bold line is the overall shortest path from start to goal.

**Dynamic programming** is both a [mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization) method and an [algorithmic paradigm](https://en.wikipedia.org/wiki/Algorithmic_paradigm). The method was developed by [Richard Bellman](https://en.wikipedia.org/wiki/Richard_Bellman) in the 1950s and has found applications in numerous fields, such as [aerospace engineering](https://en.wikipedia.org/wiki/Aerospace_engineering) and [economics](https://en.wikipedia.org/wiki/Economics).

In both contexts it refers to simplifying a complicated problem by breaking it down into simpler sub-problems in a [recursive](https://en.wikipedia.org/wiki/Recursion) manner. While some decision problems cannot be taken apart this way, decisions that span several points in time do often break apart recursively. Likewise, in computer science, if a problem can be solved optimally by breaking it into sub-problems and then recursively finding the optimal solutions to the sub-problems, then it is said to have *[optimal substructure](https://en.wikipedia.org/wiki/Optimal_substructure)*.

If sub-problems can be nested recursively inside larger problems, so that dynamic programming methods are applicable, then there is a relation between the value of the larger problem and the values of the sub-problems. In the optimization literature this relationship is called the [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation).

### Mathematical optimization

[[edit](/w/index.php?title=Dynamic_programming&action=edit&section=2)]

In terms of mathematical optimization, dynamic programming usually refers to simplifying a decision by breaking it down into a sequence of decision steps over time.

This is done by defining a sequence of **value functions** *V*1, *V*2, ..., *V**n* taking *y* as an argument representing the **[state](https://en.wikipedia.org/wiki/State_variable)** of the system at times *i* from 1 to *n*.

The definition of *V**n*(*y*) is the value obtained in state *y* at the last time *n*.

The values *V**i* at earlier times *i* = *n* −1, *n* − 2, ..., 2, 1 can be found by working backwards, using a [recursive](https://en.wikipedia.org/wiki/Recursion) relationship called the [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation).

For *i* = 2, ..., *n*, *V**i*−1 at any state *y* is calculated from *V**i* by maximizing a simple function (usually the sum) of the gain from a decision at time *i* − 1 and the function *V**i* at the new state of the system if this decision is made.

Since *V**i* has already been calculated for the needed states, the above operation yields *V**i*−1 for those states.

Finally, *V*1 at the initial state of the system is the value of the optimal solution. The optimal values of the decision variables can be recovered, one by one, by tracking back the calculations already performed.

In [control theory](https://en.wikipedia.org/wiki/Control_theory), a typical problem is to find an admissible control 





u

∗
{\displaystyle \mathbf {u} ^{\ast }}
![{\displaystyle \mathbf {u} ^{\ast }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/28af30b0ccc5031ab9197b5513a023d619223c38) which causes the system 







x
˙
(
t
)
=

g

(


x
(
t
)
,

u
(
t
)
,
t
)
{\displaystyle {\dot {\mathbf {x} }}(t)=\mathbf {g} \left(\mathbf {x} (t),\mathbf {u} (t),t\right)}
![{\displaystyle {\dot {\mathbf {x} }}(t)=\mathbf {g} \left(\mathbf {x} (t),\mathbf {u} (t),t\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6f8ac19503069e99fd6509049eb8184ab4456fd8) to follow an admissible trajectory 





x

∗
{\displaystyle \mathbf {x} ^{\ast }}
![{\displaystyle \mathbf {x} ^{\ast }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b7a902678bff3be2ae29f828d78594ce61eb5031) on a continuous time interval 




t

0
≤
t
≤

t

1
{\displaystyle t\_{0}\leq t\leq t\_{1}}
![{\displaystyle t_{0}\leq t\leq t_{1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a409858d7eb32c359f8ea1f6d5cd3efa96d22ae1) that minimizes a [cost function](https://en.wikipedia.org/wiki/Loss_function)

:   J
    =
    b

    (


    x
    (

    t

    1
    )
    ,

    t

    1
    )
    +

    ∫


    t

    0


    t

    1
    f

    (


    x
    (
    t
    )
    ,

    u
    (
    t
    )
    ,
    t
    )

    d
    t
    {\displaystyle J=b\left(\mathbf {x} (t\_{1}),t\_{1}\right)+\int \_{t\_{0}}^{t\_{1}}f\left(\mathbf {x} (t),\mathbf {u} (t),t\right)\mathrm {d} t}
    ![{\displaystyle J=b\left(\mathbf {x} (t_{1}),t_{1}\right)+\int _{t_{0}}^{t_{1}}f\left(\mathbf {x} (t),\mathbf {u} (t),t\right)\mathrm {d} t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/63bfe1f0100954ebfb540d6e01d7cc097a317491)

The solution to this problem is an optimal control law or policy 





u

∗
=
h
(

x
(
t
)
,
t
)
{\displaystyle \mathbf {u} ^{\ast }=h(\mathbf {x} (t),t)}
![{\displaystyle \mathbf {u} ^{\ast }=h(\mathbf {x} (t),t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7422ca3ab6f0137a3c2075c97f33b2f046dd7cd6), which produces an optimal trajectory 





x

∗
{\displaystyle \mathbf {x} ^{\ast }}
![{\displaystyle \mathbf {x} ^{\ast }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b7a902678bff3be2ae29f828d78594ce61eb5031) and a [cost-to-go function](https://en.wikipedia.org/wiki/Cost-to-go_function) 




J

∗
{\displaystyle J^{\ast }}
![{\displaystyle J^{\ast }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6e1c3cf6b0f82086b63804e6ff6db19a003516f4). The latter obeys the fundamental equation of dynamic programming:

:   −

    J

    t

    ∗
    =

    min


    u

    {

    f

    (


    x
    (
    t
    )
    ,

    u
    (
    t
    )
    ,
    t
    )
    +

    J

    x

    ∗


    T

    g

    (


    x
    (
    t
    )
    ,

    u
    (
    t
    )
    ,
    t
    )
    }
    {\displaystyle -J\_{t}^{\ast }=\min \_{\mathbf {u} }\left\{f\left(\mathbf {x} (t),\mathbf {u} (t),t\right)+J\_{x}^{\ast {\mathsf {T}}}\mathbf {g} \left(\mathbf {x} (t),\mathbf {u} (t),t\right)\right\}}
    ![{\displaystyle -J_{t}^{\ast }=\min _{\mathbf {u} }\left\{f\left(\mathbf {x} (t),\mathbf {u} (t),t\right)+J_{x}^{\ast {\mathsf {T}}}\mathbf {g} \left(\mathbf {x} (t),\mathbf {u} (t),t\right)\right\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/61adf643857b96a01a978deeae8355d98c6c2777)

a [partial differential equation](https://en.wikipedia.org/wiki/Partial_differential_equation) known as the [Hamilton–Jacobi–Bellman equation](https://en.wikipedia.org/wiki/Hamilton%E2%80%93Jacobi%E2%80%93Bellman_equation), in which 




J

x

∗
=



∂

J

∗

∂

x
=


[




∂

J

∗

∂

x

1
 
 
 
 



∂

J

∗

∂

x

2
 
 
 
 
…
 
 
 
 



∂

J

∗

∂

x

n
]


T
{\displaystyle J\_{x}^{\ast }={\frac {\partial J^{\ast }}{\partial \mathbf {x} }}=\left[{\frac {\partial J^{\ast }}{\partial x\_{1}}}~~~~{\frac {\partial J^{\ast }}{\partial x\_{2}}}~~~~\dots ~~~~{\frac {\partial J^{\ast }}{\partial x\_{n}}}\right]^{\mathsf {T}}}
![{\displaystyle J_{x}^{\ast }={\frac {\partial J^{\ast }}{\partial \mathbf {x} }}=\left[{\frac {\partial J^{\ast }}{\partial x_{1}}}~~~~{\frac {\partial J^{\ast }}{\partial x_{2}}}~~~~\dots ~~~~{\frac {\partial J^{\ast }}{\partial x_{n}}}\right]^{\mathsf {T}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2d8ec705f00169c8ea3c0daa2d2669fdc623f403) and 




J

t

∗
=



∂

J

∗

∂
t
{\displaystyle J\_{t}^{\ast }={\frac {\partial J^{\ast }}{\partial t}}}
![{\displaystyle J_{t}^{\ast }={\frac {\partial J^{\ast }}{\partial t}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5e86a16697bf1460ff23621e25902160f9d5d6b6). One finds that minimizing 




u
{\displaystyle \mathbf {u} }
![{\displaystyle \mathbf {u} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/261e20fe101de02a771021d9d4466c0ad3e352d7) in terms of 



t
{\displaystyle t}
![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560), 




x
{\displaystyle \mathbf {x} }
![{\displaystyle \mathbf {x} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/32adf004df5eb0a8c7fd8c0b6b7405183c5a5ef2), and the unknown function 




J

x

∗
{\displaystyle J\_{x}^{\ast }}
![{\displaystyle J_{x}^{\ast }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3c55442c83748a8d936380bdd4caafdbe04059aa) and then substitutes the result into the Hamilton–Jacobi–Bellman equation to get the partial differential equation to be solved with boundary condition 



J

(

t

1
)
=
b

(


x
(

t

1
)
,

t

1
)
{\displaystyle J\left(t\_{1}\right)=b\left(\mathbf {x} (t\_{1}),t\_{1}\right)}
![{\displaystyle J\left(t_{1}\right)=b\left(\mathbf {x} (t_{1}),t_{1}\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/547d2411ff0ff93c17921a01645e765ed85832ca). In practice, this generally requires [numerical techniques](https://en.wikipedia.org/wiki/Numerical_partial_differential_equations) for some discrete approximation to the exact optimization relationship.

Alternatively, the continuous process can be approximated by a discrete system, which leads to a following recurrence relation analog to the Hamilton–Jacobi–Bellman equation:

:   J

    k

    ∗

    (


    x

    n
    −
    k
    )
    =

    min



    u

    n
    −
    k

    {




    f
    ^

    (



    x

    n
    −
    k
    ,


    u

    n
    −
    k
    )
    +

    J

    k
    −
    1

    ∗

    (





    g
    ^

    (



    x

    n
    −
    k
    ,


    u

    n
    −
    k
    )
    )
    }
    {\displaystyle J\_{k}^{\ast }\left(\mathbf {x} \_{n-k}\right)=\min \_{\mathbf {u} \_{n-k}}\left\{{\hat {f}}\left(\mathbf {x} \_{n-k},\mathbf {u} \_{n-k}\right)+J\_{k-1}^{\ast }\left({\hat {\mathbf {g} }}\left(\mathbf {x} \_{n-k},\mathbf {u} \_{n-k}\right)\right)\right\}}
    ![{\displaystyle J_{k}^{\ast }\left(\mathbf {x} _{n-k}\right)=\min _{\mathbf {u} _{n-k}}\left\{{\hat {f}}\left(\mathbf {x} _{n-k},\mathbf {u} _{n-k}\right)+J_{k-1}^{\ast }\left({\hat {\mathbf {g} }}\left(\mathbf {x} _{n-k},\mathbf {u} _{n-k}\right)\right)\right\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/194904c21e87d196178765721674bf7708922650)

at the 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40)-th stage of 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) equally spaced discrete time intervals, and where 






f
^
{\displaystyle {\hat {f}}}
![{\displaystyle {\hat {f}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/14ce989fd75da938ec6f95a0cdb71037b23a11cb) and 







g
^
{\displaystyle {\hat {\mathbf {g} }}}
![{\displaystyle {\hat {\mathbf {g} }}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/24908acaef278644c6412d9c32d9feba222679c4) denote discrete approximations to 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) and 




g
{\displaystyle \mathbf {g} }
![{\displaystyle \mathbf {g} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/8cdf843789e9564a867aee3ff184453b72ecbafe). This functional equation is known as the [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation), which can be solved for an exact solution of the discrete approximation of the optimization equation.

#### Example from economics: Ramsey's problem of optimal saving

[[edit](/w/index.php?title=Dynamic_programming&action=edit&section=4)]

In [economics](https://en.wikipedia.org/wiki/Economics), the objective is generally to maximize (rather than minimize) some dynamic [social welfare function](https://en.wikipedia.org/wiki/Social_welfare_function). In Ramsey's problem, this function relates amounts of consumption to levels of [utility](https://en.wikipedia.org/wiki/Utility). Loosely speaking, the planner faces the trade-off between contemporaneous consumption and future consumption (via investment in [capital stock](https://en.wikipedia.org/wiki/Physical_capital) that is used in production), known as [intertemporal choice](https://en.wikipedia.org/wiki/Intertemporal_choice). Future consumption is discounted at a constant rate 



β
∈
(
0
,
1
)
{\displaystyle \beta \in (0,1)}
![{\displaystyle \beta \in (0,1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/78d19da4972d52ca3f15bcc2c141b09de4406d02). A discrete approximation to the transition equation of capital is given by

:   k

    t
    +
    1
    =



    g
    ^

    (


    k

    t
    ,

    c

    t
    )
    =
    f
    (

    k

    t
    )
    −

    c

    t
    {\displaystyle k\_{t+1}={\hat {g}}\left(k\_{t},c\_{t}\right)=f(k\_{t})-c\_{t}}
    ![{\displaystyle k_{t+1}={\hat {g}}\left(k_{t},c_{t}\right)=f(k_{t})-c_{t}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f8d32fbc9cb6f38e69731c90461d262f1d0f8134)

where 



c
{\displaystyle c}
![{\displaystyle c}](https://wikimedia.org/api/rest_v1/media/math/render/svg/86a67b81c2de995bd608d5b2df50cd8cd7d92455) is consumption, 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) is capital, and 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) is a [production function](https://en.wikipedia.org/wiki/Production_function) satisfying the [Inada conditions](https://en.wikipedia.org/wiki/Inada_conditions). An initial capital stock 




k

0
>
0
{\displaystyle k\_{0}>0}
![{\displaystyle k_{0}>0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7f67a794c981fa2199ba8253071beb4e85e81461) is assumed.

Let 




c

t
{\displaystyle c\_{t}}
![{\displaystyle c_{t}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/93578e37f3234419a34df79845836bc0ec5ef76c) be consumption in period t, and assume consumption yields [utility](https://en.wikipedia.org/wiki/Utility) 



u
(

c

t
)
=
ln
⁡
(

c

t
)
{\displaystyle u(c\_{t})=\ln(c\_{t})}
![{\displaystyle u(c_{t})=\ln(c_{t})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ee41e735fa2f20ff6f93939f3fa5e7e32cbdd740) as long as the consumer lives. Assume the consumer is impatient, so that he [discounts](https://en.wikipedia.org/wiki/Discounting) future utility by a factor b each period, where 



0
<
b
<
1
{\displaystyle 0<b<1}
![{\displaystyle 0<b<1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/294830b3b4756ac60e95f53d49920ac8e2a1a227). Let 




k

t
{\displaystyle k\_{t}}
![{\displaystyle k_{t}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/352386366dcb1dcc184d82669513975561f2d2ae) be [capital](https://en.wikipedia.org/wiki/Capital_(economics)) in period t. Assume initial capital is a given amount 




k

0
>
0
{\displaystyle k\_{0}>0}
![{\displaystyle k_{0}>0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7f67a794c981fa2199ba8253071beb4e85e81461), and suppose that this period's capital and consumption determine next period's capital as 




k

t
+
1
=
A

k

t

a
−

c

t
{\displaystyle k\_{t+1}=Ak\_{t}^{a}-c\_{t}}
![{\displaystyle k_{t+1}=Ak_{t}^{a}-c_{t}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8fbaf9ec3c03a2530e63919cbfa0f16d5f6d5d24), where A is a positive constant and 



0
<
a
<
1
{\displaystyle 0<a<1}
![{\displaystyle 0<a<1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7cfd02fa239e3f0b03bda321fdc6f309e6b1d915). Assume capital cannot be negative. Then the consumer's decision problem can be written as follows:

:   max

    ∑

    t
    =
    0

    T

    b

    t
    ln
    ⁡
    (

    c

    t
    )
    {\displaystyle \max \sum \_{t=0}^{T}b^{t}\ln(c\_{t})}
    ![{\displaystyle \max \sum _{t=0}^{T}b^{t}\ln(c_{t})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3708ec350fe3b3d2b808439d5a36403532fc670f) subject to 




    k

    t
    +
    1
    =
    A

    k

    t

    a
    −

    c

    t
    ≥
    0
    {\displaystyle k\_{t+1}=Ak\_{t}^{a}-c\_{t}\geq 0}
    ![{\displaystyle k_{t+1}=Ak_{t}^{a}-c_{t}\geq 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b4e82a36b50b985c6d5e7d3b766c47c0c145767) for all 



    t
    =
    0
    ,
    1
    ,
    2
    ,
    …
    ,
    T
    {\displaystyle t=0,1,2,\ldots ,T}
    ![{\displaystyle t=0,1,2,\ldots ,T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/822463c3aa8dc826ed1e78c4e68a48be0e11240d)

Written this way, the problem looks complicated, because it involves solving for all the choice variables 




c

0
,

c

1
,

c

2
,
…
,

c

T
{\displaystyle c\_{0},c\_{1},c\_{2},\ldots ,c\_{T}}
![{\displaystyle c_{0},c_{1},c_{2},\ldots ,c_{T}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1765ec0a05b964c6705adc51371395b41d3f151b). (The capital 




k

0
{\displaystyle k\_{0}}
![{\displaystyle k_{0}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/eafdfeca4ead3960fca92311910970eba7ec48a1) is not a choice variable—the consumer's initial capital is taken as given.)

The dynamic programming approach to solve this problem involves breaking it apart into a sequence of smaller decisions. To do so, we define a sequence of *value functions* 




V

t
(
k
)
{\displaystyle V\_{t}(k)}
![{\displaystyle V_{t}(k)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/407a1673f8e20e9c13125eeb44aa463c150ac756), for 



t
=
0
,
1
,
2
,
…
,
T
,
T
+
1
{\displaystyle t=0,1,2,\ldots ,T,T+1}
![{\displaystyle t=0,1,2,\ldots ,T,T+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2d53c4539a603e5e4696dafaa6ef98470c7658e8) which represent the value of having any amount of capital k at each time t. There is (by assumption) no utility from having capital after death, 




V

T
+
1
(
k
)
=
0
{\displaystyle V\_{T+1}(k)=0}
![{\displaystyle V_{T+1}(k)=0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6a883a897edf0530feb7d060b9ab860df7013dcb).

The value of any quantity of capital at any previous time can be calculated by [backward induction](https://en.wikipedia.org/wiki/Backward_induction) using the [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation). In this problem, for each 



t
=
0
,
1
,
2
,
…
,
T
{\displaystyle t=0,1,2,\ldots ,T}
![{\displaystyle t=0,1,2,\ldots ,T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/822463c3aa8dc826ed1e78c4e68a48be0e11240d), the Bellman equation is

:   V

    t
    (

    k

    t
    )

    =

    max

    (

    ln
    ⁡
    (

    c

    t
    )
    +
    b

    V

    t
    +
    1
    (

    k

    t
    +
    1
    )
    )
    {\displaystyle V\_{t}(k\_{t})\,=\,\max \left(\ln(c\_{t})+bV\_{t+1}(k\_{t+1})\right)}
    ![{\displaystyle V_{t}(k_{t})\,=\,\max \left(\ln(c_{t})+bV_{t+1}(k_{t+1})\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/199fcd39d2bf305a41b419b99f971e0512fcf07f) subject to 




    k

    t
    +
    1
    =
    A

    k

    t

    a
    −

    c

    t
    ≥
    0
    {\displaystyle k\_{t+1}=Ak\_{t}^{a}-c\_{t}\geq 0}
    ![{\displaystyle k_{t+1}=Ak_{t}^{a}-c_{t}\geq 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b4e82a36b50b985c6d5e7d3b766c47c0c145767)

This problem is much simpler than the one we wrote down before, because it involves only two decision variables, 




c

t
{\displaystyle c\_{t}}
![{\displaystyle c_{t}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/93578e37f3234419a34df79845836bc0ec5ef76c) and 




k

t
+
1
{\displaystyle k\_{t+1}}
![{\displaystyle k_{t+1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/deb47bc888092c00440588520f39cd7674fc67f3). Intuitively, instead of choosing his whole lifetime plan at birth, the consumer can take things one step at a time. At time t, his current capital 




k

t
{\displaystyle k\_{t}}
![{\displaystyle k_{t}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/352386366dcb1dcc184d82669513975561f2d2ae) is given, and he only needs to choose current consumption 




c

t
{\displaystyle c\_{t}}
![{\displaystyle c_{t}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/93578e37f3234419a34df79845836bc0ec5ef76c) and saving 




k

t
+
1
{\displaystyle k\_{t+1}}
![{\displaystyle k_{t+1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/deb47bc888092c00440588520f39cd7674fc67f3).

To actually solve this problem, we work backwards. For simplicity, the current level of capital is denoted as k. 




V

T
+
1
(
k
)
{\displaystyle V\_{T+1}(k)}
![{\displaystyle V_{T+1}(k)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b9a196ac77d6b616a927f71c12b66d017e2c3004) is already known, so using the Bellman equation once we can calculate 




V

T
(
k
)
{\displaystyle V\_{T}(k)}
![{\displaystyle V_{T}(k)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/44b6a3f91c5038973c2804154a674e41d0879630), and so on until we get to 




V

0
(
k
)
{\displaystyle V\_{0}(k)}
![{\displaystyle V_{0}(k)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a003db4fee0c2a9a4ec194326d05685c7477efbb), which is the *value* of the initial decision problem for the whole lifetime. In other words, once we know 




V

T
−
j
+
1
(
k
)
{\displaystyle V\_{T-j+1}(k)}
![{\displaystyle V_{T-j+1}(k)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6db8f2132e654ab70410558a4a4a524f21acde17), we can calculate 




V

T
−
j
(
k
)
{\displaystyle V\_{T-j}(k)}
![{\displaystyle V_{T-j}(k)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/513588d928426d584bf5710fee429551b10d6882), which is the maximum of 



ln
⁡
(

c

T
−
j
)
+
b

V

T
−
j
+
1
(
A

k

a
−

c

T
−
j
)
{\displaystyle \ln(c\_{T-j})+bV\_{T-j+1}(Ak^{a}-c\_{T-j})}
![{\displaystyle \ln(c_{T-j})+bV_{T-j+1}(Ak^{a}-c_{T-j})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2eb6fce0ec9aa1381de35a04fb87ede7bab1953f), where 




c

T
−
j
{\displaystyle c\_{T-j}}
![{\displaystyle c_{T-j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ce06086b5fb73811c5cdf149a757d26d17b8e05c) is the choice variable and 



A

k

a
−

c

T
−
j
≥
0
{\displaystyle Ak^{a}-c\_{T-j}\geq 0}
![{\displaystyle Ak^{a}-c_{T-j}\geq 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f79d9899e1fae38097ce8bd58636ff6d2aa104bf).

Working backwards, it can be shown that the value function at time 



t
=
T
−
j
{\displaystyle t=T-j}
![{\displaystyle t=T-j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1caddd302995dfccfcbb960068d9ff11e1da718d) is

:   V

    T
    −
    j
    (
    k
    )

    =

    a

    ∑

    i
    =
    0

    j

    a

    i

    b

    i
    ln
    ⁡
    k
    +

    v

    T
    −
    j
    {\displaystyle V\_{T-j}(k)\,=\,a\sum \_{i=0}^{j}a^{i}b^{i}\ln k+v\_{T-j}}
    ![{\displaystyle V_{T-j}(k)\,=\,a\sum _{i=0}^{j}a^{i}b^{i}\ln k+v_{T-j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5281df6ca448fd68a12e5b5926b7994fac524e47)

where each 




v

T
−
j
{\displaystyle v\_{T-j}}
![{\displaystyle v_{T-j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/005245baed781ad4a253caaed4fb8dc23899e5d9) is a constant, and the optimal amount to consume at time 



t
=
T
−
j
{\displaystyle t=T-j}
![{\displaystyle t=T-j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1caddd302995dfccfcbb960068d9ff11e1da718d) is

:   c

    T
    −
    j
    (
    k
    )

    =



    1


    ∑

    i
    =
    0

    j

    a

    i

    b

    i
    A

    k

    a
    {\displaystyle c\_{T-j}(k)\,=\,{\frac {1}{\sum \_{i=0}^{j}a^{i}b^{i}}}Ak^{a}}
    ![{\displaystyle c_{T-j}(k)\,=\,{\frac {1}{\sum _{i=0}^{j}a^{i}b^{i}}}Ak^{a}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c392e9197f93e4385350c862d6b9df90de376173)

which can be simplified to

:   c

    T
    (
    k
    )


    =
    A

    k

    a



    c

    T
    −
    1
    (
    k
    )


    =



    A

    k

    a

    1
    +
    a
    b



    c

    T
    −
    2
    (
    k
    )


    =



    A

    k

    a

    1
    +
    a
    b
    +

    a

    2

    b

    2




    …



    c

    2
    (
    k
    )


    =



    A

    k

    a

    1
    +
    a
    b
    +

    a

    2

    b

    2
    +
    …
    +

    a

    T
    −
    2

    b

    T
    −
    2



    c

    1
    (
    k
    )


    =



    A

    k

    a

    1
    +
    a
    b
    +

    a

    2

    b

    2
    +
    …
    +

    a

    T
    −
    2

    b

    T
    −
    2
    +

    a

    T
    −
    1

    b

    T
    −
    1



    c

    0
    (
    k
    )


    =



    A

    k

    a

    1
    +
    a
    b
    +

    a

    2

    b

    2
    +
    …
    +

    a

    T
    −
    2

    b

    T
    −
    2
    +

    a

    T
    −
    1

    b

    T
    −
    1
    +

    a

    T

    b

    T
    {\displaystyle {\begin{aligned}c\_{T}(k)&=Ak^{a}\\c\_{T-1}(k)&={\frac {Ak^{a}}{1+ab}}\\c\_{T-2}(k)&={\frac {Ak^{a}}{1+ab+a^{2}b^{2}}}\\&\dots \\c\_{2}(k)&={\frac {Ak^{a}}{1+ab+a^{2}b^{2}+\ldots +a^{T-2}b^{T-2}}}\\c\_{1}(k)&={\frac {Ak^{a}}{1+ab+a^{2}b^{2}+\ldots +a^{T-2}b^{T-2}+a^{T-1}b^{T-1}}}\\c\_{0}(k)&={\frac {Ak^{a}}{1+ab+a^{2}b^{2}+\ldots +a^{T-2}b^{T-2}+a^{T-1}b^{T-1}+a^{T}b^{T}}}\end{aligned}}}
    ![{\displaystyle {\begin{aligned}c_{T}(k)&=Ak^{a}\\c_{T-1}(k)&={\frac {Ak^{a}}{1+ab}}\\c_{T-2}(k)&={\frac {Ak^{a}}{1+ab+a^{2}b^{2}}}\\&\dots \\c_{2}(k)&={\frac {Ak^{a}}{1+ab+a^{2}b^{2}+\ldots +a^{T-2}b^{T-2}}}\\c_{1}(k)&={\frac {Ak^{a}}{1+ab+a^{2}b^{2}+\ldots +a^{T-2}b^{T-2}+a^{T-1}b^{T-1}}}\\c_{0}(k)&={\frac {Ak^{a}}{1+ab+a^{2}b^{2}+\ldots +a^{T-2}b^{T-2}+a^{T-1}b^{T-1}+a^{T}b^{T}}}\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/605bed9d2072cc5b33e51d486f946a77470f50b0)

We see that it is optimal to consume a larger fraction of current wealth as one gets older, finally consuming all remaining wealth in period T, the last period of life.

There are two key attributes that a problem must have in order for dynamic programming to be applicable: [optimal substructure](https://en.wikipedia.org/wiki/Optimal_substructure) and [overlapping sub-problems](https://en.wikipedia.org/wiki/Overlapping_subproblem). If a problem can be solved by combining optimal solutions to *non-overlapping* sub-problems, the strategy is called "[divide and conquer](https://en.wikipedia.org/wiki/Divide_and_conquer_algorithm)" instead. This is why [merge sort](https://en.wikipedia.org/wiki/Mergesort) and [quick sort](https://en.wikipedia.org/wiki/Quicksort) are not classified as dynamic programming problems.

*Optimal substructure* means that the solution to a given optimization problem can be obtained by the combination of optimal solutions to its sub-problems. Such optimal substructures are usually described by means of [recursion](https://en.wikipedia.org/wiki/Recursion). For example, given a graph *G=(V,E)*, the shortest path *p* from a vertex *u* to a vertex *v* exhibits optimal substructure: take any intermediate vertex *w* on this shortest path *p*. If *p* is truly the shortest path, then it can be split into sub-paths *p1* from *u* to *w* and *p2* from *w* to *v* such that these, in turn, are indeed the shortest paths between the corresponding vertices (by the simple cut-and-paste argument described in *[Introduction to Algorithms](https://en.wikipedia.org/wiki/Introduction_to_Algorithms)*). Hence, one can easily formulate the solution for finding shortest paths in a recursive manner, which is what the [Bellman–Ford algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm) or the [Floyd–Warshall algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm) does.

*Overlapping* sub-problems means that the space of sub-problems must be small, that is, any recursive algorithm solving the problem should solve the same sub-problems over and over, rather than generating new sub-problems. For example, consider the recursive formulation for generating the Fibonacci sequence: *F**i* = *F**i*−1 + *F**i*−2, with base case *F*1 = *F*2 = 1. Then *F*43 = *F*42 + *F*41, and *F*42 = *F*41 + *F*40. Now *F*41 is being solved in the recursive sub-trees of both *F*43 as well as *F*42. Even though the total number of sub-problems is actually small (only 43 of them), we end up solving the same problems over and over if we adopt a naive recursive solution such as this. Dynamic programming takes account of this fact and solves each sub-problem only once.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/06/Fibonacci_dynamic_programming.svg/120px-Fibonacci_dynamic_programming.svg.png)](https://en.wikipedia.org/wiki/File:Fibonacci_dynamic_programming.svg)

**Figure 2.** The subproblem graph for the Fibonacci sequence. The fact that it is not a [tree](https://en.wikipedia.org/wiki/Tree_structure) indicates overlapping subproblems.

This can be achieved in either of two ways:

* *[Top-down approach](https://en.wikipedia.org/wiki/Top-down_and_bottom-up_design)*: This is the direct fall-out of the recursive formulation of any problem. If the solution to any problem can be formulated recursively using the solution to its sub-problems, and if its sub-problems are overlapping, then one can easily [memoize](https://en.wikipedia.org/wiki/Memoize) or store the solutions to the sub-problems in a table (often an [array](https://en.wikipedia.org/wiki/Array_(data_structure)) or [hashtable](https://en.wikipedia.org/wiki/Hash_table) in practice). Whenever we attempt to solve a new sub-problem, we first check the table to see if it is already solved. If a solution has been recorded, we can use it directly, otherwise we solve the sub-problem and add its solution to the table.
* *[Bottom-up approach](https://en.wikipedia.org/wiki/Top-down_and_bottom-up_design)*: Once we formulate the solution to a problem recursively as in terms of its sub-problems, we can try reformulating the problem in a bottom-up fashion: try solving the sub-problems first and use their solutions to build-on and arrive at solutions to bigger sub-problems. This is also usually done in a tabular form by iteratively generating solutions to bigger and bigger sub-problems by using the solutions to small sub-problems. For example, if we already know the values of *F*41 and *F*40, we can directly calculate the value of *F*42.

Some [programming languages](https://en.wikipedia.org/wiki/Programming_language) can automatically [memoize](https://en.wikipedia.org/wiki/Memoization) the result of a function call with a particular set of arguments, in order to speed up [call-by-name](https://en.wikipedia.org/wiki/Call-by-name) evaluation (this mechanism is referred to as *[call-by-need](https://en.wikipedia.org/wiki/Call-by-need)*). Some languages make it possible portably (e.g. [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)), [Common Lisp](https://en.wikipedia.org/wiki/Common_Lisp), [Perl](https://en.wikipedia.org/wiki/Perl) or [D](https://en.wikipedia.org/wiki/D_(programming_language))). Some languages have automatic [memoization](https://en.wikipedia.org/wiki/Memoization) built in, such as tabled [Prolog](https://en.wikipedia.org/wiki/Prolog) and [J](https://en.wikipedia.org/wiki/J_(programming_language)), which supports memoization with the *M.* adverb. In any case, this is only possible for a [referentially transparent](https://en.wikipedia.org/wiki/Referentially_transparent) function. Memoization is also encountered as an easily accessible design pattern within term-rewrite based languages such as [Wolfram Language](https://en.wikipedia.org/wiki/Wolfram_Language).

Dynamic programming is widely used in bioinformatics for tasks such as [sequence alignment](https://en.wikipedia.org/wiki/Sequence_alignment), [protein folding](https://en.wikipedia.org/wiki/Protein_folding), RNA structure prediction and protein-DNA binding. The first dynamic programming algorithms for protein-DNA binding were developed in the 1970s independently by [Charles DeLisi](https://en.wikipedia.org/wiki/Charles_DeLisi) in the US and by Georgii Gurskii and Alexander Zasedatelev in the [Soviet Union](https://en.wikipedia.org/wiki/Soviet_Union). Recently these algorithms have become very popular in bioinformatics and [computational biology](https://en.wikipedia.org/wiki/Computational_biology), particularly in the studies of [nucleosome](https://en.wikipedia.org/wiki/Nucleosome) positioning and [transcription factor](https://en.wikipedia.org/wiki/Transcription_factor) binding.

## Examples: computer algorithms

[[edit](/w/index.php?title=Dynamic_programming&action=edit&section=7)]

### Dijkstra's algorithm for the shortest path problem

[[edit](/w/index.php?title=Dynamic_programming&action=edit&section=8)]

From a dynamic programming point of view, [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) for the [shortest path problem](https://en.wikipedia.org/wiki/Shortest_path_problem) is a successive approximation scheme that solves the dynamic programming functional equation for the shortest path problem by the **Reaching** method.

In fact, Dijkstra's explanation of the logic behind the algorithm, namely

> **Problem 2.** Find the path of minimum total length between two given nodes 
>
>
>
> P
> {\displaystyle P}
> ![{\displaystyle P}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b4dc73bf40314945ff376bd363916a738548d40a) and 
>
>
>
> Q
> {\displaystyle Q}
> ![{\displaystyle Q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8752c7023b4b3286800fe3238271bbca681219ed).
>
> We use the fact that, if 
>
>
>
> R
> {\displaystyle R}
> ![{\displaystyle R}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b0bfb3769bf24d80e15374dc37b0441e2616e33) is a node on the minimal path from 
>
>
>
> P
> {\displaystyle P}
> ![{\displaystyle P}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b4dc73bf40314945ff376bd363916a738548d40a) to 
>
>
>
> Q
> {\displaystyle Q}
> ![{\displaystyle Q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8752c7023b4b3286800fe3238271bbca681219ed), knowledge of the latter implies the knowledge of the minimal path from 
>
>
>
> P
> {\displaystyle P}
> ![{\displaystyle P}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b4dc73bf40314945ff376bd363916a738548d40a) to 
>
>
>
> R
> {\displaystyle R}
> ![{\displaystyle R}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b0bfb3769bf24d80e15374dc37b0441e2616e33).

is a paraphrasing of [Bellman's](https://en.wikipedia.org/wiki/Richard_Bellman) famous [Principle of Optimality](https://en.wikipedia.org/wiki/Principle_of_Optimality) in the context of the [shortest path problem](https://en.wikipedia.org/wiki/Shortest_path_problem).

Using dynamic programming in the calculation of the *n*th member of the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence) improves its performance greatly. Here is a naïve implementation, based directly on the mathematical definition:

```
function fib(n)
    if n <= 1 return n
    return fib(n − 1) + fib(n − 2)

```

Notice that if we call, say, `fib(5)`, we produce a call tree that calls the function on the same value many different times:

1. `fib(5)`
2. `fib(4) + fib(3)`
3. `(fib(3) + fib(2)) + (fib(2) + fib(1))`
4. `((fib(2) + fib(1)) + (fib(1) + fib(0))) + ((fib(1) + fib(0)) + fib(1))`
5. `(((fib(1) + fib(0)) + fib(1)) + (fib(1) + fib(0))) + ((fib(1) + fib(0)) + fib(1))`

In particular, `fib(2)` was calculated three times from scratch. In larger examples, many more values of `fib`, or *subproblems*, are recalculated, leading to an exponential time algorithm.

Now, suppose we have a simple [map](https://en.wikipedia.org/wiki/Associative_array) object, *m*, which maps each value of `fib` that has already been calculated to its result, and we modify our function to use it and update it. The resulting function requires only [O](https://en.wikipedia.org/wiki/Big-O_notation)(*n*) time instead of exponential time (but requires [O](https://en.wikipedia.org/wiki/Big-O_notation)(*n*) space):

```
var m := map(0 → 0, 1 → 1)
function fib(n)
    if key n is not in map m 
        m[n] := fib(n − 1) + fib(n − 2)
    return m[n]

```

This technique of saving values that have already been calculated is called *[memoization](https://en.wikipedia.org/wiki/Memoization)*; this is the top-down approach, since we first break the problem into subproblems and then calculate and store values.

In the **bottom-up** approach, we calculate the smaller values of `fib` first, then build larger values from them. This method also uses O(*n*) time since it contains a loop that repeats n − 1 times, but it only takes constant (O(1)) space, in contrast to the top-down approach which requires O(*n*) space to store the map.

```
function fib(n)
    if n = 0
        return 0
    else
        var previousFib := 0, currentFib := 1
        repeat n − 1 times // loop is skipped if n = 1
            var newFib := previousFib + currentFib
            previousFib := currentFib
            currentFib  := newFib
        return currentFib

```

In both examples, we only calculate `fib(2)` one time, and then use it to calculate both `fib(4)` and `fib(3)`, instead of computing it every time either of them is evaluated.

### A type of balanced 0–1 matrix

[[edit](/w/index.php?title=Dynamic_programming&action=edit&section=10)]

Consider the problem of assigning values, either zero or one, to the positions of an n × n matrix, with n even, so that each row and each column contains exactly n / 2 zeros and n / 2 ones. We ask how many different assignments there are for a given n. For example, when n = 4, five possible solutions are

:   [



    0

    1

    0

    1


    1

    0

    1

    0


    0

    1

    0

    1


    1

    0

    1

    0
    ]

     and 


    [



    0

    0

    1

    1


    0

    0

    1

    1


    1

    1

    0

    0


    1

    1

    0

    0
    ]

     and 


    [



    1

    1

    0

    0


    0

    0

    1

    1


    1

    1

    0

    0


    0

    0

    1

    1
    ]

     and 


    [



    1

    0

    0

    1


    0

    1

    1

    0


    0

    1

    1

    0


    1

    0

    0

    1
    ]

     and 


    [



    1

    1

    0

    0


    1

    1

    0

    0


    0

    0

    1

    1


    0

    0

    1

    1
    ]
    .
    {\displaystyle {\begin{bmatrix}0&1&0&1\\1&0&1&0\\0&1&0&1\\1&0&1&0\end{bmatrix}}{\text{ and }}{\begin{bmatrix}0&0&1&1\\0&0&1&1\\1&1&0&0\\1&1&0&0\end{bmatrix}}{\text{ and }}{\begin{bmatrix}1&1&0&0\\0&0&1&1\\1&1&0&0\\0&0&1&1\end{bmatrix}}{\text{ and }}{\begin{bmatrix}1&0&0&1\\0&1&1&0\\0&1&1&0\\1&0&0&1\end{bmatrix}}{\text{ and }}{\begin{bmatrix}1&1&0&0\\1&1&0&0\\0&0&1&1\\0&0&1&1\end{bmatrix}}.}
    ![{\displaystyle {\begin{bmatrix}0&1&0&1\\1&0&1&0\\0&1&0&1\\1&0&1&0\end{bmatrix}}{\text{ and }}{\begin{bmatrix}0&0&1&1\\0&0&1&1\\1&1&0&0\\1&1&0&0\end{bmatrix}}{\text{ and }}{\begin{bmatrix}1&1&0&0\\0&0&1&1\\1&1&0&0\\0&0&1&1\end{bmatrix}}{\text{ and }}{\begin{bmatrix}1&0&0&1\\0&1&1&0\\0&1&1&0\\1&0&0&1\end{bmatrix}}{\text{ and }}{\begin{bmatrix}1&1&0&0\\1&1&0&0\\0&0&1&1\\0&0&1&1\end{bmatrix}}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b94984f348b2c2fd826c47dd123ea607a7d8f13b)

There are at least three possible approaches: [brute force](https://en.wikipedia.org/wiki/Brute-force_search), [backtracking](https://en.wikipedia.org/wiki/Backtracking), and dynamic programming.

Brute force consists of checking all assignments of zeros and ones and counting those that have balanced rows and columns (n / 2 zeros and n / 2 ones). As there are 




2


n

2
{\displaystyle 2^{n^{2}}}
![{\displaystyle 2^{n^{2}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e736acf2e0b9a29d97b91a1413af326c7175f117) possible assignments and 








(

n

n

/
2

)

n
{\displaystyle {\tbinom {n}{n/2}}^{n}}
![{\displaystyle {\tbinom {n}{n/2}}^{n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5f6229cccb7cb1ee2591bf551375fbc4d1b8eda) sensible assignments, this strategy is not practical for arbitrarily large values of 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b).

Backtracking for this problem consists of choosing some order of the matrix elements and recursively placing ones or zeros, while checking that in every row and column the number of elements that have not been assigned plus the number of ones or zeros are both at least n / 2. While more sophisticated than brute force, this approach will visit every solution once, making it impractical for n larger than six, since the number of solutions is already 116963796250 for n = 8, as we shall see.

Dynamic programming makes it possible to count the number of solutions without visiting them all. Imagine backtracking values for the first row – what information would we require about the remaining rows, in order to be able to accurately count the solutions obtained for each first row value? We consider k × n boards, where 1 ≤ k ≤ n, whose k rows contain 



n

/
2
{\displaystyle n/2}
![{\displaystyle n/2}](https://wikimedia.org/api/rest_v1/media/math/render/svg/95c3931a3fa03cc98cfacd2c49a7ca35b96eaa9b) zeros and 



n

/
2
{\displaystyle n/2}
![{\displaystyle n/2}](https://wikimedia.org/api/rest_v1/media/math/render/svg/95c3931a3fa03cc98cfacd2c49a7ca35b96eaa9b) ones. The function *f* to which [memoization](https://en.wikipedia.org/wiki/Memoization) is applied maps vectors of *n* pairs of integers to the number of admissible boards (solutions). There is one pair for each column, and its two components indicate respectively the number of zeros and ones that have yet to be placed in that column. We seek the value of 



f
(
(
n

/
2
,
n

/
2
)
,
(
n

/
2
,
n

/
2
)
,
…
(
n

/
2
,
n

/
2
)
)
{\displaystyle f((n/2,n/2),(n/2,n/2),\ldots (n/2,n/2))}
![{\displaystyle f((n/2,n/2),(n/2,n/2),\ldots (n/2,n/2))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/472f2ef0a06a78167a040a874abfc17904f47aa0) (n arguments or one vector of n elements). The process of subproblem creation involves iterating over every one of 







(

n

n

/
2

)
{\displaystyle {\tbinom {n}{n/2}}}
![{\displaystyle {\tbinom {n}{n/2}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a06cfa2b8e18128d5642221d7347ee97cb3ba0bd) possible assignments for the top row of the board, and going through every column, subtracting one from the appropriate element of the pair for that column, depending on whether the assignment for the top row contained a zero or a one at that position. If any one of the results is negative, then the assignment is invalid and does not contribute to the set of solutions (recursion stops). Otherwise, we have an assignment for the top row of the k × n board and recursively compute the number of solutions to the remaining (k − 1) × n board, adding the numbers of solutions for every admissible assignment of the top row and returning the sum, which is being memoized. The base case is the trivial subproblem, which occurs for a 1 × n board. The number of solutions for this board is either zero or one, depending on whether the vector is a permutation of n / 2 (0, 1) and n / 2 (1, 0) pairs or not.

For example, in the first two boards shown above the sequences of vectors would be

```
((2, 2) (2, 2) (2, 2) (2, 2))       ((2, 2) (2, 2) (2, 2) (2, 2))     k = 4
  0      1      0      1              0      0      1      1

((1, 2) (2, 1) (1, 2) (2, 1))       ((1, 2) (1, 2) (2, 1) (2, 1))     k = 3
  1      0      1      0              0      0      1      1

((1, 1) (1, 1) (1, 1) (1, 1))       ((0, 2) (0, 2) (2, 0) (2, 0))     k = 2
  0      1      0      1              1      1      0      0

((0, 1) (1, 0) (0, 1) (1, 0))       ((0, 1) (0, 1) (1, 0) (1, 0))     k = 1
  1      0      1      0              1      1      0      0

((0, 0) (0, 0) (0, 0) (0, 0))       ((0, 0) (0, 0), (0, 0) (0, 0))

```

The number of solutions (sequence [A058527](//oeis.org/A058527) in the [OEIS](https://en.wikipedia.org/wiki/On-Line_Encyclopedia_of_Integer_Sequences)) is

:   1, 2, 90, 297200, 116963796250, 6736218287430460752, ...

Links to the MAPLE implementation of the dynamic programming approach may be found among the [external links](#External_links).

Consider a [checkerboard](https://en.wikipedia.org/wiki/Checkerboard) with *n* × *n* squares and a cost function `c(i, j)` which returns a cost associated with square `(i,j)` (`i` being the row, `j` being the column). For instance (on a 5 × 5 checkerboard),

| 5 | 6 | 7 | 4 | 7 | 8 |
| --- | --- | --- | --- | --- | --- |
| 4 | 7 | 6 | 1 | 1 | 4 |
| 3 | 3 | 5 | 7 | 8 | 2 |
| 2 | – | 6 | 7 | 0 | – |
| 1 | – | – | 5 | – | – |
|  | 1 | 2 | 3 | 4 | 5 |

Thus `c(1, 3) = 5`

Let us say there was a checker that could start at any square on the first rank (i.e., row) and you wanted to know the shortest path (the sum of the minimum costs at each visited rank) to get to the last rank; assuming the checker could move only diagonally left forward, diagonally right forward, or straight forward. That is, a checker on `(1,3)` can move to `(2,2)`, `(2,3)` or `(2,4)`.

| 5 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 4 |  |  |  |  |  |
| 3 |  |  |  |  |  |
| 2 |  | x | x | x |  |
| 1 |  |  | o |  |  |
|  | 1 | 2 | 3 | 4 | 5 |

This problem exhibits **optimal substructure**. That is, the solution to the entire problem relies on solutions to subproblems. Let us define a function `q(i, j)` as

:   *q*(*i*, *j*) = the minimum cost to reach square (*i*, *j*).

Starting at rank `n` and descending to rank `1`, we compute the value of this function for all the squares at each successive rank. Picking the square that holds the minimum value at each rank gives us the shortest path between rank `n` and rank `1`.

The function `q(i, j)` is equal to the minimum cost to get to any of the three squares below it (since those are the only squares that can reach it) plus `c(i, j)`. For instance:

| 5 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 4 |  |  | A |  |  |
| 3 |  | B | C | D |  |
| 2 |  |  |  |  |  |
| 1 |  |  |  |  |  |
|  | 1 | 2 | 3 | 4 | 5 |

:   q
    (
    A
    )
    =
    min
    (
    q
    (
    B
    )
    ,
    q
    (
    C
    )
    ,
    q
    (
    D
    )
    )
    +
    c
    (
    A
    )

    {\displaystyle q(A)=\min(q(B),q(C),q(D))+c(A)\,}
    ![{\displaystyle q(A)=\min(q(B),q(C),q(D))+c(A)\,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1f87cb5d1cb0b215fc90cb7057249c12ead674d6)

Now, let us define `q(i, j)` in somewhat more general terms:

:   q
    (
    i
    ,
    j
    )
    =


    {



    ∞

    j
    <
    1

     or 
    j
    >
    n


    c
    (
    i
    ,
    j
    )

    i
    =
    1


    min
    (
    q
    (
    i
    −
    1
    ,
    j
    −
    1
    )
    ,
    q
    (
    i
    −
    1
    ,
    j
    )
    ,
    q
    (
    i
    −
    1
    ,
    j
    +
    1
    )
    )
    +
    c
    (
    i
    ,
    j
    )


    otherwise.

    {\displaystyle q(i,j)={\begin{cases}\infty &j<1{\text{ or }}j>n\\c(i,j)&i=1\\\min(q(i-1,j-1),q(i-1,j),q(i-1,j+1))+c(i,j)&{\text{otherwise.}}\end{cases}}}
    ![{\displaystyle q(i,j)={\begin{cases}\infty &j<1{\text{ or }}j>n\\c(i,j)&i=1\\\min(q(i-1,j-1),q(i-1,j),q(i-1,j+1))+c(i,j)&{\text{otherwise.}}\end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ce1c92a173a4aa6e57116cd8a77069c4e87cff0)

The first line of this equation deals with a board modeled as squares indexed on `1` at the lowest bound and `n` at the highest bound. The second line specifies what happens at the first rank; providing a base case. The third line, the recursion, is the important part. It represents the `A,B,C,D` terms in the example. From this definition we can derive straightforward recursive code for `q(i, j)`. In the following pseudocode, `n` is the size of the board, `c(i, j)` is the cost function, and `min()` returns the minimum of a number of values:

```
function minCost(i, j)
    if j < 1 or j > n
        return infinity
    else if i = 1
        return c(i, j)
    else
        return min( minCost(i-1, j-1), minCost(i-1, j), minCost(i-1, j+1) ) + c(i, j)

```

This function only computes the path cost, not the actual path. We discuss the actual path below. This, like the Fibonacci-numbers example, is horribly slow because it too exhibits the **overlapping sub-problems** attribute. That is, it recomputes the same path costs over and over. However, we can compute it much faster in a bottom-up fashion if we store path costs in a two-dimensional array `q[i, j]` rather than using a function. This avoids recomputation; all the values needed for array `q[i, j]` are computed ahead of time only once. Precomputed values for `(i,j)` are simply looked up whenever needed.

We also need to know what the actual shortest path is. To do this, we use another array `p[i, j]`; a *predecessor array*. This array records the path to any square `s`. The predecessor of `s` is modeled as an offset relative to the index (in `q[i, j]`) of the precomputed path cost of `s`. To reconstruct the complete path, we lookup the predecessor of `s`, then the predecessor of that square, then the predecessor of that square, and so on recursively, until we reach the starting square. Consider the following pseudocode:

```
function computeShortestPathArrays()
    for x from 1 to n
        q[1, x] := c(1, x)
    for y from 1 to n
        q[y, 0]     := infinity
        q[y, n + 1] := infinity
    for y from 2 to n
        for x from 1 to n
            m := min(q[y-1, x-1], q[y-1, x], q[y-1, x+1])
            q[y, x] := m + c(y, x)
            if m = q[y-1, x-1]
                p[y, x] := -1
            else if m = q[y-1, x]
                p[y, x] :=  0
            else
                p[y, x] :=  1

```

Now the rest is a simple matter of finding the minimum and printing it.

```
function computeShortestPath()
    computeShortestPathArrays()
    minIndex := 1
    min := q[n, 1]
    for i from 2 to n
        if q[n, i] < min
            minIndex := i
            min := q[n, i]
    printPath(n, minIndex)

```

```
function printPath(y, x)
    print(x)
    print("<-")
    if y = 2
        print(x + p[y, x])
    else
        printPath(y-1, x + p[y, x])

```

In [genetics](https://en.wikipedia.org/wiki/Genetics), [sequence alignment](https://en.wikipedia.org/wiki/Sequence_alignment) is an important application where dynamic programming is essential. Typically, the problem consists of transforming one sequence into another using edit operations that replace, insert, or remove an element. Each operation has an associated cost, and the goal is to find the [sequence of edits with the lowest total cost](https://en.wikipedia.org/wiki/Edit_distance).

The problem can be stated naturally as a recursion, a sequence A is optimally edited into a sequence B by either:

1. inserting the first character of B, and performing an optimal alignment of A and the tail of B
2. deleting the first character of A, and performing the optimal alignment of the tail of A and B
3. replacing the first character of A with the first character of B, and performing optimal alignments of the tails of A and B.

The partial alignments can be tabulated in a matrix, where cell (i,j) contains the cost of the optimal alignment of A[1..i] to B[1..j]. The cost in cell (i,j) can be calculated by adding the cost of the relevant operations to the cost of its neighboring cells, and selecting the optimum.

Different variants exist, see [Smith–Waterman algorithm](https://en.wikipedia.org/wiki/Smith%E2%80%93Waterman_algorithm) and [Needleman–Wunsch algorithm](https://en.wikipedia.org/wiki/Needleman%E2%80%93Wunsch_algorithm).

### Tower of Hanoi puzzle

[[edit](/w/index.php?title=Dynamic_programming&action=edit&section=13)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tower_of_Hanoi.jpeg/330px-Tower_of_Hanoi.jpeg)](https://en.wikipedia.org/wiki/File:Tower_of_Hanoi.jpeg)

A model set of the Towers of Hanoi (with 8 disks)

[![](//upload.wikimedia.org/wikipedia/commons/6/60/Tower_of_Hanoi_4.gif)](https://en.wikipedia.org/wiki/File:Tower_of_Hanoi_4.gif)

An animated solution of the Tower of Hanoi puzzle for *T(4,3)*

The **[Tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi)** or **Towers of [Hanoi](https://en.wikipedia.org/wiki/Hanoi)** is a [mathematical game](https://en.wikipedia.org/wiki/Mathematical_game) or [puzzle](https://en.wikipedia.org/wiki/Puzzle). It consists of three rods, and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to another rod, obeying the following rules:

* Only one disk may be moved at a time.
* Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod.
* No disk may be placed on top of a smaller disk.

The dynamic programming solution consists of solving the [functional equation](https://en.wikipedia.org/wiki/Bellman_equation)

:   S(n,h,t) = S(n-1,h, not(h,t)) ; S(1,h,t) ; S(n-1,not(h,t),t)

where n denotes the number of disks to be moved, h denotes the home rod, t denotes the target rod, not(h,t) denotes the third rod (neither h nor t), ";" denotes concatenation, and

:   S(n, h, t) := solution to a problem consisting of n disks that are to be moved from rod h to rod t.

For n=1 the problem is trivial, namely S(1,h,t) = "move a disk from rod h to rod t" (there is only one disk left).

The number of moves required by this solution is 2*n* − 1. If the objective is to **maximize** the number of moves (without cycling) then the dynamic programming [functional equation](https://en.wikipedia.org/wiki/Bellman_equation) is slightly more complicated and 3*n* − 1 moves are required.

### Egg dropping puzzle

[[edit](/w/index.php?title=Dynamic_programming&action=edit&section=14)]

A famous [puzzle](https://en.wikipedia.org/wiki/Puzzle) relates to dropping eggs from a building to determine at which height they start to break. The following is a description involving N=2 eggs and a building with H=36 floors:

:   Suppose that we wish to know which stories in a 36-story building are safe to drop eggs from, and which will cause the eggs to break on landing (using [U.S. English](https://en.wikipedia.org/wiki/U.S._English) terminology, in which the first floor is at ground level). We make a few assumptions:

:   * An egg that survives a fall can be used again.
    * A broken egg must be discarded.
    * The effect of a fall is the same for all eggs.
    * If an egg breaks when dropped, then it would break if dropped from a higher window.
    * If an egg survives a fall, then it would survive a shorter fall.
    * It is not ruled out that the first-floor windows break eggs, nor is it ruled out that eggs can survive the 36th-floor windows.

:   If only one egg is available and we wish to be sure of obtaining the right result, the experiment can be carried out in only one way. Drop the egg from the first-floor window; if it survives, drop it from the second-floor window. Continue upward until it breaks. In the worst case, this method may require 36 droppings. Suppose 2 eggs are available. What is the lowest number of egg-droppings that is guaranteed to work in all cases?

To derive a dynamic programming [functional equation](https://en.wikipedia.org/wiki/Bellman_equation) for this puzzle, let the **state** of the dynamic programming model be a pair s = (n,k), where

:   *n* = number of test eggs available, *n* = 0, 1, 2, 3, ..., *N* − 1.
:   *k* = number of (consecutive) floors yet to be tested, *k* = 0, 1, 2, ..., *H* − 1.

For instance, *s* = (2,6) indicates that two test eggs are available and 6 (consecutive) floors are yet to be tested. The initial state of the process is *s* = (*N*,*H*) where *N* denotes the number of test eggs available at the commencement of the experiment. The process terminates either when there are no more test eggs (*n* = 0) or when *k* = 0, whichever occurs first. If termination occurs at state *s* = (0,*k*) and *k* > 0, then the test failed.

Now, let

:   *W*(*n*,*k*) = minimum number of trials required to identify the value of the critical floor under the worst-case scenario given that the process is in state *s* = (*n*,*k*).

Then it can be shown that

:   *W*(*n*,*k*) = 1 + min{max(*W*(*n* − 1, *x* − 1), *W*(*n*,*k* − *x*)): *x* = 1, 2, ..., *k* }

with *W*(*n*,0) = 0 for all *n* > 0 and *W*(1,*k*) = *k* for all *k*. It is easy to solve this equation iteratively by systematically increasing the values of *n* and *k*.

#### Faster DP solution using a different parametrization

[[edit](/w/index.php?title=Dynamic_programming&action=edit&section=15)]

Notice that the above solution takes 



O
(
n

k

2
)
{\displaystyle O(nk^{2})}
![{\displaystyle O(nk^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e60f5fcc5716f6e45e3431be1a095d2cf2334c31) time with a DP solution. This can be improved to 



O
(
n
k
log
⁡
k
)
{\displaystyle O(nk\log k)}
![{\displaystyle O(nk\log k)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/33f75ae11c64ad33234553ea222991a80503247b) time by binary searching on the optimal 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) in the above recurrence, since 



W
(
n
−
1
,
x
−
1
)
{\displaystyle W(n-1,x-1)}
![{\displaystyle W(n-1,x-1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a53848e9b3dd05012ea8b5477347646f6b8ef43f) is increasing in 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) while 



W
(
n
,
k
−
x
)
{\displaystyle W(n,k-x)}
![{\displaystyle W(n,k-x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fac88404ea16085c78fc2e3fcae7c1fb52dcd367) is decreasing in 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4), thus a local minimum of 



max
(
W
(
n
−
1
,
x
−
1
)
,
W
(
n
,
k
−
x
)
)
{\displaystyle \max(W(n-1,x-1),W(n,k-x))}
![{\displaystyle \max(W(n-1,x-1),W(n,k-x))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1c7a3a09b5c5deb068627bafdef14084f84edfb3) is a global minimum. Also, by storing the optimal 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) for each cell in the DP table and referring to its value for the previous cell, the optimal 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) for each cell can be found in constant time, improving it to 



O
(
n
k
)
{\displaystyle O(nk)}
![{\displaystyle O(nk)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/16feb8341ea75a7bb8b3445959360dde7686db10) time. However, there is an even faster solution that involves a different parametrization of the problem:

Let 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) be the total number of floors such that the eggs break when dropped from the 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40)th floor (The example above is equivalent to taking 



k
=
37
{\displaystyle k=37}
![{\displaystyle k=37}](https://wikimedia.org/api/rest_v1/media/math/render/svg/74c4bbfe0af3dae49f18c3bf3bdec17521863b78)).

Let 



m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc) be the minimum floor from which the egg must be dropped to be broken.

Let 



f
(
t
,
n
)
{\displaystyle f(t,n)}
![{\displaystyle f(t,n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e7804efe26a61f9352144d98bd351881de5eb4f3) be the maximum number of values of 



m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc) that are distinguishable using 



t
{\displaystyle t}
![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560) tries and 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) eggs.

Then 



f
(
t
,
0
)
=
f
(
0
,
n
)
=
1
{\displaystyle f(t,0)=f(0,n)=1}
![{\displaystyle f(t,0)=f(0,n)=1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7e9a652befc857d8b7dbb9d22f5ddc4d65115034) for all 



t
,
n
≥
0
{\displaystyle t,n\geq 0}
![{\displaystyle t,n\geq 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ba436d0fd3d25a6dbacc7e227a0e4558c12736a).

Let 



a
{\displaystyle a}
![{\displaystyle a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffd2487510aa438433a2579450ab2b3d557e5edc) be the floor from which the first egg is dropped in the optimal strategy.

If the first egg broke, 



m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc) is from 



1
{\displaystyle 1}
![{\displaystyle 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/92d98b82a3778f043108d4e20960a9193df57cbf) to 



a
{\displaystyle a}
![{\displaystyle a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffd2487510aa438433a2579450ab2b3d557e5edc) and distinguishable using at most 



t
−
1
{\displaystyle t-1}
![{\displaystyle t-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a215d9553945bb84b3b5a79cc796fb7d6e0629f0) tries and 



n
−
1
{\displaystyle n-1}
![{\displaystyle n-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fbd0b0f32b28f51962943ee9ede4fb34198a2521) eggs.

If the first egg did not break, 



m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc) is from 



a
+
1
{\displaystyle a+1}
![{\displaystyle a+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8028f23cfdcb108712e2bc53369305574afe820b) to 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) and distinguishable using 



t
−
1
{\displaystyle t-1}
![{\displaystyle t-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a215d9553945bb84b3b5a79cc796fb7d6e0629f0) tries and 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) eggs.

Therefore, 



f
(
t
,
n
)
=
f
(
t
−
1
,
n
−
1
)
+
f
(
t
−
1
,
n
)
{\displaystyle f(t,n)=f(t-1,n-1)+f(t-1,n)}
![{\displaystyle f(t,n)=f(t-1,n-1)+f(t-1,n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/31dff5e6c571fd709b1291926c85d0f83a3cc4a0).

Then the problem is equivalent to finding the minimum 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) such that 



f
(
x
,
n
)
≥
k
{\displaystyle f(x,n)\geq k}
![{\displaystyle f(x,n)\geq k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6d6a70ba7ff177596a4734983a7bd9bd6eabcc77).

To do so, we could compute 



{
f
(
t
,
i
)
:
0
≤
i
≤
n
}
{\displaystyle \{f(t,i):0\leq i\leq n\}}
![{\displaystyle \{f(t,i):0\leq i\leq n\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/15748c7135a71c9a615b1791257f385c465f1f8f) in order of increasing 



t
{\displaystyle t}
![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560), which would take 



O
(
n
x
)
{\displaystyle O(nx)}
![{\displaystyle O(nx)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8f99a08f754120e54250a58ad896644c9e03a3a7) time.

Thus, if we separately handle the case of 



n
=
1
{\displaystyle n=1}
![{\displaystyle n=1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d9ec7e1edc2e6d98f5aec2a39ae5f1c99d1e1425), the algorithm would take 



O
(
n


k
)
{\displaystyle O(n{\sqrt {k}})}
![{\displaystyle O(n{\sqrt {k}})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6e9eeb287cc1a095077af75af07ec794472f1e56) time.

But the recurrence relation can in fact be solved, giving 



f
(
t
,
n
)
=

∑

i
=
0

n



(

t
i

)
{\displaystyle f(t,n)=\sum \_{i=0}^{n}{\binom {t}{i}}}
![{\displaystyle f(t,n)=\sum _{i=0}^{n}{\binom {t}{i}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a4fa894a4458ee513e6188f9ecdc20ca32c6d700), which can be computed in 



O
(
n
)
{\displaystyle O(n)}
![{\displaystyle O(n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/34109fe397fdcff370079185bfdb65826cb5565a) time using the identity 






(

t

i
+
1

)
=



(

t
i

)



t
−
i

i
+
1
{\displaystyle {\binom {t}{i+1}}={\binom {t}{i}}{\frac {t-i}{i+1}}}
![{\displaystyle {\binom {t}{i+1}}={\binom {t}{i}}{\frac {t-i}{i+1}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ed0349d190cb4f5f7e913e1aec7a402cc4236a53) for all 



i
≥
0
{\displaystyle i\geq 0}
![{\displaystyle i\geq 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/405e1424cb9c4fc171c433a8e8f04b3e5938e366).

Since 



f
(
t
,
n
)
≤
f
(
t
+
1
,
n
)
{\displaystyle f(t,n)\leq f(t+1,n)}
![{\displaystyle f(t,n)\leq f(t+1,n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55590dc7d5f4e32400bb982d37a3ac34b13f0ac6) for all 



t
≥
0
{\displaystyle t\geq 0}
![{\displaystyle t\geq 0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/248525429e9cd266f53ab8c52d17bc206c546060), we can binary search on 



t
{\displaystyle t}
![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560) to find 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4), giving an 



O
(
n
log
⁡
k
)
{\displaystyle O(n\log k)}
![{\displaystyle O(n\log k)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/99e71cfbbb1dbd170050e63d7b342b07b4b014e2) algorithm.

### Matrix chain multiplication

[[edit](/w/index.php?title=Dynamic_programming&action=edit&section=16)]

Matrix chain multiplication is a well-known example that demonstrates utility of dynamic programming. For example, engineering applications often have to multiply a chain of matrices. It is not surprising to find matrices of large dimensions, for example 100×100. Therefore, our task is to multiply matrices ⁠




A

1
,

A

2
,
.
.
.
.

A

n
{\displaystyle A\_{1},A\_{2},....A\_{n}}
![{\displaystyle A_{1},A_{2},....A_{n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/700b99631b28d2edc6f6cbaa915154130b0af155)⁠. Matrix multiplication is not commutative, but is associative; and we can multiply only two matrices at a time. So, we can multiply this chain of matrices in many different ways, for example:

:   ((*A*1 × *A*2) × *A*3) × ... *An*

:   *A*1×(((*A*2×*A*3)× ... ) × *An*)

:   (*A*1 × *A*2) × (*A*3 × ... *An*)

and so on. There are numerous ways to multiply this chain of matrices. They will all produce the same final result, however they will take more or less time to compute, based on which particular matrices are multiplied. If matrix A has dimensions m×n and matrix B has dimensions n×q, then matrix C=A×B will have dimensions m×q, and will require m\*n\*q scalar multiplications (using a simplistic [matrix multiplication algorithm](https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm) for purposes of illustration).

For example, let us multiply matrices A, B and C. Let us assume that their dimensions are m×n, n×p, and p×s, respectively. Matrix A×B×C will be of size m×s and can be calculated in two ways shown below:

1. Ax(B×C) This order of matrix multiplication will require nps + mns scalar multiplications.
2. (A×B)×C This order of matrix multiplication will require mnp + mps scalar calculations.

Let us assume that m = 10, n = 100, p = 10 and s = 1000. So, the first way to multiply the chain will require 1,000,000 + 1,000,000 calculations. The second way will require only 10,000 + 100,000 calculations. Obviously, the second way is faster, and we should multiply the matrices using that arrangement of parenthesis.

Therefore, our conclusion is that the order of parenthesis matters, and that our task is to find the optimal order of parenthesis.

At this point, we have several choices, one of which is to design a dynamic programming algorithm that will split the problem into overlapping problems and calculate the optimal arrangement of parenthesis. The dynamic programming solution is presented below.

Let's call m[i,j] the minimum number of scalar multiplications needed to multiply a chain of matrices from matrix i to matrix j (i.e. Ai × .... × Aj, i.e. i<=j). We split the chain at some matrix k, such that i <= k < j, and try to find out which combination produces minimum m[i,j].

The formula is:

```
       if i = j, m[i,j]= 0
       if i < j, m[i,j]= min over all possible values of k (m[i,k]+m[k+1,j] + 
  
    
      
        
          p
          
            i
            −
            1
          
        
        ∗
        
          p
          
            k
          
        
        ∗
        
          p
          
            j
          
        
      
    
    {\displaystyle p_{i-1}*p_{k}*p_{j}}
  
) 

```

where *k* ranges from *i* to *j* − 1.

* ⁠




  p

  i
  −
  1
  {\displaystyle p\_{i-1}}
  ![{\displaystyle p_{i-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5b2743340775af529f3dc57879ef1b2c1170e5fc)⁠ is the row dimension of matrix i,
* ⁠




  p

  k
  {\displaystyle p\_{k}}
  ![{\displaystyle p_{k}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/01084a31964201514f3e6bd0136989e11ea6e58a)⁠ is the column dimension of matrix k,
* ⁠




  p

  j
  {\displaystyle p\_{j}}
  ![{\displaystyle p_{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/499e0821b28c43e9bc2a6360b937de535057bc62)⁠ is the column dimension of matrix j.

This formula can be coded as shown below, where input parameter "chain" is the chain of matrices, i.e. ⁠




A

1
,

A

2
,
.
.
.

A

n
{\displaystyle A\_{1},A\_{2},...A\_{n}}
![{\displaystyle A_{1},A_{2},...A_{n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/31c02495cac84da30921b34c436a691ce1593868)⁠:

```
function OptimalMatrixChainParenthesis(chain)
    n = length(chain)
    for i = 1, n
        m[i,i] = 0    // Since it takes no calculations to multiply one matrix
    for len = 2, n
        for i = 1, n - len + 1
            j = i + len -1
            m[i,j] = infinity      // So that the first calculation updates
            for k = i, j-1
                q = m[i, k] + m[k+1, j] + 
  
    
      
        
          p
          
            i
            −
            1
          
        
        ∗
        
          p
          
            k
          
        
        ∗
        
          p
          
            j
          
        
      
    
    {\displaystyle p_{i-1}*p_{k}*p_{j}}
  

                if q < m[i, j]     // The new order of parentheses is better than what we had
                    m[i, j] = q    // Update
                    s[i, j] = k    // Record which k to split on, i.e. where to place the parenthesis

```

So far, we have calculated values for all possible *m*[*i*, *j*], the minimum number of calculations to multiply a chain from matrix *i* to matrix *j*, and we have recorded the corresponding "split point"*s*[*i*, *j*]. For example, if we are multiplying chain *A*1×*A*2×*A*3×*A*4, and it turns out that *m*[1, 3] = 100 and *s*[1, 3] = 2, that means that the optimal placement of parenthesis for matrices 1 to 3 is ⁠



(

A

1
×

A

2
)
×

A

3
{\displaystyle (A\_{1}\times A\_{2})\times A\_{3}}
![{\displaystyle (A_{1}\times A_{2})\times A_{3}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/823afb23c31ccd1845769469c22be709f757b1a3)⁠ and to multiply those matrices will require 100 scalar calculations.

This algorithm will produce "tables" *m*[, ] and *s*[, ] that will have entries for all possible values of i and j. The final solution for the entire chain is m[1, n], with corresponding split at s[1, n]. Unraveling the solution will be recursive, starting from the top and continuing until we reach the base case, i.e. multiplication of single matrices.

Therefore, the next step is to actually split the chain, i.e. to place the parenthesis where they (optimally) belong. For this purpose we could use the following algorithm:

```
function PrintOptimalParenthesis(s, i, j)
    if i = j
        print "A"i
    else
        print "(" 
        PrintOptimalParenthesis(s, i, s[i, j]) 
        PrintOptimalParenthesis(s, s[i, j] + 1, j) 
        print ")"

```

Of course, this algorithm is not useful for actual multiplication. This algorithm is just a user-friendly way to see what the result looks like.

To actually multiply the matrices using the proper splits, we need the following algorithm:

```
   function MatrixChainMultiply(chain from 1 to n)       // returns the final matrix, i.e. A1×A2×... ×An
      OptimalMatrixChainParenthesis(chain from 1 to n)   // this will produce s[ . ] and m[ . ] "tables"
      OptimalMatrixMultiplication(s, chain from 1 to n)  // actually multiply

   function OptimalMatrixMultiplication(s, i, j)   // returns the result of multiplying a chain of matrices from Ai to Aj in optimal way
      if i < j
         // keep on splitting the chain and multiplying the matrices in left and right sides
         LeftSide = OptimalMatrixMultiplication(s, i, s[i, j])
         RightSide = OptimalMatrixMultiplication(s, s[i, j] + 1, j)
         return MatrixMultiply(LeftSide, RightSide) 
      else if i = j
         return Ai   // matrix at position i
      else 
         print "error, i <= j must hold"

    function MatrixMultiply(A, B)    // function that multiplies two matrices
      if columns(A) = rows(B) 
         for i = 1, rows(A)
            for j = 1, columns(B)
               C[i, j] = 0
               for k = 1, columns(A)
                   C[i, j] = C[i, j] + A[i, k]*B[k, j] 
               return C 
      else 
          print "error, incompatible dimensions."

```

## History of the name

[[edit](/w/index.php?title=Dynamic_programming&action=edit&section=17)]

The term *dynamic programming* was originally used in the 1940s by [Richard Bellman](https://en.wikipedia.org/wiki/Richard_Bellman) to describe the process of solving problems where one needs to find the best decisions one after another. By 1953, he refined this to the modern meaning, referring specifically to nesting smaller decision problems inside larger decisions, and the field was thereafter recognized by the [IEEE](https://en.wikipedia.org/wiki/IEEE) as a [systems analysis](https://en.wikipedia.org/wiki/Systems_analysis) and [engineering](https://en.wikipedia.org/wiki/Engineering) topic. Bellman's contribution is remembered in the name of the [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation), a central result of dynamic programming which restates an optimization problem in [recursive](https://en.wikipedia.org/wiki/Recursion_(computer_science)) form.

Bellman explains the reasoning behind the term *dynamic programming* in his autobiography, *Eye of the Hurricane: An Autobiography*:

> I spent the Fall quarter (of 1950) at [RAND](https://en.wikipedia.org/wiki/RAND_Corporation). My first task was to find a name for multistage decision processes. An interesting question is, "Where did the name, dynamic programming, come from?" The 1950s were not good years for mathematical research. We had a very interesting gentleman in Washington named [Wilson](https://en.wikipedia.org/wiki/Charles_Erwin_Wilson). He was Secretary of Defense, and he actually had a pathological fear and hatred of the word "research". I'm not using the term lightly; I'm using it precisely. His face would suffuse, he would turn red, and he would get violent if people used the term research in his presence. You can imagine how he felt, then, about the term mathematical. The RAND Corporation was employed by the Air Force, and the Air Force had Wilson as its boss, essentially. Hence, I felt I had to do something to shield Wilson and the Air Force from the fact that I was really doing mathematics inside the RAND Corporation. What title, what name, could I choose? In the first place I was interested in planning, in decision making, in thinking. But planning, is not a good word for various reasons. I decided therefore to use the word "programming". I wanted to get across the idea that this was dynamic, this was multistage, this was time-varying. I thought, let's kill two birds with one stone. Let's take a word that has an absolutely precise meaning, namely dynamic, in the classical physical sense. It also has a very interesting property as an adjective, and that is it's impossible to use the word dynamic in a pejorative sense. Try thinking of some combination that will possibly give it a pejorative meaning. It's impossible. Thus, I thought dynamic programming was a good name. It was something not even a Congressman could object to. So I used it as an umbrella for my activities.

— Richard Bellman, *Eye of the Hurricane: An Autobiography* (1984, page 159)

The word *dynamic* was chosen by Bellman to capture the time-varying aspect of the problems, and because it sounded impressive. The word *programming* referred to the use of the method to find an optimal *program*, in the sense of a military schedule for training or logistics. This usage is the same as that in the phrases *[linear programming](https://en.wikipedia.org/wiki/Linear_programming)* and *mathematical programming*, a synonym for [mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization).

The above explanation of the origin of the term may be inaccurate: According to Russell and Norvig, the above story "cannot be strictly true, because his first paper using the term (Bellman, 1952) appeared before Wilson became Secretary of Defense in 1953." Also, [Harold J. Kushner](https://en.wikipedia.org/wiki/Harold_J._Kushner) stated in a speech that, "On the other hand, when I asked [Bellman] the same question, he replied that he was trying to upstage [Dantzig's](https://en.wikipedia.org/wiki/George_Dantzig) linear programming by adding dynamic. Perhaps both motivations were true."

1. ^ [***a***](#cite_ref-:0_1-0) [***b***](#cite_ref-:0_1-1) Cormen, T. H.; Leiserson, C. E.; Rivest, R. L.; Stein, C. (2001), Introduction to Algorithms (2nd ed.), MIT Press & McGraw–Hill, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-03293-7](https://en.wikipedia.org/wiki/Special:BookSources/0-262-03293-7) . pp. 344.
2. **[^](#cite_ref-2)** [Kamien, M. I.](https://en.wikipedia.org/wiki/Morton_Kamien); [Schwartz, N. L.](https://en.wikipedia.org/wiki/Nancy_Schwartz) (1991). [*Dynamic Optimization: The Calculus of Variations and Optimal Control in Economics and Management*](https://books.google.com/books?id=0IoGUn8wjDQC&pg=PA261) (Second ed.). New York: Elsevier. p. 261. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-444-01609-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-444-01609-6).
3. **[^](#cite_ref-3)** Kirk, Donald E. (1970). [*Optimal Control Theory: An Introduction*](https://books.google.com/books?id=fCh2SAtWIdwC&pg=PA94). Englewood Cliffs, NJ: Prentice-Hall. pp. 94–95. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-638098-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-638098-6).
4. **[^](#cite_ref-4)** ["Algorithms by Jeff Erickson"](https://jeffe.cs.illinois.edu/teaching/algorithms/). *jeffe.cs.illinois.edu*. Retrieved 2024-12-06.
5. **[^](#cite_ref-5)** ["M. Memo"](http://www.jsoftware.com/help/dictionary/dmcapdot.htm). *J Vocabulary*. J Software. Retrieved 28 October 2011.
6. **[^](#cite_ref-6)** Delisi, Charles (July 1974), "Cooperative phenomena in homopolymers: An alternative formulation of the partition function", *Biopolymers*, **13** (7): 1511–1512, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/bip.1974.360130719](https://doi.org/10.1002%2Fbip.1974.360130719)
7. **[^](#cite_ref-7)** Gurskiĭ, G. V.; Zasedatelev, A. S. (September 1978), "Precise relationships for calculating the binding of regulatory proteins and other lattice ligands in double-stranded polynucleotides", *Biofizika*, **23** (5): 932–946, [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [698271](https://pubmed.ncbi.nlm.nih.gov/698271)
8. **[^](#cite_ref-sniedovich_06_8-0)** Sniedovich, M. (2006), ["Dijkstra's algorithm revisited: the dynamic programming connexion"](http://matwbn.icm.edu.pl/ksiazki/cc/cc35/cc3536.pdf) (PDF), *Journal of Control and Cybernetics*, **35** (3): 599–620. [Online version of the paper with interactive computational modules.](http://www.ifors.ms.unimelb.edu.au/tutorial/dijkstra_new/index.html)
9. **[^](#cite_ref-denardo_03_9-0)** Denardo, E.V. (2003), *Dynamic Programming: Models and Applications*, Mineola, NY: [Dover Publications](https://en.wikipedia.org/wiki/Dover_Publications), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-486-42810-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-486-42810-9)
10. **[^](#cite_ref-sniedovich_10_10-0)** Sniedovich, M. (2010), *Dynamic Programming: Foundations and Principles*, [Taylor & Francis](https://en.wikipedia.org/wiki/Taylor_%26_Francis), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-8247-4099-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-8247-4099-3)
11. **[^](#cite_ref-11)** [Dijkstra, E. W.](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) (December 1959). "A note on two problems in connexion with graphs". *Numerische Mathematik*. **1** (1): 269–271. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF01386390](https://doi.org/10.1007%2FBF01386390).
12. ^ [***a***](#cite_ref-Eddy_12-0) [***b***](#cite_ref-Eddy_12-1) [Eddy, S. R.](https://en.wikipedia.org/wiki/Sean_Eddy) (2004). "What is Dynamic Programming?". *Nature Biotechnology*. **22** (7): 909–910. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/nbt0704-909](https://doi.org/10.1038%2Fnbt0704-909). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [15229554](https://pubmed.ncbi.nlm.nih.gov/15229554). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [5352062](https://api.semanticscholar.org/CorpusID:5352062).
13. **[^](#cite_ref-13)** Moshe Sniedovich (2002), "OR/MS Games: 2. The Towers of Hanoi Problem", *INFORMS Transactions on Education*, **3** (1): 34–51, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1287/ited.3.1.45](https://doi.org/10.1287%2Fited.3.1.45).
14. **[^](#cite_ref-14)** Konhauser J.D.E., Velleman, D., and Wagon, S. (1996). [Which way did the Bicycle Go?](https://books.google.com/books?id=ElSi5V5uS2MC) Dolciani Mathematical Expositions – No 18. [The Mathematical Association of America](https://en.wikipedia.org/wiki/The_Mathematical_Association_of_America).
15. **[^](#cite_ref-sniedovich_03_15-0)** Sniedovich, Moshe (2003). ["OR/MS Games: 4. The Joy of Egg-Dropping in Braunschweig and Hong Kong"](https://doi.org/10.1287%2Fited.4.1.48). *INFORMS Transactions on Education*. **4** (1): 48–64. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1287/ited.4.1.48](https://doi.org/10.1287%2Fited.4.1.48).
16. **[^](#cite_ref-16)** Dean Connable Wills, [*Connections between combinatorics of permutations and algorithms and geometry*](https://ir.library.oregonstate.edu/xmlui/handle/1957/11929?show=full)
17. **[^](#cite_ref-17)** Stuart Dreyfus. ["Richard Bellman on the birth of Dynamical Programming"](https://web.archive.org/web/20050110161049/http://www.wu-wien.ac.at/usr/h99c/h9951826/bellman_dynprog.pdf).
18. **[^](#cite_ref-18)** Nocedal, J.; Wright, S. J. (2006). [*Numerical Optimization*](https://archive.org/details/numericaloptimiz00noce_639). Springer. p. [9](https://archive.org/details/numericaloptimiz00noce_639/page/n21). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780387303031](https://en.wikipedia.org/wiki/Special:BookSources/9780387303031).
19. **[^](#cite_ref-19)** Russell, S.; Norvig, P. (2009). *Artificial Intelligence: A Modern Approach* (3rd ed.). Prentice Hall. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-207148-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-207148-2).
20. **[^](#cite_ref-20)** [Kushner, Harold J.](https://en.wikipedia.org/wiki/Harold_J._Kushner) (2004-07-01). ["Richard E. Bellman Control Heritage Award"](https://web.archive.org/web/20141019015133/http://a2c2.org/awards/richard-e-bellman-control-heritage-award/2004-00-00t000000/harold-j-kushner). Archived from [the original](http://a2c2.org/awards/richard-e-bellman-control-heritage-award-0) on 2014-10-19.

* Adda, Jerome; Cooper, Russell (2003), [*Dynamic Economics*](https://mitpress.mit.edu/books/dynamic-economics), MIT Press, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780262012010](https://en.wikipedia.org/wiki/Special:BookSources/9780262012010). An accessible introduction to dynamic programming in economics. [MATLAB code for the book](https://sites.google.com/site/coopereconomics/matlab-programs) [Archived](https://web.archive.org/web/20201009085820/https://sites.google.com/site/coopereconomics/matlab-programs) 2020-10-09 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine).
* [Bellman, Richard](https://en.wikipedia.org/wiki/Richard_Bellman) (1954), "The theory of dynamic programming", *[Bulletin of the American Mathematical Society](https://en.wikipedia.org/wiki/Bulletin_of_the_American_Mathematical_Society)*, **60** (6): 503–516, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1090/S0002-9904-1954-09848-8](https://doi.org/10.1090%2FS0002-9904-1954-09848-8), [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [0067459](https://mathscinet.ams.org/mathscinet-getitem?mr=0067459). Includes an extensive bibliography of the literature in the area, up to the year 1954.
* [Bellman, Richard](https://en.wikipedia.org/wiki/Richard_Bellman) (1957), *Dynamic Programming*, Princeton University Press. Dover paperback edition (2003), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-486-42809-5](https://en.wikipedia.org/wiki/Special:BookSources/0-486-42809-5).
* [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ronald_L._Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2001), [*Introduction to Algorithms*](https://en.wikipedia.org/wiki/Introduction_to_Algorithms) (2nd ed.), MIT Press & McGraw–Hill, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-03293-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-03293-3). Especially pp. 323–69.
* Dreyfus, Stuart E.; Law, Averill M. (1977), *The Art and Theory of Dynamic Programming*, Academic Press, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-12-221860-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-12-221860-6).
* Giegerich, R.; Meyer, C.; Steffen, P. (2004), ["A Discipline of Dynamic Programming over Sequence Data"](http://bibiserv.techfak.uni-bielefeld.de/adp/ps/GIE-MEY-STE-2004.pdf) (PDF), *Science of Computer Programming*, **51** (3): 215–263, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.scico.2003.12.005](https://doi.org/10.1016%2Fj.scico.2003.12.005).
* Meyn, Sean (2007), [*Control Techniques for Complex Networks*](https://web.archive.org/web/20100619011046/https://netfiles.uiuc.edu/meyn/www/spm_files/CTCN/CTCN.html), Cambridge University Press, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-521-88441-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-88441-9), archived from [the original](https://netfiles.uiuc.edu/meyn/www/spm_files/CTCN/CTCN.html) on 2010-06-19.
* Sritharan, S. S. (1991). "Dynamic Programming of the Navier-Stokes Equations". *Systems and Control Letters*. **16** (4): 299–307. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0167-6911(91)90020-f](https://doi.org/10.1016%2F0167-6911%2891%2990020-f).
* [Stokey, Nancy](https://en.wikipedia.org/wiki/Nancy_Stokey); [Lucas, Robert E.](https://en.wikipedia.org/wiki/Robert_E._Lucas); [Prescott, Edward](https://en.wikipedia.org/wiki/Edward_Prescott) (1989), *Recursive Methods in Economic Dynamics*, Harvard Univ. Press, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-674-75096-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-674-75096-8).