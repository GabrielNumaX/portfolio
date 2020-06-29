import React from 'react';

import css from './Skills.module.css';

import js from '../../assets/icons/js.png'
import es6 from '../../assets/icons/es6.jpeg'
import react from '../../assets/icons/react.png'
import redux from '../../assets/icons/redux.png'
import axios from '../../assets/icons/axios.png'
import html from '../../assets/icons/html.jpg'
import cssImg from '../../assets/icons/css.jpg'
import node from '../../assets/icons/node.png'
import express from '../../assets/icons/express.png'
import mongo from '../../assets/icons/mongo.png'
import visual from '../../assets/icons/visualStudio.png'
import atom from '../../assets/icons/atom.png'
import postman from '../../assets/icons/postman.jpeg'
import xammp from '../../assets/icons/xammp2.jpg'
import git from '../../assets/icons/git_crop.png'
import ai from '../../assets/icons/ai.jpg'
import java from '../../assets/icons/java.png'
import python from '../../assets/icons/python.png'


const Skills = () => {

    return(

        <div className={css.SkillsMain}>

            <div className={css.SkillsBg} >

            </div>

            <div className={css.SkillsList}>

                <div className={css.UlContainer}>
                    <h3 className={css.SkillsH3}>Skills</h3>
                    <ul>
                        <li>Javascript
                            <img src={js} alt='javascript'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>ES6
                            <img src={es6} alt='es6'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>ReactJS
                            <img src={react} alt='react'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>Redux
                            <img src={redux} alt='redux'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>Axios
                            <img src={axios} alt='axios'
                                className={css.ImgLogo50}></img>
                        </li>
                        <li>HTML
                            <img src={html} alt='html'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>CSS
                            <img src={cssImg} alt='css'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>NodeJs
                            <img src={node} alt='node'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>Express
                            <img src={express} alt='express'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>MongoDB
                            <img src={mongo} alt='mongo'
                                className={css.ImgLogo40}></img>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={css.ToolsList}>
                <div className={css.UlContainer}>
                    <h3 className={css.SkillsH3}>Tools</h3>
                    <ul>
                        <li>VS Code
                            <img src={visual} alt='vs code'
                                className={css.ImgLogo50}></img>
                        </li>
                        <li>Atom
                            <img src={atom} alt='atom'
                                className={css.ImgLogo50}></img>
                        </li>
                        <li>Postman
                            <img src={postman} alt='postman'
                                className={css.ImgLogo50}></img>
                        </li>
                        <li>Xammp 
                            <img src={xammp} alt='xammp'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>Git
                            <img src={git} alt='git'
                                className={css.ImgLogo40}></img>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={css.InterestsList}>
                <div className={css.UlContainer}>
                    <h3 className={css.SkillsH3}>Interests</h3>
                    <ul>
                        <li>Java
                            <img src={java} alt='java'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>Python
                            <img src={python} alt='python'
                                className={css.ImgLogo50}></img>
                        </li>
                        <li>A.I.
                            <img src={ai} alt='a.i.'
                                className={css.ImgLogo40}></img>
                        </li>
                        <li>Guitar Playing</li>
                        <li>Poetry</li>
                        <li>Movies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;