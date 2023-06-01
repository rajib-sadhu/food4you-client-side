import React from 'react';
import Projects from './Projects';
import './ImageSlick.css'
const ImageSlick = ({images}) => {
    return (
        <div className=''>
            <Projects images={images} />
        </div>
    );
};

export default ImageSlick;