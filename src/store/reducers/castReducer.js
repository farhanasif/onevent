const initState = {
    totaldata: 0,
    loaded: false,
}

const castReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_CAST':
            console.log('created CAST upload finished');
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error created cast', action.err);
            return state;
        default:
            console.log('default action');
            return state;
    }
}

export default castReducer;