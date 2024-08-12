import React from 'react'
import QRcode from './QRcode';
import TextInput from './TextInput';
import SizeInput from './SizeInput';
import ColorInput from './ColorInput';
import SubmitForm from './SubmitForm';

const InputForm = ({inputText ,size ,setSize ,color ,setColor ,isClicked ,handleSubmit ,QR}) => {
  return (
    <form className="container col-12 col-lg-6 m-auto">
      <TextInput inputText={inputText}/>
      <SizeInput size={size} setSize={setSize}/>
      <ColorInput color={color} setColor={setColor}/>
      <SubmitForm handleSubmit={handleSubmit}/>
      {isClicked && (inputText.current.value).length!==0 && <QRcode QR={QR}/>}
    </form>
  )
}

export default InputForm
