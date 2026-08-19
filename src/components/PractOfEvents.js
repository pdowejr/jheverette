import React, {useState} from 'react'

function PractOfEvents() {

  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You have submitted the value: ${inputValue}`);
    setInputValue('')
  }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default PractOfEvents
