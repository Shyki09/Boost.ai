const Card = () => {
  return (
    <div>
      <section className=" relative p-3 min-h-screen overflow-hidden">
        <div className=" text-center mb-12 space-y-3">
          <h2 className=" text-5xl font-extrabold text-black">
            Pricing and Subscriptions
          </h2>
          <h3 className=" text-2xl font-bold text-gray-500">
            Choose a plan that's right for you
          </h3>
        </div>

        {/* Free */}
        <div className=" relative grid  md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" bg-white p-8  hover:shadow-xl transition duration-100 ease-in-out  border-t-4 border-green-200">
            <div className=" mb-10 space-y-2">
              <h2 className="text-5xl font-thin text-green-900">Free</h2>
              <h3 className=" text-sm text-gray-400">FOR EVERYBODY</h3>
            </div>
            <div>
              <ul className=" space-y-3 text-gray-700">
                <li className="">
                  <svg
                    className=" w-6 h-6 text-green-400 inline"
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    ></path>
                  </svg>
                  Limited AI Audience Targeting
                </li>
                <li>
                  <svg
                    className=" w-6 h-6 text-green-400 inline"
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    ></path>
                  </svg>
                  Data-Driven Insights Preview
                </li>

                <li>
                  <svg
                    className=" w-6 h-6 text-green-400 inline"
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    ></path>
                  </svg>
                  Restricted Audience
                </li>

                <li>
                  <svg
                    className=" w-6 h-6 text-green-400 inline"
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    ></path>
                  </svg>
                  Snapshot Real-time Reporting
                </li>
              </ul>
            </div>

            <div className=" items-center justify-end">
              <div className="mt-20">
                <span className="text-4xl text-black">$0</span>
                <span className="text-sm text-gray-500">/month</span>

                <button className="mt-5 py-5 px-6 w-full border-2 border-green-400 hover:bg-green-400 text-green-400 hover:text-white">
                  Try for Free
                </button>
              </div>
            </div>
          </div>

          {/* Limited Plan */}
          <div>
            <div className=" bg-white p-8  hover:shadow-xl transition duration-100 ease-in-out  border-t-4 border-green-300">
              <div className=" mb-10 space-y-2">
                <h2 className="text-5xl font-thin text-green-900">
                  Limited Plan
                </h2>
                <h3 className=" text-sm text-gray-400">FOR INDIVIDUAL</h3>
              </div>
              <div>
                <ul className=" space-y-3 text-gray-700">
                  <li>
                    <svg
                      className=" w-6 h-6 text-green-400 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Basic AI Assistance for Ad Campaigns
                  </li>
                  <li>
                    <svg
                      className=" w-6 h-6 text-green-400 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Simple Budget Monitoring
                  </li>

                  <li>
                    <svg
                      className=" w-6 h-6 text-green-400 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Introductory Audience Targeting
                  </li>

                  <li>
                    <svg
                      className=" w-6 h-6 text-green-400 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Essential Data-Driven Insights
                  </li>
                </ul>
              </div>

              <div className=" mt-20">
                <span className=" text-4xl text-black">$5</span>
                <span className=" text-sm text-gray-500">/month</span>

                <button className=" mt-5 py-5 px-6 w-full border-2 border-green-400 hover:bg-green-400 text-green-400 hover:text-white ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Pro */}
          <div>
            <div className=" bg-green-500 p-8  hover:shadow-xl transition duration-100 ease-in-out  border-t-4 border-black">
              <div className=" mb-10 space-y-2">
                <h2 className="text-5xl font-thin text-black">Pro</h2>
                <h3 className=" text-sm text-gray-200">FOR ORGANIZATION</h3>
              </div>
              <div>
                <ul className=" space-y-3 text-gray-700">
                  <li>
                    <svg
                      className=" w-6 h-6 inline text-gray-100"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Full Access to AI Assistance
                  </li>
                  <li>
                    <svg
                      className=" w-6 h-6  text-gray-100 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Comprehensive Budget Control
                  </li>

                  <li>
                    <svg
                      className=" w-6 h-6  text-gray-100 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Advanced Audience Targeting
                  </li>

                  <li>
                    <svg
                      className=" w-6 h-6  text-gray-100 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Priority Email and Chat Support
                  </li>
                </ul>
              </div>

              <div className=" mt-20">
                <span className=" text-4xl text-black ">$10</span>
                <span className=" text-sm text-black">/month</span>

                <button className="  py-5 mt-5  px-6 w-full border-2 border-black hover:bg-black text-black hover:text-white ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Premium */}
          <div>
            <div className=" bg-white p-8  hover:shadow-xl transition duration-100 ease-in-out  border-t-4 border-green-700">
              <div className=" mb-10 space-y-2">
                <h2 className="text-5xl font-thin text-green-900">Premium</h2>
                <h3 className=" text-sm text-gray-400">FOR ORGANIZATIONS</h3>
              </div>
              <div>
                <ul className=" space-y-3 text-gray-700">
                  <li>
                    <svg
                      className=" w-6 h-6 text-green-400 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    All Pro Plan Features
                  </li>
                  <li>
                    <svg
                      className=" w-6 h-6 text-green-400 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    AI-Driven Insights for Future Trends
                  </li>

                  <li>
                    <svg
                      className=" w-6 h-6 text-green-400 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Real-Time Reporting and Alerts
                  </li>

                  <li>
                    <svg
                      className=" w-6 h-6 text-green-400 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Auto Adjustments for Market Conditions
                  </li>
                  <li>
                    <svg
                      className=" w-6 h-6 text-green-400 inline"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    Enhanced Customer Support
                  </li>
                </ul>
              </div>

              <div className=" mt-11">
                <span className=" text-4xl text-black">$15</span>
                <span className=" text-sm text-gray-500">/month</span>

                <button className=" mt-5 py-5 px-6 w-full border-2 border-green-700 hover:bg-green-700 text-green-700 hover:text-white ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
