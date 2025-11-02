import React, { useRef } from 'react'
import { Routes , Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Navbar from './component/navigation/Navbar';
import FullScreenNav from './component/navigation/FullScreenNav';


const App = () => {

  
  return (
    <div>
      {/* <FullScreenNav></FullScreenNav> */}
      
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/nav' element={<FullScreenNav/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/agence' element={<Agence/>} />
      </Routes>
    </div>
  )
}

export default App ;