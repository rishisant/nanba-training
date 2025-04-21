import React, {useState} from 'react';
import ramen from '../assets/images/ramen_image.jpg';
import okonomi from '../assets/images/okonomi-1.jpg';
import '../assets/css/menu.css';
import '../assets/css/NewMenu.css';
import FoodCard from '../components/FoodCard';
import doraemon from '../assets/images/Doraemon.jpg';
import gyoza from '../assets/images/gyoza.jpg'
import syoyu from '../assets/images/syo-yu_ramen.jpg'
import miso from '../assets/images/miso_ramen.jpg'
import ocha from '../assets/images/o-i_ocha.jpg'
import cola from '../assets/images/cola.jpg'
import colahai from '../assets/images/korahai.jpg'

import {useNavigate} from 'react-router-dom';
import CardModal from '../components/CardModal';

const NewMenu = () => {

    // Menu card states
    const [selectedCard, setSelectedCard] = useState(null);

    // States for drinks, food, and desserts (drinks=alc,noalc)
    const [selectedType, setSelectedType] = useState('food');

    const navigate = useNavigate();

    // Menu card data
    const menuCards = [
        {
            id: 1,
            image: ramen,
            title: 'ラーメン',
            type: 'food',
            price: '¥800',
            description: 'ラーメンの説明文が入ります。',
            ingredients: '小麦粉、卵、スープ、チャーシュー、メンマ、ネギ'
        },
        {
            id: 2,
            image: okonomi,
            title: 'お好み焼き',
            type: 'food',
            price: '¥1200',
            description: 'お好み焼きの説明文が入ります。',
            ingredients: '小麦粉、キャベツ、豚肉、イカ、エビ'
        },
        {
            id: 3,
            image: doraemon,
            title: 'ドラえもん',
            type: 'dessert',
            price: '¥500',
            description: 'ドラえもんの説明文が入ります。',
            ingredients: '小麦粉、卵、スープ、チャーシュー、メンマ、ネギ'
        },
        {
            id: 4,
            image: gyoza,
            title: '餃子',
            type: 'food',
            price: '¥600',
            description: '餃子の説明文が入ります。',
            ingredients: '小麦粉、キャベツ、豚肉、イカ、エビ'
        },
        {
            id: 5,
            image: syoyu,
            title: '醤油ラーメン',
            type: 'food',
            price: '¥800',
            description: '醤油ラーメンの説明文が入ります。',
            ingredients: '小麦粉、卵、スープ、チャーシュー、メンマ、ネギ'
        },
        {
            id: 6,
            image: miso,
            title: '味噌ラーメン',
            type: 'food',
            price: '¥800',
            description: '味噌ラーメンの説明文が入ります。',
            ingredients: '小麦粉、卵、スープ、チャーシュー、メンマ、ネギ'
        },
        {
            id: 7,
            image: ocha,
            title: 'お茶',
            type: 'nonalc',
            price: '¥200',
            description: 'お茶の説明文が入ります。',
            ingredients: '水'
        },
        {
            id: 8,
            image: cola,
            title: 'コーラ',
            type: 'nonalc',
            price: '¥300',
            description: 'コーラの説明文が入ります。',
            ingredients: '水、砂糖、炭酸'
        },
        {
            id: 9,
            image: colahai,
            title: 'コーラハイボール',
            type: 'alc',
            price: '¥500',
            description: 'コーラハイボールの説明文が入ります。',
            ingredients: '水、砂糖、炭酸、ウィスキー'
        }
    ];

    // Handle card click
    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    // Handle order button click
    const handleOrderClick = () => {
        navigate('/order');
    };

    return (
        <div className="menu-container">
            <h1>メニュー</h1>
            <div className="menu-type">
                <button
                    className={selectedType === 'food' ? 'active' : ''}
                    onClick={() => setSelectedType('food')}
                >
                    食べ物
                </button>
                <button
                    className={selectedType === 'nonalc' ? 'active' : ''}
                    onClick={() => setSelectedType('nonalc')}
                >
                    飲み物
                </button>
                <button
                    className={selectedType === 'alc' ? 'active' : ''}
                    onClick={() => setSelectedType('alc')}
                >
                    アルコール
                </button>
            </div>
            <div className="menu-grid">
                {menuCards
                    .filter((card) => card.type === selectedType)
                    .map((card) => (
                        <FoodCard
                            key={card.id}
                            image={card.image}
                            title={card.title}
                            price={card.price}
                            onClick={() => handleCardClick(card)}
                        />
                    ))}
            </div>
            <button className="order-button" onClick={handleOrderClick}>
                注文する
            </button>
            {selectedCard && (
                <CardModal
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                />
            )}
        </div>
    );
}
export default NewMenu;
