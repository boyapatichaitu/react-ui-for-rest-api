import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as conf from '../../config/config';
import Header from '../Header/Header';
import * as actions from '../../redux/actions/actions';

import './Users.css';
import UserCard from './Elements/UserCard';
import Modal from './Elements/Modal';

const Users = (props) => {
    const [state, setState] = useState({
        isLoading: true
    }),
    [editOrDelete, setDetails] = useState({
        load: false,
        isEdit: false
    });

    const setUserDetails = details => {
        setDetails({
            ...details
        })
    };

    const fetchUsers = () => {
        fetch(conf.GET_USERS, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': props.token ? `Bearer ${props.token}` : 'undefined'
            }
        })
            .then(response => {
                if (response.status === 403 || response.status === 401){
                    props.setMessage('Login and try again');
                    props.logout();
                }
                return response.json()
            })
            .then(data => {
                if (data)
                    setState({
                        ...state,
                        isLoading: false,
                        users: data
                    })
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="col-12 no-padding">
            <Header />
            {state.isLoading ?
                <div></div> :
                <div className="row users-card-deck">
                    {state.users.map(user =>
                        <UserCard key={user.email + user.role} currentUser={props.user} user={user} setDetails={setUserDetails} />
                    )}
                </div>
            }
            <Modal {...editOrDelete}/>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()),
        setMessage: (message) => dispatch(actions.userActionStatus(message))
    }
};

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);