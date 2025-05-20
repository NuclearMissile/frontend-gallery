import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>Gallery</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="https://github.com/NuclearMissile/frontend-gallery">Project</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;