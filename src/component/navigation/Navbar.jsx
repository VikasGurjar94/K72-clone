import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Links } from 'react-router-dom'

import { useLocation } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
    
 let rasta = useLocation().pathname;
 

    const smallGreenAnimate = useRef(null)
    const navIcon = useRef(null)
  return (
    <div className='fixed z-20 w-full top-0 left-0 flex justify-between items-center max-sm:px-2 max-md:px-3'>

        <Link to='/' className='w-30 m-2 max-sm:w-20 max-sm:m-1 max-md:w-24 max-md:m-1.5'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                      <path fillRule="evenodd" fill={rasta === '/projects' ? "black" : "white"} d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
           </svg>
        
        </Link>
        <Link to='/nav' onMouseEnter={()=> {smallGreenAnimate.current.style.height = '100%' ;
          navIcon.current.style.color = "black" ;
        }  }
        onMouseLeave={()=> {smallGreenAnimate.current.style.height = '0%' ;
                    navIcon.current.style.color = "white" ;
        }} className='h-15 w-65 relative -mt-2 bg-black cursor-pointer max-sm:h-12 max-sm:w-12 max-sm:-mt-1 max-md:h-13 max-md:w-16 max-md:-mt-1.5'>
          <div ref={navIcon} className='absolute z-10 top-0 right-0 mr-5 text-white max-sm:mr-2 max-sm:mt-1 max-md:mr-3 max-md:mt-1.5'>
            <FiMenu size={40} className='max-sm:!w-6 max-sm:!h-6 max-md:!w-8 max-md:!h-8' />
          </div>
            <div ref={smallGreenAnimate} className='smallNavAnimate absolute w-full top-0 bg-[#D3FD50] transition-all'>
            </div>
        </Link>

    </div>
  )
}

export default Navbar