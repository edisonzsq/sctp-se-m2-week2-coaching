import React, { useState } from 'react';

function ChildComponent({ onInputChange }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onInputChange(e.target.value); // Call the function passed from the parent
  };

  return (
    <div style={{border:"4px solid blue", margin:"4px", padding:"4px"}}>
      <h2>Child Component</h2>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default ChildComponent;
