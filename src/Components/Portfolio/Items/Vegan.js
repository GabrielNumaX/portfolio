import React , { useState, useEffect } from 'react';

import css from './Items.module.css';

import ZoomItem from './ZoomItem';
import Footer from '../../Footer/Footer';


const Vegan = (props) => {

    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return(

        <div>
            <div className={css.DivItem}>

                <div className={css.ItemBg}>

                </div>

                <h1 className={css.ItemH1}>Project: &nbsp; 
                    <a href="https://codepen.io/NumaX/full/qBWbmKO" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={css.ItemLink2} >Vegan Store</a> </h1>

                <img src={require('../../../assets/portfolio/vegan.png')} alt='item' 
                    className={css.ItemImg}
                    onClick={() => setZoom(!zoom)}></img>

                <div className={css.ItemDesc}>
                    <p>
                        Vegan Shop Landing page done as the final project of CSS (responsive)
                        stage of Edyoda's Front End Program.
                    </p> 
                </div>

                <h3 className={css.GoBack} onClick={props.history.goBack}>Go Back</h3>
                 
            </div>

                {zoom ? 
                        <ZoomItem
                        img={require('../../../assets/portfolio/vegan.png')}
                        closePopup={() => setZoom(!zoom)}
                    />
                    : null
                }
            <Footer></Footer>
        </div>
    )
}

export default Vegan;