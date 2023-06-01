import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import Rating from 'react-rating';

import toast from 'react-hot-toast';


import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const RecipesCard = ({ item }) => {

    const [isFav, setIsFav] = useState(false)

    return (
        <div className=' min-h-[20rem] w-full grid md:grid-cols-3 grid-cols-1 bg-slate-100 rounded-2xl overflow-hidden shadow-xl'>
            <div className='md:col-span-1 relative'>
                <img className='h-full w-full object-cover' src={item?.image} alt="" />
                <button
                    onClick={() => {setIsFav(true) 
                        toast(`${item?.name} -  add on your favorite list!`)}}
                    className='absolute top-5 left-5 text-3xl'
                    disabled={isFav}
                >
                    {
                        isFav ? <FcLike /> : <FcLikePlaceholder />
                    }
                </button>
                <p className='absolute bottom-0 right-3' >
                    <Rating
                        className='text-xl'
                        placeholderRating={item?.rating}
                        emptySymbol={<AiFillStar className='text-white' />}
                        placeholderSymbol={<AiFillStar className='text-yellow-500' />}
                        readonly
                        fullSymbol={<AiFillStar />}
                    />
                    {/* {item?.rating} */}
                </p>
            </div>
            <div className='md:col-span-2 md:px-10 px-2 py-5 space-y-2'>
                <h1 className='text-xl uppercase font-bold'>{item?.name}</h1>
                <p>{item?.description}</p>

                <div className='grid grid-cols-2'>
                    <div className='space-y-2'>
                        <h3 className='text-lg font-semibold' >Ingredients:</h3>
                        <div>
                            {
                                (item.ingredients).map((v, i) => <li key={i} >{v}</li>)
                            }
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='text-lg font-semibold' >Ingredients:</h3>
                        <div>
                            {
                                (item.instructions).map((v, i) => <li key={i} style={{
                                    listStyle: 'order-list'
                                }} >{v}</li>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesCard;