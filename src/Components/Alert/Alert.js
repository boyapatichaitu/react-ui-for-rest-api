import React from 'react';

const Alert = (props) => {

    if (props.message)
        window.$('#toast').toast('show');

    return (
        <div className="alert-position" >
            <div className="toast" id="toast" role="alert" aria-live="assertive" aria-atomic="true" data-animation="true" data-autohide="true" data-delay="1500">
                <div className="toast-header">
                    <button type="button" className="close text-align-right" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    <strong>{props.message ? props.message : "Sorry, try again later.."}</strong>
                </div>
            </div>
        </div>

    );
};

export default Alert;