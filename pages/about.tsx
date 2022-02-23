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

const About: NextPage = () => {
  return <>
    <Image className='image'
        src="/filler.png"
        alt="Picture of the President of the Farmington Valley Links Incorporated"
        width={400}
        height={300}
      />

    <div className='grid'>

      <h2 id='presidentsmessage' className='header'>President&apos;s Message</h2>
      <p className='parag'>Farmington Valley (CT) Chapter of The Links, Incorporated was chartered on April 28, 1979.
        For more than 40 years, the chapter has developed strategic programming and implemented impactful
        projects to serve the Greater Hartford area through the 5 facet structure of the organization,
        Services to Youth, The Arts, National Trends and Services, International Trends and Services, and
        Health and Human Services. With a fundamental purpose of service, Farmington Valley (CT)
        members seek to enrich the lives of those within the Greater Hartford communities and preserve
        the rich legacy of African American culture. We ascertain our purpose living our core values,
        friendship, integrity, honesty, service, commitment, family relationships, courage, respect for self
        and others, legacy, confidentiality, responsibility, and accountability.
        As we move forward through this next decade, Farmington Valley (CT) Chapter is committed to The
        Links, Incorporated’s mission, Friends Transforming Communities through Service. Our commitment
        to improving the lives of the Greater Hartford community is demonstrated through our outreach,
        focusing on the following initiatives:
        
        Breast Cancer Detection & Heart Health Awareness – Cancer and paragiovascular disease are the
        top leading causes of mortality for women in the United States, and particularly for the underserved
        women in the Greater Hartford area. We expect that our efforts to improve early detection of
        breast cancer, and opportunities to provide heart health education while promoting the benefits of
        paragiovascular exercise, will aid in reducing the health disparities for this population.
        
        Empowering Through Mentorship – Unfortunately the statistics on gender gaps are staggering. Our
        mentoring programs for young women (20’s, 30’s) emphasize positive behavioral lifestyle changes,
        and are aimed at deconstructing social disparities, fortifying economic growth, and identifying
        opportunities that will shape their lives in productive ways. Our mentoring programs with minority
        youth (12-18) are designed to encourage and enable, impart experience and knowledge, and
        facilitate networks to sustain personal growth and success pre and post high school graduation.
        Specifically targeting the “A” in STEAM, our mentorship collaboration with a local middle school
        exposes the young students to published authors, while expanding their knowledge,
        comprehension, and appreciation of the spoken word.
        
        Foster Global Understanding – The ability to respect and value diverse cultures is critical in today’s
        interconnected world. Our Global Awareness Series provides the opportunity to explore current
        trends and share topics relating to people of African descent and the African Diaspora in hopes of
        enriching knowledge and shaping perspectives via the authentic lens of our speakers.
        While visiting our site, I encourage you to learn more about our programs and invite you to engage
        with us through a partnership or collaborate effort. And of course, there is always the open
        invitation extended to you to support our programs and fundraising events.
      </p>

      <h2 id='chapterhistory' className='header'>Chapter History</h2>
      <p className='parag'>
        The vision of the Farmington Valley Chapter of The Links, Incorporated took form in 1978, when our
        first president Norma Smith’s aunt, Faye Price, planted the seed during a visit to Norma’s Granby,
        Connecticut home. Price, a national officer of The Links, Incorporated, serving as director of the
        National Trends and Services Facet, was a strong spirited visionary and recognized the need and
        benefits the service organization would bring to the Hartford community. Swiftly and effectively, she
        utilized her network and resources to organize the first suburban chapter in the state of Connecticut.
        With Price’s support and guidance, Norma Smith took on the challenge to activate the “Farmington
        Valley Girls” interest group, the required predecessor to the present chapter. For a year, the
        “Farmington Valley Girls” developed a number of impressive service projects, which included a
        canned food pantry, volunteer work at the McLean Nursing Home in Simsbury, Connecticut, as well
        as plans for the first of many fundraisers that would fund book awards for college bound students.
        
        On April 28, 1979, at the Farmington Valley Country Club in Farmington, Connecticut, Thelma
        Hardiman, Eastern Area Director, officiated the installation ceremony of the newly birthed
        Farmington Valley Chapter of The Links, Incorporated. Assisted by the Eastern Area Treasurer Thelma
        Doby and the very spirited Faye Price, Thelma Hardiman inducted the charter members. As the only
        chapter of a national predominantly Black organization in a Connecticut suburb, Farmington Valley
        Chapter of The Links, Incorporated sought not only to inspire African American heritage for the
        growing population of Blacks in the Farmington Valley community, but opportunity to enrich the life
        and culture of the Valley at large with the noble legacy of African Americans.
        
        Charter members included Norma Smith, Edith Barnett, Marie Beane, Doris Bentil, Thelma Borbin,
        Cassandra Butler, Leslie Clark, Muriel Clark, Patricia Lyons, Ione Curtis, Evelyn DuBose, Irma Francis,
        Katherlyn Harrison, Janet Jackson, Irma Lee, Louise Malinosky, Marion McClellan, Constance
        Robinson, Peggy Simmons-Binion, and Laura Watson.
      </p>

      <h2 id='chaptermembers' className='header'>Chapter Members</h2>
      <p className='parag'>
        OFFICERS
        President: Kyra Dorsey, PhD
        Vice President: Dawne Westbrook
        Treasurer: Demetria Wright
        Recording Secretary: Jennyfer A. Holmes
        Corresponding Secretary: Sharon Lawrence
        Financial Secretary: Trina Williams
        Parliamentarian: Natalie Achong, MD
        Immediate Past President: Elizabeth Ross-Norman
        MEMBERS:
        Bess Amamoo **
        Francine Austin
        Camille Burke Geathers, PhD
        Gloria Burke **
        Cassandra Butler
        Leslie Clark
        Kimberly Eadie
      </p>
    </div>
  </>
}

export default About;