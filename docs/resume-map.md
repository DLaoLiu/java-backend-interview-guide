# 最新简历诊断与面试定位

> 本页依据 `wangning-agent.json`（2026-06-28）整理。目标岗位是高级开发工程师，主方向仍是 Java 后端，Chat-BFI 是差异化亮点，不要把自己包装成纯算法或模型训练工程师。

## 你的面试定位

**主标签：** 6 年 Java 后端、Spring Cloud 微服务、数据库与性能优化、数据分析平台。

**差异化标签：** 参与 Text2SQL Agent 开发，熟悉 FastAPI、LangChain、LangGraph、Langfuse，以及 SQL 安全、会话状态和人工确认。

**项目主线：**

1. Chat-BFI：AI Agent 和后端工程融合。
2. BFI：Kafka/Flink/Doris 数据链路和性能。
3. 通用日志平台：Spring AOP、自定义 Starter 和服务治理。
4. ServiceTag：大模型 API 工程和人工审核。

## 简历表达对应的风险

| 简历表达 | 面试官会追问 | 你必须准备 |
| --- | --- | --- |
| 6 年 Java 后端 | HashMap、线程池、JVM、Spring 事务能否讲清 | [Java 核心](/java-core)、[Spring](/framework) |
| SQL 性能优化 | 哪条 SQL、怎么定位、前后指标是什么 | EXPLAIN、扫描量、索引、分页、真实案例 |
| TB 级流量处理 | 数据量来源、吞吐、容错和一致性 | Kafka、Flink Checkpoint、幂等、Doris |
| 微服务架构设计 | 服务如何拆、故障如何治理 | Nacos、Feign、超时重试、限流熔断 |
| Text2SQL Agent | 是否只是调模型 API | Graph、Schema Linking、SQL 校验、评估 |
| Human-in-the-Loop / ReAct | 在哪里循环、在哪里中断、怎么恢复 | 状态、条件边、重试上限、Checkpoint |
| Langfuse | 具体观测什么 | Trace、Span、Generation、Token、延迟、Tool |
| 性能优化 | 是否有真实证据 | P95/P99、扫描量、资源、压测和回归 |

## 需要主动收敛的地方

- 简历目标关键词是 Java、Spring Boot、Spring Cloud、MySQL、Redis、微服务和性能优化，基础盘优先级高于 AI 名词。
- AI Agent 技能要讲工程实现，不要声称做了模型训练、微调或算法研究。
- “架构设计”要说清自己负责的范围和协作边界。
- “TB 级”可以描述数据规模，但吞吐和优化比例只有有记录时才说。
- 项目技术栈很多，面试中只围绕解决问题的关键组件展开。

## 自我介绍参考

> 我有 6 年 Java 后端开发经验，主要使用 Spring Boot、Spring Cloud、MyBatis-Plus、MySQL 和 Redis，参与过政企数据平台、实时用户行为分析、标签管理和日志组件建设。
>
> 在 BFI 项目中，我负责后端核心模块和数据处理相关能力，接触了 Kafka、Flink、Doris 和 Elasticsearch，重点做过多维查询、数据分层和性能优化。近期参与 Chat-BFI Text2SQL Agent 开发，使用 FastAPI、LangChain 和 LangGraph 编排问题判断、查询路由、SQL 查询和统计分析，并通过 Langfuse 做链路观测。
>
> 我的优势是能够把 AI 能力放进可上线的后端系统中，关注状态管理、SQL 安全、超时重试、人工确认和可观测性，而不只是完成一次模型调用。

按真实经历删改，不要逐字背诵。

## 准备优先级

| 优先级 | 内容 | 判断标准 |
| --- | --- | --- |
| P0 | Java、Spring、MySQL、Redis | 高频题能在 60 秒内回答并连接项目 |
| P0 | Chat-BFI、BFI、日志平台 | 每个项目有 1 分钟和 5 分钟版本 |
| P1 | Kafka、Flink、Doris、高可用 | 能画链路并解释故障处理 |
| P1 | Text2SQL、LangGraph、SQL 安全 | 能讲流程、状态、分支、循环和评估 |
| P2 | Elasticsearch、MinIO、Docker、CI/CD | 能回答项目相关基础题 |
| 暂缓 | 冷门源码、复杂算法、未使用的新框架 | 面试前不投入主要时间 |
