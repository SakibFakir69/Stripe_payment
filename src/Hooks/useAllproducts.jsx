


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../apiManagement/useAxiosPublic'

function useAllproducts() {

    // use query take 2 
    /// key
    // fn
    // no need useefefct

    const useaxiosPublic = useAxiosPublic();


    const {data : products, isLoading, isError, error, refetch} = useQuery({

        queryKey: ['data'],
        queryFn: async ()=> {
            const res = await useaxiosPublic.get('/products')

            return res.data;
        }
        

    })



  return {products, isLoading, isError, error, refetch}
}

export default useAllproducts