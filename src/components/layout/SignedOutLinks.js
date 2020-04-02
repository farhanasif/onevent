import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


class SignedOutLinks extends Component {
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
                    <li><NavLink to="/signup">Sign up</NavLink></li>
                    <li><NavLink to="/signin">Login</NavLink></li>
                </ul>
                <ul id="nav-mobile" className="sidenav">
                <li><NavLink to="/signup">Sign up</NavLink></li>
                    <li><NavLink to="/signin">Login</NavLink></li>
                </ul>
                <a data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        )
    }
}

export default SignedOutLinks;