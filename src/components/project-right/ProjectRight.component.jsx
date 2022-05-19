import React from "react";
import './project-right.style.scss'

function ProjectRight({ project }) {
    return (
        <div className="project-right">
            <div className="info">
                <h2 className="title">{project.name}</h2>
                <p className="tech">Used: {project.tech.join(', ')}</p>
                <div className="desc">
                    <p className="p">{project.desc}</p>
                </div>
            </div>
            <div className="p-image">
                <img src='url' alt="project-img" />
            </div>
        </div>
    )
}


export default ProjectRight;