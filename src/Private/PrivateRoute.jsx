


import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {

  const {user , loading } = useAuth();
  console.log(loading,"from pivate route");


  if(loading)
  {
    return <p>Loading...</p>
  }
  if(user)
  {
    return children;
  }




  return <Navigate to={'/account/login'}/>
}

export default PrivateRoute