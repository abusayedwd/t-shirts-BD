import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeCart }) => {
        // console.log(cart)
        let message;
        if (cart.length == 0) {
                message = <p>Please add some product</p>
        } else {
                message = <p>Welcome to added</p>
        }

        return (
                <div className='sticky top-0 mt-10'>
                        <h1 className= ' text-2xl text-sky-900 font-semibold text-center'>Order summary :{cart.length} </h1>
                        {cart.length > 2 ? <span >Brolooksss</span> :
                            <span className={cart.length===2?"blue":'yellow'}>fokira marka</span>
                        }
                        {message}
                        {
                      cart.length === 3 &&  <p>taka wala party</p>
                        }
                        {
                                cart.map(tshirt => <p className='text-xl text-center'>{tshirt.name}
                                        <button onClick={() => removeCart(tshirt._id)} className='bg-red-400 ml-3 px-3 py-0 rounded-lg mt-4'>X</button>
                                </p>)
                        }
                         

                </div>
        );
};

export default Cart;