import React, { useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';

import SiteNavBar from './components/navbar';
import RotatingCube from './components/rotating-cube';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Resume from './components/resume';


function App() {
  const [cubeVisible, setCubeVisible] = useState(false);
  const [currPage, setCurrPage] = useState("Home");
  const [initialEntry, setInitialEntry] = useState(true);
  const [isFading, setIsFading] = useState(true);
  const [prevPage, setPrevPage] = useState("Home");
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect( () => {
    if(initialEntry) {
      setInitialEntry(false);
    } else {
      setIsFading(true);
      setCubeVisible(true);
    }
  }, [currPage])

  useEffect( () => {
    if(darkMode) {
      document.body.style.backgroundColor = '#333333';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = '#dddddd';
      document.body.style.color = 'black';
    }
  }, [darkMode])

  return (
    <div className="App">
      <SiteNavBar currPage={currPage} setCurrPage={setCurrPage} setPrevPage={setPrevPage} darkMode={darkMode} setDarkMode={setDarkMode}/>
      {cubeVisible && <RotatingCube 
                        currPage={currPage} 
                        setCubeVisible={setCubeVisible}
                        isFading={isFading}
                        setIsFading={setIsFading}
                        prevPage={prevPage}
                        rotateX={rotateX}
                        setRotateX={setRotateX}
                        rotateY={rotateY}
                        setRotateY={setRotateY}
                        darkMode={darkMode}
                      />}
      <button variant="primary" className={`dark-mode-toggle ${darkMode ? "active" : ""}`} onClick={() => setDarkMode(darkMode ? false : true)}>
        <span className="icon">{darkMode ? "🌙" : "☀️"}</span>
      </button>


        <Routes>
          <Route path='/' element={cubeVisible ? null : <Home />}/>
          <Route path='/home' element={cubeVisible ? null : <Home />}></Route>
          <Route path='/about' element={cubeVisible ? null : <About />} />
          <Route path='/resume' element={cubeVisible ? null : <Resume />} />
          <Route path='/projects' element={cubeVisible ? null : <Projects />} />
          <Route path='/contact' element={cubeVisible ? null : <Contact />} />
          <Route path='/other' element={cubeVisible ? null : <About />} />
        </Routes>
    </div>
  );
}

export default App;
