import Projects from '@/components/Projects'
import React from 'react'

export default function page() {
  return (
    <section className='max-w-7xl mx-auto px-4 xl:px-0 flex flex-col gap-16 pt-16'>
      <div>
        <h2 className='font-bold text-4xl'>Meus Trabalhos Recentes</h2>
        <p>Aqui está alguns projetos em que trabalhei recentemente.</p>
      </div>
      <Projects />
    </section>
  )
}
