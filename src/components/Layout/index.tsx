interface LayoutProps {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className='min-h-screen dark:bg-zinc-900 text-slate-200'>
        {children}
      </main>
      <footer>zoi un footer :D</footer>
    </>
  )
}
