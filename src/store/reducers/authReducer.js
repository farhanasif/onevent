import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

const initState = {
    authError: null,
    errDetails: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            Toast.fire({
                icon: 'success',
                type: 'success',
                title: 'User login successfully.'
            })
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