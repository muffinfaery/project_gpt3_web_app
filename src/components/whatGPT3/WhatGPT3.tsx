import useSWR from 'swr'
import React from 'react'
import Feature from '../feature/Feature'
import styles from '@/styles/about/whatGPT3.module.css'
import { IFeature } from '@/interfaces'
const fetcher = (url: string) => fetch(url).then((res) => res.json())

const WhatGPT3 = () => {
  const { data, error, isLoading } = useSWR<IFeature[]>(
    '/api/features/alternate',
    fetcher,
  )

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <>
      <div className="section__margin" data-cy="whatGPT3">
        <div className="pageHeading">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
        </div>
        <div className={styles.whatgpt3} id="wgpt3">
          <div className={styles.whatgpt3Feature}>
            {data
              .filter((feature) => feature.id === '1')
              .map((feature) => (
                <Feature key={feature.title} {...feature} />
              ))}
          </div>
          <div className={styles.whatgpt3Heading}>
            <h1 className="gradient__text">
              Immerse yourself with rich and refined utilities
            </h1>
            <p>Explore the Library</p>
          </div>
          <div className={styles.whatgpt3Container}>
            {data
              .filter((feature) => feature.id !== '1')
              .map((feature) => (
                <Feature key={feature.title} {...feature} />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatGPT3
