import React , { useState, useEffect } from 'react';

import css from './Items.module.css';

import ZoomItem from './ZoomItem';
import Footer from '../../Footer/Footer';


const Google = (props) => {

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
                <a href="https://codepen.io/NumaX/full/VorjpO" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={css.ItemLink2} >Google Clone</a> 
                </h1>

                <img src={require('../../../assets/portfolio/googleClone.png')} alt='item' 
                    className={css.ItemImg}
                    onClick={() => setZoom(!zoom)}></img>

                <div className={css.ItemDesc}>
                    <p>
                        Google Clone layout done as part of HTML stage of
                        Edyoda's Front End Program.
                    </p>

                     
                </div>

                <h3 className={css.GoBack} onClick={props.history.goBack}>Go Back</h3>
                 
            </div>

                {zoom ? 
                        <ZoomItem
                        img={require('../../../assets/portfolio/googleClone.png')}
                        closePopup={() => setZoom(!zoom)}
                    />
                    : null
                }
            <Footer></Footer>
        </div>
    )
}

export default Google;