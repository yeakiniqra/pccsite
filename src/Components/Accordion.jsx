import React from "react";

function Accordion() {
  return (
    <div className="container mx-auto min-h-24" >
       <div className="w-full px-4 mt-5">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-2 text-3xl font-bold text-violet-600 sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-gray-700">
                We have tried to answer most of the questions that you might
              </p>
            </div>
          </div>
      <div className="collapse collapse-arrow bg-base-200">
        
        <input type="radio" name="my-accordion-2" defaultChecked  />
        <div className="collapse-title text-xl font-medium">
        How long we deliver our full website?
        </div>
        <div className="collapse-content">
          <p>It takes 2-3 Months to get our website ready. That includes the in-depth research & creation for makig a dynamic website.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What's happening during the construction?
        </div>
        <div className="collapse-content">
          <p>During the construction phase, we're engaged in in-depth research and crafting a comprehensive content strategy for the Programming Contest Club website. Our focus is on creating an environment that fosters learning, collaboration, and engagement within the programming community. Stay tuned for exciting updates and features that will be an integral part of our upcoming platform.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What to expect from the new website?
        </div>
        <div className="collapse-content">
          <p>The upcoming Programming Contest Club website aims to be a hub for programming enthusiasts, providing valuable resources, contest updates, and a platform for knowledge sharing.</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
