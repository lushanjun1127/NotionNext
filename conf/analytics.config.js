/**
 * 站点统计插件
 */
module.exports = {
  // Vercel 自带的统计（需要在 Vercel 后台开启 Analytics 功能）
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, 

  // 启用底部的“阅读量/访问数”显示（基于 Vercount 兼容不蒜子）
  ANALYTICS_BUSUANZI_ENABLE: process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, 
  
  // 不蒜子脚本地址（默认走海外可访问的 Vercount 社区版）
  ANALYTICS_BUSUANZI_SCRIPT_URL:
    process.env.NEXT_PUBLIC_BUSUANZI_SCRIPT_URL || 'https://events.vercount.one/js',

  // 百度统计 ID
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', 
  
  // 站长统计 CNZZ ID
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', 
  
  // 谷歌 Analytics ID (e.g: G-XXXXXXXXXX)
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', 

  // 51la 站点统计
  ANALYTICS_51LA_ID: process.env.NEXT_PUBLIC_ANALYTICS_51LA_ID || '', 
  ANALYTICS_51LA_CK: process.env.NEXT_PUBLIC_ANALYTICS_51LA_CK || '', 

  // Matomo 网站统计
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', 
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', 

  // ACKEE 网站访客统计工具
  ANALYTICS_ACKEE_TRACKER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', 
  ANALYTICS_ACKEE_DATA_SERVER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', 
  ANALYTICS_ACKEE_DOMAIN_ID: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', 

  // 搜索引擎站长平台验证（用于收录你的网站）
  SEO_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', 
  SEO_BAIDU_SITE_VERIFICATION: process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', 

  // 微软 Clarity 站点分析（看用户录屏和点击热力图）
  CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || null, 

  // Umami 统计（适合注重隐私的极简统计）
  UMAMI_HOST: process.env.NEXT_PUBLIC_UMAMI_HOST || 'https://cloud.umami.is/script.js', 
  UMAMI_ID: process.env.NEXT_PUBLIC_UMAMI_ID || '', 
}
