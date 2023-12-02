import { NavLink } from "react-router-dom";
import MainMenu from '../mainMenu/mainMenu';
import logo1 from '../../assets/img/logo1.png';
import '../../assets/scss/_header.scss';

function Header() {
    return (
        
        <header>
            <div className="header-wrapper container">
                <NavLink to="/"><img src={logo1} alt="logo1" /></NavLink>
                <MainMenu />
                <div className={'btn'}>
                    <a href="/">
                        <button>Subscribe</button>
                    </a>
                </div>
            </div>
        </header>
        
    );
}

export default Header;