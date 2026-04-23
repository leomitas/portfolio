'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

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
    <section>
      <div className='flex flex-col md:flex-row gap-8 justify-between items-center'>
        <div className='max-w-full'>
          <h2 className='text-5xl font-bold text-grey-2'>
            EU SOU O <span className='text-ebony-500'>LEONARDO ABREU</span>
          </h2>
          <p className='typewriter w-max text-xl h-6'>{txt}</p>
        </div>
        <Image
          src='https://i.postimg.cc/Y0wY6j7j/1.png'
          alt='imagem ilustrativa de um programador trabalhando'
          width={400}
          height={400}
          priority={true}
          className='object-cover'
        />
      </div>
    </section>
  )
}
