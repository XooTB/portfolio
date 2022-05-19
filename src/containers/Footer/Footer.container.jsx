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
                <img src={copyWrite} className='Icon' />
                <p>2022 - Samiul Alim</p>
            </div>
            <div className="socialMedia">
                <a className="smIcon"><img src={github} className='Icon' /></a>
                <a className="smIcon"><img src={facebook} className='Icon' /></a>
                <a className="smIcon"><img src={instagram} className='Icon' /></a>
                <a className="smIcon"><img src={blogger} className='Icon' /></a>
            </div>
        </div>
    )
}


export default Footer; 