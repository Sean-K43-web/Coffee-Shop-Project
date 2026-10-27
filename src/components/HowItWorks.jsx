import InfoCard from './InfoCard';
import './HowItWorks.css';

const steps = [
    { number: '01', title: 'Pick your products', text: 'Browse the menu and add what you like.'},
    { number: '02', title: 'Place your order', text: 'Pay online or at the counter.'},
    { number: '03', title: 'Pickup or delivery', text: 'Ready fast, ID checked at handoff.'},
    
]

 function HowItWorks (){
    return (
        <section id="delivery" className="how">
            <div className="how-inner">
                <h2 className="how-title">How It Works</h2>
                <p className="how-sub">Three steps from phone to hand</p>
                <div className="how-row">
                    {steps.map((s) => (
                        <InfoCard key={s.number} number={s.number} title={s.title} text={s.text}/>
                    ))}
                </div>
            </div>
        </section>
    )
 }
  export default HowItWorks;
