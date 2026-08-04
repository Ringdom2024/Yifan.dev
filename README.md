# Yifan.dev

王一凡的个人作品集与技术博客。项目用于展示个人经历、项目实践与技术文章，内容重点包括数据科学、计算机视觉、人工智能应用和软件工程。

## 功能

- 个人介绍、教育经历、项目展示和联系方式
- 基于 Markdown 的静态博客
- 文章分类、标签和详情页
- 中英文界面切换
- 深色模式与响应式布局
- Sitemap、Open Graph 和 Google Analytics 支持

## 技术栈

- [Next.js 13](https://nextjs.org/)
- [React 18](https://react.dev/) 与 TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- Gray Matter、Remark 与 Remark HTML
- GSAP、Swiper 和 React Rough Notation

## 本地运行

建议使用 Node.js 18 或更高版本，以及 npm。

```bash
git clone https://github.com/Ringdom2024/Yifan.dev.git
cd Yifan.dev
npm ci
```

在项目根目录创建 `.env.local`：

```dotenv
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_EMAIL=your-email@example.com
NEXT_PUBLIC_GITHUB=https://github.com/your-name
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

其中 `NEXT_PUBLIC_URL` 用于页面元数据和 Sitemap；联系信息与 Google Analytics ID 请按实际部署环境填写。

启动开发服务器：

```bash
npm run dev
```

访问 <http://localhost:3000> 查看站点。

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 创建生产构建 |
| `npm run start` | 启动生产服务器（需先构建） |
| `npm run lint` | 执行 Next.js ESLint 检查 |
| `npm run format:check` | 检查 Prettier 格式 |
| `npm run format` | 使用 Prettier 格式化项目 |

## 项目结构

```text
components/  通用界面组件与博客组件
contents/    Markdown 博客文章
context/     语言、筛选与页面状态
hooks/       自定义 React Hooks
pages/       Next.js 页面、博客路由与 Sitemap
public/      图片、图标和其他静态资源
sections/    首页各内容区块
styles/      全局样式
utils/       文章读取、Markdown 转换等工具
```

## 添加文章

在 `contents/` 中新建 Markdown 文件，并在文件开头添加 Front Matter。示例：

```yaml
---
title: 文章标题
description: 用于搜索和分享的文章描述
excerpt: 显示在文章卡片上的摘要
datetime: 2026-08-04T10:00:00+08:00
slug: example-post
featured: false
category: 分类名称
tags:
  - Next.js
  - TypeScript
author: 王一凡
coverImage: /blog/example.webp
coverImageAlt: 封面图片说明
type: article
language: Simplified Chinese
---
```

封面图片放入 `public/blog/`，文章正文直接写在 Front Matter 之后。`slug` 应保持唯一，并建议仅使用小写字母、数字和连字符。

## 构建与部署

```bash
npm run build
npm run start
```

部署时将 `NEXT_PUBLIC_URL` 设置为站点的完整公开地址，并按需配置联系信息和 Google Analytics ID。

## 许可证

本项目采用 [MIT License](./LICENSE)。
