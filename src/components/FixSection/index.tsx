import { FaMicrophone } from 'react-icons/fa'
import { useFixText } from '../../hooks/useFixText'
import { Accordion } from '../Accordion'
import { Button } from '../Button'

export const FixSection = () => {
  const {
    browserSupportsSpeechRecognition,
    definitions,
    fixedText,
    handleChangeTextToFix,
    handleFix,
    loading,
    textToFix,
    listening,
    SpeechRecognition
  } = useFixText()

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  return (
    <section className='relative flex flex-col gap-4 w-full py-14 px-4 lg:px-0'>
      {definitions && definitions.length > 0 && (
        <Accordion definitions={definitions} />
      )}
      {/*       <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={async () => SpeechRecognition.stopListening()}>
          Stop
        </button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div> */}
      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <div className='flex flex-1 flex-col gap-4'>
          <label htmlFor='toFix' className='text-xl font-semibold'>
            Text to fix
          </label>
          <textarea
            onChange={(evt) => handleChangeTextToFix(evt)}
            value={textToFix}
            name='toFix'
            rows={10}
            className='rounded w-full dark:bg-zinc-800 focus:ring-4 focus:ring-cyan-100 dark:focus:ring-gray-800 p-3 resize-none dark:text-slate-200 text-lg
            outline-none
            border-slate-200 shadow-lg dark:border-slate-50/[0.20] border          
            '
            placeholder='Example text to fix'
          ></textarea>
          <div className='flex justify-between items-center'>
            <button
              className={`p-4 rounded text-slate-200 dark:bg-indigo-500 hover:bg-blue-700 dark:hover:bg-indigo-700 transition-colors ${
                listening
                  ? 'bg-red-600 dark:bg-red-600'
                  : 'dark:bg-indigo-500 bg-blue-500'
              }`}
              onClick={async () => await SpeechRecognition.startListening()}
            >
              <FaMicrophone size={'1.3rem'} />
            </button>
            <Button handleClick={() => handleFix(textToFix)} loading={loading}>
              Fix Text!
            </Button>
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <label htmlFor='toFix' className='text-xl font-semibold'>
            Fixed
          </label>
          <textarea
            disabled={fixedText ? false : true}
            name='fixed'
            value={fixedText ? fixedText : ''}
            rows={10}
            className='rounded w-full dark:bg-zinc-800 focus:ring-4 focus:ring-cyan-100 dark:focus:ring-gray-800 p-3 resize-none dark:text-slate-200 text-lg
            outline-none
            border-slate-200 shadow-lg dark:border-slate-50/[0.20] border          
            '
            placeholder='Example text to fix'
          ></textarea>
        </div>
      </div>
    </section>
  )
}
