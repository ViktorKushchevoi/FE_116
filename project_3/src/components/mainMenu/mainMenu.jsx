import { NavLink } from "react-router-dom";
function mainMenu() {
    return (
        <nav>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"movies"}>Movies</NavLink></li>
                <li><NavLink to={"shows"}>Shows</NavLink></li>
                <li><NavLink to={"support"}>Support</NavLink></li>
            </ul>
        </nav>
    )
}

export default mainMenu;