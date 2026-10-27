import './InfoCard.css';

function InfoCard ({ number, title, text}){
    return(
       <article className="info-card">
        {number && <div className="info-number">{number}</div>}
        <h3 className="info-title">{title}</h3>
        <p className="info-text">{text}</p>
       </article>
    )
}
 export default InfoCard;
 