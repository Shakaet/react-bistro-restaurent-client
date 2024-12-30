import React from 'react';
import Banner from '../component/Banner';
import Category from '../component/Category';
import PopularItem from '../component/PopularItem';
import Featured from '../component/Featured';
import Testimonials from '../component/Testimonials';
import { Helmet} from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home | Item</title>
        
           </Helmet>    
            <Banner></Banner>
            <Category></Category>
            <PopularItem></PopularItem>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;