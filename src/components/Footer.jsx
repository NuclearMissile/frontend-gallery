import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About</h3>
                        <p>A gallery of my personal projects and work.</p>
                    </div>

                    <div className="footer-section">
                        <h3>Contact</h3>
                        <p>Email: torrific55@gmail.com</p>
                    </div>

                    <div className="footer-section">
                        <h3>Follow</h3>
                        <div className="social-links">
                            <a href="https://github.com/NuclearMissile" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;