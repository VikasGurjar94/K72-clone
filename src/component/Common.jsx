import { useGSAP  } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Common = (props) => {

  let mainApp = useRef(null)
    
  let tl = gsap.timeline() ;
  
  let stairParent  = useRef(null)
  
 let rasta = useLocation().pathname;

  useGSAP(()=>{
    tl.to(stairParent.current,{
      display : 'block',
    })
    .from(mainApp.current,{
      display : 'hidden',
    })
    .from('.stairAnimate',{
      y : '-100%' ,
      stagger : {
        amount : 0.2,
        from : 'end'
      }
    })
    .to('.stairAnimate',{
      y : '110%' ,
      stagger : {
        amount : 0.2 ,
        from : 'end',
      }
    })
    .to(stairParent.current,{
      display : 'none'
    })
    .to('.stairAnimate',{
      y : '0%' ,
    })
   
    gsap.from(mainApp.current,{
      opacity : 0.5,
      delay : 1,
    })
    
  },[rasta])
  return (
     <div>
      <div ref={stairParent} className='h-screen w-full fixed  z-50 top-0'>
      <div  className='h-full w-full flex   '>
        <div className='h-full stairAnimate bg-black w-1/5  '></div>
        <div className='h-full stairAnimate bg-black w-1/5  '></div>
        <div className='h-full stairAnimate bg-black w-1/5  '></div>
        <div className='h-full stairAnimate bg-black w-1/5  '></div>
        <div className='h-full stairAnimate bg-black w-1/5  '></div>
      </div>
      </div>
      <div ref={mainApp} >
        {props.children}
      </div>
     </div>
  )
}

export default Common