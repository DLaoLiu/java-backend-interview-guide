# 最新简历知识地图

这张地图按最新简历和高级开发岗位关键词重新排序。优先级表示面试准备顺序，不表示技术本身的重要程度。

## 先学场景，再查原理

- [核心知识事故分析](/scenario-core)：25 个 Java、Spring、数据库、Kafka/Flink 现场。
- [Chat-BFI 事故分析](/scenario-agent)：15 个 Text2SQL、LangGraph、安全与评估现场。
- [项目面试实战](/project-interview)：按真实经历整理 Chat-BFI 与 BFI 深挖问答。

场景页用于理解和表达；下面的知识页用于不理解时补原理，不需要一次全部背完。

## P0：必须守住

| 模块 | 简历依据 | 达标标准 | 入口 |
| --- | --- | --- | --- |
| Java、集合、并发、JVM | 6 年 Java 后端、性能优化 | 16 道核心题能回答 10 道以上 | [Java 核心](/java-core) |
| Spring / Spring Boot | 几乎所有 Java 项目使用 | 能讲代理、事务、自动装配和 Starter | [Spring 工程](/framework) |
| MySQL / SQL | 明确写了 SQL 和索引优化 | 能完整讲一条慢 SQL 排查路径 | [数据库与缓存](/data-storage) |
| Redis | 多个项目使用 | 能讲一致性、三类缓存问题和分布式锁 | [数据库与缓存](/data-storage) |
| 三个主项目 | Chat-BFI、BFI、日志平台 | 各有 1 分钟和 5 分钟版本 | [项目面试实战](/project-interview) |

## P1：项目深挖

| 模块 | 对应项目 | 达标标准 | 入口 |
| --- | --- | --- | --- |
| Text2SQL / LangGraph | Chat-BFI | 能画 Graph，解释状态、分支、循环和安全 | [Agent 专题](/agent-interview) |
| Kafka / Flink | BFI | 能讲不丢、不重、Checkpoint、Watermark、反压 | [数据工程](/bigdata-ai) |
| Doris / Elasticsearch | BFI、ServiceTag | 能解释存储选型、分区分桶和查询优化 | [数据存储](/data-storage) |
| 分布式 / 高可用 | 微服务和日志平台 | 能讲超时、重试、幂等、限流、熔断和降级 | [分布式性能](/distributed-performance) |
| 大模型 API 工程 | ServiceTag | 能讲结构化输出、校验、评测和人工审核 | [AI 工程](/bigdata-ai) |

## P2：有时间再补

- MyBatis-Plus 高级插件和源码。
- Elasticsearch 分片调优、复杂相关性算法。
- MinIO 分片上传、生命周期和集群细节。
- Docker、Nginx、Maven、Git 的常见命令及排障。
- Oracle 方言、执行计划与 MySQL 差异。

## 暂时不要投入主要时间

- 没在简历中出现、短期也无法连接项目的新框架。
- HashMap 每一行源码、JVM 收集器所有参数等低频细节。
- 模型训练、微调和算法推导；你的定位是 Agent 与后端工程。
- 为了显得高级而准备无法证明的超大并发或复杂架构。

## JavaGuide 深入入口

- [Java 基础](https://javaguide.cn/java/basis/java-basic-questions-01.html)
- [Java 集合](https://javaguide.cn/java/collection/java-collection-questions-01.html)
- [Java 并发](https://javaguide.cn/java/concurrent/java-concurrent-questions-01.html)
- [Spring](https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary.html)
- [MySQL](https://javaguide.cn/database/mysql/mysql-questions-01.html)
- [Redis](https://javaguide.cn/database/redis/redis-questions-01.html)
- [Kafka](https://javaguide.cn/high-performance/message-queue/kafka-questions-01.html)
- [AI 应用](https://javaguide.cn/ai/)

先用本站答案建立表达，再回到 JavaGuide 补原理，不要反过来从长文开始漫无目的阅读。
