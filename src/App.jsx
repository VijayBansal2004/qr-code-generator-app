import { useState, useRef } from 'react';
import './App.css'
import Heading from './components/Heading';
import InputForm from './components/InputForm';

function App() {
  const inputText = useRef();
  const [color, setColor] = useState("#ffffff");
  const [size, setSize] = useState(100);
  const [isClicked, setIsClicked] = useState(false);
  const [QR, setQR] = useState();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const strColor =(color).substring(1);
    setIsClicked(true);
    setQR(`http://api.qrserver.com/v1/create-qr-code/?data=${inputText.current.value}&size=${size}x${size}&bgcolor=${strColor}`)
  }

  return (
    <>
    <div className="main-container">
      <div className="background-container">
        <Heading/>
        <InputForm  inputText={inputText}
                    size={size}
                    setSize={setSize}
                    color={color}
                    setColor={setColor}
                    isClicked={isClicked}
                    handleSubmit={handleSubmit}
                    QR={QR}/>
      </div>
    </div>
    </>
  )
}

export default App
