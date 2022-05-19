import React from "react";
import './footer.style.scss';
import copyWrite from '../../images/icons/copywrite.svg';
import facebook from '../../images/icons/facebook.svg';
import github from '../../images/icons/github.svg';
import blogger from '../../images/icons/blogger.svg'
import instagram from '../../images/icons/instagram.svg'

function Footer() {

    return (
        <div className="footer">
            <div className="credits">
                <img src={copyWrite} />
                <p>2022 - Samiul Alim</p>
            </div>
            <div className="socialMedia">
                <a className="smIcon"><img src={github} /></a>
                <a className="smIcon"><img src={facebook} /></a>
                <a className="smIcon"><img src={instagram} /></a>
                <a className="smIcon"><img src={blogger} /></a>
            </div>
        </div>
    )
}


export default Footer; 