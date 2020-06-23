// import * as config from '../../config/config';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const HANDLE_SIGNUP = 'HANDLE_SIGNUP';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
export const DELETE_USER = 'DELETE_USER';
export const USER_ACTION_STATUS = 'USER_ACTION_STATUS';

export const userData = userData => {
    return {
        type: HANDLE_LOGIN,
        userData: userData
    };
};

export const logout = () => {
    return {
        type: HANDLE_LOGOUT
    }

};

export const userActionStatus = message => {
    return {
        type: USER_ACTION_STATUS,
        message: message
    }
};

export const logoutTimer = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(userActionStatus("You are Logged Out"));
            dispatch(logout());
        }, 60000);
    }
};


export const handleLoginOrSignUp = (user, url) => {
    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                sessionStorage.setItem('auth', JSON.stringify(data.token));
                localStorage.setItem('user', JSON.stringify(data.user));
                dispatch(userActionStatus("You are Logged In"));
                dispatch(userData(data));
            })
            .catch(err => console.error('Error: ', err));
    };
};

export const updateUser = (user, url, token) => {
    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token ? `Bearer ${token}` : 'undefined'
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.status === 403 || response.status === 401){
                    dispatch(userActionStatus("Time-up, login and try again"));
                    logout();
                }
                return response.json()
            })
            .then(data => {
                if(data)
                dispatch(userActionStatus(data.message + ' ' + data.nextStep));
            })
            .catch(err => console.error('Error: ', err));
    };
};

export const deleteUser = (user, url, token) => {
    return dispatch => {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token ? `Bearer ${token}` : 'undefined'
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.status === 403 || response.status === 401){
                    dispatch(userActionStatus("Time-up, login and try again"));
                    logout();
                }
                return response.json()
            })
            .then(data => {
                if(data)
                dispatch(userActionStatus(data.message + ' ' + data.nextStep));
            })
            .catch(err => console.error('Error: ', err));
    };
};