import React, { useRef } from 'react'
import { Routes , Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Navbar from './component/navigation/Navbar';


const App = () => {

  


  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/agence' element={<Agence/>} />
      </Routes>
    </div>
  )
}

export default App ;