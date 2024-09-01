import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    feedback:
      "Veeville made it so easy to organize group orders. Highly recommend!",
  },
  {
    id: 2,
    name: "John Smith",
    feedback: "Fantastic platform! The user interface is super intuitive.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-custom-light">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-custom-dark">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-bold text-custom-accent">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
