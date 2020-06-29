import React , { useState, useEffect } from 'react';

import css from './Items.module.css';

import ZoomItem from './ZoomItem';
import Footer from '../../Footer/Footer';


const Smartwatch = (props) => {

    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(

        <div>
            <div className={css.DivItem}>

                <div className={css.ItemBg}>

                </div>

                <h1 className={css.ItemH1}>Project:&nbsp;
                <a href="https://gabrielnumax.github.io/react-smartwatch/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={css.ItemLink2} >Smartwatch</a>
                </h1>

                <img src={require('../../../assets/portfolio/smartwatch.png')} alt='item' 
                    className={css.ItemImg}
                    onClick={() => setZoom(!zoom)}></img>

                <div className={css.ItemDesc}>
                    <p>
                        Check your Heart Rate <span role="img" aria-label="heart">&#128147;</span> and also the time.
                        Done in ReactJS to practice Lifecycle Methods.
                    </p>

                      
                </div>

                <h3 className={css.GoBack} onClick={props.history.goBack}>Go Back</h3>
                 
            </div>

                {zoom ? 
                        <ZoomItem
                        img={require('../../../assets/portfolio/smartwatch.png')}
                        closePopup={() => setZoom(!zoom)}
                    />
                    : null
                }
            <Footer></Footer>
        </div>
    )
}

export default Smartwatch;