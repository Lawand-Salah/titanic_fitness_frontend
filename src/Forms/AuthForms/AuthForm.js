import "./AuthForm.css";
import { useState } from "react";


export default function AuthForm({toggle}){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onEmailChange(event){
        {/*NOTE: The code below allows us to target the value of the element
        that calls this function.*/}
        setEmail(event.target.value);
    }


    return(
        <form className="auth-form">
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange}/>
            {/*NOTE: The on change value for the password input is the same thing
            but less code written.*/}
            <input type="password" placeholder="Password" value={password} onChange={(p) => setPassword(p.target.value)}/>

            <div className="auth-options-row">
                <button type="submit" className="auth-cofirm">Log in</button>

                <div className="auth-swap-container">
                    <span>Don't have an account?</span>
                    <button className="auth-swap-btn" onClick={toggle}>
                        Sign up
                    </button>
                </div>
            </div>
        </form>
    )
}