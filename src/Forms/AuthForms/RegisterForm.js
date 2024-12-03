import "./AuthForm.css";


export default function RegisterForm(){

    return(
        <form className="auth-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text"placeholder="Display name" />

            <div className="auth-options-row">
                <button type="submit" className="auth-cofirm">Register</button>

                <div className="auth-swap-container">
                    <span>Already have an account?</span>
                    <button className="auth-swap-btn">
                        Log In
                    </button>
                </div>
            </div>
        </form>
    )
}