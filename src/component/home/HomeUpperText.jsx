import React from 'react'
import Vider from './Vider'
const HomeUpperText = () => {
  return (
    <div className='font-[font1] pt-4   text-white text-center ' >
      <div  className='text-[9.5vw] text-center leading-33 uppercase '>L'étincelle</div>
      <div className='text-[9.5vw] text-center flex justify-center leading-33 uppercase '>qui
        <div className='w-[17vw] h-[8vw] ml-4 mr-4 rounded-full overflow-hidden       '>
          <div className='w-full h-full overflow-hidden rounded-full '>
          <Vider/>  
          </div>
        </div>
        génère</div>
      <div className='text-[9.5vw] text-center leading-33 uppercase '>la créativité</div>
    </div>
  )
}


export default HomeUpperText