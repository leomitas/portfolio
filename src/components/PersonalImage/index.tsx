import React from 'react'
import personalImage from '../../assets/personalImage.png'
import { Section } from './styles'
import { SiLinkedin, SiGithub } from 'react-icons/si'

const PersonalImage = () => {
  return (
    <Section className='container'>
      <div>
        <p>Desenvolvedor Front End</p>
        <p className='text'>
          Olá, eu sou o Leonardo Abreu - Taubaté, SP e tenho 20 anos. Estou a
          procura do meu primeiro emprego para ingressar na área de programação,
          o qual sou apaixonado desde criança.
        </p>
        <div className='links'>
          <a
            href='https://drive.google.com/file/d/18rV9GtaHLwMva2PMEv74HuFVpay1GAZn/view?usp=sharing'
            className='cv'
          >
            Baixar CV
          </a>
          <a href='https://www.linkedin.com/in/leonardo-abreu2402/'>
            <SiLinkedin size={40} color='white' />
          </a>
          <a href='https://github.com/leomitas'>
            <SiGithub size={40} color='white' />
          </a>
        </div>
      </div>
      <img src={personalImage} />
    </Section>
  )
}

export default PersonalImage
