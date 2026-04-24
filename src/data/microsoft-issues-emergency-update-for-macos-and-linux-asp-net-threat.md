# Microsoft issues emergency update for macOS and Linux ASP.NET threat

Source: https://arstechnica.com/security/2026/04/microsoft-issues-emergency-update-for-macos-and-linux-asp-net-threat/

Microsoft released an emergency patch for its ASP.NET Core to fix a high-severity vulnerability that allows unauthenticated attackers to gain SYSTEM privileges on devices that use the Web development framework to run Linux or macOS apps.

The software maker said Tuesday evening that the vulnerability, tracked as CVE-2026-40372, affects versions 10.0.0 through 10.0.6 of the Microsoft.AspNetCore.DataProtection NuGet, a package that’s part of the framework. The critical flaw stems from a faulty verification of cryptographic signatures. It can be exploited to allow unauthenticated attackers to forge authentication payloads during the HMAC validation process, which is used to verify the integrity and authenticity of data exchanged between a client and a server.

During the time users ran a vulnerable version of the package, they were left open to an attack that would allow unauthenticated people to gain sensitive SYSTEM privileges that would allow full compromise of the underlying machine. Even after the vulnerability is patched, devices may still be compromised if authentication credentials created by a threat actor aren’t purged.

“If an attacker used forged payloads to authenticate as a privileged user during the vulnerable window, they may have induced the application to issue legitimately-signed tokens (session refresh, API key, password reset link, etc.) to themselves,” Microsoft said. “Those tokens remain valid after upgrading to 10.0.7 unless the DataProtection key ring is rotated.”

Microsoft describes ASP.NET Core as a “high-performance” web development framework for writing .Net apps that run on Windows, macOS, Linux, and Docker. The open-source package is “designed to allow runtime components, APIs, compilers, and languages [to] evolve quickly, while still providing a stable and supported platform to keep apps running.”