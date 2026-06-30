import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Java 后端面试复习站',
  description: '基于简历和 JavaGuide 的 Java 后端面试复习地图',
  base: '/java-backend-interview-guide/',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/architecture-flow.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '面试冲刺', link: '/quick-start' },
      { text: '事故场景题', link: '/scenario-core' },
      { text: '项目案例', link: '/projects/case' },
      { text: 'Agent 场景题', link: '/scenario-agent' },
      { text: '7 天计划', link: '/plan' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '面试冲刺首页', link: '/quick-start' },
          { text: '最新简历诊断', link: '/resume-map' },
          { text: '知识地图', link: '/knowledge-map' },
          { text: '7 天冲刺计划', link: '/plan' }
        ]
      },
      {
        text: '场景化主线',
        items: [
          { text: '核心知识事故分析', link: '/scenario-core' },
          { text: 'Chat-BFI 事故分析', link: '/scenario-agent' }
        ]
      },
      {
        text: 'P0 原理参考库',
        items: [
          { text: 'Java、并发与 JVM', link: '/java-core' },
          { text: 'Spring、MyBatis 与微服务', link: '/framework' },
          { text: 'MySQL、Redis 与数据存储', link: '/data-storage' }
        ]
      },
      {
        text: 'P1 深入参考',
        items: [
          { text: '分布式与性能', link: '/distributed-performance' },
          { text: 'Flink、Doris 与 AI 工程', link: '/bigdata-ai' },
          { text: 'Text2SQL Agent 完整题库', link: '/agent-interview' }
        ]
      },
      {
        text: '面试输出',
        items: [
          { text: '相似项目案例', link: '/projects/case' },
          { text: '综合高频问答', link: '/interview-qna' },
          { text: 'JavaGuide 来源', link: '/sources' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Snailclimb/JavaGuide' }
    ],
    outline: {
      level: [2, 3]
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: '内容基于简历技术栈整理，外部知识链接来自 JavaGuide。',
      copyright: 'For interview preparation'
    }
  }
})
