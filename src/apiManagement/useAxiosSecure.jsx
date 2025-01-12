

import React from 'react'
import axios from 'axios'
import useAuth from '../Hooks/useAuth'


const useaxiosSecure = axios.create({
    baseURL : 'http://localhost:5000'
})


function useAxiosSecure() {

    // to manage cart 
    const {setloading ,loading} = useAuth();
    console.log(loading, "from secure")

    useaxiosSecure.interceptors.request.use((config)=>{
        console.log("api reqested",config)

        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
           
          }
         



        return config;
    },(error)=>{
        return Promise.reject(error)
    })


    // response api 

    useaxiosSecure.interceptors.response.use((response)=>{
        
        console.log('intercepector req ',response)

        return response

    },(error)=>{
        return Promise.reject(error);
    })


    return useaxiosSecure;





}

export default useAxiosSecure