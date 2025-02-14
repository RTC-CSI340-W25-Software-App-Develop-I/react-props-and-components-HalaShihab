import {Restaurant} from"./Restaurant";
import {data} from "./data/data.js";

function RestaurantsContainer() {
  return(
      <div className ="restaurantcontainer">
          <p>Restaurantcontainer</p>
          //add a pair of {} in the div being returned by RestaurantsContainer
          //add a pair of {} in the div being returned by RestaurantsContainer
          //- within those {} call .map() on the data array. Pass .map a callback that returns the Restaurant component

          {data.Restaurant.map((restaurant)=>{
            return <Restaurant key={restaurant.id} restaurant={restaurant}/>

          })}
          

      //Pass props from the container component to the presentational component.



      

              
              
        
          
      </div>

  )
}

export default  RestaurantsContainer;