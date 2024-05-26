import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

//Data for the 3-tier pricing table
const plans = [
  {
    name: "Basic",
    price: "Free",
    currency: "",
    frequency: "",
    features: [
      "Basic AI assistance for creating and optimizing ad campaigns.",
      "Simple budget control and monitoring tools.",
    ],
  },
  {
    name: "Standard",
    price: 19,
    currency: "$",
    frequency: "month",
    features: [
      "Improved AI-powered audience targeting.",
      "Capability to manage ads across multiple advertising platforms.",
      "Data-driven insights to optimize for better performance.",
    ],
  },
  {
    name: "Premium",
    price: 29,
    currency: "$",
    frequency: "month",
    features: [
      "AI-driven insights for future trends and opportunities.",
      "Real-time reporting and alerts for significant events.",
      "Automated adjustments based on evolving market conditions.",
      "Priority customer support for quick issue resolution.",
    ],
  },
];

const Price = () => {
  return (
    <div>
      <Navbar />
      <Card />
    </div>
  );
};

export default Price;
