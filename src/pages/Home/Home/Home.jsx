import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import OurServices from '../OurServices/OurServices';
import FoodItem from '../FoodItem/FoodItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <OurServices></OurServices>
            <FoodItem></FoodItem>
        </div>
    );
};

export default Home;
