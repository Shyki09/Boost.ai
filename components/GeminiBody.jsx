"use client";

import {
  CircleUserRound,
  Code,
  Compass,
  Lightbulb,
  SendHorizontal,
  Youtube,
} from "lucide-react";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";

const GeminiBody = () => {
  const {
    submit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput,
  } = useContext(Context);

  console.log(loading, "loading");

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(input);
  };

  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="flex items-center justify-between p-5 text-xl text-gray-400">
        <p></p>
        <CircleUserRound size={40} className="text-softTextColor" />
      </div>
      <div className="max-w-[900px] m-auto">
        {!displayResult ? (
          <>
            <div className="my-12 text-5xl font-medium p-5">
              <p>
                <span
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400
"
                >
                  Welcome to Adboost.ai
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="grid grid-cols-4 gap-5 p-5">
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>
                  Define clear ad campaign goals and tailor ads using audience
                  data.
                </p>
                <Compass
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>Leverage targeted social media ads.</p>
                <Lightbulb
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>Collaborate with influencers for wider reach.</p>
                <Youtube
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>Use interactive content to engage audiences.</p>
                <Code
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="my-10 flex items-center gap-5">
              <CircleUserRound size={40} className="text-softTextColor" />
              <p>{recentPrompts}</p>
            </div>
            <div className="flex items-start gap-5">
              <img src="/gemini.png" alt="" />
              <p
                className="text-md font-normal leading-6 text-gray-400"
                dangerouslySetInnerHTML={{ __html: result }}
              ></p>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 m-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 px-5 rounded-full">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400"
                placeholder="Enter a prompt here"
              />
              <button type="submit" className="flex cursor-pointer">
                <SendHorizontal size={20} />
              </button>
            </div>
          </form>
          <p className="text-gray-400 text-sm text-center p-3"></p>
        </div>
      </div>
      {loading && (
        <p className="absolute bottom-10 text-center w-full text-gray-400">
          Boosting...
        </p>
      )}
    </div>
  );
};

export default GeminiBody;
