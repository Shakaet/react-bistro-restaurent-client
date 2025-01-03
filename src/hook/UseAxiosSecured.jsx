import axios from 'axios';
import React from 'react';

 let axiosSecure= axios.create({
    baseURL:"http://localhost:5000"
})

const UseAxiosSecured = () => {
    return axiosSecure
};

export default UseAxiosSecured;