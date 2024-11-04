import { useLoaderData } from "react-router-dom";
// import Coffee from "../Coffee/Coffee";
import Cards from "../Cards/Cards";
import { useState } from "react";

export default function Coffees() {
  const coffees = useLoaderData();

  const [coffee, setCoffees] = useState(coffees);
  const handleSort = (sortBy) => {
    if(sortBy === 'populariry'){
      const sorted = [...coffees].sort((a,b)=>b.popularity - a.popularity);
      setCoffees(sorted);
    }else if(sortBy === 'rating'){
      const sorted = [...coffees].sort((a,b)=>b.rating - a.rating);
      setCoffees(sorted);
    }
  };

  return (
    <div className="pt-10">
      <div className="flex justify-between items-center my-10">
        <div>
          <h2 className="text-3xl font-bold">yoohoo Lots of coffee</h2>
        </div>
        <div>
          <button onClick={()=>{handleSort('populariry')}} className="btn btn-warning">Sort by popularity</button>
          <button onClick={()=>{handleSort('rating')}} className="btn btn-warning ml-5">Sort by rating</button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {coffee.map((coffee) => (
          // <Coffee key={coffee.id} coffee={coffee}></Coffee>
          <Cards key={coffee.id} coffee={coffee}></Cards>
        ))}
      </div>
    </div>
  );
}
