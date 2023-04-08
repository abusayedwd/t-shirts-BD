import React from 'react';

const Tshirt = ({tshirt,addToCart}) => {
        //  console.log(tshirt)
         const {gender, name , index, picture, price, _id} = tshirt;
        return (
                <div className='mx-auto' >
                    {
                        <div className='rounded-sm  border mt-5'>
                   <img className='md:h-72 p-10 w-full    h-[90%] mx-auto  md:w-64 mt-8' src={picture} alt="" />
                   <h1 className='text-2xl mb-3'>{name}</h1>
                   <p>price: {price}</p>
                   <button onClick={()=>addToCart(tshirt)} className='bg-gray-300 px-5 y-2 text-xl font-bold rounded-xl hover:bg-cyan-500 mt-3 w-[80%]'>Buy Now</button>
                        </div>
                    }    
                </div>
        );
};

export default Tshirt;