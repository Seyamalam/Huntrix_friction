# Binary search tree

* Source: https://en.wikipedia.org/wiki/Binary_search_tree

---

| Binary search tree |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Type](https://en.wikipedia.org/wiki/List_of_data_structures) | tree |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Invented | 1960 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Invented by | P.F. Windley, [A.D. Booth](https://en.wikipedia.org/wiki/Andrew_Donald_Booth), [A.J.T. Colin](https://en.wikipedia.org/wiki/Andrew_Colin), and [T.N. Hibbard](https://en.wikipedia.org/wiki/Thomas_N._Hibbard) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| [Time complexity](https://en.wikipedia.org/wiki/Time_complexity) in [big O notation](https://en.wikipedia.org/wiki/Big_O_notation)Operation **Average** **Worst case**Search Θ(log *n*) O(*n*)Insert Θ(log *n*) O(*n*)Delete Θ(log *n*) O(*n*)[Space complexity](https://en.wikipedia.org/wiki/Space_complexity)Space Θ(*n*) O(*n*) | [Time complexity](https://en.wikipedia.org/wiki/Time_complexity) in [big O notation](https://en.wikipedia.org/wiki/Big_O_notation) | Operation | **Average** | **Worst case** | Search | Θ(log *n*) | O(*n*) | Insert | Θ(log *n*) | O(*n*) | Delete | Θ(log *n*) | O(*n*) | [Space complexity](https://en.wikipedia.org/wiki/Space_complexity) | Space | Θ(*n*) | O(*n*) |
| [Time complexity](https://en.wikipedia.org/wiki/Time_complexity) in [big O notation](https://en.wikipedia.org/wiki/Big_O_notation) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Operation | **Average** | **Worst case** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Search | Θ(log *n*) | O(*n*) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Insert | Θ(log *n*) | O(*n*) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Delete | Θ(log *n*) | O(*n*) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| [Space complexity](https://en.wikipedia.org/wiki/Space_complexity) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Space | Θ(*n*) | O(*n*) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

Fig. 1: A binary search tree of size 9 and depth 3, with 8 at the root.

In [computer science](https://en.wikipedia.org/wiki/Computer_science), a **binary search tree** (**BST**), also called an **ordered** or **sorted binary tree**, is a [rooted](https://en.wikipedia.org/wiki/Rooted_tree) [binary tree](https://en.wikipedia.org/wiki/Binary_tree) [data structure](https://en.wikipedia.org/wiki/Data_structure) with the key of each internal node being greater than all the keys in the respective node's left subtree and less than the ones in its right subtree. The [time complexity](https://en.wikipedia.org/wiki/Time_complexity) of operations on the binary search tree is [linear](https://en.wikipedia.org/wiki/Time_complexity#Linear_time) with respect to the height of the tree.

Binary search trees allow [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) for fast lookup, addition, and removal of data items. Since the nodes in a BST are laid out so that each comparison skips about half of the remaining tree, the lookup performance is proportional to that of [binary logarithm](https://en.wikipedia.org/wiki/Binary_logarithm). BSTs were devised in the 1960s for the problem of efficient storage of labeled data and are attributed to [Conway Berners-Lee](https://en.wikipedia.org/wiki/Conway_Berners-Lee) and [David Wheeler](https://en.wikipedia.org/wiki/David_Wheeler_(computer_scientist)).

The performance of a binary search tree is dependent on the order of insertion of the nodes into the tree since arbitrary insertions may lead to degeneracy; several variations of the binary search tree can be built with guaranteed worst-case performance. The basic operations include: search, traversal, insert and delete. BSTs with guaranteed worst-case complexities perform better than an unsorted array, which would require [linear search time](https://en.wikipedia.org/wiki/Linear_time).

The [complexity analysis](https://en.wikipedia.org/wiki/Computational_complexity_theory) of BST shows that, [on average](https://en.wikipedia.org/wiki/Best,_worst_and_average_case), the insert, delete and search takes 

Θ Θ 
(
log
⁡ ⁡ 
n
)

{\displaystyle \Theta (\log n)}

 for 

n

{\displaystyle n}

 nodes. In the worst case, they degrade to that of a singly linked list: 

O
(
n
)

{\displaystyle O(n)}

. To address the boundless increase of the tree height with arbitrary insertions and deletions, [self-balancing](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree) variants of BSTs are introduced to bound the worst lookup complexity to that of the binary logarithm. [AVL trees](https://en.wikipedia.org/wiki/AVL_trees) were the first self-balancing binary search trees, invented in 1962 by [Georgy Adelson-Velsky](https://en.wikipedia.org/wiki/Georgy_Adelson-Velsky) and [Evgenii Landis](https://en.wikipedia.org/wiki/Evgenii_Landis).

Binary search trees can be used to implement [abstract data types](https://en.wikipedia.org/wiki/Abstract_data_type) such as [dynamic sets](https://en.wikipedia.org/wiki/Set_(abstract_data_type)), [lookup tables](https://en.wikipedia.org/wiki/Lookup_table) and [priority queues](https://en.wikipedia.org/wiki/Priority_queue), and used in [sorting algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm) such as [tree sort](https://en.wikipedia.org/wiki/Tree_sort).

## History

The binary search tree algorithm was discovered independently by several researchers, including P.F. Windley, [Andrew Donald Booth](https://en.wikipedia.org/wiki/Andrew_Donald_Booth), [Andrew Colin](https://en.wikipedia.org/wiki/Andrew_Colin), [Thomas N. Hibbard](https://en.wikipedia.org/wiki/Thomas_N._Hibbard). The algorithm is attributed to [Conway Berners-Lee](https://en.wikipedia.org/wiki/Conway_Berners-Lee) and [David Wheeler](https://en.wikipedia.org/wiki/David_Wheeler_(computer_scientist)), who used it for storing [labeled data](https://en.wikipedia.org/wiki/Labeled_data) in [magnetic tapes](https://en.wikipedia.org/wiki/Magnetic_tape) in 1960. One of the earliest and popular binary search tree algorithm is that of Hibbard.

The time complexity of a binary search tree increases boundlessly with the tree height if the nodes are inserted in an arbitrary order, therefore [self-balancing binary search trees](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree) were introduced to bound the height of the tree to 

O
(
log
⁡ ⁡ 
n
)

{\displaystyle O(\log n)}

. Various **height-balanced** binary search trees were introduced to confine the tree height, such as [AVL trees](https://en.wikipedia.org/wiki/AVL_tree), [Treaps](https://en.wikipedia.org/wiki/Treap), and [red–black trees](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree).

## Overview

A binary search tree is a rooted binary tree in which nodes are arranged in [strict total order](https://en.wikipedia.org/wiki/Total_order#Strict_and_non-strict_total_orders) in which the nodes with keys greater than any particular node *A* is stored on the right [sub-trees](https://en.wikipedia.org/wiki/Tree_(data_structure)#Terminology) to that node *A* and the nodes with keys equal to or less than *A* are stored on the left sub-trees to *A,* satisfying the [binary search](https://en.wikipedia.org/wiki/Binary_search) property.

Binary search trees are also efficacious in [sortings](https://en.wikipedia.org/wiki/Sorting_algorithm) and [search algorithms](https://en.wikipedia.org/wiki/Search_algorithm). However, the search complexity of a BST depends upon the order in which the nodes are inserted and deleted; since in worst case, successive operations in the binary search tree may lead to degeneracy and form a [singly linked list](https://en.wikipedia.org/wiki/Singly_linked_list) (or "unbalanced tree") like structure, thus has the same worst-case complexity as a [linked list](https://en.wikipedia.org/wiki/Linked_list).

Binary search trees are also a fundamental data structure used in construction of [abstract data structures](https://en.wikipedia.org/wiki/Abstract_data_structures) such as sets, [multisets](https://en.wikipedia.org/wiki/Set_(computer_science)#Multiset), and [associative arrays](https://en.wikipedia.org/wiki/Associative_array).

## Operations

### Searching

Searching in a binary search tree for a specific key can be programmed [recursively](https://en.wikipedia.org/wiki/Recursion_(computer_science)) or [iteratively](https://en.wikipedia.org/wiki/Iteration#Computing).

Searching begins by examining the [root node](https://en.wikipedia.org/wiki/Root_node). If the tree is [nil](https://en.wikipedia.org/wiki/Null_pointer), the key being searched for does not exist in the tree. Otherwise, if the key equals that of the root, the search is successful and the node is returned. If the key is less than that of the root, the search proceeds by examining the left subtree. Similarly, if the key is greater than that of the root, the search proceeds by examining the right subtree. This process is repeated until the key is found or the remaining subtree is 

nil

{\displaystyle {\text{nil}}}

. If the searched key is not found after a 

nil

{\displaystyle {\text{nil}}}

 subtree is reached, then the key is not present in the tree.

#### Recursive search

The following [pseudocode](https://en.wikipedia.org/wiki/Pseudocode) implements the BST search procedure through [recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)).

| Recursive-Tree-Search(x, key)     **if** x = NIL **or** key = x.key **then**         **return** x     **if** key < x.key **then**         **return** Recursive-Tree-Search(x.left, key)     **else**         **return** Recursive-Tree-Search(x.right, key)     **end if** |
| --- |

The recursive procedure continues until a 

nil

{\displaystyle {\text{nil}}}

 or the 

key

{\displaystyle {\text{key}}}

 being searched for are encountered.

#### Iterative search

The recursive version of the search can be "unrolled" into a [while loop](https://en.wikipedia.org/wiki/While_loop). On most machines, the iterative version is found to be more [efficient](https://en.wikipedia.org/wiki/Computer_performance).

| Iterative-Tree-Search(x, key)     **while** x ≠ NIL **and** key ≠ x.key **do**         **if** key < x.key **then**             x := x.left         **else**             x := x.right         **end if**     **repeat**     **return** x |
| --- |

Since the search may proceed till some [leaf node](https://en.wikipedia.org/wiki/Leaf_node), the running time complexity of BST search is 

O
(
h
)

{\displaystyle O(h)}

 where 

h

{\displaystyle h}

 is the [height of the tree](https://en.wikipedia.org/wiki/Tree_(data_structure)#Terminology). However, the worst case for BST search is 

O
(
n
)

{\displaystyle O(n)}

 where 

n

{\displaystyle n}

 is the total number of nodes in the BST, because an unbalanced BST may degenerate to a linked list. However, if the BST is [height-balanced](https://en.wikipedia.org/wiki/Height-balanced_tree) the height is 

O
(
log
⁡ ⁡ 
n
)

{\displaystyle O(\log n)}

.

#### Successor and predecessor

For certain operations, given a node 

x

{\displaystyle {\text{x}}}

, finding the successor or predecessor of 

x

{\displaystyle {\text{x}}}

 is crucial. Assuming all the keys of a BST are distinct, the successor of a node 

x

{\displaystyle {\text{x}}}

 in a BST is the node with the smallest key greater than 

x

{\displaystyle {\text{x}}}

's key. On the other hand, the predecessor of a node 

x

{\displaystyle {\text{x}}}

 in a BST is the node with the largest key smaller than 

x

{\displaystyle {\text{x}}}

's key. The following pseudocode finds the successor and predecessor of a node 

x

{\displaystyle {\text{x}}}

 in a BST.

| BST-Successor(x)      **if** x.right ≠ NIL **then**          **return** BST-Minimum(x.right)      **end if**      y := x.parent      **while** y ≠ NIL **and** x = y.right **do**          x := y          y := y.parent      **repeat**      **return** y | BST-Predecessor(x)      **if** x.left ≠ NIL **then**          **return** BST-Maximum(x.left)      **end if**      y := x.parent      **while** y ≠ NIL **and** x = y.left **do**          x := y          y := y.parent      **repeat**      **return** y |
| --- | --- |

Operations such as finding a node in a BST whose key is the maximum or minimum are critical in certain operations, such as determining the successor and predecessor of nodes. Following is the pseudocode for the operations.

| BST-Maximum(x)      **while** x.right ≠ NIL **do**          x := x.right      **repeat**      **return** x | BST-Minimum(x)      **while** x.left ≠ NIL **do**          x := x.left      **repeat**      **return** x |
| --- | --- |

### Insertion

Operations such as insertion and deletion cause the BST representation to change dynamically. The data structure must be modified in such a way that the properties of BST continue to hold. New nodes are inserted as [leaf nodes](https://en.wikipedia.org/wiki/Leaf_nodes) in the BST. Following is an iterative implementation of the insertion operation.

| 1    BST-Insert(T, z) 2      y := NIL 3      x := T.root 4      **while** x ≠ NIL **do** 5        y := x 6        **if** z.key < x.key **then** 7          x := x.left 8        **else** 9          x := x.right 10       **end if** 11     **repeat** 12     z.parent := y 13     **if** y = NIL **then** 14       T.root := z 15     **else if** z.key < y.key **then** 16       y.left := z 17     **else** 18       y.right := z 19     **end if** |
| --- |

The procedure maintains a "trailing pointer" 

y

{\displaystyle {\text{y}}}

 as a parent of 

x

{\displaystyle {\text{x}}}

. After initialization on line 2, the **while** loop along lines 4-11 causes the pointers to be updated. If 

y

{\displaystyle {\text{y}}}

 is 

nil

{\displaystyle {\text{nil}}}

, the BST is empty, thus 

z

{\displaystyle {\text{z}}}

 is inserted as the root node of the binary search tree 

T

{\displaystyle {\text{T}}}

, if it is not 

nil

{\displaystyle {\text{nil}}}

, insertion proceeds by comparing the keys to that of 

y

{\displaystyle {\text{y}}}

 on the lines 15-19 and the node is inserted accordingly.

### Deletion

Binary search tree node deletion process.

The deletion of a node, say 

Z

{\displaystyle {\text{Z}}}

, from the binary search tree 

BST

{\displaystyle {\text{BST}}}

 has three cases:

1. If 

Z

{\displaystyle {\text{Z}}}

 is a leaf node, it is replaced by 

NIL

{\displaystyle {\text{NIL}}}

 as shown in (a).
2. If 

Z

{\displaystyle {\text{Z}}}

 has only one child, the child node of 

Z

{\displaystyle {\text{Z}}}

 gets elevated by modifying the parent node of 

Z

{\displaystyle {\text{Z}}}

 to point to the child node, consequently taking 

Z

{\displaystyle {\text{Z}}}

's position in the tree, as shown in (b) and (c).
3. If 

Z

{\displaystyle {\text{Z}}}

 has both left and right children, the [in-order](https://en.wikipedia.org/wiki/Tree_traversal#In-order,_LNR) successor of 

Z

{\displaystyle {\text{Z}}}

, say 

Y

{\displaystyle {\text{Y}}}

, displaces 

Z

{\displaystyle {\text{Z}}}

 by following the two cases:

    1. If 

Y

{\displaystyle {\text{Y}}}

 is 

Z

{\displaystyle {\text{Z}}}

's right child, as shown in (d), 

Y

{\displaystyle {\text{Y}}}

 displaces 

Z

{\displaystyle {\text{Z}}}

 and 

Y

{\displaystyle {\text{Y}}}

's right child remain unchanged.
    2. If 

Y

{\displaystyle {\text{Y}}}

 lies within 

Z

{\displaystyle {\text{Z}}}

's right subtree but is not 

Z

{\displaystyle {\text{Z}}}

's right child, as shown in (e), 

Y

{\displaystyle {\text{Y}}}

 first gets replaced by its own right child, and then it displaces 

Z

{\displaystyle {\text{Z}}}

's position in the tree.
4. Alternatively, the in-order predecessor can also be used.

The following pseudocode implements the deletion operation in a binary search tree.

| 1    BST-Delete(BST, z) 2      **if** z.left = NIL **then** 3        Shift-Nodes(BST, z, z.right) 4      **else if** z.right = NIL **then** 5        Shift-Nodes(BST, z, z.left) 6      **else** 7        y := BST-Successor(z) 8        **if** y.parent ≠ z **then** 9          Shift-Nodes(BST, y, y.right) 10         y.right := z.right 11         y.right.parent := y 12       **end if** 13       Shift-Nodes(BST, z, y) 14       y.left := z.left 15       y.left.parent := y 16     **end if** |
| --- |
| 1    Shift-Nodes(BST, u, v) 2      **if** u.parent = NIL **then** 3        BST.root := v 4      **else if** u = u.parent.left **then** 5        u.parent.left := v 5      **else** 6        u.parent.right := v 7      **end if** 8      **if** v ≠ NIL **then** 9        v.parent := u.parent 10     **end if** |

The 

BST-Delete

{\displaystyle {\text{BST-Delete}}}

 procedure deals with the 3 special cases mentioned above. Lines 2-3 deal with case 1; lines 4-5 deal with case 2 and lines 6-16 for case 3. The [helper function](https://en.wikipedia.org/wiki/Helper_function) 

Shift-Nodes

{\displaystyle {\text{Shift-Nodes}}}

 is used within the deletion algorithm for the purpose of replacing the node 

u

{\displaystyle {\text{u}}}

 with 

v

{\displaystyle {\text{v}}}

 in the binary search tree 

BST

{\displaystyle {\text{BST}}}

. This procedure handles the deletion (and substitution) of 

u

{\displaystyle {\text{u}}}

 from 

BST

{\displaystyle {\text{BST}}}

.

## Traversal

A BST can be [traversed](https://en.wikipedia.org/wiki/Tree_traversal) through three basic algorithms: [inorder](https://en.wikipedia.org/wiki/Inorder_traversal), [preorder](https://en.wikipedia.org/wiki/Pre-order_traversal), and [postorder](https://en.wikipedia.org/wiki/Post-order_traversal) tree walks.

* **Inorder tree walk**: Nodes from the left subtree get visited first, followed by the root node and right subtree. Such a traversal visits all the nodes in the order of non-decreasing key sequence.
* **Preorder tree walk**: The root node gets visited first, followed by left and right subtrees.
* **Postorder tree walk**: Nodes from the left subtree get visited first, followed by the right subtree, and finally, the root.

Following is a recursive implementation of the tree walks.

| Inorder-Tree-Walk(x)    **if** x ≠ NIL **then**      Inorder-Tree-Walk(x.left)      *visit node*      Inorder-Tree-Walk(x.right)    **end if** | Preorder-Tree-Walk(x)    **if** x ≠ NIL **then**      *visit node*      Preorder-Tree-Walk(x.left)      Preorder-Tree-Walk(x.right)    **end if** | Postorder-Tree-Walk(x)    **if** x ≠ NIL **then**      Postorder-Tree-Walk(x.left)      Postorder-Tree-Walk(x.right)      *visit node*    **end if** |
| --- | --- | --- |

## Balanced binary search trees

Without rebalancing, insertions or deletions in a binary search tree may lead to degeneration, resulting in a height 

n

{\displaystyle n}

 of the tree (where 

n

{\displaystyle n}

 is number of items in a tree), so that the lookup performance is deteriorated to that of a linear search. Keeping the search tree balanced and height bounded by 

O
(
log
⁡ ⁡ 
n
)

{\displaystyle O(\log n)}

 is a key to the usefulness of the binary search tree. This can be achieved by "self-balancing" mechanisms during the updation operations to the tree designed to maintain the tree height to the binary logarithmic complexity.

### Height-balanced trees

A tree is height-balanced if the heights of the left sub-tree and right sub-tree are guaranteed to be related by a constant factor. This property was introduced by the [AVL tree](https://en.wikipedia.org/wiki/AVL_tree) and continued by the [red–black tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree). The heights of all the nodes on the path from the root to the modified leaf node have to be observed and possibly corrected on every insert and delete operation to the tree.

### Weight-balanced trees

In a weight-balanced tree, the criterion of a balanced tree is the number of leaves of the subtrees. The weights of the left and right subtrees differ at most by 

1

{\displaystyle 1}

. However, the difference is bound by a ratio 

α α 

{\displaystyle \alpha }

 of the weights, since a strong balance condition of 

1

{\displaystyle 1}

 cannot be maintained with 

O
(
log
⁡ ⁡ 
n
)

{\displaystyle O(\log n)}

 rebalancing work during insert and delete operations. The 

α α 

{\displaystyle \alpha }

-weight-balanced trees gives an entire family of balance conditions, where each left and right subtrees have each at least a fraction of 

α α 

{\displaystyle \alpha }

 of the total weight of the subtree.

### Types

There are several self-balanced binary search trees, including [T-tree](https://en.wikipedia.org/wiki/T-tree), [treap](https://en.wikipedia.org/wiki/Treap), [red-black tree](https://en.wikipedia.org/wiki/Red-black_tree), [B-tree](https://en.wikipedia.org/wiki/B-tree), [2–3 tree](https://en.wikipedia.org/wiki/2%E2%80%933_tree), and [Splay tree](https://en.wikipedia.org/wiki/Splay_tree).

## Examples of applications

### Sort

Binary search trees are used in sorting algorithms such as [tree sort](https://en.wikipedia.org/wiki/Tree_sort), where all the elements are inserted at once and the tree is traversed at an in-order fashion. BSTs are also used in [quicksort](https://en.wikipedia.org/wiki/Quicksort).

### Priority queue operations

Binary search trees are used in implementing [priority queues](https://en.wikipedia.org/wiki/Priority_queue), using the node's key as priorities. Adding new elements to the queue follows the regular BST insertion operation but the removal operation depends on the type of priority queue:

* If it is an ascending order priority queue, removal of an element with the lowest priority is done through leftward traversal of the BST.
* If it is a descending order priority queue, removal of an element with the highest priority is done through rightward traversal of the BST.

## See also

* [Search tree](https://en.wikipedia.org/wiki/Search_tree)
* [Join-based tree algorithms](https://en.wikipedia.org/wiki/Join-based_tree_algorithms)
* [Optimal binary search tree](https://en.wikipedia.org/wiki/Optimal_binary_search_tree)
* [Geometry of binary search trees](https://en.wikipedia.org/wiki/Geometry_of_binary_search_trees)
* [Ternary search tree](https://en.wikipedia.org/wiki/Ternary_search_tree)

## References

1. **^** Pitassi, Toniann (2015). ["CSC263: Balanced BSTs, AVL tree"](http://www.cs.toronto.edu/~toni/Courses/263-2015/lectures/lec04-balanced-augmentation.pdf) (PDF). [University of Toronto](https://en.wikipedia.org/wiki/University_of_Toronto), Department of Computer Science. p. 6. [Archived](https://web.archive.org/web/20190214212633/http://www.cs.toronto.edu/~toni/Courses/263-2015/lectures/lec04-balanced-augmentation.pdf) (PDF) from the original on 14 February 2019. Retrieved 19 May 2022.
2. **^** Myers, Andrew. ["CS 312 Lecture: AVL Trees"](https://www.cs.cornell.edu/courses/cs312/2008sp/lectures/lec_avl.html). [Cornell University](https://en.wikipedia.org/wiki/Cornell_University), Department of Computer Science. [Archived](https://web.archive.org/web/20210427195749/http://www.cs.cornell.edu/courses/cs312/2008sp/lectures/lec_avl.html) from the original on 27 April 2021. Retrieved 19 May 2022.
3. **^** Adelson-Velsky, Georgy; Landis, Evgenii (1962). "An algorithm for the organization of information". *[Proceedings of the USSR Academy of Sciences](https://en.wikipedia.org/wiki/Proceedings_of_the_USSR_Academy_of_Sciences)* (in Russian). **146**: 263–266. [English translation](https://zhjwpku.com/assets/pdf/AED2-10-avl-paper.pdf) by Myron J. Ricci in *Soviet Mathematics - Doklady*, 3:1259–1263, 1962.
4. ^   Culberson, J.; Munro, J. I. (1 January 1989). ["Explaining the Behaviour of Binary Search Trees Under Prolonged Updates: A Model and Simulations"](https://academic.oup.com/comjnl/article/32/1/68/341965?login=true). *[The Computer Journal](https://en.wikipedia.org/wiki/The_Computer_Journal)*. **32** (1): 68–69. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/comjnl/32.1.68](https://doi.org/10.1093%2Fcomjnl%2F32.1.68).
5. **^** Culberson, J.; Munro, J. I. (28 July 1986). ["Analysis of the standard deletion algorithms in exact fit domain binary search trees"](https://link.springer.com/article/10.1007%2FBF01840390). *[Algorithmica](https://en.wikipedia.org/wiki/Algorithmica)*. **5** (1–4). [Springer Publishing](https://en.wikipedia.org/wiki/Springer_Publishing), [University of Waterloo](https://en.wikipedia.org/wiki/University_of_Waterloo): 297. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF01840390](https://doi.org/10.1007%2FBF01840390). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [971813](https://api.semanticscholar.org/CorpusID:971813).
6. **^** P. F. Windley (1 January 1960). ["Trees, Forests and Rearranging"](https://academic.oup.com/comjnl/article/3/2/84/504799). *[The Computer Journal](https://en.wikipedia.org/wiki/The_Computer_Journal)*. **3** (2): 84. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/comjnl/3.2.84](https://doi.org/10.1093%2Fcomjnl%2F3.2.84).
7. ^   [Knuth, Donald](https://en.wikipedia.org/wiki/Donald_Knuth) (1998). "Section 6.2.3: Balanced Trees". [*The Art of Computer Programming*](https://ia801604.us.archive.org/17/items/B-001-001-250/B-001-001-250.pdf) (PDF). Vol. 3 (2 ed.). [Addison-Wesley](https://en.wikipedia.org/wiki/Addison-Wesley). pp. 458–481. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0201896855](https://en.wikipedia.org/wiki/Special:BookSources/978-0201896855). [Archived](https://ghostarchive.org/archive/20221009/https://ia801604.us.archive.org/17/items/B-001-001-250/B-001-001-250.pdf) (PDF) from the original on 2022-10-09.
8. **^** Paul E. Black, "red-black tree", in Dictionary of Algorithms and Data Structures [online], Paul E. Black, ed. 12 November 2019. (accessed May 19 2022) from: [https://www.nist.gov/dads/HTML/redblack.html](https://www.nist.gov/dads/HTML/redblack.html)
9. ^   Thareja, Reema (13 October 2018). "Hashing and Collision". [*Data Structures Using C*](https://global.oup.com/academic/product/data-structures-using-c-9780198099307) (2 ed.). [Oxford University Press](https://en.wikipedia.org/wiki/Oxford_University_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780198099307](https://en.wikipedia.org/wiki/Special:BookSources/9780198099307).
10. ^                [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ronald_L._Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2001). [*Introduction to Algorithms*](https://mitpress.mit.edu/books/introduction-algorithms-second-edition) (2nd ed.). [MIT Press](https://en.wikipedia.org/wiki/MIT_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-03293-7](https://en.wikipedia.org/wiki/Special:BookSources/0-262-03293-7).
11. **^** R. A. Frost; M. M. Peterson (1 February 1982). ["A Short Note on Binary Search Trees"](https://academic.oup.com/comjnl/article/25/1/158/527326). *[The Computer Journal](https://en.wikipedia.org/wiki/The_Computer_Journal)*. **25** (1). [Oxford University Press](https://en.wikipedia.org/wiki/Oxford_University_Press): 158. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/comjnl/25.1.158](https://doi.org/10.1093%2Fcomjnl%2F25.1.158).
12. **^** Junzhou Huang. ["Design and Analysis of Algorithms"](https://ranger.uta.edu/~huang/teaching/CSE5311/CSE5311_Lecture10.pdf) (PDF). [University of Texas at Arlington](https://en.wikipedia.org/wiki/University_of_Texas_at_Arlington). p. 12. [Archived](https://web.archive.org/web/20210413045057/http://ranger.uta.edu/~huang/teaching/CSE5311/CSE5311_Lecture10.pdf) (PDF) from the original on 13 April 2021. Retrieved 17 May 2021.
13. **^** Ray, Ray. ["Binary Search Tree"](https://cs.lmu.edu/~ray/notes/binarysearchtrees/). [Loyola Marymount University](https://en.wikipedia.org/wiki/Loyola_Marymount_University), Department of Computer Science. Retrieved 17 May 2022.
14. **^** Thornton, Alex (2021). ["ICS 46: Binary Search Trees"](https://www.ics.uci.edu/~thornton/ics46/Notes/BinarySearchTrees/). [University of California, Irvine](https://en.wikipedia.org/wiki/University_of_California,_Irvine). [Archived](https://web.archive.org/web/20210704141729/https://www.ics.uci.edu/~thornton/ics46/Notes/BinarySearchTrees/) from the original on 4 July 2021. Retrieved 21 October 2021.
15. ^      Brass, Peter (January 2011). [*Advanced Data Structure*](https://www.cambridge.org/core/books/advanced-data-structures/D56E2269D7CEE969A3B8105AD5B9254C). [Cambridge University Press](https://en.wikipedia.org/wiki/Cambridge_University_Press). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/CBO9780511800191](https://doi.org/10.1017%2FCBO9780511800191). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780511800191](https://en.wikipedia.org/wiki/Special:BookSources/9780511800191).
16. **^** Blum, Norbert; Mehlhorn, Kurt (1978). ["On the Average Number of Rebalancing Operations in Weight-Balanced Trees"](http://scidok.sulb.uni-saarland.de/volltexte/2011/4019/pdf/fb14_1978_06.pdf) (PDF). *Theoretical Computer Science*. **11** (3): 303–320. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0304-3975(80)90018-3](https://doi.org/10.1016%2F0304-3975%2880%2990018-3). [Archived](https://ghostarchive.org/archive/20221009/http://scidok.sulb.uni-saarland.de/volltexte/2011/4019/pdf/fb14_1978_06.pdf) (PDF) from the original on 2022-10-09.
17. **^** Lehman, Tobin J.; Carey, Michael J. (25–28 August 1986). [*A Study of Index Structures for Main Memory Database Management Systems*](https://archive.org/details/verylargedatabas0000inte). Twelfth International Conference on Very Large Databases (VLDB 1986). Kyoto. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-934613-18-4](https://en.wikipedia.org/wiki/Special:BookSources/0-934613-18-4).
18. **^** Aragon, Cecilia R.; Seidel, Raimund (1989), ["Randomized Search Trees"](http://faculty.washington.edu/aragon/pubs/rst89.pdf) (PDF), [*30th Annual Symposium on Foundations of Computer Science*](https://en.wikipedia.org/wiki/Symposium_on_Foundations_of_Computer_Science), Washington, D.C.: IEEE Computer Society Press, pp. 540–545, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/SFCS.1989.63531](https://doi.org/10.1109%2FSFCS.1989.63531), [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-8186-1982-1](https://en.wikipedia.org/wiki/Special:BookSources/0-8186-1982-1), [archived](https://ghostarchive.org/archive/20221009/http://faculty.washington.edu/aragon/pubs/rst89.pdf) (PDF) from the original on 2022-10-09
19. **^** [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ronald_L._Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2001). "Red–Black Trees". [*Introduction to Algorithms*](https://en.wikipedia.org/wiki/Introduction_to_Algorithms) (second ed.). MIT Press. pp. [273](https://archive.org/details/introductiontoal00corm_691/page/n735)–301. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-03293-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-03293-3).
20. **^** [Comer, Douglas](https://en.wikipedia.org/wiki/Douglas_Comer) (June 1979), "The Ubiquitous B-Tree", *Computing Surveys*, **11** (2): 123–137, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/356770.356776](https://doi.org/10.1145%2F356770.356776), [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0360-0300](https://search.worldcat.org/issn/0360-0300), [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [101673](https://api.semanticscholar.org/CorpusID:101673)
21. **^** Knuth, Donald M (1998). "6.2.4". *The Art of Computer Programming*. Vol. 3 (2 ed.). Addison Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780201896855](https://en.wikipedia.org/wiki/Special:BookSources/9780201896855). The 2–3 trees defined at the close of Section 6.2.3 are equivalent to B-Trees of order 3.
22. **^** [Sleator, Daniel D.](https://en.wikipedia.org/wiki/Daniel_Sleator); [Tarjan, Robert E.](https://en.wikipedia.org/wiki/Robert_Tarjan) (1985). ["Self-Adjusting Binary Search Trees"](https://www.cs.cmu.edu/~sleator/papers/self-adjusting.pdf) (PDF). *[Journal of the ACM](https://en.wikipedia.org/wiki/Journal_of_the_ACM)*. **32** (3): 652–686. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3828.3835](https://doi.org/10.1145%2F3828.3835). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1165848](https://api.semanticscholar.org/CorpusID:1165848).
23. **^** Narayanan, Arvind (2019). ["COS226: Binary search trees"](https://www.cs.princeton.edu/courses/archive/spring19/cos226/lectures/study/32BinarySearchTrees.html). [Princeton University School of Engineering and Applied Science](https://en.wikipedia.org/wiki/Princeton_University_School_of_Engineering_and_Applied_Science). [Archived](https://web.archive.org/web/20210322040843/https://www.cs.princeton.edu/courses/archive/spring19/cos226/lectures/study/32BinarySearchTrees.html) from the original on 22 March 2021. Retrieved 21 October 2021 – via cs.princeton.edu.
24. **^** Xiong, Li. ["A Connection Between Binary Search Trees and Quicksort"](http://mathcenter.oxford.emory.edu/site/cs171/bstQuicksortConnection/). [Oxford College of Emory University](https://en.wikipedia.org/wiki/Oxford_College_of_Emory_University), The Department of Mathematics and Computer Science. [Archived](https://web.archive.org/web/20210226103159/http://mathcenter.oxford.emory.edu/site/cs171/bstQuicksortConnection/) from the original on 26 February 2021. Retrieved 4 June 2022.
25. **^** Myers, Andrew. ["CS 2112 Lecture and Recitation Notes: Priority Queues and Heaps"](https://www.cs.cornell.edu/courses/cs4120/2016sp/lectures/lec_heaps/). [Cornell University](https://en.wikipedia.org/wiki/Cornell_University), [Department of Computer Science](https://en.wikipedia.org/wiki/Cornell_University_College_of_Engineering). [Archived](https://web.archive.org/web/20211021202727/https://www.cs.cornell.edu/courses/cs4120/2016sp/lectures/lec_heaps/) from the original on 21 October 2021. Retrieved 21 October 2021.

## Further reading

* This article incorporates [public domain material](https://en.wikipedia.org/wiki/Copyright_status_of_works_by_the_federal_government_of_the_United_States) from Paul E. Black. ["Binary Search Tree"](https://xlinux.nist.gov/dads/HTML/binarySearchTree.html). *[Dictionary of Algorithms and Data Structures](https://en.wikipedia.org/w/index.php?title=Dictionary_of_Algorithms_and_Data_Structures&action=edit&redlink=1)*. [NIST](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology).
* [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ronald_L._Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2001). "12: Binary search trees, 15.5: Optimal binary search trees". [*Introduction to Algorithms*](https://mitpress.mit.edu/books/introduction-algorithms-second-edition) (2nd ed.). [MIT Press](https://en.wikipedia.org/wiki/MIT_Press). pp. 253–272, 356–363. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-03293-7](https://en.wikipedia.org/wiki/Special:BookSources/0-262-03293-7).
* Jarc, Duane J. (3 December 2005). ["Binary Tree Traversals"](https://web.archive.org/web/20140227082917/http://nova.umuc.edu/~jarc/idsv/lesson1.html). *Interactive Data Structure Visualizations*. [University of Maryland](https://en.wikipedia.org/wiki/University_of_Maryland). Archived from [the original](http://nova.umuc.edu/~jarc/idsv/lesson1.html) on 27 February 2014. Retrieved 30 April 2006.
* [Knuth, Donald](https://en.wikipedia.org/wiki/Donald_Knuth) (1997). "6.2.2: Binary Tree Searching". *[The Art of Computer Programming](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming)*. Vol. 3: "Sorting and Searching" (3rd ed.). Addison-Wesley. pp. 426–458. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-89685-0](https://en.wikipedia.org/wiki/Special:BookSources/0-201-89685-0).
* Long, Sean. ["Binary Search Tree"](http://employees.oneonta.edu/zhangs/PowerPointPlatform/resources/samples/binarysearchtree.ppt) ([PPT](https://en.wikipedia.org/wiki/Microsoft_PowerPoint)). *Data Structures and Algorithms Visualization-A PowerPoint Slides Based Approach*. [SUNY Oneonta](https://en.wikipedia.org/wiki/SUNY_Oneonta).
* Parlante, Nick (2001). ["Binary Trees"](http://cslibrary.stanford.edu/110/BinaryTrees.html). *CS Education Library*. [Stanford University](https://en.wikipedia.org/wiki/Stanford_University). [Archived](https://ghostarchive.org/archive/20220130/http://cslibrary.stanford.edu/110/BinaryTrees.html) from the original on 2022-01-30.

## External links

* Ben Pfaff: [*An Introduction to Binary Search Trees and Balanced Trees*.](https://ftp.gnu.org/gnu/avl/avl-2.0.3.pdf.gz) (PDF; 1675 kB) 2004.
* [Binary Search Tree Visualization](https://www.cs.usfca.edu/~galles/visualization/BST.html)
 
NewPP limit report
Parsed by mw‐web.codfw.main‐859b768cdd‐846c2
Cached time: 20260420215211
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.682 seconds
Real time usage: 0.863 seconds
Preprocessor visited node count: 9790/1000000
Revision size: 31170/2097152 bytes
Post‐expand include size: 122545/2097152 bytes
Template argument size: 4474/2097152 bytes
Highest expansion depth: 16/100
Expensive parser function count: 7/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 136366/5000000 bytes
Lua time usage: 0.345/10.000 seconds
Lua memory usage: 7484634/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  614.513      1 -total
 30.18%  185.448      1 Template:Reflist
 15.79%   97.017     11 Template:Cite_web
 14.40%   88.460     22 Template:R/superscript
 10.18%   62.543     13 Template:Rp
  9.99%   61.391      1 Template:CS-Trees
  9.96%   61.201      2 Template:Navbox
  8.20%   50.402      9 Template:R
  7.43%   45.640      9 Template:R/ref
  7.41%   45.514     66 Template:R/where
 Render ID 2f1fbad7-3d03-11f1-8253-3fceb1cf3194  Saved in parser cache with key enwiki:pcache:4320:|#|:idhash:canonical and timestamp 20260420215211 and revision id 1335450867. Rendering was triggered because: page_view