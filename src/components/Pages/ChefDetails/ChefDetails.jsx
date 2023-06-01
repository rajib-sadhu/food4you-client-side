import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';


import { AiFillLike } from 'react-icons/ai';
import RecipesCard from './RecipesCard';
import Titles from '../Home/Titles/Titles';
import Loader from '../../Layout/Loader/Loader';

const ChefDetails = () => {
    window.scroll(0, 0)



    const details = useLoaderData();
    // console.log(details);

    const { name, image, likes, experience, description, numOfRecipes, recipes } = details;

    const load = useNavigation()
    // console.log(load)

    if (!load.state == 'idle') {
        return (
            <div>
                <Loader />
            </div>
        )
    }


    return (
        <div className='md:w-[70%] md:px-0 px-5 md:py-20 py-5 mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 bg-[#ffe100] shadow-2xl' >
                <div className='md:h-[35rem] h-[20rem] ' >
                    <img className='w-full h-full object-cover object-top' src={image} alt="" />

                </div>
                <div className='md:p-10 p-3 grid place-content-center'>
                    <div>
                        <h1 className='text-center md:text-4xl text-2xl font-bold uppercase mb-5'>{name}</h1>
                        <p>{description}</p>
                        <div className='grid grid-cols-2 pt-10 md:text-lg text-sm md:gap-y-6 gap-y-3'>
                            <p>Experience: <br /> <span className='md:text-3xl font-bold' >{experience} Years</span> </p>

                            <p>Number of recipes: <br /> <span className='md:text-3xl font-bold' >{numOfRecipes}+</span> </p>

                            <p>Likes: <AiFillLike className='inline-block ms-1 -mt-1 text-xl' /> <br /> <span className='md:text-3xl font-bold' >{likes}</span> </p>

                            <p>Top Recipes: <br />
                                <a className='font-semibold border-2 border-black md:px-4 px-2 md:py-1 py-[5px] inline-block mt-2 hover:bg-black hover:text-white md:text-base text-xs' href="#food">Watch Now</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id='food' className='mt-20'>

                <Titles title='TOP RECIPES' desc={description} />

                <div className='grid col-span-1 gap-10'>
                    {
                        recipes.map((item, i) => <RecipesCard key={i} item={item} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default ChefDetails;