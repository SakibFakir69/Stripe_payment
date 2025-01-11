

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import ShowProducts from '../component/ShowProducts';
import Cart from '../Cart/Cart';
import Payment from '../Payment/Payment';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children:[
       {
        path : '/',
        element : <ShowProducts/>
       },
       {
        path:'/cart',
        element : <Cart/>
       },
       {
        path: '/payment',
        element : <Payment/>
       }
    ]
  },
  
]);


