import React from 'react'
import Vider from '../component/home/Vider'
import HomeLowerText from '../component/home/HomeLowerText'
import HomeUpperText from '../component/home/HomeUpperText'
import Navbar from '../component/navigation/Navbar'
import CurrentTime from '../component/CurrentTime'

const Home = () => {
  return (
    <div>
      <div className='absolute top-0 w-full'>
        <Navbar />
      </div>

      <div className='h-screen w-full fixed'>
        <Vider />
      </div>

      <div className='h-screen flex flex-col justify-between items-center w-full relative px-4 sm:px-6 md:px-10'>
        <HomeUpperText />

        <div className='text-white font-[font1] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4 text-sm sm:text-base md:text-lg leading-relaxed'>
          &emsp; &emsp; &emsp; &emsp; 
          K72 est une agence qui pense chaque action pour nourrir la marque. 
          Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée 
          l’étincelle pour générer de l’émotion. Pour assurer une relation 
          honnête, on est sans filtre, on dit ce qui doit être dit, on fait 
          ce qui doit être fait.
        </div>

        <HomeLowerText />
      </div>

      <div className='absolute text-white bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5'>
        <CurrentTime />
      </div>
    </div>
  )
}

export default Home
