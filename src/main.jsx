import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Common from './component/Common.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < BrowserRouter>
      <Common>
      <App/>
      </Common>
    </ BrowserRouter>
  </StrictMode>,
)
