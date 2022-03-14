import type { NextPage } from 'next'
import Image from 'next/image'
import useSWR from 'swr'

const fetcher = (...args:[RequestInfo]) => fetch(...args).then((res) => res.json())
function Fetch(path:String) {
  const { data, error } = useSWR(`/api/${path}`)
  return {
    data: data,
    isLoading: !error && !data,
    error: error
  }
}

const myLoader = (src:String) => `https://drive.google.com/uc?content=view&id=${src}`

const Home: NextPage = () => {
  return <>
    <p className='greeting'>
      Welcome to the website of the Farmington Valley Chapter of The Links, Incorporated. The Links,
      Incorporated is an international, not-for-profit organization established in 1946. The membership
      consists of more than 16,000 professional women of color in 292 chapters throughout the United
      States, United Kingdom, and the Commonwealth of the Bahamas. It is one of the nation’s oldest
      and largest volunteer service organizations of extraordinary and talented women who are
      committed to enriching, sustaining, and ensuring the culture and economic survival of African
      Americans and other persons of African ancestry.
      The Links has a long tradition of engaging in educational, civic and inter-cultural activities in the
      communities we serve. We are influential decision makers, opinion leaders, and distinguished
      achievers, and contribute more than 1 million documented hours of community service annually.
    </p>

    <div className='grid'>
      <a href="news#events" className='cards'>
        <h2>Event #1 &rarr;</h2>
        <p>Find more information about our upcoming event!</p>
      </a>

      <Image className='image'
        src={myLoader("1rGLb8vunifFLe8lYir2g9a_hOvvmuPhv")}
        alt="Chapter Members of the Farmington Valley Links, Incorporated"
        objectFit="contain"
        quality={100}
        width={500}
        height={500}
        // placeholder="blur"
        // blurDataURL={myLoader("1rGLb8vunifFLe8lYir2g9a_hOvvmuPhv")}
      />

      <Image className='image'
        src={myLoader("1-CaZncaRgZzzrN7FQaaIh3Ec9JkOoAbm")}
        alt="2018 Chapter Members"
        objectFit="contain"
        quality={100}
        width={500}
        height={500}
        // placeholder="blur"
        // blurDataURL={myLoader("1-CaZncaRgZzzrN7FQaaIh3Ec9JkOoAbm")}
      />

      <a href="news#scholarships" className='cards'>
        <h2>Scholarship #1 &rarr;</h2>
        <p>Learn about our scholarship offers by clicking this link!</p>
      </a>

      <a href="aboutus#chapterhistory" className='cards'>
        <h2>About Us &rarr;</h2>
        <p>Click here to hear more about our history.</p>
      </a>

      <Image className='image'
        src={myLoader("1SJ2l9ZPPnbVzDk-moayc8kGUKTa6I93z")}
        alt="Founding Members"
        objectFit="contain"
        quality={100}
        width={500}
        height={500}
        // placeholder="blur"
        // blurDataURL={myLoader("1SJ2l9ZPPnbVzDk-moayc8kGUKTa6I93z")}
      />

      <Image className='image'
        src={myLoader("19K9Df9Uh7BGVAr0_c23Dg1wGD0tEKokD")}
        alt="Farmington Valley Chapter Members of Links, Incorporated"
        objectFit="contain"
        quality={100}
        width={500}
        height={500}
        // placeholder="blur"
        // blurDataURL={myLoader("19K9Df9Uh7BGVAr0_c23Dg1wGD0tEKokD")}
      />

      <a href="mailto:fvclinks.president@gmail.com" className='cards'>
        <h2>Contact Us &rarr;</h2>
        <p>Send us an email to fvclinks.president@gmail.com</p>
      </a>
    </div>
  </>
}

export default Home;
