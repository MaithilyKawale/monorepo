import './card.css';
function Card({ name, description, imageUrl }) {
    return (
        <div className="card">
            <img src={imageUrl} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );

}

export default Card;