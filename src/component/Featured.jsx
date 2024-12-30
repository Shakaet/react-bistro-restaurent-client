import React from 'react';
import SharedTitle from '../shared/SharedTitle';

import featureImg from '../assets/home/featured.jpg'
import "../component/css/featured.css"

const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20 bg-fixed'>
            <SharedTitle
             subheading={"check it Out"}
             heading={"featured item"}>
            

            </SharedTitle>

            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p className='mt-2'>Aug 20,2029</p>
                    <p className='uppercase mt-2'>Where can i get  some?</p>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequuntur dolorem quidem at tempora facilis fuga minus impedit harum sit ex omnis itaque aliquid sint, blanditiis laborum perspiciatis consequatur accusamus porro molestias sunt deserunt vitae. Quae numquam ducimus non, quisquam autem cumque impedit corporis placeat vel. Nesciunt id ab unde!</p>
                    <button className=' btn btn-outline border-0 border-b-4 mt-5 text-white'>Order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;