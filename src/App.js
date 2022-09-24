// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from './components/Counter';

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
    </div>
    )
  }
}

export default App;
