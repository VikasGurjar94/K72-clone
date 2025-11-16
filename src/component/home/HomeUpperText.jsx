import React from 'react'
import Vider from './Vider'

const HomeUpperText = () => {
  return (
    <div className='font-[font1] pt-4 text-white text-center'>

      <div className='text-[12vw] sm:text-[10vw] md:text-[9.5vw] leading-none uppercase'>
        L'étincelle
      </div>

      <div className='text-[12vw] sm:text-[10vw] md:text-[9.5vw] flex justify-center leading-none uppercase'>
        qui
        <div className='w-[28vw] h-[14vw] sm:w-[22vw] sm:h-[11vw] md:w-[17vw] md:h-[8vw] ml-3 mr-3 rounded-full overflow-hidden'>
          <div className='w-full h-full overflow-hidden rounded-full'>
            <Vider/>
          </div>
        </div>
        génère
      </div>

      <div className='text-[12vw] sm:text-[10vw] md:text-[9.5vw] leading-none uppercase'>
        la créativité
      </div>

    </div>
  )
}

export default HomeUpperText
