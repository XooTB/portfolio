import React from "react";
import './project-right.style.scss';
import github from '../../images/icons/github.svg'

function ProjectRight({ project }) {
    return (
        <div className="project-right">
            <div className="info">
                <h2 className="title">{project.name}</h2>
                <p className="tech">Used: {project.tech.join(', ')}</p>
                <div className="desc">
                    <p className="p">{project.desc}</p>
                </div>
                <p className="linkTitle">Live Link / Source Code: </p><a href={project.github}><img src={github} className='githubIcon' /></a>
            </div>
            <div className="p-image">
                <img src={project.image} alt="project-img" className="projectImage" />
            </div>
        </div>
    )
}


export default ProjectRight;