// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ToggleState from './components/ToggleState';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }
   render() {
    return ( 
    <div>
      <Counter />
      <ToggleState />
    </div>
    )
  }
}

export default App;
