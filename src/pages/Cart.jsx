import React, { useState } from 'react';
import useCart from '../hook/useCart';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import UseAxiosSecured from '../hook/UseAxiosSecured';

const Cart = () => {
  const [cart,refetch] = useCart();

  

  let axiosSecure= UseAxiosSecured()

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

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
          .delete(`/cart/${id}`)
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
    <div className="p-4">
      {/* Summary Section */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <h1 className="text-2xl font-bold">Items: {cart.length}</h1>
        <h1 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h1>
        <button className="btn btn-primary">Pay</button>
      </div>

      {/* Responsive Table */}
      <div className="overflow-auto">
        <table className="table-auto w-full text-left border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Index</th>
              <th className="px-4 py-2 border border-gray-300">Item Image</th>
              <th className="px-4 py-2 border border-gray-300">Item Name</th>
              <th className="px-4 py-2 border border-gray-300">Price</th>
              <th className="px-4 py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
                  />
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                <td className="px-4 py-2 border border-gray-300">${item.price}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button onClick={()=>handleDelete(item._id)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
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

export default Cart;
