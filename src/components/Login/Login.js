import React, { useContext } from 'react';
import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
      }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;

// import React from 'react';
// import React, { useContext } from 'react';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebaseConfig';
// import { useState } from 'react';
// const Login = () => {
//     const [events, setEvents] = useState([]);
//     var provider = new firebase.auth.GoogleAuthProvider();


//     const handleGoogleSignIn = () => {

//         firebase.auth()
//             .signInWithPopup(provider)
//             .then((result) => {
//                 const { displayName, email } = result.user;
//                 const signInUser = { name: displayName, email };
//                 setEvents(signInUser);
//                 history.replace(from)
//                 setUser(user);
//             }).catch((error) => {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 var email = error.email;
//                 var credential = error.credential;
//                 console.log(errorCode, errorMessage);
//             });

//     }



//     return (
//         <div>
//             <button onClick={handleGoogleSignIn}>Sign In using Google </button>

//         </div>
//     );
// };

// export default Login;