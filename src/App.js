import React, { Component } from 'react';
import './App.css';
import './material.css';
import './material';
import Navbar from './Components/nav.component';
import NavDrawer from './Components/navDrawer.component'
import MainComponent from './Components/main.component'
//import PropTypes from 'prop-types';

class App extends Component {

  constructor(){
    super()
    this.state = {
      items: 0
    }
  }

  addItem(item){
    let newItem = this.state.items + 1 
    this.setState({items: newItem})
  }

  render() {
    return (
      <div>
        <Navbar basket={this.state.items} />
        
        <MainComponent items={this.addItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
