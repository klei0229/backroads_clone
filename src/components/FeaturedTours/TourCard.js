import React from "react";

const TourCard = (props) => {
  const { title, description, location, price, duration, date, img } =
    props.tour;

  console.log(img);
  return (
    <div className="tour-card">
      <div className="tour-card-img-date">
        <span className="tour-card-date">{date}</span>
        <img src={img}></img>
      </div>
      <div className="tour-card-detail">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="tour-card-bottom">
          <p>
            <i className="fas fa-map"></i> {location}
          </p>
          <p>From ${price}</p>
          <p>{duration} Days</p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
