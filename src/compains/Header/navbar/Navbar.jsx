import './style-navbar.css'
import React, { useEffect } from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const distanceFromTop = navbar.offsetTop;

            if (window.pageYOffset > distanceFromTop) {
                navbar.classList.add('fixed');
            } else {
                navbar.classList.remove('fixed');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="navbar">
            <ul>
                <NavLink className='button' to={'/react-apple'}>Home</NavLink>
                <NavLink className='button' to={'/react-apple/information'}>Informations</NavLink>
                <NavLink className='button' to={'/react-apple/products'}>Products</NavLink>
            </ul>
        </div>
    );
};

export default Navbar;
