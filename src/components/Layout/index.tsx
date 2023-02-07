import { AiFillGithub } from 'react-icons/ai'
import { BgLines } from '../BgLines'
import { Header } from '../Header'

interface LayoutProps {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='relative min-h-screen dark:bg-zinc-900 dark:bg-gradient-to-l dark:from-transparent dark:text-slate-200 transition-colors duration-200'>
      <Header />
      <main className='relative min-h-screen'>
        <div className='h-0 mx-auto' aria-hidden='true'>
          <BgLines />
        </div>
        {children}
      </main>
      <footer className='bg-neutral-900 dark:bg-zinc-900 border-t border-slate-50/10 flex gap-2 justify-center items-center p-6 text-slate-200 font-semibold text-lg'>
        <a
          href='https://github.com/joaquinns/cohere-node-ia-fixMyEnglish'
          target='_blank'
          className='flex gap-2 flex-col md:flex-row items-center'
        >
          <AiFillGithub size='2rem' />
          Github Repo
        </a>
      </footer>
    </div>
  )
}
