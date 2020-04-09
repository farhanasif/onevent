import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


class SignedOutLinks extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render(){
        return(
            <div className="container">
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/table">Table</NavLink></li>
                    <li><NavLink to="/signup">Sign up</NavLink></li>
                    <li><NavLink to="/signin">Login</NavLink></li>
                </ul>
                <ul id="nav-mobile" className="sidenav">
                    <li><Link to="/" className="logo-container">OnEvent<i className="material-icons left">spa</i></Link></li>
                    <li><NavLink to="/table">Table<i className="material-icons">mode_edit</i></NavLink></li>
                    <li><NavLink to="/signup">Sign up<i className="material-icons">mode_edit</i></NavLink></li>
                    <li><NavLink to="/signin">Login<i className="material-icons">done</i></NavLink></li>
                </ul>
                <a data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        )
    }
}

export default SignedOutLinks;