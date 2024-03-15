// src/TextInput.js
import React from 'react';

const TextInput = () => {
  const inputRef = React.useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focusear input</button>
    </div>
  );
};

export default TextInput;
