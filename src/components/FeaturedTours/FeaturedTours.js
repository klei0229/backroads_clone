import React from "react";
import TourCard from "./TourCard";

const tours = [
  {
    title: "Tibet Adventure",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    price: "2100",
    duration: "6",
    date: "August 26th, 2020",
    img: "",
  },
  {
    title: "Best Of Java",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    price: "1400",
    duration: "11",
    date: "October 1th, 2020",
    img: "",
  },
  {
    title: "Explore Hong Kong",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    price: "5000",
    duration: "8",
    date: "September 15th, 2020",
    img: "",
  },
  {
    title: "Kenya Highlights",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    price: "3300",
    duration: "20",
    date: "December 5th, 2019",
    img: "",
  },
];

const FeaturedTours = () => {
  return (
    <section>
      <h1>Featured Tours</h1>
      {tours.map((tour) => {
        return <TourCard tour = {tour}></TourCard>;
      })}
    </section>
  );
};

export default FeaturedTours;
