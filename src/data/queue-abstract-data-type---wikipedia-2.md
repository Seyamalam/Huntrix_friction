# Queue (abstract data type) - Wikipedia

Source: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)

---

Abstract data type

| Queue |
| --- |
| Representation of a FIFO (first in, first out) queue |
| Operation Average Worst case Search O( n ) O( n ) Insert O(1) O(1) Delete O(1) O(1) Space O( n ) O( n ) | Operation | Average | Worst case | Search | O( n ) | O( n ) | Insert | O(1) | O(1) | Delete | O(1) | O(1) | Space | O( n ) | O( n ) |
|  |
| Operation | Average | Worst case |
| Search | O( n ) | O( n ) |
| Insert | O(1) | O(1) |
| Delete | O(1) | O(1) |
|  |
| Space | O( n ) | O( n ) |

In [computer science](https://en.wikipedia.org/wiki/Computer_science), a queue is an abstract data type that serves as an ordered [collection](https://en.wikipedia.org/wiki/Collection_(abstract_data_type)) of entities. By convention, the end of the queue where elements are added, is called the back, tail, or rear of the queue. The end of the queue where elements are removed is called the head or front of the queue. The name *queue* is an [analogy](https://en.wikipedia.org/wiki/Analogy) to the words used to describe people in line to wait for goods or services. It supports two main operations.

* **Enqueue,** which adds one element to the rear of the queue
* **Dequeue,** which removes one element from the front of the queue.

Other operations may also be allowed, often including a *[peek](https://en.wikipedia.org/wiki/Peek_(data_type_operation))* or *front* operation that returns the value of the next element to be dequeued without dequeuing it.

The operations of a queue make it a [first-in-first-out (FIFO) data structure](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)) as the first element added to the queue is the first one removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. A queue is an example of a [linear data structure](https://en.wikipedia.org/wiki/Linear_data_structure), or more abstractly a sequential collection.
Queues are common in computer programs, where they are implemented as data structures coupled with access routines, as an [abstract data structure](https://en.wikipedia.org/wiki/Abstract_data_structure) or in object-oriented languages as classes. A queue may be implemented as [circular buffers](https://en.wikipedia.org/wiki/Circular_buffer) and [linked lists](https://en.wikipedia.org/wiki/Linked_list), or by using both the [stack pointer](https://en.wikipedia.org/wiki/Stack_pointer) and the base pointer.

Queues provide services in [computer science](https://en.wikipedia.org/wiki/Computer_science), [transport](https://en.wikipedia.org/wiki/Transport), and [operations research](https://en.wikipedia.org/wiki/Operations_research) where various entities such as data, objects, persons, or events are stored and held to be processed later. In these contexts, the queue performs the function of a [buffer](https://en.wikipedia.org/wiki/Buffer_(computer_science)).
Another usage of queues is in the implementation of [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search).

## Queue implementation

[[edit](/w/index.php?title=Queue_(abstract_data_type)&action=edit&section=1)]

Theoretically, one characteristic of a queue is that it does not have a specific capacity. Regardless of how many elements are already contained, a new element can always be added. It can also be empty, at which point removing an element will be impossible until a new element has been added again.

Fixed-length arrays are limited in capacity, but it is not true that items need to be copied towards the head of the queue. The simple trick of turning the array into a closed circle and letting the head and tail drift around endlessly in that circle makes it unnecessary to ever move items stored in the array. If n is the size of the array, then computing indices modulo n will turn the [array](https://en.wikipedia.org/wiki/Array) into a circle. This is still the conceptually simplest way to construct a queue in a [high-level language](https://en.wikipedia.org/wiki/High-level_programming_language), but it does admittedly slow things down a little, because the array indices must be compared to zero and the array size, which is comparable to the time taken to check whether an array index is out of bounds, which some languages do, but this will certainly be the method of choice for a quick and dirty implementation, or for any high-level language that does not have pointer syntax. The array size must be declared ahead of time, but some implementations simply double the declared array size when overflow occurs. Most modern languages with objects or [pointers](https://en.wikipedia.org/wiki/Pointer_(computer_programming)) can implement or come with libraries for dynamic lists. Such [data structures](https://en.wikipedia.org/wiki/Data_structure) may have not specified a fixed capacity limit besides memory constraints. Queue *overflow* results from trying to add an element onto a full queue and queue *underflow* happens when trying to remove an element from an empty queue.

A *bounded queue* is a queue limited to a fixed number of items.

There are several efficient implementations of FIFO queues. An efficient implementation is one that can perform the operations—en-queuing and de-queuing—in [O(1) time](https://en.wikipedia.org/wiki/Big_O_notation).

* [Linked list](https://en.wikipedia.org/wiki/Linked_list)
  + A [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list) has O(1) insertion and deletion at both ends, so it is a natural choice for queues.
  + A regular singly linked list only has efficient insertion and deletion at one end. However, a small modification—keeping a pointer to the *last* node in addition to the first one—will enable it to implement an efficient queue.
* A [deque](https://en.wikipedia.org/wiki/Double-ended_queue) implemented using a modified dynamic array

### Queues and programming languages

[[edit](/w/index.php?title=Queue_(abstract_data_type)&action=edit&section=2)]

Queues may be implemented as a separate data type, or maybe considered a special case of a [double-ended queue](https://en.wikipedia.org/wiki/Double-ended_queue) (deque) and not implemented separately. For example, [Perl](https://en.wikipedia.org/wiki/Perl) and [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) allow pushing and popping an array from both ends, so one can use **push** and **shift** functions to enqueue and dequeue a list (or, in reverse, one can use **unshift** and **pop**), although in some cases these operations are not efficient.

C++'s [Standard Template Library](https://en.wikipedia.org/wiki/Standard_Template_Library) provides a "`queue`" templated class which is restricted to only push/pop operations. Since J2SE5.0, Java's library contains a `Queue` interface that specifies queue operations; implementing classes include `LinkedList` and (since J2SE 1.6) `ArrayDeque`. PHP has an [SplQueue](http://www.php.net/manual/en/class.splqueue.php) class and third-party libraries like [beanstalk'd](/w/index.php?title=Beanstalk%27d&action=edit&redlink=1) and [Gearman](https://en.wikipedia.org/wiki/Gearman).

[![UML queue class.svg](//upload.wikimedia.org/wikipedia/commons/thumb/e/ec/UML_queue_class.svg/250px-UML_queue_class.svg.png)](https://en.wikipedia.org/wiki/File:UML_queue_class.svg)

A simple queue implemented in [TypeScript](https://en.wikipedia.org/wiki/TypeScript):

```
class Queue<T> {
    private items: T[] = [];

    enqueue(element: T): void {
        this.items.push(element);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

```

## Purely functional implementation

[[edit](/w/index.php?title=Queue_(abstract_data_type)&action=edit&section=4)]

Queues can also be implemented as a [purely functional data structure](https://en.wikipedia.org/wiki/Purely_functional_data_structure). There are two implementations. The first one only achieves 



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21) per operation *on average*. That is, the [amortized](https://en.wikipedia.org/wiki/Amortized_analysis) time is 



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21), but individual operations can take 



O
(
n
)
{\displaystyle O(n)}
![{\displaystyle O(n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/34109fe397fdcff370079185bfdb65826cb5565a) where *n* is the number of elements in the queue. The second implementation is called a **real-time queue** and it allows the queue to be [persistent](https://en.wikipedia.org/wiki/Persistent_data_structure) with operations in O(1) worst-case time. It is a more complex implementation and requires [lazy](https://en.wikipedia.org/wiki/Lazy_evaluation) lists with [memoization](https://en.wikipedia.org/wiki/Memoization).

This queue's data is stored in two [singly-linked lists](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list) named 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) and 



r
{\displaystyle r}
![{\displaystyle r}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0d1ecb613aa2984f0576f70f86650b7c2a132538). The list 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) holds the front part of the queue. The list 



r
{\displaystyle r}
![{\displaystyle r}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0d1ecb613aa2984f0576f70f86650b7c2a132538) holds the remaining elements (a.k.a., the rear of the queue) *in reverse order*. It is easy to insert into the front of the queue by adding a node at the head of 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61). And, if 



r
{\displaystyle r}
![{\displaystyle r}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0d1ecb613aa2984f0576f70f86650b7c2a132538) is not empty, it is easy to remove from the end of the queue by removing the node at the head of 



r
{\displaystyle r}
![{\displaystyle r}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0d1ecb613aa2984f0576f70f86650b7c2a132538). When 



r
{\displaystyle r}
![{\displaystyle r}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0d1ecb613aa2984f0576f70f86650b7c2a132538) is empty, the list 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) is reversed and assigned to 



r
{\displaystyle r}
![{\displaystyle r}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0d1ecb613aa2984f0576f70f86650b7c2a132538) and then the head of 



r
{\displaystyle r}
![{\displaystyle r}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0d1ecb613aa2984f0576f70f86650b7c2a132538) is removed.

The insert ("enqueue") always takes 



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21) time. The removal ("dequeue") takes 



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21) when the list 



r
{\displaystyle r}
![{\displaystyle r}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0d1ecb613aa2984f0576f70f86650b7c2a132538) is not empty. When 



r
{\displaystyle r}
![{\displaystyle r}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0d1ecb613aa2984f0576f70f86650b7c2a132538) is empty, the reverse takes 



O
(
n
)
{\displaystyle O(n)}
![{\displaystyle O(n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/34109fe397fdcff370079185bfdb65826cb5565a) where 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) is the number of elements in 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61). But, we can say it is 



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21) [amortized](https://en.wikipedia.org/wiki/Amortized_analysis) time, because every element in 



f
{\displaystyle f}
![{\displaystyle f}](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61) had to be inserted and we can assign a constant cost for each element in the reverse to when it was inserted.

The real-time queue achieves 



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21) time for all operations, without amortization. This discussion will be technical, so recall that, for 



l
{\displaystyle l}
![{\displaystyle l}](https://wikimedia.org/api/rest_v1/media/math/render/svg/829091f745070b9eb97a80244129025440a1cfac) a list, 




|
l

|
{\displaystyle |l|}
![{\displaystyle |l|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/18fb48342bae497cbaf66ff7122c6b74d9518c04) denotes its length, that *NIL* represents an empty list and 



CONS
⁡
(
h
,
t
)
{\displaystyle \operatorname {CONS} (h,t)}
![{\displaystyle \operatorname {CONS} (h,t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4c5cc4ede9b9d1a13d684929c084fb6c2393cf2b) represents the list whose head is *h* and whose tail is *t*.

The data structure used to implement our queues consists of three [singly-linked lists](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list) 



(
f
,
r
,
s
)
{\displaystyle (f,r,s)}
![{\displaystyle (f,r,s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3edbde37e6e782104dea0a6e29cc0d57aefbc64b) where *f* is the front of the queue and *r* is the rear of the queue in reverse order. The invariant of the structure is that *s* is the rear of *f* without its 




|
r

|
{\displaystyle |r|}
![{\displaystyle |r|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/33724ed2b4730b9b29dd9d08e8b216c539ed7dde) first elements, that is 




|
s

|
=

|
f

|
−

|
r

|
{\displaystyle |s|=|f|-|r|}
![{\displaystyle |s|=|f|-|r|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3adbe9e725c400c6e82bf16347e20cb5dc4087cc). The tail of the queue 



(
CONS
⁡
(
x
,
f
)
,
r
,
s
)
{\displaystyle (\operatorname {CONS} (x,f),r,s)}
![{\displaystyle (\operatorname {CONS} (x,f),r,s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6d9f50aa1327bb8b2a1913e56df75b682c92ea8a) is then almost 



(
f
,
r
,
s
)
{\displaystyle (f,r,s)}
![{\displaystyle (f,r,s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3edbde37e6e782104dea0a6e29cc0d57aefbc64b) and
inserting an element *x* to 



(
f
,
r
,
s
)
{\displaystyle (f,r,s)}
![{\displaystyle (f,r,s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3edbde37e6e782104dea0a6e29cc0d57aefbc64b) is almost 



(
f
,
CONS
⁡
(
x
,
r
)
,
s
)
{\displaystyle (f,\operatorname {CONS} (x,r),s)}
![{\displaystyle (f,\operatorname {CONS} (x,r),s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c21cfc492ca41cf84696cca9c74ca118f74b61c6). It is said almost, because in both of those results, 




|
s

|
=

|
f

|
−

|
r

|
+
1
{\displaystyle |s|=|f|-|r|+1}
![{\displaystyle |s|=|f|-|r|+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a547234dfde7de07fda001155d43268f49dfbe7a). An auxiliary function 



a
u
x
{\displaystyle aux}
![{\displaystyle aux}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f1d8984de37086335c4d81f52321e0da0e8bdebb) must then be called for the invariant to be satisfied. Two cases must be considered, depending on whether 



s
{\displaystyle s}
![{\displaystyle s}](https://wikimedia.org/api/rest_v1/media/math/render/svg/01d131dfd7673938b947072a13a9744fe997e632) is the empty list, in which case 




|
r

|
=

|
f

|
+
1
{\displaystyle |r|=|f|+1}
![{\displaystyle |r|=|f|+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b6acd66aac56ebee7e4f790772e9a3a5e27c2568), or not. The formal definition is 



aux
⁡
(
f
,
r
,
Cons
⁡
(
\_
,
s
)
)
=
(
f
,
r
,
s
)
{\displaystyle \operatorname {aux} (f,r,\operatorname {Cons} (\\_,s))=(f,r,s)}
![{\displaystyle \operatorname {aux} (f,r,\operatorname {Cons} (\_,s))=(f,r,s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7422e0514cb6e65ce380bb4d160bd96b3aefe8f6) and 



aux
⁡
(
f
,
r
,

NIL
)
=
(

f
′
,

NIL
,

f
′
)
{\displaystyle \operatorname {aux} (f,r,{\text{NIL}})=(f',{\text{NIL}},f')}
![{\displaystyle \operatorname {aux} (f,r,{\text{NIL}})=(f',{\text{NIL}},f')}](https://wikimedia.org/api/rest_v1/media/math/render/svg/972bbc8c6fca6241d40adbf53ed1b201024da478) where 




f
′
{\displaystyle f'}
![{\displaystyle f'}](https://wikimedia.org/api/rest_v1/media/math/render/svg/258eaada38956fb69b8cb1a2eef46bcb97d3126b) is *f* followed by *r* reversed.

Let us call 



reverse
⁡
(
f
,
r
)
{\displaystyle \operatorname {reverse} (f,r)}
![{\displaystyle \operatorname {reverse} (f,r)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/062f12d75d3a05fe9e64699ae805de069c04b885) the function which returns *f* followed by *r* reversed. Let us furthermore assume that 




|
r

|
=

|
f

|
+
1
{\displaystyle |r|=|f|+1}
![{\displaystyle |r|=|f|+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b6acd66aac56ebee7e4f790772e9a3a5e27c2568), since it is the case when this function is called. More precisely, we define a lazy function 



rotate
⁡
(
f
,
r
,
a
)
{\displaystyle \operatorname {rotate} (f,r,a)}
![{\displaystyle \operatorname {rotate} (f,r,a)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/db852d453bb40f496727ff7038dc8873e4cb7285) which takes as input three lists such that 




|
r

|
=

|
f

|
+
1
{\displaystyle |r|=|f|+1}
![{\displaystyle |r|=|f|+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b6acd66aac56ebee7e4f790772e9a3a5e27c2568), and return the concatenation of *f*, of *r* reversed and of *a*. Then 



reverse
⁡
(
f
,
r
)
=
rotate
⁡
(
f
,
r
,

NIL
)
{\displaystyle \operatorname {reverse} (f,r)=\operatorname {rotate} (f,r,{\text{NIL}})}
![{\displaystyle \operatorname {reverse} (f,r)=\operatorname {rotate} (f,r,{\text{NIL}})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8548c5df6a5863740e385e534113975fdf6c5536).
The inductive definition of rotate is 



rotate
⁡
(

NIL
,
Cons
⁡
(
y
,

NIL
)
,
a
)
=
Cons
⁡
(
y
,
a
)
{\displaystyle \operatorname {rotate} ({\text{NIL}},\operatorname {Cons} (y,{\text{NIL}}),a)=\operatorname {Cons} (y,a)}
![{\displaystyle \operatorname {rotate} ({\text{NIL}},\operatorname {Cons} (y,{\text{NIL}}),a)=\operatorname {Cons} (y,a)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/256cf634aaf5a3aa98d7962615e90aac29a762cd) and 



rotate
⁡
(
CONS
⁡
(
x
,
f
)
,
CONS
⁡
(
y
,
r
)
,
a
)
=
Cons
⁡
(
x
,
rotate
⁡
(
f
,
r
,
CONS
⁡
(
y
,
a
)
)
)
{\displaystyle \operatorname {rotate} (\operatorname {CONS} (x,f),\operatorname {CONS} (y,r),a)=\operatorname {Cons} (x,\operatorname {rotate} (f,r,\operatorname {CONS} (y,a)))}
![{\displaystyle \operatorname {rotate} (\operatorname {CONS} (x,f),\operatorname {CONS} (y,r),a)=\operatorname {Cons} (x,\operatorname {rotate} (f,r,\operatorname {CONS} (y,a)))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8ce338cfb19c7a34670602886119d616b3071d0a). Its running time is 



O
(
r
)
{\displaystyle O(r)}
![{\displaystyle O(r)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/307168a31698bc14ae0f0d7bccff65b128cd00d5), but, since lazy evaluation is used, the computation is delayed until the results are forced by the computation.

The list *s* in the data structure has two purposes. This list serves as a counter for 




|
f

|
−

|
r

|
{\displaystyle |f|-|r|}
![{\displaystyle |f|-|r|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/08745a8ef53c631d1b9e9170f0e42d84be6221d5), indeed, 




|
f

|
=

|
r

|
{\displaystyle |f|=|r|}
![{\displaystyle |f|=|r|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55e3ac72d5ef500a58a66210cb61afd3bc28f10b) if and only if *s* is the empty list. This counter allows us to ensure that the rear is never longer than the front list. Furthermore, using *s*, which is a tail of *f*, forces the computation of a part of the (lazy) list *f* during each *tail* and *insert* operation. Therefore, when 




|
f

|
=

|
r

|
{\displaystyle |f|=|r|}
![{\displaystyle |f|=|r|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55e3ac72d5ef500a58a66210cb61afd3bc28f10b), the list *f* is totally forced. If it was not the case, the internal representation of *f* could be some append of append of... of append, and forcing would not be a constant time operation anymore.

* [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth). *[The Art of Computer Programming](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming)*, Volume 1: *Fundamental Algorithms*, Third Edition. Addison-Wesley, 1997. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-89683-4](https://en.wikipedia.org/wiki/Special:BookSources/0-201-89683-4). Section 2.2.1: Stacks, Queues, and Dequeues, pp. 238–243.
* [Thomas H. Cormen](https://en.wikipedia.org/wiki/Thomas_H._Cormen), [Charles E. Leiserson](https://en.wikipedia.org/wiki/Charles_E._Leiserson), [Ronald L. Rivest](https://en.wikipedia.org/wiki/Ronald_L._Rivest), and [Clifford Stein](https://en.wikipedia.org/wiki/Clifford_Stein). *[Introduction to Algorithms](https://en.wikipedia.org/wiki/Introduction_to_Algorithms)*, Second Edition. MIT Press and McGraw-Hill, 2001. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-03293-7](https://en.wikipedia.org/wiki/Special:BookSources/0-262-03293-7). Section 10.1: Stacks and queues, pp. 200–204.
* William Ford, [William Topp](/w/index.php?title=William_Topp&action=edit&redlink=1). *Data Structures with C++ and STL*, Second Edition. Prentice Hall, 2002. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-13-085850-1](https://en.wikipedia.org/wiki/Special:BookSources/0-13-085850-1). Chapter 8: Queues and Priority Queues, pp. 386–390.
* [Adam Drozdek](/w/index.php?title=Adam_Drozdek&action=edit&redlink=1). *Data Structures and Algorithms in C++*, Third Edition. Thomson Course Technology, 2005. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-534--0](https://en.wikipedia.org/wiki/Special:BookSources/0-534--0) . Chapter 4: Stacks and Queues, pp. 137–169.