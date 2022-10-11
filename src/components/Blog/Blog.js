import React from 'react';
import Footer from '../Footer/Footer';
import blog from './../../Images/blog.jpg';

const Blog = () => {
    return (
        <div>
            <div className='home-header'>
                <img className='img-fluid w-100' src={blog} alt="" />
                <div className='position-absolute top-0 text-white home-header-text'>
                    <h1 className='fw-bold fs-1'>Here You Can Learn.Let's Go.</h1>
                </div>
            </div>
            <div>
                <ol className='m-5 text-start'>
                    <li className='m-5'><h1 className='fs-4 fw-bold'>What is the purpose of React Router?</h1>
                        <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p></li>
                    <li className='m-5'><h1 className='fs-4 fw-bold'>How does context API work?</h1>
                        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    </li>
                    <li className='m-5'><h1 className='fs-4 fw-bold'>What is useHref?</h1>
                        <p>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the Link component in react-router-dom to see how it uses useHref internally to determine its own href value.</p></li>
                </ol>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;