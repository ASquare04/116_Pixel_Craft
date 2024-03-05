import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../imgs/qala.png";
import Animate from "../common/page-animation";

const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  return (
    <>
      <header className="bg-black text-white py-3 md:py-2">
        <div className="container mx-auto mt-3 flex items-center justify-evenly px-6">
          <Animate>
          <Link to="/" className="flex items-center">
            <img src={logo} className="md:w-3/12 w-9/12 h-auto" alt="Logo" />
          </Link>
          </Animate>
          <nav className="md:ml-auto w-9/12 md:mr-auto flex gap-8 items-center">
            <Link to="/" className="link hover:text-seagreen">
              Home
            </Link>
            <Link to="/blog" className="link hover:text-seagreen">
              Blog
            </Link>
            <Link to="/explore" className="link hover:text-seagreen">
              Explore
            </Link>
            <Link to="/editor" className="link hover:text-seagreen">
              Artists
            </Link>
          </nav>
          <div className="relative">
            <div
              className={`${
                searchBoxVisibility ? "block" : "hidden"
              } md:flex md:left-0 md:top-full md:mt-0.5 border-b border-grey md:border-0 md:relative md:inset-0 md:p-0 md:w-auto md:show`}
            >
              <input
                type="text"
                placeholder="Search"
                className="w-44 h-10 bg-black p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder-text-white md:pl-12 focus:outline-none focus:ring-1 focus:ring-red-300"
              />
              <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-4 top-1/2 -translate-y-1/2 text-xl text-red"></i>
            </div>
            <button
              className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center absolute top-0 right-0 mt-0.5"
              onClick={() =>
                setSearchBoxVisibility((currentVal) => !currentVal)
              }
            >
              <i className="fi fi-rr-search text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
