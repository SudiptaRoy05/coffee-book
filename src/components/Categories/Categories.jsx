import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Categories({categories}) {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {
            // eslint-disable-next-line react/prop-types
            categories.map((category, idx) => <Link key={idx} to='/cards' role="tab" className="tab">{category}</Link>)
        }
        
      </div>
    </div>
  );
}
