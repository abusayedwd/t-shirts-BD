import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';

export const RingContext = createContext("Gold")
export const MoneyContext = createContext(0)
const Granpa = () => {
        const [money, setMoney] = useState(0)
        return (
     <div className='text-center w-4/5 mx-auto mt-5 h-96 border-4 border-sky-600 rounded-xl'>
                        <h1>granpaaawwwwooo</h1>
                        <p className='bg-green-500 p-3 font-bold text-xl'>granpa money:{money}</p>
                        <MoneyContext.Provider value={[money, setMoney]}>
                        <RingContext.Provider value='golden ring'>
                       <section className='flex h-32 p-4 justify-around'>
                                <Father></Father>
                                <Uncle></Uncle>
                                <Unty></Unty>
                        </section>
                       </RingContext.Provider>
                        </MoneyContext.Provider >
                </div>
        );
};

export default Granpa;