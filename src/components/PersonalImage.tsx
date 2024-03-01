'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Links from './Links'

export default function PersonalImage() {
  const [txt, setTxt] = useState(' ')
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)
  const text = ['Dev web full stack', 'Engenheiro de software']

  useEffect(() => {
    const typeWriter = () => {
      if (isDeleting && txt.length === 0) {
        setIndex((index + 1) % text.length)
        setIsDeleting(false)
      }

      if (!isDeleting && txt.length === text[index].length) {
        setIsDeleting(true)
      }

      setTxt(
        isDeleting
          ? text[index].substring(0, txt.length - 1)
          : text[index].substring(0, txt.length + 1)
      )
    }

    const timeout = setTimeout(typeWriter, isDeleting ? 200 : 100)
    return () => clearTimeout(timeout)
  }, [txt, isDeleting, index])

  return (
    <section className='max-w-7xl mx-auto px-4 xl:px-0 pt-16 flex flex-col gap-64'>
      <div className='flex items-center flex-col md:flex-row gap-8'>
        <div className='max-w-full'>
          <h2 className='text-5xl font-bold text-grey-2'>
            EU SOU O{' '}
            <span className='text-persian-blue-500'>LEONARDO ABREU</span>
          </h2>
          <p className='typewriter w-max text-xl h-6'>{txt}</p>
        </div>
        <Image
          src='https://i.postimg.cc/J48ck8Tv/Design-sem-nome-10.png'
          alt='foto minha'
          width={500}
          height={500}
          priority={true}
          className='object-cover'
        />
      </div>
      <div className='flex flex-col justify-between items-center gap-16 pb-16'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='flex flex-col items-center w-full md:w-3/4 gap-8'>
            <h2 className='font-bold text-2xl md:text-4xl w-max h-max'>
              Conheça um pouco sobre mim
            </h2>
            <div className='flex flex-col gap-4'>
              <p className='text-lg'>
                Me apaixonei por programação com 12 anos quando meu pai me
                mostrou o curso de html do Gustava Guanabara.
              </p>
              <p className='text-lg'>
                Possuo bastante experiência em clássicas linguagens{' '}
                <span className='text-persian-blue-500'>
                  Javascript, Typescript e Python.
                </span>
              </p>
              <p className='text-lg'>
                Minhas áreas de interesse são a construção de novas{' '}
                <span className='text-persian-blue-500'>
                  tecnologias e produtos Web
                </span>{' '}
                e também em áreas relacionadas a ciência de dados.
              </p>
              <p className='text-lg'>
                Sempre que possível, também aplico minha paixão pelo
                desenvolvimento de produtos com{' '}
                <span className='text-persian-blue-500'>Node.js</span> e
                Frameworks, como{' '}
                <span className='text-persian-blue-500'>
                  Next.js, Flask, Django.
                </span>
              </p>
            </div>
          </div>
          <Image
            src='https://i.postimg.cc/2jc04ZxT/eu.png'
            alt='foto minha'
            width={300}
            height={300}
            priority={true}
            className='img border-2 border-persian-blue-500'
          />
        </div>
        <div className='flex gap-8 flex-col'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='text-4xl w-max'>ME ENCONTRE EM</h2>
            <p>
              Sinta-se à vontade para se{' '}
              <span className='text-persian-blue-500'>conectar</span> comigo
            </p>
          </div>
          <Links />
        </div>
      </div>
    </section>
  )
}
