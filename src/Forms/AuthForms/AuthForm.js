import "./AuthForm.css";
import { useState } from "react";

import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

export default function AuthForm({toggle}){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { user, login, logout } = useContext(UserContext)

    function onEmailChange(event){
        {/*NOTE: The code below allows us to target the value of the element
        that calls this function.*/}
        setEmail(event.target.value);
    }

    //NOTE: Implement function for the login similar to the registeration page
    function loginform(event){
        event.preventDefault();

        const ENDPOINT_URL = "http://localhost:8001/auth/login";
        const FORM_DATA = {
            "email": email,
            "password": password
        }

        axios.post(ENDPOINT_URL, FORM_DATA)
        .then(response => {
            console.log(response.data)
            login(response.data)
        })
        .catch(error => {
            setError(error?.response?.data?.detail || "Invalid credentails")
        })
    }

    return(
        <form className="auth-form" onSubmit={loginform}>
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} /> {/*NOTE: Add the onsubmit feature that has the login function as its value*/}
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
            {
                error ? <div className="error">{error}</div>
                    : null
            }
        </form>
    )
}