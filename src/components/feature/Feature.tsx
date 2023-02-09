import React from 'react';
import styles from './feature.module.css';
import { IFeature } from '@/interfaces';
const Feature = (props: IFeature) => {

  const { title, text } = props;

  return (
    <div className={styles.featureContainer__feature}>
      <div className={styles.featureContainer__featureTitle}>
        <div />
        <h1>{title}</h1>
      </div>
      <div className={styles.featureContainer__featureText}>
        <p>{text}</p>
      </div>
    </div>
)};

export default Feature;
