import React from 'react'
import { Link } from 'react-router-dom'

const HomeLowerText = () => {
  return (
    <div className='font-[font2] text-white flex justify-center items-center gap-2 sm:gap-4'>

      <div className='text-[10vw] sm:text-[7vw] md:text-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 rounded-full px-6 sm:px-8 md:px-10 uppercase'>
        <Link to='/projects'>projects</Link>
      </div>

      <div className='text-[10vw] sm:text-[7vw] md:text-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 rounded-full px-6 sm:px-8 md:px-10 uppercase'>
        <Link to='/agence'>agence</Link>
      </div>

    </div>
  )
}

export default HomeLowerText
