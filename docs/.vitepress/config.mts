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
      { text: '知识地图', link: '/knowledge-map' },
      { text: '项目案例', link: '/projects/case' },
      { text: '面试问答', link: '/interview-qna' },
      { text: '复习计划', link: '/plan' }
    ],
    sidebar: [
      {
        text: '起步',
        items: [
          { text: '简历诊断', link: '/resume-map' },
          { text: '知识地图', link: '/knowledge-map' },
          { text: 'JavaGuide 来源', link: '/sources' }
        ]
      },
      {
        text: '核心知识',
        items: [
          { text: 'Java 基础与并发', link: '/java-core' },
          { text: 'Spring 与工程框架', link: '/framework' },
          { text: '数据库与缓存', link: '/data-storage' },
          { text: '分布式与性能', link: '/distributed-performance' },
          { text: '大数据与 AI API', link: '/bigdata-ai' }
        ]
      },
      {
        text: '面试输出',
        items: [
          { text: '相似项目案例', link: '/projects/case' },
          { text: '高频追问与回答模板', link: '/interview-qna' },
          { text: '30 天复习计划', link: '/plan' }
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
