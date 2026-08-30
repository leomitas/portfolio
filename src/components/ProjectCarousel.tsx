'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface ProjectCarouselProps {
  images: { src: string; alt: string }[]
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  )
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])
  useEffect(() => {
    if (!lightboxOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') scrollPrev()
      if (e.key === 'ArrowRight') scrollNext()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen, scrollPrev, scrollNext])
  return (
    <>
      <div className='relative px-10 md:px-14'>
        <div className='overflow-hidden rounded-2xl' ref={emblaRef}>
          <div className='flex'>
            {images.map((img, i) => (
              <div key={i} className='flex-[0_0_100%] min-w-0'>
                <img
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setLightboxOpen(true)}
                  className='w-full h-[500px] object-fill cursor-zoom-in'
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className='absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white transition-colors shadow-lg'
        >
          <ChevronLeft className='w-5 h-5' />
        </button>
        <button
          onClick={scrollNext}
          className='absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white transition-colors shadow-lg'
        >
          <ChevronRight className='w-5 h-5' />
        </button>
        <div className='flex justify-center gap-2 mt-4'>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === selectedIndex ? 'bg-indigo-500 w-6' : 'bg-zinc-600'
              }`}
            />
          ))}
        </div>
      </div>
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200'
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className='absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white transition-colors'
          >
            <X className='w-6 h-6' />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              scrollPrev()
            }}
            className='absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white transition-colors'
          >
            <ChevronLeft className='w-6 h-6' />
          </button>
          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className='max-w-full max-h-full object-contain rounded-lg'
          />
          <button
            onClick={(e) => {
              e.stopPropagation()
              scrollNext()
            }}
            className='absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white transition-colors'
          >
            <ChevronRight className='w-6 h-6' />
          </button>
        </div>
      )}
    </>
  )
}