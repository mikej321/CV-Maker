import { useState } from 'react'
import './App.css'
import { Nav_bar } from './nav_bar';
import { Home } from './Intro'
import { Section_1 } from './section_1';
import { Section_2 } from './section_2';
import { Section_3 } from './section_3';
import { Section_4 } from './section_4';
import { Section_5 } from './section_5';
import { Section_6 } from './section_6';
import { Section_7 } from './section_7';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';



function App() {

  const location = useLocation();
  const [homeStatus, setHomeStatus] = useState({
    started: true,
    section_1: false,
    section_2: false,
    section_3: false,
    section_4: false,
    section_5: false,
    section_6: false,
    section_7: false,
  })

  

  return (
      <div className="container">
        <Nav_bar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/CV-Maker" element={<Home homeStatus={homeStatus} setHomeStatus={setHomeStatus} />} />
            <Route path="/CV-Maker/section_1" element={<Section_1 />} />
            <Route path="/CV-Maker/section_2" element={<Section_2 />} />
            <Route path="/CV-Maker/section_3" element={<Section_3 />} />
            <Route path="/CV-Maker/section_4" element={<Section_4 />} />
            <Route path="/CV-Maker/section_5" element={<Section_5 />} />
            <Route path="/CV-Maker/section_6" element={<Section_6 />} />
            <Route path="/CV-Maker/section_7" element={<Section_7 />} />
          </Routes>
        </AnimatePresence>
      </div>
  )
}

export default App
