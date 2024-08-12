import React from 'react'

const QRcode = ({QR}) => {
  return (
    <div className="qr-code text-center">
        <img src={QR} alt="qr-code" />
    </div>
  )
}

export default QRcode
