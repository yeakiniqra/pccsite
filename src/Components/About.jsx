import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto min-h-screen" >
    <section className="overflow-hidden pt-20 pb-12 ml-5 lg:pt-[120px] lg:pb-[90px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center mx-3 sm:-mx-4 ">
              <div className="w-full px-3 sm:px-4 ">
                <div className="py-3 sm:py-4">
                  <img
                    src="https://i.postimg.cc/SxLc4mbC/pcc-5.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="https://i.postimg.cc/QtC7c59J/pcc-6.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-2 sm:px-4">
                <div className="relative z-10 my-4">
                  <img
                    src="https://i.postimg.cc/q7jntQR7/pcc-7.jpg"
                    crossOrigin="anonymous"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-6 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-primary">
                About Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-gray-900 sm:text-[40px]/[48px]">
                Make your Coding Journey Easy & Efficient
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Hello! This is the official Website of UAP Programming Contest Club (PCC). You will find all the necessary updates on ICPCs, IUPCs, IDPCs, contest classes, and regular contests. Also, if you are having trouble solving problems, share your code and mention your problem, and then mention what kind of problems you are facing.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                If you want to share your code then do it on one of these platforms:
                <br />
                <a href="http://ideone.com/" target="_blank" className="font-bold text-blue-500" >Ideone.com</a>
                <br />
                <a href="http://paste.ubuntu.com" target="_blank" className="font-bold text-blue-500" >paste.ubuntu.com</a>
                <br />
                <a href="http://pastebin.com" target="_blank" className="font-bold text-blue-500" >pastebin.com</a>
                <br />
                Thank you. Welcome to UAP Programming Contest Club. Happy Coding.
              </p>
              <Link
                to="/discover-more" // Add the actual route you want to link to
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
