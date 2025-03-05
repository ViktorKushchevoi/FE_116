import { NavLink } from "react-router-dom";
import '../../assets/scss/support.scss';
import support from '../../assets/img/support.png';
import SupportForm from "../supportForm/SupportForm";


function Support() {
    return (
        <>
            <section className="support-form container">
                <div className="left-side">
                    <h1>Welcome to our support page!</h1>
                    <p>We're here to help you with any problems you may be having with our product.</p>
                    <img src={support} alt="support" />
                </div>
                <SupportForm />
            </section>

        </>

    );
}

export default Support;