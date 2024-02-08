import { CDN_URL } from "../utils/constants";

const RestarauntContainer = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="w-[250px] bg-gray-100 m-4 p-4 rounded-lg hover:bg-gray-200">
      <div className="pb-4">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h1 className="font-bold text-lg">{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

//higher order component

//input = RestarauntContainer = output => RestarauntContainerPromoted

export const withPromotedLabel = (RestarauntContainer) => {
  return (props) => {
    return (
      <div>
        <label className="p-2 rounded-lg bg-black text-white">Promoted</label>
        <RestarauntContainer {...props} />
      </div>
    );
  };
};

export default RestarauntContainer;
