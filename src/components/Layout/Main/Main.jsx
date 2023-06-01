import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';

import './Main.css'

const Main = () => {

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false);

    return (
        <div className='relative'>
            <div className='header-div sticky top-0 z-50'>
            <Header/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;