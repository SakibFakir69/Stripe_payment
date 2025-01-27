import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebaseconfig";
import useAxiosPublic from "../apiManagement/useAxiosPublic";
import useAxiosSecure from "../apiManagement/useAxiosSecure";

// create context
export const MyContext = createContext();

function AuthContextapi({ children }) {
  // import from firebase
  const Auth = getAuth(app);


  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  // store user in database and ck user aleady have or no
  // no then insert insert
  /// or update time

  // create google email password login

  const createemailPasswordsingupButton = (email, password) => {

    return createUserWithEmailAndPassword(Auth, email, password);


  };

  // login with email aand password

  const loginButtonhandle = (email,password)=>{

    return signInWithEmailAndPassword(Auth,email,password);


  }

  // logout 

  const logoutfromNav = ()=>{
    return signOut(Auth);
  }



  const authInfo = {
    user,
    setuser,
    loading,
    setloading,
    createemailPasswordsingupButton,
    loginButtonhandle,
    logoutfromNav
    
  };

  const useaxiosPublic = useAxiosPublic();
  console.log(loading,user);







  // onAuthcnged

  useEffect(()=>{

    const unscribe =onAuthStateChanged(Auth,(currentUser)=>{

      if(currentUser)
      {
        setuser(currentUser);
        useaxiosPublic.post('/signin')
        .then((res)=>{
          const token = res.data?.token;

         if(token)
         {
          localStorage.setItem('jwtToken' , token);
         }else{
          console.log("token not founed")
         }
        })

        



      }else{

        useaxiosPublic.get('/logout')
        .then((res)=>{
          localStorage.removeItem('jwtToken')
        })
        setloading(false);
      }



  
    


    })

    return unscribe;

  },[useaxiosPublic,Auth]);





  return (
    <div>
      <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>
    </div>
  );
}

export default AuthContextapi;
