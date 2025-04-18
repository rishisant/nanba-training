import React from "react";
import taisei from "../assets/images/taisei_picture.jpeg";

const Introduction = () => {
    return (
        <section className="intro-section">
            <div className="intro-container">
                <div className="intro-text">
                    <h2 className="intro-heading">難波泰世の自己紹介</h2>
                    <p>難波泰世は岡山県の高梁市で生まれました。</p>
                    <p>ここでは私の生い立ちについて少し話をします。</p>
                    <p className="coming-soon">ぜひご覧ください。Coming soon...</p>
                </div>
                <div className="intro-image">
                    <img src={taisei} alt="難波泰世" />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
