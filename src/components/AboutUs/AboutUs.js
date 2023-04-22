import React from "react";
import aboutImageSrc from "../../images/about.jpeg";
const heading1 = "About Us";
const subheading1 = "Explore the Difference";
const paragraph =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor? &nbsp; Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?";

const AboutUs = () => {
  return (
    <section className="about">
      <h1>{heading1}</h1>

      <div className="about-grid">
        <div className="panel">
          <img src={aboutImageSrc}></img>
        </div>
        <div className="panel">
          <h3>{subheading1}</h3>

          {paragraph.split("&nbsp;").map((line) => {
            return <p>{line}</p>;
          })}
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
