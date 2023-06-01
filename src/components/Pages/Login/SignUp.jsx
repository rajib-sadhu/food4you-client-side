import React, { useContext, useState } from 'react';

import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs'
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [eye, setEye] = useState(false);
    const handleEye = () => {
        setEye(!eye)
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [password, setPassword] = useState('');

    const [errorText, setErrorText] = useState('');


    const { registerUser, addNameAndPhoto } = useContext(AuthContext);


const navigate = useNavigate()



    const handleForm = (e) => {
        e.preventDefault();

        // console.log(password)

        if (!name, !email, !password, !photoUrl) {
            setErrorText('Please fill al fields.')
        }
        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=).{6,}$/.test(password)) {
            setErrorText('Error: password must be 6 characters and at least 1 number and 1 Capital and small letter provide');
            return;
        }
        else {

            registerUser(email, password)
                .then(result => {
                    console.log(result.user);
                    const loggedUser = result.user;

                    updateProfile(loggedUser, {
                        displayName: name,
                        photoURL: photoUrl
                    })
                        .then(result => console.log('photo updated', result))
                        .catch(err => {
                            console.log(err.message)
                            setErrorText(err.message)
                        })
                        navigate('/')
                })
                .catch(err => {
                    console.log(err.message)
                    setErrorText(err.message)
                })





            if (!errorText == '') {

                setEmail('');
                setName('');
                setPassword('');
                setPhotoUrl('');
                setErrorText('');
                toast.success('Account Created Successfully!');
            }

        }
    }


    return (
        <div>
            <form onSubmit={handleForm} className='space-y-14 mt-14' >
                <div className=''>
                    <label htmlFor=""
                        className='block text-sm text-slate-500'
                    >Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="" id=""
                        className='border-b-2 w-full p-1 outline-none'
                    />
                </div>
                <div className=''>
                    <label htmlFor=""
                        className='block text-sm text-slate-500'
                    >Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="" id=""
                        className='border-b-2 w-full p-1 outline-none'
                    />
                </div>
                <div className=''>
                    <label htmlFor=""
                        className='block text-sm text-slate-500'
                    >Photo URL</label>
                    <input onChange={(e) => setPhotoUrl(e.target.value)} value={photoUrl} type="text" name="" id=""
                        className='border-b-2 w-full p-1 outline-none'
                    />
                </div>
                <div className='relative'>
                    <label htmlFor=""
                        className='block text-sm text-slate-500'
                    >Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password}
                        type='password'
                        //  type={eye ? 'text' : 'password'} name="" id=""
                        className=' border-b-2 w-full p-1 outline-none pe-8'
                    />
                    {/* <button onClick={handleEye} className='absolute right-2 top-7'>
                        {eye ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                    </button> */}
                </div>

                <div className='text-center'>
                    <button
                        className='btn w-full border-2 rounded-none font-medium bg-[#f8cb59] text-black hover:bg-[#d8a62a] hover:border-[#d8a62a] hover:text-white py-2'
                    >Create Account</button>
                </div>
            </form>
            <p className='mt-5'>
                Already have an account? <Link to='/login/signin' className='text-blue-800 underline'>Login</Link>
            </p>
            <p className='mt-5 text-red-700 font-medium' >
                {errorText}
            </p>
        </div>
    );
};

export default SignUp;