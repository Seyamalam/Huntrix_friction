# Data structure

* Source: https://en.wikipedia.org/wiki/Data_structure

---

A data structure known as a 

[hash table](https://en.wikipedia.org/wiki/Hash_table)

.

In [computer science](https://en.wikipedia.org/wiki/Computer_science), a **data structure** is a [data](https://en.wikipedia.org/wiki/Data) organization and storage format that is usually chosen for [efficient](https://en.wikipedia.org/wiki/Efficiency) [access](https://en.wikipedia.org/wiki/Data_access) to data. More precisely, a data structure is a collection of data values, the relationships among them, and the [functions](https://en.wikipedia.org/wiki/Function_(computer_programming)) or [operations](https://en.wikipedia.org/wiki/Operator_(computer_programming)) that can be applied to the data, i.e., it is an [algebraic structure](https://en.wikipedia.org/wiki/Algebraic_structure) about [data](https://en.wikipedia.org/wiki/Data).

## Usage

Data structures serve as the basis for [abstract data types](https://en.wikipedia.org/wiki/Abstract_data_type) (ADT). The ADT defines the logical form of the data type. The data structure implements the physical form of the [data type](https://en.wikipedia.org/wiki/Data_type).

Various types of data structures are suited to different kinds of applications, and some are highly defined to specific tasks. For example, [relational databases](https://en.wikipedia.org/wiki/Relational_database) commonly use [B-tree](https://en.wikipedia.org/wiki/B-tree) indice for data retrieval, while [compiler](https://en.wikipedia.org/wiki/Compiler) [implementations](https://en.wikipedia.org/wiki/Implementation) usually use [hash tables](https://en.wikipedia.org/wiki/Hash_table) to look up [identifiers](https://en.wikipedia.org/wiki/Identifier_(computer_languages)).

Data structures provide a means to manage large amounts of data efficiently for uses such as large [databases](https://en.wikipedia.org/wiki/Database) and internet indexing services. Usually, efficient data structures are key to designing efficient [algorithms](https://en.wikipedia.org/wiki/Algorithm). Some formal design methods and [programming languages](https://en.wikipedia.org/wiki/Programming_language) emphasize data structures, rather than algorithms, as the key organizing factor in software design. Data structures can be used to organize the storage and retrieval of data stored in both [main memory](https://en.wikipedia.org/wiki/Main_memory) and [secondary memory](https://en.wikipedia.org/wiki/Computer_data_storage).

## Implementation

Data structures can be implemented using a variety of programming languages and techniques, but they all share the common goal of efficiently organizing and storing data. Data structures are generally based on the ability of a [computer](https://en.wikipedia.org/wiki/Computer) to fetch and store data at any place in its memory, specified by a [pointer](https://en.wikipedia.org/wiki/Pointer_(computer_programming))—a [bit](https://en.wikipedia.org/wiki/Bit) [string](https://en.wikipedia.org/wiki/String_(computer_science)), representing a [memory address](https://en.wikipedia.org/wiki/Memory_address), that can be itself stored in memory and manipulated by the program. Thus, the [array](https://en.wikipedia.org/wiki/Array_data_structure) and [record](https://en.wikipedia.org/wiki/Record_(computer_science)) data structures are based on computing the addresses of data items with [arithmetic operations](https://en.wikipedia.org/wiki/Arithmetic_operations), while the [linked data structures](https://en.wikipedia.org/wiki/Linked_data_structure) are based on storing addresses of data items within the structure itself. This approach to data structuring has profound implications for the efficiency and scalability of algorithms. For instance, the contiguous memory allocation in arrays facilitates rapid access and modification operations, leading to optimized performance in sequential data processing scenarios.

The implementation of a data structure usually requires writing a set of [procedures](https://en.wikipedia.org/wiki/Subroutine) that create and manipulate instances of that structure. The efficiency of a data structure cannot be analyzed separately from those operations. This observation motivates the theoretical concept of an [abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type), a data structure that is defined indirectly by the operations that may be performed on it, and the mathematical properties of those operations (including their space and time cost).

## Examples

The standard 

[type](https://en.wikipedia.org/wiki/Data_type)

 hierarchy of the programming language 

[Python 3](https://en.wikipedia.org/wiki/Python_(programming_language))

.

There are numerous types of data structures, generally built upon simpler [primitive data types](https://en.wikipedia.org/wiki/Primitive_data_type). Well known examples are:

* An [array](https://en.wikipedia.org/wiki/Array_(data_structure)) is a number of elements in a specific order, typically all of the same type (depending on the language, individual elements may either all be forced to be the same type, or may be of almost any type). Elements are accessed using an integer index to specify which element is required. Typical implementations allocate contiguous memory words for the elements of arrays (but this is not always a necessity). Arrays may be fixed-length or resizable.
* A [linked list](https://en.wikipedia.org/wiki/Linked_list) (also just called *list*) is a linear collection of data elements of any type, called nodes, where each node has itself a value, and points to the next node in the linked list. The principal advantage of a linked list over an array is that values can always be efficiently inserted and removed without relocating the rest of the list. Certain other operations, such as [random access](https://en.wikipedia.org/wiki/Random_access) to a certain element, are however slower on lists than on arrays.
* A [record](https://en.wikipedia.org/wiki/Record_(computer_science)) (also called *tuple* or *struct*) is an [aggregate data](https://en.wikipedia.org/wiki/Aggregate_data) structure. A record is a value that contains other values, typically in fixed number and sequence and typically indexed by names. The elements of records are usually called *fields* or *members*. In the context of [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming), records are known as [plain old data structures](https://en.wikipedia.org/wiki/Plain_old_data_structure) to distinguish them from objects.
* [Hash tables](https://en.wikipedia.org/wiki/Hash_table), also known as hash maps, are data structures that provide fast retrieval of values based on keys. They use a hashing function to map keys to indexes in an array, allowing for constant-time access in the average case. Hash tables are commonly used in dictionaries, caches, and database indexing. However, hash collisions can occur, which can impact their performance. Techniques like chaining and open addressing are employed to handle collisions.
* [Graphs](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)) are collections of nodes connected by edges, representing relationships between entities. Graphs can be used to model social networks, computer networks, and transportation networks, among other things. They consist of vertices (nodes) and edges (connections between nodes). Graphs can be directed or undirected, and they can have cycles or be acyclic. Graph traversal algorithms include breadth-first search and depth-first search.
* [Stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) and [queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) are abstract data types that can be implemented using arrays or linked lists. A stack has two primary operations: push (adds an element to the top of the stack) and pop (removes the topmost element from the stack), that follow the Last In, First Out (LIFO) principle. Queues have two main operations: enqueue (adds an element to the rear of the queue) and dequeue (removes an element from the front of the queue) that follow the First In, First Out (FIFO) principle.
* [Trees](https://en.wikipedia.org/wiki/Tree_(data_structure)) represent a hierarchical organization of elements. A tree consists of nodes connected by edges, with one node being the root and all other nodes forming subtrees. Trees are widely used in various algorithms and data storage scenarios. [Binary trees](https://en.wikipedia.org/wiki/Binary_tree) (particularly [heaps](https://en.wikipedia.org/wiki/Heap_(data_structure))), [AVL trees](https://en.wikipedia.org/wiki/AVL_tree), and [B-trees](https://en.wikipedia.org/wiki/B-tree) are some popular types of trees. They enable efficient and optimal searching, sorting, and hierarchical representation of data.
* A [trie](https://en.wikipedia.org/wiki/Trie), or prefix tree, is a special type of tree used to efficiently retrieve strings. In a trie, each node represents a character of a string, and the edges between nodes represent the characters that connect them. This structure is especially useful for tasks like autocomplete, spell-checking, and creating dictionaries. Tries allow for quick searches and operations based on string prefixes.

## Language support

Most [assembly languages](https://en.wikipedia.org/wiki/Assembly_language) and some [low-level languages](https://en.wikipedia.org/wiki/Low-level_programming_language), such as [BCPL](https://en.wikipedia.org/wiki/BCPL) (Basic Combined Programming Language), lack built-in support for data structures. On the other hand, many [high-level programming languages](https://en.wikipedia.org/wiki/High-level_programming_language) and some higher-level assembly languages, such as [MASM](https://en.wikipedia.org/wiki/MASM), have special syntax or other built-in support for certain data structures, such as records and arrays. For example, the [C](https://en.wikipedia.org/wiki/C_(programming_language)) (a direct descendant of BCPL) and [Pascal](https://en.wikipedia.org/wiki/Pascal_(programming_language)) languages support [structs](https://en.wikipedia.org/wiki/Record_(computer_science)) and records, respectively, in addition to vectors (one-dimensional [arrays](https://en.wikipedia.org/wiki/Array_data_type)) and multi-dimensional arrays.

Most programming languages feature some sort of [library](https://en.wikipedia.org/wiki/Library_(computing)) mechanism that allows data structure implementations to be reused by different programs. Modern languages usually come with standard libraries that implement the most common data structures. Examples are the [C++](https://en.wikipedia.org/wiki/C%2B%2B) [Standard Template Library](https://en.wikipedia.org/wiki/Standard_Template_Library), the [Java Collections Framework](https://en.wikipedia.org/wiki/Java_Collections_Framework), and the [Microsoft](https://en.wikipedia.org/wiki/Microsoft) [.NET Framework](https://en.wikipedia.org/wiki/.NET_Framework).

Modern languages also generally support [modular programming](https://en.wikipedia.org/wiki/Modular_programming), the separation between the [interface](https://en.wikipedia.org/wiki/Interface_(computing)) of a library module and its implementation. Some provide [opaque data types](https://en.wikipedia.org/wiki/Opaque_data_type) that allow clients to hide implementation details. [Object-oriented programming languages](https://en.wikipedia.org/wiki/Object-oriented_programming_language), such as [C++](https://en.wikipedia.org/wiki/C%2B%2B), [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), and [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk), typically use [classes](https://en.wikipedia.org/wiki/Class_(programming)) for this purpose.

Many known data structures have [concurrent](https://en.wikipedia.org/wiki/Concurrent_data_structure) versions which allow multiple computing threads to access a single concrete instance of a data structure simultaneously.

## See also

* [Abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type)
* [Concurrent data structure](https://en.wikipedia.org/wiki/Concurrent_data_structure)
* [Data model](https://en.wikipedia.org/wiki/Data_model)
* [Dynamization](https://en.wikipedia.org/wiki/Dynamization)
* [Linked data structure](https://en.wikipedia.org/wiki/Linked_data_structure)
* [List of data structures](https://en.wikipedia.org/wiki/List_of_data_structures)
* [Persistent data structure](https://en.wikipedia.org/wiki/Persistent_data_structure)
* [Plain old data structure](https://en.wikipedia.org/wiki/Plain_old_data_structure)
* [Queap](https://en.wikipedia.org/wiki/Queap)
* [Succinct data structure](https://en.wikipedia.org/wiki/Succinct_data_structure)
* [Tree (data structure)](https://en.wikipedia.org/wiki/Tree_(data_structure))

## References

1. **^** Cormen, Thomas H.; Leiserson, Charles E.; Rivest, Ronald L.; Stein, Clifford (2009). [*Introduction to Algorithms, Third Edition*](https://dl.acm.org/citation.cfm?id=1614191) (3rd ed.). The MIT Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0262033848](https://en.wikipedia.org/wiki/Special:BookSources/978-0262033848).
2. **^** Black, Paul E. (15 December 2004). ["data structure"](https://xlinux.nist.gov/dads/HTML/datastructur.html). In Pieterse, Vreda; Black, Paul E. (eds.). *Dictionary of Algorithms and Data Structures [online]*. [National Institute of Standards and Technology](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology). Retrieved 2018-11-06.
3. **^** ["Data structure"](https://www.britannica.com/technology/data-structure). *Encyclopaedia Britannica*. 17 April 2017. Retrieved 2018-11-06.
4. **^** Wegner, Peter; Reilly, Edwin D. (2003-08-29). [*Encyclopedia of Computer Science*](http://dl.acm.org/citation.cfm?id=1074100.1074312). Chichester, UK: John Wiley and Sons. pp. 507–512. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0470864128](https://en.wikipedia.org/wiki/Special:BookSources/978-0470864128).
5. **^** ["Abstract Data Types"](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/ADT.html). *Virginia Tech - CS3 Data Structures & Algorithms*. [Archived](https://web.archive.org/web/20230210114105/https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/ADT.html) from the original on 2023-02-10. Retrieved 2023-02-15.
6. **^** Gavin Powell (2006). ["Chapter 8: Building Fast-Performing Database Models"](https://web.archive.org/web/20070818140343/http://searchsqlserver.techtarget.com/generic/0,295582,sid87_gci1184450,00.html). *Beginning Database Design*. [Wrox Publishing](https://en.wikipedia.org/wiki/Wrox_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-7645-7490-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7645-7490-0). Archived from the original on 2007-08-18.
7. **^** ["1.5 Applications of a Hash Table"](https://web.archive.org/web/20210427183057/https://www.cs.uregina.ca/Links/class-info/210/Hash/). *University of Regina - CS210 Lab: Hash Table*. Archived from [the original](http://www.cs.uregina.ca/Links/class-info/210/Hash/) on 2021-04-27. Retrieved 2018-06-14.
8. **^** ["When data is too big to fit into the main memory"](https://web.archive.org/web/20180410032656/http://homes.sice.indiana.edu/yye/lab/teaching/spring2014-C343/datatoobig.php). *Indiana University Bloomington - Data Structures (C343/A594)*. 2014. Archived from [the original](http://homes.sice.indiana.edu/yye/lab/teaching/spring2014-C343/datatoobig.php) on 2018-04-10.
9. **^** Vaishnavi, Gunjal; Shraddha, Gavane; Yogeshwari, Joshi (2021-06-21). ["Survey Paper on Fine-Grained Facial Expression Recognition using Machine Learning"](http://www.ijcaonline.org/archives/volume183/number11/vaishnavi-2021-ijca-921427.pdf) (PDF). *International Journal of Computer Applications*. **183** (11): 47–49. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.5120/ijca2021921427](https://doi.org/10.5120%2Fijca2021921427).
10. **^** Nievergelt, Jürg; Widmayer, Peter (2000-01-01), Sack, J. -R.; Urrutia, J. (eds.), ["Chapter 17 - Spatial Data Structures: Concepts and Design Choices"](https://www.sciencedirect.com/science/article/pii/B9780444825377500188), *Handbook of Computational Geometry*, Amsterdam: North-Holland, pp. 725–764, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-444-82537-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-444-82537-7), retrieved 2023-11-12`{{[citation](https://en.wikipedia.org/wiki/Template:Citation)}}`:  CS1 maint: work parameter with ISBN ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_work_parameter_with_ISBN))
11. **^** Dubey, R. C. (2014). *Advanced biotechnology : For B Sc and M Sc students of biotechnology and other biological sciences*. New Delhi: S Chand. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-81-219-4290-4](https://en.wikipedia.org/wiki/Special:BookSources/978-81-219-4290-4). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [883695533](https://search.worldcat.org/oclc/883695533).
12. **^** Seymour, Lipschutz (2014). *Data structures* (Revised first ed.). New Delhi, India: McGraw Hill Education. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9781259029967](https://en.wikipedia.org/wiki/Special:BookSources/9781259029967). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [927793728](https://search.worldcat.org/oclc/927793728).
13. **^** Walter E. Brown (September 29, 1999). ["C++ Language Note: POD Types"](https://web.archive.org/web/20161203130543/http://www.fnal.gov/docs/working-groups/fpcltf/Pkg/ISOcxx/doc/POD.html). [Fermi National Accelerator Laboratory](https://en.wikipedia.org/wiki/Fermi_National_Accelerator_Laboratory). Archived from [the original](http://www.fnal.gov/docs/working-groups/fpcltf/Pkg/ISOcxx/doc/POD.html) on 2016-12-03. Retrieved 6 December 2016.
14. **^** ["The GNU C Manual"](https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html). Free Software Foundation. Retrieved 2014-10-15.
15. **^** Van Canneyt, Michaël (September 2017). ["Free Pascal: Reference Guide"](http://www.freepascal.org/docs-html/ref/ref.html). Free Pascal. [Archived](https://web.archive.org/web/20260122042140/https://www.freepascal.org/docs-html/ref/ref.html) from the original on 2026-01-22.
16. **^** Mark Moir and Nir Shavit. ["Concurrent Data Structures"](https://web.archive.org/web/20110401070433/http://www.cs.tau.ac.il/~shanir/concurrent-data-structures.pdf) (PDF). *cs.tau.ac.il*. Archived from [the original](https://www.cs.tau.ac.il/~shanir/concurrent-data-structures.pdf) (PDF) on 2011-04-01.

## Bibliography

* Peter Brass, *Advanced Data Structures*, [Cambridge University Press](https://en.wikipedia.org/wiki/Cambridge_University_Press), 2008, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0521880374](https://en.wikipedia.org/wiki/Special:BookSources/978-0521880374)
* [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth), *[The Art of Computer Programming](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming)*, vol. 1. [Addison-Wesley](https://en.wikipedia.org/wiki/Addison-Wesley), 3rd edition, 1997, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0201896831](https://en.wikipedia.org/wiki/Special:BookSources/978-0201896831)
* Dinesh Mehta and [Sartaj Sahni](https://en.wikipedia.org/wiki/Sartaj_Sahni), *Handbook of Data Structures and Applications*, [Chapman and Hall](https://en.wikipedia.org/wiki/Chapman_and_Hall)/[CRC Press](https://en.wikipedia.org/wiki/CRC_Press), 2004, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1584884355](https://en.wikipedia.org/wiki/Special:BookSources/1584884355)
* [Niklaus Wirth](https://en.wikipedia.org/wiki/Niklaus_Wirth), *Algorithms and Data Structures*, [Prentice Hall](https://en.wikipedia.org/wiki/Prentice_Hall), 1985, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0130220059](https://en.wikipedia.org/wiki/Special:BookSources/978-0130220059)

## Further reading

* [Open Data Structures by Pat Morin](https://opendatastructures.org)
* [G. H. Gonnet](https://en.wikipedia.org/wiki/Gaston_Gonnet) and [R. Baeza-Yates](https://en.wikipedia.org/wiki/Ricardo_Baeza-Yates), *[Handbook of Algorithms and Data Structures - in Pascal and C](https://users.dcc.uchile.cl/~rbaeza/handbook/hbook.html)*, second edition, Addison-Wesley, 1991, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-41607-7](https://en.wikipedia.org/wiki/Special:BookSources/0-201-41607-7)
* [Ellis Horowitz](https://en.wikipedia.org/wiki/Ellis_Horowitz) and Sartaj Sahni, *Fundamentals of Data Structures in Pascal*, [Computer Science Press](https://en.wikipedia.org/wiki/Computer_Science_Press), 1984, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-914894-94-3](https://en.wikipedia.org/wiki/Special:BookSources/0-914894-94-3)

## External links

* [Descriptions](https://xlinux.nist.gov/dads/) from the [Dictionary of Algorithms and Data Structures](https://en.wikipedia.org/w/index.php?title=Dictionary_of_Algorithms_and_Data_Structures&action=edit&redlink=1)
* [Data structures course](https://www.cs.auckland.ac.nz/software/AlgAnim/ds_ToC.html)
* [An Examination of Data Structures from .NET perspective](http://msdn.microsoft.com/en-us/library/aa289148(VS.71).aspx)
* [Schaffer, C. *Data Structures and Algorithm Analysis*](http://people.cs.vt.edu/~shaffer/Book/C++3e20110915.pdf)
 
NewPP limit report
Parsed by mw‐web.codfw.main‐bf65cc95d‐q46n8
Cached time: 20260424002419
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 0.234 seconds
Real time usage: 0.393 seconds
Preprocessor visited node count: 1821/1000000
Revision size: 16890/2097152 bytes
Post‐expand include size: 92027/2097152 bytes
Template argument size: 1878/2097152 bytes
Highest expansion depth: 12/100
Expensive parser function count: 4/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 113529/5000000 bytes
Lua time usage: 0.148/10.000 seconds
Lua memory usage: 5504727/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00%  320.769      1 -total
 29.82%   95.666      1 Template:Reflist
 17.65%   56.623      6 Template:Cite_book
 16.53%   53.032      1 Template:Short_description
 15.10%   48.451      4 Template:Navbox
 14.33%   45.977      1 Template:Sister_project_links
 14.00%   44.914      1 Template:Data_structures
  8.75%   28.066      1 Template:Authority_control
  7.84%   25.147      2 Template:Pagetype
  6.20%   19.877      8 Template:Main_other
 Render ID ef134469-3f73-11f1-8578-1188c36e6ccd  Saved in parser cache with key enwiki:pcache:8519:|#|:idhash:canonical and timestamp 20260424002419 and revision id 1336172344. Rendering was triggered because: page_view