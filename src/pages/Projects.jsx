import { useGSAP } from '@gsap/react'
import ProjectCard from '../component/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'
import NavbarProj from '../component/projects/NavbarProj'
import SocialLinks from '../component/compo/SocialLinks'
import CurrentTime from '../component/CurrentTime'
const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <>
    <div className='lg:p-4 p-2 h-[400vh] '>
      
      <NavbarProj></NavbarProj>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw]  text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol  '>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
      
    </div>
    <div className='w-screen relative h-[60vh] bg-black '>
        <div className='w-screen flex justify-between items-center bg-black text-white '>
            <div className='bg-black text-[70px]  flex justify-baseline items-center gap-0 mr-15 '>
            <SocialLinks/>
            </div>
            <Link target="_blank" to='https://www.instagram.com/vikas_gurjar28?igsh=YXk4am53MWtrbnpz' className='mt-5 uppercase border hover:text-[#D3FD50]  rounded-full  text-center text-[70px] mr-5 pr-5 pl-5 pt-2 border-amber-50 font-[font2]  ' >
                  contact
                  </Link>
        </div>
        <footer className='bg-black text-white flex justify-between text-2xl items-center bottom-5 w-screen absolute   '>
           <CurrentTime></CurrentTime>
      <div className='flex text-[12px] gap-5 ' >
        <h1 className='cursor-pointer hover:text-[#D3FD50]  text-[15px] font-[font2] uppercase ' >politique de conflitediale</h1>
        <h1 className='cursor-pointer hover:text-[#D3FD50] text-[15px] font-[font2] uppercase ' >avis de conflitediale</h1>
        <h1 className='cursor-pointer hover:text-[#D3FD50]  text-[15px] font-[font2] uppercase' >raport ethique</h1>
        <h1 className='cursor-pointer hover:text-[#D3FD50]  text-[15px] font-[font2] uppercase' >options de consentment</h1>
      </div>

        </footer>
    </div>
    </>
  )
}

export default Projects