# Why I built a Zero-Trust Proxy for my AI-controlled Robot 为什么我要为我的 AI 控制机器人构建零信任代理

Source: https://dev.to/loopgap/why-i-built-a-zero-trust-proxy-for-my-ai-controlled-robot-wei-shi-yao-wo-yao-wei-wo-de-ai-kong-zhi-ji-qi-ren-gou-jian-ling-xin-ren-dai-li-55oh

Tags: #opensource #go #robotics #ai #embedded

We are officially in the era of "vibe coding." AI agents and LLMs are writing code, managing workflows, and executing complex software tasks at blistering speeds. It's an incredible time to be a developer. 
我们已经正式迈入了“Vibe Coding”的时代。AI 智能体和大型语言模型正在以惊人的速度编写代码、管理工作流并执行复杂的软件任务。对开发者来说，这是一个不可思议的时代。

But what happens when you take that AI out of the browser and give it a physical body? 
但是，当你把 AI 移出浏览器，赋予它一个物理躯体时，会发生什么？

What happens when an AI agent hallucinates while controlling a high-torque, 7-DOF (Degree of Freedom) robotic arm?
当 AI 智能体在控制一台高扭矩、7 自由度 (7-DOF) 的机械臂时发生“幻觉”，后果会怎样？

In the software world, a bad AI prompt leads to a failed build or a crashed app. In the hardware world, a bad AI prompt leads to broken servos, shattered workspaces, or physical injury. 
在软件世界里，一个糟糕的 AI 提示词最多导致构建失败或应用崩溃。但在硬件世界里，一个糟糕的指令可能导致舵机烧毁、工作台粉碎，甚至造成人身伤害。

I needed a way to bridge my love for AI-assisted development with the unforgiving reality of embedded hardware. That’s why I built HAL-Proxy—a zero-trust Hardware Abstraction Layer gateway built in Go.
我需要一种方法，将我对 AI 辅助开发的热爱与嵌入式硬件容不得半点差错的现实连接起来。这就是为什么我使用 Go 语言构建了 HAL-Proxy —— 一个零信任的硬件抽象层网关。

Here is the story of why it exists, how it works, and how it fits into a larger open-source ecosystem I'm building.
下面是关于它为什么存在、如何运作，以及它如何融入我正在构建的更庞大的开源生态系统的故事。

When I started experimenting with AI agents (using MCP protocols and tools like my web_ai_halfauto_mcp_tool), the initial thought was simple: just send JSON commands from the LLM straight to the robot's microcontroller via serial or WebSockets.
当我开始尝试使用 AI 智能体（使用 MCP 协议和我自己开发的 web_ai_halfauto_mcp_tool 等工具）时，最初的想法很简单：直接将 JSON 指令从 LLM 通过串口或 WebSocket 发送给机器人的微控制器。

Move Joint 1 to 90 degrees. Set torque to 50%.
“将 1 号关节移动到 90 度。将扭矩设置为 50%。”

But LLMs are probabilistic. Sometimes they miscalculate kinematics. Sometimes they ignore physical constraints. If you send an unfiltered, unverified command directly to an STM32 chip controlling high-power BLDC motors, you are asking for trouble. 
但大语言模型是基于概率的。有时它们会算错运动学方程，有时它们会忽略物理限制。如果你将未经修改、未经实证的指令直接发送给控制大功率无刷直流 (BLDC) 电机的 STM32 芯片，那无疑是在自找麻烦。

I realized I couldn't trust the AI, and I couldn't burden the embedded firmware with heavy, complex validation logic. I needed a middleman.
我意识到我不能完全信任 AI，同时我也不能给嵌入式固件增加沉重、复杂的验证逻辑负担。我需要一个“中间人”。

I decided to architect a dedicated proxy layer. I chose Go for this because of its exceptional concurrency model and networking performance. 
我决定架构一个专用的代理层。我选择了 Go 语言，因为它具有出色的并发模型和网络性能。

HAL-Proxy sits exactly between the "Brain" (the AI Agent/Cloud) and the "Muscle" (the physical robot). It operates on a strict Zero-Trust philosophy.
HAL-Proxy 恰好位于“大脑”（AI 智能体/云端）和“肌肉”（物理机器人）之间。它基于严格的零信任理念运行。

How it works (工作原理):

It acts as a firewall for the physical world. Even if the AI goes completely off the rails, HAL-Proxy ensures the hardware safely halts or ignores the bad instructions.
它充当了物理世界的防火墙。即使 AI 彻底失控，HAL-Proxy 也能确保硬件安全停机或忽略这些错误指令。

To make this ecosystem complete, the firmware executing these commands also needs to be bulletproof. 
为了让这个生态系统更加完整，执行这些指令的底层固件也必须是无懈可击的。

While C/C++ is the traditional king of embedded systems, I’ve been transitioning my real-time control algorithms to Rust. For my 7-DOF robotic arm, I built the robot_ctrl_rust_app. 
虽然 C/C++ 是嵌入式系统的传统霸主，但我一直在将我的实时控制算法向 Rust 迁移。针对我的 7 自由度机械臂，我构建了 robot_ctrl_rust_app。

By leveraging Rust's ownership model and avoiding heap allocation, I can guarantee memory safety and deterministic real-time performance on STM32 microcontrollers. When HAL-Proxy sends a verified command, the Rust firmware executes the complex FOC (Field Oriented Control) and LADRC algorithms flawlessly.
通过利用 Rust 的所有权模型并避免堆分配，我可以在 STM32 微控制器上保证内存安全性以及确定性的实时性能。当 HAL-Proxy 发送经过验证的指令时，Rust 固件可以完美无瑕地执行复杂的 FOC（磁场定向控制）和 LADRC 算法。

HAL-Proxy isn't just a standalone tool; it's part of a broader vision to make hardware-software integration safer and more efficient. My open-source workflow now looks like this:
HAL-Proxy 不仅仅是一个独立的工具；它是让软硬件集成变得更安全、更高效的宏大愿景的一部分。我目前的开源工作流是这样的：

We are going to see a massive explosion in AI-driven robotics and IoT over the next few years. If we want this future to be safe, we need robust, open-source middleware.
在未来几年里，我们将见证 AI 驱动的机器人技术和物联网的爆炸式增长。如果我们希望这个未来是安全的，我们需要强大的开源中间件。

If you are an embedded engineer, a Go developer, or an AI enthusiast who wants to start interacting with the physical world without breaking things, I’d love for you to check out these repositories. 
如果你是一名嵌入式工程师、Go 开发者，或者是一个想要开始与物理世界交互却不想搞砸一切的 AI 爱好者，我非常欢迎你来看看这些仓库。

Happy (and safe) coding! 🚀
祝编码愉快（且安全）！ 🚀