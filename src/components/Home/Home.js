import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import header from './../../Images/header.jpg';
import Topic from './../Topic/Topic';
import './Home.css'
const Home = () => {
    const quiz = useLoaderData();
    const topics = quiz.data;
    return (
        <div>
            <div className='home-header'>
                <img className='img-fluid w-100' src={header} alt="" />
                <div className='position-absolute top-0 text-white home-header-text'>
                    <h1 className='fw-bold fs-1'><small>Hello!There.</small>Welcome to This Website</h1>
                    <p className='fw-bold fs-1'><small className='text'>Let</small>'s Take Your Skill Test</p>
                </div>
            </div>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
            <Footer></Footer>

        </div>
    );
};

export default Home;