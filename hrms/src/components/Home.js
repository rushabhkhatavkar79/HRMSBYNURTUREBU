import React from 'react';
import './Home.css';
import TabBar from './TabBar'
import SimpleTable from './SimpleTable'
import Fieldset from './Fieldset'
import Calender from './Calender'

const styleforlogo = {
  position: "relative",
  left: 900,
}

function Home() {
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

export default Home;
