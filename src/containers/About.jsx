import React from "react";
import "../styles/about.css";
import line from '../images/line.svg'

function About() {
    return (
        <div className="about" id="about">
            <h1 className="about-title">About Me</h1>
            <img src={line} alt="line" className="line" />
            <p className="about-desc">Full-Stack Javascript Developer focusing on Interactive WebApps and Practical Front-end designs.</p>
        </div>
    )
}

export default About