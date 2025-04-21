import React from "react";
import cap from "../assets/images/restaurant_cap.jpg"

const Home = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="hero-section">
                    <div className="hero-text">
                        <h1>
                            THE BEST RESTAURANT
                        </h1>
                        <span className="hero-subtitle">
                            株式会社insyockten
                        </span>
                        <p className="hero-bottomtext">
                        贅を極めた、至福の一皿。とってもおいしよ~ （^^♪）
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={cap} alt="ヒーロー部分" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;