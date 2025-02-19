import {RestaurantContainer} from "./components/RestaurantsContainer";
import { Restaurant } from "./components/Restaurant";
import "./App.css";
//App is the root of our application and where we load in our components.
function App() {
  return (
    <div className="App">
      <RestaurantContainer/>
      <Restaurant/>
    </div>
  );
}
export default App;

