import React from 'react';

import css from './Contact.module.css';


import Location from '../Location/Location';
import Form from '../Form/Form';

const Contact = () => {


    return(

        <div className={css.DivContact}>

            <div className={css.ContactBg} >

            </div>

            <div className={css.ContactColumn}>

                <h3>Contact Me</h3>

                <div className={css.ContactRow}>
                    <Location></Location>

                    <Form></Form>       
                </div>

            </div>
        </div>
    )
}

export default Contact;