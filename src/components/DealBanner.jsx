import './DealBanner.css';

function DealBanner({ discount, category }){
    return (
        <section id="deals" className="deal-wrap">
            <div className="deal">
                <div>
                    <p className="deal-label">DEAL OF THE WEEK</p>
                    <h2 className="deal-title">{discount} off {category}</h2>
                </div>
                <a href="#menu" className="deal-btn">Claim Deal</a>
            </div>
        </section>
    )
}
 export default DealBanner;