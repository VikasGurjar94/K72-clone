import React from 'react'
import Vider from '../component/home/Vider'
import HomeLowerText from '../component/home/HomeLowerText'
import HomeUpperText from '../component/home/HomeUpperText'


const Home = () => {
  return (
    <div>
      <div className=' h-screen w-full fixed   '>
        <Vider></Vider>
      </div>
      <div className='h-screen flex flex-col justify-between items-center w-full relative'>
        
        <HomeUpperText/>
        <HomeLowerText/>
       
      </div>
    </div>
  )
}

export default Home