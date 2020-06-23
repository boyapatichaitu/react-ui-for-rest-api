import * as actions from "./actions/actions"

const token = JSON.parse(sessionStorage.getItem('auth')),
    user = JSON.parse(localStorage.getItem('user')),
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