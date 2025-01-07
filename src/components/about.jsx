import React, {useEffect, useState} from "react";
import {isMobile} from "react-device-detect";
import { NavLink } from "react-router-dom";
import './about.css'

const About = ({darkMode, currPage, setCurrPage, setPrevPage}) => {
    const [activeTab, setActiveTab] = useState("Professional Life");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const content = {
        "Professional Life": (<span>Hello again! My name is Andrew Dickman, and I'm a 22 year old recent graduate from New Jersey Institute of Technology, who graduated in December 2024 with <i>magna cum laude</i> honors. I love math and science, so I decided to start off my college career as an electrical engineering student, and studied EE for about two years until I decided it wasn't for me. I still loved the math and science, but realized I much preferred working with software, so at the end of my fourth semester, I switched to Computer Science. This was where I found my love for software development, and software engineering. <br /><br /> Throughout my time in Computer Science, I was able to work as a TA for three classes: CS288 (Intensive Programming in Linux), IT202 (Web Development), and IT302 (Advanced Web Development). These experiences were great for me because not only did it teach me how to understand and follow other peoples code, but it also taught me how to teach students about these topics in an efficient way. It wasn't just me teaching them, though, because I was able to learn a lot from them too, which made these experiences even better.<br /><br /> After finally building up the knowledge and confidence I needed, I was able to get an internship in the summer of 2024 at Johnson & Johnson where I worked as a Data Scientist, primarily focused on Generative AI development and implementation, within their Technical Research & Development center. This experience opened the door to Data Science for me, and showed me how important and diverse of a field it really is. <br /><br /> Because of my love and interest for software engineering, and my growing interest in Data Science, I'm looking for a role in either field to learn more about them professionally. I believe these roles should go hand in hand though, and a position which utilizes aspects of both would be an amazingly strong and interesting position that I hope to work in some day.</span>),
        "Personal Life / Hobbies": (<span>Outside of my professional life, I have a couple hobbies I like to enjoy when I have the time to. For example, I love to play card games, such as Magic The Gathering, Blackjack, Poker, as well as some roleplaying games, such as Dungeons & Dragons. I also enjoy playing video games, such as League of Legends, which I played competitively for some time, and coding in my free time. When I'm outside, I love to spend time riding my motorcycle, and also playing paintball, hiking, or going on walks with my dog. I've also developed a deep interest in religion and history, specifically ancient religions, such as Ancient Christianity, Ancient Judiasm, Zoroastrianism, and the early beginnings of other religions as well.</span>),
        "Technical Projects and Interests": (<span>Since I am a Computer Science graduate, I think it's important to talk about my experiences programming, as well as projects and other technical things I've done or have interests in. I've developed a good amount of projects in my free time, some of which being full stack websites, and others being software tools, personal products, or learning focused projects. An example of a website I built was my Generative AI supported website called "Biblical AI", which is a website designed with the intent to help first time bible readers, or people looking to read it from different perspectives. Another project I've worked on are personal Discord Bots, typically focused around making some processes simpler and easier to manage, such as keep track of stats and picks for the competitive League of Legends team I was on. I would build the bots using the Discord API, and host them through Docker Containers on Google Cloud. Finally, I've built multiple projects just to learn a concept better or solidify it, and one project I plan to work on soon in this sense is to build a complete chess engine, which utilizes both normal algorithms to make decisions, and neural networks or other machine learning algorithms to get the best performance possible.</span>),
        "Research": `In addition to everything, I've also begun working with a professor from my college to conduct research within the field of Generative AI. I developed a strong interest in this field from my internship, and researching is helping me to grow that interest even more. To be specific, my primary interest area, as well as my research area, is specifically involved with the latent space for Large Language Models. I'll be looking for ways to try to understand this area better, but also the focus will be on visualizing this space to make it easier to understand and interpret.
                    \n
                    This research is still in it's infancy stages though, and there's not much to show for it yet, as we just began with this idea.`
      };

      const buttonStyles = {
        backgroundColor: darkMode ? "#222222" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        left: isSidebarOpen ? "50%" : null,
        width: isSidebarOpen ? "1.5rem" : null,
      }

    return(
        <div>
            <div className="about-me-container">
                {/* Toggle button for mobile */}
                <button
                    className={`toggle-sidebar-button ${isSidebarOpen ? "menu-open" : null}`}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    style={buttonStyles}
                >
                </button>

                {/* Sidebar */}
                <div
                    className={`sidebar ${isSidebarOpen ? "menu-open" : "menu-collapsed"}`}
                    style={darkMode ? { backgroundColor: "#222222" } : null}
                >
                    {Object.keys(content).map((tab) => (
                        <div
                            key={tab}
                            className={`tab text ${activeTab === tab ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab(tab);
                                setIsSidebarOpen(false); // Close sidebar on tab selection (for mobile)
                            }}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="content" key={activeTab}>
                    <h2
                        className="text"
                        style={darkMode ? { color: "white" } : null}
                    >
                        {activeTab}
                    </h2>
                    <div style={{ whiteSpace: "pre-wrap" }}>
                        <p
                            className="text"
                            style={darkMode ? { color: "white" } : null}
                        >
                            {content[activeTab]}
                        </p>
                    </div>
                    {activeTab === "Technical Projects and Interests" ? (
                        <NavLink
                            as={NavLink}
                            to={"/projects"}
                            onClick={() => {
                                setPrevPage(currPage);
                                setCurrPage("Projects");
                            }}
                            className={`ToProjectButton ${
                                darkMode ? "dark" : null
                            }`}
                            style={{
                                display: "inline-block",
                                marginTop: "4rem",
                            }}
                        >
                            Check out some of my projects!
                        </NavLink>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default About;