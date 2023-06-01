import React from 'react';
import Lottie from 'lottie-react';
import loadingImage from '../../../assets/loading.json';

const Loader = () => {
    return (
        <div className='grid place-content-center h-screen' >
             <div className='w-32' >
             <Lottie animationData={loadingImage} />
             </div>
        </div>
    );
};

export default Loader;