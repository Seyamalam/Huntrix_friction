# Heap (data structure)

* Source: https://en.wikipedia.org/wiki/Heap_(data_structure)

---

Example of a 

[binary](https://en.wikipedia.org/wiki/Binary_tree)

 max-heap with node keys being integers between 1 and 100

In [computer science](https://en.wikipedia.org/wiki/Computer_science), a **heap** is a [tree](https://en.wikipedia.org/wiki/Tree_(data_structure))-based [data structure](https://en.wikipedia.org/wiki/Data_structure) that satisfies the **heap property**: In a *max heap*, for any given [node](https://en.wikipedia.org/wiki/Node_(computer_science)) C, if P is the parent node of C, then the *key* (the *value*) of P is greater than or equal to the key of C. In a *min heap*, the key of P is less than or equal to the key of C. The node at the "top" of the heap (with no parents) is called the *root* node.

The heap is one maximally efficient implementation of an [abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type) called a [priority queue](https://en.wikipedia.org/wiki/Priority_queue), and in fact, priority queues are often referred to as "heaps", regardless of how they may be implemented. In a heap, the highest (or lowest) priority element is always stored at the root. However, a heap is not a sorted structure; it can be regarded as being partially ordered. A heap is a useful data structure when it is necessary to repeatedly remove the object with the highest (or lowest) priority, or when insertions need to be interspersed with removals of the root node.

A common implementation of a heap is the [binary heap](https://en.wikipedia.org/wiki/Binary_heap), in which the tree is a [complete](https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees) binary tree (see figure). The heap data structure, specifically the binary heap, was introduced by [J. W. J. Williams](https://en.wikipedia.org/wiki/J._W._J._Williams) in 1964, as a data structure for the [heapsort](https://en.wikipedia.org/wiki/Heapsort) sorting algorithm. Heaps are also crucial in several efficient [graph algorithms](https://en.wikipedia.org/wiki/Graph_algorithms) such as [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm). When a heap is a complete binary tree, it has the smallest possible height—a heap with *N* nodes and *a* branches for each node always has log*a* *N* height.

Note that, as shown in the graphic, there is no implied ordering between siblings or cousins and no implied sequence for an [in-order traversal](https://en.wikipedia.org/wiki/Inorder_traversal) (as there would be in, e.g., a [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree)). The heap relation mentioned above applies only between nodes and their parents, grandparents. The maximum number of children each node can have depends on the type of heap.

Heaps are typically constructed in-place in the same array where the elements are stored, with their structure being implicit in the access pattern of the operations.  Heaps differ in this way from other data structures with similar or in some cases better theoretic bounds such as [radix trees](https://en.wikipedia.org/wiki/Radix_tree) in that they require no additional memory beyond that used for storing the keys.

## Operations

The common operations involving heaps are:

**Basic**

* *find-max* (or *find-min*): find a maximum item of a max-heap, or a minimum item of a min-heap, respectively (a.k.a. *[peek](https://en.wikipedia.org/wiki/Peek_(data_type_operation))*)
* *insert*: adding a new key to the heap (a.k.a., *push*)
* *extract-max* (or *extract-min*): returns the node of maximum value from a max heap [or minimum value from a min heap] after removing it from the heap (a.k.a., *pop*)
* *delete-max* (or *delete-min*): removing the root node of a max heap (or min heap), respectively
* *replace*: pop root and push a new key. This is more efficient than a pop followed by a push, since it only needs to balance once, not twice, and is appropriate for fixed-size heaps.

**Creation**

* *create-heap*: create an empty heap
* *heapify*: create a heap out of given array of elements
* *merge* (*union*): joining two heaps to form a valid new heap containing all the elements of both, preserving the original heaps.
* *meld*: joining two heaps to form a valid new heap containing all the elements of both, destroying the original heaps.

**Inspection**

* *size*: return the number of items in the heap.
* *is-empty*: return true if the heap is empty, false otherwise.

**Internal**

* *increase-key* or *decrease-key*: updating a key within a max- or min-heap, respectively
* *delete*: delete an arbitrary node (followed by moving last node and sifting to maintain heap)
* *sift-up*: move a node up in the tree, as long as needed; used to restore heap condition after insertion. Called "sift" because node moves up the tree until it reaches the correct level, as in a [sieve](https://en.wikipedia.org/wiki/Sieve).
* *sift-down*: move a node down in the tree, similar to sift-up; used to restore heap condition after deletion or replacement.

## Implementation using arrays

Heaps are usually implemented with an [array](https://en.wikipedia.org/wiki/Array_data_structure), as follows:

* Each element in the array represents a node of the heap, and
* The parent / child relationship is [defined implicitly](https://en.wikipedia.org/wiki/Implicit_data_structure) by the elements' indices in the array.
Example of a complete binary max-heap with node keys being integers from 1 to 100 and how it would be stored in an array.

For a [binary heap](https://en.wikipedia.org/wiki/Binary_heap), in the array, the first index contains the root element. The next two indices of the array contain the root's children. The next four indices contain the four children of the root's two child nodes, and so on. Therefore, given a node at index i, its children are at indices ⁠

2
i
+
1

{\displaystyle 2i+1}

⁠ and ⁠

2
i
+
2

{\displaystyle 2i+2}

⁠, and its parent is at index ⌊(*i*−1)/2⌋. This simple indexing scheme makes it efficient to move "up" or "down" the tree.

Balancing a heap is done by sift-up or sift-down operations (swapping elements which are out of order). As we can build a heap from an array without requiring extra memory (for the nodes, for example), [heapsort](https://en.wikipedia.org/wiki/Heapsort) can be used to sort an array in-place.

After an element is inserted into or deleted from a heap, the heap property may be violated, and the heap must be re-balanced by swapping elements within the array.

Although different types of heaps implement the operations differently, the most common way is as follows:

* **Insertion:** Add the new element at the end of the heap, in the first available free space. If this will violate the heap property, sift up the new element (*swim* operation) until the heap property has been reestablished.
* **Extraction:** Remove the root and insert the last element of the heap in the root. If this will violate the heap property, sift down the new root (*sink* operation) to reestablish the heap property.
* **Replacement:** Remove the root and put the *new* element in the root and sift down. When compared to extraction followed by insertion, this avoids a sift up step.

Construction of a binary (or *d*-ary) heap out of a given array of elements may be performed in linear time using the classic [Floyd algorithm](https://en.wikipedia.org/wiki/Heapsort#Variations), with the worst-case number of comparisons equal to 2*N* − 2*s*2(*N*) − *e*2(*N*) (for a binary heap), where *s*2(*N*) is the sum of all digits of the binary representation of *N* and *e*2(*N*) is the exponent of 2 in the prime factorization of *N*. This is faster than a sequence of consecutive insertions into an originally empty heap, which is log-linear.

## Variants

* [2–3 heap](https://en.wikipedia.org/wiki/2%E2%80%933_heap)
* [B-heap](https://en.wikipedia.org/wiki/B-heap)
* [Beap](https://en.wikipedia.org/wiki/Beap)
* [Binary heap](https://en.wikipedia.org/wiki/Binary_heap)
* [Binomial heap](https://en.wikipedia.org/wiki/Binomial_heap)
* [Brodal queue](https://en.wikipedia.org/wiki/Brodal_queue)
* [*d*-ary heap](https://en.wikipedia.org/wiki/D-ary_heap)
* [Fibonacci heap](https://en.wikipedia.org/wiki/Fibonacci_heap)
* [K-D Heap](https://en.wikipedia.org/wiki/K-D_Heap)
* [Leaf heap](https://en.wikipedia.org/w/index.php?title=Leaf_heap&action=edit&redlink=1)
* [Leftist heap](https://en.wikipedia.org/wiki/Leftist_tree)
* [Skew binomial heap](https://en.wikipedia.org/wiki/Skew_binomial_heap)
* [Strict Fibonacci heap](https://en.wikipedia.org/wiki/Strict_Fibonacci_heap)
* [Min-max heap](https://en.wikipedia.org/wiki/Min-max_heap)
* [Pairing heap](https://en.wikipedia.org/wiki/Pairing_heap)
* [Radix heap](https://en.wikipedia.org/wiki/Radix_heap)
* [Randomized meldable heap](https://en.wikipedia.org/wiki/Randomized_meldable_heap)
* [Skew heap](https://en.wikipedia.org/wiki/Skew_heap)
* [Soft heap](https://en.wikipedia.org/wiki/Soft_heap)
* [Ternary heap](https://en.wikipedia.org/wiki/Ternary_heap)
* [Treap](https://en.wikipedia.org/wiki/Treap)
* [Weak heap](https://en.wikipedia.org/wiki/Weak_heap)

## Comparison of theoretic bounds for variants

Here are [time complexities](https://en.wikipedia.org/wiki/Computational_complexity_theory) of various heap data structures. The abbreviation am. indicates that the given complexity is amortized, otherwise it is a worst-case complexity. For the meaning of "*O*(*f*)" and "*Θ*(*f*)" see [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation). Names of operations assume a max-heap.

| Operation | find-max | delete-max | increase-key | insert | meld | make-heap |
| --- | --- | --- | --- | --- | --- | --- |
| [Binary](https://en.wikipedia.org/wiki/Binary_heap) | *Θ*(1) | *Θ*(log *n*) | *Θ*(log *n*) | *Θ*(log *n*) | *Θ*(*n*) | *Θ*(*n*) |
| [Skew](https://en.wikipedia.org/wiki/Skew_heap) | *Θ*(1) | *O*(log *n*) am. | *O*(log *n*) am. | *O*(log *n*) am. | *O*(log *n*) am. | *Θ*(*n*) am. |
| [Leftist](https://en.wikipedia.org/wiki/Leftist_tree) | *Θ*(1) | *Θ*(log *n*) | *Θ*(log *n*) | *Θ*(log *n*) | *Θ*(log *n*) | *Θ*(*n*) |
| [Binomial](https://en.wikipedia.org/wiki/Binomial_heap) | *Θ*(1) | *Θ*(log *n*) | *Θ*(log *n*) | *Θ*(1) am. | *Θ*(log *n*) | *Θ*(*n*) |
| [Skew binomial](https://en.wikipedia.org/wiki/Skew_binomial_heap) | *Θ*(1) | *Θ*(log *n*) | *Θ*(log *n*) | *Θ*(1) | *Θ*(log *n*) | *Θ*(*n*) |
| [2–3 heap](https://en.wikipedia.org/wiki/2%E2%80%933_heap) | *Θ*(1) | *O*(log *n*) am. | *Θ*(1) | *Θ*(1) am. | *O*(log *n*) | *Θ*(*n*) |
| [Bottom-up skew](https://en.wikipedia.org/wiki/Skew_heap) | *Θ*(1) | *O*(log *n*) am. | *O*(log *n*) am. | *Θ*(1) am. | *Θ*(1) am. | *Θ*(*n*) am. |
| [Pairing](https://en.wikipedia.org/wiki/Pairing_heap) | *Θ*(1) | *O*(log *n*) am. | *o*(log *n*) am. | *Θ*(1) | *Θ*(1) | *Θ*(*n*) |
| [Rank-pairing](https://en.wikipedia.org/w/index.php?title=Rank-pairing_heap&action=edit&redlink=1) | *Θ*(1) | *O*(log *n*) am. | *Θ*(1) am. | *Θ*(1) | *Θ*(1) | *Θ*(*n*) |
| [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_heap) | *Θ*(1) | *O*(log *n*) am. | *Θ*(1) am. | *Θ*(1) | *Θ*(1) | *Θ*(*n*) |
| [Strict Fibonacci](https://en.wikipedia.org/wiki/Strict_Fibonacci_heap) | *Θ*(1) | *Θ*(log *n*) | *Θ*(1) | *Θ*(1) | *Θ*(1) | *Θ*(*n*) |
| [Brodal](https://en.wikipedia.org/wiki/Brodal_queue) | *Θ*(1) | *Θ*(log *n*) | *Θ*(1) | *Θ*(1) | *Θ*(1) | *Θ*(*n*) |

1. **^** Each insertion takes O(log(*k*)) in the existing size of the heap, thus 

∑ ∑ 

k
=
1

n

O
(
log
⁡ ⁡ 
k
)

{\displaystyle \sum _{k=1}^{n}O(\log k)}

. Since 

log
⁡ ⁡ 
n

/

2
=
(
log
⁡ ⁡ 
n
)
− − 
1

{\displaystyle \log n/2=(\log n)-1}

, a constant factor (half) of these insertions are within a constant factor of the maximum, so asymptotically we can assume 

k
=
n

{\displaystyle k=n}

; formally the time is 

n
O
(
log
⁡ ⁡ 
n
)
− − 
O
(
n
)
=
O
(
n
log
⁡ ⁡ 
n
)

{\displaystyle nO(\log n)-O(n)=O(n\log n)}

. This can also be readily seen from [Stirling's approximation](https://en.wikipedia.org/wiki/Stirling%27s_approximation).
2. **^** *make-heap* is the operation of building a heap from a sequence of *n* unsorted elements. It can be done in *Θ*(*n*) time whenever *meld* runs in *O*(log *n*) time (where both complexities can be amortized). Another algorithm achieves *Θ*(*n*) for binary heaps.
3. ^    For [persistent](https://en.wikipedia.org/wiki/Persistent_data_structure) heaps (not supporting *increase-key*), a generic transformation reduces the cost of *meld* to that of *insert*, while the new cost of *delete-max* is the sum of the old costs of *delete-max* and *meld*. Here, it makes *meld* run in *Θ*(1) time (amortized, if the cost of *insert* is) while *delete-max* still runs in *O*(log *n*). Applied to skew binomial heaps, it yields Brodal-Okasaki queues, persistent heaps with optimal worst-case complexities.
4. **^** Lower bound of 

Ω Ω 
(
log
⁡ ⁡ 
log
⁡ ⁡ 
n
)
,

{\displaystyle \Omega (\log \log n),}

 upper bound of 

O
(

2

2

log
⁡ ⁡ 
log
⁡ ⁡ 
n

)
.

{\displaystyle O(2^{2{\sqrt {\log \log n}}}).}
5. ^   Brodal queues and strict Fibonacci heaps achieve optimal worst-case complexities for heaps. They were first described as imperative data structures. The Brodal-Okasaki queue is a [persistent](https://en.wikipedia.org/wiki/Persistent_data_structure) data structure achieving the same optimum, except that *increase-key* is not supported.

## Applications

The heap data structure has many applications.

* [Heapsort](https://en.wikipedia.org/wiki/Heapsort): One of the best sorting methods being in-place and with no quadratic worst-case scenarios.
* [Selection algorithms](https://en.wikipedia.org/wiki/Selection_algorithm): A heap allows access to the min or max element in constant time, and other selections (such as median or kth-element) can be done in sub-linear time on data that is in a heap.
* [Graph algorithms](https://en.wikipedia.org/wiki/List_of_algorithms#Graph_algorithms): By using heaps as internal traversal data structures, run time will be reduced by polynomial order. Examples of such problems are [Prim's minimal-spanning-tree algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm) and [Dijkstra's shortest-path algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm).
* [Priority queue](https://en.wikipedia.org/wiki/Priority_queue): A priority queue is an abstract concept like "a list" or "a map"; just as a list can be implemented with a linked list or an array, a priority queue can be implemented with a heap or a variety of other methods.
* [K-way merge](https://en.wikipedia.org/wiki/K-way_merge_algorithm): A heap data structure is useful to merge many already-sorted input streams into a single sorted output stream. Examples of the need for merging include external sorting and streaming results from distributed data such as a log structured merge tree. The inner loop is obtaining the min element, replacing with the next element for the corresponding input stream, then doing a sift-down heap operation. (Alternatively the replace function.) (Using extract-max and insert functions of a priority queue are much less efficient.)

## Programming language implementations

* The [C++ Standard Library](https://en.wikipedia.org/wiki/C%2B%2B_Standard_Library) provides the make_heap, push_heap and pop_heap algorithms for heaps (usually implemented as binary heaps), which operate on arbitrary random access [iterators](https://en.wikipedia.org/wiki/Iterator). It treats the iterators as a reference to an array, and uses the array-to-heap conversion. It also provides the class [std::priority_queue](https://en.wikipedia.org/wiki/Sequence_container_(C%2B%2B)#Priority_queue), which wraps these facilities in a container-like class. However, there is no standard support for the replace, sift-up/sift-down, or decrease/increase-key operations.
* The [Boost C++ libraries](https://en.wikipedia.org/wiki/Boost_(C%2B%2B_libraries)) include a heaps library. Unlike the STL, it supports decrease and increase operations, and supports additional types of heap: specifically, it supports *d*-ary, binomial, Fibonacci, pairing and skew heaps.
* There is a [generic heap implementation](https://github.com/valyala/gheap) for [C](https://en.wikipedia.org/wiki/C_(programming_language)) and [C++](https://en.wikipedia.org/wiki/C%2B%2B) with [D-ary heap](https://en.wikipedia.org/wiki/D-ary_heap) and [B-heap](https://en.wikipedia.org/wiki/B-heap) support. It provides an STL-like API.
* The standard library of the [D programming language](https://en.wikipedia.org/wiki/D_(programming_language)) includes [std.container.BinaryHeap](https://dlang.org/phobos/std_container_binaryheap.html), which is implemented in terms of D's [ranges](https://tour.dlang.org/tour/en/basics/ranges). Instances can be constructed from any [random-access range](https://dlang.org/phobos/std_range_primitives.html#isRandomAccessRange). BinaryHeap exposes an [input range interface](https://dlang.org/phobos/std_range_primitives.html#isInputRange) that allows iteration with D's built-in foreach statements and integration with the range-based API of the [std.algorithm package](https://dlang.org/phobos/std_algorithm.html).
* For [Haskell](https://en.wikipedia.org/wiki/Haskell) there is the [Data.Heap](https://hackage.haskell.org/package/heaps) module.
* The [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) platform (since version 1.5) provides a binary heap implementation with the class `[java.util.PriorityQueue](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/PriorityQueue.html)` in the [Java Collections Framework](https://en.wikipedia.org/wiki/Java_Collections_Framework). This class implements by default a min-heap; to implement a max-heap, programmer should write a custom comparator. There is no support for the replace, sift-up/sift-down, or decrease/increase-key operations.
* [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) has a [heapq](https://docs.python.org/library/heapq.html) module that implements a priority queue using a binary heap. The library exposes a heapreplace function to support k-way merging.
* [PHP](https://en.wikipedia.org/wiki/PHP) has both max-heap (SplMaxHeap) and min-heap (SplMinHeap) as of version 5.3 in the Standard PHP Library.
* [Perl](https://en.wikipedia.org/wiki/Perl) has implementations of binary, binomial, and Fibonacci heaps in the [Heap](https://metacpan.org/module/Heap) distribution available on [CPAN](https://en.wikipedia.org/wiki/CPAN).
* The [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) language contains a [heap](https://golang.org/pkg/container/heap/) package with heap algorithms that operate on an arbitrary type that satisfies a given interface. That package does not support the replace, sift-up/sift-down, or decrease/increase-key operations.
* Apple's [Core Foundation](https://en.wikipedia.org/wiki/Core_Foundation) library contains a [CFBinaryHeap](https://developer.apple.com/documentation/corefoundation/cfbinaryheap) structure.
* [Pharo](https://en.wikipedia.org/wiki/Pharo) has an implementation of a heap in the Collections-Sequenceable package along with a set of test cases. A heap is used in the implementation of the timer event loop.
* The [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) programming language has a binary max-heap implementation, [BinaryHeap](https://doc.rust-lang.org/std/collections/struct.BinaryHeap.html), in the collections module of its standard library.
* [.NET](https://en.wikipedia.org/wiki/.NET) has [PriorityQueue](https://docs.microsoft.com/dotnet/api/system.collections.generic.priorityqueue-2) class which uses quaternary (d-ary) min-heap implementation. It is available from .NET 6.

## See also

* [Sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm)
* [Search data structure](https://en.wikipedia.org/wiki/Search_data_structure)
* [Treap](https://en.wikipedia.org/wiki/Treap), a form of binary search tree based on heap-ordered trees

## References

1. **^** Black (ed.), Paul E. (2004-12-14). Entry for *heap* in *[Dictionary of Algorithms and Data Structures](https://en.wikipedia.org/w/index.php?title=Dictionary_of_Algorithms_and_Data_Structures&action=edit&redlink=1)*. Online version. U.S. [National Institute of Standards and Technology](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology), 14 December 2004. Retrieved on 2017-10-08 from [https://xlinux.nist.gov/dads/HTML/heap.html](https://xlinux.nist.gov/dads/HTML/heap.html).
2. **^** CORMEN, THOMAS H. (2009). *INTRODUCTION TO ALGORITHMS*. United States of America: The MIT Press Cambridge, Massachusetts London, England. pp. 151–152. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-03384-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-03384-8).
3. **^** [Williams, J. W. J.](https://en.wikipedia.org/wiki/J._W._J._Williams) (1964), "Algorithm 232 - Heapsort", *[Communications of the ACM](https://en.wikipedia.org/wiki/Communications_of_the_ACM)*, **7** (6): 347–348, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/512274.3734138](https://doi.org/10.1145%2F512274.3734138)
4. **^** The Python Standard Library, 8.4. heapq — Heap queue algorithm, [heapq.heappush](https://docs.python.org/3/library/heapq.html#heapq.heappush)
5. **^** The Python Standard Library, 8.4. heapq — Heap queue algorithm, [heapq.heappop](https://docs.python.org/3/library/heapq.html#heapq.heappop)
6. **^** The Python Standard Library, 8.4. heapq — Heap queue algorithm, [heapq.heapreplace](https://docs.python.org/3/library/heapq.html#heapq.heapreplace)
7. **^** Suchenek, Marek A. (2012), "Elementary Yet Precise Worst-Case Analysis of Floyd's Heap-Construction Program", *Fundamenta Informaticae*, **120** (1), IOS Press: 75–92, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.3233/FI-2012-751](https://doi.org/10.3233%2FFI-2012-751).
8. ^     [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ron_Rivest) (1990). [*Introduction to Algorithms*](https://en.wikipedia.org/wiki/Introduction_to_Algorithms) (1st ed.). MIT Press and McGraw-Hill. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-03141-8](https://en.wikipedia.org/wiki/Special:BookSources/0-262-03141-8).
9. ^    [Sleator, Daniel Dominic](https://en.wikipedia.org/wiki/Daniel_Sleator); [Tarjan, Robert Endre](https://en.wikipedia.org/wiki/Robert_Tarjan) (February 1986). ["Self-Adjusting Heaps"](https://www.cs.cmu.edu/~sleator/papers/Adjusting-Heaps.htm). *[SIAM Journal on Computing](https://en.wikipedia.org/wiki/SIAM_Journal_on_Computing)*. **15** (1): 52–69. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.93.6678](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.93.6678). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/0215004](https://doi.org/10.1137%2F0215004). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0097-5397](https://search.worldcat.org/issn/0097-5397).
10. ^   [Tarjan, Robert](https://en.wikipedia.org/wiki/Robert_Tarjan) (1983). "3.3. Leftist heaps". *Data Structures and Network Algorithms*. pp. 38–42. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/1.9781611970265](https://doi.org/10.1137%2F1.9781611970265). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-89871-187-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-89871-187-5).
11. **^** Hayward, Ryan; McDiarmid, Colin (1991). ["Average Case Analysis of Heap Building by Repeated Insertion"](https://web.archive.org/web/20160205023201/http://www.stats.ox.ac.uk/__data/assets/pdf_file/0015/4173/heapbuildjalg.pdf) (PDF). *J. Algorithms*. **12**: 126–153. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.353.7888](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.353.7888). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0196-6774(91)90027-v](https://doi.org/10.1016%2F0196-6774%2891%2990027-v). Archived from [the original](http://www.stats.ox.ac.uk/__data/assets/pdf_file/0015/4173/heapbuildjalg.pdf) (PDF) on 2016-02-05. Retrieved 2016-01-28.
12. **^** ["Binomial Heap | Brilliant Math & Science Wiki"](https://brilliant.org/wiki/binomial-heap/). *brilliant.org*. Retrieved 2019-09-30.
13. ^   Brodal, Gerth Stølting; Okasaki, Chris (November 1996), "Optimal purely functional priority queues", *Journal of Functional Programming*, **6** (6): 839–857, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/s095679680000201x](https://doi.org/10.1017%2Fs095679680000201x)
14. **^** [Okasaki, Chris](https://en.wikipedia.org/wiki/Chris_Okasaki) (1998). "10.2. Structural Abstraction". *Purely Functional Data Structures* (1st ed.). pp. 158–162. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780521631242](https://en.wikipedia.org/wiki/Special:BookSources/9780521631242).
15. **^** [Takaoka, Tadao](https://en.wikipedia.org/w/index.php?title=Tadao_Takaoka&action=edit&redlink=1) (1999), [*Theory of 2–3 Heaps*](https://ir.canterbury.ac.nz/bitstream/handle/10092/14769/2-3heaps.pdf) (PDF), p. 12
16. **^** [Iacono, John](https://en.wikipedia.org/wiki/John_Iacono) (2000), "Improved upper bounds for pairing heaps", [*Proc. 7th Scandinavian Workshop on Algorithm Theory*](http://john2.poly.edu/papers/swat00/paper.pdf) (PDF), Lecture Notes in Computer Science, vol. 1851, Springer-Verlag, pp. 63–77, [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1110.4428](https://arxiv.org/abs/1110.4428), [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.748.7812](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.748.7812), [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/3-540-44985-X_5](https://doi.org/10.1007%2F3-540-44985-X_5), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [3-540-67690-2](https://en.wikipedia.org/wiki/Special:BookSources/3-540-67690-2)
17. **^** [Fredman, Michael Lawrence](https://en.wikipedia.org/wiki/Michael_Fredman) (July 1999). ["On the Efficiency of Pairing Heaps and Related Data Structures"](http://www.uqac.ca/azinflou/Fichiers840/EfficiencyPairingHeap.pdf) (PDF). *[Journal of the Association for Computing Machinery](https://en.wikipedia.org/wiki/Journal_of_the_Association_for_Computing_Machinery)*. **46** (4): 473–501. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/320211.320214](https://doi.org/10.1145%2F320211.320214).
18. **^** Pettie, Seth (2005). [*Towards a Final Analysis of Pairing Heaps*](http://web.eecs.umich.edu/~pettie/papers/focs05.pdf) (PDF). FOCS '05 Proceedings of the 46th Annual IEEE Symposium on Foundations of Computer Science. pp. 174–183. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.549.471](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.549.471). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SFCS.2005.75](https://doi.org/10.1109%2FSFCS.2005.75). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-7695-2468-0](https://en.wikipedia.org/wiki/Special:BookSources/0-7695-2468-0).
19. **^** Haeupler, Bernhard; Sen, Siddhartha; [Tarjan, Robert E.](https://en.wikipedia.org/wiki/Robert_Tarjan) (November 2011). ["Rank-pairing heaps"](http://sidsen.org/papers/rp-heaps-journal.pdf) (PDF). *SIAM J. Computing*. **40** (6): 1463–1485. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/100785351](https://doi.org/10.1137%2F100785351).
20. **^** [Fredman, Michael Lawrence](https://en.wikipedia.org/wiki/Michael_Fredman); [Tarjan, Robert E.](https://en.wikipedia.org/wiki/Robert_Tarjan) (July 1987). ["Fibonacci heaps and their uses in improved network optimization algorithms"](http://bioinfo.ict.ac.cn/~dbu/AlgorithmCourses/Lectures/Fibonacci-Heap-Tarjan.pdf) (PDF). *[Journal of the Association for Computing Machinery](https://en.wikipedia.org/wiki/Journal_of_the_Association_for_Computing_Machinery)*. **34** (3): 596–615. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.309.8927](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.309.8927). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/28869.28874](https://doi.org/10.1145%2F28869.28874).
21. **^** [Brodal, Gerth Stølting](https://en.wikipedia.org/wiki/Gerth_St%C3%B8lting_Brodal); Lagogiannis, George; [Tarjan, Robert E.](https://en.wikipedia.org/wiki/Robert_Tarjan) (2012). [*Strict Fibonacci heaps*](http://www.cs.au.dk/~gerth/papers/stoc12.pdf) (PDF). Proceedings of the 44th symposium on Theory of Computing - STOC '12. pp. 1177–1184. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.233.1740](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.233.1740). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/2213977.2214082](https://doi.org/10.1145%2F2213977.2214082). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-1245-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-1245-5).
22. **^** [Brodal, Gerth S.](https://en.wikipedia.org/wiki/Gerth_St%C3%B8lting_Brodal) (1996), ["Worst-Case Efficient Priority Queues"](http://www.cs.au.dk/~gerth/papers/soda96.pdf) (PDF), *Proc. 7th Annual ACM-SIAM Symposium on Discrete Algorithms*, pp. 52–58
23. **^** [Goodrich, Michael T.](https://en.wikipedia.org/wiki/Michael_T._Goodrich); [Tamassia, Roberto](https://en.wikipedia.org/wiki/Roberto_Tamassia) (2004). "7.3.6. Bottom-Up Heap Construction". *Data Structures and Algorithms in Java* (3rd ed.). pp. 338–341. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-471-46983-1](https://en.wikipedia.org/wiki/Special:BookSources/0-471-46983-1).
24. **^** Frederickson, Greg N. (1993), "An Optimal Algorithm for Selection in a Min-Heap", [*Information and Computation*](https://web.archive.org/web/20121203045606/http://ftp.cs.purdue.edu/research/technical_reports/1991/TR%2091-027.pdf) (PDF), vol. 104, Academic Press, pp. 197–214, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1006/inco.1993.1030](https://doi.org/10.1006%2Finco.1993.1030), archived from [the original](http://ftp.cs.purdue.edu/research/technical_reports/1991/TR%2091-027.pdf) (PDF) on 2012-12-03, retrieved 2010-10-31

## External links

* [Heap](http://mathworld.wolfram.com/Heap.html) at Wolfram MathWorld
* [Explanation](https://www.cs.auckland.ac.nz/software/AlgAnim/heaps.html) of how the basic heap algorithms work
* Bentley, Jon Louis (2000). *Programming Pearls* (2nd ed.). Addison Wesley. pp. 147–162. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0201657880](https://en.wikipedia.org/wiki/Special:BookSources/0201657880).
 
NewPP limit report
Parsed by mw‐web.codfw.main‐79f8bf9dc‐djmwt
Cached time: 20260403002554
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.467 seconds
Real time usage: 0.582 seconds
Preprocessor visited node count: 3294/1000000
Revision size: 16498/2097152 bytes
Post‐expand include size: 90741/2097152 bytes
Template argument size: 5103/2097152 bytes
Highest expansion depth: 13/100
Expensive parser function count: 2/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 112793/5000000 bytes
Lua time usage: 0.252/10.000 seconds
Lua memory usage: 5444283/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  430.664      1 -total
 41.18%  177.346      2 Template:Reflist
 18.91%   81.438      6 Template:Cite_book
 18.73%   80.659      2 Template:Navbox
 18.64%   80.255      1 Template:CS-Trees
 10.77%   46.394      1 Template:Short_description
 10.41%   44.819      2 Template:Sister_project
 10.16%   43.740      2 Template:Side_box
 10.00%   43.077      1 Template:Commons_category
  9.41%   40.504      1 Template:Heap_Running_Times
 Render ID ad065900-2ef3-11f1-b6a4-4fd994e36fd1  Saved in parser cache with key enwiki:pcache:13996:|#|:idhash:canonical and timestamp 20260403002554 and revision id 1336723048. Rendering was triggered because: page_view