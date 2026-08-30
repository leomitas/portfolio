import { ProjectCarousel } from '@/components/ProjectCarousel'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function page() {
  return (
    <section className='max-w-7xl mx-auto px-4 xl:px-0 flex flex-col gap-4 pt-8 pb-24'>
      <div>
        <h2 className='font-bold text-4xl'>
          Meus <span className='text-ebony-500'>Trabalhos</span> Recentes
        </h2>
        <p>Aqui está alguns projetos em que trabalhei recentemente.</p>
      </div>
      <div className='bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-4'>
        <div className='flex flex-wrap items-center gap-3'>
          <h3 className='text-2xl font-bold'>
            Shinji Okane: Analista de Despesas com IA
          </h3>
          <a
            href='https://shinji-okane-v2.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='text-ebony-400 hover:text-ebony-300 font-medium underline underline-offset-4 transition-colors'
          >
            (shinji-okane-v2.vercel.app)
          </a>
          <a
            href='https://github.com/leomitas/shinji-okane-v2'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 bg-white hover:bg-zinc-200 transition-colors rounded-md py-1.5 px-3'
          >
            <FaGithub color='black' className='w-5 h-5' />
            <span className='text-sm font-mono font-extrabold text-black'>
              GitHub
            </span>
          </a>
        </div>
        <p className='text-zinc-300 leading-relaxed'>
          Dashboard financeiro com IA generativa integrada: o usuário registra
          despesas e receitas em linguagem natural (ex: &quot;Comprei um
          monitor por 1800 reais em 10x&quot;), e a aplicação usa a API do
          Gemini para interpretar o texto, categorizar automaticamente,
          identificar parcelamentos e detectar transações recorrentes — tudo
          isso sem preencher nenhum formulário manual.
        </p>
        <p className='text-zinc-300 leading-relaxed'>
          Construído com Next.js, TypeScript e Tailwind CSS no front-end, com
          orquestração de prompt engineering e function calling para
          estruturar a resposta da IA antes de gravar no banco. Além da visão
          geral acumulada, o app tem um modo mensal que projeta receitas e
          despesas fixas para os meses seguintes automaticamente.
        </p>
        <div className='max-w-5xl w-full mx-auto'>
          <ProjectCarousel
            images={[
              { src: '/projects/shinji/print1.png', alt: 'Dashboard geral' },
              { src: '/projects/shinji/print2.png', alt: 'Digitando o exemplo' },
              { src: '/projects/shinji/print3.png', alt: 'IA processando' },
              { src: '/projects/shinji/print4.png', alt: 'Resultado categorizado' },
              { src: '/projects/shinji/print5.png', alt: 'Visão mensal' },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
