import React from 'react';
import Nav from '../Shared/Nav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-white text-black'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;