import React from 'react'
import { GrGithub, GrInstagram, GrLinkedin, GrTwitter } from 'react-icons/gr'
import { SiWhatsapp } from 'react-icons/si'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='text-white bg-ebony-1000 w-full p-4 md:p-0'>
      <div className='max-w-7xl mx-auto xl:px-0 flex md:flex-row flex-col gap-4 justify-between items-center w-full min-h-16'>
        <p>Desenvolvido por Leonardo Abreu</p>
        <p>Copyright © 2024</p>
        <div className='flex gap-4 items-center justify-center w-64'>
          <Link href={'https://github.com/leomitas'} target='_blank'>
            <GrGithub size={25} />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/leonardo-abreu2402/'}
            target='_blank'
          >
            <GrLinkedin size={25} />
          </Link>
          <Link
            href={'https://api.whatsapp.com/send?phone=5512992412575'}
            target='_blank'
          >
            <SiWhatsapp size={25} />
          </Link>
          <Link href={'https://www.instagram.com/leomitas/'} target='_blank'>
            <GrInstagram size={25} />
          </Link>
          <Link href={'https://twitter.com/leomitas'} target='_blank'>
            <GrTwitter size={25} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
