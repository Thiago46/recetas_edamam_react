import React, { useState } from 'react';

function SimpleForm() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Valor del campo de entrada: ' + inputValue);
  };

  return (
    <>
    <div>
      <h1>Formulario Simple en React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
    </>
  );
}

export default SimpleForm;
