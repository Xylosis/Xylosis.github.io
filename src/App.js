import React, { useEffect, useState} from 'react';
import './App.css';

import NavBar from './components/navbar';
import RotatingCube from './components/rotating-cube';

function App() {
  const [cubeVisible, setCubeVisible] = useState(false);
  const [currPage, setCurrPage] = useState("Home");
  const [initialEntry, setInitialEntry] = useState(true);
  const [isFading, setIsFading] = useState(true);
  const [prevPage, setPrevPage] = useState("Home");


  useEffect( () => {
    if(initialEntry) {
      setInitialEntry(false);
    } else {
      setIsFading(true);
      setCubeVisible(true);
    }
    
  }, [currPage])


  return (
    <div className="App">
      <NavBar currPage={currPage} setCurrPage={setCurrPage} setPrevPage={setPrevPage} />
      {cubeVisible && <RotatingCube 
                        currPage={currPage} 
                        setCurrPage={setCurrPage} 
                        setCubeVisible={setCubeVisible} 
                        cubeVisible={cubeVisible}
                        isFading={isFading}
                        setIsFading={setIsFading}
                        prevPage={prevPage}
                      />}
    </div>
  );
}

export default App;
