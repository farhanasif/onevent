import authReducer from './authReducer';
import projectReducer from './projectReducer';
import castReducer from './castReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';



const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    cast: castReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;