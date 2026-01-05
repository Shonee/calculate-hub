# 计算器工具集 - 完整提示词与开发指南

## 📋 项目概述

这是一个功能完善的计算器工具集项目，包含多种类型的计算器工具，具有现代化的UI设计和完整的移动端自适应支持。

### 🎯 核心特性

- **多样化工具**：包含6种不同类型的计算器
- **现代化设计**：采用渐变色背景、毛玻璃效果、卡片式布局
- **移动端优化**：完整的响应式设计，支持多种屏幕尺寸
- **组件化架构**：公共页头页脚组件，便于维护
- **数据分析**：集成使用统计和数据追踪

---

## 🏗️ 项目架构

### 文件结构

\`\`\`
pages/calculate/
├── calculator-hub.html          # 工具集导航页（主入口）
├── components/
│   ├── common-header.html       # 公共页头组件
│   ├── common-footer.html       # 公共页脚组件
│   └── analytics-config.js      # 数据分析配置
├── loan-calculator.html         # 贷款计算器
├── tax-calculator.html          # 个人所得税计算器
├── relative-calculator.html     # 亲戚关系计算器
├── basic-calculator.html        # 基础计算器
├── scientific-calculator.html   # 科学计算器
└── calculate.md                 # 本文档
\`\`\`

### 技术栈

- **前端框架**：原生 HTML/CSS/JavaScript
- **UI框架**：Bootstrap 5 + Tailwind CSS
- **图标库**：Font Awesome 6.4.0
- **图表库**：Chart.js（贷款计算器）
- **工具库**：jQuery 3.6.0（组件加载）

---

## 🎨 设计规范

### 1. 视觉风格

#### 配色方案
\`\`\`css
:root {
    --primary-color: #3b82f6;      /* 主色调 - 蓝色 */
    --secondary-color: #8b5cf6;    /* 次要色 - 紫色 */
    --success-color: #10b981;      /* 成功色 - 绿色 */
    --warning-color: #f59e0b;      /* 警告色 - 橙色 */
    --danger-color: #ef4444;       /* 危险色 - 红色 */
}
\`\`\`

#### 渐变背景
\`\`\`css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}
\`\`\`

#### 毛玻璃效果
\`\`\`css
.glass-effect {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
\`\`\`

---

## 📱 移动端适配规范

### 响应式断点

\`\`\`css
/* 平板设备 */
@media (max-width: 768px) { }

/* 手机设备 */
@media (max-width: 576px) { }

/* 小屏手机 */
@media (max-width: 480px) { }
\`\`\`

### 移动端优化要点

1. **字体大小自适应**：标题 2rem → 1.5rem → 1.25rem
2. **间距优化**：padding 30px → 20px → 15px
3. **按钮尺寸**：最小触摸区域 44px × 44px
4. **网格布局**：6列 → 5列 → 4列
5. **表格处理**：添加横向滚动

---

## 🛠️ 各计算器功能详解

### 1. 工具集导航页（calculator-hub.html）
- 卡片式导航设计
- 使用统计展示
- Bootstrap 网格布局

### 2. 贷款计算器（loan-calculator.html）
- 等额本息/等额本金计算
- 提前还贷计算
- Chart.js 图表展示

### 3. 个税计算器（tax-calculator.html）
- 累计预扣法计算
- 年终奖两种计税方式
- 8项专项附加扣除
- 智能推荐最优方案

### 4. 亲戚计算器（relative-calculator.html）
- 快速查询亲戚称呼
- 支持四级关系
- 路径可视化

### 5. 基础计算器（basic-calculator.html）
- 四则运算
- 历史记录

### 6. 科学计算器（scientific-calculator.html）
- 三角函数
- 对数函数
- 角度/弧度切换

---

## 🚀 快速开发指南

### 创建新计算器步骤

1. 复制模板文件
2. 修改基础信息
3. 引入公共组件
4. 添加移动端适配
5. 实现核心功能
6. 添加到导航页

---

## 📞 项目信息

**最后更新**：2026-01-05  
**版本号**：v1.0.0  
**维护状态**：✅ 活跃维护中
