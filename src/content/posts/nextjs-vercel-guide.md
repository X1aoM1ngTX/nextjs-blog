---
title: 使用 Vercel 部署 Next.js 博客
date: 2025-12-28
excerpt: 详细介绍如何将 Next.js 项目部署到 Vercel 平台，包括配置自定义域名。
---

# 使用 Vercel 部署 Next.js 博客

Vercel 是 Next.js 团队开发的部署平台，提供最佳的 Next.js 部署体验。

## 部署步骤

### 1. 准备项目

将代码推送到 GitHub 仓库：

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### 2. 连接 Vercel

1. 登录 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入你的 GitHub 仓库
4. Vercel 会自动检测 Next.js 项目并配置构建设置

### 3. 部署配置

Framework Preset 选择 **Next.js**：

| 设置项 | 值 |
|--------|-----|
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

### 4. 自定义域名

在项目设置中添加自定义域名：

1. 进入 **Settings** → **Domains**
2. 添加你的域名
3. 按提示配置 DNS 记录（CNAME 指向 `cname.vercel-dns.com`）

## 更新部署

每次修改代码后：

```bash
git add .
git commit -m "Update content"
git push
```

Vercel 会自动检测并重新部署。

---

享受愉快的写作体验！
