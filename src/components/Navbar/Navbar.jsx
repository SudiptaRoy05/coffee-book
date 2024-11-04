import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar backdrop-blur-xl  mx-auto fixed z-50">
      <div className="flex-1">
        <NavLink to='/' className="btn btn-ghost text-xl">Coffee</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`} to="/Coffees">Coffees</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`} to="/dashboard">Dashbaord</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
