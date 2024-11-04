import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
