import "./Auth.css";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import AuthImage from "../../Asset/images/banner_auth.png";
import RegisterForm from "../../Forms/AuthForms/RegisterForm";
import AuthForm from "../../Forms/AuthForms/AuthForm.js";

import { useState } from "react";

export default function Auth(){

    const [isRegister, setIsRegister] = useState(true);

    function toggleForms(){
        setIsRegister(!isRegister);
    }
    
    return(
        <>
            <div className="auth-container">
                <div className="auth-hero-column">
                    <HeroBanner bgImage={AuthImage}>
                        <h1>SET SAIL</h1>
                        <h2>Crash through tour fitness goals</h2>
                    </HeroBanner>
                </div>
                <div className="auth-form-column">
                    <h2>Unsinkable gains await</h2>
                    {
                        isRegister ? <RegisterForm toggle={toggleForms}/> : <AuthForm toggle={toggleForms}/>
                    }
                </div>
            </div>
        </>
    )
}
