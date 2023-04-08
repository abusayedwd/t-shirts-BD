import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
        const tshits = useLoaderData()
        // console.log(tshits)
        const [cart, setCart] = useState([])
        const addToCart = (tshirt) => {
                const exist = cart.find(ts => ts._id == tshirt._id)
                if (exist) {
                        toast('already existed')
                }
                else {

                        const newCart = [...cart, tshirt];
                        setCart(newCart)
                }
        }
        const removeCart = id => {
                // console.log(id)
                const remaining = cart.filter(ts => ts._id !== id)
                setCart(remaining)
        }
        return (
                <div className=' md:flex flex-col-1'>
                        <div className='grid grid-cols-1 ml-12 mt-8 text-center md:grid-cols-3 w-3/4'>
                                {
                                        tshits.map(tshirt => <Tshirt
                                                key={tshirt._id}
                                                tshirt={tshirt}
                                                addToCart={addToCart}
                                        ></Tshirt>)
                                }
                        </div>
                        <div className='bg-slate-300 w-[25%] '>
                                <Cart
                                        cart={cart}
                                        removeCart={removeCart}
                                ></Cart>
                        </div>
                </div>
        );
};

export default Home;