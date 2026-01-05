/**
 * 数据分析配置文件
 * 统一管理百度统计、谷歌分析等第三方数据分析工具
 */

const AnalyticsConfig = {
    // 百度统计配置
    baidu: {
        enabled: false, // 是否启用百度统计
        siteId: '', // 百度统计站点ID，格式如：'1234567890abcdef'
        // 使用说明：
        // 1. 在百度统计后台（https://tongji.baidu.com）注册并创建站点
        // 2. 获取站点ID（在代码获取页面的 hm.js? 后面的字符串）
        // 3. 将站点ID填入上方 siteId 字段
        // 4. 将 enabled 设置为 true
    },
    
    // 谷歌分析配置 (Google Analytics 4)
    google: {
        enabled: false, // 是否启用谷歌分析
        measurementId: '', // GA4 衡量ID，格式如：'G-XXXXXXXXXX'
        // 使用说明：
        // 1. 在 Google Analytics（https://analytics.google.com）创建媒体资源
        // 2. 选择 GA4 媒体资源类型
        // 3. 获取衡量ID（格式为 G-XXXXXXXXXX）
        // 4. 将衡量ID填入上方 measurementId 字段
        // 5. 将 enabled 设置为 true
    },
    
    // 谷歌分析配置 (Universal Analytics - 旧版)
    googleUA: {
        enabled: false, // 是否启用谷歌分析（旧版）
        trackingId: '', // UA 跟踪ID，格式如：'UA-XXXXXXXXX-X'
        // 注意：Universal Analytics 将于 2023年7月1日停止处理数据
        // 建议使用 GA4（上方 google 配置）
    },
    
    // 自定义统计配置（可扩展）
    custom: {
        enabled: false,
        scripts: [
            // 可以添加其他统计工具的脚本
            // 示例：
            // {
            //     name: '友盟统计',
            //     src: 'https://example.com/analytics.js',
            //     async: true
            // }
        ]
    }
};

/**
 * 初始化百度统计
 */
function initBaiduAnalytics() {
    if (!AnalyticsConfig.baidu.enabled || !AnalyticsConfig.baidu.siteId) {
        return;
    }
    
    const hm = document.createElement("script");
    hm.src = `https://hm.baidu.com/hm.js?${AnalyticsConfig.baidu.siteId}`;
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
    
    console.log('[Analytics] 百度统计已加载');
}

/**
 * 初始化谷歌分析 GA4
 */
function initGoogleAnalytics() {
    if (!AnalyticsConfig.google.enabled || !AnalyticsConfig.google.measurementId) {
        return;
    }
    
    // 加载 gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${AnalyticsConfig.google.measurementId}`;
    document.head.appendChild(script);
    
    // 初始化 gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', AnalyticsConfig.google.measurementId);
    
    console.log('[Analytics] Google Analytics (GA4) 已加载');
}

/**
 * 初始化谷歌分析 UA（旧版）
 */
function initGoogleUA() {
    if (!AnalyticsConfig.googleUA.enabled || !AnalyticsConfig.googleUA.trackingId) {
        return;
    }
    
    // 加载 analytics.js
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    ga('create', AnalyticsConfig.googleUA.trackingId, 'auto');
    ga('send', 'pageview');
    
    console.log('[Analytics] Google Analytics (UA) 已加载');
}

/**
 * 初始化自定义统计脚本
 */
function initCustomAnalytics() {
    if (!AnalyticsConfig.custom.enabled || !AnalyticsConfig.custom.scripts.length) {
        return;
    }
    
    AnalyticsConfig.custom.scripts.forEach(scriptConfig => {
        const script = document.createElement('script');
        script.src = scriptConfig.src;
        if (scriptConfig.async) {
            script.async = true;
        }
        document.head.appendChild(script);
        console.log(`[Analytics] ${scriptConfig.name} 已加载`);
    });
}

/**
 * 初始化所有已启用的数据分析工具
 */
function initAllAnalytics() {
    // 等待 DOM 加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initBaiduAnalytics();
            initGoogleAnalytics();
            initGoogleUA();
            initCustomAnalytics();
        });
    } else {
        initBaiduAnalytics();
        initGoogleAnalytics();
        initGoogleUA();
        initCustomAnalytics();
    }
}

// 自动初始化
initAllAnalytics();

// 导出配置和方法（如果需要在其他地方使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AnalyticsConfig,
        initBaiduAnalytics,
        initGoogleAnalytics,
        initGoogleUA,
        initCustomAnalytics,
        initAllAnalytics
    };
}
