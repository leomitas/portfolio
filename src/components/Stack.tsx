'use client'

import React from 'react'
import {
  SiCss3,
  SiDjango,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
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
          Profisionais
        </h2>
        <ul className='flex flex-wrap gap-6 justify-center'>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiPython size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiNodedotjs size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiDjango size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiPostgresql size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiNestjs size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiSqlite size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiReact size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiJavascript size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiTypescript size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiHtml5 size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiCss3 size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiTailwindcss size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiNextdotjs size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiGit size={60} />
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl text-center font-bold'>
          <span className='text-ebony-500'>Ferramentas</span> Que Uso
        </h2>
        <ul className='flex flex-wrap gap-6 justify-center'>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiVisualstudiocode size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiFigma size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiLinux size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiWindows size={60} />
          </li>
          <li className='flex justify-center md:px-20 p-8 border-2 border-ebony-500 shadow-xl hover:scale-110 rounded-md'>
            <SiPostman size={60} />
          </li>
        </ul>
      </div>
    </section>
  )
}
