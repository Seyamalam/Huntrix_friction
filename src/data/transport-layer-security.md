# Transport Layer Security

* Source: https://en.wikipedia.org/wiki/Transport_Layer_Security

---

**Transport Layer Security** (**TLS**) is a [cryptographic protocol](https://en.wikipedia.org/wiki/Cryptographic_protocol) designed to provide communications security over a [computer network](https://en.wikipedia.org/wiki/Computer_network), such as the [Internet](https://en.wikipedia.org/wiki/Internet). The [protocol](https://en.wikipedia.org/wiki/Communication_protocol) is widely used in [applications](https://en.wikipedia.org/wiki/Application_software) such as [email](https://en.wikipedia.org/wiki/Email), [instant messaging](https://en.wikipedia.org/wiki/Instant_messaging), and [voice over IP](https://en.wikipedia.org/wiki/Voice_over_IP), but its use in securing [HTTPS](https://en.wikipedia.org/wiki/HTTPS) remains the most publicly visible.

The TLS protocol aims primarily to provide security, including [privacy](https://en.wikipedia.org/wiki/Privacy) (confidentiality), integrity, and authenticity through the use of [cryptography](https://en.wikipedia.org/wiki/Cryptography), such as the use of [certificates](https://en.wikipedia.org/wiki/Public_key_certificate), between two or more communicating computer applications. It runs in the [presentation layer](https://en.wikipedia.org/wiki/Presentation_layer) and is itself composed of two layers: the TLS record and the TLS [handshake protocols](https://en.wikipedia.org/wiki/Handshake_(computing)).

The closely-related [Datagram Transport Layer Security](https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security) (DTLS) is a [communications protocol](https://en.wikipedia.org/wiki/Communications_protocol) that provides [security](https://en.wikipedia.org/wiki/Communications_security) to [datagram](https://en.wikipedia.org/wiki/Datagram)-based applications. In technical writing, references to "(D)TLS" are often seen when it applies to both versions.

TLS is a proposed [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) (IETF) standard, first defined in 1999, and the current version is TLS 1.3, defined in August 2018. TLS builds on the now-deprecated **SSL** (**Secure Sockets Layer**) specifications (1994, 1995, 1996) developed by [Netscape Communications](https://en.wikipedia.org/wiki/Netscape_Communications) for adding the [HTTPS](https://en.wikipedia.org/wiki/HTTPS) protocol to their [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator) web browser.

## Description

[Client–server](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) applications use the TLS [protocol](https://en.wikipedia.org/wiki/Cryptographic_protocol) to communicate across a network in a way designed to prevent [eavesdropping](https://en.wikipedia.org/wiki/Eavesdropping) and [tampering](https://en.wikipedia.org/wiki/Tamper-evident).

Since applications can communicate either with or without TLS (or SSL), it is necessary for the [client](https://en.wikipedia.org/wiki/Client_(computing)) to request that the [server](https://en.wikipedia.org/wiki/Server_(computing)) set up a TLS connection. One of the main ways of achieving this is to use a different [port number](https://en.wikipedia.org/wiki/Port_(computer_networking)) for TLS connections. Port 80 is typically used for unencrypted [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) traffic while port 443 is the common port used for encrypted [HTTPS](https://en.wikipedia.org/wiki/HTTPS) traffic. Another mechanism is to make a protocol-specific [STARTTLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) request to the server to switch the connection to TLS – for example, when using some mail and [news](https://en.wikipedia.org/wiki/Usenet) protocols.

Once the client and server have agreed to use TLS, they negotiate a [stateful](https://en.wikipedia.org/wiki/State_(computer_science)) connection by using a handshaking procedure (see § TLS handshake). The protocols use a handshake with an [asymmetric cipher](https://en.wikipedia.org/wiki/Asymmetric_cipher) to establish not only cipher settings but also a session-specific shared key with which further communication is encrypted using a [symmetric cipher](https://en.wikipedia.org/wiki/Symmetric_cipher). During this handshake, the client and server agree on various parameters used to establish the connection's security:

* The handshake begins when a client connects to a TLS-enabled server requesting a secure connection and the client presents a list of supported [cipher suites](https://en.wikipedia.org/wiki/Cipher_suite) ([ciphers](https://en.wikipedia.org/wiki/Encryption) and [hash functions](https://en.wikipedia.org/wiki/Hash_function)).
* From this list, the server picks a cipher and hash function that it also supports and notifies the client of the decision.
* The server usually then provides identification in the form of a [digital certificate](https://en.wikipedia.org/wiki/Public_key_certificate). The certificate contains the [server name](https://en.wikipedia.org/wiki/Hostname), the trusted [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) (CA) that vouches for the authenticity of the certificate, and the server's public encryption key.
* The client confirms the validity of the certificate before proceeding.
* To generate the session keys used for the secure connection, the client either:

    * encrypts a [random number](https://en.wikipedia.org/wiki/Random_number_generation) (*PreMasterSecret*) with the server's public key and sends the result to the server (which only the server should be able to decrypt with its private key); both parties then use the random number to generate a unique session key for subsequent encryption and decryption of data during the session, or
    * uses [Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) (or its variant [elliptic-curve DH](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman)) to securely generate a random and unique session key for encryption and decryption that has the additional property of [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy): if the server's private key is disclosed in the future, it cannot be used to decrypt the current session, even if the session is intercepted and recorded by a third party.

This concludes the handshake and begins the secured connection, which is encrypted and decrypted with the session key until the connection closes. If any one of the above steps fails, then the TLS handshake fails and the connection is not created.

Note that TLS 1.3 only allows key exchange algorithms providing [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy). Consequently, establishing a PreMasterSecret using the server's public and private key is only available in TLS 1.2 and below.

TLS and SSL do not fit neatly into any single layer of the [OSI model](https://en.wikipedia.org/wiki/OSI_model) or the [TCP/IP model](https://en.wikipedia.org/wiki/Internet_protocol_suite). TLS runs "on top of some reliable transport protocol (e.g., [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol))", which would imply that it is above the [transport layer](https://en.wikipedia.org/wiki/Transport_layer). It serves encryption to higher layers, which is normally the function of the [presentation layer](https://en.wikipedia.org/wiki/Presentation_layer). However, applications generally use TLS as if it were a transport layer, even though applications using TLS must actively control initiating TLS handshakes and handling of exchanged authentication certificates.

When secured by TLS, connections between a client (e.g., a web browser) and a server (e.g., wikipedia.org) will have all of the following properties:

* The connection is *private* (or has *confidentiality*) because a [symmetric-key algorithm](https://en.wikipedia.org/wiki/Symmetric-key_algorithm) is used to encrypt the data transmitted. The keys for this symmetric encryption are generated uniquely for each connection and are based on a shared secret that was negotiated at the start of the session. The server and client negotiate the details of which encryption algorithm and cryptographic keys to use before the first byte of data is transmitted (see below). The negotiation of a shared secret is both secure (the negotiated secret is unavailable to eavesdroppers and cannot be obtained, even by an attacker who places themselves in the middle of the connection) and reliable (no attacker can modify the communications during the negotiation without being detected).
* The identity of the communicating parties can be *authenticated* using [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). This authentication is required for the server and optional for the client.
* The connection is *reliable* (or has *integrity*) because each message transmitted includes a message integrity check using a [message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code) to prevent undetected loss or alteration of the data during transmission.

TLS supports many different methods for exchanging keys, encrypting data, and authenticating message integrity. As a result, secure configuration of TLS involves many configurable parameters, and not all choices provide all of the privacy-related properties described in the list above (see the tables below § Key exchange, § Cipher security, and § Data integrity).

Attempts have been made to subvert aspects of the communications security that TLS seeks to provide, and the protocol has been revised several times to address these security threats. Developers of web browsers have repeatedly revised their products to defend against potential security weaknesses after these were discovered (see TLS/SSL support history of web browsers).

### Datagram Transport Layer Security

Datagram Transport Layer Security, abbreviated DTLS, is a related [communications protocol](https://en.wikipedia.org/wiki/Communications_protocol) providing [security](https://en.wikipedia.org/wiki/Communications_security) to [datagram](https://en.wikipedia.org/wiki/Datagram)-based applications by allowing them to communicate in a way designed to prevent [eavesdropping](https://en.wikipedia.org/wiki/Eavesdropping), [tampering](https://en.wikipedia.org/wiki/Man_in_the_middle_attack), or [message forgery](https://en.wikipedia.org/wiki/Message_forgery). The DTLS protocol is based on the [stream](https://en.wikipedia.org/wiki/Stream_(computing))-oriented Transport Layer Security (TLS) protocol and is intended to provide similar security guarantees. However, unlike TLS, it can be used with most datagram oriented protocols including [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (UDP), [Datagram Congestion Control Protocol](https://en.wikipedia.org/wiki/Datagram_Congestion_Control_Protocol) (DCCP), [Control And Provisioning of Wireless Access Points](https://en.wikipedia.org/wiki/CAPWAP) (CAPWAP), [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) (SCTP) encapsulation, and [Secure Real-time Transport Protocol](https://en.wikipedia.org/wiki/Secure_Real-time_Transport_Protocol) (SRTP).

As the DTLS protocol datagram preserves the semantics of the underlying transport, the application does not suffer from the delays associated with stream protocols. However, the application has to deal with [packet reordering](https://en.wikipedia.org/wiki/Packet_reordering), loss of datagram and data larger than the size of a datagram [network packet](https://en.wikipedia.org/wiki/Network_packet). Because DTLS uses UDP or SCTP rather than TCP, it avoids the [TCP meltdown problem](https://en.wikipedia.org/wiki/TCP_meltdown_problem), when being used to create a VPN tunnel.

The original 2006 release of DTLS version 1.0 was not a standalone document. It was given as a series of deltas to TLS 1.1. Similarly the follow-up 2012 release of DTLS is a delta to TLS 1.2. It was given the version number of DTLS 1.2 to match its TLS version. Lastly, the 2022 DTLS 1.3 is a delta to TLS 1.3. Like the two previous versions, DTLS 1.3 is intended to provide "equivalent security guarantees [to TLS 1.3] with the exception of order protection/non-replayability".

Many [VPN clients](https://en.wikipedia.org/wiki/Virtual_private_network) including [Cisco](https://en.wikipedia.org/wiki/Cisco) [AnyConnect](https://en.wikipedia.org/wiki/AnyConnect) & InterCloud Fabric, [OpenConnect](https://en.wikipedia.org/wiki/OpenConnect), [ZScaler](https://en.wikipedia.org/wiki/Zscaler) tunnel, F5 Networks [Edge VPN Client](https://en.wikipedia.org/wiki/F5_Networks#BIG-IP_product_modules), and Citrix Systems [NetScaler](https://en.wikipedia.org/wiki/Citrix_Systems#Networking_and_cloud) use DTLS to secure UDP traffic. In addition all modern web browsers support DTLS-SRTP for [WebRTC](https://en.wikipedia.org/wiki/WebRTC).

## History and development

| Protocol | Published | Status |
| --- | --- | --- |
| Unsupported: SSL 1.0 | Unpublished | Unpublished |
| Unsupported: SSL 2.0 | 1995 | Deprecated in 2011 |
| Unsupported: SSL 3.0 | 1996 | Deprecated in 2015 |
| Unsupported: TLS 1.0 | 1999 | Deprecated in 2021 |
| Unsupported: TLS 1.1 | 2006 | Deprecated in 2021 |
| Supported: TLS 1.2 | 2008 | In use since 2008 |
| Latest version: TLS 1.3 | 2018 | In use since 2018 |
| **Legend:**UnsupportedSupported**Latest version**Preview versionFuture version |  |  |

### Early research projects

#### Secure Data Network System

In August 1986, the National Security Agency, the National Bureau of Standards, the Defense Communications Agency launched a project, called the Secure Data Network System (SDNS), with the intent of designing the next generation of secure computer communications network and product specifications to be implemented for applications on public and private internets. It was intended to complement the rapidly emerging new OSI internet standards moving forward both in the U.S. government's GOSIP Profiles and in the huge ITU-ISO JTC1 internet effort internationally.

As part of the project, researchers designed a protocol called SP4 (*security protocol* in layer 4 of the OSI system). This was later renamed the Transport Layer Security Protocol (TLSP) and subsequently published in 1995 as international standard ITU-T X.274|ISO/IEC 10736:1995. Despite the name similarity, this is distinct from today's TLS.

#### Secure Network Programming (SNP)

Other efforts towards transport layer security included the [Secure Network Programming](https://en.wikipedia.org/wiki/Secure_Network_Programming) (SNP) [application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface) (API), which in 1993 explored the approach of having a secure transport layer API closely resembling [Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets), to facilitate retrofitting pre-existing network applications with security measures. SNP was published and presented in the 1994 [USENIX](https://en.wikipedia.org/wiki/USENIX) Summer Technical Conference. The SNP project was funded by a grant from [NSA](https://en.wikipedia.org/wiki/National_Security_Agency) to Professor [Simon Lam](https://en.wikipedia.org/wiki/Simon_Lam) at [UT-Austin](https://en.wikipedia.org/wiki/University_of_Texas_at_Austin) in 1991. [Secure Network Programming](https://en.wikipedia.org/wiki/Secure_Network_Programming) won the 2004 [ACM Software System Award](https://en.wikipedia.org/wiki/ACM_Software_System_Award).  Simon Lam was inducted into the [Internet Hall of Fame](https://en.wikipedia.org/wiki/Internet_Hall_of_Fame) for "inventing secure sockets in 1991 and implementing the first secure sockets layer, named SNP, in 1993."

### SSL 1.0, 2.0, and 3.0

Netscape developed the original SSL protocols, and [Taher Elgamal](https://en.wikipedia.org/wiki/Taher_Elgamal), chief scientist at [Netscape Communications](https://en.wikipedia.org/wiki/Netscape) from 1995 to 1998, has been described as the "father of SSL". SSL version 1.0 was never publicly released because of serious security flaws in the protocol. Version 2.0, after being released in February 1995 was quickly found to contain a number of security and usability flaws. It used the same cryptographic keys for message authentication and encryption. It had a weak MAC construction that used the MD5 hash function with a secret prefix, making it vulnerable to length extension attacks. It also provided no protection for either the opening handshake or an explicit message close, both of which meant [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attacks) could go undetected. Moreover, SSL 2.0 assumed a single service and a fixed domain certificate, conflicting with the widely used feature of virtual hosting in Web servers, so most websites were effectively impaired from using SSL.

These flaws necessitated the complete redesign of the protocol to SSL version 3.0. Released in 1996, it was produced by [Paul Kocher](https://en.wikipedia.org/wiki/Paul_Carl_Kocher) working with Netscape engineers Phil Karlton and Alan Freier, with a reference implementation by Christopher Allen and Tim Dierks of Certicom. Newer versions of SSL/TLS are based on SSL 3.0. The 1996 draft of SSL 3.0 was published by IETF as a historical document in RFC [6101](https://www.rfc-editor.org/rfc/rfc6101).

SSL 2.0 was deprecated in 2011 by RFC [6176](https://www.rfc-editor.org/rfc/rfc6176). In 2014, SSL 3.0 was found to be vulnerable to the [POODLE](https://en.wikipedia.org/wiki/POODLE) attack that affects all [block ciphers](https://en.wikipedia.org/wiki/Block_cipher) in SSL; [RC4](https://en.wikipedia.org/wiki/RC4), the only non-block cipher supported by SSL 3.0, is also feasibly broken as used in SSL 3.0. SSL 3.0 was deprecated in June 2015 by RFC [7568](https://www.rfc-editor.org/rfc/rfc7568).

### TLS 1.0

TLS 1.0 was first defined in RFC [2246](https://www.rfc-editor.org/rfc/rfc2246) in January 1999 as an upgrade of SSL Version 3.0, and written by Christopher Allen and Tim Dierks of Certicom. As stated in the RFC, "the differences between this protocol and SSL 3.0 are not dramatic, but they are significant enough to preclude interoperability between TLS 1.0 and SSL 3.0". Tim Dierks later wrote that these changes, and the renaming from "SSL" to "TLS", were a face-saving gesture to Microsoft, "so it wouldn't look [like] the IETF was just rubberstamping Netscape's protocol".

The [PCI Council](https://en.wikipedia.org/wiki/Payment_Card_Industry_Security_Standards_Council) suggested that organizations migrate from TLS 1.0 to TLS 1.1 or higher before June 30, 2018. In October 2018, [Apple](https://en.wikipedia.org/wiki/Apple_Inc.), [Google](https://en.wikipedia.org/wiki/Google), [Microsoft](https://en.wikipedia.org/wiki/Microsoft), and [Mozilla](https://en.wikipedia.org/wiki/Mozilla) jointly announced they would deprecate TLS 1.0 and 1.1 in March 2020. TLS 1.0 and 1.1 were formally deprecated in RFC [8996](https://www.rfc-editor.org/rfc/rfc8996) in March 2021.

### TLS 1.1

TLS 1.1 was defined in RFC [4346](https://www.rfc-editor.org/rfc/rfc4346) in April 2006. It is an update from TLS version 1.0. Significant differences in this version include:

* Added protection against [cipher-block chaining](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_Block_Chaining_(CBC)) (CBC) attacks.

    * The implicit [initialization vector](https://en.wikipedia.org/wiki/Initialization_vector) (IV) was replaced with an explicit IV.
    * Change in handling of [padding errors](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Padding).
* Support for [IANA](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority) registration of parameters.

Support for TLS versions 1.0 and 1.1 was widely deprecated by web sites around 2020, disabling access to [Firefox](https://en.wikipedia.org/wiki/Firefox) versions before 24 and [Chromium-based browsers](https://en.wikipedia.org/wiki/Chromium_(web_browser)) before 29, though third-party fixes can be applied to Netscape Navigator and older versions of Firefox to add TLS 1.2 support.

### TLS 1.2

TLS 1.2 was defined in RFC [5246](https://www.rfc-editor.org/rfc/rfc5246) in August 2008. It is based on the earlier TLS 1.1 specification. Major differences include:

* The [MD5](https://en.wikipedia.org/wiki/MD5) and [SHA-1](https://en.wikipedia.org/wiki/SHA-1) combination in the [pseudorandom function](https://en.wikipedia.org/wiki/Pseudorandom_function_family) (PRF) was replaced with [SHA-256](https://en.wikipedia.org/wiki/SHA-256), with an option to use [cipher suite](https://en.wikipedia.org/wiki/Cipher_suite) specified PRFs.
* The MD5 and SHA-1 combination in the finished message [hash](https://en.wikipedia.org/wiki/Hash_function) was replaced with SHA-256, with an option to use cipher suite specific hash algorithms. However, the size of the hash in the finished message must still be at least 96 [bits](https://en.wikipedia.org/wiki/Bit).
* The MD5 and SHA-1 combination in the digitally signed element was replaced with a single hash negotiated during [handshake](https://en.wikipedia.org/wiki/Handshake_(computing)), which defaults to SHA-1.
* Enhancement in the client's and server's ability to specify which hashes and signature algorithms they accept.
* Expansion of support for [authenticated encryption](https://en.wikipedia.org/wiki/Authenticated_encryption) ciphers, used mainly for [Galois/Counter Mode](https://en.wikipedia.org/wiki/Galois/Counter_Mode) (GCM) and [CCM mode](https://en.wikipedia.org/wiki/CCM_mode) of [Advanced Encryption Standard](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) (AES) encryption.
* TLS Extensions definition and AES cipher suites were added.

All TLS versions were further refined in RFC [6176](https://www.rfc-editor.org/rfc/rfc6176) in March 2011, removing their backward compatibility with SSL such that TLS sessions never negotiate the use of Secure Sockets Layer (SSL) version 2.0. As of April 2025 there is no formal date for TLS 1.2 to be deprecated. The specifications for TLS 1.2 became redefined as well by the Standards Track Document RFC [8446](https://www.rfc-editor.org/rfc/rfc8446) to keep it as secure as possible; it is to be seen as a failover protocol now, meant only to be negotiated with clients which are unable to use TLS 1.3 (The original RFC [5246](https://www.rfc-editor.org/rfc/rfc5246) definition for TLS 1.2 is since then obsolete).

### TLS 1.3

TLS 1.3 was defined in RFC [8446](https://www.rfc-editor.org/rfc/rfc8446) in August 2018. It is based on the earlier TLS 1.2 specification. Major differences from TLS 1.2 include:

* Separating key agreement and authentication algorithms from the cipher suites
* Removing support for weak and less-used named [elliptic curves](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography)
* Removing support for MD5 and SHA-224 [cryptographic hash functions](https://en.wikipedia.org/wiki/Cryptographic_hash_function)
* Requiring digital signatures even when a previous configuration is used
* Integrating [HKDF](https://en.wikipedia.org/wiki/HKDF) and the semi-ephemeral DH proposal
* Replacing resumption with [PSK](https://en.wikipedia.org/wiki/TLS-PSK) and tickets
* Supporting 1-[RTT](https://en.wikipedia.org/wiki/Round-trip_delay) handshakes and initial support for 0-[RTT](https://en.wikipedia.org/wiki/Round-trip_delay)
* Mandating perfect [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), by means of using ephemeral keys during the (EC)DH key agreement
* Dropping support for many insecure or obsolete features including [compression](https://en.wikipedia.org/wiki/Data_compression), renegotiation, non-[AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption) ciphers, [null ciphers](https://en.wikipedia.org/wiki/Null_encryption), non-[PFS](https://en.wikipedia.org/wiki/Forward_secrecy) key exchange (among which are static [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) and static [DH](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) key exchanges), custom [DHE](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) groups, EC point format negotiation, Change Cipher Spec protocol, Hello message UNIX time, and the length field AD input to AEAD ciphers
* Prohibiting SSL or RC4 negotiation for backwards compatibility
* Integrating use of session hash
* Deprecating use of the record layer version number and freezing the number for improved backwards compatibility
* Moving some security-related algorithm details from an appendix to the specification and relegating ClientKeyShare to an appendix
* Adding the [ChaCha20](https://en.wikipedia.org/wiki/ChaCha20) stream cipher with the [Poly1305](https://en.wikipedia.org/wiki/Poly1305) message authentication code
* Adding the [Ed25519](https://en.wikipedia.org/wiki/Ed25519) and [Ed448](https://en.wikipedia.org/wiki/Ed448) digital signature algorithms
* Adding the [x25519](https://en.wikipedia.org/wiki/X25519) and [x448](https://en.wikipedia.org/wiki/X448) key exchange protocols
* Adding support for sending multiple [OCSP](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol) responses
* Encrypting all handshake messages after the ServerHello, including [server certificate](https://en.wikipedia.org/wiki/Server_certificate)

[Network Security Services](https://en.wikipedia.org/wiki/Network_Security_Services) (NSS), the cryptography library developed by [Mozilla](https://en.wikipedia.org/wiki/Mozilla) and used by its web browser [Firefox](https://en.wikipedia.org/wiki/Firefox), enabled TLS 1.3 by default in February 2017. TLS 1.3 support was subsequently added — but due to compatibility issues for a small number of users, not automatically enabled — to [Firefox 52.0](https://en.wikipedia.org/wiki/History_of_Firefox#Firefox_52_through_59), which was released in March 2017. TLS 1.3 was enabled by default in May 2018 with the release of [Firefox 60.0](https://en.wikipedia.org/wiki/History_of_Firefox#Firefox_60_through_67).

[Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome) set TLS 1.3 as the default version for a short time in 2017. It then removed it as the default, due to incompatible middleboxes such as [Blue Coat web proxies](https://en.wikipedia.org/wiki/Blue_Coat_Systems).

The intolerance of the new version of TLS was [protocol ossification](https://en.wikipedia.org/wiki/Protocol_ossification); middleboxes had ossified the protocol's version parameter. As a result, version 1.3 mimics the [wire image](https://en.wikipedia.org/wiki/Wire_image_(networking)) of version 1.2. This change occurred very late in the design process, only having been discovered during browser deployment. The discovery of this intolerance also led to the prior version negotiation strategy, where the highest matching version was picked, being abandoned due to unworkable levels of ossification. '[Greasing](https://en.wikipedia.org/wiki/Grease_(networking))' an extension point, where one protocol participant claims support for non-existent extensions to ensure that unrecognised-but-actually-existent extensions are tolerated and so to resist ossification, was originally designed for TLS, but it has since been adopted elsewhere.

During the IETF 100 [Hackathon](https://en.wikipedia.org/wiki/Hackathon), which took place in [Singapore](https://en.wikipedia.org/wiki/Singapore) in 2017, the TLS Group worked on adapting [open-source applications](https://en.wikipedia.org/wiki/Open-source_software) to use TLS 1.3. The TLS group was made up of individuals from Japan, United Kingdom, and Mauritius via the cyberstorm.mu team. This work was continued in the IETF 101 Hackathon in [London](https://en.wikipedia.org/wiki/London), and the IETF 102 Hackathon in Montreal.

[wolfSSL](https://en.wikipedia.org/wiki/WolfSSL) enabled the use of TLS 1.3 as of version 3.11.1, released in May 2017. As the first commercial TLS 1.3 implementation, wolfSSL 3.11.1 supported Draft 18 and now supports Draft 28, the final version, as well as many older versions. A series of blogs were published on the performance difference between TLS 1.2 and 1.3.

In September 2018, the popular [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL) project released version 1.1.1 of its library, in which support for TLS 1.3 was "the headline new feature".

Support for TLS 1.3 was added to [Secure Channel](https://en.wikipedia.org/wiki/Security_Support_Provider_Interface) (schannel) for the GA releases of [Windows 11](https://en.wikipedia.org/wiki/Windows_11) and [Windows Server 2022](https://en.wikipedia.org/wiki/Windows_Server_2022).

#### Enterprise Transport Security

The [Electronic Frontier Foundation](https://en.wikipedia.org/wiki/Electronic_Frontier_Foundation) praised TLS 1.3 and expressed concern about the variant protocol Enterprise Transport Security (ETS) that intentionally disables important security measures in TLS 1.3. Originally called Enterprise TLS (eTLS), ETS is a published standard known as the '[ETSI](https://en.wikipedia.org/wiki/ETSI) TS103523-3', "Middlebox Security Protocol, Part3: Enterprise Transport Security". It is intended for use entirely within proprietary networks such as banking systems. ETS does not support forward secrecy so as to allow third-party organizations connected to the proprietary networks to be able to use their private key to monitor network traffic for the detection of malware and to make it easier to conduct audits. Despite the claimed benefits, the EFF warned that the loss of forward secrecy could make it easier for data to be exposed along with saying that there are better ways to analyze traffic.

## Digital certificates

Example of a website with digital certificate

A digital certificate certifies the ownership of a public key by the named subject of the certificate, and indicates certain expected usages of that key. This allows others (relying parties) to rely upon signatures or on assertions made by the private key that corresponds to the certified public key. Keystores and trust stores can be in various formats, such as [.pem](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail), .crt, [.pfx](https://en.wikipedia.org/wiki/PKCS_12), and [.jks](https://en.wikipedia.org/wiki/Java_KeyStore).

### Certificate authorities

TLS typically relies on a set of trusted third-party certificate authorities to establish the authenticity of certificates. Trust is usually anchored in a list of certificates distributed with user agent software, and can be modified by the relying party.

According to [Netcraft](https://en.wikipedia.org/wiki/Netcraft), who monitors active TLS certificates, the market-leading certificate authority (CA) has been [Symantec](https://en.wikipedia.org/wiki/NortonLifeLock) since the beginning of their survey (or [VeriSign](https://en.wikipedia.org/wiki/Verisign) before the authentication services business unit was purchased by Symantec). As of 2015, Symantec accounted for just under a third of all certificates and 44% of the valid certificates used by the 1 million busiest websites, as counted by Netcraft. In 2017, Symantec sold its TLS/SSL business to DigiCert. In an updated report, it was shown that [IdenTrust](https://en.wikipedia.org/wiki/IdenTrust), [DigiCert](https://en.wikipedia.org/wiki/DigiCert), and [Sectigo](https://en.wikipedia.org/wiki/Sectigo) are the top 3 certificate authorities in terms of market share since May 2019.

As a consequence of choosing [X.509](https://en.wikipedia.org/wiki/X.509) certificates, certificate authorities and a [public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure) are necessary to verify the relation between a certificate and its owner, as well as to generate, sign, and administer the validity of certificates. While this can be more convenient than verifying the identities via a [web of trust](https://en.wikipedia.org/wiki/Web_of_trust), the [2013 mass surveillance disclosures](https://en.wikipedia.org/wiki/Global_surveillance_disclosures_(2013%E2%80%93present)) made it more widely known that certificate authorities are a weak point from a security standpoint, allowing [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) (MITM) if the certificate authority cooperates (or is compromised).

On April 11, 2025, the [CA/Browser Forum](https://en.wikipedia.org/wiki/CA/Browser_Forum) approved a ballot that will require all public TLS certificate lifespans to gradually reduce to 47 days by 2029. The ballot was proposed by Apple.

## Algorithms

### Key exchange or key agreement

Before a client and server can begin to exchange information protected by TLS, they must securely exchange or agree upon an encryption key and a cipher to use when encrypting data (see § Cipher). Among the methods used for key exchange/agreement are: public and private keys generated with [RSA](https://en.wikipedia.org/wiki/RSA_(algorithm)) (denoted TLS_RSA in the TLS handshake protocol), [Diffie–Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman) (TLS_DH), ephemeral Diffie–Hellman (TLS_DHE), [elliptic-curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman) (TLS_ECDH), ephemeral elliptic-curve Diffie–Hellman (TLS_ECDHE), [anonymous Diffie–Hellman](https://en.wikipedia.org/wiki/Key-agreement_protocol#Exponential_key_exchange) (TLS_DH_anon), [pre-shared key](https://en.wikipedia.org/wiki/TLS-PSK) (TLS_PSK) and [Secure Remote Password](https://en.wikipedia.org/wiki/TLS-SRP) (TLS_SRP).

The TLS_DH_anon and TLS_ECDH_anon key agreement methods do not authenticate the server or the user and hence are rarely used because those are vulnerable to [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack). Only TLS_DHE and TLS_ECDHE provide forward secrecy.

Public key certificates used during exchange/agreement also vary in the size of the public/private encryption keys used during the exchange and hence the robustness of the security provided. In July 2013, [Google](https://en.wikipedia.org/wiki/Google) announced that it would no longer use 1024-bit public keys and would switch instead to 2048-bit keys to increase the security of the TLS encryption it provides to its users because the encryption strength is directly related to the [key size](https://en.wikipedia.org/wiki/Key_size).

| Algorithm | SSL 2.0 | SSL 3.0 | TLS 1.0 | TLS 1.1 | TLS 1.2 | TLS 1.3 | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) | Yes | Yes | Yes | Yes | Yes | No | Defined for TLS 1.2 in RFCs |
| [DH](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)-[RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) | No | Yes | Yes | Yes | Yes | No |  |
| [DHE](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)-[RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) (forward secrecy) | No | Yes | Yes | Yes | Yes | Yes |  |
| [ECDH](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman)-[RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) | No | No | Yes | Yes | Yes | No |  |
| [ECDHE](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman)-[RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) (forward secrecy) | No | No | Yes | Yes | Yes | Yes |  |
| [DH](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)-[DSS](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) | No | Yes | Yes | Yes | Yes | No |  |
| [DHE](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)-[DSS](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (forward secrecy) | No | Yes | Yes | Yes | Yes | No |  |
| [DHE](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)-[ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_DSA) (forward secrecy) | No | No | No | No | No | Yes |  |
| [ECDH](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman)-[ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_DSA) | No | No | Yes | Yes | Yes | No |  |
| [ECDHE](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman)-[ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_DSA) (forward secrecy) | No | No | Yes | Yes | Yes | Yes |  |
| [DHE](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)-[EdDSA](https://en.wikipedia.org/wiki/EdDSA) (forward secrecy) | No | No | No | No | No | Yes |  |
| [ECDH](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman)-[EdDSA](https://en.wikipedia.org/wiki/EdDSA) | No | No | Yes | Yes | Yes | No |  |
| [ECDHE](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman)-[EdDSA](https://en.wikipedia.org/wiki/EdDSA) (forward secrecy) | No | No | Yes | Yes | Yes | Yes |  |
| [PSK](https://en.wikipedia.org/wiki/TLS-PSK) | No | No | Yes | Yes | Yes | Yes |  |
| [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem))-[PSK](https://en.wikipedia.org/wiki/Pre-shared_key) | No | No | Yes | Yes | Yes | No |  |
| [DHE](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)-[PSK](https://en.wikipedia.org/wiki/Pre-shared_key) (forward secrecy) | No | No | Yes | Yes | Yes | Yes |  |
| [ECDHE](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman)-[PSK](https://en.wikipedia.org/wiki/Pre-shared_key) (forward secrecy) | No | No | Yes | Yes | Yes | Yes |  |
| [SRP](https://en.wikipedia.org/wiki/TLS-SRP) | No | No | Yes | Yes | Yes | No |  |
| [SRP](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)-[DSS](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) | No | No | Yes | Yes | Yes | No |  |
| [SRP](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)-[RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) | No | No | Yes | Yes | Yes | No |  |
| [Kerberos](https://en.wikipedia.org/wiki/Kerberos_(protocol)) | No | No | Yes | Yes | Yes | ? |  |
| [DH](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)-ANON (insecure) | No | Yes | Yes | Yes | Yes | No |  |
| [ECDH](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman)-ANON (insecure) | No | No | Yes | Yes | Yes | No |  |
| [GOST R 34.10-2012](https://en.wikipedia.org/wiki/GOST) | No | No | No | No | Yes | Yes | Defined for TLS 1.2 and for TLS 1.3. |

### Cipher

| Cipher | Protocol version | Status |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Type | Algorithm | Nominal strength (bits) | SSL 2.0 | SSL 3.0 | TLS 1.0 | TLS 1.1 | TLS 1.2 | TLS 1.3 |  |
| [Block cipher](https://en.wikipedia.org/wiki/Block_cipher) with [mode of operation](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation) | [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) | 256, 128 | —N/a | —N/a | —N/a | —N/a | Secure | Secure | Defined for TLS 1.2 in RFCs |
| [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) [CCM](https://en.wikipedia.org/wiki/CCM_mode) | —N/a | —N/a | —N/a | —N/a | Secure | Secure |  |  |  |
| [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) [CBC](https://en.wikipedia.org/wiki/Cipher_block_chaining) | —N/a | Insecure | Depends on mitigations | Depends on mitigations | Depends on mitigations | —N/a |  |  |  |
| [Camellia](https://en.wikipedia.org/wiki/Camellia_(cipher)) [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) | 256, 128 | —N/a | —N/a | —N/a | —N/a | Secure | —N/a |  |  |
| [Camellia](https://en.wikipedia.org/wiki/Camellia_(cipher)) [CBC](https://en.wikipedia.org/wiki/Cipher_block_chaining) | —N/a | Insecure | Depends on mitigations | Depends on mitigations | Depends on mitigations | —N/a |  |  |  |
| [ARIA](https://en.wikipedia.org/wiki/ARIA_(cipher)) [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) | 256, 128 | —N/a | —N/a | —N/a | —N/a | Secure | —N/a |  |  |
| [ARIA](https://en.wikipedia.org/wiki/ARIA_(cipher)) [CBC](https://en.wikipedia.org/wiki/Cipher_block_chaining) | —N/a | —N/a | Depends on mitigations | Depends on mitigations | Depends on mitigations | —N/a |  |  |  |
| [SEED](https://en.wikipedia.org/wiki/SEED_(cipher)) [CBC](https://en.wikipedia.org/wiki/Cipher_block_chaining) | 128 | —N/a | Insecure | Depends on mitigations | Depends on mitigations | Depends on mitigations | —N/a |  |  |
| [3DES EDE](https://en.wikipedia.org/wiki/Triple_DES) [CBC](https://en.wikipedia.org/wiki/Cipher_block_chaining) | 112 | Insecure | Insecure | Insecure | Insecure | Insecure | —N/a |  |  |
| [GOST R 34.12-2015 Magma](https://en.wikipedia.org/wiki/GOST_(block_cipher)) [CTR](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Counter_(CTR)) | 256 | —N/a | —N/a | Insecure | Insecure | Insecure | —N/a | Defined in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [4357](https://www.rfc-editor.org/rfc/rfc4357), [9189](https://www.rfc-editor.org/rfc/rfc9189) |  |
| [GOST R 34.12-2015 Kuznyechik](https://en.wikipedia.org/wiki/Kuznyechik) [CTR](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Counter_(CTR)) | 256 | —N/a | —N/a | —N/a | —N/a | Secure | —N/a | Defined in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [9189](https://www.rfc-editor.org/rfc/rfc9189) |  |
| [GOST R 34.12-2015 Magma](https://en.wikipedia.org/wiki/GOST_(block_cipher)) [MGM](https://en.wikipedia.org/wiki/Authenticated_encryption) | 256 | —N/a | —N/a | —N/a | —N/a | —N/a | Insecure | Defined in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [9367](https://www.rfc-editor.org/rfc/rfc9367) |  |
| [GOST R 34.12-2015 Kuznyechik](https://en.wikipedia.org/wiki/Kuznyechik) [MGM](https://en.wikipedia.org/wiki/Authenticated_encryption) | 256 | —N/a | —N/a | —N/a | —N/a | —N/a | Secure | Defined in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [9367](https://www.rfc-editor.org/rfc/rfc9367) |  |
| [IDEA](https://en.wikipedia.org/wiki/International_Data_Encryption_Algorithm) [CBC](https://en.wikipedia.org/wiki/Cipher_block_chaining) | 128 | Insecure | Insecure | Insecure | Insecure | —N/a | —N/a | Removed from TLS 1.2 |  |
| [DES](https://en.wikipedia.org/wiki/Data_Encryption_Standard) [CBC](https://en.wikipedia.org/wiki/Cipher_block_chaining) | 056 | Insecure | Insecure | Insecure | Insecure | —N/a | —N/a |  |  |
| 040 | Insecure | Insecure | Insecure | —N/a | —N/a | —N/a | Forbidden in TLS 1.1 and later |  |  |
| [RC2](https://en.wikipedia.org/wiki/RC2) [CBC](https://en.wikipedia.org/wiki/Cipher_block_chaining) | 040 | Insecure | Insecure | Insecure | —N/a | —N/a | —N/a |  |  |
| [Stream cipher](https://en.wikipedia.org/wiki/Stream_cipher) | [ChaCha20](https://en.wikipedia.org/wiki/ChaCha20)-[Poly1305](https://en.wikipedia.org/wiki/Poly1305) | 256 | —N/a | —N/a | —N/a | —N/a | Secure | Secure | Defined for TLS 1.2 in RFCs |
| [RC4](https://en.wikipedia.org/wiki/RC4) | 128 | Insecure | Insecure | Insecure | Insecure | Insecure | —N/a | Prohibited in all versions of TLS |  |
| 040 | Insecure | Insecure | Insecure | —N/a | —N/a | —N/a |  |  |  |
| None | Null | – | Insecure | Insecure | Insecure | Insecure | Insecure | —N/a | Defined for TLS 1.2 in RFCs |

**Notes**

1. ^     [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [5746](https://www.rfc-editor.org/rfc/rfc5746) must be implemented to fix a renegotiation flaw that would otherwise break this protocol.
2. **^** If libraries implement fixes listed in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [5746](https://www.rfc-editor.org/rfc/rfc5746), this violates the SSL 3.0 specification, which the IETF cannot change unlike TLS. Most current libraries implement the fix and disregard the violation that this causes.
3. ^   The BEAST attack breaks all block ciphers (CBC ciphers) used in SSL 3.0 and TLS 1.0 unless mitigated by the client or the server. See § Web browsers.
4. **^** The [POODLE](https://en.wikipedia.org/wiki/POODLE) attack breaks all block ciphers (CBC ciphers) used in SSL 3.0 unless mitigated by the client or the server. See § Web browsers.
5. ^        [AEAD](https://en.wikipedia.org/wiki/AEAD_block_cipher_modes_of_operation) ciphers (such as [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) and [CCM](https://en.wikipedia.org/wiki/CCM_mode)) can only be used in TLS 1.2 or later.
6. ^         CBC ciphers can be attacked with the [Lucky Thirteen attack](https://en.wikipedia.org/wiki/Lucky_Thirteen_attack) if the library is not written carefully to eliminate timing side channels.
7. ^       The [Sweet32](https://en.wikipedia.org/wiki/Sweet32) attack breaks block ciphers with a block size of 64 bits.
8. **^** Although the key length of 3DES is 168 bits, effective security strength of 3DES is only 112 bits, which is below the recommended minimum of 128 bits.
9. ^   IDEA and DES have been removed from TLS 1.2.
10. ^    40-bit strength cipher suites were intentionally designed with reduced key lengths to comply with since-rescinded US regulations forbidding the export of cryptographic software containing certain strong encryption algorithms (see [Export of cryptography from the United States](https://en.wikipedia.org/wiki/Export_of_cryptography_from_the_United_States)). These weak suites are forbidden in TLS 1.1 and later.
11. **^** Use of RC4 in all versions of TLS is prohibited because RC4 attacks weaken or break RC4 used in SSL/TLS.
12. **^** Authentication only, no encryption.

### Data integrity

A [message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code) (MAC) is used for data integrity. [HMAC](https://en.wikipedia.org/wiki/HMAC) is used for [CBC](https://en.wikipedia.org/wiki/Cipher_block_chaining) mode of block ciphers. [Authenticated encryption](https://en.wikipedia.org/wiki/Authenticated_encryption) (AEAD) such as [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) and [CCM mode](https://en.wikipedia.org/wiki/CCM_mode) uses AEAD-integrated MAC and does not use [HMAC](https://en.wikipedia.org/wiki/HMAC). HMAC-based [PRF](https://en.wikipedia.org/wiki/Pseudorandom_function_family), or [HKDF](https://en.wikipedia.org/wiki/HKDF) is used for TLS handshake.

| Algorithm | SSL 2.0 | SSL 3.0 | TLS 1.0 | TLS 1.1 | TLS 1.2 | TLS 1.3 | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [HMAC](https://en.wikipedia.org/wiki/HMAC)-[MD5](https://en.wikipedia.org/wiki/MD5) | Yes | Yes | Yes | Yes | Yes | No | Defined for TLS 1.2 in RFCs |
| [HMAC](https://en.wikipedia.org/wiki/HMAC)-[SHA1](https://en.wikipedia.org/wiki/SHA-1) | No | Yes | Yes | Yes | Yes | No |  |
| [HMAC](https://en.wikipedia.org/wiki/HMAC)-[SHA256/384](https://en.wikipedia.org/wiki/SHA-2) | No | No | No | No | Yes | No |  |
| [AEAD](https://en.wikipedia.org/wiki/AEAD_block_cipher_modes_of_operation) | No | No | No | No | Yes | Yes |  |
| [GOST 28147-89 IMIT](https://en.wikipedia.org/wiki/GOST_28147-89) | No | No | No | No | Yes | No | Defined for TLS 1.2 in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [9189](https://www.rfc-editor.org/rfc/rfc9189). |
| [GOST R 34.12-2015](https://en.wikipedia.org/wiki/Kuznyechik) [AEAD](https://en.wikipedia.org/wiki/AEAD_block_cipher_modes_of_operation) | No | No | No | No | No | Yes | Defined for TLS 1.3 in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [9367](https://www.rfc-editor.org/rfc/rfc9367). |

## Applications and adoption

In applications design, TLS is usually implemented on top of Transport Layer protocols, encrypting all of the protocol-related data of protocols such as [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol), [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol), [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol) and [XMPP](https://en.wikipedia.org/wiki/XMPP).

Historically, TLS has been used primarily with reliable transport protocols such as the [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP). However, it has also been implemented with datagram-oriented transport protocols, such as the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (UDP) and the [Datagram Congestion Control Protocol](https://en.wikipedia.org/wiki/Datagram_Congestion_Control_Protocol) (DCCP), usage of which has been standardized independently using the term *[Datagram Transport Layer Security](https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security)* (*DTLS*).

### Websites

A primary use of TLS is to secure [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web) traffic between a [website](https://en.wikipedia.org/wiki/Website) and a [web browser](https://en.wikipedia.org/wiki/Web_browser) encoded with the HTTP protocol. This use of TLS to secure HTTP traffic constitutes the [HTTPS](https://en.wikipedia.org/wiki/HTTPS) protocol.

| Protocol   version | selected Web­sites'   support | Security |
| --- | --- | --- |
| Unsupported: SSL 2.0 | 0.1% | Insecure |
| Unsupported: SSL 3.0 | 1.0% | Insecure |
| Unsupported: TLS 1.0 | 23.5% | Deprecated |
| Unsupported: TLS 1.1 | 25.2% | Deprecated |
| Supported: TLS 1.2 | 100% | Depends on cipher and client mitigations |
| Latest version: TLS 1.3 | 75.3% | Secure |

**Notes**

1. **^** see § Cipher table above
2. **^** see § Web browsers and § Attacks against TLS/SSL sections

### Web browsers

As of March 2025, the latest versions of all major web browsers support TLS 1.2 and 1.3 and have them enabled by default, with the exception of [IE 11](https://en.wikipedia.org/wiki/Internet_Explorer_11). TLS 1.0 and 1.1 are disabled by default on the latest versions of all major browsers.

Mitigations against known attacks are not enough yet:

* Mitigations against POODLE attack: some browsers already prevent fallback to SSL 3.0; however, this mitigation needs to be supported by not only clients but also servers. Disabling SSL 3.0 itself, implementation of "anti-POODLE record splitting", or denying CBC ciphers in SSL 3.0 is required.

    * Google Chrome: complete (TLS_FALLBACK_SCSV is implemented since version 33, fallback to SSL 3.0 is disabled since version 39, SSL 3.0 itself is disabled by default since version 40. Support of SSL 3.0 itself was dropped since version 44.)
    * Mozilla Firefox: complete (support of SSL 3.0 itself is dropped since [version 39](https://en.wikipedia.org/wiki/History_of_Firefox#Version_38–44). SSL 3.0 itself is disabled by default and fallback to SSL 3.0 are disabled since [version 34](https://en.wikipedia.org/wiki/History_of_Firefox#Version_31–37), TLS_FALLBACK_SCSV is implemented since version 35. In ESR, SSL 3.0 itself is disabled by default and TLS_FALLBACK_SCSV is implemented since ESR 31.3.0.)
    * Internet Explorer: partial (only in version 11, SSL 3.0 is disabled by default since April 2015. Version 10 and older are still vulnerable against POODLE.)
    * [Opera](https://en.wikipedia.org/wiki/Opera_(web_browser)): complete (TLS_FALLBACK_SCSV is implemented since version 20, "anti-POODLE record splitting", which is effective only with client-side implementation, is implemented since version 25, SSL 3.0 itself is disabled by default since version 27. Support of SSL 3.0 itself will be dropped since version 31.)
    * Safari: complete (only on OS X 10.8 and later and iOS 8, CBC ciphers during fallback to SSL 3.0 is denied, but this means it will use RC4, which is not recommended as well. Support of SSL 3.0 itself is dropped on OS X 10.11 and later and iOS 9.)
* Mitigation against RC4 attacks:

    * Google Chrome disabled RC4 except as a fallback since version 43. RC4 is disabled since Chrome 48.
    * Firefox disabled RC4 except as a fallback since version 36. Firefox 44 disabled RC4 by default.
    * Opera disabled RC4 except as a fallback since version 30. RC4 is disabled since Opera 35.
    * Internet Explorer for [Windows 7](https://en.wikipedia.org/wiki/Windows_7)/Server 2008 R2 and for [Windows 8](https://en.wikipedia.org/wiki/Windows_8)/Server 2012 have set the priority of RC4 to lowest and can also disable RC4 except as a fallback through registry settings. Internet Explorer 11 Mobile 11 for [Windows Phone 8.1](https://en.wikipedia.org/wiki/Windows_Phone_8.1) disable RC4 except as a fallback if no other enabled algorithm works. Edge [Legacy] and IE 11 disable RC4 completely in August 2016.
* Mitigation against FREAK attack:

    * The Android Browser included with [Android 4.0](https://en.wikipedia.org/wiki/Android_Ice_Cream_Sandwich) and older is still vulnerable to the FREAK attack.
    * Internet Explorer 11 Mobile is still vulnerable to the FREAK attack.
    * Google Chrome, Internet Explorer (desktop), Safari (desktop & mobile), and Opera (mobile) have FREAK mitigations in place.
    * Mozilla Firefox on all platforms and Google Chrome on Windows were not affected by FREAK.

### Libraries

Most SSL and TLS programming libraries are [free and open-source software](https://en.wikipedia.org/wiki/Free_and_open-source_software).

* [Rustls](https://en.wikipedia.org/wiki/Rustls), An implementation of TLS 1.3 written in the Rust programming language to ensure memory safety.

* [BoringSSL](https://en.wikipedia.org/wiki/BoringSSL), a fork of OpenSSL for Chrome/Chromium and Android as well as other Google applications.
* [Botan](https://en.wikipedia.org/wiki/Botan_(programming_library)), a BSD-licensed cryptographic library written in C++.
* [BSAFE](https://en.wikipedia.org/wiki/BSAFE) Micro Edition Suite: a multi-platform implementation of TLS written in [C](https://en.wikipedia.org/wiki/C_(programming_language)) using a FIPS-validated cryptographic module
* [BSAFE](https://en.wikipedia.org/wiki/BSAFE) SSL-J: a TLS library providing both a proprietary API and [JSSE](https://en.wikipedia.org/wiki/Java_Secure_Socket_Extension) API, using FIPS-validated cryptographic module
* [cryptlib](https://en.wikipedia.org/wiki/Cryptlib): a portable open source cryptography library (includes TLS/SSL implementation)
* [Delphi](https://en.wikipedia.org/wiki/Delphi_(programming_language)) programmers may use a library called Indy which utilizes [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL) or alternatively ICS which supports TLS 1.3 now.
* [GnuTLS](https://en.wikipedia.org/wiki/GnuTLS): a free implementation (LGPL licensed)
* [Java Secure Socket Extension](https://en.wikipedia.org/wiki/Java_Secure_Socket_Extension) (JSSE): the [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) API and provider implementation (named SunJSSE)
* [LibreSSL](https://en.wikipedia.org/wiki/LibreSSL): a fork of OpenSSL by OpenBSD project.
* [MatrixSSL](https://en.wikipedia.org/wiki/MatrixSSL): a dual licensed implementation
* [Mbed TLS](https://en.wikipedia.org/wiki/Mbed_TLS) (previously PolarSSL): A tiny SSL library implementation for embedded devices that is designed for ease of use
* [Network Security Services](https://en.wikipedia.org/wiki/Network_Security_Services): [FIPS 140](https://en.wikipedia.org/wiki/FIPS_140) validated open source library
* [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL): a free implementation (BSD license with some extensions)
* [Schannel](https://en.wikipedia.org/wiki/Security_Support_Provider_Interface): an implementation of SSL and TLS [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) as part of its package.
* [Secure Transport](https://en.wikipedia.org/wiki/Secure_Transport): an implementation of SSL and TLS used in [OS X](https://en.wikipedia.org/wiki/OS_X) and [iOS](https://en.wikipedia.org/wiki/IOS) as part of their packages.
* [wolfSSL](https://en.wikipedia.org/wiki/WolfSSL) (previously CyaSSL): Embedded SSL/TLS Library with a strong focus on speed and size.

A paper presented at the 2012 [ACM](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery) [conference on computer and communications security](https://en.wikipedia.org/wiki/Computer_security_conference) showed that many applications used some of these SSL libraries incorrectly, leading to vulnerabilities. According to the authors:

"The root cause of most of these vulnerabilities is the terrible design of the APIs to the underlying SSL libraries. Instead of expressing high-level security properties of network tunnels such as confidentiality and authentication, these APIs expose low-level details of the SSL protocol to application developers. As a consequence, developers often use SSL APIs incorrectly, misinterpreting and misunderstanding their manifold parameters, options, side effects, and return values."

### Other uses

The [Simple Mail Transfer Protocol](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) (SMTP) can also be protected by TLS. These applications use [public key certificates](https://en.wikipedia.org/wiki/Public_key_certificate) to verify the identity of endpoints.

TLS can also be used for tunneling an entire network stack to create a [VPN](https://en.wikipedia.org/wiki/Virtual_private_network), which is the case with [OpenVPN](https://en.wikipedia.org/wiki/OpenVPN) and [OpenConnect](https://en.wikipedia.org/wiki/OpenConnect). Many vendors have by now married TLS's encryption and authentication capabilities with authorization. There has also been substantial development since the late 1990s in creating client technology outside of Web-browsers, in order to enable support for client/server applications. Compared to traditional [IPsec](https://en.wikipedia.org/wiki/IPsec) VPN technologies, TLS has some inherent advantages in firewall and [NAT](https://en.wikipedia.org/wiki/Network_address_translation) traversal that make it easier to administer for large remote-access populations.

TLS is also a standard method for protecting [Session Initiation Protocol](https://en.wikipedia.org/wiki/Session_Initiation_Protocol) (SIP) application signaling. TLS can be used for providing authentication and encryption of the SIP signaling associated with [VoIP](https://en.wikipedia.org/wiki/Voice_over_IP) and other SIP-based applications.

## Security

### Attacks against TLS/SSL

Significant attacks against TLS/SSL are listed below.

In February 2015, IETF issued an informational RFC summarizing the various known attacks against TLS/SSL.

#### Renegotiation attack

A vulnerability of the renegotiation procedure was discovered in August 2009 that can lead to plaintext injection attacks against SSL 3.0 and all current versions of TLS. For example, it allows an attacker who can hijack an [https](https://en.wikipedia.org/wiki/Https) connection to splice their own requests into the beginning of the conversation the client has with the web server. The attacker cannot actually decrypt the client–server communication, so it is different from a typical [man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack). A short-term fix is for web servers to stop allowing renegotiation, which typically will not require other changes unless [client certificate](https://en.wikipedia.org/wiki/Client_certificate) authentication is used. To fix the vulnerability, a renegotiation indication extension was proposed for TLS. It will require the client and server to include and verify information about previous handshakes in any renegotiation handshakes. This extension has been implemented by several libraries.

#### Downgrade attacks: FREAK attack and Logjam attack

A protocol [downgrade attack](https://en.wikipedia.org/wiki/Downgrade_attack) (also called a version rollback attack) tricks a web server into negotiating connections with previous versions of TLS (such as SSLv2) that have long since been abandoned as insecure.

Previous modifications to the original protocols, like **False Start** (adopted and enabled by Google Chrome) or **Snap Start**, reportedly introduced limited TLS protocol downgrade attacks or allowed modifications to the cipher suite list sent by the client to the server. In doing so, an attacker might succeed in influencing the cipher suite selection in an attempt to downgrade the cipher suite negotiated to use either a weaker symmetric encryption algorithm or a weaker key exchange. A paper presented at an [ACM](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery) [conference on computer and communications security](https://en.wikipedia.org/wiki/Computer_security_conference) in 2012 demonstrated that the False Start extension was at risk: in certain circumstances it could allow an attacker to recover the encryption keys offline and to access the encrypted data.

Encryption downgrade attacks can force servers and clients to negotiate a connection using cryptographically weak keys. In 2014, a [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle) attack called FREAK was discovered affecting the [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL) stack, the default [Android](https://en.wikipedia.org/wiki/Android_(operating_system)) web browser, and some [Safari](https://en.wikipedia.org/wiki/Safari_(web_browser)) browsers. The attack involved tricking servers into negotiating a TLS connection using cryptographically weak 512 bit encryption keys.

Logjam is a [security exploit](https://en.wikipedia.org/wiki/Security_exploit) discovered in May 2015 that exploits the option of using legacy ["export-grade"](https://en.wikipedia.org/wiki/Arms_Export_Control_Act) 512-bit [Diffie–Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) groups dating back to the 1990s. It forces susceptible servers to downgrade to cryptographically weak 512-bit Diffie–Hellman groups. An attacker can then deduce the keys the client and server determine using the [Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange).

#### Cross-protocol attacks: DROWN

The [DROWN attack](https://en.wikipedia.org/wiki/DROWN_attack) is an exploit that attacks servers supporting contemporary SSL/TLS protocol suites by exploiting their support for the obsolete, insecure, SSLv2 protocol to leverage an attack on connections using up-to-date protocols that would otherwise be secure. DROWN exploits a vulnerability in the protocols used and the configuration of the server, rather than any specific implementation error. Full details of DROWN were announced in March 2016, together with a patch for the exploit. At that time, more than 81,000 of the top 1 million most popular websites were among the TLS protected websites that were vulnerable to the DROWN attack.

#### BEAST attack

On September 23, 2011, researchers Thai Duong and Juliano Rizzo demonstrated a proof of concept called **BEAST** (**Browser Exploit Against SSL/TLS**) using a [Java applet](https://en.wikipedia.org/wiki/Java_applet) to violate [same origin policy](https://en.wikipedia.org/wiki/Same_origin_policy) constraints, for a long-known [cipher block chaining](https://en.wikipedia.org/wiki/Cipher_block_chaining) (CBC) vulnerability in TLS 1.0: an attacker observing 2 consecutive ciphertext blocks C0, C1 can test if the plaintext block P1 is equal to x by choosing the next plaintext block P2 = x ⊕ C0 ⊕ C1; as per CBC operation, C2 = E(C1 ⊕ P2) = E(C1 ⊕ x ⊕ C0 ⊕ C1) = E(C0 ⊕ x), which will be equal to C1 if x = P1. Practical [exploits](https://en.wikipedia.org/wiki/Exploit_(computer_security)) had not been previously demonstrated for this [vulnerability](https://en.wikipedia.org/wiki/Vulnerability_(computing)), which was originally discovered by [Phillip Rogaway](https://en.wikipedia.org/wiki/Phillip_Rogaway) in 2002. The vulnerability of the attack had been fixed with TLS 1.1 in 2006, but TLS 1.1 had not seen wide adoption prior to this attack demonstration.

[RC4](https://en.wikipedia.org/wiki/RC4) as a stream cipher is immune to BEAST attack. Therefore, RC4 was widely used as a way to mitigate BEAST attack on the server side. However, in 2013, researchers found more weaknesses in RC4. Thereafter enabling RC4 on server side was no longer recommended.

Chrome and Firefox themselves are not vulnerable to BEAST attack, however, Mozilla updated their [NSS](https://en.wikipedia.org/wiki/Network_Security_Services) libraries to mitigate BEAST-like [attacks](https://en.wikipedia.org/wiki/Attack_(computing)). NSS is used by [Mozilla Firefox](https://en.wikipedia.org/wiki/Mozilla_Firefox) and [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome) to implement SSL. Some [web servers](https://en.wikipedia.org/wiki/Web_server) that have a broken implementation of the SSL specification may stop working as a result.

[Microsoft](https://en.wikipedia.org/wiki/Microsoft) released Security Bulletin MS12-006 on January 10, 2012, which fixed the BEAST vulnerability by changing the way that the Windows Secure Channel ([Schannel](https://en.wikipedia.org/wiki/Schannel)) component transmits encrypted network packets from the server end. Users of Internet Explorer (prior to version 11) that run on older versions of Windows ([Windows 7](https://en.wikipedia.org/wiki/Windows_7), [Windows 8](https://en.wikipedia.org/wiki/Windows_8) and [Windows Server 2008 R2](https://en.wikipedia.org/wiki/Windows_Server_2008)) can restrict use of TLS to 1.1 or higher.

[Apple](https://en.wikipedia.org/wiki/Apple_Inc.) mitigated the BEAST vulnerability by implementing a 1/n-1 split and turning it on by default in [OS X Mavericks](https://en.wikipedia.org/wiki/OS_X_Mavericks), released on October 22, 2013.

#### CRIME and BREACH attacks

The authors of the BEAST attack are also the creators of the later [CRIME](https://en.wikipedia.org/wiki/CRIME) attack, which can allow an attacker to recover the content of web cookies when [data compression](https://en.wikipedia.org/wiki/Data_compression) is used along with TLS. When used to recover the content of secret [authentication cookies](https://en.wikipedia.org/wiki/Authentication_cookie), it allows an attacker to perform [session hijacking](https://en.wikipedia.org/wiki/Session_hijacking) on an authenticated web session.

While the CRIME attack was presented as a general attack that could work effectively against a large number of protocols, including but not limited to TLS, and application-layer protocols such as [SPDY](https://en.wikipedia.org/wiki/SPDY) or [HTTP](https://en.wikipedia.org/wiki/HTTP), only exploits against TLS and SPDY were demonstrated and largely mitigated in browsers and servers. The CRIME exploit against [HTTP compression](https://en.wikipedia.org/wiki/HTTP_compression) has not been mitigated at all, even though the authors of CRIME have warned that this vulnerability might be even more widespread than SPDY and TLS compression combined. In 2013 a new instance of the CRIME attack against HTTP compression, dubbed [BREACH](https://en.wikipedia.org/wiki/BREACH), was announced. Based on the CRIME attack a BREACH attack can extract login tokens, email addresses or other sensitive information from TLS encrypted web traffic in as little as 30 seconds (depending on the number of bytes to be extracted), provided the attacker tricks the victim into visiting a malicious web link or is able to inject content into valid pages the user is visiting (ex: a wireless network under the control of the attacker). All versions of TLS and SSL are at risk from BREACH regardless of the encryption algorithm or cipher used. Unlike previous instances of CRIME, which can be successfully defended against by turning off TLS compression or SPDY header compression, BREACH exploits HTTP compression which cannot realistically be turned off, as virtually all web servers rely upon it to improve data transmission speeds for users. This is a known limitation of TLS as it is susceptible to [chosen-plaintext attack](https://en.wikipedia.org/wiki/Chosen-plaintext_attack) against the application-layer data it was meant to protect.

#### Timing attacks on padding

Earlier TLS versions were vulnerable against the [padding oracle attack](https://en.wikipedia.org/wiki/Padding_oracle_attack) discovered in 2002. A novel variant, called the [Lucky Thirteen attack](https://en.wikipedia.org/wiki/Lucky_Thirteen_attack), was published in 2013.

Some experts also recommended avoiding [triple DES](https://en.wikipedia.org/wiki/Triple_DES) CBC. Since the last supported ciphers developed to support any program using [Windows XP](https://en.wikipedia.org/wiki/Windows_XP)'s SSL/TLS library like Internet Explorer on Windows XP are [RC4](https://en.wikipedia.org/wiki/RC4) and Triple-DES, and since RC4 is now deprecated (see discussion of [RC4 attacks](https://en.wikipedia.org/wiki/Talk:RC4)), this makes it difficult to support any version of SSL for any program using this library on XP.

A fix was released in 2014 as the Encrypt-then-MAC extension to the TLS specification. The Lucky Thirteen attack can be mitigated in TLS 1.2 by using only AES_GCM ciphers; AES_CBC remains vulnerable. SSL may safeguard email, VoIP, and other types of communications over insecure networks in addition to its primary use case of secure data transmission between a client and the server.

#### POODLE attack

On October 14, 2014, Google researchers published a vulnerability in the design of SSL 3.0, which makes [CBC mode of operation](https://en.wikipedia.org/wiki/CBC_mode_of_operation) with SSL 3.0 vulnerable to a [padding attack](https://en.wikipedia.org/wiki/Padding_oracle_attack) ([CVE](https://en.wikipedia.org/wiki/CVE_(identifier))-[2014-3566](https://nvd.nist.gov/vuln/detail/CVE-2014-3566)). They named this attack **POODLE** (**Padding Oracle On Downgraded Legacy Encryption**). On average, attackers only need to make 256 SSL 3.0 requests to reveal one byte of encrypted messages.

Although this vulnerability only exists in SSL 3.0 and most clients and servers support TLS 1.0 and above, all major browsers voluntarily downgrade to SSL 3.0 if the handshakes with newer versions of TLS fail unless they provide the option for a user or administrator to disable SSL 3.0 and the user or administrator does so. Therefore, the man-in-the-middle can first conduct a [version rollback attack](https://en.wikipedia.org/wiki/Version_rollback_attack) and then exploit this vulnerability.

On December 8, 2014, a variant of POODLE was announced that impacts TLS implementations that do not properly enforce padding byte requirements.

#### RC4 attacks

Despite the existence of attacks on [RC4](https://en.wikipedia.org/wiki/RC4) that broke its security, cipher suites in SSL and TLS that were based on RC4 were still considered secure prior to 2013 based on the way in which they were used in SSL and TLS. In 2011, the RC4 suite was actually recommended as a workaround for the [BEAST](https://en.wikipedia.org/wiki/BEAST_(computer_security)) attack. New forms of attack disclosed in March 2013 conclusively demonstrated the feasibility of breaking RC4 in TLS, suggesting it was not a good workaround for BEAST. An attack scenario was proposed by AlFardan, Bernstein, Paterson, Poettering and Schuldt that used newly discovered statistical biases in the RC4 key table to recover parts of the plaintext with a large number of TLS encryptions. An attack on RC4 in TLS and SSL that requires 13 × 2 encryptions to break RC4 was unveiled on 8 July 2013 and later described as "feasible" in the accompanying presentation at a [USENIX](https://en.wikipedia.org/wiki/USENIX) Security Symposium in August 2013. In July 2015, subsequent improvements in the attack make it increasingly practical to defeat the security of RC4-encrypted TLS.

As many modern browsers have been designed to defeat BEAST attacks (except Safari for Mac OS X 10.7 or earlier, for iOS 6 or earlier, and for Windows; see § Web browsers), RC4 is no longer a good choice for TLS 1.0. The CBC ciphers which were affected by the BEAST attack in the past have become a more popular choice for protection. Mozilla and Microsoft recommend disabling RC4 where possible. In February 2015, the use of RC4 cipher suites was officially prohibited in all versions of TLS.

On September 1, 2015, Microsoft, Google, and Mozilla announced that RC4 cipher suites would be disabled by default in their browsers ([Microsoft Edge [Legacy]](https://en.wikipedia.org/wiki/Microsoft_Edge_Legacy), [Internet Explorer 11](https://en.wikipedia.org/wiki/Internet_Explorer_11) on Windows 7/8.1/10, [Firefox](https://en.wikipedia.org/wiki/Firefox), and [Chrome](https://en.wikipedia.org/wiki/Google_Chrome)) in early 2016.

#### Truncation attack

A TLS (logout) truncation attack blocks a victim's account logout requests so that the user unknowingly remains logged into a web service. When the request to sign out is sent, the attacker injects an unencrypted [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) FIN message (no more data from sender) to close the connection. The server therefore does not receive the logout request and is unaware of the abnormal termination.

Published in July 2013, the attack causes web services such as [Gmail](https://en.wikipedia.org/wiki/Gmail) and [Hotmail](https://en.wikipedia.org/wiki/Outlook.com) to display a page that informs the user that they have successfully signed-out, while ensuring that the user's browser maintains authorization with the service, allowing an attacker with subsequent access to the browser to access and take over control of the user's logged-in account. The attack does not rely on installing malware on the victim's computer; attackers need only place themselves between the victim and the web server (e.g., by setting up a rogue wireless hotspot). This vulnerability also requires access to the victim's computer.
Another possibility is when using FTP the data connection can have a false FIN in the data stream, and if the protocol rules for exchanging close_notify alerts is not adhered to a file can be truncated.

#### Plaintext attack against DTLS

In February 2013 two researchers from Royal Holloway, University of London discovered a timing attack which allowed them to recover (parts of the) plaintext from a DTLS connection using the OpenSSL or GnuTLS implementation of DTLS when [Cipher Block Chaining](https://en.wikipedia.org/wiki/Cipher_Block_Chaining) mode encryption was used.

#### Unholy PAC attack

This attack, discovered in mid-2016, exploits weaknesses in the [Web Proxy Autodiscovery Protocol](https://en.wikipedia.org/wiki/Web_Proxy_Autodiscovery_Protocol) (WPAD) to expose the URL that a web user is attempting to reach via a TLS-enabled web link. Disclosure of a URL can violate a user's privacy, not only because of the website accessed, but also because URLs are sometimes used to authenticate users. Document sharing services, such as those offered by Google and Dropbox, also work by sending a user a security token that is included in the URL. An attacker who obtains such URLs may be able to gain full access to a victim's account or data.

The exploit works against almost all browsers and operating systems.

#### Sweet32 attack

The Sweet32 attack breaks all 64-bit block ciphers used in CBC mode as used in TLS by exploiting a [birthday attack](https://en.wikipedia.org/wiki/Birthday_attack) and either a [man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) or injection of a malicious [JavaScript](https://en.wikipedia.org/wiki/JavaScript) into a web page. The purpose of the man-in-the-middle attack or the JavaScript injection is to allow the attacker to capture enough traffic to mount a birthday attack.

#### Implementation errors: Heartbleed bug, BERserk attack, Cloudflare bug

The [Heartbleed](https://en.wikipedia.org/wiki/Heartbleed) bug is a serious vulnerability specific to the implementation of SSL/TLS in the popular [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL) cryptographic software library, affecting versions 1.0.1 to 1.0.1f. This weakness, reported in April 2014, allows attackers to extract [private keys](https://en.wikipedia.org/wiki/Public-key_cryptography) from servers that should normally be protected. The Heartbleed bug allows anyone on the Internet to read the memory of the systems protected by the vulnerable versions of the OpenSSL software. This compromises the secret private keys associated with the [public certificates](https://en.wikipedia.org/wiki/X.509) used to identify the service providers and to encrypt the traffic, the names and passwords of the users and the actual content. This allows attackers to eavesdrop on communications, extract data directly from the services and users and to impersonate services and users. The vulnerability is caused by a [buffer over-read](https://en.wikipedia.org/wiki/Buffer_over-read) bug in the OpenSSL software, rather than a defect in the SSL or TLS protocol specification.

In September 2014, a variant of [Daniel Bleichenbacher](https://en.wikipedia.org/wiki/Daniel_Bleichenbacher)'s PKCS#1 v1.5 RSA Signature Forgery vulnerability was announced by Intel Security Advanced Threat Research. This attack, dubbed BERserk, is a result of incomplete ASN.1 length decoding of public key signatures in some SSL implementations, and allows a man-in-the-middle attack by forging a public key signature.

In February 2015, after media reported the hidden pre-installation of [superfish](https://en.wikipedia.org/wiki/Superfish) adware on some Lenovo notebooks, a researcher found a trusted root certificate on affected Lenovo machines to be insecure, as the keys could easily be accessed using the company name, Komodia, as a passphrase. The Komodia library was designed to intercept client-side TLS/SSL traffic for parental control and surveillance, but it was also used in numerous adware programs, including Superfish, that were often surreptitiously installed unbeknownst to the computer user. In turn, these [potentially unwanted programs](https://en.wikipedia.org/wiki/Potentially_unwanted_program) installed the corrupt root certificate, allowing attackers to completely control web traffic and confirm false websites as authentic.

In May 2016, it was reported that dozens of Danish HTTPS-protected websites belonging to [Visa Inc.](https://en.wikipedia.org/wiki/Visa_Inc.) were vulnerable to attacks allowing hackers to inject malicious code and forged content into the browsers of visitors. The attacks worked because the TLS implementation used on the affected servers incorrectly reused random numbers ([nonces](https://en.wikipedia.org/wiki/Cryptographic_nonce)) that are intended to be used only once, ensuring that each TLS handshake is unique.

In February 2017, an implementation error caused by a single mistyped character in code used to parse HTML created a buffer overflow error on [Cloudflare](https://en.wikipedia.org/wiki/Cloudflare) servers. Similar in its effects to the Heartbleed bug discovered in 2014, this overflow error, widely known as [Cloudbleed](https://en.wikipedia.org/wiki/Cloudbleed), allowed unauthorized third parties to read data in the memory of programs running on the servers—data that should otherwise have been protected by TLS.

#### Survey of websites vulnerable to attacks

As of July 2021, the Trustworthy Internet Movement estimated the ratio of websites that are vulnerable to TLS attacks.

| Attacks | Security |  |  |  |
| --- | --- | --- | --- | --- |
| Insecure | Depends | Secure | Other |  |
| Renegotiation attack | < 0.1%   support insecure renegotiation | < 0.1%   support both | 99.7%   support secure renegotiation | 0.3%   no support |
| RC4 attacks | 0.2%   support RC4 suites used with modern browsers | 3.0%   support some RC4 suites | 96.9%   no support | —N/a |
| TLS Compression (CRIME attack) | 0%   vulnerable | —N/a | —N/a | —N/a |
| Heartbleed | 0%   vulnerable | —N/a | —N/a | —N/a |
| [ChangeCipherSpec injection attack](https://en.wikipedia.org/wiki/CVE-2014-0224) | < 0.1%   vulnerable and exploitable | < 0.1%   vulnerable, not exploitable | 99.5%   not vulnerable | 0.4%   unknown |
| POODLE attack against TLS   (Original POODLE against SSL 3.0 is not included) | < 0.1%   vulnerable and exploitable | —N/a | 99.9%   not vulnerable | 0.1%   unknown |
| Protocol downgrade | 4.1%   Downgrade defence not supported | —N/a | 80.2%   Downgrade defence supported | 15.7%   unknown |

### Forward secrecy

Forward secrecy is a property of cryptographic systems which ensures that a session key derived from a set of public and private keys will not be compromised if one of the private keys is compromised in the future. Without forward secrecy, if the server's private key is compromised, not only will all future TLS-encrypted sessions using that server certificate be compromised, but also any past sessions that used it as well (provided that these past sessions were intercepted and stored at the time of transmission). An implementation of TLS can provide forward secrecy by requiring the use of ephemeral [Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) to establish session keys, and some notable TLS implementations do so exclusively: e.g., [Gmail](https://en.wikipedia.org/wiki/Gmail) and other Google HTTPS services that use [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL). However, many clients and servers supporting TLS (including browsers and web servers) are not configured to implement such restrictions. In practice, unless a web service uses Diffie–Hellman key exchange to implement forward secrecy, all of the encrypted web traffic to and from that service can be decrypted by a third party if it obtains the server's master (private) key; e.g., by means of a court order.

Even where Diffie–Hellman key exchange is implemented, server-side session management mechanisms can impact forward secrecy. The use of TLS session tickets (a TLS extension) causes the session to be protected by AES128-CBC-SHA256 regardless of any other negotiated TLS parameters, including forward secrecy ciphersuites, and the long-lived TLS session ticket keys defeat the attempt to implement forward secrecy. Stanford University research in 2014 also found that of 473,802 TLS servers surveyed, 82.9% of the servers deploying ephemeral Diffie–Hellman (DHE) key exchange to support forward secrecy were using weak Diffie–Hellman parameters. These weak parameter choices could potentially compromise the effectiveness of the forward secrecy that the servers sought to provide.

Since late 2011, Google has provided forward secrecy with TLS by default to users of its [Gmail](https://en.wikipedia.org/wiki/Gmail) service, along with [Google Docs](https://en.wikipedia.org/wiki/Google_Docs) and encrypted search, among other services.
Since November 2013, [Twitter](https://en.wikipedia.org/wiki/Twitter) has provided forward secrecy with TLS to users of its service. As of August 2019, about 80% of TLS-enabled websites are configured to use cipher suites that provide forward secrecy to most web browsers.

### TLS interception

TLS interception (or [HTTPS](https://en.wikipedia.org/wiki/HTTPS) interception if applied particularly to that protocol) is the practice of intercepting an encrypted data stream in order to decrypt it, read and possibly manipulate it, and then re-encrypt it and send the data on its way again. This is done by way of a "[transparent proxy](https://en.wikipedia.org/wiki/Transparent_proxy)": the interception software terminates the incoming TLS connection, inspects the HTTP plaintext, and then creates a new TLS connection to the destination.

TLS/HTTPS interception is used as an [information security](https://en.wikipedia.org/wiki/Information_security) measure by network operators in order to be able to scan for and protect against the intrusion of malicious content into the network, such as [computer viruses](https://en.wikipedia.org/wiki/Computer_virus) and other [malware](https://en.wikipedia.org/wiki/Malware). Such content could otherwise not be detected as long as it is protected by encryption, which is increasingly the case as a result of the routine use of HTTPS and other secure protocols.

A significant drawback of TLS/HTTPS interception is that it introduces new security risks of its own. One notable limitation is that it provides a point where network traffic is available unencrypted thus giving attackers an incentive to attack this point in particular in order to gain access to otherwise secure content. The interception also allows the network operator, or persons who gain access to its interception system, to perform [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) against network users. A 2017 study found that "HTTPS interception has become startlingly widespread, and that interception products as a class have a dramatically negative impact on connection security".

## Protocol details

The TLS protocol exchanges *records*, which encapsulate the data to be exchanged in a specific format (see below). Each record can be compressed, padded, appended with a [message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code) (MAC), or encrypted, all depending on the state of the connection. Each record has a *content type* field that designates the type of data encapsulated, a length field and a TLS version field. The data encapsulated may be control or procedural messages of the TLS itself, or simply the application data needed to be transferred by TLS. The specifications (cipher suite, keys etc.) required to exchange application data by TLS, are agreed upon in the "TLS handshake" between the client requesting the data and the server responding to requests. The protocol therefore defines both the structure of payloads transferred in TLS and the procedure to establish and monitor the transfer.

### TLS handshake

Simplified illustration of the full TLS 1.2 handshake with timing information

When the connection starts, the record encapsulates a "control" protocol – the handshake messaging protocol (*content type* 22). This protocol is used to exchange all the information required by both sides for the exchange of the actual application data by TLS. It defines the format of messages and the order of their exchange. These may vary according to the demands of the client and server – i.e., there are several possible procedures to set up the connection. This initial exchange results in a successful TLS connection (both parties ready to transfer application data with TLS) or an alert message (as specified below).

#### Basic TLS handshake

A typical connection example follows, illustrating a [handshake](https://en.wikipedia.org/wiki/Handshake_(computing)) where the server (but not the client) is authenticated by its certificate:

1. Negotiation phase:

    * A client sends a **ClientHello** message specifying the highest TLS protocol version it supports, a random number, a list of suggested [cipher suites](https://en.wikipedia.org/wiki/Cipher_suite) and suggested compression methods. If the client is attempting to perform a resumed handshake, it may send a *session ID*. If the client can use [Application-Layer Protocol Negotiation](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation), it may include a list of supported application [protocols](https://en.wikipedia.org/wiki/Communications_protocol), such as [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2).
    * The server responds with a **ServerHello** message, containing the chosen protocol version, a random number, cipher suite and compression method from the choices offered by the client. To confirm or allow resumed handshakes the server may send a *session ID*. The chosen protocol version should be the highest that both the client and server support. For example, if the client supports TLS version 1.1 and the server supports version 1.2, version 1.1 should be selected; version 1.2 should not be selected.
    * The server sends its **Certificate** message (depending on the selected cipher suite, this may be omitted by the server).
    * The server sends its **ServerKeyExchange** message (depending on the selected cipher suite, this may be omitted by the server). This message is sent for all [DHE](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange), [ECDHE](https://en.wikipedia.org/wiki/ECDHE) and DH_anon cipher suites.
    * The server sends a **ServerHelloDone** message, indicating it is done with handshake negotiation.
    * The client responds with a **ClientKeyExchange** message, which may contain a *PreMasterSecret*, public key, or nothing. (Again, this depends on the selected cipher.) This *PreMasterSecret* is encrypted using the public key of the server certificate.
    * The client and server then use the random numbers and *PreMasterSecret* to compute a common secret, called the "master secret". All other key data ([session keys](https://en.wikipedia.org/wiki/Session_key) such as [IV](https://en.wikipedia.org/wiki/Initialization_vector), [symmetric encryption](https://en.wikipedia.org/wiki/Symmetric_encryption) key, [MAC](https://en.wikipedia.org/wiki/Message_authentication_code) key) for this connection is derived from this master secret (and the client- and server-generated random values), which is passed through a carefully designed [pseudorandom](https://en.wikipedia.org/wiki/Pseudorandomness) function.
2. The client now sends a **ChangeCipherSpec** record, essentially telling the server, "Everything I tell you from now on will be authenticated (and encrypted if encryption parameters were present in the server certificate)." The ChangeCipherSpec is itself a record-level protocol with content type of 20.

    * The client sends an authenticated and encrypted **Finished** message, containing a hash and MAC over the previous handshake messages.
    * The server will attempt to decrypt the client's *Finished* message and verify the hash and MAC. If the decryption or verification fails, the handshake is considered to have failed and the connection should be terminated.
3. Finally, the server sends a **ChangeCipherSpec**, telling the client, "Everything I tell you from now on will be authenticated (and encrypted, if encryption was negotiated)."

    * The server sends its authenticated and encrypted **Finished** message.
    * The client performs the same decryption and verification procedure as the server did in the previous step.
4. Application phase: at this point, the "handshake" is complete and the application protocol is enabled, with content type of 23. Application messages exchanged between client and server will also be authenticated and optionally encrypted exactly like in their *Finished* message. Otherwise, the content type will return 25 and the client will not authenticate.

#### Client-authenticated TLS handshake

The following *full* example shows a client being authenticated (in addition to the server as in the example above; see [mutual authentication](https://en.wikipedia.org/wiki/Mutual_authentication)) via TLS using certificates exchanged between both peers.

1. Negotiation Phase:

    * A client sends a **ClientHello** message specifying the highest TLS protocol version it supports, a random number, a list of suggested cipher suites and compression methods.
    * The server responds with a **ServerHello** message, containing the chosen protocol version, a random number, cipher suite and compression method from the choices offered by the client. The server may also send a *session id* as part of the message to perform a resumed handshake.
    * The server sends its **Certificate** message (depending on the selected cipher suite, this may be omitted by the server).
    * The server sends its **ServerKeyExchange** message (depending on the selected cipher suite, this may be omitted by the server). This message is sent for all DHE, ECDHE and DH_anon ciphersuites.
    * The server sends a **CertificateRequest** message, to request a certificate from the client.
    * The server sends a **ServerHelloDone** message, indicating it is done with handshake negotiation.
    * The client responds with a **Certificate** message, which contains the client's certificate, but not its private key.
    * The client sends a **ClientKeyExchange** message, which may contain a *PreMasterSecret*, public key, or nothing. (Again, this depends on the selected cipher.) This *PreMasterSecret* is encrypted using the public key of the server certificate.
    * The client sends a **CertificateVerify** message, which is a signature over the previous handshake messages using the client's certificate's private key. This signature can be verified by using the client's certificate's public key. This lets the server know that the client has access to the private key of the certificate and thus owns the certificate.
    * The client and server then use the random numbers and *PreMasterSecret* to compute a common secret, called the "master secret". All other key data ("session keys") for this connection is derived from this master secret (and the client- and server-generated random values), which is passed through a carefully designed pseudorandom function.
2. The client now sends a **ChangeCipherSpec** record, essentially telling the server, "Everything I tell you from now on will be authenticated (and encrypted if encryption was negotiated). "The ChangeCipherSpec is itself a record-level protocol and has type 20 and not 22.

    * Finally, the client sends an encrypted **Finished** message, containing a hash and MAC over the previous handshake messages.
    * The server will attempt to decrypt the client's *Finished* message and verify the hash and MAC. If the decryption or verification fails, the handshake is considered to have failed and the connection should be torn down.
3. Finally, the server sends a **ChangeCipherSpec**, telling the client, "Everything I tell you from now on will be authenticated (and encrypted if encryption was negotiated)."

    * The server sends its own encrypted **Finished** message.
    * The client performs the same decryption and verification procedure as the server did in the previous step.
4. Application phase: at this point, the "handshake" is complete and the application protocol is enabled, with content type of 23. Application messages exchanged between client and server will also be encrypted exactly like in their *Finished* message.

#### Resumed TLS handshake

Public key operations (e.g., RSA) are relatively expensive in terms of computational power. TLS provides a secure shortcut in the handshake mechanism to avoid these operations: resumed sessions. Resumed sessions are implemented using session IDs or session tickets.

Apart from the performance benefit, resumed sessions can also be used for [single sign-on](https://en.wikipedia.org/wiki/Single_sign-on), as it guarantees that both the original session and any resumed session originate from the same client. This is of particular importance for the [FTP over TLS/SSL](https://en.wikipedia.org/wiki/FTPS) protocol, which would otherwise suffer from a man-in-the-middle attack in which an attacker could intercept the contents of the secondary data connections.

#### TLS 1.3 handshake

The TLS 1.3 handshake was condensed to only one round trip compared to the two round trips required in previous versions of TLS/SSL.

To start the handshake, the client guesses which key exchange algorithm will be selected by the server and sends a **ClientHello** message to the server containing a list of supported ciphers (in order of the client's preference) and public keys for some or all of its key exchange guesses. If the client successfully guesses the key exchange algorithm, 1 round trip is eliminated from the handshake. After receiving the **ClientHello**, the server selects a cipher and sends back a **ServerHello** with its own public key, followed by server **Certificate** and **Finished** messages.

After the client receives the server's finished message, it now is coordinated with the server on which cipher suite to use.

##### Session IDs

In an ordinary *full* handshake, the server sends a *session id* as part of the **ServerHello** message. The client associates this *session id* with the server's IP address and TCP port, so that when the client connects again to that server, it can use the *session id* to shortcut the handshake. In the server, the *session id* maps to the cryptographic parameters previously negotiated, specifically the "master secret". Both sides must have the same "master secret" or the resumed handshake will fail (this prevents an eavesdropper from using a *session id*). The random data in the **ClientHello** and **ServerHello** messages virtually guarantee that the generated connection keys will be different from in the previous connection. In the RFCs, this type of handshake is called an *abbreviated* handshake. It is also described in the literature as a *restart* handshake.

1. Negotiation phase:

    * A client sends a **ClientHello** message specifying the highest TLS protocol version it supports, a random number, a list of suggested cipher suites and compression methods. Included in the message is the *session id* from the previous TLS connection.
    * The server responds with a **ServerHello** message, containing the chosen protocol version, a random number, cipher suite and compression method from the choices offered by the client. If the server recognizes the *session id* sent by the client, it responds with the same *session id*. The client uses this to recognize that a resumed handshake is being performed. If the server does not recognize the *session id* sent by the client, it sends a different value for its *session id*. This tells the client that a resumed handshake will not be performed. At this point, both the client and server have the "master secret" and random data to generate the key data to be used for this connection.
2. The server now sends a **ChangeCipherSpec** record, essentially telling the client, "Everything I tell you from now on will be encrypted." The ChangeCipherSpec is itself a record-level protocol and has type 20 and not 22.

    * Finally, the server sends an encrypted **Finished** message, containing a hash and MAC over the previous handshake messages.
    * The client will attempt to decrypt the server's *Finished* message and verify the hash and MAC. If the decryption or verification fails, the handshake is considered to have failed and the connection should be torn down.
3. Finally, the client sends a **ChangeCipherSpec**, telling the server, "Everything I tell you from now on will be encrypted."

    * The client sends its own encrypted **Finished** message.
    * The server performs the same decryption and verification procedure as the client did in the previous step.
4. Application phase: at this point, the "handshake" is complete and the application protocol is enabled, with content type of 23. Application messages exchanged between client and server will also be encrypted exactly like in their *Finished* message.

##### Session tickets

Instead of session IDs, TLS can also be extended via use of session tickets. It defines a way to resume a TLS session without requiring that session-specific state is stored at the TLS server.

When using session tickets, the TLS server stores its session-specific state in a session ticket and sends the session ticket to the TLS client for storing. The client resumes a TLS session by sending the session ticket to the server, and the server resumes the TLS session according to the session-specific state in the ticket. The session ticket is encrypted and authenticated by the server, and the server verifies its validity before using its contents.

One particular weakness of this method with [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL) is that it always limits encryption and authentication security of the transmitted TLS session ticket to `AES128-CBC-SHA256`, no matter what other TLS parameters were negotiated for the actual TLS session. This means that the state information (the TLS session ticket) is not as well protected as the TLS session itself. Of particular concern is OpenSSL's storage of the keys in an application-wide context (`SSL_CTX`), i.e. for the life of the application, and not allowing for re-keying of the `AES128-CBC-SHA256` TLS session tickets without resetting the application-wide OpenSSL context (which is uncommon, error-prone and often requires manual administrative intervention).

### TLS record

This is the general format of all TLS records.

| *Offset* | [Octet](https://en.wikipedia.org/wiki/Octet_(computing)) | 0 | 1 | 2 | 3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Octet | [Bit](https://en.wikipedia.org/wiki/Bit) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
| 0 | 0 | *Content Type* | *Legacy version (major/minor)* | *Length*↴ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | 32 | *↪Length (cont.)* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | 64 | *Protocol message(s)* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | 96 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| *⁠    5 + m   {\displaystyle 5+m}  ⁠* | *⁠    40 + m ∗ ∗  8   {\displaystyle 40+m*8}  ⁠* | *[Message Authentication Code](https://en.wikipedia.org/wiki/Message_Authentication_Code) (optional)* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| *⁠    5 + m + q   {\displaystyle 5+m+q}  ⁠* | *⁠    40 + ( m + q ) ∗ ∗  8   {\displaystyle 40+(m+q)*8}  ⁠* | *Padding (block ciphers only)* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

**Content Type: 8 bits**
: This field identifies the Record Layer Protocol Type contained in this record.

: Content Types

Hex

Dec

Type

0x14

20

ChangeCipherSpec

0x15

21

Alert

0x16

22

Handshake

0x17

23

Application

0x18

24

Heartbeat

**Legacy version: 16 bits**
: This field identifies the major and minor version of TLS prior to TLS 1.3 for the contained message. For a **ClientHello** message, this need not be the *highest* version supported by the client. For TLS 1.3 and later, this must be set to 0x0303 and application must send supported versions in an extra message extension block.

: Versions

Major  
version

Minor  
version

Version type

3

0

SSL 3.0

3

1

TLS 1.0

3

2

TLS 1.1

3

3

TLS 1.2

3

4

TLS 1.3

**Length: 16 bits; Length < 214**
: The length of *Protocol message(s)*, *MAC* and *Padding* fields combined. The length should not exceed 2 bytes (16 KiB).

**Protocol message(s): variable**
: One or more messages identified by the Protocol field. Note that this field may be encrypted depending on the state of the connection. The length (in bytes) of all messages is indicated by the letter m.

**Message Authentication Code(MAC): 16, 20, or 32 bytes (optional)**
: A [message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code) computed over the *Protocol message(s)* field, with additional key material included. 32 bytes for the [SHA-256](https://en.wikipedia.org/wiki/SHA-256)-based HMAC, 20 bytes for the [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-based HMAC, 16 bytes for the [MD5](https://en.wikipedia.org/wiki/MD5)-based HMAC. Note that this field may be encrypted, or not included entirely, depending on the state of the connection. The length (in bytes) of the MAC is indicated by the letter q.

**Padding: variable (optional)**
: Padding is only added when needed.

No *MAC* or *Padding* fields can be present at end of TLS records before all cipher algorithms and parameters have been negotiated and handshaked and then confirmed by sending a **CipherStateChange** record (see below) for signalling that these parameters will take effect in all further records sent by the same peer.

#### Handshake protocol

Most messages exchanged during the setup of the TLS session are based on this record, unless an error or warning occurs and needs to be signaled by an Alert protocol record (see below), or the encryption mode of the session is modified by another record (see **ChangeCipherSpec** protocol below).

| *Offset* | [Octet](https://en.wikipedia.org/wiki/Octet_(computing)) | 0 | 1 | 2 | 3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Octet | [Bit](https://en.wikipedia.org/wiki/Bit) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
| 0 | 0 | *Content Type (22)* | *Legacy version (major/minor)* | *Length*↴ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | 32 | *↪Length (cont.)* | *Message Type* | *Handshake Message Data Length*↴ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | 64 | *↪Handshake Length (cont.)* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | 96 | *Handshake Message* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | 128 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ | *Handshake Message Data Length* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ | *Handshake Message* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

**Content Type: 8 bits; == 22**
: This field indicates the **Handshake** Protocol Type.

**Message Type: 8 bits**
: This field identifies the handshake message type.

: Message Types

Code

Description

0

HelloRequest

1

ClientHello

2

ServerHello

4

NewSessionTicket

8

EncryptedExtensions (TLS 1.3 only)

11

Certificate

12

ServerKeyExchange

13

CertificateRequest

14

ServerHelloDone

15

CertificateVerify

16

ClientKeyExchange

20

Finished

**Handshake Message Data Length: 24 bits**
: This is a 3-byte field indicating the length of the handshake data, not including the header.

**Handshake Message: variable**
: Data of the handshake message itself.

Note that multiple handshake messages may be combined within one record.

#### Alert protocol

This record should normally not be sent during normal handshaking or application exchanges. However, this message can be sent at any time during the handshake and up to the closure of the session. If this is used to signal a fatal error, the session will be closed immediately after sending this record, so this record is used to give a reason for this closure. If the alert level is flagged as a warning, the remote can decide to close the session if it decides that the session is not reliable enough for its needs (before doing so, the remote may also send its own signal).

| *Offset* | [Octet](https://en.wikipedia.org/wiki/Octet_(computing)) | 0 | 1 | 2 | 3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Octet | [Bit](https://en.wikipedia.org/wiki/Bit) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
| 0 | 0 | *Content Type (21)* | *Legacy version (major/minor)* | *Length (2)*↴ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | 32 | *↪Length (cont.)* | *Level* | *Description* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | 64 | *MAC (optional)* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | 96 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ | *Padding (block ciphers only)* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

**Content Type: 8 bits; == 21**
: This field indicates the **Alert** Protocol Type.

**Length: 16 bits; == 2**
: The length of the rest of fields, which is 2.

**Level: 8 bits**
: This field identifies the level of alert. If the level is fatal, the sender should close the session immediately. Otherwise, the recipient may decide to terminate the session itself, by sending its own fatal alert and closing the session itself immediately after sending it. The use of Alert records is optional, however if it is missing before the session closure, the session may be resumed automatically (with its handshakes).
: Normal closure of a session after termination of the transported application should preferably be alerted with at least the *Close notify* Alert type (with a simple warning level) to prevent such automatic resume of a new session. Signalling explicitly the normal closure of a secure session before effectively closing its transport layer is useful to prevent or detect attacks (like attempts to truncate the securely transported data, if it intrinsically does not have a predetermined length or duration that the recipient of the secured data may expect).

: Alert level types

Code

Level type

Connection state

1

**warning**

connection or security may be unstable.

2

**fatal**

connection or security may be compromised, or an unrecoverable error has occurred.

**Description: 8 bits**
: This field identifies which type of alert is being sent.

: Alert description types

Code

Description

Level types

Note

0

Close notify

**warning**/**fatal**

10

Unexpected message

**fatal**

20

Bad record MAC

**fatal**

Possibly a bad SSL implementation, or payload has been tampered with e.g. FTP firewall rule on [FTPS](https://en.wikipedia.org/wiki/FTPS) server.

21

Decryption failed

**fatal**

TLS only, reserved

22

Record overflow

**fatal**

TLS only

30

Decompression failure

**fatal**

40

Handshake failure

**fatal**

41

No certificate

**warning**/**fatal**

SSL 3.0 only, reserved

42

Bad certificate

**warning**/**fatal**

43

Unsupported certificate

**warning**/**fatal**

e.g. certificate has only server authentication usage enabled and is presented as a client certificate

44

Certificate revoked

**warning**/**fatal**

45

Certificate expired

**warning**/**fatal**

Check server certificate expire also check no certificate in the chain presented has expired

46

Certificate unknown

**warning**/**fatal**

47

Illegal parameter

**fatal**

48

Unknown CA ([Certificate authority](https://en.wikipedia.org/wiki/Certificate_authority))

**fatal**

TLS only

49

Access denied

**fatal**

TLS only – e.g. no client certificate has been presented (TLS: Blank certificate message or SSLv3: No Certificate alert), but server is configured to require one.

50

Decode error

**fatal**

TLS only

51

Decrypt error

**warning**/**fatal**

TLS only

60

Export restriction

**fatal**

TLS only, reserved

70

Protocol version

**fatal**

TLS only

71

Insufficient security

**fatal**

TLS only

80

Internal error

**fatal**

TLS only

86

Inappropriate fallback

**fatal**

TLS only

90

User canceled

**fatal**

TLS only

100

No renegotiation

**warning**

TLS only

110

Unsupported extension

**warning**

TLS only

111

Certificate unobtainable

**warning**

TLS only

112

Unrecognized name

**warning**/**fatal**

TLS only; client's [Server Name Indicator](https://en.wikipedia.org/wiki/Server_Name_Indication) specified a [hostname](https://en.wikipedia.org/wiki/Hostname) not supported by the server

113

Bad certificate status response

**fatal**

TLS only

114

Bad certificate hash value

**fatal**

TLS only

115

Unknown [PSK](https://en.wikipedia.org/wiki/Pre-shared_key) identity

**fatal**

TLS only.  Used in [TLS-PSK](https://en.wikipedia.org/wiki/TLS-PSK) and [TLS-SRP](https://en.wikipedia.org/wiki/TLS-SRP).

116

Certificate required

**fatal**

TLS version 1.3 only

120 or 255

No application protocol

**fatal**

TLS version 1.3 only

#### ChangeCipherSpec protocol

| *Offset* | [Octet](https://en.wikipedia.org/wiki/Octet_(computing)) | 0 | 1 | 2 | 3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Octet | [Bit](https://en.wikipedia.org/wiki/Bit) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
| 0 | 0 | *Content Type (20)* | *Legacy version (major/minor)* | *Length (1)*↴ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | 32 | *↪Length (cont.)* | *CCS Protocol Type* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

**Content Type: 8 bits; == 20**
: This field indicates the **ChangeCipherSpec** Protocol Type.

**Length: 16 bits; == 1**
: The length of the rest of fields, which is 1.

**CCS Protocol Type: 8 bits**
: This field identifies the CCS Protocol type. There is currently only one.

#### Application protocol

| *Offset* | [Octet](https://en.wikipedia.org/wiki/Octet_(computing)) | 0 | 1 | 2 | 3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Octet | [Bit](https://en.wikipedia.org/wiki/Bit) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
| 0 | 0 | *Content Type (23)* | *Legacy version (major/minor)* | *Length*↴ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | 32 | *↪Length (cont.)* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | 64 | *Application Data* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | 96 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| *⁠    5 + m   {\displaystyle 5+m}  ⁠* | *⁠    40 + m ∗ ∗  8   {\displaystyle 40+m*8}  ⁠* | *[Message Authentication Code](https://en.wikipedia.org/wiki/Message_Authentication_Code) (optional)* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ⋮ | ⋮ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| *⁠    5 + m + q   {\displaystyle 5+m+q}  ⁠* | *⁠    40 + ( m + q ) ∗ ∗  8   {\displaystyle 40+(m+q)*8}  ⁠* | *Padding (block ciphers only)* |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

**Content Type: 8 bits; == 23**
: This field identifies the **Application** Protocol Type.

**Length: 16 bits; Length < 214**
: The length of *Application Data*, *MAC* and *Padding* fields combined. The length should not exceed 2 bytes (16 KiB).

**Application Data: variable**
: Data of the application. The length (in bytes) of the data is indicated by the letter m.

**Message Authentication Code(MAC): 16, 20, or 32 bytes (optional)**
: A [message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code) computed over the *Application Data* field. 32 bytes for the [SHA-256](https://en.wikipedia.org/wiki/SHA-256)-based HMAC, 20 bytes for the [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-based HMAC, 16 bytes for the [MD5](https://en.wikipedia.org/wiki/MD5)-based HMAC. The length (in bytes) of the MAC is indicated by the letter q.

**Padding: variable (optional)**
: The last byte contains the padding length.

## Support for name-based virtual servers

From the application protocol point of view, TLS belongs to a lower layer, although the TCP/IP model is too coarse to show it. This means that the TLS handshake is usually (except in the [STARTTLS](https://en.wikipedia.org/wiki/STARTTLS) case) performed before the application protocol can start. In the [name-based virtual server](https://en.wikipedia.org/wiki/Virtual_domain) feature being provided by the application layer, all co-hosted virtual servers share the same certificate because the server has to select and send a certificate immediately after the ClientHello message. This is a big problem in hosting environments because it means either sharing the same certificate among all customers or using a different IP address for each of them.

There are two known workarounds provided by [X.509](https://en.wikipedia.org/wiki/X.509):

* If all virtual servers belong to the same domain, a [wildcard certificate](https://en.wikipedia.org/wiki/Wildcard_certificate) can be used. Besides the loose host name selection that might be a problem or not, there is no common agreement about how to match wildcard certificates. Different rules are applied depending on the application protocol or software used.
* Add every virtual host name in the subjectAltName extension. The major problem being that the certificate needs to be reissued whenever a new virtual server is added.

To provide the server name, Transport Layer Security (TLS) Extensions allow clients to include a [Server Name Indication](https://en.wikipedia.org/wiki/Server_Name_Indication) extension (SNI) in the extended ClientHello message. This extension hints to the server immediately which name the client wishes to connect to, so the server can select the appropriate certificate to send to the clients.

There is also a method to implement name-based virtual hosting by upgrading HTTP to TLS via an [HTTP/1.1 Upgrade header](https://en.wikipedia.org/wiki/HTTP/1.1_Upgrade_header). Normally this is to securely implement HTTP over TLS within the main "http" [URI scheme](https://en.wikipedia.org/wiki/URI_scheme) instead of the commonly used "https" scheme. This would avoid forking the URI space and reduces the number of used ports, however, few implementations currently support this.

## See also

* [Application-Layer Protocol Negotiation](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) – a TLS extension used for SPDY and TLS False Start
* [Bullrun (decryption program)](https://en.wikipedia.org/wiki/Bullrun_(decryption_program)) – a secret anti-encryption program run by the U.S. National Security Agency
* [Certificate authority](https://en.wikipedia.org/wiki/Certificate_authority)
* [Certificate Transparency](https://en.wikipedia.org/wiki/Certificate_Transparency)
* [Datagram TLS](https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security) (DTLS)
* [Delegated credential](https://en.wikipedia.org/wiki/Delegated_credential)
* [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) – HSTS
* [Key ring file](https://en.wikipedia.org/wiki/Key_ring_file)
* [Private Communications Technology](https://en.wikipedia.org/wiki/Private_Communications_Technology) (PCT) – a historic Microsoft competitor to SSL 2.0
* [QUIC](https://en.wikipedia.org/wiki/QUIC) (Quick UDP Internet Connections) – "…was designed to provide security protection equivalent to TLS/SSL"; QUIC's main goal is to improve perceived performance of connection-oriented web applications that are currently using TCP
* [Server-Gated Cryptography](https://en.wikipedia.org/wiki/Server-Gated_Cryptography)
* [tcpcrypt](https://en.wikipedia.org/wiki/Tcpcrypt)
* [Datagram Transport Layer Security](https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security)
* [TLS acceleration](https://en.wikipedia.org/wiki/TLS_acceleration)

## Further reading

* Wagner, David; Schneier, Bruce (November 1996). ["Analysis of the SSL 3.0 Protocol"](http://www.schneier.com/paper-ssl.pdf) (PDF). *The Second USENIX Workshop on Electronic Commerce Proceedings*. USENIX Press. pp. 29–40. [Archived](https://web.archive.org/web/20061016180809/http://www.schneier.com/paper-ssl.pdf) (PDF) from the original on 2006-10-16. Retrieved 2006-10-12.
* Rescorla, Eric (2001). [*SSL and TLS: Designing and Building Secure Systems*](https://archive.org/details/ssltls00eric). United States: Addison-Wesley Pub Co. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-201-61598-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-61598-2).
* Stephen A. Thomas (2000). *SSL and TLS essentials securing the Web*. New York: Wiley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0-471-38354-3](https://en.wikipedia.org/wiki/Special:BookSources/978-0-471-38354-3).
* Bard, Gregory (2006). ["A Challenging But Feasible Blockwise-Adaptive Chosen-Plaintext Attack on SSL"](http://eprint.iacr.org/2006/136). *International Association for Cryptologic Research* (136). [Archived](https://web.archive.org/web/20110923202258/http://eprint.iacr.org/2006/136) from the original on 2011-09-23. Retrieved 2011-09-23.
* Canvel, Brice. ["Password Interception in a SSL/TLS Channel"](https://web.archive.org/web/20160420233852/http://lasecwww.epfl.ch/memo/memo_ssl.shtml). Archived from [the original](http://lasecwww.epfl.ch/memo/memo_ssl.shtml) on 2016-04-20. Retrieved 2007-04-20.
* [Creating VPNs with IPsec and SSL/TLS](http://www.linuxjournal.com/article/9916) [Archived](https://web.archive.org/web/20150412014613/http://www.linuxjournal.com/article/9916) 2015-04-12 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine) Linux Journal article by Rami Rosen
* Joshua Davies (2010). *Implementing SSL/TLS*. Wiley. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-0470920411](https://en.wikipedia.org/wiki/Special:BookSources/978-0470920411).
* Polk, Tim; McKay, Kerry; Chokhani, Santosh (April 2014). ["Guidelines for the Selection, Configuration, and Use of Transport Layer Security (TLS) Implementations"](https://web.archive.org/web/20140508025330/http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-52r1.pdf) (PDF). National Institute of Standards and Technology. Archived from [the original](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-52r1.pdf) (PDF) on 2014-05-08. Retrieved 2014-05-07.
* Abdou, AbdelRahman; van Oorschot, Paul (August 2017). ["Server Location Verification (SLV) and Server Location Pinning: Augmenting TLS Authentication"](https://dl.acm.org/citation.cfm?id=3139294). *ACM Transactions on Privacy and Security*. **21** (1): 1:1–1:26. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3139294](https://doi.org/10.1145%2F3139294). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [5869541](https://api.semanticscholar.org/CorpusID:5869541). [Archived](https://web.archive.org/web/20190322145042/https://dl.acm.org/citation.cfm?id=3139294) from the original on 2019-03-22. Retrieved 2018-01-11.
* Ivan Ristic (2022). *Bulletproof TLS and PKI, Second Edition*. Feisty Duck. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1907117091](https://en.wikipedia.org/wiki/Special:BookSources/978-1907117091).

## External links

* [Internet Engineering Task Force – TLS Workgroup](https://datatracker.ietf.org/wg/tls) [Archived](https://web.archive.org/web/20140111193101/http://datatracker.ietf.org/wg/tls/) 2014-01-11 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)

## IETF Request for comments

### Primary standards

The current approved version of (D)TLS is version 1.3, which is specified in:

* RFC [8446](https://www.rfc-editor.org/rfc/rfc8446) – "The Transport Layer Security (TLS) Protocol Version 1.3," *Proposed Standard.*
* RFC [9147](https://www.rfc-editor.org/rfc/rfc9147) – "The Datagram Transport Layer Security (DTLS) Protocol Version 1.3," *Proposed Standard.*

The current standards replaces these former versions:

* RFC [5246](https://www.rfc-editor.org/rfc/rfc5246) – "The Transport Layer Security (TLS) Protocol Version 1.2," *Obsolete.*
* RFC [6347](https://www.rfc-editor.org/rfc/rfc6347) – "Datagram Transport Layer Security Version 1.2," *Obsolete.*
* RFC [4346](https://www.rfc-editor.org/rfc/rfc4346) – "The Transport Layer Security (TLS) Protocol Version 1.1," *Historic.*
* RFC [2246](https://www.rfc-editor.org/rfc/rfc2246) – "The TLS Protocol Version 1.0," *Historic.*
* RFC [6101](https://www.rfc-editor.org/rfc/rfc6101) – "The Secure Sockets Layer (SSL) Protocol Version 3.0," *Historic.*
* [Internet Draft (1995)](https://tools.ietf.org/html/draft-hickman-netscape-ssl-00): "The SSL Protocol"

### Extensions

Other [RFCs](https://en.wikipedia.org/wiki/Request_for_Comments) subsequently extended (D)TLS.

Extensions to (D)TLS 1.3 include:

* RFC [9367](https://www.rfc-editor.org/rfc/rfc9367) – "GOST Cipher Suites for Transport Layer Security (TLS) Protocol Version 1.3," *Informational.*

Extensions to (D)TLS 1.2 include:

* RFC [5288](https://www.rfc-editor.org/rfc/rfc5288) – "AES [Galois Counter Mode](https://en.wikipedia.org/wiki/Galois/Counter_Mode) (GCM) Cipher Suites for TLS," *Proposed Standard.*
* RFC [5289](https://www.rfc-editor.org/rfc/rfc5289) – "TLS Elliptic Curve Cipher Suites with SHA-256/384 and AES Galois Counter Mode (GCM)," *Proposed Standard.*
* RFC [5746](https://www.rfc-editor.org/rfc/rfc5746) – "Transport Layer Security (TLS) Renegotiation Indication Extension," *Proposed Standard.*
* RFC [5878](https://www.rfc-editor.org/rfc/rfc5878) – "Transport Layer Security (TLS) Authorization Extensions," *Experimental.*
* RFC [5932](https://www.rfc-editor.org/rfc/rfc5932) – "Camellia Cipher Suites for TLS," *Proposed Standard.*
* RFC [6066](https://www.rfc-editor.org/rfc/rfc6066) – "Transport Layer Security (TLS) Extensions: Extension Definitions," *Proposed Standard.* Includes [Server Name Indication](https://en.wikipedia.org/wiki/Server_Name_Indication) and [OCSP stapling](https://en.wikipedia.org/wiki/OCSP_stapling).
* RFC [6091](https://www.rfc-editor.org/rfc/rfc6091) – "Using [OpenPGP](https://en.wikipedia.org/wiki/OpenPGP) Keys for Transport Layer Security (TLS) Authentication," *Informational.*
* RFC [6176](https://www.rfc-editor.org/rfc/rfc6176) – "Prohibiting Secure Sockets Layer (SSL) Version 2.0," *Proposed Standard.*
* RFC [6209](https://www.rfc-editor.org/rfc/rfc6209) – "Addition of the [ARIA](https://en.wikipedia.org/wiki/ARIA_(cipher)) Cipher Suites to Transport Layer Security (TLS)," *Informational.*
* RFC [6347](https://www.rfc-editor.org/rfc/rfc6347) – "Datagram Transport Layer Security Version 1.2," *Obsolete.* The definition is now part of the DTLS 1.3 specification.
* RFC [6367](https://www.rfc-editor.org/rfc/rfc6367) – "Addition of the [Camellia](https://en.wikipedia.org/wiki/Camellia_(cipher)) Cipher Suites to Transport Layer Security (TLS)," *Informational.*
* RFC [6460](https://www.rfc-editor.org/rfc/rfc6460) – "[Suite B](https://en.wikipedia.org/wiki/Suite_B) Profile for Transport Layer Security (TLS)," *Historic.* Support for Suite B Cryptography has been discontinued by the [National Security Agency](https://en.wikipedia.org/wiki/National_Security_Agency).
* RFC [6655](https://www.rfc-editor.org/rfc/rfc6655) – "AES-CCM Cipher Suites for Transport Layer Security (TLS)," *Proposed Standard.*
* RFC [7027](https://www.rfc-editor.org/rfc/rfc7027) – "Elliptic Curve Cryptography (ECC) Brainpool Curves for Transport Layer Security (TLS)," *Informational.*
* RFC [7251](https://www.rfc-editor.org/rfc/rfc7251) – "AES-CCM [Elliptic Curve Cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography) (ECC) Cipher Suites for TLS," *Informational.*
* RFC [7301](https://www.rfc-editor.org/rfc/rfc7301) – "Transport Layer Security (TLS) [Application-Layer Protocol Negotiation](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) Extension," *Proposed Standard.*
* RFC [7366](https://www.rfc-editor.org/rfc/rfc7366) – "Encrypt-then-MAC for Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)," *Proposed Standard.*
* RFC [7465](https://www.rfc-editor.org/rfc/rfc7465) – "Prohibiting RC4 Cipher Suites," *Proposed Standard.*
* RFC [7507](https://www.rfc-editor.org/rfc/rfc7507) – "TLS Fallback Signaling Cipher Suite Value (SCSV) for Preventing Protocol Downgrade Attacks," *Obsolete.*
* RFC [7568](https://www.rfc-editor.org/rfc/rfc7568) – "Deprecating Secure Sockets Layer Version 3.0," *Proposed Standard.*
* RFC [7627](https://www.rfc-editor.org/rfc/rfc7627) – "Transport Layer Security (TLS) Session Hash and Extended Master Secret Extension," *Proposed Standard.*
* RFC [7685](https://www.rfc-editor.org/rfc/rfc7685) – "A Transport Layer Security (TLS) ClientHello Padding Extension," *Proposed Standard.*
* RFC [8422](https://www.rfc-editor.org/rfc/rfc8422) – "Elliptic Curve Cryptography (ECC) Cipher Suites for Transport Layer Security (TLS) Versions 1.2 and Earlier," *Proposed Standard.*
* RFC [9189](https://www.rfc-editor.org/rfc/rfc9189) – "GOST Cipher Suites for Transport Layer Security (TLS) Protocol Version 1.2," *Informational.*

Extensions to (D)TLS 1.1 include:

* RFC [4366](https://www.rfc-editor.org/rfc/rfc4366) – "Transport Layer Security (TLS) Extensions," *Obsolete.* Describes both a set of specific extensions and a generic extension mechanism.
* RFC [4492](https://www.rfc-editor.org/rfc/rfc4492) – "[Elliptic Curve Cryptography](https://en.wikipedia.org/wiki/Elliptic_Curve_Cryptography) (ECC) Cipher Suites for Transport Layer Security (TLS)," *Obsolete.*
* RFC [4680](https://www.rfc-editor.org/rfc/rfc4680) – "TLS Handshake Message for Supplemental Data," *Proposed Standard.*
* RFC [4681](https://www.rfc-editor.org/rfc/rfc4681) – "TLS User Mapping Extension," *Proposed Standard.*
* RFC [4785](https://www.rfc-editor.org/rfc/rfc4785) – "Pre-Shared Key (PSK) Ciphersuites with NULL Encryption for Transport Layer Security (TLS)," *Proposed Standard.*
* RFC [5054](https://www.rfc-editor.org/rfc/rfc5054) – "Using the [Secure Remote Password](https://en.wikipedia.org/wiki/Secure_Remote_Password) (SRP) Protocol for TLS Authentication," *Informational.* Defines the [TLS-SRP](https://en.wikipedia.org/wiki/TLS-SRP) ciphersuites.
* RFC [5077](https://www.rfc-editor.org/rfc/rfc5077) – "Transport Layer Security (TLS) Session Resumption without Server-Side State," *Obsolete.*
* RFC [5081](https://www.rfc-editor.org/rfc/rfc5081) – "Using OpenPGP Keys for Transport Layer Security (TLS) Authentication," *Experimental.*
* RFC [5216](https://www.rfc-editor.org/rfc/rfc5216) – "The [EAP](https://en.wikipedia.org/wiki/Extensible_Authentication_Protocol)-TLS Authentication Protocol," *Proposed Standard.*

Extensions to TLS 1.0 include:

* RFC [2595](https://www.rfc-editor.org/rfc/rfc2595) – "Using TLS with IMAP, POP3 and ACAP," *Proposed Standard.* Specifies an extension to the IMAP, POP3 and ACAP services that allow the server and client to use transport-layer security to provide private, authenticated communication over the Internet.
* RFC [2712](https://www.rfc-editor.org/rfc/rfc2712) – "Addition of [Kerberos](https://en.wikipedia.org/wiki/Kerberos_(protocol)) Cipher Suites to Transport Layer Security (TLS)," *Proposed Standard.* The 40-bit cipher suites defined in this memo appear only for the purpose of documenting the fact that those cipher suite codes have already been assigned.
* RFC [2817](https://www.rfc-editor.org/rfc/rfc2817) – "Upgrading to TLS Within HTTP/1.1," *Proposed Standard.* Explains how to use the [Upgrade mechanism in HTTP/1.1](https://en.wikipedia.org/wiki/HTTP/1.1_Upgrade_header) to initiate Transport Layer Security (TLS) over an existing TCP connection. This allows unsecured and secured HTTP traffic to share the same *well known* port (in this case, http: at 80 rather than https: at 443).
* RFC [2818](https://www.rfc-editor.org/rfc/rfc2818) – "HTTP Over TLS," *Obsolete.* Distinguishes secured traffic from insecure traffic by the use of a different 'server port'.
* RFC [3207](https://www.rfc-editor.org/rfc/rfc3207) – "SMTP Service Extension for Secure SMTP over Transport Layer Security," *Proposed Standard.* Specifies an extension to the SMTP service that allows an SMTP server and client to use transport-layer security to provide private, authenticated communication over the Internet.
* RFC [3268](https://www.rfc-editor.org/rfc/rfc3268) – "Advanced Encryption Standard (AES) Ciphersuites for Transport Layer Security (TLS)," *Obsolete.* Adds [Advanced Encryption Standard](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) (AES) cipher suites to the previously existing symmetric ciphers.
* RFC [3546](https://www.rfc-editor.org/rfc/rfc3546) – "Transport Layer Security (TLS) Extensions," *Obsolete.* Adds a mechanism for negotiating protocol extensions during session initialisation and defines some extensions.
* RFC [3749](https://www.rfc-editor.org/rfc/rfc3749) – "Transport Layer Security Protocol Compression Methods," *Proposed Standard.* Specifies the framework for compression methods and the [DEFLATE](https://en.wikipedia.org/wiki/DEFLATE) compression method.
* RFC [3943](https://www.rfc-editor.org/rfc/rfc3943) – "Transport Layer Security (TLS) Protocol Compression Using Lempel-Ziv-Stac (LZS)," *Informational.*
* RFC [4132](https://www.rfc-editor.org/rfc/rfc4132) – "Addition of [Camellia](https://en.wikipedia.org/wiki/Camellia_(cipher)) Cipher Suites to Transport Layer Security (TLS)," *Obsolete.*
* RFC [4162](https://www.rfc-editor.org/rfc/rfc4162) – "Addition of SEED Cipher Suites to Transport Layer Security (TLS)," *Proposed Standard.*
* RFC [4217](https://www.rfc-editor.org/rfc/rfc4217) – "Securing FTP with TLS," *Proposed Standard.*
* RFC [4279](https://www.rfc-editor.org/rfc/rfc4279) – "Pre-Shared Key Ciphersuites for Transport Layer Security (TLS)," *Proposed Standard.* Adds three sets of new cipher suites for the TLS protocol to support authentication based on pre-shared keys.

### Informational RFCs

* RFC [7457](https://www.rfc-editor.org/rfc/rfc7457) – "Summarizing Known Attacks on Transport Layer Security (TLS) and Datagram TLS (DTLS)," *Informational.*
* RFC [9325](https://www.rfc-editor.org/rfc/rfc9325) – "Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)," *Best Current Practice 195.*

## References

1. **^** i.e. ["Delegated Credentials for (D)TLS"](https://datatracker.ietf.org/doc/html/draft-ietf-tls-subcerts-15). *Ietf*. [Archived](https://web.archive.org/web/20240626174852/https://datatracker.ietf.org/doc/html/draft-ietf-tls-subcerts-15) from the original on 2024-06-26. Retrieved 2024-06-26.
2. ^     R. Khare; S. Lawrence (May 2000). [*Upgrading to TLS Within HTTP/1.1*](https://www.rfc-editor.org/rfc/rfc2817). [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC2817](https://doi.org/10.17487%2FRFC2817). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [2817](https://datatracker.ietf.org/doc/html/rfc2817). *Proposed Standard.*  Updated by RFC [7230](https://www.rfc-editor.org/rfc/rfc7230) and [7231](https://www.rfc-editor.org/rfc/rfc7231). Updates RFC [2616](https://www.rfc-editor.org/rfc/rfc2616).
3. **^** ["SSL/TLS in Detail"](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc785811(v=ws.10)). [TechNet](https://en.wikipedia.org/wiki/Microsoft_TechNet). *[Microsoft Docs](https://en.wikipedia.org/wiki/Microsoft_Docs)*. October 8, 2009. [Archived](https://web.archive.org/web/20220813015525/https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc785811(v=ws.10)) from the original on 2022-08-13. Retrieved 2021-10-24.
4. ^   Hooper, Howard (2012). [*CCNP Security VPN 642–648 Official Cert Guide*](https://books.google.com/books?id=5PJisOKJ0k8C&pg=PA22) (2 ed.). Cisco Press. p. 22. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [9780132966382](https://en.wikipedia.org/wiki/Special:BookSources/9780132966382).
5. ^   Spott, Andrew; Leek, Tom; et al. ["What layer is TLS?"](https://security.stackexchange.com/a/93338). *Information Security Stack Exchange*. [Archived](https://web.archive.org/web/20210213050549/https://security.stackexchange.com/questions/93333/what-layer-is-tls/93338) from the original on 2021-02-13. Retrieved 2017-04-13.
6. ^        E. Rescorla (August 2018). [*The Transport Layer Security (TLS) Protocol Version 1.3*](https://www.rfc-editor.org/rfc/rfc8446). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) TLS workgroup. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC8446](https://doi.org/10.17487%2FRFC8446). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [8446](https://datatracker.ietf.org/doc/html/rfc8446). *Proposed Standard.*  Obsoletes RFC [5077](https://www.rfc-editor.org/rfc/rfc5077), [5246](https://www.rfc-editor.org/rfc/rfc5246) and [6961](https://www.rfc-editor.org/rfc/rfc6961). Updates RFC [5705](https://www.rfc-editor.org/rfc/rfc5705) and [6066](https://www.rfc-editor.org/rfc/rfc6066).
7. ^   E. Rescorla; N. Modadugu (April 2006). [*Datagram Transport Layer Security*](https://www.rfc-editor.org/rfc/rfc4347). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4347](https://doi.org/10.17487%2FRFC4347). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4347](https://datatracker.ietf.org/doc/html/rfc4347). *Obsolete.*  Obsoleted by RFC [6347](https://www.rfc-editor.org/rfc/rfc6347). Updated by RFC [5746](https://www.rfc-editor.org/rfc/rfc5746) and [7507](https://www.rfc-editor.org/rfc/rfc7507).
8. ^    E. Rescorla; N. Modadugu (January 2012). [*Datagram Transport Layer Security Version 1.2*](https://www.rfc-editor.org/rfc/rfc6347). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC6347](https://doi.org/10.17487%2FRFC6347). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [6347](https://datatracker.ietf.org/doc/html/rfc6347). *Obsolete.*  Obsoleted by RFC [9147](https://www.rfc-editor.org/rfc/rfc9147). Updated by RFC [7507](https://www.rfc-editor.org/rfc/rfc7507), [7905](https://www.rfc-editor.org/rfc/rfc7905), [8996](https://www.rfc-editor.org/rfc/rfc8996) and [9146](https://www.rfc-editor.org/rfc/rfc9146). Obsoletes RFC [4347](https://www.rfc-editor.org/rfc/rfc4347).
9. **^** Titz, Olaf (2001-04-23). ["Why TCP Over TCP Is A Bad Idea"](http://sites.inka.de/bigred/devel/tcp-tcp.html). [Archived](https://web.archive.org/web/20230310043036/http://sites.inka.de/bigred/devel/tcp-tcp.html) from the original on 2023-03-10. Retrieved 2015-10-17.
10. **^** Honda, Osamu; Ohsaki, Hiroyuki; Imase, Makoto; Ishizuka, Mika; Murayama, Junichi (October 2005). "Understanding TCP over TCP: effects of TCP tunneling on end-to-end throughput and latency". In Atiquzzaman, Mohammed; Balandin, Sergey I (eds.). *Performance, Quality of Service, and Control of Next-Generation Communication and Sensor Networks III*. Vol. 6011. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2005SPIE.6011..138H](https://ui.adsabs.harvard.edu/abs/2005SPIE.6011..138H). [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.78.5815](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.78.5815). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1117/12.630496](https://doi.org/10.1117%2F12.630496). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [8945952](https://api.semanticscholar.org/CorpusID:8945952).
11. ^   E. Rescorla; H. Tschofenig; N. Modadugu (April 2022). [*The Datagram Transport Layer Security (DTLS) Protocol Version 1.3*](https://www.rfc-editor.org/rfc/rfc9147). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) TLS workgroup. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9147](https://doi.org/10.17487%2FRFC9147). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [9147](https://datatracker.ietf.org/doc/html/rfc9147). *Proposed Standard.*  Obsoletes RFC [6347](https://www.rfc-editor.org/rfc/rfc6347).
12. **^** ["AnyConnect FAQ: tunnels, reconnect behavior, and the inactivity timer"](http://www.cisco.com/c/en/us/support/docs/security/anyconnect-secure-mobility-client/116312-qanda-anyconnect-00.html). [Cisco](https://en.wikipedia.org/wiki/Cisco). [Archived](https://web.archive.org/web/20170226131243/http://www.cisco.com/c/en/us/support/docs/security/anyconnect-secure-mobility-client/116312-qanda-anyconnect-00.html) from the original on 26 February 2017. Retrieved 26 February 2017.
13. **^** ["Cisco InterCloud Architectural Overview"](http://www.cisco.com/c/en/us/td/docs/solutions/Hybrid_Cloud/Intercloud/Intercloud_Fabric/Intercloud_Fabric_2.pdf) (PDF). [Cisco Systems](https://en.wikipedia.org/wiki/Cisco_Systems). [Archived](https://web.archive.org/web/20220809111605/https://www.cisco.com/c/en/us/td/docs/solutions/Hybrid_Cloud/Intercloud/Intercloud_Fabric/Intercloud_Fabric_2.pdf) (PDF) from the original on 2022-08-09. Retrieved 2022-11-29.
14. **^** ["OpenConnect"](https://www.infradead.org/openconnect/). [OpenConnect](https://en.wikipedia.org/wiki/OpenConnect). [Archived](https://web.archive.org/web/20170202104439/http://www.infradead.org/openconnect/) from the original on 2 February 2017. Retrieved 26 February 2017.
15. **^** ["ZScaler ZTNA 2.0 Tunnel"](https://help.zscaler.com/z-app/about-z-tunnel-1.0-z-tunnel-2.0). [ZScaler](https://en.wikipedia.org/wiki/ZScaler). [Archived](https://web.archive.org/web/20221129041020/https://help.zscaler.com/z-app/about-z-tunnel-1.0-z-tunnel-2.0) from the original on 2022-11-29. Retrieved 2022-11-29.
16. **^** ["f5 Datagram Transport Layer Security (DTLS)"](https://f5.com/glossary/datagram-transport-layer-security-dtls). [f5 Networks](https://en.wikipedia.org/wiki/F5_Networks). [Archived](https://web.archive.org/web/20221129041024/https://www.f5.com/glossary/datagram-transport-layer-security-dtls) from the original on 2022-11-29. Retrieved 2022-11-29.
17. **^** ["Configuring a DTLS Virtual Server"](http://docs.citrix.com/en-us/netscaler/11/traffic-management/ssl/config-ssloffloading/config-dtls-vserver.html). [Citrix Systems](https://en.wikipedia.org/wiki/Citrix_Systems). [Archived](https://web.archive.org/web/20161221020000/http://docs.citrix.com/en-us/netscaler/11/traffic-management/ssl/config-ssloffloading/config-dtls-vserver.html) from the original on 2016-12-21. Retrieved 2022-11-29.
18. **^** ["WebRTC Interop Notes"](https://web.archive.org/web/20130511043959/https://sites.google.com/site/webrtc/interop). Archived from [the original](https://sites.google.com/site/webrtc/interop) on 2013-05-11.
19. ^   S. Turner; T. Polk (March 2011). [*Prohibiting Secure Sockets Layer (SSL) Version 2.0*](https://www.rfc-editor.org/rfc/rfc6176). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC6176](https://doi.org/10.17487%2FRFC6176). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [6176](https://datatracker.ietf.org/doc/html/rfc6176). *Proposed Standard.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996). Updates RFC [2246](https://www.rfc-editor.org/rfc/rfc2246), [5246](https://www.rfc-editor.org/rfc/rfc5246) and [4346](https://www.rfc-editor.org/rfc/rfc4346).
20. ^   R. Barnes; M. Thomson; A. Pironti; A. Langley (June 2015). [*Deprecating Secure Sockets Layer Version 3.0*](https://www.rfc-editor.org/rfc/rfc7568). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7568](https://doi.org/10.17487%2FRFC7568). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7568](https://datatracker.ietf.org/doc/html/rfc7568). *Proposed Standard.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996). Updates RFC [5246](https://www.rfc-editor.org/rfc/rfc5246).
21. ^   M. Nottingham (March 2021). [*Deprecating TLS 1.0 and TLS 1.1*](https://www.rfc-editor.org/rfc/rfc8996). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC8996](https://doi.org/10.17487%2FRFC8996). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). BCP 195. [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [8996](https://datatracker.ietf.org/doc/html/rfc8996). *Best Current Practice 195.*  Obsoletes RFC [5469](https://www.rfc-editor.org/rfc/rfc5469) and [7507](https://www.rfc-editor.org/rfc/rfc7507). Updates RFC [3261](https://www.rfc-editor.org/rfc/rfc3261), [3329](https://www.rfc-editor.org/rfc/rfc3329), [3436](https://www.rfc-editor.org/rfc/rfc3436), [3470](https://www.rfc-editor.org/rfc/rfc3470), [3501](https://www.rfc-editor.org/rfc/rfc3501), [3552](https://www.rfc-editor.org/rfc/rfc3552), [3568](https://www.rfc-editor.org/rfc/rfc3568), [3656](https://www.rfc-editor.org/rfc/rfc3656), [3749](https://www.rfc-editor.org/rfc/rfc3749), [3767](https://www.rfc-editor.org/rfc/rfc3767), [3856](https://www.rfc-editor.org/rfc/rfc3856), [3871](https://www.rfc-editor.org/rfc/rfc3871), [3887](https://www.rfc-editor.org/rfc/rfc3887), [3903](https://www.rfc-editor.org/rfc/rfc3903), [3943](https://www.rfc-editor.org/rfc/rfc3943), [3983](https://www.rfc-editor.org/rfc/rfc3983), [4097](https://www.rfc-editor.org/rfc/rfc4097), [4111](https://www.rfc-editor.org/rfc/rfc4111), [4162](https://www.rfc-editor.org/rfc/rfc4162), [4168](https://www.rfc-editor.org/rfc/rfc4168), [4217](https://www.rfc-editor.org/rfc/rfc4217), [4235](https://www.rfc-editor.org/rfc/rfc4235), [4261](https://www.rfc-editor.org/rfc/rfc4261), [4279](https://www.rfc-editor.org/rfc/rfc4279), [4497](https://www.rfc-editor.org/rfc/rfc4497), [4513](https://www.rfc-editor.org/rfc/rfc4513), [4531](https://www.rfc-editor.org/rfc/rfc4531), [4540](https://www.rfc-editor.org/rfc/rfc4540), [4582](https://www.rfc-editor.org/rfc/rfc4582), [4616](https://www.rfc-editor.org/rfc/rfc4616), [4642](https://www.rfc-editor.org/rfc/rfc4642), [4680](https://www.rfc-editor.org/rfc/rfc4680), [4681](https://www.rfc-editor.org/rfc/rfc4681), [4712](https://www.rfc-editor.org/rfc/rfc4712), [4732](https://www.rfc-editor.org/rfc/rfc4732), [4743](https://www.rfc-editor.org/rfc/rfc4743), [4744](https://www.rfc-editor.org/rfc/rfc4744), [4785](https://www.rfc-editor.org/rfc/rfc4785), [4791](https://www.rfc-editor.org/rfc/rfc4791), [4823](https://www.rfc-editor.org/rfc/rfc4823), [4851](https://www.rfc-editor.org/rfc/rfc4851), [4964](https://www.rfc-editor.org/rfc/rfc4964), [4975](https://www.rfc-editor.org/rfc/rfc4975), [4976](https://www.rfc-editor.org/rfc/rfc4976), [4992](https://www.rfc-editor.org/rfc/rfc4992), [5018](https://www.rfc-editor.org/rfc/rfc5018), [5019](https://www.rfc-editor.org/rfc/rfc5019), [5023](https://www.rfc-editor.org/rfc/rfc5023), [5024](https://www.rfc-editor.org/rfc/rfc5024), [5049](https://www.rfc-editor.org/rfc/rfc5049), [5054](https://www.rfc-editor.org/rfc/rfc5054), [5091](https://www.rfc-editor.org/rfc/rfc5091), [5158](https://www.rfc-editor.org/rfc/rfc5158), [5216](https://www.rfc-editor.org/rfc/rfc5216), [5238](https://www.rfc-editor.org/rfc/rfc5238), [5263](https://www.rfc-editor.org/rfc/rfc5263), [5281](https://www.rfc-editor.org/rfc/rfc5281), [5364](https://www.rfc-editor.org/rfc/rfc5364), [5415](https://www.rfc-editor.org/rfc/rfc5415), [5422](https://www.rfc-editor.org/rfc/rfc5422), [5456](https://www.rfc-editor.org/rfc/rfc5456), [5734](https://www.rfc-editor.org/rfc/rfc5734), [5878](https://www.rfc-editor.org/rfc/rfc5878), [5953](https://www.rfc-editor.org/rfc/rfc5953), [6012](https://www.rfc-editor.org/rfc/rfc6012), [6042](https://www.rfc-editor.org/rfc/rfc6042), [6083](https://www.rfc-editor.org/rfc/rfc6083), [6084](https://www.rfc-editor.org/rfc/rfc6084), [6176](https://www.rfc-editor.org/rfc/rfc6176), [6347](https://www.rfc-editor.org/rfc/rfc6347), [6353](https://www.rfc-editor.org/rfc/rfc6353), [6367](https://www.rfc-editor.org/rfc/rfc6367), [6460](https://www.rfc-editor.org/rfc/rfc6460), [6614](https://www.rfc-editor.org/rfc/rfc6614), [6739](https://www.rfc-editor.org/rfc/rfc6739), [6749](https://www.rfc-editor.org/rfc/rfc6749), [6750](https://www.rfc-editor.org/rfc/rfc6750), [7030](https://www.rfc-editor.org/rfc/rfc7030), [7465](https://www.rfc-editor.org/rfc/rfc7465), [7525](https://www.rfc-editor.org/rfc/rfc7525), [7562](https://www.rfc-editor.org/rfc/rfc7562), [7568](https://www.rfc-editor.org/rfc/rfc7568), [8261](https://www.rfc-editor.org/rfc/rfc8261) and [8422](https://www.rfc-editor.org/rfc/rfc8422).
22. ^      Bright, Peter (17 October 2018). ["Apple, Google, Microsoft, and Mozilla come together to end TLS 1.0"](https://arstechnica.com/gadgets/2018/10/browser-vendors-unite-to-end-support-for-20-year-old-tls-1-0). [Archived](https://web.archive.org/web/20181017000107/https://arstechnica.com/gadgets/2018/10/browser-vendors-unite-to-end-support-for-20-year-old-tls-1-0/) from the original on 17 October 2018. Retrieved 17 October 2018.
23. ^     Brinkmann, Martin (10 March 2020). ["Here is what is new and changed in Firefox 74.0 Stable – gHacks Tech News"](https://www.ghacks.net/2020/03/10/here-is-what-is-new-and-changed-in-firefox-74-0-stable). *www.ghacks.net*. [Archived](https://web.archive.org/web/20200311120434/https://www.ghacks.net/2020/03/10/here-is-what-is-new-and-changed-in-firefox-74-0-stable/) from the original on 2020-03-11. Retrieved 2020-03-10.
24. ^     ["TLS 1.0 and TLS 1.1 – Chrome Platform Status"](https://chromestatus.com/feature/5759116003770368). *chromestatus.com*. [Archived](https://web.archive.org/web/20230707094450/https://chromestatus.com/feature/5759116003770368) from the original on 2023-07-07. Retrieved 2020-03-10.
25. ^       T. Dierks; E. Rescorla (August 2008). [*The Transport Layer Security (TLS) Protocol Version 1.2*](https://www.rfc-editor.org/rfc/rfc5246). [IETF](https://en.wikipedia.org/wiki/IETF) TLS workgroup. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5246](https://doi.org/10.17487%2FRFC5246). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5246](https://datatracker.ietf.org/doc/html/rfc5246). *Obsolete.*  Obsoleted by RFC [8446](https://www.rfc-editor.org/rfc/rfc8446). Obsoletes RFC [3268](https://www.rfc-editor.org/rfc/rfc3268), [4346](https://www.rfc-editor.org/rfc/rfc4346) and [4366](https://www.rfc-editor.org/rfc/rfc4366); updates RFC [4492](https://www.rfc-editor.org/rfc/rfc4492).
26. ^   ["Using TLS to protect data"](https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data). *www.ncsc.gov.uk*. [Archived](https://web.archive.org/web/20210721072543/http://ncsc.gov.uk/guidance/using-tls-to-protect-data) from the original on July 21, 2021. Retrieved August 24, 2022.
27. **^** ["TLS 1.3: One Year Later"](https://www.ietf.org/blog/tls13-adoption). *IETF*. [Archived](https://web.archive.org/web/20200708030455/https://www.ietf.org/blog/tls13-adoption) from the original on July 8, 2020. Retrieved August 24, 2022.
28. **^** ["Creating TLS: The Pioneering Role of Ruth Nelson"](https://www.circleid.com/posts/20190124_creating_tls_the_pioneering_role_of_ruth_nelson). [Archived](https://web.archive.org/web/20200624123447/http://www.circleid.com/posts/20190124_creating_tls_the_pioneering_role_of_ruth_nelson/) from the original on 2020-06-24. Retrieved 2020-07-04.
29. **^** ["Information technology – Telecommunication and information exchange between systems – Transport layer security protocol"](https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-X.274-199407-I!!PDF-E&type=items). [Archived](https://web.archive.org/web/20250503170309/https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-X.274-199407-I!!PDF-E&type=items) from the original on 2025-05-03. Retrieved 2025-05-03.
30. **^** Woo, Thomas Y. C.; Bindignavle, Raghuram; Su, Shaowen; [Lam, Simon S.](https://en.wikipedia.org/wiki/Simon_S._Lam) (June 1994). [*SNP: An interface for secure network programming*](http://www.cs.utexas.edu/users/lam/Vita/Cpapers/WBSL94.pdf) (PDF). Proceedings USENIX Summer Technical Conference. [Archived](https://web.archive.org/web/20141212000043/http://www.cs.utexas.edu/users/lam/Vita/Cpapers/WBSL94.pdf) (PDF) from the original on 2014-12-12. Retrieved 2023-07-05.
31. **^** ["1994 USENIX Summer Technical Conference Program, Boston, 6–10 June 1994"](https://www.usenix.org/legacy/publications/library/proceedings/bos94/). [Archived](https://web.archive.org/web/20231006204601/https://www.usenix.org/legacy/publications/library/proceedings/bos94/) from the original on 6 October 2023. Retrieved 21 January 2024.
32. **^** [Simon S. Lam](https://en.wikipedia.org/wiki/Simon_S._Lam) (PI/PD), "Applying a Theory of Modules and Interfaces to Security Verification," NSA INFOSEC University Research Program grant no. MDA 904-91-C-7046, 6/28/91 to 6/27/93.
33. **^** ["2004 ACM Software System Award citation"](https://awards.acm.org/award_winners/lam_1287606.cfm). [ACM](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery). [Archived](https://web.archive.org/web/20130617014921/http://awards.acm.org/award_winners/lam_1287606.cfm) from the original on 17 June 2013. Retrieved 25 July 2012.
34. **^** ["ACM Press Release, March 15, 2005"](https://www.cs.utexas.edu/~lam/Awards/SoftwareSystemAward/ACM%20Press%20Release,%20March%2015,%202005.htm). [ACM](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery). [Archived](https://web.archive.org/web/20160110063723/http://www.cs.utexas.edu/~lam/Awards/SoftwareSystemAward/ACM%20Press%20Release,%20March%2015,%202005.htm) from the original on 10 January 2016. Retrieved 25 July 2012.
35. **^** ["Internet Hall of Fame inductee Simon S. Lam"](https://www.internethalloffame.org/inductee/simon-s-lam). [Archived](https://web.archive.org/web/20240206211215/https://www.internethalloffame.org/inductee/simon-s-lam/) from the original on 6 February 2024. Retrieved 3 Mar 2024.
36. **^** ["Computer Scientist Inducted into Internet Hall of Fame"](https://cns.utexas.edu/news/accolades/computer-scientist-inducted-internet-hall-fame). [Archived](https://web.archive.org/web/20240308192655/https://cns.utexas.edu/news/accolades/computer-scientist-inducted-internet-hall-fame) from the original on 8 March 2024. Retrieved 3 Mar 2024.
37. **^** Messmer, Ellen. ["Father of SSL, Dr. Taher Elgamal, Finds Fast-Moving IT Projects in the Middle East"](https://web.archive.org/web/20140531105537/http://www.networkworld.com/news/2012/120412-elgamal-264739.html). *Network World*. Archived from [the original](http://www.networkworld.com/news/2012/120412-elgamal-264739.html) on 31 May 2014. Retrieved 30 May 2014.
38. **^** Greene, Tim. ["Father of SSL says despite attacks, the security linchpin has lots of life left"](https://web.archive.org/web/20140531105257/http://www.networkworld.com/news/2011/101111-elgamal-251806.html). *Network World*. Archived from [the original](http://www.networkworld.com/news/2011/101111-elgamal-251806.html) on 31 May 2014. Retrieved 30 May 2014.
39. ^   Oppliger, Rolf (2016). ["Introduction"](https://books.google.com/books?id=jm6uDgAAQBAJ&pg=PA15). *SSL and TLS: Theory and Practice* (2nd ed.). [Artech House](https://en.wikipedia.org/wiki/Artech_House). p. 13. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-60807-999-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-60807-999-5). Retrieved 2018-03-01 – via Google Books.
40. **^** ["THE SSL PROTOCOL"](https://web.archive.org/web/19970614020952/http://home.netscape.com/newsref/std/SSL.html). Netscape Corporation. 2007. Archived from [the original](http://home.netscape.com/newsref/std/SSL.html) on 14 June 1997.
41. **^** Rescorla 2001
42. **^** ["POODLE: SSLv3 vulnerability (CVE-2014-3566)"](https://access.redhat.com/articles/1232123). [Archived](https://web.archive.org/web/20141205124712/https://access.redhat.com/articles/1232123) from the original on 5 December 2014. Retrieved 21 October 2014.
43. **^** ["Security Standards and Name Changes in the Browser Wars"](http://tim.dierks.org/2014/05/security-standards-and-name-changes-in.html). [Archived](https://web.archive.org/web/20200229221707/http://tim.dierks.org/2014/05/security-standards-and-name-changes-in.html) from the original on 2020-02-29. Retrieved 2020-02-29.
44. **^** Laura K. Gray (2015-12-18). ["Date Change for Migrating from SSL and Early TLS"](https://blog.pcisecuritystandards.org/migrating-from-ssl-and-early-tls). *[Payment Card Industry Security Standards Council](https://en.wikipedia.org/wiki/Payment_Card_Industry_Security_Standards_Council) blog*. [Archived](https://web.archive.org/web/20151220190802/http://blog.pcisecuritystandards.org/migrating-from-ssl-and-early-tls) from the original on 2015-12-20. Retrieved 2018-04-05.
45. **^** ["Changes to PCI Compliance are Coming June 30. Is Your Ecommerce Business Ready?"](https://www.forbes.com/sites/thesba/2018/05/30/changes-to-pci-compliance-are-coming-june-30-is-your-ecommerce-business-ready). *Forbes*. [Archived](https://web.archive.org/web/20180621020422/https://www.forbes.com/sites/thesba/2018/05/30/changes-to-pci-compliance-are-coming-june-30-is-your-ecommerce-business-ready/) from the original on 2018-06-21. Retrieved 2018-06-20.
46. ^   T. Dierks; E. Rescorla (April 2006). [*The Transport Layer Security (TLS) Protocol Version 1.1*](https://www.rfc-editor.org/rfc/rfc4346). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) TLS workgroup. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4346](https://doi.org/10.17487%2FRFC4346). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4346](https://datatracker.ietf.org/doc/html/rfc4346). *Historic.*  Obsoleted by RFC [5246](https://www.rfc-editor.org/rfc/rfc5246). Obsoletes RFC [2246](https://www.rfc-editor.org/rfc/rfc2246).
47. ^    ["Transport Layer Security Parameters – Cipher Suites"](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4). *Internet Assigned Numbers Authority (IANA)*. [Archived](https://web.archive.org/web/20161221223613/http://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4) from the original on 2016-12-21. Retrieved 2022-12-16.
48. **^** Mackie, Kurt. ["Microsoft Delays End of Support for TLS 1.0 and 1.1 -"](https://mcpmag.com/articles/2020/04/02/microsoft-tls-1-0-and-1-1.aspx). *Microsoft Certified Professional Magazine Online*. [Archived](https://web.archive.org/web/20210614004948/https://mcpmag.com/articles/2020/04/02/microsoft-tls-1-0-and-1-1.aspx) from the original on 2021-06-14. Retrieved 2021-06-14.
49. **^** ["TLS 1.2 FAQ – Knowledge Base"](https://web.archive.org/web/20220220051112/https://answers.psionline.com/knowledgebase/tls-1-2-faq/). *Answers.psionline.com*. Archived from [the original](https://answers.psionline.com/knowledgebase/tls-1-2-faq) on 20 February 2022. Retrieved 20 February 2022.
50. **^** ["Using Netscape 9 in 2022"](https://msfn.org/board/topic/183515-using-netscape-9-in-2022). *MSFN*. 22 April 2022. [Archived](https://web.archive.org/web/20250418030114/https://msfn.org/board/topic/183515-using-netscape-9-in-2022/) from the original on 2025-04-18. Retrieved 2025-04-24.
51. **^** ["Differences between TLS 1.2 and TLS 1.3 (#TLS13)"](https://web.archive.org/web/20190919000200/https://www.wolfssl.com/differences-between-tls-12-and-tls-13-9). *WolfSSL*. 2019-09-18. Archived from [the original](https://www.wolfssl.com/differences-between-tls-12-and-tls-13-9) on 2019-09-19. Retrieved 2019-09-18.
52. **^** ["Archived copy"](https://datatracker.ietf.org/meeting/116/materials/slides-116-tls-null-encryption-and-key-exchange-without-forward-secrecy-are-discouraged-00). [Archived](https://web.archive.org/web/20240317154304/https://datatracker.ietf.org/meeting/116/materials/slides-116-tls-null-encryption-and-key-exchange-without-forward-secrecy-are-discouraged-00) from the original on 2024-03-17. Retrieved 2024-03-17.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web)}}`:  CS1 maint: archived copy as title ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_archived_copy_as_title))
53. **^** ["NSS 3.29 release notes"](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS/NSS_3.29_release_notes). Mozilla Developer Network. February 2017. [Archived](https://web.archive.org/web/20170222052829/https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS/NSS_3.29_release_notes) from the original on 2017-02-22.
54. **^** ["Enable TLS 1.3 by default"](https://bugzilla.mozilla.org/show_bug.cgi?id=1310516). Bugzilla@Mozilla. 16 October 2016. [Archived](https://web.archive.org/web/20180812021410/https://bugzilla.mozilla.org/show_bug.cgi?id=1310516) from the original on 12 August 2018. Retrieved 10 October 2017.
55. **^** ["Firefox — Notes (60.0)"](https://www.mozilla.org/en-US/firefox/60.0/releasenotes). *Mozilla*. [Archived](https://web.archive.org/web/20180509230339/https://www.mozilla.org/en-US/firefox/60.0/releasenotes/) from the original on 2018-05-09. Retrieved 2018-05-10.
56. **^** ["ProxySG, ASG and WSS will interrupt SSL connections when clients using TLS 1.3 access sites also using TLS 1.3"](https://bluecoat.force.com/knowledgebase/articles/Technical_Alert/000032878). *BlueTouch Online*. 16 May 2017. [Archived](https://web.archive.org/web/20170912061432/http://bluecoat.force.com/knowledgebase/articles/Technical_Alert/000032878) from the original on 12 September 2017. Retrieved 11 September 2017.
57. **^** Sullivan, Nick (2017-12-26). ["Why TLS 1.3 isn't in browsers yet"](https://blog.cloudflare.com/why-tls-1-3-isnt-in-browsers-yet/). *The Cloudflare Blog*. [Archived](https://web.archive.org/web/20171226210134/https://blog.cloudflare.com/why-tls-1-3-isnt-in-browsers-yet/) from the original on 2017-12-26. Retrieved 2020-03-14.
58. ^   Thomson, Martin; Pauly, Tommy (December 2021). [*Long-Term Viability of Protocol Extension Mechanisms*](https://www.rfc-editor.org/rfc/rfc9170). [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9170](https://doi.org/10.17487%2FRFC9170). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [9170](https://datatracker.ietf.org/doc/html/rfc9170).
59. **^** ["TLS 1.3 IETF 100 Hackathon"](https://web.archive.org/web/20180115220635/https://datatracker.ietf.org/meeting/100/materials/slides-100-hackathon-sessa-tls-13). Archived from [the original](https://datatracker.ietf.org/meeting/100/materials/slides-100-hackathon-sessa-tls-13) on 2018-01-15.
60. ^   IETF – Internet Engineering Task Force (2017-11-12), [*IETF Hackathon Presentations and Awards*](https://ghostarchive.org/varchive/youtube/20211028/33XW5yzjtME), archived from [the original](https://www.youtube.com/watch?v=33XW5yzjtME&t=2338) on 2021-10-28, retrieved 2017-11-14
61. **^** ["Hurrah! TLS 1.3 is here. Now to implement it and put it into software"](https://www.theregister.co.uk/2018/03/27/with_tls_13_signed_off_its_implementation_time). [Archived](https://web.archive.org/web/20180327213242/https://www.theregister.co.uk/2018/03/27/with_tls_13_signed_off_its_implementation_time/) from the original on 2018-03-27. Retrieved 2018-03-28.
62. **^** IETF – Internet Engineering Task Force (2018-07-15), [*IETF102-HACKATHON-20180715-1400*](https://ghostarchive.org/varchive/youtube/20211028/u6rz4PWA_As), archived from [the original](https://www.youtube.com/watch?v=u6rz4PWA_As&t=4526) on 2021-10-28, retrieved 2018-07-18
63. **^** ["wolfSSL TLS 1.3 BETA Release Now Available"](https://www.wolfssl.com/wolfssl-tls-1-3-beta-release-now-available). info@wolfssl.com. 11 May 2017. [Archived](https://web.archive.org/web/20180709065543/https://www.wolfssl.com/wolfssl-tls-1-3-beta-release-now-available/) from the original on 9 July 2018. Retrieved 11 May 2017.
64. **^** ["TLS 1.3 PROTOCOL SUPPORT"](https://www.wolfssl.com/docs/tls13). info@wolfssl.com. 4 August 2017. [Archived](https://web.archive.org/web/20180709065545/https://www.wolfssl.com/docs/tls13/) from the original on 2018-07-09. Retrieved 2018-07-09.
65. **^** ["TLS 1.3 Draft 28 Support in wolfSSL"](https://www.wolfssl.com/tls-1-3-draft-28-support-wolfssl). info@wolfssl.com. 14 June 2018. [Archived](https://web.archive.org/web/20180709065545/https://www.wolfssl.com/tls-1-3-draft-28-support-wolfssl/) from the original on 9 July 2018. Retrieved 14 June 2018.
66. **^** ["OpenSSL 1.1.1 Is Released"](https://openssl-library.org/post/2018-09-11-release111/). Matt Caswell. 11 Sep 2018. [Archived](https://web.archive.org/web/20181208141108/https://www.openssl.org/blog/blog/2018/09/11/release111/) from the original on 8 December 2018. Retrieved 2024-10-11.
67. **^** ["Protocols in TLS/SSL (Schannel SSP)"](https://learn.microsoft.com/en-us/windows/win32/secauthn/protocols-in-tls-ssl--schannel-ssp-). *Microsoft Docs*. May 25, 2022. [Archived](https://web.archive.org/web/20230125160351/https://learn.microsoft.com/en-us/windows/win32/secauthn/protocols-in-tls-ssl--schannel-ssp-) from the original on 25 January 2023. Retrieved 21 February 2023.
68. ^   Hoffman-Andrews, Jacob (2019-02-26). ["ETS Isn't TLS and You Shouldn't Use It"](https://www.eff.org/deeplinks/2019/02/ets-isnt-tls-and-you-shouldnt-use-it). *[Electronic Frontier Foundation](https://en.wikipedia.org/wiki/Electronic_Frontier_Foundation)*. [Archived](https://web.archive.org/web/20190226214559/https://www.eff.org/deeplinks/2019/02/ets-isnt-tls-and-you-shouldnt-use-it) from the original on 2019-02-26. Retrieved 2019-02-27.
69. **^** [*TS 103 523-3 – V1.1.1 – CYBER; Middlebox Security Protocol; Part 3: Profile for enterprise network and data centre access control*](https://www.etsi.org/deliver/etsi_ts/103500_103599/10352303/01.01.01_60/ts_10352303v010101p.pdf#page=5) ([PDF](https://en.wikipedia.org/wiki/PDF)). [ETSI](https://en.wikipedia.org/wiki/ETSI).org. [Archived](https://web.archive.org/web/20181114104718/https://www.etsi.org/deliver/etsi_ts/103500_103599/10352303/01.01.01_60/ts_10352303v010101p.pdf) (PDF) from the original on November 14, 2018.
70. **^** [Cory Doctorow](https://en.wikipedia.org/wiki/Cory_Doctorow) (February 26, 2019). ["Monumental Recklessness"](https://boingboing.net/2019/02/26/monumental-recklessness.html). *[Boing Boing](https://en.wikipedia.org/wiki/Boing_Boing)*. [Archived](https://web.archive.org/web/20190227071044/http://boingboing.net/2019/02/26/monumental-recklessness.html) from the original on February 27, 2019.
71. **^** Rea, Scott (2013). ["Alternatives to Certification Authorities for a Secure Web"](https://www.rsaconference.com/writable/presentations/file_upload/sec-t02_final.pdf) (PDF). RSA Conference Asia Pacific. [Archived](https://web.archive.org/web/20161007222635/https://www.rsaconference.com/writable/presentations/file_upload/sec-t02_final.pdf) (PDF) from the original on 7 October 2016. Retrieved 7 September 2016.
72. **^** ["Counting SSL certificates"](https://web.archive.org/web/20150516035536/http://news.netcraft.com/archives/2015/05/13/counting-ssl-certificates.html). Archived from [the original](https://news.netcraft.com/archives/2015/05/13/counting-ssl-certificates.html) on 16 May 2015. Retrieved 20 February 2022.
73. **^** Raymond, Art (3 August 2017). ["Lehi's DigiCert swallows web security competitor in $1 billion deal"](https://web.archive.org/web/20180929171244/https://www.deseretnews.com/article/865686081/Lehis-DigiCert-swallows-web-security-competitor-in-1-billion-deal.html). *Deseret News*. Archived from [the original](https://www.deseretnews.com/article/865686081/Lehis-DigiCert-swallows-web-security-competitor-in-1-billion-deal.html) on 29 September 2018. Retrieved 21 May 2020.
74. **^** ["Market share trends for SSL certificate authorities"](https://w3techs.com/technologies/history_overview/ssl_certificate). *W3Techs*. Retrieved 21 May 2020.
75. **^** [Ryan Singel](https://en.wikipedia.org/wiki/Ryan_Singel) (March 24, 2010). ["Law Enforcement Appliance Subverts SSL"](https://www.wired.com/threatlevel/2010/03/packet-forensics). *[wired](https://en.wikipedia.org/wiki/Wired_(magazine)).com*. [Archived](https://web.archive.org/web/20140412151324/http://www.wired.com/threatlevel/2010/03/packet-forensics) from the original on April 12, 2014.
76. **^** [Seth Schoen](https://en.wikipedia.org/wiki/Seth_Schoen) (March 24, 2010). ["New Research Suggests That Governments May Fake SSL Certificates"](https://www.eff.org/deeplinks/2010/03/researchers-reveal-likelihood-governments-fake-ssl). *[EFF](https://en.wikipedia.org/wiki/Electronic_Frontier_Foundation).org*. [Archived](https://web.archive.org/web/20100325223422/http://www.eff.org/deeplinks/2010/03/researchers-reveal-likelihood-governments-fake-ssl) from the original on March 25, 2010.
77. **^** Schuman, Evan (11 April 2025). ["Vendors vote to radically slash website certificate duration"](https://www.computerworld.com/article/3960658/vendors-vote-to-radically-slash-website-certificate-duration.html). *Computerworld*. Retrieved 28 July 2025.
78. **^** Lyons, Jessica (15 October 2024). ["Sysadmins rage over Apple's 'nightmarish' SSL/TLS cert lifespan cuts plot"](https://www.theregister.com/2024/10/15/apples_security_cert_lifespan/). *The Register*. Retrieved 28 July 2025.
79. **^** P. Eronen, Ed. (December 2005). Eronen, P; Tschofenig, H (eds.). [*Pre-Shared Key Ciphersuites for Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc4279). Internet Engineering Task Force. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4279](https://doi.org/10.17487%2FRFC4279). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4279](https://datatracker.ietf.org/doc/html/rfc4279). Retrieved 9 September 2013.
80. **^** D. Taylor, Ed. (November 2007). [*Using the Secure Remote Password (SRP) Protocol for TLS Authentication*](https://www.rfc-editor.org/rfc/rfc5054). Internet Engineering Task Force. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5054](https://doi.org/10.17487%2FRFC5054). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5054](https://datatracker.ietf.org/doc/html/rfc5054). Retrieved December 21, 2014.
81. **^** Gothard, Peter (31 July 2013). ["Google updates SSL certificates to 2048-bit encryption"](http://www.computing.co.uk/ctg/news/2285984/google-updates-ssl-certificates-to-2048bit-encryption). *Computing*. Incisive Media. [Archived](https://web.archive.org/web/20130922082322/http://www.computing.co.uk/ctg/news/2285984/google-updates-ssl-certificates-to-2048bit-encryption) from the original on 22 September 2013. Retrieved 9 September 2013.
82. **^** ["The value of 2,048-bit encryption: Why encryption key length matters"](http://searchsecurity.techtarget.com/answer/From-1024-to-2048-bit-The-security-effect-of-encryption-key-length). *SearchSecurity*. [Archived](https://web.archive.org/web/20180116081141/http://searchsecurity.techtarget.com/answer/From-1024-to-2048-bit-The-security-effect-of-encryption-key-length) from the original on 2018-01-16. Retrieved 2017-12-18.
83. **^** Sean Turner (September 17, 2015). ["Consensus: remove DSA from TLS 1.3"](https://www.ietf.org/mail-archive/web/tls/current/msg17680.html). [Archived](https://web.archive.org/web/20151003193113/http://www.ietf.org/mail-archive/web/tls/current/msg17680.html) from the original on October 3, 2015.
84. ^   Y. Nir; S. Josefsson; M. Pegourie-Gonnard (August 2018). [*Elliptic Curve Cryptography (ECC) Cipher Suites for Transport Layer Security (TLS) Versions 1.2 and Earlier*](https://www.rfc-editor.org/rfc/rfc8422). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC8422](https://doi.org/10.17487%2FRFC8422). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [8422](https://datatracker.ietf.org/doc/html/rfc8422). *Proposed Standard.*  Obsoletes RFC [4492](https://www.rfc-editor.org/rfc/rfc4492). Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996).
85. ^        [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [5830](https://www.rfc-editor.org/rfc/rfc5830), [6986](https://www.rfc-editor.org/rfc/rfc6986), [7091](https://www.rfc-editor.org/rfc/rfc7091), [7801](https://www.rfc-editor.org/rfc/rfc7801), [8891](https://www.rfc-editor.org/rfc/rfc8891)
86. ^   D. Belyavskiy; KE. Alekseev (March 2022). S. Smyshlyaev (ed.). [*GOST Cipher Suites for Transport Layer Security (TLS) Protocol Version 1.2*](https://www.rfc-editor.org/rfc/rfc9189). Independent Submission. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9189](https://doi.org/10.17487%2FRFC9189). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [9189](https://datatracker.ietf.org/doc/html/rfc9189). *Informational.*
87. ^   E. Alekseev; E. Griboedova; A. Babueva; L. Nikiforova (February 2023). S. Smyshlyaev (ed.). [*GOST Cipher Suites for Transport Layer Security (TLS) Protocol Version 1.3*](https://www.rfc-editor.org/rfc/rfc9367). Independent Submission. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9367](https://doi.org/10.17487%2FRFC9367). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [9367](https://datatracker.ietf.org/doc/html/rfc9367). *Informational.*
88. ^   J. Salowey; A. Choudhury; D. McGrew (August 2008). [*AES Galois Counter Mode (GCM) Cipher Suites for TLS*](https://www.rfc-editor.org/rfc/rfc5288). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5288](https://doi.org/10.17487%2FRFC5288). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5288](https://datatracker.ietf.org/doc/html/rfc5288). *Proposed Standard.*  Updated by RFC [9325](https://www.rfc-editor.org/rfc/rfc9325).
89. ^   E. Rescorla (August 2008). [*TLS Elliptic Curve Cipher Suites with SHA-256/384 and AES Galois Counter Mode (GCM)*](https://www.rfc-editor.org/rfc/rfc5289). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5289](https://doi.org/10.17487%2FRFC5289). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5289](https://datatracker.ietf.org/doc/html/rfc5289). *Proposed Standard.*
90. ^   D. McGrew; D. Bailey (July 2012). [*AES-CCM Cipher Suites for Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc6655). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC6655](https://doi.org/10.17487%2FRFC6655). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [6655](https://datatracker.ietf.org/doc/html/rfc6655). *Proposed Standard.*
91. ^   D. McGrew; D. Bailey; M. Campagna; R. Dugal (June 2014). [*AES-CCM Elliptic Curve Cryptography (ECC) Cipher Suites for TLS*](https://www.rfc-editor.org/rfc/rfc7251). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7251](https://doi.org/10.17487%2FRFC7251). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7251](https://datatracker.ietf.org/doc/html/rfc7251). *Informational.*
92. ^    S. Kanno; M. Kanda (September 2011). [*Addition of the Camellia Cipher Suites to Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc6367). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC6367](https://doi.org/10.17487%2FRFC6367). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [6367](https://datatracker.ietf.org/doc/html/rfc6367). *Informational.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996).
93. ^   A. Kato; M. Kanda; S. Kanno (June 2010). [*Camellia Cipher Suites for TLS*](https://www.rfc-editor.org/rfc/rfc5932). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5932](https://doi.org/10.17487%2FRFC5932). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5932](https://datatracker.ietf.org/doc/html/rfc5932). *Proposed Standard.*  Obsoletes RFC [4132](https://www.rfc-editor.org/rfc/rfc4132).
94. ^    W. Kim; J. Lee; J. Park; D. Kwon (May 2011). [*Addition of the ARIA Cipher Suites to Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc6209). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC6209](https://doi.org/10.17487%2FRFC6209). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [6209](https://datatracker.ietf.org/doc/html/rfc6209). *Informational.*
95. ^   H.J. Lee; J.H. Yoon; J.I. Lee (August 2005). [*Addition of SEED Cipher Suites to Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc4162). [IETF](https://en.wikipedia.org/wiki/IETF) Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4162](https://doi.org/10.17487%2FRFC4162). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4162](https://datatracker.ietf.org/doc/html/rfc4162). *Proposed Standard.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996).
96. **^** ["On the Practical (In-)Security of 64-bit Block Ciphers — Collision Attacks on HTTP over TLS and OpenVPN"](https://sweet32.info/SWEET32_CCS16.pdf) (PDF). 2016-10-28. [Archived](https://web.archive.org/web/20170424021101/https://sweet32.info/SWEET32_CCS16.pdf) (PDF) from the original on 2017-04-24. Retrieved 2017-06-08.
97. **^** ["NIST Special Publication 800-57 *Recommendation for Key Management — Part 1: General (Revised)*"](https://web.archive.org/web/20140606050814/http://csrc.nist.gov/publications/nistpubs/800-57/sp800-57-Part1-revised2_Mar08-2007.pdf) (PDF). 2007-03-08. Archived from [the original](http://csrc.nist.gov/publications/nistpubs/800-57/sp800-57-Part1-revised2_Mar08-2007.pdf) (PDF) on June 6, 2014. Retrieved 2014-07-03.
98. ^    Qualys SSL Labs. ["SSL/TLS Deployment Best Practices"](https://www.ssllabs.com/projects/best-practices/index.html). [Archived](https://web.archive.org/web/20150704101956/https://www.ssllabs.com/projects/best-practices/index.html) from the original on 4 July 2015. Retrieved 2 June 2015.
99. **^** P. Eronen, ed. (February 2009). [*DES and IDEA Cipher Suites for Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc5469). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5469](https://doi.org/10.17487%2FRFC5469). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5469](https://datatracker.ietf.org/doc/html/rfc5469). *Historic.*  Obsoleted by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996).
100. **^** A. Langley; W. Chang; N. Mavrogiannopoulos; J. Strombergson; S. Josefsson (June 2016). [*ChaCha20-Poly1305 Cipher Suites for Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc7905). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7905](https://doi.org/10.17487%2FRFC7905). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7905](https://datatracker.ietf.org/doc/html/rfc7905). *Proposed Standard.*  Updates RFC [6347](https://www.rfc-editor.org/rfc/rfc6347) and [5246](https://www.rfc-editor.org/rfc/rfc5246).
101. ^    A. Popov (February 2015). [*Prohibiting RC4 Cipher Suites*](https://www.rfc-editor.org/rfc/rfc7465). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7465](https://doi.org/10.17487%2FRFC7465). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7465](https://datatracker.ietf.org/doc/html/rfc7465). *Proposed Standard.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996). Updates RFC [2246](https://www.rfc-editor.org/rfc/rfc2246), [4346](https://www.rfc-editor.org/rfc/rfc4346) and [5246](https://www.rfc-editor.org/rfc/rfc5246).
102. **^** ["Http vs https"](https://www.instantssl.com/ssl-certificate-products/https.html). [Archived](https://web.archive.org/web/20150212105201/https://www.instantssl.com/ssl-certificate-products/https.html) from the original on 2015-02-12. Retrieved 2015-02-12.
103. ^     As of Jun 1, 2025. ["SSL Pulse: Survey of the SSL Implementation of the Most Popular Websites"](https://www.ssllabs.com/ssl-pulse/). *[Qualys](https://en.wikipedia.org/wiki/Qualys)*. [Archived](https://web.archive.org/web/20210308160353/https://www.ssllabs.com/ssl-pulse/) from the original on 2021-03-08. Retrieved 2025-09-08.
104. ^   ivanr (19 March 2013). ["RC4 in TLS is Broken: Now What?"](https://community.qualys.com/blogs/securitylabs/2013/03/19/rc4-in-tls-is-broken-now-what). Qualsys Security Labs. [Archived](https://web.archive.org/web/20130827044512/https://community.qualys.com/blogs/securitylabs/2013/03/19/rc4-in-tls-is-broken-now-what) from the original on 2013-08-27. Retrieved 2013-07-30.
105. ^    Bodo Möller, Thai Duong & Krzysztof Kotowicz. ["This POODLE Bites: Exploiting The SSL 3.0 Fallback"](https://www.openssl.org/~bodo/ssl-poodle.pdf) (PDF). [Archived](https://web.archive.org/web/20141014224443/https://www.openssl.org/~bodo/ssl-poodle.pdf) (PDF) from the original on 2014-10-14. Retrieved 2014-10-15.
106. **^** ["Java Secure Socket Extension (JSSE) Reference Guide"](https://docs.oracle.com/en/java/javase/17/security/java-secure-socket-extension-jsse-reference-guide.html). *Oracle Help Center*. [Archived](https://web.archive.org/web/20220122070356/https://docs.oracle.com/en/java/javase/17/security/java-secure-socket-extension-jsse-reference-guide.html) from the original on 2022-01-22. Retrieved 2021-12-24.
107. **^** Georgiev, Martin; Iyengar, Subodh; Jana, Suman; Anubhai, Rishita; Boneh, Dan; Shmatikov, Vitaly (2012). [*The most dangerous code in the world: validating SSL certificates in non-browser software. Proceedings of the 2012 ACM conference on Computer and communications security*](http://www.cs.utexas.edu/~shmat/shmat_ccs12.pdf) (PDF). Association for Computing Machinery. pp. 38–49. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-1651-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-1651-4). [Archived](https://web.archive.org/web/20171022194807/http://www.cs.utexas.edu/~shmat/shmat_ccs12.pdf) (PDF) from the original on 2017-10-22.
108. **^** Audet, F. (2009). [*The Use of the SIPS URI Scheme in the Session Initiation Protocol (SIP)*](https://www.rfc-editor.org/rfc/rfc5630). [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5630](https://doi.org/10.17487%2FRFC5630). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5630](https://datatracker.ietf.org/doc/html/rfc5630).
109. **^** Sheffer, Y.; Holz, R.; Saint-Andre, P. (2015). [*Summarizing Known Attacks on Transport Layer Security (TLS) and Datagram TLS (DTLS)*](https://www.rfc-editor.org/rfc/rfc7457). [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7457](https://doi.org/10.17487%2FRFC7457). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7457](https://datatracker.ietf.org/doc/html/rfc7457).
110. **^** ["CVE – CVE-2009-3555"](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555). [Archived](https://web.archive.org/web/20160104234608/http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555) from the original on 2016-01-04.
111. ^   E. Rescorla; M. Ray; S. Dispensa; N. Oskov (February 2010). [*Transport Layer Security (TLS) Renegotiation Indication Extension*](https://www.rfc-editor.org/rfc/rfc5746). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5746](https://doi.org/10.17487%2FRFC5746). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5746](https://datatracker.ietf.org/doc/html/rfc5746). *Proposed Standard.*  Updates RFC [4346](https://www.rfc-editor.org/rfc/rfc4346), [4366](https://www.rfc-editor.org/rfc/rfc4366), [2246](https://www.rfc-editor.org/rfc/rfc2246), [5246](https://www.rfc-editor.org/rfc/rfc5246), [4347](https://www.rfc-editor.org/rfc/rfc4347).
112. **^** Rescorla, Eric (2009-11-05). ["Understanding the TLS Renegotiation Attack"](http://www.educatedguesswork.org/2009/11/understanding_the_tls_renegoti.html). *Educated Guesswork*. [Archived](https://web.archive.org/web/20120211120608/http://www.educatedguesswork.org/2009/11/understanding_the_tls_renegoti.html) from the original on 2012-02-11. Retrieved 2009-11-27.
113. **^** ["SSL_CTX_set_options SECURE_RENEGOTIATION"](https://www.openssl.org/docs/ssl/SSL_CTX_set_options.html#SECURE_RENEGOTIATION). *OpenSSL Docs*. 2010-02-25. [Archived](https://web.archive.org/web/20101126121933/http://openssl.org/docs/ssl/SSL_CTX_set_options.html#SECURE_RENEGOTIATION) from the original on 2010-11-26. Retrieved 2010-11-18.
114. **^** ["GnuTLS 2.10.0 released"](http://article.gmane.org/gmane.network.gnutls.general/2046). *GnuTLS release notes*. 2010-06-25. [Archived](https://web.archive.org/web/20151017033726/http://article.gmane.org/gmane.network.gnutls.general/2046) from the original on 2015-10-17. Retrieved 2011-07-24.
115. **^** ["NSS 3.12.6 release notes"](https://web.archive.org/web/20120306184633/https://developer.mozilla.org/NSS_3.12.6_release_notes). *NSS release notes*. 2010-03-03. Archived from [the original](https://developer.mozilla.org/NSS_3.12.6_release_notes) on March 6, 2012. Retrieved 2011-07-24.
116. **^** A. Langley; N. Modadugu; B. Moeller (2010-06-02). ["Transport Layer Security (TLS) False Start"](http://tools.ietf.org/html/draft-bmoeller-tls-falsestart-00). *Internet Engineering Task Force*. IETF. [Archived](https://web.archive.org/web/20130905215608/http://tools.ietf.org/html/draft-bmoeller-tls-falsestart-00) from the original on 2013-09-05. Retrieved 2013-07-31.
117. **^** Gruener, Wolfgang. ["False Start: Google Proposes Faster Web, Chrome Supports It Already"](https://web.archive.org/web/20101007061707/http://www.conceivablytech.com/3299/products/false-start-google-proposes-faster-web-chrome-supports-it-already). Archived from [the original](http://www.conceivablytech.com/3299/products/false-start-google-proposes-faster-web-chrome-supports-it-already) on 2010-10-07. Retrieved 2011-03-09.
118. **^** Smith, Brian. ["Limited rollback attacks in False Start and Snap Start"](http://www.ietf.org/mail-archive/web/tls/current/msg06933.html). [Archived](https://web.archive.org/web/20110504014418/http://www.ietf.org/mail-archive/web/tls/current/msg06933.html) from the original on 2011-05-04. Retrieved 2011-03-09.
119. **^** Dimcev, Adrian. ["False Start"](http://www.carbonwind.net/blog/post/Random-SSLTLS-101-False-Start.aspx). *Random SSL/TLS 101*. [Archived](https://web.archive.org/web/20110504060256/http://www.carbonwind.net/blog/post/Random-SSLTLS-101-False-Start.aspx) from the original on 2011-05-04. Retrieved 2011-03-09.
120. **^** Mavrogiannopoulos, Nikos; Vercautern, Frederik; Velichkov, Vesselin; Preneel, Bart (2012). [*A cross-protocol attack on the TLS protocol. Proceedings of the 2012 ACM conference on Computer and communications security*](https://www.cosic.esat.kuleuven.be/publications/article-2216.pdf) (PDF). Association for Computing Machinery. pp. 62–72. [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-1651-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-1651-4). [Archived](https://web.archive.org/web/20150706104327/https://www.cosic.esat.kuleuven.be/publications/article-2216.pdf) (PDF) from the original on 2015-07-06.
121. **^** ["SMACK: State Machine AttaCKs"](https://www.smacktls.com). [Archived](https://web.archive.org/web/20150312074827/https://www.smacktls.com) from the original on 2015-03-12.
122. **^** Goodin, Dan (2015-05-20). ["HTTPS-crippling attack threatens tens of thousands of Web and mail servers"](https://arstechnica.com/security/2015/05/https-crippling-attack-threatens-tens-of-thousands-of-web-and-mail-servers). *Ars Technica*. [Archived](https://web.archive.org/web/20170519130937/https://arstechnica.com/security/2015/05/https-crippling-attack-threatens-tens-of-thousands-of-web-and-mail-servers) from the original on 2017-05-19.
123. **^** Leyden, John (1 March 2016). ["One-third of all HTTPS websites open to DROWN attack"](https://www.theregister.com/2016/03/01/drown_tls_protocol_flaw). *The Register*. [Archived](https://web.archive.org/web/20160301215536/http://www.theregister.co.uk/2016/03/01/drown_tls_protocol_flaw) from the original on 1 March 2016. Retrieved 2016-03-02.
124. ^   ["More than 11 million HTTPS websites imperiled by new decryption attack"](https://arstechnica.com/information-technology/2016/03/more-than-13-million-https-websites-imperiled-by-new-decryption-attack). *Ars Technica*. March 2016. [Archived](https://web.archive.org/web/20160301191108/http://arstechnica.com/security/2016/03/more-than-13-million-https-websites-imperiled-by-new-decryption-attack) from the original on 2016-03-01. Retrieved 2016-03-02.
125. **^** Thai Duong & Juliano Rizzo (2011-05-13). ["Here Come The ⊕ Ninjas"](https://bug665814.bugzilla.mozilla.org/attachment.cgi?id=540839). [Archived](https://web.archive.org/web/20140603102506/https://bug665814.bugzilla.mozilla.org/attachment.cgi?id=540839) from the original on 2014-06-03.
126. **^** Goodin, Dan (2011-09-19). ["Hackers break SSL encryption used by millions of sites"](https://www.theregister.co.uk/2011/09/19/beast_exploits_paypal_ssl). *[The Register](https://en.wikipedia.org/wiki/The_Register)*. [Archived](https://web.archive.org/web/20120210185309/http://www.theregister.co.uk/2011/09/19/beast_exploits_paypal_ssl) from the original on 2012-02-10.
127. **^** ["Y Combinator comments on the issue"](http://news.ycombinator.com/item?id=3015498). 2011-09-20. [Archived](https://web.archive.org/web/20120331225714/http://news.ycombinator.com/item?id=3015498) from the original on 2012-03-31.
128. **^** ["Security of CBC Ciphersuites in SSL/TLS: Problems and Countermeasures"](https://web.archive.org/web/20120630143111/http://www.openssl.org/~bodo/tls-cbc.txt). 2004-05-20. Archived from [the original](https://www.openssl.org/~bodo/tls-cbc.txt) on 2012-06-30.
129. **^** Ristic, Ivan (Sep 10, 2013). ["Is BEAST Still a Threat?"](https://community.qualys.com/blogs/securitylabs/2013/09/10/is-beast-still-a-threat). [Archived](https://web.archive.org/web/20141012121824/https://community.qualys.com/blogs/securitylabs/2013/09/10/is-beast-still-a-threat) from the original on 12 October 2014. Retrieved 8 October 2014.
130. **^** ["Chrome Stable Release"](http://googlechromereleases.blogspot.jp/2011/10/chrome-stable-release.html). *Chrome Releases*. 2011-10-25. [Archived](https://web.archive.org/web/20150220020306/http://googlechromereleases.blogspot.jp/2011/10/chrome-stable-release.html) from the original on 2015-02-20. Retrieved 2015-02-01.
131. **^** ["Attack against TLS-protected communications"](https://blog.mozilla.org/security/2011/09/27/attack-against-tls-protected-communications). *Mozilla Security Blog*. Mozilla. 2011-09-27. [Archived](https://web.archive.org/web/20150304221307/https://blog.mozilla.org/security/2011/09/27/attack-against-tls-protected-communications) from the original on 2015-03-04. Retrieved 2015-02-01.
132. **^** Smith, Brian (2011-09-30). ["(CVE-2011-3389) Rizzo/Duong chosen plaintext attack (BEAST) on SSL/TLS 1.0 (facilitated by websockets-76)"](https://bugzilla.mozilla.org/show_bug.cgi?id=665814). [Archived](https://web.archive.org/web/20120210202750/https://bugzilla.mozilla.org/show_bug.cgi?id=665814) from the original on 2012-02-10. Retrieved 2011-11-01.
133. **^** [MSRC](https://en.wikipedia.org/wiki/Microsoft_Security_Response_Center) (2012-01-10). [*Vulnerability in SSL/TLS Could Allow Information Disclosure (2643584)*](https://docs.microsoft.com/en-us/security-updates/SecurityBulletins/2012/ms12-006). *Security Bulletins* (Technical report). MS12-006. Retrieved 2021-10-24 – via [Microsoft Docs](https://en.wikipedia.org/wiki/Microsoft_Docs).
134. **^** Ristic, Ivan (Oct 31, 2013). ["Apple Enabled BEAST Mitigations in OS X 10.9 Mavericks"](https://community.qualys.com/blogs/securitylabs/2013/10/31/apple-enabled-beast-mitigations-in-os-x-109-mavericks). [Archived](https://web.archive.org/web/20141012122536/https://community.qualys.com/blogs/securitylabs/2013/10/31/apple-enabled-beast-mitigations-in-os-x-109-mavericks) from the original on 12 October 2014. Retrieved 8 October 2014.
135. **^** Goodin, Dan (2012-09-13). ["Crack in Internet's foundation of trust allows HTTPS session hijacking"](https://arstechnica.com/security/2012/09/crime-hijacks-https-sessions). *Ars Technica*. [Archived](https://web.archive.org/web/20130801104610/http://arstechnica.com/security/2012/09/crime-hijacks-https-sessions) from the original on 2013-08-01. Retrieved 2013-07-31.
136. **^** Fisher, Dennis (September 13, 2012). ["CRIME Attack Uses Compression Ratio of TLS Requests as Side Channel to Hijack Secure Sessions"](https://web.archive.org/web/20120915224635/http://threatpost.com/en_us/blogs/crime-attack-uses-compression-ratio-tls-requests-side-channel-hijack-secure-sessions-091312). ThreatPost. Archived from [the original](http://threatpost.com/en_us/blogs/crime-attack-uses-compression-ratio-tls-requests-side-channel-hijack-secure-sessions-091312) on September 15, 2012. Retrieved 2012-09-13.
137. ^   Goodin, Dan (1 August 2013). ["Gone in 30 seconds: New attack plucks secrets from HTTPS-protected pages"](https://arstechnica.com/security/2013/08/gone-in-30-seconds-new-attack-plucks-secrets-from-https-protected-pages). *Ars Technica*. Condé Nast. [Archived](https://web.archive.org/web/20130803181144/http://arstechnica.com/security/2013/08/gone-in-30-seconds-new-attack-plucks-secrets-from-https-protected-pages) from the original on 3 August 2013. Retrieved 2 August 2013.
138. **^** Leyden, John (2 August 2013). ["Step into the BREACH: New attack developed to read encrypted web data"](https://www.theregister.co.uk/2013/08/02/breach_crypto_attack). *The Register*. [Archived](https://web.archive.org/web/20130805233414/http://www.theregister.co.uk/2013/08/02/breach_crypto_attack) from the original on 5 August 2013. Retrieved 2 August 2013.
139. ^   [P. Gutmann](https://en.wikipedia.org/wiki/Peter_Gutmann_(computer_scientist)) (September 2014). [*Encrypt-then-MAC for Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)*](https://www.rfc-editor.org/rfc/rfc7366). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7366](https://doi.org/10.17487%2FRFC7366). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7366](https://datatracker.ietf.org/doc/html/rfc7366). *Proposed Standard.*
140. **^** Langley, Adam (December 8, 2014). ["The POODLE bites again"](https://www.imperialviolet.org/2014/12/08/poodleagain.html). [Archived](https://web.archive.org/web/20141208200653/https://www.imperialviolet.org/2014/12/08/poodleagain.html) from the original on December 8, 2014. Retrieved 2014-12-08.
141. **^** ["ssl – Safest ciphers to use with the BEAST? (TLS 1.0 exploit) I've read that RC4 is immune"](https://serverfault.com/questions/315042/safest-ciphers-to-use-with-the-beast-tls-1-0-exploit-ive-read-that-rc4-is-im). *Serverfault.com*. [Archived](https://web.archive.org/web/20220220210446/https://serverfault.com/questions/315042/safest-ciphers-to-use-with-the-beast-tls-1-0-exploit-ive-read-that-rc4-is-im) from the original on 20 February 2022. Retrieved 20 February 2022.
142. **^** Pouyan Sepehrdad; Serge Vaudenay; Martin Vuagnoux (2011). "Discovery and Exploitation of New Biases in RC4". In Alex Biryukov; [Guang Gong](https://en.wikipedia.org/wiki/Guang_Gong); Douglas R. Stinson (eds.). [*Selected Areas in Cryptography: 17th International Workshop, SAC 2010, Waterloo, Ontario, Canada, August 12–13, 2010, Revised Selected Papers*](http://infoscience.epfl.ch/record/152526). Lecture Notes in Computer Science. Vol. 6544. pp. 74–91. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-642-19574-7_5](https://doi.org/10.1007%2F978-3-642-19574-7_5). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-642-19573-0](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-19573-0).
143. **^** Green, Matthew (12 March 2013). ["Attack of the week: RC4 is kind of broken in TLS"](http://blog.cryptographyengineering.com/2013/03/attack-of-week-rc4-is-kind-of-broken-in.html). *Cryptography Engineering*. [Archived](https://web.archive.org/web/20130314214026/http://blog.cryptographyengineering.com/2013/03/attack-of-week-rc4-is-kind-of-broken-in.html) from the original on March 14, 2013. Retrieved March 12, 2013.
144. **^** AlFardan, Nadhem; Bernstein, Dan; Paterson, Kenny; Poettering, Bertram; Schuldt, Jacob. ["On the Security of RC4 in TLS"](http://www.isg.rhul.ac.uk/tls). Royal Holloway University of London. [Archived](https://web.archive.org/web/20130315084623/http://www.isg.rhul.ac.uk/tls) from the original on March 15, 2013. Retrieved March 13, 2013.
145. **^** AlFardan, Nadhem J.; Bernstein, Daniel J.; Paterson, Kenneth G.; Poettering, Bertram; Schuldt, Jacob C. N. (8 July 2013). ["On the Security of RC4 in TLS and WPA"](http://www.isg.rhul.ac.uk/tls/RC4biases.pdf) (PDF). *Information Security Group*. [Archived](https://web.archive.org/web/20130922170155/http://www.isg.rhul.ac.uk/tls/RC4biases.pdf) (PDF) from the original on 22 September 2013. Retrieved 2 September 2013.
146. **^** AlFardan, Nadhem J.; Bernstein, Daniel J.; Paterson, Kenneth G.; Poettering, Bertram; Schuldt, Jacob C. N. (15 August 2013). [*On the Security of RC4 in TLS*](https://www.usenix.org/sites/default/files/conference/protected-files/alfardan_sec13_slides.pdf) (PDF). 22nd [USENIX](https://en.wikipedia.org/wiki/USENIX) Security Symposium. p. 51. [Archived](https://web.archive.org/web/20130922133950/https://www.usenix.org/sites/default/files/conference/protected-files/alfardan_sec13_slides.pdf) (PDF) from the original on 22 September 2013. Retrieved 2 September 2013. Plaintext recovery attacks against RC4 in TLS are feasible although not truly practical
147. **^** Goodin, Dan (15 July 2015). ["Once-theoretical crypto attack against HTTPS now verges on practicality"](https://arstechnica.com/security/2015/07/once-theoretical-crypto-attack-against-https-now-verges-on-practicality). *[Ars Technica](https://en.wikipedia.org/wiki/Ars_Technica)*. Conde Nast. [Archived](https://web.archive.org/web/20150716084138/http://arstechnica.com/security/2015/07/once-theoretical-crypto-attack-against-https-now-verges-on-practicality) from the original on 16 July 2015. Retrieved 16 July 2015.
148. **^** ["Mozilla Security Server Side TLS Recommended Configurations"](https://wiki.mozilla.org/Security/Server_Side_TLS). Mozilla. [Archived](https://web.archive.org/web/20150103093047/https://wiki.mozilla.org/Security/Server_Side_TLS) from the original on 2015-01-03. Retrieved 2015-01-03.
149. **^** ["Security Advisory 2868725: Recommendation to disable RC4"](http://blogs.technet.com/b/srd/archive/2013/11/12/security-advisory-2868725-recommendation-to-disable-rc4.aspx). Microsoft. 2013-11-12. [Archived](https://web.archive.org/web/20131118081816/http://blogs.technet.com/b/srd/archive/2013/11/12/security-advisory-2868725-recommendation-to-disable-rc4.aspx) from the original on 2013-11-18. Retrieved 2013-12-04.
150. **^** ["Ending support for the RC4 cipher in Microsoft Edge and Internet Explorer 11"](https://blogs.windows.com/msedgedev/2015/09/01/ending-support-for-the-rc4-cipher-in-microsoft-edge-and-internet-explorer-11). Microsoft Edge Team. September 1, 2015. [Archived](https://web.archive.org/web/20150902054341/http://blogs.windows.com/msedgedev/2015/09/01/ending-support-for-the-rc4-cipher-in-microsoft-edge-and-internet-explorer-11) from the original on September 2, 2015.
151. **^** Langley, Adam (Sep 1, 2015). ["Intent to deprecate: RC4"](https://groups.google.com/a/chromium.org/forum/#!msg/security-dev/kVfCywocUO8/vgi_rQuhKgAJ). [Archived](https://web.archive.org/web/20130523081122/http://groups.google.com/a/chromium.org/group/chromium-os-dev/browse_thread/thread/337cca9a0da59ad6/9354a38894da5df5#!msg/security-dev/kVfCywocUO8/vgi_rQuhKgAJ) from the original on May 23, 2013. Retrieved September 2, 2015.
152. **^** Barnes, Richard (Sep 1, 2015). ["Intent to ship: RC4 disabled by default in Firefox 44"](https://groups.google.com/forum/#!topic/mozilla.dev.platform/JIEFcrGhqSM/discussion). [Archived](http://arquivo.pt/wayback/20110122130054/https://groups.google.com/forum/#!topic/mozilla.dev.platform/JIEFcrGhqSM/discussion) from the original on 2011-01-22.
153. ^   John Leyden (1 August 2013). ["Gmail, Outlook.com and e-voting 'pwned' on stage in crypto-dodge hack"](https://www.theregister.co.uk/2013/08/01/gmail_hotmail_hijacking). *The Register*. [Archived](https://web.archive.org/web/20130801193054/http://www.theregister.co.uk/2013/08/01/gmail_hotmail_hijacking) from the original on 1 August 2013. Retrieved 1 August 2013.
154. **^** ["BlackHat USA Briefings"](https://www.blackhat.com/us-13/briefings.html#Smyth). *Black Hat 2013*. [Archived](https://web.archive.org/web/20130730124037/http://www.blackhat.com/us-13/briefings.html#Smyth) from the original on 30 July 2013. Retrieved 1 August 2013.
155. **^** Smyth, Ben; Pironti, Alfredo (2013). [*Truncating TLS Connections to Violate Beliefs in Web Applications*](https://hal.inria.fr/hal-01102013). *7th USENIX Workshop on Offensive Technologies* (report). [Archived](https://web.archive.org/web/20151106110117/https://hal.inria.fr/hal-01102013) from the original on 6 November 2015. Retrieved 15 February 2016.
156. **^** AlFardan, Nadhem; Paterson, Kenneth G (2012). [*Plaintext-recovery attacks against datagram TLS*](https://web.archive.org/web/20120118070007/http://www.isg.rhul.ac.uk/~kp/dtls.pdf) (PDF). Network and distributed system security symposium (NDSS 2012). Archived from the original on 2012-01-18.
157. **^** Goodin, Dan (26 July 2016). ["New attack bypasses HTTPS protection on Macs, Windows, and Linux"](https://arstechnica.com/security/2016/07/new-attack-that-cripples-https-crypto-works-on-macs-windows-and-linux). *Ars Technica*. Condé Nast. [Archived](https://web.archive.org/web/20160727160434/http://arstechnica.com/security/2016/07/new-attack-that-cripples-https-crypto-works-on-macs-windows-and-linux) from the original on 27 July 2016. Retrieved 28 July 2016.
158. **^** Goodin, Dan (August 24, 2016). ["HTTPS and OpenVPN face new attack that can decrypt secret cookies"](https://arstechnica.com/security/2016/08/new-attack-can-pluck-secrets-from-1-of-https-traffic-affects-top-sites). *Ars Technica*. [Archived](https://web.archive.org/web/20160824181630/http://arstechnica.com/security/2016/08/new-attack-can-pluck-secrets-from-1-of-https-traffic-affects-top-sites) from the original on August 24, 2016. Retrieved August 24, 2016.
159. **^** ["Why is it called the 'Heartbleed Bug'?"](https://www.washingtonpost.com/blogs/style-blog/wp/2014/04/09/why-is-it-called-the-heartbleed-bug). *The Washington Post*. 2014-04-09. [Archived](https://web.archive.org/web/20141009063758/http://www.washingtonpost.com/blogs/style-blog/wp/2014/04/09/why-is-it-called-the-heartbleed-bug) from the original on 2014-10-09.
160. **^** ["Heartbleed Bug vulnerability [9 April 2014]"](https://blogs.comodo.com/e-commerce/heartbleed-bug-comodo-urges-openssl-users-to-apply-patch). [Comodo Group](https://en.wikipedia.org/wiki/Comodo_Group). 9 April 2014. [Archived](https://web.archive.org/web/20140705212748/https://blogs.comodo.com/e-commerce/heartbleed-bug-comodo-urges-openssl-users-to-apply-patch) from the original on 5 July 2014.
161. **^** [Bleichenbacher, Daniel](https://en.wikipedia.org/wiki/Daniel_Bleichenbacher) (August 2006). ["Bleichenbacher's RSA signature forgery based on implementation error"](https://web.archive.org/web/20141216203704/http://www.imc.org/ietf-openpgp/mail-archive/msg06063.html). Archived from [the original](http://www.imc.org/ietf-openpgp/mail-archive/msg06063.html) on 2014-12-16.
162. **^** ["BERserk"](http://www.intelsecurity.com/advanced-threat-research). Intel Security: Advanced Threat Research. September 2014. [Archived](https://web.archive.org/web/20150112153121/http://www.intelsecurity.com/advanced-threat-research) from the original on 2015-01-12.
163. **^** Goodin, Dan (February 19, 2015). ["Lenovo PCs ship with man-in-the-middle adware that breaks HTTPS connections"](https://arstechnica.com/information-technology/2015/02/lenovo-pcs-ship-with-man-in-the-middle-adware-that-breaks-https-connections). *[Ars Technica](https://en.wikipedia.org/wiki/Ars_Technica)*. [Archived](https://web.archive.org/web/20170912103610/https://arstechnica.com/information-technology/2015/02/lenovo-pcs-ship-with-man-in-the-middle-adware-that-breaks-https-connections) from the original on September 12, 2017. Retrieved December 10, 2017.
164. **^** Valsorda, Filippo (2015-02-20). ["Komodia/Superfish SSL validation is broken"](https://blog.filippo.io/komodia-superfish-ssl-validation-is-broken). Filippo.io. [Archived](https://web.archive.org/web/20150224112141/https://blog.filippo.io/komodia-superfish-ssl-validation-is-broken) from the original on 2015-02-24.
165. ^   Goodin, Dan (26 May 2016). [""Forbidden attack" makes dozens of HTTPS Visa sites vulnerable to tampering"](https://arstechnica.com/security/2016/05/faulty-https-settings-leave-dozens-of-visa-sites-vulnerable-to-forgery-attacks). *Ars Technica*. [Archived](https://web.archive.org/web/20160526175713/http://arstechnica.com/security/2016/05/faulty-https-settings-leave-dozens-of-visa-sites-vulnerable-to-forgery-attacks) from the original on 26 May 2016. Retrieved 26 May 2016.
166. **^** Clark Estes, Adam (February 24, 2017). ["Everything You Need to Know About Cloudbleed, the Latest Internet Security Disaster"](https://gizmodo.com/everything-you-need-to-know-about-cloudbleed-the-lates-1792710616). *[Gizmodo](https://en.wikipedia.org/wiki/Gizmodo)*. [Archived](https://web.archive.org/web/20170225013516/http://gizmodo.com/everything-you-need-to-know-about-cloudbleed-the-lates-1792710616) from the original on 2017-02-25. Retrieved 2017-02-24.
167. **^** Diffie, Whitfield; van Oorschot, Paul C; Wiener, Michael J. (June 1992). ["Authentication and Authenticated Key Exchanges"](http://citeseer.ist.psu.edu/diffie92authentication.html). *Designs, Codes and Cryptography*. **2** (2): 107–125. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.59.6682](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.59.6682). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/BF00124891](https://doi.org/10.1007%2FBF00124891). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [7356608](https://api.semanticscholar.org/CorpusID:7356608). [Archived](https://web.archive.org/web/20080313081157/http://citeseer.ist.psu.edu/diffie92authentication.html) from the original on 2008-03-13. Retrieved 2008-02-11.
168. **^** ["Discussion on the TLS mailing list in October 2007"](https://web.archive.org/web/20130922103746/http://www.ietf.org/mail-archive/web/tls/current/msg02134.html). Archived from [the original](http://www1.ietf.org/mail-archive/web/tls/current/msg02134.html) on 22 September 2013. Retrieved 20 February 2022.
169. **^** ["Protecting data for the long term with forward secrecy"](http://googleonlinesecurity.blogspot.com.au/2011/11/protecting-data-for-long-term-with.html). [Archived](https://web.archive.org/web/20130506184654/http://googleonlinesecurity.blogspot.com.au/2011/11/protecting-data-for-long-term-with.html) from the original on 2013-05-06. Retrieved 2012-11-05.
170. **^** Bernat, Vincent (28 November 2011). ["SSL/TLS & Perfect Forward Secrecy"](https://vincent.bernat.ch/en/blog/2011-ssl-perfect-forward-secrecy). [Archived](https://web.archive.org/web/20120827064047/https://vincent.bernat.ch/en/blog/2011-ssl-perfect-forward-secrecy) from the original on 2012-08-27. Retrieved 2012-11-05.
171. **^** ["SSL Labs: Deploying Forward Secrecy"](https://community.qualys.com/blogs/securitylabs/2013/06/25/ssl-labs-deploying-forward-secrecy). Qualys.com. 2013-06-25. [Archived](https://web.archive.org/web/20130626193314/https://community.qualys.com/blogs/securitylabs/2013/06/25/ssl-labs-deploying-forward-secrecy) from the original on 2013-06-26. Retrieved 2013-07-10.
172. **^** Ristic, Ivan (2013-08-05). ["SSL Labs: Deploying Forward Secrecy"](https://community.qualys.com/blogs/securitylabs/2013/06/25/ssl-labs-deploying-forward-secrecy). Qualsys. [Archived](https://web.archive.org/web/20130920150259/https://community.qualys.com/blogs/securitylabs/2013/06/25/ssl-labs-deploying-forward-secrecy) from the original on 2013-09-20. Retrieved 2013-08-31.
173. ^   Langley, Adam (27 June 2013). ["How to botch TLS forward secrecy"](https://www.imperialviolet.org/2013/06/27/botchingpfs.html). *imperialviolet.org*. [Archived](https://web.archive.org/web/20130808221614/https://www.imperialviolet.org/2013/06/27/botchingpfs.html) from the original on 8 August 2013.
174. ^   Daignière, Florent. ["TLS "Secrets": Whitepaper presenting the security implications of the deployment of session tickets (RFC 5077) as implemented in OpenSSL"](https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-WP.pdf) (PDF). Matta Consulting Limited. [Archived](https://web.archive.org/web/20130806233112/https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-WP.pdf) (PDF) from the original on 6 August 2013. Retrieved 7 August 2013.
175. ^   Daignière, Florent. ["TLS "Secrets": What everyone forgot to tell you…"](https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-Slides.pdf) (PDF). Matta Consulting Limited. [Archived](https://web.archive.org/web/20130805134805/https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-Slides.pdf) (PDF) from the original on 5 August 2013. Retrieved 7 August 2013.
176. **^** L.S. Huang; S. Adhikarla; D. Boneh; C. Jackson (2014). ["An Experimental Study of TLS Forward Secrecy Deployments"](http://crypto.stanford.edu/~dabo/pubs/abstracts/websec_ecc.html). *IEEE Internet Computing*. **18** (6): 43–51. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_(identifier)):[2014IIC....18f..43H](https://ui.adsabs.harvard.edu/abs/2014IIC....18f..43H). [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_(identifier)) [10.1.1.663.4653](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.663.4653). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/MIC.2014.86](https://doi.org/10.1109%2FMIC.2014.86). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [11264303](https://api.semanticscholar.org/CorpusID:11264303). [Archived](https://web.archive.org/web/20150920011317/http://crypto.stanford.edu/~dabo/pubs/abstracts/websec_ecc.html) from the original on 20 September 2015. Retrieved 16 October 2015.
177. **^** ["Protecting data for the long term with forward secrecy"](http://googleonlinesecurity.blogspot.com.au/2011/11/protecting-data-for-long-term-with.html). [Archived](https://web.archive.org/web/20140212214518/http://googleonlinesecurity.blogspot.com.au/2011/11/protecting-data-for-long-term-with.html) from the original on 2014-02-12. Retrieved 2014-03-07.
178. **^** Hoffman-Andrews, Jacob. ["Forward Secrecy at Twitter"](https://blog.twitter.com/2013/forward-secrecy-at-twitter-0). Twitter. [Archived](https://web.archive.org/web/20140216041202/https://blog.twitter.com/2013/forward-secrecy-at-twitter-0) from the original on 2014-02-16. Retrieved 2014-03-07.
179. ^    Durumeric, Zakir; Ma, Zane; Springall, Drew; Barnes, Richard; Sullivan, Nick; Bursztein, Elie; Bailey, Michael; Halderman, J. Alex; Paxson, Vern (5 September 2017). ["The Security Impact of HTTPS Interception"](https://www.ndss-symposium.org/ndss2017/ndss-2017-programme/security-impact-https-interception). *NDSS Symposium*. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.14722/ndss.2017.23456](https://doi.org/10.14722%2Fndss.2017.23456). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-891562-46-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-891562-46-4). [Archived](https://web.archive.org/web/20190322145041/https://www.ndss-symposium.org/ndss2017/ndss-2017-programme/security-impact-https-interception/) from the original on 22 March 2019. Retrieved 11 March 2019.
180. ^   These certificates are currently [X.509](https://en.wikipedia.org/wiki/X.509), but [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [6091](https://www.rfc-editor.org/rfc/rfc6091) also specifies the use of [OpenPGP](https://en.wikipedia.org/wiki/OpenPGP)-based certificates.
181. **^** ["tls – Differences between the terms "pre-master secret", "master secret", "private key", and "shared secret"?"](https://crypto.stackexchange.com/questions/27131/differences-between-the-terms-pre-master-secret-master-secret-private-key). *Cryptography Stack Exchange*. [Archived](https://web.archive.org/web/20200922021454/https://crypto.stackexchange.com/questions/27131/differences-between-the-terms-pre-master-secret-master-secret-private-key) from the original on 2020-09-22. Retrieved 2020-10-01.
182. **^** Chris (2009-02-18). ["vsftpd-2.1.0 released – Using TLS session resume for FTPS data connection authentication"](http://scarybeastsecurity.blogspot.com/2009/02/vsftpd-210-released.html). Scarybeastsecurity. blogspot.com. [Archived](https://web.archive.org/web/20120707213409/http://scarybeastsecurity.blogspot.com/2009/02/vsftpd-210-released.html) from the original on 2012-07-07. Retrieved 2012-05-17.
183. **^** Rescorla, Eric (August 2018). ["Cryptographic Negotiation"](https://datatracker.ietf.org/doc/html/rfc8446#section-4.1.1). [*The Transport Layer Security (TLS) Protocol Version 1.3*](https://www.rfc-editor.org/rfc/rfc8446). IETF. sec. 4.1.1. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC8446](https://doi.org/10.17487%2FRFC8446). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [8446](https://datatracker.ietf.org/doc/html/rfc8446).
184. **^** Valsorda, Filippo (23 September 2016). ["An overview of TLS 1.3 and Q&A"](https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a). *The Cloudflare Blog*. [Archived](https://web.archive.org/web/20190503043936/https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/) from the original on 3 May 2019. Retrieved 3 May 2019.
185. ^   J. Salowey; H. Zhou; P. Eronen; H. Tschofenig (January 2008). [*Transport Layer Security (TLS) Session Resumption without Server-Side State*](https://www.rfc-editor.org/rfc/rfc5077). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5077](https://doi.org/10.17487%2FRFC5077). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5077](https://datatracker.ietf.org/doc/html/rfc5077). *Obsolete.*  Obsoleted by RFC [8446](https://www.rfc-editor.org/rfc/rfc8446). Updated by RFC [8447](https://www.rfc-editor.org/rfc/rfc8447). Obsoletes RFC [4507](https://www.rfc-editor.org/rfc/rfc4507).
186. **^** ["Multi-Domain vs Wildcard SSL Certificates: Differences & Uses"](https://www.sectigo.com/resource-library/multi-domain-vs-wildcard-ssl-certificates), *Sectigo Official Site*, retrieved 2025-06-06
187. **^** [*Named-based SSL virtual hosts: how to tackle the problem*](https://www.switch.ch/pki/meetings/2007-01/namebased_ssl_virtualhosts.pdf) (PDF), [archived](https://web.archive.org/web/20120803022659/https://www.switch.ch/pki/meetings/2007-01/namebased_ssl_virtualhosts.pdf) (PDF) from the original on 2012-08-03, retrieved 2012-05-17
188. ^   D. Eastlake 3rd (October 2010). [*Transport Layer Security (TLS) Extensions: Extension Definitions*](https://www.rfc-editor.org/rfc/rfc6066). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) (IETF). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC6066](https://doi.org/10.17487%2FRFC6066). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [6066](https://datatracker.ietf.org/doc/html/rfc6066). *Proposed Standard.*  Updated by RFC [8446](https://www.rfc-editor.org/rfc/rfc8446), [9325](https://www.rfc-editor.org/rfc/rfc9325) and [8449](https://www.rfc-editor.org/rfc/rfc8449). Obsoletes RFC [4366](https://www.rfc-editor.org/rfc/rfc4366).
189. **^** T. Dierks; C. Allen (January 1999). [*The TLS Protocol Version 1.0*](https://www.rfc-editor.org/rfc/rfc2246). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC2246](https://doi.org/10.17487%2FRFC2246). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [2246](https://datatracker.ietf.org/doc/html/rfc2246). *Historic.*  Obsoleted by RFC [4346](https://www.rfc-editor.org/rfc/rfc4346). Updated by RFC [5746](https://www.rfc-editor.org/rfc/rfc5746), [6176](https://www.rfc-editor.org/rfc/rfc6176), [3546](https://www.rfc-editor.org/rfc/rfc3546), [7465](https://www.rfc-editor.org/rfc/rfc7465), [7507](https://www.rfc-editor.org/rfc/rfc7507) and [7919](https://www.rfc-editor.org/rfc/rfc7919).
190. **^** A. Freier; P. Karlton; P. Kocher (August 2011). [*The Secure Sockets Layer (SSL) Protocol Version 3.0*](https://www.rfc-editor.org/rfc/rfc6101). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC6101](https://doi.org/10.17487%2FRFC6101). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [6101](https://datatracker.ietf.org/doc/html/rfc6101). *Historic.*
191. **^** M. Brown; R. Housley (May 2010). [*Transport Layer Security (TLS) Authorization Extensions*](https://www.rfc-editor.org/rfc/rfc5878). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5878](https://doi.org/10.17487%2FRFC5878). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5878](https://datatracker.ietf.org/doc/html/rfc5878). *Experimental.*  Updated by RFC [8447](https://www.rfc-editor.org/rfc/rfc8447) and [8996](https://www.rfc-editor.org/rfc/rfc8996). Updates RFC [5246](https://www.rfc-editor.org/rfc/rfc5246).
192. **^** N. Mavrogiannopoulos; D. Gillmor (February 2011). [*Using OpenPGP Keys for Transport Layer Security (TLS) Authentication*](https://www.rfc-editor.org/rfc/rfc6091). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC6091](https://doi.org/10.17487%2FRFC6091). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [6091](https://datatracker.ietf.org/doc/html/rfc6091). *Informational.*  Obsoletes RFC [5081](https://www.rfc-editor.org/rfc/rfc5081).
193. **^** M. Salter; R. Housley (January 2012). [*Suite B Profile for Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc6460). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC6460](https://doi.org/10.17487%2FRFC6460). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [6460](https://datatracker.ietf.org/doc/html/rfc6460). *Historic.*  Changed to historic in 2018 because the [NSA](https://en.wikipedia.org/wiki/National_Security_Agency) stopped support for Suite B Cryptography. Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996). Obsoletes RFC [5430](https://www.rfc-editor.org/rfc/rfc5430).
194. **^** J. Merkle; M. Lochter (October 2013). [*Elliptic Curve Cryptography (ECC) Brainpool Curves for Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc7027). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7027](https://doi.org/10.17487%2FRFC7027). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7027](https://datatracker.ietf.org/doc/html/rfc7027). *Informational.*  Updates RFC [4492](https://www.rfc-editor.org/rfc/rfc4492).
195. **^** S. Friedl; A. Popov; A. Langley; E. Stephan (July 2014). [*Transport Layer Security (TLS) Application-Layer Protocol Negotiation Extension*](https://www.rfc-editor.org/rfc/rfc7301). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7301](https://doi.org/10.17487%2FRFC7301). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7301](https://datatracker.ietf.org/doc/html/rfc7301). *Proposed Standard.*  Updated by RFC [8447](https://www.rfc-editor.org/rfc/rfc8447).
196. **^** B. Möller; A. Langley (May 2015). [*TLS Fallback Signaling Cipher Suite Value (SCSV) for Preventing Protocol Downgrade Attacks*](https://www.rfc-editor.org/rfc/rfc7507). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7507](https://doi.org/10.17487%2FRFC7507). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7507](https://datatracker.ietf.org/doc/html/rfc7507). *Obsolete.*  Obsoleted by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996). Updates RFC [4347](https://www.rfc-editor.org/rfc/rfc4347), [2246](https://www.rfc-editor.org/rfc/rfc2246), [4346](https://www.rfc-editor.org/rfc/rfc4346), [5246](https://www.rfc-editor.org/rfc/rfc5246) and [6347](https://www.rfc-editor.org/rfc/rfc6347).
197. **^** A. Delignat-Lavaud; A. Pironti; A. Langley; M. Ray (September 2015). K. Bhargavan (ed.). [*Transport Layer Security (TLS) Session Hash and Extended Master Secret Extension*](https://www.rfc-editor.org/rfc/rfc7627). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7627](https://doi.org/10.17487%2FRFC7627). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7627](https://datatracker.ietf.org/doc/html/rfc7627). *Proposed Standard.*  Updates RFC [5246](https://www.rfc-editor.org/rfc/rfc5246).
198. **^** A. Langley (October 2015). [*A Transport Layer Security (TLS) ClientHello Padding Extension*](https://www.rfc-editor.org/rfc/rfc7685). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7685](https://doi.org/10.17487%2FRFC7685). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7685](https://datatracker.ietf.org/doc/html/rfc7685). *Proposed Standard.*  Updates RFC [5246](https://www.rfc-editor.org/rfc/rfc5246).
199. **^** S. Blake-Wilson; M. Nystrom; D. Hopwood; J. Mikkelsen; T. Wright (April 2006). [*Transport Layer Security (TLS) Extensions*](https://www.rfc-editor.org/rfc/rfc4366). [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4366](https://doi.org/10.17487%2FRFC4366). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4366](https://datatracker.ietf.org/doc/html/rfc4366). *Obsolete.*  Obsoleted by RFC [5246](https://www.rfc-editor.org/rfc/rfc5246) and [6066](https://www.rfc-editor.org/rfc/rfc6066). Updated by RFC [5746](https://www.rfc-editor.org/rfc/rfc5746). Obsoletes RFC [3546](https://www.rfc-editor.org/rfc/rfc3546). Updates RFC [4346](https://www.rfc-editor.org/rfc/rfc4346).
200. **^** S. Blake-Wilson; N. Bolyard; V. Gupta; C. Hawk; B. Moeller (May 2006). [*Elliptic Curve Cryptography (ECC) Cipher Suites for Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc4492). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4492](https://doi.org/10.17487%2FRFC4492). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4492](https://datatracker.ietf.org/doc/html/rfc4492). *Obsolete.*  Obsoleted by RFC [8422](https://www.rfc-editor.org/rfc/rfc8422). Updated by RFC [5246](https://www.rfc-editor.org/rfc/rfc5246), [7027](https://www.rfc-editor.org/rfc/rfc7027) and [7919](https://www.rfc-editor.org/rfc/rfc7919).
201. **^** S. Santesson (September 2006). [*TLS Handshake Message for Supplemental Data*](https://www.rfc-editor.org/rfc/rfc4680). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4680](https://doi.org/10.17487%2FRFC4680). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4680](https://datatracker.ietf.org/doc/html/rfc4680). *Proposed Standard.*  Updates RFC [4346](https://www.rfc-editor.org/rfc/rfc4346). Updated by RFC [8447](https://www.rfc-editor.org/rfc/rfc8447) and [8996](https://www.rfc-editor.org/rfc/rfc8996).
202. **^** S. Santesson; A. Medvinsky; J. Ball (October 2006). [*TLS User Mapping Extension*](https://www.rfc-editor.org/rfc/rfc4681). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4681](https://doi.org/10.17487%2FRFC4681). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4681](https://datatracker.ietf.org/doc/html/rfc4681). *Proposed Standard.*  Updates RFC [4346](https://www.rfc-editor.org/rfc/rfc4346). Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996).
203. **^** U. Blumenthal; P. Goel (January 2007). [*Pre-Shared Key (PSK) Ciphersuites with NULL Encryption for Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc4785). [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4785](https://doi.org/10.17487%2FRFC4785). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4785](https://datatracker.ietf.org/doc/html/rfc4785). *Proposed Standard.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996).
204. **^** D. Taylor; T. Wu; N. Mavrogiannopoulos; T. Perrin (November 2007). [*Using the Secure Remote Password (SRP) Protocol for TLS Authentication*](https://www.rfc-editor.org/rfc/rfc5054). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5054](https://doi.org/10.17487%2FRFC5054). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5054](https://datatracker.ietf.org/doc/html/rfc5054). *Informational.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996).
205. **^** N. Mavrogiannopoulos (November 2007). [*Using OpenPGP Keys for Transport Layer Security (TLS) Authentication*](https://www.rfc-editor.org/rfc/rfc5081). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5081](https://doi.org/10.17487%2FRFC5081). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5081](https://datatracker.ietf.org/doc/html/rfc5081). *Experimental.*  Obsoleted by RFC [6091](https://www.rfc-editor.org/rfc/rfc6091).
206. **^** B. Simon; D. Aboba; R. Hurst (March 2008). [*The EAP-TLS Authentication Protocol*](https://www.rfc-editor.org/rfc/rfc5216). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC5216](https://doi.org/10.17487%2FRFC5216). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [5216](https://datatracker.ietf.org/doc/html/rfc5216). *Proposed Standard.*  Updated by RFC [9190](https://www.rfc-editor.org/rfc/rfc9190) and [8996](https://www.rfc-editor.org/rfc/rfc8996).Obsoletes RFC [2716](https://www.rfc-editor.org/rfc/rfc2716).
207. **^** C. Newman (June 1999). [*Using TLS with IMAP, POP3 and ACAP*](https://www.rfc-editor.org/rfc/rfc2595). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC2595](https://doi.org/10.17487%2FRFC2595). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [2595](https://datatracker.ietf.org/doc/html/rfc2595). *Proposed Standard.*  Updated by RFC [4616](https://www.rfc-editor.org/rfc/rfc4616), [7817](https://www.rfc-editor.org/rfc/rfc7817) and [8314](https://www.rfc-editor.org/rfc/rfc8314).
208. **^** A. Medvinsky; M. Hur (October 1999). [*Addition of Kerberos Cipher Suites to Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc2712). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC2712](https://doi.org/10.17487%2FRFC2712). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [2712](https://datatracker.ietf.org/doc/html/rfc2712). *Proposed Standard.*
209. **^** E. Rescorla (May 2000). [*HTTP Over TLS*](https://www.rfc-editor.org/rfc/rfc2818). [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC2818](https://doi.org/10.17487%2FRFC2818). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [2818](https://datatracker.ietf.org/doc/html/rfc2818). *Obsolete.*  Obsoleted by RFC [9110](https://www.rfc-editor.org/rfc/rfc9110). Updated by RFC [5785](https://www.rfc-editor.org/rfc/rfc5785) and [7230](https://www.rfc-editor.org/rfc/rfc7230).
210. **^** P. Hoffman (February 2002). [*SMTP Service Extension for Secure SMTP over Transport Layer Security*](https://www.rfc-editor.org/rfc/rfc3207). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC3207](https://doi.org/10.17487%2FRFC3207). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [3207](https://datatracker.ietf.org/doc/html/rfc3207). *Proposed Standard.*  Updated by RFC [7817](https://www.rfc-editor.org/rfc/rfc7817). Obsoletes RFC [2487](https://www.rfc-editor.org/rfc/rfc2487).
211. **^** P. Chown (June 2002). [*Advanced Encryption Standard (AES) Ciphersuites for Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc3268). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC3268](https://doi.org/10.17487%2FRFC3268). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [3268](https://datatracker.ietf.org/doc/html/rfc3268). *Obsolete.*  Obsoleted by RFC [5246](https://www.rfc-editor.org/rfc/rfc5246).
212. **^** S. Blake-Wilson; M. Nystrom; D. Hopwood; J. Mikkelsen; T. Wright (June 2003). [*Transport Layer Security (TLS) Extensions*](https://www.rfc-editor.org/rfc/rfc3546). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC3546](https://doi.org/10.17487%2FRFC3546). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [3546](https://datatracker.ietf.org/doc/html/rfc3546). *Obsolete.*  Obsoleted by RFC [4366](https://www.rfc-editor.org/rfc/rfc4366). Updates RFC [2246](https://www.rfc-editor.org/rfc/rfc2246)
213. **^** S. Hollenbeck (May 2004). [*Transport Layer Security Protocol Compression Methods*](https://www.rfc-editor.org/rfc/rfc3749). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC3749](https://doi.org/10.17487%2FRFC3749). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [3749](https://datatracker.ietf.org/doc/html/rfc3749). *Proposed Standard.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996) and [8447](https://www.rfc-editor.org/rfc/rfc8447).
214. **^** R. Friend (November 2004). [*Transport Layer Security (TLS) Protocol Compression Using Lempel-Ziv-Stac (LZS)*](https://www.rfc-editor.org/rfc/rfc3943). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC3943](https://doi.org/10.17487%2FRFC3943). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [3943](https://datatracker.ietf.org/doc/html/rfc3943). *Informational.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996).
215. **^** S. Moriai; S. Moriai; M. Kanda (July 2005). [*Addition of Camellia Cipher Suites to Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc4132). [IETF](https://en.wikipedia.org/wiki/IETF) Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4132](https://doi.org/10.17487%2FRFC4132). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4132](https://datatracker.ietf.org/doc/html/rfc4132). *Obsolete.*  Obsoleted by RFC [5932](https://www.rfc-editor.org/rfc/rfc5932).
216. **^** P. Ford-Hutchinson (October 2005). [*Securing FTP with TLS*](https://www.rfc-editor.org/rfc/rfc4217). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4217](https://doi.org/10.17487%2FRFC4217). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4217](https://datatracker.ietf.org/doc/html/rfc4217). *Proposed Standard.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996).
217. **^** P. Eronen; H. Tschofenig, eds. (December 2005). [*Pre-Shared Key Ciphersuites for Transport Layer Security (TLS)*](https://www.rfc-editor.org/rfc/rfc4279). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC4279](https://doi.org/10.17487%2FRFC4279). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [4279](https://datatracker.ietf.org/doc/html/rfc4279). *Proposed Standard.*  Updated by RFC [8996](https://www.rfc-editor.org/rfc/rfc8996).
218. **^** Y. Sheffer; R. Holz; P. Saint-Andre (February 2015). [*Summarizing Known Attacks on Transport Layer Security (TLS) and Datagram TLS (DTLS)*](https://www.rfc-editor.org/rfc/rfc7457). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC7457](https://doi.org/10.17487%2FRFC7457). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [7457](https://datatracker.ietf.org/doc/html/rfc7457). *Informational.*
219. **^** Y. Sheffer; P. Saint-Andre; T. Fossati (November 2022). [*Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)*](https://www.rfc-editor.org/rfc/rfc9325). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force). [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.17487/RFC9325](https://doi.org/10.17487%2FRFC9325). BCP 195. [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [9325](https://datatracker.ietf.org/doc/html/rfc9325). *Best Current Practice 195.*  Obsoletes RFC [7525](https://www.rfc-editor.org/rfc/rfc7525). Updates RFC [5288](https://www.rfc-editor.org/rfc/rfc5288) and [6066](https://www.rfc-editor.org/rfc/rfc6066).
 
NewPP limit report
Parsed by mw‐web.eqiad.main‐56dfd6f675‐g974l
Cached time: 20260424003952
Cache expiry: 86400
Cache expiry source: Template:As_of (#time)
Reduced expiry: true
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 3.366 seconds
Real time usage: 3.742 seconds
Preprocessor visited node count: 43437/1000000
Revision size: 179703/2097152 bytes
Post‐expand include size: 878701/2097152 bytes
Template argument size: 49740/2097152 bytes
Highest expansion depth: 23/100
Expensive parser function count: 29/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 1367976/5000000 bytes
Lua time usage: 2.003/10.000 seconds
Lua memory usage: 12704798/52428800 bytes
Number of Wikibase entities loaded: 0/500

Transclusion expansion time report (%,ms,calls,template)
100.00% 3205.190      1 -total
 54.55% 1748.318      3 Template:Reflist
 18.84%  603.893     61 Template:Cite_IETF
 17.54%  562.272    121 Template:Cite_web
  5.71%  182.974     56 Template:Sum_RFC
  5.58%  178.784     44 Template:Ref_RFC
  4.40%  141.094    114 Template:IETF_RFC
  3.39%  108.687      5 Template:Cite_conference
  3.20%  102.652     54 Template:APHD
  2.91%   93.236      1 Template:Short_description
 Render ID 1b2fc2e1-3f76-11f1-a480-d90cb8b7e58d  Saved in parser cache with key enwiki:pcache:187813:|#|:idhash:canonical and timestamp 20260424003952 and revision id 1350635749. Rendering was triggered because: page_view_oldid