import Card from './Card'

export function AnalyticsCard (props) {
  const { postCount } = props
  
  // 设置一个默认值，防止由于未加载导致显示空白
  const displayPostCount = postCount !== undefined ? postCount : 0

  return (
    <Card>
      <div className='ml-2 mb-4 text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center'>
        <i className='fas fa-chart-area mr-2 text-[var(--theme-color)]' /> 数据统计
      </div>
      
      <div className='text-xs font-light mx-4 space-y-3'>
        <div className='flex justify-between items-center group'>
          <div className='text-gray-500 dark:text-gray-400'>文章数</div>
          <div className='font-medium text-gray-800 dark:text-gray-200 group-hover:text-[var(--theme-color)] transition-colors'>
            {displayPostCount}
          </div>
        </div>

        {/* 访问量 (依赖不蒜子脚本) */}
        <div className='hidden busuanzi_container_site_pv flex justify-between items-center group'>
          <div className='text-gray-500 dark:text-gray-400'>访问量</div>
          <div className='font-medium text-gray-800 dark:text-gray-200 group-hover:text-[var(--theme-color)] transition-colors'>
            <span className='busuanzi_value_site_pv'>-</span>
          </div>
        </div>

        {/* 访客数 (依赖不蒜子脚本) */}
        <div className='hidden busuanzi_container_site_uv flex justify-between items-center group'>
          <div className='text-gray-500 dark:text-gray-400'>访客数</div>
          <div className='font-medium text-gray-800 dark:text-gray-200 group-hover:text-[var(--theme-color)] transition-colors'>
            <span className='busuanzi_value_site_uv'>-</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
