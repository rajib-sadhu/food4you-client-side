import React from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';

import menubg from '../../../../assets/all-image/menu-bg-bar.png'

import menu1 from '../../../../assets/all-image/menu-item-1.png'
import menu2 from '../../../../assets/all-image/menu-item-2.png'
import menu3 from '../../../../assets/all-image/menu-item-3.png'
import ItemCard from './ItemCard.jsx/ItemCard';
import Titles from '../Titles/Titles';


const Menus = () => {

    const menuItems =  [
        {
            id:1,
            name:'Lorem ipsum dolor',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            img: menu1
        },
        {
            id:2,
            name:'Lorem ipsum dolor',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            img: menu2
        },
        {
            id:3,
            name:'Lorem ipsum dolor',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            img: menu3
        }
    ]
const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.';
const title ='Choose & Enjoy'

    return (
        <div className='mb-[88px] md:mt-[88px] -mt-16 w-full relative'>
            {/* <div className='w-[1050px] text-center mx-auto mb-[60px] space-y-[34px]'>
                <h1
                    className='text-5xl uppercase'
                    style={{
                        fontFamily: 'Fredericka the Great'
                    }}
                >Choose & Enjoy</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div> */}
            <Titles title={title} desc={desc}  />

            <div className='grid md:grid-cols-3 grid-cols-1 md:w-[1300px] md:gap-[107px] gap-[50px] px-10 justify-center items-end mx-auto'

            >
                    {
                        menuItems.map(item => <ItemCard key={item.id} item={item} /> )
                    }
            </div>
            <div
            className='absolute 2xl:top-[44%] lg:top-[46%] -z-10 overflow-hidden'>
                <Slide direction='right' ><img src={menubg} className='w-screen md:block hidden' alt="" /></Slide>
            </div>
        </div>
    );
};

export default Menus;