import React from 'react';
import MenuItem from './MenuItem';
import Cover from './Cover';

const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div className='pt-8'>
             {title && <Cover img={coverImg} title={title}></Cover>}
             <div className='grid md:grid-cols-2 gap-10 my-16 mb-10'>
                {
                    // eslint-disable-next-line react/prop-types
                    items.map(item=><MenuItem key={item._id} item={item}>
                    </MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;