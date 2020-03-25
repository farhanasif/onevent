import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
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
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field col s12">
                        <input id="title" type="text" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field col s12">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Content</label>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light pink lighten-1">Create
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject
