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
        default:
            console.log('AUTH: default action');
            return state;
    }
}

export default authReducer;