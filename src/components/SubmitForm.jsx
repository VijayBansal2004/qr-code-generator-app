import React from 'react'

const SubmitForm = ({handleSubmit}) => {
  return ( 
    <div className="col-auto">
      <button type="submit" className="btn btn-primary my-3 mb-5 w-100" onClick={(e)=>{
       handleSubmit(e);
      }}>Get QR code</button>
  </div>
  )
}

export default SubmitForm
