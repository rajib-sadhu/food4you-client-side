import React from 'react';
import './BookTable.css'
import Titles from '../Titles/Titles';


const BookTable = () => {
    return (
        <div className='md:mt-[94px] md:mb-[100px] w-full p-5' id='bookTable'>
            {/* <div className='text-center uppercase space-y-[28px]'>
                <h1
                className='text-2xl font-bold tracking-wider'
                >Reservation</h1>
                <h2
                className='text-6xl'
                style={{
                    fontFamily:'Fredericka the Great'
                }}
                >Book your table</h2>
            </div> */}
            <Titles title={'Book your table'} tag={'Reservation'} />
            <form className='mx-auto md:mt-[90px] mt-10 grid md:grid-cols-2 grid-cols-1 md:w-[787px] md:gap-[30px] gap-5' action="">
                <input className='table-input' type="text" placeholder='Name' />
                <input className='table-input' type="text" placeholder='Email' />
                <input className='table-input' type="text" placeholder='Date' />
                <input className='table-input' type="text" placeholder='Time' />
                <input className='table-input' type="text" placeholder='People' />
                <input type="submit" value='find a table' 
                className='table-input cursor-pointer uppercase bg-[#ffe001] duration-200 hover:bg-[#caba3d] font-bold'
                style={{
                    border:'none'
                }}
                />
            </form>
        </div>
    );
};

export default BookTable;