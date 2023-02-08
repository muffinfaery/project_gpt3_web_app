import React from 'react';
import Image from 'next/image';
import styles from './brand.module.css';

const Brand = () => (
  <div className={[styles.brand, "section__padding"].join(" ")}>
    <div>
      <Image
          src="/google.png"
          alt="Google Logo"
          width={114}
          height={25}
        />
    </div>
    <div>
      <Image
          src="/slack.png"
          alt="Slack Logo"
          width={114}
          height={25}
        />
    </div>
    <div>
      <Image
          src="/atlassian.png"
          alt="Atlassian Logo"
          width={114}
          height={25}
        />
    </div>
    <div>
      <Image
          src="/dropbox.png"
          alt="Dropbox Logo"
          width={114}
          height={25}
        />
    </div>
    <div>
      <Image
        src="/Shopify.png"
        alt="Shopify Logo"
        width={114}
        height={25}
      />
    </div>
  </div>
);

export default Brand;
