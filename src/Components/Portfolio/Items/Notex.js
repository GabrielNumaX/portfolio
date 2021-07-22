import React, { useState, useEffect } from 'react';

import css from './Items.module.css';

import ZoomItem from './ZoomItem';
import Footer from '../../Footer/Footer';


const Notex = (props) => {

    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className={css.DivItem}>

                {/* <div className={css.ItemBg}>

                </div> */}

                <div className={css.DivItemCol1}>

                </div>

                <div className={css.DivItemCol2}>

                    <h1 className={css.ItemH1}>Project: &nbsp;
                        <a href="https://notex-2020.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={css.ItemLink2} >Notex</a></h1>

                    <img src={require('../../../assets/portfolio/notex.png')} alt='item'
                        className={css.ItemImg}
                        onClick={() => setZoom(!zoom)}></img>

                    <div className={css.ItemDesc}>
                        <p>
                            MERN Stack project for posting private notes.
                        </p>
                    </div>

                    <h3 className={css.GoBack} onClick={() => {
                        props.history.goBack();
                        // window.scrollTo(0, props.location.ref)
                    }}>Go Back</h3>

                </div>

                <div className={css.DivItemCol3}>

                </div>




            </div>

            {zoom ?
                <ZoomItem
                    img={require('../../../assets/portfolio/notex.png')}
                    closePopup={() => setZoom(!zoom)}
                />
                : null
            }
            <Footer></Footer>
        </div>
    )
}

export default Notex;