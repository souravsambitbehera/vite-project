// ButtonComponent.js
import React, { useState } from 'react';

const PracticeComponent = () => {
  const [clicked, setClicked] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  

  return (
    <>
    <button onClick={() => setClicked(true)} disabled={clicked}>
      {clicked ? 'Clicked!' : 'Click me'}
    </button>
    <form>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>{inputValue}</p>
    </form>
    </>
    
  );
};
export default PracticeComponent