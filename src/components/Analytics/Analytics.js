import React from 'react';
import { useLoaderData } from 'react-router-dom';
import analytics from './../../Images/analytics.jpg';
import './Analytics.css';
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, ResponsiveContainer, Tooltip } from 'recharts';
import Footer from '../Footer/Footer';


const Analytics = () => {
    const quiz = useLoaderData();
    const topics = quiz.data;
    console.log(topics);


    return (
        <div>
            <div className='anlytic-header'>
                <img className='img-fluid w-100' src={analytics} alt="" />
                <div className='position-absolute top-0 text-white home-header-text'>
                    <h1 className='fw-bold fs-1'>Let's show some graphs and charts.</h1>
                </div>
            </div>


            <div className='m-5 p-5 analyics-session'>
                <LineChart
                    width={900}
                    height={500}
                    data={topics}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Analytics;