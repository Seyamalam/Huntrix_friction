# GraphQL - Wikipedia

Source: https://en.wikipedia.org/wiki/GraphQL

---

Data query language developed by Facebook

**GraphQL** is a data [query](https://en.wikipedia.org/wiki/Query_language) and [manipulation](https://en.wikipedia.org/wiki/Data_manipulation_language) language that allows specifying what data is to be retrieved ("[declarative](https://en.wikipedia.org/wiki/Declarative_programming) data fetching") or modified. A GraphQL server can process a client query using data from separate sources and present the results in a unified [graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)). The language is not tied to any specific [database](https://en.wikipedia.org/wiki/Database) or storage engine. There are several [open-source](https://en.wikipedia.org/wiki/Open-source_software) [runtime engines](https://en.wikipedia.org/wiki/Runtime_system) for GraphQL.

[Facebook](https://en.wikipedia.org/wiki/Meta_Platforms) started GraphQL development in 2012 and released a draft specification and reference implementation as open source in 2015. In 2018, GraphQL was moved to the newly established GraphQL Foundation, hosted by the non-profit [Linux Foundation](https://en.wikipedia.org/wiki/Linux_Foundation).

On February 9, 2018, the GraphQL Schema Definition Language became part of the specification.

Many popular public APIs adopted GraphQL as the default way to access them. These include public APIs of Facebook, [GitHub](https://en.wikipedia.org/wiki/GitHub), [Yelp](https://en.wikipedia.org/wiki/Yelp), [Shopify](https://en.wikipedia.org/wiki/Shopify), Google Directions API and many others.

There is an annual GraphQL Conference featuring new developments of the protocol and organizations successfully using GraphQL. The event is hosted by the [GraphQL Foundation](/w/index.php?title=GraphQL_Foundation&action=edit&redlink=1) with previous organizers incl. Prisma, [Hygraph](/w/index.php?title=Hygraph&action=edit&redlink=1), [Commercetools](https://en.wikipedia.org/wiki/Commercetools).

GraphQL supports reading, writing (mutating), and subscribing to changes to data (realtime updates – commonly implemented using [WebSockets](https://en.wikipedia.org/wiki/WebSocket)). A GraphQL service is created by defining types with fields, then providing functions to resolve the data for each field. The types and fields make up what is known as the *schema definition*. The functions that retrieve and map the data are called *resolvers*.

After being validated against the schema, a GraphQL query is executed by the server. The server returns a result that mirrors the shape of the original query, typically as [JSON](https://en.wikipedia.org/wiki/JSON).

[![](//upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Schema_of_graphql-swapi_API_rendered_as_a_graph.png/250px-Schema_of_graphql-swapi_API_rendered_as_a_graph.png)](https://en.wikipedia.org/wiki/File:Schema_of_graphql-swapi_API_rendered_as_a_graph.png)

Schema of [swapi-graphql](https://graphql.org/swapi-graphql/) rendered as a graph by [GraphQL Voyager](https://github.com/graphql-kit/graphql-voyager)

With GraphQL, a business domain is modeled as a [graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)) by defining a schema; within this schema, different types of nodes and their relations are defined.

The GraphQL type system describes what data can be queried from the API. The collection of those capabilities is referred to as the service's *schema* and clients can use that schema to send queries to the API that return predictable results.

The root type of a GraphQL schema, `Query` by default, contains all of the fields that can be queried. Other types define the objects and fields that the GraphQL server can return. There are several base types, called scalars, to represent things like strings, numbers, and IDs.

Fields are defined as [nullable](https://en.wikipedia.org/wiki/Nullable_type) by default, and a trailing [exclamation mark](https://en.wikipedia.org/wiki/Exclamation_mark) can be used to make a field non-nullable (required). A field can be defined as a list by wrapping the field's type in [square brackets](https://en.wikipedia.org/wiki/Bracket) (for example, `authors: [String]`).

```
type Query {
  currentUser: User
}

type User {
  id: ID!
  name: String!
}

```

A GraphQL query defines the exact shape of the data needed by the client.

```
query CurrentUser {
  currentUser {
    name
    age
  }
}

```

Once validated and executed by the GraphQL server, the data is returned in the same shape.

```
{
  "currentUser": {
    "name": "John Doe",
    "age": 23
  }
}

```

A GraphQL mutation allows for data to be created, updated, or deleted. Mutations generally contain *variables*, which allow data to be passed into the server from the client. The mutation also defines the shape of the data that will be returned to the client after the operation is complete.

```
mutation CreateUser($name: String!, $age: Int!) {
  createUser(userName: $name, age: $age) {
    name
    age
  }
}

```

The variables are passed as an object with fields that match the variable names in the mutation.

```
{
  "name": "Han Solo",
  "age": 42
}

```

Once the operation is complete, the GraphQL server will return data matching the shape defined by the mutation.

```
{
  "data": {
    "createUser": {
      "name": "Han Solo",
      "age": 42
    }
  }
}

```

GraphQL also supports live updates sent from the server to client in an operation called a subscription. Again, the client defines the shape of the data that it needs whenever an update is made.

```
subscription {
  newPerson {
    name
    age
  }
}

```

When a mutation is made through the GraphQL server that updates the associated field, data is sent to all subscribed clients in the format setup through the subscription.

```
{
  "newPerson": {
    "name": "Jane",
    "age": 23
  }
}

```

While there's nothing that prevents a GraphQL service from being versioned just like any other API, GraphQL takes a strong opinion on avoiding versioning by providing the tools for the continuous evolution of a GraphQL schema.

The `@deprecated` *built-in directive* is used within the type system definition language to indicate deprecated portions of a GraphQL service's schema, such as deprecated fields on a type or deprecated enum values.

GraphQL only returns the data that's explicitly requested, so new capabilities can be added via new types or new fields on existing types without creating a breaking change. This has led to a common practice of always avoiding breaking changes and serving a versionless API.

### Comparison to other query languages

[[edit](/w/index.php?title=GraphQL&action=edit&section=8)]

GraphQL does not provide a full-fledged [graph](https://en.wikipedia.org/wiki/Graph_database) query language such as [SPARQL](https://en.wikipedia.org/wiki/SPARQL), or even in [dialects of SQL](https://en.wikipedia.org/wiki/Hierarchical_and_recursive_queries_in_SQL) that support [transitive closure](https://en.wikipedia.org/wiki/Transitive_closure). For example, a GraphQL interface that reports the parents of an individual cannot return, in a single query, the set of all their ancestors.

GraphQL APIs can be tested manually or with automated tools issuing GraphQL requests and verifying the correctness of the results. Automatic test generation is also possible. New requests may be produced through search-based techniques due to a typed schema and introspection capabilities.

Some of the software tools used for testing GraphQL implementations include [Postman](https://en.wikipedia.org/wiki/Postman_(software)), Beeceptor, GraphiQL, Apollo Studio, GraphQL Hive, GraphQL Editor, and Step CI.

1. **[^](#cite_ref-graphql_release_1-0)** ["GraphQL September 2025 Release Notes"](https://github.com/graphql/graphql-spec/releases/tag/September2025). *[GitHub](https://en.wikipedia.org/wiki/GitHub)*.
2. **[^](#cite_ref-2)** ["Learn GraphQL Fundamentals with Fullstack Tutorial"](https://www.howtographql.com/basics/0-introduction/). *www.howtographql.com*. Retrieved 25 April 2023.
3. **[^](#cite_ref-3)** ["GraphQL: A data query language"](https://code.fb.com/core-data/graphql-a-data-query-language/). 14 September 2015.
4. **[^](#cite_ref-4)** ["Facebook's GraphQL gets its own open-source foundation"](https://techcrunch.com/2018/11/06/facebooks-graphql-gets-its-own-open-source-foundation/). *TechCrunch*. Retrieved 7 November 2018.
5. **[^](#cite_ref-5)** ["The Linux Foundation Announces Intent to Form New Foundation to Support GraphQL"](https://www.linuxfoundation.org/press/press-release/intent_to_form_graphql). *The Linux Foundation*. 6 November 2018. Retrieved 17 March 2023.
6. **[^](#cite_ref-6)** ["GraphQL SDL included in Github repository"](https://github.com/facebook/graphql/pull/90/). *[GitHub](https://en.wikipedia.org/wiki/GitHub)*.
7. **[^](#cite_ref-7)** ["GraphQL Landscape"](https://landscape.graphql.org/). *[landscape.graphql.org](/w/index.php?title=Landscape.graphql.org&action=edit&redlink=1)*. 5 July 2025.
8. **[^](#cite_ref-8)** [*graphql-kit/graphql-apis*](https://github.com/graphql-kit/graphql-apis), graphql-kit, 31 May 2025, retrieved 5 June 2025
9. **[^](#cite_ref-9)** ["GraphQL Conference 2025"](https://graphql.org/conf/2025). *GraphQL Foundation*. Retrieved 29 September 2025.
10. **[^](#cite_ref-10)** ["GraphQL"](https://web.archive.org/web/20180718051011/http://facebook.github.io/graphql/June2018/#sec-Language.Operations). *facebook.github.io*. [Facebook](https://en.wikipedia.org/wiki/Facebook). Archived from [the original](https://facebook.github.io/graphql/June2018/#sec-Language.Operations) on 18 July 2018. Retrieved 4 July 2018.
11. **[^](#cite_ref-11)** ["Introduction to GraphQL"](https://graphql.org/learn/). *graphql.org*. Retrieved 25 April 2023.
12. **[^](#cite_ref-12)** ["Execution"](https://graphql.org/learn/execution/). *graphql.org*. Retrieved 25 April 2023.
13. **[^](#cite_ref-13)** ["Thinking in Graphs | GraphQL"](https://graphql.org/learn/thinking-in-graphs/#its-graphs-all-the-way-down). *graphql.org*. Retrieved 3 June 2025.
14. **[^](#cite_ref-14)** ["Schemas and Types | GraphQL"](https://graphql.org/learn/schema/). *graphql.org*. Retrieved 3 June 2025.
15. ^ [***a***](#cite_ref-:0_15-0) [***b***](#cite_ref-:0_15-1) ["GraphQL"](https://spec.graphql.org/October2021/). *spec.graphql.org*. Retrieved 25 April 2023.
16. ^ [***a***](#cite_ref-:1_16-0) [***b***](#cite_ref-:1_16-1) ["Schema Design | GraphQL"](https://graphql.org/learn/schema-design/#versioning). *graphql.org*. Retrieved 3 June 2025.
17. **[^](#cite_ref-17)** Vargas, D. M.; Blanco, A. F.; Vidaurre, A. C.; Alcocer, J. P. S.; Torres, M. M.; Bergel, A.; Ducasse, S. (2018). ["Deviation Testing: A Test Case Generation Technique for GraphQL APIs"](https://bergel.eu/MyPapers/Mene18a-GraphQL.pdf) (PDF). *11th International Workshop on Smalltalk Technologies (IWST)*: 1–9.
18. **[^](#cite_ref-18)** Karlsson, Stefan; Causevic, Adnan; Sundmark, Daniel (May 2021). "Automatic Property-based Testing of GraphQL APIs". *2021 IEEE/ACM International Conference on Automation of Software Test (AST)*. Madrid, Spain: IEEE. pp. 1–10. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[2012.07380](https://arxiv.org/abs/2012.07380). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/AST52587.2021.00009](https://doi.org/10.1109%2FAST52587.2021.00009). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-6654-3567-3](https://en.wikipedia.org/wiki/Special:BookSources/978-1-6654-3567-3). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [229156477](https://api.semanticscholar.org/CorpusID:229156477).
19. **[^](#cite_ref-19)**