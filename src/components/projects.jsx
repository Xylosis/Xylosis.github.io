import React, {useState} from "react";
import img from "../imgs/biblicalai.png";
import img2 from "../imgs/botsimg.png";
import img3 from "../imgs/nyghtcrawler.png"
import img4 from "../imgs/oversimplified_tree_pa2.png";
import img5 from "../imgs/coveytown.png";
import img6 from "../imgs/marshmallow-toast-simulator.png";
import img7 from "../imgs/cs375airlineprojectpic.png";
import './projects.css';

const Projects = ({darkMode}) => {
    const projects = [
        { title: "Biblical AI", description: "Biblical AI is a website I designed in it's entirety, and is aimed to be for anyone from first time bible readers, all the way to educated bible scholars, to read, study, and understand the bible. Through the support of a built-in GPT powered chatbot, the reader has multiple explanations and interpretations of any verse just a click away, with the AI focusing on whichever interpretation they chose to focus on, whether it be Christian, Catholic, Jewish, Muslim, or even Gnostic. So if you've ever wanted to read the bible, but have been daunted by the idea of not understanding it, then Biblical AI is the best way for you to start!", skills: "React, Javascript, Generative AI, API Usage", image: img},
        { title: "Discord Bots", description: "Built in both Python and Javascript, I utilized the Discord API to create Bots which automate and handle tasks that were repetitive or easily automatable prior. These bots are centered around my competitive League of Legends play, and the teams I'm on. They handle keeping track of characters we play, counterpicks to enemy characters, offer team compositions, and keeps track of live games. This is all done through a combination of Riot API calls, web scraping, and asynchronous programming; This was also one of my first projects.", skills: "Python, Javascript, API Usage, Async Programming", image: img2 },
        { title: "NYcrawler App", description: "NYghtcrawler is an app designed to help anyone in NYC experience it's amazing bars and vibrant nightlife. Choose a start and end destination, and NYghtcrawler will offer a barhopping route, including bars of your perferred genre in between, as well as interactable historic sites along the way. I develop this app alongside four other team members, and was the primary backend engineer. This app was submitted and won third place in the NJIT YWCC Capstone Competition, and I was recognized as the Team MVP by the Project Manager.", skills: "Mobile App Development, Android Studio, Dart, Flutter, Java, Google Maps API, MapBox", image: img3 },
        { title: "Programming Language", description: "Wrote a basic syntactical programming language from scratch using C++. This language was written as a project for a class, and contained only a few keywords and operations, such as declarations, variables, assignments, if/else statements, basic mathematical operations, print statements, and handled basic errors. This project taught me the underlyings of programming languages, and helps me to write clean and efficient code.", skills: "C++, Logic, Parse Trees, Syntax, Operator Overloading", image: img4 },
        { title: "Covey.Town Chess Game", description: "For my Software Engineering class, we were given a pre-existing games codebase in TypeScript / React, and in teams of four following the agile method, our goal was to implement a new game into that codebase while perserving all original functionality. Our group implemented Chess, which allowed two players to play verse each other, or one player to verse an AI of their difficulty, powered by Stockfish, as well as multiple other features such as post game analysis (also powered by Stockfish), elo ratings, and timed chess. My role within the group was both the Project Leader, and the primary backend engineer, so I developed the backend for the project, while also assisting and guiding my teammates if they ever got stuck.", skills: "TypeScript, JavaScript, React, Python, Large Codebase Understanding, Debugging, Leadership, Agile Method", image: img5 },
        { title: "Marshmallow Toast Simulator", description: "Developed during HackNJIT 2022 with a group of three other developers, as well as winning first place for the best camping themed hack. Developed a game in Python using Pygame, where the player tries to toast their marshmallow to a scrumptious golden brown, without going over and burning it. The player can choose to toast for a duration of short, medium, or long, and will be updated on the status of the marshmallow after each toast, until they either choose to stop, or hit golden brown.", skills: "Python, Pygame", image: img6 },
        { title: "Airline Satisfaction Predictor", description: "CS375", skills: "", image: img7 },
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
                <div>
                  <h1 style={darkMode ? {color: "white"} : null}>{`Project ${currentIndex+1}/${projects.length}`}</h1>
                </div>
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