import React from 'react';

import css from './Footer.module.css';
import Social from '../Social/Social';

const Footer = () =>{

    const d = new Date();
    const year = d.getFullYear();

    return(

        <footer className={css.Footer}>

            <h4 className={css.H4}>NumaX &copy;{year}</h4>

            <Social></Social>
        </footer>
    );
}

export default Footer;