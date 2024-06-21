import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full bg-blue-600 hidden lg:block fixed top-0">
      <div className="w-10/12 mx-auto flex  text-white  text-lg font-semibold ">
        <div className="py-4 px-5 hover:bg-blue-800 hover:border-x-white transition-all duration-300  cursor-pointer group">
          About Us
        </div>
        <div className="py-4 px-5 hover:bg-blue-800 hover:border-x-white transition-all duration-300  cursor-pointer group">
          Products
        </div>
        <div className="py-4 px-5 hover:bg-blue-800 hover:border-x-white transition-all duration-300  cursor-pointer group">
          Clients
        </div>
        <div className="py-4 px-5 hover:bg-blue-800 hover:border-x-white transition-all duration-300  cursor-pointer group">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
