import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import css from './Portfolio.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import mathtrix from '../../assets/portfolio/mathtrix.png';
import notex from '../../assets/portfolio/notex.png';
// import todo from '../../assets/portfolio/todo.png';
import todo from '../../assets/portfolio/calendarium.png';
import vegan from '../../assets/portfolio/vegan.png';
import shoplane from '../../assets/portfolio/shoplane.png';
import player from '../../assets/portfolio/player.png';
import dice from '../../assets/portfolio/dice.png';
import google from '../../assets/portfolio/googleClone.png';
import smartwatch from '../../assets/portfolio/smartwatch.png';
import button from '../../assets/portfolio/button.png';
import calculator from '../../assets/portfolio/calculator.png';
import clock from '../../assets/portfolio/clock.png';


class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            myRef: null,
        }

        this.myRef = React.createRef();
    }

    componentDidMount() {

        this.setState({
            myRef: this.myRef.scrollHeight
        })
    }

    render() {

        return (

            <div ref={el => this.myRef = el} className={css.DivPortfolio}>

                <div className={css.ImgPortfolio}>

                </div>

                <h3 className={css.PortfolioH3}>My Projects</h3>

                <div className={css.PortfolioColumn}>

                    <div className={css.PortfolioRow}>

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>Calendarium</h2>


                            <div className={css.PortfolioItem}>

                                <img src={todo} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/calendarium',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://calendarium-app.herokuapp.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>MathTrix</h2>

                            <div className={css.PortfolioItem}>

                                <img src={mathtrix} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/mathtrix',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://mathtrix.herokuapp.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>Notex</h2>

                            <div className={css.PortfolioItem}>

                                <img src={notex} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/notex',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://notex-2020.herokuapp.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>Vegan Store</h2>


                            <div className={css.PortfolioItem}>

                                <img src={vegan} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/vegan-store',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://codepen.io/NumaX/full/qBWbmKO"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>ShopLane</h2>


                            <div className={css.PortfolioItem}>

                                <img src={shoplane} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/shoplane-e-commerce',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://gabrielnumax.github.io/E-Commerce/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* <div className={css.PortfolioRow}> */}

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>Music Player</h2>

                            <div className={css.PortfolioItem}>

                                <img src={player} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/music-player',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://gabrielnumax.github.io/react-music-player/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>Dice Game</h2>

                            <div className={css.PortfolioItem}>

                                <img src={dice} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/dice-game',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://gabrielnumax.github.io/dice-game/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>Google Clone</h2>

                            <div className={css.PortfolioItem}>

                                <img src={google} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/google-clone',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://codepen.io/NumaX/full/VorjpO"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* <div className={css.PortfolioRow}> */}

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>Smart Watch</h2>

                            <div className={css.PortfolioItem}>

                                <img src={smartwatch} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/smartwatch',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://gabrielnumax.github.io/react-smartwatch/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>Button Generator</h2>

                            <div className={css.PortfolioItem}>

                                <img src={button} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/button-generator',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://codepen.io/NumaX/full/VwwKYZq"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>Calculator</h2>

                            <div className={css.PortfolioItem}>

                                <img src={calculator} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/calculator',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://codepen.io/NumaX/full/MWgEebM"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/*  <div className={css.PortfolioRow}> */}

                        <div className={css.PortfolioItemContainer}>

                            <h2 className={css.ItemH2}>Clock</h2>

                            <div className={css.PortfolioItem}>


                                <img src={clock} className={css.ItemImg} alt='portfolio item'></img>

                                <div className={css.DivIcon}>

                                    <Link to={{
                                        pathname: '/clock',
                                        ref: this.state.myRef,
                                    }} className={css.Icon1}>
                                        <FontAwesomeIcon icon={faPlusSquare}
                                            className={css.Icon}></FontAwesomeIcon>

                                    </Link>

                                    <a href="https://codepen.io/NumaX/full/YzzWLMw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.Icon1}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt}
                                            className={css.Icon}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Portfolio;