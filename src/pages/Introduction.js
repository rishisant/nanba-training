import React from "react";

import taisei from "../assets/images/taisei_picture.jpeg";


const Introduction = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-block">
                    <div className="content-block-title">
                        <h1>難波泰世の自己紹介</h1>
                    </div>
                    <div className="flex-row-content">
                        <div className="content-block-body">
                            <p>難波泰世は岡山県の高梁市で生まれました。</p>
                            <p>ここでは私の生い立ちについて少し話をします</p>
                            <p>ぜひご覧ください。 Coming soon...</p>

                        </div>
                        <img className="image-intro" src={taisei} />
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Introduction;