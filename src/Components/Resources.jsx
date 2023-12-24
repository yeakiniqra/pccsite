// ResourcesPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="container mx-auto p-8 min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-8">Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ResourceCard
          title="Programming Books"
          description="Learn the fundamentals of programming with our comprehensive guide."
          downloadLink="https://drive.google.com/drive/folders/1vUpZeHB89zFUWoNRS2uorWow1pzOC709"
        />

        <ResourceCard
          title="Programming Essentials"
          description="Explore advanced topics in data structures and algorithms for Coding Contest."
          downloadLink="https://drive.google.com/drive/folders/1LBDKz7TbBbDrdnItaRais9YA62Odk5aP"
        />
      </div>
    </div>
  );
};

const ResourceCard = ({ title, description, downloadLink }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
      <h2 className="text-xl text-gray-100 font-bold mb-4">{title}</h2>
      <p className="text-gray-100 mb-4">{description}</p>
      <a
        href={downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 rounded-xl text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-900"
      >
        Download Now
      </a>
    </div>
  );
};

export default Resources;
