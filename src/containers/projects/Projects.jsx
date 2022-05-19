import React, { useState, useEffect } from "react";
import ProjectLeft from "../../components/project-left/ProjectLeft.component";
import ProjectRight from "../../components/project-right/ProjectRight.component";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore"

function Projects() {

    const [projects, setProjects] = useState([]);
    const projectsRef = collection(db, "projects");

    useEffect(() => {
        getDocs(projectsRef)
            .then(projects => setProjects(projects.docs.map(project => project.data())));
    }, [projectsRef])


    const projectElements = projects.map((project, i) => {
        if (i % 2 === 0) {
            return <ProjectLeft project={project} />
        } else {
            return <ProjectRight project={project} />
        }
    })


    return (
        <div className="projects">
            {projectElements}
        </div>
    );
};


export default Projects;