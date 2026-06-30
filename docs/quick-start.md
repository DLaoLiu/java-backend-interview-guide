# 面试冲刺首页

这份站点已经按 `wangning-agent.json`（2026-06-28）重新收敛。你的定位不是“所有技术都精通”，而是：

> 6 年 Java 后端经验，具备 Spring Cloud 微服务、数据库与性能优化、实时数据分析项目经验；近期参与 Chat-BFI Text2SQL Agent 开发，能够把传统后端工程能力用于 AI Agent 的流程编排、安全、状态和可观测性。

## 时间有限时，只走这条路线

1. 先背下面的三个项目故事，每个准备 1 分钟和 5 分钟版本。
2. 完成 [核心知识事故分析](/scenario-core) 的 25 个现场，先判断原因再看答案。
3. 完成 [Chat-BFI 事故分析](/scenario-agent) 的 15 个现场，并画出错误定位链路。
4. 不理解的原理再进入 [Java 核心](/java-core)、[Spring 工程](/framework)、[数据库缓存](/data-storage) 查阅。
5. 最后用 [Agent 完整题库](/agent-interview) 查漏补缺，不要求一次背完。

不要从第一篇开始顺序通读，也不要尝试一次记住所有细节。

## 三个主项目必须讲熟

### 1. Chat-BFI：体现 AI Agent 与工程能力

**一句话：** 面向 BFI 数据构建对话式分析 Agent，把自然语言问题经过相关性判断、查询路由、Text2SQL、统计和业务规则处理，转换成可解释的分析结果。

**必须讲清：**

- 为什么不是普通聊天：需要状态、工具、分支、循环、SQL 执行和人工确认。
- LangGraph 节点：相关性 → 意图路由 → Schema Linking → SQL → 校验执行 → 统计解释。
- 安全：只读账号、AST、白名单、行数、超时、脱敏。
- 状态：当前上下文、历史会话、业务状态和 Checkpoint 的区别。
- 观测：Langfuse 追踪模型、Token、延迟、Tool 和整条链路。

优先学习：[Chat-BFI 事故分析题](/scenario-agent)；完整参考：[Text2SQL Agent 面试题](/agent-interview)

### 2. BFI：体现数据链路与性能

**一句话：** 处理网络流量、设备和文件数据，使用 Kafka、Flink、Doris、Elasticsearch 和 Redis 支撑画像、筛选、碰撞和行为分析。

**必须讲清：**

- 为什么 Kafka → Flink → Doris，而不是全部放 MySQL。
- Flink 的 Checkpoint、Watermark、状态、反压和端到端幂等。
- Doris 的分区分桶、预计算和慢查询排查。
- TB 级是数据规模，不要在没有压测证据时编造 TPS、延迟或优化比例。

优先学习：[核心知识事故分析题](/scenario-core)；完整参考：[Flink、Doris 与 AI 工程](/bigdata-ai)

### 3. 通用日志平台：体现 Spring 深度

**一句话：** 把操作日志封装为 log-starter，通过注解和 AOP 自动采集，再通过 Feign 或异步通道发送到日志服务。

**必须讲清：**

- Starter 的配置属性、自动配置、条件装配和核心 Bean。
- Spring AOP 的代理原理及自调用问题。
- 日志异步、线程池隔离、超时、降级和审计可靠性。
- 为什么日志服务故障不能拖垮主业务。

优先学习：[核心知识事故分析题](/scenario-core)；完整参考：[Spring、MyBatis 与微服务](/framework)

## P0 最低通过线

下面 24 题必须能够在 60 秒内说出结构化答案：

| 模块 | 必会问题 |
| --- | --- |
| Java | equals/hashCode、String 不可变、ArrayList/LinkedList、HashMap、ConcurrentHashMap |
| 并发 | synchronized/Lock/volatile、CAS、线程池参数、Executors 风险、ThreadLocal |
| JVM | 内存区域、对象回收、CPU 100%、Full GC |
| Spring | IoC、Bean 生命周期、AOP、事务失效、自动装配、自定义 Starter |
| MySQL | B+Tree、联合索引、EXPLAIN、慢 SQL、MVCC、深分页 |
| Redis | 穿透/击穿/雪崩、Cache Aside、分布式锁、大 key/热 key |

## 一道题怎么说

先把问题还原成一个会出故障的现场，再使用四句话：

1. **现象：** 系统具体发生了什么。
2. **原因：** 哪几个机制按顺序导致问题。
3. **方案：** 如何止损、定位和长期修复。
4. **表达：** 压缩成 60 秒，并连接真实项目。

示例：

> 线程池主要解决线程复用、并发控制和任务排队。任务提交后按核心线程、队列、最大线程、拒绝策略处理；生产中队列必须有界，并监控活跃线程、队列长度和拒绝数。在日志平台里我会使用独立线程池发送日志，避免日志服务变慢占满业务线程；如果没有真实落地，就表述为“我会这样设计”，不虚构参数。

## 面试前不要做的事

- 不要继续无限添加八股题，先把现有答案说顺。
- 不要同时准备六个项目，主讲三个，其余用于补充场景。
- 不要编造 TPS、数据量、准确率和优化百分比。
- 不要把“参与过”讲成“独立设计全部架构”。
- 不要只报技术名词，必须说明为什么用、出了问题怎么办。

## 自测标准

- 30 秒能说出自己的定位。
- 1 分钟能讲清三个主项目的任意一个。
- 60 秒能回答 P0 题，并连接到项目。
- 5 分钟能画出 BFI 或 Chat-BFI 的完整链路。
- 被追问“不用这个技术行不行”时，能说出取舍而不是继续背定义。
