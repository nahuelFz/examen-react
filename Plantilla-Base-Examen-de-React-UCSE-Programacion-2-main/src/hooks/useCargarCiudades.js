import { useState, useEffect } from 'react';

const useCargarCiudades = () => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    // Simulamos la carga de un archivo local de JSON con `fetch`
    fetch('/path/to/datos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar las ciudades');
        }
        return response.json();
      })
      .then(data => {
        // Actualiza el estado con los datos de las ciudades
        setCiudades(data.ciudades); // Accede a la propiedad `ciudades` del JSON
      })
      .catch(error => {
        // Manejo de errores si ocurre un problema al cargar los datos
        console.error('Error al cargar las ciudades:', error);
      });
  }, []);

  return ciudades;  // Retornamos las ciudades cargadas
};

export default useCargarCiudades;

