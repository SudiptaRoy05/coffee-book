import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";

export default function CoffeeCards() {
    const data = useLoaderData();
    const {category} = useParams();
    const navigate = useNavigate();

    const [coffees, setCoffees] = useState([]);
    useEffect(()=>{
       if(category){
        const filterBtCategory = [...data].filter(coffee => coffee.category === category);
        setCoffees(filterBtCategory);
       }else{
        setCoffees(data.slice(0, 6));
       }
    },[category, data])

  return (
    <div>
      {/* <h3>COFFEE : {coffees.length}</h3> */}
      <div className="grid md:grid-cols-3 gap-10">
        {
            coffees.map(coffee => <Cards key={coffee.id} coffee={coffee}></Cards>)
        }
      </div>
      <button className="btn btn-warning" onClick={()=>navigate('/coffees')}>View All</button>
    </div>
  )
}
