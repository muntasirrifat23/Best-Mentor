import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navOption = <>
        <li style={{textDecoration:'underline'}}><Link to='/'>University</Link></li>
        <li style={{textDecoration:'underline'}}><Link to='/mentor'>Mentor</Link></li>
        
    </>
    return (
        <div>
            <div className="navbar bg-white text-black" >
                <div className="navbar-start">
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-1 font-semibold text-xl " >
                        {navOption}
                       </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </div>
    );
};

export default Nav;