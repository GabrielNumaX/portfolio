import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './Containers/Main/Main';
import './App.css';

import Ephemeral from './Components/Portfolio/Items/Ephemeral';
import Mathtrix from './Components/Portfolio/Items/Mathtrix';
import Notex from './Components/Portfolio/Items/Notex';
import Todo from './Components/Portfolio/Items/Todo';
import Vegan from './Components/Portfolio/Items/Vegan';
import Shoplane from './Components/Portfolio/Items/Shoplane';
import Player from './Components/Portfolio/Items/Player';
import Dice from './Components/Portfolio/Items/Dice';
// import Google from './Components/Portfolio/Items/Google';
import Smartwatch from './Components/Portfolio/Items/Smartwatch';
import Button from './Components/Portfolio/Items/Button';
import Calculator from './Components/Portfolio/Items/Calculator';
import Clock from './Components/Portfolio/Items/Clock';


class App extends Component {

  render() {
    return (

      <BrowserRouter basename={process.env.PUBLIC_URL}>

        <Route exact path='/' component={Main}></Route>

        <Route path='/ephemeral' component={Ephemeral}></Route>
        <Route path='/calendarium' component={Todo}></Route>
        <Route path='/mathtrix' component={Mathtrix}></Route>
        <Route path='/notex' component={Notex}></Route>
        <Route path='/vegan-store' component={Vegan}></Route>
        <Route path='/shoplane-e-commerce' component={Shoplane}></Route>
        <Route path='/music-player' component={Player}></Route>
        <Route path='/dice-game' component={Dice}></Route>
        {/* <Route path='/google-clone' component={Google}></Route> */}
        <Route path='/smartwatch' component={Smartwatch}></Route>
        <Route path='/button-generator' component={Button}></Route>
        <Route path='/calculator' component={Calculator}></Route>
        <Route path='/clock' component={Clock}></Route>

      </BrowserRouter>

    );//end return
  } //end render
} //end class

export default App;
