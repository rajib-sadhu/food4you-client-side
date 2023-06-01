import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

import image1 from '../../../../assets/all-image/trend-item-1.png'
import image2 from '../../../../assets/all-image/trend-item-2.png'
import image3 from '../../../../assets/all-image/trend-item-3.png'


const TrendingItem = () => {
    return (
        <div className='md:mt-20 md:mb-52 mb-10 grid grid-cols-2 md:gap-[32px] gap-2 w-full md:h-[421px] md:px-[110px] p-2'>

            <div className=' row-span-2 relative' >
                <Fade>
                    <img className='w-full h-full object-cover' src={image1} alt="" />
                    <div className='text-white uppercase top-0 absolute font-bold md:p-[45px] p-2'>
                        <p className='md:text-4xl text-[.5rem] md:mb-[20px] mb-1' >Try it today</p>
                        <p className='md:text-5xl text-[.9rem]'>
                            Most <br />
                            Popular <br />
                            Pastas
                        </p>
                    </div>
                </Fade>
            </div>
            <div className=' relative' >
                <Fade>
                    <img className='w-full h-full object-cover' src={image2} alt="" />
                    <div className='text-white uppercase top-0 absolute font-bold md:p-[45px] p-2'>
                        <p className='md:text-2xl text-[.5rem] md:mb-[20px] mb-1' >Try it today</p>
                        <p className='md:text-4xl text-[.7rem]'>
                            More Fun <br />
                            More Taste
                        </p>
                    </div>
                </Fade>
            </div>
            <div className=' relative' >
                <Fade>
                    <img className='w-full h-full object-cover' src={image3} alt="" />
                    <div className='text-white uppercase top-0 absolute font-bold md:p-[45px] p-2'>
                        <p className='md:text-2xl text-[.6rem] md:mb-[20px]' >Try it today</p>
                        <p className='md:text-4xl text-[.8rem]'>
                            Fresh & Chili
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default TrendingItem;