import React from 'react';

import BannerSection from './BannerSection/BannerSection';
import Menus from './MenuSection/Menus';
import DiscoverEvent from './DiscoverEvent/DiscoverEvent';
import TrendingItem from './TrendingItem/TrendingItem';
import BookTable from './BookTable/BookTable';
import ReviewSection from './ReviewSection/ReviewSection';
import ChefsSection from './ChefsSection/ChefsSection';
import { useLoaderData, useLocation, useNavigation } from 'react-router-dom';
import Loader from '../../Layout/Loader/Loader';

const Home = () => {

    window.scroll(0,0)

    const data = useLoaderData();
    // console.log(data)

    const load = useNavigation()
    console.log(load)

    if (!load.state == 'idle') {
        return (
            <div>
                <Loader />
            </div>
        )
    }

    return (
        <div>
            <BannerSection />
            <div className=''>
                {/* <Menus />*/}
                <ChefsSection data={data} />
                <DiscoverEvent />
                <TrendingItem />
                <BookTable />
                {/* <ReviewSection/> */}
            </div>
        </div>
    );
};

export default Home;