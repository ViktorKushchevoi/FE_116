import React from 'react';
import { NavLink } from 'react-router-dom';
import fbicon from '../../assets/img/fb-icon.png';
import twicon from '../../assets/img/tw-icon.png';
import inicon from '../../assets/img/in-icon.png';
import '../../assets/scss/_footer.scss';

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper container">
                <div className="main-info">
                    <div className="column">
                        <ul>
                            <li><NavLink to="/" className="footer-title">Home</NavLink></li>
                            <li><NavLink to="/">Categories</NavLink></li>
                            <li><NavLink to="/">Pricing</NavLink></li>
                            <li><NavLink to="/">Page title</NavLink></li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li><NavLink to="/" className="footer-title">Movies</NavLink></li>
                            <li><NavLink to="/">Gernes</NavLink></li>
                            <li><NavLink to="/">Trending</NavLink></li>
                            <li><NavLink to="/">Popular</NavLink></li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li><NavLink to="/" className="footer-title">Shows</NavLink></li>
                            <li><NavLink to="/">Gernes</NavLink></li>
                            <li><NavLink to="/">Trending</NavLink></li>
                            <li><NavLink to="/">Popular</NavLink></li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li><NavLink to="/" className="footer-title">Support</NavLink></li>
                            <li><NavLink to="/">Contact us</NavLink></li>
                        </ul>
                    </div>
                    <div className="conect">
                        <h4>Subscribe to Newsletter</h4>
                        <div className="icons">
                            <NavLink to="/"><img src={fbicon} alt="logo" /></NavLink>
                            <NavLink to="/"><img src={twicon} alt="logo" /></NavLink>
                            <NavLink to="/"><img src={inicon} alt="logo" /></NavLink>
                        </div>
                    </div>
                </div>
                <div className="rights">
                    <p>@2023 streamvib, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
