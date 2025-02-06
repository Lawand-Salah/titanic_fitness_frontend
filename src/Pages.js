import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Profile from "./Pages/Profile/Profile";
import ExerciseDb from "./Pages/ExerciseDb/ExerciseDb";

import AddWorkout from "./Pages/AddWorkout/AddWorkout";

export default function Pages(){
    return(
        <main id="page-content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/join" element={<Auth/>} />
                <Route path="/profile/*" element={<Profile/>}>
                {/*NOTE: The * shown on the route above indicate any text,
                meaning the url can have any text after the /profile path
                and still take the user to the profile page*/}
                    <Route path="new_workout" element={<AddWorkout/>}/>
                    <Route path="exercise_database" element={<ExerciseDb/>}/>
                    <Route path="past_workouts" element={<div>past_workouts</div>}/>
                </Route>
            </Routes>
        </main>
    )
}