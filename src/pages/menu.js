// menu for restaurant
import React from 'react';
import ramen from '../assets/images/ramen_image.jpg';
import okonomi from '../assets/images/okonomi-1.jpg';
import '../assets/css/menu.css';
import FoodCard from '../components/FoodCard';

const Menu = () => {

    return (
    <>
        <div className="menu-container">
            <div className="food-card-container">
                <FoodCard
                    image={ramen}
                    title="難波ラーメン"
                    price="¥1020"
                />
                <FoodCard
                    image={okonomi}
                    title="難波お好み焼き"
                    price="¥1430"
                />
            </div>
        </div>
    </>
    );
}

export default Menu;
