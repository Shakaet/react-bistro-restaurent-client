import React, { useEffect, useState } from 'react';
import SharedTitle from '../shared/SharedTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {



    let [reviews,setReviews]= useState([])

    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='my-20'>
            <SharedTitle
            heading={"Testimonials"}
            subheading={"What Our Client Say"}
            >

            </SharedTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(item=><SwiperSlide key={item._id}>
                        <div className='flex flex-col items-center mt-5 mb-5 mx-24 my-16'>
                           <Rating
                            style={{ maxWidth: 180 }}
                            value={item.rating} 
                            readOnly
                            />
                            <p className='py-8'>{item.details}</p>
                            <h3 className='text-2xl text-orange-400'>{item.name}</h3>
                        </div>
                        </SwiperSlide>)
                }
       
      </Swiper>
        </div>
    );
};

export default Testimonials;