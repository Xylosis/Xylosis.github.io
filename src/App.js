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
import Footer from './components/footer';
import Research from './components/research';

function App() {
  const [cubeVisible, setCubeVisible] = useState(false);
  const [initialEntry, setInitialEntry] = useState(true);
  const [isFading, setIsFading] = useState(true);
  const [submittedForm, setSubmittedForm] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  

  const [rotateX, setRotateX] = useState(() =>
    localStorage.getItem("rotateX") || 0
  );
  const [rotateY, setRotateY] = useState(() =>
    localStorage.getItem("rotateY") || 0
  );
  const [currPage, setCurrPage] = useState(() =>
    localStorage.getItem("currPage") || "Home"
  );
  const [prevPage, setPrevPage] = useState(() =>
    localStorage.getItem("prevPage") || "Home"
  );
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("darkMode") === "true" // Parse the stored boolean
  );


  useEffect(() => {
    localStorage.setItem("rotateX", rotateX);
  }, [rotateX]);

  useEffect(() => {
    localStorage.setItem("rotateY", rotateY);
  }, [rotateY]);

  useEffect( () => {
    if(initialEntry) {
      setInitialEntry(false);
      console.log("welcome");
    } else {
      setIsFading(true);
      setCubeVisible(true);
    }
    setSubmittedForm(false);
    localStorage.setItem("currPage", currPage);
  }, [currPage])

  useEffect(() => {
    localStorage.setItem("prevPage", prevPage);
  }, [prevPage]);

  useEffect( () => {
    if(darkMode) {
      document.body.style.backgroundColor = '#333333';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = '#dddddd';
      document.body.style.color = 'black';
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode])

  return (
    <div className="App">
      <SiteNavBar currPage={currPage} setCurrPage={setCurrPage} setPrevPage={setPrevPage} darkMode={darkMode} setDarkMode={setDarkMode} setNavIsOpen={setNavIsOpen}/>
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
          <Route path='/' element={cubeVisible ? null : <Home currPage={currPage} setCurrPage={setCurrPage} setPrevPage={setPrevPage} darkMode={darkMode} setCubeVisible={setCubeVisible}/>}/>
          <Route path='/home' element={cubeVisible ? null : <Home currPage={currPage} setCurrPage={setCurrPage} setPrevPage={setPrevPage} darkMode={darkMode} navIsOpen={navIsOpen}/>}></Route>
          <Route path='/about' element={cubeVisible ? null : <About darkMode={darkMode} currPage={currPage} setCurrPage={setCurrPage} setPrevPage={setPrevPage} navIsOpen={navIsOpen}/>} />
          <Route path='/resume' element={cubeVisible ? null : <Resume />} />
          <Route path='/projects' element={cubeVisible ? null : <Projects darkMode={darkMode}/>} />
          <Route path='/research' element={cubeVisible ? null : <Research darkMode={darkMode} />} />
          <Route path='/contact' element={cubeVisible ? null : <Contact darkMode={darkMode} setSubmittedForm={setSubmittedForm}/>} />
        </Routes>

        <Footer darkMode={darkMode} cubeVisible={cubeVisible} currPage={currPage} submittedForm={submittedForm}/>
    </div>
  );
}

export default App;
