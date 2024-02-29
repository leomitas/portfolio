import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { projects } from '@/database'

export default function Projects() {
  return (
    <section className='max-w-7xl mx-auto xl:px-0 p-4 flex flex-col gap-4'>
      <h2 className='font-bold text-3xl'>Projetos</h2>
      <ul>
        {projects.map((project, i) => {
          return (
            <li className='flex flex-col gap-4' key={i}>
              <a
                href={project.link}
                target='_blank'
                className='font-bold text-xl w-max'
              >
                {project.title}
              </a>
              <div>
                {project.description.split('. ').map((sentence, i) => (
                  <p key={i}>{sentence}</p>
                ))}
              </div>
              <Carousel>
                <CarouselContent>
                  {project.images.map((image, i) => {
                    return (
                      <CarouselItem className='sm:basis-1/2' key={i}>
                        <Image src={image} alt='' width={800} height={300} />
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
              </Carousel>
            </li>
          )
        })}
      </ul>
    </section>
  )
}