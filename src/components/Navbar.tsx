'use client'

import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { FaBars, FaHome } from 'react-icons/fa'
import { IoClose, IoPersonSharp } from 'react-icons/io5'
import { CgGitBranch } from 'react-icons/cg'
import { Button } from './ui/button'
import Link from 'next/link'
import { MdLibraryBooks, MdMonitor } from 'react-icons/md'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY >= 20)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])
  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const navStyles = isScrolled
    ? 'bg-ebony-1000/50 backdrop-brightness-50 backdrop-blur border-b-2 shadow-md border-b-ebony-500'
    : 'bg-transparent'

  return (
    <header
      className={clsx(
        navStyles,
        'text-white transition-all duration-300 inset-0 z-50 w-full flex sticky top-0 right-0'
      )}
    >
      <div className='flex justify-between max-w-7xl xl:px-0 w-full md:mx-auto flex-col md:flex-row'>
        <div className='flex justify-between px-4 md:p-4 max-w-7xl xl:px-0 w-full'>
          <h2 className='flex items-center font-bold'>Leonardo Abreu</h2>
          <button
            onClick={toggleMenu}
            className='bg-grey-1 p-4 rounded-lg md:hidden'
            aria-label='Toggle Menu'
          >
            {isOpen ? (
              <IoClose color='white' size={20} />
            ) : (
              <FaBars color='white' size={20} />
            )}
          </button>
        </div>
        <nav
          className={clsx(
            'md:flex justify-between md:py-4 flex-col md:flex-row md:gap-4 w-full transition-all',
            isOpen ? 'flex w-full pb-2 items-center' : 'hidden'
          )}
        >
          <Button
            variant='ghost'
            asChild
            onClick={closeMenu}
            className='text-white flex gap-1 max-w-max'
          >
            <Link href='/'>
              <FaHome size={17} />
              Início
            </Link>
          </Button>
          <Button
            variant='ghost'
            asChild
            onClick={closeMenu}
            className='text-white flex gap-1 max-w-max'
          >
            <Link href='/about-me'>
              <IoPersonSharp size={17} />
              Sobre mim
            </Link>
          </Button>
          <Button
            variant='ghost'
            asChild
            onClick={closeMenu}
            className='text-white flex gap-1 max-w-max'
          >
            <Link href='/projects'>
              <MdMonitor size={17} />
              Projetos
            </Link>
          </Button>
          <Button
            variant='ghost'
            asChild
            onClick={closeMenu}
            className='text-white flex gap-1 max-w-max'
          >
            <Link href='/resume'>
              <MdLibraryBooks size={17} />
              Currículo
            </Link>
          </Button>
          <Button variant='ghost' asChild className='text-white flex max-w-max'>
            <Link href='https://github.com/leomitas/portfolio' target='_blank'>
              <CgGitBranch size={19} />
              Repositório
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
