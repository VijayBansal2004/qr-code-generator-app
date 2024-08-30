import React from 'react'

const ColorInput = ({color, setColor}) => {
  return (
    <div className="col-auto d-flex align-items-center gap-3 mt-3">
        <label htmlFor="color1" className="form-label light-color mb-0">QR color:</label>
        <input type="color" className="form-control form-control-color " id="color1" onChange={(e)=>{
          setColor(e.target.value)
        }}/>
    </div>
  )
}

export default ColorInput
