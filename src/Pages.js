import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";

export default function Pages(){
    return(
        <main id="page-content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/join" element={<Auth/>} />
            </Routes>
        </main>
    )
}