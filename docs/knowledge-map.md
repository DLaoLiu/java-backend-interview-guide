# 知识地图

这张表按“简历命中度 + 面试追问概率”排序。先看 P0，再看 P1，最后补 P2。

| 优先级 | 模块 | 为什么和你相关 | JavaGuide 入口 |
| --- | --- | --- | --- |
| P0 | Java 基础 | 你写了“精通 Java 生态”，基础题是必问项。 | [Java 基础上](https://javaguide.cn/java/basis/java-basic-questions-01.html)、[中](https://javaguide.cn/java/basis/java-basic-questions-02.html)、[下](https://javaguide.cn/java/basis/java-basic-questions-03.html) |
| P0 | 集合与 HashMap | 业务开发、缓存、批处理、标签碰撞都会用集合。 | [Java 集合上](https://javaguide.cn/java/collection/java-collection-questions-01.html)、[下](https://javaguide.cn/java/collection/java-collection-questions-02.html)、[HashMap 源码](https://javaguide.cn/java/collection/hashmap-source-code.html) |
| P0 | Java 并发 | 实时处理、任务调度、异步日志、性能优化都绕不开线程池。 | [并发上](https://javaguide.cn/java/concurrent/java-concurrent-questions-01.html)、[中](https://javaguide.cn/java/concurrent/java-concurrent-questions-02.html)、[下](https://javaguide.cn/java/concurrent/java-concurrent-questions-03.html)、[线程池详解](https://javaguide.cn/java/concurrent/java-thread-pool-summary.html) |
| P0 | JVM | 6 年后端面试会问内存区域、GC、线上排查。 | [Java 内存区域](https://javaguide.cn/java/jvm/memory-area.html)、[JVM 垃圾回收](https://javaguide.cn/java/jvm/jvm-garbage-collection.html)、[JDK 监控工具](https://javaguide.cn/java/jvm/jdk-monitoring-and-troubleshooting-tools.html) |
| P0 | Spring / Spring Boot | 你所有项目几乎都基于 Spring Boot。 | [Spring 面试题](https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary.html)、[SpringBoot 面试题](https://javaguide.cn/system-design/framework/spring/springboot-knowledge-and-questions-summary.html)、[IoC & AOP](https://javaguide.cn/system-design/framework/spring/ioc-and-aop.html) |
| P0 | MySQL / SQL 优化 | 简历明确写 SQL 性能优化、索引调优。 | [MySQL 面试题](https://javaguide.cn/database/mysql/mysql-questions-01.html)、[索引详解](https://javaguide.cn/database/mysql/mysql-index.html)、[执行计划](https://javaguide.cn/database/mysql/mysql-query-execution-plan.html)、[SQL 优化](https://javaguide.cn/high-performance/sql-optimization.html) |
| P0 | Redis | 项目大量使用 Redis，容易问缓存一致性、穿透、击穿、雪崩。 | [Redis 上](https://javaguide.cn/database/redis/redis-questions-01.html)、[下](https://javaguide.cn/database/redis/redis-questions-02.html)、[缓存读写策略](https://javaguide.cn/database/redis/3-commonly-used-cache-read-and-write-strategies.html) |
| P1 | 消息队列 / Kafka | 用户行为平台写了 Kafka 和 Flink，消息可靠性必问。 | [消息队列基础](https://javaguide.cn/high-performance/message-queue/message-queue.html)、[Kafka 面试题](https://javaguide.cn/high-performance/message-queue/kafka-questions-01.html) |
| P1 | 分布式 | Spring Cloud、Nacos、Feign、分布式任务和多服务拆分都相关。 | [分布式高频题](https://javaguide.cn/distributed-system/distributed-system-interview-questions.html)、[CAP/BASE](https://javaguide.cn/distributed-system/protocol/cap-and-base-theorem.html)、[分布式锁](https://javaguide.cn/distributed-system/distributed-lock.html)、[分布式事务](https://javaguide.cn/distributed-system/distributed-transaction.html) |
| P1 | 高性能 / 高可用 | 简历写性能优化、DevOps、布控监控和异常检测。 | [系统设计题](https://javaguide.cn/system-design/system-design-questions.html)、[高可用设计](https://javaguide.cn/high-availability/high-availability-system-design.html)、[限流](https://javaguide.cn/high-availability/limit-request.html)、[熔断降级](https://javaguide.cn/high-availability/fallback-and-circuit-breaker.html) |
| P1 | Docker / Maven / Git | 简历写 Docker、CI/CD、Maven、Git。 | [Docker 核心概念](https://javaguide.cn/tools/docker/docker-intro.html)、[Maven 核心概念](https://javaguide.cn/tools/maven/maven-core-concepts.html)、[Git 核心概念](https://javaguide.cn/tools/git/git-intro.html) |
| P2 | AI API 工程 | 服务打标项目写了大模型 API，容易成为亮点。 | [AI 应用开发体系](https://javaguide.cn/ai/)、[大模型 API 工程](https://javaguide.cn/ai/llm-basis/llm-api-engineering.html)、[结构化输出](https://javaguide.cn/ai/llm-basis/structured-output-function-calling.html)、[Prompt 工程](https://javaguide.cn/ai/agent/prompt-engineering.html) |
| P2 | RAG / AI 系统设计 | 如果面试官追问“标签推荐怎么提升准确率”，可以扩展到 RAG。 | [RAG 基础](https://javaguide.cn/ai/rag/rag-basis.html)、[RAG 检索优化](https://javaguide.cn/ai/rag/rag-optimization.html)、[AI 应用系统设计](https://javaguide.cn/ai/system-design/ai-application-architecture.html) |

## JavaGuide 暂未覆盖但你简历会被问的点

Flink、Doris、MinIO、Oracle、Elasticsearch 有的不是 JavaGuide 免费主线重点，不能完全依赖 JavaGuide。准备时可以按项目问题补：

- Flink：Exactly-once、Checkpoint、Watermark、窗口、状态、反压。
- Doris：明细模型/聚合模型、分区分桶、Rollup/物化视图、导入、查询优化。
- Elasticsearch：倒排索引、分词、mapping、分页、聚合、写入刷新。
- MinIO：对象存储、预签名 URL、分片上传、权限控制。
