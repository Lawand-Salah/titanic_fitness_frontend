import "./DesktopHeader.css";
import Logo from "../Logo/Logo";

export default function DesktopHeader(){
    return(
        <header id="desktop-header">
            <Logo/>
            <a href="/" className="nav-link">HOME</a>
            <a href="/workouts" className="nav-link">WORKOUTS</a>
            <a href="/join" className="action-button">JOIN</a>
        </header>
    )
}