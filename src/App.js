import React, {useState, useEffect} from 'react';

//components
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true);
  const [restante, setRestante] = useState(0);
  //este state será un objeto porque dentro de éste se guardarán dos porpiedades (nombreGasto y cantidadGasto)
  const [gasto, setGasto] = useState({})
  //este state será un array porque es la lista de gastos que el usuario efectúe
  const [gastos, setGastos] = useState([]);
  const [crearGasto, setCrearGasto] = useState(false); 

  
  useEffect(()=>{
    if(crearGasto){
      let listadoGastos = [...gastos, gasto];
      setGastos(listadoGastos);

      //restar el presupuesto inicial
      let presupuestoRestante = restante - gasto.cantidadGasto;
      setRestante(presupuestoRestante);

      //UNA VEZ QUE SE AGREGA UN GASTO, SE DEBE PONER CREARGASTO COMO FALSE PARA QUE NO SE VUELVA A EJECUTAR
      setCrearGasto(false);
    }
  }, [crearGasto])
  

  return (
    <div className="App container">
      <header>
        <h1>Gasto semanal</h1>
        
        <div className="contenido-principal contenido">
          {/* si la preguntaPresupuesto está true se muestra el componente de Pregunta y si está false no se muestra porque ya se habría ejecutado ese componente con anterioridad */}
          {
            (preguntaPresupuesto) 
            ? 
            <Pregunta
              setPresupuesto={setPresupuesto}
              setPreguntaPresupuesto={setPreguntaPresupuesto}
              setRestante={setRestante}
            /> 
            : 
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>

                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />

                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />

                </div>
              </div>
            )
          }
        </div>

      </header>
    </div>
  );
}

export default App;
