import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Categories({categories}) {
  return (
    <div className="my-10">
      <div role="tablist" className="tabs tabs-lifted">
        {
            // eslint-disable-next-line react/prop-types
            categories.map((category, idx) => <NavLink key={idx} to={`/category/${category.category}`} role="tab" className={({isActive})=> `tab ${isActive? 'tab-active text-xl font-bold':''}`  }>{category.category}</NavLink>)
        }
        
      </div>
    </div>
  );
}
