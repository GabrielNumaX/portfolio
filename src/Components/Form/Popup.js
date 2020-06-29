import React from 'react';

import css from './Popup.module.css';

const Popup = (props) => {

      return (
        <div className={css.popup} onClick={props.closePopup}>
          <div className={css.popup_inner}>
              
            <h3 className={css.H3}>{props.text}</h3>

            <button className={css.Button}
                    onClick={props.closePopup}>Ok</button>
          </div>
        </div>
      );
  }

  export default Popup;