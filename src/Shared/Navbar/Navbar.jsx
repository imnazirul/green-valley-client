import { Link, NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./Navbar.css";
const Navbar = () => {
  const navLinks = (
    <>
      <span className="hover:text-[#00AEFF] ">
        <NavLink className="px-4 py-2 rounded-lg" to="/">
          Home
        </NavLink>
      </span>
      <span className="hover:text-[#00AEFF]">
        <NavLink className="px-4 py-2 rounded-lg" to="/login">
          Login
        </NavLink>
      </span>
      <span className="hover:text-[#00AEFF]">
        <NavLink className="px-4 py-2 rounded-lg" to="/register">
          Register
        </NavLink>
      </span>
      <span className="hover:text-[#00AEFF]">
        <NavLink className="px-4 py-2 rounded-lg" to="/user_profile">
          User Profile
        </NavLink>
      </span>
      <span className="hover:text-[#00AEFF]">
        <NavLink className="px-4 py-2 rounded-lg" to="/update_profile">
          Update Profile
        </NavLink>
      </span>
      <span className="hover:text-[#00AEFF]">
        <NavLink className="px-4 py-2 rounded-lg" to="/blogs">
          Blogs
        </NavLink>
      </span>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </div>
        </div>
        <a className=" btn-ghost font-jost flex gap-0 text-3xl font-bold text-[#0054A5]">
          Green Valley
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 font flex gap-5 text-[16px]">
          {navLinks}
        </div>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="bg-green-1000 btn bg-[#3B7197] text-[#FCFCFC] font-bold flex items-center gap-1 hover:bg-[#3B7197]"
        >
          <FiLogIn></FiLogIn>Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;