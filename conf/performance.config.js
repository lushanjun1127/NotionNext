/**
 * 性能优化配置（优化重构版）
 */

// 辅助函数：安全地将环境变量转为布尔值
const toBool = (val, defaultVal = true) => {
  if (val === undefined || val === null || val === '') return defaultVal
  return String(val).toLowerCase() === 'true' || val === '1'
}

// 辅助函数：安全地将环境变量转为数字
const toNum = (val, defaultVal) => {
  const num = Number(val)
  return isNaN(num) ? defaultVal : num
}

module.exports = {
  // 预加载配置
  PRELOAD_CRITICAL_RESOURCES: toBool(
    process.env.NEXT_PUBLIC_PRELOAD_CRITICAL_RESOURCES,
    true
  ),
  
  // 懒加载配置
  LAZY_LOAD_IMAGES: toBool(
    process.env.NEXT_PUBLIC_LAZY_LOAD_IMAGES,
    true
  ),
  LAZY_LOAD_THRESHOLD: process.env.NEXT_PUBLIC_LAZY_LOAD_THRESHOLD || '200px',
  
  // 代码分割配置
  ENABLE_CODE_SPLITTING: toBool(
    process.env.NEXT_PUBLIC_ENABLE_CODE_SPLITTING,
    true
  ),
  CHUNK_SIZE_LIMIT: toNum(
    process.env.NEXT_PUBLIC_CHUNK_SIZE_LIMIT,
    244000
  ), // 244KB
  
  // 缓存配置
  BROWSER_CACHE_TTL: toNum(
    process.env.NEXT_PUBLIC_BROWSER_CACHE_TTL,
    86400
  ), // 24小时
  CDN_CACHE_TTL: toNum(
    process.env.NEXT_PUBLIC_CDN_CACHE_TTL,
    604800
  ), // 7天
  
  // 压缩配置 (Vercel/Netlify等托管平台默认自带这些，一般无需额外开启)
  ENABLE_GZIP: toBool(process.env.NEXT_PUBLIC_ENABLE_GZIP, true),
  ENABLE_BROTLI: toBool(process.env.NEXT_PUBLIC_ENABLE_BROTLI, true),
  
  // 字体优化
  FONT_DISPLAY: process.env.NEXT_PUBLIC_FONT_DISPLAY || 'swap',
  PRELOAD_FONTS: toBool(process.env.NEXT_PUBLIC_PRELOAD_FONTS, true),
  
  // 第三方脚本优化
  DEFER_THIRD_PARTY_SCRIPTS: toBool(
    process.env.NEXT_PUBLIC_DEFER_THIRD_PARTY_SCRIPTS,
    true
  ),
  
  // 图片优化
  WEBP_SUPPORT: toBool(process.env.NEXT_PUBLIC_WEBP_SUPPORT, true),
  AVIF_SUPPORT: toBool(process.env.NEXT_PUBLIC_AVIF_SUPPORT, true),
  
  // 预取配置
  PREFETCH_LINKS: toBool(process.env.NEXT_PUBLIC_PREFETCH_LINKS, true),
  PREFETCH_IMAGES: toBool(process.env.NEXT_PUBLIC_PREFETCH_IMAGES, false),
  
  // 性能监控
  ENABLE_WEB_VITALS: toBool(process.env.NEXT_PUBLIC_ENABLE_WEB_VITALS, true),
  
  // 性能核心指标预算
  PERFORMANCE_BUDGET: {
    FCP: 1800, // First Contentful Paint (ms) 首次内容绘制
    LCP: 2500, // Largest Contentful Paint (ms) 最大内容绘制
    FID: 100,  // First Input Delay (ms) 首次输入延迟
    CLS: 0.1   // Cumulative Layout Shift 累积布局偏移
  }
}
