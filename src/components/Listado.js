import React from 'react';
import Gasto from './Gasto';

function Listado({gastos}){
    return(
        <div className="gastos-realizados">
            <h2>Listado de gastos</h2>
            {gastos.map(gasto=>{
                return(
                     <Gasto 
                        key={gasto.id}
                        gasto={gasto}
                     />
                )
            })}
        </div>
    )
}

export default Listado;