import useSWR from 'swr'
import Link from 'next/link'
import React from 'react'
import { IFeature } from '@/interfaces'
import Feature from '@/components/feature'
import styles from '@/styles/about/callout.module.css'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Callout = () => {
  const { data, error, isLoading } = useSWR<IFeature[]>(
    '/api/features',
    fetcher,
  )

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <>
      <div
        className={[styles.features, 'section__padding'].join(' ')}
        id="features"
      >
        <div className={styles.featuresHeading}>
          <h1 className="gradient__text">
            The Future is Now and You Just Need to Realize It. Step into Future
            Today. & Make it Happen.
          </h1>
          <p><Link href="/">Request Early Access to Get Started</Link></p>
        </div>
        <div className={styles.featuresContainer}>
          {data.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Callout;
