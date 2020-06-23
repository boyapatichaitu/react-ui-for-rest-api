import React from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../../../redux/actions/actions';
import * as conf from '../../../config/config';
import EditUser from '../../Forms/EditUser/EditUser';

const ActionModal = props => {
    const token = useSelector(state => state.token),
        handleFormSubmit = (e) => {
            if (props.isEdit) {
                const formData = new FormData(e.target)
                const updatedUser = {}

                e.preventDefault();
                window.$('#close-modal').click();
                for (let entry of formData.entries()) {
                    updatedUser[entry[0]] = entry[1]
                }
                props.updateUser(updatedUser, token);
            } else {
                e.preventDefault();
                window.$('#close-modal').click();
                props.deleteUser({ 'email': props.user.email }, token)
            }

        };

    return (
        <div className="modal fade" id="actionModal" tabIndex="-1" role="dialog" aria-labelledby="userEditModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                {props.load ?
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userEditModal">{props.isEdit ? "Edit User" : "Delete User"} - {props.user.firstName}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form className="text-align-left" onSubmit={(e) => handleFormSubmit(e, props.submit)}>
                            <div className="modal-body">
                                {
                                    props.isEdit ?
                                        <EditUser user={props.user} />
                                        :
                                        <p>Are you sure to remove this user?</p>
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" id="close-modal" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" >{props.isEdit ? "Save changes" : "Remove User"}</button>
                            </div>
                        </form>

                    </div>
                    : ""
                }
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (user, token) => dispatch(actions.updateUser(user, conf.UPDATE_USER, token)),
        deleteUser: (email, token) => dispatch(actions.deleteUser(email, conf.DELETE_USER, token))
    };
}


export default connect(null, mapDispatchToProps)(ActionModal);