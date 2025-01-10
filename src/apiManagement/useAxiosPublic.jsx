



import React from 'react'
import axios from 'axios'
const useaxiosPublic = axios.create({
    baseURL : 'http://localhost:5000/'
})

function useAxiosPublic() {

    return useaxiosPublic;







}

export default useAxiosPublic