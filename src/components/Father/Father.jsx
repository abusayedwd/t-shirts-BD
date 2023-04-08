import React from 'react';
import Myself from '../Myselt/Myself';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = () => {
        return (
                <div className='border-2 border-rose-400 h-72 w-96 rounded-lg'>
                        <h1>father</h1>
                       <section className='flex p-2 justify-center items-center gap-3 mt-3'>
                       <Myself></Myself>
                        <Sister></Sister>
                        <Brother></Brother>
                       </section>
                </div>
        );
};

export default Father;