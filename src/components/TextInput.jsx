import React from 'react'

const TextInput = ({inputText}) => {
  return (
    <div className="col-auto">
      <label htmlFor="inputText1" className="form-label">Enter something here:</label>
      <textarea id="inputText1" className="form-control" placeholder="Enter text" ref={inputText}></textarea>
    </div>
  )
}

export default TextInput
