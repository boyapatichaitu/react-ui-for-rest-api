import React from 'react';
import ActionDropdown from './ActionDropdown';
import userAvatar from '../../../user-1.svg'

const UserCard = props => {
    return (
        <div key={props.user.email} className="card col-sm-4 col-md-3 col-xs-12 mx-auto">
            <ActionDropdown {...props} />
            <img className="avatar mx-auto" src={userAvatar} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{props.user.firstName + ' ' + props.user.lastName}</h5>
                <p className="card-text capitalize">{props.user.role}</p>
                <p className="card-text"><i className="fa fa-envelope-o user-card-icon col-2"></i> <span className="col-8">{props.user.email}</span></p>
            </div>
        </div>
    );
};

export default UserCard;