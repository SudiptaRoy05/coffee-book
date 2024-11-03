import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 md:w-11/12 mx-auto">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl">Coffee</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                </ul>
            </div>
        </div>
    )
}
