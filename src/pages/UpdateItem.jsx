import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SharedTitle from '../shared/SharedTitle';
import UseAxiosPublic from '../hook/UseAxiosPublic';
import UseAxiosSecured from '../hook/UseAxiosSecured';
import Swal from 'sweetalert2';

let image_hosting_key=import.meta.env.VITE_Image_Hosting_Key

let image_hosting_API =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {


    let {id}= useParams()

   let {name,category,recipe,price}= useLoaderData()

   console.log(name)

  

   const [formData, setFormData] = useState({
    recipeName: "",
    category: "",
    price: "",
    details: "",
    file: null,
  });

  let axiosPublic= UseAxiosPublic()

  let axiosSecure=UseAxiosSecured()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Recipe added successfully!");

    

    // upload image in imgbb and get an url

    let imageFiles={image:formData.file}

    let res= await axiosPublic.post(image_hosting_API,imageFiles,{

        headers: {
            "Content-Type": "multipart/form-data", // Explicitly set content type
          },
    });
   
    if(res.data.success){

        let menuItem={
            name:formData.recipeName,
            category:formData.category,
            price:parseFloat(formData.price),
            recipe:formData.details,
            image:res.data.data.display_url


        }
        console.log("menu",menuItem)


        let menuResponse= await axiosSecure.put(`/menu/${id}`,menuItem)
          console.log(menuResponse.data)
          if(menuResponse.data.modifiedCount>0){
            
            Swal.fire({
              title: "Menu Item Updated successfully!",
              icon: "success",
              draggable: true
            });
          }




    }

}



    return (
        <div>
          <SharedTitle heading={"Update Item"} subheading={"Refresh Info"}></SharedTitle>

          <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="recipeName">
                            Recipe Name
                        </label>
                        <input
                            type="text"
                            id="recipeName"
                            name="recipeName"
                           
                            value={formData.recipeName || name || ""}
                            onChange={handleChange}
                            placeholder="Enter recipe name"
                            className="w-full px-4 py-3 rounded-lg border-2 border-white text-black focus:outline-none focus:border-blue-600"
                            required
                        />
                        </div>
                        <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="category">
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category || category}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border-2 border-white text-black focus:outline-none focus:border-blue-600"
                            required
                        >
                            <option value="" disabled>
                            Select category
                            </option>
                            <option value="Dessert">Dessert</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Salad">Salad</option>
                            <option value="Soup">Soup</option>
                        </select>
                        </div>
                        <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="price">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price || price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="w-full px-4 py-3 rounded-lg border-2 border-white text-black focus:outline-none focus:border-blue-600"
                            required
                        />
                        </div>
                        <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="details">
                            Recipe Details
                        </label>
                        <textarea
                            id="details"
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            placeholder="Enter recipe details"
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg border-2 border-white text-black focus:outline-none focus:border-blue-600"
                            required
                        ></textarea>
                        </div>
                        <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="file">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white text-black focus:outline-none focus:border-blue-600"
                            required
                        />
                        </div>
                        <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-800 transition text-white font-bold text-lg"
                        >
                        Update Recipe
                        </button>
            </form>
        </div>
    );
};

export default UpdateItem;