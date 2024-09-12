
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClimaDetalle from '../components/ClimaDetalle';
import useHistorial from '../hooks/useHistorial';

const Clima = () => {
  
  const { idCiudad } = useParams();
  const [clima, setClima] = useState(null);
  const { agregarConsulta } = useHistorial();

  useEffect(() => {
    // Carga de datos del clima 
    fetch('/path/to/datos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el clima');
        }
        return response.json();
      })
      .then(data => {
        // Busca la ciudad por el ID en el array de ciudades
        const ciudad = data.ciudades.find(ciudad => ciudad.id === parseInt(idCiudad));
        if (ciudad) {
          setClima(ciudad);
          // Agrega la consulta al historial
          agregarConsulta({ idCiudad, fecha: new Date().toISOString() });
        }
      })
      .catch(error => {
        console.error('Error al cargar el clima:', error);
      });
  }, [idCiudad, agregarConsulta]);

  return (
    <div>
      <h1>Clima de la Ciudad</h1>
      {/* Componente que mostrará los detalles del clima */}
      {clima ? <ClimaDetalle clima={clima} /> : <p>Cargando...</p>}
      {/* Aquí va el historial de consultas */}
    </div>
  );
};

export default Clima;

