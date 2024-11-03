import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-290 px)]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
