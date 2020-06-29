import React, {Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimes, faHome, faAddressCard, faTools, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import css from './Header.module.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            addClass: false,
            hover: false };
    }

    toogleHeader = () => {

        this.setState({addClass: !this.state.addClass});

    }

    iconHover = () => {

        this.setState({hover: !this.state.hover});
    }

    // goToForm = () => {
    //     // this.props.propRef.current.focus();
    //     // this.props.propRef.focus();

    //     // console.log(this.props.propRef);      
    //   }

    render(){

        let cssClass = [css.Header];

        let headerIcons = [css.HeaderNoShow]; 
        
        let Hamburger = [css.HamburgerShow];

        if(this.state.addClass){

            cssClass.push(css.HeaderActive);

            headerIcons.push(css.HeaderShow);

            Hamburger.push(css.HamburgerNoShow);    
        }

        let HomeHover = [css.SpanNoShow];
        let AddressHover = [css.SpanNoShow];
        let ToolsHover = [css.SpanNoShow];
        let BriefcaseHover = [css.SpanNoShow];
        let EnvelopeHover = [css.SpanNoShow];

        if(this.state.hover){

            HomeHover.push(css.ShowHome);
            AddressHover.push(css.ShowAddress);
            ToolsHover.push(css.ShowTools);
            BriefcaseHover.push(css.ShowBriefcase);
            EnvelopeHover.push(css.ShowEnvelope);


        }

        return(
            <div className={cssClass.join(' ')}>

                <div className={Hamburger.join(' ')} onClick={this.toogleHeader}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
                 

                 <div className={headerIcons.join(' ')}>
                     <FontAwesomeIcon icon={faTimes} 
                                    className={css.XIcon}
                                    onClick={this.toogleHeader}></FontAwesomeIcon>

                    <div className={css.IconsHover}
                        onMouseEnter={this.iconHover}
                        onMouseLeave={this.iconHover}
                    >
                     
                        <FontAwesomeIcon icon={faHome}
                                        className={css.Icons}                                       
                                        onClick={() => this.props.goToComponent('home')}></FontAwesomeIcon>

                        <p className={HomeHover.join(' ')}>Home</p>

                        <FontAwesomeIcon icon={faAddressCard}
                                        className={css.Icons}
                                        onClick={() => this.props.goToComponent('intro')}></FontAwesomeIcon>

                        <p className={AddressHover.join(' ')}>Intro</p>

                        <FontAwesomeIcon icon={faTools}
                                        className={css.Icons}
                                        onClick={() => this.props.goToComponent('skills')}></FontAwesomeIcon>

                        <p className={ToolsHover.join(' ')}>Skills</p>

                        <FontAwesomeIcon icon={faBriefcase}
                                        className={css.Icons}
                                        onClick={() => this.props.goToComponent('portfolio')}></FontAwesomeIcon>

                        <p className={BriefcaseHover.join(' ')}>Portfolio</p>
                        
                        
                        <FontAwesomeIcon icon={faEnvelope}
                                        className={css.Icons}
                                        onClick={() => this.props.goToComponent('form')}></FontAwesomeIcon>

                        <p className={EnvelopeHover.join(' ')}>Contact</p>

                    </div>
                    
                 </div>
            </div>
            
        );

    }
}

export default Header;