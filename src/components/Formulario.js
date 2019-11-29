import React, {useState} from 'react';
import Swal from 'sweetalert2';
import shortid from 'shortid';

function Formulario({setGasto, setCrearGasto}){

    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidadGasto, setCantidadGasto] = useState(0);
    //--state de error acá-- 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nombreGasto === '' || isNaN(cantidadGasto) || cantidadGasto <= 0 ){
            Swal.fire({
                icon: 'error',
                title: 'Ouch...',
                text: 'Debes de llenar correctamente ambos campos'
              })
              return;
        }

        //construit objeto de gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        setGasto(gasto);
        setCrearGasto(true);

        //para resetear el form para que los fields queden vacíos
        setNombreGasto('');
        setCantidadGasto('');

    }

    return(
        <form
            onSubmit={handleSubmit}
        >
            <h2>Agrega tus gastos aquí</h2>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="ej. Transporte"
                    onChange={ (e) => setNombreGasto(e.target.value) }
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="ej. 300"
                    onChange={ (e) => setCantidadGasto(parseInt(e.target.value, 10)) }
                    value={cantidadGasto}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
    )
}

export default Formulario;