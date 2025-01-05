import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider';

 let axiosSecure= axios.create({
    baseURL:"http://localhost:5000"
})

const UseAxiosSecured = () => {

    let navigate= useNavigate()

    let {signOuts}= useContext(AuthContext)

    // request interceptor to add authorization header for every secure call to the api

    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent

        let token=localStorage.getItem("access-token")
        // console.log("request config by interceptors",token)
        config.headers.authorization=`Bearer ${token}`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });



      // intercepts 401 and 403 status

      axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async function (error) {


        let status=error.response.status

        console.log("status code",status)
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        // for 401 or 403 logout the user and move the user to the login pages
        if(status=== 401 || status=== 403){
            
            await signOuts()
            navigate("/login")
        }
        return Promise.reject(error);
      });





    return axiosSecure
};

export default UseAxiosSecured;