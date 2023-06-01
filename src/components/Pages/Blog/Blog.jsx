import React from 'react';
// import Pdf from "react-to-pdf";
import flower from '../../../assets/all-image/Flower-icon.png';
// import { NewsBlogCard } from '../Home/NewsSection/NewsSection';

// const ref = React.createRef();


// import { Document, Page } from 'react-pdf';

const Blog = () => {



    return (
        <div className='bg-white text-black pb-20' >

            <div className='space-y-2 text-[#6e6e6e] text-center mx-auto py-20'>
                <h2 className='text-3xl uppercase'><span className='font-semibold text-[#464646]'>OUR LATEST </span> BLOGS</h2>
                <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    <img src={flower} alt="" />
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                </div>
                <button className='bg-[#ffe100] font-bold px-3 py-1 text-black hover:bg-[#dbc30c] rounded-md' >
                    {/* <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                    </Pdf> */}
                    Generate PDF
                </button>
            </div>



            <div className='grid md:grid-cols-2 grid-cols-1 md:w-[70%] mx-auto gap-10' >

                <div className='p-5 bg-slate-100 rounded-md' >
                    <h1 className='text-2xl font-semibold' >
                        1. Tell us the differences between uncontrolled and controlled components.
                    </h1>
                    <p className='mt-5' >
                        <b>Controlled component:</b> In a controlled component, the value of the input element is controlled by
                        React. We store the state of the input element inside the code, and by using event-based
                        callbacks, any changes made to the input element will be reflected in the code as well.
                        <br /><br />
                        <b>Uncontrolled component:</b> In an uncontrolled component, the value of the input element is
                        handled by the DOM itself. Input elements inside uncontrolled components work just like normal
                        HTML input form elements
                    </p>

                </div>

                <div className='p-5 bg-slate-100 rounded-md' >
                    <h1 className='text-2xl font-semibold' >
                        2. How to validate React props using PropTypes.
                    </h1>
                    <p className='mt-5' >
                        React PropTypes is a built-in typechecking feature in React that allows you to verify the types of data being passed to components as props. To validate React props using PropTypes
                    </p>

                </div>

                <div className='p-5 bg-slate-100 rounded-md' >
                    <h1 className='text-2xl font-semibold' >
                        3. Tell us the difference between nodejs and express js.
                    </h1>
                    <p className='mt-5' >
                        Node.js and Express.js are both JavaScript-based technologies that are used for building web applications, but they serve different purposes.
                        <br /> <br />
                        <b>Node.js</b> is a server-side runtime environment that allows developers to use JavaScript on the server-side to build scalable, high-performance applications.
                        <br /> <br />
                        <b>Express.js</b> is a web application framework that runs on top of Node.js. It provides a set of features for building web applications, such as routing, middleware, and templating, that simplifies the process of building web applications with Node.js. Express.js is often used as a back-end framework for building RESTful APIs or web applications that use a database.
                    </p>

                </div>

                <div className='p-5 bg-slate-100 rounded-md' >
                    <h1 className='text-2xl font-semibold' >
                        4. What is a custom hook, and why will you create a custom hook?
                    </h1>
                    <p className='mt-5' >
                        a custom hook is a function that uses the built-in React hooks to provide some reusable functionality. Custom hooks allow developers to abstract away common logic that is used across multiple components and create modular, reusable code.
                        A custom hook can be created for any functionality that can be shared across multiple components, such as data fetching, form handling, and state management.


                    </p>

                </div>


            </div>

        </div>
    );
};

export default Blog;