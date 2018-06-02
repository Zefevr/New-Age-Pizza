import React, { Component } from 'react';
//import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Base from './components/Base'
import Sauce from './components/Sauce'
import Toppings from './components/Toppings'
/* import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom' */


/* import red from '@material-ui/core/colors/red'

const primary = red[500]; // #F44336 */

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              New Age Pizza
            </Typography>
          </Toolbar>
        </AppBar>
        <Base/>
        <Sauce/>
        <Toppings/>
      </div>
    );
  }
}

export default App;
