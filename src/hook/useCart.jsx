import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import UseAxiosSecured from './UseAxiosSecured';
import { AuthContext } from '../Provider';

const useCart = () => {

    let axiosSecure= UseAxiosSecured()

    let {user}= useContext(AuthContext)

    const { refetch,data:cart=[] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts/${user?.email}`)
            return res.data
          },
        
      })
      return [cart,refetch]
};

export default useCart;