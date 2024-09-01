import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ReviewForm from "../components/ReviewForm";

const ReviewSubmission = () => {
  const handleReviewSubmit = (reviewData) => {
    // Logic to handle review submission (e.g., API call)
    console.log("Review submitted:", reviewData);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-[100vh] bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            Submit a Review
          </h2>
          <ReviewForm onSubmit={handleReviewSubmit} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ReviewSubmission;
