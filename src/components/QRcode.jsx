import React from 'react'

const QRcode = ({QR}) => {
  return (
    <div className="qr-code text-center mt-5">
        <img src={QR} alt="qr-code" />
    </div>
  )
}

export default QRcode
