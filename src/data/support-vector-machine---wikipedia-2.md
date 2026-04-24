# Support vector machine - Wikipedia

Source: https://en.wikipedia.org/wiki/Support_vector_machine

---

Set of methods for supervised statistical learning

In [machine learning](https://en.wikipedia.org/wiki/Machine_learning), **support vector machines** (**SVMs**, also **support vector networks**) are [supervised](https://en.wikipedia.org/wiki/Supervised_learning) [max-margin](https://en.wikipedia.org/wiki/Maximum-margin_hyperplane) models with associated learning [algorithms](https://en.wikipedia.org/wiki/Algorithm) that analyze data for [classification](https://en.wikipedia.org/wiki/Statistical_classification) and [regression analysis](https://en.wikipedia.org/wiki/Regression_analysis). Developed at [AT&T Bell Laboratories](https://en.wikipedia.org/wiki/AT%26T_Bell_Laboratories), SVMs are one of the most studied models, being based on statistical learning frameworks of [VC theory](https://en.wikipedia.org/wiki/VC_theory) proposed by [Vapnik](https://en.wikipedia.org/wiki/Vladimir_Vapnik) (1982, 1995) and [Chervonenkis](https://en.wikipedia.org/wiki/Alexey_Chervonenkis) (1974).

In addition to performing [linear classification](https://en.wikipedia.org/wiki/Linear_classifier), SVMs can efficiently perform non-linear classification using the [*kernel trick*](https://en.wikipedia.org/wiki/Kernel_method#Mathematics:_the_kernel_trick), representing the data only through a set of pairwise similarity comparisons between the original data points using a kernel function, which transforms them into coordinates in a higher-dimensional [feature space](https://en.wikipedia.org/wiki/Feature_space). Thus, SVMs use the kernel trick to implicitly map their inputs into high-dimensional feature spaces, where linear classification can be performed. Being max-margin models, SVMs are resilient to noisy data (e.g., misclassified examples). SVMs can also be used for [regression](https://en.wikipedia.org/wiki/Regression_analysis) tasks, where the objective becomes 



ϵ
{\displaystyle \epsilon }
![{\displaystyle \epsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3837cad72483d97bcdde49c85d3b7b859fb3fd2)-sensitive.

The support vector clustering algorithm, created by [Hava Siegelmann](https://en.wikipedia.org/wiki/Hava_Siegelmann) and [Vladimir Vapnik](https://en.wikipedia.org/wiki/Vladimir_Vapnik), applies the statistics of support vectors, developed in the support vector machines algorithm, to categorize unlabeled data.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*] These data sets require [unsupervised learning](https://en.wikipedia.org/wiki/Unsupervised_learning) approaches, which attempt to find natural [clustering of the data](https://en.wikipedia.org/wiki/Cluster_analysis) into groups, and then to map new data according to these clusters.

The popularity of SVMs is likely due to their amenability to theoretical analysis, and their flexibility in being applied to a wide variety of tasks, including [structured prediction](https://en.wikipedia.org/wiki/Structured_prediction) problems. It is not clear that SVMs have better predictive performance than other linear models, such as [logistic regression](https://en.wikipedia.org/wiki/Logistic_regression) and [linear regression](https://en.wikipedia.org/wiki/Linear_regression).

[![](//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Svm_separating_hyperplanes_%28SVG%29.svg/250px-Svm_separating_hyperplanes_%28SVG%29.svg.png)](https://en.wikipedia.org/wiki/File:Svm_separating_hyperplanes_(SVG).svg)

H1 does not separate the classes. H2 does, but only with a small margin. H3 separates them with the maximal margin.

[Classifying data](https://en.wikipedia.org/wiki/Statistical_classification) is a common task in [machine learning](https://en.wikipedia.org/wiki/Machine_learning).
Suppose some given data points each belong to one of two classes, and the goal is to decide which class a *new* [data point](https://en.wikipedia.org/wiki/Data_point) will be in. In the case of support vector machines, a data point is viewed as a 



p
{\displaystyle p}
![{\displaystyle p}](https://wikimedia.org/api/rest_v1/media/math/render/svg/81eac1e205430d1f40810df36a0edffdc367af36)-dimensional vector (a list of 



p
{\displaystyle p}
![{\displaystyle p}](https://wikimedia.org/api/rest_v1/media/math/render/svg/81eac1e205430d1f40810df36a0edffdc367af36) numbers), and we want to know whether we can separate such points with a 



(
p
−
1
)
{\displaystyle (p-1)}
![{\displaystyle (p-1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ac90749c06d21ccfffb53161ea2ef2a9d7ef4e7e)-dimensional [hyperplane](https://en.wikipedia.org/wiki/Hyperplane). This is called a [linear classifier](https://en.wikipedia.org/wiki/Linear_classifier). There are many hyperplanes that might classify the data. One reasonable choice as the best hyperplane is the one that represents the largest separation, or [margin](https://en.wikipedia.org/wiki/Margin_(machine_learning)), between the two classes. So we choose the hyperplane so that the distance from it to the nearest data point on each side is maximized. If such a hyperplane exists, it is known as the *[maximum-margin hyperplane](https://en.wikipedia.org/wiki/Maximum-margin_hyperplane)* and the linear classifier it defines is known as a *maximum-[margin classifier](https://en.wikipedia.org/wiki/Margin_classifier)*; or equivalently, the *[perceptron of optimal stability](https://en.wikipedia.org/wiki/Perceptron#Convergence)*.

More formally, a support vector machine constructs a [hyperplane](https://en.wikipedia.org/wiki/Hyperplane) or set of hyperplanes in a high or infinite-dimensional space, which can be used for [classification](https://en.wikipedia.org/wiki/Statistical_classification), [regression](https://en.wikipedia.org/wiki/Regression_analysis), or other tasks like outlier detection. Intuitively, a good separation is achieved by the hyperplane that has the largest distance to the nearest training-data point of any class (so-called functional margin), since in general the larger the margin, the lower the [generalization error](https://en.wikipedia.org/wiki/Generalization_error) of the classifier. A lower [generalization error](https://en.wikipedia.org/wiki/Generalization_error) means that the implementer is less likely to experience [overfitting](https://en.wikipedia.org/wiki/Overfitting).

Whereas the original problem may be stated in a finite-dimensional space, it often happens that the sets to discriminate are not [linearly separable](https://en.wikipedia.org/wiki/Linear_separability) in that space. For this reason, it was proposed that the original finite-dimensional space be mapped into a much higher-dimensional space, presumably making the separation easier in that space. To keep the computational load reasonable, the mappings used by SVM schemes are designed to ensure that [dot products](https://en.wikipedia.org/wiki/Dot_product) of pairs of input data vectors may be computed easily in terms of the variables in the original space, by defining them in terms of a [kernel function](https://en.wikipedia.org/wiki/Positive-definite_kernel) 



k
(
x
,
y
)
{\displaystyle k(x,y)}
![{\displaystyle k(x,y)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7d18e060406f195657b2151490ca3d491f7a7ce0) selected to suit the problem. The hyperplanes in the higher-dimensional space are defined as the set of points whose dot product with a vector in that space is constant, where such a set of vectors is an orthogonal (and thus minimal) set of vectors that defines a hyperplane. The vectors defining the hyperplanes can be chosen to be linear combinations with parameters 




α

i
{\displaystyle \alpha \_{i}}
![{\displaystyle \alpha _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3b1fb627423abe4988b7ed88d4920bf1ec074790) of images of [feature vectors](https://en.wikipedia.org/wiki/Feature_vector) 




x

i
{\displaystyle x\_{i}}
![{\displaystyle x_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e87000dd6142b81d041896a30fe58f0c3acb2158) that occur in the data base. With this choice of a hyperplane, the points 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) in the [feature space](https://en.wikipedia.org/wiki/Feature_space) that are mapped into the hyperplane are defined by the relation 





∑

i

α

i
k
(

x

i
,
x
)
=

constant
.
{\displaystyle \textstyle \sum \_{i}\alpha \_{i}k(x\_{i},x)={\text{constant}}.}
![{\displaystyle \textstyle \sum _{i}\alpha _{i}k(x_{i},x)={\text{constant}}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a6f34ab5c46f89828183543c7ec44942e5cc3cff) Note that if 



k
(
x
,
y
)
{\displaystyle k(x,y)}
![{\displaystyle k(x,y)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7d18e060406f195657b2151490ca3d491f7a7ce0) becomes small as 



y
{\displaystyle y}
![{\displaystyle y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8a6208ec717213d4317e666f1ae872e00620a0d) grows further away from 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4), each term in the sum measures the degree of closeness of the test point 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) to the corresponding data base point 




x

i
{\displaystyle x\_{i}}
![{\displaystyle x_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e87000dd6142b81d041896a30fe58f0c3acb2158). In this way, the sum of kernels above can be used to measure the relative nearness of each test point to the data points originating in one or the other of the sets to be discriminated. Note the fact that the set of points 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) mapped into any hyperplane can be quite convoluted as a result, allowing much more complex discrimination between sets that are not convex at all in the original space.

SVMs can be used to solve various real-world problems:

* SVMs are helpful in [text and hypertext categorization](https://en.wikipedia.org/wiki/Text_categorization), as their application can significantly reduce the need for labeled training instances in both the standard inductive and [transductive](https://en.wikipedia.org/wiki/Transduction_(machine_learning)) settings. Some methods for [shallow semantic parsing](https://en.wikipedia.org/wiki/Shallow_semantic_parsing) are based on support vector machines.
* [Classification of images](https://en.wikipedia.org/wiki/Image_classification) can also be performed using SVMs. Experimental results show that SVMs achieve significantly higher search accuracy than traditional query refinement schemes after just three to four rounds of relevance feedback. This is also true for [image segmentation](https://en.wikipedia.org/wiki/Image_segmentation) systems, including those using a modified version SVM that uses the privileged approach as suggested by Vapnik.
* Classification of satellite data like [SAR](https://en.wikipedia.org/wiki/Synthetic-aperture_radar) data using supervised SVM.
* Hand-written characters can be [recognized](https://en.wikipedia.org/wiki/Handwriting_recognition) using SVM.
* The SVM algorithm has been widely applied in the biological and other sciences. They have been used to classify proteins with up to 90% of the compounds classified correctly. [Permutation tests](https://en.wikipedia.org/wiki/Permutation_test) based on SVM weights have been suggested as a mechanism for interpretation of SVM models. Support vector machine weights have also been used to interpret SVM models in the past. Posthoc interpretation of support vector machine models in order to identify features used by the model to make predictions is a relatively new area of research with special significance in the biological sciences.

The original SVM algorithm was invented by [Vladimir N. Vapnik](https://en.wikipedia.org/wiki/Vladimir_N._Vapnik) and [Alexey Ya. Chervonenkis](https://en.wikipedia.org/wiki/Alexey_Chervonenkis) in 1964.[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*] In 1992, Bernhard Boser, [Isabelle Guyon](https://en.wikipedia.org/wiki/Isabelle_Guyon) and [Vladimir Vapnik](https://en.wikipedia.org/wiki/Vladimir_Vapnik) suggested a way to create nonlinear classifiers by applying the [kernel trick](https://en.wikipedia.org/wiki/Kernel_trick) to maximum-margin hyperplanes. The "soft margin" incarnation, as is commonly used in software packages, was proposed by [Corinna Cortes](https://en.wikipedia.org/wiki/Corinna_Cortes) and Vapnik in 1993 and published in 1995.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/7/72/SVM_margin.png/330px-SVM_margin.png)](https://en.wikipedia.org/wiki/File:SVM_margin.png)

Maximum-margin hyperplane and margins for an SVM trained with samples from two classes. Samples on the margin are called the support vectors.

We are given a training dataset of 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) points of the form

(


x

1
,

y

1
)
,
…
,
(


x

n
,

y

n
)
,
{\displaystyle (\mathbf {x} \_{1},y\_{1}),\ldots ,(\mathbf {x} \_{n},y\_{n}),}
![{\displaystyle (\mathbf {x} _{1},y_{1}),\ldots ,(\mathbf {x} _{n},y_{n}),}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3851f21b1d94ed988a19e869b7993ae18296837c)
where the 




y

i
{\displaystyle y\_{i}}
![{\displaystyle y_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/67d30d30b6c2dbe4d6f150d699de040937ecc95f) are either 1 or −1, each indicating the class to which the point 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) belongs. Each 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) is a 



p
{\displaystyle p}
![{\displaystyle p}](https://wikimedia.org/api/rest_v1/media/math/render/svg/81eac1e205430d1f40810df36a0edffdc367af36)-dimensional [real](https://en.wikipedia.org/wiki/Real_number) vector. We want to find the "maximum-margin hyperplane" that divides the group of points 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) for which 




y

i
=
1
{\displaystyle y\_{i}=1}
![{\displaystyle y_{i}=1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/13864bfc60110b9306a50b300d2d72b22fa1e371) from the group of points for which 




y

i
=
−
1
{\displaystyle y\_{i}=-1}
![{\displaystyle y_{i}=-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ba5a48e97f8d3c62221dc8eceb13d7c1a66ea89a), which is defined so that the distance between the hyperplane and the nearest point 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) from either group is maximized.

Any [hyperplane](https://en.wikipedia.org/wiki/Hyperplane) can be written as the set of points 




x
{\displaystyle \mathbf {x} }
![{\displaystyle \mathbf {x} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/32adf004df5eb0a8c7fd8c0b6b7405183c5a5ef2) satisfying

w


T

x
−
b
=
0
,
{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} -b=0,}
![{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} -b=0,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/25fc9adce0ffd096592cc24d4d6a58eca8d72dd0)
where 




w
{\displaystyle \mathbf {w} }
![{\displaystyle \mathbf {w} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/20795664b5b048744a2fd88977851104cc5816f8) is the (not necessarily normalized) [normal vector](https://en.wikipedia.org/wiki/Normal_(geometry)) to the hyperplane. This is much like [Hesse normal form](https://en.wikipedia.org/wiki/Hesse_normal_form), except that 




w
{\displaystyle \mathbf {w} }
![{\displaystyle \mathbf {w} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/20795664b5b048744a2fd88977851104cc5816f8) is not necessarily a unit vector. The parameter 






b

‖

w
‖
{\displaystyle {\tfrac {b}{\|\mathbf {w} \|}}}
![{\displaystyle {\tfrac {b}{\|\mathbf {w} \|}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/905afdc8c606dc1629d3145153f18b30f8d1cead) determines the offset of the hyperplane from the origin along the normal vector 




w
{\displaystyle \mathbf {w} }
![{\displaystyle \mathbf {w} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/20795664b5b048744a2fd88977851104cc5816f8).

Warning: most of the literature on the subject defines the bias so that

w


T

x
+
b
=
0.
{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} +b=0.}
![{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} +b=0.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/02050652c3997d41fd957dd8c20fa9a33304da1f)

If the training data is [linearly separable](https://en.wikipedia.org/wiki/Linearly_separable), we can select two parallel hyperplanes that separate the two classes of data, so that the distance between them is as large as possible. The region bounded by these two hyperplanes is called the "margin", and the maximum-margin hyperplane is the hyperplane that lies halfway between them. With a normalized or standardized dataset, these hyperplanes can be described by the equations

:   w


    T

    x
    −
    b
    =
    1
    {\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} -b=1}
    ![{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} -b=1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/93dcc30fa2db57f0ea6786dbf52359140ee95e0a) (anything on or above this boundary is of one class, with label 1)

and

:   w


    T

    x
    −
    b
    =
    −
    1
    {\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} -b=-1}
    ![{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} -b=-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3447b9ee30d70638aa895dca267f4a476e3aaf45) (anything on or below this boundary is of the other class, with label −1).

Geometrically, the distance between these two hyperplanes is 






2

‖

w
‖
{\displaystyle {\tfrac {2}{\|\mathbf {w} \|}}}
![{\displaystyle {\tfrac {2}{\|\mathbf {w} \|}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d9e7c92a256c5f7e31b06e7a547eb431f863000d), so to maximize the distance between the planes we want to minimize 



‖

w
‖
{\displaystyle \|\mathbf {w} \|}
![{\displaystyle \|\mathbf {w} \|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/16826300cd1c90dfa25572e6a1b3f3f5239557b7). The distance is computed using the [distance from a point to a plane](https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_plane) equation. We also have to prevent data points from falling into the margin, we add the following constraint: for each 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20) either

w


T


x

i
−
b
≥
1

,

 if 

y

i
=
1
,
{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-b\geq 1\,,{\text{ if }}y\_{i}=1,}
![{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b\geq 1\,,{\text{ if }}y_{i}=1,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/293ad9400f667cfa7b1ba4891ba586ba1f95b63e)
or

w


T


x

i
−
b
≤
−
1

,

 if 

y

i
=
−
1.
{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-b\leq -1\,,{\text{ if }}y\_{i}=-1.}
![{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b\leq -1\,,{\text{ if }}y_{i}=-1.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b81be87ecd083b666d1b41b70957e9e7a55b07f)
These constraints state that each data point must lie on the correct side of the margin.

This can be rewritten as

| y i ( w T x i − b ) ≥ 1 , for all 1 ≤ i ≤ n . {\displaystyle y_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b)\geq 1,\quad {\text{ for all }}1\leq i\leq n.} |  |  |
| --- | --- | --- |

We can put this together to get the optimization problem:

minimize


w
,

b




1
2
‖

w

‖

2




subject to



y

i
(


w

⊤


x

i
−
b
)
≥
1

∀
i
∈
{
1
,
…
,
n
}
{\displaystyle {\begin{aligned}&{\underset {\mathbf {w} ,\;b}{\operatorname {minimize} }}&&{\frac {1}{2}}\|\mathbf {w} \|^{2}\\&{\text{subject to}}&&y\_{i}(\mathbf {w} ^{\top }\mathbf {x} \_{i}-b)\geq 1\quad \forall i\in \{1,\dots ,n\}\end{aligned}}}
![{\displaystyle {\begin{aligned}&{\underset {\mathbf {w} ,\;b}{\operatorname {minimize} }}&&{\frac {1}{2}}\|\mathbf {w} \|^{2}\\&{\text{subject to}}&&y_{i}(\mathbf {w} ^{\top }\mathbf {x} _{i}-b)\geq 1\quad \forall i\in \{1,\dots ,n\}\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5864d6dee2beaf117b56da17c6f47e3e54d2b7d7)

The 




w
{\displaystyle \mathbf {w} }
![{\displaystyle \mathbf {w} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/20795664b5b048744a2fd88977851104cc5816f8) and 



b
{\displaystyle b}
![{\displaystyle b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f11423fbb2e967f986e36804a8ae4271734917c3) that solve this problem determine the final classifier, 




x
↦
sgn
⁡
(


w


T

x
−
b
)
{\displaystyle \mathbf {x} \mapsto \operatorname {sgn}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} -b)}
![{\displaystyle \mathbf {x} \mapsto \operatorname {sgn} (\mathbf {w} ^{\mathsf {T}}\mathbf {x} -b)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7383ad6f1f176a758e6d8fcd8b9bae95d95a2887), where 



sgn
⁡
(
⋅
)
{\displaystyle \operatorname {sgn}(\cdot )}
![{\displaystyle \operatorname {sgn} (\cdot )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3d470ff7790cfdb63cfeed4bb4cb8367146e9ae5) is the [sign function](https://en.wikipedia.org/wiki/Sign_function).

An important consequence of this geometric description is that the max-margin hyperplane is completely determined by those 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) that lie nearest to it (explained below). These 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) are called *support vectors*.

To extend SVM to cases in which the data are not linearly separable, the *[hinge loss](https://en.wikipedia.org/wiki/Hinge_loss)* function is helpful

max

(

0
,
1
−

y

i
(


w


T


x

i
−
b
)
)
.
{\displaystyle \max \left(0,1-y\_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-b)\right).}
![{\displaystyle \max \left(0,1-y_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b)\right).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a3ff19421060aed95bddead6de77743d48a67303)

Note that 




y

i
{\displaystyle y\_{i}}
![{\displaystyle y_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/67d30d30b6c2dbe4d6f150d699de040937ecc95f) is the *i*-th target (i.e., in this case, 1 or −1), and 





w


T


x

i
−
b
{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-b}
![{\displaystyle \mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bb10a3e93a7905dc61c06ad6b9c7d41625ad1918) is the *i*-th output.

This function is zero if the constraint in **[(1)](#math_1)** is satisfied, in other words, if 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) lies on the correct side of the margin. For data on the wrong side of the margin, the function's value is proportional to the distance from the margin.

The goal of the optimization then is to minimize:

‖

w

‖

2
+
C

[



1
n

∑

i
=
1

n
max

(

0
,
1
−

y

i
(


w


T


x

i
−
b
)
)
]
,
{\displaystyle \lVert \mathbf {w} \rVert ^{2}+C\left[{\frac {1}{n}}\sum \_{i=1}^{n}\max \left(0,1-y\_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-b)\right)\right],}
![{\displaystyle \lVert \mathbf {w} \rVert ^{2}+C\left[{\frac {1}{n}}\sum _{i=1}^{n}\max \left(0,1-y_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b)\right)\right],}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b5dc624654eef8f3a8994da013e19dd98774e28f)

where the parameter 



C
>
0
{\displaystyle C>0}
![{\displaystyle C>0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c84d4126c6df243734f9355927c026df6b0d3859) determines the trade-off between increasing the margin size and ensuring that the 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) lie on the correct side of the margin (Note we can add a weight to either term in the equation above). By deconstructing the hinge loss, this optimization problem can be formulated into the following:

minimize


w
,

b
,


ζ



‖

w

‖

2

2
+
C

∑

i
=
1

n

ζ

i




subject to



y

i
(


w

⊤


x

i
−
b
)
≥
1
−

ζ

i
,


ζ

i
≥
0

∀
i
∈
{
1
,
…
,
n
}
{\displaystyle {\begin{aligned}&{\underset {\mathbf {w} ,\;b,\;\mathbf {\zeta } }{\operatorname {minimize} }}&&\|\mathbf {w} \|\_{2}^{2}+C\sum \_{i=1}^{n}\zeta \_{i}\\&{\text{subject to}}&&y\_{i}(\mathbf {w} ^{\top }\mathbf {x} \_{i}-b)\geq 1-\zeta \_{i},\quad \zeta \_{i}\geq 0\quad \forall i\in \{1,\dots ,n\}\end{aligned}}}
![{\displaystyle {\begin{aligned}&{\underset {\mathbf {w} ,\;b,\;\mathbf {\zeta } }{\operatorname {minimize} }}&&\|\mathbf {w} \|_{2}^{2}+C\sum _{i=1}^{n}\zeta _{i}\\&{\text{subject to}}&&y_{i}(\mathbf {w} ^{\top }\mathbf {x} _{i}-b)\geq 1-\zeta _{i},\quad \zeta _{i}\geq 0\quad \forall i\in \{1,\dots ,n\}\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5dc1df921ad8a6eb065617d4445a697dabf323fc)

Thus, for large values of 



C
{\displaystyle C}
![{\displaystyle C}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fc55753007cd3c18576f7933f6f089196732029), it will behave similar to the hard-margin SVM, if the input data are linearly classifiable, but will still learn if a classification rule is viable or not.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Kernel_Machine.svg/250px-Kernel_Machine.svg.png)](https://en.wikipedia.org/wiki/File:Kernel_Machine.svg)

Kernel machine

The original maximum-margin hyperplane algorithm proposed by Vapnik in 1963 constructed a [linear classifier](https://en.wikipedia.org/wiki/Linear_classifier). However, in 1992, [Bernhard Boser](/w/index.php?title=Bernhard_Boser&action=edit&redlink=1), [Isabelle Guyon](https://en.wikipedia.org/wiki/Isabelle_Guyon) and [Vladimir Vapnik](https://en.wikipedia.org/wiki/Vladimir_Vapnik) suggested a way to create nonlinear classifiers by applying the [kernel trick](https://en.wikipedia.org/wiki/Kernel_trick) (originally proposed by Aizerman et al.) to maximum-margin hyperplanes. The kernel trick, where [dot products](https://en.wikipedia.org/wiki/Dot_product) are replaced by kernels, is easily derived in the dual representation of the SVM problem. This allows the algorithm to fit the maximum-margin hyperplane in a transformed [feature space](https://en.wikipedia.org/wiki/Feature_space). The transformation may be nonlinear and the transformed space high-dimensional; although the classifier is a hyperplane in the transformed feature space, it may be nonlinear in the original input space.

It is noteworthy that working in a higher-dimensional feature space increases the [generalization error](https://en.wikipedia.org/wiki/Generalization_error) of support vector machines, although given enough samples the algorithm still performs well.

Some common kernels include:

* [Polynomial (homogeneous)](https://en.wikipedia.org/wiki/Homogeneous_polynomial): 



  k
  (


  x

  i
  ,


  x

  j
  )
  =
  (


  x

  i
  ⋅


  x

  j

  )

  d
  {\displaystyle k(\mathbf {x} \_{i},\mathbf {x} \_{j})=(\mathbf {x} \_{i}\cdot \mathbf {x} \_{j})^{d}}
  ![{\displaystyle k(\mathbf {x} _{i},\mathbf {x} _{j})=(\mathbf {x} _{i}\cdot \mathbf {x} _{j})^{d}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6bf5a463f18d498ecd5a1dbad23c6a9cd5aefcac). Particularly, when 



  d
  =
  1
  {\displaystyle d=1}
  ![{\displaystyle d=1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/958b426c5ace91d4fb7f5a3becd7b21dba288d50), this becomes the linear kernel.
* [Polynomial](https://en.wikipedia.org/wiki/Polynomial_kernel) (inhomogeneous): 



  k
  (


  x

  i
  ,


  x

  j
  )
  =
  (


  x

  i
  ⋅


  x

  j
  +
  r

  )

  d
  {\displaystyle k(\mathbf {x} \_{i},\mathbf {x} \_{j})=(\mathbf {x} \_{i}\cdot \mathbf {x} \_{j}+r)^{d}}
  ![{\displaystyle k(\mathbf {x} _{i},\mathbf {x} _{j})=(\mathbf {x} _{i}\cdot \mathbf {x} _{j}+r)^{d}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1ae443fe0a081824fee0c2981f3315fc61c34f9d).
* Gaussian [radial basis function](https://en.wikipedia.org/wiki/Radial_basis_function_kernel): 



  k
  (


  x

  i
  ,


  x

  j
  )
  =
  exp
  ⁡

  (

  −
  γ


  ‖



  x

  i
  −


  x

  j
  ‖

  2
  )
  {\displaystyle k(\mathbf {x} \_{i},\mathbf {x} \_{j})=\exp \left(-\gamma \left\|\mathbf {x} \_{i}-\mathbf {x} \_{j}\right\|^{2}\right)}
  ![{\displaystyle k(\mathbf {x} _{i},\mathbf {x} _{j})=\exp \left(-\gamma \left\|\mathbf {x} _{i}-\mathbf {x} _{j}\right\|^{2}\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5f77e4fc13db08ef81b79ca6e2c3d279ecdec38a) for 



  γ
  >
  0
  {\displaystyle \gamma >0}
  ![{\displaystyle \gamma >0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/775a6435e4270cddf2cd7dcb486c20f7f4bb8cee). Sometimes parametrized using 



  γ
  =
  1

  /
  (
  2

  σ

  2
  )
  {\displaystyle \gamma =1/(2\sigma ^{2})}
  ![{\displaystyle \gamma =1/(2\sigma ^{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/895cbf591da9a695ffd1daec88a86ae0e50e8079).
* [Sigmoid function](https://en.wikipedia.org/wiki/Sigmoid_function) ([Hyperbolic tangent](https://en.wikipedia.org/wiki/Hyperbolic_tangent)): 



  k
  (


  x

  i
  ,


  x

  j
  )
  =
  tanh
  ⁡
  (
  κ


  x

  i
  ⋅


  x

  j
  +
  c
  )
  {\displaystyle k(\mathbf {x\_{i}} ,\mathbf {x\_{j}} )=\tanh(\kappa \mathbf {x} \_{i}\cdot \mathbf {x} \_{j}+c)}
  ![{\displaystyle k(\mathbf {x_{i}} ,\mathbf {x_{j}} )=\tanh(\kappa \mathbf {x} _{i}\cdot \mathbf {x} _{j}+c)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/410bae228c88d942888ee20927f337918a4578f9) for some (not every) 



  κ
  >
  0
  {\displaystyle \kappa >0}
  ![{\displaystyle \kappa >0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f2d8b6e1180bd22cf9e92b0295ede259cb80db64) and 



  c
  <
  0
  {\displaystyle c<0}
  ![{\displaystyle c<0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/26a48dc798956117afd8c429c39886678c0e7204).

The kernel is related to the transform 



φ
(


x

i
)
{\displaystyle \varphi (\mathbf {x} \_{i})}
![{\displaystyle \varphi (\mathbf {x} _{i})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/76218776e3a23ed7df619f158290314bbe6b800f) by the equation 



k
(


x

i
,


x

j
)
=
φ
(


x

i
)
⋅
φ
(


x

j
)
{\displaystyle k(\mathbf {x} \_{i},\mathbf {x} \_{j})=\varphi (\mathbf {x} \_{i})\cdot \varphi (\mathbf {x} \_{j})}
![{\displaystyle k(\mathbf {x} _{i},\mathbf {x} _{j})=\varphi (\mathbf {x} _{i})\cdot \varphi (\mathbf {x} _{j})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9bfee6115949f816688bf33929829d9dda810c9b). The value **w** is also in the transformed space, with 




w
=

∑

i

α

i

y

i
φ
(


x

i
)
{\textstyle \mathbf {w} =\sum \_{i}\alpha \_{i}y\_{i}\varphi (\mathbf {x} \_{i})}
![{\textstyle \mathbf {w} =\sum _{i}\alpha _{i}y_{i}\varphi (\mathbf {x} _{i})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c137c44077af44fafda3a182628ab924d5cedde7). Dot products with **w** for classification can again be computed by the kernel trick, i.e. 




w
⋅
φ
(

x
)
=

∑

i

α

i

y

i
k
(


x

i
,

x
)
{\textstyle \mathbf {w} \cdot \varphi (\mathbf {x} )=\sum \_{i}\alpha \_{i}y\_{i}k(\mathbf {x} \_{i},\mathbf {x} )}
![{\textstyle \mathbf {w} \cdot \varphi (\mathbf {x} )=\sum _{i}\alpha _{i}y_{i}k(\mathbf {x} _{i},\mathbf {x} )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/525bec723a8dc180e229457c2a92d13bf1f9e137).

## Computing the SVM classifier

[[edit](/w/index.php?title=Support_vector_machine&action=edit&section=8)]

Computing the (soft-margin) SVM classifier amounts to minimizing an expression of the form

| [ 1 n ∑ i = 1 n max ( 0 , 1 − y i ( w T x i − b ) ) ] + λ ‖ w ‖ 2 . {\displaystyle \left[{\frac {1}{n}}\sum _{i=1}^{n}\max \left(0,1-y_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b)\right)\right]+\lambda \\|\mathbf {w} \\|^{2}.} |  |  |
| --- | --- | --- |

We focus on the soft-margin classifier since, as noted above, choosing a sufficiently small value for 



λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) yields the hard-margin classifier for linearly classifiable input data. The classical approach, which involves reducing **[(2)](#math_2)** to a [quadratic programming](https://en.wikipedia.org/wiki/Quadratic_programming) problem, is detailed below. Then, more recent approaches such as sub-gradient descent and coordinate descent will be discussed.

Minimizing **[(2)](#math_2)** can be rewritten as a constrained optimization problem with a differentiable objective function in the following way.

For each 



i
∈
{
1
,

…
,

n
}
{\displaystyle i\in \{1,\,\ldots ,\,n\}}
![{\displaystyle i\in \{1,\,\ldots ,\,n\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2b16335bac1f89284abe32d0deb82682b38ecd94) we introduce a variable 




ζ

i
=
max

(

0
,
1
−

y

i
(


w


T


x

i
−
b
)
)
{\displaystyle \zeta \_{i}=\max \left(0,1-y\_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-b)\right)}
![{\displaystyle \zeta _{i}=\max \left(0,1-y_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b)\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/47ce7c7aac83c15e7ea058a27d477939d7da0b35). Note that 




ζ

i
{\displaystyle \zeta \_{i}}
![{\displaystyle \zeta _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/aab3f49d01957ab74f9581cd34ba72cc7efc4bdc) is the smallest nonnegative number satisfying 




y

i
(


w


T


x

i
−
b
)
≥
1
−

ζ

i
.
{\displaystyle y\_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-b)\geq 1-\zeta \_{i}.}
![{\displaystyle y_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b)\geq 1-\zeta _{i}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8c615ea126daa1a792ed2301275f12d45b5bfb92)

Thus we can rewrite the optimization problem as follows

minimize 


1
n

∑

i
=
1

n

ζ

i
+
λ
‖

w

‖

2




subject to 

y

i

(



w


T


x

i
−
b
)
≥
1
−

ζ

i


 and 


ζ

i
≥
0
,


for all 
i
.
{\displaystyle {\begin{aligned}&{\text{minimize }}{\frac {1}{n}}\sum \_{i=1}^{n}\zeta \_{i}+\lambda \|\mathbf {w} \|^{2}\\[0.5ex]&{\text{subject to }}y\_{i}\left(\mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-b\right)\geq 1-\zeta \_{i}\,{\text{ and }}\,\zeta \_{i}\geq 0,\,{\text{for all }}i.\end{aligned}}}
![{\displaystyle {\begin{aligned}&{\text{minimize }}{\frac {1}{n}}\sum _{i=1}^{n}\zeta _{i}+\lambda \|\mathbf {w} \|^{2}\\[0.5ex]&{\text{subject to }}y_{i}\left(\mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b\right)\geq 1-\zeta _{i}\,{\text{ and }}\,\zeta _{i}\geq 0,\,{\text{for all }}i.\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55f31fe5bcd9363b51ab5a4c4387202f32f047ee)

This is called the *primal* problem.

By solving for the [Lagrangian dual](https://en.wikipedia.org/wiki/Duality_(optimization)) of the above problem, one obtains the simplified problem

maximize


f
(

c

1
…

c

n
)
=

∑

i
=
1

n

c

i
−


1
2

∑

i
=
1

n

∑

j
=
1

n

y

i

c

i
(


x

i


T


x

j
)

y

j

c

j
,




subject to 

∑

i
=
1

n

c

i

y

i
=
0
,


and 
0
≤

c

i
≤


1

2
n
λ


for all 
i
.
{\displaystyle {\begin{aligned}&{\text{maximize}}\,\,f(c\_{1}\ldots c\_{n})=\sum \_{i=1}^{n}c\_{i}-{\frac {1}{2}}\sum \_{i=1}^{n}\sum \_{j=1}^{n}y\_{i}c\_{i}(\mathbf {x} \_{i}^{\mathsf {T}}\mathbf {x} \_{j})y\_{j}c\_{j},\\&{\text{subject to }}\sum \_{i=1}^{n}c\_{i}y\_{i}=0,\,{\text{and }}0\leq c\_{i}\leq {\frac {1}{2n\lambda }}\;{\text{for all }}i.\end{aligned}}}
![{\displaystyle {\begin{aligned}&{\text{maximize}}\,\,f(c_{1}\ldots c_{n})=\sum _{i=1}^{n}c_{i}-{\frac {1}{2}}\sum _{i=1}^{n}\sum _{j=1}^{n}y_{i}c_{i}(\mathbf {x} _{i}^{\mathsf {T}}\mathbf {x} _{j})y_{j}c_{j},\\&{\text{subject to }}\sum _{i=1}^{n}c_{i}y_{i}=0,\,{\text{and }}0\leq c_{i}\leq {\frac {1}{2n\lambda }}\;{\text{for all }}i.\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/90ec65706ca90aa8b5aad2d9bb4c767f5487cb56)

This is called the *dual* problem. Since the dual maximization problem is a quadratic function of the 




c

i
{\displaystyle c\_{i}}
![{\displaystyle c_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/01acb7953ba52c2aa44264b5d0f8fd223aa178a2) subject to linear constraints, it is efficiently solvable by [quadratic programming](https://en.wikipedia.org/wiki/Quadratic_programming) algorithms.

Here, the variables 




c

i
{\displaystyle c\_{i}}
![{\displaystyle c_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/01acb7953ba52c2aa44264b5d0f8fd223aa178a2) are defined such that

w
=

∑

i
=
1

n

c

i

y

i


x

i
.
{\displaystyle \mathbf {w} =\sum \_{i=1}^{n}c\_{i}y\_{i}\mathbf {x} \_{i}.}
![{\displaystyle \mathbf {w} =\sum _{i=1}^{n}c_{i}y_{i}\mathbf {x} _{i}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c4a707abda1076fbe1c29bb689034cd3cf0bdf9c)

Moreover, 




c

i
=
0
{\displaystyle c\_{i}=0}
![{\displaystyle c_{i}=0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06dbc33495a748ad5067cb6ff07cba653cffaf2c) exactly when 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) lies on the correct side of the margin, and 



0
<

c

i
<
(
2
n
λ

)

−
1
{\displaystyle 0<c\_{i}<(2n\lambda )^{-1}}
![{\displaystyle 0<c_{i}<(2n\lambda )^{-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ac59f447ace7b665f4bff3f047611b25eed26226) when 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) lies on the margin's boundary. It follows that 




w
{\displaystyle \mathbf {w} }
![{\displaystyle \mathbf {w} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/20795664b5b048744a2fd88977851104cc5816f8) can be written as a linear combination of the support vectors.

The offset, 



b
{\displaystyle b}
![{\displaystyle b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f11423fbb2e967f986e36804a8ae4271734917c3), can be recovered by finding an 





x

i
{\displaystyle \mathbf {x} \_{i}}
![{\displaystyle \mathbf {x} _{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57d2ef3df60acdb53bdf90535264041fea7231cd) on the margin's boundary and solving

y

i
(


w


T


x

i
−
b
)
=
1

⟺

b
=


w


T


x

i
−

y

i
.
{\displaystyle y\_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-b)=1\iff b=\mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-y\_{i}.}
![{\displaystyle y_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b)=1\iff b=\mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-y_{i}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b47ab52ef7a24e6fbf07ff7cc3b549677e4d8413)

(Note that 




y

i

−
1
=

y

i
{\displaystyle y\_{i}^{-1}=y\_{i}}
![{\displaystyle y_{i}^{-1}=y_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fdb3f52ac1c7e8a452147480c68ab77669cf6f95) since 




y

i
=
±
1
{\displaystyle y\_{i}=\pm 1}
![{\displaystyle y_{i}=\pm 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5603fac8c4038df3f4299323c0cbc0a311040424).)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Kernel_trick_idea.svg/250px-Kernel_trick_idea.svg.png)](https://en.wikipedia.org/wiki/File:Kernel_trick_idea.svg)

A training example of SVM with kernel given by φ((*a*, *b*)) = (*a*, *b*, *a*2 + *b*2)

Suppose now that we would like to learn a nonlinear classification rule which corresponds to a linear classification rule for the transformed data points 



φ
(


x

i
)
.
{\displaystyle \varphi (\mathbf {x} \_{i}).}
![{\displaystyle \varphi (\mathbf {x} _{i}).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/842b8ca2760c01ba5ed6552bb9e9d8174d7a45a3) Moreover, we are given a kernel function 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) which satisfies 



k
(


x

i
,


x

j
)
=
φ
(


x

i
)
⋅
φ
(


x

j
)
{\displaystyle k(\mathbf {x} \_{i},\mathbf {x} \_{j})=\varphi (\mathbf {x} \_{i})\cdot \varphi (\mathbf {x} \_{j})}
![{\displaystyle k(\mathbf {x} _{i},\mathbf {x} _{j})=\varphi (\mathbf {x} _{i})\cdot \varphi (\mathbf {x} _{j})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9bfee6115949f816688bf33929829d9dda810c9b).

We know the classification vector 




w
{\displaystyle \mathbf {w} }
![{\displaystyle \mathbf {w} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/20795664b5b048744a2fd88977851104cc5816f8) in the transformed space satisfies

w
=

∑

i
=
1

n

c

i

y

i
φ
(


x

i
)
,
{\displaystyle \mathbf {w} =\sum \_{i=1}^{n}c\_{i}y\_{i}\varphi (\mathbf {x} \_{i}),}
![{\displaystyle \mathbf {w} =\sum _{i=1}^{n}c_{i}y_{i}\varphi (\mathbf {x} _{i}),}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e117c6d8f5519f2fa57159033ff856f7a1b58221)

where, the 




c

i
{\displaystyle c\_{i}}
![{\displaystyle c_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/01acb7953ba52c2aa44264b5d0f8fd223aa178a2) are obtained by solving the optimization problem

maximize


f
(

c

1
…

c

n
)


=

∑

i
=
1

n

c

i
−


1
2

∑

i
=
1

n

∑

j
=
1

n

y

i

c

i
(
φ
(


x

i
)
⋅
φ
(


x

j
)
)

y

j

c

j




=

∑

i
=
1

n

c

i
−


1
2

∑

i
=
1

n

∑

j
=
1

n

y

i

c

i
k
(


x

i
,


x

j
)

y

j

c

j



subject to 

∑

i
=
1

n

c

i

y

i


=
0
,


and 
0
≤

c

i
≤


1

2
n
λ


for all 
i
.
{\displaystyle {\begin{aligned}{\text{maximize}}\,\,f(c\_{1}\ldots c\_{n})&=\sum \_{i=1}^{n}c\_{i}-{\frac {1}{2}}\sum \_{i=1}^{n}\sum \_{j=1}^{n}y\_{i}c\_{i}(\varphi (\mathbf {x} \_{i})\cdot \varphi (\mathbf {x} \_{j}))y\_{j}c\_{j}\\&=\sum \_{i=1}^{n}c\_{i}-{\frac {1}{2}}\sum \_{i=1}^{n}\sum \_{j=1}^{n}y\_{i}c\_{i}k(\mathbf {x} \_{i},\mathbf {x} \_{j})y\_{j}c\_{j}\\{\text{subject to }}\sum \_{i=1}^{n}c\_{i}y\_{i}&=0,\,{\text{and }}0\leq c\_{i}\leq {\frac {1}{2n\lambda }}\;{\text{for all }}i.\end{aligned}}}
![{\displaystyle {\begin{aligned}{\text{maximize}}\,\,f(c_{1}\ldots c_{n})&=\sum _{i=1}^{n}c_{i}-{\frac {1}{2}}\sum _{i=1}^{n}\sum _{j=1}^{n}y_{i}c_{i}(\varphi (\mathbf {x} _{i})\cdot \varphi (\mathbf {x} _{j}))y_{j}c_{j}\\&=\sum _{i=1}^{n}c_{i}-{\frac {1}{2}}\sum _{i=1}^{n}\sum _{j=1}^{n}y_{i}c_{i}k(\mathbf {x} _{i},\mathbf {x} _{j})y_{j}c_{j}\\{\text{subject to }}\sum _{i=1}^{n}c_{i}y_{i}&=0,\,{\text{and }}0\leq c_{i}\leq {\frac {1}{2n\lambda }}\;{\text{for all }}i.\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cbaeb993c2f9bcf9d046ce72bc9bd72e1a7ac05e)

The coefficients 




c

i
{\displaystyle c\_{i}}
![{\displaystyle c_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/01acb7953ba52c2aa44264b5d0f8fd223aa178a2) can be solved for using quadratic programming, as before. Again, we can find some index 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20) such that 



0
<

c

i
<
(
2
n
λ

)

−
1
{\displaystyle 0<c\_{i}<(2n\lambda )^{-1}}
![{\displaystyle 0<c_{i}<(2n\lambda )^{-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ac59f447ace7b665f4bff3f047611b25eed26226), so that 



φ
(


x

i
)
{\displaystyle \varphi (\mathbf {x} \_{i})}
![{\displaystyle \varphi (\mathbf {x} _{i})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/76218776e3a23ed7df619f158290314bbe6b800f) lies on the boundary of the margin in the transformed space, and then solve

b
=


w


T
φ
(


x

i
)
−

y

i


=

[


∑

j
=
1

n

c

j

y

j
φ
(


x

j
)
⋅
φ
(


x

i
)
]
−

y

i




=

[


∑

j
=
1

n

c

j

y

j
k
(


x

j
,


x

i
)
]
−

y

i
.
{\displaystyle {\begin{aligned}b=\mathbf {w} ^{\mathsf {T}}\varphi (\mathbf {x} \_{i})-y\_{i}&=\left[\sum \_{j=1}^{n}c\_{j}y\_{j}\varphi (\mathbf {x} \_{j})\cdot \varphi (\mathbf {x} \_{i})\right]-y\_{i}\\&=\left[\sum \_{j=1}^{n}c\_{j}y\_{j}k(\mathbf {x} \_{j},\mathbf {x} \_{i})\right]-y\_{i}.\end{aligned}}}
![{\displaystyle {\begin{aligned}b=\mathbf {w} ^{\mathsf {T}}\varphi (\mathbf {x} _{i})-y_{i}&=\left[\sum _{j=1}^{n}c_{j}y_{j}\varphi (\mathbf {x} _{j})\cdot \varphi (\mathbf {x} _{i})\right]-y_{i}\\&=\left[\sum _{j=1}^{n}c_{j}y_{j}k(\mathbf {x} _{j},\mathbf {x} _{i})\right]-y_{i}.\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/84f72e9d29c896b17db3c3640ed94a2395ef5ce8)

Finally,

z
↦
sgn
⁡
(


w


T
φ
(

z
)
−
b
)
=
sgn
⁡

(


[


∑

i
=
1

n

c

i

y

i
k
(


x

i
,

z
)
]
−
b
)
.
{\displaystyle \mathbf {z} \mapsto \operatorname {sgn}(\mathbf {w} ^{\mathsf {T}}\varphi (\mathbf {z} )-b)=\operatorname {sgn} \left(\left[\sum \_{i=1}^{n}c\_{i}y\_{i}k(\mathbf {x} \_{i},\mathbf {z} )\right]-b\right).}
![{\displaystyle \mathbf {z} \mapsto \operatorname {sgn} (\mathbf {w} ^{\mathsf {T}}\varphi (\mathbf {z} )-b)=\operatorname {sgn} \left(\left[\sum _{i=1}^{n}c_{i}y_{i}k(\mathbf {x} _{i},\mathbf {z} )\right]-b\right).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5ad3c52254fc4372047bc849648b0b8554e47ab4)

Recent algorithms for finding the SVM classifier include sub-gradient descent and coordinate descent. Both techniques have proven to offer significant advantages over the traditional approach when dealing with large, sparse datasets—sub-gradient methods are especially efficient when there are many training examples, and coordinate descent when the dimension of the feature space is high.

#### Sub-gradient descent

[[edit](/w/index.php?title=Support_vector_machine&action=edit&section=13)]

[Sub-gradient descent](https://en.wikipedia.org/wiki/Subgradient_method) algorithms for the SVM work directly with the expression

f
(

w
,
b
)
=

[



1
n

∑

i
=
1

n
max

(

0
,
1
−

y

i
(


w


T


x

i
−
b
)
)
]
+
λ
‖

w

‖

2
.
{\displaystyle f(\mathbf {w} ,b)=\left[{\frac {1}{n}}\sum \_{i=1}^{n}\max \left(0,1-y\_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} \_{i}-b)\right)\right]+\lambda \|\mathbf {w} \|^{2}.}
![{\displaystyle f(\mathbf {w} ,b)=\left[{\frac {1}{n}}\sum _{i=1}^{n}\max \left(0,1-y_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} _{i}-b)\right)\right]+\lambda \|\mathbf {w} \|^{2}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/458eaac43a20c151eb9c977c96b6df2d6066bae9)

Note that 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) is a [convex function](https://en.wikipedia.org/wiki/Convex_function) of 




w
{\displaystyle \mathbf {w} }
![{\displaystyle \mathbf {w} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/20795664b5b048744a2fd88977851104cc5816f8) and 



b
{\displaystyle b}
![{\displaystyle b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f11423fbb2e967f986e36804a8ae4271734917c3). As such, traditional [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent) (or [SGD](https://en.wikipedia.org/wiki/Stochastic_gradient_descent)) methods can be adapted, where instead of taking a step in the direction of the function's gradient, a step is taken in the direction of a vector selected from the function's [sub-gradient](https://en.wikipedia.org/wiki/Subderivative). This approach has the advantage that, for certain implementations, the number of iterations does not scale with 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b), the number of data points.

[Coordinate descent](https://en.wikipedia.org/wiki/Coordinate_descent) algorithms for the SVM work from the dual problem

maximize


f
(

c

1
…

c

n
)
=

∑

i
=
1

n

c

i
−


1
2

∑

i
=
1

n

∑

j
=
1

n

y

i

c

i
(

x

i
⋅

x

j
)

y

j

c

j
,




subject to 

∑

i
=
1

n

c

i

y

i
=
0
,


and 
0
≤

c

i
≤


1

2
n
λ


for all 
i
.
{\displaystyle {\begin{aligned}&{\text{maximize}}\,\,f(c\_{1}\ldots c\_{n})=\sum \_{i=1}^{n}c\_{i}-{\frac {1}{2}}\sum \_{i=1}^{n}\sum \_{j=1}^{n}y\_{i}c\_{i}(x\_{i}\cdot x\_{j})y\_{j}c\_{j},\\&{\text{subject to }}\sum \_{i=1}^{n}c\_{i}y\_{i}=0,\,{\text{and }}0\leq c\_{i}\leq {\frac {1}{2n\lambda }}\;{\text{for all }}i.\end{aligned}}}
![{\displaystyle {\begin{aligned}&{\text{maximize}}\,\,f(c_{1}\ldots c_{n})=\sum _{i=1}^{n}c_{i}-{\frac {1}{2}}\sum _{i=1}^{n}\sum _{j=1}^{n}y_{i}c_{i}(x_{i}\cdot x_{j})y_{j}c_{j},\\&{\text{subject to }}\sum _{i=1}^{n}c_{i}y_{i}=0,\,{\text{and }}0\leq c_{i}\leq {\frac {1}{2n\lambda }}\;{\text{for all }}i.\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ac2cee0a2ea9c264de1c4a81224489b666a2cb50)

For each 



i
∈
{
1
,

…
,

n
}
{\displaystyle i\in \{1,\,\ldots ,\,n\}}
![{\displaystyle i\in \{1,\,\ldots ,\,n\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2b16335bac1f89284abe32d0deb82682b38ecd94), iteratively, the coefficient 




c

i
{\displaystyle c\_{i}}
![{\displaystyle c_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/01acb7953ba52c2aa44264b5d0f8fd223aa178a2) is adjusted in the direction of 



∂
f

/
∂

c

i
{\displaystyle \partial f/\partial c\_{i}}
![{\displaystyle \partial f/\partial c_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/36ed38d3ef346e0e67f1c4e306c6dfad3ff4a03f). Then, the resulting vector of coefficients 



(

c

1
′
,

…
,


c

n
′
)
{\displaystyle (c\_{1}',\,\ldots ,\,c\_{n}')}
![{\displaystyle (c_{1}',\,\ldots ,\,c_{n}')}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6d62cfdb4596f4eb5ef503e371cda2673a21a417) is projected onto the nearest vector of coefficients that satisfies the given constraints. (Typically Euclidean distances are used.) The process is then repeated until a near-optimal vector of coefficients is obtained. The resulting algorithm is extremely fast in practice, although few performance guarantees have been proven.

## Empirical risk minimization

[[edit](/w/index.php?title=Support_vector_machine&action=edit&section=15)]

The soft-margin support vector machine described above is an example of an [empirical risk minimization](https://en.wikipedia.org/wiki/Empirical_risk_minimization) (ERM) algorithm for the *[hinge loss](https://en.wikipedia.org/wiki/Hinge_loss)*. Seen this way, support vector machines belong to a natural class of algorithms for statistical inference, and many of its unique features are due to the behavior of the hinge loss. This perspective can provide further insight into how and why SVMs work, and allow us to better analyze their statistical properties.

In supervised learning, one is given a set of training examples 




X

1
…

X

n
{\displaystyle X\_{1}\ldots X\_{n}}
![{\displaystyle X_{1}\ldots X_{n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/610b0e2fd0d0077a4ee6b4889c517df0bb247e9b) with labels 




y

1
…

y

n
{\displaystyle y\_{1}\ldots y\_{n}}
![{\displaystyle y_{1}\ldots y_{n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b4b3185c099fa9c8f71b67af0f06a5f1ca4eacb4), and wishes to predict 




y

n
+
1
{\displaystyle y\_{n+1}}
![{\displaystyle y_{n+1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6477fbeae2962cc55973c2298b8653cfd4f5e5d1) given 




X

n
+
1
{\displaystyle X\_{n+1}}
![{\displaystyle X_{n+1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4a5e2ebcd9ef3ffc3f45a5745884e0a46de672cf). To do so one forms a [hypothesis](https://en.wikipedia.org/wiki/Hypothesis), 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61), such that 



f
(

X

n
+
1
)
{\displaystyle f(X\_{n+1})}
![{\displaystyle f(X_{n+1})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/94acd214551f2f3dc0d340774e03e32e23f8900a) is a "good" approximation of 




y

n
+
1
{\displaystyle y\_{n+1}}
![{\displaystyle y_{n+1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6477fbeae2962cc55973c2298b8653cfd4f5e5d1). A "good" approximation is usually defined with the help of a *[loss function](https://en.wikipedia.org/wiki/Loss_function),* 



ℓ
(
y
,
z
)
{\displaystyle \ell (y,z)}
![{\displaystyle \ell (y,z)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0542e5e1c1c4a564707bcab0c4d75d41d90b4149), which characterizes how bad 



z
{\displaystyle z}
![{\displaystyle z}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bf368e72c009decd9b6686ee84a375632e11de98) is as a prediction of 



y
{\displaystyle y}
![{\displaystyle y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8a6208ec717213d4317e666f1ae872e00620a0d). We would then like to choose a hypothesis that minimizes the *[expected risk](https://en.wikipedia.org/wiki/Loss_function#Expected_loss):*

ε
(
f
)
=

E

[

ℓ
(

y

n
+
1
,
f
(

X

n
+
1
)
)
]
.
{\displaystyle \varepsilon (f)=\mathbb {E} \left[\ell (y\_{n+1},f(X\_{n+1}))\right].}
![{\displaystyle \varepsilon (f)=\mathbb {E} \left[\ell (y_{n+1},f(X_{n+1}))\right].}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b39a0005cd33d8ba9a9c9b18998577b32b6f519)

In most cases, we don't know the joint distribution of 




X

n
+
1
,


y

n
+
1
{\displaystyle X\_{n+1},\,y\_{n+1}}
![{\displaystyle X_{n+1},\,y_{n+1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6ce272dcd8a53ad1cffe693e3cb0fa4975144910) outright. In these cases, a common strategy is to choose the hypothesis that minimizes the *empirical risk:*

ε
^
(
f
)
=


1
n

∑

k
=
1

n
ℓ
(

y

k
,
f
(

X

k
)
)
.
{\displaystyle {\hat {\varepsilon }}(f)={\frac {1}{n}}\sum \_{k=1}^{n}\ell (y\_{k},f(X\_{k})).}
![{\displaystyle {\hat {\varepsilon }}(f)={\frac {1}{n}}\sum _{k=1}^{n}\ell (y_{k},f(X_{k})).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5effe9ff7d4aa45d199b44208338fca1beaff29d)

Under certain assumptions about the sequence of random variables 




X

k
,


y

k
{\displaystyle X\_{k},\,y\_{k}}
![{\displaystyle X_{k},\,y_{k}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e660c35f54d421f56c67b2851ec36e2997c4ff82) (for example, that they are generated by a finite Markov process), if the set of hypotheses being considered is small enough, the minimizer of the empirical risk will closely approximate the minimizer of the expected risk as 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) grows large. This approach is called *empirical risk minimization,* or ERM.

### Regularization and stability

[[edit](/w/index.php?title=Support_vector_machine&action=edit&section=17)]

In order for the minimization problem to have a well-defined solution, we have to place constraints on the set 





H
{\displaystyle {\mathcal {H}}}
![{\displaystyle {\mathcal {H}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/19ef4c7b923a5125ac91aa491838a95ee15b804f) of hypotheses being considered. If 





H
{\displaystyle {\mathcal {H}}}
![{\displaystyle {\mathcal {H}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/19ef4c7b923a5125ac91aa491838a95ee15b804f) is a [normed space](https://en.wikipedia.org/wiki/Normed_vector_space) (as is the case for SVM), a particularly effective technique is to consider only those hypotheses 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) for which 



‖
f

‖


H
<
k
{\displaystyle \lVert f\rVert \_{\mathcal {H}}<k}
![{\displaystyle \lVert f\rVert _{\mathcal {H}}<k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ecafa1e48e7f4c96ae905dd3a5c38a0abc8f1499) . This is equivalent to imposing a *regularization penalty* 





R
(
f
)
=

λ

k
‖
f

‖


H
{\displaystyle {\mathcal {R}}(f)=\lambda \_{k}\lVert f\rVert \_{\mathcal {H}}}
![{\displaystyle {\mathcal {R}}(f)=\lambda _{k}\lVert f\rVert _{\mathcal {H}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/db475c0281cb63bbab9c07dfa3f5907e38042867), and solving the new optimization problem

f
^
=

a
r
g

min

f
∈


H



ε
^
(
f
)
+


R
(
f
)
.
{\displaystyle {\hat {f}}=\mathrm {arg} \min \_{f\in {\mathcal {H}}}{\hat {\varepsilon }}(f)+{\mathcal {R}}(f).}
![{\displaystyle {\hat {f}}=\mathrm {arg} \min _{f\in {\mathcal {H}}}{\hat {\varepsilon }}(f)+{\mathcal {R}}(f).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/293561377f72d19a1b5e4bc7b4072f9e27cde3a9)

This approach is called *[Tikhonov regularization](https://en.wikipedia.org/wiki/Tikhonov_regularization).*

More generally, 





R
(
f
)
{\displaystyle {\mathcal {R}}(f)}
![{\displaystyle {\mathcal {R}}(f)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7d31edb990b84c3ee6c146bcbc3e4cf73f9edebd) can be some measure of the complexity of the hypothesis 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61), so that simpler hypotheses are preferred.

### SVM and the hinge loss

[[edit](/w/index.php?title=Support_vector_machine&action=edit&section=18)]

Recall that the (soft-margin) SVM classifier 







w
^
,
b
:

x
↦
sgn
⁡
(





w
^


T

x
−
b
)
{\displaystyle {\hat {\mathbf {w} }},b:\mathbf {x} \mapsto \operatorname {sgn}({\hat {\mathbf {w} }}^{\mathsf {T}}\mathbf {x} -b)}
![{\displaystyle {\hat {\mathbf {w} }},b:\mathbf {x} \mapsto \operatorname {sgn} ({\hat {\mathbf {w} }}^{\mathsf {T}}\mathbf {x} -b)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/411e97a3c1cb64f17e88319754ee77839f434884) is chosen to minimize the following expression:

[



1
n

∑

i
=
1

n
max

(

0
,
1
−

y

i
(


w


T

x
−
b
)
)
]
+
λ
‖

w

‖

2
.
{\displaystyle \left[{\frac {1}{n}}\sum \_{i=1}^{n}\max \left(0,1-y\_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} -b)\right)\right]+\lambda \|\mathbf {w} \|^{2}.}
![{\displaystyle \left[{\frac {1}{n}}\sum _{i=1}^{n}\max \left(0,1-y_{i}(\mathbf {w} ^{\mathsf {T}}\mathbf {x} -b)\right)\right]+\lambda \|\mathbf {w} \|^{2}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/85d62a82b5412759d590dea809a53f63b41bb697)

In light of the above discussion, we see that the SVM technique is equivalent to empirical risk minimization with Tikhonov regularization, where in this case the loss function is the [hinge loss](https://en.wikipedia.org/wiki/Hinge_loss)

ℓ
(
y
,
z
)
=
max

(

0
,
1
−
y
z
)
.
{\displaystyle \ell (y,z)=\max \left(0,1-yz\right).}
![{\displaystyle \ell (y,z)=\max \left(0,1-yz\right).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f03fe80f1f508ee3bb4585294fc15be08d710b38)

From this perspective, SVM is closely related to other fundamental [classification algorithms](https://en.wikipedia.org/wiki/Statistical_classification#Linear_classifiers) such as [regularized least-squares](https://en.wikipedia.org/wiki/Regularized_least-squares) and [logistic regression](https://en.wikipedia.org/wiki/Logistic_regression). The difference between the three lies in the choice of loss function: regularized least-squares amounts to empirical risk minimization with the [square-loss](https://en.wikipedia.org/wiki/Loss_functions_for_classification), 




ℓ

s
q
(
y
,
z
)
=
(
y
−
z

)

2
{\displaystyle \ell \_{sq}(y,z)=(y-z)^{2}}
![{\displaystyle \ell _{sq}(y,z)=(y-z)^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1a694b3b83b6ea73c59f2adbcffc86c235d8ec1d); logistic regression employs the [log-loss](https://en.wikipedia.org/wiki/Loss_functions_for_classification),

ℓ

log
(
y
,
z
)
=
ln
⁡
(
1
+

e

−
y
z
)
.
{\displaystyle \ell \_{\log }(y,z)=\ln(1+e^{-yz}).}
![{\displaystyle \ell _{\log }(y,z)=\ln(1+e^{-yz}).}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a92f84406a4b24bcabc577a0fb40d3d5c1600df2)

The difference between the hinge loss and these other loss functions is best stated in terms of *target functions -* the function that minimizes expected risk for a given pair of random variables 



X
,

y
{\displaystyle X,\,y}
![{\displaystyle X,\,y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e45c9f4c3881481e8cdc5f139ade3202f6909a49).

In particular, let 




y

x
{\displaystyle y\_{x}}
![{\displaystyle y_{x}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/34ec692a85ddcae3ac6171302043d07ef26f5bb4) denote 



y
{\displaystyle y}
![{\displaystyle y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8a6208ec717213d4317e666f1ae872e00620a0d) conditional on the event that 



X
=
x
{\displaystyle X=x}
![{\displaystyle X=x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0661396d873679039ffe8e908a39f02402d4912d). In the classification setting, we have:

y

x
=


{



1


with probability 

p

x


−
1


with probability 
1
−

p

x

{\displaystyle y\_{x}={\begin{cases}1&{\text{with probability }}p\_{x}\\-1&{\text{with probability }}1-p\_{x}\end{cases}}}
![{\displaystyle y_{x}={\begin{cases}1&{\text{with probability }}p_{x}\\-1&{\text{with probability }}1-p_{x}\end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a44c6730ad1c54a1a7e7dd2d5bd3367aeb4e69f0)

The optimal classifier is therefore:

f

∗
(
x
)
=


{



1


if 

p

x
≥
1

/
2


−
1


otherwise

{\displaystyle f^{\*}(x)={\begin{cases}1&{\text{if }}p\_{x}\geq 1/2\\-1&{\text{otherwise}}\end{cases}}}
![{\displaystyle f^{*}(x)={\begin{cases}1&{\text{if }}p_{x}\geq 1/2\\-1&{\text{otherwise}}\end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c2a2a1f3d88f708c2b1eea7a27a234e9a93765fb)

For the square-loss, the target function is the conditional expectation function, 




f

s
q
(
x
)
=

E

[

y

x
]
{\displaystyle f\_{sq}(x)=\mathbb {E} \left[y\_{x}\right]}
![{\displaystyle f_{sq}(x)=\mathbb {E} \left[y_{x}\right]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/db61f0b198879db710784726430ff7acf542d724); For the logistic loss, it's the logit function, 




f

log
(
x
)
=
ln
⁡

(


p

x

/
(

1
−

p

x
)
)
{\displaystyle f\_{\log }(x)=\ln \left(p\_{x}/({1-p\_{x}})\right)}
![{\displaystyle f_{\log }(x)=\ln \left(p_{x}/({1-p_{x}})\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/804aaf5d3cf30ad7bd797e67042f56798892f79a). While both of these target functions yield the correct classifier, as 



sgn
⁡
(

f

s
q
)
=
sgn
⁡
(

f

log
)
=

f

∗
{\displaystyle \operatorname {sgn}(f\_{sq})=\operatorname {sgn}(f\_{\log })=f^{\*}}
![{\displaystyle \operatorname {sgn} (f_{sq})=\operatorname {sgn} (f_{\log })=f^{*}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ddd85db7c69d2f7847d16e8df237a2d4c194aa8f), they give us more information than we need. In fact, they give us enough information to completely describe the distribution of 




y

x
{\displaystyle y\_{x}}
![{\displaystyle y_{x}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/34ec692a85ddcae3ac6171302043d07ef26f5bb4).

On the other hand, one can check that the target function for the hinge loss is *exactly* 




f

∗
{\displaystyle f^{\*}}
![{\displaystyle f^{*}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/190a73fde235865b8d2a783334f90194331c7f19). Thus, in a sufficiently rich hypothesis space—or equivalently, for an appropriately chosen kernel—the SVM classifier will converge to the simplest function (in terms of 





R
{\displaystyle {\mathcal {R}}}
![{\displaystyle {\mathcal {R}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/74532dc308c806964b832df0d0d73352195c2f2f)) that correctly classifies the data. This extends the geometric interpretation of SVM—for linear classification, the empirical risk is minimized by any function whose margins lie between the support vectors, and the simplest of these is the max-margin classifier.

SVMs belong to a family of generalized [linear classifiers](https://en.wikipedia.org/wiki/Linear_classifier) and can be interpreted as an extension of the [perceptron](https://en.wikipedia.org/wiki/Perceptron). They can also be considered a special case of [Tikhonov regularization](https://en.wikipedia.org/wiki/Tikhonov_regularization). A special property is that they simultaneously minimize the empirical *classification error* and maximize the *geometric margin*; hence they are also known as **maximum [margin classifiers](https://en.wikipedia.org/wiki/Margin_classifier)**.

A comparison of the SVM to other classifiers has been made by Meyer, Leisch and Hornik.

### Parameter selection

[[edit](/w/index.php?title=Support_vector_machine&action=edit&section=21)]

The effectiveness of SVM depends on the selection of kernel, the kernel's parameters, and soft margin parameter 



λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a).
A common choice is a Gaussian kernel, which has a single parameter *γ
{\displaystyle \gamma }
![{\displaystyle \gamma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a223c880b0ce3da8f64ee33c4f0010beee400b1a)*. The best combination of 



λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) and 



γ
{\displaystyle \gamma }
![{\displaystyle \gamma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a223c880b0ce3da8f64ee33c4f0010beee400b1a) is often selected by a [grid search](https://en.wikipedia.org/wiki/Grid_search) with exponentially growing sequences of 



λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) and *γ
{\displaystyle \gamma }
![{\displaystyle \gamma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a223c880b0ce3da8f64ee33c4f0010beee400b1a)*, for example, 



λ
∈
{

2

−
5
,

2

−
3
,
…
,

2

13
,

2

15
}
{\displaystyle \lambda \in \{2^{-5},2^{-3},\dots ,2^{13},2^{15}\}}
![{\displaystyle \lambda \in \{2^{-5},2^{-3},\dots ,2^{13},2^{15}\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de96727e155179aa84d0e08fec1e47dc6b012001); 



γ
∈
{

2

−
15
,

2

−
13
,
…
,

2

1
,

2

3
}
{\displaystyle \gamma \in \{2^{-15},2^{-13},\dots ,2^{1},2^{3}\}}
![{\displaystyle \gamma \in \{2^{-15},2^{-13},\dots ,2^{1},2^{3}\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/17dfb35d6d61d36c513a4a9eb005b9ed8777791a). Typically, each combination of parameter choices is checked using [cross validation](https://en.wikipedia.org/wiki/Cross-validation_(statistics)), and the parameters with best cross-validation accuracy are picked. Alternatively, recent work in [Bayesian optimization](https://en.wikipedia.org/wiki/Bayesian_optimization) can be used to select 



λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) and *γ
{\displaystyle \gamma }
![{\displaystyle \gamma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a223c880b0ce3da8f64ee33c4f0010beee400b1a)* , often requiring the evaluation of far fewer parameter combinations than grid search. The final model, which is used for testing and for classifying new data, is then trained on the whole training set using the selected parameters.

Potential drawbacks of the SVM include the following aspects:

* Requires full labeling of input data
* Uncalibrated [class membership probabilities](https://en.wikipedia.org/wiki/Class_membership_probabilities)—SVM stems from Vapnik's theory which avoids estimating probabilities on finite data
* The SVM is only directly applicable for two-class tasks. Therefore, algorithms that reduce the multi-class task to several binary problems have to be applied; see the [multi-class SVM](#Multiclass_SVM) section.
* Parameters of a solved model are difficult to interpret.

Multiclass SVM aims to assign labels to instances by using support vector machines, where the labels are drawn from a finite set of several elements.

The dominant approach for doing so is to reduce the single [multiclass problem](https://en.wikipedia.org/wiki/Multiclass_problem) into multiple [binary classification](https://en.wikipedia.org/wiki/Binary_classification) problems. Common methods for such reduction include:

* Building binary classifiers that distinguish between one of the labels and the rest (*one-versus-all*) or between every pair of classes (*one-versus-one*). Classification of new instances for the one-versus-all case is done by a winner-takes-all strategy, in which the classifier with the highest-output function assigns the class (it is important that the output functions be calibrated to produce comparable scores). For the one-versus-one approach, classification is done by a max-wins voting strategy, in which every classifier assigns the instance to one of the two classes, then the vote for the assigned class is increased by one vote, and finally the class with the most votes determines the instance classification.
* [Directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) SVM (DAGSVM)
* [Error-correcting output codes](https://en.wikipedia.org/wiki/Error_correcting_code)

Crammer and Singer proposed a multiclass SVM method which casts the [multiclass classification](https://en.wikipedia.org/wiki/Multiclass_classification) problem into a single optimization problem, rather than decomposing it into multiple binary classification problems. See also Lee, Lin and Wahba and Van den Burg and Groenen.

### Transductive support vector machines

[[edit](/w/index.php?title=Support_vector_machine&action=edit&section=25)]

Transductive support vector machines extend SVMs in that they could also treat partially labeled data in [semi-supervised learning](https://en.wikipedia.org/wiki/Semi-supervised_learning) by following the principles of [transduction](https://en.wikipedia.org/wiki/Transduction_(machine_learning)). Here, in addition to the training set 





D
{\displaystyle {\mathcal {D}}}
![{\displaystyle {\mathcal {D}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3277962e1959c3241fb1b70c7f0ac6dcefebd966), the learner is also given a set

D

⋆
=
{


x

i

⋆
∣


x

i

⋆
∈


R

p

}

i
=
1

k
{\displaystyle {\mathcal {D}}^{\star }=\{\mathbf {x} \_{i}^{\star }\mid \mathbf {x} \_{i}^{\star }\in \mathbb {R} ^{p}\}\_{i=1}^{k}}
![{\displaystyle {\mathcal {D}}^{\star }=\{\mathbf {x} _{i}^{\star }\mid \mathbf {x} _{i}^{\star }\in \mathbb {R} ^{p}\}_{i=1}^{k}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a85548a3b6819a8e9899f7228286674cc457f824)

of test examples to be classified. Formally, a transductive support vector machine is defined by the following primal optimization problem:

Minimize (in 




w
,
b
,


y

⋆
{\displaystyle \mathbf {w} ,b,\mathbf {y} ^{\star }}
![{\displaystyle \mathbf {w} ,b,\mathbf {y} ^{\star }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bb4e853e9c2307487503db429df9c87f8812811d))

1
2
‖

w

‖

2
{\displaystyle {\frac {1}{2}}\|\mathbf {w} \|^{2}}
![{\displaystyle {\frac {1}{2}}\|\mathbf {w} \|^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/69a34c96227f9003e853c0c6f8ce15445ede7be1)

subject to (for any 



i
=
1
,
…
,
n
{\displaystyle i=1,\dots ,n}
![{\displaystyle i=1,\dots ,n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f3f269b2f3b2f87fec0168426652a5ea80b56112) and any 



j
=
1
,
…
,
k
{\displaystyle j=1,\dots ,k}
![{\displaystyle j=1,\dots ,k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/17b9f8d6a741f04e9280f1aa8ad318057beff36f))

y

i
(

w
⋅


x

i
−
b
)
≥
1
,




y

j

⋆
(

w
⋅


x

j

⋆
−
b
)
≥
1
,
{\displaystyle {\begin{aligned}&y\_{i}(\mathbf {w} \cdot \mathbf {x} \_{i}-b)\geq 1,\\&y\_{j}^{\star }(\mathbf {w} \cdot \mathbf {x} \_{j}^{\star }-b)\geq 1,\end{aligned}}}
![{\displaystyle {\begin{aligned}&y_{i}(\mathbf {w} \cdot \mathbf {x} _{i}-b)\geq 1,\\&y_{j}^{\star }(\mathbf {w} \cdot \mathbf {x} _{j}^{\star }-b)\geq 1,\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2884901096701ede8aad45888b214ff5e423e0dc)

and

y

j

⋆
∈
{
−
1
,
1
}
.
{\displaystyle y\_{j}^{\star }\in \{-1,1\}.}
![{\displaystyle y_{j}^{\star }\in \{-1,1\}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ed01a216a1487a2e935fdfe3bbcae451bacae940)

Transductive support vector machines were introduced by Vladimir N. Vapnik in 1998.

Structured support-vector machine is an extension of the traditional SVM model. While the SVM model is primarily designed for binary classification, multiclass classification, and regression tasks, structured SVM broadens its application to handle general structured output labels, for example parse trees, classification with taxonomies, sequence alignment and many more.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Svr_epsilons_demo.svg/250px-Svr_epsilons_demo.svg.png)](https://en.wikipedia.org/wiki/File:Svr_epsilons_demo.svg)

Support vector regression (prediction) with different thresholds *ε*. As *ε* increases, the prediction becomes less sensitive to errors.

A version of SVM for [regression](https://en.wikipedia.org/wiki/Regression_analysis) was proposed in 1996 by [Vladimir N. Vapnik](https://en.wikipedia.org/wiki/Vladimir_N._Vapnik), Harris Drucker, Christopher J. C. Burges, Linda Kaufman and Alexander J. Smola. This method is called support vector regression (SVR). The model produced by support vector classification (as described above) depends only on a subset of the training data, because the cost function for building the model does not care about training points that lie beyond the margin. Analogously, the model produced by SVR depends only on a subset of the training data, because the cost function for building the model ignores any training data close to the model prediction. Another SVM version known as [least-squares support vector machine](https://en.wikipedia.org/wiki/Least-squares_support_vector_machine) (LS-SVM) has been proposed by Suykens and Vandewalle.

Training the original SVR means solving

:   minimize 






    1
    2
    ‖
    w

    ‖

    2
    {\displaystyle {\tfrac {1}{2}}\|w\|^{2}}
    ![{\displaystyle {\tfrac {1}{2}}\|w\|^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7e57eb5af0505ace268f4e239bec5a5e45b265fd)
:   subject to 




    |

    y

    i
    −
    ⟨
    w
    ,

    x

    i
    ⟩
    −
    b

    |
    ≤
    ε
    {\displaystyle |y\_{i}-\langle w,x\_{i}\rangle -b|\leq \varepsilon }
    ![{\displaystyle |y_{i}-\langle w,x_{i}\rangle -b|\leq \varepsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/8e5c77b2ab4ab6c23dc93202502574592354d40d)

where 




x

i
{\displaystyle x\_{i}}
![{\displaystyle x_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e87000dd6142b81d041896a30fe58f0c3acb2158) is a training sample with target value 




y

i
{\displaystyle y\_{i}}
![{\displaystyle y_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/67d30d30b6c2dbe4d6f150d699de040937ecc95f). The inner product plus intercept 



⟨
w
,

x

i
⟩
+
b
{\displaystyle \langle w,x\_{i}\rangle +b}
![{\displaystyle \langle w,x_{i}\rangle +b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6edf655afe55c88493246d8a6017750083c31de5) is the prediction for that sample, and 



ε
{\displaystyle \varepsilon }
![{\displaystyle \varepsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a30c89172e5b88edbd45d3e2772c7f5e562e5173) is a free parameter that serves as a threshold: all predictions have to be within an 



ε
{\displaystyle \varepsilon }
![{\displaystyle \varepsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a30c89172e5b88edbd45d3e2772c7f5e562e5173) range of the true predictions. Slack variables are usually added into the above to allow for errors and to allow approximation in the case the above problem is infeasible.

In 2011 it was shown by Polson and Scott that the SVM admits a [Bayesian](https://en.wikipedia.org/wiki/Bayesian_probability) interpretation through the technique of [data augmentation](https://en.wikipedia.org/wiki/Data_augmentation). In this approach the SVM is viewed as a [graphical model](https://en.wikipedia.org/wiki/Graphical_model) (where the parameters are connected via probability distributions). This extended view allows the application of [Bayesian](https://en.wikipedia.org/wiki/Bayesian_probability) techniques to SVMs, such as flexible feature modeling, automatic [hyperparameter](https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)) tuning, and [predictive uncertainty quantification](https://en.wikipedia.org/wiki/Posterior_predictive_distribution). In 2017, a scalable version of the Bayesian SVM was developed by [Florian Wenzel](https://arxiv.org/search/stat?searchtype=author&query=Wenzel%2C+F), enabling the application of Bayesian SVMs to [big data](https://en.wikipedia.org/wiki/Big_data). Florian Wenzel developed two different versions, a variational inference (VI) scheme for the Bayesian kernel support vector machine (SVM) and a stochastic version (SVI) for the linear Bayesian SVM.

The parameters of the maximum-margin hyperplane are derived by solving the optimization. There exist several specialized algorithms for quickly solving the [quadratic programming](https://en.wikipedia.org/wiki/Quadratic_programming) (QP) problem that arises from SVMs, mostly relying on heuristics for breaking the problem down into smaller, more manageable chunks.

Another approach is to use an [interior-point method](https://en.wikipedia.org/wiki/Interior-point_method) that uses [Newton](https://en.wikipedia.org/wiki/Newton%27s_method)-like iterations to find a solution of the [Karush–Kuhn–Tucker conditions](https://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions) of the primal and dual problems.
Instead of solving a sequence of broken-down problems, this approach directly solves the problem altogether. To avoid solving a linear system involving the large kernel matrix, a low-rank approximation to the matrix is often used in the kernel trick.

Another common method is Platt's [sequential minimal optimization](https://en.wikipedia.org/wiki/Sequential_minimal_optimization) (SMO) algorithm, which breaks the problem down into 2-dimensional sub-problems that are solved analytically, eliminating the need for a numerical optimization algorithm and matrix storage. This algorithm is conceptually simple, easy to implement, generally faster, and has better scaling properties for difficult SVM problems.

The special case of linear support vector machines can be solved more efficiently by the same kind of algorithms used to optimize its close cousin, [logistic regression](https://en.wikipedia.org/wiki/Logistic_regression); this class of algorithms includes [sub-gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent) (e.g., PEGASOS) and [coordinate descent](https://en.wikipedia.org/wiki/Coordinate_descent) (e.g., LIBLINEAR). LIBLINEAR has some attractive training-time properties. Each convergence iteration takes time linear in the time taken to read the train data, and the iterations also have a [Q-linear convergence](https://en.wikipedia.org/wiki/Rate_of_convergence) property, making the algorithm extremely fast.

The general kernel SVMs can also be solved more efficiently using [sub-gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent) (e.g. P-packSVM), especially when [parallelization](https://en.wikipedia.org/wiki/Parallelization) is allowed.

Kernel SVMs are available in many machine-learning toolkits, including [LIBSVM](https://en.wikipedia.org/wiki/LIBSVM), [MATLAB](https://en.wikipedia.org/wiki/MATLAB), [SAS](http://support.sas.com/documentation/cdl/en/whatsnew/64209/HTML/default/viewer.htm#emdocwhatsnew71.htm), SVMlight, [kernlab](https://cran.r-project.org/package=kernlab), [scikit-learn](https://en.wikipedia.org/wiki/Scikit-learn), [Shogun](https://en.wikipedia.org/wiki/Shogun_(toolbox)), [Weka](https://en.wikipedia.org/wiki/Weka_(machine_learning)), [Shark](http://image.diku.dk/shark/), [JKernelMachines](https://mloss.org/software/view/409/), [OpenCV](https://en.wikipedia.org/wiki/OpenCV) and others.

Preprocessing of data (standardization) is highly recommended to enhance accuracy of classification. There are a few methods of standardization, such as min-max, normalization by decimal scaling, Z-score. Subtraction of mean and division by variance of each feature is usually used for SVM.

1. ^ [***a***](#cite_ref-CorinnaCortes_1-0) [***b***](#cite_ref-CorinnaCortes_1-1) [***c***](#cite_ref-CorinnaCortes_1-2) [Cortes, Corinna](https://en.wikipedia.org/wiki/Corinna_Cortes); [Vapnik, Vladimir](https://en.wikipedia.org/wiki/Vladimir_Vapnik) (1995). ["Support-vector networks"](http://image.diku.dk/imagecanon/material/cortes_vapnik95.pdf) (PDF). *[Machine Learning](https://en.wikipedia.org/wiki/Machine_Learning_(journal))*. **20** (3): 273–297. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.15.9362](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.15.9362). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF00994018](https://doi.org/10.1007%2FBF00994018). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [206787478](https://api.semanticscholar.org/CorpusID:206787478).
2. **[^](#cite_ref-2)** Vapnik, Vladimir N. (1997). ["The Support Vector method"](https://link.springer.com/chapter/10.1007/BFb0020166). In Gerstner, Wulfram; Germond, Alain; Hasler, Martin; Nicoud, Jean-Daniel (eds.). *Artificial Neural Networks — ICANN'97*. Lecture Notes in Computer Science. Vol. 1327. Berlin, Heidelberg: Springer. pp. 261–271. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BFb0020166](https://doi.org/10.1007%2FBFb0020166). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-69620-9](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-69620-9).
3. **[^](#cite_ref-3)** Awad, Mariette; Khanna, Rahul (2015). "Support Vector Machines for Classification". *Efficient Learning Machines*. Apress. pp. 39–66. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-1-4302-5990-9\_3](https://doi.org/10.1007%2F978-1-4302-5990-9_3). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4302-5990-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4302-5990-9).
4. **[^](#cite_ref-HavaSiegelmann_4-0)** Ben-Hur, Asa; Horn, David; Siegelmann, Hava; Vapnik, Vladimir N. ""Support vector clustering" (2001);". *Journal of Machine Learning Research*. **2**: 125–137.
5. **[^](#cite_ref-5)** Huang, H. H.; Xu, T.; Yang, J. (2014). ["Comparing logistic regression, support vector machines, and permanental classification methods in predicting hypertension"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4143639). *BMC Proceedings*. **8** (Suppl 1): S96. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1186/1753-6561-8-S1-S96](https://doi.org/10.1186%2F1753-6561-8-S1-S96). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [4143639](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4143639). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [25519351](https://pubmed.ncbi.nlm.nih.gov/25519351).
6. **[^](#cite_ref-6)** Opper, M; Kinzel, W; Kleinz, J; Nehl, R (1990). ["On the ability of the optimal perceptron to generalise"](https://dx.doi.org/10.1088/0305-4470/23/11/012). *Journal of Physics A: Mathematical and General*. **23** (11): L581. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1990JPhA...23L.581O](https://ui.adsabs.harvard.edu/abs/1990JPhA...23L.581O). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1088/0305-4470/23/11/012](https://doi.org/10.1088%2F0305-4470%2F23%2F11%2F012).
7. **[^](#cite_ref-7)** ["1.4. Support Vector Machines — scikit-learn 0.20.2 documentation"](http://scikit-learn.org/stable/modules/svm.html). [Archived](https://web.archive.org/web/20171108151644/http://scikit-learn.org/stable/modules/svm.html) from the original on 2017-11-08. Retrieved 2017-11-08.
8. **[^](#cite_ref-8)** [Hastie, Trevor](https://en.wikipedia.org/wiki/Trevor_Hastie); [Tibshirani, Robert](https://en.wikipedia.org/wiki/Robert_Tibshirani); [Friedman, Jerome](https://en.wikipedia.org/wiki/Jerome_H._Friedman) (2008). [*The Elements of Statistical Learning : Data Mining, Inference, and Prediction*](https://hastie.su.domains/ElemStatLearn/printings/ESLII_print12_toc.pdf.download.html) (Second ed.). New York: Springer. p. 134.
9. ^ [***a***](#cite_ref-ReferenceA_9-0) [***b***](#cite_ref-ReferenceA_9-1) [***c***](#cite_ref-ReferenceA_9-2) Boser, Bernhard E.; Guyon, Isabelle M.; Vapnik, Vladimir N. (1992). ["A training algorithm for optimal margin classifiers"](http://www.clopinet.com/isabelle/Papers/colt92.ps.Z). *Proceedings of the fifth annual workshop on Computational learning theory – COLT '92*. p. 144. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.21.3818](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.21.3818). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/130385.130401](https://doi.org/10.1145%2F130385.130401). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0897914970](https://en.wikipedia.org/wiki/Special:BookSources/978-0897914970). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [207165665](https://api.semanticscholar.org/CorpusID:207165665).
10. **[^](#cite_ref-10)** Press, William H.; Teukolsky, Saul A.; Vetterling, William T.; Flannery, Brian P. (2007). ["Section 16.5. Support Vector Machines"](http://apps.nrbook.com/empanel/index.html#pg=883). *Numerical Recipes: The Art of Scientific Computing* (3rd ed.). New York: Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-521-88068-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-88068-8). [Archived](https://web.archive.org/web/20110811154417/http://apps.nrbook.com/empanel/index.html#pg=883) from the original on 2011-08-11.
11. **[^](#cite_ref-11)** Joachims, Thorsten (1998). "Text categorization with Support Vector Machines: Learning with many relevant features". *Machine Learning: ECML-98*. Lecture Notes in Computer Science. Vol. 1398. Springer. pp. 137–142. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BFb0026683](https://doi.org/10.1007%2FBFb0026683). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-64417-0](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-64417-0).
12. **[^](#cite_ref-12)** Pradhan, Sameer S.; et al. (2 May 2004). [*Shallow Semantic Parsing using Support Vector Machines*](http://www.aclweb.org/anthology/N04-1030). Proceedings of the Human Language Technology Conference of the North American Chapter of the Association for Computational Linguistics: HLT-NAACL 2004. Association for Computational Linguistics. pp. 233–240.
13. **[^](#cite_ref-13)** Vapnik, Vladimir N.: Invited Speaker. IPMU Information Processing and Management 2014).
14. **[^](#cite_ref-14)** Barghout, Lauren (2015). ["Spatial-Taxon Information Granules as Used in Iterative Fuzzy-Decision-Making for Image Segmentation"](https://web.archive.org/web/20180108120422/https://pdfs.semanticscholar.org/917f/15d33d32062bffeb6401eee9fe71d16d6a84.pdf) (PDF). *Granular Computing and Decision-Making*. Studies in Big Data. Vol. 10. pp. 285–318. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-319-16829-6\_12](https://doi.org/10.1007%2F978-3-319-16829-6_12). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-319-16828-9](https://en.wikipedia.org/wiki/Special:BookSources/978-3-319-16828-9). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [4154772](https://api.semanticscholar.org/CorpusID:4154772). Archived from [the original](https://pdfs.semanticscholar.org/917f/15d33d32062bffeb6401eee9fe71d16d6a84.pdf) (PDF) on 2018-01-08. Retrieved 2018-01-08.
15. **[^](#cite_ref-15)** A. Maity (2016). "Supervised Classification of RADARSAT-2 Polarimetric Data for Different Land Features". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1608.00501](https://arxiv.org/abs/1608.00501) [[cs.CV](https://arxiv.org/archive/cs.CV)].
16. **[^](#cite_ref-16)** DeCoste, Dennis (2002). ["Training Invariant Support Vector Machines"](https://people.eecs.berkeley.edu/~malik/cs294/decoste-scholkopf.pdf) (PDF). *Machine Learning*. **46** (1–3): 161–190. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2002MLear..46..161D](https://ui.adsabs.harvard.edu/abs/2002MLear..46..161D). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1023/A:1012454411458](https://doi.org/10.1023%2FA%3A1012454411458). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [85843](https://api.semanticscholar.org/CorpusID:85843).
17. **[^](#cite_ref-17)** Maitra, D. S.; Bhattacharya, U.; Parui, S. K. (August 2015). "CNN based common approach to handwritten character recognition of multiple scripts". *2015 13th International Conference on Document Analysis and Recognition (ICDAR)*. pp. 1021–1025. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/ICDAR.2015.7333916](https://doi.org/10.1109%2FICDAR.2015.7333916). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4799-1805-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4799-1805-8). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [25739012](https://api.semanticscholar.org/CorpusID:25739012).
18. **[^](#cite_ref-18)** Gaonkar, B.; Davatzikos, C. (2013). ["Analytic estimation of statistical significance maps for support vector machine based multi-variate image analysis and classification"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3767485). *NeuroImage*. **78**: 270–283. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.neuroimage.2013.03.066](https://doi.org/10.1016%2Fj.neuroimage.2013.03.066). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [3767485](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3767485). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [23583748](https://pubmed.ncbi.nlm.nih.gov/23583748).
19. **[^](#cite_ref-19)** Cuingnet, Rémi; Rosso, Charlotte; Chupin, Marie; Lehéricy, Stéphane; Dormont, Didier; Benali, Habib; Samson, Yves; Colliot, Olivier (2011). ["Spatial regularization of SVM for the detection of diffusion alterations associated with stroke outcome"](https://web.archive.org/web/20181222172844/http://www.aramislab.fr/perso/colliot/files/media2011_remi_published.pdf) (PDF). *Medical Image Analysis*. **15** (5): 729–737. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.media.2011.05.007](https://doi.org/10.1016%2Fj.media.2011.05.007). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [21752695](https://pubmed.ncbi.nlm.nih.gov/21752695). Archived from [the original](http://www.aramislab.fr/perso/colliot/files/media2011_remi_published.pdf) (PDF) on 2018-12-22. Retrieved 2018-01-08.
20. **[^](#cite_ref-20)** Statnikov, Alexander; Hardin, Douglas; & Aliferis, Constantin; (2006); ["Using SVM weight-based methods to identify causally relevant and non-causally relevant variables"](http://www.ccdlab.org/paper-pdfs/NIPS_2006.pdf), *Sign*, 1, 4.
21. **[^](#cite_ref-21)** ["Why is the SVM margin equal to 





    2

    ‖

    w
    ‖
    {\displaystyle {\frac {2}{\|\mathbf {w} \|}}}
    ![{\displaystyle {\frac {2}{\|\mathbf {w} \|}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/747bea13e7052779808d2e4aacc09de311af6580)"](https://math.stackexchange.com/q/1305925/168764). *Mathematics Stack Exchange*. 30 May 2015.
22. **[^](#cite_ref-22)** Aizerman, Mark A.; Braverman, Emmanuel M. & Rozonoer, Lev I. (1964). "Theoretical foundations of the potential function method in pattern recognition learning". *Automation and Remote Control*. **25**: 821–837.
23. **[^](#cite_ref-23)** Jin, Chi; Wang, Liwei (2012). [*Dimensionality dependent PAC-Bayes margin bound*](http://papers.nips.cc/paper/4500-dimensionality-dependent-pac-bayes-margin-bound). Advances in Neural Information Processing Systems. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.420.3487](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.420.3487). [Archived](https://web.archive.org/web/20150402185336/http://papers.nips.cc/paper/4500-dimensionality-dependent-pac-bayes-margin-bound) from the original on 2015-04-02.
24. **[^](#cite_ref-24)** Shalev-Shwartz, Shai; Singer, Yoram; Srebro, Nathan; Cotter, Andrew (2010-10-16). "Pegasos: primal estimated sub-gradient solver for SVM". *Mathematical Programming*. **127** (1): 3–30. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.161.9629](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.161.9629). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s10107-010-0420-4](https://doi.org/10.1007%2Fs10107-010-0420-4). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0025-5610](https://search.worldcat.org/issn/0025-5610). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [53306004](https://api.semanticscholar.org/CorpusID:53306004).
25. **[^](#cite_ref-25)** Hsieh, Cho-Jui; Chang, Kai-Wei; Lin, Chih-Jen; Keerthi, S. Sathiya; Sundararajan, S. (2008-01-01). "A dual coordinate descent method for large-scale linear SVM". *Proceedings of the 25th international conference on Machine learning - ICML '08*. New York, NY, USA: ACM. pp. 408–415. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.149.5594](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.149.5594). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1390156.1390208](https://doi.org/10.1145%2F1390156.1390208). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-60558-205-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-60558-205-4). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [7880266](https://api.semanticscholar.org/CorpusID:7880266).
26. **[^](#cite_ref-26)** Rosasco, Lorenzo; De Vito, Ernesto; Caponnetto, Andrea; Piana, Michele; Verri, Alessandro (2004-05-01). ["Are Loss Functions All the Same?"](https://ieeexplore.ieee.org/document/6789841). *Neural Computation*. **16** (5): 1063–1076. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.109.6786](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.109.6786). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1162/089976604773135104](https://doi.org/10.1162%2F089976604773135104). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[11380/4590](https://hdl.handle.net/11380%2F4590). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0899-7667](https://search.worldcat.org/issn/0899-7667). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [15070510](https://pubmed.ncbi.nlm.nih.gov/15070510). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [11845688](https://api.semanticscholar.org/CorpusID:11845688).
27. **[^](#cite_ref-27)** R. Collobert and S. Bengio (2004). Links between Perceptrons, MLPs and SVMs. Proc. Int'l Conf. on Machine Learning (ICML).
28. **[^](#cite_ref-28)** Meyer, David; Leisch, Friedrich; Hornik, Kurt (September 2003). "The support vector machine under test". *Neurocomputing*. **55** (1–2): 169–186. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/S0925-2312(03)00431-4](https://doi.org/10.1016%2FS0925-2312%2803%2900431-4).
29. **[^](#cite_ref-29)** Hsu, Chih-Wei; Chang, Chih-Chung & Lin, Chih-Jen (2003). [*A Practical Guide to Support Vector Classification*](http://www.csie.ntu.edu.tw/~cjlin/papers/guide/guide.pdf) (PDF) (Technical report). Department of Computer Science and Information Engineering, National Taiwan University. [Archived](https://web.archive.org/web/20130625201224/http://www.csie.ntu.edu.tw/~cjlin/papers/guide/guide.pdf) (PDF) from the original on 2013-06-25.
30. ^ [***a***](#cite_ref-duan2005_30-0) [***b***](#cite_ref-duan2005_30-1) Duan, Kai-Bo; Keerthi, S. Sathiya (2005). ["Which Is the Best Multiclass SVM Method? An Empirical Study"](https://web.archive.org/web/20130503183745/http://www.cs.iastate.edu/~honavar/multiclass-svm2.pdf) (PDF). *Multiple Classifier Systems*. [LNCS](https://en.wikipedia.org/wiki/Lecture_Notes_in_Computer_Science). Vol. 3541. pp. 278–285. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.110.6789](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.110.6789). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/11494683\_28](https://doi.org/10.1007%2F11494683_28). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-26306-7](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-26306-7). Archived from [the original](https://www.cs.iastate.edu/~honavar/multiclass-svm2.pdf) (PDF) on 2013-05-03. Retrieved 2019-07-18.
31. **[^](#cite_ref-hsu2002_31-0)** Hsu, Chih-Wei & Lin, Chih-Jen (2002). ["A Comparison of Methods for Multiclass Support Vector Machines"](https://web.archive.org/web/20130503183743/http://www.cs.iastate.edu/~honavar/multiclass-svm.pdf) (PDF). *IEEE Transactions on Neural Networks*. **13** (2): 415–25. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2002ITNN...13..415H](https://ui.adsabs.harvard.edu/abs/2002ITNN...13..415H). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/72.991427](https://doi.org/10.1109%2F72.991427). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [18244442](https://pubmed.ncbi.nlm.nih.gov/18244442). Archived from [the original](http://www.cs.iastate.edu/~honavar/multiclass-svm.pdf) (PDF) on 2013-05-03. Retrieved 2018-01-08.
32. **[^](#cite_ref-32)** Platt, John; [Cristianini, Nello](https://en.wikipedia.org/wiki/Nello_Cristianini); [Shawe-Taylor, John](https://en.wikipedia.org/wiki/John_Shawe-Taylor) (2000). ["Large margin DAGs for multiclass classification"](http://www.wisdom.weizmann.ac.il/~bagon/CVspring07/files/DAGSVM.pdf) (PDF). In [Solla, Sara A.](https://en.wikipedia.org/wiki/Sara_Solla); Leen, Todd K.; [Müller, Klaus-Robert](https://en.wikipedia.org/wiki/Klaus-Robert_M%C3%BCller) (eds.). *Advances in Neural Information Processing Systems*. MIT Press. pp. 547–553. [Archived](https://web.archive.org/web/20120616221540/http://www.wisdom.weizmann.ac.il/~bagon/CVspring07/files/DAGSVM.pdf) (PDF) from the original on 2012-06-16.
33. **[^](#cite_ref-33)** Dietterich, Thomas G.; Bakiri, Ghulum (1995). ["Solving Multiclass Learning Problems via Error-Correcting Output Codes"](http://www.jair.org/media/105/live-105-1426-jair.pdf) (PDF). *Journal of Artificial Intelligence Research*. **2**: 263–286. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[cs/9501101](https://arxiv.org/abs/cs/9501101). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1995cs........1101D](https://ui.adsabs.harvard.edu/abs/1995cs........1101D). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1613/jair.105](https://doi.org/10.1613%2Fjair.105). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [47109072](https://api.semanticscholar.org/CorpusID:47109072). [Archived](https://web.archive.org/web/20130509061344/http://www.jair.org/media/105/live-105-1426-jair.pdf) (PDF) from the original on 2013-05-09.
34. **[^](#cite_ref-34)** Crammer, Koby & Singer, Yoram (2001). ["On the Algorithmic Implementation of Multiclass Kernel-based Vector Machines"](http://jmlr.csail.mit.edu/papers/volume2/crammer01a/crammer01a.pdf) (PDF). *Journal of Machine Learning Research*. **2**: 265–292. [Archived](https://web.archive.org/web/20150829102651/http://jmlr.csail.mit.edu/papers/volume2/crammer01a/crammer01a.pdf) (PDF) from the original on 2015-08-29.
35. **[^](#cite_ref-35)** Lee, Yoonkyung; Lin, Yi & Wahba, Grace (2001). ["Multicategory Support Vector Machines"](https://web.archive.org/web/20130617093314/http://www.interfacesymposia.org/I01/I2001Proceedings/YLee/YLee.pdf) (PDF). *Computing Science and Statistics*. **33**. Archived from the original on 2013-06-17.
36. **[^](#cite_ref-36)** Lee, Yoonkyung; Lin, Yi; Wahba, Grace (2004). "Multicategory Support Vector Machines". *Journal of the American Statistical Association*. **99** (465): 67–81. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.22.1879](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.22.1879). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1198/016214504000000098](https://doi.org/10.1198%2F016214504000000098). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [7066611](https://api.semanticscholar.org/CorpusID:7066611).
37. **[^](#cite_ref-37)** Van den Burg, Gerrit J. J. & Groenen, Patrick J. F. (2016). ["GenSVM: A Generalized Multiclass Support Vector Machine"](http://jmlr.org/papers/volume17/14-526/14-526.pdf) (PDF). *Journal of Machine Learning Research*. **17** (224): 1–42.
38. **[^](#cite_ref-38)** Joachims, Thorsten. [*Transductive Inference for Text Classification using Support Vector Machines*](http://www1.cs.columbia.edu/~dplewis/candidacy/joachims99transductive.pdf) (PDF). Proceedings of the 1999 International Conference on Machine Learning (ICML 1999). pp. 200–209.
39. **[^](#cite_ref-39)** ["Support Vector Machine Learning for Interdependent and Structured Output Spaces"](https://www.cs.cornell.edu/people/tj/publications/tsochantaridis_etal_04a.pdf) (PDF). *www.cs.cornell.edu*.
40. **[^](#cite_ref-40)** Drucker, Harris; Burges, Christ. C.; Kaufman, Linda; Smola, Alexander J.; and Vapnik, Vladimir N. (1997); "[Support Vector Regression Machines](http://papers.nips.cc/paper/1238-support-vector-regression-machines.pdf)", in *Advances in Neural Information Processing Systems 9, NIPS 1996*, 155–161, MIT Press.
41. **[^](#cite_ref-41)** Suykens, Johan A. K.; Vandewalle, Joos P. L.; "[Least squares support vector machine classifiers](https://lirias.kuleuven.be/bitstream/123456789/218716/2/Suykens_NeurProcLett.pdf)", *Neural Processing Letters*, vol. 9, no. 3, Jun. 1999, pp. 293–300.
42. **[^](#cite_ref-42)** Smola, Alex J.; Schölkopf, Bernhard (2004). ["A tutorial on support vector regression"](http://eprints.pascal-network.org/archive/00000856/01/fulltext.pdf) (PDF). *Statistics and Computing*. **14** (3): 199–222. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2004StCom..14..199S](https://ui.adsabs.harvard.edu/abs/2004StCom..14..199S). [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.41.1452](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.41.1452). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1023/B:STCO.0000035301.49549.88](https://doi.org/10.1023%2FB%3ASTCO.0000035301.49549.88). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [15475](https://api.semanticscholar.org/CorpusID:15475). [Archived](https://web.archive.org/web/20120131193522/http://eprints.pascal-network.org/archive/00000856/01/fulltext.pdf) (PDF) from the original on 2012-01-31.
43. **[^](#cite_ref-43)** Polson, Nicholas G.; Scott, Steven L. (2011). ["Data Augmentation for Support Vector Machines"](https://doi.org/10.1214%2F11-BA601). *Bayesian Analysis*. **6** (1): 1–23. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1214/11-BA601](https://doi.org/10.1214%2F11-BA601).
44. **[^](#cite_ref-44)** Wenzel, Florian; Galy-Fajou, Theo; Deutsch, Matthäus; Kloft, Marius (2017). "Bayesian Nonlinear Support Vector Machines for Big Data". *Machine Learning and Knowledge Discovery in Databases*. Lecture Notes in Computer Science. Vol. 10534. pp. 307–322. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1707.05532](https://arxiv.org/abs/1707.05532). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2017arXiv170705532W](https://ui.adsabs.harvard.edu/abs/2017arXiv170705532W). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-319-71249-9\_19](https://doi.org/10.1007%2F978-3-319-71249-9_19). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-319-71248-2](https://en.wikipedia.org/wiki/Special:BookSources/978-3-319-71248-2). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [4018290](https://api.semanticscholar.org/CorpusID:4018290).
45. **[^](#cite_ref-45)** Florian Wenzel; Matthäus Deutsch; Théo Galy-Fajou; Marius Kloft; [”Scalable Approximate Inference for the Bayesian Nonlinear Support Vector Machine”](http://approximateinference.org/accepted/WenzelEtAl2016.pdf)
46. **[^](#cite_ref-46)** Ferris, Michael C.; Munson, Todd S. (2002). ["Interior-Point Methods for Massive Support Vector Machines"](http://www.cs.wisc.edu/~ferris/papers/siopt-svm.pdf) (PDF). *SIAM Journal on Optimization*. **13** (3): 783–804. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.216.6893](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.216.6893). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/S1052623400374379](https://doi.org/10.1137%2FS1052623400374379). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [13563302](https://api.semanticscholar.org/CorpusID:13563302). [Archived](https://web.archive.org/web/20081204224416/http://www.cs.wisc.edu/~ferris/papers/siopt-svm.pdf) (PDF) from the original on 2008-12-04.
47. **[^](#cite_ref-47)** Platt, John C. (1998). [*Sequential Minimal Optimization: A Fast Algorithm for Training Support Vector Machines*](http://research.microsoft.com/pubs/69644/tr-98-14.pdf) (PDF). NIPS. [Archived](https://web.archive.org/web/20150702075055/http://research.microsoft.com/pubs/69644/tr-98-14.pdf) (PDF) from the original on 2015-07-02.
48. **[^](#cite_ref-48)** Shalev-Shwartz, Shai; Singer, Yoram; Srebro, Nathan (2007). [*Pegasos: Primal Estimated sub-GrAdient SOlver for SVM*](http://ttic.uchicago.edu/~shai/papers/ShalevSiSr07.pdf) (PDF). ICML. [Archived](https://web.archive.org/web/20131215051700/http://ttic.uchicago.edu/~shai/papers/ShalevSiSr07.pdf) (PDF) from the original on 2013-12-15.
49. **[^](#cite_ref-49)** Fan, Rong-En; Chang, Kai-Wei; Hsieh, Cho-Jui; Wang, Xiang-Rui; Lin, Chih-Jen (2008). ["LIBLINEAR: A library for large linear classification"](https://www.csie.ntu.edu.tw/~cjlin/papers/liblinear.pdf) (PDF). *[Journal of Machine Learning Research](https://en.wikipedia.org/wiki/Journal_of_Machine_Learning_Research)*. **9**: 1871–1874.
50. **[^](#cite_ref-50)** Allen Zhu, Zeyuan; Chen, Weizhu; Wang, Gang; Zhu, Chenguang; Chen, Zheng (2009). [*P-packSVM: Parallel Primal grAdient desCent Kernel SVM*](http://people.csail.mit.edu/zeyuan/paper/2009-ICDM-Parallel.pdf) (PDF). ICDM. [Archived](https://web.archive.org/web/20140407095709/http://people.csail.mit.edu/zeyuan/paper/2009-ICDM-Parallel.pdf) (PDF) from the original on 2014-04-07.
51. **[^](#cite_ref-51)** Fan, Rong-En; Chang, Kai-Wei; Hsieh, Cho-Jui; Wang, Xiang-Rui; Lin, Chih-Jen (2008). "LIBLINEAR: A library for large linear classification". *Journal of Machine Learning Research*. **9** (Aug): 1871–1874.
52. **[^](#cite_ref-52)** Mohamad, Ismail; Usman, Dauda (2013-09-01). ["Standardization and Its Effects on K-Means Clustering Algorithm"](https://doi.org/10.19026%2Frjaset.6.3638). *Research Journal of Applied Sciences, Engineering and Technology*. **6** (17): 3299–3303. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.19026/rjaset.6.3638](https://doi.org/10.19026%2Frjaset.6.3638).
53. **[^](#cite_ref-53)** Fennell, Peter; Zuo, Zhiya; [Lerman, Kristina](https://en.wikipedia.org/wiki/Kristina_Lerman) (2019-12-01). ["Predicting and explaining behavioral data with structured feature space decomposition"](https://doi.org/10.1140%2Fepjds%2Fs13688-019-0201-0). *EPJ Data Science*. **8** 23. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1810.09841](https://arxiv.org/abs/1810.09841). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1140/epjds/s13688-019-0201-0](https://doi.org/10.1140%2Fepjds%2Fs13688-019-0201-0).

* Bennett, Kristin P.; Campbell, Colin (2000). ["Support Vector Machines: Hype or Hallelujah?"](http://kdd.org/exploration_files/bennett.pdf) (PDF). *SIGKDD Explorations*. **2** (2): 1–13. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/380995.380999](https://doi.org/10.1145%2F380995.380999). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [207753020](https://api.semanticscholar.org/CorpusID:207753020).
* Cristianini, Nello; Shawe-Taylor, John (2000). *An Introduction to Support Vector Machines and other kernel-based learning methods*. Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-521-78019-5](https://en.wikipedia.org/wiki/Special:BookSources/0-521-78019-5).
* Fradkin, Dmitriy; Muchnik, Ilya (2006). ["Support Vector Machines for Classification"](http://paul.rutgers.edu/~dfradkin/papers/svm.pdf) (PDF). In Abello, J.; Carmode, G. (eds.). *Discrete Methods in Epidemiology*. DIMACS Series in Discrete Mathematics and Theoretical Computer Science. Vol. 70. pp. 13–20.[*[citation not found](https://en.wikipedia.org/wiki/Template:Harvard_citation_documentation#Wikilink_to_citation_does_not_work)*]
* Joachims, Thorsten (1998). "Text categorization with Support Vector Machines: Learning with many relevant features". In Nédellec, Claire; Rouveirol, Céline (eds.). *Machine Learning: ECML-98*. Lecture Notes in Computer Science. Vol. 1398. Berlin, Heidelberg: Springer. pp. 137–142. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BFb0026683](https://doi.org/10.1007%2FBFb0026683). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-64417-0](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-64417-0). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [2427083](https://api.semanticscholar.org/CorpusID:2427083).
* Ivanciuc, Ovidiu (2007). ["Applications of Support Vector Machines in Chemistry"](http://www.ivanciuc.org/Files/Reprint/Ivanciuc_SVM_CCR_2007_23_291.pdf) (PDF). *Reviews in Computational Chemistry*. Vol. 23. pp. 291–400. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/9780470116449.ch6](https://doi.org/10.1002%2F9780470116449.ch6). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780470116449](https://en.wikipedia.org/wiki/Special:BookSources/9780470116449).
* James, Gareth; Witten, Daniela; Hastie, Trevor; Tibshirani, Robert (2013). ["Support Vector Machines"](http://www-bcf.usc.edu/~gareth/ISL/ISLR%20Seventh%20Printing.pdf#page=345) (PDF). *An Introduction to Statistical Learning : with Applications in R*. New York: Springer. pp. 337–372. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4614-7137-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4614-7137-0).
* Schölkopf, Bernhard; Smola, Alexander J. (2002). *Learning with Kernels*. Cambridge, MA: MIT Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-19475-9](https://en.wikipedia.org/wiki/Special:BookSources/0-262-19475-9).
* Steinwart, Ingo; Christmann, Andreas (2008). *Support Vector Machines*. New York: Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-387-77241-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-387-77241-7).
* Theodoridis, Sergios; Koutroumbas, Konstantinos (2009). *Pattern Recognition* (4th ed.). Academic Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-59749-272-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59749-272-0).