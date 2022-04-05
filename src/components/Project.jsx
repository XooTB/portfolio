import React from "react";

function Project ({image}) {
    return(
        <div className="Project">
            <div className="pro_img">
                <img src={image} alt="Project Image"/>
            </div> 
        </div>
    )
}

export default Project;