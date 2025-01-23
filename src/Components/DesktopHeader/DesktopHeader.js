import "./DesktopHeader.css";
import Logo from "../Logo/Logo";

import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

export default function DesktopHeader(){

    const {user, logout} = useContext(UserContext)

    return(
        <header id="desktop-header">
            <Logo/>
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/workouts" className="nav-link">WORKOUTS</Link>

            { 
                user ?
                <>                    
                    <a className="nav-link" onClick={logout}>LOGOUT</a>
                    <Link to="/profile" className="action-button">MY ACCOUNT</Link>
                </>
                    :<Link to="/join" className="action-button">JOIN</Link>
            }
        </header>
    )
}