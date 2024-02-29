import Image from 'next/image'
import React from 'react'

export default function PersonalImage() {
  return (
    <section className='max-w-7xl mx-auto px-4 xl:px-0 flex items-center flex-col md:flex-row gap-8 pt-16'>
      <p className='text-5xl font-bold text-grey-2'>
        Olá, meu nome é Leonardo Abreu. Sou desenvolvedor web full stack.
      </p>
      <Image
        src='https://i.postimg.cc/2jc04ZxT/eu.png'
        alt='foto minha'
        width={500}
        height={500}
        className='img border-2 border-purple-heart-700'
      />
    </section>
  )
}