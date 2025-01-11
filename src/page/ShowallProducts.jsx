import axios from "axios";
import React from "react";
import useAxiosPublic from "../apiManagement/useAxiosPublic";

function ShowallProducts({ data }) {
  const { category, image, name, price, _id } = data;

  // import use axios public then insert cart


  const useaxiosPublic  = useAxiosPublic();




  const handleCartButton = (item) => {
    const cart = {
      category: item.category,
      image: item.image,
      name: item.name,
      price: item.price,
      email :'sakibfakir69'
    };

    // post 

    useaxiosPublic.post('/cart',cart)
    .then((res)=>{
      if(res.data.insertedId

      )
      {
        alert("done");
      }
      console.log(res.data);
    })

    



  

    // here use post req for item add on cart section
  };

  return (
    <div>
      <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto border p-4 rounded-md shadow-lg mt-6">
        <img src={image} />

        <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {name}
          </h3>

          <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span class="font-bold text-gray-800 dark:text-gray-200">
              ${price}
            </span>
            <button
              class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
              onClick={() => handleCartButton(data)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowallProducts;
