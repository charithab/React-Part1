import RestarauntContainer from "./RestarauntContainer";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const[listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <button className="filter-btn" 
            onClick = {() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.data.avgRating >= 4
                    );
                    setListOfRestaurants(filteredList);
            }}
            >
            Top Rated</button>
        <div className="restraurantContainer">
            {listOfRestaurants.map((restaurant) => (
                <RestarauntContainer key={restaurant.data.id} resData={restaurant}/>
            ))}
        </div>
        </div>
    )
}

export default Body;

