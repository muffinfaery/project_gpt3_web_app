import React from 'react';
import styles from './article.module.css';
import Image from 'next/image';
import { Blog } from '@/interfaces'
import Link from 'next/link';

const Article = (props: Blog) => {
  const { id, imageUrl, date, description, title } = props;
  
  return (
  <div className={styles.blogContainer_article}>
    <div className={styles.blogContainer_articleImage}>
      <Image
          src={imageUrl}
          alt="blog_image"
          width={325}
          height={130}
          priority
        />
    </div>
    <div className={styles.blogContainer_articleContent}>
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <p><Link href={`/blogs/${id}`}>Read Full Article</Link></p>
    </div>
  </div>
)};

export default Article;
