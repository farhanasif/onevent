import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const fireConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "react-redux-c02aa.firebaseapp.com",
  databaseURL: "https://react-redux-c02aa.firebaseio.com",
  projectId: "react-redux-c02aa",
  storageBucket: "react-redux-c02aa.appspot.com",
  messagingSenderId: "662703363063",
  appId: "1:662703363063:web:77d8bf71047094ca09d4f2",
  measurementId: "G-0NYDD7N72Y"
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
    // reactReduxFirebase(fbConfig), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

const rrfProps = {
     firebase,
     config: fbConfig,
     dispatch: store.dispatch,
     createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
