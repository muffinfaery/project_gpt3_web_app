import useSWR from 'swr'
import { IBlog, IResponseError } from '@/interfaces'
import { useRouter } from 'next/router'
import styles from '@/styles/blogs/blogs.module.css'
import Image from 'next/image'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function BlogPage() {
  const { query } = useRouter()
  const { data, error, isLoading, isValidating } = useSWR<
    IBlog,
    IResponseError
  >(() => (query.id ? `/api/blogs/${query.id}` : null), fetcher)

  if (error) return <div>{error.message}</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  const { imageUrl, date, title, body } = data
  return (
    <div className={[styles.blog, 'section__padding'].join(' ')} id="blogPage">
      <div className={styles.blogHeading}>
        <div className="gradient__text">
          <h1>{title}</h1>
          <h2>{date}</h2>
        </div>
      </div>
      <div className={styles.blogPost_article}>
        <Image
          src={imageUrl}
          alt="blog_image"
          width={325}
          height={130}
          priority
        />

        <p>{body}</p>
      </div>
    </div>
  )
}
