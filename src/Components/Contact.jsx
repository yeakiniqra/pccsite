import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-24">
  <div className="bg-gray-900 rounded-xl shadow overflow-hidden sm:rounded-lg max-w-2xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-4 text-gray-300 text-center">Contact Us</h1>
    <p className="text-lg text-gray-300  mb-6 text-center">
      If you have any questions or inquiries, feel free to reach out to us using the information below.
    </p>

    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div className="bg-emerald-300 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p className="text-gray-700">pcc.cse@uap-bd.edu</p>
      </div>

      <div className="bg-violet-300 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Facebook Page</h2>
        <a href="https://www.facebook.com/profile.php?id=61555006221358" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700">UAP Programming Contest Club</a>
      </div>

      <div className="bg-cyan-300 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p className="text-gray-700">74/A, Green Road, Framgate, Dhaka, Bangladesh</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Contact;
