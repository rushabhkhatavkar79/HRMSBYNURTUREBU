import React from 'react';
import TabBar from './TabBar'
const styleforlogo = {
    position: "relative",
    left: 900,
  }

function Header(){
    return(
    <div>
    <div>
        <img src="logo.png"></img>
        <img src="hiring_icon.png" style={styleforlogo}></img>
    </div>
    <div><TabBar /></div>
    </div>
    )
}

export default Header;