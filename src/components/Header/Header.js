import React from 'react';
import logo from '../../images/logo.png';
import './header.css'
const Header = () => {
    return (
        <div className="main">
            <img src={logo} alt=""/>
            <div className='nav'>
                <a href="/course">Course</a>
                <a href="/shop">Shop</a>
                <a href="/instructor">Instructor</a>
            </div>
        </div>
    );
};

export default Header;