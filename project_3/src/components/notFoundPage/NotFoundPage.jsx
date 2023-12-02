import { NavLink } from "react-router-dom";
import '../../assets/scss/notfoundpage.scss';
function NotFoundPage() {
    return (
        <section className="error-page container">
            <h1>404</h1>
            <h2>Page not found</h2>
            <NavLink to="/">
                <button>Back Home</button>
            </NavLink>
        </section>
    );
}

export default NotFoundPage;