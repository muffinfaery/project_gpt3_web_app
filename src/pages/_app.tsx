import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components'

import { Manrope } from '@next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

const Footer = dynamic(() => import('@/containers/footer'), {
  loading: () => null,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={manrope.className}>
      
      <div className="gradient__bg">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </main>
  )
}
