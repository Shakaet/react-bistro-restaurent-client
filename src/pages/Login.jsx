import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';



const Login = () => {

   
    let [disabled,setDesabled]= useState(true)

    let {loginSetup}=useContext(AuthContext)

    let navigate=useNavigate()

    let location= useLocation()


    let from= location.state?.from?.pathname || "/"

    let handleLogin=(e)=>{
        e.preventDefault()

        let email=e.target.email.value
        let password=e.target.password.value
        console.log(email,password)

        loginSetup(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
           
         
            // SweetAlert to show success message
            Swal.fire({
              title: "Login Successful!",
              text: `Welcome back, ${user.email}!`,
              icon: "success",
              confirmButtonText: "OK",
              draggable: true
          });

          navigate(from,{replace:true})
      })
         

    }


    let handleCaptcha=(e)=>{
        let user_captcha_value= e.target.value

        if (validateCaptcha(user_captcha_value)==true) {
            setDesabled(false)
        }
   
        else {
            setDesabled(true)
        }
    }


    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    return (
        <div>

          <Helmet>
                  <title>Login Pages</title>
                  
                </Helmet>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            
          <LoadCanvasTemplate />

          </label>
          <input type="text"  onBlur={handleCaptcha}  name='captcha' placeholder="type captcha" className="input input-bordered" required />
           
        </div>
        
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center mb-4 font-bold text-xl'><small>New Here? <Link className='text-blue-600' to={"/signUp"}>Create an Account</Link></small></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;