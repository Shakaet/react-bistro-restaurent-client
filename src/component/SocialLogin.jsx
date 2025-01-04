import React, { useContext } from 'react';
import { FaGooglePlusG } from 'react-icons/fa';
import { AuthContext } from '../Provider';
import {  useLocation, useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../hook/UseAxiosPublic';

const SocialLogin = () => {


    let {goggleLogin}= useContext(AuthContext)

    let  axiosPublic= UseAxiosPublic()

    let location= useLocation()

      let navigate= useNavigate()
      let from= location.state?.from?.pathname || "/"

    let gogglelogin=()=>{
        goggleLogin()
        .then((result) => {
            const user = result.user;
            console.log(user.displayName,user.email)

            let userInfo={
                name:user?.displayName,
                email:user?.email
              }
      
              axiosPublic.post("/users",userInfo)
              .then(res=>{
                console.log(res.data.message)
              })


            navigate(from,{replace:true})

          }).catch((error) => {
           
          });
    }


    return (
        <div>


             <div className="divider"></div>
            

            <button onClick={gogglelogin} className="btn btn-info mb-3"><FaGooglePlusG></FaGooglePlusG> Google</button>
        </div>
    );
};

export default SocialLogin;