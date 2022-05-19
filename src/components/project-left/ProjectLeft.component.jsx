import React from "react";
import './project-left.style.scss'

function ProjectLeft({ project }) {
    return (
        <div className="project-left">
            <div className="p-image">
                <img src='url' alt="project-img" />
            </div>
            <div className="info">
                <h2 className="title">{project.name}</h2>
                <p className="tech">Used: {project.tech.join(', ')}</p>
                <div className="desc">
                    <p className="p">{project.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectLeft; 