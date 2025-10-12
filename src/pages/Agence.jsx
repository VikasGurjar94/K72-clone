import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)


 const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
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
    <div className=' overflow-x-hidden  '>
      <div >
        <img ref={imgRef} className=' h-[38vh]  absolute  top-[24vh] left-[30vw] rounded-3xl ' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" />
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
    <div className='h-screen w-screen'>

      </div>
    </>
  )
}

export default Agence