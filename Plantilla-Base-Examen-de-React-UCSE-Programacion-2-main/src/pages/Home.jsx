import React from 'react';
import { useNavigate } from 'react-router-dom';
import CiudadSelector from '../components/CiudadSelector';
import useHistorial from '../hooks/useHistorial';
import useCargarCiudades from '../hooks/useCargarCiudades';

const Home = () => {
  const navigate = useNavigate();
  const { agregarConsulta } = useHistorial();
  const ciudades = useCargarCiudades();

  // Función que manejará el envío de la ciudad seleccionada
  const handleSeleccionarCiudad = (idCiudad) => {
    if (idCiudad) {
      agregarConsulta({ idCiudad, fecha: new Date().toISOString() });
      // Navegar a la página de clima con el ID de la ciudad seleccionada
      navigate(`/clima/${idCiudad}`);
    }
  };

  return (
    <div>
      <h1>Consulta de Clima</h1>
      {/* Componente que mostrará el selector de ciudades */}
      <SelectorCiudades ciudades={ciudades} onSeleccionarCiudad={handleSeleccionarCiudad} />
      {/* Aquí va el historial de consultas */}
    </div>
  );
};

export default Home;





















