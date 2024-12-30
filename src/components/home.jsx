import React, {useState, useEffect} from "react";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
    return(
        <div>
            <ReactTypingEffect
                text={[
                    "Hi, I'm Andrew Dickman...",
                    "Aspiring Software Engineer / Data Scientist.",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={1500}
                cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                    return (
                        <h1>
                        {text.split('').map((char, index) => {
                            // Dynamic color effect
                            const color =
                            i === 0
                                ? index > 7 && index < 22 ? 'rgb(240, 0, 48)' : null 
                                : index > 8 && index < 27
                                ? 'rgb(26, 150, 30)' 
                                : index > 28 ? 'rgb(76, 76, 231)' : null; 
                            return (
                            <span className="text" key={index} style={{ color: color }}>
                                {char}
                            </span>
                            );
                        })}
                        </h1>
                    );
                }}
            />
            <p className="text"> TO DO: DEVELOP THESE PAGES</p>
        </div>
    );
};

export default Home;