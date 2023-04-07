import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
        return (
                <nav className='mr-4'>
                         
                        <Link className='mr-8 font-bold text-2xl' to = "/">Home</Link>
                        <Link className='mr-8 font-bold text-2xl' to = "/order">Order</Link>
                        <Link className='mr-8 font-bold text-2xl' to = "/contact">Contact</Link>
                        <Link className='mr-8 font-bold text-2xl' to = "/about">About</Link>
                </nav>
        );
};

export default Header;