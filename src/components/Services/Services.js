import React from "react";
import Service from "./Service";

const heading = "Our Services";
const services = [
  {
    heading: "Saving Money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    img: "fas fa-wallet fa-fw",
  },
  {
    heading: "Endless Hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    img: "fas fa-tree fa-fw",
  },
  {
    heading: "Amazing Comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    img: "fas fa-socks fa-fw",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h1>{heading}</h1>
      <div className="service-grid">
        {services.map((service) => {
          return <Service service={service}></Service>;
        })}
      </div>
    </section>
  );
};

export default Services;
