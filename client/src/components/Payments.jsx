import React, { useState } from "react"; 



const Payments = ({ price, id}) => {
  const [entry, setEntry] = useState(Date().toString().slice(0, 10));
  const [output, setOutput] = useState(Date().toString().slice(0, 10));

  function countDays(fecha1, fecha2) {
    const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
    const fecha1ms = new Date(fecha1).getTime(); // Convertir fecha1 a milisegundos
    const fecha2ms = new Date(fecha2).getTime(); // Convertir fecha2 a milisegundos
    const diferenciaMs = Math.abs(fecha2ms - fecha1ms); // Calcular la diferencia en milisegundos
    return Math.round(diferenciaMs / unDia);
  }


  return (
      <div>
        <input type="date"value={entry} onChange={(e) => setEntry(e.target.value)} />
        <input type="date"value={output} onChange={(e) => setOutput(e.target.value)} />
        <div>
          <span>precio por noche: {price}</span>
          <span>total de noches: {countDays(entry, output)}</span>
          <span>total a pagar: {countDays(entry, output) * price}</span>
        </div>
        <div>
          <button></button>
          <b>Pagar</b>
        </div>
      </div>
  );
};

export default Payments;
