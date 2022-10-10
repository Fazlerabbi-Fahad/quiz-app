import React from 'react';
import analytics from './../../Images/analytics.jpg';
import './Analytics.css';

const Analytics = () => {
    return (
        <div>
            <div className='home-header bg-dark'>
                <img className='img-fluid w-100 opacity-25' src={analytics} alt="" />
                <div className='position-absolute top-0 text-white home-header-text'>
                    <h1 className='fw-bold fs-1'>Let's Learn Some Graphs and Chart</h1>
                    <h2 className='fw-bold fs-1'>Are you ready to test your skill?</h2>
                </div>
            </div>
        </div>
    );
};

export default Analytics;