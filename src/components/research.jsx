import React from "react";
import './research.css'

const Research = ({darkMode}) => {


    return(
        <div className="main-content">
            <h2 className="text header" style={darkMode ? {color : "white"} : null}>Research</h2>

            <div className="container">
                <p className="text researchText">
                    During my internship at Johnson & Johnson was the first time I was exposed to development using Generative AI, and it fascinated me immediately. I spent a 
                    ton of time learning how Generative AI worked, how they were trained, and as much as I could about it, as well as how to use it of course. With this newfound
                    interest, I tried to learn each component of a Large Language Model (LLM) more in depth. The most interesting, and confusing, part of the LLM to me involved 
                    the latent space, and how it functioned, so I wanted to make sure I learned as much as I could about it. As I was learning, I did have a thought, which was 
                    "It would be so much easier to understand this whole concept if there was an effective way to visualize it." If it could be visualized, then accurate 
                    demonstrations would be much easier to make so other people could have an easier time learning about the latent space. 
                </p>
                <br />
                <p className="text researchText">
                    Move forward to the end of my semester, I've begun working with a professor from NJIT to research the topic of the latent space within the field of 
                    Generative AI. Specifically, as mentioned before, I'm looking into finding a way to accurately and efficiently visualize this latent space. I'm not sure 
                    if this has been already done, but I think it will be a great way to really learn about this concept and understand the core inner working of an LLM. 
                    Currently, the best way I've found to do this would be with Neo4j, or some other type of graph database, but Neo4j seems to be the best and most popular
                    option. I have some more ideas on how this would work internally and how these nodes would be plotted, but that needs to be ironed out first.
                </p>
                <br />
                <p className="text researchText">
                    This research is still in it's infancy, as I still have a ton of more information to learn before I can really get into developing this. So as of right 
                    now, everything is still within concepts, but hopefully soon, there will be something to show for it. As more is done, this page will be updated.
                </p>
            </div>
        </div>
    );
};

export default Research;