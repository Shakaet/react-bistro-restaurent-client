import React from 'react';
import FoodCard from './FoodCard';

const OrderTab = ({item}) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 mt-10  justify-center">
    {
        item.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
    }
    </div>
        </div>
    );
};

export default OrderTab;