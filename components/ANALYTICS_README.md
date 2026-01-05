# 数据分析配置使用说明

## 概述

本项目已集成统一的数据分析配置系统，支持百度统计、谷歌分析（GA4 和 UA）以及自定义统计工具。所有配置集中在 `analytics-config.js` 文件中管理。

## 文件说明

- **analytics-config.js**: 数据分析配置文件，包含所有统计工具的配置和初始化逻辑
- **common-analytics.html**: 公共数据分析组件（可选使用）

## 快速开始

### 1. 配置百度统计

1. 访问 [百度统计](https://tongji.baidu.com) 注册并创建站点
2. 获取站点ID（在代码获取页面的 `hm.js?` 后面的字符串）
3. 编辑 `analytics-config.js`：

```javascript
baidu: {
    enabled: true,  // 启用百度统计
    siteId: '你的站点ID',  // 填入获取的站点ID
}
```

### 2. 配置谷歌分析 GA4

1. 访问 [Google Analytics](https://analytics.google.com) 创建 GA4 媒体资源
2. 获取衡量ID（格式：`G-XXXXXXXXXX`）
3. 编辑 `analytics-config.js`：

```javascript
google: {
    enabled: true,  // 启用谷歌分析
    measurementId: 'G-XXXXXXXXXX',  // 填入衡量ID
}
```

### 3. 配置谷歌分析 UA（旧版，不推荐）

**注意**：Universal Analytics 已于 2023年7月1日停止处理数据，建议使用 GA4。

```javascript
googleUA: {
    enabled: true,  // 启用谷歌分析（旧版）
    trackingId: 'UA-XXXXXXXXX-X',  // 填入跟踪ID
}
```

### 4. 添加自定义统计工具

```javascript
custom: {
    enabled: true,
    scripts: [
        {
            name: '友盟统计',
            src: 'https://example.com/analytics.js',
            async: true
        },
        {
            name: '其他统计工具',
            src: 'https://example.com/other.js',
            async: true
        }
    ]
}
```

## 在页面中使用

### 方法一：直接引入配置文件（推荐）

在 HTML 页面的 `<head>` 标签中添加：

```html
<head>
    <!-- 其他标签 -->
    <script src="components/analytics-config.js"></script>
</head>
```

### 方法二：使用公共组件

在需要统计的页面中引入：

```html
<head>
    <!-- 其他标签 -->
    <script src="components/common-analytics.html"></script>
</head>
```

## 已集成的页面

以下页面已自动集成数据分析配置：

- ✅ `calculator-hub.html` - 计算器工具集主页
- ✅ `loan-calculator.html` - 贷款计算器

## 为新页面添加数据分析

在新创建的页面 `<head>` 标签中添加：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>页面标题</title>
    
    <!-- 数据分析配置 -->
    <script src="components/analytics-config.js"></script>
    
    <!-- 其他脚本和样式 -->
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>
```

## 验证配置

### 1. 检查控制台日志

打开浏览器开发者工具（F12），在控制台中应该看到：

```
[Analytics] 百度统计已加载
[Analytics] Google Analytics (GA4) 已加载
```

### 2. 检查网络请求

在开发者工具的 Network 标签中，应该能看到：

- 百度统计：`hm.baidu.com/hm.js?xxxxx`
- 谷歌分析：`www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`

### 3. 使用统计工具验证

- **百度统计**：登录百度统计后台，查看实时访客
- **谷歌分析**：登录 Google Analytics，查看实时报告

## 注意事项

1. **隐私合规**：使用数据分析工具前，请确保符合相关隐私法规（如 GDPR、CCPA）
2. **性能影响**：统计脚本会异步加载，不会阻塞页面渲染
3. **本地测试**：在本地开发环境（localhost）测试时，统计数据可能不准确
4. **多工具并用**：可以同时启用多个统计工具，但注意不要重复统计

## 常见问题

### Q: 为什么看不到统计数据？

A: 请检查：
1. 配置文件中 `enabled` 是否设置为 `true`
2. 站点ID/衡量ID 是否正确
3. 浏览器是否安装了广告拦截插件
4. 是否在本地环境测试（某些统计工具在 localhost 下不工作）

### Q: 如何禁用某个统计工具？

A: 在 `analytics-config.js` 中将对应工具的 `enabled` 设置为 `false`

### Q: 可以添加其他统计工具吗？

A: 可以，在 `custom.scripts` 数组中添加新的统计工具配置

## 技术支持

如有问题，请查看：
- 百度统计帮助中心：https://tongji.baidu.com/web/help/
- Google Analytics 帮助中心：https://support.google.com/analytics/

## 更新日志

- **2026-01-04**: 初始版本，支持百度统计、谷歌分析 GA4/UA、自定义统计
****
