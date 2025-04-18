import React from "react";

import hometown from "../assets/images/Hometown.jpg"
import taisei from "../assets/images/nanba_1.jpg"

const Home = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="hero-section">
                    <div className="hero-text">
                        <h1>
                            TAISEI NANBA
                        </h1>
                        <span className="hero-subtitle">
                            株式会社サインタ・エンジニア
                        </span>
                        <p className="hero-bottomtext">
                            難波泰世、この世界の救い主。
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={taisei} alt="ヒーロー部分" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;