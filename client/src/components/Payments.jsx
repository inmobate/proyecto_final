import React, { useState } from "react";
import moment from "moment";
import axios from "axios";



const Payments = ({ price, id }) => {
  const [entry, setEntry] = useState(moment().format("YYYY-MM-DD"));
  const [output, setOutput] = useState(
    moment().add(1, "day").format("YYYY-MM-DD")
  );


  function countDays(entery, output) {
    const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
    const enteryms = new Date(entery).getTime(); // Convertir entery a milisegundos
    const outputms = new Date(output).getTime(); // Convertir output a milisegundos
    const diferenciaMs = Math.abs(outputms - enteryms); // Calcular la diferencia en milisegundos
    return Math.round(diferenciaMs / unDia);
  }

      const formData = {
        date_of_admission: entry,
        departure_date: output,
        total_price: countDays(entry, output) * price,
      };
      const getData = async (id) => {
        try {
          const response = await axios.post(
            `http://localhost:3001/${id}/booking`,
            formData
          );
          return response.data;
        } catch (error) {
          console.error(error.message);
        }
      };

  function handleSubmit(e) {
    e.preventDefault();
    getData(id);
}



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fecha de entrada:</label>
        <input
          type="date"
          value={entry}
          min={moment().format("YYYY-MM-DD")}
          onChange={(e) => setEntry(e.target.value)}
        />
      </div>
      <div>
        <label>Fecha de salida:</label>
        <input
          type="date"
          value={output}
          min={moment(entry).add(1, "day").format("YYYY-MM-DD")}
          onChange={(e) => setOutput(e.target.value)}
        />
      </div>
      <div>
        <span>Precio por noche: {price}</span>
        <span>Total de noches: {countDays(entry, output)}</span>
        <span>Total a pagar: {countDays(entry, output) * price}</span>
      </div>
      <div>
        <button
          type="submit"
        >Reservar</button>
      </div>
    </form>
  );
};

export default Payments;
