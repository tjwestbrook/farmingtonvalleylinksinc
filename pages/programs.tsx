import { NextPage } from 'next';
import Image from 'next/image';

const Programs: NextPage = () => {
  return <>
  <Image className='image'
    src="/filler.png"
    alt="Picture of the President of the Farmington Valley Links Incorporated"
    width={400}
    height={300}
  />
  
  <div className='grid'>
    
    <p className='greeting'>
      The outstanding programming of The Links, Incorporated has five facets which include Services to
      Youth, The Arts, National Trends and Services, International Trends and Services and Health and
      Human Services. The programs are implemented through strategies such as public information and
      education, economic development, and public policy campaigns.
    </p>
    
    <h2 id='thearts'>The Arts</h2>
    <p className='parag'>
      The Links support of the arts can be traced to our cultured co-founder Margaret Rosell Hawkins. Her
      innate artistic talent, discovered at a young age, earned her a four-year scholarship to the Women’s
      School of Design, later known as the Moore Institute of Art. Her passion for creative expression later
      led to her appointment as an art teacher, and helped give root to the establishment of The Arts
      facet in 1964 at the 14th National Assembly.
      As an approach, Links chapters partner with art galleries, museums, symphonies, arts councils,
      educational institutes and corporations to support and develop art programs, especially where
      there is a focus on artists of color.
      Farmington Valley Chapter has partnered with Hartford Stage to introduce students to theatrical
      productions featuring works of minority playwrights; joined with Windsor Arts Center to host
      opening receptions for recognized artists of color; and collaborated with Grace Academy, an urban
      middle school for young women, developing a Poetry Workshop facilitated by published authors.
      Our programming continues to foster creativity through all forms of art for youth, as well as to
      promote and expose our communities to the culturally rich contributions of African Americans and
      the African diaspora. The current strategic goal is to sustain our Poetry Workshop project, enabling
      an enrichment program that will enhance literary skillsets and appreciation for both the written and
      spoken word.
    </p>
    
    <h2 id='servicetoyouth'>Service to Youth</h2>
    <p className='parag'>
      The Links, Incorporated created its first program facet, Services to Youth, to equip Black youth to
      use their intellect and spirit of achievement to become successful and productive citizens. Today,
      we continue to implement aligned, integrated and transformational programs that are responsive
      to the academic, health, cultural, social awareness, career development, and mentoring needs of
      youth.
      In support of our organization’s mission to enrich and enhance the lives of Black youth, particularly
      through mentor programs and STEAM, Farmington Valley Chapter has engaged in a partnership
      with an area high school, presenting a series of workshops presentations focusing on personal
      branding, resume writing and interview skills, and mentorship relationships for college and career
      exploration.
      The chapter is committed to the sustainability of historically black colleges and universities and
      continues to support imperatives with financial contributions.
      The current strategic goal is to build a robust mentorship program for students, ages 12 -18, that
      will provide development and support as they navigate pre and post-high school graduation
      opportunities. This includes Book Awards that provide financial assistance to students during their
      academic pursuits at a higher institution.
    </p>
    
    <h2 id='nationaltrends&services'>National Trends & Services</h2>
    <p className='parag'>
      The National Trends and Services facet is tasked with eliminating disparities by reducing barriers to
      resources through advocacy, education, and service. Links chapters are empowered to raise their
      voices and transform the communities in which they work.
      Farmington Valley (CT) has responded to this imperative task with several strategic and impactful
      projects to address economic issues and homelessness, which unfortunately plague our
      communities, particularly our senior population. Projects include a long standing relationship with
      Mahoney Village, an underserved senior residence in Hartford’s Northend, where Links members
      have nurtured an invaluable rapport with seniors, provided social programming and pertinent
      health education, and documented their personal experiences through recorded oral histories; and
      developed a partnership with Hartford’s McKinney Men’s Homeless Shelter, providing items of basic
      needs for subsistence.
      The current strategic goal is to engage in a mentorship program that will enable women to succeed
      in all aspects of their lives - i.e., “Women supporting women”. The strategic partnership is with a
      local non-profit organization committed to empowering women in recovery from the criminal
      justice system to make positive behavioral changes in their lives.
    </p>
    
    <h2 id='internationaltrends&services'>Interational Trends & Services</h2>
    <p className='parag'>
    The International Trends and Services facet, formed in 1970, provides services and delivers
      transformational programs to people of African ancestry globally so that they may have a better
      quality of life. Programs are designed and developed to service educational, health and cultural
      needs and to help people emerge from poverty. A primary objective of our international work is to
      enrich the lives of women and their families.
      For more than three decades, Farmington Valley (CT) Chapter has engaged the community with
      “Sundays at 4”, a series of thought-provoking lectures and relevant conversations relating to the
      African Diaspora. More recently, the programming has evolved to our Global Linkages series which
      seeks to foster knowledge, understanding and appreciation of global awareness as it relates to
      Africa, the Americas, and the Caribbean, through advocacy, humanitarian outreach, and cultural
      literacy.
      The current strategic goal is to progress the Global Linkages program, engaging speakers with
      expertise on international subject matters intended to educate, engage, and expose the Greater
      Hartford community to cultures that represent the world community; the impacts of environmental
      racism, and the international impact of Black Lives Matter.
    </p>
    
    <h2 id='health&humanservices'>Health & Human Services</h2>
    <p className='parag'>
      The Links, Incorporated established the Health and Human Services facet in response to the chronic
      health disparities that persist in black communities and result in the decreased life expectancy of
      African Americans and other people of African ancestry. The goal of H&HS is to promote and
      facilitate programs supporting good health and the elimination of chronic health disparities in
      communities of color through education, health advocacy, and optimal utilization of health
      resources.
      Community education about health risks is crucial, and Farmington Valley (CT) Chapter has been in
      the forefront with a vast array of projects targeting individuals in our community who have little or
      no access to health care resources. Since the announcement of the HH&S facet in 2010, our
      programming included hosting the first breast cancer awareness event with PTO parents and staff
      at the former Simpson Waverly School. Programming expanded to an extremely successful decade
      of Community Health Fairs, providing access to and information from medical professionals and
      healthcare providers.
      The current strategic goal seeks to reduce health disparities focusing on the comorbidity of breast
      and heart health for women of color, by enhancing opportunities for early breast cancer detection
      and providing heart health education to a target group. We will continue our partnership with
      Hartford Hospital to promote screening efforts and assist patient navigation through the healthcare
      system.
    </p>

  </div>
  </>
}

export default Programs;