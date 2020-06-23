import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

const UnProtectedRoute = (props) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn),
        Component = props.component;
       
        return isLoggedIn ? (
            <Redirect to={{ pathname: '/' }} />
        ) : (
            <Component />
        );
}

export default UnProtectedRoute;