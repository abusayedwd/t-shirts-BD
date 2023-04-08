import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Granpa/Granpa';

const Uncle = () => {
        const [money, setMoney] = useContext(MoneyContext)
        return (
                <div className='border-2 border-rose-400 h-72 w-72 rounded-lg'>
                        <h1>Unclee</h1>
                        <p className='bg-green-500 p-5 mb-2 text-2xl font-bold'>money: {money}</p>
                        <button className='bg-sky-500 px-6 py-2 rounded-lg' onClick={() => setMoney(money+1000)}>send 1000tk</button>
                        <section className='flex justify-center'>
                        <Cousin>nabil</Cousin>
                        <Cousin>nabilaaa</Cousin>
                        </section>
                </div>
        );
};

export default Uncle;