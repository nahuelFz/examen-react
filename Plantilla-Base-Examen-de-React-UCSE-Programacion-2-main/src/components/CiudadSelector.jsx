import React, { useState, useEffect } from 'react';

const CiudadSelector = ({ onSeleccionarCiudad }) => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    // Aquí deben cargar las ciudades desde el archivo data.json
  }, []);

  const handleChange = (event) => {
    const idCiudad = event.target.value;
    // Lógica para manejar la acción de selección de ciudad
  };

  return (
    <select onChange={handleChange}>
      <option value="">Selecciona una ciudad</option>
      {ciudades.map((ciudad) => (
        <option key={ciudad.id} value={ciudad.id}>
          {ciudad.nombre}
        </option>
      ))}
    </select>
  );
};

export default CiudadSelector;
