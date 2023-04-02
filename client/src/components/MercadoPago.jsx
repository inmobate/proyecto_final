// import React, { useState } from "react";
import axios from "axios";

function MercadoPago({ id }) {
//   const [orderData, setOrderData] = useState(null);

  const getData = async (id) => {
    try {
      const response = await axios.post(`http://localhost:3001/orderPago/${id}`);
    //   setOrderData(response.data); 
    // Actualizar el estado con la respuesta
    console.log(response.data)
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <button onClick={() => getData(id)}>Reserva</button>
      {/* {orderData && (
        <div>
          <p>Información de la orden:</p>
          <p>ID: {orderData.id}</p>
          <p>Descripción: {orderData.descripcion}</p>
          <p>Monto: {orderData.monto}</p>
        </div>
      )} */}
    </div>
  );
}

export default MercadoPago;
