import LazyImage from '@/components/LazyImage'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

/**
 * 最新文章列表
 * @param posts 所有文章数据
 * @param sliceCount 截取展示的数量 默认6
 * @constructor
 */
const LatestPostsGroup = ({ latestPosts, siteInfo }) => {
  const currentPath = useRouter().asPath
  const { locale } = useGlobal()

  if (!latestPosts) {
    return <></>
  }

  return (
    <div className="pb-2">
      {/* 卡片标题 */}
      <div className='mb-4 px-1 flex items-center text-sm font-medium text-gray-600 dark:text-gray-300'>
        <i className='mr-2 fas fa-history text-[var(--theme-color)]' />
        {locale.COMMON.LATEST_POSTS}
      </div>

      {/* 文章列表 */}
      <div className="flex flex-col space-y-3 px-1">
        {latestPosts.map(post => {
          const headerImage = post?.pageCoverThumbnail || siteInfo?.pageCover
          const selected = currentPath === post?.href

          return (
            <SmartLink
              key={post.id}
              title={post.title}
              href={post?.href}
              passHref
              className={`group flex items-center p-2 rounded-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 ${selected ? 'bg-gray-50 dark:bg-gray-800/50' : ''}`}>
              
              {/* 左侧缩略图：圆角、悬停放大 */}
              <div className='w-20 h-14 shrink-0 overflow-hidden rounded-lg relative border border-gray-100 dark:border-gray-800'>
                <LazyImage
                  alt={post?.title}
                  src={`${headerImage}`}
                  className='object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              {/* 右侧文字信息 */}
              <div className='ml-3 flex flex-col flex-grow min-w-0 justify-center'>
                <div className={`text-sm line-clamp-2 transition-colors duration-300 ${selected ? 'text-[var(--theme-color)] font-medium' : 'text-gray-700 dark:text-gray-300 group-hover:text-[var(--theme-color)]'}`}>
                  {post.title}
                </div>
                <div className='text-xs text-gray-400 mt-1 flex items-center'>
                  <i className='far fa-clock mr-1 opacity-70' />
                  {post.lastEditedDay}
                </div>
              </div>
            </SmartLink>
          )
        })}
      </div>
    </div>
  )
}
export default LatestPostsGroup
