import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../shared/Cover';

import menuImg from "../../src/assets/home/banner.jpg"
import useMenu from '../hook/Usemenu';
import SharedTitle from '../shared/SharedTitle';
import MenuCategory from '../shared/MenuCategory';

import dessertImg from "../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import soupImg from "../assets/menu/soup-bg.jpg"

const Menu = () => {


    let [item]= useMenu()

    let desserts= item.filter(item=>item.category=== "dessert")
    let soup= item.filter(item=>item.category=== "soup")
    let salad= item.filter(item=>item.category=== "salad")
    let pizza= item.filter(item=>item.category=== "pizza")
    let offered= item.filter(item=>item.category=== "offered")
  
    return (
        <div>

      <Helmet>
        <title>Menu | Item</title>
        
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* <PopularItem></PopularItem> */}

       {/* main menu */}
      <SharedTitle heading={"Today's offer"} subheading={"Don't miss"} ></SharedTitle>
       
       {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu item */}
      <MenuCategory items={desserts} title={"Dessert"}coverImg={dessertImg} ></MenuCategory>
      {/* pizza menu item */}
      <MenuCategory items={pizza} title={"Pizza"}coverImg={pizzaImg} ></MenuCategory>

       {/* salad menu item */}
       <MenuCategory items={salad} title={"Salad"}coverImg={saladImg} ></MenuCategory>

        {/* soup menu item */}
        <MenuCategory items={soup} title={"Soup"}coverImg={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;