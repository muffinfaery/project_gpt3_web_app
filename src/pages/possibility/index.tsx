import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/possibility/possibility.module.css'

export default function Possibility() {
  return (
    <>
      <div
        className={[styles.possibility, 'section__padding'].join(' ')}
        id="possibility"
      >
        <div className={styles.possibilityImage}>
          <Image
            src="/possibility.png"
            alt="Possibility"
            width={2184}
            height={2431}
            priority
          />
        </div>
        <div className={styles.possibilityContent}>
          <Link href="/" legacyBehavior>
            <a>
              <h4>Request Early Access to Get Started</h4>
            </a>
          </Link>
          <h1 className="gradient__text">
            The possibilities are <br /> beyond your imagination
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <Link href="/" legacyBehavior>
            <a>
              <h4>Request Early Access to Get Started</h4>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
