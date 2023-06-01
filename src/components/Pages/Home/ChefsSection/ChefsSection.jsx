import React from 'react';
import Titles from '../Titles/Titles';
import ChefCard from './ChefCard';
import { useNavigation } from 'react-router-dom';
import Loader from '../../../Layout/Loader/Loader';

const ChefsSection = ({ data }) => {

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
        <div className='my-20' >
            <div>
                <Titles tag={'Tops Chefs'} title={'Italian Master Chefs'} desc={'Italian chefs are highly skilled culinary professionals who specialize in preparing and cooking Italian cuisine. They have extensive knowledge of Italian ingredients, flavors, and cooking techniques, and are passionate about creating authentic and delicious Italian dishes.'} />
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 md:w-[80%] md:px-0 px-5  mx-auto'>
                {
                    data.map(chef => <ChefCard key={chef.id} chef={chef} />)
                }
            </div>
        </div>
    );
};

export default ChefsSection;