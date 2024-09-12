import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        
        <nav>
          {/* Ruta para la página principal */}
          <Link to="/">Inicio</Link>
          {/* Ruta parametrizada para la página de clima con el ID de la ciudad */} 
          <Link to="/clima/:idCiudad">Clima</Link>     
        </nav>
        
    </div>
  );
}

export default App;



