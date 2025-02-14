import { TbBrandGithubFilled } from 'react-icons/tb'
import { LiaLinkedinIn } from 'react-icons/lia'
import { MdArticle } from 'react-icons/md'
import { HiMiniArrowUpRight } from 'react-icons/hi2'
import Avatar from '../assets/general/avatar.webp'
import Curriculo from '../assets/general/curriculo.pdf'

const About = () => {
  return (
    <div id='about' className='space-y-4'>
      <div className='flex items-center gap-2'>
        <div className='rounded-full bg-tertiary'>
          <img
            src={Avatar}
            alt=''
            className='h-12 w-12 rounded-full brightness-95'
          />
        </div>
        <span>Vinícius Souza</span>
      </div>
      <div className='space-y-2'>
        <h1 className='text-lg font-medium leading-none'>
          Desenvolvedor WEB Full Stack
        </h1>
        <p className='text-justify leading-6 text-secondary'>
          Gosto de criar soluções digitais elegantes e funcionais. Valorizo a
          colaboração e estou sempre em busca de aprendizado. Meu objetivo é
          criar experiências envolventes que façam a diferença.
        </p>
      </div>
      <div className='flex gap-3'>
        <Anchor href='https://github.com/vmsz'>
          <TbBrandGithubFilled size={24} />
        </Anchor>
        <Anchor href='https://www.linkedin.com/in/vmsz/'>
          <LiaLinkedinIn size={24} />
        </Anchor>
        <Anchor href={Curriculo}>
          <MdArticle size={24} />
        </Anchor>
      </div>
      <div className='space-y-1'>
        <h2 className='text-lg font-medium'>Habilidades</h2>
        <div className='flex gap-10 pl-5 leading-6 text-secondary'>
          <ul className='list-disc'>
            <li>React</li>
            <li>Node.js</li>
            <li>Banco de dados SQL</li>
          </ul>
          <ul className='list-disc'>
            <li>Manutenção de Software</li>
            <li>Manutenção de Hardware</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const Anchor = props => {
  return (
    <div className='flex gap-0.5'>
      <a
        href={props.href}
        className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-secondary transition-all hover:scale-110 hover:brightness-responsive active:scale-90'
        rel='noopener noreferrer'
        target='_blank'
      >
        {props.children}
      </a>
      <HiMiniArrowUpRight size={16} color='var(--secondary-text)' />
    </div>
  )
}

export { About }
