import React from 'react';

import css from './Intro.module.css';

const Intro = () => {

    return (

        <div className={css.IntroMain}>

            <div className={css.IntroImg}>

            </div>

            <div className={css.DivIntro}>
                <h2 className={css.IntroH2}>Hello I'm Gabriel</h2>
                <p className={css.IntroP}>
                    A MERN Stack Seveloper with a college degree from Argentina's Universidad Tecnologica Nacional.
                    <br/>
                    I have more than two years of experience as a developer and I'm currently working at <a className={css.ApploreLink} href="https://beanstalkedu.com" target="_blank" rel="noopener noreferrer">Beanstalk</a> (India). <br />
                    I'm looking forward to participate in large-scale projects that will allow me to apply my skills.
                    <br/>Currently I'm available for any kind of projects that are within my field of expertise, so feel free to send me a message through the Contact Form and I'll be glad to answer you.
                </p>
            </div>
        </div>
    );

};

export default Intro;