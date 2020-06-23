import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white">
            <span className="navbar-brand h1 mr-auto" href="#">Navbar</span>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                            width="40" height="40" className="rounded-circle" alt="Profile Menu" />
                    </p>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <p className="dropdown-item text-align-right" onClick={props.logout}><span className="float-left">Logout</span> <i className="fa fa-sign-out ml-auto" aria-hidden="true"></i></p>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    };
}

export default connect(null, mapDispatchToProps)(Header);
