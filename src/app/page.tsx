import IntroduceMyself from '@/components/IntroduceMyself'
import PersonalImage from '@/components/PersonalImage'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-4 xl:px-0 pt-16 flex flex-col gap-64'>
      <PersonalImage />
      <IntroduceMyself />
    </div>
  )
}
