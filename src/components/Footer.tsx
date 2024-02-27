import React from 'react'
import { GrGithub, GrInstagram, GrLinkedin } from 'react-icons/gr'
import { SiWhatsapp } from 'react-icons/si'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-gray-0 w-full'>
      <div className='max-w-7xl mx-auto xl:px-0 p-4 md:p-16 flex md:flex-row flex-col gap-4 justify-between items-center w-full'>
        <div className='flex items-center gap-4 w-full'>
          <Image
            src='https://i.postimg.cc/2jc04ZxT/eu.png'
            alt='foto minha'
            width={150}
            height={150}
            className='img border-2 border-purple-heart-700'
          />
          <div>
            <h2>Obrigado!</h2>
            <p>Me siga nas minhas redes sociais e vamos conversar</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <Link
            href={'https://www.instagram.com/leomitas/'}
            target='_blank'
            className={clsx(
              buttonVariants({ variant: 'outline' }),
              'flex gap-2 bg-social-instagram border-2 border-social-instagram text-white hover:text-social-instagram hover:bg-black hover:border-social-instagram hover:border-2'
            )}
          >
            <GrInstagram />
            <p>Instagram</p>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/leonardo-abreu2402/'}
            target='_blank'
            className={clsx(
              buttonVariants({ variant: 'outline' }),
              'flex gap-2 bg-social-linkedin border-2 border-social-linkedin text-white hover:text-social-linkedin hover:bg-black hover:border-social-linkedin hover:border-2'
            )}
          >
            <GrLinkedin />
            <p>LinkedIn</p>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/leonardo-abreu2402/'}
            target='_blank'
            className={clsx(
              buttonVariants({ variant: 'outline' }),
              'flex gap-2 bg-social-whatsapp border-2 border-social-whatsapp text-white hover:text-social-whatsapp hover:bg-black hover:border-social-whatsapp hover:border-2'
            )}
          >
            <SiWhatsapp />
            <p>Whatsapp</p>
          </Link>
          {/* <Link
          href={'https://github.com/leomitas'}
          target='_blank'
          className={clsx(
            buttonVariants({ variant: 'outline' }),
            'flex gap-2 bg-social-github border-2 border-social-github text-white hover:text-social-github hover:bg-white hover:border-social-github hover:border-2'
            )}
            >
            <GrGithub />
            <p>Github </p>
          </Link> */}
        </div>
      </div>
    </footer>
  )
}
