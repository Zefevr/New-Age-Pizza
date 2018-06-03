import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Base from './components/Base'
import Sauce from './components/Sauce'
import Toppings from './components/Toppings'
import Drone from './components/Drone'
import Total from './components/Total'


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
        <Drone/>
        <Total/>
      </div>
    );
  }
}

export default App;
