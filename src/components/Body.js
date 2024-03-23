import ResturantCard from "./ResturantCard";
import { useState } from "react";
import foodList from "../utils/mockData";
/*
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filer-btn"
          onClick={() => {
            console.log("yo");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {foodList.map((resturant, index) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
*/
const Body = () => {
  // Local state variable - Superpowerful variable
  // It maintains the state of your component
  // It's scope is inside this component/function
  //let listOfRestaurants = []; (Normal)
  //We can modify it by a function called setListOfRestraunt
  // const[listOfRestaurants] = useState([]);
  // const[listOfRestaurants] = useState(null);
  // const[listOfRestaurants] = useState([{}]);

  /*
  let list = [];
  list = ["abc"];
  list.push("def");
  but in this superpowerful react variable --> we can't modify directly using equal to sign
  setListOfRestraunt([])
  => it will make it empty
  */

  const [listOfRestaurants, setListOfRestraunt] = useState(foodList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filer-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
            // WE WILL PASS THE NEW DATA WHICH IS BEST PRACTICE
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resturant, index) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
