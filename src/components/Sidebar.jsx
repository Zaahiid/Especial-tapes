import { NavLink } from "react-router-dom";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="block lg:hidden text-white">
      <div
        className={`fixed top-0 left-0 w-[90vw] h-screen overflow-auto bg-blue-600 transition-all duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="fixed right-3 mt-3" onClick={toggleSidebar}>
          <svg
            className="w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 5L4.99998 19M5.00001 5L19 19"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ul className=" mt-8 mb-5">
          <li className="transition-all duration-300  hover:bg-blue-800 block py-2 pl-3 pr-4">
            <NavLink to="/" className="" onClick={toggleSidebar}>
              About Us
            </NavLink>
          </li>
          <li className="pl-3">Products</li>
          <li className="pl-3">Clients</li>
          <li className="pl-3">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
