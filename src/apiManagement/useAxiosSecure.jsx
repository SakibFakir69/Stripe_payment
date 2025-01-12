

import React from 'react'
import axios from 'axios'


const useaxiosSecure = axios.create({
    baseURL : 'http://localhost:5000'
})


function useAxiosSecure() {

    axios.interceptors.request.use((config)=>{
        console.log("api reqested",config)

        return config;
    },(error)=>{
        return Promise.reject(error)
    })


    // response api 

    axios.interceptors.response.use((response)=>{

        console.log('intercepector req ',response)

        return response

    },(error)=>{
        return Promise.reject(error);
    })


    return useaxiosSecure;





}

export default useAxiosSecure