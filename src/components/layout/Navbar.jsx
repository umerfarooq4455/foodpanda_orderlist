import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMobileMenu = () => {
    setToggleMenu(false);
  };
  return (
    <nav className="relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white mx-auto p-6 ">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-center font-extralight md:text-3xl text-2xl font-pacific hover:text-sky-800 "
        >
          Video Downloader
        </Link>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex text-xl  font-pacific">
          <Link to="/" className="hover:text-sky-800 ">
            Home
          </Link>
          <Link to="/about" className="hover:text-sky-800 ">
            About
          </Link>
          <Link to="contactus" className="hover:text-sky-800 ">
            Contact us
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? "open block hamburger md:hidden focus:outline-none"
              : "block hamburger md:hidden focus:outline-none"
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden  text-xl font-medium text-white font-pacific">
        <div
          className={
            toggleMenu
              ? "absolute flex flex-col items-center self-end  h-screen py-8 mt-6 space-y-6 font-bold bg-gradient-to-r from-cyan-500 to-blue-500 sm:w-auto sm:self-center left-0 right-0 drop-shadow-md"
              : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-gradient-to-r from-cyan-500 to-blue-500 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <Link
            to="/"
            className="hover:text-sky-800 "
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-sky-800 "
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/contactus"
            className="hover:text-sky-800 "
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
