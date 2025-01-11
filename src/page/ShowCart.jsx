import React from "react";
import { Link } from "react-router-dom";

function ShowCart({ data }) {
  const { price, name, image, category } = data;

  return (
    <div>
      <div>
        <img src={image} />
      </div>

      <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {name}
        </h3>

        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span class="font-bold text-gray-800 dark:text-gray-200">
            ${price}
          </span>
          <Link to={'/payment'}>
          <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
            Buy Now
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default ShowCart;
