import React from 'react'

const Service = (props) => {
    const {heading,description,img} = props.service
    console.log(props)

  return (
    <div>
        <h1>{heading}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Service