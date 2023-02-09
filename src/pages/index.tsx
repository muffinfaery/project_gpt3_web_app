import Head from 'next/head'
import Image from 'next/image';
import styles from '@/styles/home/home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern UI Showcase</title>
        <meta name="description" content="Project Level Up by Brady Sullivan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={[styles.landing, "section__padding"].join(" ")} id="landing">
      <div className={styles.landingContent}>
        <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className={styles.landingContent__input}>
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className={styles.landingContent__people}>
          <Image
            src="/people.avif"
            alt="People Image"
            width={181.79}
            height={38}
            priority
          />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className={styles.landingImage}>
        <Image
            src="/ai.avif"
            alt="AI Face Image"
            width={824}
            height={834}
            priority
          />
      </div>
    </div>
    </>
  )
}

