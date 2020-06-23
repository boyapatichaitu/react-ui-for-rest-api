import React from 'react';

const ActionDropDown = props => {
    return (
        <div className="dropdown text-align-left">
            <button className="btn" type="button" id="userActions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-ellipsis-v user-card-icon"></i>
            </button>
            <div className="dropdown-menu" aria-labelledby="userActions">
                <p className="dropdown-item" data-toggle="modal" data-target="#actionModal"
                    onClick={() => props.setDetails({
                        isEdit: true,
                        user: props.user,
                        load: true
                    })}>Edit</p>
                <p className="dropdown-item" data-toggle="modal" data-target="#actionModal"
                    onClick={() => props.setDetails({
                        isEdit: false,
                        user: props.user,
                        load: true
                    })}>Delete</p>
            </div>
            {props.currentUser.email === props.user.email ?
                <i className='fa fa-star user-card-icon float-right app-color'></i>
                :
                <i className='fa fa-star-o user-card-icon float-right app-color'></i>
            }
        </div>
    );
};

export default ActionDropDown