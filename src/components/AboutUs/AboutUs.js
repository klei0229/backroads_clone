import React from "react";
import aboutImageSrc from "../../images/about.jpeg"
const heading1 = "About Us";
const subheading1 = "Explore the Difference";
const paragraph =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?";

const AboutUs = () => {
  return (
    <section>
      <h1>{heading1}</h1>
      <h3>{subheading1}</h3>
      <p>{paragraph}</p>
      <button>Read More</button>
      <img src={aboutImageSrc}/>
    </section>
  );
};

export default AboutUs;
