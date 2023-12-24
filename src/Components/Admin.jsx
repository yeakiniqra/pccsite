import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function Admin() {
  const { committeeType } = useParams();
  const [committeeInfo, setCommitteeInfo] = useState({
    faculty: [],
    advisor: [],
  });

  const [currentCommitteeType, setCurrentCommitteeType] = useState(
    committeeType && ["faculty", "advisor"].includes(committeeType)
      ? committeeType
      : "faculty"
  );

  const tableRef = useRef(null); // Ref to store the table element
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showOperationsCard, setShowOperationsCard] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/faculty.json");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch faculty data. Status: ${response.status}`
          );
        }

        const data = await response.json();
        console.log("Fetched committee data:", data);
        setCommitteeInfo(data);
      } catch (error) {
        console.error("Error fetching committee data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    // Save the current scroll position when switching committees
    setScrollPosition(tableRef.current.scrollTop);
  }, [currentCommitteeType]);

  const setCommitteeType = (type) => {
    setCurrentCommitteeType(type);
  };

  const getCommitteeMembers = () => {
    return committeeInfo[currentCommitteeType] || [];
  };

  // Restore the scroll position when the table is rendered
  const handleTableRender = () => {
    tableRef.current.scrollTop = scrollPosition;
  };

  return (
    <div className="container mx-auto min-h-screen" >
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-2xl font-bold mb-4">
        {currentCommitteeType === "faculty"
          ? "Faculty Committee"
          : "Advisor Committee"}
      </h2>

      <div className="mb-4">
        <button
          onClick={() => setCommitteeType("faculty")}
          className="bg-violet-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Faculty Committee
        </button>
        <button
          onClick={() => setCommitteeType("advisor")}
          className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Advisor Committee
        </button>

        <button
          onClick={() => setShowOperationsCard(!showOperationsCard)}
          className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Operations Committee
        </button>
      </div>

      {showOperationsCard && (
        <div className="bg-gray-200 p-4 rounded-md my-4">
          <p>Explore the Operations Committee and its tasks within the club.</p>
          <a
            href="https://drive.google.com/file/d/1xPyeEd3UNELIjJytBiNRxqit3Qa1bNuR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mt-2"
          >
            Download Document
          </a>
        </div>
      )}

      <div className="overflow-x-auto" ref={tableRef}>
        <table className="min-w-full leading-normal" onLoad={handleTableRender}>
          <thead>
            <tr>
              {currentCommitteeType === "faculty" ? (
                <>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="hidden md:table-cell px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Designation
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Responsibility
                  </th>
                  <th className="hidden md:table-cell px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                </>
              ) : (
                <>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="hidden md:table-cell px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Batch
                  </th>
                  <th className="hidden md:table-cell px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    RegId
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody key={currentCommitteeType}>
            {getCommitteeMembers().map((member, index) => (
              <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {member.Name}
                </td>
                {currentCommitteeType === "faculty" ? (
                  <>
                    <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {member.Designation}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {member.Responsibility}
                    </td>
                    <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {member.Email}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {member.Batch}
                    </td>
                    <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {member.RegId}
                    </td>
                    <td className=" md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {member.Email}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default Admin;
