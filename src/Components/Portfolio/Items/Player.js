import React , { useState, useEffect } from 'react';

import css from './Items.module.css';

import ZoomItem from './ZoomItem';
import Footer from '../../Footer/Footer';


const Player = (props) => {

    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(

        <div>
            <div className={css.DivItem}>

                <div className={css.ItemBg}>

                </div>

                <h1 className={css.ItemH1}>Project: &nbsp; 
                <a href="https://gabrielnumax.github.io/react-music-player/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={css.ItemLink2} >Music Player</a> </h1>

                <img src={require('../../../assets/portfolio/player.png')} alt='item' 
                    className={css.ItemImg}
                    onClick={() => setZoom(!zoom)}></img>

                <div className={css.ItemDesc}>
                    <p>
                        Music Player done in ReactJS consuming from API. <br/>
                        DISCLAIMER: It has bugs &#128517;
                    </p>

                     
                </div>

                <h3 className={css.GoBack} onClick={props.history.goBack}>Go Back</h3>
                 
            </div>

                {zoom ? 
                        <ZoomItem
                        img={require('../../../assets/portfolio/player.png')}
                        closePopup={() => setZoom(!zoom)}
                    />
                    : null
                }
            <Footer></Footer>
        </div>
    )
}

export default Player;