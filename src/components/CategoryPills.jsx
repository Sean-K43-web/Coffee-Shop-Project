import './CategoryPills.css';

const categories = ['Flower', 'Vapes', 'Edibles', 'Concentrates','Accessories'];
function CategoryPills (){
    return (
        <nav className="pills" aria-label="product categories">
            {categories.map((name) => (
                <a key={name} href="#menu" className="pill">
                    {name}
                </a>
            ))}
        </nav>

    )
}
  export default CategoryPills;