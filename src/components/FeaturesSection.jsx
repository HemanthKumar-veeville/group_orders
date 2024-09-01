import React from "react";

const features = [
  {
    id: 1,
    title: "Group Ordering Made Easy",
    description: "Manage group orders efficiently with our intuitive platform.",
  },
  {
    id: 2,
    title: "Secure Payments",
    description:
      "Make payments with confidence using our secure payment gateway.",
  },
  {
    id: 3,
    title: "Real-Time Notifications",
    description: "Stay informed with instant notifications on your orders.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-custom-dark">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-gray-100 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-custom-dark">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
