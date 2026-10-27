import Logo from './Logo';
import './Footer.css';

const links = ['Menu', 'Privacy', 'Terms', 'Contact'];

function Footer () {
    return (
       <footer className="footer">
        <div className="footer-inner">
            <div className="footer-top">
                <Logo />
                <nav className="footer-links" aria-label="footer">
                    {links.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`}>
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
            <p className="footer-text">
                21+ only. [LICENSE NO.] keep out of reach of children. Do not drive after consuming.
            </p>
            <p className="footer-text">
                &copy; {new Date().getFullYear()} SK Tier. [ANY REQUIRED HEALTH WARNING FOR YOUR REGION]
            </p>
        </div>
       </footer>
    )
}
 export default Footer;