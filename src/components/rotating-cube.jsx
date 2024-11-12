import React, { useState } from 'react';
import './components.css';

function RotatingCube() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const rotateCube = (x, y) => {
    setRotateX(rotateX + x);
    setRotateY(rotateY + y);
  };

  return (
    <div className="cube-container">
      <div className="scene">
        <div
          className="cube"
          style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        >
          <div className="face front">Front</div>
          <div className="face back">Back</div>
          <div className="face left">Left</div>
          <div className="face right">Right</div>
          <div className="face top">Top</div>
          <div className="face bottom">Bottom</div>
        </div>
      </div>

      {/* Rotation buttons */}
      <button className="arrow arrow-notsides arrow-up" onClick={() => rotateCube(-90, 0)}>▲</button>
      <button className="arrow arrow-notsides arrow-down" onClick={() => rotateCube(90, 0)}>▼</button>
      <button className="arrow arrow-sides arrow-left" onClick={() => rotateCube(0, 90)}>◄</button>
      <button className="arrow arrow-sides arrow-right" onClick={() => rotateCube(0, -90)}>►</button>
    </div>
  );
}

export default RotatingCube;
