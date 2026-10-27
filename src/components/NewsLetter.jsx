import { useState } from "react";
import './NewsLetter.css';

function NewsLetter () {
    const [email, setEmail] = useState ('');
    const [sent, setSent] = useState (false);

    function handleSubmit (e) {
        e.preventDefault();
        setSent(true);
        setEmail('');
    }

    return (
        <section className="news">
            <div className="news-inner">
                <h2 className="news-title">Get first dibs on drops</h2>
                <p className="news-sub">Deals and new arrivals. 21+ only.</p>
                {sent ? (<p className="news-thanks">Thanks for subscribing!</p>) : (<form className="news-form" onSubmit={handleSubmit}>
                    <label htmlFor="news-email" className="news-label">
                        Email address
                    </label>
                    <input
                       id="news-email"
                       className="news-input"
                       type="email"
                       placeholder="your-email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required 
                       />
                       <button type="submit" className="btn btn-solid">
                        Subscribe
                       </button>
                </form>
            )}
            </div>
        </section>
    )

}
 export default NewsLetter;