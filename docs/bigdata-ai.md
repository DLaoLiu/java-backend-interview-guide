# 大数据与 AI API

## 大数据链路

你的用户行为分析平台写了“多源数据采集、Flink 实时处理、Doris 查询分析、Elasticsearch 检索、Redis 缓存”。面试官会把它当成数据平台项目追问。

### 推荐回答结构

1. 数据从哪里来：网络流量、设备上报、批量文件或第三方数据。
2. 怎么接入：Kafka 承接实时数据，文件类数据批量导入。
3. 怎么处理：Flink 清洗、过滤、补字段、构建基础表。
4. 怎么存：明细数据进入 Doris，检索字段进入 Elasticsearch，热点配置进入 Redis。
5. 怎么查：画像查询、圈选、碰撞分析、布控监控、统计大屏。
6. 怎么保证稳定：幂等、重试、Checkpoint、预计算、限流、监控。

## Flink 面试补充

JavaGuide 主线没有系统覆盖 Flink，需要自补：

- Watermark：解决乱序事件时间计算。
- Window：滚动、滑动、会话窗口。
- State：Keyed State 和 Operator State。
- Checkpoint：失败恢复和 Exactly-once 的基础。
- 反压：下游处理慢导致上游堆积。
- 端到端一致性：Source、Flink 状态、Sink 都要配合。

## Doris 面试补充

- 明细模型适合保留原始行为。
- 聚合模型适合按维度聚合指标。
- 分区通常按时间，分桶按高频过滤字段。
- 大宽表和预计算能换取查询速度，但会增加存储和更新成本。
- 慢查询要看分区裁剪、扫描数据量、谓词下推、物化视图、并发。

## AI API 工程

来源：[AI 应用开发体系](https://javaguide.cn/ai/)、[大模型 API 工程](https://javaguide.cn/ai/llm-basis/llm-api-engineering.html)、[结构化输出](https://javaguide.cn/ai/llm-basis/structured-output-function-calling.html)、[Prompt 工程](https://javaguide.cn/ai/agent/prompt-engineering.html)、[AI 应用系统设计](https://javaguide.cn/ai/system-design/ai-application-architecture.html)

你简历里的“服务打标功能：集成大模型 API 实现基础标签自动生成”可以这样讲：

> 我们不是简单把文本丢给模型，而是把服务名称、描述、所属端、已有分类和候选标签组装成结构化 Prompt，让模型返回固定 JSON。接口层做超时、重试和限流；结果落库前要做规则校验，低置信度结果进入人工审核，人工修正结果再沉淀为样例。

### 必须准备的问题

- Prompt 怎么设计：角色、任务、输入字段、输出格式、约束、示例。
- 结构化输出怎么保证：JSON Schema、函数调用、解析失败重试。
- API 不稳定怎么办：超时、重试、指数退避、限流、熔断。
- 成本怎么控制：缓存、批量、只对待标数据调用、人工审核抽样。
- 标签准确率怎么提升：规则兜底、样例库、人工反馈、RAG 补充知识。

## RAG 可作为加分项

来源：[RAG 基础](https://javaguide.cn/ai/rag/rag-basis.html)、[RAG 文档处理](https://javaguide.cn/ai/rag/rag-document-processing.html)、[RAG 检索优化](https://javaguide.cn/ai/rag/rag-optimization.html)

如果被问“模型为什么知道服务应该打什么标签”，可以说：

> 早期可以先用固定 Prompt 和规则候选标签。后续如果业务标签体系复杂，可以把历史审核样例、标签定义、分类规则做成知识库，调用模型前先检索相似案例，把检索结果和候选标签一起放进 Prompt，提高一致性。

## 自测题

- Flink Checkpoint 和 Savepoint 区别是什么？
- Kafka 到 Flink 到 Doris 怎么做幂等？
- Doris 为什么能支撑多维分析？
- 大模型 API 返回格式不稳定怎么办？
- 人工审核结果如何反哺下一轮自动打标？
