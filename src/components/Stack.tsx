'use client'
import { stacks } from '@/database'
import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export default function Stack() {
  return (
    <section className='max-w-7xl mx-auto xl:px-0 p-4 flex flex-col gap-8'>
      <h2 className='font-bold text-xl flex justify-center'>
        Minha Stack de Tecnologias
      </h2>
      <Carousel plugins={[Autoplay({ delay: 1000 })]}>
        <CarouselContent>
          {stacks.map((stack, i) => {
            return (
              <CarouselItem key={i} className='sm:basis-1/6'>
                <Image
                  width={100}
                  height={100}
                  src={stack.link}
                  alt={stack.title}
                  title={stack.title}
                />
              </CarouselItem>
              // <li key={i}>
              // </li>
            )
          })}
        </CarouselContent>
      </Carousel>
      {/* <ul className='grid grid-cols-4 md:grid-cols-10 gap-8'>
        {stacks.map((stack, i) => {
          return (
            <li key={i}>
              <Image
                width={100}
                height={100}
                src={stack.link}
                alt={stack.title}
                title={stack.title}
              />
            </li>
          )
        })}
      </ul> */}
    </section>
  )
}
// className='flex justify-center'
