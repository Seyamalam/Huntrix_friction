# Tree (abstract data type) - Wikipedia

Source: https://en.wikipedia.org/wiki/Tree_(data_structure)

---

Linked node hierarchical data structure

Not to be confused with

[Trie](https://en.wikipedia.org/wiki/Trie)

, a specific type of tree data structure.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/250px-Tree_%28computer_science%29.svg.png)](https://en.wikipedia.org/wiki/File:Tree_(computer_science).svg)

This unsorted tree has non-unique values (e.g., the value 2 existing in different nodes, not in a single node only) and is non-binary (while there are only up to two children nodes per parent node in a binary tree). The root node at the top (with the value 2 here), has no parent as it is the highest in the tree hierarchy.

In [computer science](https://en.wikipedia.org/wiki/Computer_science), a **tree** is a widely used [abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type) that represents a hierarchical [tree structure](https://en.wikipedia.org/wiki/Tree_structure) with a set of connected [nodes](https://en.wikipedia.org/wiki/Node_(computer_science)). Each node in the tree can be connected to many children (depending on the type of tree), but must be connected to exactly one parent, except for the *root* node, which has no parent (i.e., the root node as the top-most node in the tree hierarchy). These constraints mean there are no cycles or "loops" (no node can be its own ancestor), and also that each child can be treated like the root node of its own subtree, making [recursion](https://en.wikipedia.org/wiki/Recursion) a useful technique for [tree traversal](https://en.wikipedia.org/wiki/Tree_traversal). In contrast to [linear data structures](https://en.wikipedia.org/wiki/Linear_data_structure), many trees cannot be represented by relationships between neighboring nodes (parent and children nodes of a node under consideration, if they exist) in a single straight line (called edge or link between two adjacent nodes).

[Binary trees](https://en.wikipedia.org/wiki/Binary_tree) are a commonly used type, which constrain the number of children for each parent to at most two. When the order of the children is specified, this data structure corresponds to an [ordered tree](https://en.wikipedia.org/wiki/Ordered_tree) in [graph theory](https://en.wikipedia.org/wiki/Graph_theory). A value or pointer to other data may be associated with every node in the tree, or sometimes only with the *leaf nodes*, which have no children nodes.

The [abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type) (ADT) can be represented in a number of ways, including a list of parents with pointers to children, a list of children with pointers to parents, or a list of nodes and a separate list of parent-child relations (a specific type of [adjacency list](https://en.wikipedia.org/wiki/Adjacency_list)). Representations might also be more complicated, for example using [indexes](https://en.wikipedia.org/wiki/Database_index) or ancestor lists for performance.

Trees as used in computing are similar to but can be different from mathematical constructs of [trees in graph theory](https://en.wikipedia.org/wiki/Tree_(graph_theory)), [trees in set theory](https://en.wikipedia.org/wiki/Tree_(set_theory)), and [trees in descriptive set theory](https://en.wikipedia.org/wiki/Tree_(descriptive_set_theory)).

A [node](https://en.wikipedia.org/wiki/Node_(computer_science)) is a structure which may contain data and connections to other nodes, sometimes called **edges** or **links**. Each node in a tree has zero or more **child nodes**, which are below it in the tree (by convention, trees are drawn with *descendants* going downwards). A node that has a child is called the child's **parent node** (or [superior](https://en.wikipedia.org/wiki/Superior_(hierarchy))). All nodes have exactly one parent, except the topmost **root node**, which has none. A node might have many **ancestor nodes**, such as the parent's parent. Child nodes with the same parent are **sibling nodes**. Typically siblings have an order, with the first one conventionally drawn on the left. Some definitions allow a tree to have no nodes at all, in which case it is called *empty*.

An **internal node** (also known as an **inner node**, **inode** for short, or **branch node**) is any node of a tree that has child nodes. Similarly, an **external node** (also known as an **outer node**, **leaf node**, or **terminal node**) is any node that does not have child nodes.

The **height** of a node is the length of the longest downward path to a leaf from that node. The height of the root is the height of the tree. The **depth** of a node is the length of the path to its root (i.e., its *root path*). Thus the root node has depth zero, leaf nodes have height zero, and a tree with only a single node (hence both a root and leaf) has depth and height zero. Conventionally, an empty tree (tree with no nodes, if such are allowed) has height −1.

Each non-root node can be treated as the root node of its own **subtree**, which includes that node and all its descendants.

Other terms used with trees:

Neighbor
:   Parent or child.

Ancestor
:   A node reachable by repeated proceeding from child to parent.

Descendant
:   A node reachable by repeated proceeding from parent to child. Also known as *subchild*.

Degree
:   For a given node, its number of children. A leaf, by definition, has degree zero.

Degree of tree
:   The degree of a tree is the maximum degree of a node in the tree.

Distance
:   The number of edges along the shortest path between two nodes.

Level
:   The level of a node is the number of edges along the
    unique path between it and the root node. This is the same as depth.

Width
:   The number of nodes in a level.

Breadth
:   The number of leaves.

Complete tree
:   A tree with every level filled, except the last.

Forest
:   A set of one or more disjoint trees.

Ordered tree
:   A rooted tree in which an ordering is specified for the children of each vertex.

Size of a tree
:   Number of nodes in the tree.

* Enumerating all the items
* Enumerating a section of a tree
* Searching for an item
* Adding a new item at a certain position on the tree
* Deleting an item
* [Pruning](https://en.wikipedia.org/wiki/Pruning_(algorithm)): Removing a whole section of a tree
* [Grafting](/w/index.php?title=Grafting_(algorithm)&action=edit&redlink=1): Adding a whole section to a tree
* Finding the root for any node
* Finding the [lowest common ancestor](https://en.wikipedia.org/wiki/Lowest_common_ancestor) of two nodes

### Traversal and search methods

[[edit](/w/index.php?title=Tree_(abstract_data_type)&action=edit&section=3)]

Stepping through the items of a tree, by means of the connections between parents and children, is called **walking the tree**, and the action is a *walk* of the tree. Often, an operation might be performed when a pointer arrives at a particular node. A walk in which each parent node is traversed before its children is called a **pre-order** walk; a walk in which the children are traversed before their respective parents are traversed is called a **post-order** walk; a walk in which a node's left subtree, then the node itself, and finally its right subtree are traversed is called an **in-order** traversal. (This last scenario, referring to exactly two subtrees, a left subtree and a right subtree, assumes specifically a [binary tree](https://en.wikipedia.org/wiki/Binary_tree).) A **level-order** walk effectively performs a [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) over the entirety of a tree; nodes are traversed level by level, where the root node is visited first, followed by its direct child nodes and their siblings, followed by its grandchild nodes and their siblings, etc., until all nodes in the tree have been traversed.

There are many different ways to represent trees. In working memory, nodes are typically [dynamically allocated](https://en.wikipedia.org/wiki/Dynamic_memory_allocation) records with pointers to their children, their parents, or both, as well as any associated data. If of a fixed size, the nodes might be stored in a list. Nodes and relationships between nodes might be stored in a separate special type of [adjacency list](https://en.wikipedia.org/wiki/Adjacency_list). In [relational databases](https://en.wikipedia.org/wiki/Relational_database), nodes are typically represented as table rows, with indexed row IDs facilitating pointers between parents and children.

Nodes can also be stored as items in an [array](https://en.wikipedia.org/wiki/Array_data_structure), with relationships between them determined by their positions in the array (as in a [binary heap](https://en.wikipedia.org/wiki/Binary_heap)).

A [binary tree](https://en.wikipedia.org/wiki/Binary_tree) can be implemented as a list of lists: the head of a list (the value of the first term) is the left child (subtree), while the tail (the list of second and subsequent terms) is the right child (subtree). This can be modified to allow values as well, as in Lisp [S-expressions](https://en.wikipedia.org/wiki/S-expression), where the head (value of first term) is the value of the node, the head of the tail (value of second term) is the left child, and the tail of the tail (list of third and subsequent terms) is the right child.

Ordered trees can be naturally encoded by finite sequences, for example with natural numbers.

## Examples of trees and non-trees

[[edit](/w/index.php?title=Tree_(abstract_data_type)&action=edit&section=5)]

Not a tree

: two non-

[connected](https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Definitions_of_components,_cuts_and_connectivity)

parts, A→B and C→D→E. There is more than one root.

Not a tree: undirected cycle 1-2-4-3. 4 has more than one parent (inbound edge).

Not a tree: cycle B→C→E→D→B. B has more than one parent (inbound edge).

Not a tree: cycle A→A. A is the root but it also has a parent.

Each linear list is trivially a tree.

As an [abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type), the abstract tree type T with values of some type E is defined, using the abstract forest type F (list of trees), by the functions:

:   value: T → E
:   children: T → F
:   nil: () → F
:   node: E × F → T

with the axioms:

:   value(node(e, f)) = e
:   children(node(e, f)) = f

In terms of [type theory](https://en.wikipedia.org/wiki/Type_theory), a tree is an [inductive type](https://en.wikipedia.org/wiki/Recursive_data_type) defined by the constructors nil (empty forest) and node (tree with root node with given value and children).

## Mathematical terminology

[[edit](/w/index.php?title=Tree_(abstract_data_type)&action=edit&section=7)]

Viewed as a whole, a tree data structure is an [ordered tree](https://en.wikipedia.org/wiki/Ordered_tree), generally with values attached to each node. Concretely, it is (if required to be non-empty):

* A [rooted tree](https://en.wikipedia.org/wiki/Rooted_tree) with the "away from root" direction (a more narrow term is an "[arborescence](https://en.wikipedia.org/wiki/Arborescence_(graph_theory))"), meaning:
  + A [directed graph](https://en.wikipedia.org/wiki/Directed_graph),
  + whose underlying [undirected graph](https://en.wikipedia.org/wiki/Undirected_graph) is a [tree](https://en.wikipedia.org/wiki/Tree_(graph_theory)) (any two vertices are connected by exactly one simple path),
  + with a distinguished root (one vertex is designated as the root),
  + which determines the direction on the edges (arrows point away from the root; given an edge, the node that the edge points from is called the *parent* and the node that the edge points to is called the *child*), together with:
* an ordering on the child nodes of a given node, and
* a value (of some data type) at each node.

Often trees have a fixed (more properly, bounded) [branching factor](https://en.wikipedia.org/wiki/Branching_factor) ([outdegree](https://en.wikipedia.org/wiki/Outdegree)), particularly always having two child nodes (possibly empty, hence *at most* two *non-empty* child nodes), hence a "binary tree".

Allowing empty trees makes some definitions simpler, some more complicated: a rooted tree must be non-empty, hence if empty trees are allowed the above definition instead becomes "an empty tree or a rooted tree such that ...". On the other hand, empty trees simplify defining fixed branching factor: with empty trees allowed, a binary tree is a tree such that every node has exactly two children, each of which is a tree (possibly empty).

Trees are commonly used to represent or manipulate [hierarchical](https://en.wikipedia.org/wiki/Hierarchical) data in applications such as:

Trees can be used to represent and manipulate various mathematical structures, such as:

Tree structures are often used for mapping the relationships between things, such as:

[JSON](https://en.wikipedia.org/wiki/JSON) and [YAML](https://en.wikipedia.org/wiki/YAML) documents can be thought of as trees, but are typically represented by nested [lists](https://en.wikipedia.org/wiki/List_(abstract_data_type)) and [dictionaries](https://en.wikipedia.org/wiki/Associative_array).

1. **[^](#cite_ref-3)** This is different from the formal definition of subtree used in graph theory, which is a subgraph that forms a tree – it need not include all descendants. For example, the root node by itself is a subtree in the graph theory sense, but not in the data structure sense (unless there are no descendants).

* [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth). *[The Art of Computer Programming](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming): Fundamental Algorithms*, Third Edition. Addison-Wesley, 1997. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-89683-4](https://en.wikipedia.org/wiki/Special:BookSources/0-201-89683-4) . Section 2.3: Trees, pp. 308–423.
* [Thomas H. Cormen](https://en.wikipedia.org/wiki/Thomas_H._Cormen), [Charles E. Leiserson](https://en.wikipedia.org/wiki/Charles_E._Leiserson), [Ronald L. Rivest](https://en.wikipedia.org/wiki/Ronald_L._Rivest), and [Clifford Stein](https://en.wikipedia.org/wiki/Clifford_Stein). *[Introduction to Algorithms](https://en.wikipedia.org/wiki/Introduction_to_Algorithms)*, Second Edition. MIT Press and McGraw-Hill, 2001. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-03293-7](https://en.wikipedia.org/wiki/Special:BookSources/0-262-03293-7). Section 10.4: Representing rooted trees, pp. 214–217. Chapters 12–14 (Binary Search Trees, Red–Black Trees, Augmenting Data Structures), pp. 253–320.