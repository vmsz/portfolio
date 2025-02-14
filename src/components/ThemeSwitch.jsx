import { IoIosSunny } from 'react-icons/io'

const ThemeSwitch = () => {
  return (
    <button
      id='theme-switch-button'
      onClick={() => {
        const page = document.body.classList

        if (page.contains('light-theme')) {
          page.remove('light-theme')
          localStorage.setItem('theme', 'dark-theme')
          return page.add('dark-theme')
        }

        page.remove('dark-theme')
        localStorage.setItem('theme', 'light-theme')
        page.add('light-theme')
      }}
      className='fixed right-3 top-3 rounded-full border-neutral-500 bg-secondary p-1 backdrop-blur-lg transition-all hover:scale-110 hover:brightness-responsive'
    >
      <IoIosSunny
        size={32}
        className='shrink-0'
        color='var(--secondary-text)'
      />
    </button>
  )
}

export { ThemeSwitch }
