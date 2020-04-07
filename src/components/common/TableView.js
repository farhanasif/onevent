import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCast } from '../../store/actions/castActions';
import { Redirect } from 'react-router-dom';

import TableInstruction from './TableInstruction';
import MOCK_DATA from '../../config/MOCK_DATA.json';

class TableView extends Component {
    state = {
        totaldata: 0,
        loaded: false,
        mock: MOCK_DATA
    }

    handleLoaddata = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createCast(this.state.mock);
    }

    render() {
        const { totaldata, loaded, mock } = this.state;
        console.log(mock);
        const { authError,auth } = this.props;
        if(auth.uid) return <Redirect to="/" />

        return (
            <div className="container z-depth-3">
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
        )
    }
}


const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        createCast: (casts) => dispatch(createCast(casts))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TableView)