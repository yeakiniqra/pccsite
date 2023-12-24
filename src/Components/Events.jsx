import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Events() {
  return (
    <div className="container mx-auto"  >
    <section className="py-10 rounded-2xl animated-gradient">
      <div className="min-h-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <h3 className="btn btn-outline hover:bg-violet-600 text-white rounded-xl text-2xl px-4 py-1 font-semibold">
            UPCOMING EVENTS
          </h3>
          <p className="text-gray-100 text-3xl font-semibold sm:text-4xl">
            UAP বিজয় কন্টেস্ট -২৩
          </p>
          <p className="text-gray-100">
            We will be hosting a contest Very Soon. The contest will be held on
            Codeforces. The contest will be rated for Div 2 participants. The
            contest will be held on Codeforces. The contest will be rated for
            Div 2 participants.
          </p>
        </div>
        <div className="mt-4">
          <Link
            to="/discover-more"
            className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Events;
