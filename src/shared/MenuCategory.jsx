import React from 'react';
import MenuItem from './MenuItem';
import Cover from './Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div className='pt-8 mb-5'>
             {title && <Cover img={coverImg} title={title}></Cover>}
             <div className='grid md:grid-cols-2 gap-10 my-16 mb-10'>
                {
                    // eslint-disable-next-line react/prop-types
                    items.map(item=><MenuItem key={item._id} item={item}>
                    </MenuItem>)
                }
            </div>
            
             <Link className='flex justify-center' to={`/order/${title}`}>
             <button className=' btn btn-outline border-0 border-b-4 mt-5 text-black'>Order Now</button>

             </Link>
            
        </div>
    );
};

export default MenuCategory;