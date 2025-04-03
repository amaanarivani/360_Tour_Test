import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  return (
    <>
      {location.pathname === "/single-tour" ? (
        <></>
      ) : (
        <>
          <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
              <div className="flex flex-wrap items-center justify-between p-4 mx-60">
                <button
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  onClick={() => navigate("/")}
                >
                  <img
                    src="/360-logo.png"
                    className="h-12 cursor-pointer"
                    alt="360 Logo"
                  />
                </button>
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
                <div
                  className="hidden w-full md:block md:w-auto"
                  id="navbar-default"
                >
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className="nav-item mt-2">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item mt-2">
                      <NavLink className="nav-link" to="/explore">
                        Explore
                      </NavLink>
                    </li>
                    {/* <li className="nav-item mt-2">
                      <NavLink
                        className="nav-link"
                        // to="/explore"
                      >
                        Features
                      </NavLink>
                    </li>
                    <li className="nav-item mt-2">
                      <NavLink
                        className="nav-link"
                        // to="/explore"
                      >
                        Avatar
                      </NavLink>
                    </li>
                    <li className="nav-item mt-2">
                      <NavLink
                        className="nav-link"
                        // to="/explore"
                      >
                        Pricing
                      </NavLink>
                    </li>
                    <li className="nav-item mt-2">
                      <NavLink
                        className="nav-link"
                        // to="/explore"
                      >
                        Community
                      </NavLink>
                    </li> */}
                    {/* <li className="nav-item mt-2">
                <NavLink className="nav-link" to="/single-tour">
                  Single Tour
                </NavLink>
              </li> */}
                    {/* <li className="">
                      <button className="bg-purple-500 text-white px-5 py-2 rounded-lg cursor-pointer hover:animate-pulse">
                        <i class="fa-solid fa-plus"></i> Create Tour Now
                      </button>
                    </li> */}
                    <li className="">
                      <input type="text" className="border border-gray-300 p-1.5 rounded-lg" placeholder="Search" />
                      <button className="ms-2 border border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer px-5 py-2 rounded-lg">Search</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
