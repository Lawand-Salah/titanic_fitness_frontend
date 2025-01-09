import "./MobileHeader.css";
import Logo from "../Logo/Logo";
import Icon from "../../Asset/Images-2/burger_menu_icon.svg";
import { useState } from "react";

import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

export default function MobileHeader(){
    const [menuOpen, SetMenuOpen] = useState(false);
    const {user, logout} = useContext(UserContext)

    function toggleOpen(){
        SetMenuOpen(!menuOpen);
    }

    var classString = "";
    if(menuOpen){
        classString = "menu-icon open";
    } else{
        classString = "menu-icon";
    }
    return(
        <header id="mobile-header">
            <Logo/>
            <img 
                onClick={toggleOpen}
                className={classString}
                src={Icon}
                alt="menu-icon"/>
            <nav id="mobile-nav" className={ menuOpen ? "open" : "" }>{/*The class name here is an if statement here that sayis is menuOpen is true then "open" otherwise its an empty string*/}
                <a href="/">HOME</a>
                <a href="/workouts">WORKOUTS</a>
                { 
                    user ?
                    <>                    
                        <a className="nav-link" onClick={logout}>Logout</a>
                        <Link to="/profile" className="action-button">My account</Link>
                    </>
                        :<Link to="/join" className="action-button">JOIN</Link>
                }
            </nav>
        </header>
    )
}
