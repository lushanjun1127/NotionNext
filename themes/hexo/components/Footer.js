import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE') || currentYear
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative z-10 flex-shrink-0 bg-hexo-light-gray dark:bg-black w-full leading-7 text-gray-500 dark:text-gray-400 text-sm py-8 px-4 mt-10 border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-4xl mx-auto flex flex-col items-center justify-center space-y-2'>
        
        {/* 第一行：版权与作者 */}
        <div className='flex items-center flex-wrap justify-center space-x-1'>
          <span className='flex items-center'>
            <i className='far fa-copyright mr-1' />
            {copyrightDate}
          </span>
          <span className='mx-1'>|</span>
          <span className='flex items-center'>
            Made with
            <i className='mx-1 fas fa-heart text-[var(--theme-color)] animate-[pulse_1.5s_ease-in-out_infinite]' />
            by
            <a
              href={siteConfig('LINK')}
              target='_blank'
              rel='noopener noreferrer'
              className='ml-1 font-medium text-gray-700 dark:text-gray-300 hover:text-[var(--theme-color)] transition-colors underline decoration-transparent hover:decoration-[var(--theme-color)] underline-offset-4'
            >
              {siteConfig('AUTHOR')}
            </a>
          </span>
        </div>

        {/* 第二行：备案与统计信息 */}
        <div className='flex items-center flex-wrap justify-center text-xs space-x-3 pt-2 opacity-80'>
          <BeiAnSite />
          <BeiAnGongAn />
          <span className='hidden busuanzi_container_site_pv items-center'>
            <i className='fas fa-eye mr-1' />
            <span className='busuanzi_value_site_pv'>-</span>
          </span>
          <span className='hidden busuanzi_container_site_uv items-center'>
            <i className='fas fa-users mr-1' />
            <span className='busuanzi_value_site_uv'>-</span>
          </span>
        </div>

        {/* 第三行：站点标语 */}
        {siteConfig('BIO') && (
          <div className='text-xs text-gray-400 dark:text-gray-600 pt-1 text-center'>
            {title} <span className='mx-1'>|</span> {siteConfig('BIO')}
          </div>
        )}

        {/* 驱动声明 */}
        <div className='pt-2'>
          <PoweredBy />
        </div>
      </div>
    </footer>
  )
}

export default Footer
