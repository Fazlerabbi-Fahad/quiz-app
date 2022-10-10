import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    console.log(topic);
    return (
        <div>
            <div className='container mt-5'>
                <div className="card mb-3">
                    <div className="row g-0 p-5 home-card">
                        <div className="col-md-6 home-img">
                            <img src={logo} className="img-fluid rounded-start w-50" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h1 className="card-title fw-bold">{name}</h1>
                                <p className="card-text fs-5">I hope you are a great learner. You know a lots of thing about {name}.Let's check it.We can shine together.</p>
                                <button className='btn btn-secondary'>
                                    <Link className='text-decoration-none text-white' to={`quiz/${id}`}>Let's Go</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Topic;