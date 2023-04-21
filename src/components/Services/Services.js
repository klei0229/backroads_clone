import React from "react";
import Service from "./Service";

const heading = "Services";
const services = [
  {
    heading: "Saving Money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    img: "",
  },
  {
    heading: "Endless Hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    img: "",
  },
  {
    heading: "Amazing Comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    img: "",
  },
];

const Services = () => {
  return (
    <section>
      <h1>{heading}</h1>
      {services.map((service) => {
        return (
            <Service service={service}></Service>
        );
      })}
    </section>
  );
};

export default Services;
