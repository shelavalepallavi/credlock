import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex items-center justify-between px-20 h-14 py-5">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500">&lt;</span>
          Cred<span className="text-green-500">Lock/&gt;</span>
        </div>
        {/* <ul className="flex gap-6 ">
          <li>
            <a href="/" className="hover:font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold">
              Contact
            </a>
          </li>
        </ul> */}
        <button className="flex justify-between items-center bg-green-700 rounded-full mx-2 ring-1 ring-white hover:bg-green-600">
          <img
            src="/github.svg"
            alt="github logo"
            className="invert p-2 w-10"
          />
          <span className="px-2 font-bold">Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
