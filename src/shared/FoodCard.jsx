import React from 'react';

const FoodCard = ({item}) => {

    let {name,image,price,recipe}=item
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white text-center'>${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline border-0 border-b-4 mt-5 text-black bg-slate-100 border-orange-400">Add to Card</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;