import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import logo from "./../../assets/img/desk.png";


const Header = () => (
  <div>
  <AppBar> 
      <Toolbar>
          <img src={ logo } alt="este es el logo" width="35" height="35"></img>
          &nbsp;
          <h1> Completitud de datos </h1>
      </Toolbar>

  </AppBar>
  </div>
)

export default Header