import React from "react";
import './projects.css'

const Projects = ({darkMode}) => {


    return(
        <div>
            <h2 className="text" style={{marginTop: "3rem"}}>Projects</h2>
            <h1>IDEA TO DO: only show one project div at a time, but allow scroll down to move to next or up to previous + buttons to do so as well</h1>
            <div className={`project-container ${darkMode ? "dark-project-container" : null}`}>
                <h4 className="text">Project #1</h4>
                <p className="text">This is my project 1</p>
            </div>

            <div className={`project-container ${darkMode ? "dark-project-container" : null}`}>
                <h4 className="text">Project #2</h4>
                <p className="text">This is my project 2</p>
            </div>
        </div>
    );
};

export default Projects;