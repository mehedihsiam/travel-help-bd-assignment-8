import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const element = <FontAwesomeIcon icon={faCopyright} />
    return (
        <div className="footer">
            <small>CopyRight {element} || <a href="https://travel-help-bd.netlify.app/" className="txt-color-a">Travel Help BD</a> </small>
        </div>
    );
};

export default Footer;