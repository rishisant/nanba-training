import React from 'react';

const FoodCard = ({ image, title, price }) => {
    return (
        <div className="food-card">
            <div className="food-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="food-card-content">
                <h3>{title}</h3>
                <h5>{price}
                    <span className="zeikomi">
                        (税込)
                    </span>
                </h5>
            </div>
        </div>
    );
}
export default FoodCard;
