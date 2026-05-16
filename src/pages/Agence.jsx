import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import {ScrollTrigger} from 'gsap/all';
import NavbarProj from '../component/projects/NavbarProj';
import CurrentTime from '../component/CurrentTime';
import SocialLinks from '../component/compo/SocialLinks';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger)


 const imageArray = [
    
    '/assets/Carl_480x640-480x640.jpg',
    '/assets/Olivier_480x640-480x640.jpg',
    '/assets/Lawrence_480x640-480x640.jpg',
    '/assets/HugoJoseph_480x640-480x640.jpg',
    '/assets/ChantalG_480x640-480x640.jpg',
    '/assets/MyleneS_480x640-480x640.jpg',
    '/assets/SophieA_480x640-480x640.jpg',
    '/assets/Claire_480x640-480x640.jpg',
    '/assets/Michele_480X640-480x640.jpg',
    '/assets/MEL_480X640-480x640.jpg',
 
  ]
const Agence = () => {

  let imgRef = useRef(null) ;
  
  useGSAP(()=>{
    gsap.to(imgRef.current,{
      scrollTrigger:{
        trigger: imgRef.current , 
        // scroller : body ,
        start : 'top 24%',
        end : 'bottom -70%',
        scrub : true , 
        pin : true ,
        onUpdate : (ele)=>{
          let imgIndex = Math.round(ele.progress*(imageArray.length-1))
          let imgsrc = imageArray[imgIndex];
          imgRef.current.src = imgsrc 
        }
      }

    })
  })

  return (
    <>
    <div className='  overflow-x-hidden  '>
      <div>
        <NavbarProj/>
      </div>
      <div >
        <img ref={imgRef} className=' h-[38vh]  absolute  top-[24vh] left-[30vw] rounded-3xl ' src="/assets/Carl_480x640-480x640.jpg" />
      </div>
      <div className='mt-[26%] relative  ' >
        <h1 className='text-[19vw] leading-[17vw] text-center font-[font2] uppercase  '>
          Soixan7e <br />
           Douze
        </h1>
      </div>
      <div className='h-screen w-screen '>
        <p className='font-[font2] text-[3.5vw] relative w-[60vw] ml-[40vw] text-left  leading-[3vw] ' >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
        </p>
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

export default Agence