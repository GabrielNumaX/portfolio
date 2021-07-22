import React, { useState, useEffect } from 'react';

import css from './Items.module.css';

import ZoomItem from './ZoomItem';
import Footer from '../../Footer/Footer';


const Shoplane = (props) => {

    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (

        <div>
            <div className={css.DivItem}>

                {/* <div className={css.ItemBg}>

                </div> */}

                <div className={css.DivItemCol1}></div>

                <div className={css.DivItemCol2}>

                    <h1 className={css.ItemH1}>Project: &nbsp;
                        <a href="https://gabrielnumax.github.io/E-Commerce/"
                            target="_blank"

                            rel="noopener noreferrer"
                            className={css.ItemLink2} >Shoplane</a></h1>

                    <img src={require('../../../assets/portfolio/shoplane.png')} alt='item'
                        className={css.ItemImg}
                        onClick={() => setZoom(!zoom)}></img>

                    <div className={css.ItemDesc}>
                        <p>
                            Shoplane E-Commerce with carousel and minimalistic design
                            done with JQuery consuming from API.
                            {/* <br />
                            I've also replicated it with ReactJS and Redux &nbsp;
                            <a href="https://gabrielnumax.github.io/react-e-commerce/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={css.ItemLink} >Here</a> */}

                        </p>
                    </div>

                    <h3 className={css.GoBack} onClick={() => {
                        props.history.goBack();
                        // window.scrollTo(0, props.location.ref)
                    }}>Go Back</h3>
                </div>

                <div className={css.DivItemCol3}></div>

            </div>

            {zoom ?
                <ZoomItem
                    img={require('../../../assets/portfolio/shoplane.png')}
                    closePopup={() => setZoom(!zoom)}
                />
                : null
            }
            <Footer></Footer>
        </div>
    )
}

export default Shoplane;