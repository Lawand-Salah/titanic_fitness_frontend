import "./MobileHeader.css";
import Logo from "../Logo/Logo";
import Icon from "../../Asset/Images 2/burger_menu_icon.svg";
import { useState } from "react";

export default function MobileHeader(){
    const [menuOpen, SetMenuOpen] = useState(false);

    return(
        <header id="mobile-header">
            <Logo/>
            <img 
                className={`menu-icon ${menuOpen ? "open" : ""}`}
                src={Icon}
                alt="menu-icon"/>
        </header>
    )
}