import React, { useContext } from 'react';
import { AuthContext } from '../Provider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UseAxiosSecured from '../hook/UseAxiosSecured';

const FoodCard = ({item}) => {

    let {name,image,price,recipe,_id}=item

    let axiosSecure= UseAxiosSecured()

  
    let {user}= useContext(AuthContext)
    let navigate=useNavigate()

    let location= useLocation()


    let handleFoodCart=(food)=>{

      console.log(food, user?.email)

      if(user && user?.email){
        // Todo: 

        let cartItem={
          menuId:_id,
          email:user?.email,
          name,image,price
        }

        axiosSecure
  .post('/carts', cartItem)
  .then((response) => {
    console.log('Server Response:', response.data);

    if(response.data.insertedId){
      Swal.fire("cartData Inserted!");
    }
  })
  .catch((error) => {
    console.error('Error posting data:', error.response ? error.response.data : error.message);
  });
      }
      else{
        Swal.fire({
          title: "You Are not Logged In?",
          text: "Please login to add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login",{state:{from:location}})
          }
        });
      }

    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white text-center'>${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleFoodCart(item)} className="btn btn-outline border-0 border-b-4 mt-5 text-black bg-slate-100 border-orange-400">Add to Card</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;