'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { FaBars, FaHome } from 'react-icons/fa'
import { IoClose, IoPersonSharp } from 'react-icons/io5'
import { CgGitBranch } from 'react-icons/cg'
import { Button } from './ui/button'
import Link from 'next/link'
import { MdLibraryBooks, MdMonitor } from 'react-icons/md'

export default function Navbar() {
  const [activate, setActivate] = useState('hidden')
  const [open, setOpen] = useState(false)
  const [navColour, updateNavbar] = useState('bg-trasparent')

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(
        'bg-ebony-1000/50 backdrop-brightness-50 backdrop-blur border-b-2 shadow-md border-b-ebony-500'
      )
    } else {
      updateNavbar('bg-trasparent')
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', scrollHandler)
  }

  const changeActivate = () => {
    if (activate == 'flex w-full pb-2 items-center') {
      setActivate('hidden w-full')
      setOpen(false)
    } else {
      setActivate('flex w-full pb-2 items-center')
      setOpen(true)
    }
  }

  return (
    <header
      className={clsx(
        navColour,
        'text-white md:flex inset-0 z-50 w-full flex sticky top-0 right-0'
      )}
    >
      <div className='flex justify-between max-w-7xl xl:px-0 w-full md:mx-auto flex-col md:flex-row'>
        <div className='flex justify-between px-4 md:p-4 max-w-7xl xl:px-0 w-full'>
          <h2 className='flex items-center font-bold'>Leonardo Abreu</h2>
          <button
            onClick={changeActivate}
            className='bg-grey-1 p-4 rounded-lg md:hidden'
          >
            {!open ? (
              <FaBars color='white' size={20} />
            ) : (
              <IoClose color='white' size={20} />
            )}
          </button>
        </div>
        <nav
          className={clsx(
            'md:flex justify-between md:p-4 flex-col gap-0 md:flex-row md:gap-4 w-full',
            activate
          )}
        >
          <Button
            variant={'ghost'}
            onClick={changeActivate}
            className='text-white flex gap-1 max-w-max'
          >
            <FaHome size={17} />
            <Link href='/'>Início</Link>
          </Button>
          <Button
            variant={'ghost'}
            onClick={changeActivate}
            className='text-white flex gap-1 max-w-max'
          >
            <IoPersonSharp size={17} />
            <Link href='/about-me'>Sobre mim</Link>
          </Button>
          <Button
            variant={'ghost'}
            onClick={changeActivate}
            className='text-white flex gap-1 max-w-max'
          >
            <MdMonitor size={17} />
            <Link href='/projects'>Projetos</Link>
          </Button>
          <Button
            variant={'ghost'}
            onClick={changeActivate}
            className='text-white flex gap-1 max-w-max'
          >
            <MdLibraryBooks size={17} />
            <Link href='/resume'>Currículo</Link>
          </Button>
          <Button
            variant={'ghost'}
            onClick={changeActivate}
            className='text-white flex max-w-max'
          >
            <CgGitBranch size={19} />
            <Link href='https://github.com/leomitas/portfolio' target='_blank'>
              Repositório
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
