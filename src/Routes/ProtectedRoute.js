import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

const ProtectedRoute = (props) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn),
        Component = props.component;

    return isLoggedIn ? (
        <Component />
    )
        : (
            <Redirect to={{ pathname: '/login' }} />
        );

}

export default ProtectedRoute;