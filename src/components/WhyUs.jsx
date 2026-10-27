import InfoCard from "./InfoCard";
import './WhyUs.css';

const reasons = [
    { title: 'Lab Tested', text: '[DESCRIPTION OF TESTING]'},
    { title: 'Local growers', text: '[DESCRIPTION OF SOURCING]'},
    { title: 'Friendly guidance', text: '[DESCRIPTION OF STAFF]'},
]
function WhyUs (){
    return (
        <section className="why">
            <div className="why-inner">
                <h2 className="why-title">Why SK Tier</h2>
                <p className="why-sub">What sets the shop apart.</p>
                <div className="why-row">
                    {reasons.map((r) => (
                        <InfoCard key={r.title} title={r.title} text={r.text}/>
                    ))}
                </div>
            </div>
        </section>

    )
}
 export default WhyUs;