# Backpropagation - Wikipedia

Source: https://en.wikipedia.org/wiki/Backpropagation

---

Optimization algorithm for artificial neural networks

Backpropagation can also refer to the way the result of a playout is propagated up the search tree in

[Monte Carlo tree search](https://en.wikipedia.org/wiki/Monte_Carlo_tree_search#Principle_of_operation)

.

In [machine learning](https://en.wikipedia.org/wiki/Machine_learning), **backpropagation** is a [gradient](https://en.wikipedia.org/wiki/Gradient) computation method commonly used for training a [neural network](https://en.wikipedia.org/wiki/Neural_network_(machine_learning)) in computing parameter updates.

It is an efficient application of the [chain rule](https://en.wikipedia.org/wiki/Chain_rule) to neural networks. Backpropagation efficiently computes the gradient of the loss with respect to the network weights for a single input–output example. It does this by propagating derivatives backward, one layer at a time, from the output layer to the input layer, thereby avoiding redundant chain-rule calculations.

Strictly speaking, the term *backpropagation* refers only to an algorithm for efficiently computing the gradient, not how the gradient is used; but the term is often used loosely to refer to the entire learning algorithm. This includes changing model parameters in the negative direction of the gradient, such as by [stochastic gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent), or as an intermediate step in a more complicated optimizer, such as [Adaptive Moment Estimation](https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Adam).

Backpropagation had multiple discoveries and partial discoveries, with a tangled history and terminology. See the [history](#History) section for details. Some other names for the technique include "reverse mode of [automatic differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation)" or "[reverse accumulation](https://en.wikipedia.org/wiki/Reverse_accumulation)".

Backpropagation computes the gradient in [weight space](https://en.wikipedia.org/wiki/Parameter_space) of a feedforward neural network, with respect to a [loss function](https://en.wikipedia.org/wiki/Loss_function). Denote:

* x
  {\displaystyle x}
  ![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4): input (vector of features)
* y
  {\displaystyle y}
  ![{\displaystyle y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8a6208ec717213d4317e666f1ae872e00620a0d): target output

  :   For classification, output will be a vector of class probabilities (e.g., 



      (
      0.1
      ,
      0.7
      ,
      0.2
      )
      {\displaystyle (0.1,0.7,0.2)}
      ![{\displaystyle (0.1,0.7,0.2)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fbb2f54392fb76b6dea26425e24447bf2c48cc94), and target output is a specific class, encoded by the [one-hot](https://en.wikipedia.org/wiki/One-hot)/[dummy variable](https://en.wikipedia.org/wiki/Dummy_variable_(statistics)) (e.g., 



      (
      0
      ,
      1
      ,
      0
      )
      {\displaystyle (0,1,0)}
      ![{\displaystyle (0,1,0)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3e28bfe8a44d06939011e3ba2159e894c0f22f23)).
* C
  {\displaystyle C}
  ![{\displaystyle C}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fc55753007cd3c18576f7933f6f089196732029): [loss function](https://en.wikipedia.org/wiki/Loss_function) or "cost function"

  :   For classification, this is usually [cross-entropy](https://en.wikipedia.org/wiki/Cross-entropy) (XC, [log loss](https://en.wikipedia.org/wiki/Log_loss)), while for regression it is usually [squared error loss](https://en.wikipedia.org/wiki/Squared_error_loss) (SEL).
* L
  {\displaystyle L}
  ![{\displaystyle L}](https://wikimedia.org/api/rest_v1/media/math/render/svg/103168b86f781fe6e9a4a87b8ea1cebe0ad4ede8): the number of layers
* W

  l
  =
  (

  w

  j
  k

  l
  )
  {\displaystyle W^{l}=(w\_{jk}^{l})}
  ![{\displaystyle W^{l}=(w_{jk}^{l})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6ef80d37cec97e026476841a0e20f9b35c402bd0): the weights between layer 



  l
  −
  1
  {\displaystyle l-1}
  ![{\displaystyle l-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4e0d448948a353d0b2469b88ca918f34e32c8752) and 



  l
  {\displaystyle l}
  ![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac), where 




  w

  j
  k

  l
  {\displaystyle w\_{jk}^{l}}
  ![{\displaystyle w_{jk}^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8f47c5a00989f34da7a6cde720321223af36a019) is the weight between the 



  k
  {\displaystyle k}
  ![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40)-th node in layer 



  l
  −
  1
  {\displaystyle l-1}
  ![{\displaystyle l-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4e0d448948a353d0b2469b88ca918f34e32c8752) and the 



  j
  {\displaystyle j}
  ![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0)-th node in layer 



  l
  {\displaystyle l}
  ![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac)
* f

  l
  {\displaystyle f^{l}}
  ![{\displaystyle f^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ee0e6c373d37a6a029890630310cf35ba6acd174): [activation functions](https://en.wikipedia.org/wiki/Activation_function) at layer 



  l
  {\displaystyle l}
  ![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac)

  :   For classification the last layer is usually the [logistic function](https://en.wikipedia.org/wiki/Logistic_function) for binary classification, and [softmax](https://en.wikipedia.org/wiki/Softmax_function) (softargmax) for multi-class classification, while for the hidden layers this was traditionally a [sigmoid function](https://en.wikipedia.org/wiki/Sigmoid_function) (logistic function or others) on each node (coordinate), but today is more varied, with [rectifier](https://en.wikipedia.org/wiki/Rectifier_(neural_networks)) ([ramp](https://en.wikipedia.org/wiki/Ramp_function), [ReLU](https://en.wikipedia.org/wiki/ReLU)) being common.
* a

  j

  l
  {\displaystyle a\_{j}^{l}}
  ![{\displaystyle a_{j}^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fbb8152a0d8674023edebc1a8760c3ef478831d8): activation of the 



  j
  {\displaystyle j}
  ![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0)-th node in layer 



  l
  {\displaystyle l}
  ![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac).

In the derivation of backpropagation, other intermediate quantities are used by introducing them as needed below. Bias terms are not treated specially since they correspond to a weight with a fixed input of 1. For backpropagation the specific loss function and activation functions do not matter as long as they and their derivatives can be evaluated efficiently. Traditional activation functions include sigmoid, [tanh](https://en.wikipedia.org/wiki/Tanh), and [ReLU](https://en.wikipedia.org/wiki/Rectifier_(neural_networks)). [Swish](https://en.wikipedia.org/wiki/Swish_function), [Mish](https://en.wikipedia.org/wiki/Rectifier_(neural_networks)#Mish), and many others.

The overall network is a combination of [function composition](https://en.wikipedia.org/wiki/Function_composition) and [matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication):

:   g
    (
    x
    )
    :=

    f

    L
    (

    W

    L

    f

    L
    −
    1
    (

    W

    L
    −
    1
    ⋯

    f

    1
    (

    W

    1
    x
    )
    ⋯
    )
    )
    {\displaystyle g(x):=f^{L}(W^{L}f^{L-1}(W^{L-1}\cdots f^{1}(W^{1}x)\cdots ))}
    ![{\displaystyle g(x):=f^{L}(W^{L}f^{L-1}(W^{L-1}\cdots f^{1}(W^{1}x)\cdots ))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/110b3c8ee790c91cf79a882f1515f6f05f8db335)

For a training set there will be a set of input–output pairs, 




{

(

x

i
,

y

i
)
}
{\displaystyle \left\{(x\_{i},y\_{i})\right\}}
![{\displaystyle \left\{(x_{i},y_{i})\right\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/26d74b1e662ee0f0e1604f2e5a63fde1456bb19e). For each input–output pair 



(

x

i
,

y

i
)
{\displaystyle (x\_{i},y\_{i})}
![{\displaystyle (x_{i},y_{i})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d6dbb919b91ccacf17ed47898048428a1baf9703) in the training set, the loss of the model on that pair is the cost of the difference between the predicted output 



g
(

x

i
)
{\displaystyle g(x\_{i})}
![{\displaystyle g(x_{i})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3badcf4ca3e9414821942baee2851b8f9bd27294) and the target output 




y

i
{\displaystyle y\_{i}}
![{\displaystyle y_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/67d30d30b6c2dbe4d6f150d699de040937ecc95f):

:   C
    (

    y

    i
    ,
    g
    (

    x

    i
    )
    )
    {\displaystyle C(y\_{i},g(x\_{i}))}
    ![{\displaystyle C(y_{i},g(x_{i}))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/57cd91c74155873ce3e1df0fab12d13e7a8f335f)

Note the distinction: during model evaluation the weights are fixed while the inputs vary (and the target output may be unknown), and the network ends with the output layer (it does not include the loss function). During model training the input–output pair is fixed while the weights vary, and the network ends with the loss function.

Backpropagation computes the gradient for a *fixed* input–output pair 



(

x

i
,

y

i
)
{\displaystyle (x\_{i},y\_{i})}
![{\displaystyle (x_{i},y_{i})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d6dbb919b91ccacf17ed47898048428a1baf9703), where the weights 




w

j
k

l
{\displaystyle w\_{jk}^{l}}
![{\displaystyle w_{jk}^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8f47c5a00989f34da7a6cde720321223af36a019) can vary. Each individual component of the gradient, 



∂
C

/
∂

w

j
k

l
,
{\displaystyle \partial C/\partial w\_{jk}^{l},}
![{\displaystyle \partial C/\partial w_{jk}^{l},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/924218a6182ed0f43094ec9f5d8a66c4b9b9026f) can be computed by the chain rule; but doing this separately for each weight is inefficient. Backpropagation efficiently computes the gradient by avoiding duplicate calculations and not computing unnecessary intermediate values, by computing the gradient of each layer – specifically the gradient of the weighted *input* of each layer, denoted by 




δ

l
{\displaystyle \delta ^{l}}
![{\displaystyle \delta ^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/249b787ef6af0149f7d71b951651c43633e0d56d) – from back to front.

Informally, the key point is that since the only way a weight in 




W

l
{\displaystyle W^{l}}
![{\displaystyle W^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/60b87bc8138a82f110491bb1abd0ea6eefe84c22) affects the loss is through its effect on the *next* layer, and it does so *linearly*, 




δ

l
{\displaystyle \delta ^{l}}
![{\displaystyle \delta ^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/249b787ef6af0149f7d71b951651c43633e0d56d) are the only data you need to compute the gradients of the weights at layer 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac), and then the gradients of weights of previous layer can be computed by 




δ

l
−
1
{\displaystyle \delta ^{l-1}}
![{\displaystyle \delta ^{l-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e4ff3faf90011d3ed813a4ac2fe31904765e2963) and repeated recursively. This avoids inefficiency in two ways. First, it avoids duplication because when computing the gradient at layer 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac), it is unnecessary to recompute all derivatives on later layers 



l
+
1
,
l
+
2
,
…
{\displaystyle l+1,l+2,\ldots }
![{\displaystyle l+1,l+2,\ldots }](https://wikimedia.org/api/rest_v1/media/math/render/svg/49f721be70a4213a6196f3d14f58eb5844eebb1a) each time. Second, it avoids unnecessary intermediate calculations, because at each stage it directly computes the gradient of the weights with respect to the ultimate output (the loss), rather than unnecessarily computing the derivatives of the values of hidden layers with respect to changes in weights 



∂

a


j
′


l
′

/
∂

w

j
k

l
{\displaystyle \partial a\_{j'}^{l'}/\partial w\_{jk}^{l}}
![{\displaystyle \partial a_{j'}^{l'}/\partial w_{jk}^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/67e885d69c5968ab173f51222b89d0701b3459d6).

Backpropagation can be expressed for simple feedforward networks in terms of [matrix multiplication](#Matrix_multiplication), or more generally in terms of the [adjoint graph](#Adjoint_graph).

## Matrix multiplication

[[edit](/w/index.php?title=Backpropagation&action=edit&section=2)]

For the basic case of a feedforward network, where nodes in each layer are connected only to nodes in the immediate next layer (without skipping any layers), and there is a loss function that computes a scalar loss for the final output, backpropagation can be understood simply by matrix multiplication. Essentially, backpropagation evaluates the expression for the derivative of the cost function as a product of derivatives between each layer *from right to left* – "backwards" – with the gradient of the weights between each layer being a simple modification of the partial products (the "backwards propagated error").

Given an input–output pair 



(
x
,
y
)
{\displaystyle (x,y)}
![{\displaystyle (x,y)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/41cf50e4a314ca8e2c30964baa8d26e5be7a9386), the loss is:

:   C
    (
    y
    ,

    f

    L
    (

    W

    L

    f

    L
    −
    1
    (

    W

    L
    −
    1
    ⋯

    f

    2
    (

    W

    2

    f

    1
    (

    W

    1
    x
    )
    )
    ⋯
    )
    )
    )
    {\displaystyle C(y,f^{L}(W^{L}f^{L-1}(W^{L-1}\cdots f^{2}(W^{2}f^{1}(W^{1}x))\cdots )))}
    ![{\displaystyle C(y,f^{L}(W^{L}f^{L-1}(W^{L-1}\cdots f^{2}(W^{2}f^{1}(W^{1}x))\cdots )))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ca8768a6ab49c9e52086741f958221b56b6d03e)

To compute this, one starts with the input 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) and works forward; denote the weighted input of each hidden layer as 




z

l
{\displaystyle z^{l}}
![{\displaystyle z^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ea4d56d1c5e8fe66b402ea0d1b92368902531dd) and the output of hidden layer 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac) as the activation 




a

l
{\displaystyle a^{l}}
![{\displaystyle a^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/975d9aa9ed78016e94e7438c5af2a6ec8b97a0e9). For backpropagation, the activation 




a

l
{\displaystyle a^{l}}
![{\displaystyle a^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/975d9aa9ed78016e94e7438c5af2a6ec8b97a0e9) as well as the derivatives 



(

f

l

)
′
{\displaystyle (f^{l})'}
![{\displaystyle (f^{l})'}](https://wikimedia.org/api/rest_v1/media/math/render/svg/75a2f054b20672fb790ed501c4a39873233d4745) (evaluated at 




z

l
{\displaystyle z^{l}}
![{\displaystyle z^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ea4d56d1c5e8fe66b402ea0d1b92368902531dd)) must be cached for use during the backwards pass.

The derivative of the loss in terms of the inputs is given by the chain rule; note that each term is a [total derivative](https://en.wikipedia.org/wiki/Total_derivative), evaluated at the value of the network (at each node) on the input 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4):

:   d
    C

    d

    a

    L
    ⋅



    d

    a

    L

    d

    z

    L
    ⋅



    d

    z

    L

    d

    a

    L
    −
    1
    ⋅



    d

    a

    L
    −
    1

    d

    z

    L
    −
    1
    ⋅



    d

    z

    L
    −
    1

    d

    a

    L
    −
    2
    ⋅
    …
    ⋅



    d

    a

    1

    d

    z

    1
    ⋅



    ∂

    z

    1

    ∂
    x
    ,
    {\displaystyle {\frac {dC}{da^{L}}}\cdot {\frac {da^{L}}{dz^{L}}}\cdot {\frac {dz^{L}}{da^{L-1}}}\cdot {\frac {da^{L-1}}{dz^{L-1}}}\cdot {\frac {dz^{L-1}}{da^{L-2}}}\cdot \ldots \cdot {\frac {da^{1}}{dz^{1}}}\cdot {\frac {\partial z^{1}}{\partial x}},}
    ![{\displaystyle {\frac {dC}{da^{L}}}\cdot {\frac {da^{L}}{dz^{L}}}\cdot {\frac {dz^{L}}{da^{L-1}}}\cdot {\frac {da^{L-1}}{dz^{L-1}}}\cdot {\frac {dz^{L-1}}{da^{L-2}}}\cdot \ldots \cdot {\frac {da^{1}}{dz^{1}}}\cdot {\frac {\partial z^{1}}{\partial x}},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b758730620b9e4d0b2018f99c3cc270fa8e3bd31)

where 






d

a

L

d

z

L
{\displaystyle {\frac {da^{L}}{dz^{L}}}}
![{\displaystyle {\frac {da^{L}}{dz^{L}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e72728161114c81bdf209852a4157264296326fb) is a [diagonal matrix](https://en.wikipedia.org/wiki/Diagonal_matrix).

These terms are: the derivative of the loss function; the derivatives of the activation functions; and the matrices of weights:

:   d
    C

    d

    a

    L
    ∘
    (

    f

    L

    )
    ′
    ⋅

    W

    L
    ∘
    (

    f

    L
    −
    1

    )
    ′
    ⋅

    W

    L
    −
    1
    ∘
    ⋯
    ∘
    (

    f

    1

    )
    ′
    ⋅

    W

    1
    .
    {\displaystyle {\frac {dC}{da^{L}}}\circ (f^{L})'\cdot W^{L}\circ (f^{L-1})'\cdot W^{L-1}\circ \cdots \circ (f^{1})'\cdot W^{1}.}
    ![{\displaystyle {\frac {dC}{da^{L}}}\circ (f^{L})'\cdot W^{L}\circ (f^{L-1})'\cdot W^{L-1}\circ \cdots \circ (f^{1})'\cdot W^{1}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f46ed48b7054ef8629f889782c3ffbf953818ca)

The gradient 



∇
{\displaystyle \nabla }
![{\displaystyle \nabla }](https://wikimedia.org/api/rest_v1/media/math/render/svg/a3d0e93b78c50237f9ea83d027e4ebbdaef354b2) is the [transpose](https://en.wikipedia.org/wiki/Transpose) of the derivative of the output in terms of the input, so the matrices are transposed and the order of multiplication is reversed, but the entries are the same:

:   ∇

    x
    C
    =
    (

    W

    1

    )

    T
    ⋅
    (

    f

    1

    )
    ′
    ∘
    …
    ∘
    (

    W

    L
    −
    1

    )

    T
    ⋅
    (

    f

    L
    −
    1

    )
    ′
    ∘
    (

    W

    L

    )

    T
    ⋅
    (

    f

    L

    )
    ′
    ∘

    ∇


    a

    L
    C
    .
    {\displaystyle \nabla \_{x}C=(W^{1})^{T}\cdot (f^{1})'\circ \ldots \circ (W^{L-1})^{T}\cdot (f^{L-1})'\circ (W^{L})^{T}\cdot (f^{L})'\circ \nabla \_{a^{L}}C.}
    ![{\displaystyle \nabla _{x}C=(W^{1})^{T}\cdot (f^{1})'\circ \ldots \circ (W^{L-1})^{T}\cdot (f^{L-1})'\circ (W^{L})^{T}\cdot (f^{L})'\circ \nabla _{a^{L}}C.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6ef269aa176ce5488ce5f6038eebcb9c8fe3c728)

Backpropagation then consists essentially of evaluating this expression from right to left (equivalently, multiplying the previous expression for the derivative from left to right), computing the gradient at each layer on the way; there is an added step, because the gradient of the weights is not just a subexpression: there's an extra multiplication.

Introducing the auxiliary quantity 




δ

l
{\displaystyle \delta ^{l}}
![{\displaystyle \delta ^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/249b787ef6af0149f7d71b951651c43633e0d56d) for the partial products (multiplying from right to left), interpreted as the "error at level 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac)" and defined as the gradient of the input values at level 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac):

:   δ

    l
    :=
    (

    f

    l

    )
    ′
    ∘
    (

    W

    l
    +
    1

    )

    T
    ⋅
    (

    f

    l
    +
    1

    )
    ′
    ∘
    ⋯
    ∘
    (

    W

    L
    −
    1

    )

    T
    ⋅
    (

    f

    L
    −
    1

    )
    ′
    ∘
    (

    W

    L

    )

    T
    ⋅
    (

    f

    L

    )
    ′
    ∘

    ∇


    a

    L
    C
    .
    {\displaystyle \delta ^{l}:=(f^{l})'\circ (W^{l+1})^{T}\cdot (f^{l+1})'\circ \cdots \circ (W^{L-1})^{T}\cdot (f^{L-1})'\circ (W^{L})^{T}\cdot (f^{L})'\circ \nabla \_{a^{L}}C.}
    ![{\displaystyle \delta ^{l}:=(f^{l})'\circ (W^{l+1})^{T}\cdot (f^{l+1})'\circ \cdots \circ (W^{L-1})^{T}\cdot (f^{L-1})'\circ (W^{L})^{T}\cdot (f^{L})'\circ \nabla _{a^{L}}C.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/85f95e97ceff3617728642e31c4090869970cad9)

Note that 




δ

l
{\displaystyle \delta ^{l}}
![{\displaystyle \delta ^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/249b787ef6af0149f7d71b951651c43633e0d56d) is a vector, of length equal to the number of nodes in level 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac); each component is interpreted as the "cost attributable to (the value of) that node".

The gradient of the weights in layer 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac) is then:

:   ∇


    W

    l
    C
    =

    δ

    l
    (

    a

    l
    −
    1

    )

    T
    .
    {\displaystyle \nabla \_{W^{l}}C=\delta ^{l}(a^{l-1})^{T}.}
    ![{\displaystyle \nabla _{W^{l}}C=\delta ^{l}(a^{l-1})^{T}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ef23e829ba87604d15ab01965708906c2baa1e4d)

The factor of 




a

l
−
1
{\displaystyle a^{l-1}}
![{\displaystyle a^{l-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5a66d0e6ecb4f486f7e1b63c6ae0a91448624163) is because the weights 




W

l
{\displaystyle W^{l}}
![{\displaystyle W^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/60b87bc8138a82f110491bb1abd0ea6eefe84c22) between level 



l
−
1
{\displaystyle l-1}
![{\displaystyle l-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4e0d448948a353d0b2469b88ca918f34e32c8752) and 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac) affect level 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac) proportionally to the inputs (activations): the inputs are fixed, the weights vary.

The 




δ

l
{\displaystyle \delta ^{l}}
![{\displaystyle \delta ^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/249b787ef6af0149f7d71b951651c43633e0d56d) can easily be computed recursively, going from right to left, as:

:   δ

    l
    −
    1
    :=
    (

    f

    l
    −
    1

    )
    ′
    ∘
    (

    W

    l

    )

    T
    ⋅

    δ

    l
    .
    {\displaystyle \delta ^{l-1}:=(f^{l-1})'\circ (W^{l})^{T}\cdot \delta ^{l}.}
    ![{\displaystyle \delta ^{l-1}:=(f^{l-1})'\circ (W^{l})^{T}\cdot \delta ^{l}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/16ccb3d3b717f3fa8e1aa72c3a46bbc70945e4cf)

The gradients of the weights can thus be computed using a few matrix multiplications for each level; this is backpropagation.

Compared with naively computing forwards (using the 




δ

l
{\displaystyle \delta ^{l}}
![{\displaystyle \delta ^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/249b787ef6af0149f7d71b951651c43633e0d56d) for illustration):

:   δ

    1


    =
    (

    f

    1

    )
    ′
    ∘
    (

    W

    2

    )

    T
    ⋅
    (

    f

    2

    )
    ′
    ∘
    ⋯
    ∘
    (

    W

    L
    −
    1

    )

    T
    ⋅
    (

    f

    L
    −
    1

    )
    ′
    ∘
    (

    W

    L

    )

    T
    ⋅
    (

    f

    L

    )
    ′
    ∘

    ∇


    a

    L
    C



    δ

    2


    =
    (

    f

    2

    )
    ′
    ∘
    ⋯
    ∘
    (

    W

    L
    −
    1

    )

    T
    ⋅
    (

    f

    L
    −
    1

    )
    ′
    ∘
    (

    W

    L

    )

    T
    ⋅
    (

    f

    L

    )
    ′
    ∘

    ∇


    a

    L
    C




    ⋮



    δ

    L
    −
    1


    =
    (

    f

    L
    −
    1

    )
    ′
    ∘
    (

    W

    L

    )

    T
    ⋅
    (

    f

    L

    )
    ′
    ∘

    ∇


    a

    L
    C



    δ

    L


    =
    (

    f

    L

    )
    ′
    ∘

    ∇


    a

    L
    C
    ,
    {\displaystyle {\begin{aligned}\delta ^{1}&=(f^{1})'\circ (W^{2})^{T}\cdot (f^{2})'\circ \cdots \circ (W^{L-1})^{T}\cdot (f^{L-1})'\circ (W^{L})^{T}\cdot (f^{L})'\circ \nabla \_{a^{L}}C\\\delta ^{2}&=(f^{2})'\circ \cdots \circ (W^{L-1})^{T}\cdot (f^{L-1})'\circ (W^{L})^{T}\cdot (f^{L})'\circ \nabla \_{a^{L}}C\\&\vdots \\\delta ^{L-1}&=(f^{L-1})'\circ (W^{L})^{T}\cdot (f^{L})'\circ \nabla \_{a^{L}}C\\\delta ^{L}&=(f^{L})'\circ \nabla \_{a^{L}}C,\end{aligned}}}
    ![{\displaystyle {\begin{aligned}\delta ^{1}&=(f^{1})'\circ (W^{2})^{T}\cdot (f^{2})'\circ \cdots \circ (W^{L-1})^{T}\cdot (f^{L-1})'\circ (W^{L})^{T}\cdot (f^{L})'\circ \nabla _{a^{L}}C\\\delta ^{2}&=(f^{2})'\circ \cdots \circ (W^{L-1})^{T}\cdot (f^{L-1})'\circ (W^{L})^{T}\cdot (f^{L})'\circ \nabla _{a^{L}}C\\&\vdots \\\delta ^{L-1}&=(f^{L-1})'\circ (W^{L})^{T}\cdot (f^{L})'\circ \nabla _{a^{L}}C\\\delta ^{L}&=(f^{L})'\circ \nabla _{a^{L}}C,\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65693d61321a41ee6a79f9e24e944f581a33240a)

There are two key differences with backpropagation:

1. Computing 




   δ

   l
   −
   1
   {\displaystyle \delta ^{l-1}}
   ![{\displaystyle \delta ^{l-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e4ff3faf90011d3ed813a4ac2fe31904765e2963) in terms of 




   δ

   l
   {\displaystyle \delta ^{l}}
   ![{\displaystyle \delta ^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/249b787ef6af0149f7d71b951651c43633e0d56d) avoids the obvious duplicate multiplication of layers 



   l
   {\displaystyle l}
   ![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac) and beyond.
2. Multiplying starting from 




   ∇


   a

   L
   C
   {\displaystyle \nabla \_{a^{L}}C}
   ![{\displaystyle \nabla _{a^{L}}C}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a3491216364a8fe84026d9f114a9477be761c2c) – propagating the error *backwards* – means that each step simply multiplies a vector (




   δ

   l
   {\displaystyle \delta ^{l}}
   ![{\displaystyle \delta ^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/249b787ef6af0149f7d71b951651c43633e0d56d)) by the matrices of weights 



   (

   W

   l

   )

   T
   {\displaystyle (W^{l})^{T}}
   ![{\displaystyle (W^{l})^{T}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/95ded7046a67e4ea5039c86405383ff82c74308e) and derivatives of activations 



   (

   f

   l
   −
   1

   )
   ′
   {\displaystyle (f^{l-1})'}
   ![{\displaystyle (f^{l-1})'}](https://wikimedia.org/api/rest_v1/media/math/render/svg/89d6b56875a57b50369e097a55fe50f1be7b9aaf). By contrast, multiplying forwards, starting from the changes at an earlier layer, means that each multiplication multiplies a *matrix* by a *matrix*. This is much more expensive, and corresponds to tracking every possible path of a change in one layer 



   l
   {\displaystyle l}
   ![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac) forward to changes in the layer 



   l
   +
   2
   {\displaystyle l+2}
   ![{\displaystyle l+2}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f96df20468aecf3a1b6dfedd08982cb6edc489bb) (for multiplying 




   W

   l
   +
   1
   {\displaystyle W^{l+1}}
   ![{\displaystyle W^{l+1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2d3f3b2ac57d2c95e81aafd230d2065e8f8cc401) by 




   W

   l
   +
   2
   {\displaystyle W^{l+2}}
   ![{\displaystyle W^{l+2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/74caba7e74227959403a15dfc8041720dae8817d), with additional multiplications for the derivatives of the activations), which unnecessarily computes the intermediate quantities of how weight changes affect the values of hidden nodes.

For more general graphs, and other advanced variations, backpropagation can be understood in terms of [automatic differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation), where backpropagation is a special case of [reverse accumulation](https://en.wikipedia.org/wiki/Reverse_accumulation) (or "reverse mode").

The goal of any [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) algorithm is to find a function that best maps a set of inputs to their correct output. The motivation for backpropagation is to train a multi-layered neural network such that it can learn the appropriate internal representations to allow it to learn any arbitrary mapping of input to output.

### Learning as an optimization problem

[[edit](/w/index.php?title=Backpropagation&action=edit&section=6)]

To understand the mathematical derivation of the backpropagation algorithm, it helps to first develop some intuition about the relationship between the actual output of a neuron and the correct output for a particular training example. Consider a simple neural network with two input units, one output unit and no hidden units, and in which each neuron uses a [linear output](https://en.wikipedia.org/wiki/Artificial_neuron#Linear_combination) (unlike most work on neural networks, in which mapping from inputs to outputs is non-linear) that is the weighted sum of its input.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/4/42/A_simple_neural_network_with_two_input_units_and_one_output_unit.png/250px-A_simple_neural_network_with_two_input_units_and_one_output_unit.png)](https://en.wikipedia.org/wiki/File:A_simple_neural_network_with_two_input_units_and_one_output_unit.png)

A simple neural network with two input units (each with a single input) and one output unit (with two inputs)

Initially, before training, the weights will be set randomly. Then the neuron learns from [training examples](https://en.wikipedia.org/wiki/Training_set), which in this case consist of a set of [tuples](https://en.wikipedia.org/wiki/Tuple) 



(

x

1
,

x

2
,
t
)
{\displaystyle (x\_{1},x\_{2},t)}
![{\displaystyle (x_{1},x_{2},t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dbc9205ba047983879ece2f78ff0cf1f7525bdd5) where 




x

1
{\displaystyle x\_{1}}
![{\displaystyle x_{1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a8788bf85d532fa88d1fb25eff6ae382a601c308) and 




x

2
{\displaystyle x\_{2}}
![{\displaystyle x_{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d7af1b928f06e4c7e3e8ebfd60704656719bd766) are the inputs to the network and t is the correct output (the output the network should produce given those inputs, when it has been trained). The initial network, given 




x

1
{\displaystyle x\_{1}}
![{\displaystyle x_{1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a8788bf85d532fa88d1fb25eff6ae382a601c308) and 




x

2
{\displaystyle x\_{2}}
![{\displaystyle x_{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d7af1b928f06e4c7e3e8ebfd60704656719bd766), will compute an output y that likely differs from t (given random weights). A [loss function](https://en.wikipedia.org/wiki/Loss_function) 



L
(
t
,
y
)
{\displaystyle L(t,y)}
![{\displaystyle L(t,y)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a6d0d207e3b5787cffb4f86784345fe4393893fe) is used for measuring the discrepancy between the target output t and the computed output y. For [regression analysis](https://en.wikipedia.org/wiki/Regression_analysis) problems the squared error can be used as a loss function, for [classification](https://en.wikipedia.org/wiki/Statistical_classification) the [categorical cross-entropy](https://en.wikipedia.org/wiki/Cross-entropy) can be used.

As an example consider a regression problem using the square error as a loss:

:   L
    (
    t
    ,
    y
    )
    =
    (
    t
    −
    y

    )

    2
    =
    E
    ,
    {\displaystyle L(t,y)=(t-y)^{2}=E,}
    ![{\displaystyle L(t,y)=(t-y)^{2}=E,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ca7e3b55f443f8e490f1e6e552470f93802e5e43)

where E is the discrepancy or error.

Consider the network on a single training case: 



(
1
,
1
,
0
)
{\displaystyle (1,1,0)}
![{\displaystyle (1,1,0)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5568de79a98cdcb48821cd81b670c095fa4c8b6f). Thus, the input 




x

1
{\displaystyle x\_{1}}
![{\displaystyle x_{1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a8788bf85d532fa88d1fb25eff6ae382a601c308) and 




x

2
{\displaystyle x\_{2}}
![{\displaystyle x_{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d7af1b928f06e4c7e3e8ebfd60704656719bd766) are 1 and 1 respectively and the correct output, t is 0. Now if the relation is plotted between the network's output y on the horizontal axis and the error E on the vertical axis, the result is a parabola. The [minimum](https://en.wikipedia.org/wiki/Maxima_and_minima) of the [parabola](https://en.wikipedia.org/wiki/Parabola) corresponds to the output y which minimizes the error E. For a single training case, the minimum also touches the horizontal axis, which means the error will be zero and the network can produce an output y that exactly matches the target output t. Therefore, the problem of mapping inputs to outputs can be reduced to an [optimization problem](https://en.wikipedia.org/wiki/Optimization_problem) of finding a function that will produce the minimal error.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Error_surface_of_a_linear_neuron_for_a_single_training_case.png/250px-Error_surface_of_a_linear_neuron_for_a_single_training_case.png)](https://en.wikipedia.org/wiki/File:Error_surface_of_a_linear_neuron_for_a_single_training_case.png)

Error surface of a linear neuron for a single training case

However, the output of a neuron depends on the weighted sum of all its inputs:

:   y
    =

    x

    1

    w

    1
    +

    x

    2

    w

    2
    ,
    {\displaystyle y=x\_{1}w\_{1}+x\_{2}w\_{2},}
    ![{\displaystyle y=x_{1}w_{1}+x_{2}w_{2},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6297e881012aa2988838c056f86c589828b80e7d)

where 




w

1
{\displaystyle w\_{1}}
![{\displaystyle w_{1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f6728d2b30f42f88b52281be5ae0584fdc9df64) and 




w

2
{\displaystyle w\_{2}}
![{\displaystyle w_{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8998e0957bb573a19e7d9d934ced62ee68ab8fb8) are the weights on the connection from the input units to the output unit. Therefore, the error also depends on the incoming weights to the neuron, which is ultimately what needs to be changed in the network to enable learning.

In this example, upon injecting the training data 



(
1
,
1
,
0
)
{\displaystyle (1,1,0)}
![{\displaystyle (1,1,0)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5568de79a98cdcb48821cd81b670c095fa4c8b6f), the loss function becomes

E
=
(
t
−
y

)

2
=

y

2
=
(

x

1

w

1
+

x

2

w

2

)

2
=
(

w

1
+

w

2

)

2
.
{\displaystyle E=(t-y)^{2}=y^{2}=(x\_{1}w\_{1}+x\_{2}w\_{2})^{2}=(w\_{1}+w\_{2})^{2}.}
![{\displaystyle E=(t-y)^{2}=y^{2}=(x_{1}w_{1}+x_{2}w_{2})^{2}=(w_{1}+w_{2})^{2}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9642579185c542b0e8312a7edeeacf6abbb8934f)

Then, the loss function 



E
{\displaystyle E}
![{\displaystyle E}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4232c9de2ee3eec0a9c0a19b15ab92daa6223f9b) takes the form of a parabolic cylinder with its base directed along 




w

1
=
−

w

2
{\displaystyle w\_{1}=-w\_{2}}
![{\displaystyle w_{1}=-w_{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/839b25f7684ef2b1c6f960f962d64c0e993520b2). Since all sets of weights that satisfy 




w

1
=
−

w

2
{\displaystyle w\_{1}=-w\_{2}}
![{\displaystyle w_{1}=-w_{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/839b25f7684ef2b1c6f960f962d64c0e993520b2) minimize the loss function, in this case additional constraints are required to converge to a unique solution. Additional constraints could either be generated by setting specific conditions to the weights, or by injecting additional training data.

One commonly used algorithm to find the set of weights that minimizes the error is [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent). By backpropagation, the steepest descent direction is calculated of the loss function versus the present synaptic weights. Then, the weights can be modified along the steepest descent direction, and the error is minimized in an efficient way.

The gradient descent method involves calculating the derivative of the loss function with respect to the weights of the network. This is normally done using backpropagation. Assuming one output neuron, the squared error function is

:   E
    =
    L
    (
    t
    ,
    y
    )
    {\displaystyle E=L(t,y)}
    ![{\displaystyle E=L(t,y)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9db5e7ae55377b930b4bdaa8821d33fef2217792)

where

:   L
    {\displaystyle L}
    ![{\displaystyle L}](https://wikimedia.org/api/rest_v1/media/math/render/svg/103168b86f781fe6e9a4a87b8ea1cebe0ad4ede8) is the loss for the output 



    y
    {\displaystyle y}
    ![{\displaystyle y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8a6208ec717213d4317e666f1ae872e00620a0d) and target value 



    t
    {\displaystyle t}
    ![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560),
:   t
    {\displaystyle t}
    ![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560) is the target output for a training sample, and
:   y
    {\displaystyle y}
    ![{\displaystyle y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8a6208ec717213d4317e666f1ae872e00620a0d) is the actual output of the output neuron.

In this section, the order of the weight indexes are reversed relative to the prior section: 




w

i
j
{\displaystyle w\_{ij}}
![{\displaystyle w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3302ff355269436b43bc2fbe180303881c09321) is weight from the 



i
{\displaystyle i}
![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20)th to the

j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0)th unit. For each neuron 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0), its output 




o

j
{\displaystyle o\_{j}}
![{\displaystyle o_{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0229f31d42e856d5af6aa970042abed37bce87f9) is defined as

:   o

    j
    =
    φ
    (


    net

    j
    )
    =
    φ

    (


    ∑

    k
    =
    1

    n

    w

    k
    j

    x

    k
    )
    ,
    {\displaystyle o\_{j}=\varphi ({\text{net}}\_{j})=\varphi \left(\sum \_{k=1}^{n}w\_{kj}x\_{k}\right),}
    ![{\displaystyle o_{j}=\varphi ({\text{net}}_{j})=\varphi \left(\sum _{k=1}^{n}w_{kj}x_{k}\right),}](https://wikimedia.org/api/rest_v1/media/math/render/svg/538346d8b13891ef0ca6ae18e6e4ccd68964458a)

where the [activation function](https://en.wikipedia.org/wiki/Activation_function) 



φ
{\displaystyle \varphi }
![{\displaystyle \varphi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/33ee699558d09cf9d653f6351f9fda0b2f4aaa3e) is [non-linear](https://en.wikipedia.org/wiki/Non-linear) and [differentiable](https://en.wikipedia.org/wiki/Differentiable_function) over the activation region (the ReLU is not differentiable at one point). A historically used activation function is the [logistic function](https://en.wikipedia.org/wiki/Logistic_function):

:   φ
    (
    z
    )
    =


    1

    1
    +

    e

    −
    z
    {\displaystyle \varphi (z)={\frac {1}{1+e^{-z}}}}
    ![{\displaystyle \varphi (z)={\frac {1}{1+e^{-z}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3d4d1a31c11f8fc840738cf30326c08cfcdba81)

which has a [convenient](https://en.wikipedia.org/wiki/Logistic_function#Mathematical_properties) derivative of:

:   d
    φ

    d
    z
    =
    φ
    (
    z
    )
    (
    1
    −
    φ
    (
    z
    )
    )
    {\displaystyle {\frac {d\varphi }{dz}}=\varphi (z)(1-\varphi (z))}
    ![{\displaystyle {\frac {d\varphi }{dz}}=\varphi (z)(1-\varphi (z))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/52ed6ebbb4540ca08b3be2f1dbddd08d43304a83)

The input 





net

j
{\displaystyle {\text{net}}\_{j}}
![{\displaystyle {\text{net}}_{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ac5fc6b518b9eb768d6dfd4946640ea28f217dd3) to a neuron is the weighted sum of outputs 




o

k
{\displaystyle o\_{k}}
![{\displaystyle o_{k}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1e57d19af3dbdeb11490339d1e35976411d5dc35) of previous neurons. If the neuron is in the first layer after the input layer, the 




o

k
{\displaystyle o\_{k}}
![{\displaystyle o_{k}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1e57d19af3dbdeb11490339d1e35976411d5dc35) of the input layer are simply the inputs 




x

k
{\displaystyle x\_{k}}
![{\displaystyle x_{k}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6d2b88c64c76a03611549fb9b4cf4ed060b56002) to the network. The number of input units to the neuron is 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b). The variable 




w

k
j
{\displaystyle w\_{kj}}
![{\displaystyle w_{kj}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f648fa9eb42b941e1320b741cbb73467a5bffcb3) denotes the weight between neuron 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) of the previous layer and neuron 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0) of the current layer.

### Finding the derivative of the error

[[edit](/w/index.php?title=Backpropagation&action=edit&section=8)]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/6/60/ArtificialNeuronModel_english.png/500px-ArtificialNeuronModel_english.png)](https://en.wikipedia.org/wiki/File:ArtificialNeuronModel_english.png)

Diagram of an artificial neural network to illustrate the notation used here

Calculating the [partial derivative](https://en.wikipedia.org/wiki/Partial_derivative) of the error with respect to a weight 




w

i
j
{\displaystyle w\_{ij}}
![{\displaystyle w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3302ff355269436b43bc2fbe180303881c09321) is done using the [chain rule](https://en.wikipedia.org/wiki/Chain_rule) twice:

| ∂ E ∂ w i j = ∂ E ∂ o j ∂ o j ∂ w i j = ∂ E ∂ o j ∂ o j ∂ net j ∂ net j ∂ w i j {\displaystyle {\frac {\partial E}{\partial w_{ij}}}={\frac {\partial E}{\partial o_{j}}}{\frac {\partial o_{j}}{\partial w_{ij}}}={\frac {\partial E}{\partial o_{j}}}{\frac {\partial o_{j}}{\partial {\text{net}}_{j}}}{\frac {\partial {\text{net}}_{j}}{\partial w_{ij}}}} |  |  |
| --- | --- | --- |

In the last factor of the right-hand side of the above, only one term in the sum 





net

j
{\displaystyle {\text{net}}\_{j}}
![{\displaystyle {\text{net}}_{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ac5fc6b518b9eb768d6dfd4946640ea28f217dd3) depends on 




w

i
j
{\displaystyle w\_{ij}}
![{\displaystyle w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3302ff355269436b43bc2fbe180303881c09321), so that

| ∂ net j ∂ w i j = ∂ ∂ w i j ( ∑ k = 1 n w k j o k ) = ∂ ∂ w i j w i j o i = o i . {\displaystyle {\frac {\partial {\text{net}}_{j}}{\partial w_{ij}}}={\frac {\partial }{\partial w_{ij}}}\left(\sum _{k=1}^{n}w_{kj}o_{k}\right)={\frac {\partial }{\partial w_{ij}}}w_{ij}o_{i}=o_{i}.} |  |  |
| --- | --- | --- |

If the neuron is in the first layer after the input layer, 




o

i
{\displaystyle o\_{i}}
![{\displaystyle o_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c81b6f1251a0d2e12011a746b586c5fa9a132d48) is just 




x

i
{\displaystyle x\_{i}}
![{\displaystyle x_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e87000dd6142b81d041896a30fe58f0c3acb2158).

The derivative of the output of neuron 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0) with respect to its input is simply the partial derivative of the activation function:

| ∂ o j ∂ net j = ∂ φ ( net j ) ∂ net j {\displaystyle {\frac {\partial o_{j}}{\partial {\text{net}}_{j}}}={\frac {\partial \varphi ({\text{net}}_{j})}{\partial {\text{net}}_{j}}}} |  |  |
| --- | --- | --- |

which for the [logistic activation function](https://en.wikipedia.org/wiki/Logistic_function)

:   ∂

    o

    j

    ∂


    net

    j
    =


    ∂

    ∂


    net

    j
    φ
    (


    net

    j
    )
    =
    φ
    (


    net

    j
    )
    (
    1
    −
    φ
    (


    net

    j
    )
    )
    =

    o

    j
    (
    1
    −

    o

    j
    )
    {\displaystyle {\frac {\partial o\_{j}}{\partial {\text{net}}\_{j}}}={\frac {\partial }{\partial {\text{net}}\_{j}}}\varphi ({\text{net}}\_{j})=\varphi ({\text{net}}\_{j})(1-\varphi ({\text{net}}\_{j}))=o\_{j}(1-o\_{j})}
    ![{\displaystyle {\frac {\partial o_{j}}{\partial {\text{net}}_{j}}}={\frac {\partial }{\partial {\text{net}}_{j}}}\varphi ({\text{net}}_{j})=\varphi ({\text{net}}_{j})(1-\varphi ({\text{net}}_{j}))=o_{j}(1-o_{j})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ed36b5ea1321f0aca92fcb00068a8d083ec006f1)

This is the reason why backpropagation requires that the activation function be [differentiable](https://en.wikipedia.org/wiki/Differentiable_function). (Nevertheless, the [ReLU](https://en.wikipedia.org/wiki/ReLU) activation function, which is non-differentiable at 0, has become quite popular, e.g. in [AlexNet](https://en.wikipedia.org/wiki/AlexNet))

The first factor is straightforward to evaluate if the neuron is in the output layer, because then 




o

j
=
y
{\displaystyle o\_{j}=y}
![{\displaystyle o_{j}=y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0543b379df7f7599d89d6317e7e11013941e2885) and

| ∂ E ∂ o j = ∂ E ∂ y {\displaystyle {\frac {\partial E}{\partial o_{j}}}={\frac {\partial E}{\partial y}}} |  |  |
| --- | --- | --- |

If half of the square error is used as loss function we can rewrite it as

:   ∂
    E

    ∂

    o

    j
    =



    ∂
    E

    ∂
    y
    =


    ∂

    ∂
    y


    1
    2
    (
    t
    −
    y

    )

    2
    =
    y
    −
    t
    {\displaystyle {\frac {\partial E}{\partial o\_{j}}}={\frac {\partial E}{\partial y}}={\frac {\partial }{\partial y}}{\frac {1}{2}}(t-y)^{2}=y-t}
    ![{\displaystyle {\frac {\partial E}{\partial o_{j}}}={\frac {\partial E}{\partial y}}={\frac {\partial }{\partial y}}{\frac {1}{2}}(t-y)^{2}=y-t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/39d55b81fdb2681ab5957f3e03b9150b6d043c36)

However, if 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0) is in an arbitrary inner layer of the network, finding the derivative 



E
{\displaystyle E}
![{\displaystyle E}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4232c9de2ee3eec0a9c0a19b15ab92daa6223f9b) with respect to 




o

j
{\displaystyle o\_{j}}
![{\displaystyle o_{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0229f31d42e856d5af6aa970042abed37bce87f9) is less obvious.

Considering 



E
{\displaystyle E}
![{\displaystyle E}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4232c9de2ee3eec0a9c0a19b15ab92daa6223f9b) as a function with the inputs being all neurons 



L
=
{
u
,
v
,
…
,
w
}
{\displaystyle L=\{u,v,\dots ,w\}}
![{\displaystyle L=\{u,v,\dots ,w\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c4abf35b7ef5693f8765266665cb87e9819cb2a7) receiving input from neuron 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0),

:   ∂
    E
    (

    o

    j
    )

    ∂

    o

    j
    =



    ∂
    E
    (


    n
    e
    t

    u
    ,


    net

    v
    ,
    …
    ,


    n
    e
    t

    w
    )

    ∂

    o

    j
    {\displaystyle {\frac {\partial E(o\_{j})}{\partial o\_{j}}}={\frac {\partial E(\mathrm {net} \_{u},{\text{net}}\_{v},\dots ,\mathrm {net} \_{w})}{\partial o\_{j}}}}
    ![{\displaystyle {\frac {\partial E(o_{j})}{\partial o_{j}}}={\frac {\partial E(\mathrm {net} _{u},{\text{net}}_{v},\dots ,\mathrm {net} _{w})}{\partial o_{j}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e660d78517bc99de7a438a69171dcdb7dd88740b)

and taking the [total derivative](https://en.wikipedia.org/wiki/Total_derivative) with respect to 




o

j
{\displaystyle o\_{j}}
![{\displaystyle o_{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0229f31d42e856d5af6aa970042abed37bce87f9), a recursive expression for the derivative is obtained:

| ∂ E ∂ o j = ∑ ℓ ∈ L ( ∂ E ∂ net ℓ ∂ net ℓ ∂ o j ) = ∑ ℓ ∈ L ( ∂ E ∂ o ℓ ∂ o ℓ ∂ net ℓ ∂ net ℓ ∂ o j ) = ∑ ℓ ∈ L ( ∂ E ∂ o ℓ ∂ o ℓ ∂ net ℓ w j ℓ ) {\displaystyle {\frac {\partial E}{\partial o_{j}}}=\sum _{\ell \in L}\left({\frac {\partial E}{\partial {\text{net}}_{\ell }}}{\frac {\partial {\text{net}}_{\ell }}{\partial o_{j}}}\right)=\sum _{\ell \in L}\left({\frac {\partial E}{\partial o_{\ell }}}{\frac {\partial o_{\ell }}{\partial {\text{net}}_{\ell }}}{\frac {\partial {\text{net}}_{\ell }}{\partial o_{j}}}\right)=\sum _{\ell \in L}\left({\frac {\partial E}{\partial o_{\ell }}}{\frac {\partial o_{\ell }}{\partial {\text{net}}_{\ell }}}w_{j\ell }\right)} |  |  |
| --- | --- | --- |

Therefore, the derivative with respect to 




o

j
{\displaystyle o\_{j}}
![{\displaystyle o_{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0229f31d42e856d5af6aa970042abed37bce87f9) can be calculated if all the derivatives with respect to the outputs 




o

ℓ
{\displaystyle o\_{\ell }}
![{\displaystyle o_{\ell }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c2901ae7228e6fb253eb223344d54c70ccccaf00) of the next layer – the ones closer to the output neuron – are known. [Note, if any of the neurons in set 



L
{\displaystyle L}
![{\displaystyle L}](https://wikimedia.org/api/rest_v1/media/math/render/svg/103168b86f781fe6e9a4a87b8ea1cebe0ad4ede8) were not connected to neuron 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0), they would be independent of 




w

i
j
{\displaystyle w\_{ij}}
![{\displaystyle w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3302ff355269436b43bc2fbe180303881c09321) and the corresponding partial derivative under the summation would vanish to 0.]

Substituting **[Eq. 2](#math_Eq._2)**, **[Eq. 3](#math_Eq._3)** **[Eq.4](#math_Eq.4)** and **[Eq. 5](#math_Eq._5)** in **[Eq. 1](#math_Eq._1)** we obtain:

:   ∂
    E

    ∂

    w

    i
    j
    =



    ∂
    E

    ∂

    o

    j



    ∂

    o

    j

    ∂


    net

    j



    ∂


    net

    j

    ∂

    w

    i
    j
    =



    ∂
    E

    ∂

    o

    j



    ∂

    o

    j

    ∂


    net

    j

    o

    i
    {\displaystyle {\frac {\partial E}{\partial w\_{ij}}}={\frac {\partial E}{\partial o\_{j}}}{\frac {\partial o\_{j}}{\partial {\text{net}}\_{j}}}{\frac {\partial {\text{net}}\_{j}}{\partial w\_{ij}}}={\frac {\partial E}{\partial o\_{j}}}{\frac {\partial o\_{j}}{\partial {\text{net}}\_{j}}}o\_{i}}
    ![{\displaystyle {\frac {\partial E}{\partial w_{ij}}}={\frac {\partial E}{\partial o_{j}}}{\frac {\partial o_{j}}{\partial {\text{net}}_{j}}}{\frac {\partial {\text{net}}_{j}}{\partial w_{ij}}}={\frac {\partial E}{\partial o_{j}}}{\frac {\partial o_{j}}{\partial {\text{net}}_{j}}}o_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae55d1c0135131a9b5c0db89f5e20ffae8bc7040)
:   ∂
    E

    ∂

    w

    i
    j
    =

    o

    i

    δ

    j
    {\displaystyle {\frac {\partial E}{\partial w\_{ij}}}=o\_{i}\delta \_{j}}
    ![{\displaystyle {\frac {\partial E}{\partial w_{ij}}}=o_{i}\delta _{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e86f74f9e33c38bc1d5664ddd9794da381976af3)

with

:   δ

    j
    =



    ∂
    E

    ∂

    o

    j



    ∂

    o

    j

    ∂


    net

    j
    =


    {






    ∂
    L
    (
    t
    ,

    o

    j
    )

    ∂

    o

    j



    d
    φ
    (


    net

    j
    )

    d


    net

    j


    if 
    j

     is an output neuron,


    (

    ∑

    ℓ
    ∈
    L

    w

    j
    ℓ

    δ

    ℓ
    )



    d
    φ
    (


    net

    j
    )

    d


    net

    j


    if 
    j

     is an inner neuron.

    {\displaystyle \delta \_{j}={\frac {\partial E}{\partial o\_{j}}}{\frac {\partial o\_{j}}{\partial {\text{net}}\_{j}}}={\begin{cases}{\frac {\partial L(t,o\_{j})}{\partial o\_{j}}}{\frac {d\varphi ({\text{net}}\_{j})}{d{\text{net}}\_{j}}}&{\text{if }}j{\text{ is an output neuron,}}\\(\sum \_{\ell \in L}w\_{j\ell }\delta \_{\ell }){\frac {d\varphi ({\text{net}}\_{j})}{d{\text{net}}\_{j}}}&{\text{if }}j{\text{ is an inner neuron.}}\end{cases}}}
    ![{\displaystyle \delta _{j}={\frac {\partial E}{\partial o_{j}}}{\frac {\partial o_{j}}{\partial {\text{net}}_{j}}}={\begin{cases}{\frac {\partial L(t,o_{j})}{\partial o_{j}}}{\frac {d\varphi ({\text{net}}_{j})}{d{\text{net}}_{j}}}&{\text{if }}j{\text{ is an output neuron,}}\\(\sum _{\ell \in L}w_{j\ell }\delta _{\ell }){\frac {d\varphi ({\text{net}}_{j})}{d{\text{net}}_{j}}}&{\text{if }}j{\text{ is an inner neuron.}}\end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/54de826820eed0648c7dba5e345120bb23483261)

if 



φ
{\displaystyle \varphi }
![{\displaystyle \varphi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/33ee699558d09cf9d653f6351f9fda0b2f4aaa3e) is the logistic function, and the error is the square error:

:   δ

    j
    =



    ∂
    E

    ∂

    o

    j



    ∂

    o

    j

    ∂


    net

    j
    =


    {



    (

    o

    j
    −

    t

    j
    )

    o

    j
    (
    1
    −

    o

    j
    )


    if 
    j

     is an output neuron,


    (

    ∑

    ℓ
    ∈
    L

    w

    j
    ℓ

    δ

    ℓ
    )

    o

    j
    (
    1
    −

    o

    j
    )


    if 
    j

     is an inner neuron.

    {\displaystyle \delta \_{j}={\frac {\partial E}{\partial o\_{j}}}{\frac {\partial o\_{j}}{\partial {\text{net}}\_{j}}}={\begin{cases}(o\_{j}-t\_{j})o\_{j}(1-o\_{j})&{\text{if }}j{\text{ is an output neuron,}}\\(\sum \_{\ell \in L}w\_{j\ell }\delta \_{\ell })o\_{j}(1-o\_{j})&{\text{if }}j{\text{ is an inner neuron.}}\end{cases}}}
    ![{\displaystyle \delta _{j}={\frac {\partial E}{\partial o_{j}}}{\frac {\partial o_{j}}{\partial {\text{net}}_{j}}}={\begin{cases}(o_{j}-t_{j})o_{j}(1-o_{j})&{\text{if }}j{\text{ is an output neuron,}}\\(\sum _{\ell \in L}w_{j\ell }\delta _{\ell })o_{j}(1-o_{j})&{\text{if }}j{\text{ is an inner neuron.}}\end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/991c8f020800ec1da130849e20a3a415613e9bdb)

To update the weight 




w

i
j
{\displaystyle w\_{ij}}
![{\displaystyle w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3302ff355269436b43bc2fbe180303881c09321) using gradient descent, one must choose a [learning rate](https://en.wikipedia.org/wiki/Learning_rate), 



η
>
0
{\displaystyle \eta >0}
![{\displaystyle \eta >0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ce70a0b6474dcb5aaeea68b799038e8f60b54ef1). The change in weight needs to reflect the impact on 



E
{\displaystyle E}
![{\displaystyle E}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4232c9de2ee3eec0a9c0a19b15ab92daa6223f9b) of an increase or decrease in 




w

i
j
{\displaystyle w\_{ij}}
![{\displaystyle w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3302ff355269436b43bc2fbe180303881c09321). If 






∂
E

∂

w

i
j
>
0
{\displaystyle {\frac {\partial E}{\partial w\_{ij}}}>0}
![{\displaystyle {\frac {\partial E}{\partial w_{ij}}}>0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/52a50d4d1cc9a82d13f38ab6317adcbdb24b9112), an increase in 




w

i
j
{\displaystyle w\_{ij}}
![{\displaystyle w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3302ff355269436b43bc2fbe180303881c09321) increases 



E
{\displaystyle E}
![{\displaystyle E}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4232c9de2ee3eec0a9c0a19b15ab92daa6223f9b); conversely, if 






∂
E

∂

w

i
j
<
0
{\displaystyle {\frac {\partial E}{\partial w\_{ij}}}<0}
![{\displaystyle {\frac {\partial E}{\partial w_{ij}}}<0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5669ee0bda9e01723c570b9496abbe4bdbd96357), an increase in 




w

i
j
{\displaystyle w\_{ij}}
![{\displaystyle w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3302ff355269436b43bc2fbe180303881c09321) decreases 



E
{\displaystyle E}
![{\displaystyle E}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4232c9de2ee3eec0a9c0a19b15ab92daa6223f9b). The new 



Δ

w

i
j
{\displaystyle \Delta w\_{ij}}
![{\displaystyle \Delta w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/75343e68050b7d0bc74986719687a845095ad59f) is added to the old weight, and the product of the [learning rate](https://en.wikipedia.org/wiki/Learning_rate) and the gradient, multiplied by 



−
1
{\displaystyle -1}
![{\displaystyle -1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/704fb0427140d054dd267925495e78164fee9aac) guarantees that 




w

i
j
{\displaystyle w\_{ij}}
![{\displaystyle w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3302ff355269436b43bc2fbe180303881c09321) changes in a way that always decreases 



E
{\displaystyle E}
![{\displaystyle E}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4232c9de2ee3eec0a9c0a19b15ab92daa6223f9b). In other words, in the equation immediately below, 



−
η



∂
E

∂

w

i
j
{\displaystyle -\eta {\frac {\partial E}{\partial w\_{ij}}}}
![{\displaystyle -\eta {\frac {\partial E}{\partial w_{ij}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5f908b3074295c5281b9f6363c4dd65cca7476c) always changes 




w

i
j
{\displaystyle w\_{ij}}
![{\displaystyle w_{ij}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d3302ff355269436b43bc2fbe180303881c09321) in such a way that 



E
{\displaystyle E}
![{\displaystyle E}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4232c9de2ee3eec0a9c0a19b15ab92daa6223f9b) is decreased:

:   Δ

    w

    i
    j
    =
    −
    η



    ∂
    E

    ∂

    w

    i
    j
    =
    −
    η

    o

    i

    δ

    j
    {\displaystyle \Delta w\_{ij}=-\eta {\frac {\partial E}{\partial w\_{ij}}}=-\eta o\_{i}\delta \_{j}}
    ![{\displaystyle \Delta w_{ij}=-\eta {\frac {\partial E}{\partial w_{ij}}}=-\eta o_{i}\delta _{j}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/19e12758145196a841af866e8dfa2437d35c82e8)

## Second-order gradient descent

[[edit](/w/index.php?title=Backpropagation&action=edit&section=9)]

Using a [Hessian matrix](https://en.wikipedia.org/wiki/Hessian_matrix) of second-order derivatives of the error function, the [Levenberg–Marquardt algorithm](https://en.wikipedia.org/wiki/Levenberg%E2%80%93Marquardt_algorithm) often converges faster than first-order gradient descent, especially when the topology of the error function is complicated. It may also find solutions in smaller node counts for which other methods might not converge. The Hessian can be approximated by the [Fisher information](https://en.wikipedia.org/wiki/Fisher_information) matrix.

As an example, consider a simple feedforward network. At the 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac)-th layer, we have




x

i

(
l
)
,


a

i

(
l
)
=
f
(

x

i

(
l
)
)
,


x

i

(
l
+
1
)
=

∑

j

W

i
j

a

j

(
l
)
{\displaystyle x\_{i}^{(l)},\quad a\_{i}^{(l)}=f(x\_{i}^{(l)}),\quad x\_{i}^{(l+1)}=\sum \_{j}W\_{ij}a\_{j}^{(l)}}
![{\displaystyle x_{i}^{(l)},\quad a_{i}^{(l)}=f(x_{i}^{(l)}),\quad x_{i}^{(l+1)}=\sum _{j}W_{ij}a_{j}^{(l)}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1cdaaafce02bf292e9b26824f05290d5150178f9)where 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) are the pre-activations, 



a
{\displaystyle a}
![{\displaystyle a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffd2487510aa438433a2579450ab2b3d557e5edc) are the activations, and 



W
{\displaystyle W}
![{\displaystyle W}](https://wikimedia.org/api/rest_v1/media/math/render/svg/54a9c4c547f4d6111f81946cad242b18298d70b7) is the weight matrix. Given a loss function 



L
{\displaystyle L}
![{\displaystyle L}](https://wikimedia.org/api/rest_v1/media/math/render/svg/103168b86f781fe6e9a4a87b8ea1cebe0ad4ede8), the first-order backpropagation states that






∂
L

∂

a

j

(
l
)
=

∑

j

W

i
j



∂
L

∂

x

i

(
l
+
1
)
,




∂
L

∂

x

j

(
l
)
=

f
′
(

x

j

(
l
)
)



∂
L

∂

a

j

(
l
)
{\displaystyle {\frac {\partial L}{\partial a\_{j}^{(l)}}}=\sum \_{j}W\_{ij}{\frac {\partial L}{\partial x\_{i}^{(l+1)}}},\quad {\frac {\partial L}{\partial x\_{j}^{(l)}}}=f'(x\_{j}^{(l)}){\frac {\partial L}{\partial a\_{j}^{(l)}}}}
![{\displaystyle {\frac {\partial L}{\partial a_{j}^{(l)}}}=\sum _{j}W_{ij}{\frac {\partial L}{\partial x_{i}^{(l+1)}}},\quad {\frac {\partial L}{\partial x_{j}^{(l)}}}=f'(x_{j}^{(l)}){\frac {\partial L}{\partial a_{j}^{(l)}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/45f97891ebab184acc93b38f48bf5c5c0b8e460e)and the second-order backpropagation states that







∂

2
L

∂

a


j

1

(
l
)
∂

a


j

2

(
l
)
=

∑


j

1

j

2

W


i

1

j

1

W


i

2

j

2




∂

2
L

∂

x


i

1

(
l
+
1
)
∂

x


i

2

(
l
+
1
)
,





∂

2
L

∂

x


j

1

(
l
)
∂

x


j

2

(
l
)
=

f
′
(

x


j

1

(
l
)
)

f
′
(

x


j

2

(
l
)
)




∂

2
L

∂

a


j

1

(
l
)
∂

a


j

2

(
l
)
+

δ


j

1

j

2

f
″
(

x


j

1

(
l
)
)



∂
L

∂

a


j

1

(
l
)
{\displaystyle {\frac {\partial ^{2}L}{\partial a\_{j\_{1}}^{(l)}\partial a\_{j\_{2}}^{(l)}}}=\sum \_{j\_{1}j\_{2}}W\_{i\_{1}j\_{1}}W\_{i\_{2}j\_{2}}{\frac {\partial ^{2}L}{\partial x\_{i\_{1}}^{(l+1)}\partial x\_{i\_{2}}^{(l+1)}}},\quad {\frac {\partial ^{2}L}{\partial x\_{j\_{1}}^{(l)}\partial x\_{j\_{2}}^{(l)}}}=f'(x\_{j\_{1}}^{(l)})f'(x\_{j\_{2}}^{(l)}){\frac {\partial ^{2}L}{\partial a\_{j\_{1}}^{(l)}\partial a\_{j\_{2}}^{(l)}}}+\delta \_{j\_{1}j\_{2}}f''(x\_{j\_{1}}^{(l)}){\frac {\partial L}{\partial a\_{j\_{1}}^{(l)}}}}
![{\displaystyle {\frac {\partial ^{2}L}{\partial a_{j_{1}}^{(l)}\partial a_{j_{2}}^{(l)}}}=\sum _{j_{1}j_{2}}W_{i_{1}j_{1}}W_{i_{2}j_{2}}{\frac {\partial ^{2}L}{\partial x_{i_{1}}^{(l+1)}\partial x_{i_{2}}^{(l+1)}}},\quad {\frac {\partial ^{2}L}{\partial x_{j_{1}}^{(l)}\partial x_{j_{2}}^{(l)}}}=f'(x_{j_{1}}^{(l)})f'(x_{j_{2}}^{(l)}){\frac {\partial ^{2}L}{\partial a_{j_{1}}^{(l)}\partial a_{j_{2}}^{(l)}}}+\delta _{j_{1}j_{2}}f''(x_{j_{1}}^{(l)}){\frac {\partial L}{\partial a_{j_{1}}^{(l)}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bde7b4d660b092bee32b69146d5d6caf6b43cd69)where 



δ
{\displaystyle \delta }
![{\displaystyle \delta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c5321cfa797202b3e1f8620663ff43c4660ea03a) is the [Dirac delta symbol](https://en.wikipedia.org/wiki/Dirac_delta_function).

Arbitrary-order derivatives in arbitrary computational graphs can be computed with backpropagation, but with more complex expressions for higher orders.

The loss function is a function that maps values of one or more variables onto a [real number](https://en.wikipedia.org/wiki/Real_number) intuitively representing some "cost" associated with those values. For backpropagation, the loss function calculates the difference between the network output and its expected output, after a training example has propagated through the network.

The mathematical expression of the loss function must fulfill two conditions in order for it to be possibly used in backpropagation. The first is that it can be written as an average 



E
=


1
n

∑

x

E

x
{\textstyle E={\frac {1}{n}}\sum \_{x}E\_{x}}
![{\textstyle E={\frac {1}{n}}\sum _{x}E_{x}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/10d86f4c725f4158341b538f99eacc618e640b78) over error functions 




E

x
{\textstyle E\_{x}}
![{\textstyle E_{x}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fa289d8c2030c92095fe10836f648984bd80d10b), for 



n
{\textstyle n}
![{\textstyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cc6e1f880981346a604257ebcacdef24c0aca2d6) individual training examples, 



x
{\textstyle x}
![{\textstyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d951e0f3b54b6a3d73bb9a0a005749046cbce781). The reason for this assumption is that the backpropagation algorithm calculates the gradient of the error function for a single training example, which needs to be generalized to the overall error function. The second assumption is that it can be written as a function of the outputs from the neural network.

### Example loss function

[[edit](/w/index.php?title=Backpropagation&action=edit&section=12)]

Let 



y
,

y
′
{\displaystyle y,y'}
![{\displaystyle y,y'}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b7de53e950ff33763c8d524e32280498ec480f86) be vectors in 





R

n
{\displaystyle \mathbb {R} ^{n}}
![{\displaystyle \mathbb {R} ^{n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c510b63578322050121fe966f2e5770bea43308d).

Select an error function 



E
(
y
,

y
′
)
{\displaystyle E(y,y')}
![{\displaystyle E(y,y')}](https://wikimedia.org/api/rest_v1/media/math/render/svg/15c4c7f9edb4d4a5ca9844bfb82f947363d0d40f) measuring the difference between two outputs. The standard choice is the square of the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) between the vectors 



y
{\displaystyle y}
![{\displaystyle y}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8a6208ec717213d4317e666f1ae872e00620a0d) and 




y
′
{\displaystyle y'}
![{\displaystyle y'}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3a535de94a2183d7130731eab8a83531d7c35c6b):



E
(
y
,

y
′
)
=



1
2
‖
y
−

y
′

‖

2
{\displaystyle E(y,y')={\tfrac {1}{2}}\lVert y-y'\rVert ^{2}}
![{\displaystyle E(y,y')={\tfrac {1}{2}}\lVert y-y'\rVert ^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/11ae60805a3914707a33ece46b0d46700262e028)The error function over 



n
{\textstyle n}
![{\textstyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cc6e1f880981346a604257ebcacdef24c0aca2d6) training examples can then be written as an average of losses over individual examples:



E
=


1

2
n

∑

x
‖
(
y
(
x
)
−

y
′
(
x
)
)

‖

2
{\displaystyle E={\frac {1}{2n}}\sum \_{x}\lVert (y(x)-y'(x))\rVert ^{2}}
![{\displaystyle E={\frac {1}{2n}}\sum _{x}\lVert (y(x)-y'(x))\rVert ^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/774b3a3904cbcc2ea2768491f4df2cf1c041563c)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Extrema_example.svg/250px-Extrema_example.svg.png)](https://en.wikipedia.org/wiki/File:Extrema_example.svg)

Gradient descent may find a local minimum instead of the global minimum.

* Gradient descent with backpropagation is not guaranteed to find the [global minimum](https://en.wikipedia.org/wiki/Maxima_and_minima) of the error function, but only a local minimum; also, it has trouble crossing [plateaus](https://en.wikipedia.org/wiki/Plateau_(mathematics)) in the error function landscape. This issue, caused by the [non-convexity](https://en.wikipedia.org/wiki/Convex_optimization) of error functions in neural networks, was long thought to be a major drawback, but [Yann LeCun](https://en.wikipedia.org/wiki/Yann_LeCun) *et al.* argue that in many practical problems, it is not.
* Backpropagation learning does not require normalization of input vectors; however, normalization could improve performance.
* Backpropagation requires the derivatives of activation functions to be known at network design time.

Backpropagation had been derived repeatedly, as it is essentially an efficient application of the [chain rule](https://en.wikipedia.org/wiki/Chain_rule) (first written down by [Gottfried Wilhelm Leibniz](https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz) in 1676) to neural networks.

The terminology "back-propagating error correction" was introduced in 1962 by [Frank Rosenblatt](https://en.wikipedia.org/wiki/Frank_Rosenblatt), but he did not know how to implement this. In any case, he only studied neurons whose outputs were discrete levels, which only had zero derivatives, making backpropagation impossible.

Precursors to backpropagation appeared in [optimal control theory](https://en.wikipedia.org/wiki/Optimal_control) since 1950s. [Yann LeCun](https://en.wikipedia.org/wiki/Yann_LeCun) et al credits 1950s work by [Pontryagin](https://en.wikipedia.org/wiki/Lev_Pontryagin) and others in optimal control theory, especially the [adjoint state method](https://en.wikipedia.org/wiki/Adjoint_state_method), for being a continuous-time version of backpropagation. [Hecht-Nielsen](https://en.wikipedia.org/wiki/Robert_Hecht-Nielsen) credits the [Robbins–Monro algorithm](https://en.wikipedia.org/wiki/Stochastic_approximation) (1951) and [Arthur Bryson](https://en.wikipedia.org/wiki/Arthur_E._Bryson) and [Yu-Chi Ho](https://en.wikipedia.org/wiki/Yu-Chi_Ho)'s *Applied Optimal Control* (1969) as presages of backpropagation. Other precursors were [Henry J. Kelley](https://en.wikipedia.org/wiki/Henry_J._Kelley) 1960, and [Arthur E. Bryson](https://en.wikipedia.org/wiki/Arthur_E._Bryson) (1961). In 1962, [Stuart Dreyfus](https://en.wikipedia.org/wiki/Stuart_Dreyfus) published a simpler derivation based only on the [chain rule](https://en.wikipedia.org/wiki/Chain_rule). In 1973, he adapted [parameters](https://en.wikipedia.org/wiki/Parameter) of controllers in proportion to error gradients. Unlike modern backpropagation, these precursors used standard Jacobian matrix calculations from one stage to the previous one, neither addressing direct links across several stages nor potential additional efficiency gains due to network sparsity.

The [ADALINE](https://en.wikipedia.org/wiki/ADALINE) (1960) learning algorithm was gradient descent with a squared error loss for a single layer. The first [multilayer perceptron](https://en.wikipedia.org/wiki/Multilayer_perceptron) (MLP) with more than one layer trained by [stochastic gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent) was published in 1967 by [Shun'ichi Amari](https://en.wikipedia.org/wiki/Shun%27ichi_Amari). The MLP had 5 layers, with 2 learnable layers, and it learned to classify patterns not linearly separable.

### Modern backpropagation

[[edit](/w/index.php?title=Backpropagation&action=edit&section=16)]

Modern backpropagation was first published by [Seppo Linnainmaa](https://en.wikipedia.org/wiki/Seppo_Linnainmaa) as "reverse mode of [automatic differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation)" (1970) for discrete connected networks of nested [differentiable](https://en.wikipedia.org/wiki/Differentiable_function) functions.

In 1982, [Paul Werbos](https://en.wikipedia.org/wiki/Paul_Werbos) applied backpropagation to MLPs in the way that has become standard. Werbos described how he developed backpropagation in an interview. In 1971, during his PhD work, he developed backpropagation to mathematicize [Freud](https://en.wikipedia.org/wiki/Sigmund_Freud)'s "flow of psychic energy". He faced repeated difficulty in publishing the work, only managing in 1981. He also claimed that "the first practical application of back-propagation was for estimating a dynamic model to predict nationalism and social communications in 1974" by him.

Around 1982, [David E. Rumelhart](https://en.wikipedia.org/wiki/David_E._Rumelhart) independently developed backpropagation and taught the algorithm to others in his research circle. He did not cite previous work as he was unaware of them. He published the algorithm first in a 1985 paper, then in a 1986 *[Nature](https://en.wikipedia.org/wiki/Nature_(journal))* paper an experimental analysis of the technique. These papers became highly cited, contributed to the popularization of backpropagation, and coincided with the resurging research interest in neural networks during the 1980s.

In 1985, the method was also described by David Parker. [Yann LeCun](https://en.wikipedia.org/wiki/Yann_LeCun) proposed an alternative form of backpropagation for neural networks in his PhD thesis in 1987.

Gradient descent took a considerable amount of time to reach acceptance. Some early objections were: there were no guarantees that gradient descent could reach a global minimum, only local minimum; neurons were "known" by physiologists as making discrete signals (0/1), not continuous ones, and with discrete signals, there is no gradient to take. See the interview with [Geoffrey Hinton](https://en.wikipedia.org/wiki/Geoffrey_Hinton), who was awarded the 2024 [Nobel Prize in Physics](https://en.wikipedia.org/wiki/Nobel_Prize_in_Physics) for his contributions to the field.

Contributing to the acceptance were several applications in training neural networks via backpropagation, sometimes achieving popularity outside the research circles.

In 1987, [NETtalk](https://en.wikipedia.org/wiki/NETtalk_(artificial_neural_network)) learned to convert English text into pronunciation. Sejnowski tried training it with both backpropagation and Boltzmann machine, but found the backpropagation significantly faster, so he used it for the final NETtalk. The NETtalk program became a popular success, appearing on the [*Today* show](https://en.wikipedia.org/wiki/Today_(American_TV_program)).

In 1989, Dean A. Pomerleau published ALVINN, a neural network trained to [drive autonomously](https://en.wikipedia.org/wiki/Vehicular_automation) using backpropagation.

The [LeNet](https://en.wikipedia.org/wiki/LeNet) was published in 1989 to recognize handwritten zip codes.

In 1992, [TD-Gammon](https://en.wikipedia.org/wiki/TD-Gammon) achieved top human level play in backgammon. It was a reinforcement learning agent with a neural network with two layers, trained by backpropagation.

In 1993, Eric Wan won an international pattern recognition contest through backpropagation.

### After backpropagation

[[edit](/w/index.php?title=Backpropagation&action=edit&section=18)]

During the 2000s it fell out of favour[*[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)*], but returned in the 2010s, benefiting from cheap, powerful [GPU](https://en.wikipedia.org/wiki/GPU)-based computing systems. This has been especially so in [speech recognition](https://en.wikipedia.org/wiki/Speech_recognition), [machine vision](https://en.wikipedia.org/wiki/Machine_vision), [natural language processing](https://en.wikipedia.org/wiki/Natural_language_processing), and language structure learning research (in which it has been used to explain a variety of phenomena related to first and second language learning.)

Error backpropagation has been suggested to explain human brain [event-related potential](https://en.wikipedia.org/wiki/Event-related_potential) (ERP) components like the [N400](https://en.wikipedia.org/wiki/N400_(neuroscience)) and [P600](https://en.wikipedia.org/wiki/P600_(neuroscience)).

In 2023, a backpropagation algorithm was implemented on a [photonic processor](https://en.wikipedia.org/wiki/Photonic_processor) by a team at [Stanford University](https://en.wikipedia.org/wiki/Stanford_University).

1. **[^](#cite_ref-3)** Use 



   C
   {\displaystyle C}
   ![{\displaystyle C}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fc55753007cd3c18576f7933f6f089196732029) for the loss function to allow 



   L
   {\displaystyle L}
   ![{\displaystyle L}](https://wikimedia.org/api/rest_v1/media/math/render/svg/103168b86f781fe6e9a4a87b8ea1cebe0ad4ede8) to be used for the number of layers
2. **[^](#cite_ref-4)** This follows [Nielsen (2015)](#CITEREFNielsen2015), and means (left) multiplication by the matrix 




   W

   l
   {\displaystyle W^{l}}
   ![{\displaystyle W^{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/60b87bc8138a82f110491bb1abd0ea6eefe84c22) corresponds to converting output values of layer 



   l
   −
   1
   {\displaystyle l-1}
   ![{\displaystyle l-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4e0d448948a353d0b2469b88ca918f34e32c8752) to input values of layer 



   l
   {\displaystyle l}
   ![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac): columns correspond to input coordinates, rows correspond to output coordinates.
3. **[^](#cite_ref-7)** This section largely follows and summarizes [Nielsen (2015)](#CITEREFNielsen2015).
4. **[^](#cite_ref-8)** The derivative of the loss function is a [covector](https://en.wikipedia.org/wiki/Covector), since the loss function is a [scalar-valued function](https://en.wikipedia.org/wiki/Scalar-valued_function) of several variables.
5. **[^](#cite_ref-9)** The activation function is applied to each node separately, so the derivative is just the diagonal matrix of the derivative on each node. This is often represented as the [Hadamard product](https://en.wikipedia.org/wiki/Hadamard_product_(matrices)) with the vector of derivatives, denoted by 



   (

   f

   l

   )
   ′
   ⊙
   {\displaystyle (f^{l})'\odot }
   ![{\displaystyle (f^{l})'\odot }](https://wikimedia.org/api/rest_v1/media/math/render/svg/ee57033dfe04a65842e5260c85240f9295cb464c), which is mathematically identical but better matches the internal representation of the derivatives as a vector, rather than a diagonal matrix.
6. **[^](#cite_ref-10)** Since matrix multiplication is linear, the derivative of multiplying by a matrix is just the matrix: 



   (
   W
   x

   )
   ′
   =
   W
   {\displaystyle (Wx)'=W}
   ![{\displaystyle (Wx)'=W}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0beeadf03249427d72b4c95732f23143fdfd6c30).
7. **[^](#cite_ref-12)** One may notice that multi-layer neural networks use non-linear activation functions, so an example with linear neurons seems obscure. However, even though the error surface of multi-layer networks are much more complicated, locally they can be approximated by a paraboloid. Therefore, linear neurons are used for simplicity and easier understanding.
8. **[^](#cite_ref-13)** There can be multiple output neurons, in which case the error is the squared norm of the difference vector.
9. **[^](#cite_ref-14)** This order follows (Rumelhart, Hinton & Williams, 1986a): "



   Δ

   w

   i
   j
   {\displaystyle \Delta w\_{i}j}
   ![{\displaystyle \Delta w_{i}j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06827536202e269493d147fd8987b9918f7a4aab) is the change to be made to the weight from the 



   i
   {\displaystyle i}
   ![{\displaystyle i}](https://wikimedia.org/api/rest_v1/media/math/render/svg/add78d8608ad86e54951b8c8bd6c8d8416533d20)th to the

   j
   {\displaystyle j}
   ![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0)th unit"

1. **[^](#cite_ref-1)** [Goodfellow, Bengio & Courville 2016](#CITEREFGoodfellowBengioCourville2016), p. [200](https://www.deeplearningbook.org/contents/mlp.html#pf25), "The term back-propagation is often misunderstood as meaning the whole learning algorithm for multilayer neural networks. Backpropagation refers only to the method for computing the gradient, while other algorithms, such as stochastic gradient descent, is used to perform learning using this gradient."
2. ^ [***a***](#cite_ref-DL-reverse-mode_2-0) [***b***](#cite_ref-DL-reverse-mode_2-1) [Goodfellow, Bengio & Courville (2016](#CITEREFGoodfellowBengioCourville2016), p. [217](https://www.deeplearningbook.org/contents/mlp.html#pf36)–218), "The back-propagation algorithm described here is only one approach to automatic differentiation. It is a special case of a broader class of techniques called *reverse mode accumulation*."
3. **[^](#cite_ref-5)** Ramachandran, Prajit; Zoph, Barret; Le, Quoc V. (2017-10-27). "Searching for Activation Functions". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1710.05941](https://arxiv.org/abs/1710.05941) [[cs.NE](https://arxiv.org/archive/cs.NE)].
4. **[^](#cite_ref-6)** Misra, Diganta (2019-08-23). "Mish: A Self Regularized Non-Monotonic Activation Function". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1908.08681](https://arxiv.org/abs/1908.08681) [[cs.LG](https://arxiv.org/archive/cs.LG)].
5. ^ [***a***](#cite_ref-RumelhartHintonWilliams1986a_11-0) [***b***](#cite_ref-RumelhartHintonWilliams1986a_11-1) [***c***](#cite_ref-RumelhartHintonWilliams1986a_11-2) [Rumelhart, David E.](https://en.wikipedia.org/wiki/David_E._Rumelhart); [Hinton, Geoffrey E.](https://en.wikipedia.org/wiki/Geoffrey_E._Hinton); [Williams, Ronald J.](https://en.wikipedia.org/wiki/Ronald_J._Williams) (1986a). "Learning representations by back-propagating errors". *Nature*. **323** (6088): 533–536. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1986Natur.323..533R](https://ui.adsabs.harvard.edu/abs/1986Natur.323..533R). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/323533a0](https://doi.org/10.1038%2F323533a0). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [205001834](https://api.semanticscholar.org/CorpusID:205001834).
6. **[^](#cite_ref-Tan2018_15-0)** Tan, Hong Hui; Lim, King Han (2019). ["Review of second-order optimization techniques in artificial neural networks backpropagation"](https://doi.org/10.1088%2F1757-899X%2F495%2F1%2F012003). *IOP Conference Series: Materials Science and Engineering*. **495** (1) 012003. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2019MS&E..495a2003T](https://ui.adsabs.harvard.edu/abs/2019MS&E..495a2003T). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1088/1757-899X/495/1/012003](https://doi.org/10.1088%2F1757-899X%2F495%2F1%2F012003). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [208124487](https://api.semanticscholar.org/CorpusID:208124487).
7. ^ [***a***](#cite_ref-Wiliamowski2010_16-0) [***b***](#cite_ref-Wiliamowski2010_16-1) Wiliamowski, Bogdan; Yu, Hao (June 2010). ["Improved Computation for Levenberg–Marquardt Training"](https://www.eng.auburn.edu/~wilambm/pap/2010/Improved%20Computation%20for%20LM%20Training.pdf) (PDF). *IEEE Transactions on Neural Networks and Learning Systems*. **21** (6): 930. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2010ITNN...21..930W](https://ui.adsabs.harvard.edu/abs/2010ITNN...21..930W). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/TNN.2010.2045657](https://doi.org/10.1109%2FTNN.2010.2045657).
8. **[^](#cite_ref-Martens2020_17-0)** Martens, James (August 2020). "New Insights and Perspectives on the Natural Gradient Method". *Journal of Machine Learning Research* (21). [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1412.1193](https://arxiv.org/abs/1412.1193).
9. **[^](#cite_ref-18)** [Nielsen (2015)](#CITEREFNielsen2015), "[W]hat assumptions do we need to make about our cost function ... in order that backpropagation can be applied? The first assumption we need is that the cost function can be written as an average ... over cost functions ... for individual training examples ... The second assumption we make about the cost is that it can be written as a function of the outputs from the neural network ..."
10. **[^](#cite_ref-19)** [LeCun, Yann](https://en.wikipedia.org/wiki/Yann_LeCun); Bengio, Yoshua; Hinton, Geoffrey (2015). ["Deep learning"](https://hal.science/hal-04206682/file/Lecun2015.pdf) (PDF). *Nature*. **521** (7553): 436–444. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2015Natur.521..436L](https://ui.adsabs.harvard.edu/abs/2015Natur.521..436L). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/nature14539](https://doi.org/10.1038%2Fnature14539). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [26017442](https://pubmed.ncbi.nlm.nih.gov/26017442). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [3074096](https://api.semanticscholar.org/CorpusID:3074096).
11. **[^](#cite_ref-20)** Buckland, Matt; Collins, Mark (2002). *AI Techniques for Game Programming*. Boston: Premier Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1-931841-08-X](https://en.wikipedia.org/wiki/Special:BookSources/1-931841-08-X).
12. **[^](#cite_ref-leibniz1676_21-0)** [Leibniz, Gottfried Wilhelm Freiherr von](https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz) (1920). [*The Early Mathematical Manuscripts of Leibniz: Translated from the Latin Texts Published by Carl Immanuel Gerhardt with Critical and Historical Notes (Leibniz published the chain rule in a 1676 memoir)*](https://books.google.com/books?id=bOIGAAAAYAAJ&q=leibniz+altered+manuscripts&pg=PA90). Open court publishing Company. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-598-81846-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-598-81846-1).
13. **[^](#cite_ref-22)** Rodríguez, Omar Hernández; López Fernández, Jorge M. (2010). ["A Semiotic Reflection on the Didactics of the Chain Rule"](https://scholarworks.umt.edu/tme/vol7/iss2/10/). *The Mathematics Enthusiast*. **7** (2): 321–332. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.54870/1551-3440.1191](https://doi.org/10.54870%2F1551-3440.1191). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [29739148](https://api.semanticscholar.org/CorpusID:29739148). Retrieved 2019-08-04.
14. **[^](#cite_ref-23)** [Rosenblatt, Frank](https://en.wikipedia.org/wiki/Frank_Rosenblatt) (1962). *Principles of Neurodynamics*. Spartan, New York. pp. 287–298.
15. **[^](#cite_ref-24)** LeCun, Yann, et al. "A theoretical framework for back-propagation." *Proceedings of the 1988 connectionist models summer school*. Vol. 1. 1988.
16. **[^](#cite_ref-25)** Hecht-Nielsen, Robert (1990). [*Neurocomputing*](http://archive.org/details/neurocomputing0000hech). Internet Archive. Reading, Mass. : Addison-Wesley Pub. Co. pp. 124–125. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-09355-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-09355-1).
17. ^ [***a***](#cite_ref-robbins1951_26-0) [***b***](#cite_ref-robbins1951_26-1) [Robbins, H.](https://en.wikipedia.org/wiki/Herbert_Robbins); Monro, S. (1951). ["A Stochastic Approximation Method"](https://doi.org/10.1214%2Faoms%2F1177729586). *The Annals of Mathematical Statistics*. **22** (3): 400. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1214/aoms/1177729586](https://doi.org/10.1214%2Faoms%2F1177729586).
18. **[^](#cite_ref-kelley1960_27-0)** [Kelley, Henry J.](https://en.wikipedia.org/wiki/Henry_J._Kelley) (1960). "Gradient theory of optimal flight paths". *ARS Journal*. **30** (10): 947–954. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2514/8.5282](https://doi.org/10.2514%2F8.5282).
19. **[^](#cite_ref-bryson1961_28-0)** Bryson, Arthur E. (1962). "A gradient method for optimizing multi-stage allocation processes". *Proceedings of the Harvard Univ. Symposium on digital computers and their applications, 3–6 April 1961*. Cambridge: Harvard University Press. [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [498866871](https://search.worldcat.org/oclc/498866871).
20. **[^](#cite_ref-29)** Dreyfus, Stuart (1962). ["The numerical solution of variational problems"](https://doi.org/10.1016%2F0022-247x%2862%2990004-5). *Journal of Mathematical Analysis and Applications*. **5** (1): 30–45. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0022-247x(62)90004-5](https://doi.org/10.1016%2F0022-247x%2862%2990004-5).
21. **[^](#cite_ref-dreyfus1990_30-0)** [Dreyfus, Stuart E.](https://en.wikipedia.org/wiki/Stuart_Dreyfus) (1990). "Artificial Neural Networks, Back Propagation, and the Kelley-Bryson Gradient Procedure". *Journal of Guidance, Control, and Dynamics*. **13** (5): 926–928. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1990JGCD...13..926D](https://ui.adsabs.harvard.edu/abs/1990JGCD...13..926D). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2514/3.25422](https://doi.org/10.2514%2F3.25422).
22. **[^](#cite_ref-31)** Mizutani, Eiji; Dreyfus, Stuart; Nishio, Kenichi (July 2000). ["On derivation of MLP backpropagation from the Kelley-Bryson optimal-control gradient formula and its application"](https://coeieor.wpengine.com/wp-content/uploads/2019/03/ijcnn2k.pdf) (PDF). Proceedings of the IEEE International Joint Conference on Neural Networks.
23. **[^](#cite_ref-dreyfus1973_32-0)** [Dreyfus, Stuart](https://en.wikipedia.org/wiki/Stuart_Dreyfus) (1973). "The computational solution of optimal control problems with time lag". *IEEE Transactions on Automatic Control*. **18** (4): 383–385. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/tac.1973.1100330](https://doi.org/10.1109%2Ftac.1973.1100330).
24. ^ [***a***](#cite_ref-DLhistory_33-0) [***b***](#cite_ref-DLhistory_33-1) [Schmidhuber, Jürgen](https://en.wikipedia.org/wiki/J%C3%BCrgen_Schmidhuber) (2022). "Annotated History of Modern AI and Deep Learning". [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2212.11279](https://arxiv.org/abs/2212.11279) [[cs.NE](https://arxiv.org/archive/cs.NE)].
25. **[^](#cite_ref-Amari1967_34-0)** [Amari, Shun'ichi](https://en.wikipedia.org/wiki/Shun%27ichi_Amari) (1967). "A theory of adaptive pattern classifier". *IEEE Transactions*. **EC** (16): 279–307.
26. **[^](#cite_ref-lin1970_35-0)** [Linnainmaa, Seppo](https://en.wikipedia.org/wiki/Seppo_Linnainmaa) (1970). *The representation of the cumulative rounding error of an algorithm as a Taylor expansion of the local rounding errors* (Masters) (in Finnish). University of Helsinki. pp. 6–7.
27. **[^](#cite_ref-lin1976_36-0)** [Linnainmaa, Seppo](https://en.wikipedia.org/wiki/Seppo_Linnainmaa) (1976). "Taylor expansion of the accumulated rounding error". *BIT Numerical Mathematics*. **16** (2): 146–160. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/bf01931367](https://doi.org/10.1007%2Fbf01931367). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [122357351](https://api.semanticscholar.org/CorpusID:122357351).
28. **[^](#cite_ref-grie2012_37-0)** Griewank, Andreas (2012). "Who Invented the Reverse Mode of Differentiation?". *Optimization Stories*. Documenta Mathematica, Extra Volume ISMP. pp. 389–400. [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [15568746](https://api.semanticscholar.org/CorpusID:15568746).
29. **[^](#cite_ref-grie2008_38-0)** Griewank, Andreas; [Walther, Andrea](https://en.wikipedia.org/wiki/Andrea_Walther) (2008). [*Evaluating Derivatives: Principles and Techniques of Algorithmic Differentiation, Second Edition*](https://books.google.com/books?id=xoiiLaRxcbEC). SIAM. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-89871-776-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-89871-776-1).
30. **[^](#cite_ref-werbos1982_39-0)** [Werbos, Paul](https://en.wikipedia.org/wiki/Paul_Werbos) (1982). ["Applications of advances in nonlinear sensitivity analysis"](http://werbos.com/Neural/SensitivityIFIPSeptember1981.pdf) (PDF). *System modeling and optimization*. Springer. pp. 762–770. [Archived](https://web.archive.org/web/20160414055503/http://werbos.com/Neural/SensitivityIFIPSeptember1981.pdf) (PDF) from the original on 14 April 2016. Retrieved 2 July 2017.
31. **[^](#cite_ref-werbos1974_40-0)** Werbos, Paul J. (1994). *The Roots of Backpropagation: From Ordered Derivatives to Neural Networks and Political Forecasting*. New York: John Wiley & Sons. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-471-59897-6](https://en.wikipedia.org/wiki/Special:BookSources/0-471-59897-6).
32. ^ [***a***](#cite_ref-:1_41-0) [***b***](#cite_ref-:1_41-1) [***c***](#cite_ref-:1_41-2) [***d***](#cite_ref-:1_41-3) Anderson, James A.; Rosenfeld, Edward, eds. (2000). [*Talking Nets: An Oral History of Neural Networks*](https://direct.mit.edu/books/book/4886/Talking-NetsAn-Oral-History-of-Neural-Networks). The MIT Press. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.7551/mitpress/6626.003.0016](https://doi.org/10.7551%2Fmitpress%2F6626.003.0016). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-26715-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-26715-1).
33. **[^](#cite_ref-42)** P. J. Werbos, "Backpropagation through time: what it does and how to do it," in Proceedings of the IEEE, vol. 78, no. 10, pp. 1550–1560, Oct. 1990, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/5.58337](https://doi.org/10.1109%2F5.58337)
34. **[^](#cite_ref-43)** Olazaran Rodriguez, Jose Miguel. *[A historical sociology of neural network research](https://web.archive.org/web/20221111165150/https://era.ed.ac.uk/bitstream/handle/1842/20075/Olazaran-RodriguezJM_1991redux.pdf?sequence=1&isAllowed=y)*. PhD Dissertation. University of Edinburgh, 1991.
35. **[^](#cite_ref-learning-representations_44-0)** Rumelhart; Hinton; Williams (1986). ["Learning representations by back-propagating errors"](http://www.cs.toronto.edu/~hinton/absps/naturebp.pdf) (PDF). *Nature*. **323** (6088): 533–536. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1986Natur.323..533R](https://ui.adsabs.harvard.edu/abs/1986Natur.323..533R). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/323533a0](https://doi.org/10.1038%2F323533a0). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [205001834](https://api.semanticscholar.org/CorpusID:205001834).
36. **[^](#cite_ref-RumelhartHintonWilliams1986b_45-0)** [Rumelhart, David E.](https://en.wikipedia.org/wiki/David_E._Rumelhart); [Hinton, Geoffrey E.](https://en.wikipedia.org/wiki/Geoffrey_E._Hinton); [Williams, Ronald J.](https://en.wikipedia.org/wiki/Ronald_J._Williams) (1986b). ["8. Learning Internal Representations by Error Propagation"](https://archive.org/details/paralleldistribu00rume). In [Rumelhart, David E.](https://en.wikipedia.org/wiki/David_E._Rumelhart); [McClelland, James L.](https://en.wikipedia.org/wiki/James_McClelland_(psychologist)) (eds.). *Parallel Distributed Processing: Explorations in the Microstructure of Cognition*. Vol. 1 : Foundations. Cambridge: MIT Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-18120-7](https://en.wikipedia.org/wiki/Special:BookSources/0-262-18120-7).
37. **[^](#cite_ref-46)** Alpaydin, Ethem (2010). [*Introduction to Machine Learning*](https://books.google.com/books?id=4j9GAQAAIAAJ). MIT Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-01243-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-01243-0).
38. **[^](#cite_ref-47)** Parker, D.B. (1985). Learning Logic: Casting the Cortex of the Human Brain in Silicon. Center for Computational Research in Economics and Management Science (Report). Cambridge MA: Massachusetts Institute of Technology. Technical Report TR-47.
39. **[^](#cite_ref-:0_48-0)** Hertz, John (1991). *Introduction to the theory of neural computation*. Krogh, Anders., Palmer, Richard G. Redwood City, Calif.: Addison-Wesley. p. 8. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-50395-6](https://en.wikipedia.org/wiki/Special:BookSources/0-201-50395-6). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [21522159](https://search.worldcat.org/oclc/21522159).
40. **[^](#cite_ref-49)** Le Cun, Yann (1987). [*Modèles connexionnistes de l'apprentissage*](https://www.sudoc.fr/043586643) (Thèse de doctorat d'état thesis). Paris, France: Université Pierre et Marie Curie.
41. **[^](#cite_ref-50)** ["The Nobel Prize in Physics 2024"](https://www.nobelprize.org/prizes/physics/2024/press-release/). *NobelPrize.org*. Retrieved 2024-10-13.
42. **[^](#cite_ref-:02_51-0)** Sejnowski, Terrence J. (2018). *The deep learning revolution*. Cambridge, Massachusetts London, England: The MIT Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-03803-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-03803-4).
43. **[^](#cite_ref-52)** Pomerleau, Dean A. (1988). ["ALVINN: An Autonomous Land Vehicle in a Neural Network"](https://proceedings.neurips.cc/paper/1988/hash/812b4ba287f5ee0bc9d43bbf5bbe87fb-Abstract.html). *Advances in Neural Information Processing Systems*. **1**. Morgan-Kaufmann.
44. **[^](#cite_ref-53)** Sutton, Richard S.; Barto, Andrew G. (2018). ["11.1 TD-Gammon"](http://www.incompleteideas.net/book/11/node2.html). *Reinforcement Learning: An Introduction* (2nd ed.). Cambridge, MA: MIT Press.
45. **[^](#cite_ref-schmidhuber2015_54-0)** [Schmidhuber, Jürgen](https://en.wikipedia.org/wiki/J%C3%BCrgen_Schmidhuber) (2015). "Deep learning in neural networks: An overview". *Neural Networks*. **61**: 85–117. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1404.7828](https://arxiv.org/abs/1404.7828). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.neunet.2014.09.003](https://doi.org/10.1016%2Fj.neunet.2014.09.003). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [25462637](https://pubmed.ncbi.nlm.nih.gov/25462637). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [11715509](https://api.semanticscholar.org/CorpusID:11715509).
46. **[^](#cite_ref-55)** Wan, Eric A. (1994). "Time Series Prediction by Using a Connectionist Network with Internal Delay Lines". In [Weigend, Andreas S.](https://en.wikipedia.org/wiki/Andreas_Weigend); [Gershenfeld, Neil A.](https://en.wikipedia.org/wiki/Neil_Gershenfeld) (eds.). *Time Series Prediction: Forecasting the Future and Understanding the Past*. Proceedings of the NATO Advanced Research Workshop on Comparative Time Series Analysis. Vol. 15. Reading: Addison-Wesley. pp. 195–217. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-62601-2](https://en.wikipedia.org/wiki/Special:BookSources/0-201-62601-2). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [12652643](https://api.semanticscholar.org/CorpusID:12652643).
47. **[^](#cite_ref-56)** Chang, Franklin; Dell, Gary S.; Bock, Kathryn (2006). "Becoming syntactic". *Psychological Review*. **113** (2): 234–272. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1037/0033-295x.113.2.234](https://doi.org/10.1037%2F0033-295x.113.2.234). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [16637761](https://pubmed.ncbi.nlm.nih.gov/16637761).
48. **[^](#cite_ref-57)** Janciauskas, Marius; Chang, Franklin (2018). ["Input and Age-Dependent Variation in Second Language Learning: A Connectionist Account"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6001481). *Cognitive Science*. **42** (Suppl Suppl 2): 519–554. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1111/cogs.12519](https://doi.org/10.1111%2Fcogs.12519). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [6001481](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6001481). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [28744901](https://pubmed.ncbi.nlm.nih.gov/28744901).
49. **[^](#cite_ref-58)** ["Decoding the Power of Backpropagation: A Deep Dive into Advanced Neural Network Techniques"](https://www.janbasktraining.com/tutorials/backpropagation-in-deep-learning). *janbasktraining.com*. 30 January 2024.
50. **[^](#cite_ref-59)** Fitz, Hartmut; Chang, Franklin (2019). "Language ERPs reflect learning through prediction error propagation". *Cognitive Psychology*. **111**: 15–52. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.cogpsych.2019.03.002](https://doi.org/10.1016%2Fj.cogpsych.2019.03.002). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[21.11116/0000-0003-474D-8](https://hdl.handle.net/21.11116%2F0000-0003-474D-8). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [30921626](https://pubmed.ncbi.nlm.nih.gov/30921626). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [85501792](https://api.semanticscholar.org/CorpusID:85501792).
51. **[^](#cite_ref-60)** ["Photonic Chips Curb AI Training's Energy Appetite - IEEE Spectrum"](https://spectrum.ieee.org/backpropagation-optical-ai). *[IEEE](https://en.wikipedia.org/wiki/IEEE)*. Retrieved 2023-05-25.