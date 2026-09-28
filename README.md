# YUMI AI Product Portfolio

用于 AI 产品经理、产品运营与 AI 产品运营求职的单页作品集网站。

## 启动

```bash
npm install
npm run dev
```

访问 `http://127.0.0.1:3000`。

## 常用修改位置

- 项目数据：`data/projects.ts`
- 经历数据：`data/experience.ts`
- 能力矩阵：`data/skills.ts`
- Intro 视频：`public/videos/intro.mp4`
- Outro 视频：`public/videos/outro.mp4`
- Intro 路径与测试开关：`components/Intro.tsx`
- Outro 路径：`components/OutroSection.tsx`
- 联系方式：`components/OutroSection.tsx`

`components/Intro.tsx` 中的 `FORCE_INTRO` 设为 `true` 后，每次刷新都会播放 Intro，便于开发测试；正式使用请保持 `false`。

## 检查命令

```bash
npm run typecheck
npm run build
```
