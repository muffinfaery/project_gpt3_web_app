import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Brand, Navbar } from '@/components'

import { Manrope } from '@next/font/google'

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope'})

const Footer = dynamic(() => import('@/containers/footer'), {
  loading: () => null,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={[manrope.className, "gradient__bg"].join(" ")}>
      <div className='contentBoundary'>
        <Navbar />
        <Component {...pageProps} />
        <Brand />
        <Footer />
      </div>
    </main>
  )
}
