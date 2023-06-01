import React from 'react';
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';

import {GrGoogle} from 'react-icons/gr';
import {BsGithub} from 'react-icons/bs';

import './LoginPage.css'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const LoginPage = () => {

    const auth = getAuth(app);
    const navigate = useNavigate();

    const providerGoogle = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{

        signInWithPopup(auth, providerGoogle)
        .then(result=>{
            console.log(result.user);
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message)
        })

    }

    const providerGithub = new GithubAuthProvider();
    const handleGithubSignIn = ()=>{

        signInWithPopup(auth, providerGithub)
        .then(result=>{
            console.log(result.user);
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message)
        })

    }


    return (
        <div className='min-h-screen flex items-center justify-center'>

            <div className='w-[33rem] text-black py-10'>
                <h1 className='text-center text-3xl uppercase font-bold' >Welcome to food4you
                </h1>

                <div className='mt-10 bg-slate-200 p-5 rounded-md' >

                    <div className='flex justify-between font-semibold'>
                        <button 
                        onClick={handleGoogleSignIn}
                        className='flex items-center gap-2 px-2 py-1 bg-blue-400 rounded-sm'> <GrGoogle/> Sign In with Google</button>

                        <button 
                        onClick={handleGithubSignIn}
                        className='flex items-center gap-2 px-2 py-1 bg-green-400 rounded-sm'> <BsGithub/> Sign In with Github</button>
                    </div>

                    <div className='flex justify-between my-5 border-b-4 border-[#d8a62a] text-center px-3'>
                        <NavLink to='/login/signin'
                            className={({ isActive }) =>
                                isActive ? "active-login" : "common-links"
                            } >
                            Sign In
                        </NavLink>
                        <NavLink to='/login/signup'
                            className={({ isActive }) =>
                                isActive ? "active-login" : "common-links"
                            } >
                            Register
                        </NavLink>
                    </div>

                    <div className='px-10'>
                        <Outlet />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LoginPage;