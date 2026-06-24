# Java 基础与并发

## 小白先会说的话

Java 面试不是背名词，而是把“语言机制、集合、并发、JVM”讲成工程里的稳定性和性能问题。你的简历写了高级开发、性能优化和公共组件，所以面试官默认你能解释底层原理。

## 必须掌握

### Java 基础

来源：[Java 基础上](https://javaguide.cn/java/basis/java-basic-questions-01.html)、[中](https://javaguide.cn/java/basis/java-basic-questions-02.html)、[下](https://javaguide.cn/java/basis/java-basic-questions-03.html)

- 面向对象：封装、继承、多态分别解决什么问题。
- equals 和 hashCode：为什么重写 equals 必须重写 hashCode。
- String、StringBuilder、StringBuffer：不可变、线程安全、性能差异。
- 异常：受检异常、运行时异常、全局异常处理。
- 反射、注解、代理：和 Spring AOP、自定义 Starter 直接相关。

### 集合

来源：[Java 集合上](https://javaguide.cn/java/collection/java-collection-questions-01.html)、[Java 集合下](https://javaguide.cn/java/collection/java-collection-questions-02.html)

- ArrayList 和 LinkedList：查询、插入、扩容和真实使用场景。
- HashMap：数组、链表、红黑树、扰动函数、扩容、线程不安全。
- ConcurrentHashMap：为什么适合并发读写。
- BlockingQueue：和线程池任务队列、异步日志落库相关。

### 并发

来源：[Java 并发上](https://javaguide.cn/java/concurrent/java-concurrent-questions-01.html)、[Java 线程池详解](https://javaguide.cn/java/concurrent/java-thread-pool-summary.html)、[AQS](https://javaguide.cn/java/concurrent/aqs.html)

- 线程和进程区别，线程状态切换。
- synchronized、ReentrantLock、volatile、CAS 的区别。
- 线程池核心参数：corePoolSize、maximumPoolSize、workQueue、拒绝策略。
- ThreadLocal 使用场景和内存泄漏风险。
- CompletableFuture：多个接口并发调用、聚合结果、超时处理。

### JVM

来源：[Java 内存区域](https://javaguide.cn/java/jvm/memory-area.html)、[JVM 垃圾回收](https://javaguide.cn/java/jvm/jvm-garbage-collection.html)、[JDK 监控工具](https://javaguide.cn/java/jvm/jdk-monitoring-and-troubleshooting-tools.html)

- JVM 内存区域：堆、栈、方法区、程序计数器、本地方法栈。
- 对象创建、对象内存布局、对象访问定位。
- GC Roots、可达性分析、常见垃圾收集器。
- 线上排查：CPU 飙高、内存泄漏、频繁 Full GC。

## 简历项目怎么关联

| 项目 | 追问角度 | 你要准备的回答 |
| --- | --- | --- |
| 通用日志监控平台 | AOP、自定义注解、异步写日志 | 注解标记方法，AOP 获取上下文，异步队列削峰，失败重试或降级。 |
| 用户行为分析平台 | 多线程、批量处理、缓存 | 批量导入和统计任务用线程池隔离，避免阻塞接口线程。 |
| 多端服务打标管理平台 | API 调用并发和超时 | 大模型接口调用要做超时、重试、限流、幂等和人工校正。 |

## 回答模板

> 这个问题我会从原理和项目使用两层看。原理上，XXX 主要解决 YYY；在项目里，我用它处理 ZZZ 场景。它的风险是 AAA，所以我做了 BBB，比如超时、限流、异步、批量或监控。

## 自测题

- HashMap 为什么线程不安全？ConcurrentHashMap 怎么降低锁粒度？
- 线程池为什么不建议使用 Executors 默认工厂方法？
- volatile 能不能保证原子性？为什么？
- 如果线上服务 CPU 打满，你会怎么定位？
- Spring AOP 为什么通常基于代理？自调用为什么可能失效？
