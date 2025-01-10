

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children:[

    ]
  },
  
]);


