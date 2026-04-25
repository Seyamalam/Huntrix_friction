# HTTP - Wikipedia

Source: https://en.wikipedia.org/wiki/HTTP

---

Application layer protocol

**HTTP** (**Hypertext Transfer Protocol**) is an [application layer](//en.wikipedia.org/wiki/Application_layer) protocol in the [Internet protocol suite](//en.wikipedia.org/wiki/Internet_protocol_suite) for distributed, collaborative, [hypermedia](//en.wikipedia.org/wiki/Hypermedia) information systems. HTTP is the foundation of data communication for the [World Wide Web](//en.wikipedia.org/wiki/World_Wide_Web), where [hypertext](//en.wikipedia.org/wiki/Hypertext) documents include [hyperlinks](//en.wikipedia.org/wiki/Hyperlink) to other resources that the user can easily access, for example by a [mouse](//en.wikipedia.org/wiki/Computer_mouse) click or by tapping the screen in a [web browser](//en.wikipedia.org/wiki/Web_browser).

HTTP is a [request–response](//en.wikipedia.org/wiki/Request%E2%80%93response) protocol in the [client–server model](//en.wikipedia.org/wiki/Client%E2%80%93server_model). A transaction starts with a client submitting a request to the server, the server attempts to satisfy the request and returns a response to the client that describes the disposition of the request and optionally contains a requested resource such as an [HTML](//en.wikipedia.org/wiki/HTML) document or other content.

In a common scenario, a [web browser](//en.wikipedia.org/wiki/Web_browser) acts as the [client](//en.wikipedia.org/wiki/Client_(computing)), and a [web server](//en.wikipedia.org/wiki/Web_server), [hosting](//en.wikipedia.org/wiki/Host_(network)) one or more [websites](//en.wikipedia.org/wiki/Website), is the [server](//en.wikipedia.org/wiki/Server_(computing)). A web browser is an example of a [user agent](//en.wikipedia.org/wiki/User_agent) (UA). Other types of user agent include the indexing software used by search providers ([web crawlers](//en.wikipedia.org/wiki/Web_crawler)), [voice browsers](//en.wikipedia.org/wiki/Voice_browser), [mobile apps](//en.wikipedia.org/wiki/Mobile_app), and other [software](//en.wikipedia.org/wiki/Software) that accesses, consumes, or displays web content.

HTTP is designed to permit intermediate network elements to improve or enable communications between clients and servers. High-traffic websites often benefit from [web cache](//en.wikipedia.org/wiki/Web_cache) servers that deliver content on behalf of [upstream servers](//en.wikipedia.org/wiki/Upstream_server) to improve response time. Web browsers cache previously accessed web resources and reuse them, whenever possible, to reduce network traffic. HTTP [proxy servers](//en.wikipedia.org/wiki/Proxy_server) at [private network](//en.wikipedia.org/wiki/Private_network) boundaries can facilitate communication for clients without a globally routable address, by relaying messages with external servers.

To allow intermediate HTTP nodes (proxy servers, web caches, etc.) to accomplish their functions, some of the [HTTP headers](//en.wikipedia.org/wiki/List_of_HTTP_header_fields) (found in HTTP requests/responses) are managed [hop-by-hop](//en.wikipedia.org/wiki/Hop-by-hop_transport) whereas other HTTP headers are managed [end-to-end](//en.wikipedia.org/wiki/End-to-end_principle) (managed only by the source client and by the target web server).

A [web resource](//en.wikipedia.org/wiki/Web_resource) is located by a [uniform resource locator](//en.wikipedia.org/wiki/Uniform_resource_locator) (URL), using the [Uniform Resource Identifier](//en.wikipedia.org/wiki/Uniform_Resource_Identifier) (URI) schemes *http* and *[https](//en.wikipedia.org/wiki/Https)*. URIs are encoded as [hyperlinks](//en.wikipedia.org/wiki/Hyperlink) in [HTML](//en.wikipedia.org/wiki/HTML) documents, so as to form interlinked [hypertext](//en.wikipedia.org/wiki/Hypertext) documents.

The protocol has been revised over time. A version is identified as HTTP/# where # is the version number. This article covers aspects of all versions but provides primary coverage for HTTP/0.9, HTTP/1.0, and HTTP/1.1. Separate articles cover [HTTP/2](//en.wikipedia.org/wiki/HTTP/2) and [HTTP/3](//en.wikipedia.org/wiki/HTTP/3) in detail.

| Version | Introduced | Status |
| --- | --- | --- |
| 0.9 | 1991 | Obsolete |
| 1.0 | 1996 | Obsolete |
| 1.1 | 1997 | Standard |
| 2 | 2015 | Standard |
| 3 | 2022 | Standard |

In HTTP/1.0, a separate TCP [connection](//en.wikipedia.org/wiki/Connection-oriented_communication) to the same server is made for every resource request.

In HTTP/1.1, instead a TCP connection can be reused to make multiple resource requests (i.e. of HTML pages, frames, images, [scripts](//en.wikipedia.org/wiki/Client-side_scripting), [stylesheets](//en.wikipedia.org/wiki/Cascading_Style_Sheets), etc.). HTTP/1.1 communications therefore experience less [latency](//en.wikipedia.org/wiki/Network_latency) as the establishment of TCP connections presents considerable overhead, especially under high traffic conditions.

Enhancements added with HTTP/2 allow for less latency and, in most cases, higher speeds than HTTP/1.1 communications. HTTP/2 adds support for:

* a compressed binary representation of metadata (HTTP headers) instead of a textual one, so that headers require much less space;
* a single [TCP/IP](//en.wikipedia.org/wiki/Internet_Protocol_suite) (usually [encrypted](//en.wikipedia.org/wiki/Encryption)) connection per accessed server domain instead of 2 to 8 TCP/IP connections;
* one or more bidirectional streams per TCP/IP connection in which HTTP requests and responses are broken down and transmitted in small packets to almost solve the problem of the HOLB ([head-of-line blocking](//en.wikipedia.org/wiki/Head-of-line_blocking));
* a push capability to allow server application to send data to clients whenever new data is available (without forcing clients to request periodically new data to server by using [polling](//en.wikipedia.org/wiki/Polling_(computer_science)) methods).

HTTP/3 uses [QUIC](//en.wikipedia.org/wiki/QUIC) + UDP transport protocols instead of TCP. Only the IP layer is used (which UDP, like TCP, builds on). This slightly improves the average speed of communications and avoids the occasional problem of TCP connection [congestion](//en.wikipedia.org/wiki/TCP_congestion_control) that can temporarily block or slow down the data flow of all its streams (another form of "*head of line blocking*").

HTTP/2 is supported by 71% of websites (34.1% HTTP/2 + 36.9% HTTP/3 with backwards compatibility) and supported by almost all web browsers (over 98% of users). It is also supported by major web servers over [Transport Layer Security](//en.wikipedia.org/wiki/Transport_Layer_Security) (TLS) using an [Application-Layer Protocol Negotiation](//en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) extension where [TLS 1.2](//en.wikipedia.org/wiki/TLS_1.2) or newer is required.

HTTP/3 is used on 36.9% of websites and is supported by most web browsers, i.e. (at least partially) supported by 97% of users. HTTP/3 uses [QUIC](//en.wikipedia.org/wiki/QUIC) instead of [TCP](//en.wikipedia.org/wiki/Transmission_Control_Protocol) for the underlying transport protocol. Like HTTP/2, it does not obsolete previous major versions of the protocol. In 2019, support for HTTP/3 was first added to [Cloudflare](//en.wikipedia.org/wiki/Cloudflare) and [Chrome](//en.wikipedia.org/wiki/Google_Chrome) and also enabled in [Firefox](//en.wikipedia.org/wiki/Firefox). HTTP/3 has lower latency for real-world web pages and loads faster than HTTP/2, in some cases over three times faster than HTTP/1.1, which is still commonly the only protocol enabled.

[HTTPS](//en.wikipedia.org/wiki/HTTPS), the secure variant of HTTP, is used by more than 85% of websites.

HTTP presumes an underlying and reliable [transport layer](//en.wikipedia.org/wiki/Transport_layer) protocol. The standard choice of the underlying protocol prior to HTTP/3 is [Transmission Control Protocol](//en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP). HTTP/3 uses a different transport layer called [QUIC](//en.wikipedia.org/wiki/QUIC), which provides reliability on top of the unreliable [User Datagram Protocol](//en.wikipedia.org/wiki/User_Datagram_Protocol) (UDP). HTTP/1.1 and earlier have been adapted to be used over plain unreliable UDP in [multicast](//en.wikipedia.org/wiki/Multicast) and [unicast](//en.wikipedia.org/wiki/Unicast) situations, forming HTTPMU and HTTPU. They are used in [UPnP](//en.wikipedia.org/wiki/UPnP) and [Simple Service Discovery Protocol](//en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol) (SSDP), two protocols usually run on a [local area network](//en.wikipedia.org/wiki/Local_area_network).

HTTP is a [stateless](//en.wikipedia.org/wiki/Stateless_protocol) application-level protocol and it requires a reliable network transport connection to exchange data between client and server. In HTTP implementations, [TCP/IP](//en.wikipedia.org/wiki/Transmission_Control_Protocol) connections are used using [well-known ports](//en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports) (typically [port 80](//en.wikipedia.org/wiki/TCP_port) if the connection is unencrypted or port 443 if the connection is encrypted, see also [List of TCP and UDP port numbers](//en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)). In HTTP/2, a TCP/IP connection plus multiple protocol channels are used. In HTTP/3, the application transport protocol [QUIC](//en.wikipedia.org/wiki/QUIC) over UDP is used.

#### Request and response messages through connections

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=6)]

Data is exchanged through a sequence of [request–response messages](//en.wikipedia.org/wiki/Request-response) which are exchanged by a [session layer](//en.wikipedia.org/wiki/Session_layer) transport connection. An HTTP client initially tries to establish a connection, real or virtual, with a server. An HTTP server listening on the port accepts the connection and then waits for a client's request message. The client sends its HTTP request message. Upon receiving the request the server sends back an HTTP response message, which includes header(s) plus a body if it is required. The body of this response message is typically the requested resource, although an error message or other information may also be returned. At any time and for many reasons, either the client or server can close the connection. Closing a connection is usually advertised by one or more HTTP headers in the last request or response.

#### Persistent connections

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=7)]

In HTTP/0.9, the TCP/IP connection is always closed after server response has been sent, so it is never persistent.

In HTTP/1.0, the TCP/IP connection should always be closed by server after a response has been sent.

In HTTP/1.1, a keep-alive-mechanism was officially introduced so that a connection could be reused for more than one request/response. Such persistent connections reduce request [latency](//en.wikipedia.org/wiki/Network_latency) perceptibly because the client does not need to re-negotiate the [TCP 3-Way-Handshake connection](//en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment) after the first request has been sent. Another positive side effect is that, in general, the connection becomes faster with time due to TCP's [slow-start](//en.wikipedia.org/wiki/TCP_congestion_control#Slow_start)-mechanism.

HTTP/1.1 added also [HTTP pipelining](//en.wikipedia.org/wiki/HTTP_pipelining) in order to further reduce lag time when using persistent connections by allowing clients to send multiple requests before waiting for each response. This optimization was never considered really safe because a few web servers and many [proxy servers](//en.wikipedia.org/wiki/Proxy_server), specially transparent proxy servers placed in Internet / [Intranets](//en.wikipedia.org/wiki/Intranet) between clients and servers, did not handle pipelined requests properly (they served only the first request discarding the others, they closed the connection because they saw more data after the first request or some proxies even returned responses out of order etc.). Because of this, only HEAD and some GET requests (i.e. limited to real file requests and so with [URLs](//en.wikipedia.org/wiki/URL) without query string used as a command, etc.) could be pipelined in a [safe](#Safe_method) and [idempotent](#Idempotent_method) mode. After many years of struggling with the problems introduced by enabling pipelining, this feature was first disabled and then removed from most browsers also because of the announced adoption of HTTP/2.

HTTP/2 extended the usage of persistent connections by multiplexing many concurrent requests/responses through a single TCP/IP connection.

HTTP/3 does not use TCP/IP connections but QUIC + UDP.

#### Content retrieval optimizations

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=8)]

In HTTP/0.9, a requested resource was always sent in its entirety.

HTTP/1.0 added headers to manage resources cached by a client in order to allow conditional GET requests.

* A server must return the entire content of the requested resource only if its last modified time is not known by the client or if it changed since the last full response to a GET request.

* Header `Content-Encoding` was added to specify whether the returned content is [compressed](//en.wikipedia.org/wiki/HTTP_compression).

* If the size of the content is not known in advance (i.e. because it is dynamically generated) then the header `Content-Length` would *not* be included. The client would assume that transfer was complete when the connection closed, but a premature close would leave the client with partial content yet the client would not know it's partial.

HTTP/1.1 introduced and later versions provide:

* Headers to better manage the conditional retrieval of cached resources.

* [Chunked transfer encoding](//en.wikipedia.org/wiki/Chunked_transfer_encoding) allows content to be streamed in chunks in order to reliably send it even when the server does not know its length in advance (i.e. because it is dynamically generated, etc.).

* [Byte range serving](//en.wikipedia.org/wiki/Byte_serving) allows a client to request portions (ranges of bytes) of a resource. This is useful to resume an interrupted download (when a file is very large), when only a part of a content has to be shown or dynamically added to the already visible part by a browser (i.e. only the first or the following n comments of a web page) in order to spare time, bandwidth and system resources, etc.

### Application session

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=9)]

As a [stateless protocol](//en.wikipedia.org/wiki/Stateless_protocol), HTTP does not require the web server to retain information or status about each user for the duration of multiple requests. If a [web application](//en.wikipedia.org/wiki/Web_application) needs an [application session](//en.wikipedia.org/wiki/Session_(computer_science)), it implements it via [HTTP cookies](//en.wikipedia.org/wiki/HTTP_cookie), hidden [variables](//en.wikipedia.org/wiki/Variable_(computer_science)) in a [web form](//en.wikipedia.org/wiki/Form_(web)) or another mechanism.

Typically, to start a session, an interactive [login](//en.wikipedia.org/wiki/Login) is performed, and to end a session, a [logout](//en.wikipedia.org/wiki/Logout) is requested by the user. These kind of operations use a custom [authentication](//en.wikipedia.org/wiki/Authentication) mechanism, not [HTTP authentication](#Authentication).

HTTP provides multiple authentication schemes such as [basic access authentication](//en.wikipedia.org/wiki/Basic_access_authentication) and [digest access authentication](//en.wikipedia.org/wiki/Digest_access_authentication) which operate via a challenge–response mechanism whereby the server identifies and issues a challenge before serving the requested content.

HTTP provides a general framework for access control and authentication, via an extensible set of challenge–response authentication schemes, which can be used by a server to challenge a client request and by a client to provide authentication information.

The authentication mechanisms described above belong to the HTTP protocol and are managed by client and server HTTP software (if configured to require authentication before allowing client access to one or more web resources), and not by the web applications using an [application session](#Application_session).

The HTTP authentication specification includes realms that provide an arbitrary, implementation-specific construct for further dividing resources common to a given root [URI](//en.wikipedia.org/wiki/Uniform_Resource_Identifier). The realm value string, if present, is combined with the canonical root URI to form the protection space component of the challenge. This in effect allows the server to define separate authentication scopes under one root URI.

### Encrypted connection

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=11)]

The most popular way of establishing an encrypted HTTP connection is [HTTPS](//en.wikipedia.org/wiki/HTTPS). Two other methods for establishing an encrypted HTTP connection also exist: [Secure Hypertext Transfer Protocol](//en.wikipedia.org/wiki/Secure_Hypertext_Transfer_Protocol), and using the [HTTP/1.1 Upgrade header](//en.wikipedia.org/wiki/HTTP/1.1_Upgrade_header) to specify an upgrade to TLS. Browser support for these two is, however, nearly non-existent.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Http_request_telnet_ubuntu.png/250px-Http_request_telnet_ubuntu.png)](//en.wikipedia.org/wiki/File:Http_request_telnet_ubuntu.png)

An HTTP/1.1 request made using telnet. The parts of the transaction are shown in different colors: request in red, response header in purple, and response body in green.

This section describes messages for HTTP/1.1. Later versions, [HTTP/2](//en.wikipedia.org/wiki/HTTP/2) and [HTTP/3](//en.wikipedia.org/wiki/HTTP/3), use a [binary protocol](//en.wikipedia.org/wiki/Communication_protocol#Binary), where headers are encoded in a single `HEADERS` and zero or more `CONTINUATION` frames using HPACK (HTTP/2) or QPACK (HTTP/3), which both provide efficient header compression. The request or response line from HTTP/1 has also been replaced by several pseudo-header fields, each beginning with a colon (`:`).

At the highest level, a message consists of a header followed by a body.

A header consists of lines of [ASCII](//en.wikipedia.org/wiki/ASCII) [text](//en.wikipedia.org/wiki/Plain_text); each terminated with a [carriage return](//en.wikipedia.org/wiki/Carriage_return) and [line feed](//en.wikipedia.org/wiki/Line_feed) sequence. The layout for both a request and a response header is:

Start line
:   Structured data that differs for request vs. response.

Header fields
:   Zero or more [header field](//en.wikipedia.org/wiki/HTTP_request_header_field) lines (at least 1 for HTTP/1.1); see below.

Empty line
:   Marks the end of the header.

A body consists of data in any format; not limited to ASCII. The format must match that specified by the `Content-Type` header field if the message contains one. A body is optional or, in other words, can be blank.

Before HTTP/2, the term *entity* was used to mean the body plus header fields that describe the body. In particular, not all headers were considered part of the entity. The term *entity header* referred to a header that was considered part of the entity, and sometimes the body was called the *entity body*. Modern documentation uses *body* and *header* without using *entity*.

A header field represents [metadata](//en.wikipedia.org/wiki/Metadata) about the containing message. Examples include how the body is encoded (via [Content-Encoding](//en.wikipedia.org/wiki/HTTP_compression#Content-Encoding_tokens)), session verification and identification of the client (as in [browser cookies](//en.wikipedia.org/wiki/Browser_cookies), IP address, [user-agent](//en.wikipedia.org/wiki/User-agent)) or their anonymity thereof (VPN or proxy masking, user-agent spoofing), how the server should handle data (as in [Do-Not-Track](//en.wikipedia.org/wiki/Do-Not-Track) or [Global Privacy Control](//en.wikipedia.org/wiki/Global_Privacy_Control)), and the age (the time it has resided in a shared [cache](//en.wikipedia.org/wiki/Web_cache)) of the document being downloaded. Generally, the information of a header field is used by [software](//en.wikipedia.org/wiki/Software) and not shown to the [user](//en.wikipedia.org/wiki/User_(computing)).

A header field line is formatted as a [name-value pair](//en.wikipedia.org/wiki/Name-value_pair) with a colon separator. [Whitespace](//en.wikipedia.org/wiki/Whitespace_(computer_science)) is not allowed around the name, but leading and trailing whitespace is ignored for the value part. Unlike a method name that must match exactly (case-sensitive), a header field name is matched ignoring case although often shown with each word capitalized. For example, the following are header fields for `Host` and `Accept-Language`.

```
Host: www.example.com
Accept-Language: en

```

The standards do not limit the size of a header field or the number of fields in a message. However, most servers, clients, and proxy software impose limits for practical and security reasons. For example, the Apache 2.3 server by default limits the size of each field to 8190 bytes, and there can be at most 100 header fields in a single request.

Although deprecated by RFC 7230, in the past, long lines could be split into multiple lines with a continuation line starting with a [space](//en.wikipedia.org/wiki/Space_(punctuation)) or [tab](//en.wikipedia.org/wiki/Tab_character) character.

A request is sent by a client to a server. The start line includes a method name, a request URI and the protocol version with a single space between each field. The following request start line specifies method `GET`, URI `/customer/123` and protocol version `HTTP/1.1`:

```
GET /customer/123 HTTP/1.1

```

[Request header fields](//en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields) allow the client to pass additional information beyond the request line, acting as request modifiers (similarly to the parameters of a procedure). They give information about the client, about the target resource, or about the expected handling of the request. In the HTTP/1.1 protocol, all header fields except `Host` are optional.

A request line containing only the path name is accepted by servers to maintain compatibility with HTTP clients before the HTTP/1.0 specification in [RFC](//en.wikipedia.org/wiki/RFC_(identifier)) [1945](https://www.rfc-editor.org/rfc/rfc1945).

The protocol structures transaction as operating on resources. What a resource represents, whether pre-existing data or data that is generated dynamically, depends on the implementation of the server. Often, the resource corresponds to a file or the output of an executable running on the server.

A request identifies a method (sometimes informally called *verb*) to classify the desired action to be performed on a resource. The HTTP/1.0 specification defined the GET, HEAD, and POST methods as well as listing the PUT, DELETE, LINK and UNLINK methods under additional methods. However, the HTTP/1.1 specification added five new methods: PUT, DELETE, CONNECT, OPTIONS, and TRACE. Any client can use any method and the server can be configured to support any combination of methods. If a method is unknown to an intermediate, it will be treated as an unsafe and [non-idempotent](//en.wikipedia.org/wiki/Idempotence) method. There is no limit to the number of methods that can be defined, which allows for future methods to be specified without breaking existing infrastructure. For example, [WebDAV](//en.wikipedia.org/wiki/WebDAV) defined seven new methods and [RFC](//en.wikipedia.org/wiki/RFC_(identifier)) [5789](https://www.rfc-editor.org/rfc/rfc5789) specified the [PATCH](//en.wikipedia.org/wiki/PATCH_(HTTP)) method. A general-purpose web server is required to implement at least GET and HEAD, and all other methods are considered optional by the specification.

Method names are case sensitive. This is in contrast to HTTP header field names which are case-insensitive.

GET
:   The request is for a representation of a resource. The server should only [retrieve data](//en.wikipedia.org/wiki/Data_retrieval); not modify state. For retrieving without making changes, GET is preferred over POST, as it can be [addressed](//en.wikipedia.org/wiki/Addressability) through a [URL](//en.wikipedia.org/wiki/URL).[*[clarification needed](//en.wikipedia.org/wiki/Wikipedia:Please_clarify)*] This enables bookmarking and sharing and makes GET responses eligible for [caching](//en.wikipedia.org/wiki/Browser_cache), which can save bandwidth. The [W3C](//en.wikipedia.org/wiki/W3C) has published guidance principles on this distinction, saying, "[Web application](//en.wikipedia.org/wiki/Web_application) design should be informed by the above principles, but also by the relevant limitations."

HEAD
:   The request is like a GET except that the response should *not* include the representation data in the body. This is useful for retrieving the representation [metadata](//en.wikipedia.org/wiki/Metadata) in the response header, without having to transfer the entire representation. Uses include checking whether a page is available via the status code and getting the size of a [file](//en.wikipedia.org/wiki/Computer_file) via header field `Content-Length`.

[POST](//en.wikipedia.org/wiki/POST_(HTTP))
:   The request is to process a resource in some way. For example, it is used for posting a message to an [Internet forum](//en.wikipedia.org/wiki/Internet_forum), subscribing to a [mailing list](//en.wikipedia.org/wiki/Mailing_list), or completing an [online shopping](//en.wikipedia.org/wiki/Online_shopping) transaction.

PUT
:   The request is to create or update a resource with the state in the request. A distinction from POST is that the client specifies the target location on the server.

DELETE
:   The request is to delete a resource.

CONNECT
:   Requests that the intermediary establish a [TCP/IP tunnel](//en.wikipedia.org/wiki/Tunneling_protocol) to the origin server identified by the request target. It is often used to secure connections through one or more [HTTP proxies](//en.wikipedia.org/wiki/HTTP_proxy) with [TLS](//en.wikipedia.org/wiki/Transport_Layer_Security). See [HTTP CONNECT method](//en.wikipedia.org/wiki/HTTP_tunnel#HTTP_CONNECT_method).

OPTIONS
:   Request is for a report of the HTTP methods that are supported for a resource. This can be used to check the functionality of a web server by requesting '\*' instead of a specific resource.

TRACE
:   Requests the server to respond with the received request in the response body. That way a client can see what (if any) changes or additions have been made by intermediaries. Useful for debugging.

[PATCH](//en.wikipedia.org/wiki/PATCH_(HTTP))
:   The request is to modify a resource according to its partial state in the request. Compared to PUT, this can save bandwidth by sending only part of a resource's representation instead of all of it.

| Method | RFC | Request has payload body | Response has payload body | Safe | Idempotent | Cacheable |
| --- | --- | --- | --- | --- | --- | --- |
| GET | RFC 9110 | Optional | Yes | Yes | Yes | Yes |
| HEAD | RFC 9110 | Optional | No | Yes | Yes | Yes |
| POST | RFC 9110 | Yes | Yes | No | No | Yes |
| PUT | RFC 9110 | Yes | Yes | No | Yes | No |
| DELETE | RFC 9110 | Optional | Yes | No | Yes | No |
| CONNECT | RFC 9110 | Optional | Yes | No | No | No |
| OPTIONS | RFC 9110 | Optional | Yes | Yes | Yes | No |
| TRACE | RFC 9110 | No | Yes | Yes | Yes | No |
| PATCH | RFC 5789 | Yes | Yes | No | No | No |

A request method is *safe* if a request with that method has no intended effect on the server. The methods GET, HEAD, OPTIONS, and TRACE are defined as safe. In other words, safe methods are intended to be [read-only](//en.wikipedia.org/wiki/Command%E2%80%93query_separation). Safe methods can still have [side effects](//en.wikipedia.org/wiki/Side_effect_(computer_science)) not seen by the client, such as appending request information to a [log file](//en.wikipedia.org/wiki/Server_log) or charging an [advertising account](//en.wikipedia.org/wiki/Web_banner).

In contrast, the methods POST, PUT, DELETE, CONNECT, and PATCH are not safe. They may modify the state of the server or have other effects such as sending an [email](//en.wikipedia.org/wiki/Email). Such methods are therefore not usually used by conforming [web robots](//en.wikipedia.org/wiki/Internet_bot) or web crawlers; some that do not conform tend to make requests without regard to context or consequences.

Despite the prescribed safety of GET requests, in practice their handling by the server is not technically limited in any way. Careless or deliberately irregular programming can allow GET requests to cause non-trivial changes on the server. This is discouraged because of the problems which can occur when [web caching](//en.wikipedia.org/wiki/Web_caching), [search engines](//en.wikipedia.org/wiki/List_of_search_engine_software), and other automated agents make unintended changes on the server. For example, a website might allow deletion of a resource through a URL such as *https://example.com/article/1234/delete*, which, if arbitrarily fetched, even using GET, would simply delete the article. A properly coded website would require a DELETE or POST method for this action, which non-malicious bots would not make.

One example of this occurring in practice was during the short-lived [Google Web Accelerator](//en.wikipedia.org/wiki/Google_Web_Accelerator) beta, which prefetched arbitrary URLs on the page a user was viewing, causing records to be automatically altered or deleted *en masse*. The beta was suspended only weeks after its first release, following widespread criticism.

A request method is *idempotent* if multiple identical requests with that method have the same effect as a single such request. The methods PUT and DELETE, and safe methods are defined as idempotent. Safe methods are trivially idempotent, since they are intended to have no effect on the server whatsoever; the PUT and DELETE methods, meanwhile, are idempotent since successive identical requests will be ignored. A website might, for instance, set up a PUT endpoint to modify a user's recorded email address. If this endpoint is configured correctly, any requests which ask to change a user's email address to the same email address which is already recorded—e.g. duplicate requests following a successful request—will have no effect. Similarly, a request to DELETE a certain user will have no effect if that user has already been deleted.

In contrast, the methods POST, CONNECT, and PATCH are not necessarily idempotent, and therefore sending an identical POST request multiple times may further modify the state of the server or have further effects, such as sending multiple [emails](//en.wikipedia.org/wiki/Email). In some cases this is the desired effect, but in other cases it may occur accidentally. A user might, for example, inadvertently send multiple POST requests by clicking a button again if they were not given clear feedback that the first click was being processed. While [web browsers](//en.wikipedia.org/wiki/Web_browser) may show [alert dialog boxes](//en.wikipedia.org/wiki/Alert_dialog_box) to warn users in some cases where reloading a page may re-submit a POST request, it is generally up to the web application to handle cases where a POST request should not be submitted more than once.

Note that whether or not a method is idempotent is not enforced by the protocol or web server. It is perfectly possible to write a web application in which (for example) a database insert or other non-idempotent action is triggered by a GET or other request. To do so against recommendations, however, may result in undesirable consequences, if a user agent assumes that repeating the same request is safe when it is not.

A request method is *cacheable* if responses to requests with that method may be stored for future reuse. The methods GET, HEAD, and POST are defined as cacheable.

In contrast, the methods PUT, DELETE, CONNECT, OPTIONS, TRACE, and PATCH are not cacheable.

A response is sent to the client by the server. The start line of a response consists of the protocol version, a status code and optionally a reason phrase with fields separated by a single space character. The following response start line specifies protocol version `HTTP/1.1`, status code `400` and reason phrase `Bad Request`.

```
HTTP/1.1 400 Bad Request

```

[Response header fields](//en.wikipedia.org/wiki/List_of_HTTP_header_fields#Response_fields) allow the server to pass additional information beyond the status line, acting as response modifiers. They give information about the server or about further access to the target resource or related resources. Each response header field has a defined meaning which can be further refined by the semantics of the request method or response status code.

The status code is a three-digit, decimal, integer value that represents the disposition of the server's attempt to satisfy the client's request. Generally, a client handles a response primarily based on the status code and secondarily on response header fields. A client may not understand each status code that a server reports but it must understand the class as indicated by the first digit and treat an unrecognized code as equivalent to the x00 code of that class. The classes are as follows:

1XX informational
:   The request was received, continuing process.

2XX successful
:   The request was successfully received, understood, and accepted.

3XX redirection
:   Further action needs to be taken in order to complete the request.

4XX client error
:   The request cannot be fulfilled due to an issue that the client might be able to control.

5XX server error
:   The server failed to fulfill an apparently valid request.

The standard reason phrases are only recommendations. A web server is allowed to use a localized equivalent. If a status code indicates a problem, the user agent might display the reason phrase to the user to provide further information about the nature of the problem. The standard also allows the user agent to attempt to interpret the reason phrase, though this might be unwise since the standard explicitly specifies that status codes are machine-readable and reason phrases are [human-readable](//en.wikipedia.org/wiki/Human-readable).

The following demonstrates an HTTP/1.1 request-response transaction for a server at [www.example.com](//en.wikipedia.org/wiki/Example.com), port 80. HTTP/1.0 would use the same messages except for a few missing headers. HTTP/2 and HTTP/3 would use the same request-response mechanism but with different representations for HTTP headers.

The following is a request with no body. It consists of a start line, 6 header fields and a blank line – each terminated with a [carriage return](//en.wikipedia.org/wiki/Carriage_return) and [line feed](//en.wikipedia.org/wiki/Line_feed) sequence. The `Host` header field distinguishes between various [DNS](//en.wikipedia.org/wiki/Domain_Name_System) names sharing a single [IP address](//en.wikipedia.org/wiki/IP_address), allowing name-based [virtual hosting](//en.wikipedia.org/wiki/Virtual_hosting). While optional in HTTP/1.0, it is mandatory in HTTP/1.1.

```
GET / HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-GB,en;q=0.5
Accept-Encoding: gzip, deflate, br
Connection: keep-alive

```

Although not clear in the representation above (due to limitations of this wiki), the blank line at the end results in ending in two line terminator sequences. Represented as a stream of characters, a shorted version of above shows this more clearly with `<CRLF>` representing a line terminator sequence: `GET / HTTP/1.1<CRLF>Host: www.example.com<CRLF><CRLF>`.

In the following response, the [ETag](//en.wikipedia.org/wiki/HTTP_ETag) (entity tag) header field is used to determine if a cached version of the requested resource is identical to the current version of the resource on the server. The `Content-Type` header field specifies the [Internet media type](//en.wikipedia.org/wiki/Internet_media_type) of the data conveyed by the HTTP message, and `Content-Length` indicates its length in bytes. The HTTP/1.1 [webserver](//en.wikipedia.org/wiki/Webserver) publishes its ability to respond to requests for a byte range of the resource by including `Accept-Ranges: bytes`. This is useful, if the client needs to have only certain portions of a resource sent by the server, which is called [byte serving](//en.wikipedia.org/wiki/Byte_serving). When `Connection: close` is sent, it means that the [web server](//en.wikipedia.org/wiki/Web_server) will close the [TCP](//en.wikipedia.org/wiki/Transmission_Control_Protocol) connection immediately after the end of the transfer of this response.

Most of the header fields are optional but some are mandatory. When header `Content-Length` is missing from a response with a body, then this should be considered an error in HTTP/1.0 but it may not be an error in HTTP/1.1 if header `Transfer-Encoding: chunked` is present. Chunked transfer encoding uses a chunk size of 0 to mark the end of the content. Some old implementations of HTTP/1.0 omitted the header `Content-Length` when the length of the body was not known at the beginning of the response and so the transfer of data to client continued until server closed the socket.

`Content-Encoding: gzip` informs the client that the body is compressed per the [gzip](//en.wikipedia.org/wiki/Gzip) algorithm.

```
HTTP/1.1 200 OK
Date: Mon, 23 May 2005 22:38:34 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 155
Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag: "3f80f-1b6-3e1cb03b"
Accept-Ranges: bytes
Connection: close

<html>
  <head>
    <title>An Example Page</title>
  </head>
  <body>
    <p>Hello World, this is a very simple HTML document.</p>
  </body>
</html>

```

[Gopher protocol](//en.wikipedia.org/wiki/Gopher_(protocol))
:   A content delivery protocol that was displaced by HTTP in the early 1990s.

[SPDY](//en.wikipedia.org/wiki/SPDY) protocol
:   An alternative to HTTP developed at [Google](//en.wikipedia.org/wiki/Google), superseded by [HTTP/2](//en.wikipedia.org/wiki/HTTP/2).

[Gemini protocol](//en.wikipedia.org/wiki/Gemini_(protocol))
:   A Gopher-inspired protocol which mandates privacy-related features.

[![](//upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tim_Berners-Lee_CP_2.jpg/250px-Tim_Berners-Lee_CP_2.jpg)](//en.wikipedia.org/wiki/File:Tim_Berners-Lee_CP_2.jpg)

[Tim Berners-Lee](//en.wikipedia.org/wiki/Tim_Berners-Lee)

[Tim Berners-Lee](//en.wikipedia.org/wiki/Tim_Berners-Lee) and his team at [CERN](//en.wikipedia.org/wiki/CERN) are credited with inventing HTTP, along with HTML and the associated technology for a [web server](//en.wikipedia.org/wiki/Web_server) and a client [user interface](//en.wikipedia.org/wiki/User_interface) called [web browser](//en.wikipedia.org/wiki/Web_browser). Berners-Lee designed HTTP in order to help with the adoption of his other idea: the "WorldWideWeb" project, which was first proposed in 1989, now known as the [World Wide Web](//en.wikipedia.org/wiki/World_Wide_Web). Development of HTTP was initiated in 1989 and summarized in a simple document describing the behavior of a client and a server using the first HTTP version, named 0.9. That version was subsequently developed, eventually becoming the public 1.0. Development of early HTTP [Request for Comments](//en.wikipedia.org/wiki/Request_for_Comments) (RFC) documents started a few years later in a coordinated effort by the [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force) (IETF) and the [World Wide Web Consortium](//en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), with work later moving to the IETF.

[The first web server](//en.wikipedia.org/wiki/CERN_httpd) went live in 1990. The protocol used had only one method, namely GET, which would request a page from a server. The response from the server was always an HTML page.

In 1991, the first documented official version of HTTP was written as a plain document, less than 700 words long, and this version was named HTTP/0.9, which supported only GET method, allowing clients to only retrieve HTML documents from the server, but not supporting any other file formats or information upload.

Since 1992, a new document was written to specify the evolution of the basic protocol towards its next full version. It supported both the simple request method of the 0.9 version and the full GET request that included the client HTTP version. This was the first of the many unofficial HTTP/1.0 drafts that preceded the final work on HTTP/1.0.

### W3C HTTP Working Group

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=31)]

After having decided that new features of HTTP protocol were required and that they had to be fully documented as official RFC documents, in early 1995, the HTTP Working Group (HTTP WG, led by [Dave Raggett](//en.wikipedia.org/wiki/Dave_Raggett)) was constituted with the aim to standardize and expand the protocol with extended operations, extended negotiation, richer meta-information, tied with a security protocol which became more efficient by adding additional methods and [header fields](//en.wikipedia.org/wiki/List_of_HTTP_header_fields).

The HTTP WG planned to revise and publish new versions of the protocol as HTTP/1.0 and HTTP/1.1 within 1995, but, because of the many revisions, that timeline lasted much more than one year.

The HTTP WG planned also to specify a far future version of HTTP called HTTP-NG (HTTP Next Generation) that would have solved all remaining problems, of previous versions, related to performances, low latency responses, etc. but this work started only a few years later and it was never completed.

In May 1996, RFC [1945](https://www.rfc-editor.org/rfc/rfc1945) was published as a final HTTP/1.0 revision of what had been used in previous 4 years as a pre-standard HTTP/1.0-draft which was already used by many web browsers and web servers.

In early 1996 developers started to even include unofficial extensions of the HTTP/1.0 protocol (i.e. keep-alive connections, etc.) into their products by using drafts of the upcoming HTTP/1.1 specifications.

Since early 1996, major web browsers and web server developers also started to implement new features specified by pre-standard HTTP/1.1 drafts specifications. End-user adoption of the new versions of browsers and servers was rapid. In March 1996, one web hosting company reported that over 40% of browsers in use on the Internet used the new HTTP/1.1 header "Host" to enable [virtual hosting](//en.wikipedia.org/wiki/Virtual_hosting), and that by June 1996, 65% of all browsers accessing their servers were pre-standard HTTP/1.1 compliant.

In January 1997, RFC [2068](https://www.rfc-editor.org/rfc/rfc2068) was officially released as HTTP/1.1 specifications.

In June 1999, RFC [2616](https://www.rfc-editor.org/rfc/rfc2616) was released to include all improvements and updates based on previous (obsolete) HTTP/1.1 specifications.

### W3C HTTP-NG Working Group

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=34)]

Resuming the old 1995 plan of previous HTTP Working Group, in 1997 an *HTTP-NG Working Group* was formed to develop a new HTTP protocol named HTTP-NG (HTTP New Generation). A few proposals / drafts were produced for the new protocol to use [multiplexing](//en.wikipedia.org/wiki/Multiplexing) of HTTP transactions inside a single TCP/IP connection, but in 1999, the group stopped its activity passing the technical problems to IETF.

### IETF HTTP Working Group restarted

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=35)]

In 2007, the IETF [HTTP Working Group](https://httpwg.org/) (HTTP WG bis or HTTPbis) was restarted firstly to revise and clarify previous HTTP/1.1 specifications and secondly to write and refine future HTTP/2 specifications (named httpbis).

In 2009, [Google](//en.wikipedia.org/wiki/Google) announced [SPDY](//en.wikipedia.org/wiki/SPDY) – a binary protocol they developed to speed up web traffic between browsers and servers. In many tests, using SPDY was indeed faster than using HTTP/1.1. SPDY was integrated into Google's [Chromium](//en.wikipedia.org/wiki/Chromium_(web_browser)) and then into other major web browsers. Some of the ideas about multiplexing HTTP streams over a single TCP connection were taken from various sources, including the work of W3C HTTP-NG Working Group.

In 2012, HTTP Working Group (HTTPbis) announced the need for a new protocol; initially considering aspects of SPDY and eventually deciding to derive the new protocol from SPDY. In May 2015, [HTTP/2](//en.wikipedia.org/wiki/HTTP/2) was published as RFC [7540](https://www.rfc-editor.org/rfc/rfc7540). The protocol was quickly adopted by web browsers already supporting SPDY and more slowly by web servers.

### 2014 updates to HTTP/1.1

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=38)]

In June 2014, the HTTP Working Group released an updated six-part HTTP/1.1 specification obsoleting RFC [2616](https://www.rfc-editor.org/rfc/rfc2616):

* RFC [7230](https://www.rfc-editor.org/rfc/rfc7230) – "Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing," *Obsolete.*
* RFC [7231](https://www.rfc-editor.org/rfc/rfc7231) – "Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content," *Obsolete.*
* RFC [7232](https://www.rfc-editor.org/rfc/rfc7232) – "Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests," *Obsolete.*
* RFC [7233](https://www.rfc-editor.org/rfc/rfc7233) – "Hypertext Transfer Protocol (HTTP/1.1): Range Requests," *Obsolete.*
* RFC [7234](https://www.rfc-editor.org/rfc/rfc7234) – "Hypertext Transfer Protocol (HTTP/1.1): Caching," *Obsolete.*
* RFC [7235](https://www.rfc-editor.org/rfc/rfc7235) – "Hypertext Transfer Protocol (HTTP/1.1): Authentication," *Obsolete.*

### HTTP/0.9 Deprecation

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=39)]

In 2014, HTTP/0.9 was deprecated for servers supporting version HTTP/1.1 (and higher):

> Since HTTP/0.9 did not support header fields in a request, there is no mechanism for it to support name-based virtual hosts (selection of resource by inspection of the Host header field). **Any server that implements name-based virtual hosts ought to disable support for HTTP/0.9**. Most requests that appear to be HTTP/0.9 are, in fact, badly constructed HTTP/1.x requests caused by a client failing to properly encode the request-target.

Since 2016 many product managers and developers of user agents (browsers, etc.) and web servers have begun planning to gradually deprecate and dismiss support for HTTP/0.9 protocol, mainly for the following reasons:

* it is so simple that an RFC document was never written (there is only the original document);
* it has no HTTP headers and lacks many other features that nowadays are required for minimal security reasons;
* it has not been widespread since 1999..2000 (because of HTTP/1.0 and HTTP/1.1) and is commonly used only by some very old network hardware, i.e. [routers](//en.wikipedia.org/wiki/Router_(computing)), etc.

As of 2022, HTTP/0.9 support has not been officially, completely deprecated and is still present in many web servers and browsers (for server responses only), even if usually disabled. It is unclear how long it will take to decommission HTTP/0.9.

In 2020, the first drafts of [HTTP/3](//en.wikipedia.org/wiki/HTTP/3) were published and major web browsers and web servers started to adopt it. On 6 June 2022, IETF standardized HTTP/3 as RFC [9114](https://www.rfc-editor.org/rfc/rfc9114).

### Updates and refactoring in 2022

[[edit](//en.wikipedia.org/w/index.php?title=HTTP&action=edit&section=41)]

In June 2022, RFC documents were published that deprecated many of the previous documents and introducing a few minor changes and a refactoring of HTTP semantics description into a separate document.

* RFC [9110](https://www.rfc-editor.org/rfc/rfc9110) – "HTTP Semantics," *Internet Standard 97.*
* RFC [9111](https://www.rfc-editor.org/rfc/rfc9111) – "HTTP Caching," *Internet Standard 98.*
* RFC [9112](https://www.rfc-editor.org/rfc/rfc9112) – "HTTP/1.1," *Internet Standard 99.*
* RFC [9113](https://www.rfc-editor.org/rfc/rfc9113) – "HTTP/2," *Proposed Standard.*
* RFC [9114](https://www.rfc-editor.org/rfc/rfc9114) – "HTTP/3," *Proposed Standard.* (See also the section above.)
* RFC [9204](https://www.rfc-editor.org/rfc/rfc9204) – "QPACK: Field Compression for HTTP/3," *Proposed Standard.*
* RFC [9218](https://www.rfc-editor.org/rfc/rfc9218) – "Extensible Prioritization Scheme for HTTP," *Proposed Standard.*

1. **[^](#cite_ref-6)** In practice, these streams are used as multiple TCP/IP sub-connections to [multiplex](//en.wikipedia.org/wiki/Multiplexing) concurrent requests/responses, thus greatly reducing the number of real TCP/IP connections on server side, from 2..8 per client to 1, and allowing many more clients to be served at once.
2. **[^](#cite_ref-22)** Since late 1996, some developers of popular HTTP/1.0 browsers and servers (specially those who had planned support for HTTP/1.1 too), started to deploy (as an unofficial extension) a sort of keep-alive-mechanism (by using new HTTP headers) in order to keep the TCP/IP connection open for more than a request/response pair and so to speed up the exchange of multiple requests/responses.

1. ^ [***a***](#cite_ref-Internet_Engineering_Task_Force-2022_1-0) [***b***](#cite_ref-Internet_Engineering_Task_Force-2022_1-1) [***c***](#cite_ref-Internet_Engineering_Task_Force-2022_1-2)  Cite error: The named reference `Internet Engineering Task Force-2022` was invoked but never defined (see the [help page](//en.wikipedia.org/wiki/Help:Cite_errors/Cite_error_references_no_text)).
2. **[^](#cite_ref-rfc3986_2-0)** [T. Berners-Lee](//en.wikipedia.org/wiki/Tim_Berners-Lee); [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); [L. Masinter](//en.wikipedia.org/wiki/Larry_Masinter) (January 2005). [*Uniform Resource Identifier (URI): Generic Syntax*](https://www.rfc-editor.org/rfc/rfc3986). Network Working Group. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC3986](https://doi.org/10.17487%2FRFC3986). STD 66. [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [3986](https://datatracker.ietf.org/doc/html/rfc3986). *Internet Standard 66.* Obsoletes RFC [2732](https://www.rfc-editor.org/rfc/rfc2732), [2396](https://www.rfc-editor.org/rfc/rfc2396) and [1808](https://www.rfc-editor.org/rfc/rfc1808). Updated by RFC [6874](https://www.rfc-editor.org/rfc/rfc6874), [7320](https://www.rfc-editor.org/rfc/rfc7320) and [8820](https://www.rfc-editor.org/rfc/rfc8820). Updates RFC [1738](https://www.rfc-editor.org/rfc/rfc1738).
3. ^ [***a***](#cite_ref-rfc1945_3-0) [***b***](#cite_ref-rfc1945_3-1) [***c***](#cite_ref-rfc1945_3-2) [***d***](#cite_ref-rfc1945_3-3) [T Berners-Lee](//en.wikipedia.org/wiki/Tim_Berners-Lee); [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); [H. Frystyk](//en.wikipedia.org/wiki/Henrik_Frystyk_Nielsen) (May 1996). [*Hypertext Transfer Protocol -- HTTP/1.0*](https://www.rfc-editor.org/rfc/rfc1945). Network Working Group. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC1945](https://doi.org/10.17487%2FRFC1945). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [1945](https://datatracker.ietf.org/doc/html/rfc1945). *Informational.*
4. ^ [***a***](#cite_ref-rfc9112_4-0) [***b***](#cite_ref-rfc9112_4-1) [***c***](#cite_ref-rfc9112_4-2) [***d***](#cite_ref-rfc9112_4-3) [***e***](#cite_ref-rfc9112_4-4) [***f***](#cite_ref-rfc9112_4-5) [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); M. Nottingham; J. Reschke, eds. (June 2022). [*HTTP/1.1*](https://www.rfc-editor.org/rfc/rfc9112). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9112](https://doi.org/10.17487%2FRFC9112). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). STD 99. [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9112](https://datatracker.ietf.org/doc/html/rfc9112). *Internet Standard 99.* Obsoletes RFC [7230](https://www.rfc-editor.org/rfc/rfc7230).
5. **[^](#cite_ref-5)** ["Classic HTTP Documents"](https://www.w3.org/Protocols/Classic.html). W3.org. 1998-05-14. Retrieved 2010-08-01.
6. ^ [***a***](#cite_ref-rfc9113_7-0) [***b***](#cite_ref-rfc9113_7-1) [***c***](#cite_ref-rfc9113_7-2) M. Thomson; C. Benfield, eds. (June 2022). [*HTTP/2*](https://www.rfc-editor.org/rfc/rfc9113). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9113](https://doi.org/10.17487%2FRFC9113). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9113](https://datatracker.ietf.org/doc/html/rfc9113). *Proposed Standard.* Obsoletes RFC [8740](https://www.rfc-editor.org/rfc/rfc8740), [7540](https://www.rfc-editor.org/rfc/rfc7540).
7. **[^](#cite_ref-8)** ["Usage Statistics of HTTP/2 for websites"](https://w3techs.com/technologies/details/ce-http2). *w3techs.com*. Retrieved 2026-01-21.
8. **[^](#cite_ref-9)** ["Usage Statistics of HTTP/3 for Websites, January 2026"](https://w3techs.com/technologies/details/ce-http3). *w3techs.com*. Retrieved 2026-01-21.
9. **[^](#cite_ref-10)** ["Can I use... Support tables for HTML5, CSS3, etc"](https://caniuse.com/?search=http2). *caniuse.com*. Retrieved 2024-01-05.
10. **[^](#cite_ref-rfc7301_11-0)** S. Friedl; A. Popov; A. Langley; E. Stephan (July 2014). [*Transport Layer Security (TLS) Application-Layer Protocol Negotiation Extension*](https://www.rfc-editor.org/rfc/rfc7301). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7301](https://doi.org/10.17487%2FRFC7301). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [7301](https://datatracker.ietf.org/doc/html/rfc7301). *Proposed Standard.* Updated by RFC [8447](https://www.rfc-editor.org/rfc/rfc8447).
11. **[^](#cite_ref-12)** ["Usage Statistics of HTTP/3 for websites"](https://w3techs.com/technologies/details/ce-http3). *w3techs.com*. Retrieved 2026-01-18.
12. **[^](#cite_ref-13)** ["Can I use... Support tables for HTML5, CSS3, etc"](https://caniuse.com/?search=http3). *canIuse.com*. Retrieved 2024-01-08.
13. **[^](#cite_ref-14)** Cimpanu, Catalin (26 September 2019). ["Cloudflare, Google Chrome, and Firefox add HTTP/3 support"](https://www.zdnet.com/article/cloudflare-google-chrome-and-firefox-add-http3-support/). *ZDNet*. Retrieved 27 September 2019.
14. **[^](#cite_ref-15)** ["HTTP/3: the past, the present, and the future"](https://blog.cloudflare.com/http3-the-past-present-and-future/). *The Cloudflare Blog*. 2019-09-26. Retrieved 2019-10-30.
15. **[^](#cite_ref-16)** ["Firefox Nightly supports HTTP 3 – General – Cloudflare Community"](https://community.cloudflare.com/t/firefox-nightly-supports-http-3/127778). 2019-11-19. Retrieved 2020-01-23.
16. **[^](#cite_ref-17)** ["HTTP/3 is Fast"](https://requestmetrics.com/web-performance/http3-is-fast). *Request Metrics*. Retrieved 2022-07-01.
17. **[^](#cite_ref-18)** ["Usage Statistics of Default protocol https for websites"](https://w3techs.com/technologies/details/ce-httpsdefault). *w3techs.com*. Retrieved 2024-01-05.
18. ^ [***a***](#cite_ref-rfc9110_19-0) [***b***](#cite_ref-rfc9110_19-1) [***c***](#cite_ref-rfc9110_19-2) [***d***](#cite_ref-rfc9110_19-3) [***e***](#cite_ref-rfc9110_19-4) [***f***](#cite_ref-rfc9110_19-5) [***g***](#cite_ref-rfc9110_19-6) [***h***](#cite_ref-rfc9110_19-7) [***i***](#cite_ref-rfc9110_19-8) [***j***](#cite_ref-rfc9110_19-9) [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); M. Nottingham; J. Reschke, eds. (June 2022). [*HTTP Semantics*](https://www.rfc-editor.org/rfc/rfc9110). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9110](https://doi.org/10.17487%2FRFC9110). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). STD 97. [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9110](https://datatracker.ietf.org/doc/html/rfc9110). *Internet Standard 97.* Obsoletes RFC [2818](https://www.rfc-editor.org/rfc/rfc2818), [7230](https://www.rfc-editor.org/rfc/rfc7230), [7231](https://www.rfc-editor.org/rfc/rfc7231), [7232](https://www.rfc-editor.org/rfc/rfc7232), [7233](https://www.rfc-editor.org/rfc/rfc7233), [7235](https://www.rfc-editor.org/rfc/rfc7235), [7538](https://www.rfc-editor.org/rfc/rfc7538), [7615](https://www.rfc-editor.org/rfc/rfc7615) and [7694](https://www.rfc-editor.org/rfc/rfc7694). Updates RFC [3864](https://www.rfc-editor.org/rfc/rfc3864).
19. ^ [***a***](#cite_ref-Connections_20-0) [***b***](#cite_ref-Connections_20-1) ["Connections, Clients, and Servers"](https://datatracker.ietf.org/doc/html/rfc9110#section-3.3). [*RFC 9110, HTTP Semantics*](https://www.rfc-editor.org/rfc/rfc9110). [IETF](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). sec. 3.3. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9110](https://doi.org/10.17487%2FRFC9110). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9110](https://datatracker.ietf.org/doc/html/rfc9110).
20. ^ [***a***](#cite_ref-Sailu_Reddy-2002_21-0) [***b***](#cite_ref-Sailu_Reddy-2002_21-1) David Gourley; Brian Totty; Marjorie Sayer; Anshu Aggarwal; Sailu Reddy (2002). [*HTTP: The Definitive Guide. (excerpt of chapter: "Persistent Connections")*](https://www.oreilly.com/library/view/http-the-definitive/1565925092/ch04s05.html). O'Reilly Media, inc. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-56592-509-0](//en.wikipedia.org/wiki/Special:BookSources/978-1-56592-509-0). Retrieved 2021-10-18.
21. **[^](#cite_ref-23)** Lee, Wei-Bin; Chen, Hsing-Bai; Chang, Shun-Shyan; Chen, Tzung-Her (2019-01-25). ["Secure and efficient protection for HTTP cookies with self-verification"](https://onlinelibrary.wiley.com/doi/10.1002/dac.3857). *International Journal of Communication Systems*. **32** (2) e3857. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.1002/dac.3857](https://doi.org/10.1002%2Fdac.3857). [S2CID](//en.wikipedia.org/wiki/S2CID_(identifier)) [59524143](https://api.semanticscholar.org/CorpusID:59524143).
22. **[^](#cite_ref-24)** Canavan, John (2001). *Fundamentals of Networking Security*. Norwood, MA: Artech House. pp. 82–83. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-58053-176-4](//en.wikipedia.org/wiki/Special:BookSources/978-1-58053-176-4).
23. **[^](#cite_ref-25)** Zalewski, Michal. ["Browser Security Handbook"](https://code.google.com/p/browsersec/wiki/Part1#True_URL_schemes). Retrieved 30 April 2015.`{{cite web}}`: CS1 maint: url-status ([link](//en.wikipedia.org/wiki/Category:CS1_maint:_url-status))
24. **[^](#cite_ref-26)** ["Chromium Issue 4527: implement RFC 2817: Upgrading to TLS Within HTTP/1.1"](https://code.google.com/p/chromium/issues/detail?id=4527). Retrieved 30 April 2015.
25. **[^](#cite_ref-27)** ["Mozilla Bug 276813 – [RFE] Support RFC 2817 / TLS Upgrade for HTTP 1.1"](https://bugzilla.mozilla.org/show_bug.cgi?id=276813). Retrieved 30 April 2015.
26. **[^](#cite_ref-28)** [*HTTP/2*](https://www.rfc-editor.org/rfc/rfc9113). [IETF](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). June 2022. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9113](https://doi.org/10.17487%2FRFC9113). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9113](https://datatracker.ietf.org/doc/html/rfc9113).
27. **[^](#cite_ref-29)** Peon, R.; Ruellan, H. (May 2015). [*HPACK: Header Compression for HTTP/2*](https://www.rfc-editor.org/rfc/rfc7541). [IETF](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7541](https://doi.org/10.17487%2FRFC7541). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [7541](https://datatracker.ietf.org/doc/html/rfc7541).
28. **[^](#cite_ref-30)** ["Methods: Overview"](https://datatracker.ietf.org/doc/html/rfc9110#section-9.1). [*HTTP Semantics*](https://www.rfc-editor.org/rfc/rfc9110). [IETF](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). June 2022. sec. 9.1. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9110](https://doi.org/10.17487%2FRFC9110). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9110](https://datatracker.ietf.org/doc/html/rfc9110).
29. **[^](#cite_ref-31)** ["Field Names"](https://datatracker.ietf.org/doc/html/rfc9110#section-5.1). [*HTTP Semantics*](https://www.rfc-editor.org/rfc/rfc9110). [IETF](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). June 2022. sec. 5.1. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9110](https://doi.org/10.17487%2FRFC9110). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9110](https://datatracker.ietf.org/doc/html/rfc9110).
30. **[^](#cite_ref-32)** ["core - Apache HTTP Server"](https://web.archive.org/web/20120509104709/https://httpd.apache.org/docs/2.3/mod/core.html#limitrequestfieldsize). Httpd.apache.org. Archived from [the original](https://httpd.apache.org/docs/2.3/mod/core.html#limitrequestfieldsize) on 2012-05-09. Retrieved 2012-03-13.
31. **[^](#cite_ref-33)** ["Field Parsing"](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.4). [*Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing*](https://www.rfc-editor.org/rfc/rfc7230). [IETF](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). June 2014. sec. 3.2.4. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7230](https://doi.org/10.17487%2FRFC7230). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [7230](https://datatracker.ietf.org/doc/html/rfc7230).
32. **[^](#cite_ref-34)** ["Message format"](https://datatracker.ietf.org/doc/html/rfc9112#section-2.1). [*RFC 9112: HTTP/1.1*](https://www.rfc-editor.org/rfc/rfc9112). [IETF](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). sec. 2.1. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9112](https://doi.org/10.17487%2FRFC9112). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9112](https://datatracker.ietf.org/doc/html/rfc9112).
33. **[^](#cite_ref-35)** ["Apache Week. HTTP/1.1"](https://web.archive.org/web/20210602213136/http://www.apacheweek.com/features/http11). Archived from [the original](https://www.apacheweek.com/features/http11) on 2021-06-02. Retrieved 2021-05-03. 090502 apacheweek.com
34. ^ [***a***](#cite_ref-rfc2616_36-0) [***b***](#cite_ref-rfc2616_36-1) [***c***](#cite_ref-rfc2616_36-2) [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); J. Gettys; J. Mogul; [H. Frystyk](//en.wikipedia.org/wiki/Henrik_Frystyk_Nielsen); [L. Masinter](//en.wikipedia.org/wiki/Larry_Masinter); P. Leach; [T. Berners-Lee](//en.wikipedia.org/wiki/Tim_Berners-Lee) (August 1999). [*Hypertext Transfer Protocol -- HTTP/1.1*](https://www.rfc-editor.org/rfc/rfc2616). Network Working Group. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC2616](https://doi.org/10.17487%2FRFC2616). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [2616](https://datatracker.ietf.org/doc/html/rfc2616). *Obsolete.* Obsoleted by RFC [7230](https://www.rfc-editor.org/rfc/rfc7230), [7231](https://www.rfc-editor.org/rfc/rfc7231), [7232](https://www.rfc-editor.org/rfc/rfc7232), [7233](https://www.rfc-editor.org/rfc/rfc7233), [7234](https://www.rfc-editor.org/rfc/rfc7234) and [7235](https://www.rfc-editor.org/rfc/rfc7235). Obsoletes RFC [2068](https://www.rfc-editor.org/rfc/rfc2068). Updated by RFC [2817](https://www.rfc-editor.org/rfc/rfc2817), [5785](https://www.rfc-editor.org/rfc/rfc5785), [6266](https://www.rfc-editor.org/rfc/rfc6266) and [6585](https://www.rfc-editor.org/rfc/rfc6585).
35. **[^](#cite_ref-37)** Jacobs, Ian (2004). ["URIs, Addressability, and the use of HTTP GET and POST"](https://www.w3.org/2001/tag/doc/whenToUseGet.html#checklist). *Technical Architecture Group finding*. W3C. Retrieved 26 September 2010.
36. **[^](#cite_ref-38)** ["Vulnerability Note VU#150227: HTTP proxy default configurations allow arbitrary TCP connections"](https://www.kb.cert.org/vuls/id/150227). [US-CERT](//en.wikipedia.org/wiki/CERT_Coordination_Center). 2002-05-17. Retrieved 2007-05-10.
37. **[^](#cite_ref-rfc5789_39-0)** L. Dusseault (March 2010). [*PATCH Method for HTTP*](https://www.rfc-editor.org/rfc/rfc5789). [Internet Research Task Force](//en.wikipedia.org/wiki/Internet_Research_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5789](https://doi.org/10.17487%2FRFC5789). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [5789](https://datatracker.ietf.org/doc/html/rfc5789). *Proposed Standard.*
38. **[^](#cite_ref-Ediger-2007_40-0)** Ediger, Brad (2007-12-21). [*Advanced Rails: Building Industrial-Strength Web Apps in Record Time*](https://shop.oreilly.com/product/9780596510329.do). O'Reilly Media, Inc. p. 188. [ISBN](//en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-596-51972-8](//en.wikipedia.org/wiki/Special:BookSources/978-0-596-51972-8). "A common mistake is to use GET for an action that updates a resource. [...] This problem came into the Rails public eye in 2005, when the Google Web Accelerator was released."
39. **[^](#cite_ref-41)** Cantrell, Christian (2005-06-01). ["What Have We Learned From the Google Web Accelerator?"](https://web.archive.org/web/20170819161233/https://blogs.adobe.com/cantrell/archives/2005/06/what_have_we_le.html). *Adobe Blogs*. Adobe. Archived from [the original](https://blogs.adobe.com/cantrell/archives/2005/06/what_have_we_le.html) on 2017-08-19. Retrieved 2018-11-19.
40. **[^](#cite_ref-42)** Luotonen, Ari; Franks, John (February 22, 1996). [*Byte Range Retrieval Extension to HTTP*](https://datatracker.ietf.org/doc/html/draft-ietf-http-range-retrieval-00). IETF. I-D draft-ietf-http-range-retrieval-00.
41. ^ [***a***](#cite_ref-Tim_Berner-Lee-1991_43-0) [***b***](#cite_ref-Tim_Berner-Lee-1991_43-1) [***c***](#cite_ref-Tim_Berner-Lee-1991_43-2) [***d***](#cite_ref-Tim_Berner-Lee-1991_43-3) Tim Berner-Lee (1991-01-01). ["The Original HTTP as defined in 1991"](https://www.w3.org/pub/WWW/Protocols/HTTP/AsImplemented.html). *www.w3.org*. World Wide Web Consortium. Retrieved 2010-07-24.
42. ^ [***a***](#cite_ref-Tim_Berner-Lee-1992_44-0) [***b***](#cite_ref-Tim_Berner-Lee-1992_44-1) Tim Berner-Lee (1992). ["Basic HTTP as defined in 1992"](https://www.w3.org/Protocols/HTTP/HTTP2.html). *www.w3.org*. World Wide Web Consortium. Retrieved 2021-10-19.
43. **[^](#cite_ref-45)** ["Invention Of The Web, Web History, Who Invented the Web, Tim Berners-Lee, Robert Cailliau, CERN, First Web Server"](https://www.livinginternet.com/w/wi_lee.htm). *LivingInternet*. Retrieved 2021-08-11.
44. **[^](#cite_ref-46)** Berners-Lee, Tim (1990-10-02). ["daemon.c - TCP/IP based server for HyperText"](https://www.w3.org/Daemon/old/V0.1/daemon.c). *www.w3.org*. Retrieved 2021-08-11.
45. **[^](#cite_ref-47)** Berners-Lee, Tim. ["HyperText Transfer Protocol"](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/Protocols/HTTP.html). [World Wide Web Consortium](//en.wikipedia.org/wiki/World_Wide_Web_Consortium). Retrieved 31 August 2010.
46. **[^](#cite_ref-48)** Raggett, Dave. ["Dave Raggett's Bio"](https://www.w3.org/People/Raggett/profile.html). World Wide Web Consortium. Retrieved 11 June 2010.
47. **[^](#cite_ref-49)** Raggett, Dave; Berners-Lee, Tim. ["Hypertext Transfer Protocol Working Group"](https://www.w3.org/Arena/webworld/httpwgcharter.html). World Wide Web Consortium. Retrieved 29 September 2010.
48. **[^](#cite_ref-50)** Raggett, Dave. ["HTTP WG Plans"](https://www.w3.org/Arena/webworld/httpwgplans.html). World Wide Web Consortium. Retrieved 29 September 2010.
49. **[^](#cite_ref-51)** ["HTTP 1.1 Compliant Browsers"](https://web.archive.org/web/19980204144926/http://www.webcom.com/glossary/http1.1.shtml). *webcom.com*. Archived from [the original](https://www.webcom.com/glossary/http1.1.shtml) on 1998-02-04. Retrieved 2009-05-29.
50. **[^](#cite_ref-rfc2068_52-0)** [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); J. Gettys; J. Mogul; [H. Frystyk](//en.wikipedia.org/wiki/Henrik_Frystyk_Nielsen); [T. Berners-Lee](//en.wikipedia.org/wiki/Tim_Berners-Lee) (January 1997). [*Hypertext Transfer Protocol -- HTTP/1.1*](https://www.rfc-editor.org/rfc/rfc2068). Network Working Group. [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC2068](https://doi.org/10.17487%2FRFC2068). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [2068](https://datatracker.ietf.org/doc/html/rfc2068). *Obsolete.* Obsoleted by RFC [2616](https://www.rfc-editor.org/rfc/rfc2616).
51. **[^](#cite_ref-53)** ["HTTP-NG Working Group"](https://www.w3.org/Protocols/HTTP-NG/). *www.w3.org*. World Wide Web Consortium. 1997. Retrieved 2021-10-19.
52. **[^](#cite_ref-54)** Web Administrator (2007). ["HTTP Working Group"](https://httpwg.org/). *httpwg.org*. IETF. Retrieved 2021-10-19.
53. **[^](#cite_ref-55)** Web Administrator (2007). ["HTTP Working Group: charter httpbis"](https://datatracker.ietf.org/wg/httpbis/charter/). *datatracker.ietf.org*. IETF. Retrieved 2021-10-19.
54. **[^](#cite_ref-56)** ["SPDY: An experimental protocol for a faster web"](http://dev.chromium.org/spdy/spdy-whitepaper). *dev.chromium.org*. Google. 2009-11-01. Retrieved 2021-10-19.
55. **[^](#cite_ref-57)** ["Rechartering httpbis"](https://lists.w3.org/Archives/Public/ietf-http-wg/2012JanMar/0098.html). IETF; HTTP WG. 2012-01-24. Retrieved 2021-10-19.
56. **[^](#cite_ref-58)** IESG Secretary (2012-03-19). ["WG Action: RECHARTER: Hypertext Transfer Protocol Bis (httpbis)"](https://lists.w3.org/Archives/Public/ietf-http-wg/2012JanMar/0902.html). IETF; HTTP WG. Retrieved 2021-10-19.
57. **[^](#cite_ref-59)** Ilya Grigorik; Surma (2019-09-03). ["High Performance Browser Networking: Introduction to HTTP/2"](https://developers.google.com/web/fundamentals/performance/http2). *developers.google.com*. Google Inc. Retrieved 2021-10-19.
58. **[^](#cite_ref-rfc7540_60-0)** M. Belshe; R. Peon (May 2015). M. Thomson (ed.). [*Hypertext Transfer Protocol Version 2 (HTTP/2)*](https://www.rfc-editor.org/rfc/rfc7540). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7540](https://doi.org/10.17487%2FRFC7540). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [7540](https://datatracker.ietf.org/doc/html/rfc7540). *Proposed Standard.* Updated by RFC [8740](https://www.rfc-editor.org/rfc/rfc8740).
59. ^ [***a***](#cite_ref-rfc7230_61-0) [***b***](#cite_ref-rfc7230_61-1) [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); J. Reschke, eds. (June 2014). [*Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing*](https://www.rfc-editor.org/rfc/rfc7230). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7230](https://doi.org/10.17487%2FRFC7230). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [7230](https://datatracker.ietf.org/doc/html/rfc7230). *Obsolete.* Obsoleted by RFC [9110](https://www.rfc-editor.org/rfc/rfc9110) and [9112](https://www.rfc-editor.org/rfc/rfc9112). Updated by [RFC](//en.wikipedia.org/wiki/RFC_(identifier)) [8615](https://www.rfc-editor.org/rfc/rfc8615). Obsoletes RFC [2145](https://www.rfc-editor.org/rfc/rfc2145) and [2616](https://www.rfc-editor.org/rfc/rfc2616). Updates RFC [2817](https://www.rfc-editor.org/rfc/rfc2817) and [2818](https://www.rfc-editor.org/rfc/rfc2818).
60. **[^](#cite_ref-rfc7231_62-0)** [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); J. Reschke, eds. (June 2014). [*Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content*](https://www.rfc-editor.org/rfc/rfc7231). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7231](https://doi.org/10.17487%2FRFC7231). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [7231](https://datatracker.ietf.org/doc/html/rfc7231). *Obsolete.* Obsoleted by RFC [9110](https://www.rfc-editor.org/rfc/rfc9110). Obsoletes RFC [2616](https://www.rfc-editor.org/rfc/rfc2616). Updates RFC [2817](https://www.rfc-editor.org/rfc/rfc2817).
61. **[^](#cite_ref-rfc7232_63-0)** [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); J. Reschke, eds. (June 2014). [*Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests*](https://www.rfc-editor.org/rfc/rfc7232). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7232](https://doi.org/10.17487%2FRFC7232). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [7232](https://datatracker.ietf.org/doc/html/rfc7232). *Obsolete.* Obsoleted by RFC [9110](https://www.rfc-editor.org/rfc/rfc9110). Obsoletes RFC [2616](https://www.rfc-editor.org/rfc/rfc2616).
62. **[^](#cite_ref-rfc7233_64-0)** [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); Y. Lafon; J. Reschke, eds. (June 2014). [*Hypertext Transfer Protocol (HTTP/1.1): Range Requests*](https://www.rfc-editor.org/rfc/rfc7233). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7233](https://doi.org/10.17487%2FRFC7233). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [7233](https://datatracker.ietf.org/doc/html/rfc7233). *Obsolete.* Obsoleted by RFC [9110](https://www.rfc-editor.org/rfc/rfc9110). Obsoletes RFC [2616](https://www.rfc-editor.org/rfc/rfc2616).
63. **[^](#cite_ref-rfc7234_65-0)** [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); M. Nottingham; J. Reschke (June 2014). [*Hypertext Transfer Protocol (HTTP/1.1): Caching*](https://www.rfc-editor.org/rfc/rfc7234). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7234](https://doi.org/10.17487%2FRFC7234). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [7234](https://datatracker.ietf.org/doc/html/rfc7234). *Obsolete.* Obsoleted by RFC [9111](https://www.rfc-editor.org/rfc/rfc9111). Obsoletes RFC [2616](https://www.rfc-editor.org/rfc/rfc2616).
64. **[^](#cite_ref-rfc7235_66-0)** [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); J. Reschke, eds. (June 2014). [*Hypertext Transfer Protocol (HTTP/1.1): Authentication*](https://www.rfc-editor.org/rfc/rfc7235). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7235](https://doi.org/10.17487%2FRFC7235). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [7235](https://datatracker.ietf.org/doc/html/rfc7235). *Obsolete.* Obsoleted by RFC [9110](https://www.rfc-editor.org/rfc/rfc9110). Obsoletes RFC [2617](https://www.rfc-editor.org/rfc/rfc2617), [2616](https://www.rfc-editor.org/rfc/rfc2616).
65. **[^](#cite_ref-67)** Matt Menke (2016-06-30). ["Intent to Deprecate and Remove: HTTP/0.9 Support"](https://groups.google.com/a/chromium.org/g/blink-dev/c/OdKnpLlvVUo/m/1EpFGVUjAwAJ). *groups.google.com*. Retrieved 2021-10-15.
66. ^ [***a***](#cite_ref-rfc9114_68-0) [***b***](#cite_ref-rfc9114_68-1) M. Bishop, ed. (June 2022). [*HTTP/3*](https://www.rfc-editor.org/rfc/rfc9114). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9114](https://doi.org/10.17487%2FRFC9114). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9114](https://datatracker.ietf.org/doc/html/rfc9114). *Proposed Standard.*
67. **[^](#cite_ref-rfc9111_69-0)** [R. Fielding](//en.wikipedia.org/wiki/Roy_Fielding); M. Nottingham; J. Reschke (June 2022). [*HTTP Caching*](https://www.rfc-editor.org/rfc/rfc9111). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9111](https://doi.org/10.17487%2FRFC9111). STD 98. [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9111](https://datatracker.ietf.org/doc/html/rfc9111). *Internet Standard 98.* Obsoletes RFC [7234](https://www.rfc-editor.org/rfc/rfc7234).
68. **[^](#cite_ref-rfc9204_70-0)** C. Krasic; M. Bishop (June 2022). A. Frindell (ed.). [*QPACK: Field Compression for HTTP/3*](https://www.rfc-editor.org/rfc/rfc9204). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9204](https://doi.org/10.17487%2FRFC9204). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9204](https://datatracker.ietf.org/doc/html/rfc9204). *Proposed Standard.*
69. **[^](#cite_ref-rfc9218_71-0)** 奥 一穂 (K. Oku); L. Pardue (June 2022). [*Extensible Prioritization Scheme for HTTP*](https://www.rfc-editor.org/rfc/rfc9218). [Internet Engineering Task Force](//en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](//en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9218](https://doi.org/10.17487%2FRFC9218). [ISSN](//en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](//en.wikipedia.org/wiki/Request_for_Comments) [9218](https://datatracker.ietf.org/doc/html/rfc9218). *Proposed Standard.*