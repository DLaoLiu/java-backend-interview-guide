# 数据库与缓存

## 面试官会重点看什么

你写了 MySQL、Oracle、Redis、SQL 性能优化、Doris、Elasticsearch。对 6 年后端来说，数据库问题通常会从“会写 SQL”升级到“会设计、会优化、会排障”。

## MySQL / SQL

来源：[MySQL 面试题](https://javaguide.cn/database/mysql/mysql-questions-01.html)、[MySQL 索引](https://javaguide.cn/database/mysql/mysql-index.html)、[索引失效](https://javaguide.cn/database/mysql/mysql-index-invalidation.html)、[执行计划](https://javaguide.cn/database/mysql/mysql-query-execution-plan.html)、[SQL 优化](https://javaguide.cn/high-performance/sql-optimization.html)

### 必会知识

- 索引结构：B+Tree 为什么适合范围查询。
- 联合索引：最左前缀原则。
- 索引失效：函数、隐式转换、like 前置通配、范围条件后列失效。
- 事务：ACID、隔离级别、MVCC、幻读。
- 执行计划：type、key、rows、Extra。
- 慢 SQL 排查：慢日志、执行计划、索引、SQL 改写、分页优化。

### 项目回答模板

> 我做 SQL 优化时先看慢日志确定高耗时 SQL，再用 explain 看扫描行数、索引命中和 Extra。对于用户画像查询这类多条件筛选，我会优先设计联合索引或预计算表；对于深分页，避免直接 limit offset，改成基于游标或先查主键再回表。

## Redis

来源：[Redis 面试题上](https://javaguide.cn/database/redis/redis-questions-01.html)、[Redis 面试题下](https://javaguide.cn/database/redis/redis-questions-02.html)、[缓存读写策略](https://javaguide.cn/database/redis/3-commonly-used-cache-read-and-write-strategies.html)、[Redis 数据结构](https://javaguide.cn/database/redis/redis-data-structures-01.html)、[Redis 集群](https://javaguide.cn/database/redis/redis-cluster.html)

### 必会知识

- 五种基本数据结构和使用场景。
- 缓存穿透、击穿、雪崩。
- 缓存一致性：Cache Aside、延迟双删、消息通知。
- 分布式锁：set nx ex、锁续期、误删风险。
- 持久化：RDB、AOF。
- 集群：主从、哨兵、Cluster。

### 和项目的连接

| 场景 | Redis 作用 | 风险 |
| --- | --- | --- |
| 权限和标签字典 | 缓存低频变更数据 | 更新后缓存不一致 |
| 用户画像查询 | 缓存热点用户档案 | 热点 key 和大 key |
| 布控任务状态 | 快速读取任务配置 | 过期策略和持久化 |
| API 调用限流 | 计数器或令牌桶 | 原子性和过期时间 |

## Doris / Elasticsearch / Oracle

JavaGuide 对 Doris、Oracle、Elasticsearch 免费主线覆盖有限，但你的简历会被问到。建议按下面准备：

- Doris：为什么不用 MySQL 查 TB 级数据；分区分桶怎么设计；明细表、聚合表、预计算怎么选。
- Elasticsearch：倒排索引、分词、mapping、keyword/text、深分页、聚合查询。
- Oracle：分页、序列、索引、执行计划和 MySQL 差异。

## 自测题

- 为什么 B+Tree 比红黑树更适合数据库索引？
- 什么情况下联合索引会失效？
- Redis 缓存和数据库如何保证最终一致？
- 布隆过滤器可以解决什么问题？有什么误判风险？
- Doris 为什么适合分析查询，不适合替代所有业务库？
