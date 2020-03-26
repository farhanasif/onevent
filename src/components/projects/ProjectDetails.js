import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ProjectDetails(props) {
    const { project } = props;
    if(project){
        return(
            <div className="container section project-details">
                <div className="card pink lighten-1 z-depth-0">
                    <div className="card-content white-text">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>2nd February, 2020 2pm</div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="container section project-details">
                <p>Loading...........</p>
            </div>
        )
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
        project: project
    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        { collection : "projects", doc: props.match.params.id }
   ])
)(ProjectDetails);
