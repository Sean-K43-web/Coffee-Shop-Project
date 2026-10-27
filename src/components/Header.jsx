import { useState } from 'react';
import Logo from './Logo';
import './Header.css';

const links =['Menu', 'Deals', 'Delivery', 'visit'];

function Header(){
    const [open, setOpen] = useState(false);
    return(
        <header className="header">
            <div className="header-inner">
                <Logo />
                <nav className={open ? 'nav open' : 'nav'}>
                    {links.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                            {link}
                        </a>
                    ))}
                </nav>
                <div className="header-actions"></div> 
                <a className="btn-shop" href="#menu">Shop Now</a>
                <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>    
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                </div>
        </header>
    )
}

export default Header;