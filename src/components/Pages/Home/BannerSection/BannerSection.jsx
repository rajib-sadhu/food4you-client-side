import React from 'react';
import './BannerSection.css';
// import styled from 'styled-components'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerCarousel from './BannerCarousel';


import kodomful from '../../../../assets/all-image/banner-flower.png'

const BannerSection = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='relative'>
            <Carousel responsive={responsive}
                autoPlay
                autoPlaySpeed={5000}
            // arrows={false}
            showDots
            rewind
            rewindWithAnimation
            customDot={<CustomBtn/>}
            draggable={false}
            removeArrowOnDeviceType={['mobile']}
            >
                <BannerCarousel />
                <BannerCarousel />
                <BannerCarousel />
            </Carousel>
            {/* <div className='absolute 2xl:-bottom-[235px] lg:-bottom-[120px] -bottom-[40px] left-0'>
                <img className='kodomful lg:h-[30rem] h-[20rem]' src={kodomful} alt="" />
            </div> */}
        </div>
    );
};

export default BannerSection;


const CustomBtn = (props) =>{

      // console.log(props);
      const { onMove, index, onClick, active } = props;

      return (
          <>
  
              <div className='m-3 md:mb-5 mb-32'>
                  <li
                      className={`border border-white ms-2 md:p-2 p-[4px]  rounded-[50%] cursor-pointer ${active ? "md:bg-yellow-300 bg-black" : "bg-transparent"}`}
                      onClick={() => onClick()}
                  >
  
                  </li>
              </div>
  
          </>
      )
}