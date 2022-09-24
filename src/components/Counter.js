import React from "react";
class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
  
    increment = () => {
      this.setState(prevState => {
        return {count: prevState.count + 1};
      });
    };
  
    decrement = () => {
      this.setState(prevState => {
        return {count: prevState.count - 1}
      });
    };
  
    reset = () => {
      this.setState({count: 0})
    }
  
     render() {
      return ( 
      <div className="section">
        <h1>Counter App</h1>
        <button className='inc' onClick={this.increment}>Increment</button>
        <button className='dec' onClick={this.decrement}>Decrement</button>
        <button className='res' onClick={this.reset}>Reset</button>
  
        <h3>Current Count: {this.state.count}</h3>
      </div>
      )
    }
  }

  export default Counter