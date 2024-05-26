import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const Topcards = () => {
  const { data: session } = useSession();
  function handleSignOut() {
    signOut();
  }
  const btn = useState(false);

  return <div>{session ? User({ session, handleSignOut }) : Guest()}</div>;
};
function User({ session, handleSignOut, children }) {
  return (
    <div className="grid lg:grid-cols-6 gap-2 p-7  mx-12 my-0">
      <div className=" lg:col-span-2 col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className=" flex flex-col w-full pb-4">
          <p className=" text-2xl font-bold">Aim</p>
          <p className=" text-gray-500">
            What's the main goal of our next ad campaign?
          </p>
        </div>
      </div>
      <div className=" lg:col-span-2 col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className=" flex flex-col w-full pb-4">
          <p className=" text-2xl font-bold">Boost</p>
          <p className=" text-gray-500">
            How do we enhance our ad campaigns' effectiveness?
          </p>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className=" flex flex-col w-full pb-4">
          <p className=" text-2xl font-bold">Maximize</p>
          <p className=" text-gray-500">
            How can we maximize the reach and engagement of our ads?
          </p>
        </div>
      </div>
    </div>
  );
}
function Guest() {
  return <></>;
}

export default Topcards;
