import Stack from '@/components/Stack'
import Image from 'next/image'
import React from 'react'
import { FaHandPointRight } from 'react-icons/fa'

export default function page() {
  return (
    <div className='p-16 md:pt-36 md:pb-36 px-0'>
      <section className='max-w-7xl mx-auto px-4 xl:px-0 flex flex-col gap-16 text-xl'>
        <div className='flex justify-between flex-col md:flex-row gap-8'>
          <div className='flex flex-col gap-8'>
            <h2 className='text-4xl text-center font-bold'>
              Saiba Quem <span className='text-ebony-500'>Eu Sou</span>
            </h2>
            <div>
              <p>
                Olá a todos, sou{' '}
                <span className='text-ebony-500'>Leonardo Abreu</span> , de
                Taubaté, São Paulo.
              </p>
              <p>Concluí Técnico em Desenvolvimento de Sistemas no SENAI.</p>
              <p>Estou cursando graduação em Engenharia de Software.</p>
            </div>
            <div>
              <p>Além de programar, algumas outras atividades que amo fazer!</p>
              <ul className='flex  flex-col'>
                <li className='flex gap-2 px-8 pt-4'>
                  <FaHandPointRight />
                  <p>Assistir filmes, séries e animes.</p>
                </li>
                <li className='flex gap-2 px-8'>
                  <FaHandPointRight />
                  <p>Ler manga e novels.</p>
                </li>
                <li className='flex gap-2 px-8'>
                  <FaHandPointRight />
                  <p>Jogar jogos.</p>
                </li>
              </ul>
            </div>
          </div>
          <Image
            src='https://i.postimg.cc/DwHNVkKF/2.png'
            alt='imagem ilustrativa de um programador trabalhando'
            width={400}
            height={400}
            priority={true}
            className='object-cover'
          />
        </div>
        <Stack />
      </section>
    </div>
  )
}
