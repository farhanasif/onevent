import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const { notifications } = props;

    return(
        <div className="section">
            <div className="card z-depth-3">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul>
                        { notifications && notifications.map(item => {
                            return (
                                <li key={item.id}>
                                    <span className="pink-text">{item.user} </span>
                                    <span>{item.content}</span>
                                    <div className="grey-text note-date">{moment(item.createdAt.toDate()).fromNow()}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;