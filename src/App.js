// import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
   render() {
    return ( 
    <div>
      <button className='inc' onClick={this.increment}>Increment</button>
      <button className='dec' onClick={this.decrement}>Decrement</button>
      <button className='res' onClick={this.reset}>Reset</button>

      <h1>Current Count: {this.state.count}</h1>
    </div>
    )
  }
}

export default App;
