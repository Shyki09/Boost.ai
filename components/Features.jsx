import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { fadeIn } from "../components/variants";
const Features = () => {
  const { data: session } = useSession();
  function handleSignOut() {
    signOut();
  }
  return <div>{session ? User({ session, handleSignOut }) : Guest()}</div>;
};
function Guest() {
  return (
    <div className=" container flex flex-col px-20 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row py-6">
      {/* Whats the Difference */}
      <motion.div
        variants={fadeIn(`down`, 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className=" flex flex-col space-y-12 md:w-1/2 "
      >
        <h2 className=" max-w-md text-4xl font-bold text-center md:text-left">
          What's different about AI Powered?
        </h2>
        <p className=" max-w-sm text-center text-darkGrayishBlue md:text-left font-medium ">
          AI Advertising streamlines complexity. Tailored for modern
          advertisers, it harnesses AI to simplify tasks and supercharge your ad
          strategies.
        </p>
      </motion.div>
      {/* Numbered List */}
      <motion.div
        variants={fadeIn(`up`, 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className=" flex flex-col space-y-8 md:w-1/2"
      >
        {/* List Item 1 */}
        <div className=" flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
          <div className=" rounded-l-full bg-[#bdfacf] md:bg-transparent">
            <div className=" flex items-center space-x-2">
              <div className=" px-4 py-2 text-white rounded-full md:py-1 bg-green-400">
                01
              </div>
              <h3 className=" text-base font-bold md:mb-4 md:hidden">
                Real-time Monitoring
              </h3>
            </div>
          </div>
          <div>
            <h3 className=" hidden mb-4 text-lg font-bold md:block">
              Real-time Monitoring
            </h3>
            <p className=" text-darkGrayishBlue">
              Involves continuous, immediate data collection and analysis to
              track performance or events as they occur. It enables prompt
              responses and is essential for staying updated on critical metrics
              and operational activities.
            </p>
          </div>
        </div>

        {/* List Item 2 */}
        <div className=" flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
          <div className=" rounded-l-full bg-[#bdfacf] md:bg-transparent">
            <div className=" flex items-center space-x-2">
              <div className=" px-4 py-2 text-white rounded-full md:py-1 bg-green-400">
                02
              </div>
              <h3 className=" text-base font-bold md:mb-4 md:hidden">
                Regular Review and Analysis
              </h3>
            </div>
          </div>
          <div>
            <h3 className=" hidden mb-4 text-lg font-bold md:block">
              Regular Review and Analysis
            </h3>
            <p className=" text-darkGrayishBlue">
              It entail scheduled assessments of collected data to identify
              trends, challenges, and opportunities. It ensures strategic
              alignment and enables data-informed decision-making to drive
              continuous improvement and goal achievement.
            </p>
          </div>
        </div>

        {/* List Item 3 */}
        <div className=" flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
          <div className=" rounded-l-full bg-[#bdfacf] md:bg-transparent">
            <div className=" flex items-center space-x-2">
              <div className=" px-4 py-2 text-white rounded-full md:py-1 bg-green-400">
                03
              </div>
              <h3 className=" text-base font-bold md:mb-4 md:hidden">
                Everything you need in one place
              </h3>
            </div>
          </div>
          <div>
            <h3 className=" hidden mb-4 text-lg font-bold md:block">
              Everything you need in one place
            </h3>
            <p className=" text-darkGrayishBlue">
              Don't navigate the complex advertising landscape with various
              tools. With AI-powered advertising, streamline your campaigns,
              audience targeting, budget optimization, and content creation all
              in one platform for efficient and effective ad management.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function User({ session, handleSignOut }) {
  return null;
}

export default Features;
