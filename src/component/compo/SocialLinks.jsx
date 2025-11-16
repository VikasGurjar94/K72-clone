import React from 'react'
import { Link } from 'react-router-dom'


const SocialLinks = () => {
  return (
    <div>
      <Link target="_blank" to='https://www.instagram.com/vikas_gurjar28?igsh=YXk4am53MWtrbnpz' className='border hover:text-[#D3FD50]  rounded-full pl-4 text-center pr-4 border-amber-50 font-[font2]  ' >
      IG
      </Link>
      <Link  className='border hover:text-[#D3FD50]  rounded-full pl-4 text-center pr-4 border-amber-50 font-[font2]  '>
      FB
      </Link>
      <Link to='www.linkedin.com/in/vikas-gurjar-g9427' target="_blank" className='border hover:text-[#D3FD50]  rounded-full pl-4 text-center pr-4 border-amber-50  font-[font2]  '>
      in
      </Link>
    </div>
  )
}

export default SocialLinks