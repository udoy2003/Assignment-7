import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";
const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "btn btn-sm bg-green-900 text-white border-none"
      : "btn btn-sm btn-ghost";

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        

        <div className="flex items-center ">
          <img src={logo} alt="Logo" className="w-20 h-10 object-contain" />
        
        </div>

     
        <div className="flex gap-2">
          <NavLink to="/" className={linkClass}>
           <FaHome/>
           
            Home
          </NavLink>

          <NavLink to="/timeline" className={linkClass}>
           <RiTimeLine/>
            Timeline
          </NavLink>

          <NavLink to="/stats" className={linkClass}>
            < BiStats/>
            Stats
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Navbar;