import React from "react";
import HeroImage from "../../images/hero.jpeg";
const headingText = "Continue Exploring";
const paragraphText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta.";
const buttonText = "Explore Tours";

const HeroSection = () => {
  return (
    <div className="hero">
      <h1>{headingText}</h1>
      <p>{paragraphText}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default HeroSection;
