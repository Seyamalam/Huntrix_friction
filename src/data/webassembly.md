# WebAssembly

* Source: https://en.wikipedia.org/wiki/WebAssembly

---

| WebAssembly |  |
| --- | --- |
|  |  |
| [Paradigm](https://en.wikipedia.org/wiki/Programming_paradigm) | [structured](https://en.wikipedia.org/wiki/Structured_programming); [stack machine](https://en.wikipedia.org/wiki/Stack_machine) |
| [Designed by](https://en.wikipedia.org/wiki/Software_design) | [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) |
| [Developer](https://en.wikipedia.org/wiki/Software_developer) | [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium)[Mozilla](https://en.wikipedia.org/wiki/Mozilla)[Microsoft](https://en.wikipedia.org/wiki/Microsoft)[Google](https://en.wikipedia.org/wiki/Google)[Apple](https://en.wikipedia.org/wiki/Apple_Inc.) |
| First appeared | March 2017 (2017-03) |
| [OS](https://en.wikipedia.org/wiki/Operating_system) | [Platform independent](https://en.wikipedia.org/wiki/Platform_independent) |
| [License](https://en.wikipedia.org/wiki/Software_license) | [Apache License 2.0](https://en.wikipedia.org/wiki/Apache_License_2.0) |
| [Filename extensions](https://en.wikipedia.org/wiki/Filename_extension) | .wat (text format).wasm (binary format) |
| Website | [webassembly.org](https://webassembly.org/) |
| Influenced by |  |
| [asm.js](https://en.wikipedia.org/wiki/Asm.js)[PNaCl](https://en.wikipedia.org/wiki/Google_Native_Client)[Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) |  |

**WebAssembly** (**Wasm**) defines a [portable](https://en.wikipedia.org/wiki/Software_portability) [binary code](https://en.wikipedia.org/wiki/Binary_code) format and a corresponding text format for [executable](https://en.wikipedia.org/wiki/Executable) programs and [software](https://en.wikipedia.org/wiki/Software) interfaces for facilitating communication between such programs and their host environment.

The main goal of WebAssembly is to facilitate high-performance applications on [web pages](https://en.wikipedia.org/wiki/Web_page), but it is also designed to be usable in non-web environments. It is an [open standard](https://en.wikipedia.org/wiki/Open_standard) intended to support any language on any operating system, and in practice many of the most popular languages already have at least some level of support.

Announced in 2015 (2015) and first released in March 2017 (2017-03), WebAssembly became a [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C) recommendation on 5 December 2019 and it received the *Programming Languages Software Award* from the [Association for Computing Machinery](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery) (ACM) [SIGPLAN](https://en.wikipedia.org/wiki/SIGPLAN) in 2021. The W3C maintains the standard with contributions from [Mozilla](https://en.wikipedia.org/wiki/Mozilla), [Microsoft](https://en.wikipedia.org/wiki/Microsoft), [Google](https://en.wikipedia.org/wiki/Google), [Apple](https://en.wikipedia.org/wiki/Apple_Inc.), [Fastly](https://en.wikipedia.org/wiki/Fastly), [Intel](https://en.wikipedia.org/wiki/Intel), and [Red Hat](https://en.wikipedia.org/wiki/Red_Hat).

## History

The name "WebAssembly" is intended to suggest bringing [assembly language](https://en.wikipedia.org/wiki/Assembly_language) programming to the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web), where it will be executed [client-side](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), by the website-user's computer via the user's [web browser](https://en.wikipedia.org/wiki/Web_browser). To accomplish this, WebAssembly must be much more hardware-independent than a true assembly language.

WebAssembly was first announced in 2015, and the first demonstration was executing [Unity](https://en.wikipedia.org/wiki/Unity_(game_engine))'s *Angry Bots* in [Firefox](https://en.wikipedia.org/wiki/Firefox), [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome), and [Microsoft Edge [Legacy]](https://en.wikipedia.org/wiki/Microsoft_Edge_Legacy). The precursor technologies were [asm.js](https://en.wikipedia.org/wiki/Asm.js) from [Mozilla](https://en.wikipedia.org/wiki/Mozilla) and [Google Native Client](https://en.wikipedia.org/wiki/Google_Native_Client), and the initial implementation was based on the feature set of asm.js.

In March 2017, the design of the [minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product) (MVP) was declared to be finished and the preview phase ended. In late September 2017, [Safari 11](https://en.wikipedia.org/wiki/Safari_(web_browser)) was released with support. In February 2018, the WebAssembly Working Group published three public working drafts for the Core Specification, JavaScript Interface, and Web API.

The MVP was focused on low-level languages such as [C](https://en.wikipedia.org/wiki/C_(programming_language)) and [C++](https://en.wikipedia.org/wiki/C%2B%2B), with the intent to add features useful for high-level languages in a future version.

Multithreading is currently a draft, but has been supported by Chrome since version 75 in June 2019, Firefox version 79, and Safari version 14.1

The WebAssembly 2.0 specification was finished in 2022 and became a W3C standard in December 2024. It adds many [single instruction, multiple data](https://en.wikipedia.org/wiki/Single_instruction,_multiple_data) (SIMD) related instructions and a new v128 datatype, with the ability for functions to return multiple values, mass memory initialize/copy instructions, and reference types, which are opaque pointers to objects outside of the linear memory.

WebAssembly 3.0 was released in September 2025. New features include a [64-bit](https://en.wikipedia.org/wiki/64-bit_computing) address space, multiple address spaces, exception handling, and garbage collected struct and array types. Support for garbage collection enables more efficient compiling for high-level languages, but WasmGC from WebAssembly 3.0 lacks the abilities needed by [.NET](https://en.wikipedia.org/wiki/.NET) [runtime](https://en.wikipedia.org/wiki/Execution_(computing)).

## Implementations

While WebAssembly was initially designed to permit near-native code execution speed in the web browser, it has been considered valuable outside of such, in more generalized contexts. A WebAssembly runtime environment is a low-level [virtual stack machine](https://en.wikipedia.org/wiki/Stack_machine), akin to [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine) or [Flash VM](https://en.wikipedia.org/wiki/Adobe_Flash); it can be embedded into any host application, and thus there have been created standalone WebAssembly runtime environments, including [Wasmtime](https://en.wikipedia.org/w/index.php?title=Wasmtime&action=edit&redlink=1) , [WebAssembly Micro Runtime](https://en.wikipedia.org/w/index.php?title=WebAssembly_Micro_Runtime&action=edit&redlink=1) , [Wasmer](https://en.wikipedia.org/w/index.php?title=Wasmer&action=edit&redlink=1) , [WasmEdge](https://en.wikipedia.org/w/index.php?title=WasmEdge&action=edit&redlink=1)  and [wazero](https://en.wikipedia.org/w/index.php?title=Wazero&action=edit&redlink=1) . WebAssembly runtime environments are embedded in [application servers](https://en.wikipedia.org/wiki/Application_server) to host "server-side" WebAssembly applications and in other applications to support [plug-in](https://en.wikipedia.org/wiki/Plug-in_(computing))-based software extension architectures, e.g., *WebAssembly for Proxies* (Proxy-Wasm) which specifies a WebAssembly-based [application binary interface](https://en.wikipedia.org/wiki/Application_binary_interface) (ABI) to extend [proxy servers](https://en.wikipedia.org/wiki/Proxy_server).

### Web browsers

In November 2017, Mozilla declared support "in all major browsers", after WebAssembly was enabled by default in Edge [Legacy] 16. This support also includes mobile web browsers for iOS and Android.  As of March 2024, 99% of tracked web browsers  support WebAssembly (version 1.0), more than for its predecessor [asm.js](https://en.wikipedia.org/wiki/Asm.js).  For some extensions, from the 2.0 draft standard, support may be lower, but still more than 90% of web browsers may already support, e.g. the reference types extension.

### Non-browser runtimes

Non-browser WebAssembly runtimes include Wasmer, Wasmtime, WAMR, WAVM, wasm3, and others. These systems execute precompiled Wasm modules and often provide additional APIs for embedding WebAssembly in different environments. Use cases for wasm outside the browser include plug-in interfaces and lightweight virtualization.

### Compilers

WebAssembly implementations generally use either [ahead-of-time](https://en.wikipedia.org/wiki/Ahead-of-time_compilation) (AOT) or [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) (JIT) compiling, though some may also use an [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing)). While the first implementations appeared in web browsers, there are now many non-browser implementations for general-purpose use.

#### Compiler toolchains

Because WebAssembly executables are precompiled, a variety of programming languages can target Wasm. Compiling is done either through direct output to Wasm or via intermediate virtual machines implemented in Wasm.

Notable toolchains include:

* [Emscripten](https://en.wikipedia.org/wiki/Emscripten), which compiles C and C++ to Wasm using Clang as a frontend, Binaryen as an optimizer, and can also target any LLVM-supported language.
* Standalone [Clang](https://en.wikipedia.org/wiki/Clang) (version 8 and later), which supports direct compiling to Wasm.
* LLVM-based workflows for languages such as Rust and AssemblyScript.

#### Language support

As of 2021, around 40 programming languages support WebAssembly as a compiling target. Examples include:

* [C](https://en.wikipedia.org/wiki/C_(programming_language)) and [C++](https://en.wikipedia.org/wiki/C%2B%2B): via Emscripten or [Clang](https://en.wikipedia.org/wiki/Clang_(compiler)) standalone.
* [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)): via rustc with Wasm target.
* [AssemblyScript](https://en.wikipedia.org/wiki/AssemblyScript): a TypeScript-like language compiling directly to Wasm.
* [Go](https://en.wikipedia.org/wiki/Go_(programming_language)): native WebAssembly support introduced in Go 1.11.
* [.NET](https://en.wikipedia.org/wiki/.NET) languages: C# (via [Blazor](https://en.wikipedia.org/wiki/Blazor)), F# (via [Bolero](https://en.wikipedia.org/wiki/Bolero_(disambiguation)#Other_uses) and Blazor).
* [Python](https://en.wikipedia.org/wiki/Python_(programming_language)): implementations such as Pyodide.
* [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) and [Java virtual machine](https://en.wikipedia.org/wiki/Java_virtual_machine) (JVM) languages: via CheerpJ, JWebAssembly, and TeaVM.
* [Kotlin](https://en.wikipedia.org/wiki/Kotlin): direct Wasm compiling support.
* [Haskell](https://en.wikipedia.org/wiki/Haskell): supported via [Glasgow Haskell Compiler](https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler) (GHC) backend.
* [Julia](https://en.wikipedia.org/wiki/Julia_(programming_language)): community implementations.
* [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)): supported through MRuby.
* Ring: supported with Wasm backend.
* [Dart](https://en.wikipedia.org/wiki/Dart_(programming_language)): supported WebAssembly as a compiling target when building Dart and Flutter applications for the web.
* [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)): [GNU Guile](https://en.wikipedia.org/wiki/GNU_Guile) via Hoot.

## Limits

[Web browsers](https://en.wikipedia.org/wiki/Web_browser) prevent WebAssembly code from directly manipulating the [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model). Wasm code must defer to [JavaScript](https://en.wikipedia.org/wiki/JavaScript) for this.

In an October 2023 survey of developers, less than half of the 303 participants were satisfied with the state of WebAssembly. A large majority cited the need for improvement in four areas: § WASI, debugging support, integration with JavaScript and browser APIs, and build tooling.

For memory-intensive allocations in WebAssembly, there are "grave limitations that make many applications infeasible to be *reliably* deployed on mobile browsers [..] Currently allocating more than ~300MB of memory is not reliable on Chrome on Android without resorting to Chrome-specific workarounds, nor in Safari on iOS."

All major browsers allow WebAssembly if `Content-Security-Policy` is not specified, or if the value `unsafe-eval` is used, but behave differently otherwise; Chrome *requires* `unsafe-eval`, though a worker thread can be a workaround.

## Security considerations

In June 2018, a security researcher presented the possibility of using WebAssembly to circumvent browser mitigations for [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)) and [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)) security vulnerabilities once support for [threads](https://en.wikipedia.org/wiki/Thread_(computing)) with shared memory is added. Due to this concern, WebAssembly developers put the feature on hold. However, in order to explore these future language extensions, Google Chrome added experimental support for the WebAssembly thread proposal in October 2018.

WebAssembly has been criticized for allowing greater ease of hiding the evidence for [malware](https://en.wikipedia.org/wiki/Malware) writers, scammers and [phishing](https://en.wikipedia.org/wiki/Phishing) attackers; WebAssembly is present on the user's machine only in its compiled form, which "[makes malware] detection difficult". Speed and the easy ability to conceal in WebAssembly have led to its use in hidden [crypto mining](https://en.wikipedia.org/wiki/Cryptocurrency#Mining) within the website visitor's device. [Coinhive](https://en.wikipedia.org/wiki/Coinhive), a now defunct service facilitating cryptocurrency mining in website visitors' browsers, claims their "miner uses WebAssembly and runs with about 65% of the performance of a native Miner." A June 2019 study from the [Technische Universität Braunschweig](https://en.wikipedia.org/wiki/Technische_Universit%C3%A4t_Braunschweig) analyzed the usage of WebAssembly in the Alexa top 1 million websites and found the prevalent use was for malicious crypto mining, and that malware accounted for more than half of the WebAssembly-using websites studied. An April 2021 study from [Universität Stuttgart](https://en.wikipedia.org/wiki/University_of_Stuttgart) found that since then crypto mining has been marginalized, falling to below 1% of all WebAssembly modules gathered from a wide range of sources, also including the Alexa top 1 million websites.

As WebAssembly supports only structured [control flow](https://en.wikipedia.org/wiki/Control_flow), it is amenable toward security verification techniques including [symbolic execution](https://en.wikipedia.org/wiki/Symbolic_execution).

## Performance

Early on, the execution speed of a Wasm program was benchmarked to be around 91% of (or about 10% slower than) a comparable native program, not including load/instantiation time; however, various later benchmarks indicate a wide range of performance characteristics, from 33% to 200% of the execution speed of native code, depending on the task.

In 2019, a group of researchers from the [University of Massachusetts Amherst](https://en.wikipedia.org/wiki/University_of_Massachusetts_Amherst) presented a comprehensive analysis of WebAssembly's performance compared to native code. This study used the [SPEC CPU](https://en.wikipedia.org/wiki/SPEC_CPU) suite of benchmarks and a system called "Browsix-Wasm" to run *unmodified* Unix applications in the browser, thereby allowing for a test of real-world applications, finding a significant performance gap between Wasm execution and native execution; in particular, Wasm programs showed an average slowdown of 45% in Firefox and 55% in Chrome across the real-world benchmarks; peak slowdowns resulted in a Wasm program taking 2.08 times as long to run in Firefox and 2.5 times as long to run in Chrome. The paper identified several reasons for this performance difference, including missing optimizations, code generation issues in WebAssembly compilers, and inherent limits of the WebAssembly platform.

A 2021 study suggested that WebAssembly is much faster than JavaScript in certain cases, such as running a complex function on a small file (*e.g.*, processing a graphics file); however, at the time, the JavaScript interpreter had some optimizations available that the WebAssembly implementations did not have (*e.g.*, [Just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation)).

In 2022, it was determined by researchers that a Wasm program runs at about 120% of (or 20% faster than) the speed of a comparable JavaScript program. Those findings align with the experience of a [startup company](https://en.wikipedia.org/wiki/Startup_company) named "Zaplib", whose founders summarized in a blog that it was shutting down due to lack of performance in WebAssembly. Their goal had been to significantly increase the performance of existing [web apps](https://en.wikipedia.org/wiki/Web_application) by incrementally porting them to [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language))/Wasm; however, porting a customer's simulator from JavaScript yielded only a 5% improvement in performance. Similarly, regarding [Figma](https://en.wikipedia.org/wiki/Figma), they stated the following:

[Upon] closer inspection it seems that [Figma's] use of Wasm is more due to historical accidents—wanting to build in [C++](https://en.wikipedia.org/wiki/C%2B%2B) to hedge for their native app—than for critical performance needs. Figma files are processed in C++/Wasm, and this is likely a huge speedup, but most of Figma's performance magic is due to their [WebGL](https://en.wikipedia.org/wiki/WebGL) renderer.

In 2023, a study of Wasm's performance for cryptographic tasks indicated that "when using the fastest runtime, WebAssembly was only about 2.32 times slower (median) than native code with architecture-specific optimizations." This result excluded 2 tests where the native code benefited from special instructions implemented directly in the CPU of the target platform; for those particular tests, the Wasm programs were "80 times slower than native code".

Benchmarking has revealed several other pain-points for WebAssembly, such as poor performance because of no direct access to the DOM, a problem which is being addressed.

## WASI

WebAssembly System Interface (WASI) is a simple interface ([application binary interface](https://en.wikipedia.org/wiki/Application_binary_interface) (ABI) and [application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface) (API)) designed by [Mozilla](https://en.wikipedia.org/wiki/Mozilla), which is intended to be portable to any platform. It provides features similar to the Portable Operating System Interface ([POSIX](https://en.wikipedia.org/wiki/POSIX)), such as file [input/output](https://en.wikipedia.org/wiki/Input/output) (I/O) constrained by [capability-based security](https://en.wikipedia.org/wiki/Capability-based_security). There are additional proposed ABI/APIs.

WASI is influenced by [CloudABI](https://en.wikipedia.org/wiki/Capsicum_(Unix)#CloudABI) and [Capsicum](https://en.wikipedia.org/wiki/Capsicum_(Unix)).

[Solomon Hykes](https://en.wikipedia.org/wiki/Solomon_Hykes), a co-founder of [Docker](https://en.wikipedia.org/wiki/Docker_(software)), wrote in 2019, "If WASM+WASI existed in 2008, we wouldn't have needed to create Docker. That's how important it is. WebAssembly on the server is the future of computing."

WASI 0.1 provides a few POSIX-like APIs such as file I/O, reading environment variables, and random-number generation, but has very little support for networking. WASI 0.2 is redesigned based on the WebAssembly Component Model. WASI 0.3 will add support for async functions; the host translates between blocking and async function calls, so an exported function that blocks may be called as an asynchronous function, and vice-versa.

Starting in 0.2, WASI is defined in terms of the component model. Interfaces in the component model are specified in an [IDL](https://en.wikipedia.org/wiki/Interface_description_language) called WIT (WebAssembly Interface Types). While core wasm only supports integer and floating-point numbers, interfaces in WIT can express types such as strings, lists, and user-defined record and variant types, and are language-agnostic. Components cannot access each other's memory, and so interact only via imported and exported functions. The component model is designed around composition: two components can be composed into a single component when the exports of one component match another's imports, allowing any interface to be virtualized. Interfaces in WIT are grouped together into a "world". WASI 0.2 defines a CLI world similar to the POSIX-like API of WASI 0.1, and an HTTP proxy world for web servers.

The component model is not currently supported by browsers.

## Specification

### Host environment

The general standard provides core specifications for the JavaScript API and details on embedding.

### Virtual machine

Wasm code (binary code, i.e. bytecode) is intended to be run on a [portable](https://en.wikipedia.org/wiki/Software_portability) virtual [stack machine](https://en.wikipedia.org/wiki/Stack_machine) (VM). The VM is designed to be faster to parse and execute than JavaScript and to have compact code representation. Any external functionality (like [syscalls](https://en.wikipedia.org/wiki/System_call)) that may be expected by Wasm binary code is not stipulated by the standard; instead, the standard specifies how the host environment can provide such an interface via a "module".

### Wasm program

A Wasm program is designed as a separate module containing collections of various Wasm-defined values and program type definitions. These are provided in either binary or textual format (see below) that have a common structure. Such a module may provide a start function that is executed upon instantiation of a wasm binary.

#### Instruction set

The core standard for the binary format of a Wasm program defines an [instruction set architecture](https://en.wikipedia.org/wiki/Instruction_set_architecture) (ISA); each operation that can be executed by the VM is assigned a specific [binary encoding](https://en.wikipedia.org/wiki/Opcode) (an "opcode"), but the exact way in which the operation is implemented is not specified, allowing for flexibility in the construction of a VM. The list of [instruction types](https://en.wikipedia.org/wiki/Instruction_set_architecture) includes those for standard memory load/store, numeric, parametric, [control flow](https://en.wikipedia.org/wiki/Control_flow), and Wasm-specific variables.

The number of opcodes used in the original standard (§ MVP) was a bit fewer than 200 of the 256 possible opcodes. Subsequent versions of WebAssembly pushed the number of opcodes a bit over 200. The [WebAssembly SIMD](https://en.wikipedia.org/wiki/WebAssembly_SIMD) proposal (for parallel processing) introduces an alternate [opcode prefix](https://en.wikipedia.org/wiki/Opcode_prefix) (0xfd) for [128-bit](https://en.wikipedia.org/wiki/128-bit_computing) wide [SIMD](https://en.wikipedia.org/wiki/Single_instruction,_multiple_data) instructions; the concatenation of the SIMD prefix, plus an opcode that is valid after the SIMD prefix, forms each SIMD opcode. The SIMD opcodes bring an additional 236 instructions to the MVP's SIMD ability (for a total of around 436 instructions) This set of instructions are enabled by default across a number of important implementations:

1. Google's V8 (in Google Chrome)
2. The SpiderMonkey engine in Mozilla Firefox
3. The JavaScriptCore engine in Apple's Safari

These SIMD opcodes are both portable and intended to map directly to native instruction sets like [x86-64](https://en.wikipedia.org/wiki/X86-64) and [ARM](https://en.wikipedia.org/wiki/ARM_architecture_family). In contrast, SIMD instructions are not directly supported by Java's [JVM](https://en.wikipedia.org/wiki/Java_bytecode_instruction_listings) or [.NET](https://en.wikipedia.org/wiki/.NET)'s [CIL](https://en.wikipedia.org/wiki/List_of_CIL_instructions); however, both do have some APIs for parallel processing, which provide SIMD speedups. A newer set of "relaxed SIMD" instructions allow for a limited amount of implementation-defined behavior to improve performance.

#### Code representation

In March 2017, the WebAssembly Community Group reached consensus on the initial ("MVP") binary format, JavaScript API, and reference interpreter. It defines a WebAssembly binary format (`.wasm`), which is designed to be used by computers, not humans, and a text format that is human-readable (`.wat`), resembling a cross between [S-expressions](https://en.wikipedia.org/wiki/S-expression) and traditional assembly languages. The binary format is straightforward and designed to allow streaming compiling, so compiling can begin before the module is finished downloading, and to allow functions to be compiled in parallel.

The table below shows an example of a [factorial](https://en.wikipedia.org/wiki/Factorial) function written in [C](https://en.wikipedia.org/wiki/C_(programming_language)) and its corresponding WebAssembly code after compiling, shown both in .wat text format (a human-readable textual representation of WebAssembly) and in .wasm binary format (the raw [bytecode](https://en.wikipedia.org/wiki/Bytecode), expressed below in [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal)), that is executed by a Web browser or run-time environment that supports WebAssembly.

| C source code | WebAssembly .wat text format | WebAssembly .wasm binary format |
| --- | --- | --- |
| int factorial(int n) {     if (n == 0) {         return 1;     } else {         return n * factorial(n - 1);     } } | (func (param i64) (result i64)   local.get 0   i64.eqz   if (result i64)       i64.const 1   else       local.get 0       local.get 0       i64.const 1       i64.sub       call 0       i64.mul   end) | 00 61 73 6D 01 00 00 00 01 06 01 60 01 7E 01 7E 03 02 01 00 0A 17 01 15 00 20 00 50 04 7E 42 01 05 20 00 20 00 42 01 7D 10 00 7E 0B 0B |

All integer constants are encoded using a space-efficient, variable-length [LEB128](https://en.wikipedia.org/wiki/LEB128) encoding.

The WebAssembly text format is more canonically written in a folded format using [S-expressions](https://en.wikipedia.org/wiki/S-expression). For instructions and expressions, this format is purely [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) and has no behavioral differences with the linear format. Through `wasm2wat`, the code above decompiles to:

```
(module
  (type $t0 (func (param i64) (result i64)))
  (func $f0 (type $t0) (param $p0 i64) (result i64)
    (if $I0 (result i64) ;; $I0 is an unused label name
      (i64.eqz
        (local.get $p0)) ;; the name $p0 is the same as 0 here
      (then
        (i64.const 1))
      (else
        (i64.mul
          (local.get $p0)
          (call $f0      ;; the name $f0 is the same as 0 here
            (i64.sub
              (local.get $p0)
              (i64.const 1))))))))
```

A module is implicitly generated by the compiler. The function is referenced by an entry of the type table in the binary, hence a type section and the `type` emitted by the decompiler. The compiler and decompiler can be accessed online.

#### Memory and variables

Data in memory is stored in a large, growable array of bytes termed a *linear memory*. Linear memory is separate from the wasm module's [call stack](https://en.wikipedia.org/wiki/Call_stack) and code and the engine's memory. This allows running wasm code in the same process as the JavaScript virtual machine it's embedded in without violating memory safety.

A module contains a list of global variables separate from linear memory, which may be mutable or immutable. Functions declare a list of local variables. A function's parameters are also local variables.

Instructions operate on a [stack of values](https://en.wikipedia.org/wiki/Stack_machine). The stack layout is fixed (branches must push and pop the same number of operands), so wasm engines can compile the stack away, producing efficient machine code operations on registers, rather than managing a stack at runtime. A stack machine architecture was chosen as it can have higher code density than a [register machine](https://en.wikipedia.org/wiki/Register_machine).

#### Control flow

Unlike typical assembly languages, wasm only uses structured [control flow](https://en.wikipedia.org/wiki/Control_flow) similar to high-level programming languages. The intentional lack of support for [jump instructions](https://en.wikipedia.org/wiki/Branch_(computer_science)) makes it simple to validate and compile wasm code in a [single pass](https://en.wikipedia.org/wiki/One-pass_compiler), and makes it easier to read code disassembled into the text format.

Blocks are delimited with the `block`, `loop`, and `if`/`else` constructs. Branch instructions contain a label that identifies the depth of a block it is nested in: `br 0` will branch to the block the instruction is contained in, `br 1` will branch to the block that block is contained in, and so on. Branches to a `block` or `if` jump to the end of the block like a break statement, while branches to a `loop` jump back to the *beginning* of the loop, similar to a continue statement. The `br_table` instruction takes an input index and jumps to a target from a list of labels. A C-style switch statement can be expressed with a `br_table` inside a series of nested blocks.

Compilers targeting wasm convert unstructured control flow into high-level loops using Emscripten's Relooper algorithm, originally designed to target JavaScript.

#### Functions

Function declarations are listed in a separate section before the section containing the function bodies. [Function pointers](https://en.wikipedia.org/wiki/Function_pointers) are emulated using an index into the global functions table, since code is not inside the linear memory. Functions can also be imported and exported, providing the [foreign function interface](https://en.wikipedia.org/wiki/Foreign_function_interface) to communicate with JavaScript or other embedders.

## See also

* [Architecture Neutral Distribution Format](https://en.wikipedia.org/wiki/Architecture_Neutral_Distribution_Format) (ANDF)
* [UNCOL](https://en.wikipedia.org/wiki/UNCOL)
* [Java bytecode](https://en.wikipedia.org/wiki/Java_bytecode)
* [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime)
* [LLVM](https://en.wikipedia.org/wiki/LLVM)
* [Compiler](https://en.wikipedia.org/wiki/Compiler)
* [Software portability](https://en.wikipedia.org/wiki/Software_portability)

## Notes

1. **^** The asm.js file already provides near-native code execution speeds: "Even discarding the one score where asm.js did better, it executes at around 70% of the speed (i.e., slower) of native [C++](https://en.wikipedia.org/wiki/C%2B%2B) code. and can be considered a viable alternative for browsers that do not support WebAssembly or have it disabled for security reasons.
2. **^** For [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language))/Wasm development, third-party libraries can provide some of the necessary JavaScript I/O.
3. **^** "WebAssembly provides no access to the surrounding environment other than via the JavaScript API described in the JS API specification."
4. **^** There is an extension for Java adding [intrinsics](https://en.wikipedia.org/wiki/Intrinsic_function) for x86-64 SIMD instructions, that is not portable, i.e. not usable on ARM or smartphones.

## References

1. **^** ["WebAssembly/design/Semantics.md"](https://github.com/WebAssembly/design/blob/376bcc4b9cba79280d79be023d71e30d0b00ba47/Semantics.md). *GitHub*. [Archived](https://web.archive.org/web/20210615183125/https://github.com/WebAssembly/design/blob/376bcc4b9cba79280d79be023d71e30d0b00ba47/Semantics.md) from the original on 15 June 2021. Retrieved 23 February 2021. WebAssembly code can be considered a *structured stack machine*; a machine where most computations use a stack of values, but control flow is expressed in structured constructs such as blocks, ifs, and loops. In practice, implementations need not maintain an actual value stack, nor actual data structures for control; they need only behave as if they did so.
2. **^** Mozilla. ["Understanding WebAssembly text format"](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format). *MDN Web Docs*. [Archived](https://web.archive.org/web/20220205193242/https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format) from the original on 5 February 2022. Retrieved 9 December 2019.
3. **^** ["Introduction: WebAssembly 1.0"](https://webassembly.github.io/spec/core/intro/introduction.html). *webassembly.github.io*. [Archived](https://web.archive.org/web/20211122194356/https://webassembly.github.io/spec/core/intro/introduction.html) from the original on 22 November 2021. Retrieved 18 June 2019. WebAssembly is an open standard...
4. **^** ["Introduction: WebAssembly 1.0"](https://webassembly.github.io/spec/core/intro/introduction.html). *webassembly.github.io*. [Archived](https://web.archive.org/web/20211122194356/https://webassembly.github.io/spec/core/intro/introduction.html) from the original on 22 November 2021. Retrieved 18 June 2019. WebAssembly is a ... code format
5. ^   ["Conventions: WebAssembly 1.0"](https://webassembly.github.io/spec/core/syntax/conventions.html). *webassembly.github.io*. [Archived](https://web.archive.org/web/20190506193348/https://webassembly.github.io/spec/core/syntax/conventions.html) from the original on 6 May 2019. Retrieved 17 May 2019. WebAssembly is a programming language that has multiple concrete representations (its binary format and the text format). Both map to a common structure.
6. **^** ["Introduction: WebAssembly 1.0"](https://webassembly.github.io/spec/core/intro/introduction.html). *webassembly.github.io*. [Archived](https://web.archive.org/web/20211122194356/https://webassembly.github.io/spec/core/intro/introduction.html) from the original on 22 November 2021. Retrieved 18 June 2019. ... this specification is complemented by additional documents defining interfaces to specific embedding environments such as the Web. These will each define a WebAssembly application programming interface (API) suitable for a given environment.
7. **^** ["Introduction — WebAssembly 1.1"](https://webassembly.github.io/spec/core/intro/introduction.html). *webassembly.github.io*. [Archived](https://web.archive.org/web/20211122194356/https://webassembly.github.io/spec/core/intro/introduction.html) from the original on 22 November 2021. Retrieved 19 February 2021. Its main goal is to enable high performance applications on the Web, but it does not make any Web-specific assumptions or provide Web-specific features, so it can be employed in other environments as well.
8. **^** Haas, Andreas; Rossberg, Andreas; Schuff, Derek L.; Titzer, Ben L.; Holman, Michael; Gohman, Dan; Wagner, Luke; Zakai, Alon; Bastien, JF (14 June 2017). ["Bringing the Web Up to Speed with WebAssembly"](https://doi.org/10.1145%2F3140587.3062363). *SIGPLAN Notices*. **52** (6): 185–200. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3140587.3062363](https://doi.org/10.1145%2F3140587.3062363). [ISSN](https://en.wikipedia.org/wiki/ISSN_(identifier)) [0362-1340](https://search.worldcat.org/issn/0362-1340). While the Web is the primary motivation for WebAssembly, nothing in its design depends on the Web or a JavaScript environment. It is an open standard specifically designed for embedding in multiple contexts, and we expect that stand-alone implementations will become available in the future.
9. ^    ["Outside the web: standalone WebAssembly binaries using Emscripten · V8"](https://v8.dev/blog/emscripten-standalone-wasm#running-in-wasm-runtimes). *v8.dev*. [Archived](https://web.archive.org/web/20200719222947/https://v8.dev/blog/emscripten-standalone-wasm#running-in-wasm-runtimes) from the original on 19 July 2020. Retrieved 28 July 2020.
10. ^    ["Wasmer - The Universal WebAssembly Runtime"](https://wasmer.io/). *wasmer.io*. [Archived](https://web.archive.org/web/20210302014031/https://wasmer.io/) from the original on 2 March 2021. Retrieved 19 February 2021. Compile everything to WebAssembly. Run it on any OS or embed it into other languages.
11. **^** World Wide Web Consortium. ["WebAssembly Core Specification"](https://www.w3.org/TR/wasm-core-1/). *World Wide Web Consortium (W3)*. [Archived](https://web.archive.org/web/20191206110848/https://www.w3.org/TR/wasm-core-1/) from the original on 6 December 2019. Retrieved 9 December 2019.
12. **^** Couriol, Bruno. ["WebAssembly 1.0 Becomes a W3C Recommendation and the Fourth Language to Run Natively in Browsers"](https://www.infoq.com/news/2019/12/webassembly-w3c-recommendation/). *infoq.com*. [Archived](https://web.archive.org/web/20211125151735/https://www.infoq.com/news/2019/12/webassembly-w3c-recommendation/) from the original on 25 November 2021. Retrieved 9 December 2019.
13. **^** ["WebAssembly Specification — WebAssembly 1.1"](https://webassembly.github.io/spec/core/). *webassembly.github.io*. [Archived](https://web.archive.org/web/20220922054129/https://webassembly.github.io/spec/core/) from the original on 22 September 2022. Retrieved 22 March 2021.
14. **^** ["Programming Languages Software Award"](http://www.sigplan.org/Awards/Software/). *www.sigplan.org*. [Archived](https://web.archive.org/web/20221029011704/http://www.sigplan.org/Awards/Software/) from the original on 29 October 2022. Retrieved 5 October 2021.
15. **^** Bright, Peter (18 June 2015). ["The Web is getting its bytecode: WebAssembly"](https://arstechnica.com/information-technology/2015/06/the-web-is-getting-its-bytecode-webassembly/). *[Ars Technica](https://en.wikipedia.org/wiki/Ars_Technica)*. [Condé Nast](https://en.wikipedia.org/wiki/Cond%C3%A9_Nast). [Archived](https://web.archive.org/web/20190411190121/https://arstechnica.com/information-technology/2015/06/the-web-is-getting-its-bytecode-webassembly/) from the original on 11 April 2019. Retrieved 15 June 2017.
16. **^** ["New Bytecode Alliance Brings the Security, Ubiquity, and Interoperability of the Web to the World of Pervasive Computing"](https://blog.mozilla.org/press/2019/11/new-bytecode-alliance-brings-the-security-ubiquity-and-interoperability-of-the-web-to-the-world-of-pervasive-computing/). *Mozilla*. 12 November 2019. [Archived](https://web.archive.org/web/20191210040548/https://blog.mozilla.org/press/2019/11/new-bytecode-alliance-brings-the-security-ubiquity-and-interoperability-of-the-web-to-the-world-of-pervasive-computing/) from the original on 10 December 2019. Retrieved 27 May 2019.
17. **^** ["Launch bug"](https://github.com/WebAssembly/design/issues/150). *[GitHub](https://en.wikipedia.org/wiki/GitHub) / WebAssembly / design*. 11 June 2015. [Archived](https://web.archive.org/web/20211121074724/https://github.com/WebAssembly/design/issues/150) from the original on 21 November 2021. Retrieved 21 March 2016.
18. **^** Wagner, Luke (14 March 2016). ["A WebAssembly Milestone: Experimental Support in Multiple Browsers"](https://hacks.mozilla.org/2016/03/a-webassembly-milestone/). *Mozilla Hacks*. [Archived](https://web.archive.org/web/20170811143725/https://hacks.mozilla.org/2016/03/a-webassembly-milestone/) from the original on 11 August 2017. Retrieved 21 March 2016.
19. **^** Thompson, Seth (15 March 2016). ["Experimental support for WebAssembly in V8"](https://v8project.blogspot.com/2016/03/experimental-support-for-webassembly.html). *V8 Blog*. [Archived](https://web.archive.org/web/20180209085419/https://v8project.blogspot.com/2016/03/experimental-support-for-webassembly.html) from the original on 9 February 2018. Retrieved 25 July 2019.
20. **^** Zhu, Limin (15 March 2016). ["Previewing WebAssembly experiments in Microsoft Edge"](https://blogs.windows.com/msedgedev/2016/03/15/previewing-webassembly-experiments/). *Microsoft Edge dev blog*. [Archived](https://web.archive.org/web/20210818082723/https://blogs.windows.com/msedgedev/2016/03/15/previewing-webassembly-experiments/) from the original on 18 August 2021. Retrieved 21 March 2016.
21. **^** Lardinois, Frederic (17 June 2015). ["Google, Microsoft, Mozilla And Others Team Up To Launch WebAssembly, A New Binary Format For The Web"](https://techcrunch.com/2015/06/17/google-microsoft-mozilla-and-others-team-up-to-launch-webassembly-a-new-binary-format-for-the-web/). *TechCrunch*. [Archived](https://web.archive.org/web/20180117072109/https://techcrunch.com/2015/06/17/google-microsoft-mozilla-and-others-team-up-to-launch-webassembly-a-new-binary-format-for-the-web/) from the original on 17 January 2018. Retrieved 24 December 2017.
22. **^** Avram, Abel (31 May 2017). ["Google Is to Remove Support for PNaCl"](https://www.infoq.com/news/2017/05/pnacl-webassembly-google). *InfoQ*. [Archived](https://web.archive.org/web/20171223102925/https://www.infoq.com/news/2017/05/pnacl-webassembly-google) from the original on 23 December 2017. Retrieved 22 December 2017.
23. **^** ["WebAssembly: a binary format for the web"](https://www.2ality.com/2015/06/web-assembly.html). *②ality – JavaScript and more*. 18 June 2015. [Archived](https://web.archive.org/web/20231106132841/https://2ality.com/2015/06/web-assembly.html) from the original on 6 November 2023. Retrieved 25 July 2019.
24. **^** ["Staring at the Sun: Dalvik vs. ASM.js vs. Native"](https://blog.mozilla.org/javascript/2013/08/01/staring-at-the-sun-dalvik-vs-spidermonkey/). *blog.mozilla.org*. August 2013. [Archived](https://web.archive.org/web/20191207155602/https://blog.mozilla.org/javascript/2013/08/01/staring-at-the-sun-dalvik-vs-spidermonkey/) from the original on 7 December 2019. Retrieved 7 December 2019.
25. ^    Krill, Paul (6 March 2017). ["WebAssembly is now ready for browsers to use"](https://www.infoworld.com/article/3176681/). *InfoWorld*. [Archived](https://web.archive.org/web/20200401050237/https://www.infoworld.com/article/3176681/webassembly-is-now-ready-for-browsers-to-use.html) from the original on 1 April 2020. Retrieved 23 December 2017.
26. **^** ["WebAssembly First Public Working Drafts"](https://www.w3.org/blog/news/archives/6838). W3C. 15 February 2018. [Archived](https://web.archive.org/web/20210716150641/https://www.w3.org/blog/news/archives/6838) from the original on 16 July 2021. Retrieved 20 April 2018.
27. **^** ["WebAssembly Core Specification"](https://www.w3.org/TR/2018/WD-wasm-core-1-20180215/). W3C. 15 February 2018. [Archived](https://web.archive.org/web/20210308171158/https://www.w3.org/TR/2018/WD-wasm-core-1-20180215/) from the original on 8 March 2021. Retrieved 20 April 2018.
28. **^** ["WebAssembly JavaScript Interface"](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180215/). W3C. 15 February 2018. [Archived](https://web.archive.org/web/20201130203818/https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180215/) from the original on 30 November 2020. Retrieved 20 April 2018.
29. **^** ["WebAssembly Web API"](https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180215/). W3C. 15 February 2018. [Archived](https://web.archive.org/web/20210419005848/https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180215/) from the original on 19 April 2021. Retrieved 20 April 2018.
30. ^       Haas, Andreas; Rossberg, Andreas; Schuff, Derek L.; Titzer, Ben L.; Holman, Michael; Gohman, Dan; Wagner, Luke; Zakai, Alon; Bastien, JF (14 June 2017). "Bringing the web up to speed with WebAssembly". *Proceedings of the 38th ACM SIGPLAN Conference on Programming Language Design and Implementation*. PLDI 2017. New York, NY, USA: [Association for Computing Machinery](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery). pp. 185–200. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3062341.3062363](https://doi.org/10.1145%2F3062341.3062363). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-4988-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-4988-8).
31. **^** ["WebAssembly Worker Based Threads - Chrome Platform Status"](https://chromestatus.com/feature/5724132452859904). *chromestatus.com*. [Archived](https://web.archive.org/web/20220219194348/https://chromestatus.com/feature/5724132452859904) from the original on 19 February 2022. Retrieved 19 February 2022.
32. **^** ["Feature Status - WebAssembly"](https://webassembly.org/features/). *webassembly.org*. Retrieved 5 January 2026.
33. **^** [*WebAssembly/threads*](https://github.com/WebAssembly/threads), WebAssembly, 3 January 2026, retrieved 5 January 2026
34. **^** ["Wasm 2.0 Completed - WebAssembly"](https://webassembly.org/news/2025-03-20-wasm-2.0/). *webassembly.org*. Retrieved 5 January 2026.
35. **^** ["Wasm 3.0 Completed - WebAssembly"](https://webassembly.org/news/2025-09-17-wasm-3.0/). *webassembly.org*. Retrieved 5 January 2026.
36. **^** ["WebAssembly Garbage Collection (WasmGC) now enabled by default in Chrome"](https://developer.chrome.com/blog/wasmgc). Retrieved 11 December 2023.
37. **^** ["A new way to bring garbage collected programming languages efficiently to WebAssembly"](https://v8.dev/blog/wasm-gc-porting#demo-and-status). *V8.dev*. Retrieved 11 December 2023.
38. **^** Kotas, Jan (18 September 2025). ["[wasm][post-MVP] garbage collection proposal in .NET"](https://github.com/dotnet/runtime/issues/94420#issuecomment-3305321393). *GitHub*. Retrieved 2 February 2026. WASM-GC does not have capabilities required by .NET runtime. It is not possible to replace .NET runtime's GC with WASM-GC.
39. **^** ["Non-Web Embeddings"](https://webassembly.org/docs/non-web/). *WebAssembly*. [Archived](https://web.archive.org/web/20190515113613/https://webassembly.org/docs/non-web/) from the original on 15 May 2019. Retrieved 15 May 2019.
40. **^** ["Non-Web Embeddings"](https://github.com/WebAssembly/design/blob/master/NonWeb.md). *[GitHub](https://en.wikipedia.org/wiki/GitHub) / WebAssembly*. [Archived](https://web.archive.org/web/20201113115203/https://github.com/WebAssembly/design/blob/master/NonWeb.md) from the original on 13 November 2020. Retrieved 15 May 2019.
41. **^** Freese, Danny (October 3, 2023). ["Proxy-Wasm: It's WebAssembly for Proxies"](https://konghq.com/blog/engineering/proxy-wasm). Blog. *[Kong](https://en.wikipedia.org/wiki/Kong_Inc.)*. Retrieved 2024-05-06.
42. **^** ["proxy-wasm/spec: WebAssembly for Proxies (ABI specification)"](https://github.com/proxy-wasm/spec). *[GitHub](https://en.wikipedia.org/wiki/GitHub)*. [Archived](https://web.archive.org/web/20240506195418/https://github.com/proxy-wasm/spec) from the original on 6 May 2024. Retrieved 6 May 2024.
43. **^** ["WebAssembly support now shipping in all major browsers"](https://blog.mozilla.org/blog/2017/11/13/webassembly-in-browsers/). *The Mozilla Blog*. [Archived](https://web.archive.org/web/20191031205718/https://blog.mozilla.org/blog/2017/11/13/webassembly-in-browsers/) from the original on 31 October 2019. Retrieved 21 November 2017.
44. **^** ["Introducing new JavaScript optimizations, WebAssembly, SharedArrayBuffer, and Atomics in EdgeHTML 16"](https://blogs.windows.com/msedgedev/2017/10/31/optimizations-webassembly-sharedarraybuffer-atomics-edgehtml-16/). *Microsoft Edge Dev Blog*. 31 October 2017. [Archived](https://web.archive.org/web/20171115015019/https://blogs.windows.com/msedgedev/2017/10/31/optimizations-webassembly-sharedarraybuffer-atomics-edgehtml-16/) from the original on 15 November 2017. Retrieved 21 November 2017.
45. **^** ["WebAssembly | Can I use... Support tables for HTML5, CSS3, etc"](https://caniuse.com/wasm). *canIuse.com*. [Archived](https://web.archive.org/web/20211113062453/https://caniuse.com/wasm) from the original on 13 November 2021. Retrieved 1 March 2024.
46. **^** ["asm.js | Can I use... Support tables for HTML5, CSS3, etc"](https://caniuse.com/asmjs). *caniuse.com*. Retrieved 29 September 2024.
47. **^** ["WebAssembly Reference Types | Can I use... Support tables for HTML5, CSS3, etc"](https://caniuse.com/wasm-reference-types). *caniuse.com*. Retrieved 3 March 2024.
48. **^** ["Wasmtime — a small and efficient runtime for WebAssembly & WASI"](https://wasmtime.dev/). *wasmtime.dev*. [Archived](https://web.archive.org/web/20201204101750/http://wasmtime.dev/) from the original on 4 December 2020. Retrieved 18 December 2020.
49. **^** ["Roadmap"](https://webassembly.org/roadmap/). [Archived](https://web.archive.org/web/20211207095013/https://webassembly.org/roadmap/) from the original on 7 December 2021. Retrieved 7 December 2021.
50. **^** Wingo, Andy (30 June 2025). ["WebAssembly: Yes, but for What?"](https://queue.acm.org/detail.cfm?id=3746171). *[ACM Queue](https://en.wikipedia.org/wiki/ACM_Queue)*. **23** (3): 18–30. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3746171](https://doi.org/10.1145%2F3746171).
51. **^** Ball, Kevin (26 June 2018). ["How WebAssembly is Accelerating the Future of Web Development"](https://web.archive.org/web/20190212141715/https://zendev.com/2018/06/26/webassembly-accelerating-future-web-development.html). Archived from [the original](https://zendev.com/2018/06/26/webassembly-accelerating-future-web-development.html) on 12 February 2019. Retrieved 22 October 2018.
52. **^** ["LLVM 8.0.0 Release Notes — LLVM 8 documentation"](https://releases.llvm.org/8.0.0/docs/ReleaseNotes.html#changes-to-the-webassembly-target). [Archived](https://web.archive.org/web/20191022040310/http://releases.llvm.org/8.0.0/docs/ReleaseNotes.html#changes-to-the-webassembly-target) from the original on 22 October 2019. Retrieved 22 October 2019.
53. ^    ["Awesome WebAssembly Languages"](https://github.com/appcypher/awesome-wasm-langs). *[GitHub](https://en.wikipedia.org/wiki/GitHub)*. 26 June 2018. [Archived](https://web.archive.org/web/20190212133939/https://github.com/appcypher/awesome-wasm-langs) from the original on 12 February 2019. Retrieved 15 February 2022.
54. **^** Krill, Paul (29 November 2017). ["Direct WebAssembly compilation comes to Rust language"](https://www.infoworld.com/article/3239129/). *InfoWorld*. [Archived](https://web.archive.org/web/20200401050237/https://www.infoworld.com/article/3239129/rust-language-gets-direct-webassembly-compilation.html) from the original on 1 April 2020. Retrieved 24 December 2017.
55. **^** ["AssemblyScript/assemblyscript"](https://github.com/AssemblyScript/assemblyscript). The AssemblyScript Project. 9 September 2020. [Archived](https://web.archive.org/web/20200911072903/https://github.com/AssemblyScript/assemblyscript) from the original on 11 September 2020. Retrieved 9 September 2020.
56. **^** Bonventre, Andrew (24 August 2018). ["Go 1.11 is released"](https://go.dev/blog/go1.11). *The Go Blog*. [Archived](https://web.archive.org/web/20250614013104/https://go.dev/blog/go1.11) from the original on 14 June 2025. Retrieved 11 August 2025.
57. **^** ["Frequently asked questions (FAQ) about Blazor"](https://blazor.net/docs/introduction/faq.html). [Archived](https://web.archive.org/web/20180618230619/https://blazor.net/docs/introduction/faq.html) from the original on 18 June 2018. Retrieved 18 June 2018.
58. **^** ["Bolero: F# in WebAssembly"](https://fsbolero.io/). *fsbolero.io*. [Archived](https://web.archive.org/web/20190604231948/https://fsbolero.io/) from the original on 4 June 2019. Retrieved 25 July 2019.
59. **^** ["Running F# in WebAssembly with Bolero"](https://learn.microsoft.com/en-us/shows/on-dotnet/f-sharp-wasm). *Microsoft Learn*. Microsoft. 20 November 2019. Retrieved 17 September 2025.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web)}}`:  CS1 maint: deprecated archival service ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_deprecated_archival_service))
60. **^** ["Pyodide: Bringing the scientific Python stack to the browser – Mozilla Hacks"](https://hacks.mozilla.org/2019/04/pyodide-bringing-the-scientific-python-stack-to-the-browser). [Archived](https://web.archive.org/web/20200903004718/https://hacks.mozilla.org/2019/04/pyodide-bringing-the-scientific-python-stack-to-the-browser/) from the original on 3 September 2020. Retrieved 9 September 2020.
61. **^** ["Java to WebAssembly Compiler - CheerpJ"](https://leaningtech.com/cheerpj/). [Archived](https://web.archive.org/web/20230427165424/https://leaningtech.com/cheerpj/) from the original on 27 April 2023. Retrieved 27 April 2023.
62. **^** ["JWebAssembly"](https://github.com/i-net-software/JWebAssembly). 27 April 2023. [Archived](https://web.archive.org/web/20230427172728/https://github.com/i-net-software/JWebAssembly) from the original on 27 April 2023. Retrieved 27 April 2023 – via GitHub.
63. **^** ["TeaVM: Overview"](https://www.teavm.org/docs/intro/overview.html). [Archived](https://web.archive.org/web/20230427165425/https://www.teavm.org/docs/intro/overview.html) from the original on 27 April 2023. Retrieved 27 April 2023.
64. **^** ["Bringing Kotlin to the Web"](https://developers.googleblog.com/2023/05/bringing-kotlin-to-web.html). Retrieved 11 December 2023.
65. **^** Deleuze, Sébastien (13 February 2023). ["The huge potential of Kotlin/Wasm"](https://seb.deleuze.fr/the-huge-potential-of-kotlin-wasm/). Retrieved 11 December 2023.
66. **^** ["Using the GHC WebAssembly backend"](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/wasm.html). [Archived](https://web.archive.org/web/20250501141624/https://ghc.gitlab.haskell.org/ghc/doc/users_guide/wasm.html) from the original on 1 May 2025. Retrieved 1 May 2025.
67. **^** ["Julia in the Browser"](https://nextjournal.com/sdanisch/wasm-julia). *nextjournal.com*. [Archived](https://web.archive.org/web/20190324202004/https://nextjournal.com/sdanisch/wasm-julia) from the original on 24 March 2019. Retrieved 9 April 2019.
68. **^** ["MRuby in Your Browser"](https://ruby.dj/). *ruby.dj*. [Archived](https://web.archive.org/web/20190808160622/http://ruby.dj/) from the original on 8 August 2019. Retrieved 25 July 2019.
69. **^** Paul Krill (24 August 2020). ["Ring language upgrade focuses on WebAssembly"](https://www.infoworld.com/article/3572395/ring-language-upgrade-focuses-on-webassembly.html). InfoWorld. [Archived](https://web.archive.org/web/20201014234517/https://www.infoworld.com/article/3572395/ring-language-upgrade-focuses-on-webassembly.html) from the original on 14 October 2020. Retrieved 17 August 2024.
70. **^** ["WebAssembly (Wasm) compilation"](https://dart.dev/web/wasm/). *dart.dev*. Retrieved 21 December 2025.
71. **^** ["Hoot: Scheme on WebAssembly"](https://spritely.institute/hoot/). Retrieved 11 March 2026.
72. **^** ["stdweb - Rust"](https://docs.rs/stdweb/*/stdweb/). *docs.rs*. [Archived](https://web.archive.org/web/20190221034928/https://docs.rs/stdweb/%2A/stdweb/) from the original on 21 February 2019. Retrieved 5 June 2019. The goal of this crate is to provide Rust bindings to the Web APIs and to allow a high degree of interoperability between Rust and JavaScript.
73. **^** ["web_sys - Rust"](https://docs.rs/web-sys/*/web_sys/). *docs.rs*. [Archived](https://web.archive.org/web/20200515170424/https://docs.rs/web-sys/0.3.39/web_sys/) from the original on 15 May 2020. Retrieved 5 June 2019. Raw API bindings for Web APIs. This is a procedurally generated crate from browser WebIDL which provides a binding to all APIs that browser provide on the web.
74. **^** ["The State of WebAssembly 2023"](https://blog.scottlogic.com/2023/10/18/the-state-of-webassembly-2023.html). Scott Logic. 18 October 2023. [Archived](https://web.archive.org/web/20240314053648/https://blog.scottlogic.com/2023/10/18/the-state-of-webassembly-2023.html) from the original on 14 March 2024. Retrieved 14 March 2024.
75. **^** ["Wasm needs a better memory management story · Issue #1397 · WebAssembly/design"](https://github.com/WebAssembly/design/issues/1397). *GitHub*. [Archived](https://web.archive.org/web/20210327143806/https://github.com/WebAssembly/design/issues/1397) from the original on 27 March 2021. Retrieved 15 February 2021.
76. **^** ["WebAssembly/content-security-policy"](https://github.com/WebAssembly/content-security-policy). *GitHub*. [Archived](https://web.archive.org/web/20200912000113/https://github.com/WebAssembly/content-security-policy) from the original on 12 September 2020. Retrieved 17 February 2021.
77. **^** ["948834 - chromium - An open-source project to help move the web forward. - Monorail"](https://bugs.chromium.org/p/chromium/issues/detail?id=948834&can=1&q=wasm-eval). *bugs.chromium.org*. [Archived](https://web.archive.org/web/20210602213145/https://bugs.chromium.org/p/chromium/issues/detail?id=948834&can=1&q=wasm-eval) from the original on 2 June 2021. Retrieved 17 February 2021.
78. ^   ["No way to use WebAssembly on Chrome without 'unsafe-eval' · Issue #7 · WebAssembly/content-security-policy"](https://github.com/WebAssembly/content-security-policy/issues/7). *GitHub*. [Archived](https://web.archive.org/web/20210318122510/https://github.com/WebAssembly/content-security-policy/issues/7) from the original on 18 March 2021. Retrieved 17 February 2021.
79. **^** Cimpanu, Catalin (24 June 2018). ["Changes in WebAssembly Could Render Meltdown and Spectre Browser Patches Useless"](https://www.bleepingcomputer.com/news/security/changes-in-webassembly-could-render-meltdown-and-spectre-browser-patches-useless/). [Bleeping Computer](https://en.wikipedia.org/wiki/Bleeping_Computer). [Archived](https://web.archive.org/web/20190710075136/https://www.bleepingcomputer.com/news/security/changes-in-webassembly-could-render-meltdown-and-spectre-browser-patches-useless/) from the original on 10 July 2019. Retrieved 8 June 2019.
80. **^** Sanders, James (25 June 2018). ["How opaque WebAssembly code could increase the risk of Spectre attacks online"](https://www.techrepublic.com/article/how-opaque-webassembly-code-could-increase-the-risk-of-spectre-attacks-online/). *[Tech Republic](https://en.wikipedia.org/wiki/Tech_Republic)*. [Archived](https://web.archive.org/web/20190609002418/https://www.techrepublic.com/article/how-opaque-webassembly-code-could-increase-the-risk-of-spectre-attacks-online/) from the original on 9 June 2019. Retrieved 9 June 2019.
81. **^** R, Bhagyashree (30 October 2018). ["Google Chrome 70 now supports WebAssembly threads to build multi-threaded web applications"](https://hub.packtpub.com/google-chrome-70-now-supports-webassembly-threads-to-build-multi-threaded-web-applications/). *[Packt Pub](https://en.wikipedia.org/wiki/Packt)*. [Archived](https://web.archive.org/web/20190418150553/https://hub.packtpub.com/google-chrome-70-now-supports-webassembly-threads-to-build-multi-threaded-web-applications/) from the original on 18 April 2019. Retrieved 9 June 2019.
82. ^   Lonkar, Aishwarya; Chandrayan, Siddhesh (October 2018). ["The dark side of WebAssembly"](https://www.virusbulletin.com/virusbulletin/2018/10/dark-side-webassembly/). *[Virus Bulletin](https://en.wikipedia.org/wiki/Virus_Bulletin)*. [Archived](https://web.archive.org/web/20190609000917/https://www.virusbulletin.com/virusbulletin/2018/10/dark-side-webassembly/) from the original on 9 June 2019. Retrieved 8 June 2019.
83. **^** Segura, Jérôme (29 November 2017). ["Persistent drive-by cryptomining coming to a browser near you"](https://blog.malwarebytes.com/cybercrime/2017/11/persistent-drive-by-cryptomining-coming-to-a-browser-near-you/). [Malwarebytes](https://en.wikipedia.org/wiki/Malwarebytes). [Archived](https://web.archive.org/web/20190415222635/https://blog.malwarebytes.com/cybercrime/2017/11/persistent-drive-by-cryptomining-coming-to-a-browser-near-you/) from the original on 15 April 2019. Retrieved 8 June 2019.
84. **^** ["Recent Study Estimates That 50% of Websites Using WebAssembly Apply It for Malicious Purposes"](https://www.infoq.com/news/2019/10/WebAssembly-wasm-malicious-usage/). *InfoQ*. [Archived](https://web.archive.org/web/20191031231650/https://www.infoq.com/news/2019/10/WebAssembly-wasm-malicious-usage/) from the original on 31 October 2019. Retrieved 3 November 2019.
85. **^** Musch, Marius; Wressnegger, Christian; Johns, Martin; Rieck, Konrad (June 2019). "New Kid on the Web: A Study on the Prevalence of WebAssembly in the Wild". [*Detection of Intrusions and Malware, and Vulnerability Assessment*](https://web.archive.org/web/20220726131621/https://www.sec.cs.tu-bs.de/pubs/2019a-dimva.pdf) (PDF). Lecture Notes in Computer Science. Vol. 11543. Detection of Intrusions and Malware, and Vulnerability Assessment. pp. 23–42. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1007/978-3-030-22038-9_2](https://doi.org/10.1007%2F978-3-030-22038-9_2). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-3-030-22037-2](https://en.wikipedia.org/wiki/Special:BookSources/978-3-030-22037-2). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [184482682](https://api.semanticscholar.org/CorpusID:184482682). Archived from [the original](https://www.sec.cs.tu-bs.de/pubs/2019a-dimva.pdf) (PDF) on 26 July 2022. Retrieved 15 February 2022. [Slides (PDF)](https://www.dimva2019.org/wp-content/uploads/sites/31/2019/06/DIMVA19-slides-2-R.pdf) [Archived](https://web.archive.org/web/20191103054140/https://www.dimva2019.org/wp-content/uploads/sites/31/2019/06/DIMVA19-slides-2-R.pdf) 3 November 2019 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
86. **^** Aaron Hilbig, Daniel Lehmann, and Michael Pradel (April 2021). "An Empirical Study of Real-World WebAssembly Binaries: Security, Languages, Use Cases." (Archived April 2021) [https://software-lab.org/publications/www2021.pdf](https://software-lab.org/publications/www2021.pdf)
87. **^** Watt, Conrad (8 January 2018). ["Mechanising and verifying the WebAssembly specification"](https://dl.acm.org/doi/10.1145/3167082). [*Proceedings of the 7th ACM SIGPLAN International Conference on Certified Programs and Proofs*](https://www.repository.cam.ac.uk/handle/1810/274174). CPP 2018. Los Angeles CA USA: ACM. pp. 53–65. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3167082](https://doi.org/10.1145%2F3167082). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-5586-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-5586-5). [S2CID](https://en.wikipedia.org/wiki/S2CID_(identifier)) [9401691](https://api.semanticscholar.org/CorpusID:9401691). [Archived](https://web.archive.org/web/20210301142910/https://www.repository.cam.ac.uk/handle/1810/274174) from the original on 1 March 2021. Retrieved 9 August 2023.
88. **^** Jangda, Abhinav; Powers, Bobby; Berger, Emery; Guha, Arjun (31 May 2019). [*Not So Fast: Analyzing the Performance of WebAssembly vs. Native Code*](https://www.usenix.org/sites/default/files/atc19-full-proceedings.pdf) (PDF). 2019 USENIX Annual Technical Conference. Renton, WA. pp. 107–120. [arXiv](https://en.wikipedia.org/wiki/ArXiv_(identifier)):[1901.09056v3](https://arxiv.org/abs/1901.09056v3). [OCLC](https://en.wikipedia.org/wiki/OCLC_(identifier)) [1106328738](https://search.worldcat.org/oclc/1106328738). [Archived](https://web.archive.org/web/20250320100609/https://www.usenix.org/sites/default/files/atc19-full-proceedings.pdf) (PDF) from the original on 20 March 2025. Retrieved 20 March 2025.
89. **^** Yan, Yutian; Tu, Tengfei; Zhao, Lijian; Zhou, Yuchen; Wang, Weihang (2 November 2021). ["Understanding the performance of webassembly applications"](https://weihang-wang.github.io/slides/Yan-IMC21.pptx). *Proceedings of the 21st ACM Internet Measurement Conference*. pp. 533–549. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/3487552.3487827](https://doi.org/10.1145%2F3487552.3487827). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-9129-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-9129-0).
90. **^** De Macedo, Joao; Abreu, Rui; Pereira, Rui; Saraiva, Joao (June 2022). "WebAssembly versus JavaScript: Energy and Runtime Performance". *2022 International Conference on ICT for Sustainability (ICT4S)*. pp. 24–34. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1109/ICT4S55073.2022.00014](https://doi.org/10.1109%2FICT4S55073.2022.00014). [hdl](https://en.wikipedia.org/wiki/Hdl_(identifier)):[1822/90291](https://hdl.handle.net/1822%2F90291). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-6654-8286-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-6654-8286-8).
91. **^** ["Zaplib post-mortem"](https://zaplib.com/docs/blog_post_mortem.html). *zaplib.com*. April 2022. [Archived](https://web.archive.org/web/20240321031950/https://zaplib.com/docs/blog_post_mortem.html) from the original on 21 March 2024. Retrieved 14 March 2024.
92. **^** Denis, Frank (4 January 2023). ["Performance of WebAssembly runtimes in 2023"](https://00f.net/2023/01/04/webassembly-benchmark-2023/). *00f.net*. Retrieved 6 December 2024.
93. **^** ["WebAssembly Web API"](https://webassembly.github.io/spec/web-api/index.html#security-considerations). *webassembly.github.io*. [Archived](https://web.archive.org/web/20241209175823/https://webassembly.github.io/spec/web-api/index.html#security-considerations) from the original on 9 December 2024. Retrieved 6 December 2024.
94. **^** Kambale, Enoch. ["WebAssembly in 2024: Promises, Challenges, and the Road Ahead"](https://blog.enkambale.com/webassembly-2024-state-of-wasm/). *blog.enkambale.com*. [Archived](https://web.archive.org/web/20250117145016/https://blog.enkambale.com/webassembly-2024-state-of-wasm/) from the original on 17 January 2025. Retrieved 6 December 2024.
95. **^** ["WebAssembly System Interface Repo"](https://github.com/WebAssembly/WASI). *[GitHub](https://en.wikipedia.org/wiki/GitHub): WebAssembly*. 10 February 2020. [Archived](https://web.archive.org/web/20221030175015/https://github.com/WebAssembly/WASI) from the original on 30 October 2022. Retrieved 15 May 2019.
96. **^** ["Additional background on Capabilities"](https://github.com/bytecodealliance/wasmtime/blob/master/docs/WASI-capabilities.md). *GitHub*. bytecodealliance. 4 March 2022. [Archived](https://web.archive.org/web/20200224185640/https://github.com/bytecodealliance/wasmtime/blob/master/docs/WASI-capabilities.md) from the original on 24 February 2020. Retrieved 8 April 2020.
97. **^** ["Standardizing WASI: A system interface to run WebAssembly outside the web"](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/). *Mozilla Hacks: the Web developer blog*. [Archived](https://web.archive.org/web/20221030175011/https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/) from the original on 30 October 2022. Retrieved 9 April 2020.
98. **^** ["reference-sysroot Repo"](https://github.com/WebAssembly/reference-sysroot). *[GitHub](https://en.wikipedia.org/wiki/GitHub): WebAssembly*. 12 January 2020. [Archived](https://web.archive.org/web/20220821053218/https://github.com/WebAssembly/reference-sysroot) from the original on 21 August 2022. Retrieved 15 May 2019.
99. **^** ["wasm-c-api Repo"](https://github.com/WebAssembly/wasm-c-api). *[GitHub](https://en.wikipedia.org/wiki/GitHub): WebAssembly*. 3 February 2020. [Archived](https://web.archive.org/web/20221031072623/https://github.com/WebAssembly/wasm-c-api) from the original on 31 October 2022. Retrieved 15 May 2019.
100. **^** [*NuxiNL/cloudlibc*](https://github.com/NuxiNL/cloudlibc), Nuxi, 6 December 2024, [archived](https://web.archive.org/web/20250401092414/https://github.com/NuxiNL/cloudlibc) from the original on 1 April 2025, retrieved 1 April 2025
101. **^** Hykes, Solomon (27 March 2019). ["Solomon Hykes on X"](https://x.com/solomonstre/status/1111004913222324225). *[Twitter](https://en.wikipedia.org/wiki/Twitter)*. [Archived](https://web.archive.org/web/20240531020223/https://x.com/solomonstre/status/1111004913222324225) from the original on 31 May 2024. Retrieved 29 September 2024.
102. **^** ["WASI and the WebAssembly Component Model: Current Status - eunomia"](https://eunomia.dev/blog/2025/02/16/wasi-and-the-webassembly-component-model-current-status/). *eunomia.dev*. Retrieved 30 March 2026.
103. ^   ["Why the Component Model? - The WebAssembly Component Model"](https://component-model.bytecodealliance.org/design/why-component-model.html). *component-model.bytecodealliance.org*. Retrieved 30 March 2026.
104. **^** Dice, Joel (13 March 2025). ["Looking Ahead to WASIp3"](https://www.fermyon.com/blog/looking-ahead-to-wasip3). *www.fermyon.com*. Retrieved 30 March 2026.
105. **^** WebAssembly. ["component-model/design/mvp/Concurrency.md at main · WebAssembly/component-model"](https://github.com/WebAssembly/component-model/blob/main/design/mvp/Concurrency.md). *GitHub*. Retrieved 30 March 2026.
106. **^** ["WIT Reference - The WebAssembly Component Model"](https://component-model.bytecodealliance.org/design/wit.html). *component-model.bytecodealliance.org*. Retrieved 30 March 2026.
107. **^** Gohman, Dan (25 January 2024). ["WASI 0.2 Launched"](https://bytecodealliance.org/articles/WASI-0.2). *Bytecode Alliance*. Retrieved 30 March 2026.
108. **^** ["Why is WebAssembly a second-class language on the web? – Mozilla Hacks - the Web developer blog"](https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web). *Mozilla Hacks – the Web developer blog*. Retrieved 30 March 2026.
109. **^** ["Design Rationale"](https://github.com/WebAssembly/design/blob/main/Rationale.md#why-a-stack-machine). *[GitHub](https://en.wikipedia.org/wiki/GitHub) / WebAssembly / design*. 1 October 2016. [Archived](https://web.archive.org/web/20220925175844/https://github.com/WebAssembly/design/blob/main/Rationale.md#why-a-stack-machine) from the original on 25 September 2022. Retrieved 25 September 2022.
110. **^** ["WebAssembly High-Level Goals"](https://github.com/WebAssembly/design/blob/main/HighLevelGoals.md). *[GitHub](https://en.wikipedia.org/wiki/GitHub) / WebAssembly / design*. 11 December 2015. [Archived](https://web.archive.org/web/20220925175845/https://github.com/WebAssembly/design/blob/main/HighLevelGoals.md) from the original on 25 September 2022. Retrieved 25 September 2022.
111. **^** ["Portability - WebAssembly"](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution). *webassembly.org*. [Archived](https://web.archive.org/web/20200728070343/https://webassembly.org/docs/portability/#assumptions-for-efficient-execution) from the original on 28 July 2020. Retrieved 28 July 2020.
112. **^** ["Conventions — WebAssembly 1.0"](https://webassembly.github.io/spec/core/syntax/conventions.html). *webassembly.github.io*. [Archived](https://web.archive.org/web/20190506193348/https://webassembly.github.io/spec/core/syntax/conventions.html) from the original on 6 May 2019. Retrieved 12 November 2019.
113. **^** ["Introduction: WebAssembly 1.0"](https://webassembly.github.io/spec/core/intro/introduction.html?highlight=isa#scope). *webassembly.github.io*. [Archived](https://web.archive.org/web/20210602213516/https://webassembly.github.io/spec/core/intro/introduction.html?highlight=isa#scope) from the original on 2 June 2021. Retrieved 17 May 2019.
114. **^** ["Instructions — WebAssembly 1.0"](https://webassembly.github.io/spec/core/syntax/instructions.html). *webassembly.github.io*. [Archived](https://web.archive.org/web/20191021072455/http://webassembly.github.io/spec/core/syntax/instructions.html) from the original on 21 October 2019. Retrieved 12 November 2019.
115. **^** Lively, Thomas (19 February 2021) [Pull Request opened on 2021-02-05]. ["Final opcodes by tlively · Pull Request #452 · WebAssembly/simd · GitHub"](https://github.com/WebAssembly/simd/pull/452). Bytecode Alliance. [Archived](https://web.archive.org/web/20221030175009/https://github.com/WebAssembly/simd/pull/452) from the original on 30 October 2022. Retrieved 12 May 2021 – via [GitHub](https://en.wikipedia.org/wiki/GitHub).
116. **^** Delendik, Yury (19 February 2021) [SIMD changes committed on 2021-02-19]. ["File wasm-tools/expr.rs at b5c3d98e40590512a3b12470ef358d5c7b983b15 · bytecodealliance/wasm-tools · GitHub"](https://github.com/bytecodealliance/wasm-tools/blob/b5c3d98e40590512a3b12470ef358d5c7b983b15/crates/wast/src/ast/expr.rs). Bytecode Alliance. [Archived](https://web.archive.org/web/20220522082444/https://github.com/bytecodealliance/wasm-tools/blob/b5c3d98e40590512a3b12470ef358d5c7b983b15/crates/wast/src/ast/expr.rs) from the original on 22 May 2022. Retrieved 12 May 2021 – via [GitHub](https://en.wikipedia.org/wiki/GitHub).
117. **^** ["Update interpreter and text with finalized opcodes by ngzhian · Pull Request #486 · WebAssembly/simd"](https://github.com/WebAssembly/simd/pull/486). *GitHub*. [Archived](https://web.archive.org/web/20221030175015/https://github.com/WebAssembly/simd/pull/486) from the original on 30 October 2022. Retrieved 14 May 2021.
118. **^** ["WebAssembly/simd"](https://github.com/WebAssembly/simd). *GitHub*. [Archived](https://web.archive.org/web/20210510003141/https://github.com/WebAssembly/simd) from the original on 10 May 2021. Retrieved 14 May 2021.
119. **^** ["How we made the JVM 40x faster"](https://astojanov.github.io/blog/2017/12/20/scala-simd.html). *astojanov.github.io*. [Archived](https://web.archive.org/web/20201226051410/https://astojanov.github.io/blog/2017/12/20/scala-simd.html) from the original on 26 December 2020. Retrieved 17 February 2021.
120. **^** [*WebAssembly/relaxed-simd*](https://github.com/WebAssembly/relaxed-simd), WebAssembly, 3 May 2021, [archived](https://web.archive.org/web/20220417182748/https://github.com/WebAssembly/relaxed-simd) from the original on 17 April 2022, retrieved 14 May 2021
121. **^** ["Wasm 3.0 Completed - WebAssembly"](https://webassembly.org/news/2025-09-17-wasm-3.0/). *webassembly.org*. Retrieved 5 January 2026.
122. **^** ["Roadmap"](https://webassembly.org/roadmap/). *WebAssembly*. March 2017. [Archived](https://web.archive.org/web/20211207095013/https://webassembly.org/roadmap/) from the original on 7 December 2021. Retrieved 25 July 2019.
123. **^** WebAssembly Community Group (January 2020). ["WebAssembly Specification Release 1.0"](https://webassembly.github.io/spec/core/binary/values.html#integers). [Archived](https://web.archive.org/web/20191021070027/http://webassembly.github.io/spec/core/binary/values.html#integers) from the original on 21 October 2019. Retrieved 13 January 2020.
124. **^** ["Folded instructions"](https://webassembly.github.io/spec/core/text/instructions.html#folded-instructions). *[GitHub](https://en.wikipedia.org/wiki/GitHub)*. [Archived](https://web.archive.org/web/20180712214813/http://webassembly.github.io/spec/core/text/instructions.html#folded-instructions) from the original on 12 July 2018. Retrieved 18 June 2018. / WebAssembly / spec
125. **^** ["Modules (Binary)"](https://webassembly.github.io/spec/core/syntax/modules.html). *WebAssembly 1.0*. [Archived](https://web.archive.org/web/20221030175009/https://webassembly.github.io/spec/core/syntax/modules.html) from the original on 30 October 2022. Retrieved 9 April 2020.
126. **^** ["WebAssembly Binary Toolkit (wabt) demos"](https://webassembly.github.io/wabt/demo/). *webassembly.github.io*. [Archived](https://web.archive.org/web/20221030175011/https://webassembly.github.io/wabt/demo/) from the original on 30 October 2022. Retrieved 9 April 2020.
127. **^** ["WebAssembly control flow instructions - WebAssembly | MDN"](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow). *MDN Web Docs*. 23 November 2025. Retrieved 5 January 2026.
128. **^** Zakai, Alon (22 October 2011). ["Emscripten: An LLVM-to-JavaScript compiler"](https://doi.org/10.1145/2048147.2048224). *Proceedings of the ACM international conference companion on Object oriented programming systems languages and applications companion*. OOPSLA '11. New York, NY, USA: [Association for Computing Machinery](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery). pp. 301–312. [doi](https://en.wikipedia.org/wiki/Doi_(identifier)):[10.1145/2048147.2048224](https://doi.org/10.1145%2F2048147.2048224). [ISBN](https://en.wikipedia.org/wiki/ISBN_(identifier)) [978-1-4503-0942-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4503-0942-4).

This article incorporates text from a [free content](https://en.wikipedia.org/wiki/Free_content) work. Licensed under Apache License 2.0 ([license statement/permission](https://github.com/WebAssembly/design/blob/main/LICENSE)). Text taken from [*Text Format​*](https://github.com/WebAssembly/design/blob/main/TextFormat.md), jfbastien; rossberg-chromium; kripken; titzer; s3ththompson; sunfishcode; lukewagner; flagxor; enricobacis; c3d; binji; andrewosh, GitHub. WebAssembly/design.

## External links

* [Official website](https://webassembly.org/)
* [WebAssembly](https://github.com/WebAssembly) on [GitHub](https://en.wikipedia.org/wiki/GitHub), hosts Design Documents
* [W3C Community Group](https://www.w3.org/community/webassembly/) [Archived](https://web.archive.org/web/20150618022149/https://www.w3.org/community/webassembly/) 18 June 2015 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
* [WebAssembly Specification](https://webassembly.github.io/spec/core/) [Archived](https://web.archive.org/web/20220922054129/https://webassembly.github.io/spec/core/) 22 September 2022 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine)
* ["WebAssembly"](https://developer.mozilla.org/en-US/docs/WebAssembly). *MDN Web Docs*. 16 April 2024. [Archived](https://web.archive.org/web/20220513193623/https://developer.mozilla.org/en-US/docs/WebAssembly) from the original on 13 May 2022. Retrieved 14 February 2018. Has info on browser compatibility and specifications (WebAssembly JavaScript API)
 
NewPP limit report
Parsed by mw‐web.eqiad.main‐56dfd6f675‐jbxqn
Cached time: 20260424010249
Cache expiry: 82800
Cache expiry source: Template:As_of (#time)
Reduced expiry: true
Complications: [vary‐revision‐sha1, prevent‐selective‐update, show‐toc]
CPU time usage: 1.596 seconds
Real time usage: 1.840 seconds
Preprocessor visited node count: 8150/1000000
Revision size: 79532/2097152 bytes
Post‐expand include size: 359799/2097152 bytes
Template argument size: 7733/2097152 bytes
Highest expansion depth: 23/100
Expensive parser function count: 22/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 507365/5000000 bytes
Lua time usage: 0.956/10.000 seconds
Lua memory usage: 8654948/52428800 bytes
Number of Wikibase entities loaded: 1/500

Transclusion expansion time report (%,ms,calls,template)
100.00% 1531.669      1 -total
 54.05%  827.807      2 Template:Reflist
 40.17%  615.213    112 Template:Cite_web
  8.64%  132.374      1 Template:Infobox_programming_language
  8.25%  126.298      1 Template:Infobox
  5.87%   89.890      1 Template:Short_description
  5.56%   85.227      6 Template:Navbox
  5.12%   78.411      1 Template:W3C_Standards
  4.17%   63.823      5 Template:Wdrl
  4.11%   62.915      1 Template:Sister_project_links
 Render ID 4ff1550d-3f79-11f1-9eb5-73a1db04e258  Saved in parser cache with key enwiki:pcache:47013794:|#|:idhash:canonical and timestamp 20260424010249 and revision id 1349944829. Rendering was triggered because: page_view