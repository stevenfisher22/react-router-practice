import React from 'react';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleForm(e) {
        alert('A name was submitted: ' + this.state.value);
        e.preventDefault();
    }

    handleChange(e) {

        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div>
                {this.state.value} <br />

                <form onSubmit={this.handleForm.bind(this)}>
                    Input Some Text
                    <input type="text" onChange={(e)=>{this.handleChange(e)}}></input>

                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Forms
