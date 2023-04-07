import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
        const tshits = useLoaderData()
        console.log(tshits)
        return (
                <div>
     <h2 className='text-7xl mr-8 font-bold'>this is home : {tshits.length}</h2>
                </div>
        );
};

export default Home;