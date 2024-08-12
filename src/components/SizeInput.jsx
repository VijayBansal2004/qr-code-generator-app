import React from 'react'

const SizeInput = ({size,setSize}) => {
  return (
    <div className="col-auto">
    <label htmlFor="size" className="form-label">QR size:</label>
    <input type="range" min={100} max={500} id="size" className='w-100' onChange={(e)=>setSize(e.target.value)}/>
    <p>{size}px × {size}px</p>
  </div>
  )
}

export default SizeInput
