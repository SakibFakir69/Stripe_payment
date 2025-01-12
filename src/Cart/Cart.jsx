


import React from 'react'
import UseCart from '../Hooks/UseCart'
import ShowCart from '../page/ShowCart';

function Cart() {

  const {cart, isLoading, isError,error} = UseCart();
  console.log(cart,"def");
  console.log(cart,"cart")

  if(isLoading)
  {
    return <p>loadin .. load</p>
  }

 

  return (
    <div>
      <div className='text-center'>
        <p>Your added cart number : {cart.length}</p>
      </div>
      {/* pass cart another componenent */}

     <div className='grid md:grid-cols-3'>
       {
        cart.map((item)=> <ShowCart data={item} key={item._id}/>)
      }

      </div>

    </div>
  )
}

export default Cart