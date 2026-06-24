# Spring 与工程框架

## 你需要讲到什么程度

你的简历中 Spring Boot、Spring Cloud、Nacos、Feign、MyBatis-Plus、自定义 Starter 都是核心关键词。面试时不能只说“我负责 CRUD”，要能讲清框架帮你解决了什么工程问题。

## Spring / Spring Boot

来源：[Spring 面试题](https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary.html)、[SpringBoot 面试题](https://javaguide.cn/system-design/framework/spring/springboot-knowledge-and-questions-summary.html)、[IoC & AOP](https://javaguide.cn/system-design/framework/spring/ioc-and-aop.html)、[自动装配](https://javaguide.cn/system-design/framework/spring/spring-boot-auto-assembly-principles.html)

### 必会知识

- IoC：对象创建和依赖管理交给容器。
- AOP：把日志、权限、事务这类横切逻辑从业务代码里抽离。
- Bean 生命周期：实例化、属性注入、初始化、销毁。
- 自动装配：Starter 通过条件配置把公共能力接入应用。
- Spring 事务：传播行为、隔离级别、失效场景。

### 和你简历的连接

通用日志监控平台写了自定义注解、AOP、log-starter。标准回答可以这样组织：

1. 为什么做 Starter：多个系统都需要统一操作日志，复制代码维护成本高。
2. Starter 做什么：提供注解、切面、配置属性、日志发送客户端。
3. AOP 怎么工作：拦截标注注解的方法，记录用户、方法、参数、结果、耗时和异常。
4. 可靠性怎么做：日志异步发送，失败落本地或重试，主业务不被日志服务拖垮。

## MyBatis / MyBatis-Plus

来源：[MyBatis 常见面试题](https://javaguide.cn/system-design/framework/mybatis/mybatis-interview.html)

- #{} 和 ${} 区别，SQL 注入风险。
- 一级缓存、二级缓存。
- 动态 SQL。
- 分页、批量插入、逻辑删除。
- N+1 查询问题和批量查询优化。

## Spring Cloud / 微服务

JavaGuide 主线可参考：[分布式高频题](https://javaguide.cn/distributed-system/distributed-system-interview-questions.html)、[API 网关](https://javaguide.cn/distributed-system/api-gateway.html)、[Spring Cloud Gateway](https://javaguide.cn/distributed-system/spring-cloud-gateway-questions.html)

你需要准备：

- 服务拆分：按业务边界拆，而不是按表拆。
- 注册发现：服务上线下线后调用方如何找到服务。
- 配置中心：不同环境配置隔离和动态刷新。
- Feign 调用：超时、重试、降级、链路追踪。
- 网关：认证、路由、限流、灰度。

## 工程化能力

来源：[Docker 核心概念](https://javaguide.cn/tools/docker/docker-intro.html)、[Maven 核心概念](https://javaguide.cn/tools/maven/maven-core-concepts.html)、[Git 核心概念](https://javaguide.cn/tools/git/git-intro.html)

- Maven：依赖管理、生命周期、插件、依赖冲突。
- Docker：镜像、容器、Dockerfile、端口、挂载、环境变量。
- CI/CD：代码提交后自动构建、测试、镜像发布、部署。

## 自测题

- Spring 事务为什么会失效？同类方法内部调用为什么不生效？
- @Autowired 和 @Resource 有什么区别？
- Spring Boot 自动装配的大致流程是什么？
- Feign 调用超时后应该重试吗？什么时候不能重试？
- 自定义 Starter 最少需要包含哪些东西？
