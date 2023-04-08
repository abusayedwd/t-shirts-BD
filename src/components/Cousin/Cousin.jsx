import React from 'react';

const Cousin = ({children}) => {
        return (
                <div className='border-2 rounded-lg border-fuchsia-600 text-center m-3 p-2'>
                         <h1>Cousin</h1>
                        <h1>{children}</h1> 
                </div>
        );
};

export default Cousin;