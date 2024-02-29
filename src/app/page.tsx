import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import PersonalImage from '@/components/PersonalImage'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <div id='home' className='h-2 w-full'></div>
      <PersonalImage />
      <div id='stack' className='h-1'></div>
      <Stack />
      <div id='about-me' className='h-1'></div>
      <AboutMe />
      <div id='projects' className='h-1'></div>
      <Projects />
      <Footer />
      <a className='bottom-4 right-4 md:bottom-8 md:right-8 fixed' href='#home'>
        <BsFillArrowUpCircleFill size={40} className='text-purple-heart-700' />
      </a>
    </>
  )
}
