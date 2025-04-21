// menu for restaurant
import React, {useState} from 'react';
import ramen from '../assets/images/ramen_image.jpg';
import okonomi from '../assets/images/okonomi-1.jpg';
import '../assets/css/menu.css';
import FoodCard from '../components/FoodCard';
import doraemon from '../assets/images/Doraemon.jpg';
import gyoza from '../assets/images/gyoza.jpg'
import syoyu from '../assets/images/syo-yu_ramen.jpg'
import miso from '../assets/images/miso_ramen.jpg'
import ocha from '../assets/images/o-i_ocha.jpg'
import cola from '../assets/images/cola.jpg'


const Menu = () => {

    const [selectedState, setSelectedState] = useState('drinks');

    const [selectedCard, setSelectedCard] = useState(null);

    return (
    <>
        <div className="menu-container">
        {selectedCard && (
  <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      <button onClick={() => setSelectedCard(null)}>✖</button>
      <img src={selectedCard.image} alt={selectedCard.title} />
      <div className='card-main'>
            <h1>{selectedCard.title}</h1>
            <p>{selectedCard.price}</p>
      </div>
      <p>{selectedCard.description}</p>
      <p className="ingredients">原材料: {selectedCard.ingredients}</p>
    </div>
  </div>
)}

            <ul className='menu-list'>
                <li
                 style={{ cursor: 'pointer' }}
                onClick={() => setSelectedState('food')}
                >FOOD MENU</li>
                <li
                 style={{ cursor: 'pointer' }}
                onClick={() => setSelectedState('drinks')}
                >DRINK MENU</li>
                <li
                 style={{ cursor: 'pointer' }}
                onClick={() => setSelectedState('desert')}
                >DESERT MENU</li>
            </ul>
            <h2 className="menu">
                {selectedState === 'food'
                    ? 'FOOD MENU'
                    : selectedState === 'drinks'
                    ? 'DRINK MENU'
                    : selectedState === 'desert'
                    ? 'DESERT MENU'
                    : ''}
            </h2>
            <div className="food-card-container">
                { selectedState == 'food' &&
                (
                    
                <>          
                <FoodCard
                    image={ramen}
                    title="塩ラーメン"
                    price="$10"
                    onClick={() => setSelectedCard({
                        image: ramen,
                        title: "塩ラーメン",
                        price: "$10",
                        description: "あっさり塩味の特製ラーメンです。",
                        ingredients: "麺、スープ、メンマ、煮卵、チャーシュー、ねぎ。"
                      })}
            />
                <FoodCard
                    image={miso}
                    title="味噌ラーメン"
                    price="$10"
                    onClick={() => setSelectedCard({
                        image: miso,
                        title: "味噌ラーメン",
                        price: "$10",
                        description: "濃厚味噌味の特製ラーメンです。",
                        ingredients: "麺、味噌スープ、チャーシュー、ねぎ"
                      })}
            />
                <FoodCard
                    image={syoyu}
                    title="醤油ラーメン"
                    price="$10"
                    onClick={() => setSelectedCard({
                        image: syoyu,
                        title: "醤油ラーメン",
                        price: "$10",
                        description: "あっさり醤油ラーメンです。",
                        ingredients: "麺、醤油スープ、肉、ねぎねぎねぎ"
                      })}
            />
                <FoodCard
                    image={okonomi}
                    title="お好み焼き"
                    price="$23"
                    onClick={() => setSelectedCard({
                        image: okonomi,
                        title: "お好み焼き",
                        price: "$15",
                        description: "粉と水を混ぜて焼いただけです。",
                        ingredients: "粉、水"
                      })}
                />
                <FoodCard
                    image={ramen}
                    title="塩ラーメン"
                    price="$10"
                    onClick={() => setSelectedCard({
                        image: ramen,
                        title: "塩ラーメン",
                        price: "$10",
                        description: "あっさり塩味の特製ラーメンです。",
                        ingredients: "麺、スープ、メンマ、煮卵、チャーシュー、ねぎ"
                      })}
            />
                <FoodCard
                    image={miso}
                    title="味噌ラーメン"
                    price="$10"
                    onClick={() => setSelectedCard({
                        image: miso,
                        title: "味噌ラーメン",
                        price: "$10",
                        description: "濃厚味噌味の特製ラーメンです。",
                        ingredients: "麺、味噌スープ、チャーシュー、ねぎ"
                      })}
            />
                <FoodCard
                    image={ramen}
                    title="塩ラーメン"
                    price="$10"
                    onClick={() => setSelectedCard({
                        image: ramen,
                        title: "塩ラーメン",
                        price: "$10",
                        description: "あっさり塩味の特製ラーメンです。",
                        ingredients: "麺、スープ、メンマ、煮卵、チャーシュー、ねぎ"
                      })}
            />
                <FoodCard
                    image={miso}
                    title="味噌ラーメン"
                    price="$10"
                    onClick={() => setSelectedCard({
                        image: miso,
                        title: "味噌ラーメン",
                        price: "$10",
                        description: "濃厚味噌味の特製ラーメンです。",
                        ingredients: "麺、味噌スープ、チャーシュー、ねぎ"
                      })}
            />
                <FoodCard
                    image={syoyu}
                    title="醤油ラーメン"
                    price="$10"
                    onClick={() => setSelectedCard({
                        image: syoyu,
                        title: "味噌ラーメン",
                        price: "$10",
                        description: "濃厚味噌味の特製ラーメンです。",
                        ingredients: "麺、醤油スープ、肉、ねぎ、バター"
                      })}
            />
                <FoodCard
                    image={okonomi}
                    title="お好み焼き"
                    price="$23"
                    onClick={() => setSelectedCard({
                        image: okonomi,
                        title: "お好み焼き",
                        price: "$15",
                        description: "粉と水を混ぜて焼いただけです。",
                        ingredients: "粉、水"
                      })}
                />
        
                </>)}
                { selectedState == 'drinks' &&
                (
                <>
                <div className='drink-container'>
                    <div className='non-alc'>
                        <FoodCard
                            image={ocha}
                            title="おーいお茶　　　2ダース"
                            price="$20"
                            onClick={() => setSelectedCard({
                                image: ocha,
                                title: "おーいお茶　2ダース",
                                price: "$20",
                                description: "【お得】お茶多め",
                                ingredients: "水、茶葉"
                            })}
                        />
                        <FoodCard
                            image={cola}
                            title="コーラ"
                            price="$5"
                            onClick={() => setSelectedCard({
                                image: cola,
                                title: "コーラ",
                                price: "$5",
                                description: "【炭酸】コーラ",
                                ingredients: "砂糖水、二酸化炭素"
                            })}
                        />
                        <FoodCard
                            image={ramen}
                            title="ラーメンスープ"
                            price="$3"
                            onClick={() => setSelectedCard({
                                image: ramen,
                                title: "ラーメンスープ",
                                price: "$3",
                                description: "【増量中】ラーメンスープ",
                                ingredients: "油、塩、水"
                            })}
                        />
                        <FoodCard
                            image={doraemon}
                            title="難波焼き"
                            price="$2345234530"
                        />
                        </div>
                    <div className='alc'>
                        <FoodCard
                            image={ocha}
                            title="おーいお茶　　　2ダース"
                            price="$20"
                            onClick={() => setSelectedCard({
                                image: ocha,
                                title: "おーいお茶　2ダース",
                                price: "$20",
                                description: "【お得】お茶多め",
                                ingredients: "水、茶葉"
                            })}
                        />
                        <FoodCard
                            image={cola}
                            title="コーラ"
                            price="$5"
                            onClick={() => setSelectedCard({
                                image: cola,
                                title: "コーラ",
                                price: "$5",
                                description: "【炭酸】コーラ",
                                ingredients: "砂糖水、二酸化炭素"
                            })}
                        />
                        <FoodCard
                            image={ramen}
                            title="ラーメンスープ"
                            price="$3"
                            onClick={() => setSelectedCard({
                                image: ramen,
                                title: "ラーメンスープ",
                                price: "$3",
                                description: "【増量中】ラーメンスープ",
                                ingredients: "油、塩、水"
                            })}
                        />
                        <FoodCard
                            image={doraemon}
                            title="難波焼き"
                            price="$2345234530"
                        />
                        </div>
                </div>
                </>)}
                { selectedState == 'desert' &&
                (
                <>
                <FoodCard
                    image={ramen}
                    title="難波ラーメン21312"
                    price="$20"
                />
                <FoodCard
                    image={doraemon}
                    title="難波焼き"
                    price="$2345234530"
                />
                <FoodCard
                    image={ramen}
                    title="難波ラーメン"
                    price="$20"
                />
                <FoodCard
                    image={doraemon}
                    title="難波焼き"
                    price="$2345234530"
                />
                <FoodCard
                    image={ramen}
                    title="難波ラーメン"
                    price="$20"
                />
                <FoodCard
                    image={gyoza}
                    title="餃子"
                    price="$8"
                />
                </>)}
            </div>
        </div>
    </>
    );
}

export default Menu;
