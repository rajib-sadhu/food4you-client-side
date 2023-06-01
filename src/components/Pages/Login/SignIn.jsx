import React, { useContext, useState } from 'react';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate, Link  } from 'react-router-dom';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorText, setErrorText] = useState('');

    const { logInUser } = useContext(AuthContext);

    // const [eye, setEye] = useState(false);
    // const handleEye =()=>{
    //     setEye(!eye)
    // }

    const location = useLocation();
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();


        if (email, password) {

            if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=).{6,}$/.test(password)) {
                setErrorText('Error: password must be 6 characters and at least 1 number and 1 Capital and small letter provide');
                return;
            }

            logInUser(email, password)
                .then(result => {
                    console.log(result.user);
                    navigate('/')
                })
                .catch(err => {
                    console.log(err.message)
                    setErrorText(err.message)
                })


            if (!errorText == '') {

                setEmail('');
                setPassword('');
                setErrorText('');
                toast.success('Login Successfully!');
            }

        }
        else {
            setErrorText('Please fill al fields.')
        }
    }

    return (
        <div>
            <form onSubmit={handleForm} className='space-y-14 mt-14' >
                <div className=''>
                    <label htmlFor=""
                        className='block text-sm text-slate-500'
                    >Email</label>
                    <input
                        onChange={e => setEmail(e.target.value)} value={email}
                        type="email" name="" id=""
                        className='border-b-2 w-full p-1 outline-none'
                    />
                </div>
                <div className='relative'>
                    <label htmlFor=""
                        className='block text-sm text-slate-500'
                    >Password</label>
                    <input
                        onChange={e => setPassword(e.target.value)} value={password}
                        // type={eye?"text":"password"} 
                        type='password'
                        name="" id=""
                        className='border-b-2 w-full p-1 outline-none pe-8'
                    />
                    {/* <button onClick={handleEye} className='absolute right-2 top-7'>
                           { eye? <BsFillEyeFill/>  : <BsFillEyeSlashFill/>} 
                        </button> */}
                </div>

                {/* <div className='flex items-center justify-between'>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" name="" id="" />
                        <span>Remember Me</span>
                    </div>
                    <a href="#" className='text-sm btn-link'>Forgot Password?</a>
                </div> */}

                <div className='text-center'>
                    <button
                        className='btn w-full border-2 rounded-none font-medium bg-[#f8cb59] text-black hover:bg-[#d8a62a] hover:border-[#d8a62a] hover:text-white py-2'
                    >Sign In</button>
                </div>
                
            </form>
            <p className='mt-5'>
                Don't have and account? <Link to='/login/signup' className='text-blue-800 underline'>Register Now</Link>
            </p>
            <p className='mt-5 text-red-700 font-medium' >
                {errorText}
            </p>
        </div>
    );
};

export default SignIn;