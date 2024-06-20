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
  const [sectionStatus, setSectionStatus] = useState({
    section_1: {
      complete: false,
      intro_data: "",
    },
    section_2: {
      complete: false,
      intro_data: "",
    },
    section_3: {
      complete: false,
      intro_data: "",
    },
    section_4: {
      complete: false,
      intro_data: "",
    },
    section_5: {
      complete: false,
      intro_data: "",
    },
    section_6: {
      complete: false,
      intro_data: "",
    },
    section_7: {
      complete: false,
      intro_data: "",
    },
  })

  

  return (
      <div className="container">
        <Nav_bar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/CV-Maker/" element={<Home sectionStatus={sectionStatus} setSectionStatus={setSectionStatus}  />} />
            <Route path="/CV-Maker/section_1" element={<Section_1 sectionStatus={sectionStatus} setSectionStatus={setSectionStatus} />} />
            <Route path="/CV-Maker/section_2" element={<Section_2 sectionStatus={sectionStatus} setSectionStatus={setSectionStatus} />} />
            <Route path="/CV-Maker/section_3" element={<Section_3 sectionStatus={sectionStatus} setSectionStatus={setSectionStatus} />} />
            <Route path="/CV-Maker/section_4" element={<Section_4 sectionStatus={sectionStatus} setSectionStatus={setSectionStatus}/>} />
            <Route path="/CV-Maker/section_5" element={<Section_5 sectionStatus={sectionStatus} setSectionStatus={setSectionStatus} />} />
            <Route path="/CV-Maker/section_6" element={<Section_6 sectionStatus={sectionStatus} setSectionStatus={setSectionStatus} />} />
            <Route path="/CV-Maker/section_7" element={<Section_7 sectionStatus={sectionStatus} setSectionStatus={setSectionStatus} />} />
          </Routes>
        </AnimatePresence>
      </div>
  )
}

export default App
