import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



initializeAuthentication();
const useFirebase = () => {
     const [user, setUser] = useState({});
     const [error, setError] = useState('')
     const [isLoading, setIsLoading] = useState(true)

     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();
     // register user 
     const registerUser = (email, password, name, history) => {
          setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
               .then(result => {
                    setError('');
                    const newUser = { email, displayName: name };
                    setUser(newUser);
                    // saveUser in database
                    saveUser(email, name, 'POST');
                    // update user profile
                    updateProfile(auth.currentUser, {
                         displayName: name
                    })
                         .then(() => {

                         })
                         .catch((error) => {

                         });

                    // redirecting
                    history.replace('/');
               })
               .catch(error => {
                    setError(error.message);
               })
               .finally(() => setIsLoading(false));
     }
     // login user
     const loginUser = (email, password, location, history) => {
          setIsLoading(true);
          signInWithEmailAndPassword(auth, email, password)
               .then(result => {
                    const user = result.user;
                    setError('');
                    const destination = location?.state?.from || '/'
                    history.replace(destination);

               })
               .catch(error => {
                    setError(error.message);
               })
               .finally(() => setIsLoading(false));
     }

     // sign in with google handle
     const signInWithGoogle = (location, history) => {
          setIsLoading(true);
          signInWithPopup(auth, googleProvider)
               .then(result => {
                    const user = result.user;
                    setError('')
                    saveUser(user.email, user.displayName, 'PUT')
                    const destination = location?.state?.from || '/'
                    history.replace(destination);
               })
               .catch((error) => {
                    setError(error.message);
               })
               .finally(() => setIsLoading(false));
     }

     // observation
     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user)
               }
               else {
                    setUser({});
               }
               setIsLoading(false);
          })

          return () => unsubscribed;
     }, [])

     // logOut handle
     const logOut = () => {
          setIsLoading(true);
          signOut(auth)
               .then(() => {

               })
               .finally(() => setIsLoading(false));
     }

     // saveUser for save database
     const saveUser = (email, displayName, method) => {
          const user = { email, displayName };
          fetch('http://localhost:5000/users', {
               method: method,
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
     }


     return {
          user,
          registerUser,
          loginUser,
          signInWithGoogle,
          logOut,
          isLoading,
          error
     }

}

export default useFirebase;