import React from 'react';
import styles from './article.module.css';
import Image from 'next/image';

const Article = ({ imgUrl, date, text }) => (
  <div className={styles.blogContainer_article}>
    <div className={styles.blogContainer_articleImage}>
      <Image
          src={imgUrl}
          alt="blog_image"
          width={325}
          height={130}
          priority
        />
    </div>
    <div className={styles.blogContainer_articleContent}>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
