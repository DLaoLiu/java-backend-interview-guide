# 分布式与性能

## 这部分为什么重要

你的简历里出现了 Spring Cloud、Nacos、Kafka、Flink、Doris、DevOps、性能优化、布控监控、任务调度。面试官会判断你是不是只做功能，还是能理解系统在高并发、大数据量、故障场景下如何稳定运行。

## 分布式基础

来源：[分布式高频题](https://javaguide.cn/distributed-system/distributed-system-interview-questions.html)、[CAP/BASE](https://javaguide.cn/distributed-system/protocol/cap-and-base-theorem.html)、[RPC 基础](https://javaguide.cn/distributed-system/rpc/rpc-intro.html)、[分布式锁](https://javaguide.cn/distributed-system/distributed-lock.html)、[分布式事务](https://javaguide.cn/distributed-system/distributed-transaction.html)

必须能回答：

- CAP：一致性、可用性、分区容错性不能三者同时完美满足。
- BASE：基本可用、软状态、最终一致。
- RPC：本地调用和远程调用差异，序列化、网络、超时、重试。
- 分布式锁：适用场景、Redis 实现、锁续期、锁误删。
- 分布式事务：本地事务、2PC、TCC、可靠消息、最终一致。

## 消息队列 / Kafka

来源：[消息队列基础](https://javaguide.cn/high-performance/message-queue/message-queue.html)、[Kafka 面试题](https://javaguide.cn/high-performance/message-queue/kafka-questions-01.html)

准备重点：

- 为什么用 MQ：解耦、削峰、异步、广播。
- 消息可靠性：生产者确认、Broker 副本、消费者 offset。
- 顺序消费：同一业务 key 进入同一分区。
- 重复消费：业务幂等，唯一键、状态机或去重表。
- 消息堆积：扩分区、加消费者、限流、排查下游瓶颈。

## 高性能

来源：[SQL 优化](https://javaguide.cn/high-performance/sql-optimization.html)、[读写分离和分库分表](https://javaguide.cn/high-performance/read-and-write-separation-and-library-subtable.html)、[深分页优化](https://javaguide.cn/high-performance/deep-pagination-optimization.html)、[负载均衡](https://javaguide.cn/high-performance/load-balancing.html)

常见抓手：

- 接口层：缓存、异步、批量、分页、限流。
- 数据层：索引、预计算、分区分桶、冷热分离。
- 服务层：线程池隔离、连接池、超时、熔断。
- 架构层：读写分离、水平扩展、负载均衡。

## 高可用

来源：[高可用设计](https://javaguide.cn/high-availability/high-availability-system-design.html)、[限流](https://javaguide.cn/high-availability/limit-request.html)、[熔断降级](https://javaguide.cn/high-availability/fallback-and-circuit-breaker.html)、[超时重试](https://javaguide.cn/high-availability/timeout-and-retry.html)

面试表达：

> 高可用不是单个技术点，而是先假设依赖会失败。我们会给外部调用设置超时，给热点接口做限流，对非核心功能做降级，对异常链路做熔断，并通过监控告警发现问题。

## 你的项目追问

| 项目 | 可能追问 | 回答关键词 |
| --- | --- | --- |
| 用户行为分析平台 | Kafka 消息重复怎么办？Flink 任务失败怎么办？ | offset、幂等、Checkpoint、状态恢复、补偿任务。 |
| 网络流量监测分析系统 | 海量日志怎么查得快？ | 清洗、分区、预聚合、索引、冷热分离。 |
| 多端服务打标管理平台 | 大模型服务不稳定怎么办？ | 超时、重试、限流、熔断、人工审核兜底。 |
| 通用日志监控平台 | 日志服务挂了会不会影响主业务？ | 异步、降级、本地缓冲、重试、监控告警。 |

## 自测题

- MQ 如何保证不丢消息？
- 消费者重复消费时业务如何幂等？
- 限流、熔断、降级分别解决什么问题？
- 什么场景适合最终一致，不适合强一致？
- 如果 Doris 查询突然变慢，你从哪些层面排查？
