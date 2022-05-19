import React from "react";
import './techCard.style.scss';

function TechCard({ name }) {
    return (
        <div className="techCard">
            <p className="text">{name}</p>
        </div>
    )
}

export default TechCard; 