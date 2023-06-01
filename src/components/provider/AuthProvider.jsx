import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const registerUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const addNameAndPhoto = (loggedUser, name, photo) => {

        console.log(name, photo)

        return updateProfile(loggedUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        return signOut(auth);
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser)
        });

        return () => {
            unsubscribe();
        }

    }, [])



    const authInfo = { registerUser, user, logoutUser, logInUser, addNameAndPhoto }

    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;