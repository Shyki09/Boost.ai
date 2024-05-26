import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { fadeIn } from "../components/variants";

const Operations = () => {
  const { data: session } = useSession();
  function handleSignOut() {
    signOut();
  }
  return <div>{session ? User({ session, handleSignOut }) : Guest()}</div>;
};
function Guest() {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <motion.div
          variants={fadeIn(`right`, 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <img className=" w-[500px] mx-auto my-4" src="laptop.jpg" alt="/" />
        </motion.div>
        <motion.div
          variants={fadeIn(`left`, 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className=" flex flex-col justify-center"
        >
          <p className=" text-green-400 font-bold "> DATA ANALYTICS</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            With AI-powered advertising, streamline your campaigns, audience
            targeting, budget optimization, and content creation all in one
            platform for efficient and effective ad management.
          </p>
        </motion.div>
      </div>

      <div className=" max-w-[1240px] mx-auto flex flex-col-reverse md:flex-row">
        <motion.div
          variants={fadeIn(`right`, 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className=" flex flex-col justify-center"
        >
          <p className=" text-green-400 font-bold  ">AD EXPOSURE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Amplify Your Ad Exposure
          </h1>
          <p className=" items-center">
            Our ad exposure enhancement strategy leverages AI technology to
            amplify your brand's visibility,targeting the right audience with
            precision, and optimizing your ad campaigns for <br /> maximum
            impact.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn(`left`, 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <img className=" w-[700px] mx-20 my-4" src="arrow2.png" alt="/" />
        </motion.div>
      </div>
    </div>
  );
}

function User({ session, handleSignOut }) {
  return null;
}

export default Operations;
