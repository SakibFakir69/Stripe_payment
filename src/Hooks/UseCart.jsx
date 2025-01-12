


import React from 'react'
import useAxiosPublic from '../apiManagement/useAxiosPublic'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../apiManagement/useAxiosSecure';
import useAuth from './useAuth';
import { data } from 'react-router-dom';

function UseCart() {

    const useaxiosSecure = useAxiosSecure();
  

    const {data : cart=[] , isLoading, isError,error} = useQuery({

        queryKey: ['cart'],
        queryFn :async ()=>{
            const res = await useaxiosSecure.get('/carts');
            return res.data;
        }
    })




  return {cart, isLoading, isError,error};
}

export default UseCart