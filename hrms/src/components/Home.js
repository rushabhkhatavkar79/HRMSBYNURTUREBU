import React from 'react';
import './Home.css';
import Header from "./Header"
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
      <Header/>
      <br/><br/>
      <div style={{display:"flex"}}><Calender /> <SimpleTable /></div>
      <div><Fieldset /></div>
    </div>
  );




}

export default Home;
