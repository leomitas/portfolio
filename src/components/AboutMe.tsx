import React from 'react'

export default function AboutMe() {
  return (
    <section className='p-4 max-w-7xl mx-auto xl:px-0'>
      <h2 id='about-me'>Sobre mim:</h2>
      <p>
        Sou desenvolvedor Web full stack. Tenho mais de 1 ano de expeciência com
        semântica HTML até consumo e criação de APIs locais e públicas, React
        com TypeScript, CSS puro, metodologia SCRUM, git flow e trabalho em
        equipe com git. Junto de todas essas hard skills, também desenvolvi
        várias soft skills como gestão de tempo, produtividade, formação de
        novos hábitos, comunicação clara e assertiva, colaboração e autonomia.
      </p>
      <ul>
        <h2>Formação:</h2>
        <li>
          <p>
            <span>Estácio</span>, Engenharia de Software | Julho de 2023 - Julho
            2026
          </p>
        </li>
        <li>
          <p>
            <span>Kenzie Academy Brasil</span>, Desenvolvimento-Web Full-Stack |
            Julho de 2022- Julho de 2023
          </p>
        </li>
        <li>
          <p>
            <span>SENAI</span>, Técnico em desenvolvimento de sistemas | Janeiro
            de 2019- Julho de 2020
          </p>
        </li>
      </ul>
    </section>
  )
}
