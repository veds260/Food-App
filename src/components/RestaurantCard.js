import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props)=>{
    
    const {resData} = props;
    const {name, cuisines, avgRatingString, cloudinaryImageId, costForTwo} = resData?.info;
        return(
        <div className="restaurant">
            <img className="image" src={CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} Stars⭐</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;