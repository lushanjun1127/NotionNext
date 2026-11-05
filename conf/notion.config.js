/**
 * 读取Notion相关的配置
 * 如果需要在Notion中添加自定义字段，可以修改此文件
 */
module.exports = {
  NOTION_INDEX: process.env.NEXT_PUBLIC_NOTION_INDEX || 0,

  // 自定义配置notion数据库字段名（已完全按照你的截图适配）
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || '密码',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || '类型', 
    
    // 对应你截图里的“类型”值
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || '文章', 
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || '页面', 
    type_notice: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || '公告', 
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || '菜单', 
    type_sub_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || '二级菜单', 
    type_member: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MEMBER || '成员', 
    type_event: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_EVENT || '活动', 
    
    // 对应你截图里的表头名称
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || '标题', 
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || '状态',
    
    // 对应你截图里的状态值（注意这里我加了兼容）
    status_publish: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || '发布', 
    status_invisible: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || '隐藏', 
    
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || '摘要',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || '路径',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || '分类',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || '日期',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || '标签',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || '图标',
    ext: process.env.NEXT_PUBLIC_NOTION_PROPERTY_EXT || '扩展' 
  },
  NOTION_ACTIVE_USER: process.env.NOTION_ACTIVE_USER || '',
  NOTION_TOKEN_V2: process.env.NOTION_TOKEN_V2 || '' 
}
