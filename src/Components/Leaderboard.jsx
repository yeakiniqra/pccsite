import React from "react";
import { Link } from "react-router-dom";

function Leaderboard() {
  return (
    <div className="container mx-auto min-h-screen" >
      <main>
        <div className="min-h-screen mx-auto px-4 flex items-center justify-start md:px-8">
          <div className="max-w-lg mx-auto space-y-3 text-center">
            <h3 className="text-indigo-600 font-semibold">404 Error</h3>
            <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
              Page is under Construction. Please have patience
            </p>
            <p className="text-gray-600">
              Sorry, the page you are looking for could not be found.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/"
                className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg"
              >
                Go back
              </Link>
              <Link
                to="/contact"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Leaderboard;
