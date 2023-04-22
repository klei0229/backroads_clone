import React from "react";

const Service = (props) => {
  const { heading, description, img } = props.service;
  console.log(props);

  return (
    <div className="service-card">
      <i className={img}></i>
      <div className="service-card-content">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
