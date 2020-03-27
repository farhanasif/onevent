import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    return (
        <div className="card pink lighten-1 z-depth-0 project-summery">
            <div className="card-content white-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="lime-text lighten-5">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;