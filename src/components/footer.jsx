import React, { useEffect } from "react";
import "./footer.css";

function Footer({darkMode, cubeVisible, currPage, submittedForm}) {

    useEffect( () => {
        console.log("changing");
    }, [darkMode])

    const styles = {
      backgroundColor: darkMode ? "#1f2225" : null,
      position: submittedForm && currPage === "Contact" ? "absolute" : null,
      bottom: submittedForm && currPage === "Contact" ? 0 : null,
    }

  return (
    <footer className={`footer ${darkMode && !cubeVisible ? 'footer-dark' : ''} ${cubeVisible ? 'matchCube' : ''}`} style={styles}>
      <div className="footer-content">
        <p className={`${darkMode ? 'footer-dark' : 'footer-dark-links-out'}`}>&copy; {new Date().getFullYear()} Andrew Dickman. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Xylosis" target="_blank" rel="noopener noreferrer"><span className={`${darkMode ? 'footer-dark footer-dark-links' : 'footer-dark-links-out'}`}>GitHub</span></a>
          <a href="https://www.linkedin.com/in/andrew-dickman/" target="_blank" rel="noopener noreferrer"><span className={`${darkMode ? 'footer-dark footer-dark-links' : 'footer-dark-links-out'}`}>LinkedIn</span></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><span className={`${darkMode ? 'footer-dark footer-dark-links' : 'footer-dark-links-out'}`}>Twitter</span></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
