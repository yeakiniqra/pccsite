import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mx-auto bg-white border-b md:max-w-full ">
       <div className=" top-0 left-0 right-0 z-50">
      <div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
        <Link to="/" className='w-12' >
              <img src="https://i.postimg.cc/6Qq9xyc8/pcc-8.jpg" alt="PCC Logo" className="lg:text-lg uppercase focus:ring-0" />
            </Link>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
          >
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                className={open ? 'hidden' : 'inline-flex'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={open ? 'inline-flex' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className={`flex-col items-center flex-grow ${open ? 'flex' : 'hidden'} md:pb-5 md:flex md:justify-end md:flex-row`}>
       
       
        <Link to="/admin" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 flex justify-center">
          Admins
        </Link>
       
        <Link to="/resources" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 flex justify-center">
        Resources
        </Link>
        <Link to="/leaderboard" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 flex justify-center">
        Leaderboard
        </Link>
        <Link to="/training" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 flex justify-center">
       Training
        </Link>
       
       
     
        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
          <Link to="/login">
            <button className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
              Sign in
            </button>
          </Link>
          <Link  to="https://docs.google.com/forms/d/e/1FAIpQLSec4JcrH_uY_7R3UQPsvuHDg7qPMvDh2A_UD7JHydyStmr5XQ/viewform"
                      target="_blank">
            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
              Registration
            </button>
          </Link>
        </div>
      </nav>
      </div>
      </div>  
    </div>
  );
};

export default Nav;
