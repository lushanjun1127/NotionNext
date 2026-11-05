import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ post, className }) => {
  const { locale } = useGlobal()
  
  if (post?.blockMap) {
    return (
      <div className={className}>
        {/* 将边框颜色与主题色关联，并增加了悬停时的微动效 */}
        <section 
          id='announcement-wrapper' 
          className="group dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray transition-all duration-300 hover:border-[var(--theme-color)]/50 hover:shadow-sm"
        >
          {/* 标题部分，加入主题色点缀 */}
          <div className="flex items-center font-medium text-gray-700 dark:text-gray-200 mb-3">
            <i className='mr-2 fas fa-bullhorn text-[var(--theme-color)]' />
            {post?.title || locale.COMMON.ANNOUNCEMENT}
          </div>
          
          {/* 正文区域 */}
          {post && (
            <div id="announcement-content" className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <NotionPage post={post} className='text-center' />
            </div>
          )}
        </section>
      </div>
    )
  } else {
    return <></>
  }
}
export default Announcement
