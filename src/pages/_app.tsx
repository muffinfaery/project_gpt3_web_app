import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components'
import { useInView } from 'react-intersection-observer';
import { Manrope } from '@next/font/google'

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope'})

const Footer = dynamic(() => import('@/components/footer'), {
  loading: () => null,
})

export default function App({ Component, pageProps }: AppProps) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <main className={[manrope.className, "gradient__bg"].join(" ")}>
      <div className='contentBoundary'>
        <Navbar />
        <Component {...pageProps} />
      </div>
      <div ref={ref}>
        {inView && <Footer />}
      </div>
    </main>
  )
}
