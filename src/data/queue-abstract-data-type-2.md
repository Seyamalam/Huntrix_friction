# Queue (abstract data type)

* Source: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)

---

| Queue |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Representation of a [FIFO](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)) (first in, first out) queue |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| [Time complexity](https://en.wikipedia.org/wiki/Time_complexity) in [big O notation](https://en.wikipedia.org/wiki/Big_O_notation)Operation **Average** **Worst case**Search O(*n*) O(*n*)Insert O(1) O(1)Delete O(1) O(1)[Space complexity](https://en.wikipedia.org/wiki/Space_complexity)Space O(*n*) O(*n*) | [Time complexity](https://en.wikipedia.org/wiki/Time_complexity) in [big O notation](https://en.wikipedia.org/wiki/Big_O_notation) | Operation | **Average** | **Worst case** | Search | O(*n*) | O(*n*) | Insert | O(1) | O(1) | Delete | O(1) | O(1) | [Space complexity](https://en.wikipedia.org/wiki/Space_complexity) | Space | O(*n*) | O(*n*) |
| [Time complexity](https://en.wikipedia.org/wiki/Time_complexity) in [big O notation](https://en.wikipedia.org/wiki/Big_O_notation) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Operation | **Average** | **Worst case** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Search | O(*n*) | O(*n*) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Insert | O(1) | O(1) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Delete | O(1) | O(1) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| [Space complexity](https://en.wikipedia.org/wiki/Space_complexity) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Space | O(*n*) | O(*n*) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

In [computer science](https://en.wikipedia.org/wiki/Computer_science), a queue is an abstract data type that serves as an ordered [collection](https://en.wikipedia.org/wiki/Collection_(abstract_data_type)) of entities. By convention, the end of the queue where elements are added, is called the back, tail, or rear of the queue. The end of the queue where elements are removed is called the head or front of the queue. The name *queue* is an [analogy](https://en.wikipedia.org/wiki/Analogy) to the words used to describe people in line to wait for goods or services. It supports two main operations.

* **Enqueue,** which adds one element to the rear of the queue
* **Dequeue,** which removes one element from the front of the queue.

Other operations may also be allowed, often including a *[peek](https://en.wikipedia.org/wiki/Peek_(data_type_operation))* or *front* operation that returns the value of the next element to be dequeued without dequeuing it.

The operations of a queue make it a [first-in-first-out (FIFO) data structure](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)) as the first element added to the queue is the first one removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. A queue is an example of a [linear data structure](https://en.wikipedia.org/wiki/Linear_data_structure), or more abstractly a sequential collection.
Queues are common in computer programs, where they are implemented as data structures coupled with access routines, as an [abstract data structure](https://en.wikipedia.org/wiki/Abstract_data_structure) or in object-oriented languages as classes. A queue may be implemented as [circular buffers](https://en.wikipedia.org/wiki/Circular_buffer) and [linked lists](https://en.wikipedia.org/wiki/Linked_list), or by using both the [stack pointer](https://en.wikipedia.org/wiki/Stack_pointer) and the base pointer.

Queues provide services in [computer science](https://en.wikipedia.org/wiki/Computer_science), [transport](https://en.wikipedia.org/wiki/Transport), and [operations research](https://en.wikipedia.org/wiki/Operations_research) where various entities such as data, objects, persons, or events are stored and held to be processed later. In these contexts, the queue performs the function of a [buffer](https://en.wikipedia.org/wiki/Buffer_(computer_science)).
Another usage of queues is in the implementation of [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search).

## Queue implementation

Theoretically, one characteristic of a queue is that it does not have a specific capacity. Regardless of how many elements are already contained, a new element can always be added. It can also be empty, at which point removing an element will be impossible until a new element has been added again.

Fixed-length arrays are limited in capacity, but it is not true that items need to be copied towards the head of the queue. The simple trick of turning the array into a closed circle and letting the head and tail drift around endlessly in that circle makes it unnecessary to ever move items stored in the array. If n is the size of the array, then computing indices modulo n will turn the [array](https://en.wikipedia.org/wiki/Array) into a circle. This is still the conceptually simplest way to construct a queue in a [high-level language](https://en.wikipedia.org/wiki/High-level_programming_language), but it does admittedly slow things down a little, because the array indices must be compared to zero and the array size, which is comparable to the time taken to check whether an array index is out of bounds, which some languages do, but this will certainly be the method of choice for a quick and dirty implementation, or for any high-level language that does not have pointer syntax. The array size must be declared ahead of time, but some implementations simply double the declared array size when overflow occurs. Most modern languages with objects or [pointers](https://en.wikipedia.org/wiki/Pointer_(computer_programming)) can implement or come with libraries for dynamic lists. Such [data structures](https://en.wikipedia.org/wiki/Data_structure) may have not specified a fixed capacity limit besides memory constraints. Queue *overflow* results from trying to add an element onto a full queue and queue *underflow* happens when trying to remove an element from an empty queue.

A *bounded queue* is a queue limited to a fixed number of items.

There are several efficient implementations of FIFO queues. An efficient implementation is one that can perform the operations—en-queuing and de-queuing—in [O(1) time](https://en.wikipedia.org/wiki/Big_O_notation).

* [Linked list](https://en.wikipedia.org/wiki/Linked_list)

    * A [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list) has O(1) insertion and deletion at both ends, so it is a natural choice for queues.
    * A regular singly linked list only has efficient insertion and deletion at one end. However, a small modification—keeping a pointer to the *last* node in addition to the first one—will enable it to implement an efficient queue.
* A [deque](https://en.wikipedia.org/wiki/Double-ended_queue) implemented using a modified dynamic array

### Queues and programming languages

Queues may be implemented as a separate data type, or maybe considered a special case of a [double-ended queue](https://en.wikipedia.org/wiki/Double-ended_queue) (deque) and not implemented separately. For example, [Perl](https://en.wikipedia.org/wiki/Perl) and [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) allow pushing and popping an array from both ends, so one can use **push** and **shift** functions to enqueue and dequeue a list (or, in reverse, one can use **unshift** and **pop**), although in some cases these operations are not efficient.

C++'s [Standard Template Library](https://en.wikipedia.org/wiki/Standard_Template_Library) provides a "`queue`" templated class which is restricted to only push/pop operations. Since J2SE5.0, Java's library contains a `[Queue](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Queue.html)` interface that specifies queue operations; implementing classes include `[LinkedList](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/LinkedList.html)` and (since J2SE 1.6) `[ArrayDeque](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/ArrayDeque.html)`. PHP has an [SplQueue](http://www.php.net/manual/en/class.splqueue.php) class and third-party libraries like [beanstalk'd](https://en.wikipedia.org/w/index.php?title=Beanstalk%27d&action=edit&redlink=1) and [Gearman](https://en.wikipedia.org/wiki/Gearman).

### Example

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

Queues can also be implemented as a [purely functional data structure](https://en.wikipedia.org/wiki/Purely_functional_data_structure). There are two implementations. The first one only achieves 

O
(
1
)

{\displaystyle O(1)}

 per operation *on average*.  That is, the [amortized](https://en.wikipedia.org/wiki/Amortized_analysis) time is 

O
(
1
)

{\displaystyle O(1)}

, but individual operations can take 

O
(
n
)

{\displaystyle O(n)}

 where *n* is the number of elements in the queue.  The second implementation is called a **real-time queue** and it allows the queue to be [persistent](https://en.wikipedia.org/wiki/Persistent_data_structure) with operations in O(1) worst-case time. It is a more complex implementation and requires [lazy](https://en.wikipedia.org/wiki/Lazy_evaluation) lists with [memoization](https://en.wikipedia.org/wiki/Memoization).

### Amortized queue

This queue's data is stored in two [singly-linked lists](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list) named 

f

{\displaystyle f}

 and 

r

{\displaystyle r}

.  The list 

f

{\displaystyle f}

 holds the front part of the queue.  The list 

r

{\displaystyle r}

 holds the remaining elements (a.k.a., the rear of the queue) *in reverse order*.  It is easy to insert into the front of the queue by adding a node at the head of 

f

{\displaystyle f}

.  And, if 

r

{\displaystyle r}

 is not empty, it is easy to remove from the end of the queue by removing the node at the head of 

r

{\displaystyle r}

.  When 

r

{\displaystyle r}

 is empty, the list 

f

{\displaystyle f}

 is reversed and assigned to 

r

{\displaystyle r}

 and then the head of 

r

{\displaystyle r}

 is removed.

The insert ("enqueue") always takes 

O
(
1
)

{\displaystyle O(1)}

 time.  The removal ("dequeue") takes 

O
(
1
)

{\displaystyle O(1)}

 when the list 

r

{\displaystyle r}

 is not empty.  When 

r

{\displaystyle r}

 is empty, the reverse takes 

O
(
n
)

{\displaystyle O(n)}

 where 

n

{\displaystyle n}

 is the number of elements in 

f

{\displaystyle f}

.  But, we can say it is 

O
(
1
)

{\displaystyle O(1)}

 [amortized](https://en.wikipedia.org/wiki/Amortized_analysis) time, because every element in 

f

{\displaystyle f}

 had to be inserted and we can assign a constant cost for each element in the reverse to when it was inserted.

### Real-time queue

The real-time queue achieves 

O
(
1
)

{\displaystyle O(1)}

 time for all operations, without amortization.  This discussion will be technical, so recall that, for 

l

{\displaystyle l}

 a list, 

|

l

|

{\displaystyle |l|}

 denotes its length, that *NIL* represents an empty list and 

CONS
⁡ ⁡ 
(
h
,
t
)

{\displaystyle \operatorname {CONS} (h,t)}

 represents the list whose head is *h* and whose tail is *t*.

The data structure used to implement our queues consists of three [singly-linked lists](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list) 

(
f
,
r
,
s
)

{\displaystyle (f,r,s)}

 where *f* is the front of the queue and *r* is the rear of the queue in reverse order. The invariant of the structure is that *s* is the rear of *f* without its 

|

r

|

{\displaystyle |r|}

 first elements, that is 

|

s

|

=

|

f

|

− − 

|

r

|

{\displaystyle |s|=|f|-|r|}

. The tail of the queue 

(
CONS
⁡ ⁡ 
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

 is then almost 

(
f
,
r
,
s
)

{\displaystyle (f,r,s)}

 and
inserting an element *x* to 

(
f
,
r
,
s
)

{\displaystyle (f,r,s)}

 is almost 

(
f
,
CONS
⁡ ⁡ 
(
x
,
r
)
,
s
)

{\displaystyle (f,\operatorname {CONS} (x,r),s)}

. It is said almost, because in both of those results, 

|

s

|

=

|

f

|

− − 

|

r

|

+
1

{\displaystyle |s|=|f|-|r|+1}

. An auxiliary function 

a
u
x

{\displaystyle aux}

 must then be called for the invariant to be satisfied. Two cases must be considered, depending on whether 

s

{\displaystyle s}

 is the empty list, in which case 

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

, or not. The formal definition is 

aux
⁡ ⁡ 
(
f
,
r
,
Cons
⁡ ⁡ 
(
_ _ 
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

{\displaystyle \operatorname {aux} (f,r,\operatorname {Cons} (\_,s))=(f,r,s)}

 and 

aux
⁡ ⁡ 
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

 where 

f
′

{\displaystyle f'}

 is *f* followed by *r* reversed.

Let us call 

reverse
⁡ ⁡ 
(
f
,
r
)

{\displaystyle \operatorname {reverse} (f,r)}

 the function which returns *f* followed by *r* reversed. Let us furthermore assume that 

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

, since it is the case when this function is called. More precisely, we define a lazy function 

rotate
⁡ ⁡ 
(
f
,
r
,
a
)

{\displaystyle \operatorname {rotate} (f,r,a)}

 which takes as input three lists such that 

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

, and return the concatenation of *f*, of *r* reversed and of *a*. Then 

reverse
⁡ ⁡ 
(
f
,
r
)
=
rotate
⁡ ⁡ 
(
f
,
r
,

NIL

)

{\displaystyle \operatorname {reverse} (f,r)=\operatorname {rotate} (f,r,{\text{NIL}})}

.
The inductive definition of rotate is 

rotate
⁡ ⁡ 
(

NIL

,
Cons
⁡ ⁡ 
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
⁡ ⁡ 
(
y
,
a
)

{\displaystyle \operatorname {rotate} ({\text{NIL}},\operatorname {Cons} (y,{\text{NIL}}),a)=\operatorname {Cons} (y,a)}

 and 

rotate
⁡ ⁡ 
(
CONS
⁡ ⁡ 
(
x
,
f
)
,
CONS
⁡ ⁡ 
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
⁡ ⁡ 
(
x
,
rotate
⁡ ⁡ 
(
f
,
r
,
CONS
⁡ ⁡ 
(
y
,
a
)
)
)

{\displaystyle \operatorname {rotate} (\operatorname {CONS} (x,f),\operatorname {CONS} (y,r),a)=\operatorname {Cons} (x,\operatorname {rotate} (f,r,\operatorname {CONS} (y,a)))}

. Its running time is 

O
(
r
)

{\displaystyle O(r)}

, but, since lazy evaluation is used, the computation is delayed until the results are forced by the computation.

The list *s* in the data structure has two purposes. This list serves as a counter for 

|

f

|

− − 

|

r

|

{\displaystyle |f|-|r|}

, indeed, 

|

f

|

=

|

r

|

{\displaystyle |f|=|r|}

 if and only if *s* is the empty list. This counter allows us to ensure that the rear is never longer than the front list. Furthermore, using *s*, which is a tail of *f*, forces the computation of a part of the (lazy) list *f* during each *tail* and *insert* operation. Therefore, when 

|

f

|

=

|

r

|

{\displaystyle |f|=|r|}

, the list *f* is totally forced. If it was not the case, the internal representation of *f* could be some append of append of... of append, and forcing would not be a constant time operation anymore.

## See also

* [Event loop](https://en.wikipedia.org/wiki/Event_loop) - events are stored in a queue
* [Message queue](https://en.wikipedia.org/wiki/Message_queue)
* [Priority queue](https://en.wikipedia.org/wiki/Priority_queue)
* [Queuing theory](https://en.wikipedia.org/wiki/Queueing_theory)
* [Stack (abstract data type)](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) – the "opposite" of a queue: LIFO (Last In First Out)

## References

1. **^** ["Queue (Java Platform SE 7)"](http://docs.oracle.com/javase/7/docs/api/java/util/Queue.html). Docs.oracle.com. 2014-03-26. Retrieved 2014-05-22.
2. **^** ["Class Array"](https://docs.ruby-lang.org/en/master/Array.html#class-Array-label-Adding+Items+to+an+Array).
3. **^** Okasaki, Chris. ["Purely Functional Data Structures"](https://web.archive.org/web/20231207173058/https://doc.lagout.org/programmation/Functional%20Programming/Chris_Okasaki-Purely_Functional_Data_Structures-Cambridge_University_Press%281998%29.pdf) (PDF). Archived from [the original](https://doc.lagout.org/programmation/Functional%20Programming/Chris_Okasaki-Purely_Functional_Data_Structures-Cambridge_University_Press%281998%29.pdf) (PDF) on 2023-12-07. Retrieved 2022-04-19.
4. **^** Hood, Robert; Melville, Robert (November 1981). "Real-time queue operations in pure Lisp". *Information Processing Letters*. **13** (2): 50–54. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0020-0190(81)90030-2](https://doi.org/10.1016%2F0020-0190%2881%2990030-2). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[1813/6273](https://hdl.handle.net/1813%2F6273).

### General references

* This article incorporates [public domain material](https://en.wikipedia.org/wiki/Copyright_status_of_works_by_the_federal_government_of_the_United_States) from Paul E. Black. ["Bounded queue"](https://xlinux.nist.gov/dads/HTML/boundedqueue.html). *[Dictionary of Algorithms and Data Structures](https://en.wikipedia.org/w/index.php?title=Dictionary_of_Algorithms_and_Data_Structures&action=edit&redlink=1)*. [NIST](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology).

## Further reading

* [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth). *[The Art of Computer Programming](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming)*, Volume 1: *Fundamental Algorithms*, Third Edition. Addison-Wesley, 1997. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-89683-4](https://en.wikipedia.org/wiki/Special:BookSources/0-201-89683-4). Section 2.2.1: Stacks, Queues, and Dequeues, pp. 238–243.
* [Thomas H. Cormen](https://en.wikipedia.org/wiki/Thomas_H._Cormen), [Charles E. Leiserson](https://en.wikipedia.org/wiki/Charles_E._Leiserson), [Ronald L. Rivest](https://en.wikipedia.org/wiki/Ronald_L._Rivest), and [Clifford Stein](https://en.wikipedia.org/wiki/Clifford_Stein). *[Introduction to Algorithms](https://en.wikipedia.org/wiki/Introduction_to_Algorithms)*, Second Edition. MIT Press and McGraw-Hill, 2001. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-03293-7](https://en.wikipedia.org/wiki/Special:BookSources/0-262-03293-7). Section 10.1: Stacks and queues, pp. 200–204.
* William Ford, [William Topp](https://en.wikipedia.org/w/index.php?title=William_Topp&action=edit&redlink=1). *Data Structures with C++ and STL*, Second Edition. Prentice Hall, 2002. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-13-085850-1](https://en.wikipedia.org/wiki/Special:BookSources/0-13-085850-1). Chapter 8: Queues and Priority Queues, pp. 386–390.
* [Adam Drozdek](https://en.wikipedia.org/w/index.php?title=Adam_Drozdek&action=edit&redlink=1). *Data Structures and Algorithms in C++*, Third Edition. Thomson Course Technology, 2005. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-534--0](https://en.wikipedia.org/wiki/Special:BookSources/0-534--0) `{{[isbn](https://en.wikipedia.org/wiki/Template:Isbn)}}`: Check `isbn` value: length ([help](https://en.wikipedia.org/wiki/Template:Isbn)). Chapter 4: Stacks and Queues, pp. 137–169.

## External links

* [STL Quick Reference](http://www.halpernwightsoftware.com/stdlib-scratch/quickref.html#containers14)
* [VBScript implementation of stack, queue, deque, and Red-Black Tree](https://web.archive.org/web/20110714000645/http://www.ludvikjerabek.com/downloads.html)
 
NewPP limit report
Parsed by mw‐web.eqiad.main‐56dfd6f675‐wkzkr
Cached time: 20260424000739
Cache expiry: 86400
Cache expiry source: Module:Portal (os.date(%k))
Reduced expiry: true
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.423 seconds
Real time usage: 0.701 seconds
Preprocessor visited node count: 1866/1000000
Revision size: 14254/2097152 bytes
Post‐expand include size: 46165/2097152 bytes
Template argument size: 2122/2097152 bytes
Highest expansion depth: 14/100
Expensive parser function count: 4/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 45752/5000000 bytes
Lua time usage: 0.248/10.000 seconds
Lua memory usage: 6741936/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  514.331      1 -total
 19.33%   99.421      1 Template:Reflist
 15.21%   78.226      3 Template:Cite_web
 13.81%   71.026      1 Template:Data_structures
 13.45%   69.180      1 Template:Navbox
 11.95%   61.465      1 Template:Short_description
 10.21%   52.513      1 Template:Infobox_data_structure
 10.14%   52.129      1 Template:More_footnotes
  9.60%   49.383      1 Template:Infobox
  8.86%   45.585      1 Template:Ambox
 Render ID 9b9ffe0a-3f71-11f1-a159-3d9a7bf1c246  Saved in parser cache with key enwiki:pcache:25265:|#|:idhash:canonical and timestamp 20260424000739 and revision id 1332703688. Rendering was triggered because: page_view