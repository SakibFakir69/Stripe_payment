


import React, { useContext } from 'react'
import { MyContext } from '../context/AuthContextapi'

function useAuth() {

    const conext = useContext(MyContext);




  return conext;
}

export default useAuth