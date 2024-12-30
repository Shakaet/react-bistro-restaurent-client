import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../shared/Cover';

import menuImg from "../../src/assets/home/banner.jpg"
import PopularItem from '../component/PopularItem';

const Menu = () => {
    return (
        <div>

      <Helmet>
        <title>Menu | Item</title>
        
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularItem></PopularItem>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularItem></PopularItem>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularItem></PopularItem>
        </div>
    );
};

export default Menu;