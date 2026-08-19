import React, { useState } from 'react'

function PractOfuseState() {
    const[car, setCar] = useState({
        brand: "Honda",
        model: "CR-V Hybrid",
        year: 2025,
        color: "light grey"
    })

    const UpdateColor = () => {
        setCar(prevState =>({
            ...prevState,
            color: "black"
        }))
    }

  return (
    <>
      <p>I have a brand new {car.brand} car with model {car.model} and year {car.year} in {car.color} color. </p>
      <button onClick={() => UpdateColor()}></button>
      </>
  )
}

export default PractOfuseState
