import "./Profile.css";
import { Link, Outlet } from "react-router-dom";

export default function Profile(){
    return(
        <>
            <nav className="profile-nav">
                <Link to="past_workout" className="profile-nav-btn">Past Workouts</Link>
                <Link to="exercise_database" className="profile-nav-btn">Exercise Databse</Link>

                <div className="nav-dropdown-container">
                    <button className="profile-nav-btn nav-dropdown">
                        Tracking <span className="dropdown-arrow">▼</span>
                    </button>
                    <div className="nav-dropdown-options">
                        <Link to="track_weight">Track Weight</Link>
                        <Link to="track_calories">Track Calories</Link>
                        <Link to="track_mood">Track Mood</Link>
                    </div>
                </div>

                <Link to="new_workout" className="profile-nav-btn action">New Workout</Link>
            </nav>
            <div className="profile-content">
                <Outlet/>
                {/*NOTE: This allows react to navigate the user to this
                page regardless of the of the subclasses in the profile 
                page such as new_workout, exercise_database and
                past_workouts.*/}
            </div>
        </>
    )
}

/*NOTE: The Link element here is the same this as the a tag however,
a tags will refresh the whole page and runs the css and js of the page
again as a whole. On the other hand, the Link element allows react-dom
to load up only the neccessary css and js that will affect the page which
is much faster load up compared to the a tag.*/