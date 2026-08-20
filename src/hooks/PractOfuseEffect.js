import React, { useEffect, useState } from 'react'

function PractOfuseEffect() {

    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)   

/* useEffect(() => {
    let timer = setTimeout(() => {
        setCount((prevCount) => prevCount + 1)
    }, 3000)

    return () => clearTimeout(timer) // Cleanup function to clear the timer when the component unmounts
  }, [] ) // Runs only once when the component mounts */

  useEffect(() => {
    setCalculation(() => count * 2)
  }, [count]) // Runs whenever the count value changes

  return (
    <>
      <h3>My count value is <u>{count} </u></h3>
      <button onClick={() => setCount((preValue) => preValue + 1)}>Increment Count Value</button>
      <h3>Our calculation is <u>{calculation} </u></h3>
    </>
  )
}

export default PractOfuseEffect
