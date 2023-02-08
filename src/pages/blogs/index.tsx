import useSWR from 'swr'
import { CTA } from '@/components';
import React from 'react';
import Article from '@/components/article';
import styles from './blog.module.css';
import { Blog } from '@/interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Blogs = () => {
  const { data, error, isLoading } = useSWR<Blog[]>('/api/blogs', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
  <>
    <div className={[styles.blog, "section__padding"].join(" ")} id="blog">
      <div className={styles.blogHeading}>
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <CTA />
      <div className={styles.blogContainer}>
        <div className={styles.blogContainer_groupA}>
          {data.filter((blog: Blog) => blog.id === "1").map((blog: Blog) => 
              <Article key={blog.id} {...blog}/>
          )}
        </div>
        <div className={styles.blogContainer_groupB}>
          {data.filter((blog: Blog) => blog.id !== "1").map((blog: Blog) => 
              <Article key={blog.id} {...blog}/>
          )}
        </div>
      </div>
    </div>
  </>
)};

export default Blogs;
