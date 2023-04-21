import React from 'react'
import HeroImage from '../../images/hero.jpeg'
const headingText = "Continue Exploring"
const paragraphText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta."
const buttonText = "Explore Tours"

const HeroSection = () => {
  return (
    <section>
        <h1>Hero Section</h1>
        <img src={HeroImage}/>
        <h1>{headingText}</h1>
        <p>{paragraphText}</p>
        <button>{buttonText}</button>
    </section>
  )
}

export default HeroSection