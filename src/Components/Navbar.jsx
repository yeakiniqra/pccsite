import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
    
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-4 shadow bg-base-100 rounded-box w-52 z-20"
            >
              <li>
                <Link to="/about">About PCC</Link>
              </li>
              <li>
                <Link to="/admin">Admins</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
                <ul className="p-2">
                  <li>
                    <Link to="/resources">Books</Link>
                  </li>
                  <li>
                    <Link to="/resources">Essentials</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/leaderboard">Leaderboard</Link>
              </li>
              <li>
                <Link to="/training">Training</Link>
                <ul className="p-2">
                  <li>
                    <Link to="/training">Senior Topics</Link>
                  </li>
                  <li>
                    <Link to="/training">Senior Schedule (Trainer)</Link>
                  </li>
                  <li>
                    <Link to="/training">Junior Topics</Link>
                  </li>
                  <li>
                    <Link to="/training">Junior Schedule (Trainer)</Link>
                  </li>
                  <li>
                    <Link
                      to="https://docs.google.com/forms/d/e/1FAIpQLSec4JcrH_uY_7R3UQPsvuHDg7qPMvDh2A_UD7JHydyStmr5XQ/viewform"
                      target="_blank"
                    >
                      Registration
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost w-20">
            <img src="https://i.postimg.cc/6Qq9xyc8/pcc-8.jpg" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/about">About PCC</Link>
            </li>
            <li>
              <Link to="/admin">Admins</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <details>
                <summary>Resources</summary>
                <ul className="p-2 z-20">
                  <li>
                    <Link to="/resources">Books</Link>
                  </li>
                  <li>
                    <Link to="/resources">Essentials</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <details>
                <summary>Training</summary>
                <ul className="p-2 z-20">
                  <li>
                    <Link to="/training">Senior Topics</Link>
                  </li>
                  <li>
                    <Link to="/training">Senior Schedule (Trainer)</Link>
                  </li>
                  <li>
                    <Link to="/training">Junior Topics</Link>
                  </li>
                  <li>
                    <Link to="/training">Junior Schedule (Trainer)</Link>
                  </li>
                  <li className="px-12 bg-slate-900 text-white rounded-xl">
                    <Link
                      to="https://docs.google.com/forms/d/e/1FAIpQLSec4JcrH_uY_7R3UQPsvuHDg7qPMvDh2A_UD7JHydyStmr5XQ/viewform"
                      target="_blank"
                      className="text-white hover:text-white visited:text-white"
                    >
                      Registration
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end  mr-10">
          <Link to="/login" className="btn btn-outline rounded-xl">
            Log in
          </Link>
        </div>
      </div>
    
    </div>
  );
}

export default Navbar;
