import  './ProductCard.css';

function ProductCard({ name, price, image }) {
    return (
        <article className="card">
            <div className="card-photo">
                {image ? <img src={image} alt={name} /> :<span>[PHOTO]</span>}
            </div>
            <div className="card-info">
                <h3 className="card-name">{name}</h3>
                <span className="card-price">{price}</span>
            </div>
            <button type="button" className="card-btn">
                Add to Cart
            </button>
        </article>
    )
}
 export default ProductCard;