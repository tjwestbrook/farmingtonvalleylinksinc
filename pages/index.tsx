import type { NextPage } from 'next'
import Image from 'next/image'
import useSWR from 'swr'
import { useRouter } from 'next/router'

// export async function getStaticProps() {
//   const { Deta } = require("deta")
//   const deta = Deta(DETA_PROJECT_KEY)
//   const db = deta.Base("home")
//   const data = await db.get("greeting")

// //   const res = await fetch(`https://database.deta.sh/v1/b0prrvt9/home`)
// //   const data = await res.json()
//   const greeting = data.text
//   return {
//     props: {
//       greeting,
//     },
//   }
// }

const fetcher = (...args:[RequestInfo]) => fetch(...args).then(res => res.json())

function GetData(key:String) {
  const path = useRouter().asPath
  const APIURI = `https://database.deta.sh/v1/b0prrvt9${path=='/'?'/home':path}`
  const { data, err } = useSWR(APIURI, fetcher)

  if (err) return "failed to load"
  if (!data) return "loading..."
  return data
}

function myLoader(src: String) {
  return `https://drive.google.com/uc?content=view&id=${src}`
}

const Home: NextPage = () => {

  return <>
    <p className='greeting'>
      {GetData('greeting')}
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
        placeholder="blur"
        blurDataURL={myLoader("1rGLb8vunifFLe8lYir2g9a_hOvvmuPhv")}
      />

      <Image className='image'
        src={myLoader("1-CaZncaRgZzzrN7FQaaIh3Ec9JkOoAbm")}
        alt="2018 Chapter Members"
        objectFit="contain"
        quality={100}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={myLoader("1-CaZncaRgZzzrN7FQaaIh3Ec9JkOoAbm")}
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
        placeholder="blur"
        blurDataURL={myLoader("1SJ2l9ZPPnbVzDk-moayc8kGUKTa6I93z")}
      />

      <Image className='image'
        src={myLoader("19K9Df9Uh7BGVAr0_c23Dg1wGD0tEKokD")}
        alt="Farmington Valley Chapter Members of Links, Incorporated"
        objectFit="contain"
        quality={100}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={myLoader("19K9Df9Uh7BGVAr0_c23Dg1wGD0tEKokD")}
      />

      <a href="mailto:fvclinks.president@gmail.com" className='cards'>
        <h2>Contact Us &rarr;</h2>
        <p>Send us an email to fvclinks.president@gmail.com</p>
      </a>
    </div>
  </>
}

export default Home;
