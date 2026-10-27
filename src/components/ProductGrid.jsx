import ProductCard from "./ProductCard";
import './ProductGrid.css';

const products = [
    { id: 1, name: '[PRODUCT 1]', price: '[PRICE]'},
    { id: 2, name: '[PRODUCT 2]', price: '[PRICE]'},
    { id: 3, name: '[PRODUCT 3]', price: '[PRICE]'},
    { id: 4, name: '[PRODUCT 4]', price: '[PRICE]'},
    { id: 5, name: '[PRODUCT 5]', price: '[PRICE]'},
    { id: 6, name: '[PRODUCT 6]', price: '[PRICE]'},
    { id: 7, name: '[PRODUCT 7]', price: '[PRICE]'},
    { id: 8, name: '[PRODUCT 8]', price: '[PRICE]'},
];
function ProductGrid (){
    return (
        <section id="menu" className="products">
            <h2 className="products-title">Fresh This Week</h2>
            <p className= "prroducts-sub">[SHORT LINE ABOUT NEW ARRIVALS]</p>
            <div className="products-grid">
                {products.map((p) => (
                    <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} />
                ))}
            </div>
        </section>
    )
}
 export default ProductGrid;