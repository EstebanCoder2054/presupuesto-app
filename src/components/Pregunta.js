import React, {Fragment, useState} from 'react';
import Swal from 'sweetalert2';

function Pregunta({setPresupuesto, setPreguntaPresupuesto, setRestante}){

    const [cantidad, setCantidad] = useState(0);
    //const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(cantidad <= 0 ){
            Swal.fire({
                icon: 'error',
                title: 'Ouch...',
                text: 'Debes de poner valores positivos o mayores a cero'
              })
              //para qque ya no se sigan ejecutando las siguientes línea de código
              return;
        }else if( isNaN(cantidad) ){ //en este caso cantidad nunca será Null, ya que el typeof es NaN
            Swal.fire({
                icon: 'error',
                title: 'Ouch...',
                text: 'Debes ingresar algún valor'
              })
              //para qque ya no se sigan ejecutando las siguientes línea de código
              return;
        } //acá ya no va un else porque en caso de que alguno de los condicionales de error ya no se ejecutaría el código válido

        //en caso de que se hayan pasado todas las validaciones se debe enviar el presupuesto al componente principal
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setPreguntaPresupuesto(false);
    }

    return(
        <Fragment>
            <h2>¿Cuánto es tu presupuesto?</h2>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Agrega tu presupuesto"
                    onChange={ (e) => setCantidad(parseInt(e.target.value, 10)) }
                />

                <input
                    type="submit"
                    className="button-primary u-full-width" 
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;