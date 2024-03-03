import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio | Leonardo Abreu',
  description: 'Site pessoal autodesenvolvido construído com Next.js',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={clsx(raleway.className, 'max-w-full bg-ebony-950')}>
        <Navbar />
        <main className='text-white md:min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
