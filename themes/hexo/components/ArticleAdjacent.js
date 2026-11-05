import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'

/**
 * 上一篇，下一篇文章
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleAdjacent ({ prev, next }) {
  const { locale } = useGlobal()

  if (!prev || !next || !siteConfig('HEXO_ARTICLE_ADJACENT', null, CONFIG)) {
    return <></>
  }

  // 安全的链接生成逻辑：如果 slug 以 / 开头，就不再重复加 /
  const getHref = (slug) => {
    if (!slug) return '#'
    return slug.startsWith('/') ? slug : `/${slug}`
  }

  return (
    <section className='pt-8 flex flex-col md:flex-row justify-between items-stretch gap-3 m-1'>
      {/* 上一篇卡片 */}
      <SmartLink
        href={getHref(prev.slug)}
        passHref
        className='group flex-1 py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-hexo-black-gray hover:border-[var(--theme-color)] dark:hover:border-[var(--theme-color)] transition-all duration-300 flex flex-col justify-center cursor-pointer'>
        <div className='text-xs text-gray-400 mb-1 flex items-center'>
          <i className='mr-1 fas fa-angle-left transition-transform duration-300 group-hover:-translate-x-1' />
          上一篇
        </div>
        <div className='text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 truncate group-hover:text-[var(--theme-color)] transition-colors'>
          {prev.title}
        </div>
      </SmartLink>

      {/* 下一篇卡片 */}
      <SmartLink
        href={getHref(next.slug)}
        passHref
        className='group flex-1 py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-hexo-black-gray hover:border-[var(--theme-color)] dark:hover:border-[var(--theme-color)] transition-all duration-300 flex flex-col justify-center items-end text-right cursor-pointer'>
        <div className='text-xs text-gray-400 mb-1 flex items-center'>
          下一篇
          <i className='ml-1 fas fa-angle-right transition-transform duration-300 group-hover:translate-x-1' />
        </div>
        <div className='text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 truncate w-full group-hover:text-[var(--theme-color)] transition-colors'>
          {next.title}
        </div>
      </SmartLink>
    </section>
  )
}
