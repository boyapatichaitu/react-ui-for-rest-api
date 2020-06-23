import React from 'react';

import './LoginOrSignUp.css'
import { Link } from 'react-router-dom';

const handleFormSubmit = (e, callback) => {
    const formData = new FormData(e.target)
    const user = {}

    e.preventDefault()

    for (let entry of formData.entries()) {
        user[entry[0]] = entry[1]
    }
    callback(user);
 }

const LoginOrSignUp = (props) => {
    return (
        <div className="login col-12">
            <h1 className="login-label">{props.labels.header}</h1>
            <p><span className="text-gray">{props.labels.subText.label}  </span><Link to={props.labels.subText.href.url} className="sign-up">{props.labels.subText.href.label}</Link></p>
            <button className="btn btn-primary btn-lg button-submit col-8 background-btn-fb">
                <i className="fa fa-facebook-square facebook-icon"></i>
                <span>  {props.labels.fbText}</span>
            </button>
            <form className="login-form text-align-left offset-2 col-8" onSubmit={(e) => handleFormSubmit(e, props.submit)}>
                {!props.isLoginPage ?
                    <div className="signup-form-elements text-align-left col-12" style={{display:"inline-flex"}}>
                        <div className="login-form-elements text-align-left col-5">
                            <label htmlFor={props.labels.name.first.id} className="text-gray">{props.labels.name.first.label}</label>
                            <input type={props.labels.name.first.type} className="form-control form-input"
                                id={props.labels.name.first.id} name={props.labels.name.first.id} placeholder={props.labels.name.first.placeHolder} required/>
                        </div>
                        <div className="login-form-elements text-align-left offset-2 col-5" style={{display: "inline-block"}}>
                            <label htmlFor={props.labels.name.last.id} className="text-gray">{props.labels.name.last.label}</label>
                            <input type={props.labels.name.last.type} className="form-control form-input"
                                id={props.labels.name.last.id} name={props.labels.name.last.id} placeholder={props.labels.name.last.placeHolder}/>
                        </div>
                    </div> : ''
                }
                {props.commonFields.map(field =>
                    <div key={field.type} className="login-form-elements text-align-left col-12">
                        <label htmlFor={field.type} className="text-gray">{field.label}</label>
                        {field.type === "password" ? <p className="password-reminder app-color">{props.labels.passwordReminder}</p> : ''}
                        <input type={field.type} name={field.type} className="form-control form-input" id={field.type} placeholder={field.placeHolder} required/>
                    </div>
                )}
                <button type="submit" className="btn btn-primary btn-lg button-submit app-color col-12">
                    <span>{props.labels.submit}</span>
                </button>
            </form>
            <p className="disclaimer-text text-gray">
                By {props.labels.disclaimerText}, you agree to the <a className="sign-up" href="/terms">Terms</a> and <a className="sign-up" href="/pp">Privacy Policy</a>.
            </p>
        </div>

    );
}

export default LoginOrSignUp;