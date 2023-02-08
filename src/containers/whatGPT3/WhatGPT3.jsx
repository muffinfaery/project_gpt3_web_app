import React from 'react'
import Feature from '../../components/feature/Feature'
import styles from './whatGPT3.module.css'

const WhatGPT3 = () => (
  <>
    <div className='section__margin'>
    <div className="pageHeading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
    </div>
    <div className={styles.whatgpt3} id="wgpt3">
      <div className={styles.whatgpt3Feature}>
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className={styles.whatgpt3Heading}>
        <h1 className="gradient__text">
          Immerse yourself with rich and refined utilities
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className={styles.whatgpt3Container}>
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
    </div>
  </>
)

export default WhatGPT3
