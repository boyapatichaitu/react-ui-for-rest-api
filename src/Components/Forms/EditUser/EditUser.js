import React from 'react';
import { signupLabels, commonFields } from '../../../config/labels.conf';

const EditUser = props => {

    return (
        <>
            <label htmlFor={signupLabels.name.first.id} className="text-gray">{signupLabels.name.first.label}</label>
            <input type={signupLabels.name.first.id} className="form-control form-input"
                id={signupLabels.name.first.id} defaultValue={props.user.firstName} name={signupLabels.name.first.id} placeholder={signupLabels.name.first.placeHolder} required />

            <label htmlFor={signupLabels.name.last.id} className="text-gray">{signupLabels.name.last.label}</label>
            <input type={signupLabels.name.last.id} className="form-control form-input"
                id={signupLabels.name.last.id} defaultValue={props.user.lastName} name={signupLabels.name.last.id} placeholder={signupLabels.name.last.placeHolder} />

            <label htmlFor={commonFields[0].type} className="text-gray">{commonFields[0].label}</label>
            <input type={commonFields[0].type} className="form-control form-input"
                id={commonFields[0].type} defaultValue={props.user.email} name={commonFields[0].type} placeholder={commonFields[0].placeHolder} required />
        </>
    );
};

export default EditUser;