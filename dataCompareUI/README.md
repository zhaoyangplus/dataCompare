## 简介

1. 当前技术栈：Vue3、TypeScript、NaiveUI、Vite5、UnoCSS
2. 内置国际化方案：轻松实现多语言支持，目前需要维护中文和英文。
3. 本项目推荐使用 VSCode 进行开发，项目里面已内置 VSCode 配置，包含推荐的插件和设置。
4. 采用 pnpm monorepo 架构，结构清晰，优雅易懂。
5. 集成了eslint, prettier 和 simple-git-hooks，保证代码的规范性。

## 使用

**环境准备**

确保你的环境满足以下要求：

- **git**: 你需要git来克隆和管理项目版本。
- **NodeJS**: >=18.12.0，推荐 18.19.0 或更高。
- **pnpm**: >= 8.7.0，推荐 8.14.0 或更高。

**克隆项目**

```bash
git clone git@git.halodbtech.com:halo-tools/hmt-web-ui.git
```

**安装依赖**

```bash
pnpm i
```
> 由于本项目采用了 pnpm monorepo 的管理方式，因此请不要使用 npm 或 yarn 来安装依赖。

**启动项目**

```bash
pnpm dev
```

**构建项目**

```bash
pnpm build
```
