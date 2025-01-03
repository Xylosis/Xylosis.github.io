import React, {useState} from "react";
import './projects.css'

const Projects = ({darkMode}) => {
    const projects = [
        { title: "Biblical AI", description: "Description for Project 1", image: "project1.jpg" },
        { title: "Discord Bots", description: "Description for Project 2", image: "project2.jpg" },
        { title: "NYcrawler App", description: "Description for Project 3", image: "project3.jpg" },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      };
    
      const handleScroll = (e) => {
        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      };
    
      const styles = darkMode ? {backgroundColor: "#444"} : {};

      return (
        <div className="gallery-container" onWheel={handleScroll}>
          <div
            className="project-slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div className="project-card" style={styles} key={index}>
                <h1 style={darkMode ? {color: "white"} : null}>{`Project ${currentIndex+1}/${projects.length}`}</h1>
                <img src={project.image} alt={project.title} style={darkMode ? {backgroundColor: "#333"} : null}/>
                <h2 style={darkMode ? {color: "white"} : null}>{project.title}</h2>
                <p style={darkMode ? {color: "rgba(207, 206, 206, 0.863)"} : null}>{project.description}</p>
              </div>
            ))}
          </div>
          <div className="gallery-controls">
            <button onClick={handlePrev} className="control-button">Previous</button>
            <button onClick={handleNext} className="control-button">Next</button>
          </div>
        </div>
      );
};

export default Projects;