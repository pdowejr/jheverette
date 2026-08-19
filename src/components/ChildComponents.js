import React from 'react'

function ChildComponents({data, alert}) {
  return (
    <div>
      <h1>I am a Child Component</h1>
      <p>Hi my name is {data.name}</p>
        <p>My age is {data.age}</p>
        <p>He works as a {data.field}</p>
        <button onClick={() => alert()}>Click Me</button>
    </div>
  )
}
export default ChildComponents
