import Live2D from '@/components/Live2D'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
import CONFIG from '../config'
import { AnalyticsCard } from './AnalyticsCard'
import Announcement from './Announcement'
import Card from './Card'
import Catalog from './Catalog'
import CategoryGroup from './CategoryGroup'
import { InfoCard } from './InfoCard'
import LatestPostsGroup from './LatestPostsGroup'
import TagGroups from './TagGroups'

const HexoRecentComments = dynamic(() => import('./HexoRecentComments'))
const FaceBookPage = dynamic(
  () => {
    let facebook = <></>
    try {
      facebook = import('@/components/FacebookPage')
    } catch (err) {
      console.error(err)
    }
    return facebook
  },
  { ssr: false }
)

/**
 * Hexo主题右侧栏
 * @param {*} props
 * @returns
 */
export default function SideRight(props) {
  const {
    post,
    currentCategory,
    categories,
    latestPosts,
    tags,
    currentTag,
    showCategory,
    showTag,
    rightAreaSlot,
    notice,
    className
  } = props

  const { locale } = useGlobal()

  // 文章全屏处理
  if (post && post?.fullWidth) {
    return null
  }

  // 判断是否显示目录（移动端和桌面端有些布局不同，这里做兜底）
  const showCatalog = post && post.toc && post.toc.length > 1

  return (
    <div
      id='sideRight'
      className={`lg:w-80 lg:pt-8 ${post ? 'lg:pt-0' : 'lg:pt-4'} ${className || ''}`}>
      
      {/* 滚动悬浮容器：添加了更细腻的过渡和间距 */}
      <div className='sticky top-24 space-y-5'>
        
        {/* 1. 文章目录卡片 */}
        {showCatalog && (
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <Catalog toc={post.toc} />
          </Card>
        )}

        {/* 2. 个人信息卡片 */}
        <InfoCard {...props} />

        {/* 3. 数据统计卡片 (由环境变量或配置中心控制) */}
        {siteConfig('HEXO_WIDGET_ANALYTICS', null, CONFIG) && (
          <AnalyticsCard {...props} />
        )}

        {/* 4. 分类卡片 */}
        {showCategory && (
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className='ml-2 mb-2 text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center'>
              <i className='fas fa-th mr-2 text-[var(--theme-color)]' /> 
              {locale.COMMON.CATEGORY}
            </div>
            <CategoryGroup
              currentCategory={currentCategory}
              categories={categories}
            />
          </Card>
        )}

        {/* 5. 标签云卡片 */}
        {showTag && (
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm">
            <TagGroups tags={tags} currentTag={currentTag} />
          </Card>
        )}

        {/* 6. 最新文章卡片 */}
        {siteConfig('HEXO_WIDGET_LATEST_POSTS', null, CONFIG) &&
          latestPosts &&
          latestPosts.length > 0 && (
            <Card className="border border-gray-100 dark:border-gray-800 shadow-sm">
              <LatestPostsGroup {...props} />
            </Card>
          )}

        {/* 7. 博客公告卡片 (你刚优化过的) */}
        <Announcement post={notice} />

        {/* 8. 最近评论 (需配置 Waline) */}
        {siteConfig('COMMENT_WALINE_SERVER_URL') &&
          siteConfig('COMMENT_WALINE_RECENT') && (
            <Card className="border border-gray-100 dark:border-gray-800 shadow-sm">
              <HexoRecentComments />
            </Card>
          )}

        {/* 9. 自定义扩展区域 */}
        {rightAreaSlot}
        
        {/* 10. Facebook 和 Live2D 看板娘 */}
        <FaceBookPage />
        <Live2D />
      </div>
    </div>
  )
}
