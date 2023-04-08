 
import { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Granpa/Granpa';
 

const Unty = () => {
        const [money] = useContext(MoneyContext)
         
        return (
                <div  className='border-2 border-rose-400 h-72 w-72 rounded-lg'>
                        <h1>Unty</h1>
                        <section className='flex justify-center'>
                        <Cousin>habil</Cousin>
                        <Cousin>kabila</Cousin>
                      
                        </section>
                        <p className='bg-green-500 p-5 font-bold text-2xl'>money : {money}</p>
                </div>
        );
};

export default Unty;