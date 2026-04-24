# In a first, a ransomware family is confirmed to be quantum-safe

Source: https://arstechnica.com/security/2026/04/now-even-ransomware-is-using-post-quantum-cryptography/

There is no practical benefit for Kyber developers to have chosen a PQC key-exchange algorithm. The Kyber ransom note gives victims one week to respond. Quantum computers capable of running Shor’s algorithm—the series of mathematical equations that allow the breakage of RSA and ECC (elliptic curve cryptography)—are, at a minimum, three years away and likely much further.

A Kyber variant that targets systems running VMware,  meanwhile, claims to use ML-KEM as well. Rapid7 said its look under the hood revealed that, in fact, it uses RSA with 4096-bit keys, a strength that will take even longer for Shor’s algorithm to break. Anna Širokova, a Rapid7 senior security researcher and the author of Tuesday’s post, said the use or claimed use of ML-KEM is likely just a branding gimmick and that implementing it required relatively little work by Kyber developers.

In an email, Širokova wrote:

First, it’s marketing to the victim. “Post-quantum encryption” sounds a lot scarier than “we used AES,” especially to non-technical decision-makers who might be evaluating whether to pay. It’s a psychological trick. They’re not worried about someone breaking the encryption a decade from now. They want payment within 72 hours.

Second, implementation cost is low. Kyber1024 libraries (renamed to ML-KEM) are available and well-documented. Ransomware doesn’t encrypt your files directly with Kyber1024. That would be slow. Instead, it:

In Rust, there are already libraries that do Kyber1024. The developer just adds it to their dependencies and calls a function to wrap the key.

Despite the hype, Kyber suggests that PQC is attracting the attention of less technically inclined attorneys and executives deciding how to respond to ransom demands. Kyber developers are hoping the impression that the encryption has overwhelming strength will sway people to pay.