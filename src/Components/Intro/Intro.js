import React from 'react';

import css from './Intro.module.css';

const Intro = () => {

    return(

        <div className={css.IntroMain}>

            <div className={css.IntroImg}>

            </div>

            <div className={css.DivIntro}>
                <h2 className={css.IntroH2}>Hello I'm Gabriel</h2>
                <p className={css.IntroP}>
                    A Programmer graduated from Argentina's Universidad Tecnologica Nacional with
                    a Technical Degree in Programming. <br/>
                    Currently fully dedicated to Web Development with MERN stack <br/>
                    I'm looking forward to increase my experience working in challenging
                    projects and in near future become a Software Engineer. <br/>
                    I'm available for any kind of jobs that are within the reach of my
                    expertise, so feel free to send me a message through the Contact form
                    and I'll be glad to answer you.
                </p>
            </div>
        </div>
    );

};

export default Intro;