const CONFIG = {
  // 开启首页大图（配置背景图请在 Notion 配置中心或环境变量里传 HEXO_HOME_BANNER）
  HEXO_HOME_BANNER_ENABLE: true, 
  
  // 首页大图标语（已按你的要求修改，多个用英文逗号隔开，自动轮播）
  HEXO_HOME_BANNER_GREETINGS: [
    '陆山君的博客',
    '记录学习与思考',
    '欢迎来到我的小窝🎉'
  ], 

  HEXO_HOME_NAV_BUTTONS: true, // 首页是否显示分类大图标按钮
  HEXO_HOME_NAV_BACKGROUND_IMG_FIXED: false, // 首页背景图滚动时是否固定（建议 false，防止移动端加载不出图片）
  HEXO_SHOW_START_READING: true, // 是否显示开始阅读按钮

  // 菜单配置
  HEXO_MENU_INDEX: true, // 显示首页
  HEXO_MENU_CATEGORY: true, // 显示分类
  HEXO_MENU_TAG: true, // 显示标签
  HEXO_MENU_ARCHIVE: true, // 显示归档
  HEXO_MENU_SEARCH: true, // 显示搜索
  HEXO_MENU_RANDOM: true, // 显示随机跳转按钮

  HEXO_POST_LIST_COVER: true, // 列表显示文章封面
  HEXO_POST_LIST_COVER_HOVER_ENLARGE: true, // 列表鼠标悬停放大（已开启，增加高级感）

  HEXO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEXO_POST_LIST_SUMMARY: true, // 文章摘要
  HEXO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEXO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEXO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEXO_ARTICLE_COPYRIGHT: true, // 文章版权声明
  HEXO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEXO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEXO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEXO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEXO_WIDGET_TO_TOP: true,
  HEXO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEXO_WIDGET_DARK_MODE: true, // 夜间模式
  HEXO_WIDGET_TOC: true, // 移动端悬浮目录

  // 🎨 颜色配置（已改为红黑风的暗红色，配合深色模式效果绝佳）
  HEXO_COLOR_PRIMARY: '#ff4d4f', 
  HEXO_THEME_COLOR: '#ff4d4f', // 截图里那种亮红色

  /** 文章详情页客户端切换时，主栏显示卡片+转圈占位 */
  HEXO_ARTICLE_ROUTE_LOADING: true
}
export default CONFIG
