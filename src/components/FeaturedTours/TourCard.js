import React from 'react'

const TourCard = (props) => {
    const {title,description,location,price,duration,date,img} = props.tour
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{location}</p>
        <p>{price}</p>
        <p>{duration}</p>
        <p>{date}</p>
    </div>
  )
}

export default TourCard