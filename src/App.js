import React, { useState } from 'react';
import './App.css';

import NavBar from './components/navbar';
import RotatingCube from './components/rotating-cube';

function App() {
  const [visibleFace, setVisibleFace] = useState('front');

  // Define content for each face
  const faceContent = {
    front: <div>Welcome to My Home Page</div>,
    back: <div>About Me</div>,
    left: <div>My Resume</div>,
    right: <div>My Projects</div>,
    top: <div>Skills</div>,
    bottom: <div>Contact Me</div>
  };

  const handleFaceChange = (face) => {
    setVisibleFace(face);
  };
  
  return (
    <div className="App">
      <NavBar />
      <RotatingCube />
    </div>
  );
}

export default App;
