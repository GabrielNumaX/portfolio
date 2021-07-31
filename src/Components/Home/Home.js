import React from 'react';

import css from './Home.module.css';

const Home = () => {

    return (

        <div className={css.HomeMain}>

            <img src={require('../../Utils/profilePic.jpg')}
                alt="profile pic"
                className={css.Img}></img>

            <h1 className={css.HomeH1}>
                <span className={css.Span1}>G</span>
                <span className={css.Span2}>a</span>
                <span className={css.Span3}>b</span>
                <span className={css.Span4}>r</span>
                <span className={css.Span5}>i</span>
                <span className={css.Span6}>e</span>
                <span className={css.Span7}>l</span>
                <span>&nbsp;</span>
                <span className={css.Span8}>N</span>
                <span className={css.Span9}>u</span>
                <span className={css.Span10}>m</span>
                <span className={css.Span11}>a</span>
                <span>&nbsp;</span>
                <span className={css.Span12}>P</span>
                <span className={css.Span12}>a</span>
                <span className={css.Span14}>r</span>
                <span className={css.Span15}>r</span>
                <span className={css.Span16}>e</span>
                <span className={css.Span17}>ñ</span>
                <span className={css.Span18}>o</span>
            </h1>
            <h2 className={css.HomeH2}>
                Web Developer
            </h2>

            <a className={css.newPortfolioLink}
                href="https://numax.herokuapp.com"
                target="_self"
                rel="noopener noreferrer">I Moved Here: https://numax.herokuapp.com</a>

        </div>
    );
}

export default Home;