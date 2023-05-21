import React, { createContext } from 'react';
import { 
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  signInWithPopup, 
  signOut, 
  updateProfile} from "firebase/auth";
import app from '../Firebase/firebase.config'
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const mailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

 
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserData = (user, name, url) => {
        return updateProfile(user,{
          displayName: name, photoURL: url
        })
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        mailSignIn,
        googleSignIn,
        logOut,
        updateUserData
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;