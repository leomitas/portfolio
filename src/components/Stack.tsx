'use client'

import React from 'react'
import {
  SiAmazonaws,
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
  SiVisualstudiocode,
  SiWindows,
} from 'react-icons/si'

export default function Stack() {
  return (
    <section className='max-w-7xl mx-auto xl:px-0 p-8 flex flex-col gap-16'>
      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl text-center font-bold'>
          <span className='text-ebony-500'>Conjunto de Habilidades</span>{' '}
          Profissionais
        </h2>
        <ul className='flex flex-wrap gap-6 justify-center'>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiNextdotjs size={60} title='Next.js' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiReact size={60} title='React' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiTailwindcss size={60} title='Tailwind CSS' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiTypescript size={60} title='Typescript' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiJavascript size={60} title='Javascript' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiPython size={60} title='Python' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiFlask size={60} title='Flask' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiPrisma size={60} title='Prisma' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiNestjs size={60} title='Nestjs' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiDjango size={60} title='Django' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiNodedotjs size={60} title='Node.js' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiMysql size={60} title='MySQL' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiPostgresql size={60} title='PostgreSQL' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiSqlite size={60} title='SQLite' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiGit size={60} title='Git' />
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl text-center font-bold'>
          <span className='text-ebony-500'>Ferramentas</span> Que Utilizo
        </h2>
        <ul className='flex flex-wrap gap-6 justify-center'>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiDocker size={60} title='Docker' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiAmazonaws size={60} title='Amazon AWS' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiVisualstudiocode size={60} title='Visual Studio Code' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiPostman size={60} title='Postman' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiInsomnia size={60} title='Insomnia' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiFigma size={60} title='Figma' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiLinux size={60} title='Linux' />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiWindows size={60} title='Windows' />
          </li>
        </ul>
      </div>
    </section>
  )
}
