import './VisitUs.css';

function VisitUs() {
  return (
    <section id="visit" className="visit">
      <div className="visit-inner">
        <div className="visit-info">
          <h2 className="visit-title">Visit us</h2>
          <p className="visit-address">[STREET ADDRESS, CITY]</p>
          <p className="visit-text">
            Mon to Sat: [HOURS]
            <br />
            Sunday: [HOURS]
          </p>
          <p className="visit-text">[PHONE] | [EMAIL]</p>
          <a href="#visit" className="btn btn-solid">
            Get directions
          </a>
        </div>
        <div className="visit-map">[MAP]</div>
      </div>
    </section>
  );
}

export default VisitUs;