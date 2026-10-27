import Button from './Button';
import './Hero.css';

function Hero({tagline}) {
    return (
        <section className="hero">
            <h1 className="hero-title">
                FRESH. LOCAL. <span>LIT.</span>
            </h1>
            <p className="hero-text">
                Premium cannabis products,{tagline}
            </p>
            <div className="hero-buttons">
                <Button href="#menu">Order for pickup</Button>
                <Button href="#menu" variant="outline">See today's menu</Button>
            </div>
        </section>
    )
}
 export default Hero;