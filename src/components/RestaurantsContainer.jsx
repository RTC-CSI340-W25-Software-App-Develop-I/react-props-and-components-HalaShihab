import { restaurants } from "../data/data.js";

import Restaurant from "./Restaurant";

function RestaurantsContainer(props) {
  return (
    <div className="restaurantContainer">
      {restaurants.map(restaurant => <Restaurant />)}
  
      
    </div>
  );
}

export default RestaurantsContainer;


