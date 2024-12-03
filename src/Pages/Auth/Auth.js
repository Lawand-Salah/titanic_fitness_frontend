import "./Auth.css";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import AuthImage from "../../Asset/images/banner_auth.png";
import RegisterForm from "../../Forms/AuthForms/RegisterForm";


export default function Auth(){
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
                    <RegisterForm />
                </div>
            </div>
        </>
    )
}
