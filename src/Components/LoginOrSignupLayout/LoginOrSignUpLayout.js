import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';

import './LoginOrSignUpLayout.css';
import LoginOrSignUp from '../Forms/LoginForm/LoginOrSignUp';
import * as labels from '../../config/labels.conf';
import * as conf from '../../config/config';

const LoginOrSignUpLayout = props => {
    return (
        <div className="row">
            <div className="col login-col">
                <div className="login-image"></div>
            </div>
            <div className="col-sm login-col">
                <LoginOrSignUp isLoginPage={props.isLoginPage}
                    labels={props.isLoginPage ? labels.loginLabels : labels.signupLabels}
                    commonFields={labels.commonFields}
                    submit={(data) => props.isLoginPage ? props.handleLogin(data) : props.handleSignUp(data)}
                />
            </div>
        </div>

    );
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: (user) => dispatch(actions.handleLoginOrSignUp(user, conf.LOGIN_URL)),
        handleSignUp: (userData) => dispatch(actions.handleLoginOrSignUp(userData, conf.SIGNUP_URL))
    };
}

export default connect(null, mapDispatchToProps)(LoginOrSignUpLayout);