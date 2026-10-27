import InfoCard from "./InfoCard";
import './Reviews.css';

const reviews = [
    { name: '[CUSTOMER NAME]', text: '[REVIEW TEXT]'},
    { name: '[CUSTOMER NAME]', text: '[REVIEW TEXT]'},
    { name: '[CUSTOMER NAME]', text: '[REVIEW TEXT]'},
];

function Reviews (){
    return (
       <section className="reviews">
        <div className="reviews-inner">
            <h2 className="reviews-title"> What people say </h2>
            <p className="review-sub">[CUSTOMER REVIEW]</p>
            <div className="reviews-row">
                {reviews.map((r, i) => (
                  <InfoCard key={i} title={r.name} text={r.text}/>
                ))}
            </div>
        </div>
       </section>
    )
}
 export default Reviews;