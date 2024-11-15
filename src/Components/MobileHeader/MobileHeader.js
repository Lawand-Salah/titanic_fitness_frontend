import "./MobileHeader.css";
import Logo from "../Logo/Logo";
import Icon from "../../Asset/Images 2/burger_menu_icon.svg";
import { useState } from "react";

export default function MobileHeader(){
    const [menuOpen, SetMenuOpen] = useState(false);

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
            <nav id="mobile-nav" className={ menuOpen ? "open" : "" }>{/*The class name is an if statement here that sayis is menuOpen is true then "open" otherwise its an empty string*/}
                <a href="/">HOME</a>
                <a href="/workouts">WORKOUTS</a>
                <a href="/join">JOIN</a>
            </nav>
        </header>
    )
}
