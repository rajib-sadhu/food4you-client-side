import React from 'react';

const Titles = ({ title = '', desc = '', tag = '' }) => {
    return (

        <div className='md:w-[1050px] text-center mx-auto md:mb-[60px] mb-2 md:space-y-[34px] space-y-3 p-3'>
            <h1
                className='text-2xl font-bold tracking-wider uppercase'
            >
                {tag}
            </h1>

            <h1
                className='md:text-5xl text-2xl uppercase'
                style={{
                    fontFamily: 'Fredericka the Great'
                }}
            >{title}</h1>

            <p className='md:text-lg text-sm'>{desc}</p>
        </div>

    );
};

export default Titles;