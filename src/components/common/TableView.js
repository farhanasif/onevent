import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCast } from '../../store/actions/castActions';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import TableInstruction from './TableInstruction';
import MOCK_DATA from '../../config/MOCK_DATA.json';

class TableView extends Component {
    state = {
        totaldata: 0,
        loaded: false,
        mock: MOCK_DATA
    }

    componentDidMount() {
        var elem = document.querySelector(".collapsible");
        M.Collapsible.init(elem, {
            accordion: false
          });
    }

    handleLoaddata = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createCast(this.state.mock);
    }

    render() {
        
        const { auth, casts } = this.props;
        if(auth.uid) return <Redirect to="/" />
        let totaldata = casts ? casts.length : 0;
        console.log(casts);
        return (
            <div className="container">
                <ul className="collapsible">
                    <li className="active">
                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>Introduction</div>
                    <div className="collapsible-body">
                        <TableInstruction />
                        <div className="col s12 m6 ">
                            <div className="card">
                                <div className="card-content">
                                    <a className="btn waves-effect waves-light pink lighten-1">Load data</a>
                                    <p>Total data in table: {totaldata}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </li>
                </ul>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    //console.log(state)
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth,
        casts: state.firestore.ordered.casts,
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        createCast: (casts) => dispatch(createCast(casts))
    }
}
  
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'casts'
        }
    ])
)(TableView);