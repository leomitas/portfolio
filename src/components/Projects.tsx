import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { projects } from '@/database'

export default function Projects() {
  return (
    <>
      <ul>
        {projects.map((project, i) => {
          return (
            <li className='flex flex-col gap-4' key={i}>
              <a
                href={project.link}
                target='_blank'
                className='font-bold text-xl w-max text-ebony-500'
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
    </>
  )
}
