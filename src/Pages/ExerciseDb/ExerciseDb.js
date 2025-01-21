import "./ExerciseDb.css";

import { useEffect, useState } from "react";
import axios from "axios";
import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";

export default function ExerciseDb(){

    const [filter, setFilter] = useState(0);

    return(
        <>
            <CategoryFilter selected={filter} setFilter={setFilter} />
        </>
    )
}