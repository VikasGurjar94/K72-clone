import React from 'react'
import Vider from '../component/home/Vider'
import HomeLowerText from '../component/home/HomeLowerText'
import HomeUpperText from '../component/home/HomeUpperText'
import Navbar from '../component/navigation/Navbar'
import CurrentTime from '../component/CurrentTime'

const Home = () => {
  return (
    <div>
      <div className='absolute top-0' >
        <Navbar></Navbar>
      </div>
      <div className=' h-screen w-full fixed   '>
        <Vider></Vider>
      </div>
      <div className='h-screen flex flex-col justify-between items-center w-full relative'>
        
        <HomeUpperText/>
        <div className=' text-white self-baseline-last  font-[font1] w-1/4 '>
&emsp; &emsp; &emsp; &emsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
        </div>
        <HomeLowerText/>
      
       
      </div>
      <div className='absolute text-white  bottom-5 left-5 ' >
          <CurrentTime></CurrentTime>
      </div>
    </div>
  )
}

export default Home