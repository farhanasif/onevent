import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, isLoaded, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'
import BounceLoader from 'react-spinners/BounceLoader';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const fireConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "react-redux-c02aa.firebaseapp.com",
  databaseURL: "https://react-redux-c02aa.firebaseio.com",
  projectId: "react-redux-c02aa",
  storageBucket: "react-redux-c02aa.appspot.com",
  messagingSenderId: "662703363063",
  appId: "1:662703363063:web:77d8bf71047094ca09d4f2",
  measurementId: "G-0NYDD7N72Y",
  userProfile: 'users',
  useFirestoreForProfile: true
};

try {
  firebase.initializeApp(fireConfig);
  firebase.firestore();
} catch (err) {}

const middlewares = [
  thunk.withExtraArgument({getFirebase, getFirestore})
]

const store = createStore(rootReducer,
  compose(
    applyMiddleware(...middlewares),
    reduxFirestore(fbConfig), // redux bindings for firestore
    //reactReduxFirebase(fbConfig, {attachAuthIsReady: true}) // redux binding for firebase
  )
);

const rrfProps = {
     firebase,
     config: fbConfig,
     dispatch: store.dispatch,
     createFirestoreInstance, // <- needed if using firestore
     userProfile: 'users', // where profiles are stored in database
     //useFirestoreForProfile: true // use Firestore for profile instead of RTDB
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)){
    return (
      <div className="container centered section project-details">
        <BounceLoader
            size={50}
            color={"#ec407a"}
        />
      </div>
    )
  }
      return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
