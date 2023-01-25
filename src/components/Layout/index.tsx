import { Header } from '../Header'

interface LayoutProps {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen dark:bg-zinc-900 dark:bg-gradient-to-l dark:from-transparent bg-gradient-to-l from-slate-100 dark:text-slate-200 transition-colors duration-200'>
      <Header />
      <main className='min-h-screen'>{children}</main>
    </div>
  )
}
