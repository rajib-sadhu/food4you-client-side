import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { GiCandleFlame } from "react-icons/gi";

import { AuthContext } from "../../provider/AuthProvider";

import logo from '../../../assets/all-image/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [bar, setBar] = useState(false);

    const { user, logoutUser } = useContext(AuthContext);

    // console.log(user);

    const handleLogout = () =>{
        logoutUser()
        .then()
        .catch((err)=>{
            console.log(err)
        })
    }

    return (

        <div className='md:px-10 bg-[#ffe100]' >
            {/* <div className='md:flex items-center hidden md:flex-row flex-col justify-between'>
                <div>
                    <img src={logo} alt="" />
                </div>

                <div className=''>

                    <div className='md:space-x-[150px] 2xl:text-xl md:text-lg font-bold lg:tracking-widest'>

                        <Link className='hover:text-slate-500' to='/'>Home</Link>
                        <Link className='hover:text-slate-500' to='/blog'>Blog</Link>
                        <Link className='hover:text-slate-500' to='/login'>Login</Link>
                    </div>
                </div>
            </div> */}
            <div>
                <Container className='bg-[#ffe100] w-full' bar={bar}>
                    <Logo>
                        <img className='w-28' src={logo} alt="" />
                    </Logo>
                    <Nav bar={bar}>
                        <span><NavLink
                         className={({ isActive }) => isActive ? "text-blue-700 a" : "a"}
                        to='/'>Home</NavLink></span>

                        <span><NavLink className={({ isActive }) => isActive ? "text-blue-700 a" : "a"} to='/blog'>Blog</NavLink></span>

                        <span>
                            {
                                !user?.displayName ?

                                    <NavLink className={({ isActive }) => isActive ? "text-blue-700 font-bold bg-[#d2bb0f] px-3 py-2 rounded-sm " : "font-bold bg-[#d2bb0f] px-3 py-2 rounded-sm"} to='/login/signin' >Login</NavLink>
                                    :
                                    <div className='inline-block text-center'>
                                        <p className='inline-block px-5' >
                                            {user?.displayName}
                                        </p>
                                        <button

                                            onClick={handleLogout}

                                            className='font-bold bg-[#d2bb0f] px-3 py-2 rounded-sm' >
                                            Logout
                                        </button>
                                    </div>
                            }
                        </span>

                        {/* <span><a href="#">Menu</a></span>
                        <span><a href="#">Our Story</a></span>
                        <span><a href="#">Contact US</a></span> */}
                    </Nav>
                    <div
                        onClick={() => setBar(!bar)}
                        className="bars">
                        <div className="bar"></div>
                    </div>
                </Container>
            </div>


        </div>


    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    // max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 1rem;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 100%;
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 30px;
            height: 20px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "black"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: black;
                    position: absolute;
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
    }

    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
`
const Nav = styled.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #ffe100;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span{
        margin-left: 1rem;
        .a{
            color: #00000;
            text-decoration: none;
            font-weight: 600;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
            }
        }
    }
`