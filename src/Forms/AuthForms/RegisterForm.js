import "./AuthForm.css";
import { useState } from "react";
import axios from "axios";

import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function RegisterForm({ toggle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const { user, login, logout } = useContext(UserContext)

    function onEmailChange(event) {
        {/*NOTE: The code below allows us to target the value of the element
        that calls this function.*/}
        setEmail(event.target.value);
    }

    function register(event) {
        /*NOTE: This prevents the user from submitting
        the form without any inputs*/
        event.preventDefault();

        const ENDPOINT_URL = "http://localhost:8001/auth/register";
        const FORM_DATA = {
            "email": email,
            "password": password,
            "username": name
        }

        axios.post(ENDPOINT_URL, FORM_DATA)
            .then(response => {
                console.log(response.data)
                login(response.data)
            })
            .catch(error => {
                setError(error?.response?.data?.detail || "Error occured")
            })

        //NOTE: The code bellow is an alternate version of the axios one
        // fetch(ENDPOINT_URL, {
        //     method : "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(FORM_DATA)
        // })
        // .then(response => {
        //     if(response.ok == false){
        //         throw new Error("An error has occured");
        //     }

        //     return response.json();
        // })
        // .then(userData => {
        //     alert("Created user:" + JSON.stringify(userData))
        // })
    }

    return (
        <form className="auth-form" onSubmit={register}> {/*NOTE: The onSubmit 
        will submit the form no matter the way it is submitted, e.g., Enter key
        on keyboard or clicking the submit button on the form itself*/}
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
            {/*NOTE: The on change value for the password input is the same thing
            but less code written.*/}
            <input type="password" placeholder="Password" value={password} onChange={(p) => setPassword(p.target.value)} />
            <input type="text" placeholder="Display name" value={name} onChange={(n) => setName(n.target.value)} />

            <div className="auth-options-row">
                <button type="submit" className="auth-cofirm">Register</button>

                <div className="auth-swap-container">
                    <span>Already have an account?</span>
                    <button className="auth-swap-btn" onClick={toggle}>
                        Log In
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