import { useState } from 'react'

interface AccordionProps {
  definitions: string[]
}

export const Accordion = ({ definitions }: AccordionProps) => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => setToggle(!toggle)

  return (
    <div className='relative rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 shadow-md'>
      <h2>
        <button
          onClick={handleToggle}
          type='button'
          className={`dark:bg-zinc-900 bg-white relative flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border ${
            toggle ? 'border-b-0 rounded-t-xl' : 'rounded-xl'
          } border-gray-200 focus:ring-4 focus:ring-cyan-100 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
        >
          <span className='text-lg dark:text-gray-200 text-neutral-900'>
            Definitions
          </span>
          {toggle ? (
            <svg
              className='w-6 h-6 rotate-180 shrink-0'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
          ) : (
            <svg
              className='w-6 h-6 shrink-0'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
          )}
        </button>
      </h2>
      <div
        className={`${
          toggle ? 'block' : 'hidden'
        } transition duration-300 ease-in-out`}
      >
        <div className='p-6 font-light border rounded-b-xl border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-neutral-900'>
          {definitions.map((definition, i) => (
            <p
              key={i}
              className='mb-2 text-gray-800 dark:text-gray-400 text-md font-semibold'
            >
              {definition}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
