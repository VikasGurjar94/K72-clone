import React from 'react'
import { Link } from 'react-router-dom'

const HomeLowerText = () => {
  return (
    <div className=' font-[font2] text-white flex justify-center items-center'>
      <div className='text-[6vw]  hover:border-[#D3FD50] hover:text-[#D3FD50]  border-5 rounded-full pl-7 pr-7 mr-2 uppercase ' >
        
        <Link to='/projects' >projects</Link>

      </div >
      <div className='text-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 rounded-full ml-2 pl-7 pr-7 uppercase '>
        
        <Link to='/agence' >agence</Link>
      </div>
    </div>
  )
}

export default HomeLowerText