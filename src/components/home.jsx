import React, { useEffect, useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import img from "../imgs/fullbodyshot 3.png";
import { NavLink } from "react-router-dom";
import "./home.css";

const Home = ({currPage, setCurrPage, setPrevPage, darkMode, setCubeVisible}) => {
    const [classes, setClasses] = useState("aboutlinkfromhome")

    const styles = {
        color: darkMode ? 'black' : "white",
        backgroundColor: darkMode ? 'white' : "rgb(0,0,0,0.7)",
        transition : "all 0.9s ease",
        "&:hover" :  {
            backgroundColor: "purple"
        }
    };

    useEffect( () => {
        darkMode ? setClasses("aboutlinkfromhome dark") : setClasses("aboutlinkfromhome")
    }, [darkMode])

    return(
        <div>
          <div id="BiggerContainer">
            <div id="BigContainer">
            <div className="image-container">
                <img src={img}></img>
            </div>
            <div className="text-container">
            <ReactTypingEffect
                text={[
                    "Hi, I'm Andrew Dickman...",
                    "Aspiring Software Engineer / Data Scientist.",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={700}
                eraseDelay={2000}
                cursor={" "}
                displayTextRenderer={(text, i) => {
                    return (
                        <h1 style={{ display: 'inline', whiteSpace: 'pre-wrap' }}>
                            {text.split('').map((char, index) => {
                                // Dynamic color effect
                                const color =
                                    i === 0
                                        ? index > 7 && index < 22
                                            ? 'rgb(240, 0, 48)'
                                            : null
                                        : index > 8 && index < 27
                                        ? 'rgb(26, 150, 30)'
                                        : index > 28 && index < 43
                                        ? 'rgb(76, 76, 231)'
                                        : null;
                                return (
                                    <span className="text" key={index} style={{ color: color }}>
                                        {char}
                                    </span>
                                );
                            })}
                            {/* Render the blinking cursor */}
                            <span
                                style={{
                                    display: 'inline',
                                    fontWeight: 'bold',
                                    animation: 'blink 1s step-end infinite',
                                }}
                            >
                                |
                            </span>
                        </h1>
                    );
                }}
            />

                <p className={"text subtitle"}>I'm a recent graduate from NJIT with a B.S. in Computer Science.<br />I'm currently looking for a position as a Software Engineer, or a Data Scientist.</p>
            </div>
            </div>
            <NavLink as={NavLink} to={"/about"} onClick={() => {setPrevPage(currPage); setCurrPage("About");}} className={classes}> Learn More About Me! </NavLink>
          </div>
        </div>
    );
};

export default Home;