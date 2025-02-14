import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { applyUserPreferredTheme } from './helpers/applyUserPreferredTheme'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { ThemeSwitch } from './components/ThemeSwitch'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

applyUserPreferredTheme()

root.render(
  <StrictMode>
    <div className='flex h-full w-full flex-wrap items-center justify-center bg-primary px-5 font-[Inter] text-md text-primary antialiased'>
      <ThemeSwitch />
      <div className='flex flex-wrap gap-20'>
        <div className='max-w-2xl space-y-5'>
          <About />
          <Contact />
        </div>
        <div className='mt-5 max-w-2xl'>
          <Projects />
        </div>
      </div>
    </div>
  </StrictMode>,
)
