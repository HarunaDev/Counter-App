import React from "react";

class ToggleState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        visibility: false
    }

    // bind this
    this.toggleVisibility = this.toggleVisibility.bind(this)
    }

    // toggle visibility based on tracking current state to update ui
    toggleVisibility = () => {
        this.setState(prevState => ({
            visibility: !prevState.visibility
        }))
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