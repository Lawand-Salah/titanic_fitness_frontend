import "./ExerciseDb.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";

export default function ExerciseDb(){

    const [filters, setFilter] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const [exercisesCache, setExercisesCache] = useState({});

    const [exercise, setExercises] = useState([]);

    function getExercises(){
        let api_endpoint = "https:wger.de/api/v2/exercisebaseinfo/?language=2&limit=900";

        if(filters > 0){
            api_endpoint += `&category=${filters}`
        }

        // if (exercisesCache[api_endpoint]){
        //     setExercises(exercisesCache[api_endpoint]);
        //     setIsLoading(false);
        //     return;
        // }
        const cached = localStorage.getItem(api_endpoint);
        if (cached){
            setExercises(JSON.parse(cached));
            setIsLoading(false);
            return;
        }

        axios.get(api_endpoint)
        .then((response) => {
            console.log(response.data.results);
            let foundExercises = []

            for( let excerciseMetadata of response.data.results){
                for(let exercise of excerciseMetadata.exercises){
                    if(exercise.language === 2){
                        foundExercises.push(exercise);
                        
                    }
                }
            }
            
            // setExercisesCache({
            //     ...exercisesCache,
            //     [api_endpoint]: foundExercises
            // });

            localStorage.setItem(
                api_endpoint,
                JSON.stringify(foundExercises)
            )
            setExercises(foundExercises);
            setIsLoading(false);
            console.log(foundExercises);
        })
        .catch((error) => {
            console.log(error)
            setError(error?.response?.data?.detail || "Error Occured");
            setIsLoading(false);
        })
    }

    useEffect(() => {
        console.log("reee")
        getExercises();
    }, [filters]) //NOTE: The brackets will listen to any values and run the getExercises() function

    if(isLoading){
        return(
            <>
                <CategoryFilter selected={filters} setFilter={setFilter} />
                <div>Error loading filters: {error}</div>
            </>
        )
    }
    if(error){
        return(
            <>
                <CategoryFilter selected={filters} setFilter={setFilter} />
                <div>Error loading filters: {error}</div>
            </> 
        )
    }

    return(
        <>
            <CategoryFilter selected={filters} setFilter={setFilter} />
            {
                exercise.map((exercise, i) => {
                    return <div key={i}>{exercise.name}</div>
                })
            }
        </>
    )
}