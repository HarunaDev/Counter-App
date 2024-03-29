import React from "react";

class FormControl extends React.Component{
    constructor(props){
        super(props)
        this.state = {submit: "", input: ""}
        // bind this
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submit: this.state.input
        })
    }

    render() {
        return (
            <div className="section">
                <h1>Form Submit</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        )
    }
}

export default FormControl