import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './formulario.css';

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [unit, setUnit] = useState('Cantidad');
  const [quantity, setQuantity] = useState(1);
  const [pills, setPills] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setPills([...pills, { name: inputValue, unit, quantity }]);
      setInputValue('');
      setUnit('Cantidad');
      setQuantity(1);
    }
  };

  const handleDelete = (index) => {
    const updatedPills = pills.filter((_, i) => i !== index);
    setPills(updatedPills);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="d-flex align-items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingrediente"
          className="mr-2"
        />
        <div className="select-wrapper mr-2">
          <select value={unit} onChange={handleUnitChange}>
            <option value="Cantidad">Cantidad</option>
            <option value="Gramos">Gramos</option>
          </select>
        </div>
        {unit === 'Cantidad' ? (
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="mt-2 mr-2"
            placeholder="Cantidad"
          />
        ) : (
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="mt-2 mr-2"
            placeholder="Gramos"
          />
        )}
        <button type="submit" className="btn btn-primary mt-2">
          Agregar Píldora
        </button>
      </form>
      <div>
        {pills.map((pill, index) => (
          <div key={index} className="d-flex align-items-center">
            <span className="badge bg-primary m-1">
              {pill.name} {pill.quantity} {pill.unit}
              <button
                type="button"
                className="btn-close"
                onClick={() => handleDelete(index)}
                aria-label="Close"
              ></button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;

