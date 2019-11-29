import React from "react";

function Gasto({ gasto }) {
  return (
    <div>
      <li className="gastos">
        <p>
          {gasto.nombreGasto}
          <span className="gasto">$ {gasto.cantidadGasto} </span>
        </p>
      </li>
    </div>
  );
}

export default Gasto;
