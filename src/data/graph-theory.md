# Graph theory

* Source: https://en.wikipedia.org/wiki/Graph_theory

---

A graph with 6 vertices and 7 edges

In [mathematics](https://en.wikipedia.org/wiki/Mathematics) and [computer science](https://en.wikipedia.org/wiki/Computer_science), **graph theory** is the study of [graphs](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)), which are [mathematical structures](https://en.wikipedia.org/wiki/Mathematical_structures) used to model pairwise relations between objects. A graph in this context is made up of [vertices](https://en.wikipedia.org/wiki/Vertex_(graph_theory)) (also called nodes or points) which are connected by [edges](https://en.wikipedia.org/wiki/Glossary_of_graph_theory_terms#edge) (also called arcs, links, or lines). A distinction is made between undirected graphs, where edges link two vertices symmetrically, and [directed graphs](https://en.wikipedia.org/wiki/Directed_graph), where edges link two vertices asymmetrically. Graphs are one of the principal objects of study in [discrete mathematics](https://en.wikipedia.org/wiki/Discrete_mathematics).

## Definition and etymology

A graph consists of vertices connected by edges. A graph is occasionally called:
* An undirected graph (top left), distinguishing it from a [directed graph](https://en.wikipedia.org/wiki/Directed_graph) that has an arrow on each edge (top right). Undirected and directed graphs can be merged into a [mixed graph](https://en.wikipedia.org/wiki/Mixed_graph) (bottom left); and
* A simple graph, distinguishing it from a [multigraph](https://en.wikipedia.org/wiki/Multigraph) (bottom right).

Graph theory is a branch of mathematics that studies [graphs](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)), a mathematical structure for modelling pairwise relations between objects. The term "graph" was introduced by [James Joseph Sylvester](https://en.wikipedia.org/wiki/James_Joseph_Sylvester) in a paper published in 1878 in *[Nature](https://en.wikipedia.org/wiki/Nature_(journal))*, where he drew an analogy between "quantic invariants" and "co-variants" of algebra and molecular diagrams.

The definition of a graph can vary, but one can understand that a graph is a structure that contains the vertices (also called nodes or points) and edges (also called arcs, links, or lines). Two vertices of an edge are called the endpoints. Occasionally, a graph is called an undirected graph, to distinguish it from a [directed graph](https://en.wikipedia.org/wiki/Directed_graph). A directed graph is a graph where each edge has an assignment direction known as [orientation](https://en.wikipedia.org/wiki/Orientation_(graph_theory)), designated with an arrow. A [mixed graph](https://en.wikipedia.org/wiki/Mixed_graph) can have edges that may be directed, and some may be undirected. A graph can also be called a simple graph, to distinguish it from a [multigraph](https://en.wikipedia.org/wiki/Multigraph). A multigraph allows many edges to have the same pair of endpoints, and it also allows an edge connect a vertex to itself, known as a [loop](https://en.wikipedia.org/wiki/Loop_(graph_theory)). A graph can have its edges assigned a number, which is known as the weight. Such a graph is called a weight graph.

## History

Map of 

[Königsberg](https://en.wikipedia.org/wiki/K%C3%B6nigsberg)

 from 1651 showing the layout of the 

[seven bridges](https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg)

, highlighting the 

[Pregel River](https://en.wikipedia.org/wiki/Pregel_River)

 (in blue) and the bridges (in lime). The problem lays the foundation of both graph theory and 

[topology](https://en.wikipedia.org/wiki/Topology)

.

In 1736, [Leonhard Euler](https://en.wikipedia.org/wiki/Leonhard_Euler) published a paper titled *Solutio Problematis ad Geometriam Situs Pertinentis* on the [Seven Bridges of Königsberg](https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg), which is regarded as the first paper in the history of graph theory. Euler's paper and [Alexandre-Théophile Vandermonde](https://en.wikipedia.org/wiki/Alexandre-Th%C3%A9ophile_Vandermonde)'s 1771 *Remarques sur les Problèmes de Situation* paper on the [knight's tour](https://en.wikipedia.org/wiki/Knight%27s_tour) carried on with the *analysis situs*, initiated by [Gottfried Wilhelm Leibniz](https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz). [Euler's characteristic](https://en.wikipedia.org/wiki/Euler%27s_characteristic) relating the number of edges, vertices, and faces of a convex polyhedron was studied and generalized by [Augustin-Louis Cauchy](https://en.wikipedia.org/wiki/Augustin-Louis_Cauchy) and [Simon Antoine Jean L'Huilier](https://en.wikipedia.org/wiki/Simon_Antoine_Jean_L%27Huilier), and represents the beginning of the branch of mathematics known as [topology](https://en.wikipedia.org/wiki/Topology).

More than one century after Euler's paper on the bridges of [Königsberg](https://en.wikipedia.org/wiki/K%C3%B6nigsberg), and while [Johann Benedict Listing](https://en.wikipedia.org/wiki/Johann_Benedict_Listing) was introducing the concept of topology, [Arthur Cayley](https://en.wikipedia.org/wiki/Arthur_Cayley) was led by an interest in particular analytical forms arising from [differential calculus](https://en.wikipedia.org/wiki/Differential_calculus) to study a particular class of graphs, the [trees](https://en.wikipedia.org/wiki/Tree_(graph_theory)). This study had many implications for theoretical [chemistry](https://en.wikipedia.org/wiki/Chemistry). The techniques he used mainly concern the [enumeration of graphs](https://en.wikipedia.org/wiki/Enumeration_of_graphs) with particular properties. Enumerative graph theory then arose from the results of Cayley and the fundamental results published by [Pólya](https://en.wikipedia.org/wiki/George_P%C3%B3lya) between 1935 and 1937. These were generalized by [Nicolaas Govert de Bruijn](https://en.wikipedia.org/wiki/Nicolaas_Govert_de_Bruijn) in 1959. Cayley linked his results on trees with contemporary studies of chemical composition. The fusion of ideas from mathematics with those from chemistry began what has become part of the standard terminology of graph theory.

The autonomous development of topology from 1860 to 1930 fertilized graph theory back through the works of [Camille Jordan](https://en.wikipedia.org/wiki/Camille_Jordan), [Kazimierz Kuratowski](https://en.wikipedia.org/wiki/Kazimierz_Kuratowski), and [Hassler Whitney](https://en.wikipedia.org/wiki/Hassler_Whitney). Another important factor in the common development of graph theory and topology came from the use of the techniques of modern algebra. The first example of such a use comes from the work of the physicist [Gustav Kirchhoff](https://en.wikipedia.org/wiki/Gustav_Kirchhoff), who published in 1845 his [Kirchhoff's circuit laws](https://en.wikipedia.org/wiki/Kirchhoff%27s_circuit_laws) for calculating the [voltage](https://en.wikipedia.org/wiki/Voltage) and [current](https://en.wikipedia.org/wiki/Electric_current) in [electric circuits](https://en.wikipedia.org/wiki/Electric_circuit).

The first textbook on graph theory was written by [Dénes Kőnig](https://en.wikipedia.org/wiki/D%C3%A9nes_K%C5%91nig), and published in 1936. Another book by [Frank Harary](https://en.wikipedia.org/wiki/Frank_Harary), published in 1969, was "considered the world over to be the definitive textbook on the subject", and enabled mathematicians, chemists, electrical engineers and social scientists to talk to each other. Harary donated all of the royalties to fund the [Pólya Prize](https://en.wikipedia.org/wiki/George_P%C3%B3lya_Prize).

One of the most famous problems in graph theory is the [four color problem](https://en.wikipedia.org/wiki/Four_color_problem): Is it true that any map drawn in the plane may have its regions colored with four colors, in such a way that any two regions having a common border have different colors? This problem was first posed by [Francis Guthrie](https://en.wikipedia.org/wiki/Francis_Guthrie) in 1852, and its first written record is in a letter of [Augustus De Morgan](https://en.wikipedia.org/wiki/Augustus_De_Morgan) addressed to [William Rowan Hamilton](https://en.wikipedia.org/wiki/William_Rowan_Hamilton) the same year. Many incorrect proofs have been proposed, including those by Augustin Cayley, [Alfred Kempe](https://en.wikipedia.org/wiki/Alfred_Kempe), and others. The study and the generalization of this problem by [Peter Tait](https://en.wikipedia.org/wiki/Peter_Tait_(physicist)), [Percy John Heawood](https://en.wikipedia.org/wiki/Percy_John_Heawood), [Frank P. Ramsey](https://en.wikipedia.org/wiki/Frank_P._Ramsey) and [Hadwiger](https://en.wikipedia.org/wiki/Hugo_Hadwiger) led to the study of the colorings of the graphs embedded on surfaces with arbitrary [genus](https://en.wikipedia.org/wiki/Genus_(mathematics)). Tait's reformulation generated a new class of problems, the *factorization problems*, particularly studied by [Petersen](https://en.wikipedia.org/wiki/Julius_Petersen) and [Dénes Kőnig](https://en.wikipedia.org/wiki/D%C3%A9nes_K%C5%91nig). The works of Ramsey on colorations, and more specially, the results obtained by [Pál Turán](https://en.wikipedia.org/wiki/P%C3%A1l_Tur%C3%A1n) in 1941, were at the origin of another branch of graph theory, known as [extremal graph theory](https://en.wikipedia.org/wiki/Extremal_graph_theory).

The four-color problem remained unsolved for more than a century. In 1969, [Heinrich Heesch](https://en.wikipedia.org/wiki/Heinrich_Heesch) published a method for solving the problem using computers. A computer-aided proof produced in 1976 by [Kenneth Appel](https://en.wikipedia.org/wiki/Kenneth_Appel) and [Wolfgang Haken](https://en.wikipedia.org/wiki/Wolfgang_Haken) makes fundamental use of the notion of "discharging" developed by Heesch. The proof involved checking the properties of 1,936 configurations by computer, and was not fully accepted at the time due to its complexity. A simpler proof considering only 633 configurations was given twenty years later by [Robertson](https://en.wikipedia.org/wiki/Neil_Robertson_(mathematician)), [Seymour](https://en.wikipedia.org/wiki/Paul_Seymour_(mathematician)), [Sanders](https://en.wikipedia.org/wiki/Daniel_P._Sanders) and [Thomas](https://en.wikipedia.org/wiki/Robin_Thomas_(mathematician)).

The introduction of [probabilistic methods](https://en.wikipedia.org/wiki/Probabilistic_method) in graph theory, especially in the study of [Erdős](https://en.wikipedia.org/wiki/Paul_Erd%C5%91s) and [Rényi](https://en.wikipedia.org/wiki/Alfr%C3%A9d_R%C3%A9nyi) of the asymptotic probability of graph connectivity, gave rise to yet another branch, known as [random graph theory](https://en.wikipedia.org/wiki/Random_graph), which has been a fruitful source of graph-theoretic results.

## Subareas

### Topological graph theory

[Topological graph theory](https://en.wikipedia.org/wiki/Topological_graph_theory) deals with the study of graphs as [topological spaces](https://en.wikipedia.org/wiki/Topological_space). The graph in a topology is a set of [simplexes](https://en.wikipedia.org/wiki/Simplex) that is called the [simplicial one-dimensional complex](https://en.wikipedia.org/wiki/Simplicial_complex). This subarea studies the [embedding](https://en.wikipedia.org/wiki/Graph_embedding) (or imbedding) of a graph in [surface](https://en.wikipedia.org/wiki/Surface_(topology)) and [linkless embedding](https://en.wikipedia.org/wiki/Linkless_embedding), [graph minors](https://en.wikipedia.org/wiki/Graph_minor), [crossing number](https://en.wikipedia.org/wiki/Crossing_number_(graph_theory)), map coloring, and [voltage graph](https://en.wikipedia.org/wiki/Voltage_graph).

The embedding of a graph in a surface is the representation of a graph in which the points are associated with the vertices and simple arcs with edges in a surface. The endpoints are associated with an edge, and the points with the end vertices. No arcs include points associated with other vertices, and two arcs never intersect at a point that is interior to either of the arcs. The graph embedding can be generalized into the linkless embedding, whereby no two cycles of the graph are linked in three-dimensional Euclidean space, and a [book](https://en.wikipedia.org/wiki/Book_embedding), a collection of [half-planes](https://en.wikipedia.org/wiki/Half-space_(geometry)) all having the same line as their boundary.

The graph is said to be minor if it can be formed from another graph by deleting vertices and edges, and by [edge-contraction](https://en.wikipedia.org/wiki/Edge_contraction). The earliest result of the graph minor theory is from [Wagner's theorem](https://en.wikipedia.org/wiki/Wagner%27s_theorem), stating that a finite graph is planar if and only if its minor includes neither the [complete graph on five vertices](https://en.wikipedia.org/wiki/Complete_graph) 

K

5

{\displaystyle K_{5}}

 nor the [utility graph](https://en.wikipedia.org/wiki/Utility_graph). A related result is the [Robertson–Seymour theorem](https://en.wikipedia.org/wiki/Robertson%E2%80%93Seymour_theorem), implying the existence of [forbidden minor](https://en.wikipedia.org/wiki/Forbidden_minor) for every property of graphs preserved by deletions and edge contractions.

The crossing number tells the minimum number of crossing edges of a graph. This study originated from a Hungarian mathematician [Pál Turán](https://en.wikipedia.org/wiki/P%C3%A1l_Tur%C3%A1n) who [asked for a factory plan that minimized the number of crossings between tracks connecting brick kilns to storage sites](https://en.wikipedia.org/wiki/Tur%C3%A1n%27s_brick_factory_problem). This problem can be formalized as asking for the crossing number of a [complete bipartite graph](https://en.wikipedia.org/wiki/Complete_bipartite_graph).

A [graph coloring](https://en.wikipedia.org/wiki/Graph_coloring) is a methodical assignment of labelling the elements of a graph, which is traditionally called [colors](https://en.wikipedia.org/wiki/Color). In coloring, no two adjacent elements have the same color. It requires the minimum number of colors, which is known as the chromatic number. [Four-color theorem](https://en.wikipedia.org/wiki/Four-color_theorem) stated that no more than four colors are required to color the regions of any map so that no two adjacent regions have the same color; that is, no two regions share a common boundary. This theorem is stronger than [five-color theorem](https://en.wikipedia.org/wiki/Five-color_theorem). Relatedly, [Earth–Moon problem](https://en.wikipedia.org/wiki/Earth%E2%80%93Moon_problem) is known for the nowadays open problem on extension of the planar map coloring problem, solved by the four-color theorem.

A voltage graph is a directed graph whose edges are labelled invertibly by elements of a [group](https://en.wikipedia.org/wiki/Group_(mathematics)). This graph concisely specifies the [derived graph](https://en.wikipedia.org/wiki/Derived_graph). It is also a common way to form a [covering graph](https://en.wikipedia.org/wiki/Covering_graph).

### Algebraic graph theory

Algebraic graph theory uses group theory to study the symmetry of a graph. For example, 

[Petersen graph](https://en.wikipedia.org/wiki/Petersen_graph)

 is high-symmetrical, known for 

[vertex-transitive](https://en.wikipedia.org/wiki/Vertex-transitive_graph)

, 

[symmetric](https://en.wikipedia.org/wiki/Symmetric_graph)

, 

[distance-transitive](https://en.wikipedia.org/wiki/Distance-transitive_graph)

, and 

[distance-regular](https://en.wikipedia.org/wiki/Distance-regular_graph)

. Its 

[automorphism group](https://en.wikipedia.org/wiki/Graph_automorphism)

 has 120 elements and 

[symmetric group](https://en.wikipedia.org/wiki/Symmetric_group)

S

5

{\displaystyle S_{5}}

.

[Algebraic graph theory](https://en.wikipedia.org/wiki/Algebraic_graph_theory) is the study of graph theory that involves major branches of [algebra](https://en.wikipedia.org/wiki/Algebra). Major branches of algebra that are used are [linear algebra](https://en.wikipedia.org/wiki/Linear_algebra) and [group theory](https://en.wikipedia.org/wiki/Group_theory).

A study of graph theory using linear algebra is called [spectral graph theory](https://en.wikipedia.org/wiki/Spectral_graph_theory). This study focuses on [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix), a matrix that represents the graph, and its [spectrum](https://en.wikipedia.org/wiki/Eigendecomposition_of_a_matrix), which focuses on the [characteristic polynomial](https://en.wikipedia.org/wiki/Characteristic_polynomial), [eigenvalues, and eigenvectors](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors) of the given adjacency matrix. It also focuses on the [Laplacian matrix](https://en.wikipedia.org/wiki/Laplacian_matrix) of a graph, which involves the [degree matrix](https://en.wikipedia.org/wiki/Degree_matrix) (a [diagonal matrix](https://en.wikipedia.org/wiki/Diagonal_matrix) that represents the degree of a vertex) and the adjacency matrix.

Group theory, particularly [automorphism groups](https://en.wikipedia.org/wiki/Automorphism_group) and [geometric group theory](https://en.wikipedia.org/wiki/Geometric_group_theory), focuses on various families of graphs based on symmetry in algebraic graph theory. Such a symmetry includes [symmetric graphs](https://en.wikipedia.org/wiki/Symmetric_graph), [vertex-transitive graphs](https://en.wikipedia.org/wiki/Vertex-transitive_graph), [edge-transitive graphs](https://en.wikipedia.org/wiki/Edge-transitive_graph), [distance-transitive graphs](https://en.wikipedia.org/wiki/Distance-transitive_graph), [distance-regular graphs](https://en.wikipedia.org/wiki/Distance-regular_graph), and [strongly regular graphs](https://en.wikipedia.org/wiki/Strongly_regular_graph). [Frucht's theorem](https://en.wikipedia.org/wiki/Frucht%27s_theorem) states that every [finite group](https://en.wikipedia.org/wiki/Finite_group) is the group of symmetries of a finite undirected graph, or more strongly, there exist infinitely many non-isomorphic simple connected graphs such that the automorphism group of each of them is isomorphic to a finite group.

Algebraic graph theory also studies the algebraic [invariants](https://en.wikipedia.org/wiki/Graph_invariant), [chromatic polynomial](https://en.wikipedia.org/wiki/Chromatic_polynomial), [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial) of a graph, and [knot invariant](https://en.wikipedia.org/wiki/Knot_invariant). A graph invariant is a property of graphs that depends only on the abstract structure, instead of labellings or drawings of the graph. A chromatic polynomial is a polynomial that counts the number of graph colorings as a function of the number of colors. The Tutte polynomial is a two-variable polynomial on graph connectivity.

### Geometric graph theory

[Geometric graph theory](https://en.wikipedia.org/wiki/Geometric_graph_theory) focuses on combinatorial and geometric properties of a graph that is drawn in a plane with straight-line or continuous curved edges in [Euclidean space](https://en.wikipedia.org/wiki/Euclidean_space). As part of [discrete geometry](https://en.wikipedia.org/wiki/Discrete_geometry) and [computational geometry](https://en.wikipedia.org/wiki/Computational_geometry), geometric graph theory studies [planar graphs](https://en.wikipedia.org/wiki/Planar_graph), relationship to [higher-dimensional convex polytopes](https://en.wikipedia.org/wiki/Polytope), [intersection](https://en.wikipedia.org/wiki/Intersection) of geometrical shaped sets, and other geometries' subareas of [incidence geometry](https://en.wikipedia.org/wiki/Incidence_geometry) and [projective geometry](https://en.wikipedia.org/wiki/Projective_geometry).

A planar graph wherein its vertices are embedded as points, and its edges are non-crossing [line segments](https://en.wikipedia.org/wiki/Line_segment) in the [Euclidean plane](https://en.wikipedia.org/wiki/Euclidean_plane) is called [planar straight-line graph](https://en.wikipedia.org/wiki/Planar_straight-line_graph). Any planar graph can be represented as a planar straight-line graph by [Fáry's theorem](https://en.wikipedia.org/wiki/F%C3%A1ry%27s_theorem). The planar straight-line graph is the special case of a Euclidean graph. The Euclidean graph allows its edges to have the length of the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) between its endpoints. Its notions are the [Euclidean minimum spanning tree](https://en.wikipedia.org/wiki/Euclidean_minimum_spanning_tree) on minimizing the total length of the segments for finite points in any [Euclidean space](https://en.wikipedia.org/wiki/Euclidean_space), [Hadwiger–Nelson problem](https://en.wikipedia.org/wiki/Hadwiger%E2%80%93Nelson_problem) on asking for the minimum number of coloring plane such that no two points at a [unit distance](https://en.wikipedia.org/wiki/Unit_distance_graph) from each other have the same color, and [shortest path problem](https://en.wikipedia.org/wiki/Shortest_path_problem) on finding a path between two vertices in a graph that minimizes the sum of the assigned values of its edges.

A [visibility graph](https://en.wikipedia.org/wiki/Visibility_graph) is a graph whose vertices and edges are the point locations and visible connections, respectively. In a [simple polygon](https://en.wikipedia.org/wiki/Simple_polygon), where its edges are not self-intersecting and have no holes, the vertices of a visibility graph are connected by edges that represent the sides and diagonals of a polygon. The vertices are defined as the point locations. [Polyhedral graph](https://en.wikipedia.org/wiki/Polyhedral_graph) is an undirected graph that forms the vertices and edges of a three-dimensional [convex polyhedron](https://en.wikipedia.org/wiki/Convex_polyhedron). In order to achieve it, such a graph must meet the requirements of [Steinitz's theorem](https://en.wikipedia.org/wiki/Steinitz%27s_theorem), stating that every convex polyhedron is [3-vertex connected planar graph](https://en.wikipedia.org/wiki/Vertex_connectivity). The planar graph remains connected whenever any two of its vertices are removed.

An [intersection graph](https://en.wikipedia.org/wiki/Intersection_graph) is a graph in which each vertex is associated with a set and in which vertices are connected by edges whenever the corresponding sets have a nonempty [intersection](https://en.wikipedia.org/wiki/Intersection). Each vertex is represented as a set, and every two vertices are connected. Hence, the intersection graph of finite sets can be represented through the smallest number of required elements, known as the [intersection number](https://en.wikipedia.org/wiki/Intersection_number_(graph_theory)). The result graph can be geometric whenever the sets are geometrical objects. For instance, the intersection graph of line segments in one dimension is an [interval graph](https://en.wikipedia.org/wiki/Interval_graph). The intersection graph of unit disks in the plane is a [unit disk graph](https://en.wikipedia.org/wiki/Unit_disk_graph). The intersection of a [circle packing](https://en.wikipedia.org/wiki/Circle_packing) is a [coin graph](https://en.wikipedia.org/wiki/Coin_graph), where a vertex and an edge represent a circle and every pair of tangent circles; by Koebe–Andreev–Thurston theorem, the intersection graphs of non-crossing circles are exactly the planar graphs. [Scheinerman's theorem](https://en.wikipedia.org/wiki/Scheinerman%27s_conjecture) states that every planar graph can be represented as the intersection graph of line segments in the plane.

The [Levi graph](https://en.wikipedia.org/wiki/Levi_graph) is a [bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph) that associates to the [incidence structure](https://en.wikipedia.org/wiki/Incidence_structure) and [projective configuration](https://en.wikipedia.org/wiki/Configuration_(geometry)).

By applying to [information visualization](https://en.wikipedia.org/wiki/Information_visualization), this creates another subarea of graph theory that is known as [graph drawing](https://en.wikipedia.org/wiki/Graph_drawing), which visualizes a graph depiction. Frequently drawn as node–link diagrams, the vertices of a graph are represented as disks, boxes, or textual labels, and the edges are represented as line segments, polylines, or curves in the Euclidean plane. Many definitions for graph drawings based on quality measures include the crossing number, [area](https://en.wikipedia.org/wiki/Area_(graph_drawing)), symmetry display on finding the problem of a graph's group automorphism, [bend minimization](https://en.wikipedia.org/wiki/Bend_minimization), [angular resolution](https://en.wikipedia.org/wiki/Angular_resolution_(graph_drawing)), and [slope number](https://en.wikipedia.org/wiki/Slope_number). Tools for graph drawings are the circle packing, the intersection graph, and other visualizations of the adjacency matrix.

### Extremal graph theory

Extremal graph theory studies the maximum number of a graph's edges, known as the extremal number. The origin is from Mantel's theorem on finding the extremal number of a 

[triangle-free graph](https://en.wikipedia.org/wiki/Triangle-free_graph)

 (illustrated), which is 

⌊ ⌊ 

n

2

/

4
⌋ ⌋ 

{\displaystyle \lfloor n^{2}/4\rfloor }

.

[Extremal graph theory](https://en.wikipedia.org/wiki/Extremal_graph_theory) is a branch of mathematics at the intersection of [extremal combinatorics](https://en.wikipedia.org/wiki/Extremal_combinatorics) and graph theory. This area studies the maximum number of a graph's edges, known as the extremal number. The subarea's milestone originated from Mantel's theorem on the extremal number of a [triangle-free graph](https://en.wikipedia.org/wiki/Triangle-free_graph). [Turán's theorem](https://en.wikipedia.org/wiki/Tur%C3%A1n%27s_theorem) extended Mantel's theorem for any undirected graph that does not have a complete subgraph of a given size. Turán's theorem is generalized by [Erdős–Stone theorem](https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Stone_theorem), which is occasionally known as the "fundamental theorem of extremal graph theory".

Extremal graph theory also studies [forbidden subgraph problem](https://en.wikipedia.org/wiki/Forbidden_subgraph_problem), [homomorphism density](https://en.wikipedia.org/wiki/Homomorphism_density), and [Szemerédi regularity lemma](https://en.wikipedia.org/wiki/Szemer%C3%A9di_regularity_lemma). The forbidden subgraphs problem suggests finding the extremal number of a graph with 

n

{\displaystyle n}

 vertices such that it does not have a subgraph that is [isomorphic](https://en.wikipedia.org/wiki/Graph_isomorphism) to the graph. A [homomorphism density](https://en.wikipedia.org/wiki/Homomorphism_density) is a parameter that involves the [graph homomorphism](https://en.wikipedia.org/wiki/Graph_homomorphism). The density may refer to the probability that a map from the vertices of a graph to the vertices of another one chosen uniformly at random is a graph homomorphism. Being homomorphic means there exists a mapping between two graphs that respects their structure, or equivalently, a function between the vertex sets of two graphs that maps adjacent vertices to adjacent vertices. Szemerédi's regularity lemma states that a graph can be partitioned into a bounded number of parts so that the edges between parts are 

ε ε 

{\displaystyle \varepsilon }

-regular.

### Theory of random graph

The theory of [random graph](https://en.wikipedia.org/wiki/Random_graph) focuses on graphs using [probabilistic method](https://en.wikipedia.org/wiki/Probabilistic_method). The subarea was founded by Hungarian mathematicians [Paul Erdős](https://en.wikipedia.org/wiki/Paul_Erd%C5%91s) and [Alfréd Rényi](https://en.wikipedia.org/wiki/Alfr%C3%A9d_R%C3%A9nyi), whose modelling generates random graphs, known as [Erdős–Rényi model](https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model).

[Random minimum spanning tree](https://en.wikipedia.org/wiki/Random_minimum_spanning_tree)

 on the same graph but with randomized weights

This subarea studies the [random tree](https://en.wikipedia.org/wiki/Random_tree). A [tree](https://en.wikipedia.org/wiki/Tree_(graph_theory)) is an undirected graph where every pair of vertices is connected by exactly one [path](https://en.wikipedia.org/wiki/Path_(graph_theory)). Therefore, a random tree is a tree that is formed by a [stochastic process](https://en.wikipedia.org/wiki/Stochastic_process). Many types of random trees include:

* [Uniform spanning tree](https://en.wikipedia.org/wiki/Uniform_spanning_tree) is a [spanning tree](https://en.wikipedia.org/wiki/Spanning_tree) of a given graph in which each different tree is [equally likely to be selected](https://en.wikipedia.org/wiki/Discrete_uniform_distribution). Being a spanning tree means that a subgraph is a tree that includes all of the vertices of a graph. The uniform spanning tree can be generated by using the method of random simple path known as the [loop-erased random walk](https://en.wikipedia.org/wiki/Loop-erased_random_walk), of taking a random walk on the given graph and erasing the cycles created by this walk.
* [Branching process](https://en.wikipedia.org/wiki/Branching_process), a model of a population in which each individual has a random number of children
* [Brownian tree](https://en.wikipedia.org/wiki/Brownian_tree), a fractal tree structure created by diffusion-limited aggregation processes
* [Random binary tree](https://en.wikipedia.org/wiki/Random_binary_tree) is a [binary tree](https://en.wikipedia.org/wiki/Binary_tree) selected at random from some [probability distribution](https://en.wikipedia.org/wiki/Probability_distribution) on binary trees. This includes trees formed by random insertion orders, and trees that are uniformly distributed with a given number of nodes.
* [Random forest](https://en.wikipedia.org/wiki/Random_forest), a machine-learning classifier based on choosing random subsets of variables for each tree and using the most frequent tree output as the overall classification.
* [Random minimal spanning tree](https://en.wikipedia.org/wiki/Random_minimal_spanning_tree) is a spanning tree of a graph formed by choosing random edge weights and using the [minimum spanning tree](https://en.wikipedia.org/wiki/Minimum_spanning_tree) for those weights.
* [Random recursive tree](https://en.wikipedia.org/wiki/Random_recursive_tree), increasingly labelled trees, which can be generated using a simple stochastic growth rule.
* [Rapidly exploring random tree](https://en.wikipedia.org/wiki/Rapidly_exploring_random_tree), a fractal space-filling pattern used as a data structure for searching high-dimensional spaces.
* [Treap](https://en.wikipedia.org/wiki/Treap) or randomized binary search tree, a data structure that uses random choices to simulate a random binary tree for non-random update sequences

### Graph enumeration

## Applications

The network graph formed by Wikipedia editors (edges) contributing to different Wikipedia language versions (vertices) during one month in summer 2013

Graphs can be used to model many types of relations and processes in physical, biological, social and information systems. Many practical problems can be represented by graphs. Emphasizing their application to real-world systems, the term *network* is sometimes defined to mean a graph in which attributes (e.g. names) are associated with the vertices and edges, and the subject that expresses and understands real-world systems as a network is called [network science](https://en.wikipedia.org/wiki/Network_science).

### Computer science

Within [computer science](https://en.wikipedia.org/wiki/Computer_science), '[causal](https://en.wikipedia.org/wiki/Cybernetics)' and 'non-causal' linked structures are graphs that are used to represent networks of communication, data organization, computational devices, the flow of computation, etc. For instance, the link structure of a [website](https://en.wikipedia.org/wiki/Website) can be represented by a directed graph, in which the vertices (nodes) represent web pages and directed edges represent [links](https://en.wikipedia.org/wiki/Hyperlink) from one page to another. A similar approach can be taken to problems in social media, travel, biology, computer chip design, mapping the progression of neuro-degenerative diseases, and many other fields. The development of [algorithms](https://en.wikipedia.org/wiki/Algorithm) to [handle graphs](https://en.wikipedia.org/wiki/List_of_algorithms#Graph_algorithms) is therefore of major interest in computer science. The [transformation of graphs](https://en.wikipedia.org/wiki/Graph_transformation) is often formalized and represented by [graph rewrite systems](https://en.wikipedia.org/wiki/Graph_rewriting). Complementary to [graph transformation](https://en.wikipedia.org/wiki/Graph_transformation) systems focusing on rule-based in-memory manipulation of graphs are [graph databases](https://en.wikipedia.org/wiki/Graph_database) geared towards [transaction](https://en.wikipedia.org/wiki/Database_transaction)-safe, [persistent](https://en.wikipedia.org/wiki/Persistence_(computer_science)) storing and querying of [graph-structured data](https://en.wikipedia.org/wiki/Graph_(data_structure)).

### Linguistics

Graph-theoretic methods, in various forms, have proven particularly useful in [linguistics](https://en.wikipedia.org/wiki/Linguistics), since natural language often lends itself well to discrete structure. Traditionally, [syntax](https://en.wikipedia.org/wiki/Syntax) and compositional semantics follow tree-based structures, whose expressive power lies in the [principle of compositionality](https://en.wikipedia.org/wiki/Principle_of_compositionality), modeled in a hierarchical graph. More contemporary approaches such as [head-driven phrase structure grammar](https://en.wikipedia.org/wiki/Head-driven_phrase_structure_grammar) model the syntax of natural language using [typed feature structures](https://en.wikipedia.org/wiki/Feature_structure), which are [directed acyclic graphs](https://en.wikipedia.org/wiki/Directed_acyclic_graph). 
Within [lexical semantics](https://en.wikipedia.org/wiki/Lexical_semantics), especially as applied to computers, modeling word meaning is easier when a given word is understood in terms of related words; [semantic networks](https://en.wikipedia.org/wiki/Semantic_network) are therefore important in [computational linguistics](https://en.wikipedia.org/wiki/Computational_linguistics). Still, other methods in phonology (e.g. [optimality theory](https://en.wikipedia.org/wiki/Optimality_theory), which uses [lattice graphs](https://en.wikipedia.org/wiki/Lattice_graph)) and morphology (e.g. finite-state morphology, using [finite-state transducers](https://en.wikipedia.org/wiki/Finite-state_transducer)) are common in the analysis of language as a graph. Indeed, the usefulness of this area of mathematics to linguistics has borne organizations such as [TextGraphs](http://www.textgraphs.org/), as well as various 'Net' projects, such as [WordNet](https://en.wikipedia.org/wiki/WordNet), [VerbNet](https://en.wikipedia.org/wiki/VerbNet), and others.

### Physics and chemistry

Graph theory is also used to study molecules in [chemistry](https://en.wikipedia.org/wiki/Chemistry) and [physics](https://en.wikipedia.org/wiki/Physics). In [condensed matter physics](https://en.wikipedia.org/wiki/Condensed_matter_physics), the three-dimensional structure of complicated simulated atomic structures can be studied quantitatively by gathering statistics on graph-theoretic properties related to the topology of the atoms. Also, "the [Feynman graphs and rules of calculation](https://en.wikipedia.org/wiki/Feynman_diagram) summarize [quantum field theory](https://en.wikipedia.org/wiki/Quantum_field_theory) in a form in close contact with the experimental numbers one wants to understand." In chemistry a graph makes a natural model for a molecule, where vertices represent [atoms](https://en.wikipedia.org/wiki/Atom) and edges [bonds](https://en.wikipedia.org/wiki/Chemical_bond). This approach is especially used in computer processing of molecular structures, ranging from [chemical editors](https://en.wikipedia.org/wiki/Molecule_editor) to database searching. In [statistical physics](https://en.wikipedia.org/wiki/Statistical_physics), graphs can represent local connections between interacting parts of a system, as well as the dynamics of a physical process on such
systems. Similarly, in [computational neuroscience](https://en.wikipedia.org/wiki/Computational_neuroscience) graphs can be used to represent functional connections between brain areas that interact to give rise to various cognitive processes, where the vertices represent different areas of the brain and the edges represent the connections between those areas. Graph theory plays an important role in electrical modeling of electrical networks, here, weights are associated with resistance of the wire segments to obtain electrical properties of network structures. Graphs are also used to represent the micro-scale channels of [porous media](https://en.wikipedia.org/wiki/Porous_medium), in which the vertices represent the pores and the edges represent the smaller channels connecting the pores. [Chemical graph theory](https://en.wikipedia.org/wiki/Chemical_graph_theory) uses the [molecular graph](https://en.wikipedia.org/wiki/Molecular_graph) as a means to model molecules.
Graphs and networks are excellent models to study and understand phase transitions and critical phenomena. Removal of nodes or edges leads to a critical transition where the network breaks into small clusters which is studied as a phase transition. This breakdown is studied via [percolation theory](https://en.wikipedia.org/wiki/Percolation_theory).

### Social sciences

Graph theory in sociology: 

[Moreno](https://en.wikipedia.org/wiki/Jacob_L._Moreno)

[Sociogram](https://en.wikipedia.org/wiki/Sociogram)

 (1953).

Graph theory is also widely used in [sociology](https://en.wikipedia.org/wiki/Sociology) as a way, for example, to [measure actors' prestige](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon) or to explore [rumor spreading](https://en.wikipedia.org/wiki/Rumor_spread_in_social_network), notably through the use of [social network analysis](https://en.wikipedia.org/wiki/Social_network_analysis) software. Under the umbrella of social networks are many different types of graphs. Acquaintanceship and friendship graphs describe whether people know each other. Influence graphs model whether certain people can influence the behavior of others. Finally, collaboration graphs model whether two people work together in a particular way, such as acting in a movie together.

### Biology and ecology

Likewise, graph theory is useful in [biology](https://en.wikipedia.org/wiki/Biology) and conservation efforts where a vertex can represent regions where certain species exist (or inhabit) and the edges represent migration paths or movement between the regions. This information is important when looking at breeding patterns or tracking the spread of disease, parasites or how changes to the movement can affect other species.

Graphs are also commonly used in [molecular biology](https://en.wikipedia.org/wiki/Molecular_biology) and [genomics](https://en.wikipedia.org/wiki/Genomics) to model and analyze datasets with complex relationships. For example, graph-based methods are often used to 'cluster' cells together into cell-types in [single-cell transcriptome analysis](https://en.wikipedia.org/wiki/Single-cell_analysis#Transcriptomics). Another use is to model genes or proteins in a [pathway](https://en.wikipedia.org/wiki/Biological_pathway) and study the relationships between them, such as metabolic pathways and gene regulatory networks. Evolutionary trees, ecological networks, and hierarchical clustering of gene expression patterns are also represented as graph structures.

Graph theory is also used in [connectomics](https://en.wikipedia.org/wiki/Connectomics); nervous systems can be seen as a graph, where the nodes are neurons and the edges are the connections between them.

### Other topics

A graph structure can be extended by assigning a weight to each edge of the graph. Graphs with weights, or [weighted graphs](https://en.wikipedia.org/wiki/Weighted_graph), are used to represent structures in which pairwise connections have some numerical values. For example, if a graph represents a road network, the weights could represent the length of each road. There may be several weights associated with each edge, including distance (as in the previous example), travel time, or monetary cost. Such weighted graphs are commonly used to program GPS's, and travel-planning search engines that compare flight times and costs.

## Representation

A graph is an abstraction of relationships that emerge in nature; hence, it cannot be coupled to a certain representation. The way it is represented depends on the degree of convenience such representation provides for a certain application. The most common representations are the visual, in which, usually, vertices are drawn and connected by edges, and the tabular, in which rows of a table provide information about the relationships between the vertices within the graph.

### Visual: Graph drawing

Graphs are usually represented visually by drawing a point or circle for every vertex, and drawing a line between two vertices if they are connected by an edge. If the graph is directed, the direction is indicated by drawing an arrow. If the graph is weighted, the weight is added on the arrow.

A graph drawing should not be confused with the graph itself (the abstract, non-visual structure) as there are several ways to structure the graph drawing. All that matters is which vertices are connected to which others by how many edges and not the exact layout. In practice, it is often difficult to decide if two drawings represent the same graph. Depending on the problem domain some layouts may be better suited and easier to understand than others.

The pioneering work of [W. T. Tutte](https://en.wikipedia.org/wiki/W._T._Tutte) was very influential on the subject of graph drawing. Among other achievements, he introduced the use of linear algebraic methods to obtain graph drawings.

Graph drawing also can be said to encompass problems that deal with the [crossing number](https://en.wikipedia.org/wiki/Crossing_number_(graph_theory)) and its various generalizations. The crossing number of a graph is the minimum number of intersections between edges that a drawing of the graph in the plane must contain. For a [planar graph](https://en.wikipedia.org/wiki/Planar_graph), the crossing number is zero by definition. Drawings on surfaces other than the plane are also studied.

There are other techniques to visualize a graph away from vertices and edges, including [circle packings](https://en.wikipedia.org/wiki/Circle_packing_theorem), [intersection graph](https://en.wikipedia.org/wiki/Intersection_graph), and other visualizations of the [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix).

### Tabular: Graph data structures

The tabular representation lends itself well to computational applications. There are different ways to store graphs in a computer system. The [data structure](https://en.wikipedia.org/wiki/Data_structure) used depends on both the graph structure and the [algorithm](https://en.wikipedia.org/wiki/Algorithm) used for manipulating the graph. Theoretically one can distinguish between list and matrix structures but in concrete applications the best structure is often a combination of both. List structures are often preferred for [sparse graphs](https://en.wikipedia.org/wiki/Sparse_graph) as they have smaller memory requirements. [Matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)) structures on the other hand provide faster access for some applications but can consume huge amounts of memory. Implementations of sparse matrix structures that are efficient on modern parallel computer architectures are an object of current investigation.

List structures include the [edge list](https://en.wikipedia.org/wiki/Edge_list), an array of pairs of vertices, and the [adjacency list](https://en.wikipedia.org/wiki/Adjacency_list), which separately lists the neighbors of each vertex: Much like the edge list, each vertex has a list of which vertices it is adjacent to.

Matrix structures include the [incidence matrix](https://en.wikipedia.org/wiki/Incidence_matrix), a matrix of 0's and 1's whose rows represent vertices and whose columns represent edges, and the [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix), in which both the rows and columns are indexed by vertices. In both cases a 1 indicates two adjacent objects and a 0 indicates two non-adjacent objects. The [degree matrix](https://en.wikipedia.org/wiki/Degree_matrix) indicates the degree of vertices. The [Laplacian matrix](https://en.wikipedia.org/wiki/Laplacian_matrix) is a modified form of the adjacency matrix that incorporates information about the [degrees](https://en.wikipedia.org/wiki/Degree_(graph_theory)) of the vertices, and is useful in some calculations such as [Kirchhoff's theorem](https://en.wikipedia.org/wiki/Kirchhoff%27s_theorem) on the number of [spanning trees](https://en.wikipedia.org/wiki/Spanning_tree) of a graph.
The [distance matrix](https://en.wikipedia.org/wiki/Distance_matrix), like the adjacency matrix, has both its rows and columns indexed by vertices, but rather than containing a 0 or a 1 in each cell it contains the length of a [shortest path](https://en.wikipedia.org/wiki/Shortest_path) between two vertices.

## Problems

### Enumeration

There is a large literature on [graphical enumeration](https://en.wikipedia.org/wiki/Graphical_enumeration): the problem of counting graphs meeting specified conditions. Some of this work is found in Harary and Palmer (1973).

### Subgraphs, induced subgraphs, and minors

A common problem, called the [subgraph isomorphism problem](https://en.wikipedia.org/wiki/Subgraph_isomorphism_problem), is finding a fixed graph as a [subgraph](https://en.wikipedia.org/wiki/Glossary_of_graph_theory#Subgraphs) in a given graph. One reason to be interested in such a question is that many [graph properties](https://en.wikipedia.org/wiki/Graph_properties) are *hereditary* for subgraphs, which means that a graph has the property if and only if all subgraphs have it too.
Finding maximal subgraphs of a certain kind is often an [NP-complete problem](https://en.wikipedia.org/wiki/NP-complete_problem). For example:

* Finding the largest complete subgraph is called the [clique problem](https://en.wikipedia.org/wiki/Clique_problem) (NP-complete).

One special case of subgraph isomorphism is the [graph isomorphism problem](https://en.wikipedia.org/wiki/Graph_isomorphism_problem). It asks whether two graphs are isomorphic. It is not known whether this problem is NP-complete, nor whether it can be solved in polynomial time.

A similar problem is finding [induced subgraphs](https://en.wikipedia.org/wiki/Induced_subgraph) in a given graph. Again, some important graph properties are hereditary with respect to induced subgraphs, which means that a graph has a property if and only if all induced subgraphs also have it. Finding maximal induced subgraphs of a certain kind is also often NP-complete. For example:

* Finding the largest edgeless induced subgraph or [independent set](https://en.wikipedia.org/wiki/Independent_set_(graph_theory)) is called the [independent set problem](https://en.wikipedia.org/wiki/Independent_set_problem) (NP-complete).

Still another such problem, the minor containment problem, is to find a fixed graph as a minor of a given graph. A [minor](https://en.wikipedia.org/wiki/Minor_(graph_theory)) or subcontraction of a graph is any graph obtained by taking a subgraph and contracting some (or no) edges. Many graph properties are hereditary for minors, which means that a graph has a property if and only if all minors have it too. For example, [Wagner's Theorem](https://en.wikipedia.org/wiki/Wagner%27s_theorem) states:

* A graph is [planar](https://en.wikipedia.org/wiki/Planar_graph) if it contains as a minor neither the [complete bipartite graph](https://en.wikipedia.org/wiki/Complete_bipartite_graph) *K*3,3 (see the [Three-cottage problem](https://en.wikipedia.org/wiki/Three-cottage_problem)) nor the complete graph *K*5.

A similar problem, the subdivision containment problem, is to find a fixed graph as a [subdivision](https://en.wikipedia.org/wiki/Subdivision_(graph_theory)) of a given graph. A [subdivision](https://en.wikipedia.org/wiki/Subdivision_(graph_theory)) or [homeomorphism](https://en.wikipedia.org/wiki/Homeomorphism_(graph_theory)) of a graph is any graph obtained by subdividing some (or no) edges. Subdivision containment is related to graph properties such as [planarity](https://en.wikipedia.org/wiki/Planarity_(graph_theory)). For example, [Kuratowski's Theorem](https://en.wikipedia.org/wiki/Kuratowski%27s_theorem) states:

* A graph is [planar](https://en.wikipedia.org/wiki/Planar_graph) if it contains as a subdivision neither the [complete bipartite graph](https://en.wikipedia.org/wiki/Complete_bipartite_graph) *K*3,3 nor the [complete graph](https://en.wikipedia.org/wiki/Complete_graph) *K*5.

Another problem in subdivision containment is the [Kelmans–Seymour conjecture](https://en.wikipedia.org/wiki/Kelmans%E2%80%93Seymour_conjecture):

* Every [5-vertex-connected](https://en.wikipedia.org/wiki/K-vertex-connected_graph) graph that is not [planar](https://en.wikipedia.org/wiki/Planar_graph) contains a [subdivision](https://en.wikipedia.org/wiki/Homeomorphism_(graph_theory)) of the 5-vertex [complete graph](https://en.wikipedia.org/wiki/Complete_graph) *K*5.

Another class of problems has to do with the extent to which various species and generalizations of graphs are determined by their *point-deleted subgraphs*. For example:

* The [reconstruction conjecture](https://en.wikipedia.org/wiki/Reconstruction_conjecture)

### Graph coloring

Many problems and theorems in graph theory have to do with various ways of coloring graphs. Typically, one is interested in coloring a graph so that no two adjacent vertices have the same color, or with other similar restrictions. One may also consider coloring edges (possibly so that no two coincident edges are the same color), or other variations. Among the famous results and conjectures concerning graph coloring are the following:

* [Four-color theorem](https://en.wikipedia.org/wiki/Four-color_theorem)
* [Strong perfect graph theorem](https://en.wikipedia.org/wiki/Strong_perfect_graph_theorem)
* [Erdős–Faber–Lovász conjecture](https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Faber%E2%80%93Lov%C3%A1sz_conjecture)
* [Total coloring conjecture](https://en.wikipedia.org/wiki/Total_coloring), also called [Behzad](https://en.wikipedia.org/wiki/Mehdi_Behzad)'s conjecture (unsolved)
* [List coloring conjecture](https://en.wikipedia.org/wiki/List_edge-coloring) (unsolved)
* [Hadwiger conjecture (graph theory)](https://en.wikipedia.org/wiki/Hadwiger_conjecture_(graph_theory)) (unsolved)

### Subsumption and unification

Constraint modeling theories concern families of directed graphs related by a [partial order](https://en.wikipedia.org/wiki/Partial_order). In these applications, graphs are ordered by specificity, meaning that more constrained graphs—which are more specific and thus contain a greater amount of information—are subsumed by those that are more general. Operations between graphs include evaluating the direction of a subsumption relationship between two graphs, if any, and computing graph unification. The unification of two argument graphs is defined as the most general graph (or the computation thereof) that is consistent with (i.e. contains all of the information in) the inputs, if such a graph exists; efficient unification algorithms are known.

For constraint frameworks which are strictly [compositional](https://en.wikipedia.org/wiki/Principle_of_Compositionality), graph unification is the sufficient satisfiability and combination function. Well-known applications include [automatic theorem proving](https://en.wikipedia.org/wiki/Automatic_theorem_prover) and modeling the [elaboration of linguistic structure](https://en.wikipedia.org/wiki/Parsing).

### Route problems

* [Hamiltonian path problem](https://en.wikipedia.org/wiki/Hamiltonian_path_problem)
* [Minimum spanning tree](https://en.wikipedia.org/wiki/Minimum_spanning_tree)
* [Route inspection problem](https://en.wikipedia.org/wiki/Route_inspection_problem) (also called the "Chinese postman problem")
* [Seven bridges of Königsberg](https://en.wikipedia.org/wiki/Seven_bridges_of_K%C3%B6nigsberg)
* [Shortest path problem](https://en.wikipedia.org/wiki/Shortest_path_problem)
* [Steiner tree](https://en.wikipedia.org/wiki/Steiner_tree)
* [Three-cottage problem](https://en.wikipedia.org/wiki/Three-cottage_problem)
* [Traveling salesman problem](https://en.wikipedia.org/wiki/Traveling_salesman_problem) (NP-hard)

### Network flow

There are numerous problems arising especially from applications that have to do with various notions of [flows in networks](https://en.wikipedia.org/wiki/Flow_network), for example:

* [Max flow min cut theorem](https://en.wikipedia.org/wiki/Max_flow_min_cut_theorem)

### Visibility problems

* [Museum guard problem](https://en.wikipedia.org/wiki/Museum_guard_problem)

### Covering problems

[Covering problems](https://en.wikipedia.org/wiki/Covering_problem) in graphs may refer to various [set cover problems](https://en.wikipedia.org/wiki/Set_cover_problem) on subsets of vertices/subgraphs.

* [Dominating set](https://en.wikipedia.org/wiki/Dominating_set) problem is the special case of set cover problem where sets are the closed [neighborhoods](https://en.wikipedia.org/wiki/Neighbourhood_(graph_theory)).
* [Vertex cover problem](https://en.wikipedia.org/wiki/Vertex_cover_problem) is the special case of set cover problem where sets to cover are every edges.
* The original set cover problem, also called hitting set, can be described as a vertex cover in a hypergraph.

### Decomposition problems

Decomposition, defined as partitioning the edge set of a graph (with as many vertices as necessary accompanying the edges of each part of the partition), has a wide variety of questions. Often, the problem is to decompose a graph into subgraphs isomorphic to a fixed graph; for instance, decomposing a complete graph into Hamiltonian cycles. Other problems specify a family of graphs into which a given graph should be decomposed, for instance, a family of cycles, or decomposing a complete graph *K**n* into *n* − 1 specified trees having, respectively, 1, 2, 3, ..., *n* − 1 edges.

Some specific decomposition problems and similar problems that have been studied include:

* [Arboricity](https://en.wikipedia.org/wiki/Arboricity), a decomposition into as few forests as possible
* [Cycle double cover](https://en.wikipedia.org/wiki/Cycle_double_cover), a collection of cycles covering each edge exactly twice
* [Edge coloring](https://en.wikipedia.org/wiki/Edge_coloring), a decomposition into as few [matchings](https://en.wikipedia.org/wiki/Matching_(graph_theory)) as possible
* [Graph factorization](https://en.wikipedia.org/wiki/Graph_factorization), a decomposition of a [regular graph](https://en.wikipedia.org/wiki/Regular_graph) into regular subgraphs of given degrees

### Graph classes

Many problems involve characterizing the members of various classes of graphs. Some examples of such questions are below:

* [Enumerating](https://en.wikipedia.org/wiki/Graph_enumeration) the members of a class
* Characterizing a class in terms of [forbidden substructures](https://en.wikipedia.org/wiki/Forbidden_graph_characterization)
* Ascertaining relationships among classes (e.g. does one property of graphs imply another)
* Finding efficient [algorithms](https://en.wikipedia.org/wiki/Algorithm) to [decide](https://en.wikipedia.org/wiki/Decision_problem) membership in a class
* Finding [representations](https://en.wikipedia.org/wiki/Representation_(mathematics)) for members of a class

## See also

* [Gallery of named graphs](https://en.wikipedia.org/wiki/Gallery_of_named_graphs)
* [Glossary of graph theory](https://en.wikipedia.org/wiki/Glossary_of_graph_theory)
* [List of graph theory topics](https://en.wikipedia.org/wiki/List_of_graph_theory_topics)
* [List of unsolved problems in graph theory](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_graph_theory)
* [Publications in graph theory](https://en.wikipedia.org/wiki/List_of_publications_in_mathematics#Graph_theory)
* [Graph algorithm](https://en.wikipedia.org/wiki/Graph_algorithm)
* [Graph theorists](https://en.wikipedia.org/wiki/Category:Graph_theorists)

## Notes

1. **^** Sylvester (1878).
2. **^** Ore (1962), p. [1](https://archive.org/details/theoryofgraphs0000orey/page/1).
3. **^** Ore (1962), p. [2](https://archive.org/details/theoryofgraphs0000orey/page/2).
4. **^** Ore (1962), p. [3](https://archive.org/details/theoryofgraphs0000orey/page/3).
5. **^** Bollobas (2013), p. [7](http://books.google.com/books?id=JeIlBQAAQBAJ&pg=PA7).
6. **^** Biggs, Lloyd & Wilson (1986), pp. [2–3](https://books.google.com/books?id=XqYTk0sXmpoC&pg=PA2).
7. **^** Biggs, Lloyd & Wilson (1986), pp. [21–22](https://books.google.com/books?id=XqYTk0sXmpoC&pg=PA21).
8. **^** Cauchy (1813)L'Huillier (1812–1813)
9. **^** Richeson (2008), p. 63.
10. ^   Cayley (1875).
11. **^** Tutte (2001), p. [30](https://books.google.com/books?id=uTGhooU37h4C&pg=PA30).
12. **^** Gardner (1992), p. 203.
13. **^** Society for Industrial and Applied Mathematics (2002), p. 26.
14. **^** Heinrich Heesch: Untersuchungen zum Vierfarbenproblem. Mannheim: Bibliographisches Institut 1969.
15. **^** Appel, K.; Haken, W. (1977), ["Every planar map is four colorable. Part I. Discharging"](https://projecteuclid.org/journals/illinois-journal-of-mathematics/volume-21/issue-3/Every-planar-map-is-four-colorable-Part-I-Discharging/10.1215/ijm/1256049011.pdf) (PDF), *Illinois J. Math.*, **21** (3): 429–490, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1215/ijm/1256049011](https://doi.org/10.1215%2Fijm%2F1256049011).
16. **^** Appel, K.; Haken, W. (1977), "Every planar map is four colorable. Part II. Reducibility", *Illinois J. Math.*, **21** (3): 491–567, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1215/ijm/1256049012](https://doi.org/10.1215%2Fijm%2F1256049012).
17. **^** Robertson, N.; Sanders, D.; Seymour, P.; Thomas, R. (1997), "The four color theorem", *Journal of Combinatorial Theory, Series B*, **70**: 2–44, [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1006/jctb.1997.1750](https://doi.org/10.1006%2Fjctb.1997.1750).
18. ^   Bollobás (2001), p. [xi](http://books.google.com/books?id=o9WecWgilzYC&pg=PR10).
19. **^** Gross & Tucker (2012), p. [1](https://books.google.com/books?id=6HmA_x0dL9oC&pg=PA1).
20. **^** Gross & Tucker (2012), [Contents](https://books.google.com/books?id=6HmA_x0dL9oC&pg=PR9)Beineke & Wilson (2009), Contents
21. ^   Lovász (2006), p. 76.
22. **^** Persinger (1966).
23. **^** Lovász (2006), p. 77.
24. **^** Lovász (2006), p. 78, Theorem 4.
25. **^** Foulds (1992), p. [71](https://books.google.com/books?id=5G4QBwAAQBAJ&pg=PA71).
26. **^** Gross & Tucker (2012), p. [215](https://books.google.com/books?id=6HmA_x0dL9oC&pg=PA215).
27. **^** Gross & Tucker (2012), p. [57](https://books.google.com/books?id=6HmA_x0dL9oC&pg=PA57).
28. **^** Gross & Tucker (2012), p. [72](https://books.google.com/books?id=6HmA_x0dL9oC&pg=PA72).
29. **^** Cvetković & Rowlinson (2004), p. [88](https://books.google.com/books?id=z2K26gZLC1MC&pg=PA88)Kaveh (2013), pp. [27–28](http://books.google.com/books?id=oV9GAAAAQBAJ&pg=PA27)
30. **^** Biggs (1993), [Chapter 15: Automorphisms of graphs](http://books.google.com/books?id=6TasRmIFOxQC&pg=PA115).
31. ^   Godsil & Royle (2001), pp. [xii–ixi](http://books.google.com/books?id=GeSPBAAAQBAJ&pg=PR12).
32. **^** Gross & Tucker (2012), p. [70](https://books.google.com/books?id=6HmA_x0dL9oC&pg=PA70).
33. **^** Biggs (1993), p. [64](http://books.google.com/books?id=6TasRmIFOxQC&pg=PA64).
34. **^** Biggs (1993), p. [98](http://books.google.com/books?id=6TasRmIFOxQC&pg=PA98).
35. **^** Pach (2018), p. [257](http://books.google.com/books?id=9mlQDwAAQBAJ&pg=PA257).
36. ^   Bounceur, Bezoui & Euler (2019), pp. [13–14](http://books.google.com/books?id=UmYIEQAAQBAJ&pg=PA13).
37. **^** Everett & Corneil (1995)Ziegler (2007), pp. 628–642
38. ^   McKee & McMorris (1999), p. [1–2](http://books.google.com/books?id=phWjyYLP7d4C&pg=PA1).
39. ^   Grünbaum (2006), p. [181](https://books.google.com/books?id=cKpBGcqpspIC&pg=PA181).
40. **^** Everett & Corneil (1995).
41. **^** Ziegler (2007), pp. 628–642.
42. **^** Brightwell & Scheinerman (1993), p. 214Thurston (2002), p. 330, Corollary 13.6.2.
43. **^** Chalopin & Gonçalves (2009).
44. **^** Di Battista et al. (1994), p. viii.
45. **^** Di Battista et al. (1994), p. 14.
46. **^** Di Battista et al. (1994), p. 16.
47. ^   Pach & Sharir (2009).
48. **^** Malitz & Papakostas (1994).
49. **^** Chartrand et al. (2024), p. [221](http://books.google.com/books?id=01cIEQAAQBAJ&pg=PA221).
50. **^** Bollobas (2013), p. [104](http://books.google.com/books?id=JeIlBQAAQBAJ&pg=PA104).
51. **^** Bollobas (2013), p. [123](http://books.google.com/books?id=JeIlBQAAQBAJ&pg=PA123).
52. **^** Zhao (2023), p. [135](http://books.google.com/books?id=QDHEEAAAQBAJ&pg=PA135)Borgs et al. (2008)Hahn & Tardif (1997), p. [108–109](http://books.google.com/books?id=-tIaXdII8egC&pg=PA108)
53. **^** Wilson (1996).
54. **^** Sedgewick & Flajolet (2013), p. 286.
55. **^** Morin (2004). sfnp error: no target: CITEREFMorin2004 ([help](https://en.wikipedia.org/wiki/Category:Harv_and_Sfn_template_errors))
56. **^** McDiarmid, Johnson & Stone (1997).
57. **^** Hale, Scott A. (2014). "Multilinguals and Wikipedia editing". *Proceedings of the 2014 ACM conference on Web science*. pp. 99–108. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1312.0976](https://arxiv.org/abs/1312.0976). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2013arXiv1312.0976H](https://ui.adsabs.harvard.edu/abs/2013arXiv1312.0976H). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/2615569.2615684](https://doi.org/10.1145%2F2615569.2615684). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-2622-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-2622-3). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [14027025](https://api.semanticscholar.org/CorpusID:14027025).
58. **^** Mashaghi, A.; et al. (2004). "Investigation of a protein complex network". *European Physical Journal B*. **41** (1): 113–121. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[cond-mat/0304207](https://arxiv.org/abs/cond-mat/0304207). [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2004EPJB...41..113M](https://ui.adsabs.harvard.edu/abs/2004EPJB...41..113M). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1140/epjb/e2004-00301-0](https://doi.org/10.1140%2Fepjb%2Fe2004-00301-0). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [9233932](https://api.semanticscholar.org/CorpusID:9233932).
59. **^** Shah, Preya; Ashourvan, Arian; Mikhail, Fadi; Pines, Adam; Kini, Lohith; Oechsel, Kelly; Das, Sandhitsu R; Stein, Joel M; Shinohara, Russell T (2019-07-01). ["Characterizing the role of the structural connectome in seizure dynamics"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6598625). *Brain*. **142** (7): 1955–1972. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/brain/awz125](https://doi.org/10.1093%2Fbrain%2Fawz125). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0006-8950](https://search.worldcat.org/issn/0006-8950). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [6598625](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6598625). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [31099821](https://pubmed.ncbi.nlm.nih.gov/31099821).
60. **^** Adali, Tulay; Ortega, Antonio (May 2018). "Applications of Graph Theory [Scanning the Issue]". *Proceedings of the IEEE*. **106** (5): 784–786. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/JPROC.2018.2820300](https://doi.org/10.1109%2FJPROC.2018.2820300). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0018-9219](https://search.worldcat.org/issn/0018-9219).
61. **^** Grandjean, Martin (2016). ["A social network analysis of Twitter: Mapping the digital humanities community"](https://hal.archives-ouvertes.fr/hal-01517493/file/A%20social%20network%20analysis%20of%20Twitter%20Mapping%20the%20digital%20humanities%20community.pdf) (PDF). *Cogent Arts & Humanities*. **3** (1) 1171458. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1080/23311983.2016.1171458](https://doi.org/10.1080%2F23311983.2016.1171458). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [114999767](https://api.semanticscholar.org/CorpusID:114999767).
62. **^** Vecchio, F (2017). ""Small World" architecture in brain connectivity and hippocampal volume in Alzheimer's disease: a study via graph theory from EEG data". *Brain Imaging and Behavior*. **11** (2): 473–485. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/s11682-016-9528-3](https://doi.org/10.1007%2Fs11682-016-9528-3). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [26960946](https://pubmed.ncbi.nlm.nih.gov/26960946). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [3987492](https://api.semanticscholar.org/CorpusID:3987492).
63. **^** Vecchio, F (2013). "Brain network connectivity assessed using graph theory in frontotemporal dementia". *Neurology*. **81** (2): 134–143. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1212/WNL.0b013e31829a33f8](https://doi.org/10.1212%2FWNL.0b013e31829a33f8). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [23719145](https://pubmed.ncbi.nlm.nih.gov/23719145). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [28334693](https://api.semanticscholar.org/CorpusID:28334693).
64. **^** Bjorken, J. D.; Drell, S. D. (1965). [*Relativistic Quantum Fields*](https://archive.org/details/relativisticquan0000bjor_c5q0). New York: McGraw-Hill. p. viii.
65. **^** Kumar, Ankush; Kulkarni, G. U. (2016-01-04). "Evaluating conducting network based transparent electrodes from geometrical considerations". *Journal of Applied Physics*. **119** (1): 015102. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2016JAP...119a5102K](https://ui.adsabs.harvard.edu/abs/2016JAP...119a5102K). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1063/1.4939280](https://doi.org/10.1063%2F1.4939280). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0021-8979](https://search.worldcat.org/issn/0021-8979).
66. **^** Newman, Mark (2010). [*Networks: An Introduction*](https://web.archive.org/web/20200728132820/http://math.sjtu.edu.cn/faculty/xiaodong/course/Networks%20An%20introduction.pdf) (PDF). Oxford University Press. Archived from [the original](http://math.sjtu.edu.cn/faculty/xiaodong/course/Networks%20An%20introduction.pdf) (PDF) on 2020-07-28. Retrieved 2019-10-30.
67. **^** Grandjean, Martin (2015). ["Social network analysis and visualization: Moreno's Sociograms revisited"](https://www.martingrandjean.ch/social-network-analysis-visualization-morenos-sociograms-revisited/). Redesigned network strictly based on Moreno (1934), *Who Shall Survive*.
68. **^** Rosen, Kenneth H. (2011-06-14). *Discrete mathematics and its applications* (7th ed.). New York: McGraw-Hill. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-07-338309-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-07-338309-5).
69. **^** Kelly, S.; Black, Michael (2020-07-09). ["graphsim: An R package for simulating gene expression data from graph structures of biological pathways"](https://www.biorxiv.org/content/biorxiv/early/2020/06/30/2020.03.02.972471.full.pdf) (PDF). *Journal of Open Source Software*. **5** (51). The Open Journal: 2161. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2020JOSS....5.2161K](https://ui.adsabs.harvard.edu/abs/2020JOSS....5.2161K). [bioRxiv](https://en.wikipedia.org/wiki/BioRxiv_(identifier)) [10.1101/2020.03.02.972471](https://doi.org/10.1101%2F2020.03.02.972471). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.21105/joss.02161](https://doi.org/10.21105%2Fjoss.02161). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2475-9066](https://search.worldcat.org/issn/2475-9066). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [214722561](https://api.semanticscholar.org/CorpusID:214722561).
70. **^** Shah, Preya; Ashourvan, Arian; Mikhail, Fadi; Pines, Adam; Kini, Lohith; Oechsel, Kelly; Das, Sandhitsu R; Stein, Joel M; Shinohara, Russell T (2019-07-01). ["Characterizing the role of the structural connectome in seizure dynamics"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6598625). *Brain*. **142** (7): 1955–1972. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1093/brain/awz125](https://doi.org/10.1093%2Fbrain%2Fawz125). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0006-8950](https://search.worldcat.org/issn/0006-8950). [PMC](https://en.wikipedia.org/wiki/PMC_(identifier)) [6598625](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6598625). [PMID](https://en.wikipedia.org/wiki/PMID_(identifier)) [31099821](https://pubmed.ncbi.nlm.nih.gov/31099821).
71. **^** Kepner, Jeremy; Gilbert, John (2011). [*Graph Algorithms in the Language of Linear Algebra*](https://my.siam.org/Store/Product/viewproduct/?ProductId=106663). SIAM. p. 1171458. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-898719-90-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-898719-90-1).

## References

* Lowell W. Beineke; Bjarne Toft; and Robin J. Wilson: *Milestones in Graph Theory: A Century of Progress*, AMS/MAA, (SPECTRUM, v.108), ISBN 978-1-4704-6431-8 (2025).
* Beineke, Lowell W.; Wilson, Robin J. (2009). [*Topics in Topological Graph Theory*](https://books.google.com/books?id=Z8P3CwAAQBAJ). Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-139-64368-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-139-64368-9).
* Bender, Edward A.; Williamson, S. Gill (2010). [*Lists, Decisions and Graphs. With an Introduction to Probability*](https://books.google.com/books?id=vaXv_yhefG8C).
* Berge, Claude (1958). *Théorie des graphes et ses applications*. Paris: Dunod. English edition, Wiley 1961; Methuen & Co, New York 1962; Russian, Moscow 1961; Spanish, Mexico 1962; Roumanian, Bucharest 1969; Chinese, Shanghai 1963; Second printing of the 1962 first English edition, Dover, New York 2001.
* Biggs, Norman (1993). *Algebraic Graph Theory* (2nd ed.). Cambridge University Press.
* Biggs, N.; Lloyd, E.; Wilson, R. (1986). [*Graph Theory, 1736-1936*](https://en.wikipedia.org/wiki/Graph_Theory,_1736%E2%80%931936). Oxford University Press.
* Bollobas, Bela (2013). [*Modern Graph Theory*](https://books.google.com/books?id=JeIlBQAAQBAJ). Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4612-0619-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4612-0619-4).
* Bollobás, Béla; Riordan, O. M. (2003). *Mathematical results on scale-free random graphs in "Handbook of Graphs and Networks" (S. Bornholdt and H.G. Schuster (eds))* (1st ed.). Weinheim: Wiley VCH.
* Bollobás, B. (2001). [*Random Graphs*](https://books.google.com/books?id=o9WecWgilzYC) (2nd ed.). Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-521-79722-5](https://en.wikipedia.org/wiki/Special:BookSources/0-521-79722-5).
* Bondy, J. A.; Murty, U. S. R. (2008). *Graph Theory*. Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-84628-969-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-84628-969-9).
* Borgs, Christian; Chayes, Jennifer T.; [Lovász, László](https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Lov%C3%A1sz); [Sós, Vera T](https://en.wikipedia.org/wiki/Vera_S%C3%B3s); Vestergombi, Katalin (2008). ["Convergent sequences of dense graphs. I. Subgraph frequencies, metric properties and testing"](https://doi.org/10.1016%2Fj.aim.2008.07.008). *[Advances in Mathematics](https://en.wikipedia.org/wiki/Advances_in_Mathematics)*. **219** (6): 1801–1851. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[math/0702004](https://arxiv.org/abs/math/0702004). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/j.aim.2008.07.008](https://doi.org/10.1016%2Fj.aim.2008.07.008).
* Bounceur, Ahcene; Bezoui, Madani; Euler, Reinhardt (2019). [*Boundaries and Hulls of Euclidean Graphs: From Theory to Practice*](https://books.google.com/books?id=UmYIEQAAQBAJ). CRC Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-351-69028-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-351-69028-7).
* [Brightwell, Graham R.](https://en.wikipedia.org/wiki/Graham_Brightwell); [Scheinerman, Edward R.](https://en.wikipedia.org/wiki/Ed_Scheinerman) (1993). "Representations of planar graphs". *[SIAM Journal on Discrete Mathematics](https://en.wikipedia.org/wiki/SIAM_Journal_on_Discrete_Mathematics)*. **6** (2): 214–229. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/0406017](https://doi.org/10.1137%2F0406017).
* [Cauchy, A. L.](https://en.wikipedia.org/wiki/Augustin-Louis_Cauchy) (1813). "Recherche sur les polyèdres - premier mémoire". *Journal de l'École Polytechnique*. 9 (Cahier 16): 66–86.
* [Cayley, A.](https://en.wikipedia.org/wiki/Augustin-Louis_Cauchy) (1875). ["Ueber die Analytischen Figuren, welche in der Mathematik Bäume genannt werden und ihre Anwendung auf die Theorie chemischer Verbindungen"](https://zenodo.org/record/1425086). *Berichte der Deutschen Chemischen Gesellschaft*. **8** (2): 1056–1059. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/cber.18750080252](https://doi.org/10.1002%2Fcber.18750080252).
* [Cayley, A.](https://en.wikipedia.org/w/index.php?title=Arthur_Cauchy&action=edit&redlink=1) (2009) [1890]. "On the theory of the analytical forms called trees". [*The Collected Mathematical Papers*](https://rcin.org.pl/dlibra/docmetadata?showContent=true&id=173708). Vol. 3. pp. 242–246. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1017/CBO9780511703690.046](https://doi.org/10.1017%2FCBO9780511703690.046). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-511-70369-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-511-70369-0).
* Chalopin, J.; Gonçalves, D. (2009). "Every planar graph is the intersection graph of segments in the plane: Extended abstract". *Proceedings of the forty-first annual ACM symposium on Theory of computing*. pp. 631–638. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/1536414.1536500](https://doi.org/10.1145%2F1536414.1536500). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-60558-506-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-60558-506-2).
* Chartrand, Gary (1985). [*Introductory Graph Theory*](https://archive.org/details/introductorygrap0000char). Dover. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-486-24775-9](https://en.wikipedia.org/wiki/Special:BookSources/0-486-24775-9).
* Chartrand, Gary; Jordon, Heather; Vatter, Vincent; Zhang, Ping (2024). [*Graphs & Digraphs*](https://books.google.com/books?id=01cIEQAAQBAJ). CRC Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-003-80108-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-003-80108-5).
* Cvetković, Dragoš M.; Rowlinson, Peter (2004). "Spectral graph theory". In Beineke, Lowell W.; Wilson, Robin J. (eds.). [*Topics in Algebraic Graph Theory*](https://books.google.com/books?id=z2K26gZLC1MC). Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-521-80197-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-80197-3).
* Deo, Narsingh (1974). [*Graph Theory with Applications to Engineering and Computer Science*](https://www.edutechlearners.com/download/Graphtheory.pdf) (PDF). Englewood, New Jersey: Prentice-Hall. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-13-363473-6](https://en.wikipedia.org/wiki/Special:BookSources/0-13-363473-6). [Archived](https://web.archive.org/web/20190517165158/http://www.edutechlearners.com/download/Graphtheory.pdf) (PDF) from the original on 2019-05-17.
* Di Battista, Giuseppe; [Eades, Peter](https://en.wikipedia.org/wiki/Peter_Eades); [Tamassia, Roberto](https://en.wikipedia.org/wiki/Roberto_Tamassia); Tollis, Ioannis G. (1994). ["Algorithms for Drawing Graphs: an Annotated Bibliography"](https://doi.org/10.1016%2F0925-7721%2894%2900014-x). *[Computational Geometry: Theory and Applications](https://en.wikipedia.org/wiki/Computational_Geometry_(journal))*. **4** (5): 235–282. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0925-7721(94)00014-x](https://doi.org/10.1016%2F0925-7721%2894%2900014-x).
* Everett, Hazel; [Corneil, Derek](https://en.wikipedia.org/wiki/Derek_Corneil) (1995). "Negative results on characterizing visibility graphs". *[Computational Geometry: Theory & Applications](https://en.wikipedia.org/wiki/Computational_Geometry_(journal))*. **5** (2): 51–63. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1016/0925-7721(95)00021-Z](https://doi.org/10.1016%2F0925-7721%2895%2900021-Z). [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [1353288](https://mathscinet.ams.org/mathscinet-getitem?mr=1353288).
* Foulds, L. R. (1992). [*Graph Theory Applications*](https://books.google.com/books?id=5G4QBwAAQBAJ). Universitext. Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4612-0933-1](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4612-0933-1).
* [Gardner, Martin](https://en.wikipedia.org/wiki/Martin_Gardner) (1992), *Fractal Music, Hypercards, and more…Mathematical Recreations from Scientific American*, W. H. Freeman and Company, p. 203
* Gibbons, Alan (1985). *Algorithmic Graph Theory*. [Cambridge University Press](https://en.wikipedia.org/wiki/Cambridge_University_Press).
* Godsil, Chris; Royle, Gordon F. (2001). [*Algebraic Graph Theory*](https://books.google.com/books?id=GeSPBAAAQBAJ). Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4613-0163-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4613-0163-9).
* Golumbic, Martin (1980). *Algorithmic Graph Theory and Perfect Graphs*. [Academic Press](https://en.wikipedia.org/wiki/Academic_Press).
* Gross, J. L.; [Tucker, T. W.](https://en.wikipedia.org/wiki/Thomas_W._Tucker) (2012) [1987]. [*Topological Graph Theory*](https://books.google.com/books?id=6HmA_x0dL9oC). Dover Publications. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-486-41741-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-486-41741-7).
* [Grünbaum, Branko](https://en.wikipedia.org/wiki/Branko_Gr%C3%BCnbaum) (2006). "Configurations of points and lines". *The Coxeter Legacy*. Providence, RI: American Mathematical Society. pp. 179–225. [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [2209028](https://mathscinet.ams.org/mathscinet-getitem?mr=2209028).
* Hahn, Geňa; Tardif, Claude (1997). "Graph homomorphisms: structure and symmetry". In Hahn, Geňa; Sabidussi, Gert (eds.). [*Graph Symmetry: Algebraic Methods and Applications*](https://books.google.com/books?id=-tIaXdII8egC). Kluwer Academic Publisher. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-7923-4668-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7923-4668-5).
* Harary, Frank (1969). *Graph Theory*. Reading, Massachusetts: Addison-Wesley.
* Harary, Frank; Palmer, Edgar M. (1973). *Graphical Enumeration*. New York, New York: Academic Press.
* Kaveh, A. (2013). [*Optimal Analysis of Structures by Concepts of Symmetry and Regularity*](https://books.google.com/books?id=oV9GAAAAQBAJ). Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-7091-1565-7](https://en.wikipedia.org/wiki/Special:BookSources/978-3-7091-1565-7).
* Kepner, Jeremy; Gilbert, John (2011). [*Graph Algorithms in The Language of Linear Algebra*](https://my.siam.org/Store/Product/viewproduct/?ProductId=106663). Philadelphia, Pennsylvania: SIAM. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-89871-990-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-89871-990-1).
* L'Huillier, S.A.J. (1812–1813). "Mémoire sur la polyèdrométrie". *Annales de Mathématiques*. **3**: 169–189.
* [Lovász, László](https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Lov%C3%A1sz) (2006). ["Graph minor theory"](https://doi.org/10.1090%2FS0273-0979-05-01088-8). *[Bulletin of the American Mathematical Society](https://en.wikipedia.org/wiki/Bulletin_of_the_American_Mathematical_Society)*. **43** (1): 75–86. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1090/S0273-0979-05-01088-8](https://doi.org/10.1090%2FS0273-0979-05-01088-8).
* Mahadev, N. V. R.; Peled, Uri N. (1995). *Threshold Graphs and Related Topics*. [North-Holland](https://en.wikipedia.org/wiki/North-Holland_Publishing_Company).
* Malitz, Seth; Papakostas, Achilleas (1994). "On the angular resolution of planar graphs". *[SIAM Journal on Discrete Mathematics](https://en.wikipedia.org/wiki/SIAM_Journal_on_Discrete_Mathematics)*. **7** (2): 172–183. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1137/S0895480193242931](https://doi.org/10.1137%2FS0895480193242931). [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [1271989](https://mathscinet.ams.org/mathscinet-getitem?mr=1271989).
* McDiarmid, Colin; Johnson, Theodore; Stone, Harold S. (1997). ["On finding a minimum spanning tree in a network with random weights"](http://www.stats.ox.ac.uk/~cstone/mst.pdf) (PDF). *Random Structures & Algorithms*. **10** (1–2): 187–204. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/(SICI)1098-2418(199701/03)10:1/2<187::AID-RSA10>3.3.CO;2-Y](https://doi.org/10.1002%2F%28SICI%291098-2418%28199701%2F03%2910%3A1%2F2%3C187%3A%3AAID-RSA10%3E3.3.CO%3B2-Y). [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [1611522](https://mathscinet.ams.org/mathscinet-getitem?mr=1611522).
* McKee, Terry A.; McMorris, F. R. (1999). [*Topics in Intersection Graph Theory*](https://books.google.com/books?id=phWjyYLP7d4C). [Society for Industrial and Applied Mathematics](https://en.wikipedia.org/wiki/Society_for_Industrial_and_Applied_Mathematics). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-89871-430-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-89871-430-2).
* [Morin, Pat](https://en.wikipedia.org/wiki/Pat_Morin) (March 22, 2014). "Chapter 7: Random Binary Search Trees". [*Open Data Structures (in pseudocode)*](https://opendatastructures.org/ods-python.pdf) (PDF) (0.1Gβ ed.). pp. 145–164.
* Newman, Mark (2010). *Networks: An Introduction*. Oxford University Press.
* [Ore, Øystein](https://en.wikipedia.org/wiki/%C3%98ystein_Ore) (1962). [*Theory of Graphs*](https://archive.org/details/theoryofgraphs0000orey). American Mathematical Society.
* Pach, János (2018). "Geometric Graph Theory". In Toth, Csaba D.; O'Rourke, Joseph; Goodman, Jacob E. (eds.). *Handbook of Discrete and Computational Geometry* (3rd ed.). CRC Press.
* [Pach, János](https://en.wikipedia.org/wiki/J%C3%A1nos_Pach); [Sharir, Micha](https://en.wikipedia.org/wiki/Micha_Sharir) (2009). "5.5 Angular resolution and slopes". *Combinatorial Geometry and Its Algorithmic Applications: The Alcalá Lectures*. Mathematical Surveys and Monographs. Vol. 152. [American Mathematical Society](https://en.wikipedia.org/wiki/American_Mathematical_Society). pp. 126–127.
* Persinger, C. A. (1966). ["Subsets of 

n

{\displaystyle n}

-books in 

E

3

{\displaystyle E^{3}}

"](https://doi.org/10.2140%2Fpjm.1966.18.169). *[Pacific Journal of Mathematics](https://en.wikipedia.org/wiki/Pacific_Journal_of_Mathematics)*. **18**: 169–173. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.2140/pjm.1966.18.169](https://doi.org/10.2140%2Fpjm.1966.18.169). [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [0195077](https://mathscinet.ams.org/mathscinet-getitem?mr=0195077).
* [Richeson, D.](https://en.wikipedia.org/wiki/David_Richeson) (2008). [*Euler's Gem: The Polyhedron Formula and the Birth of Topology*](https://en.wikipedia.org/wiki/Euler%27s_Gem). Princeton University Press.
* [Sedgewick, Robert](https://en.wikipedia.org/wiki/Robert_Sedgewick_(computer_scientist)); [Flajolet, Philippe](https://en.wikipedia.org/wiki/Philippe_Flajolet) (2013). "Chapter 6: Trees". *An Introduction to the Analysis of Algorithms* (2nd ed.). Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780133373486](https://en.wikipedia.org/wiki/Special:BookSources/9780133373486).
* "The George Polya Prize". [*Looking Back, Looking Ahead: A SIAM History*](https://web.archive.org/web/20160305010030/http://www.siam.org/about/more/siam50.pdf) (PDF). [Society for Industrial and Applied Mathematics](https://en.wikipedia.org/wiki/Society_for_Industrial_and_Applied_Mathematics). 2002. p. 26. Archived from [the original](http://www.siam.org/about/more/siam50.pdf) (PDF) on 2016-03-05. Retrieved 2016-03-14.
* [Sylvester, James Joseph](https://en.wikipedia.org/wiki/James_Joseph_Sylvester) (1878). ["Chemistry and Algebra"](https://archive.org/stream/nature15unkngoog#page/n312/mode/1up). *Nature*. **17** (432): 284. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[1878Natur..17..284S](https://ui.adsabs.harvard.edu/abs/1878Natur..17..284S). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1038/017284a0](https://doi.org/10.1038%2F017284a0).
* [Thurston, William](https://en.wikipedia.org/wiki/William_Thurston) (March 2002). "§13.6, Andreev's theorem and generalizations, and §13.7, Constructing patterns of circles". [*The Geometry and Topology of 3-manifolds*](https://library.slmath.org/nonmsri/gt3m/). MSRI Publications. pp. 330–346. Electronic version 1.1. Retrieved 2025-12-09.
* [Tutte, W. T.](https://en.wikipedia.org/wiki/W._T._Tutte) (2001). [*Graph Theory*](https://books.google.com/books?id=uTGhooU37h4C). Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-521-79489-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-79489-3).
* Wilson, David Bruce (1996). "Generating random spanning trees more quickly than the cover time". [*Proceedings of the Twenty-Eighth Annual ACM Symposium on the Theory of Computing (STOC 1996)*](https://en.wikipedia.org/wiki/Symposium_on_Theory_of_Computing). pp. 296–303. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/237814.237880](https://doi.org/10.1145%2F237814.237880). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [0-89791-785-5](https://en.wikipedia.org/wiki/Special:BookSources/0-89791-785-5). [MR](https://en.wikipedia.org/wiki/MR_(identifier)) [1427525](https://mathscinet.ams.org/mathscinet-getitem?mr=1427525).
* Zhao, Yufei (2023). [*Graph Theory and Additive Combinatorics: Exploring Structure and Randomness*](https://books.google.com/books?id=QDHEEAAAQBAJ). Cambridge University Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-009-31094-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-009-31094-9).
* [Ziegler, Günter M.](https://en.wikipedia.org/wiki/G%C3%BCnter_M._Ziegler) (2007). "Convex polytopes: extremal constructions and 

f

{\displaystyle f}

-vector shapes. Section 1.3: Steinitz's theorem via circle packings". In Miller, Ezra; Reiner, Victor; [Sturmfels, Bernd](https://en.wikipedia.org/wiki/Bernd_Sturmfels) (eds.). *Geometric Combinatorics*. IAS/Park City Mathematics Series. Vol. 13. [American Mathematical Society](https://en.wikipedia.org/wiki/American_Mathematical_Society). pp. 628–642. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-8218-3736-8](https://en.wikipedia.org/wiki/Special:BookSources/978-0-8218-3736-8).

## External links

* ["Graph theory"](https://www.encyclopediaofmath.org/index.php?title=Graph_theory), *[Encyclopedia of Mathematics](https://en.wikipedia.org/wiki/Encyclopedia_of_Mathematics)*, [EMS Press](https://en.wikipedia.org/wiki/European_Mathematical_Society), 2001 [1994]
* [Graph theory tutorial](http://www.utm.edu/departments/math/graph/) [Archived](https://web.archive.org/web/20120116185332/http://www.utm.edu/departments/math/graph/) 2012-01-16 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
* [A searchable database of small connected graphs](http://www.gfredericks.com/main/sandbox/graphs)
* [House of Graphs](https://houseofgraphs.org/) — searchable database of graphs with a drawing-based search feature.
* [Image gallery: graphs](https://web.archive.org/web/20060206155001/http://www.nd.edu/~networks/gallery.htm) at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) (archived February 6, 2006)
* [Concise, annotated list of graph theory resources for researchers](https://web.archive.org/web/20161114100939/http://www.babelgraph.org/links.html)
* [rocs](https://www.kde.org/applications/education/rocs/) — a graph theory IDE
* [The Social Life of Routers](http://www.orgnet.com/SocialLifeOfRouters.pdf) — non-technical paper discussing graphs of people and computers
* [Graph Theory Software](https://graphtheorysoftware.com/) — tools to teach and learn graph theory
* [Online books](https://ftl.toolforge.org/cgi-bin/ftl?st=&su=Graph+theory&library=OLBP), and library resources [in your library](https://ftl.toolforge.org/cgi-bin/ftl?st=&su=Graph+theory) and [in other libraries](https://ftl.toolforge.org/cgi-bin/ftl?st=&su=Graph+theory&library=0CHOOSE0) about graph theory
* [A list of graph algorithms](http://www.martinbroadhurst.com/Graph-algorithms.html) [Archived](https://web.archive.org/web/20190713044421/http://www.martinbroadhurst.com/Graph-algorithms.html) 2019-07-13 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) with references and links to graph library implementations

### Online textbooks

* Hartmann, Alexander K.; Weigt, Martin (2005). "Introduction to graphs". *Phase Transitions in Combinatorial Optimization Problems: Basics, Algorithms and Statistical Mechanics*. Wiley. pp. 25–66. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[cond-mat/0602129](https://arxiv.org/abs/cond-mat/0602129). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/3527606734.ch3](https://doi.org/10.1002%2F3527606734.ch3). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-527-60673-3](https://en.wikipedia.org/wiki/Special:BookSources/978-3-527-60673-3).
* [Digraphs: Theory Algorithms and Applications](https://www.cs.rhul.ac.uk/books/dbook/) 2007 by Jorgen Bang-Jensen and Gregory Gutin
* [Graph Theory, by Reinhard Diestel](http://diestel-graph-theory.com/index.html)
 
NewPP limit report
Parsed by mw‐web.codfw.main‐6f7f9565cb‐2lkdk
Cached time: 20260420134021
Cache expiry: 2592000
Cache expiry source: Module:Citation/CS1 (os.date(%Y))
Reduced expiry: false
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 1.355 seconds
Real time usage: 1.539 seconds
Preprocessor visited node count: 8931/1000000
Revision size: 74806/2097152 bytes
Post‐expand include size: 249507/2097152 bytes
Template argument size: 7355/2097152 bytes
Highest expansion depth: 12/100
Expensive parser function count: 28/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 278634/5000000 bytes
Lua time usage: 0.893/10.000 seconds
Lua memory usage: 8787291/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00% 1215.663      1 -total
 18.77%  228.140     48 Template:Cite_book
 17.25%  209.670      1 Template:Reflist
 17.23%  209.460     54 Template:Sfnp
 11.27%  137.005      4 Template:Navbox
 10.10%  122.834      1 Template:Areas_of_mathematics
  8.64%  105.023     21 Template:Cite_journal
  7.45%   90.600      4 Template:Citation
  5.37%   65.341      1 Template:Authority_control
  4.39%   53.354      1 Template:Commons
 Render ID 79cb1c65-3cbe-11f1-98c7-45529686bc9d  Saved in parser cache with key enwiki:pcache:12401:|#|:idhash:canonical and timestamp 20260420134021 and revision id 1347294351. Rendering was triggered because: page_view