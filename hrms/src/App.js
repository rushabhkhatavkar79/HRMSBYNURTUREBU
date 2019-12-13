import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabBar from './components/TabBar'
import SimpleTable from './components/SimpleTable'
import Fieldset from './components/Fieldset'
import Calender from './components/Calender'


import Image from 'material-ui-image'
import { display, flexbox } from '@material-ui/system';



const styleforlogo = {
  position: "relative",
  left: 900,
}

function App() {
  return (
    <div>
      <div>
        <img src="logo.png"></img>
        <img src="hiring_icon.png" style={styleforlogo}></img>
      </div>
      <div><TabBar /></div>
      <div style={{display:"flex"}}><Calender /> <SimpleTable /></div>
      <div><Fieldset /></div>
    </div>
  );




}

export default App;
