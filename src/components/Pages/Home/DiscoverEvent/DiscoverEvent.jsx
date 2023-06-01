import React from 'react';
import Titles from '../Titles/Titles';

import img1 from '../../../../assets/all-image/event-1.png';
import img2 from '../../../../assets/all-image/event-2.png';
import img3 from '../../../../assets/all-image/event-3.png';
import ImageSlick from './ImageSlick/ImageSlick';
import { Slide } from "react-awesome-reveal";

const DiscoverEvent = () => {

    const tag = 'Discover';
    const title = 'Our Food Items';
    const desc = 'An Italian food restaurant typically serves a variety of dishes inspired by Italian cuisine, including pasta dishes such as spaghetti, lasagna, and fettuccine alfredo, as well as pizza, antipasti, soups, salads, and desserts like tiramisu and gelato. Many Italian restaurants also offer wine and cocktails to complement the meals.';

    const images = [img1, img2, img3, img1, img2, img3];



    // console.log(Carousel);

    return (
        <div className='my-10' id='discover' >
            <div>
                <Titles tag={tag} title={title} desc={desc} />
            </div>
            <div>
               <Slide><ImageSlick images={images} /></Slide>
            </div>
        </div>
    );
};

export default DiscoverEvent;