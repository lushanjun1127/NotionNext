import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'
import NotByAI from '@/components/NotByAI'
import { resolveArticleCopyrightText } from '@/lib/utils/articleCopyright'

export default function ArticleCopyright({ post }) {
  const router = useRouter()
  const [path, setPath] = useState('')
  
  // 修复：只在客户端挂载时获取一次真实 URL，避免陷入无限循环或重复渲染
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.href)
    }
  }, [])

  const { locale } = useGlobal()
  const copyrightText = resolveArticleCopyrightText({
    post,
    locale,
    mode: siteConfig('HEXO_ARTICLE_COPYRIGHT', null, CONFIG)
  })

  if (!copyrightText) {
    return <></>
  }

  return (
    <section className='dark:text-gray-300 mt-8 mx-1'>
      <ul className='overflow-x-auto text-sm bg-gray-50/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm p-6 rounded-r-xl border-l-4 border-[var(--theme-color)] shadow-sm space-y-3'>
        <li className='flex items-start'>
          <strong className='mr-2 whitespace-nowrap min-w-[60px] text-gray-600 dark:text-gray-400'>
            {locale.COMMON.AUTHOR}:
          </strong>
          <SmartLink href={'/about'} className='hover:text-[var(--theme-color)] transition-colors hover:underline'>
            {siteConfig('AUTHOR')}
          </SmartLink>
        </li>
        <li className='flex items-start'>
          <strong className='mr-2 whitespace-nowrap min-w-[60px] text-gray-600 dark:text-gray-400'>
            {locale.COMMON.URL}:
          </strong>
          <a
            className='whitespace-normal break-all hover:text-[var(--theme-color)] transition-colors hover:underline'
            href={path}
            target='_blank'
            rel='noopener noreferrer'
          >
            {path}
          </a>
        </li>
        <li className='flex items-start'>
          <strong className='mr-2 whitespace-nowrap min-w-[60px] text-gray-600 dark:text-gray-400'>
            {locale.COMMON.COPYRIGHT}:
          </strong>
          <span className='leading-relaxed'>{copyrightText}</span>
        </li>
        {siteConfig('HEXO_ARTICLE_NOT_BY_AI', false, CONFIG) && (
          <li className='pt-2'>
            <NotByAI />
          </li>
        )}
      </ul>
    </section>
  )
}
