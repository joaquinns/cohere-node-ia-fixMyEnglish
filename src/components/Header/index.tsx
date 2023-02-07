import { BiMoon, BiSun } from 'react-icons/bi'
import { useTheme } from '../../context/ThemeContext'

export const Header = () => {
  const { dark, handleToggleTheme } = useTheme()
  return (
    <header className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-200 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'>
      <nav className='max-w-screen-lg mx-auto h-full flex justify-between items-center p-4 lg:px-0'>
        <div></div>

        <div>
          <button
            onClick={handleToggleTheme}
            className='p-2 bg-violet-700 hover:bg-violet-900 dark:bg-blue-400
               dark:hover:bg-blue-500 rounded-md ease duration-150 text-slate-100'
          >
            {dark ? <BiSun size='2rem' /> : <BiMoon size='2rem' />}
          </button>
        </div>
      </nav>
    </header>
  )
}
