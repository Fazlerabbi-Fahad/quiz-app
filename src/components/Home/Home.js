import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import header from './../../Images/header.jpg';
import './Home.css';

const Home = () => {
    const quiz = useLoaderData();
    const topics = quiz.data;

    return (
        <div>
            <div className='home-header'>
                <img className='img-fluid w-100' src={header} alt="" />
                <div className='position-absolute top-0 text-white home-header-text'>
                    <h1 className='fw-bold fs-1'><small>Hello!There</small><br></br>Programmer Buddies</h1>
                    <h2 className='fw-bold fs-1'><span className='text'>Are you read</span>y to test your skill?</h2>
                </div>
            </div>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
            <div>
                <footer>  <div class="card-footer m-5">
                    @<i class="fa fa-copyright" aria-hidden="true">Copyright 2022 Fazle Rabbi Fahad.</i>
                </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;