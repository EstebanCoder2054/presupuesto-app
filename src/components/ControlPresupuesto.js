import React, {Fragment} from 'react';

function ControlPresupuesto({presupuesto, restante}){
    return(
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div>
            
            {/* el classname será algo dinámico, porque podrá ir cambiando */}
            <div className="">
                Restante: ${restante}
            </div>
        </Fragment>
        
    )
}

export default ControlPresupuesto;