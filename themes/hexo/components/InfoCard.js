import { useRouter } from 'next/router'
import Card from './Card'
import SocialButton from './SocialButton'
import MenuGroupCard from './MenuGroupCard'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function InfoCard(props) {
  const { className, siteInfo } = props
  const router = useRouter()
  
  return (
    <Card className={`border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden ${className || ''}`}>
      <div
        className='justify-center items-center flex pt-8 pb-4 dark:text-gray-100 cursor-pointer group'
        onClick={() => {
          router.push('/')
        }}
      >
        {/* 头像部分：增加了悬浮时的旋转和缩放动效 */}
        <div className="relative rounded-full p-1 bg-gradient-to-tr from-[var(--theme-color)] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          <LazyImage 
            src={siteInfo?.icon} 
            className='rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 bg-white dark:bg-gray-900' 
            width={110} 
            height={110} 
            alt={siteConfig('AUTHOR')} 
          />
        </div>
      </div>
      
      {/* 作者名 */}
      <div className='font-bold text-center text-xl pb-2 text-gray-800 dark:text-gray-200 group-hover:text-[var(--theme-color)] transition-colors'>
        {siteConfig('AUTHOR')}
      </div>
      
      {/* 个人简介 */}
      <div className='text-sm text-center text-gray-500 dark:text-gray-400 px-4 pb-4 line-clamp-2'>
        {siteConfig('BIO')}
      </div>
      
      {/* 数据栏 (文章/分类/标签数) */}
      <MenuGroupCard {...props} />
      
      {/* 社交图标 */}
      <SocialButton />
    </Card>
  )
}
