import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import gitLogo from "../assets/githubLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        <div
          className="text-2xl font-bold cursor-pointer flex items-center"
          onClick={() => (window.location.href = "/")}
        >
          <img src={Logo} alt="" className="w-8 h-8 mr-3" />
          <span>HERO.IO</span>
        </div>

        <nav className="nav-center hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold underline"
                  : "text-black font-medium hover:text-blue-500 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://github.com/mijanur-rahman-oli"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden ml-4 px-4 py-2 bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white rounded-md hover:bg-blue-600 transition md:flex gap-1 items-center"
        >
          <img className="w-5 h-5" src={gitLogo} alt="" />
          Contribute
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-blue-500 font-semibold"
                  : "block text-gray-600 hover:text-blue-500 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://github.com/mijanur-rahman-oli"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md text-center"
          >
            Contribute
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;