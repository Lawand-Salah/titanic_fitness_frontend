import "./CategoryFilter.css";

import { useState, useEffect } from "react";
import axios from "axios";

export default function CategoryFilter({selected, setFilter}){

    const [filters, setFilters] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const api_endpoint = "https://wger.de/api/v2/exercisecategory/"

    useEffect( () => {

        axios.get(api_endpoint)
        .then((response) => {
            setFilters(
                [
                    {
                        "name": "All",
                        "id": 0
                    },
                    ...response.data.results
                ]
            );
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error?.response?.data?.detail || "Error Occured");
            setIsLoading(false);
        })

    }, [] );




    if(isLoading){
        return(
            <div>Filters are loading...</div>
        )
    }
    if(error){
        return(
            <div>Error loading filters: {error}</div>
        )
    }

    return(
        <div className="category-filter-container">
            <span>Filter:</span>
            <div className="filter-options">
                {
                    filters.map((category) => {
                        return <button
                        key={category.id}
                        className={`filter-btn ${category.id == selected ? "active" : null}`} 
                        onClick={() => setFilter(category.id)}>{category.name}</button>
                    })
                }
            </div>
        </div>
    )
}