/*
    navbar.js

    for a portfolio site of 難波泰世
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import logo from '../assets/images/logo_taisei.png';

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li onClick={() => navigate('/')}>ホーム</li>
                        <li onClick={() => navigate('/works')}>作成物</li>
                        <li onClick={() => navigate('/about')}>自己紹介</li>
                        <li onClick={() => navigate('/contact')}>連絡先</li>
                    </ul>
                </div>
            </div>
        </>
    )
};
