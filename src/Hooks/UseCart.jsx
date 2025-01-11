


import React from 'react'
import useAxiosPublic from '../apiManagement/useAxiosPublic'
import { useQuery } from '@tanstack/react-query';

function UseCart() {

    const useaxiosPublic = useAxiosPublic();

    const {data : cart=[] , isLoading, isError,error} = useQuery({
        queryKey: ['data','sakib'],
        queryFn :async ()=>{
            const res = await useaxiosPublic.get('/carts');
            return res.data;
        }
    })



  return {cart, isLoading, isError,error};
}

export default UseCart