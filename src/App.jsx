import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Work from './pages/Work';
import Projects from './pages/Projects';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/agence' element={<Agence/>} />
      </Routes>
      
    </div>
  )
}

export default App ;