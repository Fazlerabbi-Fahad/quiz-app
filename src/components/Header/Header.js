import React from 'react';
import './Header.css';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';


const Header = () => {
    return (
        <div>
            <div className='container position-absolute d-flex justify-content-between mt-3 ms-5 ps-5'>
                <div className='d-flex'>
                    <QuestionMarkCircleIcon className="icon m-1 text-white"></QuestionMarkCircleIcon>
                    <h2 className='fw-bold text-white'>SKILLText</h2>
                </div>
                <Nav className="justify-content-center fw-bold nav-text" activeKey="/">
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to='/'>Home</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to='/analytics'>Analytic</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/blog'>Blog</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div >
        </div >
    );
};

export default Header;