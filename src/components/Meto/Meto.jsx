import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Granpa/Granpa';
 

const Meto = () => {
        const ring =  useContext(RingContext)
        const [money] = useContext(MoneyContext)
        return (
                <div>
       <p className='text-xl text-green-500'>give me: {ring}</p>
       
       <p className='bg-green-500 p-5 mb-2 text-2xl font-bold'>money: {money}</p>
                </div>
        );
};

export default Meto;