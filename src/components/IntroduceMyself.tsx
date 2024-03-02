import React from 'react'
import Links from './Links'
import Image from 'next/image'

export default function IntroduceMyself() {
  return (
    <div className='flex flex-col justify-between items-center gap-16 pb-16'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <div className='flex flex-col items-center w-full md:w-3/4 gap-8'>
          <h2 className='font-bold text-2xl md:text-4xl w-max h-max'>
            Conheça um pouco sobre mim
          </h2>
          <div className='flex flex-col gap-4'>
            <p className='text-lg'>
              Me apaixonei por programação com 12 anos quando meu pai me mostrou
              o curso de html do Gustava Guanabara.
            </p>
            <p className='text-lg'>
              Possuo bastante experiência em clássicas linguagens{' '}
              <span className='text-ebony-500'>
                Javascript, Typescript e Python.
              </span>
            </p>
            <p className='text-lg'>
              Minhas áreas de interesse são a construção de novas{' '}
              <span className='text-ebony-500'>tecnologias e produtos Web</span>{' '}
              e também em áreas relacionadas a ciência de dados.
            </p>
            <p className='text-lg'>
              Sempre que possível, também aplico minha paixão pelo
              desenvolvimento de produtos com{' '}
              <span className='text-ebony-500'>Node.js</span> e Frameworks, como{' '}
              <span className='text-ebony-500'>Next.js, Flask, Django.</span>
            </p>
          </div>
        </div>
        <Image
          src='https://i.postimg.cc/2jc04ZxT/eu.png'
          alt='foto minha'
          width={300}
          height={300}
          priority={true}
          className='img border-2 border-ebony-500'
        />
      </div>
      <div className='flex gap-8 flex-col'>
        <div className='flex flex-col items-center gap-4'>
          <h2 className='text-4xl w-max'>ME ENCONTRE EM</h2>
          <p>
            Sinta-se à vontade para se{' '}
            <span className='text-ebony-500'>conectar</span> comigo
          </p>
        </div>
        <Links />
      </div>
    </div>
  )
}
