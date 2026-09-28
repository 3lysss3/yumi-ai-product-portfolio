# Portfolio Media Guide

项目图片路径集中维护在 `data/projects.ts`，视频路径集中维护在 `data/media.ts`。

## Videos

| File | Status | Usage |
| --- | --- | --- |
| `public/videos/intro.mp4` | Ready, original audio | Intro |
| `public/videos/ai-analysis.mp4` | Ready, original audio | AI product thinking |
| `public/videos/agent-workflow.mp4` | Ready, original audio | Agent architecture |
| `public/videos/medical-inference.mp4` | Ready, source has no audio | Doctor GT / AI inference comparison |
| `public/videos/data-iteration.mp4` | Ready, original audio | Product operations |
| `public/videos/product-demo.mp4` | Ready, original audio | Mini program demo |
| `public/videos/project-transition.mp4` | Ready, original audio | Medical AI to operations transition |
| `public/videos/outro.mp4` | Ready, original audio | Contact / outro |

浏览器禁止未交互的有声自动播放时，页面会显示 `PLAY WITH SOUND`。实时分割推理原文件没有音轨，页面不会显示无效的声音按钮。

## Images Ready

### Profile

- `profile/avatar.webp`
- `profile/hero-character.webp`

### AI Agent

- `ai-agent/agent-cover.webp`
- `ai-agent/agent-ui.webp`
- `ai-agent/agent-workflow.webp`
- `ai-agent/rag-process.webp`
- `ai-agent/knowledge-base.webp`
- `ai-agent/teaching-agent.webp`
- `ai-agent/model-result.webp`

`model-result.webp` 中的数据只作为演示界面展示，不作为项目成果口径。

### Medical AI

- `medical-ai/medical-cover.webp`
- `medical-ai/mri-original.webp`
- `medical-ai/mri-mask.webp`
- `medical-ai/comparison.webp`
- `medical-ai/qualitative-comparison.webp`
- `medical-ai/heatmap.webp`
- `medical-ai/3d-model.webp`
- `medical-ai/gui.webp`
- `medical-ai/report.webp`
- `medical-ai/training-result.webp`
- `medical-ai/data-validation.webp`

### Product Operations

- `product-operation/operation-cover.webp`
- `product-operation/dashboard.webp`
- `product-operation/competitor-analysis.webp`
- `product-operation/funnel.webp`
- `product-operation/user-analysis.webp`
- `product-operation/strategy.webp`
- `product-operation/iteration.webp`

运营看板中的数字为素材自带演示数据，页面已明确标注，不作为真实业务增长证明。

### User Research

- `research/research-cover.webp`
- `research/offline-interview.webp`
- `research/field-interview-secondary.webp`
- `research/online-interview.webp`
- `research/interview-notes.webp`
- `research/insight.webp`

### Mini Program / E-commerce

- `mini-program/cake-cover.webp`
- `mini-program/cake-home.webp`
- `mini-program/cocktail-cover.webp`
- `mini-program/cocktail-home.webp`
- `mini-program/cocktail-detail.webp`
- `mini-program/cocktail-result.webp`
- `ecommerce/ecommerce-cover.webp`
- `ecommerce/store-dashboard.webp`

### Awards

- `awards/award-01.webp` - IICT 人工智能岗位能力评价证书
- `awards/award-02.webp` - Huawei HCIA-AI

## Images Missing

### Highest Priority: Supraspinatus MRI

- `supraspinatus/supraspinatus-cover.webp`
- `supraspinatus/mri-original.webp`
- `supraspinatus/doctor-label.webp`
- `supraspinatus/prediction.webp`
- `supraspinatus/prediction-compare.webp`
- `supraspinatus/segmentation-result.webp`
- `supraspinatus/training-result.webp`

现有新增脑肿瘤 / 听神经瘤素材没有替代这些文件，避免将不同医学任务混用。

### Cake Mini Program

- `mini-program/cake-menu.webp`
- `mini-program/cake-detail.webp`
- `mini-program/cake-cart.webp`

### E-commerce

- `ecommerce/sku-analysis.webp`
- `ecommerce/product-analysis.webp`
- `ecommerce/conversion-funnel.webp`

### Awards

- `awards/certificate-01.webp`

## Replacement Rule

以上 Ready 素材只需替换同名文件即可更新页面。新增 Missing 素材时，还需把 `data/projects.ts` 中对应媒体的 `available` 改为 `true`，页面才会从占位状态切换为真实图片，且不会产生 404。
