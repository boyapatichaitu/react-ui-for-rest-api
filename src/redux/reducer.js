import * as actions from "./actions/actions"

const auth = sessionStorage.getItem('auth'),
    userData = localStorage.getItem('user'),
    token = JSON.parse(auth !== 'undefined' ? auth : null),
    user = JSON.parse(userData !== 'undefined' ? userData : null),
    initialState = {
        token,
        user,
        isLoggedIn: token ? true : false
    };
const root = (state = initialState, action) => {
    switch (action.type) {
        case actions.HANDLE_LOGIN:
            return {
                ...state,
                isLoggedIn: action.userData.token ? true : false,
                token: action.userData.token,
                user: {
                    ...action.userData.user,
                }
            }
        case actions.HANDLE_LOGOUT:
            {
                sessionStorage.removeItem('auth');
                localStorage.removeItem('user');
                return {
                    isLoggedIn: false
                };
            }
        case actions.USER_ACTION_STATUS:
            return {
                ...state,
                actionMessage: action.message
            }
        default:
            return state
    }
}

export default root