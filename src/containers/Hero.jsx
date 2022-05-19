import React from "react";
import image from "../images/heroImage.jpg";
import HeroButton from "../components/heroButton/HeroButton";

function Hero() {
    return (
        <div className="hero">
            <div>
                <h1 className="heroText">Full-Stack JavaScript Developer with a Knack for Madness...</h1>
                <div className="hero-btn">
                    <HeroButton text="Projects" />
                    <HeroButton text="Contact" />
                </div>
            </div>
            <img src={image} alt="hero_Image" className="heroImage" />
        </div>
    )
}

export default Hero;