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
      <div className='h-screen w-full relative'>
        <HomeLowerText></HomeLowerText>
        <HomeUpperText/>
      </div>
    </div>
  )
}

export default Home