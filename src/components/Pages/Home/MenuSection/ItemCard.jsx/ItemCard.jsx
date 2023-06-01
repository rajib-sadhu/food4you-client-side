import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';


const ItemCard = ({ item }) => {
    return (
        <div className='text-center w-full'>
            <div className='w-full'>
                <Fade  ><img className='mx-auto md:w-full w-[20rem] hover:scale-110 duration-300 item-img-animation' src={item.img} alt="" /></Fade >
            </div>
            <div className='space-y-[24px]'>
                <div className='text-2xl font-bold'>
                    <h1>{item.name}</h1>
                </div>
                <div className='text-lg'>
                    <p>{item.desc}</p>
                </div>
                <div>
                    <a href='#bookTable'
                        className='bg-[#ffe001] hover:bg-[#ddc614] font-bold px-10 py-2 text-xl hover:scale-105 duration-200'
                    >Order Now</a>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;