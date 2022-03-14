import type { NextPage } from 'next'
import Image from 'next/image'

const myLoader =( src:String ) => `https://drive.google.com/uc?content=view&id=${src}`

const About: NextPage = () => {
  return <>
    <p className='greeting'>
      Welcome to Farmington Valley Chapter of The Links,
      Incorporated, the first suburban chapter in New England’s
      Nutmeg state, Connecticut. Small, but mighty, we are a chapter
      of accomplished women, “Linked in Friendship, Connected in Service”.
    </p>

    <div className='grid'>

      <section className='parag'>
        <h2 id='presidentsmessage'>President&apos;s Message</h2>
        <p>
          Farmington Valley (CT) Chapter of The Links, Incorporated was chartered on April 28, 1979.
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
          <br />
          <b>Breast Cancer Detection & Heart Health Awareness –</b> Cancer and paragiovascular disease are the
          top leading causes of mortality for women in the United States, and particularly for the underserved
          women in the Greater Hartford area. We expect that our efforts to improve early detection of
          breast cancer, and opportunities to provide heart health education while promoting the benefits of
          paragiovascular exercise, will aid in reducing the health disparities for this population.
          <br />
          <b>Empowering Through Mentorship –</b> Unfortunately the statistics on gender gaps are staggering. Our
          mentoring programs for young women (20’s, 30’s) emphasize positive behavioral lifestyle changes,
          and are aimed at deconstructing social disparities, fortifying economic growth, and identifying
          opportunities that will shape their lives in productive ways. Our mentoring programs with minority
          youth (12-18) are designed to encourage and enable, impart experience and knowledge, and
          facilitate networks to sustain personal growth and success pre and post high school graduation.
          Specifically targeting the “A” in STEAM, our mentorship collaboration with a local middle school
          exposes the young students to published authors, while expanding their knowledge,
          comprehension, and appreciation of the spoken word.
          <br />
          <b>Foster Global Understanding –</b> The ability to respect and value diverse cultures is critical in today’s
          interconnected world. Our Global Awareness Series provides the opportunity to explore current
          trends and share topics relating to people of African descent and the African Diaspora in hopes of
          enriching knowledge and shaping perspectives via the authentic lens of our speakers.
          While visiting our site, I encourage you to learn more about our programs and invite you to engage
          with us through a partnership or collaborate effort. And of course, there is always the open
          invitation extended to you to support our programs and fundraising events.
        </p>
      </section>

      <Image className='image'
        src={myLoader("1GeVuwLa4cqvmAOYFM4QK88y-QEIGVNhh")}
        alt="Chapter President"
        objectFit="contain"
        quality={100}
        width={750}
        height={750}
        // placeholder="blur"
        // blurDataURL={myLoader("1GeVuwLa4cqvmAOYFM4QK88y-QEIGVNhh")}
      />

      <Image className='image'
        src={myLoader("1kPcwiG0SdXddja8oHjFZmWL5DRNlZFLM")}
        alt="Chapter History"
        objectFit="contain"
        quality={100}
        width={750}
        height={750}
        // placeholder="blur"
        // blurDataURL={myLoader("1kPcwiG0SdXddja8oHjFZmWL5DRNlZFLM")}
      />

      <section className='parag'>
        <h2 id='chapterhistory'>Chapter History</h2>
        <p>
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
          <br /><br />
          On April 28, 1979, at the Farmington Valley Country Club in Farmington, Connecticut, Thelma
          Hardiman, Eastern Area Director, officiated the installation ceremony of the newly birthed
          Farmington Valley Chapter of The Links, Incorporated. Assisted by the Eastern Area Treasurer Thelma
          Doby and the very spirited Faye Price, Thelma Hardiman inducted the charter members. As the only
          chapter of a national predominantly Black organization in a Connecticut suburb, Farmington Valley
          Chapter of The Links, Incorporated sought not only to inspire African American heritage for the
          growing population of Blacks in the Farmington Valley community, but opportunity to enrich the life
          and culture of the Valley at large with the noble legacy of African Americans.
          <br /><br />
          Charter members included Norma Smith, Edith Barnett, Marie Beane, Doris Bentil, Thelma Borbin,
          Cassandra Butler, Leslie Clark, Muriel Clark, Patricia Lyons, Ione Curtis, Evelyn DuBose, Irma Francis,
          Katherlyn Harrison, Janet Jackson, Irma Lee, Louise Malinosky, Marion McClellan, Constance
          Robinson, Peggy Simmons-Binion, and Laura Watson.
        </p>
      </section>

      <section className='parag'>
        <h2 id='chaptermembers'>Chapter Members</h2>
        <p>
          <b>OFFICERS</b>
          <li><b>President:</b> Kyra Dorsey, PhD</li>
          <li><b>Vice President:</b> Dawne Westbrook</li>
          <li><b>Treasurer:</b> Demetria Wright</li>
          <li><b>Recording Secretary:</b> Jennyfer A. Holmes</li>
          <li><b>Corresponding Secretary:</b> Sharon Lawrence</li>
          <li><b>Financial Secretary:</b> Trina Williams</li>
          <li><b>Parliamentarian:</b> Natalie Achong, MD</li>
          <li><b>Immediate Past President:</b> Elizabeth Ross-Norman</li>
          <br />
          <b>MEMBERS</b>
          <li>Bess Amamoo **</li>
          <li>Francine Austin</li>
          <li>Camille Burke Geathers, PhD</li>
          <li>Gloria Burke **</li>
          <li>Cassandra Butler</li>
          <li>Leslie Clark</li>
          <li>Kimberly Eadie</li>
          <li>Tammy Exum</li>
          <li>Karen Francis, PhD</li>
          <li>Dana Higgins</li>
          <li>Janet Jackson **</li>
          <li>Sonya Jelks</li>
          <li>Christine Johnson-Hatcher</li>
          <li>Sylvia Kelly</li>
          <li>Clara Lee</li>
          <li>Jodi Lilly</li>
          <li>Gwendolyn Lewis **</li>
          <li>Jean Procope Martin **</li>
          <li>Shayla Nunnally, PhD</li>
          <li>Meckla Pinnix</li>
          <li>Kimberly Stanley</li>
          <li>Leah Wade</li>
          <li>Cynthia Williams</li>
          <li>Geneva Williams **</li>
          <li>Kimberly Williams</li>
          <li>Lenora Williams, MD</li>
          <li>Madelina Williams</li>
        </p>
      </section>

      <Image className='image'
        src={myLoader("124iDYuBBq0YqVMfrs9DcvDYarkn6gexO")}
        alt="Chapter Members"
        objectFit="contain"
        quality={100}
        width={750}
        height={750}
        // placeholder="blur"
        // blurDataURL={myLoader("124iDYuBBq0YqVMfrs9DcvDYarkn6gexO")}
      />

    </div>
  </>
}

export default About;