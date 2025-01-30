import React from 'react';
import SharedTitle from '../shared/SharedTitle';

import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../hook/UseAxiosPublic';
import { MdDelete } from 'react-icons/md';
import UseAxiosSecured from '../hook/UseAxiosSecured';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManegeItems = () => {

     let axiosPublic= UseAxiosPublic()
     let axiosSecure= UseAxiosSecured()

    //  let [item]= useMenu()

    const { refetch, data:menuItem=[] } = useQuery({
        queryKey: ['menuItem'],
        queryFn: async() =>{
             let res= await axiosPublic.get("/menu")
             return res.data
        }

        

           
          
      })

    //   console.log(menuItem)

    //   let handleDelete=async(id)=>{
    //     alert(id)


    //     let res= await axiosSecure.delete(`/menu/${id}`)
    //     console.log(res.data)

    //   }

   const handleDelete = (id) => {
            Swal.fire({
              title: 'Are you sure?',
              text: 'You will not be able to recover this item!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#3085d6',
              confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
              if (result.isConfirmed) {
                axiosSecure
                  .delete(`/menuDelete/${id}`)
                  .then((response) => {

                    console.log(response.data)
                    if (response.data.deletedCount > 0) {
                        refetch()
                      Swal.fire('Deleted!', 'The item has been removed from the cart.', 'success');
                      
                    }
                  })
                  .catch((error) => {
                    console.error('Error deleting item:', error);
                    Swal.fire('Error!', 'Failed to delete the item. Try again.', 'error');
                  });
              }
            });
          };
      


    

    return (
        <div>
            <SharedTitle subheading={"Hurry Up"} heading={"manage all items"} ></SharedTitle>

            <div>
  <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
    <h1 className="text-2xl font-bold">Manage items:</h1>
    
  </div>

  {/* Responsive Table */}
  <div className="overflow-auto">
  <table className="table-auto w-full text-left border border-gray-300">
    <thead className="bg-gray-200">
      <tr>
        <th className="px-4 py-2 border border-gray-300">Index</th>
        <th className="px-4 py-2 border border-gray-300">Image</th>
        <th className="px-4 py-2 border border-gray-300">Name</th>
        <th className="px-4 py-2 border border-gray-300">Price</th>
        <th className="px-4 py-2 border border-gray-300">Action</th>
        <th className="px-4 py-2 border border-gray-300">Update</th>
      </tr>
    </thead>
    <tbody>
      {menuItem.map((item, index) => (
        <tr key={index} className="hover:bg-gray-100">
          <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
          <td className="px-4 py-2 border border-gray-300">
            <img
              src={item?.image}
              alt={item.name}
              className="h-16 w-16 object-cover rounded"
            />
          </td>
          <td className="px-4 py-2 border border-gray-300">{item.name}</td>
          <td className="px-4 py-2 border border-gray-300">{item.price}</td>
          <td className="px-4 py-2 border border-gray-300">
            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              <MdDelete />
            </button>
          </td>
          <td className="px-4 py-2 border border-gray-300">
            <Link to={`/dashboard/updateItem/${item._id}`}
              
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Update
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

             </div>


        </div>
    );
};

export default ManegeItems;