import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
        return (
                <div className=' '>
        <nav className='mr-4  bg-gray-400 p-4 flex justify-center w-full'>

                <Link className='mr-8 font-bold text-2xl' to="/">Home</Link>
                <Link className='mr-8 font-bold text-2xl' to="/order">Order</Link>
                <Link className='mr-8 font-bold text-2xl' to="/contact">Contact</Link>
                <Link className='mr-8 font-bold text-2xl' to="/granpa">Granpa</Link>
                <Link className='mr-8 font-bold text-2xl' to="/about">About</Link>
                        </nav>
                </div>
        );
};

export default Header;