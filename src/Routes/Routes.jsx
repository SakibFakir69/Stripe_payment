

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import ShowProducts from '../component/ShowProducts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children:[
       {
        path : '/',
        element : <ShowProducts/>
       }
    ]
  },
  
]);


