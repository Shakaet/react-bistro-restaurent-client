import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecured from './UseAxiosSecured';

const useCart = () => {

    let axiosSecure= UseAxiosSecured()
    const { data:cart=[] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get("/carts")
            return res.data
          },
        
      })
      return [cart]
};

export default useCart;