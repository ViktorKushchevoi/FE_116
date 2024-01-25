import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import MainMenu from '../mainMenu/mainMenu';
import logo1 from '../../assets/img/logo1.png';
import '../../assets/scss/_header.scss';

function Header() {

    const [isActive, setActive] = useState(false);

    function toggleClass() {
        setActive(!isActive);
    }


    return (

        <header>
            <div className={`header-wrapper container ${isActive ? 'active' : ''}`}>
                <NavLink to="/"><img src={logo1} alt="logo1" /></NavLink>
                <MainMenu />
                <div className={'btn'}>
                    <Link to="wishlist">
                        <button>Wish List</button>
                    </Link>
                </div>
                <div
                    className={isActive ? 'burger active' : 'burger'}
                    onClick={toggleClass}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>

    );
}

export default Header;