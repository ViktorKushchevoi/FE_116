import { useForm } from "react-hook-form";
import '../../assets/scss/_support_form.scss';
function SupportForm() {
    const { handleSubmit, register, formState: { errors } } = useForm();

    function onSubmit(values) {
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form-name">
                <div className="form-item">
                    <label>First Name</label>
                    <input
                        className={errors.firstName ? 'error' : ''}
                        type="text"
                        placeholder="Enter First Name"
                        {...register("firstName", {
                            required: "Required",
                            pattern: {
                                value: /(\w|\s|[\.\'-])+/,
                                message: "Incorrect first name"
                            }
                        })}
                    />
                    <p className={'error-message'}>{errors.firstName && errors.firstName.message}</p>
                </div>
                <div className="form-item">
                    <label>Last Name</label>
                    <input
                        className={errors.lastName ? 'error' : ''}
                        type="text"
                        placeholder="Enter Last Name"
                        {...register("lastName", {
                            required: "Required",
                            pattern: {
                                value: /(\w|\s|[\.\'-])+/,
                                message: "Incorrect last name"
                            }
                        })}
                    />
                    <p className={'error-message'}>{errors.lastName && errors.lastName.message}</p>
                </div>
            </div>
            <div className="form-contacts">
                <div className="form-item">
                    <label>Email</label>
                    <input
                        className={errors.email ? 'error' : ''}
                        type="email"
                        placeholder="Enter your Email"
                        {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />
                    <p className={'error-message'}>{errors.email && errors.email.message}</p>
                </div>
                <div className="form-item">
                    <label>Phone</label>
                    <input
                        className={errors.phone ? 'error' : ''}
                        type="tel"
                        placeholder="Enter Phone Number"
                        {...register("phone", {
                            required: "Required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Invalid phone number"
                            }
                        })}
                    />
                    <p className={'error-message'}>{errors.phone && errors.phone.message}</p>
                </div>
            </div>
            <div className="form-item">
                <label>Message</label>
                <textarea
                    className={errors.message ? 'error' : ''}
                    placeholder="Enter your message"
                    rows="5"
                    {...register("message", {
                        required: "Required",
                        pattern: {
                            value: /(\w|\s|[\.\'-])+/,
                            message: "Incorrect message"
                        }
                    })}
                />
                <p className={'error-message'}>{errors.message && errors.message.message}</p>
            </div>
            <div className="form-agree">
                <div className="form-item">
                    <input
                        className={errors.agree ? 'error' : ''}
                        type="checkbox"
                        {...register("agree", {
                            required: "You must agree to the Terms of Use and Privacy Policy"
                        })}
                    />
                    <label>I agree with Terms of Use and Privacy Policy
                        <p className={'error-message'}>{errors.agree && errors.agree.message}</p>
                    </label>

                </div>
                <button type="submit">Send Message</button>
            </div>

        </form>
    )
}

export default SupportForm;