import "./Logo.css";
import LogoImage from "../../Asset/images/Logo.png";

export default function Logo(){
    return(
        <a id="logo" href="/">
            <img 
                className="logo-image"
                src={LogoImage}
                alt="titanic fitness logo"
                />
                <h1>Titanic Fitness</h1>
        </a>
    )
}
