import React from "react";
import { Link } from "react-router-dom";

function Training() {
  return (
    <div className="container mx-auto my-8 min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-4">Training</h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Senior Topics Card */}
        <div className="bg-cyan-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Senior Topics</h2>
            <p className="mb-5" > Here seniors can discover their topics for practice </p>
          <Link to="https://docs.google.com/spreadsheets/d/1xSi2KFFayUfyJurKzxQO7_RfZVwgt0VO/edit#gid=1936537032" target="_blank" className="btn btn-primary">
            Learn More
          </Link>
        </div>

        {/* Senior Schedule (Trainer) Card */}
        <div className="bg-violet-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Senior Schedule (Trainer)</h2>
          <p className="mb-5" >  Here seniors can have their trainer schedule </p>
          <Link to="https://docs.google.com/spreadsheets/d/1xSi2KFFayUfyJurKzxQO7_RfZVwgt0VO/edit#gid=1936537032" target="_blank" className="btn btn-primary">
            Learn More
          </Link>
        </div>

        {/* Junior Topics Card */}
        <div className="bg-cyan-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Junior Topics</h2>
          <p className="mb-5" > Here juniors can discover their topics for practice </p>
          <Link to="https://docs.google.com/spreadsheets/d/1OeqGmSQHQ6BrmHVxFV7slsHfFDkrRTSg/edit#gid=1936537032" target="_blank" className="btn btn-primary">
            Learn More
          </Link>
        </div>

        {/* Junior Schedule (Trainer) Card */}
        <div className="bg-violet-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Junior Schedule (Trainer)</h2>
          <p className="mb-5" > Here juniors can have their trainer schedule </p>
          <Link to="https://docs.google.com/spreadsheets/d/1zLZfFRGbRHijiUlib-Jn_p-Sw-dxkKVrkmQG4wbwOx4/edit#gid=186001220" target="_blank" className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Training;
