import React from 'react';
import Titles from '../Titles/Titles';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Slide } from 'react-awesome-reveal';

const ReviewSection = () => {

    const reviews = [
        {
            id: 1,
            name: 'Rohit Shrama',
            image: 'https://opt.toiimg.com/recuperator/img/toi/m-69257289/69257289.jpg',
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate accusantium nostrum velit commodi atque ipsam repellat dicta cumque nemo nulla.'
        },
        {
            id: 2,
            name: 'Virat Kohli',
            image: 'https://www.cricket.com.au/-/media/2CF46473B1DA4AA5A30AC078804CA5DF.ashx',
            msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cupiditate quaerat in nemo perspiciatis ut nostrum vitae nulla dolorum accusantium.'
        },
        {
            id: 3,
            name: 'Vijay Sankar',
            image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322613.png',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nemo eveniet explicabo eius iure officia consequuntur placeat deserunt voluptates ipsum?'
        },
        {
            id: 4,
            name: 'Kedar Jadav',
            image: 'https://icccricketschedule.gumlet.io/wp-content/uploads/2018/04/kedar-jadav.jpg?compress=true&quality=80&w=640&dpr=2.6',
            msg: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex ad enim placeat dolor laborum tempora cum id aperiam inventore!'
        },
        {
            id: 5,
            name: 'Munaf Patel',
            image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322625.png',
            msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse corrupti cupiditate placeat voluptates quidem fugit, laboriosam blanditiis.'
        },
        {
            id: 6,
            name: 'Piyush Chawla',
            image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322200/322272.png',
            msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima asperiores sequi voluptatibus incidunt ut est ab, illo mollitia doloremque!'
        },
    ]




    const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.';
    const title = 'customers testimonials';

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='mb-10 w-full'>
            <Titles desc={desc} title={title} />
            <div className='grid md:grid-cols-3 grid-cols-1 2xl:w-2/3 md:w-4/5 w-full gap-5 mx-auto md:px-0 px-5'>
                {
                    (reviews.slice(3,6)).map(person => <ReviewCard key={person.id} person={person} />)
                }
            </div>

            <div className='bg-[#ffe001]' style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }} >

            </div>
            {/* <div className='px-[10rem] mx-auto'>
                <Carousel 
                responsive={responsive}
                autoPlay
                autoPlaySpeed={2000}
                rewind
                rewindWithAnimation
                arrows={false}
                >
                    {
                        reviews.map(person => <ReviewCard key={person.id} person={person} />)
                    }
                </Carousel>
            </div> */}

        </div>
    );
};


const ReviewCard = ({ person }) => {

    return (
        <Slide direction='down'>
            <div className='relative bg-slate-50 space-y-3 rounded-xl text-lg text-center shadow-xl'>
                <div className='bg-[#ffe001] py-5 space-y-3  rounded-t-xl'>
                <img className='md:w-20 w-12 md:h-20 h-12 border-4 object-top border-white bg-white mx-auto object-cover shadow-xl rounded-[50%]' src={person.image} alt="" />
                <h1 className='font-semibold text-[15px] mt-auto'>{person.name}</h1>
                </div>
                <p className='md:text-lg text-sm px-5 py-5' >{person.msg}</p>
            </div>
        </Slide>
    )
}



export default ReviewSection;