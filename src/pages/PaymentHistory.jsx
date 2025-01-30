import React, { useContext } from 'react';
import { AuthContext } from '../Provider';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecured from '../hook/UseAxiosSecured';

const PaymentHistory = () => {


    let {user}= useContext(AuthContext)


   let axiosSecure= UseAxiosSecured()

    const { data:paymentsHistory,isLoading:paymentsHistoryLoading } = useQuery({
        queryKey: [user?.email,'paymentsHistory'],
        queryFn: async () =>{
            let res = await axiosSecure.get(`/payments/${user?.email}`) 
            console.log(res.data)
            return res.data
        }
      })


 



    return (
        <div>
            {paymentsHistory?.length}

            {/* Responsive Table */}
            <div className="overflow-auto bg-white shadow-lg rounded-lg p-4">
      <table className="table-auto w-full text-left border-collapse">
        <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <tr>
            <th className="px-4 py-3 border">#</th>
            <th className="px-4 py-3 border">Transaction ID</th>
            <th className="px-4 py-3 border">Price</th>
            <th className="px-4 py-3 border">Status</th>
            <th className="px-4 py-3 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {paymentsHistory?.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 even:bg-gray-50">
              <td className="px-4 py-3 border">{index + 1}</td>
              <td className="px-4 py-3 border text-blue-600 font-medium">
                {item.transectionId}
              </td>
              <td className="px-4 py-3 border text-green-600 font-semibold">
                ${item.price}
              </td>
              <td
                className={`px-4 py-3 border font-semibold ${
                  item.status === "Success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.status}
              </td>
              <td className="px-4 py-3 border">
                {new Date(item.date).toLocaleDateString("en-GB")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default PaymentHistory;