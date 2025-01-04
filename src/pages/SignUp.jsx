import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../hook/UseAxiosPublic';
import SocialLogin from '../component/SocialLogin';

const SignUp = () => {

         let {createRegistered,updateUserProfile}= useContext(AuthContext)

         let nav= useNavigate()

         let  axiosPublic =UseAxiosPublic()


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    
  const onSubmit = (data) => {

    console.log(data)
    createRegistered(data.email,data.password)
    .then(result=>{
      let loggedUser=result.user
      console.log(loggedUser)
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{

        let userInfo={
          name:data.name,
          email:data.email
        }

        axiosPublic.post("/users",userInfo)
        .then(res=>{
          console.log(res.data)
        })
         reset()
        Swal.fire({
          title: "Profile Updated Successful!",
          icon: "success",
          draggable: true
        });

        nav("/")
      })

    })
}



   
    return (
        <div>
          <Helmet>
                  <title>Sign Up Pages</title>
                            
                </Helmet>
            <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" required />
          {errors.name && <span className='text-red-700 font-bold mt-2'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" required />
          {errors.PhotoURL && <span className='text-red-700 font-bold mt-2'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",{ required: true })} name='email' placeholder="email" className="input input-bordered" required />
          {errors.email && <span className='text-red-700 font-bold mt-2'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{ required: true })} name='password' placeholder="password" className="input input-bordered" required />
          {errors.password && <span className='text-red-700 font-bold mt-2'>This field is required</span>}
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
        
      </form>
      <div className='mx-auto'>
      <SocialLogin></SocialLogin>
      </div>
      <p className='text-center mb-4 font-bold text-xl'><small>Already have an Account? <Link className='text-blue-600' to={"/login"}>Please login</Link></small></p>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SignUp;