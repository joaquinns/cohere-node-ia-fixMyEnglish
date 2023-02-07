import { FixSection } from './components/FixSection'
import { Layout } from './components/Layout'
import { Pulse } from './components/Pulse'

function App() {
  return (
    <Layout>
      <div className='relative container mx-auto'>
        <h1 className='text-3xl text-blue-500 dark:text-indigo-600 lg:text-5xl font-bold text-center my-16'>
          Fix your english
        </h1>

        <h3 className='text-xl lg:text-4xl text-center my-6 text-neutral-900 dark:text-slate-300'>
          This app was created for the Hackaton 2023 of midudev!
        </h3>

        <Pulse />
        <FixSection />
      </div>
    </Layout>
  )
}

export default App
