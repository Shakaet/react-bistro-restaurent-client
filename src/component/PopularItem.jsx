import React, { useEffect, useState } from 'react';
import SharedTitle from '../shared/SharedTitle';
import MenuItem from '../shared/MenuItem';
import useMenu from '../hook/Usemenu';

const PopularItem = () => {

    let[item]= useMenu()
    
    let popular=item.filter(item=>item.category=== "popular")

    // let [item,setItem]=useState([])


    // useEffect(()=>{
    //     fetch("menu.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         let popularItem=data.filter(item=>item.category=== "popular")
    //         setItem(popularItem)
            
    //     })
    // },[])
    return (
        <div className='mb-12'>
            <SharedTitle
              subheading={"Popular Item"}
              heading={"From Our Menu"}>
          
            
            </SharedTitle>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item=><MenuItem key={item._id} item={item}>
                    </MenuItem>)
                }
            </div>

           <div className='text-center mt-5'>
           <button className=' btn btn-outline border-0 border-b-4 mt-5 text-black'>View Full Menu</button>
           </div>


        </div>
    );
};

export default PopularItem;