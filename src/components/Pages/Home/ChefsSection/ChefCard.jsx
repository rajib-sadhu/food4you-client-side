import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    return (
        <div className='rounded-xl overflow-hidden shadow-2xl'>
                    <div className='h-[25rem] w-full mx-auto ' >
                        <LazyLoadImage
                        loading='blur'
                        className='h-full w-full object-cover object-top' src={chef?.image}alt="" />
                    </div>
                    <div className=''>
                        <div className='backdrop-brightness-75 p-5' >
                        <h1 className='text-center text-xl font-semibold' >{chef?.name}</h1>
                        <div className='mt-6 grid grid-cols-2 gap-3 text-lg font-medium' >
                            <p className='' >Experience: {chef?.experience} years</p>
                            <p className='ms-auto' >Recipes: {chef?.numOfRecipes}</p>
                            <p className='' >Likes: {chef?.likes}</p>
                            <Link to={{
                                pathname:`/chef-details/${chef.id}`
                            }}
                             className='ms-auto bg-[#ffe100] hover:bg-[#dbc309] px-2 py-1 font-semibold'>
                                View Recipes
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
    );
};

export default ChefCard;