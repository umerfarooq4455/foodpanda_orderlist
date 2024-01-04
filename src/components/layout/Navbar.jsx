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
    <nav className="relative bg-gradient-to-r from-red-600 to-yellow-400 text-white mx-auto p-6 ">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-center font-sanss font-extralight md:text-3xl text-2xl"
        >
          Video Downloader
        </Link>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex  font-sanss font-medium">
          <Link to="/" className="hover:text-[#ED5400] ">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#ED5400] ">
            About
          </Link>
          <Link to="contactus" className="hover:text-[#ED5400] ">
            Contact Us
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
      <div className="md:hidden  font-sanss font-medium text-[#ED5400]">
        <div
          className={
            toggleMenu
              ? "absolute flex flex-col items-center self-end  h-screen py-8 mt-6 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-0 right-0 drop-shadow-md"
              : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <Link
            to="/"
            className="hover:text-[#bb6464] "
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#bb6464] "
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/contactus"
            className="hover:text-[#bb6464] "
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
