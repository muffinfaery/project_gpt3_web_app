import { CTA } from '@/components';
import React from 'react';
import Article from '../../components/article/Article';
import styles from './blog.module.css';

const Blog = () => (
  <>
    <div className={[styles.blog, "section__padding"].join(" ")} id="blog">
      <div className={styles.blogHeading}>
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <CTA />
      <div className={styles.blogContainer}>
        <div className={styles.blogContainer_groupA}>
          <Article imgUrl={"/blog01.png"} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future" />
        </div>
        <div className={styles.blogContainer_groupB}>
          <Article imgUrl={"/blog02.png"} date="Dec 31, 2022" text="GPT-3 let us exlore it?" />
          <Article imgUrl={"/blog03.png"} date="Jan 01, 2023" text="Open AI?" />
          <Article imgUrl={"/blog04.png"} date="Oct 05, 2020" text="GPT-3 and Me" />
          <Article imgUrl={"/blog05.png"} date="Aug 17, 2022" text="Time for Change" />
        </div>
      </div>
    </div>
  </>
);

export default Blog;
