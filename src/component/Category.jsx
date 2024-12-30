import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import img1 from "../assets/home/slide1.jpg"
import img2 from "../assets/home/slide2.jpg"
import img3 from "../assets/home/slide3.jpg"
import img5 from "../assets/home/slide4.jpg"
import SharedTitle from '../shared/SharedTitle';






const Category = () => {
    return (
        <section>
            <SharedTitle 
            subheading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}>
            
            </SharedTitle>

            
            <div className='mb-10'>
            
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" />
        <h1 className='md:text-4xl uppercase font-bold text-center -mt-28 mb-5 text-white'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" />
        <h1 className='md:text-4xl uppercase font-bold text-center -mt-28 mb-5 text-white'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide><img src={img3} alt="" />
        <h1 className='md:text-4xl uppercase font-bold text-center -mt-28 mb-5 text-white'>Soup</h1>
        </SwiperSlide>
        <SwiperSlide><img src={img5} alt="" />
        <h1 className='md:text-4xl uppercase font-bold text-center -mt-28 mb-5 text-white'>Dessert</h1>
        </SwiperSlide>
      </Swiper>
        </div>
        </section>
    );
};

export default Category;