import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecured from '../hook/UseAxiosSecured';
import { MdDelete } from 'react-icons/md';
import { GrUserAdmin } from 'react-icons/gr';
import Swal from 'sweetalert2';

const Allusers = () => {



    let axiosSecure= UseAxiosSecured()

    // const { refetch, data:user=[] } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get("/users",{
    //           headers:{
    //             authorization:`Bearer ${localStorage.getItem("access-token")}`
    //           }
    //         })
    //         return res.data
    //       },
         
    //   })

    const { refetch, data:user=[] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await axiosSecure.get("/users")
          return res.data
        },
       
    })

      console.log(user)


      let handleadminPanel=(id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: 'will you make admin this user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, make admin!',
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure
                .patch(`/users/admin/${id}`)
                .then((response) => {
                  if (response.status === 200) {
                      refetch()
                    Swal.fire('Now,This User is an admin', 'success');
                    
                  }
                })
                .catch((error) => {
                  console.error('Error deleting item:', error);
                  Swal.fire('Error!', 'Failed to delete the item. Try again.', 'error');
                });
            }
          });

        

      }


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
                .delete(`/users/${id}`)
                .then((response) => {
                  if (response.status === 200) {
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
            <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <h1 className="text-2xl font-bold">All Users</h1>
        <h1 className="text-2xl font-bold">Total User:{user.length} </h1>
      </div>

       {/* Responsive Table */}
            <div className="overflow-auto">
              <table className="table-auto w-full text-left border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border border-gray-300">Index</th>
                    <th className="px-4 py-2 border border-gray-300">Name</th>
                    <th className="px-4 py-2 border border-gray-300">Email</th>
                    <th className="px-4 py-2 border border-gray-300">Role</th>
                    <th className="px-4 py-2 border border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                      <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                      <td className="px-4 py-2 border border-gray-300">{item.email}</td>
                      <td className="px-4 py-2 border border-gray-300">
                        {
                            item.role==="admin" ? "admin" :
                            <button onClick={()=>handleadminPanel(item._id)}  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        <GrUserAdmin />
                        </button>
                        }
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        <button onClick={()=>handleDelete(item._id)}  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
    );
};

export default Allusers;