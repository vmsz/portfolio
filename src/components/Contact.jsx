import { MdOutlineShortcut } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { IoMail } from 'react-icons/io5'
import { useState } from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col gap-3 max-sm:items-center'>
      <h1 className='text-lg font-medium'>Contato</h1>
      <div className='flex flex-wrap gap-10 max-sm:justify-center'>
        <ContactForm />
        <div className='space-y-5'>
          <ContactMethod
            icon={<FaMapMarkerAlt size={24} color='var(--accent)' />}
            title='Localização'
            subtitle='Belo Horizonte, Minas Gerais'
          />
          <ContactMethod
            icon={<IoMail size={24} color='var(--accent)' />}
            title='Email'
            subtitle='viniciusmdsz@outlook.com'
          />
          <ContactMethod
            icon={<IoLogoWhatsapp size={24} color='var(--accent)' />}
            title='WhatsApp'
            subtitle='+55 (31) 97360-2800'
          />
        </div>
      </div>
    </div>
  )
}

const ContactForm = () => {
  const [message, setMessage] = useState()
  const handleSubmit = async event => {
    setMessage('Enviando Mensagem...')
    await submitForm(event)
      .then(result => {
        setMessage(result)
      })
      .catch(() => {
        setMessage(
          'Erro: Mensagem detectada como SPAM ou servidor indisponível',
        )
      })
  }
  const submitForm = async event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.append('access_key', '2f9719e5-025b-4e32-9125-0034a02f56c4')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    const data = await response.json()

    if (data.success) {
      event.target.reset()
      return 'Mensagem enviada com sucesso!'
    }
  }

  return (
    <form className='flex flex-col items-center gap-3' onSubmit={handleSubmit}>
      <Input placeholder='Seu Nome' name='name' type='text' required={true} />
      <Input
        placeholder='Seu Email'
        name='email'
        type='email'
        required={true}
      />
      <textarea
        className='h-48 w-64 resize-none rounded-2xl bg-secondary p-3 transition-all placeholder:text-secondary hover:scale-105 focus:scale-105'
        name='message'
        placeholder='Sua Mensagem'
        rows={15}
        required
      />
      <button
        type='submit'
        className='flex h-fit w-fit items-center gap-2 rounded-xl bg-secondary px-6 py-2 transition-all hover:scale-110 hover:brightness-responsive active:scale-95'
      >
        Enviar <MdOutlineShortcut size={22} />
      </button>
      <span className='max-w-64 text-center leading-tight'>{message}</span>
    </form>
  )
}

const Input = props => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className='h-8 w-64 rounded-xl bg-secondary px-2 transition-all placeholder:text-secondary hover:scale-105 focus:scale-105'
    />
  )
}

const ContactMethod = props => {
  return (
    <div className='text-lg'>
      <div className='flex items-center gap-2'>
        {props.icon}
        <h1 className=''>{props.title}</h1>
      </div>
      <p className='text-secondary'>{props.subtitle}</p>
    </div>
  )
}

export { Contact }
