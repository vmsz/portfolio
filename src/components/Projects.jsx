import { HiMiniArrowUpRight } from 'react-icons/hi2'
import SoftwareOrso from '../assets/thumbnails/Software Orso.png'

const Projects = () => {
  return (
    <div id='projects' className='space-y-5'>
      <h1 className='text-lg font-medium'>Projetos selecionados</h1>
      <div className='space-y-10'>
        <Project
          date='12/2024 - 02/2025'
          name='Software Orso'
          desc='Software orçamentista de engenharia. Contém um algoritmo de guias, salvar e carregar progresso, exportação em PDF e Excel, editor de composições e BDI.'
          href='https://github.com/vmsz/software-orso'
          thumbnail={SoftwareOrso}
        />
      </div>
    </div>
  )
}

const Project = props => {
  return (
    <div className='flex items-end gap-10'>
      <div className='space-y-2'>
        <span className='text-sm text-tertiary'>{props.date}</span>
        <h1 className='font-medium'>{props.name}</h1>
        <p className='text-ellipsis text-justify leading-6 text-secondary'>
          {props.desc}
        </p>
        <div className='flex'>
          <a
            href={props.href}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-md bg-secondary px-4 py-2 transition-all hover:scale-110 hover:brightness-responsive active:scale-90'
          >
            Visitar
          </a>
          <HiMiniArrowUpRight size={22} color='var(--secondary-text)' />
        </div>
      </div>
      <div
        className='flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl bg-tertiary'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${props.thumbnail})`,
        }}
      ></div>
    </div>
  )
}

export { Projects }
