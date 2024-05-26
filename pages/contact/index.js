import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-green-200">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-4 text-black">Contact Us</h1>
          <p className="mb-6 text-gray-600">
            Please fill out the form below and we'll get back to you as soon as
            possible.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md pl-8 focus:outline-none focus:border-green-500"
                  placeholder="Your Full Name"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M20 12H4M20 12L16 16M20 12L16 8"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="mt-1 p-2 w-full border rounded-md pl-8 focus:outline-none focus:border-green-500"
                  placeholder="Your Email Address"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M22 12h-4l-3 9L9 3l-3 9H2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="mt-1 p-2 w-full border rounded-md h-32 focus:outline-none focus:border-green-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-500">
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="support">Technical Support</option>
              </select>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-green-500">
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-md hover:opacity-90 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
