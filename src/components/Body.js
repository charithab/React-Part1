import RestarauntContainer, { withPromotedLabel } from "./RestarauntContainer";
import resList from "../utils/mockData";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchedRestaurants, setSearchRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");

  const RestarauntContainerPromoted = withPromotedLabel(RestarauntContainer);

  // useEffect(() => {
  //     fetchData();
  // }, []);
  // const fetchData = async () => {

  //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  //     const json = await data.json;
  //     console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants + 'mode');
  //     setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like youre offline!! Please check your internet connection</h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-100 m-4 py-2"
            onClick={() => {
              const searchFilteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchRestaurants(searchFilteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <div className="flex items-center m-4 p-4 search">
          <button
            className="px-4 bg-gray-100 py-2"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {searchedRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaraunts/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestarauntContainerPromoted resData={restaurant} />
            ) : (
              <RestarauntContainer resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
