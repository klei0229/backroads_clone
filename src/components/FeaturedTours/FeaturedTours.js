import React from "react";
import TourCard from "./TourCard";

import tibet from "../../images/tibet.jpeg"
import java from "../../images/java.jpeg"
import hongkong from "../../images/hong-kong.jpeg"
import kenya from "../../images/kenya.jpeg"

const tours = [
  {
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    price: "2100",
    duration: "6",
    date: "August 26th, 2020",
    img: tibet,
  },
  {
    title: "Best Of Java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    price: "1400",
    duration: "11",
    date: "October 1st, 2020",
    img: java,
  },
  {
    title: "Explore Hong Kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    price: "5000",
    duration: "8",
    date: "September 15th, 2020",
    img: hongkong 
  },
  {
    title: "Kenya Highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    price: "3300",
    duration: "20",
    date: "December 5th, 2019",
    img: kenya,
  },
];

const FeaturedTours = () => {
  return (
    <section className="featured-tours">
      <h1>Featured Tours</h1>

      <div className='tours-grid'>
        {tours.map((tour) => {
          return <TourCard tour={tour}></TourCard>;
        })}
      </div>
    </section>
  );
};

export default FeaturedTours;
