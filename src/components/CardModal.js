// return (
//     <>
//         <div className="menu-container">
//         {selectedCard && (
//   <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
//     <div className="modal-card" onClick={(e) => e.stopPropagation()}>
//       <button onClick={() => setSelectedCard(null)}>✖</button>
//       <img src={selectedCard.image} alt={selectedCard.title} />
//       <div className='card-main'>
//             <h1>{selectedCard.title}</h1>
//             <p>{selectedCard.price}</p>
//       </div>
//       <p>{selectedCard.description}</p>
//       <p className="ingredients">原材料: {selectedCard.ingredients}</p>
//     </div>
//   </div>
// // )}

export default function CardModal({ selectedCard, setSelectedCard }) {
    return (
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
    );
}