import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Events from "./Events";
import Accordion from "./Accordion";
import Contact from "./Contact";
import "../App.css";

const Home = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new window.Swiper(".swiper-container", {
      autoplay: {
        delay: 5000, // Autoplay delay in milliseconds
      },
      loop: true, // Enable continuous loop
    });
  }, []);

  return (
    <div className="overflow-hidden min-h-screen ">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap"
        rel="stylesheet"
      />

      <div className="absolute w-full p-2 mr-8 text-white text-2xl bg-purple-600">
        <marquee behavior="scroll" direction="left" scrollamount="8">
          <p>
            Upcoming Events: UAP বিজয় কন্টেস্ট -২৩{" "}
            <span className="ml-48 font-mono">
              This Site is under Construction.Please Have Patience.
            </span>{" "}
          </p>
        </marquee>
      </div>
      {/* Swiper Container */}
      <div className="swiper-container h-screen relative -z-20">
        <div className="swiper-wrapper ">
          {/* Add your background images as slides */}
          <div
            className="swiper-slide bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://i.postimg.cc/cLHYc9mp/pcc-1.jpg")',
            }}
          >
            <div className="dark-overlay"></div>
          </div>
          <div
            className="swiper-slide bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://i.postimg.cc/6pmZbrby/pcc-2.jpg")',
            }}
          >
            <div className="dark-overlay"></div>
          </div>
          <div
            className="swiper-slide bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://i.postimg.cc/Lsg1cJGv/pcc-3.jpg")',
            }}
          >
            <div className="dark-overlay"></div>
          </div>
          <div
            className="swiper-slide bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://i.postimg.cc/J0FmCzfc/slider-img-3.webp")',
            }}
          >
            <div className="dark-overlay"></div>
          </div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl mt-9 font-bold mb-4"
          style={{ fontFamily: "Inconsolata, monospace" }}
        >
          Programming Contest Club (PCC)
        </h1>
        <h3 className="text-lg bg-cyan-900 p-2 font-bold rounded-xl md:text-3xl lg:text-4xl">
          UNIVERSITY OF ASIA PACIFIC
        </h3>
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSec4JcrH_uY_7R3UQPsvuHDg7qPMvDh2A_UD7JHydyStmr5XQ/viewform" target="_blank">
        {/* You can wrap the button text in a span if needed */}
        <button className="btn btn-wide mt-6 bg-gray-900 text-white font-semibold text-xl py-1 hover:bg-teal-900">
          <span className="text-2xl">&#60; Get Started /&#62;</span>
        </button>
      </Link>
      </div>

      <About />
      <Events />
      <Accordion />
      <Contact />
    </div>
  );
};

export default Home;
