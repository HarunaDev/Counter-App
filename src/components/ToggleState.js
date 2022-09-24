import React from "react";

class ToggleState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        visibility: false
    }
    }
    
    render() {
        if(this.state.visibility) {
            return (
                <div className="section">
                    <button onClick={this.toggleVisibility}>Click me</button>
                    <h1>Now you see me</h1>
                </div>
            )
        } else {
            return (
                <div className="section">
                    <button onClick={this.toggleVisibility}>Click me</button>
                </div>
            )
        }
    }
}

export default ToggleState