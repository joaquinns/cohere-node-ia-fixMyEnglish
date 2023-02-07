interface ButtonProps {
  handleClick?: () => void
  children: string
  loading: boolean
}

export const Button = ({
  handleClick,
  children,
  loading = false
}: ButtonProps) => {
  if (loading) {
    return (
      <button
        disabled
        className='flex justify-center items-center gap-2 py-3 px-8 rounded font-semibold text-md  dark:bg-zinc-700 bg-blue-800 text-slate-100'
      >
        <div
          style={{ borderTopColor: 'transparent' }}
          className='w-7 h-7 border-4 border-white border-double rounded-full animate-spin'
        ></div>
        loading
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      className='py-3 px-8 rounded font-semibold text-lg transition-colors text-slate-100 bg-blue-500 hover:bg-blue-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
    >
      {children}
    </button>
  )
}
