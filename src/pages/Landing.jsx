import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Testimonials from "../components/Testimonials";
import SignUpCallToAction from "../components/SignUpCallToAction";

const Landing = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <Testimonials />
        <SignUpCallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
