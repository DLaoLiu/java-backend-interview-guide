# 简历诊断

## 你的简历画像

从简历看，你定位是 6 年经验 Java 后端，项目集中在政企数据平台、用户行为分析、服务标签管理、网络流量监测、油气田管理、财务分析和日志监控。技术关键词包括：

<span class="tag">Spring Boot</span>
<span class="tag">Spring Cloud</span>
<span class="tag">MyBatis-Plus</span>
<span class="tag">MySQL / Oracle</span>
<span class="tag">Redis</span>
<span class="tag">Kafka</span>
<span class="tag">Flink</span>
<span class="tag">Doris</span>
<span class="tag">Elasticsearch</span>
<span class="tag">Docker</span>
<span class="tag">Nginx</span>
<span class="tag">大模型 API</span>
<span class="tag">自定义 Starter</span>
<span class="tag">AOP</span>

## 面试风险点

| 简历表达 | 面试官会怎么问 | 准备目标 |
| --- | --- | --- |
| 精通 Java 生态 | 你精通到什么程度？HashMap、线程池、JVM、事务能讲清吗？ | 能讲底层原理、常见坑和项目使用场景。 |
| Spring Cloud 微服务架构 | 服务拆分依据是什么？注册发现、配置、网关、调用失败怎么处理？ | 能说清拆分边界、链路治理、超时重试、限流熔断。 |
| SQL 性能优化、索引调优 | 具体慢 SQL 怎么定位？索引为什么失效？执行计划怎么看？ | 能拿一个慢查询案例讲出排查步骤。 |
| TB 级实时处理 | Kafka/Flink/Doris 各自解决什么问题？吞吐、延迟、数据一致性怎么保证？ | 能讲清数据链路、幂等、乱序、失败重试和预聚合。 |
| 大模型 API 集成 | 怎么做 Prompt、重试、限流、结构化输出、人工兜底？ | 能把“调用 API”讲成可上线工程能力。 |
| log-starter 组件 | Starter 怎么自动装配？AOP 怎么拿参数？日志异步落库怎么保证可靠？ | 能讲清 Spring Boot 自动装配和组件边界。 |

## 优先级判断

1. 必须先补：Java 基础、集合、并发、JVM、Spring、MySQL、Redis。
2. 结合项目补：Kafka、消息队列、SQL 优化、分布式、高可用、系统设计。
3. 简历加分项：Flink、Doris、Elasticsearch、大模型 API、日志 Starter。
4. 表达层面：每个项目都准备“背景、职责、难点、方案、结果、复盘”六句话。

## 建议把简历表达收敛成三类

| 类别 | 你要能讲什么 |
| --- | --- |
| 基础能力 | Java、Spring、MySQL、Redis 的高频八股，不能只停留在会用。 |
| 工程能力 | 接口设计、权限、任务调度、CI/CD、Docker、Nginx、故障排查。 |
| 数据能力 | 实时采集、清洗、标签、画像、检索、分析、预计算和查询性能。 |
