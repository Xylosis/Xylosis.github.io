import React, {useState} from "react";
import img6 from "../imgs/marshmallow-toast-simulator.png"
import './projects.css'

const Projects = ({darkMode}) => {
    const projects = [
        { title: "Biblical AI", description: "Description for Project 1", skills: "", image: "project1.jpg" },
        { title: "Discord Bots", description: "Description for Project 2", skills: "", image: "project2.jpg" },
        { title: "NYcrawler App", description: "Description for Project 3", skills: "", image: "project3.jpg" },
        { title: "Programming Language", description: "Description for Project 4", skills: "", image: "project4.jpg" },
        { title: "Covey.Town Chess Game", description: "Description for Project 5", skills: "", image: "project5.jpg" },
        { title: "Marshmallow Toast Simulator", description: "Created during the HackNJIT 2022 Hackathon by Adrianna Rust, Andrew Dickman, Dustin La, and Hrishikesh Sakunala <br /> -- HackNJIT 2022 Best Camping Themed Hack Winner -- ", skills: "", image: img6 },
        { title: "Airline Satisfaction Predictor", description: "CS375", skills: "", image: "project3.jpg" },
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
                <p style={darkMode ? {color: "rgba(207, 206, 206, 0.863)"} : null}>Skills Learned: {project.skills}</p>
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