export const Pulse = () => {
  return (
    <svg
      className='absolute top-[9rem] md:top-[-2rem] lg:top-[-4rem] left-[-5rem] md:left-[-9rem] lg:left-[-12rem] z-0 w-[220px] h-[200px] md:w-[340px] md:h-[320px] lg:w-[540px] lg:h-[520px]'
      viewBox='0 0 540 520'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g className='fill-current dark:text-indigo-500 text-blue-500'>
        <circle className='pulse' cx='270' cy='260' r='64'></circle>
        <circle
          className='pulse'
          style={{ animationDelay: '3s' }}
          cx='270'
          cy='260'
          r='64'
        ></circle>
        <circle
          className='pulse delay-[-4000ms]'
          style={{ animationDelay: '6s' }}
          cx='270'
          cy='260'
          r='64'
        ></circle>
      </g>
    </svg>
  )
}
