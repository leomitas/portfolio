import React from 'react'
import { Section } from './styles'
import Formation from './formation'
import Techs from './techs'

const AboutMe = () => {
  return (
    <Section className='full-screen' id='about-me'>
      <div className='container'>
        <h2>Sobre mim:</h2>
        <div className='about-me'>
          <p>
            Sou desenvolvedor Web Front End formado, por meio da Kenzie Academy.
            Durante a minha trajetória aprendi desde semântica HTML até consumo
            de API's locais e públicas, JavaScript, ReactJS e React com
            TypeScript, CSS puro, metodologia SCRUM, git flow e trabalho em
            equipe com git. Junto de todas essas hard skills, também foi
            desenvolvida várias soft skills como gestão de tempo, produtividade,
            formação de novos hábitos, comunicação clara e assertiva,
            colaboração e autonomia.
          </p>
        </div>
        <Formation />
        <Techs />
      </div>
    </Section>
  )
}

export default AboutMe
