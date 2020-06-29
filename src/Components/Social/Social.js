import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithubSquare, faCodepen, faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import css from './Social.module.css';

const Social = () => {

    return(
        <div className={css.DivSocial}>

            {/* <div className={css.SocialMedia}> */}
                    
                <a href="https://www.linkedin.com/in/numax" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>

                <a href="https://github.com/GabrielNumaX" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                </a>

                <a href="https://codepen.io/NumaX" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCodepen}></FontAwesomeIcon>
                </a>

                <a href="https://www.facebook.com/gabriel.numax" target="_blank" rel="noopener noreferrer">

                    <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                </a>

                <a href="https://www.instagram.com/_.numax._" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>

                <a href="https://twitter.com/gabrielnumax" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
                </a>

            {/* </div> */}
        </div>
    )
}

export default Social;