import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useHexoGlobal } from '..'

/**
 * 搜索按钮
 * @returns
 */
export default function SearchButton(props) {
  const { locale } = useGlobal()
  const router = useRouter()
  const { searchModal } = useHexoGlobal()

  function handleSearch() {
    // 如果配置了 Algolia，则打开全屏搜索弹窗
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal.current.openSearch()
    } else {
      // 如果没有配置 Algolia，跳转到独立的搜索页面
      router.push('/search')
    }
  }

  return (
    <div 
      onClick={handleSearch} 
      title={locale.NAV.SEARCH} 
      className='cursor-pointer text-gray-600 dark:text-gray-300 hover:text-[var(--theme-color)] dark:hover:text-[var(--theme-color)] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full w-10 h-10 flex justify-center items-center duration-300 transition-all group'
    >
      <i 
        title={locale.NAV.SEARCH} 
        className="fa-solid fa-magnifying-glass transform transition-transform duration-300 group-hover:scale-110" 
      />
    </div>
  )
}
