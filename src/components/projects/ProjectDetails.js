import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import moment from 'moment';

function ProjectDetails(props) {
    const { project, auth } = props;
    if(!auth.uid){
        return <Redirect to="/signin" />
    }
    else{
        if(project){
            return(
                <div className="container section project-details">
                    <div className="card pink lighten-1 z-depth-3">
                        <div className="card-content white-text">
                            <span className="card-title">{project.title}</span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div className="light-green-text lighten-5">posted by {project.authorFirstName} {project.authorLastName}</div>
                            <div className="light-green-text lighten-5">{moment(project.createdAt.toDate()).calendar()}</div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="container centered section project-details">
                    <BounceLoader
                        size={50}
                        color={"#ec407a"}
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = (state, props) => {
    //console.log(state)
    const id = props.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    console.log('here...');
    console.log(state);
    return {
        project: project,
        auth: state.firebase.auth
    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        { collection : "projects", doc: props.match.params.id }
   ])
)(ProjectDetails);
