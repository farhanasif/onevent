import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


class SignedInLinks extends Component {
    
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render(){
        return(
            <div className="container">
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/create">New Project</NavLink></li>
                    <li><a onClick={this.props.signOut}>Log Out</a></li>
                    <li><NavLink to="/" className="btn btn-floating pink lighten-1">{this.props.profile.initials}</NavLink></li>
                </ul>
                <ul id="nav-mobile" className="sidenav">
                    <li><NavLink to="/create">New Project</NavLink></li>
                    <li><a onClick={this.props.signOut}>Log Out</a></li>
                    <li><NavLink to="/" className="btn btn-floating pink lighten-1">{this.props.profile.initials}</NavLink></li>
                </ul>
                <a data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);