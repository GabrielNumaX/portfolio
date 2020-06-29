import React from 'react';

import css from './Location.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'


const Location = () => {

    return(
        <div className={css.DivLocation}>

            <div className={css.DivLocationIcon}>

                <div className={css.DivIcon}>
                    <FontAwesomeIcon 
                        icon={faMapMarkerAlt} 
                        className={css.Icon}></FontAwesomeIcon>
                </div>
                <p>Basavilbaso, Entre Rios, Argentina</p>
            </div>


            <iframe width="100%" 
                height="230" 
                src="https://maps.google.com/maps?q=basavilbaso%2C%20entre%20rios%2C%20argentina&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="yes" 
                marginHeight="0" 
                marginWidth="0"
                allowFullScreen
                title="map">

            </iframe>

        </div>
        
                
                
         
    )
}

export default Location;