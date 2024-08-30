import React from 'react'

const TextInput = ({inputText}) => {
  return (
    <div className="col-auto mt-3">
      <label htmlFor="inputText1" className="form-label light-color">Enter something here:</label>
      <textarea id="inputText1" className="form-control" placeholder="Enter text" ref={inputText}></textarea>
    </div>
  )
}

export default TextInput
