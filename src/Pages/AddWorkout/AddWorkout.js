import "./AddWorkout.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";

import axios from "axios";

export default function AddWorkout(){

    const { user } = useContext(UserContext);

    return(
        <div className="workout-tracker-wrapper">
            <div className="workout-summary-container">
                temp
            </div>
            <form className="workout-form">
                dsadsa
            </form>
        </div>
    )

}