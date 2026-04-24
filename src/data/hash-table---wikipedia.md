# Hash table - Wikipedia

Source: https://en.wikipedia.org/wiki/Hash_table

---

Associative array for storing key–value pairs

| Hash table |
| --- |
| Type | Unordered associative array |
| Invented | 1953 |
| Operation Average Worst case Search Θ(1) O( n ) Insert Θ(1) O( n ) Delete Θ(1) O( n ) Space Θ( n ) O( n ) | Operation | Average | Worst case | Search | Θ(1) | O( n ) | Insert | Θ(1) | O( n ) | Delete | Θ(1) | O( n ) | Space | Θ( n ) | O( n ) |
|  |
| Operation | Average | Worst case |
| Search | Θ(1) | O( n ) |
| Insert | Θ(1) | O( n ) |
| Delete | Θ(1) | O( n ) |
|  |
| Space | Θ( n ) | O( n ) |

[![](//upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/330px-Hash_table_3_1_1_0_1_0_0_SP.svg.png)](https://en.wikipedia.org/wiki/File:Hash_table_3_1_1_0_1_0_0_SP.svg)

A small phone book as a hash table

In [computer science](https://en.wikipedia.org/wiki/Computer_science), a **hash table** is a [data structure](https://en.wikipedia.org/wiki/Data_structure) that implements an [associative array](https://en.wikipedia.org/wiki/Associative_array), also called a **dictionary** or simply **map**; an associative array is an [abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type) that maps [keys](https://en.wikipedia.org/wiki/Unique_key) to [values](https://en.wikipedia.org/wiki/Value_(computer_science)). A hash table uses a [hash function](https://en.wikipedia.org/wiki/Hash_function) to compute an *index*, also called a *hash code*, into an array of *buckets* or *slots*, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored. A map implemented by a hash table is called a **hash map**.

Most hash table designs employ an [imperfect hash function](https://en.wikipedia.org/wiki/Perfect_hash_function). [Hash collisions](https://en.wikipedia.org/wiki/Hash_collision), where the hash function generates the same index for more than one key, therefore typically must be accommodated in some way. Common strategies to handle hash collisions include chaining, which stores multiple elements in the same slot using linked lists, and open addressing, which searches for the next available slot according to a probing sequence.

In a well-dimensioned hash table, the average time complexity for each lookup is independent of the number of elements stored in the table. Many hash table designs also allow arbitrary insertions and deletions of [key–value pairs](https://en.wikipedia.org/wiki/Name%E2%80%93value_pair), at [amortized](https://en.wikipedia.org/wiki/Amortized_analysis) constant average cost per operation.

Hashing is an example of a [space–time tradeoff](https://en.wikipedia.org/wiki/Space%E2%80%93time_tradeoff). If [memory](https://en.wikipedia.org/wiki/Computer_memory) is infinite, the entire key can be used directly as an index to locate its value with a single memory access. On the other hand, if infinite time is available, values can be stored without regard for their keys, and a [binary search](https://en.wikipedia.org/wiki/Binary_search) or [linear search](https://en.wikipedia.org/wiki/Linear_search) can be used to retrieve the element.

In many situations, hash tables turn out to be on average more efficient than [search trees](https://en.wikipedia.org/wiki/Search_tree) or any other [table](https://en.wikipedia.org/wiki/Table_(computing)) lookup structure. For this reason, they are widely used in many kinds of computer [software](https://en.wikipedia.org/wiki/Software), particularly for [associative arrays](https://en.wikipedia.org/wiki/Associative_array), [database indexing](https://en.wikipedia.org/wiki/Database_index), [caches](https://en.wikipedia.org/wiki/Cache_(computing)), and [sets](https://en.wikipedia.org/wiki/Set_(abstract_data_type)). Many programming languages provide built-in hash table structures, such as [Python’s dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries), [Java’s HashMap](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/HashMap.html), [C++’s unordered\_map](https://en.cppreference.com/w/cpp/container/unordered_map.html), [Go maps](https://go.dev/blog/maps), which abstract the complexity of hashing from the programmer.

The idea of hashing arose independently in different places. In January 1953, [Hans Peter Luhn](https://en.wikipedia.org/wiki/Hans_Peter_Luhn) wrote an internal [IBM](https://en.wikipedia.org/wiki/IBM) memorandum that used hashing with chaining. The first example of [open addressing](https://en.wikipedia.org/wiki/Open_addressing) was proposed by A. D. Linh, building on Luhn's memorandum. Around the same time, [Gene Amdahl](https://en.wikipedia.org/wiki/Gene_Amdahl), [Elaine M. McGraw](https://en.wikipedia.org/wiki/Elaine_M._McGraw), [Nathaniel Rochester](https://en.wikipedia.org/wiki/Nathaniel_Rochester_(computer_scientist)), and [Arthur Samuel](https://en.wikipedia.org/wiki/Arthur_Samuel_(computer_scientist)) of [IBM Research](https://en.wikipedia.org/wiki/IBM_Research) implemented hashing for the [IBM 701](https://en.wikipedia.org/wiki/IBM_701) [assembler](https://en.wikipedia.org/wiki/Assembly_language#Assembler). Open addressing with linear probing is credited to Amdahl, although [Andrey Ershov](https://en.wikipedia.org/wiki/Andrey_Ershov) independently had the same idea. The term "open addressing" was coined by [W. Wesley Peterson](https://en.wikipedia.org/wiki/W._Wesley_Peterson) in his article which discusses the problem of search in large files.

The first published work on hashing with chaining is credited to [Arnold Dumey](https://en.wikipedia.org/wiki/Arnold_Dumey), who discussed the idea of using remainder modulo a prime as a hash function. The word "hashing" was first published in an article by Robert Morris. A [theoretical analysis](https://en.wikipedia.org/wiki/Analysis_of_algorithms) of linear probing was submitted originally by Konheim and Weiss.

An [associative array](https://en.wikipedia.org/wiki/Associative_array) stores a [set](https://en.wikipedia.org/wiki/Set_(abstract_data_type)) of (key, value) pairs and allows insertion, deletion, and lookup (search), with the constraint of [unique keys](https://en.wikipedia.org/wiki/Unique_key). In the hash table implementation of associative arrays, an array 



A
{\displaystyle A}
![{\displaystyle A}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7daff47fa58cdfd29dc333def748ff5fa4c923e3) of length 



m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc) is partially filled with 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) elements, where 



m
≥
n
{\displaystyle m\geq n}
![{\displaystyle m\geq n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6b02f25e62da7fe3162ac80446437cdc1c0fd341). A key **x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4)** is hashed using a hash function 



h
{\displaystyle h}
![{\displaystyle h}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b26be3e694314bc90c3215047e4a2010c6ee184a) to compute an index location 



A
[
h
(
x
)
]
{\displaystyle A[h(x)]}
![{\displaystyle A[h(x)]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ac75d530b12267b829df7cff8b2ff01a24e61ab0) in the hash table, where 



h
(
x
)
<
m
{\displaystyle h(x)<m}
![{\displaystyle h(x)<m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/809d7e044109ace3c1f807ba0679bb18c627d513). The efficiency of a hash table depends on the load factor, defined as the ratio of the number of stored elements to the number of available slots, with lower load factors generally yielding faster operations. At this index, both the key and its associated value are stored. Storing the key alongside the value ensures that lookups can verify the key at the index to retrieve the correct value, even in the presence of collisions. Under reasonable assumptions, hash tables have better [time complexity](https://en.wikipedia.org/wiki/Time_complexity) bounds on search, delete, and insert operations in comparison to [self-balancing binary search trees](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree).

Hash tables are also commonly used to implement sets, by omitting the stored value for each key and merely tracking whether the key is present.

A *load factor* 



α
{\displaystyle \alpha }
![{\displaystyle \alpha }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b79333175c8b3f0840bfb4ec41b8072c83ea88d3) is a critical statistic of a hash table, and is defined as follows:

load factor
 
(
α
)
=


n
m
,
{\displaystyle {\text{load factor}}\ (\alpha )={\frac {n}{m}},}
![{\displaystyle {\text{load factor}}\ (\alpha )={\frac {n}{m}},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e3487807884a0c0748869a904c450c6c340f3533)
where

* n
  {\displaystyle n}
  ![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) is the number of entries occupied in the hash table.
* m
  {\displaystyle m}
  ![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc) is the number of buckets.

The performance of the hash table deteriorates in relation to the load factor 



α
{\displaystyle \alpha }
![{\displaystyle \alpha }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b79333175c8b3f0840bfb4ec41b8072c83ea88d3). In the limit of large 



m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc) and 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b), each bucket statistically has a [Poisson distribution](https://en.wikipedia.org/wiki/Poisson_distribution) with expectation 



λ
=
α
{\displaystyle \lambda =\alpha }
![{\displaystyle \lambda =\alpha }](https://wikimedia.org/api/rest_v1/media/math/render/svg/11bf25d8384a389167f48c90e2565cf3c34b80dc) for an ideally random [hash function](https://en.wikipedia.org/wiki/Hash_function).

The software typically ensures that the load factor 



α
{\displaystyle \alpha }
![{\displaystyle \alpha }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b79333175c8b3f0840bfb4ec41b8072c83ea88d3) remains below a certain constant, 




α

max
{\displaystyle \alpha \_{\max }}
![{\displaystyle \alpha _{\max }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9b0b1e00f2745ac1316702c4aae560ae371cb564). This helps maintain good performance. Therefore, a common approach is to resize or "rehash" the hash table whenever the load factor 



α
{\displaystyle \alpha }
![{\displaystyle \alpha }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b79333175c8b3f0840bfb4ec41b8072c83ea88d3) reaches 




α

max
{\displaystyle \alpha \_{\max }}
![{\displaystyle \alpha _{\max }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9b0b1e00f2745ac1316702c4aae560ae371cb564). Similarly the table may also be resized if the load factor drops below 




α

max

/
4
{\displaystyle \alpha \_{\max }/4}
![{\displaystyle \alpha _{\max }/4}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7e9dc23339801e7b502e6f862302bb55e0516bd4).

#### Load factor for separate chaining

[[edit](/w/index.php?title=Hash_table&action=edit&section=4)]

With separate chaining hash tables, each slot of the bucket array stores a pointer to a list or array of data.

Separate chaining hash tables suffer gradually declining performance as the load factor grows, and no fixed point beyond which resizing is absolutely needed.

With separate chaining, the value of 




α

max
{\displaystyle \alpha \_{\max }}
![{\displaystyle \alpha _{\max }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9b0b1e00f2745ac1316702c4aae560ae371cb564) that gives best performance is typically between 1 and 3.

#### Load factor for open addressing

[[edit](/w/index.php?title=Hash_table&action=edit&section=5)]

With open addressing, each slot of the bucket array holds exactly one item. Therefore an open-addressed hash table cannot have a load factor greater than 1.

The performance of open addressing becomes very bad when the load factor approaches 1.

Therefore a hash table that uses open addressing *must* be resized or *rehashed* if the load factor 



α
{\displaystyle \alpha }
![{\displaystyle \alpha }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b79333175c8b3f0840bfb4ec41b8072c83ea88d3) approaches 1.

With open addressing, acceptable figures of max load factor 




α

max
{\displaystyle \alpha \_{\max }}
![{\displaystyle \alpha _{\max }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9b0b1e00f2745ac1316702c4aae560ae371cb564) should range around 0.6 to 0.75.

A [hash function](https://en.wikipedia.org/wiki/Hash_function) 



h
:
U
→
{
0
,
.
.
.
,
m
−
1
}
{\displaystyle h:U\rightarrow \{0,...,m-1\}}
![{\displaystyle h:U\rightarrow \{0,...,m-1\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4a0ce358cd0b459bddf9c03c5effe6afc700185b) maps the universe 



U
{\displaystyle U}
![{\displaystyle U}](https://wikimedia.org/api/rest_v1/media/math/render/svg/458a728f53b9a0274f059cd695e067c430956025) of keys to indices or slots within the table, that is, 



h
(
x
)
∈
{
0
,
.
.
.
,
m
−
1
}
{\displaystyle h(x)\in \{0,...,m-1\}}
![{\displaystyle h(x)\in \{0,...,m-1\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bca89b54d7d94d29a9785be3b88bf3124387c8b7) for 



x
∈
U
{\displaystyle x\in U}
![{\displaystyle x\in U}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c32ddcb2941216f2980b950ce969dc15cba26906). The conventional implementations of hash functions are based on the *integer universe assumption* that all elements of the table stem from the universe 



U
=
{
0
,
.
.
.
,
u
−
1
}
{\displaystyle U=\{0,...,u-1\}}
![{\displaystyle U=\{0,...,u-1\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/04ab3270bbe2fbecf3426b15516ced184a01311b), where the [bit length](https://en.wikipedia.org/wiki/Bit_length) of 



u
{\displaystyle u}
![{\displaystyle u}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3e6bb763d22c20916ed4f0bb6bd49d7470cffd8) is confined within the [word size](https://en.wikipedia.org/wiki/Word_(computer_architecture)) of a [computer architecture](https://en.wikipedia.org/wiki/Computer_architecture).

A hash function 



h
{\displaystyle h}
![{\displaystyle h}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b26be3e694314bc90c3215047e4a2010c6ee184a) is said to be [perfect](https://en.wikipedia.org/wiki/Perfect_hash_function) for a given set 



S
{\displaystyle S}
![{\displaystyle S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4611d85173cd3b508e67077d4a1252c9c05abca2) if it is [injective](https://en.wikipedia.org/wiki/Injective_function) on 



S
{\displaystyle S}
![{\displaystyle S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4611d85173cd3b508e67077d4a1252c9c05abca2), that is, if each element 



x
∈
S
{\displaystyle x\in S}
![{\displaystyle x\in S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/51186ba8afb2067573a9082d55dd383df1ea9214) maps to a different value in 




0
,
.
.
.
,
m
−
1
{\displaystyle {0,...,m-1}}
![{\displaystyle {0,...,m-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5b007ad843a070921d2e670c0431ba02f649f16b). A perfect hash function can be created if all the keys are known ahead of time.

### Integer universe assumption

[[edit](/w/index.php?title=Hash_table&action=edit&section=7)]

The schemes of hashing used in *integer universe assumption* include hashing by division, hashing by multiplication, [universal hashing](https://en.wikipedia.org/wiki/Universal_hashing), [dynamic perfect hashing](https://en.wikipedia.org/wiki/Dynamic_perfect_hashing), and [static perfect hashing](https://en.wikipedia.org/wiki/Static_Hashing). However, hashing by division is the commonly used scheme.

#### Hashing by division

[[edit](/w/index.php?title=Hash_table&action=edit&section=8)]

The scheme in hashing by division is as follows:

h
(
x
)
 
=
 
x


mod

m
,
{\displaystyle h(x)\ =\ x\,{\bmod {\,}}m,}
![{\displaystyle h(x)\ =\ x\,{\bmod {\,}}m,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c22155e49d56ce69ff1b49f37d9f139cd6da7ac6)
where 



h
(
x
)
{\displaystyle h(x)}
![{\displaystyle h(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/02c07825dae28705df03d15daeb8844d49c4dbd4) is the hash value of 



x
∈
S
{\displaystyle x\in S}
![{\displaystyle x\in S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/51186ba8afb2067573a9082d55dd383df1ea9214) and 



m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc) is the size of the table.

#### Hashing by multiplication

[[edit](/w/index.php?title=Hash_table&action=edit&section=9)]

The scheme in hashing by multiplication is as follows:

h
(
x
)
=
⌊
m


(
(
x
A
)

mod

1


)
⌋
{\displaystyle h(x)=\lfloor m{\bigl (}(xA){\bmod {1}}{\bigr )}\rfloor }
![{\displaystyle h(x)=\lfloor m{\bigl (}(xA){\bmod {1}}{\bigr )}\rfloor }](https://wikimedia.org/api/rest_v1/media/math/render/svg/cdd58ba648176ddb2a7a3fdabae1d2fc40018dba)
Where 



A
{\displaystyle A}
![{\displaystyle A}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7daff47fa58cdfd29dc333def748ff5fa4c923e3) is a non-integer [real-valued constant](https://en.wikipedia.org/wiki/Real_number) and 



m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc) is the size of the table. An advantage of the hashing by multiplication is that the 



m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc) is not critical. Although any value 



A
{\displaystyle A}
![{\displaystyle A}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7daff47fa58cdfd29dc333def748ff5fa4c923e3) produces a hash function, [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth) suggests using the [golden ratio](https://en.wikipedia.org/wiki/Golden_ratio).

Commonly a string is used as a key to the hash function. The third edition of *[The C++ Programming Language](https://en.wikipedia.org/wiki/The_C%2B%2B_Programming_Language)* describes a simple hash function in which an unsigned integer that is initially zero is repeatedly left shifted one bit and then xor'ed with the integer value of the next character. This hash value is then taken modulo the table size. If the left shift is not circular, then the string length should be at least eight bits less than the size of the unsigned integer in bits. Another common way to hash a string to an integer is with a [polynomial rolling hash function](https://en.wikipedia.org/wiki/Rolling_hash).

### Choosing a hash function

[[edit](/w/index.php?title=Hash_table&action=edit&section=11)]

[Uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(discrete)) of the hash values is a fundamental requirement of a hash function. A non-uniform distribution increases the number of collisions and the cost of resolving them. Uniformity is sometimes difficult to ensure by design, but may be evaluated empirically using statistical tests, e.g., a [Pearson's chi-squared test](https://en.wikipedia.org/wiki/Pearson%27s_chi-squared_test#Discrete_uniform_distribution) for discrete uniform distributions.

The distribution needs to be uniform only for table sizes that occur in the application. In particular, if one uses dynamic resizing with exact doubling and halving of the table size, then the hash function needs to be uniform only when the size is a [power of two](https://en.wikipedia.org/wiki/Power_of_two). Here the index can be computed as some range of bits of the hash function. On the other hand, some hashing algorithms prefer to have the size be a [prime number](https://en.wikipedia.org/wiki/Prime_number).

For [open addressing](https://en.wikipedia.org/wiki/Open_addressing) schemes, the hash function should also avoid *[runs](https://en.wikipedia.org/wiki/Primary_clustering)*, the mapping of two or more keys to consecutive slots. Such runs may cause the lookup cost to skyrocket, even if the load factor is low and collisions are infrequent. The popular multiplicative hash is claimed to have particularly poor run behavior.

[K-independent hashing](https://en.wikipedia.org/wiki/K-independent_hashing) offers a way to prove a certain hash function does not have bad keysets for a given type of hashtable. A number of K-independence results are known for collision resolution schemes such as linear probing and cuckoo hashing. Since K-independence can prove a hash function works, one can then focus on finding the fastest possible such hash function.

## Collision resolution

[[edit](/w/index.php?title=Hash_table&action=edit&section=12)]

A search algorithm that uses hashing consists of two parts. The first part is computing a [hash function](https://en.wikipedia.org/wiki/Hash_function) which transforms the search key into an [array index](https://en.wikipedia.org/wiki/Array_index). The ideal case is such that no two search keys hash to the same array index. However, this is not always the case and impossible to guarantee for unseen given data. Hence the second part of the algorithm is collision resolution. The two common methods for collision resolution are separate chaining and open addressing.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg/500px-Hash_table_5_0_1_1_1_1_1_LL.svg.png)](https://en.wikipedia.org/wiki/File:Hash_table_5_0_1_1_1_1_1_LL.svg)

Hash collision resolved by separate chaining

[![](//upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hash_table_5_0_1_1_1_1_0_LL.svg/500px-Hash_table_5_0_1_1_1_1_0_LL.svg.png)](https://en.wikipedia.org/wiki/File:Hash_table_5_0_1_1_1_1_0_LL.svg)

Hash collision by separate chaining with head records in the bucket array

In separate chaining, the process involves building a [linked list](https://en.wikipedia.org/wiki/Linked_list) with [key–value pair](https://en.wikipedia.org/wiki/Key%E2%80%93value_pair) for each search array index. The collided items are chained together through a single linked list, which can be traversed to access the item with a unique search key. Collision resolution through chaining with linked list is a common method of implementation of hash tables. Let 



T
{\displaystyle T}
![{\displaystyle T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec7200acd984a1d3a3d7dc455e262fbe54f7f6e0) and 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) be the hash table and the node respectively, the operation involves as follows:

```
Chained-Hash-Insert(T, k)
  insert x at the head of linked list T[h(k)]

Chained-Hash-Search(T, k)
  search for an element with key k in linked list T[h(k)]

Chained-Hash-Delete(T, k)
  delete x from the linked list T[h(k)]

```

If the element is comparable either [numerically](https://en.wikipedia.org/wiki/Sequence#Analysis) or [lexically](https://en.wikipedia.org/wiki/Lexicographic_order), and inserted into the list by maintaining the [total order](https://en.wikipedia.org/wiki/Total_order), it results in faster termination of the unsuccessful searches.

#### Other data structures for separate chaining

[[edit](/w/index.php?title=Hash_table&action=edit&section=14)]

If the keys are [ordered](https://en.wikipedia.org/wiki/Total_order), it could be efficient to use "[self-organizing](https://en.wikipedia.org/wiki/Optimal_binary_search_tree)" concepts such as using a [self-balancing binary search tree](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree), through which the [theoretical worst case](https://en.wikipedia.org/wiki/Worst-case_complexity) could be brought down to 



O
(
log
⁡

n
)
{\displaystyle O(\log {n})}
![{\displaystyle O(\log {n})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/653ab6d6fd99537d220f179d2591955ff4f37b99), although it introduces additional complexities.

In [dynamic perfect hashing](https://en.wikipedia.org/wiki/Dynamic_perfect_hashing), two-level hash tables are used to reduce the look-up complexity to be a guaranteed 



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21) in the worst case. In this technique, the buckets of 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) entries are organized as [perfect hash tables](https://en.wikipedia.org/wiki/Perfect_hash_function) with 




k

2
{\displaystyle k^{2}}
![{\displaystyle k^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/af6423cd00e3559de92c4bc497066ff1b12bbfc3) slots providing constant worst-case lookup time, and low amortized time for insertion. A study shows array-based separate chaining to be 97% more performant when compared to the standard linked list method under heavy load.

Techniques such as using [fusion tree](https://en.wikipedia.org/wiki/Fusion_tree) for each buckets also result in constant time for all operations with high probability.

#### Caching and locality of reference

[[edit](/w/index.php?title=Hash_table&action=edit&section=15)]

The linked list of separate chaining implementation may not be [cache-conscious](https://en.wikipedia.org/wiki/Cache-oblivious_algorithm) due to [spatial locality](https://en.wikipedia.org/wiki/Spatial_locality)—[locality of reference](https://en.wikipedia.org/wiki/Locality_of_reference)—when the nodes of the linked list are scattered across memory, thus the list traversal during insert and search may entail [CPU cache](https://en.wikipedia.org/wiki/CPU_cache) inefficiencies.

In [cache-conscious variants](https://en.wikipedia.org/wiki/Cache-oblivious_algorithm) of collision resolution through separate chaining, a [dynamic array](https://en.wikipedia.org/wiki/Dynamic_array) found to be more [cache-friendly](https://en.wikipedia.org/wiki/CPU_cache) is used in the place where a linked list or self-balancing binary search trees is usually deployed, since the [contiguous allocation](https://en.wikipedia.org/wiki/Memory_management_(operating_systems)#Single_contiguous_allocation) pattern of the array could be exploited by [hardware-cache prefetchers](https://en.wikipedia.org/wiki/Cache_prefetching)—such as [translation lookaside buffer](https://en.wikipedia.org/wiki/Translation_lookaside_buffer)—resulting in reduced access time and memory consumption.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Hash_table_5_0_1_1_1_1_0_SP.svg/500px-Hash_table_5_0_1_1_1_1_0_SP.svg.png)](https://en.wikipedia.org/wiki/File:Hash_table_5_0_1_1_1_1_0_SP.svg)

Hash collision resolved by open addressing with linear probing (interval=1). Note that "Ted Baker" has a unique hash, but nevertheless collided with "Sandra Dee", that had previously collided with "John Smith".

[Open addressing](https://en.wikipedia.org/wiki/Open_addressing) is another collision resolution technique in which every entry record is stored in the bucket array itself, and the hash resolution is performed through **probing**. When a new entry has to be inserted, the buckets are examined, starting with the hashed-to slot and proceeding in some *probe sequence*, until an unoccupied slot is found. When searching for an entry, the buckets are scanned in the same sequence, until either the target record is found, or an unused array slot is found, which indicates an unsuccessful search.

Well-known probe sequences include:

* [Linear probing](https://en.wikipedia.org/wiki/Linear_probing), in which the interval between probes is fixed (usually 1).
* [Quadratic probing](https://en.wikipedia.org/wiki/Quadratic_probing), in which the interval between probes is increased by adding the successive outputs of a quadratic polynomial to the value given by the original hash computation.
* [Double hashing](https://en.wikipedia.org/wiki/Double_hashing), in which the interval between probes is computed by a secondary hash function.

The performance of open addressing may be slower compared to separate chaining since the probe sequence increases when the load factor 



α
{\displaystyle \alpha }
![{\displaystyle \alpha }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b79333175c8b3f0840bfb4ec41b8072c83ea88d3) approaches 1. The probing results in an [infinite loop](https://en.wikipedia.org/wiki/Infinite_loop) if the load factor reaches 1, in the case of a completely filled table. The [average cost](https://en.wikipedia.org/wiki/Average-case_complexity) of linear probing depends on the hash function's ability to [distribute](https://en.wikipedia.org/wiki/Probability_distribution) the elements [uniformly](https://en.wikipedia.org/wiki/Continuous_uniform_distribution) throughout the table to avoid [runs](https://en.wikipedia.org/wiki/Cluster_analysis), since formation of runs would result in increased search time.

#### Caching and locality of reference

[[edit](/w/index.php?title=Hash_table&action=edit&section=17)]

Since the slots are located in successive locations, linear probing could lead to better utilization of [CPU cache](https://en.wikipedia.org/wiki/CPU_cache) due to [locality of references](https://en.wikipedia.org/wiki/Locality_of_reference) resulting in reduced [memory latency](https://en.wikipedia.org/wiki/Memory_latency).

#### Other collision resolution techniques based on open addressing

[[edit](/w/index.php?title=Hash_table&action=edit&section=18)]

[Coalesced hashing](https://en.wikipedia.org/wiki/Coalesced_hashing) is a hybrid of both separate chaining and open addressing in which the buckets or nodes link within the table. The algorithm is ideally suited for [fixed memory allocation](https://en.wikipedia.org/wiki/Memory_pool). The collision in coalesced hashing is resolved by identifying the largest-indexed empty slot on the hash table, then the colliding value is inserted into that slot. The bucket is also linked to the inserted node's slot which contains its colliding hash address.

[Cuckoo hashing](https://en.wikipedia.org/wiki/Cuckoo_hashing) is a form of open addressing collision resolution technique which guarantees 



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21) worst-case lookup complexity and constant amortized time for insertions. The collision is resolved through maintaining two hash tables, each having its own hashing function, and collided slot gets replaced with the given item, and the preoccupied element of the slot gets displaced into the other hash table. The process continues until every key has its own spot in the empty buckets of the tables; if the procedure enters into [infinite loop](https://en.wikipedia.org/wiki/Infinite_loop)—which is identified through maintaining a threshold loop counter—both hash tables get rehashed with newer hash functions and the procedure continues.

[Hopscotch hashing](https://en.wikipedia.org/wiki/Hopscotch_hashing) is an open addressing based algorithm which combines the elements of [cuckoo hashing](https://en.wikipedia.org/wiki/Cuckoo_hashing), [linear probing](https://en.wikipedia.org/wiki/Linear_probing) and chaining through the notion of a *neighbourhood* of buckets—the subsequent buckets around any given occupied bucket, also called a "virtual" bucket. The algorithm is designed to deliver better performance when the load factor of the hash table grows beyond 90%; it also provides high throughput in [concurrent settings](https://en.wikipedia.org/wiki/Concurrent_computing), thus well suited for implementing resizable [concurrent hash table](https://en.wikipedia.org/wiki/Concurrent_hash_table). The neighbourhood characteristic of hopscotch hashing guarantees a property that, the cost of finding the desired item from any given buckets within the neighbourhood is very close to the cost of finding it in the bucket itself; the algorithm attempts to be an item into its neighbourhood—with a possible cost involved in displacing other items.

Each bucket within the hash table includes an additional "hop-information"—an *H*-bit [bit array](https://en.wikipedia.org/wiki/Bit_array) for indicating the [relative distance](https://en.wikipedia.org/wiki/Euclidean_distance#One_dimension) of the item which was originally hashed into the current virtual bucket within *H* − 1 entries. Let 



k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) and 



B
k
{\displaystyle Bk}
![{\displaystyle Bk}](https://wikimedia.org/api/rest_v1/media/math/render/svg/82832ae60c54ab770e4d55783e2b14fff85798f3) be the key to be inserted and bucket to which the key is hashed into respectively; several cases are involved in the insertion procedure such that the neighbourhood property of the algorithm is vowed: if 



B
k
{\displaystyle Bk}
![{\displaystyle Bk}](https://wikimedia.org/api/rest_v1/media/math/render/svg/82832ae60c54ab770e4d55783e2b14fff85798f3) is empty, the element is inserted, and the leftmost bit of bitmap is [set](https://en.wikipedia.org/wiki/Bitwise_operation) to 1; if not empty, linear probing is used for finding an empty slot in the table, the bitmap of the bucket gets updated followed by the insertion; if the empty slot is not within the range of the *neighbourhood,* i.e. *H* − 1, subsequent swap and hop-info bit array manipulation of each bucket is performed in accordance with its neighbourhood [invariant properties](https://en.wikipedia.org/wiki/Invariant_(mathematics)).

Robin Hood hashing is an open addressing based collision resolution algorithm; the collisions are resolved through favouring the displacement of the element that is farthest—or longest *probe sequence length* (PSL)—from its "home location" i.e. the bucket to which the item was hashed into. It is named after [Robin Hood](https://en.wikipedia.org/wiki/Robin_Hood), a mythical [heroic outlaw](https://en.wikipedia.org/wiki/Heroic_outlaw) who stole from the rich to give to the poor.

Although Robin Hood hashing does not change the [theoretical search cost](https://en.wikipedia.org/wiki/Computational_complexity_theory), it significantly affects the [variance](https://en.wikipedia.org/wiki/Variance) of the [distribution](https://en.wikipedia.org/wiki/Probability_distribution) of the items on the buckets, i.e. dealing with [long run](https://en.wikipedia.org/wiki/Cluster_analysis) formation in the hash table. Each node within the hash table that uses Robin Hood hashing should be augmented to store an extra PSL value. Let 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) be the key to be inserted, 



x

.

psl
{\displaystyle x{.}{\text{psl}}}
![{\displaystyle x{.}{\text{psl}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/affd26ef719d0b0e69fe0778fd5447283a895b8b) be the (incremental) PSL length of 



x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4), 



T
{\displaystyle T}
![{\displaystyle T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec7200acd984a1d3a3d7dc455e262fbe54f7f6e0) be the hash table and 



j
{\displaystyle j}
![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0) be the index, the insertion procedure is as follows:

* If 



  x

  .

  psl
   
  ≤
   
  T
  [
  j
  ]

  .

  psl
  {\displaystyle x{.}{\text{psl}}\ \leq \ T[j]{.}{\text{psl}}}
  ![{\displaystyle x{.}{\text{psl}}\ \leq \ T[j]{.}{\text{psl}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/12d235230accf383c8f51fb38521cf936491f57e): the iteration goes into the next bucket without attempting an external probe.
* If 



  x

  .

  psl
   
  >
   
  T
  [
  j
  ]

  .

  psl
  {\displaystyle x{.}{\text{psl}}\ >\ T[j]{.}{\text{psl}}}
  ![{\displaystyle x{.}{\text{psl}}\ >\ T[j]{.}{\text{psl}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8b4cd954c87e2db3bc9d3e8871d603177ebc79cc): insert the item 



  x
  {\displaystyle x}
  ![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) into the bucket 



  j
  {\displaystyle j}
  ![{\displaystyle j}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2f461e54f5c093e92a55547b9764291390f0b5d0); swap 



  x
  {\displaystyle x}
  ![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) with 



  T
  [
  j
  ]
  {\displaystyle T[j]}
  ![{\displaystyle T[j]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cb1f9ca1ed801caf88d5004aa3685644667099b6)—let it be 




  x
  ′
  {\displaystyle x'}
  ![{\displaystyle x'}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0ac74959896052e160a5953102e4bc3850fe93b2); continue the probe from the 



  (
  j
  +
  1
  )
  {\displaystyle (j+1)}
  ![{\displaystyle (j+1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4244360b0b6aea8d3b1cfb3ab63b52fcc4be0152)th bucket to insert 




  x
  ′
  {\displaystyle x'}
  ![{\displaystyle x'}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0ac74959896052e160a5953102e4bc3850fe93b2); repeat the procedure until every element is inserted.

Repeated insertions cause the number of entries in a hash table to grow, which consequently increases the load factor; to maintain the amortized 



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21) performance of the lookup and insertion operations, a hash table is dynamically resized and the items of the tables are *rehashed* into the buckets of the new hash table, since the items cannot be copied over as varying table sizes results in different hash value due to [modulo operation](https://en.wikipedia.org/wiki/Modulo_operation). If a hash table becomes "too empty" after deleting some elements, resizing may be performed to avoid excessive [memory usage](https://en.wikipedia.org/wiki/Memory_footprint).

### Resizing by moving all entries

[[edit](/w/index.php?title=Hash_table&action=edit&section=24)]

Generally, a new hash table with a size double that of the original hash table gets [allocated](https://en.wikipedia.org/wiki/Dynamic_memory_allocation) privately and every item in the original hash table gets moved to the newly allocated one by computing the hash values of the items followed by the insertion operation. Rehashing is simple, but computationally expensive.

### Alternatives to all-at-once rehashing

[[edit](/w/index.php?title=Hash_table&action=edit&section=25)]

Some hash table implementations, notably in [real-time systems](https://en.wikipedia.org/wiki/Real-time_system), cannot pay the price of enlarging the hash table all at once, because it may interrupt time-critical operations. If one cannot avoid dynamic resizing, a solution is to perform the resizing gradually to avoid storage blip—typically at 50% of new table's size—during rehashing and to avoid [memory fragmentation](https://en.wikipedia.org/wiki/Fragmentation_(computing)) that triggers [heap compaction](https://en.wikipedia.org/wiki/Mark-compact_algorithm) due to deallocation of large [memory blocks](https://en.wikipedia.org/wiki/Page_(computer_memory)) caused by the old hash table. In such case, the rehashing operation is done incrementally through extending prior memory block allocated for the old hash table such that the buckets of the hash table remain unaltered. A common approach for amortized rehashing involves maintaining two hash functions 




h

old
{\displaystyle h\_{\text{old}}}
![{\displaystyle h_{\text{old}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c72c36cbf0b0ae5fd714538904b790d38b8cfa53) and 




h

new
{\displaystyle h\_{\text{new}}}
![{\displaystyle h_{\text{new}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ba01548b798b9054a25186dbe1ef27b87ceb0dac). The process of rehashing a bucket's items in accordance with the new hash function is termed as *cleaning*, which is implemented through [command pattern](https://en.wikipedia.org/wiki/Command_pattern) by encapsulating the operations such as 




A
d
d
(

k
e
y
)
{\displaystyle \mathrm {Add} (\mathrm {key} )}
![{\displaystyle \mathrm {Add} (\mathrm {key} )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a73a1fd15fdccdeab3cb64bd91fa59b3fa8caaee), 




G
e
t
(

k
e
y
)
{\displaystyle \mathrm {Get} (\mathrm {key} )}
![{\displaystyle \mathrm {Get} (\mathrm {key} )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3e8e203ff86dac772ed426a7fbb7c1577b742310) and 




D
e
l
e
t
e
(

k
e
y
)
{\displaystyle \mathrm {Delete} (\mathrm {key} )}
![{\displaystyle \mathrm {Delete} (\mathrm {key} )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b40bdf150fd9f01bcd54e04bf6d988e63fb1d68b) through a 




L
o
o
k
u
p
(

k
e
y
,

command
)
{\displaystyle \mathrm {Lookup} (\mathrm {key} ,{\text{command}})}
![{\displaystyle \mathrm {Lookup} (\mathrm {key} ,{\text{command}})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/85606b65edcf34822d5e57bbaad7d33b867bdb7a) [wrapper](https://en.wikipedia.org/wiki/Wrapper_function) such that each element in the bucket gets rehashed and its procedure involve as follows:

* Clean 




  T
  a
  b
  l
  e
  [

  h

  old
  (

  k
  e
  y
  )
  ]
  {\displaystyle \mathrm {Table} [h\_{\text{old}}(\mathrm {key} )]}
  ![{\displaystyle \mathrm {Table} [h_{\text{old}}(\mathrm {key} )]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/afcb195bb40a51be98c16b6d9b930061f3c11682) bucket.
* Clean 




  T
  a
  b
  l
  e
  [

  h

  new
  (

  k
  e
  y
  )
  ]
  {\displaystyle \mathrm {Table} [h\_{\text{new}}(\mathrm {key} )]}
  ![{\displaystyle \mathrm {Table} [h_{\text{new}}(\mathrm {key} )]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d8097baf3c9220a1be057b3c86395debce381845) bucket.
* The *command* gets executed.

[Linear hashing](https://en.wikipedia.org/wiki/Linear_hashing) is an implementation of the hash table which enables dynamic growths or shrinks of the table one bucket at a time.

The performance of a hash table is dependent on the hash function's ability in generating [quasi-random numbers](https://en.wikipedia.org/wiki/Low-discrepancy_sequence) (



σ
{\displaystyle \sigma }
![{\displaystyle \sigma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f59b7c3e6fdb1d0365a494b81fb9a696138c36)) for entries in the hash table where 



K
{\displaystyle K}
![{\displaystyle K}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2b76fce82a62ed5461908f0dc8f037de4e3686b0), 



n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) and 



h
(
x
)
{\displaystyle h(x)}
![{\displaystyle h(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/02c07825dae28705df03d15daeb8844d49c4dbd4) denotes the key, number of buckets and the hash function such that 



σ
 
=
 
h
(
K
)
 
%
 
n
{\displaystyle \sigma \ =\ h(K)\ \%\ n}
![{\displaystyle \sigma \ =\ h(K)\ \%\ n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/40a6e5ff8682623f42354703a2ab865b4560eb2d). If the hash function generates the same 



σ
{\displaystyle \sigma }
![{\displaystyle \sigma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f59b7c3e6fdb1d0365a494b81fb9a696138c36) for distinct keys (




K

1
≠

K

2
,
 
h
(

K

1
)
 
=
 
h
(

K

2
)
{\displaystyle K\_{1}\neq K\_{2},\ h(K\_{1})\ =\ h(K\_{2})}
![{\displaystyle K_{1}\neq K_{2},\ h(K_{1})\ =\ h(K_{2})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d7a3a322b4d101e383b226705366b3b0b8f95f5a)), this results in *collision*, which is dealt with in a variety of ways. The constant time complexity (



O
(
1
)
{\displaystyle O(1)}
![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21)) of the operation in a hash table is presupposed on the condition that the hash function doesn't generate colliding indices; thus, the performance of the hash table is [directly proportional](https://en.wikipedia.org/wiki/Proportionality_(mathematics)#Direct_proportionality) to the chosen hash function's ability to [disperse](https://en.wikipedia.org/wiki/Statistical_dispersion) the indices. However, construction of such a hash function is [practically infeasible](https://en.wikipedia.org/wiki/NP-hardness), that being so, implementations depend on [case-specific](https://en.wikipedia.org/wiki/Use_case) [collision resolution techniques](#Collision_resolution) in achieving higher performance.

The best performance is obtained in the case that the hash function distributes the elements of the universe uniformaly, and the elements stored at the table are drawn at random from the universe. In this case, in hashing with chaining, the expected time for a successful search is 



1
+


α
2
+
Θ

(


1
m
)
{\textstyle 1+{\frac {\alpha }{2}}+\Theta \left({\frac {1}{m}}\right)}
![{\textstyle 1+{\frac {\alpha }{2}}+\Theta \left({\frac {1}{m}}\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5c89452b6089f4f212f1ff259c5c0a51587d18d), and the expected time for an unsuccessful search is 




e

−
α
+
α
+
Θ

(


1
m
)
{\textstyle e^{-\alpha }+\alpha +\Theta \left({\frac {1}{m}}\right)}
![{\textstyle e^{-\alpha }+\alpha +\Theta \left({\frac {1}{m}}\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c9e1ddeceaa8e3613fcc65c3401d8f6ab8c4bd7f).

Hash tables are commonly used to implement many types of in-memory tables. They are used to implement [associative arrays](https://en.wikipedia.org/wiki/Associative_array).

Hash tables may also be used as [disk](https://en.wikipedia.org/wiki/Disk_drive)-based data structures and [database indices](https://en.wikipedia.org/wiki/Index_(database)) (such as in [dbm](https://en.wikipedia.org/wiki/DBM_(computing))) although [B-trees](https://en.wikipedia.org/wiki/B-tree) are more popular in these applications.

Hash tables can be used to implement [caches](https://en.wikipedia.org/wiki/Cache_(computing)), auxiliary data tables that are used to speed up the access to data that is primarily stored in slower media. In this application, hash collisions can be handled by discarding one of the two colliding entries—usually erasing the old item that is currently stored in the table and overwriting it with the new item, so every item in the table has a unique hash value.

Hash tables can be used in the implementation of [set data structure](https://en.wikipedia.org/wiki/Set_data_structure), which can store unique values without any particular order; set is typically used in testing the membership of a value in the collection, rather than element retrieval.

### Transposition table

[[edit](/w/index.php?title=Hash_table&action=edit&section=33)]

A [transposition table](https://en.wikipedia.org/wiki/Transposition_table) to a complex Hash Table which stores information about each section that has been searched.

Many programming languages provide hash table functionality, either as built-in associative arrays or as [standard library](https://en.wikipedia.org/wiki/Standard_library) modules.

* In [JavaScript](https://en.wikipedia.org/wiki/JavaScript), an "object" is a mutable collection of key–value pairs (called "properties"), where each key is either a string or a guaranteed-unique "symbol"; any other value, when used as a key, is first [coerced](https://en.wikipedia.org/wiki/Type_conversion) to a string. Aside from the seven "primitive" data types, every value in JavaScript is an object. ECMAScript 2015 also added the `Map` data structure, which accepts arbitrary values as keys.
* [C++11](https://en.wikipedia.org/wiki/C%2B%2B11) includes `unordered_map` in its standard library for storing keys and values of [arbitrary types](https://en.wikipedia.org/wiki/Template_(C%2B%2B)).
* [Go](https://en.wikipedia.org/wiki/Go_(programming_language))'s built-in `map` implements a map type in the form of a [type](https://en.wikipedia.org/wiki/Primitive_data_type), which is often (but not guaranteed to be) a hash table.
* [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) programming language includes the `HashSet`, `HashMap`, `LinkedHashSet`, and `LinkedHashMap` [generic](https://en.wikipedia.org/wiki/Generics_in_Java) collections.
* [Python](https://en.wikipedia.org/wiki/Python_(programming_language))'s built-in `dict` implements a hash table in the form of a [type](https://en.wikipedia.org/wiki/Primitive_data_type).
* [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language))'s built-in `Hash` uses the open addressing model from Ruby 2.4 onwards.
* [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) programming language includes `HashMap`, `HashSet` as part of the Rust Standard Library.
* The [.NET](https://en.wikipedia.org/wiki/.NET) standard library includes `HashSet` and `Dictionary`, so it can be used from languages such as [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) and [VB.NET](https://en.wikipedia.org/wiki/VB.NET).

1. **[^](#cite_ref-2)** There are approaches with a worst-case *expected* time complexity of O(log2 (1 - *α*)−1) where *α* is the load factor.

1. **[^](#cite_ref-Farach-Colton_2024_1-0)** Martin Farach-Colton; Andrew Krapivin; William Kuszmaul. *Optimal Bounds for Open Addressing Without Reordering*. 2024 IEEE 65th Annual Symposium on Foundations of Computer Science (FOCS). [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2501.02305](https://arxiv.org/abs/2501.02305). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/FOCS61266.2024.00045](https://doi.org/10.1109%2FFOCS61266.2024.00045).
2. ^ [***a***](#cite_ref-Cormen_et_al_3-0) [***b***](#cite_ref-Cormen_et_al_3-1) 
   [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ronald_L._Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2009). [*Introduction to Algorithms*](https://en.wikipedia.org/wiki/Introduction_to_Algorithms) (3rd ed.). Massachusetts Institute of Technology. pp. 253–280. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-03384-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-03384-8).
3. **[^](#cite_ref-ms_4-0)** [Mehlhorn, Kurt](https://en.wikipedia.org/wiki/Kurt_Mehlhorn); [Sanders, Peter](https://en.wikipedia.org/wiki/Peter_Sanders_(computer_scientist)) (2008). ["Hash Tables and Associative Arrays"](https://people.mpi-inf.mpg.de/~mehlhorn/ftp/Toolbox/HashTables.pdf) (PDF). *Algorithms and Data Structures*. Springer. pp. 81–98. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-540-77978-0\_4](https://doi.org/10.1007%2F978-3-540-77978-0_4). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-77977-3](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-77977-3).
4. ^ [***a***](#cite_ref-knuth_5-0) [***b***](#cite_ref-knuth_5-1) [***c***](#cite_ref-knuth_5-2) [***d***](#cite_ref-knuth_5-3) [***e***](#cite_ref-knuth_5-4) [***f***](#cite_ref-knuth_5-5) [***g***](#cite_ref-knuth_5-6) [Knuth, Donald E.](https://en.wikipedia.org/wiki/Donald_E._Knuth) (April 24, 1998). [*The Art of Computer Programming: Volume 3: Sorting and Searching*](https://dl.acm.org/doi/10.5555/280635) (2nd ed.). [Addison-Wesley Professional](https://en.wikipedia.org/wiki/Addison-Wesley_Professional). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-89685-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-89685-5).
5. **[^](#cite_ref-leiser_6-0)** [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson) (Fall 2005). ["Lecture 13: Amortized Algorithms, Table Doubling, Potential Method"](https://videolectures.net/mit6046jf05_leiserson_lec13/). *course MIT 6.046J/18.410J Introduction to Algorithms*. [Archived](https://web.archive.org/web/20090807022046/http://videolectures.net/mit6046jf05_leiserson_lec13/) from the original on August 7, 2009.
6. **[^](#cite_ref-cormen_7-0)** [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ronald_L._Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2001). "Chapter 11: Hash Tables". [*Introduction to Algorithms*](https://en.wikipedia.org/wiki/Introduction_to_Algorithms) (2nd ed.). MIT Press and McGraw-Hill. pp. [221](https://archive.org/details/introductiontoal00corm_691/page/n243)–252. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-53196-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-53196-2).
7. ^ [***a***](#cite_ref-algo1rob_8-0) [***b***](#cite_ref-algo1rob_8-1) [***c***](#cite_ref-algo1rob_8-2) [***d***](#cite_ref-algo1rob_8-3) [***e***](#cite_ref-algo1rob_8-4) [Sedgewick, Robert](https://en.wikipedia.org/wiki/Robert_Sedgewick_(computer_scientist)); Wayne, Kevin (2011). [*Algorithms*](https://algs4.cs.princeton.edu/). Vol. 1 (4 ed.). Addison-Wesley Professional – via [Princeton University](https://en.wikipedia.org/wiki/Princeton_University), Department of Computer Science.
8. **[^](#cite_ref-9)** Silberschatz, A.; Korth, H. F.; Sudarshan, S. (2020). *Database System Concepts* (7th ed.). [McGraw-Hill](https://en.wikipedia.org/wiki/McGraw-Hill).
9. **[^](#cite_ref-10)** Goodrich, M. T.; Tamassia, R.; Goldwasser, M. H. (2014). *Data Structures and Algorithms in Java* (6th ed.). [Wiley](https://en.wikipedia.org/wiki/Wiley_(publisher)).
10. ^ [***a***](#cite_ref-Konheim_11-0) [***b***](#cite_ref-Konheim_11-1) [***c***](#cite_ref-Konheim_11-2) Konheim, Alan G. (2010). *Hashing in Computer Science*. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/9780470630617](https://doi.org/10.1002%2F9780470630617). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-470-34473-6](https://en.wikipedia.org/wiki/Special:BookSources/978-0-470-34473-6).
11. ^ [***a***](#cite_ref-hashhist_12-0) [***b***](#cite_ref-hashhist_12-1) [***c***](#cite_ref-hashhist_12-2) [***d***](#cite_ref-hashhist_12-3) [***e***](#cite_ref-hashhist_12-4) [***f***](#cite_ref-hashhist_12-5) [***g***](#cite_ref-hashhist_12-6) [***h***](#cite_ref-hashhist_12-7) [***i***](#cite_ref-hashhist_12-8) [***j***](#cite_ref-hashhist_12-9) [***k***](#cite_ref-hashhist_12-10) [***l***](#cite_ref-hashhist_12-11) Mehta, Dinesh P.; Mehta, Dinesh P.; Sahni, Sartaj, eds. (2004). *Handbook of Data Structures and Applications*. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1201/9781420035179](https://doi.org/10.1201%2F9781420035179). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-429-14701-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-429-14701-2).
12. **[^](#cite_ref-13)** Cormen, T. H.; Leiserson, C. E.; [Rivest, R. L.](https://en.wikipedia.org/wiki/Ronald_Rivest); Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). [MIT Press](https://en.wikipedia.org/wiki/MIT_Press).
13. ^ [***a***](#cite_ref-cornell08_14-0) [***b***](#cite_ref-cornell08_14-1) [***c***](#cite_ref-cornell08_14-2) [***d***](#cite_ref-cornell08_14-3) [***e***](#cite_ref-cornell08_14-4) [***f***](#cite_ref-cornell08_14-5) [***g***](#cite_ref-cornell08_14-6) Mayers, Andrew (2008). ["CS 312: Hash tables and amortized analysis"](https://www.cs.cornell.edu/courses/cs312/2008sp/lectures/lec20.html). [Cornell University](https://en.wikipedia.org/wiki/Cornell_University), Department of Computer Science. [Archived](https://web.archive.org/web/20210426052033/http://www.cs.cornell.edu/courses/cs312/2008sp/lectures/lec20.html) from the original on April 26, 2021. Retrieved October 26, 2021 – via cs.cornell.edu.
14. ^ [***a***](#cite_ref-plank_15-0) [***b***](#cite_ref-plank_15-1) 
    James S. Plank and Brad Vander Zanden.
    ["CS140 Lecture notes -- Hashing"](https://web.eecs.utk.edu/~bvanderz/teaching/cs140Sp15/Notes/Hashing/).
15. **[^](#cite_ref-16)** Maurer, W. D.; Lewis, T. G. (March 1975). "Hash Table Methods". *ACM Computing Surveys*. **7** (1): 5–19. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/356643.356645](https://doi.org/10.1145%2F356643.356645). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [17874775](https://api.semanticscholar.org/CorpusID:17874775).
16. ^ [***a***](#cite_ref-owo03_17-0) [***b***](#cite_ref-owo03_17-1) Owolabi, Olumide (February 2003). "Empirical studies of some hashing functions". *Information and Software Technology*. **45** (2): 109–112. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/S0950-5849(02)00174-X](https://doi.org/10.1016%2FS0950-5849%2802%2900174-X).
17. ^ [***a***](#cite_ref-Yi06_18-0) [***b***](#cite_ref-Yi06_18-1) Lu, Yi; Prabhakar, Balaji; Bonomi, Flavio (2006). *Perfect Hashing for Network Applications*. 2006 IEEE International Symposium on Information Theory. pp. 2774–2778. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/ISIT.2006.261567](https://doi.org/10.1109%2FISIT.2006.261567). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [1-4244-0505-X](https://en.wikipedia.org/wiki/Special:BookSources/1-4244-0505-X). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [1494710](https://api.semanticscholar.org/CorpusID:1494710).
18. **[^](#cite_ref-CHD_19-0)** Belazzougui, Djamal; Botelho, Fabiano C.; Dietzfelbinger, Martin (2009). ["Hash, displace, and compress"](https://cmph.sourceforge.net/papers/esa09.pdf) (PDF). *Algorithms—ESA 2009: 17th Annual European Symposium, Copenhagen, Denmark, September 7–9, 2009, Proceedings*. [Lecture Notes in Computer Science](https://en.wikipedia.org/wiki/Lecture_Notes_in_Computer_Science). Vol. 5757. Berlin: Springer. pp. 682–693. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.568.130](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.568.130). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-642-04128-0\_61](https://doi.org/10.1007%2F978-3-642-04128-0_61). [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [2557794](https://mathscinet.ams.org/mathscinet-getitem?mr=2557794).
19. ^ [***a***](#cite_ref-cormenalgo01_20-0) [***b***](#cite_ref-cormenalgo01_20-1) [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ronald_L._Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2001). "Chapter 11: Hash Tables". [*Introduction to Algorithms*](https://en.wikipedia.org/wiki/Introduction_to_Algorithms) (2nd ed.). [Massachusetts Institute of Technology](https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-262-53196-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-262-53196-2).
20. **[^](#cite_ref-21)** 
    Stroustrup, Bjarne (1997). *The C++ Programming Language Third Edition*. Reading Massachusetts: Addison-Wesley. p. 503. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-201-88954-4](https://en.wikipedia.org/wiki/Special:BookSources/0-201-88954-4).
21. **[^](#cite_ref-chernoff_22-0)** [Pearson, Karl](https://en.wikipedia.org/wiki/Karl_Pearson) (1900). ["On the criterion that a given system of deviations from the probable in the case of a correlated system of variables is such that it can be reasonably supposed to have arisen from random sampling"](https://zenodo.org/record/1430618). *Philosophical Magazine*. Series 5. **50** (302): 157–175. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1080/14786440009463897](https://doi.org/10.1080%2F14786440009463897).
22. **[^](#cite_ref-plackett_23-0)** [Plackett, Robin](https://en.wikipedia.org/wiki/Robin_Plackett) (1983). "Karl Pearson and the Chi-Squared Test". *International Statistical Review*. **51** (1): 59–72. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2307/1402731](https://doi.org/10.2307%2F1402731). [JSTOR](https://en.wikipedia.org/wiki/JSTOR_(identifier)) [1402731](https://www.jstor.org/stable/1402731).
23. ^ [***a***](#cite_ref-:0_24-0) [***b***](#cite_ref-:0_24-1) Wang, Thomas (March 1997). ["Prime Double Hash Table"](https://web.archive.org/web/19990903133921/http://www.concentric.net/~Ttwang/tech/primehash.htm). Archived from [the original](https://www.concentric.net/~Ttwang/tech/primehash.htm) on September 3, 1999. Retrieved May 10, 2015.
24. **[^](#cite_ref-25)** Wegman, Mark N.; Carter, J.Lawrence (June 1981). ["New hash functions and their use in authentication and set equality"](https://doi.org/10.1016%2F0022-0000%2881%2990033-7). *Journal of Computer and System Sciences*. **22** (3): 265–279. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1981JCoSS..22..265W](https://ui.adsabs.harvard.edu/abs/1981JCoSS..22..265W). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0022-0000(81)90033-7](https://doi.org/10.1016%2F0022-0000%2881%2990033-7).
25. **[^](#cite_ref-26)** Demaine, Erik; Lind, Jeff (Spring 2003). ["Lecture 2"](https://courses.csail.mit.edu/6.897/spring03/scribe_notes/L2/lecture2.pdf) (PDF). *6.897: Advanced Data Structures. MIT Computer Science and Artificial Intelligence Laboratory*. [Archived](https://web.archive.org/web/20100615203901/http://courses.csail.mit.edu/6.897/spring03/scribe_notes/L2/lecture2.pdf) (PDF) from the original on June 15, 2010. Retrieved June 30, 2008.
26. ^ [***a***](#cite_ref-nick05_27-0) [***b***](#cite_ref-nick05_27-1) [***c***](#cite_ref-nick05_27-2) Culpepper, J. Shane; Moffat, Alistair (2005). "Enhanced Byte Codes with Restricted Prefix Properties". *String Processing and Information Retrieval*. Lecture Notes in Computer Science. Vol. 3772. pp. 1–12. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/11575832\_1](https://doi.org/10.1007%2F11575832_1). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-29740-6](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-29740-6).
27. **[^](#cite_ref-28)** [Willard, Dan E.](https://en.wikipedia.org/wiki/Dan_Willard) (2000). "Examining computational geometry, van Emde Boas trees, and hashing from the perspective of the fusion tree". *[SIAM Journal on Computing](https://en.wikipedia.org/wiki/SIAM_Journal_on_Computing)*. **29** (3): 1030–1049. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/S0097539797322425](https://doi.org/10.1137%2FS0097539797322425). [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [1740562](https://mathscinet.ams.org/mathscinet-getitem?mr=1740562)..
28. **[^](#cite_ref-29)** Askitis, Nikolas; Sinha, Ranjan (October 2010). "Engineering scalable, cache and space efficient tries for strings". *The VLDB Journal*. **19** (5): 633–660. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s00778-010-0183-9](https://doi.org/10.1007%2Fs00778-010-0183-9).
29. **[^](#cite_ref-30)** Askitis, Nikolas; Zobel, Justin (October 2005). "Cache-conscious Collision Resolution in String Hash Tables". *Proceedings of the 12th International Conference, String Processing and Information Retrieval (SPIRE 2005)*. Vol. 3772/2005. pp. 91–102. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/11575832\_11](https://doi.org/10.1007%2F11575832_11). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-29740-6](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-29740-6).
30. **[^](#cite_ref-31)** Askitis, Nikolas (2009). ["Fast and Compact Hash Tables for Integer Keys"](https://web.archive.org/web/20110216180225/http://crpit.com/confpapers/CRPITV91Askitis.pdf) (PDF). *Proceedings of the 32nd Australasian Computer Science Conference (ACSC 2009)*. Vol. 91. pp. 113–122. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-920682-72-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-920682-72-9). Archived from [the original](https://crpit.com/confpapers/CRPITV91Askitis.pdf) (PDF) on February 16, 2011. Retrieved June 13, 2010.
31. **[^](#cite_ref-tenenbaum90_32-0)** Tenenbaum, Aaron M.; Langsam, Yedidyah; Augenstein, Moshe J. (1990). *Data Structures Using C*. Prentice Hall. pp. 456–461, p. 472. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-13-199746-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-199746-2).
32. ^ [***a***](#cite_ref-Cuckoo_33-0) [***b***](#cite_ref-Cuckoo_33-1) [Pagh, Rasmus](https://en.wikipedia.org/wiki/Rasmus_Pagh); Rodler, Flemming Friche (2001). "Cuckoo Hashing". *Algorithms — ESA 2001*. Lecture Notes in Computer Science. Vol. 2161. pp. 121–133. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.25.4189](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.25.4189). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/3-540-44676-1\_10](https://doi.org/10.1007%2F3-540-44676-1_10). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-42493-2](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-42493-2).
33. ^ [***a***](#cite_ref-clrs_34-0) [***b***](#cite_ref-clrs_34-1) [***c***](#cite_ref-clrs_34-2) [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ron_Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2001), "11 Hash Tables", *[Introduction to Algorithms](https://en.wikipedia.org/wiki/Introduction_to_Algorithms)* (2nd ed.), [MIT Press](https://en.wikipedia.org/wiki/MIT_Press) and [McGraw-Hill](https://en.wikipedia.org/wiki/McGraw-Hill), pp. 221–252, [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-262-03293-7](https://en.wikipedia.org/wiki/Special:BookSources/0-262-03293-7).
34. ^ [***a***](#cite_ref-chen87_35-0) [***b***](#cite_ref-chen87_35-1) [***c***](#cite_ref-chen87_35-2) Vitter, Jeffery S.; Chen, Wen-Chin (1987). [*The design and analysis of coalesced hashing*](https://archive.org/details/designanalysisof0000vitt/). New York, United States: [Oxford University Press](https://en.wikipedia.org/wiki/Oxford_University_Press). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-19-504182-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-19-504182-8) – via [Archive.org](https://en.wikipedia.org/wiki/Archive.org).
35. **[^](#cite_ref-36)** [Pagh, Rasmus](https://en.wikipedia.org/wiki/Rasmus_Pagh); Rodler, Flemming Friche (2001). "Cuckoo Hashing". *Algorithms — ESA 2001*. Lecture Notes in Computer Science. Vol. 2161. pp. 121–133. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.25.4189](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.25.4189). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/3-540-44676-1\_10](https://doi.org/10.1007%2F3-540-44676-1_10). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-42493-2](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-42493-2).
36. ^ [***a***](#cite_ref-nir08_37-0) [***b***](#cite_ref-nir08_37-1) [***c***](#cite_ref-nir08_37-2) [***d***](#cite_ref-nir08_37-3) [***e***](#cite_ref-nir08_37-4) [***f***](#cite_ref-nir08_37-5) Herlihy, Maurice; Shavit, Nir; Tzafrir, Moran (2008). "Hopscotch Hashing". *Distributed Computing*. Lecture Notes in Computer Science. Vol. 5218. pp. 350–364. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-540-87779-0\_24](https://doi.org/10.1007%2F978-3-540-87779-0_24). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-540-87778-3](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-87778-3).
37. ^ [***a***](#cite_ref-waterloo86_38-0) [***b***](#cite_ref-waterloo86_38-1) Celis, Pedro (1986). [*Robin Hood Hashing*](https://cs.uwaterloo.ca/research/tr/1986/CS-86-14.pdf) (PDF). Ontario, Canada: [University of Waterloo](https://en.wikipedia.org/wiki/University_of_Waterloo), Dept. of Computer Science. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-315-29700-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-315-29700-5). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [14083698](https://search.worldcat.org/oclc/14083698). [Archived](https://web.archive.org/web/20211101071032/https://cs.uwaterloo.ca/research/tr/1986/CS-86-14.pdf) (PDF) from the original on November 1, 2021. Retrieved November 2, 2021.
38. **[^](#cite_ref-39)** Poblete, P. V.; Viola, A. (July 2019). ["Analysis of Robin Hood and Other Hashing Algorithms Under the Random Probing Model, With and Without Deletions"](https://doi.org/10.1017%2FS0963548318000408). *Combinatorics, Probability and Computing*. **28** (4): 600–617. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/S0963548318000408](https://doi.org/10.1017%2FS0963548318000408). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [125374363](https://api.semanticscholar.org/CorpusID:125374363).
39. **[^](#cite_ref-cornell14_40-0)** Clarkson, Michael (2014). ["Lecture 13: Hash tables"](https://www.cs.cornell.edu/courses/cs3110/2014fa/lectures/13/lec13.html). [Cornell University](https://en.wikipedia.org/wiki/Cornell_University), Department of Computer Science. [Archived](https://web.archive.org/web/20211007011300/https://www.cs.cornell.edu/courses/cs3110/2014fa/lectures/13/lec13.html) from the original on October 7, 2021. Retrieved November 1, 2021 – via cs.cornell.edu.
40. **[^](#cite_ref-41)** Gries, David (2017). ["JavaHyperText and Data Structure: Robin Hood Hashing"](https://www.cs.cornell.edu/courses/JavaAndDS/files/hashing_RobinHood.pdf) (PDF). [Cornell University](https://en.wikipedia.org/wiki/Cornell_University), Department of Computer Science. [Archived](https://web.archive.org/web/20210426051503/http://www.cs.cornell.edu/courses/JavaAndDS/files/hashing_RobinHood.pdf) (PDF) from the original on April 26, 2021. Retrieved November 2, 2021 – via cs.cornell.edu.
41. **[^](#cite_ref-indiana88_42-0)** Celis, Pedro (March 28, 1988). [*External Robin Hood Hashing*](https://legacy.cs.indiana.edu/ftp/techreports/TR246.pdf) (PDF) (Technical report). Bloomington, Indiana: [Indiana University](https://en.wikipedia.org/wiki/Indiana_University), Department of Computer Science. 246. [Archived](https://web.archive.org/web/20211103013505/https://legacy.cs.indiana.edu/ftp/techreports/TR246.pdf) (PDF) from the original on November 3, 2021. Retrieved November 2, 2021.
42. **[^](#cite_ref-43)** Goddard, Wayne (2021). ["Chapter C5: Hash Tables"](https://people.computing.clemson.edu/~goddard/texts/algor/C5.pdf) (PDF). [Clemson University](https://en.wikipedia.org/wiki/Clemson_University). pp. 15–16. Retrieved December 4, 2023.
43. **[^](#cite_ref-44)** Devadas, Srini; Demaine, Erik (February 25, 2011). ["Intro to Algorithms: Resizing Hash Tables"](https://courses.csail.mit.edu/6.006/spring11/rec/rec07.pdf) (PDF). [Massachusetts Institute of Technology](https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology), Department of Computer Science. [Archived](https://web.archive.org/web/20210507102944/https://courses.csail.mit.edu/6.006/spring11/rec/rec07.pdf) (PDF) from the original on May 7, 2021. Retrieved November 9, 2021 – via [MIT OpenCourseWare](https://en.wikipedia.org/wiki/MIT_OpenCourseWare).
44. **[^](#cite_ref-45)** Thareja, Reema (2014). "Hashing and Collision". *Data Structures Using C*. Oxford University Press. pp. 464–488. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-19-809930-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-19-809930-7).
45. ^ [***a***](#cite_ref-scott03_46-0) [***b***](#cite_ref-scott03_46-1) Friedman, Scott; Krishnan, Anand; Leidefrost, Nicholas (March 18, 2003). ["Hash Tables for Embedded and Real-time systems"](https://users.cs.northwestern.edu/~sef318/docs/hashtables.pdf) (PDF). *All Computer Science and Engineering Research*. [Washington University in St. Louis](https://en.wikipedia.org/wiki/Washington_University_in_St._Louis). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.7936/K7WD3XXV](https://doi.org/10.7936%2FK7WD3XXV). [Archived](https://web.archive.org/web/20210609163643/https://users.cs.northwestern.edu/~sef318/docs/hashtables.pdf) (PDF) from the original on June 9, 2021. Retrieved November 9, 2021 – via [Northwestern University](https://en.wikipedia.org/wiki/Northwestern_University), Department of Computer Science.
46. **[^](#cite_ref-47)** Litwin, Witold (1980). ["Linear hashing: A new tool for file and table addressing"](https://www.cs.cmu.edu/afs/cs.cmu.edu/user/christos/www/courses/826-resources/PAPERS+BOOK/linear-hashing.PDF) (PDF). *Proc. 6th Conference on Very Large Databases*. [Carnegie Mellon University](https://en.wikipedia.org/wiki/Carnegie_Mellon_University). pp. 212–223. [Archived](https://web.archive.org/web/20210506233325/http://www.cs.cmu.edu/afs/cs.cmu.edu/user/christos/www/courses/826-resources/PAPERS+BOOK/linear-hashing.PDF) (PDF) from the original on May 6, 2021. Retrieved November 10, 2021 – via cs.cmu.edu.
47. ^ [***a***](#cite_ref-dijk10_48-0) [***b***](#cite_ref-dijk10_48-1) Dijk, Tom Van (2010). ["Analysing and Improving Hash Table Performance"](https://www.tvandijk.nl/pdf/bscthesis.pdf) (PDF). [Netherlands](https://en.wikipedia.org/wiki/Netherlands): [University of Twente](https://en.wikipedia.org/wiki/University_of_Twente). [Archived](https://web.archive.org/web/20211106094558/http://www.tvandijk.nl/pdf/bscthesis.pdf) (PDF) from the original on November 6, 2021. Retrieved December 31, 2021.
48. **[^](#cite_ref-49)** 
    Baeza-Yates, Ricardo; Poblete, Patricio V. (1999). "Chapter 2: Searching". In Atallah (ed.). *Algorithms and Theory of Computation Handbook*. CRC Press. pp. 2–6. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0849326494](https://en.wikipedia.org/wiki/Special:BookSources/0849326494).
49. **[^](#cite_ref-50)** Lech Banachowski. ["Indexes and external sorting"](https://ghostarchive.org/archive/HW0hp). [pl:Polsko-Japońska Akademia Technik Komputerowych](https://pl.wikipedia.org/wiki/Polsko-Japo%C5%84ska_Akademia_Technik_Komputerowych). Archived from [the original](https://edux.pjwstk.edu.pl/mat/262/lec/rW9.htm) on March 26, 2022. Retrieved March 26, 2022.
50. **[^](#cite_ref-51)** Zhong, Liang; Zheng, Xueqian; Liu, Yong; Wang, Mengting; Cao, Yang (February 2020). "Cache hit ratio maximization in device-to-device communications overlaying cellular networks". *China Communications*. **17** (2): 232–238. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2020CComm..17b.232Z](https://ui.adsabs.harvard.edu/abs/2020CComm..17b.232Z). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.23919/jcc.2020.02.018](https://doi.org/10.23919%2Fjcc.2020.02.018). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [212649328](https://api.semanticscholar.org/CorpusID:212649328).
51. **[^](#cite_ref-52)** Bottommley, James (January 1, 2004). ["Understanding Caching"](https://www.linuxjournal.com/article/7105). [Linux Journal](https://en.wikipedia.org/wiki/Linux_Journal). [Archived](https://web.archive.org/web/20201204195114/https://www.linuxjournal.com/article/7105) from the original on December 4, 2020. Retrieved April 16, 2022.
52. **[^](#cite_ref-53)** Jill Seaman (2014). ["Set & Hash Tables"](https://web.archive.org/web/20220401134706/https://userweb.cs.txstate.edu/~js236/201412/cs5301/week13.pdf) (PDF). [Texas State University](https://en.wikipedia.org/wiki/Texas_State_University). Archived from the original on April 1, 2022. Retrieved March 26, 2022.`{{cite web}}`: CS1 maint: bot: original URL status unknown ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_bot:_original_URL_status_unknown))
53. **[^](#cite_ref-54)** ["Transposition Table - Chessprogramming wiki"](https://www.chessprogramming.org/Transposition_Table). *chessprogramming.org*. [Archived](https://web.archive.org/web/20210214110941/https://www.chessprogramming.org/Transposition_Table) from the original on February 14, 2021. Retrieved May 1, 2020.
54. **[^](#cite_ref-55)** ["JavaScript data types and data structures - JavaScript | MDN"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#objects). *developer.mozilla.org*. Retrieved July 24, 2022.
55. **[^](#cite_ref-56)** ["Map - JavaScript | MDN"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). *developer.mozilla.org*. June 20, 2023. Retrieved July 15, 2023.
56. **[^](#cite_ref-57)** ["Programming language C++ - Technical Specification"](https://web.archive.org/web/20220121061142/http://www.open-std.org/JTC1/SC22/WG21/docs/papers/2013/n3690.pdf) (PDF). [International Organization for Standardization](https://en.wikipedia.org/wiki/International_Organization_for_Standardization). pp. 812–813. Archived from [the original](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2013/n3690.pdf) (PDF) on January 21, 2022. Retrieved February 8, 2022.
57. **[^](#cite_ref-58)** ["The Go Programming Language Specification"](https://go.dev/ref/spec#Map_types). *go.dev*. Retrieved January 1, 2023.
58. **[^](#cite_ref-59)** ["Lesson: Implementations (The Java™ Tutorials > Collections)"](https://docs.oracle.com/javase/tutorial/collections/implementations/index.html). *docs.oracle.com*. [Archived](https://web.archive.org/web/20170118041252/https://docs.oracle.com/javase/tutorial/collections/implementations/index.html) from the original on January 18, 2017. Retrieved April 27, 2018.
59. **[^](#cite_ref-60)** Zhang, Juan; Jia, Yunwei (2020). ["Redis rehash optimization based on machine learning"](https://doi.org/10.1088%2F1742-6596%2F1453%2F1%2F012048). *[Journal of Physics: Conference Series](https://en.wikipedia.org/wiki/Journal_of_Physics:_Conference_Series)*. **1453** (1): 3. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2020JPhCS1453a2048Z](https://ui.adsabs.harvard.edu/abs/2020JPhCS1453a2048Z). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1088/1742-6596/1453/1/012048](https://doi.org/10.1088%2F1742-6596%2F1453%2F1%2F012048). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [215943738](https://api.semanticscholar.org/CorpusID:215943738).
60. **[^](#cite_ref-61)** Jonan Scheffler (December 25, 2016). ["Ruby 2.4 Released: Faster Hashes, Unified Integers and Better Rounding"](https://blog.heroku.com/ruby-2-4-features-hashes-integers-rounding#hash-changes). *heroku.com*. [Archived](https://web.archive.org/web/20190703145530/https://blog.heroku.com/ruby-2-4-features-hashes-integers-rounding#hash-changes) from the original on July 3, 2019. Retrieved July 3, 2019.
61. **[^](#cite_ref-62)** ["doc.rust-lang.org"](https://doc.rust-lang.org/std/index.html). [Archived](https://web.archive.org/web/20221208155205/https://doc.rust-lang.org/std/index.html) from the original on December 8, 2022. Retrieved December 14, 2022.
62. **[^](#cite_ref-63)** ["HashSet Class (System.Collections.Generic)"](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1?view=net-7.0). *learn.microsoft.com*. Retrieved July 1, 2023.
63. **[^](#cite_ref-64)** dotnet-bot. ["Dictionary Class (System.Collections.Generic)"](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=net-8.0). *learn.microsoft.com*. Retrieved January 16, 2024.
64. **[^](#cite_ref-65)** ["VB.NET HashSet Example"](https://www.dotnetperls.com/hashset-vbnet). *Dot Net Perls*.