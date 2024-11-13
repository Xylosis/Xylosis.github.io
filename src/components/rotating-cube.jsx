import React, { useEffect, useState } from 'react';
import './components.css';

function RotatingCube( {currPage, setCubeVisible, isFading, setIsFading, rotateX, setRotateX, rotateY, setRotateY} ) {

  const rotateCube = (x, y) => {
    setRotateX(rotateX + x);
    setRotateY(rotateY + y);
  };

    // Calculate rotation for each face
  const rotateToFace = (face) => {
      switch (face) {
        case 'Home':
          setRotateX(0);
          setRotateY(0);
          break;
        case 'About':
          setRotateX(0);
          setRotateY(180);
          break;
        case 'Resume':
          setRotateX(0);
          setRotateY(90);
          break;
        case 'Projects':
          setRotateX(0);
          setRotateY(-90);
          break;
        case 'Contact':
          setRotateX(-90);
          setRotateY(0);
          break;
        case 'Other':
          setRotateX(90);
          setRotateY(0);
          break;
        default:
          break;
      }
    };

    useEffect( () => {
        console.log("in use effect for timeout");
        
        const timeout2 = setTimeout( () => {
            setIsFading(false);
            setTimeout(() => {
                setCubeVisible(false); // After fade-out, make cube invisible
              }, 600);
        }, 3000);

        const timeout = setTimeout( () => {
            rotateToFace(currPage)
        }, 1000);
        
        //setCubeVisible(true);
        setIsFading(true);
        return () => {clearTimeout(timeout); clearTimeout(timeout2);};
        
    }, [currPage]);

  return (
    <div className="cube-container">
      <div className={`scene ${isFading ? 'fade-in' : 'fade-out'}`}>
        <div
          className="cube"
          style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        >
          <div className="face front" id="Home">Home</div>
          <div className="face back" id="About">About</div>
          <div className="face left" id="Resume">Resume</div>
          <div className="face right" id="Projects">Projects</div>
          <div className="face top" id="Something">Contact</div>
          <div className="face bottom" id="Other">Other</div>
        </div>
      {/* Rotation buttons 
        <button className="arrow arrow-notsides arrow-up" onClick={() => rotateCube(-90, 0)}>▲</button>
        <button className="arrow arrow-notsides arrow-down" onClick={() => rotateCube(90, 0)}>▼</button>
        <button className="arrow arrow-sides arrow-left" onClick={() => rotateCube(0, 90)}>◄</button>
        <button className="arrow arrow-sides arrow-right" onClick={() => rotateCube(0, -90)}>►</button>
        */}
      </div>
      {/*
      <div className="face-buttons">
        <button onClick={() => rotateToFace('Home')}>Home</button>
        <button onClick={() => rotateToFace('About')}>About</button>
        <button onClick={() => rotateToFace('Resume')}>Resume</button>
        <button onClick={() => rotateToFace('Projects')}>Projects</button>
        <button onClick={() => rotateToFace('Contact')}>Contact</button>
        <button onClick={() => rotateToFace('Other')}>Other</button>
      </div>
      */}

    </div>
  );
}

export default RotatingCube;
