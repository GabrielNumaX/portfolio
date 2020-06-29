import React from 'react';

import css from './ZoomItem.module.css';

const ZoomItem = (props) => {

      return (
        <div className={css.popup} onClick={props.closePopup}>
          <div className={css.popup_inner}>
              
            <img src={props.img} alt='zoom in' className={css.ImgZoom}></img>

          </div>
        </div>
      );
  }

  export default ZoomItem;