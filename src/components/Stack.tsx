'use client'

import React from 'react'
import {
  SiDjango,
  SiDocker,
  SiFigma,
  SiFlask,
  SiGit,
  SiInsomnia,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { FaAws, FaWindows } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

export default function Stack() {
  return (
    <section className='max-w-7xl mx-auto xl:px-0 p-8 flex flex-col gap-16 w-full'>
      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl text-center font-bold'>
          <span className='text-ebony-500'>Conjunto de Habilidades</span>{' '}
          Profissionais
        </h2>
        <ul className='grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-6 w-full'>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiNextdotjs size={60} title='Next.js' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiReact size={60} title='React' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiTailwindcss size={60} title='Tailwind CSS' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiTypescript size={60} title='Typescript' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiJavascript size={60} title='Javascript' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiPython size={60} title='Python' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiFlask size={60} title='Flask' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiPrisma size={60} title='Prisma' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiNestjs size={60} title='Nestjs' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiDjango size={60} title='Django' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiNodedotjs size={60} title='Node.js' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiMysql size={60} title='MySQL' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiPostgresql size={60} title='PostgreSQL' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiSqlite size={60} title='SQLite' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiGit size={60} title='Git' />
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl text-center font-bold'>
          <span className='text-ebony-500'>Ferramentas</span> Que Utilizo
        </h2>
        <ul className='grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-6 w-full'>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiDocker size={60} title='Docker' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <FaAws size={60} title='Amazon AWS' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <VscVscode size={60} title='Visual Studio Code' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiPostman size={60} title='Postman' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiInsomnia size={60} title='Insomnia' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiFigma size={60} title='Figma' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <SiLinux size={60} title='Linux' />
          </li>
          <li className='flex justify-center items-center p-4 md:p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md w-full'>
            <FaWindows size={60} title='Windows' />
          </li>
        </ul>
      </div>
    </section>
  )
}
