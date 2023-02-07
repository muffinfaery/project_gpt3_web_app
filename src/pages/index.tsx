import Head from 'next/head'
import styles from '@/styles/landing.module.css'
import { Landing } from '@/containers/landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern UI Showcase</title>
        <meta name="description" content="Project Level Up by Brady Sullivan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  )
}

