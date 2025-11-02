import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import CurrentTime from '../CurrentTime';

const FullScreenNav = () => {

  let marq = useRef(null)
  let marq1 = useRef(null)
  let marq2 = useRef(null)
  let marq3 = useRef(null)

  useGSAP(()=>{
    gsap.to(".animateMarque",{
      xPercent : -50,
      duration : 7  ,
      repeat : -1 ,
      ease : "none",
      
    })
  })


  return (
    <div id='fullscreennav' className='z-50 absolute  bg-black pt-10 flex justify-center items-center text-white h-screen w-screen overflow-hidden  ' >
    <Link to='/'className=' w-30 absolute top-0 left-0 m-2 ' >
           <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 103 44">
                      <path fillRule="evenodd" fill='white' d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
           </svg>
        
        </Link>

        <Link to='/' >
        <RxCross1 className='absolute top-0 hover:text-[#D3FD50]  right-0 ' size={150} />
        </Link>

    <div id='allLinks' className='bg-green-500 overflow-hidden  w-full h-[70%] flex flex-col justify-around text-8xl uppercase font-[font2] items-center ' >


      <Link to='/projects' onMouseEnter={()=>{ marq.current.style.opacity = "100%"
        marq.current.style.height = "100%"
       } }
      onMouseLeave={()=>{marq.current.style.opacity = "0"
                marq.current.style.height = "0"
      }  }
      className='w-full bg-black cursor-pointer h-full flex justify-center relative p-5 items-center  ' >
      <div className="flatLine w-full h-[1px] absolute top-0 bg-white "></div>
        <h1>Projects</h1>  
        
         
          <div ref={marq}  className= ' bg-[#D3FD50] z-10 opacity-0 font-[font2] flex text-black absolute  left-0 align-middle top-0 pt-5   h-full w-[200vw] animateMarque justify-around item-center' >
            <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
          <div>
            Pour tout voir
          </div>
             <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
          <div>
            Pour tout voir
          </div>
            <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
        </div>


      <div className="flatLine w-full h-[1px] absolute bottom-0 bg-white "></div>
      </Link>
      <Link to='/agence' onMouseEnter={()=>{ marq1.current.style.opacity = "100%"
        marq1.current.style.height = "100%"
       } }
      onMouseLeave={()=>{marq1.current.style.opacity = "0"
                marq1.current.style.height = "0"
      }  }
      className='w-full bg-black cursor-pointer h-full flex justify-center relative p-5 items-center  '>

        <h1>Agence</h1>
          <div ref={marq1}  className= ' bg-[#D3FD50] z-10 opacity-0 font-[font2] flex text-black absolute  left-0 align-middle top-0 pt-5   h-full w-[200vw] animateMarque justify-around item-center' >
            <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
          <div>
            Pour tout savoir
          </div>
             <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
          <div>
            Pour tout savoir
          </div>
            <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
        </div>


      </Link >
      <div onMouseEnter={()=>{ marq2.current.style.opacity = "100%"
        marq2.current.style.height = "100%"
       } }
      onMouseLeave={()=>{marq2.current.style.opacity = "0"
                marq2.current.style.height = "0"
      }  }
      className='w-full bg-black cursor-pointer h-full flex justify-center relative p-5 items-center  '>
      <div className="flatLine w-[100vw]  h-[1px] left-0 absolute top-0 bg-white "></div>
        <h1>contact</h1>
          <div ref={marq2}  className= ' bg-[#D3FD50] z-10 opacity-0 font-[font2] flex text-black absolute  left-0 align-middle top-0 pt-5   h-full w-[200vw] animateMarque justify-around item-center' >
            <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
          <div>
            Pour unovoir un
          </div>
            <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
          <div>
            Pour unovoir un
          </div>
            <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
        </div>

      </div>
      <div onMouseEnter={()=>{ marq3.current.style.opacity = "100%"
        marq3.current.style.height = "100%"
       } }
      onMouseLeave={()=>{marq3.current.style.opacity = "0"
                marq3.current.style.height = "0"
      }  }
      className='w-full bg-black cursor-pointer h-full flex justify-center relative p-5 items-center  '>
      <div className="flatLine w-full h-[1px] absolute left-0 top-0 bg-white "></div>
        <h1>blog</h1>
         <div ref={marq3}  className= ' bg-[#D3FD50] z-10 opacity-0 font-[font2] flex text-black absolute  left-0 align-middle top-0 pt-5   h-full w-[200vw] animateMarque justify-around item-center' >
            <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
          <div>
            liar lies articles
          </div>
             <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
          <div>
           liar lies articles
          </div>
            <img className='h-20 w-65 rounded-full ' src="assets/NavImg.jpg" alt="" />
        </div>

      <div className="flatLine w-full h-[1px] absolute left-0 bottom-0 bg-white "></div>
      </div>

    </div>

    <div className='absolute bg-black items-baseline  w-full uppercase flex  justify-between ml-5 mr-5  mb-5 bottom-0 left-0 font-[font1] '>
      <CurrentTime></CurrentTime>
      <div className='flex text-[12px] gap-5 ' >
        <h1 className='cursor-pointer hover:text-[#D3FD50] ' >politique de conflitediale</h1>
        <h1 className='cursor-pointer hover:text-[#D3FD50] ' >avis de conflitediale</h1>
        <h1 className='cursor-pointer hover:text-[#D3FD50] ' >raport ethique</h1>
        <h1 className='cursor-pointer hover:text-[#D3FD50] ' >options de consentment</h1>
      </div>
       <div className='bg-black  flex justify-baseline items-center gap-0 mr-15 ' >
      <Link target="_blank" to='https://www.instagram.com/vikas_gurjar28?igsh=YXk4am53MWtrbnpz' className='border hover:text-[#D3FD50]  rounded-full pl-4 text-center pr-4 border-amber-50 text-[35px] font-[font2]  ' >
      IG
      </Link>
      <Link  className='border hover:text-[#D3FD50] rounded-full pl-4 text-center pr-4 border-amber-50 text-[35px] font-[font2]  '>
      fb
      </Link>
      <Link to='https://www.linkedin.com/in/vikas-gurjar-b04186330/' target="_blank" className='border hover:text-[#D3FD50]  rounded-full pl-4 text-center pr-4 border-amber-50 text-[35px] font-[font2]  '>
      in
      </Link>
    </div>
    </div>

   

    </div>

  )
}

export default FullScreenNav