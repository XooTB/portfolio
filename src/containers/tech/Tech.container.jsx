import React from "react";
import TechCard from "../../components/techCard/TechCard.component";
import './tech.style.scss'


function Tech() {

    const techList = ['Node.js', 'React.js', 'Express.js', 'HTML', 'Css', 'SASS', 'JavaScript', 'MongoDB', 'Python', 'SQL']
    const list = techList.map((tech, i) => <div className={`tech${i} techContainer`}> <TechCard name={tech} key={i} /></div >)
    return (
        <div className="TechList">
            <h1 className="techTitle">Proficient in: </h1>
            <div className="techGrid">
                {list}
            </div>
        </div>
    )
}

export default Tech;