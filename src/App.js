// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ToggleState from './components/ToggleState';
import FormControl from './components/FormControl';
import Guess from './components/Guess';

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
      <FormControl />
      <Guess />
    </div>
    )
  }
}

export default App;
