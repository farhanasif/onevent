import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card pink lighten-1 z-depth-0">
                <div className="card-content white-text">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum eros id erat convallis luctus. Nulla eget posuere sapien. Aliquam in mauris ut enim convallis feugiat a in lorem. Suspendisse in vehicula ex. Quisque hendrerit ut quam vitae tincidunt. Integer euismod dui dui, vitae posuere enim rutrum a. Vivamus quis sapien quis magna sollicitudin iaculis. Integer lobortis euismod dui, sed lacinia ante aliquet id. Quisque scelerisque lacus ut sapien lacinia tempor. Nulla facilisi. Aliquam erat volutpat.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by Farhan</div>
                    <div>2nd February, 2020 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
