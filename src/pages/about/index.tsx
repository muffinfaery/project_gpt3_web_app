import useSWR from 'swr'
import { WhatGPT3 } from '@/components/whatGPT3'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer';

// TODO Ticket https://hosted.gitlab.tickets.com/12345
// Because of Intersection Observer API and Dynamic loading
// this really needs a loading state other than null
// See index.ts at root for something similiar with footer
// Would really like to tweak this to make it feel a bit smoother
const Callout = dynamic(() => import('@/components/callout'), {
  loading: () => null,
  ssr: false,
})

export async function getStaticProps () {
  
  // TODO Ticket https://hosted.gitlab.tickets.com/12345
  // Add a real fallback to handle hyrdation/onload issues.
  // const features = await getFeaturesFromAPI()

  // Since this is executed on the server side. we can get around hydration issues for a small application
  return {
    props: {
      fallback: {
        '/api/features': []
      }
    }
  }
}


const About = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>
      <WhatGPT3 />
      <div ref={ref}>
        {inView && <Callout />}
      </div>
    </>
  )
}

export default About;