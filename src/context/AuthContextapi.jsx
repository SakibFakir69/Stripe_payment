

import React, { createContext, useState } from 'react'
import { app } from '../Firebase/Firebaseconfig'



// create context 
export const MyContext  =createContext();

function AuthContextapi({children}) {
    const Auth = getAuth(app);
    // import from firebase

    const [ user , setuser ] = useState(null);
    const [ loading , setloading ] = useState(true);


    // create 




    const authInfo={
        user,setuser,loading,setloading
    }


  return (
    <div>
        <MyContext.Provider value={authInfo}>

            {children}
        </MyContext.Provider>






    </div>
  )
}

export default AuthContextapi