import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return <>
    <h1 className='title'>Leading with Excellence Serving with Grace</h1>

    <p className='greeting'>
      Welcome to the website of the Farmington Valley Chapter of The Links, Incorporated. The Links,
      Incorporated is an international, not-for-profit organization established in 1946. The membership
      consists of more than 16,000 professional women of color in 292 chapters throughout the United
      States, United Kingdom, and the Commonwealth of the Bahamas. It is one of the nation’s oldest
      and largest volunteer service organizations of extraordinary and talented women who are
      committed to enriching, sustaining, and ensuring the culture and economic survival of African
      Americans and other persons of African ancestry.
      The Links has a long traditional of engaging in educational, civic and inter-cultural activities in the
      communities we serve. We are influential decision makers, opinion leaders, and distinguished
      achievers, and contribute more than 1 million documented hours of community service annually
    </p>

    <Image className='image'
        src="/filler.png"
        alt="Picture of the President of the Farmington Valley Links Incorporated"
        width={400}
        height={300}
      />

    <div className='grid'>
      
      <a href="https://google.com" className='parag'>
        <h2>Event #1 &rarr;</h2>
        <p>Find more information about our upcoming event here.</p>
      </a>

      <a href="https://google.com" className='parag'>
        <h2>Scholarship #1 &rarr;</h2>
        <p>Learn about our scholarship offers by clicking this link!</p>
      </a>

      <a href="https://google.com/" className='parag'>
        <h2>Examples &rarr;</h2>
        <p>Here is an example.</p>
      </a>

      <a href="https://google.com" className='parag'>
        <h2>Contact &rarr;</h2>
        <p>Contact us here @ farmingtonvalleylinks@email.com</p>
      </a>
    </div>
  </>
}

export default Home
