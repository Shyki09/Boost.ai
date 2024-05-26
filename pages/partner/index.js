import React from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const partner = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-green-200 text-gray-800">
        {/* Hero Section */}
        <div className="py-16 w-full text-center transform ">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl text-gray-700">
            Unlock Growth with Our AI-powered Advertising Management
          </h1>
          <p className="text-lg text-gray-500">
            Join us as a partner and discover new opportunities in the world of
            advertising.
          </p>
        </div>

        {/* Introduction */}
        <div className="container mx-auto my-8 transform ">
          <p className="text-lg text-center">
            Partnering with us means gaining access to cutting-edge AI
            technology, personalized support, and a global network for
            successful advertising campaigns.
          </p>
        </div>

        {/* Partner Benefits */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          <div className="p-6 bg-white rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-green-100">
            <h2 className="text-xl font-semibold mb-2">
              Advanced AI Technology
            </h2>
            <p>
              Leverage cutting-edge AI for smarter, more effective advertising
              campaigns.
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-green-100">
            <h2 className="text-xl font-semibold mb-2">Global Reach</h2>
            <p>
              Expand your reach globally with our international advertising
              capabilities.
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-green-100">
            <h2 className="text-xl font-semibold mb-2">Personalized Support</h2>
            <p>
              Our dedicated support team is ready to assist you at every step of
              your partnership.
            </p>
          </div>
          {/* Add more benefits as needed */}
        </div>

        {/* Application Form */}
        <div className="container mx-auto my-8 transform ">
          <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Get Started
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="mt-1 p-2 w-full border rounded-md transition duration-300 hover:border-green-500 focus:border-green-500"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              {/* Add more form fields as needed */}
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* What We Offer */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          <div className="p-6 bg-white rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-green-100">
            <h2 className="text-xl font-semibold mb-2">How Much We Give?</h2>
            <p>
              We offer competitive revenue sharing to our partners, ensuring a
              mutually beneficial partnership.
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-green-100">
            <h2 className="text-xl font-semibold mb-2">How Long We Track?</h2>
            <p>
              We provide transparent tracking throughout the advertising
              lifecycle, offering real-time insights and analytics.
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-green-100">
            <h2 className="text-xl font-semibold mb-2">
              When Do You Get Paid?
            </h2>
            <p>
              Payments are processed promptly according to our agreed-upon
              terms, ensuring timely compensation for your efforts.
            </p>
          </div>
          {/* Add more elements as needed */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default partner;
