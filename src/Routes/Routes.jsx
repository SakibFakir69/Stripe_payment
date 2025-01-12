import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ShowProducts from "../component/ShowProducts";
import Cart from "../Cart/Cart";
import Payment from "../Payment/Payment";
import AccountLayouts from "../Layouts/AccountLayouts";
import Login from "../Account/Login";
import SignUp from "../Account/SignUp";
import PrivateRoute from "../Private/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <ShowProducts />,
      },
      {
        path: "/cart",
        element:<PrivateRoute><Cart/></PrivateRoute>
      },
      {
        path: "/payment",
        element: <PrivateRoute><Payment /></PrivateRoute>
      },

      //  login and signup
      {
        path: "/account",
        element: <AccountLayouts />,
        children: [
          { path: "/account/login", element: <Login /> },
          {
            path: "/account/signup",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);
