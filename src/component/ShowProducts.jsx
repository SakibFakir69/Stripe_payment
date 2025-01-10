


import React from 'react'
import useAllproducts from '../Hooks/useAllproducts'
import ShowallProducts from '../page/ShowallProducts';

function ShowProducts() {
    const {products, isLoading, isError, error, refetch} = useAllproducts();
    console.log(products);


    if(isLoading)
    {
        return <p>loading...</p>

    }
    if(isError)
    {
        return <p className='text-red-500'>{error}</p>
    }


  return (
    <div className='grid md:grid-cols-4 gap-4'>
     {
        products.map((item)=> <ShowallProducts data={item} key={item._id}/>)
     }
        



    </div>
  )
}

export default ShowProducts