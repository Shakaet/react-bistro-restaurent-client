

import { useState } from "react";
import orderimg from "../assets/shop/banner2.jpg"
import Cover from '../shared/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../hook/Usemenu";
import FoodCard from "../shared/FoodCard";
import OrderTab from "../shared/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    
   

    let categories=['Salad','Pizza','Soup','Dessert','Drinks']

    let {category}= useParams()
    let initaialIndex=categories.indexOf(category)
    let [item]= useMenu()

    let desserts= item.filter(item=>item.category=== "dessert")
    let soup= item.filter(item=>item.category=== "soup")
    let salad= item.filter(item=>item.category=== "salad")
    let pizza= item.filter(item=>item.category=== "pizza")
    let drinks= item.filter(item=>item.category=== "drinks")



    let [tabIndex,setTabIndex]=useState(initaialIndex)
    return (
        <div>
             <Helmet>
            <title>Order | Item</title>
            
          </Helmet> 
            <Cover img={orderimg} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className="max-w-96 mx-auto">
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
   
  </TabList>
  <TabPanel>
    <OrderTab item={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={desserts}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={drinks}></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;