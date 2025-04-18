import React from "react";

import hometown from "../assets/images/Hometown.jpg"

const Home = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-block">
                    <div className="content-block-title">
                        <h1>難波泰世のポートフォリオ</h1>
                    </div>
                        <div className="flex-row-content">
                            <div className="content-block-body">
                                <p>このサイトは、難波泰世のポートフォリオサイトです。</p>
                                <p>ここでは、私が作成した作品や自己紹介、連絡先などを紹介しています。</p>
                                <p>ぜひご覧ください。</p>
                            </div>
                        </div>
                    <img className="image-hometown" src={hometown}/>
                </div>
            </div>
        </>
    );
}

export default Home;