import React, { useContext } from 'react';
import { AuthContext } from '../Provider';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecured from './UseAxiosSecured';

const UseAdmin = () => {


    let {user}=useContext(AuthContext)

    let axiosSecure= UseAxiosSecured()

    const { data:isAdmin,isLoading:adminLoading } = useQuery({
        queryKey: [user?.email,'isAdmin'],
        queryFn: async () =>{
            let res = await axiosSecure.get(`/users/admin/${user?.email}`) 
            console.log(res.data)
            return res.data?.admin
        }
      })

      return [isAdmin,adminLoading]
};

export default UseAdmin;