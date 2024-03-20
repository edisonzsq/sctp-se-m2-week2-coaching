import React, { useState } from 'react';
import ChildComponent from './ChildComponent'; // Assuming the file name is ChildComponent.js

function ParentComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (value) => {
    setInputValue(value);
  };

  return (
    <div style={{border:"4px solid red", margin:"4px"}}>
      <h2>Parent Component</h2>
      <div>
        <strong>Input from Child:</strong> {inputValue}
      </div>
      <ChildComponent onInputChange={handleInput} />      
    </div>
  );
}

export default ParentComponent;
