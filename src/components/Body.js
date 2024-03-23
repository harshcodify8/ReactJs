import ResturantCard from "./ResturantCard";
import foodList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search Bar</div>
      <div className="res-container">
        {foodList.map((resturant, index) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
