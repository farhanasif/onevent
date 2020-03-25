import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light pink lighten-1">Login
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
