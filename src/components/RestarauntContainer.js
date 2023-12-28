import { CDN_URL } from "../utils/constants";

const RestarauntContainer = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
    return (
        <div className="res-card">
            <div className="res-logo">
                <img alt="res-logo" src={CDN_URL + cloudinaryImageId
        } />
            </div>
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo / 100} For Two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestarauntContainer;