const initState = {
    authError: null,
    errDetails: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null,
                errDetails: null
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'login failed',
                errDetails: action.err
            }
        case 'LOGOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null,
                errDetails: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: 'signup failed',
                errDetails: action.err.message
            }
        default:
            console.log('AUTH: default action');
            return state;
    }
}

export default authReducer;