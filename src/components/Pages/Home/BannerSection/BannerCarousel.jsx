import React from 'react';
import { Fade } from "react-awesome-reveal";

// Images

import headerBg from '../../../../assets/all-image/header-banner-2.png';
import phonIcon from '../../../../assets/all-image/phone-icon.png';
import { Link } from 'react-router-dom';


const BannerCarousel = () => {
    return (
        <div>
             <div className='2xl:px-[58px] md:px-[30px] md:pt-[20px] pt-[1rem] w-full h-[100vh] bg-no-repeat bg-cover'
                style={{
                    backgroundImage: `url(${headerBg})`,
                    backgroundPositionY: '-110px'
                }}
            >
               


                <Fade>
                    <div 
                    className='text-center md:ms-10 ms-0  md:w-2/5 w-full md:h-auto h-full flex flex-col justify-center items-center md:mt-10'>
                        <div className='md:space-y-[30px] space-y-3'>
                            <h1
                                className="2xl:text-5xl md:text-4xl text-4xl font-bold custom-font"
                            >Are You Hungry?</h1>

                            <h2
                                className='2xl:text-7xl lg:text-5xl text-5xl uppercase'
                                style={{ fontFamily: 'Fredericka the Great' }}
                            >Don't <br /> Wait!</h2>
                            <p className='uppercase font-bold 2xl:text-2xl lg:text-xl inline-block 2xl:pb-[20px] lg:pb-4 pb-2 border-b border-black'>
                                Let start to order food now</p>
                        </div>
                        <div
                            className='flex items-center md:gap-[16px] gap-2 2xl:mt-[10px] lg:mt-5 mt-10 justify-center'
                        >
                            <p className='2xl:text-2xl lg:text-xl text-2xl'
                                style={{ fontFamily: 'Fredericka the Great' }}>
                                This Monday <br />
                                Happy Hours
                            </p>
                            <p
                                style={{ fontFamily: 'Fredericka the Great' }}
                                className='2xl:text-[4rem] lg:text-[3.8rem] text-[3.8rem]'
                            >1+1=3</p>
                        </div>
                        <div className='2xl:mt-[28px] z-50 md:mt-[10px] mt-[3rem]'>
                            <a href='#discover'
                                className='2xl:text-2xl duration-150 font-bold px-12 py-3 uppercase border order-btn border-black cursor-pointer'
                                >
                                Explore Now
                            </a>
                        </div>
                        
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default BannerCarousel;